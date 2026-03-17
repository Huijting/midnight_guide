import urllib.request
import re

req = urllib.request.Request('https://www.wowhead.com/search?q=eye+beam', headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
try:
    res = urllib.request.urlopen(req)
    html = res.read().decode('utf-8')
    # Wowhead search often redirects directly to the spell page if it's an exact match
    # Let's check the final URL
    final_url = res.geturl()
    print("Final URL:", final_url)
    
    match = re.search(r'href="/spell=(\d+)/[^"]+"', html)
    if match:
        print('Found ID in HTML:', match.group(1))
    else:
        print('No match in HTML')
except Exception as e:
    print(e)

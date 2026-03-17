import urllib.request
import re

req = urllib.request.Request('https://www.wowhead.com/spells/name:eye+beam?xml', headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
try:
    res = urllib.request.urlopen(req)
    html = res.read().decode('utf-8')
    print("Content:", html[:200])
except Exception as e:
    print(e)

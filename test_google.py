from googlesearch import search
import re

try:
    results = list(search('site:wowhead.com/spell "Eye Beam"', num_results=3))
    print(results)
    for r in results:
        m = re.search(r'wowhead\.com/spell=(\d+)', r)
        if m:
            print("Found ID:", m.group(1))
            break
except Exception as e:
    print(e)

import os
import re
import json
import time
from duckduckgo_search import DDGS

# 1. Extract all spell names
spell_names = set()
spell_regex = re.compile(r"spell:\s*['\"]([^'\"]+)['\"]")

for root, dirs, files in os.walk('data/specs'):
    for file in files:
        if file.endswith('.js'):
            with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                content = f.read()
                matches = spell_regex.findall(content)
                for m in matches:
                    name = re.sub(r'\s*\(.*?\)', '', m).strip()
                    if name:
                        spell_names.add(name)

# 2. Search for IDs
spell_ids = {}
if os.path.exists('spell_ids.json'):
    with open('spell_ids.json', 'r', encoding='utf-8') as f:
        spell_ids = json.load(f)

ddgs = DDGS()
print(f"Total spells to process: {len(spell_names)}")

count = 0
for name in sorted(spell_names):
    if name in spell_ids:
        continue
        
    try:
        results = list(ddgs.text(f'site:wowhead.com/spell "{name}"', max_results=3))
        found = False
        for r in results:
            url = r.get('href', '')
            match = re.search(r'wowhead\.com/spell=(\d+)', url)
            if match:
                spell_ids[name] = match.group(1)
                print(f"Found ID for {name}: {match.group(1)}")
                found = True
                break
        if not found:
            print(f"No ID found for {name}")
            spell_ids[name] = None
    except Exception as e:
        print(f"Error searching for {name}: {e}")
        time.sleep(2) # Backoff on error
        
    count += 1
    if count % 10 == 0:
        with open('spell_ids.json', 'w', encoding='utf-8') as f:
            json.dump(spell_ids, f, indent=2)
        time.sleep(1) # Be nice to DDG

with open('spell_ids.json', 'w', encoding='utf-8') as f:
    json.dump(spell_ids, f, indent=2)
    
print("Finished collecting spell IDs!")

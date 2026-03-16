import re

with open('js/app.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Update version
js = js.replace('const VERSION = "v7.7";', 'const VERSION = "v1.0";')
js = js.replace('const VERSION_DATE = "2026-03-15";', 'const VERSION_DATE = "2026-03-16";')

# Update credits
js = js.replace('Inchy & Claudy', 'Inchy & Gemma')

with open('js/app.js', 'w', encoding='utf-8', newline='\n') as f:
    f.write(js)

print("Updated version and credits in js/app.js")

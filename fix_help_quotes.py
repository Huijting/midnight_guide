import re

with open('data/help.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Fix the unescaped single quotes
js = js.replace("'Modern Dark Gaming' thema", "\\'Modern Dark Gaming\\' thema")
js = js.replace("'Modern Dark Gaming' theme", "\\'Modern Dark Gaming\\' theme")
js = js.replace("'Modern Dark Gaming' tema", "\\'Modern Dark Gaming\\' tema")

with open('data/help.js', 'w', encoding='utf-8', newline='\n') as f:
    f.write(js)

print("Fixed quotes in help.js")

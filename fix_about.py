import re

with open('js/ui.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Change fetch URL for README.md to local path
js = js.replace("fetch('https://raw.githubusercontent.com/Huijting/midnight_guide/main/README.md')", "fetch('README.md')")

with open('js/ui.js', 'w', encoding='utf-8', newline='\n') as f:
    f.write(js)

print("Updated fetch URL in js/ui.js")

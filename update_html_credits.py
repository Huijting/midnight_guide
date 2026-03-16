import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Update credits in HTML
html = html.replace('Inchy & Claudy', 'Inchy & Gemma')
html = html.replace('<strong>Claudy</strong> &amp; <strong>Inchy</strong>', '<strong>Gemma</strong> &amp; <strong>Inchy</strong>')

with open('index.html', 'w', encoding='utf-8', newline='\n') as f:
    f.write(html)

print("Updated credits in index.html")

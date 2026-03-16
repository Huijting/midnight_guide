import re

with open('js/ui.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Update renderAboutContent to fetch the correct README based on language
pattern = r"fetch\('README\.md'\)"
replacement = """
    let readmeFile = 'README.md';
    if (lang === 'en') readmeFile = 'README_en.md';
    if (lang === 'da') readmeFile = 'README_da.md';
    fetch(readmeFile)
"""

js = js.replace("fetch('README.md')", replacement.strip())

with open('js/ui.js', 'w', encoding='utf-8', newline='\n') as f:
    f.write(js)

print("Updated ui.js to fetch localized README")

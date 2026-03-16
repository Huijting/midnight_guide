import re

with open('data/help.js', 'r', encoding='utf-8') as f:
    js = f.read()

def replace_text_dquotes(match):
    content = match.group(1)
    # Escape backticks
    content = content.replace('`', '\\`')
    # Unescape double quotes if they were escaped
    content = content.replace('\\"', '"')
    return f"text:`{content}`"

js = re.sub(r'text:\s*"(.*?)"(?=\s*\}|\s*,)', replace_text_dquotes, js, flags=re.DOTALL)

with open('data/help.js', 'w', encoding='utf-8', newline='\n') as f:
    f.write(js)

print("Converted help.js double-quoted text fields to backticks")

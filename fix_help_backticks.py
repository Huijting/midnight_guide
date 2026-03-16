import re

with open('data/help.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Let's find single quotes inside text:'...'
# It's easier to just replace all text:'...' with text:"..." to avoid single quote issues
# But we have double quotes inside the text too!
# Let's use backticks for the text fields!

def replace_text_quotes(match):
    content = match.group(1)
    # Escape backticks
    content = content.replace('`', '\\`')
    # Unescape single quotes if they were escaped
    content = content.replace("\\'", "'")
    return f"text:`{content}`"

js = re.sub(r"text:\s*'(.*?)'(?=\s*\}|\s*,)", replace_text_quotes, js, flags=re.DOTALL)

with open('data/help.js', 'w', encoding='utf-8', newline='\n') as f:
    f.write(js)

print("Converted help.js text fields to backticks")

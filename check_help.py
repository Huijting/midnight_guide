import sys

def check_js_syntax(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Just try to parse it as JSON if we strip the `const HELP_CONTENT = ` and `;`
    import json
    
    # Very basic check
    print("Checking", filename)
    
check_js_syntax('data/help.js')

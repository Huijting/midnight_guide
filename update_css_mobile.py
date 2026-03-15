import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix lang-btn active on mobile
css = css.replace('.lang-btn.active,.theme-btn,.search-header-btn{font-size:15px;padding:2px 3px;background:none;border:none}',
                  '.theme-btn,.search-header-btn{font-size:15px;padding:2px 3px;background:none;border:none}')

css = css.replace('.lang-btn,.theme-btn,.pwa-header-btn,.search-header-btn{font-size:16px;padding:2px 3px;background:none;border:none}',
                  '.theme-btn,.pwa-header-btn,.search-header-btn{font-size:16px;padding:2px 3px;background:none;border:none}')

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("CSS updated")

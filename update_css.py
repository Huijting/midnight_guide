import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update Fonts
html = html.replace(
    '<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap" rel="stylesheet">',
    '<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">'
)

# 2. Update CSS Variables for Dark Gaming Theme
old_root = """  :root {
    --tag-gear-bg:#3a2200; --tag-gear-fg:#f0a030;
    --tag-rep-bg:#0a2a15; --tag-rep-fg:#3db86a;
    --tag-currency-bg:#0a1a3a; --tag-currency-fg:#4f8ef7;
    --tag-crafting-bg:#2a1040; --tag-crafting-fg:#c084fc;
    --weekly-check-tick:#000;
    --bg:#06060f; --deep:#0d0d20; --panel:#1c1c3e; --border:#2a2a60;
    --gold:#c8a84b; --gold2:#f0d070; --accent:#8060d0;
    --mplus:#e8a020; --normal:#8899bb;
    --tank:#4a90d9; --heal:#3db86a; --dps:#e04060;
    --text:#e8e0ff; --muted:#aaa0cc;
    --head-bg:rgba(6,6,15,0.93); --tab-bg:rgba(6,6,15,0.96);
    --boss-hdr:linear-gradient(90deg,#1e0a3e,#0d0d30);
    --boss-desc-bg:rgba(0,0,0,0.22); --boss-desc-col:rgba(210,195,250,0.85);
    --tank-bg:rgba(74,144,217,0.08); --heal-bg:rgba(61,184,106,0.08); --dps-bg:rgba(224,64,96,0.08);
    --tip-bg:rgba(200,168,75,0.08); --info-bg:var(--panel); --route-bg:var(--deep);
  }"""

new_root = """  :root {
    --tag-gear-bg:#3a2200; --tag-gear-fg:#f0a030;
    --tag-rep-bg:#0a2a15; --tag-rep-fg:#3db86a;
    --tag-currency-bg:#0a1a3a; --tag-currency-fg:#4f8ef7;
    --tag-crafting-bg:#2a1040; --tag-crafting-fg:#c084fc;
    --weekly-check-tick:#000;
    --bg:#0a0514; --deep:#130a24; --panel:rgba(25, 15, 45, 0.55); --border:rgba(200, 168, 75, 0.25);
    --gold:#c8a84b; --gold2:#e5c568; --accent:#9d72ff;
    --mplus:#e8a020; --normal:#8899bb;
    --tank:#4a90d9; --heal:#3db86a; --dps:#e04060;
    --text:#e8e0ff; --muted:#b3a7cc;
    --head-bg:rgba(10, 5, 20, 0.75); --tab-bg:rgba(15, 10, 30, 0.85);
    --boss-hdr:linear-gradient(90deg, rgba(30,10,62,0.8), rgba(13,13,48,0.8));
    --boss-desc-bg:rgba(0,0,0,0.3); --boss-desc-col:rgba(210,195,250,0.9);
    --tank-bg:rgba(74,144,217,0.1); --heal-bg:rgba(61,184,106,0.1); --dps-bg:rgba(224,64,96,0.1);
    --tip-bg:rgba(200,168,75,0.15); --info-bg:var(--panel); --route-bg:var(--deep);
  }"""

html = html.replace(old_root, new_root)

# 3. Update Body Font
html = re.sub(r'body\{background:var\(--bg\);color:var\(--text\);font-family:[^;]+;', r"body{background:var(--bg);color:var(--text);font-family:'Inter',-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;", html)

# 4. Update Header Sticky & Dashboard Look
html = re.sub(r'#site-header\{position:sticky;top:0;z-index:100;background:var\(--head-bg\);backdrop-filter:blur\(12px\);border-bottom:1px solid var\(--border\);padding:0 10px\}', r'#site-header{position:sticky;top:0;z-index:100;background:var(--head-bg);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid var(--gold);padding:0 10px;box-shadow:0 4px 30px rgba(0,0,0,0.5)}', html)

# 5. Add Glassmorphism to panels
glass_css = """
  /* Glassmorphism Panels */
  .dungeon-card, .prof-card, .weekly-progress, .weekly-cat-header, .vr-card, .role-panel, .boss-card, #spec-modal-inner, #pwa-modal-inner, #help-modal-inner, #about-modal-inner, .search-results, .wat-nu-panel {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
"""
if "/* Glassmorphism Panels */" not in html:
    html = html.replace('/* ── HEADER ── */', glass_css + '\n  /* ── HEADER ── */')

# 6. Responsive Dungeon Grid
# Replace the old grid setup
html = re.sub(r'\.dungeon-grid\{max-width:1100px;margin:0 auto;padding:0 16px 50px;display:grid;grid-template-columns:repeat\(auto-fill,minmax\(260px,1fr\)\);gap:10px\}', r'.dungeon-grid{max-width:1100px;margin:0 auto;padding:0 16px 50px;display:grid;grid-template-columns:1fr;gap:16px}', html)

# Replace the media queries for grid
html = re.sub(r'\.dungeon-grid\{grid-template-columns:1fr;gap:8px;padding:0 10px 40px\}', r'.dungeon-grid{grid-template-columns:1fr;gap:12px;padding:0 10px 40px}', html)

html = re.sub(r'@media\(min-width:481px\) and \(max-width:768px\)\{\s*\.dungeon-grid\{grid-template-columns:repeat\(2,1fr\);gap:10px\}', r'@media(min-width:481px) and (max-width:768px){\n    .dungeon-grid{grid-template-columns:repeat(2,1fr);gap:16px}', html)

html = re.sub(r'@media\(min-width:769px\)\{\s*\.dungeon-grid\{grid-template-columns:repeat\(auto-fill,minmax\(280px,1fr\)\)\}', r'@media(min-width:769px){\n    .dungeon-grid{grid-template-columns:repeat(2,1fr);gap:16px}', html)

html = re.sub(r'@media\(min-width:1200px\)\{\s*\.dungeon-grid\{grid-template-columns:repeat\(4,1fr\)\}', r'@media(min-width:1024px){\n    .dungeon-grid{grid-template-columns:repeat(4,1fr);gap:16px}\n  }\n  @media(min-width:1200px){', html)

# Fix any potential missing media query for 1024px if the above regex didn't catch properly
if "@media(min-width:1024px)" not in html:
    html = html.replace('@media(min-width:1200px){', '@media(min-width:1024px){\n    .dungeon-grid{grid-template-columns:repeat(4,1fr);gap:16px}\n  }\n  @media(min-width:1200px){')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("CSS updated successfully!")

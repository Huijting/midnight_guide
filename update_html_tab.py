import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Remove the old guide container from the bottom
old_guide_regex = r'\s*<!-- BEGIN LEATHERWORKING BEGINNER GUIDE -->.*?<!-- END LEATHERWORKING BEGINNER GUIDE -->'
html = re.sub(old_guide_regex, '', html, flags=re.DOTALL)

# 2. Add the new tab button
tab_btn_html = """
        <button class="pdet-tab" onclick="switchProfTab(this,'ptab-kpbronnen')">🗺️ KP</button>
        <button class="pdet-tab" id="pdet-tab-guide" onclick="switchProfTab(this,'ptab-guide')" style="display:none;">📖 Gids</button>
"""
html = html.replace('<button class="pdet-tab" onclick="switchProfTab(this,\'ptab-kpbronnen\')">🗺️ KP</button>', tab_btn_html.strip())

# 3. Add the new panel
panel_html = """
      <div class="pdet-panel" id="ptab-kpbronnen"></div>
      <div class="pdet-panel" id="ptab-guide">
        <div id="prof-guide-content" class="prof-guide-container" style="padding: 10px 0; color: var(--text);"></div>
      </div>
"""
html = html.replace('<div class="pdet-panel" id="ptab-kpbronnen"></div>', panel_html.strip())

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("HTML updated")

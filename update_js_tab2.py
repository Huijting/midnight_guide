import re

with open('js/app.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 2. Update showProf logic using regex
old_show_prof_logic = r"if\(id === 'leatherworking'\) \{ document\.getElementById\('lw-beginner-guide'\)\.style\.display = 'block';\s*renderLwGuide\(\); \} else \{ document\.getElementById\('lw-beginner-guide'\)\.style\.display = 'none'; \}"

new_show_prof_logic = """
    const guideTabBtn = document.getElementById('pdet-tab-guide');
    if (guideTabBtn) {
      if (id === 'leatherworking') {
        guideTabBtn.style.display = '';
        const guideTabLabels = { nl: '📖 Gids', en: '📖 Guide', da: '📖 Guide' };
        guideTabBtn.innerHTML = guideTabLabels[lang] || guideTabLabels.nl;
        renderLwGuide();
      } else {
        guideTabBtn.style.display = 'none';
        // If guide tab was active, switch back to trainer tab
        if (guideTabBtn.classList.contains('active')) {
          switchProfTab(document.querySelector('.pdet-tab[onclick*="ptab-trainer"]'), 'ptab-trainer');
        }
      }
    }
"""

js = re.sub(old_show_prof_logic, new_show_prof_logic, js)

with open('js/app.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("JS updated")

import re

with open('data/help.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Update version in help text
js = js.replace('v7.7', 'v1.0')
js = js.replace('v7.6', 'v0.9')
js = js.replace('v7.5', 'v0.8')
js = js.replace('v7.4', 'v0.7')
js = js.replace('v7.3', 'v0.6')
js = js.replace('v7.2', 'v0.5')
js = js.replace('v7.0', 'v0.4')

# Add Prey info to help text (NL)
nl_target = "{ icon:'dY?', title:'Raids',"
nl_replacement = "{ icon:'🎯', title:'Prey Systeem', text:'Een complete gids voor de nieuwe solo-endgame activiteit. Leer hoe je jachten start, voortgang opbouwt en de beste beloningen vrijspeelt.' },\n      { icon:'dY?', title:'Raids',"

# Add Prey info to help text (EN)
en_target = "{ icon:'dY?', title:'Raids',"
en_replacement = "{ icon:'🎯', title:'Prey System', text:'A complete guide for the new solo endgame activity. Learn how to start hunts, build progress and unlock the best rewards.' },\n      { icon:'dY?', title:'Raids',"

# Add Prey info to help text (DA)
da_target = "{ icon:'dY?', title:'Raids',"
da_replacement = "{ icon:'🎯', title:'Prey System', text:'En komplet guide til den nye solo endgame aktivitet. Lær hvordan du starter jagter, opbygger fremskridt og låser op for de bedste belønninger.' },\n      { icon:'dY?', title:'Raids',"

js = js.replace(nl_target, nl_replacement, 1) # Only first occurrence (NL)
js = js.replace(en_target, en_replacement, 1) # Only first occurrence (EN)
js = js.replace(da_target, da_replacement, 1) # Only first occurrence (DA)

# Update the changelog text for v1.0
nl_changelog = "<strong>v1.0</strong> — 🎯 Prey Systeem toegevoegd met unlock questline. 📖 Gids & KP tabs samengevoegd voor overzicht. 👤 Character tracking voor KP schatten toegevoegd. 🎨 Compleet nieuw 'Modern Dark Gaming' thema. 📱 Mobiele navigatie verbeterd. ⬆️ Back to top knop toegevoegd. 📋 Gekopieerd! notificaties."
en_changelog = "<strong>v1.0</strong> — 🎯 Prey System added with unlock questline. 📖 Guide & KP tabs merged for clarity. 👤 Character tracking for KP treasures added. 🎨 Completely new 'Modern Dark Gaming' theme. 📱 Mobile navigation improved. ⬆️ Back to top button added. 📋 Copied! notifications."
da_changelog = "<strong>v1.0</strong> — 🎯 Prey System tilføjet med unlock questline. 📖 Guide & KP faner slået sammen for overblik. 👤 Karakter tracking for KP skatte tilføjet. 🎨 Helt nyt 'Modern Dark Gaming' tema. 📱 Mobil navigation forbedret. ⬆️ Back to top knap tilføjet. 📋 Kopieret! notifikationer."

# We need to replace the old v7.7 changelog text
js = re.sub(r'<strong>v1\.0</strong>.*?<br><br><strong>v0\.9</strong>', f'{nl_changelog}<br><br><strong>v0.9</strong>', js, count=1)
js = re.sub(r'<strong>v1\.0</strong>.*?<br><br><strong>v0\.9</strong>', f'{en_changelog}<br><br><strong>v0.9</strong>', js, count=1)
js = re.sub(r'<strong>v1\.0</strong>.*?<br><br><strong>v0\.9</strong>', f'{da_changelog}<br><br><strong>v0.9</strong>', js, count=1)

with open('data/help.js', 'w', encoding='utf-8', newline='\n') as f:
    f.write(js)

print("Updated help.js")

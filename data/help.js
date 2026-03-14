// ============================================================
// HELP — WoW Midnight Guide handleiding
// Drietalig: NL / EN / DA
// Aanpassen? Alleen dit bestand wijzigen en pushen.
// ============================================================

const HELP_CONTENT = {

  nl: {
    title: '📖 Handleiding',
    intro: 'Welkom bij de WoW Midnight Guide! Hier lees je snel hoe alles werkt.',
    sections: [
      { icon:'⚔',  title:'Dungeons',         text:'Kies een dungeon uit de lijst. Je ziet per baas wat je moet doen als Tank 🛡, Healer 💚 of DPS ⚔. Tik op een rol om die te bekijken. Wil je de route zien? Tik op 🗺 Looproute.' },
      { icon:'🔨', title:'Professies',        text:'Kies een professie. Je ziet tabbladen voor Trainer, Specs, Items, Orders, 📋 KP Gids en 🗺️ KP Bronnen. De KP Gids legt uit hoe je je specialisatiepunten het beste besteedt.' },
      { icon:'🏰', title:'Raids', text:'De Raids-tab is bereikbaar via de 🏰 Raids kaart op het home-scherm of de Dungeons-tab. Season 1 heeft 3 raids: The Dreamrift (1 boss — Chimaerus), The Voidspire (6 bosses) en March on Quel\'Danas (2 bosses). Per boss zie je tactieken voor Tank 🛡, Healer 💚 en DPS ⚔.' },
      { icon:'📅', title:'Weekly Checklist',  text:'Alles wat je elke week kunt doen. Tik op een taak om hem af te vinken. Weet je niet waar je moet beginnen? Tik op ⚡ Wat doe ik eerst? — dan zie je de 3 makkelijkste open taken. De lijst reset elke woensdag automatisch.' },
      { icon:'🎯', title:'Specs',             text:'Kies je klasse en spec uit het overzicht — alle 13 klassen zijn beschikbaar met meerdere specs. Je krijgt 9 tabbladen per spec:\n⚡ Cheat Sheet — de rotatie in één oogopslag\n🔄 Rotatie — opener, single target en AoE uitgewerkt\n📊 Stats — welke stats prioriteit krijgen en waarom\n💀 Cooldowns — wanneer gebruik je wat\n💡 Tips — handige ezelsbruggetjes\n🖱️ Macro\'s — kant-en-klare macros, klik om te kopiëren\n🎯 Resource — hoe je resource werkt (Focus, Holy Power, Runes...)\n🧪 Consumables — beste flask, potion, food en augment rune\n\nBeschikbare klassen: Death Knight, Demon Hunter, Druid, Evoker, Hunter, Mage, Monk, Paladin, Priest, Rogue, Shaman, Warlock, Warrior' },
      { icon:'🧪', title:'Consumables',       text:'Onder het tabblad 🧪 Consumables vind je per spec de beste flask, potions, food en augment rune. Gebruik altijd een flask in M+ en raid — het maakt echt verschil!' },
      { icon:'🟢', title:'Moeilijkheid',      text:'🟢 Makkelijk — voor iedereen, ook beginners.\n🟡 Gemiddeld — beetje ervaring helpt.\n🔴 Uitdagend — voor gevorderde spelers.' },
      { icon:'🌍', title:'Taal wisselen',     text:'Tik bovenaan op 🇳🇱 NL, 🇬🇧 EN of 🇩🇰 DA. Alles wisselt direct mee.' },
      { icon:'📋', title:'/way coördinaten',  text:'Zie je een 📋 /way tekst staan? Tik erop om het te kopiëren en plak het in de WoW chat. Je hebt de TomTom addon nodig om de pijl te zien.' },
      { icon:'📱', title:'App installeren',   text:'Tik op het installeer-icoontje in je browser om de gids als app op te slaan. Dan werkt hij ook zonder internet!' },
      { icon:'📋', title:'Changelog', text:'<strong>v7.6</strong> — 🐉 Trash mob gids toegevoegd aan alle 12 dungeons (69 mobs met interrupt/dodge/purge tags). Alle bazen van alle 8 M+ dungeons grondig gecheckt en gecorrigeerd op Method.gg &amp; Icy Veins (o.a. Seranel Sunlash, Degentrius, Algeth\'ar Academy, Pit of Saron, Seat of the Triumvirate, Skyreach volledig herschreven).<br><br><strong>v7.5</strong> — 🏰 Raids sectie toegevoegd (The Dreamrift volledig uitgewerkt). ⚡ Affixes tab toegevoegd. Navigatie wrapping in 2 rijen op mobiel. Rotation fix (undefined teksten). Weekly Crafting Quest gecorrigeerd.<br><br><strong>v7.4</strong> — Talents tab (🌳) toegevoegd aan alle specs met links naar Icy Veins + Method.gg. Klassen alfabetisch gesorteerd. 8 spec-bestanden afgemaakt.<br><br><strong>v7.3</strong> — Alle /way coördinaten in Weeklies in-game geverifieerd en gecorrigeerd. KP Boom + KP Bronnen tabs toegevoegd aan Professies.<br><br><strong>v7.2</strong> — Specs sectie gelanceerd: 39 specs, 8 tabbladen per spec.<br><br><strong>v7.0</strong> — Profession KP-systeem compleet met alle 13 professies.' },
    ],
    close: '✕ Sluiten'
  },

  en: {
    title: '📖 Help Guide',
    intro: "Welcome to the WoW Midnight Guide! Here's a quick overview of how everything works.",
    sections: [
      { icon:'⚔',  title:'Dungeons',          text:"Choose a dungeon from the list. You'll see what to do per boss as Tank 🛡, Healer 💚 or DPS ⚔. Tap a role to view its tips. Want to see the route? Tap 🗺 Route Map." },
      { icon:'🔨', title:'Professions',        text:"Choose a profession. You'll see tabs for Trainer, Specs, Items, Orders, 📋 KP Guide and 🗺️ KP Sources. The KP Guide explains how to best spend your specialization points." },
      { icon:'🏰', title:'Raids', text:"Season 1 has 3 raids: The Dreamrift (1 boss — Chimaerus), The Voidspire (6 bosses) and March on Quel'Danas (2 bosses). Access raids via the 🏰 Raids card on the home screen or through the Dungeons tab. Each boss shows tactics for Tank 🛡, Healer 💚 and DPS ⚔." },
      { icon:'📅', title:'Weekly Checklist',   text:"Everything you can do each week. Tap a task to check it off. Not sure where to start? Tap ⚡ What should I do first? — it shows the 3 easiest open tasks. The list resets every Wednesday automatically." },
      { icon:'🎯', title:'Specs',              text:"Choose your class and spec from the overview — all 13 classes available with multiple specs. You get 9 tabs per spec:\n⚡ Cheat Sheet — the rotation at a glance\n🔄 Rotation — opener, single target and AoE worked out\n📊 Stats — which stats to prioritize and why\n💀 Cooldowns — when to use what\n💡 Tips — handy reminders\n🖱️ Macros — ready-made macros, click to copy\n🎯 Resource — how your resource works (Focus, Holy Power, Runes...)\n🧪 Consumables — best flask, potion, food and augment rune\n\nAvailable classes: Death Knight, Demon Hunter, Druid, Evoker, Hunter, Mage, Monk, Paladin, Priest, Rogue, Shaman, Warlock, Warrior" },
      { icon:'🧪', title:'Consumables',        text:'Under the 🧪 Consumables tab you will find the best flask, potions, food and augment rune per spec. Always use a flask in M+ and raid — it really makes a difference!' },
      { icon:'🟢', title:'Difficulty',         text:'🟢 Easy — for everyone, including beginners.\n🟡 Medium — a little experience helps.\n🔴 Challenging — for experienced players.' },
      { icon:'🌍', title:'Switching language', text:'Tap 🇳🇱 NL, 🇬🇧 EN or 🇩🇰 DA at the top. Everything switches instantly.' },
      { icon:'📋', title:'/way coordinates',   text:'See a 📋 /way text? Tap it to copy, then paste it in the WoW chat. You need the TomTom addon to see the arrow on screen.' },
      { icon:'📱', title:'Install as app',     text:'Tap the install icon in your browser to save the guide as an app. It will work offline too!' },
      { icon:'📋', title:'Changelog', text:'<strong>v7.6</strong> — 🐉 Trash mob guide added to all 12 dungeons (69 mobs with interrupt/dodge/purge tags). All bosses of all 8 M+ dungeons thoroughly verified and corrected against Method.gg &amp; Icy Veins (incl. Seranel Sunlash, Degentrius, Algeth\'ar Academy, Pit of Saron, Seat of the Triumvirate, Skyreach fully rewritten).<br><br><strong>v7.5</strong> — 🏰 Raids section added (The Dreamrift fully worked out). ⚡ Affixes tab added. Navigation wraps to 2 rows on mobile. Rotation fix (undefined text). Weekly Crafting Quest corrected.<br><br><strong>v7.4</strong> — Talents tab (🌳) added to all specs with links to Icy Veins + Method.gg. Classes sorted alphabetically. 8 spec files completed.<br><br><strong>v7.3</strong> — All /way coordinates in Weeklies verified in-game and corrected. KP Tree + KP Sources tabs added to Professions.<br><br><strong>v7.2</strong> — Specs section launched: 39 specs, 8 tabs per spec.<br><br><strong>v7.0</strong> — Profession KP system complete with all 13 professions.' },
    ],
    close: '✕ Close'
  },

  da: {
    title: '📖 Hjælpeguide',
    intro: 'Velkommen til WoW Midnight Guide! Her er en hurtig oversigt over, hvordan alt fungerer.',
    sections: [
      { icon:'⚔',  title:'Dungeons',          text:'Vælg en dungeon fra listen. Du ser hvad du skal gøre per boss som Tank 🛡, Healer 💚 eller DPS ⚔. Tryk på en rolle for at se tips. Vil du se ruten? Tryk på 🗺 Rutekort.' },
      { icon:'🔨', title:'Professioner',       text:'Vælg en profession. Du ser faner til Træner, Specs, Items, Ordrer, 📋 KP Guide og 🗺️ KP Kilder. KP Guiden forklarer, hvordan du bedst bruger dine specialiseringspunkter.' },
      { icon:'🏰', title:'Raids', text:'Sæson 1 har 3 raids: The Dreamrift (1 boss — Chimaerus), The Voidspire (6 bosser) og March on Quel\'Danas (2 bosser). Tilgå raids via 🏰 Raids-kortet på startskærmen eller via Dungeons-fanen. Hver boss viser taktikker for Tank 🛡, Healer 💚 og DPS ⚔.' },
      { icon:'📅', title:'Ugentlig Tjekliste', text:'Alt du kan gøre hver uge. Tryk på en opgave for at krydse den af. Ved ikke hvor du skal starte? Tryk på ⚡ Hvad skal jeg gøre først? — det viser de 3 nemmeste åbne opgaver. Listen nulstilles automatisk hver onsdag.' },
      { icon:'🎯', title:'Specs',              text:'Vælg din klasse og spec fra oversigten — alle 13 klasser er tilgængelige med flere specs. Du får 9 faner per spec:\n⚡ Snydeark — rotationen på et øjeblik\n🔄 Rotation — opener, single target og AoE udarbejdet\n📊 Stats — hvilke stats der prioriteres og hvorfor\n💀 Cooldowns — hvornår bruger du hvad\n💡 Tips — nyttige huskeremser\n🖱️ Makroer — færdige makroer, klik for at kopiere\n🎯 Ressource — hvordan din ressource fungerer (Focus, Holy Power, Runes...)\n🧪 Forbrug — bedste flask, potion, mad og augment rune\n\nTilgængelige klasser: Death Knight, Demon Hunter, Druid, Evoker, Hunter, Mage, Monk, Paladin, Priest, Rogue, Shaman, Warlock, Warrior' },
      { icon:'🧪', title:'Forbrug',            text:'Under fanen 🧪 Forbrug finder du den bedste flask, potions, mad og augment rune per spec. Brug altid en flask i M+ og raid — det gør virkelig en forskel!' },
      { icon:'🟢', title:'Sværhedsgrad',       text:'🟢 Let — for alle, også begyndere.\n🟡 Middel — lidt erfaring hjælper.\n🔴 Udfordrende — for erfarne spillere.' },
      { icon:'🌍', title:'Skift sprog',        text:'Tryk på 🇳🇱 NL, 🇬🇧 EN eller 🇩🇰 DA øverst. Alt skifter øjeblikkeligt.' },
      { icon:'📋', title:'/way koordinater',   text:'Ser du en 📋 /way tekst? Tryk for at kopiere og indsæt i WoW chat. Du skal bruge TomTom-addon for at se pilen.' },
      { icon:'📱', title:'Installér som app',  text:'Tryk på installationsikonet i din browser for at gemme guiden som app. Den virker også offline!' },
      { icon:'📋', title:'Changelog', text:'<strong>v7.6</strong> — 🐉 Trash mob-guide tilføjet til alle 12 dungeons (69 mobs med interrupt/dodge/purge tags). Alle bosser i alle 8 M+ dungeons grundigt kontrolleret og rettet mod Method.gg &amp; Icy Veins (bl.a. Seranel Sunlash, Degentrius, Algeth\'ar Academy, Pit of Saron, Seat of the Triumvirate, Skyreach fuldstændigt omskrevet).<br><br><strong>v7.5</strong> — 🏰 Raids-sektion tilføjet (The Dreamrift fuldt udarbejdet). ⚡ Affixes-fane tilføjet. Navigation folder til 2 rækker på mobil. Rotation-fix (undefined tekst). Ugentlig Crafting Quest korrigeret.<br><br><strong>v7.4</strong> — Talents-fane (🌳) tilføjet til alle specs med links til Icy Veins + Method.gg. Klasser sorteret alfabetisk. 8 spec-filer fuldført.<br><br><strong>v7.3</strong> — Alle /way koordinater i Weeklies verificeret i spillet og korrigeret. KP Træ + KP Kilder-faner tilføjet til Professioner.<br><br><strong>v7.2</strong> — Specs-sektion lanceret: 39 specs, 8 faner per spec.<br><br><strong>v7.0</strong> — Profession KP-system komplet med alle 13 professioner.' },
    ],
    close: '✕ Luk'
  },

};

// ============================================================
// HELP — WoW Midnight Guide handleiding
// Tweetalig: NL / EN
// Aanpassen? Alleen dit bestand wijzigen en pushen.
// ============================================================

const HELP_CONTENT = {

  nl: {
    title: '📖 Handleiding',
    intro: 'Welkom bij de WoW Midnight Guide! Hier lees je snel hoe alles werkt.',
    sections: [
      { icon:'⚔',  title:'Dungeons',         text:`Kies een dungeon uit de lijst. Je ziet per baas wat je moet doen als Tank 🛡, Healer 💚 of DPS ⚔. Tik op een rol om die te bekijken. Wil je de route zien? Tik op 🗺 Looproute.` },
      { icon:'🔨', title:'Professies',        text:`Kies een professie. Je ziet tabbladen voor Trainer, Specs, Items, Orders, 📋 KP Gids en 🗺️ KP Bronnen. De KP Gids legt uit hoe je je specialisatiepunten het beste besteedt.` },
      { icon:'🏰', title:'Raids', text:`Season 1 heeft 3 raids: The Dreamrift (1 boss — opent 17 mrt), The Voidspire (6 bosses — opent 17 mrt) en March on Quel'Danas (2 bosses — opent 31 mrt). De Voidspire en Dreamrift zijn nu volledig uitgewerkt met boss-tactieken per rol. March on Quel'Danas bevat het omni-tier token (Chiming Void Curio) en de Ashes of Belo'ren phoenixmount op Mythic.` },
      { icon:'📅', title:'Weekly Checklist',  text:`Alles wat je elke week kunt doen. Tik op een taak om hem af te vinken. Weet je niet waar je moet beginnen? Tik op ⚡ Wat doe ik eerst? — dan zie je de 3 makkelijkste open taken. De lijst reset elke woensdag automatisch.` },
      { icon:'💎', title:'Delves',             text:`Tik op een Delve-naam voor een kort overzicht (gimmick, gevaar, tip). Tik op de knop 📖 Volledige gids voor een complete stap-voor-stap walkthrough met events, boss-mechanieken en geheimen. Gebruik ← Terug om terug te gaan. Wissel taal met 🇳🇱 🇬🇧 bovenaan — alle Delve-content is beschikbaar in het Nederlands en Engels.` },
      { icon:'🎯', title:'Specs',             text:`Kies je klasse en spec uit het overzicht — alle 13 klassen zijn beschikbaar met meerdere specs. Je krijgt 9 tabbladen per spec:\n⚡ Cheat Sheet — de rotatie in één oogopslag\n🔄 Rotatie — opener, single target en AoE uitgewerkt\n📊 Stats — welke stats prioriteit krijgen en waarom\n💀 Cooldowns — wanneer gebruik je wat\n💡 Tips — handige ezelsbruggetjes\n🖱️ Macro's — kant-en-klare macros, klik om te kopiëren\n🎯 Resource — hoe je resource werkt (Focus, Holy Power, Runes...)\n🧪 Consumables — beste flask, potion, food en augment rune\n\nBeschikbare klassen: Death Knight, Demon Hunter, Druid, Evoker, Hunter, Mage, Monk, Paladin, Priest, Rogue, Shaman, Warlock, Warrior` },
      { icon:'🧪', title:'Consumables',       text:`Onder het tabblad 🧪 Consumables vind je per spec de beste flask, potions, food en augment rune. Gebruik altijd een flask in M+ en raid — het maakt echt verschil!` },
      { icon:'🟢', title:'Moeilijkheid',      text:`🟢 Makkelijk — voor iedereen, ook beginners.\n🟡 Gemiddeld — beetje ervaring helpt.\n🔴 Uitdagend — voor gevorderde spelers.` },
      { icon:'🌍', title:'Taal wisselen',     text:`Tik bovenaan op 🇳🇱 NL of 🇬🇧 EN. Alles wisselt direct mee.` },
      { icon:'📋', title:'/way coördinaten',  text:`Zie je een 📋 /way tekst staan? Tik erop om het te kopiëren en plak het in de WoW chat. Je hebt de TomTom addon nodig om de pijl te zien.` },
      { icon:'📱', title:'App installeren',   text:`Tik op het installeer-icoontje in je browser om de gids als app op te slaan. Dan werkt hij ook zonder internet!` },
      { icon:'📋', title:'Changelog', text:`<strong>v1.1</strong> — 💎 Delves: klik op een Delve-naam voor kort overzicht. 📖 Full Guide met events, boss-mechanieken en geheimen (NL/EN). Torment's Rise /way toegevoegd.<br><br><strong>v1.0</strong> — 🎯 Prey System toegevoegd met unlock questline. 📖 Guide & KP tabs samengevoegd. 👤 Karakter tracking voor KP schatten. 🎨 Nieuw 'Modern Dark Gaming' thema. 📱 Mobiele navigatie verbeterd. ⬆️ Back to top knop. 📋 Gekopieerd! notificaties.<br><br><strong>v0.9</strong> — 🐉 Trash mob gids toegevoegd aan alle 12 dungeons (69 mobs met interrupt/dodge/purge tags). Alle bazen van alle 8 M+ dungeons grondig gecheckt en gecorrigeerd op Method.gg &amp; Icy Veins (o.a. Seranel Sunlash, Degentrius, Algeth'ar Academy, Pit of Saron, Seat of the Triumvirate, Skyreach volledig herschreven).<br><br><strong>v0.8</strong> — 🏰 Raids sectie toegevoegd (The Dreamrift volledig uitgewerkt). ⚡ Affixes tab toegevoegd. Navigatie wrapping in 2 rijen op mobiel. Rotation fix (undefined teksten). Weekly Crafting Quest gecorrigeerd.<br><br><strong>v0.7</strong> — Talents tab (🌳) toegevoegd aan alle specs met links naar Icy Veins + Method.gg. Klassen alfabetisch gesorteerd. 8 spec-bestanden afgemaakt.<br><br><strong>v0.6</strong> — Alle /way coördinaten in Weeklies in-game geverifieerd en gecorrigeerd. KP Boom + KP Bronnen tabs toegevoegd aan Professies.<br><br><strong>v0.5</strong> — Specs sectie gelanceerd: 39 specs, 8 tabbladen per spec.<br><br><strong>v0.4</strong> — Profession KP-systeem compleet met alle 13 professies.` },
    ],
    close: '✕ Sluiten'
  },

  en: {
    title: '📖 Help Guide',
    intro: "Welcome to the WoW Midnight Guide! Here's a quick overview of how everything works.",
    sections: [
      { icon:'⚔',  title:'Dungeons',          text:`Choose a dungeon from the list. You'll see what to do per boss as Tank 🛡, Healer 💚 or DPS ⚔. Tap a role to view its tips. Want to see the route? Tap 🗺 Route Map.` },
      { icon:'🔨', title:'Professions',        text:`Choose a profession. You'll see tabs for Trainer, Specs, Items, Orders, 📋 KP Guide and 🗺️ KP Sources. The KP Guide explains how to best spend your specialization points.` },
      { icon:'🏰', title:'Raids', text:`Season 1 has 3 raids: The Dreamrift (1 boss — opens Mar 17), The Voidspire (6 bosses — opens Mar 17) and March on Quel'Danas (2 bosses — opens Mar 31). Voidspire and Dreamrift are now fully written with boss tactics per role. March on Quel'Danas contains the omni-tier token (Chiming Void Curio) and the Ashes of Belo'ren phoenix mount on Mythic.` },
      { icon:'📅', title:'Weekly Checklist',   text:`Everything you can do each week. Tap a task to check it off. Not sure where to start? Tap ⚡ What should I do first? — it shows the 3 easiest open tasks. The list resets every Wednesday automatically.` },
      { icon:'💎', title:'Delves',              text:`Tap a Delve name to open a short overview (main mechanic, biggest danger, pro-tip). Tap the 📖 Full Guide button for a complete step-by-step walkthrough with events, boss mechanics and secrets. Use ← Back to return to the short overview. Switch language with 🇳🇱 NL or 🇬🇧 EN at the top — all Delve content is available in Dutch and English.` },
      { icon:'🎯', title:'Specs',              text:`Choose your class and spec from the overview — all 13 classes available with multiple specs. You get 9 tabs per spec:\n⚡ Cheat Sheet — the rotation at a glance\n🔄 Rotation — opener, single target and AoE worked out\n📊 Stats — which stats to prioritize and why\n💀 Cooldowns — when to use what\n💡 Tips — handy reminders\n🖱️ Macros — ready-made macros, click to copy\n🎯 Resource — how your resource works (Focus, Holy Power, Runes...)\n🧪 Consumables — best flask, potion, food and augment rune\n\nAvailable classes: Death Knight, Demon Hunter, Druid, Evoker, Hunter, Mage, Monk, Paladin, Priest, Rogue, Shaman, Warlock, Warrior` },
      { icon:'🧪', title:'Consumables',        text:`Under the 🧪 Consumables tab you will find the best flask, potions, food and augment rune per spec. Always use a flask in M+ and raid — it really makes a difference!` },
      { icon:'🟢', title:'Difficulty',         text:`🟢 Easy — for everyone, including beginners.\n🟡 Medium — a little experience helps.\n🔴 Challenging — for experienced players.` },
      { icon:'🌍', title:'Switching language', text:`Tap 🇳🇱 NL or 🇬🇧 EN at the top. Everything switches instantly.` },
      { icon:'📋', title:'/way coordinates',   text:`See a 📋 /way text? Tap it to copy, then paste it in the WoW chat. You need the TomTom addon to see the arrow on screen.` },
      { icon:'📱', title:'Install as app',     text:`Tap the install icon in your browser to save the guide as an app. It will work offline too!` },
      { icon:'📋', title:'Changelog', text:`<strong>v1.1</strong> — 💎 Delves: click a Delve name for short overview. 📖 Full Guide with events, boss mechanics and secrets (EN/NL). Torment's Rise /way added.<br><br><strong>v1.0</strong> — 📖 Glossary added (16 terms explained for beginners). Glossary tab + inline gold tooltips in dungeon tips. Nysarra corrected: STAND IN the wound = YOU deal 300% more damage TO the boss. Nav tabs horizontally scrollable.<br><br><strong>v0.9</strong> — 🐉 Trash mob guide added to all 12 dungeons (69 mobs with interrupt/dodge/purge tags). All bosses of all 8 M+ dungeons thoroughly verified and corrected against Method.gg &amp; Icy Veins (incl. Seranel Sunlash, Degentrius, Algeth'ar Academy, Pit of Saron, Seat of the Triumvirate, Skyreach fully rewritten).<br><br><strong>v0.8</strong> — 🏰 Raids section added (The Dreamrift fully worked out). ⚡ Affixes tab added. Navigation wraps to 2 rows on mobile. Rotation fix (undefined text). Weekly Crafting Quest corrected.<br><br><strong>v0.7</strong> — Talents tab (🌳) added to all specs with links to Icy Veins + Method.gg. Classes sorted alphabetically. 8 spec files completed.<br><br><strong>v0.6</strong> — All /way coordinates in Weeklies verified in-game and corrected. KP Tree + KP Sources tabs added to Professions.<br><br><strong>v0.5</strong> — Specs section launched: 39 specs, 8 tabs per spec.<br><br><strong>v0.4</strong> — Profession KP system complete with all 13 professions.` },
    ],
    close: '✕ Close'
  }

};

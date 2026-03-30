// ============================================================
// HELP — WoW Midnight Guide handleiding
// Tweetalig: NL / EN
// Masterclass + community-termen; dungeontips in app zijn afgestemd op Icy Veins / Wowhead waar vermeld.
// ============================================================

const HELP_CONTENT = {

  nl: {
    title: '📖 Handleiding',
    intro: 'Welkom bij de WoW Midnight Guide! Kies hieronder een tab: overzicht, masterclass (met eigen Tank/Healer/DPS-tabs), of gedeelde termen.',
    tab_overview: 'Overzicht',
    tab_masterclass: 'Masterclass',
    masterclass_tabs_aria: 'Masterclass — kies rol',
    tab_community: 'Community-termen',
    masterclass_intro: 'Korte strategie per rol — gebruik samen met de dungeon-pagina (per boss) en de Woordenlijst. Boss-specifieke mechanics staan bij elke boss; dit zijn algemene principes.',
    sources_note: 'Seizoen 1 dungeon- en bossbeschrijvingen in deze app zijn waar mogelijk gecontroleerd tegen Icy Veins, Wowhead en Method.gg — zie ook de bronnen onderaan de Tank-gids (M+).',
    sections: [
      { icon:'⚔',  title:'Dungeons',         text:`Kies een dungeon uit de lijst. Per boss zie je drie rolkaarten: 🛡 Tank, 💊 Healer, ⚔ DPS. Tik op een icoon om die tips te tonen — gekleurde randen benadrukken tankbusters (blauw), dispel/groepsschade (groen/paars) en kicks/prioriteit (rood).\n\nRoute en trash: gebruik het tabblad Routeplanner — Kaart & route en (M+) Tank-gids met LoS, percent en interrupt-prio.` },
      { icon:'🔨', title:'Professies',        text:`Kies een professie. Je ziet tabbladen voor Trainer, Specs, Items, Orders, 📋 KP Gids en 🗺️ KP Bronnen. De KP Gids legt uit hoe je je specialisatiepunten het beste besteedt.` },
      { icon:'🏰', title:'Raids', text:`Season 1 heeft 3 raids: The Dreamrift (1 boss — opent 17 mrt), The Voidspire (6 bosses — opent 17 mrt) en March on Quel'Danas (2 bosses — opent 31 mrt). De Voidspire en Dreamrift zijn nu volledig uitgewerkt met boss-tactieken per rol. March on Quel'Danas bevat het omni-tier token (Chiming Void Curio) en de Ashes of Belo'ren phoenixmount op Mythic.` },
      { icon:'📅', title:'Weekly Checklist',  text:`Alles wat je elke week kunt doen. Tik op een taak om hem af te vinken. Weet je niet waar je moet beginnen? Tik op ⚡ Wat doe ik eerst? — dan zie je de 3 makkelijkste open taken. De lijst reset elke woensdag automatisch.\n\n📦 Bountiful Delves: dagelijks max. 4 sleutels en Great Vault-vakjes (1/4–4/4) zijn account-breed — elke rol deelt dezelfde voortgang. Markeer ze op de 💎 Delves-tab (zelfde vakjes als hier waar van toepassing).` },
      { icon:'💎', title:'Delves',             text:`Tik op een Delve-naam voor een kort overzicht (gimmick, gevaar, tip). Tik op de knop 📖 Volledige gids voor een complete stap-voor-stap walkthrough met events, boss-mechanieken en geheimen. Gebruik ← Terug om terug te gaan. Wissel taal met 🇳🇱 🇬🇧 bovenaan — alle Delve-content is beschikbaar in het Nederlands en Engels.\n\nBountiful (4/4) en vault-progress gelden voor alle rollen op je account.` },
      { icon:'🎯', title:'Specs',             text:`Kies je klasse en spec uit het overzicht — alle 13 klassen zijn beschikbaar met meerdere specs. Je krijgt 9 tabbladen per spec:\n⚡ Cheat Sheet — de rotatie in één oogopslag\n🔄 Rotatie — opener, single target en AoE uitgewerkt\n📊 Stats — welke stats prioriteit krijgen en waarom\n💀 Cooldowns — wanneer gebruik je wat\n💡 Tips — handige ezelsbruggetjes\n🖱️ Macro's — kant-en-klare macros, klik om te kopiëren\n🎯 Resource — hoe je resource werkt (Focus, Holy Power, Runes...)\n🧪 Consumables — beste flask, potion, food en augment rune\n\nBeschikbare klassen: Death Knight, Demon Hunter, Druid, Evoker, Hunter, Mage, Monk, Paladin, Priest, Rogue, Shaman, Warlock, Warrior` },
      { icon:'🧪', title:'Consumables',       text:`Onder het tabblad 🧪 Consumables vind je per spec de beste flask, potions, food en augment rune. Gebruik altijd een flask in M+ en raid — het maakt echt verschil!` },
      { icon:'🟢', title:'Moeilijkheid',      text:`🟢 Makkelijk — voor iedereen, ook beginners.\n🟡 Gemiddeld — beetje ervaring helpt.\n🔴 Uitdagend — voor gevorderde spelers.` },
      { icon:'🌍', title:'Taal wisselen',     text:`Tik bovenaan op 🇳🇱 NL of 🇬🇧 EN. Alles wisselt direct mee.` },
      { icon:'📋', title:'/way coördinaten',  text:`Zie je een 📋 /way tekst staan? Tik erop om het te kopiëren en plak het in de WoW chat. Je hebt de TomTom addon nodig om de pijl te zien.` },
      { icon:'📱', title:'App installeren',   text:`Tik op het installeer-icoontje in je browser om de gids als app op te slaan. Dan werkt hij ook zonder internet!` },
      { icon:'📋', title:'Changelog', text:`<strong>v3.6.15 (app)</strong> — 🎯 Prey: S1-beloningentabel uit JSON + 4 hunts/week Great Vault-tip. 💎 Delves: Tier 8 / Trovehunter ilvls mrt 2026. ⚙️ GitHub: workflow <code>fetch-eu-daily-json</code> — <code>prey-today.json</code> + <code>bountiful-today.json</code> tegelijk (zelfde retry-rooster als voorheen). Zie <strong>Over deze app</strong>.<br><br><strong>v3.6.14 (app)</strong> — 💎 Delves: EU Bountiful-dag dynamisch in de header; oude repo-json → weekrooster + waarschuwing. Mobiel: zichtbare sleutel naast sleutel-uitleg. Zie ook <strong>Over deze app</strong> voor de volledige lijst.<br><br><strong>v1.4</strong> — Handleiding met tabs + masterclass per rol. Rol-UI met visuele cues. Delves: Bountiful voor alle rollen + rol-suggesties waar van toepassing.<br><br><strong>v1.1</strong> — 💎 Delves: klik op een Delve-naam voor kort overzicht. 📖 Full Guide met events, boss-mechanieken en geheimen (NL/EN). Torment's Rise /way toegevoegd.<br><br><strong>v1.0</strong> — 🎯 Prey System toegevoegd met unlock questline. 📖 Guide & KP tabs samengevoegd. 👤 Karakter tracking voor KP schatten. 🎨 Nieuw 'Modern Dark Gaming' thema. 📱 Mobiele navigatie verbeterd. ⬆️ Back to top knop. 📋 Gekopieerd! notificaties.` },
    ],
    masterclass: {
      tank: {
        title: '🛡️ Tank',
        body: `**Route & positionering** — Houd de routekaart en Tank-gids naast elkaar: trek casters met **LoS**, plan **percent/count** zodat je niet te weinig of te veel trash doet, en gebruik **snap-points** waar de route dat aangeeft voor strakke packs.\n\n**Tank Busters** — Grote boss- of add-stomps (blauw gemarkeerd in tips): plan **active mitigation** of een sterke defensive vóór de cast; communiceer met je healer.\n\n**LoS & pulls** — Breek zicht om ranged naar jou te laten bewegen; let op dat de groep niet onverwacht in frontals staat.\n\n**Percent / Count** — Vul de dungeon-meter gecontroleerd; bij twijfel vergelijk met de trash-tabel onder Route.`
      },
      heal: {
        title: '💊 Healer',
        body: `**Dispel-prioriteit** — Magische curses/poisons en gevaarlijke magische debuffs eerst (paars/groen in tips waar herkenbaar); sommige bosses vereisen purge op de vijand — dat is vaak een DPS/hunter-taak, maar jij coördineert.\n\n**AoE-healing checks** — Fases met zware groepsschade of ticking aura: spaar cooldowns (barkskin-achtige externals helpen de tank); let op stack/spread-callouts in de tips.\n\n**Mana** — Langere bossfights en chain-pulls: drink tussen packs waar veilig; gebruik efficiënte heals tijdens lichte schade zodat je voor burst-fases vol mana hebt.`
      },
      dps: {
        title: '⚔️ DPS',
        body: `**Burst windows** — Bloodlust en boss-kwetsbaarheid (zie tips): align cooldowns; verspil geen grote CDs vlak vóór movement of immune-fasen.\n\n**Kick rotation** — Rode accenten in tips: vaste interrupt-rotatie op gevaarlijke casts; mis je een kick op een wipe-mechanic, spreek het direct af.\n\n**Mechanics > parse** — Adds, shields en soak-vakjes gaan voor damage op de boss tenzij de tactiek anders zegt; dood eerst wat de groep doodmaakt.`
      }
    },
    community_title: '📚 Community-termen (Woordenlijst)',
    community_intro: 'Deze termen staan ook in de tab **Woordenlijst** en verschijnen onderstreept met uitleg in route- en tank-teksten:',
    community_terms: `• **LoS (Line of Sight)** — Uit zicht gaan om pulls te sturen.\n• **Kiting** — Vijanden op afstand houden terwijl je beweegt.\n• **Snap-points** — Plekken waar packs strak trekken.\n• **Percent / Count** — Trash voor dungeon-voortgang.\n• **Tank Buster** — Enorme tankklap, defensive klaar.\n• **Affix-prioriteit** — Extra gevaar door affixes zoals Fortified.\n• Plus: Interrupt, Soak, Frontal, DoT, Dispel, Bloodlust, enz.`,
    close: '✕ Sluiten'
  },

  en: {
    title: '📖 Help Guide',
    intro: 'Welcome to the WoW Midnight Guide! Pick a tab below: overview, masterclass (with its own Tank/Healer/DPS tabs), or shared glossary terms.',
    tab_overview: 'Overview',
    tab_masterclass: 'Masterclass',
    masterclass_tabs_aria: 'Masterclass — pick a role',
    tab_community: 'Community terms',
    masterclass_intro: 'Short strategy per role — use together with each dungeon page (per boss) and the Glossary. Boss-specific mechanics are on each boss; these are general principles.',
    sources_note: 'Season 1 dungeon and boss write-ups in this app are checked against Icy Veins, Wowhead and Method.gg where noted — see sources under the M+ Tank guide footer.',
    sections: [
      { icon:'⚔',  title:'Dungeons',          text:`Choose a dungeon from the list. Each boss has three role cards: 🛡 Tank, 💊 Healer, ⚔ DPS. Tap an icon to show those tips — colored borders highlight tank busters (blue), dispel/group damage (green/purple), and kicks/priority (red).\n\nRoute and trash: use the Route tab — Map & route and (M+) Tank guide with LoS, percent and interrupt priority.` },
      { icon:'🔨', title:'Professions',        text:`Choose a profession. You'll see tabs for Trainer, Specs, Items, Orders, 📋 KP Guide and 🗺️ KP Sources. The KP Guide explains how to best spend your specialization points.` },
      { icon:'🏰', title:'Raids', text:`Season 1 has 3 raids: The Dreamrift (1 boss — opens Mar 17), The Voidspire (6 bosses — opens Mar 17) and March on Quel'Danas (2 bosses — opens Mar 31). Voidspire and Dreamrift are now fully written with boss tactics per role. March on Quel'Danas contains the omni-tier token (Chiming Void Curio) and the Ashes of Belo'ren phoenix mount on Mythic.` },
      { icon:'📅', title:'Weekly Checklist',   text:`Everything you can do each week. Tap a task to check it off. Not sure where to start? Tap ⚡ What should I do first? — it shows the 3 easiest open tasks. The list resets every Wednesday automatically.\n\n📦 Bountiful Delves: up to 4 daily keys and Great Vault slots (1/4–4/4) are account-wide — every role shares the same progress. Track them on the 💎 Delves tab (same boxes as here where applicable).` },
      { icon:'💎', title:'Delves',              text:`Tap a Delve name to open a short overview (main mechanic, biggest danger, pro-tip). Tap the 📖 Full Guide button for a complete step-by-step walkthrough with events, boss mechanics and secrets. Use ← Back to return to the short overview. Switch language with 🇳🇱 NL or 🇬🇧 EN at the top — all Delve content is available in Dutch and English.\n\nBountiful (4/4) and vault progress count for all roles on your account.` },
      { icon:'🎯', title:'Specs',              text:`Choose your class and spec from the overview — all 13 classes available with multiple specs. You get 9 tabs per spec:\n⚡ Cheat Sheet — the rotation at a glance\n🔄 Rotation — opener, single target and AoE worked out\n📊 Stats — which stats to prioritize and why\n💀 Cooldowns — when to use what\n💡 Tips — handy reminders\n🖱️ Macros — ready-made macros, click to copy\n🎯 Resource — how your resource works (Focus, Holy Power, Runes...)\n🧪 Consumables — best flask, potion, food and augment rune\n\nAvailable classes: Death Knight, Demon Hunter, Druid, Evoker, Hunter, Mage, Monk, Paladin, Priest, Rogue, Shaman, Warlock, Warrior` },
      { icon:'🧪', title:'Consumables',        text:`Under the 🧪 Consumables tab you will find the best flask, potions, food and augment rune per spec. Always use a flask in M+ and raid — it really makes a difference!` },
      { icon:'🟢', title:'Difficulty',         text:`🟢 Easy — for everyone, including beginners.\n🟡 Medium — a little experience helps.\n🔴 Challenging — for experienced players.` },
      { icon:'🌍', title:'Switching language', text:`Tap 🇳🇱 NL or 🇬🇧 EN at the top. Everything switches instantly.` },
      { icon:'📋', title:'/way coordinates',   text:`See a 📋 /way text? Tap it to copy, then paste it in the WoW chat. You need the TomTom addon to see the arrow on screen.` },
      { icon:'📱', title:'Install as app',     text:`Tap the install icon in your browser to save the guide as an app. It will work offline too!` },
      { icon:'📋', title:'Changelog', text:`<strong>v3.6.15 (app)</strong> — 🎯 Prey: Season 1 reward table from JSON + 4 hunts/week Great Vault tip. 💎 Delves: Tier 8 / Trovehunter ilvls Mar 2026. ⚙️ GitHub: <code>fetch-eu-daily-json</code> workflow — <code>prey-today.json</code> + <code>bountiful-today.json</code> in one run (same retry schedule as before). See <strong>About this app</strong>.<br><br><strong>v3.6.14 (app)</strong> — 💎 Delves: dynamic EU Bountiful day in the header; stale daily JSON falls back to the weekly rotation with a warning. Mobile: visible key next to key info. See <strong>About this app</strong> for the full changelog.<br><br><strong>v1.4</strong> — Help manual with tabs + per-role masterclass. Role UI with visual cues. Delves: Bountiful for all roles + role suggestions where applicable.<br><br><strong>v1.1</strong> — 💎 Delves: click a Delve name for short overview. 📖 Full Guide with events, boss mechanics and secrets (EN/NL). Torment's Rise /way added.<br><br><strong>v1.0</strong> — 📖 Glossary added (16 terms explained for beginners). Glossary tab + inline gold tooltips in dungeon tips. Nysarra corrected: STAND IN the wound = YOU deal 300% more damage TO the boss. Nav tabs horizontally scrollable.` },
    ],
    masterclass: {
      tank: {
        title: '🛡️ Tank',
        body: `**Route & positioning** — Keep the route map and Tank guide side by side: pull casters with **LoS**, plan **percent/count** so you don't skip or over-pull trash, and use **snap-points** where the route suggests for tight packs.\n\n**Tank busters** — Big boss or add slams (blue highlights in tips): plan **active mitigation** or a strong defensive before the cast; coordinate with your healer.\n\n**LoS & pulls** — Break line of sight to make ranged move to you; don't surprise the group with accidental frontals.\n\n**Percent / count** — Fill the dungeon gauge in a controlled way; compare with the trash table under Route if unsure.`
      },
      heal: {
        title: '💊 Healer',
        body: `**Dispel priority** — Dangerous magic debuffs first (purple/green cues in tips where applicable); some bosses need enemy purges — often a DPS job, but you coordinate.\n\n**AoE healing checks** — Heavy group damage or ticking auras: save cooldowns (externals help the tank); watch stack/spread callouts in tips.\n\n**Mana** — Long bosses and chain pulls: drink between packs when safe; heal efficiently during light damage so you enter burst phases with mana.`
      },
      dps: {
        title: '⚔️ DPS',
        body: `**Burst windows** — Bloodlust and boss vulnerability (see tips): line up cooldowns; don't waste major CDs right before movement or immunities.\n\n**Kick rotation** — Red highlights in tips: fixed interrupt order on dangerous casts; call missed kicks on wipe mechanics immediately.\n\n**Mechanics > parse** — Adds, shields and soaks beat boss damage unless tactics say otherwise; kill what kills the group first.`
      }
    },
    community_title: '📚 Community terms (Glossary)',
    community_intro: 'These terms are also on the **Glossary** tab and show as underlined hints in route and tank text:',
    community_terms: `• **LoS** — Break sight to shape pulls.\n• **Kiting** — Keep enemies at range while moving.\n• **Snap-points** — Spots to snap packs tight.\n• **Percent / count** — Trash for dungeon progress.\n• **Tank buster** — Huge tank hit — defensive ready.\n• **Affix priority** — Extra danger from affixes like Fortified.\n• Plus: Interrupt, Soak, Frontal, DoT, Dispel, Bloodlust, etc.`,
    close: '✕ Close'
  }

};

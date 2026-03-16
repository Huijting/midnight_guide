// ── VERSIE ──
const VERSION = "v7.7";
const VERSION_DATE = "2026-03-15";


// ═══════════════════════════════════════════════════════════════
// SPEC SELECTOR
// ═══════════════════════════════════════════════════════════════
const CLASSES = [
  { id:'deathknight', icon:'💀', name:{nl:'Death Knight', en:'Death Knight', da:'Death Knight'},
    specs:[
      {id:'blood',  name:{nl:'Blood',  en:'Blood',  da:'Blood'},  role:'tank'},
      {id:'frost',  name:{nl:'Frost',  en:'Frost',  da:'Frost'},  role:'dps'},
      {id:'unholy', name:{nl:'Unholy', en:'Unholy', da:'Unholy'}, role:'dps'}
    ]},
  { id:'demonhunter', icon:'😈', name:{nl:'Demon Hunter', en:'Demon Hunter', da:'Demon Hunter'},
    specs:[
      {id:'havoc',    name:{nl:'Havoc',    en:'Havoc',    da:'Havoc'},    role:'dps'},
      {id:'vengeance',name:{nl:'Vengeance',en:'Vengeance',da:'Vengeance'},role:'tank'},
      {id:'devourer', name:{nl:'Devourer', en:'Devourer', da:'Devourer'}, role:'dps'}
    ]},
  { id:'druid', icon:'🐾', name:{nl:'Druid', en:'Druid', da:'Druid'},
    specs:[
      {id:'balance',     name:{nl:'Balance',     en:'Balance',     da:'Balance'},     role:'dps'},
      {id:'feral',       name:{nl:'Feral',        en:'Feral',       da:'Feral'},       role:'dps'},
      {id:'guardian',    name:{nl:'Guardian',     en:'Guardian',    da:'Guardian'},    role:'tank'},
      {id:'restoration', name:{nl:'Restauratie',  en:'Restoration', da:'Restauration'},role:'heal'}
    ]},
  { id:'evoker', icon:'🐉', name:{nl:'Evoker', en:'Evoker', da:'Evoker'},
    specs:[
      {id:'augmentation', name:{nl:'Augmentation', en:'Augmentation', da:'Augmentation'}, role:'dps'},
      {id:'devastation',  name:{nl:'Devastation',  en:'Devastation',  da:'Devastation'},  role:'dps'},
      {id:'preservation', name:{nl:'Preservation', en:'Preservation', da:'Preservation'}, role:'heal'}
    ]},
  { id:'hunter', icon:'🏹', name:{nl:'Hunter', en:'Hunter', da:'Jæger'},
    specs:[
      {id:'beastmastery',  name:{nl:'Beast Mastery',  en:'Beast Mastery',  da:'Beast Mastery'},  role:'dps'},
      {id:'marksmanship',  name:{nl:'Marksmanship',   en:'Marksmanship',   da:'Marksmanship'},   role:'dps'},
      {id:'survival',      name:{nl:'Survival',        en:'Survival',       da:'Survival'},       role:'dps'}
    ]},
  { id:'mage', icon:'🔮', name:{nl:'Mage', en:'Mage', da:'Magiker'},
    specs:[
      {id:'arcane', name:{nl:'Arcane', en:'Arcane', da:'Arcane'}, role:'dps'},
      {id:'fire',   name:{nl:'Fire',   en:'Fire',   da:'Fire'},   role:'dps'},
      {id:'frost',  name:{nl:'Frost',  en:'Frost',  da:'Frost'},  role:'dps'}
    ]},
  { id:'monk', icon:'☯️', name:{nl:'Monk', en:'Monk', da:'Munk'},
    specs:[
      {id:'brewmaster',  name:{nl:'Brewmaster',  en:'Brewmaster',  da:'Brewmaster'},  role:'tank'},
      {id:'mistweaver',  name:{nl:'Mistweaver',  en:'Mistweaver',  da:'Mistweaver'},  role:'heal'},
      {id:'windwalker',  name:{nl:'Windwalker',  en:'Windwalker',  da:'Windwalker'},  role:'dps'}
    ]},
  { id:'paladin', icon:'⚔️', name:{nl:'Paladin', en:'Paladin', da:'Paladin'},
    specs:[
      {id:'holy',       name:{nl:'Holy',       en:'Holy',       da:'Holy'},       role:'heal'},
      {id:'protection', name:{nl:'Protection', en:'Protection', da:'Protection'}, role:'tank'},
      {id:'retribution',name:{nl:'Retribution',en:'Retribution',da:'Retribution'},role:'dps'}
    ]},
  { id:'priest', icon:'✨', name:{nl:'Priest', en:'Priest', da:'Præst'},
    specs:[
      {id:'discipline', name:{nl:'Discipline', en:'Discipline', da:'Discipline'}, role:'heal'},
      {id:'holy',       name:{nl:'Holy',       en:'Holy',       da:'Holy'},       role:'heal'},
      {id:'shadow',     name:{nl:'Shadow',     en:'Shadow',     da:'Shadow'},     role:'dps'}
    ]},
  { id:'rogue', icon:'🗡️', name:{nl:'Rogue', en:'Rogue', da:'Skurk'},
    specs:[
      {id:'assassination',name:{nl:'Assassination',en:'Assassination',da:'Assassination'},role:'dps'},
      {id:'outlaw',       name:{nl:'Outlaw',       en:'Outlaw',       da:'Outlaw'},       role:'dps'},
      {id:'subtlety',     name:{nl:'Subtlety',     en:'Subtlety',     da:'Subtlety'},     role:'dps'}
    ]},
  { id:'shaman', icon:'⚡', name:{nl:'Shaman', en:'Shaman', da:'Shaman'},
    specs:[
      {id:'elemental',   name:{nl:'Elemental',   en:'Elemental',   da:'Elemental'},   role:'dps'},
      {id:'enhancement', name:{nl:'Enhancement', en:'Enhancement', da:'Enhancement'}, role:'dps'},
      {id:'restoration', name:{nl:'Restoration', en:'Restoration', da:'Restoration'}, role:'heal'}
    ]},
  { id:'warlock', icon:'🔥', name:{nl:'Warlock', en:'Warlock', da:'Troldmand'},
    specs:[
      {id:'affliction',  name:{nl:'Affliction',  en:'Affliction',  da:'Affliction'},  role:'dps'},
      {id:'demonology',  name:{nl:'Demonology',  en:'Demonology',  da:'Demonology'},  role:'dps'},
      {id:'destruction', name:{nl:'Destruction', en:'Destruction', da:'Destruction'}, role:'dps'}
    ]},
  { id:'warrior', icon:'🛡️', name:{nl:'Warrior', en:'Warrior', da:'Kriger'},
    specs:[
      {id:'arms',       name:{nl:'Arms',       en:'Arms',       da:'Arms'},       role:'dps'},
      {id:'fury',       name:{nl:'Fury',       en:'Fury',       da:'Fury'},       role:'dps'},
      {id:'protection', name:{nl:'Protection', en:'Protection', da:'Protection'}, role:'tank'}
    ]}
];

// Lust ability per class+spec combo
const LUST_ABILITY = {
  'shaman-elemental':    {nl:'Bloodlust',          en:'Bloodlust',          da:'Bloodlust'},
  'shaman-enhancement':  {nl:'Bloodlust',          en:'Bloodlust',          da:'Bloodlust'},
  'shaman-restoration':  {nl:'Bloodlust',          en:'Bloodlust',          da:'Bloodlust'},
  'mage-arcane':         {nl:'Time Warp',          en:'Time Warp',          da:'Time Warp'},
  'mage-fire':           {nl:'Time Warp',          en:'Time Warp',          da:'Time Warp'},
  'mage-frost':          {nl:'Time Warp',          en:'Time Warp',          da:'Time Warp'},
  'hunter-beastmastery': {nl:'Primal Rage',        en:'Primal Rage',        da:'Primal Rage'},
  'evoker-augmentation': {nl:'Fury of the Aspects',en:'Fury of the Aspects',da:'Fury of the Aspects'},
  'evoker-devastation':  {nl:'Fury of the Aspects',en:'Fury of the Aspects',da:'Fury of the Aspects'},
  'evoker-preservation': {nl:'Fury of the Aspects',en:'Fury of the Aspects',da:'Fury of the Aspects'}
};

// Get lust name for current spec
function getLustName() {
  const key = currentSpec ? currentSpec.classId + '-' + currentSpec.specId : null;
  if (key && LUST_ABILITY[key]) return LUST_ABILITY[key][lang] || 'Bloodlust';
  return 'Bloodlust';
}

// Replace 'Bloodlust' in a string with the correct ability name
function replaceLust(text) {
  const lust = getLustName();
  if (lust === 'Bloodlust') return text;
  return text.replace(/Bloodlust/g, lust);
}

// Spec UI strings per language
const SPEC_UI = {
  nl: { btn_no_spec:'Kies spec', btn_spec:'Spec: ', title:'Kies jouw spec', subtitle:'We passen spellnamen aan op jouw klasse', reset:'Spec wissen', role_tank:'Tank', role_heal:'Healer', role_dps:'DPS' },
  en: { btn_no_spec:'Choose spec', btn_spec:'Spec: ', title:'Choose your spec', subtitle:"We'll adjust spell names to match your class", reset:'Clear spec', role_tank:'Tank', role_heal:'Healer', role_dps:'DPS' },
  da: { btn_no_spec:'Vælg spec', btn_spec:'Spec: ', title:'Vælg din spec', subtitle:'Vi tilpasser stavningsnavne til din klasse', reset:'Ryd spec', role_tank:'Tank', role_heal:'Healer', role_dps:'DPS' }
};

let currentSpec = null;
try {
  const saved = localStorage.getItem('spec');
  if (saved) currentSpec = JSON.parse(saved);
} catch(e) {}

function saveSpec(classId, specId) {
  currentSpec = { classId, specId };
  localStorage.setItem('spec', JSON.stringify(currentSpec));
  updateSpecBtn();
  closeSpecModal();
  // Re-render current view to update lust names
  if (currentDungeon) renderDetail(currentDungeon);
}

function clearSpec() {
  currentSpec = null;
  localStorage.removeItem('spec');
  updateSpecBtn();
  closeSpecModal();
  if (currentDungeon) renderDetail(currentDungeon);
}

function updateSpecBtn() {
  const btn = document.getElementById('spec-btn');
  if (!btn) return;
  const ui = SPEC_UI[lang];
  if (currentSpec) {
    const cls = CLASSES.find(c => c.id === currentSpec.classId);
    const sp  = cls?.specs.find(s => s.id === currentSpec.specId);
    if (cls && sp) {
      btn.innerHTML = cls.icon + ' <span class="spec-btn-text">' + sp.name[lang] + '</span>';
      btn.style.color = 'var(--gold)';
      return;
    }
  }
  btn.innerHTML = '⚙ <span class="spec-btn-text">' + ui.btn_no_spec + '</span>';
  btn.style.color = 'var(--muted)';
}

function openSpecModal() {
  // Sluit about-modal als die open is
  document.getElementById('about-modal').classList.remove('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('spec-modal').classList.add('visible');
  renderSpecModal();
}

function closeSpecModal() {
  document.getElementById('spec-modal').classList.remove('visible');
  document.body.style.overflow = '';
}

function renderSpecModal() {
  const ui = SPEC_UI[lang];
  document.getElementById('spec-modal-title').textContent    = ui.title;
  document.getElementById('spec-modal-subtitle').textContent = ui.subtitle;
  document.getElementById('spec-reset-btn').textContent      = '× ' + ui.reset;

  const roleLabel = { tank: ui.role_tank, heal: ui.role_heal, dps: ui.role_dps };
  const roleColor = { tank: 'var(--tank)', heal: 'var(--heal)', dps: 'var(--dps)' };

  const grid = document.getElementById('spec-class-grid');
  grid.innerHTML = CLASSES.map(cls => {
    const specs = cls.specs.map(sp => {
      const active = currentSpec && currentSpec.classId === cls.id && currentSpec.specId === sp.id;
      return `<button class="spec-spec-btn${active?' spec-active':''}"
        style="${active?'border-color:var(--gold);color:var(--gold);':''}"
        onclick="saveSpec('${cls.id}','${sp.id}')">
        <span class="spec-role" style="color:${roleColor[sp.role]}">${roleLabel[sp.role]}</span>
        ${sp.name[lang]}
      </button>`;
    }).join('');
    return `<div class="spec-class-block">
      <div class="spec-class-name">${cls.icon} ${cls.name[lang]}</div>
      <div class="spec-specs-row">${specs}</div>
    </div>`;
  }).join('');
}


// Footer i18n
const FOOTER = {
  nl: {
    season: "WoW: Midnight — Seizoen 1",
    disclaimer: "Deze gids is een fan-project en heeft geen officiële band met Blizzard Entertainment. World of Warcraft en alle gerelateerde namen zijn handelsmerken van Blizzard Entertainment, Inc. Dungeon-informatie is gebaseerd op Icy Veins, Wowhead, Method en eigen ervaringen — altijd vatbaar voor verandering na patches.",
    sources: "Bronnen:"
  },
  en: {
    season: "WoW: Midnight — Season 1",
    disclaimer: "This guide is a fan project and is not affiliated with Blizzard Entertainment. World of Warcraft and all related names are trademarks of Blizzard Entertainment, Inc. Dungeon information is based on Icy Veins, Wowhead, Method and personal experience — always subject to change after patches.",
    sources: "Sources:"
  },
  da: {
    season: "WoW: Midnight — Sæson 1",
    disclaimer: "Denne guide er et fan-projekt og er ikke tilknyttet Blizzard Entertainment. World of Warcraft og alle relaterede navne er varemærker tilhørende Blizzard Entertainment, Inc. Dungeon-information er baseret på Icy Veins, Wowhead, Method og egne erfaringer — altid underlagt ændringer efter patches.",
    sources: "Kilder:"
  }
};

function updateFooter() {
  const vEl = document.getElementById('footer-version-nr');
  if (vEl) vEl.textContent = VERSION + ' — ' + VERSION_DATE;
  const f = FOOTER[lang];
  if (!f) return;
  const el_season = document.getElementById('footer-season');
  const el_disc   = document.getElementById('footer-disclaimer');
  const el_src    = document.getElementById('footer-sources-label');
  if (el_season) el_season.textContent = f.season;
  if (el_disc)   el_disc.textContent   = f.disclaimer;
  if (el_src)    el_src.textContent    = f.sources;
}

// ═══════════════════════════════════════════════════════════════
// UI STRINGS
// ═══════════════════════════════════════════════════════════════
const UI = {
  nl: {
    season_sub:   "DUNGEONS — SEIZOEN 1",
    eyebrow:      "World of Warcraft: Midnight — Seizoen 1",
    guide:        "Gids",
    hero_sub:     "Kies je dungeon — bazen, rollen & routeplanner",
    s1_section:   "⚔ Seizoen 1 Mythic+",
    norm_section: "📖 Alleen Normal",
    badge_mplus:  "⚔ SEIZOEN 1 M+",
    badge_normal: "📖 ALLEEN NORMAL",
    badge_raid:   "🏰 RAID",
    lbl_raid:     "🏰 Raids",
    lbl_glossary: "📖 Woordenlijst",
    glossary_title:"Woordenlijst",
    glossary_sub:  "WoW-begrippen uitgelegd voor beginners",
    glossary_intro:"Klik op een term om de uitleg te zien. Gouden woorden in de dungeon-tips zijn ook klikbaar!",
    tab_overview: "Overzicht",
    tab_bosses:   "Bazen",
    tab_route:    "Routeplanner",
    boss_label:   "BAAS",
    lbl_zone:     "ZONE",
    lbl_type:     "TYPE",
    lbl_unlock:   "ONTGRENDEL",
    lbl_bosses:   "AANTAL BAZEN",
    type_mplus:   "⚔ Mythic+ Seizoen 1",
    type_normal:  "📖 Alleen Normal",
    lust_moment:  "Moment",
    lust_explain: "Uitleg",
    lust_title:   "🔥 Bloodlust / Heroism Timing",
    route_sum:    "Samenvatting",
    route_diag:   "Schematische Route — Pull-volgorde",
    kg_section:   "Interactieve Routes — Keystone.guru",
    kg_text:      "Bekijk en importeer uitgebreide M+-routes op Keystone.guru. Gebruik de <strong>MDT (Mythic Dungeon Tools)</strong> addon in-game om routes te importeren.",
    kg_btn:       "🗺 Open routes op Keystone.guru →",
    vr_legend_trash: "Trash pull",
    vr_legend_boss:  "Baas",
    vr_legend_event: "Event/Buff",
    vr_legend_lust:  "Bloodlust",
    vr_label_trash:  "TRASH",
    vr_label_boss:   "BAAS",
    vr_label_event:  "EVENT",
    vr_label_lust:   "LUST",
    norm_note:    "Geen Keystone.guru route nodig — deze dungeon zit niet in de M+ rotatie. Bovenstaande pull-volgorde is voldoende.",
    trash_title:  "🐉 Belangrijke Trash Mobs",
    tag_int:      "Interrupt",
    tag_avoid:    "Dodge",
    tag_purge:    "Purge/Dispel",
    tag_stop:     "CC/Stop",
    tag_tank:     "Tank",
    back:         "← Terug",
    theme_light:  "☀️",
    theme_dark:   "🌙",
    ib_title:     "<strong>Installeer als app:</strong>",
    ib_android:   "<strong>Android</strong> — Chrome → menu (⋮) → \"Toevoegen aan startscherm\"",
    ib_ios:       "<strong>iPhone</strong> — Safari → deel (□↑) → \"Zet op beginscherm\"",
    about_btn:    "📖 Over deze app",
    help_btn:     "❓ Handleiding",
    tab_home: "🌙 Home", tab_dungeons: "⚔ Dungeons", tab_professions: "🔨 Professies", tab_weekly: "📅 Wekelijks", tab_affixes: "⚡ Affixes", tab_raids: "🏰 Raids", tab_specs: "🎯 Specs",
    feedback_btn: "💬 Feedback",
    feedback_title: "💬 Opbouwende kritiek",
    feedback_sub: "Klopt er iets niet? Ontbreekt er info? Laat het weten — we verbeteren de gids samen.",
    feedback_ph: "Bijv: de tier van Inscription klopt niet, of baas X mist een mechanic...",
    feedback_send: "📨 Verstuur via mail",
    feedback_gh: "🐙 Open GitHub issue",
    about_title:  "⚔ Over deze app",
    route_notice: "⚠️ Nog geen ideale route beschikbaar. Ken jij een goede route? <a href=\"https://github.com/Huijting/midnight_guide/issues/new\" target=\"_blank\" class=\"route-notice-link\">Stuur een GitHub Issue →</a>",
  },
  en: {
    season_sub:   "DUNGEONS — SEASON 1",
    eyebrow:      "World of Warcraft: Midnight — Season 1",
    guide:        "Guide",
    hero_sub:     "Choose your dungeon — bosses, roles & route planner",
    s1_section:   "⚔ Season 1 Mythic+",
    norm_section: "📖 Normal Only",
    badge_mplus:  "⚔ SEASON 1 M+",
    badge_normal: "📖 NORMAL ONLY",
    badge_raid:   "🏰 RAID",
    lbl_raid:     "🏰 Raids",
    lbl_glossary: "📖 Glossary",
    glossary_title:"Glossary",
    glossary_sub:  "WoW terms explained for beginners",
    glossary_intro:"Click a term to see its explanation. Gold words in dungeon tips are also clickable!",
    tab_overview: "Overview",
    tab_bosses:   "Bosses",
    tab_route:    "Route Planner",
    boss_label:   "BOSS",
    lbl_zone:     "ZONE",
    lbl_type:     "TYPE",
    lbl_unlock:   "UNLOCK",
    lbl_bosses:   "BOSSES",
    type_mplus:   "⚔ Mythic+ Season 1",
    type_normal:  "📖 Normal Only",
    lust_moment:  "Moment",
    lust_explain: "Notes",
    lust_title:   "🔥 Bloodlust / Heroism Timing",
    route_sum:    "Summary",
    route_diag:   "Route Diagram — Pull Order",
    kg_section:   "Interactive Routes — Keystone.guru",
    kg_text:      "View and import detailed M+ routes on Keystone.guru. Use the <strong>MDT (Mythic Dungeon Tools)</strong> addon in-game to import routes.",
    kg_btn:       "🗺 Open routes on Keystone.guru →",
    vr_legend_trash: "Trash pull",
    vr_legend_boss:  "Boss",
    vr_legend_event: "Event/Buff",
    vr_legend_lust:  "Bloodlust",
    vr_label_trash:  "TRASH",
    vr_label_boss:   "BOSS",
    vr_label_event:  "EVENT",
    vr_label_lust:   "LUST",
    norm_note:    "No Keystone.guru route needed — this dungeon is not in the M+ rotation. The pull order above is sufficient.",
    trash_title:  "🐉 Key Trash Mobs",
    tag_int:      "Interrupt",
    tag_avoid:    "Dodge",
    tag_purge:    "Purge/Dispel",
    tag_stop:     "CC/Stop",
    tag_tank:     "Tank",
    back:         "← Back",
    theme_light:  "☀️",
    theme_dark:   "🌙",
    ib_title:     "<strong>Install as app:</strong>",
    ib_android:   "<strong>Android</strong> — Chrome → menu (⋮) → \"Add to Home Screen\"",
    ib_ios:       "<strong>iPhone</strong> — Safari → share (□↑) → \"Add to Home Screen\"",
    about_btn:    "📖 About this app",
    help_btn:     "❓ Guide",
    tab_home: "🌙 Home", tab_dungeons: "⚔ Dungeons", tab_professions: "🔨 Professions", tab_weekly: "📅 Weekly", tab_affixes: "⚡ Affixes", tab_raids: "🏰 Raids", tab_specs: "🎯 Specs",
    feedback_btn: "💬 Feedback",
    feedback_title: "💬 Constructive feedback",
    feedback_sub: "Something wrong? Missing info? Let us know — we improve the guide together.",
    feedback_ph: "E.g. the Inscription tier is wrong, or boss X is missing a mechanic...",
    feedback_send: "📨 Send via mail",
    feedback_gh: "🐙 Open GitHub issue",
    about_title:  "⚔ About this app",
    route_notice: "⚠️ No ideal route available yet. Know a good one? <a href=\"https://github.com/Huijting/midnight_guide/issues/new\" target=\"_blank\" class=\"route-notice-link\">Submit a GitHub Issue →</a>",
  },
  da: {
    season_sub:   "FANGEHULER — SÆSON 1",
    eyebrow:      "World of Warcraft: Midnight — Sæson 1",
    guide:        "Guide",
    hero_sub:     "Vælg din dungeon — bosser, roller og ruteplanlægger",
    s1_section:   "⚔ Sæson 1 Mythic+",
    norm_section: "📖 Kun Normal",
    badge_mplus:  "⚔ SÆSON 1 M+",
    badge_normal: "📖 KUN NORMAL",
    badge_raid:   "🏰 RAID",
    lbl_raid:     "🏰 Raids",
    lbl_glossary: "📖 Ordbog",
    glossary_title:"Ordbog",
    glossary_sub:  "WoW-begreber forklaret for begyndere",
    glossary_intro:"Klik på et begreb for at se forklaringen. Gyldne ord i dungeon-tips kan også klikkes!",
    tab_overview: "Oversigt",
    tab_bosses:   "Bosser",
    tab_route:    "Ruteplanlægger",
    boss_label:   "BOSS",
    lbl_zone:     "ZONE",
    lbl_type:     "TYPE",
    lbl_unlock:   "LÅS OP",
    lbl_bosses:   "ANTAL BOSSER",
    type_mplus:   "⚔ Mythic+ Sæson 1",
    type_normal:  "📖 Kun Normal",
    lust_moment:  "Tidspunkt",
    lust_explain: "Forklaring",
    lust_title:   "🔥 Bloodlust / Heroism-timing",
    route_sum:    "Sammenfatning",
    route_diag:   "Rutediagram — Pull-rækkefølge",
    kg_section:   "Interaktive ruter — Keystone.guru",
    kg_text:      "Se og importer detaljerede M+-ruter på Keystone.guru. Brug <strong>MDT (Mythic Dungeon Tools)</strong> addon i spillet til at importere ruter.",
    kg_btn:       "🗺 Åbn ruter på Keystone.guru →",
    vr_legend_trash: "Trash pull",
    vr_legend_boss:  "Boss",
    vr_legend_event: "Event/Buff",
    vr_legend_lust:  "Bloodlust",
    vr_label_trash:  "TRASH",
    vr_label_boss:   "BOSS",
    vr_label_event:  "EVENT",
    vr_label_lust:   "LUST",
    norm_note:    "Ingen Keystone.guru-rute nødvendig — denne dungeon er ikke i M+-rotationen. Pull-rækkefølgen ovenfor er tilstrækkelig.",
    trash_title:  "🐉 Vigtige Trash Mobs",
    tag_int:      "Interrupt",
    tag_avoid:    "Undgå",
    tag_purge:    "Purge/Dispel",
    tag_stop:     "CC/Stop",
    tag_tank:     "Tank",
    back:         "← Tilbage",
    theme_light:  "☀️",
    theme_dark:   "🌙",
    ib_title:     "<strong>Installer som app:</strong>",
    ib_android:   "<strong>Android</strong> — Chrome → menu (⋮) → \"Føj til startskærm\"",
    ib_ios:       "<strong>iPhone</strong> — Safari → del (□↑) → \"Føj til hjemmeskærm\"",
    about_btn:    "📖 Om denne app",
    help_btn:     "❓ Vejledning",
    tab_home: "🌙 Hjem", tab_dungeons: "⚔ Dungeons", tab_professions: "🔨 Erhverv", tab_weekly: "📅 Ugentlig", tab_affixes: "⚡ Affixes", tab_raids: "🏰 Raids", tab_specs: "🎯 Specs",
    feedback_btn: "💬 Feedback",
    feedback_title: "💬 Konstruktiv kritik",
    feedback_sub: "Noget galt? Mangler info? Fortæl os det — vi forbedrer guiden sammen.",
    feedback_ph: "F.eks. Inscription-tier er forkert, eller boss X mangler en mechanic...",
    feedback_send: "📨 Send via mail",
    feedback_gh: "🐙 Åbn GitHub issue",
    about_title:  "⚔ Om denne app",
    route_notice: "⚠️ Ingen ideel rute tilgængelig endnu. Kender du en god rute? <a href=\"https://github.com/Huijting/midnight_guide/issues/new\" target=\"_blank\" class=\"route-notice-link\">Indsend et GitHub Issue →</a>",
  }
};

// ═══════════════════════════════════════════════════════════════
// HELPER
// ═══════════════════════════════════════════════════════════════
let lang = localStorage.getItem('lang') || 'nl';
function t(obj) { return (typeof obj === 'string') ? obj : (obj[lang] || obj.en || ''); }

// ═══════════════════════════════════════════════════════════════
// DUNGEON DATA  (all localised text fields: {nl,en,da})
// ═══════════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════════
// HOE EEN NIEUWE DUNGEON TOEVOEGEN (voor Claude of jezelf):
//
// 1. Kopieer een bestaand dungeon-blok van { id:... } tot de sluitende },
// 2. Plak het onder het laatste blok in de array (vóór de sluitende ])
// 3. Pas alle velden aan — elke tekst heeft {nl:"...",en:"...",da:"..."}
// 4. type: "mplus"  → verschijnt in Seizoen M+ sectie
//    type: "normal" → verschijnt in Alleen Normal sectie
// 5. Voor een nieuw seizoen: voeg type:"mplus_s2" toe en voeg in renderHome()
//    een extra sectie toe (identiek aan de mplus-sectie, filter op "mplus_s2")
// 6. UI-teksten (tabbladen, knoppen, etc.) staan in het UI{} object bovenaan
//
// NIEUW SEIZOEN CHECKLIST:
//   - Nieuwe dungeons toevoegen met juist type
//   - UI.nl/en/da: season_sub aanpassen ("SEIZOEN 2" etc.)
//   - renderHome() uitbreiden met nieuwe sectie indien gewenst
// ═══════════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════════
// SPEC-SPECIFIC TIPS
// Key format: 'dungeon-id:boss-index:role'
// Only 4 specs covered fully: druid-restoration, paladin-protection,
// hunter-beastmastery, shaman-elemental. Others fall back to generic.
// ═══════════════════════════════════════════════════════════════
// [Data moved to external file]

// Returns spec-specific tips array or null
function getSpecTips(dungeonId, bossIndex, role) {
  if (!currentSpec) return null;
  const key = `${dungeonId}:${bossIndex}:${role}`;
  const bucket = SPEC_TIPS[key];
  if (!bucket) return null;
  const specKey = `${currentSpec.classId}-${currentSpec.specId}`;
  const tips = bucket[specKey];
  if (!tips) return null;
  return tips[lang] || tips['en'] || null;
}

// [Data moved to external file]

// ═══════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════
let currentDungeon = null;

// ═══════════════════════════════════════════════════════════════
// LANGUAGE
// ═══════════════════════════════════════════════════════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.lang-btn[onclick="setLang('${l}')"]`).classList.add('active');
  applyUIStrings();
  updateFooter();
  updateSpecBtn();
  const sm = document.getElementById('spec-modal');
  if (sm && sm.classList.contains('visible')) renderSpecModal();
  if (currentDungeon) renderDetail(currentDungeon);
  else renderHome();
  if (document.getElementById('about-modal').classList.contains('open')) renderAboutContent();
  if (document.getElementById('dev-banner').classList.contains('open')) renderBanner();
  if (document.body.classList.contains('mode-professions')) updateProfLang();
  if (document.body.classList.contains('mode-weekly')) buildWeeklyList();
  // Zoekoverlay: refresh placeholder + resultaten bij taalwissel
  if (document.getElementById('search-overlay').classList.contains('open')) {
    const inp = document.getElementById('search-input');
    const ph = { nl:'Zoek dungeon, spec, professie...', en:'Search dungeon, spec, profession...', da:'Søg dungeon, spec, profession...' };
    inp.placeholder = ph[l] || ph.nl;
    doSearch(inp.value);
  }
}

function applyUIStrings() {
  const u = UI[lang];
  const _hsub=document.getElementById('hdr-sub'); if(_hsub) _hsub.textContent = u.season_sub;
  document.getElementById('hero-eyebrow').textContent = u.eyebrow;
  document.getElementById('hero-title-span').textContent = u.guide;
  document.getElementById('hero-sub').textContent = u.hero_sub;
  document.getElementById('s1-label').textContent = u.s1_section;
  document.getElementById('norm-label').textContent = u.norm_section;
  document.getElementById('tab-btn-overview').textContent = u.tab_overview;
  document.getElementById('tab-btn-bosses').textContent = u.tab_bosses;
  document.getElementById('tab-btn-route').textContent = u.tab_route;
  document.getElementById('back-btn').innerHTML = u.back;
  document.getElementById('about-btn').textContent = u.about_btn;
  document.getElementById('help-btn').textContent = u.help_btn;
  if (document.getElementById('help-modal').classList.contains('open')) renderHelp();
  document.getElementById('feedback-btn').textContent = u.feedback_btn;
  document.getElementById('about-title').textContent = u.about_title;
  document.getElementById('tab-lbl-home').textContent = u.tab_home;
  document.getElementById('tab-lbl-dungeons').textContent = u.tab_dungeons;
  document.getElementById('tab-lbl-professions').textContent = u.tab_professions;
  document.getElementById('tab-lbl-weekly').textContent = u.tab_weekly;
  document.getElementById('tab-lbl-specs').textContent = u.tab_specs;
  document.getElementById('tab-lbl-affixes').textContent = u.tab_affixes;
  document.getElementById('tab-lbl-raids').textContent = u.tab_raids;
  const _glbl=document.getElementById('tab-lbl-glossary');
  if(_glbl) _glbl.textContent=u.lbl_glossary||'📖 Woordenlijst';
  updateLandingStrings();
  if(document.body.classList.contains('mode-specs')) buildSpecGrid();
  if(document.body.classList.contains('mode-glossary')) buildGlossaryScreen();
}

// ═══════════════════════════════════════════════════════════════
// THEME
// ═══════════════════════════════════════════════════════════════
function updateLandingStrings() {
  const LANDING = {
    nl: {
      title: 'Midnight Guide',
      subtitle: 'Jouw WoW: Midnight companion',
      tip: '<strong>Tip:</strong> Installeer deze app op je PC via de 📲-knop rechtsboven, of via het installeer-icoon in je adresbalk — dan werk hij ook offline!',
      credits: 'Gemaakt door Inchy & Claudy · WoW: Midnight · Niet officieel',
      d_title:'Dungeons', d_desc:'Boss tactieken, M+ routes en tips per dungeon', d_count:'8 dungeons',
      r_title:'Raids', r_desc:'Boss mechanics, fases en rol-tactieken', r_count:'3 raids',
      w_title:'Wekelijks', w_desc:'Weekly reset overzicht, World Bosses en affixen', w_count:'Elke week',
      p_title:'Professies', p_desc:'KP gidsen, crafting orders en trainer locaties', p_count:'13 professies',
      s_title:'Specs', s_desc:'Rotaties, stats, macro\'s en consumables', s_count:'38 specs',
    },
    en: {
      title: 'Midnight Guide',
      subtitle: 'Your WoW: Midnight companion',
      tip: '<strong>Tip:</strong> Install this app on your PC via the 📲 button top right, or the install icon in your address bar — works offline too!',
      credits: 'Made by Inchy & Claudy · WoW: Midnight · Unofficial',
      d_title:'Dungeons', d_desc:'Boss tactics, M+ routes and tips per dungeon', d_count:'8 dungeons',
      r_title:'Raids', r_desc:'Boss mechanics, phases and role tactics', r_count:'3 raids',
      w_title:'Weekly', w_desc:'Weekly reset overview, World Bosses and affixes', w_count:'Every week',
      p_title:'Professions', p_desc:'KP guides, crafting orders and trainer locations', p_count:'13 professions',
      s_title:'Specs', s_desc:'Rotations, stats, macros and consumables', s_count:'38 specs',
    },
    da: {
      title: 'Midnight Guide',
      subtitle: 'Din WoW: Midnight-guide',
      tip: '<strong>Tip:</strong> Installér denne app på din PC via 📲-knappen øverst til højre, eller installér-ikonet i adresselinjen — virker også offline!',
      credits: 'Lavet af Inchy & Claudy · WoW: Midnight · Uofficiel',
      d_title:'Dungeons', d_desc:'Boss-taktikker, M+-ruter og tips per dungeon', d_count:'8 dungeons',
      r_title:'Raids', r_desc:'Boss-mekanikker, faser og rolle-taktikker', r_count:'3 raids',
      w_title:'Ugentlig', w_desc:'Ugentlig reset-oversigt, verdensbosser og affixer', w_count:'Hver uge',
      p_title:'Erhverv', p_desc:'KP-guider, craft-ordrer og trænerlokationer', p_count:'13 erhverv',
      s_title:'Specs', s_desc:'Rotationer, stats, makroer og forbrugsvarer', s_count:'38 specs',
    },
  };
  const L = LANDING[lang] || LANDING.nl;
  const s = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  const h = (id, val) => { const el = document.getElementById(id); if(el) el.innerHTML = val; };
  s('landing-title', L.title);
  s('landing-subtitle', L.subtitle);
  s('landing-version', VERSION + ' — ' + VERSION_DATE);
  h('landing-tip-text', L.tip);
  s('landing-credits', L.credits);
  s('lc-title-dungeons', L.d_title); s('lc-desc-dungeons', L.d_desc); s('lc-count-dungeons', L.d_count);
  s('lc-title-raids', L.r_title); s('lc-desc-raids', L.r_desc); s('lc-count-raids', L.r_count);
  s('lc-title-weekly',   L.w_title); s('lc-desc-weekly',   L.w_desc); s('lc-count-weekly',   L.w_count);
  s('lc-title-professions', L.p_title); s('lc-desc-professions', L.p_desc); s('lc-count-professions', L.p_count);
  s('lc-title-specs',   L.s_title); s('lc-desc-specs',   L.s_desc); s('lc-count-specs',   L.s_count);
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light');
  document.getElementById('theme-toggle').textContent = isLight ? UI[lang].theme_dark : UI[lang].theme_light;
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// ═══════════════════════════════════════════════════════════════
// ROLE TABS
// ═══════════════════════════════════════════════════════════════

function renderRolePanel(dungeonId, bossIndex, role, genericTips) {
  const specTips = getSpecTips(dungeonId, bossIndex, role);
  const generic = replaceLust(t(genericTips).map(x => `<li>${x}</li>`).join(''));

  if (specTips && specTips.length > 0) {
    const specHtml = specTips.map(tip => `<li class="spec-tip">${replaceLust(tip)}</li>`).join('');
    const cls = CLASSES.find(c => c.id === currentSpec?.classId);
    const sp  = cls?.specs.find(s => s.id === currentSpec?.specId);
    const label = cls && sp ? `${cls.icon} ${sp.name[lang]}` : '';
    return `<div class="spec-tips-header">${label}</div><ul>${specHtml}</ul>
            <div class="generic-tips-divider"></div>
            <ul class="generic-tips">${generic}</ul>`;
  }
  return `<ul>${generic}</ul>`;
}

function switchFloor(dungeonId, idx) {
  const floors = FLOOR_SCREENSHOTS[dungeonId];
  if (!floors) return;
  const img = document.getElementById('floor-img-' + dungeonId);
  if (img) { img.src = floors[idx].img; img.alt = floors[idx].label; }
  document.querySelectorAll('.floor-tab-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
  });
}

function switchRole(uid, role) {
  const roles = ['tank','heal','dps'];
  const card = document.getElementById(`${uid}-tank`).closest('.boss-card');
  card.querySelectorAll('.role-panel').forEach(p => p.classList.remove('active'));
  card.querySelectorAll('.role-tab-btn').forEach((b, i) => {
    b.className = 'role-tab-btn';
    if (roles[i] === role) b.classList.add('active-' + roles[i]);
  });
  document.getElementById(`${uid}-${role}`).classList.add('active');
}

// ═══════════════════════════════════════════════════════════════
// RENDER HOME
// ═══════════════════════════════════════════════════════════════
function renderHome() {
  const u = UI[lang];
  const mplusGrid  = document.getElementById('mplus-grid');
  const normalGrid = document.getElementById('normal-grid');
  mplusGrid.innerHTML = '';
  normalGrid.innerHTML = '';

  DUNGEONS.forEach(d => {
    const isMplus = d.type === 'mplus';
    const isRaid  = d.type === 'raid';
    const card = document.createElement('div');
    card.className = `dungeon-card ${isMplus ? 'mplus' : ''} ${isRaid ? 'raid' : ''}`;
    card.onclick = () => openDungeon(d.id);
    card.innerHTML = `
      <div class="card-accent"></div>
      <div class="card-body">
        <span class="card-badge ${isMplus ? 'badge-mplus' : isRaid ? 'badge-raid' : 'badge-normal'}">
          ${isMplus ? u.badge_mplus : isRaid ? u.badge_raid : u.badge_normal}
        </span>
        <div class="card-name">${d.name}</div>
        <div class="card-zone">${t(d.zone)||d.zone}</div>
        <div class="card-bosses">
          ${d.bosses_short.map(b => `<span class="boss-chip">${b}</span>`).join('')}
        </div>
        <div class="card-footer">
          <span class="card-level">${t(d.level)}</span>
          <span class="card-arrow">›</span>
        </div>
      </div>`;
    if (!isRaid) (isMplus ? mplusGrid : normalGrid).appendChild(card);
  });
}

// ═══════════════════════════════════════════════════════════════
// OPEN DUNGEON
// ═══════════════════════════════════════════════════════════════
function openDungeon(id) {
  const d = DUNGEONS.find(x => x.id === id);
  if (!d) return;
  currentDungeon = d;
  renderDetail(d);
  document.body.classList.add('detail-open');
  document.getElementById('home-screen').style.display   = '';
  document.getElementById('detail-screen').style.display = '';
  document.getElementById('back-btn').style.display      = 'inline-block';
  switchTab('overview');
  window.scrollTo(0, 0);
}

function goHome() {
  // Vanuit raid detail → terug naar raids overzicht
  if (document.body.classList.contains('raid-detail-open')) {
    document.body.classList.remove('raid-detail-open');
    currentDungeon = null;
    document.getElementById('back-btn').style.display = 'none';
    window.scrollTo(0, 0);
    return;
  }
  // Normale dungeons → terug naar dungeon grid
  currentDungeon = null;
  document.body.classList.remove('detail-open');
  document.getElementById('home-screen').style.display = '';
  document.getElementById('detail-screen').style.display = '';
  document.getElementById('back-btn').style.display = 'none';
  window.scrollTo(0, 0);
}

// ═══════════════════════════════════════════════════════════════
// RENDER DETAIL
// ═══════════════════════════════════════════════════════════════

// [Data moved to external file]
const FLOOR_MAP_LEGEND = `<div class="fp-legend">
  <div class="fp-leg"><div class="fp-dot" style="background:#40c870"></div>Ingang</div>
  <div class="fp-leg"><div class="fp-dot" style="background:#60b8ff"></div>Trash</div>
  <div class="fp-leg"><div class="fp-dot" style="background:#ffd040"></div>Baas</div>
  <div class="fp-leg"><div class="fp-dot" style="background:#ff6622"></div>🔥 Lust</div>
  <div class="fp-leg"><div class="fp-dot" style="background:#40c870"></div>Event/Buff</div>
  <div class="fp-leg fp-line-demo"><svg width="26" height="10"><line x1="0" y1="5" x2="18" y2="5" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round"/><polygon points="18,2 26,5 18,8" fill="#e8c840"/></svg>Route</div>
</div>`;


// [Data moved to external file]

// [Data moved to external file]

function renderDetail(d) {
  const u = UI[lang];
  document.getElementById('d-eyebrow').textContent = (t(d.zone)||d.zone||'').toUpperCase() + ' — ' + (d.type === 'mplus' ? u.type_mplus : d.type === 'raid' ? (u.badge_raid||'RAID') : u.type_normal);
  document.getElementById('d-title').textContent   = d.name;
  document.getElementById('d-meta').innerHTML      = `<span>⏱ ${d.time || '—'}</span><span>🔓 ${t(d.level)}</span><span>👹 ${d.bosses_short.length} ${u.lbl_bosses.toLowerCase()}</span>`;
  document.getElementById('d-lore').textContent    = t(d.lore);

  // Overview
  document.getElementById('overview-content').innerHTML = `
    <div class="overview-grid">
      <div class="info-card"><div class="info-card-title">${u.lbl_zone}</div><div class="info-card-val">${t(d.zone)||d.zone}</div></div>
      <div class="info-card"><div class="info-card-title">${u.lbl_type}</div><div class="info-card-val">${d.type === 'mplus' ? u.type_mplus : d.type === 'raid' ? (u.badge_raid||'🏰 Raid') : u.type_normal}</div></div>
      <div class="info-card"><div class="info-card-title">${u.lbl_unlock}</div><div class="info-card-val">${t(d.level)}</div></div>
      <div class="info-card"><div class="info-card-title">${u.lbl_bosses}</div><div class="info-card-val">${d.bosses_short.join(' · ')}</div></div>
    </div>
    ${d.tips.map(tip => `<div class="tip-box"><strong>${t(tip.title)}:</strong> ${t(tip.text)}</div>`).join('')}`;

  // Determine auto-selected role tab based on chosen spec
  const autoRole = (() => {
    if (!currentSpec) return 'tank';
    const cls = CLASSES.find(c => c.id === currentSpec.classId);
    const sp  = cls?.specs.find(s => s.id === currentSpec.specId);
    return sp?.role || 'tank';
  })();

  // Bosses
  document.getElementById('bosses-content').innerHTML = d.bosses.map((b, bi) => {
    const uid = `${d.id}-b${bi}`;
    return `<div class="boss-card">
      <div class="boss-header">
        <span class="boss-num">${u.boss_label} ${b.num}</span>
        <span class="boss-name">${b.name}</span>
      </div>
      ${b.desc ? `<div class="boss-desc">${t(b.desc)}</div>` : ''}
      <div class="role-tabs">
        <button class="role-tab-btn${autoRole==='tank'?' active-tank':''}" onclick="switchRole('${uid}','tank')">🛡 Tank</button>
        <button class="role-tab-btn${autoRole==='heal'?' active-heal':''}" onclick="switchRole('${uid}','heal')">💚 Healer</button>
        <button class="role-tab-btn${autoRole==='dps'?' active-dps':''}" onclick="switchRole('${uid}','dps')">⚔ DPS</button>
      </div>
      <div id="${uid}-tank" class="role-panel tank-panel${autoRole==='tank'?' active':''}">
        ${renderRolePanel(d.id, bi, 'tank', b.tank)}
      </div>
      <div id="${uid}-heal" class="role-panel heal-panel${autoRole==='heal'?' active':''}">
        ${renderRolePanel(d.id, bi, 'heal', b.heal)}
      </div>
      <div id="${uid}-dps" class="role-panel dps-panel${autoRole==='dps'?' active':''}">
        ${renderRolePanel(d.id, bi, 'dps', b.dps)}
      </div>
    </div>`;
  }).join('');
  const _bel=document.getElementById('bosses-content');
  if(_bel) setTimeout(()=>applyTooltips(_bel),0);

  // Route — Visual Route Map + KG button
  const r = d.route;
  const kgS = KG_STRINGS[lang];

  // Helper: determine step type from label/content
  function getStepType(p) {
    const lbl = (t(p.label)||'').toLowerCase();
    const typ = (p.type||'').toLowerCase();
    if (typ==='event') return 'event';
    if (typ==='boss')  return 'boss';
    if (typ==='trash') return 'trash';
    if (lbl.includes('baas') || lbl.includes('boss') || lbl.includes('chef') || lbl.includes('boss')) return 'boss';
    if (lbl.includes('tome') || lbl.includes('event') || lbl.includes('buff') || lbl.includes('click') || lbl.includes('klik') || lbl.includes('arcane tome') || lbl.includes('secret')) return 'event';
    return 'trash';
  }
  function hasLust(p) {
    const lbl = t(p.label)||'';
    return lbl.includes('🔥') || lbl.toLowerCase().includes('bloodlust') || lbl.toLowerCase().includes('lust');
  }

  // Build visual route steps
  const steps = r.pulls.map((p, i) => {
    const type = getStepType(p);
    const lust = hasLust(p);
    const nodeIcon = type==='boss' ? '★' : type==='event' ? '✦' : (i+1);
    const badges = [];
    if (type==='boss')  badges.push(`<span class="vr-badge boss">${u.vr_label_boss||'BOSS'}</span>`);
    if (type==='event') badges.push(`<span class="vr-badge event">${u.vr_label_event||'EVENT'}</span>`);
    if (lust)           badges.push(`<span class="vr-badge lust">🔥 ${u.vr_label_lust||'LUST'}</span>`);
    const area = p.area ? `<div class="vr-area">${t(p.area)}</div>` : '';
    return `
      <div class="vr-step">
        <div class="vr-connector"></div>
        <div class="vr-node type-${type}">${nodeIcon}</div>
        <div class="vr-card type-${type}">
          ${area}
          <div class="vr-label-row">
            <span class="vr-label">${t(p.label)}</span>
            ${badges.join('')}
          </div>
          <div class="vr-desc">${t(p.desc)}</div>
        </div>
      </div>`;
  }).join('');

  const legend = `
    <div class="vr-legend">
      <div class="vr-leg-item"><div class="vr-leg-dot l-trash"></div>${u.vr_legend_trash||'Trash'}</div>
      <div class="vr-leg-item"><div class="vr-leg-dot l-boss"></div>${u.vr_legend_boss||'Boss'}</div>
      <div class="vr-leg-item"><div class="vr-leg-dot l-event"></div>${u.vr_legend_event||'Event/Buff'}</div>
      <div class="vr-leg-item"><div class="vr-leg-dot l-lust"></div>${u.vr_legend_lust||'Bloodlust'}</div>
    </div>`;

  const floorMapSVG  = FLOOR_MAPS[d.id] || '';
  const routeScreenshot = ROUTE_SCREENSHOTS[d.id] || '';
  const floorScreenshots = FLOOR_SCREENSHOTS[d.id] || null;
  const floorMapTitle = {nl:'🗺 Looproute', en:'🗺 Route Map', da:'🗺 Rutekort'}[lang] || '🗺 Looproute';

  // Build map section HTML
  let mapSectionHtml = '';
  if (routeScreenshot) {
    // M+ dungeon: single Keystone.guru screenshot
    mapSectionHtml = `<div class="route-section">
      <div class="route-title">${floorMapTitle}</div>
      <div class="route-screenshot-wrap">
        <img class="route-screenshot-img" src="${routeScreenshot}" alt="${d.name} route map">
      </div>
    </div>`;
  } else if (floorScreenshots && floorScreenshots.length > 0) {
    // Normal dungeon: multi-floor in-game map screenshots
    const tabsHtml = floorScreenshots.length > 1
      ? `<div class="floor-tabs">${floorScreenshots.map((f,i) =>
          `<button class="floor-tab-btn${i===0?' active':''}" onclick="switchFloor('${d.id}',${i})">${f.label}</button>`
        ).join('')}</div>`
      : '';
    mapSectionHtml = `<div class="route-section">
      <div class="route-title">${floorMapTitle}</div>
      ${tabsHtml}
      <div class="route-screenshot-wrap">
        <img class="route-screenshot-img" id="floor-img-${d.id}" src="${floorScreenshots[0].img}" alt="${floorScreenshots[0].label}">
      </div>
    </div>`;
  } else if (floorMapSVG) {
    // Fallback: SVG map
    mapSectionHtml = `<div class="route-section">
      <div class="route-title">${floorMapTitle}</div>
      <div class="fp-wrap">${floorMapSVG}${FLOOR_MAP_LEGEND}</div>
    </div>`;
  }

  document.getElementById('route-content').innerHTML = `
    ${mapSectionHtml}
    ${r.summary ? `<div class="route-section"><div class="route-title">📋 ${u.route_sum}</div><div class="tip-box">${t(r.summary)}</div></div>` : ''}
    ${r.lust && r.lust.length ? `
    <div class="route-section">
      <div class="route-title">${u.lust_title}</div>
      <table class="lust-table">
        <thead><tr><th>${u.lust_moment}</th><th>${u.lust_explain}</th></tr></thead>
        <tbody>${r.lust.map(l=>`<tr><td class="lust-moment">${l.moment}</td><td>${t(l.uitleg)}</td></tr>`).join('')}</tbody>
      </table>
    </div>` : ''}
    <div class="route-section">
      ${r.norm_note ? `<div class="route-notice">${u.route_notice}</div>` : ''}
    </div>
    <div class="route-section">
      <div class="route-title">🗺 ${u.route_diag}</div>
      ${legend}
      <div class="vr-container">
        <div class="vr-line"></div>
        ${steps}
      </div>
    </div>
    ${r.mdt ? `
    <div class="route-section">
      <div class="route-title">🔗 Keystone.guru</div>
      <button class="kg-open-btn" onclick="window.open('${r.kg_url}','_blank')">
        <span class="kg-icon">🗺</span>
        <span class="kg-text">
          ${kgS.btn_label}
          <span class="kg-sub">${kgS.btn_sub}</span>
        </span>
        <span class="kg-arrow">↗</span>
      </button>
    </div>` : ''}
    ${d.route && d.route.trash && d.route.trash.length ? (()=>{
      const tagMap = {int:'t-int',avoid:'t-avoid',purge:'t-purge',stop:'t-stop',tank:'t-tank'};
      const tagLbl = {int:u.tag_int,avoid:u.tag_avoid,purge:u.tag_purge,stop:u.tag_stop,tank:u.tag_tank};
      const cards = d.route.trash.map(m=>{
        const tags = (m.tags||[]).map(tg=>'<span class="trash-tag '+(tagMap[tg]||'')+'">'+(tagLbl[tg]||tg)+'</span>').join('');
        return '<div class="trash-card"><div class="trash-card-header"><span class="trash-mob-name">'+m.mob+'</span><div class="trash-tags">'+tags+'</div></div><div class="trash-card-tip">'+t(m.tip)+'</div></div>';
      }).join('');
      return '<div class="trash-section route-section"><div class="route-title">'+u.trash_title+'</div><div class="trash-grid">'+cards+'</div></div>';
    })() : ''}`;
}

// ═══════════════════════════════════════════════════════════════
// TABS
// ═══════════════════════════════════════════════════════════════
function switchTab(name, event) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById(`tab-${name}`).classList.add('active');
  if (event) event.target.classList.add('active');
  else document.getElementById(`tab-btn-${name}`).classList.add('active');
}

// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
}
if (localStorage.getItem('lang')) {
  lang = localStorage.getItem('lang');
}
document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
const activeLangBtn = document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`);
if (activeLangBtn) activeLangBtn.classList.add('active');

// ── APPARAAT DETECTIE ──
const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
const isPhone = window.innerWidth <= 480;
const isTablet = window.innerWidth > 480 && window.innerWidth <= 768;
const isPC = window.innerWidth > 768;

// Voeg class toe aan body zodat CSS het weet
if (isTouch) document.body.classList.add('touch-device');
if (isPhone) document.body.classList.add('is-phone');
if (isTablet) document.body.classList.add('is-tablet');
if (isPC) document.body.classList.add('is-pc');

// Verberg install banner op PC — niet relevant

// Update apparaat-klassen bij resize (bv. tablet roteren)
window.addEventListener('resize', () => {
  document.body.classList.remove('is-phone','is-tablet','is-pc');
  if (window.innerWidth <= 480) document.body.classList.add('is-phone');
  else if (window.innerWidth <= 768) document.body.classList.add('is-tablet');
  else document.body.classList.add('is-pc');
});

// Wacht tot HTML klaar is voordat we de pagina opbouwen
document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('mode-home');
  // Dev banner — toon eenmalig per versie
  const BANNER_KEY = 'midnight_banner_v1';
  renderBanner();
  if (!localStorage.getItem(BANNER_KEY)) {
    document.getElementById('dev-banner').classList.add('open');
  }
  applyUIStrings();
  updateFooter();
  updateSpecBtn();
  renderHome();
  initTooltips();
});

// ── KEYSTONE.GURU POPUP ──
// [Data moved to external file]

// ═══════════════════════════════════════════════════════════════
// PROFESSIONS MODE
// ═══════════════════════════════════════════════════════════════

let currentProf = null;

const PROF_UI = {
  nl:{hero_title:'Professies — Midnight',hero_sub:'Kies een professie om de gids te openen',gathering:'Verzamelen',crafting:'Produceren',secondary:'Secundair',tier_label:'Tier',gold_label:'💰 Goud',use_label:'🛠 Nut',back:'← Terug',trainer_head:'Trainer — Waar te vinden',spec_head:'Specialisaties',item_head:'Wat maak je?',orders_head:'Crafting Orders',method_btn:'📖 Method.gg',wowp_btn:'📖 WoW-Professions',source_label:'Bronnen:', tab_trainer:'📍 Trainer', tab_specs:'⚙️ Specs', tab_items:'🎒 Items', tab_orders:'📜 Orders', tab_kp:'🧭 KP Gids', tab_kpbronnen:'🗺️ KP'},
  en:{hero_title:'Professions — Midnight',hero_sub:'Choose a profession to open the guide',gathering:'Gathering',crafting:'Crafting',secondary:'Secondary',tier_label:'Tier',gold_label:'💰 Gold',use_label:'🛠 Utility',back:'← Back',trainer_head:'Trainer — Where to find',spec_head:'Specializations',item_head:'What do you make?',orders_head:'Crafting Orders',method_btn:'📖 Method.gg',wowp_btn:'📖 WoW-Professions',source_label:'Sources:', tab_trainer:'📍 Trainer', tab_specs:'⚙️ Specs', tab_items:'🎒 Items', tab_orders:'📜 Orders', tab_kp:'🧭 KP Guide', tab_kpbronnen:'🗺️ KP'},
  da:{hero_title:'Professioner — Midnight',hero_sub:'Vælg en profession for at åbne guiden',gathering:'Indsamling',crafting:'Produktion',secondary:'Sekundær',tier_label:'Tier',gold_label:'💰 Guld',use_label:'🛠 Nytte',back:'← Tilbage',trainer_head:'Træner — Hvor finder du',spec_head:'Specialiseringer',item_head:'Hvad laver du?',orders_head:'Craft-ordrer',method_btn:'📖 Method.gg',wowp_btn:'📖 WoW-Professions',source_label:'Kilder:', tab_trainer:'📍 Træner', tab_specs:'⚙️ Specs', tab_items:'🎒 Genstande', tab_orders:'📜 Ordrer', tab_kp:'🧭 KP Guide', tab_kpbronnen:'🗺️ KP'}
};

function pT(obj){if(!obj)return '';return obj[lang]||obj.nl||obj.en||'';}
function pStars(n,max=5){return '★'.repeat(n)+'☆'.repeat(max-n);}




function openRaid(id) {
  const d = DUNGEONS.find(x => x.id === id);
  if (!d) return;
  currentDungeon = d;
  renderDetail(d);
  document.body.classList.add('raid-detail-open');
  document.getElementById('back-btn').style.display = 'inline-block';
  switchTab('overview');
  window.scrollTo(0, 0);
}

function buildRaidScreen(){
  const el = document.getElementById('raids-content');
  const raids = [
    {
      id: 'dreamrift',
      icon: '🌀',
      name: 'The Dreamrift',
      zone: { nl:'Harandar — Rift of Aln', en:'Harandar — Rift of Aln', da:'Harandar — Rift of Aln' },
      opens: { nl:'Opent 17 maart 2026', en:'Opens March 17, 2026', da:'Åbner 17. marts 2026' },
      bosses: ['Chimaerus, the Undreamt God'],
      available: true,
    },
    {
      id: 'voidspire',
      icon: '🔮',
      name: 'The Voidspire',
      zone: { nl:'Voidstorm', en:'Voidstorm', da:'Voidstorm' },
      opens: { nl:'Opent 17 maart 2026', en:'Opens March 17, 2026', da:'Åbner 17. marts 2026' },
      bosses: ['Imperator Averzian','Vorasius','Fallen-King Salhadaar','Vaelgor & Ezzorak','Lightblinded Vanguard','Crown of the Cosmos'],
      available: true,
    },
    {
      id: 'marchqueldanas',
      icon: '🌅',
      name: "March on Quel'Danas",
      zone: { nl:"Isle of Quel'Danas", en:"Isle of Quel'Danas", da:"Isle of Quel'Danas" },
      opens: { nl:'Opent 31 maart 2026', en:'Opens March 31, 2026', da:'Åbner 31. marts 2026' },
      bosses: ["Belo'ren, Child of Al'ar", "Midnight Falls (L'ura)"],
      available: true,
    },
  ];

  el.innerHTML = raids.map(r => `
    <div class="raid-card${r.available ? '' : ' raid-coming-soon'}" ${r.available ? `onclick="openRaid('${r.id}')"` : ''}>
      <div class="raid-card-header">
        <span class="raid-card-icon">${r.icon}</span>
        <span class="raid-card-name">${r.name}</span>
        ${r.available ? `<span style="font-size:10px;background:#4ade80;color:#000;border-radius:6px;padding:2px 6px;font-weight:800">${lang==='nl'?'BESCHIKBAAR':lang==='da'?'TILGÆNGELIG':'AVAILABLE'}</span>` : `<span style="font-size:10px;background:var(--muted);color:var(--bg);border-radius:6px;padding:2px 6px;font-weight:800">${lang==='nl'?'BINNENKORT':lang==='da'?'SNART':'SOON'}</span>`}
      </div>
      <div class="raid-card-meta">📍 ${t(r.zone)} &nbsp;·&nbsp; ${t(r.opens)}</div>
      <div class="raid-card-bosses">
        ${r.bosses.map(b => `<span class="raid-boss-chip">${b}</span>`).join('')}
      </div>
    </div>`).join('');
}

function buildAffixScreen(){
  const ui = (typeof AFFIX_UI !== 'undefined') ? (AFFIX_UI[lang] || AFFIX_UI.nl) : null;
  if (!ui) return;
  document.getElementById('affixes-hero-title').textContent = ui.title;
  document.getElementById('affixes-hero-sub').textContent = ui.subtitle;
  const el = document.getElementById('affixes-content');
  el.innerHTML = ui.sections.map(s => {
    const variantsHtml = s.variants ? `
      <div class="affix-variants">
        ${s.variants.map(v => `
          <div class="affix-variant">
            <div class="affix-variant-header">${v.icon} ${v.name}</div>
            <div class="affix-variant-what">${v.what}</div>
            <div class="affix-variant-how">${v.how}</div>
          </div>`).join('')}
      </div>` : '';
    return `
      <div class="affix-section" style="border-left:3px solid ${s.color}">
        <div class="affix-level-badge">${ui.level_label} ${s.level}</div>
        <div class="affix-header">
          <span class="affix-icon">${s.icon}</span>
          <span class="affix-name">${s.name}</span>
          <span class="affix-type-badge ${(s.badge||'').toLowerCase()}">${s.badge||''}</span>
        </div>
        <div class="affix-what">${s.what}</div>
        ${s.how ? `<div class="affix-how">${s.how}</div>` : ''}
        ${variantsHtml}
        ${s.tip ? `<div class="affix-tip">${ui.tip_label} ${s.tip}</div>` : ''}
      </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════════════════
// GLOSSARY + TOOLTIPS
// ═══════════════════════════════════════════════════════════════
function buildGlossaryScreen(){
  const u=UI[lang];
  const t1=document.getElementById('glossary-title');
  const t2=document.getElementById('glossary-sub');
  if(t1) t1.textContent=u.glossary_title||'Woordenlijst';
  if(t2) t2.textContent=u.glossary_sub||'';
  const el=document.getElementById('glossary-content');
  if(!el) return;
  if(typeof GLOSSARY==='undefined'||!GLOSSARY.length){
    el.innerHTML='<p style="color:var(--muted);padding:20px">Woordenlijst niet beschikbaar.</p>';
    return;
  }
  el.innerHTML=(u.glossary_intro?`<div class="glossary-intro">${u.glossary_intro}</div>`:'')+
    GLOSSARY.map((item,i)=>{
      const term=item.term[lang]||item.term.nl;
      const def=item.def[lang]||item.def.nl;
      return `<div class="glossary-item" id="gitem-${i}">
        <div class="glossary-item-header" onclick="toggleGlossaryItem(${i})">
          <span class="glossary-term">${term}</span>
          <span class="glossary-arrow">▶</span>
        </div>
        <div class="glossary-def">${def}</div>
      </div>`;
    }).join('');
}
function toggleGlossaryItem(i){
  const el=document.getElementById('gitem-'+i);
  if(el) el.classList.toggle('open');
}
const TOOLTIP_MAP={
  'interrupt':0,'interrupts':0,'interrupten':0,'interrupted':0,'interrupteer':0,
  'soak':1,'soaken':1,'soakt':1,'soaking':1,
  'frontal':2,'frontals':2,
  'dot':3,'dots':3,
  'kite':4,'kiten':4,'kitet':4,'kiting':4,
  'taunt swap':5,'taunten':5,
  'los':6,'line of sight':6,
  'defensive':7,'defensives':7,'cooldown':7,'cooldowns':7,
  'aoe':8,
  'add':9,'adds':9,
  'tankbuster':10,'tankbusters':10,
  'dispel':11,'dispellen':11,'dispels':11,
  'purge':12,'purgen':12,'purges':12,
  'bloodlust':13,'lust':13,'heroism':13,
  'burst':14,'burst-venster':14,
  'stack':15,'stacking':15,'spreiden':15,'spread':15
};
let _gBox=null;
function initTooltips(){
  _gBox=document.createElement('div');
  _gBox.className='g-tip-box';
  document.body.appendChild(_gBox);
  document.addEventListener('mouseover',e=>{
    const el=e.target.closest('.g-tip');
    if(el) showTip(el,e);
  });
  document.addEventListener('mousemove',e=>{
    if(_gBox.classList.contains('show')) posTip(e);
  });
  document.addEventListener('mouseout',e=>{
    if(!e.target.closest('.g-tip')) _gBox.classList.remove('show');
  });
  document.addEventListener('click',e=>{
    const el=e.target.closest('.g-tip');
    if(!el) return;
    if(_gBox.classList.contains('show')){_gBox.classList.remove('show');return;}
    showTip(el,e);
  });
}
function showTip(el,e){
  if(!_gBox||typeof GLOSSARY==='undefined') return;
  const idx=parseInt(el.dataset.gidx);
  if(isNaN(idx)||!GLOSSARY[idx]) return;
  _gBox.textContent=GLOSSARY[idx].def[lang]||GLOSSARY[idx].def.nl;
  _gBox.classList.add('show');
  posTip(e);
}
function posTip(e){
  if(!_gBox) return;
  const pad=14,bw=290,bh=_gBox.offsetHeight||60;
  let x=e.clientX+pad,y=e.clientY+pad;
  if(x+bw>window.innerWidth-pad)  x=e.clientX-bw-pad;
  if(y+bh>window.innerHeight-pad) y=e.clientY-bh-pad;
  _gBox.style.left=Math.max(pad,x)+'px';
  _gBox.style.top =Math.max(pad,y)+'px';
}
function applyTooltips(container){
  if(typeof GLOSSARY==='undefined') return;
  const sel='.boss-desc,.generic-tips li,.spec-tip,.tip-box';
  const nodes=container?container.querySelectorAll(sel):document.querySelectorAll(sel);
  const keys=Object.keys(TOOLTIP_MAP).sort((a,b)=>b.length-a.length);
  const esc=keys.map(k=>k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
  const rx=new RegExp('(?<![\\w-])('+esc.join('|')+')(?![\\w-])','gi');
  nodes.forEach(node=>{
    if(node.dataset.tipped) return;
    node.dataset.tipped='1';
    node.innerHTML=node.innerHTML.replace(rx,m=>{
      const idx=TOOLTIP_MAP[m.toLowerCase()];
      return idx!==undefined?`<span class="g-tip" data-gidx="${idx}">${m}</span>`:m;
    });
  });
}


function setMode(mode){
  document.body.className=document.body.className.replace(/\bmode-\S+/g,'').trim()+' mode-'+mode;
  document.body.classList.remove('detail-open');
  document.getElementById('mode-tab-home').classList.toggle('active',mode==='home');
  document.getElementById('mode-tab-dungeons').classList.toggle('active',mode==='dungeons');
  document.getElementById('mode-tab-professions').classList.toggle('active',mode==='professions');
  document.getElementById('mode-tab-weekly').classList.toggle('active',mode==='weekly');
  document.getElementById('mode-tab-specs').classList.toggle('active',mode==='specs');
  document.getElementById('mode-tab-affixes').classList.toggle('active',mode==='affixes');
  document.getElementById('mode-tab-raids').classList.toggle('active',mode==='raids');
  const _gtab=document.getElementById('mode-tab-glossary');
  if(_gtab) _gtab.classList.toggle('active',mode==='glossary');
  const sb=document.getElementById('spec-btn');
  if(sb)sb.style.display=(mode==='dungeons')?'':'none';
  document.getElementById('back-btn').style.display='none';
  if(mode==='home'){
    updateLandingStrings();
  } else if(mode==='weekly'){
    document.getElementById('home-screen').style.display = '';
    document.getElementById('detail-screen').style.display = '';
    buildWeeklyList();
  } else if(mode==='professions'){
    document.getElementById('home-screen').style.display = '';
    document.getElementById('detail-screen').style.display = '';
    buildProfGrid();showProfGrid();
    const ht=document.getElementById('prof-hero-title');
    if(ht)ht.innerHTML=PROF_UI[lang].hero_title.replace('— ','— <span>')+' </span>';
    const hs=document.getElementById('prof-hero-sub');
    if(hs)hs.textContent=PROF_UI[lang].hero_sub;
  } else if(mode==='affixes'){
    buildAffixScreen();
  } else if(mode==='raids'){
    document.body.classList.remove('raid-detail-open');
    currentDungeon = null;
    buildRaidScreen();
  } else if(mode==='specs'){
    document.getElementById('home-screen').style.display = '';
    document.getElementById('detail-screen').style.display = '';
    buildSpecGrid();
  } else if(mode==='glossary'){
    buildGlossaryScreen();
  } else if(mode==='dungeons') {
    document.getElementById('home-screen').style.display = '';
    document.getElementById('detail-screen').style.display = '';
    renderHome();
  } else {
    if(currentDungeon)goHome();
  }
  window.scrollTo(0,0);
}

function buildProfGrid(){
  const grid=document.getElementById('prof-grid');if(!grid)return;
  const ui=PROF_UI[lang];
  const cat={gathering:ui.gathering,crafting:ui.crafting,secondary:ui.secondary};
  grid.innerHTML=ALL_PROFS.map(p=>`
    <div class="prof-card" onclick="showProf('${p.id}')">
      <div class="prof-card-icon">${p.icon}</div>
      <div class="prof-card-name">${pT(p.name)}</div>
      <div class="prof-card-cat">${cat[p.cat]||p.cat}</div>
      <div class="prof-card-tier tier-${p.tier}">${p.tier}</div>
    </div>`).join('');
}

function showProfGrid(){
  document.getElementById('prof-grid').style.display='';
  
  document.getElementById('prof-detail').classList.remove('visible');
  currentProf=null;
}

function showProf(id){
  const p=ALL_PROFS.find(x=>x.id===id);if(!p)return;
  currentProf=p;
  const ui=PROF_UI[lang];
  
  // Set tab labels
  const tTrainer = document.querySelector('.pdet-tab[onclick*="ptab-trainer"]'); if(tTrainer) tTrainer.innerHTML = ui.tab_trainer;
  const tSpecs = document.querySelector('.pdet-tab[onclick*="ptab-specs"]'); if(tSpecs) tSpecs.innerHTML = ui.tab_specs;
  const tItems = document.querySelector('.pdet-tab[onclick*="ptab-items"]'); if(tItems) tItems.innerHTML = ui.tab_items;
  const tOrders = document.querySelector('.pdet-tab[onclick*="ptab-orders"]'); if(tOrders) tOrders.innerHTML = ui.tab_orders;
    const tKpbronnen = document.querySelector('.pdet-tab[onclick*="ptab-kpbronnen"]'); if(tKpbronnen) tKpbronnen.innerHTML = ui.tab_kpbronnen;

  document.getElementById('prof-grid').style.display='none';
  
    const guideTabBtn = document.getElementById('pdet-tab-guide');
  if (guideTabBtn) {
    if (typeof PROF_GUIDE_DATA !== 'undefined' && PROF_GUIDE_DATA[id]) {
      guideTabBtn.style.display = '';
      const guideTabLabels = { nl: '📖 Gids & KP', en: '📖 Guide & KP', da: '📖 Guide & KP' };
      guideTabBtn.innerHTML = guideTabLabels[lang] || guideTabLabels.nl;
      renderProfGuide(id);
    } else {
      guideTabBtn.style.display = 'none';
      if (guideTabBtn.classList.contains('active')) {
        switchProfTab(document.querySelector('.pdet-tab[onclick*="ptab-trainer"]'), 'ptab-trainer');
      }
    }
  }

  document.getElementById('prof-detail').classList.add('visible');
  document.getElementById('pdet-back-btn').textContent=ui.back;
  document.getElementById('pdet-icon').textContent=p.icon;
  document.getElementById('pdet-name').textContent=pT(p.name);
  const cat={gathering:ui.gathering,crafting:ui.crafting,secondary:ui.secondary};
  const col={gathering:'#4ade80',crafting:'#c084fc',secondary:'#94a3b8'};
  document.getElementById('pdet-meta').innerHTML=
    `<span class="pdet-badge" style="background:${col[p.cat]}22;color:${col[p.cat]};border:1px solid ${col[p.cat]}44">${cat[p.cat]||p.cat}</span>
     <span class="pdet-badge" style="background:var(--panel);border:1px solid var(--border);color:var(--gold)">${ui.tier_label} ${p.tier}</span>`;
  document.getElementById('pdet-lore').innerHTML=pT(p.lore);
  document.getElementById('pdet-ratings').innerHTML=
    `<div><div class="pdet-rating-label">${ui.gold_label}</div><div class="pdet-stars">${pStars(p.goldrating)}</div></div>
     <div><div class="pdet-rating-label">${ui.use_label}</div><div class="pdet-stars">${pStars(p.userating)}</div></div>`;
  document.getElementById('ptab-trainer').innerHTML=
    `<div class="pdet-section"><h3>${ui.trainer_head}</h3>
       <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:6px">${p.trainer.name}</div>
       <div style="font-size:13px;color:var(--muted);line-height:1.7">${pT(p.trainer.loc)}</div>
       <div class="trainer-way" onclick="copyWay(this)" data-way="${p.trainer.way}" title="Klik om te kopiëren">📋 ${p.trainer.way}</div>
       ${p.trainer.note?`<div class="trainer-note">${pT(p.trainer.note)}</div>`:''}
     </div>
     ${p.method_url||p.wowp_url?`<div class="prof-links"><span class="prof-source-label">${ui.source_label}</span>
       ${p.method_url?`<a class="prof-link-btn" href="${p.method_url}" target="_blank">${ui.method_btn}</a>`:''}
       ${p.wowp_url?`<a class="prof-link-btn" href="${p.wowp_url}" target="_blank">${ui.wowp_btn}</a>`:''}
       <a class="prof-link-btn" href="https://overgear.com/guides/wow/midnight-best-profession/" target="_blank">📊 Overgear Tier</a>
     </div>`:''}`;
  document.getElementById('ptab-specs').innerHTML=
    `<div class="pdet-section"><h3>${ui.spec_head}</h3>
       ${p.specs.map(s=>`<div class="spec-block">
         <div class="spec-title">${pT(s.title)}</div>
         <div class="spec-desc">${pT(s.desc)}</div>
         ${s.points?`<div class="spec-points">${pT(s.points)}</div>`:''}
       </div>`).join('')}
     </div>`;
  document.getElementById('ptab-items').innerHTML=
    `<div class="pdet-section"><h3>${ui.item_head}</h3>
       <div class="item-grid">
         ${p.items.map(it=>`<div class="item-card">
           <div class="item-icon">${it.icon}</div>
           <div class="item-name">${pT(it.name)}</div>
           <div class="item-desc">${pT(it.desc)}</div>
           ${it.tag?`<div class="item-tag">${it.tag}</div>`:''}
         </div>`).join('')}
       </div>
     </div>`;
  document.getElementById('ptab-orders').innerHTML=
    `<div class="pdet-section"><h3>${ui.orders_head}</h3>
       <div class="orders-text">${pT(p.orders)}</div>
     </div>`;
  renderKpGids(p);
  renderKpSources(p);
  switchProfTab(document.querySelector('.pdet-tab'),'ptab-trainer');
  window.scrollTo(0,0);
}

function switchProfTab(btn,panelId){
  document.querySelectorAll('.pdet-tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.pdet-panel').forEach(p=>p.classList.remove('visible'));
  if(btn)btn.classList.add('active');
  const panel=document.getElementById(panelId);
  if(panel)panel.classList.add('visible');
}
function renderKpGids(p) {
  const lang_ = (typeof lang !== 'undefined') ? lang : 'nl';
  const L = s => (s && typeof s === 'object') ? (s[lang_] || s.nl || '') : (s || '');
  const el = document.getElementById('kp-gids-container');
  if (!el) return;

  const data = (typeof KP_DATA !== 'undefined') ? KP_DATA[p.id] : null;
  const u = {
    nl: { trees:'🌳 Specialisatiebomen', builds:'Kies je speelstijl:', skill:'skill', tip:'💡 Tip', no_kp:'Geen KP-boom — recepten via trainer en de wereld.' },
    en: { trees:'🌳 Specialization Trees', builds:'Choose your playstyle:', skill:'skill', tip:'💡 Tip', no_kp:'No KP tree — recipes via trainer and the world.' },
    da: { trees:'🌳 Specialiseringstræer', builds:'Vælg din spillestil:', skill:'færdighed', tip:'💡 Tip', no_kp:'Ingen KP-træ — opskrifter via træner og verden.' }
  }[lang_] || { trees:'🌳 Specialisatiebomen', builds:'Kies je speelstijl:', skill:'skill', tip:'💡 Tip', no_kp:'Geen KP-boom.' };

  if (!data) {
    const kpHeaderEmpty = {
      nl: 'Deel 3: Kennispunten (KP) & Specialisaties',
      en: 'Part 3: Knowledge Points (KP) & Specs',
      da: 'Del 3: Videnpoint (KP) & Specs'
    }[lang_] || 'Deel 3: Kennispunten (KP)';
    el.innerHTML = `<div class="pdet-section">
      <h3 style="font-family: \'Cinzel\', serif; color: var(--gold2); margin-top: 32px; margin-bottom: 16px; font-size: 20px; border-bottom: 1px solid var(--border); padding-bottom: 8px; text-align: center;">${kpHeaderEmpty}</h3>
      <div class="kp-intro-box">${u.no_kp}</div>
    </div>`;
    return;
  }

  // Track active build per profession (global state)
  if (!window._kpActiveBuild) window._kpActiveBuild = {};
  if (!window._kpActiveBuild[p.id]) window._kpActiveBuild[p.id] = data.builds && data.builds[0] ? data.builds[0].id : null;

  let html = '<div class="pdet-section">';
  
    const kpHeader = {
      nl: 'Deel 3: Kennispunten (KP) & Specialisaties',
      en: 'Part 3: Knowledge Points (KP) & Specs',
      da: 'Del 3: Videnpoint (KP) & Specs'
    }[lang_] || 'Deel 3: Kennispunten (KP)';
    
    html += `<h3 style="font-family: \'Cinzel\', serif; color: var(--gold2); margin-top: 32px; margin-bottom: 16px; font-size: 20px; border-bottom: 1px solid var(--border); padding-bottom: 8px; text-align: center;">${kpHeader}</h3>`;

  // Intro
  if (data.intro) html += `<div class="kp-intro-box">${L(data.intro)}</div>`;

  // Trees overview
  if (data.trees && data.trees.length > 0) {
    html += `<div class="section-title" style="font-size:11px;font-weight:800;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin:12px 0 8px">${u.trees}</div>`;
    html += '<div style="display:grid;gap:6px;margin-bottom:16px">';
    data.trees.forEach(t => {
      html += `<div class="kp-intro-box" style="padding:8px 12px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
          <span style="font-size:15px">${t.icon}</span>
          <strong style="font-size:12px;color:var(--text)">${t.name}</strong>
          <span style="margin-left:auto;font-size:10px;color:var(--muted)">🔓 ${u.skill} ${t.unlock}</span>
        </div>
        <div style="font-size:11px;color:var(--muted);line-height:1.5;margin-bottom:5px">${L(t.desc)}</div>
        <div style="display:flex;flex-wrap:wrap;gap:3px">${t.subs.map(s => `<span style="font-size:10px;background:var(--deep);border:1px solid var(--border);border-radius:10px;padding:1px 7px">${s}</span>`).join('')}</div>
      </div>`;
    });
    html += '</div>';
  }

  // Builds
  if (data.builds && data.builds.length > 0) {
    const activeId = window._kpActiveBuild[p.id];
    html += `<div class="section-title" style="font-size:11px;font-weight:800;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin:12px 0 8px">${u.builds}</div>`;

    // Build selector buttons
    html += '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">';
    data.builds.forEach(b => {
      const active = b.id === activeId;
      html += `<button onclick="selectKpBuild('${p.id}','${b.id}')" style="border-radius:14px;padding:5px 12px;font-size:12px;font-weight:700;cursor:pointer;border:1px solid var(--border);background:${active ? 'var(--gold)' : 'var(--deep)'};color:${active ? '#000' : 'var(--text)'}">${b.icon} ${L(b.name)}</button>`;
    });
    html += '</div>';

    const build = data.builds.find(b => b.id === activeId) || data.builds[0];
    html += `<div style="font-size:12px;color:var(--muted);line-height:1.6;padding:10px 14px;background:var(--deep);border-left:3px solid var(--gold);border-radius:0 6px 6px 0;margin-bottom:12px">${L(build.desc)}</div>`;

    // Steps
    html += '<div style="display:grid;gap:8px">';
    build.steps.forEach(step => {
      const bg = step.color + '18';
      html += `<div style="background:var(--deep);border:1px solid var(--border);border-radius:8px;overflow:hidden">
        <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:${bg};border-bottom:1px solid var(--border);flex-wrap:wrap">
          <span style="font-size:11px;font-weight:800;color:#fff;background:${step.color};border-radius:10px;padding:2px 9px;white-space:nowrap">${step.kp} KP</span>
          <span style="font-size:12px;font-weight:700;color:${step.color}">${step.tree}</span>
          <span style="font-size:12px;color:var(--text)">→ ${L(step.sub)}</span>
          <span style="margin-left:auto;font-size:10px;color:var(--muted)">🔓 ${u.skill} ${step.unlock}</span>
        </div>
        <div style="padding:10px 12px;font-size:12px;line-height:1.65">${L(step.desc)}</div>
        ${step.tip ? `<div style="padding:6px 12px 10px;font-size:11px;color:var(--muted);border-top:1px solid var(--border)">${u.tip}: ${L(step.tip)}</div>` : ''}
      </div>`;
    });
    html += '</div>';
  }

  html += '</div>';
  el.innerHTML = html;
}

function selectKpBuild(profId, buildId) {
  if (!window._kpActiveBuild) window._kpActiveBuild = {};
  window._kpActiveBuild[profId] = buildId;
  const p = ALL_PROFS.find(x => x.id === profId);
  if (p) renderKpGids(p);
}

function renderKpSources(p) {
  const el = document.getElementById('ptab-kpbronnen');
  if (!el) return;

  const data = KP_SOURCES && KP_SOURCES[p.id];

  if (!data) {
    el.innerHTML = `<div class="kp-empty">Geen KP-bronnen data beschikbaar voor deze professie.</div>`;
    return;
  }

  const accentColor = p.accent || '#c89b3c';

  // Helper: bouw een /ttpaste blok van alle schatten
  const tomtomLines = (data.treasures || [])
    .filter(t => t.way && t.way.startsWith('/way'))
    .map(t => t.way + ` ${t.name} (${getProfName(p, lang)})`)
    .join('\n');

  // Schatten sectie
  let treasuresHtml = '';
  if (data.treasures && data.treasures.length > 0) {
    const rows = data.treasures.map((t, i) => `
      <tr>
        <td class="kp-num">${i + 1}</td>
        <td class="kp-item-name">${t.name}</td>
        <td class="kp-zone">${t.zone}</td>
        <td class="kp-way">
          ${t.way ? `<span class="kp-way-code" onclick="copyWay(this)" data-way="${t.way}" title="Klik om te kopiëren">📋 ${t.way}</span>` : '<span class="kp-no-way">—</span>'}
        </td>
        ${t.note ? `<td class="kp-note" title="${t.note}">💬</td>` : '<td></td>'}
      </tr>
      ${t.note ? `<tr class="kp-note-row"><td colspan="5"><span class="kp-note-text">${t.note}</span></td></tr>` : ''}
    `).join('');

    const tomtomBtn = tomtomLines
      ? `<button class="kp-tomtom-btn" onclick="copyTomTom(this)" data-ways="${encodeURIComponent(tomtomLines)}">📋 Kopieer /ttpaste</button>`
      : '';

    treasuresHtml = `
      <div class="kp-section">
        <div class="kp-section-header">
          <span class="kp-section-title">📦 Schatten <span class="kp-badge-total">${data.treasures.length} × 3 KP = ${data.treasures.length * 3} KP</span></span>
          <span class="kp-section-sub">Eenmalig per character — herhaalbaar op alts</span>
          ${tomtomBtn}
        </div>
        <table class="kp-table">
          <thead>
            <tr><th>#</th><th>Naam</th><th>Zone</th><th>/way</th><th></th></tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  } else {
    treasuresHtml = `<div class="kp-section"><div class="kp-empty-note">⚠️ Geen schatten gedocumenteerd voor deze professie.</div></div>`;
  }

  // Wekelijks sectie
  let weeklyHtml = '';
  if (data.weekly && data.weekly.length > 0) {
    const rows = data.weekly.map(w => `
      <tr>
        <td class="kp-item-name">${w.source}</td>
        <td class="kp-kp-val">${w.kp} KP</td>
        <td class="kp-note-text-inline">${w.note || ''}</td>
      </tr>
    `).join('');

    weeklyHtml = `
      <div class="kp-section">
        <div class="kp-section-header">
          <span class="kp-section-title">📅 Wekelijkse KP bronnen</span>
          <span class="kp-section-sub">Reset elke week</span>
        </div>
        <table class="kp-table">
          <thead><tr><th>Bron</th><th>KP</th><th>Opmerking</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  }

  // Darkmoon Faire
  let darkmoonHtml = '';
  if (data.darkmoon) {
    const dm = data.darkmoon;
    darkmoonHtml = `
      <div class="kp-section kp-darkmoon">
        <div class="kp-section-header">
          <span class="kp-section-title">🎪 Darkmoon Faire <span class="kp-badge-total">${dm.reward}</span></span>
          <span class="kp-section-sub">Maandelijks — ${dm.note || ''}</span>
        </div>
        <div class="kp-dm-row">
          <span class="kp-dm-quest">Quest: <strong>${dm.quest}</strong></span>
          ${dm.npc ? `<span class="kp-dm-npc">NPC: ${dm.npc}</span>` : ''}
        </div>
      </div>
    `;
  }

  // Eenmalige bronnen
  let onetimeHtml = '';
  if (data.onetime && data.onetime.length > 0) {
    const rows = data.onetime.map(o => `
      <tr>
        <td class="kp-item-name">${o.source}</td>
        <td class="kp-kp-val">${o.kp} KP</td>
        <td class="kp-note-text-inline">${o.note || ''}</td>
      </tr>
    `).join('');

    onetimeHtml = `
      <div class="kp-section">
        <div class="kp-section-header">
          <span class="kp-section-title">⭐ Eenmalige KP bronnen</span>
        </div>
        <table class="kp-table">
          <thead><tr><th>Bron</th><th>KP</th><th>Opmerking</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  }

  // Tip
  let tipHtml = '';
  if (data.tip) {
    tipHtml = `<div class="kp-tip">${data.tip}</div>`;
  }

  // Totaal KP overzicht (schat + onetime max)
  const treasureTotal = (data.treasures || []).length * 3;
  const onetimeTotal = (data.onetime || []).reduce((sum, o) => {
    const n = parseInt(o.kp);
    return sum + (isNaN(n) ? 0 : n);
  }, 0);
  const darkmoonKp = data.darkmoon ? 3 : 0;

  const summaryHtml = `
    <div class="kp-summary">
      <div class="kp-summary-item"><span class="kp-sum-label">📦 Schatten</span><span class="kp-sum-val">${treasureTotal} KP</span></div>
      <div class="kp-summary-item"><span class="kp-sum-label">⭐ Eenmalig</span><span class="kp-sum-val">${onetimeTotal} KP</span></div>
      <div class="kp-summary-item"><span class="kp-sum-label">🎪 Darkmoon</span><span class="kp-sum-val">${darkmoonKp} KP</span></div>
      <div class="kp-summary-item kp-sum-total"><span class="kp-sum-label">Totaal opstart</span><span class="kp-sum-val">${treasureTotal + onetimeTotal + darkmoonKp} KP</span></div>
    </div>
  `;

  el.innerHTML = summaryHtml + treasuresHtml + weeklyHtml + onetimeHtml + darkmoonHtml + tipHtml;
}



function copyTomTom(btn) {
  const ways = decodeURIComponent(btn.dataset.ways);
  navigator.clipboard.writeText(ways).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✅ Gekopieerd!';
    setTimeout(() => btn.textContent = orig, 2000);
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = ways;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = '✅ Gekopieerd!';
    setTimeout(() => btn.textContent = '📋 Kopieer /ttpaste', 2000);
  });
}

function getProfName(p, lang) {
  if (p.name && p.name[lang]) return p.name[lang];
  if (p.name && p.name.nl) return p.name.nl;
  return p.id || 'Profession';
}


// ============================================================
// CSS — voeg toe aan de <style> sectie van index.html
// (na de bestaande .kp-tree / .kp-node stijlen)
// ============================================================

/*

.kp-summary {
  display: flex; gap: 10px; flex-wrap: wrap;
  background: rgba(0,0,0,0.3);
  border: 1px solid #3a3a2a;
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 16px;
}
.kp-summary-item {
  display: flex; flex-direction: column; align-items: center;
  min-width: 80px; background: rgba(255,255,255,0.04);
  border-radius: 6px; padding: 8px 12px; gap: 2px;
}
.kp-sum-label { font-size: 0.72em; color: #a0906a; }
.kp-sum-val   { font-size: 1.1em; font-weight: 700; color: #f0d080; }
.kp-sum-total .kp-sum-label { color: #c89b3c; }
.kp-sum-total .kp-sum-val   { color: #ffd700; font-size: 1.25em; }

.kp-section {
  margin-bottom: 18px;
  background: rgba(0,0,0,0.2);
  border: 1px solid #2a2a1a;
  border-radius: 8px;
  overflow: hidden;
}
.kp-section-header {
  display: flex; align-items: center; flex-wrap: wrap; gap: 8px;
  padding: 10px 14px;
  background: rgba(200,155,60,0.1);
  border-bottom: 1px solid #3a3020;
}
.kp-section-title {
  font-weight: 700; font-size: 0.95em; color: #e8d080;
  display: flex; align-items: center; gap: 8px;
}
.kp-section-sub { font-size: 0.75em; color: #808060; margin-left: auto; }
.kp-badge-total {
  background: rgba(200,155,60,0.25); color: #f0c040;
  border-radius: 10px; padding: 2px 8px; font-size: 0.8em; font-weight: 600;
}

.kp-table { width: 100%; border-collapse: collapse; font-size: 0.85em; }
.kp-table th {
  text-align: left; padding: 6px 10px;
  color: #a09060; font-size: 0.8em; font-weight: 600;
  border-bottom: 1px solid #2a2a1a;
}
.kp-table td { padding: 6px 10px; border-bottom: 1px solid #1a1a0f; vertical-align: top; }
.kp-table tr:last-child td { border-bottom: none; }
.kp-table tr:hover td { background: rgba(255,255,255,0.03); }

.kp-num         { color: #606050; width: 28px; text-align: center; }
.kp-item-name   { color: #d4c090; font-weight: 500; }
.kp-zone        { color: #88a060; font-size: 0.82em; }
.kp-way-code    {
  font-family: monospace; font-size: 0.82em;
  background: rgba(0,0,0,0.4); color: #88c8a0;
  padding: 2px 6px; border-radius: 4px; white-space: nowrap;
  cursor: pointer; transition: background .15s, color .15s;
}
.kp-way-code:hover { background: #88c8a0; color: #000; }
.kp-no-way      { color: #404030; }
.kp-kp-val      { color: #f0c040; font-weight: 700; width: 60px; }
.kp-note-text-inline { color: #9090a0; font-size: 0.8em; font-style: italic; }
.kp-note        { cursor: help; color: #a08040; width: 24px; text-align: center; }

.kp-note-row td  { background: rgba(160,120,40,0.08) !important; }
.kp-note-text   {
  font-size: 0.78em; color: #a09060; font-style: italic;
  padding: 0 10px 6px 38px; display: block;
}

.kp-darkmoon    { background: rgba(120,0,180,0.08); border-color: #3a2050; }
.kp-dm-row      { padding: 8px 14px; display: flex; gap: 20px; flex-wrap: wrap; }
.kp-dm-quest    { color: #c090e0; font-size: 0.88em; }
.kp-dm-npc      { color: #9080b0; font-size: 0.85em; }

.kp-tip {
  background: rgba(40,60,20,0.5);
  border: 1px solid #3a5020;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 0.85em; color: #a0c070;
  margin-top: 4px;
}

.kp-tomtom-btn {
  margin-left: auto;
  background: rgba(40,100,60,0.4);
  border: 1px solid #30603a;
  color: #80d090; font-size: 0.8em;
  padding: 4px 12px; border-radius: 6px; cursor: pointer;
  transition: background 0.2s;
}
.kp-tomtom-btn:hover { background: rgba(40,100,60,0.7); }

.kp-empty-note { padding: 14px; color: #806040; font-style: italic; font-size: 0.88em; }

@media (max-width: 600px) {
  .kp-summary { gap: 6px; padding: 8px; }
  .kp-summary-item { min-width: 60px; padding: 6px 8px; }
  .kp-way-code { font-size: 0.72em; }
  .kp-table th, .kp-table td { padding: 4px 6px; }
}

*/


function updateProfLang(){
  const ht=document.getElementById('prof-hero-title');
  if(ht)ht.innerHTML=PROF_UI[lang].hero_title.replace('— ','— <span>')+' </span>';
  const hs=document.getElementById('prof-hero-sub');
  if(hs)hs.textContent=PROF_UI[lang].hero_sub;
  
  // Update tab labels
  const ui = PROF_UI[lang];
  const tTrainer = document.querySelector('.pdet-tab[onclick*="ptab-trainer"]'); if(tTrainer) tTrainer.innerHTML = ui.tab_trainer;
  const tSpecs = document.querySelector('.pdet-tab[onclick*="ptab-specs"]'); if(tSpecs) tSpecs.innerHTML = ui.tab_specs;
  const tItems = document.querySelector('.pdet-tab[onclick*="ptab-items"]'); if(tItems) tItems.innerHTML = ui.tab_items;
  const tOrders = document.querySelector('.pdet-tab[onclick*="ptab-orders"]'); if(tOrders) tOrders.innerHTML = ui.tab_orders;
    const tKpbronnen = document.querySelector('.pdet-tab[onclick*="ptab-kpbronnen"]'); if(tKpbronnen) tKpbronnen.innerHTML = ui.tab_kpbronnen;

  if(document.getElementById('prof-detail').classList.contains('visible')&&currentProf){
    showProf(currentProf.id);
  } else { buildProfGrid(); }
}

function renderProfGuide(profId) {
  const container = document.getElementById('prof-guide-content');
  if (!container) return;
  
  const data = typeof PROF_GUIDE_DATA !== 'undefined' && PROF_GUIDE_DATA[profId] ? PROF_GUIDE_DATA[profId][lang] : null;
  if (!data) return;

  let html = `
    <h2 style="font-family: 'Cinzel', serif; color: var(--gold); text-align: center; margin-bottom: 12px; font-size: clamp(20px, 5vw, 28px);">${data.title}</h2>
    <p style="font-size: 14px; margin-bottom: 24px; text-align: center; color: var(--text);">${data.intro}</p>
  `;

  if (data.sections) {
    data.sections.forEach(sec => {
      html += `<h3 style="font-family: 'Cinzel', serif; color: var(--gold2); margin-top: 24px; margin-bottom: 16px; font-size: 20px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">${sec.sectionTitle}</h3>`;
      html += `<div style="display: flex; flex-direction: column; gap: 16px;">`;
      
      sec.steps.forEach(step => {
        html += `
          <div style="background: rgba(0,0,0,0.2); border: 1px solid var(--border); border-radius: 8px; padding: 16px;">
            <h4 style="font-family: 'Cinzel', serif; color: var(--accent); margin-bottom: 8px; font-size: 16px;">${step.title}</h4>
            <p style="font-size: 13px; color: var(--text); line-height: 1.5;">${step.text}</p>
          </div>
        `;
      });
      
      html += `</div>`;
    });
  } else if (data.steps) {
    html += `<div style="display: flex; flex-direction: column; gap: 16px;">`;
    data.steps.forEach(step => {
      html += `
        <div style="background: rgba(0,0,0,0.2); border: 1px solid var(--border); border-radius: 8px; padding: 16px;">
          <h3 style="font-family: 'Cinzel', serif; color: var(--accent); margin-bottom: 8px; font-size: 16px;">${step.title}</h3>
          <p style="font-size: 13px; color: var(--text); line-height: 1.5;">${step.text}</p>
        </div>
      `;
    });
    html += `</div>`;
  }

  html += `
    <div style="background-color: rgba(200, 168, 75, 0.1); padding: 16px; border-left: 4px solid var(--gold); margin-top: 32px; border-radius: 0 8px 8px 0;">
      <p style="font-size: 13px; color: var(--text); margin: 0;">${data.tip}</p>
    </div>
  `;

  container.innerHTML = html;
}

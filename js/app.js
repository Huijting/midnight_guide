// ── VERSIE ──
const VERSION = "v1.1";
const VERSION_DATE = "2026-03-20";


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
    tldr_label: "TL;DR",
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
    tab_home: "<i class=\"fas fa-home\" style=\"margin-right:4px\"></i> Home", tab_dungeons: "<i class=\"fas fa-skull\" style=\"margin-right:4px\"></i> Dungeons", tab_professions: "<i class=\"fas fa-hammer\" style=\"margin-right:4px\"></i> Professies", tab_weekly: "<i class=\"fas fa-calendar-alt\" style=\"margin-right:4px\"></i> Wekelijks", tab_affixes: "<i class=\"fas fa-bolt\" style=\"margin-right:4px\"></i> Affixes", tab_raids: "<i class=\"fas fa-dungeon\" style=\"margin-right:4px\"></i> Raids", tab_specs: "<i class=\"fas fa-crosshairs\" style=\"margin-right:4px\"></i> Specs", tab_prey: "<i class=\"fas fa-bullseye\" style=\"margin-right:4px\"></i> Prey", tab_delves: "💎 Delves", tab_glossary: "📖 Woordenlijst",
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
    tldr_label: "TL;DR",
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
    tab_home: "<i class=\"fas fa-home\" style=\"margin-right:4px\"></i> Home", tab_dungeons: "<i class=\"fas fa-skull\" style=\"margin-right:4px\"></i> Dungeons", tab_professions: "<i class=\"fas fa-hammer\" style=\"margin-right:4px\"></i> Professions", tab_weekly: "<i class=\"fas fa-calendar-alt\" style=\"margin-right:4px\"></i> Weekly", tab_affixes: "<i class=\"fas fa-bolt\" style=\"margin-right:4px\"></i> Affixes", tab_raids: "<i class=\"fas fa-dungeon\" style=\"margin-right:4px\"></i> Raids", tab_specs: "<i class=\"fas fa-crosshairs\" style=\"margin-right:4px\"></i> Specs", tab_prey: "<i class=\"fas fa-bullseye\" style=\"margin-right:4px\"></i> Prey", tab_delves: "💎 Delves", tab_glossary: "📖 Glossary",
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
    tldr_label: "TL;DR",
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
    tab_home: "<i class=\"fas fa-home\" style=\"margin-right:4px\"></i> Hjem", tab_dungeons: "<i class=\"fas fa-skull\" style=\"margin-right:4px\"></i> Dungeons", tab_professions: "<i class=\"fas fa-hammer\" style=\"margin-right:4px\"></i> Erhverv", tab_weekly: "<i class=\"fas fa-calendar-alt\" style=\"margin-right:4px\"></i> Ugentlig", tab_affixes: "<i class=\"fas fa-bolt\" style=\"margin-right:4px\"></i> Affixes", tab_raids: "<i class=\"fas fa-dungeon\" style=\"margin-right:4px\"></i> Raids", tab_specs: "<i class=\"fas fa-crosshairs\" style=\"margin-right:4px\"></i> Specs", tab_prey: "<i class=\"fas fa-bullseye\" style=\"margin-right:4px\"></i> Prey", tab_delves: "💎 Delves", tab_glossary: "📖 Ordbog",
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
  if (document.body.classList.contains('mode-prey')) renderPreyGuide();
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
  document.getElementById('tab-lbl-home').innerHTML = u.tab_home;
  document.getElementById('tab-lbl-dungeons').innerHTML = u.tab_dungeons;
  document.getElementById('tab-lbl-professions').innerHTML = u.tab_professions;
  document.getElementById('tab-lbl-weekly').innerHTML = u.tab_weekly;
  document.getElementById('tab-lbl-specs').innerHTML = u.tab_specs;
  document.getElementById('tab-lbl-affixes').innerHTML = u.tab_affixes;
  const preyLbl = document.getElementById('tab-lbl-prey'); if(preyLbl) preyLbl.innerHTML = u.tab_prey;
  document.getElementById('tab-lbl-raids').innerHTML = u.tab_raids;
  const delvesLbl = document.getElementById('tab-lbl-delves'); if (delvesLbl) delvesLbl.innerHTML = u.tab_delves || delvesLbl.innerHTML;
  const _glbl=document.getElementById('tab-lbl-glossary');
  if(_glbl) _glbl.innerHTML=(u.tab_glossary||u.lbl_glossary||'📖 Woordenlijst');
  updateLandingStrings();
  if(document.body.classList.contains('mode-specs')) buildSpecGrid();
  if(document.body.classList.contains('mode-glossary')) buildGlossaryScreen();
  if(document.body.classList.contains('mode-delves')) buildDelvesScreen();
  const searchPh = document.getElementById('header-search-placeholder');
  if (searchPh) searchPh.textContent = { nl:'Zoek dungeon, spec, professie...', en:'Search dungeon, spec, profession...', da:'Søg dungeon, spec, profession...' }[lang] || 'Search...';
}

// ═══════════════════════════════════════════════════════════════
// THEME
// ═══════════════════════════════════════════════════════════════
function updateLandingStrings() {
  const LANDING = {
    nl: {
      title: 'Midnight Guide',
      subtitle: 'Jouw WoW: Midnight companion',
      news: '💎 <strong>v1.1</strong> — Klik op een Delve-naam voor tips. Full Guide voor complete walkthrough!',
      tip: '<strong>Tip:</strong> Installeer deze app op je PC via de 📲-knop rechtsboven, of via het installeer-icoon in je adresbalk — dan werkt hij ook offline!',
      credits: 'Gemaakt door Inchy & Gemma · WoW: Midnight · Niet officieel',
      d_title:'Dungeons', d_desc:'Boss tactieken, M+ routes en tips per dungeon', d_count:'8 dungeons',
      r_title:'Raids', r_desc:'Boss mechanics, fases en rol-tactieken', r_count:'3 raids',
      v_title:'Delves', v_desc:'Alle Delves met /way, loot tabel en sleutel-info', v_count:'12 Delves',
      w_title:'Wekelijks', w_desc:'Weekly reset overzicht, World Bosses en affixen', w_count:'Elke week',
      p_title:'Professies', p_desc:'KP gidsen, crafting orders en trainer locaties', p_count:'13 professies',
      s_title:'Specs', s_desc:'Rotaties, stats, macro\'s en consumables', s_count:'38 specs',
    },
    en: {
      title: 'Midnight Guide',
      subtitle: 'Your WoW: Midnight companion',
      news: '💎 <strong>v1.1</strong> — Click a Delve name for tips. Full Guide for complete walkthrough!',
      tip: '<strong>Tip:</strong> Install this app on your PC via the 📲 button top right, or the install icon in your address bar — works offline too!',
      credits: 'Made by Inchy & Gemma · WoW: Midnight · Unofficial',
      d_title:'Dungeons', d_desc:'Boss tactics, M+ routes and tips per dungeon', d_count:'8 dungeons',
      r_title:'Raids', r_desc:'Boss mechanics, phases and role tactics', r_count:'3 raids',
      v_title:'Delves', v_desc:'All Delves with /way, loot table and key info', v_count:'12 Delves',
      w_title:'Weekly', w_desc:'Weekly reset overview, World Bosses and affixes', w_count:'Every week',
      p_title:'Professions', p_desc:'KP guides, crafting orders and trainer locations', p_count:'13 professions',
      s_title:'Specs', s_desc:'Rotations, stats, macros and consumables', s_count:'38 specs',
    },
    da: {
      title: 'Midnight Guide',
      subtitle: 'Din WoW: Midnight-guide',
      news: '💎 <strong>v1.1</strong> — Klik på Delve-navn for tip. Fuld guide til komplet walkthrough!',
      tip: '<strong>Tip:</strong> Installér denne app på din PC via 📲-knappen øverst til højre, eller installér-ikonet i adresselinjen — virker også offline!',
      credits: 'Lavet af Inchy & Gemma · WoW: Midnight · Uofficiel',
      d_title:'Dungeons', d_desc:'Boss-taktikker, M+-ruter og tips per dungeon', d_count:'8 dungeons',
      r_title:'Raids', r_desc:'Boss-mekanikker, faser og rolle-taktikker', r_count:'3 raids',
      v_title:'Delves', v_desc:'Alle Delves med /way, loot-tabel og nøgle-info', v_count:'12 Delves',
      w_title:'Ugentlig', w_desc:'Ugentlig reset-oversigt, verdensbosser og affixer', w_count:'Hver uge',
      p_title:'Erhverv', p_desc:'KP-guider, craft-ordrer og trænerlokationer', p_count:'13 erhverv',
      s_title:'Specs', s_desc:'Rotationer, stats, makroer og forbrugsvarer', s_count:'38 specs',
    },
  };
  const L = LANDING[lang] || LANDING.nl;
  const s = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  const h = (id, val) => { const el = document.getElementById(id); if(el) el.innerHTML = val; };
  const logoEl = document.getElementById('landing-logo');
  if (logoEl) logoEl.src = `assets/midnight-logo-${lang === 'da' ? 'da' : lang === 'en' ? 'en' : 'nl'}.png`;
  h('landing-news', L.news);
  h('landing-tip-text', L.tip);
  s('landing-credits', L.credits);
  s('lc-title-dungeons', L.d_title); s('lc-desc-dungeons', L.d_desc); s('lc-count-dungeons', L.d_count);
  s('lc-title-raids', L.r_title); s('lc-desc-raids', L.r_desc); s('lc-count-raids', L.r_count);
  s('lc-title-delves', L.v_title); s('lc-desc-delves', L.v_desc); s('lc-count-delves', L.v_count);
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
          <span class="card-arrow">&#10132;</span>
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
  const tldrEl = document.getElementById('d-tldr');
  const tldrBlock = document.getElementById('detail-tldr');
  const tldrContent = d.tldr ? t(d.tldr) : (d.route?.summary ? t(d.route.summary) : (d.tips?.[0] ? t(d.tips[0].text) : ''));
  if (tldrEl) tldrEl.textContent = tldrContent;
  if (tldrBlock) tldrBlock.style.display = tldrContent ? 'block' : 'none';
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
        <img class="route-screenshot-img" src="${routeScreenshot}" alt="${d.name} route map" loading="lazy">
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
        <img class="route-screenshot-img" id="floor-img-${d.id}" src="${floorScreenshots[0].img}" alt="${floorScreenshots[0].label}" loading="lazy">
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
  if (typeof refreshWowheadTooltips === 'function') setTimeout(refreshWowheadTooltips, 50);
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
/* Strict dark mode — light theme disabled */
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
  if (typeof refreshWowheadTooltips === 'function') setTimeout(refreshWowheadTooltips, 50);
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

  el.innerHTML = `<div class="dungeon-grid">` + raids.map(r => `
      <div class="dungeon-card raid ${r.available ? '' : 'raid-coming-soon'}" ${r.available ? `onclick="openRaid('${r.id}')"` : ''} style="${r.available ? '' : 'opacity:0.6; cursor:default;'}">
        <div class="card-accent" style="background:linear-gradient(90deg,#a78bfa,#8b5cf6)"></div>
        <div class="card-body">
          <span class="card-badge badge-raid" style="background:rgba(167,139,250,0.12);color:#a78bfa;border:1px solid rgba(167,139,250,0.3)">
            ${r.available ? (lang==='nl'?'BESCHIKBAAR':lang==='da'?'TILGÆNGELIG':'AVAILABLE') : (lang==='nl'?'BINNENKORT':lang==='da'?'SNART':'SOON')}
          </span>
          <div class="card-name" style="display:flex; align-items:center; gap:8px; margin-top: 4px;">
            <span>${r.icon}</span> ${r.name}
          </div>
          <div class="card-zone" style="margin-top:4px;">📍 ${t(r.zone)} &nbsp;•&nbsp; ${t(r.opens)}</div>
          <div class="card-bosses">
            ${r.bosses.map(b => `<span class="boss-chip">${b}</span>`).join('')}
          </div>
          <div class="card-footer">
            <span class="card-level" style="color:#a78bfa">Raid</span>
            <span class="card-arrow">&#10132;</span>
          </div>
        </div>
      </div>
    `).join('') + `</div>`;
}

// ── DELVES UI ──
const DELVES_UI = {
  nl: { delves_title:'Alle Midnight Delves', delves_sub:'Overzicht van alle Delves in Midnight Season 1 met /way om er te komen.', delves_click_hint:'Klik op de Delve-naam voor korte tips.', delve_name:'Delve', zone_way:'Zone / Gebied', key_info_title:'Sleutel-info', loot_title:'Loot Tabel', loot_sub:'Item levels per Tier — Midnight Season 1', tier:'Tier', copy_way:'Kopieer /way',
    bountiful_alt:'Bountiful Delves — Shift+J om in-game te openen',
    detail_gimmick:'Wat te doen', detail_danger:'Gevaar', detail_tip:'Tip', wowhead:'→ Wowhead',
    full_guide_btn:'Volledige gids', back_btn:'← Terug' },
  en: { delves_title:'All Midnight Delves', delves_sub:'Overview of all Delves in Midnight Season 1 with /way to get there.', delves_click_hint:'Click the Delve name for quick tips.', delve_name:'Delve', zone_way:'Zone / Area', key_info_title:'Key Info', loot_title:'Loot Table', loot_sub:'Item levels per Tier — Midnight Season 1', tier:'Tier', copy_way:'Copy /way',
    bountiful_alt:'Bountiful Delves — Shift+J to open in-game',
    detail_gimmick:'Main gimmick', detail_danger:'Biggest danger', detail_tip:'Pro-tip', wowhead:'→ Wowhead',
    full_guide_btn:'Full Guide', back_btn:'← Back' },
  da: { delves_title:'Alle Midnight Delves', delves_sub:'Oversigt over alle Delves i Midnight Sæson 1 med /way for at komme derhen.', delves_click_hint:'Klik på Delve-navnet for korte tip.', delve_name:'Delve', zone_way:'Zone / område', key_info_title:'Nøgle-info', loot_title:'Loot-tabel', loot_sub:'Item levels per Tier — Midnight Season 1', tier:'Tier', copy_way:'Kopier /way',
    bountiful_alt:'Bountiful Delves — Shift+J for at åbne in-game',
    detail_gimmick:'Hovedopgave', detail_danger:'Største fare', detail_tip:'Tip', wowhead:'→ Wowhead',
    full_guide_btn:'Fuld guide', back_btn:'← Tilbage' },
};

function buildDelvesScreen() {
  if (typeof DELVES_DATA === 'undefined') return;
  const ui = DELVES_UI[lang] || DELVES_UI.nl;

  const delves = DELVES_DATA.delves;
  const keyInfo = DELVES_DATA.keyInfo[lang] || DELVES_DATA.keyInfo.nl;
  const lootTable = DELVES_DATA.lootTable;
  const delveById = {};
  delves.forEach(d => { delveById[d.id] = d; });

  let html = '';

  // Bountiful — afbeelding per taal (Shift+J instructie)
  const bountifulImg = `assets/delves/bountiful-delves-${lang === 'da' ? 'da' : lang === 'en' ? 'en' : 'nl'}.png`;
  html += `<div class="delves-bountiful-banner">
    <img src="${bountifulImg}" alt="${ui.bountiful_alt}" class="delves-bountiful-img" loading="lazy">
  </div>`;

  // Alle Delves — tabel met Delve naam en Zone + /way
  html += `<div class="delves-list-section">
    <h3 class="delves-section-title">${ui.delves_title}</h3>
    <p class="delves-section-sub">${ui.delves_sub}</p>
    <p class="delves-section-hint">💡 ${ui.delves_click_hint}</p>
    <div class="delves-list-table-wrap">
      <table class="delves-list-table">
        <thead>
          <tr>
            <th>${ui.delve_name}</th>
            <th>${ui.zone_way}</th>
          </tr>
        </thead>
        <tbody>`;
  delves.forEach(d => {
    const zoneWay = d.way
      ? `${d.zoneName} ; <span class="way-pill" onclick="event.stopPropagation();copyDelvesWay(this.dataset.way)" data-way="${d.way.replace(/"/g, '&quot;')}" title="${ui.copy_way}">📋 ${d.way}</span>`
      : d.zoneName;
    html += `<tr>
      <td><span class="delves-delve-link" onclick="openDelveDetail('${d.id}')" role="button" tabindex="0">${d.name}</span></td>
      <td class="delves-zone-cell">${zoneWay}</td>
    </tr>`;
  });
  html += `</tbody></table></div></div>`;

  // Key Info — opvallend kader (Restored Coffer Key = echte WoW-icoon)
  html += `<div class="delves-key-info">
    <a href="https://www.wowhead.com/item=254269" class="wh-link delves-key-info-icon" data-wh-rename="false" target="_blank" title="Restored Coffer Key">&nbsp;</a>
    <div class="delves-key-info-content">
      <strong>${ui.key_info_title}:</strong> ${keyInfo.replace(/Bountiful Coffer/g, '<a href="https://www.wowhead.com/item=254250" class="wh-link" data-wh-rename="false" target="_blank">Bountiful Coffer</a>')}
    </div>
  </div>`;

  // Loot Tabel — zoals screenshot (donker, gold borders, icons)
  html += `<div class="delves-loot-section">
    <h3 class="delves-section-title">${ui.loot_title}</h3>
    <p class="delves-section-sub">${ui.loot_sub}</p>
    <div class="delves-loot-table-wrap">
      <table class="delves-loot-table">
        <thead>
          <tr>
            <th>${ui.tier}</th>
            <th><a href="https://www.wowhead.com/item=254250" class="wh-link delves-icon-link" data-wh-rename="false" target="_blank">Bountiful Coffer</a></th>
            <th><a href="https://www.wowhead.com/item=265714" class="wh-link delves-icon-link" data-wh-rename="false" target="_blank">Trovehunter's Bounty</a></th>
            <th><a href="https://www.wowhead.com/object=381035" class="wh-link delves-icon-link" data-wh-rename="false" target="_blank">Great Vault</a></th>
          </tr>
        </thead>
        <tbody>`;
  lootTable.forEach(row => {
    const bVal = row.bountiful;
    const tVal = row.trovehunter === '—' ? '—' : row.trovehunter;
    const gVal = row.greatVault;
    const goldClass = (bVal >= 250 || tVal >= 259 || gVal >= 259) ? ' delves-ilvl-gold' : '';
    html += `<tr>
      <td>${row.tier}</td>
      <td class="${goldClass}">${bVal}</td>
      <td class="${goldClass}">${tVal}</td>
      <td class="${goldClass}">${gVal}</td>
    </tr>`;
  });
  html += `</tbody></table></div></div>`;

  const contentEl = document.getElementById('delves-content');
  if (contentEl) {
    contentEl.innerHTML = html;
    if (typeof $WowheadPower !== 'undefined') { ($WowheadPower.refreshLinks || $WowheadPower.refresh)(); }
  }
}

let delveDetailState = { id: null, view: 'summary' };

function openDelveDetail(id) {
  const d = DELVES_DATA.delves.find(x => x.id === id);
  if (!d || !d.details) return;
  delveDetailState = { id, view: 'summary' };
  const ui = DELVES_UI[lang] || DELVES_UI.en;
  const det = d.details[lang] || d.details.en;
  document.getElementById('delve-detail-title').textContent = d.name;
  const hasFullGuide = d.fullGuide && (d.fullGuide[lang] || d.fullGuide.en);
  document.getElementById('delve-detail-content').innerHTML = `
    <ul class="delve-detail-bullets">
      <li><strong>${ui.detail_gimmick}:</strong> ${det.gimmick}</li>
      <li><strong>${ui.detail_danger}:</strong> ${det.danger}</li>
      <li><strong>${ui.detail_tip}:</strong> ${det.tip}</li>
    </ul>
    ${hasFullGuide ? `<button class="delve-detail-btn delve-full-guide-btn" onclick="showDelveFullGuide('${id}')">📖 ${ui.full_guide_btn}</button>` : ''}`;
  const wowheadEl = document.getElementById('delve-detail-wowhead');
  if (wowheadEl && d.url) { wowheadEl.href = d.url; wowheadEl.textContent = ui.wowhead; wowheadEl.style.display = ''; }
  document.getElementById('delve-detail-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function showDelveFullGuide(id) {
  const d = DELVES_DATA.delves.find(x => x.id === id);
  if (!d || !d.fullGuide) return;
  delveDetailState = { id, view: 'full' };
  const ui = DELVES_UI[lang] || DELVES_UI.en;
  const guide = d.fullGuide[lang] || d.fullGuide.en;
  document.getElementById('delve-detail-content').innerHTML = `
    <button class="delve-detail-btn delve-back-btn" onclick="backToDelveSummary()">${ui.back_btn}</button>
    <div class="delve-full-guide-body">${guide}</div>`;
  document.getElementById('delve-detail-content').scrollTop = 0;
}

function backToDelveSummary() {
  if (!delveDetailState.id) return;
  openDelveDetail(delveDetailState.id);
}

function closeDelveDetail() {
  delveDetailState = { id: null, view: 'summary' };
  document.getElementById('delve-detail-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function copyDelvesWay(way) {
  if (!way) return;
  navigator.clipboard.writeText(way).then(() => {
    const toast = document.getElementById('toast-notification');
    const msg = (lang === 'en' ? 'Copied!' : lang === 'da' ? 'Kopieret!' : 'Gekopieerd!');
    if (toast) { toast.textContent = msg; toast.style.opacity = '1'; setTimeout(() => { toast.style.opacity = '0'; }, 1500); }
  });
}

function buildAffixScreen(){
  const ui = (typeof AFFIX_UI !== 'undefined') ? (AFFIX_UI[lang] || AFFIX_UI.nl) : null;
  if (!ui) return;
  document.getElementById('affixes-hero-title').textContent = ui.title;
  document.getElementById('affixes-hero-sub').textContent = ui.subtitle;
  const el = document.getElementById('affixes-content');
  let html = '';
  if (ui.week1_affixes && ui.week1_affixes.length) {
    html += `<div class="affix-week1-block">
      <div class="affix-week1-title">${ui.week1_title}</div>
      <div class="affix-week1-sub">${ui.week1_sub}</div>
      <div class="affix-week1-list">${ui.week1_affixes.map(a => {
        const warn = a.warning ? '<div class="affix-week1-warning">⚠️ -15 sec per death!</div>' : '';
        return `<div class="affix-week1-item ${a.badge === 'seasonal' ? 'seasonal-glow' : ''}" style="border-left-color:${a.color}">
          <span class="affix-week1-level">${a.level}+</span>
          <span class="affix-week1-icon">${a.icon}</span>
          <span class="affix-week1-name">${a.name}</span>
          <span class="affix-type-badge ${(a.badge||'').toLowerCase()}">${(ui.badge_labels && ui.badge_labels[a.badge]) || a.badge || ''}</span>
          <div class="affix-week1-what">${a.what}</div>${warn}</div>`;
      }).join('')}</div>
    </div>`;
  }
  html += ui.sections.map(s => {
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
  el.innerHTML = html;
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
  document.body.classList.remove('detail-open','nav-menu-open');
  document.getElementById('hamburger-btn')?.classList.remove('active');
  document.querySelectorAll('.header-nav-link').forEach(a=>a.classList.remove('active'));
  const navMap={dungeons:'nav-dungeons',specs:'nav-classes',raids:'nav-raids',weekly:'nav-weekly'};
  const navEl=document.getElementById(navMap[mode]);
  if(navEl)navEl.classList.add('active');
  document.getElementById('mode-tab-home').classList.toggle('active',mode==='home');
  document.getElementById('mode-tab-dungeons').classList.toggle('active',mode==='dungeons');
  document.getElementById('mode-tab-professions').classList.toggle('active',mode==='professions');
  document.getElementById('mode-tab-weekly').classList.toggle('active',mode==='weekly');
  document.getElementById('mode-tab-specs').classList.toggle('active',mode==='specs');
  document.getElementById('mode-tab-affixes').classList.toggle('active',mode==='affixes');
  document.getElementById('mode-tab-raids').classList.toggle('active',mode==='raids');
  const delvesTab = document.getElementById('mode-tab-delves'); if(delvesTab) delvesTab.classList.toggle('active',mode==='delves');
  const preyTab = document.getElementById('mode-tab-prey'); if(preyTab) preyTab.classList.toggle('active',mode==='prey');
  const _gtab=document.getElementById('mode-tab-glossary');
  if(_gtab) _gtab.classList.toggle('active',mode==='glossary');
  const sb=document.getElementById('spec-btn');
  if(sb)sb.style.display=(mode==='dungeons' || mode==='raids')?'':'none';
  document.getElementById('back-btn').style.display='none';
  if(mode==='home'){
    updateLandingStrings();
  } else if(mode==='prey'){
    document.getElementById('home-screen').style.display = 'none'; document.getElementById('detail-screen').style.display = 'none'; renderPreyGuide();
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
  } else if(mode==='delves'){
    buildDelvesScreen();
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
  
    ['home','dungeons','professions','weekly','affixes','raids','delves','glossary','specs','prey'].forEach(id=>{
      const el=document.getElementById(id+'-screen');
      if(el)el.style.display=(id===mode)?'':'none';
    });
    window.scrollTo(0,0);
}

function buildProfGrid(){
  const grid=document.getElementById('prof-grid');if(!grid)return;
  const ui=PROF_UI[lang];
  const cat={gathering:ui.gathering,crafting:ui.crafting,secondary:ui.secondary};
  const sortedProfs = [...ALL_PROFS].sort((a,b) => pT(a.name).localeCompare(pT(b.name)));
  grid.innerHTML=sortedProfs.map(p=>`
    <div class="prof-card" onclick="showProf('${p.id}')">
      <div class="prof-card-icon">${p.icon}</div>
      <div class="prof-card-name">${pT(p.name)}</div>
      <div class="prof-card-cat">${cat[p.cat]||p.cat}</div>
      <div class="prof-card-tier tier-${p.tier}">${p.tier}</div>
    </div>`).join('');
}

/** Vervangt platte item-namen in HTML door Wowhead-links (wrapItem uit ui.js) */
function processItemLinksInHtml(html) {
  if (typeof wrapItem !== 'function') return html;
  const items = ['Flask of the Void', 'Flask of Dawn', 'Void-Infused Potions'];
  let out = html;
  for (const name of items) {
    const esc = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out.replace(new RegExp('\\b' + esc + '\\b', 'g'), '{{ITEM:' + name + '}}');
  }
  for (const name of items) {
    out = out.replace(new RegExp('\\{\\{ITEM:' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\}\\}', 'g'), wrapItem(name));
  }
  return out;
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
       <div class="trainer-way" onclick="copyWay(this)" data-way="${p.trainer.way}" title="${(typeof WEEKLY_UI !== 'undefined' && WEEKLY_UI[lang]) ? WEEKLY_UI[lang].copy_tip : 'Klik om te kopiëren'}">📋 ${p.trainer.way}</div>
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
           <div class="item-desc">${typeof wrapItem === 'function' ? processItemLinksInHtml(pT(it.desc)) : pT(it.desc)}</div>
           ${it.tag?`<div class="item-tag">${it.tag}</div>`:''}
         </div>`).join('')}
       </div>
     </div>`;
  const ordersHtml = typeof wrapItem === 'function'
    ? processItemLinksInHtml(pT(p.orders))
    : pT(p.orders);
  document.getElementById('ptab-orders').innerHTML=
    `<div class="pdet-section"><h3>${ui.orders_head}</h3>
       <div class="orders-text">${ordersHtml}</div>
     </div>`;
  renderKpGids(p);
  renderKpSources(p);
  
    const guideBtn = document.getElementById('pdet-tab-guide');
    if (guideBtn && guideBtn.style.display !== 'none') {
      switchProfTab(guideBtn, 'ptab-guide');
    } else {
      switchProfTab(document.querySelector('.pdet-tab:not([style*="display: none"])'), 'ptab-trainer');
    }

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
  const el = document.getElementById('kp-bronnen-container');
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
    const rows = data.treasures.map((t, i) => {
        const treasureId = `kp_${p.id}_${i}`;
        return `
        <tr>
          <td class="kp-num">
            <input type="checkbox" class="kp-checkbox" data-tid="${treasureId}" onchange="toggleKpTreasure(this)" title="Markeer als gevonden">
          </td>
          <td class="kp-item-name">${t.name}</td>
          <td class="kp-zone">${t.zone}</td>
          <td class="kp-way">
            ${t.way ? `<span class="kp-way-code" onclick="copyWay(this)" data-way="${t.way}" title="${(typeof WEEKLY_UI !== 'undefined' && WEEKLY_UI[lang]) ? WEEKLY_UI[lang].copy_tip : 'Klik om te kopiëren'}">📋 ${t.way}</span>` : '<span class="kp-no-way">—</span>'}
          </td>
          ${t.note ? `<td class="kp-note" title="${t.note}">💡</td>` : '<td></td>'}
        </tr>
        ${t.note ? `<tr class="kp-note-row"><td colspan="5"><span class="kp-note-text">${t.note}</span></td></tr>` : ''}
      `;
    }).join('');

    const tomtomBtn = tomtomLines
      ? `<button class="kp-tomtom-btn" onclick="copyTomTom(this)" data-ways="${encodeURIComponent(tomtomLines)}">📋 Kopieer /ttpaste</button>`
      : '';


    const charTip = {
      nl: '💡 Tip: Voeg je characters toe met de + knop om per character bij te houden welke schatten je al hebt gevonden!',
      en: '💡 Tip: Add your characters with the + button to track which treasures you have already found per character!',
      da: '💡 Tip: Tilføj dine karakterer med + knappen for at holde styr på, hvilke skatte du allerede har fundet pr. karakter!'
    }[lang] || '💡 Tip: Voeg je characters toe met de + knop om per character bij te houden welke schatten je al hebt gevonden!';

    treasuresHtml = `
      <div class="kp-section">
        <div class="kp-section-header" style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: space-between;">

            <div>
              <span class="kp-section-title">💎 Schatten <span class="kp-badge-total">${data.treasures.length} × 3 KP = ${data.treasures.length * 3} KP</span></span>
              <span class="kp-section-sub">Eenmalig per character</span>
            </div>
            <div style="display: flex; gap: 10px; align-items: center;">
              <div style="display: flex; gap: 4px; align-items: center;">
                  <select id="kp-char-select" onchange="changeKpChar()" style="background: var(--deep); color: var(--text); border: 1px solid var(--border); border-radius: 6px; padding: 4px 8px; font-size: 13px; max-width: 120px;">
                    ${(JSON.parse(localStorage.getItem('midnight_chars') || '["Main"]')).map(c => `<option value="${c}" ${c === currentKpChar ? 'selected' : ''}>${c}</option>`).join('')}
                  </select>
                  <button onclick="addKpChar()" title="Character toevoegen" style="background:var(--panel); border:1px solid var(--border); color:var(--gold); border-radius:4px; padding:2px 8px; cursor:pointer; font-weight:bold;">+</button>
                  <button onclick="deleteKpChar()" title="Character verwijderen" style="background:var(--panel); border:1px solid var(--border); color:#ef4444; border-radius:4px; padding:2px 8px; cursor:pointer; font-weight:bold;">-</button>
                </div>
              ${tomtomBtn}
            </div>
          </div>
          <div style="font-size: 12px; color: var(--muted); margin-bottom: 12px; font-style: italic; background: rgba(200, 168, 75, 0.05); padding: 8px 12px; border-radius: 6px; border-left: 3px solid var(--gold);">${charTip}</div>
        <table class="kp-table">
          <thead>
            <tr><th>✔</th><th>Naam</th><th>Zone</th><th>/way</th><th></th></tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  } else {
    treasuresHtml = `<div class="kp-section"><div class="kp-empty-note">📝 Geen schatten gedocumenteerd voor deze professie.</div></div>`;
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
          <span class="kp-section-title">🎁 Eenmalige KP bronnen</span>
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
      <div class="kp-summary-item"><span class="kp-sum-label">💎 Schatten</span><span class="kp-sum-val">${treasureTotal} KP</span></div>
      <div class="kp-summary-item"><span class="kp-sum-label">🎁 Eenmalig</span><span class="kp-sum-val">${onetimeTotal} KP</span></div>
      <div class="kp-summary-item"><span class="kp-sum-label">🎪 Darkmoon</span><span class="kp-sum-val">${darkmoonKp} KP</span></div>
      <div class="kp-summary-item kp-sum-total"><span class="kp-sum-label">Totaal opstart</span><span class="kp-sum-val">${treasureTotal + onetimeTotal + darkmoonKp} KP</span></div>
    </div>
  `;

  const kpBronnenHeader = {
    nl: 'Deel 4: KP Schatten & Bronnen',
    en: 'Part 4: KP Treasures & Sources',
    da: 'Del 4: KP Skatte & Kilder'
  }[lang] || 'Deel 4: KP Schatten & Bronnen';

  const headerHtml = `
    <div style="text-align: center; margin: 32px 0; opacity: 0.5;"><span style="color: var(--gold); font-size: 24px;">✧ ✧ ✧</span></div>
    <h3 style="font-family: 'Inter', sans-serif; color: var(--gold2); margin-top: 32px; margin-bottom: 16px; font-size: 20px; border-bottom: 1px solid var(--border); padding-bottom: 8px; text-align: center;">${kpBronnenHeader}</h3>
  `;

  el.innerHTML = headerHtml + summaryHtml + treasuresHtml + weeklyHtml + onetimeHtml + darkmoonHtml + tipHtml;
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
    <h2 style="font-family: 'Inter', sans-serif; color: var(--gold); text-align: center; margin-bottom: 12px; font-size: clamp(20px, 5vw, 28px);">${data.title}</h2>
    <p style="font-size: 14px; margin-bottom: 24px; text-align: center; color: var(--text);">${data.intro}</p>
  `;

  if (data.sections) {
    data.sections.forEach(sec => {
      if (html.includes('<div style="display: flex; flex-direction: column; gap: 16px;">')) {
        html += `<div style="text-align: center; margin: 32px 0; opacity: 0.5;"><span style="color: var(--gold); font-size: 24px;">✧ ✧ ✧</span></div>`;
      }
      html += `<h3 style="font-family: 'Inter', sans-serif; color: var(--gold2); margin-top: 24px; margin-bottom: 16px; font-size: 20px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">${sec.sectionTitle}</h3>`;
      html += `<div style="display: flex; flex-direction: column; gap: 16px;">`;
      
      sec.steps.forEach(step => {
        html += `
          <div style="background: rgba(0,0,0,0.2); border: 1px solid var(--border); border-radius: 8px; padding: 16px;">
            <h4 style="font-family: 'Inter', sans-serif; color: var(--accent); margin-bottom: 8px; font-size: 16px;">${step.title}</h4>
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
          <h3 style="font-family: 'Inter', sans-serif; color: var(--accent); margin-bottom: 8px; font-size: 16px;">${step.title}</h3>
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

// Back to top button logic
window.addEventListener('scroll', () => {
  const btn = document.getElementById('back-to-top');
  if (btn) {
    if (window.scrollY > 300) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  }
});

// KP Treasure Tracking Logic
let savedChars = JSON.parse(localStorage.getItem('midnight_chars') || '["Main"]');
let currentKpChar = localStorage.getItem('midnight_kp_char');

// Ensure current char is valid
if (!currentKpChar || !savedChars.includes(currentKpChar)) {
  currentKpChar = savedChars[0];
  localStorage.setItem('midnight_kp_char', currentKpChar);
}

function changeKpChar() {
  const sel = document.getElementById('kp-char-select');
  if (sel) {
    currentKpChar = sel.value;
    localStorage.setItem('midnight_kp_char', currentKpChar);
    loadKpProgress();
  }
}

function addKpChar() {
  let saved = JSON.parse(localStorage.getItem('midnight_chars') || '["Main"]');
  
  const msgs = {
    nl: { max: "Je kunt maximaal 25 characters toevoegen.", prompt: "Voer de naam van je character in:", exists: "Dit character bestaat al." },
    en: { max: "You can add up to 25 characters.", prompt: "Enter the name of your character:", exists: "This character already exists." },
    da: { max: "Du kan tilføje op til 25 karakterer.", prompt: "Indtast navnet på din karakter:", exists: "Denne karakter findes allerede." }
  };
  const m = msgs[lang] || msgs.nl;

  if (saved.length >= 25) {
    alert(m.max);
    return;
  }
  let name = prompt(m.prompt);
  if (!name) return;
  name = name.trim();
  if (name.length === 0) return;
  if (saved.includes(name)) {
    alert(m.exists);
    return;
  }
  saved.push(name);
  localStorage.setItem('midnight_chars', JSON.stringify(saved));
  currentKpChar = name;
  localStorage.setItem('midnight_kp_char', currentKpChar);
  
  if (currentProf) {
    renderKpSources(currentProf);
  }
}

function deleteKpChar() {
  let saved = JSON.parse(localStorage.getItem('midnight_chars') || '["Main"]');
  
  const msgs = {
    nl: { min: "Je moet minimaal één character overhouden.", confirm: "Weet je zeker dat je '{char}' wilt verwijderen?" },
    en: { min: "You must keep at least one character.", confirm: "Are you sure you want to delete '{char}'?" },
    da: { min: "Du skal beholde mindst én karakter.", confirm: "Er du sikker på, at du vil slette '{char}'?" }
  };
  const m = msgs[lang] || msgs.nl;

  if (saved.length <= 1) {
    alert(m.min);
    return;
  }
  if (confirm(m.confirm.replace('{char}', currentKpChar))) {
    saved = saved.filter(c => c !== currentKpChar);
    localStorage.setItem('midnight_chars', JSON.stringify(saved));
    currentKpChar = saved[0];
    localStorage.setItem('midnight_kp_char', currentKpChar);
    
    if (currentProf) {
      renderKpSources(currentProf);
    }
  }
}

function toggleKpTreasure(cb) {
  const tid = cb.getAttribute('data-tid');
  const key = `midnight_kp_${currentKpChar}_${tid}`;
  if (cb.checked) {
    localStorage.setItem(key, '1');
    cb.closest('tr').style.opacity = '0.5';
  } else {
    localStorage.removeItem(key);
    cb.closest('tr').style.opacity = '1';
  }
}

function loadKpProgress() {
  const sel = document.getElementById('kp-char-select');
  if (sel) sel.value = currentKpChar;
  
  document.querySelectorAll('.kp-checkbox').forEach(cb => {
    const tid = cb.getAttribute('data-tid');
    const key = `midnight_kp_${currentKpChar}_${tid}`;
    if (localStorage.getItem(key)) {
      cb.checked = true;
      cb.closest('tr').style.opacity = '0.5';
    } else {
      cb.checked = false;
      cb.closest('tr').style.opacity = '1';
    }
  });
}

// Call loadKpProgress after rendering
const originalRenderKpSources = renderKpSources;
renderKpSources = function(p) {
  originalRenderKpSources(p);
  setTimeout(loadKpProgress, 50);
};


// ============================================================
// PREY SYSTEM GUIDE
// ============================================================
const PREY_GUIDE_DATA = {
  nl: {
    title: "Het Prey Systeem",
    intro: "Jaag op de gevaarlijkste doelwitten in Midnight. Een compleet stappenplan voor deze nieuwe solo-vriendelijke endgame activiteit.",
    sections: [
      {
        title: "Voorbereiding: De Unlock Questline",
        text: "Voordat je kan jagen, moet je een korte questline voltooien in Silvermoon City:<br><br>1. <strong>Shadows in the Woods:</strong> Praat met Ranger General Halduron in Farstrider Square om de quest te starten.<br><span class=\"kp-way-code\" style=\"display:inline-block; margin-top:4px; margin-bottom:8px;\" onclick=\"copyWay(this)\" data-way=\"/way #2393 49.0 64.8 Halduron Brightwing\" title=\"Klik om te kopiëren\">📋 /way #2393 49.0 64.8 Halduron Brightwing</span><br><br>2. <strong>Tracking the Beast:</strong> Verzamel 3 sporen net buiten de stad in Eversong Woods.<br><br>3. <strong>The Hunter's Call:</strong> Lever de quest in bij Magister Astalor Bloodsworn in Murder Row. Hiermee ontgrendel je het Prey systeem!<br><span class=\"kp-way-code\" style=\"display:inline-block; margin-top:4px; margin-bottom:8px;\" onclick=\"copyWay(this)\" data-way=\"/way #2393 54.97 63.31 Magister Astalor Bloodsworn\" title=\"Klik om te kopiëren\">📋 /way #2393 54.97 63.31 Magister Astalor Bloodsworn</span>"
      },
      {
        title: "Stap 1: De Jacht Beginnen",
        text: "Ga naar <strong>Silvermoon City</strong> (Murder Row) en praat met <em>Magister Astalor Bloodsworn</em>. Hier kies je jouw doelwit (Target) en de zone waar je wilt jagen."
      },
      {
        title: "Stap 2: Voortgang Opbouwen",
        text: "Je kunt niet direct naar de baas. Reis naar de gekozen zone en vul je voortgangsbalk door activiteiten te doen:<br>• Voltooi World Quests<br>• Versla Elite vijanden<br>• Open schatkisten<br>• Ontmantel vallen"
      },
      {
        title: "Stap 3: De Confrontatie",
        text: "Zodra je balk vol is, wordt de exacte locatie van je doelwit onthuld op de map. Ga ernaartoe en versla de baas om je beloningen te claimen!"
      },
      {
        title: "Moeilijkheidsgraden",
        text: "Je kunt de jacht afstellen op jouw niveau:<br>🟢 <strong>Normal:</strong> Basis mechanics. Andere spelers in de open wereld kunnen je helpen.<br>🟡 <strong>Hard:</strong> Extra vaardigheden (Torments) voor de baas. Je staat er alleen voor in het eindgevecht.<br>🔴 <strong>Nightmare:</strong> De ultieme uitdaging met extra affixes, maar ook de beste beloningen."
      },
      {
        title: "Beloningen",
        text: "Waarom doe je dit?<br>🎁 <strong>Gear:</strong> Schaalbaar van Adventurer tot Champion track (afhankelijk van moeilijkheid).<br>🎁 <strong>Cosmetics:</strong> Unieke Mana Wyrm mounts en transmogs.<br>🎁 <strong>Valuta:</strong> Anguish Runes om spullen mee te kopen.<br>🎁 <strong>Great Vault:</strong> Telt mee voor je wekelijkse 'Outdoor' vault slot!"
      }
    ],
    tip: "Gouden Tip: De eerste 4 jachten per week geven de meeste en beste beloningen. Zorg dat je die op de hoogst mogelijke moeilijkheidsgraad doet die je aankan!"
  },
  en: {
    title: "The Prey System",
    intro: "Hunt the most dangerous targets in Midnight. A complete step-by-step guide for this new solo-friendly endgame activity.",
    sections: [
      {
        title: "Preparation: The Unlock Questline",
        text: "Before you can hunt, you must complete a short questline in Silvermoon City:<br><br>1. <strong>Shadows in the Woods:</strong> Speak with Ranger General Halduron in Farstrider Square to start the quest.<br><span class=\"kp-way-code\" style=\"display:inline-block; margin-top:4px; margin-bottom:8px;\" onclick=\"copyWay(this)\" data-way=\"/way #2393 49.0 64.8 Halduron Brightwing\" title=\"Click to copy\">📋 /way #2393 49.0 64.8 Halduron Brightwing</span><br><br>2. <strong>Tracking the Beast:</strong> Gather 3 tracks just outside the city in Eversong Woods.<br><br>3. <strong>The Hunter's Call:</strong> Turn in the quest to Magister Astalor Bloodsworn in Murder Row. This unlocks the Prey system!<br><span class=\"kp-way-code\" style=\"display:inline-block; margin-top:4px; margin-bottom:8px;\" onclick=\"copyWay(this)\" data-way=\"/way #2393 54.97 63.31 Magister Astalor Bloodsworn\" title=\"Click to copy\">📋 /way #2393 54.97 63.31 Magister Astalor Bloodsworn</span>"
      },
      {
        title: "Step 1: Starting the Hunt",
        text: "Go to <strong>Silvermoon City</strong> (Murder Row) and speak with <em>Magister Astalor Bloodsworn</em>. Here you select your target and the zone you want to hunt in."
      },
      {
        title: "Step 2: Building Progress",
        text: "You can't face the boss immediately. Travel to the chosen zone and fill your progress bar by completing activities:<br>• Complete World Quests<br>• Defeat Elite enemies<br>• Open treasures<br>• Disable traps"
      },
      {
        title: "Step 3: The Confrontation",
        text: "Once your bar is full, the exact location of your target is revealed on the map. Go there and defeat the boss to claim your rewards!"
      },
      {
        title: "Difficulties",
        text: "You can tune the hunt to your level:<br>🟢 <strong>Normal:</strong> Basic mechanics. Other players in the open world can help you.<br>🟡 <strong>Hard:</strong> Extra abilities (Torments) for the boss. You are on your own for the final fight.<br>🔴 <strong>Nightmare:</strong> The ultimate challenge with extra affixes, but also the best rewards."
      },
      {
        title: "Rewards",
        text: "Why do this?<br>🎁 <strong>Gear:</strong> Scales from Adventurer to Champion track (depending on difficulty).<br>🎁 <strong>Cosmetics:</strong> Unique Mana Wyrm mounts and transmogs.<br>🎁 <strong>Currency:</strong> Anguish Runes to buy items.<br>🎁 <strong>Great Vault:</strong> Counts towards your weekly 'Outdoor' vault slot!"
      }
    ],
    tip: "Golden Tip: The first 4 hunts per week give the most and best rewards. Make sure to do these on the highest difficulty you can handle!"
  },
  da: {
    title: "Prey Systemet",
    intro: "Jagt de farligste mål i Midnight. En komplet trin-for-trin guide til denne nye solo-venlige endgame aktivitet.",
    sections: [
      {
        title: "Forberedelse: Unlock Questline",
        text: "Før du kan jage, skal du fuldføre en kort questline i Silvermoon City:<br><br>1. <strong>Shadows in the Woods:</strong> Tal med Ranger General Halduron i Farstrider Square for at starte questen.<br><span class=\"kp-way-code\" style=\"display:inline-block; margin-top:4px; margin-bottom:8px;\" onclick=\"copyWay(this)\" data-way=\"/way #2393 49.0 64.8 Halduron Brightwing\" title=\"Klik for at kopiere\">📋 /way #2393 49.0 64.8 Halduron Brightwing</span><br><br>2. <strong>Tracking the Beast:</strong> Saml 3 spor lige uden for byen i Eversong Woods.<br><br>3. <strong>The Hunter's Call:</strong> Aflever questen til Magister Astalor Bloodsworn i Murder Row. Dette låser op for Prey systemet!<br><span class=\"kp-way-code\" style=\"display:inline-block; margin-top:4px; margin-bottom:8px;\" onclick=\"copyWay(this)\" data-way=\"/way #2393 54.97 63.31 Magister Astalor Bloodsworn\" title=\"Klik for at kopiere\">📋 /way #2393 54.97 63.31 Magister Astalor Bloodsworn</span>"
      },
      {
        title: "Trin 1: Start Jagten",
        text: "Gå til <strong>Silvermoon City</strong> (Murder Row) og tal med <em>Magister Astalor Bloodsworn</em>. Her vælger du dit mål og den zone, du vil jage i."
      },
      {
        title: "Trin 2: Opbyg Fremskridt",
        text: "Du kan ikke møde bossen med det samme. Rejs til den valgte zone og fyld din fremskridtsbjælke ved at fuldføre aktiviteter:<br>• Gennemfør World Quests<br>• Besejr Elite fjender<br>• Åbn skatte<br>• Deaktiver fælder"
      },
      {
        title: "Trin 3: Konfrontationen",
        text: "Når din bjælke er fuld, afsløres målets nøjagtige placering på kortet. Tag dertil og besejr bossen for at få dine belønninger!"
      },
      {
        title: "Sværhedsgrader",
        text: "Du kan tilpasse jagten til dit niveau:<br>🟢 <strong>Normal:</strong> Grundlæggende mekanikker. Andre spillere i den åbne verden kan hjælpe dig.<br>🟡 <strong>Hard:</strong> Ekstra evner (Torments) til bossen. Du er på egen hånd i den endelige kamp.<br>🔴 <strong>Nightmare:</strong> Den ultimative udfordring med ekstra affixes, men også de bedste belønninger."
      },
      {
        title: "Belønninger",
        text: "Hvorfor gøre dette?<br>🎁 <strong>Gear:</strong> Skalerer fra Adventurer til Champion track (afhængigt af sværhedsgrad).<br>🎁 <strong>Cosmetics:</strong> Unikke Mana Wyrm mounts og transmogs.<br>🎁 <strong>Valuta:</strong> Anguish Runes til at købe genstande.<br>🎁 <strong>Great Vault:</strong> Tæller med i dit ugentlige 'Outdoor' vault slot!"
      }
    ],
    tip: "Gyldent Tip: De første 4 jagter om ugen giver de fleste og bedste belønninger. Sørg for at gøre disse på den højeste sværhedsgrad, du kan klare!"
  }
};

function renderPreyGuide() {
  const container = document.getElementById('prey-content');
  if (!container) return;
  
  const data = PREY_GUIDE_DATA[lang] || PREY_GUIDE_DATA.nl;
  
  document.getElementById('prey-title').textContent = data.title;
  document.getElementById('prey-intro').textContent = data.intro;

  let html = `<div style="display: flex; flex-direction: column; gap: 16px;">`;
  
  data.sections.forEach((sec, i) => {
    html += `
      <div style="background: rgba(0,0,0,0.2); border: 1px solid var(--border); border-radius: 8px; padding: 16px;">
        <h3 style="font-family: 'Inter', sans-serif; color: var(--accent); margin-bottom: 8px; font-size: 18px;">${sec.title}</h3>
        <p style="font-size: 14px; color: var(--text); line-height: 1.6;">${sec.text}</p>
      </div>
    `;
  });
  
  html += `</div>
    <div style="background-color: rgba(200, 168, 75, 0.1); padding: 16px; border-left: 4px solid var(--gold); margin-top: 32px; border-radius: 0 8px 8px 0;">
      <p style="font-size: 14px; color: var(--text); margin: 0; font-weight: bold;">${data.tip}</p>
    </div>
  `;

  container.innerHTML = html;
}

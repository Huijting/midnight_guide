// Als ui.js uit cache nog oud is (zonder escape-helpers), voorkom ReferenceError die Prey/Delves/Weekly/Prof leeg laat.
(function () {
  if (typeof escapeDataWayAttr === 'function' && typeof escapeHtmlText === 'function') return;
  window.escapeDataWayAttr = function (s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  };
  window.escapeHtmlText = function (s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };
})();

// ═══════════════════════════════════════════════════════════════
// SPEC SELECTOR
// ═══════════════════════════════════════════════════════════════
const CLASSES = [
  { id:'deathknight', icon:'💀', name:{nl:'Death Knight', en:'Death Knight'},
    specs:[
      {id:'blood',  name:{nl:'Blood',  en:'Blood'},  role:'tank'},
      {id:'frost',  name:{nl:'Frost',  en:'Frost'},  role:'dps'},
      {id:'unholy', name:{nl:'Unholy', en:'Unholy'}, role:'dps'}
    ]},
  { id:'demonhunter', icon:'😈', name:{nl:'Demon Hunter', en:'Demon Hunter'},
    specs:[
      {id:'havoc',    name:{nl:'Havoc',    en:'Havoc'},    role:'dps'},
      {id:'vengeance',name:{nl:'Vengeance',en:'Vengeance'},role:'tank'},
      {id:'devourer', name:{nl:'Devourer', en:'Devourer'}, role:'dps'}
    ]},
  { id:'druid', icon:'🐾', name:{nl:'Druid', en:'Druid'},
    specs:[
      {id:'balance',     name:{nl:'Balance',     en:'Balance'},     role:'dps'},
      {id:'feral',       name:{nl:'Feral',        en:'Feral'},       role:'dps'},
      {id:'guardian',    name:{nl:'Guardian',     en:'Guardian'},    role:'tank'},
      {id:'restoration', name:{nl:'Restauratie',  en:'Restoration'},role:'heal'}
    ]},
  { id:'evoker', icon:'🐉', name:{nl:'Evoker', en:'Evoker'},
    specs:[
      {id:'augmentation', name:{nl:'Augmentation', en:'Augmentation'}, role:'dps'},
      {id:'devastation',  name:{nl:'Devastation',  en:'Devastation'},  role:'dps'},
      {id:'preservation', name:{nl:'Preservation', en:'Preservation'}, role:'heal'}
    ]},
  { id:'hunter', icon:'🏹', name:{nl:'Hunter', en:'Hunter'},
    specs:[
      {id:'beastmastery',  name:{nl:'Beast Mastery',  en:'Beast Mastery'},  role:'dps'},
      {id:'marksmanship',  name:{nl:'Marksmanship',   en:'Marksmanship'},   role:'dps'},
      {id:'survival',      name:{nl:'Survival',        en:'Survival'},       role:'dps'}
    ]},
  { id:'mage', icon:'🔮', name:{nl:'Mage', en:'Mage'},
    specs:[
      {id:'arcane', name:{nl:'Arcane', en:'Arcane'}, role:'dps'},
      {id:'fire',   name:{nl:'Fire',   en:'Fire'},   role:'dps'},
      {id:'frost',  name:{nl:'Frost',  en:'Frost'},  role:'dps'}
    ]},
  { id:'monk', icon:'☯️', name:{nl:'Monk', en:'Monk'},
    specs:[
      {id:'brewmaster',  name:{nl:'Brewmaster',  en:'Brewmaster'},  role:'tank'},
      {id:'mistweaver',  name:{nl:'Mistweaver',  en:'Mistweaver'},  role:'heal'},
      {id:'windwalker',  name:{nl:'Windwalker',  en:'Windwalker'},  role:'dps'}
    ]},
  { id:'paladin', icon:'⚔️', name:{nl:'Paladin', en:'Paladin'},
    specs:[
      {id:'holy',       name:{nl:'Holy',       en:'Holy'},       role:'heal'},
      {id:'protection', name:{nl:'Protection', en:'Protection'}, role:'tank'},
      {id:'retribution',name:{nl:'Retribution',en:'Retribution'},role:'dps'}
    ]},
  { id:'priest', icon:'✨', name:{nl:'Priest', en:'Priest'},
    specs:[
      {id:'discipline', name:{nl:'Discipline', en:'Discipline'}, role:'heal'},
      {id:'holy',       name:{nl:'Holy',       en:'Holy'},       role:'heal'},
      {id:'shadow',     name:{nl:'Shadow',     en:'Shadow'},     role:'dps'}
    ]},
  { id:'rogue', icon:'🗡️', name:{nl:'Rogue', en:'Rogue'},
    specs:[
      {id:'assassination',name:{nl:'Assassination',en:'Assassination'},role:'dps'},
      {id:'outlaw',       name:{nl:'Outlaw',       en:'Outlaw'},       role:'dps'},
      {id:'subtlety',     name:{nl:'Subtlety',     en:'Subtlety'},     role:'dps'}
    ]},
  { id:'shaman', icon:'⚡', name:{nl:'Shaman', en:'Shaman'},
    specs:[
      {id:'elemental',   name:{nl:'Elemental',   en:'Elemental'},   role:'dps'},
      {id:'enhancement', name:{nl:'Enhancement', en:'Enhancement'}, role:'dps'},
      {id:'restoration', name:{nl:'Restoration', en:'Restoration'}, role:'heal'}
    ]},
  { id:'warlock', icon:'🔥', name:{nl:'Warlock', en:'Warlock'},
    specs:[
      {id:'affliction',  name:{nl:'Affliction',  en:'Affliction'},  role:'dps'},
      {id:'demonology',  name:{nl:'Demonology',  en:'Demonology'},  role:'dps'},
      {id:'destruction', name:{nl:'Destruction', en:'Destruction'}, role:'dps'}
    ]},
  { id:'warrior', icon:'🛡️', name:{nl:'Warrior', en:'Warrior'},
    specs:[
      {id:'arms',       name:{nl:'Arms',       en:'Arms'},       role:'dps'},
      {id:'fury',       name:{nl:'Fury',       en:'Fury'},       role:'dps'},
      {id:'protection', name:{nl:'Protection', en:'Protection'}, role:'tank'}
    ]}
];

// Lust ability per class+spec combo
const LUST_ABILITY = {
  'shaman-elemental':    {nl:'Bloodlust',          en:'Bloodlust'},
  'shaman-enhancement':  {nl:'Bloodlust',          en:'Bloodlust'},
  'shaman-restoration':  {nl:'Bloodlust',          en:'Bloodlust'},
  'mage-arcane':         {nl:'Time Warp',          en:'Time Warp'},
  'mage-fire':           {nl:'Time Warp',          en:'Time Warp'},
  'mage-frost':          {nl:'Time Warp',          en:'Time Warp'},
  'hunter-beastmastery': {nl:'Primal Rage',        en:'Primal Rage'},
  'evoker-augmentation': {nl:'Fury of the Aspects',en:'Fury of the Aspects'},
  'evoker-devastation':  {nl:'Fury of the Aspects',en:'Fury of the Aspects'},
  'evoker-preservation': {nl:'Fury of the Aspects',en:'Fury of the Aspects'}
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
  en: { btn_no_spec:'Choose spec', btn_spec:'Spec: ', title:'Choose your spec', subtitle:"We'll adjust spell names to match your class", reset:'Clear spec', role_tank:'Tank', role_heal:'Healer', role_dps:'DPS' }};

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
  if (document.body.classList.contains('mode-home')) renderDashboardWidgets();
}

function clearSpec() {
  currentSpec = null;
  localStorage.removeItem('spec');
  updateSpecBtn();
  closeSpecModal();
  if (currentDungeon) renderDetail(currentDungeon);
  if (document.body.classList.contains('mode-home')) renderDashboardWidgets();
}

function updateSpecBtn() {
  const btn = document.getElementById('spec-btn');
  if (!btn) return;
  const ui = SPEC_UI[lang];
  if (currentSpec && currentSpec.classId && currentSpec.specId) {
    const cls = CLASSES.find(c => c.id === currentSpec.classId);
    const sp  = cls?.specs.find(s => s.id === currentSpec.specId);
    if (cls && sp) {
      btn.innerHTML = cls.icon + ' <span class="spec-btn-text">' + sp.name[lang] + '</span>';
      btn.style.color = 'var(--gold)';
    } else {
      btn.innerHTML = '⚙ <span class="spec-btn-text">' + ui.btn_no_spec + '</span>';
      btn.style.color = 'var(--muted)';
    }
  } else {
    btn.innerHTML = '⚙ <span class="spec-btn-text">' + ui.btn_no_spec + '</span>';
    btn.style.color = 'var(--muted)';
  }
  updateSpecHeaderBtnVisibility();
}

/** Sync coarse view name for header logic / debugging (spec-detail | dungeon-detail | …). */
function syncMidnightCurrentView() {
  const body = document.body.classList;
  if (body.contains('mode-specs') && document.getElementById('spec-detail-view')?.classList.contains('visible')) {
    window.midnightCurrentView = 'spec-detail';
  } else if (body.contains('detail-open') || body.contains('raid-detail-open')) {
    window.midnightCurrentView = 'dungeon-detail';
  } else if (body.contains('mode-home')) {
    window.midnightCurrentView = 'home';
  } else if (body.contains('mode-prey')) {
    window.midnightCurrentView = 'prey';
  } else {
    const m = document.body.className.match(/\bmode-([a-z]+)\b/);
    window.midnightCurrentView = m ? m[1] : 'other';
  }
}

/** Spec header button only on spec guide detail or dungeon/raid boss detail (same surface as dungeon-detail). Hidden on home, prey, lists, etc. */
function updateSpecHeaderBtnVisibility() {
  const sb = document.getElementById('spec-btn');
  if (!sb) return;
  const specDetail = document.body.classList.contains('mode-specs') && document.getElementById('spec-detail-view')?.classList.contains('visible');
  const dungeonDetail = document.body.classList.contains('detail-open') || document.body.classList.contains('raid-detail-open');
  const show = specDetail || dungeonDetail;
  sb.style.display = show ? '' : 'none';
  syncMidnightCurrentView();
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

  const grid = document.getElementById('spec-class-grid');
  if (grid && typeof renderSpecPickerAccordion === 'function') {
    const expand = currentSpec && currentSpec.classId ? currentSpec.classId : null;
    renderSpecPickerAccordion(grid, { context: 'modal', expandClassId: expand });
  }
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
  }};

function updateFooter() {
  const vEl = document.getElementById('version-display');
  if (vEl && typeof APP_VERSION !== 'undefined') vEl.textContent = 'v' + APP_VERSION;
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
    hero_sub:     "Kies je dungeon — bosses, rollen & routeplanner",
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
    glossary_section_general:"📖 Algemene termen",
    glossary_section_tank:"🛡️ Tank Termen",
    tldr_label: "🎯 Sneloverzicht",
    tab_overview: "Overzicht",
    tab_bosses:   "Bosses",
    tab_route:    "Routeplanner",
    boss_label:   "BOSS",
    lbl_zone:     "ZONE",
    lbl_type:     "TYPE",
    lbl_unlock:   "ONTGRENDEL",
    lbl_bosses:   "BOSSES",
    overview_affix_title: "Actuele affixes (deze week)",
    overview_affix_boss_title: "Affix-tips voor bosses",
    tab_route_map: "Kaart & route",
    tab_route_tank: "Tank-gids",
    role_card_tank: "Tank",
    role_card_heal: "Healer",
    role_card_dps: "DPS",
    tank_guide_title: "Tank — pad & gevaar per pull",
    tank_guide_sub: "Klik op een monsternaam of pull-nummer om die stap in de routelijst te markeren (Snap-to-Map).",
    tank_guide_empty: "Geen M+ route — Tank-gids is alleen voor Mythic+.",
    tank_pull_cta: "Pull",
    danger_low: "Laag",
    danger_med: "Middel",
    danger_high: "Hoog",
    danger_boss: "Boss",
    danger_lethal: "Lethaal",
    danger_n1: "Gevaar 1/5",
    danger_n2: "Gevaar 2/5",
    danger_n3: "Gevaar 3/5",
    danger_n4: "Gevaar 4/5",
    danger_n5: "Gevaar 5/5",
    tank_interrupt_label: "Interrupt prio:",
    tank_source_footer: '<span class="tank-source-label">Bron:</span> <a href="https://www.icy-veins.com/wow/dungeons-guide" class="tank-source-link" target="_blank" rel="noopener noreferrer">Icy Veins</a> (dungeongidsen), <a href="https://keystone.guru" class="tank-source-link" target="_blank" rel="noopener noreferrer">Keystone.guru</a> (routepaden) en de trash-tabel van deze dungeon in de app (subtab <strong>Kaart &amp; route</strong>).',
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
    vr_legend_boss:  "Boss",
    vr_legend_event: "Event/Buff",
    vr_legend_lust:  "Bloodlust",
    vr_label_trash:  "TRASH",
    vr_label_boss:   "BOSS",
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
    tab_home: "<i class=\"fas fa-home\" style=\"margin-right:4px\"></i> Home", tab_dungeons: "<i class=\"fas fa-skull\" style=\"margin-right:4px\"></i> Dungeons", tab_professions: "<i class=\"fas fa-hammer\" style=\"margin-right:4px\"></i> Professies", tab_weekly: "<i class=\"fas fa-calendar-alt\" style=\"margin-right:4px\"></i> Wekelijks", tab_raids: "<i class=\"fas fa-dungeon\" style=\"margin-right:4px\"></i> Raids", tab_specs: "<i class=\"fas fa-crosshairs\" style=\"margin-right:4px\"></i> Specs", tab_prey: "<i class=\"fas fa-bullseye\" style=\"margin-right:4px\"></i> Prey", tab_delves: "💎 Delves", tab_travel: "🧭 Reisgids", tab_addons: "<i class=\"fas fa-puzzle-piece\" style=\"margin-right:4px\"></i> Add-ons", tab_glossary: "📖 Woordenlijst",
    travel_hero_title: "🧭 Reisgids",
    travel_hero_sub: "Seizoen 1 — portaalnetwerk (Midnight)",
    travel_from: "Van",
    travel_to: "Naar",
    travel_hub_coords: "Hub — TomTom",
    travel_vault_way_label: "The Vault — TomTom",
    travel_vault_horde_way_label: "The Vault (Horde) — TomTom",
    travel_copy_way: "📋 Kopieer /way",
    travel_no_way: "Geen vaste /way — kies je bestemming bij het portaal in-game.",
    addons_hero_title: "🧩 Add-ons",
    addons_hero_sub: "WoW-add-ons met snelle referenties",
    addons_priority_colors: "Prioriteitskleuren",
    addons_visual_guide: "Visuele gids",
    addons_quick_reference: "Snelle referentie: naamplaat-kleuren",
    addons_install_guide: "Installatiegids",
    addons_watch_video: "Video bekijken →",
    addons_link_cf: "CurseForge",
    addons_link_wago: "Wago.io",
    addons_copy_import: "📋 Kopieer importstring",
    addons_profile_by: "Profiel door",
    feedback_btn: "💬 Feedback",
    feedback_title: "💬 Opbouwende kritiek",
    feedback_sub: "Klopt er iets niet? Ontbreekt er info? Laat het weten — we verbeteren de gids samen.",
    feedback_ph: "Bijv: de tier van Inscription klopt niet, of boss X mist een mechanic...",
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
    glossary_section_general:"📖 General terms",
    glossary_section_tank:"🛡️ Tank terms",
    tldr_label: "🎯 Quick Summary",
    tab_overview: "Overview",
    tab_bosses:   "Bosses",
    tab_route:    "Route Planner",
    boss_label:   "BOSS",
    lbl_zone:     "ZONE",
    lbl_type:     "TYPE",
    lbl_unlock:   "UNLOCK",
    lbl_bosses:   "BOSSES",
    overview_affix_title: "Current affixes (this week)",
    overview_affix_boss_title: "Affix tips for bosses",
    tab_route_map: "Map & route",
    tab_route_tank: "Tank guide",
    role_card_tank: "Tank",
    role_card_heal: "Healer",
    role_card_dps: "DPS",
    tank_guide_title: "Tank — pathing & danger per pull",
    tank_guide_sub: "Click a mob name or pull number to highlight that step in the route list (Snap-to-Map).",
    tank_guide_empty: "No M+ route — Tank guide is for Mythic+ only.",
    tank_pull_cta: "Pull",
    danger_low: "Low",
    danger_med: "Medium",
    danger_high: "High",
    danger_boss: "Boss",
    danger_lethal: "Lethal",
    danger_n1: "Danger 1/5",
    danger_n2: "Danger 2/5",
    danger_n3: "Danger 3/5",
    danger_n4: "Danger 4/5",
    danger_n5: "Danger 5/5",
    tank_interrupt_label: "Interrupts:",
    tank_source_footer: '<span class="tank-source-label">Sources:</span> <a href="https://www.icy-veins.com/wow/dungeons-guide" class="tank-source-link" target="_blank" rel="noopener noreferrer">Icy Veins</a> (dungeon guides), <a href="https://keystone.guru" class="tank-source-link" target="_blank" rel="noopener noreferrer">Keystone.guru</a> (route maps), and this dungeon\'s trash table in the app (<strong>Map &amp; route</strong> subtab).',
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
    tab_home: "<i class=\"fas fa-home\" style=\"margin-right:4px\"></i> Home", tab_dungeons: "<i class=\"fas fa-skull\" style=\"margin-right:4px\"></i> Dungeons", tab_professions: "<i class=\"fas fa-hammer\" style=\"margin-right:4px\"></i> Professions", tab_weekly: "<i class=\"fas fa-calendar-alt\" style=\"margin-right:4px\"></i> Weekly", tab_raids: "<i class=\"fas fa-dungeon\" style=\"margin-right:4px\"></i> Raids", tab_specs: "<i class=\"fas fa-crosshairs\" style=\"margin-right:4px\"></i> Specs", tab_prey: "<i class=\"fas fa-bullseye\" style=\"margin-right:4px\"></i> Prey", tab_delves: "💎 Delves", tab_travel: "🧭 Travel Guide", tab_addons: "<i class=\"fas fa-puzzle-piece\" style=\"margin-right:4px\"></i> Addons", tab_glossary: "📖 Glossary",
    travel_hero_title: "🧭 Travel Guide",
    travel_hero_sub: "Season 1 — portal network (Midnight)",
    travel_from: "From",
    travel_to: "To",
    travel_hub_coords: "Hub — TomTom",
    travel_vault_way_label: "The Vault — TomTom",
    travel_vault_horde_way_label: "The Vault (Horde) — TomTom",
    travel_copy_way: "📋 Copy /way",
    travel_no_way: "No fixed /way — pick your destination at the in-game portal.",
    addons_hero_title: "🧩 Addons",
    addons_hero_sub: "WoW addons and quick references",
    addons_priority_colors: "Priority colors",
    addons_visual_guide: "Visual guide",
    addons_quick_reference: "Quick reference: nameplate colors",
    addons_install_guide: "Installation guide",
    addons_watch_video: "Watch video →",
    addons_link_cf: "CurseForge",
    addons_link_wago: "Wago.io",
    addons_copy_import: "📋 Copy import string",
    addons_profile_by: "Profile by",
    feedback_btn: "💬 Feedback",
    feedback_title: "💬 Constructive feedback",
    feedback_sub: "Something wrong? Missing info? Let us know — we improve the guide together.",
    feedback_ph: "E.g. the Inscription tier is wrong, or boss X is missing a mechanic...",
    feedback_send: "📨 Send via mail",
    feedback_gh: "🐙 Open GitHub issue",
    about_title:  "⚔ About this app",
    route_notice: "⚠️ No ideal route available yet. Know a good one? <a href=\"https://github.com/Huijting/midnight_guide/issues/new\" target=\"_blank\" class=\"route-notice-link\">Submit a GitHub Issue →</a>",
  }};

// ═══════════════════════════════════════════════════════════════
// HELPER
// ═══════════════════════════════════════════════════════════════
let lang = localStorage.getItem('lang') || 'nl';
function t(obj) { return (typeof obj === 'string') ? obj : (obj[lang] || obj.en || ''); }

// ═══════════════════════════════════════════════════════════════
// DUNGEON DATA  (all localised text fields: {nl,en})
// ═══════════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════════
// HOE EEN NIEUWE DUNGEON TOEVOEGEN (voor Claude of jezelf):
//
// 1. Kopieer een bestaand dungeon-blok van { id:... } tot de sluitende },
// 2. Plak het onder het laatste blok in de array (vóór de sluitende ])
// 3. Pas alle velden aan — elke tekst heeft {nl:"...",en:"..."}
// 4. type: "mplus"  → verschijnt in Seizoen M+ sectie
//    type: "normal" → verschijnt in Alleen Normal sectie
// 5. Voor een nieuw seizoen: voeg type:"mplus_s2" toe en voeg in renderHome()
//    een extra sectie toe (identiek aan de mplus-sectie, filter op "mplus_s2")
// 6. UI-teksten (tabbladen, knoppen, etc.) staan in het UI{} object bovenaan
//
// NIEUW SEIZOEN CHECKLIST:
//   - Nieuwe dungeons toevoegen met juist type
//   - UI.nl/en aanpassen ("SEIZOEN 2" etc.)
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
  if (l === 'da') l = 'en';
  lang = l;
  localStorage.setItem('lang', l);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const lb = document.querySelector(`.lang-btn[onclick="setLang('${l}')"]`);
  if (lb) lb.classList.add('active');
  applyUIStrings();
  updateFooter();
  updateSpecBtn();
  syncThemeToggleLabel();
  const sm = document.getElementById('spec-modal');
  if (sm && sm.classList.contains('visible')) renderSpecModal();
  if (currentDungeon) renderDetail(currentDungeon);
  else renderHome();
  const aboutModal = document.getElementById('about-modal');
  if (aboutModal && aboutModal.classList.contains('open')) renderAboutContent();
  const devBanner = document.getElementById('dev-banner');
  if (devBanner && devBanner.classList.contains('open') && typeof renderBanner === 'function') renderBanner();
  if (document.body.classList.contains('mode-professions')) updateProfLang();
  if (document.body.classList.contains('mode-weekly')) buildWeeklyList();
  if (document.body.classList.contains('mode-prey')) void renderPreyGuide();
  if (document.body.classList.contains('mode-delves')) void buildDelvesScreen();
  if (document.body.classList.contains('mode-addons')) buildAddonsScreen();
  if (document.body.classList.contains('mode-raids') && typeof renderRaidList === 'function') renderRaidList();
  // Zoekoverlay: refresh placeholder + resultaten bij taalwissel
  const searchOv = document.getElementById('search-overlay');
  if (searchOv && searchOv.classList.contains('open')) {
    const inp = document.getElementById('search-input');
    const ph = { nl:'Zoek dungeon, spec, professie...', en:'Search dungeon, spec, profession...'};
    if (inp) {
      inp.placeholder = ph[l] || ph.nl;
      doSearch(inp.value);
    }
  }
}

function applyUIStrings() {
  const u = UI[lang];
  if (!u) return;
  const t = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const h = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };
  const _hsub = document.getElementById('hdr-sub'); if (_hsub) _hsub.textContent = u.season_sub;
  t('hero-eyebrow', u.eyebrow);
  t('hero-title-span', u.guide);
  t('hero-sub', u.hero_sub);
  t('s1-label', u.s1_section);
  t('norm-label', u.norm_section);
  t('tab-btn-overview', u.tab_overview);
  t('tab-btn-bosses', u.tab_bosses);
  t('tab-btn-route', u.tab_route);
  h('back-btn', u.back);
  t('about-btn', u.about_btn);
  t('help-btn', u.help_btn);
  const helpModal = document.getElementById('help-modal');
  if (helpModal && helpModal.classList.contains('open') && typeof renderHelp === 'function') renderHelp();
  t('feedback-btn', u.feedback_btn);
  t('about-title', u.about_title);
  h('tab-lbl-home', u.tab_home);
  h('tab-lbl-dungeons', u.tab_dungeons);
  h('tab-lbl-professions', u.tab_professions);
  h('tab-lbl-weekly', u.tab_weekly);
  h('tab-lbl-specs', u.tab_specs);
  const preyLbl = document.getElementById('tab-lbl-prey'); if (preyLbl) preyLbl.innerHTML = u.tab_prey;
  h('tab-lbl-raids', u.tab_raids);
  const delvesLbl = document.getElementById('tab-lbl-delves'); if (delvesLbl) delvesLbl.innerHTML = u.tab_delves || delvesLbl.innerHTML;
  const _glbl = document.getElementById('tab-lbl-glossary');
  if (_glbl) _glbl.innerHTML = u.tab_glossary || u.lbl_glossary || (lang === 'en' ? '📖 Glossary' : '📖 Woordenlijst');
  const _ttr = document.getElementById('tab-lbl-travel');
  if (_ttr) _ttr.innerHTML = u.tab_travel || (lang === 'en' ? '🧭 Travel Guide' : '🧭 Reisgids');
  const _albl = document.getElementById('tab-lbl-addons');
  if (_albl && u.tab_addons) _albl.innerHTML = u.tab_addons;
  const _trh = document.getElementById('travel-hero-title');
  const _trs = document.getElementById('travel-hero-sub');
  if (_trh && u.travel_hero_title) _trh.textContent = u.travel_hero_title;
  if (_trs && u.travel_hero_sub) _trs.textContent = u.travel_hero_sub;
  const _adh = document.getElementById('addons-hero-title');
  const _ads = document.getElementById('addons-hero-sub');
  if (_adh && u.addons_hero_title) _adh.textContent = u.addons_hero_title;
  if (_ads && u.addons_hero_sub) _ads.textContent = u.addons_hero_sub;
  updateHeaderSyncBadge();
  t('detail-tldr-label', u.tldr_label);
  updateLandingStrings();
  if (document.body.classList.contains('mode-specs')) buildSpecGrid();
  if (document.body.classList.contains('mode-glossary')) buildGlossaryScreen();
  if (document.body.classList.contains('mode-travel')) buildTravelScreen();
  if (document.body.classList.contains('mode-addons')) buildAddonsScreen();
  if (document.body.classList.contains('mode-delves')) void buildDelvesScreen();
  const searchPh = document.getElementById('header-search-placeholder');
  if (searchPh) searchPh.textContent = { nl:'Zoek dungeon, spec, professie...', en:'Search dungeon, spec, profession...'}[lang] || 'Search...';
}

// ═══════════════════════════════════════════════════════════════
// DASHBOARD — DUNGEON WIDGET (featured + weekly tip)
// ═══════════════════════════════════════════════════════════════
const DASH_FEATURED_DUNGEONS = [
  { id: 'magisters', badge: 'trending' },
  { id: 'skyreach', badge: 'hot' },
];

const DUNGEON_MINI_BG = {
  magisters: 'images/dungeons/magisters-terrace-bg.svg',
  skyreach: 'images/dungeons/skyreach-bg.svg',
};

function getDashboardSpecRole() {
  if (!currentSpec) return 'dps';
  const cls = CLASSES.find(c => c.id === currentSpec.classId);
  const sp = cls?.specs.find(s => s.id === currentSpec.specId);
  const r = sp?.role;
  return r === 'tank' || r === 'heal' ? r : 'dps';
}

function getDashboardWeeklyProTipBody() {
  if (typeof AFFIX_UI === 'undefined' || typeof DASH_WEEKLY_PRO_TIPS === 'undefined') return '';
  const l = lang === 'en' ? 'en' : 'nl';
  const role = getDashboardSpecRole();
  const tips = DASH_WEEKLY_PRO_TIPS[l]?.[role] || DASH_WEEKLY_PRO_TIPS[l]?.dps;
  if (!tips) return '';
  const aff = AFFIX_UI[l] || AFFIX_UI.nl;
  const rows = aff.week1_affixes || [];
  for (const a of rows) {
    const slug = affixSlugFromWeeklyName(a.name);
    if (slug && tips[slug]) return tips[slug];
  }
  return tips.generic || '';
}

function openFeaturedDungeon(id, ev) {
  if (ev) {
    ev.stopPropagation();
    ev.preventDefault();
  }
  setMode('dungeons');
  openDungeon(id);
}

function renderDungeonQuickAccess(dashStr) {
  const host = document.getElementById('dungeon-quick-access');
  if (!host) return;
  const list = typeof getAllDungeons === 'function' ? getAllDungeons() : [];
  const parts = [];
  for (const f of DASH_FEATURED_DUNGEONS) {
    const d = list.find(x => x.id === f.id);
    if (!d) continue;
    const bg = DUNGEON_MINI_BG[f.id] || '';
    const badge =
      f.badge === 'hot'
        ? `<span class="dungeon-mini-badge dungeon-mini-badge--hot">${dashStr.badge_hot}</span>`
        : `<span class="dungeon-mini-badge dungeon-mini-badge--trending">${dashStr.badge_trending}</span>`;
    const nm = (d.name || f.id).replace(/</g, '&lt;');
    const escId = String(f.id).replace(/'/g, "\\'");
    parts.push(`<button type="button" class="dungeon-mini-card" style="--dungeon-mini-bg:url('${bg}')" onclick="openFeaturedDungeon('${escId}',event)" aria-label="${dashStr.open_prefix} ${nm}">${badge}<span class="dungeon-mini-card-title">${nm}</span></button>`);
  }
  host.innerHTML = parts.length ? `<div class="dungeon-quick-access-inner">${parts.join('')}</div>` : '';
}

// ═══════════════════════════════════════════════════════════════
// THEME
// ═══════════════════════════════════════════════════════════════
function renderDashboardWidgets() {
  if (!document.body.classList.contains('mode-home')) return;
  const affHost = document.getElementById('dash-mplus-affixes');
  if (affHost && typeof AFFIX_UI !== 'undefined') {
    const aff = AFFIX_UI[lang] || AFFIX_UI.nl;
    const rows = aff.week1_affixes || [];
    affHost.innerHTML = rows.map(a => {
      const c = a.color || 'var(--gold)';
      const nm = (a.name || '').replace(/</g, '&lt;');
      return `<span class="dash-affix-chip" style="--chip-accent:${c}"><span class="dash-affix-ico" aria-hidden="true">${a.icon || '⚡'}</span><span class="dash-affix-name">${nm}</span></span>`;
    }).join('');
  }
  const dashStr = lang === 'en'
    ? { badge_trending: 'Trending', badge_hot: 'Hot', tip_prefix: '💡 Weekly tip:', open_prefix: 'Open' }
    : { badge_trending: 'Trending', badge_hot: 'Hot', tip_prefix: '💡 Weektip:', open_prefix: 'Openen' };
  renderDungeonQuickAccess(dashStr);
  const tipEl = document.getElementById('dungeon-weekly-pro-tip');
  const tipWrap = document.getElementById('dungeon-weekly-pro-tip-wrap');
  const body = getDashboardWeeklyProTipBody();
  if (tipEl) {
    if (body) {
      const esc = body.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
      tipEl.innerHTML = `<span class="dungeon-weekly-pro-tip-label">${dashStr.tip_prefix}</span><span class="dungeon-weekly-pro-tip-body"> ${esc}</span>`;
    } else tipEl.innerHTML = '';
  }
  if (tipWrap) tipWrap.style.display = body ? '' : 'none';
  const n = typeof getTodayDailyKeysList === 'function' ? getTodayDailyKeysList().length : 0;
  const bFill = document.getElementById('dash-bountiful-fill');
  const bLbl = document.getElementById('dash-bountiful-label');
  if (bFill) bFill.style.width = `${Math.min(100, (n / 4) * 100)}%`;
  if (bLbl) bLbl.textContent = `${n} / 4`;

  const spot = typeof getPreySpotlightTarget === 'function' ? getPreySpotlightTarget() : null;
  const uiP = typeof PREY_UI !== 'undefined' ? (PREY_UI[lang] || PREY_UI.nl) : {};
  const nameEl = document.getElementById('dash-prey-target-name');
  const fillD = document.getElementById('dash-prey-danger-fill');
  const valD = document.getElementById('dash-prey-danger-val');
  const lblD = document.getElementById('dash-prey-danger-lbl');
  if (lblD && uiP.dangerMeter) lblD.textContent = uiP.dangerMeter;
  if (spot) {
    const l = lang === 'en' ? 'en' : 'nl';
    const sn = (spot.name && spot.name[l]) || spot.name?.en || spot.id;
    const prefix = lang === 'en' ? 'Current target: ' : 'Huidig doelwit: ';
    if (nameEl) nameEl.textContent = prefix + sn;
    const dr = Math.min(5, Math.max(1, Number(spot.difficulty_rating) || 3));
    if (fillD) fillD.style.width = `${Math.round((dr / 5) * 100)}%`;
    if (valD) valD.textContent = `${uiP.threatLabel || ''} ${dr}/5`.trim();
  } else {
    if (nameEl) nameEl.textContent = '—';
    if (fillD) fillD.style.width = '0%';
    if (valD) valD.textContent = '—';
  }
}

function updateLandingStrings() {
  const LANDING = {
    nl: {
      title: 'Midnight Guide',
      subtitle: 'Jouw WoW: Midnight companion',
      news: '🛡️ <strong>v2.3</strong> — Dungeon-widget: featured mini-cards, weektip op affix+rol, strakkere layout; PWA v2.3.0.',
      tip: '<strong>Tip:</strong> Installeer deze app op je PC via de 📲-knop rechtsboven, of via het installeer-icoon in je adresbalk — dan werkt hij ook offline!',
      credits: 'Gemaakt door Inchy & Gemma · WoW: Midnight · Niet officieel',
      d_title:'Dungeons', d_desc:'Boss tactieken, M+ routes en tips per dungeon', d_count:'8 dungeons',
      r_title:'Raids', r_desc:'Boss mechanics, fases en rol-tactieken', r_count:'3 raids',
      v_title:'Delves', v_desc:'Alle Delves met /way, loot tabel en sleutel-info', v_count:'12 Delves',
      w_title:'Wekelijks', w_desc:'Weekly reset, World Bosses en checklist', w_count:'Elke week',
      p_title:'Professies', p_desc:'KP gidsen, crafting orders en trainer locaties', p_count:'13 professies',
      s_title:'Specs', s_desc:'Rotaties, stats, macro\'s en consumables', s_count:'38 specs',
      prey_title: 'Prey',
      dash_kicker_dungeons: 'Mythic+ · Actuele affixes',
      dash_kicker_delves: 'Daily Bountiful',
      dash_kicker_weekly: 'Woensdag reset (EU)',
      dash_kicker_prey: 'Current target',
      dashboard_tagline: 'Midnight · Seizoen 1',
      w_cta: 'Checklist',
    },
    en: {
      title: 'Midnight Guide',
      subtitle: 'Your WoW: Midnight companion',
      news: '🛡️ <strong>v2.3</strong> — Dungeon widget: featured mini-cards, weekly role tip, tighter layout; PWA v2.3.0.',
      tip: '<strong>Tip:</strong> Install this app on your PC via the 📲 button top right, or the install icon in your address bar — works offline too!',
      credits: 'Made by Inchy & Gemma · WoW: Midnight · Unofficial',
      d_title:'Dungeons', d_desc:'Boss tactics, M+ routes and tips per dungeon', d_count:'8 dungeons',
      r_title:'Raids', r_desc:'Boss mechanics, phases and role tactics', r_count:'3 raids',
      v_title:'Delves', v_desc:'All Delves with /way, loot table and key info', v_count:'12 Delves',
      w_title:'Weekly', w_desc:'Weekly reset, World Bosses and checklist', w_count:'Every week',
      p_title:'Professions', p_desc:'KP guides, crafting orders and trainer locations', p_count:'13 professions',
      s_title:'Specs', s_desc:'Rotations, stats, macros and consumables', s_count:'38 specs',
      prey_title: 'Prey',
      dash_kicker_dungeons: 'Mythic+ · Current affixes',
      dash_kicker_delves: 'Daily Bountiful',
      dash_kicker_weekly: 'Wednesday reset (EU)',
      dash_kicker_prey: 'Current target',
      dashboard_tagline: 'Midnight · Season 1',
      w_cta: 'Checklist',
    }
  };
  const L = LANDING[lang] || LANDING.nl;
  const s = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  const h = (id, val) => { const el = document.getElementById(id); if(el) el.innerHTML = val; };
  const logoEl = document.getElementById('landing-logo');
  if (logoEl) logoEl.src = `assets/midnight-logo-${lang === 'en' ? 'en' : 'nl'}.png`;
  h('landing-news', L.news);
  h('landing-tip-text', L.tip);
  s('landing-credits', L.credits);
  s('dashboard-tagline', L.dashboard_tagline);
  s('dash-title-dungeons', L.d_title);
  s('dash-title-delves', L.v_title);
  s('dash-title-weekly', L.w_title);
  s('dash-title-prey', L.prey_title);
  s('dash-kicker-dungeons', L.dash_kicker_dungeons);
  s('dash-kicker-delves', L.dash_kicker_delves);
  s('dash-kicker-weekly', L.dash_kicker_weekly);
  s('dash-kicker-prey', L.dash_kicker_prey);
  s('lc-count-dungeons', L.d_count);
  s('lc-count-delves', L.v_count);
  s('lc-count-weekly', L.w_cta);
  s('lc-title-raids', L.r_title); s('lc-desc-raids', L.r_desc); s('lc-count-raids', L.r_count);
  s('lc-title-professions', L.p_title); s('lc-desc-professions', L.p_desc); s('lc-count-professions', L.p_count);
  s('lc-title-specs', L.s_title); s('lc-desc-specs', L.s_desc); s('lc-count-specs', L.s_count);
  renderDashboardWidgets();
  if (typeof startWeeklyCountdown === 'function') startWeeklyCountdown();
}

function syncThemeToggleLabel() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  const u = UI[lang] || UI.nl;
  const isLight = document.body.classList.contains('light');
  toggle.textContent = isLight ? u.theme_dark : u.theme_light;
  toggle.setAttribute('title', isLight ? (lang === 'nl' ? 'Schakel naar donker thema' : 'Switch to dark theme') : (lang === 'nl' ? 'Schakel naar licht thema' : 'Switch to light theme'));
  const meta = document.getElementById('meta-theme-color');
  if (meta) meta.setAttribute('content', isLight ? '#eef0f4' : '#050508');
}

function applySavedTheme() {
  const t = localStorage.getItem('theme');
  if (t === 'light') document.body.classList.add('light');
  else document.body.classList.remove('light');
  syncThemeToggleLabel();
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  syncThemeToggleLabel();
}

// ═══════════════════════════════════════════════════════════════
// ROLE TABS
// ═══════════════════════════════════════════════════════════════

function getRoleTipLineClass(text, role) {
  const s = String(text).toLowerCase();
  if (role === 'tank') {
    if (/\btank\s*buster|\btankbuster|hulking fragment|defensive|active mitigation|\blos\b|line of sight|percent|\/count|snap[- ]?point|route pull|grote pull|zware melee|mitigation/.test(s)) {
      return 'role-tip-line role-tip-tank';
    }
  } else if (role === 'heal') {
    if (/dispel|magic dispel|curse|purge|aoe|ramp|group damage|raid damage|mana\b|heavy damage|burst heal|tick|corrupt|shackle|pre-heal/.test(s)) {
      return 'role-tip-line role-tip-heal';
    }
  } else if (role === 'dps') {
    if (/interrupt|kick\b|prio|priority|burst window|shield|adds\b|target switch|switch target|cc\b|stop\b|soak|purge\b/.test(s)) {
      return 'role-tip-line role-tip-dps';
    }
  }
  return 'role-tip-line';
}

function renderRolePanel(dungeonId, bossIndex, role, genericTips) {
  const specTips = getSpecTips(dungeonId, bossIndex, role);
  const tipLines = t(genericTips);
  const generic = (Array.isArray(tipLines) ? tipLines : []).map(x => {
    const inner = replaceLust(x);
    const lc = getRoleTipLineClass(inner, role);
    return `<li class="${lc}">${inner}</li>`;
  }).join('');

  if (specTips && specTips.length > 0) {
    const specHtml = specTips.map(tip => {
      const inner = replaceLust(tip);
      const lc = getRoleTipLineClass(inner, role);
      return `<li class="spec-tip ${lc}">${inner}</li>`;
    }).join('');
    const cls = CLASSES.find(c => c.id === currentSpec?.classId);
    const sp  = cls?.specs.find(s => s.id === currentSpec?.specId);
    const label = cls && sp ? `${cls.icon} ${sp.name[lang]}` : '';
    return `<div class="spec-tips-header">${label}</div><ul>${specHtml}</ul>
            <div class="generic-tips-divider"></div>
            <ul class="generic-tips">${generic}</ul>`;
  }
  return `<ul class="role-tips-ul">${generic}</ul>`;
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
  const anchor = document.getElementById(`${uid}-tank`) || document.getElementById(`${uid}-heal`);
  const card = anchor?.closest('.boss-card');
  if (!card) return;
  card.querySelectorAll('.role-panel').forEach(p => p.classList.remove('active'));
  card.querySelectorAll('.role-card-btn').forEach(b => {
    const r = b.getAttribute('data-role');
    if (!r || !roles.includes(r)) return;
    b.classList.toggle('active', r === role);
    b.setAttribute('aria-selected', r === role ? 'true' : 'false');
  });
  const legacyBtns = card.querySelectorAll('.role-tab-btn');
  legacyBtns.forEach((b, i) => {
    b.className = 'role-tab-btn';
    if (roles[i] === role) b.classList.add('active-' + roles[i]);
  });
  document.getElementById(`${uid}-${role}`)?.classList.add('active');
}

// ═══════════════════════════════════════════════════════════════
// DUNGEON LIST (bundle + raids pushed at load)
// ═══════════════════════════════════════════════════════════════
function getAllDungeons() {
  if (typeof allDungeons !== 'undefined') return allDungeons;
  if (typeof DUNGEONS !== 'undefined') return DUNGEONS;
  return [];
}

// ═══════════════════════════════════════════════════════════════
// RENDER HOME
// ═══════════════════════════════════════════════════════════════
function renderHome() {
  if (typeof renderDungeonList === 'function') {
    renderDungeonList();
    return;
  }
  const u = UI[lang];
  const mplusGrid  = document.getElementById('mplus-grid');
  const normalGrid = document.getElementById('normal-grid');
  if (!mplusGrid || !normalGrid) return;
  mplusGrid.innerHTML = '';
  normalGrid.innerHTML = '';

  getAllDungeons().forEach(d => {
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
  const d = getAllDungeons().find(x => x.id === id);
  if (!d) return;
  currentDungeon = d;
  renderDetail(d);
  document.body.classList.add('detail-open');
  document.getElementById('home-screen').style.display   = '';
  document.getElementById('detail-screen').style.display = '';
  document.getElementById('back-btn').style.display      = 'inline-block';
  switchTab('overview');
  window.scrollTo(0, 0);
  updateSpecHeaderBtnVisibility();
}

function goHome() {
  // Vanuit raid detail → terug naar raids overzicht
  if (document.body.classList.contains('raid-detail-open')) {
    document.body.classList.remove('raid-detail-open');
    currentDungeon = null;
    document.getElementById('back-btn').style.display = 'none';
    window.scrollTo(0, 0);
    updateSpecHeaderBtnVisibility();
    return;
  }
  // Normale dungeons → terug naar dungeon grid
  currentDungeon = null;
  document.body.classList.remove('detail-open');
  document.getElementById('home-screen').style.display = '';
  document.getElementById('detail-screen').style.display = '';
  document.getElementById('back-btn').style.display = 'none';
  window.scrollTo(0, 0);
  updateSpecHeaderBtnVisibility();
}

// ═══════════════════════════════════════════════════════════════
// RENDER DETAIL
// ═══════════════════════════════════════════════════════════════

// [Data moved to external file]
const FLOOR_MAP_LEGEND = `<div class="fp-legend">
  <div class="fp-leg"><div class="fp-dot" style="background:#40c870"></div>Ingang</div>
  <div class="fp-leg"><div class="fp-dot" style="background:#60b8ff"></div>Trash</div>
  <div class="fp-leg"><div class="fp-dot" style="background:#ffd040"></div>Boss</div>
  <div class="fp-leg"><div class="fp-dot" style="background:#ff6622"></div>🔥 Lust</div>
  <div class="fp-leg"><div class="fp-dot" style="background:#40c870"></div>Event/Buff</div>
  <div class="fp-leg fp-line-demo"><svg width="26" height="10"><line x1="0" y1="5" x2="18" y2="5" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round"/><polygon points="18,2 26,5 18,8" fill="#e8c840"/></svg>Route</div>
</div>`;


// [Data moved to external file]

// [Data moved to external file]

function affixSlugFromWeeklyName(name) {
  const n = (name || '').toLowerCase();
  if (/ascendant/.test(n)) return 'ascendant';
  if (/tyrannical|tyrann/.test(n)) return 'tyrannical';
  if (/afflict/.test(n)) return 'afflicted';
  if (/peril|challenger/.test(n)) return 'peril';
  if (/fortified/.test(n)) return 'fortified';
  if (/bargain|voidbound|pulsar|devour/.test(n)) return 'bargain_rot';
  return null;
}

function buildAffixBossTipsBlock() {
  if (typeof AFFIX_UI === 'undefined' || typeof AFFIX_BOSS_FOCUS === 'undefined') return '';
  const aff = AFFIX_UI[lang] || AFFIX_UI.nl;
  const rows = aff.week1_affixes || [];
  const fb = AFFIX_BOSS_FOCUS[lang] || AFFIX_BOSS_FOCUS.en;
  const u = UI[lang];
  const seen = new Set();
  const parts = [];
  for (const a of rows) {
    const slug = affixSlugFromWeeklyName(a.name);
    if (!slug || seen.has(slug)) continue;
    seen.add(slug);
    const block = fb[slug] || fb.generic;
    if (!block) continue;
    parts.push(`<div class="overview-affix-boss-tip"><h4 class="overview-affix-boss-title">${block.title}</h4><p>${block.text}</p></div>`);
  }
  if (!parts.length) return '';
  return `<div class="overview-affix-boss-wrap"><h3 class="overview-affix-title">${u.overview_affix_boss_title}</h3>${parts.join('')}</div>`;
}

function inferTankPathing(d, tfn) {
  const pulls = d.route?.pulls || [];
  const trash = d.route?.trash || [];
  return {
    pulls: pulls.map((p, i) => {
      const lb = tfn(p.label);
      const ds = tfn(p.desc);
      const typ = (p.type || '').toLowerCase();
      const isBoss = typ === 'boss' || /baas|boss/i.test(lb);
      let danger = 'med';
      if (isBoss) danger = 'boss';
      else if (i === 0 || /lust|🔥|bloodlust/i.test(lb + ds)) danger = 'high';
      const mobs = [];
      if (!isBoss && trash.length >= 1) {
        mobs.push(trash[i % trash.length].mob);
        if (trash.length > 1) mobs.push(trash[(i + 1) % trash.length].mob);
      }
      return { pullRef: i, danger, note: p.desc || p.label, mobs };
    }),
  };
}

function getTankPathing(d, tfn) {
  const tp = d.tank_pathing;
  const routeLen = d.route && Array.isArray(d.route.pulls) ? d.route.pulls.length : 0;
  if (tp && Array.isArray(tp.pulls) && tp.pulls.length > 0) {
    if (routeLen > 0 && tp.pulls.length !== routeLen) {
      console.warn('[tank_pathing] Pull count mismatch for', d.id + ':', tp.pulls.length, 'entries vs', routeLen, 'route steps — using inferred tank path.');
      return inferTankPathing(d, tfn);
    }
    return tp;
  }
  return inferTankPathing(d, tfn);
}

function switchRouteSubtab(which) {
  const root = document.getElementById('route-content');
  if (!root) return;
  root.querySelectorAll('.route-subtab').forEach(b => b.classList.toggle('active', b.dataset.subtab === which));
  root.querySelectorAll('.route-subpanel').forEach(p => {
    const isMap = p.classList.contains('route-subpanel-map');
    const isTank = p.classList.contains('route-subpanel-tank');
    p.classList.toggle('active', (which === 'map' && isMap) || (which === 'tank' && isTank));
  });
  document.querySelectorAll('#route-content .vr-step.snap-active').forEach(el => el.classList.remove('snap-active'));
}

function snapToRoutePull(dungeonId, idx) {
  switchRouteSubtab('map');
  document.querySelectorAll('#route-content .vr-step').forEach(el => el.classList.remove('snap-active'));
  const el = document.getElementById(`vr-step-${dungeonId}-${idx}`);
  if (el) {
    el.classList.add('snap-active');
    setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 80);
  }
}

function buildOverviewAffixesSection(d) {
  if (d.type !== 'mplus' || typeof AFFIX_UI === 'undefined') return '';
  const aff = AFFIX_UI[lang] || AFFIX_UI.nl;
  const rows = aff.week1_affixes || [];
  const dungeonTips = (typeof AFFIX_WEEK1_DUNGEON_TIPS !== 'undefined' && AFFIX_WEEK1_DUNGEON_TIPS[d.id])
    ? AFFIX_WEEK1_DUNGEON_TIPS[d.id]
    : null;
  const tipArr = dungeonTips ? (dungeonTips[lang] || dungeonTips.nl) : null;
  const bl = aff.badge_labels || {};
  const u = UI[lang];
  const body = rows.map((a, i) => {
    const extra = tipArr && tipArr[i] ? `<div class="overview-affix-dungeon-tip">${tipArr[i]}</div>` : '';
    const badgeHtml = a.badge && bl[a.badge] ? `<span class="overview-affix-badge">${bl[a.badge]}</span>` : '';
    return `<div class="overview-affix-row" style="border-left:3px solid ${a.color || 'var(--border)'}">
      <div class="overview-affix-head">
        <span class="overview-affix-icon" aria-hidden="true">${a.icon}</span>
        <div class="overview-affix-meta">
          <div class="overview-affix-level-name"><span class="overview-affix-level">${a.level}</span> <span class="overview-affix-name">${a.name}</span></div>
          ${badgeHtml}
        </div>
      </div>
      <p class="overview-affix-what">${a.what}</p>
      ${extra}
    </div>`;
  }).join('');
  return `<section class="overview-affix-block" aria-label="${u.overview_affix_title}">
    <h3 class="overview-affix-title">${u.overview_affix_title}</h3>
    <p class="overview-affix-sub">${aff.week1_sub || ''}</p>
    ${body}
    ${buildAffixBossTipsBlock()}
  </section>`;
}

function renderDetail(d) {
  const u = UI[lang];
  const tldrEl = document.getElementById('d-tldr');
  const tldrBlock = document.getElementById('detail-tldr');
  const tldrContent = d.tldr ? t(d.tldr) : (d.route?.summary ? t(d.route.summary) : (d.tips?.[0] ? t(d.tips[0].text) : ''));
  if (tldrEl) tldrEl.textContent = tldrContent;
  if (tldrBlock) tldrBlock.style.display = tldrContent ? 'block' : 'none';
  const tldrLbl = document.getElementById('detail-tldr-label');
  if (tldrLbl) tldrLbl.textContent = u.tldr_label;
  document.getElementById('d-eyebrow').textContent = (t(d.zone)||d.zone||'').toUpperCase() + ' — ' + (d.type === 'mplus' ? u.type_mplus : d.type === 'raid' ? (u.badge_raid||'RAID') : u.type_normal);
  document.getElementById('d-title').textContent   = d.name;
  document.getElementById('d-meta').innerHTML      = `<span>⏱ ${d.time || '—'}</span><span>🔓 ${t(d.level)}</span><span>👹 ${d.bosses_short.length} ${u.lbl_bosses.toLowerCase()}</span>`;
  document.getElementById('d-lore').textContent    = t(d.lore);

  // Overview
  const affixOverview = buildOverviewAffixesSection(d);
  document.getElementById('overview-content').innerHTML = `
    <div class="overview-grid">
      <div class="info-card"><div class="info-card-title">${u.lbl_zone}</div><div class="info-card-val">${t(d.zone)||d.zone}</div></div>
      <div class="info-card"><div class="info-card-title">${u.lbl_type}</div><div class="info-card-val">${d.type === 'mplus' ? u.type_mplus : d.type === 'raid' ? (u.badge_raid||'🏰 Raid') : u.type_normal}</div></div>
      <div class="info-card"><div class="info-card-title">${u.lbl_unlock}</div><div class="info-card-val">${t(d.level)}</div></div>
      <div class="info-card"><div class="info-card-title">${u.lbl_bosses}</div><div class="info-card-val">${d.bosses_short.join(' · ')}</div></div>
    </div>
    ${affixOverview}
    ${(d.tips || []).map(tip => `<div class="tip-box"><strong>${t(tip.title)}:</strong> ${t(tip.text)}</div>`).join('')}`;

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
      ${b.desc ? `<div class="boss-desc">${wrapGlossaryTermsInText(t(b.desc))}</div>` : ''}
      <div class="boss-role-cards" role="tablist" aria-label="Role tips">
        <button type="button" class="role-card-btn role-card-tank${autoRole==='tank'?' active':''}" data-role="tank" onclick="switchRole('${uid}','tank')" aria-selected="${autoRole==='tank'}"><span class="role-card-ico" aria-hidden="true">🛡️</span><span class="role-card-lbl">${u.role_card_tank}</span></button>
        <button type="button" class="role-card-btn role-card-heal${autoRole==='heal'?' active':''}" data-role="heal" onclick="switchRole('${uid}','heal')" aria-selected="${autoRole==='heal'}"><span class="role-card-ico" aria-hidden="true">💊</span><span class="role-card-lbl">${u.role_card_heal}</span></button>
        <button type="button" class="role-card-btn role-card-dps${autoRole==='dps'?' active':''}" data-role="dps" onclick="switchRole('${uid}','dps')" aria-selected="${autoRole==='dps'}"><span class="role-card-ico" aria-hidden="true">⚔️</span><span class="role-card-lbl">${u.role_card_dps}</span></button>
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

  // Route — Visual Route Map + Tank guide + KG
  const r = d.route;
  const kgS = KG_STRINGS[lang];

  if (!r || !Array.isArray(r.pulls)) {
    document.getElementById('route-content').innerHTML = `<div class="route-section"><p class="tip-box">${u.tank_guide_empty}</p></div>`;
  } else {

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

  // Build visual route steps (ids for Snap-to-Map)
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
      <div class="vr-step" id="vr-step-${d.id}-${i}" data-pull-idx="${i}">
        <div class="vr-connector"></div>
        <div class="vr-node type-${type}"><span class="vr-node-num">${nodeIcon}</span></div>
        <div class="vr-card type-${type}">
          ${area}
          <div class="vr-label-row">
            <span class="vr-label">${t(p.label)}</span>
            ${badges.join('')}
          </div>
          <div class="vr-desc">${wrapGlossaryTermsInText(t(p.desc))}</div>
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
  const floorMapTitle = {nl:'🗺 Looproute', en:'🗺 Route Map'}[lang] || '🗺 Looproute';

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

  const innerRouteMap = `
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
        let tagList = [...(m.tags || [])];
        const hasIntTag = tagList.some(tg => {
          const x = String(tg).toLowerCase();
          return x === 'int' || x === 'interrupt';
        });
        if ((m.must_interrupt === true || m.high_priority === true) && !hasIntTag) tagList = ['int', ...tagList];
        const tags = tagList.map(tg =>
          typeof renderDungeonDetailTrashTag === 'function'
            ? renderDungeonDetailTrashTag(tg, m, tagMap, tagLbl)
            : (() => {
                const low = String(tg).toLowerCase();
                const isInt = low === 'int' || low === 'interrupt';
                const cls = 'trash-tag ' + (tagMap[tg] || '') + (isInt ? ' interrupt-danger' : '');
                return '<span class="' + cls.trim() + '">' + (tagLbl[tg] || tg) + '</span>';
              })()
        ).join('');
        return '<div class="trash-card"><div class="trash-card-header"><span class="trash-mob-name">'+m.mob+'</span><div class="trash-tags">'+tags+'</div></div><div class="trash-card-tip">'+t(m.tip)+'</div></div>';
      }).join('');
      return '<div class="trash-section route-section"><div class="route-title">'+u.trash_title+'</div><div class="trash-grid">'+cards+'</div></div>';
    })() : ''}`;

  const tp = getTankPathing(d, t);
  const dangerLabels = { low: u.danger_low, med: u.danger_med, high: u.danger_high, boss: u.danger_boss, lethal: u.danger_lethal };
  const tankRows = tp.pulls.map(pull => {
    const note = t(pull.note);
    const mobLinks = (pull.mobs && pull.mobs.length)
      ? pull.mobs.map(m => `<button type="button" class="tank-mob-link" onclick="snapToRoutePull('${d.id}',${pull.pullRef})">${String(m).replace(/</g, '&lt;')}</button>`).join(', ')
      : `<button type="button" class="tank-mob-link tank-pull-only" onclick="snapToRoutePull('${d.id}',${pull.pullRef})">${u.tank_pull_cta} ${pull.pullRef + 1}</button>`;
    const dn = typeof pull.danger === 'number' ? pull.danger : null;
    const dangerClass = dn != null && dn >= 1 && dn <= 5 ? `tank-danger-${dn}` : `tank-danger-${pull.danger}`;
    const dang = dn != null && dn >= 1 && dn <= 5
      ? (u['danger_n' + dn] || `${dn}/5`)
      : (dangerLabels[pull.danger] || pull.danger);
    const intLine = pull.interrupts ? `<p class="tank-pull-interrupts tank-pull-interrupts-must"><strong>${u.tank_interrupt_label}</strong> <span class="interrupt-danger">${wrapGlossaryTermsInText(t(pull.interrupts))}</span></p>` : '';
    return `<div class="tank-pull-row ${dangerClass}">
      <div class="tank-pull-head"><span class="tank-danger-pill">${dang}</span><span class="tank-pull-num">#${pull.pullRef + 1}</span></div>
      <p class="tank-pull-note">${wrapGlossaryTermsInText(note)}</p>
      ${intLine}
      <div class="tank-pull-mobs">${mobLinks}</div>
    </div>`;
  }).join('');
  const tankPanelHtml = d.type === 'mplus'
    ? `<div class="route-subpanel route-subpanel-tank">
        <div class="route-section"><div class="route-title">${u.tank_guide_title}</div><p class="tank-guide-sub">${u.tank_guide_sub}</p><div class="tank-pull-list">${tankRows}</div>
        <p class="tank-source-footer" role="note">${u.tank_source_footer}</p></div>
      </div>`
    : '';

  const showTankTab = d.type === 'mplus';
  if (showTankTab) {
    document.getElementById('route-content').innerHTML = `
      <div class="route-subtab-bar" role="tablist">
        <button type="button" class="route-subtab active" role="tab" data-subtab="map" onclick="switchRouteSubtab('map')">${u.tab_route_map}</button>
        <button type="button" class="route-subtab" role="tab" data-subtab="tank" onclick="switchRouteSubtab('tank')">${u.tab_route_tank}</button>
      </div>
      <div class="route-subpanel route-subpanel-map active">${innerRouteMap}</div>
      ${tankPanelHtml}`;
  } else {
    document.getElementById('route-content').innerHTML = innerRouteMap;
  }
  }
  if (typeof refreshWowheadTooltips === 'function') setTimeout(refreshWowheadTooltips, 50);
}

// ═══════════════════════════════════════════════════════════════
// TABS
// ═══════════════════════════════════════════════════════════════
function switchTab(name, event) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById(`tab-${name}`).classList.add('active');
  if (event && event.target) event.target.classList.add('active');
  else {
    const btn = document.getElementById(`tab-btn-${name}`);
    if (btn) btn.classList.add('active');
  }
  if (name === 'route') setTimeout(() => { if (typeof switchRouteSubtab === 'function') switchRouteSubtab('map'); }, 0);
}

// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════
/* Strict dark mode — light theme disabled */
if (localStorage.getItem('lang')) {
  lang = localStorage.getItem('lang');
}
if (lang === 'da') {
  lang = 'en';
  localStorage.setItem('lang', 'en');
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
document.addEventListener('DOMContentLoaded', async function() {
  try {
    document.body.classList.add('mode-home');
    const BANNER_KEY = window.MIDNIGHT_BANNER_DISMISS_KEY || 'midnight_banner_v1_0_5';
    if (typeof renderBanner === 'function') renderBanner();
    if (!localStorage.getItem(BANNER_KEY)) {
      document.getElementById('dev-banner')?.classList.add('open');
    }
    if (typeof loadDungeonsGridMeta === 'function') await loadDungeonsGridMeta();
    if (typeof loadRaidsGridMeta === 'function') await loadRaidsGridMeta();
    if (typeof fetchPreyToday === 'function') void fetchPreyToday();
    applyUIStrings();
    void fetchLiveResetData().then(() => {
      if (typeof updateHeaderSyncBadge === 'function') updateHeaderSyncBadge();
    });
    applySavedTheme();
    updateFooter();
    updateSpecBtn();
    renderHome();
    initTooltips();
  } catch (err) {
    console.error('Midnight Guide: init mislukt', err);
  }
});

// ── KEYSTONE.GURU POPUP ──
// [Data moved to external file]

// ═══════════════════════════════════════════════════════════════
// PROFESSIONS MODE
// ═══════════════════════════════════════════════════════════════

let currentProf = null;

const PROF_UI = {
  nl:{hero_title:'Professies — Midnight',hero_sub:'Kies een professie om de gids te openen',gathering:'Verzamelen',crafting:'Produceren',secondary:'Secundair',tier_label:'Tier',gold_label:'💰 Goud',use_label:'🛠 Nut',back:'← Terug',trainer_head:'Trainer — Waar te vinden',spec_head:'Specialisaties',item_head:'Wat maak je?',orders_head:'Crafting Orders',method_btn:'📖 Method.gg',wowp_btn:'📖 WoW-Professions',source_label:'Bronnen:', tab_trainer:'📍 Trainer', tab_specs:'⚙️ Specs', tab_items:'🎒 Items', tab_orders:'📜 Orders', tab_kp:'🧭 KP Gids', tab_kpbronnen:'🗺️ KP',
    prof_card_knowledge_quests:'Kennisquests',prof_card_daily_orders:'Dagelijkse orders: ~3',prof_card_hint_gather:'Dagelijkse routes & mats',prof_card_hint_craft:'Kennisquests · Dagelijkse orders: ~3',prof_card_hint_sec:'Buffs, vis & utility'},
  en:{hero_title:'Professions — Midnight',hero_sub:'Choose a profession to open the guide',gathering:'Gathering',crafting:'Crafting',secondary:'Secondary',tier_label:'Tier',gold_label:'💰 Gold',use_label:'🛠 Utility',back:'← Back',trainer_head:'Trainer — Where to find',spec_head:'Specializations',item_head:'What do you make?',orders_head:'Crafting Orders',method_btn:'📖 Method.gg',wowp_btn:'📖 WoW-Professions',source_label:'Sources:', tab_trainer:'📍 Trainer', tab_specs:'⚙️ Specs', tab_items:'🎒 Items', tab_orders:'📜 Orders', tab_kp:'🧭 KP Guide', tab_kpbronnen:'🗺️ KP',
    prof_card_knowledge_quests:'Knowledge quests',prof_card_daily_orders:'Daily orders: ~3',prof_card_hint_gather:'Daily routes & mats',prof_card_hint_craft:'Knowledge quests · Daily orders: ~3',prof_card_hint_sec:'Buffs, fish & utilities'}};

function pT(obj){if(!obj)return '';return obj[lang]||obj.nl||obj.en||'';}
function pStars(n,max=5){return '★'.repeat(n)+'☆'.repeat(max-n);}

function countProfKpTrees(id) {
  try {
    const k = typeof KP_DATA !== 'undefined' && KP_DATA[id];
    return (k && Array.isArray(k.trees)) ? k.trees.length : 0;
  } catch (e) { return 0; }
}

function getProfCardCompactLine(p, ui) {
  const treeN = countProfKpTrees(p.id);
  const kq = ui.prof_card_knowledge_quests || 'Knowledge quests';
  const ord = ui.prof_card_daily_orders || 'Daily orders: ~3';
  if (treeN > 0) return `${kq} · ${ord}`;
  if (p.cat === 'gathering') return ui.prof_card_hint_gather;
  if (p.cat === 'crafting') return ui.prof_card_hint_craft || `${kq} · ${ord}`;
  return ui.prof_card_hint_sec;
}




function openRaid(id) {
  const d = getAllDungeons().find(x => x.id === id);
  if (!d) return;
  currentDungeon = d;
  renderDetail(d);
  document.body.classList.add('raid-detail-open');
  document.getElementById('back-btn').style.display = 'inline-block';
  switchTab('overview');
  window.scrollTo(0, 0);
  if (typeof refreshWowheadTooltips === 'function') setTimeout(refreshWowheadTooltips, 50);
  updateSpecHeaderBtnVisibility();
}

/** Raid hub cards — used by renderRaidList() in ui.js */
function getRaidScreenList() {
  return [
    {
      id: 'dreamrift',
      icon: '🌀',
      name: 'The Dreamrift',
      zone: { nl: 'Harandar — Rift of Aln', en: 'Harandar — Rift of Aln' },
      opens: { nl: 'Seizoen 1 — live', en: 'Season 1 — live' },
      bosses: ['Chimaerus, the Undreamt God'],
      available: true,
      openNow: true,
    },
    {
      id: 'voidspire',
      icon: '🔮',
      name: 'The Voidspire',
      zone: { nl: 'Voidstorm', en: 'Voidstorm' },
      opens: { nl: 'Seizoen 1 — live', en: 'Season 1 — live' },
      bosses: ['Imperator Averzian', 'Vorasius', 'Fallen-King Salhadaar', 'Vaelgor & Ezzorak', 'Lightblinded Vanguard', 'Crown of the Cosmos'],
      available: true,
      openNow: true,
    },
    {
      id: 'marchqueldanas',
      icon: '🌅',
      name: "March on Quel'Danas",
      zone: { nl: "Isle of Quel'Danas", en: "Isle of Quel'Danas" },
      opens: { nl: 'Opent 31 maart 2026', en: 'Opens March 31, 2026' },
      bosses: ["Belo'ren, Child of Al'ar", "Midnight Falls (L'ura)"],
      available: true,
    },
  ];
}

function buildRaidScreen() {
  if (typeof renderRaidList === 'function') {
    renderRaidList();
    return;
  }
  const el = document.getElementById('raids-content');
  if (!el) return;
  const raids = getRaidScreenList();
  el.innerHTML = `<div class="dungeon-grid">` + raids.map(r => `
      <div class="dungeon-card raid ${r.available ? '' : 'raid-coming-soon'}" ${r.available ? `onclick="openRaid('${r.id}')"` : ''} style="${r.available ? '' : 'opacity:0.6; cursor:default;'}">
        <div class="card-accent" style="background:linear-gradient(90deg,#a78bfa,#8b5cf6)"></div>
        <div class="card-body">
          <div class="raid-card-badges">
          <span class="card-badge badge-raid" style="background:rgba(167,139,250,0.12);color:#a78bfa;border:1px solid rgba(167,139,250,0.3)">
            ${r.available ? (lang === 'nl' ? 'BESCHIKBAAR' : 'AVAILABLE') : (lang === 'nl' ? 'BINNENKORT' : 'SOON')}
          </span>
          ${r.openNow ? `<span class="card-badge badge-open-now">${lang === 'nl' ? 'NU OPEN' : 'OPEN NOW'}</span>` : ''}
          </div>
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
const BOUNTIFUL_WEEKLY_MAP_KEY = '__bountifulDelveMap';
const BOUNTIFUL_DAILY_KEYS_STORAGE = 'bountiful_daily_keys_v1';

function getWowDailyDateKeyUtc() {
  const n = new Date();
  if (n.getUTCHours() < 7) {
    const d = new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() - 1));
    return d.toISOString().slice(0, 10);
  }
  return n.toISOString().slice(0, 10);
}

/** Header strip: current EU WoW calendar day (07:00 UTC boundary), not a hardcoded deploy date. Tooltip = optional JSON fetch time from Delves load. */
function updateHeaderSyncBadge() {
  const el = document.getElementById('header-sync-badge');
  if (!el) return;
  const wowDay = getWowDailyDateKeyUtc();
  const parts = wowDay.split('-').map(Number);
  const d = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
  const locale = lang === 'en' ? 'en-GB' : 'nl-NL';
  const dateStr = d.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
  const isNl = lang !== 'en';
  el.textContent = (isNl ? 'GLOBALE DATA — EU BOUNTIFUL-DAG ' : 'GLOBAL DATA — EU BOUNTIFUL DAY ') + dateStr;
  const tip = [];
  if (bountifulFetchResult && bountifulFetchResult.fetched) {
    tip.push(isNl ? 'Laatste repo-fetch (bountiful-today.json): ' : 'Last repo fetch (bountiful-today.json): ');
    tip.push(String(bountifulFetchResult.fetched));
  }
  if (liveResetFetchResult && liveResetFetchResult.ok && liveResetFetchResult.lastUpdated) {
    tip.push(isNl ? ' | Wowhead scrape (live_reset_data.json): ' : ' | Wowhead scrape (live_reset_data.json): ');
    tip.push(String(liveResetFetchResult.lastUpdated));
    tip.push(' UTC');
  }
  if (bountifulFetchResult && bountifulFetchResult.staleJson) {
    tip.push(isNl ? ' — JSON gold voor vorige WoW-dag; rooster-fallback.' : ' — JSON was for previous WoW day; schedule fallback.');
  }
  el.title = tip.length ? tip.join('') : '';
}

function getNextDailyResetUtcMs() {
  const n = new Date();
  let next = Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), 7, 0, 0, 0);
  if (n.getTime() >= next) next = Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() + 1, 7, 0, 0, 0);
  return next;
}

function loadDailyKeysObject() {
  try { return JSON.parse(localStorage.getItem(BOUNTIFUL_DAILY_KEYS_STORAGE) || '{}') || {}; } catch (e) { return {}; }
}

function getTodayDailyKeysList() {
  const d = getWowDailyDateKeyUtc();
  const o = loadDailyKeysObject();
  const arr = o[d];
  return Array.isArray(arr) ? arr.slice() : [];
}

function setTodayDailyKeysList(ids) {
  const d = getWowDailyDateKeyUtc();
  const o = loadDailyKeysObject();
  o[d] = ids.slice(0, 4);
  localStorage.setItem(BOUNTIFUL_DAILY_KEYS_STORAGE, JSON.stringify(o));
}

function toggleBountifulDailyKey(delveId) {
  if (!getActiveBountifulDelveIds().includes(delveId)) return;
  const ui = DELVES_UI[lang] || DELVES_UI.nl;
  let list = getTodayDailyKeysList();
  const i = list.indexOf(delveId);
  if (i >= 0) list.splice(i, 1);
  else {
    if (list.length >= 4) {
      const toast = document.getElementById('toast-notification');
      if (toast) {
        toast.textContent = ui.bountiful_daily_full;
        toast.style.opacity = '1';
        setTimeout(() => { toast.style.opacity = '0'; }, 2800);
      }
      return;
    }
    list.push(delveId);
  }
  setTodayDailyKeysList(list);
  void buildDelvesScreen();
  if (document.body.classList.contains('mode-home')) renderDashboardWidgets();
}

let delveDailyCountdownTimer = null;
function startDelveDailyCountdown() {
  if (delveDailyCountdownTimer) clearInterval(delveDailyCountdownTimer);
  const el = document.getElementById('delves-daily-countdown');
  if (!el) return;
  const ui = DELVES_UI[lang] || DELVES_UI.nl;
  function tick() {
    const diff = getNextDailyResetUtcMs() - Date.now();
    if (diff <= 0) {
      clearInterval(delveDailyCountdownTimer);
      delveDailyCountdownTimer = null;
      resetBountifulFetchCache();
      void buildDelvesScreen();
      updateHeaderSyncBadge();
      return;
    }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.textContent = `${ui.bountiful_countdown_prefix} ${h}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s · 07:00 UTC`;
  }
  tick();
  delveDailyCountdownTimer = setInterval(tick, 1000);
}

const DELVES_UI = {
  nl: { delves_title:'Alle Midnight Delves', delves_sub:'Overzicht van alle Delves in Midnight Season 1 met /way om er te komen.', delves_click_hint:'Klik op de Delve-naam voor korte tips.', delve_name:'Delve', zone_way:'Zone / Area', key_info_title:'Sleutel-info', loot_title:'Loot Tabel', loot_sub:'Item levels per Tier — Midnight Season 1', tier:'Tier', copy_way:'Kopieer /way',
    bountiful_json_ok:'Vandaag Bountiful EU (live data)',
    bountiful_stale_json:'Bountiful: `bountiful-today.json` in de repo hoort nog bij de vorige WoW-dag (CI na 07:00 UTC kan vertragen). We tonen het ingebouwde week-rooster voor vandaag — controleer in-game of meld een issue als dit structureel afwijkt.',
    bountiful_schedule_fallback:'Bountiful: we tonen de ingebouwde week-rooster — JSON kon niet geladen worden of bevat geen 4 geldige id\'s. Status wordt bijgewerkt zodra `data/bountiful-today.json` beschikbaar is.',
    bountiful_no_ids:'Bountiful: geen lijst beschikbaar. Controleer later opnieuw of werk `data/bountiful-today.json` bij.',
    bountiful_daily_btn:'DAG. BOUNTIFUL',
    bountiful_daily_title:'Sleutel vandaag gebruikt (reset 07:00 UTC) — max. 4 per WoW-dag',
    bountiful_daily_full:'Je hebt al 4 sleutels vandaag gemarkeerd — haal er één weg of wacht tot de dagelijkse reset (07:00 UTC).',
    bountiful_vault_btn:'VAULT',
    bountiful_vault_title:'Great Vault / wekelijkse voortgang (1/4–4/4) — zelfde vakjes als op de Weekly-tab',
    bountiful_vault_full:'Alle 4 vault-vakjes voor Bountiful staan al aan — vink er één uit op de Delves- of Weekly-tab.',
    bountiful_keys_today:'Sleutels vandaag: {n}/4',
    bountiful_countdown_prefix:'Volgende dagelijkse Bountiful-rotatie over',
    delves_bountiful_roles_note:'👥 Account-breed: max. 4 Bountiful-sleutels per dag en Great Vault 1/4–4/4 gelden voor alle rollen (tank, healer, DPS) — hetzelfde als op de Weekly-tab.',
    delves_tier_range:'T1–T11',
    delves_tier_peak:'Tier {n}',
    delves_reward_peak:'{n}+ ilvl · Hero / GV',
    delves_ilvl_band:'Bountiful {min}–{max}+',
    delves_champ_ilvl:'~259 Hero / GV (Tier 8)',
    loot_farm_caption:'⭐ Tier 8 — aanbevolen farm (goud in de tabel). Bountiful einde-run: 250 (Champion 2/6). Trovehunter (map): 259 (Hero 1/6). Great Vault: 259 (Hero 1/6).',
    loot_gv_hero_note:'📌 Tier 8+ Delves: Great Vault World op HERO-track (zie tabel).',
    delves_bountiful_badge:'Bountiful',
    role_ease_label:'💡 Rol-tip:',
    detail_gimmick:'Wat te doen', detail_danger:'Gevaar', detail_tip:'Tip', wowhead:'→ Wowhead',
    full_guide_btn:'Volledige gids', back_btn:'← Terug',
    delves_spotlight_callout:'✨ <strong>The Darkway</strong> is uitgelicht — de delve waarmee verkeerde korte tips zijn vervangen door Method.gg-bronnen. Zie <button type="button" class="about-open-inline" onclick="openAbout()">Over deze app</button> voor de changelog.',
    delves_spotlight_badge:'Spotlight',
    delves_live_reset_meta:'Wowhead EU-scrape ({t} UTC): {locations}',
    delves_live_reset_mismatch:'Let op: Wowhead TIW toont een andere Bountiful-set of minder dan 4 entries dan `bountiful-today.json` — check in-game bij twijfel.' },
  en: { delves_title:'All Midnight Delves', delves_sub:'Overview of all Delves in Midnight Season 1 with /way to get there.', delves_click_hint:'Click the Delve name for quick tips.', delve_name:'Delve', zone_way:'Zone / Area', key_info_title:'Key Info', loot_title:'Loot Table', loot_sub:'Item levels per Tier — Midnight Season 1', tier:'Tier', copy_way:'Copy /way',
    bountiful_json_ok:'Today’s Bountiful EU (live data)',
    bountiful_stale_json:'Bountiful: repo `bountiful-today.json` is still dated to the previous WoW day (CI after 07:00 UTC can run late). Showing the built-in weekly rotation for today — verify in-game or open an issue if this is consistently wrong.',
    bountiful_schedule_fallback:'Bountiful: showing the built-in weekly rotation — JSON could not be loaded or does not contain 4 valid ids. Status will update when `data/bountiful-today.json` is available.',
    bountiful_no_ids:'Bountiful: no list available. Check back later or update `data/bountiful-today.json`.',
    bountiful_daily_btn:'DAILY BOUNTIFUL',
    bountiful_daily_title:'Key used today (resets 07:00 UTC) — up to 4 per WoW day',
    bountiful_daily_full:'You already marked 4 keys for today — uncheck one or wait for the daily reset (07:00 UTC).',
    bountiful_vault_btn:'VAULT',
    bountiful_vault_title:'Great Vault / weekly progress (1/4–4/4) — same boxes as the Weekly tab',
    bountiful_vault_full:'All 4 vault slots for Bountiful are already checked — clear one on Delves or Weekly.',
    bountiful_keys_today:'Keys today: {n}/4',
    bountiful_countdown_prefix:'Next daily Bountiful rotation in',
    delves_bountiful_roles_note:'👥 Account-wide: up to 4 Bountiful keys per day and Great Vault 1/4–4/4 count for all roles (tank, healer, DPS) — same tracking as on the Weekly tab.',
    delves_tier_range:'T1–T11',
    delves_tier_peak:'Tier {n}',
    delves_reward_peak:'{n}+ ilvl · Hero / GV',
    delves_ilvl_band:'Bountiful {min}–{max}+',
    delves_champ_ilvl:'~259 Hero / GV (Tier 8)',
    loot_farm_caption:'⭐ Tier 8 — recommended farming tier (gold row). Bountiful end-of-run: 250 (Champion 2/6). Trovehunter map: 259 (Hero 1/6). Great Vault: 259 (Hero 1/6).',
    loot_gv_hero_note:'📌 Tier 8+ Delves: Great Vault World on the HERO track (see table).',
    delves_bountiful_badge:'Bountiful',
    role_ease_label:'💡 Role tip:',
    detail_gimmick:'Main gimmick', detail_danger:'Biggest danger', detail_tip:'Pro-tip', wowhead:'→ Wowhead',
    full_guide_btn:'Full Guide', back_btn:'← Back',
    delves_spotlight_callout:'✨ <strong>The Darkway</strong> is highlighted — the delve whose wrong quick tips were replaced with Method.gg-sourced text. Open <button type="button" class="about-open-inline" onclick="openAbout()">About this app</button> for the changelog.',
    delves_spotlight_badge:'Spotlight',
    delves_live_reset_meta:'Wowhead EU scrape ({t} UTC): {locations}',
    delves_live_reset_mismatch:'Note: Wowhead TIW shows a different Bountiful set or fewer than 4 entries vs `bountiful-today.json` — verify in-game if unsure.' }
};

let liveResetFetchPromise = null;
let liveResetFetchResult = {
  ok: false,
  bountifulNames: [],
  bountifulIds: [],
  dailyPrey: [],
  lastUpdated: '',
  error: null,
};

async function fetchLiveResetData() {
  if (liveResetFetchPromise) return liveResetFetchPromise;
  liveResetFetchPromise = (async () => {
    try {
      const res = await fetch('data/live_reset_data.json', { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      const names = Array.isArray(data.bountiful_delves) ? data.bountiful_delves.map(String) : [];
      const ids = Array.isArray(data.bountiful_delve_ids)
        ? data.bountiful_delve_ids.filter(x => typeof x === 'string')
        : [];
      const prey = Array.isArray(data.daily_prey) ? data.daily_prey.map(String) : [];
      const lu = data.last_updated != null ? String(data.last_updated) : '';
      liveResetFetchResult = {
        ok: true,
        bountifulNames: names,
        bountifulIds: ids,
        dailyPrey: prey,
        lastUpdated: lu,
        error: null,
      };
    } catch (e) {
      liveResetFetchResult = {
        ok: false,
        bountifulNames: [],
        bountifulIds: [],
        dailyPrey: [],
        lastUpdated: '',
        error: e,
      };
    }
    return liveResetFetchResult;
  })();
  return liveResetFetchPromise;
}

function resetLiveResetFetchCache() {
  liveResetFetchPromise = null;
  liveResetFetchResult = {
    ok: false,
    bountifulNames: [],
    bountifulIds: [],
    dailyPrey: [],
    lastUpdated: '',
    error: null,
  };
}

function bountifulListMismatchWithLiveReset(activeIds) {
  const lr = liveResetFetchResult;
  if (!lr.ok || !lr.bountifulIds.length || !Array.isArray(activeIds) || !activeIds.length) return false;
  const wh = lr.bountifulIds;
  if (wh.length !== activeIds.length) return true;
  const setJ = new Set(activeIds);
  return wh.some(id => !setJ.has(id));
}

let bountifulFetchPromise = null;
let bountifulFetchResult = {
  ok: false,
  fromJson: false,
  staleJson: false,
  ids: [],
  error: null,
  jsonReset: null,
  fetched: null,
};

/** Weekday 0–6 (Sun–Sat) of the current WoW EU calendar day (reset 07:00 UTC), same boundary as getWowDailyDateKeyUtc(). */
function getWowEuScheduleWeekday() {
  const key = getWowDailyDateKeyUtc();
  const parts = key.split('-').map(Number);
  const y = parts[0];
  const mo = parts[1] - 1;
  const da = parts[2];
  return new Date(Date.UTC(y, mo, da)).getUTCDay();
}

function getBountifulScheduleFallbackIds() {
  const sched = typeof DELVES_DATA !== 'undefined' && DELVES_DATA.bountifulSchedule;
  if (!sched || !sched.length) return [];
  const offset = Number(DELVES_DATA.bountifulScheduleOffset) || 0;
  const dowUtc = getWowEuScheduleWeekday();
  const dayIx = (dowUtc + 4) % 7;
  const row = sched[(dayIx + offset + 700) % 7];
  return Array.isArray(row) ? row.slice(0, 4) : [];
}

function validateBountifulIdList(arr) {
  const delves = typeof DELVES_DATA !== 'undefined' && DELVES_DATA.delves ? DELVES_DATA.delves : [];
  const valid = new Set(delves.map(d => d.id));
  const out = [];
  if (!Array.isArray(arr)) return out;
  for (const id of arr) {
    if (typeof id === 'string' && valid.has(id) && !out.includes(id)) out.push(id);
  }
  return out;
}

async function fetchBountifulDelves() {
  if (bountifulFetchPromise) return bountifulFetchPromise;
  bountifulFetchPromise = (async () => {
    const wowDay = getWowDailyDateKeyUtc();
    await fetchLiveResetData();
    try {
      const res = await fetch('data/bountiful-today.json', { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      const raw = data.delves || data.delveIds || [];
      let ids = validateBountifulIdList(raw);
      const jsonReset = typeof data.reset === 'string' ? data.reset.trim() : '';
      const fetched = data.fetched != null ? String(data.fetched) : null;

      if (jsonReset && jsonReset !== wowDay) {
        const fallback = validateBountifulIdList(getBountifulScheduleFallbackIds());
        bountifulFetchResult = {
          ok: fallback.length === 4,
          fromJson: false,
          staleJson: true,
          ids: fallback.length === 4 ? fallback : [],
          error: Object.assign(new Error('bountiful_json_reset_mismatch'), { jsonReset, wowDay }),
          jsonReset,
          fetched,
        };
        return bountifulFetchResult;
      }

      if (ids.length !== 4) throw new Error('Expected 4 valid delve ids, got ' + ids.length);
      bountifulFetchResult = {
        ok: true,
        fromJson: true,
        staleJson: false,
        ids,
        error: null,
        jsonReset: jsonReset || wowDay,
        fetched,
      };
    } catch (e) {
      const fallback = validateBountifulIdList(getBountifulScheduleFallbackIds());
      bountifulFetchResult = {
        ok: fallback.length === 4,
        fromJson: false,
        staleJson: false,
        ids: fallback.length === 4 ? fallback : [],
        error: e,
        jsonReset: null,
        fetched: null,
      };
    }
    return bountifulFetchResult;
  })();
  return bountifulFetchPromise;
}

/** Reset fetch (e.g. after weekly rollover) — optional call from weekly screen. */
function resetBountifulFetchCache() {
  bountifulFetchPromise = null;
  resetLiveResetFetchCache();
  bountifulFetchResult = {
    ok: false,
    fromJson: false,
    staleJson: false,
    ids: [],
    error: null,
    jsonReset: null,
    fetched: null,
  };
}

function getActiveBountifulDelveIds() {
  return bountifulFetchResult.ids && bountifulFetchResult.ids.length === 4
    ? bountifulFetchResult.ids.slice()
    : [];
}

function getBountifulWeeklyMap(state) {
  const m = state[BOUNTIFUL_WEEKLY_MAP_KEY];
  return m && typeof m === 'object' && !Array.isArray(m) ? { ...m } : {};
}

function pruneBountifulWeeklyMap(state) {
  const raw = state[BOUNTIFUL_WEEKLY_MAP_KEY];
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return;
  let dirty = false;
  for (const delveId of Object.keys(raw)) {
    const slot = raw[delveId];
    if (!state['w_delve' + slot]) {
      delete raw[delveId];
      dirty = true;
    }
  }
  if (dirty) {
    if (Object.keys(raw).length) state[BOUNTIFUL_WEEKLY_MAP_KEY] = raw;
    else delete state[BOUNTIFUL_WEEKLY_MAP_KEY];
    if (typeof weeklySaveState === 'function') weeklySaveState(state);
  }
}

function toggleBountifulDelveForWeekly(delveId) {
  if (typeof weeklyLoadState !== 'function' || typeof weeklySaveState !== 'function') return;
  const active = getActiveBountifulDelveIds();
  if (!active.includes(delveId)) return;
  const state = weeklyLoadState();
  pruneBountifulWeeklyMap(state);
  const map = getBountifulWeeklyMap(state);

  if (map[delveId]) {
    const slot = map[delveId];
    delete map[delveId];
    state['w_delve' + slot] = false;
    if (Object.keys(map).length) state[BOUNTIFUL_WEEKLY_MAP_KEY] = map;
    else delete state[BOUNTIFUL_WEEKLY_MAP_KEY];
  } else {
    let assigned = null;
    for (let i = 1; i <= 4; i++) {
      if (!state['w_delve' + i]) {
        assigned = i;
        break;
      }
    }
    if (assigned === null) {
      const ui = DELVES_UI[lang] || DELVES_UI.nl;
      const toast = document.getElementById('toast-notification');
      if (toast) {
        toast.textContent = ui.bountiful_vault_full;
        toast.style.opacity = '1';
        setTimeout(() => { toast.style.opacity = '0'; }, 2800);
      }
      return;
    }
    map[delveId] = assigned;
    state['w_delve' + assigned] = true;
    state[BOUNTIFUL_WEEKLY_MAP_KEY] = map;
  }
  weeklySaveState(state);
  if (document.body.classList.contains('mode-delves')) void buildDelvesScreen();
  if (typeof buildWeeklyList === 'function') buildWeeklyList();
}

/** Leading item level from a Delves loot cell (number or string like "250 (Champion 2/6)"). */
function parseDelvesLootIlvlCell(val) {
  if (val == null || val === '—') return NaN;
  if (typeof val === 'number' && !Number.isNaN(val)) return val;
  if (typeof val === 'string') {
    const m = val.match(/^\s*(\d+)/);
    if (m) return Number(m[1]);
  }
  return NaN;
}

async function buildDelvesScreen() {
  if (typeof DELVES_DATA === 'undefined') return;
  const ui = DELVES_UI[lang] || DELVES_UI.nl;

  await fetchBountifulDelves();

  const _wowDay = getWowDailyDateKeyUtc();
  if (typeof window !== 'undefined') {
    if (window.__midnightWowDayKey && window.__midnightWowDayKey !== _wowDay) resetBountifulFetchCache();
    window.__midnightWowDayKey = _wowDay;
  }

  const dailyList = getTodayDailyKeysList();

  const delves = DELVES_DATA.delves;
  const keyInfo = DELVES_DATA.keyInfo[lang] || DELVES_DATA.keyInfo.nl;
  const lootTable = DELVES_DATA.lootTable;

  const bountifulIds = getActiveBountifulDelveIds();
  const bountifulSet = new Set(bountifulIds);
  let weeklyState = typeof weeklyLoadState === 'function' ? weeklyLoadState() : {};
  pruneBountifulWeeklyMap(weeklyState);
  weeklyState = typeof weeklyLoadState === 'function' ? weeklyLoadState() : {};
  const weeklyMap = getBountifulWeeklyMap(weeklyState);

  const bountifulNums = lootTable.map(r => parseDelvesLootIlvlCell(r.bountiful)).filter(n => !Number.isNaN(n));
  const minB = bountifulNums.length ? Math.min(...bountifulNums) : 182;
  const maxB = bountifulNums.length ? Math.max(...bountifulNums) : 205;
  const ilvlBand = (ui.delves_ilvl_band || 'Bountiful {min}–{max}+').replace(/\{min\}/g, String(minB)).replace(/\{max\}/g, String(maxB));
  const maxTierNum = lootTable.reduce((mx, r) => Math.max(mx, Number(r.tier) || 0), 0) || 8;
  const tierPeakLabel = (ui.delves_tier_peak || 'Tier {n}').replace(/\{n\}/g, String(maxTierNum));
  const heroN = typeof ILVL_MIDNIGHT !== 'undefined' ? ILVL_MIDNIGHT.hero : 259;
  const rewardPeakLabel = (ui.delves_reward_peak || '{n}+ ilvl · Hero / GV').replace(/\{n\}/g, String(heroN));

  let html = '';

  let statusNote = '';
  if (bountifulIds.length === 4) {
    if (bountifulFetchResult.staleJson) {
      statusNote = `<p class="delves-bountiful-status delves-bountiful-status-warn">⚠️ ${ui.bountiful_stale_json || ui.bountiful_schedule_fallback}</p>`;
    } else if (bountifulFetchResult.fromJson) {
      statusNote = `<p class="delves-bountiful-status delves-bountiful-status-ok">✨ ${ui.bountiful_json_ok}</p>`;
    } else {
      statusNote = `<p class="delves-bountiful-status delves-bountiful-status-warn">⚠️ ${ui.bountiful_schedule_fallback}</p>`;
    }
  } else {
    statusNote = `<p class="delves-bountiful-status delves-bountiful-status-warn">⚠️ ${ui.bountiful_no_ids}</p>`;
  }
  const lr = liveResetFetchResult;
  const esc = typeof escapeHtmlText === 'function' ? escapeHtmlText : (s => String(s == null ? '' : s).replace(/</g, '&lt;'));
  if (lr.ok && lr.lastUpdated && lr.bountifulNames.length) {
    const locs = lr.bountifulNames.map(esc).join(', ');
    const meta = (ui.delves_live_reset_meta || '')
      .replace(/\{t\}/g, esc(lr.lastUpdated))
      .replace(/\{locations\}/g, locs);
    statusNote += `<p class="delves-live-reset-meta">${meta}</p>`;
  }
  if (lr.ok && lr.bountifulIds.length && bountifulListMismatchWithLiveReset(bountifulIds)) {
    statusNote += `<p class="delves-bountiful-status delves-bountiful-status-warn">⚠️ ${ui.delves_live_reset_mismatch || ''}</p>`;
  }
  html += `<div class="delves-bountiful-banner">
    ${statusNote}
    <p class="delves-daily-keys-summary" id="delves-daily-keys-summary">${ui.bountiful_keys_today.replace('{n}', String(dailyList.length))}</p>
    <p class="delves-daily-countdown" id="delves-daily-countdown" aria-live="polite"></p>
    <p class="delves-bountiful-roles-note">${ui.delves_bountiful_roles_note || ''}</p>
  </div>`;

  // Alle Delves — vault card grid (tier / ilvl + Bountiful pulse + /way)
  html += `<div class="delves-list-section delves-vault-theme">
    <h3 class="delves-section-title">${ui.delves_title}</h3>
    <p class="delves-section-sub">${ui.delves_sub}</p>
    <p class="delves-section-hint">💡 ${ui.delves_click_hint}</p>
    <p class="delves-spotlight-callout" role="note">${ui.delves_spotlight_callout || ''}</p>
    <div class="delves-card-grid immersive-card-grid">`;
  delves.forEach(d => {
    const isSpotlight = !!d.spotlight;
    const isBountiful = bountifulSet.has(d.id);
    const chest = isBountiful
      ? `<span class="delves-bountiful-chest" aria-hidden="true"><span class="delves-chest-icon">📦</span><span class="delves-glimmer" aria-hidden="true"></span></span>`
      : '';
    const slot = weeklyMap[d.id];
    const weeklyChecked = slot && weeklyState['w_delve' + slot];
    const dailyOn = dailyList.includes(d.id);
    const bountifulBtns = isBountiful
      ? `<div class="delves-row-btns delve-card-actions">
      <button type="button" class="delves-bountiful-daily-btn${dailyOn ? ' is-done' : ''}" onclick="event.stopPropagation();toggleBountifulDailyKey('${d.id}')" title="${ui.bountiful_daily_title.replace(/"/g, '&quot;')}">${dailyOn ? '✓ ' : ''}${ui.bountiful_daily_btn}</button>
      <button type="button" class="delves-bountiful-vault-btn${weeklyChecked ? ' is-done' : ''}" onclick="event.stopPropagation();toggleBountifulDelveForWeekly('${d.id}')" title="${ui.bountiful_vault_title.replace(/"/g, '&quot;')}">${weeklyChecked ? '✓ ' : ''}${ui.bountiful_vault_btn}</button>
    </div>`
      : '';
    const wayEsc = d.way ? escapeDataWayAttr(d.way) : '';
    const wayBtn = d.way
      ? `<button type="button" class="delves-way-copy-btn" onclick="event.stopPropagation();copyDelvesWay(this.getAttribute('data-way'))" data-way="${wayEsc}" title="${ui.copy_way}">📋 ${ui.copy_way}</button>`
      : '';
    const cardClasses = ['delves-vault-card'];
    if (isBountiful) cardClasses.push('delves-vault-card--bountiful');
    if (isSpotlight) cardClasses.push('delves-vault-card--spotlight');
    html += `<div class="${cardClasses.join(' ')}" onclick="openDelveDetail('${d.id}')" role="button" tabindex="0" ${isSpotlight ? 'aria-label="' + escapeTitleAttr(d.name + ' — ' + (ui.delves_spotlight_badge || 'Spotlight')) + '"' : ''}>
      <div class="delves-vault-card-bg" aria-hidden="true"></div>
      <div class="delves-vault-card-inner">
        <div class="delves-vault-card-head">
          ${chest}
          ${isSpotlight ? `<span class="delves-spotlight-pill">${ui.delves_spotlight_badge || 'Spotlight'}</span>` : ''}
          ${isBountiful ? `<span class="delves-bountiful-pill">✨ ${ui.delves_bountiful_badge}</span>` : ''}
        </div>
        <h4 class="delves-vault-name">${d.name}</h4>
        <p class="delves-vault-zone">${d.zoneName}</p>
        <div class="delves-vault-badges">
          <span class="delves-vault-badge delves-vault-badge-tier">${tierPeakLabel}</span>
          <span class="delves-vault-badge delves-vault-badge-reward">${rewardPeakLabel}</span>
        </div>
        <p class="delves-vault-subband">${ilvlBand}</p>
        ${wayBtn}
        ${bountifulBtns}
      </div>
    </div>`;
  });
  html += `</div></div>`;

  // Key Info — Wowhead kan op mobiel traag uitblijven; 🔑-fallback voorkomt een leeg blauw vlak
  html += `<div class="delves-key-info">
    <a href="https://www.wowhead.com/item=254269" class="wh-link delves-key-info-icon" data-wh-rename="false" target="_blank" rel="noopener noreferrer" title="Restored Coffer Key"><span class="delves-key-info-fallback" aria-hidden="true">🔑</span></a>
    <div class="delves-key-info-content">
      <strong>${ui.key_info_title}:</strong> ${keyInfo.replace(/Bountiful Coffer/g, '<a href="https://www.wowhead.com/item=254250" class="wh-link" data-wh-rename="false" target="_blank">Bountiful Coffer</a>')}
    </div>
  </div>`;

  // Loot Tabel — zoals screenshot (donker, gold borders, icons)
  html += `<div class="delves-loot-section">
    <h3 class="delves-section-title">${ui.loot_title}</h3>
    <p class="delves-section-sub">${ui.loot_sub}</p>
    <p class="delves-loot-farm-caption">${ui.loot_farm_caption || ''}</p>
    <p class="delves-loot-gv-hero-note">${ui.loot_gv_hero_note || ''}</p>
    <div class="delves-loot-table-wrap delves-loot-table-wrap--glass">
      <table class="delves-loot-table delves-loot-table--glass">
        <thead>
          <tr>
            <th>${ui.tier}</th>
            <th><a href="https://www.wowhead.com/item=254250" class="wh-link delves-icon-link" data-wh-rename="false" target="_blank">Bountiful Coffer</a></th>
            <th><a href="https://www.wowhead.com/item=265714" class="wh-link delves-icon-link" data-wh-rename="false" target="_blank">Trovehunter's Bounty</a></th>
            <th><a href="https://www.wowhead.com/object=381035" class="wh-link delves-icon-link" data-wh-rename="false" target="_blank">Great Vault</a></th>
          </tr>
        </thead>
        <tbody>`;
  const farmTier = 8;
  lootTable.forEach(row => {
    const bVal = row.bountiful;
    const tVal = row.trovehunter === '—' ? '—' : row.trovehunter;
    const gVal = row.greatVault;
    const trClass = Number(row.tier) === farmTier ? 'delves-loot-row--farm-tier' : '';
    html += `<tr class="${trClass}">
      <td>${row.tier}</td>
      <td>${bVal}</td>
      <td>${tVal}</td>
      <td>${gVal}</td>
    </tr>`;
  });
  html += `</tbody></table></div></div>`;

  const contentEl = document.getElementById('delves-content');
  if (contentEl) {
    contentEl.innerHTML = html;
    if (typeof $WowheadPower !== 'undefined') { ($WowheadPower.refreshLinks || $WowheadPower.refresh)(); }
    startDelveDailyCountdown();
    updateHeaderSyncBadge();
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
  const roleEase = d.roleEase && (d.roleEase[lang] || d.roleEase.en);
  document.getElementById('delve-detail-content').innerHTML = `
    <ul class="delve-detail-bullets">
      <li><strong>${ui.detail_gimmick}:</strong> ${det.gimmick}</li>
      <li><strong>${ui.detail_danger}:</strong> ${det.danger}</li>
      <li><strong>${ui.detail_tip}:</strong> ${det.tip}</li>
    </ul>
    ${roleEase ? `<p class="delve-role-ease"><strong>${ui.role_ease_label}</strong> ${roleEase}</p>` : ''}
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
  const toast = document.getElementById('toast-notification');
  const toastOk = () => {
    const msg = (lang === 'en' ? 'Copied!' : 'Gekopieerd!');
    if (toast) { toast.textContent = msg; toast.style.opacity = '1'; setTimeout(() => { toast.style.opacity = '0'; }, 1500); }
  };
  const toastFail = () => {
    const msg = (lang === 'en' ? 'Copy failed — select and copy manually' : 'Kopiëren mislukt — kopieer handmatig');
    if (toast) { toast.textContent = msg; toast.style.opacity = '1'; setTimeout(() => { toast.style.opacity = '0'; }, 2200); }
  };
  if (typeof copyWayTextToClipboard === 'function') {
    copyWayTextToClipboard(String(way), toastOk, toastFail);
  } else if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(String(way)).then(toastOk).catch(toastFail);
  } else {
    toastFail();
  }
}

/** Affixes are shown on each M+ dungeon Overview; standalone tab removed. */
function buildAffixScreen() {}

// ═══════════════════════════════════════════════════════════════
// GLOSSARY + TOOLTIPS
// ═══════════════════════════════════════════════════════════════
function escapeTitleAttr(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/'/g, '&#39;');
}

/** Sorteer zinnen voor woordenlijst-wrap: langste eerst, overlap voorkomen (geen nested title-matches). */
function buildSortedGlossaryWrapPhrases() {
  const l = lang === 'en' ? 'en' : 'nl';
  const phraseMap = new Map();
  const add = (phrase, idx) => {
    const p = String(phrase).trim();
    if (p.length < 2) return;
    const item = GLOSSARY[idx];
    if (!item) return;
    const title = item.def[l] || item.def.nl || '';
    const low = p.toLowerCase();
    const prev = phraseMap.get(low);
    if (!prev || p.length > prev.phrase.length) phraseMap.set(low, { phrase: p, title });
  };
  GLOSSARY.forEach((item, idx) => {
    add(item.term.nl, idx);
    add(item.term.en, idx);
  });
  Object.keys(TOOLTIP_MAP).forEach(k => add(k, TOOLTIP_MAP[k]));
  return [...phraseMap.values()].sort((a, b) => b.phrase.length - a.phrase.length);
}

/** Plain text only — markeert termen met <span class="glossary-term" title="…"> */
function wrapGlossaryTermsPlainSegment(text) {
  if (typeof GLOSSARY === 'undefined' || !text) return text;
  const sorted = buildSortedGlossaryWrapPhrases();
  const n = text.length;
  const covered = new Array(n).fill(false);
  const reps = [];
  for (const { phrase, title } of sorted) {
    const esc = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp('(?<![\\w-])(' + esc + ')(?![\\w-])', 'gi');
    let m;
    while ((m = re.exec(text)) !== null) {
      const start = m.index;
      const end = start + m[0].length;
      let ok = true;
      for (let i = start; i < end; i++) if (covered[i]) { ok = false; break; }
      if (!ok) continue;
      for (let i = start; i < end; i++) covered[i] = true;
      reps.push({ start, end, title });
    }
  }
  reps.sort((a, b) => b.start - a.start);
  let out = text;
  for (const r of reps) {
    const slice = text.slice(r.start, r.end);
    out = out.slice(0, r.start) + `<span class="glossary-term" title="${escapeTitleAttr(r.title)}">${slice}</span>` + out.slice(r.end);
  }
  return out;
}

/** Laat HTML-tags ongemoeid (bijv. Wowhead-links); verwerkt alleen tekst tussen tags. */
function wrapGlossaryTermsInText(text) {
  if (!text || typeof text !== 'string') return text;
  const parts = text.split(/(<[^>]+>)/g);
  return parts.map(part => (part.startsWith('<') ? part : wrapGlossaryTermsPlainSegment(part))).join('');
}

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
  const intro = u.glossary_intro ? `<div class="glossary-intro">${u.glossary_intro}</div>` : '';
  const row = (item, i) => {
    const term = item.term[lang] || item.term.nl;
    const def = item.def[lang] || item.def.nl;
    return `<div class="glossary-item" id="gitem-${i}">
        <div class="glossary-item-header" onclick="toggleGlossaryItem(${i})">
          <span class="glossary-entry-name">${term}</span>
          <span class="glossary-arrow">▶</span>
        </div>
        <div class="glossary-def">${def}</div>
      </div>`;
  };
  const pairs = GLOSSARY.map((item, i) => ({ item, i }));
  const general = pairs.filter(x => x.item.category !== 'tank');
  const tank = pairs.filter(x => x.item.category === 'tank');
  const sec = (title, list) =>
    list.length ? `<h3 class="glossary-section-title">${title}</h3>${list.map(({ item, i }) => row(item, i)).join('')}` : '';
  el.innerHTML =
    intro +
    sec(u.glossary_section_general || '📖 Algemene termen', general) +
    sec(u.glossary_section_tank || '🛡️ Tank Termen', tank);
}

function buildTravelScreen() {
  const host = document.getElementById('travel-content');
  if (!host) return;
  const u = UI[lang] || UI.nl;
  const wui = (typeof WEEKLY_UI !== 'undefined' && WEEKLY_UI) ? (WEEKLY_UI[lang] || WEEKLY_UI.nl) : { copy_tip: 'Click to copy' };
  const tipRaw = wui.copy_tip || '';
  const tip = typeof escapeHtmlText === 'function' ? escapeHtmlText(tipRaw) : tipRaw.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const copyCta = typeof escapeHtmlText === 'function' ? escapeHtmlText(u.travel_copy_way || '📋 Copy /way') : (u.travel_copy_way || '');
  const noWay = typeof escapeHtmlText === 'function' ? escapeHtmlText(u.travel_no_way || '') : (u.travel_no_way || '');
  const escWayAttr = typeof escapeDataWayAttr === 'function' ? escapeDataWayAttr : s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const escHtml = typeof escapeHtmlText === 'function' ? escapeHtmlText : s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const hasVault =
    typeof TRAVEL_GUIDE_VAULT_TOP !== 'undefined' &&
    TRAVEL_GUIDE_VAULT_TOP &&
    (TRAVEL_GUIDE_VAULT_TOP.way || TRAVEL_GUIDE_VAULT_TOP.hordeWay);
  const hasPortals = typeof PORTAL_DATA !== 'undefined' && PORTAL_DATA.length;

  if (!hasVault && !hasPortals) {
    host.innerHTML = `<p class="travel-no-way">${lang === 'en' ? 'Portal data not loaded.' : 'Portaalgegevens niet geladen.'}</p>`;
    return;
  }

  let vaultHtml = '';
  if (hasVault) {
    const v = TRAVEL_GUIDE_VAULT_TOP;
    const vTitle = escHtml(v.title[lang] || v.title.en || 'The Vault');
    const vDesc = escHtml(v.description[lang] || v.description.en || '');
    const lblNeutral = escHtml(u.travel_vault_way_label || u.travel_hub_coords || 'TomTom');
    const lblHorde = escHtml(u.travel_vault_horde_way_label || 'The Vault (Horde) — TomTom');
    const rowWay = (label, wayStr) => {
      const w = String(wayStr);
      if (!w) return '';
      return `<div class="travel-hub-way-row">
        <span class="travel-hub-way-label">${label}</span>
        <code class="travel-hub-way-code">${escHtml(w)}</code>
        <button type="button" class="portal-way-copy-btn" onclick="copyWay(this)" data-way="${escWayAttr(w)}" title="${tip}">${copyCta}</button>
      </div>`;
    };
    const rowsWay = [rowWay(lblNeutral, v.way), rowWay(lblHorde, v.hordeWay)].filter(Boolean).join('');
    vaultHtml = `<article class="travel-hub-card travel-vault-highlight" aria-label="${vTitle}">
      <div class="travel-hub-head"><div class="travel-hub-name">${vTitle}</div></div>
      ${rowsWay}
      <div class="travel-portal-row travel-vault-desc-only"><div class="travel-portal-desc">${vDesc}</div></div>
    </article>`;
  }

  const portalDesc = p => {
    const d = p.description;
    if (!d) return '';
    const raw = d[lang] || d.en || d.nl || '';
    return escHtml(raw);
  };

  const blocks = hasPortals ? PORTAL_DATA.map(hub => {
    const hubNamePlain = hub.hubName || '';
    const hubName = escHtml(hubNamePlain);
    const hubWay = hub.hubWaypoint || '';
    const hubRow = hubWay
      ? `<div class="travel-hub-way-row">
           <span class="travel-hub-way-label">${escHtml(u.travel_hub_coords || '')}</span>
           <code class="travel-hub-way-code">${escHtml(hubWay)}</code>
           <button type="button" class="portal-way-copy-btn" onclick="copyWay(this)" data-way="${escWayAttr(hubWay)}" title="${tip}">${copyCta}</button>
         </div>`
      : '';
    const rows = (hub.portals || []).map(p => {
      const toPlain = p.to || '';
      const toName = escHtml(toPlain);
      const way = p.way || '';
      const copyBlock = way
        ? `<button type="button" class="portal-way-copy-btn" onclick="copyWay(this)" data-way="${escWayAttr(way)}" title="${tip}">${copyCta}</button><div class="portal-way-meta">${escHtml(way)}</div>`
        : `<p class="travel-no-way">${noWay}</p>`;
      return `<div class="travel-portal-row">
        <div class="travel-from-to">
          <div><span class="travel-lbl">${escHtml(u.travel_from || 'From')}</span> <span class="travel-loc-en">${hubName}</span></div>
          <div><span class="travel-lbl">${escHtml(u.travel_to || 'To')}</span> <span class="travel-loc-en">${toName}</span></div>
        </div>
        <div class="travel-portal-desc">${portalDesc(p)}</div>
        ${copyBlock}
      </div>`;
    }).join('');
    return `<article class="travel-hub-card">
      <div class="travel-hub-head"><div class="travel-hub-name">${hubName}</div></div>
      ${hubRow}
      ${rows}
    </article>`;
  }).join('') : '';
  host.innerHTML = vaultHtml + blocks;
}

function buildAddonsScreen() {
  const host = document.getElementById('addons-content');
  if (!host) return;
  const u = UI[lang] || UI.nl;
  const escAttr =
    typeof escapeDataWayAttr === 'function'
      ? escapeDataWayAttr
      : s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const escText =
    typeof escapeHtmlText === 'function'
      ? escapeHtmlText
      : s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const loc = o => (o && (o[lang] || o.en || o.nl)) || '';
  const wuiWeekly =
    typeof WEEKLY_UI !== 'undefined' && WEEKLY_UI ? WEEKLY_UI[lang] || WEEKLY_UI.nl : { copy_tip: lang === 'en' ? 'Click to copy' : 'Klik om te kopiëren' };
  const copyTipEsc = escText(wuiWeekly.copy_tip || (lang === 'en' ? 'Click to copy' : 'Klik om te kopiëren'));

  const ht = document.getElementById('addons-hero-title');
  const hs = document.getElementById('addons-hero-sub');
  if (ht && u.addons_hero_title) ht.textContent = u.addons_hero_title;
  if (hs && u.addons_hero_sub) hs.textContent = u.addons_hero_sub;

  if (typeof ADDONS_DATA === 'undefined' || !ADDONS_DATA.length) {
    host.innerHTML = `<p class="addons-empty">${lang === 'en' ? 'No addon data loaded.' : 'Addon-gegevens niet geladen.'}</p>`;
    return;
  }

  const linkAnchor = (href, cls, label) =>
    `<a class="${cls}" href="${escAttr(href)}" target="_blank" rel="noopener noreferrer">${escText(label)}</a>`;

  host.innerHTML = ADDONS_DATA.map(addon => {
    const aid = String(addon.id || 'addon').replace(/[^a-z0-9_-]/gi, '');
    const title = escText(addon.name || '');
    const tag = escText(loc(addon.tagline));
    const body = escText(loc(addon.body));
    const vidTitle = escText(loc(addon.video && addon.video.title));
    const vidUrl = (addon.video && addon.video.url) || '';
    const imgAlt = escText(loc(addon.priorityImageAlt));
    const imgSrc = escAttr(addon.priorityImage || '');

    const cf = (addon.links || []).find(l => l.brand === 'curseforge');
    const wg = (addon.links || []).find(l => l.brand === 'wago');
    const actions = [
      cf ? linkAnchor(cf.url, 'addon-link-btn addon-link-cf', u.addons_link_cf || 'CurseForge') : '',
      wg ? linkAnchor(wg.url, 'addon-link-btn addon-link-wago', u.addons_link_wago || 'Wago.io') : '',
    ]
      .filter(Boolean)
      .join('');

    const videoBlock = vidUrl
      ? `<div class="addon-video-wrap"><a class="addon-link-btn addon-link-video" href="${escAttr(
          vidUrl
        )}" target="_blank" rel="noopener noreferrer"><span class="addon-video-title">${vidTitle}</span><span class="addon-video-cta">${escText(u.addons_watch_video)}</span></a></div>`
      : '';

    const hasColorLegend = Array.isArray(addon.colorLegend) && addon.colorLegend.length > 0;
    const legendItemsLegacy = (addon.legend || [])
      .map(row => {
        const hex = String(row.hex || '#64748b').replace(/[^#0-9A-Fa-f]/g, '') || '#64748b';
        const txt = escText(loc({ nl: row.nl, en: row.en }));
        return `<li class="addon-legend-item"><span class="addon-legend-swatch" style="background:${escAttr(hex)}"></span><span class="addon-legend-text">${txt}</span></li>`;
      })
      .join('');

    const colorLegendCards = hasColorLegend
      ? addon.colorLegend
          .map(row => {
            const color = String(row.color || '#888888').replace(/[^#0-9A-Fa-f]/g, '') || '#888888';
            const label = escText(loc({ nl: row.label_nl, en: row.label_en }));
            const desc = escText(loc({ nl: row.desc_nl, en: row.desc_en }));
            return `<div class="addon-color-legend-card" role="listitem"><span class="addon-color-legend-swatch" style="background:${escAttr(
              color
            )}" aria-hidden="true"></span><div class="addon-color-legend-copy"><div class="addon-color-legend-label">${label}</div><p class="addon-color-legend-desc">${desc}</p></div></div>`;
          })
          .join('')
      : '';

    const legendBlock = hasColorLegend
      ? `<div class="addon-color-legend-grid" role="list">${colorLegendCards}</div>`
      : addon.legend && addon.legend.length
        ? `<ul class="addon-legend" role="list">${legendItemsLegacy}</ul>`
        : '';

    const hasImg = !!(addon.priorityImage && String(addon.priorityImage).trim());
    const showVisualSection = hasImg || !!legendBlock;
    const showVisualKicker = hasImg || !!legendBlock;
    const visualGuideTitle = escText(u.addons_visual_guide || u.addons_priority_colors);
    const visualGuideBlock = showVisualSection
      ? `<section class="addon-section addon-visual-guide" aria-labelledby="addon-visual-${escText(aid)}">
        <h3 class="addon-section-title" id="addon-visual-${escText(aid)}">${visualGuideTitle}</h3>
        ${
          hasImg
            ? `<figure class="addon-figure addon-figure-lead"><img class="addon-prio-img" src="${imgSrc}" alt="${imgAlt}" loading="lazy" decoding="async" /></figure>`
            : ''
        }
        ${showVisualKicker ? `<p class="addon-section-kicker">${escText(u.addons_quick_reference)}</p>` : ''}
        ${legendBlock}
      </section>`
      : '';

    const installItems = (addon.installSteps || [])
      .map(step => {
        const txt = escText(loc(step));
        const b = step && step.ctaBrand;
        let cta = '';
        if (b === 'curseforge' || b === 'wago') {
          const L = (addon.links || []).find(l => l.brand === b);
          if (L) {
            const lbl = b === 'curseforge' ? u.addons_link_cf || 'CurseForge' : u.addons_link_wago || 'Wago.io';
            const cls =
              b === 'curseforge'
                ? 'addon-link-btn addon-link-cf addon-install-cta-btn'
                : 'addon-link-btn addon-link-wago addon-install-cta-btn';
            cta = `<div class="addon-install-cta-wrap">${linkAnchor(L.url, cls, lbl)}</div>`;
          }
        }
        return `<li class="addon-install-li"><span class="addon-install-li-text">${txt}</span>${cta}</li>`;
      })
      .join('');

    const profileBlocks = (addon.profileImports || [])
      .map(p => {
        const wk = String(p.windowKey || '').replace(/[^a-zA-Z0-9_]/g, '');
        if (!wk) return '';
        const pid = escText(String(p.id || '').replace(/[^a-z0-9_-]/gi, ''));
        const ptitle = escText(loc(p.title));
        const phint = escText(loc(p.hint));
        const author = escText(p.author || '');
        const copyCta = escText(u.addons_copy_import || '📋 Copy');
        const byLbl = escText(u.addons_profile_by || 'By');
        return `<section class="addon-section addon-profile-import" aria-labelledby="addon-prof-${escText(aid)}-${pid}">
        <h3 class="addon-section-title" id="addon-prof-${escText(aid)}-${pid}">${ptitle}</h3>
        <p class="addon-profile-meta"><span class="addon-profile-by">${byLbl} <strong>${author}</strong></span>
        <span class="addon-profile-bytes mono">—</span></p>
        <p class="addon-section-kicker">${phint}</p>
        <div class="addon-profile-toolbar">
          <button type="button" class="portal-way-copy-btn addon-profile-copy-btn" onclick="copyProfileExport(this)" data-export-key="${escAttr(wk)}" title="${copyTipEsc}">${copyCta}</button>
        </div>
        <textarea class="addon-profile-textarea mono" readonly rows="8" spellcheck="false" data-export-ta="${escAttr(wk)}"></textarea>
      </section>`;
      })
      .filter(Boolean)
      .join('');

    return `<article class="addon-card" data-addon="${escText(aid)}">
      <header class="addon-card-head">
        <div class="addon-card-title-row">
          <span class="addon-card-icon" aria-hidden="true">🧩</span>
          <div class="addon-card-titles"><h2 class="addon-card-name">${title}</h2><p class="addon-card-tagline">${tag}</p></div>
        </div>
        <div class="addon-card-actions">${actions}</div>
      </header>
      <p class="addon-card-body">${body}</p>
      ${visualGuideBlock}
      ${videoBlock}
      <section class="addon-section" aria-labelledby="addon-inst-${escText(aid)}">
        <h3 class="addon-section-title" id="addon-inst-${escText(aid)}">${escText(u.addons_install_guide)}</h3>
        <ol class="addon-install-list">${installItems}</ol>
      </section>
      ${profileBlocks}
    </article>`;
  }).join('');

  host.querySelectorAll('.addon-profile-import').forEach(sec => {
    const ta = sec.querySelector('textarea[data-export-ta]');
    if (!ta) return;
    const k = ta.getAttribute('data-export-ta');
    if (!k || typeof window[k] !== 'string' || !window[k]) {
      ta.placeholder = lang === 'en' ? 'Profile data not loaded — refresh the page.' : 'Profiel niet geladen — ververs de pagina.';
      return;
    }
    ta.value = window[k];
    const meta = sec.querySelector('.addon-profile-bytes');
    if (meta) meta.textContent = `${window[k].length} · ${lang === 'en' ? 'characters' : 'tekens'}`;
  });
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
  'tankbuster':10,'tankbusters':10,'tank buster':10,'tank busters':10,
  'dispel':11,'dispellen':11,'dispels':11,
  'purge':12,'purgen':12,'purges':12,
  'bloodlust':13,'lust':13,'heroism':13,
  'burst':14,'burst-venster':14,
  'stack':15,'stacking':15,'spreiden':15,'spread':15,
  'snap-points':16,'snappoints':16,'snap points':16,'snap point':16,
  'percent / count':17,'percentage':17,'percent':17,'procent':17,'dungeon count':17,'trash count':17,
  'affix priority':18,'affix-prioriteit':18,'affixprioriteit':18
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
  const sel='.generic-tips li,.spec-tip,.tip-box';
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
  if (mode !== 'prey') stopPreyResetCountdown();
  document.body.className=document.body.className.replace(/\bmode-\S+/g,'').trim()+' mode-'+mode;
  document.body.classList.remove('detail-open','nav-menu-open');
  document.getElementById('mode-tab-home')?.classList.toggle('active',mode==='home');
  document.getElementById('mode-tab-dungeons')?.classList.toggle('active',mode==='dungeons');
  document.getElementById('mode-tab-professions')?.classList.toggle('active',mode==='professions');
  document.getElementById('mode-tab-weekly')?.classList.toggle('active',mode==='weekly');
  document.getElementById('mode-tab-specs')?.classList.toggle('active',mode==='specs');
  document.getElementById('mode-tab-raids')?.classList.toggle('active',mode==='raids');
  const delvesTab = document.getElementById('mode-tab-delves'); if(delvesTab) delvesTab.classList.toggle('active',mode==='delves');
  const preyTab = document.getElementById('mode-tab-prey'); if(preyTab) preyTab.classList.toggle('active',mode==='prey');
  const _gtab=document.getElementById('mode-tab-glossary');
  if(_gtab) _gtab.classList.toggle('active',mode==='glossary');
  const _trtab = document.getElementById('mode-tab-travel');
  if (_trtab) _trtab.classList.toggle('active', mode === 'travel');
  const _adtab = document.getElementById('mode-tab-addons');
  if (_adtab) _adtab.classList.toggle('active', mode === 'addons');
  updateSpecHeaderBtnVisibility();
  const backBtn = document.getElementById('back-btn');
  if (backBtn) backBtn.style.display = 'none';
  if(mode==='home'){
    updateLandingStrings();
  } else if(mode==='prey'){
    document.getElementById('home-screen').style.display = 'none'; document.getElementById('detail-screen').style.display = 'none'; void renderPreyGuide();
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
  } else if(mode==='travel'){
    buildTravelScreen();
  } else if(mode==='addons'){
    buildAddonsScreen();
  } else if(mode==='dungeons') {
    document.getElementById('home-screen').style.display = '';
    document.getElementById('detail-screen').style.display = '';
    renderHome();
  } else {
    if(currentDungeon)goHome();
  }
  
    ['home','dungeons','professions','weekly','raids','delves','glossary','specs','prey','travel','addons'].forEach(id=>{
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
  grid.innerHTML=sortedProfs.map(p=>{
    const accent = p.accent || '#c9a227';
    const compact = getProfCardCompactLine(p, ui);
    return `
    <div class="prof-card prof-card--immersive prof-card--${p.id}" onclick="showProf('${p.id}')" style="--prof-accent:${accent}">
      <div class="prof-card-bg" aria-hidden="true"></div>
      <div class="prof-card-glass" aria-hidden="true"></div>
      <div class="prof-card-inner">
        <div class="prof-card-icon">${p.icon}</div>
        <div class="prof-card-name">${pT(p.name)}</div>
        <div class="prof-card-cat">${cat[p.cat]||p.cat}</div>
        <div class="prof-card-compact mono">${compact}</div>
        <div class="prof-card-tier tier-${p.tier}">${p.tier}</div>
      </div>
    </div>`;
  }).join('');
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
      const guideTabLabels = { nl: '📖 Gids & KP', en: '📖 Guide & KP'};
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
  const tr = p.trainer;
  const trainerWayHtml = tr && tr.way
    ? `<div class="trainer-way" onclick="copyWay(this)" data-way="${escapeDataWayAttr(tr.way)}" title="${(typeof WEEKLY_UI !== 'undefined' && WEEKLY_UI[lang]) ? WEEKLY_UI[lang].copy_tip : 'Klik om te kopiëren'}">📋 ${escapeHtmlText(tr.way)}</div>`
    : '';
  document.getElementById('ptab-trainer').innerHTML=
    `<div class="pdet-section"><h3>${ui.trainer_head}</h3>
       ${tr ? `<div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:6px">${tr.name}</div>
       <div style="font-size:13px;color:var(--muted);line-height:1.7">${pT(tr.loc)}</div>
       ${trainerWayHtml}
       ${tr.note ? `<div class="trainer-note">${pT(tr.note)}</div>` : ''}` : '<p style="color:var(--muted);font-size:13px">—</p>'}
     </div>
     ${p.method_url||p.wowp_url?`<div class="prof-links"><span class="prof-source-label">${ui.source_label}</span>
       ${p.method_url?`<a class="prof-link-btn" href="${p.method_url}" target="_blank">${ui.method_btn}</a>`:''}
       ${p.wowp_url?`<a class="prof-link-btn" href="${p.wowp_url}" target="_blank">${ui.wowp_btn}</a>`:''}
       <a class="prof-link-btn" href="https://overgear.com/guides/wow/midnight-best-profession/" target="_blank">📊 Overgear Tier</a>
     </div>`:''}`;
  const specList = Array.isArray(p.specs) ? p.specs : [];
  document.getElementById('ptab-specs').innerHTML=
    `<div class="pdet-section"><h3>${ui.spec_head}</h3>
       ${specList.map(s=>`<div class="spec-block">
         <div class="spec-title">${pT(s.title)}</div>
         <div class="spec-desc">${pT(s.desc)}</div>
         ${s.points?`<div class="spec-points">${pT(s.points)}</div>`:''}
       </div>`).join('')}
     </div>`;
  const itemList = Array.isArray(p.items) ? p.items : [];
  document.getElementById('ptab-items').innerHTML=
    `<div class="pdet-section"><h3>${ui.item_head}</h3>
       <div class="item-grid">
         ${itemList.map(it=>`<div class="item-card">
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
      const trainTab = document.querySelector('.pdet-tab[onclick*="ptab-trainer"]');
      switchProfTab(trainTab, 'ptab-trainer');
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
    en: { trees:'🌳 Specialization Trees', builds:'Choose your playstyle:', skill:'skill', tip:'💡 Tip', no_kp:'No KP tree — recipes via trainer and the world.' }}[lang_] || { trees:'🌳 Specialisatiebomen', builds:'Kies je speelstijl:', skill:'skill', tip:'💡 Tip', no_kp:'Geen KP-boom.' };

  if (!data) {
    const kpHeaderEmpty = {
      nl: 'Deel 3: Kennispunten (KP) & Specialisaties',
      en: 'Part 3: Knowledge Points (KP) & Specs'}[lang_] || 'Deel 3: Kennispunten (KP)';
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
      en: 'Part 3: Knowledge Points (KP) & Specs'}[lang_] || 'Deel 3: Kennispunten (KP)';
    
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
            ${t.way ? `<span class="kp-way-code" onclick="copyWay(this)" data-way="${escapeDataWayAttr(t.way)}" title="${(typeof WEEKLY_UI !== 'undefined' && WEEKLY_UI[lang]) ? WEEKLY_UI[lang].copy_tip : 'Klik om te kopiëren'}">📋 ${escapeHtmlText(t.way)}</span>` : '<span class="kp-no-way">—</span>'}
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
      en: '💡 Tip: Add your characters with the + button to track which treasures you have already found per character!'}[lang] || '💡 Tip: Voeg je characters toe met de + knop om per character bij te houden welke schatten je al hebt gevonden!';

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
        <table class="kp-table kp-table--treasures">
          <colgroup>
            <col class="kp-col-check">
            <col class="kp-col-name">
            <col class="kp-col-zone">
            <col class="kp-col-way">
            <col class="kp-col-hint">
          </colgroup>
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
        <table class="kp-table kp-table--kp-rows">
          <colgroup>
            <col class="kp-col-kp-src">
            <col class="kp-col-kp-val">
            <col class="kp-col-kp-note">
          </colgroup>
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
        <table class="kp-table kp-table--kp-rows">
          <colgroup>
            <col class="kp-col-kp-src">
            <col class="kp-col-kp-val">
            <col class="kp-col-kp-note">
          </colgroup>
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
    en: 'Part 4: KP Treasures & Sources'}[lang] || 'Deel 4: KP Schatten & Bronnen';

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
    en: { max: "You can add up to 25 characters.", prompt: "Enter the name of your character:", exists: "This character already exists." }};
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
    en: { min: "You must keep at least one character.", confirm: "Are you sure you want to delete '{char}'?" }};
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
const PREY_UI = {
  nl: {
    title:'Prey System', gettingStarted:'Getting Started', weeklyChecklist:'Weekly Strategy', rewards:'Rewards', nightmareAffixes:'Nightmare Affixes', tooltipCopy:'Klik om te kopiëren',
    weeklyHunt1:'Weekly Hunt #1', weeklyHunt2:'Weekly Hunt #2', resetWeekly:'Reset weekly', targetsLabel:'Active Prey (today)', targetsHint:'12 contracts per EU day (reset 07:00 Europe/Berlin) — zelfde set voor iedereen. Gesorteerd op zone; tik voor details.', location:'Location', fullGuide:'Full Guide', lootTable:'Loot Table', craftingMaterials:'🛠️ Crafting materials',
    nextResetLabel:'Volgende reset', nextResetZone:'07:00 Europe/Berlin',
    preyTodayWowhead:'Active Prey-lijst uit Wowhead Today in WoW.',
    preyTodayJson:'EU-lijst geladen (prey-today.json, dagelijks bijgewerkt).',
    preyTodayJsonComputed:' Server-computed (zelfde seed als offline) — Wowhead heeft nog geen Prey-widget.',
    preyLiveResetHardNm:'Wowhead — Hard/Nightmare in je actieve set vandaag: {names}',
    preyTodayFallback:'prey-today.json niet geladen — berekende set in je browser.',
    summaryLabel:'Samenvatting', normal:'Normal', hard:'Hard', nightmare:'Nightmare', ilvl:'iLvl', difficulty:'Difficulty',
    spotlightTitle:'🎯 Target of the day', spotlightCta:'Open details', dangerMeter:'Danger meter (solo)', threatLabel:'Threat', killedLabel:'Killed this week',     targetsProgress:'Targets down', ilvlScale:'Prey iLvl',
    preyProgressIlvlLine: P => `Normal ${P.normal}+ · Hard ${P.hard}+ · Nightmare ${P.nightmare}+ · World Boss/apex ${P.worldBoss}`,
    copyWayCta:'Copy /way', wantedLabel:'WANTED',
    preyS1RewardsTitle:'Prey-beloningen — Seizoen 1 (mrt 2026)',
    preyS1ColDifficulty:'Moeilijkheid',
    preyS1ColLoot:'Contract loot',
    preyS1ColVault:'Great Vault',
    preyS1ColNotes:'Opmerking',
    preyFourPerWeekVaultTip:'Great Vault: tot 4 Prey-hunts per week tellen mee voor het World-vak — verdeel ze over de week om alle vier de slotten efficiënt te vullen.',
    lootFootnote: () => {
      const p = typeof PREY_ILVL !== 'undefined' ? PREY_ILVL : { normal: 220, hard: 233, nightmare: 246, worldBoss: 289 };
      return `Normal iLvl ${p.normal}, Hard (Heroic) ${p.hard}, Nightmare ${p.nightmare} (Icy Veins Prey table, Midnight S1). World Boss / apex (not a Hunt contract): ${p.worldBoss}.`;
    },
    roleTank:'🛡️ Tank', roleHeal:'💊 Healer', roleDps:'⚔️ DPS', roleTips:'Tactiek per rol',
    allPreyRosterTitle:'Alle bekende Prey-doelwitten',
    allPreyRosterHint:'EU: elke dag zijn 12 contracten actief uit de pool. «Actief» = vandaag in die set (zelfde voor iedereen; reset 07:00 Europe/Berlin). Tik op een naam voor details.',
    preyRosterColTarget:'Doelwit',
    preyRosterColZone:'Zone',
    preyRosterColStatus:'Vandaag actief',
    preyRosterColThreat:'Dreiging',
    preyStatusActiveShort:'Actief vandaag',
    preyStatusInactiveShort:'Niet in rotatie',
    preyStatusUnknown:'Onbekend',
  },
  en: {
    title:'The Prey System', gettingStarted:'Getting Started', weeklyChecklist:'Weekly Strategy', rewards:'Rewards', nightmareAffixes:'Nightmare Affixes', tooltipCopy:'Click to copy',
    weeklyHunt1:'Weekly Hunt #1', weeklyHunt2:'Weekly Hunt #2', resetWeekly:'Reset weekly', targetsLabel:'Active prey (today)', targetsHint:'12 contracts per EU day (reset 07:00 Europe/Berlin) — same set for everyone. Sorted by zone; tap for details.', location:'Location', fullGuide:'Full Guide', lootTable:'Loot Table', craftingMaterials:'🛠️ Crafting materials',
    nextResetLabel:'Next reset', nextResetZone:'07:00 Europe/Berlin',
    preyTodayWowhead:'Active prey list from Wowhead Today in WoW.',
    preyTodayJson:'Loaded EU list (prey-today.json, refreshed daily).',
    preyTodayJsonComputed:' Server-computed (same seed as offline) — no Wowhead Prey widget yet.',
    preyLiveResetHardNm:'Wowhead — Hard/Nightmare in today’s active set: {names}',
    preyTodayFallback:'Could not load prey-today.json — computed set in your browser.',
    summaryLabel:'Summary', normal:'Normal', hard:'Hard', nightmare:'Nightmare', ilvl:'iLvl', difficulty:'Difficulty',
    spotlightTitle:'🎯 Target of the day', spotlightCta:'Open details', dangerMeter:'Danger meter (solo)', threatLabel:'Threat', killedLabel:'Killed this week',     targetsProgress:'Targets down', ilvlScale:'Prey iLvl',
    preyProgressIlvlLine: P => `Normal ${P.normal}+ · Hard ${P.hard}+ · Nightmare ${P.nightmare}+ · world boss/apex ${P.worldBoss}`,
    copyWayCta:'Copy /way', wantedLabel:'WANTED',
    preyS1RewardsTitle:'Prey rewards — Season 1 (Mar 2026)',
    preyS1ColDifficulty:'Difficulty',
    preyS1ColLoot:'Contract loot',
    preyS1ColVault:'Great Vault',
    preyS1ColNotes:'Notes',
    preyFourPerWeekVaultTip:'Great Vault: up to 4 Prey hunts per week count toward the World row — spread them across the week to fill all four slots efficiently.',
    lootFootnote: () => {
      const p = typeof PREY_ILVL !== 'undefined' ? PREY_ILVL : { normal: 220, hard: 233, nightmare: 246, worldBoss: 289 };
      return `Normal iLvl ${p.normal}, Hard (Heroic) ${p.hard}, Nightmare ${p.nightmare} (Icy Veins Prey table, Midnight S1). World boss / apex (not a Hunt contract): ${p.worldBoss}.`;
    },
    roleTank:'🛡️ Tank', roleHeal:'💊 Healer', roleDps:'⚔️ DPS', roleTips:'Role tactics',
    allPreyRosterTitle:'All known Prey targets',
    allPreyRosterHint:'EU: 12 contracts from the pool are active each day. “Active today” means in today’s set (same for everyone; reset 07:00 Europe/Berlin). Tap a name for details.',
    preyRosterColTarget:'Target',
    preyRosterColZone:'Zone',
    preyRosterColStatus:'Active today',
    preyRosterColThreat:'Threat',
    preyStatusActiveShort:'Active today',
    preyStatusInactiveShort:'Not in rotation',
    preyStatusUnknown:'Unknown',
  }
};

const MIDNIGHT_PREY_STORAGE_KEY = 'midnight_prey_progress';
const ACTIVE_PREY_TODAY_COUNT = 12;
let preyTodayFetchPromise = null;
let preyTodayFetchResult = { ok: false, fromJson: false, ids: [], source: '', error: null };

let preyActivitiesJsonPromise = null;

function resetPreyTodayFetchCache() {
  preyTodayFetchPromise = null;
  preyTodayFetchResult = { ok: false, fromJson: false, ids: [], source: '', error: null };
}

/** Season 1 Prey reward rows from data/activities/prey.json (bilingual). */
async function fetchPreyActivitiesJson() {
  if (preyActivitiesJsonPromise) return preyActivitiesJsonPromise;
  preyActivitiesJsonPromise = (async () => {
    try {
      const res = await fetch('data/activities/prey.json', { cache: 'no-store' });
      if (!res.ok) throw new Error(String(res.status));
      const data = await res.json();
      return Array.isArray(data) ? data : null;
    } catch (e) {
      return null;
    }
  })();
  return preyActivitiesJsonPromise;
}

function buildPreySeasonOneRewardsTableHtml(rows, l, ui) {
  if (!Array.isArray(rows) || !rows.length) return '';
  const esc = typeof escapeHtmlText === 'function' ? escapeHtmlText : s => String(s == null ? '' : s).replace(/</g, '&lt;');
  const th = t => `<th scope="col">${esc(t)}</th>`;
  const head = `<thead><tr>${th(ui.preyS1ColDifficulty)}${th(ui.preyS1ColLoot)}${th(ui.preyS1ColVault)}${th(ui.preyS1ColNotes)}</tr></thead>`;
  const body = rows.map(row => {
    const diff = row.difficulty && (row.difficulty[l] || row.difficulty.en);
    const notes = row.notes && (row.notes[l] || row.notes.en);
    const loot = row.loot_ilvl != null ? String(row.loot_ilvl) : '—';
    const vault = row.vault_ilvl != null ? String(row.vault_ilvl) : '—';
    return `<tr><td>${esc(diff || '—')}</td><td>${esc(loot)}</td><td>${esc(vault)}</td><td>${esc(notes || '')}</td></tr>`;
  }).join('');
  return `<div class="prey-s1-rewards-block prey-card" style="margin-bottom:16px">
    <h4 class="prey-detail-subtitle">${esc(ui.preyS1RewardsTitle)}</h4>
    <div class="prey-targets-table-wrap">
      <table class="prey-detail-loot-table prey-s1-rewards-table">${head}<tbody>${body}</tbody></table>
    </div>
  </div>`;
}

function validatePreyTodayTargets(arr) {
  const tg = typeof PREY_TARGETS !== 'undefined' ? PREY_TARGETS : [];
  const valid = new Set(tg.map(t => t && t.id).filter(Boolean));
  if (!Array.isArray(arr) || arr.length !== ACTIVE_PREY_TODAY_COUNT) return null;
  const seen = new Set();
  const out = [];
  for (const id of arr) {
    if (typeof id !== 'string' || !valid.has(id) || seen.has(id)) return null;
    seen.add(id);
    out.push(id);
  }
  return out;
}

async function fetchPreyToday() {
  if (preyTodayFetchPromise) return preyTodayFetchPromise;
  preyTodayFetchPromise = (async () => {
    try {
      const res = await fetch('data/prey-today.json', { cache: 'no-store' });
      if (!res.ok) throw new Error(String(res.status));
      const raw = await res.json();
      const ids = validatePreyTodayTargets(raw.targets);
      if (!ids) throw new Error('invalid prey-today targets');
      preyTodayFetchResult = {
        ok: true,
        fromJson: true,
        ids,
        source: typeof raw.source === 'string' ? raw.source : 'json',
        error: null,
      };
    } catch (e) {
      const fb = typeof getActivePreyTargetIdsForToday === 'function' ? getActivePreyTargetIdsForToday() : [];
      preyTodayFetchResult = {
        ok: fb.length === ACTIVE_PREY_TODAY_COUNT,
        fromJson: false,
        ids: fb,
        source: 'computed',
        error: e && e.message ? e.message : String(e),
      };
    }
    return preyTodayFetchResult;
  })();
  return preyTodayFetchPromise;
}

/** When in-game EU board ≠ computed seed: force these pool ids into today's active 12 (see data/prey-day-ensure.js). */
function applyPreyDayEnsureIds(ids) {
  if (!ids || ids.length !== ACTIVE_PREY_TODAY_COUNT) return ids;
  const dayKey = typeof getPreyRotationDayKey === 'function' ? getPreyRotationDayKey() : '';
  const rawMap = typeof PREY_DAY_ENSURE_IDS !== 'undefined' ? PREY_DAY_ENSURE_IDS : null;
  const ensure = rawMap && dayKey ? rawMap[dayKey] : null;
  if (!ensure || !Array.isArray(ensure) || ensure.length === 0) return ids;
  const pool = (typeof PREY_TARGETS !== 'undefined' ? PREY_TARGETS : []).map(t => t && t.id).filter(Boolean);
  const poolSet = new Set(pool);
  const want = ensure.filter(id => poolSet.has(id));
  if (!want.length) return ids;
  const wantSet = new Set(want);
  const out = ids.slice();
  const set = new Set(out);
  for (const id of want) {
    if (set.has(id)) continue;
    const dropIdx = out.findIndex(x => !wantSet.has(x));
    if (dropIdx < 0) continue;
    set.delete(out[dropIdx]);
    out[dropIdx] = id;
    set.add(id);
  }
  return out;
}

function getFinalActivePreyTargetIds() {
  let ids;
  if (preyTodayFetchResult.ids && preyTodayFetchResult.ids.length === ACTIVE_PREY_TODAY_COUNT) {
    ids = preyTodayFetchResult.ids.slice();
  } else {
    ids = typeof getActivePreyTargetIdsForToday === 'function' ? getActivePreyTargetIdsForToday() : [];
  }
  return applyPreyDayEnsureIds(ids);
}

function getFinalActivePreyTargets() {
  const ids = getFinalActivePreyTargetIds();
  let arr = typeof getActivePreyTargetsOrdered === 'function' ? getActivePreyTargetsOrdered(ids) : [];
  if (arr.length !== ids.length) return [];
  if (preyTodayFetchResult.fromJson) return arr;
  return arr.slice().sort((a, b) => (a.zoneOrder || 0) - (b.zoneOrder || 0) || (a.id || '').localeCompare(b.id || ''));
}

function normalizeLiveResetPreyName(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, '')
    .trim();
}

/** Match `live_reset_data.json` daily_prey strings to targets in today’s active 12. */
function matchLiveResetPreyLabels(dailyPreyNames) {
  const tg = typeof getFinalActivePreyTargets === 'function' ? getFinalActivePreyTargets() : [];
  if (!Array.isArray(dailyPreyNames) || !dailyPreyNames.length || !tg.length) return [];
  const out = [];
  const seen = new Set();
  const l = typeof lang !== 'undefined' && lang === 'en' ? 'en' : 'nl';
  for (const raw of dailyPreyNames) {
    const n = normalizeLiveResetPreyName(raw);
    if (n.length < 3) continue;
    for (const t of tg) {
      const en = normalizeLiveResetPreyName((t.name && t.name.en) || '');
      const nl = normalizeLiveResetPreyName((t.name && t.name.nl) || '');
      if (
        (en && (en.includes(n) || n.includes(en))) ||
        (nl && (nl.includes(n) || n.includes(nl)))
      ) {
        if (!seen.has(t.id)) {
          seen.add(t.id);
          out.push((t.name && (t.name[l] || t.name.en)) || t.id);
        }
        break;
      }
    }
  }
  return out;
}

let _preyResetCountdownTimer = null;

function stopPreyResetCountdown() {
  if (_preyResetCountdownTimer) {
    clearInterval(_preyResetCountdownTimer);
    _preyResetCountdownTimer = null;
  }
}

function updatePreyResetCountdownEl() {
  const el = document.getElementById('prey-reset-countdown');
  if (!el) return;
  if (!document.body.classList.contains('mode-prey')) {
    el.textContent = '';
    return;
  }
  const u = typeof PREY_UI !== 'undefined' ? (PREY_UI[typeof lang !== 'undefined' ? lang : 'nl'] || PREY_UI.nl) : {};
  const ms = typeof getMsUntilNextPreyResetCET === 'function' ? getMsUntilNextPreyResetCET() : 0;
  const sec = Math.max(0, Math.ceil(ms / 1000));
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  const lbl = u.nextResetLabel || 'Next reset';
  const zn = u.nextResetZone || '07:00 Europe/Berlin';
  const hs = (typeof lang !== 'undefined' && lang === 'en') ? 'h' : 'u';
  el.textContent = `${lbl} (${zn}): ${h}${hs} ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
}

function schedulePreyResetCountdown() {
  stopPreyResetCountdown();
  updatePreyResetCountdownEl();
  _preyResetCountdownTimer = setInterval(updatePreyResetCountdownEl, 1000);
}

function getPreyWeeklyKey() {
  return 'prey_weekly_' + (typeof getWeeklyKey === 'function' ? getWeeklyKey() : 'default');
}

/** One-time: move `killed` from legacy prey_weekly_* into midnight_prey_progress. */
function migratePreyKilledFromLegacyOnce() {
  if (localStorage.getItem(MIDNIGHT_PREY_STORAGE_KEY)) return;
  const wk = typeof getWeeklyKey === 'function' ? getWeeklyKey() : 'default';
  try {
    const raw = localStorage.getItem(getPreyWeeklyKey());
    if (!raw) return;
    const old = JSON.parse(raw);
    if (old.killed && typeof old.killed === 'object' && Object.keys(old.killed).length) {
      localStorage.setItem(MIDNIGHT_PREY_STORAGE_KEY, JSON.stringify({ week: wk, killed: old.killed }));
      delete old.killed;
      localStorage.setItem(getPreyWeeklyKey(), JSON.stringify(old));
    }
  } catch (e) {}
}

function getPreyKilledMapRaw() {
  migratePreyKilledFromLegacyOnce();
  const wk = typeof getWeeklyKey === 'function' ? getWeeklyKey() : 'default';
  try {
    const o = JSON.parse(localStorage.getItem(MIDNIGHT_PREY_STORAGE_KEY) || '{}');
    if (o.week !== wk) return {};
    return (o.killed && typeof o.killed === 'object') ? o.killed : {};
  } catch (e) { return {}; }
}

function setPreyKilledMap(map) {
  const wk = typeof getWeeklyKey === 'function' ? getWeeklyKey() : 'default';
  try {
    localStorage.setItem(MIDNIGHT_PREY_STORAGE_KEY, JSON.stringify({ week: wk, killed: map }));
  } catch (e) {}
}

function preyWeeklyLoadState() {
  try {
    const o = JSON.parse(localStorage.getItem(getPreyWeeklyKey()) || '{}');
    return { hunt1: !!o.hunt1, hunt2: !!o.hunt2 };
  } catch (e) { return { hunt1: false, hunt2: false }; }
}

function preyWeeklySaveState(state) {
  try {
    localStorage.setItem(getPreyWeeklyKey(), JSON.stringify({
      hunt1: !!state.hunt1,
      hunt2: !!state.hunt2
    }));
  } catch (e) {}
}

function preyWeeklyToggle(id) {
  const state = preyWeeklyLoadState();
  state[id] = !state[id];
  preyWeeklySaveState(state);
  void renderPreyGuide();
  if (typeof buildWeeklyList === 'function') buildWeeklyList();
}

function preyWeeklyReset() {
  try { localStorage.removeItem(getPreyWeeklyKey()); } catch (e) {}
  try { localStorage.removeItem(MIDNIGHT_PREY_STORAGE_KEY); } catch (e) {}
  void renderPreyGuide();
  if (typeof buildWeeklyList === 'function') buildWeeklyList();
}

function getPreyWeeklyKillProgress() {
  const targets = getFinalActivePreyTargets();
  const total = targets.length;
  const killed = getPreyKilledMapRaw();
  const done = targets.filter(t => killed[t.id]).length;
  return { done, total };
}

/** Single weekly bar slot: 1/1 only when all prey targets killed (not 12 granular slots). */
function getPreyWeeklyBarSlot() {
  const p = getPreyWeeklyKillProgress();
  if (!p.total) return { total: 0, done: 0 };
  return { total: 1, done: (p.done >= p.total) ? 1 : 0 };
}

function getPreySpotlightTarget() {
  const targets = getFinalActivePreyTargets();
  if (!targets.length) return null;
  const key = typeof getPreyRotationDayKey === 'function' ? getPreyRotationDayKey() : (typeof getWeeklyKey === 'function' ? getWeeklyKey() : '0');
  let h = 0;
  for (let i = 0; i < key.length; i++) h = Math.imul(31, h) + key.charCodeAt(i);
  const idx = Math.abs(h) % targets.length;
  return targets[idx];
}

function preySkullsStringHtml(dr) {
  const n = Math.min(5, Math.max(1, Number(dr) || 3));
  const highDanger = n >= 4;
  let s = '';
  for (let i = 1; i <= 5; i++) {
    const on = i <= n;
    const tier = on ? (highDanger ? ' prey-skull--high' : ' prey-skull--mid') : '';
    s += `<span class="prey-skull${on ? ' prey-skull--on' + tier : ' prey-skull--off'}" aria-hidden="true">💀</span>`;
  }
  return s;
}

/** Resolve media paths against the page URL (fixes CSS url() vs stylesheet base + ?v= cache bust). */
function preyMediaUrl(path) {
  if (!path) return '';
  const s = String(path).trim();
  if (/^https?:\/\//i.test(s)) return s;
  const rel = s.replace(/^\//, '');
  try {
    return new URL(rel, window.location.href).href;
  } catch (e) {
    return rel;
  }
}

/** Zone-themed poster art URL (local assets); optional `bountyArt` on target overrides. */
function getPreyCardBgUrl(t) {
  const withVer = rel => {
    const ver = typeof APP_VERSION !== 'undefined' ? String(APP_VERSION) : '';
    if (!ver || /^https?:\/\//i.test(rel)) return rel;
    const sep = rel.includes('?') ? '&' : '?';
    return `${rel}${sep}v=${encodeURIComponent(ver)}`;
  };
  if (t && t.bountyArt) {
    let raw = String(t.bountyArt).trim();
    const um = raw.match(/^url\(\s*['"]?(.+?)['"]?\s*\)$/i);
    if (um) raw = um[1];
    raw = raw.replace(/^["']|["']$/g, '');
    return preyMediaUrl(withVer(raw));
  }
  const z = ((t.zone && t.zone.en) || '').toLowerCase();
  let rel = 'images/raids/rift-of-aln-bg.svg';
  if (z.includes('silvermoon')) rel = 'images/dungeons/murder-row-bg.svg';
  else if (z.includes('eversong')) rel = 'images/dungeons/windrunner-spire-bg.svg';
  else if (z.includes("zul'")) rel = 'images/dungeons/den-of-nalorakk-bg.svg';
  else if (z.includes('voidstorm')) rel = 'images/raids/voidspire-bg.svg';
  else if (z.includes('masters') && z.includes('perch')) rel = 'images/raids/voidspire-bg.svg';
  else if (z.includes('quel') || z.includes('danas')) rel = 'images/raids/march-queldanas-bg.svg';
  else if (z.includes('ghost')) rel = 'images/dungeons/murder-row-bg.svg';
  return preyMediaUrl(withVer(rel));
}

function preyEscImgSrc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function preyDefaultLoot() {
  const P = typeof PREY_ILVL !== 'undefined' ? PREY_ILVL : { normal: 220, hard: 233, nightmare: 246 };
  return { normal: P.normal, hard: P.hard, nightmare: P.nightmare };
}

/** Bounty cards: Normal / Hard (Heroic) / Nightmare iLvl+ — Icy Veins Prey table; per-target loot overrides. */
function preyIlvlSplitLabel(lo, ui) {
  const P = typeof PREY_ILVL !== 'undefined' ? PREY_ILVL : { normal: 220, hard: 233, nightmare: 246 };
  const n = lo && lo.normal != null ? lo.normal : P.normal;
  const h = lo && lo.hard != null ? lo.hard : P.hard;
  const nm = lo && lo.nightmare != null ? lo.nightmare : P.nightmare;
  return `${ui.normal}: ${n}+ · ${ui.hard}: ${h}+ · ${ui.nightmare}: ${nm}+`;
}

function preyRewardTypeLine(t, l) {
  if (t.rewardType && (t.rewardType[l] || t.rewardType.en)) return t.rewardType[l] || t.rewardType.en;
  return l === 'en' ? '🎁 Gear' : '🎁 Gear';
}

function preyTargetKilledToggle(id, inputEl) {
  const map = { ...getPreyKilledMapRaw() };
  if (inputEl && typeof inputEl.checked === 'boolean') map[id] = inputEl.checked;
  else map[id] = !map[id];
  setPreyKilledMap(map);
  void renderPreyGuide();
  if (typeof buildWeeklyList === 'function') buildWeeklyList();
}

async function renderPreyGuide() {
  const container = document.getElementById('prey-content');
  if (!container) return;

  const data = typeof PREY_DATA !== 'undefined' ? PREY_DATA : null;
  const ui = PREY_UI[lang] || PREY_UI.nl;

  document.getElementById('prey-title').textContent = ui.title;
  const introEl = document.getElementById('prey-intro');
  if (introEl && data) introEl.textContent = data.intro[lang] || data.intro.nl;

  if (!data) { container.innerHTML = '<p style="color:var(--muted)">Loading Prey data…</p>'; return; }

  const preyDay = typeof getPreyRotationDayKey === 'function' ? getPreyRotationDayKey() : '';
  if (typeof window !== 'undefined') {
    if (window.__midnightPreyDayKey && window.__midnightPreyDayKey !== preyDay) resetPreyTodayFetchCache();
    window.__midnightPreyDayKey = preyDay;
  }
  await Promise.all([fetchPreyToday(), fetchLiveResetData()]);
  const preyS1Rows = await fetchPreyActivitiesJson();

  const targetsSorted = getFinalActivePreyTargets();

  const l = lang === 'en' ? 'en' : 'nl';
  const loop = data.loop[l] || data.loop.en;
  const rewd = data.rewards[l] || data.rewards.en;
  const diffNorm = data.difficulties.normal[l];
  const diffHard = data.difficulties.hard[l];
  const diffNight = data.difficulties.nightmare[l];
  const affixBlood = data.nightmareAffixes.bloody_command[l];
  const affixEcho = data.nightmareAffixes.echo_of_predation[l];
  const way = data.unlock.way;
  const tipCopy = ui.tooltipCopy;
  const tt = data.tooltips;
  const P = typeof PREY_ILVL !== 'undefined' ? PREY_ILVL : { normal: 220, hard: 233, nightmare: 246, worldBoss: 289 };

  let html = '';

  const pr = preyTodayFetchResult;
  if (pr.fromJson && pr.source === 'wowhead') {
    html += `<div class="prey-section prey-today-banner"><p class="prey-today-status prey-today-status--ok">✨ ${ui.preyTodayWowhead}</p></div>`;
  } else if (pr.fromJson) {
    const sub = pr.source === 'computed' ? ` <span class="prey-today-status-sub">${ui.preyTodayJsonComputed}</span>` : '';
    html += `<div class="prey-section prey-today-banner"><p class="prey-today-status prey-today-status--ok">📡 ${ui.preyTodayJson}${sub}</p></div>`;
  } else {
    html += `<div class="prey-section prey-today-banner"><p class="prey-today-status prey-today-status--warn">⚠️ ${ui.preyTodayFallback}</p></div>`;
  }

  const lrPz = liveResetFetchResult;
  if (lrPz.ok && lrPz.dailyPrey.length) {
    const matchedPz = matchLiveResetPreyLabels(lrPz.dailyPrey);
    if (matchedPz.length) {
      const escPz = typeof escapeHtmlText === 'function' ? escapeHtmlText : (s => String(s == null ? '' : s).replace(/</g, '&lt;'));
      const namesPz = matchedPz.map(escPz).join(', ');
      const linePz = (ui.preyLiveResetHardNm || '').replace(/\{names\}/g, namesPz);
      html += `<div class="prey-section prey-live-reset-banner"><p class="prey-today-status prey-today-status--ok">🎯 ${linePz}</p></div>`;
    }
  }

  const preyState = preyWeeklyLoadState();
  const killedMap = getPreyKilledMapRaw();
  const pk = getPreyWeeklyKillProgress();
  const spot = getPreySpotlightTarget();

  // ——— Bounty posters (primary) ———
  if (targetsSorted.length > 0) {
    html += `<div class="prey-section prey-bounty-board-section">
      <h3 class="prey-section-title">${ui.targetsLabel}</h3>
      <p class="prey-targets-hint">${ui.targetsHint || 'Sorted by zone — click for details'}</p>
      <div class="prey-target-cards immersive-card-grid">`;
    targetsSorted.forEach(t => {
      const name = (t.name && t.name[l]) || t.name?.en || t.id || '—';
      const zoneName = (t.zone && t.zone[l]) || t.zone?.en || '—';
      const dr = Math.min(5, Math.max(1, Number(t.difficulty_rating) || 3));
      const pctD = Math.round(dr / 5 * 100);
      const killed = !!killedMap[t.id];
      const skulls = preySkullsStringHtml(dr);
      const rewardLn = preyRewardTypeLine(t, l);
      const lo = t.loot || {};
      const ilvlSplit = preyIlvlSplitLabel(lo, ui);
      const wayStr = (t.coords && t.coords[l]) || t.coords?.en || '';
      const wayAttr = escapeDataWayAttr(wayStr);
      const wayBtn = wayStr
        ? `<button type="button" class="prey-way-copy-btn prey-way-copy-btn--bounty-primary" onclick="event.stopPropagation();copyWay(this)" data-way="${wayAttr}" title="${tipCopy}">📋 ${ui.copyWayCta}</button>`
        : '';
      const bgSrc = preyEscImgSrc(getPreyCardBgUrl(t));
      html += `<div id="prey-card-${t.id}" class="prey-target-card-wrap">
        <div class="prey-bounty-card${killed ? ' prey-target-done' : ''}" onclick="openPreyDetail('${t.id}')" role="button" tabindex="0">
          <div class="prey-bounty-card__art" aria-hidden="true"><img class="prey-bounty-card__art-img" src="${bgSrc}" alt="" width="400" height="260" decoding="async" loading="lazy"></div>
          <div class="prey-bounty-card__glass">
            <div class="prey-bounty-wanted-tag">${ui.wantedLabel}</div>
            <div class="prey-target-card-name">${name}</div>
            <div class="prey-bounty-skulls" aria-label="${ui.threatLabel} ${dr}/5">${skulls}</div>
            <div class="prey-bounty-reward-line prey-reward-epic">${rewardLn}</div>
            <div class="prey-bounty-nightmare-ilvl prey-bounty-ilvl-split">${ilvlSplit}</div>
            <div class="prey-target-card-zone">${zoneName}</div>
            <div class="prey-target-card-meter">
              <span class="prey-card-meter-lbl">${ui.dangerMeter}</span>
              <div class="prey-danger-track"><div class="prey-danger-fill prey-danger-fill-${dr}" style="width:${pctD}%"></div></div>
              <span class="prey-card-threat">${dr}/5</span>
            </div>
          </div>
          ${wayBtn}
        </div>
        <label class="prey-killed-label prey-killed-label--tactical"><input type="checkbox" ${killed ? 'checked' : ''} onchange="preyTargetKilledToggle('${t.id}',this)"> ${ui.killedLabel}</label>
      </div>`;
    });
    html += `</div></div>`;
  }

  html += `<div class="prey-section prey-targets-progress-section">
    <h3 class="prey-section-title">${ui.targetsProgress}</h3>
    <p class="prey-targets-progress-sub">${pk.done} / ${pk.total} — ${ui.killedLabel}. <span class="prey-ilvl-note">${typeof ui.preyProgressIlvlLine === 'function' ? ui.preyProgressIlvlLine(P) : ''}</span></p>
    <div class="prey-danger-track prey-danger-track-global"><div class="prey-danger-fill prey-danger-fill-global" style="width:${pk.total ? Math.round(pk.done / pk.total * 100) : 0}%"></div></div>
  </div>`;

  const allPrey = (typeof PREY_TARGETS !== 'undefined' ? PREY_TARGETS : []).slice();
  allPrey.sort((a, b) => (a.zoneOrder || 0) - (b.zoneOrder || 0) || String(a.id || '').localeCompare(String(b.id || '')));
  if (allPrey.length > 0) {
    const rosterActiveIds = getFinalActivePreyTargetIds();
    const rosterStatusOk = rosterActiveIds.length === ACTIVE_PREY_TODAY_COUNT;
    const rosterActiveSet = new Set(rosterActiveIds);
    const esc = typeof escapeHtmlText === 'function' ? escapeHtmlText : s => String(s == null ? '' : s).replace(/</g, '&lt;');
    html += `<div class="prey-section prey-all-roster-section">
    <h3 class="prey-section-title">${ui.allPreyRosterTitle}</h3>
    <p class="prey-targets-hint">${ui.allPreyRosterHint}</p>
    <div class="prey-targets-table-wrap">
    <table class="prey-targets-table prey-roster-table">
      <thead><tr>
        <th scope="col">${ui.preyRosterColTarget}</th>
        <th scope="col">${ui.preyRosterColZone}</th>
        <th scope="col" class="prey-roster-col-status">${ui.preyRosterColStatus}</th>
        <th scope="col" class="prey-roster-col-threat">${ui.preyRosterColThreat}</th>
      </tr></thead><tbody>`;
    allPrey.forEach(t => {
      const nm = (t.name && t.name[l]) || t.name?.en || t.id || '—';
      const zn = (t.zone && t.zone[l]) || t.zone?.en || '—';
      const dr = Math.min(5, Math.max(1, Number(t.difficulty_rating) || 3));
      let statusCell;
      if (!rosterStatusOk) {
        statusCell = `<span class="prey-status-pill prey-status-pill--unknown">${ui.preyStatusUnknown}</span>`;
      } else if (rosterActiveSet.has(t.id)) {
        statusCell = `<span class="prey-status-pill prey-status-pill--active">${ui.preyStatusActiveShort}</span>`;
      } else {
        statusCell = `<span class="prey-status-pill prey-status-pill--inactive">${ui.preyStatusInactiveShort}</span>`;
      }
      const rowCls = rosterStatusOk && rosterActiveSet.has(t.id) ? ' prey-roster-row--active' : '';
      html += `<tr class="prey-roster-row${rowCls}">
      <td><button type="button" class="prey-target-link prey-roster-name-btn" onclick="openPreyDetail('${t.id}')">${esc(nm)}</button></td>
      <td>${esc(zn)}</td>
      <td class="prey-roster-col-status">${statusCell}</td>
      <td class="prey-roster-col-threat">${dr}/5</td>
    </tr>`;
    });
    html += `</tbody></table></div></div>`;
  }

  if (spot) {
    const sn = (spot.name && spot.name[l]) || spot.name?.en || spot.id;
    const sz = (spot.zone && spot.zone[l]) || spot.zone?.en || '—';
    const sloc = (spot.location && (spot.location[l] || spot.location.en)) ? (spot.location[l] || spot.location.en) : sz;
    const dr = Math.min(5, Math.max(1, Number(spot.difficulty_rating) || 3));
    const pctD = Math.round(dr / 5 * 100);
    const skulls = preySkullsStringHtml(dr);
    const rewardLn = preyRewardTypeLine(spot, l);
    const sLo = spot.loot || {};
    const spotIlvl = preyIlvlSplitLabel(sLo, ui);
    html += `<div class="prey-spotlight prey-spotlight--bounty">
      <div class="prey-spotlight-badge">${ui.spotlightTitle}</div>
      <div class="prey-spotlight-inner">
        <div class="prey-spotlight-text">
          <div class="prey-bounty-wanted-tag">${ui.wantedLabel}</div>
          <div class="prey-spotlight-name">${sn}</div>
          <div class="prey-bounty-skulls" aria-label="${ui.threatLabel} ${dr}/5">${skulls}</div>
          <div class="prey-bounty-reward-line prey-reward-epic">${rewardLn}</div>
          <div class="prey-bounty-nightmare-ilvl prey-bounty-ilvl-split">${spotIlvl}</div>
          <div class="prey-spotlight-loc">${sloc}</div>
          <div class="prey-spotlight-meter-wrap" aria-hidden="true"><span class="prey-spotlight-meter-label">${ui.dangerMeter}</span>
            <div class="prey-danger-track prey-danger-track-lg"><div class="prey-danger-fill prey-danger-fill-${dr}" style="width:${pctD}%"></div></div>
            <span class="prey-spotlight-threat">${ui.threatLabel} ${dr}/5</span>
          </div>
        </div>
        <button type="button" class="prey-spotlight-btn" onclick="openPreyDetail('${spot.id}')">${ui.spotlightCta}</button>
      </div>
    </div>`;
  }

  // ——— Weekly Checklist ———
  const hunt1 = !!preyState.hunt1;
  const hunt2 = !!preyState.hunt2;
  html += `<div class="prey-section prey-weekly-checklist">
    <h3 class="prey-section-title">${ui.weeklyChecklist}</h3>
    <div class="prey-weekly-box">
      <label class="prey-check-item"><input type="checkbox" ${hunt1?'checked':''} onchange="preyWeeklyToggle('hunt1')"> ${ui.weeklyHunt1}</label>
      <label class="prey-check-item"><input type="checkbox" ${hunt2?'checked':''} onchange="preyWeeklyToggle('hunt2')"> ${ui.weeklyHunt2}</label>
      <button type="button" class="prey-reset-btn" onclick="preyWeeklyReset()">↺ ${ui.resetWeekly}</button>
    </div>
    <div class="prey-highlight-box" style="margin-top:12px">
      <p>⭐ <strong>${rewd.weeklyTip}</strong></p>
      <p>💡 <strong>${ui.preyFourPerWeekVaultTip || ''}</strong></p>
      <p>${rewd.greatVault}</p>
    </div>
  </div>`;

  const u = data.unlock;
  // ——— Getting Started ———
  html += `<div class="prey-section">
    <h3 class="prey-section-title">${ui.gettingStarted}</h3>
    <div class="prey-card">
      <p><strong>${u.unlockLabel[l] || u.unlockLabel.en}</strong> ${u.reachSpeak[l] || u.reachSpeak.en} <strong>${u.npc}</strong> in ${u.zone}.</p>
      <p>${u.completeQuest[l] || u.completeQuest.en} <em>"${u.questlineEnd}"</em> ${u.toUnlock[l] || u.toUnlock.en}</p>
      <button type="button" class="prey-way-copy-btn prey-way-copy-btn--block" onclick="copyWay(this)" data-way="${escapeDataWayAttr(way)}" title="${tipCopy}">📋 ${ui.copyWayCta}</button>
    </div>
    <div class="prey-card">
      <h4 class="prey-step-label">${data.gameplayLoopLabel[l] || data.gameplayLoopLabel.en}</h4>
      <ol class="prey-loop-list">`;
  loop.forEach((s, i) => {
    html += `<li><strong>${s.step}:</strong> ${s.text}</li>`;
  });
  html += `</ol></div></div>`;

  // ——— Difficulties + Nightmare Affixes ———
  html += `<div class="prey-section">
    <h3 class="prey-section-title">${ui.rewards}</h3>
    <div class="prey-diff-grid">
      <div class="prey-diff-card diff-normal"><span class="prey-diff-badge">🟢 Normal</span><p>${diffNorm.desc}</p></div>
      <div class="prey-diff-card diff-hard"><span class="prey-diff-badge">🟡 Hard</span><p>${diffHard.desc}</p></div>
      <div class="prey-diff-card diff-nightmare"><span class="prey-diff-badge">🔴 Nightmare</span><p>${diffNight.desc}</p></div>
    </div>
    ${buildPreySeasonOneRewardsTableHtml(preyS1Rows, l, ui)}
    <div class="prey-rewards-list">
      <p>${rewd.adventurer}</p>
      <p><span class="prey-tooltip-term" title="${tt.veteran_track.explain[l] || tt.veteran_track.explain.en}">Veteran Track</span>: ${rewd.veteran}</p>
      <p><span class="prey-tooltip-term" title="${tt.champion_track.explain[l] || tt.champion_track.explain.en}">Champion Track</span>: ${rewd.champion}</p>
      <p style="font-size:13px;color:var(--muted);margin-top:8px">${rewd.worldBossNote || ''}</p>
      <p style="font-size:13px;color:var(--muted);margin-top:10px"><span class="prey-tooltip-term" title="${tt.anguish.explain[l] || tt.anguish.explain.en}">Anguish</span> ${rewd.anguishFills}. <span class="prey-tooltip-term" title="${tt.dawncrests.explain[l] || tt.dawncrests.explain.en}">Dawncrests</span> ${rewd.dawncrestsUpgrade}. <strong>BiS (Mythic / AMR):</strong> iLvl 289. <strong>${ui.ilvlScale} (Icy Veins):</strong> Normal ${P.normal} · Hard ${P.hard} · Nightmare ${P.nightmare}.</p>
    </div>
    <h4 class="prey-affix-heading">${ui.nightmareAffixes}</h4>
    <ul class="prey-affix-list">
      <li class="prey-affix-item"><strong>${affixBlood.name}:</strong> ${affixBlood.explain}</li>
      <li class="prey-affix-item"><strong>${affixEcho.name}:</strong> ${affixEcho.explain}</li>
    </ul>
  </div>`;

  container.innerHTML = html;
  schedulePreyResetCountdown();
}

function openPreyDetail(id) {
  const targets = typeof PREY_TARGETS !== 'undefined' ? PREY_TARGETS : [];
  const t = targets.find(x => x.id === id);
  if (!t) return;
  const l = lang === 'en' ? 'en' : 'nl';
  const u = PREY_UI[lang] || PREY_UI.nl;
  const name = (t.name && t.name[l]) || t.name?.en || t.id;
  const zoneName = (t.zone && t.zone[l]) || t.zone?.en || '—';
  const locStr = (t.location && (t.location[l] || t.location.en)) ? (t.location[l] || t.location.en) : '';
  const wayStr = (t.coords && t.coords[l]) || t.coords?.en || '';
  const summary = t.summary && (t.summary[l] || t.summary.en) ? (t.summary[l] || t.summary.en) : [];
  const fullGuide = t.fullGuide && (t.fullGuide[l] || t.fullGuide.en) ? (t.fullGuide[l] || t.fullGuide.en) : '';
  const loot = t.loot || preyDefaultLoot();
  const preyKilledMap = getPreyKilledMapRaw();
  const dr = Math.min(5, Math.max(1, Number(t.difficulty_rating) || 3));
  const pctD = Math.round(dr / 5 * 100);
  const pro = t.pro_tip || {};
  const pt = role => {
    const p = pro[role];
    if (!p) return '—';
    return (p[l] || p.en || '—').replace(/</g, '&lt;');
  };

  let bullets = '';
  if (Array.isArray(summary) && summary.length > 0) {
    bullets = summary.map(b => `<li>${String(b).replace(/</g, '&lt;')}</li>`).join('');
  } else {
    const ab = (t.abilities && t.abilities[l]) || t.abilities?.en || '—';
    bullets = `<li>${String(ab).replace(/</g, '&lt;')}</li>`;
  }

  const lootRows = `<tr><td>${u.normal}</td><td>${loot.normal || '—'}</td></tr><tr><td>${u.hard}</td><td>${loot.hard || '—'}</td></tr><tr><td>${u.nightmare}</td><td>${loot.nightmare || '—'}</td></tr>`;

  const escAttr = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  const drops = Array.isArray(t.crafting_drops) ? t.crafting_drops : [];
  const craftingBlock = drops.length === 0 ? '' : (() => {
    const items = drops.map(d => {
      if (!d) return '';
      const label = (d.label && (d.label[l] || d.label.en)) || d.item || '';
      const prof = (d.profession && (d.profession[l] || d.profession.en)) || '';
      const use = (d.used_for && (d.used_for[l] || d.used_for.en)) || '';
      const tip = lang === 'en'
        ? `Used by ${prof}: ${use}.`
        : `Wordt gebruikt door ${prof}: ${use}.`;
      const safeLabel = String(label).replace(/</g, '&lt;');
      const iid = d.itemId != null && d.itemId !== '' ? Number(d.itemId) : null;
      if (iid != null && !Number.isNaN(iid) && typeof wrapItem === 'function') {
        const link = wrapItem(label, iid, d.wowheadExtra);
        return `<li class="prey-crafting-li" title="${escAttr(tip)}">${link}</li>`;
      }
      return `<li><button type="button" class="prey-craft-link prey-reward-wowhead-link" title="${escAttr(tip)}">${safeLabel}</button></li>`;
    }).filter(Boolean).join('');
    if (!items) return '';
    return `<h4 class="prey-detail-subtitle prey-crafting-heading">${u.craftingMaterials}</h4><ul class="prey-crafting-list">${items}</ul>`;
  })();

  document.getElementById('prey-detail-title').textContent = name;
  const wayHtml = wayStr ? `<button type="button" class="prey-way-copy-btn prey-way-copy-btn--block prey-way-copy-btn--detail" onclick="copyWay(this)" data-way="${escapeDataWayAttr(wayStr)}" title="${u.tooltipCopy}">📋 ${u.copyWayCta}</button><div class="prey-way-raw mono">${escapeHtmlText(wayStr)}</div>` : '';
  document.getElementById('prey-detail-content').innerHTML = `
    <div class="prey-detail-zone"><strong>${u.location}:</strong> ${zoneName}${locStr ? ` — <em>${locStr.replace(/</g, '&lt;')}</em>` : ''}</div>
    ${wayHtml}
    <div class="prey-detail-danger-block">
      <span class="prey-detail-danger-lbl">${u.dangerMeter}</span>
      <div class="prey-danger-track prey-danger-track-lg"><div class="prey-danger-fill prey-danger-fill-${dr}" style="width:${pctD}%"></div></div>
      <span class="prey-detail-threat">${u.threatLabel} ${dr}/5 (${u.killedLabel}: ${preyKilledMap[id] ? '✓' : '—'})</span>
    </div>
    <h4 class="prey-detail-subtitle">${u.summaryLabel}</h4>
    <ul class="delve-detail-bullets">${bullets}</ul>
    <h4 class="prey-detail-subtitle">${u.roleTips}</h4>
    <div class="prey-role-tip-grid">
      <div class="prey-role-tip prey-role-tank"><strong>${u.roleTank}</strong><p>${pt('tank')}</p></div>
      <div class="prey-role-tip prey-role-heal"><strong>${u.roleHeal}</strong><p>${pt('heal')}</p></div>
      <div class="prey-role-tip prey-role-dps"><strong>${u.roleDps}</strong><p>${pt('dps')}</p></div>
    </div>
    ${fullGuide ? `<h4 class="prey-detail-subtitle">${u.fullGuide}</h4><div class="delve-full-guide-body">${fullGuide}</div>` : ''}
    <h4 class="prey-detail-subtitle">${u.lootTable}</h4>
    <table class="prey-detail-loot-table"><thead><tr><th>${u.difficulty || 'Difficulty'}</th><th>${u.ilvl}</th></tr></thead><tbody>${lootRows}</tbody></table>
    ${craftingBlock}
    <p class="prey-loot-footnote"><strong>${u.ilvlScale}:</strong> ${typeof u.lootFootnote === 'function' ? u.lootFootnote() : ''}</p>`;
  document.getElementById('prey-detail-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePreyDetail() {
  document.getElementById('prey-detail-modal').classList.remove('open');
  document.body.style.overflow = '';
}

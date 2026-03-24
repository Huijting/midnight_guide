// ============================================================
// SPEC: Beast Mastery Hunter
// WoW Midnight 12.0.1 | Bron: Icy Veins (bewerkt voor deze app)
// Talen: NL volledig | EN/DA: stubs (later uitbreiden)
// Aanpassen? Alleen dit bestand wijzigen en pushen.
// ============================================================

const SPEC_BM_HUNTER = {
  id: 'bm_hunter',
  icon: '🏹',
  class: 'Hunter',
  spec:  { nl: 'Beast Mastery', en: 'Beast Mastery'},
  role:  'dps',
  armor: 'Mail',
  weapon: { nl: 'Boog / Gun / Crossbow', en: 'Bow / Gun / Crossbow'},
  resource: 'Focus (0–120)',
  patch: '12.0.1',
  color: '#e88c2a',

  summary: {
    nl: 'Ranged DPS die zijn pet het werk laat doen. Simpele rotatie, hoge mobiliteit, sterk voor solo en groepsplay. Jouw pet doet een groot deel van de schade — houdt hem in leven!',
    en: 'Ranged DPS that lets your pet do the work. Simple rotation, high mobility, strong for solo and group play. Your pet deals a large portion of damage — keep it alive!'
  },

  pros: {
    nl: ['Simpele rotatie — snel te leren', 'Pet tankt mobs — ideaal voor solo/questen', 'Hoge mobiliteit — cast bijna alles al bewegend', 'Vlakke, consistente DPS', 'Sterke utility (Misdirection, Freezing Trap)'],
    en: ['Simple rotation — quick to learn', 'Pet tanks mobs — ideal for solo/questing', 'High mobility — cast almost everything while moving', 'Flat, consistent DPS', 'Strong utility (Misdirection, Freezing Trap)']
  },

  cons: {
    nl: ['Minder burst dan andere specs', 'Pet kan sterven bij slechte positionering', 'Afhankelijk van pet — pet bugs kosten DPS', 'Focus management vereist aandacht', 'Scatter Shot weg in Midnight'],
    en: ['Less burst than other specs', 'Pet can die on bad positioning', 'Reliant on pet — pet bugs cost DPS', 'Focus management requires attention', 'Scatter Shot removed in Midnight']
  },

  // ── RESOURCE ──────────────────────────────────────────────
  resource_info: {
    nl: {
      intro: 'Focus (0–120) is jouw primaire resource. Nooit op 0 zitten en nooit vol laten lopen — beide zijn verspilling!',
      generate: [
        { spell: 'Auto-attacks', note: '+2 Focus per aanval (passief)' },
        { spell: 'Cobra Shot', note: 'Genereert Focus + verlengt Barbed Shot' },
        { spell: 'Kill Command', note: 'Kan Focus teruggeven via talents' },
      ],
      spend: [
        { spell: 'Kill Command', note: 'Hoge schade, hoog Focus-verbruik' },
        { spell: 'Barbed Shot', note: 'Geeft pet Frenzy stacks' },
        { spell: 'Bestial Wrath', note: 'Grote cooldown, verlaagt kosten' },
        { spell: 'Wild Thrash', note: 'AoE pet aanval' },
      ],
      pet_tip: 'Je pet bouwt tot 3 Frenzy stacks op via Barbed Shot. Elke stack verhoogt de aanvalssnelheid. Houd altijd 3 stacks actief — dit is je belangrijkste buff! Refresh Barbed Shot voordat de stacks verlopen.',
      pets: [
        { type: 'Ferocity 🟢', bonus: 'Leech — healt jou op basis van schade', use: 'Levelen, solo, questen — aanbevolen' },
        { type: 'Tenacity 🟡', bonus: 'Hogere HP + schade reductie voor pet', use: 'Taaie solo content, world bosses' },
        { type: 'Cunning 🔴', bonus: 'Verlengde duur roots/snares', use: 'PvP of situaties met veel CC' },
      ],
    },
    en: { intro: 'Focus (0–120) is your primary resource. Never sit at 0 and never let it cap — both are waste!', generate: [], spend: [], pets: [] }
  },

  // ── ROTATIE ───────────────────────────────────────────────
  rotation: {
    nl: {
      apex_tip: '⚡ Apex Talent: Kill Command wordt sterker na elke niet-KC cast. Nooit twee Kill Commands achter elkaar! Patroon: KC → andere spell → KC → andere spell.',
      opener: [
        { step: 1, spell: "Hunter's Mark",  note: 'Altijd actief houden op target' },
        { step: 2, spell: 'Wild Thrash',    note: 'Activeer vóór Bestial Wrath als beschikbaar' },
        { step: 3, spell: 'Bestial Wrath',  note: 'Grote schade-cooldown — buffert alle volgende casts' },
        { step: 4, spell: 'Kill Command',   note: 'Direct na Bestial Wrath — spawnt Stampede!' },
        { step: 5, spell: 'Black Arrow',    note: 'Als getalenteerd (Dark Ranger build) — in eerste 10 sec BW' },
        { step: 6, spell: 'Barbed Shot',    note: 'Zet Frenzy-stacks op pet — niet laten verlopen!' },
        { step: 7, spell: 'Wailing Arrow',  note: 'Als Bestial Wrath bijna afloopt' },
      ],
      single: [
        { prio: '1', spell: 'Black Arrow',      note: 'Als beschikbaar (Dark Ranger build)',          importance: 'ALTIJD' },
        { prio: '2', spell: 'Bestial Wrath',    note: 'Zo snel mogelijk — verhoogt ALLE schade',      importance: 'ALTIJD' },
        { prio: '3', spell: 'Kill Command',     note: 'On cooldown — nooit 2x achter elkaar! (Apex)', importance: 'ALTIJD' },
        { prio: '4', spell: 'Barbed Shot',      note: 'Houd Frenzy op 3 stacks — nooit laten verlopen', importance: 'ALTIJD' },
        { prio: '5', spell: 'Wild Thrash',      note: 'On cooldown (AoE + extra KC schade)',          importance: 'HOOG' },
        { prio: '6', spell: 'Wailing Arrow',    note: 'Geen Barbed Shot of KC beschikbaar',           importance: 'HOOG' },
        { prio: '7', spell: 'Cobra Shot',       note: 'Filler — genereert Focus + verlengt Barbed Shot', importance: 'FILLER' },
      ],
      aoe: [
        { prio: '1', spell: 'Bestial Wrath',  note: 'Zo snel mogelijk — Stampede raakt meerdere targets' },
        { prio: '2', spell: 'Black Arrow',    note: 'Cast als Beast Cleave bijna afloopt' },
        { prio: '3', spell: 'Wild Thrash',    note: 'On cooldown — AoE pet aanval' },
        { prio: '4', spell: 'Kill Command',   note: 'On cooldown — altijd afwisselen met andere spells' },
        { prio: '5', spell: 'Barbed Shot',    note: 'Houd Frenzy stacks op 3' },
        { prio: '6', spell: 'Cobra Shot',     note: 'Vul gaps — zorg dat je altijd iets cast' },
      ],
    },
    en: { apex_tip: '', opener: [], single: [], aoe: [] }
  },

  // ── STATS ─────────────────────────────────────────────────
  stats: {
    nl: {
      tip: '💡 Easy Mode tip: Maximaliseer Mastery en vermijd Versatility op gear. Bij levelen altijd het hoogste item level pakken — Agility en Stamina zijn allesbepalend.',
      list: [
        { rank: '1', stat: 'Agility',       bars: 5, note: 'Verhoogt aanvalskracht voor jou EN je pet — altijd hoogste ilvl pakken!' },
        { rank: '2', stat: 'Mastery',        bars: 5, note: 'Verhoogt schade van jou en je pets — maximaliseer op max level' },
        { rank: '3', stat: 'Critical Strike', bars: 4, note: 'Veel BM talents schalen met Crit (Laceration, Piercing Fangs)' },
        { rank: '4', stat: 'Haste',          bars: 3, note: 'Verlaagt GCD en cooldowns — meer casts per minuut' },
        { rank: '5', stat: 'Versatility',    bars: 2, note: 'Vlakke % schade bonus — minst waardevol voor BM' },
      ],
    },
    en: { tip: '', list: [] }
  },

  // ── COOLDOWNS ─────────────────────────────────────────────
  cooldowns: {
    nl: [
      { spell: 'Bestial Wrath',       cd: '1.5 min', effect: 'Verhoogt alle schade + pet + spawnt Stampede',           when: 'Zo snel mogelijk — altijd on cooldown' },
      { spell: 'Bloodlust / Heroism', cd: '10 min',  effect: 'Groeps-haste +30% voor 40 sec',                          when: 'Op aanwijzing van de tank of raidleider' },
      { spell: 'Exhilaration',        cd: '1.5 min', effect: 'Instant heal: 30% HP voor jezelf + 30% pet',             when: 'Zodra je onder ~60% HP zakt' },
      { spell: 'Aspect of the Turtle',cd: '3 min',   effect: '100% immune aan schade (8 sec) — STOP met aanvallen',    when: 'Absolute noodsituatie / mechanics' },
      { spell: 'Feign Death',         cd: '30 sec',  effect: 'Vals neerspelen — verwijdert je van agressie-lijst',     when: 'Aggro-dump of fake death bij wipe' },
      { spell: 'Intimidation',        cd: '1 min',   effect: 'Stunt de target 5 seconden',                             when: 'Interrupt zware cast of noodstop' },
      { spell: 'Misdirection',        cd: '30 sec',  effect: 'Stuurt jouw threat naar tank of pet',                    when: 'Bij grote pulls of aggro-problemen' },
    ],
    en: []
  },

  // ── UTILITY ───────────────────────────────────────────────
  utility: {
    nl: [
      { spell: 'Counter Shot',         type: 'Interrupt', note: 'Jouw kick — altijd gebruiken op gevaarlijke casts. Maak een Focus Kick macro!' },
      { spell: 'Intimidation',         type: 'Stun',      note: '5 sec stun — voor casts die niet te interrumpten zijn' },
      { spell: 'Freezing Trap',        type: 'CC',        note: 'Vriest één target 60 sec in — goud waard in M+ voor skip of CC' },
      { spell: 'Tar Trap',             type: 'Slow',      note: 'Vertraagt alle vijanden die erdoorheen lopen — voor kiting' },
      { spell: "Hunter's Mark",        type: 'Debuff',    note: 'Verhoogt jouw schade op target — altijd actief houden!' },
      { spell: 'Misdirection',         type: 'Threat',    note: 'Verplaatst jouw threat naar tank of pet — essentieel bij pulls' },
      { spell: 'Aspect of the Cheetah',type: 'Mobility',  note: 'Verhoogt bewegingssnelheid tijdelijk — gebruik tussen packs in M+' },
      { spell: 'Disengage',            type: 'Mobility',  note: 'Sprong achteruit — snel afstand creëren van vijanden' },
    ],
    en: []
  },

  // ── TIPS ──────────────────────────────────────────────────
  tips: {
    nl: [
      { icon: '🐾', title: 'Frenzy stacks = prio #1',    text: 'Houd altijd 3 stacks Frenzy op je pet via Barbed Shot. Refresh ruim vóór het verlopen — kijk naar de timer op je pet.' },
      { icon: '⚡', title: 'Kill Command weaving',        text: 'De Apex talent maakt KC sterker na elke non-KC cast. Patroon: KC → andere spell → KC → andere spell. Nooit twee KC\'s achter elkaar!' },
      { icon: '💥', title: 'Bestial Wrath timing',        text: 'Grootste DPS-cooldown. Gebruik hem on cooldown — niet sparen. Aim de Stampede zodat hij zoveel mogelijk targets raakt bij AoE.' },
      { icon: '🏃', title: 'Altijd bewegen',              text: 'BM Hunter is de meest mobiele ranged spec. Bijna alle spells kunnen cast worden tijdens bewegen. Gebruik Disengage en Cheetah voor optimale positie.' },
      { icon: '❄',  title: 'Freezing Trap in M+',        text: 'Freeze een gevaarlijk target tijdens grote pulls. Combineer met Counter Shot voor maximale interrupt-dekking.' },
      { icon: '🦵', title: 'Counter Shot = jouw kick',    text: 'Maak een Focus Kick macro. Spreek met je groep af wie welke caster kickt.' },
      { icon: '💀', title: 'Pet overleeft niet?',         text: 'Call Pet (heroproepen) → Mend Pet. Pet buiten range? Beast Call. Ferocity pet healt zichzelf ook via Leech.' },
      { icon: '🎭', title: 'Feign Death = panic knop',    text: 'Verwijdert je van de agressie-lijst. LET OP: sommige boss-mechanics negeren Feign Death.' },
      { icon: '🎯', title: "Hunter's Mark altijd aan",    text: 'Altijd actief op hoofdtarget. Bij meerdere Hunters in de groep: maar 1 persoon zet hem. WeakAura instellen die waarschuwt als hij ontbreekt.' },
      { icon: '📏', title: 'Afstand houden',              text: 'Minimale range is 5 meter. Nooit recht op een boss staan. Bij mechanics: blijf bewegen maar zet je rotatie door!' },
    ],
    en: []
  },

  // ── MACRO'S ───────────────────────────────────────────────
  macros: {
    nl: [
      { name: 'Counter Shot (Focus Kick)', code: '#showtooltip Counter Shot\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Counter Shot', note: 'Gooit je kick op focus > mouseover > target. Essentieel in M+!' },
      { name: 'Focus Mouseover', code: '/focus [@mouseover]\n/script UIErrorsFrame:Clear()', note: 'Snel een focus target instellen zonder te targetten.' },
      { name: 'Intimidation (mouseover stun)', code: '#showtooltip Intimidation\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Intimidation', note: 'Stun op mouseover — handig als je target niet wil wisselen.' },
      { name: 'Freezing Trap (mouseover)', code: '#showtooltip Freezing Trap\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Freezing Trap', note: 'Trap op mouseover — CC snel zonder target te wisselen.' },
      { name: 'Misdirection (op tank of pet)', code: '#showtooltip Misdirection\n/cast [@focus,help,nodead][@mouseover,help,nodead][@pet] Misdirection', note: 'Stuurt threat naar focus > mouseover > pet. Altijd klaar voor grote pulls.' },
      { name: "Hunter's Mark (mouseover)", code: "#showtooltip Hunter's Mark\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Hunter's Mark", note: 'Zet mark op mouseover — handig als je snel van target wisselt.' },
    ],
    en: []
  },

  // ── CHEAT SHEET ───────────────────────────────────────────
  cheatsheet: {
    nl: {
      opener:   "Hunter's Mark → Wild Thrash → Bestial Wrath → Kill Command → Black Arrow → Barbed Shot → Wailing Arrow",
      single:   "Black Arrow → Bestial Wrath → Kill Command (wissel af!) → Barbed Shot (Frenzy 3!) → Wild Thrash → Wailing Arrow → Cobra Shot",
      aoe:      "Bestial Wrath → Wild Thrash → Kill Command → Barbed Shot → Cobra Shot",
      rules: [
        'Nooit KC twee keer achter elkaar (Apex!)',
        'Barbed Shot Frenzy altijd op 3 stacks',
        'Bestial Wrath on cooldown — nooit sparen',
        "Hunter's Mark altijd actief op target",
        'Nooit op 0 Focus zitten',
        'Ferocity pet = Leech = betere survival',
        'Nooit Frenzy stacks laten verlopen',
        'Nooit in melee range van boss staan',
        'Nooit Focus tot max laten oplopen',
      ],
    },
    en: { opener: '', single: '', aoe: '', rules: [] }
  },

  consumables: {
    nl: [
      { type:'flask', name:'Flask of the Blood Knights', effect:'Verhoogt Agility voor 1 uur.', note:'Altijd actief' },
      { type:'pot', name:'Potion of Recklessness', effect:'Agility boost bij burst.', note:'Op pull of Bestial Wrath' },
      { type:'food', name:'Silvermoon Parade (Feast)', effect:'+Agility en Stamina.', note:'Feast vragen' },
      { type:'food', name:'Royal Roast', effect:'Solo food.', note:'Backup' },
      { type:'rune', name:'Void-Touched Augment Rune', effect:'+Primaire stat.', note:'Altijd' },
    ],
    en: [
      { type:'flask', name:'Flask of the Blood Knights', effect:'Increases Agility for 1 hour.', note:'Always active' },
      { type:'pot', name:'Potion of Recklessness', effect:'Agility boost during burst.', note:'On pull or Bestial Wrath' },
      { type:'food', name:'Silvermoon Parade (Feast)', effect:'+Agility and Stamina.', note:'Ask for feast' },
      { type:'food', name:'Royal Roast', effect:'Solo food.', note:'Backup' },
      { type:'rune', name:'Void-Touched Augment Rune', effect:'+Primary stat.', note:'Always' },
    ]
  },
};

// Registreer spec in de globale lijst
if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
ALL_SPECS.push(SPEC_BM_HUNTER);

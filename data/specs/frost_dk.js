// ============================================================
// SPEC: Frost Death Knight
// WoW Midnight 12.0.1
// ============================================================

const SPEC_FROST_DK = {
  id: 'frost_dk',
  icon: '💀',
  class: 'Death Knight',
  spec:  { nl: 'Frost', en: 'Frost'},
  role:  'melee',
  armor: 'Plate',
  weapon: { nl: 'Two one-handed or one two-handed weapon', en: 'Two one-handed or one two-handed weapon'},
  resource: 'Runic Power (0–100) + Runes (6)',
  patch: '12.0.1',
  color: '#90caf9',

  summary: {
    nl: 'Zware melee DPS die ijs en dood combineert. Beheer 6 Runes en Runic Power tegelijk — klinkt complex maar is snel te leren. Uitstekende survivability dankzij plate armor en sterke defensieve cooldowns.',
    en: 'Heavy melee DPS combining ice and death. Manage 6 Runes and Runic Power simultaneously — sounds complex but is quick to learn. Excellent survivability thanks to plate armor and strong defensive cooldowns.'
  },

  pros: {
    nl: ['Plate armor — uitstekende survivability', 'Sterke defensieve cooldowns (Icebound Fortitude, AMS)', 'Death Grip — unieke pull-mechanic', 'Pathfinder-snelheid — geen mount nodig in oude zones', 'Eenvoudiger dan het eruitziet — 2 resources maar logisch systeem'],
    en: ['Plate armor — excellent survivability', 'Strong defensive cooldowns (Icebound Fortitude, AMS)', 'Death Grip — unique pull mechanic', 'Pathfinder speed — no mount needed in old zones', 'Simpler than it looks — 2 resources but logical system']
  },

  cons: {
    nl: ['Melee — moet op de boss staan', 'Runic Power en Runes beiden beheren', 'Weinig CC (geen Polymorph)', 'Minder mobiel dan ranged specs', 'Geen self-heal buiten cooldowns'],
    en: ['Melee — must stand on the boss', 'Managing both Runic Power and Runes', 'Little CC (no Polymorph)', 'Less mobile than ranged specs', 'No self-heal outside of cooldowns']
  },

  cheatsheet: {
    nl: {
      opener:   "Pillar of Frost → Obliterate → Obliterate → Frost Strike (60+ RP) → Howling Blast (Rime!) → Obliterate → filler",
      single:   "Pillar of Frost on CD → Obliterate (Killing Machine!) → Howling Blast (Rime!) → Frost Strike (60+ RP) → Obliterate",
      aoe:      "Pillar of Frost → Howling Blast (Rime!) → Death and Decay → Remorseless Winter → Obliterate → Frost Strike",
      rules: [
        'Killing Machine proc = instant gratis Obliterate — ALTIJD',
        'Rime proc = Howling Blast gratis + hoge schade — ALTIJD',
        'Runic Power nooit cappen — uitgeven bij 80+',
        'Pillar of Frost on cooldown — grootste burst',
        'Runes altijd laten rechargen — nooit leeg laten lopen',
        'Howling Blast bij AoE i.p.v. Obliterate',
        'Death and Decay bij 2+ targets altijd plaatsen',
      ],
    },
    en: {
      opener:   "Pillar of Frost → Obliterate → Obliterate → Frost Strike (60+ RP) → Howling Blast (Rime!) → Obliterate → filler",
      single:   "Pillar of Frost on CD → Obliterate (Killing Machine!) → Howling Blast (Rime!) → Frost Strike (60+ RP) → Obliterate",
      aoe:      "Pillar of Frost → Howling Blast (Rime!) → Death and Decay → Remorseless Winter → Obliterate → Frost Strike",
      rules: [
        'Killing Machine proc = instant free Obliterate — ALWAYS',
        'Rime proc = Howling Blast free + high damage — ALWAYS',
        'Never cap Runic Power — spend at 80+',
        'Pillar of Frost on cooldown — biggest burst',
        'Always let Runes recharge — never run fully empty',
        'Howling Blast on AoE instead of Obliterate',
        'Always place Death and Decay on 2+ targets',
      ],
    }
  },

  rotation: {
    nl: {
      apex_tip: '💀 Resources uitgelegd: 6 Runes (herstel automatisch) → gebruik voor Obliterate/Howling Blast → genereren Runic Power → uitgeven via Frost Strike. Simpel circuit!',
      opener: [
        { step: 1, spell: 'Pillar of Frost',    note: 'Grootste burst cooldown — altijd als eerste' },
        { step: 2, spell: 'Obliterate',          note: 'Primaire aanval — verbruikt 2 Runes + genereert RP' },
        { step: 3, spell: 'Obliterate',          note: 'Nogmaals — bouw RP op' },
        { step: 4, spell: 'Frost Strike',        note: 'Bij 60+ Runic Power — RP uitgeven' },
        { step: 5, spell: 'Howling Blast (Rime)', note: 'Rime proc = gratis + hoge schade — ALTIJD direct' },
        { step: 6, spell: 'Obliterate',          note: 'Continue rotatie' },
        { step: 7, spell: 'Remorseless Winter',  note: 'Als getalenteerd — on cooldown, AoE burst' },
      ],
      single: [
        { prio: '1', spell: 'Killing Machine (Obliterate)', note: 'Proc! Instant gratis Obliterate — nooit verspillen', importance: 'ALTIJD' },
        { prio: '2', spell: 'Rime (Howling Blast)',         note: 'Proc! Gratis Howling Blast — nooit verspillen',      importance: 'ALTIJD' },
        { prio: '3', spell: 'Pillar of Frost',              note: 'On cooldown — verhoogt alle schade',                 importance: 'ALTIJD' },
        { prio: '4', spell: 'Frost Strike',                 note: 'Bij 80+ Runic Power — nooit laten cappen',           importance: 'HOOG' },
        { prio: '5', spell: 'Obliterate',                   note: 'Hoofd Rune-verbruiker — genereert Runic Power',      importance: 'HOOG' },
        { prio: '6', spell: 'Howling Blast',                note: 'Filler bij geen Runes — gooit Rime proc',            importance: 'MIDDEN' },
      ],
      aoe: [
        { prio: '1', spell: 'Pillar of Frost',     note: 'On cooldown — alle AoE schade verhogen' },
        { prio: '2', spell: 'Death and Decay',      note: 'Altijd plaatsen bij 2+ targets — AoE bonus' },
        { prio: '3', spell: 'Howling Blast (Rime)', note: 'On proc — raakt alle vijanden om de target' },
        { prio: '4', spell: 'Remorseless Winter',   note: 'On cooldown — AoE burst + slow' },
        { prio: '5', spell: 'Frost Strike',         note: 'Bij 80+ RP — ook in AoE belangrijk' },
        { prio: '6', spell: 'Obliterate',           note: 'Continue Rune-verbruik' },
      ],
    },
    en: {
      apex_tip: '💀 Resources explained: 6 Runes (auto-recharge) → spend on Obliterate/Howling Blast → generates Runic Power → spend via Frost Strike. Simple circuit!',
      opener: [
        { step: 1, spell: 'Pillar of Frost',    note: 'Biggest burst cooldown — always go first' },
        { step: 2, spell: 'Obliterate',          note: 'Primary attack — uses 2 Runes + generates RP' },
        { step: 3, spell: 'Obliterate',          note: 'Again — build up RP' },
        { step: 4, spell: 'Frost Strike',        note: 'At 60+ Runic Power — spend RP' },
        { step: 5, spell: 'Howling Blast (Rime)', note: 'Rime proc = free + high damage — ALWAYS immediately' },
        { step: 6, spell: 'Obliterate',          note: 'Continue rotation' },
        { step: 7, spell: 'Remorseless Winter',  note: 'If talented — on cooldown, AoE burst' },
      ],
      single: [
        { prio: '1', spell: 'Killing Machine (Obliterate)', note: 'Proc! Instant free Obliterate — never waste',    importance: 'ALWAYS' },
        { prio: '2', spell: 'Rime (Howling Blast)',         note: 'Proc! Free Howling Blast — never waste',         importance: 'ALWAYS' },
        { prio: '3', spell: 'Pillar of Frost',              note: 'On cooldown — increases all damage',             importance: 'ALWAYS' },
        { prio: '4', spell: 'Frost Strike',                 note: 'At 80+ Runic Power — never let it cap',          importance: 'HIGH' },
        { prio: '5', spell: 'Obliterate',                   note: 'Main Rune spender — generates Runic Power',      importance: 'HIGH' },
        { prio: '6', spell: 'Howling Blast',                note: 'Filler when no Runes — triggers Rime proc',       importance: 'MEDIUM' },
      ],
      aoe: [
        { prio: '1', spell: 'Pillar of Frost',     note: 'On cooldown — boost all AoE damage' },
        { prio: '2', spell: 'Death and Decay',      note: 'Always place on 2+ targets — AoE bonus' },
        { prio: '3', spell: 'Howling Blast (Rime)', note: 'On proc — hits all enemies around target' },
        { prio: '4', spell: 'Remorseless Winter',   note: 'On cooldown — AoE burst + slow' },
        { prio: '5', spell: 'Frost Strike',         note: 'At 80+ RP — also important in AoE' },
        { prio: '6', spell: 'Obliterate',           note: 'Continue Rune spending' },
      ],
    }
  },

  stats: {
    nl: {
      tip: '💡 Strength is jouw primaire stat. Frost DK wil Crit voor Killing Machine procs en Haste voor snellere Rune-regeneratie. Altijd hoogste ilvl pakken!',
      list: [
        { rank: '1', stat: 'Strength',        bars: 5, note: 'Primaire stat — altijd hoogste ilvl kiezen' },
        { rank: '2', stat: 'Critical Strike',  bars: 5, note: 'Meer Crit = meer Killing Machine procs = meer schade' },
        { rank: '3', stat: 'Haste',            bars: 4, note: 'Versnelt Rune regeneratie — meer Obliterates per minuut' },
        { rank: '4', stat: 'Mastery',          bars: 3, note: 'Verhoogt Frost en Shadow schade — goed maar minder dan Crit' },
        { rank: '5', stat: 'Versatility',      bars: 2, note: 'Vlakke % bonus — minst waardevol voor Frost DK' },
      ],
    },
    en: {
      tip: '💡 Strength is your primary stat. Frost DK wants Crit for Killing Machine procs and Haste for faster Rune regeneration. Always take highest ilvl!',
      list: [
        { rank: '1', stat: 'Strength',        bars: 5, note: 'Primary stat — always choose highest ilvl' },
        { rank: '2', stat: 'Critical Strike',  bars: 5, note: 'More Crit = more Killing Machine procs = more damage' },
        { rank: '3', stat: 'Haste',            bars: 4, note: 'Speeds up Rune regeneration — more Obliterates per minute' },
        { rank: '4', stat: 'Mastery',          bars: 3, note: 'Increases Frost and Shadow damage — good but less than Crit' },
        { rank: '5', stat: 'Versatility',      bars: 2, note: 'Flat % bonus — least valuable for Frost DK' },
      ],
    }
  },

  cooldowns: {
    nl: [
      { spell: 'Pillar of Frost',       cd: '1 min',   effect: 'Verhoogt alle Frost schade + Strength',           when: 'On cooldown — opener en rotatie' },
      { spell: 'Remorseless Winter',    cd: '20 sec',  effect: 'AoE zone — schade + slow rondom jou',             when: 'On cooldown + bij meerdere targets' },
      { spell: 'Icebound Fortitude',    cd: '3 min',   effect: '30% schade reductie — 8 sec',                    when: 'Grote mechanic of zware schade inkomend' },
      { spell: 'Anti-Magic Shell',      cd: '1 min',   effect: 'Blokkeert magische schade volledig — 5 sec',      when: 'Magische AoE of zware magic mechanic' },
      { spell: 'Death Grip',            cd: '25 sec',  effect: 'Trekt vijand naar jou toe — instant',             when: 'Interrupt op afstand of vijand naar tank trekken' },
      { spell: 'Path of Frost',         cd: '0',       effect: 'Loopt over water — passieve vaardigheid',         when: 'Altijd actief in de wereld — geen CD' },
      { spell: 'Raise Dead',            cd: '2 min',   effect: 'Summon Ghoul — tijdelijke minion die helpt',      when: 'Extra DPS of snel een body nodig' },
    ],
    en: [
      { spell: 'Pillar of Frost',       cd: '1 min',   effect: 'Increases all Frost damage + Strength',          when: 'On cooldown — opener and rotation' },
      { spell: 'Remorseless Winter',    cd: '20 sec',  effect: 'AoE zone — damage + slow around you',            when: 'On cooldown + on multiple targets' },
      { spell: 'Icebound Fortitude',    cd: '3 min',   effect: '30% damage reduction — 8 sec',                   when: 'Major mechanic or heavy incoming damage' },
      { spell: 'Anti-Magic Shell',      cd: '1 min',   effect: 'Fully blocks magical damage — 5 sec',            when: 'Magic AoE or heavy magic mechanic' },
      { spell: 'Death Grip',            cd: '25 sec',  effect: 'Pulls enemy to you — instant',                   when: 'Interrupt at range or pull enemy to tank' },
      { spell: 'Path of Frost',         cd: '0',       effect: 'Walk on water — passive ability',                 when: 'Always active in the world — no CD' },
      { spell: 'Raise Dead',            cd: '2 min',   effect: 'Summon Ghoul — temporary minion that helps',     when: 'Extra DPS or quickly need a body' },
    ]
  },

  utility: {
    nl: [
      { spell: 'Death Grip',         type: 'Pull',      note: 'Trek vijand naar jou — uniek en krachtig in M+' },
      { spell: 'Mind Freeze',        type: 'Interrupt',  note: 'Jouw kick — altijd macro met Focus/Mouseover' },
      { spell: 'Anti-Magic Shell',   type: 'Defensief',  note: 'Blokkeert magic — essentieel bij magic-zware encounters' },
      { spell: 'Icebound Fortitude', type: 'Defensief',  note: '30% schade reductie — gebruik bij grote schade-pieken' },
      { spell: 'Death and Decay',    type: 'AoE Zone',   note: 'Plaatst een zone die schade doet — altijd bij packs' },
      { spell: 'Chains of Ice',      type: 'Slow',       note: 'Slow op 1 target — kiting tool' },
      { spell: 'Raise Dead',         type: 'Minion',     note: 'Summon Ghoul — extra DPS of nuttige helper' },
    ],
    en: [
      { spell: 'Death Grip',         type: 'Pull',       note: 'Pull enemy to you — unique and powerful in M+' },
      { spell: 'Mind Freeze',        type: 'Interrupt',  note: 'Your kick — always macro with Focus/Mouseover' },
      { spell: 'Anti-Magic Shell',   type: 'Defensive',  note: 'Blocks magic — essential on magic-heavy encounters' },
      { spell: 'Icebound Fortitude', type: 'Defensive',  note: '30% damage reduction — use on big damage spikes' },
      { spell: 'Death and Decay',    type: 'AoE Zone',   note: 'Places a zone that deals damage — always on packs' },
      { spell: 'Chains of Ice',      type: 'Slow',       note: 'Slow on 1 target — kiting tool' },
      { spell: 'Raise Dead',         type: 'Minion',     note: 'Summon Ghoul — extra DPS or useful helper' },
    ]
  },

  tips: {
    nl: [
      { icon: '💀', title: 'Killing Machine = gratis schade', text: 'Als Killing Machine proccet: direct Obliterate. Het is een gratis versterkte Obliterate — nooit laten verlopen!' },
      { icon: '❄️', title: 'Rime = gratis Howling Blast',     text: 'Rime proc = Howling Blast kost geen Rune en doet extra schade. Gebruik altijd direct — ook bij single target.' },
      { icon: '⚡', title: 'Rune circuit begrijpen',          text: 'Obliterate verbruikt Runes → Runes regeneren → genereren Runic Power → Frost Strike verbruikt RP. Nooit alle 6 Runes tegelijk gebruiken!' },
      { icon: '🫴', title: 'Death Grip in M+',                text: 'Death Grip is een van de nuttigste abilities in M+. Trek gevaarlijke casters naar de tank, trek boss-adds samen, of pull weglopende mobs terug.' },
      { icon: '🔮', title: 'Anti-Magic Shell = gratis Runes', text: 'AMS absorbeert magische schade EN genereert Runic Power. Gebruik hem actief bij magic-zware encounters — niet alleen defensief!' },
      { icon: '🛡️', title: 'Icebound Fortitude timing',      text: 'Gebruik vóór de grote klap, niet erna. Leer de encounter en activeer proactief. 30% reductie kan het verschil zijn.' },
      { icon: '☠️', title: 'Pillar of Frost timing',          text: 'Pillar of Frost is jouw burst cooldown. Altijd on cooldown gebruiken. Combineer met Remorseless Winter voor AoE burst.' },
      { icon: '🦶', title: 'Melee positie',                   text: 'Sta achter de boss — vermijd cleave. Plate armor = jij mag meer incasseren dan een clothie, maar blijf bewust van positionering.' },
    ],
    en: [
      { icon: '💀', title: 'Killing Machine = free damage',   text: 'When Killing Machine procs: immediately Obliterate. It is a free enhanced Obliterate — never let it expire!' },
      { icon: '❄️', title: 'Rime = free Howling Blast',       text: 'Rime proc = Howling Blast costs no Rune and deals extra damage. Always use immediately — even on single target.' },
      { icon: '⚡', title: 'Understanding the Rune circuit',  text: 'Obliterate spends Runes → Runes recharge → generate Runic Power → Frost Strike spends RP. Never use all 6 Runes at once!' },
      { icon: '🫴', title: 'Death Grip in M+',                text: 'Death Grip is one of the most useful abilities in M+. Pull dangerous casters to the tank, group boss adds together, or pull fleeing mobs back.' },
      { icon: '🔮', title: 'Anti-Magic Shell = free Runes',   text: 'AMS absorbs magic damage AND generates Runic Power. Use it actively on magic-heavy encounters — not just defensively!' },
      { icon: '🛡️', title: 'Icebound Fortitude timing',      text: 'Use it before the big hit, not after. Learn the encounter and activate proactively. 30% reduction can be the difference.' },
      { icon: '☠️', title: 'Pillar of Frost timing',          text: 'Pillar of Frost is your burst cooldown. Always use on cooldown. Combine with Remorseless Winter for AoE burst.' },
      { icon: '🦶', title: 'Melee positioning',               text: 'Stand behind the boss — avoid cleave. Plate armor = you can take more hits than a clothie, but stay aware of positioning.' },
    ]
  },

  macros: {
    nl: [
      { name: 'Mind Freeze (Focus Kick)', code: '#showtooltip Mind Freeze\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Mind Freeze', note: 'Interrupt op focus > mouseover > target. ESSENTIEEL!' },
      { name: 'Death Grip (mouseover)', code: '#showtooltip Death Grip\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Death Grip', note: 'Trek vijand op mouseover — trek casters naar de tank.' },
      { name: 'Pillar + Remorseless (burst)', code: '#showtooltip Pillar of Frost\n/cast Pillar of Frost\n/cast Remorseless Winter', note: 'Start burst window — beide tegelijk activeren.' },
      { name: 'Chains of Ice (mouseover slow)', code: '#showtooltip Chains of Ice\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Chains of Ice', note: 'Slow op mouseover — kiting zonder target te wisselen.' },
      { name: 'Anti-Magic Shell + Icebound combo', code: '#showtooltip Icebound Fortitude\n/cast Anti-Magic Shell\n/cast Icebound Fortitude', note: 'Maximale defensie in één druk — voor grote mechanic.' },
    ],
    en: [
      { name: 'Mind Freeze (Focus Kick)', code: '#showtooltip Mind Freeze\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Mind Freeze', note: 'Interrupt on focus > mouseover > target. ESSENTIAL!' },
      { name: 'Death Grip (mouseover)', code: '#showtooltip Death Grip\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Death Grip', note: 'Pull enemy on mouseover — pull casters to tank.' },
      { name: 'Pillar + Remorseless (burst)', code: '#showtooltip Pillar of Frost\n/cast Pillar of Frost\n/cast Remorseless Winter', note: 'Start burst window — activate both at the same time.' },
      { name: 'Chains of Ice (mouseover slow)', code: '#showtooltip Chains of Ice\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Chains of Ice', note: 'Slow on mouseover — kiting without switching target.' },
      { name: 'Anti-Magic Shell + Icebound combo', code: '#showtooltip Icebound Fortitude\n/cast Anti-Magic Shell\n/cast Icebound Fortitude', note: 'Maximum defense in one press — for major mechanics.' },
    ]
  },

  resource_info: {
    nl: {
      intro: 'Frost DK heeft 2 resources: 6 Runes (herstel automatisch) + Runic Power (0–100). Runes uitgeven → Runic Power verdienen → Runic Power uitgeven. Nooit cappen!',
      generate: [
        { spell: 'Obliterate',    note: 'Verbruikt 2 Runes → genereert ~40 RP' },
        { spell: 'Howling Blast', note: 'Verbruikt 1 Rune → genereert ~20 RP' },
        { spell: 'Frost Strike',  note: 'Verbruikt 40 RP (spender, geen generator)' },
        { spell: 'AMS',           note: 'Genereert RP bij geabsorbeerde magic schade' },
      ],
      spend: [
        { spell: 'Frost Strike',        note: 'Hoofd RP-spender — gebruik bij 80+ RP' },
        { spell: 'Glacial Advance',     note: 'AoE RP-spender bij meerdere targets' },
        { spell: 'Frostwyrm\'s Fury',  note: 'Grote AoE cooldown — RP-kosten' },
      ],
      pet_tip: 'Frost DK kan via talent een Gargoyle of Army of the Dead summon hebben. Raise Dead is altijd beschikbaar voor een tijdelijke Ghoul. Jouw echte kracht zit in Rune/RP management — niet in minions.',
      pets: [
        { type: 'Ghoul 🧟',         bonus: 'Tijdelijke minion — extra aanvallen',           use: 'Raise Dead — 2 min cooldown, altijd op cooldown gebruiken' },
        { type: 'Gargoyle 🦅',      bonus: 'Grote DPS-cooldown — schiet vanuit de lucht',   use: 'On cooldown — combineer met Pillar of Frost' },
      ],
    },
    en: {
      intro: 'Frost DK has 2 resources: 6 Runes (auto-recharge) + Runic Power (0–100). Spend Runes → earn Runic Power → spend Runic Power. Never cap either!',
      generate: [
        { spell: 'Obliterate',    note: 'Spends 2 Runes → generates ~40 RP' },
        { spell: 'Howling Blast', note: 'Spends 1 Rune → generates ~20 RP' },
        { spell: 'Frost Strike',  note: 'Spends 40 RP (spender, not generator)' },
        { spell: 'AMS',           note: 'Generates RP from absorbed magic damage' },
      ],
      spend: [
        { spell: 'Frost Strike',        note: 'Main RP spender — use at 80+ RP' },
        { spell: 'Glacial Advance',     note: 'AoE RP spender on multiple targets' },
        { spell: "Frostwyrm's Fury",   note: 'Major AoE cooldown — RP cost' },
      ],
      pet_tip: 'Frost DK can have a Gargoyle or Army of the Dead via talent. Raise Dead is always available for a temporary Ghoul. Your real strength is in Rune/RP management — not minions.',
      pets: [
        { type: 'Ghoul 🧟',         bonus: 'Temporary minion — extra attacks',                use: 'Raise Dead — 2 min cooldown, always use on cooldown' },
        { type: 'Gargoyle 🦅',      bonus: 'Major DPS cooldown — shoots from the air',        use: 'On cooldown — combine with Pillar of Frost' },
      ],
    }
  },

  consumables: {
    nl: [
      { type:'flask', name:'Flask of the Shattered Sun', effect:'Verhoogt Strength voor 1 uur.', note:'Altijd actief' },
      { type:'pot', name:'Potion of Recklessness', effect:'Strength boost bij burst.', note:'Op pull of Pillar of Frost' },
      { type:'food', name:'Silvermoon Parade (Feast)', effect:'+Strength en Stamina.', note:'Feast vragen' },
      { type:'food', name:'Royal Roast', effect:'Solo food.', note:'Backup' },
      { type:'rune', name:'Void-Touched Augment Rune', effect:'+Primaire stat.', note:'Altijd' },
    ],
    en: [
      { type:'flask', name:'Flask of the Shattered Sun', effect:'Increases Strength for 1 hour.', note:'Always active' },
      { type:'pot', name:'Potion of Recklessness', effect:'Strength boost during burst.', note:'On pull or Pillar of Frost' },
      { type:'food', name:'Silvermoon Parade (Feast)', effect:'+Strength and Stamina.', note:'Ask for feast' },
      { type:'food', name:'Royal Roast', effect:'Solo food.', note:'Backup' },
      { type:'rune', name:'Void-Touched Augment Rune', effect:'+Primary stat.', note:'Always' },
    ]
  },
};

if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
ALL_SPECS.push(SPEC_FROST_DK);

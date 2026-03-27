// ============================================================
// SPEC: Frost Mage
// WoW Midnight 12.0.1
// ============================================================

const SPEC_FROST_MAGE = {
  id: 'frost_mage',
  icon: '❄️',
  class: 'Mage',
  spec:  { nl: 'Frost', en: 'Frost'},
  role:  'dps',
  armor: 'Cloth',
  weapon: { nl: 'Staff / Wand + offhand', en: 'Staff / Wand + offhand'},
  resource: 'Mana',
  patch: '12.0.1',
  color: '#90caf9',

  summary: {
    nl: 'Ranged DPS met ijsmagie. Bouw procs op (Brain Freeze, Fingers of Frost) en geef ze uit voor zware spells. Sterke CC-opties en uitstekend voor beginners. Proc-management is de sleutel tot hoge DPS.',
    en: 'Ranged DPS with ice magic. Build up procs (Brain Freeze, Fingers of Frost) and spend them for heavy spells. Strong CC options and excellent for beginners. Proc management is the key to high DPS.'
  },

  pros: {
    nl: ['Geweldige CC — Frost Nova, Polymorph, Cone of Cold', 'Hoge burst via procs', 'Uitstekend voor beginners', 'Goede mobiliteit met Ice Floes', 'Sterke Bloodlust / Time Warp'],
    en: ['Excellent CC — Frost Nova, Polymorph, Cone of Cold', 'High burst via procs', 'Excellent for beginners', 'Good mobility with Ice Floes', 'Strong Bloodlust / Time Warp']
  },

  cons: {
    nl: ['Proc-afhankelijk — soms droge periodes zonder procs', 'Cloth armor — fragiel in melee', 'Mana management op lange encounters', 'Minder mobile dan melee specs', 'Squishier dan plate-klassen'],
    en: ['Proc-dependent — sometimes dry spells without procs', 'Cloth armor — fragile in melee', 'Mana management on long encounters', 'Less mobile than melee specs', 'Squishier than plate classes']
  },

  cheatsheet: {
    nl: {
      opener:   "Frostbolt × 3 → Frozen Orb → Ice Lance (Fingers of Frost) → Flurry (Brain Freeze) → Ice Lance × 2 → Frostbolt",
      single:   "Frostbolt (bouw procs) → Flurry (Brain Freeze!) → Ice Lance × 2 → Fingers of Frost → Frozen Orb on CD → Ebonbolt on CD",
      aoe:      "Frozen Orb → Blizzard → Ice Lance (Fingers of Frost) → Cone of Cold → Frost Nova (als in melee) → Blizzard herhalen",
      rules: [
        'Brain Freeze NOOIT verspillen — altijd direct Flurry',
        'Flurry altijd gevolgd door 2x Ice Lance',
        'Fingers of Frost = gratis empowered Ice Lance',
        'Frozen Orb on cooldown — genereert veel procs',
        'Nooit Frostbolt casten als je Fingers of Frost hebt',
        'Ice Floes gebruiken bij movement — cast loopt door',
        'Blizzard bij 3+ targets i.p.v. Frostbolt',
      ],
    },
    en: {
      opener:   "Frostbolt × 3 → Frozen Orb → Ice Lance (Fingers of Frost) → Flurry (Brain Freeze) → Ice Lance × 2 → Frostbolt",
      single:   "Frostbolt (build procs) → Flurry (Brain Freeze!) → Ice Lance × 2 → Fingers of Frost → Frozen Orb on CD → Ebonbolt on CD",
      aoe:      "Frozen Orb → Blizzard → Ice Lance (Fingers of Frost) → Cone of Cold → Frost Nova (if in melee) → Blizzard again",
      rules: [
        'NEVER waste Brain Freeze — always immediately Flurry',
        'Flurry always followed by 2x Ice Lance',
        'Fingers of Frost = free empowered Ice Lance',
        'Frozen Orb on cooldown — generates lots of procs',
        'Never cast Frostbolt when you have Fingers of Frost',
        'Use Ice Floes during movement — cast continues',
        'Blizzard on 3+ targets instead of Frostbolt',
      ],
    }
  },

  rotation: {
    nl: {
      apex_tip: '❄️ Procs uitleggen: Brain Freeze = je volgende Flurry is instant + hoge schade. Fingers of Frost = je volgende Ice Lance doet enorme schade. Beide nooit verspillen!',
      opener: [
        { step: 1, spell: 'Frostbolt × 3',    note: 'Bouw procs op — warmup' },
        { step: 2, spell: 'Frozen Orb',        note: 'On cooldown — grote proc-generator' },
        { step: 3, spell: 'Ice Lance',          note: 'Bij Fingers of Frost proc — instant, hoge schade' },
        { step: 4, spell: 'Flurry',            note: 'Bij Brain Freeze proc — ALTIJD direct gebruiken' },
        { step: 5, spell: 'Ice Lance × 2',     note: 'Direct na Flurry — frozen target = bonus schade' },
        { step: 6, spell: 'Ebonbolt',          note: 'Als getalenteerd — geeft altijd Brain Freeze' },
        { step: 7, spell: 'Frostbolt',         note: 'Filler — genereer nieuwe procs' },
      ],
      single: [
        { prio: '1', spell: 'Flurry (Brain Freeze)', note: 'ALTIJD direct bij proc — nooit verspillen',       importance: 'ALTIJD' },
        { prio: '2', spell: 'Ice Lance (Fingers of Frost)', note: 'ALTIJD direct bij proc — gratis schade',   importance: 'ALTIJD' },
        { prio: '3', spell: 'Frozen Orb',       note: 'On cooldown — start grote proc-window',               importance: 'ALTIJD' },
        { prio: '4', spell: 'Ebonbolt',         note: 'On cooldown — geeft altijd Brain Freeze proc',         importance: 'HOOG' },
        { prio: '5', spell: 'Ice Lance × 2',    note: 'Direct na Flurry — target is frozen = bonus',          importance: 'HOOG' },
        { prio: '6', spell: 'Frostbolt',        note: 'Filler — bouwt procs op',                              importance: 'FILLER' },
      ],
      aoe: [
        { prio: '1', spell: 'Frozen Orb',      note: 'On cooldown — raakt alles + proc generator' },
        { prio: '2', spell: 'Blizzard',         note: 'Kanaal bij 3+ targets — hoge AoE schade' },
        { prio: '3', spell: 'Ice Lance',        note: 'Bij Fingers of Frost proc — ook bij AoE' },
        { prio: '4', spell: 'Cone of Cold',     note: 'On cooldown bij melee packs — instant AoE' },
        { prio: '5', spell: 'Frost Nova',       note: 'Rootst pack — veilige afstand + bonus schade' },
        { prio: '6', spell: 'Frostbolt',        note: 'Filler bij minder dan 3 targets' },
      ],
    },
    en: {
      apex_tip: '❄️ Procs explained: Brain Freeze = your next Flurry is instant + high damage. Fingers of Frost = your next Ice Lance does massive damage. Never waste either!',
      opener: [
        { step: 1, spell: 'Frostbolt × 3',    note: 'Build procs — warmup' },
        { step: 2, spell: 'Frozen Orb',        note: 'On cooldown — major proc generator' },
        { step: 3, spell: 'Ice Lance',          note: 'On Fingers of Frost proc — instant, high damage' },
        { step: 4, spell: 'Flurry',            note: 'On Brain Freeze proc — ALWAYS use immediately' },
        { step: 5, spell: 'Ice Lance × 2',     note: 'Directly after Flurry — frozen target = bonus damage' },
        { step: 6, spell: 'Ebonbolt',          note: 'If talented — always gives Brain Freeze' },
        { step: 7, spell: 'Frostbolt',         note: 'Filler — generate new procs' },
      ],
      single: [
        { prio: '1', spell: 'Flurry (Brain Freeze)',       note: 'ALWAYS immediately on proc — never waste',    importance: 'ALWAYS' },
        { prio: '2', spell: 'Ice Lance (Fingers of Frost)', note: 'ALWAYS immediately on proc — free damage',   importance: 'ALWAYS' },
        { prio: '3', spell: 'Frozen Orb',       note: 'On cooldown — starts major proc window',                importance: 'ALWAYS' },
        { prio: '4', spell: 'Ebonbolt',         note: 'On cooldown — always gives Brain Freeze proc',           importance: 'HIGH' },
        { prio: '5', spell: 'Ice Lance × 2',    note: 'Directly after Flurry — target is frozen = bonus',       importance: 'HIGH' },
        { prio: '6', spell: 'Frostbolt',        note: 'Filler — builds procs',                                  importance: 'FILLER' },
      ],
      aoe: [
        { prio: '1', spell: 'Frozen Orb',      note: 'On cooldown — hits everything + proc generator' },
        { prio: '2', spell: 'Blizzard',         note: 'Channel on 3+ targets — high AoE damage' },
        { prio: '3', spell: 'Ice Lance',        note: 'On Fingers of Frost proc — also during AoE' },
        { prio: '4', spell: 'Cone of Cold',     note: 'On cooldown on melee packs — instant AoE' },
        { prio: '5', spell: 'Frost Nova',       note: 'Roots pack — safe distance + bonus damage' },
        { prio: '6', spell: 'Frostbolt',        note: 'Filler on fewer than 3 targets' },
      ],
    }
  },

  stats: {
    nl: {
      tip: '💡 Intellect is primaire stat — altijd hoogste ilvl pakken. Frost Mage wil veel Crit (procs!) en Haste (snellere casts + meer procs per minuut).',
      list: [
        { rank: '1', stat: 'Intellect',       bars: 5, note: 'Primaire stat — verhoogt alle schade' },
        { rank: '2', stat: 'Critical Strike',  bars: 5, note: 'Meer Crit = meer Brain Freeze procs = meer schade' },
        { rank: '3', stat: 'Haste',            bars: 4, note: 'Snellere casts + meer Frostbolts per minuut = meer procs' },
        { rank: '4', stat: 'Versatility',      bars: 3, note: 'Vlakke schade + defensief — solide keuze' },
        { rank: '5', stat: 'Mastery',          bars: 2, note: 'Verhoogt Frozen schade — minder waardevol dan Crit' },
      ],
    },
    en: {
      tip: '💡 Intellect is primary stat — always take highest ilvl. Frost Mage wants lots of Crit (procs!) and Haste (faster casts + more procs per minute).',
      list: [
        { rank: '1', stat: 'Intellect',       bars: 5, note: 'Primary stat — increases all damage' },
        { rank: '2', stat: 'Critical Strike',  bars: 5, note: 'More Crit = more Brain Freeze procs = more damage' },
        { rank: '3', stat: 'Haste',            bars: 4, note: 'Faster casts + more Frostbolts per minute = more procs' },
        { rank: '4', stat: 'Versatility',      bars: 3, note: 'Flat damage + defensive — solid choice' },
        { rank: '5', stat: 'Mastery',          bars: 2, note: 'Increases Frozen damage — less valuable than Crit' },
      ],
    }
  },

  cooldowns: {
    nl: [
      { spell: 'Frozen Orb',          cd: '1 min',   effect: 'Orb die door de kamer beweegt + proc generator',   when: 'On cooldown — opener en rotatie' },
      { spell: 'Icy Veins',           cd: '3 min',   effect: 'Haste +30% — verhoogt cast snelheid enorm',         when: 'On cooldown — combineer met Frozen Orb' },
      { spell: 'Time Warp',           cd: '5 min',   effect: 'Bloodlust-equivalent — haste voor gehele groep',    when: 'Op aanwijzing tank of op boss-pull' },
      { spell: 'Cold Snap',           cd: '5 min',   effect: 'Reset Frozen Orb en Cone of Cold cooldowns',        when: 'Op grote burst momenten' },
      { spell: 'Ice Block',           cd: '4 min',   effect: '100% immune maar bevroren — 10 sec',                when: 'Noodsituatie — oneshot mechanics vermijden' },
      { spell: 'Greater Invisibility', cd: '2 min',  effect: 'Onzichtbaar + 60% schade reductie gedurende',       when: 'Aggro dump of mechanic vermijden' },
      { spell: 'Mirror Image',        cd: '2 min',   effect: 'Drie beelden die aanvallen + aggro-dump',           when: 'Opener of grote pull — bonus DPS + veiligheid' },
    ],
    en: [
      { spell: 'Frozen Orb',          cd: '1 min',   effect: 'Orb moving through room + proc generator',         when: 'On cooldown — opener and rotation' },
      { spell: 'Icy Veins',           cd: '3 min',   effect: 'Haste +30% — massively increases cast speed',      when: 'On cooldown — combine with Frozen Orb' },
      { spell: 'Time Warp',           cd: '5 min',   effect: 'Bloodlust equivalent — haste for entire group',     when: 'On instruction from tank or boss pull' },
      { spell: 'Cold Snap',           cd: '5 min',   effect: 'Resets Frozen Orb and Cone of Cold cooldowns',     when: 'On major burst moments' },
      { spell: 'Ice Block',           cd: '4 min',   effect: '100% immune but frozen — 10 sec',                  when: 'Emergency — avoid one-shot mechanics' },
      { spell: 'Greater Invisibility', cd: '2 min',  effect: 'Invisible + 60% damage reduction while active',    when: 'Aggro dump or avoid mechanic' },
      { spell: 'Mirror Image',        cd: '2 min',   effect: 'Three images attacking + aggro dump',               when: 'Opener or big pull — bonus DPS + safety' },
    ]
  },

  utility: {
    nl: [
      { spell: 'Counterspell',      type: 'Interrupt', note: 'Jouw kick + silences school 6 sec — essentieel in M+!' },
      { spell: 'Frost Nova',        type: 'Root/CC',   note: 'Rootst alle vijanden in melee range — kiting tool' },
      { spell: 'Polymorph',         type: 'CC',        note: 'Transformeert 1 target 60 sec — breekt bij schade' },
      { spell: 'Time Warp',         type: 'Buff',      note: 'Groeps-Bloodlust — groot voordeel voor de raid/party' },
      { spell: 'Cone of Cold',      type: 'Slow/AoE',  note: 'AoE slow + schade — goed voor kiting packs' },
      { spell: 'Ice Block',         type: 'Survival',  note: 'Volledig immune — absolute noodknop' },
      { spell: 'Spellsteal',        type: 'Utility',   note: 'Steel een buff van vijand — krachtig in M+' },
    ],
    en: [
      { spell: 'Counterspell',      type: 'Interrupt', note: 'Your kick + silences school 6 sec — essential in M+!' },
      { spell: 'Frost Nova',        type: 'Root/CC',   note: 'Roots all enemies in melee range — kiting tool' },
      { spell: 'Polymorph',         type: 'CC',        note: 'Transforms 1 target for 60 sec — breaks on damage' },
      { spell: 'Time Warp',         type: 'Buff',      note: 'Group Bloodlust — huge advantage for raid/party' },
      { spell: 'Cone of Cold',      type: 'Slow/AoE',  note: 'AoE slow + damage — great for kiting packs' },
      { spell: 'Ice Block',         type: 'Survival',  note: 'Fully immune — absolute emergency button' },
      { spell: 'Spellsteal',        type: 'Utility',   note: 'Steal a buff from enemy — powerful in M+' },
    ]
  },

  tips: {
    nl: [
      { icon: '❄️', title: 'Brain Freeze nooit verspillen',  text: 'Als Brain Freeze proccet: gebruik DIRECT Flurry. Dan 2x Ice Lance — het target is bevroren na Flurry en Ice Lance doet dan bonus schade.' },
      { icon: '🧊', title: 'Fingers of Frost = gratis schade', text: 'Fingers of Frost maakt je volgende Ice Lance super krachtig. Nooit Frostbolt casten als je deze proc actief hebt.' },
      { icon: '🌀', title: 'Frozen Orb on cooldown',          text: 'Frozen Orb is jouw grootste proc-generator. Gebruik hem altijd zodra hij klaar is. Beweeg zelf naar de orb toe — hij genereert meer Fingers of Frost als je er dichtbij bent.' },
      { icon: '🐑', title: 'Polymorph in M+',                 text: 'Polymorph is de beste single-target CC in het spel. Coördineer in M+ wie welk target polymorpt. Reken op de tank te wachten voor de pull.' },
      { icon: '⏩', title: 'Ice Floes bij movement',          text: 'Moet je bewegen? Activeer Ice Floes — je kunt dan Frostbolt casten terwijl je loopt. Probeer dit te doen voor mechanics.' },
      { icon: '🪄', title: 'Spellsteal is krachtig',          text: 'In M+: veel vijanden hebben buffs die je kunt stelen. Spellsteal kan fights drastisch makkelijker maken. Leer welke mobs wat hebben.' },
      { icon: '🪞', title: 'Mirror Image = aggro dump',       text: 'Gebruik Mirror Image direct na de opener — geeft je extra DPS EN stuurt aggro weg. Vraag de tank om even te wachten.' },
      { icon: '🧊', title: 'Ice Block = laatste redmiddel',    text: 'Ice Block maakt je immune maar je kunt niet aanvallen. Gebruik alleen voor mechanics die je anders one-shotten. Cooldown is lang!' },
    ],
    en: [
      { icon: '❄️', title: 'Never waste Brain Freeze',        text: 'When Brain Freeze procs: use Flurry IMMEDIATELY. Then 2x Ice Lance — the target is frozen after Flurry and Ice Lance deals bonus damage.' },
      { icon: '🧊', title: 'Fingers of Frost = free damage',  text: 'Fingers of Frost makes your next Ice Lance super powerful. Never cast Frostbolt when you have this proc active.' },
      { icon: '🌀', title: 'Frozen Orb on cooldown',          text: 'Frozen Orb is your biggest proc generator. Always use it as soon as it is ready. Move toward the orb — it generates more Fingers of Frost when you are nearby.' },
      { icon: '🐑', title: 'Polymorph in M+',                 text: 'Polymorph is the best single-target CC in the game. Coordinate in M+ who polymorphs which target. Wait for the tank to pull.' },
      { icon: '⏩', title: 'Ice Floes during movement',       text: 'Do you need to move? Activate Ice Floes — you can then cast Frostbolt while running. Try to do this before mechanics hit.' },
      { icon: '🪄', title: 'Spellsteal is powerful',          text: 'In M+: many enemies have buffs you can steal. Spellsteal can make fights drastically easier. Learn which mobs have what.' },
      { icon: '🪞', title: 'Mirror Image = aggro dump',       text: 'Use Mirror Image directly after the opener — gives you bonus DPS AND redirects aggro. Ask the tank to wait a moment.' },
      { icon: '🧊', title: 'Ice Block = last resort',         text: 'Ice Block makes you immune but you cannot attack. Only use for mechanics that would otherwise one-shot you. Cooldown is long!' },
    ]
  },

  macros: {
    nl: [
      { name: 'Counterspell (Focus Kick)', code: '#showtooltip Counterspell\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Counterspell', note: 'Interrupt op focus > mouseover > target. ESSENTIEEL!' },
      { name: 'Frozen Orb + Icy Veins', code: '#showtooltip Icy Veins\n/cast Icy Veins\n/cast Frozen Orb', note: 'Burst window starter — activeer altijd samen.' },
      { name: 'Polymorph (mouseover)', code: '#showtooltip Polymorph\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Polymorph', note: 'CC zonder target te wisselen — snel en efficient.' },
      { name: 'Frost Nova + Ice Block combi', code: '#showtooltip Ice Block\n/cast Frost Nova\n/cast Ice Block', note: 'Root alles en blokkeer daarna — totale veiligheid.' },
      { name: 'Spellsteal (mouseover)', code: '#showtooltip Spellsteal\n/cast [@mouseover,harm][@target,harm] Spellsteal', note: 'Steel buff van vijand op mouseover — handig in M+.' },
    ],
    en: [
      { name: 'Counterspell (Focus Kick)', code: '#showtooltip Counterspell\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Counterspell', note: 'Interrupt on focus > mouseover > target. ESSENTIAL!' },
      { name: 'Frozen Orb + Icy Veins', code: '#showtooltip Icy Veins\n/cast Icy Veins\n/cast Frozen Orb', note: 'Burst window starter — always activate together.' },
      { name: 'Polymorph (mouseover)', code: '#showtooltip Polymorph\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Polymorph', note: 'CC without switching target — fast and efficient.' },
      { name: 'Frost Nova + Ice Block combo', code: '#showtooltip Ice Block\n/cast Frost Nova\n/cast Ice Block', note: 'Root everything then block — total safety.' },
      { name: 'Spellsteal (mouseover)', code: '#showtooltip Spellsteal\n/cast [@mouseover,harm][@target,harm] Spellsteal', note: 'Steal buff from enemy on mouseover — handy in M+.' },
    ]
  },

  resource_info: {
    nl: {
      intro: 'Frost Mage gebruikt Mana maar loopt zelden leeg. Bij lange fights: let op Mana en gebruik Evocation als noodknop. In de praktijk speel je op procs, niet op Mana.',
      generate: [
        { spell: 'Passief herstel', note: 'Mana herstelt automatisch — zelden een probleem' },
        { spell: 'Evocation',       note: '6 sec kanaal: Mana herstelt volledig — noodknop' },
      ],
      spend: [
        { spell: 'Frostbolt',   note: 'Hoofd Mana-verbruiker — laag verbruik' },
        { spell: 'Blizzard',    note: 'AoE kanaal — hogere Mana-kosten' },
        { spell: 'Polymorph',   note: 'CC — Mana-kosten maar nooit een probleem' },
      ],
      pet_tip: 'Frost Mage heeft geen pet. In plaats daarvan heb je een Water Elemental bij sommige talents — dit is jouw extra DPS-source en geeft extra Fingers of Frost procs.',
      pets: [
        { type: 'Water Elemental 💧', bonus: 'Extra aanvallen + Fingers of Frost procs', use: 'Automatisch summonen via talent — altijd actief houden' },
      ],
    },
    en: {
      intro: 'Frost Mage uses Mana but rarely runs out. On long fights: watch your Mana and use Evocation as an emergency button. In practice you play around procs, not Mana.',
      generate: [
        { spell: 'Passive regen', note: 'Mana restores automatically — rarely a problem' },
        { spell: 'Evocation',    note: '6 sec channel: Mana fully restores — emergency button' },
      ],
      spend: [
        { spell: 'Frostbolt',  note: 'Main Mana spender — low cost' },
        { spell: 'Blizzard',   note: 'AoE channel — higher Mana cost' },
        { spell: 'Polymorph',  note: 'CC — Mana cost but never a problem' },
      ],
      pet_tip: 'Frost Mage has no permanent pet. With some talents you have a Water Elemental — this is your extra DPS source and generates additional Fingers of Frost procs.',
      pets: [
        { type: 'Water Elemental 💧', bonus: 'Extra attacks + Fingers of Frost procs', use: 'Auto-summon via talent — always keep active' },
      ],
    }
  },

  consumables: {
    nl: [
      { type:'flask', name:'Flask of the Magisters', effect:'Verhoogt Intellect voor 1 uur.', note:'Altijd actief' },
      { type:'pot', name:'Potion of Recklessness', effect:'Intellect boost bij burst.', note:'Op pull of Icy Veins' },
      { type:'food', name:'Silvermoon Parade (Feast)', effect:'+Intellect en Stamina.', note:'Feast vragen' },
      { type:'food', name:'Royal Roast', effect:'Solo food.', note:'Backup' },
      { type:'rune', name:'Void-Touched Augment Rune', effect:'+Primaire stat.', note:'Altijd' },
    ],
    en: [
      { type:'flask', name:'Flask of the Magisters', effect:'Increases Intellect for 1 hour.', note:'Always active' },
      { type:'pot', name:'Potion of Recklessness', effect:'Intellect boost during burst.', note:'On pull or Icy Veins' },
      { type:'food', name:'Silvermoon Parade (Feast)', effect:'+Intellect and Stamina.', note:'Ask for feast' },
      { type:'food', name:'Royal Roast', effect:'Solo food.', note:'Backup' },
      { type:'rune', name:'Void-Touched Augment Rune', effect:'+Primary stat.', note:'Always' },
    ]
  },
};

if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
ALL_SPECS.push(SPEC_FROST_MAGE);

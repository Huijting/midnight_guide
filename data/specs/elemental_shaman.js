if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_ELEMENTAL_SHAMAN = {
  id: 'elemental_shaman',
  icon: '⚡',
  class: 'Shaman',
  spec:   { nl: 'Elemental', en: 'Elemental'},
  role:   'dps',
  armor:  'Mail',
  weapon: { nl: 'One-handed or two-handed + offhand', en: 'One-handed or two-handed + offhand'},
  resource: 'Maelstrom',
  patch: '1.0',
  color: '#0070DE',

  summary: {
    nl: 'Elemental Shaman is een bliksem- en vuur-gebaseerde ranged DPS. Draait om Stormkeeper en Lava Surge procs, met uitstekende AoE via Earthquake en Chain Lightning.',
    en: 'Elemental Shaman is a lightning and fire-based ranged DPS. Revolves around Stormkeeper and Lava Surge procs, with excellent AoE via Earthquake and Chain Lightning.'
  },
  pros: {
    nl: ['Sterke burst AoE via Chain Lightning + Stormkeeper', 'Uitstekende utility (Bloodlust, interrupts, purge)', 'Goede sustained single target', 'Lava Surge procs = gratis Lava Burst'],
    en: ['Strong burst AoE via Chain Lightning + Stormkeeper', 'Excellent utility (Bloodlust, interrupts, purge)', 'Good sustained single target', 'Lava Surge procs = free Lava Burst']
  },
  cons: {
    nl: ['Proc-afhankelijk — slechte procs = slechte schade', 'Kwetsbaar bij movement — meeste casts zijn niet instant', 'Maelstrom management vereist aandacht'],
    en: ['Proc-dependent — bad procs = bad damage', 'Vulnerable during movement — most casts are not instant', 'Maelstrom management requires attention']
  },

  cheatsheet: {
    nl: {
      opener: 'Flame Shock → Lava Burst → Stormkeeper → Chain Lightning x2 → Lightning Bolt spam',
      single: 'Flame Shock actief → Lava Burst (altijd prio) → Lightning Bolt → Earthquake bij 60+ Maelstrom',
      aoe:    'Flame Shock verspreiden → Stormkeeper → Chain Lightning spam → Earthquake dumpen',
      rules: [
        'Flame Shock altijd actief op hoofdtarget',
        'Lava Burst heeft altijd prioriteit — instant als Lava Surge proc',
        'Stormkeeper: gebruik Chain Lightning x2 direct erna',
        'Earthquake bij 60+ Maelstrom als er 2+ targets zijn',
        'Icefury proc direct opgebruiken met Frost Shock x4',
      ],
    },
    en: {
      opener: 'Flame Shock → Lava Burst → Stormkeeper → Chain Lightning x2 → Lightning Bolt spam',
      single: 'Flame Shock active → Lava Burst (always prio) → Lightning Bolt → Earthquake at 60+ Maelstrom',
      aoe:    'Spread Flame Shock → Stormkeeper → Chain Lightning spam → Earthquake dump',
      rules: [
        'Flame Shock always active on main target',
        'Lava Burst always has priority — instant with Lava Surge proc',
        'Stormkeeper: use Chain Lightning x2 immediately after',
        'Earthquake at 60+ Maelstrom when 2+ targets present',
        'Icefury proc spend immediately with Frost Shock x4',
      ],
    }
  },

  rotation: {
    nl: {
      apex_tip: '💡 Stormkeeper + Chain Lightning = je grootste AoE burst. Bewaar Stormkeeper voor grote packs in M+!',
      opener: [
        { spell: 'Flame Shock', why: 'DoT aanleggen — triggert Lava Surge procs' },
        { spell: 'Lava Burst', why: 'Altijd prio — 100% crit als Flame Shock actief' },
        { spell: 'Stormkeeper', why: 'Grote cooldown — empowert Chain Lightning' },
        { spell: 'Chain Lightning x2', why: 'Met Stormkeeper: enorme AoE schade' },
        { spell: 'Lightning Bolt', why: 'Single target filler' },
      ],
      single: [
        { spell: 'Lava Burst', why: 'Altijd prioriteit — instant bij Lava Surge proc' },
        { spell: 'Flame Shock', why: 'Hernieuwen als <5 sec resterend' },
        { spell: 'Earthquake', why: '60+ Maelstrom op 2+ targets, anders Earth Shock' },
        { spell: 'Earth Shock', why: '60+ Maelstrom op single target — Maelstrom dump' },
        { spell: 'Lightning Bolt', why: 'Filler, genereert Maelstrom' },
      ],
      aoe: [
        { spell: 'Flame Shock verspreiden', why: 'Op elk target via Primordial Wave of handmatig' },
        { spell: 'Stormkeeper', why: 'Empowert de volgende 2 Chain Lightnings enorm' },
        { spell: 'Chain Lightning', why: 'Raakt tot 5 targets, genereert veel Maelstrom' },
        { spell: 'Earthquake', why: '60+ Maelstrom, maximaal AoE schade' },
        { spell: 'Lava Burst', why: 'Proc: instant, gebruik altijd direct op' },
      ],
    },
    en: {
      apex_tip: '💡 Stormkeeper + Chain Lightning = your biggest AoE burst. Save Stormkeeper for large M+ packs!',
      opener: [
        { spell: 'Flame Shock', why: 'Apply DoT — triggers Lava Surge procs' },
        { spell: 'Lava Burst', why: 'Always prio — 100% crit with Flame Shock active' },
        { spell: 'Stormkeeper', why: 'Major cooldown — empowers Chain Lightning' },
        { spell: 'Chain Lightning x2', why: 'With Stormkeeper: massive AoE damage' },
        { spell: 'Lightning Bolt', why: 'Single target filler' },
      ],
      single: [
        { spell: 'Lava Burst', why: 'Always priority — instant with Lava Surge proc' },
        { spell: 'Flame Shock', why: 'Refresh when <5 sec remaining' },
        { spell: 'Earthquake', why: '60+ Maelstrom at 2+ targets, otherwise Earth Shock' },
        { spell: 'Earth Shock', why: '60+ Maelstrom at single target — Maelstrom dump' },
        { spell: 'Lightning Bolt', why: 'Filler, generates Maelstrom' },
      ],
      aoe: [
        { spell: 'Spread Flame Shock', why: 'On each target via Primordial Wave or manually' },
        { spell: 'Stormkeeper', why: 'Massively empowers the next 2 Chain Lightnings' },
        { spell: 'Chain Lightning', why: 'Hits up to 5 targets, generates lots of Maelstrom' },
        { spell: 'Earthquake', why: '60+ Maelstrom, maximum AoE damage' },
        { spell: 'Lava Burst', why: 'Proc: instant, always use immediately' },
      ],
    }
  },

  stats: {
    nl: {
      tip: 'Crit is erg waardevol voor Elemental — Lava Burst crittet altijd als Flame Shock actief is.',
      list: [
        { rank:1, stat:'Intellect',       bars:5, note:'Primaire stat' },
        { rank:2, stat:'Critical Strike', bars:4, note:'Vergroot Lava Burst schade enorm' },
        { rank:3, stat:'Haste',           bars:3, note:'Meer casts, meer Maelstrom' },
        { rank:4, stat:'Mastery',         bars:3, note:'Verhoogt overload proc kans' },
        { rank:5, stat:'Versatility',     bars:1, note:'Laagste prioriteit' },
      ],
    },
    en: {
      tip: 'Crit is very valuable for Elemental — Lava Burst always crits when Flame Shock is active.',
      list: [
        { rank:1, stat:'Intellect',       bars:5, note:'Primary stat' },
        { rank:2, stat:'Critical Strike', bars:4, note:'Massively increases Lava Burst damage' },
        { rank:3, stat:'Haste',           bars:3, note:'More casts, more Maelstrom' },
        { rank:4, stat:'Mastery',         bars:3, note:'Increases overload proc chance' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lowest priority' },
      ],
    }
  },

  cooldowns: {
    nl: [
      { spell:'Stormkeeper',     cd:'1 min',   effect:'Empowert volgende 2 Chain Lightnings / Lightning Bolts', when:'AoE: bewaar voor grote packs. ST: op pull' },
      { spell:'Bloodlust/Heroism', cd:'10 min', effect:'Groep-wide haste boost 40 sec', when:'Overleg met groep — standaard bij 20% HP of pull' },
      { spell:'Primordial Wave', cd:'45 sec',  effect:'Verspreidt Flame Shock naar alle targets + Maelstrom', when:'AoE packs — essentieel voor spread' },
      { spell:'Ancestral Swiftness', cd:'1 min', effect:'Volgende cast instant', when:'Tijdens movement voor gratis Lava Burst' },
      { spell:'Astral Shift',    cd:'1.5 min', effect:'40% schade reductie 12 sec', when:'Grote mechanic of lage HP' },
    ],
    en: [
      { spell:'Stormkeeper',     cd:'1 min',   effect:'Empowers next 2 Chain Lightnings / Lightning Bolts', when:'AoE: save for large packs. ST: on pull' },
      { spell:'Bloodlust/Heroism', cd:'10 min', effect:'Group-wide haste boost 40 sec', when:'Discuss with group — standard at 20% HP or pull' },
      { spell:'Primordial Wave', cd:'45 sec',  effect:'Spreads Flame Shock to all targets + Maelstrom', when:'AoE packs — essential for spread' },
      { spell:'Ancestral Swiftness', cd:'1 min', effect:'Next cast instant', when:'During movement for free Lava Burst' },
      { spell:'Astral Shift',    cd:'1.5 min', effect:'40% damage reduction 12 sec', when:'Major mechanic or low HP' },
    ]
  },

  utility: {
    nl: [
      { spell:'Bloodlust/Heroism', type:'Groep',    note:'Sterkste groepsbuff in het spel — communiceer wanneer' },
      { spell:'Wind Shear',        type:'Interrupt', note:'Snelle interrupt op 12 sec CD' },
      { spell:'Purge',             type:'Dispel',   note:'Verwijdert Magic buff van vijand' },
      { spell:'Capacitor Totem',   type:'AoE Stun', note:'Stunt alles rondom totem na 2 sec' },
      { spell:'Earthgrab Totem',   type:'Root',     note:'Root alle vijanden rondom totem' },
    ],
    en: [
      { spell:'Bloodlust/Heroism', type:'Group',    note:'Strongest group buff in the game — communicate timing' },
      { spell:'Wind Shear',        type:'Interrupt', note:'Fast interrupt on 12 sec CD' },
      { spell:'Purge',             type:'Dispel',   note:'Removes Magic buff from enemy' },
      { spell:'Capacitor Totem',   type:'AoE Stun', note:'Stuns everything around totem after 2 sec' },
      { spell:'Earthgrab Totem',   type:'Root',     note:'Roots all enemies around totem' },
    ]
  },

  tips: {
    nl: [
      { icon:'⚡', title:'Lava Surge proc = instant priority', text:'Als Lava Surge proc, gebruik Lava Burst direct — het is instant én doet maximale schade. Laat het nooit expiren.' },
      { icon:'🌋', title:'Stormkeeper voor packs bewaren', text:'In M+: gebruik Stormkeeper niet op trash met 1-2 mobs. Bewaar het voor grote packs van 4+ mobs voor maximale AoE schade.' },
      { icon:'🩸', title:'Flame Shock verspreiden', text:'Met Primordial Wave kan je Flame Shock direct naar alle targets sturen. Dit is je AoE setup — doe dit altijd als eerste op een pack.' },
      { icon:'💨', title:'Movement afhandelen', text:'Tijdens movement: gooi instant spells (Flame Shock, Lava Burst bij proc, Frost Shock). Vermijd staande te blijven casten als je moet bewegen.' },
      { icon:'🥁', title:'Bloodlust communiceren', text:'Elemental kan Bloodlust geven — vraag je team wanneer ze het willen. Standaard: op pull bij boss of bij 20% HP in execute fase.' },
    ],
    en: [
      { icon:'⚡', title:'Lava Surge proc = instant priority', text:'When Lava Surge procs, use Lava Burst immediately — it\'s instant AND deals maximum damage. Never let it expire.' },
      { icon:'🌋', title:'Save Stormkeeper for packs', text:'In M+: don\'t use Stormkeeper on 1-2 mob trash. Save it for large 4+ mob packs for maximum AoE damage.' },
      { icon:'🩸', title:'Spreading Flame Shock', text:'With Primordial Wave you can send Flame Shock directly to all targets. This is your AoE setup — always do this first on a pack.' },
      { icon:'💨', title:'Handling movement', text:'During movement: cast instant spells (Flame Shock, Lava Burst on proc, Frost Shock). Avoid standing still casting when you need to move.' },
      { icon:'🥁', title:'Communicating Bloodlust', text:'Elemental can provide Bloodlust — ask your team when they want it. Standard: on boss pull or at 20% HP in execute phase.' },
    ]
  },

  macros: {
    nl: [
      { name:'Stormkeeper + Chain Lightning', code:'/cast Stormkeeper\n/cast Chain Lightning', note:'Start de AoE burst direct — geen vertraging tussen de twee.' },
      { name:'Flame Shock op mouseover', code:'/cast [@mouseover,harm][] Flame Shock', note:'Snel Flame Shock verspreiden zonder van target te wisselen.' },
      { name:'Capacitor Totem op cursor', code:'/cast [@cursor] Capacitor Totem', note:'Gooi de stun totem precies op de plek van de mobs.' },
    ],
    en: [
      { name:'Stormkeeper + Chain Lightning', code:'/cast Stormkeeper\n/cast Chain Lightning', note:'Start the AoE burst immediately — no delay between the two.' },
      { name:'Flame Shock on mouseover', code:'/cast [@mouseover,harm][] Flame Shock', note:'Quickly spread Flame Shock without switching targets.' },
      { name:'Capacitor Totem at cursor', code:'/cast [@cursor] Capacitor Totem', note:'Place the stun totem exactly where the mobs are.' },
    ]
  },

  resource_info: {
    nl: {
      intro: 'Elemental gebruikt Maelstrom (0-100) als resource. Maelstrom bouwt op via Lightning Bolt en Chain Lightning, en geef je uit aan Earth Shock of Earthquake.',
      generate: [
        'Lightning Bolt — 8 Maelstrom per cast',
        'Chain Lightning — 6 Maelstrom per doel geraakt',
        'Lava Burst — 10 Maelstrom bij crit',
        'Stormkeeper-empowered spells — extra Maelstrom',
      ],
      spend: [
        'Earth Shock (60+ Maelstrom) — single target dump',
        'Earthquake (60+ Maelstrom) — AoE dump op 2+ targets',
      ],
      pet_tip: '💡 Nooit op 100 Maelstrom zitten — dump met Earth Shock of Earthquake zodra je 60+ bereikt!',
      pets: [],
    },
    en: {
      intro: 'Elemental uses Maelstrom (0-100) as its resource. Maelstrom builds up via Lightning Bolt and Chain Lightning, and is spent on Earth Shock or Earthquake.',
      generate: [
        'Lightning Bolt — 8 Maelstrom per cast',
        'Chain Lightning — 6 Maelstrom per target hit',
        'Lava Burst — 10 Maelstrom on crit',
        'Stormkeeper-empowered spells — extra Maelstrom',
      ],
      spend: [
        'Earth Shock (60+ Maelstrom) — single target dump',
        'Earthquake (60+ Maelstrom) — AoE dump at 2+ targets',
      ],
      pet_tip: '💡 Never sit at 100 Maelstrom — dump with Earth Shock or Earthquake as soon as you reach 60+!',
      pets: [],
    }
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Magisters',  effect:'Verhoogt Intellect significant voor 1 uur.',   note:'Altijd actief in M+ en raid' },
      { type:'pot',    name:'Potion of Recklessness',        effect:'Grote Intellect boost 25 sec.',                note:'Gebruik bij Stormkeeper burst window' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Intellect en Stamina via groepsfeast.',       note:'Feast vragen aan tank/healer' },
      { type:'food',   name:'Royal Roast',    effect:'Solo food — hoge Intellect bonus.',            note:'Backup als geen feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primaire stat 1 uur.',                        note:'Altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Magisters',  effect:'Significantly increases Intellect for 1 hour.', note:'Always active in M+ and raid' },
      { type:'pot',    name:'Potion of Recklessness',        effect:'Large Intellect boost 25 sec.',               note:'Use during Stormkeeper burst window' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Intellect and Stamina via group feast.',     note:'Ask tank/healer for feast' },
      { type:'food',   name:'Royal Roast',    effect:'Solo food — high Intellect bonus.',           note:'Backup if no feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primary stat 1 hour.',                       note:'Always use' },
    ]
  },
};

ALL_SPECS.push(SPEC_ELEMENTAL_SHAMAN);

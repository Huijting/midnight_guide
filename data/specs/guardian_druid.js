if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_GUARDIAN_DRUID = {
  id: 'guardian_druid',
  icon: '🐻',
  class: 'Druid',
  spec:   { nl: 'Guardian', en: 'Guardian'},
  role:   'tank',
  armor:  'Leather',
  weapon: { nl: 'Staf of eenhandig + offhand (beervorm)', en: 'Staff or one-hand + offhand (bear form)'},
  resource: 'Rage',
  patch: '1.0',
  color: '#FF7C0A',

  summary: {
    nl: 'Guardian Druid is een veelzijdige tank in beervorm met hoge armor en uitstekende zelfheling via Frenzied Regeneration. Draait om Ironfur voor armor en Mangle voor Rage.',
    en: 'Guardian Druid is a versatile tank in bear form with high armor and excellent self-healing via Frenzied Regeneration. Revolves around Ironfur for armor and Mangle for Rage.'
  },
  pros: {
    nl: ['Uitstekende zelfheling', 'Hoge armor via Ironfur', 'Goede AoE threat via Thrash', 'Rebirth voor in-combat rez', 'Sterk in M+ door mobiliteit'],
    en: ['Excellent self-healing', 'High armor via Ironfur', 'Good AoE threat via Thrash', 'Rebirth for in-combat rez', 'Strong in M+ due to mobility']
  },
  cons: {
    nl: ['Minder sterk tegen magische schade', 'Ironfur vereist actief Rage management', 'Minder cooldowns dan andere tanks'],
    en: ['Weaker against magic damage', 'Ironfur requires active Rage management', 'Fewer cooldowns than other tanks']
  },

  cheatsheet: {
    nl: {
      opener: 'Thrash → Mangle → Ironfur → Maul (Rage dump) → Thrash hernieuwen',
      single: 'Mangle (altijd op CD) → Thrash actief houden → Ironfur bij 35+ Rage → Maul dump',
      aoe:    'Thrash → Swipe spam → Mangle → Ironfur actief houden',
      rules: [
        'Ironfur altijd actief — kost Rage maar geeft armor',
        'Mangle altijd op cooldown gebruiken — hoofd Rage generator',
        'Thrash altijd actief — DoT + AoE threat',
        'Frenzied Regeneration bij <50% HP — niet eerder',
        'Barkskin bij grote mechanic — geen Rage nodig',
      ],
    },
    en: {
      opener: 'Thrash → Mangle → Ironfur → Maul (Rage dump) → refresh Thrash',
      single: 'Mangle (always on CD) → keep Thrash active → Ironfur at 35+ Rage → Maul dump',
      aoe:    'Thrash → Swipe spam → Mangle → keep Ironfur active',
      rules: [
        'Ironfur always active — costs Rage but grants armor',
        'Mangle always on cooldown — main Rage generator',
        'Thrash always active — DoT + AoE threat',
        'Frenzied Regeneration at <50% HP — not earlier',
        'Barkskin during major mechanic — no Rage needed',
      ],
    }
  },

  rotation: {
    nl: {
      apex_tip: '💡 Ironfur is je belangrijkste defensieve button. Houd het altijd actief — verlopen = grote kwetsbaarheid!',
      opener: [
        { spell: 'Thrash', why: 'AoE threat direct vanaf de start' },
        { spell: 'Mangle', why: 'Rage generator + schade' },
        { spell: 'Ironfur', why: 'Armor buff — altijd actief houden' },
        { spell: 'Swipe/Maul', why: 'Extra threat of Rage dump' },
      ],
      single: [
        { spell: 'Mangle', why: 'Altijd op CD — hoofd Rage generator' },
        { spell: 'Thrash', why: 'Hernieuwen als <3 sec resterend' },
        { spell: 'Ironfur', why: 'Bij 35+ Rage — altijd actief houden' },
        { spell: 'Maul', why: 'Rage dump als >80 Rage' },
        { spell: 'Frenzied Regeneration', why: '<50% HP — zelfheling' },
      ],
      aoe: [
        { spell: 'Thrash', why: 'AoE DoT + threat op alle targets' },
        { spell: 'Swipe', why: 'AoE aanval — hoofdthreeat buider bij mobs' },
        { spell: 'Mangle', why: 'Altijd op CD ook bij AoE' },
        { spell: 'Ironfur', why: 'Altijd actief — ook in trash pulls' },
      ],
    },
    en: {
      apex_tip: '💡 Ironfur is your most important defensive button. Always keep it active — expiring = major vulnerability!',
      opener: [
        { spell: 'Thrash', why: 'AoE threat immediately from the start' },
        { spell: 'Mangle', why: 'Rage generator + damage' },
        { spell: 'Ironfur', why: 'Armor buff — always keep active' },
        { spell: 'Swipe/Maul', why: 'Extra threat or Rage dump' },
      ],
      single: [
        { spell: 'Mangle', why: 'Always on CD — main Rage generator' },
        { spell: 'Thrash', why: 'Refresh when <3 sec remaining' },
        { spell: 'Ironfur', why: 'At 35+ Rage — always keep active' },
        { spell: 'Maul', why: 'Rage dump when >80 Rage' },
        { spell: 'Frenzied Regeneration', why: '<50% HP — self heal' },
      ],
      aoe: [
        { spell: 'Thrash', why: 'AoE DoT + threat on all targets' },
        { spell: 'Swipe', why: 'AoE attack — main threat builder on mobs' },
        { spell: 'Mangle', why: 'Always on CD even during AoE' },
        { spell: 'Ironfur', why: 'Always active — also in trash pulls' },
      ],
    }
  },

  stats: {
    nl: {
      tip: 'Als tank is Stamina je belangrijkste stat. Verder focus op Haste en Versatility voor betere tanking.',
      list: [
        { rank:1, stat:'Stamina',     bars:5, note:'Primaire tanking stat — meer HP = meer buffer' },
        { rank:2, stat:'Agility',     bars:4, note:'Verhoogt armor en aanvalsschade' },
        { rank:3, stat:'Versatility', bars:3, note:'Schade reductie + extra schade' },
        { rank:4, stat:'Haste',       bars:3, note:'Kortere cooldowns, meer Rage' },
        { rank:5, stat:'Mastery',     bars:2, note:'Verhoogt bonus armor van Ironfur' },
      ],
    },
    en: {
      tip: 'As a tank Stamina is your most important stat. Further focus on Haste and Versatility for better tanking.',
      list: [
        { rank:1, stat:'Stamina',     bars:5, note:'Primary tanking stat — more HP = more buffer' },
        { rank:2, stat:'Agility',     bars:4, note:'Increases armor and attack damage' },
        { rank:3, stat:'Versatility', bars:3, note:'Damage reduction + extra damage' },
        { rank:4, stat:'Haste',       bars:3, note:'Shorter cooldowns, more Rage' },
        { rank:5, stat:'Mastery',     bars:2, note:'Increases bonus armor from Ironfur' },
      ],
    }
  },

  cooldowns: {
    nl: [
      { spell:'Barkskin',               cd:'1 min',   effect:'20% schade reductie 12 sec', when:'Grote mechanic of spike schade' },
      { spell:'Survival Instincts',     cd:'3 min',   effect:'50% schade reductie 6 sec', when:'Noodsituatie — lever bijna leeg' },
      { spell:'Frenzied Regeneration',  cd:'36 sec',  effect:'Geneest voor % max HP', when:'<50% HP — niet eerder, niet te laat' },
      { spell:'Incarnation: Guardian',  cd:'3 min',   effect:'Verbeterde beervorm — extra armor + schade', when:'Grootste pulls of baas opener' },
      { spell:'Bristling Fur',          cd:'1 min',   effect:'Genereert Rage op basis van ontvangen schade', when:'Tijdens grote schade fases' },
    ],
    en: [
      { spell:'Barkskin',               cd:'1 min',   effect:'20% damage reduction 12 sec', when:'Major mechanic or spike damage' },
      { spell:'Survival Instincts',     cd:'3 min',   effect:'50% damage reduction 6 sec', when:'Emergency — health almost gone' },
      { spell:'Frenzied Regeneration',  cd:'36 sec',  effect:'Heals for % max HP', when:'<50% HP — not too early, not too late' },
      { spell:'Incarnation: Guardian',  cd:'3 min',   effect:'Enhanced bear form — extra armor + damage', when:'Largest pulls or boss opener' },
      { spell:'Bristling Fur',          cd:'1 min',   effect:'Generates Rage based on damage taken', when:'During major damage phases' },
    ]
  },

  utility: {
    nl: [
      { spell:'Rebirth',          type:'Rez',       note:'In-combat rez — als tank kan je dit veilig gebruiken' },
      { spell:'Stampeding Roar',  type:'Groep',     note:'60% snelheidsboost voor groep 8 sec — ideaal in M+' },
      { spell:'Typhoon',          type:'Knockback',  note:'Knockback + interrupt — ideaal voor groeperen van mobs' },
      { spell:'Ursol\'s Vortex',  type:'AoE Root',  note:'Trekt mobs samen en root ze' },
      { spell:'Skull Bash',       type:'Interrupt', note:'Snelle melee interrupt op 15 sec CD' },
    ],
    en: [
      { spell:'Rebirth',          type:'Rez',       note:'In-combat rez — as tank you can safely use this' },
      { spell:'Stampeding Roar',  type:'Group',     note:'60% speed boost for group 8 sec — ideal in M+' },
      { spell:'Typhoon',          type:'Knockback',  note:'Knockback + interrupt — ideal for grouping mobs' },
      { spell:'Ursol\'s Vortex',  type:'AoE Root',  note:'Pulls mobs together and roots them' },
      { spell:'Skull Bash',       type:'Interrupt', note:'Fast melee interrupt on 15 sec CD' },
    ]
  },

  tips: {
    nl: [
      { icon:'🐻', title:'Ironfur nooit laten verlopen', text:'Ironfur is je armor buff — verlopen betekent dat de volgende auto-attack je veel harder raakt. Houd het altijd actief, ook tussen pulls.' },
      { icon:'💉', title:'Frenzied Regen timing', text:'Gebruik Frenzied Regeneration bij <50% HP voor maximale heling. Te vroeg gebruiken verspilt de CD. Te laat = dood.' },
      { icon:'🌪️', title:'Typhoon als positionering', text:'Typhoon is in M+ niet alleen interrupt — gebruik het om mobs naar de tank toe te duwen of ze weg te knocken van healer.' },
      { icon:'🏃', title:'Stampeding Roar altijd klaar', text:'Als Guardian ben jij de logische gebruiker van Stampeding Roar. Gebruik het tussen pulls voor snellere clear of bij mechanic run-outs.' },
      { icon:'💚', title:'Rebirth = grote troef', text:'Als tank kan je Rebirth gebruiken terwijl je mobs vasthoudt. Als de healer sterft: direct Rebirth — dat spaart veel tijd.' },
    ],
    en: [
      { icon:'🐻', title:'Never let Ironfur expire', text:'Ironfur is your armor buff — expiring means the next auto-attack hits you much harder. Always keep it active, even between pulls.' },
      { icon:'💉', title:'Frenzied Regen timing', text:'Use Frenzied Regeneration at <50% HP for maximum healing. Using it too early wastes the CD. Too late = death.' },
      { icon:'🌪️', title:'Typhoon for positioning', text:'Typhoon in M+ is not just an interrupt — use it to push mobs toward the tank or knock them away from the healer.' },
      { icon:'🏃', title:'Stampeding Roar always ready', text:'As Guardian you are the logical user of Stampeding Roar. Use it between pulls for faster clear or during mechanic run-outs.' },
      { icon:'💚', title:'Rebirth = major asset', text:'As tank you can use Rebirth while holding mobs. If the healer dies: immediately Rebirth — that saves a lot of time.' },
    ]
  },

  macros: {
    nl: [
      { name:'Incarnation + Barkskin', code:'/cast Incarnation: Guardian of Ursoc\n/cast Barkskin', note:'Maximum tanking cooldown opener — extra armor én schade reductie.' },
      { name:'Rebirth op mouseover', code:'/cast [@mouseover] Rebirth', note:'In-combat rez zonder target te wisselen — cruciaal als tank.' },
      { name:'Frenzied Regen noodknop', code:'/cast Frenzied Regeneration\n/use Healthstone', note:'Activeer beide healmogelijkheden direct bij lage HP.' },
    ],
    en: [
      { name:'Incarnation + Barkskin', code:'/cast Incarnation: Guardian of Ursoc\n/cast Barkskin', note:'Maximum tanking cooldown opener — extra armor AND damage reduction.' },
      { name:'Rebirth on mouseover', code:'/cast [@mouseover] Rebirth', note:'In-combat rez without switching targets — crucial as tank.' },
      { name:'Frenzied Regen emergency', code:'/cast Frenzied Regeneration\n/use Healthstone', note:'Activate both healing options immediately at low HP.' },
    ]
  },

  resource_info: {
    nl: {
      intro: 'Guardian gebruikt Rage (0-100). Rage genereert via aanvallen en ontvangen schade. Je geeft Rage uit aan Ironfur (armor) en Maul (schade dump).',
      generate: [
        'Mangle — grootste Rage generator, altijd op CD',
        'Thrash — Rage bij treffer',
        'Auto attacks — kleine passieve Rage',
        'Ontvangen schade — passieve Rage generatie',
        'Bristling Fur — extra Rage bij grote schade',
      ],
      spend: [
        'Ironfur (40 Rage) — bonus armor buff, altijd prioriteit',
        'Maul (40 Rage) — schade dump als Ironfur al actief',
        'Frenzied Regeneration (10 Rage) — zelfheling',
      ],
      pet_tip: '⚠️ Ironfur heeft altijd prioriteit boven Maul — armor is als tank altijd belangrijker dan extra schade!',
      pets: [],
    },
    en: {
      intro: 'Guardian uses Rage (0-100). Rage generates via attacks and damage taken. You spend Rage on Ironfur (armor) and Maul (damage dump).',
      generate: [
        'Mangle — biggest Rage generator, always on CD',
        'Thrash — Rage on hit',
        'Auto attacks — small passive Rage',
        'Damage taken — passive Rage generation',
        'Bristling Fur — extra Rage during heavy damage',
      ],
      spend: [
        'Ironfur (40 Rage) — bonus armor buff, always priority',
        'Maul (40 Rage) — damage dump when Ironfur already active',
        'Frenzied Regeneration (10 Rage) — self heal',
      ],
      pet_tip: '⚠️ Ironfur always has priority over Maul — armor is always more important than extra damage as a tank!',
      pets: [],
    }
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Blood Knights',  effect:'Verhoogt Agility (ook armor) voor 1 uur.',    note:'Altijd actief als tank' },
      { type:'pot',    name:'Potion of Recklessness',   effect:'Primaire stat boost voor surviveability.',     note:'Gebruik bij grootste pull of boss opener' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Agility en Stamina via groepsfeast.',        note:'Stamina is cruciaal als tank' },
      { type:'food',   name:'Royal Roast',            effect:'Solo tank food — hoge Stamina bonus.',        note:'Backup als geen feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primaire stat 1 uur.',                       note:'Altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Blood Knights',  effect:'Increases Agility (also armor) for 1 hour.',  note:'Always active as tank' },
      { type:'pot',    name:'Potion of Recklessness',   effect:'Primary stat boost for survivability.',       note:'Use during largest pull or boss opener' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Agility and Stamina via group feast.',      note:'Stamina is crucial as tank' },
      { type:'food',   name:'Royal Roast',            effect:'Solo tank food — high Stamina bonus.',       note:'Backup if no feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primary stat 1 hour.',                      note:'Always use' },
    ]
  },
};

ALL_SPECS.push(SPEC_GUARDIAN_DRUID);

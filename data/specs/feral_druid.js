if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_FERAL_DRUID = {
  id: 'feral_druid',
  icon: '🐆',
  class: 'Druid',
  spec:   { nl: 'Feral', en: 'Feral'},
  role:   'melee',
  armor:  'Leather',
  weapon: { nl: 'Staf of eenhandig + offhand (transformeert naar klauw)', en: 'Staff or one-hand + offhand (transforms to claw)'},
  resource: 'Energy + Combo Points',
  patch: '1.0',
  color: '#FF7C0A',

  summary: {
    nl: 'Feral Druid is een behendig katachtige melee DPS die Energy besteedt voor Combo Points, en CPs gebruikt voor finishers. Draait om Rip en Rake DoTs en Ferocious Bite als finisher.',
    en: 'Feral Druid is an agile cat-form melee DPS that spends Energy for Combo Points and uses CPs for finishers. Revolves around Rip and Rake DoTs and Ferocious Bite as finisher.'
  },
  pros: {
    nl: ['Uitstekende sustained DoT schade', 'Hoge mobiliteit in katform', 'Goede execute schade (Ferocious Bite)', 'Kan in nood uitstappen voor utility'],
    en: ['Excellent sustained DoT damage', 'High mobility in cat form', 'Good execute damage (Ferocious Bite)', 'Can step out for utility in emergencies']
  },
  cons: {
    nl: ['Zeer complex DoT management', 'Energy pooling vereist discipline', 'Weinig burst schade buiten cooldowns', 'Hoog apm (actions per minute)'],
    en: ['Very complex DoT management', 'Energy pooling requires discipline', 'Little burst damage outside cooldowns', 'High apm (actions per minute)']
  },

  cheatsheet: {
    nl: {
      opener: 'Rake → Shred x2 → Rip (4+ CPs) → Thrash → Tiger\'s Fury → Shred spam → Ferocious Bite',
      single: 'Rake actief → Rip actief → Shred voor CPs → Ferocious Bite bij 5 CPs en 50+ Energy',
      aoe:    'Thrash → Swipe spam → Rip op hoofd target → Primal Wrath (5 CPs) voor multi-Rip',
      rules: [
        'Rake en Rip altijd actief — laat ze nooit verlopen',
        'Ferocious Bite alleen bij 5 combo points EN 50+ Energy',
        'Tiger\'s Fury bij lage Energy — wacht nooit op Energy cap',
        'Bloodtalons: bouw proc op voor grote finishers',
        'Primal Wrath bij 3+ targets — verspreidt Rip naar allemaal',
      ],
    },
    en: {
      opener: 'Rake → Shred x2 → Rip (4+ CPs) → Thrash → Tiger\'s Fury → Shred spam → Ferocious Bite',
      single: 'Rake active → Rip active → Shred for CPs → Ferocious Bite at 5 CPs and 50+ Energy',
      aoe:    'Thrash → Swipe spam → Rip on main target → Primal Wrath (5 CPs) for multi-Rip',
      rules: [
        'Rake and Rip always active — never let them fall off',
        'Ferocious Bite only at 5 combo points AND 50+ Energy',
        'Tiger\'s Fury at low Energy — never wait for Energy cap',
        'Bloodtalons: build proc for major finishers',
        'Primal Wrath at 3+ targets — spreads Rip to all of them',
      ],
    }
  },

  rotation: {
    nl: {
      apex_tip: '💡 Feral is een van de meest complexe specs. Focus eerst op DoTs altijd actief houden — de rest volgt vanzelf!',
      opener: [
        { spell: 'Rake', why: 'DoT aanzetten — genereert ook 1 CP' },
        { spell: 'Shred x2-3', why: 'CPs opbouwen voor eerste Rip' },
        { spell: 'Rip', why: 'Belangrijkste DoT — altijd bij 4+ CPs' },
        { spell: 'Tiger\'s Fury', why: 'Energie burst + schade boost' },
        { spell: 'Ferocious Bite', why: 'Bij 5 CPs en 50+ Energy' },
      ],
      single: [
        { spell: 'Rake refresh', why: '<5 sec resterend — altijd hernieuwen' },
        { spell: 'Rip refresh', why: '<5 sec resterend — nooit laten verlopen' },
        { spell: 'Shred', why: 'Hoofdaanval — CPs opbouwen' },
        { spell: 'Ferocious Bite', why: '5 CPs + 50+ Energy — altijd wachten op beide' },
        { spell: 'Tiger\'s Fury', why: 'Bij <40 Energy — nooit wachten' },
      ],
      aoe: [
        { spell: 'Thrash', why: 'AoE DoT op alle targets rondom jou' },
        { spell: 'Swipe', why: 'AoE aanval — vervangt Shred bij 3+ targets' },
        { spell: 'Primal Wrath', why: '5 CPs: verspreidt Rip naar alle targets' },
        { spell: 'Rip op hoofd target', why: 'Sterkste DoT, altijd op hoofd target actief' },
      ],
    },
    en: {
      apex_tip: '💡 Feral is one of the most complex specs. Focus first on always keeping DoTs active — the rest follows naturally!',
      opener: [
        { spell: 'Rake', why: 'Apply DoT — also generates 1 CP' },
        { spell: 'Shred x2-3', why: 'Build CPs for first Rip' },
        { spell: 'Rip', why: 'Most important DoT — always at 4+ CPs' },
        { spell: 'Tiger\'s Fury', why: 'Energy burst + damage boost' },
        { spell: 'Ferocious Bite', why: 'At 5 CPs and 50+ Energy' },
      ],
      single: [
        { spell: 'Rake refresh', why: '<5 sec remaining — always refresh' },
        { spell: 'Rip refresh', why: '<5 sec remaining — never let expire' },
        { spell: 'Shred', why: 'Main attack — building CPs' },
        { spell: 'Ferocious Bite', why: '5 CPs + 50+ Energy — always wait for both' },
        { spell: 'Tiger\'s Fury', why: 'At <40 Energy — never wait' },
      ],
      aoe: [
        { spell: 'Thrash', why: 'AoE DoT on all targets around you' },
        { spell: 'Swipe', why: 'AoE attack — replaces Shred at 3+ targets' },
        { spell: 'Primal Wrath', why: '5 CPs: spreads Rip to all targets' },
        { spell: 'Rip on main target', why: 'Strongest DoT, always active on main target' },
      ],
    }
  },

  stats: {
    nl: {
      tip: 'Agility is je primaire stat. Haste verlaagt de Energy regeneratie tijd — cruciaal voor Feral.',
      list: [
        { rank:1, stat:'Agility',         bars:5, note:'Primaire stat' },
        { rank:2, stat:'Haste',           bars:5, note:'Snellere Energy regen = meer aanvallen' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Verhoogt finisher schade significant' },
        { rank:4, stat:'Mastery',         bars:3, note:'Verhoogt DoT schade (Mastery: Razor Claws)' },
        { rank:5, stat:'Versatility',     bars:1, note:'Laagste prioriteit' },
      ],
    },
    en: {
      tip: 'Agility is your primary stat. Haste reduces Energy regeneration time — crucial for Feral.',
      list: [
        { rank:1, stat:'Agility',         bars:5, note:'Primary stat' },
        { rank:2, stat:'Haste',           bars:5, note:'Faster Energy regen = more attacks' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Significantly increases finisher damage' },
        { rank:4, stat:'Mastery',         bars:3, note:'Increases DoT damage (Mastery: Razor Claws)' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lowest priority' },
      ],
    }
  },

  cooldowns: {
    nl: [
      { spell:'Berserk',        cd:'3 min',   effect:'Alle Energy kosten halveren 15 sec + extra aanvallen', when:'Op pull bij boss of grote M+ pack' },
      { spell:'Tiger\'s Fury',  cd:'30 sec',  effect:'Energy restore + schade boost 10 sec', when:'Bij <40 Energy — nooit wachten' },
      { spell:'Incarnation: King of the Jungle', cd:'3 min', effect:'Verbeterde Berserk — extra schade boost', when:'Vervangt Berserk als talent genomen' },
      { spell:'Feral Frenzy',   cd:'45 sec',  effect:'5 snelle aanvallen + volle combo points', when:'AoE packs of ST burst window' },
      { spell:'Survival Instincts', cd:'3 min', effect:'50% schade reductie 6 sec', when:'Noodbescherming' },
    ],
    en: [
      { spell:'Berserk',        cd:'3 min',   effect:'Halve all Energy costs 15 sec + extra attacks', when:'On pull at boss or large M+ pack' },
      { spell:'Tiger\'s Fury',  cd:'30 sec',  effect:'Energy restore + damage boost 10 sec', when:'At <40 Energy — never wait' },
      { spell:'Incarnation: King of the Jungle', cd:'3 min', effect:'Enhanced Berserk — extra damage boost', when:'Replaces Berserk when talent taken' },
      { spell:'Feral Frenzy',   cd:'45 sec',  effect:'5 quick attacks + full combo points', when:'AoE packs or ST burst window' },
      { spell:'Survival Instincts', cd:'3 min', effect:'50% damage reduction 6 sec', when:'Emergency defense' },
    ]
  },

  utility: {
    nl: [
      { spell:'Rebirth',      type:'Rez',       note:'In-combat rez — uniek voor Druid' },
      { spell:'Typhoon',      type:'Knockback',  note:'Knockback in katform — goede interrupt' },
      { spell:'Soothe',       type:'Dispel',    note:'Verwijdert Enrage effect van vijand' },
      { spell:'Stampeding Roar', type:'Groep',  note:'Groep-wide 60% snelheidsboost 8 sec' },
      { spell:'Hibernate',    type:'CC',        note:'Slaap Beast/Dragonkin 40 sec — breekt op schade' },
    ],
    en: [
      { spell:'Rebirth',      type:'Rez',       note:'In-combat rez — unique to Druid' },
      { spell:'Typhoon',      type:'Knockback',  note:'Knockback in cat form — good interrupt' },
      { spell:'Soothe',       type:'Dispel',    note:'Removes Enrage effect from enemy' },
      { spell:'Stampeding Roar', type:'Group',  note:'Group-wide 60% speed boost 8 sec' },
      { spell:'Hibernate',    type:'CC',        note:'Sleep Beast/Dragonkin 40 sec — breaks on damage' },
    ]
  },

  tips: {
    nl: [
      { icon:'🐆', title:'DoTs nooit laten verlopen', text:'Rip en Rake zijn je brood en boter. Als ze verlopen verlies je enorme schade. Gebruik een weakaura of timer addon om ze bij te houden.' },
      { icon:'⚡', title:'Energy nooit vol laten lopen', text:'Als je Energy op 100 staat ga je schade missen. Gebruik Tiger\'s Fury vroeg of spam een extra Shred om Energy te dumpen.' },
      { icon:'🍖', title:'Ferocious Bite timing', text:'Gebruik Ferocious Bite ALLEEN als Rip en Rake actief zijn én meer dan 5 sec hebben. Anders is hernieuwen altijd beter.' },
      { icon:'🌿', title:'Uitstappen voor utility', text:'In nood kan je uit katform gaan voor Rebirth, Innervate of een heal. Het kost je CPs maar kan de run saven.' },
      { icon:'🎯', title:'Stampeding Roar in M+', text:'Stampeding Roar geeft de groep een snelheidsboost — ideaal tussen trash packs of bij mechanic run-outs. Communiceer wanneer je het gebruikt.' },
    ],
    en: [
      { icon:'🐆', title:'Never let DoTs fall off', text:'Rip and Rake are your bread and butter. If they fall off you lose massive damage. Use a weakaura or timer addon to track them.' },
      { icon:'⚡', title:'Never let Energy cap', text:'If your Energy is at 100 you\'re losing damage. Use Tiger\'s Fury early or spam an extra Shred to dump Energy.' },
      { icon:'🍖', title:'Ferocious Bite timing', text:'Use Ferocious Bite ONLY when Rip and Rake are active AND have more than 5 sec. Otherwise refreshing is always better.' },
      { icon:'🌿', title:'Stepping out for utility', text:'In emergencies you can leave cat form for Rebirth, Innervate or a heal. It costs your CPs but can save the run.' },
      { icon:'🎯', title:'Stampeding Roar in M+', text:'Stampeding Roar gives the group a speed boost — ideal between trash packs or during mechanic run-outs. Communicate when you\'re using it.' },
    ]
  },

  macros: {
    nl: [
      { name:'Berserk + Tiger\'s Fury', code:'/cast Berserk\n/cast Tiger\'s Fury', note:'Maximum burst opener — Energy direct vol en kosten gehalveerd.' },
      { name:'Rebirth op mouseover', code:'/cast [@mouseover] Rebirth', note:'In-combat rez zonder target te wisselen.' },
      { name:'Stampeding Roar', code:'/cast Stampeding Roar', note:'Gebruik één knop voor de groepsboost — houd het simpel.' },
    ],
    en: [
      { name:'Berserk + Tiger\'s Fury', code:'/cast Berserk\n/cast Tiger\'s Fury', note:'Maximum burst opener — Energy immediately full and costs halved.' },
      { name:'Rebirth on mouseover', code:'/cast [@mouseover] Rebirth', note:'In-combat rez without switching targets.' },
      { name:'Stampeding Roar', code:'/cast Stampeding Roar', note:'One button for the group boost — keep it simple.' },
    ]
  },

  resource_info: {
    nl: {
      intro: 'Feral gebruikt twee resources: Energy (0-100, regenereert automatisch) voor aanvallen, en Combo Points (0-5) voor finishers.',
      generate: [
        'Shred — 1 CP per treffer',
        'Rake — 1 CP + DoT',
        'Thrash — 1 CP (AoE)',
        'Feral Frenzy — direct 5 CPs in één skill',
      ],
      spend: [
        'Ferocious Bite (5 CPs + 50 Energy) — single target finisher',
        'Rip (4-5 CPs) — sterkste DoT, altijd prioriteit',
        'Primal Wrath (5 CPs) — verspreidt Rip naar alle targets',
      ],
      pet_tip: '⚠️ Gebruik Ferocious Bite alleen als Rip en Rake al actief zijn met 5+ sec resterend — anders altijd hernieuwen!',
      pets: [],
    },
    en: {
      intro: 'Feral uses two resources: Energy (0-100, regenerates automatically) for attacks, and Combo Points (0-5) for finishers.',
      generate: [
        'Shred — 1 CP per hit',
        'Rake — 1 CP + DoT',
        'Thrash — 1 CP (AoE)',
        'Feral Frenzy — directly 5 CPs in one skill',
      ],
      spend: [
        'Ferocious Bite (5 CPs + 50 Energy) — single target finisher',
        'Rip (4-5 CPs) — strongest DoT, always priority',
        'Primal Wrath (5 CPs) — spreads Rip to all targets',
      ],
      pet_tip: '⚠️ Use Ferocious Bite only when Rip and Rake are already active with 5+ sec remaining — otherwise always refresh!',
      pets: [],
    }
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Blood Knights',  effect:'Verhoogt Agility significant voor 1 uur.',   note:'Altijd actief in M+ en raid' },
      { type:'pot',    name:'Potion of Recklessness',             effect:'Grote Agility boost 25 sec bij pull/BL.',    note:'2 per boss: pull + Berserk window' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Agility en Stamina via groepsfeast.',       note:'Feast vragen aan tank/healer' },
      { type:'food',   name:'Royal Roast',          effect:'Solo food — hoge Agility bonus.',            note:'Backup als geen feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primaire stat 1 uur.',                      note:'Altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Blood Knights',  effect:'Significantly increases Agility for 1 hour.', note:'Always active in M+ and raid' },
      { type:'pot',    name:'Potion of Recklessness',             effect:'Large Agility boost 25 sec on pull/BL.',    note:'2 per boss: pull + Berserk window' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Agility and Stamina via group feast.',     note:'Ask tank/healer for feast' },
      { type:'food',   name:'Royal Roast',          effect:'Solo food — high Agility bonus.',           note:'Backup if no feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primary stat 1 hour.',                     note:'Always use' },
    ]
  },
};

ALL_SPECS.push(SPEC_FERAL_DRUID);

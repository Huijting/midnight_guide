if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_FERAL_DRUID = {
  id: 'feral_druid',
  icon: '🐆',
  class: 'Druid',
  spec:   { nl: 'Feral', en: 'Feral', da: 'Feral' },
  role:   'melee',
  armor:  'Leather',
  weapon: { nl: 'Staf of eenhandig + offhand (transformeert naar klauw)', en: 'Staff or one-hand + offhand (transforms to claw)', da: 'Stav eller enhånds + offhand (transformerer til klo)' },
  resource: 'Energy + Combo Points',
  patch: '1.0',
  color: '#FF7C0A',

  summary: {
    nl: 'Feral Druid is een behendig katachtige melee DPS die Energy besteedt voor Combo Points, en CPs gebruikt voor finishers. Draait om Rip en Rake DoTs en Ferocious Bite als finisher.',
    en: 'Feral Druid is an agile cat-form melee DPS that spends Energy for Combo Points and uses CPs for finishers. Revolves around Rip and Rake DoTs and Ferocious Bite as finisher.',
    da: 'Feral Druid er en smidig katte-form melee DPS, der bruger Energy til Combo Points og CP\'er til finishers. Drejer sig om Rip og Rake DoTs og Ferocious Bite som finisher.',
  },
  pros: {
    nl: ['Uitstekende sustained DoT schade', 'Hoge mobiliteit in katform', 'Goede execute schade (Ferocious Bite)', 'Kan in nood uitstappen voor utility'],
    en: ['Excellent sustained DoT damage', 'High mobility in cat form', 'Good execute damage (Ferocious Bite)', 'Can step out for utility in emergencies'],
    da: ['Fremragende vedvarende DoT-skade', 'Høj mobilitet i katteform', 'God execute-skade (Ferocious Bite)', 'Kan træde ud for utility i nødsituationer'],
  },
  cons: {
    nl: ['Zeer complex DoT management', 'Energy pooling vereist discipline', 'Weinig burst schade buiten cooldowns', 'Hoog apm (actions per minute)'],
    en: ['Very complex DoT management', 'Energy pooling requires discipline', 'Little burst damage outside cooldowns', 'High apm (actions per minute)'],
    da: ['Meget kompleks DoT-styring', 'Energy-pooling kræver disciplin', 'Lidt burst-skade uden for cooldowns', 'Høj APM (actions per minute)'],
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
    },
    da: {
      opener: 'Rake → Shred x2 → Rip (4+ CPs) → Thrash → Tiger\'s Fury → Shred-spam → Ferocious Bite',
      single: 'Rake aktiv → Rip aktiv → Shred til CPs → Ferocious Bite ved 5 CPs og 50+ Energy',
      aoe:    'Thrash → Swipe-spam → Rip på hovedmål → Primal Wrath (5 CPs) til multi-Rip',
      rules: [
        'Rake og Rip altid aktive — lad dem aldrig falde af',
        'Ferocious Bite kun ved 5 combo points OG 50+ Energy',
        'Tiger\'s Fury ved lav Energy — vent aldrig på Energy-cap',
        'Bloodtalons: opbyg proc til store finishers',
        'Primal Wrath ved 3+ mål — spreder Rip til dem alle',
      ],
    },
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
    },
    da: {
      apex_tip: '💡 Feral er en af de mest komplekse specs. Fokuser først på altid at holde DoTs aktive — resten følger naturligt!',
      opener: [
        { spell: 'Rake', why: 'Påfør DoT — genererer også 1 CP' },
        { spell: 'Shred x2-3', why: 'Opbyg CPs til første Rip' },
        { spell: 'Rip', why: 'Vigtigste DoT — altid ved 4+ CPs' },
        { spell: 'Tiger\'s Fury', why: 'Energy-burst + skade-boost' },
        { spell: 'Ferocious Bite', why: 'Ved 5 CPs og 50+ Energy' },
      ],
      single: [
        { spell: 'Rake-fornyelse', why: '<5 sek tilbage — forny altid' },
        { spell: 'Rip-fornyelse', why: '<5 sek tilbage — lad aldrig udløbe' },
        { spell: 'Shred', why: 'Hoved angreb — opbygger CPs' },
        { spell: 'Ferocious Bite', why: '5 CPs + 50+ Energy — vent altid på begge' },
        { spell: 'Tiger\'s Fury', why: 'Ved <40 Energy — vent aldrig' },
      ],
      aoe: [
        { spell: 'Thrash', why: 'AoE DoT på alle mål omkring dig' },
        { spell: 'Swipe', why: 'AoE-angreb — erstatter Shred ved 3+ mål' },
        { spell: 'Primal Wrath', why: '5 CPs: spreder Rip til alle mål' },
        { spell: 'Rip på hovedmål', why: 'Stærkeste DoT, altid aktiv på hovedmål' },
      ],
    },
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
    },
    da: {
      tip: 'Agility er din primære stat. Haste reducerer Energy-regenereringstiden — afgørende for Feral.',
      list: [
        { rank:1, stat:'Agility',         bars:5, note:'Primær stat' },
        { rank:2, stat:'Haste',           bars:5, note:'Hurtigere Energy-regen = flere angreb' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Øger finisher-skade markant' },
        { rank:4, stat:'Mastery',         bars:3, note:'Øger DoT-skade (Mastery: Razor Claws)' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lavest prioritet' },
      ],
    },
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
    ],
    da: [
      { spell:'Berserk',        cd:'3 min',   effect:'Halver alle Energy-omkostninger i 15 sek + ekstra angreb', when:'På pull ved boss eller stor M+-gruppe' },
      { spell:'Tiger\'s Fury',  cd:'30 sec',  effect:'Energy-genopretning + skade-boost i 10 sek', when:'Ved <40 Energy — vent aldrig' },
      { spell:'Incarnation: King of the Jungle', cd:'3 min', effect:'Forbedret Berserk — ekstra skade-boost', when:'Erstatter Berserk, når talentet er taget' },
      { spell:'Feral Frenzy',   cd:'45 sec',  effect:'5 hurtige angreb + fulde combo points', when:'AoE-grupper eller ST burst-vindue' },
      { spell:'Survival Instincts', cd:'3 min', effect:'50% skadereduktion i 6 sek', when:'Nødsforsvar' },
    ],
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
    ],
    da: [
      { spell:'Rebirth',      type:'Genoplivning', note:'In-combat genoplivning — unikt for Druid' },
      { spell:'Typhoon',      type:'Knockback',  note:'Knockback i katteform — god interrupt' },
      { spell:'Soothe',       type:'Dispel',    note:'Fjerner Enrage-effekt fra fjende' },
      { spell:'Stampeding Roar', type:'Gruppe', note:'Gruppe-wide 60% hastighedsboost i 8 sek' },
      { spell:'Hibernate',    type:'CC',        note:'Sæt Beast/Dragonkin i søvn i 40 sek — brydes ved skade' },
    ],
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
    ],
    da: [
      { icon:'🐆', title:'Lad aldrig DoTs falde af', text:'Rip og Rake er dit brød og smør. Hvis de falder af mister du massiv skade. Brug en weakaura eller timer-addon til at følge dem.' },
      { icon:'⚡', title:'Lad aldrig Energy capper', text:'Hvis din Energy er på 100 mister du skade. Brug Tiger\'s Fury tidligt eller spam et ekstra Shred for at dumpe Energy.' },
      { icon:'🍖', title:'Ferocious Bite-timing', text:'Brug Ferocious Bite KUN når Rip og Rake er aktive OG har mere end 5 sek. Ellers er fornyelse altid bedre.' },
      { icon:'🌿', title:'Trin ud for utility', text:'I nødsituationer kan du forlade katteform for Rebirth, Innervate eller en heling. Det koster dine CPs, men kan redde kørslen.' },
      { icon:'🎯', title:'Stampeding Roar i M+', text:'Stampeding Roar giver gruppen et hastighedsboost — ideelt mellem trash-grupper eller ved mekanik-udfald. Kommunikér, hvornår du bruger det.' },
    ],
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
    ],
    da: [
      { name:'Berserk + Tiger\'s Fury', code:'/cast Berserk\n/cast Tiger\'s Fury', note:'Maksimalt burst-opener — Energy straks fuld og omkostninger halveret.' },
      { name:'Rebirth på mouseover', code:'/cast [@mouseover] Rebirth', note:'In-combat genoplivning uden at skifte mål.' },
      { name:'Stampeding Roar', code:'/cast Stampeding Roar', note:'Én knap til gruppe-boosten — hold det simpelt.' },
    ],
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
    },
    da: {
      intro: 'Feral bruger to ressourcer: Energy (0-100, regenererer automatisk) til angreb og Combo Points (0-5) til finishers.',
      generate: [
        'Shred — 1 CP per træf',
        'Rake — 1 CP + DoT',
        'Thrash — 1 CP (AoE)',
        'Feral Frenzy — direkte 5 CPs i én evne',
      ],
      spend: [
        'Ferocious Bite (5 CPs + 50 Energy) — single target finisher',
        'Rip (4-5 CPs) — stærkeste DoT, altid prioritet',
        'Primal Wrath (5 CPs) — spreder Rip til alle mål',
      ],
      pet_tip: '⚠️ Brug Ferocious Bite kun når Rip og Rake allerede er aktive med 5+ sek tilbage — ellers forny altid!',
      pets: [],
    },
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Verhoogt Agility significant voor 1 uur.',   note:'Altijd actief in M+ en raid' },
      { type:'pot',    name:'Tempered Potion',             effect:'Grote Agility boost 25 sec bij pull/BL.',    note:'2 per boss: pull + Berserk window' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Agility en Stamina via groepsfeast.',       note:'Feast vragen aan tank/healer' },
      { type:'food',   name:'Feisty Fish Sticks',          effect:'Solo food — hoge Agility bonus.',            note:'Backup als geen feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primaire stat 1 uur.',                      note:'Altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Significantly increases Agility for 1 hour.', note:'Always active in M+ and raid' },
      { type:'pot',    name:'Tempered Potion',             effect:'Large Agility boost 25 sec on pull/BL.',    note:'2 per boss: pull + Berserk window' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Agility and Stamina via group feast.',     note:'Ask tank/healer for feast' },
      { type:'food',   name:'Feisty Fish Sticks',          effect:'Solo food — high Agility bonus.',           note:'Backup if no feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primary stat 1 hour.',                     note:'Always use' },
    ],
    da: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Øger Agility markant i 1 time.',             note:'Altid aktiv i M+ og raid' },
      { type:'pot',    name:'Tempered Potion',             effect:'Stor Agility-boost 25 sek ved pull/BL.',    note:'2 per boss: pull + Berserk-vindue' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Agility og Stamina via gruppefeast.',      note:'Bed tank/healer om feast' },
      { type:'food',   name:'Feisty Fish Sticks',          effect:'Solo-mad — høj Agility-bonus.',             note:'Backup hvis ingen feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primær stat 1 time.',                      note:'Brug altid' },
    ],
  },
};

ALL_SPECS.push(SPEC_FERAL_DRUID);

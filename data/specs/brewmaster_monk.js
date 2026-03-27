if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_BREWMASTER_MONK = {
  id:'brewmaster_monk', icon:'🍺', class:'Monk',
  spec:{nl:'Brewmaster',en:'Brewmaster'},
  role:'tank', armor:'Leather',
  weapon:{nl:'Two one-hand weapons or staff',en:'Two one-hand weapons or staff'},
  resource:'Energy + Chi',
  patch:'1.0', color:'#00FF98',
  summary:{
    nl:'Brewmaster is een unieke tank die schade niet blokkeert maar verspreidt via Stagger. Grote hits worden omgezet in een DoT op jezelf — de healer heeft meer tijd om te reageren. Vereist actief Purify om die DoT te wissen.',
    en:'Brewmaster is a unique tank that doesn\'t block damage but spreads it via Stagger. Large hits are converted to a DoT on yourself — the healer has more time to react. Requires active Purify to clear that DoT.'
  },
  pros:{
    nl:['Stagger maakt inkomende schade veel voorspelbaarder voor healers','Uitstekende AoE threat via Keg Smash','Goede mobiliteit met Roll en Transcendence','Sterk self-sustain via Expel Harm','Unieke Celestial Brew voor grote absorb shields'],
    en:['Stagger makes incoming damage much more predictable for healers','Excellent AoE threat via Keg Smash','Good mobility with Roll and Transcendence','Strong self-sustain via Expel Harm','Unique Celestial Brew for large absorb shields']
  },
  cons:{
    nl:['Stagger vereist constant Purify aandacht','Minder defensieve cooldowns dan plate tanks','Leer-armor = minder rustingwaarde','Complexer dan andere tanks door actief resource management'],
    en:['Stagger requires constant Purify attention','Fewer defensive cooldowns than plate tanks','Leather armor = less armor value','More complex than other tanks due to active resource management']
  },
  cheatsheet:{
    nl:{
      opener:'Keg Smash → Tiger Palm → Blackout Kick → Celestial Brew bij grote schade',
      single:'Keg Smash → Blackout Kick → Tiger Palm filler → Purify bij Heavy Stagger',
      aoe:'Keg Smash AoE → Spinning Crane Kick → Breath of Fire → Blackout Kick',
      rules:[
        'Purify op Heavy Stagger (rode balk) — altijd prioriteit',
        'Keg Smash altijd op CD — AoE threat en Shuffle uptime',
        'Celestial Brew proactief gebruiken — niet wachten op nood',
        'Shuffle buff (Blackout Kick) altijd actief houden',
        'Expel Harm als je laag bent op HP — gratis zelfheal',
      ],
    },
    en:{
      opener:'Keg Smash → Tiger Palm → Blackout Kick → Celestial Brew on major damage',
      single:'Keg Smash → Blackout Kick → Tiger Palm filler → Purify on Heavy Stagger',
      aoe:'Keg Smash AoE → Spinning Crane Kick → Breath of Fire → Blackout Kick',
      rules:[
        'Purify on Heavy Stagger (red bar) — always priority',
        'Keg Smash always on CD — AoE threat and Shuffle uptime',
        'Celestial Brew use proactively — don\'t wait for emergency',
        'Keep Shuffle buff (Blackout Kick) always active',
        'Expel Harm when low on HP — free self-heal',
      ],
    }
  },
  rotation:{
    nl:{
      apex_tip:'💡 Stagger is je kern-mechaniek: grote klappen worden 40% omgezet in een 10-sec DoT. PURIFY die DoT bij Heavy Stagger (rode balk) — anders stapelt het gevaarlijk hoog!',
      opener:[
        {spell:'Keg Smash',why:'AoE threat + Shuffle buff activeren'},
        {spell:'Tiger Palm',why:'Chi generatie filler'},
        {spell:'Blackout Kick',why:'Shuffle buff — 20% dodgekans'},
        {spell:'Breath of Fire',why:'AoE DoT op alle vijanden'},
        {spell:'Celestial Brew',why:'Pre-pull absorb shield'},
      ],
      single:[
        {spell:'Keg Smash',why:'Altijd op CD — beste threat + Shuffle'},
        {spell:'Blackout Kick',why:'Shuffle buff actief houden'},
        {spell:'Tiger Palm',why:'Chi generatie en filler'},
        {spell:'Purify',why:'Bij Heavy Stagger direct!'},
        {spell:'Expel Harm',why:'Laag HP — free zelfheal'},
      ],
      aoe:[
        {spell:'Keg Smash',why:'AoE threat op alle targets'},
        {spell:'Spinning Crane Kick',why:'AoE dmg + Chi bij 3+ targets'},
        {spell:'Breath of Fire',why:'AoE DoT via Keg Smash debuff'},
        {spell:'Blackout Kick',why:'Shuffle uptime bewaken'},
        {spell:'Celestial Brew',why:'Bij grote AoE packs'},
      ],
    },
    en:{
      apex_tip:'💡 Stagger is your core mechanic: big hits are 40% converted into a 10-sec DoT. PURIFY that DoT on Heavy Stagger (red bar) — otherwise it stacks dangerously high!',
      opener:[
        {spell:'Keg Smash',why:'AoE threat + activate Shuffle buff'},
        {spell:'Tiger Palm',why:'Chi generation filler'},
        {spell:'Blackout Kick',why:'Shuffle buff — 20% dodge chance'},
        {spell:'Breath of Fire',why:'AoE DoT on all enemies'},
        {spell:'Celestial Brew',why:'Pre-pull absorb shield'},
      ],
      single:[
        {spell:'Keg Smash',why:'Always on CD — best threat + Shuffle'},
        {spell:'Blackout Kick',why:'Keep Shuffle buff active'},
        {spell:'Tiger Palm',why:'Chi generation and filler'},
        {spell:'Purify',why:'On Heavy Stagger immediately!'},
        {spell:'Expel Harm',why:'Low HP — free self-heal'},
      ],
      aoe:[
        {spell:'Keg Smash',why:'AoE threat on all targets'},
        {spell:'Spinning Crane Kick',why:'AoE dmg + Chi at 3+ targets'},
        {spell:'Breath of Fire',why:'AoE DoT via Keg Smash debuff'},
        {spell:'Blackout Kick',why:'Monitor Shuffle uptime'},
        {spell:'Celestial Brew',why:'On large AoE packs'},
      ],
    }
  },
  stats:{
    nl:{
      tip:'Brewmaster wil geen specifieke secondary stats stapelen — Agility en Stamina zijn het belangrijkst. Versatility geeft schade reductie en is de beste secondary.',
      list:[
        {rank:1,stat:'Agility',bars:5,note:'Primaire stat — aanval en dodge'},
        {rank:2,stat:'Stamina',bars:5,note:'Meer HP = meer Stagger buffer'},
        {rank:3,stat:'Versatility',bars:4,note:'Schade reductie + extra schade'},
        {rank:4,stat:'Mastery',bars:3,note:'Verhoogt Stagger percentage'},
        {rank:5,stat:'Critical Strike',bars:2,note:'Synergieert met enkele talents'},
      ],
    },
    en:{
      tip:'Brewmaster doesn\'t want to stack specific secondary stats — Agility and Stamina are most important. Versatility gives damage reduction and is the best secondary.',
      list:[
        {rank:1,stat:'Agility',bars:5,note:'Primary stat — attack and dodge'},
        {rank:2,stat:'Stamina',bars:5,note:'More HP = more Stagger buffer'},
        {rank:3,stat:'Versatility',bars:4,note:'Damage reduction + extra damage'},
        {rank:4,stat:'Mastery',bars:3,note:'Increases Stagger percentage'},
        {rank:5,stat:'Critical Strike',bars:2,note:'Synergizes with some talents'},
      ],
    }
  },
  cooldowns:{
    nl:[
      {spell:'Celestial Brew',cd:'1 min',effect:'Groot absorb shield op basis van Stagger',when:'Proactief voor grote schade — niet reactief'},
      {spell:'Fortifying Brew',cd:'7 min',effect:'+20% HP en schade reductie 15 sec',when:'Grote boss mechanic of spiky schade fase'},
      {spell:'Expel Harm',cd:'15 sec',effect:'Healt jezelf voor % van max HP',when:'Altijd bij laag HP — lage CD'},
      {spell:'Purify',cd:'1 sec',effect:'Verwijdert % van gestaggerde schade',when:'Bij Heavy Stagger (rode balk) — altijd direct!'},
      {spell:'Invoke Niuzao',cd:'3 min',effect:'Celestial Ox tank helpt en absorbeert schade',when:'Grote pulls of boss execute'},
    ],
    en:[
      {spell:'Celestial Brew',cd:'1 min',effect:'Large absorb shield based on Stagger',when:'Proactively before major damage — not reactively'},
      {spell:'Fortifying Brew',cd:'7 min',effect:'+20% HP and damage reduction 15 sec',when:'Major boss mechanic or spiky damage phase'},
      {spell:'Expel Harm',cd:'15 sec',effect:'Heals yourself for % of max HP',when:'Always at low HP — low CD'},
      {spell:'Purify',cd:'1 sec',effect:'Removes % of staggered damage',when:'On Heavy Stagger (red bar) — always immediately!'},
      {spell:'Invoke Niuzao',cd:'3 min',effect:'Celestial Ox tank helps and absorbs damage',when:'Large pulls or boss execute'},
    ]
  },
  utility:{
    nl:[
      {spell:'Paralysis',type:'CC',note:'Single target stun 1 min — interrupts cast'},
      {spell:'Ring of Peace',type:'AoE CC',note:'AoE disarm en knock-back zone'},
      {spell:'Transcendence',type:'Mobiliteit',note:'Teleporteer naar Spirit-locatie — uniek positional tool'},
      {spell:'Leg Sweep',type:'AoE Stun',note:'AoE stun 3 sec in bereik'},
      {spell:'Expel Harm',type:'Zelfheal',note:'Burst zelfheal op lage CD — geen healer nodig'},
    ],
    en:[
      {spell:'Paralysis',type:'CC',note:'Single target stun 1 min — interrupts cast'},
      {spell:'Ring of Peace',type:'AoE CC',note:'AoE disarm and knock-back zone'},
      {spell:'Transcendence',type:'Mobility',note:'Teleport to Spirit location — unique positional tool'},
      {spell:'Leg Sweep',type:'AoE Stun',note:'AoE stun 3 sec in range'},
      {spell:'Expel Harm',type:'Self-heal',note:'Burst self-heal on low CD — no healer needed'},
    ]
  },
  tips:{
    nl:[
      {icon:'🍺',title:'Stagger begrijpen',text:'Stagger converteert 40% van elke grote hit naar een 10-seconden DoT. Dat klinkt gevaarlijk, maar het geeft de healer tijd. Jouw taak: Purify gebruiken wanneer die DoT te hoog wordt (Heavy Stagger = rode balk in je HUD).'},
      {icon:'🔮',title:'Celestial Brew = proactief',text:'Celestial Brew geeft een groot absorb shield op basis van hoeveel je hebt gestaggered. Gebruik het VOOR de grote klap — niet erna. Goede timing hier maakt een enorm verschil voor je healer.'},
      {icon:'🥋',title:'Shuffle altijd actief',text:'Shuffle (via Blackout Kick) geeft je 20% extra dodge kans. Zonder Shuffle ben je veel kwetsbaarder. Blackout Kick is nooit een waste — het houdt je verdediging op orde.'},
      {icon:'🌀',title:'Transcendence = lifesaver',text:'Transcendence laat je een Spirit marker plaatsen en er later naar teleporteren. Zet hem altijd op een veilige positie. In M+ gebruik je dit voor mechanics die anders dodelijk zijn.'},
      {icon:'💚',title:'Expel Harm vroeg gebruiken',text:'Expel Harm heeft maar 15 sec CD en healt je voor een flink deel HP. Gebruik het actief om de healer druk te verlagen — wacht niet tot je bijna dood bent.'},
    ],
    en:[
      {icon:'🍺',title:'Understanding Stagger',text:'Stagger converts 40% of every big hit into a 10-second DoT. That sounds dangerous, but it gives the healer time. Your job: use Purify when that DoT gets too high (Heavy Stagger = red bar in your HUD).'},
      {icon:'🔮',title:'Celestial Brew = proactive',text:'Celestial Brew gives a large absorb shield based on how much you\'ve staggered. Use it BEFORE the big hit — not after. Good timing here makes an enormous difference for your healer.'},
      {icon:'🥋',title:'Shuffle always active',text:'Shuffle (via Blackout Kick) gives you 20% extra dodge chance. Without Shuffle you\'re much more vulnerable. Blackout Kick is never a waste — it keeps your defense in order.'},
      {icon:'🌀',title:'Transcendence = lifesaver',text:'Transcendence lets you place a Spirit marker and teleport to it later. Always place it in a safe position. In M+ use this for mechanics that would otherwise be deadly.'},
      {icon:'💚',title:'Expel Harm early',text:'Expel Harm has only 15 sec CD and heals you for a significant amount of HP. Use it actively to reduce healer pressure — don\'t wait until you\'re almost dead.'},
    ]
  },
  macros:{
    nl:[
      {name:'Purify op jezelf',code:'/cast [@player] Purify',note:'Direct Purify op jezelf — snelste manier bij Heavy Stagger.'},
      {name:'Transcendence snel',code:'/cast Transcendence\n/cast Transcendence: Transfer',note:'Eerste druk: place Spirit. Tweede druk: teleporteer.'},
      {name:'Celestial Brew macro',code:'/cast Celestial Brew',note:'Bind aan makkelijke knop — gebruik je constant.'},
    ],
    en:[
      {name:'Purify on self',code:'/cast [@player] Purify',note:'Direct Purify on yourself — fastest way on Heavy Stagger.'},
      {name:'Transcendence quick',code:'/cast Transcendence\n/cast Transcendence: Transfer',note:'First press: place Spirit. Second press: teleport.'},
      {name:'Celestial Brew macro',code:'/cast Celestial Brew',note:'Bind to easy key — you use it constantly.'},
    ]
  },
  resource_info:{
    nl:{
      intro:'Brewmaster gebruikt Energy (voor aanvallen) en Chi (voor finishers). Energy regenereert automatisch. Chi genereer je via Tiger Palm en Keg Smash.',
      generate:['Tiger Palm (30 Energy) → 1 Chi','Keg Smash (40 Energy) → 2 Chi','Blackout Kick kost geen Chi maar geeft Shuffle'],
      spend:['Blackout Kick (1 Chi) — Shuffle buff','Spinning Crane Kick (2 Chi) — AoE','Breath of Fire (Chi) — AoE DoT'],
      pet_tip:'💡 Nooit Energy of Chi op 0 laten komen — altijd iets in reserve voor Purify en Blackout Kick!',
      pets:[],
    },
    en:{
      intro:'Brewmaster uses Energy (for attacks) and Chi (for finishers). Energy regenerates automatically. You generate Chi via Tiger Palm and Keg Smash.',
      generate:['Tiger Palm (30 Energy) → 1 Chi','Keg Smash (40 Energy) → 2 Chi','Blackout Kick costs no Chi but gives Shuffle'],
      spend:['Blackout Kick (1 Chi) — Shuffle buff','Spinning Crane Kick (2 Chi) — AoE','Breath of Fire (Chi) — AoE DoT'],
      pet_tip:'💡 Never let Energy or Chi reach 0 — always keep something in reserve for Purify and Blackout Kick!',
      pets:[],
    }
  },
  consumables:{
    nl:[
      {type:'flask',name:'Flask of the Blood Knights',effect:'Verhoogt Agility en Stamina voor 1 uur.',note:'Altijd actief'},
      {type:'pot',name:'Potion of Recklessness',effect:'Primaire stat boost.',note:'Bij grootste pulls'},
      {type:'food',name:'Silvermoon Parade (Feast)',effect:'+Agility en Stamina via groepsfeast.',note:'Stamina cruciaal'},
      {type:'food',name:'Royal Roast',effect:'Solo food.',note:'Backup'},
      {type:'rune',name:'Void-Touched Augment Rune',effect:'+Primaire stat 1 uur.',note:'Altijd'},
    ],
    en:[
      {type:'flask',name:'Flask of the Blood Knights',effect:'Increases Agility and Stamina for 1 hour.',note:'Always active'},
      {type:'pot',name:'Potion of Recklessness',effect:'Primary stat boost.',note:'On largest pulls'},
      {type:'food',name:'Silvermoon Parade (Feast)',effect:'+Agility and Stamina via group feast.',note:'Stamina crucial'},
      {type:'food',name:'Royal Roast',effect:'Solo food.',note:'Backup'},
      {type:'rune',name:'Void-Touched Augment Rune',effect:'+Primary stat 1 hour.',note:'Always'},
    ]
  },
};
ALL_SPECS.push(SPEC_BREWMASTER_MONK);

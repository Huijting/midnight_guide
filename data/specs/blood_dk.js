if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_BLOOD_DK = {
  id:'blood_dk', icon:'🩸', class:'Death Knight',
  spec:{nl:'Blood',en:'Blood'},
  role:'tank', armor:'Plate',
  weapon:{nl:'Two-hand weapon',en:'Two-hand weapon'},
  resource:'Runes + Runic Power',
  patch:'1.0', color:'#C41E3A',

  summary:{
    nl:'Blood Death Knight is de ultieme self-healing tank. Absorbeert schade via Death Strike en genereert enorme zelfheal. Kan crashes overleven die andere tanks doden.',
    en:'Blood Death Knight is the ultimate self-healing tank. Absorbs damage via Death Strike and generates massive self-heals. Can survive crashes that kill other tanks.'
  },
  pros:{
    nl:['Beste self-healing van alle tanks','Enorme HP pool','Sterk in sustained tanking','Death Grip = unieke pull tool','Lich\'s Calling: krachtige AoE pull via talent'],
    en:['Best self-healing of all tanks','Massive HP pool','Strong in sustained tanking','Death Grip = unique pull tool','Lich\'s Calling: powerful AoE pull via talent']
  },
  cons:{
    nl:['Lage mobility','Rune management is complex','Kwetsbaar voor magic schade burst','Geen externe defensieve voor groep'],
    en:['Low mobility','Rune management is complex','Vulnerable to magic damage burst','No external defensives for group']
  },

  cheatsheet:{
    nl:{
      opener:'Death Grip → Blood Boil → Bone Shield opbouwen → Death Strike → Marrowrend → Dancing Rune Weapon',
      single:'Marrowrend (Bone Shield <7) → Heart Strike → Death Strike bij >30% HP verlies → Blood Boil op CD',
      aoe:'Blood Boil spam → Death and Decay → Heart Strike cleave → Death Strike voor heal',
      rules:[
        'Bone Shield ALTIJD boven 5 stacks houden — Marrowrend bij <7',
        'Death Strike gebruiken na grote schade voor maximale absorb shield',
        'Dancing Rune Weapon op CD — verdubbelt je threat en gen',
        'Blood Boil op CD houden voor Crimson Scourge procs (gratis Death and Decay)',
        'Nooit je Runic Power verspillen — Death Strike is je overleving',
      ],
    },
    en:{
      opener:'Death Grip → Blood Boil → build Bone Shield → Death Strike → Marrowrend → Dancing Rune Weapon',
      single:'Marrowrend (Bone Shield <7) → Heart Strike → Death Strike after >30% HP loss → Blood Boil on CD',
      aoe:'Blood Boil spam → Death and Decay → Heart Strike cleave → Death Strike for heal',
      rules:[
        'Keep Bone Shield ALWAYS above 5 stacks — Marrowrend at <7',
        'Use Death Strike after big damage for maximum absorb shield',
        'Dancing Rune Weapon on CD — doubles your threat and generation',
        'Keep Blood Boil on CD for Crimson Scourge procs (free Death and Decay)',
        'Never waste Runic Power — Death Strike is your survival',
      ],
    }
  },

  rotation:{
    nl:{
      apex_tip:'💡 Death Strike healt meer naarmate je meer schade hebt geabsorbeerd. Wacht nooit te lang — gebruik het na een grote hit voor de maximale shield!',
      opener:[
        {spell:'Death Grip',           why:'Trek de eerste mob naar je toe om aggro te pakken'},
        {spell:'Blood Boil',           why:'Directe AoE aggro + Crimson Scourge proc kans'},
        {spell:'Marrowrend',           why:'Bone Shield opbouwen — minimaal 5 stacks nodig'},
        {spell:'Dancing Rune Weapon',  why:'Grote opener CD — verdubbelt effectiviteit'},
        {spell:'Death Strike',         why:'Eerste heal + Blood Shield opbouwen'},
        {spell:'Heart Strike',         why:'Hoofd Rune spender, genereert Runic Power'},
      ],
      single:[
        {spell:'Marrowrend',           why:'Bone Shield <7 stacks — topprioriteit voor overleving'},
        {spell:'Death Strike',         why:'Na grote hit voor maximale Blood Shield absorb'},
        {spell:'Heart Strike',         why:'Hoofd aanval — genereert Runic Power'},
        {spell:'Blood Boil',           why:'Op CD houden — Crimson Scourge proc voor gratis DnD'},
        {spell:'Death and Decay',      why:'Bij Crimson Scourge proc — gratis plaatsen'},
        {spell:'Dancing Rune Weapon',  why:'Op CD — altijd combineren met grote pulls'},
      ],
      aoe:[
        {spell:'Death and Decay',      why:'Grond AoE — gooi altijd neer bij packs'},
        {spell:'Blood Boil',           why:'Raakt alle vijanden — beste AoE Rune spender'},
        {spell:'Heart Strike',         why:'Cleave in Death and Decay — raakt meerdere targets'},
        {spell:'Death Strike',         why:'Heal blijft prioriteit ook in AoE'},
        {spell:'Marrowrend',           why:'Bone Shield bijhouden ook in AoE packs'},
      ],
    },
    en:{
      apex_tip:'💡 Death Strike heals more based on damage absorbed. Never wait too long — use it after a big hit for maximum shield!',
      opener:[
        {spell:'Death Grip',           why:'Pull the first mob to you to grab aggro'},
        {spell:'Blood Boil',           why:'Immediate AoE aggro + Crimson Scourge proc chance'},
        {spell:'Marrowrend',           why:'Build Bone Shield — minimum 5 stacks needed'},
        {spell:'Dancing Rune Weapon',  why:'Major opener CD — doubles effectiveness'},
        {spell:'Death Strike',         why:'First heal + build Blood Shield'},
        {spell:'Heart Strike',         why:'Main Rune spender, generates Runic Power'},
      ],
      single:[
        {spell:'Marrowrend',           why:'Bone Shield <7 stacks — top priority for survival'},
        {spell:'Death Strike',         why:'After big hit for maximum Blood Shield absorb'},
        {spell:'Heart Strike',         why:'Main attack — generates Runic Power'},
        {spell:'Blood Boil',           why:'Keep on CD — Crimson Scourge proc for free DnD'},
        {spell:'Death and Decay',      why:'On Crimson Scourge proc — place for free'},
        {spell:'Dancing Rune Weapon',  why:'On CD — always combine with big pulls'},
      ],
      aoe:[
        {spell:'Death and Decay',      why:'Ground AoE — always place on packs'},
        {spell:'Blood Boil',           why:'Hits all enemies — best AoE Rune spender'},
        {spell:'Heart Strike',         why:'Cleave inside Death and Decay — hits multiple targets'},
        {spell:'Death Strike',         why:'Healing remains priority even in AoE'},
        {spell:'Marrowrend',           why:'Keep Bone Shield up even in AoE packs'},
      ],
    }
  },

  stats:{
    nl:{
      tip:'Strength is altijd #1. Haste verlaagt de GCD en versnelt Rune recharge. Mastery: Blood Shield vergroot je absorb — zeer waardevol als tank.',
      list:[
        {rank:1,stat:'Strength',       bars:5,note:'Primaire stat — altijd hoogste ilvl pakken'},
        {rank:2,stat:'Haste',          bars:4,note:'Snellere Rune recharge + lagere GCD'},
        {rank:3,stat:'Mastery',        bars:4,note:'Mastery: Blood Shield — grotere absorb na Death Strike'},
        {rank:4,stat:'Versatility',    bars:3,note:'Schade + healing boost, ook damage reduction'},
        {rank:5,stat:'Critical Strike',bars:1,note:'Laagste waarde als tank'},
      ],
    },
    en:{
      tip:'Strength is always #1. Haste lowers the GCD and speeds up Rune recharge. Mastery: Blood Shield increases your absorb — very valuable as a tank.',
      list:[
        {rank:1,stat:'Strength',       bars:5,note:'Primary stat — always take highest ilvl'},
        {rank:2,stat:'Haste',          bars:4,note:'Faster Rune recharge + lower GCD'},
        {rank:3,stat:'Mastery',        bars:4,note:'Mastery: Blood Shield — larger absorb after Death Strike'},
        {rank:4,stat:'Versatility',    bars:3,note:'Damage + healing boost, also damage reduction'},
        {rank:5,stat:'Critical Strike',bars:1,note:'Lowest value as tank'},
      ],
    }
  },

  cooldowns:{
    nl:[
      {spell:'Dancing Rune Weapon',  cd:'2 min',  effect:'Verdubbelt effectiviteit 8 sec — parry + extra threat',      when:'Op pull en elke grote pack'},
      {spell:'Vampiric Blood',       cd:'1.5 min', effect:'+30% max HP + versterkt heals 10 sec',                      when:'Bij grote schade spikes of moeilijke fase'},
      {spell:'Icebound Fortitude',   cd:'3 min',  effect:'30% schade reductie 8 sec + immuun voor stuns',              when:'Noodsituatie of grote mechanic'},
      {spell:'Rune Tap',             cd:'25 sec', effect:'Instant 10% HP heal — kort CD nood heal',                    when:'Als je HP snel daalt tussen Death Strikes'},
      {spell:'Anti-Magic Shell',     cd:'1 min',  effect:'Absorbeert 100% magic schade 5 sec',                        when:'Bij magic-heavy boss mechanics'},
    ],
    en:[
      {spell:'Dancing Rune Weapon',  cd:'2 min',  effect:'Doubles effectiveness 8 sec — parry + extra threat',        when:'On pull and every large pack'},
      {spell:'Vampiric Blood',       cd:'1.5 min', effect:'+30% max HP + strengthens heals 10 sec',                   when:'During big damage spikes or difficult phase'},
      {spell:'Icebound Fortitude',   cd:'3 min',  effect:'30% damage reduction 8 sec + immune to stuns',              when:'Emergency or major mechanic'},
      {spell:'Rune Tap',             cd:'25 sec', effect:'Instant 10% HP heal — short CD emergency heal',             when:'When HP drops fast between Death Strikes'},
      {spell:'Anti-Magic Shell',     cd:'1 min',  effect:'Absorbs 100% magic damage 5 sec',                          when:'During magic-heavy boss mechanics'},
    ]
  },

  utility:{
    nl:[
      {spell:'Death Grip',             type:'Pull',        note:'Trek 1 vijand naar je toe — uniek in het spel'},
      {spell:'Chains of Ice',          type:'Slow',        note:'70% movement slow — kiting tool'},
      {spell:'Mind Freeze',            type:'Interrupt',   note:'Interrupt op 15 sec CD — ook als tank essentieel'},
      {spell:'Death Grip (Gorefiend)', type:'Pull',        note:'Met talent: AoE death grip van alle vijanden in gebied'},
      {spell:'Anti-Magic Zone',        type:'Defensief',   note:'Grote AoE magic absorb koepel voor de groep'},
      {spell:'Raise Ally',             type:'Ress',        note:'Battle ress op 10 min CD'},
    ],
    en:[
      {spell:'Death Grip',             type:'Pull',        note:'Pull 1 enemy to you — unique in the game'},
      {spell:'Chains of Ice',          type:'Slow',        note:'70% movement slow — kiting tool'},
      {spell:'Mind Freeze',            type:'Interrupt',   note:'Interrupt on 15 sec CD — essential even as tank'},
      {spell:'Death Grip (Gorefiend)', type:'Pull',        note:'With talent: AoE death grip of all enemies in area'},
      {spell:'Anti-Magic Zone',        type:'Defensive',   note:'Large AoE magic absorb dome for the group'},
      {spell:'Raise Ally',             type:'Ress',        note:'Battle ress on 10 min CD'},
    ]
  },

  tips:{
    nl:[
      {icon:'🩸',title:'Death Strike timing',      text:'Death Strike healt op basis van schade die je de afgelopen 5 sec hebt gekregen. Gebruik het NET NA een grote hit — nooit als preventief als je full HP bent. Hoe meer je neemt, hoe groter de Blood Shield.'},
      {icon:'🦴',title:'Bone Shield = je leven',   text:'Bone Shield geeft je 10% schade reductie per stack (tot max). Laat het nooit onder 5 zakken. Marrowrend heeft prioriteit boven alles als de stacks laag zijn — ook boven Death Strike.'},
      {icon:'💃',title:'Dancing Rune Weapon',       text:'DRW kopieert jouw attacks en verdubbelt effectief je Rune generatie. Gooi hem altijd op pull bij een grote pack. In M+: bewaar hem voor de gevaarlijkste pull of de boss.'},
      {icon:'🧲',title:'Death Grip als tool',       text:'Death Grip is niet alleen voor tanken — het is ook je interrupt op afstand, mobility tool, en mechanic-solver. In M+ kun je een caster naar je toe grippen om interrupts te besparen.'},
      {icon:'🛡️',title:'Magic spikes overleven',  text:'Bij magic-heavy fights: Anti-Magic Shell absorbeert tot 100% van alle magic schade. Gebruik het proactief vóór een bekende magic burst — niet reactief achteraf.'},
    ],
    en:[
      {icon:'🩸',title:'Death Strike timing',      text:'Death Strike heals based on damage taken in the last 5 sec. Use it RIGHT AFTER a big hit — never preventively at full HP. The more damage you\'ve taken, the larger the Blood Shield.'},
      {icon:'🦴',title:'Bone Shield = your life',  text:'Bone Shield gives 10% damage reduction per stack (to max). Never let it drop below 5. Marrowrend has priority over everything when stacks are low — even over Death Strike.'},
      {icon:'💃',title:'Dancing Rune Weapon',       text:'DRW copies your attacks and effectively doubles your Rune generation. Always use on pull with a large pack. In M+: save it for the most dangerous pull or the boss.'},
      {icon:'🧲',title:'Death Grip as a tool',      text:'Death Grip isn\'t just for tanking — it\'s also a ranged interrupt, mobility tool, and mechanic solver. In M+ you can grip a caster to you to save on interrupts.'},
      {icon:'🛡️',title:'Surviving magic spikes',  text:'In magic-heavy fights: Anti-Magic Shell absorbs up to 100% of all magic damage. Use it proactively BEFORE a known magic burst — not reactively afterward.'},
    ]
  },

  macros:{
    nl:[
      {name:'Mind Freeze (Focus Kick)', code:'#showtooltip Mind Freeze\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Mind Freeze', note:'Kick op focus > mouseover > target. Essentieel ook als tank!'},
      {name:'Death Grip + Chains combo', code:'#showtooltip Death Grip\n/cast Death Grip\n/cast Chains of Ice', note:'Grip + direct slow — mob kan niet meer weglopen.'},
      {name:'Vampiric Blood + Rune Tap', code:'/cast Vampiric Blood\n/cast Rune Tap', note:'Nood-heal combo — maximaal HP herstel in één knop.'},
    ],
    en:[
      {name:'Mind Freeze (Focus Kick)', code:'#showtooltip Mind Freeze\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Mind Freeze', note:'Kick on focus > mouseover > target. Essential even as tank!'},
      {name:'Death Grip + Chains combo', code:'#showtooltip Death Grip\n/cast Death Grip\n/cast Chains of Ice', note:'Grip + immediate slow — mob can\'t run away anymore.'},
      {name:'Vampiric Blood + Rune Tap', code:'/cast Vampiric Blood\n/cast Rune Tap', note:'Emergency heal combo — maximum HP recovery in one button.'},
    ]
  },

  resource_info:{
    nl:{
      intro:'Blood DK gebruikt Runes (6 stuks, regenereren over tijd) en Runic Power (0-125). Runes zijn je aanvalsresource. Runic Power wordt gespend aan Death Strike — je overlevingstool.',
      generate:[
        'Heart Strike — verbruikt 1 Blood Rune, genereert 15 Runic Power',
        'Marrowrend — verbruikt 2 Runes, genereert 20 Runic Power',
        'Blood Boil — verbruikt 1 Blood Rune',
        'Runes regeneren automatisch over 10 sec per Rune',
      ],
      spend:[
        'Death Strike — kost 45 Runic Power, genereert Blood Shield (absorb)',
        'Rune Tap — kost 25 Runic Power, instant heal',
        'Dancing Rune Weapon — geen Runic Power kosten maar boost Rune gen',
      ],
      pet_tip:'💡 Nooit Runic Power verspillen aan het cap — gebruik Death Strike zodra je boven 80 RP zit of na een grote hit. Runic Power = leven!',
      pets:[],
    },
    en:{
      intro:'Blood DK uses Runes (6 total, recharge over time) and Runic Power (0-125). Runes are your attack resource. Runic Power is spent on Death Strike — your survival tool.',
      generate:[
        'Heart Strike — uses 1 Blood Rune, generates 15 Runic Power',
        'Marrowrend — uses 2 Runes, generates 20 Runic Power',
        'Blood Boil — uses 1 Blood Rune',
        'Runes recharge automatically over 10 sec per Rune',
      ],
      spend:[
        'Death Strike — costs 45 Runic Power, generates Blood Shield (absorb)',
        'Rune Tap — costs 25 Runic Power, instant heal',
        'Dancing Rune Weapon — no Runic Power cost but boosts Rune gen',
      ],
      pet_tip:'💡 Never waste Runic Power at the cap — use Death Strike once above 80 RP or after a big hit. Runic Power = life!',
      pets:[],
    }
  },

  consumables:{
    nl:[
      {type:'flask', name:'Flask of the Shattered Sun',  effect:'Verhoogt Strength significant voor 1 uur.',          note:'Altijd actief'},
      {type:'pot',   name:'Potion of Withering Vitality', effect:'Groot HP herstel en tijdelijke HP boost.',            note:'Op pull of bij grote schade fase'},
      {type:'food',  name:'Silvermoon Parade (Feast)',    effect:'+Strength en Stamina via groepsfeast.',              note:'Feast vragen'},
      {type:'food',  name:'Hearty Feast backup',          effect:'Solo food — Strength + Stamina backup.',             note:'Backup als geen feast'},
      {type:'rune',  name:'Void-Touched Augment Rune',     effect:'+Primaire stat 1 uur.',                              note:'Altijd gebruiken'},
    ],
    en:[
      {type:'flask', name:'Flask of the Shattered Sun',  effect:'Significantly increases Strength for 1 hour.',       note:'Always active'},
      {type:'pot',   name:'Potion of Withering Vitality', effect:'Large HP restore and temporary HP boost.',           note:'On pull or during major damage phase'},
      {type:'food',  name:'Silvermoon Parade (Feast)',    effect:'+Strength and Stamina via group feast.',             note:'Ask for feast'},
      {type:'food',  name:'Hearty Feast backup',          effect:'Solo food — Strength + Stamina backup.',            note:'Backup if no feast'},
      {type:'rune',  name:'Void-Touched Augment Rune',     effect:'+Primary stat 1 hour.',                             note:'Always use'},
    ]
  },
};
ALL_SPECS.push(SPEC_BLOOD_DK);

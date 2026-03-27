if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_WINDWALKER_MONK = {
  id:'windwalker_monk', icon:'🌪️', class:'Monk',
  spec:{nl:'Windwalker',en:'Windwalker'},
  role:'melee', armor:'Leather',
  weapon:{nl:'Two one-hand weapons',en:'Two one-hand weapons'},
  resource:'Energy + Chi',
  patch:'1.0', color:'#00FF98',
  summary:{
    nl:'Windwalker is een snelle melee DPS met uitstekende mobiliteit en burst via Storm, Earth and Fire. Bouwt Chi op voor Strike of the Windlord en Fists of Fury. Unieke mechanic: Mastery verhoogt schade als je beweegt.',
    en:'Windwalker is a fast melee DPS with excellent mobility and burst via Storm, Earth and Fire. Builds Chi for Strike of the Windlord and Fists of Fury. Unique mechanic: Mastery increases damage when you move.'
  },
  pros:{
    nl:['Uitstekende mobiliteit — Roll + Flying Serpent Kick','Sterke burst via Storm, Earth and Fire','Goede AoE via Spinning Crane Kick','Unieke utility (Paralysis, Leg Sweep, Transcendence)','Lage instap, hoge skill ceiling'],
    en:['Excellent mobility — Roll + Flying Serpent Kick','Strong burst via Storm, Earth and Fire','Good AoE via Spinning Crane Kick','Unique utility (Paralysis, Leg Sweep, Transcendence)','Low entry, high skill ceiling']
  },
  cons:{
    nl:['Chi management vereist aandacht','Fists of Fury verplicht stilstaan','Minder sustained DPS tussen burst windows','Tea cooldown vereist planning'],
    en:['Chi management requires attention','Fists of Fury requires standing still','Less sustained DPS between burst windows','Tea cooldown requires planning']
  },
  cheatsheet:{
    nl:{
      opener:'Tiger Palm → Rising Sun Kick → Blackout Kick → Storm, Earth and Fire → Strike of the Windlord → Fists of Fury',
      single:'Rising Sun Kick → Blackout Kick → Tiger Palm Chi generator → Strike of the Windlord op CD',
      aoe:'Spinning Crane Kick × 3 → Rising Sun Kick → Storm, Earth and Fire → Strike of the Windlord',
      rules:[
        'Rising Sun Kick altijd op CD — hoogste prioriteit',
        'Storm, Earth and Fire voor burst — altijd met Strike of the Windlord combineren',
        'Fists of Fury channel nooit onderbreken — grote schade',
        'Chi niet laten overvloeien — dump via Blackout Kick',
        'Spinning Crane Kick bij 3+ targets in AoE',
      ],
    },
    en:{
      opener:'Tiger Palm → Rising Sun Kick → Blackout Kick → Storm, Earth and Fire → Strike of the Windlord → Fists of Fury',
      single:'Rising Sun Kick → Blackout Kick → Tiger Palm Chi generator → Strike of the Windlord on CD',
      aoe:'Spinning Crane Kick × 3 → Rising Sun Kick → Storm, Earth and Fire → Strike of the Windlord',
      rules:[
        'Rising Sun Kick always on CD — highest priority',
        'Storm, Earth and Fire for burst — always combine with Strike of the Windlord',
        'Never interrupt Fists of Fury channel — major damage',
        'Don\'t let Chi overflow — dump via Blackout Kick',
        'Spinning Crane Kick at 3+ targets in AoE',
      ],
    }
  },
  rotation:{
    nl:{
      apex_tip:'💡 Storm, Earth and Fire splitst jou in 3 geesten die tegelijk aanvallen. Gebruik het ALTIJD samen met Strike of the Windlord en Fists of Fury voor maximale burst — de geesten kopiëren al je aanvallen!',
      opener:[
        {spell:'Tiger Palm',why:'Chi generatie — voor burst window'},
        {spell:'Rising Sun Kick',why:'Highest prio aanval — altijd eerst'},
        {spell:'Storm, Earth and Fire',why:'Split in 3 geesten voor burst'},
        {spell:'Strike of the Windlord',why:'Grootste burst aanval'},
        {spell:'Fists of Fury',why:'Channel — schade kanaal max houden'},
      ],
      single:[
        {spell:'Rising Sun Kick',why:'Altijd op CD — hoogste prioriteit'},
        {spell:'Fists of Fury',why:'Grote schade — nooit onderbreken'},
        {spell:'Strike of the Windlord',why:'Op CD — burst finisher'},
        {spell:'Blackout Kick',why:'Chi dump — voorkomt overflow'},
        {spell:'Tiger Palm',why:'Chi generator filler'},
      ],
      aoe:[
        {spell:'Spinning Crane Kick',why:'AoE aanval — 3+ targets'},
        {spell:'Rising Sun Kick',why:'Altijd op CD ook in AoE'},
        {spell:'Storm, Earth and Fire',why:'AoE burst — geesten kopiëren SCK'},
        {spell:'Strike of the Windlord',why:'AoE burst aanval'},
        {spell:'Fists of Fury',why:'AoE channel schade'},
      ],
    },
    en:{
      apex_tip:'💡 Storm, Earth and Fire splits you into 3 spirits that attack simultaneously. ALWAYS use it together with Strike of the Windlord and Fists of Fury for maximum burst — the spirits copy all your attacks!',
      opener:[
        {spell:'Tiger Palm',why:'Chi generation — before burst window'},
        {spell:'Rising Sun Kick',why:'Highest prio attack — always first'},
        {spell:'Storm, Earth and Fire',why:'Split into 3 spirits for burst'},
        {spell:'Strike of the Windlord',why:'Largest burst attack'},
        {spell:'Fists of Fury',why:'Channel — maximize damage channel'},
      ],
      single:[
        {spell:'Rising Sun Kick',why:'Always on CD — highest priority'},
        {spell:'Fists of Fury',why:'Major damage — never interrupt'},
        {spell:'Strike of the Windlord',why:'On CD — burst finisher'},
        {spell:'Blackout Kick',why:'Chi dump — prevents overflow'},
        {spell:'Tiger Palm',why:'Chi generator filler'},
      ],
      aoe:[
        {spell:'Spinning Crane Kick',why:'AoE attack — 3+ targets'},
        {spell:'Rising Sun Kick',why:'Always on CD even in AoE'},
        {spell:'Storm, Earth and Fire',why:'AoE burst — spirits copy SCK'},
        {spell:'Strike of the Windlord',why:'AoE burst attack'},
        {spell:'Fists of Fury',why:'AoE channel damage'},
      ],
    }
  },
  stats:{
    nl:{
      tip:'Agility is primair. Mastery verhoogt schade terwijl je beweegt — uniek voor Windwalker. Haste verlaagt Energy regen tijd.',
      list:[
        {rank:1,stat:'Agility',bars:5,note:'Primaire stat'},
        {rank:2,stat:'Mastery',bars:4,note:'Schade bonus bij beweging (Dance of Chi-Ji)'},
        {rank:3,stat:'Critical Strike',bars:3,note:'Grotere aanvallen + procs'},
        {rank:4,stat:'Versatility',bars:2,note:'Schade + overleving'},
        {rank:5,stat:'Haste',bars:2,note:'Energy regen en GCD reductie'},
      ],
    },
    en:{
      tip:'Agility is primary. Mastery increases damage while moving — unique to Windwalker. Haste reduces Energy regen time.',
      list:[
        {rank:1,stat:'Agility',bars:5,note:'Primary stat'},
        {rank:2,stat:'Mastery',bars:4,note:'Damage bonus while moving (Dance of Chi-Ji)'},
        {rank:3,stat:'Critical Strike',bars:3,note:'Bigger attacks + procs'},
        {rank:4,stat:'Versatility',bars:2,note:'Damage + survival'},
        {rank:5,stat:'Haste',bars:2,note:'Energy regen and GCD reduction'},
      ],
    }
  },
  cooldowns:{
    nl:[
      {spell:'Storm, Earth and Fire',cd:'1.5 min',effect:'Splitst in 3 geesten die tegelijk aanvallen',when:'Op pull + elke boss fase — altijd met Strike of the Windlord'},
      {spell:'Strike of the Windlord',cd:'40 sec',effect:'Krachtige aanval, reset Rising Sun Kick',when:'Altijd op CD — nooit missen'},
      {spell:'Serenity',cd:'3 min',effect:'Vervangt SEF: alle chi kosten 0 + schade boost',when:'Talent alternatief voor SEF — grotere burst'},
      {spell:'Touch of Death',cd:'2 min',effect:'Instant kill bij <15% HP of enorme schade',when:'Execute fase of grootste burst moment'},
      {spell:'Invoke Xuen',cd:'3 min',effect:'Witte tijger summon doet AoE schade',when:'Grote pulls of boss opener'},
    ],
    en:[
      {spell:'Storm, Earth and Fire',cd:'1.5 min',effect:'Splits into 3 spirits that attack simultaneously',when:'On pull + every boss phase — always with Strike of the Windlord'},
      {spell:'Strike of the Windlord',cd:'40 sec',effect:'Powerful attack, resets Rising Sun Kick',when:'Always on CD — never miss'},
      {spell:'Serenity',cd:'3 min',effect:'Replaces SEF: all chi costs 0 + damage boost',when:'Talent alternative to SEF — bigger burst'},
      {spell:'Touch of Death',cd:'2 min',effect:'Instant kill at <15% HP or massive damage',when:'Execute phase or largest burst moment'},
      {spell:'Invoke Xuen',cd:'3 min',effect:'White tiger summon does AoE damage',when:'Large pulls or boss opener'},
    ]
  },
  utility:{
    nl:[
      {spell:'Paralysis',type:'CC',note:'Single target stun 1 min — interrupt cast'},
      {spell:'Leg Sweep',type:'AoE Stun',note:'AoE stun 3 sec in bereik'},
      {spell:'Transcendence',type:'Mobiliteit',note:'Spirit marker teleport — unieke positional reset'},
      {spell:'Flying Serpent Kick',type:'Gap closer',note:'Snelle sprint naar target'},
      {spell:'Spear Hand Strike',type:'Interrupt',note:'Interrupt en silence 4 sec'},
    ],
    en:[
      {spell:'Paralysis',type:'CC',note:'Single target stun 1 min — interrupt cast'},
      {spell:'Leg Sweep',type:'AoE Stun',note:'AoE stun 3 sec in range'},
      {spell:'Transcendence',type:'Mobility',note:'Spirit marker teleport — unique positional reset'},
      {spell:'Flying Serpent Kick',type:'Gap closer',note:'Fast sprint to target'},
      {spell:'Spear Hand Strike',type:'Interrupt',note:'Interrupt and silence 4 sec'},
    ]
  },
  tips:{
    nl:[
      {icon:'🌪️',title:'Storm, Earth and Fire = burst kern',text:'SEF splitst jou in 3 kopieën die alle aanvallen dupliceren. Activeer het altijd samen met Strike of the Windlord en Fists of Fury — dan doet elke geest ook die aanvallen. Nooit los gebruiken.'},
      {icon:'🥊',title:'Fists of Fury nooit onderbreken',text:'Fists of Fury is een 4-seconden kanaal en doet enorme schade. Zorg dat je veilig staat voor je het gebruikt — bewegen annuleert het. Plan het dus voor mechanics.'},
      {icon:'⚡',title:'Chi niet laten overvloeien',text:'Je maximum Chi is 5. Tiger Palm genereert Chi — stop ermee als je al 4 hebt. Overflowing Chi is verloren schade. Dump altijd eerst via Blackout Kick.'},
      {icon:'🌀',title:'Transcendence voor mechanics',text:'Zet je Transcendence Spirit altijd op een veilige plek buiten de boss. Bij een mechanic die je moet vermijden: teleporteer terug naar Spirit. Gratis escape zonder DPS verlies.'},
      {icon:'🎯',title:'Touch of Death = execute',text:'Touch of Death doet enorme schade onder 15% HP van de boss. Bewaar het voor execute fase — het is je grootste single-hit aanval en heeft slechts 2 min CD.'},
    ],
    en:[
      {icon:'🌪️',title:'Storm, Earth and Fire = burst core',text:'SEF splits you into 3 copies that duplicate all attacks. Always activate it together with Strike of the Windlord and Fists of Fury — the spirits also perform those attacks. Never use it alone.'},
      {icon:'🥊',title:'Never interrupt Fists of Fury',text:'Fists of Fury is a 4-second channel and does enormous damage. Make sure you\'re standing safely before using it — moving cancels it. Plan it around mechanics.'},
      {icon:'⚡',title:'Don\'t let Chi overflow',text:'Your maximum Chi is 5. Tiger Palm generates Chi — stop when you already have 4. Overflowing Chi is wasted damage. Always dump first via Blackout Kick.'},
      {icon:'🌀',title:'Transcendence for mechanics',text:'Always place your Transcendence Spirit in a safe spot away from the boss. On a mechanic you need to avoid: teleport back to Spirit. Free escape without DPS loss.'},
      {icon:'🎯',title:'Touch of Death = execute',text:'Touch of Death does enormous damage below 15% HP of the boss. Save it for the execute phase — it\'s your largest single-hit attack and only has 2 min CD.'},
    ]
  },
  macros:{
    nl:[
      {name:'SEF + Strike combo',code:'/cast Storm, Earth and Fire\n/cast Strike of the Windlord',note:'Burst opener — beide tegelijk voor maximale geest-schade.'},
      {name:'Touch of Death snel',code:'/cast Touch of Death',note:'Execute finisher — bind aan duidelijke knop.'},
      {name:'Transcendence transfer',code:'/cast Transcendence: Transfer',note:'Teleporteer naar Spirit — snelle escape.'},
    ],
    en:[
      {name:'SEF + Strike combo',code:'/cast Storm, Earth and Fire\n/cast Strike of the Windlord',note:'Burst opener — both together for maximum spirit damage.'},
      {name:'Touch of Death quick',code:'/cast Touch of Death',note:'Execute finisher — bind to clear button.'},
      {name:'Transcendence transfer',code:'/cast Transcendence: Transfer',note:'Teleport to Spirit — quick escape.'},
    ]
  },
  resource_info:{
    nl:{
      intro:'Windwalker gebruikt Energy (automatisch) en Chi (finishers). Energy regenereert vanzelf. Chi genereer je via Tiger Palm en andere aanvallen.',
      generate:['Tiger Palm (25 Energy) → 1 Chi','Expel Harm → 1 Chi','Keg Smash is Brewmaster only'],
      spend:['Strike of the Windlord (2 Chi) — burst aanval','Fists of Fury (3 Chi) — channel AoE','Blackout Kick (1 Chi) — Chi dump','Spinning Crane Kick (2 Chi) — AoE'],
      pet_tip:'💡 Houd altijd 3 Chi in reserve voor Fists of Fury — dump nooit alles net voor je het wilt gebruiken!',
      pets:[],
    },
    en:{
      intro:'Windwalker uses Energy (automatic) and Chi (finishers). Energy regenerates automatically. You generate Chi via Tiger Palm and other attacks.',
      generate:['Tiger Palm (25 Energy) → 1 Chi','Expel Harm → 1 Chi','Keg Smash is Brewmaster only'],
      spend:['Strike of the Windlord (2 Chi) — burst attack','Fists of Fury (3 Chi) — channel AoE','Blackout Kick (1 Chi) — Chi dump','Spinning Crane Kick (2 Chi) — AoE'],
      pet_tip:'💡 Always keep 3 Chi in reserve for Fists of Fury — never dump everything just before you want to use it!',
      pets:[],
    }
  },
  consumables:{
    nl:[
      {type:'flask',name:'Flask of the Blood Knights',effect:'Verhoogt Agility voor 1 uur.',note:'Altijd actief'},
      {type:'pot',name:'Potion of Recklessness',effect:'Agility burst bij SEF window.',note:'Op pull'},
      {type:'food',name:'Silvermoon Parade (Feast)',effect:'+Agility en Stamina.',note:'Feast vragen'},
      {type:'food',name:'Royal Roast',effect:'Solo food.',note:'Backup'},
      {type:'rune',name:'Void-Touched Augment Rune',effect:'+Primaire stat.',note:'Altijd'},
    ],
    en:[
      {type:'flask',name:'Flask of the Blood Knights',effect:'Increases Agility for 1 hour.',note:'Always active'},
      {type:'pot',name:'Potion of Recklessness',effect:'Agility burst during SEF window.',note:'On pull'},
      {type:'food',name:'Silvermoon Parade (Feast)',effect:'+Agility and Stamina.',note:'Ask for feast'},
      {type:'food',name:'Royal Roast',effect:'Solo food.',note:'Backup'},
      {type:'rune',name:'Void-Touched Augment Rune',effect:'+Primary stat.',note:'Always'},
    ]
  },
};
ALL_SPECS.push(SPEC_WINDWALKER_MONK);

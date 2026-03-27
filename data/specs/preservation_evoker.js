if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_PRESERVATION_EVOKER = {
  id:'preservation_evoker', icon:'🌊', class:'Evoker',
  spec:{nl:'Preservation',en:'Preservation'},
  role:'heal', armor:'Mail',
  weapon:{nl:'Two-hand weapon',en:'Two-hand weapon'},
  resource:'Mana + Essence',
  patch:'1.0', color:'#33937F',
  summary:{
    nl:'Preservation Evoker healt via tijdmagie — spells kunnen teruggespoeld worden met Rewind. Uniek: Echo laat spells twee keer healen. Hover geeft mobiliteit tijdens casten. Sterke groeps-CD met Stasis.',
    en:'Preservation Evoker heals via time magic — spells can be rewound with Rewind. Unique: Echo makes spells heal twice. Hover gives mobility while casting. Strong group CD with Stasis.'
  },
  pros:{
    nl:['Echo = elke heal doet twee keer','Rewind = unieke tijdterugspoeling voor tank','Hover = bewegen tijdens casten','Stasis = krachtige groeps-CD','Rescue = Red groepslid uit mechanic'],
    en:['Echo = every heal happens twice','Rewind = unique time rewind for tank','Hover = move while casting','Stasis = powerful group CD','Rescue = save group member from mechanic']
  },
  cons:{
    nl:['Kort bereik (25 yards)','Echo management vergt aandacht','Alleen speelbaar als Dracthyr','Minder sterk in puur single target healing'],
    en:['Short range (25 yards)','Echo management requires attention','Only playable as Dracthyr','Weaker in pure single target healing']
  },
  cheatsheet:{
    nl:{
      opener:'Echo op tank → Emerald Blossom → Spiritbloom → Living Flame filler',
      single:'Echo op tank → Reversion HoT → Living Flame filler → Verdant Embrace bij nood',
      aoe:'Echo verspreiden → Emerald Blossom AoE → Dream Breath (charge) → Stasis bij grote schade',
      rules:[
        'Echo altijd op de tank — elke heal doet dan twee keer',
        'Rewind bewaren voor als de tank bijna sterft — tijdterugspoeling',
        'Hover proactief bij movement mechanics',
        'Stasis bewaren voor grote voorspelbare groepsschade',
        'Essence nooit op 0 — altijd iets in reserve voor nood',
      ],
    },
    en:{
      opener:'Echo on tank → Emerald Blossom → Spiritbloom → Living Flame filler',
      single:'Echo on tank → Reversion HoT → Living Flame filler → Verdant Embrace in emergency',
      aoe:'Spread Echo → Emerald Blossom AoE → Dream Breath (charge) → Stasis on major damage',
      rules:[
        'Echo always on the tank — every heal then happens twice',
        'Save Rewind for when the tank is almost dying — time rewind',
        'Hover proactively on movement mechanics',
        'Save Stasis for large predictable group damage',
        'Never let Essence reach 0 — always keep something for emergency',
      ],
    }
  },
  rotation:{
    nl:{
      apex_tip:'💡 Echo laat je volgende heal twee keer werken op hetzelfde target. Zet Echo ALTIJD op de tank voor je healt — elke cast (Reversion, Verdant Embrace, Emerald Blossom) gaat dan dubbel!',
      opener:[
        {spell:'Echo',why:'Tank: volgende heal doet 2x'},
        {spell:'Reversion',why:'HoT op tank — dubbel via Echo'},
        {spell:'Emerald Blossom',why:'AoE HoT zone voor groep'},
        {spell:'Spiritbloom',why:'Grote single target heal'},
        {spell:'Living Flame',why:'Mana-efficiënte filler'},
      ],
      single:[
        {spell:'Echo',why:'Altijd op tank voor heals'},
        {spell:'Reversion',why:'HoT op CD — efficiënt'},
        {spell:'Living Flame',why:'Goedkope filler'},
        {spell:'Verdant Embrace',why:'Noodheal — groot + instant'},
        {spell:'Rewind',why:'Tank bijna dood — tijdterugspoeling'},
      ],
      aoe:[
        {spell:'Echo verspreiden',why:'Meerdere targets = meer dubbele heals'},
        {spell:'Emerald Blossom',why:'AoE HoT — altijd op groep'},
        {spell:'Dream Breath',why:'Empower kanaal — AoE heal'},
        {spell:'Spiritbloom',why:'Grote single target boost'},
        {spell:'Stasis',why:'Sla heals op voor grote uitbarsting'},
      ],
    },
    en:{
      apex_tip:'💡 Echo makes your next heal work twice on the same target. ALWAYS put Echo on the tank before healing — every cast (Reversion, Verdant Embrace, Emerald Blossom) then goes double!',
      opener:[
        {spell:'Echo',why:'Tank: next heal does 2x'},
        {spell:'Reversion',why:'HoT on tank — doubled via Echo'},
        {spell:'Emerald Blossom',why:'AoE HoT zone for group'},
        {spell:'Spiritbloom',why:'Large single target heal'},
        {spell:'Living Flame',why:'Mana-efficient filler'},
      ],
      single:[
        {spell:'Echo',why:'Always on tank before heals'},
        {spell:'Reversion',why:'HoT on CD — efficient'},
        {spell:'Living Flame',why:'Cheap filler'},
        {spell:'Verdant Embrace',why:'Emergency heal — large + instant'},
        {spell:'Rewind',why:'Tank almost dead — time rewind'},
      ],
      aoe:[
        {spell:'Spread Echo',why:'Multiple targets = more double heals'},
        {spell:'Emerald Blossom',why:'AoE HoT — always on group'},
        {spell:'Dream Breath',why:'Empower channel — AoE heal'},
        {spell:'Spiritbloom',why:'Large single target boost'},
        {spell:'Stasis',why:'Store heals for major burst'},
      ],
    }
  },
  stats:{
    nl:{
      tip:'Intellect is primair. Mastery verhoogt healing op laag HP doelen — perfect voor tank healing. Haste verkort cast times.',
      list:[
        {rank:1,stat:'Intellect',bars:5,note:'Primaire stat'},
        {rank:2,stat:'Mastery',bars:4,note:'Meer healing op laag HP targets'},
        {rank:3,stat:'Haste',bars:4,note:'Snellere casts + kortere Reversion CD'},
        {rank:4,stat:'Versatility',bars:2,note:'Extra healing + overleving'},
        {rank:5,stat:'Critical Strike',bars:1,note:'Laagste prioriteit'},
      ],
    },
    en:{
      tip:'Intellect is primary. Mastery increases healing on low HP targets — perfect for tank healing. Haste shortens cast times.',
      list:[
        {rank:1,stat:'Intellect',bars:5,note:'Primary stat'},
        {rank:2,stat:'Mastery',bars:4,note:'More healing on low HP targets'},
        {rank:3,stat:'Haste',bars:4,note:'Faster casts + shorter Reversion CD'},
        {rank:4,stat:'Versatility',bars:2,note:'Extra healing + survival'},
        {rank:5,stat:'Critical Strike',bars:1,note:'Lowest priority'},
      ],
    }
  },
  cooldowns:{
    nl:[
      {spell:'Rewind',cd:'4 min',effect:'Spoelt tank terug naar HP van 5 sec geleden',when:'Tank bijna dood — unieke tijdmagie CD'},
      {spell:'Stasis',cd:'1.5 min',effect:'Sla volgende 3 heals op en activeer ze als burst',when:'Grote voorspelbare groepsschade'},
      {spell:'Dream Breath',cd:'25 sec',effect:'Empower AoE heal kanaal',when:'Groepsschade — altijd opladen'},
      {spell:'Spiritbloom',cd:'30 sec',effect:'Empower grote single target of AoE heal',when:'Tank nood of groepshealing'},
      {spell:'Tip the Scales',cd:'2 min',effect:'Volgende Empower spell is instant max rank',when:'Noodsituatie — Fire Breath of Dream Breath instant'},
    ],
    en:[
      {spell:'Rewind',cd:'4 min',effect:'Rewinds tank to their HP from 5 seconds ago',when:'Tank almost dead — unique time magic CD'},
      {spell:'Stasis',cd:'1.5 min',effect:'Store next 3 heals and activate as burst',when:'Large predictable group damage'},
      {spell:'Dream Breath',cd:'25 sec',effect:'Empower AoE heal channel',when:'Group damage — always charge'},
      {spell:'Spiritbloom',cd:'30 sec',effect:'Empower large single target or AoE heal',when:'Tank emergency or group healing'},
      {spell:'Tip the Scales',cd:'2 min',effect:'Next Empower spell is instant max rank',when:'Emergency — Fire Breath or Dream Breath instant'},
    ]
  },
  utility:{
    nl:[
      {spell:'Rescue',type:'Redding',note:'Draag groepslid weg uit mechanic — uniek!'},
      {spell:'Zephyr',type:'Groeps-CD',note:'10% schade reductie voor groep 8 sec'},
      {spell:'Rewind',type:'Tank-CD',note:'Tijdterugspoeling — tank terug naar oude HP'},
      {spell:'Hover',type:'Mobiliteit',note:'Bewegen tijdens casten'},
      {spell:'Tail Swipe',type:'Knockback',note:'AoE knockback alle vijanden'},
    ],
    en:[
      {spell:'Rescue',type:'Rescue',note:'Carry group member away from mechanic — unique!'},
      {spell:'Zephyr',type:'Group CD',note:'10% damage reduction for group 8 sec'},
      {spell:'Rewind',type:'Tank CD',note:'Time rewind — tank back to old HP'},
      {spell:'Hover',type:'Mobility',note:'Move while casting'},
      {spell:'Tail Swipe',type:'Knockback',note:'AoE knockback all enemies'},
    ]
  },
  tips:{
    nl:[
      {icon:'🌊',title:'Echo = dubbele heals',text:'Echo is de kernmechaniek van Preservation. Elke heal op een Echo-target doet twee keer — voor dezelfde mana. Houd Echo vrijwel altijd actief op de tank.'},
      {icon:'⏪',title:'Rewind = tijdmachine',text:'Rewind spoelt de tank terug naar zijn HP van 5 seconden geleden. Als de tank net een grote klap heeft gehad: Rewind. Het is de enige spell in het spel die schade letterlijk ongedaan maakt.'},
      {icon:'💾',title:'Stasis = opgeslagen heals',text:'Stasis slaat de volgende 3 heals op en vuurt ze tegelijk af bij activering. Cast voor een grote AoE: Emerald Blossom → Dream Breath → Spiritbloom in Stasis, dan activeer je alle drie tegelijk op het ergste moment.'},
      {icon:'🐉',title:'Hover = proactief',text:'Hover laat je bewegen tijdens casten. Activeer het vóór je een mechanic moet vermijden — dan cast je gewoon door terwijl je rent.'},
      {icon:'🤲',title:'Rescue = M+ tool',text:'Rescue pakt een speler op en teleporteert hem naar veiligheid. In M+ is dit onbetaalbaar — spelers die in brand staan, in een pool lopen, of een mechanic missen. Houd Rescue altijd beschikbaar.'},
    ],
    en:[
      {icon:'🌊',title:'Echo = double heals',text:'Echo is the core mechanic of Preservation. Every heal on an Echo target happens twice — for the same mana. Keep Echo almost always active on the tank.'},
      {icon:'⏪',title:'Rewind = time machine',text:'Rewind rewinds the tank to their HP from 5 seconds ago. If the tank just took a big hit: Rewind. It\'s the only spell in the game that literally undoes damage.'},
      {icon:'💾',title:'Stasis = stored heals',text:'Stasis stores the next 3 heals and fires them simultaneously upon activation. Cast before a major AoE: Emerald Blossom → Dream Breath → Spiritbloom in Stasis, then activate all three at the worst moment.'},
      {icon:'🐉',title:'Hover = proactive',text:'Hover lets you move while casting. Activate it before you need to avoid a mechanic — then you just keep casting while running.'},
      {icon:'🤲',title:'Rescue = M+ tool',text:'Rescue picks up a player and teleports them to safety. In M+ this is priceless — players standing in fire, walking in a pool, or missing a mechanic. Always keep Rescue available.'},
    ]
  },
  macros:{
    nl:[
      {name:'Rewind op tank',code:'/cast [@focus] Rewind',note:'Tijdterugspoeling op focus (tank) — snelste reactie.'},
      {name:'Rescue op mouseover',code:'/cast [@mouseover] Rescue',note:'Red groepslid snel zonder target te wisselen.'},
      {name:'Echo op tank',code:'/cast [@focus] Echo',note:'Echo altijd op tank — bind aan duidelijke knop.'},
    ],
    en:[
      {name:'Rewind on tank',code:'/cast [@focus] Rewind',note:'Time rewind on focus (tank) — fastest reaction.'},
      {name:'Rescue on mouseover',code:'/cast [@mouseover] Rescue',note:'Save group member quickly without switching targets.'},
      {name:'Echo on tank',code:'/cast [@focus] Echo',note:'Echo always on tank — bind to clear button.'},
    ]
  },
  resource_info:{
    nl:{
      intro:'Preservation gebruikt Mana en Essence. Mana voor Living Flame filler. Essence (0-6) voor Emerald Blossom en andere Essence spells. Essence regenereert automatisch.',
      generate:['Passieve Essence regeneratie','Living Flame filler genereert geen Essence — is mana-gebaseerd'],
      spend:['Emerald Blossom (3 Essence) — AoE HoT','Verdant Embrace (2 Essence) — instant noodheal'],
      pet_tip:'💡 Essence nooit op max laten zitten — cast Emerald Blossom als je op 5+ zit. Preventief healen is beter dan reactief!',
      pets:[],
    },
    en:{
      intro:'Preservation uses Mana and Essence. Mana for Living Flame filler. Essence (0-6) for Emerald Blossom and other Essence spells. Essence regenerates automatically.',
      generate:['Passive Essence regeneration','Living Flame filler generates no Essence — is mana-based'],
      spend:['Emerald Blossom (3 Essence) — AoE HoT','Verdant Embrace (2 Essence) — instant emergency heal'],
      pet_tip:'💡 Never let Essence sit at max — cast Emerald Blossom when at 5+. Preventive healing is better than reactive!',
      pets:[],
    }
  },
  consumables:{
    nl:[
      {type:'flask',name:'Flask of the Magisters',effect:'Verhoogt Intellect voor 1 uur.',note:'Altijd actief'},
      {type:'pot',name:'Potion of Recklessness',effect:'Intellect boost bij grote healing windows.',note:'Gebruik met Stasis'},
      {type:'food',name:'Silvermoon Parade (Feast)',effect:'+Intellect en Stamina.',note:'Feast vragen'},
      {type:'food',name:'Royal Roast',effect:'Solo food.',note:'Backup'},
      {type:'rune',name:'Void-Touched Augment Rune',effect:'+Primaire stat.',note:'Altijd'},
    ],
    en:[
      {type:'flask',name:'Flask of the Magisters',effect:'Increases Intellect for 1 hour.',note:'Always active'},
      {type:'pot',name:'Potion of Recklessness',effect:'Intellect boost during major healing windows.',note:'Use with Stasis'},
      {type:'food',name:'Silvermoon Parade (Feast)',effect:'+Intellect and Stamina.',note:'Ask for feast'},
      {type:'food',name:'Royal Roast',effect:'Solo food.',note:'Backup'},
      {type:'rune',name:'Void-Touched Augment Rune',effect:'+Primary stat.',note:'Always'},
    ]
  },
};
ALL_SPECS.push(SPEC_PRESERVATION_EVOKER);

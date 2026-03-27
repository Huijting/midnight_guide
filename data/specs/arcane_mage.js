if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_ARCANE_MAGE = {
  id:'arcane_mage', icon:'🔵', class:'Mage',
  spec:{nl:'Arcane',en:'Arcane'},
  role:'dps', armor:'Cloth',
  weapon:{nl:'Staff or one-hand + offhand',en:'Staff or one-hand + offhand'},
  resource:'Mana + Arcane Charges',
  patch:'1.0', color:'#69CCF0',

  summary:{
    nl:'Arcane Mage bouwt Arcane Charges op voor krachtige Arcane Blast en Arcane Missiles. Uniek: mana management is kernmechaniek — burn hard dan conserveren.',
    en:'Arcane Mage builds Arcane Charges for powerful Arcane Blast and Arcane Missiles. Unique: mana management is the core mechanic — burn hard then conserve.'
  },
  pros:{
    nl:['Hoogste single target burst in het spel','Eenvoudig te leren rotatie','Sterk tijdens burn phases','Uitstekende execute via Arcane Surge'],
    en:['Highest single target burst in the game','Easy to learn rotation','Strong during burn phases','Excellent execute via Arcane Surge']
  },
  cons:{
    nl:['Lage schade tijdens conserve phase','Sterk afhankelijk van mana management','Minder sterk in AoE','Kwetsbaar bij movement — veel cast-spells'],
    en:['Low damage during conserve phase','Heavily dependent on mana management','Weaker in AoE','Vulnerable during movement — many cast spells']
  },

  cheatsheet:{
    nl:{
      opener:'Arcane Charges opbouwen → Arcane Surge → Touch of the Magi → Arcane Barrage dump',
      single:'4 Charges opbouwen → Arcane Blast spam → Barrage bij lage mana → conserve met Arcane Missiles',
      aoe:'Arcane Explosion spam bij 3+ targets → Arcane Barrage voor cleave → Touch of the Magi op hoofdtarget',
      rules:[
        'Altijd op 4 Arcane Charges voordat je grote schade doet',
        'Arcane Surge + Touch of the Magi = burn window — alles eruit gooien',
        'Arcane Barrage verwijdert alle Charges — alleen doen als je wilt conserven of dumpen',
        'Arcane Missiles gebruiken als Clearcasting proc — gratis en krachtig',
        'Nooit op 0 mana gaan — conserve op tijd',
      ],
    },
    en:{
      opener:'Build Arcane Charges → Arcane Surge → Touch of the Magi → Arcane Barrage dump',
      single:'Build 4 Charges → Arcane Blast spam → Barrage at low mana → conserve with Arcane Missiles',
      aoe:'Arcane Explosion spam at 3+ targets → Arcane Barrage for cleave → Touch of the Magi on main target',
      rules:[
        'Always at 4 Arcane Charges before dealing big damage',
        'Arcane Surge + Touch of the Magi = burn window — throw everything in',
        'Arcane Barrage removes all Charges — only do this when conserving or dumping',
        'Use Arcane Missiles on Clearcasting proc — free and powerful',
        'Never go to 0 mana — conserve on time',
      ],
    }
  },

  rotation:{
    nl:{
      apex_tip:'💡 Arcane Surge reset je Arcane Charges naar 4. Zorg dat Touch of the Magi actief is tijdens je Surge window voor maximale burst!',
      opener:[
        {spell:'Arcane Blast x3',         why:'Bouw 3 Arcane Charges op'},
        {spell:'Touch of the Magi',        why:'Debuff die alle Arcane schade accumuleert — altijd vóór Surge'},
        {spell:'Arcane Surge',             why:'Grote burst CD — reset Charges naar 4'},
        {spell:'Arcane Blast x4',          why:'Maximale Charges tijdens Surge window'},
        {spell:'Arcane Barrage',           why:'Dump alle Charges aan einde van Surge'},
      ],
      single:[
        {spell:'Arcane Blast',             why:'Hoofd aanval — bouwt 1 Arcane Charge op per cast'},
        {spell:'Arcane Missiles',          why:'Bij Clearcasting proc — altijd prioriteit, gratis'},
        {spell:'Touch of the Magi',        why:'Altijd op CD — verhoogt burst window schade'},
        {spell:'Arcane Surge',             why:'Op CD — grote burst, gebruik met Touch of the Magi'},
        {spell:'Arcane Barrage',           why:'Bij 4 Charges + lage mana — reset voor conserve'},
      ],
      aoe:[
        {spell:'Arcane Explosion',         why:'AoE aanval — bouwt ook Charges op bij 3+ targets'},
        {spell:'Arcane Barrage',           why:'Cleaves naar alle targets met Charges actief'},
        {spell:'Touch of the Magi',        why:'Op hoofdtarget — accumuleert al je AoE schade'},
        {spell:'Arcane Surge',             why:'Burst window — ook in AoE sterk'},
      ],
    },
    en:{
      apex_tip:'💡 Arcane Surge resets your Arcane Charges to 4. Make sure Touch of the Magi is active during your Surge window for maximum burst!',
      opener:[
        {spell:'Arcane Blast x3',          why:'Build 3 Arcane Charges'},
        {spell:'Touch of the Magi',        why:'Debuff that accumulates all Arcane damage — always before Surge'},
        {spell:'Arcane Surge',             why:'Major burst CD — resets Charges to 4'},
        {spell:'Arcane Blast x4',          why:'Maximum Charges during Surge window'},
        {spell:'Arcane Barrage',           why:'Dump all Charges at end of Surge'},
      ],
      single:[
        {spell:'Arcane Blast',             why:'Main attack — builds 1 Arcane Charge per cast'},
        {spell:'Arcane Missiles',          why:'On Clearcasting proc — always priority, free'},
        {spell:'Touch of the Magi',        why:'Always on CD — increases burst window damage'},
        {spell:'Arcane Surge',             why:'On CD — major burst, use with Touch of the Magi'},
        {spell:'Arcane Barrage',           why:'At 4 Charges + low mana — reset for conserve'},
      ],
      aoe:[
        {spell:'Arcane Explosion',         why:'AoE attack — also builds Charges at 3+ targets'},
        {spell:'Arcane Barrage',           why:'Cleaves to all targets with Charges active'},
        {spell:'Touch of the Magi',        why:'On main target — accumulates all your AoE damage'},
        {spell:'Arcane Surge',             why:'Burst window — also strong in AoE'},
      ],
    }
  },

  stats:{
    nl:{
      tip:'Intellect is altijd #1. Haste verlaagt je cast tijd en GCD — essentieel voor Arcane. Mastery verhoogt direct je Arcane schade.',
      list:[
        {rank:1,stat:'Intellect',        bars:5,note:'Primaire stat — altijd hoogste ilvl pakken'},
        {rank:2,stat:'Haste',            bars:5,note:'Snellere casts = meer Charges = meer schade'},
        {rank:3,stat:'Mastery',          bars:4,note:'Mastery: Savant verhoogt direct Arcane schade'},
        {rank:4,stat:'Critical Strike',  bars:2,note:'Minder waardevol dan bij Fire'},
        {rank:5,stat:'Versatility',      bars:1,note:'Laagste prioriteit'},
      ],
    },
    en:{
      tip:'Intellect is always #1. Haste reduces your cast time and GCD — essential for Arcane. Mastery directly increases your Arcane damage.',
      list:[
        {rank:1,stat:'Intellect',        bars:5,note:'Primary stat — always take highest ilvl'},
        {rank:2,stat:'Haste',            bars:5,note:'Faster casts = more Charges = more damage'},
        {rank:3,stat:'Mastery',          bars:4,note:'Mastery: Savant directly increases Arcane damage'},
        {rank:4,stat:'Critical Strike',  bars:2,note:'Less valuable than for Fire'},
        {rank:5,stat:'Versatility',      bars:1,note:'Lowest priority'},
      ],
    }
  },

  cooldowns:{
    nl:[
      {spell:'Arcane Surge',        cd:'1.5 min', effect:'Massale schade boost + reset Charges naar 4',          when:'Altijd combineren met Touch of the Magi'},
      {spell:'Touch of the Magi',   cd:'45 sec',  effect:'Debuff die 25% van alle Arcane schade accumuleert',    when:'Altijd vóór Arcane Surge plaatsen'},
      {spell:'Evocation',           cd:'6 min',   effect:'Herstelt 100% mana in 6 sec — emergency mana',         when:'Als je mana dreigt op te raken buiten burn phase'},
      {spell:'Presence of Mind',    cd:'1 min',   effect:'Volgende Arcane Blast is instant cast',                when:'Opener of als je moet bewegen'},
      {spell:'Time Warp',           cd:'5 min',   effect:'Groeps-haste +30% voor 40 sec',                       when:'Op aanwijzing van tank/raidleider'},
    ],
    en:[
      {spell:'Arcane Surge',        cd:'1.5 min', effect:'Massive damage boost + reset Charges to 4',           when:'Always combine with Touch of the Magi'},
      {spell:'Touch of the Magi',   cd:'45 sec',  effect:'Debuff that accumulates 25% of all Arcane damage',    when:'Always place before Arcane Surge'},
      {spell:'Evocation',           cd:'6 min',   effect:'Restores 100% mana in 6 sec — emergency mana',        when:'If mana threatens to run out outside burn phase'},
      {spell:'Presence of Mind',    cd:'1 min',   effect:'Next Arcane Blast is instant cast',                   when:'Opener or when you need to move'},
      {spell:'Time Warp',           cd:'5 min',   effect:'Group haste +30% for 40 sec',                        when:'On instruction from tank/raid leader'},
    ]
  },

  utility:{
    nl:[
      {spell:'Counterspell',        type:'Interrupt',   note:'Interrupt op 24 sec CD — schoollock 8 sec'},
      {spell:'Time Warp',           type:'Bloodlust',   note:'Groeps-haste 30% — afstemmen met groep'},
      {spell:'Slow',                type:'Slow',        note:'60% movement slow — goed voor kiting in M+'},
      {spell:'Frost Nova',          type:'CC',          note:'Bevriest targets rondom je — ontsnappen of CC'},
      {spell:'Blink',               type:'Mobiliteit',  note:'Teleport 20 yards vooruit — mechanics ontwijken'},
      {spell:'Invisibility',        type:'Defensief',   note:'Verlaat combat — aggro dump of noodsituatie'},
    ],
    en:[
      {spell:'Counterspell',        type:'Interrupt',   note:'Interrupt on 24 sec CD — school lock 8 sec'},
      {spell:'Time Warp',           type:'Bloodlust',   note:'Group haste 30% — coordinate with group'},
      {spell:'Slow',                type:'Slow',        note:'60% movement slow — good for kiting in M+'},
      {spell:'Frost Nova',          type:'CC',          note:'Freezes targets around you — escape or CC'},
      {spell:'Blink',               type:'Mobility',    note:'Teleport 20 yards forward — dodge mechanics'},
      {spell:'Invisibility',        type:'Defensive',   note:'Leave combat — aggro dump or emergency'},
    ]
  },

  tips:{
    nl:[
      {icon:'🔵',title:'Burn en conserve',          text:'Arcane heeft twee standen: burn (hoge mana, hoge schade) en conserve (lage mana, mana herstellen). Gebruik Evocation of Arcane Barrage om over te schakelen. Nooit op 0 mana gaan!'},
      {icon:'🔮',title:'Touch of the Magi timing',  text:'Touch of the Magi accumuleert 25% van al je Arcane schade. Zet hem altijd op het target VÓÓRdat je Arcane Surge gebruikt — dan explodeert hij met de geaccumuleerde schade aan het einde.'},
      {icon:'⚡',title:'Clearcasting = gratis',      text:'Arcane Missiles proc (Clearcasting) is altijd gratis en hoog single target schade. Gebruik hem nooit als filler — altijd direct bij proc. Twee charges zijn mogelijk: gebruik ze niet op terwijl je burns.'},
      {icon:'🧊',title:'Frost Nova + Blink',         text:'Frost Nova bevriest alles rondom je, daarna Blink weg. Uitstekende escape combo in M+ als je te veel aggro hebt of een mechanic moet ontwijken.'},
      {icon:'⏱️',title:'Time Warp afstemmen',       text:'Time Warp is jouw Bloodlust. Spreek met de tank af wanneer het gebruikt wordt. In M+ meestal op de eerste of moeilijkste boss.'},
    ],
    en:[
      {icon:'🔵',title:'Burn and conserve',          text:'Arcane has two modes: burn (high mana, high damage) and conserve (low mana, restoring mana). Use Evocation or Arcane Barrage to switch. Never go to 0 mana!'},
      {icon:'🔮',title:'Touch of the Magi timing',   text:'Touch of the Magi accumulates 25% of all your Arcane damage. Always place it on the target BEFORE using Arcane Surge — it then explodes with accumulated damage at the end.'},
      {icon:'⚡',title:'Clearcasting = free',         text:'Arcane Missiles proc (Clearcasting) is always free and high single target damage. Never use as filler — always use immediately on proc. Two charges are possible: don\'t waste them during burns.'},
      {icon:'🧊',title:'Frost Nova + Blink',          text:'Frost Nova freezes everything around you, then Blink away. Excellent escape combo in M+ when you have too much aggro or need to dodge a mechanic.'},
      {icon:'⏱️',title:'Coordinate Time Warp',       text:'Time Warp is your Bloodlust. Coordinate with the tank on when to use it. In M+ usually on the first or hardest boss.'},
    ]
  },

  macros:{
    nl:[
      {name:'Counterspell (Focus Kick)', code:'#showtooltip Counterspell\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Counterspell', note:'Kick op focus > mouseover > target. Essentieel in M+!'},
      {name:'Touch of the Magi + Surge', code:'/cast Touch of the Magi\n/cast Arcane Surge', note:'Burst opener in één knop — Touch eerst dan direct Surge.'},
      {name:'Presence of Mind + Blast',  code:'/cast Presence of Mind\n/cast Arcane Blast', note:'Instant Arcane Blast — handig bij movement of als opener.'},
    ],
    en:[
      {name:'Counterspell (Focus Kick)', code:'#showtooltip Counterspell\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Counterspell', note:'Kick on focus > mouseover > target. Essential in M+!'},
      {name:'Touch of the Magi + Surge', code:'/cast Touch of the Magi\n/cast Arcane Surge', note:'Burst opener in one button — Touch first then direct Surge.'},
      {name:'Presence of Mind + Blast',  code:'/cast Presence of Mind\n/cast Arcane Blast', note:'Instant Arcane Blast — useful during movement or as opener.'},
    ]
  },

  resource_info:{
    nl:{
      intro:'Arcane Mage gebruikt Mana (0-100%) en Arcane Charges (0-4). Charges verhogen de schade en manakosten van Arcane Blast en Missiles. Het doel is 4 Charges opbouwen dan hard bursten.',
      generate:[
        'Arcane Blast — bouwt 1 Charge op, verhoogt schade én manakosten',
        'Arcane Explosion — bouwt ook Charges op bij 3+ targets',
        'Arcane Surge — reset Charges direct naar 4',
        'Evocation — herstelt 100% mana in 6 sec channel',
      ],
      spend:[
        'Arcane Barrage (4 Charges) — grote burst, verwijdert alle Charges',
        'Arcane Blast (4 Charges) — maximale schade per cast',
        'Arcane Missiles — gratis bij Clearcasting proc',
      ],
      pet_tip:'💡 Nooit op 0 mana gaan! Als mana onder 40% zakt: Arcane Barrage voor Charges dump, dan conserve fase met Arcane Missiles en Arcane Orb.',
      pets:[],
    },
    en:{
      intro:'Arcane Mage uses Mana (0-100%) and Arcane Charges (0-4). Charges increase the damage and mana cost of Arcane Blast and Missiles. The goal is to build 4 Charges then burst hard.',
      generate:[
        'Arcane Blast — builds 1 Charge, increases damage AND mana cost',
        'Arcane Explosion — also builds Charges at 3+ targets',
        'Arcane Surge — immediately resets Charges to 4',
        'Evocation — restores 100% mana in 6 sec channel',
      ],
      spend:[
        'Arcane Barrage (4 Charges) — big burst, removes all Charges',
        'Arcane Blast (4 Charges) — maximum damage per cast',
        'Arcane Missiles — free on Clearcasting proc',
      ],
      pet_tip:'💡 Never go to 0 mana! If mana drops below 40%: Arcane Barrage to dump Charges, then conserve phase with Arcane Missiles and Arcane Orb.',
      pets:[],
    }
  },

  consumables:{
    nl:[
      {type:'flask', name:'Flask of the Magisters', effect:'+Mastery 1 uur. Midnight S1 BiS voor Arcane.',   note:'Altijd actief'},
      {type:'pot',   name:'Potion of Recklessness',      effect:'Grote Intellect boost 25 sec.',                   note:'Gebruik tijdens Arcane Surge burst window'},
      {type:'food',  name:'Silvermoon Parade (Feast)', effect:'+Intellect en Stamina via groepsfeast.',        note:'Feast vragen'},
      {type:'food',  name:'Royal Roast', effect:'Solo/raid feast backup.',                note:'Backup als geen feast'},
      {type:'rune',  name:'Void-Touched Augment Rune',  effect:'+Primaire stat 1 uur.',                         note:'Altijd gebruiken'},
    ],
    en:[
      {type:'flask', name:'Flask of the Magisters', effect:'+Mastery 1 hour. Midnight S1 BiS for Arcane.',  note:'Always active'},
      {type:'pot',   name:'Potion of Recklessness',      effect:'Large Intellect boost 25 sec.',                 note:'Use during Arcane Surge burst window'},
      {type:'food',  name:'Silvermoon Parade (Feast)', effect:'+Intellect and Stamina via group feast.',       note:'Ask for feast'},
      {type:'food',  name:'Royal Roast', effect:'Solo/raid feast backup.',                note:'Backup if no feast'},
      {type:'rune',  name:'Void-Touched Augment Rune', effect:'+Primary stat 1 hour.',                          note:'Always use'},
    ]
  },
};
ALL_SPECS.push(SPEC_ARCANE_MAGE);

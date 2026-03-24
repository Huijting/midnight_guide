if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_ENHANCEMENT_SHAMAN = {
  id:'enhancement_shaman', icon:'⚡', class:'Shaman',
  spec:{nl:'Enhancement',en:'Enhancement'},
  role:'melee', armor:'Mail',
  weapon:{nl:'Twee eenhandige wapens (dual wield)',en:'Two one-handed weapons (dual wield)'},
  resource:'Mana + Maelstrom Weapon',
  patch:'1.0', color:'#0070DE',
  summary:{
    nl:'Enhancement Shaman is een melee DPS vol elementaire kracht. Combineert Maelstrom Weapon procs met instant Lightning Bolt en Chain Lightning voor sterke burst.',
    en:'Enhancement Shaman is a melee DPS full of elemental power. Combines Maelstrom Weapon procs with instant Lightning Bolt and Chain Lightning for strong burst.'
  },
  pros:{
    nl:['Unieke melee/caster hybride playstyle','Uitstekende AoE burst via Chain Lightning','Sterke Bloodlust bijdrage','Goede utility (totems, kortste interrupt CD)','Sterk in korte burst windows'],
    en:['Unique melee/caster hybrid playstyle','Excellent AoE burst via Chain Lightning','Strong Bloodlust contribution','Good utility (totems, shortest interrupt CD)','Strong in short burst windows']
  },
  cons:{
    nl:['RNG-afhankelijk (Maelstrom Weapon procs)','Relatief korte range als melee','Complex door meerdere proc-types tegelijk','Kwetsbaar bij forced movement'],
    en:['RNG-dependent (Maelstrom Weapon procs)','Relatively short range as melee','Complex due to multiple simultaneous proc types','Vulnerable during forced movement']
  },
  cheatsheet:{
    nl:{
      opener:'Flame Shock → Stormstrike → Sundering → Lava Lash → Feral Spirit → 10 stacks Chain Lightning',
      single:'Stormstrike prioriteit → Flame Shock uptime → Lava Lash op CD → Frost Shock → 10 stacks = instant Lightning Bolt',
      aoe:'Crash Lightning → Chain Lightning (10 stacks) → Lava Lash spam → Sundering op grote packs',
      rules:[
        'Stormstrike altijd als hoogste prioriteit — de kern van je rotatie',
        'Flame Shock altijd uptime houden — versterkt Lava Lash enorm',
        'Maelstrom Weapon 10 stacks = instant Chain Lightning (AoE) of Lightning Bolt (ST)',
        'Crash Lightning bij 3+ targets — geeft alle melee aanvallen cleave',
        'Wind Shear = kortste interrupt in het spel (12 sec) — gebruik proactief',
      ],
    },
    en:{
      opener:'Flame Shock → Stormstrike → Sundering → Lava Lash → Feral Spirit → 10 stacks Chain Lightning',
      single:'Stormstrike priority → keep Flame Shock uptime → Lava Lash on CD → Frost Shock → 10 stacks = instant Lightning Bolt',
      aoe:'Crash Lightning → Chain Lightning (10 stacks) → Lava Lash spam → Sundering on large packs',
      rules:[
        'Stormstrike always as highest priority — the core of your rotation',
        'Always keep Flame Shock uptime — massively empowers Lava Lash',
        'Maelstrom Weapon 10 stacks = instant Chain Lightning (AoE) or Lightning Bolt (ST)',
        'Crash Lightning at 3+ targets — gives all melee attacks cleave',
        'Wind Shear = shortest interrupt in the game (12 sec) — use proactively',
      ],
    }
  },
  rotation:{
    nl:{
      apex_tip:'💡 Maelstrom Weapon is je kernmechaniek. Bouw 10 stacks op via melee aanvallen en gebruik dan instant Chain Lightning (AoE) of Lightning Bolt (ST). Nooit stacks verspillen!',
      opener:[
        {spell:'Flame Shock',          why:'DoT plaatsen — versterkt Lava Lash direct'},
        {spell:'Stormstrike',          why:'Hoofd aanval — genereert Maelstrom Weapon stacks snel'},
        {spell:'Sundering',            why:'Opener burst + knock-back op grote packs'},
        {spell:'Lava Lash',            why:'Op CD, enorm krachtig met actieve Flame Shock'},
        {spell:'Feral Spirit',         why:'Grote cooldown — wolfgeesten versterken je aanvallen'},
        {spell:'Chain Lightning (10)', why:'Bij 10 Maelstrom stacks — instant AoE burst'},
      ],
      single:[
        {spell:'Stormstrike',          why:'Altijd hoogste prioriteit — bouwt snel Maelstrom op'},
        {spell:'Flame Shock',          why:'Uptime houden — schade + versterkt Lava Lash'},
        {spell:'Lava Lash',            why:'Op CD — extra krachtig met actieve Flame Shock'},
        {spell:'Frost Shock',          why:'Filler op CD als Stormstrike niet beschikbaar'},
        {spell:'Lightning Bolt (10)',  why:'Instant cast bij 10 Maelstrom stacks — ST burst'},
        {spell:'Doom Winds',           why:'Op CD — laat Stormstrike extra Maelstrom genereren'},
      ],
      aoe:[
        {spell:'Crash Lightning',      why:'Geeft alle melee aanvallen cleave — altijd eerst bij 3+'},
        {spell:'Chain Lightning (10)', why:'Instant bij 10 stacks — beste AoE schade'},
        {spell:'Lava Lash',            why:'Spreidt Flame Shock naar andere targets'},
        {spell:'Stormstrike',          why:'Blijft prioriteit ook in AoE'},
        {spell:'Sundering',            why:'Grote AoE burst + knockback op grote packs'},
      ],
    },
    en:{
      apex_tip:'💡 Maelstrom Weapon is your core mechanic. Build 10 stacks via melee attacks then use instant Chain Lightning (AoE) or Lightning Bolt (ST). Never waste stacks!',
      opener:[
        {spell:'Flame Shock',          why:'Place DoT — directly empowers Lava Lash'},
        {spell:'Stormstrike',          why:'Main attack — builds Maelstrom Weapon stacks quickly'},
        {spell:'Sundering',            why:'Opener burst + knockback on large packs'},
        {spell:'Lava Lash',            why:'On CD, massively powerful with active Flame Shock'},
        {spell:'Feral Spirit',         why:'Major cooldown — wolf spirits empower your attacks'},
        {spell:'Chain Lightning (10)', why:'At 10 Maelstrom stacks — instant AoE burst'},
      ],
      single:[
        {spell:'Stormstrike',          why:'Always highest priority — builds Maelstrom quickly'},
        {spell:'Flame Shock',          why:'Keep uptime — damage + empowers Lava Lash'},
        {spell:'Lava Lash',            why:'On CD — extra powerful with active Flame Shock'},
        {spell:'Frost Shock',          why:'Filler on CD when Stormstrike not available'},
        {spell:'Lightning Bolt (10)',  why:'Instant cast at 10 Maelstrom stacks — ST burst'},
        {spell:'Doom Winds',           why:'On CD — lets Stormstrike generate extra Maelstrom'},
      ],
      aoe:[
        {spell:'Crash Lightning',      why:'Gives all melee attacks cleave — always first at 3+'},
        {spell:'Chain Lightning (10)', why:'Instant at 10 stacks — best AoE damage'},
        {spell:'Lava Lash',            why:'Spreads Flame Shock to other targets'},
        {spell:'Stormstrike',          why:'Stays priority even in AoE'},
        {spell:'Sundering',            why:'Large AoE burst + knockback on large packs'},
      ],
    }
  },
  stats:{
    nl:{
      tip:'Agility is altijd #1. Haste verlaagt de GCD en verhoogt melee swings — meer swings = meer Maelstrom Weapon procs. Critical Strike triggert ook extra procs.',
      list:[
        {rank:1,stat:'Agility',        bars:5,note:'Primaire stat — altijd hoogste ilvl pakken'},
        {rank:2,stat:'Haste',          bars:5,note:'Meer swings = meer Maelstrom procs = meer instant spells'},
        {rank:3,stat:'Critical Strike',bars:3,note:'Triggert Maelstrom procs, verhoogt burst schade'},
        {rank:4,stat:'Mastery',        bars:3,note:'Mastery: Enhanced Elements — verhoogt elementaire schade'},
        {rank:5,stat:'Versatility',    bars:1,note:'Laagste prioriteit'},
      ],
    },
    en:{
      tip:'Agility is always #1. Haste lowers the GCD and increases melee swings — more swings = more Maelstrom Weapon procs. Critical Strike also triggers extra procs.',
      list:[
        {rank:1,stat:'Agility',        bars:5,note:'Primary stat — always take highest ilvl'},
        {rank:2,stat:'Haste',          bars:5,note:'More swings = more Maelstrom procs = more instant spells'},
        {rank:3,stat:'Critical Strike',bars:3,note:'Triggers Maelstrom procs, increases burst damage'},
        {rank:4,stat:'Mastery',        bars:3,note:'Mastery: Enhanced Elements — increases elemental damage'},
        {rank:5,stat:'Versatility',    bars:1,note:'Lowest priority'},
      ],
    }
  },
  cooldowns:{
    nl:[
      {spell:'Feral Spirit',      cd:'1.5 min', effect:'2 wolfgeesten die mee-aanvallen + extra Maelstrom geven',    when:'Op pull en elke grote pack of boss phase'},
      {spell:'Ascendance',        cd:'3 min',   effect:'Windlord form — Windstrike vervangt Stormstrike, snellere burst', when:'Op pull of grootste burst window'},
      {spell:'Doom Winds',        cd:'1 min',   effect:'Stormstrike genereert extra Maelstrom stacks 8 sec',          when:'Op CD — combineer met Feral Spirit'},
      {spell:'Bloodlust/Heroism', cd:'5 min',   effect:'Groeps-haste +30% voor 40 sec',                              when:'Op aanwijzing van tank — jij hebt de knop'},
    ],
    en:[
      {spell:'Feral Spirit',      cd:'1.5 min', effect:'2 wolf spirits that attack alongside + give extra Maelstrom', when:'On pull and every large pack or boss phase'},
      {spell:'Ascendance',        cd:'3 min',   effect:'Windlord form — Windstrike replaces Stormstrike, faster burst', when:'On pull or biggest burst window'},
      {spell:'Doom Winds',        cd:'1 min',   effect:'Stormstrike generates extra Maelstrom stacks for 8 sec',     when:'On CD — combine with Feral Spirit'},
      {spell:'Bloodlust/Heroism', cd:'5 min',   effect:'Group haste +30% for 40 sec',                               when:'On instruction from tank — you have the button'},
    ]
  },
  utility:{
    nl:[
      {spell:'Wind Shear',         type:'Interrupt', note:'Interrupt op 12 sec CD — kortste interrupt cooldown in het spel'},
      {spell:'Bloodlust/Heroism',  type:'Bloodlust', note:'Groeps-haste +30% — afstemmen met groep'},
      {spell:'Capacitor Totem',    type:'Stun',      note:'Totem explodeert na 2 sec → stunned alle vijanden rondom'},
      {spell:'Earthbind Totem',    type:'Slow',      note:'50% slow in groot AoE gebied rondom totem'},
      {spell:'Purge',              type:'Dispel',    note:'Verwijdert 1 magic buff van vijand — essentieel in M+'},
      {spell:'Ancestral Guidance', type:'Heal',      note:'Converteert 40% van jouw schade naar AoE heals 10 sec'},
    ],
    en:[
      {spell:'Wind Shear',         type:'Interrupt', note:'Interrupt on 12 sec CD — shortest interrupt cooldown in the game'},
      {spell:'Bloodlust/Heroism',  type:'Bloodlust', note:'Group haste +30% — coordinate with group'},
      {spell:'Capacitor Totem',    type:'Stun',      note:'Totem explodes after 2 sec → stuns all nearby enemies'},
      {spell:'Earthbind Totem',    type:'Slow',      note:'50% slow in large AoE area around totem'},
      {spell:'Purge',              type:'Dispel',    note:'Removes 1 magic buff from enemy — essential in M+'},
      {spell:'Ancestral Guidance', type:'Heal',      note:'Converts 40% of your damage into AoE heals for 10 sec'},
    ]
  },
  tips:{
    nl:[
      {icon:'⚡',title:'Maelstrom Weapon timing',    text:'Gebruik je 10 stacks DIRECT als ze vol zijn. In AoE: altijd Chain Lightning (bounced naar alle targets). Single target: Lightning Bolt. Nooit laten expiren — dat zijn verloren instant casts.'},
      {icon:'🐺',title:'Feral Spirit + Doom Winds',  text:'Dit is je sterkste burst combo. Gebruik Doom Winds dan direct Feral Spirit — de wolfgeesten genereren samen met Doom Winds een enorme hoeveelheid Maelstrom stacks. Gebruik ze altijd samen.'},
      {icon:'🔥',title:'Flame Shock altijd actief',  text:'Flame Shock is cruciaal: het doet eigen DoT schade, verdubbelt Lava Lash schade, en geeft extra Maelstrom procs. Lava Lash spreidt Flame Shock naar extra targets — enorm in AoE.'},
      {icon:'🌊',title:'Crash Lightning in AoE',     text:'Bij 3+ targets altijd Crash Lightning als eerste. Dit geeft je melee aanvallen een cleave effect. Combineer daarna met Chain Lightning bij 10 stacks voor de grootste AoE burst.'},
      {icon:'🩺',title:'Nood-healer met Ancestral Guidance', text:'Als de healer het lastig heeft: cast Ancestral Guidance. Dit converteert 40% van al je schade naar groeps-AoE heals. Sterk in M+ waar je de healer even moet helpen na een grote pack.'},
    ],
    en:[
      {icon:'⚡',title:'Maelstrom Weapon timing',    text:'Use your 10 stacks IMMEDIATELY when full. In AoE: always Chain Lightning (bounces to all targets). Single target: Lightning Bolt. Never let them expire — those are lost instant casts.'},
      {icon:'🐺',title:'Feral Spirit + Doom Winds',  text:'This is your strongest burst combo. Use Doom Winds then immediately Feral Spirit — the wolf spirits together with Doom Winds generate a massive amount of Maelstrom stacks. Always use them together.'},
      {icon:'🔥',title:'Flame Shock always active',  text:'Flame Shock is crucial: it deals its own DoT damage, doubles Lava Lash damage, and gives extra Maelstrom procs. Lava Lash spreads Flame Shock to extra targets — massive in AoE.'},
      {icon:'🌊',title:'Crash Lightning in AoE',     text:'At 3+ targets always Crash Lightning first. This gives your melee attacks a cleave effect. Then combine with Chain Lightning at 10 stacks for the biggest AoE burst.'},
      {icon:'🩺',title:'Emergency healer with Ancestral Guidance', text:'When the healer is struggling: cast Ancestral Guidance. This converts 40% of all your damage into group AoE heals. Strong in M+ where you need to help the healer after a large pack.'},
    ]
  },
  macros:{
    nl:[
      {name:'Wind Shear (Focus Kick)', code:'#showtooltip Wind Shear\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Wind Shear', note:'Kick op focus > mouseover > target. Kortste CD in het spel!'},
      {name:'Capacitor Totem plaatsen', code:'#showtooltip Capacitor Totem\n/cast [@cursor] Capacitor Totem', note:'Plaatst totem direct op cursor positie — geen bevestigingsklik nodig.'},
      {name:'Feral Spirit + Doom Winds', code:'/cast Doom Winds\n/cast Feral Spirit', note:'Burst combo in één knop — altijd samen gebruiken voor max Maelstrom generatie.'},
    ],
    en:[
      {name:'Wind Shear (Focus Kick)', code:'#showtooltip Wind Shear\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Wind Shear', note:'Kick on focus > mouseover > target. Shortest CD in the game!'},
      {name:'Capacitor Totem placement', code:'#showtooltip Capacitor Totem\n/cast [@cursor] Capacitor Totem', note:'Places totem directly at cursor position — no confirmation click needed.'},
      {name:'Feral Spirit + Doom Winds', code:'/cast Doom Winds\n/cast Feral Spirit', note:'Burst combo in one button — always use together for max Maelstrom generation.'},
    ]
  },
  resource_info:{
    nl:{
      intro:'Enhancement Shaman gebruikt Mana voor utility spells en Maelstrom Weapon stacks (0-10) als proc resource. Maelstrom Weapon bouwt op via melee aanvallen en geeft je instant-cast Lightning spells.',
      generate:[
        'Melee aanvallen — genereren Maelstrom Weapon stacks passief',
        'Stormstrike — genereert extra Maelstrom stacks bij hit',
        'Feral Spirit wolfgeesten — genereren ook Maelstrom stacks',
        'Doom Winds — laat Stormstrike extra stacks genereren',
      ],
      spend:[
        'Lightning Bolt (10 stacks) — instant ST burst, verbruikt alle stacks',
        'Chain Lightning (10 stacks) — instant AoE burst, verbruikt alle stacks',
        'Healing Surge (stacks) — nood-zelfheal, kost Maelstrom stacks',
      ],
      pet_tip:'💡 Maelstrom Weapon stacks verlopen NIET — maar je mist schade als je ze niet gebruikt. Bij 10 stacks: altijd direct Chain Lightning (AoE) of Lightning Bolt (ST) gooien!',
      pets:[],
    },
    en:{
      intro:'Enhancement Shaman uses Mana for utility spells and Maelstrom Weapon stacks (0-10) as a proc resource. Maelstrom Weapon builds via melee attacks and gives you instant-cast Lightning spells.',
      generate:[
        'Melee attacks — passively generate Maelstrom Weapon stacks',
        'Stormstrike — generates extra Maelstrom stacks on hit',
        'Feral Spirit wolf spirits — also generate Maelstrom stacks',
        'Doom Winds — lets Stormstrike generate extra stacks',
      ],
      spend:[
        'Lightning Bolt (10 stacks) — instant ST burst, consumes all stacks',
        'Chain Lightning (10 stacks) — instant AoE burst, consumes all stacks',
        'Healing Surge (stacks) — emergency self-heal, costs Maelstrom stacks',
      ],
      pet_tip:'💡 Maelstrom Weapon stacks do NOT expire — but you miss damage if you don\'t use them. At 10 stacks: always immediately cast Chain Lightning (AoE) or Lightning Bolt (ST)!',
      pets:[],
    }
  },
  consumables:{
    nl:[
      {type:'flask', name:'Flask of the Blood Knights', effect:'Verhoogt Agility significant voor 1 uur.',        note:'Altijd actief'},
      {type:'pot',   name:'Potion of Recklessness',             effect:'Grote Agility boost 25 sec.',                    note:'Op pull of burst window'},
      {type:'food',  name:'Silvermoon Parade (Feast)',   effect:'+Agility en Stamina via groepsfeast.',           note:'Feast vragen'},
      {type:'food',  name:'Meat and Potatoes',           effect:'Solo food — Agility backup.',                   note:'Backup als geen feast'},
      {type:'rune',  name:'Void-Touched Augment Rune',    effect:'+Primaire stat 1 uur.',                          note:'Altijd gebruiken'},
    ],
    en:[
      {type:'flask', name:'Flask of the Blood Knights', effect:'Significantly increases Agility for 1 hour.',    note:'Always active'},
      {type:'pot',   name:'Potion of Recklessness',             effect:'Large Agility boost 25 sec.',                   note:'On pull or burst window'},
      {type:'food',  name:'Silvermoon Parade (Feast)',   effect:'+Agility and Stamina via group feast.',         note:'Ask for feast'},
      {type:'food',  name:'Meat and Potatoes',           effect:'Solo food — Agility backup.',                  note:'Backup if no feast'},
      {type:'rune',  name:'Void-Touched Augment Rune',    effect:'+Primary stat 1 hour.',                        note:'Always use'},
    ]
  },
};
ALL_SPECS.push(SPEC_ENHANCEMENT_SHAMAN);

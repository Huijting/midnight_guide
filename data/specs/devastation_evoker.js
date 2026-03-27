if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_DEVASTATION_EVOKER = {
  id:'devastation_evoker', icon:'🔥', class:'Evoker',
  spec:{nl:'Devastation',en:'Devastation'},
  role:'dps', armor:'Mail',
  weapon:{nl:'Two-hand weapon',en:'Two-hand weapon'},
  resource:'Mana + Essence',
  patch:'1.0', color:'#33937F',
  summary:{
    nl:'Devastation Evoker is een unieke ranged DPS die spells oplaadt voor meer schade. Gebaseerd op Blauwe en Rood Drakenmagie. Uniek: Hover geeft mobiliteit tijdens casten en Empower spells schalen met hoe lang je ze oplaadt.',
    en:'Devastation Evoker is a unique ranged DPS that charges spells for more damage. Based on Blue and Red Dragon Magic. Unique: Hover gives mobility while casting and Empower spells scale with how long you charge them.'
  },
  pros:{
    nl:['Empower spells = uniek oplaad-mechaniek voor burst','Hover = bewegen tijdens casten (uniek!)','Sterke AoE via Pyre en Firestorm','Goede single target via Disintegrate','Unieke utility: Rescue, Zephyr, Rewind'],
    en:['Empower spells = unique charge mechanic for burst','Hover = moving while casting (unique!)','Strong AoE via Pyre and Firestorm','Good single target via Disintegrate','Unique utility: Rescue, Zephyr, Rewind']
  },
  cons:{
    nl:['Kort bereik (25 yards, niet 40)','Empower timing vereist oefening','Essence management — niet verspillen','Alleen speelbaar als Dracthyr race'],
    en:['Short range (25 yards, not 40)','Empower timing requires practice','Essence management — don\'t waste','Only playable as Dracthyr race']
  },
  cheatsheet:{
    nl:{
      opener:'Fire Breath (max charge) → Dragonrage → Disintegrate → Pyre spam → Eternity Surge',
      single:'Disintegrate → Fire Breath (2-3 sec charge) → Pyre bij procs → Eternity Surge op CD',
      aoe:'Fire Breath max charge → Firestorm → Pyre spam → Eternity Surge (AoE) → Disintegrate',
      rules:[
        'Dragonrage is je burst CD — altijd met Fire Breath combineren',
        'Disintegrate is je beste single target — nooit onderbreken',
        'Fire Breath altijd opladen tot rank 3 (max) voor opener',
        'Hover proactief gebruiken bij movement mechanics',
        'Essence nooit op 0 laten komen — altijd iets in reserve',
      ],
    },
    en:{
      opener:'Fire Breath (max charge) → Dragonrage → Disintegrate → Pyre spam → Eternity Surge',
      single:'Disintegrate → Fire Breath (2-3 sec charge) → Pyre on procs → Eternity Surge on CD',
      aoe:'Fire Breath max charge → Firestorm → Pyre spam → Eternity Surge (AoE) → Disintegrate',
      rules:[
        'Dragonrage is your burst CD — always combine with Fire Breath',
        'Disintegrate is your best single target — never interrupt',
        'Fire Breath always charge to rank 3 (max) for opener',
        'Hover proactively on movement mechanics',
        'Never let Essence reach 0 — always keep something in reserve',
      ],
    }
  },
  rotation:{
    nl:{
      apex_tip:'💡 Empower spells worden sterker naarmate je ze langer oplaadt. Fire Breath op rank 3 (3 seconden laden) doet bijna het dubbele van rank 1. Neem de tijd om op te laden — het is de moeite waard!',
      opener:[
        {spell:'Fire Breath rank 3',why:'Max charged opener — grootste burst aanval'},
        {spell:'Dragonrage',why:'Burst CD — verhoogt alle Essence schade'},
        {spell:'Disintegrate',why:'Channel — beste single target'},
        {spell:'Pyre',why:'Essence dump bij Dragonrage'},
        {spell:'Eternity Surge',why:'Empower AoE aanval op CD'},
      ],
      single:[
        {spell:'Disintegrate',why:'Beste single target — nooit onderbreken'},
        {spell:'Fire Breath',why:'Rank 2-3 opladen op CD'},
        {spell:'Living Flame',why:'Essence generator filler'},
        {spell:'Pyre',why:'Bij Charged Blast proc'},
        {spell:'Dragonrage',why:'Burst window — op CD'},
      ],
      aoe:[
        {spell:'Fire Breath rank 3',why:'Max AoE opener schade'},
        {spell:'Firestorm',why:'AoE channel zone'},
        {spell:'Pyre',why:'AoE Essence dump'},
        {spell:'Eternity Surge',why:'AoE Empower op CD'},
        {spell:'Dragonrage',why:'AoE burst multiplier'},
      ],
    },
    en:{
      apex_tip:'💡 Empower spells grow stronger the longer you charge them. Fire Breath at rank 3 (3 seconds charging) does almost double rank 1. Take time to charge — it\'s worth it!',
      opener:[
        {spell:'Fire Breath rank 3',why:'Max charged opener — largest burst attack'},
        {spell:'Dragonrage',why:'Burst CD — increases all Essence damage'},
        {spell:'Disintegrate',why:'Channel — best single target'},
        {spell:'Pyre',why:'Essence dump during Dragonrage'},
        {spell:'Eternity Surge',why:'Empower AoE attack on CD'},
      ],
      single:[
        {spell:'Disintegrate',why:'Best single target — never interrupt'},
        {spell:'Fire Breath',why:'Charge rank 2-3 on CD'},
        {spell:'Living Flame',why:'Essence generator filler'},
        {spell:'Pyre',why:'On Charged Blast proc'},
        {spell:'Dragonrage',why:'Burst window — on CD'},
      ],
      aoe:[
        {spell:'Fire Breath rank 3',why:'Max AoE opener damage'},
        {spell:'Firestorm',why:'AoE channel zone'},
        {spell:'Pyre',why:'AoE Essence dump'},
        {spell:'Eternity Surge',why:'AoE Empower on CD'},
        {spell:'Dragonrage',why:'AoE burst multiplier'},
      ],
    }
  },
  stats:{
    nl:{
      tip:'Intellect is primair. Critical Strike en Mastery zijn uitstekend voor Devastation — meer crit = meer Essence via Charged Blast.',
      list:[
        {rank:1,stat:'Intellect',bars:5,note:'Primaire stat'},
        {rank:2,stat:'Critical Strike',bars:4,note:'Meer crit = Charged Blast procs + Pyre'},
        {rank:3,stat:'Mastery',bars:4,note:'Verhoogt Empower spell schade'},
        {rank:4,stat:'Haste',bars:3,note:'Snellere Disintegrate ticks'},
        {rank:5,stat:'Versatility',bars:1,note:'Laagste prioriteit'},
      ],
    },
    en:{
      tip:'Intellect is primary. Critical Strike and Mastery are excellent for Devastation — more crit = more Essence via Charged Blast.',
      list:[
        {rank:1,stat:'Intellect',bars:5,note:'Primary stat'},
        {rank:2,stat:'Critical Strike',bars:4,note:'More crit = Charged Blast procs + Pyre'},
        {rank:3,stat:'Mastery',bars:4,note:'Increases Empower spell damage'},
        {rank:4,stat:'Haste',bars:3,note:'Faster Disintegrate ticks'},
        {rank:5,stat:'Versatility',bars:1,note:'Lowest priority'},
      ],
    }
  },
  cooldowns:{
    nl:[
      {spell:'Dragonrage',cd:'2 min',effect:'+50% Essence schade en procs 18 sec',when:'Op pull — altijd met Fire Breath + Eternity Surge combineren'},
      {spell:'Fire Breath',cd:'20 sec',effect:'Empower AOE brand aanval — rank 1-4',when:'Altijd op CD, rank 3 in burst'},
      {spell:'Eternity Surge',cd:'30 sec',effect:'Empower schade kanaal AoE',when:'In Dragonrage window'},
      {spell:'Firestorm',cd:'20 sec',effect:'AoE vuurzone 12 sec',when:'AoE pulls'},
      {spell:'Deep Breath',cd:'2 min',effect:'Vliegt over battlefield + AoE schade',when:'Grote AoE of movement'},
    ],
    en:[
      {spell:'Dragonrage',cd:'2 min',effect:'+50% Essence damage and procs 18 sec',when:'On pull — always combine with Fire Breath + Eternity Surge'},
      {spell:'Fire Breath',cd:'20 sec',effect:'Empower AOE fire attack — rank 1-4',when:'Always on CD, rank 3 in burst'},
      {spell:'Eternity Surge',cd:'30 sec',effect:'Empower damage channel AoE',when:'In Dragonrage window'},
      {spell:'Firestorm',cd:'20 sec',effect:'AoE fire zone 12 sec',when:'AoE pulls'},
      {spell:'Deep Breath',cd:'2 min',effect:'Flies over battlefield + AoE damage',when:'Large AoE or movement'},
    ]
  },
  utility:{
    nl:[
      {spell:'Rescue',type:'Redding',note:'Draag groepslid weg van gevaar — uniek!'},
      {spell:'Zephyr',type:'Groeps-CD',note:'10% schade reductie voor groep 8 sec'},
      {spell:'Tail Swipe',type:'AoE Knockback',note:'AoE knockback alle vijanden'},
      {spell:'Wing Buffet',type:'Interrupt',note:'Interrupt + knockback'},
      {spell:'Hover',type:'Mobiliteit',note:'Bewegen tijdens casten — uniek voor ranged'},
    ],
    en:[
      {spell:'Rescue',type:'Rescue',note:'Carry group member away from danger — unique!'},
      {spell:'Zephyr',type:'Group CD',note:'10% damage reduction for group 8 sec'},
      {spell:'Tail Swipe',type:'AoE Knockback',note:'AoE knockback all enemies'},
      {spell:'Wing Buffet',type:'Interrupt',note:'Interrupt + knockback'},
      {spell:'Hover',type:'Mobility',note:'Move while casting — unique for ranged'},
    ]
  },
  tips:{
    nl:[
      {icon:'🔥',title:'Empower = opladen loont',text:'Fire Breath rank 3 doet bijna dubbele schade van rank 1. In je burst window (Dragonrage) altijd rank 3 gebruiken. Buiten burst kun je rank 2 nemen voor snelheid.'},
      {icon:'🐉',title:'Hover = unieke mobiliteit',text:'Hover laat je bewegen tijdens het casten — iets wat geen andere ranged DPS kan. Activeer het proactief bij movement mechanics, zodat je nooit DPS verliest door te moeten lopen.'},
      {icon:'💥',title:'Dragonrage = alles erin',text:'Dragonrage geeft 18 seconden verhoogde Essence damage. Gebruik in die window: Fire Breath rank 3 → Eternity Surge → alles wat Essence kost. Dit is je volledige burst window.'},
      {icon:'📏',title:'25 yard bereik!',text:'Evokers hebben maar 25 yards bereik, niet 40 zoals andere ranged. Je moet dichter bij de boss staan. Positioneer jezelf bewust — niet achteraan de groep hangen.'},
      {icon:'🤲',title:'Rescue = groepsredder',text:'Rescue pakt een groepslid op en draagt hem naar veiligheid. Gebruik het als iemand in een mechanic staat die hij niet snel genoeg kan ontwijken. Uniek en enorm waardevol in M+.'},
    ],
    en:[
      {icon:'🔥',title:'Empower = charging pays off',text:'Fire Breath rank 3 does almost double the damage of rank 1. In your burst window (Dragonrage) always use rank 3. Outside burst you can take rank 2 for speed.'},
      {icon:'🐉',title:'Hover = unique mobility',text:'Hover lets you move while casting — something no other ranged DPS can do. Activate it proactively on movement mechanics, so you never lose DPS by having to run.'},
      {icon:'💥',title:'Dragonrage = put everything in',text:'Dragonrage gives 18 seconds of increased Essence damage. Use in that window: Fire Breath rank 3 → Eternity Surge → everything that costs Essence. This is your full burst window.'},
      {icon:'📏',title:'25 yard range!',text:'Evokers only have 25 yards range, not 40 like other ranged. You need to stand closer to the boss. Position yourself deliberately — don\'t hang at the back of the group.'},
      {icon:'🤲',title:'Rescue = group saver',text:'Rescue picks up a group member and carries them to safety. Use it when someone is standing in a mechanic they can\'t dodge fast enough. Unique and enormously valuable in M+.'},
    ]
  },
  macros:{
    nl:[
      {name:'Dragonrage burst',code:'/cast Dragonrage\n/cast Fire Breath',note:'Burst opener — beide tegelijk activeren.'},
      {name:'Hover mobiel',code:'/cast Hover',note:'Mobiliteit tijdens casten — bind aan makkelijke knop.'},
      {name:'Rescue op mouseover',code:'/cast [@mouseover] Rescue',note:'Red groepslid snel zonder target te wisselen.'},
    ],
    en:[
      {name:'Dragonrage burst',code:'/cast Dragonrage\n/cast Fire Breath',note:'Burst opener — activate both together.'},
      {name:'Hover mobile',code:'/cast Hover',note:'Mobility while casting — bind to easy key.'},
      {name:'Rescue on mouseover',code:'/cast [@mouseover] Rescue',note:'Save group member quickly without switching targets.'},
    ]
  },
  resource_info:{
    nl:{
      intro:'Devastation gebruikt Mana (voor Living Flame filler) en Essence (0-6, voor Pyre en Disintegrate). Essence regenereert automatisch, sneller via Haste.',
      generate:['Passieve Essence regeneratie (1 per 5 sec)','Charged Blast proc bij crit — gratis Pyre','Living Flame filler'],
      spend:['Disintegrate (3 Essence) — beste single target channel','Pyre (3 Essence) — AoE dump','Eternity Surge — Empower, geen Essence cost'],
      pet_tip:'💡 Essence nooit op max laten zitten — dat is verspilling. Cast Pyre of Disintegrate als je op 5+ Essence zit!',
      pets:[],
    },
    en:{
      intro:'Devastation uses Mana (for Living Flame filler) and Essence (0-6, for Pyre and Disintegrate). Essence regenerates automatically, faster via Haste.',
      generate:['Passive Essence regeneration (1 per 5 sec)','Charged Blast proc on crit — free Pyre','Living Flame filler'],
      spend:['Disintegrate (3 Essence) — best single target channel','Pyre (3 Essence) — AoE dump','Eternity Surge — Empower, no Essence cost'],
      pet_tip:'💡 Never let Essence sit at max — that\'s waste. Cast Pyre or Disintegrate when you\'re at 5+ Essence!',
      pets:[],
    }
  },
  consumables:{
    nl:[
      {type:'flask',name:'Flask of the Magisters',effect:'Verhoogt Intellect voor 1 uur.',note:'Altijd actief'},
      {type:'pot',name:'Potion of Recklessness',effect:'Intellect burst bij Dragonrage.',note:'Op pull'},
      {type:'food',name:'Silvermoon Parade (Feast)',effect:'+Intellect en Stamina.',note:'Feast vragen'},
      {type:'food',name:'Royal Roast',effect:'Solo food.',note:'Backup'},
      {type:'rune',name:'Void-Touched Augment Rune',effect:'+Primaire stat.',note:'Altijd'},
    ],
    en:[
      {type:'flask',name:'Flask of the Magisters',effect:'Increases Intellect for 1 hour.',note:'Always active'},
      {type:'pot',name:'Potion of Recklessness',effect:'Intellect burst during Dragonrage.',note:'On pull'},
      {type:'food',name:'Silvermoon Parade (Feast)',effect:'+Intellect and Stamina.',note:'Ask for feast'},
      {type:'food',name:'Royal Roast',effect:'Solo food.',note:'Backup'},
      {type:'rune',name:'Void-Touched Augment Rune',effect:'+Primary stat.',note:'Always'},
    ]
  },
};
ALL_SPECS.push(SPEC_DEVASTATION_EVOKER);

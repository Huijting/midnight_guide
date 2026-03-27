if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_AUGMENTATION_EVOKER = {
  id:'augmentation_evoker', icon:'🟤', class:'Evoker',
  spec:{nl:'Augmentation',en:'Augmentation'},
  role:'dps', armor:'Mail',
  weapon:{nl:'Two-hand weapon',en:'Two-hand weapon'},
  resource:'Mana + Essence',
  patch:'1.0', color:'#33937F',
  summary:{
    nl:'Augmentation is de enige Support DPS spec in het spel. Je doet zelf relatief weinig schade — maar je versterkt de twee sterkste DPS in de groep met Ebon Might voor massieve schade-boost. Je waarde staat niet op de meters.',
    en:'Augmentation is the only Support DPS spec in the game. You do relatively little damage yourself — but you empower the two strongest DPS in the group with Ebon Might for massive damage boost. Your value doesn\'t show on the meters.'
  },
  pros:{
    nl:['Verhoogt groep-DPS meer dan elke andere spec','Ebon Might = massieve schade multiplier op 2 spelers','Unieke utility: Rescue, Zephyr, Blistering Scales','Hover = bewegen tijdens casten','Speelt uniek — totaal anders dan elke andere spec'],
    en:['Increases group DPS more than any other spec','Ebon Might = massive damage multiplier on 2 players','Unique utility: Rescue, Zephyr, Blistering Scales','Hover = moving while casting','Plays uniquely — totally different from any other spec']
  },
  cons:{
    nl:['Eigen schade lijkt laag op meters (misleidend)','Acceptatie probleem: sommige groepen begrijpen je waarde niet','Kort bereik (25 yards)','Alleen speelbaar als Dracthyr','Vereist goede kennis van groepscompositie'],
    en:['Own damage looks low on meters (misleading)','Acceptance problem: some groups don\'t understand your value','Short range (25 yards)','Only playable as Dracthyr','Requires good knowledge of group composition']
  },
  cheatsheet:{
    nl:{
      opener:'Ebon Might (op 2 sterkste DPS) → Prescience → Breath of Eons → Upheaval → Eruption spam',
      single:'Ebon Might actief houden → Prescience → Upheaval op CD → Eruption filler → Hover bij movement',
      aoe:'Ebon Might op DPS → Breath of Eons AoE → Upheaval → Eruption spam op groep',
      rules:[
        'Ebon Might ALTIJD actief op de 2 hoogste DPS — dit is je #1 taak',
        'Prescience op de sterkste aanvaller voor extra crit kans',
        'Breath of Eons syncen met groeps-DPS cooldowns',
        'Upheaval altijd op CD — je beste persoonlijke schade',
        'Je meters zien er laag uit — dat is normaal en correct',
      ],
    },
    en:{
      opener:'Ebon Might (on 2 strongest DPS) → Prescience → Breath of Eons → Upheaval → Eruption spam',
      single:'Keep Ebon Might active → Prescience → Upheaval on CD → Eruption filler → Hover on movement',
      aoe:'Ebon Might on DPS → Breath of Eons AoE → Upheaval → Eruption spam on group',
      rules:[
        'Ebon Might ALWAYS active on the 2 highest DPS — this is your #1 task',
        'Prescience on the strongest attacker for extra crit chance',
        'Sync Breath of Eons with group DPS cooldowns',
        'Upheaval always on CD — your best personal damage',
        'Your meters look low — that\'s normal and correct',
      ],
    }
  },
  rotation:{
    nl:{
      apex_tip:'💡 Ebon Might verhoogt de schade van 2 groepsleden met 15-20% voor 10 seconden. Dit is je enige doel: altijd op de 2 sterkste DPS actief houden. Jouw eigen schade is bijzaak — de groepsschade die je toevoegt is enorm.',
      opener:[
        {spell:'Ebon Might',why:'Op 2 sterkste DPS — jouw kern CD'},
        {spell:'Prescience',why:'Geeft sterkste aanvaller extra crit kans'},
        {spell:'Breath of Eons',why:'AoE + versterkt Ebon Might schade'},
        {spell:'Upheaval',why:'Aarde aanval — beste persoonlijke CD'},
        {spell:'Eruption',why:'Essence dump filler'},
      ],
      single:[
        {spell:'Ebon Might',why:'Altijd actief — verlengen voor expiry'},
        {spell:'Prescience',why:'Op sterkste aanvaller op CD'},
        {spell:'Upheaval',why:'Altijd op CD — beste persoonlijke schade'},
        {spell:'Eruption',why:'Essence dump filler'},
        {spell:'Living Flame',why:'Mana filler tussen Essence spells'},
      ],
      aoe:[
        {spell:'Ebon Might',why:'AoE waarde — alle DPS doet meer schade'},
        {spell:'Breath of Eons',why:'AoE burst + Ebon Might versterker'},
        {spell:'Upheaval',why:'AoE aarde aanval op CD'},
        {spell:'Eruption',why:'AoE Essence dump'},
        {spell:'Prescience',why:'Op melee DPS voor extra cleave'},
      ],
    },
    en:{
      apex_tip:'💡 Ebon Might increases the damage of 2 group members by 15-20% for 10 seconds. This is your only goal: always keep it active on the 2 strongest DPS. Your own damage is secondary — the group damage you add is enormous.',
      opener:[
        {spell:'Ebon Might',why:'On 2 strongest DPS — your core CD'},
        {spell:'Prescience',why:'Gives strongest attacker extra crit chance'},
        {spell:'Breath of Eons',why:'AoE + amplifies Ebon Might damage'},
        {spell:'Upheaval',why:'Earth attack — best personal CD'},
        {spell:'Eruption',why:'Essence dump filler'},
      ],
      single:[
        {spell:'Ebon Might',why:'Always active — extend before expiry'},
        {spell:'Prescience',why:'On strongest attacker on CD'},
        {spell:'Upheaval',why:'Always on CD — best personal damage'},
        {spell:'Eruption',why:'Essence dump filler'},
        {spell:'Living Flame',why:'Mana filler between Essence spells'},
      ],
      aoe:[
        {spell:'Ebon Might',why:'AoE value — all DPS deals more damage'},
        {spell:'Breath of Eons',why:'AoE burst + Ebon Might amplifier'},
        {spell:'Upheaval',why:'AoE earth attack on CD'},
        {spell:'Eruption',why:'AoE Essence dump'},
        {spell:'Prescience',why:'On melee DPS for extra cleave'},
      ],
    }
  },
  stats:{
    nl:{
      tip:'Mastery verhoogt de bonus van Ebon Might — dit is verreweg de beste secondary stat. Haste verkort de CD van Ebon Might.',
      list:[
        {rank:1,stat:'Intellect',bars:5,note:'Primaire stat'},
        {rank:2,stat:'Mastery',bars:5,note:'Verhoogt Ebon Might bonus — verreweg beste'},
        {rank:3,stat:'Haste',bars:3,note:'Kortere Ebon Might CD'},
        {rank:4,stat:'Critical Strike',bars:2,note:'Extra schade via procs'},
        {rank:5,stat:'Versatility',bars:1,note:'Laagste prioriteit'},
      ],
    },
    en:{
      tip:'Mastery increases the Ebon Might bonus — by far the best secondary stat. Haste shortens the CD of Ebon Might.',
      list:[
        {rank:1,stat:'Intellect',bars:5,note:'Primary stat'},
        {rank:2,stat:'Mastery',bars:5,note:'Increases Ebon Might bonus — by far best'},
        {rank:3,stat:'Haste',bars:3,note:'Shorter Ebon Might CD'},
        {rank:4,stat:'Critical Strike',bars:2,note:'Extra damage via procs'},
        {rank:5,stat:'Versatility',bars:1,note:'Lowest priority'},
      ],
    }
  },
  cooldowns:{
    nl:[
      {spell:'Ebon Might',cd:'30 sec',effect:'+15-20% schade op 2 groepsleden 10 sec',when:'Altijd op CD op de 2 hoogste DPS — jouw kern!'},
      {spell:'Breath of Eons',cd:'2 min',effect:'AoE + versterkt Ebon Might multiplicatie',when:'Synced met groeps-DPS cooldowns'},
      {spell:'Upheaval',cd:'40 sec',effect:'Krachtige aarde aanval',when:'Altijd op CD — beste eigen schade'},
      {spell:'Prescience',cd:'12 sec',effect:'Versterkt volgende aanval van target',when:'Op de sterkste aanvaller altijd'},
      {spell:'Blistering Scales',cd:'1 min',effect:'Tank krijgt +20% armor en weerkaatst schade',when:'Grote tank schade — unieke tankbuff'},
    ],
    en:[
      {spell:'Ebon Might',cd:'30 sec',effect:'+15-20% damage on 2 group members 10 sec',when:'Always on CD on the 2 highest DPS — your core!'},
      {spell:'Breath of Eons',cd:'2 min',effect:'AoE + amplifies Ebon Might multiplication',when:'Synced with group DPS cooldowns'},
      {spell:'Upheaval',cd:'40 sec',effect:'Powerful earth attack',when:'Always on CD — best personal damage'},
      {spell:'Prescience',cd:'12 sec',effect:'Amplifies next attack of target',when:'Always on the strongest attacker'},
      {spell:'Blistering Scales',cd:'1 min',effect:'Tank gets +20% armor and reflects damage',when:'Major tank damage — unique tank buff'},
    ]
  },
  utility:{
    nl:[
      {spell:'Rescue',type:'Redding',note:'Draag groepslid weg uit mechanic'},
      {spell:'Zephyr',type:'Groeps-CD',note:'10% schade reductie voor groep 8 sec'},
      {spell:'Blistering Scales',type:'Tank-buff',note:'Tank weerkaatst schade + armor boost'},
      {spell:'Hover',type:'Mobiliteit',note:'Bewegen tijdens casten'},
      {spell:'Tail Swipe',type:'Knockback',note:'AoE knockback'},
    ],
    en:[
      {spell:'Rescue',type:'Rescue',note:'Carry group member away from mechanic'},
      {spell:'Zephyr',type:'Group CD',note:'10% damage reduction for group 8 sec'},
      {spell:'Blistering Scales',type:'Tank buff',note:'Tank reflects damage + armor boost'},
      {spell:'Hover',type:'Mobility',note:'Move while casting'},
      {spell:'Tail Swipe',type:'Knockback',note:'AoE knockback'},
    ]
  },
  tips:{
    nl:[
      {icon:'🟤',title:'Je meters liegen',text:'Augmentation doet bewust weinig eigen schade — je waarde zit in de schade die je toevoegt aan andere spelers via Ebon Might. In een goede groep voeg je 10-15% groeps-DPS toe. Dat zie je niet op je eigen meter.'},
      {icon:'👥',title:'Ken je groep',text:'Ebon Might moet op de 2 spelers die de meeste schade doen. In M+ is dat vaak de melee DPS + de sterkste caster. Check DPS meters na de eerste pack en pas je targets aan.'},
      {icon:'🔄',title:'Ebon Might nooit laten verlopen',text:'Ebon Might heeft 30 sec CD en duurt 10 sec. Verlengen voor het verloopt is cruciaal — een seconde zonder Ebon Might is verloren schade voor je hele groep.'},
      {icon:'🐉',title:'Breath of Eons = groeps-burst',text:'Breath of Eons is het krachtigst als de groep zijn cooldowns tegelijk gebruikt. Vraag je DPS om hun burst te syncen met jouw Breath of Eons voor maximale combineerde schade.'},
      {icon:'🛡️',title:'Blistering Scales = unieke tankbuff',text:'Blistering Scales geeft de tank +20% armor EN laat hem schade weerkaatsen. Gebruik het op de tank bij grote pulls of boss mechanics — uniek voor Augmentation.'},
    ],
    en:[
      {icon:'🟤',title:'Your meters lie',text:'Augmentation intentionally does little personal damage — your value is in the damage you add to other players via Ebon Might. In a good group you add 10-15% group DPS. That doesn\'t show on your own meter.'},
      {icon:'👥',title:'Know your group',text:'Ebon Might should be on the 2 players doing the most damage. In M+ that\'s often melee DPS + the strongest caster. Check DPS meters after the first pack and adjust your targets.'},
      {icon:'🔄',title:'Never let Ebon Might expire',text:'Ebon Might has 30 sec CD and lasts 10 sec. Renewing before it expires is crucial — one second without Ebon Might is lost damage for your entire group.'},
      {icon:'🐉',title:'Breath of Eons = group burst',text:'Breath of Eons is most powerful when the group uses their cooldowns simultaneously. Ask your DPS to sync their burst with your Breath of Eons for maximum combined damage.'},
      {icon:'🛡️',title:'Blistering Scales = unique tank buff',text:'Blistering Scales gives the tank +20% armor AND makes them reflect damage. Use it on the tank during large pulls or boss mechanics — unique to Augmentation.'},
    ]
  },
  macros:{
    nl:[
      {name:'Ebon Might op focus',code:'/cast [@focus] Ebon Might',note:'Altijd op sterkste DPS (focus) — snel refreshen.'},
      {name:'Prescience op mouseover',code:'/cast [@mouseover] Prescience',note:'Snel op sterkste aanvaller.'},
      {name:'Rescue op mouseover',code:'/cast [@mouseover] Rescue',note:'Red groepslid snel.'},
    ],
    en:[
      {name:'Ebon Might on focus',code:'/cast [@focus] Ebon Might',note:'Always on strongest DPS (focus) — quick refresh.'},
      {name:'Prescience on mouseover',code:'/cast [@mouseover] Prescience',note:'Quickly on strongest attacker.'},
      {name:'Rescue on mouseover',code:'/cast [@mouseover] Rescue',note:'Save group member quickly.'},
    ]
  },
  resource_info:{
    nl:{
      intro:'Augmentation gebruikt Mana en Essence. Je Essence wordt primair gebruikt voor Eruption (schade dump). Ebon Might kost geen Essence — het is op een aparte CD.',
      generate:['Passieve Essence regeneratie','Living Flame filler — mana-gebaseerd'],
      spend:['Eruption (3 Essence) — AoE schade dump','Upheaval — geen Essence, aparte CD'],
      pet_tip:'💡 Essence management is voor Augmentation minder kritisch dan voor andere Evokers — focus op Ebon Might uptime. Dat is je échte resource!',
      pets:[],
    },
    en:{
      intro:'Augmentation uses Mana and Essence. Your Essence is primarily used for Eruption (damage dump). Ebon Might costs no Essence — it\'s on a separate CD.',
      generate:['Passive Essence regeneration','Living Flame filler — mana-based'],
      spend:['Eruption (3 Essence) — AoE damage dump','Upheaval — no Essence, separate CD'],
      pet_tip:'💡 Essence management is less critical for Augmentation than for other Evokers — focus on Ebon Might uptime. That\'s your real resource!',
      pets:[],
    }
  },
  consumables:{
    nl:[
      {type:'flask',name:'Flask of the Magisters',effect:'Verhoogt Intellect voor 1 uur.',note:'Altijd actief'},
      {type:'pot',name:'Potion of Recklessness',effect:'Intellect boost bij Breath of Eons window.',note:'Op pull'},
      {type:'food',name:'Silvermoon Parade (Feast)',effect:'+Intellect en Stamina.',note:'Feast vragen'},
      {type:'food',name:'Royal Roast',effect:'Solo food.',note:'Backup'},
      {type:'rune',name:'Void-Touched Augment Rune',effect:'+Primaire stat.',note:'Altijd'},
    ],
    en:[
      {type:'flask',name:'Flask of the Magisters',effect:'Increases Intellect for 1 hour.',note:'Always active'},
      {type:'pot',name:'Potion of Recklessness',effect:'Intellect boost during Breath of Eons window.',note:'On pull'},
      {type:'food',name:'Silvermoon Parade (Feast)',effect:'+Intellect and Stamina.',note:'Ask for feast'},
      {type:'food',name:'Royal Roast',effect:'Solo food.',note:'Backup'},
      {type:'rune',name:'Void-Touched Augment Rune',effect:'+Primary stat.',note:'Always'},
    ]
  },
};
ALL_SPECS.push(SPEC_AUGMENTATION_EVOKER);

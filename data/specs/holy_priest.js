if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_HOLY_PRIEST = {
  id:'holy_priest', icon:'🌟', class:'Priest',
  spec:{nl:'Holy',en:'Holy'},
  role:'heal', armor:'Cloth',
  weapon:{nl:'Staff or one-hand + offhand',en:'Staff or one-hand + offhand'},
  resource:'Mana',
  patch:'1.0', color:'#FFFFFF',
  summary:{
    nl:'Holy Priest is de traditionele reactieve healer. Directe heals, krachtige HoTs en de beste AoE healing in het spel via Prayer of Healing en Circle of Healing. Eenvoudiger dan Discipline.',
    en:'Holy Priest is the traditional reactive healer. Direct heals, powerful HoTs and the best AoE healing in the game via Prayer of Healing and Circle of Healing. Simpler than Discipline.'
  },
  pros:{
    nl:['Beste AoE healing throughput in het spel','Eenvoudiger te leren dan Discipline','Divine Hymn = sterkste AoE heal CD','Uitstekende HoT via Renew','Serendipity procs voor snellere heals'],
    en:['Best AoE healing throughput in the game','Easier to learn than Discipline','Divine Hymn = strongest AoE heal CD','Excellent HoT via Renew','Serendipity procs for faster heals']
  },
  cons:{
    nl:['Minder preventieve healing dan Discipline','Geen absorb mechanic (Disc heeft PW:S)','Minder damage output dan Disc','Minder sterk bij zware movement fights'],
    en:['Less preventative healing than Discipline','No absorb mechanic (Disc has PW:S)','Less damage output than Disc','Weaker in heavy movement fights']
  },
  cheatsheet:{
    nl:{
      opener:'Renew op tank → Holy Word: Serenity op tank → Flash Heal → Circle of Healing bij groepsschade',
      single:'Heal/Flash Heal filler → Holy Word: Serenity op CD → Renew op laag HP targets → Prayer of Mending altijd actief',
      aoe:'Circle of Healing op CD → Prayer of Healing → Holy Word: Sanctify → Divine Hymn bij grote groepsschade',
      rules:[
        'Prayer of Mending altijd actief — bounced automatisch',
        'Circle of Healing altijd op CD bij 3+ gewonden spelers',
        'Holy Word spells altijd op CD — geen mana kosten + krachtig',
        'Renew actief houden op tank en laag HP spelers',
        'Divine Hymn bewaren voor echte nood — niet te vroeg gebruiken',
      ],
    },
    en:{
      opener:'Renew on tank → Holy Word: Serenity on tank → Flash Heal → Circle of Healing on group damage',
      single:'Heal/Flash Heal filler → Holy Word: Serenity on CD → Renew on low HP targets → Prayer of Mending always active',
      aoe:'Circle of Healing on CD → Prayer of Healing → Holy Word: Sanctify → Divine Hymn on major group damage',
      rules:[
        'Prayer of Mending always active — bounces automatically',
        'Circle of Healing always on CD at 3+ wounded players',
        'Holy Word spells always on CD — no mana cost + powerful',
        'Keep Renew active on tank and low HP players',
        'Save Divine Hymn for real emergencies — don\'t use too early',
      ],
    }
  },
  rotation:{
    nl:{
      apex_tip:'💡 Prayer of Mending springt automatisch naar het volgende groepslid als het iemand healt. Houd het altijd actief — het is gratis healing die vanzelf werkt!',
      opener:[
        {spell:'Renew',why:'HoT op tank voor passieve healing'},
        {spell:'Prayer of Mending',why:'Altijd actief — springt naar laag HP targets'},
        {spell:'Holy Word: Serenity',why:'Grote instant heal op CD — gratis'},
        {spell:'Flash Heal',why:'Snelle heal als tank laag is'},
        {spell:'Circle of Healing',why:'Bij groepsschade — AoE heal op CD'},
      ],
      single:[
        {spell:'Prayer of Mending',why:'Altijd actief houden — sterk HoT'},
        {spell:'Holy Word: Serenity',why:'Op CD — beste single target heal'},
        {spell:'Heal',why:'Efficiënte filler — laag mana'},
        {spell:'Renew',why:'HoT op spelers die schade nemen'},
        {spell:'Flash Heal',why:'Snelle noodheal — hoog mana kosten'},
      ],
      aoe:[
        {spell:'Circle of Healing',why:'AoE heal op CD — altijd'},
        {spell:'Prayer of Healing',why:'AoE heal voor de hele groep'},
        {spell:'Holy Word: Sanctify',why:'AoE HoT zone op CD'},
        {spell:'Divine Hymn',why:'Grootste AoE heal in het spel'},
        {spell:'Apotheosis',why:'+100% Holy Word effectiveness 25 sec'},
      ],
    },
    en:{
      apex_tip:'💡 Prayer of Mending automatically jumps to the next group member when it heals someone. Always keep it active — it\'s free healing that works by itself!',
      opener:[
        {spell:'Renew',why:'HoT on tank for passive healing'},
        {spell:'Prayer of Mending',why:'Always active — jumps to low HP targets'},
        {spell:'Holy Word: Serenity',why:'Large instant heal on CD — free'},
        {spell:'Flash Heal',why:'Quick heal if tank is low'},
        {spell:'Circle of Healing',why:'On group damage — AoE heal on CD'},
      ],
      single:[
        {spell:'Prayer of Mending',why:'Always keep active — strong HoT'},
        {spell:'Holy Word: Serenity',why:'On CD — best single target heal'},
        {spell:'Heal',why:'Efficient filler — low mana'},
        {spell:'Renew',why:'HoT on players taking damage'},
        {spell:'Flash Heal',why:'Quick emergency heal — high mana cost'},
      ],
      aoe:[
        {spell:'Circle of Healing',why:'AoE heal on CD — always'},
        {spell:'Prayer of Healing',why:'AoE heal for the whole group'},
        {spell:'Holy Word: Sanctify',why:'AoE HoT zone on CD'},
        {spell:'Divine Hymn',why:'Biggest AoE heal in the game'},
        {spell:'Apotheosis',why:'+100% Holy Word effectiveness 25 sec'},
      ],
    }
  },
  stats:{
    nl:{
      tip:'Haste laat je Holy Word spells sneller rechargen en maakt Flash Heal sneller. Critical Strike versterkt je heals via Holy\'s mastery effect.',
      list:[
        {rank:1,stat:'Intellect',bars:5,note:'Primaire stat'},
        {rank:2,stat:'Haste',bars:4,note:'Holy Word spells sneller klaar'},
        {rank:3,stat:'Critical Strike',bars:3,note:'Grotere heals + Inspiration proc'},
        {rank:4,stat:'Mastery',bars:3,note:'Verhoogt heals op spelers met laag HP'},
        {rank:5,stat:'Versatility',bars:1,note:'Laagste prioriteit'},
      ],
    },
    en:{
      tip:'Haste lets Holy Word spells recharge faster and makes Flash Heal faster. Critical Strike amplifies your heals via Holy\'s mastery effect.',
      list:[
        {rank:1,stat:'Intellect',bars:5,note:'Primary stat'},
        {rank:2,stat:'Haste',bars:4,note:'Holy Word spells ready faster'},
        {rank:3,stat:'Critical Strike',bars:3,note:'Bigger heals + Inspiration proc'},
        {rank:4,stat:'Mastery',bars:3,note:'Increases heals on low HP players'},
        {rank:5,stat:'Versatility',bars:1,note:'Lowest priority'},
      ],
    }
  },
  cooldowns:{
    nl:[
      {spell:'Divine Hymn',cd:'3 min',effect:'Channeled — healt alle groepsleden over 8 sec',when:'Grootste AoE heal CD — bij massale groepsschade'},
      {spell:'Holy Word: Salvation',cd:'4 min',effect:'AoE heal + PW:S op iedereen',when:'Alternatieve groeps-CD voor sustained healing'},
      {spell:'Guardian Spirit',cd:'3 min',effect:'Cheat death voor 1 speler 10 sec',when:'Speler dreigt te sterven — ultiem noodgeval'},
      {spell:'Apotheosis',cd:'2 min',effect:'Holy Word spells kosten geen mana + verdubbeld effect',when:'Grote AoE healing window — met Divine Hymn'},
      {spell:'Circle of Healing',cd:'10 sec',effect:'Instant AoE heal op 5 spelers rondom target',when:'Altijd op CD bij groepsschade'},
    ],
    en:[
      {spell:'Divine Hymn',cd:'3 min',effect:'Channeled — heals all group members over 8 sec',when:'Biggest AoE heal CD — on massive group damage'},
      {spell:'Holy Word: Salvation',cd:'4 min',effect:'AoE heal + PW:S on everyone',when:'Alternative group CD for sustained healing'},
      {spell:'Guardian Spirit',cd:'3 min',effect:'Cheat death for 1 player 10 sec',when:'Player about to die — ultimate emergency'},
      {spell:'Apotheosis',cd:'2 min',effect:'Holy Word spells cost no mana + doubled effect',when:'Large AoE healing window — with Divine Hymn'},
      {spell:'Circle of Healing',cd:'10 sec',effect:'Instant AoE heal on 5 players around target',when:'Always on CD during group damage'},
    ]
  },
  utility:{
    nl:[
      {spell:'Guardian Spirit',type:'Nood',note:'Cheat death — redt een speler van zeker overlijden'},
      {spell:'Divine Hymn',type:'Groeps-CD',note:'Beste AoE heal in het spel'},
      {spell:'Purify',type:'Dispel',note:'Verwijdert Magic en Disease'},
      {spell:'Leap of Faith',type:'Positie',note:'Trek partylid naar jou — zeer nuttig'},
      {spell:'Mass Dispel',type:'AoE Dispel',note:'Verwijdert magic van meerdere targets tegelijk'},
    ],
    en:[
      {spell:'Guardian Spirit',type:'Emergency',note:'Cheat death — save a player from certain death'},
      {spell:'Divine Hymn',type:'Group CD',note:'Best AoE heal in the game'},
      {spell:'Purify',type:'Dispel',note:'Removes Magic and Disease'},
      {spell:'Leap of Faith',type:'Position',note:'Pull party member to you — very useful'},
      {spell:'Mass Dispel',type:'AoE Dispel',note:'Removes magic from multiple targets simultaneously'},
    ]
  },
  tips:{
    nl:[
      {icon:'🌟',title:'Prayer of Mending altijd actief',text:'PoM springt automatisch naar het volgende groepslid wanneer het activeert. Gooi het altijd op de tank — het springt vanzelf naar wie schade neemt. Vergeet nooit te refreshen.'},
      {icon:'💛',title:'Holy Word spells zijn gratis',text:'Holy Word: Serenity en Sanctify kosten geen mana en zijn krachtig. Gebruik ze ALTIJD op cooldown — er is geen reden om ze te bewaren.'},
      {icon:'👻',title:'Guardian Spirit = cheat death',text:'Guardian Spirit geeft een speler 10 seconden een cheat death. Als ze sterven tijdens die 10 seconden worden ze tot 50% HP geheald. Gebruik het als je ZEKER weet dat iemand sterft.'},
      {icon:'🎵',title:'Divine Hymn timing',text:'Divine Hymn channel voor 8 sec. Gebruik het bij grote voorspelbare AoE — niet als reactie. Communiceer: "Hymn!" zodat je healer-buddy weet wat er aankomt.'},
      {icon:'🙏',title:'Leap of Faith voor mechanics',text:'Leap of Faith trek iemand naar jou toe. In M+ gebruik het als een DPS mechanic heeft (slime, debuff zone) en je hem snel wilt verplaatsen. Vraag permission in Discord.'},
    ],
    en:[
      {icon:'🌟',title:'Prayer of Mending always active',text:'PoM automatically jumps to the next group member when it activates. Always throw it on the tank — it jumps on its own to whoever takes damage. Never forget to refresh.'},
      {icon:'💛',title:'Holy Word spells are free',text:'Holy Word: Serenity and Sanctify cost no mana and are powerful. ALWAYS use them on cooldown — there\'s no reason to save them.'},
      {icon:'👻',title:'Guardian Spirit = cheat death',text:'Guardian Spirit gives a player 10 seconds of cheat death. If they die during those 10 seconds they get healed to 50% HP. Use it when you\'re CERTAIN someone will die.'},
      {icon:'🎵',title:'Divine Hymn timing',text:'Divine Hymn channels for 8 sec. Use it during large predictable AoE — not as a reaction. Communicate: "Hymn!" so your healer buddy knows what\'s coming.'},
      {icon:'🙏',title:'Leap of Faith for mechanics',text:'Leap of Faith pulls someone to you. In M+ use it when a DPS has a mechanic (slime, debuff zone) and you want to reposition them quickly. Ask permission in Discord.'},
    ]
  },
  macros:{
    nl:[
      {name:'Guardian Spirit mouseover',code:'/cast [@mouseover] Guardian Spirit',note:'Cheat death op groepslid zonder target te wisselen.'},
      {name:'Divine Hymn',code:'/cast Divine Hymn',note:'Grootste AoE heal — altijd op één knop.'},
      {name:'Leap of Faith rescue',code:'/cast [@mouseover] Leap of Faith',note:'Trek partylid naar jou bij mechanic.'},
    ],
    en:[
      {name:'Guardian Spirit mouseover',code:'/cast [@mouseover] Guardian Spirit',note:'Cheat death on group member without switching targets.'},
      {name:'Divine Hymn',code:'/cast Divine Hymn',note:'Biggest AoE heal — always on one button.'},
      {name:'Leap of Faith rescue',code:'/cast [@mouseover] Leap of Faith',note:'Pull party member to you on mechanic.'},
    ]
  },
  resource_info:{
    nl:{
      intro:'Holy Priest gebruikt Mana. Mana management is minder strak dan Disc — Holy heeft meer efficiënte spells. Gebruik Heal (niet Flash Heal) als filler voor mana efficiency.',
      generate:['Passieve mana regeneratie','Shadowfiend — mana restore','Symbol of Hope — groeps mana restore'],
      spend:['Flash Heal — duurste spell, alleen bij nood','Heal — efficiënte filler','Prayer of Healing — AoE maar duur','Circle of Healing — goedkoop AoE'],
      pet_tip:'💡 Gebruik Heal in rustige momenten, Flash Heal bij nood. Heal kost 3x minder mana voor vergelijkbare output!',
      pets:[],
    },
    en:{
      intro:'Holy Priest uses Mana. Mana management is less strict than Disc — Holy has more efficient spells. Use Heal (not Flash Heal) as filler for mana efficiency.',
      generate:['Passive mana regeneration','Shadowfiend — mana restore','Symbol of Hope — group mana restore'],
      spend:['Flash Heal — most expensive spell, only in emergencies','Heal — efficient filler','Prayer of Healing — AoE but expensive','Circle of Healing — cheap AoE'],
      pet_tip:'💡 Use Heal in calm moments, Flash Heal in emergencies. Heal costs 3x less mana for comparable output!',
      pets:[],
    }
  },
  consumables:{
    nl:[
      {type:'flask',name:'Flask of the Magisters',effect:'Verhoogt Intellect voor 1 uur.',note:'Altijd actief'},
      {type:'pot',name:'Potion of Recklessness',effect:'Intellect boost bij Divine Hymn window.',note:'Gebruik bij grote groepsschade'},
      {type:'food',name:'Silvermoon Parade (Feast)',effect:'+Intellect en Stamina via groepsfeast.',note:'Feast vragen'},
      {type:'food',name:'Royal Roast',effect:'Solo food backup.',note:'Backup'},
      {type:'rune',name:'Void-Touched Augment Rune',effect:'+Primaire stat 1 uur.',note:'Altijd gebruiken'},
    ],
    en:[
      {type:'flask',name:'Flask of the Magisters',effect:'Increases Intellect for 1 hour.',note:'Always active'},
      {type:'pot',name:'Potion of Recklessness',effect:'Intellect boost during Divine Hymn window.',note:'Use during major group damage'},
      {type:'food',name:'Silvermoon Parade (Feast)',effect:'+Intellect and Stamina via group feast.',note:'Ask for feast'},
      {type:'food',name:'Royal Roast',effect:'Solo food backup.',note:'Backup'},
      {type:'rune',name:'Void-Touched Augment Rune',effect:'+Primary stat 1 hour.',note:'Always use'},
    ]
  },
};
ALL_SPECS.push(SPEC_HOLY_PRIEST);

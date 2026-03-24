if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_RESTORATION_SHAMAN = {
  id:'restoration_shaman', icon:'💧', class:'Shaman',
  spec:{nl:'Restoration',en:'Restoration'},
  role:'heal', armor:'Mail',
  weapon:{nl:'Staf of eenhandig + offhand',en:'Staff or one-hand + offhand'},
  resource:'Mana',
  patch:'1.0', color:'#0070DE',
  summary:{
    nl:'Restoration Shaman healt via HoTs en krachtige Chain Heal bounces. Spiritwalker\'s Grace maakt casten tijdens movement mogelijk — uniek voor healers. Beste utility-healer met Wind Rush Totem en Bloodlust.',
    en:'Restoration Shaman heals via HoTs and powerful Chain Heal bounces. Spiritwalker\'s Grace allows casting while moving — unique for healers. Best utility healer with Wind Rush Totem and Bloodlust.'
  },
  pros:{
    nl:['Chain Heal = efficiëntste AoE heal in het spel','Spiritwalker\'s Grace = casten tijdens movement','Earthen Wall Totem = sterke groeps-CD','Bloodlust/Heroism bij de healer','Wind Rush Totem = beste movement CD in game'],
    en:['Chain Heal = most efficient AoE heal in the game','Spiritwalker\'s Grace = cast while moving','Earthen Wall Totem = strong group CD','Bloodlust/Heroism from the healer','Wind Rush Totem = best movement CD in game']
  },
  cons:{
    nl:['Chain Heal vereist goede groepspositionering','Minder sterk in pure single target','Riptide vereist constante aandacht','Mana intensief bij veel forced movement'],
    en:['Chain Heal requires good group positioning','Weaker in pure single target','Riptide requires constant attention','Mana intensive with lots of forced movement']
  },
  cheatsheet:{
    nl:{
      opener:'Riptide op tank → Healing Stream Totem → Earth Shield op tank → Chain Heal bij 3+ gewonden',
      single:'Riptide op CD → Healing Wave filler → Healing Surge bij nood → Mana Tea bewaken',
      aoe:'Riptide verspreiden → Chain Heal op target met Riptide → Healing Rain zone → Earthen Wall bij grote schade',
      rules:[
        'Riptide altijd op CD — genereert Tidal Waves proc (snellere Healing Wave/Surge)',
        'Chain Heal altijd casten op target MET Riptide — 25% bonus healing',
        'Healing Rain neerzetten bij statische groep — gratis AoE HoT',
        'Earthen Wall Totem voor voorspelbare grote groepsschade',
        'Spiritwalker\'s Grace proactief bij movement mechanics — niet wachten',
      ],
    },
    en:{
      opener:'Riptide on tank → Healing Stream Totem → Earth Shield on tank → Chain Heal at 3+ wounded',
      single:'Riptide on CD → Healing Wave filler → Healing Surge in emergency → Watch Mana Tea',
      aoe:'Spread Riptide → Chain Heal on target with Riptide → Healing Rain zone → Earthen Wall on major damage',
      rules:[
        'Riptide always on CD — generates Tidal Waves proc (faster Healing Wave/Surge)',
        'Always cast Chain Heal on target WITH Riptide — 25% bonus healing',
        'Place Healing Rain on static group — free AoE HoT',
        'Earthen Wall Totem before predictable major group damage',
        'Spiritwalker\'s Grace proactively on movement mechanics — don\'t wait',
      ],
    }
  },
  rotation:{
    nl:{
      apex_tip:'💡 Chain Heal springt naar de 3 dichtstbijzijnde laag-HP doelen. Activeer het ALTIJD op een target met Riptide — dat geeft 25% extra healing op alle 3 bounces!',
      opener:[
        {spell:'Earth Shield',why:'Passieve heal op tank — altijd actief houden'},
        {spell:'Riptide',why:'HoT + Tidal Waves proc voor snellere casts'},
        {spell:'Healing Stream Totem',why:'Passieve AoE heal — altijd neerzetten bij pull'},
        {spell:'Chain Heal',why:'Op target met Riptide — springt naar 3 laagste HP'},
        {spell:'Earthen Wall Totem',why:'Bij grote voorspelbare opening-schade'},
      ],
      single:[
        {spell:'Riptide',why:'Op CD — HoT + Tidal Waves'},
        {spell:'Healing Wave',why:'Efficiënte filler na Tidal Waves proc'},
        {spell:'Healing Surge',why:'Noodheal — duur, alleen bij laag HP'},
        {spell:'Healing Stream Totem',why:'Altijd actief bij statische fight'},
        {spell:'Mana Tea',why:'Bij <80% mana — vroeg gebruiken'},
      ],
      aoe:[
        {spell:'Riptide verspreiden',why:'Meerdere targets = betere Chain Heal bounces'},
        {spell:'Chain Heal',why:'Op target met Riptide — springt automatisch'},
        {spell:'Healing Rain',why:'AoE HoT zone — neerzetten bij statische groep'},
        {spell:'Earthen Wall Totem',why:'Absorb shield voor hele groep'},
        {spell:'Ascendance',why:'Nood: Healing Wave → instant Chain Heal 15 sec'},
      ],
    },
    en:{
      apex_tip:'💡 Chain Heal jumps to the 3 nearest low-HP targets. ALWAYS activate it on a target with Riptide — that gives 25% extra healing on all 3 bounces!',
      opener:[
        {spell:'Earth Shield',why:'Passive heal on tank — always keep active'},
        {spell:'Riptide',why:'HoT + Tidal Waves proc for faster casts'},
        {spell:'Healing Stream Totem',why:'Passive AoE heal — always place on pull'},
        {spell:'Chain Heal',why:'On target with Riptide — jumps to 3 lowest HP'},
        {spell:'Earthen Wall Totem',why:'On large predictable opening damage'},
      ],
      single:[
        {spell:'Riptide',why:'On CD — HoT + Tidal Waves'},
        {spell:'Healing Wave',why:'Efficient filler after Tidal Waves proc'},
        {spell:'Healing Surge',why:'Emergency heal — expensive, only at low HP'},
        {spell:'Healing Stream Totem',why:'Always active in static fight'},
        {spell:'Mana Tea',why:'At <80% mana — use early'},
      ],
      aoe:[
        {spell:'Spread Riptide',why:'Multiple targets = better Chain Heal bounces'},
        {spell:'Chain Heal',why:'On target with Riptide — jumps automatically'},
        {spell:'Healing Rain',why:'AoE HoT zone — place on static group'},
        {spell:'Earthen Wall Totem',why:'Absorb shield for whole group'},
        {spell:'Ascendance',why:'Emergency: Healing Wave → instant Chain Heal 15 sec'},
      ],
    }
  },
  stats:{
    nl:{
      tip:'Haste verlaagt Chain Heal cast time — meer casts in drukke momenten. Mastery laat overhealing een absorb shield worden op het target.',
      list:[
        {rank:1,stat:'Intellect',bars:5,note:'Primaire stat'},
        {rank:2,stat:'Haste',bars:4,note:'Snellere Chain Heal = meer healing per seconde'},
        {rank:3,stat:'Mastery',bars:3,note:'Overhealing → absorb shield (Earthshield)'},
        {rank:4,stat:'Critical Strike',bars:2,note:'Grotere heals'},
        {rank:5,stat:'Versatility',bars:2,note:'Extra healing + overleving'},
      ],
    },
    en:{
      tip:'Haste reduces Chain Heal cast time — more casts in busy moments. Mastery converts overhealing into an absorb shield on the target.',
      list:[
        {rank:1,stat:'Intellect',bars:5,note:'Primary stat'},
        {rank:2,stat:'Haste',bars:4,note:'Faster Chain Heal = more healing per second'},
        {rank:3,stat:'Mastery',bars:3,note:'Overhealing → absorb shield (Earthshield)'},
        {rank:4,stat:'Critical Strike',bars:2,note:'Bigger heals'},
        {rank:5,stat:'Versatility',bars:2,note:'Extra healing + survival'},
      ],
    }
  },
  cooldowns:{
    nl:[
      {spell:'Ascendance',cd:'3 min',effect:'Healing Wave wordt instant Chain Heal 15 sec',when:'Massale noodhealing — hele groep kritiek laag'},
      {spell:'Earthen Wall Totem',cd:'1 min',effect:'Absorb shield voor alle nabije groepsleden',when:'Voorspelbare grote groepsschade — altijd op CD'},
      {spell:'Mana Tide Totem',cd:'3 min',effect:'Herstelt mana van de hele groep',when:'Bij manaproblemen — vroeg gebruiken'},
      {spell:'Spiritwalker\'s Grace',cd:'2 min',effect:'Casten terwijl je beweegt 15 sec',when:'Proactief bij movement mechanics — niet wachten'},
      {spell:'Bloodlust/Heroism',cd:'5 min',effect:'+30% aanvals/cast speed voor groep',when:'Pull of boss execute — afstemmen met groep'},
    ],
    en:[
      {spell:'Ascendance',cd:'3 min',effect:'Healing Wave becomes instant Chain Heal 15 sec',when:'Massive emergency healing — whole group critically low'},
      {spell:'Earthen Wall Totem',cd:'1 min',effect:'Absorb shield for all nearby group members',when:'Predictable major group damage — always on CD'},
      {spell:'Mana Tide Totem',cd:'3 min',effect:'Restores mana of the whole group',when:'During mana issues — use early'},
      {spell:'Spiritwalker\'s Grace',cd:'2 min',effect:'Cast while moving for 15 sec',when:'Proactively on movement mechanics — don\'t wait'},
      {spell:'Bloodlust/Heroism',cd:'5 min',effect:'+30% attack/cast speed for group',when:'Pull or boss execute — coordinate with group'},
    ]
  },
  utility:{
    nl:[
      {spell:'Wind Rush Totem',type:'Snelheid',note:'+60% groepsspeed 5 sec — beste movement CD in game'},
      {spell:'Earthen Wall Totem',type:'Groeps-CD',note:'Absorb shield voor hele groep'},
      {spell:'Purify Spirit',type:'Dispel',note:'Verwijdert Magic en Curse debuffs'},
      {spell:'Capacitor Totem',type:'AoE Stun',note:'Stunt alle vijanden na 2 sec — krachtig in M+'},
      {spell:'Bloodlust/Heroism',type:'Haste',note:'Groep-wide haste boost — alleen Shaman heeft dit als healer'},
    ],
    en:[
      {spell:'Wind Rush Totem',type:'Speed',note:'+60% group speed 5 sec — best movement CD in game'},
      {spell:'Earthen Wall Totem',type:'Group CD',note:'Absorb shield for whole group'},
      {spell:'Purify Spirit',type:'Dispel',note:'Removes Magic and Curse debuffs'},
      {spell:'Capacitor Totem',type:'AoE Stun',note:'Stuns all enemies after 2 sec — powerful in M+'},
      {spell:'Bloodlust/Heroism',type:'Haste',note:'Group-wide haste boost — only Shaman has this as healer'},
    ]
  },
  tips:{
    nl:[
      {icon:'💧',title:'Chain Heal = target met Riptide',text:'Chain Heal doet 25% meer als het primaire target Riptide heeft. Dit is je kernregel: houd Riptide actief op de spelers die het meest schade krijgen, en cast Chain Heal altijd op hen.'},
      {icon:'🌊',title:'Spiritwalker\'s Grace vroeg activeren',text:'Bijna alle healer spells vereisen stilstaan. Spiritwalker\'s Grace geeft je 15 seconden casten tijdens movement. Activeer het VOOR je moet bewegen — niet nadat je al stilstaat en paniceert.'},
      {icon:'🏔️',title:'Earthen Wall 1 sec voor de klap',text:'Earthen Wall heeft een kleine activatievertraging. Plaats het 1-2 sec voor de grote AoE aankomt. Als je wacht tot de schade er al is, miss je de helft van de absorb.'},
      {icon:'💚',title:'Healing Wave na Tidal Waves proc',text:'Riptide geeft je een Tidal Waves proc — Healing Wave of Surge wordt dan 30% sneller. Gebruik Healing Wave (niet Surge) na proc voor mana-efficiënte snelle heals.'},
      {icon:'🩸',title:'Mana Tea vroeg gebruiken',text:'Mana Tea herstelt mana over 5 sec. Gebruik het bij ~80% mana, niet bij 20%. Vroeg en regelmatig gebruiken houdt je op een comfortabel mana niveau de hele fight.'},
    ],
    en:[
      {icon:'💧',title:'Chain Heal = target with Riptide',text:'Chain Heal does 25% more if the primary target has Riptide. This is your core rule: keep Riptide active on players taking the most damage, and always cast Chain Heal on them.'},
      {icon:'🌊',title:'Activate Spiritwalker\'s Grace early',text:'Almost all healer spells require standing still. Spiritwalker\'s Grace gives you 15 seconds of casting during movement. Activate it BEFORE you need to move — not after you\'re already standing still panicking.'},
      {icon:'🏔️',title:'Earthen Wall 1 sec before the hit',text:'Earthen Wall has a small activation delay. Place it 1-2 sec before the major AoE arrives. If you wait until damage is already incoming, you miss half the absorb.'},
      {icon:'💚',title:'Healing Wave after Tidal Waves proc',text:'Riptide gives you a Tidal Waves proc — Healing Wave or Surge becomes 30% faster. Use Healing Wave (not Surge) after proc for mana-efficient fast heals.'},
      {icon:'🩸',title:'Use Mana Tea early',text:'Mana Tea restores mana over 5 sec. Use it at ~80% mana, not at 20%. Using it early and regularly keeps you at a comfortable mana level throughout the fight.'},
    ]
  },
  macros:{
    nl:[
      {name:'Earthen Wall cursor',code:'/cast [@cursor] Earthen Wall Totem',note:'Plaatst totem direct op cursor — snel neerzetten voor AoE.'},
      {name:'Riptide mouseover',code:'/cast [@mouseover,help][] Riptide',note:'HoT op groepslid zonder target te wisselen.'},
      {name:'Spiritwalker\'s Grace',code:'/cast Spiritwalker\'s Grace',note:'Bij movement mechanics — proactief activeren.'},
    ],
    en:[
      {name:'Earthen Wall cursor',code:'/cast [@cursor] Earthen Wall Totem',note:'Places totem directly at cursor — quick placement before AoE.'},
      {name:'Riptide mouseover',code:'/cast [@mouseover,help][] Riptide',note:'HoT on group member without switching targets.'},
      {name:'Spiritwalker\'s Grace',code:'/cast Spiritwalker\'s Grace',note:'On movement mechanics — activate proactively.'},
    ]
  },
  resource_info:{
    nl:{
      intro:'Restoration Shaman gebruikt Mana. Mana management is cruciaal in langere fights. Gebruik Healing Wave als standaard filler — Healing Surge alleen bij echte nood want die kost 3x meer.',
      generate:['Passieve mana regeneratie','Mana Tide Totem (3 min) — herstelt mana van hele groep','Mana Tea — persoonlijke mana restore'],
      spend:['Healing Wave — goedkoop, altijd als filler','Healing Surge — duur, alleen nood','Chain Heal — matig mana, hoogste AoE throughput','Riptide — zeer goedkoop, altijd op CD'],
      pet_tip:'💡 Gebruik Healing Wave i.p.v. Healing Surge als je even tijd hebt. Healing Surge kost 3x zoveel mana voor ~30% meer healing — niet de moeite waard buiten noodgevallen!',
      pets:[],
    },
    en:{
      intro:'Restoration Shaman uses Mana. Mana management is crucial in longer fights. Use Healing Wave as standard filler — Healing Surge only in real emergencies as it costs 3x more.',
      generate:['Passive mana regeneration','Mana Tide Totem (3 min) — restores mana of whole group','Mana Tea — personal mana restore'],
      spend:['Healing Wave — cheap, always as filler','Healing Surge — expensive, emergencies only','Chain Heal — moderate mana, highest AoE throughput','Riptide — very cheap, always on CD'],
      pet_tip:'💡 Use Healing Wave instead of Healing Surge when you have time. Healing Surge costs 3x more mana for ~30% more healing — not worth it outside emergencies!',
      pets:[],
    }
  },
  consumables:{
    nl:[
      {type:'flask',name:'Flask of the Magisters',effect:'Verhoogt Intellect voor 1 uur.',note:'Altijd actief'},
      {type:'pot',name:'Potion of Recklessness',effect:'Intellect boost bij grote healing windows.',note:'Gebruik bij Ascendance'},
      {type:'food',name:'Silvermoon Parade (Feast)',effect:'+Intellect en Stamina via groepsfeast.',note:'Feast vragen'},
      {type:'food',name:'Royal Roast',effect:'Solo food backup.',note:'Backup'},
      {type:'rune',name:'Void-Touched Augment Rune',effect:'+Primaire stat 1 uur.',note:'Altijd gebruiken'},
    ],
    en:[
      {type:'flask',name:'Flask of the Magisters',effect:'Increases Intellect for 1 hour.',note:'Always active'},
      {type:'pot',name:'Potion of Recklessness',effect:'Intellect boost during major healing windows.',note:'Use with Ascendance'},
      {type:'food',name:'Silvermoon Parade (Feast)',effect:'+Intellect and Stamina via group feast.',note:'Ask for feast'},
      {type:'food',name:'Royal Roast',effect:'Solo food backup.',note:'Backup'},
      {type:'rune',name:'Void-Touched Augment Rune',effect:'+Primary stat 1 hour.',note:'Always use'},
    ]
  },
};
ALL_SPECS.push(SPEC_RESTORATION_SHAMAN);

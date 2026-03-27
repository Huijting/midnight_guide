if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_DISCIPLINE_PRIEST = {
  id:'discipline_priest', icon:'⚪', class:'Priest',
  spec:{nl:'Discipline',en:'Discipline'},
  role:'heal', armor:'Cloth',
  weapon:{nl:'Staff or one-hand + offhand',en:'Staff or one-hand + offhand'},
  resource:'Mana',
  patch:'1.0', color:'#FFFFFF',

  summary:{
    nl:'Discipline Priest healt door schade te doen via Atonement. Elke schade spell genereert heals op spelers met Atonement debuff. Uniek en complex healerssysteem.',
    en:'Discipline Priest heals by dealing damage via Atonement. Every damage spell generates heals on players with Atonement debuff. Unique and complex healer system.'
  },
  pros:{
    nl:['Uniek schade-heals systeem (Atonement)','Uitstekende preventieve healing','Power Word: Barrier is sterkste groeps-CD','Sterke shields via Power Word: Shield','Rapture: massale shield burst in nood'],
    en:['Unique damage-heals system (Atonement)','Excellent preventative healing','Power Word: Barrier is strongest group CD','Strong shields via Power Word: Shield','Rapture: massive shield burst in emergency']
  },
  cons:{
    nl:['Moeilijkste healer om te leren','Lage reactieve healing — slecht bij grote onverwachte damage','Atonement moet constant uitgedeeld worden','Zwak bij onverwachte healer checks'],
    en:['Hardest healer to learn','Low reactive healing — poor at large unexpected damage','Atonement must be constantly distributed','Weak at unexpected healer checks']
  },

  cheatsheet:{
    nl:{
      opener:'Rapture → Power Word: Shield spam op groep → Evangelism → Schade spells voor Atonement heals',
      single:'Atonement uitdelen → Schade spells (Penance, Mind Blast, Smite) → PW:S bij grote schade → Shadowmend nood',
      aoe:'Grote schade window: Rapture → PW:S op iedereen → Evangelism → Penance + Mindblast spam',
      rules:[
        'Atonement ALTIJD actief op alle groepsleden — anders geen heals van schade',
        'Penance is je sterkste schade/heal spell — altijd op CD',
        'Power Word: Shield gratis via Rapture talent — spam het in nood',
        'Shadowmend als reactieve noodheal — duur maar snel',
        'Nooit mana verspillen — Disc heeft geen mana recovery tools',
      ],
    },
    en:{
      opener:'Rapture → Power Word: Shield spam on group → Evangelism → Damage spells for Atonement heals',
      single:'Distribute Atonement → Damage spells (Penance, Mind Blast, Smite) → PW:S on big damage → Shadowmend emergency',
      aoe:'Big damage window: Rapture → PW:S on everyone → Evangelism → Penance + Mindblast spam',
      rules:[
        'Atonement ALWAYS active on all group members — otherwise no heals from damage',
        'Penance is your strongest damage/heal spell — always on CD',
        'Power Word: Shield free via Rapture talent — spam in emergency',
        'Shadowmend as reactive emergency heal — expensive but fast',
        'Never waste mana — Disc has no mana recovery tools',
      ],
    }
  },

  rotation:{
    nl:{
      apex_tip:'💡 Atonement is de kern van Disc. Zonder Atonement op je groepsleden doet schade spammen niets voor healing. Prioriteit altijd: Atonement uitdelen, dan schade doen!',
      opener:[
        {spell:'Power Word: Fortitude', why:'Buff op groep vóór de pull (1 uur cooldown)'},
        {spell:'Rapture',              why:'CD die PW:Shield gratis maakt — spam shields vóór schade'},
        {spell:'Power Word: Shield x5',why:'Atonement uitdelen op alle groepsleden tijdens Rapture'},
        {spell:'Evangelism',           why:'Verlengt alle actieve Atonements met 6 sec — perfecte CD combo'},
        {spell:'Penance',              why:'Sterkste schade + healt iedereen met Atonement'},
        {spell:'Mind Blast',           why:'Hoge schade = grote Atonement heals'},
      ],
      single:[
        {spell:'Power Word: Shield',   why:'Atonement toepassen + kleine absorb'},
        {spell:'Penance',              why:'Altijd op CD — schade OF direct healen als nood'},
        {spell:'Mind Blast',           why:'Op CD — hoge schade = veel Atonement heal'},
        {spell:'Smite',                why:'Filler — goedkoop, constante Atonement heal'},
        {spell:'Shadowmend',           why:'Noodheal — direct groot maar duur in mana'},
        {spell:'Power Word: Radiance', why:'Grote AoE Atonement applicator voor 5 targets'},
      ],
      aoe:[
        {spell:'Power Word: Radiance', why:'Geeft Atonement aan 5 targets tegelijk — essentieel bij AoE schade'},
        {spell:'Evangelism',           why:'Op CD na Radiance — verlengt alle Atonements'},
        {spell:'Penance',              why:'Schade op boss healt iedereen met Atonement'},
        {spell:'Halo',                 why:'Grote AoE heal + schade burst — gebruik bij grote schade'},
        {spell:'Divine Star',          why:'AoE heal alternatief — goedkoper dan Halo'},
      ],
    },
    en:{
      apex_tip:'💡 Atonement is the core of Disc. Without Atonement on your group members, spamming damage does nothing for healing. Priority always: distribute Atonement, then deal damage!',
      opener:[
        {spell:'Power Word: Fortitude', why:'Buff on group before pull (1 hour cooldown)'},
        {spell:'Rapture',              why:'CD that makes PW:Shield free — spam shields before damage'},
        {spell:'Power Word: Shield x5',why:'Distribute Atonement on all group members during Rapture'},
        {spell:'Evangelism',           why:'Extends all active Atonements by 6 sec — perfect CD combo'},
        {spell:'Penance',              why:'Strongest damage + heals everyone with Atonement'},
        {spell:'Mind Blast',           why:'High damage = large Atonement heals'},
      ],
      single:[
        {spell:'Power Word: Shield',   why:'Apply Atonement + small absorb'},
        {spell:'Penance',              why:'Always on CD — damage OR directly heal if emergency'},
        {spell:'Mind Blast',           why:'On CD — high damage = lots of Atonement healing'},
        {spell:'Smite',                why:'Filler — cheap, constant Atonement healing'},
        {spell:'Shadowmend',           why:'Emergency heal — immediately large but expensive in mana'},
        {spell:'Power Word: Radiance', why:'Large AoE Atonement applicator for 5 targets'},
      ],
      aoe:[
        {spell:'Power Word: Radiance', why:'Gives Atonement to 5 targets simultaneously — essential during AoE damage'},
        {spell:'Evangelism',           why:'On CD after Radiance — extends all Atonements'},
        {spell:'Penance',              why:'Damage on boss heals everyone with Atonement'},
        {spell:'Halo',                 why:'Large AoE heal + damage burst — use during big damage'},
        {spell:'Divine Star',          why:'AoE heal alternative — cheaper than Halo'},
      ],
    }
  },

  stats:{
    nl:{
      tip:'Intellect is altijd #1. Haste is extreem belangrijk voor Disc — meer casts = meer Atonement heals. Mastery versterkt Atonement heals direct.',
      list:[
        {rank:1,stat:'Intellect',      bars:5,note:'Primaire stat — altijd hoogste ilvl pakken'},
        {rank:2,stat:'Haste',          bars:5,note:'Snellere casts = meer Atonement heals per seconde'},
        {rank:3,stat:'Mastery',        bars:4,note:'Mastery: Graceful Mending — verhoogt Atonement healing'},
        {rank:4,stat:'Critical Strike',bars:2,note:'Minder waardevol dan Haste/Mastery'},
        {rank:5,stat:'Versatility',    bars:1,note:'Laagste prioriteit'},
      ],
    },
    en:{
      tip:'Intellect is always #1. Haste is extremely important for Disc — more casts = more Atonement heals. Mastery directly strengthens Atonement heals.',
      list:[
        {rank:1,stat:'Intellect',      bars:5,note:'Primary stat — always take highest ilvl'},
        {rank:2,stat:'Haste',          bars:5,note:'Faster casts = more Atonement heals per second'},
        {rank:3,stat:'Mastery',        bars:4,note:'Mastery: Graceful Mending — increases Atonement healing'},
        {rank:4,stat:'Critical Strike',bars:2,note:'Less valuable than Haste/Mastery'},
        {rank:5,stat:'Versatility',    bars:1,note:'Lowest priority'},
      ],
    }
  },

  cooldowns:{
    nl:[
      {spell:'Rapture',             cd:'1.5 min', effect:'PW:Shield gratis 8 sec — spam shields op hele groep',      when:'Vóór grote schade phase — altijd combineren met Evangelism'},
      {spell:'Evangelism',          cd:'1.5 min', effect:'Verlengt alle Atonements met 6 sec',                        when:'Direct na Rapture PW:Shield burst'},
      {spell:'Power Word: Barrier', cd:'3 min',   effect:'Grote koepel: 25% schade reductie + CC immuniteit',        when:'Grootste schade phase — sterkste groeps-CD in het spel'},
      {spell:'Fade',                cd:'30 sec',  effect:'Vermindert aggro + 20% damage reduction brief',            when:'Als je teveel aggro hebt of een mechanic ontwijkt'},
      {spell:'Pain Suppression',    cd:'3 min',   effect:'40% schade reductie op 1 target 8 sec',                   when:'Tank of speler in nood bij extreme burst'},
    ],
    en:[
      {spell:'Rapture',             cd:'1.5 min', effect:'PW:Shield free 8 sec — spam shields on entire group',     when:'Before major damage phase — always combine with Evangelism'},
      {spell:'Evangelism',          cd:'1.5 min', effect:'Extends all Atonements by 6 sec',                         when:'Directly after Rapture PW:Shield burst'},
      {spell:'Power Word: Barrier', cd:'3 min',   effect:'Large dome: 25% damage reduction + CC immunity',          when:'Biggest damage phase — strongest group CD in the game'},
      {spell:'Fade',                cd:'30 sec',  effect:'Reduces aggro + brief 20% damage reduction',              when:'When you have too much aggro or dodge a mechanic'},
      {spell:'Pain Suppression',    cd:'3 min',   effect:'40% damage reduction on 1 target 8 sec',                  when:'Tank or player in trouble during extreme burst'},
    ]
  },

  utility:{
    nl:[
      {spell:'Leap of Faith',       type:'Redding',     note:'Trek groepslid naar je toe — redt mensen uit mechanics'},
      {spell:'Dispel Magic',        type:'Dispel',      note:'Verwijdert 1 magic effect van vriend of vijand'},
      {spell:'Purify',              type:'Dispel',      note:'Verwijdert disease en magic van bondgenoot'},
      {spell:'Mass Dispel',         type:'Dispel',      note:'AoE dispel in gebied — ook invulnerability breaken'},
      {spell:'Shackle Undead',      type:'CC',          note:'Immobiliseert 1 undead target — M+ dungeon relevant'},
      {spell:'Psychic Scream',      type:'CC',          note:'Fear 5 vijanden 8 sec — breekt op schade'},
    ],
    en:[
      {spell:'Leap of Faith',       type:'Rescue',      note:'Pull group member to you — saves people from mechanics'},
      {spell:'Dispel Magic',        type:'Dispel',      note:'Removes 1 magic effect from friend or enemy'},
      {spell:'Purify',              type:'Dispel',      note:'Removes disease and magic from ally'},
      {spell:'Mass Dispel',         type:'Dispel',      note:'AoE dispel in area — also breaks invulnerability'},
      {spell:'Shackle Undead',      type:'CC',          note:'Immobilizes 1 undead target — M+ dungeon relevant'},
      {spell:'Psychic Scream',      type:'CC',          note:'Fear 5 enemies 8 sec — breaks on damage'},
    ]
  },

  tips:{
    nl:[
      {icon:'⚪',title:'Atonement begrijpen',      text:'Atonement is een buff die je op spelers plaatst via Power Word: Shield of Power Word: Radiance. Zolang ze Atonement hebben, healt jouw schade op de boss hen. Zonder Atonement = geen heals. Dit is het verschil met alle andere healers.'},
      {icon:'🔄',title:'Rapture + Evangelism combo', text:'Dit is je kerncombo bij grote schade: gebruik Rapture (PW:S gratis 8 sec) → shield de hele groep → direct Evangelism om alle Atonements te verlengen. Doe dit vóórdat de schade begint!'},
      {icon:'💡',title:'Penance = Swiss Army knife', text:'Penance kan zowel healen als schade doen. Als iemand heel laag staat: cast Penance direct op die speler voor instant heal. In rustigere fases: cast Penance op vijanden voor Atonement heals op iedereen.'},
      {icon:'🛡️',title:'Power Word: Barrier timing', text:'PW:B is de sterkste groeps-CD in het spel. Gebruik hem op de zwaarste schade phase van de boss — communiceer dit met de tank. Nooit verspillen aan trash.'},
      {icon:'💰',title:'Mana bewaken',               text:'Disc heeft geen Innervate of eigen mana recovery. Als je mana opraakt: je kunt niet meer healen. Goedkope spells (Smite, PW:S) altijd prefereren boven dure (Shadowmend, Radiance). Vraag Innervate aan Druid.'},
    ],
    en:[
      {icon:'⚪',title:'Understanding Atonement',   text:'Atonement is a buff you place on players via Power Word: Shield or Power Word: Radiance. As long as they have Atonement, your damage on the boss heals them. Without Atonement = no heals. This is the difference from all other healers.'},
      {icon:'🔄',title:'Rapture + Evangelism combo', text:'This is your core combo during big damage: use Rapture (PW:S free 8 sec) → shield the whole group → immediately Evangelism to extend all Atonements. Do this BEFORE the damage begins!'},
      {icon:'💡',title:'Penance = Swiss Army knife', text:'Penance can both heal and deal damage. If someone is very low: cast Penance directly on that player for instant heal. In calmer phases: cast Penance on enemies for Atonement heals on everyone.'},
      {icon:'🛡️',title:'Power Word: Barrier timing', text:'PW:B is the strongest group CD in the game. Use it on the heaviest damage phase of the boss — communicate this with the tank. Never waste on trash.'},
      {icon:'💰',title:'Watch your mana',            text:'Disc has no Innervate or own mana recovery. If you run out of mana: you can\'t heal anymore. Always prefer cheap spells (Smite, PW:S) over expensive ones (Shadowmend, Radiance). Ask Druid for Innervate.'},
    ]
  },

  macros:{
    nl:[
      {name:'Penance op focus/mouseover', code:'#showtooltip Penance\n/cast [@focus,help,nodead][@mouseover,help,nodead][@target] Penance', note:'Penance healen op focus of mouseover — zonder target te switchen.'},
      {name:'Pain Suppression (mouseover)', code:'#showtooltip Pain Suppression\n/cast [@mouseover,help,nodead][@target] Pain Suppression', note:'Nood-CD snel op iemand gooien zonder target te wisselen.'},
      {name:'Leap of Faith (mouseover)',  code:'#showtooltip Leap of Faith\n/cast [@mouseover,help,nodead][@target] Leap of Faith', note:'Trek iemand snel naar je toe uit een mechanic.'},
    ],
    en:[
      {name:'Penance on focus/mouseover', code:'#showtooltip Penance\n/cast [@focus,help,nodead][@mouseover,help,nodead][@target] Penance', note:'Heal with Penance on focus or mouseover — without switching target.'},
      {name:'Pain Suppression (mouseover)', code:'#showtooltip Pain Suppression\n/cast [@mouseover,help,nodead][@target] Pain Suppression', note:'Quickly throw emergency CD on someone without switching target.'},
      {name:'Leap of Faith (mouseover)',  code:'#showtooltip Leap of Faith\n/cast [@mouseover,help,nodead][@target] Leap of Faith', note:'Quickly pull someone to you out of a mechanic.'},
    ]
  },

  resource_info:{
    nl:{
      intro:'Discipline Priest gebruikt alleen Mana. Mana is je begrensde resource — als het op is, kun je niet meer healen. Disc heeft geen eigen mana recovery en moet zuinig zijn.',
      generate:[
        'Mana regenereert passief tijdens combat (langzaam)',
        'Shadowfiend (talent) — pet dat mana teruggeeft als het aanvalt',
        'Innervate van een Druid — vraag het altijd!',
        'Buiten combat gaat mana snel terug naar 100%',
      ],
      spend:[
        'Power Word: Shield — gemiddelde kosten, veel gebruikt',
        'Power Word: Radiance — duur, maar geeft 5 Atonements tegelijk',
        'Shadowmend — duur directe heal, gebruik spaarzaam',
        'Penance — redelijk goedkoop voor de kracht',
        'Smite — goedkoopste schade spell, Atonement filler',
      ],
      pet_tip:'💡 Bewaar mana voor grote schade windows. Nooit Shadowmend spammen als filler — dat is de snelste weg naar OOM (out of mana)!',
      pets:[],
    },
    en:{
      intro:'Discipline Priest uses only Mana. Mana is your limited resource — when it\'s gone, you can\'t heal anymore. Disc has no own mana recovery and must be conservative.',
      generate:[
        'Mana regenerates passively during combat (slowly)',
        'Shadowfiend (talent) — pet that returns mana when attacking',
        'Innervate from a Druid — always ask for it!',
        'Outside combat mana quickly returns to 100%',
      ],
      spend:[
        'Power Word: Shield — average cost, used frequently',
        'Power Word: Radiance — expensive, but gives 5 Atonements at once',
        'Shadowmend — expensive direct heal, use sparingly',
        'Penance — reasonably cheap for the power',
        'Smite — cheapest damage spell, Atonement filler',
      ],
      pet_tip:'💡 Save mana for big damage windows. Never spam Shadowmend as filler — that\'s the fastest way to OOM (out of mana)!',
      pets:[],
    }
  },

  consumables:{
    nl:[
      {type:'flask', name:'Flask of the Magisters',   effect:'Verhoogt Intellect significant voor 1 uur.',       note:'Altijd actief'},
      {type:'pot',   name:'Potion of Recklessness',          effect:'Grote Intellect boost 25 sec.',                    note:'Op pull of grote schade phase'},
      {type:'food',  name:'Silvermoon Parade (Feast)',     effect:'+Intellect en Stamina via groepsfeast.',           note:'Feast vragen'},
      {type:'food',  name:'Royal Roast',      effect:'Solo food — Intellect backup.',                   note:'Backup als geen feast'},
      {type:'rune',  name:'Void-Touched Augment Rune',      effect:'+Primaire stat 1 uur.',                            note:'Altijd gebruiken'},
    ],
    en:[
      {type:'flask', name:'Flask of the Magisters',   effect:'Significantly increases Intellect for 1 hour.',    note:'Always active'},
      {type:'pot',   name:'Potion of Recklessness',          effect:'Large Intellect boost 25 sec.',                   note:'On pull or big damage phase'},
      {type:'food',  name:'Silvermoon Parade (Feast)',     effect:'+Intellect and Stamina via group feast.',          note:'Ask for feast'},
      {type:'food',  name:'Royal Roast',      effect:'Solo food — Intellect backup.',                   note:'Backup if no feast'},
      {type:'rune',  name:'Void-Touched Augment Rune',      effect:'+Primary stat 1 hour.',                           note:'Always use'},
    ]
  },
};
ALL_SPECS.push(SPEC_DISCIPLINE_PRIEST);

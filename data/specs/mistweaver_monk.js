if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_MISTWEAVER_MONK = {
  id:'mistweaver_monk', icon:'🌿', class:'Monk',
  spec:{nl:'Mistweaver',en:'Mistweaver'},
  role:'heal', armor:'Leather',
  weapon:{nl:'Staff or one-hand + offhand',en:'Staff or one-hand + offhand'},
  resource:'Mana',
  patch:'1.0', color:'#00FF98',
  summary:{
    nl:'Mistweaver is een unieke healer die via melee aanvallen (Fistweaving) extra heals genereert. Vivify healt via Renewing Mist HoTs de hele groep tegelijk. Sterke raid cooldown met Revival.',
    en:'Mistweaver is a unique healer that generates extra heals via melee attacks (Fistweaving). Vivify heals the whole group simultaneously via Renewing Mist HoTs. Strong raid cooldown with Revival.'
  },
  pros:{
    nl:['Vivify healt automatisch iedereen met Renewing Mist','Revival = sterkste groep-CD in spel','Fistweaving stijl = healen EN damage','Uitstekende mobiliteit met Roll','Life Cocoon = sterke persoonlijke CD'],
    en:['Vivify automatically heals everyone with Renewing Mist','Revival = strongest group CD in game','Fistweaving style = healing AND damage','Excellent mobility with Roll','Life Cocoon = strong personal CD']
  },
  cons:{
    nl:['Renewing Mist vereist continu aandacht','Fistweaving vereist melee positie','Minder sterk in pure noodhealing vs Holy Paladin','Mana intensief bij grote schade'],
    en:['Renewing Mist requires continuous attention','Fistweaving requires melee position','Weaker in pure emergency healing vs Holy Paladin','Mana intensive during major damage']
  },
  cheatsheet:{
    nl:{
      opener:'Renewing Mist op alle spelers → Vivify op laagste HP → Rising Sun Kick in melee → Enveloping Mist bij nood',
      single:'Renewing Mist op CD → Vivify filler → Enveloping Mist bij laag HP → Rising Sun Kick voor Fistweaving',
      aoe:'Renewing Mist verspreiden → Vivify (healt iedereen met RM) → Essence Font bij hoge groepsschade → Revival als iedereen laag',
      rules:[
        'Renewing Mist altijd op CD — op 6 targets tegelijk houden',
        'Vivify op target met Renewing Mist = healt ook alle anderen',
        'Enveloping Mist alleen bij laag HP tank — mana kost',
        'Revival bewaren voor grote groepsnood',
        'Life Cocoon op tank bij grote spike schade',
      ],
    },
    en:{
      opener:'Renewing Mist on all players → Vivify on lowest HP → Rising Sun Kick in melee → Enveloping Mist in emergency',
      single:'Renewing Mist on CD → Vivify filler → Enveloping Mist at low HP → Rising Sun Kick for Fistweaving',
      aoe:'Spread Renewing Mist → Vivify (heals everyone with RM) → Essence Font on high group damage → Revival when everyone low',
      rules:[
        'Renewing Mist always on CD — keep on 6 targets simultaneously',
        'Vivify on target with Renewing Mist = also heals all others',
        'Enveloping Mist only at low HP tank — mana cost',
        'Save Revival for major group emergency',
        'Life Cocoon on tank at major spike damage',
      ],
    }
  },
  rotation:{
    nl:{
      apex_tip:'💡 Vivify healt IEDEREEN die Renewing Mist heeft, niet alleen het target. Houd Renewing Mist actief op zoveel mogelijk spelers — elke Vivify cast wordt dan een gratis AoE heal!',
      opener:[
        {spell:'Renewing Mist',why:'HoT op zoveel mogelijk spelers — springt automatisch'},
        {spell:'Vivify',why:'Healt alle targets met Renewing Mist tegelijk'},
        {spell:'Life Cocoon',why:'Pre-pull absorb op tank'},
        {spell:'Rising Sun Kick',why:'Fistweaving schade voor extra heals'},
        {spell:'Essence Font',why:'Bij AoE groepsschade opener'},
      ],
      single:[
        {spell:'Renewing Mist',why:'Altijd op CD — springt naar laagste HP'},
        {spell:'Vivify',why:'Filler — healt ook alle RM targets'},
        {spell:'Enveloping Mist',why:'Grote single target noodheal'},
        {spell:'Rising Sun Kick',why:'Fistweaving proc generatie'},
        {spell:'Life Cocoon',why:'Tank spike schade CD'},
      ],
      aoe:[
        {spell:'Renewing Mist',why:'Verspreiden over groep — springt automatisch'},
        {spell:'Essence Font',why:'Kanaal: healt 6 targets tegelijk snel'},
        {spell:'Vivify',why:'Healt alle RM targets tegelijk'},
        {spell:'Revival',why:'Groepsnood — instant full heal hele groep'},
        {spell:'Invoke Yu\'lon',why:'Summoned mist serpent extra heals'},
      ],
    },
    en:{
      apex_tip:'💡 Vivify heals EVERYONE who has Renewing Mist, not just the target. Keep Renewing Mist active on as many players as possible — every Vivify cast becomes a free AoE heal!',
      opener:[
        {spell:'Renewing Mist',why:'HoT on as many players as possible — jumps automatically'},
        {spell:'Vivify',why:'Heals all Renewing Mist targets simultaneously'},
        {spell:'Life Cocoon',why:'Pre-pull absorb on tank'},
        {spell:'Rising Sun Kick',why:'Fistweaving damage for extra heals'},
        {spell:'Essence Font',why:'On AoE group damage opener'},
      ],
      single:[
        {spell:'Renewing Mist',why:'Always on CD — jumps to lowest HP'},
        {spell:'Vivify',why:'Filler — also heals all RM targets'},
        {spell:'Enveloping Mist',why:'Large single target emergency heal'},
        {spell:'Rising Sun Kick',why:'Fistweaving proc generation'},
        {spell:'Life Cocoon',why:'Tank spike damage CD'},
      ],
      aoe:[
        {spell:'Renewing Mist',why:'Spread over group — jumps automatically'},
        {spell:'Essence Font',why:'Channel: heals 6 targets simultaneously quickly'},
        {spell:'Vivify',why:'Heals all RM targets simultaneously'},
        {spell:'Revival',why:'Group emergency — instant full heal entire group'},
        {spell:'Invoke Yu\'lon',why:'Summoned mist serpent extra heals'},
      ],
    }
  },
  stats:{
    nl:{
      tip:'Haste is king voor Mistweaver — kortere Renewing Mist CD en snellere Vivify casts. Mastery verhoogt alle direct heals.',
      list:[
        {rank:1,stat:'Intellect',bars:5,note:'Primaire stat'},
        {rank:2,stat:'Haste',bars:5,note:'Kortere RM CD + snellere Vivify'},
        {rank:3,stat:'Mastery',bars:3,note:'Verhoogt alle directe heals'},
        {rank:4,stat:'Versatility',bars:2,note:'Extra healing + overleving'},
        {rank:5,stat:'Critical Strike',bars:1,note:'Laagste prioriteit'},
      ],
    },
    en:{
      tip:'Haste is king for Mistweaver — shorter Renewing Mist CD and faster Vivify casts. Mastery increases all direct heals.',
      list:[
        {rank:1,stat:'Intellect',bars:5,note:'Primary stat'},
        {rank:2,stat:'Haste',bars:5,note:'Shorter RM CD + faster Vivify'},
        {rank:3,stat:'Mastery',bars:3,note:'Increases all direct heals'},
        {rank:4,stat:'Versatility',bars:2,note:'Extra healing + survival'},
        {rank:5,stat:'Critical Strike',bars:1,note:'Lowest priority'},
      ],
    }
  },
  cooldowns:{
    nl:[
      {spell:'Revival',cd:'3 min',effect:'Healt hele groep naar vol HP en verwijdert Magic/Curse',when:'Groepsnood — sterkste groep CD in spel'},
      {spell:'Life Cocoon',cd:'2 min',effect:'Groot absorb shield + HoT ontvangst +50%',when:'Tank grote spike of speler bijna dood'},
      {spell:'Invoke Yu\'lon',cd:'3 min',effect:'Mist serpent summon healt automatisch mee',when:'Grote healing windows — dungeons en boss'},
      {spell:'Invoke Chi-Ji',cd:'3 min',effect:'Rood Crane healt groep + vermindert Enveloping Mist cost',when:'Alternatief voor Yu\'lon in hoge movement fights'},
      {spell:'Thunder Focus Tea',cd:'30 sec',effect:'Versterkt volgende spell (Vivify, RM, etc.)',when:'Op CD — voor Vivify voor gratis AoE bounce'},
    ],
    en:[
      {spell:'Revival',cd:'3 min',effect:'Heals whole group to full HP and removes Magic/Curse',when:'Group emergency — strongest group CD in game'},
      {spell:'Life Cocoon',cd:'2 min',effect:'Large absorb shield + HoT intake +50%',when:'Tank major spike or player nearly dead'},
      {spell:'Invoke Yu\'lon',cd:'3 min',effect:'Mist serpent summon heals automatically',when:'Major healing windows — dungeons and boss'},
      {spell:'Invoke Chi-Ji',cd:'3 min',effect:'Red Crane heals group + reduces Enveloping Mist cost',when:'Alternative to Yu\'lon in high movement fights'},
      {spell:'Thunder Focus Tea',cd:'30 sec',effect:'Empowers next spell (Vivify, RM, etc.)',when:'On CD — before Vivify for free AoE bounce'},
    ]
  },
  utility:{
    nl:[
      {spell:'Revival',type:'Groeps-CD',note:'Healt + dispelt hele groep — sterkste in game'},
      {spell:'Paralysis',type:'CC',note:'Single target stun 1 min'},
      {spell:'Leg Sweep',type:'AoE Stun',note:'AoE stun 3 sec in bereik'},
      {spell:'Diffuse Magic',type:'Defensief',note:'Verwijdert Magic debuffs + 90% magic damage reductie'},
      {spell:'Transcendence',type:'Mobiliteit',note:'Spirit marker teleport — unieke positional tool'},
    ],
    en:[
      {spell:'Revival',type:'Group CD',note:'Heals + dispels whole group — strongest in game'},
      {spell:'Paralysis',type:'CC',note:'Single target stun 1 min'},
      {spell:'Leg Sweep',type:'AoE Stun',note:'AoE stun 3 sec in range'},
      {spell:'Diffuse Magic',type:'Defensive',note:'Removes Magic debuffs + 90% magic damage reduction'},
      {spell:'Transcendence',type:'Mobility',note:'Spirit marker teleport — unique positional tool'},
    ]
  },
  tips:{
    nl:[
      {icon:'🌿',title:'Vivify = gratis AoE via Renewing Mist',text:'Vivify healt niet alleen je target, maar ook iedereen die Renewing Mist heeft. Dat is de kern van Mistweaver. Houd RM actief op 5-6 spelers tegelijk — dan is elke Vivify een krachtige groepsheal.'},
      {icon:'🐲',title:'Revival bewaren',text:'Revival healt de hele groep naar vol HP EN verwijdert alle Magic en Curse debuffs. Dit is de sterkste groep-CD in het spel. Bewaar het voor echte nood — gebruik het niet voor kleine schade.'},
      {icon:'🥋',title:'Fistweaving in M+',text:'In M+ kun je Rising Sun Kick gebruiken in melee voor extra heals via procs. Dit geeft je gratis healing bovenop je normale casts. Ga naast de tank staan en kap mee.'},
      {icon:'🌀',title:'Essence Font bij groepsschade',text:'Essence Font is een kanaal dat 6 spelers snel healt. Gebruik het bij grote AoE groepsschade, niet als filler. Het is mana-intensief maar enorm krachtig op het juiste moment.'},
      {icon:'🫧',title:'Life Cocoon proactief',text:'Life Cocoon absorbeert schade EN verhoogt de HoT-ontvangst van het target met 50%. Gebruik het op de tank net voor een grote mechanic — niet erna. Het absorb is dan al actief als de hit aankomt.'},
    ],
    en:[
      {icon:'🌿',title:'Vivify = free AoE via Renewing Mist',text:'Vivify heals not only your target, but also everyone who has Renewing Mist. That\'s the core of Mistweaver. Keep RM active on 5-6 players simultaneously — then every Vivify becomes a powerful group heal.'},
      {icon:'🐲',title:'Save Revival',text:'Revival heals the whole group to full HP AND removes all Magic and Curse debuffs. This is the strongest group CD in the game. Save it for real emergencies — don\'t use it for minor damage.'},
      {icon:'🥋',title:'Fistweaving in M+',text:'In M+ you can use Rising Sun Kick in melee for extra heals via procs. This gives you free healing on top of your normal casts. Stand next to the tank and melee along.'},
      {icon:'🌀',title:'Essence Font on group damage',text:'Essence Font is a channel that quickly heals 6 players. Use it during large AoE group damage, not as filler. It\'s mana-intensive but enormously powerful at the right moment.'},
      {icon:'🫧',title:'Life Cocoon proactively',text:'Life Cocoon absorbs damage AND increases the target\'s HoT intake by 50%. Use it on the tank just before a major mechanic — not after. The absorb is already active when the hit arrives.'},
    ]
  },
  macros:{
    nl:[
      {name:'Vivify mouseover',code:'/cast [@mouseover,help][] Vivify',note:'Heal op groepslid zonder target te wisselen.'},
      {name:'Life Cocoon mouseover',code:'/cast [@mouseover,help][] Life Cocoon',note:'Snelle absorb op tank of partylid.'},
      {name:'Revival',code:'/cast Revival',note:'Groepsnood — bind aan duidelijke knop.'},
    ],
    en:[
      {name:'Vivify mouseover',code:'/cast [@mouseover,help][] Vivify',note:'Heal on group member without switching targets.'},
      {name:'Life Cocoon mouseover',code:'/cast [@mouseover,help][] Life Cocoon',note:'Quick absorb on tank or party member.'},
      {name:'Revival',code:'/cast Revival',note:'Group emergency — bind to clear button.'},
    ]
  },
  resource_info:{
    nl:{
      intro:'Mistweaver gebruikt Mana. Mana management is cruciaal — Vivify is efficiënt, Enveloping Mist is duur. Gebruik Enveloping Mist spaarzaam.',
      generate:['Passieve mana regeneratie','Thunder Focus Tea (gratis versterkte cast)'],
      spend:['Vivify — matig mana, hoogste throughput','Enveloping Mist — duur, grote single heal','Essence Font — duur kanaal bij AoE','Renewing Mist — goedkoop HoT'],
      pet_tip:'💡 Vivify is je mana-efficiëntste heal dankzij Renewing Mist bounces. Enveloping Mist alleen bij echte nood — het kost 3x zoveel!',
      pets:[],
    },
    en:{
      intro:'Mistweaver uses Mana. Mana management is crucial — Vivify is efficient, Enveloping Mist is expensive. Use Enveloping Mist sparingly.',
      generate:['Passive mana regeneration','Thunder Focus Tea (free empowered cast)'],
      spend:['Vivify — moderate mana, highest throughput','Enveloping Mist — expensive, large single heal','Essence Font — expensive channel on AoE','Renewing Mist — cheap HoT'],
      pet_tip:'💡 Vivify is your most mana-efficient heal thanks to Renewing Mist bounces. Enveloping Mist only in real emergencies — it costs 3x as much!',
      pets:[],
    }
  },
  consumables:{
    nl:[
      {type:'flask',name:'Flask of the Magisters',effect:'Verhoogt Intellect voor 1 uur.',note:'Altijd actief'},
      {type:'pot',name:'Potion of Recklessness',effect:'Intellect boost bij grote healing windows.',note:'Gebruik bij Revival of Yu\'lon'},
      {type:'food',name:'Silvermoon Parade (Feast)',effect:'+Intellect en Stamina via groepsfeast.',note:'Feast vragen'},
      {type:'food',name:'Royal Roast',effect:'Solo food backup.',note:'Backup'},
      {type:'rune',name:'Void-Touched Augment Rune',effect:'+Primaire stat 1 uur.',note:'Altijd'},
    ],
    en:[
      {type:'flask',name:'Flask of the Magisters',effect:'Increases Intellect for 1 hour.',note:'Always active'},
      {type:'pot',name:'Potion of Recklessness',effect:'Intellect boost during major healing windows.',note:'Use with Revival or Yu\'lon'},
      {type:'food',name:'Silvermoon Parade (Feast)',effect:'+Intellect and Stamina via group feast.',note:'Ask for feast'},
      {type:'food',name:'Royal Roast',effect:'Solo food backup.',note:'Backup'},
      {type:'rune',name:'Void-Touched Augment Rune',effect:'+Primary stat 1 hour.',note:'Always'},
    ]
  },
};
ALL_SPECS.push(SPEC_MISTWEAVER_MONK);

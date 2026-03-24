if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_FIRE_MAGE = {
  id:'fire_mage', icon:'🔥', class:'Mage',
  spec:{nl:'Fire',en:'Fire'},
  role:'dps', armor:'Cloth',
  weapon:{nl:'Staf of eenhandig + offhand',en:'Staff or one-hand + offhand'},
  resource:'Mana',
  patch:'1.0', color:'#FF7C0A',
  summary:{
    nl:'Fire Mage leeft voor Hot Streak procs. Twee crits op rij = gratis instant Pyroblast. Hoge crit-afhankelijkheid maar enorme burst wanneer het klikt.',
    en:'Fire Mage lives for Hot Streak procs. Two crits in a row = free instant Pyroblast. High crit dependency but massive burst when it clicks.'
  },
  pros:{
    nl:['Enorme burst via Hot Streak procs','Uitstekende AoE via Flamestrike','Bevredigend om te spelen — proc-gebaseerd','Sterk in execute fase via Searing Touch'],
    en:['Massive burst via Hot Streak procs','Excellent AoE via Flamestrike','Satisfying to play — proc-based','Strong in execute phase via Searing Touch']
  },
  cons:{
    nl:['RNG-afhankelijk — slechte procs = lage schade','Hoge crit vereiste voor optimale prestatie','Kwetsbaar bij movement — veel cast-spells','Inconsistente schade vergeleken met Arcane'],
    en:['RNG-dependent — bad procs = low damage','High crit requirement for optimal performance','Vulnerable during movement — many cast spells','Inconsistent damage compared to Arcane']
  },
  cheatsheet:{
    nl:{
      opener:'Fireball → Combustion → Fire Blast x2 → Phoenix Flames → Pyroblast (Hot Streak) → Flamestrike (AoE)',
      single:'Fireball → Fire Blast bij Heating Up proc → Pyroblast bij Hot Streak → Combustion op CD',
      aoe:'Flamestrike (Hot Streak) → Fire Blast spreaden → Living Bomb op meerdere targets',
      rules:[
        'Heating Up = 1 crit — gebruik Fire Blast om Hot Streak te maken',
        'Hot Streak = instant Pyroblast — nooit laten verlopen!',
        'Fire Blast altijd bewaren voor Heating Up → Hot Streak conversie',
        'Combustion op CD — gebruik ALLE charges Fire Blast erbinnen',
        'AoE: Flamestrike vervangt Pyroblast als 3+ targets',
      ],
    },
    en:{
      opener:'Fireball → Combustion → Fire Blast x2 → Phoenix Flames → Pyroblast (Hot Streak) → Flamestrike (AoE)',
      single:'Fireball → Fire Blast on Heating Up proc → Pyroblast on Hot Streak → Combustion on CD',
      aoe:'Flamestrike (Hot Streak) → spread Fire Blast → Living Bomb on multiple targets',
      rules:[
        'Heating Up = 1 crit — use Fire Blast to convert to Hot Streak',
        'Hot Streak = instant Pyroblast — never let it expire!',
        'Always save Fire Blast for Heating Up → Hot Streak conversion',
        'Combustion on CD — use ALL Fire Blast charges inside it',
        'AoE: Flamestrike replaces Pyroblast at 3+ targets',
      ],
    }
  },
  rotation:{
    nl:{
      apex_tip:'💡 Combustion zorgt dat alle spells criten — gebruik direct al je Fire Blast charges erin voor een keten van instant Pyroblasts. Dit is je grootste schade window!',
      opener:[
        {spell:'Fireball',              why:'Opwarmen — kans op Heating Up proc'},
        {spell:'Combustion',            why:'Grote burst CD — alle spells criten tijdelijk'},
        {spell:'Fire Blast x3',         why:'Alle charges erin tijdens Combustion — chain Hot Streaks'},
        {spell:'Phoenix Flames',        why:'Extra crit garantie tijdens Combustion'},
        {spell:'Pyroblast (Hot Streak)',why:'Instant Pyroblast bij elke Hot Streak proc'},
        {spell:'Flamestrike',           why:'AoE burst als er 3+ targets zijn'},
      ],
      single:[
        {spell:'Fireball',              why:'Hoofd aanval — kans op Heating Up proc'},
        {spell:'Fire Blast',            why:'Alleen gebruiken bij Heating Up proc — maakt Hot Streak'},
        {spell:'Pyroblast (Hot Streak)',why:'Altijd direct gebruiken bij Hot Streak proc'},
        {spell:'Phoenix Flames',        why:'Op CD — extra kans op proc, goed voor filler'},
        {spell:'Combustion',            why:'Op CD — verander tijdelijk in crit machine'},
        {spell:'Scorch (<30% HP)',      why:'Searing Touch: instant Scorch = automatisch crit in execute'},
      ],
      aoe:[
        {spell:'Flamestrike (Hot Streak)',why:'AoE versie van Pyroblast — bij 3+ targets altijd prefereren'},
        {spell:'Fire Blast',            why:'Gebruikt om Hot Streak te triggeren voor Flamestrike'},
        {spell:'Living Bomb',           why:'AoE DoT op meerdere targets — goede passive schade'},
        {spell:'Dragon\'s Breath',      why:'AoE burst + disorient rondom je — ook in AoE sterk'},
        {spell:'Combustion',            why:'In AoE: enorme Flamestrike spam window'},
      ],
    },
    en:{
      apex_tip:'💡 Combustion makes all spells crit — immediately use all your Fire Blast charges in it for a chain of instant Pyroblasts. This is your biggest damage window!',
      opener:[
        {spell:'Fireball',              why:'Warm up — chance for Heating Up proc'},
        {spell:'Combustion',            why:'Major burst CD — all spells crit temporarily'},
        {spell:'Fire Blast x3',         why:'All charges inside Combustion — chain Hot Streaks'},
        {spell:'Phoenix Flames',        why:'Extra crit guarantee during Combustion'},
        {spell:'Pyroblast (Hot Streak)',why:'Instant Pyroblast on every Hot Streak proc'},
        {spell:'Flamestrike',           why:'AoE burst if 3+ targets present'},
      ],
      single:[
        {spell:'Fireball',              why:'Main attack — chance for Heating Up proc'},
        {spell:'Fire Blast',            why:'Only use on Heating Up proc — creates Hot Streak'},
        {spell:'Pyroblast (Hot Streak)',why:'Always use immediately on Hot Streak proc'},
        {spell:'Phoenix Flames',        why:'On CD — extra chance for proc, good filler'},
        {spell:'Combustion',            why:'On CD — temporarily become a crit machine'},
        {spell:'Scorch (<30% HP)',      why:'Searing Touch: instant Scorch = automatic crit in execute'},
      ],
      aoe:[
        {spell:'Flamestrike (Hot Streak)',why:'AoE version of Pyroblast — always prefer at 3+ targets'},
        {spell:'Fire Blast',            why:'Used to trigger Hot Streak for Flamestrike'},
        {spell:'Living Bomb',           why:'AoE DoT on multiple targets — good passive damage'},
        {spell:'Dragon\'s Breath',      why:'AoE burst + disorient around you — strong in AoE too'},
        {spell:'Combustion',            why:'In AoE: massive Flamestrike spam window'},
      ],
    }
  },
  stats:{
    nl:{
      tip:'Intellect is altijd #1. Critical Strike is extreem waardevol voor Fire — meer crits = meer Hot Streak procs. Mastery verhoogt de schade van al je fire spells.',
      list:[
        {rank:1,stat:'Intellect',      bars:5,note:'Primaire stat — altijd hoogste ilvl pakken'},
        {rank:2,stat:'Critical Strike',bars:5,note:'Meer crits = meer Hot Streak procs = meer schade'},
        {rank:3,stat:'Mastery',        bars:4,note:'Mastery: Ignite — verhoogt brandschade op alle targets'},
        {rank:4,stat:'Haste',          bars:2,note:'Snellere casts maar minder nodig dan Crit/Mastery'},
        {rank:5,stat:'Versatility',    bars:1,note:'Laagste prioriteit'},
      ],
    },
    en:{
      tip:'Intellect is always #1. Critical Strike is extremely valuable for Fire — more crits = more Hot Streak procs. Mastery increases damage of all your fire spells.',
      list:[
        {rank:1,stat:'Intellect',      bars:5,note:'Primary stat — always take highest ilvl'},
        {rank:2,stat:'Critical Strike',bars:5,note:'More crits = more Hot Streak procs = more damage'},
        {rank:3,stat:'Mastery',        bars:4,note:'Mastery: Ignite — increases fire damage on all targets'},
        {rank:4,stat:'Haste',          bars:2,note:'Faster casts but less needed than Crit/Mastery'},
        {rank:5,stat:'Versatility',    bars:1,note:'Lowest priority'},
      ],
    }
  },
  cooldowns:{
    nl:[
      {spell:'Combustion',        cd:'2 min',   effect:'Alle spells criten tijdelijk — enorme burst window',    when:'Op pull + gebruik alle Fire Blast charges erbinnen'},
      {spell:'Fire Blast',        cd:'12 sec',  effect:'Instant cast, altijd crit — converteert Heating Up naar Hot Streak', when:'ALLEEN bij Heating Up proc — nooit als filler'},
      {spell:'Phoenix Flames',    cd:'30 sec',  effect:'Altijd crit — extra Hot Streak conversie tool',         when:'Op CD of specifiek in Combustion window'},
      {spell:'Dragon\'s Breath',  cd:'20 sec',  effect:'AoE burst + disorient rondom je',                      when:'AoE packs of als interrupt ontwijking nodig is'},
      {spell:'Time Warp',         cd:'5 min',   effect:'Groeps-haste +30% voor 40 sec',                        when:'Op aanwijzing van tank/raidleider'},
    ],
    en:[
      {spell:'Combustion',        cd:'2 min',   effect:'All spells crit temporarily — massive burst window',    when:'On pull + use all Fire Blast charges inside it'},
      {spell:'Fire Blast',        cd:'12 sec',  effect:'Instant cast, always crits — converts Heating Up to Hot Streak', when:'ONLY on Heating Up proc — never as filler'},
      {spell:'Phoenix Flames',    cd:'30 sec',  effect:'Always crits — extra Hot Streak conversion tool',       when:'On CD or specifically inside Combustion window'},
      {spell:'Dragon\'s Breath',  cd:'20 sec',  effect:'AoE burst + disorient around you',                    when:'AoE packs or when interrupt evasion needed'},
      {spell:'Time Warp',         cd:'5 min',   effect:'Group haste +30% for 40 sec',                         when:'On instruction from tank/raid leader'},
    ]
  },
  utility:{
    nl:[
      {spell:'Counterspell',      type:'Interrupt', note:'Interrupt op 24 sec CD — schoollock 8 sec'},
      {spell:'Time Warp',         type:'Bloodlust', note:'Groeps-haste 30% — afstemmen met groep'},
      {spell:'Dragon\'s Breath',  type:'CC',        note:'AoE disorient rondom je — breekt bij schade'},
      {spell:'Frost Nova',        type:'CC',        note:'Bevriest targets rondom je — ontsnappen of kiting'},
      {spell:'Blink',             type:'Mobiliteit',note:'Teleport 20 yards vooruit — mechanics ontwijken'},
      {spell:'Invisibility',      type:'Defensief', note:'Verlaat combat — aggro dump of noodsituatie'},
    ],
    en:[
      {spell:'Counterspell',      type:'Interrupt', note:'Interrupt on 24 sec CD — school lock 8 sec'},
      {spell:'Time Warp',         type:'Bloodlust', note:'Group haste 30% — coordinate with group'},
      {spell:'Dragon\'s Breath',  type:'CC',        note:'AoE disorient around you — breaks on damage'},
      {spell:'Frost Nova',        type:'CC',        note:'Freezes targets around you — escape or kiting'},
      {spell:'Blink',             type:'Mobility',  note:'Teleport 20 yards forward — dodge mechanics'},
      {spell:'Invisibility',      type:'Defensive', note:'Leave combat — aggro dump or emergency'},
    ]
  },
  tips:{
    nl:[
      {icon:'🔥',title:'Hot Streak begrijpen',       text:'Heating Up = je eerste crit (oranje vuur icoon). Gebruik dan Fire Blast of Phoenix Flames voor een gegarandeerde tweede crit = Hot Streak. Hot Streak = gratis instant Pyroblast. Nooit laten expiren!'},
      {icon:'💥',title:'Combustion optimaliseren',   text:'Combustion laat alles criten — dit is je burst window. Gebruik ALL Fire Blast charges erbinnen (3 charges). Combineer met Time Warp op pull voor de grootste burst. Buiten Combustion: bewaar Fire Blast altijd voor Heating Up.'},
      {icon:'🌊',title:'AoE: Flamestrike prioriteit',text:'Bij 3+ targets vervangt Flamestrike je Pyroblast volledig. Flamestrike doet de Hot Streak verbruiken net als Pyroblast. Combineer met Living Bomb voor meer AoE schade.'},
      {icon:'🎯',title:'Execute fase met Searing Touch', text:'Onder 30% HP: Scorch wordt instant én crits automatisch via Searing Touch. Dit geeft je gratis Heating Up procs. Perfect voor execute — spaam Scorch en gebruik de Hot Streaks.'},
      {icon:'❄️',title:'Frost Nova + Blink combo',   text:'Frost Nova bevriest vijanden, Blink wegspringen. Uitstekend als je te dichtbij vijanden staat of een mechanic moet ontwijken terwijl je blijft casten.'},
    ],
    en:[
      {icon:'🔥',title:'Understanding Hot Streak',   text:'Heating Up = your first crit (orange fire icon). Then use Fire Blast or Phoenix Flames for a guaranteed second crit = Hot Streak. Hot Streak = free instant Pyroblast. Never let it expire!'},
      {icon:'💥',title:'Optimizing Combustion',      text:'Combustion makes everything crit — this is your burst window. Use ALL Fire Blast charges inside it (3 charges). Combine with Time Warp on pull for the biggest burst. Outside Combustion: always save Fire Blast for Heating Up.'},
      {icon:'🌊',title:'AoE: Flamestrike priority',  text:'At 3+ targets Flamestrike completely replaces Pyroblast. Flamestrike consumes Hot Streak just like Pyroblast. Combine with Living Bomb for more AoE damage.'},
      {icon:'🎯',title:'Execute phase with Searing Touch', text:'Below 30% HP: Scorch becomes instant AND automatically crits via Searing Touch. This gives free Heating Up procs. Perfect for execute — spam Scorch and use the Hot Streaks.'},
      {icon:'❄️',title:'Frost Nova + Blink combo',   text:'Frost Nova freezes enemies, Blink away. Excellent when you\'re too close to enemies or need to dodge a mechanic while continuing to cast.'},
    ]
  },
  macros:{
    nl:[
      {name:'Counterspell (Focus Kick)', code:'#showtooltip Counterspell\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Counterspell', note:'Kick op focus > mouseover > target. Essentieel in M+!'},
      {name:'Combustion macro',          code:'#showtooltip Combustion\n/cast Combustion\n/use 13', note:'Combustion + trinket tegelijk — maximale burst window.'},
      {name:'Frost Nova + Blink escape', code:'/cast Frost Nova\n/cast Blink', note:'Bevriest en ontsnapt in één knop — snelle escape combo.'},
    ],
    en:[
      {name:'Counterspell (Focus Kick)', code:'#showtooltip Counterspell\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Counterspell', note:'Kick on focus > mouseover > target. Essential in M+!'},
      {name:'Combustion macro',          code:'#showtooltip Combustion\n/cast Combustion\n/use 13', note:'Combustion + trinket simultaneously — maximum burst window.'},
      {name:'Frost Nova + Blink escape', code:'/cast Frost Nova\n/cast Blink', note:'Freeze and escape in one button — quick escape combo.'},
    ]
  },
  resource_info:{
    nl:{
      intro:'Fire Mage gebruikt Mana. Mana management is voor Fire minder kritisch dan voor Arcane, maar je kunt nog steeds OOM gaan bij langdurige fights. Het echte resource systeem is Hot Streak procs.',
      generate:[
        'Mana regenereert passief tijdens combat',
        'Mana Gem (talent) — extra mana recovery',
        'Buiten combat: mana gaat snel terug naar 100%',
      ],
      spend:[
        'Pyroblast — hoofd schade spell, gemiddelde kosten',
        'Flamestrike — AoE versie, vergelijkbare kosten',
        'Scorch — zeer goedkoop, altijd bruikbaar in beweging',
        'Combustion — geen mana kosten, tijdsbegrensde CD',
      ],
      pet_tip:'💡 Hot Streak procs zijn GRATIS — ze kosten geen mana. Gebruik ze altijd direct. Fireball is je goedkope filler. Pyroblast zonder Hot Streak kost veel mana en is bijna nooit de moeite waard.',
      pets:[],
    },
    en:{
      intro:'Fire Mage uses Mana. Mana management is less critical for Fire than for Arcane, but you can still go OOM in prolonged fights. The real resource system is Hot Streak procs.',
      generate:[
        'Mana regenerates passively during combat',
        'Mana Gem (talent) — extra mana recovery',
        'Outside combat: mana quickly returns to 100%',
      ],
      spend:[
        'Pyroblast — main damage spell, average cost',
        'Flamestrike — AoE version, similar cost',
        'Scorch — very cheap, always usable while moving',
        'Combustion — no mana cost, time-limited CD',
      ],
      pet_tip:'💡 Hot Streak procs are FREE — they cost no mana. Always use them immediately. Fireball is your cheap filler. Pyroblast without Hot Streak costs lots of mana and is almost never worth it.',
      pets:[],
    }
  },
  consumables:{
    nl:[
      {type:'flask', name:'Flask of the Magisters',  effect:'Verhoogt Intellect significant voor 1 uur.',   note:'Altijd actief'},
      {type:'pot',   name:'Potion of Recklessness',         effect:'Grote Intellect boost 25 sec.',               note:'Op pull of Combustion window'},
      {type:'food',  name:'Silvermoon Parade (Feast)',    effect:'+Intellect en Stamina via groepsfeast.',      note:'Feast vragen'},
      {type:'food',  name:'Royal Roast',     effect:'Solo food — Intellect backup.',              note:'Backup als geen feast'},
      {type:'rune',  name:'Void-Touched Augment Rune',     effect:'+Primaire stat 1 uur.',                       note:'Altijd gebruiken'},
    ],
    en:[
      {type:'flask', name:'Flask of the Magisters',  effect:'Significantly increases Intellect for 1 hour.', note:'Always active'},
      {type:'pot',   name:'Potion of Recklessness',         effect:'Large Intellect boost 25 sec.',               note:'On pull or Combustion window'},
      {type:'food',  name:'Silvermoon Parade (Feast)',    effect:'+Intellect and Stamina via group feast.',     note:'Ask for feast'},
      {type:'food',  name:'Royal Roast',     effect:'Solo food — Intellect backup.',              note:'Backup if no feast'},
      {type:'rune',  name:'Void-Touched Augment Rune',     effect:'+Primary stat 1 hour.',                      note:'Always use'},
    ]
  },
};
ALL_SPECS.push(SPEC_FIRE_MAGE);

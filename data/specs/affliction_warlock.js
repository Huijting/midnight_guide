if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_AFFLICTION_WARLOCK = {
  id: 'affliction_warlock',
  icon: '🟣',
  class: 'Warlock',
  spec:   { nl: 'Affliction', en: 'Affliction', da: 'Affliction' },
  role:   'dps',
  armor:  'Cloth',
  weapon: { nl: 'Staf of eenhandig + offhand', en: 'Staff or one-hand + offhand', da: 'Stav eller enhånds + offhand' },
  resource: 'Soul Shards',
  patch: '1.0',
  color: '#8788EE',

  summary: {
    nl: 'Affliction Warlock is de ultieme DoT-meester. Laad vijanden vol met vloeken en ziekte-spells en laat ze langzaam sterven terwijl jij geneest van hun pijn via Drain Life.',
    en: 'Affliction Warlock is the ultimate DoT master. Load enemies with curses and disease spells and let them slowly die while you heal from their pain via Drain Life.',
    da: 'Affliction Warlock er den ultimative DoT-mester. Læs fjender med forbandelser og sygdoms-trylleformularer og lad dem langsomt dø, mens du healer fra deres smerte via Drain Life.',
  },
  pros: {
    nl: ['Beste multi-target sustained schade in het spel', 'Uitstekende zelfheling via Drain Life', 'Sterk in lange fights — DoTs schalen met fight duur', 'Goede utility (Curse of Exhaustion, Banish)'],
    en: ['Best multi-target sustained damage in the game', 'Excellent self-healing via Drain Life', 'Strong in long fights — DoTs scale with fight duration', 'Good utility (Curse of Exhaustion, Banish)'],
    da: ['Bedste multi-target vedvarende skade i spillet', 'Fremragende selvheling via Drain Life', 'Stærk i lange kampe — DoTs skalerer med kampvarighed', 'God utility (Curse of Exhaustion, Banish)'],
  },
  cons: {
    nl: ['Lage burst — DoTs hebben tijd nodig om schade te doen', 'Slecht op targets die snel sterven', 'Kwetsbaar bij zware movement fights'],
    en: ['Low burst — DoTs need time to deal damage', 'Poor on targets that die quickly', 'Vulnerable in heavy movement fights'],
    da: ['Lav burst — DoTs har brug for tid til at gøre skade', 'Dårlig på mål der dør hurtigt', 'Sårbar i kampe med meget bevægelse'],
  },

  cheatsheet: {
    nl: {
      opener: 'Agony → Corruption → Unstable Affliction → Haunt → Malefic Rapture (Soul Shard dump)',
      single: '3 DoTs actief houden → Haunt op CD → Malefic Rapture bij 3+ Shards → Drain Soul filler',
      aoe:    'Agony + Corruption op alle targets → Seed of Corruption → Malefic Rapture (raakt alles via DoTs)',
      rules: [
        'Agony, Corruption en Unstable Affliction altijd actief',
        'Haunt altijd op cooldown — verhoogt al je DoT schade',
        'Malefic Rapture bij 3+ Soul Shards — grote burst',
        'Drain Soul als execute (<20% HP) in plaats van Drain Life',
        'Seed of Corruption op 3+ targets — AoE DoT explosie',
      ],
    },
    en: {
      opener: 'Agony → Corruption → Unstable Affliction → Haunt → Malefic Rapture (Soul Shard dump)',
      single: 'Keep 3 DoTs active → Haunt on CD → Malefic Rapture at 3+ Shards → Drain Soul filler',
      aoe:    'Agony + Corruption on all targets → Seed of Corruption → Malefic Rapture (hits all via DoTs)',
      rules: [
        'Agony, Corruption and Unstable Affliction always active',
        'Haunt always on cooldown — increases all your DoT damage',
        'Malefic Rapture at 3+ Soul Shards — big burst',
        'Drain Soul as execute (<20% HP) instead of Drain Life',
        'Seed of Corruption on 3+ targets — AoE DoT explosion',
      ],
    },
    da: {
      opener: 'Agony → Corruption → Unstable Affliction → Haunt → Malefic Rapture (Soul Shard dump)',
      single: 'Hold 3 DoTs aktive → Haunt på CD → Malefic Rapture ved 3+ Shards → Drain Soul fylder',
      aoe:    'Agony + Corruption på alle mål → Seed of Corruption → Malefic Rapture (rammer alt via DoTs)',
      rules: [
        'Agony, Corruption og Unstable Affliction altid aktive',
        'Haunt altid på cooldown — øger al din DoT-skade',
        'Malefic Rapture ved 3+ Soul Shards — stor burst',
        'Drain Soul som execute (<20% HP) i stedet for Drain Life',
        'Seed of Corruption på 3+ mål — AoE DoT-eksplosion',
      ],
    },
  },

  rotation: {
    nl: {
      apex_tip: '💡 Meer DoTs op meer targets = meer Soul Shards = meer Malefic Rapture. Affliction wordt sterker naarmate er meer mobs zijn!',
      opener: [
        { spell: 'Agony', why: 'DoT #1 — bouwt stacks op tot 10, altijd eerst' },
        { spell: 'Corruption', why: 'DoT #2 — instant cast' },
        { spell: 'Unstable Affliction', why: 'DoT #3 — genereert Soul Shards' },
        { spell: 'Haunt', why: 'Verhoogt alle DoT schade met 30%' },
        { spell: 'Malefic Rapture', why: 'Soul Shard dump — raakt alle DoT targets' },
      ],
      single: [
        { spell: 'Agony refresh', why: '<5 sec resterend — nooit laten verlopen' },
        { spell: 'Unstable Affliction', why: 'Hernieuwen — genereert Soul Shards' },
        { spell: 'Haunt', why: 'Altijd op CD — +30% DoT schade' },
        { spell: 'Malefic Rapture', why: '3+ Shards — grootste directe schade knop' },
        { spell: 'Drain Life/Soul', why: 'Filler — Drain Soul bij <20% HP' },
      ],
      aoe: [
        { spell: 'Agony op alle targets', why: 'Stack-opbouw op elk target' },
        { spell: 'Corruption op alle targets', why: 'Snelle DoT verspreiding' },
        { spell: 'Seed of Corruption', why: 'Explodeert als DoT afgaat — massale AoE' },
        { spell: 'Malefic Rapture', why: 'Raakt alle targets met actieve DoTs tegelijk' },
      ],
    },
    en: {
      apex_tip: '💡 More DoTs on more targets = more Soul Shards = more Malefic Rapture. Affliction gets stronger with more mobs!',
      opener: [
        { spell: 'Agony', why: 'DoT #1 — builds stacks up to 10, always first' },
        { spell: 'Corruption', why: 'DoT #2 — instant cast' },
        { spell: 'Unstable Affliction', why: 'DoT #3 — generates Soul Shards' },
        { spell: 'Haunt', why: 'Increases all DoT damage by 30%' },
        { spell: 'Malefic Rapture', why: 'Soul Shard dump — hits all DoT targets' },
      ],
      single: [
        { spell: 'Agony refresh', why: '<5 sec remaining — never let fall off' },
        { spell: 'Unstable Affliction', why: 'Refresh — generates Soul Shards' },
        { spell: 'Haunt', why: 'Always on CD — +30% DoT damage' },
        { spell: 'Malefic Rapture', why: '3+ Shards — biggest direct damage button' },
        { spell: 'Drain Life/Soul', why: 'Filler — Drain Soul at <20% HP' },
      ],
      aoe: [
        { spell: 'Agony on all targets', why: 'Stack buildup on each target' },
        { spell: 'Corruption on all targets', why: 'Fast DoT spreading' },
        { spell: 'Seed of Corruption', why: 'Explodes when DoT fires — massive AoE' },
        { spell: 'Malefic Rapture', why: 'Hits all targets with active DoTs simultaneously' },
      ],
    },
    da: {
      apex_tip: '💡 Flere DoTs på flere mål = flere Soul Shards = mere Malefic Rapture. Affliction bliver stærkere med flere fjender!',
      opener: [
        { spell: 'Agony', why: 'DoT #1 — opbygger stacks op til 10, altid først' },
        { spell: 'Corruption', why: 'DoT #2 — instant cast' },
        { spell: 'Unstable Affliction', why: 'DoT #3 — genererer Soul Shards' },
        { spell: 'Haunt', why: 'Øger al DoT-skade med 30%' },
        { spell: 'Malefic Rapture', why: 'Soul Shard dump — rammer alle DoT-mål' },
      ],
      single: [
        { spell: 'Agony-fornyelse', why: '<5 sek tilbage — lad aldrig falde af' },
        { spell: 'Unstable Affliction', why: 'Forny — genererer Soul Shards' },
        { spell: 'Haunt', why: 'Altid på CD — +30% DoT-skade' },
        { spell: 'Malefic Rapture', why: '3+ Shards — største direkte skadeknap' },
        { spell: 'Drain Life/Soul', why: 'Fylder — Drain Soul ved <20% HP' },
      ],
      aoe: [
        { spell: 'Agony på alle mål', why: 'Stack-opbygning på hvert mål' },
        { spell: 'Corruption på alle mål', why: 'Hurtig DoT-spredning' },
        { spell: 'Seed of Corruption', why: 'Eksploderer når DoT afgår — massiv AoE' },
        { spell: 'Malefic Rapture', why: 'Rammer alle mål med aktive DoTs på én gang' },
      ],
    },
  },

  stats: {
    nl: {
      tip: 'Haste is de beste secondary stat — DoTs tikken sneller = meer Soul Shards = meer Malefic Rapture.',
      list: [
        { rank:1, stat:'Intellect',       bars:5, note:'Primaire stat' },
        { rank:2, stat:'Haste',           bars:5, note:'Snellere DoT ticks = meer Shards = meer schade' },
        { rank:3, stat:'Mastery',         bars:3, note:'Verhoogt DoT schade (Mastery: Potent Afflictions)' },
        { rank:4, stat:'Critical Strike', bars:2, note:'Minder waarde dan bij andere specs' },
        { rank:5, stat:'Versatility',     bars:1, note:'Laagste prioriteit' },
      ],
    },
    en: {
      tip: 'Haste is the best secondary stat — DoTs tick faster = more Soul Shards = more Malefic Rapture.',
      list: [
        { rank:1, stat:'Intellect',       bars:5, note:'Primary stat' },
        { rank:2, stat:'Haste',           bars:5, note:'Faster DoT ticks = more Shards = more damage' },
        { rank:3, stat:'Mastery',         bars:3, note:'Increases DoT damage (Mastery: Potent Afflictions)' },
        { rank:4, stat:'Critical Strike', bars:2, note:'Less valuable than with other specs' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lowest priority' },
      ],
    },
    da: {
      tip: 'Haste er den bedste sekundære stat — DoTs tikker hurtigere = flere Soul Shards = mere Malefic Rapture.',
      list: [
        { rank:1, stat:'Intellect',       bars:5, note:'Primær stat' },
        { rank:2, stat:'Haste',           bars:5, note:'Hurtigere DoT-ticks = flere Shards = mere skade' },
        { rank:3, stat:'Mastery',         bars:3, note:'Øger DoT-skade (Mastery: Potent Afflictions)' },
        { rank:4, stat:'Critical Strike', bars:2, note:'Mindre værdifuld end hos andre specs' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lavest prioritet' },
      ],
    },
  },

  cooldowns: {
    nl: [
      { spell:'Haunt',              cd:'15 sec',  effect:'+30% DoT schade 18 sec', when:'Altijd op cooldown — nooit skippen' },
      { spell:'Summon Darkglare',   cd:'3 min',   effect:'Demoon die alle DoT schade versterkt', when:'Op pull bij boss, altijd met DoTs actief' },
      { spell:'Malefic Rapture',    cd:'Soul Shards', effect:'Raakt alle targets met DoTs', when:'3+ Shards — altijd dumpen voor nieuwe Shards' },
      { spell:'Dark Soul: Misery',  cd:'2 min',   effect:'+30% Haste 20 sec', when:'In combinatie met Summon Darkglare voor maximum burst' },
      { spell:'Drain Soul',         cd:'-',       effect:'Execute channel <20% HP + Soul Shard gen', when:'Altijd als target <20% HP' },
    ],
    en: [
      { spell:'Haunt',              cd:'15 sec',  effect:'+30% DoT damage 18 sec', when:'Always on cooldown — never skip' },
      { spell:'Summon Darkglare',   cd:'3 min',   effect:'Demon that amplifies all DoT damage', when:'On pull at boss, always with DoTs active' },
      { spell:'Malefic Rapture',    cd:'Soul Shards', effect:'Hits all targets with DoTs', when:'3+ Shards — always dump before generating new Shards' },
      { spell:'Dark Soul: Misery',  cd:'2 min',   effect:'+30% Haste 20 sec', when:'Combined with Summon Darkglare for maximum burst' },
      { spell:'Drain Soul',         cd:'-',       effect:'Execute channel <20% HP + Soul Shard gen', when:'Always when target is <20% HP' },
    ],
    da: [
      { spell:'Haunt',              cd:'15 sec',  effect:'+30% DoT-skade i 18 sek', when:'Altid på cooldown — spring aldrig over' },
      { spell:'Summon Darkglare',   cd:'3 min',   effect:'Dæmon der forstærker al DoT-skade', when:'På pull ved boss, altid med aktive DoTs' },
      { spell:'Malefic Rapture',    cd:'Soul Shards', effect:'Rammer alle mål med DoTs', when:'3+ Shards — dump altid inden generering af nye Shards' },
      { spell:'Dark Soul: Misery',  cd:'2 min',   effect:'+30% Haste i 20 sek', when:'Kombineret med Summon Darkglare til maksimal burst' },
      { spell:'Drain Soul',         cd:'-',       effect:'Execute channel <20% HP + Soul Shard gen', when:'Altid når mål er <20% HP' },
    ],
  },

  utility: {
    nl: [
      { spell:'Healthstone',        type:'Heal',      note:'Gratis personal HP restore — altijd in je bags' },
      { spell:'Soulstone',          type:'Rez',       note:'Pre-place op groepslid — auto-rez bij dood' },
      { spell:'Banish',             type:'CC',        note:'Verwijdert Demon/Elemental 40 sec uit de fight' },
      { spell:'Curse of Exhaustion', type:'Slow',     note:'70% slow op target — uitstekend voor kiting' },
      { spell:'Demonic Circle',     type:'Mobiliteit', note:'Teleporteer terug naar je cirkel — mechanic ontwijken' },
    ],
    en: [
      { spell:'Healthstone',        type:'Heal',      note:'Free personal HP restore — always in your bags' },
      { spell:'Soulstone',          type:'Rez',       note:'Pre-place on group member — auto-rez on death' },
      { spell:'Banish',             type:'CC',        note:'Removes Demon/Elemental from fight 40 sec' },
      { spell:'Curse of Exhaustion', type:'Slow',     note:'70% slow on target — excellent for kiting' },
      { spell:'Demonic Circle',     type:'Mobility',  note:'Teleport back to your circle — dodge mechanics' },
    ],
    da: [
      { spell:'Healthstone',        type:'Healing',   note:'Gratis personlig HP-genopretning — altid i din taske' },
      { spell:'Soulstone',          type:'Genoplivning', note:'Pre-placer på gruppemedlem — auto-genoplivning ved død' },
      { spell:'Banish',             type:'CC',        note:'Fjerner Demon/Elemental fra kampen i 40 sek' },
      { spell:'Curse of Exhaustion', type:'Slow',     note:'70% slow på mål — fremragende til kiting' },
      { spell:'Demonic Circle',     type:'Mobilitet', note:'Teleportér tilbage til din cirkel — undvig mekanikker' },
    ],
  },

  tips: {
    nl: [
      { icon:'🟣', title:'DoTs = schade EN Shards', text:'Elke DoT tick kan een Soul Shard genereren. Meer DoTs op meer targets = exponentieel meer Shards = meer Malefic Rapture. Dit is waarom Affliction AoE zo sterk is.' },
      { icon:'💉', title:'Drain Life = survivability', text:'Affliction healt zichzelf via Drain Life. Als je laag op HP gaat in M+, channel even Drain Life — je hoeft de healer niet altijd lastig te vallen.' },
      { icon:'🔮', title:'Demonic Circle plaatsen', text:'Zet je cirkel altijd neer bij de start van een boss. Als je een mechanic krijgt die je ver weg beweegt, teleporteer je direct terug.' },
      { icon:'💀', title:'Soulstone pre-plaatsen', text:'Voor grote pulls: zet Soulstone op de healer. Als die sterft, is er een auto-rez. Communiceer dit met je team.' },
      { icon:'⏱️', title:'Affliction = ramp-up', text:'Affliction heeft de eerste 10 sec relatief lage schade terwijl DoTs opstapelen. In M+ is dit normaal — paniek niet als je achterloopt op de meters.' },
    ],
    en: [
      { icon:'🟣', title:'DoTs = damage AND Shards', text:'Every DoT tick can generate a Soul Shard. More DoTs on more targets = exponentially more Shards = more Malefic Rapture. This is why Affliction AoE is so strong.' },
      { icon:'💉', title:'Drain Life = survivability', text:'Affliction heals itself via Drain Life. When low on HP in M+, channel Drain Life briefly — you don\'t always need to bother the healer.' },
      { icon:'🔮', title:'Placing Demonic Circle', text:'Always place your circle at the start of a boss. If you get a mechanic that moves you far away, you teleport directly back.' },
      { icon:'💀', title:'Pre-placing Soulstone', text:'Before large pulls: place Soulstone on the healer. If they die, there\'s an auto-rez. Communicate this with your team.' },
      { icon:'⏱️', title:'Affliction = ramp-up', text:'Affliction has relatively low damage the first 10 sec while DoTs stack up. This is normal in M+ — don\'t panic if you\'re behind on meters.' },
    ],
    da: [
      { icon:'🟣', title:'DoTs = skade OG Shards', text:'Hvert DoT-tick kan generere en Soul Shard. Flere DoTs på flere mål = eksponentielt flere Shards = mere Malefic Rapture. Det er derfor Affliction AoE er så stærk.' },
      { icon:'💉', title:'Drain Life = overlevelse', text:'Affliction healer sig selv via Drain Life. Når du er lavt på HP i M+, channel Drain Life kortvarigt — du behøver ikke altid at bede healeren om hjælp.' },
      { icon:'🔮', title:'Placering af Demonic Circle', text:'Placer altid din cirkel ved starten af en boss. Hvis du får en mekanik der flytter dig langt væk, teleporterer du straks tilbage.' },
      { icon:'💀', title:'Pre-placering af Soulstone', text:'Før store pulls: placer Soulstone på healeren. Hvis de dør, er der en auto-genoplivning. Kommunikér dette med dit hold.' },
      { icon:'⏱️', title:'Affliction = ramp-up', text:'Affliction har relativt lav skade de første 10 sek mens DoTs opbuildes. Dette er normalt i M+ — gå ikke i panik hvis du er bagud på meters.' },
    ],
  },

  macros: {
    nl: [
      { name:'Summon Darkglare + Dark Soul', code:'/cast Summon Darkglare\n/cast Dark Soul: Misery', note:'Maximum burst opener — beide CDs in één GCD.' },
      { name:'Agony op mouseover', code:'/cast [@mouseover,harm][] Agony', note:'Snel DoTs verspreiden in AoE zonder van target te wisselen.' },
      { name:'Demonic Circle Teleport', code:'/cast Demonic Circle: Teleport', note:'Eén knop voor snelle teleport terug naar je cirkel.' },
    ],
    en: [
      { name:'Summon Darkglare + Dark Soul', code:'/cast Summon Darkglare\n/cast Dark Soul: Misery', note:'Maximum burst opener — both CDs in one GCD.' },
      { name:'Agony on mouseover', code:'/cast [@mouseover,harm][] Agony', note:'Quickly spread DoTs in AoE without switching targets.' },
      { name:'Demonic Circle Teleport', code:'/cast Demonic Circle: Teleport', note:'One button for quick teleport back to your circle.' },
    ],
    da: [
      { name:'Summon Darkglare + Dark Soul', code:'/cast Summon Darkglare\n/cast Dark Soul: Misery', note:'Maksimalt burst-opener — begge CDs i én GCD.' },
      { name:'Agony på mouseover', code:'/cast [@mouseover,harm][] Agony', note:'Spred hurtigt DoTs i AoE uden at skifte mål.' },
      { name:'Demonic Circle Teleport', code:'/cast Demonic Circle: Teleport', note:'Én knap til hurtig teleport tilbage til din cirkel.' },
    ],
  },

  resource_info: {
    nl: {
      intro: 'Affliction gebruikt Soul Shards (0-5) als resource. Shards genereren via DoT ticks en worden gespendeerd via Malefic Rapture. Meer DoTs = meer Shards.',
      generate: [
        'Unstable Affliction ticks — grootste Shard generator',
        'Agony ticks — kans op Shard bij hogere stacks',
        'Drain Soul — extra Shards bij kanalen op <20% HP target',
        'Haunt terugkeren — geeft Shard terug bij target dood',
      ],
      spend: [
        'Malefic Rapture (1 Shard) — raakt ALLE targets met DoTs',
        'Haunt (1 Shard) — +30% DoT schade buff',
        'Unstable Affliction (1 Shard) — krachtigste DoT',
      ],
      pet_tip: '💡 Nooit op 5 Shards zitten — dump altijd met Malefic Rapture zodat nieuwe Shards niet verloren gaan!',
      pets: [],
    },
    en: {
      intro: 'Affliction uses Soul Shards (0-5) as its resource. Shards generate via DoT ticks and are spent via Malefic Rapture. More DoTs = more Shards.',
      generate: [
        'Unstable Affliction ticks — biggest Shard generator',
        'Agony ticks — chance for Shard at higher stacks',
        'Drain Soul — extra Shards when channeling on <20% HP target',
        'Haunt returning — gives Shard back on target death',
      ],
      spend: [
        'Malefic Rapture (1 Shard) — hits ALL targets with DoTs',
        'Haunt (1 Shard) — +30% DoT damage buff',
        'Unstable Affliction (1 Shard) — most powerful DoT',
      ],
      pet_tip: '💡 Never sit at 5 Shards — always dump with Malefic Rapture so new Shards don\'t go to waste!',
      pets: [],
    },
    da: {
      intro: 'Affliction bruger Soul Shards (0-5) som ressource. Shards genereres via DoT-ticks og bruges via Malefic Rapture. Flere DoTs = flere Shards.',
      generate: [
        'Unstable Affliction-ticks — største Shard-generator',
        'Agony-ticks — chance for Shard ved højere stacks',
        'Drain Soul — ekstra Shards ved channeling på <20% HP mål',
        'Haunt returnerer — giver Shard tilbage ved måls død',
      ],
      spend: [
        'Malefic Rapture (1 Shard) — rammer ALLE mål med DoTs',
        'Haunt (1 Shard) — +30% DoT-skade-buff',
        'Unstable Affliction (1 Shard) — kraftigste DoT',
      ],
      pet_tip: '💡 Sid aldrig på 5 Shards — dump altid med Malefic Rapture så nye Shards ikke går til spilde!',
      pets: [],
    },
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Magisters',  effect:'Verhoogt Intellect significant voor 1 uur.',   note:'Altijd actief' },
      { type:'pot',    name:'Potion of Recklessness',        effect:'Grote Intellect boost 25 sec.',                note:'Gebruik bij Darkglare burst window' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Intellect en Stamina via groepsfeast.',       note:'Feast vragen' },
      { type:'food',   name:'Royal Roast',    effect:'Solo food backup.',                            note:'Backup als geen feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primaire stat 1 uur.',                        note:'Altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Magisters',  effect:'Significantly increases Intellect for 1 hour.', note:'Always active' },
      { type:'pot',    name:'Potion of Recklessness',        effect:'Large Intellect boost 25 sec.',               note:'Use during Darkglare burst window' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Intellect and Stamina via group feast.',     note:'Ask for feast' },
      { type:'food',   name:'Royal Roast',    effect:'Solo food backup.',                           note:'Backup if no feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primary stat 1 hour.',                       note:'Always use' },
    ],
    da: [
      { type:'flask',  name:'Flask of the Magisters',  effect:'Øger Intellect markant i 1 time.',             note:'Altid aktiv' },
      { type:'pot',    name:'Potion of Recklessness',        effect:'Stor Intellect-boost i 25 sek.',              note:'Brug under Darkglare burst-vindue' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Intellect og Stamina via gruppefeast.',      note:'Bed om feast' },
      { type:'food',   name:'Royal Roast',    effect:'Solo-mad backup.',                            note:'Backup hvis ingen feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primær stat 1 time.',                        note:'Brug altid' },
    ],
  },
};

ALL_SPECS.push(SPEC_AFFLICTION_WARLOCK);

if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_BLOOD_DK = {
  id:'blood_dk', icon:'🩸', class:'Death Knight',
  spec:{nl:'Blood',en:'Blood',da:'Blood'},
  role:'tank', armor:'Plate',
  weapon:{nl:'Tweehandig wapen',en:'Two-hand weapon',da:'Tohåndsvåben'},
  resource:'Runes + Runic Power',
  patch:'1.0', color:'#C41E3A',

  summary:{
    nl:'Blood Death Knight is de ultieme self-healing tank. Absorbeert schade via Death Strike en genereert enorme zelfheal. Kan crashes overleven die andere tanks doden.',
    en:'Blood Death Knight is the ultimate self-healing tank. Absorbs damage via Death Strike and generates massive self-heals. Can survive crashes that kill other tanks.',
    da:'Blood Death Knight er den ultimative selvhealing-tank. Absorberer skade via Death Strike og genererer massiv selvheling. Kan overleve crashes der dræber andre tanks.',
  },
  pros:{
    nl:['Beste self-healing van alle tanks','Enorme HP pool','Sterk in sustained tanking','Death Grip = unieke pull tool','Lich\'s Calling: krachtige AoE pull via talent'],
    en:['Best self-healing of all tanks','Massive HP pool','Strong in sustained tanking','Death Grip = unique pull tool','Lich\'s Calling: powerful AoE pull via talent'],
    da:['Bedste selvheling af alle tanks','Massiv HP-pulje','Stærk i vedvarende tanking','Death Grip = unikt pull-redskab','Lich\'s Calling: kraftfuldt AoE-pull via talent'],
  },
  cons:{
    nl:['Lage mobility','Rune management is complex','Kwetsbaar voor magic schade burst','Geen externe defensieve voor groep'],
    en:['Low mobility','Rune management is complex','Vulnerable to magic damage burst','No external defensives for group'],
    da:['Lav mobilitet','Rune-styring er kompleks','Sårbar over for magic-skade-burst','Ingen eksterne defensiver til gruppen'],
  },

  cheatsheet:{
    nl:{
      opener:'Death Grip → Blood Boil → Bone Shield opbouwen → Death Strike → Marrowrend → Dancing Rune Weapon',
      single:'Marrowrend (Bone Shield <7) → Heart Strike → Death Strike bij >30% HP verlies → Blood Boil op CD',
      aoe:'Blood Boil spam → Death and Decay → Heart Strike cleave → Death Strike voor heal',
      rules:[
        'Bone Shield ALTIJD boven 5 stacks houden — Marrowrend bij <7',
        'Death Strike gebruiken na grote schade voor maximale absorb shield',
        'Dancing Rune Weapon op CD — verdubbelt je threat en gen',
        'Blood Boil op CD houden voor Crimson Scourge procs (gratis Death and Decay)',
        'Nooit je Runic Power verspillen — Death Strike is je overleving',
      ],
    },
    en:{
      opener:'Death Grip → Blood Boil → build Bone Shield → Death Strike → Marrowrend → Dancing Rune Weapon',
      single:'Marrowrend (Bone Shield <7) → Heart Strike → Death Strike after >30% HP loss → Blood Boil on CD',
      aoe:'Blood Boil spam → Death and Decay → Heart Strike cleave → Death Strike for heal',
      rules:[
        'Keep Bone Shield ALWAYS above 5 stacks — Marrowrend at <7',
        'Use Death Strike after big damage for maximum absorb shield',
        'Dancing Rune Weapon on CD — doubles your threat and generation',
        'Keep Blood Boil on CD for Crimson Scourge procs (free Death and Decay)',
        'Never waste Runic Power — Death Strike is your survival',
      ],
    },
    da:{
      opener:'Death Grip → Blood Boil → opbyg Bone Shield → Death Strike → Marrowrend → Dancing Rune Weapon',
      single:'Marrowrend (Bone Shield <7) → Heart Strike → Death Strike efter >30% HP-tab → Blood Boil på CD',
      aoe:'Blood Boil-spam → Death and Decay → Heart Strike cleave → Death Strike til heling',
      rules:[
        'Hold Bone Shield ALTID over 5 stacks — Marrowrend ved <7',
        'Brug Death Strike efter stor skade for maksimalt absorb shield',
        'Dancing Rune Weapon på CD — fordobler din threat og generering',
        'Hold Blood Boil på CD for Crimson Scourge-procs (gratis Death and Decay)',
        'Spild aldrig Runic Power — Death Strike er din overlevelse',
      ],
    },
  },

  rotation:{
    nl:{
      apex_tip:'💡 Death Strike healt meer naarmate je meer schade hebt geabsorbeerd. Wacht nooit te lang — gebruik het na een grote hit voor de maximale shield!',
      opener:[
        {spell:'Death Grip',           why:'Trek de eerste mob naar je toe om aggro te pakken'},
        {spell:'Blood Boil',           why:'Directe AoE aggro + Crimson Scourge proc kans'},
        {spell:'Marrowrend',           why:'Bone Shield opbouwen — minimaal 5 stacks nodig'},
        {spell:'Dancing Rune Weapon',  why:'Grote opener CD — verdubbelt effectiviteit'},
        {spell:'Death Strike',         why:'Eerste heal + Blood Shield opbouwen'},
        {spell:'Heart Strike',         why:'Hoofd Rune spender, genereert Runic Power'},
      ],
      single:[
        {spell:'Marrowrend',           why:'Bone Shield <7 stacks — topprioriteit voor overleving'},
        {spell:'Death Strike',         why:'Na grote hit voor maximale Blood Shield absorb'},
        {spell:'Heart Strike',         why:'Hoofd aanval — genereert Runic Power'},
        {spell:'Blood Boil',           why:'Op CD houden — Crimson Scourge proc voor gratis DnD'},
        {spell:'Death and Decay',      why:'Bij Crimson Scourge proc — gratis plaatsen'},
        {spell:'Dancing Rune Weapon',  why:'Op CD — altijd combineren met grote pulls'},
      ],
      aoe:[
        {spell:'Death and Decay',      why:'Grond AoE — gooi altijd neer bij packs'},
        {spell:'Blood Boil',           why:'Raakt alle vijanden — beste AoE Rune spender'},
        {spell:'Heart Strike',         why:'Cleave in Death and Decay — raakt meerdere targets'},
        {spell:'Death Strike',         why:'Heal blijft prioriteit ook in AoE'},
        {spell:'Marrowrend',           why:'Bone Shield bijhouden ook in AoE packs'},
      ],
    },
    en:{
      apex_tip:'💡 Death Strike heals more based on damage absorbed. Never wait too long — use it after a big hit for maximum shield!',
      opener:[
        {spell:'Death Grip',           why:'Pull the first mob to you to grab aggro'},
        {spell:'Blood Boil',           why:'Immediate AoE aggro + Crimson Scourge proc chance'},
        {spell:'Marrowrend',           why:'Build Bone Shield — minimum 5 stacks needed'},
        {spell:'Dancing Rune Weapon',  why:'Major opener CD — doubles effectiveness'},
        {spell:'Death Strike',         why:'First heal + build Blood Shield'},
        {spell:'Heart Strike',         why:'Main Rune spender, generates Runic Power'},
      ],
      single:[
        {spell:'Marrowrend',           why:'Bone Shield <7 stacks — top priority for survival'},
        {spell:'Death Strike',         why:'After big hit for maximum Blood Shield absorb'},
        {spell:'Heart Strike',         why:'Main attack — generates Runic Power'},
        {spell:'Blood Boil',           why:'Keep on CD — Crimson Scourge proc for free DnD'},
        {spell:'Death and Decay',      why:'On Crimson Scourge proc — place for free'},
        {spell:'Dancing Rune Weapon',  why:'On CD — always combine with big pulls'},
      ],
      aoe:[
        {spell:'Death and Decay',      why:'Ground AoE — always place on packs'},
        {spell:'Blood Boil',           why:'Hits all enemies — best AoE Rune spender'},
        {spell:'Heart Strike',         why:'Cleave inside Death and Decay — hits multiple targets'},
        {spell:'Death Strike',         why:'Healing remains priority even in AoE'},
        {spell:'Marrowrend',           why:'Keep Bone Shield up even in AoE packs'},
      ],
    },
    da:{
      apex_tip:'💡 Death Strike healer mere baseret på absorberet skade. Vent aldrig for længe — brug det efter et stort slag for maksimalt shield!',
      opener:[
        {spell:'Death Grip',           why:'Træk den første fjende til dig for at gribe aggro'},
        {spell:'Blood Boil',           why:'Øjeblikkelig AoE-aggro + Crimson Scourge-proc-chance'},
        {spell:'Marrowrend',           why:'Opbyg Bone Shield — minimum 5 stacks nødvendigt'},
        {spell:'Dancing Rune Weapon',  why:'Stor opener-CD — fordobler effektiviteten'},
        {spell:'Death Strike',         why:'Første heling + opbyg Blood Shield'},
        {spell:'Heart Strike',         why:'Hoved Rune-forbrug, genererer Runic Power'},
      ],
      single:[
        {spell:'Marrowrend',           why:'Bone Shield <7 stacks — topprioritet for overlevelse'},
        {spell:'Death Strike',         why:'Efter stort slag for maksimalt Blood Shield-absorb'},
        {spell:'Heart Strike',         why:'Hoved angreb — genererer Runic Power'},
        {spell:'Blood Boil',           why:'Hold på CD — Crimson Scourge-proc for gratis DnD'},
        {spell:'Death and Decay',      why:'Ved Crimson Scourge-proc — placer gratis'},
        {spell:'Dancing Rune Weapon',  why:'På CD — kombiner altid med store pulls'},
      ],
      aoe:[
        {spell:'Death and Decay',      why:'Jord-AoE — læg altid ned ved grupper'},
        {spell:'Blood Boil',           why:'Rammer alle fjender — bedste AoE Rune-forbrug'},
        {spell:'Heart Strike',         why:'Cleave inde i Death and Decay — rammer flere mål'},
        {spell:'Death Strike',         why:'Heling forbliver prioritet selv i AoE'},
        {spell:'Marrowrend',           why:'Hold Bone Shield oppe selv i AoE-grupper'},
      ],
    },
  },

  stats:{
    nl:{
      tip:'Strength is altijd #1. Haste verlaagt de GCD en versnelt Rune recharge. Mastery: Blood Shield vergroot je absorb — zeer waardevol als tank.',
      list:[
        {rank:1,stat:'Strength',       bars:5,note:'Primaire stat — altijd hoogste ilvl pakken'},
        {rank:2,stat:'Haste',          bars:4,note:'Snellere Rune recharge + lagere GCD'},
        {rank:3,stat:'Mastery',        bars:4,note:'Mastery: Blood Shield — grotere absorb na Death Strike'},
        {rank:4,stat:'Versatility',    bars:3,note:'Schade + healing boost, ook damage reduction'},
        {rank:5,stat:'Critical Strike',bars:1,note:'Laagste waarde als tank'},
      ],
    },
    en:{
      tip:'Strength is always #1. Haste lowers the GCD and speeds up Rune recharge. Mastery: Blood Shield increases your absorb — very valuable as a tank.',
      list:[
        {rank:1,stat:'Strength',       bars:5,note:'Primary stat — always take highest ilvl'},
        {rank:2,stat:'Haste',          bars:4,note:'Faster Rune recharge + lower GCD'},
        {rank:3,stat:'Mastery',        bars:4,note:'Mastery: Blood Shield — larger absorb after Death Strike'},
        {rank:4,stat:'Versatility',    bars:3,note:'Damage + healing boost, also damage reduction'},
        {rank:5,stat:'Critical Strike',bars:1,note:'Lowest value as tank'},
      ],
    },
    da:{
      tip:'Strength er altid #1. Haste sænker GCD og fremskynder Rune-genopladning. Mastery: Blood Shield øger dit absorb — meget værdifuldt som tank.',
      list:[
        {rank:1,stat:'Strength',       bars:5,note:'Primær stat — tag altid højeste ilvl'},
        {rank:2,stat:'Haste',          bars:4,note:'Hurtigere Rune-genopladning + lavere GCD'},
        {rank:3,stat:'Mastery',        bars:4,note:'Mastery: Blood Shield — større absorb efter Death Strike'},
        {rank:4,stat:'Versatility',    bars:3,note:'Skade + healing-boost, også skadereduktion'},
        {rank:5,stat:'Critical Strike',bars:1,note:'Lavest værdi som tank'},
      ],
    },
  },

  cooldowns:{
    nl:[
      {spell:'Dancing Rune Weapon',  cd:'2 min',  effect:'Verdubbelt effectiviteit 8 sec — parry + extra threat',      when:'Op pull en elke grote pack'},
      {spell:'Vampiric Blood',       cd:'1.5 min', effect:'+30% max HP + versterkt heals 10 sec',                      when:'Bij grote schade spikes of moeilijke fase'},
      {spell:'Icebound Fortitude',   cd:'3 min',  effect:'30% schade reductie 8 sec + immuun voor stuns',              when:'Noodsituatie of grote mechanic'},
      {spell:'Rune Tap',             cd:'25 sec', effect:'Instant 10% HP heal — kort CD nood heal',                    when:'Als je HP snel daalt tussen Death Strikes'},
      {spell:'Anti-Magic Shell',     cd:'1 min',  effect:'Absorbeert 100% magic schade 5 sec',                        when:'Bij magic-heavy boss mechanics'},
    ],
    en:[
      {spell:'Dancing Rune Weapon',  cd:'2 min',  effect:'Doubles effectiveness 8 sec — parry + extra threat',        when:'On pull and every large pack'},
      {spell:'Vampiric Blood',       cd:'1.5 min', effect:'+30% max HP + strengthens heals 10 sec',                   when:'During big damage spikes or difficult phase'},
      {spell:'Icebound Fortitude',   cd:'3 min',  effect:'30% damage reduction 8 sec + immune to stuns',              when:'Emergency or major mechanic'},
      {spell:'Rune Tap',             cd:'25 sec', effect:'Instant 10% HP heal — short CD emergency heal',             when:'When HP drops fast between Death Strikes'},
      {spell:'Anti-Magic Shell',     cd:'1 min',  effect:'Absorbs 100% magic damage 5 sec',                          when:'During magic-heavy boss mechanics'},
    ],
    da:[
      {spell:'Dancing Rune Weapon',  cd:'2 min',  effect:'Fordobler effektiviteten i 8 sek — parry + ekstra threat',  when:'På pull og ved hver stor gruppe'},
      {spell:'Vampiric Blood',       cd:'1.5 min', effect:'+30% maks HP + forstærker helinger i 10 sek',              when:'Ved store skade-spikes eller svær fase'},
      {spell:'Icebound Fortitude',   cd:'3 min',  effect:'30% skadereduktion i 8 sek + immun mod stuns',              when:'Nødsituation eller stor mekanik'},
      {spell:'Rune Tap',             cd:'25 sek', effect:'Instant 10% HP-heling — kort CD nødheling',                 when:'Når HP falder hurtigt mellem Death Strikes'},
      {spell:'Anti-Magic Shell',     cd:'1 min',  effect:'Absorberer 100% magic-skade i 5 sek',                      when:'Under magic-tunge boss-mekanikker'},
    ],
  },

  utility:{
    nl:[
      {spell:'Death Grip',             type:'Pull',        note:'Trek 1 vijand naar je toe — uniek in het spel'},
      {spell:'Chains of Ice',          type:'Slow',        note:'70% movement slow — kiting tool'},
      {spell:'Mind Freeze',            type:'Interrupt',   note:'Interrupt op 15 sec CD — ook als tank essentieel'},
      {spell:'Death Grip (Gorefiend)', type:'Pull',        note:'Met talent: AoE death grip van alle vijanden in gebied'},
      {spell:'Anti-Magic Zone',        type:'Defensief',   note:'Grote AoE magic absorb koepel voor de groep'},
      {spell:'Raise Ally',             type:'Ress',        note:'Battle ress op 10 min CD'},
    ],
    en:[
      {spell:'Death Grip',             type:'Pull',        note:'Pull 1 enemy to you — unique in the game'},
      {spell:'Chains of Ice',          type:'Slow',        note:'70% movement slow — kiting tool'},
      {spell:'Mind Freeze',            type:'Interrupt',   note:'Interrupt on 15 sec CD — essential even as tank'},
      {spell:'Death Grip (Gorefiend)', type:'Pull',        note:'With talent: AoE death grip of all enemies in area'},
      {spell:'Anti-Magic Zone',        type:'Defensive',   note:'Large AoE magic absorb dome for the group'},
      {spell:'Raise Ally',             type:'Ress',        note:'Battle ress on 10 min CD'},
    ],
    da:[
      {spell:'Death Grip',             type:'Pull',        note:'Træk 1 fjende til dig — unikt i spillet'},
      {spell:'Chains of Ice',          type:'Slow',        note:'70% bevægelses-slow — kiting-redskab'},
      {spell:'Mind Freeze',            type:'Interrupt',   note:'Interrupt på 15 sek CD — essentiel selv som tank'},
      {spell:'Death Grip (Gorefiend)', type:'Pull',        note:'Med talent: AoE death grip af alle fjender i område'},
      {spell:'Anti-Magic Zone',        type:'Defensiv',    note:'Stor AoE magic-absorb-kuppel for gruppen'},
      {spell:'Raise Ally',             type:'Ress',        note:'Battle ress på 10 min CD'},
    ],
  },

  tips:{
    nl:[
      {icon:'🩸',title:'Death Strike timing',      text:'Death Strike healt op basis van schade die je de afgelopen 5 sec hebt gekregen. Gebruik het NET NA een grote hit — nooit als preventief als je full HP bent. Hoe meer je neemt, hoe groter de Blood Shield.'},
      {icon:'🦴',title:'Bone Shield = je leven',   text:'Bone Shield geeft je 10% schade reductie per stack (tot max). Laat het nooit onder 5 zakken. Marrowrend heeft prioriteit boven alles als de stacks laag zijn — ook boven Death Strike.'},
      {icon:'💃',title:'Dancing Rune Weapon',       text:'DRW kopieert jouw attacks en verdubbelt effectief je Rune generatie. Gooi hem altijd op pull bij een grote pack. In M+: bewaar hem voor de gevaarlijkste pull of de boss.'},
      {icon:'🧲',title:'Death Grip als tool',       text:'Death Grip is niet alleen voor tanken — het is ook je interrupt op afstand, mobility tool, en mechanic-solver. In M+ kun je een caster naar je toe grippen om interrupts te besparen.'},
      {icon:'🛡️',title:'Magic spikes overleven',  text:'Bij magic-heavy fights: Anti-Magic Shell absorbeert tot 100% van alle magic schade. Gebruik het proactief vóór een bekende magic burst — niet reactief achteraf.'},
    ],
    en:[
      {icon:'🩸',title:'Death Strike timing',      text:'Death Strike heals based on damage taken in the last 5 sec. Use it RIGHT AFTER a big hit — never preventively at full HP. The more damage you\'ve taken, the larger the Blood Shield.'},
      {icon:'🦴',title:'Bone Shield = your life',  text:'Bone Shield gives 10% damage reduction per stack (to max). Never let it drop below 5. Marrowrend has priority over everything when stacks are low — even over Death Strike.'},
      {icon:'💃',title:'Dancing Rune Weapon',       text:'DRW copies your attacks and effectively doubles your Rune generation. Always use on pull with a large pack. In M+: save it for the most dangerous pull or the boss.'},
      {icon:'🧲',title:'Death Grip as a tool',      text:'Death Grip isn\'t just for tanking — it\'s also a ranged interrupt, mobility tool, and mechanic solver. In M+ you can grip a caster to you to save on interrupts.'},
      {icon:'🛡️',title:'Surviving magic spikes',  text:'In magic-heavy fights: Anti-Magic Shell absorbs up to 100% of all magic damage. Use it proactively BEFORE a known magic burst — not reactively afterward.'},
    ],
    da:[
      {icon:'🩸',title:'Death Strike-timing',      text:'Death Strike healer baseret på skade taget de sidste 5 sek. Brug det STRAKS EFTER et stort slag — aldrig forebyggende ved fuld HP. Jo mere skade du har taget, jo større Blood Shield.'},
      {icon:'🦴',title:'Bone Shield = dit liv',    text:'Bone Shield giver 10% skadereduktion per stack (til maks). Lad den aldrig falde under 5. Marrowrend har prioritet over alt når stacks er lave — også over Death Strike.'},
      {icon:'💃',title:'Dancing Rune Weapon',       text:'DRW kopierer dine angreb og fordobler effektivt din Rune-generering. Brug altid ved pull med en stor gruppe. I M+: gem det til det farligste pull eller bossen.'},
      {icon:'🧲',title:'Death Grip som redskab',   text:'Death Grip er ikke kun til tanking — det er også en interrupt på afstand, mobilitetsredskab og mekanik-løser. I M+ kan du gripe en caster til dig for at spare på interrupts.'},
      {icon:'🛡️',title:'Overleve magic-spikes',   text:'I magic-tunge kampe: Anti-Magic Shell absorberer op til 100% af al magic-skade. Brug det proaktivt FØR et kendt magic-burst — ikke reaktivt bagefter.'},
    ],
  },

  macros:{
    nl:[
      {name:'Mind Freeze (Focus Kick)', code:'#showtooltip Mind Freeze\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Mind Freeze', note:'Kick op focus > mouseover > target. Essentieel ook als tank!'},
      {name:'Death Grip + Chains combo', code:'#showtooltip Death Grip\n/cast Death Grip\n/cast Chains of Ice', note:'Grip + direct slow — mob kan niet meer weglopen.'},
      {name:'Vampiric Blood + Rune Tap', code:'/cast Vampiric Blood\n/cast Rune Tap', note:'Nood-heal combo — maximaal HP herstel in één knop.'},
    ],
    en:[
      {name:'Mind Freeze (Focus Kick)', code:'#showtooltip Mind Freeze\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Mind Freeze', note:'Kick on focus > mouseover > target. Essential even as tank!'},
      {name:'Death Grip + Chains combo', code:'#showtooltip Death Grip\n/cast Death Grip\n/cast Chains of Ice', note:'Grip + immediate slow — mob can\'t run away anymore.'},
      {name:'Vampiric Blood + Rune Tap', code:'/cast Vampiric Blood\n/cast Rune Tap', note:'Emergency heal combo — maximum HP recovery in one button.'},
    ],
    da:[
      {name:'Mind Freeze (Focus Kick)', code:'#showtooltip Mind Freeze\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Mind Freeze', note:'Spark på focus > mouseover > mål. Essentiel selv som tank!'},
      {name:'Death Grip + Chains combo', code:'#showtooltip Death Grip\n/cast Death Grip\n/cast Chains of Ice', note:'Grip + øjeblikkelig slow — fjenden kan ikke løbe væk.'},
      {name:'Vampiric Blood + Rune Tap', code:'/cast Vampiric Blood\n/cast Rune Tap', note:'Nødheling-kombination — maksimalt HP-gendannelse på én knap.'},
    ],
  },

  resource_info:{
    nl:{
      intro:'Blood DK gebruikt Runes (6 stuks, regenereren over tijd) en Runic Power (0-125). Runes zijn je aanvalsresource. Runic Power wordt gespend aan Death Strike — je overlevingstool.',
      generate:[
        'Heart Strike — verbruikt 1 Blood Rune, genereert 15 Runic Power',
        'Marrowrend — verbruikt 2 Runes, genereert 20 Runic Power',
        'Blood Boil — verbruikt 1 Blood Rune',
        'Runes regeneren automatisch over 10 sec per Rune',
      ],
      spend:[
        'Death Strike — kost 45 Runic Power, genereert Blood Shield (absorb)',
        'Rune Tap — kost 25 Runic Power, instant heal',
        'Dancing Rune Weapon — geen Runic Power kosten maar boost Rune gen',
      ],
      pet_tip:'💡 Nooit Runic Power verspillen aan het cap — gebruik Death Strike zodra je boven 80 RP zit of na een grote hit. Runic Power = leven!',
      pets:[],
    },
    en:{
      intro:'Blood DK uses Runes (6 total, recharge over time) and Runic Power (0-125). Runes are your attack resource. Runic Power is spent on Death Strike — your survival tool.',
      generate:[
        'Heart Strike — uses 1 Blood Rune, generates 15 Runic Power',
        'Marrowrend — uses 2 Runes, generates 20 Runic Power',
        'Blood Boil — uses 1 Blood Rune',
        'Runes recharge automatically over 10 sec per Rune',
      ],
      spend:[
        'Death Strike — costs 45 Runic Power, generates Blood Shield (absorb)',
        'Rune Tap — costs 25 Runic Power, instant heal',
        'Dancing Rune Weapon — no Runic Power cost but boosts Rune gen',
      ],
      pet_tip:'💡 Never waste Runic Power at the cap — use Death Strike once above 80 RP or after a big hit. Runic Power = life!',
      pets:[],
    },
    da:{
      intro:'Blood DK bruger Runes (6 i alt, genoplader over tid) og Runic Power (0-125). Runes er din angrebsressource. Runic Power bruges på Death Strike — dit overlevelsesredskab.',
      generate:[
        'Heart Strike — bruger 1 Blood Rune, genererer 15 Runic Power',
        'Marrowrend — bruger 2 Runes, genererer 20 Runic Power',
        'Blood Boil — bruger 1 Blood Rune',
        'Runes genoplader automatisk over 10 sek per Rune',
      ],
      spend:[
        'Death Strike — koster 45 Runic Power, genererer Blood Shield (absorb)',
        'Rune Tap — koster 25 Runic Power, instant heling',
        'Dancing Rune Weapon — ingen Runic Power-omkostninger men booster Rune-gen',
      ],
      pet_tip:'💡 Spild aldrig Runic Power ved loftet — brug Death Strike når du er over 80 RP eller efter et stort slag. Runic Power = liv!',
      pets:[],
    },
  },

  consumables:{
    nl:[
      {type:'flask', name:'Flask of the Focused Dream',  effect:'Verhoogt Strength significant voor 1 uur.',          note:'Altijd actief'},
      {type:'pot',   name:'Potion of Withering Vitality', effect:'Groot HP herstel en tijdelijke HP boost.',            note:'Op pull of bij grote schade fase'},
      {type:'food',  name:'The Sushi Special (Feast)',    effect:'+Strength en Stamina via groepsfeast.',              note:'Feast vragen'},
      {type:'food',  name:'Hearty Feast backup',          effect:'Solo food — Strength + Stamina backup.',             note:'Backup als geen feast'},
      {type:'rune',  name:'Crystalline Augment Rune',     effect:'+Primaire stat 1 uur.',                              note:'Altijd gebruiken'},
    ],
    en:[
      {type:'flask', name:'Flask of the Focused Dream',  effect:'Significantly increases Strength for 1 hour.',       note:'Always active'},
      {type:'pot',   name:'Potion of Withering Vitality', effect:'Large HP restore and temporary HP boost.',           note:'On pull or during major damage phase'},
      {type:'food',  name:'The Sushi Special (Feast)',    effect:'+Strength and Stamina via group feast.',             note:'Ask for feast'},
      {type:'food',  name:'Hearty Feast backup',          effect:'Solo food — Strength + Stamina backup.',            note:'Backup if no feast'},
      {type:'rune',  name:'Crystalline Augment Rune',     effect:'+Primary stat 1 hour.',                             note:'Always use'},
    ],
    da:[
      {type:'flask', name:'Flask of the Focused Dream',  effect:'Øger Strength markant i 1 time.',                    note:'Altid aktiv'},
      {type:'pot',   name:'Potion of Withering Vitality', effect:'Stor HP-genoprettelse og midlertidig HP-boost.',     note:'På pull eller under stor skadefase'},
      {type:'food',  name:'The Sushi Special (Feast)',    effect:'+Strength og Stamina via gruppefeast.',              note:'Bed om feast'},
      {type:'food',  name:'Hearty Feast backup',          effect:'Solo-mad — Strength + Stamina backup.',             note:'Backup hvis ingen feast'},
      {type:'rune',  name:'Crystalline Augment Rune',     effect:'+Primær stat 1 time.',                              note:'Brug altid'},
    ],
  },
};
ALL_SPECS.push(SPEC_BLOOD_DK);

if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_VENGEANCE_DH = {
  id:'vengeance_dh', icon:'🔱', class:'Demon Hunter',
  spec:{nl:'Vengeance',en:'Vengeance'},
  role:'tank', armor:'Leather',
  weapon:{nl:'Twee eenhandige wapens (dual wield)',en:'Two one-handed weapons (dual wield)'},
  resource:'Fury + Pain',
  patch:'1.0', color:'#A330C9',
  summary:{
    nl:'Vengeance Demon Hunter is de meest mobiele tank. Sigil of Flame en Spirit Bomb voor AoE threat. Uitzonderlijk hoge mobiliteit via Fel Rush en Metamorphosis.',
    en:'Vengeance Demon Hunter is the most mobile tank. Sigil of Flame and Spirit Bomb for AoE threat. Exceptionally high mobility via Fel Rush and Metamorphosis.'
  },
  pros:{
    nl:['Beste mobiliteit van alle tanks','Uitstekende AoE threat via Sigil of Flame','Hoge self-healing via Soul Fragments','Disrupt = betrouwbare interrupt (15 sec)','Metamorphosis = enorme HP boost als nood-CD'],
    en:['Best mobility of all tanks','Excellent AoE threat via Sigil of Flame','High self-healing via Soul Fragments','Disrupt = reliable interrupt (15 sec)','Metamorphosis = massive HP boost as emergency CD']
  },
  cons:{
    nl:['Lagere raw damage reduction dan plate tanks','Soul Fragment management is complex','Minder sterk in single target mitigation','Kwetsbaar voor magic burst zonder goede timing'],
    en:['Lower raw damage reduction than plate tanks','Soul Fragment management is complex','Weaker in single target mitigation','Vulnerable to magic burst without good timing']
  },
  cheatsheet:{
    nl:{
      opener:'Sigil of Flame → Immolation Aura → Fracture → Spirit Bomb → Fel Devastation → Soul Cleave',
      single:'Immolation Aura op CD → Fracture (Soul Fragments genereren) → Spirit Bomb bij 4+ Frags → Soul Cleave noodgeval',
      aoe:'Sigil of Flame → Immolation Aura → Fracture spam → Spirit Bomb op 4+ Fragments → Fel Devastation',
      rules:[
        'Soul Fragments ALTIJD opslaan voor Spirit Bomb (4+ stuks)',
        'Immolation Aura op CD houden — passieve schade en threat',
        'Fracture boven Soul Cleave prefereren — meer Fragments generatie',
        'Spirit Bomb bij 4+ Soul Fragments voor maximale AoE heal en schade',
        'Metamorphosis bewaren als nood-CD of grote pull opener',
      ],
    },
    en:{
      opener:'Sigil of Flame → Immolation Aura → Fracture → Spirit Bomb → Fel Devastation → Soul Cleave',
      single:'Immolation Aura on CD → Fracture (generate Soul Fragments) → Spirit Bomb at 4+ Frags → Soul Cleave emergency',
      aoe:'Sigil of Flame → Immolation Aura → Fracture spam → Spirit Bomb at 4+ Fragments → Fel Devastation',
      rules:[
        'Always save Soul Fragments for Spirit Bomb (4+ pieces)',
        'Keep Immolation Aura on CD — passive damage and threat',
        'Prefer Fracture over Soul Cleave — more Fragments generation',
        'Spirit Bomb at 4+ Soul Fragments for maximum AoE heal and damage',
        'Save Metamorphosis as emergency CD or large pull opener',
      ],
    }
  },
  rotation:{
    nl:{
      apex_tip:'💡 Soul Fragments zijn je overlevingssysteem. Elk Fragment dat je absorbeert healt je. Spirit Bomb verbruikt alle Fragments tegelijk voor een enorme AoE heal + schade burst — altijd wachten op 4+!',
      opener:[
        {spell:'Sigil of Flame',      why:'AoE DoT en threat op alle vijanden in gebied'},
        {spell:'Immolation Aura',     why:'Passieve AoE schade en threat — altijd actief houden'},
        {spell:'Fracture',            why:'Genereert 2 Soul Fragments — snel naar Spirit Bomb'},
        {spell:'Spirit Bomb',         why:'Burst bij 4+ Fragments — AoE heal + schade tegelijk'},
        {spell:'Fel Devastation',     why:'Grote cooldown — AoE channel schade + zelfheal'},
        {spell:'Soul Cleave',         why:'Nood-heal of extra Fragment verbruik'},
      ],
      single:[
        {spell:'Immolation Aura',     why:'Op CD — passieve schade en threat bijhouden'},
        {spell:'Fracture',            why:'Altijd boven Soul Cleave — genereert 2 Fragments'},
        {spell:'Spirit Bomb',         why:'Bij 4+ Soul Fragments — combinatie heal en schade'},
        {spell:'Sigil of Flame',      why:'Op CD — DoT schade en AoE threat'},
        {spell:'Soul Cleave',         why:'Nood-heal als Fragment management niet voldoende is'},
        {spell:'Metamorphosis',       why:'Op CD of bewaard als grote nood-CD'},
      ],
      aoe:[
        {spell:'Sigil of Flame',      why:'Neerleggen op pack — AoE DoT op alles'},
        {spell:'Immolation Aura',     why:'Altijd actief — raakt alle vijanden rondom je'},
        {spell:'Fracture',            why:'Spam voor snelle Fragment opbouw'},
        {spell:'Spirit Bomb',         why:'Bij 4+ Fragments — AoE heal en burst schade'},
        {spell:'Fel Devastation',     why:'AoE channel op grote packs — heal + schade'},
      ],
    },
    en:{
      apex_tip:'💡 Soul Fragments are your survival system. Each Fragment you absorb heals you. Spirit Bomb consumes all Fragments simultaneously for a massive AoE heal + damage burst — always wait for 4+!',
      opener:[
        {spell:'Sigil of Flame',      why:'AoE DoT and threat on all enemies in area'},
        {spell:'Immolation Aura',     why:'Passive AoE damage and threat — always keep active'},
        {spell:'Fracture',            why:'Generates 2 Soul Fragments — quickly toward Spirit Bomb'},
        {spell:'Spirit Bomb',         why:'Burst at 4+ Fragments — AoE heal + damage simultaneously'},
        {spell:'Fel Devastation',     why:'Major cooldown — AoE channel damage + self-heal'},
        {spell:'Soul Cleave',         why:'Emergency heal or extra Fragment consumption'},
      ],
      single:[
        {spell:'Immolation Aura',     why:'On CD — keep passive damage and threat up'},
        {spell:'Fracture',            why:'Always above Soul Cleave — generates 2 Fragments'},
        {spell:'Spirit Bomb',         why:'At 4+ Soul Fragments — combined heal and damage'},
        {spell:'Sigil of Flame',      why:'On CD — DoT damage and AoE threat'},
        {spell:'Soul Cleave',         why:'Emergency heal when Fragment management insufficient'},
        {spell:'Metamorphosis',       why:'On CD or saved as major emergency CD'},
      ],
      aoe:[
        {spell:'Sigil of Flame',      why:'Place on pack — AoE DoT on everything'},
        {spell:'Immolation Aura',     why:'Always active — hits all enemies around you'},
        {spell:'Fracture',            why:'Spam for fast Fragment buildup'},
        {spell:'Spirit Bomb',         why:'At 4+ Fragments — AoE heal and burst damage'},
        {spell:'Fel Devastation',     why:'AoE channel on large packs — heal + damage'},
      ],
    }
  },
  stats:{
    nl:{
      tip:'Agility is altijd #1. Haste verlaagt GCD en versnelt Sigil cooldowns. Versatility geeft damage reduction — extra waardevol als tank. Mastery verhoogt Soul Fragment healing.',
      list:[
        {rank:1,stat:'Agility',        bars:5,note:'Primaire stat — altijd hoogste ilvl pakken'},
        {rank:2,stat:'Haste',          bars:4,note:'Snellere CDs + lagere GCD — meer Fracture mogelijkheden'},
        {rank:3,stat:'Versatility',    bars:4,note:'Schade + damage reduction — dubbel waardevol als tank'},
        {rank:4,stat:'Mastery',        bars:2,note:'Mastery: Fel Blood — verhoogt Soul Fragment healing'},
        {rank:5,stat:'Critical Strike',bars:1,note:'Laagste prioriteit als tank'},
      ],
    },
    en:{
      tip:'Agility is always #1. Haste lowers GCD and speeds up Sigil cooldowns. Versatility gives damage reduction — extra valuable as tank. Mastery increases Soul Fragment healing.',
      list:[
        {rank:1,stat:'Agility',        bars:5,note:'Primary stat — always take highest ilvl'},
        {rank:2,stat:'Haste',          bars:4,note:'Faster CDs + lower GCD — more Fracture opportunities'},
        {rank:3,stat:'Versatility',    bars:4,note:'Damage + damage reduction — doubly valuable as tank'},
        {rank:4,stat:'Mastery',        bars:2,note:'Mastery: Fel Blood — increases Soul Fragment healing'},
        {rank:5,stat:'Critical Strike',bars:1,note:'Lowest priority as tank'},
      ],
    }
  },
  cooldowns:{
    nl:[
      {spell:'Metamorphosis',       cd:'3 min',   effect:'+50% max HP tijdelijk + transformeert in Demon form',    when:'Op pull voor grote packs of als nood-HP buffer'},
      {spell:'Fel Devastation',     cd:'1 min',   effect:'Channel 2 sec — AoE schade + zelfheal',                 when:'Op CD — zowel threat als overleving'},
      {spell:'Fiery Brand',         cd:'1 min',   effect:'Brandmerkt target — 40% schade reductie van gemerkt doel', when:'Op grootste schade dealer of boss melee'},
      {spell:'Sigil of Silence',    cd:'1 min',   effect:'AoE silence in gebied 5 sec na vertraging',             when:'Bij groepen met veel casters — proactief'},
      {spell:'Demon Spikes',        cd:'20 sec',  effect:'Verhoogt armor en dodge tijdelijk — fysieke mitigation',  when:'Bij grote fysieke aanvallen — op CD houden'},
    ],
    en:[
      {spell:'Metamorphosis',       cd:'3 min',   effect:'+50% max HP temporarily + transforms into Demon form',   when:'On pull for large packs or as emergency HP buffer'},
      {spell:'Fel Devastation',     cd:'1 min',   effect:'Channel 2 sec — AoE damage + self-heal',                when:'On CD — both threat and survival'},
      {spell:'Fiery Brand',         cd:'1 min',   effect:'Brands target — 40% damage reduction from branded target', when:'On biggest damage dealer or boss melee'},
      {spell:'Sigil of Silence',    cd:'1 min',   effect:'AoE silence in area 5 sec after delay',                 when:'With groups of many casters — proactively'},
      {spell:'Demon Spikes',        cd:'20 sec',  effect:'Temporarily increases armor and dodge — physical mitigation', when:'During large physical attacks — keep on CD'},
    ]
  },
  utility:{
    nl:[
      {spell:'Disrupt',            type:'Interrupt', note:'Interrupt op 15 sec CD — betrouwbaar en snel'},
      {spell:'Sigil of Misery',    type:'CC',        note:'AoE disorient in gebied na 2 sec vertraging — breekt bij schade'},
      {spell:'Sigil of Silence',   type:'Silence',   note:'AoE silence in gebied — stopt alle magic casts'},
      {spell:'Imprison',           type:'CC',        note:'Immobiliseert vijand 1 min — breekt bij schade'},
      {spell:'Chaos Nova',         type:'Stun',      note:'AoE stun rondom je 5 sec'},
      {spell:'Spectral Sight',     type:'Util',      note:'Ziet door muren en camouflage — sporadisch bruikbaar in M+'},
    ],
    en:[
      {spell:'Disrupt',            type:'Interrupt', note:'Interrupt on 15 sec CD — reliable and fast'},
      {spell:'Sigil of Misery',    type:'CC',        note:'AoE disorient in area after 2 sec delay — breaks on damage'},
      {spell:'Sigil of Silence',   type:'Silence',   note:'AoE silence in area — stops all magic casts'},
      {spell:'Imprison',           type:'CC',        note:'Immobilizes enemy 1 min — breaks on damage'},
      {spell:'Chaos Nova',         type:'Stun',      note:'AoE stun around you 5 sec'},
      {spell:'Spectral Sight',     type:'Util',      note:'Sees through walls and camouflage — occasionally useful in M+'},
    ]
  },
  tips:{
    nl:[
      {icon:'💎',title:'Soul Fragment systeem',     text:'Soul Fragments spawnen via Fracture en andere abilities. Elk Fragment healt je als je er doorheen loopt. Spirit Bomb verbruikt alle actieve Fragments tegelijk voor enorme AoE heal + schade. Altijd wachten op 4+ voordat je Spirit Bomb gebruikt.'},
      {icon:'🔥',title:'Fiery Brand rotatie',       text:'Fiery Brand vermindert de schade die het gebrande doel doet met 40%. Altijd op de grootste schade dealer of de boss plaatsen. In M+: ideaal voor een gevaarlijke mob die hard auto-attack doet.'},
      {icon:'⚡',title:'Demon Spikes = fysieke mitigation', text:'Demon Spikes is je primaire fysieke defensieve. Gebruik het proactief vóór grote aanvallen — niet reactief. Het heeft een 20 sec CD en kan 2 charges opbouwen. Bewaar altijd 1 charge als noodoptie.'},
      {icon:'🌀',title:'Sigil timing',              text:'Sigils hebben een 2 seconden vertraging. Je moet ze voor je neergooien waar de vijanden ZAL zijn, niet waar ze nu zijn. In M+: gebruik Sigil of Flame direct als je een pack bereikt — dan gaat het af als de gevechten beginnen.'},
      {icon:'🦋',title:'Mobiliteit gebruiken',      text:'Vengeance heeft Fel Rush en Vengeful Retreat voor uitstekende mobiliteit. Gebruik dit om snel te repositioneren, mechanics te ontwijken, of om snel terug bij een pack te komen na een pull. Dit is je grootste voordeel ten opzichte van andere tanks.'},
    ],
    en:[
      {icon:'💎',title:'Soul Fragment system',      text:'Soul Fragments spawn via Fracture and other abilities. Each Fragment heals you when you walk through it. Spirit Bomb consumes all active Fragments simultaneously for massive AoE heal + damage. Always wait for 4+ before using Spirit Bomb.'},
      {icon:'🔥',title:'Fiery Brand rotation',      text:'Fiery Brand reduces damage done by the branded target by 40%. Always place on the biggest damage dealer or the boss. In M+: ideal for a dangerous mob that auto-attacks hard.'},
      {icon:'⚡',title:'Demon Spikes = physical mitigation', text:'Demon Spikes is your primary physical defensive. Use it proactively before big attacks — not reactively. It has a 20 sec CD and can build 2 charges. Always keep 1 charge as an emergency option.'},
      {icon:'🌀',title:'Sigil timing',              text:'Sigils have a 2-second delay. You need to place them where enemies WILL be, not where they are now. In M+: use Sigil of Flame immediately when reaching a pack — it goes off when the fights start.'},
      {icon:'🦋',title:'Using mobility',            text:'Vengeance has Fel Rush and Vengeful Retreat for excellent mobility. Use this to quickly reposition, dodge mechanics, or quickly return to a pack after a pull. This is your biggest advantage over other tanks.'},
    ]
  },
  macros:{
    nl:[
      {name:'Disrupt (Focus Kick)', code:'#showtooltip Disrupt\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Disrupt', note:'Kick op focus > mouseover > target. Essentieel als tank!'},
      {name:'Sigil of Flame op cursor', code:'#showtooltip Sigil of Flame\n/cast [@cursor] Sigil of Flame', note:'Plaatst Sigil direct op cursor positie — geen bevestigingsklik nodig.'},
      {name:'Metamorphosis opener',  code:'#showtooltip Metamorphosis\n/cast Metamorphosis', note:'Gooi altijd op pull bij grote pack voor de +50% HP buffer.'},
    ],
    en:[
      {name:'Disrupt (Focus Kick)', code:'#showtooltip Disrupt\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Disrupt', note:'Kick on focus > mouseover > target. Essential as tank!'},
      {name:'Sigil of Flame at cursor', code:'#showtooltip Sigil of Flame\n/cast [@cursor] Sigil of Flame', note:'Places Sigil directly at cursor position — no confirmation click needed.'},
      {name:'Metamorphosis opener',  code:'#showtooltip Metamorphosis\n/cast Metamorphosis', note:'Always throw on pull for large pack for the +50% HP buffer.'},
    ]
  },
  resource_info:{
    nl:{
      intro:'Vengeance DH gebruikt Pain (0-100) als primaire resource en Soul Fragments als overlевings resource. Pain bouwt op via aanvallen en wordt gespend aan Soul Cleave of Spirit Bomb.',
      generate:[
        'Immolation Aura — genereert Pain passief tijdens channel',
        'Fracture — genereert Pain en spawnt 2 Soul Fragments',
        'Shear — alternatief voor Fracture, genereert minder Fragments',
        'Melee aanvallen — kleine hoeveelheid Pain passief',
      ],
      spend:[
        'Soul Cleave — kost 30 Pain, instant heal + AoE',
        'Spirit Bomb — kost 30 Pain, verbruikt alle Soul Fragments voor enorme AoE burst',
        'Fel Devastation — kost 50 Pain, 2 sec channel voor grote heal en schade',
      ],
      pet_tip:'💡 Soul Fragments zijn GRATIS heals — loop er altijd doorheen als ze in de buurt zijn. Bewaar ze voor Spirit Bomb (4+). Nooit Soul Cleave als je 4+ Fragments hebt — dat zijn verspilde Spirit Bomb heals!',
      pets:[],
    },
    en:{
      intro:'Vengeance DH uses Pain (0-100) as primary resource and Soul Fragments as survival resource. Pain builds up via attacks and is spent on Soul Cleave or Spirit Bomb.',
      generate:[
        'Immolation Aura — generates Pain passively during channel',
        'Fracture — generates Pain and spawns 2 Soul Fragments',
        'Shear — alternative to Fracture, generates fewer Fragments',
        'Melee attacks — small amount of Pain passively',
      ],
      spend:[
        'Soul Cleave — costs 30 Pain, instant heal + AoE',
        'Spirit Bomb — costs 30 Pain, consumes all Soul Fragments for massive AoE burst',
        'Fel Devastation — costs 50 Pain, 2 sec channel for large heal and damage',
      ],
      pet_tip:'💡 Soul Fragments are FREE heals — always walk through them when nearby. Save them for Spirit Bomb (4+). Never Soul Cleave when you have 4+ Fragments — those are wasted Spirit Bomb heals!',
      pets:[],
    }
  },
  consumables:{
    nl:[
      {type:'flask', name:'Flask of the Blood Knights',  effect:'Verhoogt Agility significant voor 1 uur.',    note:'Altijd actief'},
      {type:'pot',   name:'Potion of Withering Vitality', effect:'Groot HP herstel en tijdelijke HP boost.',    note:'Op pull of bij grote schade spike'},
      {type:'food',  name:'Silvermoon Parade (Feast)',   effect:'+Agility en Stamina via groepsfeast.',       note:'Feast vragen'},
      {type:'food',  name:'Royal Roast',          effect:'Solo food — Agility + Stamina backup.',     note:'Backup als geen feast'},
      {type:'rune',  name:'Void-Touched Augment Rune',    effect:'+Primaire stat 1 uur.',                      note:'Altijd gebruiken'},
    ],
    en:[
      {type:'flask', name:'Flask of the Blood Knights',  effect:'Significantly increases Agility for 1 hour.', note:'Always active'},
      {type:'pot',   name:'Potion of Withering Vitality', effect:'Large HP restore and temporary HP boost.',   note:'On pull or during large damage spike'},
      {type:'food',  name:'Silvermoon Parade (Feast)',   effect:'+Agility and Stamina via group feast.',      note:'Ask for feast'},
      {type:'food',  name:'Royal Roast',          effect:'Solo food — Agility + Stamina backup.',    note:'Backup if no feast'},
      {type:'rune',  name:'Void-Touched Augment Rune',    effect:'+Primary stat 1 hour.',                     note:'Always use'},
    ]
  },
};
ALL_SPECS.push(SPEC_VENGEANCE_DH);

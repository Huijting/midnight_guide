if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_BALANCE_DRUID = {
  id: 'balance_druid',
  icon: '🌙',
  class: 'Druid',
  spec:   { nl: 'Balance', en: 'Balance', da: 'Balance' },
  role:   'dps',
  armor:  'Leather',
  weapon: { nl: 'Staf of eenhandig + offhand', en: 'Staff or one-hand + offhand', da: 'Stav eller enhånds + offhand' },
  resource: 'Astral Power',
  patch: '1.0',
  color: '#FF7C0A',

  summary: {
    nl: 'Balance Druid (Moonkin/Boomkin) is een sterrenmagie-gebaseerde ranged DPS. Draait om het opbouwen van Astral Power voor Starsurge en het syncen van Celestial Alignment met je DoTs.',
    en: 'Balance Druid (Moonkin/Boomkin) is a stellar magic-based ranged DPS. Revolves around building Astral Power for Starsurge and syncing Celestial Alignment with your DoTs.',
    da: 'Balance Druid (Moonkin/Boomkin) er en stjernemagibaseret ranged DPS. Drejer sig om at opbygge Astral Power til Starsurge og synkronisere Celestial Alignment med dine DoTs.',
  },
  pros: {
    nl: ['Uitstekende AoE via Starfall', 'Sterke sustained DoT schade', 'Goede utility (Typhoon, Ursol\'s Vortex, Rebirth)', 'Kan in nood even healen'],
    en: ['Excellent AoE via Starfall', 'Strong sustained DoT damage', 'Good utility (Typhoon, Ursol\'s Vortex, Rebirth)', 'Can emergency heal in a pinch'],
    da: ['Fremragende AoE via Starfall', 'Stærk vedvarende DoT-skade', 'God utility (Typhoon, Ursol\'s Vortex, Rebirth)', 'Kan nødhele i en knivskarp situation'],
  },
  cons: {
    nl: ['Complex met Eclipse cycling', 'Kwetsbaar bij movement — veel casttime', 'Weinig burst op single target buiten CDs'],
    en: ['Complex with Eclipse cycling', 'Vulnerable during movement — lots of cast time', 'Little burst on single target outside CDs'],
    da: ['Kompleks med Eclipse-cycling', 'Sårbar under bevægelse — megen casttid', 'Lidt burst på single target uden for CDs'],
  },

  cheatsheet: {
    nl: {
      opener: 'Moonfire → Sunfire → Starsurge → Celestial Alignment → Starsurge spam → Wrath/Starfire filler',
      single: 'DoTs actief → Starsurge (50+ AP) → Wrath of Starfire filler op basis van Eclipse',
      aoe:    'DoTs verspreiden → Starfall (50+ AP) → Starfire spam (AoE) → Moonfire/Sunfire refreshen',
      rules: [
        'Moonfire en Sunfire altijd actief op target',
        'Starsurge bij 50+ Astral Power — nooit laten cappten op 100',
        'AoE 3+: Starfall in plaats van Starsurge',
        'Eclipse Solar: Wrath spam. Eclipse Lunar: Starfire spam',
        'Celestial Alignment altijd in burst window met DoTs actief',
      ],
    },
    en: {
      opener: 'Moonfire → Sunfire → Starsurge → Celestial Alignment → Starsurge spam → Wrath/Starfire filler',
      single: 'DoTs active → Starsurge (50+ AP) → Wrath or Starfire filler based on Eclipse',
      aoe:    'Spread DoTs → Starfall (50+ AP) → Starfire spam (AoE) → Refresh Moonfire/Sunfire',
      rules: [
        'Moonfire and Sunfire always active on target',
        'Starsurge at 50+ Astral Power — never cap at 100',
        'AoE 3+: Starfall instead of Starsurge',
        'Eclipse Solar: Wrath spam. Eclipse Lunar: Starfire spam',
        'Celestial Alignment always in burst window with DoTs active',
      ],
    },
    da: {
      opener: 'Moonfire → Sunfire → Starsurge → Celestial Alignment → Starsurge spam → Wrath/Starfire fylder',
      single: 'DoTs aktive → Starsurge (50+ AP) → Wrath eller Starfire fylder baseret på Eclipse',
      aoe:    'Spred DoTs → Starfall (50+ AP) → Starfire-spam (AoE) → Forny Moonfire/Sunfire',
      rules: [
        'Moonfire og Sunfire altid aktiv på målet',
        'Starsurge ved 50+ Astral Power — lad den aldrig capper på 100',
        'AoE 3+: Starfall i stedet for Starsurge',
        'Eclipse Solar: Wrath-spam. Eclipse Lunar: Starfire-spam',
        'Celestial Alignment altid i burst-vindue med aktive DoTs',
      ],
    },
  },

  rotation: {
    nl: {
      apex_tip: '💡 Eclipse verdubbelt effectief je schade op Solar of Lunar spells. Weet altijd in welke Eclipse je zit!',
      opener: [
        { spell: 'Moonfire', why: 'DoT #1 — altijd actief' },
        { spell: 'Sunfire', why: 'DoT #2 — altijd actief' },
        { spell: 'Starsurge', why: 'Astral Power dump voor opener burst' },
        { spell: 'Celestial Alignment', why: 'Grote cooldown — vergroot alles' },
        { spell: 'Starsurge spam', why: 'In CA window — maximale burst' },
      ],
      single: [
        { spell: 'Starsurge', why: 'Bij 50+ AP, altijd prioriteit boven fillers' },
        { spell: 'Moonfire', why: 'Hernieuwen als <5 sec resterend' },
        { spell: 'Sunfire', why: 'Hernieuwen als <5 sec resterend' },
        { spell: 'Wrath', why: 'In Solar Eclipse — filler en AP generatie' },
        { spell: 'Starfire', why: 'In Lunar Eclipse — filler en AP generatie' },
      ],
      aoe: [
        { spell: 'Moonfire + Sunfire verspreiden', why: 'Op alle targets — DoT schade en AP generatie' },
        { spell: 'Starfall', why: '3+ targets: vervangt Starsurge volledig' },
        { spell: 'Starfire', why: 'AoE filler — raakt alles om je heen' },
        { spell: 'Celestial Alignment', why: 'Vergroot Starfall en Starfire enorm' },
      ],
    },
    en: {
      apex_tip: '💡 Eclipse effectively doubles your damage on Solar or Lunar spells. Always know which Eclipse you\'re in!',
      opener: [
        { spell: 'Moonfire', why: 'DoT #1 — always active' },
        { spell: 'Sunfire', why: 'DoT #2 — always active' },
        { spell: 'Starsurge', why: 'Astral Power dump for opener burst' },
        { spell: 'Celestial Alignment', why: 'Major cooldown — amplifies everything' },
        { spell: 'Starsurge spam', why: 'In CA window — maximum burst' },
      ],
      single: [
        { spell: 'Starsurge', why: 'At 50+ AP, always priority over fillers' },
        { spell: 'Moonfire', why: 'Refresh when <5 sec remaining' },
        { spell: 'Sunfire', why: 'Refresh when <5 sec remaining' },
        { spell: 'Wrath', why: 'In Solar Eclipse — filler and AP generation' },
        { spell: 'Starfire', why: 'In Lunar Eclipse — filler and AP generation' },
      ],
      aoe: [
        { spell: 'Spread Moonfire + Sunfire', why: 'On all targets — DoT damage and AP generation' },
        { spell: 'Starfall', why: '3+ targets: fully replaces Starsurge' },
        { spell: 'Starfire', why: 'AoE filler — hits everything around you' },
        { spell: 'Celestial Alignment', why: 'Massively amplifies Starfall and Starfire' },
      ],
    },
    da: {
      apex_tip: '💡 Eclipse fordobler effektivt din skade på Solar- eller Lunar-trylleformularer. Vid altid, hvilken Eclipse du er i!',
      opener: [
        { spell: 'Moonfire', why: 'DoT #1 — altid aktiv' },
        { spell: 'Sunfire', why: 'DoT #2 — altid aktiv' },
        { spell: 'Starsurge', why: 'Astral Power dump til opener burst' },
        { spell: 'Celestial Alignment', why: 'Stor cooldown — forstærker alt' },
        { spell: 'Starsurge-spam', why: 'I CA-vindue — maksimal burst' },
      ],
      single: [
        { spell: 'Starsurge', why: 'Ved 50+ AP, altid prioritet over fyldere' },
        { spell: 'Moonfire', why: 'Forny når <5 sek tilbage' },
        { spell: 'Sunfire', why: 'Forny når <5 sek tilbage' },
        { spell: 'Wrath', why: 'I Solar Eclipse — fylder og AP-generering' },
        { spell: 'Starfire', why: 'I Lunar Eclipse — fylder og AP-generering' },
      ],
      aoe: [
        { spell: 'Spred Moonfire + Sunfire', why: 'På alle mål — DoT-skade og AP-generering' },
        { spell: 'Starfall', why: '3+ mål: erstatter fuldstændig Starsurge' },
        { spell: 'Starfire', why: 'AoE-fylder — rammer alt omkring dig' },
        { spell: 'Celestial Alignment', why: 'Forstærker massivt Starfall og Starfire' },
      ],
    },
  },

  stats: {
    nl: {
      tip: 'Haste en Crit zijn beide erg waardevol — ze verkorten casts én verhogen Astral Power generatie.',
      list: [
        { rank:1, stat:'Intellect',       bars:5, note:'Primaire stat' },
        { rank:2, stat:'Haste',           bars:4, note:'Snellere casts = meer AP = meer Starsurge' },
        { rank:3, stat:'Critical Strike', bars:4, note:'Verhoogt burst schade in CA window' },
        { rank:4, stat:'Mastery',         bars:2, note:'Verhoogt Starfall en Starsurge schade' },
        { rank:5, stat:'Versatility',     bars:1, note:'Laagste prioriteit' },
      ],
    },
    en: {
      tip: 'Haste and Crit are both very valuable — they shorten casts AND increase Astral Power generation.',
      list: [
        { rank:1, stat:'Intellect',       bars:5, note:'Primary stat' },
        { rank:2, stat:'Haste',           bars:4, note:'Faster casts = more AP = more Starsurge' },
        { rank:3, stat:'Critical Strike', bars:4, note:'Increases burst damage in CA window' },
        { rank:4, stat:'Mastery',         bars:2, note:'Increases Starfall and Starsurge damage' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lowest priority' },
      ],
    },
    da: {
      tip: 'Haste og Crit er begge meget værdifulde — de forkorter casts OG øger Astral Power-generering.',
      list: [
        { rank:1, stat:'Intellect',       bars:5, note:'Primær stat' },
        { rank:2, stat:'Haste',           bars:4, note:'Hurtigere casts = mere AP = mere Starsurge' },
        { rank:3, stat:'Critical Strike', bars:4, note:'Øger burst-skade i CA-vindue' },
        { rank:4, stat:'Mastery',         bars:2, note:'Øger Starfall og Starsurge-skade' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lavest prioritet' },
      ],
    },
  },

  cooldowns: {
    nl: [
      { spell:'Celestial Alignment', cd:'3 min',  effect:'Beide Eclipses actief — alle schade verhoogd', when:'Op pull bij boss, altijd met DoTs actief' },
      { spell:'Starsurge',           cd:'Astral Power', effect:'Sterke single target burst', when:'50+ AP, altijd voor fillers' },
      { spell:'Starfall',            cd:'Astral Power', effect:'AoE regen rondom jou 8 sec', when:'3+ targets — vervangt Starsurge volledig' },
      { spell:'Fury of Elune',       cd:'1 min',  effect:'Krachtige AoE channel + AP generatie', when:'AoE packs of extra ST cooldown' },
      { spell:'Convoke the Spirits', cd:'2 min',  effect:'12 willekeurige Druid spells in 4 sec', when:'In Celestial Alignment window voor maximum effect' },
    ],
    en: [
      { spell:'Celestial Alignment', cd:'3 min',  effect:'Both Eclipses active — all damage increased', when:'On pull at boss, always with DoTs active' },
      { spell:'Starsurge',           cd:'Astral Power', effect:'Strong single target burst', when:'50+ AP, always before fillers' },
      { spell:'Starfall',            cd:'Astral Power', effect:'AoE rain around you 8 sec', when:'3+ targets — fully replaces Starsurge' },
      { spell:'Fury of Elune',       cd:'1 min',  effect:'Powerful AoE channel + AP generation', when:'AoE packs or extra ST cooldown' },
      { spell:'Convoke the Spirits', cd:'2 min',  effect:'12 random Druid spells in 4 sec', when:'In Celestial Alignment window for maximum effect' },
    ],
    da: [
      { spell:'Celestial Alignment', cd:'3 min',  effect:'Begge Eclipses aktive — al skade øget', when:'På pull ved boss, altid med aktive DoTs' },
      { spell:'Starsurge',           cd:'Astral Power', effect:'Stærk single target burst', when:'50+ AP, altid før fyldere' },
      { spell:'Starfall',            cd:'Astral Power', effect:'AoE-regn omkring dig i 8 sek', when:'3+ mål — erstatter fuldstændig Starsurge' },
      { spell:'Fury of Elune',       cd:'1 min',  effect:'Kraftfuld AoE-channel + AP-generering', when:'AoE-grupper eller ekstra ST-cooldown' },
      { spell:'Convoke the Spirits', cd:'2 min',  effect:'12 tilfældige Druid-trylleformularer i 4 sek', when:'I Celestial Alignment-vindue for maksimal effekt' },
    ],
  },

  utility: {
    nl: [
      { spell:'Rebirth',          type:'Rez',       note:'In-combat rez — uniek voor Druid, enorm waardevol in M+' },
      { spell:'Typhoon',          type:'Knockback',  note:'Knockback op alle vijanden voor je — gebruik voor interrupt of groeperen' },
      { spell:'Ursol\'s Vortex',  type:'AoE Root',  note:'Trekt vijanden naar het midden en root ze kort' },
      { spell:'Innervate',        type:'Healer',    note:'Geeft healer gratis mana 10 sec — gebruik op drukke moments' },
      { spell:'Barkskin',         type:'Defensief', note:'20% schade reductie 12 sec — persoonlijke cooldown' },
    ],
    en: [
      { spell:'Rebirth',          type:'Rez',       note:'In-combat rez — unique to Druid, enormously valuable in M+' },
      { spell:'Typhoon',          type:'Knockback',  note:'Knockback all enemies in front — use to interrupt or group' },
      { spell:'Ursol\'s Vortex',  type:'AoE Root',  note:'Pulls enemies to center and briefly roots them' },
      { spell:'Innervate',        type:'Healer',    note:'Gives healer free mana 10 sec — use during busy moments' },
      { spell:'Barkskin',         type:'Defensive', note:'20% damage reduction 12 sec — personal cooldown' },
    ],
    da: [
      { spell:'Rebirth',          type:'Genoplivning', note:'In-combat genoplivning — unikt for Druid, enormt værdifuldt i M+' },
      { spell:'Typhoon',          type:'Knockback',  note:'Kast alle fjender foran dig tilbage — brug til interrupt eller samling' },
      { spell:'Ursol\'s Vortex',  type:'AoE Root',  note:'Trækker fjender til midten og rodfæster dem kortvarigt' },
      { spell:'Innervate',        type:'Healer',    note:'Giver healeren gratis mana i 10 sek — brug i travle øjeblikke' },
      { spell:'Barkskin',         type:'Defensiv',  note:'20% skadereduktion i 12 sek — personlig cooldown' },
    ],
  },

  tips: {
    nl: [
      { icon:'🌙', title:'Rebirth = levensreddend', text:'Als Balance Druid heb je een in-combat rez. Als iemand sterft in M+, check altijd of je Rebirth beschikbaar hebt — het kan een key saven.' },
      { icon:'⭐', title:'Eclipse altijd bewaken', text:'Kijk altijd welke Eclipse actief is. Solar = Wrath spam. Lunar = Starfire spam. Verkeerde filler = 30% minder schade.' },
      { icon:'🌪️', title:'Typhoon voor interrupts', text:'Typhoon knockt mobs terug en breekt hun cast. In M+ gebruik het strategisch om gevaarlijke casters te stoppen of mobs te groeperen.' },
      { icon:'✨', title:'Innervate op de healer', text:'Innervate is niet voor jezelf — geef het aan de healer op drukke moments of bij lange fights. Je speelt een ondersteunende rol ook als DPS.' },
      { icon:'☀️', title:'Starsurge vs Starfall', text:'1-2 targets: Starsurge. 3+ targets: Starfall altijd. Starfall doet op 4+ targets aanzienlijk meer schade dan meerdere Starsurges.' },
    ],
    en: [
      { icon:'🌙', title:'Rebirth = lifesaver', text:'As Balance Druid you have an in-combat rez. If someone dies in M+, always check if Rebirth is available — it can save a key.' },
      { icon:'⭐', title:'Always track Eclipse', text:'Always watch which Eclipse is active. Solar = Wrath spam. Lunar = Starfire spam. Wrong filler = 30% less damage.' },
      { icon:'🌪️', title:'Typhoon for interrupts', text:'Typhoon knocks mobs back and breaks their cast. In M+ use it strategically to stop dangerous casters or group mobs.' },
      { icon:'✨', title:'Innervate the healer', text:'Innervate is not for yourself — give it to the healer during busy moments or long fights. You play a support role even as DPS.' },
      { icon:'☀️', title:'Starsurge vs Starfall', text:'1-2 targets: Starsurge. 3+ targets: Starfall always. Starfall does significantly more damage on 4+ targets than multiple Starsurges.' },
    ],
    da: [
      { icon:'🌙', title:'Rebirth = livredder', text:'Som Balance Druid har du en in-combat genoplivning. Hvis nogen dør i M+, tjek altid om Rebirth er tilgængeligt — det kan redde en nøgle.' },
      { icon:'⭐', title:'Følg altid Eclipse', text:'Se altid hvilken Eclipse der er aktiv. Solar = Wrath-spam. Lunar = Starfire-spam. Forkert fylder = 30% mindre skade.' },
      { icon:'🌪️', title:'Typhoon til interrupts', text:'Typhoon kaster fjender tilbage og afbryder deres cast. I M+ brug det strategisk til at stoppe farlige castere eller samle fjender.' },
      { icon:'✨', title:'Innervate til healeren', text:'Innervate er ikke til dig selv — giv det til healeren i travle øjeblikke eller lange kampe. Du spiller en støttende rolle selv som DPS.' },
      { icon:'☀️', title:'Starsurge vs Starfall', text:'1-2 mål: Starsurge. 3+ mål: Starfall altid. Starfall gør markant mere skade på 4+ mål end flere Starsurges.' },
    ],
  },

  macros: {
    nl: [
      { name:'Celestial Alignment + Convoke', code:'/cast Celestial Alignment\n/cast Convoke the Spirits', note:'Maximum burst opener — beide CDs samen in één GCD.' },
      { name:'Typhoon op cursor positie', code:'/cast [@cursor] Typhoon', note:'Knockback precies op de positie van je muis.' },
      { name:'Rebirth op mouseover', code:'/cast [@mouseover] Rebirth', note:'Rez een gevallen groepslid door over ze te hoveren.' },
    ],
    en: [
      { name:'Celestial Alignment + Convoke', code:'/cast Celestial Alignment\n/cast Convoke the Spirits', note:'Maximum burst opener — both CDs together in one GCD.' },
      { name:'Typhoon at cursor position', code:'/cast [@cursor] Typhoon', note:'Knockback exactly at your mouse position.' },
      { name:'Rebirth on mouseover', code:'/cast [@mouseover] Rebirth', note:'Rez a fallen group member by hovering over them.' },
    ],
    da: [
      { name:'Celestial Alignment + Convoke', code:'/cast Celestial Alignment\n/cast Convoke the Spirits', note:'Maksimalt burst-opener — begge CDs sammen i én GCD.' },
      { name:'Typhoon ved markørposition', code:'/cast [@cursor] Typhoon', note:'Knockback præcist ved din museposition.' },
      { name:'Rebirth på mouseover', code:'/cast [@mouseover] Rebirth', note:'Genopliv et faldet gruppemedlem ved at holde musen over dem.' },
    ],
  },

  resource_info: {
    nl: {
      intro: 'Balance gebruikt Astral Power (0-100). AP bouwt op via fillers en DoT ticks, en geef je uit via Starsurge (ST) of Starfall (AoE).',
      generate: [
        'Wrath — 8 AP per cast (Solar Eclipse)',
        'Starfire — 12 AP per cast (Lunar Eclipse)',
        'Moonfire ticks — kleine hoeveelheid passief',
        'Fury of Elune — grote AP generatie tijdens channel',
      ],
      spend: [
        'Starsurge (40 AP) — single target, max 1-2 targets',
        'Starfall (50 AP) — AoE, altijd bij 3+ targets',
      ],
      pet_tip: '💡 Nooit op 100 AP zitten — dump altijd bij 50+ met Starsurge of Starfall!',
      pets: [],
    },
    en: {
      intro: 'Balance uses Astral Power (0-100). AP builds via fillers and DoT ticks, and is spent via Starsurge (ST) or Starfall (AoE).',
      generate: [
        'Wrath — 8 AP per cast (Solar Eclipse)',
        'Starfire — 12 AP per cast (Lunar Eclipse)',
        'Moonfire ticks — small passive amount',
        'Fury of Elune — large AP generation during channel',
      ],
      spend: [
        'Starsurge (40 AP) — single target, max 1-2 targets',
        'Starfall (50 AP) — AoE, always at 3+ targets',
      ],
      pet_tip: '💡 Never sit at 100 AP — always dump at 50+ with Starsurge or Starfall!',
      pets: [],
    },
    da: {
      intro: 'Balance bruger Astral Power (0-100). AP opbygges via fyldere og DoT-ticks og bruges via Starsurge (ST) eller Starfall (AoE).',
      generate: [
        'Wrath — 8 AP per cast (Solar Eclipse)',
        'Starfire — 12 AP per cast (Lunar Eclipse)',
        'Moonfire-ticks — lille passiv mængde',
        'Fury of Elune — stor AP-generering under channel',
      ],
      spend: [
        'Starsurge (40 AP) — single target, maks 1-2 mål',
        'Starfall (50 AP) — AoE, altid ved 3+ mål',
      ],
      pet_tip: '💡 Sid aldrig på 100 AP — dump altid ved 50+ med Starsurge eller Starfall!',
      pets: [],
    },
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Verhoogt Intellect significant voor 1 uur.',   note:'Altijd actief in M+ en raid' },
      { type:'pot',    name:'Potion of Witchcraft',        effect:'Grote Intellect boost 25 sec.',                note:'Gebruik in Celestial Alignment window' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Intellect en Stamina via groepsfeast.',       note:'Feast vragen aan tank/healer' },
      { type:'food',   name:'Aromatic Seafood Platter',    effect:'Solo food — hoge Intellect bonus.',            note:'Backup als geen feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primaire stat 1 uur.',                        note:'Altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Significantly increases Intellect for 1 hour.', note:'Always active in M+ and raid' },
      { type:'pot',    name:'Potion of Witchcraft',        effect:'Large Intellect boost 25 sec.',               note:'Use in Celestial Alignment window' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Intellect and Stamina via group feast.',     note:'Ask tank/healer for feast' },
      { type:'food',   name:'Aromatic Seafood Platter',    effect:'Solo food — high Intellect bonus.',           note:'Backup if no feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primary stat 1 hour.',                       note:'Always use' },
    ],
    da: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Øger Intellect markant i 1 time.',             note:'Altid aktiv i M+ og raid' },
      { type:'pot',    name:'Potion of Witchcraft',        effect:'Stor Intellect-boost i 25 sek.',              note:'Brug i Celestial Alignment-vindue' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Intellect og Stamina via gruppefeast.',      note:'Bed tank/healer om feast' },
      { type:'food',   name:'Aromatic Seafood Platter',    effect:'Solo-mad — høj Intellect-bonus.',             note:'Backup hvis ingen feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primær stat 1 time.',                        note:'Brug altid' },
    ],
  },
};

ALL_SPECS.push(SPEC_BALANCE_DRUID);

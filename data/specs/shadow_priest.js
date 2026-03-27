if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_SHADOW_PRIEST = {
  id: 'shadow_priest',
  icon: '🌑',
  class: 'Priest',
  spec:   { nl: 'Shadow', en: 'Shadow'},
  role:   'dps',
  armor:  'Cloth',
  weapon: { nl: 'Staff or one-hand + offhand', en: 'Staff or one-hand + offhand'},
  resource: 'Insanity',
  patch: '1.0',
  color: '#ABCDEF',

  summary: {
    nl: 'Shadow Priest is een DoT-gebaseerde ranged DPS die Insanity opbouwt voor Voidform. Draait om het actief houden van drie DoTs en het maximaliseren van Voidform uptime.',
    en: 'Shadow Priest is a DoT-based ranged DPS that builds Insanity for Voidform. Revolves around keeping three DoTs active and maximizing Voidform uptime.'
  },
  pros: {
    nl: ['Uitstekende sustained schade via DoTs', 'Sterke AoE via Psychic Link en Devouring Plague', 'Goede utility (Mass Dispel, Vampiric Embrace)', 'Zeer hoge plafond voor gevorderde spelers'],
    en: ['Excellent sustained damage via DoTs', 'Strong AoE via Psychic Link and Devouring Plague', 'Good utility (Mass Dispel, Vampiric Embrace)', 'Very high ceiling for advanced players']
  },
  cons: {
    nl: ['Complex DoT management vereist oefening', 'Lage burst als DoTs net zijn opgezet', 'Kwetsbaar bij movement — DoTs tikken door maar casting stopt'],
    en: ['Complex DoT management requires practice', 'Low burst when DoTs have just been set up', 'Vulnerable during movement — DoTs tick but casting stops']
  },

  cheatsheet: {
    nl: {
      opener: 'Vampiric Touch → Shadow Word: Pain → Devouring Plague → Mind Blast → Void Eruption (→ Voidform)',
      single: '3 DoTs actief houden → Devouring Plague bij 50+ Insanity → Mind Blast op CD → Mind Flay filler',
      aoe:    'DoTs op alle targets via VT → Devouring Plague (Psychic Link = AoE) → Searing Nightmare 5+ targets',
      rules: [
        'Vampiric Touch en Shadow Word: Pain altijd actief op target',
        'Devouring Plague bij 50+ Insanity — nooit laten cappten',
        'Mind Blast altijd op cooldown gebruiken',
        'Voidform: zo snel mogelijk activeren als Insanity vol',
        'Nooit Vampiric Touch of SW:Pain laten verlopen',
      ],
    },
    en: {
      opener: 'Vampiric Touch → Shadow Word: Pain → Devouring Plague → Mind Blast → Void Eruption (→ Voidform)',
      single: 'Keep 3 DoTs active → Devouring Plague at 50+ Insanity → Mind Blast on CD → Mind Flay filler',
      aoe:    'DoTs on all targets via VT → Devouring Plague (Psychic Link = AoE) → Searing Nightmare 5+ targets',
      rules: [
        'Vampiric Touch and Shadow Word: Pain always active on target',
        'Devouring Plague at 50+ Insanity — never let it cap',
        'Mind Blast always use on cooldown',
        'Voidform: activate as fast as possible when Insanity is full',
        'Never let Vampiric Touch or SW:Pain fall off',
      ],
    }
  },

  rotation: {
    nl: {
      apex_tip: '💡 Voidform verhoogt al je schade. Bouw Insanity snel op en blijf zo lang mogelijk in Voidform!',
      opener: [
        { spell: 'Vampiric Touch', why: 'DoT #1 — opent ook Insanity generatie' },
        { spell: 'Shadow Word: Pain', why: 'DoT #2 — instant cast' },
        { spell: 'Devouring Plague', why: 'DoT #3 + grote directe schade' },
        { spell: 'Mind Blast', why: 'Grote Insanity generator' },
        { spell: 'Void Eruption', why: 'Activeer Voidform zodra Insanity vol' },
      ],
      single: [
        { spell: 'Devouring Plague', why: 'Bij 50+ Insanity — altijd prioriteit' },
        { spell: 'Mind Blast', why: 'Grootste Insanity generator, altijd op CD' },
        { spell: 'Vampiric Touch', why: 'Hernieuwen als <5 sec resterend' },
        { spell: 'Shadow Word: Pain', why: 'Hernieuwen als verlopen' },
        { spell: 'Mind Flay', why: 'Filler als niks anders beschikbaar' },
      ],
      aoe: [
        { spell: 'Vampiric Touch', why: 'Op elk target — Psychic Link verbindt ze' },
        { spell: 'Devouring Plague', why: 'Via Psychic Link: raakt alle linked targets' },
        { spell: 'Searing Nightmare', why: '5+ targets: instant AoE DoT op alle nabije vijanden' },
        { spell: 'Mind Sear', why: 'Channeled AoE filler op grote packs' },
      ],
    },
    en: {
      apex_tip: '💡 Voidform increases all your damage. Build Insanity fast and stay in Voidform as long as possible!',
      opener: [
        { spell: 'Vampiric Touch', why: 'DoT #1 — also opens Insanity generation' },
        { spell: 'Shadow Word: Pain', why: 'DoT #2 — instant cast' },
        { spell: 'Devouring Plague', why: 'DoT #3 + major direct damage' },
        { spell: 'Mind Blast', why: 'Major Insanity generator' },
        { spell: 'Void Eruption', why: 'Activate Voidform when Insanity is full' },
      ],
      single: [
        { spell: 'Devouring Plague', why: 'At 50+ Insanity — always priority' },
        { spell: 'Mind Blast', why: 'Biggest Insanity generator, always on CD' },
        { spell: 'Vampiric Touch', why: 'Refresh when <5 sec remaining' },
        { spell: 'Shadow Word: Pain', why: 'Refresh when expired' },
        { spell: 'Mind Flay', why: 'Filler when nothing else available' },
      ],
      aoe: [
        { spell: 'Vampiric Touch', why: 'On each target — Psychic Link connects them' },
        { spell: 'Devouring Plague', why: 'Via Psychic Link: hits all linked targets' },
        { spell: 'Searing Nightmare', why: '5+ targets: instant AoE DoT on all nearby enemies' },
        { spell: 'Mind Sear', why: 'Channeled AoE filler on large packs' },
      ],
    }
  },

  stats: {
    nl: {
      tip: 'Haste is de belangrijkste secondary stat — meer ticks op je DoTs = meer Insanity = meer Voidform.',
      list: [
        { rank:1, stat:'Intellect',       bars:5, note:'Primaire stat' },
        { rank:2, stat:'Haste',           bars:5, note:'Meer DoT ticks + snellere Insanity opbouw' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Verhoogt burst in Voidform' },
        { rank:4, stat:'Mastery',         bars:2, note:'Verhoogt shadow schade' },
        { rank:5, stat:'Versatility',     bars:1, note:'Laagste prioriteit' },
      ],
    },
    en: {
      tip: 'Haste is the most important secondary stat — more DoT ticks = more Insanity = more Voidform.',
      list: [
        { rank:1, stat:'Intellect',       bars:5, note:'Primary stat' },
        { rank:2, stat:'Haste',           bars:5, note:'More DoT ticks + faster Insanity buildup' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Increases burst in Voidform' },
        { rank:4, stat:'Mastery',         bars:2, note:'Increases shadow damage' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lowest priority' },
      ],
    }
  },

  cooldowns: {
    nl: [
      { spell:'Void Eruption',       cd:'Insanity', effect:'Activeert Voidform — verhoogt alle schade', when:'Zodra Insanity vol — nooit wachten' },
      { spell:'Shadowfiend',         cd:'3 min',    effect:'Pet dat Insanity genereerd en schade doet', when:'Op pull bij boss, samen met Voidform' },
      { spell:'Power Infusion',      cd:'2 min',    effect:'Haste + schade boost 20 sec', when:'In Voidform voor maximaal effect' },
      { spell:'Silence',             cd:'45 sec',   effect:'Silence + interrupt 5 sec', when:'Gevaarlijke caster in M+' },
      { spell:'Dispersion',          cd:'2 min',    effect:'90% schade reductie 6 sec', when:'Noodbescherming bij grote mechanic' },
    ],
    en: [
      { spell:'Void Eruption',       cd:'Insanity', effect:'Activates Voidform — increases all damage', when:'As soon as Insanity is full — never wait' },
      { spell:'Shadowfiend',         cd:'3 min',    effect:'Pet that generates Insanity and deals damage', when:'On pull at boss, together with Voidform' },
      { spell:'Power Infusion',      cd:'2 min',    effect:'Haste + damage boost 20 sec', when:'In Voidform for maximum effect' },
      { spell:'Silence',             cd:'45 sec',   effect:'Silence + interrupt 5 sec', when:'Dangerous caster in M+' },
      { spell:'Dispersion',          cd:'2 min',    effect:'90% damage reduction 6 sec', when:'Emergency defense during major mechanic' },
    ]
  },

  utility: {
    nl: [
      { spell:'Mass Dispel',        type:'Dispel',    note:'Verwijdert alle Magic buffs/debuffs van groep — uniek voor Priest' },
      { spell:'Vampiric Embrace',   type:'Healing',   note:'Passieve groepsheling op basis van jouw schade' },
      { spell:'Fade',               type:'Defensief', note:'Drops threat tijdelijk — ook bruikbaar voor sommige mechanics' },
      { spell:'Psychic Scream',     type:'CC',        note:'Fear tot 5 vijanden 8 sec' },
      { spell:'Leap of Faith',      type:'Rescue',    note:'Trek een groepslid naar jou — ideaal bij mechanic fail' },
    ],
    en: [
      { spell:'Mass Dispel',        type:'Dispel',    note:'Removes all Magic buffs/debuffs from group — unique to Priest' },
      { spell:'Vampiric Embrace',   type:'Healing',   note:'Passive group healing based on your damage' },
      { spell:'Fade',               type:'Defensive', note:'Temporarily drops threat — also usable for some mechanics' },
      { spell:'Psychic Scream',     type:'CC',        note:'Fear up to 5 enemies for 8 sec' },
      { spell:'Leap of Faith',      type:'Rescue',    note:'Pull a group member to you — ideal when mechanic fails' },
    ]
  },

  tips: {
    nl: [
      { icon:'🌑', title:'DoTs nooit laten verlopen', text:'Als Vampiric Touch of SW:Pain verloopt verlies je Insanity generatie. Hernieuwen bij <5 sec resterend, nooit laten afvallen.' },
      { icon:'⚡', title:'Psychic Link = gratis AoE', text:'Als alle targets Vampiric Touch hebben, raken je single-target spells via Psychic Link ook de rest. Verspreid VT altijd in M+ packs.' },
      { icon:'🔵', title:'Dispersion = noodknop', text:'Dispersion geeft je 90% schade reductie — gebruik het bij grote mechanica of als je bijna dood gaat, niet als voorzorg.' },
      { icon:'🤲', title:'Leap of Faith', text:'Leap of Faith kan een teamlid uit gevaar redden. Communiceer met je team wanneer je het gaat gebruiken — het kan verrassend zijn!' },
      { icon:'💨', title:'Fade voor mechanics', text:'Sommige mechanica target de speler met hoogste threat. Fade kan je helpen om specifieke debuffs of targeting mechanics te ontwijken.' },
    ],
    en: [
      { icon:'🌑', title:'Never let DoTs fall off', text:'If Vampiric Touch or SW:Pain expires you lose Insanity generation. Refresh at <5 sec remaining, never let them fall off.' },
      { icon:'⚡', title:'Psychic Link = free AoE', text:'If all targets have Vampiric Touch, your single-target spells via Psychic Link also hit the rest. Always spread VT in M+ packs.' },
      { icon:'🔵', title:'Dispersion = emergency button', text:'Dispersion gives you 90% damage reduction — use it during major mechanics or when nearly dying, not as precaution.' },
      { icon:'🤲', title:'Leap of Faith', text:'Leap of Faith can save a teammate from danger. Communicate with your team when you\'re going to use it — it can be surprising!' },
      { icon:'💨', title:'Fade for mechanics', text:'Some mechanics target the player with highest threat. Fade can help you avoid specific debuffs or targeting mechanics.' },
    ]
  },

  macros: {
    nl: [
      { name:'Shadowfiend + Power Infusion', code:'/cast Shadowfiend\n/cast Power Infusion', note:'Gooit beide op pull in Voidform — maximale burst window.' },
      { name:'Vampiric Touch op mouseover', code:'/cast [@mouseover,harm][] Vampiric Touch', note:'Snel DoTs verspreiden in M+ zonder target te wisselen.' },
      { name:'Leap of Faith rescue', code:'/cast [@mouseover] Leap of Faith', note:'Trek een groepslid naar jou door over ze te hoveren.' },
    ],
    en: [
      { name:'Shadowfiend + Power Infusion', code:'/cast Shadowfiend\n/cast Power Infusion', note:'Casts both on pull in Voidform — maximum burst window.' },
      { name:'Vampiric Touch on mouseover', code:'/cast [@mouseover,harm][] Vampiric Touch', note:'Quickly spread DoTs in M+ without switching targets.' },
      { name:'Leap of Faith rescue', code:'/cast [@mouseover] Leap of Faith', note:'Pull a group member to you by hovering over them.' },
    ]
  },

  resource_info: {
    nl: {
      intro: 'Shadow gebruikt Insanity (0-100). Insanity bouwt op via abilities en verliest je snel als je Voidform verlaat. Doel: zo snel mogelijk Voidform activeren.',
      generate: [
        'Mind Blast — grootste Insanity generator',
        'Devouring Plague — genereert Insanity bij casten',
        'Vampiric Touch ticks genereren Insanity passief',
        'Shadowfiend — genereert grote hoeveelheid Insanity',
      ],
      spend: [
        'Void Eruption (100 Insanity) — activeert Voidform',
        'Devouring Plague (50 Insanity) — krachtigste DoT',
      ],
      pet_tip: '💡 In Voidform draint Insanity automatisch — je schade houdt het op peil. Verlaat Voidform zo min mogelijk!',
      pets: [],
    },
    en: {
      intro: 'Shadow uses Insanity (0-100). Insanity builds up through abilities and drains quickly when you leave Voidform. Goal: activate Voidform as quickly as possible.',
      generate: [
        'Mind Blast — biggest Insanity generator',
        'Devouring Plague — generates Insanity on cast',
        'Vampiric Touch ticks passively generate Insanity',
        'Shadowfiend — generates large amount of Insanity',
      ],
      spend: [
        'Void Eruption (100 Insanity) — activates Voidform',
        'Devouring Plague (50 Insanity) — most powerful DoT',
      ],
      pet_tip: '💡 In Voidform Insanity drains automatically — your damage keeps it up. Leave Voidform as little as possible!',
      pets: [],
    }
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Magisters',  effect:'Verhoogt Intellect significant voor 1 uur.',   note:'Altijd actief in M+ en raid' },
      { type:'pot',    name:'Potion of Recklessness',        effect:'Grote Intellect boost 25 sec.',                note:'Gebruik in Voidform voor maximaal effect' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Intellect en Stamina via groepsfeast.',       note:'Feast vragen aan tank/healer' },
      { type:'food',   name:'Royal Roast',    effect:'Solo food — hoge Intellect bonus.',            note:'Backup als geen feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primaire stat 1 uur.',                        note:'Altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Magisters',  effect:'Significantly increases Intellect for 1 hour.', note:'Always active in M+ and raid' },
      { type:'pot',    name:'Potion of Recklessness',        effect:'Large Intellect boost 25 sec.',               note:'Use in Voidform for maximum effect' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Intellect and Stamina via group feast.',     note:'Ask tank/healer for feast' },
      { type:'food',   name:'Royal Roast',    effect:'Solo food — high Intellect bonus.',           note:'Backup if no feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primary stat 1 hour.',                       note:'Always use' },
    ]
  },
};

ALL_SPECS.push(SPEC_SHADOW_PRIEST);

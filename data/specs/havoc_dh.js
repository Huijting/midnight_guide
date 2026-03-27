if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_HAVOC_DH = {
  id: 'havoc_dh',
  icon: '😈',
  class: 'Demon Hunter',
  spec:   { nl: 'Havoc', en: 'Havoc'},
  role:   'melee',
  armor:  'Leather',
  weapon: { nl: 'Two Warglaives', en: 'Two Warglaives'},
  resource: 'Fury',
  patch: '1.0',
  color: '#A330C9',

  summary: {
    nl: 'Havoc Demon Hunter is een razendsnelle melee DPS met hoge mobiliteit en krachtige burst. Draait om Eye Beam als grote cooldown en Blur voor defensie.',
    en: 'Havoc Demon Hunter is a blazing-fast melee DPS with high mobility and powerful burst. Revolves around Eye Beam as major cooldown and Blur for defense.'
  },
  pros: {
    nl: ['Extreem hoge mobiliteit — Fel Rush, Vengeful Retreat, Double Jump', 'Sterke burst schade', 'Goede overleving met Blur', 'Eenvoudige rotatie om te leren'],
    en: ['Extremely high mobility — Fel Rush, Vengeful Retreat, Double Jump', 'Strong burst damage', 'Good survivability with Blur', 'Simple rotation to learn']
  },
  cons: {
    nl: ['Fury management is kritisch', 'Kwetsbaar als Blur op cooldown is', 'Minder sterke sustained schade buiten burst'],
    en: ['Fury management is critical', 'Vulnerable when Blur is on cooldown', 'Weaker sustained damage outside burst']
  },

  cheatsheet: {
    nl: {
      opener: 'Metamorphosis → Eye Beam → Blade Dance → Chaos Strike spam → Glaive Tempest',
      single: 'Eye Beam (CD) → Blade Dance (CD) → Chaos Strike (Fury dump) → Demons Bite (Fury gen)',
      aoe:    'Metamorphosis → Eye Beam → Blade Dance → Glaive Tempest → Chaos Strike cleave',
      rules: [
        'Eye Beam altijd gebruiken zodra beschikbaar — grootste schadeknop',
        'Blade Dance heeft prioriteit boven Chaos Strike',
        'Demons Bite om Fury te genereren als niks procs',
        'Blur direct activeren bij grote mechanic of lage HP',
        'Metamorphosis voor boss pull of grote AoE packs',
      ],
    },
    en: {
      opener: 'Metamorphosis → Eye Beam → Blade Dance → Chaos Strike spam → Glaive Tempest',
      single: 'Eye Beam (CD) → Blade Dance (CD) → Chaos Strike (Fury dump) → Demons Bite (Fury gen)',
      aoe:    'Metamorphosis → Eye Beam → Blade Dance → Glaive Tempest → Chaos Strike cleave',
      rules: [
        'Eye Beam always use when available — biggest damage button',
        'Blade Dance has priority over Chaos Strike',
        'Demons Bite to generate Fury when nothing procs',
        'Activate Blur immediately during major mechanic or low HP',
        'Metamorphosis for boss pull or large AoE packs',
      ],
    }
  },

  rotation: {
    nl: {
      apex_tip: '💡 Eye Beam + Metamorphosis = je burst venster. Alles draait om het maximaliseren van schade in deze windows!',
      opener: [
        { spell: 'Metamorphosis', why: 'Grote cooldown — vergroot alle schade' },
        { spell: 'Eye Beam', why: 'Grootste schadeknop, altijd in Meta venster' },
        { spell: 'Blade Dance', why: 'AoE + single target cleave' },
        { spell: 'Chaos Strike', why: 'Fury dump, heeft kans op refund' },
        { spell: 'Glaive Tempest', why: 'AoE cooldown, sterk op meerdere targets' },
      ],
      single: [
        { spell: 'Eye Beam', why: 'Elke 30 sec — altijd direct gebruiken' },
        { spell: 'Blade Dance', why: 'Elke 9 sec — hogere prioriteit dan Chaos Strike' },
        { spell: 'Chaos Strike', why: 'Fury dump, kans op gratis Fury terug' },
        { spell: 'Immolation Aura', why: 'Passieve Fury generatie + kleine schade' },
        { spell: 'Demons Bite', why: 'Fury generator als niks anders beschikbaar' },
      ],
      aoe: [
        { spell: 'Metamorphosis', why: 'Vergroot alle AoE schade' },
        { spell: 'Eye Beam', why: 'Channeled AoE — raakt alles in lijn' },
        { spell: 'Blade Dance', why: 'Raakt alle nabije vijanden' },
        { spell: 'Glaive Tempest', why: '2 sec AoE burst rondom jou' },
        { spell: 'Chaos Strike', why: 'Cleave op nearby targets via talent' },
      ],
    },
    en: {
      apex_tip: '💡 Eye Beam + Metamorphosis = your burst windows. Everything revolves around maximizing damage in these windows!',
      opener: [
        { spell: 'Metamorphosis', why: 'Major cooldown — increases all damage' },
        { spell: 'Eye Beam', why: 'Biggest damage button, always in Meta window' },
        { spell: 'Blade Dance', why: 'AoE + single target cleave' },
        { spell: 'Chaos Strike', why: 'Fury dump, chance for refund' },
        { spell: 'Glaive Tempest', why: 'AoE cooldown, strong on multiple targets' },
      ],
      single: [
        { spell: 'Eye Beam', why: 'Every 30 sec — always use immediately' },
        { spell: 'Blade Dance', why: 'Every 9 sec — higher priority than Chaos Strike' },
        { spell: 'Chaos Strike', why: 'Fury dump, chance to get free Fury back' },
        { spell: 'Immolation Aura', why: 'Passive Fury generation + minor damage' },
        { spell: 'Demons Bite', why: 'Fury generator when nothing else available' },
      ],
      aoe: [
        { spell: 'Metamorphosis', why: 'Increases all AoE damage' },
        { spell: 'Eye Beam', why: 'Channeled AoE — hits everything in line' },
        { spell: 'Blade Dance', why: 'Hits all nearby enemies' },
        { spell: 'Glaive Tempest', why: '2 sec AoE burst around you' },
        { spell: 'Chaos Strike', why: 'Cleave on nearby targets via talent' },
      ],
    }
  },

  stats: {
    nl: {
      tip: 'Agility is je primaire stat. Haste verlaagt de cooldown van Eye Beam — erg waardevol.',
      list: [
        { rank:1, stat:'Agility',         bars:5, note:'Primaire stat — altijd maximaliseren' },
        { rank:2, stat:'Haste',           bars:4, note:'Verlaagt Eye Beam en Blade Dance CD' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Vergroot burst schade vensters' },
        { rank:4, stat:'Versatility',     bars:2, note:'Extra schade én overleving' },
        { rank:5, stat:'Mastery',         bars:2, note:'Verhoogt Chaos schade' },
      ],
    },
    en: {
      tip: 'Agility is your primary stat. Haste reduces Eye Beam cooldown — very valuable.',
      list: [
        { rank:1, stat:'Agility',         bars:5, note:'Primary stat — always maximize' },
        { rank:2, stat:'Haste',           bars:4, note:'Reduces Eye Beam and Blade Dance CD' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Increases burst damage windows' },
        { rank:4, stat:'Versatility',     bars:2, note:'Extra damage AND survivability' },
        { rank:5, stat:'Mastery',         bars:2, note:'Increases Chaos damage' },
      ],
    }
  },

  cooldowns: {
    nl: [
      { spell:'Metamorphosis',    cd:'3 min',  effect:'Transformeer — grote schade + HP boost', when:'Op pull bij boss of grote M+ pack' },
      { spell:'Eye Beam',         cd:'30 sec', effect:'Channeled chaos laser AoE', when:'Zo snel mogelijk, nooit overskippen' },
      { spell:'Blade Dance',      cd:'9 sec',  effect:'Snelle reeks aanvallen, raakt alles om je', when:'Altijd direct bij beschikbaar' },
      { spell:'Blur',             cd:'1 min',  effect:'50% dodge kans 10 sec', when:'Grote mechanic of bij lage HP' },
      { spell:'Glaive Tempest',   cd:'25 sec', effect:'2 sec AoE glaive storm', when:'AoE packs, gebruik net voor Eye Beam' },
    ],
    en: [
      { spell:'Metamorphosis',    cd:'3 min',  effect:'Transform — major damage + HP boost', when:'On pull at boss or large M+ pack' },
      { spell:'Eye Beam',         cd:'30 sec', effect:'Channeled chaos laser AoE', when:'As soon as possible, never skip' },
      { spell:'Blade Dance',      cd:'9 sec',  effect:'Quick series of attacks, hits everything around you', when:'Always immediately when available' },
      { spell:'Blur',             cd:'1 min',  effect:'50% dodge chance 10 sec', when:'Major mechanic or at low HP' },
      { spell:'Glaive Tempest',   cd:'25 sec', effect:'2 sec AoE glaive storm', when:'AoE packs, use just before Eye Beam' },
    ]
  },

  utility: {
    nl: [
      { spell:'Imprison',      type:'CC',        note:'Immobiliseer non-boss vijand 60 sec' },
      { spell:'Chaos Nova',    type:'AoE Stun',  note:'Stunt alle nabije vijanden 2 sec' },
      { spell:'Fel Rush',      type:'Mobiliteit', note:'Dash 15m voorwaarts — ook gebruik als burst schade' },
      { spell:'Spectral Sight', type:'Utility',  note:'Zie door muren — handig voor stealthed mobs' },
      { spell:'Consume Magic', type:'Dispel',    note:'Verwijder 1 buff van vijand' },
    ],
    en: [
      { spell:'Imprison',      type:'CC',        note:'Immobilize non-boss enemy 60 sec' },
      { spell:'Chaos Nova',    type:'AoE Stun',  note:'Stun all nearby enemies 2 sec' },
      { spell:'Fel Rush',      type:'Mobility',  note:'Dash 15m forward — also use as burst damage' },
      { spell:'Spectral Sight', type:'Utility',  note:'See through walls — handy for stealthed mobs' },
      { spell:'Consume Magic', type:'Dispel',    note:'Remove 1 buff from enemy' },
    ]
  },

  tips: {
    nl: [
      { icon:'😈', title:'Metamorphosis op pull', text:'Gebruik Metamorphosis altijd op de eerste pull van een boss — de 3 min cooldown past perfect in de meeste M+ routes.' },
      { icon:'👁️', title:'Eye Beam nooit vasthouden', text:'Eye Beam heeft een 30 sec CD — gebruik het zodra het beschikbaar is. Er is geen reden om te wachten.' },
      { icon:'💨', title:'Fel Rush als schade', text:'Fel Rush is niet alleen mobiliteit — het doet ook schade. In M+ kan je het gebruiken om snel in een pack te duiken en tegelijk schade te doen.' },
      { icon:'🛡️', title:'Blur = noodknop', text:'Blur is je sterkste defensieve cooldown. Activeer het bij grote mechanic of als je lage HP hebt, niet als het "misschien handig" is.' },
      { icon:'⚡', title:'Imprison in M+', text:'Imprison kan een mob tijdelijk uit de fight halen — ideaal voor gevaarlijke casters die je even wil stilzetten.' },
    ],
    en: [
      { icon:'😈', title:'Metamorphosis on pull', text:'Always use Metamorphosis on the first pull of a boss — the 3 min cooldown fits perfectly in most M+ routes.' },
      { icon:'👁️', title:'Never hold Eye Beam', text:'Eye Beam has a 30 sec CD — use it as soon as it\'s available. There is no reason to wait.' },
      { icon:'💨', title:'Fel Rush as damage', text:'Fel Rush is not just mobility — it also deals damage. In M+ you can use it to dive into a pack and deal damage at the same time.' },
      { icon:'🛡️', title:'Blur = emergency button', text:'Blur is your strongest defensive cooldown. Activate it during major mechanics or low HP, not when it\'s "maybe useful".' },
      { icon:'⚡', title:'Imprison in M+', text:'Imprison can temporarily remove a mob from the fight — ideal for dangerous casters you want to briefly silence.' },
    ]
  },

  macros: {
    nl: [
      { name:'Metamorphosis + Eye Beam', code:'/cast Metamorphosis\n/cast Eye Beam', note:'Gooit Meta en Eye Beam in één GCD — maximaal burst venster.' },
      { name:'Fel Rush naar cursor', code:'/cast [@cursor] Fel Rush', note:'Dash direct naar je muisaanwijzer — geen handmatig richten nodig.' },
      { name:'Imprison op mouseover', code:'/cast [@mouseover,harm][] Imprison', note:'CC een mob door er over heen te hoveren zonder target te wisselen.' },
    ],
    en: [
      { name:'Metamorphosis + Eye Beam', code:'/cast Metamorphosis\n/cast Eye Beam', note:'Casts Meta and Eye Beam in one GCD — maximum burst window.' },
      { name:'Fel Rush to cursor', code:'/cast [@cursor] Fel Rush', note:'Dash directly to your cursor — no manual aiming needed.' },
      { name:'Imprison on mouseover', code:'/cast [@mouseover,harm][] Imprison', note:'CC a mob by hovering over it without switching targets.' },
    ]
  },

  resource_info: {
    nl: {
      intro: 'Havoc gebruikt Fury als resource (0-120). Fury genereert snel via abilities en auto attacks. Je geeft Fury uit aan Chaos Strike en Blade Dance.',
      generate: [
        'Demons Bite — primaire Fury generator, snel en goedkoop',
        'Immolation Aura — passieve Fury generatie per tick',
        'Fel Rush — kleine hoeveelheid Fury',
        'Auto attacks genereren een kleine hoeveelheid',
        'Chaos Strike — heeft 40% kans om al je Fury terug te geven!',
      ],
      spend: [
        'Chaos Strike — kost 40 Fury, je hoofd Fury dump',
        'Blade Dance — kost 35 Fury, hogere prioriteit dan Chaos Strike',
        'Eye Beam — kost geen Fury maar genereert het wel',
      ],
      pet_tip: '💡 Chaos Strike refund: 40% kans dat alle Fury terugkomt — dit maakt Fury management minder strikt dan andere specs!',
      pets: [],
    },
    en: {
      intro: 'Havoc uses Fury as its resource (0-120). Fury generates quickly through abilities and auto attacks. You spend Fury on Chaos Strike and Blade Dance.',
      generate: [
        'Demons Bite — primary Fury generator, fast and cheap',
        'Immolation Aura — passive Fury generation per tick',
        'Fel Rush — small amount of Fury',
        'Auto attacks generate a small amount',
        'Chaos Strike — 40% chance to refund all your Fury!',
      ],
      spend: [
        'Chaos Strike — costs 40 Fury, main Fury dump',
        'Blade Dance — costs 35 Fury, higher priority than Chaos Strike',
        'Eye Beam — costs no Fury but generates it',
      ],
      pet_tip: '💡 Chaos Strike refund: 40% chance all Fury returns — this makes Fury management less strict than other specs!',
      pets: [],
    }
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Blood Knights',  effect:'Verhoogt Agility significant voor 1 uur.',    note:'Altijd actief in M+ en raid' },
      { type:'pot',    name:'Potion of Recklessness',             effect:'Grote Agility boost 25 sec bij pull/BL.',     note:'2 per boss: pull + Metamorphosis' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Agility en Stamina via groepsfeast.',        note:'Feast vragen aan tank/healer' },
      { type:'food',   name:'Royal Roast',          effect:'Solo food — hoge Agility bonus.',             note:'Backup als geen feast beschikbaar' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primaire stat 1 uur, stapelt met rest.',     note:'Altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Blood Knights',  effect:'Significantly increases Agility for 1 hour.', note:'Always active in M+ and raid' },
      { type:'pot',    name:'Potion of Recklessness',             effect:'Large Agility boost 25 sec on pull/BL.',     note:'2 per boss: pull + Metamorphosis' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Agility and Stamina via group feast.',      note:'Ask tank/healer for feast' },
      { type:'food',   name:'Royal Roast',          effect:'Solo food — high Agility bonus.',            note:'Backup if no feast available' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primary stat 1 hour, stacks with rest.',   note:'Always use' },
    ]
  },
};

ALL_SPECS.push(SPEC_HAVOC_DH);

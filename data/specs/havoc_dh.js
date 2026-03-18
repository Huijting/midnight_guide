if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_HAVOC_DH = {
  id: 'havoc_dh',
  icon: '😈',
  class: 'Demon Hunter',
  spec:   { nl: 'Havoc', en: 'Havoc', da: 'Havoc' },
  role:   'melee',
  armor:  'Leather',
  weapon: { nl: 'Twee winglessen (Warglaives)', en: 'Two Warglaives', da: 'To Warglaives' },
  resource: 'Fury',
  patch: '1.0',
  color: '#A330C9',

  summary: {
    nl: 'Havoc Demon Hunter is een razendsnelle melee DPS met hoge mobiliteit en krachtige burst. Draait om Eye Beam als grote cooldown en Blur voor defensie.',
    en: 'Havoc Demon Hunter is a blazing-fast melee DPS with high mobility and powerful burst. Revolves around Eye Beam as major cooldown and Blur for defense.',
    da: 'Havoc Demon Hunter er en lynhurtig melee DPS med høj mobilitet og kraftfuld burst. Drejer sig om Eye Beam som stor cooldown og Blur til forsvar.',
  },
  pros: {
    nl: ['Extreem hoge mobiliteit — Fel Rush, Vengeful Retreat, Double Jump', 'Sterke burst schade', 'Goede overleving met Blur', 'Eenvoudige rotatie om te leren'],
    en: ['Extremely high mobility — Fel Rush, Vengeful Retreat, Double Jump', 'Strong burst damage', 'Good survivability with Blur', 'Simple rotation to learn'],
    da: ['Ekstremt høj mobilitet — Fel Rush, Vengeful Retreat, Double Jump', 'Stærk burst-skade', 'God overlevelse med Blur', 'Simpel rotation at lære'],
  },
  cons: {
    nl: ['Fury management is kritisch', 'Kwetsbaar als Blur op cooldown is', 'Minder sterke sustained schade buiten burst'],
    en: ['Fury management is critical', 'Vulnerable when Blur is on cooldown', 'Weaker sustained damage outside burst'],
    da: ['Fury-styring er kritisk', 'Sårbar når Blur er på cooldown', 'Svagere vedvarende skade uden for burst'],
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
        'Metamorphosis voor baas pull of grote AoE packs',
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
    },
    da: {
      opener: 'Metamorphosis → Eye Beam → Blade Dance → Chaos Strike-spam → Glaive Tempest',
      single: 'Eye Beam (CD) → Blade Dance (CD) → Chaos Strike (Fury-dump) → Demons Bite (Fury-gen)',
      aoe:    'Metamorphosis → Eye Beam → Blade Dance → Glaive Tempest → Chaos Strike cleave',
      rules: [
        'Eye Beam brug altid, når tilgængeligt — den største skadeknap',
        'Blade Dance har prioritet over Chaos Strike',
        'Demons Bite til at generere Fury, når intet proc\'er',
        'Aktivér Blur straks ved stor mekanik eller lav HP',
        'Metamorphosis til boss-pull eller store AoE-grupper',
      ],
    },
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
    },
    da: {
      apex_tip: '💡 Eye Beam + Metamorphosis = dine burst-vinduer. Alt drejer sig om at maksimere skaden i disse vinduer!',
      opener: [
        { spell: 'Metamorphosis', why: 'Stor cooldown — øger al skade' },
        { spell: 'Eye Beam', why: 'Største skadeknap, altid i Meta-vinduet' },
        { spell: 'Blade Dance', why: 'AoE + single target cleave' },
        { spell: 'Chaos Strike', why: 'Fury-dump, chance for refund' },
        { spell: 'Glaive Tempest', why: 'AoE-cooldown, stærk på flere mål' },
      ],
      single: [
        { spell: 'Eye Beam', why: 'Hvert 30. sek — brug altid straks' },
        { spell: 'Blade Dance', why: 'Hvert 9. sek — højere prioritet end Chaos Strike' },
        { spell: 'Chaos Strike', why: 'Fury-dump, chance for at få gratis Fury tilbage' },
        { spell: 'Immolation Aura', why: 'Passiv Fury-generering + lille skade' },
        { spell: 'Demons Bite', why: 'Fury-generator når intet andet er tilgængeligt' },
      ],
      aoe: [
        { spell: 'Metamorphosis', why: 'Øger al AoE-skade' },
        { spell: 'Eye Beam', why: 'Channeled AoE — rammer alt i linjen' },
        { spell: 'Blade Dance', why: 'Rammer alle nærliggende fjender' },
        { spell: 'Glaive Tempest', why: '2 sek AoE-burst omkring dig' },
        { spell: 'Chaos Strike', why: 'Cleave på nærliggende mål via talent' },
      ],
    },
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
    },
    da: {
      tip: 'Agility er din primære stat. Haste reducerer Eye Beam-cooldown — meget værdifuldt.',
      list: [
        { rank:1, stat:'Agility',         bars:5, note:'Primær stat — maksimer altid' },
        { rank:2, stat:'Haste',           bars:4, note:'Reducerer Eye Beam og Blade Dance CD' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Øger burst-skadevinduer' },
        { rank:4, stat:'Versatility',     bars:2, note:'Ekstra skade OG overlevelse' },
        { rank:5, stat:'Mastery',         bars:2, note:'Øger Chaos-skade' },
      ],
    },
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
    ],
    da: [
      { spell:'Metamorphosis',    cd:'3 min',  effect:'Transformer — stor skade + HP-boost', when:'På pull ved boss eller stor M+-gruppe' },
      { spell:'Eye Beam',         cd:'30 sec', effect:'Channeled chaos-laser AoE', when:'Så hurtigt som muligt, spring aldrig over' },
      { spell:'Blade Dance',      cd:'9 sec',  effect:'Hurtig serie af angreb, rammer alt omkring dig', when:'Altid straks når tilgængeligt' },
      { spell:'Blur',             cd:'1 min',  effect:'50% dodge-chance i 10 sek', when:'Stor mekanik eller ved lav HP' },
      { spell:'Glaive Tempest',   cd:'25 sec', effect:'2 sek AoE glaive-storm', when:'AoE-grupper, brug lige før Eye Beam' },
    ],
  },

  utility: {
    nl: [
      { spell:'Imprison',      type:'CC',        note:'Immobiliseer niet-baas vijand 60 sec' },
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
    ],
    da: [
      { spell:'Imprison',      type:'CC',        note:'Immobilisér ikke-boss fjende i 60 sek' },
      { spell:'Chaos Nova',    type:'AoE Stun',  note:'Stun alle nærliggende fjender i 2 sek' },
      { spell:'Fel Rush',      type:'Mobilitet', note:'Dash 15m fremad — brug også som burst-skade' },
      { spell:'Spectral Sight', type:'Utility',  note:'Se gennem vægge — praktisk til stealthede fjender' },
      { spell:'Consume Magic', type:'Dispel',    note:'Fjern 1 buff fra fjende' },
    ],
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
    ],
    da: [
      { icon:'😈', title:'Metamorphosis ved pull', text:'Brug altid Metamorphosis ved det første pull af en boss — den 3 min cooldown passer perfekt til de fleste M+-ruter.' },
      { icon:'👁️', title:'Hold aldrig Eye Beam', text:'Eye Beam har en 30 sek CD — brug det, så snart det er tilgængeligt. Der er ingen grund til at vente.' },
      { icon:'💨', title:'Fel Rush som skade', text:'Fel Rush er ikke kun mobilitet — det gør også skade. I M+ kan du bruge det til at dykke ned i en gruppe og gøre skade på samme tid.' },
      { icon:'🛡️', title:'Blur = nødknap', text:'Blur er din stærkeste defensive cooldown. Aktivér den ved store mekanikker eller lav HP, ikke når det "måske er nyttigt".' },
      { icon:'⚡', title:'Imprison i M+', text:'Imprison kan midlertidigt fjerne en fjende fra kampen — ideel til farlige castere, du vil stilne kortvarigt.' },
    ],
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
    ],
    da: [
      { name:'Metamorphosis + Eye Beam', code:'/cast Metamorphosis\n/cast Eye Beam', note:'Kaster Meta og Eye Beam i én GCD — maksimalt burst-vindue.' },
      { name:'Fel Rush til markør', code:'/cast [@cursor] Fel Rush', note:'Dash direkte til din markør — ingen manuel sigte nødvendig.' },
      { name:'Imprison på mouseover', code:'/cast [@mouseover,harm][] Imprison', note:'CC en fjende ved at holde musen over den uden at skifte mål.' },
    ],
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
    },
    da: {
      intro: 'Havoc bruger Fury som ressource (0-120). Fury genereres hurtigt via evner og auto attacks. Du bruger Fury på Chaos Strike og Blade Dance.',
      generate: [
        'Demons Bite — primær Fury-generator, hurtig og billig',
        'Immolation Aura — passiv Fury-generering per tick',
        'Fel Rush — lille mængde Fury',
        'Auto attacks genererer en lille mængde',
        'Chaos Strike — 40% chance for at refunde al din Fury!',
      ],
      spend: [
        'Chaos Strike — koster 40 Fury, hoved Fury-dump',
        'Blade Dance — koster 35 Fury, højere prioritet end Chaos Strike',
        'Eye Beam — koster ingen Fury, men genererer det',
      ],
      pet_tip: '💡 Chaos Strike-refund: 40% chance for at al Fury vender tilbage — dette gør Fury-styring mindre streng end andre specs!',
      pets: [],
    },
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
    ],
    da: [
      { type:'flask',  name:'Flask of the Blood Knights',  effect:'Øger Agility markant i 1 time.',              note:'Altid aktiv i M+ og raid' },
      { type:'pot',    name:'Potion of Recklessness',             effect:'Stor Agility-boost 25 sek ved pull/BL.',     note:'2 per boss: pull + Metamorphosis' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Agility og Stamina via gruppefeast.',       note:'Bed tank/healer om feast' },
      { type:'food',   name:'Royal Roast',          effect:'Solo-mad — høj Agility-bonus.',              note:'Backup hvis ingen feast tilgængelig' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primær stat 1 time, stakker med resten.',  note:'Brug altid' },
    ],
  },
};

ALL_SPECS.push(SPEC_HAVOC_DH);

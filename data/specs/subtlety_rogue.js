if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_SUBTLETY_ROGUE = {
  id: 'subtlety_rogue',
  icon: '🌑',
  class: 'Rogue',
  spec:   { nl: 'Subtlety', en: 'Subtlety'},
  role:   'melee',
  armor:  'Leather',
  weapon: { nl: 'Two daggers (dual wield)', en: 'Two daggers (dual wield)'},
  resource: 'Energy + Combo Points',
  patch: '1.0',
  color: '#FFF468',

  summary: {
    nl: 'Subtlety Rogue is de meester van schaduw en list. Wisselt tussen Stealth en aanval via Shadow Dance voor continue burst cycli. Complex maar bevredigend om te spelen.',
    en: 'Subtlety Rogue is the master of shadow and trickery. Alternates between Stealth and attack via Shadow Dance for continuous burst cycles. Complex but satisfying to play.'
  },
  pros: {
    nl: ['Hoogste single target burst van alle Rogues', 'Uitstekende defensieve tools (Evasion, CloS)', 'Shadow Dance geeft frequent burst windows', 'Shroud voor M+ skips'],
    en: ['Highest single target burst of all Rogues', 'Excellent defensive tools (Evasion, CloS)', 'Shadow Dance gives frequent burst windows', 'Shroud for M+ skips']
  },
  cons: {
    nl: ['Moeilijkste Rogue spec om te leren', 'Lage AoE vergeleken met Outlaw', 'Fouten in Shadow Dance cycling kosten veel schade'],
    en: ['Hardest Rogue spec to learn', 'Low AoE compared to Outlaw', 'Mistakes in Shadow Dance cycling cost a lot of damage']
  },

  cheatsheet: {
    nl: {
      opener: '(Stealth) Shadowstrike → Symbols of Death → Shadow Dance → Shadowstrike x2 → Eviscerate (5 CPs)',
      single: 'Symbols of Death → Shadow Dance → Shadowstrike spam → Eviscerate (5 CPs) → herhalen',
      aoe:    'Shadow Dance → Shadowstrike (Shadow Techniques) → Shuriken Storm spam → Eviscerate',
      rules: [
        'Symbols of Death altijd vóór Shadow Dance gebruiken',
        'Shadowstrike heeft altijd prioriteit in Shadow Dance window',
        'Eviscerate bij 5 CPs — nooit bij minder',
        'Shuriken Toss voor CP generatie buiten melee bereik',
        'Shadow Dance elke 1 min — nooit overslaan',
      ],
    },
    en: {
      opener: '(Stealth) Shadowstrike → Symbols of Death → Shadow Dance → Shadowstrike x2 → Eviscerate (5 CPs)',
      single: 'Symbols of Death → Shadow Dance → Shadowstrike spam → Eviscerate (5 CPs) → repeat',
      aoe:    'Shadow Dance → Shadowstrike (Shadow Techniques) → Shuriken Storm spam → Eviscerate',
      rules: [
        'Symbols of Death always before Shadow Dance',
        'Shadowstrike always has priority in Shadow Dance window',
        'Eviscerate at 5 CPs — never at less',
        'Shuriken Toss for CP generation outside melee range',
        'Shadow Dance every 1 min — never skip',
      ],
    }
  },

  rotation: {
    nl: {
      apex_tip: '💡 Symbols of Death → Shadow Dance is je burst window. Alle schade in Shadow Dance is verhoogd. Gooi al je CPs in Eviscerate terwijl het actief is!',
      opener: [
        { spell: 'Shadowstrike (Stealth)', why: 'Extra schade + CPs vanuit stealth' },
        { spell: 'Symbols of Death', why: 'Vergroot schade voor heel burst window' },
        { spell: 'Shadow Dance', why: 'Stealth window — Shadowstrike beschikbaar' },
        { spell: 'Shadowstrike x2', why: 'In Shadow Dance — snelle CP opbouw' },
        { spell: 'Eviscerate', why: '5 CPs — grootste finisher' },
      ],
      single: [
        { spell: 'Symbols of Death', why: 'Altijd vóór Shadow Dance — verhoogt schade' },
        { spell: 'Shadow Dance', why: 'Burst window — Shadowstrike prioriteit' },
        { spell: 'Shadowstrike', why: 'In Shadow Dance — meer schade dan Backstab' },
        { spell: 'Eviscerate', why: '5 CPs — altijd wachten op 5' },
        { spell: 'Backstab', why: 'Buiten Shadow Dance — normale filler' },
      ],
      aoe: [
        { spell: 'Shuriken Storm', why: 'AoE CP generator — raakt iedereen rondom je' },
        { spell: 'Shadow Dance', why: 'Burst window — ook in AoE situaties' },
        { spell: 'Shadowstrike', why: 'In Dance window — hogere schade dan Shuriken' },
        { spell: 'Eviscerate', why: '5 CPs — ook in AoE de finisher' },
      ],
    },
    en: {
      apex_tip: '💡 Symbols of Death → Shadow Dance is your burst window. All damage in Shadow Dance is increased. Dump all your CPs into Eviscerate while it\'s active!',
      opener: [
        { spell: 'Shadowstrike (Stealth)', why: 'Extra damage + CPs from stealth' },
        { spell: 'Symbols of Death', why: 'Increases damage for entire burst window' },
        { spell: 'Shadow Dance', why: 'Stealth window — Shadowstrike available' },
        { spell: 'Shadowstrike x2', why: 'In Shadow Dance — fast CP buildup' },
        { spell: 'Eviscerate', why: '5 CPs — biggest finisher' },
      ],
      single: [
        { spell: 'Symbols of Death', why: 'Always before Shadow Dance — increases damage' },
        { spell: 'Shadow Dance', why: 'Burst window — Shadowstrike priority' },
        { spell: 'Shadowstrike', why: 'In Shadow Dance — more damage than Backstab' },
        { spell: 'Eviscerate', why: '5 CPs — always wait for 5' },
        { spell: 'Backstab', why: 'Outside Shadow Dance — normal filler' },
      ],
      aoe: [
        { spell: 'Shuriken Storm', why: 'AoE CP generator — hits everyone around you' },
        { spell: 'Shadow Dance', why: 'Burst window — also in AoE situations' },
        { spell: 'Shadowstrike', why: 'In Dance window — higher damage than Shuriken' },
        { spell: 'Eviscerate', why: '5 CPs — also the finisher in AoE' },
      ],
    }
  },

  stats: {
    nl: {
      tip: 'Haste verlaagt de cast time van Shadowstrike en geeft je meer tijd in Shadow Dance. Cruciaal voor Subtlety.',
      list: [
        { rank:1, stat:'Agility',         bars:5, note:'Primaire stat' },
        { rank:2, stat:'Haste',           bars:5, note:'Meer Shadowstrikes per Dance window' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Grotere Eviscerate crits' },
        { rank:4, stat:'Mastery',         bars:3, note:'Verhoogt schade in Shadow Dance window' },
        { rank:5, stat:'Versatility',     bars:1, note:'Laagste prioriteit' },
      ],
    },
    en: {
      tip: 'Haste reduces Shadowstrike cast time and gives you more time in Shadow Dance. Crucial for Subtlety.',
      list: [
        { rank:1, stat:'Agility',         bars:5, note:'Primary stat' },
        { rank:2, stat:'Haste',           bars:5, note:'More Shadowstrikes per Dance window' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Bigger Eviscerate crits' },
        { rank:4, stat:'Mastery',         bars:3, note:'Increases damage in Shadow Dance window' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lowest priority' },
      ],
    }
  },

  cooldowns: {
    nl: [
      { spell:'Shadow Dance',      cd:'1 min',   effect:'3 sec stealth — Shadowstrike beschikbaar', when:'Altijd met Symbols of Death actief voor maximum burst' },
      { spell:'Symbols of Death',  cd:'30 sec',  effect:'+40% Combo Point generatie + schade boost', when:'Altijd vóór Shadow Dance — nooit overslaan' },
      { spell:'Shadow Blades',     cd:'3 min',   effect:'Elke aanval genereert CP + bonus schade', when:'Op pull bij boss — maximale CP storm' },
      { spell:'Vanish',            cd:'2 min',   effect:'Terug in stealth + reset', when:'Extra Shadow Dance of Shadowstrike refresh' },
      { spell:'Evasion',           cd:'2 min',   effect:'100% dodge 10 sec', when:'Grote mechanic of nood' },
    ],
    en: [
      { spell:'Shadow Dance',      cd:'1 min',   effect:'3 sec stealth — Shadowstrike available', when:'Always with Symbols of Death active for maximum burst' },
      { spell:'Symbols of Death',  cd:'30 sec',  effect:'+40% Combo Point generation + damage boost', when:'Always before Shadow Dance — never skip' },
      { spell:'Shadow Blades',     cd:'3 min',   effect:'Every attack generates CP + bonus damage', when:'On pull at boss — maximum CP storm' },
      { spell:'Vanish',            cd:'2 min',   effect:'Back into stealth + reset', when:'Extra Shadow Dance or Shadowstrike refresh' },
      { spell:'Evasion',           cd:'2 min',   effect:'100% dodge 10 sec', when:'Major mechanic or emergency' },
    ]
  },

  utility: {
    nl: [
      { spell:'Shroud of Concealment', type:'Stealth',    note:'Groep-stealth 15 sec — beste M+ skip tool' },
      { spell:'Kick',                  type:'Interrupt',   note:'Snelle interrupt 15 sec CD' },
      { spell:'Blind',                 type:'CC',          note:'1 min disables — breekt op schade' },
      { spell:'Sap',                   type:'CC',          note:'Stealth CC op humanoid/beast' },
      { spell:'Cloak of Shadows',      type:'Defensief',   note:'Verwijdert alle magical debuffs — 1 min CD' },
    ],
    en: [
      { spell:'Shroud of Concealment', type:'Stealth',    note:'Group stealth 15 sec — best M+ skip tool' },
      { spell:'Kick',                  type:'Interrupt',   note:'Fast interrupt 15 sec CD' },
      { spell:'Blind',                 type:'CC',          note:'1 min disables — breaks on damage' },
      { spell:'Sap',                   type:'CC',          note:'Stealth CC on humanoid/beast' },
      { spell:'Cloak of Shadows',      type:'Defensive',   note:'Removes all magical debuffs — 1 min CD' },
    ]
  },

  tips: {
    nl: [
      { icon:'🌑', title:'Dance cycling is alles', text:'Subtlety draait om: Symbols of Death → Shadow Dance → Shadowstrike spam → Eviscerate. Dit herhaal je elke minuut. Mis je dit window, verlies je 30%+ schade.' },
      { icon:'⚡', title:'Symbols of Death nooit overslaan', text:'Symbols of Death geeft je +40% CP generatie. Gebruik het altijd direct voor Shadow Dance. Als je het mist, doe je aanzienlijk minder in het burst window.' },
      { icon:'🥷', title:'Sap voor de pull', text:'Sap (uit stealth) CC\'t een target voor de pull. Combineer met Shroud om gevaarlijke casters of elites te disablen voordat je begint.' },
      { icon:'🛡️', title:'Evasion + Cloak defensief', text:'Subtlety heeft twee sterke defensieve CDs: Evasion (100% dodge) en Cloak (magic immunity). Leer wanneer mechanics dodgeable zijn en gebruik ze proactief.' },
      { icon:'🎯', title:'Backstab vs Shadowstrike', text:'Shadowstrike doet meer schade dan Backstab en heeft geen positievereiste. Gebruik Shadowstrike altijd als je in Shadow Dance zit — Backstab alleen als Dance niet actief is.' },
    ],
    en: [
      { icon:'🌑', title:'Dance cycling is everything', text:'Subtlety revolves around: Symbols of Death → Shadow Dance → Shadowstrike spam → Eviscerate. You repeat this every minute. Miss this window and you lose 30%+ damage.' },
      { icon:'⚡', title:'Never skip Symbols of Death', text:'Symbols of Death gives you +40% CP generation. Always use it directly before Shadow Dance. If you miss it, you\'ll do significantly less during the burst window.' },
      { icon:'🥷', title:'Sap before the pull', text:'Sap (from stealth) CCs a target before the pull. Combine with Shroud to disable dangerous casters or elites before you start.' },
      { icon:'🛡️', title:'Evasion + Cloak defensively', text:'Subtlety has two strong defensive CDs: Evasion (100% dodge) and Cloak (magic immunity). Learn when mechanics are dodgeable and use them proactively.' },
      { icon:'🎯', title:'Backstab vs Shadowstrike', text:'Shadowstrike deals more damage than Backstab and has no positional requirement. Always use Shadowstrike when in Shadow Dance — Backstab only when Dance is not active.' },
    ]
  },

  macros: {
    nl: [
      { name:'Symbols + Shadow Dance', code:'/cast Symbols of Death\n/cast Shadow Dance', note:'Burst window trigger — Symbols actief net als Dance begint.' },
      { name:'Vanish + Shadowstrike', code:'/cast Vanish\n/cast Shadowstrike', note:'Extra stealth Shadowstrike buiten reguliere Dance windows.' },
      { name:'Shroud groep', code:'/cast Shroud of Concealment', note:'Groep-stealth voor M+ skips.' },
    ],
    en: [
      { name:'Symbols + Shadow Dance', code:'/cast Symbols of Death\n/cast Shadow Dance', note:'Burst window trigger — Symbols active just as Dance begins.' },
      { name:'Vanish + Shadowstrike', code:'/cast Vanish\n/cast Shadowstrike', note:'Extra stealth Shadowstrike outside regular Dance windows.' },
      { name:'Shroud group', code:'/cast Shroud of Concealment', note:'Group stealth for M+ skips.' },
    ]
  },

  resource_info: {
    nl: {
      intro: 'Subtlety gebruikt Energy (0-100) en Combo Points (0-5). Shadowstrike (in Shadow Dance) is de efficiëntste CP generator.',
      generate: [
        'Shadowstrike — 2 CPs (in Shadow Dance of Stealth)',
        'Backstab — 1 CP (buiten Dance)',
        'Shuriken Storm — 1 CP per target getroffen (AoE)',
        'Symbols of Death — +40% CP generatie op alles',
      ],
      spend: [
        'Eviscerate (5 CPs) — sterkste finisher, altijd bij 5',
        'Rupture (5 CPs) — DoT optie voor langere fights',
        'Shadow Vault (5 CPs) — AoE finisher bij 3+ targets',
      ],
      pet_tip: '💡 Nooit Eviscerate bij minder dan 5 CPs. Wachten op 5 is altijd beter dan vroeg dumpen!',
      pets: [],
    },
    en: {
      intro: 'Subtlety uses Energy (0-100) and Combo Points (0-5). Shadowstrike (in Shadow Dance) is the most efficient CP generator.',
      generate: [
        'Shadowstrike — 2 CPs (in Shadow Dance or Stealth)',
        'Backstab — 1 CP (outside Dance)',
        'Shuriken Storm — 1 CP per target hit (AoE)',
        'Symbols of Death — +40% CP generation on everything',
      ],
      spend: [
        'Eviscerate (5 CPs) — strongest finisher, always at 5',
        'Rupture (5 CPs) — DoT option for longer fights',
        'Shadow Vault (5 CPs) — AoE finisher at 3+ targets',
      ],
      pet_tip: '💡 Never Eviscerate at less than 5 CPs. Waiting for 5 is always better than dumping early!',
      pets: [],
    }
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Blood Knights',  effect:'Verhoogt Agility voor 1 uur.',                note:'Altijd actief' },
      { type:'pot',    name:'Potion of Recklessness',             effect:'Agility boost bij Shadow Blades opener.',     note:'Op pull voor maximum burst' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Agility en Stamina via groepsfeast.',       note:'Feast vragen' },
      { type:'food',   name:'Royal Roast',          effect:'Solo food backup.',                          note:'Backup als geen feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primaire stat 1 uur.',                      note:'Altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Blood Knights',  effect:'Increases Agility for 1 hour.',              note:'Always active' },
      { type:'pot',    name:'Potion of Recklessness',             effect:'Agility boost with Shadow Blades opener.',   note:'On pull for maximum burst' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Agility and Stamina via group feast.',     note:'Ask for feast' },
      { type:'food',   name:'Royal Roast',          effect:'Solo food backup.',                         note:'Backup if no feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primary stat 1 hour.',                     note:'Always use' },
    ]
  },
};

ALL_SPECS.push(SPEC_SUBTLETY_ROGUE);

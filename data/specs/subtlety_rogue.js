if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_SUBTLETY_ROGUE = {
  id: 'subtlety_rogue',
  icon: '🌑',
  class: 'Rogue',
  spec:   { nl: 'Subtlety', en: 'Subtlety', da: 'Subtlety' },
  role:   'melee',
  armor:  'Leather',
  weapon: { nl: 'Twee dolken (dual wield)', en: 'Two daggers (dual wield)', da: 'To dolke (dual wield)' },
  resource: 'Energy + Combo Points',
  patch: '1.0',
  color: '#FFF468',

  summary: {
    nl: 'Subtlety Rogue is de meester van schaduw en list. Wisselt tussen Stealth en aanval via Shadow Dance voor continue burst cycli. Complex maar bevredigend om te spelen.',
    en: 'Subtlety Rogue is the master of shadow and trickery. Alternates between Stealth and attack via Shadow Dance for continuous burst cycles. Complex but satisfying to play.',
    da: 'Subtlety Rogue er mester i skygge og list. Skifter mellem Stealth og angreb via Shadow Dance til kontinuerlige burst-cykler. Kompleks men tilfredsstillende at spille.',
  },
  pros: {
    nl: ['Hoogste single target burst van alle Rogues', 'Uitstekende defensieve tools (Evasion, CloS)', 'Shadow Dance geeft frequent burst windows', 'Shroud voor M+ skips'],
    en: ['Highest single target burst of all Rogues', 'Excellent defensive tools (Evasion, CloS)', 'Shadow Dance gives frequent burst windows', 'Shroud for M+ skips'],
    da: ['Højeste single target burst af alle Rogues', 'Fremragende defensive redskaber (Evasion, CloS)', 'Shadow Dance giver hyppige burst-vinduer', 'Shroud til M+-spring'],
  },
  cons: {
    nl: ['Moeilijkste Rogue spec om te leren', 'Lage AoE vergeleken met Outlaw', 'Fouten in Shadow Dance cycling kosten veel schade'],
    en: ['Hardest Rogue spec to learn', 'Low AoE compared to Outlaw', 'Mistakes in Shadow Dance cycling cost a lot of damage'],
    da: ['Sværeste Rogue-spec at lære', 'Lav AoE sammenlignet med Outlaw', 'Fejl i Shadow Dance-cycling koster meget skade'],
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
    },
    da: {
      opener: '(Stealth) Shadowstrike → Symbols of Death → Shadow Dance → Shadowstrike x2 → Eviscerate (5 CPs)',
      single: 'Symbols of Death → Shadow Dance → Shadowstrike-spam → Eviscerate (5 CPs) → gentag',
      aoe:    'Shadow Dance → Shadowstrike (Shadow Techniques) → Shuriken Storm-spam → Eviscerate',
      rules: [
        'Symbols of Death altid inden Shadow Dance',
        'Shadowstrike har altid prioritet i Shadow Dance-vindue',
        'Eviscerate ved 5 CPs — aldrig ved mindre',
        'Shuriken Toss til CP-generering uden for melee-rækkevidde',
        'Shadow Dance hvert 1 min — spring aldrig over',
      ],
    },
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
    },
    da: {
      apex_tip: '💡 Symbols of Death → Shadow Dance er dit burst-vindue. Al skade i Shadow Dance er øget. Dump alle dine CPs i Eviscerate mens det er aktivt!',
      opener: [
        { spell: 'Shadowstrike (Stealth)', why: 'Ekstra skade + CPs fra stealth' },
        { spell: 'Symbols of Death', why: 'Øger skade for hele burst-vinduet' },
        { spell: 'Shadow Dance', why: 'Stealth-vindue — Shadowstrike tilgængeligt' },
        { spell: 'Shadowstrike x2', why: 'I Shadow Dance — hurtig CP-opbygning' },
        { spell: 'Eviscerate', why: '5 CPs — største finisher' },
      ],
      single: [
        { spell: 'Symbols of Death', why: 'Altid inden Shadow Dance — øger skade' },
        { spell: 'Shadow Dance', why: 'Burst-vindue — Shadowstrike prioritet' },
        { spell: 'Shadowstrike', why: 'I Shadow Dance — mere skade end Backstab' },
        { spell: 'Eviscerate', why: '5 CPs — vent altid på 5' },
        { spell: 'Backstab', why: 'Uden for Shadow Dance — normal fylder' },
      ],
      aoe: [
        { spell: 'Shuriken Storm', why: 'AoE CP-generator — rammer alle omkring dig' },
        { spell: 'Shadow Dance', why: 'Burst-vindue — også i AoE-situationer' },
        { spell: 'Shadowstrike', why: 'I Dance-vindue — højere skade end Shuriken' },
        { spell: 'Eviscerate', why: '5 CPs — også finishere i AoE' },
      ],
    },
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
    },
    da: {
      tip: 'Haste reducerer Shadowstrike casttid og giver dig mere tid i Shadow Dance. Afgørende for Subtlety.',
      list: [
        { rank:1, stat:'Agility',         bars:5, note:'Primær stat' },
        { rank:2, stat:'Haste',           bars:5, note:'Flere Shadowstrikes per Dance-vindue' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Større Eviscerate-crits' },
        { rank:4, stat:'Mastery',         bars:3, note:'Øger skade i Shadow Dance-vindue' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lavest prioritet' },
      ],
    },
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
    ],
    da: [
      { spell:'Shadow Dance',      cd:'1 min',   effect:'3 sek stealth — Shadowstrike tilgængeligt', when:'Altid med Symbols of Death aktiv til maksimalt burst' },
      { spell:'Symbols of Death',  cd:'30 sec',  effect:'+40% Combo Point-generering + skade-boost', when:'Altid inden Shadow Dance — spring aldrig over' },
      { spell:'Shadow Blades',     cd:'3 min',   effect:'Hvert angreb genererer CP + bonusskade', when:'På pull ved boss — maksimal CP-storm' },
      { spell:'Vanish',            cd:'2 min',   effect:'Tilbage i stealth + nulstilling', when:'Ekstra Shadow Dance eller Shadowstrike-fornyelse' },
      { spell:'Evasion',           cd:'2 min',   effect:'100% dodge i 10 sek', when:'Stor mekanik eller nødsituation' },
    ],
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
    ],
    da: [
      { spell:'Shroud of Concealment', type:'Stealth',    note:'Gruppe-stealth i 15 sek — bedste M+-spring-redskab' },
      { spell:'Kick',                  type:'Interrupt',   note:'Hurtig interrupt 15 sek CD' },
      { spell:'Blind',                 type:'CC',          note:'1 min deaktivering — brydes ved skade' },
      { spell:'Sap',                   type:'CC',          note:'Stealth CC på humanoid/beast' },
      { spell:'Cloak of Shadows',      type:'Defensiv',    note:'Fjerner alle magiske debuffs — 1 min CD' },
    ],
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
    ],
    da: [
      { icon:'🌑', title:'Dance-cycling er alt', text:'Subtlety drejer sig om: Symbols of Death → Shadow Dance → Shadowstrike-spam → Eviscerate. Du gentager dette hvert minut. Misser du dette vindue, mister du 30%+ skade.' },
      { icon:'⚡', title:'Spring aldrig Symbols of Death over', text:'Symbols of Death giver dig +40% CP-generering. Brug det altid direkte inden Shadow Dance. Hvis du misser det, gør du markant mindre i burst-vinduet.' },
      { icon:'🥷', title:'Sap inden pull', text:'Sap (fra stealth) CC\'er et mål inden pull. Kombiner med Shroud for at deaktivere farlige castere eller elites inden du starter.' },
      { icon:'🛡️', title:'Evasion + Cloak defensivt', text:'Subtlety har to stærke defensive CDs: Evasion (100% dodge) og Cloak (magisk immunitet). Lær hvornår mekanikker kan dodges og brug dem proaktivt.' },
      { icon:'🎯', title:'Backstab vs Shadowstrike', text:'Shadowstrike gør mere skade end Backstab og har intet positionskrav. Brug altid Shadowstrike når du er i Shadow Dance — Backstab kun når Dance ikke er aktiv.' },
    ],
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
    ],
    da: [
      { name:'Symbols + Shadow Dance', code:'/cast Symbols of Death\n/cast Shadow Dance', note:'Burst-vindue trigger — Symbols aktiv præcis da Dance begynder.' },
      { name:'Vanish + Shadowstrike', code:'/cast Vanish\n/cast Shadowstrike', note:'Ekstra stealth Shadowstrike uden for regulære Dance-vinduer.' },
      { name:'Shroud gruppe', code:'/cast Shroud of Concealment', note:'Gruppe-stealth til M+-spring.' },
    ],
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
    },
    da: {
      intro: 'Subtlety bruger Energy (0-100) og Combo Points (0-5). Shadowstrike (i Shadow Dance) er den mest effektive CP-generator.',
      generate: [
        'Shadowstrike — 2 CPs (i Shadow Dance eller Stealth)',
        'Backstab — 1 CP (uden for Dance)',
        'Shuriken Storm — 1 CP per ramt mål (AoE)',
        'Symbols of Death — +40% CP-generering på alt',
      ],
      spend: [
        'Eviscerate (5 CPs) — stærkeste finisher, altid ved 5',
        'Rupture (5 CPs) — DoT-mulighed til længere kampe',
        'Shadow Vault (5 CPs) — AoE finisher ved 3+ mål',
      ],
      pet_tip: '💡 Brug aldrig Eviscerate ved færre end 5 CPs. At vente på 5 er altid bedre end at dumpe for tidligt!',
      pets: [],
    },
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Verhoogt Agility voor 1 uur.',                note:'Altijd actief' },
      { type:'pot',    name:'Tempered Potion',             effect:'Agility boost bij Shadow Blades opener.',     note:'Op pull voor maximum burst' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Agility en Stamina via groepsfeast.',       note:'Feast vragen' },
      { type:'food',   name:'Feisty Fish Sticks',          effect:'Solo food backup.',                          note:'Backup als geen feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primaire stat 1 uur.',                      note:'Altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Increases Agility for 1 hour.',              note:'Always active' },
      { type:'pot',    name:'Tempered Potion',             effect:'Agility boost with Shadow Blades opener.',   note:'On pull for maximum burst' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Agility and Stamina via group feast.',     note:'Ask for feast' },
      { type:'food',   name:'Feisty Fish Sticks',          effect:'Solo food backup.',                         note:'Backup if no feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primary stat 1 hour.',                     note:'Always use' },
    ],
    da: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Øger Agility i 1 time.',                     note:'Altid aktiv' },
      { type:'pot',    name:'Tempered Potion',             effect:'Agility-boost med Shadow Blades opener.',    note:'På pull for maksimalt burst' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Agility og Stamina via gruppefeast.',      note:'Bed om feast' },
      { type:'food',   name:'Feisty Fish Sticks',          effect:'Solo-mad backup.',                          note:'Backup hvis ingen feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primær stat 1 time.',                      note:'Brug altid' },
    ],
  },
};

ALL_SPECS.push(SPEC_SUBTLETY_ROGUE);

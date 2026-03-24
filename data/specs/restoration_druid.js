if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_RESTORATION_DRUID = {
  id: 'restoration_druid',
  icon: '🌿',
  class: 'Druid',
  spec:   { nl: 'Restoration', en: 'Restoration'},
  role:   'heal',
  armor:  'Leather',
  weapon: { nl: 'Staf of eenhandig + offhand', en: 'Staff or one-hand + offhand'},
  resource: 'Mana',
  patch: '1.0',
  color: '#FF7C0A',

  summary: {
    nl: 'Restoration Druid is een HoT-gebaseerde healer die continue genezing verspreidt via meerdere heal-over-time spells. Sterk in lange fights en uitstekend in M+ door mobiliteit en Rebirth.',
    en: 'Restoration Druid is a HoT-based healer that spreads continuous healing via multiple heal-over-time spells. Strong in long fights and excellent in M+ due to mobility and Rebirth.'
  },
  pros: {
    nl: ['Uitstekende sustained healing via HoTs', 'Hoge mobiliteit — HoTs tikken door tijdens movement', 'Rebirth voor in-combat rez', 'Goede mana efficiëntie', 'Sterk in M+ door Stampeding Roar'],
    en: ['Excellent sustained healing via HoTs', 'High mobility — HoTs tick during movement', 'Rebirth for in-combat rez', 'Good mana efficiency', 'Strong in M+ due to Stampeding Roar']
  },
  cons: {
    nl: ['Weinig burst healing — HoTs zijn traag', 'Swiftmend CD kan tekort schieten bij spikes', 'Minder sterk in korte fights'],
    en: ['Little burst healing — HoTs are slow', 'Swiftmend CD can fall short during spikes', 'Weaker in short fights']
  },

  cheatsheet: {
    nl: {
      opener: 'Rejuvenation op tank → Lifebloom op tank → Wild Growth bij groepsschade → Efflorescence plaatsen',
      single: 'Lifebloom op tank → Rejuvenation actief → Swiftmend bij spike → Regrowth bij nood',
      aoe:    'Wild Growth → Rejuvenation op meerdere targets → Tranquility bij grote groepsschade',
      rules: [
        'Lifebloom altijd op de tank — nooit laten verlopen',
        'Efflorescence altijd geplaatst in de groep',
        'Wild Growth bij 2+ mensen laag op HP',
        'Swiftmend voor instant burst heal — bewaar voor nood',
        'Innervate op jezelf bij laag mana',
      ],
    },
    en: {
      opener: 'Rejuvenation on tank → Lifebloom on tank → Wild Growth on group damage → Place Efflorescence',
      single: 'Lifebloom on tank → Rejuvenation active → Swiftmend on spike → Regrowth in emergency',
      aoe:    'Wild Growth → Rejuvenation on multiple targets → Tranquility during major group damage',
      rules: [
        'Lifebloom always on the tank — never let it expire',
        'Efflorescence always placed in the group',
        'Wild Growth when 2+ people are low on HP',
        'Swiftmend for instant burst heal — save for emergencies',
        'Innervate on yourself when low on mana',
      ],
    }
  },

  rotation: {
    nl: {
      apex_tip: '💡 Resto Druid is pro-actief — zet HoTs neer VOOR de schade, niet erna. Anticipeer altijd!',
      opener: [
        { spell: 'Rejuvenation op tank', why: 'Eerste HoT — altijd op de tank voor de pull' },
        { spell: 'Lifebloom op tank', why: 'Sterkste HoT — nooit verlopen op tank' },
        { spell: 'Efflorescence plaatsen', why: 'Gratis AoE healing — altijd in de groep' },
        { spell: 'Wild Growth', why: 'Bij eerste groepsschade — meest efficiënt' },
      ],
      single: [
        { spell: 'Lifebloom', why: 'Altijd op tank — hernieuwen bij <3 sec' },
        { spell: 'Rejuvenation', why: 'Op tank en laag-HP spelers preventief' },
        { spell: 'Swiftmend', why: 'Instant burst heal bij spike schade' },
        { spell: 'Regrowth', why: 'Noodheal bij kritiek lage HP — direct groot effect' },
        { spell: 'Wrath (DPS)', why: 'Als iedereen gezond is — bijdragen aan schade' },
      ],
      aoe: [
        { spell: 'Wild Growth', why: 'Beste AoE heal — gebruik direct bij groepsschade' },
        { spell: 'Rejuvenation verspreiden', why: 'Op alle gewonde spelers' },
        { spell: 'Efflorescence', why: 'Zet het neer in het midden van de groep' },
        { spell: 'Tranquility', why: 'Grootste AoE cooldown — gebruik bij massale schade' },
        { spell: 'Flourish', why: 'Verlengt alle actieve HoTs — gebruik na Wild Growth' },
      ],
    },
    en: {
      apex_tip: '💡 Resto Druid is proactive — place HoTs BEFORE damage, not after. Always anticipate!',
      opener: [
        { spell: 'Rejuvenation on tank', why: 'First HoT — always on the tank before the pull' },
        { spell: 'Lifebloom on tank', why: 'Strongest HoT — never let expire on tank' },
        { spell: 'Place Efflorescence', why: 'Free AoE healing — always in the group' },
        { spell: 'Wild Growth', why: 'On first group damage — most efficient' },
      ],
      single: [
        { spell: 'Lifebloom', why: 'Always on tank — refresh at <3 sec' },
        { spell: 'Rejuvenation', why: 'On tank and low-HP players preventively' },
        { spell: 'Swiftmend', why: 'Instant burst heal during spike damage' },
        { spell: 'Regrowth', why: 'Emergency heal at critically low HP — big immediate effect' },
        { spell: 'Wrath (DPS)', why: 'When everyone is healthy — contribute to damage' },
      ],
      aoe: [
        { spell: 'Wild Growth', why: 'Best AoE heal — use immediately on group damage' },
        { spell: 'Spread Rejuvenation', why: 'On all injured players' },
        { spell: 'Efflorescence', why: 'Place it in the middle of the group' },
        { spell: 'Tranquility', why: 'Biggest AoE cooldown — use during massive damage' },
        { spell: 'Flourish', why: 'Extends all active HoTs — use after Wild Growth' },
      ],
    }
  },

  stats: {
    nl: {
      tip: 'Intellect is altijd #1. Haste maakt HoTs sneller tikken — cruciaal voor Resto Druid.',
      list: [
        { rank:1, stat:'Intellect',   bars:5, note:'Primaire stat — mana pool + heal kracht' },
        { rank:2, stat:'Haste',       bars:5, note:'HoTs tikken sneller — meer total healing' },
        { rank:3, stat:'Mastery',     bars:3, note:'Verhoogt HoT healing (Mastery: Harmony)' },
        { rank:4, stat:'Versatility', bars:2, note:'Schade reductie + extra healing' },
        { rank:5, stat:'Critical Strike', bars:1, note:'Laagste prioriteit voor Resto' },
      ],
    },
    en: {
      tip: 'Intellect is always #1. Haste makes HoTs tick faster — crucial for Resto Druid.',
      list: [
        { rank:1, stat:'Intellect',   bars:5, note:'Primary stat — mana pool + heal power' },
        { rank:2, stat:'Haste',       bars:5, note:'HoTs tick faster — more total healing' },
        { rank:3, stat:'Mastery',     bars:3, note:'Increases HoT healing (Mastery: Harmony)' },
        { rank:4, stat:'Versatility', bars:2, note:'Damage reduction + extra healing' },
        { rank:5, stat:'Critical Strike', bars:1, note:'Lowest priority for Resto' },
      ],
    }
  },

  cooldowns: {
    nl: [
      { spell:'Tranquility',   cd:'3 min',  effect:'Channeled AoE heal 8 sec — enorme groepsheling', when:'Massale groepsschade — bewaar hiervoor' },
      { spell:'Flourish',      cd:'1.5 min', effect:'Verlengt alle actieve HoTs met 8 sec', when:'Direct na Wild Growth voor maximum effect' },
      { spell:'Convoke the Spirits', cd:'2 min', effect:'12 willekeurige heals in 4 sec', when:'Noodsituatie of extra burst healing' },
      { spell:'Nature\'s Swiftness', cd:'1 min', effect:'Volgende heal is instant + 300% krachtiger', when:'Noodsituatie — iemand bijna dood' },
      { spell:'Innervate',     cd:'3 min',  effect:'Gratis mana 10 sec', when:'Bij laag mana — gebruik op jezelf of healer partner' },
    ],
    en: [
      { spell:'Tranquility',   cd:'3 min',  effect:'Channeled AoE heal 8 sec — massive group healing', when:'Massive group damage — save for this' },
      { spell:'Flourish',      cd:'1.5 min', effect:'Extends all active HoTs by 8 sec', when:'Immediately after Wild Growth for maximum effect' },
      { spell:'Convoke the Spirits', cd:'2 min', effect:'12 random heals in 4 sec', when:'Emergency or extra burst healing' },
      { spell:'Nature\'s Swiftness', cd:'1 min', effect:'Next heal is instant + 300% stronger', when:'Emergency — someone nearly dead' },
      { spell:'Innervate',     cd:'3 min',  effect:'Free mana 10 sec', when:'At low mana — use on yourself or healer partner' },
    ]
  },

  utility: {
    nl: [
      { spell:'Rebirth',          type:'Rez',       note:'In-combat rez — als healer ben jij de primaire gebruiker' },
      { spell:'Stampeding Roar',  type:'Groep',     note:'60% snelheidsboost groep — ideaal bij mechanic run-outs' },
      { spell:'Remove Corruption', type:'Dispel',   note:'Verwijdert Curses en Poisons van groepsleden' },
      { spell:'Typhoon',          type:'Knockback',  note:'Noodoptie voor interrupt of afstand creëren' },
      { spell:'Innervate',        type:'Mana',      note:'Geef aan jezelf of andere healer bij mana problemen' },
    ],
    en: [
      { spell:'Rebirth',          type:'Rez',       note:'In-combat rez — as healer you are the primary user' },
      { spell:'Stampeding Roar',  type:'Group',     note:'60% speed boost group — ideal during mechanic run-outs' },
      { spell:'Remove Corruption', type:'Dispel',   note:'Removes Curses and Poisons from group members' },
      { spell:'Typhoon',          type:'Knockback',  note:'Emergency option for interrupt or creating distance' },
      { spell:'Innervate',        type:'Mana',      note:'Give to yourself or other healer during mana issues' },
    ]
  },

  tips: {
    nl: [
      { icon:'🌿', title:'HoTs preventief plaatsen', text:'Resto Druid healt het best als je HoTs neer zet VOOR de schade. Kijk de fight mechanics op voorhand — weet wanneer schade komt.' },
      { icon:'💧', title:'Mana management', text:'Rejuvenation is duur. In rustige momenten gebruik je Wrath (DPS) en spaar je mana. Innervate gebruiken zodra je onder 70% mana gaat.' },
      { icon:'🌸', title:'Efflorescence nooit vergeten', text:'Efflorescence kost bijna geen mana en healt iedereen die erin staat. Altijd geplaatst, altijd verplaatsen als de groep beweegt.' },
      { icon:'⚡', title:'Nature\'s Swiftness voor nood', text:'Als iemand bijna dood gaat: Nature\'s Swiftness → Regrowth. Dat is een instant 300% sterke direct heal. Gebruik het snel!' },
      { icon:'🔄', title:'Flourish na Wild Growth', text:'Wild Growth → direct Flourish. Flourish verlengt alle HoTs met 8 sec, inclusief de fresh Wild Growth. Perfecte combinatie.' },
    ],
    en: [
      { icon:'🌿', title:'Place HoTs preventively', text:'Resto Druid heals best when you place HoTs BEFORE damage. Look up fight mechanics in advance — know when damage is coming.' },
      { icon:'💧', title:'Mana management', text:'Rejuvenation is expensive. During quiet moments use Wrath (DPS) and save mana. Use Innervate as soon as you go below 70% mana.' },
      { icon:'🌸', title:'Never forget Efflorescence', text:'Efflorescence costs almost no mana and heals everyone standing in it. Always placed, always reposition when the group moves.' },
      { icon:'⚡', title:'Nature\'s Swiftness for emergency', text:'When someone is nearly dead: Nature\'s Swiftness → Regrowth. That\'s an instant 300% strong direct heal. Use it fast!' },
      { icon:'🔄', title:'Flourish after Wild Growth', text:'Wild Growth → immediately Flourish. Flourish extends all HoTs by 8 sec, including the fresh Wild Growth. Perfect combination.' },
    ]
  },

  macros: {
    nl: [
      { name:'Nature\'s Swiftness + Regrowth', code:'/cast Nature\'s Swiftness\n/cast Regrowth', note:'Noodheal combo — instant 300% sterke Regrowth op een critical HP speler.' },
      { name:'Wild Growth + Flourish', code:'/cast Wild Growth\n/cast Flourish', note:'AoE heal combo — verlengt Wild Growth direct voor maximale HoT duur.' },
      { name:'Rebirth op mouseover', code:'/cast [@mouseover] Rebirth', note:'In-combat rez zonder target te wisselen.' },
    ],
    en: [
      { name:'Nature\'s Swiftness + Regrowth', code:'/cast Nature\'s Swiftness\n/cast Regrowth', note:'Emergency heal combo — instant 300% strong Regrowth on a critical HP player.' },
      { name:'Wild Growth + Flourish', code:'/cast Wild Growth\n/cast Flourish', note:'AoE heal combo — immediately extends Wild Growth for maximum HoT duration.' },
      { name:'Rebirth on mouseover', code:'/cast [@mouseover] Rebirth', note:'In-combat rez without switching targets.' },
    ]
  },

  resource_info: {
    nl: {
      intro: 'Restoration gebruikt Mana als resource. Mana is beperkt — mana management is cruciaal in lange fights. Gebruik Innervate en efficiente spells om mana te sparen.',
      generate: [
        'Mana regenereert passief (traag tijdens gevecht)',
        'Innervate — 10 sec gratis mana — gebruik vroeg',
        'Potion of Recklessness — mana restore in nood',
        'Wrath spammen als DPS kost minder mana dan healen',
      ],
      spend: [
        'Rejuvenation — duur maar sterk HoT',
        'Wild Growth — duur maar beste AoE heal',
        'Regrowth — duurste spell, alleen in nood',
        'Tranquility — kanaal, kost mana maar enorm effect',
      ],
      pet_tip: '💡 Als je mana laag is: stop met Rejuvenation spammen, gebruik alleen Lifebloom + Swiftmend + Efflorescence tot je Innervate kan gebruiken!',
      pets: [],
    },
    en: {
      intro: 'Restoration uses Mana as its resource. Mana is limited — mana management is crucial in long fights. Use Innervate and efficient spells to conserve mana.',
      generate: [
        'Mana regenerates passively (slowly during combat)',
        'Innervate — 10 sec free mana — use early',
        'Potion of Recklessness — mana restore in emergency',
        'Spamming Wrath as DPS costs less mana than healing',
      ],
      spend: [
        'Rejuvenation — expensive but strong HoT',
        'Wild Growth — expensive but best AoE heal',
        'Regrowth — most expensive spell, emergency only',
        'Tranquility — channel, costs mana but massive effect',
      ],
      pet_tip: '💡 If mana is low: stop spamming Rejuvenation, use only Lifebloom + Swiftmend + Efflorescence until you can use Innervate!',
      pets: [],
    }
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Magisters',  effect:'Verhoogt Intellect (= mana + healingkracht) voor 1 uur.', note:'Altijd actief als healer' },
      { type:'pot',    name:'Potion of Recklessness',        effect:'Intellect boost + mana restore in één.',        note:'Gebruik bij laag mana of burst healing moment' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Intellect en Stamina via groepsfeast.',         note:'Feast vragen aan tank' },
      { type:'food',   name:'Royal Roast',    effect:'Solo food — hoge Intellect bonus.',              note:'Backup als geen feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primaire stat 1 uur.',                          note:'Altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Magisters',  effect:'Increases Intellect (= mana + healing power) for 1 hour.', note:'Always active as healer' },
      { type:'pot',    name:'Potion of Recklessness',        effect:'Intellect boost + mana restore in one.',        note:'Use at low mana or burst healing moment' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Intellect and Stamina via group feast.',       note:'Ask tank for feast' },
      { type:'food',   name:'Royal Roast',    effect:'Solo food — high Intellect bonus.',             note:'Backup if no feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primary stat 1 hour.',                         note:'Always use' },
    ]
  },
};

ALL_SPECS.push(SPEC_RESTORATION_DRUID);

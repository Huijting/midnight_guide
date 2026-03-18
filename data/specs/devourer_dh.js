if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_DEVOURER_DH = {
  id: 'devourer_dh',
  icon: '🦋',
  class: 'Demon Hunter',
  spec: { nl: 'Devourer', en: 'Devourer', da: 'Devourer' },
  role: 'ranged',
  armor: 'Leather',
  weapon: { nl: 'Warglaives (ranged focus)', en: 'Warglaives (ranged focus)', da: 'Warglaives (ranged fokus)' },
  resource: 'Fury + Soul Fragments',
  patch: '1.0',
  color: '#6B21A8',

  summary: {
    nl: 'Devourer Demon Hunter is een mid-range caster DPS die Cosmic schade doet via void-empowered spells. Speelt op 25m afstand met Void Metamorphosis als kernmechaniek.',
    en: 'Devourer Demon Hunter is a mid-range caster DPS dealing Cosmic damage through void-empowered spells. Plays at 25-yard range with Void Metamorphosis as core mechanic.',
    da: 'Devourer Demon Hunter er en mid-range caster DPS der gør Cosmic-skade via void-empowered spells. Spiller på 25m afstand med Void Metamorphosis som kernenmekanik.',
  },
  pros: {
    nl: ['Semi-ranged — veilige afstand tot mechanics', 'Void Metamorphosis = krachtige burst vensters', 'Goede AoE via Hurl Glaive + Fel Barrage', 'Blur + Demonic Resilience voor defensie'],
    en: ['Semi-ranged — safe distance from mechanics', 'Void Metamorphosis = powerful burst windows', 'Good AoE via Hurl Glaive + Fel Barrage', 'Blur + Demonic Resilience for defense'],
    da: ['Semi-ranged — sikker afstand til mekanikker', 'Void Metamorphosis = kraftfulde burst-vinduer', 'God AoE via Hurl Glaive + Fel Barrage', 'Blur + Demonic Resilience til forsvar'],
  },
  cons: {
    nl: ['Resource management (Fury + Souls) is complex', 'Void Meta timing cruciaal', 'Minder burst dan Havoc buiten Meta'],
    en: ['Resource management (Fury + Souls) is complex', 'Void Meta timing crucial', 'Less burst than Havoc outside Meta'],
    da: ['Ressourcestyring (Fury + Souls) er kompleks', 'Void Meta-timing afgørende', 'Mindre burst end Havoc uden for Meta'],
  },

  cheatsheet: {
    nl: {
      opener: 'Soul Immolation → Consume → Reap → Void Metamorphosis → Collapsing Star spam → Void Ray',
      single: 'Void Ray (Fury dump) → Reap (Souls) → Consume (filler) → Void Metamorphosis op Souls',
      aoe: 'Void Metamorphosis → Collapsing Star → Hurl Glaive → Fel Barrage → Void Ray',
      rules: [
        'Soul Fragments verzamelen voor Void Metamorphosis',
        'Void Ray als Fury dump — nooit Fury verspillen',
        'Collapsing Star in Void Meta — rampt per cast',
        'Hurl Glaive + Fel Barrage voor ranged AoE burst',
        'Blur bij grote mechanics — twee charges met Demonic Resilience',
      ],
    },
    en: {
      opener: 'Soul Immolation → Consume → Reap → Void Metamorphosis → Collapsing Star spam → Void Ray',
      single: 'Void Ray (Fury dump) → Reap (Souls) → Consume (filler) → Void Metamorphosis on Souls',
      aoe: 'Void Metamorphosis → Collapsing Star → Hurl Glaive → Fel Barrage → Void Ray',
      rules: [
        'Collect Soul Fragments for Void Metamorphosis',
        'Void Ray as Fury dump — never waste Fury',
        'Collapsing Star in Void Meta — ramps per cast',
        'Hurl Glaive + Fel Barrage for ranged AoE burst',
        'Blur during major mechanics — two charges with Demonic Resilience',
      ],
    },
    da: {
      opener: 'Soul Immolation → Consume → Reap → Void Metamorphosis → Collapsing Star-spam → Void Ray',
      single: 'Void Ray (Fury-dump) → Reap (Souls) → Consume (fyldstof) → Void Metamorphosis på Souls',
      aoe: 'Void Metamorphosis → Collapsing Star → Hurl Glaive → Fel Barrage → Void Ray',
      rules: [
        'Saml Soul Fragments til Void Metamorphosis',
        'Void Ray som Fury-dump — spild aldrig Fury',
        'Collapsing Star i Void Meta — stiger per cast',
        'Hurl Glaive + Fel Barrage til ranged AoE burst',
        'Blur ved store mekanikker — to charges med Demonic Resilience',
      ],
    },
  },

  rotation: {
    nl: {
      apex_tip: '💡 Void Metamorphosis = je burst venster. Verzamel Souls, transformeer, en spam Collapsing Star!',
      opener: [
        { spell: 'Soul Immolation', why: 'Verhoogt Soul + Fury generatie' },
        { spell: 'Consume', why: 'Filler — genereert Souls en Fury' },
        { spell: 'Reap', why: 'Verzamelt Soul Fragments' },
        { spell: 'Void Metamorphosis', why: 'Transformeer — kern burst venster' },
        { spell: 'Collapsing Star', why: 'Finisher in Meta — rampt per cast' },
      ],
      single: [
        { spell: 'Void Ray', why: 'Primaire Fury dump — altijd gebruiken' },
        { spell: 'Reap', why: 'Soul Fragments voor volgende Void Meta' },
        { spell: 'Consume', why: 'Filler — Souls + Fury generatie' },
        { spell: 'Void Metamorphosis', why: 'Bij 50 Souls (of 35 met talents)' },
        { spell: 'Collapsing Star', why: 'In Void Meta — maximale schade' },
      ],
      aoe: [
        { spell: 'Void Metamorphosis', why: 'Vergroot alle AoE schade' },
        { spell: 'Collapsing Star', why: 'Sterk in Meta op meerdere targets' },
        { spell: 'Hurl Glaive', why: 'Ranged AoE — altijd in bereik' },
        { spell: 'Fel Barrage', why: 'Ranged AoE burst op cluster' },
        { spell: 'Void Ray', why: 'Fury dump met cleave' },
      ],
    },
    en: {
      apex_tip: '💡 Void Metamorphosis = your burst window. Collect Souls, transform, and spam Collapsing Star!',
      opener: [
        { spell: 'Soul Immolation', why: 'Increases Soul + Fury generation' },
        { spell: 'Consume', why: 'Filler — generates Souls and Fury' },
        { spell: 'Reap', why: 'Collects Soul Fragments' },
        { spell: 'Void Metamorphosis', why: 'Transform — core burst window' },
        { spell: 'Collapsing Star', why: 'Finisher in Meta — ramps per cast' },
      ],
      single: [
        { spell: 'Void Ray', why: 'Primary Fury dump — always use' },
        { spell: 'Reap', why: 'Soul Fragments for next Void Meta' },
        { spell: 'Consume', why: 'Filler — Souls + Fury generation' },
        { spell: 'Void Metamorphosis', why: 'At 50 Souls (or 35 with talents)' },
        { spell: 'Collapsing Star', why: 'In Void Meta — maximum damage' },
      ],
      aoe: [
        { spell: 'Void Metamorphosis', why: 'Increases all AoE damage' },
        { spell: 'Collapsing Star', why: 'Strong in Meta on multiple targets' },
        { spell: 'Hurl Glaive', why: 'Ranged AoE — always in range' },
        { spell: 'Fel Barrage', why: 'Ranged AoE burst on cluster' },
        { spell: 'Void Ray', why: 'Fury dump with cleave' },
      ],
    },
    da: {
      apex_tip: '💡 Void Metamorphosis = dit burst-vindue. Saml Souls, transformer, og spam Collapsing Star!',
      opener: [
        { spell: 'Soul Immolation', why: 'Øger Soul + Fury-generering' },
        { spell: 'Consume', why: 'Fyldstof — genererer Souls og Fury' },
        { spell: 'Reap', why: 'Samler Soul Fragments' },
        { spell: 'Void Metamorphosis', why: 'Transformer — kerne burst-vindue' },
        { spell: 'Collapsing Star', why: 'Finisher i Meta — stiger per cast' },
      ],
      single: [
        { spell: 'Void Ray', why: 'Primær Fury-dump — brug altid' },
        { spell: 'Reap', why: 'Soul Fragments til næste Void Meta' },
        { spell: 'Consume', why: 'Fyldstof — Souls + Fury-generering' },
        { spell: 'Void Metamorphosis', why: 'Ved 50 Souls (eller 35 med talents)' },
        { spell: 'Collapsing Star', why: 'I Void Meta — maksimal skade' },
      ],
      aoe: [
        { spell: 'Void Metamorphosis', why: 'Øger al AoE-skade' },
        { spell: 'Collapsing Star', why: 'Stærk i Meta på flere mål' },
        { spell: 'Hurl Glaive', why: 'Ranged AoE — altid i rækkevidde' },
        { spell: 'Fel Barrage', why: 'Ranged AoE burst på klynge' },
        { spell: 'Void Ray', why: 'Fury-dump med cleave' },
      ],
    },
  },

  stats: {
    nl: {
      tip: 'Intellect is je primaire stat. Haste verlaagt cast times en verhoogt Soul generatie.',
      list: [
        { rank: 1, stat: 'Intellect', bars: 5, note: 'Primaire stat — altijd maximaliseren' },
        { rank: 2, stat: 'Haste', bars: 4, note: 'Snellere casts + meer Souls' },
        { rank: 3, stat: 'Critical Strike', bars: 3, note: 'Verhoogt burst in Void Meta' },
        { rank: 4, stat: 'Versatility', bars: 2, note: 'Extra schade én overleving' },
        { rank: 5, stat: 'Mastery', bars: 2, note: 'Verhoogt Cosmic schade' },
      ],
    },
    en: {
      tip: 'Intellect is your primary stat. Haste reduces cast times and increases Soul generation.',
      list: [
        { rank: 1, stat: 'Intellect', bars: 5, note: 'Primary stat — always maximize' },
        { rank: 2, stat: 'Haste', bars: 4, note: 'Faster casts + more Souls' },
        { rank: 3, stat: 'Critical Strike', bars: 3, note: 'Increases burst in Void Meta' },
        { rank: 4, stat: 'Versatility', bars: 2, note: 'Extra damage AND survivability' },
        { rank: 5, stat: 'Mastery', bars: 2, note: 'Increases Cosmic damage' },
      ],
    },
    da: {
      tip: 'Intellect er din primære stat. Haste reducerer cast-tider og øger Soul-generering.',
      list: [
        { rank: 1, stat: 'Intellect', bars: 5, note: 'Primær stat — maksimer altid' },
        { rank: 2, stat: 'Haste', bars: 4, note: 'Hurtigere casts + flere Souls' },
        { rank: 3, stat: 'Critical Strike', bars: 3, note: 'Øger burst i Void Meta' },
        { rank: 4, stat: 'Versatility', bars: 2, note: 'Ekstra skade OG overlevelse' },
        { rank: 5, stat: 'Mastery', bars: 2, note: 'Øger Cosmic-skade' },
      ],
    },
  },

  cooldowns: {
    nl: [
      { spell: 'Void Metamorphosis', cd: 'Souls', effect: 'Transformeer — Cosmic burst', when: 'Bij 50 Souls (35 met build)' },
      { spell: 'Hurl Glaive', cd: 'kort', effect: 'Ranged AoE glaive', when: 'Op adds cluster voor burst' },
      { spell: 'Fel Barrage', cd: '~30 sec', effect: 'Ranged AoE channel', when: 'Op adds cluster met Hurl Glaive' },
      { spell: 'Blur', cd: '1 min', effect: '50% dodge, 2 charges', when: 'Grote mechanic — Demonic Resilience' },
      { spell: 'Disrupt', cd: '15 sec', effect: 'Interrupt', when: 'Op belangrijke casts — semi-ranged altijd in bereik' },
    ],
    en: [
      { spell: 'Void Metamorphosis', cd: 'Souls', effect: 'Transform — Cosmic burst', when: 'At 50 Souls (35 with build)' },
      { spell: 'Hurl Glaive', cd: 'short', effect: 'Ranged AoE glaive', when: 'On adds cluster for burst' },
      { spell: 'Fel Barrage', cd: '~30 sec', effect: 'Ranged AoE channel', when: 'On adds cluster with Hurl Glaive' },
      { spell: 'Blur', cd: '1 min', effect: '50% dodge, 2 charges', when: 'Major mechanic — Demonic Resilience' },
      { spell: 'Disrupt', cd: '15 sec', effect: 'Interrupt', when: 'On important casts — semi-ranged always in range' },
    ],
    da: [
      { spell: 'Void Metamorphosis', cd: 'Souls', effect: 'Transformer — Cosmic burst', when: 'Ved 50 Souls (35 med build)' },
      { spell: 'Hurl Glaive', cd: 'kort', effect: 'Ranged AoE glaive', when: 'På adds-klynge til burst' },
      { spell: 'Fel Barrage', cd: '~30 sek', effect: 'Ranged AoE channel', when: 'På adds-klynge med Hurl Glaive' },
      { spell: 'Blur', cd: '1 min', effect: '50% dodge, 2 charges', when: 'Stor mekanik — Demonic Resilience' },
      { spell: 'Disrupt', cd: '15 sek', effect: 'Interrupt', when: 'På vigtige casts — semi-ranged altid i rækkevidde' },
    ],
  },

  tips: {
    nl: [
      { icon: '🦋', title: 'Semi-ranged = veilig', text: 'Devourer speelt op 25m. Je bent altijd in bereik voor Disrupt op belangrijke casts, maar buiten melee range van veel mechanics.' },
      { icon: '💜', title: 'Void Meta timing', text: 'Verzamel Souls tot 50 (of 35) voordat je transformeert. Gebruik Meta op boss pull of grote M+ pack voor maximale Collapsing Star ramp.' },
      { icon: '⚔️', title: 'Hurl Glaive + Fel Barrage', text: 'Combo deze twee op adds clusters voor ranged AoE burst. Ideaal in M+ waar je veilig op afstand kunt blijven.' },
      { icon: '🛡️', title: 'Blur = twee charges', text: 'Met Demonic Resilience heb je twee Blur charges. Gebruik ze bij grote mechanics — je bent kwetsbaarder dan Vengeance.' },
    ],
    en: [
      { icon: '🦋', title: 'Semi-ranged = safe', text: 'Devourer plays at 25 yards. You are always in range for Disrupt on important casts, but outside melee range of many mechanics.' },
      { icon: '💜', title: 'Void Meta timing', text: 'Collect Souls to 50 (or 35) before transforming. Use Meta on boss pull or large M+ pack for maximum Collapsing Star ramp.' },
      { icon: '⚔️', title: 'Hurl Glaive + Fel Barrage', text: 'Combo these two on adds clusters for ranged AoE burst. Ideal in M+ where you can stay safely at range.' },
      { icon: '🛡️', title: 'Blur = two charges', text: 'With Demonic Resilience you have two Blur charges. Use them during major mechanics — you are more vulnerable than Vengeance.' },
    ],
    da: [
      { icon: '🦋', title: 'Semi-ranged = sikker', text: 'Devourer spiller på 25m. Du er altid i rækkevidde til Disrupt på vigtige casts, men uden for melee-range af mange mekanikker.' },
      { icon: '💜', title: 'Void Meta-timing', text: 'Saml Souls til 50 (eller 35) før du transformerer. Brug Meta ved boss-pull eller stor M+-gruppe til maksimal Collapsing Star-stigning.' },
      { icon: '⚔️', title: 'Hurl Glaive + Fel Barrage', text: 'Kombiner disse to på adds-klynger til ranged AoE burst. Ideelt i M+ hvor du kan blive sikkert på afstand.' },
      { icon: '🛡️', title: 'Blur = to charges', text: 'Med Demonic Resilience har du to Blur-charges. Brug dem ved store mekanikker — du er mere sårbar end Vengeance.' },
    ],
  },

  macros: {
    nl: [
      { name: 'Void Meta + Collapsing Star', code: '/cast Void Metamorphosis\n/cast Collapsing Star', note: 'Meta + eerste Star in één GCD.' },
      { name: 'Hurl Glaive op cursor', code: '/cast [@cursor] Hurl Glaive', note: 'Ranged AoE op cursor positie.' },
      { name: 'Disrupt op focus', code: '/cast [@focus,harm][] Disrupt', note: 'Interrupt focus target — semi-ranged altijd in bereik.' },
    ],
    en: [
      { name: 'Void Meta + Collapsing Star', code: '/cast Void Metamorphosis\n/cast Collapsing Star', note: 'Meta + first Star in one GCD.' },
      { name: 'Hurl Glaive at cursor', code: '/cast [@cursor] Hurl Glaive', note: 'Ranged AoE at cursor position.' },
      { name: 'Disrupt on focus', code: '/cast [@focus,harm][] Disrupt', note: 'Interrupt focus target — semi-ranged always in range.' },
    ],
    da: [
      { name: 'Void Meta + Collapsing Star', code: '/cast Void Metamorphosis\n/cast Collapsing Star', note: 'Meta + første Star i én GCD.' },
      { name: 'Hurl Glaive ved markør', code: '/cast [@cursor] Hurl Glaive', note: 'Ranged AoE ved markørposition.' },
      { name: 'Disrupt på fokus', code: '/cast [@focus,harm][] Disrupt', note: 'Interrupt fokusmål — semi-ranged altid i rækkevidde.' },
    ],
  },

  resource_info: {
    nl: {
      intro: 'Devourer gebruikt Fury (0-120) en Soul Fragments. Fury voor Void Ray; Souls voor Void Metamorphosis.',
      generate: [
        { spell: 'Consume', note: 'Filler — genereert Souls en Fury' },
        { spell: 'Reap', note: 'Verzamelt Soul Fragments van targets' },
        { spell: 'Soul Immolation', note: 'Verhoogt Soul + Fury generatie' },
      ],
      spend: [
        { spell: 'Void Ray', note: 'Primaire Fury dump' },
        { spell: 'Collapsing Star', note: 'In Void Meta — rampt per cast' },
      ],
      pet_tip: '💡 Void Metamorphosis eindigt als Fury op is. Optimaliseer je rotatie voor langere Meta vensters!',
      pets: [],
    },
    en: {
      intro: 'Devourer uses Fury (0-120) and Soul Fragments. Fury for Void Ray; Souls for Void Metamorphosis.',
      generate: [
        { spell: 'Consume', note: 'Filler — generates Souls and Fury' },
        { spell: 'Reap', note: 'Collects Soul Fragments from targets' },
        { spell: 'Soul Immolation', note: 'Increases Soul + Fury generation' },
      ],
      spend: [
        { spell: 'Void Ray', note: 'Primary Fury dump' },
        { spell: 'Collapsing Star', note: 'In Void Meta — ramps per cast' },
      ],
      pet_tip: '💡 Void Metamorphosis ends when Fury depletes. Optimize your rotation for longer Meta windows!',
      pets: [],
    },
    da: {
      intro: 'Devourer bruger Fury (0-120) og Soul Fragments. Fury til Void Ray; Souls til Void Metamorphosis.',
      generate: [
        { spell: 'Consume', note: 'Fyldstof — genererer Souls og Fury' },
        { spell: 'Reap', note: 'Samler Soul Fragments fra mål' },
        { spell: 'Soul Immolation', note: 'Øger Soul + Fury-generering' },
      ],
      spend: [
        { spell: 'Void Ray', note: 'Primær Fury-dump' },
        { spell: 'Collapsing Star', note: 'I Void Meta — stiger per cast' },
      ],
      pet_tip: '💡 Void Metamorphosis slutter når Fury er tom. Optimaliser din rotation til længere Meta-vinduer!',
      pets: [],
    },
  },

  consumables: {
    nl: [
      { type: 'flask', name: 'Flask of the Magisters', effect: 'Verhoogt Intellect significant voor 1 uur.', note: 'Altijd actief in M+ en raid' },
      { type: 'pot', name: 'Potion of Recklessness', effect: 'Grote Intellect boost 25 sec bij pull.', note: 'Bij Void Meta venster' },
      { type: 'food', name: 'Silvermoon Parade (Feast)', effect: '+Intellect en Stamina via groepsfeast.', note: 'Feast vragen' },
      { type: 'food', name: 'Royal Roast', effect: 'Solo food — hoge Intellect bonus.', note: 'Backup als geen feast' },
      { type: 'rune', name: 'Void-Touched Augment Rune', effect: '+Primaire stat 1 uur.', note: 'Altijd gebruiken' },
    ],
    en: [
      { type: 'flask', name: 'Flask of the Magisters', effect: 'Significantly increases Intellect for 1 hour.', note: 'Always active in M+ and raid' },
      { type: 'pot', name: 'Potion of Recklessness', effect: 'Large Intellect boost 25 sec on pull.', note: 'During Void Meta window' },
      { type: 'food', name: 'Silvermoon Parade (Feast)', effect: '+Intellect and Stamina via group feast.', note: 'Ask for feast' },
      { type: 'food', name: 'Royal Roast', effect: 'Solo food — high Intellect bonus.', note: 'Backup if no feast' },
      { type: 'rune', name: 'Void-Touched Augment Rune', effect: '+Primary stat 1 hour.', note: 'Always use' },
    ],
    da: [
      { type: 'flask', name: 'Flask of the Magisters', effect: 'Øger Intellect markant i 1 time.', note: 'Altid aktiv i M+ og raid' },
      { type: 'pot', name: 'Potion of Recklessness', effect: 'Stor Intellect-boost 25 sek ved pull.', note: 'Ved Void Meta-vindue' },
      { type: 'food', name: 'Silvermoon Parade (Feast)', effect: '+Intellect og Stamina via gruppefeast.', note: 'Bed om feast' },
      { type: 'food', name: 'Royal Roast', effect: 'Solo-mad — høj Intellect-bonus.', note: 'Backup hvis ingen feast' },
      { type: 'rune', name: 'Void-Touched Augment Rune', effect: '+Primær stat 1 time.', note: 'Brug altid' },
    ],
  },
};

ALL_SPECS.push(SPEC_DEVOURER_DH);

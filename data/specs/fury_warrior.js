if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_FURY_WARRIOR = {
  id: 'fury_warrior',
  icon: '🌪️',
  class: 'Warrior',
  spec:   { nl: 'Fury', en: 'Fury'},
  role:   'melee',
  armor:  'Plate',
  weapon: { nl: 'Two one-hand weapons', en: 'Two one-handed weapons'},
  resource: 'Rage',
  patch: '1.0',
  color: '#C79C6E',

  summary: {
    nl: 'Fury is een razende melee DPS die met twee wapens zwaait en continu Rage genereert. Draait om Rampage als Rage spender en Recklessness als grote cooldown.',
    en: 'Fury is a frenzied melee DPS wielding two weapons and constantly generating Rage. Revolves around Rampage as Rage spender and Recklessness as major cooldown.'
  },
  pros: {
    nl: ['Hoge sustained schade zonder vensters', 'Heel actieve speelstijl — nooit stil', 'Enrage synergieën zorgen voor hoge uptime', 'Goede AoE met Whirlwind'],
    en: ['High sustained damage without windows', 'Very active playstyle — never idle', 'Enrage synergies ensure high uptime', 'Good AoE with Whirlwind']
  },
  cons: {
    nl: ['Rage management is complex', 'Lage overleving vergeleken met Arms', 'Kwetsbaar bij movement intensieve fights'],
    en: ['Rage management is complex', 'Lower survivability compared to Arms', 'Vulnerable in movement-intensive fights']
  },

  cheatsheet: {
    nl: {
      opener: 'Charge → Recklessness → Bloodthirst → Raging Blow → Rampage (op 85+ Rage) → herhalen',
      single: 'Rampage (bij 85+ Rage) → Bloodthirst (voor Enrage) → Raging Blow → Execute (<35%)',
      aoe:    'Whirlwind (geeft Meat Cleaver) → Rampage raakt alles → Bloodthirst cleave',
      rules: [
        'Rampage bij 85+ Rage — nooit boven 100 gaan',
        'Bloodthirst zo vaak mogelijk — genereert Rage én triggert Enrage',
        'Enrage actief houden is cruciaal voor je schade',
        'Raging Blow altijd op 2 charges — nooit verspillen',
        'Meat Cleaver: Whirlwind voor AoE hit op volgende 3 aanvallen',
      ],
    },
    en: {
      opener: 'Charge → Recklessness → Bloodthirst → Raging Blow → Rampage (at 85+ Rage) → repeat',
      single: 'Rampage (at 85+ Rage) → Bloodthirst (for Enrage) → Raging Blow → Execute (<35%)',
      aoe:    'Whirlwind (grants Meat Cleaver) → Rampage hits everything → Bloodthirst cleave',
      rules: [
        'Rampage at 85+ Rage — never go above 100',
        'Bloodthirst as often as possible — generates Rage AND triggers Enrage',
        'Keeping Enrage active is crucial for your damage',
        'Raging Blow always on 2 charges — never waste',
        'Meat Cleaver: Whirlwind for AoE hit on next 3 attacks',
      ],
    }
  },

  rotation: {
    nl: {
      apex_tip: '💡 Enrage = je schademodus. Bloodthirst is je Enrage trigger — prioriteer het altijd!',
      opener: [
        { spell: 'Charge', why: 'Rage + positie' },
        { spell: 'Recklessness', why: 'Grote cooldown — max crit kans' },
        { spell: 'Bloodthirst', why: 'Triggert Enrage direct' },
        { spell: 'Raging Blow', why: 'Gebruik charges op' },
        { spell: 'Rampage', why: 'Zodra je 85+ Rage hebt' },
      ],
      single: [
        { spell: 'Rampage', why: 'Bij 85+ Rage — altijd prioriteit om te dumpen' },
        { spell: 'Bloodthirst', why: 'Enrage trigger + Rage generatie' },
        { spell: 'Raging Blow', why: 'Gebruik op 2 charges, nooit laten cappen' },
        { spell: 'Whirlwind', why: 'Filler als niks anders beschikbaar' },
        { spell: 'Execute <35%', why: 'Execute fase begint al bij 35%!' },
      ],
      aoe: [
        { spell: 'Whirlwind', why: 'Geeft Meat Cleaver stack — volgende 3 aanvallen AoE' },
        { spell: 'Rampage', why: 'Met Meat Cleaver: raakt alle nearby targets' },
        { spell: 'Bloodthirst', why: 'Cleave via Meat Cleaver actief' },
        { spell: 'Raging Blow', why: 'Ook AoE via Meat Cleaver' },
      ],
    },
    en: {
      apex_tip: '💡 Enrage = your damage mode. Bloodthirst is your Enrage trigger — always prioritize it!',
      opener: [
        { spell: 'Charge', why: 'Rage + positioning' },
        { spell: 'Recklessness', why: 'Major cooldown — max crit chance' },
        { spell: 'Bloodthirst', why: 'Triggers Enrage immediately' },
        { spell: 'Raging Blow', why: 'Spend charges' },
        { spell: 'Rampage', why: 'Once you have 85+ Rage' },
      ],
      single: [
        { spell: 'Rampage', why: 'At 85+ Rage — always priority to dump' },
        { spell: 'Bloodthirst', why: 'Enrage trigger + Rage generation' },
        { spell: 'Raging Blow', why: 'Use at 2 charges, never let it cap' },
        { spell: 'Whirlwind', why: 'Filler when nothing else available' },
        { spell: 'Execute <35%', why: 'Execute phase starts as early as 35%!' },
      ],
      aoe: [
        { spell: 'Whirlwind', why: 'Gives Meat Cleaver stack — next 3 attacks AoE' },
        { spell: 'Rampage', why: 'With Meat Cleaver: hits all nearby targets' },
        { spell: 'Bloodthirst', why: 'Cleave via active Meat Cleaver' },
        { spell: 'Raging Blow', why: 'Also AoE via Meat Cleaver' },
      ],
    }
  },

  stats: {
    nl: {
      tip: 'Haste is koning voor Fury — meer swings = meer Rage = meer Rampage.',
      list: [
        { rank:1, stat:'Strength',        bars:5, note:'Primaire stat' },
        { rank:2, stat:'Haste',           bars:5, note:'Meer swings, meer Rage, meer Rampage' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Vergroot Enrage proc kans via Bloodthirst' },
        { rank:4, stat:'Mastery',         bars:2, note:'Verhoogt schade tijdens Enrage' },
        { rank:5, stat:'Versatility',     bars:1, note:'Laagste prioriteit' },
      ],
    },
    en: {
      tip: 'Haste is king for Fury — more swings = more Rage = more Rampage.',
      list: [
        { rank:1, stat:'Strength',        bars:5, note:'Primary stat' },
        { rank:2, stat:'Haste',           bars:5, note:'More swings, more Rage, more Rampage' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Increases Enrage proc chance via Bloodthirst' },
        { rank:4, stat:'Mastery',         bars:2, note:'Increases damage during Enrage' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lowest priority' },
      ],
    }
  },

  cooldowns: {
    nl: [
      { spell:'Recklessness',    cd:'1.5 min', effect:'Max crit kans 10 sec + Rage generatie boost', when:'Op pull, altijd samen met Bloodthirst' },
      { spell:'Rampage',         cd:'Rage',    effect:'Reeks van 4 aanvallen, triggert Enrage', when:'Bij 85+ Rage altijd direct' },
      { spell:'Bladestorm',      cd:'1 min',   effect:'6 sec AoE spin — onstopbaar tijdens spin', when:'Grote AoE packs in M+' },
      { spell:'Rallying Cry',    cd:'3 min',   effect:'Tijdelijke HP boost heel groep', when:'Grote schade fase of nood' },
      { spell:'Enraged Regen',   cd:'1 min',   effect:'Healt voor % max HP als Enraged', when:'Persoonlijke noodheling' },
    ],
    en: [
      { spell:'Recklessness',    cd:'1.5 min', effect:'Max crit chance 10 sec + Rage generation boost', when:'On pull, always together with Bloodthirst' },
      { spell:'Rampage',         cd:'Rage',    effect:'Sequence of 4 attacks, triggers Enrage', when:'At 85+ Rage always immediately' },
      { spell:'Bladestorm',      cd:'1 min',   effect:'6 sec AoE spin — unstoppable during spin', when:'Large AoE packs in M+' },
      { spell:'Rallying Cry',    cd:'3 min',   effect:'Temporary HP boost for entire group', when:'Major damage phase or emergency' },
      { spell:'Enraged Regen',   cd:'1 min',   effect:'Heals for % max HP while Enraged', when:'Personal emergency healing' },
    ]
  },

  utility: {
    nl: [
      { spell:'Heroic Leap',   type:'Mobiliteit', note:'Spring naar locatie — ideaal voor snel bereiken van mobs' },
      { spell:'Rallying Cry',  type:'Groep',      note:'Tijdelijke max HP boost voor iedereen' },
      { spell:'Pummel',        type:'Interrupt',  note:'Interrupt op 15 sec CD — altijd beschikbaar in M+' },
      { spell:'Hamstring',     type:'Slow',       note:'50% slow voor kiting of adds vasthouden' },
    ],
    en: [
      { spell:'Heroic Leap',   type:'Mobility',  note:'Jump to location — ideal for quickly reaching mobs' },
      { spell:'Rallying Cry',  type:'Group',     note:'Temporary max HP boost for everyone' },
      { spell:'Pummel',        type:'Interrupt', note:'Interrupt on 15 sec CD — always available in M+' },
      { spell:'Hamstring',     type:'Slow',      note:'50% slow for kiting or holding adds' },
    ]
  },

  tips: {
    nl: [
      { icon:'🌪️', title:'Enrage uptime is alles', text:'Bloodthirst heeft een kans op Enrage — als je niet Enraged bent, is Bloodthirst altijd prioriteit #1. Alles draait hierom.' },
      { icon:'⚡', title:'Rampage timing', text:'Gebruik Rampage bij 85-100 Rage. Niet wachten op 100 — dan verspil je Rage van auto attacks.' },
      { icon:'🥩', title:'Meat Cleaver in M+', text:'In trash packs: altijd beginnen met Whirlwind zodat je volgende 3 abilities de hele groep raken. Gratis AoE schade.' },
      { icon:'💀', title:'Execute al bij 35%', text:'Fury heeft een vroegere execute fase dan Arms. Zodra target <35% HP: switch naar Execute als prioriteit.' },
      { icon:'🏃', title:'Heroic Leap gebruiken', text:'Heroic Leap is je beste gap-closer in M+. Gebruik het niet alleen voor mobiliteit maar ook om snel naar de volgende groep te springen.' },
    ],
    en: [
      { icon:'🌪️', title:'Enrage uptime is everything', text:'Bloodthirst has a chance to Enrage — if you are not Enraged, Bloodthirst is always priority #1. Everything revolves around this.' },
      { icon:'⚡', title:'Rampage timing', text:'Use Rampage at 85-100 Rage. Don\'t wait for 100 — you waste Rage from auto attacks.' },
      { icon:'🥩', title:'Meat Cleaver in M+', text:'In trash packs: always start with Whirlwind so your next 3 abilities hit the entire group. Free AoE damage.' },
      { icon:'💀', title:'Execute already at 35%', text:'Fury has an earlier execute phase than Arms. Once target is <35% HP: switch to Execute as priority.' },
      { icon:'🏃', title:'Using Heroic Leap', text:'Heroic Leap is your best gap-closer in M+. Use it not just for mobility but also to quickly jump to the next pack.' },
    ]
  },

  macros: {
    nl: [
      { name:'Recklessness + Rampage', code:'/cast Recklessness\n/cast Rampage', note:'Gooit beide op pull — start meteen in schademodus.' },
      { name:'Heroic Leap naar cursor', code:'/cast [@cursor] Heroic Leap', note:'Spring direct naar je muisaanwijzer zonder te hoeven klikken.' },
      { name:'Pummel interrupt', code:'/cast [@target] Pummel', note:'Snelle interrupt zonder mouseover gedoe.' },
    ],
    en: [
      { name:'Recklessness + Rampage', code:'/cast Recklessness\n/cast Rampage', note:'Casts both on pull — immediately enters damage mode.' },
      { name:'Heroic Leap to cursor', code:'/cast [@cursor] Heroic Leap', note:'Jump directly to your mouse cursor without clicking.' },
      { name:'Pummel interrupt', code:'/cast [@target] Pummel', note:'Quick interrupt without mouseover hassle.' },
    ]
  },

  resource_info: {
    nl: {
      intro: 'Fury genereert Rage via auto attacks en abilities. Rage is je fuel voor Rampage — je krachtigste aanval die ook Enrage triggert.',
      generate: [
        'Auto attacks met twee wapens = snelle Rage generatie',
        'Bloodthirst genereert Rage bij treffen',
        'Raging Blow genereert Rage',
        'Charge geeft directe Rage',
        'Recklessness boost: meer Rage per aanval',
      ],
      spend: [
        'Rampage bij 85+ Rage — triggert Enrage',
      ],
      pet_tip: '⚠️ Ga nooit boven 90 Rage zonder Rampage te gebruiken — dan verspil je Rage van auto attacks!',
      pets: [],
    },
    en: {
      intro: 'Fury generates Rage through auto attacks and abilities. Rage is your fuel for Rampage — your most powerful attack that also triggers Enrage.',
      generate: [
        'Auto attacks with two weapons = fast Rage generation',
        'Bloodthirst generates Rage on hit',
        'Raging Blow generates Rage',
        'Charge gives immediate Rage',
        'Recklessness bonus: more Rage per attack',
      ],
      spend: [
        'Rampage at 85+ Rage — triggers Enrage',
      ],
      pet_tip: '⚠️ Never go above 90 Rage without using Rampage — you waste Rage from auto attacks!',
      pets: [],
    }
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Shattered Sun',  effect:'Verhoogt Strength significant voor 1 uur.',   note:'Altijd actief in M+ en raid' },
      { type:'pot',    name:'Potion of Recklessness',             effect:'Grote Strength boost 25 sec bij pull/BL.',    note:'2 per boss: pull + execute fase' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Strength en Stamina via groepsfeast.',       note:'Feast vragen aan tank/healer' },
      { type:'food',   name:'Meat Lover\'s Delight',       effect:'Solo food backup — hoge Strength.',           note:'Altijd in bags' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primaire stat 1 uur, stapelt met rest.',     note:'Altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Shattered Sun',  effect:'Significantly increases Strength for 1 hour.', note:'Always active in M+ and raid' },
      { type:'pot',    name:'Potion of Recklessness',             effect:'Large Strength boost 25 sec on pull/BL.',    note:'2 per boss: pull + execute phase' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Strength and Stamina via group feast.',     note:'Ask tank/healer for feast' },
      { type:'food',   name:'Meat Lover\'s Delight',       effect:'Solo food backup — high Strength.',          note:'Always in bags' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primary stat 1 hour, stacks with rest.',   note:'Always use' },
    ]
  },
};

ALL_SPECS.push(SPEC_FURY_WARRIOR);

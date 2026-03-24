// ============================================================
// SPEC: Retribution Paladin
// WoW Midnight 12.0.1
// ============================================================

const SPEC_RET_PALADIN = {
  id: 'ret_paladin',
  icon: '⚔️',
  class: 'Paladin',
  spec:  { nl: 'Retribution', en: 'Retribution'},
  role:  'melee',
  armor: 'Plate',
  weapon: { nl: 'Twee-handig zwaard / knots / bijl', en: 'Two-handed sword / mace / axe'},
  resource: 'Holy Power (0–5)',
  patch: '12.0.1',
  color: '#f8d347',

  summary: {
    nl: 'Melee DPS met heilige krachten. Bouw Holy Power op met generators en geef het uit voor zware slagen. Sterke defensieve cooldowns en groepsnuttigheid maken Ret tot een complete pakket.',
    en: 'Melee DPS with holy power. Build Holy Power with generators and spend it for heavy strikes. Strong defensive cooldowns and group utility make Ret a complete package.'
  },

  pros: {
    nl: ['Sterke defensieve cooldowns (Divine Shield, Lay on Hands)', 'Goede groeps-utility (Blessing of Protection, Sacrifice)', 'Eenvoudig te leren rotatie', 'Sterk zowel single-target als AoE', 'Plate armor — meer survivability'],
    en: ['Strong defensive cooldowns (Divine Shield, Lay on Hands)', 'Good group utility (Blessing of Protection, Sacrifice)', 'Easy to learn rotation', 'Strong both single-target and AoE', 'Plate armor — more survivability']
  },

  cons: {
    nl: ['Melee — moet in de buurt van de boss blijven', 'Kwetsbaar voor AoE-schade in melee-range', 'Holy Power cappen = schade verlies', 'Minder mobiel dan ranged specs', 'Timing van cooldowns vereist oefening'],
    en: ['Melee — must stay near the boss', 'Vulnerable to AoE damage in melee range', 'Capping Holy Power = damage loss', 'Less mobile than ranged specs', 'Timing cooldowns requires practice']
  },

  cheatsheet: {
    nl: {
      opener:   "Avenging Wrath → Judgment → Blade of Justice → Templar's Verdict (3 HP) → Wake of Ashes → Templar's Verdict → Divine Storm (AoE)",
      single:   "Judgment → Blade of Justice → Hammer of Wrath → Consecration → Templar's Verdict (3+ HP) → filler spells",
      aoe:      "Consecration → Wake of Ashes → Divine Storm → Judgment → Blade of Justice → Divine Storm (3+ HP)",
      rules: [
        'Nooit Holy Power cappen op 5 — altijd uitgeven bij 3-5',
        'Avenging Wrath on cooldown — nooit sparen',
        'Judgment altijd voor Blade of Justice',
        'Hammer of Wrath alleen boven 20% of tijdens AW',
        'Consecration actief houden voor extra schade',
        'Divine Storm bij 2+ targets i.p.v. Templar\'s Verdict',
      ],
    },
    en: {
      opener:   "Avenging Wrath → Judgment → Blade of Justice → Templar's Verdict (3 HP) → Wake of Ashes → Templar's Verdict → Divine Storm (AoE)",
      single:   "Judgment → Blade of Justice → Hammer of Wrath → Consecration → Templar's Verdict (3+ HP) → filler spells",
      aoe:      "Consecration → Wake of Ashes → Divine Storm → Judgment → Blade of Justice → Divine Storm (3+ HP)",
      rules: [
        'Never cap Holy Power at 5 — always spend at 3-5',
        'Avenging Wrath on cooldown — never save it',
        'Judgment always before Blade of Justice',
        'Hammer of Wrath only above 20% or during AW',
        'Keep Consecration active for extra damage',
        'Divine Storm on 2+ targets instead of Templar\'s Verdict',
      ],
    }
  },

  rotation: {
    nl: {
      apex_tip: '✨ Holy Power: Genereer met Judgment, Blade of Justice, Consecration. Geef uit met Templar\'s Verdict (ST) of Divine Storm (AoE). Nooit cappen op 5!',
      opener: [
        { step: 1, spell: 'Avenging Wrath',     note: 'Grote burst cooldown — altijd als eerste' },
        { step: 2, spell: 'Judgment',            note: 'Genereert Holy Power + debuff' },
        { step: 3, spell: 'Blade of Justice',    note: 'Hoge schade + Holy Power' },
        { step: 4, spell: "Templar's Verdict",   note: 'Geef 3 Holy Power uit' },
        { step: 5, spell: 'Wake of Ashes',       note: 'Geeft 3 Holy Power + hoge schade' },
        { step: 6, spell: "Templar's Verdict",   note: 'Direct na Wake of Ashes' },
        { step: 7, spell: 'Hammer of Wrath',     note: 'Extra schade tijdens Avenging Wrath' },
      ],
      single: [
        { prio: '1', spell: 'Avenging Wrath',     note: 'On cooldown — verhoogt alle schade',               importance: 'ALTIJD' },
        { prio: '2', spell: 'Wake of Ashes',       note: 'On cooldown — 3 HP + hoge schade',                importance: 'ALTIJD' },
        { prio: '3', spell: 'Judgment',            note: 'On cooldown — debuff + HP generator',              importance: 'ALTIJD' },
        { prio: '4', spell: 'Blade of Justice',    note: 'On cooldown — hoge schade + HP',                  importance: 'ALTIJD' },
        { prio: '5', spell: 'Hammer of Wrath',     note: 'Als beschikbaar (>20% HP of tijdens AW)',          importance: 'HOOG' },
        { prio: '6', spell: "Templar's Verdict",   note: 'Bij 3-5 Holy Power — single target spender',       importance: 'HOOG' },
        { prio: '7', spell: 'Consecration',        note: 'Houd actief — genereert HP en extra schade',       importance: 'MIDDEN' },
        { prio: '8', spell: 'Exorcism / filler',   note: 'Filler als alles op cooldown staat',               importance: 'FILLER' },
      ],
      aoe: [
        { prio: '1', spell: 'Avenging Wrath',    note: 'On cooldown — alle Divine Storms schalen mee' },
        { prio: '2', spell: 'Wake of Ashes',      note: 'On cooldown — raakt meerdere targets' },
        { prio: '3', spell: 'Consecration',       note: 'Actief houden — AoE schade + HP generatie' },
        { prio: '4', spell: 'Divine Storm',        note: 'Bij 3+ HP — AoE spender bij 2+ targets' },
        { prio: '5', spell: 'Judgment',            note: 'On cooldown' },
        { prio: '6', spell: 'Blade of Justice',    note: 'On cooldown' },
      ],
    },
    en: {
      apex_tip: '✨ Holy Power: Generate with Judgment, Blade of Justice, Consecration. Spend with Templar\'s Verdict (ST) or Divine Storm (AoE). Never cap at 5!',
      opener: [
        { step: 1, spell: 'Avenging Wrath',     note: 'Major burst cooldown — always go first' },
        { step: 2, spell: 'Judgment',            note: 'Generates Holy Power + debuff' },
        { step: 3, spell: 'Blade of Justice',    note: 'High damage + Holy Power' },
        { step: 4, spell: "Templar's Verdict",   note: 'Spend 3 Holy Power' },
        { step: 5, spell: 'Wake of Ashes',       note: 'Gives 3 Holy Power + high damage' },
        { step: 6, spell: "Templar's Verdict",   note: 'Directly after Wake of Ashes' },
        { step: 7, spell: 'Hammer of Wrath',     note: 'Extra damage during Avenging Wrath' },
      ],
      single: [
        { prio: '1', spell: 'Avenging Wrath',     note: 'On cooldown — increases all damage',              importance: 'ALWAYS' },
        { prio: '2', spell: 'Wake of Ashes',       note: 'On cooldown — 3 HP + high damage',               importance: 'ALWAYS' },
        { prio: '3', spell: 'Judgment',            note: 'On cooldown — debuff + HP generator',             importance: 'ALWAYS' },
        { prio: '4', spell: 'Blade of Justice',    note: 'On cooldown — high damage + HP',                 importance: 'ALWAYS' },
        { prio: '5', spell: 'Hammer of Wrath',     note: 'When available (>20% HP or during AW)',           importance: 'HIGH' },
        { prio: '6', spell: "Templar's Verdict",   note: 'At 3-5 Holy Power — single target spender',      importance: 'HIGH' },
        { prio: '7', spell: 'Consecration',        note: 'Keep active — generates HP and extra damage',     importance: 'MEDIUM' },
        { prio: '8', spell: 'Exorcism / filler',   note: 'Filler when everything is on cooldown',           importance: 'FILLER' },
      ],
      aoe: [
        { prio: '1', spell: 'Avenging Wrath',    note: 'On cooldown — all Divine Storms scale with it' },
        { prio: '2', spell: 'Wake of Ashes',      note: 'On cooldown — hits multiple targets' },
        { prio: '3', spell: 'Consecration',       note: 'Keep active — AoE damage + HP generation' },
        { prio: '4', spell: 'Divine Storm',        note: 'At 3+ HP — AoE spender on 2+ targets' },
        { prio: '5', spell: 'Judgment',            note: 'On cooldown' },
        { prio: '6', spell: 'Blade of Justice',    note: 'On cooldown' },
      ],
    }
  },

  stats: {
    nl: {
      tip: '💡 Strength is jouw primaire stat — altijd hoogste item level pakken. Haste is erg sterk voor Ret omdat het cooldowns verlaagt en meer Holy Power genereert.',
      list: [
        { rank: '1', stat: 'Strength',       bars: 5, note: 'Primaire stat — altijd hoogste ilvl kiezen' },
        { rank: '2', stat: 'Haste',          bars: 5, note: 'Verlaagt cooldowns + meer HP generatie — top secundaire stat' },
        { rank: '3', stat: 'Critical Strike', bars: 4, note: 'Verhoogt schade en heals — erg waardevol' },
        { rank: '4', stat: 'Mastery',        bars: 3, note: 'Verhoogt heilige schade — goed maar minder dan Haste' },
        { rank: '5', stat: 'Versatility',    bars: 2, note: 'Vlakke schade + defensief — minst waardevol' },
      ],
    },
    en: {
      tip: '💡 Strength is your primary stat — always take highest item level. Haste is very strong for Ret because it reduces cooldowns and generates more Holy Power.',
      list: [
        { rank: '1', stat: 'Strength',       bars: 5, note: 'Primary stat — always choose highest ilvl' },
        { rank: '2', stat: 'Haste',          bars: 5, note: 'Reduces cooldowns + more HP generation — top secondary stat' },
        { rank: '3', stat: 'Critical Strike', bars: 4, note: 'Increases damage and heals — very valuable' },
        { rank: '4', stat: 'Mastery',        bars: 3, note: 'Increases holy damage — good but less than Haste' },
        { rank: '5', stat: 'Versatility',    bars: 2, note: 'Flat damage + defensive — least valuable' },
      ],
    }
  },

  cooldowns: {
    nl: [
      { spell: 'Avenging Wrath',        cd: '1.5 min', effect: 'Verhoogt alle schade significant — burst window', when: 'On cooldown — altijd zo snel mogelijk' },
      { spell: 'Wake of Ashes',         cd: '45 sec',  effect: 'Raakt alle vijanden voor heilige schade + 3 HP', when: 'On cooldown — opener en rotatie' },
      { spell: 'Divine Shield',         cd: '5 min',   effect: '100% immune voor alle schade — 8 sec',           when: 'Noodsituatie — let op: verwijdert je van combat' },
      { spell: 'Lay on Hands',          cd: '10 min',  effect: 'Geneest doel volledig — jezelf of groepslid',    when: 'Noodgeval — tankdood voorkomen of jezelf redden' },
      { spell: 'Blessing of Protection', cd: '5 min',  effect: 'Maakt doel immune voor fysieke schade — 10 sec', when: 'Tank in nood — verwijdert ook aggro' },
      { spell: 'Blessing of Sacrifice',  cd: '2 min',  effect: 'Jij absorbeert 30% schade van doel',            when: 'Tank of healer in nood tijdens grote pull' },
      { spell: 'Hammer of Justice',      cd: '1 min',  effect: '6 sec stun op vijand',                          when: 'Interrupt of noodstop' },
    ],
    en: [
      { spell: 'Avenging Wrath',        cd: '1.5 min', effect: 'Significantly increases all damage — burst window', when: 'On cooldown — always as soon as possible' },
      { spell: 'Wake of Ashes',         cd: '45 sec',  effect: 'Hits all enemies for holy damage + 3 HP',          when: 'On cooldown — opener and rotation' },
      { spell: 'Divine Shield',         cd: '5 min',   effect: '100% immune to all damage — 8 sec',                when: 'Emergency — note: drops you from combat' },
      { spell: 'Lay on Hands',          cd: '10 min',  effect: 'Fully heals target — yourself or group member',    when: 'Emergency — prevent tank death or save yourself' },
      { spell: 'Blessing of Protection', cd: '5 min',  effect: 'Makes target immune to physical damage — 10 sec', when: 'Tank in danger — also removes aggro' },
      { spell: 'Blessing of Sacrifice',  cd: '2 min',  effect: 'You absorb 30% of damage taken by target',        when: 'Tank or healer in danger during big pull' },
      { spell: 'Hammer of Justice',      cd: '1 min',  effect: '6 sec stun on enemy',                             when: 'Interrupt or emergency stop' },
    ]
  },

  utility: {
    nl: [
      { spell: 'Hammer of Justice',      type: 'Interrupt/Stun', note: '6 sec stun — ook interrupt. Essentieel in M+!' },
      { spell: 'Blessing of Protection', type: 'Defensief',      note: 'Maakt ally immune voor fysiek — red de tank' },
      { spell: 'Blessing of Sacrifice',  type: 'Defensief',      note: 'Absorbeer 30% schade van ally — help de healer' },
      { spell: 'Lay on Hands',           type: 'Noodheal',       note: 'Volledig genezen — tank reden of jezelf' },
      { spell: 'Divine Shield',          type: 'Survival',       note: 'Immune 8 sec — absolute noodsituatie' },
      { spell: 'Flash of Light',         type: 'Heal',           note: 'Kleine heal op jezelf — als je laag staat' },
      { spell: 'Cleanse Toxins',         type: 'Dispel',         note: 'Verwijdert giften en ziektes van ally' },
    ],
    en: [
      { spell: 'Hammer of Justice',      type: 'Interrupt/Stun', note: '6 sec stun — also an interrupt. Essential in M+!' },
      { spell: 'Blessing of Protection', type: 'Defensive',      note: 'Makes ally immune to physical — save the tank' },
      { spell: 'Blessing of Sacrifice',  type: 'Defensive',      note: 'Absorb 30% of ally damage — help the healer' },
      { spell: 'Lay on Hands',           type: 'Emergency Heal', note: 'Full heal — save the tank or yourself' },
      { spell: 'Divine Shield',          type: 'Survival',       note: 'Immune 8 sec — absolute emergency' },
      { spell: 'Flash of Light',         type: 'Heal',           note: 'Small heal on yourself — when you are low' },
      { spell: 'Cleanse Toxins',         type: 'Dispel',         note: 'Removes poisons and diseases from ally' },
    ]
  },

  tips: {
    nl: [
      { icon: '✨', title: 'Holy Power nooit cappen',       text: 'Geef Holy Power altijd uit bij 3-5. Cappen op 5 = verspilling. Templar\'s Verdict (ST) of Divine Storm (AoE) op 3+.' },
      { icon: '⚔️', title: 'Avenging Wrath on cooldown',   text: 'Jouw grootste burst cooldown. Gebruik hem zodra hij klaar is — nooit bewaren. In Avenging Wrath: maximaal Holy Power spenders gooien.' },
      { icon: '🌊', title: 'Wake of Ashes = combo starter', text: 'Geeft 3 HP direct + hoge schade. Gebruik hem na Avenging Wrath voor maximale burst. In AoE raakt hij alle targets.' },
      { icon: '🛡️', title: 'Divine Shield slim gebruiken',  text: 'Kom je om? Divine Shield maakt je 8 sec immune. LET OP: je verliest aggro. Gebruik voor mechanics die je anders insta-killen.' },
      { icon: '🏥', title: 'Lay on Hands = tank redden',    text: 'Eén van de sterkste noodknoppen in het spel. Red de tank als hij bijna dood gaat — cooldown is lang, dus slim gebruiken.' },
      { icon: '🙏', title: 'Blessings voor de groep',       text: 'Blessing of Protection en Sacrifice zijn groeps-cooldowns. Leer ze gebruiken voor de groep — niet alleen voor jezelf.' },
      { icon: '⚡', title: 'Haste = alles sneller',         text: 'Haste verlaagt de cooldown van generators. Meer Haste = meer Holy Power per minuut = meer schade.' },
      { icon: '📍', title: 'Melee positie',                 text: 'Sta altijd achter de boss (vermijd cleave). Houd Consecration actief onder de boss. Bij movement: Judgment en Hammer of Wrath zijn instant.' },
    ],
    en: [
      { icon: '✨', title: 'Never cap Holy Power',          text: 'Always spend Holy Power at 3-5. Capping at 5 = waste. Templar\'s Verdict (ST) or Divine Storm (AoE) at 3+.' },
      { icon: '⚔️', title: 'Avenging Wrath on cooldown',   text: 'Your biggest burst cooldown. Use it as soon as it is ready — never save. During Avenging Wrath: spend as many Holy Power spenders as possible.' },
      { icon: '🌊', title: 'Wake of Ashes = combo starter', text: 'Gives 3 HP instantly + high damage. Use after Avenging Wrath for maximum burst. In AoE it hits all targets.' },
      { icon: '🛡️', title: 'Divine Shield smart usage',     text: 'About to die? Divine Shield makes you immune for 8 sec. NOTE: you lose aggro. Use it for mechanics that would otherwise one-shot you.' },
      { icon: '🏥', title: 'Lay on Hands = save the tank',  text: 'One of the strongest emergency buttons in the game. Save the tank when they are about to die — cooldown is long, so use it wisely.' },
      { icon: '🙏', title: 'Blessings for the group',       text: 'Blessing of Protection and Sacrifice are group cooldowns. Learn to use them for the group — not just for yourself.' },
      { icon: '⚡', title: 'Haste = everything faster',     text: 'Haste reduces the cooldown of generators. More Haste = more Holy Power per minute = more damage.' },
      { icon: '📍', title: 'Melee positioning',             text: 'Always stand behind the boss (avoid cleave). Keep Consecration active under the boss. During movement: Judgment and Hammer of Wrath are instant.' },
    ]
  },

  macros: {
    nl: [
      { name: 'Hammer of Justice (Focus Kick)', code: '#showtooltip Hammer of Justice\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Hammer of Justice', note: 'Stun/interrupt op focus > mouseover > target.' },
      { name: 'Blessing of Protection (mouseover)', code: '#showtooltip Blessing of Protection\n/cast [@mouseover,help,nodead][@player] Blessing of Protection', note: 'BoP op mouseover > jezelf.' },
      { name: 'Blessing of Sacrifice (mouseover)', code: '#showtooltip Blessing of Sacrifice\n/cast [@mouseover,help,nodead][@player] Blessing of Sacrifice', note: 'Absorbeer schade van ally — op mouseover.' },
      { name: 'Lay on Hands (mouseover)', code: '#showtooltip Lay on Hands\n/cast [@mouseover,help,nodead][@player] Lay on Hands', note: 'Noodheal op mouseover > jezelf — red de tank!' },
      { name: 'Avenging Wrath burst macro', code: '#showtooltip Avenging Wrath\n/cast Avenging Wrath\n/cast Wake of Ashes', note: 'Start burst window direct met 3 Holy Power.' },
    ],
    en: [
      { name: 'Hammer of Justice (Focus Kick)', code: '#showtooltip Hammer of Justice\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Hammer of Justice', note: 'Stun/interrupt on focus > mouseover > target.' },
      { name: 'Blessing of Protection (mouseover)', code: '#showtooltip Blessing of Protection\n/cast [@mouseover,help,nodead][@player] Blessing of Protection', note: 'BoP on mouseover > yourself.' },
      { name: 'Blessing of Sacrifice (mouseover)', code: '#showtooltip Blessing of Sacrifice\n/cast [@mouseover,help,nodead][@player] Blessing of Sacrifice', note: 'Absorb damage from ally — on mouseover.' },
      { name: 'Lay on Hands (mouseover)', code: '#showtooltip Lay on Hands\n/cast [@mouseover,help,nodead][@player] Lay on Hands', note: 'Emergency heal on mouseover > yourself — save the tank!' },
      { name: 'Avenging Wrath burst macro', code: '#showtooltip Avenging Wrath\n/cast Avenging Wrath\n/cast Wake of Ashes', note: 'Start burst window immediately with 3 Holy Power.' },
    ]
  },

  consumables: {
    nl: [
      { type:'flask', name:'Flask of the Shattered Sun', effect:'Verhoogt Strength voor 1 uur.', note:'Altijd actief' },
      { type:'pot', name:'Potion of Recklessness', effect:'Strength boost bij burst.', note:'Op pull of Avenging Wrath' },
      { type:'food', name:'Silvermoon Parade (Feast)', effect:'+Strength en Stamina.', note:'Feast vragen' },
      { type:'food', name:'Royal Roast', effect:'Solo food.', note:'Backup' },
      { type:'rune', name:'Void-Touched Augment Rune', effect:'+Primaire stat.', note:'Altijd' },
    ],
    en: [
      { type:'flask', name:'Flask of the Shattered Sun', effect:'Increases Strength for 1 hour.', note:'Always active' },
      { type:'pot', name:'Potion of Recklessness', effect:'Strength boost during burst.', note:'On pull or Avenging Wrath' },
      { type:'food', name:'Silvermoon Parade (Feast)', effect:'+Strength and Stamina.', note:'Ask for feast' },
      { type:'food', name:'Royal Roast', effect:'Solo food.', note:'Backup' },
      { type:'rune', name:'Void-Touched Augment Rune', effect:'+Primary stat.', note:'Always' },
    ]
  },

  resource_info: {
    nl: {
      intro: 'Holy Power (0–5) is jouw resource. Genereer het met abilities, geef het uit voor zware aanvallen. Nooit op 5 laten cappen!',
      generate: [
        { spell: 'Judgment',         note: '+1 Holy Power (on cooldown gebruiken)' },
        { spell: 'Blade of Justice', note: '+2 Holy Power (hoge prio)' },
        { spell: 'Consecration',     note: '+1 Holy Power per tick (houd actief)' },
        { spell: 'Wake of Ashes',    note: '+3 Holy Power direct (grote cooldown)' },
        { spell: 'Hammer of Wrath',  note: '+1 Holy Power (>20% of AW)' },
      ],
      spend: [
        { spell: "Templar's Verdict", note: 'Single target spender — 3+ HP' },
        { spell: 'Divine Storm',      note: 'AoE spender — bij 2+ targets' },
        { spell: 'Justicar\'s Vengeance', note: 'Hoge ST schade + heal — talent' },
      ],
      pet_tip: 'Paladin heeft geen pet. Jouw "partner" is je Consecration — houd hem altijd actief op de grond onder de boss. Verdwijn je door movement? Gooi hem opnieuw neer zodra je stilstaat.',
      pets: [],
    },
    en: {
      intro: 'Holy Power (0–5) is your resource. Generate it with abilities, spend it for heavy attacks. Never let it cap at 5!',
      generate: [
        { spell: 'Judgment',         note: '+1 Holy Power (use on cooldown)' },
        { spell: 'Blade of Justice', note: '+2 Holy Power (high priority)' },
        { spell: 'Consecration',     note: '+1 Holy Power per tick (keep active)' },
        { spell: 'Wake of Ashes',    note: '+3 Holy Power instantly (major cooldown)' },
        { spell: 'Hammer of Wrath',  note: '+1 Holy Power (>20% or AW)' },
      ],
      spend: [
        { spell: "Templar's Verdict",    note: 'Single target spender — 3+ HP' },
        { spell: 'Divine Storm',          note: 'AoE spender — on 2+ targets' },
        { spell: "Justicar's Vengeance", note: 'High ST damage + heal — talent' },
      ],
      pet_tip: 'Paladin has no pet. Your "partner" is your Consecration — always keep it active on the ground under the boss. Does movement interrupt it? Reapply as soon as you stand still.',
      pets: [],
    }
  },
};

if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
ALL_SPECS.push(SPEC_RET_PALADIN);

if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_UNHOLY_DK = {
  id:'unholy_dk', icon:'☠️', class:'Death Knight',
  spec:{nl:'Unholy',en:'Unholy'},
  role:'dps', armor:'Plate',
  weapon:{nl:'Two-hand weapon',en:'Two-hand weapon'},
  resource:'Runes + Runic Power',
  patch:'1.0', color:'#33937F',
  summary:{
    nl:'Unholy Death Knight commandeert een leger van de doden. Legt vijanden vol met ziekte en laat Ghoul en Apocalypse burst je schade vertienvoudigen.',
    en:'Unholy Death Knight commands an army of the dead. Loads enemies with disease and lets your Ghoul and Apocalypse burst multiply your damage tenfold.'
  },
  pros:{
    nl:['Uitstekende AoE burst via Apocalypse','Permanent pet (Ghoul) — passieve schade altijd actief','Sterk in langere fights — DoTs stapelen op','Goede utility (Death Grip, Strangulate)','Dark Transformation = enorme Ghoul burst'],
    en:['Excellent AoE burst via Apocalypse','Permanent pet (Ghoul) — passive damage always active','Strong in longer fights — DoTs stack up','Good utility (Death Grip, Strangulate)','Dark Transformation = massive Ghoul burst']
  },
  cons:{
    nl:['Lage mobiliteit','Rune management is complex','Lage burst zonder Apocalypse/Dark Transformation','Ziekte management vereist aandacht'],
    en:['Low mobility','Rune management is complex','Low burst without Apocalypse/Dark Transformation','Disease management requires attention']
  },
  cheatsheet:{
    nl:{
      opener:'Outbreak → Festering Strike x2 → Apocalypse → Dark Transformation → Scourge Strike → Death Coil spam',
      single:'Outbreak (ziektes uptime) → Festering Strike (Wounds opbouwen) → Scourge Strike → Death Coil (Runic Power) → Apocalypse op CD',
      aoe:'Outbreak AoE → Epidemic → Scourge Strike via Death and Decay → Apocalypse op groep',
      rules:[
        'Ziektes ALTIJD actief houden — Festering Wound en Virulent Plague zijn cruciaal',
        'Festering Wounds opbouwen tot 6 voor Apocalypse voor maximale Ghoul burst',
        'Apocalypse op CD — dit is je sterkste ability',
        'Death Coil bij 80+ Runic Power — nooit laten verspillen',
        'Dark Transformation altijd direct gebruiken — Ghoul burst window',
      ],
    },
    en:{
      opener:'Outbreak → Festering Strike x2 → Apocalypse → Dark Transformation → Scourge Strike → Death Coil spam',
      single:'Outbreak (diseases uptime) → Festering Strike (build Wounds) → Scourge Strike → Death Coil (Runic Power) → Apocalypse on CD',
      aoe:'Outbreak AoE → Epidemic → Scourge Strike via Death and Decay → Apocalypse on group',
      rules:[
        'Always keep diseases active — Festering Wound and Virulent Plague are crucial',
        'Build Festering Wounds to 6 before Apocalypse for maximum Ghoul burst',
        'Apocalypse on CD — this is your strongest ability',
        'Death Coil at 80+ Runic Power — never waste it',
        'Always use Dark Transformation immediately — Ghoul burst window',
      ],
    }
  },
  rotation:{
    nl:{
      apex_tip:'💡 Festering Wounds zijn de kern van Unholy. Bouw er 6 op via Festering Strike, dan burst je alles met Apocalypse + Dark Transformation. Dit is je schade cyclus!',
      opener:[
        {spell:'Outbreak',            why:'AoE ziekte applicator — Virulent Plague op alle targets'},
        {spell:'Festering Strike x2', why:'Bouwt Festering Wounds op het target op'},
        {spell:'Apocalypse',          why:'Burst op 6 Festering Wounds — roept extra undead op'},
        {spell:'Dark Transformation', why:'Transformeert je Ghoul in een krachtige burst machine'},
        {spell:'Scourge Strike',      why:'Verwijdert Festering Wounds voor extra burst schade'},
        {spell:'Death Coil',          why:'Runic Power dump — versterk je Ghoul via Sudden Doom proc'},
      ],
      single:[
        {spell:'Outbreak',            why:'Ziektes uptime houden — gebruik bij expire'},
        {spell:'Festering Strike',    why:'Wounds opbouwen naar 6 voor Apocalypse'},
        {spell:'Scourge Strike',      why:'Verwijdert Wounds voor schade — gebruik na Apocalypse'},
        {spell:'Death Coil',          why:'Bij 80+ Runic Power of Sudden Doom proc — nooit cappe'},
        {spell:'Apocalypse',          why:'Op CD met 6 Wounds — sterkste ability'},
        {spell:'Dark Transformation', why:'Op CD — altijd direct gebruiken voor Ghoul burst'},
      ],
      aoe:[
        {spell:'Outbreak',            why:'AoE ziekte applicator op meerdere targets tegelijk'},
        {spell:'Epidemic',            why:'AoE Death Coil — verspreidt Virulent Plague schade'},
        {spell:'Death and Decay',     why:'AoE grond — Scourge Strike raakt extra targets erin'},
        {spell:'Scourge Strike',      why:'In Death and Decay: raakt meerdere targets via cleave'},
        {spell:'Apocalypse',          why:'Op CD — in AoE ook sterk via extra undead'},
      ],
    },
    en:{
      apex_tip:'💡 Festering Wounds are the core of Unholy. Build 6 via Festering Strike, then burst everything with Apocalypse + Dark Transformation. This is your damage cycle!',
      opener:[
        {spell:'Outbreak',            why:'AoE disease applicator — Virulent Plague on all targets'},
        {spell:'Festering Strike x2', why:'Builds Festering Wounds on the target'},
        {spell:'Apocalypse',          why:'Burst at 6 Festering Wounds — summons extra undead'},
        {spell:'Dark Transformation', why:'Transforms your Ghoul into a powerful burst machine'},
        {spell:'Scourge Strike',      why:'Removes Festering Wounds for extra burst damage'},
        {spell:'Death Coil',          why:'Runic Power dump — empower your Ghoul via Sudden Doom proc'},
      ],
      single:[
        {spell:'Outbreak',            why:'Keep diseases uptime — use when expiring'},
        {spell:'Festering Strike',    why:'Build Wounds to 6 for Apocalypse'},
        {spell:'Scourge Strike',      why:'Removes Wounds for damage — use after Apocalypse'},
        {spell:'Death Coil',          why:'At 80+ Runic Power or Sudden Doom proc — never cap'},
        {spell:'Apocalypse',          why:'On CD with 6 Wounds — strongest ability'},
        {spell:'Dark Transformation', why:'On CD — always use immediately for Ghoul burst'},
      ],
      aoe:[
        {spell:'Outbreak',            why:'AoE disease applicator on multiple targets at once'},
        {spell:'Epidemic',            why:'AoE Death Coil — spreads Virulent Plague damage'},
        {spell:'Death and Decay',     why:'AoE ground — Scourge Strike hits extra targets inside'},
        {spell:'Scourge Strike',      why:'Inside Death and Decay: hits multiple targets via cleave'},
        {spell:'Apocalypse',          why:'On CD — also strong in AoE via extra undead'},
      ],
    }
  },
  stats:{
    nl:{
      tip:'Strength is altijd #1. Haste verlaagt de GCD en versnelt Rune recharge. Mastery: Dreadblade verhoogt schade van Unholy abilities direct.',
      list:[
        {rank:1,stat:'Strength',       bars:5,note:'Primaire stat — altijd hoogste ilvl pakken'},
        {rank:2,stat:'Haste',          bars:4,note:'Snellere Rune recharge + lagere GCD'},
        {rank:3,stat:'Critical Strike',bars:3,note:'Verhoogt burst schade, triggert procs'},
        {rank:4,stat:'Mastery',        bars:3,note:'Mastery: Dreadblade — verhoogt Unholy schade'},
        {rank:5,stat:'Versatility',    bars:1,note:'Laagste prioriteit'},
      ],
    },
    en:{
      tip:'Strength is always #1. Haste lowers the GCD and speeds up Rune recharge. Mastery: Dreadblade directly increases damage of Unholy abilities.',
      list:[
        {rank:1,stat:'Strength',       bars:5,note:'Primary stat — always take highest ilvl'},
        {rank:2,stat:'Haste',          bars:4,note:'Faster Rune recharge + lower GCD'},
        {rank:3,stat:'Critical Strike',bars:3,note:'Increases burst damage, triggers procs'},
        {rank:4,stat:'Mastery',        bars:3,note:'Mastery: Dreadblade — increases Unholy damage'},
        {rank:5,stat:'Versatility',    bars:1,note:'Lowest priority'},
      ],
    }
  },
  cooldowns:{
    nl:[
      {spell:'Apocalypse',          cd:'1.5 min', effect:'Burst op 6 Festering Wounds + roept extra undead op',    when:'Op CD met 6 Wounds — nooit zonder Wounds gebruiken'},
      {spell:'Dark Transformation', cd:'1 min',   effect:'Ghoul transformeert in krachtige burst mode 20 sec',     when:'Op CD — altijd direct na Apocalypse'},
      {spell:'Unholy Assault',      cd:'1.5 min', effect:'Burst + geeft iedereen in groep Festering Wounds buff',  when:'Op CD — combineer met Apocalypse window'},
      {spell:'Anti-Magic Shell',    cd:'1 min',   effect:'Absorbeert 100% magic schade 5 sec',                    when:'Bij magic-heavy mechanics — proactief'},
      {spell:'Death and Decay',     cd:'30 sec',  effect:'AoE grond — versterkt Scourge Strike en AoE rotatie',   when:'Altijd neerleggen bij 2+ targets'},
    ],
    en:[
      {spell:'Apocalypse',          cd:'1.5 min', effect:'Burst on 6 Festering Wounds + summons extra undead',    when:'On CD with 6 Wounds — never use without Wounds'},
      {spell:'Dark Transformation', cd:'1 min',   effect:'Ghoul transforms into powerful burst mode 20 sec',      when:'On CD — always immediately after Apocalypse'},
      {spell:'Unholy Assault',      cd:'1.5 min', effect:'Burst + gives everyone in group Festering Wounds buff', when:'On CD — combine with Apocalypse window'},
      {spell:'Anti-Magic Shell',    cd:'1 min',   effect:'Absorbs 100% magic damage 5 sec',                      when:'At magic-heavy mechanics — proactively'},
      {spell:'Death and Decay',     cd:'30 sec',  effect:'AoE ground — empowers Scourge Strike and AoE rotation', when:'Always place down at 2+ targets'},
    ]
  },
  utility:{
    nl:[
      {spell:'Death Grip',          type:'Pull',      note:'Trek 1 vijand naar je toe — interrupt op afstand en positie tool'},
      {spell:'Strangulate',         type:'Interrupt', note:'Silence + interrupt op 45 sec CD'},
      {spell:'Chains of Ice',       type:'Slow',      note:'70% movement slow — kiting tool'},
      {spell:'Anti-Magic Zone',     type:'Defensief', note:'Grote AoE magic absorb koepel voor de groep'},
      {spell:'Raise Ally',          type:'Ress',      note:'Battle ress op 10 min CD'},
      {spell:'Death Gate',          type:'Mobiliteit',note:'Teleporteer naar Ebon Hold — buiten M+ bruikbaar'},
    ],
    en:[
      {spell:'Death Grip',          type:'Pull',      note:'Pull 1 enemy to you — ranged interrupt and positioning tool'},
      {spell:'Strangulate',         type:'Interrupt', note:'Silence + interrupt on 45 sec CD'},
      {spell:'Chains of Ice',       type:'Slow',      note:'70% movement slow — kiting tool'},
      {spell:'Anti-Magic Zone',     type:'Defensive', note:'Large AoE magic absorb dome for the group'},
      {spell:'Raise Ally',          type:'Ress',      note:'Battle ress on 10 min CD'},
      {spell:'Death Gate',          type:'Mobility',  note:'Teleport to Ebon Hold — usable outside M+'},
    ]
  },
  tips:{
    nl:[
      {icon:'☠️',title:'Festering Wounds cyclus',  text:'Dit is de kern van Unholy. Bouw 6 Festering Wounds op via Festering Strike, dan burst je met Apocalypse die ze allemaal verwijdert en extra Ghouls spawnt. Daarna opnieuw opbouwen. Nooit Apocalypse gebruiken met minder dan 4 Wounds.'},
      {icon:'👻',title:'Ghoul micro-management',   text:'Je permanente Ghoul doet passieve schade maar wordt enorm krachtig via Dark Transformation. Gebruik Dark Transformation altijd direct als het beschikbaar is — wacht nooit. De Ghoul doet dan enorm veel burst schade voor 20 sec.'},
      {icon:'🦠',title:'Ziektes bijhouden',        text:'Virulent Plague en Festering Wound moeten altijd actief zijn. Outbreak is de makkelijkste manier om ze te herbrengen. In AoE: één Outbreak zet ze op meerdere targets tegelijk.'},
      {icon:'💀',title:'Death Coil timing',        text:'Death Coil versterkt je Ghoul via de Sudden Doom buff. Gebruik het altijd bij 80+ Runic Power om te voorkomen dat je capped. Bij een Sudden Doom proc: altijd direct gebruiken voor de gratis boost.'},
      {icon:'🧲',title:'Death Grip als interrupt',  text:'Death Grip trekt een caster naar je toe — dit is ook een soort interrupt want ze moeten hun cast opnieuw starten na het bewegen. Handig in M+ om een gevaarlijke caster bij te halen.'},
    ],
    en:[
      {icon:'☠️',title:'Festering Wounds cycle',   text:'This is the core of Unholy. Build 6 Festering Wounds via Festering Strike, then burst with Apocalypse which removes them all and spawns extra Ghouls. Then build up again. Never use Apocalypse with fewer than 4 Wounds.'},
      {icon:'👻',title:'Ghoul micro-management',   text:'Your permanent Ghoul deals passive damage but becomes extremely powerful via Dark Transformation. Always use Dark Transformation immediately when available — never wait. The Ghoul then deals massive burst damage for 20 sec.'},
      {icon:'🦠',title:'Keep diseases up',         text:'Virulent Plague and Festering Wound must always be active. Outbreak is the easiest way to reapply them. In AoE: one Outbreak applies them to multiple targets at once.'},
      {icon:'💀',title:'Death Coil timing',        text:'Death Coil empowers your Ghoul via the Sudden Doom buff. Always use at 80+ Runic Power to prevent capping. On a Sudden Doom proc: always use immediately for the free boost.'},
      {icon:'🧲',title:'Death Grip as interrupt',  text:'Death Grip pulls a caster to you — this also acts as an interrupt since they have to restart their cast after moving. Handy in M+ to pull a dangerous caster into melee range.'},
    ]
  },
  macros:{
    nl:[
      {name:'Strangulate (Focus)',  code:'#showtooltip Strangulate\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Strangulate', note:'Silence/interrupt op focus > mouseover > target.'},
      {name:'Death Grip + Chains',  code:'#showtooltip Death Grip\n/cast Death Grip\n/cast Chains of Ice', note:'Grip + direct slow — mob kan niet meer weglopen.'},
      {name:'Apocalypse burst',     code:'/cast Dark Transformation\n/cast Apocalypse', note:'Burst combo — Ghoul transformeert en Apocalypse vuurt tegelijk.'},
    ],
    en:[
      {name:'Strangulate (Focus)',  code:'#showtooltip Strangulate\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Strangulate', note:'Silence/interrupt on focus > mouseover > target.'},
      {name:'Death Grip + Chains',  code:'#showtooltip Death Grip\n/cast Death Grip\n/cast Chains of Ice', note:'Grip + immediate slow — mob cannot run away.'},
      {name:'Apocalypse burst',     code:'/cast Dark Transformation\n/cast Apocalypse', note:'Burst combo — Ghoul transforms and Apocalypse fires simultaneously.'},
    ]
  },
  resource_info:{
    nl:{
      intro:'Unholy DK gebruikt Runes (6 stuks, regenereren over tijd) en Runic Power (0-125). Runes zijn je primaire aanvalsresource. Runic Power wordt gespend aan Death Coil voor schade en Ghoul versterking.',
      generate:[
        'Scourge Strike — verbruikt 1 Unholy Rune, genereert Runic Power',
        'Festering Strike — verbruikt 2 Runes, genereert Runic Power',
        'Runes regeneren automatisch over 10 sec per Rune',
        'Apocalypse — gratis burst, geen Rune kosten',
      ],
      spend:[
        'Death Coil — kost 40 Runic Power, schade + Ghoul boost',
        'Epidemic — kost 30 Runic Power, AoE Death Coil effect',
        'Death Strike — kost 45 Runic Power, nood-zelfheal',
      ],
      pet_tip:'💡 Runic Power nooit laten cappen — gebruik Death Coil bij 80+ RP. In AoE: gebruik Epidemic in plaats van Death Coil voor meer schade op meerdere targets!',
      pets:[
        {name:'Ghoul',description:'Permanent pet — altijd actief, volgt je overal. Reanimate als hij sterft.'},
        {name:'Apocalypse Ghouls',description:'Tijdelijke extra Ghouls na Apocalypse — doen burst schade.'},
      ],
    },
    en:{
      intro:'Unholy DK uses Runes (6 total, recharge over time) and Runic Power (0-125). Runes are your primary attack resource. Runic Power is spent on Death Coil for damage and Ghoul empowerment.',
      generate:[
        'Scourge Strike — uses 1 Unholy Rune, generates Runic Power',
        'Festering Strike — uses 2 Runes, generates Runic Power',
        'Runes recharge automatically over 10 sec per Rune',
        'Apocalypse — free burst, no Rune cost',
      ],
      spend:[
        'Death Coil — costs 40 Runic Power, damage + Ghoul boost',
        'Epidemic — costs 30 Runic Power, AoE Death Coil effect',
        'Death Strike — costs 45 Runic Power, emergency self-heal',
      ],
      pet_tip:'💡 Never cap Runic Power — use Death Coil at 80+ RP. In AoE: use Epidemic instead of Death Coil for more damage on multiple targets!',
      pets:[
        {name:'Ghoul',description:'Permanent pet — always active, follows you everywhere. Reanimate if it dies.'},
        {name:'Apocalypse Ghouls',description:'Temporary extra Ghouls after Apocalypse — deal burst damage.'},
      ],
    }
  },
  consumables:{
    nl:[
      {type:'flask', name:'Flask of the Shattered Sun',  effect:'Verhoogt Strength significant voor 1 uur.',   note:'Altijd actief'},
      {type:'pot',   name:'Potion of Recklessness',              effect:'Grote Strength boost 25 sec.',                note:'Op pull of Apocalypse burst window'},
      {type:'food',  name:'Silvermoon Parade (Feast)',    effect:'+Strength en Stamina via groepsfeast.',      note:'Feast vragen'},
      {type:'food',  name:"Meat Lover's Delight",        effect:'Solo food — Strength backup.',               note:'Backup als geen feast'},
      {type:'rune',  name:'Void-Touched Augment Rune',     effect:'+Primaire stat 1 uur.',                       note:'Altijd gebruiken'},
    ],
    en:[
      {type:'flask', name:'Flask of the Shattered Sun',  effect:'Significantly increases Strength for 1 hour.', note:'Always active'},
      {type:'pot',   name:'Potion of Recklessness',              effect:'Large Strength boost 25 sec.',                note:'On pull or Apocalypse burst window'},
      {type:'food',  name:'Silvermoon Parade (Feast)',    effect:'+Strength and Stamina via group feast.',      note:'Ask for feast'},
      {type:'food',  name:"Meat Lover's Delight",        effect:'Solo food — Strength backup.',               note:'Backup if no feast'},
      {type:'rune',  name:'Void-Touched Augment Rune',     effect:'+Primary stat 1 hour.',                      note:'Always use'},
    ]
  },
};
ALL_SPECS.push(SPEC_UNHOLY_DK);

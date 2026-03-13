if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_ARMS_WARRIOR = {
  id: 'arms_warrior',
  icon: '⚔️',
  class: 'Warrior',
  spec:   { nl: 'Arms', en: 'Arms', da: 'Arms' },
  role:   'melee',
  armor:  'Plate',
  weapon: { nl: 'Tweehandig zwaard/bijl/staf', en: 'Two-handed sword/axe/polearm', da: 'Tohånds sværd/økse/stav' },
  resource: 'Rage',
  patch: '1.0',
  color: '#C79C6E',

  summary: {
    nl: 'Arms is een krachtige melee DPS spec die draait om Mortal Strike en het opbouwen van Colossus Smash windows. Sterk in zowel single target als cleave situaties.',
    en: 'Arms is a powerful melee DPS spec revolving around Mortal Strike and building Colossus Smash windows. Strong in both single target and cleave situations.',
    da: 'Arms er en kraftfuld melee DPS-spec, der drejer sig om Mortal Strike og at opbygge Colossus Smash-vinduer. Stærk i både single target og cleave-situationer.',
  },
  pros: {
    nl: ['Hoge burst schade in Colossus Smash venster', 'Uitstekende cleave met Sweeping Strikes', 'Goede execute fase (<20% HP)', 'Sterke utility (Rallying Cry, Commanding Shout)'],
    en: ['High burst damage in Colossus Smash window', 'Excellent cleave with Sweeping Strikes', 'Strong execute phase (<20% HP)', 'Great utility (Rallying Cry, Commanding Shout)'],
    da: ['Høj burst-skade i Colossus Smash-vinduet', 'Fremragende cleave med Sweeping Strikes', 'Stærk execute-fase (<20% HP)', 'God utility (Rallying Cry, Commanding Shout)'],
  },
  cons: {
    nl: ['Rage-management kan tricky zijn', 'Minder sterk buiten Colossus Smash venster', 'Vrij immobiel vergeleken met andere melee'],
    en: ['Rage management can be tricky', 'Weaker outside Colossus Smash window', 'Fairly immobile compared to other melee'],
    da: ['Rage-styring kan være vanskelig', 'Svagere uden for Colossus Smash-vinduet', 'Ret ubevægelig sammenlignet med anden melee'],
  },

  cheatsheet: {
    nl: {
      opener: 'Charge → Colossus Smash → Avatar → Mortal Strike → Overpower → Slam spam',
      single: 'Colossus Smash → Mortal Strike → Overpower → Slam (Rage dump)',
      aoe:    'Sweeping Strikes aan → Bladestorm of Cleave → Mortal Strike raakt alles',
      rules: [
        'Gebruik Mortal Strike altijd als het beschikbaar is',
        'Overpower verbruik nooit — heeft geen cooldown bij proc',
        'Colossus Smash window = maximale schade, dump alles',
        'Slam alleen als Rage >70 en niks anders beschikbaar',
        'Execute (<20% HP): prioriteit boven alles',
      ],
    },
    en: {
      opener: 'Charge → Colossus Smash → Avatar → Mortal Strike → Overpower → Slam spam',
      single: 'Colossus Smash → Mortal Strike → Overpower → Slam (Rage dump)',
      aoe:    'Sweeping Strikes on → Bladestorm or Cleave → Mortal Strike hits everything',
      rules: [
        'Use Mortal Strike whenever available',
        'Never cap Overpower — it has no cooldown on proc',
        'Colossus Smash window = maximum damage, dump everything',
        'Slam only when Rage >70 and nothing else available',
        'Execute (<20% HP): priority over everything',
      ],
    },
    da: {
      opener: 'Charge → Colossus Smash → Avatar → Mortal Strike → Overpower → Slam-spam',
      single: 'Colossus Smash → Mortal Strike → Overpower → Slam (Rage-dump)',
      aoe:    'Sweeping Strikes til → Bladestorm eller Cleave → Mortal Strike rammer alt',
      rules: [
        'Brug Mortal Strike, når den er tilgængelig',
        'Opsaml aldrig Overpower — den har ingen cooldown ved proc',
        'Colossus Smash-vindue = maksimal skade, dump alt',
        'Slam kun når Rage >70 og intet andet er tilgængeligt',
        'Execute (<20% HP): prioritet over alt',
      ],
    },
  },

  rotation: {
    nl: {
      apex_tip: '💡 Colossus Smash is je schadevenster — save je procs en cooldowns voor dit moment!',
      opener: [
        { spell: 'Charge', why: 'Genereert Rage en positioneert je' },
        { spell: 'Colossus Smash', why: 'Start het schadevenster — armor debuff' },
        { spell: 'Avatar', why: 'Grote cooldown, zoveel mogelijk in CS venster' },
        { spell: 'Mortal Strike', why: 'Hoogste prioriteit aanval' },
        { spell: 'Overpower', why: 'Gebruik procs direct op' },
        { spell: 'Slam', why: 'Rage dump als niks anders beschikbaar' },
      ],
      single: [
        { spell: 'Colossus Smash', why: 'Elke 20 sec — schadevenster openen' },
        { spell: 'Mortal Strike', why: 'Hoogste prioriteit, altijd first in CS' },
        { spell: 'Overpower', why: 'Gebruik direct bij proc, nooit laten expiren' },
        { spell: 'Slam', why: 'Rage dump >70, filler buiten procs' },
        { spell: 'Execute <20%', why: 'Vervangt Slam volledig in execute fase' },
      ],
      aoe: [
        { spell: 'Sweeping Strikes', why: 'Elke swing raakt een 2e target — altijd aan bij 2+ mobs' },
        { spell: 'Bladestorm', why: 'Beste AoE cooldown, gebruik op grote packs' },
        { spell: 'Mortal Strike', why: 'Raakt via Sweeping Strikes meteen 2 targets' },
        { spell: 'Cleave', why: '3+ targets: vervangt Slam als filler' },
        { spell: 'Whirlwind', why: '5+ targets: spamt Whirlwind voor maximum cleave' },
      ],
    },
    en: {
      apex_tip: '💡 Colossus Smash is your damage window — save procs and cooldowns for this moment!',
      opener: [
        { spell: 'Charge', why: 'Generates Rage and positions you' },
        { spell: 'Colossus Smash', why: 'Opens the damage window — armor debuff' },
        { spell: 'Avatar', why: 'Major cooldown, as much inside CS window as possible' },
        { spell: 'Mortal Strike', why: 'Highest priority attack' },
        { spell: 'Overpower', why: 'Use procs immediately' },
        { spell: 'Slam', why: 'Rage dump when nothing else available' },
      ],
      single: [
        { spell: 'Colossus Smash', why: 'Every 20 sec — opens damage window' },
        { spell: 'Mortal Strike', why: 'Highest priority, always first in CS' },
        { spell: 'Overpower', why: 'Use immediately on proc, never let it expire' },
        { spell: 'Slam', why: 'Rage dump >70, filler outside procs' },
        { spell: 'Execute <20%', why: 'Fully replaces Slam in execute phase' },
      ],
      aoe: [
        { spell: 'Sweeping Strikes', why: 'Every swing hits a 2nd target — always on at 2+ mobs' },
        { spell: 'Bladestorm', why: 'Best AoE cooldown, use on large packs' },
        { spell: 'Mortal Strike', why: 'Hits 2 targets via Sweeping Strikes' },
        { spell: 'Cleave', why: '3+ targets: replaces Slam as filler' },
        { spell: 'Whirlwind', why: '5+ targets: spam Whirlwind for maximum cleave' },
      ],
    },
    da: {
      apex_tip: '💡 Colossus Smash er dit skadevindue — gem procs og cooldowns til dette øjeblik!',
      opener: [
        { spell: 'Charge', why: 'Genererer Rage og positionerer dig' },
        { spell: 'Colossus Smash', why: 'Åbner skadevinduet — armor debuff' },
        { spell: 'Avatar', why: 'Stor cooldown, så meget som muligt i CS-vinduet' },
        { spell: 'Mortal Strike', why: 'Højest prioriterede angreb' },
        { spell: 'Overpower', why: 'Brug procs med det samme' },
        { spell: 'Slam', why: 'Rage-dump når intet andet er tilgængeligt' },
      ],
      single: [
        { spell: 'Colossus Smash', why: 'Hvert 20. sek — åbner skadevinduet' },
        { spell: 'Mortal Strike', why: 'Højest prioritet, altid først i CS' },
        { spell: 'Overpower', why: 'Brug straks ved proc, lad den aldrig udløbe' },
        { spell: 'Slam', why: 'Rage-dump >70, fylder uden for procs' },
        { spell: 'Execute <20%', why: 'Erstatter fuldstændigt Slam i execute-fasen' },
      ],
      aoe: [
        { spell: 'Sweeping Strikes', why: 'Hvert swing rammer et 2. mål — altid til ved 2+ fjender' },
        { spell: 'Bladestorm', why: 'Bedste AoE-cooldown, brug på store grupper' },
        { spell: 'Mortal Strike', why: 'Rammer 2 mål via Sweeping Strikes' },
        { spell: 'Cleave', why: '3+ mål: erstatter Slam som fylder' },
        { spell: 'Whirlwind', why: '5+ mål: spam Whirlwind for maksimal cleave' },
      ],
    },
  },

  stats: {
    nl: {
      tip: 'Zorg voor een goede mix van Strength en Haste. Vermijd Versatility als lage prioriteit.',
      list: [
        { rank:1, stat:'Strength',    bars:5, note:'Primaire stat — altijd maximaliseren' },
        { rank:2, stat:'Haste',       bars:4, note:'Verlaagt GCD en vergroot aantal slagen' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Verhoogt kans op Overpower procs' },
        { rank:4, stat:'Mastery',     bars:3, note:'Verhoogt Deep Wounds DoT schade' },
        { rank:5, stat:'Versatility', bars:1, note:'Laagste prioriteit' },
      ],
    },
    en: {
      tip: 'Aim for a good balance of Strength and Haste. Avoid Versatility as low priority.',
      list: [
        { rank:1, stat:'Strength',    bars:5, note:'Primary stat — always maximize' },
        { rank:2, stat:'Haste',       bars:4, note:'Lowers GCD and increases number of attacks' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Increases chance of Overpower procs' },
        { rank:4, stat:'Mastery',     bars:3, note:'Increases Deep Wounds DoT damage' },
        { rank:5, stat:'Versatility', bars:1, note:'Lowest priority' },
      ],
    },
    da: {
      tip: 'Sigt efter en god balance af Strength og Haste. Undgå Versatility som lav prioritet.',
      list: [
        { rank:1, stat:'Strength',    bars:5, note:'Primær stat — maksimer altid' },
        { rank:2, stat:'Haste',       bars:4, note:'Sænker GCD og øger antallet af angreb' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Øger chance for Overpower-procs' },
        { rank:4, stat:'Mastery',     bars:3, note:'Øger Deep Wounds DoT-skade' },
        { rank:5, stat:'Versatility', bars:1, note:'Lavest prioritet' },
      ],
    },
  },

  cooldowns: {
    nl: [
      { spell:'Avatar',         cd:'1.5 min', effect:'Grote Strength boost + verwijdert roots', when:'Op pull samen met Colossus Smash' },
      { spell:'Colossus Smash', cd:'20 sec',  effect:'Armor debuff 30% — verhoogde schade venster', when:'Zo snel mogelijk, nooit overskippen' },
      { spell:'Bladestorm',     cd:'1 min',   effect:'Spin 6 sec, enorme AoE schade', when:'AoE: grote packs. ST: noodgeval filler' },
      { spell:'Rallying Cry',   cd:'3 min',   effect:'Tijdelijke HP boost heel groep', when:'Grote schade fase of als healer in trouble is' },
      { spell:'Die by the Sword', cd:'3 min', effect:'75% parry kans 8 sec', when:'Noodbescherming bij grote mechanic' },
    ],
    en: [
      { spell:'Avatar',         cd:'1.5 min', effect:'Major Strength boost + removes roots', when:'On pull together with Colossus Smash' },
      { spell:'Colossus Smash', cd:'20 sec',  effect:'30% armor debuff — increased damage window', when:'As soon as possible, never skip' },
      { spell:'Bladestorm',     cd:'1 min',   effect:'Spin 6 sec, massive AoE damage', when:'AoE: large packs. ST: emergency filler' },
      { spell:'Rallying Cry',   cd:'3 min',   effect:'Temporary HP boost for entire group', when:'Big damage phase or when healer is struggling' },
      { spell:'Die by the Sword', cd:'3 min', effect:'75% parry chance for 8 sec', when:'Emergency defense during major mechanic' },
    ],
    da: [
      { spell:'Avatar',         cd:'1.5 min', effect:'Stor Strength-boost + fjerner roots', when:'På pull sammen med Colossus Smash' },
      { spell:'Colossus Smash', cd:'20 sec',  effect:'30% armor debuff — øget skadevindue', when:'Så hurtigt som muligt, spring aldrig over' },
      { spell:'Bladestorm',     cd:'1 min',   effect:'Spin 6 sek, massiv AoE-skade', when:'AoE: store grupper. ST: nød-fylder' },
      { spell:'Rallying Cry',   cd:'3 min',   effect:'Midlertidig HP-boost for hele gruppen', when:'Stor skadefase eller når healeren kæmper' },
      { spell:'Die by the Sword', cd:'3 min', effect:'75% parry-chance i 8 sek', when:'Nødsforsvar under stor mekanik' },
    ],
  },

  utility: {
    nl: [
      { spell:'Intervene',        type:'Defensief', note:'Teleporteer naar bondgenoot + absorb volgende aanval' },
      { spell:'Spell Reflection', type:'Defensief', note:'Reflecteer of absorb 1 spell — ook group variant' },
      { spell:'Intimidating Shout', type:'CC',      note:'Fear tot 5 vijanden 8 sec — breekt op schade' },
      { spell:'Hamstring',        type:'Slow',      note:'50% slow op target' },
      { spell:'Storm Bolt',       type:'Stun',      note:'4 sec single target stun' },
    ],
    en: [
      { spell:'Intervene',        type:'Defensive', note:'Teleport to ally + absorb next attack' },
      { spell:'Spell Reflection', type:'Defensive', note:'Reflect or absorb 1 spell — group variant available' },
      { spell:'Intimidating Shout', type:'CC',      note:'Fear up to 5 enemies 8 sec — breaks on damage' },
      { spell:'Hamstring',        type:'Slow',      note:'50% slow on target' },
      { spell:'Storm Bolt',       type:'Stun',      note:'4 sec single target stun' },
    ],
    da: [
      { spell:'Intervene',        type:'Defensiv', note:'Teleportér til allieret + absorber næste angreb' },
      { spell:'Spell Reflection', type:'Defensiv', note:'Reflekter eller absorber 1 trylleformular — gruppevariant tilgængelig' },
      { spell:'Intimidating Shout', type:'CC',     note:'Fear op til 5 fjender i 8 sek — brydes ved skade' },
      { spell:'Hamstring',        type:'Slow',     note:'50% slow på mål' },
      { spell:'Storm Bolt',       type:'Stun',     note:'4 sek single target stun' },
    ],
  },

  tips: {
    nl: [
      { icon:'⚔', title:'Colossus Smash timing', text:'Sla je grote cooldowns altijd OP of net NA Colossus Smash. De schade boost is 30% extra — verspil dit niet aan auto attacks.' },
      { icon:'💡', title:'Sweeping Strikes = gratis cleave', text:'Bij 2 targets: zet Sweeping Strikes aan vóór je Mortal Strike gooit. Je raakt dan effectief 2 targets met één globaal.' },
      { icon:'🩸', title:'Execute fase', text:'Onder 20% HP wordt Execute je spammable. Vergeet Slam volledig — Execute doet zoveel meer schade.' },
      { icon:'🏃', title:'Charge management', text:'Bewaar een Charge voor als je een mechanic moet ontwijken en snel terug moet komen. Niet elke CD op cooldown gebruiken.' },
      { icon:'🔴', title:'Rage niet verspillen', text:'Gebruik Slam om Rage te dumpen, maar wacht niet te lang. Vol op Rage = gemiste Rage = verloren schade.' },
    ],
    en: [
      { icon:'⚔', title:'Colossus Smash timing', text:'Always use your major cooldowns ON or just after Colossus Smash. The damage boost is 30% extra — don\'t waste it on auto attacks.' },
      { icon:'💡', title:'Sweeping Strikes = free cleave', text:'At 2 targets: activate Sweeping Strikes before casting Mortal Strike. You effectively hit 2 targets with a single global.' },
      { icon:'🩸', title:'Execute phase', text:'Below 20% HP Execute becomes your spammable. Forget Slam entirely — Execute does so much more damage.' },
      { icon:'🏃', title:'Charge management', text:'Keep a Charge for when you need to dodge a mechanic and quickly return. Don\'t use every CD on cooldown.' },
      { icon:'🔴', title:'Don\'t waste Rage', text:'Use Slam to dump Rage, but don\'t wait too long. Full Rage = missed Rage = lost damage.' },
    ],
    da: [
      { icon:'⚔', title:'Colossus Smash-timing', text:'Brug altid dine store cooldowns PÅ eller lige efter Colossus Smash. Skade-boosten er 30% ekstra — spild det ikke på auto attacks.' },
      { icon:'💡', title:'Sweeping Strikes = gratis cleave', text:'Ved 2 mål: aktivér Sweeping Strikes før du kaster Mortal Strike. Du rammer effektivt 2 mål med én global.' },
      { icon:'🩸', title:'Execute-fase', text:'Under 20% HP bliver Execute din spammable. Glem Slam helt — Execute gør langt mere skade.' },
      { icon:'🏃', title:'Charge-styring', text:'Gem en Charge til når du skal undvige en mekanik og hurtigt komme tilbage. Brug ikke alle CD\'er på cooldown.' },
      { icon:'🔴', title:'Spild ikke Rage', text:'Brug Slam til at dumpe Rage, men vent ikke for længe. Fuld Rage = misset Rage = tabt skade.' },
    ],
  },

  macros: {
    nl: [
      { name:'Colossus Smash + Avatar macro', code:'/cast Avatar\n/cast Colossus Smash', note:'Gooit beide tegelijk — maximaliseer het schadevenster direct.' },
      { name:'Charge naar mouseover', code:'/cast [@mouseover,harm][] Charge', note:'Charge naar waar je muisaanwijzer staat — handig in M+ voor snelle gapclose.' },
      { name:'Spell Reflection', code:'/cast Spell Reflection\n/stopcasting', note:'Stop huidige cast en activeer reflectie direct.' },
    ],
    en: [
      { name:'Colossus Smash + Avatar macro', code:'/cast Avatar\n/cast Colossus Smash', note:'Casts both simultaneously — maximize the damage window immediately.' },
      { name:'Charge to mouseover', code:'/cast [@mouseover,harm][] Charge', note:'Charge where your cursor is — handy in M+ for fast gap close.' },
      { name:'Spell Reflection', code:'/cast Spell Reflection\n/stopcasting', note:'Stops current cast and activates reflection immediately.' },
    ],
    da: [
      { name:'Colossus Smash + Avatar-makro', code:'/cast Avatar\n/cast Colossus Smash', note:'Kaster begge på én gang — maksimer skadevinduet med det samme.' },
      { name:'Charge til musepeger', code:'/cast [@mouseover,harm][] Charge', note:'Charge derhen din markør peger — praktisk i M+ til hurtig gap close.' },
      { name:'Spell Reflection', code:'/cast Spell Reflection\n/stopcasting', note:'Stopper nuværende cast og aktiverer refleksion med det samme.' },
    ],
  },

  resource_info: {
    nl: {
      intro: 'Arms gebruikt Rage als resource. Rage bouwt op via auto attacks, Charge en bepaalde abilities. Je hebt Rage nodig voor Slam en Execute.',
      generate: [
        'Auto attacks genereren Rage passief',
        'Charge geeft direct Rage bij aankomst',
        'Overpower kost geen Rage — gratis',
        'Mortal Strike genereerd kleine hoeveelheid Rage',
      ],
      spend: [
        'Slam — kost 20 Rage, je hoofd filler',
        'Execute (<20% HP) — kost 20-40 Rage, spammable',
        'Cleave — kost 20 Rage, AoE filler',
      ],
      pet_tip: '⚠️ Nooit op 100 Rage zitten — dan verspil je passieve Rage generatie van auto attacks!',
      pets: [],
    },
    en: {
      intro: 'Arms uses Rage as its resource. Rage builds up through auto attacks, Charge and certain abilities. You need Rage for Slam and Execute.',
      generate: [
        'Auto attacks generate Rage passively',
        'Charge gives Rage immediately on arrival',
        'Overpower costs no Rage — free',
        'Mortal Strike generates a small amount of Rage',
      ],
      spend: [
        'Slam — costs 20 Rage, main filler',
        'Execute (<20% HP) — costs 20-40 Rage, spammable',
        'Cleave — costs 20 Rage, AoE filler',
      ],
      pet_tip: '⚠️ Never sit at 100 Rage — you waste the passive Rage generation from auto attacks!',
      pets: [],
    },
    da: {
      intro: 'Arms bruger Rage som ressource. Rage opbygges via auto attacks, Charge og visse evner. Du har brug for Rage til Slam og Execute.',
      generate: [
        'Auto attacks genererer Rage passivt',
        'Charge giver Rage straks ved ankomst',
        'Overpower koster ingen Rage — gratis',
        'Mortal Strike genererer en lille mængde Rage',
      ],
      spend: [
        'Slam — koster 20 Rage, hoved-fylder',
        'Execute (<20% HP) — koster 20-40 Rage, spammable',
        'Cleave — koster 20 Rage, AoE-fylder',
      ],
      pet_tip: '⚠️ Sid aldrig på 100 Rage — du spilder den passive Rage-generering fra auto attacks!',
      pets: [],
    },
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Focused Dream',   effect:'Verhoogt Strength significant voor 1 uur. Blijft actief na dood.',              note:'Altijd actief in M+ en raid' },
      { type:'pot',    name:'Tempered Potion',              effect:'Grote Strength boost voor 25 sec. Gebruik op pull of bij Bloodlust.',            note:'Gebruik 2 per boss: pull + 20% HP' },
      { type:'food',   name:'The Sushi Special (Feast)',    effect:'+Strength en Stamina via groepsfeast.',                                          note:'Vraag tank of healer een feast neer te leggen' },
      { type:'food',   name:'Meat Lover\'s Delight',        effect:'Solo food — hoge Strength bonus als backup.',                                    note:'Altijd in je bags' },
      { type:'rune',   name:'Crystalline Augment Rune',     effect:'+Primaire stat voor 1 uur. Stapelt met flask en food.',                          note:'Gratis schade — altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Focused Dream',   effect:'Significantly increases Strength for 1 hour. Persists through death.',          note:'Always active in M+ and raid' },
      { type:'pot',    name:'Tempered Potion',              effect:'Large Strength boost for 25 sec. Use on pull or during Bloodlust.',              note:'Use 2 per boss: pull + 20% HP' },
      { type:'food',   name:'The Sushi Special (Feast)',    effect:'+Strength and Stamina via group feast.',                                         note:'Ask tank or healer to place a feast' },
      { type:'food',   name:'Meat Lover\'s Delight',        effect:'Solo food — high Strength bonus as backup.',                                     note:'Always in your bags' },
      { type:'rune',   name:'Crystalline Augment Rune',     effect:'+Primary stat for 1 hour. Stacks with flask and food.',                         note:'Free damage — always use' },
    ],
    da: [
      { type:'flask',  name:'Flask of the Focused Dream',   effect:'Øger Strength markant i 1 time. Forbliver aktiv efter død.',                    note:'Altid aktiv i M+ og raid' },
      { type:'pot',    name:'Tempered Potion',              effect:'Stor Strength-boost i 25 sek. Brug ved pull eller under Bloodlust.',             note:'Brug 2 per boss: pull + 20% HP' },
      { type:'food',   name:'The Sushi Special (Feast)',    effect:'+Strength og Stamina via gruppefeast.',                                          note:'Bed tank eller healer om at placere en feast' },
      { type:'food',   name:'Meat Lover\'s Delight',        effect:'Solo-mad — høj Strength-bonus som backup.',                                      note:'Altid i din taske' },
      { type:'rune',   name:'Crystalline Augment Rune',     effect:'+Primær stat i 1 time. Stakker med flask og mad.',                               note:'Gratis skade — brug altid' },
    ],
  },
};

ALL_SPECS.push(SPEC_ARMS_WARRIOR);

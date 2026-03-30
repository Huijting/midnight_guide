// data/raids/voidspire.js
// The Voidspire — Midnight Season 1 Raid
// 6 bosses: Averzian, Vorasius, Salhadaar, Vaelgor & Ezzorak, Lightblinded Vanguard, Crown of the Cosmos (Alleria)

if (typeof DUNGEONS === 'undefined') window.DUNGEONS = [];

DUNGEONS.push({
  id:   'voidspire',
  type: 'raid',
  name: 'The Voidspire',
  zone: { nl: 'Voidstorm', en: 'Voidstorm'},
  time: null,
  level: {
    nl: 'Seizoen 1 — LFR 220 · Normal 246 · Heroic 259 · Mythic 272 (eindbazen tot 285)',
    en: 'Season 1 — LFR 220 · Normal 246 · Heroic 259 · Mythic 272 (final bosses up to 285)',
  },
  bosses_short: ['Imperator Averzian', 'Vorasius', 'Fallen-King Salhadaar', 'Vaelgor & Ezzorak', 'Lightblinded Vanguard', 'Crown of the Cosmos'],

  lore: {
    nl: 'Hoog boven de Voidstorm torent de Voidspire als een speer van duisternis. Xal\'atath heeft haar Devouring Host verzameld om de laatste verdediging van het Licht te doorbreken. Alleria Windrunner en de Champions of Azeroth voeren een wanhopige aanval uit op de spits — voordat alles verloren is.',
    en: 'High above the Voidstorm the Voidspire looms like a spear of darkness. Xal\'atath has gathered her Devouring Host to break the last defenses of the Light. Alleria Windrunner and the Champions of Azeroth launch a desperate assault on the summit — before all is lost.'
  },

  tips: [
    {
      title: { nl: '📍 Ingang', en: '📍 Entrance'},
      text:  { nl: '/way #2405 45.5 64.4 — midden in de Voidstorm zone. Zoek de buitenste platform aan de basis van de spits.',
               en: '/way #2405 45.5 64.4 — center of the Voidstorm zone. Find the outer platform at the base of the spire.'},
    },
    {
      title: { nl: '📊 Item levels (S1)', en: '📊 Item levels (S1)'},
      text:  { nl: 'LFR 220 · Normal 246 · Heroic 259 · Mythic 272. Eindbazen / apex tot 285.',
               en: 'LFR 220 · Normal 246 · Heroic 259 · Mythic 272. Final / apex bosses up to 285.'},
    },
    {
      title: { nl: '⚠️ Kernthema: positionering boven DPS', en: '⚠️ Core theme: positioning over DPS'},
      text:  { nl: 'Je DPS\'t je niet door de Voidspire heen. Foute positionering veroorzaakt meer wipes dan te lage schade. Ken je plek, ken je taak.',
               en: 'You cannot DPS your way through the Voidspire. Incorrect positioning causes more wipes than low damage. Know your spot, know your assignment.'},
    },
    {
      title: { nl: '🏆 Tier tokens', en: '🏆 Tier tokens'},
      text:  { nl: 'Tier 35 tokens vallen van bosses 2 (Vorasius), 3 (Salhadaar), 4 (Vaelgor & Ezzorak) en 5 (Lightblinded Vanguard). Boss 6 dropt GEEN tier token.',
               en: 'Tier 35 tokens drop from bosses 2 (Vorasius), 3 (Salhadaar), 4 (Vaelgor & Ezzorak) and 5 (Lightblinded Vanguard). Boss 6 does NOT drop a tier token.'},
    },
    {
      title: { nl: '🎮 Vleugels (LFR)', en: '🎮 Wings (LFR)'},
      text:  { nl: 'Vleugel 1 (17 mrt): Averzian + Vorasius. Vleugel 2 (24 mrt): Salhadaar + Vaelgor & Ezzorak. Vleugel 3 (31 mrt): Lightblinded Vanguard + Crown of the Cosmos.',
               en: 'Wing 1 (Mar 17): Averzian + Vorasius. Wing 2 (Mar 24): Salhadaar + Vaelgor & Ezzorak. Wing 3 (Mar 31): Lightblinded Vanguard + Crown of the Cosmos.'},
    },
  ],

  bosses: [
    // ── BOSS 1 ────────────────────────────────────────────────
    {
      num: 1,
      name: 'Imperator Averzian',
      desc: {
        nl: 'Bochttic-tac-toe: de arena is een 3×3 grid. Elke cyclus spawnen 3 Abyssal Voidshapers in verschillende vakken. Als hun Gathering Darkness-cast volledig gaat: vak geclaimd. Drie aangrenzende vakken op een rij = March of the Endless = directe wipe. Je kunt 2 van de 3 per cyclus stoppen via Umbral Collapse soaks.',
        en: 'Cosmic tic-tac-toe: the arena is a 3×3 grid. Each cycle 3 Abyssal Voidshapers spawn in different zones. If their Gathering Darkness cast completes: zone claimed. Three adjacent claimed zones in a row = March of the Endless = instant wipe. You can stop 2 of the 3 per cycle via Umbral Collapse soaks.'
      },
      tank: {
        nl: [
          '<strong>Blackening Wounds</strong> — Stapelende tankdebuff. Swap vroeg — wacht niet tot de stacks te hoog worden.',
          '<strong>Positionering</strong> — Houd Averzian weg van geclaimde vakken (zijn schade en druk nemen toe naast Void-zones). Positioneer stabiel in het centrum van het grid.',
          '<strong>Dark Tears</strong> — Laat adds van geclaimde vakken niet Averzian bereiken. Off-tank pakt ze op zodra ze spawnen.',
          '<strong>Melee DPS beschermen</strong> — Draai de boss zodat de melee-cluster niet in soakzones belandt die de DPS doen bewegen.',
        ],
        en: [
          '<strong>Blackening Wounds</strong> — Stacking tank debuff. Swap early — do not wait until stacks become lethal.',
          '<strong>Positioning</strong> — Keep Averzian away from claimed zones (his damage and pressure increase near Void areas). Position stably at the center of the grid.',
          '<strong>Dark Tears</strong> — Do not let adds from claimed zones reach Averzian. Off-tank picks them up as soon as they spawn.',
          '<strong>Protect melee DPS</strong> — Face the boss so the melee cluster does not land in soak zones that force DPS to move.',
        ]
      },
      heal: {
        nl: [
          '<strong>Dark Upheaval</strong> — Constante raidschade die toeneemt naarmate het grid meer gevuld raakt. Houd iedereen boven 70%.',
          '<strong>Umbral Collapse soaks</strong> — Soakgroepen nemen spike-schade. Pre-heal soakers direct voor de cast. Bereid meerdere spot-heals voor per cyclus.',
          '<strong>Tanks spiken onvoorspelbaar</strong> — Als Averzian naast een Void-vak staat geeft hij extra schade aan de tank. Anticipeer dit proactief.',
          '<strong>Mythic: gecoördineerde dispels</strong> — Niet reactief dispellen — overlappende dispels veroorzaken simultanee raidschade die het grid breekt.',
        ],
        en: [
          '<strong>Dark Upheaval</strong> — Constant raid damage that intensifies as more of the grid fills. Keep everyone above 70%.',
          '<strong>Umbral Collapse soaks</strong> — Soak groups take spike damage. Pre-heal soakers just before the cast. Prepare multiple spot heals per cycle.',
          '<strong>Tanks spike unpredictably</strong> — When Averzian stands next to a Void zone he deals extra damage to the tank. Anticipate this proactively.',
          '<strong>Mythic: coordinated dispels</strong> — Do not dispel reactively — overlapping dispels cause simultaneous raid damage that breaks grid control.',
        ]
      },
      dps: {
        nl: [
          '<strong>Umbral Collapse</strong> — Jij bent verantwoordelijk voor soaks. Pre-assigned groepen van 3. Stick to the callout — niet improviseren.',
          '<strong>Abyssal Voidshaper prioriteit</strong> — Interrupt Gathering Darkness ALTIJD. Als hij cast: vak geclaimd. Focus de Voidshapers boven de boss op de down-phases.',
          '<strong>Shadowguard Stalwarts</strong> — Kill snel na spawn. Ze geven een buff aan omliggende vijanden als ze te lang leven.',
          '<strong>Nooit het centervak opofferen</strong> — Geef hoeken op als het moet, maar het centervak claimen is bijna altijd dodelijk (te veel diagonalen).',
          '<strong>Cooldowns</strong> — Gebruik offensieve cooldowns op de boss na succesvolle soak-cycli. Niet sparen tot het grid te vol is.',
        ],
        en: [
          '<strong>Umbral Collapse</strong> — You are responsible for soaks. Pre-assigned groups of 3. Stick to the callout — do not improvise.',
          '<strong>Abyssal Voidshaper priority</strong> — Interrupt Gathering Darkness ALWAYS. If it casts: zone claimed. Focus Voidshapers over the boss on down-phases.',
          '<strong>Shadowguard Stalwarts</strong> — Kill fast after spawn. They buff nearby enemies if they live too long.',
          '<strong>Never sacrifice the center zone</strong> — Give up corners when needed, but the center zone being claimed is almost always fatal (too many diagonals).',
          '<strong>Cooldowns</strong> — Use offensive cooldowns on the boss after successful soak cycles. Do not save until the grid is too full.',
        ]
      },
    },
    // ── BOSS 2 ────────────────────────────────────────────────
    {
      num: 2,
      name: 'Vorasius',
      desc: {
        nl: 'Stationaire boss in het midden — een massale gear/throughput check. Kernmechanic: Vorasius maakt kristallen muren met Crystalline Eruption. Als de muren niet neer zijn voor Void Breath: geen veilige plek, directe wipe. Om muren te breken: kite Blistercreep-adds ernaar toe en burst ze bij de muur.',
        en: 'Stationary boss in the center — a massive gear/throughput check. Core mechanic: Vorasius creates crystal walls with Crystalline Eruption. If walls are not down before Void Breath: no safe lane, instant wipe. To break walls: kite Blistercreep adds into them and burst them at the wall.'
      },
      tank: {
        nl: [
          '<strong>Smashing Frenzy</strong> — Frontale aanval op de tank. Missen = raid-explosie. Altijd tanken voor de boss zodat de frontal op jou landt.',
          '<strong>Crystaline Eruption</strong> — Bij een zware slam spawnen muren. Houd de boss op een stabiele plek zodat muurplaatsing voorspelbaar is.',
          '<strong>Colossal Throw</strong> — Boss treft de tank en creëert muren aan weerszijden. Positioneer muren aan tegenovergestelde kanten voor voorspelbare kite-routes.',
          '<strong>Taunt swap</strong> — Primordial Roar stapelt een debuff. Swap na elke zware klap voordat stacks te hoog worden.',
        ],
        en: [
          '<strong>Smashing Frenzy</strong> — Frontal attack on the tank. Missing it = raid explosion. Always tank in front of the boss so the frontal lands on you.',
          '<strong>Crystaline Eruption</strong> — Heavy slam spawns walls. Keep the boss in a stable position so wall placement is predictable.',
          '<strong>Colossal Throw</strong> — Boss hits the tank and creates walls on either side. Position walls on opposite sides for predictable kite routes.',
          '<strong>Taunt swap</strong> — Primordial Roar stacks a debuff. Swap after each heavy hit before stacks get too high.',
        ]
      },
      heal: {
        nl: [
          '<strong>Primordial Roar</strong> — Constante raidschade die escaleert door het hele gevecht. Roteer cooldowns — dit is een duurtest.',
          '<strong>Smashing Frenzy miss</strong> — Als de tank de frontal mist volgt een raidexplosie. Grote raidcooldown klaar houden als backup.',
          '<strong>Blistercreep timing</strong> — Adds exploderen bij de muur. Korte burst-schade op de raid. Bereid spot-heals voor op de kite-spelers.',
          '<strong>Void Breath</strong> — Als muren staan vóór de cast: nul schade in de veilige baan. Als ze niet staan: hele raid sterft. Dit is het moment waarop je niets kunt doen dan goed positioneren.',
        ],
        en: [
          '<strong>Primordial Roar</strong> — Constant raid damage that escalates throughout the fight. Rotate cooldowns — this is an endurance test.',
          '<strong>Smashing Frenzy miss</strong> — If the tank misses the frontal, a raid explosion follows. Keep a major raid cooldown ready as backup.',
          '<strong>Blistercreep timing</strong> — Adds explode at the wall. Short burst damage on the raid. Prepare spot heals for the kite players.',
          '<strong>Void Breath</strong> — If walls are down before the cast: zero damage in the safe lane. If not: the whole raid dies. This is the moment where all you can do is position correctly.',
        ]
      },
      dps: {
        nl: [
          '<strong>Blistercreep kiten</strong> — 2 aangewezen kite-spelers houden Blistercreeps in leven lang genoeg om ze bij de muur te brengen, dan bursten.',
          '<strong>Vorasius staat stil</strong> — Geen beweging nodig op de boss. Gebruik zware single-target cooldowns — geen excuses voor lage uptime.',
          '<strong>Void Breath baan</strong> — Positioneer vóór de cast in de baan die VRIJ is van muren. Buiten de baan = dood.',
          '<strong>Primordial Roar stacks</strong> — De fight heeft een zachte enrage na 3 Roar-cycli. Efficiënte muurdoorbraken = kortere gevecht = minder schade.',
        ],
        en: [
          '<strong>Blistercreep kiting</strong> — 2 designated kite players keep Blistercreeps alive long enough to position them at the wall, then burst.',
          '<strong>Vorasius stands still</strong> — No movement required on the boss. Use heavy single-target cooldowns — no excuses for low uptime.',
          '<strong>Void Breath lane</strong> — Position before the cast in the lane that is FREE of walls. Outside the lane = death.',
          '<strong>Primordial Roar stacks</strong> — The fight has a soft enrage after 3 Roar cycles. Efficient wall breaks = shorter fight = less damage.',
        ]
      },
    },
    // ── BOSS 3 ────────────────────────────────────────────────
    {
      num: 3,
      name: 'Fallen-King Salhadaar',
      desc: {
        nl: 'Void Orb management: twee Concentrated Void-orbs spawnen en bewegen langzaam richting Salhadaar. Als een orb hem bereikt: Void Infusion = directe raidwipe. Orbs vernietigen geeft Galactic Miasma (raidDoT) — stagger de kills om overlapping te vermijden. Bij 100 energie: Cosmic Unraveling = burst-venster met draaiende void-beams.',
        en: 'Void Orb management: two Concentrated Void orbs spawn and slowly drift toward Salhadaar. If an orb reaches him: Void Infusion = instant raid wipe. Destroying orbs applies Galactic Miasma (raid DoT) — stagger kills to avoid overlapping. At 100 energy: Cosmic Unraveling = burst window with spinning void beams.'
      },
      tank: {
        nl: [
          '<strong>Shattering Twilight</strong> — Tank maakt spike-patronen rondom zichzelf. Stap WEG van de raid en van orbbanen — blokkeert anders soakposities en veilige zones tijdens Cosmic Unraveling.',
          '<strong>Despotic Command</strong> — Zware tankbuster. Grote defensive hier.',
          '<strong>Galactic Miasma</strong> — DoT op de hele raid na elke orb-kill. Twee orbs snel achter elkaar doden = dubbele DoT. Coördineer timing met DPS.',
          '<strong>Cosmic Unraveling (100 energie)</strong> — Salhadaar neemt verhoogde schade en vuur draaiende beams. Tank stabiel midden — niet bewegen tenzij nodig.',
        ],
        en: [
          '<strong>Shattering Twilight</strong> — Tank creates spike patterns around themselves. Step AWAY from the raid and from orb lanes — otherwise blocks soak positions and safe zones during Cosmic Unraveling.',
          '<strong>Despotic Command</strong> — Heavy tank buster. Major defensive here.',
          '<strong>Galactic Miasma</strong> — DoT on the entire raid after each orb kill. Killing two orbs fast in a row = double DoT. Coordinate timing with DPS.',
          '<strong>Cosmic Unraveling (100 energy)</strong> — Salhadaar takes increased damage and fires spinning beams. Tank stable in the center — do not move unless necessary.',
        ]
      },
      heal: {
        nl: [
          '<strong>Galactic Miasma</strong> — Raidwide DoT na elke orb-kill. Biggest healing moment na dubbele orb-kill. Raidcooldown bewaren voor dit.',
          '<strong>Dark Radiation</strong> — Stapelende debuff op de raid later in het gevecht. Healing demand escaleert. Cooldowns bewaren voor de eindfase.',
          '<strong>Cosmic Unraveling burn</strong> — Iedereen neemt schade van draaiende beams tenzij ze correct positioneren. Grote raidcooldown hier — dit is het zwaarste healvenster.',
          '<strong>Eindspurt</strong> — Orbs spawnen sneller, stacks bouwen sneller op. Laatste Cosmic Unraveling heeft vaak een grote raidcooldown nodig om erdoorheen te komen.',
        ],
        en: [
          '<strong>Galactic Miasma</strong> — Raid-wide DoT after each orb kill. Biggest healing moment after double orb kill. Save a raid cooldown for this.',
          '<strong>Dark Radiation</strong> — Stacking debuff on the raid later in the fight. Healing demand escalates. Save cooldowns for the end phase.',
          '<strong>Cosmic Unraveling burn</strong> — Everyone takes damage from spinning beams unless they position correctly. Major raid cooldown here — this is the heaviest healing window.',
          '<strong>Final stretch</strong> — Orbs spawn faster, stacks build faster. Final Cosmic Unraveling often needs a major raid cooldown to survive.',
        ]
      },
      dps: {
        nl: [
          '<strong>Orb-rotatie</strong> — 2 DPS aangewezen per orb. Burn snel voor hij de boss bereikt. Stagger de kills: minstens 8 seconden tussen beide orb-kills om Galactic Miasma te laten verlopen.',
          '<strong>Fractured Image adds</strong> — Interrupt of crowd control direct bij spawn. Laat ze niet snowballen.',
          '<strong>Cosmic Unraveling (100 energie)</strong> — Salhadaar neemt verhoogde schade. ALLE offensieve cooldowns hier inzetten. Dit is het kill-venster.',
          '<strong>Draaiende beams tijdens Unraveling</strong> — Op Heroic kun je loosely stacken met raidcooldown actief. Dodge de beams zo veel mogelijk.',
          '<strong>Toy!</strong> — Salhadaar dropt de Hearthstone: Cosmic Ritual Stone toy. Wekelijkse farmdoelstelling.',
        ],
        en: [
          '<strong>Orb rotation</strong> — 2 DPS assigned per orb. Burn fast before it reaches the boss. Stagger kills: at least 8 seconds between both orb kills to let Galactic Miasma expire.',
          '<strong>Fractured Image adds</strong> — Interrupt or crowd control immediately on spawn. Do not let them snowball.',
          '<strong>Cosmic Unraveling (100 energy)</strong> — Salhadaar takes increased damage. USE ALL offensive cooldowns here. This is the kill window.',
          '<strong>Spinning beams during Unraveling</strong> — On Heroic you can loosely stack with raid cooldown active. Dodge the beams as much as possible.',
          '<strong>Toy!</strong> — Salhadaar drops the Hearthstone: Cosmic Ritual Stone toy. Weekly farm target.',
        ]
      },
    },
    // ── BOSS 4 ────────────────────────────────────────────────
    {
      num: 4,
      name: 'Vaelgor & Ezzorak',
      desc: {
        nl: 'Duoboss: twee draken die samen moeten sterven (maximaal 10% HP verschil, anders enrage). Fases: grond en lucht wisselen. Tussenfase: Midnight Flames — iedereen MOET in de Radiant Barrier van de NPC-bondgenoot staan, anders dodelijke schade. Gloom orbs: soak in groepen van 5 en wissel af (Diminish debuff 1 min).',
        en: 'Dual boss: two dragons that must die together (max 10% HP difference, otherwise enrage). Phases: alternate between ground and air. Intermission: Midnight Flames — everyone MUST stand in the Radiant Barrier from the allied NPC, otherwise fatal damage. Gloom orbs: soak in groups of 5 and alternate (Diminish debuff 1 min).'
      },
      tank: {
        nl: [
          '<strong>HP-pariteit</strong> — Houd beide draken binnen 10% HP van elkaar. Aanwijs een DPS-caller die roept wanneer switchen nodig is.',
          '<strong>Rakfang</strong> — Zware tankbuster van Vaelgor + directe Impale (kegel-staartaanval met bleed + stun). Nooit achter Vaelgor staan, nooit voor Ezzorak.',
          '<strong>Midnight Flames tussenfase</strong> — Laat beide draken los en beweeg naar de Radiant Barrier. Op tijd in de barrier staan = overleving. Te laat = dood.',
          '<strong>Voidorbs (Ezzorak)</strong> — Ezzorak schiet een grote orb die een permanente plas achterlaat bij de rand. Positioneer zodat plassen aan de zijkanten vallen.',
        ],
        en: [
          '<strong>HP parity</strong> — Keep both dragons within 10% HP of each other. Assign a DPS caller who calls when switching is needed.',
          '<strong>Rakfang</strong> — Heavy tank buster from Vaelgor + immediate Impale (cone tail attack with bleed + stun). Never stand behind Vaelgor, never in front of Ezzorak.',
          '<strong>Midnight Flames intermission</strong> — Drop both dragons and move to the Radiant Barrier. In the barrier in time = survival. Too late = death.',
          '<strong>Voidorbs (Ezzorak)</strong> — Ezzorak fires a large orb that leaves a permanent puddle at the edge. Position so puddles fall to the sides.',
        ]
      },
      heal: {
        nl: [
          '<strong>Nullbeam + Rakfang</strong> — Altijd tegelijk: grote tank-spike + healing absorb op de tank. Prioriteer tank-healing hier.',
          '<strong>Gloom soak</strong> — Soakgroepen nemen spike-schade. Bereid spot-heals voor op elke soakgroep.',
          '<strong>Midnight Flames</strong> — Buiten de barrier = instant dood. Als iemand het mist: er valt niets te helen.',
          '<strong>HP-pariteit emergentie</strong> — Als een draak ver achterbloopt en DPS snel moet wisselen: korte maar zware schade-spike op die draak. Pre-heal de raid.',
        ],
        en: [
          '<strong>Nullbeam + Rakfang</strong> — Always together: large tank spike + healing absorb on the tank. Prioritize tank healing here.',
          '<strong>Gloom soak</strong> — Soak groups take spike damage. Prepare spot heals for each soak group.',
          '<strong>Midnight Flames</strong> — Outside the barrier = instant death. If someone misses it: nothing to heal.',
          '<strong>HP parity emergency</strong> — If a dragon falls behind and DPS needs to quickly switch: short but heavy damage spike on that dragon. Pre-heal the raid.',
        ]
      },
      dps: {
        nl: [
          '<strong>HP-pariteit</strong> — Aanwijs een caller. Max 10% verschil. Wissel focus zodra de caller roept — meters zijn hier irrelevant.',
          '<strong>Voidorbs (Ezzorak)</strong> — Bij Nullbeam spawnt een orb. Permanente plas bij de rand — druk ze naar de zijkanten. Interrupted Voidbolt van de orbs.',
          '<strong>Gloom orbs soak</strong> — Soak in groepen van 5. Diminish debuff = 1 min cooldown op soaken. Alterneer groepen. Twee keer soaken met Diminish = grote schade.',
          '<strong>Midnight Flames</strong> — Beide draken loslaten. Naar de Radiant Barrier. Deadline is STRENG. Dit is een positiecheck, geen DPS-check.',
          '<strong>Enrage = wipe</strong> — Als een draak de andere met meer dan 10% HP overleeft, enragt hij. Alles wat daarna volgt is een recht naar de grafsteen.',
        ],
        en: [
          '<strong>HP parity</strong> — Assign a caller. Max 10% difference. Switch focus when the caller calls — meters are irrelevant here.',
          '<strong>Voidorbs (Ezzorak)</strong> — Spawns an orb at Nullbeam. Permanent puddle at the edge — push them toward the sides. Interrupt Voidbolt from the orbs.',
          '<strong>Gloom orbs soak</strong> — Soak in groups of 5. Diminish debuff = 1 min cooldown on soaking. Alternate groups. Soaking twice with Diminish = massive damage.',
          '<strong>Midnight Flames</strong> — Drop both dragons. Move to the Radiant Barrier. Deadline is STRICT. This is a positioning check, not a DPS check.',
          '<strong>Enrage = wipe</strong> — If a dragon outlives the other by more than 10% HP, it enrages. Everything after that is a straight walk to the graveyard.',
        ]
      },
    },
    // ── BOSS 5 ────────────────────────────────────────────────
    {
      num: 5,
      name: 'Lightblinded Vanguard',
      desc: {
        nl: 'Council-gevecht: drie paladin-achtige bosses tegelijk. Elke boss heeft unieke dreiging en ze versterken elkaar als ze tegelijk vol energie zijn. Sacred Shield blokkeert interrupts en moet doorbroken worden. Tyr\'s Wrath geeft verhoogde schade + verminderde healing. Judgment gevolgd door zware follow-up hits op de tank.',
        en: 'Council fight: three paladin-type bosses simultaneously. Each has unique pressure and they empower each other when all are at full energy simultaneously. Sacred Shield blocks interrupts and must be broken. Tyr\'s Wrath gives increased damage + reduced healing. Judgment followed by heavy follow-up hits on the tank.'
      },
      tank: {
        nl: [
          '<strong>Judgment</strong> — Krachtige magische hit op de tank gevolgd door een reeks melee-klappen. Grote defensive bij Judgment.',
          '<strong>Sacred Shield doorbreken</strong> — Als het schild actief is kun je de boss niet interrupts. Breek het schild direct zodat interrupt-rotaties kunnen doorgaan.',
          '<strong>Alle drie gestacked</strong> — Houd bosses gestacked voor AoE-cleave van DPS. Positioneer ze zo dat geen enkele achter de tank staat.',
          '<strong>Overcharge-timing</strong> — Als alle drie tegelijk vol energie zijn: massieve overlap van abilities. Grote defensives bewaren voor dit moment.',
        ],
        en: [
          '<strong>Judgment</strong> — Powerful magic hit on the tank followed by a series of melee strikes. Major defensive at Judgment.',
          '<strong>Break Sacred Shield</strong> — While the shield is active the boss cannot be interrupted. Break it immediately so interrupt rotations can continue.',
          '<strong>All three stacked</strong> — Keep bosses stacked for DPS AoE cleave. Position them so none stand behind the tank.',
          '<strong>Overcharge timing</strong> — When all three reach full energy simultaneously: massive ability overlap. Save major defensives for this moment.',
        ]
      },
      heal: {
        nl: [
          '<strong>Tyr\'s Wrath</strong> — Verhoogde schade op getroffen spelers + healing-reductie op de tank. Spot-heal de tank. Purge-able op Mythic.',
          '<strong>Holy Conflagration</strong> — Grote AoE burst. Raidcooldown voor dit.',
          '<strong>Aura-management</strong> — Elke boss heeft een aura-effect dat schade doet aan spelers in de buurt. Houd groepsgezondheid stabiel en anticipeer de overlap.',
          '<strong>Sacred Shield</strong> — Geen interrupts zolang het schild er is. DPS breekt het snel? Minimale impasse. DPS breekt het traag? Grotere healing-druk.',
        ],
        en: [
          '<strong>Tyr\'s Wrath</strong> — Increased damage on hit players + healing reduction on the tank. Spot heal the tank. Purgeable on Mythic.',
          '<strong>Holy Conflagration</strong> — Large AoE burst. Raid cooldown for this.',
          '<strong>Aura management</strong> — Each boss has an aura effect dealing damage to nearby players. Keep raid health stable and anticipate overlap.',
          '<strong>Sacred Shield</strong> — No interrupts while the shield is up. DPS breaks it fast? Minimal disruption. DPS breaks it slow? Greater healing pressure.',
        ]
      },
      dps: {
        nl: [
          '<strong>Sacred Shield = interrupt-killer</strong> — Breek het schild direct. Prioriteit boven alles. Interrupts zijn nutteloos zolang het schild actief is.',
          '<strong>Target-swaps</strong> — Wijs per cyclus een kill-volgorde toe. Geen enkel target verwaarlozen — ze versterken elkaar bij vol energie.',
          '<strong>Tyr\'s Wrath</strong> — Kan gepurged worden (Shamans/Priests/Hunters). Altijd purgen direct als het verschijnt.',
          '<strong>Lightblinded Vanguard</strong> — Elke boss heeft unieke aura\'s die schade doen bij overlap. Houd afstand van overlappende zones.',
          '<strong>Offensieve cooldowns</strong> — Gebruik ze op de boss met het hoogste HP-percentage. Niet verknoeien op een boss die bijna dood is.',
        ],
        en: [
          '<strong>Sacred Shield = interrupt killer</strong> — Break the shield immediately. Priority above everything. Interrupts are useless while the shield is active.',
          '<strong>Target swaps</strong> — Assign a kill order each cycle. Never neglect any target — they empower each other at full energy.',
          '<strong>Tyr\'s Wrath</strong> — Can be purged (Shamans/Priests/Hunters). Always purge immediately when it appears.',
          '<strong>Lightblinded Vanguard</strong> — Each boss has unique auras dealing damage on overlap. Keep distance from overlapping zones.',
          '<strong>Offensive cooldowns</strong> — Use them on the boss with the highest HP percentage. Do not waste them on a boss nearly dead.',
        ]
      },
    },
    // ── BOSS 6 (FINAL) ────────────────────────────────────────
    {
      num: 6,
      name: 'Crown of the Cosmos',
      desc: {
        nl: 'Final boss: Alleria Windrunner — meerfasig gevecht met zwaartekrachtinstortingen, kosmische anomalieën en hoge burn-fasen. Elke fase combineert mechanismen van eerdere bosses. Mythic: sequentiële kick-volgorde (alleen groen gemarkeerde targets zijn interruptbaar) — één gemiste kick cascadeert naar een onvermijdelijke wipe.',
        en: 'Final boss: Alleria Windrunner — multi-stage fight with gravity collapses, cosmic anomalies, and high-intensity burn phases. Each phase combines mechanics from earlier bosses. Mythic: sequential kick order (only green-bar targets are interruptible) — one missed kick cascades into unavoidable wipe.'
      },
      tank: {
        nl: [
          '<strong>Void Rend</strong> — Zware tankbuster + shadow DoT. Grote defensive hier. Taunt swap zodra de DoT begint te stapelen.',
          '<strong>Gravity Collapse</strong> — Iedereen wordt naar het centrum getrokken. Tank houdt boss stabiel midden. Gebruik movement-abilities om de positie te houden.',
          '<strong>Kosmische anomalieën</strong> — Spawnen rondom de arena. Houd de boss weg van actieve anomalie-zones — zijn schade neemt toe in de buurt.',
          '<strong>Burn-fasen</strong> — Alleria neemt verhoogde schade. Defensives bewaren voor de aanloopperiode vóór de burn — dit is wanneer de schade piekt.',
        ],
        en: [
          '<strong>Void Rend</strong> — Heavy tank buster + shadow DoT. Major defensive here. Taunt swap as soon as the DoT begins stacking.',
          '<strong>Gravity Collapse</strong> — Everyone is pulled toward the center. Tank keeps boss stable in the center. Use movement abilities to maintain position.',
          '<strong>Cosmic anomalies</strong> — Spawn around the arena. Keep the boss away from active anomaly zones — his damage increases near them.',
          '<strong>Burn phases</strong> — Alleria takes increased damage. Save defensives for the lead-up period before the burn — this is when damage peaks.',
        ]
      },
      heal: {
        nl: [
          '<strong>Astral Surge</strong> — Zware raidwide schade. Grote raidcooldown bewaren voor elke Astral Surge.',
          '<strong>Gravity Collapse</strong> — Pulls iedereen naar het centrum — positioneer je burst-heals voor de landing.',
          '<strong>Cosmic anomalieën schade</strong> — Iedereen die een anomalie raakt neemt schade. Steady healing — geen enkel moment van rust.',
          '<strong>Finale fase</strong> — Gravity Collapse + anomalie-spawns TEGELIJK. Dit is het zwaarste healvenster. Bewaar je grootste cooldown voor hier.',
        ],
        en: [
          '<strong>Astral Surge</strong> — Heavy raid-wide damage. Save a major raid cooldown for every Astral Surge.',
          '<strong>Gravity Collapse</strong> — Pulls everyone toward the center — position your burst heals for the landing.',
          '<strong>Cosmic anomaly damage</strong> — Everyone who touches an anomaly takes damage. Steady healing — no moment of rest.',
          '<strong>Final phase</strong> — Gravity Collapse + anomaly spawns SIMULTANEOUSLY. This is the hardest healing window. Save your biggest cooldown for here.',
        ]
      },
      dps: {
        nl: [
          '<strong>Alleria\'s Gaze</strong> — Markeert 3 spelers voor een dodelijke kegel. Wijs soakgroepen toe. Geen dubbele soaks.',
          '<strong>Gravity Collapse</strong> — Iedereen wordt naar het midden getrokken. Gebruik movement-abilities onmiddellijk.',
          '<strong>Cosmic Anomalies</strong> — Niet aanraken. Kit weg van de bosspositie.',
          '<strong>Burn Phases</strong> — Alleria neemt verhoogde schade. ZET ALLE offensieve cooldowns in. Bewaar niets.',
          '<strong>Mythic: Green Kicks</strong> — Vaste kick-volgorde. Alleen groen-gemarkeerde targets zijn interruptbaar. Eén gemiste of verkeerde kick = wipe.',
        ],
        en: [
          '<strong>Alleria\'s Gaze</strong> — Marks 3 players for lethal cone. Assign soak groups. No double soaks.',
          '<strong>Gravity Collapse</strong> — Everyone pulled to center. Use movement abilities immediately.',
          '<strong>Cosmic Anomalies</strong> — Do not touch. Kite away from boss position.',
          '<strong>Burn Phases</strong> — Alleria takes increased damage. USE ALL offensive cooldowns. Save nothing.',
          '<strong>Mythic: Green Kicks</strong> — Sequential kick order. Only green-bar targets are interruptible. One missed/wrong kick = wipe.',
        ]
      },
    },
  ],

  route: {
    norm_note: null,
    pulls: [
      {
        type: 'trash',
        label: { nl: 'Buitenste verdediging (trash)', en: 'Outer defenses (trash)'},
        area:  { nl: 'Basis van de Voidspire', en: 'Base of the Voidspire'},
        desc:  { nl: 'Void Sentinels en Shadow Cohorts. Interrupt Void Pulse altijd. Dood Shadowguard Stalwarts snel — ze geven een buff aan omliggende vijanden. Niet te veel tegelijk pullen.',
                 en: 'Void Sentinels and Shadow Cohorts. Always interrupt Void Pulse. Kill Shadowguard Stalwarts fast — they buff nearby enemies. Do not overpull.'},
      },
      {
        type: 'boss',
        label: { nl: '1. Imperator Averzian', en: '1. Imperator Averzian'},
        area:  { nl: 'Eerste kamer', en: 'First chamber'},
        desc:  { nl: 'Tic-tac-toe grid. Soak Umbral Collapse. Interrupt Gathering Darkness. Nooit het centervak opofferen.',
                 en: 'Tic-tac-toe grid. Soak Umbral Collapse. Interrupt Gathering Darkness. Never sacrifice the center zone.'},
      },
      {
        type: 'boss',
        label: { nl: '2. Vorasius', en: '2. Vorasius'},
        area:  { nl: 'Centrale zaal', en: 'Central hall'},
        desc:  { nl: 'Muren breken met Blistercreep-kite voor Void Breath. Smashing Frenzy altijd op de tank laten landen.',
                 en: 'Break walls with Blistercreep kite before Void Breath. Always let Smashing Frenzy land on the tank.'},
      },
      {
        type: 'boss',
        label: { nl: '🔥 3. Fallen-King Salhadaar', en: '🔥 3. Fallen-King Salhadaar'},
        area:  { nl: 'Riftlabs kamer', en: 'Riftlabs chamber'},
        desc:  { nl: 'Void Orbs: stagger kills (8 sec apart). Cosmic Unraveling = alle cooldowns. Shattering Twilight: tank uit de raidbaan bewegen. 🔥 BLOODLUST hier.',
                 en: 'Void Orbs: stagger kills (8 sec apart). Cosmic Unraveling = all cooldowns. Shattering Twilight: move tank out of raid lane. 🔥 BLOODLUST here.'},
      },
      {
        type: 'boss',
        label: { nl: '4. Vaelgor & Ezzorak', en: '4. Vaelgor & Ezzorak'},
        area:  { nl: 'Drakenkamer', en: 'Dragon chamber'},
        desc:  { nl: 'HP-pariteit max 10%. Midnight Flames: iedereen in Radiant Barrier. Gloom orbs: groepen van 5, wissel af.',
                 en: 'HP parity max 10%. Midnight Flames: everyone in Radiant Barrier. Gloom orbs: groups of 5, alternate.'},
      },
      {
        type: 'boss',
        label: { nl: '5. Lightblinded Vanguard', en: '5. Lightblinded Vanguard'},
        area:  { nl: 'Heiligdomkamer', en: 'Sanctum chamber'},
        desc:  { nl: 'Raad-gevecht. Sacred Shield = break direct. Target-swaps. Bewaar grote defensives voor Overcharge-overlap.',
                 en: 'Council fight. Sacred Shield = break immediately. Target swaps. Save major defensives for Overcharge overlap.'},
      },
      {
        type: 'boss',
        label: { nl: '🔥 6. Crown of the Cosmos — Alleria Windrunner', en: '🔥 6. Crown of the Cosmos — Alleria Windrunner'},
        area:  { nl: 'Top van de Voidspire', en: 'Summit of the Voidspire'},
        desc:  { nl: 'Final boss. Meerfasig. Gravity Collapse + anomalieën. Bewaar je grootste raidcooldown voor de finale fase. 🔥 BLOODLUST in burn-fase.',
                 en: 'Final boss. Multi-stage. Gravity Collapse + anomalies. Save your biggest raid cooldown for the final phase. 🔥 BLOODLUST in burn phase.'},
      },
    ],
  },
});

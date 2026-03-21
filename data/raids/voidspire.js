// data/raids/voidspire.js
// The Voidspire — Midnight Season 1 Raid
// 6 bosses: Averzian, Vorasius, Salhadaar, Vaelgor & Ezzorak, Lightblinded Vanguard, Crown of the Cosmos (Alleria)

if (typeof DUNGEONS === 'undefined') window.DUNGEONS = [];

DUNGEONS.push({
  id:   'voidspire',
  type: 'raid',
  name: 'The Voidspire',
  zone: { nl: 'Voidstorm', en: 'Voidstorm', da: 'Voidstorm' },
  time: null,
  level: { nl: 'Seizoen 1 Raid — Normal/Heroic/Mythic', en: 'Season 1 Raid — Normal/Heroic/Mythic', da: 'Sæson 1 Raid — Normal/Heroic/Mythic' },
  bosses_short: ['Imperator Averzian', 'Vorasius', 'Fallen-King Salhadaar', 'Vaelgor & Ezzorak', 'Lightblinded Vanguard', 'Crown of the Cosmos'],

  lore: {
    nl: 'Hoog boven de Voidstorm torent de Voidspire als een speer van duisternis. Xal\'atath heeft haar Devouring Host verzameld om de laatste verdediging van het Licht te doorbreken. Alleria Windrunner en de Champions of Azeroth voeren een wanhopige aanval uit op de spits — voordat alles verloren is.',
    en: 'High above the Voidstorm the Voidspire looms like a spear of darkness. Xal\'atath has gathered her Devouring Host to break the last defenses of the Light. Alleria Windrunner and the Champions of Azeroth launch a desperate assault on the summit — before all is lost.',
    da: 'Højt over Voidstorm truer Voidspire som et mørkets spyd. Xal\'atath har samlet sin Devouring Host for at bryde Lysets sidste forsvar. Alleria Windrunner og Azeroth\'s Champions lancerer et desperat angreb mod toppen — inden alt er tabt.',
  },

  tips: [
    {
      title: { nl: '📍 Ingang', en: '📍 Entrance', da: '📍 Indgang' },
      text:  { nl: '/way #2405 45.5 64.4 — midden in de Voidstorm zone. Zoek de buitenste platform aan de basis van de spits.',
               en: '/way #2405 45.5 64.4 — center of the Voidstorm zone. Find the outer platform at the base of the spire.',
               da: '/way #2405 45.5 64.4 — midten af Voidstorm-zonen. Find den ydre platform ved foden af spyret.' },
    },
    {
      title: { nl: '⚠️ Kernthema: positionering boven DPS', en: '⚠️ Core theme: positioning over DPS', da: '⚠️ Kernema: positionering over DPS' },
      text:  { nl: 'Je DPS\'t je niet door de Voidspire heen. Foute positionering veroorzaakt meer wipes dan te lage schade. Ken je plek, ken je taak.',
               en: 'You cannot DPS your way through the Voidspire. Incorrect positioning causes more wipes than low damage. Know your spot, know your assignment.',
               da: 'Du kan ikke DPS dig igennem Voidspire. Forkert positionering giver flere wipes end lav skade. Kend din plads, kend din opgave.' },
    },
    {
      title: { nl: '🏆 Tier tokens', en: '🏆 Tier tokens', da: '🏆 Tier tokens' },
      text:  { nl: 'Tier 35 tokens vallen van bosses 2 (Vorasius), 3 (Salhadaar), 4 (Vaelgor & Ezzorak) en 5 (Lightblinded Vanguard). Boss 6 dropt GEEN tier token.',
               en: 'Tier 35 tokens drop from bosses 2 (Vorasius), 3 (Salhadaar), 4 (Vaelgor & Ezzorak) and 5 (Lightblinded Vanguard). Boss 6 does NOT drop a tier token.',
               da: 'Tier 35-tokens falder fra bosser 2 (Vorasius), 3 (Salhadaar), 4 (Vaelgor & Ezzorak) og 5 (Lightblinded Vanguard). Boss 6 dropper IKKE tier-token.' },
    },
    {
      title: { nl: '🎮 Vleugels (LFR)', en: '🎮 Wings (LFR)', da: '🎮 Vinger (LFR)' },
      text:  { nl: 'Vleugel 1 (17 mrt): Averzian + Vorasius. Vleugel 2 (24 mrt): Salhadaar + Vaelgor & Ezzorak. Vleugel 3 (31 mrt): Lightblinded Vanguard + Crown of the Cosmos.',
               en: 'Wing 1 (Mar 17): Averzian + Vorasius. Wing 2 (Mar 24): Salhadaar + Vaelgor & Ezzorak. Wing 3 (Mar 31): Lightblinded Vanguard + Crown of the Cosmos.',
               da: 'Vinge 1 (17. mar): Averzian + Vorasius. Vinge 2 (24. mar): Salhadaar + Vaelgor & Ezzorak. Vinge 3 (31. mar): Lightblinded Vanguard + Crown of the Cosmos.' },
    },
  ],

  bosses: [
    // ── BOSS 1 ────────────────────────────────────────────────
    {
      num: 1,
      name: 'Imperator Averzian',
      desc: {
        nl: 'Bochttic-tac-toe: de arena is een 3×3 grid. Elke cyclus spawnen 3 Abyssal Voidshapers in verschillende vakken. Als hun Gathering Darkness-cast volledig gaat: vak geclaimd. Drie aangrenzende vakken op een rij = March of the Endless = directe wipe. Je kunt 2 van de 3 per cyclus stoppen via Umbral Collapse soaks.',
        en: 'Cosmic tic-tac-toe: the arena is a 3×3 grid. Each cycle 3 Abyssal Voidshapers spawn in different zones. If their Gathering Darkness cast completes: zone claimed. Three adjacent claimed zones in a row = March of the Endless = instant wipe. You can stop 2 of the 3 per cycle via Umbral Collapse soaks.',
        da: 'Kosmisk tic-tac-toe: arenaen er et 3×3 gitter. Hver cyklus spawner 3 Abyssal Voidshapers i forskellige felter. Hvis deres Gathering Darkness-cast fuldføres: felt er clamet. Tre tilstødende felter på rad = March of the Endless = øjeblikkelig wipe. Du kan stoppe 2 af 3 per cyklus via Umbral Collapse soaks.',
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
        ],
        da: [
          '<strong>Blackening Wounds</strong> — Staplende tank-debuff. Swap tidligt — vent ikke til stacks bliver dødelige.',
          '<strong>Positionering</strong> — Hold Averzian væk fra claimede felter (hans skade og pres stiger nær Void-zoner). Positionér stabilt i midten af gitteret.',
          '<strong>Dark Tears</strong> — Lad ikke adds fra claimede felter nå Averzian. Off-tank tager dem op så snart de spawner.',
          '<strong>Beskyt melee DPS</strong> — Vend bossen så melee-klyngen ikke havner i soak-zoner der tvinger DPS til at bevæge sig.',
        ],
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
        ],
        da: [
          '<strong>Dark Upheaval</strong> — Konstant raid-skade der stiger jo mere gitteret fyldes. Hold alle over 70%.',
          '<strong>Umbral Collapse soaks</strong> — Soak-grupper tager spike-skade. Pre-heal soakers lige inden castet. Forbered flere spot-heals per cyklus.',
          '<strong>Tanks spiked uforudsigeligt</strong> — Når Averzian står ved siden af en Void-zone giver han ekstra skade til tanken. Forudse dette proaktivt.',
          '<strong>Mythic: koordinerede dispels</strong> — Dispel ikke reaktivt — overlappende dispels giver simultan raid-skade der bryder gitterkontrol.',
        ],
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
        ],
        da: [
          '<strong>Umbral Collapse</strong> — Du er ansvarlig for soaks. Pre-assigned grupper af 3. Hold dig til callout — improviser ikke.',
          '<strong>Abyssal Voidshaper prioritet</strong> — Afbryd Gathering Darkness ALTID. Hvis det caster: felt er clamet. Focus Voidshapers frem for bossen i down-phases.',
          '<strong>Shadowguard Stalwarts</strong> — Dræb hurtigt efter spawn. De buffer nærliggende fjender hvis de lever for længe.',
          '<strong>Ofre aldrig centerfeltet</strong> — Giv hjørner op om nødvendigt, men center-feltet claimet er næsten altid fatalt (for mange diagonaler).',
          '<strong>Cooldowns</strong> — Brug offensive cooldowns på bossen efter succesfulde soak-cykler. Gem dem ikke til gitteret er for fyldt.',
        ],
      },
    },
    // ── BOSS 2 ────────────────────────────────────────────────
    {
      num: 2,
      name: 'Vorasius',
      desc: {
        nl: 'Stationaire boss in het midden — een massale gear/throughput check. Kernmechanic: Vorasius maakt kristallen muren met Crystalline Eruption. Als de muren niet neer zijn voor Void Breath: geen veilige plek, directe wipe. Om muren te breken: kite Blistercreep-adds ernaar toe en burst ze bij de muur.',
        en: 'Stationary boss in the center — a massive gear/throughput check. Core mechanic: Vorasius creates crystal walls with Crystalline Eruption. If walls are not down before Void Breath: no safe lane, instant wipe. To break walls: kite Blistercreep adds into them and burst them at the wall.',
        da: 'Stationær boss i midten — en massiv gear/throughput-tjek. Kernemekanik: Vorasius skaber krystalvægge med Crystalline Eruption. Hvis væggene ikke er nede inden Void Breath: ingen sikker bane, øjeblikkelig wipe. For at bryde vægge: kite Blistercreep-adds mod dem og burst dem ved væggen.',
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
        ],
        da: [
          '<strong>Smashing Frenzy</strong> — Frontal angreb på tanken. Glippe det = raid-eksplosion. Tank altid foran bossen så frontalen lander på dig.',
          '<strong>Crystaline Eruption</strong> — Tungt slag spawner vægge. Hold bossen et stabilt sted så vægplacering er forudsigelig.',
          '<strong>Colossal Throw</strong> — Boss rammer tanken og skaber vægge på begge sider. Positionér vægge på modsatte sider for forudsigelige kite-ruter.',
          '<strong>Taunt swap</strong> — Primordial Roar stabler en debuff. Swap efter hvert tungt slag inden stacks bliver for høje.',
        ],
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
        ],
        da: [
          '<strong>Primordial Roar</strong> — Konstant raid-skade der eskalerer igennem hele kampen. Roter cooldowns — dette er en udholdenhedstest.',
          '<strong>Smashing Frenzy misser</strong> — Hvis tanken misser frontalen følger en raid-eksplosion. Hold en stor raid-cooldown klar som backup.',
          '<strong>Blistercreep timing</strong> — Adds eksploderer ved væggen. Kort burst-skade på raiden. Forbered spot-heals til kite-spillerne.',
          '<strong>Void Breath</strong> — Hvis væggene er nede inden castet: nul skade i den sikre bane. Hvis ikke: hele raiden dør. Dette er øjeblikket hvor alt du kan gøre er at positionere korrekt.',
        ],
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
        ],
        da: [
          '<strong>Blistercreep kite</strong> — 2 udpegede kite-spillere holder Blistercreeps i live længe nok til at positionere dem ved væggen, derefter burst.',
          '<strong>Vorasius står stille</strong> — Ingen bevægelse krævet på bossen. Brug tunge single-target cooldowns — ingen undskyldninger for lav uptime.',
          '<strong>Void Breath bane</strong> — Positionér inden castet i den bane der er FRI for vægge. Uden for banen = død.',
          '<strong>Primordial Roar stacks</strong> — Kampen har en blød enrage efter 3 Roar-cykler. Effektive vægbrud = kortere kamp = mindre skade.',
        ],
      },
    },
    // ── BOSS 3 ────────────────────────────────────────────────
    {
      num: 3,
      name: 'Fallen-King Salhadaar',
      desc: {
        nl: 'Void Orb management: twee Concentrated Void-orbs spawnen en bewegen langzaam richting Salhadaar. Als een orb hem bereikt: Void Infusion = directe raidwipe. Orbs vernietigen geeft Galactic Miasma (raidDoT) — stagger de kills om overlapping te vermijden. Bij 100 energie: Cosmic Unraveling = burst-venster met draaiende void-beams.',
        en: 'Void Orb management: two Concentrated Void orbs spawn and slowly drift toward Salhadaar. If an orb reaches him: Void Infusion = instant raid wipe. Destroying orbs applies Galactic Miasma (raid DoT) — stagger kills to avoid overlapping. At 100 energy: Cosmic Unraveling = burst window with spinning void beams.',
        da: 'Void Orb-management: to Concentrated Void-orbs spawner og bevæger sig langsomt mod Salhadaar. Hvis en orb når ham: Void Infusion = øjeblikkelig raid-wipe. Ødelæggelse af orbs giver Galactic Miasma (raid-DoT) — stagger kills for at undgå overlap. Ved 100 energi: Cosmic Unraveling = burst-vindue med roterende void-beams.',
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
        ],
        da: [
          '<strong>Shattering Twilight</strong> — Tank skaber spike-mønstre rundt om sig selv. Træd VÆRD fra raiden og fra orb-baner — blokerer ellers soak-positioner og sikre zoner under Cosmic Unraveling.',
          '<strong>Despotic Command</strong> — Tung tankbuster. Stor defensive her.',
          '<strong>Galactic Miasma</strong> — DoT på hele raiden efter hvert orb-kill. At dræbe to orbs hurtigt i træk = dobbelt DoT. Koordinér timing med DPS.',
          '<strong>Cosmic Unraveling (100 energi)</strong> — Salhadaar tager øget skade og affyrer roterende beams. Tank stabilt i midten — bevæg dig ikke medmindre nødvendigt.',
        ],
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
        ],
        da: [
          '<strong>Galactic Miasma</strong> — Raid-bred DoT efter hvert orb-kill. Største healing-øjeblik efter dobbelt orb-kill. Gem en raid-cooldown til dette.',
          '<strong>Dark Radiation</strong> — Staplende debuff på raiden senere i kampen. Healing-efterspørgsel eskalerer. Gem cooldowns til slutfasen.',
          '<strong>Cosmic Unraveling burn</strong> — Alle tager skade fra roterende beams medmindre de positionerer korrekt. Stor raid-cooldown her — dette er det tungeste heal-vindue.',
          '<strong>Slutspurt</strong> — Orbs spawner hurtigere, stacks bygges hurtigere. Sidste Cosmic Unraveling kræver ofte en stor raid-cooldown for at overleve.',
        ],
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
        ],
        da: [
          '<strong>Orb-rotation</strong> — 2 DPS tildelt per orb. Burn hurtigt inden det når bossen. Stagger kills: mindst 8 sekunder mellem begge orb-kills for at lade Galactic Miasma udløbe.',
          '<strong>Fractured Image adds</strong> — Afbryd eller crowd control straks ved spawn. Lad dem ikke snowballe.',
          '<strong>Cosmic Unraveling (100 energi)</strong> — Salhadaar tager øget skade. BRUG ALLE offensive cooldowns her. Dette er kill-vinduet.',
          '<strong>Roterende beams under Unraveling</strong> — På Heroic kan du løst stacke med raid-cooldown aktiv. Undgå beams så meget som muligt.',
          '<strong>Toy!</strong> — Salhadaar dropper Hearthstone: Cosmic Ritual Stone toy. Ugentligt farm-mål.',
        ],
      },
    },
    // ── BOSS 4 ────────────────────────────────────────────────
    {
      num: 4,
      name: 'Vaelgor & Ezzorak',
      desc: {
        nl: 'Duoboss: twee draken die samen moeten sterven (maximaal 10% HP verschil, anders enrage). Fases: grond en lucht wisselen. Tussenfase: Midnight Flames — iedereen MOET in de Radiant Barrier van de NPC-bondgenoot staan, anders dodelijke schade. Gloom orbs: soak in groepen van 5 en wissel af (Diminish debuff 1 min).',
        en: 'Dual boss: two dragons that must die together (max 10% HP difference, otherwise enrage). Phases: alternate between ground and air. Intermission: Midnight Flames — everyone MUST stand in the Radiant Barrier from the allied NPC, otherwise fatal damage. Gloom orbs: soak in groups of 5 and alternate (Diminish debuff 1 min).',
        da: 'Dobbeltboss: to drager der skal dø sammen (maks 10% HP-forskel, ellers enrage). Faser: skifter mellem jord og luft. Mellemfase: Midnight Flames — alle SKAL stå i Radiant Barrier fra allieret NPC, ellers dødelig skade. Gloom orbs: soak i grupper af 5 og skiftes (Diminish debuff 1 min).',
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
        ],
        da: [
          '<strong>HP-paritet</strong> — Hold begge drager inden for 10% HP af hinanden. Udpeg en DPS-caller der råber hvornår der skal skiftes.',
          '<strong>Rakfang</strong> — Tung tankbuster fra Vaelgor + øjeblikkelig Impale (kegle-haleangreb med bleed + stun). Stå aldrig bag Vaelgor, aldrig foran Ezzorak.',
          '<strong>Midnight Flames mellemfase</strong> — Slip begge drager og bevæg dig til Radiant Barrier. I barrieren til tiden = overlevelse. For sent = død.',
          '<strong>Voidorbs (Ezzorak)</strong> — Ezzorak affyrer en stor orb der efterlader en permanent pøl ved kanten. Positionér så pøler falder til siderne.',
        ],
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
        ],
        da: [
          '<strong>Nullbeam + Rakfang</strong> — Altid sammen: stor tank-spike + healing-absorb på tanken. Prioritér tank-healing her.',
          '<strong>Gloom soak</strong> — Soak-grupper tager spike-skade. Forbered spot-heals til hver soak-gruppe.',
          '<strong>Midnight Flames</strong> — Uden for barrieren = øjeblikkelig død. Hvis nogen misser den: intet at heale.',
          '<strong>HP-paritet nødsituation</strong> — Hvis en drage halter bagud og DPS hurtigt skal skifte: kort men tung skade-spike på den drage. Pre-heal raiden.',
        ],
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
        ],
        da: [
          '<strong>HP-paritet</strong> — Udpeg en caller. Maks 10% forskel. Skift fokus når calleren råber — meters er irrelevante her.',
          '<strong>Voidorbs (Ezzorak)</strong> — Spawner en orb ved Nullbeam. Permanent pøl ved kanten — skub dem mod siderne. Afbryd Voidbolt fra orbsene.',
          '<strong>Gloom orbs soak</strong> — Soak i grupper af 5. Diminish debuff = 1 min cooldown på soaking. Skiftes med grupper. Soake to gange med Diminish = massiv skade.',
          '<strong>Midnight Flames</strong> — Slip begge drager. Bevæg dig til Radiant Barrier. Deadline er STRENG. Dette er en positioneringstjek, ikke en DPS-tjek.',
          '<strong>Enrage = wipe</strong> — Hvis en drage overlever den anden med mere end 10% HP, enrager den. Alt derefter er en direkte gåtur til kirkegården.',
        ],
      },
    },
    // ── BOSS 5 ────────────────────────────────────────────────
    {
      num: 5,
      name: 'Lightblinded Vanguard',
      desc: {
        nl: 'Council-gevecht: drie paladin-achtige bosses tegelijk. Elke boss heeft unieke dreiging en ze versterken elkaar als ze tegelijk vol energie zijn. Sacred Shield blokkeert interrupts en moet doorbroken worden. Tyr\'s Wrath geeft verhoogde schade + verminderde healing. Judgment gevolgd door zware follow-up hits op de tank.',
        en: 'Council fight: three paladin-type bosses simultaneously. Each has unique pressure and they empower each other when all are at full energy simultaneously. Sacred Shield blocks interrupts and must be broken. Tyr\'s Wrath gives increased damage + reduced healing. Judgment followed by heavy follow-up hits on the tank.',
        da: 'Rådslagskamp: tre paladin-lignende bosser på én gang. Hver har unik trussel og de styrker hinanden når alle er ved fuld energi simultant. Sacred Shield blokerer interrupts og skal brydes. Tyr\'s Wrath giver øget skade + reduceret healing. Judgment efterfulgt af tunge follow-up-hits på tanken.',
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
        ],
        da: [
          '<strong>Judgment</strong> — Kraftfuldt magisk hit på tanken efterfulgt af en serie melee-slag. Stor defensive ved Judgment.',
          '<strong>Bryd Sacred Shield</strong> — Mens skjoldet er aktivt kan bossen ikke afbrydes. Bryd det straks så interrupt-rotationer kan fortsætte.',
          '<strong>Alle tre stackede</strong> — Hold bosser stackede til DPS AoE-cleave. Positionér dem så ingen står bag tanken.',
          '<strong>Overcharge-timing</strong> — Når alle tre er ved fuld energi simultant: massivt overlap af evner. Gem store defensives til dette øjeblik.',
        ],
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
        ],
        da: [
          '<strong>Tyr\'s Wrath</strong> — Øget skade på ramte spillere + healing-reduktion på tanken. Spot-heal tanken. Kan purges på Mythic.',
          '<strong>Holy Conflagration</strong> — Stor AoE burst. Raid-cooldown til dette.',
          '<strong>Aura-management</strong> — Hver boss har en aura-effekt der giver skade til nærliggende spillere. Hold raidets sundhed stabil og forudse overlaps.',
          '<strong>Sacred Shield</strong> — Ingen interrupts mens skjoldet er oppe. DPS bryder det hurtigt? Minimal forstyrrelse. DPS bryder det langsomt? Større healing-pres.',
        ],
      },
      dps: {
        nl: [
          '<strong>Sacred Shield = interrupt-killer</strong> — Breek het schild direct. Prioriteit boven alles. Interrupts zijn nutteloos zolang het schild actief is.',
          '<strong>Target-swaps</strong> — Wijs per cyclus een kill-volgorde toe. Geen enkel target verwaarlozen — ze versterken elkaar bij vol energie.',
          '<strong>Tyr\'s Wrath</strong> — Kan gepurged worden (Shamans/Priests/Hunters). Altijd purgen direct als het verschijnt.',
          '<strong>Lichtblinde krachten</strong> — Elke boss heeft unieke aura\'s die damage doen bij overlap. Houd afstand van overlappende zones.',
          '<strong>Offensieve cooldowns</strong> — Gebruik ze op de boss met het hoogste HP-percentage. Niet verknoeien op een boss die bijna dood is.',
        ],
        en: [
          '<strong>Sacred Shield = interrupt killer</strong> — Break the shield immediately. Priority above everything. Interrupts are useless while the shield is active.',
          '<strong>Target swaps</strong> — Assign a kill order each cycle. Never neglect any target — they empower each other at full energy.',
          '<strong>Tyr\'s Wrath</strong> — Can be purged (Shamans/Priests/Hunters). Always purge immediately when it appears.',
          '<strong>Lightblinded forces</strong> — Each boss has unique auras dealing damage on overlap. Keep distance from overlapping zones.',
          '<strong>Offensive cooldowns</strong> — Use them on the boss with the highest HP percentage. Do not waste them on a boss nearly dead.',
        ],
        da: [
          '<strong>Sacred Shield = interrupt-dræber</strong> — Bryd skjoldet straks. Prioritet over alt. Interrupts er ubrugelige mens skjoldet er aktivt.',
          '<strong>Mål-skift</strong> — Tildel en kill-rækkefølge per cyklus. Forsøm aldrig noget mål — de styrker hinanden ved fuld energi.',
          '<strong>Tyr\'s Wrath</strong> — Kan purges (Shamans/Priests/Hunters). Purge altid straks når det dukker op.',
          '<strong>Lysblindede kræfter</strong> — Hver boss har unikke auraer der giver skade ved overlap. Hold afstand fra overlappende zoner.',
          '<strong>Offensive cooldowns</strong> — Brug dem på bossen med den højeste HP-procent. Spild dem ikke på en boss der næsten er død.',
        ],
      },
    },
    // ── BOSS 6 (FINAL) ────────────────────────────────────────
    {
      num: 6,
      name: 'Crown of the Cosmos',
      desc: {
        nl: 'Eindbaas: Alleria Windrunner — meerfasig gevecht met zwaartekrachtinstortingen, kosmische anomalieën en hoge burn-fasen. Elke fase combineert mechanismen van eerdere bosses. Mythic: sequentiële kick-volgorde (alleen groen gemarkeerde targets zijn interruptbaar) — één gemiste kick cascadeert naar een onvermijdelijke wipe.',
        en: 'Final boss: Alleria Windrunner — multi-stage fight with gravity collapses, cosmic anomalies, and high-intensity burn phases. Each phase combines mechanics from earlier bosses. Mythic: sequential kick order (only green-bar targets are interruptible) — one missed kick cascades into unavoidable wipe.',
        da: 'Slutboss: Alleria Windrunner — flerfase-kamp med tyngdekraftkollapser, kosmiske anomalier og højintensive burn-faser. Hver fase kombinerer mekanikker fra tidligere bosser. Mythic: sekventiel kick-rækkefølge (kun grønt markerede mål kan afbrydes) — én misset kick kaskaderer til uundgåelig wipe.',
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
        ],
        da: [
          '<strong>Void Rend</strong> — Tung tankbuster + shadow DoT. Stor defensive her. Taunt swap så snart DoT\'en begynder at stable.',
          '<strong>Gravity Collapse</strong> — Alle trækkes mod centrum. Tank holder bossen stabilt i midten. Brug bevægelsesevner til at opretholde position.',
          '<strong>Kosmiske anomalier</strong> — Spawner rundt om arenaen. Hold bossen væk fra aktive anomali-zoner — hans skade stiger i nærheden.',
          '<strong>Burn-faser</strong> — Alleria tager øget skade. Gem defensives til perioden inden burn — det er her skaden topper.',
        ],
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
        ],
        da: [
          '<strong>Astral Surge</strong> — Tung raidbredsskade. Gem en stor raidcooldown til hver Astral Surge.',
          '<strong>Gravity Collapse</strong> — Trækker alle mod centrum — positionér dine burst-heals til landingen.',
          '<strong>Kosmiske anomali-skade</strong> — Alle der rører en anomali tager skade. Stabil healing — intet øjeblik af hvile.',
          '<strong>Slutfase</strong> — Gravity Collapse + anomali-spawns SIMULTANT. Dette er det sværeste heal-vindue. Gem din største cooldown til her.',
        ],
      },
      dps: {
        nl: [
          '<strong>Alleria\'s Gaze</strong> — Markeert 3 spelers voor een dodelijke kegel. Wijs soakgroepen toe en spreid ze. Niemand wordt twee keer gesoakt per cyclus.',
          '<strong>Gravity Collapse</strong> — Iedereen naar het centrum getrokken. Gebruik movement-abilities zodra de pull begint. Positie terugwinnen snel.',
          '<strong>Kosmische anomalieën</strong> — Niet aanraken. Aanraken = debuff of schade. Kite ze weg van de boss-positie.',
          '<strong>Burn-fasen</strong> — Alleria neemt verhoogde schade in burn-fasen. ALLE offensieve cooldowns hier. Niets bewaren na de laatste burn.',
          '<strong>Mythic: groene kicks</strong> — Alleen het groen gemarkeerde target is interruptbaar. Strak coördineren. Eén verkeerde kick = wipe. Eén gemiste kick = wipe.',
        ],
        en: [
          '<strong>Alleria\'s Gaze</strong> — Marks 3 players for a lethal cone. Assign soak groups and spread them. Nobody soaks twice per cycle.',
          '<strong>Gravity Collapse</strong> — Everyone pulled toward the center. Use movement abilities as soon as the pull begins. Regain position quickly.',
          '<strong>Cosmic anomalies</strong> — Do not touch. Touching = debuff or damage. Kite them away from the boss position.',
          '<strong>Burn phases</strong> — Alleria takes increased damage in burn phases. USE ALL offensive cooldowns here. Save nothing after the last burn.',
          '<strong>Mythic: green kicks</strong> — Only the green-bar target is interruptible. Tight coordination. One wrong kick = wipe. One missed kick = wipe.',
        ],
        da: [
          '<strong>Alleria\'s Gaze</strong> — Markerer 3 spillere til en dødelig kegle. Tildel soak-grupper og spred dem. Ingen soaker to gange per cyklus.',
          '<strong>Gravity Collapse</strong> — Alle trækkes mod centrum. Brug bevægelsesevner så snart trækket begynder. Genopret position hurtigt.',
          '<strong>Kosmiske anomalier</strong> — Rør dem ikke. Rørsel = debuff eller skade. Kite dem væk fra bossens position.',
          '<strong>Burn-faser</strong> — Alleria tager øget skade i burn-faser. BRUG ALLE offensive cooldowns her. Gem intet efter den sidste burn.',
          '<strong>Mythic: grønne kicks</strong> — Kun det grønt markerede mål kan afbrydes. Stram koordinering. Ét forkert kick = wipe. Ét misset kick = wipe.',
        ],
      },
    },
  ],

  route: {
    norm_note: null,
    pulls: [
      {
        type: 'trash',
        label: { nl: 'Buitenste verdediging (trash)', en: 'Outer defenses (trash)', da: 'Ydre forsvar (trash)' },
        area:  { nl: 'Basis van de Voidspire', en: 'Base of the Voidspire', da: 'Foden af Voidspire' },
        desc:  { nl: 'Void Sentinels en Shadow Cohorts. Interrupt Void Pulse altijd. Dood Shadowguard Stalwarts snel — ze geven een buff aan omliggende vijanden. Niet te veel tegelijk pullen.',
                 en: 'Void Sentinels and Shadow Cohorts. Always interrupt Void Pulse. Kill Shadowguard Stalwarts fast — they buff nearby enemies. Do not overpull.',
                 da: 'Void Sentinels og Shadow Cohorts. Afbryd altid Void Pulse. Dræb Shadowguard Stalwarts hurtigt — de buffer nærliggende fjender. Overtræk ikke.' },
      },
      {
        type: 'boss',
        label: { nl: '1. Imperator Averzian', en: '1. Imperator Averzian', da: '1. Imperator Averzian' },
        area:  { nl: 'Eerste kamer', en: 'First chamber', da: 'Første kammer' },
        desc:  { nl: 'Tic-tac-toe grid. Soak Umbral Collapse. Interrupt Gathering Darkness. Nooit het centervak opofferen.',
                 en: 'Tic-tac-toe grid. Soak Umbral Collapse. Interrupt Gathering Darkness. Never sacrifice the center zone.',
                 da: 'Tic-tac-toe gitter. Soak Umbral Collapse. Afbryd Gathering Darkness. Ofre aldrig centerfeltet.' },
      },
      {
        type: 'boss',
        label: { nl: '2. Vorasius', en: '2. Vorasius', da: '2. Vorasius' },
        area:  { nl: 'Centrale zaal', en: 'Central hall', da: 'Central hal' },
        desc:  { nl: 'Muren breken met Blistercreep-kite voor Void Breath. Smashing Frenzy altijd op de tank laten landen.',
                 en: 'Break walls with Blistercreep kite before Void Breath. Always let Smashing Frenzy land on the tank.',
                 da: 'Bryd vægge med Blistercreep-kite inden Void Breath. Lad altid Smashing Frenzy lande på tanken.' },
      },
      {
        type: 'boss',
        label: { nl: '🔥 3. Fallen-King Salhadaar', en: '🔥 3. Fallen-King Salhadaar', da: '🔥 3. Fallen-King Salhadaar' },
        area:  { nl: 'Riftlabs kamer', en: 'Riftlabs chamber', da: 'Riftlabs-kammer' },
        desc:  { nl: 'Void Orbs: stagger kills (8 sec apart). Cosmic Unraveling = alle cooldowns. Shattering Twilight: tank uit de raidbaan bewegen. 🔥 BLOODLUST hier.',
                 en: 'Void Orbs: stagger kills (8 sec apart). Cosmic Unraveling = all cooldowns. Shattering Twilight: move tank out of raid lane. 🔥 BLOODLUST here.',
                 da: 'Void Orbs: stagger kills (8 sek fra hinanden). Cosmic Unraveling = alle cooldowns. Shattering Twilight: flyt tank ud af raid-bane. 🔥 BLOODLUST her.' },
      },
      {
        type: 'boss',
        label: { nl: '4. Vaelgor & Ezzorak', en: '4. Vaelgor & Ezzorak', da: '4. Vaelgor & Ezzorak' },
        area:  { nl: 'Drakenkamer', en: 'Dragon chamber', da: 'Drakekammer' },
        desc:  { nl: 'HP-pariteit max 10%. Midnight Flames: iedereen in Radiant Barrier. Gloom orbs: groepen van 5, wissel af.',
                 en: 'HP parity max 10%. Midnight Flames: everyone in Radiant Barrier. Gloom orbs: groups of 5, alternate.',
                 da: 'HP-paritet maks 10%. Midnight Flames: alle i Radiant Barrier. Gloom orbs: grupper af 5, skiftes.' },
      },
      {
        type: 'boss',
        label: { nl: '5. Lightblinded Vanguard', en: '5. Lightblinded Vanguard', da: '5. Lightblinded Vanguard' },
        area:  { nl: 'Heiligdomkamer', en: 'Sanctum chamber', da: 'Helligdomskammer' },
        desc:  { nl: 'Raad-gevecht. Sacred Shield = break direct. Target-swaps. Bewaar grote defensives voor Overcharge-overlap.',
                 en: 'Council fight. Sacred Shield = break immediately. Target swaps. Save major defensives for Overcharge overlap.',
                 da: 'Rådslagskamp. Sacred Shield = bryd straks. Mål-skift. Gem store defensives til Overcharge-overlap.' },
      },
      {
        type: 'boss',
        label: { nl: '🔥 6. Crown of the Cosmos — Alleria Windrunner', en: '🔥 6. Crown of the Cosmos — Alleria Windrunner', da: '🔥 6. Crown of the Cosmos — Alleria Windrunner' },
        area:  { nl: 'Top van de Voidspire', en: 'Summit of the Voidspire', da: 'Toppen af Voidspire' },
        desc:  { nl: 'Eindbaas. Meerfasig. Gravity Collapse + anomalieën. Bewaar je grootste raidcooldown voor de finale fase. 🔥 BLOODLUST in burn-fase.',
                 en: 'Final boss. Multi-stage. Gravity Collapse + anomalies. Save your biggest raid cooldown for the final phase. 🔥 BLOODLUST in burn phase.',
                 da: 'Slutboss. Flerfaset. Gravity Collapse + anomalier. Gem din største raidcooldown til slutfasen. 🔥 BLOODLUST i burn-fase.' },
      },
    ],
  },
});

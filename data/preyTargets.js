// Prey Targets — WoW: Midnight Season 1
// 8 unique targets. Technical terms (spell names) kept in English.
// Zone order: Eversong Woods → Zul'Aman → Voidstorm (hunting route)

const PREY_TARGETS = [
  {
    id: 'mordril_shadowfell',
    name: { en: 'Mordril Shadowfell', nl: 'Mordril Shadowfell', da: 'Mordril Shadowfell' },
    zone: { en: 'Eversong Woods', nl: 'Eversong Woods', da: 'Eversong Woods' },
    zoneOrder: 1,
    coords: { en: '/way #2395 45 50 Eversong Woods', nl: '/way #2395 45 50 Eversong Woods', da: '/way #2395 45 50 Eversong Woods' },
    summary: {
      en: ['Interrupt Void and Shadow casts.', 'Stay out of dark purple pools on the ground.', 'Use defensives when he channels big spells.'],
      nl: ['Onderbreek Void- en Shadow-casts.', 'Blijf uit paarse plassen op de grond.', 'Gebruik defensives als hij grote spells channeled.'],
      da: ['Afbryd Void- og Shadow-casts.', 'Bliv ude af mørke lilla pytter.', 'Brug defensives når han channeler store spells.']
    },
    abilities: {
      en: 'Void magic, Shadow damage. Danger to himself and others. Interrupt Void casts.',
      nl: 'Void-magie, Schaduwschade. Gevaarlijk voor zichzelf en anderen. Onderbreek Void-casts.',
      da: 'Void-magi, Shadow-skade. Farlig for sig selv og andre. Afbryd Void-casts.'
    },
    fullGuide: {
      en: '<h4>Before the fight</h4><p>Fill your Anguish bar by doing World Quests and killing rares in Eversong Woods. Use disarmed traps during ambushes.</p><h4>Boss mechanics</h4><p><strong>Void Bolt:</strong> Interrupt. <strong>Shadow Pool:</strong> Move out of purple zones. <strong>Void Surge:</strong> Big channel — use defensive or interrupt.</p>',
      nl: '<h4>Voor het gevecht</h4><p>Vul je Anguish-balk met World Quests en rares. Gebruik ontmantelde vallen bij hinderlagen.</p><h4>Boss-mechanieken</h4><p><strong>Void Bolt:</strong> Onderbreek. <strong>Shadow Pool:</strong> Stap uit paarse zones. <strong>Void Surge:</strong> Grote channel — defensive of interrupt.</p>',
      da: '<h4>Før kampen</h4><p>Fyld din Anguish-bjælke med World Quests og rares. Brug deaktiverede fælder under baghold.</p><h4>Boss-mekanikker</h4><p><strong>Void Bolt:</strong> Afbryd. <strong>Shadow Pool:</strong> Gå ud af lilla zoner. <strong>Void Surge:</strong> Stor channel — defensive eller afbryd.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 }
  },
  {
    id: 'deliah_gloomsong',
    name: { en: 'Deliah Gloomsong', nl: 'Deliah Gloomsong', da: 'Deliah Gloomsong' },
    zone: { en: 'Eversong Woods', nl: 'Eversong Woods', da: 'Eversong Woods' },
    zoneOrder: 1,
    coords: { en: '/way #2395 55 62 Eversong Woods', nl: '/way #2395 55 62 Eversong Woods', da: '/way #2395 55 62 Eversong Woods' },
    summary: {
      en: ['Dispel Shadow DoT from yourself.', 'Interrupt her channeled spells.', 'Avoid the shadow zones she spawns.'],
      nl: ['Dispel Shadow DoT van jezelf.', 'Onderbreek haar channeled spells.', 'Ontwijk de shadow-zones die ze spawnen.'],
      da: ['Dispel Shadow DoT fra dig selv.', 'Afbryd hendes channeled spells.', 'Undgå shadow-zonerne hun spawner.']
    },
    abilities: {
      en: 'Former prodigy turned Void wielder. Shadow DoT and channeled spells. Interrupt and dispel.',
      nl: 'Ex-prodigy Void-gebruiker. Shadow DoT en channeled spells. Onderbreek en dispel.',
      da: 'Tidligere prodigy Void-bruger. Shadow DoT og channeled spells. Afbryd og dispel.'
    },
    fullGuide: {
      en: '<h4>Before the fight</h4><p>Build Anguish in Eversong. Follow the blood mist after ambushes for bonus progress.</p><h4>Boss mechanics</h4><p><strong>Shadow Mend:</strong> Interrupt — she heals herself. <strong>Gloomfire:</strong> DoT — dispel if possible. <strong>Void Rift:</strong> Dodge the expanding zone.</p>',
      nl: '<h4>Voor het gevecht</h4><p>Bouw Anguish op in Eversong. Volg de bloedmist na hinderlagen voor bonus.</p><h4>Boss-mechanieken</h4><p><strong>Shadow Mend:</strong> Onderbreek — ze healt zichzelf. <strong>Gloomfire:</strong> DoT — dispel. <strong>Void Rift:</strong> Ontwijk de uitbreidende zone.</p>',
      da: '<h4>Før kampen</h4><p>Opbyg Anguish i Eversong. Følg blodtågen efter baghold for bonus.</p><h4>Boss-mekanikker</h4><p><strong>Shadow Mend:</strong> Afbryd — hun heler sig selv. <strong>Gloomfire:</strong> DoT — dispel. <strong>Void Rift:</strong> Undgå den udvidende zone.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 }
  },
  {
    id: 'talon_of_janalaii',
    name: { en: "The Talon of Jan'alaii", nl: "De Klauw van Jan'alaii", da: "Jan'alaiis Klo" },
    zone: { en: "Zul'Aman", nl: "Zul'Aman", da: "Zul'Aman" },
    zoneOrder: 2,
    coords: { en: "/way #2437 50 60 Zul'Aman", nl: "/way #2437 50 60 Zul'Aman", da: "/way #2437 50 60 Zul'Aman" },
    summary: {
      en: ['Interrupt Hex or you turn into a frog.', 'Destroy totems before they hurt you.', 'Move out of lightning circles.'],
      nl: ['Onderbreek Hex of je verandert in een kikker.', 'Vernietig totems voor ze pijn doen.', 'Stap uit bliksemcirkels.'],
      da: ['Afbryd Hex eller du bliver til en frø.', 'Ødelæg totems før de skader dig.', 'Gå ud af lyn-cirkler.']
    },
    abilities: {
      en: 'Amani shaman. Lightning, Hex, totems. Interrupt Hex, destroy totems, avoid ground AoE.',
      nl: 'Amani-sjamaan. Bliksem, Hex, totems. Onderbreek Hex, vernietig totems, ontwijk grond-AoE.',
      da: 'Amani-shaman. Lynge, Hex, totems. Afbryd Hex, ødelæg totems, undgå gulv-AoE.'
    },
    fullGuide: {
      en: '<h4>Before the fight</h4><p>Hunt in Zul\'Aman. Amani trolls drop good Anguish. Use traps during ambushes.</p><h4>Boss mechanics</h4><p><strong>Hex:</strong> Interrupt or you are useless for 8 seconds. <strong>Lightning Totem:</strong> Kill it fast. <strong>Chain Lightning:</strong> Dodge the swirls.</p>',
      nl: '<h4>Voor het gevecht</h4><p>Jaag in Zul\'Aman. Amani trollen geven goede Anguish. Gebruik vallen bij hinderlagen.</p><h4>Boss-mechanieken</h4><p><strong>Hex:</strong> Onderbreek of je bent 8 sec nutteloos. <strong>Lightning Totem:</strong> Dood snel. <strong>Chain Lightning:</strong> Ontwijk de cirkels.</p>',
      da: '<h4>Før kampen</h4><p>Jagt i Zul\'Aman. Amani-trolde giver god Anguish. Brug fælder under baghold.</p><h4>Boss-mekanikker</h4><p><strong>Hex:</strong> Afbryd eller du er nytteløs i 8 sek. <strong>Lightning Totem:</strong> Dræb hurtigt. <strong>Chain Lightning:</strong> Undgå hvirvlerne.</p>'
    },
    loot: { normal: 224, hard: 237, nightmare: 250 }
  },
  {
    id: 'wing_of_akilzon',
    name: { en: "The Wing of Akil'zon", nl: "De Vleugel van Akil'zon", da: "Akil'zons Vinge" },
    zone: { en: "Zul'Aman", nl: "Zul'Aman", da: "Zul'Aman" },
    zoneOrder: 2,
    coords: { en: "/way #2437 55 75 Zul'Aman", nl: "/way #2437 55 75 Zul'Aman", da: "/way #2437 55 75 Zul'Aman" },
    summary: {
      en: ['Dodge storm swirls on the ground.', 'Interrupt Storm Bolt.', 'Dispel curse if you get one.'],
      nl: ['Ontwijk storm-draaiingen.', 'Onderbreek Storm Bolt.', 'Dispel vloek als je er een krijgt.'],
      da: ['Undgå storm-hvirvler.', 'Afbryd Storm Bolt.', 'Dispel forbandelse hvis du får én.']
    },
    abilities: {
      en: 'Amani shaman. Storm and wind abilities. Dodge swirls, interrupt Storm Bolt, dispel curses.',
      nl: 'Amani-sjamaan. Storm en wind-abilities. Ontwijk draaiingen, onderbreek Storm Bolt, dispel vloeken.',
      da: 'Amani-shaman. Storm og vind-evner. Undgå hvirvler, afbryd Storm Bolt, dispel forbandelser.'
    },
    fullGuide: {
      en: '<h4>Before the fight</h4><p>Zul\'Aman rares and World Quests fill your bar. Eagle spirits may aid you.</p><h4>Boss mechanics</h4><p><strong>Storm Bolt:</strong> Interrupt. <strong>Cyclone:</strong> Dodge the swirl. <strong>Windfury Curse:</strong> Dispel to reduce damage.</p>',
      nl: '<h4>Voor het gevecht</h4><p>Zul\'Aman rares en World Quests vullen je balk. Eagle spirits helpen mogelijk.</p><h4>Boss-mechanieken</h4><p><strong>Storm Bolt:</strong> Onderbreek. <strong>Cyclone:</strong> Ontwijk de draaiing. <strong>Windfury Curse:</strong> Dispel voor minder schade.</p>',
      da: '<h4>Før kampen</h4><p>Zul\'Aman rares og World Quests fylder bjælken. Ørn-ånder kan hjælpe.</p><h4>Boss-mekanikker</h4><p><strong>Storm Bolt:</strong> Afbryd. <strong>Cyclone:</strong> Undgå hvirvlen. <strong>Windfury Curse:</strong> Dispel for mindre skade.</p>'
    },
    loot: { normal: 224, hard: 237, nightmare: 250 }
  },
  {
    id: 'praetor_singularis',
    name: { en: 'Praetor Singularis', nl: 'Praetor Singularis', da: 'Praetor Singularis' },
    zone: { en: 'Voidstorm', nl: 'Voidstorm', da: 'Voidstorm' },
    zoneOrder: 3,
    coords: { en: '/way #2405 40 55 Voidstorm', nl: '/way #2405 40 55 Voidstorm', da: '/way #2405 40 55 Voidstorm' },
    summary: {
      en: ['Dodge purple ground effects.', 'Interrupt his big casts.', 'Kill any adds he summons.'],
      nl: ['Ontwijk paarse grond-effecten.', 'Onderbreek zijn grote casts.', 'Dood adds die hij spawnt.'],
      da: ['Undgå lilla gulveffekter.', 'Afbryd hans store casts.', 'Dræb adds han summoner.']
    },
    abilities: {
      en: 'Void schemer. Arcane and Shadow combos. Dodge ground effects, interrupt key casts.',
      nl: 'Void-strategist. Arcane en Shadow-combo\'s. Ontwijk grond-effecten, onderbreek key casts.',
      da: 'Void-strateg. Arcane og Shadow-komboer. Undgå gulveffekter, afbryd vigtige casts.'
    },
    fullGuide: {
      en: '<h4>Before the fight</h4><p>Voidstorm is tough. Coalesced Anguish mobs give great progress. Save traps for ambushes.</p><h4>Boss mechanics</h4><p><strong>Void Eruption:</strong> Sidestep. <strong>Arcane Cascade:</strong> Interrupt. <strong>Void Minion:</strong> Kill add first.</p>',
      nl: '<h4>Voor het gevecht</h4><p>Voidstorm is zwaar. Coalesced Anguish mobs geven goede voortgang. Bewaar vallen voor hinderlagen.</p><h4>Boss-mechanieken</h4><p><strong>Void Eruption:</strong> Stap opzij. <strong>Arcane Cascade:</strong> Onderbreek. <strong>Void Minion:</strong> Dood add eerst.</p>',
      da: '<h4>Før kampen</h4><p>Voidstorm er hård. Coalesced Anguish-mobs giver god fremskridt. Gem fælder til baghold.</p><h4>Boss-mekanikker</h4><p><strong>Void Eruption:</strong> Gå til siden. <strong>Arcane Cascade:</strong> Afbryd. <strong>Void Minion:</strong> Dræb add først.</p>'
    },
    loot: { normal: 227, hard: 240, nightmare: 253 }
  },
  {
    id: 'consul_nebulor',
    name: { en: 'Consul Nebulor', nl: 'Consul Nebulor', da: 'Consul Nebulor' },
    zone: { en: 'Voidstorm', nl: 'Voidstorm', da: 'Voidstorm' },
    zoneOrder: 3,
    coords: { en: '/way #2405 48 62 Voidstorm', nl: '/way #2405 48 62 Voidstorm', da: '/way #2405 48 62 Voidstorm' },
    summary: {
      en: ['Kill his summoned adds quickly.', 'Avoid the frontal cone attack.', 'Move out of Void zones.'],
      nl: ['Dood zijn summoned adds snel.', 'Vermijd de frontale kegel aanval.', 'Stap uit Void-zones.'],
      da: ['Dræb hans summonede adds hurtigt.', 'Undgå frontal kegle-angreb.', 'Gå ud af Void-zoner.']
    },
    abilities: {
      en: 'Void consul. Summons and Void zones. Kill adds quickly, avoid frontal cone.',
      nl: 'Void-consul. Summons en Void-zones. Dood adds snel, vermijd frontale kegel.',
      da: 'Void-konsul. Summons og Void-zoner. Dræb adds hurtigt, undgå frontal kegle.'
    },
    fullGuide: {
      en: '<h4>Before the fight</h4><p>Voidstorm World Quests and rares. Stay alert — ambushes hit hard here.</p><h4>Boss mechanics</h4><p><strong>Dark Summoning:</strong> Kill Void Emissary before it empowers him. <strong>Void Cone:</strong> Don\'t stand in front. <strong>Discordant Hymn:</strong> Sidestep zones.</p>',
      nl: '<h4>Voor het gevecht</h4><p>Voidstorm World Quests en rares. Let op — hinderlagen slaan hard hier.</p><h4>Boss-mechanieken</h4><p><strong>Dark Summoning:</strong> Dood Void Emissary voor hij empowered. <strong>Void Cone:</strong> Niet ervoor staan. <strong>Discordant Hymn:</strong> Stap opzij van zones.</p>',
      da: '<h4>Før kampen</h4><p>Voidstorm World Quests og rares. Vær opmærksom — baghold rammer hårdt her.</p><h4>Boss-mekanikker</h4><p><strong>Dark Summoning:</strong> Dræb Void Emissary før den empowerer ham. <strong>Void Cone:</strong> Stå ikke foran. <strong>Discordant Hymn:</strong> Gå ud af zoner.</p>'
    },
    loot: { normal: 227, hard: 240, nightmare: 253 }
  },
  {
    id: 'executor_kaenius',
    name: { en: 'Executor Kaenius', nl: 'Executor Kaenius', da: 'Executor Kaenius' },
    zone: { en: 'Voidstorm', nl: 'Voidstorm', da: 'Voidstorm' },
    zoneOrder: 3,
    coords: { en: '/way #2405 52 48 Voidstorm', nl: '/way #2405 52 48 Voidstorm', da: '/way #2405 52 48 Voidstorm' },
    summary: {
      en: ['Move out of Void pools fast.', 'Use defensive when he gets low.', 'Interrupt Void Bolt.'],
      nl: ['Stap snel uit Void-pools.', 'Gebruik defensive als hij laag is.', 'Onderbreek Void Bolt.'],
      da: ['Gå hurtigt ud af Void-pytter.', 'Brug defensive når han er lav.', 'Afbryd Void Bolt.']
    },
    abilities: {
      en: 'Void executor. Heavy Shadow burst, Void pools. Move out of bad, use defensives on execute.',
      nl: 'Void-executor. Zware Shadow burst, Void-pools. Stap uit de bad, defensives op execute.',
      da: 'Void-executor. Tung Shadow burst, Void-pytter. Gå ud af bad, defensives på execute.'
    },
    fullGuide: {
      en: '<h4>Before the fight</h4><p>Final Voidstorm target. Torment stacks hurt — finish the hunt quickly.</p><h4>Boss mechanics</h4><p><strong>Void Bolt:</strong> Interrupt. <strong>Crushing Rift:</strong> Dodge AOE. <strong>Execute Phase:</strong> He hits harder under 30% — pop defensive.</p>',
      nl: '<h4>Voor het gevecht</h4><p>Laatste Voidstorm-doel. Torment stacks doen pijn — maak de jacht snel af.</p><h4>Boss-mechanieken</h4><p><strong>Void Bolt:</strong> Onderbreek. <strong>Crushing Rift:</strong> Ontwijk AOE. <strong>Execute-fase:</strong> Hij slaat harder onder 30% — defensive.</p>',
      da: '<h4>Før kampen</h4><p>Sidste Voidstorm-mål. Torment-stacks gør ondt — færdiggør jagten hurtigt.</p><h4>Boss-mekanikker</h4><p><strong>Void Bolt:</strong> Afbryd. <strong>Crushing Rift:</strong> Undgå AOE. <strong>Execute-fase:</strong> Han rammer hårdere under 30% — defensive.</p>'
    },
    loot: { normal: 230, hard: 243, nightmare: 256 }
  },
  {
    id: 'imperator_enigmalia',
    name: { en: 'Imperator Enigmalia', nl: 'Imperator Enigmalia', da: 'Imperator Enigmalia' },
    zone: { en: 'Voidstorm', nl: 'Voidstorm', da: 'Voidstorm' },
    zoneOrder: 3,
    coords: { en: '/way #2405 45 70 Voidstorm', nl: '/way #2405 45 70 Voidstorm', da: '/way #2405 45 70 Voidstorm' },
    summary: {
      en: ['Spread out from Void explosions.', 'Interrupt Void Bolt every time.', 'Avoid stun zones.'],
      nl: ['Spreid voor Void-explosies.', 'Onderbreek Void Bolt elke keer.', 'Ontwijk stun-zones.'],
      da: ['Spred ud fra Void-eksplosioner.', 'Afbryd Void Bolt hver gang.', 'Undgå stun-zoner.']
    },
    abilities: {
      en: 'Void imperator. AOE Void damage, stuns. Spread for mechanics, interrupt Void Bolt.',
      nl: 'Void-imperator. AOE Void-schade, stuns. Spreid voor mechanics, onderbreek Void Bolt.',
      da: 'Void-imperator. AOE Void-skade, stuns. Spred for mekanikker, afbryd Void Bolt.'
    },
    fullGuide: {
      en: '<h4>Before the fight</h4><p>Toughest Voidstorm target. Save all cooldowns for the final duel.</p><h4>Boss mechanics</h4><p><strong>Void Bolt:</strong> Always interrupt. <strong>Umbral Rage:</strong> AOE + stun — move out. <strong>Dark Communion:</strong> Kill add to get buff instead of her.</p>',
      nl: '<h4>Voor het gevecht</h4><p>Zwaarste Voidstorm-doel. Bewaar cooldowns voor het eindduel.</p><h4>Boss-mechanieken</h4><p><strong>Void Bolt:</strong> Altijd onderbreek. <strong>Umbral Rage:</strong> AOE + stun — stap uit. <strong>Dark Communion:</strong> Dood add voor buff.</p>',
      da: '<h4>Før kampen</h4><p>Sværeste Voidstorm-mål. Gem cooldowns til sidste duel.</p><h4>Boss-mekanikker</h4><p><strong>Void Bolt:</strong> Altid afbryd. <strong>Umbral Rage:</strong> AOE + stun — gå ud. <strong>Dark Communion:</strong> Dræb add for buff.</p>'
    },
    loot: { normal: 230, hard: 243, nightmare: 256 }
  }
];

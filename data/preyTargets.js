// Prey Targets — WoW: Midnight Season 1 (16 contracts in pool; 12 active per EU day)
// difficulty_rating 1–5 = solo threat (Danger Meter). Contract loot: Icy Veins Prey table — Normal 220 / Hard 233 / Nightmare 246 (PREY_ILVL). World boss / apex Mythic 289 (not contracts).
// NPC names verified vs Wowhead Prey quests & achievements + Icy Veins Prey Rewards (housing bust themes). Many achievements are “defeat A or B”; we show one name per row and note the alternate in location/summary where relevant.
// Achievement pairs (Wowhead): Sadistic Shamans — The Talon of Jan'alaii / The Wing of Akil'zon | Ethereal Assassins — Phaseblade Talasha / Nexus-Edge Hadim | Fallen Farstriders — Ranger Swiftglade / Lieutenant Blazewing | Mad Magisters — Magister Sunbreaker / Magistrix Emberlash | Breaking the Blade — Grothoz, the Burning Shadow / Dengzag, the Darkened Blaze | Insane Inventors — Senior Tinker Ozwold / L-N-0R the Recycler | etc.
// coords: TomTom /way lines. uiMapID: Silvermoon #2393, Eversong #2395, Zul'Aman #2437, Harandar #2413, Voidstorm #2405, Quel'Danas #16215 (zie data/delves.js). Masters' Perch: zonenaam + in-game Prey-pin als geen uiMapID in bron. Atal'Aman / Ghostlands: waar geen bevestigde uiMapID in bron staat, zonenaam of note — check in-game bij twijfel.
// Unlock NPC (authoritative in guides): Astalor ~ /way #2393 55.0 63.4 — see data/preyData.js (Wowhead/Icy Veins style sources when available).
// rewardType: optional { en, nl } line for bounty cards (e.g. weapon / trinket); else UI falls back to gear + ilvl band.
// crafting_drops: optional drops shown in Prey detail modal (profession + used_for tooltips).
// Note: “Dark-Iron Saboteur” contract is represented on Praetor Singularis (no separate NPC id in this dataset).

const PREY_TARGETS = [
  {
    id: 'mordril_shadowfell',
    crafting_drops: [],
    name: { en: 'Mordril Shadowfell', nl: 'Mordril Shadowfell' },
    zone: { en: 'Eversong Woods', nl: 'Eversong Woods' },
    location: { en: 'North Eversong — Void Scar trail', nl: 'North Eversong — Void Scar trail' },
    zoneOrder: 1,
    difficulty_rating: 2,
    coords: { en: '/way #2395 45 50', nl: '/way #2395 45 50' },
    pro_tip: {
      tank: { en: 'Stack mitigation before named Void bursts; LoS only if it does not drop melee uptime.', nl: 'Stack mitigation before named Void bursts; LoS only if it does not drop melee uptime.' },
      heal: { en: 'Pre-HoT before ambush; dispel magic debuffs before the next kick window.', nl: 'Pre-HoT before ambush; dispel magic debuffs before the next kick window.' },
      dps: { en: 'Kick Void Bolt on cooldown rotation; save burst for post-interrupt vulnerability.', nl: 'Kick Void Bolt on cooldown rotation; save burst for post-interrupt vulnerability.' }
    },
    summary: {
      en: ['Interrupt Void and Shadow casts.', 'Stay out of dark purple pools on the ground.', 'Use defensives when he channels big spells.'],
      nl: ['Interrupt Void and Shadow casts.', 'Stay out of dark purple pools on the ground.', 'Use defensives when he channels big spells.']
    },
    abilities: {
      en: 'Void magic, Shadow damage. Interrupt Void casts.',
      nl: 'Void magic, Shadow damage. Interrupt Void-casts.'
    },
    fullGuide: {
      en: '<h4>Before the fight</h4><p>Fill your Anguish bar by doing World Quests and killing rares in Eversong Woods.</p><h4>Boss mechanics</h4><p><strong>Void Bolt:</strong> Interrupt. <strong>Shadow Pool:</strong> Move out. <strong>Void Surge:</strong> Defensive or interrupt.</p>',
      nl: '<h4>Before the fight</h4><p>Fill Anguish met World Quests en rares in Eversong Woods.</p><h4>Boss mechanics</h4><p><strong>Void Bolt:</strong> Interrupt. <strong>Shadow Pool:</strong> Move out. <strong>Void Surge:</strong> Defensive of interrupt.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '⚔️ Weapon & gear', nl: '⚔️ Weapon & gear' }
  },
  {
    id: 'neydra_the_starving',
    crafting_drops: [],
    name: { en: 'Neydra the Starving', nl: 'Neydra the Starving' },
    zone: { en: 'Eversong Woods / Ghostlands', nl: 'Eversong Woods / Ghostlands' },
    location: { en: 'Eversong–Ghostlands border — Prey: No Rest for the Wretched (alt: Lost Theldrin)', nl: 'Eversong–Ghostlands border — Prey: No Rest for the Wretched (alt: Lost Theldrin)' },
    zoneOrder: 1,
    difficulty_rating: 3,
    coords: { en: '/way #2393 52.4 78.2 Eversong–Ghostlands border', nl: '/way #2393 52.4 78.2 Eversong–Ghostlands border' },
    pro_tip: {
      tank: { en: 'Face Neydra away from the group; save a big cooldown for her enrage-style hunger frenzy.', nl: 'Face Neydra away from the group; save a big cooldown for her enrage-style hunger frenzy.' },
      heal: { en: 'Heavy bleed or DoT windows — dispel fast and pump after each leap.', nl: 'Heavy bleed or DoT windows — dispel fast and pump after each leap.' },
      dps: { en: 'Kick soul drain or channel casts; kill hungering whelps before they reach her.', nl: 'Kick soul drain or channel casts; kill hungering whelps before they reach her.' }
    },
    summary: {
      en: ['Interrupt drain channels.', 'Kill small adds before they empower the boss.', 'Dodge leap and frontal breath.'],
      nl: ['Interrupt drain channels.', 'Kill small adds before they empower the boss.', 'Dodge leap and frontal breath.']
    },
    abilities: {
      en: 'Hunger frenzy, leaps, add waves.',
      nl: 'Hunger frenzy, leaps, add waves.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Hunger Frenzy:</strong> Defensive or CC. <strong>Leap:</strong> Move from landing circle. <strong>Whelps:</strong> Priority kill.</p>',
      nl: '<h4>Boss mechanics</h4><p><strong>Hunger Frenzy:</strong> Defensive of CC. <strong>Leap:</strong> Move from landing circle. <strong>Whelps:</strong> Priority kill.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '🎁 Gear', nl: '🎁 Gear' }
  },
  {
    id: 'deliah_gloomsong',
    crafting_drops: [],
    name: { en: 'Deliah Gloomsong', nl: 'Deliah Gloomsong' },
    zone: { en: 'Eversong Woods', nl: 'Eversong Woods' },
    location: { en: 'East Eversong — Gloomsong rise', nl: 'East Eversong — Gloomsong rise' },
    zoneOrder: 1,
    difficulty_rating: 2,
    coords: { en: '/way #2395 55 62', nl: '/way #2395 55 62' },
    pro_tip: {
      tank: { en: 'Track her self-heal casts — assign your own interrupt if no DPS is nearby.', nl: 'Track her self-heal casts — assign your own interrupt if no DPS is nearby.' },
      heal: { en: 'CC fear/charm if present; keep yourself topped before heavy DoT ramps.', nl: 'CC fear/charm if present; keep yourself topped before heavy DoT ramps.' },
      dps: { en: 'Purge Void Shields quickly; burst right after shield break for max value.', nl: 'Purge Void Shields snel; burst direct na shield break.' }
    },
    summary: {
      en: ['Dispel Shadow DoT from yourself.', 'Interrupt her channeled spells.', 'Avoid the shadow zones she spawns.'],
      nl: ['Dispel Shadow DoT from yourself.', 'Interrupt channeled spells.', 'Avoid shadow zones.']
    },
    abilities: {
      en: 'Shadow DoT and channeled spells. Interrupt and dispel.',
      nl: 'Shadow DoT and channeled spells. Interrupt and dispel.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Shadow Mend:</strong> Interrupt. <strong>Gloomfire:</strong> Dispel. <strong>Void Rift:</strong> Dodge.</p>',
      nl: '<h4>Boss mechanics</h4><p><strong>Shadow Mend:</strong> Interrupt. <strong>Gloomfire:</strong> Dispel. <strong>Void Rift:</strong> Dodge.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '💍 Trinket & accessories', nl: '💍 Trinket & accessories' }
  },
  {
    id: 'talon_of_janalaii',
    crafting_drops: [],
    name: { en: "The Talon of Jan'alaii", nl: "The Talon of Jan'alaii" },
    zone: { en: "Zul'Aman", nl: "Zul'Aman" },
    location: { en: "Zul'Aman — Prey: Sadistic Shamans (alt: The Wing of Akil'zon)", nl: "Zul'Aman — Prey: Sadistic Shamans (alt: The Wing of Akil'zon)" },
    zoneOrder: 2,
    difficulty_rating: 3,
    coords: { en: "/way #2437 50 60", nl: "/way #2437 50 60" },
    pro_tip: {
      tank: { en: 'Hard Hits: use active mitigation for heavy melee combos after Hex fails.', nl: 'Hard Hits: use active mitigation for heavy melee combos after Hex fails.' },
      heal: { en: 'Stun or root adds during Hex windows; don\'t stand in lightning for self-preservation.', nl: 'Stun or root adds during Hex windows; don\'t stand in lightning.' },
      dps: { en: 'Break shields on Lightning Totem first; time burst for post-Hex burst windows.', nl: 'Break shields on Lightning Totem first; time burst for post-Hex burst windows.' }
    },
    summary: {
      en: ['Interrupt Hex or you turn into a frog.', 'Destroy totems before they hurt you.', 'Move out of lightning circles.'],
      nl: ['Interrupt Hex.', 'Destroy totems.', 'Move out of lightning circles.']
    },
    abilities: {
      en: 'Hex, totems, lightning AoE.',
      nl: 'Hex, totems, lightning AoE.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Hex:</strong> Interrupt. <strong>Lightning Totem:</strong> Kill fast. <strong>Chain Lightning:</strong> Dodge.</p>',
      nl: '<h4>Boss mechanics</h4><p><strong>Hex:</strong> Interrupt. <strong>Lightning Totem:</strong> Kill fast. <strong>Chain Lightning:</strong> Dodge.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '⚔️ Weapon', nl: '⚔️ Weapon' }
  },
  {
    id: 'wing_of_akilzon',
    crafting_drops: [],
    name: { en: "The Wing of Akil'zon", nl: "The Wing of Akil'zon" },
    zone: { en: "Zul'Aman", nl: "Zul'Aman" },
    location: { en: "Zul'Aman — Prey: Sadistic Shamans (alt: The Talon of Jan'alaii)", nl: "Zul'Aman — Prey: Sadistic Shamans (alt: The Talon of Jan'alaii)" },
    zoneOrder: 2,
    difficulty_rating: 3,
    coords: { en: '/way #2437 55 75', nl: '/way #2437 55 75' },
    pro_tip: {
      tank: { en: 'Face boss away during Storm Bolt windows; save DR for wind-burst combos.', nl: 'Face boss away during Storm Bolt windows; save DR for wind-burst combos.' },
      heal: { en: 'Curse dispel on cooldown priority; use knockbacks to create space from melee adds.', nl: 'Curse dispel on cooldown priority; use knockbacks for space from melee adds.' },
      dps: { en: 'Kick Storm Bolt; line up CDs when Cyclone ends.', nl: 'Kick Storm Bolt; line up CDs when Cyclone ends.' }
    },
    summary: {
      en: ['Dodge storm swirls on the ground.', 'Interrupt Storm Bolt.', 'Dispel curse if you get one.'],
      nl: ['Dodge storm swirls.', 'Interrupt Storm Bolt.', 'Dispel curse.']
    },
    abilities: {
      en: 'Storm and wind. Dodge, interrupt, dispel.',
      nl: 'Storm en wind. Dodge, interrupt, dispel.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Storm Bolt:</strong> Interrupt. <strong>Cyclone:</strong> Dodge. <strong>Windfury Curse:</strong> Dispel.</p>',
      nl: '<h4>Boss mechanics</h4><p><strong>Storm Bolt:</strong> Interrupt. <strong>Cyclone:</strong> Dodge. <strong>Windfury Curse:</strong> Dispel.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '🪶 Off-hand & gear', nl: '🪶 Off-hand & gear' }
  },
  {
    id: 'praetor_singularis',
    name: { en: 'Praetor Singularis', nl: 'Praetor Singularis' },
    zone: { en: 'Voidstorm', nl: 'Voidstorm' },
    location: { en: 'Voidstorm — Singular Spire approach', nl: 'Voidstorm — Singular Spire approach' },
    zoneOrder: 3,
    difficulty_rating: 4,
    coords: { en: '/way #2405 40 55', nl: '/way #2405 40 55' },
    pro_tip: {
      tank: { en: 'Pick up Void Minions instantly; big mitigation for Arcane Cascade overlaps.', nl: 'Pick up Void Minions instantly; big mitigation for Arcane Cascade overlaps.' },
      heal: { en: 'CC stray adds while kiting; barrier during double-cast windows.', nl: 'CC stray adds while kiting; barrier during double-cast windows.' },
      dps: { en: 'Void Shields: purge/enrage dispel if applicable; burst the add before boss empowers.', nl: 'Void Shields: purge if applicable; burst the add before boss empowers.' }
    },
    summary: {
      en: ['Dodge purple ground effects.', 'Interrupt his big casts.', 'Kill any adds he summons.'],
      nl: ['Dodge purple ground effects.', 'Interrupt grote casts.', 'Kill adds.']
    },
    abilities: {
      en: 'Arcane + Void. Dodge, interrupt, kill adds.',
      nl: 'Arcane + Void. Dodge, interrupt, kill adds.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Void Eruption:</strong> Sidestep. <strong>Arcane Cascade:</strong> Interrupt. <strong>Void Minion:</strong> Kill first.</p>',
      nl: '<h4>Boss mechanics</h4><p><strong>Void Eruption:</strong> Sidestep. <strong>Arcane Cascade:</strong> Interrupt. <strong>Void Minion:</strong> Kill first.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '🛠️ Crafting mats + gear', nl: '🛠️ Crafting mats + gear' },
    crafting_drops: [
      {
        label: { en: '3x Shadowed Iron Bolts', nl: '3x Shadowed Iron Bolts' },
        profession: { en: 'Engineering / Blacksmithing', nl: 'Engineering / Blacksmithing' },
        used_for: { en: 'Engineering and Blacksmithing crafts', nl: 'Engineering and Blacksmithing crafts' }
      }
    ]
  },
  {
    id: 'consul_nebulor',
    crafting_drops: [],
    name: { en: 'Consul Nebulor', nl: 'Consul Nebulor' },
    zone: { en: 'Voidstorm', nl: 'Voidstorm' },
    location: { en: 'Voidstorm — Nebulor terrace', nl: 'Voidstorm — Nebulor terrace' },
    zoneOrder: 3,
    difficulty_rating: 4,
    coords: { en: '/way #2405 48 62', nl: '/way #2405 48 62' },
    pro_tip: {
      tank: { en: 'Sidestep frontal Void Cone; taunt swap if Emissary fixates healer.', nl: 'Sidestep frontal Void Cone; taunt swap if Emissary fixates healer.' },
      heal: { en: 'Root/slow Emissary; self-heal aggressively during Discordant Hymn.', nl: 'Root/slow Emissary; self-heal aggressively during Discordant Hymn.' },
      dps: { en: 'Switch to Emissary with full burst; break any absorb shield before hymn ramps.', nl: 'Switch to Emissary with full burst; break any absorb shield before hymn ramps.' }
    },
    summary: {
      en: ['Kill his summoned adds quickly.', 'Avoid the frontal cone attack.', 'Move out of Void zones.'],
      nl: ['Kill summoned adds quickly.', 'Avoid the frontal cone.', 'Move out of Void zones.']
    },
    abilities: {
      en: 'Summons and Void zones.',
      nl: 'Summons en Void zones.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Dark Summoning:</strong> Kill Emissary. <strong>Void Cone:</strong> Not in front. <strong>Discordant Hymn:</strong> Move.</p>',
      nl: '<h4>Boss mechanics</h4><p><strong>Dark Summoning:</strong> Kill Emissary. <strong>Void Cone:</strong> Not in front. <strong>Discordant Hymn:</strong> Move.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '🛡️ Armor & gear', nl: '🛡️ Armor & gear' }
  },
  {
    id: 'executor_kaenius',
    crafting_drops: [],
    name: { en: 'Executor Kaenius', nl: 'Executor Kaenius' },
    zone: { en: 'Voidstorm', nl: 'Voidstorm' },
    location: { en: 'Voidstorm — Execution grounds', nl: 'Voidstorm — Execution grounds' },
    zoneOrder: 3,
    difficulty_rating: 4,
    coords: { en: '/way #2405 52 48', nl: '/way #2405 52 48' },
    pro_tip: {
      tank: { en: 'Execute phase (under 30% HP): chain defensives; never tank Void pools.', nl: 'Execute phase (under 30% HP): chain defensives; never tank Void pools.' },
      heal: { en: 'External on tank during Crushing Rift; fade/kite if fixated.', nl: 'External on tank during Crushing Rift; fade/kite if fixated.' },
      dps: { en: 'Hold burst for sub-30 if safe; kick Void Bolt even during movement.', nl: 'Hold burst for sub-30 if safe; kick Void Bolt even during movement.' }
    },
    summary: {
      en: ['Move out of Void pools fast.', 'Use defensive when he gets low.', 'Interrupt Void Bolt.'],
      nl: ['Move out of Void pools fast.', 'Use defensive when hij laag is.', 'Interrupt Void Bolt.']
    },
    abilities: {
      en: 'Heavy Shadow burst, Void pools.',
      nl: 'Heavy Shadow burst, Void pools.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Void Bolt:</strong> Interrupt. <strong>Crushing Rift:</strong> Dodge. <strong>Execute:</strong> Defensive under 30%.</p>',
      nl: '<h4>Boss mechanics</h4><p><strong>Void Bolt:</strong> Interrupt. <strong>Crushing Rift:</strong> Dodge. <strong>Execute:</strong> Defensive under 30%.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '⚔️ Weapon', nl: '⚔️ Weapon' }
  },
  {
    id: 'imperator_enigmalia',
    crafting_drops: [],
    name: { en: 'Imperator Enigmalia', nl: 'Imperator Enigmalia' },
    zone: { en: 'Voidstorm', nl: 'Voidstorm' },
    location: { en: 'Voidstorm — Enigmalia throne approach', nl: 'Voidstorm — Enigmalia throne approach' },
    zoneOrder: 3,
    difficulty_rating: 5,
    coords: { en: '/way #2405 45 70', nl: '/way #2405 45 70' },
    pro_tip: {
      tank: { en: 'Umbral Rage: move raid/yourself out; save last stand for double Void Bolt overlaps.', nl: 'Umbral Rage: move out; save last stand for double Void Bolt overlaps.' },
      heal: { en: 'Mass dispel / spot heal on Dark Communion target; CC immune adds if possible.', nl: 'Mass dispel / spot heal on Dark Communion target; CC immune adds if possible.' },
      dps: { en: 'Void Shields on boss: kick + burst add during Communion; never pad on boss during shield.', nl: 'Void Shields on boss: kick + burst add during Communion; never pad on boss during shield.' }
    },
    summary: {
      en: ['Spread for Void explosions.', 'Interrupt Void Bolt every time.', 'Avoid stun zones.'],
      nl: ['Spread for Void explosions.', 'Void Bolt: always interrupt.', 'Avoid stun zones.']
    },
    abilities: {
      en: 'AOE Void, stuns, priority interrupt.',
      nl: 'AOE Void, stuns, priority interrupt.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Void Bolt:</strong> Always interrupt. <strong>Umbral Rage:</strong> Move out. <strong>Dark Communion:</strong> Kill add.</p>',
      nl: '<h4>Boss mechanics</h4><p><strong>Void Bolt:</strong> Always interrupt. <strong>Umbral Rage:</strong> Move out. <strong>Dark Communion:</strong> Kill add.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '💍 Trinket & rings', nl: '💍 Trinket & rings' }
  },
  {
    id: 'thornspeaker_edgath',
    crafting_drops: [],
    name: { en: 'Thornspeaker Edgath', nl: 'Thornspeaker Edgath' },
    zone: { en: "Masters' Perch", nl: "Masters' Perch" },
    location: {
      en: "Masters' Perch — Prey: Thornspeaker Edgath (Wowhead); Nightmare counts toward achievement Prey: A Thorn in the Side",
      nl: "Masters' Perch — Prey: Thornspeaker Edgath (Wowhead); Nightmare telt mee voor achievement Prey: A Thorn in the Side"
    },
    zoneOrder: 3,
    difficulty_rating: 3,
    coords: {
      en: "/way Masters' Perch — follow the in-game Prey objective marker",
      nl: "/way Masters' Perch — volg de in-game Prey-doelwit-marker"
    },
    pro_tip: {
      tank: { en: 'Druid-style melee: keep him faced away; rotate mitigation for burst after add or thorn phases.', nl: 'Druid-stijl melee: face weg van de groep; rotate mitigation na add- of thorn-fases.' },
      heal: { en: 'Expect ramping nature/physical pressure; dispel harmful magic quickly; keep mobile for ground telegraphs.', nl: 'Natuur/fysieke burst-ramp; dispel schadelijke magic snel; blijf mobiel voor grond-telegraphs.' },
      dps: { en: 'Kick dangerous channeled casts; avoid stacking in thorn patches or beast swarms.', nl: 'Kick gevaarlijke channels; niet stacken in thorn-vakken of bij beast-swarmen.' }
    },
    summary: {
      en: ['Corrupted druid Prey target (Wowhead: Prey: Thornspeaker Edgath).', 'Interrupt key casts; dodge ground effects.', "Use map pin — Masters' Perch."],
      nl: ['Corrupte druid Prey (Wowhead: Prey: Thornspeaker Edgath).', 'Interrupt key casts; ontwijk grond-effecten.', "Gebruik kaart-pin — Masters' Perch."]
    },
    abilities: {
      en: 'Nature/thorns druid (Prey contract). Interrupt and dodge — see in-game abilities.',
      nl: 'Natuur/doornen-druid (Prey-contract). Interrupt en ontwijk — zie abilities in-game.'
    },
    fullGuide: {
      en: '<h4>Source</h4><p><strong>Prey: Thornspeaker Edgath</strong> (Wowhead quest line). Nightmare completion contributes to <strong>Prey: A Thorn in the Side</strong> (housing effigy reward per Wowhead achievement).</p><h4>Finding him</h4><p>Spawn is in <strong>Masters\' Perch</strong> — use your Prey tracker and the world map objective icon.</p><h4>General tips</h4><p>Interrupt dangerous channels; move out of ground effects; save defensives for burst windows.</p>',
      nl: '<h4>Bron</h4><p><strong>Prey: Thornspeaker Edgath</strong> (Wowhead questlijn). Nightmare telt mee voor <strong>Prey: A Thorn in the Side</strong> (housing-effigy beloning volgens Wowhead achievement).</p><h4>Vinden</h4><p>Spawn in <strong>Masters\' Perch</strong> — gebruik je Prey-tracker en het doelwit op de wereldkaart.</p><h4>Algemeen</h4><p>Interrupt gevaarlijke channels; stap uit grond-effecten; defensives voor burstvensters.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '🎁 Gear', nl: '🎁 Gear' }
  },
  {
    id: 'lamyne_of_the_undercroft',
    crafting_drops: [],
    name: { en: 'Lamyne of the Undercroft', nl: 'Lamyne of the Undercroft' },
    zone: { en: 'Midnight outdoor', nl: 'Midnight (outdoor)' },
    location: {
      en: 'Wowhead NPC: can appear in Eversong Woods, Harandar, Voidstorm, or Zul\'Aman — follow your Prey contract map pin.',
      nl: 'Wowhead NPC: kan in Eversong Woods, Harandar, Voidstorm of Zul\'Aman staan — volg je Prey-contract op de kaart.'
    },
    zoneOrder: 2,
    difficulty_rating: 3,
    coords: {
      en: '/way — follow the in-game Prey objective marker (spawn zone varies per Wowhead)',
      nl: '/way — volg de in-game Prey-marker (spawnzone wisselt volgens Wowhead)'
    },
    pro_tip: {
      tank: { en: 'Treat as a mobile elite: face away from allies; save mitigation for sudden add or burst overlaps.', nl: 'Mobiele elite: face weg van allies; mitigation voor add- of burst-overlap.' },
      heal: { en: 'Expect movement-heavy pressure; keep HoTs rolling and dispel harmful magic when applicable.', nl: 'Veel beweging; HoTs; dispel schadelijke magic waar nodig.' },
      dps: { en: 'Kick long channels; do not tunnel through dangerous ground effects.', nl: 'Kick lange channels; niet tunnelen door gevaarlijke grond-effecten.' }
    },
    summary: {
      en: ['Wowhead: Prey: Lamyne of the Undercroft (Normal / Nightmare).', 'Fill Anguish in your selected hunt zone; then use the tracker pin.', 'Spawn region can differ — trust the objective marker.'],
      nl: ['Wowhead: Prey: Lamyne of the Undercroft (Normal / Nightmare).', 'Vul Anguish in je gekozen jaagzone; gebruik daarna de tracker-pin.', 'Spawn kan wisselen — vertrouw de doelwit-marker.']
    },
    abilities: {
      en: 'Prey contract target — use in-game combat log / dungeon journal for exact abilities.',
      nl: 'Prey-contract — zie in-game combat log / DJ voor exacte abilities.'
    },
    fullGuide: {
      en: '<h4>Source</h4><p><strong>Prey: Lamyne of the Undercroft</strong> — Normal and Nightmare versions on Wowhead (e.g. quest IDs 91110 / 91241). Progress the hunt via Prey activities, World Quests, rares, and treasures in your selected zone (Wowhead quest text).</p><h4>Flavor (Wowhead)</h4><p>Quest framing mentions aggressive plants in the realm—use that as a thematic hint, not a full mechanic list.</p><h4>Finding Lamyne</h4><p>Wowhead lists multiple possible outdoor regions for this NPC; your <strong>Prey objective</strong> on the world map is authoritative for your current contract.</p><h4>General tips</h4><p>Interrupt dangerous channels; move from telegraphs; adjust defensives when the fight speeds up.</p>',
      nl: '<h4>Bron</h4><p><strong>Prey: Lamyne of the Undercroft</strong> — Normal- en Nightmare-versies op Wowhead (o.a. quest-ID\'s 91110 / 91241). Vul je jaagbalk met Prey-activiteiten, world quests, rares en schatten in de gekozen zone (Wowhead questtekst).</p><h4>Flavor (Wowhead)</h4><p>Questtekst noemt agressieve planten in het rijk — thematische hint, geen volledige mechaniekenlijst.</p><h4>Vinden</h4><p>Wowhead noemt meerdere mogelijke outdoor-regio\'s; je <strong>Prey-doelwit</strong> op de wereldkaart is leidend voor je huidige contract.</p><h4>Algemeen</h4><p>Interrupt gevaarlijke channels; ontwijk telegraphs; pas defensives aan als het tempo oploopt.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '🎁 Gear', nl: '🎁 Gear' }
  },
  {
    id: 'magister_sunbreaker',
    crafting_drops: [],
    name: { en: 'Magister Sunbreaker', nl: 'Magister Sunbreaker' },
    zone: { en: "Isle of Quel'Danas", nl: "Isle of Quel'Danas" },
    location: { en: 'Sunwell approaches — Prey: Mad Magisters (alt: Magistrix Emberlash)', nl: 'Sunwell approaches — Prey: Mad Magisters (alt: Magistrix Emberlash)' },
    zoneOrder: 4,
    difficulty_rating: 5,
    coords: { en: '/way #16215 47 25', nl: '/way #16215 47 25' },
    pro_tip: {
      tank: { en: 'Track big arcane casts; save mitigation for burst windows after shield breaks.', nl: 'Track big arcane casts; save mitigation for burst windows after shield breaks.' },
      heal: { en: 'Ramp for heavy magic damage; dispel harmful magic debuffs quickly.', nl: 'Ramp for heavy magic damage; dispel harmful magic debuffs quickly.' },
      dps: { en: 'Kick priority arcane casts; line up burst when the boss is vulnerable.', nl: 'Kick priority arcane casts; line up burst when the boss is vulnerable.' }
    },
    summary: {
      en: ['Interrupt dangerous arcane casts.', 'Move out of ground effects.', 'Alternate target: Magistrix Emberlash (same achievement).'],
      nl: ['Interrupt dangerous arcane casts.', 'Move out of ground effects.', 'Alternate target: Magistrix Emberlash (same achievement).']
    },
    abilities: {
      en: 'Arcane magister prey (Wowhead Prey: Mad Magisters).',
      nl: 'Arcane magister prey (Wowhead Prey: Mad Magisters).'
    },
    fullGuide: {
      en: '<h4>Source</h4><p>Official pair for <strong>Prey: Mad Magisters</strong>: Magister Sunbreaker <em>or</em> Magistrix Emberlash (Wowhead).</p><h4>General tips</h4><p>Fill Anguish on the Isle; interrupt key casts; spread for AoE telegraphs.</p>',
      nl: '<h4>Source</h4><p>Official pair for <strong>Prey: Mad Magisters</strong>: Magister Sunbreaker <em>or</em> Magistrix Emberlash (Wowhead).</p><h4>General tips</h4><p>Fill Anguish on the isle; kick key casts; spread for AoE.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '⚔️ Weapon & caster gear', nl: '⚔️ Weapon & caster gear' }
  },
  {
    id: 'ranger_swiftglade',
    crafting_drops: [
      {
        label: { en: '5x Void-Stained Leather', nl: '5x Void-Stained Leather' },
        profession: { en: 'Leatherworking', nl: 'Leatherworking' },
        used_for: { en: 'Epic Mail/Leather', nl: 'Epic Mail/Leather' }
      }
    ],
    name: { en: 'Ranger Swiftglade', nl: 'Ranger Swiftglade' },
    zone: { en: 'Eversong Woods', nl: 'Eversong Woods' },
    location: { en: 'Farstrider turf — Prey: The Fallen Farstriders (alt: Lieutenant Blazewing)', nl: 'Farstrider turf — Prey: The Fallen Farstriders (alt: Lieutenant Blazewing)' },
    zoneOrder: 1,
    difficulty_rating: 3,
    coords: { en: '/way #2395 58 62', nl: '/way #2395 58 62' },
    pro_tip: {
      tank: { en: 'Bleed or physical burst: rotate mitigation; keep boss faced away from allies.', nl: 'Bleed of physical burst: rotate mitigation; keep boss faced away from allies.' },
      heal: { en: 'HoT while moving; watch for focus-fire windows on the ranger.', nl: 'HoT while moving; watch for focus-fire windows on the ranger.' },
      dps: { en: 'Kick or stun key casts; save burst after defensive CDs are forced.', nl: 'Kick of stun key casts; save burst after defensive CDs are forced.' }
    },
    summary: {
      en: ['Official Prey target (Wowhead): Ranger Swiftglade or Lieutenant Blazewing.', 'Interrupt and control high-damage shots.', 'Use the map — Farstrider-themed hunt in Eversong.'],
      nl: ['Official Prey target (Wowhead): Ranger Swiftglade or Lieutenant Blazewing.', 'Interrupt en control high-damage shots.', 'Use the map — Farstrider-themed hunt in Eversong.']
    },
    abilities: {
      en: 'Farstrider prey — ranged/melee mix (Prey: The Fallen Farstriders).',
      nl: 'Farstrider Prey target — ranged/melee mix (Prey: The Fallen Farstriders).'
    },
    fullGuide: {
      en: '<h4>Source</h4><p><strong>Prey: The Fallen Farstriders</strong> — defeat Ranger Swiftglade <em>or</em> Lieutenant Blazewing (Wowhead achievement).</p>',
      nl: '<h4>Source</h4><p><strong>Prey: The Fallen Farstriders</strong> — defeat Ranger Swiftglade <em>or</em> Lieutenant Blazewing (Wowhead achievement).</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '🥾 Leather & mail gear', nl: '🥾 Leather & mail gear' }
  },
  {
    id: 'nexus_edge_hadim',
    crafting_drops: [
      {
        label: { en: '1x Void-Infused Essence', nl: '1x Void-Infused Essence' },
        profession: { en: 'Jewelcrafting', nl: 'Jewelcrafting' },
        used_for: { en: 'High-End Trinkets', nl: 'High-End Trinkets' }
      }
    ],
    name: { en: 'Nexus-Edge Hadim', nl: 'Nexus-Edge Hadim' },
    zone: { en: "Zul'Aman", nl: "Zul'Aman" },
    location: { en: "Near Zul'Aman entrance — Prey: Ethereal Assassins (alt: Phaseblade Talasha)", nl: "Near Zul'Aman entrance — Prey: Ethereal Assassins (alt: Phaseblade Talasha)" },
    zoneOrder: 2,
    difficulty_rating: 4,
    coords: { en: "/way #2437 63.78 80.15 Zul'Aman (near entrance — Method.gg style)", nl: "/way #2437 63.78 80.15 Zul'Aman (near entrance — Method.gg style)" },
    pro_tip: {
      tank: { en: 'Ethereal assassin: expect teleports and burst; save DR for overlap windows.', nl: 'Ethereal assassin: expect teleports and burst; save DR for overlap windows.' },
      heal: { en: 'Curse/magic dispel on priority; spot-heal spike targets.', nl: 'Curse/magic dispel on priority; spot-heal spike targets.' },
      dps: { en: 'Kick Storm Bolt–style casts if present; line burst after interrupts.', nl: 'Kick Storm Bolt–style casts if present; line burst after interrupts.' }
    },
    summary: {
      en: ['Wowhead Prey target — Ethereal Assassins pair with Phaseblade Talasha.', 'Dodge storm/void telegraphs.', 'Interrupt key casts.'],
      nl: ['Wowhead Prey target — Ethereal Assassins pair with Phaseblade Talasha.', 'Dodge storm/void telegraphs.', 'Interrupt key casts.']
    },
    abilities: {
      en: 'Ethereal assassin (Wowhead quest: Prey: Nexus-Edge Hadim).',
      nl: 'Ethereal assassin (Wowhead quest: Prey: Nexus-Edge Hadim).'
    },
    fullGuide: {
      en: '<h4>Source</h4><p><strong>Prey: Ethereal Assassins</strong> — Nexus-Edge Hadim <em>or</em> Phaseblade Talasha (Wowhead achievement).</p>',
      nl: '<h4>Source</h4><p><strong>Prey: Ethereal Assassins</strong> — Nexus-Edge Hadim <em>or</em> Phaseblade Talasha (Wowhead achievement).</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '💍 Trinket & JC mats', nl: '💍 Trinket & JC mats' }
  },
  {
    id: 'grothoz_the_burning_shadow',
    crafting_drops: [],
    name: { en: 'Grothoz, the Burning Shadow', nl: 'Grothoz, the Burning Shadow' },
    zone: { en: 'Ghostlands border', nl: 'Ghostlands border' },
    location: { en: 'Dead Scar area — Prey: Breaking the Blade (alt: Dengzag, the Darkened Blaze)', nl: 'Dead Scar area — Prey: Breaking the Blade (alt: Dengzag, the Darkened Blaze)' },
    zoneOrder: 2,
    difficulty_rating: 2,
    coords: { en: '/way Ghostlands 35 68', nl: '/way Ghostlands 35 68' },
    pro_tip: {
      tank: { en: 'Twilight fire/shadow mix: face away, save CDs for burn phases.', nl: 'Twilight fire/shadow mix: face away, save CDs for burn phases.' },
      heal: { en: 'Dispel magic curses quickly; ramp for heavy AoE ticks.', nl: 'Dispel magic curses quickly; ramp for heavy AoE ticks.' },
      dps: { en: 'Kick channels; avoid spreading fire patches through the group.', nl: 'Kick channels; avoid spreading fire patches through the group.' }
    },
    summary: {
      en: ['Wowhead Prey: Breaking the Blade — Grothoz or Dengzag.', 'Move from fire and shadow zones.', 'Interrupt dangerous casts.'],
      nl: ['Wowhead Prey: Breaking the Blade — Grothoz or Dengzag.', 'Move from fire and shadow zones.', 'Interrupt dangerous casts.']
    },
    abilities: {
      en: 'Twilight blade prey (Prey: Breaking the Blade).',
      nl: 'Twilight blade Prey target (Prey: Breaking the Blade).'
    },
    fullGuide: {
      en: '<h4>Source</h4><p><strong>Prey: Breaking the Blade</strong> — Grothoz, the Burning Shadow <em>or</em> Dengzag, the Darkened Blaze (Wowhead).</p>',
      nl: '<h4>Source</h4><p><strong>Prey: Breaking the Blade</strong> — Grothoz, the Burning Shadow <em>or</em> Dengzag, the Darkened Blaze (Wowhead).</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '🎁 Gear & rings', nl: '🎁 Gear & rings' }
  },
  {
    id: 'senior_tinker_oszwold',
    crafting_drops: [
      {
        label: { en: 'Engineering salvage & gizmo parts', nl: 'Engineering salvage & gizmo parts' },
        profession: { en: 'Engineering', nl: 'Engineering' },
        used_for: { en: 'Midnight Engineering crafts & upgrades', nl: 'Midnight Engineering crafts & upgrades' }
      }
    ],
    name: { en: 'Senior Tinker Ozwold', nl: 'Senior Tinker Ozwold' },
    zone: { en: 'Silvermoon City', nl: 'Silvermoon City' },
    location: { en: 'Silvermoon Bazaar (workshop)', nl: 'Silvermoon Bazaar (workshop)' },
    zoneOrder: 1,
    difficulty_rating: 2,
    coords: { en: '/way #2393 42.8 31.4', nl: '/way #2393 42.8 31.4' },
    pro_tip: {
      tank: { en: 'Watch for frontal cone wrench slams; pick up loose adds before they buff the boss.', nl: 'Watch for frontal cone wrench slams; pick up loose adds before they buff the boss.' },
      heal: { en: 'Heavy AoE when he deploys turrets — spread slightly, then stack for shield phase.', nl: 'Heavy AoE when he deploys turrets — spread slightly, then stack for shield phase.' },
      dps: { en: 'Kick Overclock cast; burn turrets before he reabsorbs them for a damage shield.', nl: 'Kick Overclock cast; burn turrets before he reabsorbs them for a damage shield.' }
    },
    summary: {
      en: ['Destroy deployable turrets quickly.', 'Interrupt Overclock channels.', 'Avoid grease patches on the floor.'],
      nl: ['Destroy deployable turrets quickly.', 'Interrupt Overclock channels.', 'Avoid grease patches on the floor.']
    },
    abilities: {
      en: 'Deployable turrets, Overclock channel, cone attacks.',
      nl: 'Deployable turrets, Overclock channel, cone attacks.'
    },
    fullGuide: {
      en: '<h4>Source</h4><p><strong>Prey: Insane Inventors</strong> — Senior Tinker Ozwold <em>or</em> L-N-0R the Recycler (Wowhead).</p><h4>Boss mechanics</h4><p><strong>Overclock:</strong> Interrupt. <strong>Turret Deploy:</strong> Kill adds before reabsorb. <strong>Grease Patch:</strong> Slow — route around.</p>',
      nl: '<h4>Source</h4><p><strong>Prey: Insane Inventors</strong> — Senior Tinker Ozwold <em>or</em> L-N-0R the Recycler (Wowhead).</p><h4>Boss mechanics</h4><p><strong>Overclock:</strong> Interrupt. <strong>Turret Deploy:</strong> Kill adds before reabsorb. <strong>Grease Patch:</strong> Slow — route around.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '⚙️ Engineering parts & gear', nl: '⚙️ Engineering parts & gear' }
  }
];


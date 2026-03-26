// Prey Targets — WoW: Midnight Season 1 (14 contracts)
// difficulty_rating 1–5 = solo threat (Danger Meter). Contract loot: Icy Veins Prey table — Normal 220 / Hard 233 / Nightmare 246 (PREY_ILVL). World boss / apex Mythic 289 (not contracts).
// NPC names verified vs Wowhead Prey quests & achievements + Icy Veins Prey Rewards (housing bust themes). Many achievements are “defeat A or B”; we show one name per row and note the alternate in location/summary where relevant.
// Achievement pairs (Wowhead): Sadistic Shamans — The Talon of Jan'alaii / The Wing of Akil'zon | Ethereal Assassins — Phaseblade Talasha / Nexus-Edge Hadim | Fallen Farstriders — Ranger Swiftglade / Lieutenant Blazewing | Mad Magisters — Magister Sunbreaker / Magistrix Emberlash | Breaking the Blade — Grothoz, the Burning Shadow / Dengzag, the Darkened Blaze | Insane Inventors — Senior Tinker Ozwold / L-N-0R the Recycler | etc.
// coords: TomTom /way lines. uiMapID: Silvermoon #2393, Eversong #2395, Zul'Aman #2437, Harandar #2413, Voidstorm #2405, Quel'Danas #16215 (zie data/delves.js). Atal'Aman / Ghostlands: waar geen bevestigde uiMapID in bron staat, zonenaam of note — check in-game bij twijfel.
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
    location: { en: 'North Eversong — Void Scar trail', nl: 'Noord-Eversong — Void Scar-pad' },
    zoneOrder: 1,
    difficulty_rating: 2,
    coords: { en: '/way #2395 45 50', nl: '/way #2395 45 50' },
    pro_tip: {
      tank: { en: 'Stack mitigation before named Void bursts; LoS only if it does not drop melee uptime.', nl: 'Stapel mitigatie vóór Void-bursts; LoS alleen als je melee-uptime niet verliest.' },
      heal: { en: 'Pre-HoT before ambush; dispel magic debuffs before the next kick window.', nl: 'Pre-HoT vóór hinderlaag; dispel magic debuffs vóór de volgende kick.' },
      dps: { en: 'Kick Void Bolt on cooldown rotation; save burst for post-interrupt vulnerability.', nl: 'Kick Void Bolt op rotatie; burst na interrupt-kwetsbaarheid.' }
    },
    summary: {
      en: ['Interrupt Void and Shadow casts.', 'Stay out of dark purple pools on the ground.', 'Use defensives when he channels big spells.'],
      nl: ['Onderbreek Void- en Shadow-casts.', 'Blijf uit paarse plassen op de grond.', 'Gebruik defensives bij grote channels.']
    },
    abilities: {
      en: 'Void magic, Shadow damage. Interrupt Void casts.',
      nl: 'Void-magie, schaduw. Onderbreek Void-casts.'
    },
    fullGuide: {
      en: '<h4>Before the fight</h4><p>Fill your Anguish bar by doing World Quests and killing rares in Eversong Woods.</p><h4>Boss mechanics</h4><p><strong>Void Bolt:</strong> Interrupt. <strong>Shadow Pool:</strong> Move out. <strong>Void Surge:</strong> Defensive or interrupt.</p>',
      nl: '<h4>Voor het gevecht</h4><p>Vul Anguish met World Quests en rares in Eversong.</p><h4>Boss-mechanieken</h4><p><strong>Void Bolt:</strong> Onderbreek. <strong>Shadow Pool:</strong> Stap uit. <strong>Void Surge:</strong> Defensive of interrupt.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '⚔️ Weapon & gear', nl: '⚔️ Wapen & gear' }
  },
  {
    id: 'neydra_the_starving',
    crafting_drops: [],
    name: { en: 'Neydra the Starving', nl: 'Neydra the Starving' },
    zone: { en: 'Eversong Woods / Ghostlands', nl: 'Eversong Woods / Ghostlands' },
    location: { en: 'Eversong–Ghostlands border — Prey: No Rest for the Wretched (alt: Lost Theldrin)', nl: 'Grens Eversong–Ghostlands — Prey: No Rest for the Wretched (alt.: Lost Theldrin)' },
    zoneOrder: 1,
    difficulty_rating: 3,
    coords: { en: '/way #2393 52.4 78.2 Eversong–Ghostlands border', nl: '/way #2393 52.4 78.2 Eversong–Ghostlands grens' },
    pro_tip: {
      tank: { en: 'Face Neydra away from the group; save a big cooldown for her enrage-style hunger frenzy.', nl: 'Draai Neydra weg van de groep; bewaar grote CD voor honger-frenzy.' },
      heal: { en: 'Heavy bleed or DoT windows — dispel fast and pump after each leap.', nl: 'Zware bleed/DoT-fasen — snel dispellen en healen na elke sprong.' },
      dps: { en: 'Kick soul drain or channel casts; kill hungering whelps before they reach her.', nl: 'Kick soul drain of channels; dood hongerige whelps vóór ze haar bereiken.' }
    },
    summary: {
      en: ['Interrupt drain channels.', 'Kill small adds before they empower the boss.', 'Dodge leap and frontal breath.'],
      nl: ['Onderbreek drain-channels.', 'Dood kleine adds vóór empower.', 'Ontwijk sprong en frontale adem.']
    },
    abilities: {
      en: 'Hunger frenzy, leaps, add waves.',
      nl: 'Honger-frenzy, sprongen, add-golven.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Hunger Frenzy:</strong> Defensive or CC. <strong>Leap:</strong> Move from landing circle. <strong>Whelps:</strong> Priority kill.</p>',
      nl: '<h4>Boss-mechanieken</h4><p><strong>Hunger Frenzy:</strong> Defensive of CC. <strong>Leap:</strong> Uit landingscirkel. <strong>Whelps:</strong> Prio doden.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '🎁 Gear', nl: '🎁 Gear' }
  },
  {
    id: 'deliah_gloomsong',
    crafting_drops: [],
    name: { en: 'Deliah Gloomsong', nl: 'Deliah Gloomsong' },
    zone: { en: 'Eversong Woods', nl: 'Eversong Woods' },
    location: { en: 'East Eversong — Gloomsong rise', nl: 'Oost-Eversong — Gloomsong-heuvel' },
    zoneOrder: 1,
    difficulty_rating: 2,
    coords: { en: '/way #2395 55 62', nl: '/way #2395 55 62' },
    pro_tip: {
      tank: { en: 'Track her self-heal casts — assign your own interrupt if no DPS is nearby.', nl: 'Volg haar self-heal casts — kick zelf als er geen DPS is.' },
      heal: { en: 'CC fear/charm if present; keep yourself topped before heavy DoT ramps.', nl: 'CC fear/charm indien aanwezig; jezelf vol vóór zware DoT-ramp.' },
      dps: { en: 'Purge Void Shields quickly; burst right after shield break for max value.', nl: 'Purge Void Shields snel; burst direct na shield break.' }
    },
    summary: {
      en: ['Dispel Shadow DoT from yourself.', 'Interrupt her channeled spells.', 'Avoid the shadow zones she spawns.'],
      nl: ['Dispel Shadow DoT.', 'Onderbreek channels.', 'Ontwijk shadow-zones.']
    },
    abilities: {
      en: 'Shadow DoT and channeled spells. Interrupt and dispel.',
      nl: 'Shadow DoT en channels. Onderbreek en dispel.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Shadow Mend:</strong> Interrupt. <strong>Gloomfire:</strong> Dispel. <strong>Void Rift:</strong> Dodge.</p>',
      nl: '<h4>Boss-mechanieken</h4><p><strong>Shadow Mend:</strong> Onderbreek. <strong>Gloomfire:</strong> Dispel. <strong>Void Rift:</strong> Ontwijk.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '💍 Trinket & accessories', nl: '💍 Trinket & accessoires' }
  },
  {
    id: 'talon_of_janalaii',
    crafting_drops: [],
    name: { en: "The Talon of Jan'alaii", nl: "De Klauw van Jan'alaii" },
    zone: { en: "Zul'Aman", nl: "Zul'Aman" },
    location: { en: "Zul'Aman — Prey: Sadistic Shamans (alt: The Wing of Akil'zon)", nl: "Zul'Aman — Prey: Sadistic Shamans (alt.: De Vleugel van Akil'zon)" },
    zoneOrder: 2,
    difficulty_rating: 3,
    coords: { en: "/way #2437 50 60", nl: "/way #2437 50 60" },
    pro_tip: {
      tank: { en: 'Hard Hits: use active mitigation for heavy melee combos after Hex fails.', nl: 'Harde klappen: active mitigation na mislukte Hex.' },
      heal: { en: 'Stun or root adds during Hex windows; don\'t stand in lightning for self-preservation.', nl: 'Stun/root adds tijdens Hex; niet in bliksem staan.' },
      dps: { en: 'Break shields on Lightning Totem first; time burst for post-Hex burst windows.', nl: 'Schild op Lightning Totem eerst; burst na Hex-fasen.' }
    },
    summary: {
      en: ['Interrupt Hex or you turn into a frog.', 'Destroy totems before they hurt you.', 'Move out of lightning circles.'],
      nl: ['Onderbreek Hex.', 'Vernietig totems.', 'Uit bliksemcirkels.']
    },
    abilities: {
      en: 'Hex, totems, lightning AoE.',
      nl: 'Hex, totems, bliksem-AoE.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Hex:</strong> Interrupt. <strong>Lightning Totem:</strong> Kill fast. <strong>Chain Lightning:</strong> Dodge.</p>',
      nl: '<h4>Boss-mechanieken</h4><p><strong>Hex:</strong> Onderbreek. <strong>Lightning Totem:</strong> Snel dood. <strong>Chain Lightning:</strong> Ontwijk.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '⚔️ Weapon', nl: '⚔️ Wapen' }
  },
  {
    id: 'wing_of_akilzon',
    crafting_drops: [],
    name: { en: "The Wing of Akil'zon", nl: "De Vleugel van Akil'zon" },
    zone: { en: "Zul'Aman", nl: "Zul'Aman" },
    location: { en: "Zul'Aman — Prey: Sadistic Shamans (alt: The Talon of Jan'alaii)", nl: "Zul'Aman — Prey: Sadistic Shamans (alt.: De Klauw van Jan'alaii)" },
    zoneOrder: 2,
    difficulty_rating: 3,
    coords: { en: '/way #2437 55 75', nl: '/way #2437 55 75' },
    pro_tip: {
      tank: { en: 'Face boss away during Storm Bolt windows; save DR for wind-burst combos.', nl: 'Boss wegdraaien bij Storm Bolt; DR voor wind-combo\'s.' },
      heal: { en: 'Curse dispel on cooldown priority; use knockbacks to create space from melee adds.', nl: 'Curse dispel prio; knockbacks voor ruimte van adds.' },
      dps: { en: 'Kick Storm Bolt; line up CDs when Cyclone ends.', nl: 'Kick Storm Bolt; CDs als Cyclone eindigt.' }
    },
    summary: {
      en: ['Dodge storm swirls on the ground.', 'Interrupt Storm Bolt.', 'Dispel curse if you get one.'],
      nl: ['Ontwijk storm-swirls.', 'Onderbreek Storm Bolt.', 'Dispel curse.']
    },
    abilities: {
      en: 'Storm and wind. Dodge, interrupt, dispel.',
      nl: 'Storm en wind. Ontwijk, kick, dispel.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Storm Bolt:</strong> Interrupt. <strong>Cyclone:</strong> Dodge. <strong>Windfury Curse:</strong> Dispel.</p>',
      nl: '<h4>Boss-mechanieken</h4><p><strong>Storm Bolt:</strong> Onderbreek. <strong>Cyclone:</strong> Ontwijk. <strong>Windfury Curse:</strong> Dispel.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '🪶 Off-hand & gear', nl: '🪶 Schildhand & gear' }
  },
  {
    id: 'praetor_singularis',
    name: { en: 'Praetor Singularis', nl: 'Praetor Singularis' },
    zone: { en: 'Voidstorm', nl: 'Voidstorm' },
    location: { en: 'Voidstorm — Singular Spire approach', nl: 'Voidstorm — Singular Spire-nadering' },
    zoneOrder: 3,
    difficulty_rating: 4,
    coords: { en: '/way #2405 40 55', nl: '/way #2405 40 55' },
    pro_tip: {
      tank: { en: 'Pick up Void Minions instantly; big mitigation for Arcane Cascade overlaps.', nl: 'Void Minions direct pakken; mitigatie bij Arcane Cascade overlap.' },
      heal: { en: 'CC stray adds while kiting; barrier during double-cast windows.', nl: 'CC losse adds bij kiten; barrière bij dubbele casts.' },
      dps: { en: 'Void Shields: purge/enrage dispel if applicable; burst the add before boss empowers.', nl: 'Void Shields: purge; burst de add vóór boss empower.' }
    },
    summary: {
      en: ['Dodge purple ground effects.', 'Interrupt his big casts.', 'Kill any adds he summons.'],
      nl: ['Ontwijk paars op de grond.', 'Onderbreek grote casts.', 'Dood adds.']
    },
    abilities: {
      en: 'Arcane + Void. Dodge, interrupt, kill adds.',
      nl: 'Arcane + Void. Ontwijk, kick, adds dood.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Void Eruption:</strong> Sidestep. <strong>Arcane Cascade:</strong> Interrupt. <strong>Void Minion:</strong> Kill first.</p>',
      nl: '<h4>Boss-mechanieken</h4><p><strong>Void Eruption:</strong> Opzij. <strong>Arcane Cascade:</strong> Onderbreek. <strong>Void Minion:</strong> Eerst dood.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '🛠️ Crafting mats + gear', nl: '🛠️ Craft-mats + gear' },
    crafting_drops: [
      {
        label: { en: '3x Shadowed Iron Bolts', nl: '3x Shadowed Iron Bolts' },
        profession: { en: 'Engineering / Blacksmithing', nl: 'Techniek / Smidskunst' },
        used_for: { en: 'Engineering and Blacksmithing crafts', nl: 'Techniek- en smids-recepten' }
      }
    ]
  },
  {
    id: 'consul_nebulor',
    crafting_drops: [],
    name: { en: 'Consul Nebulor', nl: 'Consul Nebulor' },
    zone: { en: 'Voidstorm', nl: 'Voidstorm' },
    location: { en: 'Voidstorm — Nebulor terrace', nl: 'Voidstorm — Nebulor-terras' },
    zoneOrder: 3,
    difficulty_rating: 4,
    coords: { en: '/way #2405 48 62', nl: '/way #2405 48 62' },
    pro_tip: {
      tank: { en: 'Sidestep frontal Void Cone; taunt swap if Emissary fixates healer.', nl: 'Void Cone opzij; taunt swap als Emissary healer fixeert.' },
      heal: { en: 'Root/slow Emissary; self-heal aggressively during Discordant Hymn.', nl: 'Root/slow Emissary; zelf healen tijdens Discordant Hymn.' },
      dps: { en: 'Switch to Emissary with full burst; break any absorb shield before hymn ramps.', nl: 'Switch naar Emissary met burst; absorb breken vóór hymn-ramp.' }
    },
    summary: {
      en: ['Kill his summoned adds quickly.', 'Avoid the frontal cone attack.', 'Move out of Void zones.'],
      nl: ['Dood adds snel.', 'Vermijd frontale kegel.', 'Uit Void-zones.']
    },
    abilities: {
      en: 'Summons and Void zones.',
      nl: 'Summons en Void-zones.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Dark Summoning:</strong> Kill Emissary. <strong>Void Cone:</strong> Not in front. <strong>Discordant Hymn:</strong> Move.</p>',
      nl: '<h4>Boss-mechanieken</h4><p><strong>Dark Summoning:</strong> Dood Emissary. <strong>Void Cone:</strong> Niet ervoor. <strong>Discordant Hymn:</strong> Bewegen.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '🛡️ Armor & gear', nl: '🛡️ Harnas & gear' }
  },
  {
    id: 'executor_kaenius',
    crafting_drops: [],
    name: { en: 'Executor Kaenius', nl: 'Executor Kaenius' },
    zone: { en: 'Voidstorm', nl: 'Voidstorm' },
    location: { en: 'Voidstorm — Execution grounds', nl: 'Voidstorm — Executieplein' },
    zoneOrder: 3,
    difficulty_rating: 4,
    coords: { en: '/way #2405 52 48', nl: '/way #2405 52 48' },
    pro_tip: {
      tank: { en: 'Execute phase (under 30% HP): chain defensives; never tank Void pools.', nl: 'Execute-fase (onder 30% HP): keten defensives; nooit in Void-pools.' },
      heal: { en: 'External on tank during Crushing Rift; fade/kite if fixated.', nl: 'External op tank bij Crushing Rift; fade/kiten bij fixate.' },
      dps: { en: 'Hold burst for sub-30 if safe; kick Void Bolt even during movement.', nl: 'Burst bewaren sub-30 indien veilig; Void Bolt kick tijdens movement.' }
    },
    summary: {
      en: ['Move out of Void pools fast.', 'Use defensive when he gets low.', 'Interrupt Void Bolt.'],
      nl: ['Snel uit Void-pools.', 'Defensive als hij laag is.', 'Onderbreek Void Bolt.']
    },
    abilities: {
      en: 'Heavy Shadow burst, Void pools.',
      nl: 'Zware Shadow burst, Void-pools.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Void Bolt:</strong> Interrupt. <strong>Crushing Rift:</strong> Dodge. <strong>Execute:</strong> Defensive under 30%.</p>',
      nl: '<h4>Boss-mechanieken</h4><p><strong>Void Bolt:</strong> Onderbreek. <strong>Crushing Rift:</strong> Ontwijk. <strong>Execute:</strong> Defensive onder 30%.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '⚔️ Weapon', nl: '⚔️ Wapen' }
  },
  {
    id: 'imperator_enigmalia',
    crafting_drops: [],
    name: { en: 'Imperator Enigmalia', nl: 'Imperator Enigmalia' },
    zone: { en: 'Voidstorm', nl: 'Voidstorm' },
    location: { en: 'Voidstorm — Enigmalia throne approach', nl: 'Voidstorm — Enigmalia-troon' },
    zoneOrder: 3,
    difficulty_rating: 5,
    coords: { en: '/way #2405 45 70', nl: '/way #2405 45 70' },
    pro_tip: {
      tank: { en: 'Umbral Rage: move raid/yourself out; save last stand for double Void Bolt overlaps.', nl: 'Umbral Rage: eruit; last stand bij dubbele Void Bolt.' },
      heal: { en: 'Mass dispel / spot heal on Dark Communion target; CC immune adds if possible.', nl: 'Mass dispel / spot heal op Dark Communion; CC op adds indien mogelijk.' },
      dps: { en: 'Void Shields on boss: kick + burst add during Communion; never pad on boss during shield.', nl: 'Shields: kick + burst add bij Communion; niet op boss tijdens shield.' }
    },
    summary: {
      en: ['Spread for Void explosions.', 'Interrupt Void Bolt every time.', 'Avoid stun zones.'],
      nl: ['Spreid voor explosies.', 'Void Bolt altijd kick.', 'Ontwijk stuns.']
    },
    abilities: {
      en: 'AOE Void, stuns, priority interrupt.',
      nl: 'AOE Void, stuns, prio kick.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Void Bolt:</strong> Always interrupt. <strong>Umbral Rage:</strong> Move out. <strong>Dark Communion:</strong> Kill add.</p>',
      nl: '<h4>Boss-mechanieken</h4><p><strong>Void Bolt:</strong> Altijd kick. <strong>Umbral Rage:</strong> Eruit. <strong>Dark Communion:</strong> Dood add.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '💍 Trinket & rings', nl: '💍 Trinket & ringen' }
  },
  {
    id: 'magister_sunbreaker',
    crafting_drops: [],
    name: { en: 'Magister Sunbreaker', nl: 'Magister Sunbreaker' },
    zone: { en: "Isle of Quel'Danas", nl: "Isle of Quel'Danas" },
    location: { en: 'Sunwell approaches — Prey: Mad Magisters (alt: Magistrix Emberlash)', nl: 'Sunwell-nadering — Prey: Mad Magisters (alt.: Magistrix Emberlash)' },
    zoneOrder: 4,
    difficulty_rating: 5,
    coords: { en: '/way #16215 47 25', nl: '/way #16215 47 25' },
    pro_tip: {
      tank: { en: 'Track big arcane casts; save mitigation for burst windows after shield breaks.', nl: 'Volg grote arcane-casts; mitigatie bewaren na shield breaks.' },
      heal: { en: 'Ramp for heavy magic damage; dispel harmful magic debuffs quickly.', nl: 'Ramp voor zware magie; dispel magic debuffs snel.' },
      dps: { en: 'Kick priority arcane casts; line up burst when the boss is vulnerable.', nl: 'Kick prio arcane; burst als boss kwetsbaar is.' }
    },
    summary: {
      en: ['Interrupt dangerous arcane casts.', 'Move out of ground effects.', 'Alternate target: Magistrix Emberlash (same achievement).'],
      nl: ['Onderbreek gevaarlijke arcane-casts.', 'Uit grond-effecten.', 'Alternatief: Magistrix Emberlash (zelfde achievement).']
    },
    abilities: {
      en: 'Arcane magister prey (Wowhead Prey: Mad Magisters).',
      nl: 'Arcane magister-prooi (Wowhead Prey: Mad Magisters).'
    },
    fullGuide: {
      en: '<h4>Source</h4><p>Official pair for <strong>Prey: Mad Magisters</strong>: Magister Sunbreaker <em>or</em> Magistrix Emberlash (Wowhead).</p><h4>General tips</h4><p>Fill Anguish on the Isle; interrupt key casts; spread for AoE telegraphs.</p>',
      nl: '<h4>Bron</h4><p>Officieel paar voor <strong>Prey: Mad Magisters</strong>: Magister Sunbreaker <em>of</em> Magistrix Emberlash (Wowhead).</p><h4>Algemeen</h4><p>Vul Anguish op het eiland; kick belangrijke casts; spreid voor AoE.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '⚔️ Weapon & caster gear', nl: '⚔️ Wapen & caster-gear' }
  },
  {
    id: 'ranger_swiftglade',
    crafting_drops: [
      {
        label: { en: '5x Void-Stained Leather', nl: '5x Void-Stained Leather' },
        profession: { en: 'Leatherworking', nl: 'Lederbewerking' },
        used_for: { en: 'Epic Mail/Leather', nl: 'Epische mail/leder' }
      }
    ],
    name: { en: 'Ranger Swiftglade', nl: 'Ranger Swiftglade' },
    zone: { en: 'Eversong Woods', nl: 'Eversong Woods' },
    location: { en: 'Farstrider turf — Prey: The Fallen Farstriders (alt: Lieutenant Blazewing)', nl: 'Farstrider-gebied — Prey: The Fallen Farstriders (alt.: Lieutenant Blazewing)' },
    zoneOrder: 1,
    difficulty_rating: 3,
    coords: { en: '/way #2395 58 62', nl: '/way #2395 58 62' },
    pro_tip: {
      tank: { en: 'Bleed or physical burst: rotate mitigation; keep boss faced away from allies.', nl: 'Bleed/fysieke burst: mitigatie roteren; boss weg van groep.' },
      heal: { en: 'HoT while moving; watch for focus-fire windows on the ranger.', nl: 'HoT tijdens beweging; let op focus-fire.' },
      dps: { en: 'Kick or stun key casts; save burst after defensive CDs are forced.', nl: 'Kick/stun op key casts; burst na gedwongen defensives.' }
    },
    summary: {
      en: ['Official Prey target (Wowhead): Ranger Swiftglade or Lieutenant Blazewing.', 'Interrupt and control high-damage shots.', 'Use the map — Farstrider-themed hunt in Eversong.'],
      nl: ['Officieel prooi-doel (Wowhead): Ranger Swiftglade of Lieutenant Blazewing.', 'Onderbreek en beheer harde schoten.', 'Gebruik de kaart — Farstrider-jacht in Eversong.']
    },
    abilities: {
      en: 'Farstrider prey — ranged/melee mix (Prey: The Fallen Farstriders).',
      nl: 'Farstrider-prooi — ranged/melee mix (Prey: The Fallen Farstriders).'
    },
    fullGuide: {
      en: '<h4>Source</h4><p><strong>Prey: The Fallen Farstriders</strong> — defeat Ranger Swiftglade <em>or</em> Lieutenant Blazewing (Wowhead achievement).</p>',
      nl: '<h4>Bron</h4><p><strong>Prey: The Fallen Farstriders</strong> — versla Ranger Swiftglade <em>of</em> Lieutenant Blazewing (Wowhead achievement).</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '🥾 Leather & mail gear', nl: '🥾 Leder- & mail-gear' }
  },
  {
    id: 'nexus_edge_hadim',
    crafting_drops: [
      {
        label: { en: '1x Void-Infused Essence', nl: '1x Void-Infused Essence' },
        profession: { en: 'Jewelcrafting', nl: 'Juwelen' },
        used_for: { en: 'High-End Trinkets', nl: 'High-end trinkets' }
      }
    ],
    name: { en: 'Nexus-Edge Hadim', nl: 'Nexus-Edge Hadim' },
    zone: { en: "Zul'Aman", nl: "Zul'Aman" },
    location: { en: "Near Zul'Aman entrance — Prey: Ethereal Assassins (alt: Phaseblade Talasha)", nl: "Bij Zul'Aman-ingang — Prey: Ethereal Assassins (alt.: Phaseblade Talasha)" },
    zoneOrder: 2,
    difficulty_rating: 4,
    coords: { en: "/way #2437 63.78 80.15 Zul'Aman (near entrance — Method.gg style)", nl: "/way #2437 63.78 80.15 Zul'Aman (bij ingang)" },
    pro_tip: {
      tank: { en: 'Ethereal assassin: expect teleports and burst; save DR for overlap windows.', nl: 'Ethereal moordenaar: teleports en burst; DR bij overlaps.' },
      heal: { en: 'Curse/magic dispel on priority; spot-heal spike targets.', nl: 'Curse/magic dispel prio; spot-heal bij spikes.' },
      dps: { en: 'Kick Storm Bolt–style casts if present; line burst after interrupts.', nl: 'Kick Storm Bolt-achtige casts; burst na interrupts.' }
    },
    summary: {
      en: ['Wowhead Prey target — Ethereal Assassins pair with Phaseblade Talasha.', 'Dodge storm/void telegraphs.', 'Interrupt key casts.'],
      nl: ['Wowhead Prey-doel — Ethereal Assassins met Phaseblade Talasha.', 'Ontwijk storm/void-telegraphs.', 'Onderbreek key casts.']
    },
    abilities: {
      en: 'Ethereal assassin (Wowhead quest: Prey: Nexus-Edge Hadim).',
      nl: 'Ethereal moordenaar (Wowhead: Prey: Nexus-Edge Hadim).'
    },
    fullGuide: {
      en: '<h4>Source</h4><p><strong>Prey: Ethereal Assassins</strong> — Nexus-Edge Hadim <em>or</em> Phaseblade Talasha (Wowhead achievement).</p>',
      nl: '<h4>Bron</h4><p><strong>Prey: Ethereal Assassins</strong> — Nexus-Edge Hadim <em>of</em> Phaseblade Talasha (Wowhead achievement).</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '💍 Trinket & JC mats', nl: '💍 Trinket & JC-mats' }
  },
  {
    id: 'grothoz_the_burning_shadow',
    crafting_drops: [],
    name: { en: 'Grothoz, the Burning Shadow', nl: 'Grothoz, the Burning Shadow' },
    zone: { en: 'Ghostlands border', nl: 'Ghostlands-grens' },
    location: { en: 'Dead Scar area — Prey: Breaking the Blade (alt: Dengzag, the Darkened Blaze)', nl: 'Dead Scar-gebied — Prey: Breaking the Blade (alt.: Dengzag, the Darkened Blaze)' },
    zoneOrder: 2,
    difficulty_rating: 2,
    coords: { en: '/way Ghostlands 35 68', nl: '/way Ghostlands 35 68' },
    pro_tip: {
      tank: { en: 'Twilight fire/shadow mix: face away, save CDs for burn phases.', nl: 'Twilight vuur/schaduw: wegdraaien, CDs voor burn-fasen.' },
      heal: { en: 'Dispel magic curses quickly; ramp for heavy AoE ticks.', nl: 'Dispel magic curses snel; ramp voor zware AoE.' },
      dps: { en: 'Kick channels; avoid spreading fire patches through the group.', nl: 'Kick channels; geen vuurvlekken door de groep slepen.' }
    },
    summary: {
      en: ['Wowhead Prey: Breaking the Blade — Grothoz or Dengzag.', 'Move from fire and shadow zones.', 'Interrupt dangerous casts.'],
      nl: ['Wowhead Prey: Breaking the Blade — Grothoz of Dengzag.', 'Uit vuur- en schaduwzones.', 'Onderbreek gevaarlijke casts.']
    },
    abilities: {
      en: 'Twilight blade prey (Prey: Breaking the Blade).',
      nl: 'Twilight blade-prooi (Prey: Breaking the Blade).'
    },
    fullGuide: {
      en: '<h4>Source</h4><p><strong>Prey: Breaking the Blade</strong> — Grothoz, the Burning Shadow <em>or</em> Dengzag, the Darkened Blaze (Wowhead).</p>',
      nl: '<h4>Bron</h4><p><strong>Prey: Breaking the Blade</strong> — Grothoz, the Burning Shadow <em>of</em> Dengzag, the Darkened Blaze (Wowhead).</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '🎁 Gear & rings', nl: '🎁 Gear & ringen' }
  },
  {
    id: 'senior_tinker_oszwold',
    crafting_drops: [
      {
        label: { en: 'Engineering salvage & gizmo parts', nl: 'Techniek-sloop & gadget-onderdelen' },
        profession: { en: 'Engineering', nl: 'Techniek' },
        used_for: { en: 'Midnight Engineering crafts & upgrades', nl: 'Midnight Techniek-crafts & upgrades' }
      }
    ],
    name: { en: 'Senior Tinker Ozwold', nl: 'Senior Tinker Ozwold' },
    zone: { en: 'Silvermoon City', nl: 'Silvermoon City' },
    location: { en: 'Silvermoon Bazaar (workshop)', nl: 'Silvermoon Bazaar (werkplaats)' },
    zoneOrder: 1,
    difficulty_rating: 2,
    coords: { en: '/way #2393 42.8 31.4', nl: '/way #2393 42.8 31.4' },
    pro_tip: {
      tank: { en: 'Watch for frontal cone wrench slams; pick up loose adds before they buff the boss.', nl: 'Let op frontale moersleutel-slams; pak losse adds vóór ze de boss buffen.' },
      heal: { en: 'Heavy AoE when he deploys turrets — spread slightly, then stack for shield phase.', nl: 'Zware AoE bij turrets — licht spreiden, daarna stacken bij shield-fase.' },
      dps: { en: 'Kick Overclock cast; burn turrets before he reabsorbs them for a damage shield.', nl: 'Kick Overclock; brand turrets vóór hij ze terugzuigt voor een schild.' }
    },
    summary: {
      en: ['Destroy deployable turrets quickly.', 'Interrupt Overclock channels.', 'Avoid grease patches on the floor.'],
      nl: ['Vernietig turrets snel.', 'Onderbreek Overclock.', 'Vermijd vetvlekken op de grond.']
    },
    abilities: {
      en: 'Deployable turrets, Overclock channel, cone attacks.',
      nl: 'Turrets, Overclock-channel, kegel-aanvallen.'
    },
    fullGuide: {
      en: '<h4>Source</h4><p><strong>Prey: Insane Inventors</strong> — Senior Tinker Ozwold <em>or</em> L-N-0R the Recycler (Wowhead).</p><h4>Boss mechanics</h4><p><strong>Overclock:</strong> Interrupt. <strong>Turret Deploy:</strong> Kill adds before reabsorb. <strong>Grease Patch:</strong> Slow — route around.</p>',
      nl: '<h4>Bron</h4><p><strong>Prey: Insane Inventors</strong> — Senior Tinker Ozwold <em>of</em> L-N-0R the Recycler (Wowhead).</p><h4>Boss-mechanieken</h4><p><strong>Overclock:</strong> Onderbreek. <strong>Turret Deploy:</strong> Dood adds vóór reabsorb. <strong>Grease Patch:</strong> Traag — route eromheen.</p>'
    },
    loot: { normal: 220, hard: 233, nightmare: 246 },
    rewardType: { en: '⚙️ Engineering parts & gear', nl: '⚙️ Techniek-onderdelen & gear' }
  }
];


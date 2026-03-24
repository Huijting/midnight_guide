// Prey Targets — WoW: Midnight Season 1 (12 contracts)
// difficulty_rating 1–5 = solo threat (Danger Meter). Loot ~ILVL_MIDNIGHT band (see js/constants.js).
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
    coords: { en: '/way #2395 45 50 Eversong Woods', nl: '/way #2395 45 50 Eversong Woods' },
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
    loot: { normal: 182, hard: 197, nightmare: 212 }
  },
  {
    id: 'deliah_gloomsong',
    crafting_drops: [],
    name: { en: 'Deliah Gloomsong', nl: 'Deliah Gloomsong' },
    zone: { en: 'Eversong Woods', nl: 'Eversong Woods' },
    location: { en: 'East Eversong — Gloomsong rise', nl: 'Oost-Eversong — Gloomsong-heuvel' },
    zoneOrder: 1,
    difficulty_rating: 2,
    coords: { en: '/way #2395 55 62 Eversong Woods', nl: '/way #2395 55 62 Eversong Woods' },
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
    loot: { normal: 182, hard: 197, nightmare: 212 }
  },
  {
    id: 'talon_of_janalaii',
    crafting_drops: [],
    name: { en: "The Talon of Jan'alaii", nl: "De Klauw van Jan'alaii" },
    zone: { en: "Zul'Aman", nl: "Zul'Aman" },
    location: { en: "Zul'Aman — Amani overlook", nl: "Zul'Aman — Amani-uitkijk" },
    zoneOrder: 2,
    difficulty_rating: 3,
    coords: { en: "/way #2437 50 60 Zul'Aman", nl: "/way #2437 50 60 Zul'Aman" },
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
    loot: { normal: 184, hard: 199, nightmare: 215 }
  },
  {
    id: 'wing_of_akilzon',
    crafting_drops: [],
    name: { en: "The Wing of Akil'zon", nl: "De Vleugel van Akil'zon" },
    zone: { en: "Zul'Aman", nl: "Zul'Aman" },
    location: { en: "Zul'Aman — Storm roost", nl: "Zul'Aman — Stormnest" },
    zoneOrder: 2,
    difficulty_rating: 3,
    coords: { en: "/way #2437 55 75 Zul'Aman", nl: "/way #2437 55 75 Zul'Aman" },
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
    loot: { normal: 184, hard: 199, nightmare: 215 }
  },
  {
    id: 'praetor_singularis',
    name: { en: 'Praetor Singularis', nl: 'Praetor Singularis' },
    zone: { en: 'Voidstorm', nl: 'Voidstorm' },
    location: { en: 'Voidstorm — Singular Spire approach', nl: 'Voidstorm — Singular Spire-nadering' },
    zoneOrder: 3,
    difficulty_rating: 4,
    coords: { en: '/way #2405 40 55 Voidstorm', nl: '/way #2405 40 55 Voidstorm' },
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
    loot: { normal: 186, hard: 202, nightmare: 218 },
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
    coords: { en: '/way #2405 48 62 Voidstorm', nl: '/way #2405 48 62 Voidstorm' },
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
    loot: { normal: 186, hard: 202, nightmare: 218 }
  },
  {
    id: 'executor_kaenius',
    crafting_drops: [],
    name: { en: 'Executor Kaenius', nl: 'Executor Kaenius' },
    zone: { en: 'Voidstorm', nl: 'Voidstorm' },
    location: { en: 'Voidstorm — Execution grounds', nl: 'Voidstorm — Executieplein' },
    zoneOrder: 3,
    difficulty_rating: 4,
    coords: { en: '/way #2405 52 48 Voidstorm', nl: '/way #2405 52 48 Voidstorm' },
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
    loot: { normal: 188, hard: 204, nightmare: 220 }
  },
  {
    id: 'imperator_enigmalia',
    crafting_drops: [],
    name: { en: 'Imperator Enigmalia', nl: 'Imperator Enigmalia' },
    zone: { en: 'Voidstorm', nl: 'Voidstorm' },
    location: { en: 'Voidstorm — Enigmalia throne approach', nl: 'Voidstorm — Enigmalia-troon' },
    zoneOrder: 3,
    difficulty_rating: 5,
    coords: { en: '/way #2405 45 70 Voidstorm', nl: '/way #2405 45 70 Voidstorm' },
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
    loot: { normal: 189, hard: 205, nightmare: 222 }
  },
  {
    id: 'void_touched_kaelthas',
    name: { en: "Void-Touched Kael'thas", nl: "Void-Touched Kael'thas" },
    zone: { en: 'Isle of Quel\'Danas', nl: 'Isle of Quel\'Danas' },
    location: { en: 'Sunwell approach — void-corrupted rise', nl: 'Sunwell-nadering — void-besmete richel' },
    zoneOrder: 4,
    difficulty_rating: 5,
    coords: { en: '/way #2404 47 25 Isle of Quel\'Danas', nl: '/way #2404 47 25 Isle of Quel\'Danas' },
    pro_tip: {
      tank: { en: 'Phoenix add phases: pick up sparks immediately; rotate CDs for Arcane Shock “hard hits”.', nl: 'Phoenix-fase: sparks direct pakken; CDs voor Arcane Shock-hard hits.' },
      heal: { en: 'Massive fire ticks: ramp heals before Pyroblast finishes; Grip/CC phoenixes if mechanics allow.', nl: 'Fire ticks: ramp vóór Pyroblast; Grip/CC op phoenixen indien mogelijk.' },
      dps: { en: 'Void Shields on Kael: switch to phoenix to break shield stacks, then burst boss.', nl: 'Void Shields: naar phoenix voor stacks breken, daarna burst boss.' }
    },
    summary: {
      en: ['Kill phoenix adds before they empower the boss.', 'Interrupt Pyroblast or Fireball volleys.', 'Spread for arcane explosions.'],
      nl: ['Dood phoenix-adds vóór empower.', 'Onderbreek Pyroblast of Fireball.', 'Spreid voor arcane-explosies.']
    },
    abilities: {
      en: 'Arcane/Fire hybrid, phoenix adds, shield phases.',
      nl: 'Arcane/Fire, phoenix-adds, shield-fasen.'
    },
    fullGuide: {
      en: '<h4>Before the fight</h4><p>Fill Anguish on the Isle; expect longer ambush paths near the Sunwell gate.</p><h4>Boss mechanics</h4><p><strong>Phoenix:</strong> Kill or shield breaks slowly. <strong>Pyroblast:</strong> Kick. <strong>Arcane Burst:</strong> Spread.</p>',
      nl: '<h4>Voor het gevecht</h4><p>Vul Anguish op het eiland; langere hinderlagen bij Sunwell-poort.</p><h4>Boss-mechanieken</h4><p><strong>Phoenix:</strong> Dood of shield breekt traag. <strong>Pyroblast:</strong> Kick. <strong>Arcane Burst:</strong> Spreiden.</p>'
    },
    loot: { normal: 189, hard: 206, nightmare: 226 },
    crafting_drops: [
      {
        label: { en: '2x Abyssal Shard', nl: '2x Abyssal Shard' },
        profession: { en: 'Blacksmithing', nl: 'Smidskunst' },
        used_for: { en: 'Void-Forged Weapons', nl: 'Void-gesmede wapens' }
      }
    ]
  },
  {
    id: 'silvermoon_stalker',
    crafting_drops: [
      {
        label: { en: '5x Void-Stained Leather', nl: '5x Void-Stained Leather' },
        profession: { en: 'Leatherworking', nl: 'Lederbewerking' },
        used_for: { en: 'Epic Mail/Leather', nl: 'Epische mail/leder' }
      }
    ],
    name: { en: 'Silvermoon Stalker', nl: 'Silvermoon Stalker' },
    zone: { en: 'Silvermoon City outskirts', nl: 'Rand van Silvermoon' },
    location: { en: 'Murder Row gate — eastern ridge', nl: 'Murder Row-poort — oostelijke richel' },
    zoneOrder: 1,
    difficulty_rating: 3,
    coords: { en: '/way #2393 72 58 Eversong / Silvermoon border', nl: '/way #2393 72 58 Eversong / Silvermoon grens' },
    pro_tip: {
      tank: { en: 'Bleed stacks: kite in a circle if mitigation is on cooldown.', nl: 'Bleed stacks: kiten in cirkel als mitigatie op CD is.' },
      heal: { en: 'HoT yourself while moving; stun the stalker out of stealth openers.', nl: 'HoT tijdens beweging; stun uit stealth-opener.' },
      dps: { en: 'Open with CC-break tools; burst after first bleed application drops.', nl: 'CC-break tools; burst na eerste bleed.' }
    },
    summary: {
      en: ['Break stealth with AoE or flares.', 'Dodge pounce bleed combo.', 'Use slow/snare to control kiting.'],
      nl: ['Stealth breken met AoE.', 'Ontwijk pounce-bleed.', 'Slow/snare voor kiten.']
    },
    abilities: {
      en: 'Stealth, bleeds, pounce.',
      nl: 'Stealth, bleeds, pounce.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Shadow Pounce:</strong> Dodge telegraph. <strong>Rending Strike:</strong> Mitigate or kite. <strong>Vanish:</strong> AoE reveal.</p>',
      nl: '<h4>Boss-mechanieken</h4><p><strong>Shadow Pounce:</strong> Ontwijk. <strong>Rending Strike:</strong> Mitigatie of kiten. <strong>Vanish:</strong> AoE reveal.</p>'
    },
    loot: { normal: 183, hard: 198, nightmare: 213 }
  },
  {
    id: 'abyssal_commander',
    crafting_drops: [
      {
        label: { en: '1x Void-Infused Essence', nl: '1x Void-Infused Essence' },
        profession: { en: 'Jewelcrafting', nl: 'Juwelen' },
        used_for: { en: 'High-End Trinkets', nl: 'High-end trinkets' }
      }
    ],
    name: { en: 'Abyssal Commander', nl: 'Abyssal Commander' },
    zone: { en: 'Voidstorm coast', nl: 'Voidstorm-kust' },
    location: { en: 'Shattered abyssal beachhead', nl: 'Gespleten abyssale strandkop' },
    zoneOrder: 3,
    difficulty_rating: 4,
    coords: { en: '/way #2405 62 22 Voidstorm coast', nl: '/way #2405 62 22 Voidstorm-kust' },
    pro_tip: {
      tank: { en: 'Tidal slam = frontal block or sidestep; pick up abyssal crushers before they reach the commander.', nl: 'Tidal slam = frontal blok of opzij; crushers vóór ze commander bereiken.' },
      heal: { en: 'Stack for shared soak only when UI says so; otherwise spread for abyssal barrage.', nl: 'Stack-soak alleen bij UI-call; anders spreiden voor barrage.' },
      dps: { en: 'Priority: crushers > commander shield; use burst when shield breaks mid-cast.', nl: 'Prio: crushers > commander shield; burst bij shield break mid-cast.' }
    },
    summary: {
      en: ['Soak mechanic only when marked.', 'Kill crushers before empower.', 'Dodge tidal line attack.'],
      nl: ['Soak alleen met mark.', 'Dood crushers vóór empower.', 'Ontwijk lijn-aanval.']
    },
    abilities: {
      en: 'Adds, tidal line, shield empower.',
      nl: 'Adds, lijn-aanval, shield empower.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Abyssal Crusher:</strong> Kill. <strong>Tidal Surge:</strong> Line dodge. <strong>Command Shield:</strong> Break with damage.</p>',
      nl: '<h4>Boss-mechanieken</h4><p><strong>Abyssal Crusher:</strong> Dood. <strong>Tidal Surge:</strong> Lijn ontwijken. <strong>Command Shield:</strong> Schade.</p>'
    },
    loot: { normal: 187, hard: 203, nightmare: 219 }
  },
  {
    id: 'twilight_riftstalker',
    crafting_drops: [],
    name: { en: 'Twilight Riftstalker', nl: 'Twilight Riftstalker' },
    zone: { en: 'Ghostlands border', nl: 'Ghostlands-grens' },
    location: { en: 'Dead Scar twilight tear', nl: 'Dead Scar scheur' },
    zoneOrder: 2,
    difficulty_rating: 2,
    coords: { en: '/way #2396 35 68 Ghostlands', nl: '/way #2396 35 68 Ghostlands' },
    pro_tip: {
      tank: { en: 'Rift pulsing damage: stand in golden quest zone if one spawns for damage reduction.', nl: 'Rift-puls: gouden questzone indien aanwezig voor DR.' },
      heal: { en: 'Dispel Twilight Corruption; use knockbacks to interrupt rift channel if class allows.', nl: 'Dispel Twilight Corruption; knockback om rift-channel te breken.' },
      dps: { en: 'Kick rift channel; line burst with trinkets after first interrupt lockout.', nl: 'Kick rift channel; burst met trinkets na eerste interrupt lockout.' }
    },
    summary: {
      en: ['Close small rifts quickly.', 'Interrupt Twilight channel.', 'Avoid purple tether lines.'],
      nl: ['Sluit kleine rifts snel.', 'Onderbreek Twilight channel.', 'Ontwijk paarse tethers.']
    },
    abilities: {
      en: 'Rifts, tether lines, corruption DoT.',
      nl: 'Rifts, tethers, corruption DoT.'
    },
    fullGuide: {
      en: '<h4>Boss mechanics</h4><p><strong>Twilight Rift:</strong> Stand in and DPS or kick channel. <strong>Tether:</strong> Break LOS or kill add.</p>',
      nl: '<h4>Boss-mechanieken</h4><p><strong>Twilight Rift:</strong> Erin en DPS of kick channel. <strong>Tether:</strong> LOS of add dood.</p>'
    },
    loot: { normal: 181, hard: 196, nightmare: 211 }
  }
];

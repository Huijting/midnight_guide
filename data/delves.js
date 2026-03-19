// Delves — WoW: Midnight Season 1
// Bountiful rotation, loot table, Wowhead links
// Source: NextTier, Icy Veins, Wowhead (March 2026)

const DELVES_DATA = {
  // Alle Midnight Delves met Wowhead zone-links en tactieken
  delves: [
    { id: 'shadow_enclave', name: 'The Shadow Enclave', zone: 16594, url: 'https://www.wowhead.com/zone=16594/the-shadow-enclave', zoneName: 'Eversong Woods',
      tactics: { nl: 'Vermijd Void-pools op de grond. Interrupt Shadow Bolt. Gebruik Valeera voor extra DPS op elites. Checkpoint na 2e objective.', en: 'Avoid Void pools on ground. Interrupt Shadow Bolt. Use Valeera for extra DPS on elites. Checkpoint after 2nd objective.', da: 'Undgå Void-pytter. Afbryd Shadow Bolt. Brug Valeera til ekstra DPS.' }},
    { id: 'collegiate_calamity', name: 'Collegiate Calamity', zone: 16545, url: 'https://www.wowhead.com/zone=16545/collegiate-calamity', zoneName: 'Silvermoon City',
      tactics: { nl: 'Dispel magische debuffs. Kite grote packs. Finale boss: uit de frontale cone. Levens bewaren voor Bountiful chest.', en: 'Dispel magic debuffs. Kite large packs. Final boss: avoid frontal cone. Save lives for Bountiful chest.', da: 'Dispel magiske debuffs. Kite store grupper. Undgå frontal cone på boss.' }},
    { id: 'parhelion_plaza', name: 'Parhelion Plaza', zone: 16542, url: 'https://www.wowhead.com/zone=16542/parhelion-plaza', zoneName: 'Isle of Quel\'Danas',
      tactics: { nl: 'Zon-mechanic: sta in schaduw of brand. Interrupt Arcane casts. Valeera op Sun Priests. Checkpoint voor finale.', en: 'Sun mechanic: stand in shadow or burn. Interrupt Arcane casts. Valeera on Sun Priests. Checkpoint before final.', da: 'Sol-mekanik: stå i skygge eller brænd. Afbryd Arcane casts.' }},
    { id: 'the_darkway', name: 'The Darkway', zone: 16642, url: 'https://www.wowhead.com/zone=16642/the-darkway', zoneName: 'Silvermoon City',
      tactics: { nl: 'Donkere paden: volg het licht. Vermijd Void-zones. Interrupt Mind Control. Groepeer mobs voor AoE.', en: 'Dark paths: follow the light. Avoid Void zones. Interrupt Mind Control. Group mobs for AoE.', da: 'Mørke stier: følg lyset. Undgå Void-zoner. Afbryd Mind Control.' }},
    { id: 'twilight_crypts', name: 'Twilight Crypts', zone: 16557, url: 'https://www.wowhead.com/zone=16557/twilight-crypts', zoneName: 'Zul\'Aman',
      tactics: { nl: 'Undead: gebruik Holy/Shadow damage. Vermijd totem AoE. Finale: dispel Curse of Agony. Levens voor Bountiful.', en: 'Undead: use Holy/Shadow damage. Avoid totem AoE. Final: dispel Curse of Agony. Save lives for Bountiful.', da: 'Undead: brug Holy/Shadow skade. Undgå totem AoE.' }},
    { id: 'atalaman', name: 'Atal\'Aman', zone: 16194, url: 'https://www.wowhead.com/zone=16194/atalaman', zoneName: 'Zul\'Aman',
      tactics: { nl: 'Troll-mechanics: interrupt Hex. Kite Berserkers. Gebruik stuns op healers. Checkpoint na eerste boss.', en: 'Troll mechanics: interrupt Hex. Kite Berserkers. Use stuns on healers. Checkpoint after first boss.', da: 'Troll-mekanik: afbryd Hex. Kite Berserkers.' }},
    { id: 'grudge_pit', name: 'The Grudge Pit', zone: 16548, url: 'https://www.wowhead.com/zone=16548/the-grudge-pit', zoneName: 'Harandar',
      tactics: { nl: 'Arena-style: focus één target. Vermijd grond-effecten. Interrupt Execute-achtige abilities. Valeera voor burst.', en: 'Arena-style: focus one target. Avoid ground effects. Interrupt Execute-like abilities. Valeera for burst.', da: 'Arena-stil: fokuser ét mål. Undgå jordeffekter.' }},
    { id: 'gulf_of_memory', name: 'The Gulf of Memory', zone: 16595, url: 'https://www.wowhead.com/zone=16595/the-gulf-of-memory', zoneName: 'Harandar',
      tactics: { nl: 'Memory-mechanic: onthoud volgorde. Dispel Confusion. Kite grote packs. Finale: uit de beam.', en: 'Memory mechanic: remember sequence. Dispel Confusion. Kite large packs. Final: avoid beam.', da: 'Hukommelses-mekanik: husk rækkefølge. Dispel Confusion.' }},
    { id: 'sunkiller_sanctum', name: 'Sunkiller Sanctum', zone: 16592, url: 'https://www.wowhead.com/zone=16592/sunkiller-sanctum', zoneName: 'Voidstorm',
      tactics: { nl: 'Void + Sun mix. Interrupt Solar Flare. Vermijd Void fissures. Gebruik defensives op grote pulls.', en: 'Void + Sun mix. Interrupt Solar Flare. Avoid Void fissures. Use defensives on big pulls.', da: 'Void + Sol mix. Afbryd Solar Flare. Undgå Void-spalter.' }},
    { id: 'shadowguard_point', name: 'Shadowguard Point', zone: 16549, url: 'https://www.wowhead.com/zone=16549/shadowguard-point', zoneName: 'Voidstorm',
      tactics: { nl: 'Shadow damage zwaar. Gebruik defensives. Interrupt Shadow Crash. Valeera voor extra survivability.', en: 'Shadow damage heavy. Use defensives. Interrupt Shadow Crash. Valeera for extra survivability.', da: 'Shadow-skade tung. Brug defensives. Afbryd Shadow Crash.' }},
    { id: 'torments_rise', name: 'Torment\'s Rise', zone: 16596, url: 'https://www.wowhead.com/zone=16596/torments-rise', zoneName: 'Voidstorm (Nemesis)',
      tactics: { nl: 'Nemesis Delve — moeilijkste. Strakke pulls. Bewaar alle levens. Interrupt alles. Valeera op survival-curios.', en: 'Nemesis Delve — hardest. Tight pulls. Save all lives. Interrupt everything. Valeera on survival curios.', da: 'Nemesis Delve — sværeste. Stramme pulls. Gem alle liv.' }},
  ],

  // Loot table — Midnight Season 1 (van NextTier)
  // Tier 8+: Bountiful Coffer 250, Trovehunter's Bounty 259, Great Vault 259
  lootTable: [
    { tier: 1,  bountiful: 220, trovehunter: '—', greatVault: 233 },
    { tier: 2,  bountiful: 224, trovehunter: '—', greatVault: 237 },
    { tier: 3,  bountiful: 227, trovehunter: '—', greatVault: 240 },
    { tier: 4,  bountiful: 230, trovehunter: 237, greatVault: 243 },
    { tier: 5,  bountiful: 233, trovehunter: 246, greatVault: 246 },
    { tier: 6,  bountiful: 240, trovehunter: 253, greatVault: 253 },
    { tier: 7,  bountiful: 246, trovehunter: 256, greatVault: 256 },
    { tier: 8,  bountiful: 250, trovehunter: 259, greatVault: 259 },
    { tier: 9,  bountiful: 250, trovehunter: 259, greatVault: 259 },
    { tier: 10, bountiful: 250, trovehunter: 259, greatVault: 259 },
    { tier: 11, bountiful: 250, trovehunter: 259, greatVault: 259 },
  ],

  // Key info — meertalig
  keyInfo: {
    nl: 'Sleutels zijn nu Currency! 100 Key Shards worden automatisch 1 Restored Coffer Key in je Currency-tab.',
    en: 'Keys are now Currency! 100 Key Shards automatically become 1 Restored Coffer Key in your Currency tab.',
    da: 'Nøgler er nu Currency! 100 Key Shards bliver automatisk til 1 Restored Coffer Key i din Currency-fane.',
  },
};

// Bountiful Delves — 4 per week, roteert op woensdag reset
// Gebruik weeknummer sinds 2026-03-19 (Season 1 start) om te bepalen welke 4
function getBountifulDelvesThisWeek() {
  const DELVES = DELVES_DATA.delves;
  const startDate = new Date('2026-03-19');
  const now = new Date();
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const weekNum = Math.floor((now - startDate) / msPerWeek);
  const count = 4;
  const indices = [];
  for (let i = 0; i < count; i++) {
    indices.push((weekNum * count + i) % DELVES.length);
  }
  return indices.map(i => DELVES[i]);
}

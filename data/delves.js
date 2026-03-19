// Delves — WoW: Midnight Season 1
// Alle Midnight Delves met /way coördinaten, loot table, Wowhead links
// Source: NextTier, Icy Veins, Wowhead (March 2026)

const DELVES_DATA = {
  // Alle Midnight Delves met zone, /way en Wowhead-links
  delves: [
    { id: 'shadow_enclave', name: 'The Shadow Enclave', zoneName: 'Eversong Woods', way: '/way #2248 45.5 86.0', url: 'https://www.wowhead.com/zone=16594/the-shadow-enclave' },
    { id: 'collegiate_calamity', name: 'Collegiate Calamity', zoneName: 'Silvermoon City', way: '/way #2248 40.6 53.7', url: 'https://www.wowhead.com/zone=16545/collegiate-calamity' },
    { id: 'parhelion_plaza', name: 'Parhelion Plaza', zoneName: "Isle of Quel'Danas, Sunwell Ramparts", way: '/way #2248 46.8 40.9', url: 'https://www.wowhead.com/zone=16542/parhelion-plaza' },
    { id: 'the_darkway', name: 'The Darkway', zoneName: 'Silvermoon City', way: '/way #2248 39.3 31.7', url: 'https://www.wowhead.com/zone=16642/the-darkway' },
    { id: 'twilight_crypts', name: 'Twilight Crypts', zoneName: "Zul'Aman", way: '/way #2248 25.4 84.4', url: 'https://www.wowhead.com/zone=16557/twilight-crypts' },
    { id: 'atalaman', name: "Atal'Aman", zoneName: "Zul'Aman Region", way: '/way #2248 63.7 80.1', url: 'https://www.wowhead.com/zone=16194/atalaman' },
    { id: 'grudge_pit', name: 'The Grudge Pit', zoneName: 'Harandar', way: '/way #2248 70.4 64.8', url: 'https://www.wowhead.com/zone=16548/the-grudge-pit' },
    { id: 'gulf_of_memory', name: 'The Gulf of Memory', zoneName: 'Harandar', way: '/way #2248 36.7 49.6', url: 'https://www.wowhead.com/zone=16595/the-gulf-of-memory' },
    { id: 'sunkiller_sanctum', name: 'Sunkiller Sanctum', zoneName: 'Voidstorm', way: '/way #2248 54.8 47.1', url: 'https://www.wowhead.com/zone=16592/sunkiller-sanctum' },
    { id: 'shadowguard_point', name: 'Shadowguard Point', zoneName: 'Voidstorm', way: '/way #2248 37.1 49.1', url: 'https://www.wowhead.com/zone=16549/shadowguard-point' },
    { id: 'torments_rise', name: "Torment's Rise", zoneName: 'Voidstorm, South to Nexus-Point Xenas', way: null, url: 'https://www.wowhead.com/zone=16596/torments-rise' },
    { id: 'den_of_echoes', name: "The Den of Echoes", zoneName: '—', way: null, url: 'https://www.wowhead.com/search?q=The+Den+of+Echoes' },
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
    nl: 'Bij een Bountiful Coffer (aan het einde van een Bountiful Delve) checkt WoW automatisch of je 100 Key Shards hebt. Heb je genoeg? Dan kun je de coffer openen — de shards worden dan direct verbruikt.',
    en: 'At a Bountiful Coffer (at the end of a Bountiful Delve), WoW automatically checks if you have 100 Key Shards. Got enough? You can open the coffer — the shards are consumed on the spot.',
    da: 'Ved en Bountiful Coffer (i slutningen af et Bountiful Delve) tjekker WoW automatisk om du har 100 Key Shards. Har du nok? Så kan du åbne coffer\'en — shards bliver brugt på stedet.',
  },
};

// Bountiful Delves — dagelijks; implementatie volgt later

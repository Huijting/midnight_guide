// ============================================================
// KP_SOURCES — Midnight KP Bronnen: schatten per professie
// Coördinaten: wow-professions.com (maart 2026)
// Zone IDs: #2393 Silvermoon City, #2395 Eversong Woods,
//           #2437 Zul'Aman, #2536 Atal'Aman, #2413 Harandar,
//           #2405 Voidstorm, #2444 Slayer's Rise
// ============================================================

const KP_SOURCES = {

  alchemy: {
    treasures: [
      { name:"Pristine Potion",               zone:"Silvermoon City", way:"/way #2393 47.8 51.8",  note:"Vlieg omhoog — op het dak achter de Alchemy trainer" },
      { name:"Vial of Eversong Oddities",     zone:"Silvermoon City", way:"/way #2393 45.1 44.7" },
      { name:"Freshly Plucked Peacebloom",    zone:"Silvermoon City", way:"/way #2393 49.1 75.8" },
      { name:"Vial of Zul'Aman Oddities",     zone:"Zul'Aman",        way:"/way #2437 40.4 51.1" },
      { name:"Measured Ladle",                zone:"Atal'Aman",       way:"/way #2536 49.1 23.6",  note:"Mogelijk gefased — campaign voortgang nodig" },
      { name:"Vial of Rootlands Oddities",    zone:"Harandar",        way:"/way #2413 34.8 24.7",  note:"Binnen het gebouw" },
      { name:"Failed Experiment",             zone:"Voidstorm",       way:"/way #2405 32.8 43.3" },
      { name:"Vial of Voidstorm Oddities",    zone:"Voidstorm",       way:"/way #2444 41.9 40.6" },
    ]
  },

  blacksmithing: {
    treasures: [
      { name:"Sin'dorei Master's Forgemace",    zone:"Silvermoon City", way:"/way #2393 49.2 61.3" },
      { name:"Silvermoon Blacksmith's Hammer",  zone:"Silvermoon City", way:"/way #2393 48.5 74.7" },
      { name:"Deconstructed Forge Techniques",  zone:"Silvermoon City", way:"/way #2393 26.9 60.3" },
      { name:"Metalworking Cheat Sheet",        zone:"Eversong Woods",  way:"/way #2395 56.8 40.8" },
      { name:"Silvermoon Smithing Kit",         zone:"Eversong Woods",  way:"/way #2395 48.3 75.8" },
      { name:"Carefully Racked Spear",          zone:"Atal'Aman",       way:"/way #2536 33.2 65.9",  note:"Mogelijk gefased — campaign voortgang nodig" },
      { name:"Rutaani Floratender's Sword",     zone:"Harandar",        way:"/way #2413 66.3 50.9",  note:"Bovenop de paddenstoel" },
      { name:"Voidstorm Defense Spear",         zone:"Voidstorm",       way:"/way #2444 30.6 69.0" },
    ]
  },

  enchanting: {
    treasures: [
      { name:"Sin'dorei Enchanting Rod",  zone:"Eversong Woods", way:"/way #2395 63.5 32.6" },
      { name:"Everblazing Sunmote",       zone:"Eversong Woods", way:"/way #2395 60.8 53.0" },
      { name:"Enchanted Sunfire Silk",    zone:"Eversong Woods", way:"/way #2395 40.2 61.2" },
      { name:"Loa-Blessed Dust",          zone:"Zul'Aman",       way:"/way #2437 40.4 51.1" },
      { name:"Enchanted Amani Mask",      zone:"Atal'Aman",      way:"/way #2536 48.4 22.9",  note:"Mogelijk gefased — campaign voortgang nodig" },
      { name:"Primal Essence Orb",        zone:"Harandar",       way:"/way #2413 65.8 50.2" },
      { name:"Entropic Shard",            zone:"Harandar",       way:"/way #2413 37.7 65.3" },
      { name:"Pure Void Crystal",         zone:"Voidstorm",      way:"/way #2405 35.5 58.8" },
    ]
  },

  engineering: {
    treasures: [
      { name:"One Engineer's Junk",          zone:"Silvermoon City", way:"/way #2393 51.2 74.6" },
      { name:"What To Do When Nothing Works",zone:"Silvermoon City", way:"/way #2393 51.3 57.0" },
      { name:"Manual of Mistakes and Mishaps",zone:"Eversong Woods", way:"/way #2395 39.6 45.8" },
      { name:"Handy Wrench",                 zone:"Zul'Aman",        way:"/way #2437 34.2 87.8" },
      { name:"Offline Helper Bot",           zone:"Atal'Aman",       way:"/way #2536 65.3 35.0",  note:"Mogelijk gefased — campaign voortgang nodig" },
      { name:"Expeditious Pylon",            zone:"Harandar",        way:"/way #2413 68.0 49.8",  note:"Bovenop de paddenstoel" },
      { name:"Ethereal Stormwrench",         zone:"Voidstorm",       way:"/way #2444 54.1 51.1" },
      { name:"Miniaturized Transport Skiff", zone:"Voidstorm",       way:"/way #2444 28.9 39.1" },
    ]
  },

  inscription: {
    treasures: [
      { name:"Songwriter's Pen",            zone:"Silvermoon City", way:"/way #2393 47.7 50.4",  note:"Vlieg omhoog — op het dak achter de Alchemy trainer" },
      { name:"Songwriter's Quill",          zone:"Eversong Woods",  way:"/way #2395 40.3 61.2",  note:"Binnen het gebouw" },
      { name:"Spare Ink",                   zone:"Eversong Woods",  way:"/way #2395 48.3 75.6" },
      { name:"Half-Baked Techniques",       zone:"Eversong Woods",  way:"/way #2395 39.3 45.4" },
      { name:"Leather-Bound Techniques",    zone:"Zul'Aman",        way:"/way #2437 40.5 49.4",  note:"Binnen de grot" },
      { name:"Leftover Sanguithorn Pigment",zone:"Harandar",        way:"/way #2413 52.7 50.0" },
      { name:"Intrepid Explorer's Marker",  zone:"Harandar",        way:"/way #2413 52.4 52.6",  note:"Vlieg omhoog — op de wortels boven je" },
      { name:"Void-Touched Quill",          zone:"Voidstorm",       way:"/way #2444 60.7 84.3",  note:"Binnen het gebouw" },
    ]
  },

  jewelcrafting: {
    treasures: [
      { name:"Sin'dorei Masterwork Chisel",    zone:"Silvermoon City", way:"/way #2393 50.6 56.6" },
      { name:"Vintage Soul Gem",               zone:"Silvermoon City", way:"/way #2393 55.4 48.0" },
      { name:"Dual-Function Magnifiers",       zone:"Silvermoon City", way:"/way #2393 28.6 46.5" },
      { name:"Poorly Rounded Vial",            zone:"Eversong Woods",  way:"/way #2395 56.6 40.9" },
      { name:"Sin'dorei Gem Faceters",         zone:"Eversong Woods",  way:"/way #2395 39.6 38.9" },
      { name:"Speculative Voidstorm Crystal",  zone:"Voidstorm",       way:"/way #2444 30.5 69.1" },
      { name:"Ethereal Gem Pliers",            zone:"Voidstorm",       way:"/way #2444 54.2 51.2" },
      { name:"Shattered Glass",                zone:"Voidstorm",       way:"/way #2444 62.7 53.4" },
    ]
  },

  leatherworking: {
    treasures: [
      { name:"Artisan's Considered Order",      zone:"Silvermoon City", way:"/way #2393 44.8 56.2" },
      { name:"Bundle of Tanner's Trinkets",     zone:"Atal'Aman",       way:"/way #2536 45.4 45.5",  note:"Mogelijk gefased — campaign voortgang nodig" },
      { name:"Amani Leatherworker's Tool",      zone:"Zul'Aman",        way:"/way #2437 33.1 78.9" },
      { name:"Prestigiously Racked Hide",       zone:"Zul'Aman",        way:"/way #2437 30.8 84.0" },
      { name:"Ethereal Leatherworking Knife",   zone:"Voidstorm",       way:"/way #2405 34.7 57.0" },
      { name:"Haranir Leatherworking Mallet",   zone:"Harandar",        way:"/way #2413 51.7 51.3" },
      { name:"Haranir Leatherworking Knife",    zone:"Harandar",        way:"/way #2413 36.1 25.2" },
      { name:"Patterns: Beyond the Void",       zone:"Voidstorm",       way:"/way #2444 53.7 51.7" },
    ]
  },

  tailoring: {
    treasures: [
      { name:"A Really Nice Curtain",             zone:"Silvermoon City", way:"/way #2393 35.9 61.3" },
      { name:"Particularly Enchanting Tablecloth",zone:"Silvermoon City", way:"/way #2393 31.8 68.2" },
      { name:"Sin'dorei Outfitter's Ruler",       zone:"Eversong Woods",  way:"/way #2395 46.3 34.8" },
      { name:"Artisan's Cover Comb",              zone:"Zul'Aman",        way:"/way #2437 40.5 49.4",  note:"Binnen de grot" },
      { name:"Wooden Weaving Sword",              zone:"Harandar",        way:"/way #2413 69.8 51.0" },
      { name:"A Child's Stuffy",                  zone:"Harandar",        way:"/way #2413 70.5 50.9" },
      { name:"Book of Sin'dorei Stitches",        zone:"Voidstorm",       way:"/way #2444 62.0 83.6" },
      { name:"Satin Throw Pillow",                zone:"Voidstorm",       way:"/way #2444 61.6 85.0" },
    ]
  },

  herbalism: {
    treasures: [
      { name:"Simple Leaf Pruners",     zone:"Silvermoon City", way:"/way #2393 49.0 75.9" },
      { name:"A Spade",                 zone:"Eversong Woods",  way:"/way #2395 64.2 30.5" },
      { name:"Harvester's Sickle",      zone:"Zul'Aman",        way:"/way #2437 41.9 45.9",  note:"Plukt ook de Harandar versie leeg — pak de dichtstbijzijnde" },
      { name:"Peculiar Lotus",          zone:"Voidstorm",       way:"/way #2405 34.7 57.0" },
      { name:"Planting Shovel",         zone:"Harandar",        way:"/way #2413 51.1 55.7" },
      { name:"Bloomed Bud",             zone:"Harandar",        way:"/way #2413 38.3 66.9" },
      { name:"Lightbloom Root",         zone:"Harandar",        way:"/way #2413 36.6 25.1" },
      { name:"Harvester's Sickle",      zone:"Harandar",        way:"/way #2413 76.1 51.1",  note:"Plukt ook de Zul'Aman versie leeg — pak de dichtstbijzijnde" },
    ]
  },

  mining: {
    treasures: [
      { name:"Solid Ore Punchers",        zone:"Eversong Woods", way:"/way #2395 38.0 45.4" },
      { name:"Amani Expert's Chisel",     zone:"Atal'Aman",      way:"/way #2536 33.4 65.9",  note:"Mogelijk gefased — campaign voortgang nodig" },
      { name:"Spelunker's Lucky Charm",   zone:"Zul'Aman",       way:"/way #2437 42.0 46.5" },
      { name:"Spare Expedition Torch",    zone:"Harandar",       way:"/way #2413 38.8 65.9" },
      { name:"Star Metal Deposit",        zone:"Voidstorm",      way:"/way #2405 41.8 38.3" },
      { name:"Miner's Guide to Voidstorm",zone:"Voidstorm",      way:"/way #2444 30.5 69.1" },
      { name:"Glimmering Void Pearl",     zone:"Voidstorm",      way:"/way #2444 28.7 38.5" },
      { name:"Lost Voidstorm Satchel",    zone:"Voidstorm",      way:"/way #2444 54.2 51.5" },
    ]
  },

  skinning: {
    treasures: [
      { name:"Sin'dorei Tanning Oil",      zone:"Silvermoon City", way:"/way #2393 43.2 55.7" },
      { name:"Thalassian Skinning Knife",  zone:"Eversong Woods",  way:"/way #2395 48.4 76.26" },
      { name:"Cadre Skinning Knife",       zone:"Atal'Aman",       way:"/way #2536 44.91 45.17", note:"Mogelijk gefased — campaign voortgang nodig" },
      { name:"Amani Skinning Knife",       zone:"Zul'Aman",        way:"/way #2437 33.08 79.07" },
      { name:"Amani Tanning Oil",          zone:"Zul'Aman",        way:"/way #2437 40.39 36.01" },
      { name:"Primal Hide",                zone:"Harandar",        way:"/way #2413 69.52 49.18" },
      { name:"Lightbloom Afflicted Hide",  zone:"Harandar",        way:"/way #2413 76.0 51.0" },
      { name:"Voidstorm Leather Sample",   zone:"Voidstorm",       way:"/way #2444 45.5 42.3" },
    ]
  },

  // Cooking en Fishing hebben geen profession treasures
  cooking: { treasures: [] },
  fishing: { treasures: [] },

};

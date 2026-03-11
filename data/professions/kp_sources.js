// ============================================================
// KP_SOURCES — Midnight Profession Knowledge Point bronnen
// Gegenereerd op basis van wow-professions.com & method.gg
// Bevat: Schatten (/way), Wekelijks, Eenmalig, Darkmoon, Tips
// ============================================================

const KP_SOURCES = {

  alchemy: {
    treasures: [
      { name: "Pristine Potion",            zone: "Silvermoon City",    way: "/way #2393 47.8, 51.8", note: "Vlieg omhoog — staat op dak achter de Alchemy trainer" },
      { name: "Vial of Eversong Oddities",  zone: "Silvermoon City",    way: "/way #2393 45.1, 44.7", note: "Op een bankje vlak voor de brug naar de Sunwell. Kan gefaseerd zijn — laat je uitnodigen als hij niet zichtbaar is" },
      { name: "Freshly Plucked Peacebloom", zone: "Silvermoon City",    way: "/way #2393 49.1, 75.8", note: "Klein bloemetje net buiten het Veilinghuis" },
      { name: "Vial of Zul'Aman Oddities",  zone: "Zul'Aman",           way: "/way #2437 40.4, 51.1" },
      { name: "Measured Ladle",             zone: "Zul'Aman (Atal'Aman)", way: "/way #2536 49.1, 23.6", note: "⚠️ Gefaseerd — doe eerst de campaign van Zul'Aman" },
      { name: "Vial of Rootlands Oddities", zone: "Harandar",           way: "/way #2413 34.8, 24.7", note: "In een gebouw" },
      { name: "Failed Experiment",          zone: "Voidstorm",          way: "/way #2405 32.8, 43.3" },
      { name: "Vial of Voidstorm Oddities", zone: "Voidstorm (Slayer's Rise)", way: "/way #2444 41.9, 40.6" }
    ],
    weekly: [
      { source: "Patron Orders quest",      kp: "~10–15",  note: "Craft specifieke items op hoge kwaliteit voor NPC-orders" },
      { source: "Willekeurige schatkisten", kp: "tot 4",   note: "Vlieg laag over Eversong / Zul'Aman — zoek 2 kistjes per week. Gebruik SilverDragon addon voor alerts" },
      { source: "Inscription Treatise",     kp: "1",       note: "Koop van AH of vraag aan Inscription-alt. BoP — geef als crafting order op" },
      { source: "Wekelijkse trainer-quest", kp: "varies",  note: "Haal bij je Alchemy trainer in Silvermoon City" }
    ],
    onetime: [
      { source: "8× Schat (alle 8 items)",        kp: "24",  note: "Eenmalig per character, te herhalen op alts" },
      { source: "Renown boek — Skill Issue: Alchemy", kp: "10", note: "Koop bij Caeris Fairdawn (Eversong Woods) voor 75 Artisan Alchemist's Moxie. Vereist Renown 6 met Silvermoon Court" },
      { source: "Abundance Event — Echo of Abundance: Alchemy", kp: "10", note: "Koop bij Chel the Chip voor 1600 Unalloyed Abundance + 75 Moxie. Let op: event soms gebugd" }
    ],
    darkmoon: { quest: "Elixir of the Masters", reward: "2 skill + 3 KP", note: "Maandelijks — doe het zo laat mogelijk in je leveling voor max skill waarde" },
    tip: "🧪 Tip: Inscription Treatise is de makkelijkste wekelijkse +1 KP — laat een Inscription-alt het voor je maken of koop het op AH."
  },

  blacksmithing: {
    treasures: [
      { name: "Sin'dorei Master's Forgemace",    zone: "Silvermoon City",    way: "/way #2393 49.2, 61.3" },
      { name: "Silvermoon Blacksmith's Hammer",  zone: "Silvermoon City",    way: "/way #2393 48.5, 74.7" },
      { name: "Deconstructed Forge Techniques",  zone: "Silvermoon City",    way: "/way #2393 26.9, 60.3" },
      { name: "Metalworking Cheat Sheet",        zone: "Eversong Woods",     way: "/way #2395 56.8, 40.8" },
      { name: "Silvermoon Smithing Kit",         zone: "Eversong Woods",     way: "/way #2395 48.3, 75.8" },
      { name: "Carefully Racked Spear",          zone: "Zul'Aman (Atal'Aman)", way: "/way #2536 33.2, 65.9", note: "⚠️ Gefaseerd — doe eerst de campaign van Zul'Aman" },
      { name: "Rutaani Floratender's Sword",     zone: "Harandar",           way: "/way #2413 66.3, 50.9", note: "Boven op de paddenstoel" },
      { name: "Voidstorm Defense Spear",         zone: "Voidstorm (Slayer's Rise)", way: "/way #2444 30.6, 69.0" }
    ],
    weekly: [
      { source: "Patron Orders quest",      kp: "~15–20", note: "Craft wapens/armor op hoge kwaliteit voor NPC-orders" },
      { source: "Willekeurige schatkisten", kp: "tot 4",  note: "Vlieg laag over Eversong / Zul'Aman — 2 kistjes per week" },
      { source: "Inscription Treatise",     kp: "1",      note: "Koop van AH of Inscription-alt" },
      { source: "Wekelijkse trainer-quest", kp: "varies", note: "Bij je Blacksmithing trainer in Silvermoon City" }
    ],
    onetime: [
      { source: "8× Schat",                    kp: "24", note: "Eenmalig per character" },
      { source: "Renown boek — Skill Issue: Blacksmithing", kp: "10", note: "Caeris Fairdawn, Eversong Woods — Renown 6 Silvermoon Court" },
      { source: "Abundance Event",             kp: "10", note: "Chel the Chip — 1600 Unalloyed Abundance + 75 Moxie" }
    ],
    darkmoon: { quest: "Rearm, Reuse, Recycle", npc: "Rinling", reward: "2 skill + 3 KP", note: "Maandelijks" },
    tip: "⚒️ Tip: ~31 KP per week mogelijk. Blacksmithing craft zijn eigen Hammer + Toolbox — plan Craftsmithing spec voor prof tools."
  },

  cooking: {
    treasures: [],
    weekly: [
      { source: "Patron Orders quest",      kp: "varies", note: "Craft maaltijden en feesten voor NPC-orders" },
      { source: "Willekeurige schatkisten", kp: "tot 4",  note: "Vlieg laag over Eversong / Zul'Aman — 2 kistjes per week" },
      { source: "Inscription Treatise",     kp: "1",      note: "Koop van AH of Inscription-alt" }
    ],
    onetime: [
      { source: "Renown boek", kp: "10", note: "Vereist Renown 6 met een fractie" },
      { source: "Abundance Event", kp: "10", note: "Chel the Chip — 1600 Unalloyed Abundance + 75 Moxie" }
    ],
    darkmoon: { quest: "Cooking competition quest", reward: "2 skill + 3 KP", note: "Maandelijks tijdens Darkmoon Faire" },
    tip: "🍳 Tip: Cooking-schatten zijn nog niet volledig gedocumenteerd in externe guides — gebruik Myu's KP Tracker addon voor exacte locaties."
  },

  enchanting: {
    treasures: [
      { name: "Sin'dorei Enchanting Rod", zone: "Eversong Woods",     way: "/way #2395 63.5, 32.6" },
      { name: "Everblazing Sunmote",      zone: "Eversong Woods",     way: "/way #2395 60.8, 53.0" },
      { name: "Enchanted Sunfire Silk",   zone: "Eversong Woods",     way: "/way #2395 40.2, 61.2", note: "Begane grond van een toren in west Eversong, Goldenmist Village — onder een tafel" },
      { name: "Loa-Blessed Dust",         zone: "Zul'Aman",           way: "/way #2437 40.4, 51.1" },
      { name: "Enchanted Amani Mask",     zone: "Zul'Aman (Atal'Aman)", way: "/way #2536 48.4, 22.9", note: "⚠️ Gefaseerd — doe eerst de campaign van Zul'Aman" },
      { name: "Primal Essence Orb",       zone: "Harandar",           way: "/way #2413 65.8, 50.2" },
      { name: "Entropic Shard",           zone: "Harandar",           way: "/way #2413 37.7, 65.3" },
      { name: "Pure Void Crystal",        zone: "Voidstorm",          way: "/way #2405 35.5, 58.8" }
    ],
    weekly: [
      { source: "Disenchanten (5× Swirling Arcane Essence)", kp: "varies", note: "Enchanting heeft GEEN Patron Orders — disenchant gear ipv crafting orders" },
      { source: "Disenchanten (1× Brimming Mana Shard)", kp: "varies", note: "Vervolg na de Arcane Essences" },
      { source: "Wekelijkse schatten: Lost Thalassian Vellum + Voidstorm Ashes", kp: "varies", note: "Loot deze 2 specifieke weekly items in de open wereld" },
      { source: "Inscription Treatise",  kp: "1", note: "Koop van AH of Inscription-alt" },
      { source: "Glimmering Powder (catch-up)", kp: "+1 per drop", note: "Dropt bij disenchanten als je achterloopt op max KP — passief catch-up systeem" }
    ],
    onetime: [
      { source: "8× Schat",              kp: "24", note: "Eenmalig per character" },
      { source: "Renown boek — Skill Issue: Enchanting", kp: "10", note: "Caeris Fairdawn, Eversong Woods — Renown 6 Silvermoon Court" },
      { source: "Abundance Event — Echo of Abundance: Enchanting", kp: "10", note: "Chel the Chip — 1600 Unalloyed Abundance + 75 Moxie" }
    ],
    darkmoon: { quest: "Enchanting quest (Darkmoon Faire)", reward: "2 skill + 3 KP", note: "Maandelijks" },
    tip: "✨ Tip: Enchanting is uniek — geen Patron Orders maar disenchanten. Zorg dat je first de 2 weekly disenchant doelen haalt, daarna dropt Glimmering Powder als catch-up."
  },

  engineering: {
    treasures: [
      { name: "One Engineer's Junk",           zone: "Silvermoon City",    way: "/way #2393 51.2, 74.6" },
      { name: "What To Do When Nothing Works", zone: "Silvermoon City",    way: "/way #2393 51.3, 57.0" },
      { name: "Manual of Mistakes and Mishaps",zone: "Eversong Woods",     way: "/way #2395 39.6, 45.8" },
      { name: "Handy Wrench",                  zone: "Zul'Aman",           way: "/way #2437 34.2, 87.8" },
      { name: "Offline Helper Bot",            zone: "Zul'Aman (Atal'Aman)", way: "/way #2536 65.3, 35.0", note: "⚠️ Gefaseerd — doe eerst de campaign van Zul'Aman" },
      { name: "Expeditious Pylon",             zone: "Harandar",           way: "/way #2413 68.0, 49.8", note: "Boven op de paddenstoel" },
      { name: "Ethereal Stormwrench",          zone: "Voidstorm (Slayer's Rise)", way: "/way #2444 54.1, 51.1" },
      { name: "Miniaturized Transport Skiff",  zone: "Voidstorm (Slayer's Rise)", way: "/way #2444 28.9, 39.1" }
    ],
    weekly: [
      { source: "Patron Orders quest",      kp: "~10",   note: "Engineering weekly geeft maar ~+1 KP per kist (max +2/week) — lager dan andere profs" },
      { source: "Willekeurige schatkisten", kp: "tot 2", note: "⚠️ Engineering krijgt slechts +1 KP per kist, max +2/week — bewust lager dan andere profs" },
      { source: "Inscription Treatise",     kp: "1",     note: "Koop van AH of Inscription-alt" },
      { source: "Wekelijkse trainer-quest", kp: "varies", note: "Bij je Engineering trainer" }
    ],
    onetime: [
      { source: "8× Schat",              kp: "24", note: "Eenmalig per character" },
      { source: "Renown boek — Skill Issue: Engineering", kp: "10", note: "Caeris Fairdawn, Eversong Woods — Renown 6 Silvermoon Court" },
      { source: "Abundance Event",       kp: "10", note: "Chel the Chip — 1600 Unalloyed Abundance + 75 Moxie" }
    ],
    darkmoon: { quest: "Engineering quest (Darkmoon Faire)", reward: "2 skill + 3 KP", note: "Maandelijks" },
    tip: "⚙️ Tip: Engineering krijgt bewust minder wekelijkse KP dan andere crafting profs (~20 vs 25-32). Engineers maken gear voor Mining, JC, Fishing en Tailoring — plan cross-prof crafting."
  },

  fishing: {
    treasures: [
      { name: "Bait and Tackle", zone: "Zul'Aman", way: "(geen vaste /way — vind in Zul'Aman)", note: "Geeft Lucky Loa Lure + Abyss Angler's Fishlog (3 SKILL punten, geen KP). Fishlog is Warbound — stuur naar main!" }
    ],
    weekly: [
      { source: "Visvangst / gathering", kp: "varies", note: "Fishing heeft geen traditionele KP spec tree of weekly KP quests" }
    ],
    onetime: [],
    darkmoon: { quest: "Spoilin' for Salty Sea Dogs", npc: "Stamp Thunderhorn", reward: "3 skill punten (geen KP)", note: "Maandelijks — doe zo laat mogelijk in je leveling" },
    tip: "🎣 Tip: Fishing heeft geen KP spec tree zoals andere professions. Focus op Bloomlines verzamelen voor je vislijn-upgrade. Gebruik de Amani Angler's Ward in Zul'Aman tegen Blood Hunter Spirits."
  },

  herbalism: {
    treasures: [
      { name: "Simple Leaf Pruners",  zone: "Silvermoon City", way: "/way #2393 49.0, 75.9" },
      { name: "A Spade",              zone: "Eversong Woods",  way: "/way #2395 64.2, 30.5" },
      { name: "Harvester's Sickle",   zone: "Zul'Aman (of Harandar)", way: "/way #2437 41.9, 45.9", note: "⚠️ Bug: schat spawnt op 2 plekken. Loot een van beide — de ander verdwijnt dan. Pak de dichtstbijzijnde!" },
      { name: "Planting Shovel",      zone: "Harandar",        way: "/way #2413 51.1, 55.7" },
      { name: "Bloomed Bud",          zone: "Harandar",        way: "/way #2413 38.3, 66.9" },
      { name: "Lightbloom Root",      zone: "Harandar",        way: "/way #2413 36.6, 25.1" },
      { name: "Harvester's Sickle (alt)", zone: "Harandar",   way: "/way #2413 76.1, 51.1", note: "Alternatieve spawn voor Harvester's Sickle — pak ZA óf Harandar variant" },
      { name: "Peculiar Lotus",       zone: "Voidstorm",       way: "/way #2405 34.7, 57.0" }
    ],
    weekly: [
      { source: "Kruiden plukken + trainer-quest", kp: "varies", note: "Herbalism: geen weekly chest-drops. Pluk zoveel kruiden als mogelijk" },
      { source: "Inscription Treatise",            kp: "1",      note: "Koop van AH of Inscription-alt (dien in als public crafting order)" }
    ],
    onetime: [
      { source: "8× Schat",          kp: "24", note: "Eenmalig per character" },
      { source: "Renown boek — Herbalism Knowledge", kp: "10", note: "Koop bij Naynar (Harandar) voor 75 Artisan Herbalist's Moxie + Renown 6 Hara'ti" },
      { source: "Abundance Event",   kp: "10", note: "Chel the Chip — 1600 Unalloyed Abundance + 75 Moxie" },
      { source: "Ontdek alle kruiden (30× herb discovery)", kp: "30", note: "Elk nieuw kruid type geeft +1 KP — 5 basis, 5 lush, 20 elemental = 30 KP totaal" },
      { source: "Thalassian Phoenix Ember (catch-up)", kp: "1 per drop", note: "Dropt bij het plukken als je achterloopt op max KP" }
    ],
    darkmoon: { quest: "Herbs for Healing", npc: "Chronos", reward: "2 skill + 3 KP", note: "Maandelijks" },
    tip: "🌿 Tip: Druids kunnen herbs plukken terwijl ze vliegen (standaard in Midnight) — overweeg een Druid alt voor Herbalism + Mining combo voor maximale efficiency!"
  },

  inscription: {
    treasures: [
      { name: "Songwriter's Pen",              zone: "Silvermoon City",    way: "/way #2393 47.7, 50.4", note: "Vlieg omhoog — op dak achter de Alchemy trainer" },
      { name: "Songwriter's Quill",            zone: "Eversong Woods",     way: "/way #2395 40.3, 61.2", note: "In een gebouw" },
      { name: "Spare Ink",                     zone: "Eversong Woods",     way: "/way #2395 48.3, 75.6" },
      { name: "Half-Baked Techniques",         zone: "Eversong Woods",     way: "/way #2395 39.3, 45.4", note: "Begane grond van toren in west Eversong, Goldenbough Pass — vlak bij Fairbreeze Village" },
      { name: "Leather-Bound Techniques",      zone: "Zul'Aman",           way: "/way #2437 40.5, 49.4", note: "In een grot" },
      { name: "Leftover Sanguithorn Pigment",  zone: "Harandar",           way: "/way #2413 52.7, 50.0" },
      { name: "Intrepid Explorer's Marker",    zone: "Harandar",           way: "/way #2413 52.4, 52.6", note: "Vlieg omhoog — ligt op wortels erboven. Verschijnt NIET op minimap als je er niet exact op zit" },
      { name: "Void-Touched Quill",            zone: "Voidstorm (Slayer's Rise)", way: "/way #2444 60.7, 84.3", note: "In een gebouw" }
    ],
    weekly: [
      { source: "Patron Orders quest",      kp: "~10–15", note: "Craft missives/treatises/contracts op hoge kwaliteit" },
      { source: "Willekeurige schatkisten", kp: "tot 4",  note: "Vlieg laag over Eversong / Zul'Aman — 2 kistjes per week" },
      { source: "Inscription Treatise (eigen craft)", kp: "1–2", note: "Jij kunt zelf je eigen Treatise maken! Calm Hands spec geeft bonus KP op je eigen Treatise" },
      { source: "Wekelijkse trainer-quest", kp: "varies", note: "Bij je Inscription trainer" }
    ],
    onetime: [
      { source: "8× Schat",              kp: "24", note: "Eenmalig per character" },
      { source: "Renown boek — Traditions of the Haranir: Inscription", kp: "10", note: "Koop bij Naynar (Harandar) voor 75 Artisan Scribe's Moxie — Renown 6 Hara'ti" },
      { source: "Abundance Event",       kp: "10", note: "Chel the Chip — 1600 Unalloyed Abundance + 75 Moxie" }
    ],
    darkmoon: { quest: "Inscription quest (Darkmoon Faire)", reward: "2 skill + 3 KP", note: "Maandelijks" },
    tip: "📜 Tip: Als Inscription ben jij de leverancier van Treatises voor alle andere profs (+1 KP/week voor iedereen). Maak public Treatise crafting orders aan — passief inkomen en service tegelijk!"
  },

  jewelcrafting: {
    treasures: [
      { name: "Sin'dorei Masterwork Chisel",  zone: "Silvermoon City",    way: "/way #2393 50.6, 56.6" },
      { name: "Vintage Soul Gem",             zone: "Silvermoon City",    way: "/way #2393 55.4, 48.0" },
      { name: "Dual-Function Magnifiers",     zone: "Silvermoon City",    way: "/way #2393 28.6, 46.5" },
      { name: "Poorly Rounded Vial",          zone: "Eversong Woods",     way: "/way #2395 56.6, 40.9" },
      { name: "Sin'dorei Gem Faceters",       zone: "Eversong Woods",     way: "/way #2395 39.6, 38.9" },
      { name: "Speculative Voidstorm Crystal",zone: "Voidstorm (Slayer's Rise)", way: "/way #2444 30.5, 69.1" },
      { name: "Ethereal Gem Pliers",          zone: "Voidstorm (Slayer's Rise)", way: "/way #2444 54.2, 51.2" },
      { name: "Shattered Glass",              zone: "Voidstorm (Slayer's Rise)", way: "/way #2444 62.7, 53.4" }
    ],
    weekly: [
      { source: "Patron Orders quest",      kp: "~20",   note: "JC heeft hoge Patron Order KP (~32/week totaal)" },
      { source: "Willekeurige schatkisten", kp: "tot 4", note: "Vlieg laag over Eversong / Zul'Aman — 2 kistjes per week" },
      { source: "Inscription Treatise",     kp: "1",     note: "Koop van AH of Inscription-alt" },
      { source: "Wekelijkse trainer-quest", kp: "varies", note: "Bij je JC trainer" }
    ],
    onetime: [
      { source: "8× Schat",              kp: "24", note: "Eenmalig per character" },
      { source: "Renown boek — Skill Issue: Jewelcrafting", kp: "10", note: "Koop bij Caeris Fairdawn (Eversong Woods) voor 75 Artisan Jewelcrafter's Moxie — Renown 6 Silvermoon Court" },
      { source: "Abundance Event",       kp: "10", note: "Chel the Chip — 1600 Unalloyed Abundance + 75 Moxie" }
    ],
    darkmoon: { quest: "JC quest (Darkmoon Faire)", reward: "2 skill + 3 KP", note: "Maandelijks" },
    tip: "💎 Tip: JC is een van de hogere weekly KP profs (~32/week). Geen extra sockets consumable in Midnight — gem-vraag hangt af van natural socket drops. Investeer vroeg in Glamorous Gems spec."
  },

  leatherworking: {
    treasures: [
      { name: "Artisan's Considered Order",  zone: "Silvermoon City",    way: "/way #2393 44.8, 56.2" },
      { name: "Bundle of Tanner's Trinkets", zone: "Zul'Aman (Atal'Aman)", way: "/way #2536 45.4, 45.5", note: "⚠️ Gefaseerd — doe eerst de campaign van Zul'Aman" },
      { name: "Amani Leatherworker's Tool",  zone: "Zul'Aman",           way: "/way #2437 33.1, 78.9" },
      { name: "Prestigiously Racked Hide",   zone: "Zul'Aman",           way: "/way #2437 30.8, 84.0" },
      { name: "Haranir Leatherworking Mallet",zone: "Harandar",          way: "/way #2413 51.7, 51.3" },
      { name: "Haranir Leatherworking Knife", zone: "Harandar",          way: "/way #2413 36.1, 25.2" },
      { name: "Ethereal Leatherworking Knife",zone: "Voidstorm",         way: "/way #2405 34.7, 57.0" },
      { name: "Patterns: Beyond the Void",   zone: "Voidstorm (Slayer's Rise)", way: "/way #2444 53.7, 51.7" }
    ],
    weekly: [
      { source: "Patron Orders quest",      kp: "~20",   note: "LW heeft ~31 KP/week totaal mogelijk" },
      { source: "Willekeurige schatkisten", kp: "tot 4", note: "Vlieg laag over Eversong / Zul'Aman — 2 kistjes per week" },
      { source: "Inscription Treatise",     kp: "1",     note: "Koop van AH of Inscription-alt" },
      { source: "Wekelijkse trainer-quest", kp: "varies", note: "Bij je LW trainer" }
    ],
    onetime: [
      { source: "8× Schat",              kp: "24", note: "Eenmalig per character" },
      { source: "Renown boek — Skill Issue: Leatherworking", kp: "10", note: "Caeris Fairdawn, Eversong Woods — Renown 6 Silvermoon Court" },
      { source: "Abundance Event",       kp: "10", note: "Chel the Chip — 1600 Unalloyed Abundance + 75 Moxie" }
    ],
    darkmoon: { quest: "LW quest (Darkmoon Faire)", reward: "2 skill + 3 KP", note: "Maandelijks" },
    tip: "🦎 Tip: LW maakt gear voor Alchemy, Inscription en Mining. Het leren van de Haranir-fractie recepten (Renown 5) is de moeite waard voor mail armor crafters."
  },

  mining: {
    treasures: [
      { name: "Solid Ore Punchers",        zone: "Eversong Woods",     way: "/way #2395 38.0, 45.4" },
      { name: "Amani Expert's Chisel",     zone: "Zul'Aman (Atal'Aman)", way: "/way #2536 33.4, 65.9", note: "⚠️ Gefaseerd — doe eerst de campaign van Zul'Aman" },
      { name: "Spelunker's Lucky Charm",   zone: "Zul'Aman",           way: "/way #2437 42.0, 46.5" },
      { name: "Spare Expedition Torch",    zone: "Harandar",           way: "/way #2413 38.8, 65.9" },
      { name: "Star Metal Deposit",        zone: "Voidstorm",          way: "/way #2405 41.8, 38.3" },
      { name: "Miner's Guide to Voidstorm",zone: "Voidstorm (Slayer's Rise)", way: "/way #2444 30.5, 69.1" },
      { name: "Glimmering Void Pearl",     zone: "Voidstorm (Slayer's Rise)", way: "/way #2444 28.7, 38.5" },
      { name: "Lost Voidstorm Satchel",    zone: "Voidstorm (Slayer's Rise)", way: "/way #2444 54.2, 51.5" }
    ],
    weekly: [
      { source: "Erts verzamelen + trainer-quest", kp: "varies", note: "Mining heeft geen weekly chest-drops. Mijn zo veel mogelijk deposits" },
      { source: "Inscription Treatise",            kp: "1",      note: "Koop van AH of Inscription-alt" }
    ],
    onetime: [
      { source: "8× Schat",              kp: "24", note: "Eenmalig per character" },
      { source: "Renown boek — Mining Knowledge", kp: "10", note: "Koop bij Magovu (Zul'Aman) voor 75 Artisan Miner's Moxie + 750 Voidlight Marl — Renown 6 Amani Tribe" },
      { source: "Abundance Event",       kp: "10", note: "Chel the Chip — 1600 Unalloyed Abundance + 75 Moxie (let op: soms gebugd)" },
      { source: "Eerste Overload per infused type (4× zones)", kp: "4 totaal (1 per type)", note: "Overload Lightfused, Riftbound, Sanguithorn, Voidbound elk 1× voor +1 KP each. ⚠️ NIET Voidbound overloaden zonder de Voidbound sub-spec — je wordt teleporteerd naar een random grot!" }
    ],
    darkmoon: { quest: "Rearm, Reuse, Recycle", npc: "Rinling", reward: "2 skill + 3 KP", note: "Maandelijks — doe zo laat mogelijk in leveling voor max skill waarde" },
    tip: "⛏️ Tip: Begin met Mining Fundamentals (40 KP) om mounted minen te unlocken — dit is de #1 QoL-unlock in Midnight. Daarna Plentiful Ores (50 KP) voor skill bonus op alle ore types."
  },

  skinning: {
    treasures: [
      { name: "Sin'dorei Tanning Oil",      zone: "Silvermoon City", way: "/way #2393 43.2, 55.7" },
      { name: "Thalassian Skinning Knife",  zone: "Eversong Woods",  way: "/way #2395 48.4, 76.3" },
      { name: "Cadre Skinning Knife",       zone: "Zul'Aman (Atal'Aman)", way: "/way #2536 44.9, 45.2", note: "⚠️ Gefaseerd — doe eerst de campaign van Zul'Aman" },
      { name: "Amani Skinning Knife",       zone: "Zul'Aman",        way: "/way #2437 33.1, 79.1" },
      { name: "Amani Tanning Oil",          zone: "Zul'Aman",        way: "/way #2437 40.4, 36.0" },
      { name: "Primal Hide",                zone: "Harandar",        way: "/way #2413 69.5, 49.2" },
      { name: "Lightbloom Afflicted Hide",  zone: "Harandar",        way: "/way #2413 76.0, 51.0" },
      { name: "Voidstorm Leather Sample",   zone: "Voidstorm (Slayer's Rise)", way: "/way #2444 45.5, 42.3" }
    ],
    weekly: [
      { source: "Skinnen + trainer-quest",  kp: "varies", note: "Skinning heeft geen weekly chest-drops. Skin zoveel beesten als mogelijk" },
      { source: "Inscription Treatise",     kp: "1",      note: "Koop van AH of Inscription-alt" }
    ],
    onetime: [
      { source: "8× Schat",              kp: "24", note: "Eenmalig per character" },
      { source: "Renown boek — Skinning Knowledge", kp: "10", note: "Koop bij Magovu (Zul'Aman) voor 75 Artisan Skinner's Moxie + 750 Voidlight Marl — Renown 6 Amani Tribe" },
      { source: "Abundance Event",       kp: "10", note: "Chel the Chip — 1600 Unalloyed Abundance + 75 Moxie" }
    ],
    darkmoon: { quest: "Tan My Hide", npc: "Chronos", reward: "2 skill + 3 KP", note: "Maandelijks" },
    tip: "🐾 Tip: Gebruik Majestic Lures voor Renowned Beasts — Gloomclaw (Eversong /way 41.95, 79.70), Silverscale (Zul'Aman /way 47.55, 53.65 — onder de brug!), Lumenfin (Harandar /way 66.63, 47.83), Umbrafang (Voidstorm /way 54.15, 65.27)."
  },

  tailoring: {
    treasures: [
      { name: "A Really Nice Curtain",            zone: "Silvermoon City",    way: "/way #2393 35.9, 61.3" },
      { name: "Particularly Enchanting Tablecloth",zone: "Silvermoon City",   way: "/way #2393 31.8, 68.2" },
      { name: "Sin'dorei Outfitter's Ruler",      zone: "Eversong Woods",     way: "/way #2395 46.3, 34.8" },
      { name: "Artisan's Cover Comb",             zone: "Zul'Aman",           way: "/way #2437 40.5, 49.4", note: "In een grot" },
      { name: "Wooden Weaving Sword",             zone: "Harandar",           way: "/way #2413 69.8, 51.0" },
      { name: "A Child's Stuffy",                 zone: "Harandar",           way: "/way #2413 70.5, 50.9" },
      { name: "Book of Sin'dorei Stitches",       zone: "Voidstorm (Slayer's Rise)", way: "/way #2444 62.0, 83.6" },
      { name: "Satin Throw Pillow",               zone: "Voidstorm (Slayer's Rise)", way: "/way #2444 61.6, 85.0" }
    ],
    weekly: [
      { source: "Patron Orders quest",      kp: "~15–20", note: "Tailoring heeft ~25-30 KP/week totaal mogelijk" },
      { source: "Willekeurige schatkisten", kp: "tot 4",  note: "Vlieg laag over Eversong / Zul'Aman — 2 kistjes per week" },
      { source: "Inscription Treatise",     kp: "1",      note: "Koop van AH of Inscription-alt" },
      { source: "Wekelijkse trainer-quest", kp: "varies", note: "Bij je Tailoring trainer" }
    ],
    onetime: [
      { source: "8× Schat",              kp: "24", note: "Eenmalig per character" },
      { source: "Renown boek — Skill Issue: Tailoring", kp: "10", note: "Caeris Fairdawn, Eversong Woods — Renown 6 Silvermoon Court" },
      { source: "Abundance Event",       kp: "10", note: "Chel the Chip — 1600 Unalloyed Abundance + 75 Moxie" }
    ],
    darkmoon: { quest: "Tailoring quest (Darkmoon Faire)", reward: "2 skill + 3 KP", note: "Maandelijks" },
    tip: "🧵 Tip: Tailoring maakt gear voor Alchemy, Cooking, Enchanting, Fishing en Herbalism. Nimble Needlework spec geeft dagelijkse bolt cooldowns — prioriteit als je cloth nodig hebt. Je hebt Fabric Cutters (Engineer) + Needle Set (Blacksmith) nodig voor je eigen accessoire."
  }

};

// Zone legenda voor /way codes
const KP_ZONES = {
  "#2393": "Silvermoon City",
  "#2395": "Eversong Woods",
  "#2437": "Zul'Aman",
  "#2536": "Zul'Aman (Atal'Aman — gefaseerd)",
  "#2413": "Harandar",
  "#2405": "Voidstorm",
  "#2444": "Voidstorm (Slayer's Rise)"
};

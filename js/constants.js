// ── Keystone.guru UI strings ──
const KG_STRINGS = {
  nl: { title:'🗺 Route op Keystone.guru', hint:'Tik buiten het venster of druk op Sluiten', close:'✕ Sluiten', btn_label:'Bekijk M+ route op Keystone.guru', btn_sub:'Opent Keystone.guru in een nieuw tabblad' },
  en: { title:'🗺 Route on Keystone.guru', hint:'Tap outside or press Close', close:'✕ Close', btn_label:'View M+ route on Keystone.guru', btn_sub:'Opens Keystone.guru in a new tab' }};

// ── Alle professions samenvoegen ──
const ALL_PROFS = [SKINNING,LEATHERWORKING,MINING,HERBALISM,ALCHEMY,BLACKSMITHING,ENCHANTING,ENGINEERING,INSCRIPTION,JEWELCRAFTING,TAILORING,COOKING,FISHING];

// ── Leatherworking Beginner Guide Data ──
const PROF_GUIDE_DATA = {
  "leatherworking": {
    "nl": {
      "title": "De Ultieme Leatherworking Gids!",
      "intro": "Word een meester-leerbewerker! Deze gids legt je alles uit, van je allereerste stiksel tot het bereiken van level 100.",
      "sections": [
        {
          "sectionTitle": "Deel 1: De Basis",
          "steps": [
            {
              "title": "Het perfecte duo (Skinning)",
              "text": "Je hebt heel veel dierenhuiden nodig. Leer daarom <strong>Skinning</strong> als je tweede beroep! Rust een <em>Skinning Knife</em> uit in je speciale beroepen-slot. Versla beesten zoals wolven en beren, en 'skin' ze voor materialen!"
            },
            {
              "title": "De Trainer vinden",
              "text": "Ga naar de grote stad en praat met een bewaker. Vraag naar de <strong>Leatherworking Trainer</strong>. Leer hier de basis en koop meteen wat <em>Thread</em> (draad) bij de verkoper ernaast."
            },
            {
              "title": "De Kleuren van Recepten",
              "text": "Let goed op de kleuren van je recepten om snel omhoog te gaan:<br>🟠 <strong>Oranje:</strong> Altijd 1 punt erbij!<br>🟡 <strong>Geel:</strong> Meestal een punt.<br>🟢 <strong>Groen:</strong> Soms een punt.<br>⚪ <strong>Grijs:</strong> Geen punten meer. Maak altijd Oranje of Geel!"
            },
            {
              "title": "De 'First Craft' Bonus",
              "text": "Maak je een item voor de allereerste keer? Dan krijg je een <strong>Knowledge Point</strong> (Kennispunt)! Probeer dus van elk recept minstens één ding te maken. Dit helpt je later enorm bij je specialisatie."
            }
          ]
        },
        {
          "sectionTitle": "Deel 2: De Weg naar Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Simpel Begin",
              "text": "Open je spreukenboek ('P') en begin met het maken van simpele armbanden. Blijf deze maken zolang de kleur Oranje of Geel is!"
            },
            {
              "title": "Level 25 - 50: Alles Eén Keer!",
              "text": "Op level 25 mag je een <strong>Specialisatie</strong> kiezen. Weet je niet goed wat je moet kiezen? Kijk dan in de <strong>'KP Gids'</strong> tab hierboven! Daar hebben we de beste routes voor je uitgestippeld. Maak vanaf nu van elk nieuw recept precies één ding. Zo scoor je die First Craft bonussen en vlieg je door de levels heen."
            },
            {
              "title": "Level 50 - 75: Beroepskleding & PvP",
              "text": "De normale spullen geven nu geen punten meer (ze zijn grijs). Maak nu spullen voor andere beroepen (zoals tassen) of PvP-kleding. Dit kost wat meer materialen, dus ga lekker veel monsters 'skinnen'!"
            },
            {
              "title": "Level 75 - 100: De Meesterfase",
              "text": "Nu wordt het lastig! Je kunt alleen nog omhoog door epische (paarse) spullen te maken. Hiervoor heb je speciale 'Sparks' nodig. Omdat je er daar zelf niet genoeg van hebt, moet je de <strong>Crafting Orders</strong> tafel gebruiken. Hier betalen andere spelers jou goud om met hún Sparks spullen voor ze te maken. Zo bereik jij level 100!"
            }
          ]
        }
      ],
      "tip": "Gouden Tip: Gebruik je 'Concentration' (Concentratie) slim! Hiermee kun je items van een hogere kwaliteit maken dan je eigenlijk kunt. Het laadt elke dag langzaam weer op."
    },
    "en": {
      "title": "The Ultimate Leatherworking Guide!",
      "intro": "Become a master leatherworker! This guide explains everything, from your very first stitch to reaching level 100.",
      "sections": [
        {
          "sectionTitle": "Part 1: The Basics",
          "steps": [
            {
              "title": "The Perfect Duo (Skinning)",
              "text": "You will need lots of animal hides. That's why you should learn <strong>Skinning</strong> as your second profession! Equip a <em>Skinning Knife</em> in your profession tool slot. Defeat beasts like wolves and bears, and skin them for materials!"
            },
            {
              "title": "Finding the Trainer",
              "text": "Go to the main city and talk to a guard. Ask for the <strong>Leatherworking Trainer</strong>. Learn the basics here and buy some <em>Thread</em> from the vendor next to them."
            },
            {
              "title": "The Colors of Recipes",
              "text": "Pay close attention to the colors of your recipes to level up fast:<br>🟠 <strong>Orange:</strong> Always +1 skill point!<br>🟡 <strong>Yellow:</strong> Usually a point.<br>🟢 <strong>Green:</strong> Sometimes a point.<br>⚪ <strong>Gray:</strong> No points. Always craft Orange or Yellow!"
            },
            {
              "title": "The 'First Craft' Bonus",
              "text": "Crafting an item for the very first time? You'll get a <strong>Knowledge Point</strong>! Try to craft at least one of every recipe. This will help you a lot later on with your specialization."
            }
          ]
        },
        {
          "sectionTitle": "Part 2: The Road to Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Simple Start",
              "text": "Open your spellbook ('P') and start crafting simple bracers. Keep crafting these as long as the color is Orange or Yellow!"
            },
            {
              "title": "Level 25 - 50: Everything Once!",
              "text": "At level 25 you can choose a <strong>Specialization</strong>. Not sure what to pick? Check out the <strong>'KP Guide'</strong> tab above! We have mapped out the best routes for you there. From now on, craft exactly one of every new recipe. This way you score those First Craft bonuses and fly through the levels."
            },
            {
              "title": "Level 50 - 75: Profession Gear & PvP",
              "text": "Normal gear won't give points anymore (they are gray). Now craft items for other professions (like bags) or PvP gear. This costs more materials, so go out and skin lots of monsters!"
            },
            {
              "title": "Level 75 - 100: The Master Phase",
              "text": "Now it gets tricky! You can only level up by crafting epic (purple) gear. You need special 'Sparks' for this. Because you don't have enough of those yourself, you must use the <strong>Crafting Orders</strong> table. Here, other players pay you gold to craft items for them using THEIR Sparks. That's how you reach level 100!"
            }
          ]
        }
      ],
      "tip": "Golden Tip: Use your 'Concentration' smartly! It allows you to craft items at a higher quality than you normally could. It slowly recharges every day."
    }},
  "alchemy": {
    "nl": {
      "title": "De Ultieme Alchemy Gids!",
      "intro": "Word een meester-alchemist! Brouw krachtige drankjes en verander simpele materialen in goud.",
      "sections": [
        {
          "sectionTitle": "Deel 1: De Basis",
          "steps": [
            {
              "title": "Het perfecte duo (Herbalism)",
              "text": "Je hebt heel veel kruiden nodig. Leer daarom <strong>Herbalism</strong> (Kruidenkunde) als je tweede beroep! Zo kun je zelf alle bloemen plukken die je nodig hebt voor je drankjes."
            },
            {
              "title": "De Trainer vinden",
              "text": "Vraag een bewaker in de grote stad naar de <strong>Alchemy Trainer</strong>. Koop meteen wat <em>Crystal Vials</em> (flesjes) bij de verkoper ernaast, want die heb je voor elk drankje nodig!"
            },
            {
              "title": "De Kleuren van Recepten",
              "text": "Let op de kleuren om te levelen:<br>🟠 <strong>Oranje:</strong> Altijd 1 punt erbij!<br>🟡 <strong>Geel:</strong> Meestal een punt.<br>🟢 <strong>Groen:</strong> Soms een punt.<br>⚪ <strong>Grijs:</strong> Geen punten meer."
            }
          ]
        },
        {
          "sectionTitle": "Deel 2: De Weg naar Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Simpele Drankjes",
              "text": "Begin met het maken van simpele healing potions (genezende drankjes). Dit is de makkelijkste manier om je eerste levels te halen."
            },
            {
              "title": "Level 25 - 50: Experimenteren!",
              "text": "Kies je <strong>Specialisatie</strong> (check de KP Gids tab!). Nu ga je 'Experimenteren' met kruiden om nieuwe recepten te ontdekken. Soms mislukt het en ontploft je brouwsel (dan moet je even wachten), maar als het lukt, leer je nieuwe dingen!"
            },
            {
              "title": "Level 50 - 75: Flasks & Phials",
              "text": "Maak nu de sterkere drankjes (Phials) die lang duren. Zorg dat je van elk nieuw recept één ding maakt voor de First Craft bonus!"
            },
            {
              "title": "Level 75 - 100: De Meesterfase",
              "text": "Om level 100 te halen moet je epische Cauldrons (grote ketels voor raid groepen) of heel zeldzame drankjes maken via het <strong>Crafting Orders</strong> systeem."
            }
          ]
        }
      ],
      "tip": "Gouden Tip: Als Alchemist duren Phials (buff-drankjes) twee keer zo lang voor jou! Dat scheelt je enorm veel goud als je zelf dungeons gaat spelen."
    },
    "en": {
      "title": "The Ultimate Alchemy Guide!",
      "intro": "Become a master alchemist! Brew powerful potions and turn simple materials into gold.",
      "sections": [
        {
          "sectionTitle": "Part 1: The Basics",
          "steps": [
            {
              "title": "The Perfect Duo (Herbalism)",
              "text": "You need lots of herbs. Learn <strong>Herbalism</strong> as your second profession! This way you can pick all the flowers you need for your potions."
            },
            {
              "title": "Finding the Trainer",
              "text": "Ask a guard in the main city for the <strong>Alchemy Trainer</strong>. Buy some <em>Crystal Vials</em> from the vendor next to them, you need them for every potion!"
            },
            {
              "title": "The Colors of Recipes",
              "text": "Watch the colors to level up:<br>🟠 <strong>Orange:</strong> Always +1 skill point!<br>🟡 <strong>Yellow:</strong> Usually a point.<br>🟢 <strong>Green:</strong> Sometimes a point.<br>⚪ <strong>Gray:</strong> No points."
            }
          ]
        },
        {
          "sectionTitle": "Part 2: The Road to Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Simple Potions",
              "text": "Start by crafting simple healing potions. This is the easiest way to get your first levels."
            },
            {
              "title": "Level 25 - 50: Experimentation!",
              "text": "Choose your <strong>Specialization</strong> (check the KP Guide tab!). Now you will 'Experiment' with herbs to discover new recipes. Sometimes it fails and explodes (then you have to wait), but when it succeeds, you learn new things!"
            },
            {
              "title": "Level 50 - 75: Flasks & Phials",
              "text": "Now make the stronger potions (Phials) that last long. Make sure you craft one of every new recipe for the First Craft bonus!"
            },
            {
              "title": "Level 75 - 100: The Master Phase",
              "text": "To reach level 100 you need to craft epic Cauldrons (large pots for raid groups) or very rare potions using the <strong>Crafting Orders</strong> system."
            }
          ]
        }
      ],
      "tip": "Golden Tip: As an Alchemist, Phials (buff potions) last twice as long for you! This saves you a lot of gold when running dungeons."
    }},
  "blacksmithing": {
    "nl": {
      "title": "De Ultieme Blacksmithing Gids!",
      "intro": "Word een meester-smid! Smeed de sterkste wapens en zwaarste bepantsering (Plate) van de game.",
      "sections": [
        {
          "sectionTitle": "Deel 1: De Basis",
          "steps": [
            {
              "title": "Het perfecte duo (Mining)",
              "text": "Je hebt enorm veel erts (ore) nodig. Leer <strong>Mining</strong> (Mijnbouw) als tweede beroep! Rust een <em>Blacksmith Hammer</em> uit en ga op zoek naar stenen in de wereld."
            },
            {
              "title": "De Trainer & Het Aambeeld",
              "text": "Zoek de <strong>Blacksmithing Trainer</strong> in de stad. Let op: je kunt alleen spullen maken als je naast een <strong>Anvil</strong> (Aambeeld) staat!"
            },
            {
              "title": "De Kleuren van Recepten",
              "text": "Let op de kleuren om te levelen:<br>🟠 <strong>Oranje:</strong> Altijd 1 punt erbij!<br>🟡 <strong>Geel:</strong> Meestal een punt.<br>🟢 <strong>Groen:</strong> Soms een punt.<br>⚪ <strong>Grijs:</strong> Geen punten meer."
            }
          ]
        },
        {
          "sectionTitle": "Deel 2: De Weg naar Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Simpel Smeedwerk",
              "text": "Begin met het smelten van ertsen en het maken van simpele metalen onderdelen (zoals Core Alloy). Blijf dit doen zolang het Oranje of Geel is."
            },
            {
              "title": "Level 25 - 50: Alles Eén Keer!",
              "text": "Kies je <strong>Specialisatie</strong> (Wapens of Armor? Check de KP Gids!). Maak vanaf nu van elk nieuw recept precies één ding voor de First Craft Kennispunten."
            },
            {
              "title": "Level 50 - 75: Beroepskleding & PvP",
              "text": "Maak nu gereedschap voor andere beroepen (zoals hamers en pikhouwelen) of PvP-kleding. Dit kost veel metaal, dus ga lekker veel mijnen!"
            },
            {
              "title": "Level 75 - 100: De Meesterfase",
              "text": "Nu kun je alleen nog omhoog door epische (paarse) wapens of armor te maken met 'Sparks'. Gebruik de <strong>Crafting Orders</strong> tafel: laat andere spelers jou betalen om hun epische zwaarden te smeden!"
            }
          ]
        }
      ],
      "tip": "Gouden Tip: Blacksmiths kunnen speciale stenen maken waarmee je tijdelijk je wapen sterker maakt (Weapon Stones). Maak deze voor jezelf en verkoop ze op het Auction House!"
    },
    "en": {
      "title": "The Ultimate Blacksmithing Guide!",
      "intro": "Become a master smith! Forge the strongest weapons and heaviest armor (Plate) in the game.",
      "sections": [
        {
          "sectionTitle": "Part 1: The Basics",
          "steps": [
            {
              "title": "The Perfect Duo (Mining)",
              "text": "You need tons of ore. Learn <strong>Mining</strong> as your second profession! Equip a <em>Blacksmith Hammer</em> and look for rocks out in the world."
            },
            {
              "title": "The Trainer & The Anvil",
              "text": "Find the <strong>Blacksmithing Trainer</strong> in the city. Note: you can only craft items when standing next to an <strong>Anvil</strong>!"
            },
            {
              "title": "The Colors of Recipes",
              "text": "Watch the colors to level up:<br>🟠 <strong>Orange:</strong> Always +1 skill point!<br>🟡 <strong>Yellow:</strong> Usually a point.<br>🟢 <strong>Green:</strong> Sometimes a point.<br>⚪ <strong>Gray:</strong> No points."
            }
          ]
        },
        {
          "sectionTitle": "Part 2: The Road to Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Simple Forging",
              "text": "Start by smelting ores and making simple metal parts (like Core Alloy). Keep doing this as long as it's Orange or Yellow."
            },
            {
              "title": "Level 25 - 50: Everything Once!",
              "text": "Choose your <strong>Specialization</strong> (Weapons or Armor? Check the KP Guide!). From now on, craft exactly one of every new recipe for the First Craft Knowledge Points."
            },
            {
              "title": "Level 50 - 75: Profession Gear & PvP",
              "text": "Now craft tools for other professions (like hammers and pickaxes) or PvP gear. This costs a lot of metal, so go mine a lot!"
            },
            {
              "title": "Level 75 - 100: The Master Phase",
              "text": "Now you can only level up by crafting epic (purple) weapons or armor using 'Sparks'. Use the <strong>Crafting Orders</strong> table: let other players pay you to forge their epic swords!"
            }
          ]
        }
      ],
      "tip": "Golden Tip: Blacksmiths can make special stones to temporarily buff weapons (Weapon Stones). Make these for yourself and sell them on the Auction House!"
    }},
  "enchanting": {
    "nl": {
      "title": "De Ultieme Enchanting Gids!",
      "intro": "Word een meester-betoveraar! Breek magische spullen af en gebruik het stof om je eigen gear supersterk te maken.",
      "sections": [
        {
          "sectionTitle": "Deel 1: De Basis",
          "steps": [
            {
              "title": "Het perfecte duo (Tailoring)",
              "text": "Enchanting heeft geen verzamel-beroep nodig! Je haalt je materialen door oude gear kapot te maken (Disenchanting). <strong>Tailoring</strong> is een goede combi, omdat je dan makkelijk kleding kunt maken om direct weer kapot te maken voor magisch stof!"
            },
            {
              "title": "De Trainer & Runed Copper Rod",
              "text": "Zoek de <strong>Enchanting Trainer</strong>. Zorg dat je altijd een <em>Runed Copper Rod</em> (of beter) in je tas hebt, dit is je magische toverstaf om mee te betoveren."
            },
            {
              "title": "Disenchanting (Afbreken)",
              "text": "Gebruik je 'Disenchant' spreuk op groene, blauwe of paarse spullen die je niet meer nodig hebt. Hieruit krijg je Dust, Shards en Crystals!"
            }
          ]
        },
        {
          "sectionTitle": "Deel 2: De Weg naar Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Simpele Betoveringen",
              "text": "Begin met het maken van simpele betoveringen voor ringen of borstpantsers. Gebruik je eigen gear om op te oefenen!"
            },
            {
              "title": "Level 25 - 50: Vellum & First Crafts",
              "text": "Kies je <strong>Specialisatie</strong> (check de KP Gids!). Koop <em>Enchanting Vellum</em> (perkament) bij de verkoper. Hierop kun je betoveringen plaatsen en ze daarna verkopen op het Auction House! Maak van alles precies één voor de Kennispunten."
            },
            {
              "title": "Level 50 - 75: Wapen Betoveringen",
              "text": "Nu ga je de dure, coole wapen-betoveringen maken. Deze geven je wapen een gloed en maken je veel sterker. Breek veel blauwe en paarse gear af voor de juiste kristallen."
            },
            {
              "title": "Level 75 - 100: De Meesterfase",
              "text": "Voor de laatste levels moet je de allerbeste epische betoveringen maken. Gebruik de <strong>Crafting Orders</strong> tafel zodat andere spelers jou betalen om hun wapens de ultieme betovering te geven!"
            }
          ]
        }
      ],
      "tip": "Gouden Tip: Verkoop je betoveringen altijd op een 'Enchanting Vellum' via het Auction House. Dit is een van de beste manieren om goud te verdienen in WoW!"
    },
    "en": {
      "title": "The Ultimate Enchanting Guide!",
      "intro": "Become a master enchanter! Break down magical items and use the dust to make your own gear super strong.",
      "sections": [
        {
          "sectionTitle": "Part 1: The Basics",
          "steps": [
            {
              "title": "The Perfect Duo (Tailoring)",
              "text": "Enchanting doesn't need a gathering profession! You get materials by breaking down old gear (Disenchanting). <strong>Tailoring</strong> is a great combo, because you can easily craft clothes just to break them down for magical dust!"
            },
            {
              "title": "The Trainer & Runed Copper Rod",
              "text": "Find the <strong>Enchanting Trainer</strong>. Make sure you always have a <em>Runed Copper Rod</em> (or better) in your bag, this is your magic wand for enchanting."
            },
            {
              "title": "Disenchanting",
              "text": "Use your 'Disenchant' spell on green, blue, or purple gear you no longer need. You will get Dust, Shards, and Crystals from them!"
            }
          ]
        },
        {
          "sectionTitle": "Part 2: The Road to Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Simple Enchants",
              "text": "Start by making simple enchants for rings or chest pieces. Use your own gear to practice on!"
            },
            {
              "title": "Level 25 - 50: Vellum & First Crafts",
              "text": "Choose your <strong>Specialization</strong> (check the KP Guide!). Buy <em>Enchanting Vellum</em> (parchment) from the vendor. You can place enchants on these and sell them on the Auction House! Make exactly one of everything for the Knowledge Points."
            },
            {
              "title": "Level 50 - 75: Weapon Enchants",
              "text": "Now you will make the expensive, cool weapon enchants. These give your weapon a glow and make you much stronger. Disenchant lots of blue and purple gear for the right crystals."
            },
            {
              "title": "Level 75 - 100: The Master Phase",
              "text": "For the final levels, you need to make the very best epic enchants. Use the <strong>Crafting Orders</strong> table so other players pay you to give their weapons the ultimate enchant!"
            }
          ]
        }
      ],
      "tip": "Golden Tip: Always sell your enchants on an 'Enchanting Vellum' via the Auction House. This is one of the best ways to make gold in WoW!"
    }},
  "engineering": {
    "nl": {
      "title": "De Ultieme Engineering Gids!",
      "intro": "Word een gekke uitvinder! Maak bommen, gadgets, robot-huisdieren en de coolste brillen (Goggles) in WoW.",
      "sections": [
        {
          "sectionTitle": "Deel 1: De Basis",
          "steps": [
            {
              "title": "Het perfecte duo (Mining)",
              "text": "Uitvinders hebben veel metaal nodig. Leer <strong>Mining</strong> (Mijnbouw) als tweede beroep! Je hebt ook vaak een <em>Arclight Spanner</em> en een <em>Gyromatic Micro-Adjustor</em> nodig in je tas."
            },
            {
              "title": "De Trainer vinden",
              "text": "Zoek de <strong>Engineering Trainer</strong>. Let op: Engineers maken vaak spullen die alléén zijzelf kunnen gebruiken (zoals speciale brillen en teleporters)."
            },
            {
              "title": "De Kleuren van Recepten",
              "text": "Let op de kleuren om te levelen:<br>🟠 <strong>Oranje:</strong> Altijd 1 punt erbij!<br>🟡 <strong>Geel:</strong> Meestal een punt.<br>🟢 <strong>Groen:</strong> Soms een punt.<br>⚪ <strong>Grijs:</strong> Geen punten meer."
            }
          ]
        },
        {
          "sectionTitle": "Deel 2: De Weg naar Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Schroeven en Moeren",
              "text": "Begin met het maken van basis-onderdelen zoals Handful of Copper Bolts en simpele explosieven. Bewaar de onderdelen, je hebt ze later nodig!"
            },
            {
              "title": "Level 25 - 50: Alles Eén Keer!",
              "text": "Kies je <strong>Specialisatie</strong> (check de KP Gids!). Maak vanaf nu van elk nieuw recept precies één ding voor de First Craft Kennispunten. Maak je eerste coole gadgets!"
            },
            {
              "title": "Level 50 - 75: Beroepskleding & Tinkers",
              "text": "Maak gereedschap voor andere beroepen en 'Tinkers' (speciale modules die je in je armor kunt klikken voor extra krachten, zoals onzichtbaarheid of een schild)."
            },
            {
              "title": "Level 75 - 100: De Meesterfase",
              "text": "Maak epische (paarse) Goggles (brillen) en geweren. Gebruik de <strong>Crafting Orders</strong> tafel: laat andere spelers jou betalen om hun epische Engineering gear te maken!"
            }
          ]
        }
      ],
      "tip": "Gouden Tip: Engineering is het leukste beroep in WoW! Je kunt een 'Loot-A-Rang' maken om vijanden op afstand te looten, en wormhole-generators om overal naartoe te teleporteren!"
    },
    "en": {
      "title": "The Ultimate Engineering Guide!",
      "intro": "Become a mad inventor! Make bombs, gadgets, robot pets, and the coolest glasses (Goggles) in WoW.",
      "sections": [
        {
          "sectionTitle": "Part 1: The Basics",
          "steps": [
            {
              "title": "The Perfect Duo (Mining)",
              "text": "Inventors need a lot of metal. Learn <strong>Mining</strong> as your second profession! You also often need an <em>Arclight Spanner</em> and a <em>Gyromatic Micro-Adjustor</em> in your bag."
            },
            {
              "title": "Finding the Trainer",
              "text": "Find the <strong>Engineering Trainer</strong>. Note: Engineers often make items that ONLY they can use (like special goggles and teleporters)."
            },
            {
              "title": "The Colors of Recipes",
              "text": "Watch the colors to level up:<br>🟠 <strong>Orange:</strong> Always +1 skill point!<br>🟡 <strong>Yellow:</strong> Usually a point.<br>🟢 <strong>Green:</strong> Sometimes a point.<br>⚪ <strong>Gray:</strong> No points."
            }
          ]
        },
        {
          "sectionTitle": "Part 2: The Road to Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Nuts and Bolts",
              "text": "Start by making basic parts like Handful of Copper Bolts and simple explosives. Save the parts, you will need them later!"
            },
            {
              "title": "Level 25 - 50: Everything Once!",
              "text": "Choose your <strong>Specialization</strong> (check the KP Guide!). From now on, craft exactly one of every new recipe for the First Craft Knowledge Points. Make your first cool gadgets!"
            },
            {
              "title": "Level 50 - 75: Profession Gear & Tinkers",
              "text": "Craft tools for other professions and 'Tinkers' (special modules you can click into your armor for extra powers, like invisibility or a shield)."
            },
            {
              "title": "Level 75 - 100: The Master Phase",
              "text": "Make epic (purple) Goggles and guns. Use the <strong>Crafting Orders</strong> table: let other players pay you to make their epic Engineering gear!"
            }
          ]
        }
      ],
      "tip": "Golden Tip: Engineering is the most fun profession in WoW! You can make a 'Loot-A-Rang' to loot enemies from a distance, and wormhole generators to teleport anywhere!"
    }},
  "inscription": {
    "nl": {
      "title": "De Ultieme Inscription Gids!",
      "intro": "Word een magische schrijver! Maak krachtige staven, toverboeken en kaarten die je sterker maken.",
      "sections": [
        {
          "sectionTitle": "Deel 1: De Basis",
          "steps": [
            {
              "title": "Het perfecte duo (Herbalism)",
              "text": "Je hebt enorm veel planten nodig om inkt van te maken. Leer <strong>Herbalism</strong> als tweede beroep! Zorg ook dat je altijd een <em>Virtuoso Inking Set</em> en blanco perkament bij je hebt."
            },
            {
              "title": "Milling (Planten vermalen)",
              "text": "Je gebruikt de spreuk 'Milling' om je geplukte bloemen te vermalen tot pigmenten. Van die pigmenten maak je inkt, en met die inkt schrijf je magische spreuken!"
            },
            {
              "title": "De Kleuren van Recepten",
              "text": "Let op de kleuren om te levelen:<br>🟠 <strong>Oranje:</strong> Altijd 1 punt erbij!<br>🟡 <strong>Geel:</strong> Meestal een punt.<br>🟢 <strong>Groen:</strong> Soms een punt.<br>⚪ <strong>Grijs:</strong> Geen punten meer."
            }
          ]
        },
        {
          "sectionTitle": "Deel 2: De Weg naar Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Inkt en Perkament",
              "text": "Begin met het vermalen van bloemen en het maken van je eerste potjes inkt. Maak daarna simpele 'Missives' (brieven die bepalen welke stats een item krijgt)."
            },
            {
              "title": "Level 25 - 50: Alles Eén Keer!",
              "text": "Kies je <strong>Specialisatie</strong> (check de KP Gids!). Maak vanaf nu van elk nieuw recept precies één ding voor de First Craft Kennispunten."
            },
            {
              "title": "Level 50 - 75: Darkmoon Cards",
              "text": "Maak magische Tarotkaarten (Darkmoon Cards). Als je een hele set verzamelt, kun je die inruilen voor een supersterk sieraad (Trinket)!"
            },
            {
              "title": "Level 75 - 100: De Meesterfase",
              "text": "Maak epische (paarse) toverstaven en Vantus Runes (die raid-groepen helpen tegen moeilijke bazen). Gebruik de <strong>Crafting Orders</strong> tafel!"
            }
          ]
        }
      ],
      "tip": "Gouden Tip: 'Missives' zijn altijd super veel geld waard op het Auction House, omdat iedereen ze nodig heeft om hun gear de perfecte stats (zoals Haste of Crit) te geven!"
    },
    "en": {
      "title": "The Ultimate Inscription Guide!",
      "intro": "Become a magical scribe! Make powerful staves, spellbooks, and cards that make you stronger.",
      "sections": [
        {
          "sectionTitle": "Part 1: The Basics",
          "steps": [
            {
              "title": "The Perfect Duo (Herbalism)",
              "text": "You need lots of plants to make ink. Learn <strong>Herbalism</strong> as your second profession! Also make sure you always have a <em>Virtuoso Inking Set</em> and blank parchment with you."
            },
            {
              "title": "Milling",
              "text": "You use the 'Milling' spell to crush your picked flowers into pigments. You make ink from those pigments, and with that ink you write magical spells!"
            },
            {
              "title": "The Colors of Recipes",
              "text": "Watch the colors to level up:<br>🟠 <strong>Orange:</strong> Always +1 skill point!<br>🟡 <strong>Yellow:</strong> Usually a point.<br>🟢 <strong>Green:</strong> Sometimes a point.<br>⚪ <strong>Gray:</strong> No points."
            }
          ]
        },
        {
          "sectionTitle": "Part 2: The Road to Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Ink and Parchment",
              "text": "Start by milling flowers and making your first pots of ink. Then make simple 'Missives' (letters that determine what stats an item gets)."
            },
            {
              "title": "Level 25 - 50: Everything Once!",
              "text": "Choose your <strong>Specialization</strong> (check the KP Guide!). From now on, craft exactly one of every new recipe for the First Craft Knowledge Points."
            },
            {
              "title": "Level 50 - 75: Darkmoon Cards",
              "text": "Make magical Tarot cards (Darkmoon Cards). If you collect a whole set, you can trade it in for a super strong trinket!"
            },
            {
              "title": "Level 75 - 100: The Master Phase",
              "text": "Make epic (purple) staves and Vantus Runes (which help raid groups against difficult bosses). Use the <strong>Crafting Orders</strong> table!"
            }
          ]
        }
      ],
      "tip": "Golden Tip: 'Missives' are always worth a lot of money on the Auction House, because everyone needs them to give their gear the perfect stats (like Haste or Crit)!"
    }},
  "jewelcrafting": {
    "nl": {
      "title": "De Ultieme Jewelcrafting Gids!",
      "intro": "Word een meester-juwelier! Slijp zeldzame edelstenen en maak de mooiste ringen en kettingen.",
      "sections": [
        {
          "sectionTitle": "Deel 1: De Basis",
          "steps": [
            {
              "title": "Het perfecte duo (Mining)",
              "text": "Juweliers halen hun edelstenen uit ruwe ertsen. Leer <strong>Mining</strong> als tweede beroep! Zorg dat je altijd een <em>Jeweler's Toolset</em> in je tas hebt."
            },
            {
              "title": "Prospecting (Gruizen)",
              "text": "Net als Inscription bloemen vermaalt, gebruik jij 'Prospecting' om ruw erts (ore) te vergruizen. Hieruit springen prachtige, ruwe edelstenen!"
            },
            {
              "title": "De Kleuren van Recepten",
              "text": "Let op de kleuren om te levelen:<br>🟠 <strong>Oranje:</strong> Altijd 1 punt erbij!<br>🟡 <strong>Geel:</strong> Meestal een punt.<br>🟢 <strong>Groen:</strong> Soms een punt.<br>⚪ <strong>Grijs:</strong> Geen punten meer."
            }
          ]
        },
        {
          "sectionTitle": "Deel 2: De Weg naar Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Simpel Slijpwerk",
              "text": "Begin met het vergruizen van erts (Prospecting) en het slijpen van simpele, groene edelstenen. Deze kun je in je armor klikken voor extra stats."
            },
            {
              "title": "Level 25 - 50: Alles Eén Keer!",
              "text": "Kies je <strong>Specialisatie</strong> (check de KP Gids!). Maak vanaf nu van elk nieuw recept precies één ding voor de First Craft Kennispunten."
            },
            {
              "title": "Level 50 - 75: Ringen en Kettingen",
              "text": "Nu ga je echte sieraden maken! Maak blauwe ringen en kettingen. Dit kost wat meer materiaal, dus blijf goed mijnen."
            },
            {
              "title": "Level 75 - 100: De Meesterfase",
              "text": "Maak epische (paarse) ringen, kettingen en de allerbeste diamanten. Gebruik de <strong>Crafting Orders</strong> tafel: laat andere spelers jou betalen om hun epische sieraden te maken!"
            }
          ]
        }
      ],
      "tip": "Gouden Tip: Iedereen heeft edelstenen nodig voor in hun gear. Het slijpen van de populairste stenen (zoals Haste of Mastery) is een geweldige manier om rijk te worden!"
    },
    "en": {
      "title": "The Ultimate Jewelcrafting Guide!",
      "intro": "Become a master jeweler! Cut rare gems and make the most beautiful rings and necklaces.",
      "sections": [
        {
          "sectionTitle": "Part 1: The Basics",
          "steps": [
            {
              "title": "The Perfect Duo (Mining)",
              "text": "Jewelers get their gems from raw ores. Learn <strong>Mining</strong> as your second profession! Make sure you always have a <em>Jeweler's Toolset</em> in your bag."
            },
            {
              "title": "Prospecting",
              "text": "Just like Inscription mills flowers, you use 'Prospecting' to crush raw ore. Beautiful, raw gems will pop out of this!"
            },
            {
              "title": "The Colors of Recipes",
              "text": "Watch the colors to level up:<br>🟠 <strong>Orange:</strong> Always +1 skill point!<br>🟡 <strong>Yellow:</strong> Usually a point.<br>🟢 <strong>Green:</strong> Sometimes a point.<br>⚪ <strong>Gray:</strong> No points."
            }
          ]
        },
        {
          "sectionTitle": "Part 2: The Road to Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Simple Cutting",
              "text": "Start by prospecting ore and cutting simple, green gems. You can socket these into your armor for extra stats."
            },
            {
              "title": "Level 25 - 50: Everything Once!",
              "text": "Choose your <strong>Specialization</strong> (check the KP Guide!). From now on, craft exactly one of every new recipe for the First Craft Knowledge Points."
            },
            {
              "title": "Level 50 - 75: Rings and Necklaces",
              "text": "Now you're going to make real jewelry! Make blue rings and necklaces. This costs a bit more material, so keep mining."
            },
            {
              "title": "Level 75 - 100: The Master Phase",
              "text": "Make epic (purple) rings, necklaces, and the very best diamonds. Use the <strong>Crafting Orders</strong> table: let other players pay you to make their epic jewelry!"
            }
          ]
        }
      ],
      "tip": "Golden Tip: Everyone needs gems for their gear. Cutting the most popular stones (like Haste or Mastery) is a great way to get rich!"
    }},
  "tailoring": {
    "nl": {
      "title": "De Ultieme Tailoring Gids!",
      "intro": "Word een meester-kleermaker! Naai magische gewaden, vliegende tapijten en de grootste tassen in WoW.",
      "sections": [
        {
          "sectionTitle": "Deel 1: De Basis",
          "steps": [
            {
              "title": "Geen Verzamelaar Nodig!",
              "text": "Tailoring is uniek: je hebt <strong>geen</strong> verzamel-beroep nodig! Stoffen (Cloth) vallen gewoon van mensachtige monsters (Humanoids) die je verslaat. Enchanting is een goede tweede keuze."
            },
            {
              "title": "De Trainer & Draad",
              "text": "Zoek de <strong>Tailoring Trainer</strong>. Zorg dat je altijd genoeg <em>Thread</em> (draad) koopt bij de verkoper ernaast, want dat heb je voor elk kledingstuk nodig."
            },
            {
              "title": "De Kleuren van Recepten",
              "text": "Let op de kleuren om te levelen:<br>🟠 <strong>Oranje:</strong> Altijd 1 punt erbij!<br>🟡 <strong>Geel:</strong> Meestal een punt.<br>🟢 <strong>Groen:</strong> Soms een punt.<br>⚪ <strong>Grijs:</strong> Geen punten meer."
            }
          ]
        },
        {
          "sectionTitle": "Deel 2: De Weg naar Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Simpel Naaiwerk",
              "text": "Begin met het weven van losse stukjes stof tot hele rollen (Bolts of Cloth). Maak daarna simpele armbanden of riemen."
            },
            {
              "title": "Level 25 - 50: Alles Eén Keer!",
              "text": "Kies je <strong>Specialisatie</strong> (check de KP Gids!). Maak vanaf nu van elk nieuw recept precies één ding voor de First Craft Kennispunten."
            },
            {
              "title": "Level 50 - 75: Tassen & PvP",
              "text": "Iedereen heeft tassen (Bags) nodig voor meer ruimte! Maak tassen en verkoop ze op het Auction House. Maak ook blauwe PvP-kleding."
            },
            {
              "title": "Level 75 - 100: De Meesterfase",
              "text": "Maak epische (paarse) gewaden voor Mages, Warlocks en Priests. Gebruik de <strong>Crafting Orders</strong> tafel: laat andere spelers jou betalen om hun epische kleding te naaien!"
            }
          ]
        }
      ],
      "tip": "Gouden Tip: Als Tailor vind je meer stof van monsters dan andere spelers. Ga dus lekker veel dungeons doen of monsters verslaan om rijk te worden aan stof!"
    },
    "en": {
      "title": "The Ultimate Tailoring Guide!",
      "intro": "Become a master tailor! Sew magical robes, flying carpets, and the biggest bags in WoW.",
      "sections": [
        {
          "sectionTitle": "Part 1: The Basics",
          "steps": [
            {
              "title": "No Gatherer Needed!",
              "text": "Tailoring is unique: you <strong>don't</strong> need a gathering profession! Cloth just drops from humanoid monsters you defeat. Enchanting is a good second choice."
            },
            {
              "title": "The Trainer & Thread",
              "text": "Find the <strong>Tailoring Trainer</strong>. Make sure you always buy enough <em>Thread</em> from the vendor next to them, because you need it for every piece of clothing."
            },
            {
              "title": "The Colors of Recipes",
              "text": "Watch the colors to level up:<br>🟠 <strong>Orange:</strong> Always +1 skill point!<br>🟡 <strong>Yellow:</strong> Usually a point.<br>🟢 <strong>Green:</strong> Sometimes a point.<br>⚪ <strong>Gray:</strong> No points."
            }
          ]
        },
        {
          "sectionTitle": "Part 2: The Road to Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Simple Sewing",
              "text": "Start by weaving loose pieces of cloth into whole rolls (Bolts of Cloth). Then make simple bracers or belts."
            },
            {
              "title": "Level 25 - 50: Everything Once!",
              "text": "Choose your <strong>Specialization</strong> (check the KP Guide!). From now on, craft exactly one of every new recipe for the First Craft Knowledge Points."
            },
            {
              "title": "Level 50 - 75: Bags & PvP",
              "text": "Everyone needs bags for more space! Make bags and sell them on the Auction House. Also make blue PvP clothing."
            },
            {
              "title": "Level 75 - 100: The Master Phase",
              "text": "Make epic (purple) robes for Mages, Warlocks, and Priests. Use the <strong>Crafting Orders</strong> table: let other players pay you to sew their epic clothes!"
            }
          ]
        }
      ],
      "tip": "Golden Tip: As a Tailor, you find more cloth from monsters than other players. So go do lots of dungeons or defeat monsters to get rich in cloth!"
    }},
  "skinning": {
    "nl": {
      "title": "De Ultieme Skinning Gids!",
      "intro": "Word een meester-jager! Verzamel leer en schubben van verslagen beesten om te verkopen of zelf te gebruiken.",
      "sections": [
        {
          "sectionTitle": "Deel 1: De Basis",
          "steps": [
            {
              "title": "Het perfecte duo (Leatherworking)",
              "text": "Omdat je heel veel leer verzamelt, is <strong>Leatherworking</strong> het perfecte tweede beroep. Zo kun je van je eigen leer direct coole armor maken!"
            },
            {
              "title": "Je Gereedschap",
              "text": "Zorg dat je een <em>Skinning Knife</em> (vilmes) koopt bij een verkoper en deze uitrust in je speciale beroepen-slot (druk op 'P' en sleep hem erin)."
            },
            {
              "title": "Hoe werkt het?",
              "text": "Versla een beest (zoals een wolf of beer). Loot eerst alle spullen die het beest bij zich heeft. Daarna gaat je muis glinsteren als je eroverheen gaat: klik rechts om te 'skinnen'!"
            }
          ]
        },
        {
          "sectionTitle": "Deel 2: De Weg naar Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Gewoon villen!",
              "text": "Ga naar buiten en versla elk beest dat je ziet. Elk beest dat je vilt, geeft je een punt. Dit gaat super snel!"
            },
            {
              "title": "Level 25 - 50: Specialisatie",
              "text": "Op level 25 mag je een <strong>Specialisatie</strong> kiezen (check de KP Gids!). Kies bijvoorbeeld of je beter wilt worden in het verzamelen van leer, of juist schubben (scales)."
            },
            {
              "title": "Level 50 - 100: Zeldzame Beesten",
              "text": "Naarmate je hoger komt, geven makkelijke beesten geen punten meer. Je moet nu op zoek naar sterkere, zeldzamere beesten of Elite monsters om de laatste levels te halen."
            }
          ]
        }
      ],
      "tip": "Gouden Tip: Zie je dode beesten liggen die een andere speler al geloot heeft? Jij kunt ze nog steeds skinnen! Gratis leer zonder te vechten!"
    },
    "en": {
      "title": "The Ultimate Skinning Guide!",
      "intro": "Become a master hunter! Collect leather and scales from defeated beasts to sell or use yourself.",
      "sections": [
        {
          "sectionTitle": "Part 1: The Basics",
          "steps": [
            {
              "title": "The Perfect Duo (Leatherworking)",
              "text": "Because you collect a lot of leather, <strong>Leatherworking</strong> is the perfect second profession. This way you can make cool armor directly from your own leather!"
            },
            {
              "title": "Your Tool",
              "text": "Make sure you buy a <em>Skinning Knife</em> from a vendor and equip it in your special profession slot (press 'P' and drag it in)."
            },
            {
              "title": "How does it work?",
              "text": "Defeat a beast (like a wolf or bear). First loot all the items the beast has. Then your mouse will sparkle when you hover over it: right-click to skin!"
            }
          ]
        },
        {
          "sectionTitle": "Part 2: The Road to Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Just Skin!",
              "text": "Go outside and defeat every beast you see. Every beast you skin gives you a point. This goes super fast!"
            },
            {
              "title": "Level 25 - 50: Specialization",
              "text": "At level 25 you can choose a <strong>Specialization</strong> (check the KP Guide!). For example, choose whether you want to get better at collecting leather, or scales."
            },
            {
              "title": "Level 50 - 100: Rare Beasts",
              "text": "As you get higher, easy beasts won't give points anymore. You now have to look for stronger, rarer beasts or Elite monsters to get the final levels."
            }
          ]
        }
      ],
      "tip": "Golden Tip: Do you see dead beasts lying around that another player has already looted? You can still skin them! Free leather without fighting!"
    }},
  "mining": {
    "nl": {
      "title": "De Ultieme Mining Gids!",
      "intro": "Word een meester-mijnwerker! Hak waardevolle ertsen en edelstenen uit de stenen in de wereld.",
      "sections": [
        {
          "sectionTitle": "Deel 1: De Basis",
          "steps": [
            {
              "title": "Het perfecte duo (Blacksmithing/Engineering/Jewelcrafting)",
              "text": "Mining levert metaal. Dit is perfect te combineren met beroepen die metaal nodig hebben, zoals <strong>Blacksmithing</strong>, <strong>Engineering</strong> of <strong>Jewelcrafting</strong>!"
            },
            {
              "title": "Je Gereedschap & Tracking",
              "text": "Koop een <em>Mining Pick</em> (pikhouweel) en rust hem uit. Klik op het kleine verrekijker-icoontje bij je minimap en zet 'Track Minerals' aan. Nu zie je gele stipjes op de kaart waar stenen zijn!"
            },
            {
              "title": "Hoe werkt het?",
              "text": "Loop naar een steen (ore node) in de wereld en klik er rechts op om te hakken. Je krijgt erts (ore) en soms zeldzame edelstenen!"
            }
          ]
        },
        {
          "sectionTitle": "Deel 2: De Weg naar Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Hakken maar!",
              "text": "Hak elke steen die je tegenkomt. In het begin geeft elke steen je een level omhoog."
            },
            {
              "title": "Level 25 - 50: Specialisatie",
              "text": "Op level 25 mag je een <strong>Specialisatie</strong> kiezen (check de KP Gids!). Wil je meer erts vinden, of wil je leren hoe je stenen kunt hakken terwijl je op je mount zit?"
            },
            {
              "title": "Level 50 - 100: Zeldzame Stenen",
              "text": "Gewone stenen geven straks geen punten meer. Je moet op zoek naar speciale stenen (zoals Camouflaged of Webbed ore) of heel zeldzame ertsen zoals Bismuth en Ironclaw om level 100 te halen."
            }
          ]
        }
      ],
      "tip": "Gouden Tip: Als je de juiste specialisatie kiest, kun je ertsen hakken zónder van je vliegende mount af te stappen. Dit bespaart enorm veel tijd!"
    },
    "en": {
      "title": "The Ultimate Mining Guide!",
      "intro": "Become a master miner! Hack valuable ores and gems from the rocks in the world.",
      "sections": [
        {
          "sectionTitle": "Part 1: The Basics",
          "steps": [
            {
              "title": "The Perfect Duo (Blacksmithing/Engineering/Jewelcrafting)",
              "text": "Mining provides metal. This is perfectly combined with professions that need metal, like <strong>Blacksmithing</strong>, <strong>Engineering</strong>, or <strong>Jewelcrafting</strong>!"
            },
            {
              "title": "Your Tool & Tracking",
              "text": "Buy a <em>Mining Pick</em> and equip it. Click the small binoculars icon near your minimap and turn on 'Track Minerals'. Now you will see yellow dots on the map where rocks are!"
            },
            {
              "title": "How does it work?",
              "text": "Walk up to a rock (ore node) in the world and right-click it to mine. You will get ore and sometimes rare gems!"
            }
          ]
        },
        {
          "sectionTitle": "Part 2: The Road to Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Just Mine!",
              "text": "Mine every rock you come across. In the beginning, every rock gives you a level up."
            },
            {
              "title": "Level 25 - 50: Specialization",
              "text": "At level 25 you can choose a <strong>Specialization</strong> (check the KP Guide!). Do you want to find more ore, or do you want to learn how to mine rocks while sitting on your mount?"
            },
            {
              "title": "Level 50 - 100: Rare Rocks",
              "text": "Normal rocks won't give points anymore later on. You have to look for special rocks (like Camouflaged or Webbed ore) or very rare ores like Bismuth and Ironclaw to reach level 100."
            }
          ]
        }
      ],
      "tip": "Golden Tip: If you choose the right specialization, you can mine ores WITHOUT dismounting your flying mount. This saves a huge amount of time!"
    }},
  "herbalism": {
    "nl": {
      "title": "De Ultieme Herbalism Gids!",
      "intro": "Word een meester-kruidenzoeker! Pluk de mooiste en gevaarlijkste bloemen in de wereld.",
      "sections": [
        {
          "sectionTitle": "Deel 1: De Basis",
          "steps": [
            {
              "title": "Het perfecte duo (Alchemy/Inscription)",
              "text": "Planten zijn nodig voor drankjes en inkt. Combineer Herbalism daarom met <strong>Alchemy</strong> of <strong>Inscription</strong>!"
            },
            {
              "title": "Je Gereedschap & Tracking",
              "text": "Koop een <em>Herbalist's Spade</em> (schepje) en rust hem uit. Klik op het verrekijker-icoontje bij je minimap en zet 'Track Herbs' aan. Nu zie je gele stipjes op de kaart waar bloemen staan!"
            },
            {
              "title": "Hoe werkt het?",
              "text": "Loop naar een plant in de wereld en klik er rechts op om hem te plukken. Soms krijg je er ook magische zaden bij!"
            }
          ]
        },
        {
          "sectionTitle": "Deel 2: De Weg naar Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Plukken maar!",
              "text": "Pluk elke bloem die je ziet. Mycobloom is de meest voorkomende bloem en perfect om mee te beginnen."
            },
            {
              "title": "Level 25 - 50: Specialisatie",
              "text": "Op level 25 mag je een <strong>Specialisatie</strong> kiezen (check de KP Gids!). Wil je leren hoe je bloemen kunt plukken zonder van je mount af te stappen?"
            },
            {
              "title": "Level 50 - 100: Gemuteerde Planten",
              "text": "Gewone bloemen geven straks geen punten meer. Zoek naar speciale, gemuteerde planten (zoals Irradiated of Crystallized kruiden) om de laatste levels te halen."
            }
          ]
        }
      ],
      "tip": "Gouden Tip: Soms vind je speciale zaden tijdens het plukken. Deze kun je planten in speciale aarde (Rich Soil) om direct een zeldzame plant te laten groeien!"
    },
    "en": {
      "title": "The Ultimate Herbalism Guide!",
      "intro": "Become a master herbalist! Pick the most beautiful and dangerous flowers in the world.",
      "sections": [
        {
          "sectionTitle": "Part 1: The Basics",
          "steps": [
            {
              "title": "The Perfect Duo (Alchemy/Inscription)",
              "text": "Plants are needed for potions and ink. Combine Herbalism with <strong>Alchemy</strong> or <strong>Inscription</strong>!"
            },
            {
              "title": "Your Tool & Tracking",
              "text": "Buy a <em>Herbalist's Spade</em> and equip it. Click the binoculars icon near your minimap and turn on 'Track Herbs'. Now you will see yellow dots on the map where flowers are!"
            },
            {
              "title": "How does it work?",
              "text": "Walk up to a plant in the world and right-click it to pick it. Sometimes you also get magical seeds!"
            }
          ]
        },
        {
          "sectionTitle": "Part 2: The Road to Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Just Pick!",
              "text": "Pick every flower you see. Mycobloom is the most common flower and perfect to start with."
            },
            {
              "title": "Level 25 - 50: Specialization",
              "text": "At level 25 you can choose a <strong>Specialization</strong> (check the KP Guide!). Do you want to learn how to pick flowers without dismounting?"
            },
            {
              "title": "Level 50 - 100: Mutated Plants",
              "text": "Normal flowers won't give points anymore later on. Look for special, mutated plants (like Irradiated or Crystallized herbs) to get the final levels."
            }
          ]
        }
      ],
      "tip": "Golden Tip: Sometimes you find special seeds while picking. You can plant these in special dirt (Rich Soil) to instantly grow a rare plant!"
    }},
  "cooking": {
    "nl": {
      "title": "De Ultieme Cooking Gids!",
      "intro": "Word een meesterkok! Kook heerlijke maaltijden die jou en je vrienden sterker maken.",
      "sections": [
        {
          "sectionTitle": "Deel 1: De Basis",
          "steps": [
            {
              "title": "Een Secundair Beroep",
              "text": "Cooking is een <strong>Secundair Beroep</strong>. Dit betekent dat IEDEREEN het kan leren, naast je twee hoofdberoepen! Het is perfect te combineren met <em>Fishing</em> (Vissen)."
            },
            {
              "title": "De Trainer & Het Kampvuur",
              "text": "Zoek de <strong>Cooking Trainer</strong>. Om te koken heb je vuur nodig. Je kunt naast een fornuis in de stad staan, of zelf een <em>Basic Campfire</em> (kampvuur) maken in de wildernis!"
            },
            {
              "title": "De Kleuren van Recepten",
              "text": "Let op de kleuren om te levelen:<br>🟠 <strong>Oranje:</strong> Altijd 1 punt erbij!<br>🟡 <strong>Geel:</strong> Meestal een punt.<br>🟢 <strong>Groen:</strong> Soms een punt.<br>⚪ <strong>Grijs:</strong> Geen punten meer."
            }
          ]
        },
        {
          "sectionTitle": "Deel 2: De Weg naar Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Simpele Snacks",
              "text": "Begin met het braden van stukken vlees die je van beesten krijgt (zoals wolven). Dit is heel makkelijk en goedkoop."
            },
            {
              "title": "Level 25 - 50: Visgerechten",
              "text": "Nu heb je vis nodig! Ga zelf vissen of koop vis op het Auction House om betere maaltijden te maken."
            },
            {
              "title": "Level 50 - 100: Feestmalen (Feasts)",
              "text": "Voor de laatste levels maak je enorme 'Feasts'. Dit zijn grote tafels vol eten waar je hele raid-groep van kan eten. Ze kosten veel ingrediënten, maar iedereen zal je dankbaar zijn!"
            }
          ]
        }
      ],
      "tip": "Gouden Tip: Eet altijd een maaltijd voordat je een moeilijke dungeon of raid ingaat. De 'Well Fed' buff geeft je extra stats waardoor je veel sterker bent!"
    },
    "en": {
      "title": "The Ultimate Cooking Guide!",
      "intro": "Become a master chef! Cook delicious meals that make you and your friends stronger.",
      "sections": [
        {
          "sectionTitle": "Part 1: The Basics",
          "steps": [
            {
              "title": "A Secondary Profession",
              "text": "Cooking is a <strong>Secondary Profession</strong>. This means EVERYONE can learn it, alongside your two main professions! It combos perfectly with <em>Fishing</em>."
            },
            {
              "title": "The Trainer & The Campfire",
              "text": "Find the <strong>Cooking Trainer</strong>. To cook, you need fire. You can stand next to a stove in the city, or make a <em>Basic Campfire</em> yourself in the wild!"
            },
            {
              "title": "The Colors of Recipes",
              "text": "Watch the colors to level up:<br>🟠 <strong>Orange:</strong> Always +1 skill point!<br>🟡 <strong>Yellow:</strong> Usually a point.<br>🟢 <strong>Green:</strong> Sometimes a point.<br>⚪ <strong>Gray:</strong> No points."
            }
          ]
        },
        {
          "sectionTitle": "Part 2: The Road to Level 100",
          "steps": [
            {
              "title": "Level 1 - 25: Simple Snacks",
              "text": "Start by roasting pieces of meat you get from beasts (like wolves). This is very easy and cheap."
            },
            {
              "title": "Level 25 - 50: Fish Dishes",
              "text": "Now you need fish! Go fishing yourself or buy fish on the Auction House to make better meals."
            },
            {
              "title": "Level 50 - 100: Feasts",
              "text": "For the final levels you make huge 'Feasts'. These are large tables full of food that your whole raid group can eat from. They cost a lot of ingredients, but everyone will thank you!"
            }
          ]
        }
      ],
      "tip": "Golden Tip: Always eat a meal before entering a difficult dungeon or raid. The 'Well Fed' buff gives you extra stats making you much stronger!"
    }},
  "fishing": {
    "nl": {
      "title": "De Ultieme Fishing Gids!",
      "intro": "Word een meester-visser! Ontspan aan het water en vang de zeldzaamste vissen in Azeroth.",
      "sections": [
        {
          "sectionTitle": "Deel 1: De Basis",
          "steps": [
            {
              "title": "Een Secundair Beroep",
              "text": "Fishing is een <strong>Secundair Beroep</strong>. IEDEREEN kan het leren! Het is de perfecte manier om ingrediënten te verzamelen voor <em>Cooking</em>."
            },
            {
              "title": "Je Hengel",
              "text": "Zoek de <strong>Fishing Trainer</strong>. Koop een <em>Fishing Pole</em> (hengel) en rust hem uit in je beroepen-slot. Zoek een mooi stukje water op!"
            },
            {
              "title": "Hoe werkt het?",
              "text": "Gebruik je 'Fishing' spreuk. Je gooit een dobber in het water. Wacht rustig af... Zodra de dobber beweegt en je een 'plons' hoort, klik je er snel op om de vis binnen te halen!"
            }
          ]
        },
        {
          "sectionTitle": "Deel 2: De Weg naar Level 100",
          "steps": [
            {
              "title": "Level 1 - 50: Geduld is een schone zaak",
              "text": "Vissen is heel simpel: je hoeft alleen maar te vissen! Elke keer dat je iets vangt, heb je een kans om een punt te krijgen. Hoe hoger je level, hoe meer vissen je moet vangen voor 1 punt."
            },
            {
              "title": "Level 50 - 100: Pools of Fish",
              "text": "Zie je kringen in het water met vissen erin? Dat zijn 'Pools'. Gooi je dobber precies daarin! Hier vang je gegarandeerd zeldzame vissen die veel goud waard zijn op het Auction House."
            }
          ]
        }
      ],
      "tip": "Gouden Tip: Zet het geluid van je game wat harder als je vist. Je kunt dan met je ogen dicht vissen en gewoon klikken zodra je de 'plons' hoort!"
    },
    "en": {
      "title": "The Ultimate Fishing Guide!",
      "intro": "Become a master angler! Relax by the water and catch the rarest fish in Azeroth.",
      "sections": [
        {
          "sectionTitle": "Part 1: The Basics",
          "steps": [
            {
              "title": "A Secondary Profession",
              "text": "Fishing is a <strong>Secondary Profession</strong>. EVERYONE can learn it! It's the perfect way to gather ingredients for <em>Cooking</em>."
            },
            {
              "title": "Your Fishing Pole",
              "text": "Find the <strong>Fishing Trainer</strong>. Buy a <em>Fishing Pole</em> and equip it in your profession slot. Find a nice body of water!"
            },
            {
              "title": "How does it work?",
              "text": "Use your 'Fishing' spell. You throw a bobber into the water. Wait patiently... As soon as the bobber moves and you hear a 'splash', click it quickly to reel in the fish!"
            }
          ]
        },
        {
          "sectionTitle": "Part 2: The Road to Level 100",
          "steps": [
            {
              "title": "Level 1 - 50: Patience is a virtue",
              "text": "Fishing is very simple: you just have to fish! Every time you catch something, you have a chance to get a point. The higher your level, the more fish you have to catch for 1 point."
            },
            {
              "title": "Level 50 - 100: Pools of Fish",
              "text": "Do you see circles in the water with fish in them? Those are 'Pools'. Throw your bobber exactly in there! Here you are guaranteed to catch rare fish that are worth a lot of gold on the Auction House."
            }
          ]
        }
      ],
      "tip": "Golden Tip: Turn up the sound of your game a bit when fishing. You can then fish with your eyes closed and just click as soon as you hear the 'splash'!"
    }}
};
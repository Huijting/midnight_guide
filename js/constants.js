// ── Keystone.guru UI strings ──
const KG_STRINGS = {
  nl: { title:'🗺 Route op Keystone.guru', hint:'Tik buiten het venster of druk op Sluiten', close:'✕ Sluiten', btn_label:'Bekijk M+ route op Keystone.guru', btn_sub:'Opent Keystone.guru in een nieuw tabblad' },
  en: { title:'🗺 Route on Keystone.guru', hint:'Tap outside or press Close', close:'✕ Close', btn_label:'View M+ route on Keystone.guru', btn_sub:'Opens Keystone.guru in a new tab' },
  da: { title:'🗺 Rute på Keystone.guru', hint:'Tryk uden for vinduet eller tryk Luk', close:'✕ Luk', btn_label:'Se M+ rute på Keystone.guru', btn_sub:'Åbner Keystone.guru i en ny fane' }
};

// ── Alle professions samenvoegen ──
const ALL_PROFS = [SKINNING,LEATHERWORKING,MINING,HERBALISM,ALCHEMY,BLACKSMITHING,ENCHANTING,ENGINEERING,INSCRIPTION,JEWELCRAFTING,TAILORING,COOKING,FISHING];

// ── Leatherworking Beginner Guide Data ──
const LW_GUIDE_DATA = {
  nl: {
    title: "De Ultieme Leatherworking Gids voor Beginners!",
    intro: "Wil jij je eigen epische bepantsering maken? Dan is Leatherworking (Leerbewerken) echt iets voor jou! In deze gids leer je stap voor stap hoe je een meester-leerbewerker wordt in World of Warcraft.",
    steps: [
      {
        title: "Stap 1: Het perfecte duo (Skinning)",
        text: "Je hebt heel veel dierenhuiden nodig. Leer daarom <strong>Skinning</strong> als je tweede beroep! Rust een <em>Skinning Knife</em> uit in je speciale beroepen-slot. Versla beesten zoals wolven en beren, en 'skin' ze voor materialen!"
      },
      {
        title: "Stap 2: De Trainer vinden",
        text: "Ga naar de grote stad (zoals Dornogal) en praat met een bewaker. Vraag naar de <strong>Leatherworking Trainer</strong>. Leer hier de basis en koop meteen wat <em>Thread</em> (draad) bij de verkoper ernaast."
      },
      {
        title: "Stap 3: Je eerste item maken",
        text: "Druk op <strong>'P'</strong> om je spreukenboek te openen en klik op Leatherworking. Kies een simpel recept, bijvoorbeeld een Leather Vest. Zorg dat je de materialen hebt en klik op <strong>Craft</strong> (Maken)!"
      },
      {
        title: "Stap 4: Level up! (De Kleuren)",
        text: "Let goed op de kleuren van je recepten om snel level 100 te worden:<br>🟠 <strong>Oranje:</strong> Altijd 1 punt erbij!<br>🟡 <strong>Geel:</strong> Meestal een punt.<br>🟢 <strong>Groen:</strong> Soms een punt.<br>⚪ <strong>Grijs:</strong> Geen punten meer. Maak altijd Oranje of Geel!"
      },
      {
        title: "Stap 5: De 'First Craft' Bonus",
        text: "Maak je een item voor de allereerste keer? Dan krijg je een <strong>Knowledge Point</strong> (Kennispunt)! Probeer dus van elk recept minstens één ding te maken. Dit helpt je later enorm."
      },
      {
        title: "Stap 6: Specialisaties (Level 25)",
        text: "Zodra je level 25 bent, mag je een specialisatie kiezen. Wil je de beste Mail-armor maken voor Hunters? Of juist Leather voor Rogues? Kies slim en gebruik je Kennispunten om de allerbeste spullen te maken!"
      },
      {
        title: "Stap 7: Geld verdienen met Crafting Orders",
        text: "Heb je coole spullen gemaakt? Verkoop ze op het <strong>Auction House</strong>! Of nog beter: gebruik de <em>Crafting Orders</em> tafel. Hier betalen andere spelers jou goud om specifieke gear voor hen te maken!"
      }
    ],
    tip: "Gouden Tip: Gebruik je 'Concentration' (Concentratie) slim! Hiermee kun je items van een hogere kwaliteit maken dan je eigenlijk kunt. Het laadt elke dag langzaam weer op."
  },
  en: {
    title: "The Ultimate Leatherworking Guide for Beginners!",
    intro: "Do you want to craft your own epic armor? Then Leatherworking is for you! In this guide, you'll learn step-by-step how to become a master leatherworker in World of Warcraft.",
    steps: [
      {
        title: "Step 1: The Perfect Duo (Skinning)",
        text: "You will need lots of animal hides. That's why you should learn <strong>Skinning</strong> as your second profession! Equip a <em>Skinning Knife</em> in your profession tool slot. Defeat beasts like wolves and bears, and skin them for materials!"
      },
      {
        title: "Step 2: Finding the Trainer",
        text: "Go to the main city (like Dornogal) and talk to a guard. Ask for the <strong>Leatherworking Trainer</strong>. Learn the basics here and buy some <em>Thread</em> from the vendor next to them."
      },
      {
        title: "Step 3: Crafting your first item",
        text: "Press <strong>'P'</strong> to open your spellbook and click on Leatherworking. Choose a simple recipe, like a Leather Vest. Make sure you have the materials and click <strong>Craft</strong>!"
      },
      {
        title: "Step 4: Level Up! (The Colors)",
        text: "Pay close attention to the colors of your recipes to reach level 100 fast:<br>🟠 <strong>Orange:</strong> Always +1 skill point!<br>🟡 <strong>Yellow:</strong> Usually a point.<br>🟢 <strong>Green:</strong> Sometimes a point.<br>⚪ <strong>Gray:</strong> No points. Always craft Orange or Yellow!"
      },
      {
        title: "Step 5: The 'First Craft' Bonus",
        text: "Crafting an item for the very first time? You'll get a <strong>Knowledge Point</strong>! Try to craft at least one of every recipe. This will help you a lot later on."
      },
      {
        title: "Step 6: Specializations (Level 25)",
        text: "Once you hit level 25, you can choose a specialization. Do you want to make the best Mail armor for Hunters? Or Leather for Rogues? Choose wisely and use your Knowledge Points to craft the best gear!"
      },
      {
        title: "Step 7: Making Gold with Crafting Orders",
        text: "Made some cool gear? Sell it on the <strong>Auction House</strong>! Or even better: use the <em>Crafting Orders</em> table. Here, other players will pay you gold to craft specific gear for them!"
      }
    ],
    tip: "Golden Tip: Use your 'Concentration' smartly! It allows you to craft items at a higher quality than you normally could. It slowly recharges every day."
  },
  da: {
    title: "Den Ultimative Læderbearbejdningsguide for Begyndere!",
    intro: "Vil du lave din egen episke rustning? Så er Leatherworking (Læderbearbejdning) lige noget for dig! I denne guide lærer du trin-for-trin, hvordan du bliver en mester i World of Warcraft.",
    steps: [
      {
        title: "Trin 1: Den perfekte duo (Skinning)",
        text: "Du får brug for masser af dyreskind. Lær derfor <strong>Skinning</strong> som dit andet erhverv! Udstyr en <em>Skinning Knife</em> i dit profession-slot. Bekæmp udyr som ulve og bjørne, og flå dem for materialer!"
      },
      {
        title: "Trin 2: Find Træneren",
        text: "Gå til hovedstaden (som Dornogal) og tal med en vagt. Spørg efter <strong>Leatherworking Trainer</strong>. Lær det grundlæggende her, og køb lidt <em>Thread</em> (tråd) hos sælgeren ved siden af."
      },
      {
        title: "Trin 3: Lav din første genstand",
        text: "Tryk på <strong>'P'</strong> for at åbne din formularbog og klik på Leatherworking. Vælg en simpel opskrift, f.eks. en Leather Vest. Sørg for at have materialerne, og klik på <strong>Craft</strong> (Fremstil)!"
      },
      {
        title: "Trin 4: Level op! (Farverne)",
        text: "Hold godt øje med farverne på dine opskrifter for at nå level 100 hurtigt:<br>🟠 <strong>Orange:</strong> Altid +1 point!<br>🟡 <strong>Gul:</strong> Normalt et point.<br>🟢 <strong>Grøn:</strong> Nogle gange et point.<br>⚪ <strong>Grå:</strong> Ingen point. Lav altid Orange eller Gul!"
      },
      {
        title: "Trin 5: 'First Craft' Bonussen",
        text: "Laver du en genstand for allerførste gang? Så får du et <strong>Knowledge Point</strong> (Videnspoint)! Prøv at lave mindst én af hver opskrift. Det vil hjælpe dig meget senere."
      },
      {
        title: "Trin 6: Specialiseringer (Level 25)",
        text: "Når du når level 25, kan du vælge en specialisering. Vil du lave den bedste Mail-rustning til Hunters? Eller Leather til Rogues? Vælg klogt, og brug dine Videnspoint til at lave det bedste udstyr!"
      },
      {
        title: "Trin 7: Tjen Guld med Crafting Orders",
        text: "Har du lavet noget sejt udstyr? Sælg det på <strong>Auction House</strong> (Auktionshuset)! Eller endnu bedre: brug <em>Crafting Orders</em>-bordet. Her betaler andre spillere dig guld for at lave specifikt udstyr til dem!"
      }
    ],
    tip: "Gyldent Tip: Brug din 'Concentration' (Koncentration) klogt! Det giver dig mulighed for at lave genstande af højere kvalitet, end du normalt kan. Det genoplades langsomt hver dag."
  }
};

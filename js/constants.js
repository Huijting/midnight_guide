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
    title: "De Ultieme Leatherworking Gids!",
    intro: "Word een meester-leerbewerker! Deze gids legt je alles uit, van je allereerste stiksel tot het bereiken van level 100.",
    sections: [
      {
        sectionTitle: "Deel 1: De Basis",
        steps: [
          {
            title: "Het perfecte duo (Skinning)",
            text: "Je hebt heel veel dierenhuiden nodig. Leer daarom <strong>Skinning</strong> als je tweede beroep! Rust een <em>Skinning Knife</em> uit in je speciale beroepen-slot. Versla beesten zoals wolven en beren, en 'skin' ze voor materialen!"
          },
          {
            title: "De Trainer vinden",
            text: "Ga naar de grote stad (zoals Dornogal) en praat met een bewaker. Vraag naar de <strong>Leatherworking Trainer</strong>. Leer hier de basis en koop meteen wat <em>Thread</em> (draad) bij de verkoper ernaast."
          },
          {
            title: "De Kleuren van Recepten",
            text: "Let goed op de kleuren van je recepten om snel omhoog te gaan:<br>🟠 <strong>Oranje:</strong> Altijd 1 punt erbij!<br>🟡 <strong>Geel:</strong> Meestal een punt.<br>🟢 <strong>Groen:</strong> Soms een punt.<br>⚪ <strong>Grijs:</strong> Geen punten meer. Maak altijd Oranje of Geel!"
          },
          {
            title: "De 'First Craft' Bonus",
            text: "Maak je een item voor de allereerste keer? Dan krijg je een <strong>Knowledge Point</strong> (Kennispunt)! Probeer dus van elk recept minstens één ding te maken. Dit helpt je later enorm bij je specialisatie."
          }
        ]
      },
      {
        sectionTitle: "Deel 2: De Weg naar Level 100",
        steps: [
          {
            title: "Level 1 - 25: Simpel Begin",
            text: "Open je spreukenboek ('P') en begin met het maken van simpele armbanden (zoals <em>Pioneer's Leather Wristbands</em>). Blijf deze maken zolang de kleur Oranje of Geel is!"
          },
          {
            title: "Level 25 - 50: Alles Eén Keer!",
            text: "Op level 25 mag je een <strong>Specialisatie</strong> kiezen. Weet je niet goed wat je moet kiezen? Kijk dan in de <strong>'KP Gids'</strong> tab hierboven! Daar hebben we de beste routes voor je uitgestippeld. Maak vanaf nu van elk nieuw recept precies één ding. Zo scoor je die First Craft bonussen en vlieg je door de levels heen."
          },
          {
            title: "Level 50 - 75: Beroepskleding & PvP",
            text: "De normale spullen geven nu geen punten meer (ze zijn grijs). Maak nu spullen voor andere beroepen (zoals tassen) of PvP-kleding. Dit kost wat meer materialen, dus ga lekker veel monsters 'skinnen'!"
          },
          {
            title: "Level 75 - 100: De Meesterfase",
            text: "Nu wordt het lastig! Je kunt alleen nog omhoog door epische (paarse) spullen te maken. Hiervoor heb je speciale 'Sparks' nodig. Omdat je er daar zelf niet genoeg van hebt, moet je de <strong>Crafting Orders</strong> tafel gebruiken. Hier betalen andere spelers jou goud om met hún Sparks spullen voor ze te maken. Zo bereik jij level 100!"
          }
        ]
      }
    ],
    tip: "Gouden Tip: Gebruik je 'Concentration' (Concentratie) slim! Hiermee kun je items van een hogere kwaliteit maken dan je eigenlijk kunt. Het laadt elke dag langzaam weer op."
  },
  en: {
    title: "The Ultimate Leatherworking Guide!",
    intro: "Become a master leatherworker! This guide explains everything, from your very first stitch to reaching level 100.",
    sections: [
      {
        sectionTitle: "Part 1: The Basics",
        steps: [
          {
            title: "The Perfect Duo (Skinning)",
            text: "You will need lots of animal hides. That's why you should learn <strong>Skinning</strong> as your second profession! Equip a <em>Skinning Knife</em> in your profession tool slot. Defeat beasts like wolves and bears, and skin them for materials!"
          },
          {
            title: "Finding the Trainer",
            text: "Go to the main city (like Dornogal) and talk to a guard. Ask for the <strong>Leatherworking Trainer</strong>. Learn the basics here and buy some <em>Thread</em> from the vendor next to them."
          },
          {
            title: "The Colors of Recipes",
            text: "Pay close attention to the colors of your recipes to level up fast:<br>🟠 <strong>Orange:</strong> Always +1 skill point!<br>🟡 <strong>Yellow:</strong> Usually a point.<br>🟢 <strong>Green:</strong> Sometimes a point.<br>⚪ <strong>Gray:</strong> No points. Always craft Orange or Yellow!"
          },
          {
            title: "The 'First Craft' Bonus",
            text: "Crafting an item for the very first time? You'll get a <strong>Knowledge Point</strong>! Try to craft at least one of every recipe. This will help you a lot later on with your specialization."
          }
        ]
      },
      {
        sectionTitle: "Part 2: The Road to Level 100",
        steps: [
          {
            title: "Level 1 - 25: Simple Start",
            text: "Open your spellbook ('P') and start crafting simple bracers (like <em>Pioneer's Leather Wristbands</em>). Keep crafting these as long as the color is Orange or Yellow!"
          },
          {
            title: "Level 25 - 50: Everything Once!",
            text: "At level 25 you can choose a <strong>Specialization</strong>. Not sure what to pick? Check out the <strong>'KP Guide'</strong> tab above! We have mapped out the best routes for you there. From now on, craft exactly one of every new recipe. This way you score those First Craft bonuses and fly through the levels."
          },
          {
            title: "Level 50 - 75: Profession Gear & PvP",
            text: "Normal gear won't give points anymore (they are gray). Now craft items for other professions (like bags) or PvP gear. This costs more materials, so go out and skin lots of monsters!"
          },
          {
            title: "Level 75 - 100: The Master Phase",
            text: "Now it gets tricky! You can only level up by crafting epic (purple) gear. You need special 'Sparks' for this. Because you don't have enough of those yourself, you must use the <strong>Crafting Orders</strong> table. Here, other players pay you gold to craft items for them using THEIR Sparks. That's how you reach level 100!"
          }
        ]
      }
    ],
    tip: "Golden Tip: Use your 'Concentration' smartly! It allows you to craft items at a higher quality than you normally could. It slowly recharges every day."
  },
  da: {
    title: "Den Ultimative Læderbearbejdningsguide!",
    intro: "Bliv en mester i læderbearbejdning! Denne guide forklarer alt, fra dit allerførste sting til at nå level 100.",
    sections: [
      {
        sectionTitle: "Del 1: Det Grundlæggende",
        steps: [
          {
            title: "Den perfekte duo (Skinning)",
            text: "Du får brug for masser af dyreskind. Lær derfor <strong>Skinning</strong> som dit andet erhverv! Udstyr en <em>Skinning Knife</em> i dit profession-slot. Bekæmp udyr som ulve og bjørne, og flå dem for materialer!"
          },
          {
            title: "Find Træneren",
            text: "Gå til hovedstaden (som Dornogal) og tal med en vagt. Spørg efter <strong>Leatherworking Trainer</strong>. Lær det grundlæggende her, og køb lidt <em>Thread</em> (tråd) hos sælgeren ved siden af."
          },
          {
            title: "Opskrifternes Farver",
            text: "Hold godt øje med farverne på dine opskrifter for at stige hurtigt i level:<br>🟠 <strong>Orange:</strong> Altid +1 point!<br>🟡 <strong>Gul:</strong> Normalt et point.<br>🟢 <strong>Grøn:</strong> Nogle gange et point.<br>⚪ <strong>Grå:</strong> Ingen point. Lav altid Orange eller Gul!"
          },
          {
            title: "'First Craft' Bonussen",
            text: "Laver du en genstand for allerførste gang? Så får du et <strong>Knowledge Point</strong> (Videnspoint)! Prøv at lave mindst én af hver opskrift. Det vil hjælpe dig meget senere med din specialisering."
          }
        ]
      },
      {
        sectionTitle: "Del 2: Vejen til Level 100",
        steps: [
          {
            title: "Level 1 - 25: Simpel Start",
            text: "Åbn din formularbog ('P') og begynd at lave simple armbånd (som <em>Pioneer's Leather Wristbands</em>). Bliv ved med at lave disse, så længe farven er Orange eller Gul!"
          },
          {
            title: "Level 25 - 50: Alt Én Gang!",
            text: "På level 25 kan du vælge en <strong>Specialisering</strong>. Er du i tvivl om, hvad du skal vælge? Så tjek <strong>'KP Guide'</strong> fanen ovenfor! Der har vi kortlagt de bedste ruter til dig. Fra nu af skal du lave præcis én af hver ny opskrift. På den måde scorer du First Craft-bonusserne og flyver gennem banerne."
          },
          {
            title: "Level 50 - 75: Erhvervsudstyr & PvP",
            text: "Normalt udstyr giver ikke point længere (de er grå). Lav nu udstyr til andre erhverv (som tasker) eller PvP-udstyr. Dette koster flere materialer, så tag ud og flå en masse monstre!"
          },
          {
            title: "Level 75 - 100: Mesterfasen",
            text: "Nu bliver det svært! Du kan kun stige i level ved at lave episk (lilla) udstyr. Du skal bruge specielle 'Sparks' til dette. Fordi du ikke selv har nok af dem, skal du bruge <strong>Crafting Orders</strong>-bordet. Her betaler andre spillere dig guld for at lave udstyr til dem med DERES Sparks. Sådan når du level 100!"
          }
        ]
      }
    ],
    tip: "Gyldent Tip: Brug din 'Concentration' (Koncentration) klogt! Det giver dig mulighed for at lave genstande af højere kvalitet, end du normalt kan. Det genoplades langsomt hver dag."
  }
};
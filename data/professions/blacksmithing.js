// BLACKSMITHING DATA — v2.3
const BLACKSMITHING = {
  id:'blacksmithing', icon:'⚒', cat:'crafting', accent:'#7a7a7a',
  name:{nl:'Blacksmithing',en:'Blacksmithing'},
  tier:'C',
  lore:{
    nl:'Blacksmithing is een <em>crafting profession</em> waarbij je metaal smeedt tot weapons en armor. Specifiek: je maakt <strong>plate armor</strong> voor Warriors en Death Knights, <strong>weapons</strong> voor alle klassen, en <strong>profession tools</strong> voor andere crafting professions. Blacksmithing is de oudste en meest iconische crafting profession in WoW — de smid die de <strong>sword</strong> smeedt waarmee de paladin de raid overleeft.<br><br>Nieuw in Midnight: <strong>Void-Forging</strong> (imbue weapons met void powers voor speciale effecten), <strong>Resonance Tempering</strong> (maak je items progressief beter via een upgrade-systeem), en het maken van <strong>profession tools voor alle 13 professions</strong> — een markt die alleen Blacksmiths kunnen bedienen.',
    en:'Blacksmithing is a <em>crafting profession</em> where you forge metal into weapons and armor. Specifically: you make <strong>plate armor</strong> for Warriors and Death Knights, <strong>weapons</strong> for all classes, and <strong>profession tools</strong> for other crafting professions. Blacksmithing is the oldest and most iconic crafting profession in WoW — it is the smith who makes the sword the paladin uses to survive the raid.<br><br>New in Midnight: <strong>Void-Forging</strong> (imbue weapons with void powers for special effects), <strong>Resonance Tempering</strong> (progressively improve your items through an upgrade system), and crafting <strong>profession tools for all 13 professions</strong> — a market only Blacksmiths can serve.'},
  goldrating:4, userating:4,
  trainer:{
    name:'Bemarrin',
    loc:{
      nl:'Trainer <strong>Bemarrin</strong> is de smidskunst-trainer in <strong>Farstriders\' Square</strong>, Silvermoon City — bij de smidse en het aambeeld (officiële Midnight NPC-naam).',
      en:'Trainer <strong>Bemarrin</strong> is the Blacksmithing trainer in <strong>Farstriders\' Square</strong>, Silvermoon City — at the forge and anvil (official in-game NPC name).'},
    way:'/way #2393 43.74 51.86',
    note:{
      nl:'💡 <strong>Combineer met Mining:</strong> Blacksmithing verbruikt enorme hoeveelheden Void-Iron Ore en staven. Als je Mining ook hebt, heb je nooit materiaalkosten. Zonder Mining ben je continu afhankelijk van het AH voor grondstoffen — dat kan tot 60-70% van je winstmarge opeten. De combinatie BS+Mining is even winstgevend als Alchemy+Herbalism.',
      en:'💡 <strong>Combine with Mining:</strong> Blacksmithing consumes enormous amounts of Void-Iron Ore and bars. If you also have Mining, you never have material costs. Without Mining you are constantly dependent on the AH for raw materials — that can eat up 60-70% of your profit margin. The BS+Mining combination is just as profitable as Alchemy+Herbalism.'}
  },
  specs:[
    {
      title:{nl:'📖 De vier Blacksmithing-specialisatietakken',en:'📖 The four Blacksmithing specialization trees'},
      desc:{
        nl:'Blacksmithing heeft <strong>vier specialisatietakken</strong>: <em>Armorsmithing</em> (Epic plaat-armor recepten per slot), <em>Weaponsmithing</em> (Epic wapen-recepten plus Whetstones), <em>Craftsmithing</em> (profession tools, accessoires en Tool Stones voor andere crafters) en <em>The Old Ways</em> (Alloys en crafting stats). Je ontgrendelt ze op skill 25, 50, 60 en 75.<br><br>Dag 1 verdien je ~50–60 KP uit eerste crafts en schatten. Daarna ~19 KP per week. <strong>Alloys</strong> (uit The Old Ways) zijn de meest stabiele goudmaker — ze worden gebruikt in bijna alle high-end recepten en zijn altijd nodig.',
        en:'Blacksmithing has <strong>four specialization trees</strong>: <em>Armorsmithing</em> (Epic plate armor recipes per slot), <em>Weaponsmithing</em> (Epic weapon recipes plus Whetstones), <em>Craftsmithing</em> (profession tools, accessories and Tool Stones for other crafters) and <em>The Old Ways</em> (Alloys and crafting stats). Unlocked at skill 25, 50, 60 and 75.<br><br>Day 1 you earn ~50–60 KP from first crafts and treasures. After that ~19 KP per week. <strong>Alloys</strong> (from The Old Ways) are the most stable gold-maker — used in almost all high-end recipes.'},
      points:{nl:'Tip: maak altijd eerst je eigen Hammer en Toolbox — gratis stat-boost voor jezelf',en:'Tip: always craft your own Hammer and Toolbox first — free stat boost for yourself'}
    },
    {
      title:{nl:'🛡 Boom 1 — Armorsmithing · Epic plaat-armor',en:'🛡 Tree 1 — Armorsmithing · Epic plate armor'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Epic plaat-armor — één recept per slot (Helm, Shoulders, Chest, Wrists, Gloves, Legs, Boots, Belt). Beschikbaar voor Warriors, Paladins en Death Knights. De Epic versies zijn Bind on Pickup — spelers moeten bij jou een Crafting Order plaatsen, ze kunnen het niet op het AH kopen.<br><br><strong>Structuur van de boom:</strong> 30 punten in de root node ontgrendelt <em>vier</em> sub-specs gesplitst per slotgroep: linker zijde dekt Head/Chest/Shoulder/Wrist, rechter zijde dekt Legs/Hands/Waist/Feet. Investeer in één zijde om vier slots te unlocken, daarna de andere zijde voor alle acht slots.<br><br><strong>Wanneer?</strong> Beste keuze aan het begin van de expansie — armor-demand is maximaal bij launch. Iedereen wil direct gear.',
        en:'<strong>What does this make?</strong> Epic plate armor — one recipe per slot (Helm, Shoulders, Chest, Wrists, Gloves, Legs, Boots, Belt). Available for Warriors, Paladins and Death Knights. Epic versions are Bind on Pickup — players must place a Crafting Order with you, they cannot buy from AH.<br><br><strong>Tree structure:</strong> 30 points in the root node unlocks <em>four</em> sub-specs split by slot group: left side covers Head/Chest/Shoulder/Wrist, right side covers Legs/Hands/Waist/Feet. Invest in one side to unlock four slots, then the other for all eight.<br><br><strong>When?</strong> Best choice at expansion launch — armor demand is maximum. Everyone wants gear immediately.'},
      points:{nl:'30 punten root → kies linker (Head/Chest/Shoulder/Wrist) of rechter (Legs/Hands/Waist/Feet) sub-spec als eerste',en:'30 points root → pick left (Head/Chest/Shoulder/Wrist) or right (Legs/Hands/Waist/Feet) sub-spec first'}
    },
    {
      title:{nl:'⚔ Boom 2 — Weaponsmithing · wapens plus Whetstones',en:'⚔ Tree 2 — Weaponsmithing · weapons plus Whetstones'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Epic weapons (daggers, swords, axes, maces, fist weapons, polearms, warglaives) plus <em>Whetstones</em> — consumables die tijdelijk weapon damage verhogen. Weapons zijn Bind on Equip voor de normale versie (AH-verkoop mogelijk) en Bind on Pickup voor Epic (Crafting Order verplicht).<br><br><strong>Whetstones sub-spec:</strong> Een aparte niche. Whetstones zijn consumables met een stabiele markt — melee DPS koopt ze voor raids en Mythic+. Kleiner volume dan armor maar consistent. Goed als passieve bijdrage naast je armor-orders.<br><br><strong>Hafted vs Bladed Weapons:</strong> De twee hoofdgroepen binnen Weaponsmithing. Hafted dekt hammers, axes en polearms; Bladed dekt swords, daggers en warglaives. Kies op basis van welke klassen/specs op jouw server het populairst zijn.',
        en:'<strong>What does this make?</strong> Epic weapons (daggers, swords, axes, maces, fist weapons, polearms, warglaives) plus <em>Whetstones</em> — consumables that temporarily boost weapon damage. Weapons are Bind on Equip for normal (AH sale possible) and Bind on Pickup for Epic (Crafting Order required).<br><br><strong>Whetstones sub-spec:</strong> A separate niche. Whetstones are consumables with a stable market — melee DPS buys them for raids and Mythic+. Smaller volume than armor but consistent.<br><br><strong>Hafted vs Bladed Weapons:</strong> The two main groups within Weaponsmithing. Hafted covers hammers, axes and polearms; Bladed covers swords, daggers and warglaives.'},
      points:{nl:'Kies Hafted of Bladed op basis van populaire klassen op jouw server, plus Whetstones als consumable-markt',en:'Pick Hafted or Bladed based on popular classes on your server, plus Whetstones for consumable market'}
    },
    {
      title:{nl:'🔧 Boom 3 — Craftsmithing · tools voor andere crafters',en:'🔧 Tree 3 — Craftsmithing · tools for other crafters'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Profession tools en accessoires voor andere crafters, plus <em>Tool Stones</em> (consumables) en <em>Weaponstones</em>. Sub-specs: <em>Mandatory Tools</em> (profession tools), <em>Tool Stones</em> (consumables) en <em>Weaponstones</em>.<br><br><strong>Waarom starten met Mandatory Tools?</strong> Elke serieuze crafter op de server heeft tools nodig — Leatherworkers, Alchemists, Enchanters, Jewelers, Inscriptionists, Tailors. De vraag is breed en consistent. Bij expansie-launch is iedereen tegelijk op zoek naar profession tools. Als jij dit als eerste unlocket, monopoliseer je die markt tijdelijk.<br><br><strong>Alloys (in The Old Ways):</strong> Alloys zijn waarschijnlijk de beste pick voor stabiel goud. Ze worden gebruikt in bijna alle high-end recepten en kennen altijd vraag.',
        en:'<strong>What does this make?</strong> Profession tools and accessories for other crafters, plus <em>Tool Stones</em> (consumables) and <em>Weaponstones</em>. Sub-specs: <em>Mandatory Tools</em> (profession tools), <em>Tool Stones</em> and <em>Weaponstones</em>.<br><br><strong>Why start with Mandatory Tools?</strong> Every serious crafter on the server needs tools — Leatherworkers, Alchemists, Enchanters, Jewelers, Inscriptionists, Tailors. Demand is broad and consistent. At expansion launch everyone is looking for profession tools simultaneously. If you unlock this first, you temporarily monopolize that market.'},
      points:{nl:'Start met Mandatory Tools → Engineering Tools als sub-spec → dan Tailoring/JC tools voor volle coverage',en:'Start with Mandatory Tools → Engineering Tools as sub-spec → then Tailoring/JC tools for full coverage'}
    },
    {
      title:{nl:'⚡ Boom 4 — The Old Ways · Alloys en crafting stats',en:'⚡ Tree 4 — The Old Ways · Alloys and crafting stats'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> <em>Alloys</em> — verwerkte metalen die nodig zijn voor bijna alle high-end Blacksmithing-recepten (én voor Engineering). Sub-spec: <em>Resourceful Smith</em> voor Resourcefulness op alle crafts. De boom geeft ook passieve crafting stats die alle andere Blacksmithing-crafts profitabeler maken.<br><br><strong>Alloys als goudmaker:</strong> Sterling Alloy en Gloaming Alloy worden gebruikt in de meeste Epic recepten. Als jij Alloys maakt, verkoop je zowel op het AH (aan andere Blacksmiths en Engineers) als gebruik je ze zelf. Breed bruikbaar, altijd vraag.<br><br><strong>Aanbeveling:</strong> Begin hier als eerste boom met de sub-spec Resourceful Smith. Die Resourcefulness bespaart materialen op elke craft en maakt al je andere werk winstgevender vanaf dag 1.',
        en:'<strong>What does this make?</strong> <em>Alloys</em> — processed metals needed for almost all high-end Blacksmithing recipes (and for Engineering). Sub-spec: <em>Resourceful Smith</em> for Resourcefulness on all crafts. The tree also gives passive crafting stats making all other Blacksmithing crafts more profitable.<br><br><strong>Alloys as gold-maker:</strong> Sterling Alloy and Gloaming Alloy are used in most Epic recipes. Making Alloys, you sell both on the AH (to other Blacksmiths and Engineers) and use them yourself. Broad usefulness, always demand.<br><br><strong>Recommendation:</strong> Start here as first tree with Resourceful Smith sub-spec. That Resourcefulness saves materials on every craft and makes all your other work more profitable from day 1.'},
      points:{nl:'Unlock The Old Ways → Resourceful Smith sub-spec → Resourcefulness actief op alle crafts',en:'Unlock The Old Ways → Resourceful Smith sub-spec → Resourcefulness active on all crafts'}
    }
  ],
  items:[
    {icon:'⚔',name:{nl:'Epic Wapens (Bind on Pickup)',en:'Epic Weapons (Bind on Pickup)'},desc:{nl:'Alleen verkrijgbaar via Crafting Orders. Spelers kunnen ze niet op het AH kopen. Jij hebt het recept (uit raids), jij hebt de exclusieve markt. Alle klassen dragen wapens.',en:'Only obtainable via Crafting Orders. Players cannot buy them on the AH. You have the recipe (from raids), you have the exclusive market. All classes carry weapons.'},tag:'gear'},
    {icon:'🛡',name:{nl:'Epic Plate Armor (Bind on Pickup)',en:'Epic Plate Armor (Bind on Pickup)'},desc:{nl:'Volledige set voor Warriors en Death Knights. Bind on Pickup — verplichte Crafting Orders. Warriors zijn populairder dan ooit door nieuwe Void-Knight spec.',en:'Full set for Warriors and Death Knights. Bind on Pickup — Crafting Orders required. Warriors are more popular than ever due to new Void-Knight spec.'},tag:'gear'},
    {icon:'🔧',name:{nl:'Profession Tools (voor alle 13 professions)',en:'Profession Tools (for all 13 professions)'},desc:{nl:'Alleen Blacksmiths kunnen ze maken. Epic versie is Bind on Pickup. Elke crafter op de server is je potentiële klant. Beste unieke markt van Blacksmithing.',en:'Only Blacksmiths can make them. Epic version is Bind on Pickup. Every crafter on the server is your potential customer. Best unique market of Blacksmithing.'},tag:'utility'},
    {icon:'🟣',name:{nl:'Void-Forged Weapons (premium)',en:'Void-Forged Weapons (premium)'},desc:{nl:'Wapens met Void-imbue via het Void-Forging systeem. Speciaal visueel effect en Void-proc kans. Spelers betalen extra voor het uiterlijk én het effect. Premium markt.',en:'Weapons with Void imbue via the Void-Forging system. Special visual effect and Void proc chance. Players pay extra for the appearance AND the effect. Premium market.'},tag:'gear'},
    {icon:'🏠',name:{nl:'Housing Meubels (metaal)',en:'Housing Furniture (metal)'},desc:{nl:'Op level 80: smeed metalen meubels voor het Housing-systeem. Lantaarns, kooien, wapenrekken, rustingen op standaards. Niche markt maar stabiel extra inkomen.',en:'At level 80: forge metal furniture for the Housing system. Lanterns, cages, weapon racks, armor on stands. Niche market but stable extra income.'},tag:'utility'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">📦 Crafting Orders bij Blacksmithing — hoe ze werken</div><div class="co-desc">Blacksmithing heeft twee typen orders:<br><br>
<strong>1. Armor en Weapon Orders (Epic, Bind on Pickup)</strong><br>
Speler gaat naar de Crafting Order-tafel → kiest Epic item → voegt eigen materialen toe als ze die hebben → stelt vergoeding in → jij pakt de order op → craft het item → goud en mat naar jou, item naar koper.<br><br>
<strong>2. Profession Tool Orders (Epic, Bind on Pickup)</strong><br>
Zelfde systeem, maar de koper is een Alchemist, Leatherworker, Engineer of andere crafter die zijn tools wil upgraden. Uniek voor Blacksmithing — anderen kunnen dit niet aanbieden.<br><br>
<strong>3. Resonance Tempering Services</strong><br>
Speler heeft al het item maar wil het upgraden. Ze sturen een Crafting Order met de upgrade-materialen en een vergoeding. Jij tempert het item, zij krijgen het terug op hoger rank. Pure service-verkoop — geen eigen materialen nodig.</div></div>
<div class="co-step"><div class="co-title">⭐ De drie inkomstenstromen van Blacksmithing</div><div class="co-desc">
  <strong>💥 Week 1-4 (launch-periode):</strong><br>
  Massale armor-orders. Iedereen wil gear. Iedereen wil tools. Hoge vergoedingen. Dit zijn de meest winstgevende weken van de expansie. Heb zoveel mogelijk recepten klaar bij launch.<br><br>
  <strong>🔧 Hele expansie: Profession Tools</strong><br>
  Dit is de uniekste BS-markt. Elke nieuwe speler die een crafting profession leert wil tools. Elke speler die upgradet naar Epic gear wil ook zijn tools upgraden. Constante, stabiele vraag gedurende de hele expansie.<br><br>
  <strong>⚡ Gevorderd: Resonance Tempering Services</strong><br>
  Als je naam bekend is als goede Blacksmith, komen spelers specifiek naar jou voor upgrade-services. Je verkoopt alleen je vakmanschap — materialen zijn van de koper. Pure winstmarge.
</div></div>
<div class="co-step"><div class="co-title">📅 Wat te doen op welk moment</div><div class="co-desc">
  <strong>Launch (eerste twee weken):</strong><br>
  → Zet jezelf op de public orders lijst voor armor en weapons<br>
  → Maak profession tools voor alle crafters die ernaar vragen<br>
  → Houd je materialen (Void-Iron Bars) bij — vraag is enorm<br><br>
  <strong>Midden-expansie:</strong><br>
  → Raid actief om Epic recepten te verzamelen<br>
  → Tool-orders blijven doorkomen — altijd bijhouden<br>
  → Resonance Tempering services adverteren in Trade Channel<br><br>
  <strong>Einde expansie / patch:</strong><br>
  → Nieuwe recepten uit nieuwe raid-tier = nieuwe exclusive markt<br>
  → Void-Forged wapens zijn altijd gewild voor cosmetics
</div></div>
<div class="tip-box"><strong>💡 Beste tip voor Blacksmithing:</strong> Maak direct bij launch de profession tools voor jezelf én voor andere crafters. Als Mining-Blacksmith kost het je bijna niets aan materialen maar verkoop je tools voor honderden goud per stuk. Sommige servers hebben slechts twee of drie actieve Blacksmiths die tools hebben — als jij er één van bent, heb je een wachtrij aan orders van de eerste dag.</div>`,
    en:`<div class="co-step"><div class="co-title">📦 Crafting Orders at Blacksmithing</div><div class="co-desc">Blacksmithing has two types of orders:<br><br>
<strong>1. Armor and Weapon Orders (Epic, Bind on Pickup)</strong> — Standard Crafting Order flow, player provides materials and fee, you craft and receive gold.<br>
<strong>2. Profession Tool Orders (Epic, Bind on Pickup)</strong> — Same system but the buyer is an Alchemist, Leatherworker, Engineer etc. Unique to Blacksmithing.<br>
<strong>3. Resonance Tempering Services</strong> — Player already has the item but wants it upgraded. They send an order with upgrade materials and a fee. Pure service — no materials needed from you.</div></div>
<div class="co-step"><div class="co-title">⭐ The three income streams of Blacksmithing</div><div class="co-desc">
  <strong>💥 Week 1-4 (launch period):</strong> Massive armor orders. Everyone wants gear and tools. High fees. Most profitable weeks of the expansion.<br>
  <strong>🔧 Entire expansion: Profession Tools</strong> — Every new crafter wants tools. Every player upgrading to Epic gear also wants to upgrade their tools. Constant stable demand.<br>
  <strong>⚡ Advanced: Resonance Tempering Services</strong> — Pure profit margin, no material costs from you.
</div></div>
<div class="co-step"><div class="co-title">📅 What to do and when</div><div class="co-desc">
  <strong>Launch:</strong> List yourself for armor and weapon orders. Make tools for all crafters.<br>
  <strong>Mid-expansion:</strong> Raid for Epic recipes. Keep taking tool orders. Advertise Tempering services.<br>
  <strong>End expansion / patch:</strong> New raid-tier recipes = new exclusive market.
</div></div>
<div class="tip-box"><strong>💡 Best tip for Blacksmithing:</strong> Make profession tools right at launch for yourself and other crafters. As a Mining-Blacksmith it costs you almost nothing in materials but you sell tools for hundreds of gold each. Some servers have only two or three active Blacksmiths with tools — if you are one of them, you have a queue of orders from day one.</div>`},
  method_url:'https://www.method.gg/guides/midnight-blacksmithing-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/blacksmithing-specialization-guide'
};

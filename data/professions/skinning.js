// SKINNING DATA — v2.3
const SKINNING = {
  id:'skinning', icon:'🐾', cat:'gathering', accent:'#8B6347',
  name:{nl:'Skinning',en:'Skinning'},
  tier:'B',
  lore:{
    nl:'Skinning is een <em>gathering profession</em> — je maakt niets, je verzamelt alleen. Je doodt beesten in de wereld en haalt hun huid, schubben of tanden eraf. Die materialen verkoop je aan andere spelers of gebruik je zelf als je ook Leatherworking hebt. Skinning is een van de eenvoudigste manieren om goud te verdienen, zeker als beginner — je doet het gewoon terwijl je quests doet of dungeons farmt. Nieuw in Midnight: drie systemen die Skinning interessanter én lucratiever maken dan ooit: High Value Beasts, Diffusers, en Lures.',
    en:'Skinning is a <em>gathering profession</em> — you craft nothing, you only collect. You kill beasts in the world and strip their hides, scales or teeth. You sell those materials to other players or use them yourself if you also have Leatherworking. Skinning is one of the easiest ways to earn gold, especially as a beginner — you just do it while questing or farming dungeons. New in Midnight: three systems that make Skinning more interesting and lucrative than ever: High Value Beasts, Diffusers, and Lures.'},
  goldrating:3, userating:3,
  trainer:{
    name:'Tyn',
    loc:{
      nl:'Trainer Tyn vind je in de <strong>Bazaar</strong> van Silvermoon City. De Bazaar is het grote overdekte marktgebied in het midden van de stad — vol kraampjes en handelaars. Tyn staat bij de leerverwerking-sectie.',
      en:'Trainer Tyn can be found in the <strong>Bazaar</strong> of Silvermoon City. The Bazaar is the large covered market area in the center of the city — full of stalls and merchants. Tyn stands at the leather processing section.'},
    way:'/way #2393 43.27 55.59',
    note:{
      nl:'💡 <strong>Belangrijk voor later:</strong> Als je eenmaal verder bent en de beste (duurste) materialen wilt farmen, heb je ook <strong>Cooking</strong> nodig. Lures — de speciale lokaasmiddelen voor Majestic materialen — worden namelijk gemaakt via Cooking-recepten. Je hebt daarvoor vis nodig van Fishing. Het is slim om Cooking en Fishing alvast te leren bij dezelfde trainers in de Bazaar!',
      en:'💡 <strong>Important for later:</strong> Once you progress further and want to farm the best (most expensive) materials, you will also need <strong>Cooking</strong>. Lures — the special bait for Majestic materials — are crafted using Cooking recipes. You need fish from Fishing for this. It is smart to learn Cooking and Fishing right away from the same trainers in the Bazaar!'}
  },
  specs:[
    {
      title:{nl:'📖 Skinning KP en specialisatie in Midnight',en:'📖 Skinning KP and specialization in Midnight'},
      desc:{
        nl:'Skinning heeft in Midnight <strong>drie specialisatietakken</strong>: <em>Thorough Tanning</em> (standaard leer/schub verzamelen + Sharpen Your Knife cooldown), <em>Gainful Gathering</em> (Motes, vleesdrops en dier-specifieke drops + Diffusers) en <em>Talented Tracker</em> (lure-systeem en Renowned Beasts voor Majestic Materials). Je ontgrendelt ze op skill 25, 50 en 75.<br><br><strong>Nieuw in Midnight:</strong> Diffusers — gebruik 2 Motes om een beast Infused te maken, skin het voor dubbele Motes terug. Lures spawnen Renowned Beasts die Majestic Hide, Majestic Fin of Majestic Claw droppen — zeldzame Epic-crafting materialen.',
        en:'Skinning has <strong>three specialization trees</strong> in Midnight: <em>Thorough Tanning</em> (standard leather/scale gathering + Sharpen Your Knife cooldown), <em>Gainful Gathering</em> (Motes, meat drops and species-specific drops + Diffusers) and <em>Talented Tracker</em> (lure system and Renowned Beasts for Majestic Materials). Unlocked at skill 25, 50 and 75.<br><br><strong>New in Midnight:</strong> Diffusers — use 2 Motes to make a beast Infused, skin it for double Motes back. Lures spawn Renowned Beasts that drop Majestic Hide, Majestic Fin or Majestic Claw — rare Epic crafting materials.'},
      points:{nl:'Tip: unlock Thorough Tanning meteen — geeft Sharpen Your Knife voor gegarandeerde Void-Tempered Hide drop',en:'Tip: unlock Thorough Tanning immediately — gives Sharpen Your Knife for guaranteed Void-Tempered Hide drop'}
    },
    {
      title:{nl:'🦴 Boom 1 — Thorough Tanning · standaard leer en schubben',en:'🦴 Tree 1 — Thorough Tanning · standard leather and scales'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Verhoogt je skill voor Void-Tempered Leather en Void-Tempered Scales — meer materialen per skinning en hogere kans op Gold Quality. Bij 10 punten in de root unlock je <em>Sharpen Your Knife</em>: gegarandeerd dat je volgende skinning een Void-Tempered Hide of Void-Tempered Plating geeft (zeldzamer dan de gewone leer/schub — hogere waarde). Heeft een 1-uurs cooldown, uitbreidbaar met meer punten.<br><br><strong>Wanneer?</strong> Eerste boom. Geeft direct de Sharpen Your Knife ability die je hides gegarandeerd laat droppen.',
        en:'<strong>What does this do?</strong> Increases your skill for Void-Tempered Leather and Void-Tempered Scales — more materials per skinning and higher chance of Gold Quality. At 10 root points you unlock <em>Sharpen Your Knife</em>: guaranteed that your next skinning gives a Void-Tempered Hide or Void-Tempered Plating (rarer than regular leather/scale — higher value). Has a 1-hour cooldown, extendable with more points.<br><br><strong>When?</strong> First tree. Immediately gives the Sharpen Your Knife ability for guaranteed hide drops.'},
      points:{nl:'40 punten = extra Sharpen Your Knife charges + significante skill-boost voor leer en schubben',en:'40 points = extra Sharpen Your Knife charges + significant skill boost for leather and scales'}
    },
    {
      title:{nl:'🌟 Boom 2 — Gainful Gathering · Motes, vlees en Diffusers',en:'🌟 Tree 2 — Gainful Gathering · Motes, meat and Diffusers'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Ontgrendelt het verzamelen van niet-standaard materialen: Motes van elementen, vlees (voor Cooking) en dier-specifieke drops zoals Peerless Plumage (vliegende beesten), Carving Canine (beesten met tanden). Sub-spec: <em>Dedicated Diffuser</em> — ontgrendelt Diffusers waarmee je beesten Infused maakt voor dubbele Mote-output. Sub-spec: <em>Careful Carving</em> voor meer vlees.<br><br><strong>Diffusers zijn krachtig:</strong> Gebruik 2 Motes → beast wordt Infused → skin het → krijg meer dan 2 Motes terug. Geen cooldown. Met voldoende spec kun je Motes printen. (Mogelijk gebugged momenteel.)',
        en:'<strong>What does this do?</strong> Unlocks gathering of non-standard materials: Motes of elements, meat (for Cooking) and species-specific drops like Peerless Plumage (flying beasts), Carving Canine (toothed beasts). Sub-spec: <em>Dedicated Diffuser</em> — unlocks Diffusers that make beasts Infused for double Mote output. Sub-spec: <em>Careful Carving</em> for more meat.<br><br><strong>Diffusers are powerful:</strong> Use 2 Motes → beast becomes Infused → skin it → get more than 2 Motes back. No cooldown. With enough spec you can print Motes.'},
      points:{nl:'10 punten root → Dedicated Diffuser sub-spec → Trophy Taker voor Perception en dier-specifieke drops',en:'10 points root → Dedicated Diffuser sub-spec → Trophy Taker for Perception and species-specific drops'}
    },
    {
      title:{nl:'🎯 Boom 3 — Talented Tracker · lures en Majestic Materials',en:'🎯 Tree 3 — Talented Tracker · lures and Majestic Materials'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Ontgrendelt het lure-systeem voor Renowned Beasts. Elke zone heeft zijn eigen lure, plus een Grand Beast Lure. Renowned Beasts droppen <em>Majestic Hide</em>, <em>Majestic Fin</em> of <em>Majestic Claw</em> — zeldzame Epic materialen nodig voor high-end Leatherworking gear en profession equipment.<br><br><strong>Wanneer investeren?</strong> Nadat Thorough Tanning en Gainful Gathering je basis hebben gelegd. Majestic Materials zijn hoog geprijsd maar de drop rate is laag. Investeer hier als je Majestic Materials als primair doel hebt voor Crafting Orders of verkoop.<br><br><strong>Component Collector:</strong> Laatste sub-spec in deze boom — geeft extra drops uit alle skinning-types combiné.',
        en:'<strong>What does this do?</strong> Unlocks the lure system for Renowned Beasts. Each zone has its own lure, plus a Grand Beast Lure. Renowned Beasts drop <em>Majestic Hide</em>, <em>Majestic Fin</em> or <em>Majestic Claw</em> — rare Epic materials needed for high-end Leatherworking gear and profession equipment.<br><br><strong>When to invest?</strong> After Thorough Tanning and Gainful Gathering have established your base. Majestic Materials are high-priced but drop rate is low. Invest here if Majestic Materials are your primary goal for Crafting Orders or sales.<br><br><strong>Component Collector:</strong> Final sub-spec in this tree — gives extra drops from all skinning types combined.'},
      points:{nl:'Investeer hier nadat Thorough Tanning en Gainful Gathering de basis hebben gelegd',en:'Invest here after Thorough Tanning and Gainful Gathering have established the base'}
    }
  ],
  items:[
    {icon:'🦎',name:{nl:'Void-Tempered Leather',en:'Void-Tempered Leather'},desc:{nl:'Het meest voorkomende Skinning-materiaal in Midnight. Valt van bijna elk beest. Basisingrediënt voor vrijwel alle Leatherworking leather-armor recepten. Nooit onverkoopbaar op het AH.',en:'The most common Skinning material in Midnight. Drops from almost every beast. Base ingredient for almost all Leatherworking leather armor recipes. Never unsellable on the AH.'},tag:'material'},
    {icon:'🐍',name:{nl:'Void-Tempered Scales',en:'Void-Tempered Scales'},desc:{nl:'Schubben van reptielen, dragonkin en slangenbeesten. Nodig voor Mail armor — het pantserttype dat Hunters en Shamans dragen. Constant gevraagd, goede prijs.',en:'Scales from reptiles, dragonkin and serpent beasts. Required for Mail armor — the armor type worn by Hunters and Shamans. Constantly in demand, good price.'},tag:'material'},
    {icon:'🦴',name:{nl:'Void-Tempered Hide',en:'Void-Tempered Hide'},desc:{nl:'Steviger en zeldzamer dan gewoon leer. Valt vaker van High Value Beasts en zeldzamere mobs. Nodig voor gevorderde LW-recepten en Epic gear. Aanzienlijk hogere prijs dan normaal leer.',en:'Sturdier and rarer than normal leather. Drops more often from High Value Beasts and rarer mobs. Needed for advanced LW recipes and Epic gear. Considerably higher price than normal leather.'},tag:'material'},
    {icon:'🦅',name:{nl:'Majestic Fin / Claw / Hide',en:'Majestic Fin / Claw / Hide'},desc:{nl:'De absolute topmaterialen van Skinning — het duurste wat je kunt droppen. Alleen verkrijgbaar door een Lure te gebruiken en een Renowned Beast te skinnen. Eén keer per dag, per zone. Altijd hoge AH-prijs omdat ze zo zeldzaam zijn.',en:'The absolute top materials from Skinning — the most expensive you can drop. Only obtainable by using a Lure and skinning a Renowned Beast. Once per day, per zone. Always high AH price because they are so rare.'},tag:'material'},
    {icon:'✨',name:{nl:'Motes (via Diffusers)',en:'Motes (via Diffusers)'},desc:{nl:'Motes zijn kleine elementaire deeltjes die je kunt verkopen. Diffusers zijn kleine flesjes die je craftet van 2 Motes. Gooi een Diffuser op een beest, skin het, en je krijgt 3 of meer Motes terug. Je geeft 2 uit en krijgt 3+ terug — gratis winst!',en:'Motes are small elemental particles you can sell. Diffusers are small vials you craft from 2 Motes. Throw a Diffuser on a beast, skin it, and you get 3 or more Motes back. You spend 2 and get 3+ back — free profit!'},tag:'material'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">📦 Even uitleggen: wat is het verschil met een crafting profession?</div><div class="co-desc">Skinning is een <strong>gathering profession</strong> — je maakt niets. Dat betekent ook: er zijn <strong>geen Crafting Orders</strong> voor Skinning. Crafting Orders zijn opdrachten die andere spelers aan jou geven om iets te maken. Dat bestaat niet bij gathering.<br><br>Wat je wél doet: je verkoopt je materialen op het <strong>Auction House (AH)</strong>. Dat is de in-game marktplaats, te vinden in elke grote stad. Je zet een item te koop voor een prijs die jij kiest, en andere spelers kopen het. Of je geeft het direct aan een vriend die Leatherworking heeft — dan sla je de AH-commissie over.</div></div>
<div class="co-step"><div class="co-title">💰 Wat verkoopt het best — en waarom?</div><div class="co-desc">
  <strong>🥇 Majestic Fin / Claw / Hide</strong><br>
  Het zeldzaamste dat je kunt droppen. Alleen via Lures + Renowned Beasts. Eén keer per dag per zone. Altijd hoog geprijsd — spelers hebben het nodig voor de beste crafts en ze kunnen het niet gewoon "grinden". Prijs blijft stabiel.<br><br>
  <strong>🥈 Void-Tempered Hide</strong><br>
  Zeldzamer dan normaal leer, gevraagd voor gevorderde LW-recepten en Epic gear. Goed verkopend, stabiele prijs.<br><br>
  <strong>🥉 Void-Tempered Scales</strong><br>
  Nodig voor Mail armor. Hunters en Shamans zijn twee van de meest gespeelde klassen — dus grote doelgroep. Constant gevraagd.<br><br>
  <strong>Void-Tempered Leather</strong><br>
  Het meest voorkomende materiaal. Prijs is lager, maar je hebt er ook véél meer van. Goed als je grote hoeveelheden wilt dumpen.
</div></div>
<div class="co-step"><div class="co-title">📅 Dagelijkse routine — maximale opbrengst</div><div class="co-desc">
  <strong>1. Loop altijd naar High Value Beasts (minimap)</strong><br>
  Zodra je Skinning hebt, verschijnen speciale gloeiende beesten als een mes-icoontje op je minimap. Ze geven 3-4x meer materialen dan gewone beesten. Maak er nooit een gewone mob van als je een High Value Beast in de buurt ziet — sla die altijd als eerste.<br><br>
  <strong>2. Gebruik je Diffusers op</strong><br>
  Je hebt Motes? Craft een Diffuser (2 Motes → Diffuser). Gooi de Diffuser op een beest voor je het skinnt. Je krijgt meer Motes terug dan het kostte. Na een uur farmen heb je netto meer Motes dan je begon — gratis extra verkoop.<br><br>
  <strong>3. Doe elke dag je Lures (als je Cooking hebt)</strong><br>
  Dit is het best renderend onderdeel van Skinning als je het eenmaal unlock. Elke zone in Midnight heeft een eigen Renowned Beast — een gigantisch beest op een vaste plek. Maak de bijbehorende Lure (via Cooking + vis), gooi hem neer, versla het beest, en skin het voor Majestic materialen. <strong>Dit werkt maar één keer per dag per zone</strong>, maar als je vier zones bijhoudt is dat vier kansen per dag op de duurste drops in het spel. Duurt maar 5 minuten per zone!
</div></div>
<div class="tip-box"><strong>💡 Gratis tip die veel mensen niet weten:</strong> Als een andere speler een beest heeft verslagen maar het NIET geskinnd heeft, mag jij het gewoon skinnen! Zij hebben al de normale loot (goud, uitrusting) meegenomen — maar de huid is een apart item dat voor jou is als je er als eerste bij bent. Altijd doen als je het ziet. Helemaal gratis!</div>`,
    en:`<div class="co-step"><div class="co-title">📦 Quick explanation: what is the difference from a crafting profession?</div><div class="co-desc">Skinning is a <strong>gathering profession</strong> — you craft nothing. That also means: there are <strong>no Crafting Orders</strong> for Skinning. Crafting Orders are assignments other players give you to make something. That does not exist for gathering.<br><br>What you do instead: you sell your materials on the <strong>Auction House (AH)</strong>. That is the in-game marketplace, found in every major city. You list an item for sale at a price you choose, and other players buy it. Or you hand it directly to a friend with Leatherworking — that way you skip the AH commission.</div></div>
<div class="co-step"><div class="co-title">💰 What sells best — and why?</div><div class="co-desc">
  <strong>🥇 Majestic Fin / Claw / Hide</strong><br>
  The rarest thing you can drop. Only via Lures + Renowned Beasts. Once per day per zone. Always high priced — players need it for the best crafts and cannot simply grind it. Price stays stable.<br><br>
  <strong>🥈 Void-Tempered Hide</strong><br>
  Rarer than normal leather, needed for advanced LW recipes and Epic gear. Sells well, stable price.<br><br>
  <strong>🥉 Void-Tempered Scales</strong><br>
  Required for Mail armor. Hunters and Shamans are two of the most played classes — big target audience. Constantly in demand.<br><br>
  <strong>Void-Tempered Leather</strong><br>
  The most common material. Price is lower, but you have far more of it. Good if you want to dump large quantities.
</div></div>
<div class="co-step"><div class="co-title">📅 Daily routine — maximum yield</div><div class="co-desc">
  <strong>1. Always go to High Value Beasts first (minimap)</strong><br>
  As soon as you have Skinning, special glowing beasts appear as a knife icon on your minimap. They give 3-4x more materials than normal beasts. Never fight a regular mob if you see a High Value Beast nearby — always hit those first.<br><br>
  <strong>2. Use your Diffusers</strong><br>
  Have Motes? Craft a Diffuser (2 Motes → Diffuser). Throw the Diffuser on a beast before skinning it. You get more Motes back than it cost. After an hour of farming you net more Motes than you started — free extra sales.<br><br>
  <strong>3. Use your Lures every day (if you have Cooking)</strong><br>
  This is the highest-yielding part of Skinning once you unlock it. Every zone in Midnight has its own Renowned Beast — a massive beast at a fixed spot. Craft the matching Lure (via Cooking + fish), place it, defeat the beast, and skin it for Majestic materials. <strong>This only works once per day per zone</strong>, but with four zones that is four chances daily at the rarest drops in the game. Only 5 minutes per zone!
</div></div>
<div class="tip-box"><strong>💡 Free tip many people don't know:</strong> If another player defeated a beast but did NOT skin it, you are free to skin it! They already took the regular loot (gold, gear) — but the hide is a separate item that is yours if you get there first. Always do it when you see it. Completely free!</div>`},
  method_url:'https://www.method.gg/guides/midnight-skinning-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/skinning-specialization-guide-and-builds'
};

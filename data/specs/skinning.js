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
      title:{nl:'📖 Wat zijn specialisaties? — Lees dit eerst',en:'📖 What are specializations? — Read this first'},
      desc:{
        nl:'Naarmate je Skinning gebruikt — beesten skinnen, quests doen, schatten vinden — verdien je <strong>Kennis Punten (KP)</strong>. Zie het als ervaringspunten, maar dan specifiek voor je profession. Die punten kun je verdelen over drie "bomen" (ook wel takken of trees genoemd). Elke boom maakt je beter in één bepaald onderdeel van Skinning.<br><br>Je kunt pas beginnen met punten verdelen als je <strong>Skinning skill 25</strong> hebt bereikt. Tot die tijd: gewoon blijven skinnen! Je hoeft nog geen keuze te maken.<br><br>Er is geen foute keuze. Je kunt altijd herspecen (opnieuw verdelen) als je van gedachten verandert, maar dat kost een beetje goud. Beginners kiezen het best voor Thorough Tanning (boom 1) — simpelste aanpak, meeste materialen.',
        en:'As you use Skinning — skinning beasts, doing quests, finding treasures — you earn <strong>Knowledge Points (KP)</strong>. Think of it as experience points, but specific to your profession. These points can be distributed over three "trees" (also called branches). Each tree makes you better at one specific aspect of Skinning.<br><br>You cannot start spending points until you reach <strong>Skinning skill 25</strong>. Until then: just keep skinning! You do not need to make a choice yet.<br><br>There is no wrong choice. You can always respec (redistribute) if you change your mind, but that costs a little gold. Beginners should choose Thorough Tanning (tree 1) — simplest approach, most materials.'},
      points:{nl:'💡 Beginners: kies Thorough Tanning — beschikbaar zodra je skill 25 bereikt',en:'💡 Beginners: choose Thorough Tanning — available once you reach skill 25'}
    },
    {
      title:{nl:'🌿 Boom 1 — Thorough Tanning · aanbevolen voor beginners',en:'🌿 Tree 1 — Thorough Tanning · recommended for beginners'},
      desc:{
        nl:'<strong>Wat doet het?</strong> Je leert je huid beter te verwerken. Elke keer als je een beest skinnt, gooi je als het ware niets weg — je haalt er maximaal uit. In de praktijk: je krijgt meer <em>Void-Tempered Leather</em> en <em>Void-Tempered Scales</em> per beest.<br><br><strong>Waarom kiezen?</strong> Dit is de meest voorspelbare keuze. Meer leer = meer verkoopmateriaal = meer goud. Je hebt geen specifieke kennis van de markt nodig — het leer verkoopt altijd. Perfect als je net begint of gewoon rustig wilt farmen terwijl je andere dingen doet in het spel.<br><br><strong>Nadeel?</strong> Je krijgt minder zeldzame drops. Als je gericht wilt farmen voor het duurste spul, is boom 2 uiteindelijk beter.',
        en:'<strong>What does it do?</strong> You learn to process hides better. Every time you skin a beast, you waste nothing — you get the maximum out of it. In practice: you get more <em>Void-Tempered Leather</em> and <em>Void-Tempered Scales</em> per beast.<br><br><strong>Why choose it?</strong> This is the most predictable choice. More leather = more sellable material = more gold. You need no specific market knowledge — the leather always sells. Perfect if you are just starting out or want to farm casually while doing other things in the game.<br><br><strong>Downside?</strong> You get fewer rare drops. If you want to specifically farm for the most expensive stuff, tree 2 is ultimately better.'},
      points:{nl:'25 punten — dit is de aanbevolen eerste investering',en:'25 points — this is the recommended first investment'}
    },
    {
      title:{nl:'💜 Boom 2 — Gainful Gathering · voor gevorderden',en:'💜 Tree 2 — Gainful Gathering · for advanced players'},
      desc:{
        nl:'<strong>Wat doet het?</strong> Je vergroot de kans op zeldzame en dure drops: <em>Void-Tempered Hide</em>, <em>Plating</em>, en andere bijzondere materialen. Je krijgt minder materialen in totaal, maar de stukken die je wel krijgt zijn op het Auction House veel meer waard.<br><br><strong>Wanneer kiezen?</strong> Kies dit als je al een tijdje speelt, de markt een beetje begrijpt, en weet welke materialen momenteel duur zijn. Je moet ook bereid zijn wat meer te "investeren" (minder gewone drops accepteren) voor af en toe een jackpot.<br><br><strong>Combinatie-tip:</strong> Veel gevorderde spelers investeren eerst 25 punten in Thorough Tanning, en gaan daarna naar Gainful Gathering. Zo heb je een solide basis én meer kans op rare drops.',
        en:'<strong>What does it do?</strong> Increases your chance of rare and expensive drops: <em>Void-Tempered Hide</em>, <em>Plating</em>, and other special materials. You get fewer materials overall, but the ones you do get are worth a lot more on the Auction House.<br><br><strong>When to choose it?</strong> Choose this if you have been playing a while, understand the market a bit, and know which materials are currently expensive. You also need to be willing to "invest" (accept fewer common drops) for an occasional jackpot.<br><br><strong>Combination tip:</strong> Many advanced players invest 25 points in Thorough Tanning first, then move to Gainful Gathering. That way you have a solid foundation and more chance at rare drops.'},
      points:{nl:'20 punten — kies dit pas als je de markt al een beetje kent',en:'20 points — only choose this once you know the market a bit'}
    },
    {
      title:{nl:'⭐ Boom 3 — Talented Tracker · voor High Value Beast farming',en:'⭐ Tree 3 — Talented Tracker · for High Value Beast farming'},
      desc:{
        nl:'<strong>Eerst: wat zijn High Value Beasts?</strong> Zodra je Skinning leert, verschijnen er speciale beesten op je minimap als een klein, glimmend mes-icoontje. Dat zijn <em>High Value Beasts</em>. Als je zo\'n beest skinnt, krijg je <strong>3 tot 4 keer meer leer</strong> dan van een gewoon beest — voor exact dezelfde moeite. Je hoeft er helemaal niets speciaals voor te doen, gewoon doodschieten en skinnen.<br><br><strong>Wat doet de boom?</strong> Talented Tracker verbetert dit systeem. Je ziet ze eerder op je minimap, ze spawnen vaker, en je krijgt nog meer materialen van ze. Als je gericht wilt farmen (een vaste route rijden door een zone), is dit de boom die het meeste oplevert per uur.<br><br><strong>Combineer met boom 1:</strong> Doe eerst Thorough Tanning, daarna Talented Tracker. Die combinatie is ideaal voor efficiënte farming.',
        en:'<strong>First: what are High Value Beasts?</strong> As soon as you learn Skinning, special beasts appear on your minimap as a small, glowing knife icon. Those are <em>High Value Beasts</em>. Skinning one gives you <strong>3 to 4 times more leather</strong> than a regular beast — for the exact same effort. You don\'t need to do anything special — just kill it and skin it.<br><br><strong>What does the tree do?</strong> Talented Tracker improves this system. You see them earlier on your minimap, they spawn more often, and you get even more materials from them. If you want to farm actively (running a fixed route through a zone), this is the tree that yields the most per hour.<br><br><strong>Combine with tree 1:</strong> Do Thorough Tanning first, then Talented Tracker. That combination is ideal for efficient farming.'},
      points:{nl:'15 punten — combineer met boom 1 voor maximale farming-efficiëntie',en:'15 points — combine with tree 1 for maximum farming efficiency'}
    },

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

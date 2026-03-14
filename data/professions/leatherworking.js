// LEATHERWORKING DATA — v2.3
const LEATHERWORKING = {
  id:'leatherworking', icon:'🧶', cat:'crafting', accent:'#8B6347',
  name:{nl:'Leatherworking',en:'Leatherworking',da:'Læderhåndværk'},
  tier:'B',
  lore:{
    nl:'Leatherworking is een <em>crafting profession</em> — je maakt items van materialen. Specifiek: je maakt <strong>leren en mail wapenrusting</strong> voor Druids, Rogues, Hunters en Shamans. Dat zijn vier klassen van de negen in Midnight — een grote potentiële klantenkring. Leatherworking heeft twee soorten producten die het spel door interessant blijven: <strong>Epic gear</strong> (Bind on Pickup, spelers MOETEN bij jou bestellen), en <strong>Void-Touched Drums</strong> (wekelijkse reset, elke week opnieuw verkoop). Combineer dit met Skinning en je hebt nooit materiaalkosten.',
    en:'Leatherworking is a <em>crafting profession</em> — you make items from materials. Specifically: you make <strong>leather and mail armor</strong> for Druids, Rogues, Hunters and Shamans. Those are four of the nine classes in Midnight — a large potential customer base. Leatherworking has two types of products that keep it interesting throughout the expansion: <strong>Epic gear</strong> (Bind on Pickup, players MUST order from you), and <strong>Void-Touched Drums</strong> (weekly reset, new sales every week). Combine with Skinning and you never have material costs.',
    da:'Leatherworking er en <em>craftingprofession</em> — du laver genstande af materialer. Specifikt: du laver <strong>læder- og brynjrustning</strong> til Druider, Slyngler, Jægere og Shamaner. Det er fire af de ni klasser i Midnight — en stor potentiel kundekreds. Leatherworking har to typer produkter der holder det interessant: <strong>Epic gear</strong> (Bind on Pickup, spillere SKAL bestille hos dig), og <strong>Void-Touched Trommer</strong> (ugentlig nulstilling, nyt salg hver uge).'
  },
  goldrating:3, userating:3,
  trainer:{
    name:'Talmar',
    loc:{
      nl:'Trainer Talmar staat in de <strong>Bazaar van Silvermoon City</strong>, aan de westkant van het marktgebied — vlak bij het portaal naar de Timeways. De Bazaar is het centrale handelsgebied van de stad.',
      en:'Trainer Talmar is in the <strong>Bazaar of Silvermoon City</strong>, on the west side of the market area — right next to the portal to the Timeways. The Bazaar is the central trading area of the city.',
      da:'Træner Talmar er i <strong>Bazaar i Silvermoon City</strong>, på vestsiden af markedsområdet — lige ved siden af portalen til Timeways. Bazaar er byens centrale handelsområde.'
    },
    way:'/way #2393 43.21 55.79',
    note:{
      nl:'💡 <strong>Over recepten:</strong> Talmar verkoopt de basis-recepten. Maar de beste recepten — voor Epic gear en Spellthreads — vallen uit raid-bosses of koop je bij rep-vendors. Ga zo snel mogelijk raiden om die recepten te verzamelen. <strong>Epic recepten zijn Bind on Pickup</strong> — jij krijgt hem, jij kan ermee craften. Anderen niet.',
      en:'💡 <strong>About recipes:</strong> Talmar sells the base recipes. But the best recipes — for Epic gear and Spellthreads — drop from raid bosses or are bought from rep vendors. Start raiding as soon as possible to collect those recipes. <strong>Epic recipes are Bind on Pickup</strong> — you get it, you can craft with it. Others cannot.',
      da:'💡 <strong>Om opskrifter:</strong> Talmar sælger basisopskrifterne. Men de bedste opskrifter — til Epic gear og Trylletråde — dropper fra raid-bosser eller købes hos rep-sælgere. Begynd at raige så hurtigt som muligt. <strong>Epic opskrifter er Bind on Pickup</strong> — du får den, du kan crafte med den.'
    }
  },
  specs:[
    {
      title:{nl:'📖 Hoe werken specialisaties bij een crafting profession?',en:'📖 How do specializations work for a crafting profession?',da:'📖 Hvordan fungerer specialiseringer for en craftingprofession?'},
      desc:{
        nl:'Elke keer als je iets craft bij Leatherworking, verdien je <strong>Kennis Punten (KP)</strong>. Die punten stop je in een van de vier bomen hieronder. Elke boom maakt je beter in een specifiek type item. Je kunt ook KP verdienen via dagelijkse quests, schatten vinden, en wekelijkse crafting opdrachten.<br><br>Je kunt pas beginnen zodra je <strong>LW skill 25</strong> hebt. De beste manier om snel skill 25 te bereiken: craft zo veel mogelijk basisitems (leer riemen, leren schoenen) die je van simpele materialen maakt.<br><br><strong>Advies voor beginners:</strong> Begin altijd met Leather Armor Mastery (boom 1). Dat geeft je de meeste crafting orders in de eerste weken van de expansie, wanneer iedereen gear nodig heeft.',
        en:'Every time you craft something in Leatherworking, you earn <strong>Knowledge Points (KP)</strong>. You put those points into one of the four trees below. Each tree makes you better at a specific type of item. You can also earn KP through daily quests, finding treasures, and weekly crafting assignments.<br><br>You can only start once you have <strong>LW skill 25</strong>. The best way to reach skill 25 quickly: craft as many basic items as possible (leather belts, leather shoes) that you make from simple materials.<br><br><strong>Advice for beginners:</strong> Always start with Leather Armor Mastery (tree 1). That gives you the most crafting orders in the first weeks of the expansion, when everyone needs gear.',
        da:'Hver gang du laver noget i Leatherworking, tjener du <strong>Videnpunkter (KP)</strong>. Disse punkter sætter du ind i et af de fire træer nedenfor. Hvert træ gør dig bedre til en specifik type genstand. Du kan også tjene KP via daglige quests, finde skatte og ugentlige craftingopgaver.<br><br>Du kan først starte når du har <strong>LW-færdighed 25</strong>. Det bedste råd til begyndere: start altid med Leather Armor Mastery (træ 1).'
      },
      points:{nl:'Tip: craft elke dag iets — ook kleine dingen geven KP en houden je skillups actief',en:'Tip: craft something every day — even small things give KP and keep your skill-ups active',da:'Tip: craft noget hver dag — selv små ting giver KP og holder dine færdighedsopgraderinger aktive'}
    },
    {
      title:{nl:'🎒 Boom 1 — Lasting Leather · Leather armor voor Druids/Rogues',en:'🎒 Tree 1 — Lasting Leather · Leather armor for Druids/Rogues',da:'🎒 Træ 1 — Lasting Leather · Læderrustning til Druider/Slyngler'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Leren wapenrusting voor <strong>Druids en Rogues</strong> — helm, schouders, borst, polsen, handschoenen, broek, laarzen, riem. De complete set gear die deze klassen dragen.<br><br><strong>Waarom dit eerste?</strong> Druids en Rogues zijn twee van de populairste klassen in WoW Midnight, mede door nieuwe specs. Bij elke expansie launch — de eerste weken — hebben spelers massaal gear nodig. Als jij Leather armor kunt maken en anderen niet, is er grote vraag naar jouw Crafting Orders. Dat zijn de meest winstgevende weken van de hele expansie.<br><br><strong>Epic variant?</strong> De Epic versie van Leather gear is <em>Bind on Pickup</em>. Spelers kunnen het niet kopen op het AH. Ze MOETEN een Crafting Order bij een LW plaatsen. Jij hebt het recept (van raids), jij hebt de exclusieve markt.',
        en:'<strong>What does this make?</strong> Leather armor for <strong>Druids and Rogues</strong> — helm, shoulders, chest, wrists, gloves, legs, boots, belt. The complete set of gear these classes wear.<br><br><strong>Why first?</strong> Druids and Rogues are two of the most popular classes in WoW Midnight, partly due to new specs. At every expansion launch — the first weeks — players massively need gear. If you can make Leather armor and others cannot, there is high demand for your Crafting Orders. Those are the most profitable weeks of the entire expansion.<br><br><strong>Epic variant?</strong> The Epic version of Leather gear is <em>Bind on Pickup</em>. Players cannot buy it on the AH. They MUST place a Crafting Order with a LW. You have the recipe (from raids), you have the exclusive market.',
        da:'<strong>Hvad laver dette?</strong> Læderrustning til <strong>Druider og Slyngler</strong> — hjelm, skuldre, bryst, håndled, handsker, ben, støvler, bælte.<br><br><strong>Hvorfor først?</strong> Druider og Slyngler er to af de mest populære klasser i WoW Midnight. Ved lanceringen af hver ekspansion har spillere massivt brug for gear. Epic-varianten er Bind on Pickup — spillere KAN ikke købe den på AH, de skal bestille hos dig.'
      },
      points:{nl:'30 punten — dit is de absolute basis van LW, begin hier altijd',en:'30 points — this is the absolute foundation of LW, always start here',da:'30 point — dette er det absolutte fundament for LW, start altid her'}
    },
    {
      title:{nl:'🛡 Boom 2 — Safeguarding Scales · Mail armor voor Hunters/Shamans',en:'🛡 Tree 2 — Safeguarding Scales · Mail armor for Hunters/Shamans',da:'🛡 Træ 2 — Safeguarding Scales · Brynjrustning til Jægere/Shamaner'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Mail wapenrusting voor <strong>Hunters en Shamans</strong>. Mail is een ander type pantsering dan leer — zwaarder, meer bescherming. Hunters en Shamans zijn ook populaire klassen met een grote spelersbasis.<br><br><strong>Nieuw in Midnight:</strong> In eerdere expansies gebruikten Leather en Mail bijna compleet andere materialen. In Midnight overlappen ze — <em>beide</em> types gebruiken Void-Tempered Leather én Void-Tempered Scales. Dat betekent: als je Skinning doet, hebben al je materialen nut voor beide bomen. Je hoeft niet apart te farmen voor leer versus schubben.<br><br><strong>Combinatiestrategie:</strong> De meeste LW-spelers investeren in zowel Leather als Mail. Zo heb je orders van vier klassen in plaats van twee — dubbele klantengroep, dubbele inkomensstroom.',
        en:'<strong>What does this make?</strong> Mail armor for <strong>Hunters and Shamans</strong>. Mail is a different type of armor than leather — heavier, more protection. Hunters and Shamans are also popular classes with a large player base.<br><br><strong>New in Midnight:</strong> In previous expansions, Leather and Mail used almost completely different materials. In Midnight they overlap — <em>both</em> types use Void-Tempered Leather AND Void-Tempered Scales. That means: if you do Skinning, all your materials have use for both trees. You do not need to farm separately for leather versus scales.<br><br><strong>Combination strategy:</strong> Most LW players invest in both Leather and Mail. That way you have orders from four classes instead of two — double the customer group, double the income stream.',
        da:'<strong>Hvad laver dette?</strong> Brynjrustning til <strong>Jægere og Shamaner</strong>.<br><br><strong>Nyt i Midnight:</strong> Begge typer bruger nu de samme materialer (Void-Tempered Leather + Scales) — du behøver ikke farme separat. Kombiner Leather og Mail for ordrer fra fire klasser i stedet for to.'
      },
      points:{nl:'30 punten — combineer met Leather Mastery voor maximale orders',en:'30 points — combine with Leather Mastery for maximum orders',da:'30 point — kombiner med Leather Mastery for maksimale ordrer'}
    },
    {
      title:{nl:'🎓 Boom 3 — Learned Leatherworker · crafting stats en efficiency',en:'🎓 Tree 3 — Learned Leatherworker · crafting stats and efficiency',da:'🎓 Træ 3 — Learned Leatherworker · crafting stats og effektivitet'},
      desc:{
        nl:'<strong>Wat zijn de Void-Touched Drums?</strong> De Drums zijn een item dat je craft en dat een <em>groepsbuff</em> geeft vergelijkbaar met <strong>Bloodlust / Heroism</strong> — een van de krachtigste buffs in het spel. Snelheid omhoog, schade omhoog, tijdelijk maar heftig. Elke raider en Mythic+ groep wil deze buff.<br><br><strong>Waarom zijn de Drums de beste geldmaker?</strong><br>• Raids resetten <em>elke week</em> opnieuw<br>• Bij elke reset mogen spelers opnieuw Bloodlust-achtige items kopen of gebruiken<br>• Elke serieuze raider koopt <em>elke week</em> nieuwe Drums<br>• De vraag is 100% voorspelbaar en stopt pas als het spel doodgaat<br>• Dit is misschien wel de meest stabiele wekelijkse goudstroom in het hele spel<br><br><strong>Tools:</strong> Je kunt ook je eigen LW-gereedschap maken. Epic profession tools geven +30 skill op LW-crafts, wat de kwaliteit van je producten verhoogt.',
        en:'<strong>What are the Void-Touched Drums?</strong> The Drums are an item you craft that gives a <em>group buff</em> similar to <strong>Bloodlust / Heroism</strong> — one of the most powerful buffs in the game. Speed up, damage up, temporary but powerful. Every raider and Mythic+ group wants this buff.<br><br><strong>Why are the Drums the best gold-maker?</strong><br>• Raids reset <em>every week</em><br>• At each reset, players can again buy or use Bloodlust-type items<br>• Every serious raider buys new Drums <em>every week</em><br>• Demand is 100% predictable and only stops when the game dies<br>• This is arguably the most stable weekly gold stream in the entire game<br><br><strong>Tools:</strong> You can also craft your own LW tools. Epic profession tools give +30 skill on LW crafts, raising the quality of your products.',
        da:'<strong>Hvad er Void-Touched Trommer?</strong> Trommerne er en genstand du laver der giver en <em>gruppebuff</em> svarende til <strong>Bloodlust / Heroism</strong> — en af de stærkeste buffs i spillet. Enhver raider og Mythic+-gruppe vil have denne buff.<br><br><strong>Hvorfor er Trommerne den bedste guldmager?</strong><br>• Raids nulstilles <em>hver uge</em> → spillere køber nye Trommer <em>hver uge</em><br>• 100% forudsigelig efterspørgsel<br>• Sandsynligvis den mest stabile ugentlige guldstrøm i hele spillet'
      },
      points:{nl:'20 punten — unlock dit zo vroeg mogelijk, het betaalt zichzelf snel terug',en:'20 points — unlock this as early as possible, it pays for itself quickly',da:'20 point — lås dette op så tidligt som muligt, det betaler sig hurtigt tilbage'}
    },
    {
      title:{nl:'🧵 Boom 4 — Flawless Fortes · consumables, leg armor & profession gear',en:'🧵 Tree 4 — Flawless Fortes · consumables, leg armor & profession gear',da:'🧵 Træ 4 — Flawless Fortes · forbrugsvarer, benrustning & professionsudstyr'},
      desc:{
        nl:'<strong>Wat zijn Spellthreads?</strong> Spellthreads zijn een soort <em>enchant voor je broek</em> — je naait ze in een leren broekstuk voor een permanente stat-bonus. Elke caster in het spel — Mages, Warlocks, Shadow Priests, Balance Druids, Evokers, Elemental Shamans — wil een Spellthread. Dat zijn zeven klassen met meerdere specs elk.<br><br><strong>Leg Armor</strong> is het equivalent voor physical DPS en tanks — ook altijd gevraagd.<br><br><strong>Wanneer recepten?</strong> De Spellthread-recepten vallen uit raid-bosses of van rep-vendors — niet bij de gewone trainer. Je moet actief raiden of reputatie bouwen om ze te krijgen. Maar als je ze eenmaal hebt, is de markt er. Elke nieuw gear-stuk broek dat een speler krijgt = nieuwe Spellthread nodig. Stabiele vraag door de hele expansie.',
        en:'<strong>What are Spellthreads?</strong> Spellthreads are a type of <em>enchant for your legs</em> — you sew them into a leather pants piece for a permanent stat bonus. Every caster in the game — Mages, Warlocks, Shadow Priests, Balance Druids, Evokers, Elemental Shamans — wants a Spellthread. Those are seven classes with multiple specs each.<br><br><strong>Leg Armor</strong> is the equivalent for physical DPS and tanks — also always in demand.<br><br><strong>When do you get recipes?</strong> Spellthread recipes drop from raid bosses or rep vendors — not from the regular trainer. You need to actively raid or build reputation to get them. But once you have them, the market is there. Every new pants piece a player gets = new Spellthread needed.',
        da:'<strong>Hvad er Trylletråde?</strong> Trylletråde er en slags <em>enchant til dine ben</em> — du syr dem ind i et læderbuksesstykke for en permanent statsbonus. Enhver caster i spillet vil have en Trylletråd.<br><br><strong>Benrustning</strong> er det tilsvarende for fysisk DPS og tanks.<br><br>Opskrifter dropper fra raids/rep-sælgere. Når du har dem: stabil efterspørgsel hele ekspansionen — hvert nyt buksesstykke en spiller får = ny Trylletråd nødvendig.'
      },
      points:{nl:'15 punten — recepten komen uit raids, ga actief raiden hiervoor',en:'15 points — recipes come from raids, actively raid for these',da:'15 point — opskrifter kommer fra raids, raid aktivt for disse'}
    }
  ],
  items:[
    {icon:'🥁',name:{nl:'Void-Touched Drums',en:'Void-Touched Drums',da:'Void-Touched Trommer'},desc:{nl:'Geeft de hele groep een Bloodlust-achtige buff. Elke raider wil ze elke week. Meest stabiele LW-inkomen — wekelijkse reset garandeert wekelijkse verkoop.',en:'Gives the whole group a Bloodlust-like buff. Every raider wants them every week. Most stable LW income — weekly reset guarantees weekly sales.',da:'Giver hele gruppen en Bloodlust-lignende buff. Ugentlig nulstilling garanterer ugentligt salg.'},tag:'utility'},
    {icon:'🧵',name:{nl:'Spellthreads (been-enchant)',en:'Spellthreads (leg enchant)',da:'Trylletråde (ben-enchant)'},desc:{nl:'Permanente stat-bonus voor leren broeken. Elk nieuw broekstuk voor een caster = nieuwe Spellthread nodig. Recept uit raids — als je het hebt, exclusieve markt.',en:'Permanent stat bonus for leather legs. Every new pants piece for a caster = new Spellthread needed. Recipe from raids — if you have it, exclusive market.',da:'Permanent statsbonus til læderbukser. Hvert nyt buksesstykke = ny Trylletråd nødvendig. Opskrift fra raids.'},tag:'consumable'},
    {icon:'🎒',name:{nl:'Epic Leather & Mail Gear',en:'Epic Leather & Mail Gear',da:'Epic Læder- & Brynjgear'},desc:{nl:'Bind on Pickup — spelers KUNNEN het niet op het AH kopen. Ze moeten het bestellen via Crafting Orders. Jij hebt het recept, jij hebt de exclusieve toegang tot die markt. Recepten uit raids.',en:'Bind on Pickup — players CANNOT buy it on the AH. They must order it via Crafting Orders. You have the recipe, you have exclusive access to that market. Recipes from raids.',da:'Bind on Pickup — spillere KAN ikke købe det på AH. De skal bestille via Crafting Orders. Du har opskriften, du har eksklusiv adgang til det marked.'},tag:'gear'},
    {icon:'🔧',name:{nl:'LW Profession Tools',en:'LW Profession Tools',da:'LW Professions-redskaber'},desc:{nl:'Maak je eigen LW-gereedschap voor hogere skill-bonus. Epic versie geeft +30 skill op LW-crafts — betere kwaliteit, hogere sell price bij Crafting Orders.',en:'Craft your own LW tools for higher skill bonus. Epic version gives +30 skill on LW crafts — better quality, higher sell price on Crafting Orders.',da:'Lav dine egne LW-redskaber. Epic-version giver +30 færdighed på LW-crafts — bedre kvalitet, højere salgspris.'},tag:'utility'},
    {icon:'🏠',name:{nl:'Housing Decoraties',en:'Housing Decorations',da:'Housing-dekorationer'},desc:{nl:'Op level 80 maak je leren meubels voor het Housing systeem — je eigen huis in WoW Midnight. Niche markt, maar stabiele extra inkomstenbron als je het spel verder speelt.',en:'At level 80 you craft leather furniture for the Housing system — your own house in WoW Midnight. Niche market, but stable extra income source as you progress.',da:'Ved level 80 laver du lædermøbler til Housing-systemet — dit eget hus i WoW Midnight.'},tag:'utility'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">📦 Hoe werken Crafting Orders precies?</div><div class="co-desc">Crafting Orders zijn een systeem waarbij andere spelers bij jou iets bestellen dat ze zelf niet kunnen maken. Zo werkt het stap voor stap:<br><br>
1. <strong>Speler plaatst een order</strong> — ze gaan naar de Crafting Order-tafel in Silvermoon City (bij het AH), kiezen een item (bijv. Epic Leather Helm), voegen hun eigen materialen toe als ze die hebben, en stellen een vergoeding in.<br><br>
2. <strong>Jij ziet de order</strong> — als je bij dezelfde tafel staat, zie je alle openstaande public orders. Je pakt de order op, voegt eventuele ontbrekende materialen toe (jij of de koper), en craft het item.<br><br>
3. <strong>Jij ontvangt goud</strong> — het goud van de vergoeding gaat direct naar jou. Het item gaat direct naar de koper (Bind on Pickup, dus jij kunt het toch niet zelf gebruiken).<br><br>
<strong>Public vs Guild/Personal orders:</strong> Public orders zijn zichtbaar voor alle Leatherworkers. Guild orders zijn alleen voor je gilde. Personal orders stuur je direct naar één specifieke speler.</div></div>
<div class="co-step"><div class="co-title">⭐ De Drums-strategie — elke week goud, gegarandeerd</div><div class="co-desc">Dit is waarschijnlijk het beste wat LW te bieden heeft, zeker voor beginners die stabiel goud willen zonder veel marktkennis nodig te hebben.<br><br>
<strong>Waarom Drums zo goed zijn:</strong><br>
• <em>Elke</em> serieuze raider en Mythic+ speler wil ze — dat zijn duizenden spelers<br>
• Raids resetten elke dinsdag om 09:00 — dan mogen spelers opnieuw Bloodlust-items gebruiken<br>
• Elke week opnieuw een nieuwe verkoopronde — de vraag stopt nooit<br>
• Ze zijn relatief goedkoop te maken als je de Drums-boom hebt<br>
• De prijs is stabiel door de constante wekelijkse vraag<br><br>
<strong>Wat je moet doen:</strong><br>
1. Unlock de Drums & Tools boom (20 punten)<br>
2. Craft elke week een batch Drums op reset-dag (dinsdag)<br>
3. Zet ze op het AH of zet jezelf op de public orders lijst<br>
4. Herhaal. Elke week.</div></div>
<div class="co-step"><div class="co-title">🔒 Epic Gear — jouw exclusieve markt</div><div class="co-desc">Dit is uniek aan crafting professions in Midnight: Epic gear is <strong>Bind on Pickup</strong>.<br><br>
Normaal kun je items kopen en verkopen op het AH. Maar Epic LW-gear kan een speler <em>niet</em> kopen op het AH. Ze kunnen het niet vragen aan een vriend die er al één heeft. Ze kunnen het nergens anders verkrijgen.<br><br>
Ze MOETEN bij een Leatherworker een Crafting Order plaatsen.<br><br>
<strong>Wat betekent dit voor jou?</strong> Als jij het Epic recept hebt (valt uit raid-bosses), ben jij de enige die dit kan maken voor andere spelers. Geen concurrentie van het AH. Spelers betalen een premium voor jouw unieke service. Hoe meer Epic recepten je verzamelt door te raiden, hoe meer exclusieve producten je aanbiedt.</div></div>
<div class="co-step"><div class="co-title">📈 Verdienmodel samengevat</div><div class="co-desc">
<strong>Week 1-4 (launch):</strong> Leather en Mail gear orders zijn explosief. Iedereen wil gear. Hoge vergoedingen per order. Dit zijn de meest winstgevende weken.<br><br>
<strong>Hele expansie:</strong> Drums elke week stabiel verkopen. Drums zijn de ruggengraat van je LW-inkomen.<br><br>
<strong>Zodra je raid-recepten hebt:</strong> Epic gear orders voor spelers die het recept nodig hebben. Spellthreads voor alle nieuw-gear broeken.<br><br>
<strong>Level 80:</strong> Housing decoraties als extra niche-inkomen.</div></div>
<div class="tip-box"><strong>💡 Grootste tip:</strong> Combineer Leatherworking met Skinning. Als je allebei hebt, heb je nooit materiaalkosten. Elke Drum die je maakt is pure winst. Elke armor order is pure winst. De combinatie Skinning + Leatherworking is de meest zelfvoorzienende setup in het spel — en dat scheelt op jaarbasis <em>duizenden</em> goudstukken aan materialen.</div>`,
    en:`<div class="co-step"><div class="co-title">📦 How do Crafting Orders work exactly?</div><div class="co-desc">Crafting Orders are a system where other players order something from you that they cannot make themselves. Here is how it works step by step:<br><br>
1. <strong>Player places an order</strong> — they go to the Crafting Order table in Silvermoon City (near the AH), choose an item (e.g. Epic Leather Helm), add their own materials if they have them, and set a fee.<br><br>
2. <strong>You see the order</strong> — standing at the same table, you see all open public orders. You pick up the order, add any missing materials (you or the buyer), and craft the item.<br><br>
3. <strong>You receive gold</strong> — the fee goes directly to you. The item goes directly to the buyer (Bind on Pickup, so you cannot use it yourself anyway).<br><br>
<strong>Public vs Guild/Personal orders:</strong> Public orders are visible to all Leatherworkers. Guild orders are only for your guild. Personal orders go directly to one specific player.</div></div>
<div class="co-step"><div class="co-title">⭐ The Drums strategy — gold every week, guaranteed</div><div class="co-desc">This is probably the best thing LW has to offer, especially for beginners who want stable gold without needing much market knowledge.<br><br>
<strong>Why Drums are so good:</strong><br>
• <em>Every</em> serious raider and Mythic+ player wants them — that is thousands of players<br>
• Raids reset every Tuesday — then players can use Bloodlust items again<br>
• A new round of sales every week — the demand never stops<br>
• They are relatively cheap to make once you have the Drums tree<br>
• The price is stable due to constant weekly demand<br><br>
<strong>What you need to do:</strong><br>
1. Unlock the Drums & Tools tree (20 points)<br>
2. Craft a batch of Drums on reset day (Tuesday) every week<br>
3. List them on the AH or add yourself to the public orders list<br>
4. Repeat. Every week.</div></div>
<div class="co-step"><div class="co-title">🔒 Epic Gear — your exclusive market</div><div class="co-desc">This is unique to crafting professions in Midnight: Epic gear is <strong>Bind on Pickup</strong>.<br><br>
Normally you can buy and sell items on the AH. But Epic LW gear <em>cannot</em> be bought on the AH. Players cannot ask a friend who already has one. They cannot get it anywhere else.<br><br>
They MUST place a Crafting Order with a Leatherworker.<br><br>
<strong>What does this mean for you?</strong> If you have the Epic recipe (drops from raid bosses), you are the only one who can make this for other players. No competition from the AH. Players pay a premium for your unique service. The more Epic recipes you collect through raiding, the more exclusive products you offer.</div></div>
<div class="co-step"><div class="co-title">📈 Earnings model summarized</div><div class="co-desc">
<strong>Week 1-4 (launch):</strong> Leather and Mail gear orders are explosive. Everyone needs gear. High fees per order. These are the most profitable weeks.<br><br>
<strong>Entire expansion:</strong> Sell Drums stably every week. Drums are the backbone of your LW income.<br><br>
<strong>Once you have raid recipes:</strong> Epic gear orders for players who need the recipe. Spellthreads for all newly-geared legs.<br><br>
<strong>Level 80:</strong> Housing decorations as extra niche income.</div></div>
<div class="tip-box"><strong>💡 Biggest tip:</strong> Combine Leatherworking with Skinning. If you have both, you never have material costs. Every Drum you make is pure profit. Every armor order is pure profit. The Skinning + Leatherworking combo is the most self-sufficient setup in the game.</div>`,
    da:`<div class="co-step"><div class="co-title">📦 Hvordan fungerer Crafting Orders præcist?</div><div class="co-desc">Crafting Orders er et system hvor andre spillere bestiller noget hos dig de ikke kan lave selv. Trin for trin:<br><br>
1. <strong>Spilleren lægger en ordre</strong> — de går til Crafting Order-bordet i Silvermoon City, vælger en genstand, tilføjer egne materialer og sætter et honorar.<br><br>
2. <strong>Du ser ordren</strong> — ved det samme bord ser du alle åbne public orders. Du tager ordren op, tilføjer eventuelle manglende materialer og laver genstanden.<br><br>
3. <strong>Du modtager guld</strong> — honoraret går direkte til dig. Genstanden går direkte til køberen (Bind on Pickup).</div></div>
<div class="co-step"><div class="co-title">⭐ Trommer-strategien — guld hver uge, garanteret</div><div class="co-desc">
<strong>Hvorfor Trommer er så gode:</strong><br>
• <em>Enhver</em> seriøs raider og Mythic+-spiller vil have dem<br>
• Raids nulstilles hver tirsdag — ny salgsrunde hver uge<br>
• 100% forudsigelig efterspørgsel, stopper aldrig<br>
• Sandsynligvis den mest stabile ugentlige guldstrøm i spillet<br><br>
<strong>Hvad du skal gøre:</strong> Lås Trommer-træet op, lav Trommer på nulstillingsdagen (tirsdag), sæt dem på AH. Gentag hver uge.</div></div>
<div class="co-step"><div class="co-title">🔒 Epic Gear — dit eksklusive marked</div><div class="co-desc">Epic LW-gear er <strong>Bind on Pickup</strong> — spillere KAN IKKE købe det på AH. De SKAL lægge en Crafting Order hos en Leatherworker. Du har opskriften (fra raids), du har eksklusiv adgang til det marked. Ingen konkurrence fra AH.</div></div>
<div class="co-step"><div class="co-title">📈 Indtjeningsmodel opsummeret</div><div class="co-desc">
<strong>Uge 1-4 (launch):</strong> Rustningsordrer er eksplosive — alle vil have gear, høje honorarer.<br>
<strong>Hele ekspansionen:</strong> Ugentlige Trommersalg — stabilt og forudsigeligt.<br>
<strong>Når du har raid-opskrifter:</strong> Epic gear-ordrer + Trylletråde.<br>
<strong>Level 80:</strong> Housing-dekorationer som ekstra niche-indkomst.</div></div>
<div class="tip-box"><strong>💡 Største tip:</strong> Kombiner Leatherworking med Skinning. Aldrig materialomkostninger. Hvert craft er ren profit. Skinning + LW er den mest selvforsynende opsætning i spillet.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-leatherworking-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/leatherworking-specialization-guide-and-builds'
};

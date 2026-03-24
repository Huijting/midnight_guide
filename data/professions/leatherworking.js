// LEATHERWORKING DATA — v2.3
const LEATHERWORKING = {
  id:'leatherworking', icon:'🧶', cat:'crafting', accent:'#8B6347',
  name:{nl:'Leatherworking',en:'Leatherworking'},
  tier:'B',
  lore:{
    nl:'Leatherworking is een <em>crafting profession</em> — je maakt items van materialen. Specifiek: je maakt <strong>leren en mail wapenrusting</strong> voor Druids, Rogues, Hunters en Shamans. Dat zijn vier klassen van de negen in Midnight — een grote potentiële klantenkring. Leatherworking heeft twee soorten producten die het spel door interessant blijven: <strong>Epic gear</strong> (Bind on Pickup, spelers MOETEN bij jou bestellen), en <strong>Void-Touched Drums</strong> (wekelijkse reset, elke week opnieuw verkoop). Combineer dit met Skinning en je hebt nooit materiaalkosten.',
    en:'Leatherworking is a <em>crafting profession</em> — you make items from materials. Specifically: you make <strong>leather and mail armor</strong> for Druids, Rogues, Hunters and Shamans. Those are four of the nine classes in Midnight — a large potential customer base. Leatherworking has two types of products that keep it interesting throughout the expansion: <strong>Epic gear</strong> (Bind on Pickup, players MUST order from you), and <strong>Void-Touched Drums</strong> (weekly reset, new sales every week). Combine with Skinning and you never have material costs.'},
  goldrating:3, userating:3,
  trainer:{
    name:'Talmar',
    loc:{
      nl:'Trainer Talmar staat in de <strong>Bazaar van Silvermoon City</strong>, aan de westkant van het marktgebied — vlak bij het portaal naar de Timeways. De Bazaar is het centrale handelsgebied van de stad.',
      en:'Trainer Talmar is in the <strong>Bazaar of Silvermoon City</strong>, on the west side of the market area — right next to the portal to the Timeways. The Bazaar is the central trading area of the city.'},
    way:'/way #2393 43.21 55.79',
    note:{
      nl:'💡 <strong>Over recepten:</strong> Talmar verkoopt de basis-recepten. Maar de beste recepten — voor Epic gear en Spellthreads — vallen uit raid-bosses of koop je bij rep-vendors. Ga zo snel mogelijk raiden om die recepten te verzamelen. <strong>Epic recepten zijn Bind on Pickup</strong> — jij krijgt hem, jij kan ermee craften. Anderen niet.',
      en:'💡 <strong>About recipes:</strong> Talmar sells the base recipes. But the best recipes — for Epic gear and Spellthreads — drop from raid bosses or are bought from rep vendors. Start raiding as soon as possible to collect those recipes. <strong>Epic recipes are Bind on Pickup</strong> — you get it, you can craft with it. Others cannot.'}
  },
  specs:[
    {
      title:{nl:'📖 De vier Leatherworking-specialisatietakken',en:'📖 The four Leatherworking specialization trees'},
      desc:{
        nl:'Leatherworking heeft <strong>vier specialisatietakken</strong>: <em>Lasting Leather</em> (leren armor-recepten), <em>Safeguarding Scales</em> (mail armor-recepten), <em>Flawless Fortes</em> (armor kits, profession gear voor andere crafters en optional reagents) en <em>Learned Leatherworker</em> (crafting stats Multicraft/Resourcefulness/Ingenuity). Ontgrendeld op skill 25, 50, 60, 75.<br><br>Dag 1: ~40–50 KP. Daarna ~19 KP/week. Leather en Mail hebben dezelfde boomstructuur — investeer in de armor-type die het meest gevraagd wordt op jouw server.',
        en:'Leatherworking has <strong>four specialization trees</strong>: <em>Lasting Leather</em> (leather armor recipes), <em>Safeguarding Scales</em> (mail armor recipes), <em>Flawless Fortes</em> (armor kits, profession gear for other crafters and optional reagents) and <em>Learned Leatherworker</em> (crafting stats Multicraft/Resourcefulness/Ingenuity). Unlocked at skill 25, 50, 60, 75.<br><br>Day 1: ~40–50 KP. After that ~19 KP/week. Leather and Mail have the same tree structure — invest in whichever armor type is most demanded on your server.'},
      points:{nl:'Tip: kies Lasting Leather (leer) of Safeguarding Scales (mail) op basis van welke klassen het populairst zijn',en:'Tip: pick Lasting Leather (leather) or Safeguarding Scales (mail) based on which classes are most popular'}
    },
    {
      title:{nl:'🦺 Boom 1 — Lasting Leather · leren armor voor Rogues, Druids, Monks, DHs',en:'🦺 Tree 1 — Lasting Leather · leather armor for Rogues, Druids, Monks, DHs'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Epic leren armor — één recept per slot. Beschikbaar voor Rogues, Druids, Monks en Demon Hunters. De structuur is identiek aan Safeguarding Scales: 30 punten in de root node ontgrendelt sub-specs gesplitst per slotgroep (linker zijde: Head/Chest/Shoulder/Wrist; rechter zijde: Legs/Hands/Waist/Feet).<br><br><strong>Leather is breed gevraagd:</strong> Vier klassen gebruiken leer — Rogues (altijd populair bij PvP-ers), Feral Druids (dps), Balance Druids, Monks en Demon Hunters. Brede klantenbasis.<br><br><strong>Crafting Orders verplicht voor Epic:</strong> Epic leren armor is Bind on Pickup. Spelers MOETEN bij jou een order plaatsen. Verzamel Epic recepten uit raids voor exclusieve marktpositie.',
        en:'<strong>What does this make?</strong> Epic leather armor — one recipe per slot. Available for Rogues, Druids, Monks and Demon Hunters. Structure is identical to Safeguarding Scales: 30 points in root unlocks sub-specs split by slot group (left: Head/Chest/Shoulder/Wrist; right: Legs/Hands/Waist/Feet).<br><br><strong>Leather is broadly demanded:</strong> Four classes use leather — Rogues, Feral Druids, Balance Druids, Monks and Demon Hunters. Wide customer base.<br><br><strong>Crafting Orders required for Epic:</strong> Epic leather armor is Bind on Pickup. Players MUST place an order with you.'},
      points:{nl:'30 punten root → kies linker of rechter slotgroep → 30 punten sub-spec voor alle vier slots',en:'30 points root → pick left or right slot group → 30 points sub-spec for all four slots'}
    },
    {
      title:{nl:'🔗 Boom 2 — Safeguarding Scales · mail armor voor Hunters, Shams, Evokers',en:'🔗 Tree 2 — Safeguarding Scales · mail armor for Hunters, Shams, Evokers'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Epic mail armor voor Hunters, Shamans en Evokers. De boomstructuur is identiek aan Lasting Leather — zelfde investering, zelfde slot-groepen, zelfde punt-vereisten.<br><br><strong>Hunters zijn zeer populair in Midnight:</strong> De nieuwe Ren\'dorei Void Hunter-spec heeft veel aandacht getrokken. Mail-klassen zijn breed vertegenwoordigd — dit is de twee-na-breedste armor-markt (na plate).<br><br><strong>Keuze:</strong> Leather of Mail kiezen is een kwestie van je server-samenstelling. Check welke klassen het meest spelen op jouw realm via Raider.IO of WoW-population trackers.',
        en:'<strong>What does this make?</strong> Epic mail armor for Hunters, Shamans and Evokers. Tree structure is identical to Lasting Leather — same investment, same slot groups, same point requirements.<br><br><strong>Hunters are very popular in Midnight:</strong> The new Ren\'dorei Void Hunter spec has drawn a lot of attention. Mail classes are broadly represented — this is the second-broadest armor market (after plate).<br><br><strong>Choice:</strong> Leather or Mail is a matter of your server composition. Check which classes are most played on your realm.'},
      points:{nl:'Zelfde structuur als Lasting Leather — kies op basis van server-populariteit van leather vs. mail klassen',en:'Same structure as Lasting Leather — pick based on server popularity of leather vs. mail classes'}
    },
    {
      title:{nl:'🔧 Boom 3 — Flawless Fortes · armor kits, profession gear en optional reagents',en:'🔧 Tree 3 — Flawless Fortes · armor kits, profession gear and optional reagents'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Leg armor kits (enchant-equivalent voor beenplaat), profession tools en accessoires voor meerdere crafting professions, en optional reagents. Sterkste sub-spec: <em>profession tools</em> — één investering ontgrendelt tools voor alle armor-type professionals tegelijk.<br><br><strong>Leg armor kits:</strong> Elk karakter wil een leg armor kit op zijn beenplaat. Stabiele markt vergelijkbaar met enchants. Je maakt ze op Vellum-equivalent en verkoopt ze op het AH.<br><br><strong>Profession tools:</strong> LW maakt Chest accessoires voor diverse crafters. Hetzelfde principe als bij Blacksmithing tools — brede vraag, launch-piek.',
        en:'<strong>What does this make?</strong> Leg armor kits (enchant-equivalent for leg piece), profession tools and accessories for multiple crafting professions, and optional reagents. Strongest sub-spec: <em>profession tools</em> — one investment unlocks tools for all armor-type professionals at once.<br><br><strong>Leg armor kits:</strong> Every character wants a leg armor kit on their leg piece. Stable market similar to enchants. You make them and sell on AH.<br><br><strong>Profession tools:</strong> LW makes Chest accessories for various crafters. Same principle as Blacksmithing tools — broad demand, launch peak.'},
      points:{nl:'Leg armor kits als eerste — breed en stabiel, dan profession tools voor brede crafter-markt',en:'Leg armor kits first — broad and stable, then profession tools for broad crafter market'}
    },
    {
      title:{nl:'📈 Boom 4 — Learned Leatherworker · crafting stats voor alles',en:'📈 Tree 4 — Learned Leatherworker · crafting stats for everything'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Verhoogt Ingenuity, Multicraft en Resourcefulness voor alle LW-crafts. Sub-spec: <em>Waning Waste</em> (Resourcefulness — bespaart materialen bij elke craft). Begin met 5 punten in de root om Waning Waste te unlocken — dat geeft direct Resourcefulness op alle crafts.<br><br><strong>Aanbeveling:</strong> Begin hier als eerste boom met Waning Waste sub-spec. De Resourcefulness bespaart materialen op elke craft en maakt al je armor-orders winstgevender vanaf dag 1. Dan naar je gekozen armor-boom (Leather of Mail).',
        en:'<strong>What does this do?</strong> Increases Ingenuity, Multicraft and Resourcefulness for all LW crafts. Sub-spec: <em>Waning Waste</em> (Resourcefulness — saves materials on every craft). Start with 5 points in root to unlock Waning Waste — that immediately gives Resourcefulness on all crafts.<br><br><strong>Recommendation:</strong> Start here as first tree with Waning Waste sub-spec. The Resourcefulness saves materials on every craft and makes all your armor orders more profitable from day 1. Then move to your chosen armor tree (Leather or Mail).'},
      points:{nl:'5 punten root → Waning Waste sub-spec → Resourcefulness actief op alle LW crafts',en:'5 points root → Waning Waste sub-spec → Resourcefulness active on all LW crafts'}
    }
  ],
  items:[
    {icon:'🥁',name:{nl:'Void-Touched Drums',en:'Void-Touched Drums'},desc:{nl:'Geeft de hele groep een Bloodlust-achtige buff. Elke raider wil ze elke week. Meest stabiele LW-inkomen — wekelijkse reset garandeert wekelijkse verkoop.',en:'Gives the whole group a Bloodlust-like buff. Every raider wants them every week. Most stable LW income — weekly reset guarantees weekly sales.'},tag:'utility'},
    {icon:'🧵',name:{nl:'Spellthreads (been-enchant)',en:'Spellthreads (leg enchant)'},desc:{nl:'Permanente stat-bonus voor leren broeken. Elk nieuw broekstuk voor een caster = nieuwe Spellthread nodig. Recept uit raids — als je het hebt, exclusieve markt.',en:'Permanent stat bonus for leather legs. Every new pants piece for a caster = new Spellthread needed. Recipe from raids — if you have it, exclusive market.'},tag:'consumable'},
    {icon:'🎒',name:{nl:'Epic Leather & Mail Gear',en:'Epic Leather & Mail Gear'},desc:{nl:'Bind on Pickup — spelers KUNNEN het niet op het AH kopen. Ze moeten het bestellen via Crafting Orders. Jij hebt het recept, jij hebt de exclusieve toegang tot die markt. Recepten uit raids.',en:'Bind on Pickup — players CANNOT buy it on the AH. They must order it via Crafting Orders. You have the recipe, you have exclusive access to that market. Recipes from raids.'},tag:'gear'},
    {icon:'🔧',name:{nl:'LW Profession Tools',en:'LW Profession Tools'},desc:{nl:'Maak je eigen LW-gereedschap voor hogere skill-bonus. Epic versie geeft +30 skill op LW-crafts — betere kwaliteit, hogere sell price bij Crafting Orders.',en:'Craft your own LW tools for higher skill bonus. Epic version gives +30 skill on LW crafts — better quality, higher sell price on Crafting Orders.'},tag:'utility'},
    {icon:'🏠',name:{nl:'Housing Decoraties',en:'Housing Decorations'},desc:{nl:'Op level 80 maak je leren meubels voor het Housing systeem — je eigen huis in WoW Midnight. Niche markt, maar stabiele extra inkomstenbron als je het spel verder speelt.',en:'At level 80 you craft leather furniture for the Housing system — your own house in WoW Midnight. Niche market, but stable extra income source as you progress.'},tag:'utility'}
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
<div class="tip-box"><strong>💡 Biggest tip:</strong> Combine Leatherworking with Skinning. If you have both, you never have material costs. Every Drum you make is pure profit. Every armor order is pure profit. The Skinning + Leatherworking combo is the most self-sufficient setup in the game.</div>`},
  method_url:'https://www.method.gg/guides/midnight-leatherworking-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/leatherworking-specialization-guide-and-builds'
};

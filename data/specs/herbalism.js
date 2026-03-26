// HERBALISM DATA — v2.3
const HERBALISM = {
  id:'herbalism', icon:'🌿', cat:'gathering', accent:'#4a7c4e',
  name:{nl:'Herbalism',en:'Herbalism'},
  tier:'S',
  lore:{
    nl:'Herbalism is een <em>gathering profession</em> waarbij je kruiden, bloemen en magische planten plukt uit de wereld. Die planten zijn de absolute basis voor <strong>Alchemy</strong> — een van de meest gevraagde crafting professions in het spel. Elke speler die potions, flasks en elixirs wil (en dat is <em>elke</em> serieuze raider en Mythic+ speler), heeft kruiden nodig.<br><br>Herbalism is daarmee de meest universele gathering profession: de vraag is constant, de klantengroep is enorm, en de materialen stapelen nooit op. Nieuw in Midnight: <strong>Lunar Bloom-cyclus</strong> (bepaalde bloemen bloeien alleen \'s nachts of overdag), <strong>Void-Tainted Herbs</strong> (gevaarlijke maar superwaardevolle planten in voidgebieden), en het <strong>Seed Cultivation</strong>-systeem waarmee je je eigen tuin kunt aanleggen in het Housing systeem.',
    en:'Herbalism is a <em>gathering profession</em> where you pick herbs, flowers and magical plants from the world. Those plants are the absolute foundation for <strong>Alchemy</strong> — one of the most in-demand crafting professions in the game. Every player who wants potions, flasks and elixirs (and that is <em>every</em> serious raider and Mythic+ player) needs herbs.<br><br>Herbalism is therefore the most universal gathering profession: demand is constant, the customer base is enormous, and materials never pile up unsold. New in Midnight: <strong>Lunar Bloom cycle</strong> (certain flowers only bloom at night or during the day), <strong>Void-Tainted Herbs</strong> (dangerous but super-valuable plants in void areas), and the <strong>Seed Cultivation</strong> system that lets you plant your own garden in the Housing system.'},
  goldrating:5, userating:4,
  trainer:{
    name:'Botanist Nathera',
    loc:{
      nl:'<strong>Botanist Nathera</strong> staat in de <strong>Sunwell Gardens</strong> aan de rand van Silvermoon City, richting Eversong Woods (officiële NPC-naam).',
      en:'<strong>Botanist Nathera</strong> is in the <strong>Sunwell Gardens</strong> on the edge of Silvermoon City toward Eversong Woods (official in-game NPC name).'},
    way:'/way #2393 48.20 51.52',
    note:{
      nl:'💡 <strong>Herbalism is de beste combinatie met Alchemy:</strong> Als je Alchemy ook leert, kun je zelf je potions en flasks maken van de kruiden die je plukt. Dan heb je nooit materiaalkosten en kun je alles wat je maakt direct verkopen. Dit is een van de meest winstgevende profession-combinaties in het hele spel.',
      en:'💡 <strong>Herbalism is the best combination with Alchemy:</strong> If you also learn Alchemy, you can craft your own potions and flasks from the herbs you pick. Then you never have material costs and can sell everything you make directly. This is one of the most profitable profession combinations in the entire game.'}
  },
  specs:[
    {
      title:{nl:'📖 Herbalism basics — wat maakt het anders dan Mining?',en:'📖 Herbalism basics — what makes it different from Mining?'},
      desc:{
        nl:'Net als Mining zoek je <strong>nodes</strong> op de kaart — maar in dit geval zijn het planten, struiken en bloemen in plaats van rotsen. Nodes verschijnen als groene stippen op je minimap.<br><br><strong>Het Lunar Bloom systeem:</strong> Dit is de grootste verassing voor nieuwe Herbalism-spelers. Sommige kruiden in Midnight zijn alleen beschikbaar op bepaalde tijden van de dag:<br>• <em>Moonpetal</em> bloeit alleen \'s nachts (20:00 – 06:00 server time)<br>• <em>Dawnbloom</em> is alleen overdag te plukken (06:00 – 20:00)<br>• <em>Voidshade</em> bloeit alleen tijdens bepaalde weersomstandigheden<br><br>Dit betekent dat de prijs van die kruiden ook fluctueert — \'s nachts zijn Moonpetal-prijzen lager omdat meer spelers ze pakken; overdag zijn ze zeldzamer en duurder. Slimme Herbalists verkopen hun Moonpetal-oogst overdag als de prijs hoog is.<br><br><strong>KP verdienen:</strong> Plukken, dagelijkse quests, en Seed Cultivation (je eigen tuin). KP verdelen vanaf <strong>Herbalism skill 25</strong>.',
        en:'Like Mining you look for <strong>nodes</strong> on the map — but in this case they are plants, bushes and flowers instead of rocks. Nodes appear as green dots on your minimap.<br><br><strong>The Lunar Bloom system:</strong> This is the biggest surprise for new Herbalism players. Some herbs in Midnight are only available at certain times of day:<br>• <em>Moonpetal</em> only blooms at night (20:00 – 06:00 server time)<br>• <em>Dawnbloom</em> is only pickable during the day (06:00 – 20:00)<br>• <em>Voidshade</em> only blooms during certain weather conditions<br><br>This means the price of those herbs fluctuates too — at night Moonpetal prices are lower because more players are picking them; during the day they are rarer and more expensive. Smart Herbalists sell their Moonpetal harvest during the day when the price is high.<br><br><strong>Earning KP:</strong> Picking, daily quests, and Seed Cultivation. Spend points from <strong>Herbalism skill 25</strong>.'},
      points:{nl:'Tip: check de AH-prijzen op verschillende tijden van de dag — tijdsgebonden kruiden fluctueren sterk',en:'Tip: check AH prices at different times of day — time-bound herbs fluctuate heavily'}
    },
    {
      title:{nl:'⚡ Boom 1 — Midnight Overload · overload cooldown, begin hier',en:'⚡ Tree 1 — Midnight Overload · overload cooldown, start here'},
      desc:{
        nl:'<strong>Wat doet het?</strong> Meer kruiden per plant, snellere pluktijd, en hogere kans op zeldzame bijproducten zoals Potent Seeds (voor Seed Cultivation) en Aura Dust (bijproduct dat Alchemists nodig hebben).<br><br><strong>Waarom als eerste?</strong> Dit is de directe vertaling van "meer tijd = meer goud" voor Herbalism. Elke plant die je plukt geeft meer materialen. Over een dag van farming is het verschil enorm — met 30 KP in Bountiful Harvest plukt een ervaren Herbalist 30-40% meer per uur dan zonder.<br><br><strong>Extra effect:</strong> Hogere rang ontgrendelt het plukken van <em>Ancient Herbs</em> — extra grote plantnodes die veel meer opleveren dan normaal maar alleen zichtbaar zijn voor Herbalists met voldoende vaardigheid.',
        en:'<strong>What does it do?</strong> More herbs per plant, faster picking time, and higher chance of rare byproducts like Potent Seeds (for Seed Cultivation) and Aura Dust (byproduct that Alchemists need).<br><br><strong>Why first?</strong> This is the direct translation of "more time = more gold" for Herbalism. Every plant you pick yields more materials. Over a day of farming the difference is enormous — with 30 KP in Bountiful Harvest an experienced Herbalist picks 30-40% more per hour than without.<br><br><strong>Extra effect:</strong> Higher rank unlocks picking <em>Ancient Herbs</em> — extra large plant nodes that yield much more than normal but are only visible to Herbalists with sufficient skill.'},
      points:{nl:'30 punten — altijd als eerste, geen discussie',en:'30 points — always first, no discussion'}
    },
    {
      title:{nl:'🌿 Boom 2 — Botany · herb-specifieke bonussen en Nocturnal Lotus',en:'🌿 Tree 2 — Botany · herb-specific bonuses and Nocturnal Lotus'},
      desc:{
        nl:'<strong>Wat doet het?</strong> Je wordt beter in het vinden en plukken van Lunar Bloom-kruiden — de tijdsgebonden bloemen die alleen op bepaalde momenten verschijnen. Specifiek: je ziet ze eerder op je minimap, ze yielden meer per pluk, en je kans op een <em>Moonpetal Cluster</em> (vijf keer zoveel materiaal) neemt flink toe.<br><br><strong>Waarom waardevol?</strong> Moonpetal en Dawnbloom zijn twee van de duurste kruiden in Midnight. Alchemists hebben ze nodig voor de beste flasks — <em>Flask of the Magisters</em> en <em>Flask of the Blood Knights</em> — die elke raider wekelijks koopt. Die flasks geven een uur lang stat-bonussen, en ze zijn verbruiksmateriaal: elke raid-avond nieuwe flasks.<br><br><strong>Wanneer kiezen?</strong> Als je de timings kent (wanneer welk kruid bloeit) en bereid bent je speeltijden aan te passen. Moonpetal farmen is \'s nachts het beste; Lunar Mastery maakt dat extra efficiënt.',
        en:'<strong>What does it do?</strong> You become better at finding and picking Lunar Bloom herbs — the time-bound flowers that only appear at certain moments. Specifically: you see them earlier on your minimap, they yield more per pick, and your chance of a <em>Moonpetal Cluster</em> (five times the material) increases significantly.<br><br><strong>Why valuable?</strong> Moonpetal and Dawnbloom are two of the most expensive herbs in Midnight. Alchemists need them for the best flasks — <em>Flask of the Magisters</em> and <em>Flask of the Blood Knights</em> — that every raider buys weekly. Those flasks give an hour of stat bonuses, and they are consumables: new flasks every raid night.<br><br><strong>When to choose?</strong> If you know the timings (when which herb blooms) and are willing to adjust your play times. Moonpetal farming is best at night; Lunar Mastery makes that extra efficient.'},
      points:{nl:'25 punten — kies dit als je weet wanneer jij speelt en de timings wilt benutten',en:'25 points — choose this if you know when you play and want to exploit the timings'}
    },
    {
      title:{nl:'🌾 Boom 3 — Bountiful Harvest · gemount herbalizen en meer yields',en:'🌾 Tree 3 — Bountiful Harvest · mounted herbalism and higher yields'},
      desc:{
        nl:'<strong>Wat zijn Void-Tainted Herbs?</strong> In de Voidstorm-zones van Midnight groeien bijzondere planten die beïnvloed zijn door void-magie. Ze zien er paars-zwart uit en geven een klein debuff als je ze plukt zonder bescherming — je verliest tijdelijk 5% movement speed.<br><br>Maar: ze zijn de ingrediënten voor <em>Void-Infused Potions</em> — de sterkste type potion in het spel voor combat. Elke Mythic+ raider wil deze potions. Ze verkopen voor drie tot vier keer de prijs van gewone kruiden.<br><br><strong>Wat doet de boom?</strong> Void Flora verwijdert het debuff volledig, verhoogt je yield, en ontgrendelt het plukken van <em>Corrupted Seedlings</em> — een zeldzaam bijproduct dat Alchemists nodig hebben voor hun sterkste transmutaties.<br><br><strong>Wanneer kiezen?</strong> Als je al boom 1 hebt en de Void-zones veilig kunt bereiken. De mobs in Voidstorm-gebieden zijn agressiever dan elders.',
        en:'<strong>What are Void-Tainted Herbs?</strong> In the Voidstorm zones of Midnight, special plants grow that have been influenced by void magic. They look purple-black and give a small debuff when you pick them without protection — you temporarily lose 5% movement speed.<br><br>But: they are the ingredients for <em>Void-Infused Potions</em> — the strongest type of potion in the game for combat. Every Mythic+ raider wants these potions. They sell for three to four times the price of normal herbs.<br><br><strong>What does the tree do?</strong> Void Flora removes the debuff completely, increases your yield, and unlocks picking <em>Corrupted Seedlings</em> — a rare byproduct that Alchemists need for their strongest transmutations.<br><br><strong>When to choose?</strong> Once you have tree 1 and can safely reach the Void zones. Mobs in Voidstorm areas are more aggressive than elsewhere.'},
      points:{nl:'20 punten — winstgevend maar pas beschikbaar als je de Void-zones kunt bereiken',en:'20 points — profitable but only available once you can reach the Void zones'}
    },

  ],
  items:[
    {icon:'🌸',name:{nl:'Moonpetal',en:'Moonpetal'},desc:{nl:'Bloeit alleen \'s nachts. Ingrediënt voor Flask of the Void — de beste flask voor casters. Prijs is overdag hoog omdat ze zeldzamer zijn. Sell \'s ochtends vroeg voor maximale prijs.',en:'Only blooms at night. Ingredient for Flask of the Void — the best flask for casters. Price is high during the day because they are rarer. Sell early morning for maximum price.'},tag:'material'},
    {icon:'🌅',name:{nl:'Dawnbloom',en:'Dawnbloom'},desc:{nl:'Bloeit alleen overdag. Ingrediënt voor Flask of Dawn — beste flask voor physical DPS en tanks. Meest gevraagde kruid voor raidavonden want tanks en melee DPS zijn altijd in de meerderheid.',en:'Only blooms during the day. Ingredient for Flask of Dawn — best flask for physical DPS and tanks. Most in-demand herb for raid nights because tanks and melee DPS are always the majority.'},tag:'material'},
    {icon:'🟣',name:{nl:'Voidshade',en:'Voidshade'},desc:{nl:'Standaard kruid dat overal groeit. Basisingrediënt voor de meeste potions. Altijd verkoopbaar, constante vraag, goede fallback als de tijdsgebonden kruiden niet beschikbaar zijn.',en:'Standard herb that grows everywhere. Base ingredient for most potions. Always sellable, constant demand, good fallback when time-bound herbs are not available.'},tag:'material'},
    {icon:'☠',name:{nl:'Void-Tainted Herb',en:'Void-Tainted Herb'},desc:{nl:'Gevonden in Voidstorm-zones. Geeft debuff bij pluk zonder Void Flora boom. Ingrediënt voor Void-Infused Potions — de sterkste combat potions. Drie tot vier keer de normale kruidprijs.',en:'Found in Voidstorm zones. Gives debuff when picking without Void Flora tree. Ingredient for Void-Infused Potions — the strongest combat potions. Three to four times the normal herb price.'},tag:'material'},
    {icon:'🌱',name:{nl:'Potent Seed (bijvangst)',en:'Potent Seed (bycatch)'},desc:{nl:'Valt mee bij het plukken. Gebruik in je Housing-tuin om kruiden te verbouwen zonder te hoeven farmen. Passief inkomen. Overschot verkopen op AH aan Herbalists zonder Housing.',en:'Drops while picking. Use in your Housing garden to grow herbs without having to farm. Passive income. Sell surplus on AH to Herbalists without Housing.'},tag:'material'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">📦 Herbalism — gathering, geen Crafting Orders, maar de beste AH-stroom</div><div class="co-desc">Herbalism is een gathering profession zonder Crafting Orders. Maar Herbalism heeft iets wat de andere gathering professions niet hebben: <strong>de meest universele vraag van alle materialen</strong>. Iedereen gebruikt potions en flasks. Dat zijn verbruiksartikelen — elke keer dat een speler een dungeon of raid doet, gaat er een potion doorheen. Die behoefte stopt nooit.</div></div>
<div class="co-step"><div class="co-title">💰 Wat verkoopt het best — en wanneer</div><div class="co-desc">
  <strong>🥇 Moonpetal (overdag verkopen)</strong><br>
  Bloeit 's nachts → overdag schaars → hoge prijs overdag. Farm 's nachts, sla op, verkoop 's ochtends als de prijs piekt.<br><br>
  <strong>🥈 Void-Tainted Herb</strong><br>
  Gevaarlijk te plukken maar constante hoge prijs. Elke Mythic+ speler wil Void-Infused Potions. Vraag is stabiel ongeacht tijd van de dag.<br><br>
  <strong>🥉 Dawnbloom</strong><br>
  Overdag plukken, overdag laag, 's avonds voor raid-reset hoog. Sell 30 minuten voor de wekelijkse reset (dinsdag) voor piek-prijs.<br><br>
  <strong>Voidshade</strong><br>
  Meest voorkomend, laagste prijs. Verkoop in bulk of gebruik zelf als je Alchemy hebt.
</div></div>
<div class="co-step"><div class="co-title">📅 Slimste dagelijkse routine</div><div class="co-desc">
  <strong>Ochtend (na nacht-farming):</strong><br>
  → Verkoop je Moonpetal-oogst van de nacht op het AH. Prijs is op haar hoogst omdat spelers overdag spelen en de nachtkruiden schaars zijn.<br><br>
  <strong>Dag (als je overdag speelt):</strong><br>
  → Farm Dawnbloom en Voidshade. Bezoek je Housing-tuin en plant nieuwe seeds.<br><br>
  <strong>Avond (voor de raid):</strong><br>
  → Prijs van Dawnbloom stijgt omdat raiders hun flasks willen bijvullen. Goede tijd om te verkopen of snel een laatste batch te pakken.<br><br>
  <strong>Dinsdag (reset-dag):</strong><br>
  → Alle raid-reset spelers kopen nieuwe wekelijkse flasks. Hoogste demand van de week. Houd een voorraad kruiden klaar voor dit moment.
</div></div>
<div class="tip-box"><strong>💡 Beste tip voor Herbalism:</strong> Leer ook Alchemy. De synergie is ongeëvenaard — jij plukt de kruiden, jij maakt de flasks, jij verkoopt direct het eindproduct. Geen tussenpersoon. De Flask of the Void die jij van Moonpetal maakt, verkoopt voor vijf keer de waarde van de ruwe kruiden. Dat is het meest winstgevende farming-scenario in het spel.</div>`,
    en:`<div class="co-step"><div class="co-title">📦 Herbalism — gathering, no Crafting Orders, but the best AH stream</div><div class="co-desc">Herbalism has no Crafting Orders. But it has something other gathering professions do not: <strong>the most universal demand of all materials</strong>. Everyone uses potions and flasks. Those are consumables — every time a player does a dungeon or raid, potions are used. That need never stops.</div></div>
<div class="co-step"><div class="co-title">💰 What sells best — and when</div><div class="co-desc">
  <strong>🥇 Moonpetal (sell during the day)</strong> — Blooms at night → scarce during day → high daytime price. Farm at night, store, sell in the morning when price peaks.<br>
  <strong>🥈 Void-Tainted Herb</strong> — Dangerous to pick but constant high price. Every Mythic+ player wants Void-Infused Potions.<br>
  <strong>🥉 Dawnbloom</strong> — Pick during the day, sell before raid reset Tuesday evening for peak price.<br>
  <strong>Voidshade</strong> — Most common, lowest price. Sell in bulk or use yourself with Alchemy.
</div></div>
<div class="co-step"><div class="co-title">📅 Smartest daily routine</div><div class="co-desc">
  <strong>Morning:</strong> Sell Moonpetal from night farming. Price peaks because night herbs are scarce during day.<br>
  <strong>Day:</strong> Farm Dawnbloom and Voidshade. Visit Housing garden and plant new seeds.<br>
  <strong>Evening:</strong> Dawnbloom price rises as raiders want to refill flasks.<br>
  <strong>Tuesday (reset day):</strong> All reset players buy new weekly flasks. Highest demand of the week.
</div></div>
<div class="tip-box"><strong>💡 Best tip for Herbalism:</strong> Also learn Alchemy. The synergy is unmatched — you pick the herbs, you make the flasks, you sell the finished product directly. The Flask of the Void you make from Moonpetal sells for five times the value of the raw herbs. That is the most profitable farming scenario in the game.</div>`},
  method_url:'https://www.method.gg/guides/midnight-herbalism-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/herbalism-leveling-guide'
};

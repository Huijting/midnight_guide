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
      title:{nl:'📖 Herbalism KP en specialisatie in Midnight',en:'📖 Herbalism KP and specialization in Midnight'},
      desc:{
        nl:'Herbalism heeft in Midnight een ander KP-systeem dan crafting professions. Je verdient <strong>1 KP</strong> elke keer dat je een nieuw node-type voor het eerst plukt — 34 totaal (5 basis kruiden, 5 lush kruiden, 20 elementale kruiden, 4 overloads). In week 1 kun je daardoor al ~91 KP binnenhalen. Daarna verdien je ~13 KP/week via wekelijkse quest, gathering drops en een Treatise.<br><br><strong>Vier kruidentypes in Midnight:</strong> Alle vijf basis-kruiden zijn te vinden in alle zones. Elementale varianten (Lightfused, Wild, Primal, Voidbound) geven Motes als bonus bij het plukken. Overload Infused Deposit kan eens per ~12 uur worden gebruikt op infused nodes voor extra output.',
        en:'Herbalism has a different KP system in Midnight from crafting professions. You earn <strong>1 KP</strong> each time you gather a new node type for the first time — 34 total (5 base herbs, 5 lush herbs, 20 elemental herbs, 4 overloads). In week 1 you can already collect ~91 KP this way. After that ~13 KP/week via weekly quest, gathering drops and a Treatise.<br><br><strong>Herb types in Midnight:</strong> All five base herbs are found in all zones. Elemental variants (Lightfused, Wild, Primal, Voidbound) give Motes as bonus when gathering. Overload can be used once per ~12 hours on infused nodes for extra output.'},
      points:{nl:'Tip: pluk van elk nodevariant minimaal één keer — gratis 34 KP in de eerste week',en:'Tip: gather each node variant at least once — free 34 KP in the first week'}
    },
    {
      title:{nl:'🌿 Boom 1 — Plentiful Herbs · meer kruiden per pluking',en:'🌿 Tree 1 — Plentiful Herbs · more herbs per gather'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Verhoogt je skill en Finesse voor alle kruidentypes — meer output per pluking en hogere kans op Gold Quality. Sub-specs per kruid-type: meer punten in één kruid geeft jou betere yields van precies dat kruid.<br><br><strong>Wanneer investeren?</strong> Dit is je brood-en-boter boom als Herbalist. Meer skill = hogere kans op Gold Quality kruiden = hogere verkoopprijs per stapel. Investeer hier nadat je Over-LODED entry hebt gepakt.',
        en:'<strong>What does this do?</strong> Increases your skill and Finesse for all herb types — more output per gather and higher chance of Gold Quality. Sub-specs per herb type: more points in one herb gives you better yields from exactly that herb.<br><br><strong>When to invest?</strong> This is your bread-and-butter tree as a Herbalist. More skill = higher chance of Gold Quality herbs = higher sell price per stack. Invest here after getting Over-LODED entry.'},
      points:{nl:'Breed distribueren over kruid-types voor generale boost, of diep in één type voor gespecialiseerde farming',en:'Spread broadly across herb types for general boost, or deep in one type for specialized farming'}
    },
    {
      title:{nl:'⚡ Boom 2 — Over-LODED · infused nodes overloaden voor Motes',en:'⚡ Tree 2 — Over-LODED · overloading infused nodes for Motes'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Verbetert de Overload Infused Deposit ability — cooldown-reductie en meer Motes per overload. Sub-specs per elementtype: <em>Lightfused</em> (Mote of Light), <em>Wild</em> (Wild Magic motes), <em>Primal</em> (Primal Energy motes), <em>Voidbound</em> (Mote of Pure Void + portaal naar veilige locatie).<br><br><strong>Let op Voidbound:</strong> Zonder de Voidbound sub-spec teleporteert Overloaden van een Voidbound node je naar een willekeurige locatie. Pak de Voidbound sub-spec zodra je Voidstorm nodes wilt overloaden.<br><br><strong>Met 40 punten in de root:</strong> Je krijgt twee Overload-charges — je kunt er één bankieren terwijl de andere de cooldown reset.',
        en:'<strong>What does this do?</strong> Improves the Overload Infused Deposit ability — cooldown reduction and more Motes per overload. Sub-specs per element type: <em>Lightfused</em> (Mote of Light), <em>Wild</em> (Wild Magic motes), <em>Primal</em> (Primal Energy motes), <em>Voidbound</em> (Mote of Pure Void + portal to safe location).<br><br><strong>Watch out for Voidbound:</strong> Without the Voidbound sub-spec, Overloading a Voidbound node teleports you to a random location. Get the Voidbound sub-spec before Overloading Voidstorm nodes.<br><br><strong>At 40 root points:</strong> You get two Overload charges — you can bank one while the other resets the cooldown.'},
      points:{nl:'Unlock Over-LODED root eerst (zonder punten) voor cooldown-reset bij pluken — dan sub-spec kiezen',en:'Unlock Over-LODED root first (without spending points) for cooldown reset while gathering — then pick sub-spec'}
    }
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

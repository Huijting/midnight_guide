// MINING DATA — v2.3
const MINING = {
  id:'mining', icon:'⛏', cat:'gathering', accent:'#8a8a8a',
  name:{nl:'Mining',en:'Mining'},
  tier:'S',
  lore:{
    nl:'Mining is een <em>gathering profession</em> — je verzamelt grondstoffen uit de wereld in plaats van ze te maken. Specifiek: je slaat ertsen en stenen uit rotsen, kliffen en bergwanden. Die materialen zijn de basis voor <strong>Blacksmithing, Engineering en Jewelcrafting</strong> — drie van de meest gevraagde crafting professions in het spel. Mining is daarmee een van de meest stabiele geldmakers die er zijn: zolang andere spelers wapens, armor en engineering-gadgets willen, hebben ze jouw erts nodig.<br><br>Nieuw in Midnight: het Mining-systeem is flink uitgebreid met <strong>Survey Tools</strong> (spoor erts op voordat je het ziet), <strong>Explosives</strong> (meerdere nodes tegelijk opblazen voor massale oogst), en <strong>Refined Smelting</strong> (smelt je eigen erts om naar waardevolle staven die direct verkoopbaar zijn).',
    en:'Mining is a <em>gathering profession</em> — you collect raw materials from the world instead of crafting them. Specifically: you mine ores and stones from rocks, cliffs and mountain walls. Those materials are the foundation for <strong>Blacksmithing, Engineering and Jewelcrafting</strong> — three of the most in-demand crafting professions in the game. Mining is therefore one of the most stable gold-makers available: as long as other players want weapons, armor and engineering gadgets, they need your ore.<br><br>New in Midnight: the Mining system has been significantly expanded with <strong>Survey Tools</strong> (track ore before you see it), <strong>Explosives</strong> (blow up multiple nodes at once for mass harvesting), and <strong>Refined Smelting</strong> (smelt your own ore into valuable bars that sell directly).'},
  goldrating:4, userating:3,
  trainer:{
    name:'Belil',
    loc:{
      nl:'Trainer Doran Steelbrow vind je in de <strong>Craftsmen\'s Quarter</strong> van Silvermoon City — het ambachtsgebied aan de oostkant van de stad waar alle vakmannen en smeden hun werkplaatsen hebben. Zoek naar de aambeelden en smeedovens.',
      en:'Trainer Doran Steelbrow is in the <strong>Craftsmen\'s Quarter</strong> of Silvermoon City — the crafting district on the east side of the city where all craftsmen and smiths have their workshops. Look for the anvils and forges.'},
    way:'/way #2393 42.68 52.84',
    note:{
      nl:'💡 <strong>Combineer met een crafting profession:</strong> Mining werkt het best in combinatie met Blacksmithing, Engineering of Jewelcrafting. Dan verwerk je je eigen erts en heb je nooit materiaalkosten. Als je alleen Mining doet: verkoop alles op het AH, dat werkt ook prima. Staven (gesmolten erts) verkopen vaak beter dan ruwe erts omdat crafters tijd besparen.',
      en:'💡 <strong>Combine with a crafting profession:</strong> Mining works best combined with Blacksmithing, Engineering or Jewelcrafting. Then you process your own ore and never have material costs. If you only do Mining: sell everything on the AH, that works fine too. Bars (smelted ore) often sell better than raw ore because crafters save time.'}
  },
  specs:[
    {
      title:{nl:'📖 Mining KP en specialisatie in Midnight',en:'📖 Mining KP and specialization in Midnight'},
      desc:{
        nl:'Mining heeft in Midnight een ander KP-systeem. Je verdient <strong>1 KP</strong> elke keer dat je een nieuw node-type for het eerst mijnt — 25 totaal (3 basis ores, 3 rich deposits, 3 seams, 12 elementale deposits, 4 overloads). In week 1 kun je ~81 KP binnenhalen. Daarna ~13 KP/week.<br><br><strong>Alle ores in alle zones:</strong> Anders dan in vorige expansies vind je alle drie ore-types (Refulgent Copper, Umbral Tin, Brilliant Silver) in alle Midnight zones. Je hoeft niet van zone te wisselen voor een specifiek ore.<br><br><strong>Dazzling Thorium:</strong> Zeldzame drop uit alle ore-types. Wordt gebruikt in high-end gear. Geen eigen node — gewoon farmen en hopen op drops.',
        en:'Mining has a different KP system in Midnight. You earn <strong>1 KP</strong> each time you mine a new node type for the first time — 25 total (3 base ores, 3 rich deposits, 3 seams, 12 elemental deposits, 4 overloads). In week 1 you can collect ~81 KP. After that ~13 KP/week.<br><br><strong>All ores in all zones:</strong> Unlike previous expansions, all three ore types (Refulgent Copper, Umbral Tin, Brilliant Silver) are found in all Midnight zones. No need to zone-swap for a specific ore.<br><br><strong>Dazzling Thorium:</strong> Rare drop from all ore types. Used in high-end gear. No dedicated node — just farm and hope for drops.'},
      points:{nl:'Tip: mijn elk nodevariant minimaal één keer — gratis 25 KP in de eerste week',en:'Tip: mine each node variant at least once — free 25 KP in the first week'}
    },
    {
      title:{nl:'⛏ Boom 1 — Meticulous Mining · gemonteerd minen + passieve stats',en:'⛏ Tree 1 — Meticulous Mining · mounted mining + passive stats'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Bij 40 punten in de root node ontgrendel je gemonteerd minen — je kunt ore nodes opgraven terwijl je op je mount zit. Dit is de belangrijkste kwaliteits-van-leven upgrade voor Mining. Geeft ook passieve stats (Finesse, Perception) en Vigor-restore per mijning.<br><br><strong>Waarom als prioriteit?</strong> In Midnight is het veel moeilijker mobs te ontwijken dan in vorige expansies — gemonteerd minen is sneller én veiliger. Unlock dit meteen als tweede boom na Over-LODED entry.',
        en:'<strong>What does this do?</strong> At 40 root points you unlock mounted mining — you can mine ore nodes while on your mount. This is the most important quality-of-life upgrade for Mining. Also gives passive stats (Finesse, Perception) and Vigor restore per mine.<br><br><strong>Why priority?</strong> In Midnight it is much harder to avoid mobs than in previous expansions — mounted mining is faster AND safer. Unlock this immediately as second tree after Over-LODED entry.'},
      points:{nl:'40 punten = gemonteerd minen actief — eerste prioriteit na Over-LODED',en:'40 points = mounted mining active — first priority after Over-LODED'}
    },
    {
      title:{nl:'💎 Boom 2 — Plentiful Ores · meer ore per mining node',en:'💎 Tree 2 — Plentiful Ores · more ore per mining node'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Verhoogt je skill voor alle ore-types — meer Gold Quality ore per mining node. Bij 50 punten in de root krijg je +20 Mining Skill voor alle Midnight ore. Sub-specs per ore-type: meer skill voor één specifiek ore. Met voldoende punten in een specifiek ore-type krijg je ook een verhoogde Dazzling Thorium drop rate van dat ore.<br><br><strong>Strategie:</strong> Spread je punten gelijkmatig over de ores die je het meest farmt. Maxout één ore-type als Dazzling Thorium duur is op je server.',
        en:'<strong>What does this do?</strong> Increases your skill for all ore types — more Gold Quality ore per mining node. At 50 root points you get +20 Mining Skill for all Midnight ore. Sub-specs per ore type: more skill for one specific ore. With enough points in a specific ore type you also get increased Dazzling Thorium drop rate from that ore.<br><br><strong>Strategy:</strong> Spread points evenly across the ores you farm most. Max out one ore type if Dazzling Thorium is expensive on your server.'},
      points:{nl:'50 punten root → dan ore-specifieke sub-specs op basis van welk ore je het meest farmt',en:'50 points root → then ore-specific sub-specs based on which ore you farm most'}
    },
    {
      title:{nl:'⚡ Boom 3 — Over-LODED · infused deposits overloaden',en:'⚡ Tree 3 — Over-LODED · overloading infused deposits'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Verbetert de Overload Infused Deposit ability — meer Motes en cooldown-reductie per mining node. Sub-specs per elementtype: <em>Wild</em> (extra ore van Rumbling Orelings), <em>Lightfused</em> (dubbele Motes), <em>Primal</em> (extra ticks), <em>Voidbound</em> (Mote of Pure Void + portaal naar veilige locatie).<br><br><strong>WAARSCHUWING Voidbound:</strong> Overload een Voidbound deposit NIET voordat je de Voidbound sub-spec hebt. Zonder sub-spec word je geteleporteerd naar een willekeurige gevaarlijke locatie. Je guildleden zullen geen medelijden hebben.<br><br><strong>Eerste actie:</strong> Unlock Over-LODED root (zonder punten te spenderen) voor de cooldown-reset mechanic. Dan investeer je pas punten als je weet welke elementale zone je het meest wilt farmen.',
        en:'<strong>What does this do?</strong> Improves the Overload Infused Deposit ability — more Motes and cooldown reduction per mining node. Sub-specs per element type: <em>Wild</em> (extra ore from Rumbling Orelings), <em>Lightfused</em> (double Motes), <em>Primal</em> (extra ticks), <em>Voidbound</em> (Mote of Pure Void + portal to safe location).<br><br><strong>WARNING Voidbound:</strong> Do NOT Overload a Voidbound deposit before you have the Voidbound sub-spec. Without sub-spec you are teleported to a random dangerous location. Your guildmates will have no sympathy.<br><br><strong>First action:</strong> Unlock Over-LODED root (without spending points) for the cooldown reset mechanic. Then invest points once you know which elemental zone you want to farm most.'},
      points:{nl:'Unlock root ZONDER punten eerst → kies sub-spec op basis van favoriete elementale zone',en:'Unlock root WITHOUT points first → pick sub-spec based on favorite elemental zone'}
    }
  ],
  items:[
    {icon:'🪨',name:{nl:'Void-Iron Ore',en:'Void-Iron Ore'},desc:{nl:'Het meest voorkomende Mining-materiaal in Midnight. Valt van bijna alle standaard nodes. Basisingrediënt voor Blacksmithing en Engineering. Altijd verkoopbaar, stabiele vraag.',en:'The most common Mining material in Midnight. Drops from almost all standard nodes. Base ingredient for Blacksmithing and Engineering. Always sellable, stable demand.'},tag:'material'},
    {icon:'💎',name:{nl:'Void-Iron Bar (gesmolten)',en:'Void-Iron Bar (smelted)'},desc:{nl:'Gesmolten versie van Void-Iron Ore. Verkoop dit in plaats van ruwe erts — crafters betalen meer voor het gemak. Maak je zelf met de smidse in elke grote stad.',en:'Smelted version of Void-Iron Ore. Sell this instead of raw ore — crafters pay more for the convenience. Make it yourself at the forge in any major city.'},tag:'material'},
    {icon:'⭐',name:{nl:'Primal Earth',en:'Primal Earth'},desc:{nl:'Het zeldzaamste Mining-materiaal. Valt zelden uit normale nodes, maar consistent uit Hidden Vaults (gevonden met Survey Tools). Gevraagd voor de beste BS/Engineering crafts. Altijd hoge AH-prijs.',en:'The rarest Mining material. Rarely drops from normal nodes, but consistently from Hidden Vaults (found with Survey Tools). Needed for the best BS/Engineering crafts. Always high AH price.'},tag:'material'},
    {icon:'🔮',name:{nl:'Void-Touched Ore',en:'Void-Touched Ore'},desc:{nl:'Zeldzamere erts gevonden in specifieke Void-zones. Nodig voor de beste engineering en magische smeedrecepten. Aanmerkelijk meer waard dan gewoon Void-Iron. Goede prijs op AH.',en:'Rarer ore found in specific Void zones. Needed for the best engineering and magical smithing recipes. Considerably more valuable than normal Void-Iron. Good price on AH.'},tag:'material'},
    {icon:'💍',name:{nl:'Rough Gems (bijvangst)',en:'Rough Gems (bycatch)'},desc:{nl:'Vallen soms mee als je erts minet — bijvangst. Juwelier (Jewelcrafting) heeft ze nodig om sieraden te maken. Kleine extra inkomstenstroom zonder extra moeite. Altijd de moeite waard om op te rapen.',en:'Sometimes drop when you mine ore — bycatch. Jewelcrafting needs them to make jewelry. Small extra income stream without extra effort. Always worth picking up.'},tag:'material'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">📦 Mining heeft geen Crafting Orders — maar wel een slimme verkoopstrategie</div><div class="co-desc">Net als Skinning is Mining een gathering profession — je maakt niets, dus er zijn geen Crafting Orders. Wat je wél hebt is het <strong>Auction House</strong> en directe verkoop aan spelers.<br><br>Het verschil met Skinning: Mining-materialen hebben een directe keten naar drie grote crafting professions tegelijk (Blacksmithing, Engineering, Jewelcrafting). Dat is een enorme klantenkring. Bijna elk type speler — tanks, DPS, healers — gebruikt gear van één van deze professions.</div></div>
<div class="co-step"><div class="co-title">💰 Ruwe erts vs staven vs bars — wat verkoopt het best?</div><div class="co-desc">
  <strong>🥇 Primal Earth</strong><br>
  Zeldzaamst, gevonden met Survey Tools in Hidden Vaults. Crafters hebben het nodig voor Epic gear en topenchants. Nooit genoeg van op de markt. Stabiel hoge prijs.<br><br>
  <strong>🥈 Reinforced Void-Iron Bar</strong><br>
  Verwerkt erts, twee stappen boven ruwe ore. Blacksmiths kopen het liefst dit — het bespaart hen smelttijd. Prijs is significant hoger per ore-equivalent.<br><br>
  <strong>🥉 Void-Iron Bar (normaal)</strong><br>
  Één stap boven ruwe ore. Goede prijs, altijd gevraagd. Maak dit als je Refined Smelting niet hebt.<br><br>
  <strong>Void-Iron Ore (rauw)</strong><br>
  Laagste prijs per stuk maar je hebt er de meeste van. Dump hier grote hoeveelheden van die je niet kunt omzetten.
</div></div>
<div class="co-step"><div class="co-title">📅 Dagelijkse routine — maximale opbrengst</div><div class="co-desc">
  <strong>1. Rij je vaste route</strong><br>
  Zones in Midnight hebben vaste node-locaties. Leer de route door een zone — elke zone heeft 15 tot 30 vaste plekken waar nodes respawnen. Een volledige route duurt 10 tot 15 minuten en levert consistent erts op.<br><br>
  <strong>2. Survey Tool gebruiken (als je dat hebt)</strong><br>
  Gebruik je Survey Tool aan het begin van elke run. Hij wijst je richting de zeldzame Primal nodes en Hidden Vaults. Die bezoek je als eerste — die geven veruit de beste materialen.<br><br>
  <strong>3. Smelt aan het einde van de run</strong><br>
  Ga naar de smidse in Silvermoon, smelt al je ruwe erts naar staven. Dan naar het AH. Staven instellen als ≥1 stackgrootte — kleine stacks van 5 verkopen sneller dan grote stacks van 200 voor crafters die snel iets nodig hebben.
</div></div>
<div class="tip-box"><strong>💡 Beste tip voor Mining:</strong> Koop een snelle vlieger of mount als je dat nog niet hebt. Mining is de profession waarbij movement speed het meest uitmaakt. Een 10% snellere mount betekent letterlijk 10% meer erts per uur, elke dag. De investering verdient zichzelf in twee dagen farming terug.</div>`,
    en:`<div class="co-step"><div class="co-title">📦 Mining has no Crafting Orders — but has a smart selling strategy</div><div class="co-desc">Like Skinning, Mining is a gathering profession — you craft nothing, so there are no Crafting Orders. What you do have is the <strong>Auction House</strong> and direct sales to players.<br><br>The difference from Skinning: Mining materials have a direct chain to three major crafting professions at once (Blacksmithing, Engineering, Jewelcrafting). That is a huge customer base. Almost every type of player — tanks, DPS, healers — uses gear from one of these professions.</div></div>
<div class="co-step"><div class="co-title">💰 Raw ore vs bars — what sells best?</div><div class="co-desc">
  <strong>🥇 Primal Earth</strong> — Rarest, found with Survey Tools. Crafters need it for Epic gear. Stably high price.<br>
  <strong>🥈 Reinforced Void-Iron Bar</strong> — Processed ore, two steps above raw. Blacksmiths prefer buying this. Price significantly higher per ore-equivalent.<br>
  <strong>🥉 Void-Iron Bar</strong> — One step above raw ore. Good price, always in demand.<br>
  <strong>Void-Iron Ore (raw)</strong> — Lowest price per piece but you have the most of it.
</div></div>
<div class="co-step"><div class="co-title">📅 Daily routine — maximum yield</div><div class="co-desc">
  <strong>1. Run your fixed route</strong> — Zones have fixed node locations. Learn the route through a zone — 10-15 minutes per full route, consistent ore.<br>
  <strong>2. Use Survey Tool</strong> — Points you toward rare Primal nodes and Hidden Vaults. Visit those first.<br>
  <strong>3. Smelt at the end of the run</strong> — Go to the forge, smelt all raw ore into bars, then to the AH. Small stacks of 5 sell faster than large stacks of 200.
</div></div>
<div class="tip-box"><strong>💡 Best tip for Mining:</strong> Get a fast flying mount if you do not have one. Mining is the profession where movement speed matters most. A 10% faster mount means literally 10% more ore per hour, every day.</div>`},
  method_url:'https://www.method.gg/guides/midnight-mining-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/mining-leveling-guide'
};

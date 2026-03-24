// FISHING DATA — v2.3
const FISHING = {
  id:'fishing', icon:'🎣', cat:'secondary', accent:'#3498db',
  name:{nl:'Fishing',en:'Fishing'},
  tier:'C',
  lore:{
    nl:'Fishing is een <em>secondary profession</em> — net als Cooking kost het geen van je twee primaire profession-slots. Je vist vissen en andere schatten op uit meren, rivieren, zeeën en speciale "schoolen" (dichte zwermen vissen zichtbaar op de wateroppervlakte). Vissen worden gebruikt in Cooking, maar zijn ook verkoopbaar als grondstoffen en bevatten soms waardevolle verborgen schatten.<br><br>Fishing is in WoW traditioneel ook een ontspanningsprofession — veel spelers vissen als ze even pauze willen van actieve content. Je kunt gewoon zitten, vissen, en luisteren naar de omgevingsgeluiden. Nieuw in Midnight: <strong>Void Pools</strong> in Voidstorm-zones met unieke vissen en zeldzame schatten.',
    en:'Fishing is a <em>secondary profession</em> — like Cooking it uses none of your two primary profession slots. You fish for fish and other treasures from lakes, rivers, seas and special "schools" (dense fish swarms visible on the water surface). Fish are used in Cooking, but are also sellable as raw materials and sometimes contain valuable hidden treasures.<br><br>Fishing is traditionally also a relaxation profession in WoW — many players fish when they want a break from active content. You can just sit, fish, and listen to the ambient sounds. New in Midnight: <strong>Void Pools</strong> in Voidstorm zones with unique fish and rare treasures.'},
  goldrating:2, userating:3,
  trainer:{
    name:'Marlo Deepcast',
    loc:{
      nl:'Trainer Marlo Deepcast zit aan de kade bij het <strong>Silvermoon Harbor</strong> — het kleine haventje aan de zuidkant van de stad waar de boten liggen. Hij is een relaxte elf met een brede strohoed en een krat vol hengeluitrusting.',
      en:'Trainer Marlo Deepcast sits at the quay by <strong>Silvermoon Harbor</strong> — the small harbor on the south side of the city where the boats are moored. He is a relaxed elf with a wide straw hat and a crate full of fishing gear.'},
    way:'/way #2393 44.69 60.49',
    note:{
      nl:'💡 <strong>Fishing + Cooking = perfecte combinatie:</strong> Vissen zijn de hoofdingrediënten voor de beste Cooking-gerechten. Als je beide secondary professions hebt, vis je je eigen grondstoffen en cook je zelf je maaltijden. Nul materiaalkosten voor Cooking.',
      en:'💡 <strong>Fishing + Cooking = perfect combination:</strong> Fish are the main ingredients for the best Cooking dishes. If you have both secondary professions, you fish your own raw materials and cook your own meals. Zero material costs for Cooking.'}
  },
  specs:[
    {
      title:{nl:'📖 Fishing heeft geen specialisaties — zo maak je er het beste van',en:'📖 Fishing has no specialization tree — make the most of it'},
      desc:{
        nl:'Fishing lijkt simpel maar heeft drie inkomstenlagen:<br><br><strong>Laag 1 — Vissen voor Cooking:</strong> Vis Midnight Silversail en Void-Touched Catfish voor de beste Combat Food-recepten. Als je Cooking hebt, gebruik je ze zelf. Anders verkoop je ze op het AH aan Cooks.<br><br><strong>Laag 2 — Fishing Treasures:</strong> Elke vis die je optrekt heeft een kleine kans een extra item in de buit te hebben. Dit kunnen zeldzame aquatische huisdieren zijn, Housing-decoraties (aquaria, hengels), oude munten, of zelfs paarse items. Een goede dag vissen kan verrassend winstgevend zijn door die bijvangst.<br><br><strong>Laag 3 — Void Pools (nieuw):</strong> In Voidstorm-zones zijn Void Pools — paarse, etherische waterpassen die zichtbaar zijn voor vissers met voldoende skill. Ze bevatten unieke vissen die Alchemists nodig hebben voor Void-Infused Potions én zeldzame items die nergens anders te vinden zijn.<br><br>KP verdelen vanaf <strong>Fishing skill 25</strong>.',
        en:'Fishing seems simple but has three income layers:<br><br><strong>Layer 1 — Fish for Cooking:</strong> Fish Midnight Silversail and Void-Touched Catfish for the best Combat Food recipes. If you have Cooking, use them yourself. Otherwise sell on AH to Cooks.<br><br><strong>Layer 2 — Fishing Treasures:</strong> Every fish you catch has a small chance of an extra item. These can be rare aquatic pets, Housing decorations (aquariums, fishing rods), old coins, or even purple items.<br><br><strong>Layer 3 — Void Pools (new):</strong> In Voidstorm zones are Void Pools — purple, ethereal water surfaces visible to fishers with sufficient skill. They contain unique fish Alchemists need AND rare items found nowhere else.<br><br>Spend KP from <strong>Fishing skill 25</strong>.'},
      points:{nl:'Tip: vis altijd in Schools (gele stippen op wateroppervlak) — die geven het meeste en beste vis',en:'Tip: always fish in Schools (yellow dots on the water surface) — they give the most and best fish'}
    },
    {
      title:{nl:'🐟 Categorie 1 — Wat te vissen · de beste spots per zone',en:'🐟 Category 1 — What to fish · best spots per zone'},
      desc:{
        nl:'<strong>Wat doet het?</strong> Je vist sneller (kortere tijd tot beet), krijgt meer vissen per trek, hogere kans op zeldzame bijvangst, en ontgrendelt toegang tot Water Schools die niet zichtbaar zijn voor lagere-skill vissers.<br><br><strong>Fishing Pools:</strong> Grote wateroppervlakken vol vis. Visible als gele stippen op je minimap. Master Angler verhoogt hoe snel je ze leeg vist en hoe snel ze respawnen voor jou.<br><br><strong>School-typen in Midnight:</strong><br>• <em>Silverfin Schools</em> — gewone vissen voor Cooking<br>• <em>Void Swarms</em> — zeldzame Void-vissen voor Alchemy<br>• <em>Ancient Ruins Pools</em> — hoge kans op treasure-items',
        en:'<strong>What does it do?</strong> You fish faster (shorter time until bite), get more fish per catch, higher chance of rare bycatch, and unlock access to Water Schools not visible to lower-skill fishers.<br><br><strong>School types in Midnight:</strong><br>• <em>Silverfin Schools</em> — normal fish for Cooking<br>• <em>Void Swarms</em> — rare Void fish for Alchemy<br>• <em>Ancient Ruins Pools</em> — high chance of treasure items'},
      points:{nl:'25 punten — het meest tijdefficiënte als je actief wilt vissen',en:'25 points — most time-efficient if you want to actively fish'}
    },
    {
      title:{nl:'💰 Categorie 2 — Hoe geld te verdienen · vis en cooking',en:'💰 Category 2 — How to make gold · fish and cooking'},
      desc:{
        nl:'<strong>Wat zijn Void Pools?</strong> Bijzondere visplekken die alleen zichtbaar zijn voor vissers met Void Pool Mastery. Ze liggen in Voidstorm-zones — gevaarlijker, maar de opbrengst is uniek.<br><br><strong>Void-Touched Fish:</strong> Alleen te vangen in Void Pools. Alchemists hebben ze nodig voor Void-Infused Potions — de duurste combat potions. De vraag is altijd hoog, het aanbod laag. Goed goud per vis.<br><br><strong>Void Treasure Chests:</strong> Kleine kans bij elke Void Pool-vis dat je een onderwaterschat optrekt. Die kunnen bevatten: zeldzame aquatische pets (honderden tot duizenden goud bij collectors), Housing-items, en soms paarse gear.',
        en:'<strong>What are Void Pools?</strong> Special fishing spots only visible to fishers with Void Pool Mastery. Located in Voidstorm zones — more dangerous, but the yield is unique.<br><br><strong>Void-Touched Fish:</strong> Only catchable in Void Pools. Alchemists need them for Void-Infused Potions — the most expensive combat potions. Demand always high, supply low. Good gold per fish.<br><br><strong>Void Treasure Chests:</strong> Small chance with every Void Pool fish of pulling up an underwater treasure. These can contain rare aquatic pets, Housing items, and sometimes purple gear.'},
      points:{nl:'20 punten — ontgrendel dit als je de gevaarlijkere zones kunt bereiken',en:'20 points — unlock this once you can reach the more dangerous zones'}
    }
  ],
  items:[
    {icon:'🐟',name:{nl:'Midnight Silversail',en:'Midnight Silversail'},desc:{nl:'Beste vis voor Combat Food. Verkoopt goed aan Cooks die niet willen vissen. Altijd vraag omdat Combat Food verbruiksartikel is.',en:'Best fish for Combat Food. Sells well to Cooks who do not want to fish. Always demand because Combat Food is a consumable.'},tag:'material'},
    {icon:'🌀',name:{nl:'Void-Touched Catfish',en:'Void-Touched Catfish'},desc:{nl:'Alleen te vangen in Void Pools. Ingrediënt voor Void-Infused Potions. Hoge prijs, constante vraag van Alchemists.',en:'Only catchable in Void Pools. Ingredient for Void-Infused Potions. High price, constant demand from Alchemists.'},tag:'material'},
    {icon:'🐠',name:{nl:'Aquatische Huisdieren (bijvangst)',en:'Aquatic Pets (bycatch)'},desc:{nl:'Zeldzame bijvangst bij het vissen. Verzamelaars betalen honderden tot duizenden goud voor zeldzame aquatische pets. Nooit te voorspellen maar altijd leuk.',en:'Rare bycatch while fishing. Collectors pay hundreds to thousands of gold for rare aquatic pets. Never predictable but always exciting.'},tag:'cosmetic'},
    {icon:'🏠',name:{nl:'Aquarium (Housing-decoratie)',en:'Aquarium (Housing decoration)'},desc:{nl:'Speciaal Housing-item dat je via Fishing kunt opvissen. Een functioneel aquarium in je huis met kleine vissen die rondzwemmen. Gewild bij Housing-enthousiaste spelers.',en:'Special Housing item obtainable via Fishing. A functional aquarium in your home with small fish swimming around. Popular among Housing enthusiasts.'},tag:'utility'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">📦 Fishing — de ontspanning met bonus-inkomen</div><div class="co-desc">Fishing is geen grote goudmaker, maar het is ook de minst stressvolle activiteit in het spel. Je zit, je werpt, je wacht. Ondertussen:<br><br>• Verkoop Void-Touched Catfish op het AH → hoge prijs per vis<br>• Verkoop normale vissen aan Cooks → constante vraag<br>• Houd bij welke aquatische pets je hebt gevangen — zeldzame exemplaren verkopen voor veel goud</div></div>
<div class="co-step"><div class="co-title">⭐ Fishing + Cooking = de ultieme secondary combo</div><div class="co-desc">
  Als je beide secondary professions hebt:<br>
  → Vis je eigen ingrediënten → je hebt nooit materiaalkosten voor Cooking<br>
  → Overschot verkoop je op het AH aan andere Cooks<br>
  → Feasts maak je gratis → verkoop aan raids voor 200-400 goud per stuk<br>
  → Void-Touched Catfish → direct verkoopbaar óf verwerken in Void-Infused Cooking<br><br>
  De combinatie geeft je een volledig zelfvoorzienende secondary profession-setup.
</div></div>
<div class="tip-box"><strong>💡 Beste tip voor Fishing:</strong> Vis tijdens andere activiteiten. Sommige spelers vissen terwijl ze een video kijken, terwijl ze op raids wachten, of tussen dungeon-runs door. Het is de enige profession waarbij je de computer naast je kunt laten terwijl je iets anders doet. Niet efficient per uur, maar gratis over de dag gemeten.</div>`,
    en:`<div class="co-step"><div class="co-title">📦 Fishing — relaxation with bonus income</div><div class="co-desc">Fishing is not a big gold-maker but is the least stressful activity in the game. Sit, cast, wait. Meanwhile:<br><br>• Sell Void-Touched Catfish on AH → high price per fish<br>• Sell normal fish to Cooks → constant demand<br>• Track which aquatic pets you have caught — rare ones sell for a lot of gold</div></div>
<div class="co-step"><div class="co-title">⭐ Fishing + Cooking = ultimate secondary combo</div><div class="co-desc">
  With both secondary professions:<br>
  → Fish your own ingredients → never material costs for Cooking<br>
  → Surplus sell on AH to other Cooks<br>
  → Make Feasts for free → sell to raids for 200-400 gold each<br>
  → Void-Touched Catfish → sell directly OR process in Void-Infused Cooking
</div></div>
<div class="tip-box"><strong>💡 Best tip for Fishing:</strong> Fish during other activities. Some players fish while watching a video, waiting for raids, or between dungeon runs. It is the only profession where you can leave the computer beside you while doing something else.</div>`},
  method_url:'https://www.method.gg/guides/midnight-fishing-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/fishing-leveling-guide'
};

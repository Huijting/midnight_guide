// JEWELCRAFTING DATA — v2.3
const JEWELCRAFTING = {
  id:'jewelcrafting', icon:'💎', cat:'crafting', accent:'#1abc9c',
  name:{nl:'Jewelcrafting',en:'Jewelcrafting'},
  tier:'A',
  lore:{
    nl:'Jewelcrafting is een <em>crafting profession</em> waarbij je ruwe edelstenen slijpt tot geslepen edelstenen, en die edelstenen verwerkt in sieraden (ringen en halskettingen). Edelstenen worden gesocket in gear-slots — kleine bonussen die je statistieken per stuk gear verhogen. Elke speler met gear-sockets wil ze gevuld.<br><br>Nieuw in Midnight: <strong>Void Gems</strong> (speciale paarse stenen met unieke void-effecten), het <strong>Prismatic Socket</strong>-systeem (één kleur gem past in alle sockettypes), en <strong>Jewelry Crafting Orders</strong> voor Epic ringen en kettingen die Bind on Pickup zijn.',
    en:'Jewelcrafting is a <em>crafting profession</em> where you cut raw gems into polished gems, and set those gems in jewelry (rings and necklaces). Gems are socketed into gear slots — small bonuses that increase your stats per piece of gear. Every player with gear sockets wants them filled.<br><br>New in Midnight: <strong>Void Gems</strong> (special purple stones with unique void effects), the <strong>Prismatic Socket</strong> system (one color gem fits all socket types), and <strong>Jewelry Crafting Orders</strong> for Epic rings and necklaces that are Bind on Pickup.'},
  goldrating:4, userating:4,
  trainer:{
    name:'Amin',
    loc:{
      nl:'Trainer Lariel Gemshaper staat in de <strong>Gem District</strong> van Silvermoon City — een klein maar glinsterende winkelsstraat vol juweliersatelier in het westelijke deel van de stad. Het is makkelijk te vinden: de etalages glinsteren van alle kleurrijke stenen.',
      en:'Trainer Lariel Gemshaper is in the <strong>Gem District</strong> of Silvermoon City — a small but glittering shopping street full of jewelry workshops in the western part of the city. Easy to find: the shop windows glitter with colorful stones.'},
    way:'/way #2393 48.13 55.00',
    note:{
      nl:'💡 <strong>Combineer met Mining:</strong> Jewelcrafting heeft Rough Gems nodig die vallen als bijvangst bij Mining. Met Mining verzamel je automatisch al je gematerialen tijdens het ertsfarmen. Twee professions tegelijk bedienen — ideale synergiecombinatie.',
      en:'💡 <strong>Combine with Mining:</strong> Jewelcrafting needs Rough Gems that drop as bycatch from Mining. With Mining you automatically collect all your gem materials while ore farming. Serving two professions at once — ideal synergy combination.'}
  },
  specs:[
    {
      title:{nl:'📖 Hoe werken gems en sockets?',en:'📖 How do gems and sockets work?'},
      desc:{
        nl:'Veel stukken gear in Midnight hebben één of meer <strong>socket-slots</strong> — kleine gaten waarin je een geslepen edelsteen kunt plaatsen. Die edelsteen geeft een permanente bonus zolang je dat stuk gear draagt.<br><br>Voorbeeldgems:<br>• <em>Vivid Void Gem</em> → +180 Critical Strike<br>• <em>Serene Moonstone</em> → +180 Mastery<br>• <em>Precise Dawnstone</em> → +180 Haste<br><br><strong>Het Prismatic Socket-systeem (nieuw in Midnight):</strong> In eerdere expansies moest een rode gem in een rode socket, blauwe gem in blauw. In Midnight past elke gem in elke socket dankzij het Prismatic systeem. Dat maakt het simpeler voor spelers — en minder soorten gems om bij te houden als Jeweler.<br><br>KP verdelen vanaf <strong>JC skill 25</strong>.',
        en:'Many pieces of gear in Midnight have one or more <strong>socket slots</strong> — small holes where you can place a cut gem. That gem gives a permanent bonus as long as you wear that piece of gear.<br><br>Example gems:<br>• <em>Vivid Void Gem</em> → +180 Critical Strike<br>• <em>Serene Moonstone</em> → +180 Mastery<br>• <em>Precise Dawnstone</em> → +180 Haste<br><br><strong>The Prismatic Socket system (new in Midnight):</strong> Every gem fits every socket thanks to the Prismatic system. Simpler for players — and fewer gem types to track as a Jeweler.<br><br>Spend KP from <strong>JC skill 25</strong>.'},
      points:{nl:'Tip: maak altijd de meest populaire gem-types op voorraad — haste en crit zijn altijd gevraagd',en:'Tip: always stock the most popular gem types — haste and crit are always in demand'}
    },
    {
      title:{nl:'💎 Boom 1 — Glamorous Gems · alle gemsneden en prisms',en:'💎 Tree 1 — Glamorous Gems · all gem cuts and prisms'},
      desc:{
        nl:'<strong>Wat doet het?</strong> Je slijpt ruwe gems sneller en met hogere kans op een <em>Perfect Cut</em> — een edelsteen van hogere kwaliteit die meer stats geeft. Perfect Cuts verkopen voor twee tot drie keer de prijs van een normale geslepen gem.<br><br><strong>Waarom eerste?</strong> Geslepen edelstenen zijn het meest verkochte Jewelcrafting-product. Elke gear-upgrade resulteert in nieuwe gem-behoeftes. Perfect Cuts zijn de premium versie en creëren een eigen marktsegment.<br><br><strong>Proc-systeem:</strong> Hoe meer KP in deze boom, hoe hoger de kans op een Perfect Cut. Bij maximale rang is de kans 25% — één van de vier gems is een Perfect Cut.',
        en:'<strong>What does it do?</strong> You cut raw gems faster and with higher chance of a <em>Perfect Cut</em> — a higher quality gem giving more stats. Perfect Cuts sell for two to three times the price of a normal cut gem.<br><br><strong>Why first?</strong> Cut gems are the most sold Jewelcrafting product. Every gear upgrade results in new gem needs. Perfect Cuts are the premium version and create their own market segment.<br><br><strong>Proc system:</strong> More KP = higher chance of Perfect Cut. At maximum rank the chance is 25% — one in four gems is a Perfect Cut.'},
      points:{nl:'30 punten — begin hier, universele markt',en:'30 points — start here, universal market'}
    },
    {
      title:{nl:'💍 Boom 2 — Alluring Accessories · ringen, kettingen en profession accessories',en:'💍 Tree 2 — Alluring Accessories · rings, necklaces and profession accessories'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Epic ringen en halskettingen voor alle klassen — twee van de meest gevraagde gear-slots. Ringen en kettingen zijn Bind on Pickup in Epic versie, dus spelers kunnen ze niet kopen op het AH. Ze moeten een Crafting Order plaatsen bij jou.<br><br><strong>Waarom ringen en kettingen speciaal zijn:</strong> Elke speler heeft twee ring-slots en één ketting-slot. Dat zijn drie pieces of gear die alleen via Jewelcrafting beschikbaar zijn in Epic-kwaliteit. Geen andere profession maakt ze. Je bent de enige aanbieder.<br><br><strong>Void Gems in sieraden:</strong> Je kunt Void Gems insocketen in de sieraden die je maakt — waardoor ze zelfs meer waard worden. Een ring met Void Gem erin verkopen als pakket.',
        en:'<strong>What does this make?</strong> Epic rings and necklaces for all classes — two of the most in-demand gear slots. Epic rings and necklaces are Bind on Pickup, so players cannot buy them on the AH. They must place a Crafting Order with you.<br><br><strong>Why rings and necklaces are special:</strong> Every player has two ring slots and one necklace slot. Those are three pieces of gear only available in Epic quality through Jewelcrafting. No other profession makes them. You are the sole supplier.<br><br><strong>Void Gems in jewelry:</strong> You can socket Void Gems into the jewelry you make — making it even more valuable. Sell a ring with a Void Gem already inside as a package.'},
      points:{nl:'25 punten — exclusieve markt, geen andere profession maakt Epic sieraden',en:'25 points — exclusive market, no other profession makes Epic jewelry'}
    },
    {
      title:{nl:'⚙ Boom 3 — Proficient Processor · prospecting, crushing en reagenten',en:'⚙ Tree 3 — Proficient Processor · prospecting, crushing and reagents'},
      desc:{
        nl:'<strong>Wat zijn Void Gems?</strong> Speciale edelstenen die gevonden worden in Voidstorm-zones — paars-zwart van kleur, met een zwakke gloedpuls. Ze geven geen standaard stat-bonus maar een <em>Void Effect</em>: een kans op een extra burst van Void-schade of Void-healing bij elke aanval.<br><br><strong>Waarom premium?</strong> Void Gems zijn zeldzamer dan normale gems (gevonden in gevaarlijke zones) en geven een uniek effect. Spelers die Mythic+ of Mythic Raiden betaalt betalen meer voor die extra burst-kans.<br><br><strong>Wat doet de boom?</strong> Je kunt Void Gems slijpen met betere kwaliteit, je kunt ze insocketen in Epic sieraden als premium-optie, en je ontgrendelt het craften van <em>Void Crystal Pendants</em> — kettingen met een ingebouwde Void Gem die niet vervangbaar is.',
        en:'<strong>What are Void Gems?</strong> Special gems found in Voidstorm zones — purple-black in color, with a faint glow pulse. They do not give a standard stat bonus but a <em>Void Effect</em>: a chance of an extra burst of Void damage or Void healing with every attack.<br><br><strong>Why premium?</strong> Void Gems are rarer than normal gems (found in dangerous zones) and give a unique effect. Players doing Mythic+ or Mythic Raiding pay more for that extra burst chance.<br><br><strong>What does the tree do?</strong> You can cut Void Gems with better quality, socket them in Epic jewelry as a premium option, and unlock crafting <em>Void Crystal Pendants</em> — necklaces with a built-in Void Gem that cannot be replaced.'},
      points:{nl:'20 punten — kies dit als je de premium markt wilt bedienen',en:'20 points — choose this if you want to serve the premium market'}
    }
  ],
  items:[
    {icon:'💠',name:{nl:'Geslepen Edelstenen',en:'Cut Gems'},desc:{nl:'Het brood-en-boter product van Jewelcrafting. Elke gear-upgrade = nieuwe gem-behoefte. Maak haste en crit gems op voorraad — altijd gevraagd.',en:'The bread-and-butter product of Jewelcrafting. Every gear upgrade = new gem need. Make haste and crit gems in stock — always in demand.'},tag:'material'},
    {icon:'⭐',name:{nl:'Perfect Cut Gems (premium)',en:'Perfect Cut Gems (premium)'},desc:{nl:'25% proc-kans met maximale Gem Cutting rang. Verkoopt voor 2-3x de normale prijs. Aparte markt van spelers die alleen de beste willen.',en:'25% proc chance at maximum Gem Cutting rank. Sells for 2-3x the normal price. Separate market of players who only want the best.'},tag:'material'},
    {icon:'💍',name:{nl:'Epic Ringen (Bind on Pickup)',en:'Epic Rings (Bind on Pickup)'},desc:{nl:'Alleen via Crafting Orders. Jij bent de enige aanbieder. Twee per speler. Elke speler wil ze upgraden zodra je Epic-recepten hebt.',en:'Only via Crafting Orders. You are the sole supplier. Two per player. Every player wants to upgrade them once you have Epic recipes.'},tag:'gear'},
    {icon:'📿',name:{nl:'Epic Halskettingen (Bind on Pickup)',en:'Epic Necklaces (Bind on Pickup)'},desc:{nl:'Zelfde als ringen maar één per speler. Epic Crafting Order exclusief. Gecombineerd met ringen heb je drie exclusieve gear-slots voor heel de server.',en:'Same as rings but one per player. Epic Crafting Order exclusive. Combined with rings you cover three exclusive gear slots for the entire server.'},tag:'gear'},
    {icon:'🔮',name:{nl:'Void Crystal Pendant',en:'Void Crystal Pendant'},desc:{nl:'Ketting met ingemaakte Void Gem — niet te vervangen. Premium product voor Mythic-raiders. Uniek visueel effect. Hoge marge.',en:'Necklace with built-in Void Gem — cannot be replaced. Premium product for Mythic raiders. Unique visual effect. High margin.'},tag:'gear'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">📦 Jewelcrafting — twee verkoopstromen</div><div class="co-desc">
<strong>AH-stroom (gems):</strong> Slijp ruwe gems, zet geslepen gems op het AH. Geen koper aanwezig nodig. Passief, schaalbaar, altijd vraag.<br><br>
<strong>Crafting Order-stroom (sieraden):</strong> Epic ringen en kettingen zijn Bind on Pickup. Spelers plaatsen orders bij jou, leveren materialen, jij krijgt de fee. Exclusief — geen concurrente op het AH.
</div></div>
<div class="co-step"><div class="co-title">⭐ Gem-strategie — wat maak je wanneer</div><div class="co-desc">
  <strong>Bij launch:</strong> Iedereen upgradet gear tegelijk. Massale gem-vraag. Houd grote stocks bij — 50+ van elk populair type.<br><br>
  <strong>Na raid-reset (dinsdag):</strong> Nieuwe gear uit raids = nieuwe gems nodig. Donderdag is een goede dag om te restocken — spelers hebben tijd gehad hun nieuwe gear te equippen.<br><br>
  <strong>Perfect Cut timing:</strong> Verkoop Perfect Cuts op AH voor de dubbele prijs. Sommige spelers wachten liever een dag voor een Perfect Cut dan goedkoper normaal te kopen — maak beide soorten beschikbaar.
</div></div>
<div class="tip-box"><strong>💡 Beste tip voor Jewelcrafting:</strong> Specialiseer in de statistieken die het meest gevraagd zijn op jouw server. Haste is bijna altijd nummer 1 — de meeste klassen en specs prioriteren haste als eerste secondaire stat. Maak altijd meer haste-gems dan andere types en prijst ze licht hoger.</div>`,
    en:`<div class="co-step"><div class="co-title">📦 Jewelcrafting — two sales streams</div><div class="co-desc">
<strong>AH stream (gems):</strong> Cut raw gems, list cut gems on AH. No buyer presence needed. Passive, scalable, always in demand.<br>
<strong>Crafting Order stream (jewelry):</strong> Epic rings and necklaces are Bind on Pickup. Players place orders, provide materials, you receive the fee. Exclusive — no AH competition.
</div></div>
<div class="co-step"><div class="co-title">⭐ Gem strategy</div><div class="co-desc">
  At launch: everyone upgrades gear simultaneously. Massive gem demand. Keep large stocks — 50+ of each popular type.<br>
  After raid reset (Tuesday): new gear from raids = new gems needed.<br>
  Perfect Cut timing: sell Perfect Cuts at double price — some players wait a day for a Perfect Cut over buying normal cheaper.
</div></div>
<div class="tip-box"><strong>💡 Best tip for Jewelcrafting:</strong> Specialize in the most demanded stats on your server. Haste is almost always number one — most classes and specs prioritize haste first. Always make more haste gems than other types and price them slightly higher.</div>`},
  method_url:'https://www.method.gg/guides/midnight-jewelcrafting-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/jewelcrafting-leveling-guide'
};

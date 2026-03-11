// LEATHERWORKING DATA
const LEATHERWORKING = {
  id:'leatherworking', icon:'🧶', cat:'crafting', accent:'#8B6347',
  name:{nl:'Leatherworking',en:'Leatherworking',da:'Læderhåndværk'},
  tier:'B',
  lore:{
    nl:'Leatherworking maakt leren en mail wapenrusting voor vier klassen: Druids, Rogues, Hunters en Shamans. Dat zijn vier van de populairste klassen in WoW — dus er is altijd vraag naar je producten. De grote ster van LW zijn de Void-Touched Drums: een soort tijdelijke Bloodlust die je kunt gebruiken in elke groep. Raids resetten elke week, dus spelers kopen elke week nieuwe Drums. Combineer dit met Skinning en je hoeft nooit materialen te kopen.',
    en:'Leatherworking makes leather and mail armor for four classes: Druids, Rogues, Hunters and Shamans. Those are four of the most popular classes in WoW — so there is always demand for your products. The star of LW is the Void-Touched Drums: a sort of temporary Bloodlust you can use in any group. Raids reset every week, so players buy new Drums every week. Combine this with Skinning and you never need to buy materials.',
    da:'Leatherworking laver læder- og brynjrustning til fire klasser: Druider, Slyngler, Jægere og Shamaner. Det er fire af de mest populære klasser i WoW — så der er altid efterspørgsel efter dine produkter. Stjernen i LW er Void-Touched Trommer: en slags midlertidig Bloodlust du kan bruge i enhver gruppe. Raids nulstilles hver uge, så spillere køber nye Trommer hver uge.'
  },
  goldrating:3, userating:3,
  trainer:{
    name:'Talmar',
    loc:{
      nl:'Trainer Talmar staat in de Bazaar van Silvermoon City, aan de westkant — vlak bij het portaal naar de Timeways.',
      en:'Trainer Talmar is in the Bazaar of Silvermoon City, on the west side — right next to the portal to the Timeways.',
      da:'Træner Talmar er i Bazaar i Silvermoon City, på vestsiden — lige ved siden af portalen til Timeways.'
    },
    way:'/way Eversong Woods 43.8 51.5',
    note:{
      nl:'💡 Tip: Epic gear-recepten (de beste kwaliteit) zijn Bind on Pickup — die koop je niet in een winkel, maar die moet je zelf droppen uit raids of kopen van een reputatie-vendor. Ga raiden voor de beste recepten!',
      en:'💡 Tip: Epic gear recipes (the best quality) are Bind on Pickup — you cannot buy these in a shop, you need to drop them from raids or buy them from a reputation vendor. Go raiding for the best recipes!',
      da:'💡 Tip: Epic gear-opskrifter (den bedste kvalitet) er Bind on Pickup — du kan ikke købe dem i en butik, du skal droppe dem fra raids eller købe dem hos en omdømmesælger. Gå på raid for de bedste opskrifter!'
    }
  },
  specs:[
    {
      title:{nl:'Wat zijn specialisaties? — Lees dit eerst!',en:'What are specializations? — Read this first!',da:'Hvad er specialiseringer? — Læs dette først!'},
      desc:{
        nl:'Bij Leatherworking verdien je <strong>Kennis Punten (KP)</strong> elke keer als je iets craft. Die punten stop je in een van de vier bomen hieronder. Elke boom maakt je beter in een specifiek onderdeel van LW. Je kunt pas punten verdelen als je skill 25 hebt. Begin altijd met Leather Armor Mastery (de eerste boom) — dat geeft de meeste orders in het begin.',
        en:'In Leatherworking you earn <strong>Knowledge Points (KP)</strong> every time you craft something. You put those points into one of the four trees below. Each tree makes you better at a specific part of LW. You can only distribute points once you have skill 25. Always start with Leather Armor Mastery (the first tree) — that gives the most orders at the start.',
        da:'I Leatherworking tjener du <strong>Videnpunkter (KP)</strong> hver gang du laver noget. Disse punkter sætter du ind i et af de fire træer nedenfor. Hvert træ gør dig bedre til en specifik del af LW. Du kan først fordele punkter når du har færdighed 25. Start altid med Leather Armor Mastery (det første træ) — det giver flest ordrer i starten.'
      },
      points:{nl:'Beginners: start met Leather Armor Mastery',en:'Beginners: start with Leather Armor Mastery',da:'Begyndere: start med Leather Armor Mastery'}
    },
    {
      title:{nl:'Boom 1 — Leather Armor Mastery',en:'Tree 1 — Leather Armor Mastery',da:'Træ 1 — Leather Armor Mastery'},
      desc:{
        nl:'Hiermee kun je leren wapenrusting maken voor <strong>Druids en Rogues</strong>. Dit zijn twee van de populairste klassen in Midnight, dus er is veel vraag naar Leather gear — zeker in de eerste weken van de expansie wanneer iedereen gear nodig heeft.',
        en:'This allows you to craft leather armor for <strong>Druids and Rogues</strong>. These are two of the most popular classes in Midnight, so there is high demand for Leather gear — especially in the first weeks of the expansion when everyone needs gear.',
        da:'Dette giver dig mulighed for at lave læderrustning til <strong>Druider og Slyngler</strong>. Dette er to af de mest populære klasser i Midnight, så der er stor efterspørgsel efter Leather gear — især i de første uger af ekspansionen.'
      },
      points:{nl:'30 punten — de absolute basis, begin hier',en:'30 points — the absolute foundation, start here',da:'30 point — det absolutte fundament, start her'}
    },
    {
      title:{nl:'Boom 2 — Mail Armor Mastery',en:'Tree 2 — Mail Armor Mastery',da:'Træ 2 — Mail Armor Mastery'},
      desc:{
        nl:'Mail wapenrusting is voor <strong>Hunters en Shamans</strong>. Grote groep spelers in Midnight. Let op: nieuw in Midnight is dat leather- en mail armor nu <em>dezelfde basis-materialen</em> gebruiken — dus je hoeft geen aparte materialen te verzamelen als je beide wilt maken!',
        en:'Mail armor is for <strong>Hunters and Shamans</strong>. Large group of players in Midnight. Note: new in Midnight is that leather and mail armor now use the <em>same base materials</em> — so you don\'t need to gather separate materials if you want to craft both!',
        da:'Brynjrustning er til <strong>Jægere og Shamaner</strong>. Stor gruppe af spillere i Midnight. Bemærk: nyt i Midnight er at læder- og brynjrustning nu bruger <em>de samme basismaterialer</em> — så du behøver ikke samle separate materialer hvis du vil lave begge!'
      },
      points:{nl:'30 punten — combineer met Leather voor maximale orders',en:'30 points — combine with Leather for maximum orders',da:'30 point — kombiner med Leather for maksimale ordrer'}
    },
    {
      title:{nl:'Boom 3 — Drums & Tools (de goudmijn!)',en:'Tree 3 — Drums & Tools (the gold mine!)',da:'Træ 3 — Trommer & Redskaber (guldminen!)'},
      desc:{
        nl:'Dit is de meest lucratieve boom van LW. De <strong>Void-Touched Drums</strong> die je hier maakt, geven de hele groep een tijdelijke buff vergelijkbaar met Bloodlust/Heroism. Elke raid- en Mythic+ groep wil deze drums hebben. En omdat raids <strong>elke week resetten</strong>, kopen spelers elke week nieuwe. Stabielste goudstroom in het hele spel!',
        en:'This is the most lucrative tree in LW. The <strong>Void-Touched Drums</strong> you craft here give the whole group a temporary buff similar to Bloodlust/Heroism. Every raid and Mythic+ group wants these drums. And because raids <strong>reset every week</strong>, players buy new ones every week. Most stable gold stream in the entire game!',
        da:'Dette er det mest lukrative træ i LW. De <strong>Void-Touched Trommer</strong> du laver her, giver hele gruppen en midlertidig buff svarende til Bloodlust/Heroism. Alle raid- og Mythic+-grupper vil have disse trommer. Og fordi raids <strong>nulstilles hver uge</strong>, køber spillere nye hver uge. Den mest stabile guldstrøm i hele spillet!'
      },
      points:{nl:'20 punten — unlock dit zo snel mogelijk!',en:'20 points — unlock this as fast as possible!',da:'20 point — lås dette op så hurtigt som muligt!'}
    },
    {
      title:{nl:'Boom 4 — Spellthread Specialization',en:'Tree 4 — Spellthread Specialization',da:'Træ 4 — Trylletrådspecialisering'},
      desc:{
        nl:'Spellthreads zijn een soort enchant voor je broek. <strong>Elke caster in het spel</strong> — Mages, Warlocks, Priests, Balance Druids, etc. — wil een Spellthread op zijn broek. De recepten kom je door te raiden, maar als je ze eenmaal hebt is het een stabiele inkomstenbron gedurende de hele expansie.',
        en:'Spellthreads are a type of enchant for your legs. <strong>Every caster in the game</strong> — Mages, Warlocks, Priests, Balance Druids, etc. — wants a Spellthread on their legs. You get the recipes through raiding, but once you have them it is a stable source of income throughout the entire expansion.',
        da:'Trylletråde er en slags enchant til dine ben. <strong>Enhver caster i spillet</strong> — Mager, Heksekunstnere, Præster, Balance Druider osv. — vil have en Trylletråd på sine ben. Du får opskrifterne gennem raiding, men når du har dem er det en stabil indkomstkilde gennem hele ekspansionen.'
      },
      points:{nl:'15 punten — recepten droppen uit raids',en:'15 points — recipes drop from raids',da:'15 point — opskrifter dropper fra raids'}
    }
  ],
  items:[
    {icon:'🥁',name:{nl:'Void-Touched Drums',en:'Void-Touched Drums',da:'Void-Touched Trommer'},desc:{nl:'Het meest gevraagde LW-item. Geeft de hele groep een Bloodlust-achtige buff. Wekelijkse reset = wekelijkse verkoop. Dit is je stabielste inkomstenbron.',en:'The most requested LW item. Gives the whole group a Bloodlust-like buff. Weekly reset = weekly sales. This is your most stable income source.',da:'Det mest efterspurgte LW-genstand. Giver hele gruppen en Bloodlust-lignende buff. Ugentlig nulstilling = ugentligt salg. Dette er din mest stabile indkomstkilde.'},tag:'utility'},
    {icon:'🧵',name:{nl:'Spellthreads',en:'Spellthreads',da:'Trylletråde'},desc:{nl:'Been-enchant voor alle casters. Elk nieuw gear-stuk broek = nieuwe Spellthread nodig. Hoge prijs, constant gevraagd. Recept valt van raid-bosses.',en:'Leg enchant for all casters. Every new pair of legs = new Spellthread needed. High price, constantly in demand. Recipe drops from raid bosses.',da:'Ben-enchant til alle castere. Hvert nyt ben-gear = ny Trylletråd nødvendig. Høj pris, konstant efterspurgt. Opskrift dropper fra raid-bosser.'},tag:'consumable'},
    {icon:'🎒',name:{nl:'Leather & Mail Gear (Epic)',en:'Leather & Mail Gear (Epic)',da:'Læder- & Brynjgear (Epic)'},desc:{nl:'Epic gear is Bind on Pickup — spelers KUNNEN het niet kopen op het AH. Ze moeten het bij jou bestellen via Crafting Orders. Exclusieve markt!',en:'Epic gear is Bind on Pickup — players CANNOT buy it on the AH. They must order it from you via Crafting Orders. Exclusive market!',da:'Epic gear er Bind on Pickup — spillere KAN ikke købe det på AH. De skal bestille det hos dig via Crafting Orders. Eksklusivt marked!'},tag:'gear'},
    {icon:'🔧',name:{nl:'LW Profession Tools',en:'LW Profession Tools',da:'LW Professions-redskaber'},desc:{nl:'Gereedschap dat je skill bonus geeft bij het craften. De Epic versie geeft +30 skill op LW-crafts, wat betere kwaliteit producten oplevert.',en:'Tools that give you a skill bonus when crafting. The Epic version gives +30 skill on LW crafts, resulting in better quality products.',da:'Redskaber der giver dig en færdighedsbonus ved crafting. Epic-versionen giver +30 færdighed på LW-crafts, hvilket resulterer i bedre kvalitetsprodukter.'},tag:'utility'},
    {icon:'🏠',name:{nl:'Housing Decoraties (level 80)',en:'Housing Decorations (level 80)',da:'Housing-dekorationer (level 80)'},desc:{nl:'Op level 80 kun je leren meubels en decoraties maken voor het Housing systeem — je eigen huis in WoW. Extra inkomstenbron later in de expansie.',en:'At level 80 you can craft leather furniture and decorations for the Housing system — your own house in WoW. Extra income source later in the expansion.',da:'Ved level 80 kan du lave lædermøbler og dekorationer til Housing-systemet — dit eget hus i WoW. Ekstra indkomstkilde senere i ekspansionen.'},tag:'utility'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">📦 Hoe werken Crafting Orders?</div><div class="co-desc">Crafting Orders zijn opdrachten die andere spelers plaatsen voor items die jij kunt maken. Ze leveren de materialen aan, jij maakt het item, en jij ontvangt goud. Het werkt via de <strong>Crafting Order-tafel</strong> in Silvermoon City — zoek de tafel op en zet jezelf op de "public orders" lijst om automatisch matched te worden met opdrachten.</div></div>
<div class="co-step"><div class="co-title">⭐ De Drums strategie — elke week goud</div><div class="co-desc">De <strong>Void-Touched Drums</strong> zijn waarschijnlijk het meest stabiele goud in het hele spel voor een LW. Hier is waarom:<br><br>• Raids resetten elke week → spelers hebben elke week nieuwe Drums nodig<br>• Elke serieuze raider en Mythic+ speler wil ze<br>• Ze zijn makkelijk te maken als je de boom unlockt<br>• De prijs blijft stabiel door de wekelijkse vraag<br><br>Unlock de Drums boom zo vroeg mogelijk en zet je altijd op de public orders lijst!</div></div>
<div class="co-step"><div class="co-title">🔒 Epic gear — jouw exclusieve markt</div><div class="co-desc">Epic LW-gear is <strong>Bind on Pickup</strong>. Dat betekent: spelers kunnen het <em>niet</em> kopen op het Auction House. Ze zijn verplicht om een Crafting Order bij jou te plaatsen. Dit geeft jou exclusieve toegang tot die markt — geen concurrentie van het AH!<br><br>De recepten voor Epic gear zijn zeldzaam (uit raids), maar als je ze eenmaal hebt kun je er goed aan verdienen.</div></div>
<div class="tip-box"><strong>💡 Grootste tip:</strong> Combineer Leatherworking met Skinning. Dan hoef je nooit materialen te kopen en is elke craft pure winst. De combinatie Skinning + LW is de meest zelfvoorzienende setup in het spel!</div>`,
    en:`<div class="co-step"><div class="co-title">📦 How do Crafting Orders work?</div><div class="co-desc">Crafting Orders are commissions that other players place for items you can make. They provide the materials, you craft the item, and you receive gold. It works via the <strong>Crafting Order table</strong> in Silvermoon City — find the table and add yourself to the "public orders" list to be automatically matched with orders.</div></div>
<div class="co-step"><div class="co-title">⭐ The Drums strategy — gold every week</div><div class="co-desc">The <strong>Void-Touched Drums</strong> are probably the most stable gold in the entire game for a LW. Here is why:<br><br>• Raids reset every week → players need new Drums every week<br>• Every serious raider and Mythic+ player wants them<br>• They are easy to make once you unlock the tree<br>• The price stays stable due to weekly demand<br><br>Unlock the Drums tree as early as possible and always keep yourself on the public orders list!</div></div>
<div class="co-step"><div class="co-title">🔒 Epic gear — your exclusive market</div><div class="co-desc">Epic LW gear is <strong>Bind on Pickup</strong>. That means: players <em>cannot</em> buy it on the Auction House. They are required to place a Crafting Order with you. This gives you exclusive access to that market — no competition from the AH!<br><br>The recipes for Epic gear are rare (from raids), but once you have them you can earn well from them.</div></div>
<div class="tip-box"><strong>💡 Biggest tip:</strong> Combine Leatherworking with Skinning. Then you never need to buy materials and every craft is pure profit. The Skinning + LW combination is the most self-sufficient setup in the game!</div>`,
    da:`<div class="co-step"><div class="co-title">📦 Hvordan fungerer Crafting Orders?</div><div class="co-desc">Crafting Orders er bestillinger som andre spillere lægger for genstande du kan lave. De leverer materialerne, du laver genstanden, og du modtager guld. Det fungerer via <strong>Crafting Order-bordet</strong> i Silvermoon City — find bordet og tilføj dig selv til "public orders"-listen for automatisk at blive matchet med bestillinger.</div></div>
<div class="co-step"><div class="co-title">⭐ Trommer-strategien — guld hver uge</div><div class="co-desc">De <strong>Void-Touched Trommer</strong> er sandsynligvis det mest stabile guld i hele spillet for en LW. Her er hvorfor:<br><br>• Raids nulstilles hver uge → spillere har brug for nye Trommer hver uge<br>• Enhver seriøs raider og Mythic+-spiller vil have dem<br>• De er lette at lave når du låser træet op<br>• Prisen forbliver stabil pga. ugentlig efterspørgsel<br><br>Lås Trommer-træet op så tidligt som muligt og hold dig altid på public orders-listen!</div></div>
<div class="co-step"><div class="co-title">🔒 Epic gear — dit eksklusive marked</div><div class="co-desc">Epic LW-gear er <strong>Bind on Pickup</strong>. Det betyder: spillere <em>kan ikke</em> købe det på Auction House. De er nødt til at lægge en Crafting Order hos dig. Dette giver dig eksklusiv adgang til det marked — ingen konkurrence fra AH!<br><br>Opskrifterne til Epic gear er sjældne (fra raids), men når du har dem kan du tjene godt på dem.</div></div>
<div class="tip-box"><strong>💡 Største tip:</strong> Kombiner Leatherworking med Skinning. Så behøver du aldrig købe materialer og ethvert craft er ren profit. Skinning + LW kombinationen er den mest selvforsynende opsætning i spillet!</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-leatherworking-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/leatherworking-specialization-guide-and-builds'
};

// JEWELCRAFTING DATA — v2.3
const JEWELCRAFTING = {
  id:'jewelcrafting', icon:'💎', cat:'crafting', accent:'#1abc9c',
  name:{nl:'Jewelcrafting',en:'Jewelcrafting',da:'Smykkekunst'},
  tier:'A',
  lore:{
    nl:'Jewelcrafting is een <em>crafting profession</em> waarbij je ruwe edelstenen slijpt tot geslepen edelstenen, en die edelstenen verwerkt in sieraden (ringen en halskettingen). Edelstenen worden gesocket in gear-slots — kleine bonussen die je statistieken per stuk gear verhogen. Elke speler met gear-sockets wil ze gevuld.<br><br>Nieuw in Midnight: <strong>Void Gems</strong> (speciale paarse stenen met unieke void-effecten), het <strong>Prismatic Socket</strong>-systeem (één kleur gem past in alle sockettypes), en <strong>Jewelry Crafting Orders</strong> voor Epic ringen en kettingen die Bind on Pickup zijn.',
    en:'Jewelcrafting is a <em>crafting profession</em> where you cut raw gems into polished gems, and set those gems in jewelry (rings and necklaces). Gems are socketed into gear slots — small bonuses that increase your stats per piece of gear. Every player with gear sockets wants them filled.<br><br>New in Midnight: <strong>Void Gems</strong> (special purple stones with unique void effects), the <strong>Prismatic Socket</strong> system (one color gem fits all socket types), and <strong>Jewelry Crafting Orders</strong> for Epic rings and necklaces that are Bind on Pickup.',
    da:'Smykkekunst er en <em>craftingprofession</em> der sliber rå ædelstene til polerede ædelstene og sætter dem i smykker. Ædelstene socketes i udstyrspladser — statsbonus pr. stykke udstyr. Enhver spiller med gear-sockets vil have dem fyldt.<br><br>Nyt i Midnight: Void Gems (unikt void-effekter), Prismatic Socket-system og Crafting Orders til Epic ringe og kæder.'
  },
  goldrating:4, userating:4,
  trainer:{
    name:'Amin',
    loc:{
      nl:'Trainer Lariel Gemshaper staat in de <strong>Gem District</strong> van Silvermoon City — een klein maar glinsterende winkelsstraat vol juweliersatelier in het westelijke deel van de stad. Het is makkelijk te vinden: de etalages glinsteren van alle kleurrijke stenen.',
      en:'Trainer Lariel Gemshaper is in the <strong>Gem District</strong> of Silvermoon City — a small but glittering shopping street full of jewelry workshops in the western part of the city. Easy to find: the shop windows glitter with colorful stones.',
      da:'Træner Lariel Gemshaper er i <strong>Gem District</strong> i Silvermoon City — en lille men glitrende shoppinggade fyldt med smykkeværksteder i byens vestlige del.'
    },
    way:'/way #2393 48.13 55.00',
    note:{
      nl:'💡 <strong>Combineer met Mining:</strong> Jewelcrafting heeft Rough Gems nodig die vallen als bijvangst bij Mining. Met Mining verzamel je automatisch al je gematerialen tijdens het ertsfarmen. Twee professions tegelijk bedienen — ideale synergiecombinatie.',
      en:'💡 <strong>Combine with Mining:</strong> Jewelcrafting needs Rough Gems that drop as bycatch from Mining. With Mining you automatically collect all your gem materials while ore farming. Serving two professions at once — ideal synergy combination.',
      da:'💡 <strong>Kombiner med Minedrift:</strong> Smykkekunst bruger Rough Gems der dropper som bifangst fra Minedrift. Perfekt synergi — to professioner på én gang.'
    }
  },
  specs:[
    {
      title:{nl:'📖 De vier Jewelcrafting-specialisatietakken',en:'📖 The four Jewelcrafting specialization trees',da:'📖 De fire Smykkefremstillings-specialiseringstræer'},
      desc:{
        nl:'Jewelcrafting heeft <strong>vier specialisatietakken</strong>: <em>Glamorous Gems</em> (gems per kleur/stat: Garnet=Crit, Amethyst=Mastery, Lapis=Vers, Peridot=Haste), <em>Alluring Accessories</em> (Epic ringen, kettingen en profession accessoires), <em>Proficient Processor</em> (Prospecting en Crushing voor grondstoffen) en <em>Thoughtful Throughput</em> (crafting stats Multicraft/Resourcefulness/Ingenuity). Ontgrendeld op skill 25, 50, 60, 75.<br><br>Dag 1: ~40–50 KP. Daarna ~20 KP/week. <strong>Let op:</strong> er zijn geen extra sockets via consumables in Midnight — spelers zijn afhankelijk van sockets die op gear vallen. Gem-vraag is daardoor lager dan in TWW.',
        en:'Jewelcrafting has <strong>four specialization trees</strong>: <em>Glamorous Gems</em> (gems by color/stat: Garnet=Crit, Amethyst=Mastery, Lapis=Vers, Peridot=Haste), <em>Alluring Accessories</em> (Epic rings, necklaces and profession accessories), <em>Proficient Processor</em> (Prospecting and Crushing for materials) and <em>Thoughtful Throughput</em> (crafting stats Multicraft/Resourcefulness/Ingenuity). Unlocked at skill 25, 50, 60, 75.<br><br>Day 1: ~40–50 KP. After that ~20 KP/week. <strong>Note:</strong> no extra socket consumables in Midnight — players depend on sockets rolling on gear. Gem demand is therefore lower than in TWW.',
        da:'Smykkefremstilling har <strong>fire specialiseringstræer</strong>: <em>Glamorous Gems</em>, <em>Alluring Accessories</em>, <em>Proficient Processor</em> og <em>Thoughtful Throughput</em>. Låses op ved færdighed 25, 50, 60, 75.<br><br>Dag 1: ~40–50 KP. Ingen ekstra socket-forbrugsvarer i Midnight — gem-efterspørgsel lavere end TWW.'
      },
      points:{nl:'Tip: check BiS-lijsten voor welke gem-kleur (stat) het meest gevraagd is op jouw server',en:'Tip: check BiS lists for which gem color (stat) is most demanded on your server',da:'Tip: tjek BiS-lister for hvilken gem-farve (stat) der er mest efterspurgt på din server'}
    },
    {
      title:{nl:'💎 Boom 1 — Glamorous Gems · gems per kleur en stat',en:'💎 Tree 1 — Glamorous Gems · gems by color and stat',da:'💎 Træ 1 — Glamorous Gems · edelsten pr. farve og stat'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Gems georganiseerd per kleur: <em>Garnet</em> (rood, Critical Strike), <em>Amethyst</em> (paars, Mastery), <em>Lapis</em> (blauw, Versatility) en <em>Peridot</em> (groen, Haste). Elke kleur heeft één puur single-stat gem en drie hybride dual-stat gems, plus een gewone en een Flawless-versie.<br><br><strong>Eversong Diamonds:</strong> Epic meta-gems (Primary Stat + speciaal effect). Recepten droppen uit Midnight dungeons. Hoogste waarde per gem — maar ook het moeilijkst te verkrijgen.<br><br><strong>Welke kleur kiezen?</strong> Check Wowhead/IcyVeins BiS-lijsten voor de meest gevraagde stat op jouw server. Begin met één kleur, breid uit naar een tweede zodra je de eerste boom hebt uitgeinvesteerd.',
        en:'<strong>What does this make?</strong> Gems organized by color: <em>Garnet</em> (red, Critical Strike), <em>Amethyst</em> (purple, Mastery), <em>Lapis</em> (blue, Versatility) and <em>Peridot</em> (green, Haste). Each color has one pure single-stat gem and three hybrid dual-stat gems, plus a regular and Flawless version.<br><br><strong>Eversong Diamonds:</strong> Epic meta-gems (Primary Stat + special effect). Recipes drop from Midnight dungeons. Highest value per gem — but hardest to obtain.<br><br><strong>Which color to pick?</strong> Check Wowhead/IcyVeins BiS lists for the most demanded stat on your server. Start with one color, expand to a second once invested.',
        da:'<strong>Hvad laver dette?</strong> Edelsten pr. farve: Garnet (Crit), Amethyst (Mastery), Lapis (Vers), Peridot (Haste). Hver farve: ren single-stat + tre hybrider + Flawless-version.<br><br>Eversong Diamonds: episke meta-gems fra dungeon-drops. Højeste værdi pr. gem.'
      },
      points:{nl:'30 punten → alle sub-specs ontgrendeld → 25 punten in jouw kleur sub-spec voor alle gem-recepten',en:'30 points → all sub-specs unlocked → 25 points in your color sub-spec for all gem recipes',da:'30 point → alle under-specs låst op → 25 point i din farvens under-spec for alle gem-opskrifter'}
    },
    {
      title:{nl:'💍 Boom 2 — Alluring Accessories · ringen, kettingen en profession tools',en:'💍 Tree 2 — Alluring Accessories · rings, necklaces and profession tools',da:'💍 Træ 2 — Alluring Accessories · ringe, halskæder og professionredskaber'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Epic ringen en kettingen (altijd hoge vraag — elk karakter gebruikt ze), plus profession accessoires voor JC, Enchanting en Inscription. Sub-specs: <em>Ringed</em> (ringen), <em>Linked</em> (kettingen) en profession accessoire-specs.<br><br><strong>Jewelry is altijd gevraagd:</strong> Epic ringen en kettingen zijn best-in-slot. Elk karakter heeft 1 ketting en 2 ringen. Breed en consistent. Je kunt er zowel voor jezelf als via Crafting Orders voor anderen mee verdienen.<br><br><strong>Profession accessoires:</strong> JC/Enchanting/Inscription accessoires — idem aan Engineering tools, gevraagd door alle crafters op de server.',
        en:'<strong>What does this make?</strong> Epic rings and necklaces (always high demand — every character uses them), plus profession accessories for JC, Enchanting and Inscription. Sub-specs: <em>Ringed</em> (rings), <em>Linked</em> (necklaces) and profession accessory specs.<br><br><strong>Jewelry is always in demand:</strong> Epic rings and necklaces are best-in-slot. Every character has 1 necklace and 2 rings. Broad and consistent market.<br><br><strong>Profession accessories:</strong> JC/Enchanting/Inscription accessories — like Engineering tools, demanded by all crafters on the server.',
        da:'<strong>Hvad laver dette?</strong> Episke ringe og halskæder (altid høj efterspørgsel) plus professions-tilbehør til JC/Enchanting/Inscription.<br><br>Smykker: hvert karakter bruger 1 halskæde + 2 ringe. Bredt og konsistent marked.'
      },
      points:{nl:'30 punten root → unlock alle sub-specs → kies Ringed of Linked als eerste deep-invest',en:'30 points root → unlock all sub-specs → pick Ringed or Linked as first deep investment',da:'30 point root → alle under-specs åbnet → vælg Ringed eller Linked som første dybde-invest'}
    },
    {
      title:{nl:'⛏ Boom 3 — Proficient Processor · Prospecting en Crushing',en:'⛏ Tree 3 — Proficient Processor · Prospecting and Crushing',da:'⛏ Træ 3 — Proficient Processor · Prospecting og Crushing'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Verbetert Prospecting (5 ore → gems + reagents) en Crushing (uncut gems → Glimmering Gemdust). Sub-specs: <em>Skilled Savings</em> (Resourcefulness voor meer materialen bij procs) en verdere prospecting-nodes.<br><br><strong>Prospecting:</strong> Elk prospect geeft altijd Duskshrouded Stone en Crystalline Glass als gegarandeerde reagents, plus kans op gems. Met 30 punten in Skilled Savings en blue profession tools kun je guaranteed Gold Quality gems uit prospecting halen.<br><br><strong>Crushing:</strong> Uncommon gems → Glimmering Gemdust. Uncommon gems zijn goedkoper op het AH dan rare gems — koop ze goedkoop, crush naar Gemdust, verkoop de Gemdust. Stabiele arbitragestrategie.',
        en:'<strong>What does this do?</strong> Improves Prospecting (5 ore → gems + reagents) and Crushing (uncut gems → Glimmering Gemdust). Sub-specs: <em>Skilled Savings</em> (Resourcefulness for more materials on procs) and further prospecting nodes.<br><br><strong>Prospecting:</strong> Each prospect always gives Duskshrouded Stone and Crystalline Glass as guaranteed reagents, plus chance at gems. With 30 points in Skilled Savings and blue tools you can get guaranteed Gold Quality gems from prospecting.<br><br><strong>Crushing:</strong> Uncommon gems → Glimmering Gemdust. Buy cheap uncommon gems, crush to Gemdust, sell Gemdust. Stable arbitrage strategy.',
        da:'<strong>Hvad gør dette?</strong> Forbedrer Prospecting og Crushing. Under-spec: Skilled Savings (Resourcefulness).<br><br>Crushing: billige uncommon gems → Gemdust → sælg. Stabil arbitrage-strategi.'
      },
      points:{nl:'30 punten Skilled Savings → Resourcefulness actief op Prospecting + Crushing',en:'30 points Skilled Savings → Resourcefulness active on Prospecting + Crushing',da:'30 point Skilled Savings → Resourcefulness aktiv på Prospecting + Crushing'}
    },
    {
      title:{nl:'⚙ Boom 4 — Thoughtful Throughput · crafting stats voor alles',en:'⚙ Tree 4 — Thoughtful Throughput · crafting stats for everything',da:'⚙ Træ 4 — Thoughtful Throughput · crafting-stats til alt'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Verhoogt crafting stats — Multicraft, Ingenuity, Resourcefulness — voor <em>alle</em> JC crafts tegelijk. Sub-specs: <em>Outrageous Output</em> (Multicraft — de kernbonus voor gem-bulk-crafting) en <em>Skilled Savings</em> (Resourcefulness).<br><br><strong>Outrageous Output is prioriteit:</strong> Gems profiteren enorm van Multicraft — elke proc geeft extra gems voor dezelfde materiaalkosten. Hoe meer Multicraft, hoe minder je effectief per gem betaalt.<br><br><strong>Aanbeveling:</strong> Invest hier 5 punten als eerste (goedkoopste entry), kies Outrageous Output als sub-spec, investeer 30 punten voor maximum Multicraft. Dan pas naar Glamorous Gems voor kleur-specs.',
        en:'<strong>What does this do?</strong> Increases crafting stats — Multicraft, Ingenuity, Resourcefulness — for <em>all</em> JC crafts at once. Sub-specs: <em>Outrageous Output</em> (Multicraft — core bonus for gem bulk-crafting) and <em>Skilled Savings</em> (Resourcefulness).<br><br><strong>Outrageous Output is priority:</strong> Gems benefit enormously from Multicraft — every proc gives extra gems for the same material cost. More Multicraft means lower effective cost per gem.<br><br><strong>Recommendation:</strong> Invest 5 points here first (cheapest entry), pick Outrageous Output, invest 30 points for maximum Multicraft. Then move to Glamorous Gems for color specs.',
        da:'<strong>Hvad gør dette?</strong> Øger crafting-stats for ALLE JC-crafts. Under-specs: Outrageous Output (Multicraft) og Skilled Savings (Resourcefulness).<br><br>Outrageous Output er prioritet — Multicraft = ekstra gems gratis. Start her med 5 point → Outrageous Output → 30 point.'
      },
      points:{nl:'5 punten root → Outrageous Output sub-spec → 30 punten voor maximum Multicraft op gems',en:'5 points root → Outrageous Output sub-spec → 30 points for maximum Multicraft on gems',da:'5 point root → Outrageous Output under-spec → 30 point for maksimal Multicraft på gems'}
    }
  ],
  items:[
    {icon:'💠',name:{nl:'Geslepen Edelstenen',en:'Cut Gems',da:'Slebede Ædelstene'},desc:{nl:'Het brood-en-boter product van Jewelcrafting. Elke gear-upgrade = nieuwe gem-behoefte. Maak haste en crit gems op voorraad — altijd gevraagd.',en:'The bread-and-butter product of Jewelcrafting. Every gear upgrade = new gem need. Make haste and crit gems in stock — always in demand.',da:'Kerneproduktet. Hvert gear-opgradering = ny ædelstens-behov. Haste og crit altid efterspurgte.'},tag:'material'},
    {icon:'⭐',name:{nl:'Perfect Cut Gems (premium)',en:'Perfect Cut Gems (premium)',da:'Perfekt Slebede Ædelstene (premium)'},desc:{nl:'25% proc-kans met maximale Gem Cutting rang. Verkoopt voor 2-3x de normale prijs. Aparte markt van spelers die alleen de beste willen.',en:'25% proc chance at maximum Gem Cutting rank. Sells for 2-3x the normal price. Separate market of players who only want the best.',da:'25% proc-chance ved maksimal rang. Sælger for 2-3x normalprisen. Separat marked.'},tag:'material'},
    {icon:'💍',name:{nl:'Epic Ringen (Bind on Pickup)',en:'Epic Rings (Bind on Pickup)',da:'Epic Ringe (Bind on Pickup)'},desc:{nl:'Alleen via Crafting Orders. Jij bent de enige aanbieder. Twee per speler. Elke speler wil ze upgraden zodra je Epic-recepten hebt.',en:'Only via Crafting Orders. You are the sole supplier. Two per player. Every player wants to upgrade them once you have Epic recipes.',da:'Kun via Crafting Orders. Eneste udbyder. To pr. spiller.'},tag:'gear'},
    {icon:'📿',name:{nl:'Epic Halskettingen (Bind on Pickup)',en:'Epic Necklaces (Bind on Pickup)',da:'Epic Halskæder (Bind on Pickup)'},desc:{nl:'Zelfde als ringen maar één per speler. Epic Crafting Order exclusief. Gecombineerd met ringen heb je drie exclusieve gear-slots voor heel de server.',en:'Same as rings but one per player. Epic Crafting Order exclusive. Combined with rings you cover three exclusive gear slots for the entire server.',da:'Samme som ringe men én pr. spiller. Kombineret med ringe = tre eksklusive gear-pladser.'},tag:'gear'},
    {icon:'🔮',name:{nl:'Void Crystal Pendant',en:'Void Crystal Pendant',da:'Void Krystal Halsmykke'},desc:{nl:'Ketting met ingemaakte Void Gem — niet te vervangen. Premium product voor Mythic-raiders. Uniek visueel effect. Hoge marge.',en:'Necklace with built-in Void Gem — cannot be replaced. Premium product for Mythic raiders. Unique visual effect. High margin.',da:'Kæde med permanent Void Gem. Premium til Mythic-raidere. Unikt visuelt effekt. Høj margin.'},tag:'gear'}
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
<div class="tip-box"><strong>💡 Best tip for Jewelcrafting:</strong> Specialize in the most demanded stats on your server. Haste is almost always number one — most classes and specs prioritize haste first. Always make more haste gems than other types and price them slightly higher.</div>`,
    da:`<div class="co-step"><div class="co-title">📦 To salgsstrømme</div><div class="co-desc">
AH-strøm (ædelstene): Passiv, skalerbar, altid efterspurgt.<br>
Crafting Order-strøm (smykker): Epic ringe/kæder Bind on Pickup = eksklusivt marked.
</div></div>
<div class="co-step"><div class="co-title">⭐ Ædelstens-strategi</div><div class="co-desc">
  Ved lancering: massiv efterspørgsel, hold store lagre (50+ af hvert populært type).<br>
  Perfekt Slibning: sælg til dobbeltpris — spillere venter gerne en dag.
</div></div>
<div class="tip-box"><strong>💡 Bedste tip:</strong> Specialiser dig i de mest efterspurgte stats på din server. Haste er næsten altid nr. 1 — lav altid flere haste-ædelstene end andre typer.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-jewelcrafting-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/jewelcrafting-leveling-guide'
};

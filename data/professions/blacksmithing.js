// BLACKSMITHING DATA — v2.3
const BLACKSMITHING = {
  id:'blacksmithing', icon:'⚒', cat:'crafting', accent:'#7a7a7a',
  name:{nl:'Blacksmithing',en:'Blacksmithing',da:'Smedning'},
  tier:'C',
  lore:{
    nl:'Blacksmithing is een <em>crafting profession</em> waarbij je metaal smeedt tot wapens en wapenrusting. Specifiek: je maakt <strong>plaat-armor</strong> voor Warriors en Death Knights, <strong>wapens</strong> voor alle klassen, en <strong>profession tools</strong> voor andere craftingprofessions. Blacksmithing is de oudste en meest iconische crafting profession in WoW — het is de smid die het zwaard maakt waarmee de paladin de raid survivet.<br><br>Nieuw in Midnight: <strong>Void-Forging</strong> (imbue wapens met void-krachten voor speciale effecten), <strong>Resonance Tempering</strong> (maak je items progressief beter via een upgrade-systeem), en het maken van <strong>profession tools voor alle 13 professions</strong> — een markt die alleen Blacksmiths kunnen bedienen.',
    en:'Blacksmithing is a <em>crafting profession</em> where you forge metal into weapons and armor. Specifically: you make <strong>plate armor</strong> for Warriors and Death Knights, <strong>weapons</strong> for all classes, and <strong>profession tools</strong> for other crafting professions. Blacksmithing is the oldest and most iconic crafting profession in WoW — it is the smith who makes the sword the paladin uses to survive the raid.<br><br>New in Midnight: <strong>Void-Forging</strong> (imbue weapons with void powers for special effects), <strong>Resonance Tempering</strong> (progressively improve your items through an upgrade system), and crafting <strong>profession tools for all 13 professions</strong> — a market only Blacksmiths can serve.',
    da:'Smedning er en <em>craftingprofession</em> hvor du smedar metal til våben og rustning. Specifikt: du laver <strong>pladrustning</strong> til Warriors og Death Knights, <strong>våben</strong> til alle klasser og <strong>professions-redskaber</strong> til andre craftingprofessioner.<br><br>Nyt i Midnight: Void-Smededning (giv våben void-kræfter), Resonance Tempering (progressivt opgraderingssystem) og fremstilling af <strong>professions-redskaber til alle 13 professioner</strong> — et marked kun Blacksmiths kan betjene.'
  },
  goldrating:4, userating:4,
  trainer:{
    name:'Grommash Ironforge',
    loc:{
      nl:'Trainer Grommash Ironforge staat in de <strong>Craftsmen\'s Quarter</strong> van Silvermoon City, naast de grote smidse. Je hoort hem al van ver — het hameren op het aambeeld stopt nooit. Hij is de grootste en luidste NPC in het hele kwartier.',
      en:'Trainer Grommash Ironforge is in the <strong>Craftsmen\'s Quarter</strong> of Silvermoon City, next to the large forge. You can hear him from far away — the hammering on the anvil never stops. He is the largest and loudest NPC in the entire district.',
      da:'Træner Grommash Ironforge er i <strong>Craftsmen\'s Quarter</strong> i Silvermoon City, ved siden af den store smedje. Du kan høre ham langt væk — hamringen på ambolten stopper aldrig.'
    },
    way:'/way Eversong Woods 46.8 47.9',
    note:{
      nl:'💡 <strong>Combineer met Mining:</strong> Blacksmithing verbruikt enorme hoeveelheden Void-Iron Ore en staven. Als je Mining ook hebt, heb je nooit materiaalkosten. Zonder Mining ben je continu afhankelijk van het AH voor grondstoffen — dat kan tot 60-70% van je winstmarge opeten. De combinatie BS+Mining is even winstgevend als Alchemy+Herbalism.',
      en:'💡 <strong>Combine with Mining:</strong> Blacksmithing consumes enormous amounts of Void-Iron Ore and bars. If you also have Mining, you never have material costs. Without Mining you are constantly dependent on the AH for raw materials — that can eat up 60-70% of your profit margin. The BS+Mining combination is just as profitable as Alchemy+Herbalism.',
      da:'💡 <strong>Kombiner med Minedrift:</strong> Smedning bruger enorme mængder Void-Iron Ore og barrer. Med Minedrift har du aldrig materialomkostninger. Uden Minedrift kan materialer æde 60-70% af din fortjenstmargen. BS+Minedrift er lige så profitabelt som Alkymi+Urtekendskab.'
    }
  },
  specs:[
    {
      title:{nl:'📖 Waarom is Blacksmithing uniek?',en:'📖 Why is Blacksmithing unique?',da:'📖 Hvorfor er Smedning unik?'},
      desc:{
        nl:'De meeste crafting professions maken items voor één bepaald type speler. Leatherworking voor leer- en mailklassen. Alchemy voor iedereen die consumables gebruikt. Maar Blacksmithing heeft een extra markt die <em>andere professions niet hebben</em>: <strong>profession tools</strong>.<br><br>Elke crafting profession in Midnight profiteert van Epic profession tools die hun crafting-kwaliteit verhogen. Die tools worden gemaakt door Blacksmithing — en alleen door Blacksmithing. De doelgroep is elke serieuze crafter op de server: Leatherworkers, Alchemists, Engineers, Tailors, Jewelers... allemaal kopen ze tools bij jou.<br><br>Bovendien: wapens zijn Bind on Equip (verkopen op het AH) én Bind on Pickup in Epic versie (Crafting Orders verplicht). Plaat-armor is Bind on Pickup in Epic versie. Je hebt zowel een AH-markt als een exclusieve Crafting Order-markt.<br><br>KP verdelen vanaf <strong>BS skill 25</strong>.',
        en:'Most crafting professions make items for one specific type of player. But Blacksmithing has an extra market that <em>other professions do not have</em>: <strong>profession tools</strong>.<br><br>Every crafting profession in Midnight benefits from Epic profession tools that raise their crafting quality. Those tools are made by Blacksmithing — and only by Blacksmithing. The target audience is every serious crafter on the server: Leatherworkers, Alchemists, Engineers, Tailors, Jewelers... they all buy tools from you.<br><br>Additionally: weapons are Bind on Equip (sell on AH) AND Bind on Pickup in Epic version (Crafting Orders required). Plate armor is Bind on Pickup in Epic version. You have both an AH market and an exclusive Crafting Order market.<br><br>Spend KP from <strong>BS skill 25</strong>.',
        da:'Smedning har et ekstra marked andre professioner ikke har: <strong>professions-redskaber</strong>. Hvert redskab laves af Smedning — og kun Smedning. Målgruppen er enhver seriøs crafter på serveren. Derudover: Epic rustning er Bind on Pickup = eksklusivt Crafting Order-marked. KP kan fordeles fra <strong>Smedning-færdighed 25</strong>.'
      },
      points:{nl:'Tip: begin met het maken van je eigen Mining-tools zodra je BS skill 25 hebt — dat maakt je Mining direct efficiënter',en:'Tip: start making your own Mining tools as soon as you have BS skill 25 — that immediately makes your Mining more efficient',da:'Tip: lav dine egne Mining-redskaber så snart du har BS-færdighed 25 — det gør din Minedrift straks mere effektiv'}
    },
    {
      title:{nl:'🛡 Boom 1 — Armorsmithing · begin hier',en:'🛡 Tree 1 — Armorsmithing · start here',da:'🛡 Træ 1 — Armorsmithing · start her'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Volledige plaat-wapenrusting voor <strong>Warriors en Death Knights</strong> — de twee zwaarste tank- en DPS-klassen in Midnight. Helm, schouders, borst, polsen, handschoenen, benen, laarzen, riem. De complete set.<br><br><strong>Warriors in Midnight:</strong> Door de nieuwe Void-Knight spec is de Warrior-spelersbasis groter dan ooit. De nieuwe spec is visueel indrukwekkend en populair bij nieuwkomers. Dat betekent: veel meer Warriors dan in eerdere expansies = veel meer armor-demand.<br><br><strong>Epic Bind on Pickup:</strong> Net als bij Leatherworking is de Epic versie van plate-armor Bind on Pickup. Spelers kunnen het niet kopen op het AH. Ze MOETEN bij een Blacksmith een order plaatsen. Jij hebt het recept (uit raids), jij hebt exclusieve toegang tot die markt.<br><br><strong>Waarom als eerste?</strong> De meeste Blacksmithing-inkomsten in de eerste weken van de expansie komen van armor-orders. Iedereen wil gear bij de launch. Plate Mastery is de snelste weg naar de meeste orders.',
        en:'<strong>What does this make?</strong> Full plate armor for <strong>Warriors and Death Knights</strong> — the two heaviest tank and DPS classes in Midnight. Helm, shoulders, chest, wrists, gloves, legs, boots, belt. The complete set.<br><br><strong>Warriors in Midnight:</strong> Due to the new Void-Knight spec, the Warrior player base is larger than ever. The new spec is visually impressive and popular with newcomers. That means: far more Warriors than in previous expansions = far more armor demand.<br><br><strong>Epic Bind on Pickup:</strong> Like Leatherworking, the Epic version of plate armor is Bind on Pickup. Players cannot buy it on the AH. They MUST place an order with a Blacksmith. You have the recipe (from raids), you have exclusive access to that market.<br><br><strong>Why first?</strong> Most Blacksmithing income in the first weeks of the expansion comes from armor orders. Everyone wants gear at launch. Plate Mastery is the fastest path to the most orders.',
        da:'<strong>Hvad laver dette?</strong> Komplet pladrustning til <strong>Warriors og Death Knights</strong>.<br><br><strong>Warriors i Midnight:</strong> Ny Void-Knight spec = større spillerbase end nogensinde = mere rustningsefterspørgsel.<br><br><strong>Epic Bind on Pickup:</strong> Spillere KAN IKKE købe det på AH — de SKAL bestille hos dig.'
      },
      points:{nl:'30 punten — begin hier voor maximale orders in de eerste weken',en:'30 points — start here for maximum orders in the first weeks',da:'30 point — start her for maksimale ordrer de første uger'}
    },
    {
      title:{nl:'⚔ Boom 2 — Weaponsmithing · voor alle klassen',en:'⚔ Tree 2 — Weaponsmithing · for all classes',da:'⚔ Træ 2 — Weaponsmithing · til alle klasser'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Wapens van alle typen — zwaarden, bijlen, hamers, dolken, staven. Wapens zijn bijzonder in Midnight omdat <em>alle negen klassen</em> ze dragen, niet alleen Warriors en DKs. Hunters, Rogues, Shamans, Paladins — ze dragen allemaal wapens van Blacksmithing.<br><br><strong>Bind on Equip (normaal) vs Bind on Pickup (Epic):</strong> Normale wapens zijn Bind on Equip — je kunt ze op het AH verkopen. Iedereen kan ze kopen. Epic wapens zijn Bind on Pickup — spelers moeten bij jou een order plaatsen. Beide typen zijn winstgevend maar op verschillende manieren.<br><br><strong>Void-Forging (nieuw in Midnight):</strong> Als je Weapon Mastery op hoog genoeg niveau hebt, kun je wapens imbuen met Void-krachten via het Void-Forging systeem. Dit geeft wapens een speciaal visueel effect én een Void-proc (kans op extra Void-damage). Spelers betalen extra voor Void-Forged wapens — zowel voor het effect als het uiterlijk.',
        en:'<strong>What does this make?</strong> Weapons of all types — swords, axes, hammers, daggers, staves. Weapons are special in Midnight because <em>all nine classes</em> use them, not just Warriors and DKs. Hunters, Rogues, Shamans, Paladins — they all carry weapons from Blacksmithing.<br><br><strong>Bind on Equip (normal) vs Bind on Pickup (Epic):</strong> Normal weapons are Bind on Equip — you can sell them on the AH. Anyone can buy them. Epic weapons are Bind on Pickup — players must place an order with you. Both types are profitable but in different ways.<br><br><strong>Void-Forging (new in Midnight):</strong> If your Weapon Mastery is high enough, you can imbue weapons with Void powers. This gives weapons a special visual effect AND a Void proc (chance of extra Void damage). Players pay extra for Void-Forged weapons — for both the effect and the appearance.',
        da:'<strong>Hvad laver dette?</strong> Våben af alle typer til alle ni klasser.<br><br><strong>Void-Smededning (nyt):</strong> Imbue våben med Void-kræfter — specielt visuelt effekt OG Void-proc. Spillere betaler ekstra for Void-Forged våben.'
      },
      points:{nl:'25 punten — combineer met Plate Mastery voor de meest complete Blacksmithing setup',en:'25 points — combine with Plate Mastery for the most complete Blacksmithing setup',da:'25 point — kombiner med Pladrustningskunst for den mest komplette Smedning-opsætning'}
    },
    {
      title:{nl:'🔧 Boom 3 — Craftsmithing · profession tools en consumables',en:'🔧 Tree 3 — Craftsmithing · profession tools and consumables',da:'🔧 Træ 3 — Craftsmithing · professionredskaber og forbrugsvarer'},
      desc:{
        nl:'<strong>Wat zijn profession tools?</strong> Elke crafting profession in Midnight profiteert van speciaal gereedschap dat hun crafting-kwaliteit verhoogt. Een Alchemist met Epic alchemy-tools maakt betere potions. Een Leatherworker met Epic tools maakt betere armor. Die tools worden gemaakt door Blacksmithing.<br><br><strong>Overzicht van de tools die jij maakt:</strong><br>• Alchemist\'s Mortar & Pestle → voor Alchemy<br>• Leatherworker\'s Awl → voor Leatherworking<br>• Enchanting Rod → voor Enchanting<br>• Jeweler\'s Loupe → voor Jewelcrafting<br>• Inscription Pen → voor Inscription<br>• Tailor\'s Needle Set → voor Tailoring<br>... en meer<br><br><strong>Waarom zo winstgevend?</strong> De doelgroep is niet één klasse of twee — het zijn alle serieuze crafters op de server. Dat zijn tientallen tot honderden spelers afhankelijk van servergrootte. En: Epic tools zijn Bind on Pickup. Elke crafter die Epic tools wil, MOET bij een Blacksmith bestellen.<br><br><strong>Timing:</strong> Bij expansie-launch is iedereen tegelijk op zoek naar tools. Dan is de vraag maximaal. Spelers kopen daarna ook nieuwe tools als ze upgraden naar betere gear.',
        en:'<strong>What are profession tools?</strong> Every crafting profession in Midnight benefits from special tools that raise their crafting quality. An Alchemist with Epic alchemy tools makes better potions. A Leatherworker with Epic tools makes better armor. Those tools are made by Blacksmithing.<br><br><strong>Overview of tools you make:</strong><br>• Alchemist\'s Mortar & Pestle → for Alchemy<br>• Leatherworker\'s Awl → for Leatherworking<br>• Enchanting Rod → for Enchanting<br>• Jeweler\'s Loupe → for Jewelcrafting<br>• Inscription Pen → for Inscription<br>• Tailor\'s Needle Set → for Tailoring<br>... and more<br><br><strong>Why so profitable?</strong> The target audience is not one class or two — it is every serious crafter on the server. That is dozens to hundreds of players depending on server size. And: Epic tools are Bind on Pickup. Every crafter who wants Epic tools MUST order from a Blacksmith.',
        da:'<strong>Hvad er professions-redskaber?</strong> Hvert craftingprofession i Midnight drager fordel af specielle redskaber der hæver craftingkvaliteten. Disse redskaber laves af Smedning — og kun Smedning.<br><br>Målgruppen: ikke én klasse — alle seriøse craftere på serveren. Epic redskaber er Bind on Pickup — enhver crafter der vil have dem SKAL bestille hos en Blacksmith.'
      },
      points:{nl:'25 punten — de meest unieke Blacksmithing-markt, unlock dit zo vroeg mogelijk',en:'25 points — the most unique Blacksmithing market, unlock this as early as possible',da:'25 point — det mest unikke Smedning-marked, lås op så tidligt som muligt'}
    },
    {
      title:{nl:'⚡ Boom 4 — The Old Ways · maximaliseer je profession stats',en:'⚡ Tree 4 — The Old Ways · maximize your profession stats',da:'⚡ Træ 4 — The Old Ways · maksimer dine profession stats'},
      desc:{
        nl:'<strong>Wat is Resonance Tempering?</strong> Een nieuw systeem in Midnight waarbij je gesmede items <em>progressief kunt upgraden</em>. In plaats van één statisch item craft je een item op basisniveau, en kun je het daarna in stappen verbeteren door er meer materialen in te stoppen.<br><br>Systeem:<br>• Craft item (rank 1) → 100 item level<br>• Temper met Void-Iron + Primal Earth → rank 2, 106 item level<br>• Temper opnieuw → rank 3, 112 item level<br>• Maximum rank 5 → 120 item level (equivalent aan Mythic raid-gear)<br><br><strong>Waarom goed voor Crafting Orders?</strong> Spelers bestellen niet alleen een basis-item — ze bestellen ook upgrade-services. "Temper mijn zwaard naar rank 4" is een apart order waarbij jij alleen je vakmanschap verkoopt. Spelers leveren de materialen, jij krijgt betaald voor de service.<br><br><strong>Wanneer kiezen?</strong> Als je de Plate en/of Weapon-boom al hebt en actief gaat raiden voor Epic recepten. Resonance Tempering maakt je items systematisch beter dan die van niet-Blacksmiths.',
        en:'<strong>What is Resonance Tempering?</strong> A new system in Midnight where you can <em>progressively upgrade</em> forged items. Instead of one static item you craft an item at base level, then improve it in steps by adding more materials.<br><br>System:<br>• Craft item (rank 1) → 100 item level<br>• Temper with Void-Iron + Primal Earth → rank 2, 106 item level<br>• Temper again → rank 3, 112 item level<br>• Maximum rank 5 → 120 item level (equivalent to Mythic raid gear)<br><br><strong>Why good for Crafting Orders?</strong> Players order not just a base item — they also order upgrade services. "Temper my sword to rank 4" is a separate order where you sell only your craftsmanship. Players provide the materials, you get paid for the service.',
        da:'<strong>Hvad er Resonanstemporering?</strong> Nyt system i Midnight: progressiv opgradering af smedede genstande.<br>• Rank 1 → 100 genstandes niveau<br>• Rank 5 → 120 genstandes niveau (svarer til Mythic raid-gear)<br><br>Spillere bestiller også opgraderingsservices — de leverer materialerne, du får betalt for håndværket.'
      },
      points:{nl:'20 punten — unlock pas nadat je Plate en/of Weapon-boom hebt, voor gevorderde BS-spelers',en:'20 points — only unlock after you have the Plate and/or Weapon tree, for advanced BS players',da:'20 point — lås kun op efter du har Plad- og/eller Vaabenkunst, til erfarne BS-spillere'}
    }
  ],
  items:[
    {icon:'⚔',name:{nl:'Epic Wapens (Bind on Pickup)',en:'Epic Weapons (Bind on Pickup)',da:'Epic Våben (Bind on Pickup)'},desc:{nl:'Alleen verkrijgbaar via Crafting Orders. Spelers kunnen ze niet op het AH kopen. Jij hebt het recept (uit raids), jij hebt de exclusieve markt. Alle klassen dragen wapens.',en:'Only obtainable via Crafting Orders. Players cannot buy them on the AH. You have the recipe (from raids), you have the exclusive market. All classes carry weapons.',da:'Kun opnåeligt via Crafting Orders. Alle klasser bærer våben — kæmpe marked.'},tag:'gear'},
    {icon:'🛡',name:{nl:'Epic Plate Armor (Bind on Pickup)',en:'Epic Plate Armor (Bind on Pickup)',da:'Epic Pladrustning (Bind on Pickup)'},desc:{nl:'Volledige set voor Warriors en Death Knights. Bind on Pickup — verplichte Crafting Orders. Warriors zijn populairder dan ooit door nieuwe Void-Knight spec.',en:'Full set for Warriors and Death Knights. Bind on Pickup — Crafting Orders required. Warriors are more popular than ever due to new Void-Knight spec.',da:'Komplet sæt til Warriors og Death Knights. Bind on Pickup — Warriors mere populære end nogensinde.'},tag:'gear'},
    {icon:'🔧',name:{nl:'Profession Tools (voor alle 13 professions)',en:'Profession Tools (for all 13 professions)',da:'Professions-redskaber (til alle 13 professioner)'},desc:{nl:'Alleen Blacksmiths kunnen ze maken. Epic versie is Bind on Pickup. Elke crafter op de server is je potentiële klant. Beste unieke markt van Blacksmithing.',en:'Only Blacksmiths can make them. Epic version is Bind on Pickup. Every crafter on the server is your potential customer. Best unique market of Blacksmithing.',da:'Kun Blacksmiths kan lave dem. Enhver crafter på serveren er din potentielle kunde.'},tag:'utility'},
    {icon:'🟣',name:{nl:'Void-Forged Weapons (premium)',en:'Void-Forged Weapons (premium)',da:'Void-Smededede Våben (premium)'},desc:{nl:'Wapens met Void-imbue via het Void-Forging systeem. Speciaal visueel effect en Void-proc kans. Spelers betalen extra voor het uiterlijk én het effect. Premium markt.',en:'Weapons with Void imbue via the Void-Forging system. Special visual effect and Void proc chance. Players pay extra for the appearance AND the effect. Premium market.',da:'Våben med Void-imbue. Specielt visuelt effekt og Void-proc chance. Spillere betaler ekstra.'},tag:'gear'},
    {icon:'🏠',name:{nl:'Housing Meubels (metaal)',en:'Housing Furniture (metal)',da:'Housing Møbler (metal)'},desc:{nl:'Op level 80: smeed metalen meubels voor het Housing-systeem. Lantaarns, kooien, wapenrekken, rustingen op standaards. Niche markt maar stabiel extra inkomen.',en:'At level 80: forge metal furniture for the Housing system. Lanterns, cages, weapon racks, armor on stands. Niche market but stable extra income.',da:'Level 80: smid metallemøbler til Housing-systemet. Nichemarked men stabilt ekstra indkomst.'},tag:'utility'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">📦 Crafting Orders bij Blacksmithing — hoe ze werken</div><div class="co-desc">Blacksmithing heeft twee typen orders:<br><br>
<strong>1. Armor en Weapon Orders (Epic, Bind on Pickup)</strong><br>
Speler gaat naar de Crafting Order-tafel → kiest Epic item → voegt eigen materialen toe als ze die hebben → stelt vergoeding in → jij pakt de order op → craft het item → goud en mat naar jou, item naar koper.<br><br>
<strong>2. Profession Tool Orders (Epic, Bind on Pickup)</strong><br>
Zelfde systeem, maar de koper is een Alchemist, Leatherworker, Engineer of andere crafter die zijn tools wil upgraden. Uniek voor Blacksmithing — anderen kunnen dit niet aanbieden.<br><br>
<strong>3. Resonance Tempering Services</strong><br>
Speler heeft al het item maar wil het upgraden. Ze sturen een Crafting Order met de upgrade-materialen en een vergoeding. Jij tempert het item, zij krijgen het terug op hoger rank. Pure service-verkoop — geen eigen materialen nodig.</div></div>
<div class="co-step"><div class="co-title">⭐ De drie inkomstenstromen van Blacksmithing</div><div class="co-desc">
  <strong>💥 Week 1-4 (launch-periode):</strong><br>
  Massale armor-orders. Iedereen wil gear. Iedereen wil tools. Hoge vergoedingen. Dit zijn de meest winstgevende weken van de expansie. Heb zoveel mogelijk recepten klaar bij launch.<br><br>
  <strong>🔧 Hele expansie: Profession Tools</strong><br>
  Dit is de uniekste BS-markt. Elke nieuwe speler die een crafting profession leert wil tools. Elke speler die upgradet naar Epic gear wil ook zijn tools upgraden. Constante, stabiele vraag gedurende de hele expansie.<br><br>
  <strong>⚡ Gevorderd: Resonance Tempering Services</strong><br>
  Als je naam bekend is als goede Blacksmith, komen spelers specifiek naar jou voor upgrade-services. Je verkoopt alleen je vakmanschap — materialen zijn van de koper. Pure winstmarge.
</div></div>
<div class="co-step"><div class="co-title">📅 Wat te doen op welk moment</div><div class="co-desc">
  <strong>Launch (eerste twee weken):</strong><br>
  → Zet jezelf op de public orders lijst voor armor en weapons<br>
  → Maak profession tools voor alle crafters die ernaar vragen<br>
  → Houd je materialen (Void-Iron Bars) bij — vraag is enorm<br><br>
  <strong>Midden-expansie:</strong><br>
  → Raid actief om Epic recepten te verzamelen<br>
  → Tool-orders blijven doorkomen — altijd bijhouden<br>
  → Resonance Tempering services adverteren in Trade Channel<br><br>
  <strong>Einde expansie / patch:</strong><br>
  → Nieuwe recepten uit nieuwe raid-tier = nieuwe exclusive markt<br>
  → Void-Forged wapens zijn altijd gewild voor cosmetics
</div></div>
<div class="tip-box"><strong>💡 Beste tip voor Blacksmithing:</strong> Maak direct bij launch de profession tools voor jezelf én voor andere crafters. Als Mining-Blacksmith kost het je bijna niets aan materialen maar verkoop je tools voor honderden goud per stuk. Sommige servers hebben slechts twee of drie actieve Blacksmiths die tools hebben — als jij er één van bent, heb je een wachtrij aan orders van de eerste dag.</div>`,
    en:`<div class="co-step"><div class="co-title">📦 Crafting Orders at Blacksmithing</div><div class="co-desc">Blacksmithing has two types of orders:<br><br>
<strong>1. Armor and Weapon Orders (Epic, Bind on Pickup)</strong> — Standard Crafting Order flow, player provides materials and fee, you craft and receive gold.<br>
<strong>2. Profession Tool Orders (Epic, Bind on Pickup)</strong> — Same system but the buyer is an Alchemist, Leatherworker, Engineer etc. Unique to Blacksmithing.<br>
<strong>3. Resonance Tempering Services</strong> — Player already has the item but wants it upgraded. They send an order with upgrade materials and a fee. Pure service — no materials needed from you.</div></div>
<div class="co-step"><div class="co-title">⭐ The three income streams of Blacksmithing</div><div class="co-desc">
  <strong>💥 Week 1-4 (launch period):</strong> Massive armor orders. Everyone wants gear and tools. High fees. Most profitable weeks of the expansion.<br>
  <strong>🔧 Entire expansion: Profession Tools</strong> — Every new crafter wants tools. Every player upgrading to Epic gear also wants to upgrade their tools. Constant stable demand.<br>
  <strong>⚡ Advanced: Resonance Tempering Services</strong> — Pure profit margin, no material costs from you.
</div></div>
<div class="co-step"><div class="co-title">📅 What to do and when</div><div class="co-desc">
  <strong>Launch:</strong> List yourself for armor and weapon orders. Make tools for all crafters.<br>
  <strong>Mid-expansion:</strong> Raid for Epic recipes. Keep taking tool orders. Advertise Tempering services.<br>
  <strong>End expansion / patch:</strong> New raid-tier recipes = new exclusive market.
</div></div>
<div class="tip-box"><strong>💡 Best tip for Blacksmithing:</strong> Make profession tools right at launch for yourself and other crafters. As a Mining-Blacksmith it costs you almost nothing in materials but you sell tools for hundreds of gold each. Some servers have only two or three active Blacksmiths with tools — if you are one of them, you have a queue of orders from day one.</div>`,
    da:`<div class="co-step"><div class="co-title">📦 Crafting Orders ved Smedning</div><div class="co-desc">
<strong>1. Rustning og Vaabenordrer</strong> — Standard Crafting Order-flow, spilleren leverer materialer og honorar.<br>
<strong>2. Professions-redskabordrer</strong> — Unikt for Smedning, alle craftere er dine kunder.<br>
<strong>3. Resonanstemporerings-services</strong> — Ren service, ingen materialomkostninger fra dig.
</div></div>
<div class="co-step"><div class="co-title">⭐ Tre indkomststrømme</div><div class="co-desc">
  <strong>💥 Uge 1-4:</strong> Massive rustningsordrer, alle vil have gear og redskaber<br>
  <strong>🔧 Hele ekspansionen:</strong> Professions-redskaber — konstant stabil efterspørgsel<br>
  <strong>⚡ Avanceret:</strong> Resonanstemporerings-services — ren fortjenestmargen
</div></div>
<div class="co-step"><div class="co-title">📅 Hvad gøres hvornår</div><div class="co-desc">
  Launch: Opret dig til armor/våbenordrer, lav redskaber til craftere<br>
  Midt-ekspansion: Raid for Epic opskrifter, fortsæt redskabsordrer<br>
  Sen ekspansion: Nye raid-tier opskrifter = nyt eksklusivt marked
</div></div>
<div class="tip-box"><strong>💡 Bedste tip:</strong> Lav professions-redskaber straks ved launch. Som Minedrift-Smedning koster det dig næsten intet i materialer men du sælger redskaber for hundredvis af guld stykket. Nogle servere har kun 2-3 aktive Blacksmiths med redskaber — en kø af ordrer fra dag ét.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-blacksmithing-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/blacksmithing-specialization-guide'
};

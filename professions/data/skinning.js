// SKINNING DATA
const SKINNING = {
  id:'skinning', icon:'🐾', cat:'gathering', accent:'#8B6347',
  name:{nl:'Skinning',en:'Skinning',da:'Skindbehandling'},
  tier:'B',
  lore:{
    nl:'Skinning is de simpelste manier om goud te verdienen in WoW Midnight. Je loopt de wereld in, vermoord beesten, en haalt hun huid eraf. Die huid verkoop je aan andere spelers of gebruik je zelf als je ook Leatherworking hebt. Nieuw in Midnight: speciale gloeiende beesten op je minimap, flesjes die extra drops geven, en zeldzame beesten die je kunt oproepen voor de duurste materialen in het spel.',
    en:'Skinning is the simplest way to earn gold in WoW Midnight. You roam the world, kill beasts, and collect their hides. Sell the hides to other players or use them yourself if you also have Leatherworking. New in Midnight: special glowing beasts on your minimap, vials that give extra drops, and rare beasts you can summon for the most valuable materials in the game.',
    da:'Skindbehandling er den enkleste måde at tjene guld på i WoW Midnight. Du går ud i verden, dræber dyr og samler deres skind. Sælg skindene til andre spillere eller brug dem selv, hvis du også har Leatherworking. Nyt i Midnight: specielle glødende dyr på dit minimap, flasker der giver ekstra drops, og sjældne dyr du kan kalde frem til de dyreste materialer i spillet.'
  },
  goldrating:3, userating:3,
  trainer:{
    name:'Tyn',
    loc:{
      nl:'Je vindt trainer Tyn in de Bazaar van Silvermoon City. De Bazaar is het grote marktgebied in het midden van de stad.',
      en:'You will find trainer Tyn in the Bazaar of Silvermoon City. The Bazaar is the large market area in the center of the city.',
      da:'Du finder træner Tyn i Bazaar i Silvermoon City. Bazaar er det store markedsområde i midten af byen.'
    },
    way:'/way Eversong Woods 44.2 52.3',
    note:{
      nl:'💡 Belangrijk: als je later Majestic materialen wilt farmen (de duurste huid), heb je ook Cooking nodig om Lures te maken. Leer Cooking dan ook gelijk mee!',
      en:'💡 Important: if you later want to farm Majestic materials (the most expensive hides), you also need Cooking to craft Lures. Learn Cooking at the same time!',
      da:'💡 Vigtigt: hvis du senere vil farme Majestic-materialer (de dyreste skind), har du også brug for Madlavning til at lave Lures. Lær Madlavning på samme tid!'
    }
  },
  specs:[
    {
      title:{nl:'Wat zijn specialisaties? — Lees dit eerst!',en:'What are specializations? — Read this first!',da:'Hvad er specialiseringer? — Læs dette først!'},
      desc:{
        nl:'Naarmate je Skinning gebruikt, verdien je <strong>Kennis Punten (KP)</strong>. Die punten kun je verdelen over drie "bomen" — vergelijk het met een talentenboom. Je kunt er pas punten in stoppen als je skill 25 hebt. Kies de boom die past bij jouw speelstijl. Je kunt altijd bijsturen!',
        en:'As you use Skinning, you earn <strong>Knowledge Points (KP)</strong>. Those points can be spread over three "trees" — think of it like a talent tree. You can only spend points once you have skill 25. Choose the tree that fits your playstyle. You can always adjust!',
        da:'Efterhånden som du bruger Skinning, tjener du <strong>Videnpunkter (KP)</strong>. Disse punkter kan fordeles over tre "træer" — tænk på det som et talenttræ. Du kan først bruge punkter når du har færdighed 25. Vælg det træ der passer til din spillestil.'
      },
      points:{nl:'Beginners: begin altijd met Thorough Tanning (stap 2 hieronder)',en:'Beginners: always start with Thorough Tanning (step 2 below)',da:'Begyndere: start altid med Thorough Tanning (trin 2 nedenfor)'}
    },
    {
      title:{nl:'Boom 1 — Thorough Tanning (aanbevolen voor beginners)',en:'Tree 1 — Thorough Tanning (recommended for beginners)',da:'Træ 1 — Thorough Tanning (anbefalet til begyndere)'},
      desc:{
        nl:'Je leert beter hoe je een huid verwerkt, waardoor je meer materialen krijgt per beest. Dit is de meest simpele keuze: meer skinnen = meer leer = meer goud. Perfect als je net begint en gewoon materialen wilt verkopen.',
        en:'You learn to process hides better, getting more materials per beast. This is the simplest choice: more skinning = more leather = more gold. Perfect if you are just starting out and want to sell materials.',
        da:'Du lærer at bearbejde skind bedre og får flere materialer pr. dyr. Dette er det enkleste valg: mere skinning = mere læder = mere guld. Perfekt hvis du lige er startet og bare vil sælge materialer.'
      },
      points:{nl:'Investeer je eerste 25 punten hier — beschikbaar vanaf skill 25',en:'Invest your first 25 points here — available from skill 25',da:'Invester dine første 25 point her — tilgængelig fra færdighed 25'}
    },
    {
      title:{nl:'Boom 2 — Gainful Gathering (voor gevorderden)',en:'Tree 2 — Gainful Gathering (for advanced players)',da:'Træ 2 — Gainful Gathering (til erfarne spillere)'},
      desc:{
        nl:'Vergroot de kans dat je zeldzame en dure materialen krijgt, zoals Void-Tempered Hide. Je krijgt minder materialen in totaal, maar de stukken die je krijgt zijn meer waard. Goed als je de markt goed in de gaten houdt en weet wat duur is.',
        en:'Increases the chance of getting rare and expensive materials, such as Void-Tempered Hide. You get fewer materials overall, but the pieces you get are worth more. Good if you watch the market closely and know what is expensive.',
        da:'Øger chancen for at få sjældne og dyre materialer, som Void-Tempered Hide. Du får færre materialer i alt, men de stykker du får er mere værd. Godt hvis du holder øje med markedet.'
      },
      points:{nl:'20 punten — beschikbaar vanaf skill 25',en:'20 points — available from skill 25',da:'20 point — tilgængelig fra færdighed 25'}
    },
    {
      title:{nl:'Boom 3 — Talented Tracker (voor High Value Beasts)',en:'Tree 3 — Talented Tracker (for High Value Beasts)',da:'Træ 3 — Talented Tracker (til High Value Beasts)'},
      desc:{
        nl:'High Value Beasts zijn speciale beesten die gloeiend op je minimap verschijnen zodra je Skinning leert. Als je er één skinnt, krijg je 3 tot 4 keer meer leer dan normaal! Deze boom maakt die beesten makkelijker te vinden en zorgt dat ze vaker spawnen.',
        en:'High Value Beasts are special beasts that glow on your minimap as soon as you learn Skinning. Skinning one gives you 3 to 4 times more leather than normal! This tree makes those beasts easier to find and causes them to spawn more often.',
        da:'High Value Beasts er specielle dyr der lyser op på dit minimap så snart du lærer Skinning. Skinder du et, får du 3 til 4 gange mere læder end normalt! Denne gren gør disse dyr lettere at finde og får dem til at spawne oftere.'
      },
      points:{nl:'15 punten — beschikbaar vanaf skill 25',en:'15 points — available from skill 25',da:'15 point — tilgængelig fra færdighed 25'}
    }
  ],
  items:[
    {icon:'🦎',name:{nl:'Void-Tempered Leather',en:'Void-Tempered Leather',da:'Void-Tempered Leather'},desc:{nl:'Het meest voorkomende materiaal. Je krijgt het van bijna elk beest. Het is de basis voor vrijwel alle Leatherworking-recepten.',en:'The most common material. You get it from almost every beast. It is the base for almost all Leatherworking recipes.',da:'Det mest almindelige materiale. Du får det fra næsten alle dyr. Det er basen for næsten alle Leatherworking-opskrifter.'},tag:'material'},
    {icon:'🐍',name:{nl:'Void-Tempered Scales',en:'Void-Tempered Scales',da:'Void-Tempered Scales'},desc:{nl:'Schubben van reptielen en draak-achtige beesten. Nodig voor Mail armor — het type dat Hunters en Shamans dragen.',en:'Scales from reptiles and dragon-like beasts. Needed for Mail armor — the type worn by Hunters and Shamans.',da:'Skæl fra krybdyr og drageagtige dyr. Nødvendigt til brynjrustning — den type som Hunters og Shamaner bærer.'},tag:'material'},
    {icon:'🦴',name:{nl:'Void-Tempered Hide',en:'Void-Tempered Hide',da:'Void-Tempered Hide'},desc:{nl:'Steviger en zeldzamer dan normaal leer. Komt van High Value Beasts. Wordt gebruikt voor geavanceerde LW-recepten.',en:'Sturdier and rarer than normal leather. Comes from High Value Beasts. Used for advanced LW recipes.',da:'Stærkere og sjældnere end normalt læder. Kommer fra High Value Beasts. Bruges til avancerede LW-opskrifter.'},tag:'material'},
    {icon:'🦅',name:{nl:'Majestic Fin / Claw / Hide',en:'Majestic Fin / Claw / Hide',da:'Majestic Fin / Claw / Hide'},desc:{nl:'De zeldzaamste en duurste materialen in het spel. Je kunt ze alleen krijgen door een Lure te gebruiken op een speciale plek — dan verschijnt er een Renowned Beast. Eén keer per dag, per zone.',en:'The rarest and most expensive materials in the game. You can only get them by using a Lure at a special spot — then a Renowned Beast appears. Once per day, per zone.',da:'De sjældneste og dyreste materialer i spillet. Du kan kun få dem ved at bruge en Lure på et bestemt sted — så dukker et Renowned Beast op. Én gang om dagen, pr. zone.'},tag:'material'},
    {icon:'✨',name:{nl:'Motes (via Diffusers)',en:'Motes (via Diffusers)',da:'Motes (via Diffusers)'},desc:{nl:'Diffusers zijn kleine flesjes die je craft van Motes. Gooi er één op een beest voor je het skinnt, en je krijgt meer Motes terug dan het kostte om het flesje te maken. Gratis extra materialen!',en:'Diffusers are small vials you craft from Motes. Throw one on a beast before skinning it, and you get back more Motes than it cost to make the vial. Free extra materials!',da:'Diffusers er små flasker du laver af Motes. Kast en på et dyr inden du skinder det, og du får flere Motes tilbage end det kostede at lave flasken. Gratis ekstra materialer!'},tag:'material'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">📦 Hoe werkt het als gathering profession?</div><div class="co-desc">Gathering professions zoals Skinning hebben <strong>geen Crafting Orders</strong>. Je kunt geen opdrachten aannemen van andere spelers. In plaats daarvan verkoop je alles op het <strong>Auction House (AH)</strong> — de in-game marktplaats — of direct aan Leatherworkers die de materialen nodig hebben.</div></div>
<div class="co-step"><div class="co-title">💰 Wat levert het meest op?</div><div class="co-desc">
  <strong>🥇 Majestic Fin/Claw/Hide</strong> — zeldzaamst, altijd de hoogste prijs op het AH<br>
  <strong>🥈 Void-Tempered Hide</strong> — gevraagd voor gevorderde LW-recepten<br>
  <strong>🥉 Void-Tempered Scales</strong> — constant gevraagd voor Hunter/Shaman gear<br>
  <strong>Void-Tempered Leather</strong> — meest voorkomend, maar ook altijd nodig
</div></div>
<div class="co-step"><div class="co-title">📅 Wat moet je elke dag doen?</div><div class="co-desc">
  <strong>1. High Value Beasts skinnen</strong><br>
  Zodra je Skinning hebt geleerd, zie je gloeiende beesten op je minimap als een klein mes-icoontje. Die geven 3-4x meer leer dan gewone beesten. Doe dit altijd als je er eentje tegenkomt!<br><br>
  <strong>2. Diffusers gebruiken</strong><br>
  Craft Diffusers van je Motes. Gooi een Diffuser op een beest, dood het, en skin het. Je krijgt méér Motes terug dan je uitgaf. Levert vanzelf winst op!<br><br>
  <strong>3. Lure gebruiken (dagelijks!)</strong><br>
  Dit is het meest lucratief. Maak een zone-specifieke Lure met Cooking en vis. Gooi hem neer op de aangewezen plek in een zone — een gigantisch zeldzaam beest verschijnt. Skin het voor Majestic materialen. Dit kan <strong>één keer per dag per zone</strong>. Met vier zones = vier kansen per dag. Duurt maar 5 minuten per zone!
</div></div>
<div class="tip-box"><strong>💡 Gratis tip:</strong> Als een andere speler een beest heeft gedood maar <em>niet</em> geskinnd, mag jij het gewoon skinnen! Zij hebben al de normale loot meegenomen — jij pakt de huid gratis. Altijd doen!</div>`,
    en:`<div class="co-step"><div class="co-title">📦 How does it work as a gathering profession?</div><div class="co-desc">Gathering professions like Skinning have <strong>no Crafting Orders</strong>. You cannot take assignments from other players. Instead, you sell everything on the <strong>Auction House (AH)</strong> — the in-game marketplace — or directly to Leatherworkers who need the materials.</div></div>
<div class="co-step"><div class="co-title">💰 What earns the most?</div><div class="co-desc">
  <strong>🥇 Majestic Fin/Claw/Hide</strong> — rarest, always the highest AH price<br>
  <strong>🥈 Void-Tempered Hide</strong> — needed for advanced LW recipes<br>
  <strong>🥉 Void-Tempered Scales</strong> — constant demand for Hunter/Shaman gear<br>
  <strong>Void-Tempered Leather</strong> — most common, but always needed
</div></div>
<div class="co-step"><div class="co-title">📅 What should you do every day?</div><div class="co-desc">
  <strong>1. Skin High Value Beasts</strong><br>
  Once you learn Skinning, you see glowing beasts on your minimap as a small knife icon. These give 3-4x more leather than regular beasts. Always do this when you encounter one!<br><br>
  <strong>2. Use Diffusers</strong><br>
  Craft Diffusers from your Motes. Throw a Diffuser on a beast, kill it, and skin it. You get back more Motes than you spent. Automatically profitable!<br><br>
  <strong>3. Use a Lure (daily!)</strong><br>
  This is the most lucrative. Craft a zone-specific Lure using Cooking and fish. Place it at the designated spot in a zone — a massive rare beast appears. Skin it for Majestic materials. This can be done <strong>once per day per zone</strong>. With four zones = four chances per day. Only 5 minutes per zone!
</div></div>
<div class="tip-box"><strong>💡 Free tip:</strong> If another player killed a beast but did <em>not</em> skin it, you are free to skin it! They already took the regular loot — you get the hide for free. Always do this!</div>`,
    da:`<div class="co-step"><div class="co-title">📦 Hvordan fungerer det som indsamlingsprofession?</div><div class="co-desc">Indsamlingsprofessioner som Skindbehandling har <strong>ingen håndværksordrer</strong>. Du kan ikke tage opgaver fra andre spillere. I stedet sælger du alt på <strong>Auction House (AH)</strong> — spilmarkedspladsen — eller direkte til Leatherworkere der har brug for materialerne.</div></div>
<div class="co-step"><div class="co-title">💰 Hvad giver mest?</div><div class="co-desc">
  <strong>🥇 Majestic Fin/Claw/Hide</strong> — sjældnest, altid den højeste AH-pris<br>
  <strong>🥈 Void-Tempered Hide</strong> — kræves til avancerede LW-opskrifter<br>
  <strong>🥉 Void-Tempered Scales</strong> — konstant efterspørgsel til Hunter/Shaman-gear<br>
  <strong>Void-Tempered Leather</strong> — mest almindelig, men altid efterspurgt
</div></div>
<div class="co-step"><div class="co-title">📅 Hvad skal du gøre hver dag?</div><div class="co-desc">
  <strong>1. Skind High Value Beasts</strong><br>
  Så snart du lærer Skinning, ser du glødende dyr på dit minimap som et lille knivsikon. Disse giver 3-4x mere læder end normale dyr. Gør altid dette når du støder på et!<br><br>
  <strong>2. Brug Diffusers</strong><br>
  Lav Diffusers af dine Motes. Kast en Diffuser på et dyr, dræb det og skind det. Du får flere Motes tilbage end du brugte. Automatisk profitabelt!<br><br>
  <strong>3. Brug en Lure (dagligt!)</strong><br>
  Dette er det mest lukrative. Lav en zone-specifik Lure med Madlavning og fisk. Placer den på det angivne sted i en zone — et kæmpe sjældent dyr dukker op. Skind det for Majestic-materialer. Dette kan gøres <strong>én gang pr. dag pr. zone</strong>. Med fire zoner = fire chancer pr. dag. Tager kun 5 minutter pr. zone!
</div></div>
<div class="tip-box"><strong>💡 Gratis tip:</strong> Hvis en anden spiller dræbte et dyr men <em>ikke</em> skindede det, må du frit skinde det! De tog allerede den normale loot — du får skindet gratis. Gør altid dette!</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-skinning-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/skinning-specialization-guide-and-builds'
};

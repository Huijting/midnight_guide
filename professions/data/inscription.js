// INSCRIPTION DATA — v2.3
const INSCRIPTION = {
  id:'inscription', icon:'📜', cat:'crafting', accent:'#2980b9',
  name:{nl:'Inscription',en:'Inscription',da:'Inskription'},
  tier:'A',
  lore:{
    nl:'Inscription is een <em>crafting profession</em> waarbij je kruiden vermaalt tot inkt en die inkt gebruikt om <strong>glyphs, tomes, vantabladen en Darkmoon-kaarten</strong> te maken. Inscription heeft drie volledig verschillende marktsegmenten: de wekelijkse consumable-markt (Contracts), de eenmalige unlockables (Glyphs), en de zeldzame high-value markt (Darkmoon-kaarten). Elke markt werkt anders en geeft een andere inkomststroom.<br><br>Combineer met Herbalism voor gratis inkt-grondstoffen.',
    en:'Inscription is a <em>crafting profession</em> where you grind herbs into ink and use that ink to craft <strong>glyphs, tomes, contracts and Darkmoon cards</strong>. Inscription has three completely different market segments: the weekly consumable market (Contracts), the one-time unlockables (Glyphs), and the rare high-value market (Darkmoon cards). Each market works differently and provides a different income stream.<br><br>Combine with Herbalism for free ink raw materials.',
    da:'Inskription er en <em>craftingprofession</em> der maler urter til blæk og laver <strong>glyphs, tomer, kontrakter og Darkmoon-kort</strong>. Tre helt forskellige markedssegmenter: ugentlige forbrugsvarer (Kontrakter), engangs-oplåsninger (Glyphs) og sjælden high-value marked (Darkmoon-kort).'
  },
  goldrating:3, userating:4,
  trainer:{
    name:'Velos Inkhand',
    loc:{
      nl:'Trainer Velos Inkhand staat in de <strong>Library of Silvermoon</strong> — de grote bibliotheek aan de hoofdstraat van Silvermoon City. Hij zit achter een bureau vol perkamentrol en inkpotten.',
      en:'Trainer Velos Inkhand is in the <strong>Library of Silvermoon</strong> — the large library on the main street of Silvermoon City. He sits behind a desk full of scrolls and ink pots.',
      da:'Træner Velos Inkhand er i <strong>Silvermoons Bibliotek</strong> — det store bibliotek på Silvermoon Citys hovedgade, bag et skrivebord fyldt med skriftruller og blækkrukker.'
    },
    way:'/way Silvermoon City 44.1 38.9',
    note:{
      nl:'💡 <strong>Combineer met Herbalism:</strong> Inscription verbruikt enorme hoeveelheden kruiden voor inkt. Met Herbalism plukt je je eigen grondstoffen — anders ben je afhankelijk van het AH voor constant kruid-inkopen, wat je winstmarge flink aantast.',
      en:'💡 <strong>Combine with Herbalism:</strong> Inscription consumes enormous amounts of herbs for ink. With Herbalism you pick your own raw materials — otherwise you depend on the AH for constant herb purchases, significantly eating into your profit margin.',
      da:'💡 <strong>Kombiner med Urtekendskab:</strong> Inskription bruger enorme mængder urter til blæk. Med Urtekendskab plukker du dine egne råmaterialer — ellers er du afhængig af AH for konstante urtindkøb.'
    }
  },
  specs:[
    {
      title:{nl:'📖 De drie markten van Inscription',en:'📖 The three markets of Inscription',da:'📖 De tre markeder for Inskription'},
      desc:{
        nl:'<strong>Markt 1 — Contracts (wekelijks):</strong> Contracts zijn een soort dagelijkse buff die je koopt bij een NPC — maar de NPC heeft ze nodig van Scribes. Elke week reset, elke week nieuwe vraag. Stabiel inkomen.<br><br><strong>Markt 2 — Glyphs (eenmalig):</strong> Glyphs zijn permanente cosmetic-wijzigingen aan je spells. Een speler koopt ze één keer en nooit meer. De markt is groot bij launch maar droogt op. Goed voor de eerste maanden.<br><br><strong>Markt 3 — Darkmoon Kaarten (hoog waarde):</strong> Je maakt losse kaarten die je verzamelt tot een volledig Darkmoon-pak (8 kaarten). Het pak wissel je in voor een krachtig trinket. Kaarten zijn zeldzaam, duur, en altijd gevraagd door spelers die het trinket willen.<br><br>KP verdelen vanaf <strong>Inscription skill 25</strong>.',
        en:'<strong>Market 1 — Contracts (weekly):</strong> Contracts are a daily buff type purchased from NPCs — but NPCs need them from Scribes. Weekly reset, weekly demand. Stable income.<br><br><strong>Market 2 — Glyphs (one-time):</strong> Glyphs are permanent cosmetic changes to spells. Players buy them once and never again. Market is large at launch but dries up. Good for first months.<br><br><strong>Market 3 — Darkmoon Cards (high value):</strong> You make individual cards that combine into a complete Darkmoon deck (8 cards). The deck is exchanged for a powerful trinket. Cards are rare, expensive, and always in demand.<br><br>Spend KP from <strong>Inscription skill 25</strong>.',
        da:'<strong>Marked 1 — Kontrakter (ugentligt):</strong> Ugentlig nulstilling = ugentlig efterspørgsel. Stabil indkomst.<br><strong>Marked 2 — Glyphs (engangs):</strong> Stort ved lancering, udtørrer derefter. Godt for første måneder.<br><strong>Marked 3 — Darkmoon-kort (høj værdi):</strong> Sjældne kort kombineret til trinket = altid efterspurgte.<br><br>KP fra <strong>Inskriptionsfærdighed 25</strong>.'
      },
      points:{nl:'Tip: focus in de eerste maand op Glyphs — daarna overstappen op Contracts als stabiel inkomen',en:'Tip: focus on Glyphs in the first month — then switch to Contracts for stable income',da:'Tip: fokuser på Glyphs i første måned — skift derefter til Kontrakter for stabil indkomst'}
    },
    {
      title:{nl:'📋 Boom 1 — Contracts & Vantabladen · wekelijkse basis',en:'📋 Tree 1 — Contracts & Tomes · weekly foundation',da:'📋 Træ 1 — Kontrakter & Tomer · ugentlig base'},
      desc:{
        nl:'<strong>Contracts:</strong> Geef een speler voor 7 dagen reputatie-bonus bij een bepaalde faction. Elke speler die een contract koopt, koopt er over 7 dagen opnieuw één. Constante, wekelijkse vraag.<br><br><strong>Tomes of the Tranquil Mind:</strong> Laten spelers hun talents wijzigen buiten combat, overal in de wereld. Een QoL-item dat constant gevraagd wordt. Elke keer dat iemand zijn build wil wisselen voor een nieuwe content-type, koopt hij een Tome.',
        en:'<strong>Contracts:</strong> Give a player 7 days reputation bonus with a specific faction. Every player who buys a contract buys another one in 7 days. Constant, weekly demand.<br><br><strong>Tomes of the Tranquil Mind:</strong> Let players change their talents outside combat, anywhere in the world. A QoL item constantly in demand. Every time someone wants to switch their build for new content type, they buy a Tome.',
        da:'<strong>Kontrakter:</strong> 7 dages omdømmebonus hos en fraktion. Ugentlig fornyet efterspørgsel.<br><strong>Rolighedens Tomer:</strong> Lad spillere ændre talenter udenfor kamp overalt. QoL-vare der konstant efterspørges.'
      },
      points:{nl:'30 punten — stabielste langetermijn-inkomen van Inscription',en:'30 points — most stable long-term income of Inscription',da:'30 point — mest stabile langsigtede indkomst fra Inskription'}
    },
    {
      title:{nl:'🎨 Boom 2 — Glyph Mastery · launch-markt',en:'🎨 Tree 2 — Glyph Mastery · launch market',da:'🎨 Træ 2 — Glyph-mestring · lanceringsmarked'},
      desc:{
        nl:'<strong>Wat zijn Glyphs?</strong> Permanente cosmetic-wijzigingen aan spells. Een Warlock kan zijn <em>Demonic Circle</em> laten eruitzien als een Void-portaal. Een Druid kan zijn Bear Form veranderen naar een Midnight-stijl met paarse Void-markings. Puur cosmetic, geen stats.<br><br><strong>Waarom goed bij launch?</strong> Glyphs zijn Bind on Equip. Elke speler die een nieuw karakter maakt, wil zijn spells er mooi uit laten zien. Bij expansie-launch zijn er duizenden nieuwe karakters. De vraag is tijdelijk enorm — eerste twee maanden.<br><br><strong>Waarom drogen ze op?</strong> Een glyph is permanent. Als een speler hem eenmaal heeft, hoeft hij hem nooit meer te kopen tenzij hij een nieuw alter maakt.',
        en:'<strong>What are Glyphs?</strong> Permanent cosmetic changes to spells. A Warlock can make their Demonic Circle look like a Void portal. A Druid can change their Bear Form to a Midnight style with purple Void markings. Pure cosmetic, no stats.<br><br><strong>Why good at launch?</strong> Glyphs are Bind on Equip. Every player making a new character wants their spells to look great. At expansion launch there are thousands of new characters. Demand is temporarily enormous — first two months.',
        da:'<strong>Hvad er Glyphs?</strong> Permanente kosmetiske ændringer af trylleformler. Bind on Equip.<br><br><strong>Hvorfor godt ved lancering?</strong> Tusindvis af nye karakterer = midlertidig enorm efterspørgsel de første to måneder. Derefter udtørrer markedet.'
      },
      points:{nl:'25 punten — hoge prioriteit bij expansie-launch, minder relevant daarna',en:'25 points — high priority at expansion launch, less relevant afterward',da:'25 point — høj prioritet ved lancering, mindre relevant derefter'}
    },
    {
      title:{nl:'🃏 Boom 3 — Darkmoon Cards · de high-value markt',en:'🃏 Tree 3 — Darkmoon Cards · the high-value market',da:'🃏 Træ 3 — Darkmoon-kort · high-value markedet'},
      desc:{
        nl:'<strong>Wat zijn Darkmoon Kaarten?</strong> Je craft individuele speelkaarten (1 t/m 8 van een pak) met Inscription. Als je alle 8 kaarten van een pak bij elkaar hebt, wissel je ze in bij de Darkmoon Faire voor een krachtig trinket. Dat trinket is vergelijkbaar met Normal/Heroic raid-gear.<br><br><strong>Waarom ze zo waardevol zijn:</strong><br>• Je weet nooit welke kaart je krijgt — het is willekeurig<br>• Spelers die kaart 5 van 8 missen, zijn bereid veel te betalen voor die specifieke kaart<br>• Een compleet pak is meer waard dan de som der kaarten<br>• Alleen Scribes kunnen kaarten maken<br><br><strong>Handel in kaarten:</strong> Veel Scribes maken winst door kaarten te maken, te verkopen, en soms pakketten samen te stellen om aan spelers te verkopen die niet zelf willen zoeken.',
        en:'<strong>What are Darkmoon Cards?</strong> You craft individual playing cards (1 through 8 of a deck) with Inscription. If you have all 8 cards of a deck, you exchange them at the Darkmoon Faire for a powerful trinket comparable to Normal/Heroic raid gear.<br><br><strong>Why they are so valuable:</strong><br>• You never know which card you will get — it is random<br>• Players missing card 5 of 8 are willing to pay a lot for that specific card<br>• A complete deck is worth more than the sum of the cards<br>• Only Scribes can make cards<br><br><strong>Card trading:</strong> Many Scribes profit by making cards, selling them, and sometimes assembling decks to sell to players who do not want to search themselves.',
        da:'<strong>Hvad er Darkmoon-kort?</strong> Lav individuelle spillekort (1-8 af et sæt) med Inskription. Komplet sæt = byttes til kræftigt smykke.<br><br><strong>Hvorfor så værdifulde:</strong> Tilfældig kort per craft → spillere betaler meget for specifikke manglende kort → komplet sæt > summen af kortene.'
      },
      points:{nl:'20 punten — hoge opbrengst maar willekeurig — combineer met geduldige markthandel',en:'20 points — high yield but random — combine with patient market trading',da:'20 point — højt udbytte men tilfældigt — kombiner med tålmodig markedshandel'}
    }
  ],
  items:[
    {icon:'📋',name:{nl:'Contracts (wekelijks)',en:'Contracts (weekly)',da:'Kontrakter (ugentligt)'},desc:{nl:'7 dagen reputatiebonus per contract. Elke week opnieuw gekocht door dezelfde spelers. Meest stabiele Inscription-inkomen.',en:'7 days reputation bonus per contract. Bought again every week by the same players. Most stable Inscription income.',da:'7 dages omdømmebonus. Købt igen hver uge af de samme spillere. Mest stabil Inskriptionsindkomst.'},tag:'consumable'},
    {icon:'📚',name:{nl:'Tomes of the Tranquil Mind',en:'Tomes of the Tranquil Mind',da:'Rolighedens Tomer'},desc:{nl:'Wissel je talent-build buiten combat. Elke speler die switcht tussen content-types koopt er één. Constante vraag.',en:'Switch your talent build outside combat. Every player switching between content types buys one. Constant demand.',da:'Skift talentbygning udenfor kamp. Enhver spiller der skifter indholdstype køber én.'},tag:'consumable'},
    {icon:'🎨',name:{nl:'Glyphs (cosmetisch)',en:'Glyphs (cosmetic)',da:'Glyphs (kosmetisk)'},desc:{nl:'Permanente spell-cosmetica. Hoog bij launch, daalt daarna. Koop en verzamel zeldzame glyph-recepten voor langdurig inkomen.',en:'Permanent spell cosmetics. High at launch, decreases afterward. Collect rare glyph recipes for lasting income.',da:'Permanent trylleformelbeskrivelse. Højt ved lancering, falder derefter.'},tag:'cosmetic'},
    {icon:'🃏',name:{nl:'Darkmoon Cards',en:'Darkmoon Cards',da:'Darkmoon-kort'},desc:{nl:'Willekeurige kaart per craft. Spelers betalen veel voor specifieke ontbrekende kaarten. Compleet pak = krachtig trinket. Altijd hoge waarde.',en:'Random card per craft. Players pay a lot for specific missing cards. Complete deck = powerful trinket. Always high value.',da:'Tilfældig kort per craft. Spillere betaler meget for specifikke manglende kort. Komplet sæt = kræftigt smykke.'},tag:'gear'},
    {icon:'📜',name:{nl:'Voidscribed Tomes (Housing)',en:'Voidscribed Tomes (Housing)',da:'Void-skrevne Tomer (Housing)'},desc:{nl:'Decoratieve boeken en tomes voor je Housing-kamer. Unieke Inscription-decoraties. Niche markt maar geen concurrentie.',en:'Decorative books and tomes for your Housing room. Unique Inscription decorations. Niche market but no competition.',da:'Dekorative bøger og tomer til dit Housing-rum. Unikt Inskriptionsmarked.'},tag:'utility'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">📦 Inscription verkoop — drie modellen tegelijk</div><div class="co-desc">Inscription is uniek omdat je drie compleet verschillende verkoopmodellen tegelijk kunt draaien:<br><br><strong>AH-model (Glyphs, Tomes, Cards):</strong> Maak op voorraad, zet op het AH, wacht op verkoop. Passief inkomen.<br><strong>Wekelijks model (Contracts):</strong> Elke week reset = elke week nieuwe batch maken en verkopen.<br><strong>Trading-model (Darkmoon Cards):</strong> Maak kaarten, verkoop of verzamel ze, handel in specifieke kaarten die spelers missen.</div></div>
<div class="co-step"><div class="co-title">⭐ Prioriteit per maand</div><div class="co-desc">
  <strong>Maand 1-2 (launch):</strong><br>
  → Focus op Glyphs — massale vraag van nieuwe karakters<br>
  → Begin Darkmoon Cards te maken — verkoop losse kaarten<br>
  → Zet Contracts op als bijverdienste<br><br>
  <strong>Maand 3+ (langetermijn):</strong><br>
  → Glyphs zijn minder waard (markt verzadigd)<br>
  → Contracts zijn de ruggengraat — elke week stabiel inkomen<br>
  → Darkmoon Cards blijven gevraagd voor alts en nieuwe spelers
</div></div>
<div class="tip-box"><strong>💡 Beste tip voor Inscription:</strong> Bewaar je zeldzame glyph-recepten. Als je een recept hebt dat anderen niet hebben, ben jij de enige aanbieder op de server. Sommige zeldzame glyphs houden hun waarde maanden lang. Zoek actief naar zeldzame recepten in obscure locaties, vendor-rotaties en raid-drops.</div>`,
    en:`<div class="co-step"><div class="co-title">📦 Inscription sales — three models simultaneously</div><div class="co-desc">Three completely different sales models at once:<br><br><strong>AH model (Glyphs, Tomes, Cards):</strong> Make in stock, list on AH, wait for sales. Passive income.<br><strong>Weekly model (Contracts):</strong> Weekly reset = weekly new batch.<br><strong>Trading model (Darkmoon Cards):</strong> Make cards, sell or collect them, trade in specific cards players are missing.</div></div>
<div class="co-step"><div class="co-title">⭐ Priority per month</div><div class="co-desc">
  <strong>Month 1-2 (launch):</strong> Focus on Glyphs — massive demand from new characters. Start Darkmoon Cards. Contracts as side income.<br>
  <strong>Month 3+ (long-term):</strong> Glyphs less valuable (market saturated). Contracts are the backbone. Darkmoon Cards still in demand for alts.
</div></div>
<div class="tip-box"><strong>💡 Best tip for Inscription:</strong> Save your rare glyph recipes. If you have a recipe others do not, you are the sole supplier on the server. Some rare glyphs hold their value for months.</div>`,
    da:`<div class="co-step"><div class="co-title">📦 Inskriptionsalg — tre modeller på én gang</div><div class="co-desc">AH-model (Glyphs, Tomer, Kort), Ugentlig model (Kontrakter), Handelsmodel (Darkmoon-kort).</div></div>
<div class="co-step"><div class="co-title">⭐ Prioritet pr. måned</div><div class="co-desc">
  Måned 1-2: Glyphs (massiv efterspørgsel), Darkmoon-kort, Kontrakter som biindkomst<br>
  Måned 3+: Kontrakter som rygrad, Darkmoon-kort fortsat efterspurgte
</div></div>
<div class="tip-box"><strong>💡 Bedste tip:</strong> Gem dine sjældne glyph-opskrifter. Eneste udbyder på serveren = monopol. Søg aktivt efter sjældne opskrifter.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-inscription-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/inscription-leveling-guide'
};

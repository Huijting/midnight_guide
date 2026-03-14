// TAILORING DATA — v2.3
const TAILORING = {
  id:'tailoring', icon:'🧵', cat:'crafting', accent:'#e91e63',
  name:{nl:'Tailoring',en:'Tailoring',da:'Skrædderkunst'},
  tier:'B',
  lore:{
    nl:'Tailoring is een <em>crafting profession</em> waarbij je stof en draden verwerkt tot <strong>cloth-armor, cloaks en magische gewaden</strong>. Tailoring is uniek onder de armor-professions: het heeft <strong>geen gathering-partner</strong> nodig — je koopt stof van de wereld of plukt het van geslagen humanoïde vijanden. Geen Mining, geen Skinning — het materiaal valt gewoon mee.<br><br>Tailoring bedient de caster-klassen: Mages, Warlocks, Priests, en de caster-specs van Druids en Shamans. In Midnight zijn dat de klassen met de meeste nieuwe specs dankzij de Void-thematiek — grote doelgroep.',
    en:'Tailoring is a <em>crafting profession</em> where you process cloth and threads into <strong>cloth armor, cloaks and magical robes</strong>. Tailoring is unique among armor professions: it needs <strong>no gathering partner</strong> — you buy cloth from the world or loot it from defeated humanoid enemies. No Mining, no Skinning — the material just drops.<br><br>Tailoring serves caster classes: Mages, Warlocks, Priests, and caster specs of Druids and Shamans. In Midnight these are the classes with the most new specs thanks to the Void theme — large target audience.',
    da:'Skrædderkunst er en <em>craftingprofession</em> der forarbejder stof til <strong>klædedrustning, kapper og magiske gevandter</strong>. Unikt: ingen indsamlingsprofession nødvendig — stof dropper fra humanoide fjender. Betjener caster-klasserne der er meget populære i Midnight.'
  },
  goldrating:3, userating:4,
  trainer:{
    name:'Galana',
    loc:{
      nl:'Trainer Silindra Moonweave is te vinden in het <strong>Weaver\'s District</strong> van Silvermoon City — een rustige buurt vol ateliers en etalages vol zijden stoffen. Ze staat bij een groot weefgetouw naast de fontein.',
      en:'Trainer Silindra Moonweave is found in the <strong>Weaver\'s District</strong> of Silvermoon City — a quiet neighborhood full of workshops and shop windows filled with silk fabrics. She stands by a large loom next to the fountain.',
      da:'Træner Silindra Moonweave er i <strong>Væver-distriktet</strong> i Silvermoon City — en stille bydel fyldt med atelierer og silkestofvinduer, ved en stor væv.'
    },
    way:'/way #2393 48.14 54.08',
    note:{
      nl:'💡 <strong>Geen gathering-partner nodig:</strong> Dit maakt Tailoring bijzonder. Stof valt van geslagen vijanden en is altijd beschikbaar op het AH voor relatief lage prijzen. Je tweede profession-slot kun je invullen met iets heel anders — Enchanting voor synergieën, of Inscription voor extra diversificatie.',
      en:'💡 <strong>No gathering partner needed:</strong> This makes Tailoring special. Cloth drops from defeated enemies and is always available on the AH for relatively low prices. Your second profession slot can be filled with something completely different — Enchanting for synergy, or Inscription for extra diversification.',
      da:'💡 <strong>Ingen indsamlingsprofession nødvendig:</strong> Stof dropper fra fjender og er billigt på AH. Din anden professionplads kan bruges til noget helt andet — Fortryllelse for synergi, eller Inskription for diversificering.'
    }
  },
  specs:[
    {
      title:{nl:'📖 Tailoring — wie zijn jouw klanten?',en:'📖 Tailoring — who are your customers?',da:'📖 Skrædderkunst — hvem er dine kunder?'},
      desc:{
        nl:'Tailoring maakt cloth-armor voor caster-klassen. In Midnight zijn dat:<br>• <strong>Mage</strong> — meest populaire pure DPS-klasse, nieuwe Void-specs<br>• <strong>Warlock</strong> — Void-thematiek = uitbundige speelersbasis in Midnight<br>• <strong>Priest</strong> — healers zijn altijd gevraagd in raids/dungeons<br>• <strong>Caster Druid / Elemental Shaman</strong> — ook cloth-specs<br><br>Warlocks en Mages zijn extra populair in Midnight door de void-thematiek. Dat maakt de Tailoring-markt groter dan in eerdere expansies.<br><br><strong>Bonus: Cloaks voor iedereen</strong> — Cloaks (mantels) zijn één stuk gear dat <em>alle</em> klassen dragen. Tailoring maakt cloaks voor iedereen — het is het breedste marktsegment van de profession.<br><br>KP verdelen vanaf <strong>Tailoring skill 25</strong>.',
        en:'Tailoring makes cloth armor for caster classes. In Midnight:<br>• <strong>Mage</strong> — most popular pure DPS class, new Void specs<br>• <strong>Warlock</strong> — Void theme = enthusiastic player base in Midnight<br>• <strong>Priest</strong> — healers are always needed in raids/dungeons<br>• <strong>Caster Druid / Elemental Shaman</strong> — also cloth specs<br><br><strong>Bonus: Cloaks for everyone</strong> — Cloaks are one piece of gear worn by <em>all</em> classes. Tailoring makes cloaks for everyone — the broadest market segment of the profession.<br><br>Spend KP from <strong>Tailoring skill 25</strong>.',
        da:'Skrædderkunst laver klædedrustning til:<br>• Mage, Warlock, Priest, Caster Druid, Elemental Shaman<br><br>Warlock og Mage ekstra populære i Midnight pga. void-tematikken.<br><br><strong>Bonus: Kapper til alle</strong> — Enhver klasse bærer kapper. Bredeste markedssegment.<br><br>KP fra <strong>Skrædderkunstfærdighed 25</strong>.'
      },
      points:{nl:'Tip: maak altijd cloaks op voorraad — die verkoop je aan elke klasse, niet alleen casters',en:'Tip: always stock cloaks — you sell those to every class, not just casters',da:'Tip: lav altid kapper på lager — dem sælger du til enhver klasse, ikke kun castere'}
    },
    {
      title:{nl:"👗 Boom 1 — Sin'dorei Finery · epic cloth armor recepten",en:"👗 Tree 1 — Sin'dorei Finery · epic cloth armor recipes",da:"👗 Træ 1 — Sin'dorei Finery · episke stofpanseropskrifter"},
      desc:{
        nl:'<strong>Wat doet het?</strong> Je maakt de beste cloth-armor sets voor caster-klassen. Epic cloth-armor is Bind on Pickup — spelers moeten Crafting Orders plaatsen bij jou. Jij hebt de recepten (uit raids), jij hebt exclusieve toegang.<br><br><strong>Void-Weave Armor:</strong> De nieuwe Tailoring-materiaalset in Midnight. Void-Weave stof is gemaakt van Voidshade-kruiden en Moonpetal — twee Herbalism-materialen. Als je Herbalism hebt, heb je de grondstoffen gratis. Zo niet, zijn ze goed verkrijgbaar op het AH.<br><br><strong>Set-bonussen (nieuw in Midnight):</strong> Als je de volledige Tailoring-crafted set draagt, krijg je een speciale <em>Weaver\'s Bond</em>-bonus — een extra passieve ability die alleen beschikbaar is via crafted sets. Spelers die de volledige set willen voor de bonus plaatsen meerdere orders.',
        en:'<strong>What does it do?</strong> You make the best cloth armor sets for caster classes. Epic cloth armor is Bind on Pickup — players must place Crafting Orders with you. You have the recipes (from raids), you have exclusive access.<br><br><strong>Void-Weave Armor:</strong> The new Tailoring material set in Midnight. Void-Weave cloth is made from Voidshade herbs and Moonpetal — two Herbalism materials. If you have Herbalism, you have the raw materials for free.<br><br><strong>Set bonuses (new in Midnight):</strong> Wearing the full Tailoring-crafted set gives a special <em>Weaver\'s Bond</em> bonus — an extra passive ability only available via crafted sets.',
        da:'<strong>Hvad gør det?</strong> Bedste klædedrustning til castere. Epic er Bind on Pickup → kun Crafting Orders.<br><br><strong>Void-Weave Rustning:</strong> Ny materialesæt — lavet af Voidshade og Moonpetal urter.<br><br><strong>Sætbonusser (nyt):</strong> Komplet sæt giver eksklusiv passiv evne — spillere bestiller hele sættet for bonussen.'
      },
      points:{nl:'30 punten — begin hier voor maximale armor-orders',en:'30 points — start here for maximum armor orders',da:'30 point — start her for maksimale rustningsordrer'}
    },
    {
      title:{nl:'🧵 Boom 2 — Nimble Needlework · dagelijkse bolt cooldowns en speciale cloth',en:'🧵 Tree 2 — Nimble Needlework · daily bolt cooldowns and special cloth',da:'🧵 Træ 2 — Nimble Needlework · daglige boltcooldowns og specielt stof'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Epic cloaks (mantels) voor alle klassen — warriors, rogues, hunters, healers, casters. Iedereen draagt een mantel. Dit is de bredste markt die Tailoring heeft.<br><br><strong>Bind on Equip cloaks:</strong> Sommige cloaks zijn Bind on Equip — je kunt ze op het AH verkopen. Dat is je passieve AH-inkomen als Tailor. Maak ze op voorraad en zet ze op het AH — geen koper aanwezig nodig.<br><br><strong>Bind on Pickup (Epic) cloaks:</strong> De beste cloaks zijn alleen via Crafting Orders. Combineer beide om zowel passief (AH) als actief (orders) te verdienen.',
        en:'<strong>What does this make?</strong> Epic cloaks for all classes — warriors, rogues, hunters, healers, casters. Everyone wears a cloak. This is the broadest market Tailoring has.<br><br><strong>Bind on Equip cloaks:</strong> Some cloaks are Bind on Equip — sell them on the AH. Passive AH income as a Tailor. Make in stock and list — no buyer presence needed.<br><br><strong>Bind on Pickup (Epic) cloaks:</strong> The best cloaks are only via Crafting Orders. Combine both to earn both passively (AH) and actively (orders).',
        da:'<strong>Hvad laver dette?</strong> Epic kapper til ALLE klasser — bredeste marked i Skrædderkunst.<br><br>Bind on Equip kapper: passivt AH-salg<br>Bind on Pickup (Epic): kun Crafting Orders<br>Kombiner begge for passiv + aktiv indkomst.'
      },
      points:{nl:'25 punten — universele markt, combineer met armor boom voor complete setup',en:'25 points — universal market, combine with armor tree for complete setup',da:'25 point — universelt marked, kombiner med rustningskuren for komplet opsætning'}
    },
    {
      title:{nl:'🧶 Boom 3 — Fabric Specialist · verhoog cloth drop rates',en:'🧶 Tree 3 — Fabric Specialist · increase cloth drop rates',da:'🧶 Træ 3 — Fabric Specialist · øg stof-drop-rater'},
      desc:{
        nl:'<strong>Wat zijn Tapestries?</strong> Grote wanddecoraties voor het Housing-systeem — prachtig geweven doeken met Midnight-thema\'s: nachtelijke elven-landschappen, Void-patronen, sterrenkaarten. Ze zijn puur decoratief maar enorm populair bij spelers die hun huis willen inrichten.<br><br><strong>Unieke markt:</strong> Alleen Tailors kunnen Tapestries maken. Er is geen andere aanbieder. Als jij de goede recepten hebt (sommige vallen uit zeldzame bronnen), heb je een monopolie op bepaalde designs.<br><br><strong>Pricing:</strong> Tapestries verkopen voor hoge prijzen — spelers betalen voor uitstraling en uniek design. Een Void-Weave Tapestry kan makkelijk 500-2000 goud opleveren afhankelijk van het design.',
        en:'<strong>What are Tapestries?</strong> Large wall decorations for the Housing system — beautifully woven cloths with Midnight themes: nocturnal elven landscapes, Void patterns, star charts. Pure decorative but enormously popular with players decorating their homes.<br><br><strong>Unique market:</strong> Only Tailors can make Tapestries. No other supplier. If you have the right recipes (some drop from rare sources), you have a monopoly on certain designs.<br><br><strong>Pricing:</strong> Tapestries sell for high prices — players pay for appearance and unique design. A Void-Weave Tapestry can easily yield 500-2000 gold depending on design.',
        da:'<strong>Hvad er Tapisserier?</strong> Store vægdekorationer til Housing — kun Skræddere kan lave dem. Monopol på visse designs. Priser: 500-2.000 guld afhængig af design.'
      },
      points:{nl:'15 punten — niche markt maar hoge marge, unlock na de armor en cloak boom',en:'15 points — niche market but high margin, unlock after armor and cloak tree',da:'15 point — nichemarked men høj margin, lås op efter rustnings- og kappetræet'}
    }
  ],
  items:[
    {icon:'🧥',name:{nl:'Epic Cloth Armor (Bind on Pickup)',en:'Epic Cloth Armor (Bind on Pickup)',da:'Epic Klædedrustning (Bind on Pickup)'},desc:{nl:'Voor Mages, Warlocks, Priests. Verplichte Crafting Orders. Warlock en Mage extra populair in Midnight door Void-thema.',en:'For Mages, Warlocks, Priests. Crafting Orders required. Warlock and Mage extra popular in Midnight due to Void theme.',da:'Til Mages, Warlocks, Priests. Kun Crafting Orders. Warlock og Mage ekstra populære i Midnight.'},tag:'gear'},
    {icon:'🧣',name:{nl:'Cloaks (alle klassen)',en:'Cloaks (all classes)',da:'Kapper (alle klasser)'},desc:{nl:'Epic Bind on Pickup via orders. Normale versies op het AH. Universele markt — elke klasse draagt een mantel.',en:'Epic Bind on Pickup via orders. Normal versions on AH. Universal market — every class wears a cloak.',da:'Epic via ordrer. Normale versioner på AH. Universelt marked — alle bærer kapper.'},tag:'gear'},
    {icon:'🏠',name:{nl:'Void-Weave Tapestries',en:'Void-Weave Tapestries',da:'Void-Weave Tapisserier'},desc:{nl:'Housing-wanddecoraties. Alleen Tailors. Hoge marge. Zeldzame designs = monopolieprijzen.',en:'Housing wall decorations. Only Tailors. High margin. Rare designs = monopoly pricing.',da:'Housing-vægdekorationer. Kun Skræddere. Høj margin. Sjældne designs = monopolpriser.'},tag:'utility'},
    {icon:'🛏',name:{nl:'Void-Weave Bedding (Housing)',en:'Void-Weave Bedding (Housing)',da:'Void-Weave Sengetøj (Housing)'},desc:{nl:'Bedden, kussens en gordijnen voor Housing. Decoratieve items die alleen Tailors maken. Stabiele niche-markt.',en:'Beds, pillows and curtains for Housing. Decorative items only Tailors make. Stable niche market.',da:'Senge, puder og gardiner til Housing. Dekorative genstande kun Skræddere laver.'},tag:'utility'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">📦 Tailoring verkoop — three-in-one</div><div class="co-desc">
<strong>1. Cloth Armor Orders (Epic, Bind on Pickup):</strong> Casters komen naar jou voor hun beste armor. Raids geven je de recepten, spelers geven de orders.<br>
<strong>2. Cloak AH (passief):</strong> Normale cloaks maak je op voorraad en zet je op het AH. Elke klasse = elke speler is potentieel.<br>
<strong>3. Housing Tapestries:</strong> Hoge marge, niche markt, geen concurrentie van andere professions.
</div></div>
<div class="co-step"><div class="co-title">⭐ Tailoring zonder gathering-partner</div><div class="co-desc">
  De grote troef: je hebt geen Mining of Skinning nodig. Stof valt van geslagen humanoïde vijanden in elke zone. Elke dungeon-run geeft stof als bijvangst.<br><br>
  Bovendien is stof altijd beschikbaar op het AH voor relatief lage prijzen — andere spelers zonder Tailoring verkopen het daar. Je materiaalkosten zijn dus laag en voorspelbaar.
</div></div>
<div class="tip-box"><strong>💡 Beste tip voor Tailoring:</strong> Combineer met Enchanting. Enchanting heeft geen gathering-partner nodig (disenchant je eigen gear) en past perfect naast Tailoring. Alle cloth-gear die je zelf niet verkoopt of gebruikt kun je disenchanten voor Enchanting-grondstoffen. Twee professions voor de prijs van één gathering-inspanning.</div>`,
    en:`<div class="co-step"><div class="co-title">📦 Tailoring sales — three-in-one</div><div class="co-desc">
<strong>1. Cloth Armor Orders (Epic, Bind on Pickup):</strong> Casters come to you for best armor.<br>
<strong>2. Cloak AH (passive):</strong> Normal cloaks in stock on AH. Every class = every player is potential.<br>
<strong>3. Housing Tapestries:</strong> High margin, niche, no competition.
</div></div>
<div class="co-step"><div class="co-title">⭐ Tailoring without a gathering partner</div><div class="co-desc">
  The big advantage: no Mining or Skinning needed. Cloth drops from humanoid enemies in every zone. Every dungeon run gives cloth as bycatch.<br><br>
  Cloth is also always available on AH for relatively low prices — players without Tailoring sell it there. Material costs are low and predictable.
</div></div>
<div class="tip-box"><strong>💡 Best tip for Tailoring:</strong> Combine with Enchanting. Enchanting needs no gathering partner (disenchant your own gear) and fits perfectly alongside Tailoring. All cloth gear you do not sell or use can be disenchanted for Enchanting materials. Two professions for the effort of zero gathering.</div>`,
    da:`<div class="co-step"><div class="co-title">📦 Skrædderkunstsalg — tre-i-én</div><div class="co-desc">
1. Klæde-rustningsordrer (Epic, Bind on Pickup)<br>
2. Kappe-AH (passivt) — alle klasser<br>
3. Housing-tapisserier — høj margin, ingen konkurrence
</div></div>
<div class="co-step"><div class="co-title">⭐ Ingen indsamlingsprofession</div><div class="co-desc">Stof dropper fra humanoide fjender og billigt på AH. Lave og forudsigelige materialomkostninger.</div></div>
<div class="tip-box"><strong>💡 Bedste tip:</strong> Kombiner med Fortryllelse. Begge behøver ingen indsamlingsprofession. Klæde du ikke sælger kan disenchantes. To professioner for nul indsamlingsindsats.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-tailoring-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/tailoring-leveling-guide'
};

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
      title:{nl:'📖 De vier Tailoring-specialisatietakken',en:'📖 The four Tailoring specialization trees',da:'📖 De fire Skrædderfag-specialiseringstræer'},
      desc:{
        nl:'Tailoring heeft <strong>vier specialisatietakken</strong>: <em>Sin\'dorei Finery</em> (Epic doek-armor per slot), <em>Nimble Needlework</em> (dagelijkse bolt-cooldowns Arcanoweave en Sunfire Silk, plus embellished gear), <em>Fabric Specialist</em> (verhoogde cloth drop-rates en kwaliteit in Midnight zones) en <em>Fiber Arts</em> (skill bonus voor alle Tailoring-recepten plus crafting stats). Ontgrendeld op skill 25, 50, 60, 75.<br><br>Dag 1: ~40–50 KP. Daarna ~19 KP/week. <strong>Begin met Nimble Needlework</strong> — 20 punten is verplicht om Arcanoweave en Sunfire Silk te laten droppen terwijl je farmt. Zonder dit mis je tweederde van je cloth-drops.',
        en:'Tailoring has <strong>four specialization trees</strong>: <em>Sin\'dorei Finery</em> (Epic cloth armor per slot), <em>Nimble Needlework</em> (daily bolt cooldowns Arcanoweave and Sunfire Silk, plus embellished gear), <em>Fabric Specialist</em> (increased cloth drop rates and quality in Midnight zones) and <em>Fiber Arts</em> (skill bonus for all Tailoring recipes plus crafting stats). Unlocked at skill 25, 50, 60, 75.<br><br>Day 1: ~40–50 KP. After that ~19 KP/week. <strong>Start with Nimble Needlework</strong> — 20 points is required to make Arcanoweave and Sunfire Silk drop while farming. Without this you miss two-thirds of your cloth drops.',
        da:'Skræddereri har <strong>fire specialiseringstræer</strong>: <em>Sin\'dorei Finery</em>, <em>Nimble Needlework</em>, <em>Fabric Specialist</em> og <em>Fiber Arts</em>. Låses op ved færdighed 25, 50, 60, 75.<br><br>Start med Nimble Needlework — 20 point er obligatorisk for Arcanoweave og Sunfire Silk drops.'
      },
      points:{nl:'Tip: unlock Nimble Needlework meteen op skill 25 — anders mis je cloth-drops tijdens het levelen',en:'Tip: unlock Nimble Needlework immediately at skill 25 — otherwise you miss cloth drops while leveling',da:'Tip: lås Nimble Needlework op straks ved færdighed 25 — ellers misser du cloth-drops under leveling'}
    },
    {
      title:{nl:'👗 Boom 1 — Sin\'dorei Finery · Epic doek-armor per slot',en:'👗 Tree 1 — Sin\'dorei Finery · Epic cloth armor per slot',da:'👗 Træ 1 — Sin\'dorei Finery · Episk klæde-panser pr. slot'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Epic doek-armor voor Mages, Warlocks, Priests en Balance Druids. Sub-specs per slotgroep — unlock meerdere slots door in aparte sub-specs te investeren. Je hebt <em>Elegant Accessories</em> als sub-spec voor bracers, want bracers zijn het meest populaire embellishment-slot.<br><br><strong>Let op:</strong> Tailoring is de enige profession waarbij Gold Quality crafts zonder Concentration bereiken veel meer KP kost dan bij andere professions — er zitten verborgen skill-bonussen verspreid over meerdere bomen. Reken op bijna dubbel zoveel KP als andere armor-profs voor dezelfde kwaliteit-drempel.<br><br><strong>Wanneer?</strong> Na Nimble Needlework als tweede boom investeren voor Crafting Orders en eigen gear.',
        en:'<strong>What does this make?</strong> Epic cloth armor for Mages, Warlocks, Priests and Balance Druids. Sub-specs per slot group — unlock multiple slots by investing in separate sub-specs. You have <em>Elegant Accessories</em> as sub-spec for bracers, as bracers are the most popular embellishment slot.<br><br><strong>Note:</strong> Tailoring is the only profession where reaching Gold Quality crafts without Concentration costs significantly more KP than other professions — hidden skill bonuses are spread across multiple trees. Expect almost double the KP of other armor professions for the same quality threshold.<br><br><strong>When?</strong> After Nimble Needlework as second tree for Crafting Orders and personal gear.',
        da:'<strong>Hvad laver dette?</strong> Episk klæde-panser til Mages, Warlocks, Priests og Balance Druids. Under-specs pr. slot-gruppe.<br><br><strong>OBS:</strong> Gold Quality uden Concentration kræver næsten dobbelt så mange KP som andre panser-professioner pga. skjulte skill-bonusser.'
      },
      points:{nl:'Start met slots die het meest gevraagd worden — bracers (embellishment) en chest zijn altijd populair',en:'Start with most demanded slots — bracers (embellishment) and chest are always popular',da:'Start med mest efterspurgte slots — armbånd (embellishment) og bryst er altid populære'}
    },
    {
      title:{nl:'🧵 Boom 2 — Nimble Needlework · dagelijkse bolt-cooldowns + embellishments',en:'🧵 Tree 2 — Nimble Needlework · daily bolt cooldowns + embellishments',da:'🧵 Træ 2 — Nimble Needlework · daglige bolt-cooldowns + embellishments'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Ontgrendelt dagelijkse bolt-cooldowns voor <em>Arcanoweave Bolts</em> en <em>Sunfire Silk Bolts</em> — speciale stofsoorten die nodig zijn voor de meeste high-end Tailoring-recepten. Zonder 20 punten in deze boom droppen deze stoffen niet voor je.<br><br><strong>Embellishments:</strong> Via sub-specs unlock je ook embellished gear — mantels, laarzen en armbanden met unieke effecten. Spelers kunnen maximaal 2 embellished items tegelijk dragen. Armbanden zijn het meest populaire embellishment-slot (<em>Elegant Accessories</em> sub-spec).<br><br><strong>Dagelijkse bolts verkopen:</strong> Arcanoweave en Sunfire Silk Bolts zijn altijd gevraagd door andere Tailors die ze willen gebruiken maar zelf niet kunnen maken. Dagelijkse passieve inkomensstroom tot ~skill 80.',
        en:'<strong>What does this do?</strong> Unlocks daily bolt cooldowns for <em>Arcanoweave Bolts</em> and <em>Sunfire Silk Bolts</em> — special cloth types needed for most high-end Tailoring recipes. Without 20 points in this tree these cloths do not drop for you.<br><br><strong>Embellishments:</strong> Via sub-specs you also unlock embellished gear — cloaks, boots and bracers with unique effects. Players can wear maximum 2 embellished items. Bracers are the most popular embellishment slot (<em>Elegant Accessories</em> sub-spec).<br><br><strong>Selling daily bolts:</strong> Arcanoweave and Sunfire Silk Bolts are always in demand from other Tailors who want to use them but cannot make them. Daily passive income stream until ~skill 80.',
        da:'<strong>Hvad gør dette?</strong> Låser daglige bolt-cooldowns op (Arcanoweave og Sunfire Silk). 20 point OBLIGATORISK for at disse stoffer dropper.<br><br>Embellishments: mantler, støvler og armbånd med unikke effekter. Armbånd = mest populære slot.'
      },
      points:{nl:'20 punten = beide bolt-cooldowns actief (verplicht!), daarna Elegant Accessories sub-spec voor bracers',en:'20 points = both bolt cooldowns active (required!), then Elegant Accessories sub-spec for bracers',da:'20 point = begge bolt-cooldowns aktive (obligatorisk!), derefter Elegant Accessories under-spec for armbånd'}
    },
    {
      title:{nl:'🌿 Boom 3 — Fabric Specialist · verhoogde cloth drop-rates',en:'🌿 Tree 3 — Fabric Specialist · increased cloth drop rates',da:'🌿 Træ 3 — Fabric Specialist · øget klæde-drop-rater'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Verhoogt cloth drop-rates en -kwaliteit terwijl je farmt in Midnight zones — inclusief Arcanoweave en Sunfire Silk. Hoe meer punten, hoe meer cloth je per mobkill krijgt.<br><br><strong>Wanneer kiezen?</strong> Als je veel tijd doorbrengt in open wereld content, dungeons en delves. Als je zelf je grondstoffen farmt in plaats van ze van het AH te kopen, bespaar je aanzienlijk op materiaalkosten.<br><br><strong>Combineer met Nimble Needlework:</strong> Fabric Specialist laat je cloth sneller vergaren, Nimble Needlework laat je de speciale bolts craften. Samen dekken ze de volledige grondstofketen voor Tailoring-recepten.',
        en:'<strong>What does this do?</strong> Increases cloth drop rates and quality while farming in Midnight zones — including Arcanoweave and Sunfire Silk. More points means more cloth per mob kill.<br><br><strong>When to pick?</strong> If you spend lots of time in open world content, dungeons and delves. Farming your own materials instead of buying from AH saves significantly on material costs.<br><br><strong>Combine with Nimble Needlework:</strong> Fabric Specialist lets you gather cloth faster, Nimble Needlework lets you craft the special bolts. Together they cover the full material chain for Tailoring recipes.',
        da:'<strong>Hvad gør dette?</strong> Øger cloth drop-rater og -kvalitet under farming i Midnight-zoner.<br><br>Kombiner med Nimble Needlework: Fabric Specialist = hurtig cloth-indsamling, Nimble Needlework = specielle bolts. Fuld materialekæde.'
      },
      points:{nl:'Prioriteit als je veel farmt — bespaar materiaalkosten door cloth zelf te droppen',en:'Priority if you farm a lot — save material costs by dropping cloth yourself',da:'Prioritet hvis du farmer meget — spar materialeomkostninger ved selv at droppe klæde'}
    },
    {
      title:{nl:'✂ Boom 4 — Fiber Arts · skill bonus voor alle Tailoring-recepten',en:'✂ Tree 4 — Fiber Arts · skill bonus for all Tailoring recipes',da:'✂ Træ 4 — Fiber Arts · skill-bonus til alle Skrædderieopskrifter'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Geeft een skill-bonus voor <em>alle</em> Tailoring-recepten plus crafting stats. Dit is de "verborgen" boom die, samen met specifieke nodes in andere bomen, Gold Quality zonder Concentration mogelijk maakt.<br><br><strong>Waarom bijzonder voor Tailoring?</strong> In tegenstelling tot andere professions waar één of twee bomen je naar Gold Quality brengen, heeft Tailoring verborgen skill-bonussen verspreid over meerdere bomen. Fiber Arts is een van die bronnen. Als je Gold Quality crafts wilt zonder Concentration, moet je hier ook punten in stoppen.<br><br><strong>Wanneer?</strong> Als derde of vierde boom, nadat Nimble Needlework en je armor-boom de basis gelegd hebben.',
        en:'<strong>What does this do?</strong> Gives a skill bonus for <em>all</em> Tailoring recipes plus crafting stats. This is the "hidden" tree that, combined with specific nodes in other trees, enables Gold Quality without Concentration.<br><br><strong>Why special for Tailoring?</strong> Unlike other professions where one or two trees bring you to Gold Quality, Tailoring has hidden skill bonuses spread across multiple trees. Fiber Arts is one of those sources. If you want Gold Quality crafts without Concentration, you must put points here too.<br><br><strong>When?</strong> As third or fourth tree, after Nimble Needlework and your armor tree have laid the foundation.',
        da:'<strong>Hvad gør dette?</strong> Skill-bonus for ALLE opskrifter plus crafting-stats. Del af Tailorings skjulte Gold Quality-krav.<br><br><strong>Hvornår?</strong> Som tredje eller fjerde træ, efter Nimble Needlework og rustnings-træet.'
      },
      points:{nl:'Derde of vierde boom — nodig voor Gold Quality zonder Concentration als complete eindgame-setup',en:'Third or fourth tree — needed for Gold Quality without Concentration as complete endgame setup',da:'Tredje eller fjerde træ — nødvendig for Gold Quality uden Concentration som komplet endgame-opsætning'}
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

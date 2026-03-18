// MINING DATA — v2.3
const MINING = {
  id:'mining', icon:'⛏', cat:'gathering', accent:'#8a8a8a',
  name:{nl:'Mining',en:'Mining',da:'Minedrift'},
  tier:'S',
  lore:{
    nl:'Mining is een <em>gathering profession</em> — je verzamelt grondstoffen uit de wereld in plaats van ze te maken. Specifiek: je slaat ertsen en stenen uit rotsen, kliffen en bergwanden. Die materialen zijn de basis voor <strong>Blacksmithing, Engineering en Jewelcrafting</strong> — drie van de meest gevraagde crafting professions in het spel. Mining is daarmee een van de meest stabiele geldmakers die er zijn: zolang andere spelers wapens, armor en engineering-gadgets willen, hebben ze jouw erts nodig.<br><br>Nieuw in Midnight: het Mining-systeem is flink uitgebreid met <strong>Survey Tools</strong> (spoor erts op voordat je het ziet), <strong>Explosives</strong> (meerdere nodes tegelijk opblazen voor massale oogst), en <strong>Refined Smelting</strong> (smelt je eigen erts om naar waardevolle staven die direct verkoopbaar zijn).',
    en:'Mining is a <em>gathering profession</em> — you collect raw materials from the world instead of crafting them. Specifically: you mine ores and stones from rocks, cliffs and mountain walls. Those materials are the foundation for <strong>Blacksmithing, Engineering and Jewelcrafting</strong> — three of the most in-demand crafting professions in the game. Mining is therefore one of the most stable gold-makers available: as long as other players want weapons, armor and engineering gadgets, they need your ore.<br><br>New in Midnight: the Mining system has been significantly expanded with <strong>Survey Tools</strong> (track ore before you see it), <strong>Explosives</strong> (blow up multiple nodes at once for mass harvesting), and <strong>Refined Smelting</strong> (smelt your own ore into valuable bars that sell directly).',
    da:'Minedrift er en <em>indsamlingsprofession</em> — du indsamler råmaterialer fra verden i stedet for at fremstille dem. Du miner malme og sten fra klipper og bjergvægge. Disse materialer er grundlaget for <strong>Blacksmithing, Engineering og Jewelcrafting</strong> — tre af de mest efterspurgte craftingprofessioner i spillet. Minedrift er dermed en af de mest stabile guldtjenere: så længe andre spillere vil have våben, rustning og engineering-gadgets, har de brug for din malm.<br><br>Nyt i Midnight: Survey Tools (spor malm inden du ser den), Explosives (sprængt flere noder på én gang) og Refined Smelting (smelt din malm til værdifulde barrer).'
  },
  goldrating:4, userating:3,
  trainer:{
    name:'Belil',
    loc:{
      nl:'Trainer Doran Steelbrow vind je in de <strong>Craftsmen\'s Quarter</strong> van Silvermoon City — het ambachtsgebied aan de oostkant van de stad waar alle vakmannen en smeden hun werkplaatsen hebben. Zoek naar de aambeelden en smeedovens.',
      en:'Trainer Doran Steelbrow is in the <strong>Craftsmen\'s Quarter</strong> of Silvermoon City — the crafting district on the east side of the city where all craftsmen and smiths have their workshops. Look for the anvils and forges.',
      da:'Træner Doran Steelbrow er i <strong>Craftsmen\'s Quarter</strong> i Silvermoon City — håndværkskvarteret på østsiden af byen hvor alle håndværkere og smede har deres værksteder.'
    },
    way:'/way #2393 42.68 52.84',
    note:{
      nl:'💡 <strong>Combineer met een crafting profession:</strong> Mining werkt het best in combinatie met Blacksmithing, Engineering of Jewelcrafting. Dan verwerk je je eigen erts en heb je nooit materiaalkosten. Als je alleen Mining doet: verkoop alles op het AH, dat werkt ook prima. Staven (gesmolten erts) verkopen vaak beter dan ruwe erts omdat crafters tijd besparen.',
      en:'💡 <strong>Combine with a crafting profession:</strong> Mining works best combined with Blacksmithing, Engineering or Jewelcrafting. Then you process your own ore and never have material costs. If you only do Mining: sell everything on the AH, that works fine too. Bars (smelted ore) often sell better than raw ore because crafters save time.',
      da:'💡 <strong>Kombiner med en craftingprofession:</strong> Minedrift fungerer bedst kombineret med Blacksmithing, Engineering eller Jewelcrafting. Barrer (smeltet malm) sælger ofte bedre end rå malm fordi craftere sparer tid.'
    }
  },
  specs:[
    {
      title:{nl:'📖 Hoe werkt Mining anders dan andere gathering professions?',en:'📖 How does Mining differ from other gathering professions?',da:'📖 Hvordan adskiller Minedrift sig fra andre indsamlingsprofessioner?'},
      desc:{
        nl:'Bij Skinning ga je achter beesten aan. Bij Herbalism pluk je bloemen. Mining is anders: je zoekt <strong>nodes</strong> — vaste punten op de kaart (rotsen, kliffen, aardlagen) waar erts te vinden is. Die nodes respawnen op vaste locaties, dus ervaren miners leren de route door een zone uit hun hoofd.<br><br>Je minimap toont Mining-nodes als kleine gele stippen zodra je de profession hebt. Hoe meer Mining-skill je hebt, hoe meer types nodes je kunt zien en minen.<br><br><strong>Kennispunten verdienen:</strong> Je krijgt KP van minen, maar ook van smeltquests, schatten in mijnen vinden, en wekelijkse opdrachten. Verdelen kan pas vanaf <strong>Mining skill 25</strong>.',
        en:'With Skinning you chase beasts. With Herbalism you pick flowers. Mining is different: you look for <strong>nodes</strong> — fixed points on the map (rocks, cliffs, ore veins) where ore can be found. Those nodes respawn at fixed locations, so experienced miners learn the route through a zone by heart.<br><br>Your minimap shows Mining nodes as small yellow dots once you have the profession. The more Mining skill you have, the more types of nodes you can see and mine.<br><br><strong>Earning Knowledge Points:</strong> You get KP from mining, but also from smelting quests, finding treasures in mines, and weekly assignments. You can start spending points at <strong>Mining skill 25</strong>.',
        da:'Med Skinning jagter du dyr. Med Herbalism plukker du blomster. Minedrift er anderledes: du leder efter <strong>noder</strong> — faste punkter på kortet (klipper, kløfter, malmårer) hvor malm kan findes. Disse noder respawner på faste steder, så erfarne minere lærer ruten gennem en zone udenad.<br><br>Dit minimap viser Mining-noder som gule prikker. KP kan fordeles fra <strong>Mining-færdighed 25</strong>.'
      },
      points:{nl:'Tip: loop altijd een vaste route door een zone — nodes respawnen op dezelfde plekken',en:'Tip: always run a fixed route through a zone — nodes respawn at the same spots',da:'Tip: løb altid en fast rute gennem en zone — noder respawner på de samme steder'}
    },
    {
      title:{nl:'⛏ Boom 1 — Mining Fundamentals · unlock gemount minen',en:'⛏ Tree 1 — Mining Fundamentals · unlock mounted mining',da:'⛏ Træ 1 — Mining Fundamentals · lås monteret mining op'},
      desc:{
        nl:'<strong>Wat doet het?</strong> De basis van Mining: je minet sneller, krijgt meer erts per node, en de kans op zeldzame secundaire drops (edelstenen, schaarse stukjes Primal Earth) stijgt. Elke sla op een rots levert meer op.<br><br><strong>Waarom altijd als eerste?</strong> Dit is de investering met het beste rendement per KP. Meer erts per node = meer materialen per uur = meer goud. Simpel en altijd nuttig, ongeacht wat je met je erts doet (verkopen of zelf verwerken).<br><br><strong>Bijzonder effect:</strong> Hogere rang in Master Miner geeft je de mogelijkheid om <em>Motherlodes</em> te vinden — super-rijke nodes die vijf keer zoveel erts geven als een normale node. Die zitten verstopt in moeilijk bereikbare hoeken van zones.',
        en:'<strong>What does it do?</strong> The foundation of Mining: you mine faster, get more ore per node, and the chance of rare secondary drops (gems, scarce Primal Earth pieces) increases. Every strike on a rock yields more.<br><br><strong>Why always first?</strong> This is the best return-per-KP investment. More ore per node = more materials per hour = more gold. Simple and always useful regardless of what you do with your ore (sell or process yourself).<br><br><strong>Special effect:</strong> Higher rank in Master Miner lets you find <em>Motherlodes</em> — super-rich nodes that give five times as much ore as a normal node. These are hidden in hard-to-reach corners of zones.',
        da:'<strong>Hvad gør det?</strong> Fundamentet i Minedrift: du miner hurtigere, får mere malm pr. node og chancen for sjældne sekundære drops stiger.<br><br><strong>Hvorfor altid først?</strong> Bedste afkast pr. KP. Mere malm pr. node = mere guld.<br><br><strong>Særlig effekt:</strong> Højere rang giver dig mulighed for at finde <em>Motherlodes</em> — super-rige noder der giver fem gange så meget malm som en normal node.'
      },
      points:{nl:'30 punten — absolute basis, altijd als eerste investeren',en:'30 points — absolute foundation, always invest here first',da:'30 point — absolut fundament, invester altid her først'}
    },
    {
      title:{nl:'💎 Boom 2 — Plentiful Ores · meer ore per node en betere kwaliteit',en:'💎 Tree 2 — Plentiful Ores · more ore per node and better quality',da:'💎 Træ 2 — Plentiful Ores · mere malm pr. node og bedre kvalitet'},
      desc:{
        nl:'<strong>Wat zijn Explosives?</strong> Je craft kleine bommen die je bij een cluster van nodes gooit. De explosie beschadigt en opent meerdere nodes tegelijk — je minet ze dan allemaal zonder ze één voor één te hoeven bewerken. In drukke zones waar nodes dicht bij elkaar staan is dit extreem efficient.<br><br><strong>Hoe maak je ze?</strong> Je hebt Engineering niet nodig — je maakt ze zelf via de Mining-boom. Materialen zijn goedkoop: een paar Primal Earth stukjes en wat ijzer.<br><br><strong>Wanneer kiezen?</strong> Als je gericht farmt voor grote hoeveelheden erts in korte tijd. Ideaal als je Blacksmithing hebt en veel materialen nodig hebt, of als je bulk-verkoopt op het AH.<br><br><strong>Nadeel:</strong> De explosies maken lawaai en trekken aandacht van omliggende mobs. In drukke PvP-zones kun je zo ongewenste aandacht krijgen.',
        en:'<strong>What are Explosives?</strong> You craft small bombs that you throw at a cluster of nodes. The explosion damages and opens multiple nodes at once — you then mine them all without having to work them one by one. In busy zones where nodes are close together this is extremely efficient.<br><br><strong>How do you make them?</strong> You do not need Engineering — you make them yourself via the Mining tree. Materials are cheap: a few Primal Earth pieces and some iron.<br><br><strong>When to choose?</strong> If you actively farm for large quantities of ore in a short time. Ideal if you have Blacksmithing and need many materials, or if you bulk-sell on the AH.<br><br><strong>Downside:</strong> The explosions make noise and draw attention from surrounding mobs.',
        en:'<strong>Hvad er Eksplosiver?</strong> Du laver små bomber der kastes ved en klynge af noder. Eksplosionen åbner flere noder på én gang — du miner dem alle uden at bearbejde dem én for én.<br><br><strong>Hvornår vælge det?</strong> Hvis du aktivt farmer store mængder malm på kort tid. Ideelt med Blacksmithing eller bulk-salg på AH.'
      },
      points:{nl:'20 punten — combineer met boom 1 voor maximale farming output',en:'20 points — combine with tree 1 for maximum farming output',da:'20 point — kombiner med træ 1 for maksimal farmingoutput'}
    },
    {
      title:{nl:'🔮 Boom 3 — Over-LODED · overload infused deposits voor motes',en:'🔮 Tree 3 — Over-LODED · overload infused deposits for motes',da:'🔮 Træ 3 — Over-LODED · overload infused deposits for motes'},
      desc:{
        nl:'<strong>Wat zijn Survey Tools?</strong> Je craft een Survey Tool (verrekijker + kompas combinatie) en gebruikt hem in een zone. Hij geeft een pijl aan in de richting van de <em>dichtstbijzijnde zeldzame node</em> — Void-Touched Ore, Primal nodes, of Hidden Vaults. Zonder dit systeem zou je die nodes nooit vinden, want ze staan niet op de normale minimap.<br><br><strong>Wat zijn Hidden Vaults?</strong> Verborgen kisten en nodes diep in mijnen of achter puzzels. Ze bevatten grote hoeveelheden erts én kans op Primal Earth — het duurste Mining-materiaal. Alleen met Survey Tools kun je ze consistent vinden.<br><br><strong>Wanneer kiezen?</strong> Als je al boom 1 hebt en de markt begrijpt. Survey Mastery is voor spelers die gericht de duurste materialen willen farmen in plaats van bulk-erts.',
        en:'<strong>What are Survey Tools?</strong> You craft a Survey Tool and use it in a zone. It shows an arrow pointing toward the <em>nearest rare node</em> — Void-Touched Ore, Primal nodes, or Hidden Vaults. Without this system you would never find those nodes, as they are not on the normal minimap.<br><br><strong>What are Hidden Vaults?</strong> Hidden chests and nodes deep in mines or behind puzzles. They contain large amounts of ore plus a chance at Primal Earth — the most expensive Mining material. Only with Survey Tools can you find them consistently.<br><br><strong>When to choose?</strong> Once you have tree 1 and understand the market. Survey Mastery is for players who want to specifically farm the most expensive materials.',
        da:'<strong>Hvad er Survey Tools?</strong> Du laver et Survey Tool og bruger det i en zone. Det viser en pil mod den <em>nærmeste sjældne node</em> — Void-Touched Ore, Primal-noder eller Skjulte Hvælvinger.<br><br><strong>Hvad er Skjulte Hvælvinger?</strong> Skjulte kister og noder dybt i miner. De indeholder store mængder malm plus chance for Primal Earth — det dyreste Mining-materiale.'
      },
      points:{nl:'20 punten — kies dit voor gerichte farming van zeldzame materialen',en:'20 points — choose this for targeted farming of rare materials',da:'20 point — vælg dette til målrettet farming af sjældne materialer'}
    },

  ],
  items:[
    {icon:'🪨',name:{nl:'Void-Iron Ore',en:'Void-Iron Ore',da:'Void-Iron Malm'},desc:{nl:'Het meest voorkomende Mining-materiaal in Midnight. Valt van bijna alle standaard nodes. Basisingrediënt voor Blacksmithing en Engineering. Altijd verkoopbaar, stabiele vraag.',en:'The most common Mining material in Midnight. Drops from almost all standard nodes. Base ingredient for Blacksmithing and Engineering. Always sellable, stable demand.',da:'Det mest almindelige Mining-materiale. Dropper fra næsten alle standardnoder. Basingrediens til Blacksmithing og Engineering.'},tag:'material'},
    {icon:'💎',name:{nl:'Void-Iron Bar (gesmolten)',en:'Void-Iron Bar (smelted)',da:'Void-Iron Barre (smeltet)'},desc:{nl:'Gesmolten versie van Void-Iron Ore. Verkoop dit in plaats van ruwe erts — crafters betalen meer voor het gemak. Maak je zelf met de smidse in elke grote stad.',en:'Smelted version of Void-Iron Ore. Sell this instead of raw ore — crafters pay more for the convenience. Make it yourself at the forge in any major city.',da:'Smeltet version af Void-Iron Ore. Sælg dette i stedet for rå malm — crafters betaler mere for bekvemmelighed.'},tag:'material'},
    {icon:'⭐',name:{nl:'Primal Earth',en:'Primal Earth',da:'Primal Jord'},desc:{nl:'Het zeldzaamste Mining-materiaal. Valt zelden uit normale nodes, maar consistent uit Hidden Vaults (gevonden met Survey Tools). Gevraagd voor de beste BS/Engineering crafts. Altijd hoge AH-prijs.',en:'The rarest Mining material. Rarely drops from normal nodes, but consistently from Hidden Vaults (found with Survey Tools). Needed for the best BS/Engineering crafts. Always high AH price.',da:'Det sjældneste Mining-materiale. Konsistent fra Skjulte Hvælvinger (fundet med Survey Tools). Altid høj AH-pris.'},tag:'material'},
    {icon:'🔮',name:{nl:'Void-Touched Ore',en:'Void-Touched Ore',da:'Void-Touched Malm'},desc:{nl:'Zeldzamere erts gevonden in specifieke Void-zones. Nodig voor de beste engineering en magische smeedrecepten. Aanmerkelijk meer waard dan gewoon Void-Iron. Goede prijs op AH.',en:'Rarer ore found in specific Void zones. Needed for the best engineering and magical smithing recipes. Considerably more valuable than normal Void-Iron. Good price on AH.',da:'Sjældnere malm fundet i specifikke Void-zoner. Nødvendig til de bedste engineering- og magiske smideopskrifter.'},tag:'material'},
    {icon:'💍',name:{nl:'Rough Gems (bijvangst)',en:'Rough Gems (bycatch)',da:'Grove Ædelstene (bifangst)'},desc:{nl:'Vallen soms mee als je erts minet — bijvangst. Juwelier (Jewelcrafting) heeft ze nodig om sieraden te maken. Kleine extra inkomstenstroom zonder extra moeite. Altijd de moeite waard om op te rapen.',en:'Sometimes drop when you mine ore — bycatch. Jewelcrafting needs them to make jewelry. Small extra income stream without extra effort. Always worth picking up.',da:'Dropper nogle gange når du miner malm — bifangst. Jewelcrafting har brug for dem til smykker. Lille ekstra indkomst uden ekstra indsats.'},tag:'material'}
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
<div class="tip-box"><strong>💡 Best tip for Mining:</strong> Get a fast flying mount if you do not have one. Mining is the profession where movement speed matters most. A 10% faster mount means literally 10% more ore per hour, every day.</div>`,
    da:`<div class="co-step"><div class="co-title">📦 Minedrift har ingen Crafting Orders — men en smart salgsstrategi</div><div class="co-desc">Som Skinning er Minedrift en indsamlingsprofession — du laver intet, så der er ingen Crafting Orders. Du har <strong>Auction House</strong> og direkte salg til spillere.<br><br>Forskel fra Skinning: Mining-materialer har direkte kæde til tre store craftingprofessioner (Blacksmithing, Engineering, Jewelcrafting) — kæmpe kundekreds.</div></div>
<div class="co-step"><div class="co-title">💰 Hvad sælger bedst?</div><div class="co-desc">
  <strong>🥇 Primal Earth</strong> — Sjældnest, fundet med Survey Tools, stabilt høj pris<br>
  <strong>🥈 Reinforced Void-Iron Bar</strong> — Forarbejdet malm, Blacksmiths foretrækker dette<br>
  <strong>🥉 Void-Iron Bar</strong> — Ét skridt over rå malm, god pris<br>
  <strong>Void-Iron Ore</strong> — Lavest pris men største mængder
</div></div>
<div class="co-step"><div class="co-title">📅 Daglig rutine</div><div class="co-desc">
  <strong>1. Kør din faste rute</strong> — 10-15 min pr. fuld rute, konsistent malm<br>
  <strong>2. Brug Survey Tool</strong> — Peger mod sjældne Primal-noder og Skjulte Hvælvinger<br>
  <strong>3. Smelt til sidst</strong> — Smelt al rå malm til barrer, så til AH
</div></div>
<div class="tip-box"><strong>💡 Bedste tip:</strong> Skaf et hurtigt flyvende mount. 10% hurtigere mount = 10% mere malm pr. time, hver dag.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-mining-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/mining-leveling-guide'
};

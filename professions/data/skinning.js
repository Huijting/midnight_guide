// SKINNING DATA
const SKINNING = {
  id:'skinning', icon:'🐾', cat:'gathering', accent:'#8B6347',
  name:{nl:'Skinning',en:'Skinning',da:'Skindbehandling'},
  tier:'B',
  lore:{
    nl:'Skinning heeft de meeste veranderingen van alle gathering professions in Midnight. High Value Beasts verschijnen op je minimap, Diffusers geven extra Motes, en Lures roepen zeldzame Renowned Beasts op voor de duurste materialen. Combineert perfect met Leatherworking.',
    en:'Skinning received the most changes of all gathering professions in Midnight. High Value Beasts appear on your minimap, Diffusers give extra Motes, and Lures summon rare Renowned Beasts for the most valuable materials. Pairs perfectly with Leatherworking.',
    da:'Skindbehandling modtog de fleste ændringer af alle indsamlingsprofessioner i Midnight. High Value Beasts vises på dit minimap, Diffusers giver ekstra Motes, og Lures kalder sjældne Renowned Beasts frem.'
  },
  goldrating:3, userating:3,
  trainer:{
    name:'Tyn',
    loc:{nl:'Bazaar, Silvermoon City — bij de leerverwerking in de Bazaar.',en:'Bazaar, Silvermoon City — at the leather processing in the Bazaar.',da:'Bazaar, Silvermoon City — ved lædertilberedningen i Bazaar.'},
    way:'/way Eversong Woods 44.2 52.3',
    note:{nl:'Heb Cooking nodig voor Lure-recepten — leer Cooking ook als je Majestic materials wilt!',en:'You need Cooking for Lure recipes — learn Cooking too if you want Majestic materials!',da:'Du skal bruge Madlavning til Lure-opskrifter — lær Madlavning også hvis du vil have Majestic-materialer!'}
  },
  specs:[
    {title:{nl:'Stap 1 — Thorough Tanning',en:'Step 1 — Thorough Tanning',da:'Trin 1 — Thorough Tanning'},
     desc:{nl:'Je wordt beter in het verwerken van de huid, waardoor je meer materialen krijgt per skin. Meer Void-Tempered Leather en Scales per beest = meer goud per uur! Verplichte eerste investering.',en:'You get better at processing hides, getting more materials per skin. More Void-Tempered Leather and Scales per beast = more gold per hour! Required first investment.',da:'Du bliver bedre til at bearbejde skind og får flere materialer pr. skin. Mere Void-Tempered Leather og Scales pr. dyr = mere guld pr. time!'},
     points:{nl:'25 punten — beschikbaar vanaf skill 25',en:'25 points — available from skill 25',da:'25 point — tilgængelig fra færdighed 25'}},
    {title:{nl:'Stap 2 — Gainful Gathering',en:'Step 2 — Gainful Gathering',da:'Trin 2 — Gainful Gathering'},
     desc:{nl:'Vergroot je kansen op zeldzame drops: Hide, Plating en andere bijzondere materialen. Minder totaal materialen, maar de dure materialen vaker. Ideaal als je goud wilt maximaliseren.',en:'Increases your chances of rare drops: Hide, Plating, and other special materials. Fewer total materials, but more of the expensive ones. Ideal for maximizing gold.',da:'Øger dine chancer for sjældne drops: Hide, Plating og andre specielle materialer. Færre materialer i alt, men flere af de dyre.'},
     points:{nl:'20 punten — beschikbaar vanaf skill 25',en:'20 points — available from skill 25',da:'20 point — tilgængelig fra færdighed 25'}},
    {title:{nl:'Stap 3 — Talented Tracker',en:'Step 3 — Talented Tracker',da:'Trin 3 — Talented Tracker'},
     desc:{nl:'Verbetert het High Value Beast systeem. Je vindt ze sneller, ze spawnen vaker, en je krijgt er nog meer materialen van. Ideaal als je gericht wilt farmen.',en:'Improves the High Value Beast system. You find them faster, they spawn more often, and you get even more materials from them. Ideal for focused farming.',da:'Forbedrer High Value Beast-systemet. Du finder dem hurtigere, de spawner oftere, og du får endnu flere materialer fra dem.'},
     points:{nl:'15 punten — beschikbaar vanaf skill 25',en:'15 points — available from skill 25',da:'15 point — tilgængelig fra færdighed 25'}},
    {title:{nl:'Stap 4 — Lure Mastery',en:'Step 4 — Lure Mastery',da:'Trin 4 — Lure Mastery'},
     desc:{nl:'Lures zijn VERPLICHT voor Majestic materials (Fin/Claw/Hide). Elke zone heeft een eigen Lure. Lure Mastery verhoogt drop-kans van Majestic materials aanzienlijk. Let op: je hebt Cooking nodig voor Lure-recepten!',en:'Lures are REQUIRED for Majestic materials (Fin/Claw/Hide). Each zone has its own Lure. Lure Mastery significantly increases Majestic drop chance. Note: you need Cooking for Lure recipes!',da:'Lures er OBLIGATORISKE for Majestic-materialer. Lure Mastery øger dropchancen markant. Bemærk: du har brug for Madlavning til Lure-opskrifter!'},
     points:{nl:'20 punten — beschikbaar na Thorough Tanning',en:'20 points — available after Thorough Tanning',da:'20 point — tilgængelig efter Thorough Tanning'}}
  ],
  items:[
    {icon:'🦎',name:{nl:'Void-Tempered Leather',en:'Void-Tempered Leather',da:'Void-Tempered Leather'},desc:{nl:'Meest voorkomend. Van bijna elk beest. Basis voor alle LW leather-armor recepten.',en:'Most common. From almost any beast. Base for all LW leather armor recipes.',da:'Mest almindelig. Fra næsten alle dyr. Base til alle LW-rustningsopskrifter.'},tag:'material'},
    {icon:'🐍',name:{nl:'Void-Tempered Scales',en:'Void-Tempered Scales',da:'Void-Tempered Scales'},desc:{nl:'Van reptielen en draak-achtige beesten. Nodig voor Mail armor (Hunters, Shamans).',en:'From reptiles and dragon-like beasts. Required for Mail armor (Hunters, Shamans).',da:'Fra krybdyr og drageagtige dyr. Kræves til brynjrustning (Hunters, Shamans).'},tag:'material'},
    {icon:'🦴',name:{nl:'Void-Tempered Hide',en:'Void-Tempered Hide',da:'Void-Tempered Hide'},desc:{nl:'Dikker en sterker leer, zeldzamer. Van High Value Beasts. Voor gevorderde LW-recepten.',en:'Thicker and stronger, rarer. From High Value Beasts. For advanced LW recipes.',da:'Tykkere og stærkere, sjældnere. Fra High Value Beasts. Til avancerede LW-opskrifter.'},tag:'material'},
    {icon:'🦅',name:{nl:'Majestic Fin / Claw / Hide',en:'Majestic Fin / Claw / Hide',da:'Majestic Fin / Claw / Hide'},desc:{nl:'Zeldzaamst! Alleen via Lures op Renowned Beasts. 1x per dag per zone. Altijd hoge AH-prijs.',en:'Rarest! Only via Lures on Renowned Beasts. 1x per day per zone. Always high AH price.',da:'Sjældnest! Kun via Lures på Renowned Beasts. 1x om dagen pr. zone. Altid høj AH-pris.'},tag:'material'},
    {icon:'✨',name:{nl:'Motes (via Diffusers)',en:'Motes (via Diffusers)',da:'Motes (via Diffusers)'},desc:{nl:'Gooi Diffuser op beest → skin → krijg meer Motes terug dan het kostte. Passief extra goud.',en:'Throw Diffuser on beast → skin → get back more Motes than it cost. Passive extra gold.',da:'Kast Diffuser på dyr → skind → få flere Motes tilbage end det kostede. Passiv guld.'},tag:'material'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">Skinning & de markt</div><div class="co-desc">Geen crafting orders voor gathering professions — je verkoopt alles op het Auction House of direct aan Leatherworkers.<br><br><strong>Beste verkopers:</strong><br>• Majestic Fin/Claw/Hide — zeldzaam, altijd hoge prijs<br>• Void-Tempered Hide — gevraagd voor epic LW-recepten<br>• Void-Tempered Scales — constant gevraagd voor mail armor</div></div>
<div class="co-step"><div class="co-title">💡 Drie dagelijkse systemen</div><div class="co-desc"><strong>1. High Value Beasts</strong> — gloeiende beesten op minimap geven 3-4x meer leer. Altijd prioriteit!<br><br><strong>2. Diffusers</strong> — craft Diffusers van Motes, gooi op beest, skin. Je krijgt meer Motes terug dan het kostte.<br><br><strong>3. Lures (dagelijks!)</strong> — 1 Renowned Beast per zone per dag. Vier zones = vier kansen op Majestic per dag. Duurt maar 5 minuten per zone!</div></div>
<div class="tip-box"><strong>💡 Pro Tip:</strong> Skin ook beesten van andere spelers die ze niet skinnen. Zij hebben al de loot — jij krijgt de huid gratis!</div>`,
    en:`<div class="co-step"><div class="co-title">Skinning & the market</div><div class="co-desc">No crafting orders for gathering professions — sell everything on the Auction House or directly to Leatherworkers.<br><br><strong>Best sellers:</strong><br>• Majestic Fin/Claw/Hide — rare, always high price<br>• Void-Tempered Hide — needed for epic LW recipes<br>• Void-Tempered Scales — constant demand for mail armor</div></div>
<div class="co-step"><div class="co-title">💡 Three daily systems</div><div class="co-desc"><strong>1. High Value Beasts</strong> — glowing beasts on minimap give 3-4x more leather. Always priority!<br><br><strong>2. Diffusers</strong> — craft Diffusers from Motes, throw on beast, skin. Get back more Motes than it cost.<br><br><strong>3. Lures (daily!)</strong> — 1 Renowned Beast per zone per day. Four zones = four Majestic chances daily. Only 5 minutes per zone!</div></div>
<div class="tip-box"><strong>💡 Pro Tip:</strong> Skin other players' kills they didn't skin — they already took the loot, you get the hide for free!</div>`,
    da:`<div class="co-step"><div class="co-title">Skindbehandling & markedet</div><div class="co-desc">Ingen håndværksordrer — sælg alt på Auction House eller direkte til Leatherworkere.<br><br><strong>Bedste sælgere:</strong><br>• Majestic Fin/Claw/Hide — sjælden, altid høj pris<br>• Void-Tempered Hide — kræves til epic LW-opskrifter<br>• Void-Tempered Scales — konstant efterspørgsel</div></div>
<div class="co-step"><div class="co-title">💡 Tre daglige systemer</div><div class="co-desc"><strong>1. High Value Beasts</strong> — glødende dyr på minimap giver 3-4x mere læder.<br><br><strong>2. Diffusers</strong> — lav Diffusers af Motes, kast på dyr, skind. Få flere Motes tilbage.<br><br><strong>3. Lures (dagligt!)</strong> — 1 Renowned Beast pr. zone pr. dag. Fire zoner = fire Majestic-chancer dagligt.</div></div>
<div class="tip-box"><strong>💡 Pro Tip:</strong> Skind også andre spilleres bytte de ikke skindede — gratis materialer!</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-skinning-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/skinning-specialization-guide-and-builds'
};

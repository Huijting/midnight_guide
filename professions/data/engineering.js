// ENGINEERING DATA
const ENGINEERING = {
  id:'engineering', icon:'🔩', cat:'crafting', accent:'#e0893a',
  name:{nl:'Engineering',en:'Engineering',da:'Ingeniørkunst'},
  tier:'B',
  lore:{
    nl:'Utility-koningsklasse. Engineering maakt gadgets, brillen, wapens en gold via Recycling. Minder stabiel dan Alchemy/Enchanting, maar unieke items die andere professions niet kunnen maken.',
    en:'Utility king. Engineering makes gadgets, goggles, weapons and gold via Recycling. Less stable than Alchemy/Enchanting, but unique items that other professions can\'t make.',
    da:'Utility-kongen. Ingeniørkunst laver gadgets, briller, våben og guld via Recycling.'
  },
  goldrating:3, userating:4,
  trainer:{
    name:'Danwe',
    loc:{nl:'Bazaar, Silvermoon City — westkant, ten zuiden van de brug naar Isle of Quel\'Danas.',en:'Bazaar, Silvermoon City — west side, south of the bridge to Isle of Quel\'Danas.',da:'Bazaar, Silvermoon City — vestside, syd for broen til Isle of Quel\'Danas.'},
    way:'/way Eversong Woods 44.1 50.8',
    note:{nl:'Engineering heeft Recycling als uniek systeem: items omzetten geeft Evercore of Aetherlume. Handige manier om leveling-costs te compenseren.',en:'Engineering has Recycling as a unique system: converting items gives Evercore or Aetherlume. Useful way to compensate leveling costs.',da:'Ingeniørkunst har Recycling som unikt system: konvertering af genstande giver Evercore eller Aetherlume.'}
  },
  specs:[
    {title:{nl:'Stap 1 — Recycling (verplicht basistak)',en:'Step 1 — Recycling (required base branch)',da:'Trin 1 — Recycling (krævet grundgren)'},
     desc:{nl:'Recycling is het hart van Engineering in Midnight. Je recyclet crafted items voor Evercore of Aetherlume — de hoofdmaterialen voor Engineering crafts. Hoe je level, is deels random door wat je ontdekt via recycling.',en:'Recycling is the heart of Engineering in Midnight. You recycle crafted items for Evercore or Aetherlume — the core materials for Engineering crafts. Leveling is partly random based on what you discover via recycling.',da:'Recycling er hjertet i Ingeniørkunst i Midnight. Du recycler items for Evercore eller Aetherlume.'},
     points:{nl:'20–25 punten in Recycling-tak',en:'20–25 points in Recycling branch',da:'20–25 point i Recycling-gren'}},
    {title:{nl:'Stap 2 — Kies hoofdbuild: Combat Gear / Hunter Tools',en:'Step 2 — Choose main build: Combat Gear / Hunter Tools',da:'Trin 2 — Vælg hovedbuild: Combat Gear / Hunter Tools'},
     desc:{nl:'• Combat Gear: Goggles (BiS helm voor Engineers), explosives, combat gadgets.\n• Hunter Tools: Ammunition (1u combat buff) en Scopes voor ranged weapons — uniek voor Engineers. Grote Midnight-toevoeging.\n• Profession Tools: Engineering maakt tools voor andere professions — hoog launch-goud.',en:'• Combat Gear: Goggles (BiS helm for Engineers), explosives, combat gadgets.\n• Hunter Tools: Ammunition (1hr combat buff) and Scopes for ranged weapons — unique to Engineers. Major Midnight addition.\n• Profession Tools: Engineering crafts tools for other professions — high launch gold.',da:'• Combat Gear: Briller (BiS hjelm), sprængstoffer, kampgadgets.\n• Hunter Tools: Ammunition (1t kampbuff) og Scopes til rangvåben.\n• Professions-redskaber: høj launch-guld.'},
     points:{nl:'30–35 punten in gekozen hoofdbuild',en:'30–35 points in chosen main build',da:'30–35 point i valgt hovedbuild'}},
    {title:{nl:'Stap 3 — Gadgets & Housing (level 80)',en:'Step 3 — Gadgets & Housing (level 80)',da:'Trin 3 — Gadgets & Housing (niveau 80)'},
     desc:{nl:'Op level 80 unlock je housing decor-recepten. Duur om te craften maar uniek op de AH. Vergeet ook niet dagelijkse cooldowns voor passief Evercore/Aetherlume.',en:'At level 80 you unlock housing decor recipes. Expensive to craft but unique on the AH. Don\'t forget daily cooldowns for passive Evercore/Aetherlume.',da:'På niveau 80 låser du op for boligindretnings-opskrifter.'},
     points:{nl:'20 punten in Housing / resterende punten naar Gadgets',en:'20 points in Housing / remaining points to Gadgets',da:'20 point i Housing / resterende point til Gadgets'}}
  ],
  items:[
    {icon:'🥽',name:{nl:'Engineering Goggles (Helm)',en:'Engineering Goggles (Helm)',da:'Ingeniør-briller (Hjelm)'},desc:{nl:'BiS helm voor Engineers. Uniek — alleen te maken door Engineers.',en:'BiS helm for Engineers. Unique — only craftable by Engineers.',da:'BiS hjelm for Ingeniører. Unik — kun håndværkbare af Ingeniører.'},tag:'gear'},
    {icon:'💣',name:{nl:'Combat Gadgets (Grenades, Bombs)',en:'Combat Gadgets (Grenades, Bombs)',da:'Kampgadgets (Granater, Bomber)'},desc:{nl:'Schade en CC cooldowns. Uniek voor Engineers in dungeons.',en:'Damage and CC cooldowns. Unique for Engineers in dungeons.',da:'Skade- og CC-cooldowns. Unikke for Ingeniører i dungeons.'},tag:'utility'},
    {icon:'🔧',name:{nl:'Profession Tools (Enchanting Rods, etc.)',en:'Profession Tools (Enchanting Rods, etc.)',da:'Professions-redskaber'},desc:{nl:'Engineering maakt tools voor andere professions. Hoge waarde launch week.',en:'Engineering crafts tools for other professions. High value launch week.',da:'Ingeniørkunst laver redskaber til andre professioner.'},tag:'utility'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">Engineering Orders</div><div class="co-desc">Engineering heeft minder public orders dan Alchemy of Enchanting, maar unieke items creëren hun eigen niche. Brillen en combat gear zijn de populairste order-items.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> De Recycling-build is het beste voor passief goud zonder veel moeite. Combineer met dagelijkse cooldowns.</div>`,
    en:`<div class="co-step"><div class="co-title">Engineering Orders</div><div class="co-desc">Engineering has fewer public orders than Alchemy or Enchanting, but unique items create their own niche. Goggles and combat gear are the most popular order items.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> The Recycling build is best for passive gold without much effort. Combine with daily cooldowns.</div>`,
    da:`<div class="co-step"><div class="co-title">Ingeniørkunst-ordrer</div><div class="co-desc">Ingeniørkunst har færre offentlige ordrer end Alkymi eller Fortryllelse, men unikke genstande skaber deres egen niche.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Recycling-buildet er bedst til passiv guld.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-engineering-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/engineering-specialization-guide-and-builds'
};

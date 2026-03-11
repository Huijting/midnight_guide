// SKINNING DATA
const SKINNING = {
  id:'skinning', icon:'🐾', cat:'gathering', accent:'#8B6347',
  name:{nl:'Skinning',en:'Skinning',da:'Skindbehandling'},
  tier:'B',
  lore:{
    nl:'Skinning heeft de meeste veranderingen van alle gathering professions in Midnight. Het Lure-systeem is nu verplicht voor zeldzame Majestic materials. Combineert goed met Leatherworking.',
    en:'Skinning received the most changes of all gathering professions in Midnight. The Lure system is now mandatory for rare Majestic materials. Combines well with Leatherworking.',
    da:'Skindbehandling modtog de fleste ændringer af alle indsamlingsprofessioner i Midnight.'
  },
  goldrating:3, userating:3,
  trainer:{
    name:'Tyn',
    loc:{nl:'Bazaar, Silvermoon City — bij de leerverwerking in de Bazaar.',en:'Bazaar, Silvermoon City — at the leather processing in the Bazaar.',da:'Bazaar, Silvermoon City — ved lædertilberedningen i Bazaar.'},
    way:'/way Eversong Woods 44.2 52.3',
    note:{nl:'Skinning maakt nu Lures via Cooking — heb je Cooking nodig voor Majestic materials.',en:'Skinning now makes Lures via Cooking — you need Cooking for Majestic materials.',da:'Skindbehandling laver nu Lokker via Madlavning.'}
  },
  specs:[
    {title:{nl:'Stap 1 — Skinning Mastery (25 punten)',en:'Step 1 — Skinning Mastery (25 points)',da:'Trin 1 — Skindbehandlings-beherskelse (25 point)'},
     desc:{nl:'Verhoogt base yield. Direct meer leather per skin. Verplichte eerste investering.',en:'Increases base yield. Directly more leather per skin. Required first investment.',da:'Øger basisudbytte. Direkte mere læder pr. hud.'},
     points:{nl:'25 punten in Skinning Mastery',en:'25 points in Skinning Mastery',da:'25 point i Skinning Mastery'}},
    {title:{nl:'Stap 2 — Lure Mastery',en:'Step 2 — Lure Mastery',da:'Trin 2 — Lokke-beherskelse'},
     desc:{nl:'Lures zijn VERPLICHT voor Majestic materials (Fin/Claw/Hide). Elke zone heeft een eigen Lure. Lure Mastery verhoogt drop-kans van Majestic materials aanzienlijk.',en:'Lures are REQUIRED for Majestic materials (Fin/Claw/Hide). Each zone has its own Lure. Lure Mastery significantly increases Majestic material drop chance.',da:'Lokker er OBLIGATORISKE for Majestic-materialer. Lure Mastery øger dropchancen markant.'},
     points:{nl:'20 punten in Lure Mastery',en:'20 points in Lure Mastery',da:'20 point i Lure Mastery'}},
    {title:{nl:'Stap 3 — Diffuser Mastery',en:'Step 3 — Diffuser Mastery',da:'Trin 3 — Diffuser-beherskelse'},
     desc:{nl:'Diffusers gebruik je op beesten om extra Motes te krijgen. Craft van 2 Motes, krijg er meer terug. Goed voor passief extra goud.',en:'Use Diffusers on beasts to get extra Motes. Craft from 2 Motes, get more back. Good for passive extra gold.',da:'Brug Diffusers på dyr for at få ekstra Motes.'},
     points:{nl:'15 punten in Diffuser Mastery',en:'15 points in Diffuser Mastery',da:'15 point i Diffuser Mastery'}}
  ],
  items:[
    {icon:'🦎',name:{nl:'Void-Tempered Leather/Hide/Scales',en:'Void-Tempered Leather/Hide/Scales',da:'Void-Tempered Leather/Hide/Scales'},desc:{nl:'Basis Skinning materials voor Leatherworking.',en:'Basic Skinning materials for Leatherworking.',da:'Basis skindmaterialer til Læderhåndværk.'},tag:'material'},
    {icon:'🦅',name:{nl:'Majestic Fin/Claw/Hide',en:'Majestic Fin/Claw/Hide',da:'Majestic Fin/Claw/Hide'},desc:{nl:'Zeldzaam — alleen via Lures. Hoge AH-waarde.',en:'Rare — only via Lures. High AH value.',da:'Sjælden — kun via Lokker. Høj AH-værdi.'},tag:'material'},
    {icon:'✨',name:{nl:'Motes (via Diffusers)',en:'Motes (via Diffusers)',da:'Motes (via Diffusers)'},desc:{nl:'Extra motes via infused beesten. Sold op AH.',en:'Extra motes via infused beasts. Sold on AH.',da:'Ekstra motes via inficerede dyr.'},tag:'material'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">Skinning & de markt</div><div class="co-desc">Geen crafting orders voor gathering professions. Leather en hide verkopen op AH of direct aan Leatherworkers. Majestic materials zijn zeldzaam en duur — prioriteer Lure-farming.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> High Value Beasts geven 3-4x meer materials dan gewone mobs. Ze spawnen random maar zijn het waard als je ze tegenkomt.</div>`,
    en:`<div class="co-step"><div class="co-title">Skinning & the market</div><div class="co-desc">No crafting orders for gathering professions. Sell leather and hide on AH or directly to Leatherworkers. Majestic materials are rare and expensive — prioritize Lure farming.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> High Value Beasts give 3-4x more materials than regular mobs. They spawn randomly but are worth it when encountered.</div>`,
    da:`<div class="co-step"><div class="co-title">Skindbehandling & markedet</div><div class="co-desc">Ingen håndværksordrer til indsamlingsprofessioner. Sælg læder og skind på AH.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> High Value Beasts giver 3-4x flere materialer end almindelige monstre.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-skinning-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/skinning-specialization-guide-and-builds'
};

// TAILORING DATA
const TAILORING = {
  id:'tailoring', icon:'🧵', cat:'crafting', accent:'#e8c840',
  name:{nl:'Tailoring',en:'Tailoring',da:'Skrædderi'},
  tier:'B',
  lore:{
    nl:'Maakt cloth-armor voor casters. Geen gathering-profession nodig — cloth farmt iedereen. Unraveling is verwijderd: cloth gaat nu direct naar cloth bolts.',
    en:'Makes cloth armor for casters. No gathering profession needed — everyone farms cloth. Unraveling removed: cloth goes directly to cloth bolts now.',
    da:'Laver stof-rustning til castere. Ingen indsamlingsprofession nødvendig — alle farmer stof.'
  },
  goldrating:3, userating:3,
  trainer:{
    name:'Galana',
    loc:{nl:'Bazaar, Silvermoon City — oostkant, iets ten noorden van Murder Row.',en:'Bazaar, Silvermoon City — east side, slightly north of Murder Row.',da:'Bazaar, Silvermoon City — østside, lidt nord for Murder Row.'},
    way:'/way Eversong Woods 47.3 51.8',
    note:{nl:'Unlock Arcanoweave en Sunfire Silk cloth ASAP (level 25, 20 punten in Nimble Needlework).',en:'Unlock Arcanoweave and Sunfire Silk cloth ASAP (level 25, 20 points in Nimble Needlework).',da:'Lås Arcanoweave og Sunfire Silk op hurtigst muligt (niveau 25, 20 point i Nimble Needlework).'}
  },
  specs:[
    {title:{nl:'Stap 1 — Nimble Needlework (20 punten) — VERPLICHT EERST',en:'Step 1 — Nimble Needlework (20 points) — DO THIS FIRST',da:'Trin 1 — Nimble Needlework (20 point) — GØR DETTE FØRST'},
     desc:{nl:'Geeft toegang tot Arcanoweave en Sunfire Silk — speciale cloth die alleen valt als je 20 punten hebt. Begin dit TIJDENS het levelen zodat je vroeg drops krijgt.',en:'Unlocks Arcanoweave and Sunfire Silk — special cloth that only drops with 20 points. Start this WHILE leveling so you get drops early.',da:'Giver adgang til Arcanoweave og Sunfire Silk. Start dette MENS du leveler for at få drops tidligt.'},
     points:{nl:'20 punten in Nimble Needlework (verplicht voor alle builds)',en:'20 points in Nimble Needlework (required for all builds)',da:'20 point i Nimble Needlework (krævet til alle builds)'}},
    {title:{nl:'Stap 2 — Arcanoweave of Sunfire Bolt Weaving (15 punten)',en:'Step 2 — Arcanoweave or Sunfire Bolt Weaving (15 points)',da:'Trin 2 — Arcanoweave eller Sunfire Bolt Weaving (15 point)'},
     desc:{nl:'Geeft een dagelijkse cooldown voor het maken van bolts. Arcanoweave = meer crafting materialen. Sunfire = hogere ilvl gear.',en:'Gives a daily cooldown for making bolts. Arcanoweave = more crafting materials. Sunfire = higher ilvl gear.',da:'Giver en daglig cooldown til fremstilling af bolts.'},
     points:{nl:'15 punten in gekozen bolt-tak',en:'15 points in chosen bolt branch',da:'15 point i valgt bolt-gren'}},
    {title:{nl:'Stap 3 — Armor Specialisatie (Robe/Shoulders/etc.)',en:'Step 3 — Armor Specialization (Robe/Shoulders/etc.)',da:'Trin 3 — Rustningsspecialisering'},
     desc:{nl:'Kies een armor slot. Robe (Chest) is het meest gevraagd voor casters. Investeer 30 punten voor Gold quality crafts.',en:'Choose an armor slot. Robe (Chest) is most in demand for casters. Invest 30 points for Gold quality crafts.',da:'Vælg et rustnings-slot. Robe (Brystsæt) er mest efterspurgt til castere.'},
     points:{nl:'30 punten per armor slot',en:'30 points per armor slot',da:'30 point pr. rustnings-slot'}}
  ],
  items:[
    {icon:'👘',name:{nl:'Cloth Armor Sets (Robe, Shoulders, Legs)',en:'Cloth Armor Sets (Robe, Shoulders, Legs)',da:'Stof-rustningssæt'},desc:{nl:'Gear voor Mages, Priests, Warlocks en meer.',en:'Gear for Mages, Priests, Warlocks and more.',da:'Gear til Mager, Præster, Heksemastre og mere.'},tag:'gear'},
    {icon:'🧵',name:{nl:'Spellthreads (Leg Enchants)',en:'Spellthreads (Leg Enchants)',da:'Trylletråde (Benfortryllelser)'},desc:{nl:'Wordt gecraft door zowel LW als Tailoring. Elke caster wil dit.',en:'Crafted by both LW and Tailoring. Every caster wants this.',da:'Håndværkes af både LW og Skrædderi. Enhver caster vil have dette.'},tag:'consumable'},
    {icon:'🧶',name:{nl:'Arcanoweave & Sunfire Bolts',en:'Arcanoweave & Sunfire Bolts',da:'Arcanoweave & Sunfire Bolts'},desc:{nl:'Crafting reagenten. Hoge AH-waarde bij launch.',en:'Crafting reagents. High AH value at launch.',da:'Håndværksreagenter. Høj AH-værdi ved launch.'},tag:'material'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">Tailoring Orders</div><div class="co-desc">Caster-gear is altijd gevraagd. Cloth wordt door iedereen gedropt — je hebt geen gatherer-alt nodig. Leg enchants (Spellthreads) zijn de meest frequente orders.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Unlock Nimble Needlework voor level 25 — Arcanoweave en Sunfire Silk dropt alleen als je al 20 punten hebt. Mis deze drops niet.</div>`,
    en:`<div class="co-step"><div class="co-title">Tailoring Orders</div><div class="co-desc">Caster gear is always in demand. Cloth is dropped by everyone — no gatherer alt needed. Leg enchants (Spellthreads) are the most frequent orders.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Unlock Nimble Needlework before level 25 — Arcanoweave and Sunfire Silk only drops with 20 points. Don't miss these drops.</div>`,
    da:`<div class="co-step"><div class="co-title">Skrædderi-ordrer</div><div class="co-desc">Caster-gear er altid efterspurgt. Stof droppes af alle — ingen indsamlings-alt nødvendig.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Lås Nimble Needlework op før niveau 25.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-tailoring-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/tailoring-specialization-guide-and-builds'
};

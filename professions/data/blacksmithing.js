// BLACKSMITHING DATA
const BLACKSMITHING = {
  id:'blacksmithing', icon:'⚒', cat:'crafting', accent:'#aaaaaa',
  name:{nl:'Blacksmithing',en:'Blacksmithing',da:'Smedning'},
  tier:'A',
  lore:{
    nl:'Maakt plate-gear en wapens. In Midnight ook essentieel voor profession tools voor andere crafters. Goede vroege-expansion winsten door hoge vraag naar gear.',
    en:'Creates plate gear and weapons. In Midnight also essential for profession tools for other crafters. Good early-expansion profits from high gear demand.',
    da:'Laver plade-gear og våben. I Midnight også essentiel for professions-redskaber til andre håndværkere.'
  },
  goldrating:4, userating:4,
  trainer:{
    name:'Bemarrin',
    loc:{nl:'Bazaar, Silvermoon City — westkant, iets ten zuiden van de brug naar Isle of Quel\'danas.',en:'Bazaar, Silvermoon City — west side, slightly south of the Bridge to Isle of Quel\'danas.',da:'Bazaar, Silvermoon City — vestside, lidt syd for broen til Isle of Quel\'danas.'},
    way:'/way Silvermoon City 48.5 62.0',
    note:{nl:'Recepten voor hogere ilvl gear zijn te kopen bij Blacksmithing vendors met Moxie.',en:'Recipes for higher ilvl gear can be bought from Blacksmithing vendors with Moxie.',da:'Opskrifter til højere ilvl gear kan købes hos Blacksmithing-leverandører med Moxie.'}
  },
  specs:[
    {title:{nl:'Stap 1 — Armorsmithing of Weaponsmithing',en:'Step 1 — Armorsmithing or Weaponsmithing',da:'Trin 1 — Rustningssmide eller Våbensmide'},
     desc:{nl:'Kies vroeg. Armorsmithing voor plate-gear (Warriors, DKs, Paladins). Weaponsmithing voor wapens (altijd vraag).',en:'Choose early. Armorsmithing for plate gear (Warriors, DKs, Paladins). Weaponsmithing for weapons (always in demand).',da:'Vælg tidligt. Rustningssmide til plade-gear. Våbensmide til våben (altid efterspurgt).'},
     points:{nl:'30 punten in gekozen hoofdtak',en:'30 points in chosen main branch',da:'30 point i valgt hovedgren'}},
    {title:{nl:'Stap 2 — Profession Tool Mastery',en:'Step 2 — Profession Tool Mastery',da:'Trin 2 — Professions-redskabsbeherskelse'},
     desc:{nl:'Blacksmithing maakt tools voor meerdere professions. Hoge vraag bij expansion launch — iedereen wil betere tools.',en:'Blacksmithing crafts tools for multiple professions. High demand at expansion launch — everyone wants better tools.',da:'Smedning laver redskaber til flere professioner. Høj efterspørgsel ved expansion-launch.'},
     points:{nl:'25 punten in Tool Mastery-tak',en:'25 points in Tool Mastery branch',da:'25 point i Tool Mastery-gren'}},
    {title:{nl:'Stap 3 — Armor Specialisatie (slot specifiek)',en:'Step 3 — Armor Specialization (slot specific)',da:'Trin 3 — Rustningsspecialisering (slot-specifik)'},
     desc:{nl:'Kies een armor slot: Helm, Chest, Legs, etc. Investeer 30 punten om Gold quality zonder Concentration te bereiken.',en:'Choose an armor slot: Helm, Chest, Legs, etc. Invest 30 points to reach Gold quality without Concentration.',da:'Vælg et rustnings-slot. Invester 30 point for at nå Gold quality uden Concentration.'},
     points:{nl:'30 punten per gekozen slot-specialisatie',en:'30 points per chosen slot specialization',da:'30 point pr. valgt slot-specialisering'}}
  ],
  items:[
    {icon:'⚔',name:{nl:'Crafted Plate Weapons',en:'Crafted Plate Weapons',da:'Smedede Plådevåben'},desc:{nl:'Wapens zijn altijd gevraagd. Makkelijk te sellen via crafting orders.',en:'Weapons are always in demand. Easy to sell via crafting orders.',da:'Våben efterspørges altid.'},tag:'gear'},
    {icon:'🛡',name:{nl:'Plate Armor Sets (Helm/Chest/Legs)',en:'Plate Armor Sets (Helm/Chest/Legs)',da:'Plade-rustningssæt'},desc:{nl:'Hoogste waarde items. Crafting orders voor epic pieces.',en:'Highest value items. Crafting orders for epic pieces.',da:'Højeste værdi genstande.'},tag:'gear'},
    {icon:'🔧',name:{nl:'Profession Tools (Pickaxe, Hammer, etc.)',en:'Profession Tools (Pickaxe, Hammer, etc.)',da:'Professions-redskaber'},desc:{nl:'Launch-week goud. Elke crafter wil betere tools. Koop recepten snel.',en:'Launch-week gold. Every crafter wants better tools. Buy recipes fast.',da:'Launch-uge guld. Alle håndværkere vil have bedre redskaber.'},tag:'utility'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">Crafting Orders voor Blacksmithing</div><div class="co-desc">De meeste orders komen van spelers die plate-gear willen voor eindgame. Zet je op de public orders lijst en wacht tot requests binnenkomen. Reagenten worden vaak meegeleverd door de opdrachtgever.</div></div>
<div class="co-step"><div class="co-title">Recrafting</div><div class="co-desc">Spelers kunnen bij jou upgraden van lagere naar hogere kwaliteit gear. Recrafting kost geen Spark — wel concentration. Dit geeft een stabiele inkomstenstroom naast nieuwe crafts.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Profession tools zijn de beste orders in week 1. Iedereen op de server wil ze tegelijk — wees er vroeg bij.</div>`,
    en:`<div class="co-step"><div class="co-title">Crafting Orders for Blacksmithing</div><div class="co-desc">Most orders come from players wanting plate gear for endgame. List yourself on public orders and wait for requests. Reagents are often provided by the requester.</div></div>
<div class="co-step"><div class="co-title">Recrafting</div><div class="co-desc">Players can upgrade gear quality through you. Recrafting doesn't cost a Spark — but does cost concentration.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Profession tools are the best orders in week 1. Everyone on the server wants them simultaneously — get there early.</div>`,
    da:`<div class="co-step"><div class="co-title">Håndværksordrer til Smedning</div><div class="co-desc">De fleste ordrer kommer fra spillere der vil have plade-gear til endgame. Notér dig på den offentlige ordreliste.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Professions-redskaber er de bedste ordrer i uge 1.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-blacksmithing-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/blacksmithing-specialization-guide-and-builds'
};

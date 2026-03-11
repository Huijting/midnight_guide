// COOKING DATA
const COOKING = {
  id:'cooking', icon:'🍳', cat:'secondary', accent:'#e0893a',
  name:{nl:'Cooking',en:'Cooking',da:'Madlavning'},
  tier:'A',
  lore:{
    nl:'Teas zijn nieuw in Midnight — buffed gathering professions. Cooking is nu gekoppeld aan Skinning Lures. Food buffs zijn essentieel voor alle spelers in raids en dungeons.',
    en:'Teas are new in Midnight — buffed gathering professions. Cooking is now linked to Skinning Lures. Food buffs are essential for all players in raids and dungeons.',
    da:'Teer er nye i Midnight — forbedrer indsamlingsprofessioner. Madlavning er nu koblet til Skindbehandlings-Lokker.'
  },
  goldrating:3, userating:4,
  trainer:{
    name:'Tastikhel the Gourmand (naam niet 100% bevestigd)',
    loc:{nl:'Bazaar, Silvermoon City — bij de keukenarea in het midden van de Bazaar.',en:'Bazaar, Silvermoon City — at the kitchen area in the middle of the Bazaar.',da:'Bazaar, Silvermoon City — ved køkkenområdet i midten af Bazaar.'},
    way:'/way Silvermoon City 53.2, 70.1',
    note:{nl:'Cooking is ook nodig voor Skinning Lures in Midnight — maak het altijd bij.',en:'Cooking is also needed for Skinning Lures in Midnight — always level it alongside Skinning.',da:'Madlavning er også nødvendig til Skindbehandlings-Lokker.'}
  },
  specs:[
    {title:{nl:'Stap 1 — Combat Food Mastery',en:'Step 1 — Combat Food Mastery',da:'Trin 1 — Kampmadsbeherskelse'},
     desc:{nl:'Maakt het beste food voor combat. Altijd gevraagd voor raids en Mythic+.',en:'Crafts the best food for combat. Always in demand for raids and Mythic+.',da:'Laver det bedste mad til kamp. Altid efterspurgt til raids og Mythic+.'},
     points:{nl:'25 punten in Combat Food Mastery',en:'25 points in Combat Food Mastery',da:'25 point i Combat Food Mastery'}},
    {title:{nl:'Stap 2 — Tea Mastery (nieuw in Midnight)',en:'Step 2 — Tea Mastery (new in Midnight)',da:'Trin 2 — Tebeherskelse (nyt i Midnight)'},
     desc:{nl:'Teas buffen gathering professions. Sanguithorn Tea en Argent Tea zijn de beste. Hoge vraag bij farmers.',en:'Teas buff gathering professions. Sanguithorn Tea and Argent Tea are the best. High demand from farmers.',da:'Teer forbedrer indsamlingsprofessioner. Sanguithorn Te og Argent Te er de bedste.'},
     points:{nl:'20 punten in Tea Mastery',en:'20 points in Tea Mastery',da:'20 point i Tea Mastery'}}
  ],
  items:[
    {icon:'🍖',name:{nl:'Combat Food (hoofdstat buffs)',en:'Combat Food (main stat buffs)',da:'Kampsmad (hoved-stat buffs)'},desc:{nl:'Essentieel voor elke raider en Mythic+ speler.',en:'Essential for every raider and Mythic+ player.',da:'Essentiel for enhver raider og Mythic+ spiller.'},tag:'consumable'},
    {icon:'🍵',name:{nl:'Sanguithorn Tea / Argent Tea',en:'Sanguithorn Tea / Argent Tea',da:'Sanguithorn Te / Argent Te'},desc:{nl:'Buffed gathering speed. Hoge vraag bij farmers.',en:'Buffed gathering speed. High demand from farmers.',da:'Forbedret indsamlingshastighed. Høj efterspørgsel fra farmere.'},tag:'consumable'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">Cooking & de markt</div><div class="co-desc">Cooking heeft geen officiële crafting orders, maar food verkoopt uitstekend op de AH. Feasts (die de hele raid bufft) zijn bijzonder waardevol.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Als je Skinning doet, is Cooking verplicht voor Lures. Combineer altijd.</div>`,
    en:`<div class="co-step"><div class="co-title">Cooking & the market</div><div class="co-desc">Cooking has no official crafting orders, but food sells excellently on the AH. Feasts (that buff the entire raid) are particularly valuable.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> If you do Skinning, Cooking is mandatory for Lures. Always combine them.</div>`,
    da:`<div class="co-step"><div class="co-title">Madlavning & markedet</div><div class="co-desc">Madlavning har ingen officielle håndværksordrer, men mad sælger fremragende på AH.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Hvis du bruger Skindbehandling, er Madlavning obligatorisk til Lokker.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-cooking-profession-guide',
  wowp_url:'https://www.wow-professions.com/guides/wow-cooking-leveling-guide'
};

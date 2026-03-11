// FISHING DATA
const FISHING = {
  id:'fishing', icon:'🎣', cat:'secondary', accent:'#3ab8b8',
  name:{nl:'Fishing',en:'Fishing',da:'Fiskeri'},
  tier:'B',
  lore:{
    nl:'Ontspannen goudmaker. Vissen worden gebruikt in Cooking en Skinning Lures. Fishing heeft geen grote spec-boom maar geeft passief goud tijdens rustmomenten.',
    en:'Relaxed gold maker. Fish are used in Cooking and Skinning Lures. Fishing has no major spec tree but gives passive gold during rest moments.',
    da:'Afslappet guldtjener. Fisk bruges i Madlavning og Skindbehandlings-Lokker.'
  },
  goldrating:3, userating:2,
  trainer:{
    name:'Vishandelaar (naam via NPC zoeken in Bazaar Silvermoon)',
    loc:{nl:'Bazaar, Silvermoon City — bij de kade in het noorden van Silvermoon City.',en:'Bazaar, Silvermoon City — at the docks in the north of Silvermoon City.',da:'Bazaar, Silvermoon City — ved kajen i nord af Silvermoon City.'},
    way:'/way Silvermoon City 55.8, 42.3',
    note:{nl:'Fishing is nuttig als je Skinning doet — Lures vereisen vis.',en:'Fishing is useful if you do Skinning — Lures require fish.',da:'Fiskeri er nyttigt hvis du bruger Skindbehandling — Lokker kræver fisk.'}
  },
  specs:[
    {title:{nl:'Stap 1 — Fishing Mastery',en:'Step 1 — Fishing Mastery',da:'Trin 1 — Fiskeribeherskelse'},
     desc:{nl:'Verhoogt catch rate en kans op zeldzame vis. Minder misses bij het hengelen.',en:'Increases catch rate and chance for rare fish. Fewer misses while fishing.',da:'Øger fangstrate og chance for sjælden fisk.'},
     points:{nl:'20 punten in Fishing Mastery',en:'20 points in Fishing Mastery',da:'20 point i Fishing Mastery'}}
  ],
  items:[
    {icon:'🐟',name:{nl:'Vis voor Skinning Lures',en:'Fish for Skinning Lures',da:'Fisk til Skindbehandlings-Lokker'},desc:{nl:'Lures vereisen 2 vis per craft. Passief inkomen.',en:'Lures require 2 fish per craft. Passive income.',da:'Lokker kræver 2 fisk pr. håndværk.'},tag:'material'},
    {icon:'🍳',name:{nl:'Vis voor Cooking food',en:'Fish for Cooking food',da:'Fisk til Madlavnings-mad'},desc:{nl:'Cooking recipes gebruiken vis als ingredient.',en:'Cooking recipes use fish as ingredient.',da:'Madlavningsopskrifter bruger fisk som ingrediens.'},tag:'material'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">Fishing & de markt</div><div class="co-desc">Vis verkoopt op de AH of gebruik je zelf voor Cooking en Skinning Lures. Geen crafting orders maar wel een stabiele AH-markt.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Fishing is perfect voor tijdens het wachten op een dungeon queue. Passief goud terwijl je niets anders kunt doen.</div>`,
    en:`<div class="co-step"><div class="co-title">Fishing & the market</div><div class="co-desc">Sell fish on the AH or use yourself for Cooking and Skinning Lures. No crafting orders but a stable AH market.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Fishing is perfect while waiting for a dungeon queue. Passive gold when you can't do anything else.</div>`,
    da:`<div class="co-step"><div class="co-title">Fiskeri & markedet</div><div class="co-desc">Sælg fisk på AH eller brug dem selv til Madlavning og Skindbehandlings-Lokker.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Fiskeri er perfekt mens du venter på en dungeon-kø.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-fishing-profession-guide',
  wowp_url:'https://www.wow-professions.com/guides/wow-fishing-leveling-guide'
};

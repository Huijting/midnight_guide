// ALCHEMY DATA
const ALCHEMY = {
  id:'alchemy', icon:'⚗', cat:'crafting', accent:'#4caf7d',
  name:{nl:'Alchemy',en:'Alchemy',da:'Alkymi'},
  tier:'S',
  lore:{
    nl:'Een van de sterkste professions in Midnight. Constante vraag naar potions en flasks voor Mythic+ en raids. Het nieuwe Stabilized Derivate-systeem maakt het makkelijker recepten te leren.',
    en:'One of the strongest professions in Midnight. Constant demand for potions and flasks for Mythic+ and raids. The new Stabilized Derivate system makes learning recipes easier.',
    da:'En af de stærkeste professioner i Midnight. Konstant efterspørgsel på eliksirer og kolber til Mythic+ og raids.'
  },
  goldrating:5, userating:5,
  trainer:{
    name:'Camberon',
    loc:{nl:'Bazaar, Silvermoon City — oostkant, iets ten zuiden van de brug naar Isle of Quel\'Danas.',en:'Bazaar, Silvermoon City — east side, just south of the bridge to Isle of Quel\'Danas.',da:'Bazaar, Silvermoon City — østside, lidt syd for broen til Isle of Quel\'Danas.'},
    way:'/way Eversong Woods 46.99 51.97',
    note:{nl:'Recepten boven level 15 koop je bij Camberon\'s Cauldron (kost Stabilized Derivate + Moxie). Experimenteren is verleden tijd.',en:'Recipes above level 15 are bought from Camberon\'s Cauldron (costs Stabilized Derivate + Moxie). No more experimenting.',da:'Opskrifter over niveau 15 købes hos Camberon\'s Cauldron (koster Stabilized Derivate + Moxie).'}
  },
  specs:[
    {title:{nl:'Stap 1 — Level naar 50 (basis recepten)',en:'Step 1 — Level to 50 (basic recipes)',da:'Trin 1 — Level til 50 (basisopskrifter)'},
     desc:{nl:'Craft potions en flasks via de trainer. Eerste crafts geven Knowledge Points.',en:'Craft potions and flasks via the trainer. First crafts give Knowledge Points.',da:'Craft eliksirer og kolber via træneren. Første crafts giver Knowledge Points.'},
     points:{nl:'0–50 skill: basis potions en transmutes',en:'0–50 skill: basic potions and transmutes',da:'0–50 skill: basis eliksirer og transmutationer'}},
    {title:{nl:'Stap 2 — Transmutation Mastery (25 punten)',en:'Step 2 — Transmutation Mastery (25 points)',da:'Trin 2 — Transmutationsbeherskelse (25 point)'},
     desc:{nl:'Eerste grote keuze. Transmutation geeft extra output bij transmutes — essentieel voor material selling.',en:'First major choice. Transmutation gives extra output on transmutes — essential for material selling.',da:'Første store valg. Transmutation giver ekstra output ved transmutationer.'},
     points:{nl:'25 punten in Transmutation Mastery-boom',en:'25 points in Transmutation Mastery tree',da:'25 point i Transmutation Mastery-træet'}},
    {title:{nl:'Stap 3 — Potion Mastery of Flask Mastery',en:'Step 3 — Potion Mastery or Flask Mastery',da:'Trin 3 — Eliksir- eller Kolbebeherskelse'},
     desc:{nl:'Potions: hoge demand elke week. Flasks: duurder maar minder frequent. Kies op basis van markt.',en:'Potions: high demand every week. Flasks: more expensive but less frequent. Choose based on market.',da:'Eliksirer: høj ugentlig efterspørgsel. Kolber: dyrere men sjældnere. Vælg ud fra markedet.'},
     points:{nl:'30 punten in gekozen Mastery-tak',en:'30 points in chosen Mastery branch',da:'30 point i valgt Mastery-gren'}},
    {title:{nl:'Stap 4 — Experimental Alchemy',en:'Step 4 — Experimental Alchemy',da:'Trin 4 — Eksperimental Alkymi'},
     desc:{nl:'Unlock Cauldrons en advanced transmutes. Cauldron-crafts zijn raid-essentials.',en:'Unlocks Cauldrons and advanced transmutes. Cauldron crafts are raid essentials.',da:'Låser op for Cauldrons og avancerede transmutationer. Cauldron crafts er raid-essentielle.'},
     points:{nl:'20 punten in Experimental Alchemy',en:'20 points in Experimental Alchemy',da:'20 point i Experimental Alchemy'}}
  ],
  items:[
    {icon:'🧪',name:{nl:'Tempered Potion',en:'Tempered Potion',da:'Tempereret Eliksir'},desc:{nl:'Hoofdstat potion voor combat — altijd in demand.',en:'Main stat potion for combat — always in demand.',da:'Hoved-stat eliksir til kamp — altid efterspurgt.'},tag:'consumable'},
    {icon:'🍶',name:{nl:'Flask of Tempered Swiftness/Power',en:'Flask of Tempered Swiftness/Power',da:'Kolbe af Tempereret Hurtighed/Kraft'},desc:{nl:'Raid-flask. Elke raider heeft er twee nodig per avond.',en:'Raid flask. Every raider needs two per evening.',da:'Raid-kolbe. Enhver raider har brug for to pr. aften.'},tag:'consumable'},
    {icon:'⚗',name:{nl:'Cauldron of Power',en:'Cauldron of Power',da:'Kraftens Kedel'},desc:{nl:'Geeft de hele raid flasks. Zeer winstgevend via crafting orders.',en:'Gives the entire raid flasks. Very profitable via crafting orders.',da:'Giver hele raidet kolber. Meget profitabelt via håndværksordrer.'},tag:'utility'},
    {icon:'🔮',name:{nl:'Transmutes (Motes → Bars)',en:'Transmutes (Motes → Bars)',da:'Transmutationer (Motes → Bars)'},desc:{nl:'Motes omzetten in crafting materials. Dagelijkse cooldown = passief goud.',en:'Convert motes into crafting materials. Daily cooldown = passive gold.',da:'Konverter motes til håndværksmaterialer. Daglig cooldown = passiv guld.'},tag:'material'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">Hoe werkt het?</div><div class="co-desc">Crafting Orders zijn beschikbaar vanaf skill 15. Spelers plaatsen een order via de Crafting Order-tafel in Silvermoon. Jij als alchemist craft het item en ontvangt goud + Knowledge Points.</div></div>
<div class="co-step"><div class="co-title">Beste orders voor Alchemy</div><div class="co-desc"><strong>Cauldrons</strong> zijn de meest gevraagde orders — raidgroepen plaatsen ze wekelijks. Zet je op de "public orders" lijst voor automatische matches. <strong>Flasks</strong> zijn ook populair vlak voor raiddagen (dinsdag/woensdag).</div></div>
<div class="co-step"><div class="co-title">Artisan's Moxie</div><div class="co-desc">Je verdient Moxie met elke craft. Gebruik dit om nieuwe recepten te kopen bij Camberon's Cauldron. Moxie is profession-specifiek — je kunt het niet uitwisselen met andere professions.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Stabilized Derivate maak je door flasks/potions te converteren. Bewaar dit voor het kopen van dure recepten.</div>`,
    en:`<div class="co-step"><div class="co-title">How does it work?</div><div class="co-desc">Crafting Orders are available from skill 15. Players place an order via the Crafting Order table in Silvermoon. You as alchemist craft the item and receive gold + Knowledge Points.</div></div>
<div class="co-step"><div class="co-title">Best orders for Alchemy</div><div class="co-desc"><strong>Cauldrons</strong> are the most requested orders — raid groups place them weekly. List yourself on "public orders" for automatic matches. <strong>Flasks</strong> are also popular just before raid days (Tuesday/Wednesday).</div></div>
<div class="co-step"><div class="co-title">Artisan's Moxie</div><div class="co-desc">You earn Moxie with every craft. Use this to buy new recipes from Camberon's Cauldron. Moxie is profession-specific — you can't exchange it with other professions.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Create Stabilized Derivate by converting flasks/potions. Save these for buying expensive recipes.</div>`,
    da:`<div class="co-step"><div class="co-title">Hvordan fungerer det?</div><div class="co-desc">Håndværksordrer er tilgængelige fra niveau 15. Spillere placerer en ordre via Håndværksordre-bordet i Silvermoon. Du som alkymist laver genstanden og modtager guld + Knowledge Points.</div></div>
<div class="co-step"><div class="co-title">Bedste ordrer til Alkymi</div><div class="co-desc"><strong>Cauldrons</strong> er de mest efterspurgte ordrer — raidgrupper placerer dem ugentligt. <strong>Kolber</strong> er også populære lige før raiddage.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Stabilized Derivate laves ved at konvertere kolber/eliksirer. Gem disse til køb af dyre opskrifter.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-alchemy-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/alchemy-specialization-guide-and-builds'
};

// INSCRIPTION DATA
const INSCRIPTION = {
  id:'inscription', icon:'📜', cat:'crafting', accent:'#5b8dd9',
  name:{nl:'Inscription',en:'Inscription',da:'Inskription'},
  tier:'S',
  lore:{
    nl:'Meest veelzijdige profession van Midnight. Maakt wapens, missives, contracts, Darkmoon Decks (trinkets) en housing decor. Kan als enige Gold quality bereiken op reagents zonder epic gear.',
    en:'Most versatile profession in Midnight. Makes weapons, missives, contracts, Darkmoon Decks (trinkets) and housing decor. Only profession that can reach Gold quality on reagents without epic gear.',
    da:'Den mest alsidige profession i Midnight. Laver våben, missiver, kontrakter, Darkmoon Decks og boligindretning.'
  },
  goldrating:5, userating:5,
  trainer:{
    name:'Zantasia',
    loc:{nl:'Bazaar, Silvermoon City — oostkant, iets ten noorden van Murder Row.',en:'Bazaar, Silvermoon City — east side, just north of Murder Row.',da:'Bazaar, Silvermoon City — østside, lidt nord for Murder Row.'},
    way:'/way Eversong Woods 46.8 52.1',
    note:{nl:'Speciale opmerking: Inscription kan als enige Gold quality halen op missives/reagents zonder rare tools.',en:'Special note: Inscription is the only profession that can reach Gold quality on missives/reagents without rare tools.',da:'Særlig bemærkning: Inskription er den eneste profession, der kan nå Gold quality på missiver/reagenter uden sjældne redskaber.'}
  },
  specs:[
    {title:{nl:'Stap 1 — Blueprints (wapens & profession tools)',en:'Step 1 — Blueprints (weapons & profession tools)',da:'Trin 1 — Tegninger (våben & professions-redskaber)'},
     desc:{nl:'Ga DIRECT naar Blueprints — niet naar Calm Hands. Wapens en tools hebben de hoogste launch-vraag. Je hebt 90 punten nodig voor Gold quality: sub-spec 30 + Field Research 30 + Blueprints root 30.',en:'Go DIRECTLY to Blueprints — not Calm Hands. Weapons and tools have the highest launch demand. You need 90 points for Gold quality: sub-spec 30 + Field Research 30 + Blueprints root 30.',da:'Gå DIREKTE til Tegninger. Våben og redskaber har den højeste efterspørgsel ved launch.'},
     points:{nl:'30 → Field Research 30 → sub-spec 30 = Gold quality',en:'30 → Field Research 30 → sub-spec 30 = Gold quality',da:'30 → Field Research 30 → under-spec 30 = Gold quality'}},
    {title:{nl:'Stap 2 — Calm Hands (missives & contracts)',en:'Step 2 — Calm Hands (missives & contracts)',da:'Trin 2 — Rolige Hænder (missiver & kontrakter)'},
     desc:{nl:'Missives zijn stat-reagenten die elke crafter nodig heeft voor crafting orders. Contracts geven dagelijks reputatie. Stabiele vraag het hele seizoen.',en:'Missives are stat reagents every crafter needs for crafting orders. Contracts give daily reputation. Stable demand throughout the season.',da:'Missiver er stat-reagenter som enhver håndværker behøver. Kontrakter giver daglig omdømme.'},
     points:{nl:'25–30 punten in Calm Hands',en:'25–30 points in Calm Hands',da:'25–30 point i Calm Hands'}},
    {title:{nl:'Stap 3 — Darkmoon Curiosity (trinkets)',en:'Step 3 — Darkmoon Curiosity (trinkets)',da:'Trin 3 — Darkmoon-nysgerrighed (trinkets)'},
     desc:{nl:'Darkmoon Decks zijn sterkere trinkets in Midnight. Kies één kaarttype (Rot/Blood/Hunt/Void). 10 punten = Transcribe (converteren tussen kaarten).',en:'Darkmoon Decks are stronger trinkets in Midnight. Choose one card type (Rot/Blood/Hunt/Void). 10 points = Transcribe (convert between cards).',da:'Darkmoon Decks er stærkere trinkets i Midnight. Vælg én korttype.'},
     points:{nl:'Kies 1 kaarttype + 10 punten voor Transcribe',en:'Choose 1 card type + 10 points for Transcribe',da:'Vælg 1 korttype + 10 point til Transcribe'}}
  ],
  items:[
    {icon:'🪄',name:{nl:'Inscription Weapons (Staves, Off-hands, Bows)',en:'Inscription Weapons (Staves, Off-hands, Bows)',da:'Inskription-våben (Stave, Off-hands, Bue)'},desc:{nl:'Hoge waarde, Spark vereist. Beste items bij launch.',en:'High value, Spark required. Best items at launch.',da:'Høj værdi, Spark krævet.'},tag:'gear'},
    {icon:'📋',name:{nl:'Missives (stat reagenten)',en:'Missives (stat reagents)',da:'Missiver (stat-reagenter)'},desc:{nl:'Elke crafter heeft ze nodig voor orders. Stabiel goud het hele seizoen.',en:'Every crafter needs them for orders. Stable gold throughout the season.',da:'Enhver håndværker har brug for dem til ordrer.'},tag:'material'},
    {icon:'🃏',name:{nl:'Darkmoon Decks (trinkets)',en:'Darkmoon Decks (trinkets)',da:'Darkmoon Decks (trinkets)'},desc:{nl:'Upgrade-bare trinkets. Uniek voor Scribes.',en:'Upgradable trinkets. Unique for Scribes.',da:'Opgraderbare trinkets. Unikke for Scribes.'},tag:'gear'},
    {icon:'🏠',name:{nl:'Housing Decor Scrolls',en:'Housing Decor Scrolls',da:'Boligindretning-ruller'},desc:{nl:'Housing is nieuw in Midnight. Decoratie-items verkopen goed.',en:'Housing is new in Midnight. Decoration items sell well.',da:'Housing er nyt i Midnight. Dekorationsgenstande sælger godt.'},tag:'housing'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">Inscription Orders — breed scala</div><div class="co-desc">Inscription heeft de meest diverse order-portfolio van alle professions: wapens, missives, contracts en Darkmoon Decks. Zet je op de public orders lijst voor allemaal.</div></div>
<div class="co-step"><div class="co-title">Missive Orders zijn het consistentst</div><div class="co-desc">Missives worden als reagent meegeleverd door de klant bij bijna alle crafting orders van andere professions. Jij als Scribe levert ze. Dit geeft dagelijks passive orders zonder veel moeite.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Inscription is de enige profession die Gold quality kan halen op missives zonder rare tools. Dit geeft je een grote concurrentievoordeel.</div>`,
    en:`<div class="co-step"><div class="co-title">Inscription Orders — broad range</div><div class="co-desc">Inscription has the most diverse order portfolio of all professions: weapons, missives, contracts and Darkmoon Decks.</div></div>
<div class="co-step"><div class="co-title">Missive Orders are most consistent</div><div class="co-desc">Missives are included as a reagent by the customer in nearly all crafting orders from other professions. You as Scribe supply them.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Inscription is the only profession that can achieve Gold quality on missives without rare tools. This gives you a huge competitive advantage.</div>`,
    da:`<div class="co-step"><div class="co-title">Inskription-ordrer — bredt udvalg</div><div class="co-desc">Inskription har den mest mangfoldige ordre-portefølje af alle professioner.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Inskription er den eneste profession der kan nå Gold quality på missiver uden sjældne redskaber.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-inscription-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/inscription-specialization-guide-and-builds'
};

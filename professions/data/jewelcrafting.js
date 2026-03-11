// JEWELCRAFTING DATA
const JEWELCRAFTING = {
  id:'jewelcrafting', icon:'💎', cat:'crafting', accent:'#d96da8',
  name:{nl:'Jewelcrafting',en:'Jewelcrafting',da:'Smykkefremstilling'},
  tier:'A',
  lore:{
    nl:'Uniek in Midnight: alle materialen inclusief glas, steen en gems hebben nu kwaliteitsranks. Het kwaliteitssysteem maakt Jewelcrafting interessant het hele seizoen, niet alleen bij launch.',
    en:'Unique in Midnight: all materials including glass, stone and gems now have quality ranks. The quality system makes Jewelcrafting interesting throughout the entire season, not just at launch.',
    da:'Unikt i Midnight: alle materialer inklusive glas, sten og gems har nu kvalitetsrangs.'
  },
  goldrating:4, userating:4,
  trainer:{
    name:'Amin',
    loc:{nl:'Bazaar, Silvermoon City — oostkant, net ten noorden van Murder Row.',en:'Bazaar, Silvermoon City — east side, just north of Murder Row.',da:'Bazaar, Silvermoon City — østside, lidt nord for Murder Row.'},
    way:'/way Eversong Woods 47.1 52.0',
    note:{nl:'Gems socket in gear via de spec-boom. Uncut gems zijn ook verkoopbaar op AH.',en:'Gems socket into gear via the spec tree. Uncut gems are also sellable on the AH.',da:'Gems sættes i gear via spec-træet. Uslibede gems er også salgbare på AH.'}
  },
  specs:[
    {title:{nl:'Stap 1 — Gem Mastery (30 punten)',en:'Step 1 — Gem Mastery (30 points)',da:'Trin 1 — Gem-beherskelse (30 point)'},
     desc:{nl:'Verhoogt kwaliteit en hoeveelheid gems. Gems zijn altijd in demand — elke speler met socket-gear wil ze.',en:'Increases quality and quantity of gems. Gems are always in demand — every player with socket gear wants them.',da:'Øger kvalitet og mængde af gems. Gems er altid efterspurgte.'},
     points:{nl:'30 punten in Gem Mastery',en:'30 points in Gem Mastery',da:'30 point i Gem Mastery'}},
    {title:{nl:'Stap 2 — Cut Specialization per gem type',en:'Step 2 — Cut Specialization per gem type',da:'Trin 2 — Slibningsspecialisering pr. gem-type'},
     desc:{nl:'Kies de gems die het meest gevraagd worden op jouw server. Tip: bekijk AH-prijzen voor je invest.',en:'Choose the gems most in demand on your server. Tip: check AH prices before investing.',da:'Vælg de gems der er mest efterspurgte på din server.'},
     points:{nl:'25 punten per gem-type specialisatie',en:'25 points per gem-type specialization',da:'25 point pr. gem-type specialisering'}},
    {title:{nl:'Stap 3 — Rings & Necklaces',en:'Step 3 — Rings & Necklaces',da:'Trin 3 — Ringe & Halskæder'},
     desc:{nl:'JC-exclusief jewelry. Hoge ilvl rings en necks via crafting orders. Spark vereist voor epic.',en:'JC-exclusive jewelry. High ilvl rings and necks via crafting orders. Spark required for epic.',da:'JC-eksklusivt smykker. Høj ilvl ringe og halskæder via håndværksordrer.'},
     points:{nl:'30 punten in Jewelry-tak',en:'30 points in Jewelry branch',da:'30 point i Smykker-gren'}}
  ],
  items:[
    {icon:'💎',name:{nl:'Gems (alle stat-types)',en:'Gems (all stat types)',da:'Gems (alle stat-typer)'},desc:{nl:'Constant gevraagd. Elke gear-upgrade = nieuwe gem nodig.',en:'Constantly in demand. Every gear upgrade = new gem needed.',da:'Konstant efterspurgt. Enhver gear-opgradering = ny gem nødvendig.'},tag:'consumable'},
    {icon:'💍',name:{nl:'Rings & Necklaces (Spark-crafted)',en:'Rings & Necklaces (Spark-crafted)',da:'Ringe & Halskæder (Spark-håndværket)'},desc:{nl:'JC-exclusief. Hoge waarde via crafting orders.',en:'JC-exclusive. High value via crafting orders.',da:'JC-eksklusivt. Høj værdi via håndværksordrer.'},tag:'gear'},
    {icon:'🔮',name:{nl:'Dawncharged Jewels (reagents)',en:'Dawncharged Jewels (reagents)',da:'Dawncharged Jewels (reagenter)'},desc:{nl:'JC-specifieke crafting reagenten. Verkoop op AH of gebruik voor eigen orders.',en:'JC-specific crafting reagents. Sell on AH or use for own orders.',da:'JC-specifikke håndværksreagenter.'},tag:'material'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">Jewelcrafting Orders</div><div class="co-desc">Gems zijn de meest frequente orders. Spelers leveren raw gems aan en jij slijpt ze. Ring/Neck orders vereisen Sparks — deze worden door de klant aangeleverd bij epic crafts.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> In Midnight heeft elk materiaal kwaliteitsranks. Hogere kwaliteit gems = betere stats = hogere prijs. Investeer vroeg in Gem Mastery.</div>`,
    en:`<div class="co-step"><div class="co-title">Jewelcrafting Orders</div><div class="co-desc">Gems are the most frequent orders. Players supply raw gems and you cut them. Ring/Neck orders require Sparks — these are provided by the customer for epic crafts.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> In Midnight every material has quality ranks. Higher quality gems = better stats = higher price. Invest early in Gem Mastery.</div>`,
    da:`<div class="co-step"><div class="co-title">Smykkefremstillings-ordrer</div><div class="co-desc">Gems er de hyppigste ordrer. Spillere leverer rå gems og du sliber dem.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> I Midnight har hvert materiale kvalitetsrangs. Invester tidligt i Gem Mastery.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-jewelcrafting-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/jewelcrafting-specialization-guide-and-builds'
};

// ENCHANTING DATA
const ENCHANTING = {
  id:'enchanting', icon:'✨', cat:'crafting', accent:'#9b6dd9',
  name:{nl:'Enchanting',en:'Enchanting',da:'Fortryllelse'},
  tier:'A',
  lore:{
    nl:'Stabiele inkomstenstroom door gear-enchants. Elke speler die een upgrade krijgt wil een enchant. Converteert slechte drops naar Dust/Shards voor extra goud.',
    en:'Stable income stream from gear enchants. Every player who gets an upgrade wants an enchant. Converts bad drops into Dust/Shards for extra gold.',
    da:'Stabil indkomststrøm fra gear-fortryllelser. Enhver spiller der får en opgradering vil have en fortryllelse.'
  },
  goldrating:4, userating:5,
  trainer:{
    name:'Dolothos (Glamours: Jennara Sunglow)',
    loc:{nl:'Bazaar, Silvermoon City — oostkant, net boven Murder Row. Tweede trainer Jennara Sunglow in Thalassian University voor Glamour-recepten (level 55+).',en:'Bazaar, Silvermoon City — east side, just north of Murder Row. Second trainer Jennara Sunglow in Thalassian University for Glamour recipes (level 55+).',da:'Bazaar, Silvermoon City — østside, lidt nord for Murder Row. Anden træner Jennara Sunglow i Thalassian University for Glamour-opskrifter.'},
    way:'/way Eversong Woods 47.2 51.5',
    note:{nl:'Koop meteen een Refulgent Copper Rod + Enchanting Vellum bij Lyna naast de trainer. Dan hoef je pas terug bij level 17!',en:'Immediately buy a Refulgent Copper Rod + Enchanting Vellum from Lyna next to the trainer. No need to return until level 17!',da:'Køb straks en Refulgent Copper Rod + Enchanting Vellum hos Lyna ved træneren.'}
  },
  specs:[
    {title:{nl:'Stap 1 — Disenchanting Mastery (20 punten)',en:'Step 1 — Disenchanting Mastery (20 points)',da:'Trin 1 — Disenchanting-beherskelse (20 point)'},
     desc:{nl:'Vergroot hoeveel shards/dust je krijgt bij disenchanten. Direct passief goud — elk stuk gear dat je disenchant levert meer op.',en:'Increases how many shards/dust you get when disenchanting. Direct passive gold — every piece of gear you disenchant yields more.',da:'Øger mængden af shards/dust ved disenchanting. Direkte passiv guld.'},
     points:{nl:'20 punten in Disenchanting-tak',en:'20 points in Disenchanting branch',da:'20 point i Disenchanting-gren'}},
    {title:{nl:'Stap 2 — Weapon Enchants',en:'Step 2 — Weapon Enchants',da:'Trin 2 — Våbenfortryllelser'},
     desc:{nl:'Weapon enchants zijn de duurste en meest gevraagde. Unlock zo snel mogelijk voor de meeste winst.',en:'Weapon enchants are the most expensive and in-demand. Unlock as fast as possible for the most profit.',da:'Våbenfortryllelser er de dyreste og mest efterspurgte. Lås op så hurtigt som muligt.'},
     points:{nl:'30 punten in Weapon Enchants-boom',en:'30 points in Weapon Enchants tree',da:'30 point i Weapon Enchants-træet'}},
    {title:{nl:'Stap 3 — Armor Enchants (Cloak/Chest/Boots)',en:'Step 3 — Armor Enchants (Cloak/Chest/Boots)',da:'Trin 3 — Rustningsfortryllelser'},
     desc:{nl:'Elk armor slot heeft enchants nodig. Cloak en Chest zijn het populairst. Investeer per slot 25–30 punten.',en:'Every armor slot needs enchants. Cloak and Chest are most popular. Invest 25–30 points per slot.',da:'Hvert rustnings-slot behøver fortryllelser. Kappe og Brystsæt er mest populære.'},
     points:{nl:'25–30 punten per armor slot',en:'25–30 points per armor slot',da:'25–30 point pr. rustnings-slot'}}
  ],
  items:[
    {icon:'⚔',name:{nl:'Weapon Enchants (Main/Off-hand)',en:'Weapon Enchants (Main/Off-hand)',da:'Våbenfortryllelser'},desc:{nl:'Hoogste prijs. Elke DPS en tank wil dit bij een upgrade.',en:'Highest price. Every DPS and tank wants this on an upgrade.',da:'Højeste pris. Enhver DPS og tank vil have dette.'},tag:'consumable'},
    {icon:'👘',name:{nl:'Cloak & Chest Enchants',en:'Cloak & Chest Enchants',da:'Kappe & Brystfortryllelser'},desc:{nl:'Hoge vraag, goede marge.',en:'High demand, good margin.',da:'Høj efterspørgsel, god margin.'},tag:'consumable'},
    {icon:'💎',name:{nl:'Enchanting Rods & Crafting Tools',en:'Enchanting Rods & Crafting Tools',da:'Fortryllelses-stave & Redskaber'},desc:{nl:'Profession tools voor andere enchanters — hoge waarde launch week.',en:'Profession tools for other enchanters — high value launch week.',da:'Professions-redskaber til andre fortryllere — høj launch-uge værdi.'},tag:'utility'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">Enchanting Orders — altijd actief</div><div class="co-desc">Enchanting heeft een voordeel: spelers kunnen de materialen zelf aanleveren en jij craft alleen. Dit maakt public orders laagdrempelig. Wapen-enchants zijn verreweg het populairst.</div></div>
<div class="co-step"><div class="co-title">Disenchanting als inkomst</div><div class="co-desc">Dungeon- en raid-drops disenchanten geeft Arcane Dust en Void Crystals. Verkoop op AH of gebruik voor je eigen enchants.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Raiddagen zijn je drukste dagen. Zorg dat je genoeg materials hebt voor dinsdag en woensdag.</div>`,
    en:`<div class="co-step"><div class="co-title">Enchanting Orders — always active</div><div class="co-desc">Enchanting has an advantage: players can supply the materials themselves and you only craft. This makes public orders low-barrier. Weapon enchants are by far the most popular.</div></div>
<div class="co-step"><div class="co-title">Disenchanting as income</div><div class="co-desc">Disenchanting dungeon and raid drops gives Arcane Dust and Void Crystals. Sell on AH or use for your own enchants.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Raid days are your busiest days. Make sure you have enough materials for Tuesday and Wednesday.</div>`,
    da:`<div class="co-step"><div class="co-title">Fortryllelses-ordrer — altid aktive</div><div class="co-desc">Fortryllelse har en fordel: spillere kan levere materialerne selv og du laver kun fortryllelsen. Våbenfortryllelser er langt de mest populære.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Raiddage er dine travleste dage.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-enchanting-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/enchanting-specialization-guide-and-builds'
};

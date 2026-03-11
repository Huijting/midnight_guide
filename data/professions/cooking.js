// COOKING DATA — v2.3
const COOKING = {
  id:'cooking', icon:'🍳', cat:'secondary', accent:'#e67e22',
  name:{nl:'Cooking',en:'Cooking',da:'Madlavning'},
  tier:'C',
  lore:{
    nl:'Cooking is een <em>secondary profession</em> — iedereen kan het leren naast zijn twee hoofdprofessions. Je bereidt voedsel dat tijdelijke stat-bonussen geeft, stamina verhoogt of andere nuttige effecten heeft. Cooking is geen goudmaker van het kaliber Alchemy, maar het is een <strong>gratis persoonlijk voordeel</strong> dat geen andere profession je geeft.<br><br>In Midnight: <strong>Void-Infused Dishes</strong> geven unieke effecten die alleen via Cooking te krijgen zijn, en het <strong>Silverthread Feast</strong>-systeem laat je tafels zetten in raids voor je hele groep.',
    en:'Cooking is a <em>secondary profession</em> — anyone can learn it alongside their two main professions. You prepare food that gives temporary stat bonuses, increases stamina, or has other useful effects. Cooking is not a gold-maker on the level of Alchemy, but it is a <strong>free personal advantage</strong> that no other profession gives you.<br><br>In Midnight: <strong>Void-Infused Dishes</strong> give unique effects only obtainable through Cooking, and the <strong>Silverthread Feast</strong> system lets you set tables in raids for your entire group.',
    da:'Madlavning er en <em>sekundær profession</em> — alle kan lære den ved siden af to hovedprofessioner. Du laver mad med midlertidige statsbonus. Ikke en stor guldtjener, men en <strong>gratis personlig fordel</strong>.<br><br>I Midnight: Void-Infused Retter giver unikke effekter og Silverthread Feast-systemet lader dig sætte borde i raids til hele gruppen.'
  },
  goldrating:2, userating:4,
  trainer:{
    name:'Chef Belindra',
    loc:{
      nl:'Trainer Chef Belindra staat in de <strong>Sunwell Kitchens</strong> — de grote keuken naast de Sunwell Terrassen in het zuiden van Silvermoon City. Ze is te herkennen aan de witte koksmuts en de geur van exotische kruiden.',
      en:'Trainer Chef Belindra is in the <strong>Sunwell Kitchens</strong> — the large kitchen next to the Sunwell Terraces in the south of Silvermoon City. Recognizable by the white chef\'s hat and the smell of exotic herbs.',
      da:'Træner Chef Belindra er i <strong>Sunwell-køkkenerne</strong> — det store køkken ved Sunwell-terrasserne i det sydlige Silvermoon City. Genkendelig på den hvide kokshue og duften af eksotiske urter.'
    },
    way:'/way Silvermoon City 40.3 70.1',
    note:{
      nl:'💡 <strong>Secondary profession — geen slotkosten:</strong> Cooking kost je geen van je twee professionslots. Je kunt altijd Cooking leren naast je twee hoofdprofessions. Er is geen reden om het NIET te leren.',
      en:'💡 <strong>Secondary profession — no slot cost:</strong> Cooking does not use either of your two profession slots. You can always learn Cooking alongside your two main professions. There is no reason NOT to learn it.',
      da:'💡 <strong>Sekundær profession — ingen pladsomkostning:</strong> Madlavning bruger ingen af dine to professionspladser. Ingen grund til IKKE at lære det.'
    }
  },
  specs:[
    {
      title:{nl:'📖 Cooking heeft geen specialisaties — dit moet je weten',en:'📖 Cooking has no specialization tree — here\'s what to know',da:'📖 Cooking har ingen specialiseringstræ — det skal du vide'},
      desc:{
        nl:'Cooking is een secondary profession — het kost je geen van je twee primaire profession-slots. Dat betekent: elke speler in het spel <em>kan</em> Cooking hebben, en elke speler <em>zou</em> Cooking moeten hebben.<br><br><strong>Waarom?</strong> Gerechten geven tijdelijke stat-bonussen die Alchemy-flasks aanvullen. Het zijn andere stats — voedsel geeft stamina en primary stats, flasks geven secondary stats. Samen zijn ze sterker dan apart.<br><br><strong>De Well Fed-buff:</strong> Eten geeft je een uur lang de <em>Well Fed</em>-buff. Serieuze raiders eten altijd — het is gratis extra stats als je zelf kookt.<br><br>KP verdelen vanaf <strong>Cooking skill 25</strong>. Specialisaties zijn anders dan bij andere professions — je kiest per gerecht-type.',
        en:'Cooking is a secondary profession — it uses none of your two primary profession slots. That means: every player in the game <em>can</em> have Cooking, and every player <em>should</em> have Cooking.<br><br><strong>Why?</strong> Dishes give temporary stat bonuses that complement Alchemy flasks. They are different stats — food gives stamina and primary stats, flasks give secondary stats. Together they are stronger than apart.<br><br><strong>The Well Fed buff:</strong> Eating gives you the <em>Well Fed</em> buff for one hour. Serious raiders always eat — it is free extra stats if you cook yourself.<br><br>Spend KP from <strong>Cooking skill 25</strong>.',
        da:'Madlavning er sekundær — bruger ingen professionspladser. Enhver spiller kan og bør lære det.<br><br>Mad giver statsbonus der komplementerer flasker — stamina og primære stats vs. sekundære stats fra flasker. Together stærkere.<br><br><strong>Well Fed-buff:</strong> Én times gratis ekstra stats. KP fra <strong>Madlavningsfærdighed 25</strong>.'
      },
      points:{nl:'Tip: eet altijd voor raids en Mythic+ — gratis stat-bonus naast je flasks',en:'Tip: always eat before raids and Mythic+ — free stat bonus alongside your flasks',da:'Tip: spis altid før raids og Mythic+ — gratis statsbonus ved siden af dine flasker'}
    },
    {
      title:{nl:'🍖 Categorie 1 — Stat Food · voor Mythic+ en raids',en:'🍖 Category 1 — Stat Food · for Mythic+ and raids',da:'🍖 Kategori 1 — Stat-mad · til Mythic+ og raids'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Gerechten met de sterkste stat-bonussen voor combat — Strength, Agility, Intellect, Stamina. Dit zijn de gerechten die elke raider voor elke raid eet.<br><br><strong>Void-Infused Dishes:</strong> Speciale gerechten gemaakt met Void-ingrediënten die een extra Void-proc-effect geven bovenop de normale stat-bonus. Gevraagd door Mythic-raiders die elke kleine edge willen.<br><br><strong>Feast of the Void:</strong> Eén tafel die de hele raid de Well Fed-buff geeft. Raid leaders verwachten dat iemand een Feast plaatst. Als jij dat bent, ben je een gewaardeerde teamspeler — en kun je Feasts verkopen aan raids die geen Cook hebben.',
        en:'<strong>What does this make?</strong> Dishes with the strongest stat bonuses for combat — Strength, Agility, Intellect, Stamina. These are the dishes every raider eats before every raid.<br><br><strong>Void-Infused Dishes:</strong> Special dishes made with Void ingredients that give an extra Void proc effect on top of the normal stat bonus. In demand by Mythic raiders who want every small edge.<br><br><strong>Feast of the Void:</strong> One table giving the entire raid the Well Fed buff. Raid leaders expect someone to place a Feast. If that is you, you are a valued team player — and can sell Feasts to raids without a Cook.',
        da:'<strong>Hvad laver dette?</strong> Retter med stærkeste statsbonus til kamp.<br><br>Void-Infused Retter: ekstra Void-proc-effekt oveni normal statsbonus.<br><br>Void\'s Festmåltid: Et bord der giver hele raidet Well Fed-buffet. Sælg til raids uden en kok.'
      },
      points:{nl:'30 punten — meest direct nuttig voor je eigen karakter en voor verkoop',en:'30 points — most directly useful for your own character and for sales',da:'30 point — mest direkte nyttig for dit eget karakter og for salg'}
    },
    {
      title:{nl:'🫕 Categorie 2 — Feasts · de hele groep van buffs voorzien',en:'🫕 Category 2 — Feasts · buffing the entire group',da:'🫕 Kategori 2 — Festmåltider · giv hele gruppen buffs'},
        desc:{
        nl:'<strong>Wat maakt dit?</strong> Gerechten met hersteleffecten en utility-buffs buiten combat. Voorbeelden:<br>• <em>Silvermoon Soup</em> → herstel health sneller buiten combat (goed voor dungeon-farming zonder potion-verspilling)<br>• <em>Arcane Pastry</em> → herstel mana buiten combat<br>• <em>Endurance Stew</em> → vermindert falling damage (handig in platformer-secties van Mythic+)<br><br><strong>Waarom nuttig?</strong> Herstelvoedsel bespaart potions en vendordrink. Als je constant dungeons farmt, stapelen de kleine besparingen op over een maand van spelen. Dit is de "efficiëntie"-specialisatie.',
        en:'<strong>What does this make?</strong> Dishes with recovery effects and utility buffs outside combat. Examples:<br>• <em>Silvermoon Soup</em> → restore health faster out of combat<br>• <em>Arcane Pastry</em> → restore mana out of combat<br>• <em>Endurance Stew</em> → reduce falling damage<br><br><strong>Why useful?</strong> Recovery food saves potions and vendor drink. If you constantly farm dungeons, small savings add up over a month of playing. This is the "efficiency" specialization.',
        da:'<strong>Hvad laver dette?</strong> Retter med genopretningseffekter udenfor kamp.<br>• Silvermoon Suppe → hurtigere helbred-genopretning<br>• Arkane Wienerbrød → mana-genopretning<br>• Udholdenhedsgryden → reduceret faldskade<br><br><strong>Hvorfor nyttig?</strong> Sparer potions og drikke. Effektivitets-specialisering.'
      },
      points:{nl:'20 punten — kies dit als je constant dungeons farmt en efficiëntie wilt maximaliseren',en:'20 points — choose this if you constantly farm dungeons and want to maximize efficiency',da:'20 point — vælg dette hvis du konstant farmer dungeons og vil maksimere effektivitet'}
    }
  ],
  items:[
    {icon:'🍖',name:{nl:'Feast of the Void (raid-tafel)',en:'Feast of the Void (raid table)',da:'Void\'s Festmåltid (raid-bord)'},desc:{nl:'Plaatst een tafel waarvoor de hele raid de Well Fed-buff kan pakken. Eén Cook per raid. Verkoop aan raids zonder Cook voor honderden goud per stuk.',en:'Places a table from which the entire raid can take the Well Fed buff. One Cook per raid. Sell to raids without a Cook for hundreds of gold each.',da:'Bord for hele raidet til Well Fed-buff. Sælg til raids uden en kok for hundredvis af guld.'},tag:'consumable'},
    {icon:'🥘',name:{nl:'Combat Dishes (solo/party)',en:'Combat Dishes (solo/party)',da:'Kampretter (solo/gruppe)'},desc:{nl:'Individuele gerechten voor dungeons en solo-content. Elke speler eet ze. Verkopen op het AH of zelf eten voor gratis stats.',en:'Individual dishes for dungeons and solo content. Every player eats them. Sell on AH or eat yourself for free stats.',da:'Individuelle retter til dungeons. Enhver spiller spiser dem. Sælg på AH eller spis selv for gratis stats.'},tag:'consumable'},
    {icon:'🌿',name:{nl:'Herstelvoedsel',en:'Recovery Food',da:'Genopretningssmad'},desc:{nl:'Herstelt health en mana buiten combat. Bespaart potions. Niche markt maar stabiel voor efficiënte dungeon-farmers.',en:'Restores health and mana out of combat. Saves potions. Niche market but stable for efficient dungeon farmers.',da:'Gendanner helbred og mana udenfor kamp. Sparer potions.'},tag:'consumable'},
    {icon:'🔮',name:{nl:'Void-Infused Dishes (premium)',en:'Void-Infused Dishes (premium)',da:'Void-Infused Retter (premium)'},desc:{nl:'Speciale gerechten met Void-proc-effect bovenop normale stats. Gevraagd door Mythic-raiders. Premium prijs.',en:'Special dishes with Void proc effect on top of normal stats. In demand by Mythic raiders. Premium price.',da:'Specielle retter med Void-proc-effekt. Efterspurgte af Mythic-raidere. Præmiepris.'},tag:'consumable'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">📦 Cooking en goud — realistische kijk</div><div class="co-desc">Cooking is geen primaire goudmaker. Maar het geeft je:<br><br><strong>Gratis persoonlijk voordeel:</strong> Je eet zelf, je spaart vendor food-kosten, je hebt betere stats voor minder goud dan spelers die op het AH kopen.<br><br><strong>Feast-verkoop:</strong> Feasts zijn de meest winstgevende Cooking-items. Raids van 20+ mensen die geen Cook hebben, kopen ze graag. Eén Feast voor 200-400 goud is realistisch op de meeste servers.</div></div>
<div class="co-step"><div class="co-title">⭐ Cooking als passief side-inkomen</div><div class="co-desc">
  Zet elke dag een batch Feasts en Combat Dishes op het AH. Ze verkopen langzaam maar consistent — elke dag eten spelers. Het is geen hoofdinkomen maar een rustige bijdrage zonder moeite.<br><br>
  Best verkoopmoment: dinsdag voor raid-reset. Raiders kopen Feasts en Combat Food voor hun raid-sessie.
</div></div>
<div class="tip-box"><strong>💡 Beste tip voor Cooking:</strong> Leer Cooking altijd — het kost je niets (secondary profession) en geeft je gratis stats voor je hele speelcarrière. Eet altijd voor raids en Mythic+. Een uur Well Fed is equivalent aan een klein deel van een gear-upgrade qua impact op je performance. Gratis, altijd, voor altijd beschikbaar.</div>`,
    en:`<div class="co-step"><div class="co-title">📦 Cooking and gold — realistic view</div><div class="co-desc">Cooking is not a primary gold-maker. But it gives you:<br><br><strong>Free personal advantage:</strong> Eat yourself, save vendor food costs, better stats for less gold than players buying on AH.<br><br><strong>Feast sales:</strong> Feasts are the most profitable Cooking items. Raids without a Cook buy them gladly. One Feast for 200-400 gold is realistic on most servers.</div></div>
<div class="co-step"><div class="co-title">⭐ Cooking as passive side income</div><div class="co-desc">
  List a batch of Feasts and Combat Dishes on the AH every day. They sell slowly but consistently. Best sales: Tuesday before raid reset.
</div></div>
<div class="tip-box"><strong>💡 Best tip for Cooking:</strong> Always learn Cooking — it costs nothing (secondary profession) and gives free stats for your entire playing career. Always eat before raids and Mythic+. One hour Well Fed equals a small gear upgrade in performance impact. Free, always, available forever.</div>`,
    da:`<div class="co-step"><div class="co-title">📦 Madlavning og guld — realistisk udsigt</div><div class="co-desc">Ikke en primær guldtjener, men giver gratis personlig fordel og Festmåltid-salg (200-400 guld pr. styk).</div></div>
<div class="co-step"><div class="co-title">⭐ Passiv biindkomst</div><div class="co-desc">Sæt Festmåltider og Kampretter på AH dagligt. Bedst tirsdag for raid-nulstilling.</div></div>
<div class="tip-box"><strong>💡 Bedste tip:</strong> Lær altid Madlavning — ingen pladskostning, gratis stats for hele din spillekarriere. Spis altid før raids og Mythic+.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-cooking-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/cooking-leveling-guide'
};

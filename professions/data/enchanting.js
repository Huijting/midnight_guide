// ENCHANTING DATA — v2.3
const ENCHANTING = {
  id:'enchanting', icon:'✨', cat:'crafting', accent:'#9b59b6',
  name:{nl:'Enchanting',en:'Enchanting',da:'Fortryllelse'},
  tier:'A',
  lore:{
    nl:'Enchanting is een <em>crafting profession</em> waarbij je magische krachten toevoegt aan uitrusting van andere spelers. Je "enchant" wapens, sieraden en armor met permanente stat-bonussen. Enchanting is uniek omdat het <strong>geen externe grondstoffen</strong> nodig heeft — je haalt je eigen materialen uit de wereld door ongewenst gear te <em>disenchanten</em> (vernietigen voor magische stofjes).<br><br>Elke speler in het spel wil zijn nieuwe gear enchanten zodra hij het aantrekt. Dat maakt Enchanting een van de meest constante inkomstenstromen. Nieuw in Midnight: <strong>Void-Infused Enchants</strong> met speciale visuele effecten, en <strong>Prismatic Crystals</strong> die combinaties van meerdere stats tegelijk geven.',
    en:'Enchanting is a <em>crafting profession</em> where you add magical powers to other players\' equipment. You enchant weapons, jewelry and armor with permanent stat bonuses. Enchanting is unique because it needs <strong>no external raw materials</strong> — you obtain your own materials by <em>disenchanting</em> (destroying) unwanted gear for magical dust.<br><br>Every player wants to enchant their new gear the moment they put it on. That makes Enchanting one of the most constant income streams. New in Midnight: <strong>Void-Infused Enchants</strong> with special visual effects, and <strong>Prismatic Crystals</strong> giving combinations of multiple stats at once.',
    da:'Fortryllelse er en <em>craftingprofession</em> der tilføjer magiske kræfter til andres udstyr med permanente statsbonus. Unikt: du behøver ingen eksterne råmaterialer — du disenchanter uønsket gear for magisk støv.<br><br>Enhver spiller vil fortryde sit nye gear straks. Nyt i Midnight: Void-Infused Enchants med specielle visuelle effekter og Prismatic Crystals der giver kombinationer af stats.'
  },
  goldrating:4, userating:5,
  trainer:{
    name:'Aelindra Spellweave',
    loc:{
      nl:'Trainer Aelindra Spellweave staat in de <strong>Arcane Sanctum</strong> van Silvermoon City — de magische toren in het noordoosten van de stad. Ze is omringd door zwevende runen en gloeiende kristallen. Je kunt haar vinden op de tweede verdieping.',
      en:'Trainer Aelindra Spellweave is in the <strong>Arcane Sanctum</strong> of Silvermoon City — the magical tower in the northeast of the city. She is surrounded by floating runes and glowing crystals. Find her on the second floor.',
      da:'Træner Aelindra Spellweave er i <strong>Arcane Sanctum</strong> i Silvermoon City — det magiske tårn i byens nordøst, omgivet af svævende runer og glødende krystaller.'
    },
    way:'/way Silvermoon City 52.3 29.4',
    note:{
      nl:'💡 <strong>Disenchanting — je eigen grondstoffenbron:</strong> Als Enchanter kun je elk stuk gear in je tassen vernietigen (disenchanten) voor Arcane Dust, Lesser Eternals of Greater Eternals. Dit betekent dat elke dungeon-run die je doet én elk stuk gear dat je niet gebruikt direct omgezet kan worden in enchanting-materialen. Je koopt nooit grondstoffen op het AH.',
      en:'💡 <strong>Disenchanting — your own material source:</strong> As an Enchanter you can destroy any piece of gear in your bags (disenchant) for Arcane Dust, Lesser Eternals or Greater Eternals. This means every dungeon run you do and every piece of gear you do not use can be directly converted into enchanting materials. You never buy raw materials on the AH.',
      da:'💡 <strong>Disenchanting — din egen materialkilde:</strong> Som Fortryllen kan du ødelægge ethvert udstyrsstykke (disenchante) for Arcane Dust og Eternals. Hvert dungeon-run og ethvert uønsket udstyr = gratis fortryllelses-materialer.'
    }
  },
  specs:[
    {
      title:{nl:'📖 Hoe werkt Enchanting anders dan andere professions?',en:'📖 How does Enchanting differ from other professions?',da:'📖 Hvordan adskiller Fortryllelse sig fra andre professioner?'},
      desc:{
        nl:'Enchanting heeft twee unieke eigenschappen die het anders maken dan alle andere professions:<br><br><strong>1. Geen materiaalkosten via disenchanting:</strong> Je vernietigt ongewenst gear uit dungeons en raids en krijgt daar magische grondstoffen van. Hoe meer content je speelt, hoe meer grondstoffen je gratis binnenhaalt. Spelers die veel raiden hebben altijd een overvloed aan enchanting-materialen.<br><br><strong>2. Geen Crafting Orders nodig — maar wel mogelijk:</strong> Enchants zijn Bind on Equip — je kunt ze op een Vellum (een speciaal papier) zetten en verkopen op het AH. Je hoeft de koper niet aanwezig te zijn. Je maakt je enchants op voorraad en zet ze op het AH. Dit maakt Enchanting het makkelijkst te "passief" te exploiteren van alle crafting professions.<br><br>KP verdelen vanaf <strong>Enchanting skill 25</strong>.',
        en:'Enchanting has two unique properties:<br><br><strong>1. No material costs via disenchanting:</strong> You destroy unwanted gear from dungeons and raids and get magical raw materials. The more content you play, the more materials you get for free.<br><br><strong>2. No Crafting Orders needed — but possible:</strong> Enchants are Bind on Equip — you can put them on a Vellum and sell on the AH. No need for the buyer to be present. You make enchants in stock and list them on the AH. This makes Enchanting the easiest to exploit "passively" of all crafting professions.<br><br>Spend KP from <strong>Enchanting skill 25</strong>.',
        da:'To unikke egenskaber:<br><br><strong>1. Ingen materialomkostninger via disenchanting:</strong> Ødelæg uønsket gear for gratis råmaterialer.<br><br><strong>2. Ingen Crafting Orders nødvendige:</strong> Enchants kan sættes på Vellum og sælges på AH. Du behøver ikke købers tilstedeværelse. KP fra <strong>Fortryllelsesfærdighed 25</strong>.'
      },
      points:{nl:'Tip: disenchant alles wat je niet gebruikt — nooit gear weggooien als Enchanter',en:'Tip: disenchant everything you do not use — never throw away gear as an Enchanter',da:'Tip: disenchant alt du ikke bruger — smid aldrig gear væk som Fortryllen'}
    },
    {
      title:{nl:'⚔ Boom 1 — Weapon Enchanting · de grootste markt',en:'⚔ Tree 1 — Weapon Enchanting · the biggest market',da:'⚔ Træ 1 — Vaabenfortryllelse · det største marked'},
      desc:{
        nl:'<strong>Wat doet het?</strong> Je kunt de beste wapen-enchants maken — permanente bonussen die spelers op hun wapen zetten. Dit zijn de duurste en meest gevraagde enchants in het spel, simpelweg omdat wapens het meest bijdragen aan schade en healing.<br><br><strong>Waarom de grootste markt?</strong> Elke speler gebruikt een wapen. Dat zijn alle 9 klassen, alle specs. Zodra iemand een nieuw wapen krijgt — uit een dungeon, raid of Crafting Order — wil hij het direct enchanten. Het is het eerste wat een speler doet met een nieuw wapen.<br><br><strong>Void-Infused Weapon Enchants:</strong> Nieuw in Midnight. Deze enchants geven een speciaal visueel effect (een paarse Void-gloed op het wapen) én een stat-bonus. Veel spelers kopen ze alleen al voor het uiterlijk. Premium prijs.',
        en:'<strong>What does it do?</strong> You can make the best weapon enchants — permanent bonuses players put on their weapon. These are the most expensive and in-demand enchants in the game, simply because weapons contribute most to damage and healing.<br><br><strong>Why the biggest market?</strong> Every player uses a weapon. That is all 9 classes, all specs. As soon as someone gets a new weapon — from a dungeon, raid or Crafting Order — they want to enchant it immediately. It is the first thing a player does with a new weapon.<br><br><strong>Void-Infused Weapon Enchants:</strong> New in Midnight. These enchants give a special visual effect (a purple Void glow on the weapon) AND a stat bonus. Many players buy them purely for the appearance. Premium price.',
        da:'<strong>Hvad gør det?</strong> De bedste vaabenfortryllelser — permanente bonusser alle spillere vil have straks ved nyt våben.<br><br><strong>Void-Infused Vaabenfortryllelser:</strong> Nyt i Midnight. Specielt visuelt effekt (lilla Void-glød) OG statsbonus. Mange køber kun for udseendets skyld.'
      },
      points:{nl:'30 punten — altijd eerste investering, universele markt',en:'30 points — always first investment, universal market',da:'30 point — altid første investering, universelt marked'}
    },
    {
      title:{nl:'💍 Boom 2 — Ring & Cloak Enchanting',en:'💍 Tree 2 — Ring & Cloak Enchanting',da:'💍 Træ 2 — Ring- og Kappe-fortryllelse'},
      desc:{
        nl:'<strong>Wat doet het?</strong> Ring-enchants en mantel-enchants zijn bijzonder omdat ze alleen aangebracht kunnen worden door een Enchanter met voldoende vaardigheid — ze staan niet op het AH als Vellum. Elke speler die ring- of mantelenchants wil, moet een Enchanter in person vinden of via een persoonlijke Crafting Order.<br><br><strong>Waarom exclusief?</strong> Rings en mantels zijn de twee uitrustingsplekken die altijd enchants krijgen maar die <em>niet op Vellum</em> gezet kunnen worden. Dus dit is een echte service — de koper moet bij jou zijn of een order plaatsen. Exclusieve markt.<br><br><strong>Twee rings per karakter:</strong> Elke speler heeft twee ringslots. Twee enchants per upgrade. De markt is dubbel zo groot als bij andere slots.',
        en:'<strong>What does it do?</strong> Ring enchants and cloak enchants are special because they can only be applied by an Enchanter with sufficient skill — they are not on the AH as Vellum. Every player who wants ring or cloak enchants must find an Enchanter in person or via a personal Crafting Order.<br><br><strong>Why exclusive?</strong> Rings and cloaks are the two equipment slots that always get enchants but <em>cannot</em> be put on Vellum. So this is a real service — the buyer must be present with you or place an order. Exclusive market.<br><br><strong>Two rings per character:</strong> Every player has two ring slots. Two enchants per upgrade. The market is twice as large as other slots.',
        da:'<strong>Hvad gør det?</strong> Ring- og kappefortryllelser kan KUN påføres af en tilstedeværende Fortryllen — ikke sælges via Vellum på AH. Eksklusivt marked.<br><br><strong>To ringpladser pr. karakter:</strong> Dobbelt så stort marked som andre slots.'
      },
      points:{nl:'25 punten — exclusieve service, niet te vervangen door AH-verkoop',en:'25 points — exclusive service, cannot be replaced by AH sales',da:'25 point — eksklusiv service, kan ikke erstattes af AH-salg'}
    },
    {
      title:{nl:'🏠 Boom 3 — Illusions & Cosmetics · premium markt',en:'🏠 Tree 3 — Illusions & Cosmetics · premium market',da:'🏠 Træ 3 — Illusioner & Kosmetik · premium marked'},
      desc:{
        nl:'<strong>Wat zijn Illusions?</strong> Visuele effecten die je over een wapen of armor legt — het wapen ziet er anders uit maar heeft geen stat-effect. Puur cosmetic. In Midnight zijn er tientallen Illusions: vlammen, ijs, Void-corruptie, licht, schaduw, en meer.<br><br><strong>Waarom premium?</strong> Spelers in WoW zijn bereid veel goud te betalen voor uitstraling. Een Void-Touched Blade Illusion kan voor meer goud verkopen dan een gewone stat-enchant, simpelweg omdat het zeldzaam en visueel indrukwekkend is.<br><br><strong>Recepten zijn zeldzaam:</strong> Illusion-recepten vallen uit zeldzame bronnen — raid-bosses, extreme zeldzame world drops, reputatie-vendors. Hoe zeldzamer het recept, hoe duurder de Illusion. Als jij een Illusion hebt die anderen niet hebben, ben je de enige aanbieder.',
        en:'<strong>What are Illusions?</strong> Visual effects layered over a weapon or armor — the weapon looks different but has no stat effect. Pure cosmetic. In Midnight there are dozens of Illusions: flames, ice, Void corruption, light, shadow, and more.<br><br><strong>Why premium?</strong> WoW players are willing to pay a lot of gold for appearance. A Void-Touched Blade Illusion can sell for more gold than a regular stat enchant, simply because it is rare and visually impressive.<br><br><strong>Recipes are rare:</strong> Illusion recipes drop from rare sources — raid bosses, extremely rare world drops, reputation vendors. The rarer the recipe, the more expensive the Illusion. If you have an Illusion others do not, you are the only supplier.',
        da:'<strong>Hvad er Illusioner?</strong> Visuelle effekter over et våben eller rustning — ren kosmetik. I Midnight er der snesevis: flammer, is, Void-korruption, lys, skygge.<br><br><strong>Hvorfor premium?</strong> Spillere betaler meget for udseende. En Void-Touched Blade Illusion kan sælge for mere end en normal statfortryllelse.'
      },
      points:{nl:'20 punten — ontgrendel zodra je zeldzame Illusion-recepten hebt uit raids',en:'20 points — unlock once you have rare Illusion recipes from raids',da:'20 point — lås op når du har sjældne Illusionsopskrifter fra raids'}
    }
  ],
  items:[
    {icon:'⚔',name:{nl:'Weapon Enchants (op Vellum)',en:'Weapon Enchants (on Vellum)',da:'Vaabenfortryllelser (på Vellum)'},desc:{nl:'Zet je enchant op een Vellum en verkoop op het AH. Geen koper nodig — passieve verkoop. Elke nieuwe wapen = nieuwe enchant nodig. Constante vraag.',en:'Put your enchant on a Vellum and sell on the AH. No buyer needed — passive sales. Every new weapon = new enchant needed. Constant demand.',da:'Sæt fortryllelse på Vellum og sælg på AH. Passivt salg. Hvert nyt våben = ny fortryllelse nødvendig.'},tag:'consumable'},
    {icon:'💍',name:{nl:'Ring Enchants (service only)',en:'Ring Enchants (service only)',da:'Ringfortryllelser (kun service)'},desc:{nl:'Alleen via persoonlijk contact of Crafting Order. Niet op Vellum. Exclusieve service — elke speler met twee ringslots is potentiële klant. Twee keer per karakter-upgrade.',en:'Only via personal contact or Crafting Order. Not on Vellum. Exclusive service — every player with two ring slots is a potential customer. Twice per character upgrade.',da:'Kun via personlig kontakt eller Crafting Order. Eksklusiv service — to ringpladser pr. karakter.'},tag:'service'},
    {icon:'✨',name:{nl:'Void-Infused Enchants (premium)',en:'Void-Infused Enchants (premium)',da:'Void-Infused Fortryllelser (premium)'},desc:{nl:'Speciale Midnight-enchants met Void-gloedeffect. Spelers kopen ze voor uiterlijk én stats. Premium prijs. Recepten uit Void-zones en raids.',en:'Special Midnight enchants with Void glow effect. Players buy them for appearance AND stats. Premium price. Recipes from Void zones and raids.',da:'Specielle Midnight-fortryllelser med Void-glødeffekt. Købes for udseende OG stats. Præmiepris.'},tag:'consumable'},
    {icon:'🔮',name:{nl:'Prismatic Crystals',en:'Prismatic Crystals',da:'Prismatiske Krystaller'},desc:{nl:'Zeldzame enchanting-materialen die je krijgt uit het disenchanten van Epic raid-gear. Nodig voor de allerbeste enchants. Nooit genoeg op de markt — altijd hoog geprijsd.',en:'Rare enchanting materials obtained from disenchanting Epic raid gear. Needed for the very best enchants. Never enough on the market — always high priced.',da:'Sjældne fortryllelsesmaterialer fra disenchanting af Epic raid-gear. Nødvendig til de bedste fortryllelser. Altid høj pris.'},tag:'material'},
    {icon:'🌈',name:{nl:'Illusions (cosmetisch)',en:'Illusions (cosmetic)',da:'Illusioner (kosmetisk)'},desc:{nl:'Puur visueel. Zeldzame recepten = zeldzame Illusions = hoge prijs. Spelers betalen voor uitstraling. Geen stat-effect maar enorme vraag bij collectors en styling-liefhebbers.',en:'Pure visual. Rare recipes = rare Illusions = high price. Players pay for appearance. No stat effect but huge demand among collectors and style enthusiasts.',da:'Ren visuel. Sjælden opskrift = sjælden illusion = høj pris. Spillere betaler for udseende.'},tag:'cosmetic'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">📦 Enchanting orders — twee modellen tegelijk</div><div class="co-desc">Enchanting is de enige profession die beide verkoopmodellen tegelijk gebruikt:<br><br><strong>Model 1: Vellum → AH (passief)</strong><br>Je craft een enchant, zet hem op een Vellum (koopt bij de Enchanting trainer voor een paar zilverstukken), en verkoopt het Vellum op het AH. De koper kan het zelf aanbrengen wanneer hij wil. Geen afspraak nodig. Dit is hoe je bulk-enchants verkoopt.<br><br><strong>Model 2: Persoonlijke service (ring/mantel)</strong><br>Ring- en mantelenchants kunnen niet op Vellum. Adverteer in Trade Channel ("WTS ring enchants, fluister me") of accepteer Crafting Orders. Hogere vergoeding omdat het exclusiever is.</div></div>
<div class="co-step"><div class="co-title">⭐ Wanneer zijn enchants het meest waard?</div><div class="co-desc">
  <strong>Bij gear-upgrades:</strong><br>
  Elke keer als een speler een nieuw stuk gear krijgt, wil hij het enchanten. Dat gebeurt:<br>
  • Na elke raid-avond (nieuwe drops)<br>
  • Na een Mythic+ personal loot<br>
  • Na een Crafting Order voor nieuw gear<br>
  • Bij patch-dag (nieuwe gear-tier)<br><br>
  <strong>Piek-momenten voor enchant-verkoop:</strong><br>
  → Dinsdag na raid-reset — meeste nieuwe gear in de markt<br>
  → Patch-dag — compleet nieuwe gear-tier, iedereen enchant alles opnieuw<br>
  → Eerste twee weken na expansie-launch — massale gear-upgrades<br><br>
  Houd altijd een buffer van 10-20 enchants op het AH. Ze verkopen 24/7.
</div></div>
<div class="co-step"><div class="co-title">💰 Gratis materialen — hoe je nooit hoeft te kopen</div><div class="co-desc">
  Als actieve speler krijg je voortdurend gear die je niet gebruikt:<br>
  • Dungeon-drops die niet jouw spec zijn<br>
  • Raid-gear dat een downgrade is<br>
  • PvP-gear bij verkeerde stats<br><br>
  In plaats van dit te verkopen aan de NPC-vendor (minimale opbrengst) → disenchant het. Je krijgt Arcane Dust, Eternals, en soms Prismatic Crystals. Die zijn allemaal meer waard dan de vendor-prijs en vormen je gratis grondstoffen.<br><br>
  Een actieve raider met Enchanting heeft nooit materiaalkosten. Alles wat hij craft is netto winst.
</div></div>
<div class="tip-box"><strong>💡 Beste tip voor Enchanting:</strong> Zet elke avond je enchant-buffer bij op het AH. Enchants verkopen het best tussen 19:00 en 23:00 server time — dat is wanneer de meeste mensen raiden en nieuwe gear krijgen. Als jouw enchants dan niet op het AH staan, loop je de meeste verkopen mis. Het kost je vijf minuten per dag.</div>`,
    en:`<div class="co-step"><div class="co-title">📦 Enchanting orders — two models simultaneously</div><div class="co-desc">Enchanting is the only profession using both sales models at once:<br><br><strong>Model 1: Vellum → AH (passive)</strong> — Craft enchant, put on Vellum, sell on AH. Buyer applies it themselves. No appointment needed. Bulk sales.<br><br><strong>Model 2: Personal service (ring/cloak)</strong> — Cannot put on Vellum. Advertise in Trade Channel or accept Crafting Orders. Higher fee because it is exclusive.</div></div>
<div class="co-step"><div class="co-title">⭐ When are enchants most valuable?</div><div class="co-desc">
  Every time a player gets new gear they want to enchant it. Peak moments:<br>
  → Tuesday after raid reset — most new gear in the market<br>
  → Patch day — new gear tier, everyone re-enchants everything<br>
  → First two weeks after expansion launch<br><br>
  Always keep a buffer of 10-20 enchants on the AH. They sell 24/7.
</div></div>
<div class="co-step"><div class="co-title">💰 Free materials — how to never have to buy</div><div class="co-desc">
  Instead of selling unused gear to the NPC vendor → disenchant it. You get Arcane Dust, Eternals, and sometimes Prismatic Crystals — all worth more than vendor price and forming your free raw materials.<br><br>
  An active raider with Enchanting never has material costs. Everything crafted is net profit.
</div></div>
<div class="tip-box"><strong>💡 Best tip for Enchanting:</strong> Restock your enchant buffer on the AH every evening. Enchants sell best between 19:00 and 23:00 server time — when most people raid and get new gear. Five minutes per day maximum effort.</div>`,
    da:`<div class="co-step"><div class="co-title">📦 Fortryllelsesordrer — to modeller på én gang</div><div class="co-desc">
<strong>Model 1: Vellum → AH (passivt)</strong> — Craft fortryllelse, sæt på Vellum, sælg på AH. Ingen aftale nødvendig.<br>
<strong>Model 2: Personlig service (ring/kappe)</strong> — Kan ikke sættes på Vellum. Annoncer i Trade Channel eller Crafting Orders. Højere honorar.
</div></div>
<div class="co-step"><div class="co-title">⭐ Hvornår er fortryllelser mest værd?</div><div class="co-desc">
  Toppidsmomenter: Tirsdag efter raid-nulstilling, Patch-dag, Første to uger efter lancering.<br>
  Hold altid en buffer på 10-20 fortryllelser på AH — de sælger 24/7.
</div></div>
<div class="co-step"><div class="co-title">💰 Gratis materialer</div><div class="co-desc">Disenchant alt uønsket gear i stedet for at sælge til NPC. Arcane Dust og Eternals er mere værd end sælgerpris. Aktiv raider med Fortryllelse = aldrig materialomkostninger.</div></div>
<div class="tip-box"><strong>💡 Bedste tip:</strong> Genopfyld din fortryllesesbuffer på AH hver aften. Bedst salg 19-23 server time. Fem minutter dagligt.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-enchanting-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/enchanting-leveling-guide'
};

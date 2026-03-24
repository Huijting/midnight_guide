// ENCHANTING DATA — v2.3
const ENCHANTING = {
  id:'enchanting', icon:'✨', cat:'crafting', accent:'#9b59b6',
  name:{nl:'Enchanting',en:'Enchanting'},
  tier:'B',
  lore:{
    nl:'Enchanting is een <em>crafting profession</em> waarbij je magische krachten toevoegt aan uitrusting van andere spelers. Je "enchant" wapens, sieraden en armor met permanente stat-bonussen. Enchanting is uniek omdat het <strong>geen externe grondstoffen</strong> nodig heeft — je haalt je eigen materialen uit de wereld door ongewenst gear te <em>disenchanten</em> (vernietigen voor magische stofjes).<br><br>Elke speler in het spel wil zijn nieuwe gear enchanten zodra hij het aantrekt. Dat maakt Enchanting een van de meest constante inkomstenstromen. Nieuw in Midnight: <strong>Void-Infused Enchants</strong> met speciale visuele effecten, en <strong>Prismatic Crystals</strong> die combinaties van meerdere stats tegelijk geven.',
    en:'Enchanting is a <em>crafting profession</em> where you add magical powers to other players\' equipment. You enchant weapons, jewelry and armor with permanent stat bonuses. Enchanting is unique because it needs <strong>no external raw materials</strong> — you obtain your own materials by <em>disenchanting</em> (destroying) unwanted gear for magical dust.<br><br>Every player wants to enchant their new gear the moment they put it on. That makes Enchanting one of the most constant income streams. New in Midnight: <strong>Void-Infused Enchants</strong> with special visual effects, and <strong>Prismatic Crystals</strong> giving combinations of multiple stats at once.'},
  goldrating:4, userating:5,
  trainer:{
    name:'Dolothos',
    loc:{
      nl:'Trainer Aelindra Spellweave staat in de <strong>Arcane Sanctum</strong> van Silvermoon City — de magische toren in het noordoosten van de stad. Ze is omringd door zwevende runen en gloeiende kristallen. Je kunt haar vinden op de tweede verdieping.',
      en:'Trainer Aelindra Spellweave is in the <strong>Arcane Sanctum</strong> of Silvermoon City — the magical tower in the northeast of the city. She is surrounded by floating runes and glowing crystals. Find her on the second floor.'},
    way:'/way #2393 47.91 53.90',
    note:{
      nl:'💡 <strong>Disenchanting — je eigen grondstoffenbron:</strong> Als Enchanter kun je elk stuk gear in je tassen vernietigen (disenchanten) voor Arcane Dust, Lesser Eternals of Greater Eternals. Dit betekent dat elke dungeon-run die je doet én elk stuk gear dat je niet gebruikt direct omgezet kan worden in enchanting-materialen. Je koopt nooit grondstoffen op het AH.',
      en:'💡 <strong>Disenchanting — your own material source:</strong> As an Enchanter you can destroy any piece of gear in your bags (disenchant) for Arcane Dust, Lesser Eternals or Greater Eternals. This means every dungeon run you do and every piece of gear you do not use can be directly converted into enchanting materials. You never buy raw materials on the AH.'}
  },
  specs:[
    {
      title:{nl:'📖 De vier Enchanting-specialisatietakken',en:'📖 The four Enchanting specialization trees'},
      desc:{
        nl:'Enchanting heeft <strong>vier specialisatietakken</strong>: <em>Elevating Equipment</em> (alle gear-enchants, per factie georganiseerd), <em>Transitories, Tonics & Tools</em> (Mana Oils, Combat Wands, Illusions), <em>Disenchanting Delegate</em> (betere materialen uit disenchanten) en <em>Spellbound Shatterer</em> (crafting stats + Shatter Essence buff). Je ontgrendelt ze op skill 25, 50, 60 en 75.<br><br>Dag 1 verdien je ~60–70 KP uit eerste crafts en schatten. Daarna ~17 KP per week. <strong>Let op:</strong> enchants zijn <em>Bind on Equip</em> — je verkoopt ze op Vellum via het AH. Dat maakt Enchanting een van de makkelijkste professions om passief te monetariseren.',
        en:'Enchanting has <strong>four specialization trees</strong>: <em>Elevating Equipment</em> (all gear enchants, organized by faction), <em>Transitories, Tonics & Tools</em> (Mana Oils, Combat Wands, Illusions), <em>Disenchanting Delegate</em> (better materials from disenchanting) and <em>Spellbound Shatterer</em> (crafting stats + Shatter Essence buff). Unlocked at skill 25, 50, 60 and 75.<br><br>Day 1 you earn ~60–70 KP from first crafts and treasures. After that ~17 KP per week. <strong>Note:</strong> enchants are <em>Bind on Equip</em> — you sell them on Vellum via the AH. This makes Enchanting one of the easiest professions to monetize passively.'},
      points:{nl:'Tip: disenchant alles wat je niet gebruikt — nooit gear weggooien als Enchanter',en:'Tip: disenchant everything you do not use — never throw away gear as an Enchanter'}
    },
    {
      title:{nl:'✨ Boom 1 — Elevating Equipment · alle gear-enchants per factie',en:'✨ Tree 1 — Elevating Equipment · all gear enchants by faction'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Alle enchants voor gear-slots — Weapon, Ring, Chest, Helm, Shoulder, Boot en Profession Tool enchants. Ze zijn <em>niet</em> per slot georganiseerd maar per <strong>factie</strong>:<br><br>• <em>Thalassian Talents</em> — Weapon, Ring, Chest, Helm, Shoulder, Boot, Tool (Thalassian stijl)<br>• <em>Amani Augments</em> — Weapon, Ring, Helm, Shoulder, Boot, Tool (Amani stijl)<br>• <em>Haranir Heightening</em> — Weapon, Chest, Boot, Helm, Shoulder, Ring, Tool (Haranir stijl)<br><br>Je hoeft maar in <em>één factie-sub-spec</em> te investeren om alle slot-typen voor die factie te unlocken. Kijk op Wowhead BiS-lijsten welke factie de meest gevraagde enchants heeft. Investeer eerst 30 punten in de root node — dat ontgrendelt alle drie sub-specs.',
        en:'<strong>What does this do?</strong> All enchants for gear slots — Weapon, Ring, Chest, Helm, Shoulder, Boot and Profession Tool enchants. They are <em>not</em> organized by slot but by <strong>faction</strong>:<br><br>• <em>Thalassian Talents</em> — Weapon, Ring, Chest, Helm, Shoulder, Boot, Tool (Thalassian style)<br>• <em>Amani Augments</em> — Weapon, Ring, Helm, Shoulder, Boot, Tool (Amani style)<br>• <em>Haranir Heightening</em> — Weapon, Chest, Boot, Helm, Shoulder, Ring, Tool (Haranir style)<br><br>You only need to invest in <em>one faction sub-spec</em> to unlock all slot types for that faction. Check Wowhead BiS lists to see which faction has the most demanded enchants. First invest 30 points in the root node — that unlocks all three sub-specs.'},
      points:{nl:'30 punten root → kies één factie-sub-spec (20 punten) → alle enchant-slots van die factie ontgrendeld',en:'30 points root → pick one faction sub-spec (20 points) → all enchant slots for that faction unlocked'}
    },
    {
      title:{nl:'🧪 Boom 2 — Transitories, Tonics & Tools · consumables en Illusions',en:'🧪 Tree 2 — Transitories, Tonics & Tools · consumables and Illusions'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Mana Oils (tijdelijke mana-regen buff op wapen), Combat Wands (verbruiksartikelen voor casters), de Enchanting Rod (jouw eigen profession tool) en <em>Temporary Illusions</em> — tijdelijke visuele effecten op wapens.<br><br><strong>Mana Oils zijn terug:</strong> In Midnight zijn Mana Oils opnieuw beschikbaar — casters en healers gebruiken ze als wapen-enchant-alternatief voor content waarbij ze mana-regeneratie nodig hebben. Steady niche-markt.<br><br><strong>Illusions:</strong> Tijdelijke visuele weapon-skins. Goedkoper dan permanente enchants maar toch gevraagd door spelers die hun wapen een speciale uitstraling willen geven zonder er een permanente enchant op te verliezen.',
        en:'<strong>What does this make?</strong> Mana Oils (temporary mana-regen buff on weapon), Combat Wands (consumables for casters), the Enchanting Rod (your own profession tool) and <em>Temporary Illusions</em> — temporary visual effects on weapons.<br><br><strong>Mana Oils are back:</strong> In Midnight, Mana Oils return — casters and healers use them as a weapon buff alternative when they need mana regeneration in content. Steady niche market.<br><br><strong>Illusions:</strong> Temporary visual weapon skins. Cheaper than permanent enchants but still in demand from players wanting a special look without committing a permanent enchant.'},
      points:{nl:'5 punten root → kies sub-spec op basis van markt (Mana Oils vs. Illusions vs. Wands)',en:'5 points root → pick sub-spec based on market (Mana Oils vs. Illusions vs. Wands)'}
    },
    {
      title:{nl:'💎 Boom 3 — Disenchanting Delegate · betere materialen',en:'💎 Tree 3 — Disenchanting Delegate · better materials'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Verhoogt de kwaliteit en hoeveelheid materialen die je krijgt uit disenchanten — Eversinging Dust, Radiant Shards en Dawn Crystals. Sub-specs:<br>• <em>Dust Deliverer</em> — meer dust uit uncommon (groen) gear<br>• <em>Shard Supplier</em> — meer shards uit rare (blauw) gear<br>• <em>Crystal Collector</em> — meer crystals uit epic (paars) gear<br><br><strong>Nieuw in Midnight:</strong> De <em>Dawn Shatter</em> en <em>Radiant Shatter</em> crafts zijn beschikbaar vanaf dag 1 (in TWW waren ze gelocked achter latere patches). Je kunt Dawn Crystals → Shards → Dust shatter voor een betrouwbare material-keten. De materialen zijn altijd nodig voor Enchanting — je eigen grondstoffen raken nooit "onnodig".',
        en:'<strong>What does this do?</strong> Increases quality and quantity of materials you get from disenchanting — Eversinging Dust, Radiant Shards and Dawn Crystals. Sub-specs:<br>• <em>Dust Deliverer</em> — more dust from uncommon (green) gear<br>• <em>Shard Supplier</em> — more shards from rare (blue) gear<br>• <em>Crystal Collector</em> — more crystals from epic (purple) gear<br><br><strong>New in Midnight:</strong> The <em>Dawn Shatter</em> and <em>Radiant Shatter</em> crafts are available from day 1. You can shatter Dawn Crystals → Shards → Dust for a reliable material chain. Materials are always needed for Enchanting.'},
      points:{nl:'30 punten root → kies één sub-spec op basis van welk gear je het meest disenchant',en:'30 points root → pick one sub-spec based on which gear you disenchant most'}
    },
    {
      title:{nl:'⚡ Boom 4 — Spellbound Shatterer · crafting stats + Shatter Essence',en:'⚡ Tree 4 — Spellbound Shatterer · crafting stats + Shatter Essence'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Verhoogt je crafting stats — Multicraft, Ingenuity, Resourcefulness — voor alle Enchanting crafts. Unlock ook de <em>Shatter Essence</em> buff: consumeer een Mote (bv. Mote of Wild Magic) voor een tijdelijke boost op Resourcefulness, Ingenuity en Multicraft bij je volgende craft. <strong>Let op: de buff is niet passief</strong> — je moet Shatter Essence activeren vóór je craft.<br><br><strong>Sub-specs:</strong> <em>Responsible Resources</em> (Resourcefulness — minder materiaalverbruik) en <em>Infinite Ingenuity</em> (Ingenuity — minder Concentration-kosten). Ingenuity is het meest waardevol voor bulk-crafters die veel met Concentration werken.<br><br><strong>Aanbeveling:</strong> Investeer hier 20 punten als tweede of derde boom nadat je je enchant-factie hebt gevestigd.',
        en:'<strong>What does this do?</strong> Boosts your crafting stats — Multicraft, Ingenuity, Resourcefulness — for all Enchanting crafts. Also unlocks the <em>Shatter Essence</em> buff: consume a Mote (e.g. Mote of Wild Magic) for a temporary boost to Resourcefulness, Ingenuity and Multicraft on your next craft. <strong>Note: the buff is NOT passive</strong> — you must activate Shatter Essence before your craft.<br><br><strong>Sub-specs:</strong> <em>Responsible Resources</em> (Resourcefulness) and <em>Infinite Ingenuity</em> (Ingenuity — reduces Concentration cost). Ingenuity is most valuable for bulk crafters using lots of Concentration.<br><br><strong>Recommendation:</strong> Put 20 points here as second or third tree after establishing your enchant faction.'},
      points:{nl:'20 punten → Shatter Essence actief → Responsible Resources of Infinite Ingenuity als sub-spec',en:'20 points → Shatter Essence active → Responsible Resources or Infinite Ingenuity as sub-spec'}
    }
  ],
  items:[
    {icon:'⚔',name:{nl:'Weapon Enchants (op Vellum)',en:'Weapon Enchants (on Vellum)'},desc:{nl:'Zet je enchant op een Vellum en verkoop op het AH. Geen koper nodig — passieve verkoop. Elke nieuwe wapen = nieuwe enchant nodig. Constante vraag.',en:'Put your enchant on a Vellum and sell on the AH. No buyer needed — passive sales. Every new weapon = new enchant needed. Constant demand.'},tag:'consumable'},
    {icon:'💍',name:{nl:'Ring Enchants (service only)',en:'Ring Enchants (service only)'},desc:{nl:'Alleen via persoonlijk contact of Crafting Order. Niet op Vellum. Exclusieve service — elke speler met twee ringslots is potentiële klant. Twee keer per karakter-upgrade.',en:'Only via personal contact or Crafting Order. Not on Vellum. Exclusive service — every player with two ring slots is a potential customer. Twice per character upgrade.'},tag:'service'},
    {icon:'✨',name:{nl:'Void-Infused Enchants (premium)',en:'Void-Infused Enchants (premium)'},desc:{nl:'Speciale Midnight-enchants met Void-gloedeffect. Spelers kopen ze voor uiterlijk én stats. Premium prijs. Recepten uit Void-zones en raids.',en:'Special Midnight enchants with Void glow effect. Players buy them for appearance AND stats. Premium price. Recipes from Void zones and raids.'},tag:'consumable'},
    {icon:'🔮',name:{nl:'Prismatic Crystals',en:'Prismatic Crystals'},desc:{nl:'Zeldzame enchanting-materialen die je krijgt uit het disenchanten van Epic raid-gear. Nodig voor de allerbeste enchants. Nooit genoeg op de markt — altijd hoog geprijsd.',en:'Rare enchanting materials obtained from disenchanting Epic raid gear. Needed for the very best enchants. Never enough on the market — always high priced.'},tag:'material'},
    {icon:'🌈',name:{nl:'Illusions (cosmetisch)',en:'Illusions (cosmetic)'},desc:{nl:'Puur visueel. Zeldzame recepten = zeldzame Illusions = hoge prijs. Spelers betalen voor uitstraling. Geen stat-effect maar enorme vraag bij collectors en styling-liefhebbers.',en:'Pure visual. Rare recipes = rare Illusions = high price. Players pay for appearance. No stat effect but huge demand among collectors and style enthusiasts.'},tag:'cosmetic'}
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
<div class="tip-box"><strong>💡 Best tip for Enchanting:</strong> Restock your enchant buffer on the AH every evening. Enchants sell best between 19:00 and 23:00 server time — when most people raid and get new gear. Five minutes per day maximum effort.</div>`},
  method_url:'https://www.method.gg/guides/midnight-enchanting-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/enchanting-leveling-guide'
};

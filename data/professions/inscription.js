// INSCRIPTION DATA — v2.3
const INSCRIPTION = {
  id:'inscription', icon:'📜', cat:'crafting', accent:'#2980b9',
  name:{nl:'Inscription',en:'Inscription'},
  tier:'S',
  lore:{
    nl:'Inscription is een <em>crafting profession</em> waarbij je kruiden vermaalt tot inkt en die inkt gebruikt om <strong>glyphs, tomes, vantabladen en Darkmoon-kaarten</strong> te maken. Inscription heeft drie volledig verschillende marktsegmenten: de wekelijkse consumable-markt (Contracts), de eenmalige unlockables (Glyphs), en de zeldzame high-value markt (Darkmoon-kaarten). Elke markt werkt anders en geeft een andere inkomststroom.<br><br>Combineer met Herbalism voor gratis inkt-grondstoffen.',
    en:'Inscription is a <em>crafting profession</em> where you grind herbs into ink and use that ink to craft <strong>glyphs, tomes, contracts and Darkmoon cards</strong>. Inscription has three completely different market segments: the weekly consumable market (Contracts), the one-time unlockables (Glyphs), and the rare high-value market (Darkmoon cards). Each market works differently and provides a different income stream.<br><br>Combine with Herbalism for free ink raw materials.'},
  goldrating:3, userating:4,
  trainer:{
    name:'Zantasia',
    loc:{
      nl:'Trainer <strong>Zantasia</strong> staat in de <strong>Library of Silvermoon</strong> aan de hoofdstraat van Silvermoon City (officiële NPC-naam).',
      en:'Trainer <strong>Zantasia</strong> is in the <strong>Library of Silvermoon</strong> on the main street of Silvermoon City (official in-game NPC name).'},
    way:'/way #2393 46.81 51.73',
    note:{
      nl:'💡 <strong>Combineer met Herbalism:</strong> Inscription verbruikt enorme hoeveelheden kruiden voor inkt. Met Herbalism plukt je je eigen grondstoffen — anders ben je afhankelijk van het AH voor constant kruid-inkopen, wat je winstmarge flink aantast.',
      en:'💡 <strong>Combine with Herbalism:</strong> Inscription consumes enormous amounts of herbs for ink. With Herbalism you pick your own raw materials — otherwise you depend on the AH for constant herb purchases, significantly eating into your profit margin.'}
  },
  specs:[
    {
      title:{nl:'📖 De vier Inscription-specialisatietakken',en:'📖 The four Inscription specialization trees'},
      desc:{
        nl:'Inscription heeft <strong>vier specialisatietakken</strong>: <em>Blueprints</em> (staves, bows, off-hands plus profession tools voor Alchemy, Cooking en Inscription), <em>Calm Hands</em> (crafting stats + bonus KP uit Treatise), <em>Perfected Products</em> (kwaliteit voor missives, contracts, vantus runes) en <em>Darkmoon Curiosity</em> (Darkmoon kaarten, trinkets en Sigil embellishments). Ontgrendeld op skill 25, 50, 60, 75.<br><br>Dag 1: ~40–50 KP. Daarna ~19 KP/week. <strong>Missives zijn de veiligste start</strong> — elke crafter heeft ze nodig voor crafting orders.',
        en:'Inscription has <strong>four specialization trees</strong>: <em>Blueprints</em> (staves, bows, off-hands plus tools for Alchemy, Cooking and Inscription), <em>Calm Hands</em> (crafting stats + bonus KP from Treatise), <em>Perfected Products</em> (quality for missives, contracts, vantus runes) and <em>Darkmoon Curiosity</em> (Darkmoon cards, trinkets and Sigil embellishments). Unlocked at skill 25, 50, 60, 75.<br><br>Day 1: ~40–50 KP. After that ~19 KP/week. <strong>Missives are the safest start</strong> — every crafter needs them for crafting orders.'},
      points:{nl:'Tip: start met Calm Hands voor Multicraft/Resourcefulness op alles, daarna productfocus kiezen',en:'Tip: start with Calm Hands for Multicraft/Resourcefulness on everything, then pick product focus'}
    },
    {
      title:{nl:'📐 Boom 1 — Blueprints · wapens, bows en profession tools',en:'📐 Tree 1 — Blueprints · weapons, bows and profession tools'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Epic wapens via sub-specs: <em>Staff Carving</em> (staves — voor casters/healers/Ferals), <em>Archery</em> (bows — Inscription is naast Engineering de enige die bows maakt) en <em>Illumination</em> (off-hands voor casters). Plus profession tools voor Alchemy, Cooking en Inscription via <em>Field Research</em> als tussennode.<br><br><strong>Bows zijn bijzonder:</strong> Gedeeld met Engineering — wie goedkoper kan leveren wint de markt. Staves hebben meer vraag (meer specs gebruiken ze).<br><br><strong>Tools:</strong> Scribe\'s Quill (eigen tool), Alchemist\'s Mixing Rod en Chef\'s Rolling Pin. Launch-periode: maximale vraag van alle crafters tegelijk.',
        en:'<strong>What does this make?</strong> Epic weapons via sub-specs: <em>Staff Carving</em> (staves — for casters/healers/Ferals), <em>Archery</em> (bows — Inscription alongside Engineering is the only bow-maker) and <em>Illumination</em> (off-hands for casters). Plus profession tools for Alchemy, Cooking and Inscription via <em>Field Research</em> node.<br><br><strong>Bows are special:</strong> Shared market with Engineering — cheapest supplier wins. Staves have more demand (more specs use them).'},
      points:{nl:'15 punten Field Research → kies weapon sub-spec → 15 punten voor recipe unlock',en:'15 points Field Research → pick weapon sub-spec → 15 points for recipe unlock'}
    },
    {
      title:{nl:'✋ Boom 2 — Calm Hands · crafting stats + bonus KP',en:'✋ Tree 2 — Calm Hands · crafting stats + bonus KP'},
      desc:{
        nl:'<strong>Wat doet dit?</strong> Verhoogt Multicraft, Resourcefulness en Ingenuity voor <em>alle</em> Inscription crafts tegelijk. Met punten hier levert je wekelijkse Treatise-craft een bonus KP op.<br><br><strong>Sub-specs:</strong> <em>Keen Eye</em> (Resourcefulness — materialen terug bij crafts). Begin hier als je bulk-producten maakt (missives, contracts).<br><br><strong>Aanbeveling:</strong> Start met 20 punten voor Multicraft en Resourcefulness op alles — maakt elk daarna gemaakt product winstgevender.',
        en:'<strong>What does this do?</strong> Increases Multicraft, Resourcefulness and Ingenuity for <em>all</em> Inscription crafts. With points here your weekly Treatise craft yields a bonus KP.<br><br><strong>Sub-specs:</strong> <em>Keen Eye</em> (Resourcefulness). Start here if making bulk products (missives, contracts).<br><br><strong>Recommendation:</strong> Start with 20 points for Multicraft and Resourcefulness on everything — makes every subsequent product more profitable.'},
      points:{nl:'20 punten → Keen Eye sub-spec → Multicraft + Resourcefulness actief op alle Inscription crafts',en:'20 points → Keen Eye sub-spec → Multicraft + Resourcefulness active on all Inscription crafts'}
    },
    {
      title:{nl:'✨ Boom 3 — Perfected Products · missives, contracts en vantus runes',en:'✨ Tree 3 — Perfected Products · missives, contracts and vantus runes'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Verbetert kwaliteit van: milling-output, inks, ciphers, missives, contracts en vantus runes. Sub-spec: <em>Parchment</em> — alle drie producttypes delen deze node.<br><br><strong>Missives zijn het veiligste:</strong> 6 combat stat missives + 7 profession stat missives = 13 types. Elke crafter heeft ze nodig voor crafting orders. Hoogste volume van alle Inscription-producten.<br><br><strong>Contracts:</strong> Één per warband per week — stabiele vraag maar kleinere markt.<br><br><strong>Vantus Runes:</strong> Één per raid-tier — sla over tot de raid opent.',
        en:'<strong>What does this make?</strong> Improves quality of: milling output, inks, ciphers, missives, contracts and vantus runes. Sub-spec: <em>Parchment</em> — all three product types share this node.<br><br><strong>Missives are safest:</strong> 6 combat stat missives + 7 profession stat missives = 13 types. Every crafter needs them for crafting orders. Highest volume of all Inscription products.<br><br><strong>Contracts:</strong> One per warband per week — stable demand but smaller market.<br><br><strong>Vantus Runes:</strong> One per raid tier — skip until the raid opens.'},
      points:{nl:'Perfected Products Parchment node → missives als eerste product, contracts daarna',en:'Perfected Products Parchment node → missives as first product, contracts after'}
    },
    {
      title:{nl:'🃏 Boom 4 — Darkmoon Curiosity · kaarten, trinkets en Sigils',en:'🃏 Tree 4 — Darkmoon Curiosity · cards, trinkets and Sigils'},
      desc:{
        nl:'<strong>Wat maakt dit?</strong> Darkmoon Kaarten per pak-type (Blood, Hunt, Rot, Void). Elke sub-spec leert <em>Inscribe</em> (nieuw kaart craften) en op 10 punten <em>Transcribe</em> (kaarten converteren). Daarna onderverdeeld in <em>Darkmoon Dominion</em> (Epic trinket-recept) of <em>Darkmoon Sigil</em> (embellishment).<br><br><strong>Nieuw in Midnight:</strong> Kaarten zijn terug als craftable items. Een vol pak (8 kaarten) is een bruikbaar trinket dat door een Scribe kan worden geüpgraded naar Epic ilvl.<br><br><strong>Aanbeveling:</strong> Wacht op class guides en marktdata. Kijk welk pak BiS is voor de meeste specs, begin dan met dat pak.',
        en:'<strong>What does this make?</strong> Darkmoon Cards by suit type (Blood, Hunt, Rot, Void). Each sub-spec teaches <em>Inscribe</em> (craft new card) and at 10 points <em>Transcribe</em> (convert cards). Split into <em>Darkmoon Dominion</em> (Epic trinket recipe) or <em>Darkmoon Sigil</em> (embellishment).<br><br><strong>New in Midnight:</strong> Cards are back as craftable items. A full deck (8 cards) is a usable trinket upgradeable by a Scribe to Epic ilvl.<br><br><strong>Recommendation:</strong> Wait for class guides and market data. Start with the suit that is BiS for most specs.'},
      points:{nl:'Root (20) → kies pak-type → Darkmoon Dominion of Sigil als sub-spec',en:'Root (20) → pick suit type → Darkmoon Dominion or Sigil as sub-spec'}
    }
  ],
  items:[
    {icon:'📋',name:{nl:'Contracts (wekelijks)',en:'Contracts (weekly)'},desc:{nl:'7 dagen reputatiebonus per contract. Elke week opnieuw gekocht door dezelfde spelers. Meest stabiele Inscription-inkomen.',en:'7 days reputation bonus per contract. Bought again every week by the same players. Most stable Inscription income.'},tag:'consumable'},
    {icon:'📚',name:{nl:'Tomes of the Tranquil Mind',en:'Tomes of the Tranquil Mind'},desc:{nl:'Wissel je talent-build buiten combat. Elke speler die switcht tussen content-types koopt er één. Constante vraag.',en:'Switch your talent build outside combat. Every player switching between content types buys one. Constant demand.'},tag:'consumable'},
    {icon:'🎨',name:{nl:'Glyphs (cosmetisch)',en:'Glyphs (cosmetic)'},desc:{nl:'Permanente spell-cosmetica. Hoog bij launch, daalt daarna. Koop en verzamel zeldzame glyph-recepten voor langdurig inkomen.',en:'Permanent spell cosmetics. High at launch, decreases afterward. Collect rare glyph recipes for lasting income.'},tag:'cosmetic'},
    {icon:'🃏',name:{nl:'Darkmoon Cards',en:'Darkmoon Cards'},desc:{nl:'Willekeurige kaart per craft. Spelers betalen veel voor specifieke ontbrekende kaarten. Compleet pak = krachtig trinket. Altijd hoge waarde.',en:'Random card per craft. Players pay a lot for specific missing cards. Complete deck = powerful trinket. Always high value.'},tag:'gear'},
    {icon:'📜',name:{nl:'Voidscribed Tomes (Housing)',en:'Voidscribed Tomes (Housing)'},desc:{nl:'Decoratieve boeken en tomes voor je Housing-kamer. Unieke Inscription-decoraties. Niche markt maar geen concurrentie.',en:'Decorative books and tomes for your Housing room. Unique Inscription decorations. Niche market but no competition.'},tag:'utility'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">📦 Inscription verkoop — drie modellen tegelijk</div><div class="co-desc">Inscription is uniek omdat je drie compleet verschillende verkoopmodellen tegelijk kunt draaien:<br><br><strong>AH-model (Glyphs, Tomes, Cards):</strong> Maak op voorraad, zet op het AH, wacht op verkoop. Passief inkomen.<br><strong>Wekelijks model (Contracts):</strong> Elke week reset = elke week nieuwe batch maken en verkopen.<br><strong>Trading-model (Darkmoon Cards):</strong> Maak kaarten, verkoop of verzamel ze, handel in specifieke kaarten die spelers missen.</div></div>
<div class="co-step"><div class="co-title">⭐ Prioriteit per maand</div><div class="co-desc">
  <strong>Maand 1-2 (launch):</strong><br>
  → Focus op Glyphs — massale vraag van nieuwe karakters<br>
  → Begin Darkmoon Cards te maken — verkoop losse kaarten<br>
  → Zet Contracts op als bijverdienste<br><br>
  <strong>Maand 3+ (langetermijn):</strong><br>
  → Glyphs zijn minder waard (markt verzadigd)<br>
  → Contracts zijn de ruggengraat — elke week stabiel inkomen<br>
  → Darkmoon Cards blijven gevraagd voor alts en nieuwe spelers
</div></div>
<div class="tip-box"><strong>💡 Beste tip voor Inscription:</strong> Bewaar je zeldzame glyph-recepten. Als je een recept hebt dat anderen niet hebben, ben jij de enige aanbieder op de server. Sommige zeldzame glyphs houden hun waarde maanden lang. Zoek actief naar zeldzame recepten in obscure locaties, vendor-rotaties en raid-drops.</div>`,
    en:`<div class="co-step"><div class="co-title">📦 Inscription sales — three models simultaneously</div><div class="co-desc">Three completely different sales models at once:<br><br><strong>AH model (Glyphs, Tomes, Cards):</strong> Make in stock, list on AH, wait for sales. Passive income.<br><strong>Weekly model (Contracts):</strong> Weekly reset = weekly new batch.<br><strong>Trading model (Darkmoon Cards):</strong> Make cards, sell or collect them, trade in specific cards players are missing.</div></div>
<div class="co-step"><div class="co-title">⭐ Priority per month</div><div class="co-desc">
  <strong>Month 1-2 (launch):</strong> Focus on Glyphs — massive demand from new characters. Start Darkmoon Cards. Contracts as side income.<br>
  <strong>Month 3+ (long-term):</strong> Glyphs less valuable (market saturated). Contracts are the backbone. Darkmoon Cards still in demand for alts.
</div></div>
<div class="tip-box"><strong>💡 Best tip for Inscription:</strong> Save your rare glyph recipes. If you have a recipe others do not, you are the sole supplier on the server. Some rare glyphs hold their value for months.</div>`},
  method_url:'https://www.method.gg/guides/midnight-inscription-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/inscription-leveling-guide'
};

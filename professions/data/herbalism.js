// HERBALISM DATA
const HERBALISM = {
  id:'herbalism', icon:'🌿', cat:'gathering', accent:'#4caf7d',
  name:{nl:'Herbalism',en:'Herbalism',da:'Urtesamling'},
  tier:'S',
  lore:{
    nl:'Goud met nul setup. Herbs zijn nodig voor Alchemy (potions, flasks). In Midnight hebben node-modifiers elk hun eigen bonus-drops. Beste solo-farming profession.',
    en:'Gold with zero setup. Herbs are needed for Alchemy (potions, flasks). In Midnight node modifiers each have their own bonus drops. Best solo farming profession.',
    da:'Guld med nul opsætning. Urter er nødvendige til Alkymi. Bedste solo-farmingsprofession.'
  },
  goldrating:5, userating:3,
  trainer:{
    name:'Botanist Nathera',
    loc:{nl:'Bazaar, Silvermoon City — Bazaar-gebied. Je wordt er automatisch naartoe gestuurd via de eerste campaign quests.',en:'Bazaar, Silvermoon City — Bazaar area. You are automatically sent there via the first campaign quests.',da:'Bazaar, Silvermoon City — Bazaar-området. Du sendes automatisk dertil via de første kampagnequests.'},
    way:'/way Eversong Woods 45.0 52.5',
    note:{nl:'Je wordt doorgestuurd naar Silvermoon als een van de eerste campaign quests. Pak direct de trainer mee.',en:'You\'re sent to Silvermoon as one of the first campaign quests. Pick up the trainer directly.',da:'Du sendes til Silvermoon som en af de første kampagnequests.'}
  },
  specs:[
    {title:{nl:'Stap 1 — Botany Mastery (25 punten)',en:'Step 1 — Botany Mastery (25 points)',da:'Trin 1 — Botanik-beherskelse (25 point)'},
     desc:{nl:'Verhoogt yield per node. Direct meer goud per farming run. Basis van alle Herbalism builds.',en:'Increases yield per node. Directly more gold per farming run. Foundation of all Herbalism builds.',da:'Øger udbytte pr. node. Direkte mere guld pr. farming-tur.'},
     points:{nl:'25 punten in Botany Mastery',en:'25 points in Botany Mastery',da:'25 point i Botany Mastery'}},
    {title:{nl:'Stap 2 — Node Modifier Expertise',en:'Step 2 — Node Modifier Expertise',da:'Trin 2 — Node Modifier-ekspertise'},
     desc:{nl:'Midnight-nodes hebben elemental modifiers (Licht, Pure Void, Primal Energy, Wild Magic). Elke modifier geeft bonus Motes. Specialiseer in de meest gevraagde.',en:'Midnight nodes have elemental modifiers (Light, Pure Void, Primal Energy, Wild Magic). Each modifier gives bonus Motes. Specialize in the most in-demand.',da:'Midnight-nodes har elementalmodifikatorer. Specialiser dig i de mest efterspurgte.'},
     points:{nl:'20 punten in gekozen element-tak',en:'20 points in chosen element branch',da:'20 point i valgt element-gren'}},
    {title:{nl:'Stap 3 — Yield Specialisaties (zone-specifiek)',en:'Step 3 — Yield Specializations (zone-specific)',da:'Trin 3 — Udbytte-specialiseringer (zone-specifikke)'},
     desc:{nl:'Elke zone heeft specifieke nodes. Meer punten in de zones die je het meest farmt.',en:'Every zone has specific nodes. More points in the zones you farm the most.',da:'Hver zone har specifikke nodes. Flere point i de zoner du farmer mest.'},
     points:{nl:'15–20 punten per gekozen zone',en:'15–20 points per chosen zone',da:'15–20 point pr. valgt zone'}}
  ],
  items:[
    {icon:'🌺',name:{nl:'Sanguithorn (combat herb)',en:'Sanguithorn (combat herb)',da:'Sanguithorn (kampurt)'},desc:{nl:'Hoge vraag voor Alchemy combat potions. Beste goud-per-uur herb.',en:'High demand for Alchemy combat potions. Best gold-per-hour herb.',da:'Høj efterspørgsel til Alkymi kampelliksirer.'},tag:'material'},
    {icon:'🌸',name:{nl:'Arcanite Lotus',en:'Arcanite Lotus',da:'Arkanitstof-lotus'},desc:{nl:'Flask-ingrediënt. Altijd duur aan het begin van een seizoen.',en:'Flask ingredient. Always expensive at the start of a season.',da:'Kolbe-ingrediens. Altid dyrt i starten af en sæson.'},tag:'material'},
    {icon:'✨',name:{nl:'Motes of Light / Void / Energy',en:'Motes of Light / Void / Energy',da:'Motes of Light / Void / Energy'},desc:{nl:'Bonus drops van modified nodes. Worden gebruikt door meerdere crafting professions.',en:'Bonus drops from modified nodes. Used by multiple crafting professions.',da:'Bonusdrop fra modificerede nodes.'},tag:'material'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">Herbalism & Crafting Orders</div><div class="co-desc">Herbalism zelf heeft geen crafting orders — het is een gathering profession. Maar jouw herbs voeden de orders van Alchemisten. Verkoop op AH of lever rechtstreeks aan je Alchemy-alt.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Herbalism + Alchemy is de klassieke goud-combo. Herbs farmen én potions craften = dubbele inkomst.</div>`,
    en:`<div class="co-step"><div class="co-title">Herbalism & Crafting Orders</div><div class="co-desc">Herbalism itself has no crafting orders — it's a gathering profession. But your herbs feed the orders of Alchemists. Sell on AH or deliver directly to your Alchemy alt.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Herbalism + Alchemy is the classic gold combo. Farming herbs and crafting potions = double income.</div>`,
    da:`<div class="co-step"><div class="co-title">Urtesamling & Håndværksordrer</div><div class="co-desc">Urtesamling har ingen håndværksordrer i sig selv. Dine urter fodrer Alkymisternes ordrer.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Urtesamling + Alkymi er den klassiske guldkombination.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-herbalism-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/herbalism-specialization-guide-and-builds'
};

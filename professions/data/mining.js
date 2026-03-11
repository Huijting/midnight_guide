// MINING DATA
const MINING = {
  id:'mining', icon:'⛏', cat:'gathering', accent:'#aaaaaa',
  name:{nl:'Mining',en:'Mining',da:'Minedrift'},
  tier:'S',
  lore:{
    nl:'Goud met nul setup. Erts voorziet Blacksmithing en Engineering. In Midnight vind je alle erts in alle zones (niet meer zone-specifiek). Alleen twee kwaliteitsranks nu.',
    en:'Gold with zero setup. Ore supplies Blacksmithing and Engineering. In Midnight you find all ore in all zones (no longer zone-specific). Only two quality ranks now.',
    da:'Guld med nul opsætning. Malm forsyner Smedning og Ingeniørkunst. I Midnight finder du al malm i alle zoner.'
  },
  goldrating:5, userating:3,
  trainer:{
    name:'Belil',
    loc:{nl:'Bazaar, Silvermoon City — bij de smidse in de Bazaar.',en:'Bazaar, Silvermoon City — at the forge in the Bazaar.',da:'Bazaar, Silvermoon City — ved smedjen i Bazaar.'},
    way:'/way Eversong Woods 42.68 52.88',
    note:{nl:'Alle erts-types vinden in alle Midnight-zones — geen zone-hoppen meer nodig!',en:'All ore types found in all Midnight zones — no more zone-hopping needed!',da:'Alle malmtyper findes i alle Midnight-zoner — ikke mere zonehopping nødvendigt!'}
  },
  specs:[
    {title:{nl:'Stap 1 — Mining Mastery (25 punten)',en:'Step 1 — Mining Mastery (25 points)',da:'Trin 1 — Minedrifs-beherskelse (25 point)'},
     desc:{nl:'Verhoogt yield en kans op rank 2 erts. Direct meer waarde per node.',en:'Increases yield and chance for rank 2 ore. Directly more value per node.',da:'Øger udbytte og chance for rang 2 malm.'},
     points:{nl:'25 punten in Mining Mastery',en:'25 points in Mining Mastery',da:'25 point i Mining Mastery'}},
    {title:{nl:'Stap 2 — Node Modifier Expertise (elemental)',en:'Step 2 — Node Modifier Expertise (elemental)',da:'Trin 2 — Node Modifier-ekspertise'},
     desc:{nl:'Lightfused nodes: vang de orbs na mining voor extra Motes. Wild nodes: spawn elementals, dood en mine ze. Kies de modifier die het meeste goud oplevert.',en:'Lightfused nodes: catch the orbs after mining for extra Motes. Wild nodes: spawn elementals, kill and mine them. Choose the modifier that yields the most gold.',da:'Lightfused nodes: fang kuglerne for ekstra Motes. Wild nodes: spawn elementaler, dræb og mine dem.'},
     points:{nl:'20 punten in gekozen element-tak',en:'20 points in chosen element branch',da:'20 point i valgt element-gren'}},
    {title:{nl:'Stap 3 — Surveying (vind hidden nodes)',en:'Step 3 — Surveying (find hidden nodes)',da:'Trin 3 — Opmåling (find skjulte nodes)'},
     desc:{nl:'Maakt zeldzame ore-nodes zichtbaar op de minimap. Meer erts per run zonder extra reizen.',en:'Makes rare ore nodes visible on the minimap. More ore per run without extra travel.',da:'Gør sjældne malm-nodes synlige på minikortet.'},
     points:{nl:'15 punten in Surveying',en:'15 points in Surveying',da:'15 point i Surveying'}}
  ],
  items:[
    {icon:'🪨',name:{nl:'Refulgent Copper / Umbral Tin / Brilliant Silver',en:'Refulgent Copper / Umbral Tin / Brilliant Silver',da:'Refulgent Kobber / Umbral Tin / Brilliant Sølv'},desc:{nl:'Basis erts voor Blacksmithing en Engineering.',en:'Basic ore for Blacksmithing and Engineering.',da:'Basis malm til Smedning og Ingeniørkunst.'},tag:'material'},
    {icon:'💎',name:{nl:'Dazzling Thorium (zeldzaam)',en:'Dazzling Thorium (rare)',da:'Dazzling Thorium (sjælden)'},desc:{nl:'Alleen via bonus drop van andere nodes. Hogere waarde op AH.',en:'Only via bonus drop from other nodes. Higher value on AH.',da:'Kun via bonusdrop fra andre nodes. Højere AH-værdi.'},tag:'material'},
    {icon:'✨',name:{nl:'Motes of Elements',en:'Motes of Elements',da:'Motes of Elements'},desc:{nl:'Bonus van modified nodes. Gebruikt door veel crafting professions.',en:'Bonus from modified nodes. Used by many crafting professions.',da:'Bonus fra modificerede nodes. Bruges af mange håndværksprofessioner.'},tag:'material'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">Mining & de markt</div><div class="co-desc">Mining heeft geen crafting orders. Maar erts is de ruggengraat van Blacksmithing en Engineering. Sell op AH of lever direct aan crafters voor een kleine premium.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Mining + Blacksmithing of Engineering = zelfvoorzienend. Erts farmen EN zelf craften geeft de hoogste margins.</div>`,
    en:`<div class="co-step"><div class="co-title">Mining & the market</div><div class="co-desc">Mining has no crafting orders. But ore is the backbone of Blacksmithing and Engineering. Sell on AH or deliver directly to crafters for a small premium.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Mining + Blacksmithing or Engineering = self-sufficient. Farming ore AND crafting yourself gives the highest margins.</div>`,
    da:`<div class="co-step"><div class="co-title">Minedrift & markedet</div><div class="co-desc">Minedrift har ingen håndværksordrer. Men malm er rygraden i Smedning og Ingeniørkunst.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Minedrift + Smedning = selvforsynende.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-mining-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/mining-specialization-guide-and-builds'
};

// LEATHERWORKING DATA
const LEATHERWORKING = {
  id:'leatherworking', icon:'🧶', cat:'crafting', accent:'#8B6347',
  name:{nl:'Leatherworking',en:'Leatherworking',da:'Læderhåndværk'},
  tier:'B',
  lore:{
    nl:'Maakt leather en mail armor. Goede demand bij launch voor Druids, Hunters en Shamans. Gecombineerd met Skinning = zelfvoorzienend.',
    en:'Makes leather and mail armor. Good demand at launch for Druids, Hunters and Shamans. Combined with Skinning = self-sufficient.',
    da:'Laver læder- og mail-rustning. God efterspørgsel ved launch for Druider, Jægere og Shamaner.'
  },
  goldrating:3, userating:3,
  trainer:{
    name:'Talmar',
    loc:{nl:'Bazaar, Silvermoon City — westkant, bij het portaal naar de Timeways.',en:'Bazaar, Silvermoon City — west side, near the portal to the Timeways.',da:'Bazaar, Silvermoon City — vestside, nær portalen til Timeways.'},
    way:'/way Eversong Woods 43.8 51.5',
    note:{nl:'Reagenten komen van Skinning. Combineer met Skinning voor zelfvoorzienendheid.',en:'Reagents come from Skinning. Combine with Skinning for self-sufficiency.',da:'Reagenter kommer fra Skinning. Kombiner med Skinning for selvforsyning.'}
  },
  specs:[
    {title:{nl:'Stap 1 — Leather Armor Mastery (30 punten)',en:'Step 1 — Leather Armor Mastery (30 points)',da:'Trin 1 — Læderbeherskelse (30 point)'},
     desc:{nl:'Unlock leather gear slots. Druids en Rogues hebben hieraan de meeste behoefte.',en:'Unlocks leather gear slots. Druids and Rogues need this most.',da:'Låser lædergear-slots op. Druider og Slyngler har mest brug for dette.'},
     points:{nl:'30 punten in Leather Armor Mastery',en:'30 points in Leather Armor Mastery',da:'30 point i Leather Armor Mastery'}},
    {title:{nl:'Stap 2 — Mail Armor Mastery (30 punten)',en:'Step 2 — Mail Armor Mastery (30 points)',da:'Trin 2 — Mail-rustningsbeherskelse (30 point)'},
     desc:{nl:'Hunters en Shamans dragen mail. Grote playerbase = goede orders.',en:'Hunters and Shamans wear mail. Large playerbase = good orders.',da:'Jægere og Shamaner bærer mail. Stor spillerbase = gode ordrer.'},
     points:{nl:'30 punten in Mail Armor Mastery',en:'30 points in Mail Armor Mastery',da:'30 point i Mail Armor Mastery'}},
    {title:{nl:'Stap 3 — Profession Tools & Reagents',en:'Step 3 — Profession Tools & Reagents',da:'Trin 3 — Professions-redskaber & Reagenter'},
     desc:{nl:'LW maakt ook tools en drums. Drums of the Void zijn een raid-cooldown die iedereen wil.',en:'LW also makes tools and drums. Drums of the Void are a raid cooldown everyone wants.',da:'LW laver også redskaber og trommer. Trommer er en raid-cooldown alle vil have.'},
     points:{nl:'20 punten in Drums/Tools-tak',en:'20 points in Drums/Tools branch',da:'20 point i Trommer/Redskaber-gren'}}
  ],
  items:[
    {icon:'🎒',name:{nl:'Leather & Mail Armor Sets',en:'Leather & Mail Armor Sets',da:'Læder- & Mail-rustningssæt'},desc:{nl:'Gear voor Druids, Rogues, Hunters, Shamans.',en:'Gear for Druids, Rogues, Hunters, Shamans.',da:'Gear til Druider, Slyngler, Jægere, Shamaner.'},tag:'gear'},
    {icon:'🥁',name:{nl:'Drums of the Void',en:'Drums of the Void',da:'Void-trommer'},desc:{nl:'Raid-utility cooldown. Elke serieuze raidgroep wil dit.',en:'Raid utility cooldown. Every serious raid group wants this.',da:'Raid-utility cooldown. Enhver seriøs raidgruppe vil have dette.'},tag:'utility'},
    {icon:'🧵',name:{nl:'Spellthreads & Leg Armor',en:'Spellthreads & Leg Armor',da:'Trylletråde & Benrustning'},desc:{nl:'Enhancement voor broeken. Elke caster wil spellthread.',en:'Enhancement for legs. Every caster wants spellthread.',da:'Forbedring til bukser. Enhver caster vil have trylletråd.'},tag:'consumable'}
  ],
  orders:{
    nl:`<div class="co-step"><div class="co-title">Leatherworking Orders</div><div class="co-desc">Orders komen voornamelijk van Leather en Mail-wearers. Gecombineerd met Skinning heb je altijd genoeg materialen. Spellthread-recepten vallen van raid-drops en rep-vendors.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Drums of the Void zijn de meest gevraagde LW-item in Mythic+. Unlock dit zo snel mogelijk.</div>`,
    en:`<div class="co-step"><div class="co-title">Leatherworking Orders</div><div class="co-desc">Orders mainly come from Leather and Mail wearers. Combined with Skinning you always have enough materials. Spellthread recipes drop from raids and rep vendors.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Drums of the Void are the most requested LW item in Mythic+. Unlock this as fast as possible.</div>`,
    da:`<div class="co-step"><div class="co-title">Læderhåndværks-ordrer</div><div class="co-desc">Ordrer kommer primært fra Læder- og Mail-bærere.</div></div>
<div class="tip-box"><strong>💡 Tip:</strong> Trommer of the Void er det mest efterspurgte LW-genstand i Mythic+.</div>`
  },
  method_url:'https://www.method.gg/guides/midnight-leatherworking-profession-guide',
  wowp_url:'https://www.wow-professions.com/midnight/leatherworking-specialization-guide-and-builds'
};

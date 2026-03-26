// WoW Midnight — Season 1 dungeon data
const THE_BLINDING_VALE = {
  id:"blindingvale", name:"The Blinding Vale", zone:"Harandar", type:"normal",
  bosses_short:["Meittik","Ikuzz the Light Hunter","Lightwarden Ruia","Ziekket"],
  level:{nl:"Ontgrendel lvl 88",en:"Unlock level 88"},
  lore:{
    nl:"De Blinding Vale is een invasieve Lightbloom-tuin die avonturiers verblindt met verzengende straling. Achter de felle glans cultiveert de Lightbloom nieuwe wezens met één fanatieke opdracht: ongestopte groei.",
    en:"The Blinding Vale is an invasive Lightbloom garden that blinds adventurers with searing radiation. Behind the brilliant glow, the Lightbloom cultivates new creatures with one fanatical purpose: unstoppable growth."},
  tips:[
    {title:{nl:"Zichtbaarheid",en:"Visibility"},
     text:{nl:"Heldere witte visuals — pas schermhelderheid aan. Vaardigheden zijn moeilijk te zien.",en:"Very bright white visuals — adjust screen brightness. Abilities can be hard to see."}},
    {title:{nl:"Ingangcoördinaten",en:"Entrance coordinates"},
     text:{nl:"/way Harandar 26.4 78.1 — Lightbloom Roots-quest",en:"/way Harandar 26.4 78.1 — Lightbloom Roots quest"}}
  ],
  bosses:[
    {name:"Meittik",num:1,
     desc:{nl:"Drie Rutaani met afzonderlijke HP-balken — elk apart beheren. Focus één tegelijk.",en:"Three Rutaani with separate HP bars — manage each individually. Focus one at a time."},
     tank:{nl:["Drie vijanden gegroepeerd maar afgewend van de groep.","Defensive bij meerdere Trinity-leden die tegelijk aanvallen."],en:["Keep the three enemies grouped but faced away from the group.","Use a defensive when multiple Trinity members attack simultaneously."]},
     heal:{nl:["Drie lichtpulsen tegelijk = constante groepsdruk — heal doorlopend.","Licht-debuffs stapelen — cleanse of agressief over-healen."],en:["Three simultaneous light pulses = constant group pressure — heal continuously.","Light debuffs stack — cleanse or aggressively out-heal them."]},
     dps:{nl:["Focus één Rutaani tegelijk — doden vermindert AoE-druk direct.","Vermijd witte/gouden lichtplassen op de grond.","Iets spreiden om meerdere gelijktijdige hits te vermijden."],en:["Focus one Rutaani at a time — killing one immediately reduces AoE pressure.","Avoid white/golden light puddles on the ground.","Spread slightly to avoid multiple simultaneous hits."]}},
    {name:"Ikuzz the Light Hunter",num:2,
     desc:{nl:"Vroeger roofdier van Harandar volledig bezeten door de Lightbloom.",en:"A former apex predator of Harandar fully possessed by the Lightbloom."},
     tank:{nl:["Ikuzz springt op zijn doelwit — defensive bij elke grote sprong.","Afgewend houden — beet/klauw-aanvallen cleaven."],en:["Ikuzz leaps onto his target — use a defensive on every major leap.","Keep him faced away — bite/claw attacks cleave."]},
     heal:{nl:["Burst fysieke + lichtschade — piekerig, niet constant.","Feeding Frenzy-modus: grote cooldown inzetten."],en:["Burst physical + light damage — spikey, not constant.","Feeding Frenzy mode: deploy a major cooldown."]},
     dps:{nl:["Gemarkeerde speler kite — anderen blijven op de baas.","Onderbreek lichtenergie-absorbeervaardigheden.","Snel weg na markering om groepssplash te vermijden."],en:["Marked player kites — others stay on the boss.","Interrupt light energy absorption abilities.","Move away quickly after being marked to avoid group splash."]}},
    {name:"Lightwarden Ruia",num:3,
     desc:{nl:"Bewaker van het heiligdom. Haar wards reflecteren schade terug op melee-aanvallers.",en:"Guardian of the inner sanctum. Her protective wards reflect damage back at melee attackers."},
     tank:{nl:["Stralingseffecten stapelen — defensives afwisselen.","Wards onderbreken of vernietigen voor ze actief worden."],en:["Radiation effects stack — alternate defensives.","Interrupt or destroy wards before they become active."]},
     heal:{nl:["Stralingsontlading = hele groep geraakt — AoE-heal gereed.","Spelers in wards ontvangen gereflecteerde schade — waarschuw ze."],en:["Radiation discharge hits the entire group — have an AoE heal ready.","Players standing in wards receive reflected damage — warn them."]},
     dps:{nl:["Vernietig wards snel — ze reduceren je schade significant.","Empowerment-casts onderbreken.","Melee: controleer altijd of er een ward onder de baas staat."],en:["Destroy wards quickly — they significantly reduce your damage output.","Interrupt empowerment casts.","Melee: always check for a ward under the boss."]}},
    {name:"Ziekket",num:4,
     desc:{nl:"Eindbaas — apex Lightbloom-roofdier dat licht en void combineert in een gecorrumpeerde hybride vorm.",en:"Final boss — an apex Lightbloom predator combining light and void in a corrupted hybrid form."},
     tank:{nl:["Wisselt licht-burst en void-shroud-fasen — juiste defensive per fase kiezen.","Rand van de kamer voor bewegingsruimte."],en:["Alternates between light burst and void shroud phases — choose the right defensive per phase.","Stay at the edge of the room for movement space."]},
     heal:{nl:["Lichtfase: burst AoE — grote cooldown hier.","Void-fase: aanhoudende schade op tank — zware spot healing.","Beheer beide fasen — verspil je cooldowns niet bij lichtfase."],en:["Light phase: burst AoE — major cooldown here.","Void phase: sustained tank damage — heavy spot healing required.","Manage both phases — do not waste your cooldowns in the light phase."]},
     dps:{nl:["Lichtfase: stack voor AoE-cleave.","Void-fase: spreid voor void-splash.","Beste DPS-moment: overgang tussen fasen."],en:["Light phase: stack for AoE cleave.","Void phase: spread to avoid void splash.","Best DPS moment: transitions between phases."]}}
  ],
  route:{
    summary:{nl:"Lineaire route door Harandar. Geen M+-versie. Lust op eindbaas Ziekket bij de void-fase.",en:"Linear route through Harandar. No M+ version. Lust on final boss Ziekket at the void phase."},
    lust:[{moment:"Boss 4 — Ziekket 🔥",uitleg:{nl:"Gebruik Bloodlust bij de overgang naar de void-fase",en:"Use Bloodlust at the transition into the void phase"}}],
    pulls:[
      {label:{nl:"Baas 1 — Meittik",en:"Boss 1 — Meittik"},desc:{nl:"Één Rutaani tegelijk. Lichtplassen vermijden.",en:"One Rutaani at a time. Avoid light puddles."}},
      {label:{nl:"Baas 2 — Ikuzz",en:"Boss 2 — Ikuzz"},desc:{nl:"Kite als gemarkeerd. Absorbeer-interrupts uitvoeren.",en:"Kite when marked. Execute absorption interrupts."}},
      {label:{nl:"Baas 3 — Lightwarden Ruia",en:"Boss 3 — Lightwarden Ruia"},desc:{nl:"Wards vernietigen voor reflectieschade.",en:"Destroy wards before reflected damage."}},
      {label:{nl:"Baas 4 — Ziekket 🔥",en:"Boss 4 — Ziekket 🔥"},desc:{nl:"Lust in void-fase. Stack licht, spreid void.",en:"Lust in void phase. Stack light, spread void."}}
    ],
    trash:[
      {mob:"Lightbloom Tender",tags:["int","purge"],tip:{nl:"Radiant Heal: interrupt of purge de buff op andere mobs. Healer mob — altijd eerst doden.",en:"Radiant Heal: interrupt or purge the buff on other mobs. Healer mob — always kill first."}},
      {mob:"Blossoming Sprout",tags:["avoid"],tip:{nl:"Explodeert bij laag HP voor AoE — kite of snel doden. Staggered kills om simultane explosies te vermijden.",en:"Explodes at low HP for AoE — kite or kill fast. Stagger kills to avoid simultaneous explosions."}},
      {mob:"Lightbloom Sentinel",tags:["tank","stop"],tip:{nl:"Searing Radiance: grote frontal kegel — tank van de groep afgewend. CC-resist bij hoge HP.",en:"Searing Radiance: large frontal cone — face boss away from group. CC-resistant at high HP."}},
      {mob:"Corrupted Rootwalker",tags:["tank","avoid"],tip:{nl:"Grasping Roots: root op random speler — root break of wachten. Toxic Spores: AoE gifplas op de grond.",en:"Grasping Roots: root on random player — root break or wait it out. Toxic Spores: AoE poison puddle on the ground."}}
    ],    mdt:false, kg_url:null
  }
};

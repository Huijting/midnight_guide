// WoW Midnight — Season 1 dungeon data
const VOIDSCAR_ARENA =   id:"voidscar", name:"Voidscar Arena", zone:"Voidstorm — Slayer's Rise", type:"normal",
  bosses_short:["Taz'Rah","Atroxus","Charonus"],
  level:{nl:"Ontgrendel lvl 90",en:"Unlock level 90"},
  lore:{
    nl:"De Voidscar Arena dwingt vechters van overal in Azeroth de arena in voor het vermaak van de d'mani. Opzichter Charonus heeft tegenstanders verzameld die tegen hun wil moeten vechten.",
    en:"The Voidscar Arena forces fighters from across Azeroth into the arena for the amusement of the d'mani. Overseer Charonus has gathered adversaries who must fight against their will."},
  tips:[
    {title:{nl:"Ingangcoördinaten",en:"Entrance coordinates"},
     text:{nl:"/way 51.4, 18.5 — Voidstorm, Slayer's Rise.",en:"/way 51.4, 18.5 — Voidstorm, Slayer's Rise."}},
    {title:{nl:"Arena-indeling",en:"Arena layout"},
     text:{nl:"Gladiator-stijl — drie bazen spawnen opeenvolgend. Herpositioneer tussen elk gevecht.",en:"Gladiator style — three bosses spawn sequentially. Reposition between each fight."}}
  ],
  bosses:[
    {name:"Taz'Rah",num:1,
     desc:{nl:"Gedwongen kampioen. Dark Rift = void-zone die alle spelers naar binnen trekt EN dodelijke schade doet aan wie erin eindigt. Gather Shadows: Ethereal Shades spawnen die Nether Dash uitvoeren — lijn-aanval, opzij stappen.",en:"Forced champion. Dark Rift = void zone that pulls ALL players inward AND deals lethal damage to anyone caught inside. Gather Shadows: Ethereal Shades spawn that perform Nether Dash — line attack, step to the side."},
     tank:{nl:["Dark Rift: zone verschijnt — stap ER UIT voor hij trekt. In de zone eindigen = dodelijk.","Cosmic Spike = zware tankbuster — defensive hier.","Ethereal Shades (Gather Shadows): pakken en bij de boss houden voor cleave."],en:["Dark Rift: zone appears — step OUT before it pulls. Ending up inside = lethal.","Cosmic Spike = heavy tank buster — defensive here.","Ethereal Shades (Gather Shadows): pick up and keep near the boss for cleave."]},
     heal:{nl:["Nether Dash DoT op getroffen spelers — aanhoudende spot healing nodig.","Gather Shadows: shades doen tegelijk schade — AoE heal omhoog."],en:["Nether Dash DoT on affected players — sustained spot healing required.","Gather Shadows: shades deal simultaneous damage — ramp up AoE healing."]},
     dps:{nl:["Dark Rift: verschijnt als cirkel op de grond — stap ER UIT. Als hij activeert trekt hij iedereen naar het centrum voor dodelijke schade.","Nether Dash (Ethereal Shades): lijn-aanval — stap opzij als een Shade naar je toe beweegt.","Shades snel doden — ze blijven anders Nether Dash spammen."],en:["Dark Rift: appears as a circle on the ground — step OUT of it. When activated it pulls everyone to the center for lethal damage.","Nether Dash (Ethereal Shades): line attack — step to the side when a Shade moves toward you.","Kill Shades quickly — they keep spamming Nether Dash otherwise."]}},
    {name:"Atroxus",num:2,
     desc:{nl:"Uitgehongerd gedrocht. Searing Roar is een FRONTALE KEGEL met een dodelijk gif-DoT. Nooit voor deze baas staan.",en:"A starved monstrosity. Searing Roar is a FRONTAL CONE with a lethal poison DoT. Never stand in front of this boss."},
     tank:{nl:["Searing Roar FRONTAAL — houd Atroxus te allen tijde van de groep afgewend.","De kegel raakt ook de tank hard — defensive op ELKE Searing Roar-cast."],en:["Searing Roar is FRONTAL — keep Atroxus faced away from the group at all times.","The cone hits the tank hard too — use a defensive on EVERY Searing Roar cast."]},
     heal:{nl:["Searing Roar: DIRECT zware heals op iedereen die geraakt wordt.","Passieve gif-aanvallen tikken ook — tank altijd op hoge HP houden."],en:["Searing Roar: IMMEDIATELY cast heavy heals on everyone hit.","Passive poison attacks also tick — always keep the tank at high HP."]},
     dps:{nl:["KRITIEK: NOOIT voor Atroxus staan — Searing Roar is verwoestend.","Altijd achter of naast de baas staan.","Gifplassen op de grond zijn permanente gevaren.",],en:["CRITICAL: NEVER stand in front of Atroxus — Searing Roar is devastating.","Always stand behind or beside the boss.","Poison puddles on the ground are permanent hazards."]}},
    {name:"Charonus",num:3,
     desc:{nl:"Eindbaas en eigenaar van de arena. Unstable Singularity = void-zone die spelers aantrekt + slow. Gravitic Orbs jagen spelers — worden vernietigd als ze door een Unstable Singularity lopen. Condensed Mass = grote raid-AoE. Cosmic Blast = knockback + DoT.",en:"Final boss and arena owner. Unstable Singularity = void zone that pulls players + slow. Gravitic Orbs chase players — destroyed when they pass through an Unstable Singularity. Condensed Mass = large raid AoE. Cosmic Blast = knockback + DoT."},
     tank:{nl:["Cosmic Blast = knockback + shadow DoT op iedereen — defensive hier.","Unstable Singularity-zones aantrekken — niet erin staan tenzij je een Gravitic Orb leidt.","Positioneer de baas weg van de Singularity-zones zodat je niet teruggeslingerd wordt."],en:["Cosmic Blast = knockback + shadow DoT on everyone — defensive here.","Unstable Singularity zones pull players — don't stand in them unless guiding a Gravitic Orb.","Position the boss away from Singularity zones so you don't get knocked into them."]},
     heal:{nl:["Condensed Mass = grote raid-AoE — cooldown paraat.","Cosmic Blast = knockback + shadow DoT op iedereen — direct spot healen.","Gravitic Orbs en Singularities doen schade bij contact — steady healen."],en:["Condensed Mass = large raid AoE — have a cooldown ready.","Cosmic Blast = knockback + shadow DoT on everyone — immediately spot heal.","Gravitic Orbs and Singularities deal damage on contact — steady healing."]},
     dps:{nl:["Gravitic Orbs jagen spelers — leid ze naar een Unstable Singularity-zone om ze te vernietigen.","Unstable Singularity: niet vrijwillig inlopen — alleen voor het vernietigen van een Orb.","Condensed Mass = grote AoE, defensive of push door.","Cosmic Blast = knockback + DoT — op een veilige plek staan (niet naast Singularity-zones)."],en:["Gravitic Orbs chase players — guide them toward an Unstable Singularity zone to destroy them.","Unstable Singularity: don't voluntarily enter — only for destroying an Orb.","Condensed Mass = large AoE, use defensive or push through.","Cosmic Blast = knockback + DoT — stand in a safe position (not near Singularity zones)."]}}
  ],
  route:{
    summary:{nl:"Gladiator-arena — drie bazen opeenvolgend. Herpositioneer tussen elk gevecht. Lust op Charonus.",en:"Gladiator arena — three bosses in sequence. Reposition between each fight. Lust on Charonus."},
    lust:[{moment:"Boss 3 — Charonus 🔥",uitleg:{nl:"Eindbaas — Bloodlust hier",en:"Final boss — Bloodlust here"}}],
    pulls:[
      {label:{nl:"Baas 1 — Taz'Rah",en:"Boss 1 — Taz'Rah"},desc:{nl:"Dark Rift: shades clusteren en AoE-burnen.",en:"Dark Rift: cluster shades and AoE burn."}},
      {label:{nl:"Baas 2 — Atroxus",en:"Boss 2 — Atroxus"},desc:{nl:"NOOIT frontaal staan. Defensive op elke Searing Roar.",en:"NEVER stand frontal. Defensive on every Searing Roar."}},
      {label:{nl:"Baas 3 — Charonus 🔥",en:"Boss 3 — Charonus 🔥"},desc:{nl:"Versterkingen direct doden. Gepuppette spelers niet aanvallen. Lust hier.",en:"Kill reinforcements immediately. Don't attack puppeted players. Lust here."}}
    ],
    trash:[
      {mob:"Arena Enforcer",tags:["tank","stop"],tip:{nl:"Bonecrush: grote melee hit op tank — defensive. Intercept: charge naar getargete speler — niet weglopen als tank.",en:"Bonecrush: large melee hit on tank — defensive. Intercept: charges targeted player — don't run away as tank."}},
      {mob:"Void Sniper",tags:["int","avoid"],tip:{nl:"Void Shot: interrupt. Ranged mob die ver van de groep blijft — tank er naartoe bewegen of interrupt.",en:"Void Shot: interrupt. Ranged mob that stays far from the group — move tank toward it or interrupt."}},
      {mob:"D'mani Overseer",tags:["int","purge"],tip:{nl:"Rally Crowd: buff op alle omliggende mobs — purge direct. Command: interrupt om toeschouwers te voorkomen die adds spawnen.",en:"Rally Crowd: buff on all nearby mobs — purge immediately. Command: interrupt to prevent spectators spawning adds."}},
      {mob:"Gravitic Sentry",tags:["avoid","tank"],tip:{nl:"Gravity Pulse: AoE pull op alle spelers richting de mob — positioneer niet bij de rand. Void Lash: tank cleave.",en:"Gravity Pulse: AoE pull of all players toward the mob — don't position near the edge. Void Lash: tank cleave."}}
    ],    mdt:false, kg_url:null
  }
}

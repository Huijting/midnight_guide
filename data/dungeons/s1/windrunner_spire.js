// WoW Midnight — Season 1 dungeon data
const WINDRUNNER_SPIRE = {
  id:"windrunner", name:"Windrunner Spire", zone:"Eversong Woods", type:"mplus",
  bosses_short:["Emberdawn","Derelict Duo","Cdr. Kroluk","The Restless Heart"],
  level:{nl:"Ontgrendel lvl 81",en:"Unlock level 81"},
  lore:{
    nl:"Het vroegere familieverblijf van de Windrunners weerspiegelt nu de pijnlijke verhouding tussen Alleria, Sylvanas en Vereesa. Verdriet en woede zijn uitgegroeid tot geesten die geen rust kunnen vinden.",
    en:"The former Windrunner family home now mirrors the fractured bond between Alleria, Sylvanas, and Vereesa. Grief and rage have given rise to restless spirits that cannot find peace."},
  tips:[
    {title:{nl:"Ingangcoördinaten",en:"Entrance coordinates"},
     text:{nl:"/way #2395 35.5 78.8 — Eversong Woods, vlak bij de klifrand.",en:"/way #2395 35.5 78.8 — Eversong Woods, near the cliff edge."}},
    {title:{nl:"Trash: Phantasmal Mystic",en:"Trash: Phantasmal Mystic"},
     text:{nl:"Onderbreek Chain Lightning altijd; gebruik defensives vóór elke Flame Nova.",en:"Always interrupt Chain Lightning; use defensives before every Flame Nova."}}
  ],
  bosses:[
    {name:"Emberdawn",num:1,
     desc:{nl:"Territoriale draak die haar nest bewaakt. Wisselt af tussen normale fase en de Burning Gale-tussenfase.",en:"A territorial dragon protecting her nest. Alternates between a normal phase and the Burning Gale intermission."},
     tank:{nl:["Defensieve op Searing Beak — de klap én DoT stapelen gevaarlijk.","Blijf dicht bij de baas tijdens Burning Gale om onnodig bewegen te voorkomen."],en:["Use a defensive on Searing Beak — the hit and DoT stack dangerously.","Stay close to the boss during Burning Gale to avoid unnecessary movement."]},
     heal:{nl:["Flaming Updraft treft getargete spelers — spot heal direct.","Burning Gale (16s): hele groep = zware vuurschade — gebruik een grote cooldown."],en:["Flaming Updraft hits targeted players — spot heal immediately.","Burning Gale (16s): entire group takes heavy fire damage — use a major healing cooldown."]},
     dps:{nl:["Flaming Updraft: plassen neerleggen aan de RAND voor ze exploderen — worden Flaming Twisters.","Burning Gale duwt je richting de wind — positioneer vooraf in het midden."],en:["Flaming Updraft: place puddles at the EDGE before they explode — they become Flaming Twisters.","Burning Gale pushes you toward the wind — position yourself in the center beforehand."]}},
    {name:"Derelict Duo — Kalis & Latch",num:2,
     desc:{nl:"Banshee Kalis en haar abominatie Latch delen een Broken Bond — sterft één eerder, krijgt de ander een gevaarlijke buff. Dood ze tegelijk.",en:"Banshee Kalis and her abomination Latch share a Broken Bond — if one dies first, the survivor gains a dangerous buff. Kill them simultaneously."},
     tank:{nl:["Bone Hack (Latch) = zware fysieke schade, channel — grote defensive gebruiken.","Houd Kalis en Latch bij elkaar voor cleave — positioneer zodanig dat Latch's Heaving Yank Kalis kan treffen als Debilitating Shriek begint.","Splattering Spew: stap licht bij de groep vandaan zodat jouw DoT-cirkel de DPS niet overlapt."],en:["Bone Hack (Latch) = heavy physical damage, channel — use a major defensive.","Keep Kalis and Latch together for cleave — position so Latch's Heaving Yank can hit Kalis when Debilitating Shriek begins.","Splattering Spew: step slightly away from the group so your DoT circle doesn't overlap DPS."]},
     heal:{nl:["Splattering Spew = nature DoT op iedereen + groeiende plassen — grootste raidschade van de baas. Cooldown paraat houden.","Debilitating Shriek (100 energie Kalis): escalerende raidschade — wordt gestopt door Latch's Heaving Yank die Kalis treft. Pre-heal voor dit moment."],en:["Splattering Spew = nature DoT on everyone + growing puddles — biggest raid damage of the encounter. Have a cooldown ready.","Debilitating Shriek (Kalis at 100 energy): escalating raid damage — stopped by Latch's Heaving Yank hitting Kalis. Pre-heal for this moment."]},
     dps:{nl:["Beide bazen gelijkmatig aanvallen — Broken Bond op de overlevende is dodelijk.","Interrupt Kalis's Shadow Bolt elke cast.","Splattering Spew: losjes spreiden zodat de DoT-cirkels niet overlappen.","Curse of Darkness: dispel direct — anders fixeert een Dark Entity de speler 12 sec.","Debilitating Shriek stopt NIET door spelerinterrupts — iemand achter Kalis staan zodat Latch's Heaving Yank haar treft."],en:["Attack both bosses evenly — Broken Bond on the survivor is lethal.","Interrupt Kalis's Shadow Bolt every cast.","Splattering Spew: loosely spread so the DoT circles don't overlap.","Curse of Darkness: dispel immediately — otherwise a Dark Entity fixates the player for 12 sec.","Debilitating Shriek CANNOT be player-interrupted — someone stands behind Kalis so Latch's Heaving Yank hits her."]}},
    {name:"Commander Kroluk",num:3,
     desc:{nl:"Veteraan van de Tweede Oorlog. Bij 66% en 33% HP roept hij Rallying Bellow: adds spawnen, de baas krijgt Shield Wall en gebruikt Bladestorm.",en:"A veteran of the Second War. At 66% and 33% HP he casts Rallying Bellow: adds spawn, the boss gains Shield Wall and uses Bladestorm."},
     tank:{nl:["Rampage = aanhoudende schade — wissel defensives af gedurende het hele gevecht.","Groepeer adds strak tijdens de tussenfase voor AoE."],en:["Rampage deals sustained damage — rotate defensives throughout the entire fight.","Cluster adds tightly during the intermission phase for AoE."]},
     heal:{nl:["Rallying Bellow = massieve groepsschade — bewaar een healing cooldown voor dit moment.","Reckless Leap raakt spelers in de landingszone — spot heal direct."],en:["Rallying Bellow = massive group-wide damage — save a healing cooldown for this moment.","Reckless Leap hits players in the landing zone — spot heal immediately."]},
     dps:{nl:["Bij 66%/33%: adds zo snel mogelijk doden — baas heeft Shield Wall + Bladestorm zolang adds leven.","Stack bij Intimidating Shout om verspreiding te beperken."],en:["At 66%/33%: kill adds as fast as possible — the boss has Shield Wall + Bladestorm while adds are alive.","Stack up during Intimidating Shout to limit its spread."]}},
    {name:"The Restless Heart",num:4,
     desc:{nl:"Geest geboren uit Windrunner-verdriet. Bij 100 energie vuurt hij een windpijl af die een uitdijende Billowing Wind-ring vormt.",en:"A spirit born from Windrunner grief. At 100 energy it fires a wind arrow that creates an expanding Billowing Wind ring."},
     tank:{nl:["Geen specifieke tank-mechanic — positioneer de baas stabiel in het midden.","Ontwijkt de uitdijende Billowing Wind-ring zodra die spawnt."],en:["No dedicated tank mechanic — keep the boss positioned stably in the center.","Dodge the expanding Billowing Wind ring as soon as it spawns."]},
     heal:{nl:["Arrow Rain + Bolt Gale = constante groepsschade — houd stabiele healing aan.","Bij 100 energie (Billowing Wind): pre-cast heals."],en:["Arrow Rain + Bolt Gale = constant group damage — maintain a steady healing rhythm.","At 100 energy (Billowing Wind): pre-cast your heals."]},
     dps:{nl:["Turbulent Arrows gooien je omhoog — ontwijkt ze proactief.","Billowing Wind-ring dijt uit — kom er BUITEN zodra hij spawnt.","Bolt Gale focust één speler — persoonlijke defensive gebruiken."],en:["Turbulent Arrows knock you airborne — dodge them proactively.","Billowing Wind ring expands — get OUTSIDE as soon as it spawns.","Bolt Gale targets one player — use a personal defensive."]}}
  ],
  route:{
    summary:{nl:"Ga LINKS eerst. Emberdawn → rechts naar Derelict Duo → centrale gang naar Kroluk → toren naar The Restless Heart.",en:"Go LEFT first. Emberdawn → right toward Derelict Duo → central corridor to Kroluk → tower to The Restless Heart."},
    lust:[
      {moment:"Pull 1 — 🔥 BLOODLUST",uitleg:{nl:"Eerste grote trashgroep links bij de ingang",en:"First large trash group left of the entrance"}},
      {moment:"Boss 2 — Derelict Duo 🔥",uitleg:{nl:"Bloodlust bij de pull",en:"Bloodlust on the pull"}},
      {moment:"Boss 4 — The Restless Heart 🔥",uitleg:{nl:"Eindbaas — tweede Bloodlust",en:"Final boss — second Bloodlust"}}
    ],
    pulls:[
      {label:{nl:"Pull 1 — 🔥 BLOODLUST",en:"Pull 1 — 🔥 BLOODLUST"},desc:{nl:"Eerste grote trashgroep links. Lust hier.",en:"First large trash group on the left. Lust here."}},
      {label:{nl:"Pull 2–3",en:"Pull 2–3"},desc:{nl:"Trashpacks in de westelijke gang. Onderbreek Phantasmal Mystics.",en:"Trash packs in the western corridor. Interrupt Phantasmal Mystics."}},
      {label:{nl:"Baas 1 — Emberdawn",en:"Boss 1 — Emberdawn"},desc:{nl:"Plassen neerleggen aan de rand bij Updraft.",en:"Place puddles at the edges during Updraft."}},
      {label:{nl:"Pull 5–6",en:"Pull 5–6"},desc:{nl:"Pad richting Derelict Duo. Interrupt-prio op banshee-casts.",en:"Path toward Derelict Duo. Interrupt priority on banshee casts."}},
      {label:{nl:"Baas 2 — Derelict Duo 🔥",en:"Boss 2 — Derelict Duo 🔥"},desc:{nl:"Bloodlust. Beide bazen gelijkmatig doden.",en:"Bloodlust. Kill both bosses simultaneously."}},
      {label:{nl:"Pull 7–8",en:"Pull 7–8"},desc:{nl:"Centrale gang. Adds dicht op elkaar voor AoE.",en:"Central corridor. Keep adds grouped for AoE."}},
      {label:{nl:"Baas 3 — Kroluk",en:"Boss 3 — Kroluk"},desc:{nl:"Bewaar defensives voor 66%/33% add-fasen.",en:"Save defensives for the 66%/33% add phases."}},
      {label:{nl:"Baas 4 — The Restless Heart 🔥",en:"Boss 4 — The Restless Heart 🔥"},desc:{nl:"Eindbaas. Lust hier als beschikbaar.",en:"Final boss. Lust here if available."}}
    ],
    trash:[
      {mob:"Dutiful Groundskeeper",tags:["tank"],tip:{nl:"Shear Armor: melee-aanvallen stapelen armor debuff op de tank — defensive of kite bij hoge stacks.",en:"Shear Armor: melee attacks stack armor debuff on the tank — defensive or kite on high stacks."}},
      {mob:"Restless Steward",tags:["int","purge"],tip:{nl:"Spirit Bolt: interrupt zo veel mogelijk. Soul Torment: magic debuff op 2 spelers — dispel direct.",en:"Spirit Bolt: interrupt as much as possible. Soul Torment: magic debuff on 2 players — dispel immediately."}},
      {mob:"Spellguard Magus",tags:["tank","stop"],tip:{nl:"CC-immuun. Arcane Salvo = groeps-AoE — defensive klaar. Bij 50% HP: Spellguard's Protection = 99% DR-zone op de grond — sleep de mob er DIRECT uit!",en:"CC-immune. Arcane Salvo = group AoE — defensive ready. At 50% HP: Spellguard's Protection = 99% DR zone — move the mob OUT immediately!"}},
      {mob:"Territorial Dragonhawk",tags:["int","purge"],tip:{nl:"Fire Spit: channel op random speler — CC of interrupt. Bolstering Flames: buff op de mob — purge direct.",en:"Fire Spit: channels into random player — CC or interrupt. Bolstering Flames: buff on mob — purge immediately."}},
      {mob:"Creeping Spindleweb",tags:["purge","avoid"],tip:{nl:"Poison Spray: poison debuff op random speler — poison dispel. Acidic Demise: plas bij dood — stap weg als de mob sterft.",en:"Poison Spray: poison debuff on random player — poison dispel. Acidic Demise: puddle on death — step away when the mob dies."}},
      {mob:"Apex Lynx",tags:["tank","stop"],tip:{nl:"CC-immuun. Puncturing Bite: bleed op tank — defensive of bleed cleanse. Ferocious Pounce: springt tussen 3 spelers — losjes spreiden.",en:"CC-immune. Puncturing Bite: bleed on tank — defensive or bleed cleanse. Ferocious Pounce: leaps between 3 players — loosely spread."}},
      {mob:"Bloated Lasher",tags:["int","tank"],tip:{nl:"Fungal Bolt: interrupt elke cast. Spore Dispersal: groeps-AoE + versterkt omliggende Lashlings 8 sec — cooldown + tank defensive.",en:"Fungal Bolt: interrupt every cast. Spore Dispersal: group AoE + empowers nearby Lashlings for 8s — cooldown + tank defensive."}},
      {mob:"Ardent Cutthroat",tags:["int","purge"],tip:{nl:"Poison Blades: interrupt elke cast. Shadowrive: lijn-aanval op random speler — stack melee voor cleave.",en:"Poison Blades: interrupt every cast. Shadowrive: line attack on random player — stack melee for cleave."}},
      {mob:"Devoted Woebringer",tags:["int","stop"],tip:{nl:"CC-immuun. Shadow Bolt: interrupt elke cast. Pulsing Shriek: schild + zware groepsschade — doorbreek het schild direct.",en:"CC-immune. Shadow Bolt: interrupt every cast. Pulsing Shriek: shield + heavy group damage — break the shield immediately."}},
      {mob:"Swiftshot Archer",tags:["avoid","stop"],tip:{nl:"Arrow Rain: channel met AoE-cirkels — CC de mob of dodge alle cirkels. Break Ranks: charge naar random speler — stap opzij.",en:"Arrow Rain: channel with AoE circles — CC the mob or dodge all circles. Break Ranks: charges random player — step to the side."}},
      {mob:"Storming Soulfont",tags:["stop"],tip:{nl:"Geeft energie aan The Restless Heart als hij lang leeft — CC of kill snel. Gust Shot van de baas vernietigt Soulfonts.",en:"Feeds energy to The Restless Heart if it lives long — CC or kill fast. Gust Shot from Restless Heart destroys Soulfonts."}}
    ],
    mdt:true, kg_url:"https://keystone.guru/routes/expansion/midnight/season/1"
  },
  tank_pathing: {
    pulls: [
      { pullRef: 0, danger: 4, mobs: ["Restless Steward", "Spellguard Magus", "Territorial Dragonhawk"],
        note: { nl: "Eerste grote pull links: Spirit Bolt + Arcane Salvo; Dragonhawk Fire Spit CC/stop. Sleep Magus uit 99% DR-bol (Spellguard's Protection).", en: "First big left pull: Spirit Bolt + Arcane Salvo; Dragonhawk Fire Spit with CC/stop. Move Magus out of the 99% DR sphere." },
        interrupts: { nl: "Spirit Bolt (Steward) > Fire Spit (Dragonhawk). Daarna spare kicks op Shadow Bolt-achtige casts in de pack.", en: "Spirit Bolt (Steward) > Fire Spit (Dragonhawk). Then spare kicks on Shadow Bolts in the pack." } },
      { pullRef: 1, danger: 3, mobs: ["Phantasmal Mystic", "Bloated Lasher"],
        note: { nl: "Westelijke gang: Chain Lightning + Flame Nova (Icy Veins). Fungal Bolt + Spore Dispersal op Lasher — defensive.", en: "West corridor: Chain Lightning + Flame Nova (Icy Veins). Fungal Bolt + Spore Dispersal on Lasher — use defensives." },
        interrupts: { nl: "Chain Lightning (Mystic) > Fungal Bolt (Lasher). Flame Nova = tank defensive, geen kick.", en: "Chain Lightning (Mystic) > Fungal Bolt (Lasher). Flame Nova = tank defensive, not a kick." } },
      { pullRef: 2, danger: 5, mobs: ["Emberdawn"],
        note: { nl: "Baas 1: Flaming Updraft in hoek leggen; Burning Gale + Searing Beak — tank hoekpositie.", en: "Boss 1: drop Flaming Updraft in a corner; Burning Gale + Searing Beak — tank in a corner." },
        interrupts: { nl: "Geen vaste trash-kicks — boss frontal tijdens Burning Gale ontwijken.", en: "No trash kick list — dodge boss frontal during Burning Gale." } },
      { pullRef: 3, danger: 4, mobs: ["Devoted Woebringer", "Ardent Cutthroat"],
        note: { nl: "Naar Derelict Duo: focus Woebringer — Pulsing Shriek absorb doorbreken (Icy Veins). Poison Blades op Cutthroat.", en: "Toward Derelict Duo: focus Woebringer — break Pulsing Shriek absorb (Icy Veins). Poison Blades on Cutthroat." },
        interrupts: { nl: "Pulsing Shriek window > Shadow Bolt (Woebringer) > Poison Blades (Cutthroat).", en: "Pulsing Shriek shield > Shadow Bolt (Woebringer) > Poison Blades (Cutthroat)." } },
      { pullRef: 4, danger: 5, mobs: ["Kalis", "Latch"],
        note: { nl: "Twee bazen tegelijk dood: Kalis Shadow Bolt; Debilitating Shriek via Latch Heaving Yank (Icy Veins).", en: "Kill both bosses together: interrupt Kalis's Shadow Bolt; Debilitating Shriek stopped via Latch's Heaving Yank (Icy Veins)." },
        interrupts: { nl: "Shadow Bolt (Kalis) — spare kicks. Shriek = hook-mechanic, geen gewone kick.", en: "Shadow Bolt (Kalis). Shriek = hook mechanic, not a normal kick." } },
      { pullRef: 5, danger: 3, mobs: ["Swiftshot Archer", "Phantasmal Mystic"],
        note: { nl: "Centrale gang: Arrow Rain sidestep; Phantasmal Mystic Chain Lightning + Flame Nova.", en: "Central corridor: sidestep Arrow Rain; Phantasmal Mystic Chain Lightning + Flame Nova." },
        interrupts: { nl: "Chain Lightning > Arrow Rain channel (CC/stop) indien mogelijk.", en: "Chain Lightning > Arrow Rain channel (CC/stop) if available." } },
      { pullRef: 6, danger: 5, mobs: ["Commander Kroluk"],
        note: { nl: "Baas 3: Rampage defensive; 66%/33% adds stacken voor cleave; Intimidating Shout stacken.", en: "Boss 3: defensive for Rampage; stack adds at 66%/33% for cleave; stack for Intimidating Shout." },
        interrupts: { nl: "Add-fase: onderbreek Phantasmal Mystic casts waar mogelijk.", en: "Add phase: interrupt Phantasmal Mystic casts where possible." } },
      { pullRef: 7, danger: 5, mobs: ["The Restless Heart"],
        note: { nl: "Eindbaas: Tempest Slash mitigation; Turbulent Arrows / Billowing Wind (Icy Veins).", en: "Final boss: mitigate Tempest Slash; Turbulent Arrows / Billowing Wind (Icy Veins)." },
        interrupts: { nl: "Geen klassieke kick-lijst — movement en defensives.", en: "No classic kick list — movement and defensives." } }
    ]
  }
};

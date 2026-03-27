// WoW Midnight — Season 1 dungeon data
const ALGETHAR_ACADEMY = {
  id:"algethar", name:"Algeth'ar Academy", zone:"Thaldraszus", type:"mplus",
  bosses_short:["Overgrown Ancient","Crawth","Vexamus","Echo of Doragosa"],
  level:{nl:"Returning — Dragonflight",en:"Returning — Dragonflight"},
  time:"35 min",
  lore:{nl:"Een drakenmageracademie in Thaldraszus, nu in handen van corrumperende magie. Drie vleugels, elk met eigen uitdagingen.",en:"A draconic mage academy in Thaldraszus, now overrun by corrupting magic. Three wings, each with their own challenges."},
  tips:[
    {title:{nl:"Ingang",en:"Entrance"},text:{nl:"Portaal in Valdrakken. Via The Timeways in Silvermoon in Season 1.",en:"Portal in Valdrakken. Via The Timeways in Silvermoon in Season 1."}}
  ],
  bosses:[
    {name:"Overgrown Ancient",num:1,
     desc:{nl:"Magische boom die door energie corrumpeerde. Bewaakt de Botanica-ingang.",en:"Magical tree corrupted by energy. Guards the Botanica entrance."},
     tank:{nl:["Draai de boss weg — Brutalize-cleave raakt de groep.","Gebruik defensief op Barkbreaker."],en:["Face the boss away — Brutalize cleave hits the group.","Use a defensive on Barkbreaker."]},
     heal:{nl:["Lashing Roots raakt random spelers — spot heal snel.","Bark Armor fase: weinig schade, herstel mensen op."],en:["Lashing Roots hits random players — spot heal quickly.","Bark Armor phase: low damage, top people up."]},
     dps:{nl:["Interrupt Lashing Roots zo snel mogelijk.","Burst tijdens Bark Armor — de boss neemt meer schade."],en:["Interrupt Lashing Roots as fast as possible.","Burst during Bark Armor — the boss takes increased damage."]}},
    {name:"Crawth",num:2,
     desc:{nl:"Territoriale adelaar op het Talon Toss-platform. Gooit chakrams die roterende windmuren maken. Ruinous Winds (75%/45%): score 3 goals met de ballen om de aanval te stoppen en een permanente buff te triggeren.",en:"Territorial eagle on the Talon Toss platform. Throws chakrams creating rotating wind walls. Ruinous Winds (75%/45%): score 3 goals with the balls to stop the attack and trigger a permanent buff."},
     tank:{nl:["Savage Peck = tank-hit + stapelende bleed (NIET beschouwd als bleed in Midnight — geen bleed cleanse).","Keer de boss weg voor Overpowering Gust — frontal op random speler, raakt de groep als ze voor je staan.","Blijf altijd in melee — bij afstand cast Crawth continu Ruinous Winds."],en:["Savage Peck = tank hit + stacking bleed (NOT a bleed in Midnight — no bleed cleanse works).","Face boss away for Overpowering Gust — frontal on random player, hits the group if they're in front of you.","Always stay in melee — if you leave range, Crawth continuously casts Ruinous Winds."]},
     heal:{nl:["Deafening Screech = AoE op alle spelers + 6 sec silence bij direct contact. Loopt schade op met Sonic Vulnerability stacks.","Ruinous Winds: group krijgt grote schade tenzij 3 goals gescoord — cooldown paraat.","Fan of Blades: bleed op iedereen — steady AoE healing."],en:["Deafening Screech = AoE on all players + 6 sec silence on direct contact. Damage ramps up with Sonic Vulnerability stacks.","Ruinous Winds: group takes massive damage unless 3 goals scored — cooldown ready.","Fan of Blades: bleed on everyone — steady AoE healing."]},
     dps:{nl:["Ruinous Winds (75%/45%): pak ballen op en gooi ze IN een doel. First goal = Goal of the Rushing Winds (aanbevolen) = tornadopatrons + debuff-verwijdering. Beiden scoren geeft Stack Goals-buff.","Deafening Screech: verspreid losjes zodat AoE-cirkels niet overlappen.","Overpowering Gust = frontal op random speler — stap opzij."],en:["Ruinous Winds (75%/45%): pick up balls and throw them INTO a goal. First goal = Goal of the Rushing Winds (recommended) = tornado patterns + debuff removal. Scoring both gives Stack Goals buff.","Deafening Screech: loosely spread so AoE circles don't overlap.","Overpowering Gust = frontal on random player — step to the side."]}},
    {name:"Vexamus",num:3,
     desc:{nl:"Arcane-construct van Professor Maxdormu's les. Gooit Arcane Orbs die spelers NIET mogen absorberen (spawnt Arcane Fissures). Bij 100 energie: Arcane Expulsion = grote AoE + knockback.",en:"Arcane construct from Professor Maxdormu's lesson. Throws Arcane Orbs that players must NOT absorb (spawns Arcane Fissures). At 100 energy: Arcane Expulsion = large AoE + knockback."},
     tank:{nl:["Arcane Expulsion (100 energie) = grote AoE + knockback — niet teruggeslingerd worden in Arcane Fissures.","Oversurge op tank: stapelende arcane schade — defensive inzetten."],en:["Arcane Expulsion (100 energy) = large AoE + knockback — don't get knocked into Arcane Fissures.","Oversurge on tank: stacking arcane damage — use a defensive."]},
     heal:{nl:["Arcane Expulsion = grote raidschade — grote cooldown hier.","Mana Bombs: ontploffen op random spelers — spot heal direct na elke detonatie.","Arcane Fissures leggen constante schade neer — iedereen uit de plassen houden."],en:["Arcane Expulsion = large raid damage — major cooldown here.","Mana Bombs: explode on random players — spot heal immediately after each detonation.","Arcane Fissures deal constant damage — keep everyone out of the pools."]},
     dps:{nl:["Arcane Orbs: NIET absorberen — spawnt Arcane Fissures (grote plassen) die de arena snel vol leggen.","Mana Bombs: ontploffen op players, dodge de explosie.","Arcane Expulsion bij 100 energie = knockback — positioneer voor de cast zodat je niet in fissures belandt.","Aanvallen blijven doen ondanks mechanics — DPS-race voor Fissures de arena overnemen."],en:["Arcane Orbs: do NOT absorb — spawns Arcane Fissures (large pools) that quickly fill the arena.","Mana Bombs: explode on players, dodge the explosion.","Arcane Expulsion at 100 energy = knockback — position before the cast so you don't land in fissures.","Keep attacking despite mechanics — DPS race before Fissures take over the arena."]}},
    {name:"Echo of Doragosa",num:4,
     desc:{nl:"Corrupte simulacrum van Headteacher Doragosa. Astral Breath bij 100 energie = dodelijke adem op random speler. Overwhelming Power debuff: 3 stacks = Arcane Rift onder de speler — vermijden.",en:"Corrupt simulacrum of Headteacher Doragosa. Astral Breath at 100 energy = lethal breath on random player. Overwhelming Power debuff: 3 stacks = Arcane Rift under the player — avoid."},
     tank:{nl:["Astral Blast = tank magic hit. Zorg voor stabiele HP voor Astral Breath.","Positioneer de boss in een hoek — ruimte voor de Arcane Rifts die DPS per ongeluk triggeren."],en:["Astral Blast = tank magic hit. Keep stable HP for Astral Breath.","Position the boss in a corner — space for Arcane Rifts that DPS accidentally trigger."]},
     heal:{nl:["Astral Breath (100 energie) = dodelijk — iedereen vol houden, dit is het gevaarlijkste moment.","Energy Bomb: explodeert op target voor AoE — spot heal na elke bomb.","Arcane Rifts gooien Uncontrolled Energy orbs uit — spot heal wie geraakt wordt."],en:["Astral Breath (100 energy) = lethal — keep everyone topped, this is the most dangerous moment.","Energy Bomb: explodes on target for AoE — spot heal after each bomb.","Arcane Rifts shoot out Uncontrolled Energy orbs — spot heal whoever gets hit."]},
     dps:{nl:["Overwhelming Power stacks: max 2 veilig. Bij 3 stacks = Arcane Rift verschijnt — enorm AoE + meer stacks. Beheers je greed.","Astral Breath (100 energie) = dodge de adem door zijwaarts te bewegen.","Energy Bomb op jou: loop weg van de groep en gebruik een defensive.","Arcane Rifts niet aanraken — Uncontrolled Energy orbs zijn extra stacks."],en:["Overwhelming Power stacks: max 2 safe. At 3 stacks = Arcane Rift spawns — massive AoE + more stacks. Control your greed.","Astral Breath (100 energy) = dodge the breath by moving sideways.","Energy Bomb on you: move away from the group and use a defensive.","Don't touch Arcane Rifts — Uncontrolled Energy orbs mean extra stacks."]}}
  ],
  route:{
    summary:{nl:"Drie vleugels: Botanica (links), Kwadrant (midden), Hoofdleeraarskamer (rechts). Final boss Echo of Doragosa.",en:"Three wings: Botanica (left), Quad (center), Headteacher's Enclave (right). Final boss Echo of Doragosa."},
    pulls:[
      {type:"trash",label:"The Botanica",area:"The Botanica",desc:{nl:"Start links, pak de trash richting Overgrown Ancient.",en:"Start left, collect trash toward Overgrown Ancient."},lust:false},
      {type:"boss",label:"Overgrown Ancient",area:"The Botanica",desc:{nl:"Interrupt Lashing Roots.",en:"Interrupt Lashing Roots."},lust:false},
      {type:"trash",label:"The Quad",area:"The Quad",desc:{nl:"Midden — pas op voor patrollerende packs.",en:"Middle section — watch patrolling packs."},lust:false},
      {type:"boss",label:"Crawth",area:"The Quad",desc:{nl:"Ruinous Winds: pak ballen, score goals.",en:"Ruinous Winds: pick up balls, score goals."},lust:false},
      {type:"boss",label:"Vexamus",area:"The Headteacher's Enclave",desc:{nl:"Arcane Orbs NIET absorberen.",en:"Do NOT absorb Arcane Orbs."},lust:false},
      {type:"trash",label:"Headteacher's Enclave",area:"The Headteacher's Enclave",desc:{nl:"Rechts — open de deur naar final boss.",en:"Right — open the door to the final boss."},lust:false},
      {type:"boss",label:"Echo of Doragosa",area:"The Headteacher's Enclave",desc:{nl:"Final boss. Interrupt Expunge. Lust hier.",en:"Final boss. Interrupt Expunge. Lust here."},lust:true}
    ],
    lust:[{moment:"Echo of Doragosa",uitleg:{nl:"Direct bij de pull — final boss.",en:"Immediately on pull — final boss."}}],
    trash:[
      {mob:"Vile Lasher",tags:["tank","avoid"],tip:{nl:"CC-immuun. Vile Bite: bleed stacks op tank — defensive of bleed cleanse. Detonation Seeds: swirly onder elke speler — dodge.",en:"CC-immune. Vile Bite: bleed stacks on tank — defensive or bleed cleanse. Detonation Seeds: swirly under every player — dodge."}},
      {mob:"Aggravated Skitterfly",tags:["purge","tank"],tip:{nl:"Agitation: enrage buff op de mob — sooth. Darting Sting op random speler.",en:"Agitation: enrage buff on the mob — sooth. Darting Sting on random player."}},
      {mob:"Guardian Sentry",tags:["tank","avoid"],tip:{nl:"CC-immuun. Storm Slash: tankbuster. Deadly Winds: tornado op random speler — dodge. Expel Intruders: grote AoE — LoS achter pilaar.",en:"CC-immune. Storm Slash: tank buster. Deadly Winds: tornado on random player — dodge. Expel Intruders: large AoE — LoS behind a pillar."}},
      {mob:"Alpha Eagle",tags:["int","avoid"],tip:{nl:"Tough mob. Raging Screech: zware groeps-AoE — interrupt! Gust: frontal knockback — stap opzij.",en:"Tough mob. Raging Screech: heavy group AoE — interrupt! Gust: frontal knockback — step to the side."}},
      {mob:"Algeth'ar Echoknight",tags:["tank","stop"],tip:{nl:"Tough mob. Arcane Smash: massieve groeps-AoE — grote defensive/cooldown.",en:"Tough mob. Arcane Smash: massive group AoE — major defensive/cooldown."}},
      {mob:"Spectral Invoker",tags:["int"],tip:{nl:"Arcane Bolt: interrupt. Mystic Brand: debuff op random speler.",en:"Arcane Bolt: interrupt. Mystic Brand: debuff on random player."}},
      {mob:"Corrupted Manafiend",tags:["int","avoid"],tip:{nl:"Surge: interrupt. Mana Void: AoE zone — dodge.",en:"Surge: interrupt. Mana Void: AoE zone — dodge."}}
    ],
    mdt:true, kg_url:"https://keystone.guru/routes/expansion/midnight/season/1"
  },
  tank_pathing: {
    pulls: [
      { pullRef: 0, danger: 3, mobs: ["Vile Lasher", "Aggravated Skitterfly"],
        note: { nl: "Botanica trash: Detonation Seeds onder iedereen — spreiden. Vile Bite stacks op tank.", en: "Botanica trash: Detonation Seeds under everyone — spread. Vile Bite stacks on tank." },
        interrupts: { nl: "Geen harde must-kick in minimale pull — dodge Detonation Seeds. Met extra casters: Arcane Bolt / Surge.", en: "No mandatory kick in a minimal pull — dodge Seeds. With extra casters: Arcane Bolt / Surge." } },
      { pullRef: 1, danger: 5, mobs: ["Overgrown Ancient"],
        note: { nl: "Boss 1: Lashing Roots onderbreken (Icy Veins-route).", en: "Boss 1: interrupt Lashing Roots (standard M+ route)." },
        interrupts: { nl: "Lashing Roots — absolute #1 op deze boss.", en: "Lashing Roots — absolute #1 on this boss." } },
      { pullRef: 2, danger: 4, mobs: ["Guardian Sentry", "Alpha Eagle"],
        note: { nl: "The Quad: Storm Slash tankbuster; Raging Screech = zware AoE (Icy Veins trash). Patrouilles niet chainen.", en: "The Quad: Storm Slash tank buster; Raging Screech is heavy AoE. Don't chain patrols." },
        interrupts: { nl: "Raging Screech (Eagle) > Arcane Bolt (Invoker) in de pack.", en: "Raging Screech (Eagle) > Arcane Bolt (Invoker) in the pack." } },
      { pullRef: 3, danger: 5, mobs: ["Crawth"],
        note: { nl: "Boss 2: Ruinous Winds — ballen en goals (arena-mechanic).", en: "Boss 2: Ruinous Winds — balls and goals mechanic." },
        interrupts: { nl: "Geen vaste kick-meta — volg arena-mechanics.", en: "No standard kick meta — follow arena mechanics." } },
      { pullRef: 4, danger: 5, mobs: ["Vexamus"],
        note: { nl: "Boss 3: absorbeer geen Arcane Orbs; interrupt overige boss-casts volgens route.", en: "Boss 3: do not absorb Arcane Orbs; interrupt other boss casts per your route." },
        interrupts: { nl: "Boss-specifieke casts (Arcane/Light) — roteer kicks na orb-regels.", en: "Boss arcane casts — rotate kicks after respecting orb rules." } },
      { pullRef: 5, danger: 4, mobs: ["Algeth'ar Echoknight", "Spectral Invoker"],
        note: { nl: "Headteacher's Enclave: Arcane Smash = raid defensive; Echoknight is prioriteit-target.", en: "Headteacher's Enclave: Arcane Smash = raid defensive; Echoknight is priority." },
        interrupts: { nl: "Arcane Bolt (Invoker) > Corrupted Manafiend Surge als die mee in de pull zit.", en: "Arcane Bolt (Invoker) > Corrupted Manafiend Surge if pulled." } },
      { pullRef: 6, danger: 5, mobs: ["Echo of Doragosa"],
        note: { nl: "Final boss: Interrupt Expunge; Overwhelming Power stacks beheersen (Icy Veins).", en: "Final boss: interrupt Expunge; manage Overwhelming Power stacks (Icy Veins)." },
        interrupts: { nl: "Expunge — hoogste prioriteit; daarna Arcane-spells volgens roster.", en: "Expunge — top priority; then arcane casts per roster." } }
    ]
  }
};

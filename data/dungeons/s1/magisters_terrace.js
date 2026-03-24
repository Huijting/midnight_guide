// WoW Midnight — Season 1 dungeon data
const MAGISTERS_TERRACE = {
  id:"magisters", name:"Magisters' Terrace", zone:"Isle of Quel'Danas", type:"mplus",
  bosses_short:["Arcanotron Custos","Seranel Sunlash","Gemellus","Degentrius"],
  level:{nl:"Ontgrendel lvl 90",en:"Unlock level 90"},
  lore:{
    nl:"Het hart van arcane studie voor de sin'dorei. Het void-wezen Degentrius heeft de kans gegrepen om de Terrace aan te vallen en de Cynosure of Twilight te grijpen.",
    en:"The heart of arcane study for the sin'dorei. The void entity Degentrius has seized the opportunity to assault the Terrace and claim the Cynosure of Twilight."},
  tips:[
    {title:{nl:"📜 Arcane Tome-buff — NOOIT OVERSLAAN",en:"📜 Arcane Tome buff — NEVER SKIP"},
     text:{nl:"Direct na de eerste trashgroep: klik op de Arcane Tome in de bibliotheek. Geeft +5% Haste voor 30 min, overleeft de dood.",en:"Right after the first trash group: click the Arcane Tome in the library. Grants +5% Haste for 30 min, persists through death."}},
    {title:{nl:"Ingangcoördinaten",en:"Entrance coordinates"},
     text:{nl:"/way 35.2, 78.4 — Isle of Quel'Danas.",en:"/way 35.2, 78.4 — Isle of Quel'Danas."}}
  ],
  bosses:[
    {name:"Arcanotron Custos",num:1,
     desc:{nl:"Arcane-construct dat de Magister-regels handhaaft. Tijdens Refueling Protocol spawnen Energy Orbs die gesoak't moeten worden.",en:"An arcane construct that enforces Magister protocol. During Refueling Protocol, Energy Orbs spawn and must be soaked."},
     tank:{nl:["Positioneer voor Arcane Expulsion — terugstoot NA de AoE kan je in Residue-plassen slingeren.","Defensive tijdens Refueling Protocol — baas én orbs doen gelijktijdig schade."],en:["Position for Arcane Expulsion — the knockback after the AoE can throw you into Arcane Residue pools.","Use a defensive during Refueling Protocol — the boss and orbs both deal damage simultaneously."]},
     heal:{nl:["Arcane Residue + terugstoot = gevaarlijkste moment — houd groep boven 80%.","Dispel Ethereal Shackles direct."],en:["Arcane Residue + knockback combo is the most dangerous moment — keep the group above 80% HP.","Dispel Ethereal Shackles immediately."]},
     dps:{nl:["Soak Energy Orbs tijdens Refueling — maximum 2–3 per speler (te veel = Unstable Energy stacks).","Arcane Residue-plassen voorzichtig weglopen van de baas."],en:["Soak Energy Orbs during Refueling — maximum 2–3 per player (too many = Unstable Energy stacks).","Carefully walk Arcane Residue pools away from the boss."]}},
    {name:"Seranel Sunlash",num:2,
     desc:{nl:"Elite Spellbreaker die de Cynosure bewaakt. Wave of Silence (100 energie): sta IN de Suppression Zone, anders 8 sec gesilenced. Runic Mark verwijder je IN de zone. Hastening Ward altijd purgen.",en:"Elite Spellbreaker guarding the Cynosure. Wave of Silence (100 energy): stand IN the Suppression Zone, otherwise silenced for 8 sec. Remove Runic Mark IN the zone. Always purge Hastening Ward."},
     tank:{nl:["Hastening Ward = +100% attack speed + extra arcane schade — PURGE direct, anders grote defensive.","Runic Mark (bouncing glaive op tank): ga IN de Suppression Zone om het te verwijderen, één per keer.","Suppression Zone bij plaatsing: 8 yard AoE — kort wegstappen."],en:["Hastening Ward = +100% attack speed + extra arcane damage — PURGE immediately, otherwise major defensive.","Runic Mark (bouncing glaive on tank): go INTO the Suppression Zone to remove it, one at a time.","Suppression Zone on placement: 8 yard AoE — briefly step away."]},
     heal:{nl:["Wave of Silence (100 energie): zorg dat IEDEREEN in de Suppression Zone staat — anders 8 sec gesilenced.","Null Reaction na Mark-verwijdering = AoE schade + slow — pre-heal voor elke verwijdering.","Suppression Zone purgt magische effecten — let op als healbuffs wegvallen."],en:["Wave of Silence (100 energy): make sure EVERYONE is in the Suppression Zone — otherwise silenced for 8 sec.","Null Reaction after Mark removal = AoE damage + slow — pre-heal before each removal.","Suppression Zone purges magic effects — watch if healing buffs fall off."]},
     dps:{nl:["Wave of Silence (100 energie): beweeg tijdig IN de Suppression Zone — anders 8 sec gesilenced.","Runic Mark: één per keer IN de zone om het te verwijderen. Nooit twee marks tegelijk in de zone — wipe.","Hastening Ward op de baas: purge het als je purge hebt, anders defensive inzetten."],en:["Wave of Silence (100 energy): move INTO the Suppression Zone in time — otherwise silenced for 8 sec.","Runic Mark: one at a time INTO the zone to remove it. Never two marks in the zone at once — wipe.","Hastening Ward on the boss: purge it if you have a purge, otherwise use a defensive."]}},
    {name:"Gemellus",num:3,
     desc:{nl:"Void-wezen dat zichzelf beschermt én voortplant via Void-klonen. Dood de klonen snel.",en:"A void entity that protects itself and replicates via Void clones. Kill the clones quickly."},
     tank:{nl:["Beheer aggro op Gemellus én pak Void-klonen op zodra ze spawnen.","Het Void-schild pulseert schade — defensive om het uit te houden."],en:["Manage aggro on Gemellus and pick up Void clones as soon as they spawn.","The Void shield pulses damage — use a defensive to survive it."]},
     heal:{nl:["Kloon-spawns = burst AoE — cooldown gereed.","Aanhoudende Void-corruptie tikt — groep bijvullen."],en:["Clone spawns = burst AoE damage — have a cooldown ready.","Persistent Void corruption ticks — keep the group topped up."]},
     dps:{nl:["Prioriteer Void-klonen direct bij spawnen.","Na klonen dood: brand Gemellus hard — kwetsbaar tussen spawns.","Vermijd groeiende Void-plassen."],en:["Prioritise Void clones immediately when they spawn.","Once clones are dead: burn Gemellus hard — he is vulnerable between spawns.","Avoid growing Void zone puddles."]}},
    {name:"Degentrius",num:4,
     desc:{nl:"Machtig Void-wezen dat de Terrace bestormt. Eindbaas van de Seizoen 1 M+-versie.",en:"A powerful void entity assaulting the Terrace. Final boss of the Season 1 M+ version."},
     tank:{nl:["Hulking Fragment = grote tankbuster — stap WEG van de groep (8 yard AoE).","Entropy Blast = magic hit + 30s DoT. Dispel jezelf weg van de baas om de plas buiten de groep te droppen.","Null Bomb spawnt na 4 soaks — de tank detoneert hem. Grote defensive klaar houden.","Void Torrent beams NIET aanraken — 5 sec stun."],en:["Hulking Fragment = large tank buster — step AWAY from the group (8 yard AoE).","Entropy Blast = magic hit + 30s DoT. Get dispelled away from the boss to drop the puddle outside the group.","Null Bomb spawns after 4 soaks — the tank detonates it. Have a major defensive ready.","Void Torrent beams do NOT touch — 5 sec stun."]},
     heal:{nl:["Void-uitbarstingsfase = grootste healingmoment dungeon — grote cooldown.","Dispel Void-corruptie direct — groeit snel naar dodelijke niveaus."],en:["Void eruption phase = the biggest healing moment in the dungeon — major cooldown.","Dispel Void corruption immediately — it grows quickly to lethal levels."]},
     dps:{nl:["1 speler per kwadrant (gedefinieerd door Void Torrent beams). Nooit een beam aanraken — 5 sec stun.","Unstable Void Essence bounced door alle 4 kwadranten — soak als het bij jou bounced. Mis je het = Void Destruction stackende DoT op iedereen (2+ stacks = wipe).","Devouring Entropy: DoT die afloopt = Entropy Orbs (70% slow). Laat ze aflopen ver van de groep.","Void Torrent beams = NIET aanraken. Dit is de #1 doodsoorzaak."],en:["1 player per quadrant (defined by Void Torrent beams). Never touch a beam — 5 sec stun.","Unstable Void Essence bounces through all 4 quadrants — soak when it bounces to you. Miss it = Void Destruction stacking DoT on everyone (2+ stacks = wipe).","Devouring Entropy: DoT that expires = Entropy Orbs (70% slow). Let them expire far from the group.","Void Torrent beams = do NOT touch. This is the #1 cause of death."]}}
  ],
  route:{
    summary:{nl:"Rechtstreeks door de Terrace. Pak de Arcane Tome buff na pull 1. Lust op pull 1, baas 2 en eindbaas.",en:"Straight through the Terrace. Grab the Arcane Tome buff after pull 1. Lust on pull 1, boss 2 and final boss."},
    lust:[
      {moment:"Pull 1 — 🔥 BLOODLUST",uitleg:{nl:"Eerste grote trashgroep",en:"First large trash group"}},
      {moment:"Boss 2 — Seranel Sunlash 🔥",uitleg:{nl:"Tweede lust — burst venster",en:"Second lust — burst window"}},
      {moment:"Boss 4 — Degentrius 🔥",uitleg:{nl:"Eindbaas — derde lust als beschikbaar",en:"Final boss — third lust if available"}}
    ],
    pulls:[
      {label:{nl:"Pull 1 — 🔥 BLOODLUST",en:"Pull 1 — 🔥 BLOODLUST"},desc:{nl:"Eerste grote trashgroep. Lust hier.",en:"First large trash group. Lust here."}},
      {label:{nl:"→ Arcane Tome-buff!",en:"→ Arcane Tome buff!"},desc:{nl:"Klik de Tome in de bibliotheek — +5% Haste, 30 min.",en:"Click the Tome in the library — +5% Haste, 30 min."}},
      {label:{nl:"Baas 1 — Arcanotron Custos",en:"Boss 1 — Arcanotron Custos"},desc:{nl:"Orb-soak verdelen. Max 3 per speler.",en:"Assign orb soaking. Max 3 per player."}},
      {label:{nl:"Baas 2 — Seranel Sunlash 🔥",en:"Boss 2 — Seranel Sunlash 🔥"},desc:{nl:"Bloodlust. Sta IN de Suppression Zone bij Wave of Silence.",en:"Bloodlust. Stand IN the Suppression Zone during Wave of Silence."}},
      {label:{nl:"Baas 3 — Gemellus",en:"Boss 3 — Gemellus"},desc:{nl:"Klonen direct focussen. Daarna baas burnen.",en:"Focus clones immediately. Then burn the boss."}},
      {label:{nl:"Baas 4 — Degentrius 🔥",en:"Boss 4 — Degentrius 🔥"},desc:{nl:"Eindbaas. Void-tentakels vernietigen. Lust als beschikbaar.",en:"Final boss. Destroy Void tentacles. Lust if available."}}
    ],
    trash:[
      {mob:"Arcane Sentry",tags:["tank","purge"],tip:{nl:"CC-immuun. Ethereal Shackles op tank: magic dispel of root break. Arcane Beam: channel op random speler, dodge de plas. Crowd Dispersal: knockback.",en:"CC-immune. Ethereal Shackles on tank: magic dispel or root break. Arcane Beam: channels into random player, dodge the puddle. Crowd Dispersal: knockback."}},
      {mob:"Arcane Magister",tags:["int","purge"],tip:{nl:"Polymorph: #1 interrupt prioriteit elke cast — als het doorgaat: magic dispel direct. Arcane Bolt: spare interrupts.",en:"Polymorph: #1 interrupt priority every cast — if it goes off: magic dispel immediately. Arcane Bolt: spare interrupts."}},
      {mob:"Sunblade Enforcer",tags:["tank","purge"],tip:{nl:"Arcane Blade: magic buff op de mob — purge direct. Charge als de tank wegloopt.",en:"Arcane Blade: magic buff on the mob — purge immediately. Charges if tank moves away."}},
      {mob:"Lightward Healer",tags:["purge"],tip:{nl:"Holy Fire: magic debuff op random speler — dispel. Power Word: Shield: buff op ally — purge.",en:"Holy Fire: magic debuff on random player — dispel. Power Word: Shield: buff on ally — purge."}},
      {mob:"Animated Codex",tags:["tank"],tip:{nl:"Arcane Volley: constant groeps-AoE pulseren. Niet te veel tegelijk pullen — grote cooldowns snel nodig.",en:"Arcane Volley: constant group AoE pulsing. Don't pull too many at once — major cooldowns needed fast."}},
      {mob:"Blazing Pyromancer",tags:["int","avoid"],tip:{nl:"CC-immuun. Pyroblast: interrupt elke cast. Flamestrike: AoE plas — dodge. Ignition: defensives inzetten.",en:"CC-immune. Pyroblast: interrupt every cast. Flamestrike: AoE puddle — dodge. Ignition: use defensives."}},
      {mob:"Brightscale Wyrm",tags:["stop"],tip:{nl:"Energy Release bij dood: AoE explosie + buff op de groep — staan naast hem voor de buff. Stagger kills om simultane explosies te vermijden.",en:"Energy Release on death: AoE explosion + group buff — stand near it for the buff. Stagger kills to avoid simultaneous explosions."}},
      {mob:"Shadowrift Voidcaller",tags:["int","stop"],tip:{nl:"Tough mob (geen CC). Call of the Void: summon adds — interrupt ELKE cast. Consuming Shadows: zware groeps-AoE, LoS om schade te vermijden.",en:"Tough mob (no CC). Call of the Void: summons adds — interrupt EVERY cast. Consuming Shadows: heavy group AoE, LoS to avoid damage."}},
      {mob:"Devouring Tyrant",tags:["tank","avoid"],tip:{nl:"Tough mob. Devouring Strike: tank healing absorb. Void Bomb op random speler: healing absorb + AoE plas — loop weg van de groep.",en:"Tough mob. Devouring Strike: tank healing absorb. Void Bomb on random player: healing absorb + AoE puddle — move away from group."}}
    ],
    mdt:true, kg_url:"https://keystone.guru/routes/expansion/midnight/season/1"
  },
  tank_pathing: {
    pulls: [
      { pullRef: 0, danger: 4, mobs: ["Arcane Magister", "Blazing Pyromancer", "Arcane Sentry"],
        note: { nl: "Eerste grote pack bij ingang: CC-immuun Pyromancers, Magisters met Polymorph. Houd de groep compact; lust hier. Tank: Ethereal Shackles op jou = dispel/root break.", en: "First big entrance pack: CC-immune Pyromancers, Magisters with Polymorph. Stay tight; lust here. Tank: Ethereal Shackles on you — dispel or break root." },
        interrupts: { nl: "Polymorph (Magister) > Pyroblast (Pyromancer) > Arcane Bolt (Magister).", en: "Polymorph (Magister) > Pyroblast (Pyromancer) > Arcane Bolt (Magister)." } },
      { pullRef: 1, danger: 1, mobs: ["Arcane Tome"],
        note: { nl: "Niet-combat: klik de Arcane Tome in de bibliotheek (+5% Haste 30 min, overleeft dood).", en: "Non-combat: click the Arcane Tome in the library (+5% Haste 30 min, persists through death)." } },
      { pullRef: 2, danger: 5, mobs: ["Arcanotron Custos"],
        note: { nl: "Baas 1: positioneer voor Arcane Expulsion/knockback; soak Energy Orbs tijdens Refueling (max ~3 orbs per speler).", en: "Boss 1: position for Arcane Expulsion/knockback; soak Energy Orbs during Refueling (~3 orbs per player max)." },
        interrupts: { nl: "Geen vaste interrupt-rotatie — focust soaks en Residue.", en: "No fixed kick rotation — focus soaks and Residue pools." } },
      { pullRef: 3, danger: 5, mobs: ["Seranel Sunlash"],
        note: { nl: "Baas 2: Wave of Silence — iedereen IN Suppression Zone. Purge Hastening Ward op de baas. Runic Mark: één tegelijk naar zone.", en: "Boss 2: Wave of Silence — everyone IN Suppression Zone. Purge Hastening Ward. Runic Mark: one at a time into the zone." },
        interrupts: { nl: "Mechanic > kicks — purge Hastening Ward heeft prioriteit.", en: "Mechanics > kicks — purging Hastening Ward is the priority." } },
      { pullRef: 4, danger: 5, mobs: ["Gemellus"],
        note: { nl: "Baas 3: focus Void-klonen / Triplicate-kopieën; Neural Link naar juiste kopie (Icy Veins).", en: "Boss 3: focus Void clones / Triplicate copies; Neural Link to the correct copy per Icy Veins." },
        interrupts: { nl: "Meestal geen trash-kicks — maximale DPS op juiste target.", en: "Usually no trash-style kicks — max DPS on the correct target." } },
      { pullRef: 5, danger: 5, mobs: ["Degentrius"],
        note: { nl: "Eindbaas: quadranten voor Unstable Void Essence; raak Void Torrent-stralen niet. Tank: Hulking Fragment uit de groep.", en: "Final boss: quadrants for Unstable Void Essence; never touch Void Torrent beams. Tank: Hulking Fragment away from group." },
        interrupts: { nl: "Geen vaste kick-lijst — coördineer soaks, beam-dodge en tankbuster-defensives.", en: "No fixed kick list — coordinate soaks, beam dodges, and tankbuster defensives." } }
    ]
  }
};

// season1.js — WoW Midnight Dungeon Data — Season 1

// ── DUNGEONS ──
const DUNGEONS = [
// ──────────────────────────────────────────────
// 1. WINDRUNNER SPIRE
// ──────────────────────────────────────────────
{
  id:"windrunner", name:"Windrunner Spire", zone:"Eversong Woods", type:"mplus",
  bosses_short:["Emberdawn","Derelict Duo","Cdr. Kroluk","The Restless Heart"],
  level:{nl:"Ontgrendel lvl 81",en:"Unlock level 81",da:"Lås op ved niveau 81"},
  lore:{
    nl:"Het vroegere familieverblijf van de Windrunners weerspiegelt nu de pijnlijke verhouding tussen Alleria, Sylvanas en Vereesa. Verdriet en woede zijn uitgegroeid tot geesten die geen rust kunnen vinden.",
    en:"The former Windrunner family home now mirrors the fractured bond between Alleria, Sylvanas, and Vereesa. Grief and rage have given rise to restless spirits that cannot find peace.",
    da:"Det tidligere Windrunner-familiens hjem afspejler nu det smertefulde brud mellem Alleria, Sylvanas og Vereesa. Sorg og raseri har skabt urolige ånder, der ikke kan finde fred."
  },
  tips:[
    {title:{nl:"Ingangcoördinaten",en:"Entrance coordinates",da:"Indgangskoordinater"},
     text:{nl:"/way 35.2, 78.4 — Eversong Woods, vlak bij de klifrand.",en:"/way 35.2, 78.4 — Eversong Woods, near the cliff edge.",da:"/way 35.2, 78.4 — Eversong Woods, nær klippekanten."}},
    {title:{nl:"Trash: Phantasmal Mystic",en:"Trash: Phantasmal Mystic",da:"Trash: Phantasmal Mystic"},
     text:{nl:"Onderbreek Chain Lightning altijd; gebruik defensives vóór elke Flame Nova.",en:"Always interrupt Chain Lightning; use defensives before every Flame Nova.",da:"Afbryd altid Chain Lightning; brug defensives før hver Flame Nova."}}
  ],
  bosses:[
    {name:"Emberdawn",num:1,
     desc:{nl:"Territoriale draak die haar nest bewaakt. Wisselt af tussen normale fase en de Burning Gale-tussenfase.",en:"A territorial dragon protecting her nest. Alternates between a normal phase and the Burning Gale intermission.",da:"En territorial drage, der vogter sit rede. Skifter mellem en normal fase og Burning Gale-mellemfasen."},
     tank:{nl:["Defensieve op Searing Beak — de klap én DoT stapelen gevaarlijk.","Blijf dicht bij de baas tijdens Burning Gale om onnodig bewegen te voorkomen."],en:["Use a defensive on Searing Beak — the hit and DoT stack dangerously.","Stay close to the boss during Burning Gale to avoid unnecessary movement."],da:["Brug en defensive på Searing Beak — angrebet og DoT'en stabler farligt.","Bliv tæt på bossen under Burning Gale for at undgå unødvendig bevægelse."]},
     heal:{nl:["Flaming Updraft treft getargete spelers — spot heal direct.","Burning Gale (16s): hele groep = zware vuurschade — gebruik een grote cooldown."],en:["Flaming Updraft hits targeted players — spot heal immediately.","Burning Gale (16s): entire group takes heavy fire damage — use a major healing cooldown."],da:["Flaming Updraft rammer målrettede spillere — spot heal straks.","Burning Gale (16s): hele gruppen tager kraftig brandskade — brug en stor healing cooldown."]},
     dps:{nl:["Flaming Updraft: plassen neerleggen aan de RAND voor ze exploderen — worden Flaming Twisters.","Burning Gale duwt je richting de wind — positioneer vooraf in het midden."],en:["Flaming Updraft: place puddles at the EDGE before they explode — they become Flaming Twisters.","Burning Gale pushes you toward the wind — position yourself in the center beforehand."],da:["Flaming Updraft: placér pyttene i KANTEN, før de eksploderer — de bliver Flaming Twisters.","Burning Gale skubber dig mod vinden — stå i midten på forhånd."]}},
    {name:"Derelict Duo — Kalis & Latch",num:2,
     desc:{nl:"Banshee Kalis en haar abominatie Latch delen een Broken Bond — sterft één eerder, krijgt de ander een gevaarlijke buff. Dood ze tegelijk.",en:"Banshee Kalis and her abomination Latch share a Broken Bond — if one dies first, the survivor gains a dangerous buff. Kill them simultaneously.",da:"Banshee Kalis og hendes abomination Latch deler et Broken Bond — dør én af dem først, får den overlevende en farlig buff. Dræb dem på samme tid."},
     tank:{nl:["Bone Hack (Latch) = zware fysieke schade, channel — grote defensive gebruiken.","Houd Kalis en Latch bij elkaar voor cleave — positioneer zodanig dat Latch's Heaving Yank Kalis kan treffen als Debilitating Shriek begint.","Splattering Spew: stap licht bij de groep vandaan zodat jouw DoT-cirkel de DPS niet overlapt."],en:["Bone Hack (Latch) = heavy physical damage, channel — use a major defensive.","Keep Kalis and Latch together for cleave — position so Latch's Heaving Yank can hit Kalis when Debilitating Shriek begins.","Splattering Spew: step slightly away from the group so your DoT circle doesn't overlap DPS."],da:["Bone Hack (Latch) = tung fysisk skade, channel — brug en stor defensive.","Hold Kalis og Latch tæt for cleave — positionér så Latch's Heaving Yank kan ramme Kalis når Debilitating Shriek begynder.","Splattering Spew: træd lidt væk fra gruppen så din DoT-cirkel ikke overlapper DPS."]},
     heal:{nl:["Splattering Spew = nature DoT op iedereen + groeiende plassen — grootste raidschade van de baas. Cooldown paraat houden.","Debilitating Shriek (100 energie Kalis): escalerende raidschade — wordt gestopt door Latch's Heaving Yank die Kalis treft. Pre-heal voor dit moment."],en:["Splattering Spew = nature DoT on everyone + growing puddles — biggest raid damage of the encounter. Have a cooldown ready.","Debilitating Shriek (Kalis at 100 energy): escalating raid damage — stopped by Latch's Heaving Yank hitting Kalis. Pre-heal for this moment."],da:["Splattering Spew = nature DoT på alle + voksende pøler — størst raid-skade i kampen. Hav en cooldown klar.","Debilitating Shriek (Kalis ved 100 energi): eskalerende raid-skade — stoppes af Latch's Heaving Yank der rammer Kalis. Pre-heal til dette øjeblik."]},
     dps:{nl:["Beide bazen gelijkmatig aanvallen — Broken Bond op de overlevende is dodelijk.","Interrupt Kalis's Shadow Bolt elke cast.","Splattering Spew: losjes spreiden zodat de DoT-cirkels niet overlappen.","Curse of Darkness: dispel direct — anders fixeert een Dark Entity de speler 12 sec.","Debilitating Shriek stopt NIET door spelerinterrupts — iemand achter Kalis staan zodat Latch's Heaving Yank haar treft."],en:["Attack both bosses evenly — Broken Bond on the survivor is lethal.","Interrupt Kalis's Shadow Bolt every cast.","Splattering Spew: loosely spread so the DoT circles don't overlap.","Curse of Darkness: dispel immediately — otherwise a Dark Entity fixates the player for 12 sec.","Debilitating Shriek CANNOT be player-interrupted — someone stands behind Kalis so Latch's Heaving Yank hits her."],da:["Angrib begge bosser jævnt — Broken Bond på den overlevende er dødelig.","Afbryd Kalis's Shadow Bolt ved hvert cast.","Splattering Spew: løs spredning så DoT-cirklerne ikke overlapper.","Curse of Darkness: dispel straks — ellers fixerer en Dark Entity spilleren i 12 sek.","Debilitating Shriek kan IKKE afbrydes af spillere — stå bag Kalis så Latch's Heaving Yank rammer hende."]}},
    {name:"Commander Kroluk",num:3,
     desc:{nl:"Veteraan van de Tweede Oorlog. Bij 66% en 33% HP roept hij Rallying Bellow: adds spawnen, de baas krijgt Shield Wall en gebruikt Bladestorm.",en:"A veteran of the Second War. At 66% and 33% HP he casts Rallying Bellow: adds spawn, the boss gains Shield Wall and uses Bladestorm.",da:"En veteran fra Anden Krig. Ved 66% og 33% HP bruger han Rallying Bellow: adds spawner, bossen får Shield Wall og bruger Bladestorm."},
     tank:{nl:["Rampage = aanhoudende schade — wissel defensives af gedurende het hele gevecht.","Groepeer adds strak tijdens de tussenfase voor AoE."],en:["Rampage deals sustained damage — rotate defensives throughout the entire fight.","Cluster adds tightly during the intermission phase for AoE."],da:["Rampage giver vedvarende skade — roter defensives igennem hele kampen.","Saml adds tæt under mellemfasen for AoE."]},
     heal:{nl:["Rallying Bellow = massieve groepsschade — bewaar een healing cooldown voor dit moment.","Reckless Leap raakt spelers in de landingszone — spot heal direct."],en:["Rallying Bellow = massive group-wide damage — save a healing cooldown for this moment.","Reckless Leap hits players in the landing zone — spot heal immediately."],da:["Rallying Bellow = massiv gruppeskade — gem en healing cooldown til dette øjeblik.","Reckless Leap rammer spillere i landingszonen — spot heal straks."]},
     dps:{nl:["Bij 66%/33%: adds zo snel mogelijk doden — baas heeft Shield Wall + Bladestorm zolang adds leven.","Stack bij Intimidating Shout om verspreiding te beperken."],en:["At 66%/33%: kill adds as fast as possible — the boss has Shield Wall + Bladestorm while adds are alive.","Stack up during Intimidating Shout to limit its spread."],da:["Ved 66%/33%: dræb adds så hurtigt som muligt — bossen har Shield Wall + Bladestorm, mens adds lever.","Stå tæt under Intimidating Shout for at begrænse spredningen."]}},
    {name:"The Restless Heart",num:4,
     desc:{nl:"Geest geboren uit Windrunner-verdriet. Bij 100 energie vuurt hij een windpijl af die een uitdijende Billowing Wind-ring vormt.",en:"A spirit born from Windrunner grief. At 100 energy it fires a wind arrow that creates an expanding Billowing Wind ring.",da:"En ånd født af Windrunner-sorg. Ved 100 energi affyrer den en vindpil, der skaber en ekspanderende Billowing Wind-ring."},
     tank:{nl:["Geen specifieke tank-mechanic — positioneer de baas stabiel in het midden.","Ontwijkt de uitdijende Billowing Wind-ring zodra die spawnt."],en:["No dedicated tank mechanic — keep the boss positioned stably in the center.","Dodge the expanding Billowing Wind ring as soon as it spawns."],da:["Ingen dedikeret tank-mekanik — hold bossen stabilt i midten.","Undgå den ekspanderende Billowing Wind-ring, så snart den spawner."]},
     heal:{nl:["Arrow Rain + Bolt Gale = constante groepsschade — houd stabiele healing aan.","Bij 100 energie (Billowing Wind): pre-cast heals."],en:["Arrow Rain + Bolt Gale = constant group damage — maintain a steady healing rhythm.","At 100 energy (Billowing Wind): pre-cast your heals."],da:["Arrow Rain + Bolt Gale = konstant gruppeskade — oprethold en stabil healrytme.","Ved 100 energi (Billowing Wind): forbered dine heals på forhånd."]},
     dps:{nl:["Turbulent Arrows gooien je omhoog — ontwijkt ze proactief.","Billowing Wind-ring dijt uit — kom er BUITEN zodra hij spawnt.","Bolt Gale focust één speler — persoonlijke defensive gebruiken."],en:["Turbulent Arrows knock you airborne — dodge them proactively.","Billowing Wind ring expands — get OUTSIDE as soon as it spawns.","Bolt Gale targets one player — use a personal defensive."],da:["Turbulent Arrows kaster dig i luften — undgå dem aktivt.","Billowing Wind-ring ekspanderer — kom UDENFOR, så snart den spawner.","Bolt Gale målretter én spiller — brug en personlig defensive."]}}
  ],
  route:{
    summary:{nl:"Ga LINKS eerst. Emberdawn → rechts naar Derelict Duo → centrale gang naar Kroluk → toren naar The Restless Heart.",en:"Go LEFT first. Emberdawn → right toward Derelict Duo → central corridor to Kroluk → tower to The Restless Heart.",da:"Gå VENSTRE først. Emberdawn → højre mod Derelict Duo → den centrale gang til Kroluk → tårnet til The Restless Heart."},
    lust:[
      {moment:"Pull 1 — 🔥 BLOODLUST",uitleg:{nl:"Eerste grote trashgroep links bij de ingang",en:"First large trash group left of the entrance",da:"Første store trash-gruppe til venstre ved indgangen"}},
      {moment:"Boss 2 — Derelict Duo 🔥",uitleg:{nl:"Bloodlust bij de pull",en:"Bloodlust on the pull",da:"Bloodlust på pull"}},
      {moment:"Boss 4 — The Restless Heart 🔥",uitleg:{nl:"Eindbaas — tweede Bloodlust",en:"Final boss — second Bloodlust",da:"Slutboss — anden Bloodlust"}}
    ],
    pulls:[
      {label:{nl:"Pull 1 — 🔥 BLOODLUST",en:"Pull 1 — 🔥 BLOODLUST",da:"Pull 1 — 🔥 BLOODLUST"},desc:{nl:"Eerste grote trashgroep links. Lust hier.",en:"First large trash group on the left. Lust here.",da:"Første store trash-gruppe til venstre. Lust her."}},
      {label:{nl:"Pull 2–3",en:"Pull 2–3",da:"Pull 2–3"},desc:{nl:"Trashpacks in de westelijke gang. Onderbreek Phantasmal Mystics.",en:"Trash packs in the western corridor. Interrupt Phantasmal Mystics.",da:"Trash packs i den vestlige gang. Afbryd Phantasmal Mystics."}},
      {label:{nl:"Baas 1 — Emberdawn",en:"Boss 1 — Emberdawn",da:"Boss 1 — Emberdawn"},desc:{nl:"Plassen neerleggen aan de rand bij Updraft.",en:"Place puddles at the edges during Updraft.",da:"Placér pytterne i kanten under Updraft."}},
      {label:{nl:"Pull 5–6",en:"Pull 5–6",da:"Pull 5–6"},desc:{nl:"Pad richting Derelict Duo. Interrupt-prio op banshee-casts.",en:"Path toward Derelict Duo. Interrupt priority on banshee casts.",da:"Sti mod Derelict Duo. Interrupt-prioritet på banshee-casts."}},
      {label:{nl:"Baas 2 — Derelict Duo 🔥",en:"Boss 2 — Derelict Duo 🔥",da:"Boss 2 — Derelict Duo 🔥"},desc:{nl:"Bloodlust. Beide bazen gelijkmatig doden.",en:"Bloodlust. Kill both bosses simultaneously.",da:"Bloodlust. Dræb begge bosser jævnt."}},
      {label:{nl:"Pull 7–8",en:"Pull 7–8",da:"Pull 7–8"},desc:{nl:"Centrale gang. Adds dicht op elkaar voor AoE.",en:"Central corridor. Keep adds grouped for AoE.",da:"Centrale gang. Hold adds samlet til AoE."}},
      {label:{nl:"Baas 3 — Kroluk",en:"Boss 3 — Kroluk",da:"Boss 3 — Kroluk"},desc:{nl:"Bewaar defensives voor 66%/33% add-fasen.",en:"Save defensives for the 66%/33% add phases.",da:"Gem defensives til 66%/33% add-faserne."}},
      {label:{nl:"Baas 4 — The Restless Heart 🔥",en:"Boss 4 — The Restless Heart 🔥",da:"Boss 4 — The Restless Heart 🔥"},desc:{nl:"Eindbaas. Lust hier als beschikbaar.",en:"Final boss. Lust here if available.",da:"Slutboss. Lust her hvis tilgængeligt."}}
    ],
    mdt:true, kg_url:"https://keystone.guru/routes/expansion/midnight/season/1"
  }
},
// ──────────────────────────────────────────────
// 2. MAGISTERS' TERRACE
// ──────────────────────────────────────────────
{
  id:"magisters", name:"Magisters' Terrace", zone:"Isle of Quel'Danas", type:"mplus",
  bosses_short:["Arcanotron Custos","Seranel Sunlash","Gemellus","Degentrius"],
  level:{nl:"Ontgrendel lvl 90",en:"Unlock level 90",da:"Lås op ved niveau 90"},
  lore:{
    nl:"Het hart van arcane studie voor de sin'dorei. Het void-wezen Degentrius heeft de kans gegrepen om de Terrace aan te vallen en de Cynosure of Twilight te grijpen.",
    en:"The heart of arcane study for the sin'dorei. The void entity Degentrius has seized the opportunity to assault the Terrace and claim the Cynosure of Twilight.",
    da:"Hjertet af arcanestudie for sin'dorei. Void-væsenet Degentrius har grebet chancen for at angribe Terrassen og erobre Cynosure of Twilight."
  },
  tips:[
    {title:{nl:"📜 Arcane Tome-buff — NOOIT OVERSLAAN",en:"📜 Arcane Tome buff — NEVER SKIP",da:"📜 Arcane Tome-buff — ALDRIG SPRING OVER"},
     text:{nl:"Direct na de eerste trashgroep: klik op de Arcane Tome in de bibliotheek. Geeft +5% Haste voor 30 min, overleeft de dood.",en:"Right after the first trash group: click the Arcane Tome in the library. Grants +5% Haste for 30 min, persists through death.",da:"Straks efter den første trash-gruppe: klik på Arcane Tome i biblioteket. Giver +5% Haste i 30 min, overlever death."}},
    {title:{nl:"Ingangcoördinaten",en:"Entrance coordinates",da:"Indgangskoordinater"},
     text:{nl:"/way 35.2, 78.4 — Isle of Quel'Danas.",en:"/way 35.2, 78.4 — Isle of Quel'Danas.",da:"/way 35.2, 78.4 — Isle of Quel'Danas."}}
  ],
  bosses:[
    {name:"Arcanotron Custos",num:1,
     desc:{nl:"Arcane-construct dat de Magister-regels handhaaft. Tijdens Refueling Protocol spawnen Energy Orbs die gesoak't moeten worden.",en:"An arcane construct that enforces Magister protocol. During Refueling Protocol, Energy Orbs spawn and must be soaked.",da:"Et arcane-konstrukt, der håndhæver Magister-protokollen. Under Refueling Protocol spawner Energy Orbs, der skal soakes."},
     tank:{nl:["Positioneer voor Arcane Expulsion — terugstoot NA de AoE kan je in Residue-plassen slingeren.","Defensive tijdens Refueling Protocol — baas én orbs doen gelijktijdig schade."],en:["Position for Arcane Expulsion — the knockback after the AoE can throw you into Arcane Residue pools.","Use a defensive during Refueling Protocol — the boss and orbs both deal damage simultaneously."],da:["Placér dig til Arcane Expulsion — knockbacken efter AoE'en kan kaste dig ind i Arcane Residue-pytter.","Brug en defensive under Refueling Protocol — bossen og orbs gør skade samtidigt."]},
     heal:{nl:["Arcane Residue + terugstoot = gevaarlijkste moment — houd groep boven 80%.","Dispel Ethereal Shackles direct."],en:["Arcane Residue + knockback combo is the most dangerous moment — keep the group above 80% HP.","Dispel Ethereal Shackles immediately."],da:["Arcane Residue + knockback er det farligste øjeblik — hold gruppen over 80% HP.","Dispel Ethereal Shackles med det samme."]},
     dps:{nl:["Soak Energy Orbs tijdens Refueling — maximum 2–3 per speler (te veel = Unstable Energy stacks).","Arcane Residue-plassen voorzichtig weglopen van de baas."],en:["Soak Energy Orbs during Refueling — maximum 2–3 per player (too many = Unstable Energy stacks).","Carefully walk Arcane Residue pools away from the boss."],da:["Soakc Energy Orbs under Refueling — maks 2–3 per spiller (for mange = Unstable Energy-stacks).","Gå forsigtigt med Arcane Residue-pytter væk fra bossen."]}},
    {name:"Seranel Sunlash",num:2,
     desc:{nl:"Elite Spellbreaker die de Cynosure bewaakt. Wave of Silence (100 energie): sta IN de Suppression Zone, anders 8 sec gesilenced. Runic Mark verwijder je IN de zone. Hastening Ward altijd purgen.",en:"Elite Spellbreaker guarding the Cynosure. Wave of Silence (100 energy): stand IN the Suppression Zone, otherwise silenced for 8 sec. Remove Runic Mark IN the zone. Always purge Hastening Ward.",da:"Elite Spellbreaker, der vogter Cynosure. Wave of Silence (100 energi): stå I Suppression Zone, ellers silencet i 8 sek. Fjern Runic Mark I zonen. Purge altid Hastening Ward."},
     tank:{nl:["Hastening Ward = +100% attack speed + extra arcane schade — PURGE direct, anders grote defensive.","Runic Mark (bouncing glaive op tank): ga IN de Suppression Zone om het te verwijderen, één per keer.","Suppression Zone bij plaatsing: 8 yard AoE — kort wegstappen."],en:["Hastening Ward = +100% attack speed + extra arcane damage — PURGE immediately, otherwise major defensive.","Runic Mark (bouncing glaive on tank): go INTO the Suppression Zone to remove it, one at a time.","Suppression Zone on placement: 8 yard AoE — briefly step away."],da:["Hastening Ward = +100% attack speed + ekstra arcane skade — PURGE straks, ellers stor defensive.","Runic Mark (bouncing glaive på tank): gå IND I Suppression Zone for at fjerne den, én ad gangen.","Suppression Zone ved placering: 8 yards AoE — træd kort væk."]},
     heal:{nl:["Wave of Silence (100 energie): zorg dat IEDEREEN in de Suppression Zone staat — anders 8 sec gesilenced.","Null Reaction na Mark-verwijdering = AoE schade + slow — pre-heal voor elke verwijdering.","Suppression Zone purgt magische effecten — let op als healbuffs wegvallen."],en:["Wave of Silence (100 energy): make sure EVERYONE is in the Suppression Zone — otherwise silenced for 8 sec.","Null Reaction after Mark removal = AoE damage + slow — pre-heal before each removal.","Suppression Zone purges magic effects — watch if healing buffs fall off."],da:["Wave of Silence (100 energi): sørg for at ALLE er i Suppression Zone — ellers silencet i 8 sek.","Null Reaction efter Mark-fjernelse = AoE skade + slow — pre-heal før hver fjernelse.","Suppression Zone fjerner magiske effekter — pas på hvis healbuffs forsvinder."]},
     dps:{nl:["Wave of Silence (100 energie): beweeg tijdig IN de Suppression Zone — anders 8 sec gesilenced.","Runic Mark: één per keer IN de zone om het te verwijderen. Nooit twee marks tegelijk in de zone — wipe.","Hastening Ward op de baas: purge het als je purge hebt, anders defensive inzetten."],en:["Wave of Silence (100 energy): move INTO the Suppression Zone in time — otherwise silenced for 8 sec.","Runic Mark: one at a time INTO the zone to remove it. Never two marks in the zone at once — wipe.","Hastening Ward on the boss: purge it if you have a purge, otherwise use a defensive."],da:["Wave of Silence (100 energi): bevæg dig IND I Suppression Zone i tide — ellers silencet i 8 sek.","Runic Mark: én ad gangen IND I zonen for at fjerne den. Aldrig to marks i zonen på én gang — wipe.","Hastening Ward på bossen: purge det hvis du har purge, ellers brug en defensive."]}},
    {name:"Gemellus",num:3,
     desc:{nl:"Void-wezen dat zichzelf beschermt én voortplant via Void-klonen. Dood de klonen snel.",en:"A void entity that protects itself and replicates via Void clones. Kill the clones quickly.",da:"Et void-væsen, der beskytter sig selv og kopierer sig via Void-kloner. Dræb klonerne hurtigt."},
     tank:{nl:["Beheer aggro op Gemellus én pak Void-klonen op zodra ze spawnen.","Het Void-schild pulseert schade — defensive om het uit te houden."],en:["Manage aggro on Gemellus and pick up Void clones as soon as they spawn.","The Void shield pulses damage — use a defensive to survive it."],da:["Håndter aggro på Gemellus og tag Void-kloner op, så snart de spawner.","Void-skjoldet pulser skade — brug en defensive for at overleve."]},
     heal:{nl:["Kloon-spawns = burst AoE — cooldown gereed.","Aanhoudende Void-corruptie tikt — groep bijvullen."],en:["Clone spawns = burst AoE damage — have a cooldown ready.","Persistent Void corruption ticks — keep the group topped up."],da:["Klon-spawns = burst AoE-skade — hav en cooldown klar.","Vedvarende Void-korruption tikker — hold gruppen toppet."]},
     dps:{nl:["Prioriteer Void-klonen direct bij spawnen.","Na klonen dood: brand Gemellus hard — kwetsbaar tussen spawns.","Vermijd groeiende Void-plassen."],en:["Prioritise Void clones immediately when they spawn.","Once clones are dead: burn Gemellus hard — he is vulnerable between spawns.","Avoid growing Void zone puddles."],da:["Prioritér Void-kloner straks, når de spawner.","Når kloner er døde: burn Gemellus hårdt — han er sårbar mellem spawns.","Undgå voksende Void-pytter."]}},
    {name:"Degentrius",num:4,
     desc:{nl:"Machtig Void-wezen dat de Terrace bestormt. Eindbaas van de Seizoen 1 M+-versie.",en:"A powerful void entity assaulting the Terrace. Final boss of the Season 1 M+ version.",da:"Et kraftfuldt void-væsen, der stormer Terrassen. Slutbossen i Sæson 1 M+-versionen."},
     tank:{nl:["Hulking Fragment = grote tankbuster — stap WEG van de groep (8 yard AoE).","Entropy Blast = magic hit + 30s DoT. Dispel jezelf weg van de baas om de plas buiten de groep te droppen.","Null Bomb spawnt na 4 soaks — de tank detoneert hem. Grote defensive klaar houden.","Void Torrent beams NIET aanraken — 5 sec stun."],en:["Hulking Fragment = large tank buster — step AWAY from the group (8 yard AoE).","Entropy Blast = magic hit + 30s DoT. Get dispelled away from the boss to drop the puddle outside the group.","Null Bomb spawns after 4 soaks — the tank detonates it. Have a major defensive ready.","Void Torrent beams do NOT touch — 5 sec stun."],da:["Hulking Fragment = stor tankbuster — træd VÆRD fra gruppen (8 yards AoE).","Entropy Blast = magic hit + 30s DoT. Bliv dispellet væk fra bossen for at lægge pølen uden for gruppen.","Null Bomb spawner efter 4 soaks — tanken detonerer den. Hav en stor defensive klar.","Void Torrent beams RØR IKKE — 5 sek stun."]},
     heal:{nl:["Void-uitbarstingsfase = grootste healingmoment dungeon — grote cooldown.","Dispel Void-corruptie direct — groeit snel naar dodelijke niveaus."],en:["Void eruption phase = the biggest healing moment in the dungeon — major cooldown.","Dispel Void corruption immediately — it grows quickly to lethal levels."],da:["Void-udbrudsfase = det største healingøjeblik i dungeons — stor cooldown.","Dispel Void-korruption med det samme — den vokser hurtigt til dødelige niveauer."]},
     dps:{nl:["1 speler per kwadrant (gedefinieerd door Void Torrent beams). Nooit een beam aanraken — 5 sec stun.","Unstable Void Essence bounced door alle 4 kwadranten — soak als het bij jou bounced. Mis je het = Void Destruction stackende DoT op iedereen (2+ stacks = wipe).","Devouring Entropy: DoT die afloopt = Entropy Orbs (70% slow). Laat ze aflopen ver van de groep.","Void Torrent beams = NIET aanraken. Dit is de #1 doodsoorzaak."],en:["1 player per quadrant (defined by Void Torrent beams). Never touch a beam — 5 sec stun.","Unstable Void Essence bounces through all 4 quadrants — soak when it bounces to you. Miss it = Void Destruction stacking DoT on everyone (2+ stacks = wipe).","Devouring Entropy: DoT that expires = Entropy Orbs (70% slow). Let them expire far from the group.","Void Torrent beams = do NOT touch. This is the #1 cause of death."],da:["1 spiller per kvadrant (defineret af Void Torrent beams). Rør aldrig en beam — 5 sek stun.","Unstable Void Essence bouncer gennem alle 4 kvadranter — soak når den bouncer til dig. Går glip = Void Destruction stablende DoT på alle (2+ stacks = wipe).","Devouring Entropy: DoT der udløber = Entropy Orbs (70% slow). Lad dem udløbe langt fra gruppen.","Void Torrent beams = RØR IKKE. Dette er #1 dødsårsag."]}}
  ],
  route:{
    summary:{nl:"Rechtstreeks door de Terrace. Pak de Arcane Tome buff na pull 1. Lust op pull 1, baas 2 en eindbaas.",en:"Straight through the Terrace. Grab the Arcane Tome buff after pull 1. Lust on pull 1, boss 2 and final boss.",da:"Direkte igennem Terrassen. Tag Arcane Tome-buff efter pull 1. Lust på pull 1, boss 2 og slutbossen."},
    lust:[
      {moment:"Pull 1 — 🔥 BLOODLUST",uitleg:{nl:"Eerste grote trashgroep",en:"First large trash group",da:"Første store trash-gruppe"}},
      {moment:"Boss 2 — Seranel Sunlash 🔥",uitleg:{nl:"Tweede lust — burst venster",en:"Second lust — burst window",da:"Anden lust — burst-vindue"}},
      {moment:"Boss 4 — Degentrius 🔥",uitleg:{nl:"Eindbaas — derde lust als beschikbaar",en:"Final boss — third lust if available",da:"Slutboss — tredje lust hvis tilgængeligt"}}
    ],
    pulls:[
      {label:{nl:"Pull 1 — 🔥 BLOODLUST",en:"Pull 1 — 🔥 BLOODLUST",da:"Pull 1 — 🔥 BLOODLUST"},desc:{nl:"Eerste grote trashgroep. Lust hier.",en:"First large trash group. Lust here.",da:"Første store trash-gruppe. Lust her."}},
      {label:{nl:"→ Arcane Tome-buff!",en:"→ Arcane Tome buff!",da:"→ Arcane Tome-buff!"},desc:{nl:"Klik de Tome in de bibliotheek — +5% Haste, 30 min.",en:"Click the Tome in the library — +5% Haste, 30 min.",da:"Klik på Tome i biblioteket — +5% Haste, 30 min."}},
      {label:{nl:"Baas 1 — Arcanotron Custos",en:"Boss 1 — Arcanotron Custos",da:"Boss 1 — Arcanotron Custos"},desc:{nl:"Orb-soak verdelen. Max 3 per speler.",en:"Assign orb soaking. Max 3 per player.",da:"Fordel orb-soaking. Maks 3 per spiller."}},
      {label:{nl:"Baas 2 — Seranel Sunlash 🔥",en:"Boss 2 — Seranel Sunlash 🔥",da:"Boss 2 — Seranel Sunlash 🔥"},desc:{nl:"Bloodlust. Sta IN de Suppression Zone bij Wave of Silence.",en:"Bloodlust. Stand IN the Suppression Zone during Wave of Silence.",da:"Bloodlust. Stå I Suppression Zone under Wave of Silence."}},
      {label:{nl:"Baas 3 — Gemellus",en:"Boss 3 — Gemellus",da:"Boss 3 — Gemellus"},desc:{nl:"Klonen direct focussen. Daarna baas burnen.",en:"Focus clones immediately. Then burn the boss.",da:"Focus kloner straks. Derefter burn bossen."}},
      {label:{nl:"Baas 4 — Degentrius 🔥",en:"Boss 4 — Degentrius 🔥",da:"Boss 4 — Degentrius 🔥"},desc:{nl:"Eindbaas. Void-tentakels vernietigen. Lust als beschikbaar.",en:"Final boss. Destroy Void tentacles. Lust if available.",da:"Slutboss. Ødelæg Void-tentakler. Lust hvis tilgængeligt."}}
    ],
    mdt:true, kg_url:"https://keystone.guru/routes/expansion/midnight/season/1"
  }
},
// ──────────────────────────────────────────────
// 3. MAISARA CAVERNS
// ──────────────────────────────────────────────
{
  id:"maisara", name:"Maisara Caverns", zone:"Zul'Aman", type:"mplus",
  bosses_short:["Muro'jin & Nekraxx","Vordaza","Rak'tul"],
  level:{nl:"Ontgrendel lvl 85",en:"Unlock level 85",da:"Lås op ved niveau 85"},
  lore:{
    nl:"Onder de heilige Maisara-heuvels offeren Vilebranch-trollen gevangenen op om necromantie te voeden. Beschouwd als de moeilijkste Seizoen 1-dungeon — de meeste interrupts vereist.",
    en:"Beneath the sacred Maisara Hills, Vilebranch trolls sacrifice prisoners to fuel their necromancy. Widely regarded as the most mechanically demanding Season 1 dungeon — highest interrupt requirements.",
    da:"Under de hellige Maisara-bakker ofrer Vilebranch-trolde fanger for at drive deres nekromanti. Betragtet som den mekanisk sværeste Sæson 1-dungeon — flest interrupt-krav."
  },
  tips:[
    {title:{nl:"Start: ga RECHTS!",en:"Start: go RIGHT!",da:"Start: gå HØJRE!"},
     text:{nl:"Rechterhuis = Cooking Pot (Hearty Vilebranch Stew — +3% leech/avoidance, 30 min, overleeft de dood). Altijd oppakken.",en:"Right house = Cooking Pot (Hearty Vilebranch Stew — +3% leech/avoidance, 30 min, persists through death). Always grab it.",da:"Højre hus = Cooking Pot (Hearty Vilebranch Stew — +3% leech/avoidance, 30 min, overlever death). Tag det altid."}},
    {title:{nl:"Prisoners bevrijden",en:"Free the Prisoners",da:"Befri fangerne"},
     text:{nl:"Bevrijdt 8 van 12 Witherbark Prisoners om door te kunnen. Alleen buiten gevecht.",en:"Free 8 of 12 Witherbark Prisoners to progress. Only possible out of combat.",da:"Befri 8 af 12 Witherbark Prisoners for at komme videre. Kun muligt uden for kamp."}},
    {title:{nl:"⚠ Moeilijkste S1-dungeon",en:"⚠ Hardest S1 dungeon",da:"⚠ Sværeste S1-dungeon"},
     text:{nl:"Vereist strakke interrupt-rotaties. Wijs rollen toe vóór elke pull.",en:"Requires tight interrupt rotations. Assign roles before every pull.",da:"Kræver strammede interrupt-rotationer. Tildel roller før hvert pull."}}
  ],
  bosses:[
    {name:"Muro'jin & Nekraxx",num:1,
     desc:{nl:"Vilebranch-jager met zijn herboren adelaar. DUO-BAAS — dood ze tegelijk, anders krijgt de overlevende een gevaarlijke buff.",en:"A Vilebranch tracker with his reanimated eagle. DUAL BOSS — kill them simultaneously, otherwise the survivor gains a dangerous buff.",da:"En Vilebranch-jæger med sin genoplivede ørn. DOBBELT BOSS — dræb dem samtidig, ellers får den overlevende en farlig buff."},
     tank:{nl:["Houd beide bazen bij elkaar voor AoE maar vermijd gelijktijdige frontale aanvallen.","Defensives bij Muro'jin's zware melee-combo's."],en:["Keep both bosses together for AoE but avoid overlapping their frontal attacks.","Use defensives during Muro'jin's heavy melee combos."],da:["Hold begge bosser sammen til AoE, men undgå overlappende frontale angreb.","Brug defensives under Muro'jins tunge melee-kombos."]},
     heal:{nl:["Nekraxx duikt op willekeurige spelers — spot heal na elke duikaanval.","Twee bazen tegelijk = constante groepsdruk — mana zorgvuldig beheren."],en:["Nekraxx dive-bombs random players — spot heal after every dive attack.","Two bosses simultaneously = constant group pressure — manage mana carefully."],da:["Nekraxx styrtdykker ned på tilfældige spillere — spot heal efter hvert dyk.","To bosser på samme tid = konstant gruppepres — styr mana forsigtigt."]},
     dps:{nl:["INTERRUPTROTATIE VERPLICHT — geen enkele Vilebranch-cast mag doorgaan.","Beide bazen gelijkmatig aanvallen — survivor buff is gevaarlijk.","Nekraxx-duikaanvallen laten grondeffecten achter — nooit blijven staan."],en:["INTERRUPT ROTATION REQUIRED — no Vilebranch cast should ever go through.","Attack both bosses evenly — the survivor buff is dangerous.","Nekraxx dive attacks leave ground effects — never stand in them."],da:["INTERRUPT-ROTATION PÅKRÆVET — ingen Vilebranch-cast bør nogensinde gå igennem.","Angrib begge bosser jævnt — survivor-buff er farlig.","Nekraxx-dyk efterlader groundeffects — stå aldrig i dem."]}},
    {name:"Vordaza",num:2,
     desc:{nl:"Necromantische meesteres van zielen. Wrest Phantoms: laat geesten tegen elkaar botsen (niet aanvallen!). Necrotic Convergence: interrupt + doorbreek het schild direct. Drain Soul = zware tankschade.",en:"Necromantic master of souls. Wrest Phantoms: guide spirits to collide with each other (do not attack!). Necrotic Convergence: interrupt + break the shield immediately. Drain Soul = heavy tank damage.",da:"Nekromantisk sjælemester. Wrest Phantoms: led ånder til at kollidere (angrib dem ikke!). Necrotic Convergence: afbryd + bryd skjoldet øjeblikkeligt. Drain Soul = tung tankskade."},
     tank:{nl:["Drain Soul = zware schade + healing absorb op de tank — grote defensive.","Necrotic Convergence: Deathshroud-schild verschijnt + escalerende AoE — interrupt haar, doorbreek het schild.","Dodge Coalesced Death op de grond."],en:["Drain Soul = heavy damage + healing absorb on the tank — major defensive.","Necrotic Convergence: Deathshroud shield appears + escalating AoE — interrupt her, break the shield.","Dodge Coalesced Death on the ground."],da:["Drain Soul = tung skade + healing-absorb på tanken — stor defensive.","Necrotic Convergence: Deathshroud-skjold opstår + eskalerende AoE — afbryd hende, bryd skjoldet.","Undgå Coalesced Death på gulvet."]},
     heal:{nl:["Withering Miasma = constante raid-schade het hele gevecht.","Necrotic Convergence: grote cooldown + interrupt zo snel mogelijk. Schild niet doorbreken = wipe.","Drain Soul op tank = healing absorb — prioriteer de tank."],en:["Withering Miasma = constant raid damage throughout the fight.","Necrotic Convergence: major cooldown + interrupt as fast as possible. Not breaking shield = wipe.","Drain Soul on tank = healing absorb — prioritize the tank."],da:["Withering Miasma = konstant raid-skade hele kampen.","Necrotic Convergence: stor cooldown + afbryd så hurtigt som muligt. Ikke bryde skjold = wipe.","Drain Soul på tank = healing-absorb — prioritér tanken."]},
     dps:{nl:["Wrest Phantoms: Unstable Phantoms najagen spelers — NIET aanvallen (99% schade-reductie). Leid ze NAAR ELKAAR zodat ze botsen. Max 2 Lingering Dread stacks.","Necrotic Convergence: interrupt + doorbreek schild direct. Niet doen = wipe.","Dodge Coalesced Death. Offensive cooldowns bewaren voor Necrotic Convergence."],en:["Wrest Phantoms: Unstable Phantoms chase players — do NOT attack (99% damage reduction). Guide them TOWARD EACH OTHER to collide. Max 2 Lingering Dread stacks.","Necrotic Convergence: interrupt + break shield immediately. Failing = wipe.","Dodge Coalesced Death. Save offensive cooldowns for Necrotic Convergence."],da:["Wrest Phantoms: Unstable Phantoms jagter spillere — ANGRIB IKKE (99% skadereduktion). Led dem MOD HINANDEN så de kolliderer. Maks 2 Lingering Dread stacks.","Necrotic Convergence: afbryd + bryd skjold øjeblikkeligt. Undlader = wipe.","Undgå Coalesced Death. Gem offensive cooldowns til Necrotic Convergence."]}},
    {name:"Rak'tul, Vessel of Souls",num:3,
     desc:{nl:"Eindbaas — construct gevuld met gestolen zielen. Meest interrupt-intensieve baas van Seizoen 1.",en:"Final boss — a construct filled with stolen souls. The most interrupt-intensive boss of Season 1.",da:"Slutboss — et konstrukt fyldt med stjålne sjæle. Den mest interrupt-intensive boss i Sæson 1."},
     tank:{nl:["Taunt swap bij stapelende debuff-stacks.","Positioneer in het midden zodat de groep ruimte heeft om te bewegen."],en:["Taunt swap on stacking debuffs.","Position in the center so the group has room to move."],da:["Taunt swap på staplede debuffs.","Placér dig i midten, så gruppen har plads til at bevæge sig."]},
     heal:{nl:["Aanhoudende AoE-zielschade — constante groepshealing vereist.","Grote cooldown voor hoge-energie-burst-fasen.","Dispel zielencorruptie direct — stacks groeien snel."],en:["Persistent AoE soul damage — constant group healing required.","Major cooldown for high-energy burst phases.","Dispel soul corruption immediately — stacks grow fast."],da:["Vedvarende AoE-sjælskade — konstant gruppeheling krævet.","Stor cooldown til høj-energi-burstfaser.","Dispel sjælekorruption med det samme — stacks vokser hurtigt."]},
     dps:{nl:["Onderbreek ALLE castbare vaardigheden — absolute hoogste prioriteit.","Focus ziel-fragment-adds — ze voeden de baas als ze blijven leven.","Persoonlijke defensives proactief inzetten."],en:["Interrupt ALL castable abilities — absolute top priority.","Focus soul fragment adds — they empower the boss if left alive.","Use personal defensives proactively."],da:["Afbryd ALLE castbare evner — absolut højeste prioritet.","Focus sjæle-fragment-adds — de styrker bossen, hvis de overlever.","Brug personlige defensives proaktivt."]}}
  ],
  route:{
    summary:{nl:"Start rechts voor de Cooking Pot-buff. 8 Prisoners bevrijden. Lust: pull 1, pull 8, Vessel fase 2.",en:"Start right for the Cooking Pot buff. Free 8 Prisoners. Lust: pull 1, pull 8, Vessel phase 2.",da:"Start til højre for Cooking Pot-buff. Befri 8 Prisoners. Lust: pull 1, pull 8, Vessel fase 2."},
    lust:[
      {moment:"Pull 1 — 🔥 BLOODLUST",uitleg:{nl:"Eerste grote pull rechts van de ingang",en:"First large pull right of the entrance",da:"Første store pull til højre for indgangen"}},
      {moment:"Pull 8 — 🔥 BLOODLUST",uitleg:{nl:"Grote pull vlak voor eindbaas",en:"Large pull just before the final boss",da:"Stort pull lige inden slutbossen"}},
      {moment:"Vessel of Souls fase 2 — 🔥",uitleg:{nl:"Tweede fase eindbaas",en:"Final boss phase 2",da:"Slutbossens fase 2"}}
    ],
    pulls:[
      {label:{nl:"Start — Ga RECHTS",en:"Start — Go RIGHT",da:"Start — Gå HØJRE"},desc:{nl:"Cooking Pot in rechterhuis — altijd oppakken.",en:"Cooking Pot in right house — always grab it.",da:"Cooking Pot i højre hus — tag det altid."}},
      {label:{nl:"Pull 1 — 🔥 BLOODLUST",en:"Pull 1 — 🔥 BLOODLUST",da:"Pull 1 — 🔥 BLOODLUST"},desc:{nl:"Eerste grote trashgroep rechts. Lust hier.",en:"First large trash group on the right. Lust here.",da:"Første store trash-gruppe til højre. Lust her."}},
      {label:{nl:"Pull 2–3 + Prisoners (rechts)",en:"Pull 2–3 + Prisoners (right)",da:"Pull 2–3 + Prisoners (højre)"},desc:{nl:"Trash ruimen + Prisoners bevrijden rechts.",en:"Clear trash + free Prisoners on the right side.",da:"Ryd trash + befri Prisoners i højre side."}},
      {label:{nl:"Pull 4–5 + Prisoners (links)",en:"Pull 4–5 + Prisoners (left)",da:"Pull 4–5 + Prisoners (venstre)"},desc:{nl:"Herhaal aan de linkerzijde. Vermijd Freezing Traps.",en:"Repeat on the left side. Avoid Freezing Traps.",da:"Gentag på venstre side. Undgå Freezing Traps."}},
      {label:{nl:"Baas 1 — Muro'jin & Nekraxx",en:"Boss 1 — Muro'jin & Nekraxx",da:"Boss 1 — Muro'jin & Nekraxx"},desc:{nl:"Beide bazen gelijkmatig doden. Nekraxx-duiken ontwijken.",en:"Kill both bosses evenly. Dodge Nekraxx dive attacks.",da:"Dræb begge bosser jævnt. Undgå Nekraxx-dyk."}},
      {label:{nl:"Baas 2 — Vordaza + Rak'tul",en:"Boss 2 — Vordaza + Rak'tul",da:"Boss 2 — Vordaza + Rak'tul"},desc:{nl:"Vordaza snel doden. Grote cooldown voor Rak'tul.",en:"Kill Vordaza fast. Major cooldown for Rak'tul.",da:"Dræb Vordaza hurtigt. Stor cooldown til Rak'tul."}},
      {label:{nl:"Pull 8 — 🔥 BLOODLUST",en:"Pull 8 — 🔥 BLOODLUST",da:"Pull 8 — 🔥 BLOODLUST"},desc:{nl:"Grote trashpull voor eindbaas. Lust hier.",en:"Large trash pull before the final boss. Lust here.",da:"Stort trash-pull inden slutbossen. Lust her."}},
      {label:{nl:"Baas 3 — Vessel of Souls 🔥",en:"Boss 3 — Vessel of Souls 🔥",da:"Boss 3 — Vessel of Souls 🔥"},desc:{nl:"Alle interrupts. Adds direct doden. Lust in fase 2.",en:"All interrupts. Kill adds immediately. Lust in phase 2.",da:"Alle interrupts. Dræb adds straks. Lust i fase 2."}}
    ],
    mdt:true, kg_url:"https://keystone.guru/routes/retail/maisara-caverns/new"
  }
},
// ──────────────────────────────────────────────
// 4. NEXUS-POINT XENAS
// ──────────────────────────────────────────────
{
  id:"nexus", name:"Nexus-Point Xenas", zone:"Voidstorm", type:"mplus",
  bosses_short:["Corewright Kasreth","Corewarden Nysarra","Lothraxion"],
  level:{nl:"Ontgrendel lvl 90",en:"Unlock level 90",da:"Lås op ved niveau 90"},
  lore:{
    nl:"Een gefragmenteerde Ethereal-faciliteit op de rand van instorting. Lothraxion's stralende disruptie heeft de nexus doorpulst met onstabiele void- en arcane-energie.",
    en:"A fragmented Ethereal facility on the verge of collapse. Lothraxion's radiant disruption has flooded the nexus with unstable void and arcane energy.",
    da:"Et fragmenteret Ethereal-anlæg på randen af sammenbrud. Lothraxions strålende forstyrrelse har oversvømmet nexus med ustabil void- og arcane-energi."
  },
  tips:[
    {title:{nl:"Snelste S1-dungeon",en:"Fastest S1 dungeon",da:"Hurtigste S1-dungeon"},
     text:{nl:"Slechts 3 bazen — ideaal voor tijdbeheer bij hoge keys.",en:"Only 3 bosses — ideal for time management on high keys.",da:"Kun 3 bosser — ideel til tidsstyring på høje keys."}},
    {title:{nl:"Loot highlight",en:"Loot highlight",da:"Loot-highlight"},
     text:{nl:"Ringen, healer-trinket, dolk — erg gewild in Seizoen 1.",en:"Rings, healer trinket, dagger — highly sought after in Season 1.",da:"Ringe, healer-trinket, dolk — meget efterspurgt i Sæson 1."}}
  ],
  bosses:[
    {name:"Chief Corewright Kasreth",num:1,
     desc:{nl:"Ethereal-bewaker van de Corespark Engine. Leyline Arrays lopen door de kamer — NOOIT aanraken. Reflux Charge verwijder je door IN een Leyline Array te staan. Bij 100 energie: Corespark Detonation.",en:"Ethereal guardian of the Corespark Engine. Leyline Arrays run through the room — NEVER touch them. Remove Reflux Charge by standing IN a Leyline Array. At 100 energy: Corespark Detonation.",da:"Ethereal-vogter af Corespark Engine. Leyline Arrays løber gennem rummet — RØR DEM ALDRIG. Fjern Reflux Charge ved at stå I en Leyline Array. Ved 100 energi: Corespark Detonation."},
     tank:{nl:["Reflux Charge op jou: ga IN een Leyline Array staan om het te verwijderen (kort gestunt — normaal).","Positioneer de boss weg van de Leyline Arrays — anders loopt DPS er doorheen.","Corespark Detonation bij 100 energie: dodge de landingszone."],en:["Reflux Charge on you: stand IN a Leyline Array to remove it (briefly stunned — normal).","Position the boss away from the Leyline Arrays — otherwise DPS accidentally runs through them.","Corespark Detonation at 100 energy: dodge the landing zone."],da:["Reflux Charge på dig: stå IND I en Leyline Array for at fjerne den (kort stunnet — normalt).","Positionér bossen væk fra Leyline Arrays — ellers løber DPS ved et uheld igennem dem.","Corespark Detonation ved 100 energi: undgå landingszonen."]},
     heal:{nl:["Corespark Detonation = AoE + Sparkburn DoT op iedereen — spot heal na de explosie.","Flux Collapse (kapotte pijpen langs de muren): kleine extra schade, maar stapelt als meerdere mensen geraakt worden."],en:["Corespark Detonation = AoE + Sparkburn DoT on everyone — spot heal after the explosion.","Flux Collapse (broken pipes along the walls): minor extra damage, but stacks if multiple people are hit."],da:["Corespark Detonation = AoE + Sparkburn DoT på alle — spot heal efter eksplosionen.","Flux Collapse (ødelagte rør langs væggene): lille ekstra skade, men stabler hvis flere rammes."]},
     dps:{nl:["Leyline Arrays = statische beams door de kamer — NOOIT aanraken (zware schade + stun).","Reflux Charge op jou: IN een Leyline Array gaan om hem te clearen.","Corespark Detonation bij 100 energie: dodge de zone.","Mana Batteries (langs de muren): als adds ze activeren — snel vernietigen."],en:["Leyline Arrays = static beams through the room — NEVER touch them (heavy damage + stun).","Reflux Charge on you: go INTO a Leyline Array to clear it.","Corespark Detonation at 100 energy: dodge the zone.","Mana Batteries (along the walls): if adds activate them — quickly destroy them."],da:["Leyline Arrays = statiske beams gennem rummet — RØR DEM ALDRIG (tung skade + stun).","Reflux Charge på dig: gå IND I en Leyline Array for at cleare den.","Corespark Detonation ved 100 energi: undgå zonen.","Mana Batteries (langs væggene): hvis adds aktiverer dem — ødelæg dem hurtigt."]}},
    {name:"Corewarden Nysarra",num:2,
     desc:{nl:"Start op 60% HP (lichtscar door Lothraxion). Lightscar Flare = Lothraxion verschijnt, baas krijgt 300% damage amp + 30% healing amp — ALLE cooldowns hier. Umbral Lash = tank cleave + Void Scar debuff.",en:"Starts at 60% HP (lightscarred by Lothraxion). Lightscar Flare = Lothraxion appears, boss gains 300% damage amp + 30% healing amp — ALL cooldowns here. Umbral Lash = tank cleave + Void Scar debuff.",da:"Starter på 60% HP (lightscarret af Lothraxion). Lightscar Flare = Lothraxion dukker op, boss får 300% damage amp + 30% healing amp — ALLE cooldowns her. Umbral Lash = tank cleave + Void Scar debuff."},
     tank:{nl:["Umbral Lash = tank cleave + Void Scar debuff. Keer de boss weg van de groep.","Lightscar Flare: Lothraxion-beam verschijnt — DODGE hem (5 sec disorient). Daarna baas gestund + 300% schade — dit is het burst-venster.","Null Vanguard: adds spawnen (Dreadflail + Grand Nullifier) — off-tank pakt ze, snel doden."],en:["Umbral Lash = tank cleave + Void Scar debuff. Face boss away from the group.","Lightscar Flare: Lothraxion beam appears — DODGE it (5 sec disorient). Then boss stunned + 300% damage — this is the burst window.","Null Vanguard: adds spawn (Dreadflail + Grand Nullifier) — off-tank picks them up, kill fast."],da:["Umbral Lash = tank cleave + Void Scar debuff. Vend bossen væk fra gruppen.","Lightscar Flare: Lothraxion-beam opstår — UNDGÅ den (5 sek disorient). Derefter boss stunnet + 300% skade — dette er burst-vinduet.","Null Vanguard: adds spawner (Dreadflail + Grand Nullifier) — off-tank tager dem, dræb hurtigt."]},
     heal:{nl:["Lightscar Flare = 300% damage amp op de baas + 30% healing amp — grote raidcooldown hier, iedereen staat in de lichtzone.","Umbral Lash schade op tank: spot heal.","Null Vanguard adds: snel doden, hun schade stapelt op."],en:["Lightscar Flare = 300% damage amp on boss + 30% healing amp — major raid cooldown here, everyone stands in the light zone.","Umbral Lash damage on tank: spot heal.","Null Vanguard adds: kill fast, their damage stacks up."],da:["Lightscar Flare = 300% damage amp på bossen + 30% healing amp — stor raid-cooldown her, alle står i lyszonen.","Umbral Lash skade på tank: spot heal.","Null Vanguard adds: dræb hurtigt, deres skade stabler sig op."]},
     dps:{nl:["Lightscar Flare = 300% damage amp — ALLE offensive cooldowns hier inzetten. Dodge de Lothraxion-beam voor de fase begint.","Null Vanguard: Dreadflail + Grand Nullifier snel doden voor Nysarra haar volgende cast.","Baas start op 60% HP maar totale HP is hoger dan normaal — niet onderschatten."],en:["Lightscar Flare = 300% damage amp — use ALL offensive cooldowns here. Dodge the Lothraxion beam before the phase starts.","Null Vanguard: kill Dreadflail + Grand Nullifier fast before Nysarra's next cast.","Boss starts at 60% HP but total HP is higher than normal — don't underestimate it."],da:["Lightscar Flare = 300% damage amp — brug ALLE offensive cooldowns her. Undgå Lothraxion-beamen inden fasen starter.","Null Vanguard: dræb Dreadflail + Grand Nullifier hurtigt inden Nysarras næste cast.","Boss starter på 60% HP men total HP er højere end normalt — undervurder det ikke."]}},
    {name:"Lothraxion",num:3,
     desc:{nl:"Naaru-wezen verblind door verraad. Divine Guile (100 energie): Lothraxion verdwijnt tussen klonen — vind de echte (GEEN gele hoorns!) en interrupt hem. Searing Rend = zware tankbuster. Brilliant Dispersion = AoE op meerdere spelers.",en:"Naaru entity blinded by betrayal. Divine Guile (100 energy): Lothraxion hides among clones — find the real one (NO yellow horns!) and interrupt him. Searing Rend = heavy tank buster. Brilliant Dispersion = AoE on multiple players.",da:"Naaru-væsen blindet af forræderi. Divine Guile (100 energi): Lothraxion gemmer sig blandt kloner — find den rigtige (INGEN gule horn!) og afbryd ham. Searing Rend = tung tankbuster. Brilliant Dispersion = AoE på flere spillere."},
     tank:{nl:["Searing Rend = grote tankbuster + Radiant Scars debuff. Grote defensive hier.","Divine Guile (100 energie): Lothraxion verdwijnt. Fractured Images verschijnen — ze doen Mirrored Rend als je te dicht bij staat. Interrupt de ECHTE Lothraxion (geen gele hoorns).","Core Exposure als je de verkeerde interruptt = grote raidschade. Elke foute poging stapelt."],en:["Searing Rend = large tank buster + Radiant Scars debuff. Major defensive here.","Divine Guile (100 energy): Lothraxion disappears. Fractured Images appear — they do Mirrored Rend if you stand too close. Interrupt the REAL Lothraxion (no yellow horns).","Core Exposure if you interrupt the wrong one = major raid damage. Each wrong attempt stacks."],da:["Searing Rend = stor tankbuster + Radiant Scars debuff. Stor defensive her.","Divine Guile (100 energi): Lothraxion forsvinder. Fractured Images opstår — de gør Mirrored Rend hvis du står for tæt på. Afbryd den RIGTIGE Lothraxion (ingen gule horn).","Core Exposure hvis du afbryder den forkerte = stor raid-skade. Hvert forkert forsøg stabler."]},
     heal:{nl:["Brilliant Dispersion = AoE schade op meerdere spelers tegelijk — raidcooldown paraat.","Divine Guile-fase: Fractured Images doen Mirrored Rend als spelers er te dicht bij staan — herinner mensen afstand te houden.","Searing Rend op tank = grote spike, Radiant Scars debuff — tank is prioriteit."],en:["Brilliant Dispersion = AoE damage on multiple players simultaneously — have raid cooldown ready.","Divine Guile phase: Fractured Images do Mirrored Rend if players stand too close — remind people to keep distance.","Searing Rend on tank = large spike, Radiant Scars debuff — tank is priority."],da:["Brilliant Dispersion = AoE skade på flere spillere simultant — raidcooldown klar.","Divine Guile-fasen: Fractured Images gør Mirrored Rend hvis spillere står for tæt — påmind folk om at holde afstand.","Searing Rend på tank = stor spike, Radiant Scars debuff — tank er prioritet."]},
     dps:{nl:["Divine Guile (100 energie): Lothraxion verdwijnt tussen klonen. Kijk wie GEEN gele hoorns heeft = echte Lothraxion. Interrupt hem. Verkeerde interrupt = Core Exposure (stapelende raidschade).","Brilliant Dispersion: AoE op meerdere spelers — spreek af wie naar welke kant beweegt.","Fractured Images staan stil maar doen Mirrored Rend als je te dicht bij staat — houd afstand.","Offensive cooldowns syncen met Divine Guile — Lothraxion is vertraging kwetsbaar na de fase."],en:["Divine Guile (100 energy): Lothraxion vanishes among clones. Look for who has NO yellow horns = real Lothraxion. Interrupt him. Wrong interrupt = Core Exposure (stacking raid damage).","Brilliant Dispersion: AoE on multiple players — coordinate who moves which direction.","Fractured Images stand still but do Mirrored Rend if you stand too close — keep distance.","Sync offensive cooldowns with Divine Guile — Lothraxion is briefly vulnerable after the phase."],da:["Divine Guile (100 energi): Lothraxion forsvinder blandt kloner. Kig efter hvem der IKKE har gule horn = rigtige Lothraxion. Afbryd ham. Forkert afbrydelse = Core Exposure (stablende raid-skade).","Brilliant Dispersion: AoE på flere spillere — koordinér hvem der bevæger sig hvilken retning.","Fractured Images står stille men gør Mirrored Rend hvis du står for tæt — hold afstand.","Sync offensive cooldowns med Divine Guile — Lothraxion er kortvarigt sårbar efter fasen."]}}
  ],
  route:{
    summary:{nl:"Lineaire route — 3 bazen. Lust op pull 1, baas 2 en baas 3.",en:"Linear route — 3 bosses. Lust on pull 1, boss 2 and boss 3.",da:"Lineær rute — 3 bosser. Lust på pull 1, boss 2 og boss 3."},
    lust:[
      {moment:"Pull 1 — 🔥 BLOODLUST",uitleg:{nl:"Eerste grote pull",en:"First large pull",da:"Første store pull"}},
      {moment:"Boss 2 — Nysarra 🔥",uitleg:{nl:"Tweede lust — burst venster",en:"Second lust — burst window",da:"Anden lust — burst-vindue"}},
      {moment:"Boss 3 — Lothraxion 🔥",uitleg:{nl:"Eindbaas — derde lust",en:"Final boss — third lust",da:"Slutboss — tredje lust"}}
    ],
    pulls:[
      {label:{nl:"Pull 1 — 🔥 BLOODLUST",en:"Pull 1 — 🔥 BLOODLUST",da:"Pull 1 — 🔥 BLOODLUST"},desc:{nl:"Eerste trashgroep. Lust hier.",en:"First trash group. Lust here.",da:"Første trash-gruppe. Lust her."}},
      {label:{nl:"Baas 1 — Kasreth",en:"Boss 1 — Kasreth",da:"Boss 1 — Kasreth"},desc:{nl:"Adds doden. Energiebogen ontwijken.",en:"Kill adds. Dodge energy arcs.",da:"Dræb adds. Undgå energibuer."}},
      {label:{nl:"Baas 2 — Nysarra 🔥",en:"Boss 2 — Nysarra 🔥",da:"Boss 2 — Nysarra 🔥"},desc:{nl:"Bloodlust. Orbs vernietigen voor absorptie.",en:"Bloodlust. Destroy orbs before absorption.",da:"Bloodlust. Ødelæg orbs inden absorption."}},
      {label:{nl:"Baas 3 — Lothraxion 🔥",en:"Boss 3 — Lothraxion 🔥",da:"Boss 3 — Lothraxion 🔥"},desc:{nl:"Eindbaas. Stack in lichtfase, spreid in void-fase.",en:"Final boss. Stack in light phase, spread in void phase.",da:"Slutboss. Stå tæt i lysfase, spred jer i void-fase."}}
    ],
    mdt:true, kg_url:"https://keystone.guru/routes/expansion/midnight/season/1"
  }
},
// ──────────────────────────────────────────────
// 5. ALGETH'AR ACADEMY (M+ Returning)
// ──────────────────────────────────────────────
{
  id:"algethar", name:"Algeth'ar Academy", zone:"Thaldraszus", type:"mplus",
  bosses_short:["Overgrown Ancient","Crawth","Vexamus","Echo of Doragosa"],
  level:{nl:"Returning — Dragonflight",en:"Returning — Dragonflight",da:"Returning — Dragonflight"},
  time:"35 min",
  lore:{nl:"Een drakenmageracademie in Thaldraszus, nu in handen van corrumperende magie. Drie vleugels, elk met eigen uitdagingen.",en:"A draconic mage academy in Thaldraszus, now overrun by corrupting magic. Three wings, each with their own challenges.",da:"En drakonisk magiacademi i Thaldraszus, nu overtaget af korrumperende magi. Tre fløje, hver med egne udfordringer."},
  tips:[
    {title:{nl:"Ingang",en:"Entrance",da:"Indgang"},text:{nl:"Portaal in Valdrakken. Via The Timeways in Silvermoon in Season 1.",en:"Portal in Valdrakken. Via The Timeways in Silvermoon in Season 1.",da:"Portal i Valdrakken. Via The Timeways i Silvermoon i Sæson 1."}}
  ],
  bosses:[
    {name:"Overgrown Ancient",num:1,
     desc:{nl:"Magische boom die door energie corrumpeerde. Bewaakt de Botanica-ingang.",en:"Magical tree corrupted by energy. Guards the Botanica entrance.",da:"Magisk træ korrumperet af energi. Vogter Botanica-indgangen."},
     tank:{nl:["Draai de boss weg — Brutalize-cleave raakt de groep.","Gebruik defensief op Barkbreaker."],en:["Face the boss away — Brutalize cleave hits the group.","Use a defensive on Barkbreaker."],da:["Vend bossen væk — Brutalize cleave rammer gruppen.","Brug defensive på Barkbreaker."]},
     heal:{nl:["Lashing Roots raakt random spelers — spot heal snel.","Bark Armor fase: weinig schade, herstel mensen op."],en:["Lashing Roots hits random players — spot heal quickly.","Bark Armor phase: low damage, top people up."],da:["Lashing Roots rammer tilfældige spillere — spot heal hurtigt.","Bark Armor-fase: lav skade, fyld folk op."]},
     dps:{nl:["Interrupt Lashing Roots zo snel mogelijk.","Burst tijdens Bark Armor — de boss neemt meer schade."],en:["Interrupt Lashing Roots as fast as possible.","Burst during Bark Armor — the boss takes increased damage."],da:["Afbryd Lashing Roots så hurtigt som muligt.","Burst under Bark Armor — bossen tager øget skade."]}},
    {name:"Crawth",num:2,
     desc:{nl:"Territoriale adelaar op het Talon Toss-platform. Gooit chakrams die roterende windmuren maken. Ruinous Winds (75%/45%): score 3 goals met de ballen om de aanval te stoppen en een permanente buff te triggeren.",en:"Territorial eagle on the Talon Toss platform. Throws chakrams creating rotating wind walls. Ruinous Winds (75%/45%): score 3 goals with the balls to stop the attack and trigger a permanent buff.",da:"Territorial ørn på Talon Toss-platformen. Kaster chakrams der skaber roterende vindmure. Ruinous Winds (75%/45%): score 3 mål med boldene for at stoppe angrebet og aktivere en permanent buff."},
     tank:{nl:["Savage Peck = tank-hit + stapelende bleed (NIET beschouwd als bleed in Midnight — geen bleed cleanse).","Keer de boss weg voor Overpowering Gust — frontal op random speler, raakt de groep als ze voor je staan.","Blijf altijd in melee — bij afstand cast Crawth continu Ruinous Winds."],en:["Savage Peck = tank hit + stacking bleed (NOT a bleed in Midnight — no bleed cleanse works).","Face boss away for Overpowering Gust — frontal on random player, hits the group if they're in front of you.","Always stay in melee — if you leave range, Crawth continuously casts Ruinous Winds."],da:["Savage Peck = tank hit + stablende bleed (IKKE en bleed i Midnight — ingen bleed cleanse virker).","Vend boss væk for Overpowering Gust — frontal på tilfældig spiller, rammer gruppen hvis de er foran.","Forbliv altid i melee — forlader du, caster Crawth kontinuerligt Ruinous Winds."]},
     heal:{nl:["Deafening Screech = AoE op alle spelers + 6 sec silence bij direct contact. Loopt schade op met Sonic Vulnerability stacks.","Ruinous Winds: group krijgt grote schade tenzij 3 goals gescoord — cooldown paraat.","Fan of Blades: bleed op iedereen — steady AoE healing."],en:["Deafening Screech = AoE on all players + 6 sec silence on direct contact. Damage ramps up with Sonic Vulnerability stacks.","Ruinous Winds: group takes massive damage unless 3 goals scored — cooldown ready.","Fan of Blades: bleed on everyone — steady AoE healing."],da:["Deafening Screech = AoE på alle spillere + 6 sek silence ved direkte kontakt. Skade øges med Sonic Vulnerability stacks.","Ruinous Winds: gruppen tager massiv skade medmindre 3 mål scores — cooldown klar.","Fan of Blades: bleed på alle — stabil AoE-healing."]},
     dps:{nl:["Ruinous Winds (75%/45%): pak ballen op en gooi ze IN een doel. First goal = Goal of the Rushing Winds (aanbevolen) = tornadopatrons + debuff-verwijdering. Beiden scoren geeft Stack Goals-buff.","Deafening Screech: verspreid losjes zodat AoE-cirkels niet overlappen.","Overpowering Gust = frontal op random speler — stap opzij."],en:["Ruinous Winds (75%/45%): pick up balls and throw them INTO a goal. First goal = Goal of the Rushing Winds (recommended) = tornado patterns + debuff removal. Scoring both gives Stack Goals buff.","Deafening Screech: loosely spread so AoE circles don't overlap.","Overpowering Gust = frontal on random player — step to the side."],da:["Ruinous Winds (75%/45%): tag bolde op og kast dem IND I et mål. Første mål = Goal of the Rushing Winds (anbefalet) = tornadomønstre + debuff-fjernelse. Score begge giver Stack Goals-buff.","Deafening Screech: løs spredning så AoE-cirkler ikke overlapper.","Overpowering Gust = frontal på tilfældig spiller — træd til siden."]}},
    {name:"Vexamus",num:3,
     desc:{nl:"Arcane-construct van Professor Maxdormu's les. Gooit Arcane Orbs die spelers NIET mogen absorberen (spawnt Arcane Fissures). Bij 100 energie: Arcane Expulsion = grote AoE + knockback.",en:"Arcane construct from Professor Maxdormu's lesson. Throws Arcane Orbs that players must NOT absorb (spawns Arcane Fissures). At 100 energy: Arcane Expulsion = large AoE + knockback.",da:"Arcane-konstrukt fra Professor Maxdormus lektion. Kaster Arcane Orbs som spillere IKKE må absorbere (spawner Arcane Fissures). Ved 100 energi: Arcane Expulsion = stor AoE + knockback."},
     tank:{nl:["Arcane Expulsion (100 energie) = grote AoE + knockback — niet teruggeslingerd worden in Arcane Fissures.","Oversurge op tank: stapelende arcane schade — defensive inzetten."],en:["Arcane Expulsion (100 energy) = large AoE + knockback — don't get knocked into Arcane Fissures.","Oversurge on tank: stacking arcane damage — use a defensive."],da:["Arcane Expulsion (100 energi) = stor AoE + knockback — bliv ikke kastet ind i Arcane Fissures.","Oversurge på tank: stablende arcane skade — brug en defensive."]},
     heal:{nl:["Arcane Expulsion = grote raidschade — grote cooldown hier.","Mana Bombs: ontploffen op random spelers — spot heal direct na elke detonatie.","Arcane Fissures leggen constante schade neer — iedereen uit de plassen houden."],en:["Arcane Expulsion = large raid damage — major cooldown here.","Mana Bombs: explode on random players — spot heal immediately after each detonation.","Arcane Fissures deal constant damage — keep everyone out of the pools."],da:["Arcane Expulsion = stor raid-skade — stor cooldown her.","Mana Bombs: eksploderer på tilfældige spillere — spot heal straks efter hver detonation.","Arcane Fissures lægger konstant skade — hold alle ude af pølerne."]},
     dps:{nl:["Arcane Orbs: NIET absorberen — spawnt Arcane Fissures (grote plassen) die de arena snel vol leggen.","Mana Bombs: ontploffen op players, dodge de explosie.","Arcane Expulsion bij 100 energie = knockback — positioneer voor de cast zodat je niet in fissures belandt.","Aanvallen blijven doen ondanks mechanics — DPS-race voor Fissures de arena overnemen."],en:["Arcane Orbs: do NOT absorb — spawns Arcane Fissures (large pools) that quickly fill the arena.","Mana Bombs: explode on players, dodge the explosion.","Arcane Expulsion at 100 energy = knockback — position before the cast so you don't land in fissures.","Keep attacking despite mechanics — DPS race before Fissures take over the arena."],da:["Arcane Orbs: absorber IKKE — spawner Arcane Fissures (store pøler) der hurtigt fylder arenaen.","Mana Bombs: eksploderer på spillere, undgå eksplosionen.","Arcane Expulsion ved 100 energi = knockback — positionér inden castet så du ikke lander i fissures.","Bliv ved med at angribe trods mekanikker — DPS-race inden Fissures overtager arenaen."]}},
    {name:"Echo of Doragosa",num:4,
     desc:{nl:"Corrupte simulacrum van Headteacher Doragosa. Astral Breath bij 100 energie = dodelijke adem op random speler. Overwhelming Power debuff: 3 stacks = Arcane Rift onder de speler — vermijden.",en:"Corrupt simulacrum of Headteacher Doragosa. Astral Breath at 100 energy = lethal breath on random player. Overwhelming Power debuff: 3 stacks = Arcane Rift under the player — avoid.",da:"Korrumperet simulacrum af Headteacher Doragosa. Astral Breath ved 100 energi = dødelig ånde på tilfældig spiller. Overwhelming Power debuff: 3 stacks = Arcane Rift under spilleren — undgå."},
     tank:{nl:["Astral Blast = tank magic hit. Zorg voor stabiele HP voor Astral Breath.","Positioneer de boss in een hoek — ruimte voor de Arcane Rifts die DPS per ongeluk triggeren."],en:["Astral Blast = tank magic hit. Keep stable HP for Astral Breath.","Position the boss in a corner — space for Arcane Rifts that DPS accidentally trigger."],da:["Astral Blast = tank magisk hit. Hold stabil HP til Astral Breath.","Positionér bossen i et hjørne — plads til Arcane Rifts som DPS ved et uheld trigger."]},
     heal:{nl:["Astral Breath (100 energie) = dodelijk — iedereen vol houden, dit is het gevaarlijkste moment.","Energy Bomb: explodeert op target voor AoE — spot heal na elke bomb.","Arcane Rifts gooien Uncontrolled Energy orbs uit — spot heal wie geraakt wordt."],en:["Astral Breath (100 energy) = lethal — keep everyone topped, this is the most dangerous moment.","Energy Bomb: explodes on target for AoE — spot heal after each bomb.","Arcane Rifts shoot out Uncontrolled Energy orbs — spot heal whoever gets hit."],da:["Astral Breath (100 energi) = dødelig — hold alle toppede, dette er det farligste øjeblik.","Energy Bomb: eksploderer på target for AoE — spot heal efter hver bomb.","Arcane Rifts skyder Uncontrolled Energy orbs ud — spot heal hvem der rammes."]},
     dps:{nl:["Overwhelming Power stacks: max 2 veilig. Bij 3 stacks = Arcane Rift verschijnt — enorm AoE + meer stacks. Beheers je greed.","Astral Breath (100 energie) = dodge de adem door zijwaarts te bewegen.","Energy Bomb op jou: loop weg van de groep en gebruik een defensive.","Arcane Rifts niet aanraken — Uncontrolled Energy orbs zijn extra stacks."],en:["Overwhelming Power stacks: max 2 safe. At 3 stacks = Arcane Rift spawns — massive AoE + more stacks. Control your greed.","Astral Breath (100 energy) = dodge the breath by moving sideways.","Energy Bomb on you: move away from the group and use a defensive.","Don't touch Arcane Rifts — Uncontrolled Energy orbs mean extra stacks."],da:["Overwhelming Power stacks: maks 2 sikkert. Ved 3 stacks = Arcane Rift spawner — massiv AoE + flere stacks. Kontrollér din greed.","Astral Breath (100 energi) = undgå ånden ved at bevæge dig sideværts.","Energy Bomb på dig: gå væk fra gruppen og brug en defensive.","Rør ikke Arcane Rifts — Uncontrolled Energy orbs er ekstra stacks."]}}
  ],
  route:{
    summary:{nl:"Drie vleugels: Botanica (links), Kwadrant (midden), Hoofdleeraarskamer (rechts). Eindbaas Echo of Doragosa.",en:"Three wings: Botanica (left), Quad (center), Headteacher's Enclave (right). Final boss Echo of Doragosa.",da:"Tre fløje: Botanica (venstre), Quad (midten), Headteacher's Enclave (højre). Slutboss Echo of Doragosa."},
    pulls:[
      {type:"trash",label:"The Botanica",area:"The Botanica",desc:{nl:"Start links, pak de trash richting Overgrown Ancient.",en:"Start left, collect trash toward Overgrown Ancient.",da:"Start venstre, saml trash mod Overgrown Ancient."},lust:false},
      {type:"boss",label:"Overgrown Ancient",area:"The Botanica",desc:{nl:"Interrupt Lashing Roots.",en:"Interrupt Lashing Roots.",da:"Afbryd Lashing Roots."},lust:false},
      {type:"trash",label:"The Quad",area:"The Quad",desc:{nl:"Midden — pas op voor patrollerende packs.",en:"Middle section — watch patrolling packs.",da:"Midterste sektion — pas på patruljerende pakker."},lust:false},
      {type:"boss",label:"Crawth",area:"The Quad",desc:{nl:"Ruinous Winds: pak ballen, score goals.",en:"Ruinous Winds: pick up balls, score goals.",da:"Ruinous Winds: tag bolde, score mål."},lust:false},
      {type:"boss",label:"Vexamus",area:"The Headteacher's Enclave",desc:{nl:"Arcane Orbs NIET absorberen.",en:"Do NOT absorb Arcane Orbs.",da:"Absorber IKKE Arcane Orbs."},lust:false},
      {type:"trash",label:"Headteacher's Enclave",area:"The Headteacher's Enclave",desc:{nl:"Rechts — open de deur naar eindbaas.",en:"Right — open the door to the final boss.",da:"Højre — åbn døren til slutbossen."},lust:false},
      {type:"boss",label:"Echo of Doragosa",area:"The Headteacher's Enclave",desc:{nl:"Eindbaas. Interrupt Expunge. Lust hier.",en:"Final boss. Interrupt Expunge. Lust here.",da:"Slutboss. Afbryd Expunge. Lust her."},lust:true}
    ],
    lust:[{moment:"Echo of Doragosa",uitleg:{nl:"Direct bij de pull — eindbaas.",en:"Immediately on pull — final boss.",da:"Umiddelbart ved pull — slutboss."}}],
    mdt:true, kg_url:"https://keystone.guru/routes/expansion/midnight/season/1"
  }
},
// ──────────────────────────────────────────────
// 6. PIT OF SARON (M+ Returning)
// ──────────────────────────────────────────────
{
  id:"pitofsaron", name:"Pit of Saron", zone:"Icecrown", type:"mplus",
  bosses_short:["Forgemaster Garfrost","Ick and Krick","Scourgelord Tyrannus"],
  level:{nl:"Returning — Wrath",en:"Returning — Wrath",da:"Returning — Wrath"},
  time:"30 min",
  lore:{nl:"De diepste mijnschacht van Icecrown Citadel, gevuld met slavenwerkers en de ijzige adem van de dood.",en:"The deepest mine shaft of Icecrown Citadel, filled with slave workers and the icy breath of death.",da:"Den dybeste mineskakt i Icecrown Citadel, fyldt med slavearbejdere og dødens iskolde ånde."},
  tips:[
    {title:{nl:"Ingang",en:"Entrance",da:"Indgang"},text:{nl:"Via The Timeways in Silvermoon in Season 1.",en:"Via The Timeways in Silvermoon in Season 1.",da:"Via The Timeways i Silvermoon i Sæson 1."}}
  ],
  bosses:[
    {name:"Forgemaster Garfrost",num:1,
     desc:{nl:"Smid van Icecrown. Gooit Ore Chunks die de tank moet vernietigen met Orebreaker. Glacial Overload = channel naar een forge — scherm jezelf achter een Ore Chunk.",en:"Forgemaster of Icecrown. Throws Ore Chunks the tank must destroy with Orebreaker. Glacial Overload = channels into a forge — use an Ore Chunk for line of sight.",da:"Smedmester i Icecrown. Kaster Ore Chunks som tanken skal ødelægge med Orebreaker. Glacial Overload = channeler ind i en forge — brug en Ore Chunk som line of sight."},
     tank:{nl:["Throw Saronite: twee spelers worden geraakt. Leg de Ore Chunks goed neer — tank vernietigt er één met Orebreaker (anders 8 sec stun!).","Glacial Overload: Garfrost channel naar een forge — LoS verbreken achter de overgebleven Ore Chunk. Zie het witte beam voor welke forge.","Orebreaker = grote klap + stunt de tank 8 sec als er geen Ore Chunk is om te vernietigen — dus altijd een chunk beschikbaar houden.","Siphoning Chill = constante frost rot het hele gevecht."],en:["Throw Saronite: two players are hit. Place the Ore Chunks well — tank destroys one with Orebreaker (otherwise 8 sec stun!).","Glacial Overload: Garfrost channels into a forge — break LoS behind the remaining Ore Chunk. Watch the white beam to see which forge.","Orebreaker = large hit + stuns the tank for 8 sec if no Ore Chunk to destroy — always keep a chunk available.","Siphoning Chill = constant frost rot throughout the fight."],da:["Throw Saronite: to spillere rammes. Placér Ore Chunks godt — tank ødelægger én med Orebreaker (ellers 8 sek stun!).","Glacial Overload: Garfrost channeler ind i en forge — bryd LoS bag den resterende Ore Chunk. Se den hvide beam for hvilken forge.","Orebreaker = stort hit + stunner tanken i 8 sek hvis ingen Ore Chunk at ødelægge — hold altid en chunk tilgængelig.","Siphoning Chill = konstant frost rot igennem hele kampen."]},
     heal:{nl:["Glacial Overload: iedereen achter LoS — nul schade als goed gedaan.","Cyrostomp na Glacial Overload: AoE + Cryoshard debuff op 2 spelers (+50% frost schade, magic dispel).","Siphoning Chill = constante schade, steady healen."],en:["Glacial Overload: everyone behind LoS — zero damage if done correctly.","Cyrostomp after Glacial Overload: AoE + Cryoshard debuff on 2 players (+50% frost damage, magic dispel).","Siphoning Chill = constant damage, steady healing."],da:["Glacial Overload: alle bag LoS — nul skade hvis gjort korrekt.","Cyrostomp efter Glacial Overload: AoE + Cryoshard debuff på 2 spillere (+50% frost skade, magic dispel).","Siphoning Chill = konstant skade, stabil healing."]},
     dps:{nl:["Glacial Overload: Garfrost channel naar een forge — ga achter een Ore Chunk staan voor LoS. Buiten LoS = enorme frost schade.","Throw Saronite: leg de chunks op handige LoS-posities.","Cryoshard debuff (na Cyrostomp) = +50% frost schade — magic dispel zo snel mogelijk.","Volle DPS altijd — de boss legt anders de arena vol met Sludge."],en:["Glacial Overload: Garfrost channels into a forge — stand behind an Ore Chunk for LoS. Outside LoS = massive frost damage.","Throw Saronite: place chunks at useful LoS positions.","Cryoshard debuff (after Cyrostomp) = +50% frost damage — magic dispel ASAP.","Full DPS always — otherwise the boss covers the arena with Sludge."],da:["Glacial Overload: Garfrost channeler ind i en forge — stå bag en Ore Chunk for LoS. Uden for LoS = massiv frost skade.","Throw Saronite: placér chunks ved nyttige LoS-positioner.","Cryoshard debuff (efter Cyrostomp) = +50% frost skade — magic dispel ASAP.","Fuld DPS altid — ellers dækker bossen arenaen med Sludge."]}},
    {name:"Ick and Krick",num:2,
     desc:{nl:"Krick bestuurt Ick. Twee fases (wisselen via Shade Shift). Fase 1: Shades of Krick spawnen — dood ze voor ze exploderen. Death Bolt = priority interrupt. Fase 2: Get 'Em Ick! = fixate, Blight Smash = tankbuster + Blight op de grond. Bosses delen HP via Necrolink.",en:"Krick controls Ick. Two phases (alternating via Shade Shift). Phase 1: Shades of Krick spawn — kill before they explode. Death Bolt = priority interrupt. Phase 2: Get 'Em Ick! = fixate, Blight Smash = tank buster + Blight on the ground. Bosses share HP via Necrolink.",da:"Krick styrer Ick. To faser (skifter via Shade Shift). Fase 1: Shades of Krick spawner — dræb inden de eksploderer. Death Bolt = prioritets-interrupt. Fase 2: Get 'Em Ick! = fixate, Blight Smash = tankbuster + Blight på gulvet. Bosser deler HP via Necrolink."},
     tank:{nl:["Fase 1: sleep Ick naar de Shades of Krick zodat de groep ze kan cleaven.","Blight Smash (Fase 2) = grote tankbuster + Blight-plas — sleep baas weg uit de plas.","Get 'Em Ick! (Fase 2) = fixate op random speler — gefixeerde loopt weg, rest DPS door."],en:["Phase 1: drag Ick toward the Shades so the group can cleave them.","Blight Smash (Phase 2) = large tank buster + Blight puddle — drag boss away from puddle.","Get 'Em Ick! (Phase 2) = fixate on random player — fixated runs away, others keep DPSing."],da:["Fase 1: træk Ick mod Shades så gruppen kan cleave dem.","Blight Smash (Fase 2) = stor tankbuster + Blight-pøl — træk boss væk fra pølen.","Get 'Em Ick! (Fase 2) = fixate på tilfældig spiller — fixeret løber væk, andre DPS'er."]},
     heal:{nl:["Shade Bomb (Fase 1): als Shade niet gedood wordt explodeert hij — grote AoE. Cooldown paraat.","Plague Expulsion (Fase 2): AoE projectielen vanuit Krick — spot heal getroffen spelers.","Blight op de grond: sta er nooit in."],en:["Shade Bomb (Phase 1): if Shade not killed it explodes — large AoE. Have cooldown ready.","Plague Expulsion (Phase 2): AoE projectiles from Krick — spot heal affected players.","Blight on the ground: never stand in it."],da:["Shade Bomb (Fase 1): hvis Shade ikke dræbes eksploderer den — stor AoE. Cooldown klar.","Plague Expulsion (Fase 2): AoE projektiler fra Krick — spot heal berørte spillere.","Blight på gulvet: stå aldrig i det."]},
     dps:{nl:["Fase 1: Death Bolt van Krick = #1 interrupt prioriteit — bijna instant-kill als het doorkomt.","Fase 1: Shades of Krick (Shadowbind = curse, lagere prioriteit). Shades DODEN voor ze Shade Bomb gebruiken (1 min timer).","Fase 2: gefixeerde speler rent weg — niemand anders. Blight-plassen op de grond: nooit instaan.","Bosses delen HP — focus Krick of Ick, maakt niet uit."],en:["Phase 1: Death Bolt from Krick = #1 interrupt priority — near instant-kill if it goes through.","Phase 1: Shades of Krick (Shadowbind = curse, lower priority). Kill Shades before they use Shade Bomb (1 min timer).","Phase 2: fixated player runs away — nobody else. Blight puddles on the ground: never stand in them.","Bosses share HP — focus Krick or Ick, doesn't matter."],da:["Fase 1: Death Bolt fra Krick = #1 interrupt prioritet — nærmest instant-kill hvis det slipper igennem.","Fase 1: Shades of Krick (Shadowbind = curse, lavere prioritet). Dræb Shades inden de bruger Shade Bomb (1 min timer).","Fase 2: fixeret spiller løber væk — ingen andre. Blight-pøler på gulvet: stå aldrig i dem.","Bosser deler HP — focus Krick eller Ick, det er ligegyldigt."]}},
    {name:"Scourgelord Tyrannus",num:3,
     desc:{nl:"Eindbaas op zijn drake Rimefang. Op pull: Bone Infusion spawnt Infused Bone Piles. Rime Blast-debuff = gebruik het om Bone Piles te vernietigen. Army of the Dead bij lage HP = Bone Piles spawnen adds.",en:"Final boss on his drake Rimefang. On pull: Bone Infusion spawns Infused Bone Piles. Rime Blast debuff = use it to destroy Bone Piles. Army of the Dead at low HP = Bone Piles spawn adds.",da:"Slutboss på sin drage Rimefang. Ved pull: Bone Infusion spawner Infused Bone Piles. Rime Blast-debuff = brug den til at ødelægge Bone Piles. Army of the Dead ved lav HP = Bone Piles spawner adds."},
     tank:{nl:["Scourgelord's Brand = grote tankbuster. Grote defensive hier.","Rimefang (de drake) gebruikt Frost Spit + Ice Barrage — threat op Rimefang houden.","Keer de boss weg voor Rotting Strikes (melee-disease debuff op tank)."],en:["Scourgelord's Brand = large tank buster. Major defensive here.","Rimefang (the drake) uses Frost Spit + Ice Barrage — maintain threat on Rimefang.","Face boss away for Rotting Strikes (melee disease debuff on tank)."],da:["Scourgelord's Brand = stor tankbuster. Stor defensive her.","Rimefang (draken) bruger Frost Spit + Ice Barrage — oprethold trussel på Rimefang.","Vend boss væk for Rotting Strikes (melee disease debuff på tank)."]},
     heal:{nl:["Rime Blast debuff op meerdere spelers = frost schade + verslangzaming. Spelers moeten naar een Bone Pile lopen voor het afloopt.","Army of the Dead (lage HP): Bone Piles spawnen adds — grote raidcooldown.","Festering Pulse = AoE disease DoT — steady healen."],en:["Rime Blast debuff on multiple players = frost damage + slow. Players must walk to a Bone Pile before it expires.","Army of the Dead (low HP): Bone Piles spawn adds — major raid cooldown.","Festering Pulse = AoE disease DoT — steady healing."],da:["Rime Blast debuff på flere spillere = frost skade + langsom. Spillere skal gå til en Bone Pile inden den udløber.","Army of the Dead (lav HP): Bone Piles spawner adds — stor raid-cooldown.","Festering Pulse = AoE disease DoT — stabil healing."]},
     dps:{nl:["Rime Blast debuff: loop snel naar een Infused Bone Pile en vernietig hem — anders explodeert de pile later als add.","Army of the Dead (lage HP): alle beschikbare DPS cooldowns gebruiken op de spawning adds.","Bone Piles op de juiste plekken houden — Rime Blast-spelers hebben er toegang tot nodig."],en:["Rime Blast debuff: quickly walk to an Infused Bone Pile and destroy it — otherwise the pile later spawns as an add.","Army of the Dead (low HP): use all available DPS cooldowns on spawning adds.","Keep Bone Piles in accessible positions — Rime Blast players need to reach them."],da:["Rime Blast debuff: gå hurtigt til en Infused Bone Pile og ødelæg den — ellers spawner pilen som en add.","Army of the Dead (lav HP): brug alle tilgængelige DPS cooldowns på spawnende adds.","Hold Bone Piles på tilgængelige positioner — Rime Blast-spillere skal nå dem."]}}
  ],
  route:{
    summary:{nl:"Lineaire route omhoog door de mijn. Drie bazen. Lust op Scourgelord Tyrannus.",en:"Linear route upward through the mine. Three bosses. Lust on Scourgelord Tyrannus.",da:"Lineær rute opad gennem minen. Tre bosser. Lust på Scourgelord Tyrannus."},
    pulls:[
      {type:"trash",label:"Mijnschacht",area:"Pit of Saron",desc:{nl:"Begin trash richting Garfrost — pas op voor patrollerende packs.",en:"Opening trash toward Garfrost — watch patrolling packs.",da:"Åbnings-trash mod Garfrost — pas på patruljerende pakker."},lust:false},
      {type:"boss",label:"Forgemaster Garfrost",area:"Pit of Saron",desc:{nl:"Ore Chunks voor LoS bij Glacial Overload.",en:"Ore Chunks for LoS during Glacial Overload.",da:"Ore Chunks til LoS under Glacial Overload."},lust:false},
      {type:"trash",label:"Grotcorridor",area:"Pit of Saron",desc:{nl:"Pad naar Ick & Krick — grotere packs, niet overpullen.",en:"Path to Ick & Krick — bigger packs, don't overpull.",da:"Vej til Ick & Krick — større pakker, over-pull ikke."},lust:false},
      {type:"boss",label:"Ick and Krick",area:"Pit of Saron",desc:{nl:"Bewegelijk gevecht. Ren weg van Toxic Waste.",en:"Mobile fight. Run away from Toxic Waste.",da:"Mobil kamp. Løb væk fra Toxic Waste."},lust:false},
      {type:"trash",label:"Opgang",area:"Pit of Saron",desc:{nl:"Laatste stuk — pak trash voor % onderweg.",en:"Final stretch — collect trash for % on the way.",da:"Sidste stykke — saml trash for % undervejs."},lust:false},
      {type:"boss",label:"Scourgelord Tyrannus",area:"Pit of Saron",desc:{nl:"Eindbaas. Heel Overlord's Brand. Lust hier.",en:"Final boss. Heal Overlord's Brand. Lust here.",da:"Slutboss. Heal Overlord's Brand. Lust her."},lust:true}
    ],
    lust:[{moment:"Scourgelord Tyrannus",uitleg:{nl:"Meteen bij de pull.",en:"Immediately on pull.",da:"Umiddelbart ved pull."}}],
    mdt:true, kg_url:"https://keystone.guru/routes/expansion/midnight/season/1"
  }
},
// ──────────────────────────────────────────────
// 7. SEAT OF THE TRIUMVIRATE (M+ Returning)
// ──────────────────────────────────────────────
{
  id:"triumvirate", name:"Seat of the Triumvirate", zone:"Argus — Mac'Aree", type:"mplus",
  bosses_short:["Zuraal the Ascended","Saprish","Viceroy Nezhar","L'ura"],
  level:{nl:"Returning — Legion",en:"Returning — Legion",da:"Returning — Legion"},
  time:"35 min",
  lore:{nl:"Het heilige hart van Mac'Aree op Argus. Gevallen Eredar en Void-entiteiten bewaken de zetel van de Triumviraat.",en:"The sacred heart of Mac'Aree on Argus. Fallen Eredar and Void entities guard the seat of the Triumvirate.",da:"Det hellige hjerte af Mac'Aree på Argus. Faldne Eredar og Void-enheder vogter Triumviratets sæde."},
  tips:[
    {title:{nl:"Ingang",en:"Entrance",da:"Indgang"},text:{nl:"Via The Timeways in Silvermoon in Season 1.",en:"Via The Timeways in Silvermoon in Season 1.",da:"Via The Timeways i Silvermoon i Sæson 1."}}
  ],
  bosses:[
    {name:"Zuraal the Ascended",num:1,
     desc:{nl:"Gevallen Eredar. Decimate = baas springt naar random speler + plas. Oozing Slam = DoT + 2 Coalesced Void oozes spawnen die naar hem toe lopen. Crashing Void = oozes versnellen + pull-in. Dood oozes voor ze de baas bereiken.",en:"Fallen Eredar. Decimate = boss leaps to random player + puddle. Oozing Slam = DoT + 2 Coalesced Void oozes spawn that move toward him. Crashing Void = oozes accelerate + pull-in. Kill oozes before they reach the boss.",da:"Falden Eredar. Decimate = boss springer mod tilfældig spiller + pøl. Oozing Slam = DoT + 2 Coalesced Void oozes spawner der bevæger sig mod ham. Crashing Void = oozes accelererer + pull-in. Dræb oozes inden de når bossen."},
     tank:{nl:["Void Slash combo: grote defensieve nodig.","Decimate: de baas springt naar een random speler — positioneer aan de rand voor ruimte voor plassen.","Oozes lopen naar de boss — stop ze met slows/stuns/knockbacks of CC."],en:["Void Slash combo: major defensive needed.","Decimate: boss leaps to a random player — position at the edge for puddle space.","Oozes walk toward the boss — stop them with slows/stuns/knockbacks or CC."],da:["Void Slash combo: stor defensive nødvendig.","Decimate: bossen springer mod en tilfældig spiller — positionér i kanten for pøl-plads.","Oozes går mod bossen — stop dem med slows/stuns/knockbacks eller CC."]},
     heal:{nl:["Oozing Slam = AoE DoT op iedereen. Steady healen.","Crashing Void = pull-in + grote AoE klap — iedereen vol houden, oozes liefst dood of ge-CC.","Coalesced Void ooze: legt plas neer bij dood — dodge."],en:["Oozing Slam = AoE DoT on everyone. Steady healing.","Crashing Void = pull-in + large AoE hit — keep everyone topped, oozes ideally dead or CC'd.","Coalesced Void ooze: drops puddle on death — dodge."],da:["Oozing Slam = AoE DoT på alle. Stabil healing.","Crashing Void = pull-in + stort AoE hit — hold alle toppede, oozes helst døde eller CC'et.","Coalesced Void ooze: lægger pøl ved død — undgå."]},
     dps:{nl:["Coalesced Void oozes (Oozing Slam): SNEL doden voor ze de baas bereiken — stuns, slows, knockbacks gebruiken.","Crashing Void = pull-in van alle spelers — staat oozes al te dicht bij de boss = grote schade.","Decimate: leg plassen aan de rand zodat de arena bruikbaar blijft.","Null Palm = frontal op random speler — outrange-baar (tank niet in de vuurlijn)."],en:["Coalesced Void oozes (Oozing Slam): kill FAST before they reach the boss — use stuns, slows, knockbacks.","Crashing Void = pull-in of all players — oozes too close to boss = massive damage.","Decimate: drop puddles at the edge to keep the arena usable.","Null Palm = frontal on random player — can be outranged (tank not in the line)."],da:["Coalesced Void oozes (Oozing Slam): dræb HURTIGT inden de når bossen — brug stuns, slows, knockbacks.","Crashing Void = pull-in af alle spillere — oozes for tæt på bossen = massiv skade.","Decimate: læg pøler i kanten for at holde arenaen brugbar.","Null Palm = frontal på tilfældig spiller — kan outranges (tank ikke i linjen)."]}},
    {name:"Saprish",num:2,
     desc:{nl:"Saprish + Shadewing + Darkfang delen HP. Void Bombs: NIET aanraken — Phase Dash circle cleart ze. Overload als bombs overleven: soak. Shadewing's Dread Screech = top interrupt.",en:"Saprish + Shadewing + Darkfang share HP. Void Bombs: do NOT touch — Phase Dash circle clears them. Overload if bombs survive: soak. Shadewing's Dread Screech = top interrupt.",da:"Saprish + Shadewing + Darkfang deler HP. Void Bombs: RØR IKKE — Phase Dash-cirkel clearer dem. Overload hvis bombs overlever: soak. Shadewing's Dread Screech = top interrupt."},
     tank:{nl:["Houd alle drie bosses (Saprish, Shadewing, Darkfang) gestacked voor cleave.","Darkfang's Shadow Pounce = bleed op random speler — niet per se jij. Geen speciale tank-mechanic.","Sta bij Phase Dash zo dat de cirkel zoveel mogelijk Void Bombs cleart."],en:["Keep all three bosses (Saprish, Shadewing, Darkfang) stacked for cleave.","Darkfang's Shadow Pounce = bleed on random player — not necessarily the tank. No specific tank mechanic.","During Phase Dash, stand so the circle clears as many Void Bombs as possible."],da:["Hold alle tre bosser (Saprish, Shadewing, Darkfang) stacket for cleave.","Darkfang's Shadow Pounce = bleed på tilfældig spiller — ikke nødvendigvis tanken. Ingen specifik tank-mekanik.","Under Phase Dash, stå så cirklen clearer så mange Void Bombs som muligt."]},
     heal:{nl:["Overload (als Void Bombs overleven): grote spike AoE + DoT — raidcooldown als niet alles gecleart is.","Darkfang Shadow Pounce bleed: spot heal de getargete speler.","Dread Screech van Shadewing: als het niet geïnterrupt wordt = AoE disorient (4 sec). Iedereen topvol houden."],en:["Overload (if Void Bombs survive): large spike AoE + DoT — raid cooldown if not all cleared.","Darkfang Shadow Pounce bleed: spot heal the targeted player.","Dread Screech from Shadewing: if not interrupted = AoE disorient (4 sec). Keep everyone topped."],da:["Overload (hvis Void Bombs overlever): stor spike AoE + DoT — raidcooldown hvis ikke alt er claret.","Darkfang Shadow Pounce bleed: spot heal den målrettede spiller.","Dread Screech fra Shadewing: hvis ikke afbrudt = AoE disorient (4 sek). Hold alle toppede."]},
     dps:{nl:["Void Bombs: NIET aanraken — loopt een korte timer. Saprish's Phase Dash maakt een cirkel die bombs cleart — positioneer je zodat de cirkel zo veel mogelijk Bombs raakt.","Dread Screech (Shadewing): 2 interrupts rouleren (ranged voor even casts).","Overload: als er bombs overblijven — iemand met immunity soakt, of tank met defensive.","Alle drie (Saprish, Shadewing, Darkfang) delen HP — cleave alles."],en:["Void Bombs: do NOT touch — short timer. Saprish's Phase Dash creates a circle that clears bombs — position so the circle hits as many Bombs as possible.","Dread Screech (Shadewing): rotate 2 interrupts (ranged for even casts).","Overload: if bombs survive — someone with immunity soaks, or tank with defensive.","All three (Saprish, Shadewing, Darkfang) share HP — cleave everything."],da:["Void Bombs: RØR IKKE — kort timer. Saprish's Phase Dash laver en cirkel der clearer bombs — positionér så cirklen rammer så mange Bombs som muligt.","Dread Screech (Shadewing): roter 2 interrupts (ranged for ligetal casts).","Overload: hvis bombs overlever — nogen med immunity soaker, eller tank med defensive.","Alle tre (Saprish, Shadewing, Darkfang) deler HP — cleave alt."]}},
    {name:"Viceroy Nezhar",num:3,
     desc:{nl:"Gevallen Eredar. Collapsing Void-ring krimpt vanaf het begin van het gevecht. Howling Dark en Entropic Force gooien spelers terug — nooit in de ring vliegen. Umbral Tentacles = Void Lashing (stapelende healing debuff).",en:"Fallen Eredar. Collapsing Void ring shrinks from the start of the fight. Howling Dark and Entropic Force push players back — never get knocked into the ring. Umbral Tentacles = Void Lashing (stacking healing debuff).",da:"Falden Eredar. Collapsing Void-ring krymper fra kampens start. Howling Dark og Entropic Force kaster spillere tilbage — kom aldrig ind i ringen. Umbral Tentacles = Void Lashing (stablende healing debuff)."},
     tank:{nl:["Rending Void: grote tankbuster — defensive inzetten.","Houd de boss naar het centrum — de Collapsing Void krimpt, te dicht bij de rand = iedereen in de void.","Umbral Tentacles aan de rand: positioneer bij de boss zodat DPS kan cleaven."],en:["Rending Void: large tank buster — use a defensive.","Keep the boss toward the center — Collapsing Void shrinks, too close to edge = everyone in the void.","Umbral Tentacles at the edge: position near the boss so DPS can cleave them."],da:["Rending Void: stor tankbuster — brug en defensive.","Hold bossen mod centrum — Collapsing Void krymper, for tæt på kanten = alle i void.","Umbral Tentacles i kanten: positionér nær bossen så DPS kan cleave dem."]},
     heal:{nl:["Void Lashing (Umbral Tentacles): stapelende healing debuff op getroffen spelers — tentakels zo snel mogelijk doden, extra healen.","Howling Dark/Entropic Force = pushback — als iemand in de Collapsing Void komt: prioriteit healing.","Gates of the Abyss = umbral waves — schade als geraakt."],en:["Void Lashing (Umbral Tentacles): stacking healing debuff on hit players — kill tentacles fast, extra healing.","Howling Dark/Entropic Force = pushback — if someone enters Collapsing Void: priority healing.","Gates of the Abyss = umbral waves — damage if hit."],da:["Void Lashing (Umbral Tentacles): stablende healing debuff på ramte spillere — dræb tentakler hurtigt, ekstra healing.","Howling Dark/Entropic Force = pushback — hvis nogen går ind i Collapsing Void: prioritets-healing.","Gates of the Abyss = umbral bølger — skade hvis ramt."]},
     dps:{nl:["Collapsing Void = ring die de arena verkleint — nooit in de ring komen.","Entropic Force: interrupt om te voorkomen dat je teruggeslingerd wordt. Gebruik movement speed.","Umbral Tentacles: snel doden — Void Lashing stapelt healing debuff op de raid.","Gates of the Abyss: umbral waves ontwijken."],en:["Collapsing Void = ring that shrinks the arena — never enter the ring.","Entropic Force: interrupt to avoid being pushed back. Use movement speed.","Umbral Tentacles: kill fast — Void Lashing stacks healing debuff on the raid.","Gates of the Abyss: dodge umbral waves."],da:["Collapsing Void = ring der krymper arenaen — gå aldrig ind i ringen.","Entropic Force: afbryd for at undgå at blive kastet tilbage. Brug movement speed.","Umbral Tentacles: dræb hurtigt — Void Lashing stabler healing debuff på raiden.","Gates of the Abyss: undgå umbral bølger."]}},
    {name:"L'ura",num:4,
     desc:{nl:"Corrupte Naaru eindbaas. Fase 1: Rift Wardens spawnen via portals (Naaru's Lament channel) — kill wardens snel, Alleria stunt L'ura + 3x schade window. Fase 2: Notes of Despair sturen constant schade — Discordant Beam (3 spelers) silencet ze.",en:"Corrupt Naaru final boss. Phase 1: Rift Wardens spawn via portals (Naaru's Lament channel) — kill wardens fast, Alleria stuns L'ura + 3x damage window. Phase 2: Notes of Despair deal constant damage — Discordant Beam (3 players) silences them.",da:"Korrumperet Naaru-slutboss. Fase 1: Rift Wardens spawner via portaler (Naaru's Lament channel) — dræb wardens hurtigt, Alleria stunner L'ura + 3x skade-vindue. Fase 2: Notes of Despair sender konstant skade — Discordant Beam (3 spillere) silencer dem."},
     tank:{nl:["Abyssal Lance = grote tankbuster — grote defensive inzetten.","Fase 1: Rift Wardens zijn niet de tank's prioriteit — DPS/healer pakken ze.","Fase 2: positie stabiel houden terwijl Discordant Beam-spelers Notes treffen."],en:["Abyssal Lance = large tank buster — use major defensive.","Phase 1: Rift Wardens are not the tank's priority — DPS/healer handles them.","Phase 2: hold stable position while Discordant Beam players hit Notes."],da:["Abyssal Lance = stor tankbuster — brug stor defensive.","Fase 1: Rift Wardens er ikke tankens prioritet — DPS/healer håndterer dem.","Fase 2: hold stabil position mens Discordant Beam-spillere rammer Notes."]},
     heal:{nl:["Fase 1: Naaru's Lament = constante raidschade terwijl portals open zijn.","Fase 2: Notes of Despair = constante AoE schade die stapelt via Anguish debuff. Discordant Beams silencen Notes zo snel mogelijk.","Grim Chorus = Notes shufflen + grote AoE — raidcooldown."],en:["Phase 1: Naaru's Lament = constant raid damage while portals are open.","Phase 2: Notes of Despair = constant AoE damage stacking via Anguish debuff. Discordant Beams silence Notes as fast as possible.","Grim Chorus = Notes shuffle + large AoE — raid cooldown."],da:["Fase 1: Naaru's Lament = konstant raid-skade mens portaler er åbne.","Fase 2: Notes of Despair = konstant AoE skade der stabler via Anguish debuff. Discordant Beams silencer Notes så hurtigt som muligt.","Grim Chorus = Notes shuffler + stor AoE — raidcooldown."]},
     dps:{nl:["Fase 1: Rift Wardens (2 golven) SNEL doden — elke kill = Alleria stunt L'ura voor 12 sec + 3x schade window. Lust in dit window.","Fase 2: Discordant Beam op jou = richt je op een Note of Despair om het te silencen. Coördineer wie welke Note treft.","Grim Chorus: grote AoE als Notes niet tijdig gesilenced zijn — stack naar kant van de ruimte."],en:["Phase 1: Rift Wardens (2 waves) kill FAST — each kill = Alleria stuns L'ura for 12 sec + 3x damage window. Lust in this window.","Phase 2: Discordant Beam on you = aim at a Note of Despair to silence it. Coordinate who hits which Note.","Grim Chorus: large AoE if Notes not silenced in time — stack toward the side of the room."],da:["Fase 1: Rift Wardens (2 bølger) dræb HURTIGT — hvert kill = Alleria stunner L'ura i 12 sek + 3x skade-vindue. Lust i dette vindue.","Fase 2: Discordant Beam på dig = sigt mod en Note of Despair for at silence den. Koordinér hvem der rammer hvilken Note.","Grim Chorus: stor AoE hvis Notes ikke er silencet i tide — stack mod siden af rummet."]}}
  ],
  route:{
    summary:{nl:"Lineaire route — Triad's Conservatory → Shadowguard Incursion → Seat. Vier bazen. Lust op L'ura.",en:"Linear route — Triad's Conservatory → Shadowguard Incursion → Seat. Four bosses. Lust on L'ura.",da:"Lineær rute — Triad's Conservatory → Shadowguard Incursion → Seat. Fire bosser. Lust på L'ura."},
    pulls:[
      {type:"trash",label:"Triad's Conservatory",area:"Triad's Conservatory",desc:{nl:"Eerste sectie. Pull richting Zuraal.",en:"First section. Pull toward Zuraal.",da:"Første sektion. Pull mod Zuraal."},lust:false},
      {type:"boss",label:"Zuraal the Ascended",area:"Triad's Conservatory",desc:{nl:"Sta niet in Darkfathom-pilaren.",en:"Don't stand in Darkfathom pillars.",da:"Stå ikke i Darkfathom-søjlerne."},lust:false},
      {type:"trash",label:"Shadowguard Incursion",area:"Shadowguard Incursion",desc:{nl:"Grote packs — voorzichtig pakken.",en:"Large packs — careful pulling.",da:"Store pakker — forsigtig pulling."},lust:false},
      {type:"boss",label:"Saprish",area:"Shadowguard Incursion",desc:{nl:"Dood Shadewing eerst.",en:"Kill Shadewing first.",da:"Dræb Shadewing først."},lust:false},
      {type:"boss",label:"Viceroy Nezhar",area:"Shadowguard Incursion",desc:{nl:"Entropic Force interrupt. Tentakels snel doden.",en:"Interrupt Entropic Force. Kill tentacles fast.",da:"Afbryd Entropic Force. Dræb tentakler hurtigt."},lust:false},
      {type:"boss",label:"L'ura",area:"Seat of the Triumvirate",desc:{nl:"Eindbaas. Rift Wardens snel doden. Lust in 3x schade window.",en:"Final boss. Kill Rift Wardens fast. Lust in 3x damage window.",da:"Slutboss. Dræb Rift Wardens hurtigt. Lust i 3x skade-vindue."},lust:true}
    ],
    lust:[{moment:"L'ura — Rift Warden kill",uitleg:{nl:"Eerste Rift Warden kill — Alleria stunt L'ura + 3x schade.",en:"First Rift Warden kill — Alleria stuns L'ura + 3x damage.",da:"Første Rift Warden kill — Alleria stunner L'ura + 3x skade."}}],
    mdt:true, kg_url:"https://keystone.guru/routes/expansion/midnight/season/1"
  }
},
// ──────────────────────────────────────────────
// 8. SKYREACH (M+ Returning)
// ──────────────────────────────────────────────
{
  id:"skyreach", name:"Skyreach", zone:"Spires of Arak", type:"mplus",
  bosses_short:["Ranjit","Araknath","Rukhran","High Sage Viryx"],
  level:{nl:"Returning — WoD",en:"Returning — WoD",da:"Returning — WoD"},
  time:"30 min",
  lore:{nl:"Het hoogste punt van de Arakkoa-vesting. Windmagie en gevaarlijke Arakkoa-krijgers bewaken de top.",en:"The highest point of the Arakkoa fortress. Wind magic and dangerous Arakkoa warriors guard the summit.",da:"Det højeste punkt i Arakkoa-fæstningen. Vindmagi og farlige Arakkoa-krigere vogter toppen."},
  tips:[
    {title:{nl:"Ingang",en:"Entrance",da:"Indgang"},text:{nl:"Via The Timeways in Silvermoon in Season 1.",en:"Via The Timeways in Silvermoon in Season 1.",da:"Via The Timeways i Silvermoon i Sæson 1."}}
  ],
  bosses:[
    {name:"Ranjit",num:1,
     desc:{nl:"Arakkoa windmeester. Wind Chakram = projectiel dat heen en terug gaat — niet in de lijn staan. Four Winds = 4 roterende windmuren — langzaam meedraaien. Gale Surge = knockback + wind orb neerleggen (stapel orbs samen aan één kant).",en:"Arakkoa wind master. Wind Chakram = projectile that goes out and back — don't stand in the line. Four Winds = 4 rotating wind walls — slowly rotate with them. Gale Surge = knockback + drop a wind orb (stack orbs together on one side).",da:"Arakkoa-vindmester. Wind Chakram = projektil der går ud og tilbage — stå ikke i linjen. Four Winds = 4 roterende vindmure — roter langsomt med dem. Gale Surge = knockback + læg en vindorb (stack orbs sammen på én side)."},
     tank:{nl:["Wind Chakram gaat heen en terug — stap zijwaarts als Ranjit het gooit.","Gale Surge knockback: staan met je rug naar een veilig deel van het platform.","Four Winds: langzaam meedraaien met de muren — niet abrupt bewegen."],en:["Wind Chakram goes out and back — step sideways when Ranjit throws it.","Gale Surge knockback: stand with your back toward a safe part of the platform.","Four Winds: slowly rotate with the walls — don't move abruptly."],da:["Wind Chakram går ud og tilbage — træd til siden når Ranjit kaster den.","Gale Surge knockback: stå med ryggen mod en sikker del af platformen.","Four Winds: roter langsomt med murene — bevæg dig ikke brat."]},
     heal:{nl:["Fan of Blades: bleed op iedereen — steady AoE healing, bleed cleanses helpen.","Gale Surge: knockback schade op de getroffen speler — spot heal.","Four Winds: als iemand een muur raakt = grote schade. Prioriteit op die speler."],en:["Fan of Blades: bleed on everyone — steady AoE healing, bleed cleanses help.","Gale Surge: knockback damage on the hit player — spot heal.","Four Winds: if someone hits a wall = large damage. Prioritize that player."],da:["Fan of Blades: bleed på alle — stabil AoE-healing, bleed cleanses hjælper.","Gale Surge: knockback skade på den ramte spiller — spot heal.","Four Winds: hvis nogen rammer en mur = stor skade. Prioritér den spiller."]},
     dps:{nl:["Wind Chakram: projectiel gaat heen EN terug op dezelfde lijn — twee keer ontwijken.","Gale Surge: gooi wind orbs samen op één kant van het platform (overlappend) — arena vrij houden.","Four Winds: 4 muren draaien om de boss — langzaam meedraaien, nooit scherp draaien.","Fan of Blades: bleed op iedereen — gewoon DPS door."],en:["Wind Chakram: projectile goes out AND back on the same line — dodge twice.","Gale Surge: drop wind orbs together on one side of the platform (overlapping) — keep the arena clear.","Four Winds: 4 walls rotate around the boss — slowly rotate with them, never turn sharply.","Fan of Blades: bleed on everyone — just keep DPSing."],da:["Wind Chakram: projektil går ud OG tilbage på samme linje — undgå to gange.","Gale Surge: læg vindorbs sammen på én side af platformen (overlappende) — hold arenaen fri.","Four Winds: 4 mure roterer om bossen — roter langsomt med dem, vend aldrig brat.","Fan of Blades: bleed på alle — bare bliv ved med at DPS'e."]}},
    {name:"Araknath",num:2,
     desc:{nl:"Construct bewaker van de binnenste ring. Relatief simpele baas.",en:"Construct guardian of the inner ring. Relatively simple boss.",da:"Konstruktionsvagt for den indre ring. Relativt simpel boss."},
     tank:{nl:["Keer de boss weg — Arcing Slash is een frontal cleave.","Bekkeer Energy Slash met een defensief."],en:["Face boss away — Arcing Slash is a frontal cleave.","Counter Energy Slash with a defensive."],da:["Vend boss væk — Arcing Slash er en frontal cleave.","Modvirk Energy Slash med en defensive."]},
     heal:{nl:["Meest rustieve baas — herstel mana hier.","Solar Burst: korte AoE burst, klein cooldownje."],en:["Most relaxed boss — recover mana here.","Solar Burst: short AoE burst, minor cooldown."],da:["Mest afslappede boss — gendan mana her.","Solar Burst: kort AoE burst, lille cooldown."]},
     dps:{nl:["Sta nooit voor de boss — Arcing Slash is dodelijk.","Snel af — veel trash nog te pakken."],en:["Never stand in front of the boss — Arcing Slash is lethal.","Kill fast — lots of trash still to collect."],da:["Stå aldrig foran bossen — Arcing Slash er dødelig.","Dræb hurtigt — meget trash tilbage at samle."]}},
    {name:"Rukhran",num:3,
     desc:{nl:"Grote Arakkoa zonnegod-vogel. Scorching Ray = beam op 3 spelers + 5s DoT. Sunbreak = Sunwing-add spawnt (doden!). Pierce Armor = tank debuff. Altijd in melee blijven — anders constant Screech.",en:"Large Arakkoa sun deity bird. Scorching Ray = beam on 3 players + 5s DoT. Sunbreak = Sunwing add spawns (kill it!). Pierce Armor = tank debuff. Always stay in melee — otherwise constant Screech.",da:"Stor Arakkoa solgudsfugl. Scorching Ray = beam på 3 spillere + 5s DoT. Sunbreak = Sunwing-add spawner (dræb den!). Pierce Armor = tank debuff. Forbliv altid i melee — ellers konstant Screech."},
     tank:{nl:["Altijd in melee blijven — Rukhran gebruikt Screech als je weggaat (constant schade op de raid).","Pierce Armor = stapelende armor debuff. Defensive als het hoog oploopt.","Sunwing (Sunbreak): kleine add naast de boss — kleef ze voor cleave."],en:["Always stay in melee — Rukhran uses Screech if you leave (constant raid damage).","Pierce Armor = stacking armor debuff. Defensive when it gets high.","Sunwing (Sunbreak): small add near the boss — stack them for cleave."],da:["Forbliv altid i melee — Rukhran bruger Screech hvis du forlader (konstant raid-skade).","Pierce Armor = stablende armor debuff. Defensive når den stiger.","Sunwing (Sunbreak): lille add nær bossen — stack dem for cleave."]},
     heal:{nl:["Scorching Ray (3 spelers): beam + 5s DoT — spot heal alle 3 direct.","Sunwing-add: doet schade terwijl hij leeft — snel doden.","Burning Pursuit: als Sunwing een speler fixeert — spot heal die speler."],en:["Scorching Ray (3 players): beam + 5s DoT — spot heal all 3 immediately.","Sunwing add: deals damage while alive — kill it fast.","Burning Pursuit: if Sunwing fixates a player — spot heal that player."],da:["Scorching Ray (3 spillere): beam + 5s DoT — spot heal alle 3 straks.","Sunwing-add: gør skade mens den lever — dræb den hurtigt.","Burning Pursuit: hvis Sunwing fixerer en spiller — spot heal den spiller."]},
     dps:{nl:["Sunbreak = Sunwing spawnt: DIRECT focus op de add — Burning Pursuit op een speler is gevaarlijk.","Scorching Ray: ontwijken lukt niet — defensive of cool als getarget.","Stack close bij de boss voor cleave Sunwing + Rukhran.","Pierce Armor op tank: healer let op."],en:["Sunbreak = Sunwing spawns: IMMEDIATELY focus the add — Burning Pursuit on a player is dangerous.","Scorching Ray: can't dodge — use defensive or cooldown if targeted.","Stack close to the boss for cleave Sunwing + Rukhran.","Pierce Armor on tank: healer watch out."],da:["Sunbreak = Sunwing spawner: STRAKS focus på adden — Burning Pursuit på en spiller er farlig.","Scorching Ray: kan ikke undgås — brug defensive eller cooldown hvis målrettet.","Stack tæt ved bossen for cleave Sunwing + Rukhran.","Pierce Armor på tank: healer pas på."]}},
    {name:"High Sage Viryx",num:4,
     desc:{nl:"Eindbaas van Skyreach. Cast Down: Solar Zealot verschijnt boven een random speler en trekt hem naar de rand — DPS de Zealot dood voor hij de speler laat vallen. Solar Blast = interrupt op tank. Lens Flare = beam volgt speler, leg vuur aan de ZIJKANT.",en:"Final boss of Skyreach. Cast Down: Solar Zealot appears above a random player and drags them toward the edge — DPS the Zealot dead before it drops the player. Solar Blast = interrupt on tank. Lens Flare = beam follows player, drop fire at the SIDES.",da:"Slutboss af Skyreach. Cast Down: Solar Zealot dukker op over en tilfældig spiller og trækker dem mod kanten — DPS Zealot til den er død inden den dropper spilleren. Solar Blast = interrupt på tank. Lens Flare = beam følger spiller, læg ild i SIDERNE."},
     tank:{nl:["Solar Blast = grote tank magic hit — interrupt elke cast.","Cast Down: ga direct switchen naar de Solar Zealot — jij ook, zelfs als hij op een DPS verschijnt.","Lens Flare op jou: kite het naar de zijkanten van het platform (niet het midden vuil leggen)."],en:["Solar Blast = large tank magic hit — interrupt every cast.","Cast Down: immediately switch to the Solar Zealot — you too, even if it appears on a DPS.","Lens Flare on you: kite it to the sides of the platform (don't dirty the middle)."],da:["Solar Blast = stort tank magisk hit — afbryd hvert cast.","Cast Down: skift straks til Solar Zealot — dig også, selv hvis den dukker op på en DPS.","Lens Flare på dig: kite det til siderne af platformen (gør ikke midten snavset)."]},
     heal:{nl:["Cast Down: Solar Zealot trekt speler naar rand. Heel die speler constant — de Zealot doet schade terwijl hij de speler sleurt.","Scorching Ray = beam + DoT op meerdere spelers — spot heal constant.","Shield Constructs: geven Viryx 99% DR — dood ze snel voor herstel."],en:["Cast Down: Solar Zealot drags player toward edge. Heal that player constantly — Zealot deals damage while dragging.","Scorching Ray = beam + DoT on multiple players — constant spot healing.","Shield Constructs: give Viryx 99% DR — kill them fast for recovery."],da:["Cast Down: Solar Zealot trækker spiller mod kanten. Heal den spiller konstant — Zealot gør skade mens den trækker.","Scorching Ray = beam + DoT på flere spillere — konstant spot healing.","Shield Constructs: giver Viryx 99% DR — dræb dem hurtigt for genopretning."]},
     dps:{nl:["Cast Down = #1 priority: Solar Zealot verschijnt boven speler — IEDEREEN focus snel. Zealot dood voor hij de speler van de rand laat vallen.","Shield Constructs: spawnen bij de ingang en geven Viryx 99% DR. Kill ze onmiddellijk.","Solar Blast op tank: interrupt rouleren.","Lens Flare: kite naar de zijkant, niet het midden."],en:["Cast Down = #1 priority: Solar Zealot appears above a player — EVERYONE focus it immediately. Zealot dead before it drops the player off the edge.","Shield Constructs: spawn near the entrance and give Viryx 99% DR. Kill immediately.","Solar Blast on tank: rotate interrupts.","Lens Flare: kite to the side, not the middle."],da:["Cast Down = #1 prioritet: Solar Zealot dukker op over en spiller — ALLE focus den straks. Zealot død inden den dropper spilleren fra kanten.","Shield Constructs: spawner nær indgangen og giver Viryx 99% DR. Dræb straks.","Solar Blast på tank: roter interrupts.","Lens Flare: kite til siden, ikke midten."]}}
  ],
  route:{
    summary:{nl:"Twee vleugels — Lower Quarter en Grand Spire. Vier bazen. Lust op High Sage Viryx.",en:"Two wings — Lower Quarter and Grand Spire. Four bosses. Lust on High Sage Viryx.",da:"To fløje — Lower Quarter og Grand Spire. Fire bosser. Lust på High Sage Viryx."},
    pulls:[
      {type:"trash",label:"Lower Quarter",area:"Lower Quarter",desc:{nl:"Begin links — pak trash richting Ranjit.",en:"Start left — collect trash toward Ranjit.",da:"Start venstre — saml trash mod Ranjit."},lust:false},
      {type:"boss",label:"Ranjit",area:"Lower Quarter",desc:{nl:"Loop door de opening in de Windwall.",en:"Walk through the gap in the Windwall.",da:"Gå gennem åbningen i Windwall."},lust:false},
      {type:"trash",label:"Grand Spire binnenring",area:"Grand Spire",desc:{nl:"Packs op de binnenring richting Araknath.",en:"Packs on the inner ring toward Araknath.",da:"Pakker på den indre ring mod Araknath."},lust:false},
      {type:"boss",label:"Araknath",area:"Grand Spire",desc:{nl:"Tank-n-spank. Keer de boss weg.",en:"Tank-n-spank. Face boss away.",da:"Tank-n-spank. Vend boss væk."},lust:false},
      {type:"trash",label:"Grand Spire buitenring",area:"Grand Spire",desc:{nl:"Buitenste packs richting Rukhran.",en:"Outer packs toward Rukhran.",da:"Ydre pakker mod Rukhran."},lust:false},
      {type:"boss",label:"Rukhran",area:"Grand Spire",desc:{nl:"Sunwing adds direct doden.",en:"Kill Sunwing adds immediately.",da:"Dræb Sunwing adds straks."},lust:false},
      {type:"boss",label:"High Sage Viryx",area:"Grand Spire — Summit",desc:{nl:"Eindbaas. Nooit aan de rand. Lust hier.",en:"Final boss. Never at the edge. Lust here.",da:"Slutboss. Aldrig ved kanten. Lust her."},lust:true}
    ],
    lust:[{moment:"High Sage Viryx",uitleg:{nl:"Direct bij de pull voor maximale burst.",en:"Immediately on pull for maximum burst.",da:"Umiddelbart ved pull for maksimal burst."}}],
    mdt:true, kg_url:"https://keystone.guru/routes/expansion/midnight/season/1"
  }
},
// ──────────────────────────────────────────────
// 5. MURDER ROW (Normal)
// ──────────────────────────────────────────────
{
  id:"murderrow", name:"Murder Row", zone:"Silvermoon City", type:"normal",
  bosses_short:["Kystia Manaheart","Zaen Bladesorrow","Xathuux","Lithiel Cinderfury"],
  level:{nl:"Ontgrendel lvl 83",en:"Unlock level 83",da:"Lås op ved niveau 83"},
  lore:{
    nl:"De donkere straten van Murder Row verbergen een illegale fel-smokkeloperatie die misbruik maakt van de angst van Silvermoon's burgers. Een malafide warlord beweert haar volk te beschermen — de winst is een prettige bonus.",
    en:"The darkened streets of Murder Row conceal an illegal fel-smuggling operation preying on the fears of Silvermoon's citizens. A rogue warlord claims to protect her people — the profit is merely a pleasant bonus.",
    da:"De mørke gader i Murder Row skjuler en ulovlig fel-smugleroperation, der udnytter Silvermoons borgeres frygt. En forræderisk warlord hævder at beskytte sit folk — fortjenesten er blot en behagelig bonus."
  },
  tips:[
    {title:{nl:"Ingangcoördinaten",en:"Entrance coordinates",da:"Indgangskoordinater"},
     text:{nl:"/way 57.0, 61.0 — zuidelijk Silvermoon City.",en:"/way 57.0, 61.0 — southern Silvermoon City.",da:"/way 57.0, 61.0 — det sydlige Silvermoon City."}},
    {title:{nl:"Interrupt-heavy dungeon",en:"Interrupt-heavy dungeon",da:"Interrupt-tung dungeon"},
     text:{nl:"Wijs interruptrotaties toe op casters vóór elke pull.",en:"Assign interrupt rotations on casters before every pull.",da:"Tildel interrupt-rotationer på castere før hvert pull."}}
  ],
  bosses:[
    {name:"Kystia Manaheart",num:1,
     desc:{nl:"Magister verslaafd aan fel. Haar kat Nibbles is aanvankelijk neutraal — Illicit Infusion maakt Nibbles vijandig. Interrupt Mirror Images. Nibbles's Fel Spray vermijden.",en:"Magister addicted to fel. Her cat Nibbles is initially neutral — Illicit Infusion makes Nibbles hostile. Interrupt Mirror Images. Avoid Nibbles's Fel Spray.",da:"Magister afhængig af fel. Hendes kat Nibbles er indledningsvis neutral — Illicit Infusion gør Nibbles fjendtlig. Afbryd Mirror Images. Undgå Nibbles' Fel Spray."},
     tank:{nl:["Illicit Infusion: Nibbles wordt vijandig — pak Nibbles direct op.","Defensive bij grote fel-aanvallen."],en:["Illicit Infusion: Nibbles turns hostile — pick up Nibbles immediately.","Use a defensive on major fel attacks."],da:["Illicit Infusion: Nibbles bliver fjendtlig — tag straks Nibbles op.","Brug en defensive ved større fel-angreb."]},
     heal:{nl:["Fel-vuur DoTs op spelers — cleanse of over-heal.","Prioriteer de speler met de meeste gestapelde stacks."],en:["Felfire DoTs on players — cleanse or out-heal them.","Prioritise the player with the most stacked DoTs."],da:["Fel-brand DoTs på spillere — dispel eller out-heal dem.","Prioritér spilleren med flest staplede DoT-stacks."]},
     dps:{nl:["Mirror Images interrupt = hoogste prioriteit — de baas wordt anders niet aangevallen.","Nibbles (na Illicit Infusion): Fel Spray is een frontal kegel — stap opzij.","Nibbles snel doden of CC-en."],en:["Mirror Images interrupt = highest priority — otherwise the boss can't be attacked.","Nibbles (after Illicit Infusion): Fel Spray is a frontal cone — step to the side.","Kill or CC Nibbles quickly."],da:["Mirror Images interrupt = højeste prioritet — ellers kan bossen ikke angribes.","Nibbles (efter Illicit Infusion): Fel Spray er en frontal kegle — træd til siden.","Dræb eller CC Nibbles hurtigt."]}},
    {name:"Zaen Bladesorrow",num:2,
     desc:{nl:"Smokkelopzichter. Murder in a Row (100 energie): richt op ALLE spelers — pak cover achter Forbidden Freight containers of je gaat dood. Envenom = tank poison. Same-Day Delivery + Fire Bomb = dodge.",en:"Smuggling overseer. Murder in a Row (100 energy): aims at ALL players — get cover behind Forbidden Freight containers or you die. Envenom = tank poison. Same-Day Delivery + Fire Bomb = dodge.",da:"Smugleropsynsmand. Murder in a Row (100 energi): sigter på ALLE spillere — tag dækning bag Forbidden Freight-containere eller du dør. Envenom = tank poison. Same-Day Delivery + Fire Bomb = undgå."},
     tank:{nl:["Envenom = tank poison + healing absorb. Dispel of defensive.","Murder in a Row: cover achter een Forbidden Freight container — als tank sta je al vóór de mechanic op een goede plek."],en:["Envenom = tank poison + healing absorb. Dispel or defensive.","Murder in a Row: cover behind a Forbidden Freight container — as tank already be near a container before the mechanic."],da:["Envenom = tank poison + healing-absorb. Dispel eller defensive.","Murder in a Row: dækning bag en Forbidden Freight-container — som tank allerede være nær en container inden mekanikken."]},
     heal:{nl:["Opgeroepen adds = groepsschade — AoE healing voorbereiden.","Burst schade kan snel komen — groep bijhouden."],en:["Summoned adds = group damage — prepare AoE healing.","Burst damage can spike quickly — keep the group topped up."],da:["Indkaldte adds = gruppeskade — forbered AoE-healing.","Burst-skade kan stige hurtigt — hold gruppen toppet."]},
     dps:{nl:["Murder in a Row (100 energie): COVER ACHTER CONTAINERS — instant-kill als je geraakt wordt.","Same-Day Delivery: containers worden gegooid, detoneren na korte delay — loop weg.","Fire Bomb: zes seconden timer, dan AoE — loop weg van de marker."],en:["Murder in a Row (100 energy): TAKE COVER BEHIND CONTAINERS — instant-kill if hit.","Same-Day Delivery: containers thrown, detonate after short delay — move away.","Fire Bomb: six second timer then AoE — move away from the marker."],da:["Murder in a Row (100 energi): TAG DÆKNING BAG CONTAINERE — instant-kill hvis ramt.","Same-Day Delivery: containere kastes, detonerer efter kort forsinkelse — bevæg dig væk.","Fire Bomb: seks sekunders timer, derefter AoE — bevæg dig væk fra markøren."]}}
  ,
    {name:"Xathuux the Annihilator",num:3,
     desc:{nl:"Lithiels krachtigste demon. Demonic Rage (rage vol): grote AoE + Burning Steps-plassen permanent op grond. Legion Strike = healing-reduction op tank+melee. Axe Toss = vermijdbaar.",en:"Lithiel's most powerful demon. Demonic Rage (rage full): large AoE + permanent Burning Steps puddles on ground. Legion Strike = healing reduction on tank+melee. Axe Toss = avoidable.",da:"Lithiels stærkeste dæmon. Demonic Rage (rage fuld): stor AoE + permanente Burning Steps-pøler på gulvet. Legion Strike = healing-reduktion på tank+melee. Axe Toss = kan undgås."},
     tank:{nl:["Legion Strike = grote hit + healing-reductie op tank én melee. Defensive hier.","Demonic Rage: Burning Steps-plassen leggen zich neer. Sleep de baas constant.","Axe Toss: axen op je positie — opzij stappen."],en:["Legion Strike = large hit + healing reduction on tank and melee. Defensive here.","Demonic Rage: Burning Steps puddles drop. Keep moving the boss.","Axe Toss: axes thrown at your position — step to the side."],da:["Legion Strike = stort hit + healing-reduktion på tank og melee. Defensive her.","Demonic Rage: Burning Steps-pøler falder. Bliv ved med at flytte bossen.","Axe Toss: akser kastes på din position — træd til siden."]},
     heal:{nl:["Legion Strike = healing-reductie op getroffen spelers — spot heal extra.","Demonic Rage: grote AoE-klap — raidcooldown hier.","Burning Steps-plassen op de grond: iedereen uit de brand houden."],en:["Legion Strike = healing reduction on hit players — extra spot healing.","Demonic Rage: large AoE hit — raid cooldown here.","Burning Steps puddles on the ground: keep everyone out of the fire."],da:["Legion Strike = healing-reduktion på ramte spillere — ekstra spot healing.","Demonic Rage: stort AoE-hit — raidcooldown her.","Burning Steps-pøler på gulvet: hold alle ude af ilden."]},
     dps:{nl:["Demonic Rage = AoE klap + permanente Burning Steps-plassen. BURN zo snel mogelijk — meer Rage-fases = minder arena over.","Legion Strike treft melee ook: healing-reductie. Defensives gebruiken.","Axe Toss: loop weg van de impact-zone."],en:["Demonic Rage = AoE hit + permanent Burning Steps puddles. BURN as fast as possible — more Rage phases = less arena remaining.","Legion Strike hits melee too: healing reduction. Use defensives.","Axe Toss: move away from the impact zone."],da:["Demonic Rage = AoE hit + permanente Burning Steps-pøler. BURN så hurtigt som muligt — flere Rage-faser = mindre arena tilbage.","Legion Strike rammer også melee: healing-reduktion. Brug defensives.","Axe Toss: bevæg dig væk fra impactzonen."]}},
    {name:"Lithiel Cinderfury",num:4,
     desc:{nl:"Eindbaas. Fingers of Gul'dan: Wild Imps spawnen bij alle spelers. Daarna Demonic Gateway + Malefic Wave — LOOP DOOR HET GATEWAY voor immuniteit. Chaos Bolt = interrupt. Demons door de Wave = 100% haste.",en:"Final boss. Fingers of Gul'dan: Wild Imps spawn near all players. Then Demonic Gateway + Malefic Wave — WALK THROUGH THE GATEWAY for immunity. Chaos Bolt = interrupt. Demons hit by Wave = 100% haste.",da:"Slutboss. Fingers of Gul'dan: Wild Imps spawner nær alle spillere. Derefter Demonic Gateway + Malefic Wave — GÅ IGENNEM GATEWAYET for immunitet. Chaos Bolt = interrupt. Dæmoner ramt af Wave = 100% haste."},
     tank:{nl:["Furious Vilefiend: grote demon, pakken en positioneren voor DPS-cleave.","Demons die door Malefic Wave worden geraakt = 100% haste — dood ze direct.","Defensive als Chaos Bolt niet geïnterrupt wordt."],en:["Furious Vilefiend: large demon, pick up and position for DPS cleave.","Demons hit by Malefic Wave = 100% haste — kill them immediately.","Defensive if Chaos Bolt is not interrupted."],da:["Furious Vilefiend: stor dæmon, tag op og positionér til DPS-cleave.","Dæmoner ramt af Malefic Wave = 100% haste — dræb dem straks.","Defensive hvis Chaos Bolt ikke afbrydes."]},
     heal:{nl:["Fingers of Gul'dan: Wild Imps bij alle spelers = korte AoE-piek. Snel bijhouden.","Malefic Wave: LOOP DOOR HET GATEWAY — anders 100% extra Fire-schade debuff voor 1 min.","Demons die door Wave worden geraakt = 100% haste. Prioriteer ze direct."],en:["Fingers of Gul'dan: Wild Imps near all players = short AoE spike. Top everyone quickly.","Malefic Wave: WALK THROUGH THE GATEWAY — otherwise 100% extra Fire damage debuff for 1 min.","Demons hit by Wave = 100% haste. Prioritize them immediately."],da:["Fingers of Gul'dan: Wild Imps nær alle spillere = kort AoE-spike. Top alle hurtigt.","Malefic Wave: GÅ IGENNEM GATEWAYET — ellers 100% ekstra brandskade-debuff i 1 min.","Dæmoner ramt af Wave = 100% haste. Prioritér dem straks."]},
     dps:{nl:["Fingers of Gul'dan: Wild Imps spawnen bij ALLE spelers — direct AoE-cleaven.","Malefic Wave: loop door het Gateway = immuniteit. Niet doen = 100% extra Fire schade voor 1 min.","Chaos Bolt = priority interrupt.","Laat demons NIET door de Wave lopen — 100% haste is een probleem."],en:["Fingers of Gul'dan: Wild Imps spawn near ALL players — AoE cleave immediately.","Malefic Wave: walk through Gateway = immunity. Don't = 100% extra Fire damage for 1 min.","Chaos Bolt = priority interrupt.","Don't let demons walk through the Wave — 100% haste is a problem."],da:["Fingers of Gul'dan: Wild Imps spawner nær ALLE spillere — straks AoE-cleave.","Malefic Wave: gå igennem Gateway = immunitet. Gør det ikke = 100% ekstra brandskade i 1 min.","Chaos Bolt = prioritets-interrupt.","Lad ikke dæmoner gå igennem Wave — 100% haste er et problem."]}}],
  route:{
    summary:{nl:"Lineaire dungeon. Geen M+-versie. Lust op eindbaas Lithiel.",en:"Linear dungeon. No M+ version. Lust on final boss Lithiel.",da:"Lineær dungeon. Ingen M+-version. Lust på slutboss Lithiel."},
    lust:[{moment:"Boss 4 — Lithiel Cinderfury 🔥",uitleg:{nl:"Eindbaas — Bloodlust hier",en:"Final boss — Bloodlust here",da:"Slutboss — Bloodlust her"}}],
    pulls:[
      {label:{nl:"Pull 1–2",en:"Pull 1–2",da:"Pull 1–2"},desc:{nl:"Straatpacks. Interruptrotatie op casters.",en:"Street packs. Interrupt rotation on casters.",da:"Gadepacks. Interrupt-rotation på castere."}},
      {label:{nl:"Baas 1 — Kystia",en:"Boss 1 — Kystia",da:"Boss 1 — Kystia"},desc:{nl:"Kanalen onderbreken. Niet in plassen staan.",en:"Interrupt channels. Avoid puddles.",da:"Afbryd kanaler. Undgå pytter."}},
      {label:{nl:"Baas 2 — Zaen",en:"Boss 2 — Zaen",da:"Boss 2 — Zaen"},desc:{nl:"Adds direct doden.",en:"Kill adds immediately.",da:"Dræb adds straks."}},
      {label:{nl:"Baas 3 — Xathuux",en:"Boss 3 — Xathuux",da:"Boss 3 — Xathuux"},desc:{nl:"Tank defensives inzetten. Kleine demonen snel doden.",en:"Use tank defensives. Kill small demons fast.",da:"Brug tank defensives. Dræb små dæmoner hurtigt."}},
      {label:{nl:"Baas 4 — Lithiel 🔥",en:"Boss 4 — Lithiel 🔥",da:"Boss 4 — Lithiel 🔥"},desc:{nl:"Eindbaas. Fel-empowerment altijd onderbreken. Lust hier.",en:"Final boss. Always interrupt fel empowerment. Lust here.",da:"Slutboss. Afbryd altid fel-empowerment. Lust her."}}
    ],
    mdt:false, kg_url:null
  }
},
// ──────────────────────────────────────────────
// 6. THE BLINDING VALE (Normal)
// ──────────────────────────────────────────────
{
  id:"blindingvale", name:"The Blinding Vale", zone:"Harandar", type:"normal",
  bosses_short:["Meittik","Ikuzz the Light Hunter","Lightwarden Ruia","Ziekket"],
  level:{nl:"Ontgrendel lvl 88",en:"Unlock level 88",da:"Lås op ved niveau 88"},
  lore:{
    nl:"De Blinding Vale is een invasieve Lightbloom-tuin die avonturiers verblindt met verzengende straling. Achter de felle glans cultiveert de Lightbloom nieuwe wezens met één fanatieke opdracht: ongestopte groei.",
    en:"The Blinding Vale is an invasive Lightbloom garden that blinds adventurers with searing radiation. Behind the brilliant glow, the Lightbloom cultivates new creatures with one fanatical purpose: unstoppable growth.",
    da:"The Blinding Vale er en invasiv Lightbloom-have, der blænder eventyrere med brændende stråling. Bag den strålende glød dyrker Lightbloom nye væsener med ét fanatisk formål: ustoppelig vækst."
  },
  tips:[
    {title:{nl:"Zichtbaarheid",en:"Visibility",da:"Synlighed"},
     text:{nl:"Heldere witte visuals — pas schermhelderheid aan. Vaardigheden zijn moeilijk te zien.",en:"Very bright white visuals — adjust screen brightness. Abilities can be hard to see.",da:"Meget lyse hvide visuals — justér skærmlysstyrken. Evner kan være svære at se."}},
    {title:{nl:"Ingangcoördinaten",en:"Entrance coordinates",da:"Indgangskoordinater"},
     text:{nl:"/way 26.4, 78.1 — Harandar, volg de Lightbloom Roots-quest.",en:"/way 26.4, 78.1 — Harandar, follow the Lightbloom Roots quest.",da:"/way 26.4, 78.1 — Harandar, følg Lightbloom Roots-questen."}}
  ],
  bosses:[
    {name:"Meittik",num:1,
     desc:{nl:"Drie Rutaani met afzonderlijke HP-balken — elk apart beheren. Focus één tegelijk.",en:"Three Rutaani with separate HP bars — manage each individually. Focus one at a time.",da:"Tre Rutaani med separate HP-barer — håndtér dem enkeltvis. Focus én ad gangen."},
     tank:{nl:["Drie vijanden gegroepeerd maar afgewend van de groep.","Defensive bij meerdere Trinity-leden die tegelijk aanvallen."],en:["Keep the three enemies grouped but faced away from the group.","Use a defensive when multiple Trinity members attack simultaneously."],da:["Hold de tre fjender samlet, men vendt væk fra gruppen.","Brug en defensive, når flere Trinity-medlemmer angriber på samme tid."]},
     heal:{nl:["Drie lichtpulsen tegelijk = constante groepsdruk — heal doorlopend.","Licht-debuffs stapelen — cleanse of agressief over-healen."],en:["Three simultaneous light pulses = constant group pressure — heal continuously.","Light debuffs stack — cleanse or aggressively out-heal them."],da:["Tre samtidige lyspulser = konstant gruppepres — heal kontinuerligt.","Lys-debuffs stabler — dispel eller out-heal dem aggressivt."]},
     dps:{nl:["Focus één Rutaani tegelijk — doden vermindert AoE-druk direct.","Vermijd witte/gouden lichtplassen op de grond.","Iets spreiden om meerdere gelijktijdige hits te vermijden."],en:["Focus one Rutaani at a time — killing one immediately reduces AoE pressure.","Avoid white/golden light puddles on the ground.","Spread slightly to avoid multiple simultaneous hits."],da:["Focus én Rutaani ad gangen — at dræbe én reducerer straks AoE-presset.","Undgå hvide/gyldne lyspytter på gulvet.","Spred jer lidt for at undgå flere samtidige hits."]}},
    {name:"Ikuzz the Light Hunter",num:2,
     desc:{nl:"Vroeger roofdier van Harandar volledig bezeten door de Lightbloom.",en:"A former apex predator of Harandar fully possessed by the Lightbloom.",da:"Et tidligere toprovdyr fra Harandar, der er fuldstændigt besat af Lightbloom."},
     tank:{nl:["Ikuzz springt op zijn doelwit — defensive bij elke grote sprong.","Afgewend houden — beet/klauw-aanvallen cleaven."],en:["Ikuzz leaps onto his target — use a defensive on every major leap.","Keep him faced away — bite/claw attacks cleave."],da:["Ikuzz springer på sit mål — brug en defensive ved hvert større spring.","Hold ham vendt væk — bid/klo-angreb cleaver."]},
     heal:{nl:["Burst fysieke + lichtschade — piekerig, niet constant.","Feeding Frenzy-modus: grote cooldown inzetten."],en:["Burst physical + light damage — spikey, not constant.","Feeding Frenzy mode: deploy a major cooldown."],da:["Burst fysisk + lyseskade — ujævn, ikke konstant.","Feeding Frenzy-mode: brug en stor cooldown."]},
     dps:{nl:["Gemarkeerde speler kite — anderen blijven op de baas.","Onderbreek lichtenergie-absorbeervaardigheden.","Snel weg na markering om groepssplash te vermijden."],en:["Marked player kites — others stay on the boss.","Interrupt light energy absorption abilities.","Move away quickly after being marked to avoid group splash."],da:["Markeret spiller kiter — andre bliver på bossen.","Afbryd lysenergioptagelsesevner.","Bevæg dig hurtigt væk efter markering for at undgå gruppe-splash."]}},
    {name:"Lightwarden Ruia",num:3,
     desc:{nl:"Bewaker van het heiligdom. Haar wards reflecteren schade terug op melee-aanvallers.",en:"Guardian of the inner sanctum. Her protective wards reflect damage back at melee attackers.",da:"Vogter af det indre helligdom. Hendes beskyttende wards reflekterer skade tilbage på melee-angribere."},
     tank:{nl:["Stralingseffecten stapelen — defensives afwisselen.","Wards onderbreken of vernietigen voor ze actief worden."],en:["Radiation effects stack — alternate defensives.","Interrupt or destroy wards before they become active."],da:["Strålingseffekter stabler — skift defensives.","Afbryd eller ødelæg wards, inden de aktiveres."]},
     heal:{nl:["Stralingsontlading = hele groep geraakt — AoE-heal gereed.","Spelers in wards ontvangen gereflecteerde schade — waarschuw ze."],en:["Radiation discharge hits the entire group — have an AoE heal ready.","Players standing in wards receive reflected damage — warn them."],da:["Strålingsafladning rammer hele gruppen — hav en AoE-heal klar.","Spillere i wards modtager reflekteret skade — advar dem."]},
     dps:{nl:["Vernietig wards snel — ze reduceren je schade significant.","Empowerment-casts onderbreken.","Melee: controleer altijd of er een ward onder de baas staat."],en:["Destroy wards quickly — they significantly reduce your damage output.","Interrupt empowerment casts.","Melee: always check for a ward under the boss."],da:["Ødelæg wards hurtigt — de reducerer din skade markant.","Afbryd empowerment-casts.","Melee: tjek altid om der er en ward under bossen."]}},
    {name:"Ziekket",num:4,
     desc:{nl:"Eindbaas — apex Lightbloom-roofdier dat licht en void combineert in een gecorrumpeerde hybride vorm.",en:"Final boss — an apex Lightbloom predator combining light and void in a corrupted hybrid form.",da:"Slutboss — et apex Lightbloom-rovdyr, der kombinerer lys og void i en korrumperet hybridform."},
     tank:{nl:["Wisselt licht-burst en void-shroud-fasen — juiste defensive per fase kiezen.","Rand van de kamer voor bewegingsruimte."],en:["Alternates between light burst and void shroud phases — choose the right defensive per phase.","Stay at the edge of the room for movement space."],da:["Skifter mellem lys-burst og void-shroud-faser — vælg den rette defensive per fase.","Hold dig i kanten af rummet for bevægelsesrum."]},
     heal:{nl:["Lichtfase: burst AoE — grote cooldown hier.","Void-fase: aanhoudende schade op tank — zware spot healing.","Beheer beide fasen — verspil je cooldowns niet bij lichtfase."],en:["Light phase: burst AoE — major cooldown here.","Void phase: sustained tank damage — heavy spot healing required.","Manage both phases — do not waste your cooldowns in the light phase."],da:["Lysfase: burst AoE — stor cooldown her.","Void-fase: vedvarende tankskade — kraftig spot healing påkrævet.","Styr begge faser — spild ikke dine cooldowns i lysfasen."]},
     dps:{nl:["Lichtfase: stack voor AoE-cleave.","Void-fase: spreid voor void-splash.","Beste DPS-moment: overgang tussen fasen."],en:["Light phase: stack for AoE cleave.","Void phase: spread to avoid void splash.","Best DPS moment: transitions between phases."],da:["Lysfase: stå tæt til AoE-cleave.","Void-fase: spred jer for void-splash.","Bedste DPS-øjeblik: faseskift."]}}
  ],
  route:{
    summary:{nl:"Lineaire route door Harandar. Geen M+-versie. Lust op eindbaas Ziekket bij de void-fase.",en:"Linear route through Harandar. No M+ version. Lust on final boss Ziekket at the void phase.",da:"Lineær rute gennem Harandar. Ingen M+-version. Lust på slutboss Ziekket ved void-fasen."},
    lust:[{moment:"Boss 4 — Ziekket 🔥",uitleg:{nl:"Gebruik Bloodlust bij de overgang naar de void-fase",en:"Use Bloodlust at the transition into the void phase",da:"Brug Bloodlust ved overgangen til void-fasen"}}],
    pulls:[
      {label:{nl:"Baas 1 — Meittik",en:"Boss 1 — Meittik",da:"Boss 1 — Meittik"},desc:{nl:"Één Rutaani tegelijk. Lichtplassen vermijden.",en:"One Rutaani at a time. Avoid light puddles.",da:"Én Rutaani ad gangen. Undgå lyspytter."}},
      {label:{nl:"Baas 2 — Ikuzz",en:"Boss 2 — Ikuzz",da:"Boss 2 — Ikuzz"},desc:{nl:"Kite als gemarkeerd. Absorbeer-interrupts uitvoeren.",en:"Kite when marked. Execute absorption interrupts.",da:"Kite når markeret. Udfør absorptionsinterrupts."}},
      {label:{nl:"Baas 3 — Lightwarden Ruia",en:"Boss 3 — Lightwarden Ruia",da:"Boss 3 — Lightwarden Ruia"},desc:{nl:"Wards vernietigen voor reflectieschade.",en:"Destroy wards before reflected damage.",da:"Ødelæg wards inden reflekteret skade."}},
      {label:{nl:"Baas 4 — Ziekket 🔥",en:"Boss 4 — Ziekket 🔥",da:"Boss 4 — Ziekket 🔥"},desc:{nl:"Lust in void-fase. Stack licht, spreid void.",en:"Lust in void phase. Stack light, spread void.",da:"Lust i void-fase. Stå tæt i lys, spred i void."}}
    ],
    mdt:false, kg_url:null
  }
},
// ──────────────────────────────────────────────
// 7. DEN OF NALORAKK (Normal)
// ──────────────────────────────────────────────
{
  id:"nalorakk", name:"Den of Nalorakk", zone:"Zul'Aman", type:"normal",
  bosses_short:["The Hoardmonger","Sentinel of Winter","Nalorakk"],
  level:{nl:"Ontgrendel lvl 88",en:"Unlock level 88",da:"Lås op ved niveau 88"},
  lore:{
    nl:"Verwond door Zul'jin en Malacrass trok Beer-Loa Nalorakk zich terug in slaap. Doorsta zijn drie beproevingen om zijn zegen te verdienen voor de strijd tegen het Void.",
    en:"Wounded by Zul'jin and Malacrass, the Bear-Loa Nalorakk retreated into slumber. Endure his three trials to earn his blessing for the battle against the Void.",
    da:"Såret af Zul'jin og Malacrass trak Beer-Loa Nalorakk sig tilbage i søvn. Gennemstå hans tre prøvelser for at fortjene hans velsignelse i kampen mod Void."
  },
  tips:[
    {title:{nl:"Ingangcoördinaten",en:"Entrance coordinates",da:"Indgangskoordinater"},
     text:{nl:"/way 29.7, 84.9 — Zul'Aman.",en:"/way 29.7, 84.9 — Zul'Aman.",da:"/way 29.7, 84.9 — Zul'Aman."}},
    {title:{nl:"Loa-zegen",en:"Loa Blessing",da:"Loa-velsignelse"},
     text:{nl:"Voltooiing verdient Nalorakk's zegen — helpt het Loa Blessings-systeem te ontgrendelen.",en:"Completion earns Nalorakk's blessing — helps unlock the Loa Blessings system.",da:"Gennemførelse giver Nalorakks velsignelse — hjælper med at låse Loa Blessings-systemet op."}}
  ],
  bosses:[
    {name:"The Hoardmonger",num:1,
     desc:{nl:"Eerste beproeving. Bij 90%, 60% en 30% HP versterkt hij een vaardigheid via Resourceful Measures.",en:"First trial. At 90%, 60% and 30% HP he empowers an ability via Resourceful Measures.",da:"Første prøvelse. Ved 90%, 60% og 30% HP styrker han en evne via Resourceful Measures."},
     tank:{nl:["Earthshatter Slam = grote frontale kegel — de baas ALTIJD van de groep afgewend houden.","Defensive bij versterkte Resourceful Measures-momenten."],en:["Earthshatter Slam = large frontal cone — ALWAYS keep the boss faced away from the group.","Use a defensive during empowered Resourceful Measures moments."],da:["Earthshatter Slam = stor frontal kegle — hold ALTID bossen vendt væk fra gruppen.","Brug en defensive ved styrkede Resourceful Measures-øjeblikke."]},
     heal:{nl:["Savage Roar = grote AoE — healing cooldown direct inzetten.","Toxic Spores van vernietigde paddenstoelen — cleanse indien mogelijk."],en:["Savage Roar = major AoE — deploy a healing cooldown immediately.","Toxic Spores from destroyed mushrooms — cleanse where possible."],da:["Savage Roar = stor AoE — brug straks en healing cooldown.","Toxic Spores fra ødelagte svampe — dispel hvis muligt."]},
     dps:{nl:["Vernietig Rotten Mushrooms direct — ze pulseren Putrid Presence AoE totdat ze dood zijn.","Bij 90%/60%/30%: verwacht een versterkte vaardigheid.","Achter de baas staan om Earthshatter volledig te vermijden."],en:["Destroy Rotten Mushrooms immediately — they pulse Putrid Presence AoE until dead.","At 90%/60%/30%: anticipate an empowered ability.","Stand behind the boss to fully avoid Earthshatter."],da:["Ødelæg Rotten Mushrooms straks — de pulser Putrid Presence AoE, indtil de er døde.","Ved 90%/60%/30%: forvent en styrket evne.","Stå bag bossen for at undgå Earthshatter fuldstændigt."]}},
    {name:"Sentinel of Winter",num:2,
     desc:{nl:"Tweede beproeving. Bij 100 energie ontkent hij Eternal Winter: massieve schade + terugstoot.",en:"Second trial. At 100 energy he unleashes Eternal Winter: massive damage + knockback.",da:"Anden prøvelse. Ved 100 energi udløser han Eternal Winter: massiv skade + knockback."},
     tank:{nl:["Fractured Shivercores laten Snowdrifts achter bij dood — dodingen op veilige plekken uitvoeren.","Eternal Winter terugstoot: immuniteit gebruiken als beschikbaar."],en:["Fractured Shivercores leave Snowdrifts on death — position kills in safe locations.","Eternal Winter knockback: use an immunity if available."],da:["Fractured Shivercores efterlader Snowdrifts ved død — udfør drab på sikre steder.","Eternal Winter-knockback: brug immunitet hvis tilgængeligt."]},
     heal:{nl:["Eternal Winter = zware groepsschade + terugstoot — dit is het grote cooldown-moment.","Glacial Torment = aflopende DoT — cleanse of over-healen."],en:["Eternal Winter = heavy group damage + knockback — this is the major cooldown moment.","Glacial Torment = a ticking DoT — cleanse or out-heal it."],da:["Eternal Winter = kraftig gruppeskade + knockback — dette er det store cooldown-øjeblik.","Glacial Torment = en tikkende DoT — dispel eller out-heal den."]},
     dps:{nl:["Dood Fractured Shivercores voor Winter's Shroud-stacks stapelen.","Raging Squalls vermijden — behandel als bewegende grond-AoE.","Eternal Winter: achter een muur gaan staan om terugstoot te beperken."],en:["Kill Fractured Shivercores before Winter's Shroud stacks build up.","Avoid Raging Squalls — treat them as moving ground AoE.","Eternal Winter: stand near a wall to limit the knockback."],da:["Dræb Fractured Shivercores, inden Winter's Shroud-stacks ophobes.","Undgå Raging Squalls — behandl dem som bevægende ground AoE.","Eternal Winter: stå nær en væg for at begrænse knockbacken."]}},
    {name:"Nalorakk, Loa of War",num:3,
     desc:{nl:"De Beer-Loa zelf — de derde beproeving. Vecht in Beer-vorm (zware fysieke schade) en Trol-vorm (vaardigheidsgericht). Beheers beide fasen.",en:"The Bear-Loa himself — the third trial. Fights in Bear form (heavy physical damage) and Troll form (ability-focused). Master both phases.",da:"Beer-Loa'en selv — den tredje prøvelse. Kæmper i Bjørneform (kraftig fysisk skade) og Troldeform (evnebaseret). Behers begge faser."},
     tank:{nl:["Beervorm: zware fysieke aanvallen — defensives agressief afwisselen.","Trolvorm: klaar voor interrupt-vaardigheidscasts.","Taunt bij elke vormovergang."],en:["Bear form: heavy physical attacks — rotate defensives aggressively.","Troll form: be ready to interrupt his ability casts.","Taunt at every form transition."],da:["Bjørneform: kraftige fysiske angreb — roter defensives aggressivt.","Troldeform: vær klar til at afbryde hans evnecasts.","Taunt ved hvert formskift."]},
     heal:{nl:["Beervorm schaadt de tank; trolvorm raakt de groep — pas je focus aan per fase.","Formovergangen = burst-momenten — cooldown voor de wissel."],en:["Bear form hurts the tank; troll form hits the group — adjust your focus per phase.","Form transitions = burst moments — have a cooldown ready for the switch."],da:["Bjørneform skader tanken; troldeform rammer gruppen — justér dit fokus per fase.","Formskift = burstøjeblikke — hav en cooldown klar til skiftet."]},
     dps:{nl:["Beervorm: achter de baas voor melee — frontale muil-aanvallen vermijden.","Trolvorm: oorlogskreten en vaardigheidscasts onderbreken.","Burn hard in trolvorm — offensieve cooldowns hier inzetten."],en:["Bear form: stand behind the boss for melee — avoid the frontal maw attacks.","Troll form: interrupt war cries and ability casts.","Burn hard in troll form — use offensive cooldowns here."],da:["Bjørneform: stå bag bossen til melee — undgå frontale angreb.","Troldeform: afbryd krigsråb og evnecasts.","Burn hårdt i troldeform — brug offensive cooldowns her."]}}
  ],
  route:{
    summary:{nl:"Drie beproevingen achter elkaar. Geen vertakkingen. Lust op Nalorakk in trolvorm.",en:"Three trials in sequence. No branching. Lust on Nalorakk during troll form.",da:"Tre prøvelser i rækkefølge. Ingen forgreninger. Lust på Nalorakk under troldeform."},
    lust:[{moment:"Nalorakk — Troldevorm 🔥",uitleg:{nl:"Beste burst-venster van het gevecht",en:"Best burst window of the fight",da:"Bedste burst-vindue i kampen"}}],
    pulls:[
      {label:{nl:"Beproeving 1 — The Hoardmonger",en:"Trial 1 — The Hoardmonger",da:"Prøvelse 1 — The Hoardmonger"},desc:{nl:"Altijd van groep afgewend. Paddenstoelen vernietigen.",en:"Always faced away from the group. Destroy mushrooms.",da:"Hold altid vendt fra gruppen. Ødelæg svampe."}},
      {label:{nl:"Beproeving 2 — Sentinel of Winter",en:"Trial 2 — Sentinel of Winter",da:"Prøvelse 2 — Sentinel of Winter"},desc:{nl:"Eternal Winter = grote cooldown. Muur in de rug bij terugstoot.",en:"Eternal Winter = major cooldown. Back to a wall during knockback.",da:"Eternal Winter = stor cooldown. Ryg mod en væg under knockback."}},
      {label:{nl:"Beproeving 3 — Nalorakk 🔥",en:"Trial 3 — Nalorakk 🔥",da:"Prøvelse 3 — Nalorakk 🔥"},desc:{nl:"Beer → Trol. Lust in trolvorm-venster.",en:"Bear → Troll. Lust during troll form window.",da:"Bjørn → Trold. Lust under troldeform-vindue."}}
    ],
    mdt:false, kg_url:null
  }
},
// ──────────────────────────────────────────────
// 8. VOIDSCAR ARENA (Normal)
// ──────────────────────────────────────────────
{
  id:"voidscar", name:"Voidscar Arena", zone:"Voidstorm — Slayer's Rise", type:"normal",
  bosses_short:["Taz'Rah","Atroxus","Charonus"],
  level:{nl:"Ontgrendel lvl 90",en:"Unlock level 90",da:"Lås op ved niveau 90"},
  lore:{
    nl:"De Voidscar Arena dwingt vechters van overal in Azeroth de arena in voor het vermaak van de d'mani. Opzichter Charonus heeft tegenstanders verzameld die tegen hun wil moeten vechten.",
    en:"The Voidscar Arena forces fighters from across Azeroth into the arena for the amusement of the d'mani. Overseer Charonus has gathered adversaries who must fight against their will.",
    da:"Voidscar Arena tvinger kæmpere fra hele Azeroth ind i arenaen til d'maniernes fornøjelse. Tilsynsmand Charonus har samlet modstandere, der må kæmpe mod deres vilje."
  },
  tips:[
    {title:{nl:"Ingangcoördinaten",en:"Entrance coordinates",da:"Indgangskoordinater"},
     text:{nl:"/way 51.4, 18.5 — Voidstorm, Slayer's Rise.",en:"/way 51.4, 18.5 — Voidstorm, Slayer's Rise.",da:"/way 51.4, 18.5 — Voidstorm, Slayer's Rise."}},
    {title:{nl:"Arena-indeling",en:"Arena layout",da:"Arenaopbygning"},
     text:{nl:"Gladiator-stijl — drie bazen spawnen opeenvolgend. Herpositioneer tussen elk gevecht.",en:"Gladiator style — three bosses spawn sequentially. Reposition between each fight.",da:"Gladiatorstil — tre bosser spawner efterfølgende. Genplacér jer mellem hvert opgør."}}
  ],
  bosses:[
    {name:"Taz'Rah",num:1,
     desc:{nl:"Gedwongen kampioen. Dark Rift = void-zone die alle spelers naar binnen trekt EN dodelijke schade doet aan wie erin eindigt. Gather Shadows: Ethereal Shades spawnen die Nether Dash uitvoeren — lijn-aanval, opzij stappen.",en:"Forced champion. Dark Rift = void zone that pulls ALL players inward AND deals lethal damage to anyone caught inside. Gather Shadows: Ethereal Shades spawn that perform Nether Dash — line attack, step to the side.",da:"Tvungen mester. Dark Rift = void-zone der trækker ALLE spillere indad OG gør dødelig skade på alle der fanges inde. Gather Shadows: Ethereal Shades spawner der udfører Nether Dash — linjeangrebet, træd til siden."},
     tank:{nl:["Dark Rift: zone verschijnt — stap ER UIT voor hij trekt. In de zone eindigen = dodelijk.","Cosmic Spike = zware tankbuster — defensive hier.","Ethereal Shades (Gather Shadows): pakken en bij de boss houden voor cleave."],en:["Dark Rift: zone appears — step OUT before it pulls. Ending up inside = lethal.","Cosmic Spike = heavy tank buster — defensive here.","Ethereal Shades (Gather Shadows): pick up and keep near the boss for cleave."],da:["Dark Rift: zonen dukker op — træd UD inden den trækker. Havne indeni = dødelig.","Cosmic Spike = tung tankbuster — defensive her.","Ethereal Shades (Gather Shadows): tag op og hold nær bossen til cleave."]},
     heal:{nl:["Nether Dash DoT op getroffen spelers — aanhoudende spot healing nodig.","Gather Shadows: shades doen tegelijk schade — AoE heal omhoog."],en:["Nether Dash DoT on affected players — sustained spot healing required.","Gather Shadows: shades deal simultaneous damage — ramp up AoE healing."],da:["Nether Dash DoT på ramte spillere — vedvarende spot healing påkrævet.","Gather Shadows: shades gør skade simultant — øg AoE-healing."]},
     dps:{nl:["Dark Rift: verschijnt als cirkel op de grond — stap ER UIT. Als hij activeert trekt hij iedereen naar het centrum voor dodelijke schade.","Nether Dash (Ethereal Shades): lijn-aanval — stap opzij als een Shade naar je toe beweegt.","Shades snel doden — ze blijven anders Nether Dash spammen."],en:["Dark Rift: appears as a circle on the ground — step OUT of it. When activated it pulls everyone to the center for lethal damage.","Nether Dash (Ethereal Shades): line attack — step to the side when a Shade moves toward you.","Kill Shades quickly — they keep spamming Nether Dash otherwise."],da:["Dark Rift: dukker op som en cirkel på gulvet — træd UD af den. Når den aktiveres trækker den alle til centrum for dødelig skade.","Nether Dash (Ethereal Shades): linjeangrebet — træd til siden når en Shade bevæger sig mod dig.","Dræb Shades hurtigt — ellers bliver de ved med at spamme Nether Dash."]}},
    {name:"Atroxus",num:2,
     desc:{nl:"Uitgehongerd gedrocht. Searing Roar is een FRONTALE KEGEL met een dodelijk gif-DoT. Nooit voor deze baas staan.",en:"A starved monstrosity. Searing Roar is a FRONTAL CONE with a lethal poison DoT. Never stand in front of this boss.",da:"Et udhungret uhyre. Searing Roar er en FRONTAL KEGLE med en dødelig gift-DoT. Stå aldrig foran denne boss."},
     tank:{nl:["Searing Roar FRONTAAL — houd Atroxus te allen tijde van de groep afgewend.","De kegel raakt ook de tank hard — defensive op ELKE Searing Roar-cast."],en:["Searing Roar is FRONTAL — keep Atroxus faced away from the group at all times.","The cone hits the tank hard too — use a defensive on EVERY Searing Roar cast."],da:["Searing Roar er FRONTAL — hold Atroxus vendt væk fra gruppen til enhver tid.","Keglen rammer også tanken hårdt — brug en defensive ved HVERT Searing Roar-cast."]},
     heal:{nl:["Searing Roar: DIRECT zware heals op iedereen die geraakt wordt.","Passieve gif-aanvallen tikken ook — tank altijd op hoge HP houden."],en:["Searing Roar: IMMEDIATELY cast heavy heals on everyone hit.","Passive poison attacks also tick — always keep the tank at high HP."],da:["Searing Roar: STRAKS cast kraftige heals på alle ramte.","Passive giftangreb tikker også — hold altid tanken på høj HP."]},
     dps:{nl:["KRITIEK: NOOIT voor Atroxus staan — Searing Roar is verwoestend.","Altijd achter of naast de baas staan.","Gifplassen op de grond zijn permanente gevaren.",],en:["CRITICAL: NEVER stand in front of Atroxus — Searing Roar is devastating.","Always stand behind or beside the boss.","Poison puddles on the ground are permanent hazards."],da:["KRITISK: Stå ALDRIG foran Atroxus — Searing Roar er ødelæggende.","Stå altid bag ved eller siden af bossen.","Giftpytter på gulvet er permanente farer."]}},
    {name:"Charonus",num:3,
     desc:{nl:"Eindbaas en eigenaar van de arena. Unstable Singularity = void-zone die spelers aantrekt + slow. Gravitic Orbs jagen spelers — worden vernietigd als ze door een Unstable Singularity lopen. Condensed Mass = grote raid-AoE. Cosmic Blast = knockback + DoT.",en:"Final boss and arena owner. Unstable Singularity = void zone that pulls players + slow. Gravitic Orbs chase players — destroyed when they pass through an Unstable Singularity. Condensed Mass = large raid AoE. Cosmic Blast = knockback + DoT.",da:"Slutboss og arenanens ejer. Unstable Singularity = void-zone der trækker spillere + slow. Gravitic Orbs jager spillere — ødelægges når de passerer gennem en Unstable Singularity. Condensed Mass = stor raid-AoE. Cosmic Blast = knockback + DoT."},
     tank:{nl:["Cosmic Blast = knockback + shadow DoT op iedereen — defensive hier.","Unstable Singularity-zones aantrekken — niet erin staan tenzij je een Gravitic Orb leidt.","Positioneer de baas weg van de Singularity-zones zodat je niet teruggeslingerd wordt."],en:["Cosmic Blast = knockback + shadow DoT on everyone — defensive here.","Unstable Singularity zones pull players — don't stand in them unless guiding a Gravitic Orb.","Position the boss away from Singularity zones so you don't get knocked into them."],da:["Cosmic Blast = knockback + shadow DoT på alle — defensive her.","Unstable Singularity-zoner trækker spillere — stå ikke i dem medmindre du leder en Gravitic Orb.","Positionér bossen væk fra Singularity-zoner så du ikke kastes ind i dem."]},
     heal:{nl:["Condensed Mass = grote raid-AoE — cooldown paraat.","Cosmic Blast = knockback + shadow DoT op iedereen — direct spot healen.","Gravitic Orbs en Singularities doen schade bij contact — steady healen."],en:["Condensed Mass = large raid AoE — have a cooldown ready.","Cosmic Blast = knockback + shadow DoT on everyone — immediately spot heal.","Gravitic Orbs and Singularities deal damage on contact — steady healing."],da:["Condensed Mass = stor raid-AoE — hav en cooldown klar.","Cosmic Blast = knockback + shadow DoT på alle — straks spot heal.","Gravitic Orbs og Singularities gør skade ved kontakt — stabil healing."]},
     dps:{nl:["Gravitic Orbs jagen spelers — leid ze naar een Unstable Singularity-zone om ze te vernietigen.","Unstable Singularity: niet vrijwillig inlopen — alleen voor het vernietigen van een Orb.","Condensed Mass = grote AoE, defensive of push door.","Cosmic Blast = knockback + DoT — op een veilige plek staan (niet naast Singularity-zones)."],en:["Gravitic Orbs chase players — guide them toward an Unstable Singularity zone to destroy them.","Unstable Singularity: don't voluntarily enter — only for destroying an Orb.","Condensed Mass = large AoE, use defensive or push through.","Cosmic Blast = knockback + DoT — stand in a safe position (not near Singularity zones)."],da:["Gravitic Orbs jager spillere — led dem mod en Unstable Singularity-zone for at ødelægge dem.","Unstable Singularity: gå ikke frivilligt ind — kun for at ødelægge en Orb.","Condensed Mass = stor AoE, brug defensive eller push igennem.","Cosmic Blast = knockback + DoT — stå på en sikker position (ikke nær Singularity-zoner)."]}}
  ],
  route:{
    summary:{nl:"Gladiator-arena — drie bazen opeenvolgend. Herpositioneer tussen elk gevecht. Lust op Charonus.",en:"Gladiator arena — three bosses in sequence. Reposition between each fight. Lust on Charonus.",da:"Gladiatorarena — tre bosser i rækkefølge. Genplacér jer mellem hvert opgør. Lust på Charonus."},
    lust:[{moment:"Boss 3 — Charonus 🔥",uitleg:{nl:"Eindbaas — Bloodlust hier",en:"Final boss — Bloodlust here",da:"Slutboss — Bloodlust her"}}],
    pulls:[
      {label:{nl:"Baas 1 — Taz'Rah",en:"Boss 1 — Taz'Rah",da:"Boss 1 — Taz'Rah"},desc:{nl:"Dark Rift: shades clusteren en AoE-burnen.",en:"Dark Rift: cluster shades and AoE burn.",da:"Dark Rift: saml shades og AoE-burn."}},
      {label:{nl:"Baas 2 — Atroxus",en:"Boss 2 — Atroxus",da:"Boss 2 — Atroxus"},desc:{nl:"NOOIT frontaal staan. Defensive op elke Searing Roar.",en:"NEVER stand frontal. Defensive on every Searing Roar.",da:"Stå ALDRIG frontalt. Defensive ved hvert Searing Roar."}},
      {label:{nl:"Baas 3 — Charonus 🔥",en:"Boss 3 — Charonus 🔥",da:"Boss 3 — Charonus 🔥"},desc:{nl:"Versterkingen direct doden. Gepuppette spelers niet aanvallen. Lust hier.",en:"Kill reinforcements immediately. Don't attack puppeted players. Lust here.",da:"Dræb forstærkninger straks. Angrib ikke puppet-spillere. Lust her."}}
    ],
    mdt:false, kg_url:null
  }
}
];

// ── FLOOR_MAPS ──
const FLOOR_MAPS = {
  'windrunner': `<svg class="fp-svg" viewBox="0 0 345 230" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="fp_windrunner" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
    <polygon points="0,1 7,3.5 0,6" fill="#e8c840"/>
  </marker>
  <pattern id="fp_stone_windrunner" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#161c2a"/>
    <rect x="0" y="0" width="7" height="7" fill="#171d2c" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#181e2d" opacity=".5"/>
  </pattern>
  <pattern id="fp_boss_windrunner" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#1a1400"/>
    <rect x="0" y="0" width="7" height="7" fill="#1b1500" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#1c1600" opacity=".5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0a0c12"/>

<!-- Outer bg -->
<!-- Entrance bottom-left -->
<rect x="15" y="155" width="75" height="55" rx="5" fill="#0d1a0d" stroke="rgba(64,200,112,.45)" stroke-width="1.5"/>
<text x="52" y="180" font-family="Rajdhani,sans-serif" font-size="8" font-weight="700" fill="rgba(64,200,112,.7)" text-anchor="middle">🚪</text>
<text x="52" y="192" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(64,200,112,.55)" text-anchor="middle">INGANG</text>
<!-- corridor up -->
<rect x="35" y="105" width="30" height="52" rx="2" fill="#131928"/>
<!-- West wing trash -->
<rect x="12" y="55" width="80" height="52" rx="5" fill="url(#fp_stone_windrunner)" stroke="#2a3050" stroke-width="1"/>
<text x="52" y="84" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">WEST WING</text>
<!-- corridor to boss1 -->
<rect x="35" y="18" width="30" height="38" rx="2" fill="#131928"/>
<!-- Boss 1 top-left -->
<rect x="12" y="8" width="90" height="32" rx="5" fill="url(#fp_boss_windrunner)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="57" y="27" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Emberdawn</text>
<!-- top corridor right -->
<rect x="98" y="10" width="140" height="22" rx="2" fill="#131928"/>
<!-- Boss 2 top-right -->
<rect x="232" y="8" width="95" height="32" rx="5" fill="url(#fp_boss_windrunner)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="279" y="27" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Derelict Duo</text>
<!-- right corridor down -->
<rect x="306" y="38" width="22" height="75" rx="2" fill="#131928"/>
<!-- Trash right -->
<rect x="240" y="104" width="90" height="45" rx="5" fill="url(#fp_stone_windrunner)" stroke="#2a3050" stroke-width="1"/>
<text x="285" y="130" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">EAST WING</text>
<!-- corridor to boss3 -->
<rect x="306" y="147" width="22" height="45" rx="2" fill="#131928"/>
<!-- Boss 3 bottom-right -->
<rect x="240" y="185" width="90" height="35" rx="5" fill="url(#fp_boss_windrunner)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="285" y="205" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Kroluk</text>
<!-- bottom corridor left -->
<rect x="85" y="190" width="158" height="22" rx="2" fill="#131928"/>
<!-- Boss 4 bottom-left FINAL -->
<rect x="12" y="180" width="78" height="38" rx="5" fill="url(#fp_boss_windrunner)" stroke="rgba(200,168,75,.85)" stroke-width="2"/>
<text x="51" y="200" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Restless</text>
<text x="51" y="210" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Heart</text>
<!-- ROUTE -->
<polyline fill="none" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9" filter="url(#glow)" marker-mid="url(#fp_windrunner)" marker-end="url(#fp_windrunner)"
  points="52,182 52,130 52,105 52,78 52,40 57,21 98,21 170,21 232,21 279,21 317,38 317,112 317,148 317,185 285,200 243,200 170,200 85,200 51,200"/>
<circle cx="52" cy="178" r="12" fill="#40c870" opacity=".2"/>
<circle cx="52" cy="178" r="9" fill="#40c870" opacity=".9"/>
<text x="52" y="182" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">🚪</text><circle cx="52" cy="104" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="52" cy="104" r="11" fill="#ff6622" opacity=".9"/>
<text x="52" y="108" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">1🔥</text><circle cx="57" cy="21" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="57" cy="21" r="11" fill="#ffd040" opacity=".9"/>
<text x="57" y="25" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B1</text><circle cx="279" cy="21" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="279" cy="21" r="11" fill="#ff6622" opacity=".9"/>
<text x="279" y="25" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B2🔥</text><circle cx="317" cy="125" r="12" fill="#60b8ff" opacity=".2"/>
<circle cx="317" cy="125" r="9" fill="#60b8ff" opacity=".9"/>
<text x="317" y="129" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#fff" text-anchor="middle">2</text><circle cx="317" cy="185" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="317" cy="185" r="11" fill="#ffd040" opacity=".9"/>
<text x="317" y="189" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B3</text><circle cx="51" cy="200" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="51" cy="200" r="11" fill="#ff6622" opacity=".9"/>
<text x="51" y="204" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B4🔥</text>
</svg>`,
  'magisters': `<svg class="fp-svg" viewBox="0 0 455 215" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="fp_magisters" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
    <polygon points="0,1 7,3.5 0,6" fill="#e8c840"/>
  </marker>
  <pattern id="fp_stone_magisters" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#161c2a"/>
    <rect x="0" y="0" width="7" height="7" fill="#171d2c" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#181e2d" opacity=".5"/>
  </pattern>
  <pattern id="fp_boss_magisters" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#1a1400"/>
    <rect x="0" y="0" width="7" height="7" fill="#1b1500" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#1c1600" opacity=".5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0a0c12"/>

<!-- Entrance bottom-left -->
<rect x="15" y="155" width="70" height="48" rx="5" fill="#0d1a0d" stroke="rgba(64,200,112,.45)" stroke-width="1.5"/>
<text x="50" y="177" font-family="Rajdhani,sans-serif" font-size="8" font-weight="700" fill="rgba(64,200,112,.7)" text-anchor="middle">🚪 INGANG</text>
<!-- corridor north -->
<rect x="30" y="108" width="28" height="48" rx="2" fill="#131928"/>
<!-- West wing -->
<rect x="12" y="58" width="72" height="52" rx="5" fill="url(#fp_stone_magisters)" stroke="#2a3050" stroke-width="1"/>
<text x="48" y="85" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">WEST WING</text>
<!-- corridor east -->
<rect x="82" y="78" width="60" height="22" rx="2" fill="#131928"/>
<!-- Library / buff -->
<rect x="138" y="62" width="80" height="48" rx="5" fill="#0d180d" stroke="rgba(64,200,112,.35)" stroke-dasharray="4,3" stroke-width="1.5"/>
<text x="178" y="85" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(64,200,112,.6)" text-anchor="middle">📖 BIBLIOTHEEK</text>
<text x="178" y="96" font-family="Rajdhani,sans-serif" font-size="6" font-weight="700" fill="rgba(64,200,112,.45)" text-anchor="middle">Arcane Tome!</text>
<!-- corridor east to courtyard -->
<rect x="215" y="78" width="35" height="22" rx="2" fill="#131928"/>
<!-- Central courtyard -->
<rect x="245" y="48" width="100" height="90" rx="6" fill="url(#fp_stone_magisters)" stroke="#2a3050" stroke-width="1"/>
<circle cx="295" cy="93" r="28" fill="none" stroke="#2a3050" stroke-width="1" opacity=".4"/>
<circle cx="295" cy="93" r="12" fill="#0f1420" stroke="#252d42" stroke-width="1" opacity=".5"/>
<text x="295" y="97" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.22)" text-anchor="middle">PLEIN</text>
<!-- north corridor to boss1 -->
<rect x="278" y="12" width="24" height="38" rx="2" fill="#131928"/>
<!-- Boss 1 top -->
<rect x="228" y="5" width="130" height="30" rx="5" fill="url(#fp_boss_magisters)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="293" y="24" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Arcanotron Custos</text>
<!-- east corridor -->
<rect x="342" y="68" width="42" height="20" rx="2" fill="#131928"/>
<!-- Boss 2 right -->
<rect x="380" y="28" width="60" height="80" rx="5" fill="url(#fp_boss_magisters)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="410" y="62" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Seranel</text>
<text x="410" y="73" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Sunlash</text>
<!-- south-east trash -->
<rect x="330" y="160" width="110" height="40" rx="5" fill="url(#fp_stone_magisters)" stroke="#2a3050" stroke-width="1"/>
<text x="385" y="183" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">TRASH 4</text>
<!-- east down corridor -->
<rect x="388" y="105" width="22" height="58" rx="2" fill="#131928"/>
<!-- Boss 3 bottom-right -->
<rect x="330" y="135" width="80" height="30" rx="5" fill="url(#fp_boss_magisters)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="370" y="153" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Gemellus</text>
<!-- south corridor -->
<rect x="278" y="138" width="55" height="20" rx="2" fill="#131928"/>
<rect x="278" y="155" width="22" height="45" rx="2" fill="#131928"/>
<!-- Boss 4 bottom FINAL -->
<rect x="135" y="155" width="148" height="42" rx="5" fill="url(#fp_boss_magisters)" stroke="rgba(200,168,75,.85)" stroke-width="2"/>
<text x="209" y="178" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Degentrius — Eindbaas</text>
<!-- ROUTE -->
<polyline fill="none" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9" marker-mid="url(#fp_magisters)" marker-end="url(#fp_magisters)"
  points="50,178 44,130 44,88 82,88 138,88 178,88 215,88 245,88 290,88 290,48 290,18 293,13 360,13 410,13 410,28 410,78 342,78 295,78 295,138 295,158 295,175 250,175 209,175"/>
<circle cx="50" cy="175" r="12" fill="#40c870" opacity=".2"/>
<circle cx="50" cy="175" r="9" fill="#40c870" opacity=".9"/>
<text x="50" y="179" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">🚪</text><circle cx="44" cy="104" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="44" cy="104" r="11" fill="#ff6622" opacity=".9"/>
<text x="44" y="108" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">1🔥</text><circle cx="160" cy="88" r="12" fill="#40c870" opacity=".2"/>
<circle cx="160" cy="88" r="9" fill="#40c870" opacity=".9"/>
<text x="160" y="92" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">✦</text><circle cx="293" cy="13" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="293" cy="13" r="11" fill="#ffd040" opacity=".9"/>
<text x="293" y="17" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B1</text><circle cx="410" cy="28" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="410" cy="28" r="11" fill="#ff6622" opacity=".9"/>
<text x="410" y="32" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B2🔥</text><circle cx="370" cy="147" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="370" cy="147" r="11" fill="#ffd040" opacity=".9"/>
<text x="370" y="151" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B3</text><circle cx="385" cy="175" r="12" fill="#60b8ff" opacity=".2"/>
<circle cx="385" cy="175" r="9" fill="#60b8ff" opacity=".9"/>
<text x="385" y="179" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#fff" text-anchor="middle">3</text><circle cx="209" cy="175" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="209" cy="175" r="11" fill="#ff6622" opacity=".9"/>
<text x="209" y="179" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B4🔥</text>
</svg>`,
  'maisara': `<svg class="fp-svg" viewBox="0 0 370 200" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="fp_maisara" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
    <polygon points="0,1 7,3.5 0,6" fill="#e8c840"/>
  </marker>
  <pattern id="fp_stone_maisara" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#161c2a"/>
    <rect x="0" y="0" width="7" height="7" fill="#171d2c" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#181e2d" opacity=".5"/>
  </pattern>
  <pattern id="fp_boss_maisara" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#1a1400"/>
    <rect x="0" y="0" width="7" height="7" fill="#1b1500" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#1c1600" opacity=".5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0a0c12"/>

<rect x="15" y="70" width="65" height="50" rx="5" fill="#0d1a0d" stroke="rgba(64,200,112,.45)" stroke-width="1.5"/>
<text x="47" y="95" font-family="Rajdhani,sans-serif" font-size="8" font-weight="700" fill="rgba(64,200,112,.7)" text-anchor="middle">🚪</text>
<text x="47" y="107" font-family="Rajdhani,sans-serif" font-size="7" fill="rgba(64,200,112,.55)" text-anchor="middle" font-weight="700">INGANG</text>
<rect x="78" y="83" width="60" height="24" rx="2" fill="#131928"/>
<rect x="135" y="60" width="85" height="55" rx="5" fill="url(#fp_stone_maisara)" stroke="#2a3050" stroke-width="1"/>
<text x="177" y="91" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">TRASH 1</text>
<rect x="217" y="83" width="40" height="24" rx="2" fill="#131928"/>
<rect x="254" y="52" width="90" height="52" rx="5" fill="url(#fp_boss_maisara)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="299" y="76" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Venomblight</text>
<text x="299" y="87" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Matriarch</text>
<rect x="320" y="102" width="22" height="60" rx="2" fill="#131928"/>
<rect x="210" y="135" width="115" height="42" rx="5" fill="url(#fp_stone_maisara)" stroke="#2a3050" stroke-width="1"/>
<text x="267" y="159" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">TRASH 2</text>
<rect x="100" y="143" width="113" height="24" rx="2" fill="#131928"/>
<rect x="18" y="130" width="88" height="55" rx="5" fill="url(#fp_boss_maisara)" stroke="rgba(200,168,75,.85)" stroke-width="2"/>
<text x="62" y="155" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Skarthrix</text>
<text x="62" y="166" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Soulrender</text>
<polyline fill="none" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9" marker-mid="url(#fp_maisara)" marker-end="url(#fp_maisara)"
  points="47,98 78,95 135,95 217,95 254,78 299,78 331,78 331,135 331,156 267,156 213,155 100,155 62,155"/>
<circle cx="47" cy="95" r="12" fill="#40c870" opacity=".2"/>
<circle cx="47" cy="95" r="9" fill="#40c870" opacity=".9"/>
<text x="47" y="99" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">🚪</text><circle cx="165" cy="90" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="165" cy="90" r="11" fill="#ff6622" opacity=".9"/>
<text x="165" y="94" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">1🔥</text><circle cx="299" cy="78" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="299" cy="78" r="11" fill="#ffd040" opacity=".9"/>
<text x="299" y="82" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B1</text><circle cx="267" cy="156" r="12" fill="#60b8ff" opacity=".2"/>
<circle cx="267" cy="156" r="9" fill="#60b8ff" opacity=".9"/>
<text x="267" y="160" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#fff" text-anchor="middle">2</text><circle cx="62" cy="155" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="62" cy="155" r="11" fill="#ff6622" opacity=".9"/>
<text x="62" y="159" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B2🔥</text>
</svg>`,
  'nexus': `<svg class="fp-svg" viewBox="0 0 420 192" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="fp_nexus_point_xenas" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
    <polygon points="0,1 7,3.5 0,6" fill="#e8c840"/>
  </marker>
  <pattern id="fp_stone_nexus_point_xenas" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#161c2a"/>
    <rect x="0" y="0" width="7" height="7" fill="#171d2c" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#181e2d" opacity=".5"/>
  </pattern>
  <pattern id="fp_boss_nexus_point_xenas" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#1a1400"/>
    <rect x="0" y="0" width="7" height="7" fill="#1b1500" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#1c1600" opacity=".5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0a0c12"/>

<rect x="10" y="55" width="60" height="48" rx="5" fill="#0d1a0d" stroke="rgba(64,200,112,.45)" stroke-width="1.5"/>
<text x="40" y="77" font-family="Rajdhani,sans-serif" font-size="8" font-weight="700" fill="rgba(64,200,112,.7)" text-anchor="middle">🚪</text>
<text x="40" y="89" font-family="Rajdhani,sans-serif" font-size="7" fill="rgba(64,200,112,.55)" text-anchor="middle" font-weight="700">INGANG</text>
<rect x="68" y="71" width="45" height="20" rx="2" fill="#131928"/>
<rect x="110" y="50" width="75" height="44" rx="5" fill="url(#fp_stone_nexus_point_xenas)" stroke="#2a3050" stroke-width="1"/>
<text x="147" y="75" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">TRASH</text>
<rect x="183" y="71" width="35" height="20" rx="2" fill="#131928"/>
<rect x="215" y="42" width="80" height="44" rx="5" fill="url(#fp_boss_nexus_point_xenas)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="255" y="62" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Xenas Prime</text>
<rect x="293" y="60" width="30" height="18" rx="2" fill="#131928"/>
<rect x="320" y="42" width="80" height="44" rx="5" fill="url(#fp_boss_nexus_point_xenas)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="360" y="62" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Void Drifter</text>
<rect x="360" y="85" width="20" height="55" rx="2" fill="#131928"/>
<rect x="220" y="135" width="165" height="42" rx="5" fill="url(#fp_boss_nexus_point_xenas)" stroke="rgba(200,168,75,.85)" stroke-width="2"/>
<text x="302" y="159" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Null Sentinel · Nexus Core</text>
<polyline fill="none" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9" marker-mid="url(#fp_nexus_point_xenas)" marker-end="url(#fp_nexus_point_xenas)"
  points="40,82 68,81 110,72 183,72 215,64 255,64 293,69 320,64 360,64 370,85 370,140 302,156"/>
<circle cx="40" cy="79" r="12" fill="#40c870" opacity=".2"/>
<circle cx="40" cy="79" r="9" fill="#40c870" opacity=".9"/>
<text x="40" y="83" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">🚪</text><circle cx="142" cy="68" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="142" cy="68" r="11" fill="#ff6622" opacity=".9"/>
<text x="142" y="72" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">1🔥</text><circle cx="255" cy="64" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="255" cy="64" r="11" fill="#ffd040" opacity=".9"/>
<text x="255" y="68" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B1</text><circle cx="360" cy="64" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="360" cy="64" r="11" fill="#ffd040" opacity=".9"/>
<text x="360" y="68" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B2</text><circle cx="302" cy="156" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="302" cy="156" r="11" fill="#ff6622" opacity=".9"/>
<text x="302" y="160" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B🔥</text>
</svg>`,
  'murderrow': `<svg class="fp-svg" viewBox="0 0 395 188" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="fp_murder_row" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
    <polygon points="0,1 7,3.5 0,6" fill="#e8c840"/>
  </marker>
  <pattern id="fp_stone_murder_row" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#161c2a"/>
    <rect x="0" y="0" width="7" height="7" fill="#171d2c" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#181e2d" opacity=".5"/>
  </pattern>
  <pattern id="fp_boss_murder_row" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#1a1400"/>
    <rect x="0" y="0" width="7" height="7" fill="#1b1500" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#1c1600" opacity=".5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0a0c12"/>

<rect x="10" y="60" width="60" height="48" rx="5" fill="#0d1a0d" stroke="rgba(64,200,112,.45)" stroke-width="1.5"/>
<text x="40" y="82" font-family="Rajdhani,sans-serif" font-size="8" font-weight="700" fill="rgba(64,200,112,.7)" text-anchor="middle">🚪</text>
<text x="40" y="94" font-family="Rajdhani,sans-serif" font-size="7" fill="rgba(64,200,112,.55)" text-anchor="middle" font-weight="700">INGANG</text>
<rect x="68" y="76" width="55" height="20" rx="2" fill="#131928"/>
<rect x="120" y="55" width="90" height="50" rx="5" fill="url(#fp_stone_murder_row)" stroke="#2a3050" stroke-width="1"/>
<text x="165" y="83" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">TRASH</text>
<rect x="208" y="76" width="40" height="20" rx="2" fill="#131928"/>
<rect x="245" y="45" width="100" height="52" rx="5" fill="url(#fp_boss_murder_row)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="295" y="68" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Kel'ar</text>
<rect x="343" y="70" width="22" height="60" rx="2" fill="#131928"/>
<rect x="245" y="125" width="120" height="45" rx="5" fill="url(#fp_boss_murder_row)" stroke="rgba(200,168,75,.85)" stroke-width="2"/>
<text x="305" y="150" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Murder Master — Eindbaas</text>
<polyline fill="none" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9" marker-mid="url(#fp_murder_row)" marker-end="url(#fp_murder_row)"
  points="40,86 68,86 120,82 208,82 245,71 295,71 354,71 354,128 305,148"/>
<circle cx="40" cy="83" r="12" fill="#40c870" opacity=".2"/>
<circle cx="40" cy="83" r="9" fill="#40c870" opacity=".9"/>
<text x="40" y="87" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">🚪</text><circle cx="150" cy="77" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="150" cy="77" r="11" fill="#ff6622" opacity=".9"/>
<text x="150" y="81" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">1🔥</text><circle cx="295" cy="71" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="295" cy="71" r="11" fill="#ffd040" opacity=".9"/>
<text x="295" y="75" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B1</text><circle cx="305" cy="148" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="305" cy="148" r="11" fill="#ff6622" opacity=".9"/>
<text x="305" y="152" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B2🔥</text>
</svg>`,
  'blindingvale': `<svg class="fp-svg" viewBox="0 0 420 192" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="fp_the_blinding_vale" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
    <polygon points="0,1 7,3.5 0,6" fill="#e8c840"/>
  </marker>
  <pattern id="fp_stone_the_blinding_vale" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#161c2a"/>
    <rect x="0" y="0" width="7" height="7" fill="#171d2c" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#181e2d" opacity=".5"/>
  </pattern>
  <pattern id="fp_boss_the_blinding_vale" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#1a1400"/>
    <rect x="0" y="0" width="7" height="7" fill="#1b1500" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#1c1600" opacity=".5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0a0c12"/>

<rect x="10" y="55" width="60" height="48" rx="5" fill="#0d1a0d" stroke="rgba(64,200,112,.45)" stroke-width="1.5"/>
<text x="40" y="77" font-family="Rajdhani,sans-serif" font-size="8" font-weight="700" fill="rgba(64,200,112,.7)" text-anchor="middle">🚪</text>
<text x="40" y="89" font-family="Rajdhani,sans-serif" font-size="7" fill="rgba(64,200,112,.55)" text-anchor="middle" font-weight="700">INGANG</text>
<rect x="68" y="71" width="45" height="20" rx="2" fill="#131928"/>
<rect x="110" y="50" width="75" height="44" rx="5" fill="url(#fp_stone_the_blinding_vale)" stroke="#2a3050" stroke-width="1"/>
<text x="147" y="75" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">TRASH</text>
<rect x="183" y="71" width="35" height="20" rx="2" fill="#131928"/>
<rect x="215" y="42" width="80" height="44" rx="5" fill="url(#fp_boss_the_blinding_vale)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="255" y="62" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Mist Weaver</text>
<rect x="293" y="60" width="30" height="18" rx="2" fill="#131928"/>
<rect x="320" y="42" width="80" height="44" rx="5" fill="url(#fp_boss_the_blinding_vale)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="360" y="62" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Pale Watcher</text>
<rect x="360" y="85" width="20" height="55" rx="2" fill="#131928"/>
<rect x="220" y="135" width="165" height="42" rx="5" fill="url(#fp_boss_the_blinding_vale)" stroke="rgba(200,168,75,.85)" stroke-width="2"/>
<text x="302" y="159" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Blinding Horror · Veilkeeper</text>
<polyline fill="none" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9" marker-mid="url(#fp_the_blinding_vale)" marker-end="url(#fp_the_blinding_vale)"
  points="40,82 68,81 110,72 183,72 215,64 255,64 293,69 320,64 360,64 370,85 370,140 302,156"/>
<circle cx="40" cy="79" r="12" fill="#40c870" opacity=".2"/>
<circle cx="40" cy="79" r="9" fill="#40c870" opacity=".9"/>
<text x="40" y="83" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">🚪</text><circle cx="142" cy="68" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="142" cy="68" r="11" fill="#ff6622" opacity=".9"/>
<text x="142" y="72" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">1🔥</text><circle cx="255" cy="64" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="255" cy="64" r="11" fill="#ffd040" opacity=".9"/>
<text x="255" y="68" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B1</text><circle cx="360" cy="64" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="360" cy="64" r="11" fill="#ffd040" opacity=".9"/>
<text x="360" y="68" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B2</text><circle cx="302" cy="156" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="302" cy="156" r="11" fill="#ff6622" opacity=".9"/>
<text x="302" y="160" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B🔥</text>
</svg>`,
  'nalorakk': `<svg class="fp-svg" viewBox="0 0 395 188" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="fp_den_of_nalorakk" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
    <polygon points="0,1 7,3.5 0,6" fill="#e8c840"/>
  </marker>
  <pattern id="fp_stone_den_of_nalorakk" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#161c2a"/>
    <rect x="0" y="0" width="7" height="7" fill="#171d2c" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#181e2d" opacity=".5"/>
  </pattern>
  <pattern id="fp_boss_den_of_nalorakk" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#1a1400"/>
    <rect x="0" y="0" width="7" height="7" fill="#1b1500" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#1c1600" opacity=".5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0a0c12"/>

<rect x="10" y="60" width="60" height="48" rx="5" fill="#0d1a0d" stroke="rgba(64,200,112,.45)" stroke-width="1.5"/>
<text x="40" y="82" font-family="Rajdhani,sans-serif" font-size="8" font-weight="700" fill="rgba(64,200,112,.7)" text-anchor="middle">🚪</text>
<text x="40" y="94" font-family="Rajdhani,sans-serif" font-size="7" fill="rgba(64,200,112,.55)" text-anchor="middle" font-weight="700">INGANG</text>
<rect x="68" y="76" width="55" height="20" rx="2" fill="#131928"/>
<rect x="120" y="55" width="90" height="50" rx="5" fill="url(#fp_stone_den_of_nalorakk)" stroke="#2a3050" stroke-width="1"/>
<text x="165" y="83" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">TRASH</text>
<rect x="208" y="76" width="40" height="20" rx="2" fill="#131928"/>
<rect x="245" y="45" width="100" height="52" rx="5" fill="url(#fp_boss_den_of_nalorakk)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="295" y="68" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Nalorakk</text>
<rect x="343" y="70" width="22" height="60" rx="2" fill="#131928"/>
<rect x="245" y="125" width="120" height="45" rx="5" fill="url(#fp_boss_den_of_nalorakk)" stroke="rgba(200,168,75,.85)" stroke-width="2"/>
<text x="305" y="150" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Feral King — Eindbaas</text>
<polyline fill="none" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9" marker-mid="url(#fp_den_of_nalorakk)" marker-end="url(#fp_den_of_nalorakk)"
  points="40,86 68,86 120,82 208,82 245,71 295,71 354,71 354,128 305,148"/>
<circle cx="40" cy="83" r="12" fill="#40c870" opacity=".2"/>
<circle cx="40" cy="83" r="9" fill="#40c870" opacity=".9"/>
<text x="40" y="87" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">🚪</text><circle cx="150" cy="77" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="150" cy="77" r="11" fill="#ff6622" opacity=".9"/>
<text x="150" y="81" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">1🔥</text><circle cx="295" cy="71" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="295" cy="71" r="11" fill="#ffd040" opacity=".9"/>
<text x="295" y="75" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B1</text><circle cx="305" cy="148" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="305" cy="148" r="11" fill="#ff6622" opacity=".9"/>
<text x="305" y="152" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B2🔥</text>
</svg>`,
  'voidscar': `<svg class="fp-svg" viewBox="0 0 395 188" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="fp_voidscar_arena" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
    <polygon points="0,1 7,3.5 0,6" fill="#e8c840"/>
  </marker>
  <pattern id="fp_stone_voidscar_arena" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#161c2a"/>
    <rect x="0" y="0" width="7" height="7" fill="#171d2c" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#181e2d" opacity=".5"/>
  </pattern>
  <pattern id="fp_boss_voidscar_arena" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#1a1400"/>
    <rect x="0" y="0" width="7" height="7" fill="#1b1500" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#1c1600" opacity=".5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0a0c12"/>

<rect x="10" y="60" width="60" height="48" rx="5" fill="#0d1a0d" stroke="rgba(64,200,112,.45)" stroke-width="1.5"/>
<text x="40" y="82" font-family="Rajdhani,sans-serif" font-size="8" font-weight="700" fill="rgba(64,200,112,.7)" text-anchor="middle">🚪</text>
<text x="40" y="94" font-family="Rajdhani,sans-serif" font-size="7" fill="rgba(64,200,112,.55)" text-anchor="middle" font-weight="700">INGANG</text>
<rect x="68" y="76" width="55" height="20" rx="2" fill="#131928"/>
<rect x="120" y="55" width="90" height="50" rx="5" fill="url(#fp_stone_voidscar_arena)" stroke="#2a3050" stroke-width="1"/>
<text x="165" y="83" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">TRASH</text>
<rect x="208" y="76" width="40" height="20" rx="2" fill="#131928"/>
<rect x="245" y="45" width="100" height="52" rx="5" fill="url(#fp_boss_voidscar_arena)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="295" y="68" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Gladiator Prime</text>
<rect x="343" y="70" width="22" height="60" rx="2" fill="#131928"/>
<rect x="245" y="125" width="120" height="45" rx="5" fill="url(#fp_boss_voidscar_arena)" stroke="rgba(200,168,75,.85)" stroke-width="2"/>
<text x="305" y="150" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Voidscar Master — Eindbaas</text>
<polyline fill="none" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9" marker-mid="url(#fp_voidscar_arena)" marker-end="url(#fp_voidscar_arena)"
  points="40,86 68,86 120,82 208,82 245,71 295,71 354,71 354,128 305,148"/>
<circle cx="40" cy="83" r="12" fill="#40c870" opacity=".2"/>
<circle cx="40" cy="83" r="9" fill="#40c870" opacity=".9"/>
<text x="40" y="87" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">🚪</text><circle cx="150" cy="77" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="150" cy="77" r="11" fill="#ff6622" opacity=".9"/>
<text x="150" y="81" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">1🔥</text><circle cx="295" cy="71" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="295" cy="71" r="11" fill="#ffd040" opacity=".9"/>
<text x="295" y="75" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B1</text><circle cx="305" cy="148" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="305" cy="148" r="11" fill="#ff6622" opacity=".9"/>
<text x="305" y="152" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B2🔥</text>
</svg>`,
};

// ── ROUTE_SCREENSHOTS ──
const ROUTE_SCREENSHOTS = {
  'magisters': 'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/route_magisters.png',
  'maisara': 'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/route_maisara.png',
  'nexus': 'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/route_nexus.png',
  'windrunner': 'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/route_windrunner.png',
  'algethar': 'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/route_algethar.png',
  'pitofsaron': 'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/route_pitofsaron.png',
  'triumvirate': 'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/route_triumvirate.png',
  'skyreach': 'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/route_skyreach.png',
};

// ── FLOOR_SCREENSHOTS ──
const FLOOR_SCREENSHOTS = {
  'murderrow': [
    {label:'Murder Row', img:'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/floor_murderrow_0_murder_row.png'},
    {label:'The Illicit Rain', img:'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/floor_murderrow_1_the_illicit_rain.png'},
  ],
  'nalorakk': [
    {label:'The Foraging', img:'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/floor_nalorakk_0_the_foraging.png'},
    {label:'The Heart of Rage', img:'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/floor_nalorakk_1_the_heart_of_rage.png'},
  ],
  'blindingvale': [
    {label:'The Blinding Vale', img:'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/floor_blindingvale_0_the_blinding_vale.png'},
  ],
  'voidscar': [
    {label:'Halls of Spite', img:'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/floor_voidscar_0_halls_of_spite.png'},
    {label:'Voidscar Arena', img:'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/floor_voidscar_1_voidscar_arena.png'},
  ],
};

const SPEC_TIPS = {
  // ── WINDRUNNER SPIRE ── boss 0 ──
  'windrunner-spire:0:tank': {
    'paladin-protection': {
      nl:["Avenger's Shield onderbreekt de vuurtoren-cast direct — gebruik hem zodra hij begint.",
          "Shield of the Righteous uptime is cruciaal: haar melee-aanvallen zijn zwaar tijdens Flame Surge.",
          "Ardent Defender bewaren voor Flame Surge als je healer bezet is."],
      en:["Avenger's Shield interrupts the firetower cast directly — use it as soon as it starts.",
          "Shield of the Righteous uptime is critical: her melee hits hard during Flame Surge.",
          "Save Ardent Defender for Flame Surge when your healer is occupied."],
      da:["Avenger's Shield afbryder tårncastet direkte — brug det, så snart det starter.",
          "Shield of the Righteous uptime er kritisk: hendes melee rammer hårdt under Flame Surge.",
          "Gem Ardent Defender til Flame Surge, når din healer er optaget."]
    }
  ,
    'demonhunter-vengeance': {
      nl:["Sigil of Silence op de adds bij spawn voor een snelle lockdown.",
          "Fiery Brand op de boss tijdens Flame Surge voor 40% schade-reductie.",
          "Metamorphosis bewaren voor de zwaarste adds-golf — niet verspillen op opener."],
      en:["Sigil of Silence on the adds at spawn for a quick lockdown.",
          "Fiery Brand on the boss during Flame Surge for 40% damage reduction.",
          "Save Metamorphosis for the heaviest add wave — don't waste it on the opener."],
      da:["Sigil of Silence på adds ved spawn for en hurtig lockdown.",
          "Fiery Brand på bossen under Flame Surge for 40% skadereduktion.",
          "Gem Metamorphosis til den kraftigste add-bølge — spild det ikke på åbningen."]
    },
    'druid-guardian': {
      nl:["Incapacitating Roar om adds even te stoppen bij spawn — Guardian heeft goede AoE-CC.",
          "Survival Instincts tijdens Flame Surge als de schade te hoog oploopt.",
          "Maul spam tijdens hoge Rage om schade-reductie van Ironfur te maximaliseren."],
      en:["Incapacitating Roar to briefly stop adds at spawn — Guardian has good AoE CC.",
          "Survival Instincts during Flame Surge if damage spikes too high.",
          "Spam Maul during high Rage to maximize Ironfur damage reduction."],
      da:["Incapacitating Roar til kortvarigt at stoppe adds ved spawn — Guardian har god AoE-CC.",
          "Survival Instincts under Flame Surge, hvis skaden topper for højt.",
          "Spam Maul under høj Rage for at maksimere Ironfur skadereduktion."]
    },
    'warrior-protection': {
      nl:["Spell Reflection op de vuurtoren-cast voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Flame Surge als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on the firetower cast for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Flame Surge as emergency; Rallying Cry for the group."],
      da:["Spell Reflection på tårncastet til fuld stavelse-immunitet.",
          "Shield Block uptime er kritisk — hold den aktiv så konsekvent som muligt.",
          "Last Stand under Flame Surge som nødknap; Rallying Cry til gruppen."]
    },
    'monk-brewmaster': {
      nl:["Spear Hand Strike op de vuurtoren-cast — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Flame Surge als primaire tank-cooldown."],
      en:["Spear Hand Strike on the firetower cast — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Flame Surge as primary tank cooldown."],
      da:["Spear Hand Strike på tårncastet — kombineret med høj mobilitet altid tilgængelig.",
          "Stagger er din kernemekanik — brug Purifying Brew, når Stagger bliver rød.",
          "Fortifying Brew under Flame Surge som primær tank-cooldown."]
    },
    'deathknight-blood': {
      nl:["Mind Freeze op de vuurtoren-cast — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Flame Surge als primaire tank-cooldown."],
      en:["Mind Freeze on the firetower cast — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Flame Surge as primary tank cooldown."],
      da:["Mind Freeze på tårncastet — kombineret med Death Grip altid tilgængelig.",
          "Death Strike er din kernemekanik — brug den efter at have taget skade til maksimal self-healing.",
          "Vampiric Blood under Flame Surge som primær tank-cooldown."]
    }},
  'windrunner-spire:0:heal': {
    'druid-restoration': {
      nl:["Pre-HoT de tank met Rejuvenation + Lifebloom vóór elke Flame Surge.",
          "Ironbark op de tank bij Flame Surge — dit is het gevaarlijkste moment.",
          "Typhoon of Incapacitating Roar om de adds te stoppen als ze spawnen."],
      en:["Pre-HoT the tank with Rejuvenation + Lifebloom before every Flame Surge.",
          "Ironbark on the tank during Flame Surge — this is the most dangerous moment.",
          "Typhoon or Incapacitating Roar to stop adds when they spawn."],
      da:["Pre-HoT tanken med Rejuvenation + Lifebloom før hver Flame Surge.",
          "Ironbark på tanken under Flame Surge — dette er det farligste øjeblik.",
          "Typhoon eller Incapacitating Roar for at stoppe adds, når de spawner."]
    }
  ,
    'paladin-holy': {
      nl:["Avenging Wrath vroeg poppen voor Dawnlight-healing burst op de groep.",
          "Blinding Light om adds even te stoppen als ze spawnen — jouw enige AoE stop.",
          "Beacon of Light permanent op de tank, Divine Toll bij Flame Surge voor nood-HP."],
      en:["Pop Avenging Wrath early for Dawnlight healing burst on the group.",
          "Blinding Light to briefly stop adds when they spawn — your only AoE stop.",
          "Keep Beacon of Light on the tank, Divine Toll on Flame Surge for emergency HP."],
      da:["Pop Avenging Wrath tidligt for Dawnlight healing burst på gruppen.",
          "Blinding Light til kortvarigt at stoppe adds, når de spawner — din eneste AoE stop.",
          "Hold Beacon of Light på tanken, Divine Toll ved Flame Surge til nød-HP."]
    },
    'monk-mistweaver': {
      nl:["Revival bij Flame Surge voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Flame Surge for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."],
      da:["Revival under Flame Surge til massiv gruppe-healing i én global.",
          "Spinning Crane Kick + Vivify til effektiv AoE-healing under høj skade.",
          "Life Cocoon på tanken under de kraftigste angreb — unik absorb-cooldown."]
    },
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Flame Surge op de hele groep plaatsen.",
          "Power Word: Barrier bij Flame Surge voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Flame Surge.",
          "Power Word: Barrier during Flame Surge for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."],
      da:["Disc spiller proaktivt — placer Atonement på hele gruppen inden Flame Surge.",
          "Power Word: Barrier under Flame Surge til gruppe-skadereduktion.",
          "Schism + Penance til burst-healing via Atonement på flere mål simultant."]
    },

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Flame Surge-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Flame Surge mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."],
      da:["Rescue eller Hover til hurtigt at undslippe Flame Surge-mekanikker.",
          "Gem Rewind til den kraftigste gruppeskade — unik tidsomvendt healing.",
          "Dream Breath til AoE-healing på flere spillere simultant."]
    },

    'priest-holy': {
      nl:["Symbol of Hope bij Flame Surge voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Flame Surge for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."],
      da:["Symbol of Hope under Flame Surge til gruppe-mana-gendannelse — unikt for Holy Priest.",
          "Holy Word: Sanctify til øjeblikkelig AoE-healing under høje skadespidser.",
          "Guardian Spirit på tanken ved kritiske øjeblikke — forhindrer et dræbende slag."]
    },

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Flame Surge voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Flame Surge for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."],
      da:["Hold Healing Rain permanent på gruppen — din base AoE-healing.",
          "Spirit Link Totem under Flame Surge til gruppe-skadeudligning — unikt i spillet.",
          "Gem Ancestral Protection Totem til det sværeste pull — anden chance for livet."]
    }},
  'windrunner-spire:0:dps': {
    'hunter-beastmastery': {
      nl:["Counter Shot op de vuurtoren-cast — jij bent volledig mobiel, neem de interrupt-verantwoordelijkheid.",
          "Bestial Wrath bij de pull en direct Primal Rage als de tank dat aangeeft.",
          "Tar Trap bij de adds die spawnen om de tank te helpen kiten."],
      en:["Counter Shot on the firetower cast — you are fully mobile, take interrupt responsibility.",
          "Bestial Wrath on pull and immediately Primal Rage when the tank signals.",
          "Tar Trap on spawning adds to help the tank kite."],
      da:["Counter Shot på tårncastet — du er fuldt mobil, tag interrupt-ansvar.",
          "Bestial Wrath på pull og straks Primal Rage, når tanken signalerer.",
          "Tar Trap på adds der spawner for at hjælpe tanken med at kite."]
    },
    'shaman-elemental': {
      nl:["Wind Shear op de vuurtoren-cast — korte cooldown, gebruik hem consequent.",
          "Ascendance bewaren voor Bloodlust-moment of grote pull.",
          "Static Field Totem om adds op hun plek te houden bij spawn."],
      en:["Wind Shear on the firetower cast — short cooldown, use it consistently.",
          "Save Ascendance for Bloodlust moment or big pull.",
          "Static Field Totem to keep adds in place when they spawn."],
      da:["Wind Shear på tårncastet — kort cooldown, brug den konsekvent.",
          "Gem Ascendance til Bloodlust-øjeblikket eller stort pull.",
          "Static Field Totem for at holde adds på plads, når de spawner."]
    }
  ,
    'demonhunter-havoc': {
      nl:["Disrupt op de vuurtoren-cast — jij hebt een van de kortste interrupt-cooldowns.",
          "Fel Rush en Vengeful Retreat nooit in frontal abilities — positional awareness is cruciaal.",
          "Eye Beam + Essence Break op de pull; The Hunt op de boss zodra beschikbaar."],
      en:["Disrupt on the firetower cast — you have one of the shortest interrupt cooldowns.",
          "Never Fel Rush or Vengeful Retreat into frontal abilities — positional awareness is critical.",
          "Eye Beam + Essence Break on pull; The Hunt on the boss as soon as available."],
      da:["Disrupt på tårncastet — du har et af de korteste interrupt-cooldowns.",
          "Brug aldrig Fel Rush eller Vengeful Retreat ind i frontale abilities — positionering er kritisk.",
          "Eye Beam + Essence Break på pull; The Hunt på bossen, så snart det er tilgængeligt."]
    },
    'druid-balance': {
      nl:["Typhoon of Incapacitating Roar om de vuurtoren-cast te onderbreken.",
          "Starsurge op de boss, Starfall op de adds die spawnen.",
          "Convoke bewaren voor het Bloodlust-window."],
      en:["Typhoon or Incapacitating Roar to interrupt the firetower cast.",
          "Starsurge on the boss, Starfall on spawning adds.",
          "Save Convoke for the Bloodlust window."],
      da:["Typhoon eller Incapacitating Roar til at afbryde tårncastet.",
          "Starsurge på bossen, Starfall på adds der spawner.",
          "Gem Convoke til Bloodlust-vinduet."]
    },
    'paladin-retribution': {
      nl:["Rebuke op de vuurtoren-cast zodra je in meleebereik bent.",
          "Avenging Wrath + Wake of Ashes op de pull voor maximale burst.",
          "Execution Sentence op de baas voor single-target funnel schade."],
      en:["Rebuke on the firetower cast as soon as you are in melee range.",
          "Avenging Wrath + Wake of Ashes on pull for maximum burst.",
          "Execution Sentence on the boss for single-target funnel damage."],
      da:["Rebuke på tårncastet, så snart du er i melee-rækkevidde.",
          "Avenging Wrath + Wake of Ashes på pull for maksimal burst.",
          "Execution Sentence på bossen for single-target funnel-skade."]
    },
    'warrior-fury': {
      nl:["Pummel op de vuurtoren-cast — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Flame Surge — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on the firetower cast — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Flame Surge — one of the best group cooldowns in the game."],
      da:["Pummel på tårncastet — kort cooldown, brug den konsekvent.",
          "Recklessness + Bladestorm på store pulls til maksimal AoE burst.",
          "Rallying Cry til gruppen under Flame Surge — et af de bedste gruppe-cooldowns i spillet."]
    },
    'warrior-arms': {
      nl:["Pummel op de vuurtoren-cast — wissel af met de tank.",
          "Bladestorm op de adds die spawnen cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Flame Surge als groeps-defensief."],
      en:["Pummel on the firetower cast — rotate with the tank.",
          "Bladestorm on the adds that spawn cluster for AoE cleave.",
          "Rallying Cry for the group during Flame Surge as group defensive."],
      da:["Pummel på tårncastet — roter med tanken.",
          "Bladestorm på adds der spawner-klyngen til AoE cleave.",
          "Rallying Cry til gruppen under Flame Surge som gruppe-defensiv."]
    },
    'mage-frost': {
      nl:["Counterspell op de vuurtoren-cast — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de adds die spawnen cluster voor maximale AoE.",
          "Ice Block bij Flame Surge als persoonlijke noodimuniteit."],
      en:["Counterspell on the firetower cast — your interrupt is essential.",
          "Frozen Orb + Blizzard on the adds that spawn cluster for maximum AoE.",
          "Ice Block during Flame Surge as personal emergency immunity."],
      da:["Counterspell på tårncastet — dit interrupt er uundværligt.",
          "Frozen Orb + Blizzard på adds der spawner-klyngen til maksimal AoE.",
          "Ice Block under Flame Surge som personlig nødimmunitet."]
    },
    'rogue-outlaw': {
      nl:["Kick op de vuurtoren-cast — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de adds die spawnen cluster.",
          "Crimson Vial + Feint bij Flame Surge voor personal survival."],
      en:["Kick on the firetower cast — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the adds that spawn cluster.",
          "Crimson Vial + Feint during Flame Surge for personal survival."],
      da:["Kick på tårncastet — roter med andre interrupts.",
          "Blade Flurry til AoE cleave på adds der spawner-klyngen.",
          "Crimson Vial + Feint under Flame Surge til personlig overlevelse."]
    },
    'monk-windwalker': {
      nl:["Spear Hand Strike op de vuurtoren-cast — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de adds die spawnen cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Flame Surge voor personal defensive."],
      en:["Spear Hand Strike on the firetower cast — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the adds that spawn cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Flame Surge for personal defensive."],
      da:["Spear Hand Strike på tårncastet — kombineret med din høje mobilitet altid tilgængelig.",
          "Spinning Crane Kick + Fist of the White Tiger på adds der spawner-klyngen til burst AoE.",
          "Diffuse Magic eller Dampen Harm under Flame Surge til personlig defensiv."]
    },
    'shaman-enhancement': {
      nl:["Wind Shear op de vuurtoren-cast — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Flame Surge als persoonlijk defensief."],
      en:["Wind Shear on the firetower cast — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Flame Surge as personal defensive."],
      da:["Wind Shear på tårncastet — kort cooldown, tag interrupt-ansvar.",
          "Feral Spirit + Doom Winds på store pulls til maksimal AoE burst.",
          "Astral Shift under Flame Surge som personligt defensiv."]
    },
    'hunter-marksmanship': {
      nl:["Counter Shot op de vuurtoren-cast — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de adds die spawnen cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Flame Surge als volledige immuniteit."],
      en:["Counter Shot on the firetower cast — fully ranged, always in range.",
          "Volley + Rapid Fire on the adds that spawn cluster for massive ranged AoE.",
          "Aspect of the Turtle during Flame Surge for full immunity."],
      da:["Counter Shot på tårncastet — fuldt ranged, altid i rækkevidde.",
          "Volley + Rapid Fire på adds der spawner-klyngen til massiv ranged AoE.",
          "Aspect of the Turtle under Flame Surge til fuld immunitet."]
    },
    'deathknight-unholy': {
      nl:["Mind Freeze op de vuurtoren-cast — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de adds die spawnen cluster.",
          "Anti-Magic Shell bij Flame Surge voor magische schade-immuniteit."],
      en:["Mind Freeze on the firetower cast — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the adds that spawn cluster.",
          "Anti-Magic Shell during Flame Surge for magic damage immunity."],
      da:["Mind Freeze på tårncastet — dit interrupt.",
          "Army of the Dead + Apocalypse til maksimal AoE burst på adds der spawner-klyngen.",
          "Anti-Magic Shell under Flame Surge til magisk skadeimmunitet."]
    },

    'deathknight-frost': {
      nl:["Mind Freeze op de vuurtoren-cast — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de adds cluster voor AoE burst.",
          "Anti-Magic Shell bij Flame Surge voor magische schade-immuniteit."],
      en:["Mind Freeze on the firetower cast — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the adds cluster for AoE burst.",
          "Anti-Magic Shell during Flame Surge for magic damage immunity."],
      da:["Mind Freeze på tårncastet — dit interrupt.",
          "Pillar of Frost + Frostwyrm's Fury på adds-klyngen til AoE burst.",
          "Anti-Magic Shell under Flame Surge til magisk skadeimmunitet."]
    },

    'demonhunter-devourer': {
      nl:["Disrupt op de vuurtoren-cast — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de adds cluster voor ranged AoE burst.",
          "Blur bij Flame Surge als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on the firetower cast — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the adds cluster for ranged AoE burst.",
          "Blur during Flame Surge as primary defensive — two charges with Demonic Resilience."],
      da:["Disrupt på tårncastet — du er semi-ranged, altid i rækkevidde.",
          "Hurl Glaive + Fel Barrage på adds-klyngen til ranged AoE burst.",
          "Blur under Flame Surge som primær defensiv — to charges med Demonic Resilience."]
    },

    'druid-feral': {
      nl:["Skull Bash op de vuurtoren-cast — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de adds cluster.",
          "Survival Instincts bij Flame Surge als persoonlijk defensief — twee charges."],
      en:["Skull Bash on the firetower cast — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the adds cluster.",
          "Survival Instincts during Flame Surge as personal defensive — two charges."],
      da:["Skull Bash på tårncastet — kort cooldown, altid i melee.",
          "Primal Wrath eller Swipe til AoE cleave på adds-klyngen.",
          "Survival Instincts under Flame Surge som personligt defensiv — to charges."]
    },

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op de vuurtoren-cast — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Flame Surge als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the firetower cast — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Flame Surge as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på tårncastet — Evoker CC-toolkit.",
          "Aktivér Ebon Might + Breath of Eons på det store pull til maksimal gruppebuff.",
          "Obsidian Scales under Flame Surge som personligt defensiv."]
    },

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op de vuurtoren-cast — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Flame Surge als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the firetower cast — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Flame Surge as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på tårncastet — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge på det store pull til maksimal burst.",
          "Obsidian Scales under Flame Surge som personligt defensiv."]
    },

    'hunter-survival': {
      nl:["Counter Shot op de vuurtoren-cast — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de adds cluster.",
          "Aspect of the Turtle bij Flame Surge als noodimuniteit."],
      en:["Counter Shot on the firetower cast — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the adds cluster.",
          "Aspect of the Turtle during Flame Surge as emergency immunity."],
      da:["Counter Shot på tårncastet — du er mobil og har altid et ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb til burst AoE på adds-klyngen.",
          "Aspect of the Turtle under Flame Surge som nødimmunitet."]
    },

    'mage-arcane': {
      nl:["Counterspell op de vuurtoren-cast — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Flame Surge als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on the firetower cast — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Flame Surge as emergency immunity — Arcane Mages are glass cannons, use it wisely."],
      da:["Counterspell på tårncastet — du har den bedste interrupt af alle mages.",
          "Gem Arcane Surge til store pulls eller Bloodlust-vinduet til maksimal burst.",
          "Ice Block under Flame Surge som nødimmunitet — Arcane Mages er glaskanoner, brug det fornuftigt."]
    },

    'mage-fire': {
      nl:["Counterspell op de vuurtoren-cast — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Flame Surge als noodimuniteit."],
      en:["Counterspell on the firetower cast — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Flame Surge as emergency immunity."],
      da:["Counterspell på tårncastet — essentielt for enhver Mage.",
          "Combustion + Pyroclasm til maksimal burst på store pulls.",
          "Ice Block under Flame Surge som nødimmunitet."]
    },

    'priest-shadow': {
      nl:["Silence op de vuurtoren-cast — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Flame Surge voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on the firetower cast — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Flame Surge for 75% damage reduction — best personal defensive of all clothies."],
      da:["Silence på tårncastet — kombineret med Mind Blast som ranged interrupt.",
          "Void Eruption + Devouring Plague til burst på store pulls.",
          "Dispersion under Flame Surge til 75% skadereduktion — bedste personlige defensiv af alle clothies."]
    },

    'rogue-assassination': {
      nl:["Kick op de vuurtoren-cast — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Flame Surge voor 100% melee-ontwijking."],
      en:["Kick on the firetower cast — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Flame Surge for 100% melee dodge."],
      da:["Kick på tårncastet — roter med andre melee-interrupts.",
          "Deathmark + Shiv til maksimal single-target burst; Fan of Knives til AoE.",
          "Evasion under Flame Surge til 100% melee-undvigelse."]
    },

    'rogue-subtlety': {
      nl:["Kick op de vuurtoren-cast — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Flame Surge voor 100% melee-ontwijking."],
      en:["Kick on the firetower cast — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Flame Surge for 100% melee dodge."],
      da:["Kick på tårncastet — roter med andre melee-interrupts.",
          "Shadow Blades + Symbols of Death til maksimal burst i Stealth-vinduet.",
          "Evasion under Flame Surge til 100% melee-undvigelse."]
    },

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op de vuurtoren-cast — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Flame Surge voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on the firetower cast — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Flame Surge for 40% damage reduction and interrupt immunity."],
      da:["Spell Lock (via Felhunter) på tårncastet — dit eneste pålidelige interrupt.",
          "Malefic Rapture til AoE burst, når flere mål er fulde af DoTs.",
          "Unending Resolve under Flame Surge til 40% skadereduktion og interrupt-immunitet."]
    },

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op de vuurtoren-cast — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de adds cluster.",
          "Unending Resolve bij Flame Surge voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the firetower cast — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the adds cluster.",
          "Unending Resolve during Flame Surge for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på tårncastet — essentielt i høje keys.",
          "Summon Demonic Tyrant + Implosion til maksimal AoE burst på adds-klyngen.",
          "Unending Resolve under Flame Surge til 40% skadereduktion."]
    },

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op de vuurtoren-cast — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Flame Surge voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the firetower cast — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Flame Surge for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på tårncastet — dit eneste interrupt.",
          "Summon Infernal + Channel Demonfire til burst på store pulls.",
          "Unending Resolve under Flame Surge til 40% skadereduktion."]
    }},
  // ── WINDRUNNER SPIRE ── boss 1 ──
  'windrunner-spire:1:tank': {
    'paladin-protection': {
      nl:["Kalis en Latch gescheiden houden — Avenger's Shield om Kalis's Shadowbolt te onderbreken én silencen.",
          "Blessing of Spellwarding op jezelf tijdens Shadow Overload.",
          "Divine Shield als noodrem als Broken Bond debuff op jou staat en de schade piekt."],
      en:["Keep Kalis and Latch apart — Avenger's Shield interrupts and silences Kalis's Shadowbolt.",
          "Blessing of Spellwarding on yourself during Shadow Overload.",
          "Divine Shield as emergency if Broken Bond debuff lands on you and damage spikes."],
      da:["Hold Kalis og Latch adskilt — Avenger's Shield afbryder og silencer Kalis's Shadowbolt.",
          "Blessing of Spellwarding på dig selv under Shadow Overload.",
          "Divine Shield som nødknap, hvis Broken Bond debuff lander på dig og skaden topper."]
    }
  ,
    'warrior-protection': {
      nl:["Spell Reflection op de banish-cast voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Shadow Crash als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on the banish cast for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Shadow Crash as emergency; Rallying Cry for the group."],
      da:["Spell Reflection på banish-castet til fuld stavelse-immunitet.",
          "Shield Block uptime er kritisk — hold den aktiv så konsekvent som muligt.",
          "Last Stand under Shadow Crash som nødknap; Rallying Cry til gruppen."]
    },
    'monk-brewmaster': {
      nl:["Spear Hand Strike op de banish-cast — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Shadow Crash als primaire tank-cooldown."],
      en:["Spear Hand Strike on the banish cast — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Shadow Crash as primary tank cooldown."],
      da:["Spear Hand Strike på banish-castet — kombineret med høj mobilitet altid tilgængelig.",
          "Stagger er din kernemekanik — brug Purifying Brew, når Stagger bliver rød.",
          "Fortifying Brew under Shadow Crash som primær tank-cooldown."]
    },
    'deathknight-blood': {
      nl:["Mind Freeze op de banish-cast — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Shadow Crash als primaire tank-cooldown."],
      en:["Mind Freeze on the banish cast — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Shadow Crash as primary tank cooldown."],
      da:["Mind Freeze på banish-castet — kombineret med Death Grip altid tilgængelig.",
          "Death Strike er din kernemekanik — brug den efter at have taget skade til maksimal self-healing.",
          "Vampiric Blood under Shadow Crash som primær tank-cooldown."]
    }},
  'windrunner-spire:1:heal': {
    'druid-restoration': {
      nl:["Curse of Darkness direct dispellen — een 12 seconden fixate van Dark Entity is dodelijk.",
          "Wild Growth + Flourish tijdens de Shadow Overload fase.",
          "Stampeding Roar zodat iedereen snel weg kan uit de schaduwen."],
      en:["Dispel Curse of Darkness immediately — a 12-second Dark Entity fixate is lethal.",
          "Wild Growth + Flourish during the Shadow Overload phase.",
          "Stampeding Roar so everyone can quickly escape the shadows."],
      da:["Dispel Curse of Darkness med det samme — en 12-sekunders Dark Entity fixate er dødelig.",
          "Wild Growth + Flourish under Shadow Overload-fasen.",
          "Stampeding Roar så alle hurtigt kan slippe væk fra skyggerne."]
    }
  ,
    'monk-mistweaver': {
      nl:["Revival bij Shadow Crash voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Shadow Crash for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."],
      da:["Revival under Shadow Crash til massiv gruppe-healing i én global.",
          "Spinning Crane Kick + Vivify til effektiv AoE-healing under høj skade.",
          "Life Cocoon på tanken under de kraftigste angreb — unik absorb-cooldown."]
    },
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Shadow Crash op de hele groep plaatsen.",
          "Power Word: Barrier bij Shadow Crash voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Shadow Crash.",
          "Power Word: Barrier during Shadow Crash for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."],
      da:["Disc spiller proaktivt — placer Atonement på hele gruppen inden Shadow Crash.",
          "Power Word: Barrier under Shadow Crash til gruppe-skadereduktion.",
          "Schism + Penance til burst-healing via Atonement på flere mål simultant."]
    },

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Shadow Crash-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Shadow Crash mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."],
      da:["Rescue eller Hover til hurtigt at undslippe Shadow Crash-mekanikker.",
          "Gem Rewind til den kraftigste gruppeskade — unik tidsomvendt healing.",
          "Dream Breath til AoE-healing på flere spillere simultant."]
    },

    'priest-holy': {
      nl:["Symbol of Hope bij Shadow Crash voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Shadow Crash for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."],
      da:["Symbol of Hope under Shadow Crash til gruppe-mana-gendannelse — unikt for Holy Priest.",
          "Holy Word: Sanctify til øjeblikkelig AoE-healing under høje skadespidser.",
          "Guardian Spirit på tanken ved kritiske øjeblikke — forhindrer et dræbende slag."]
    },

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Shadow Crash voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Shadow Crash for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."],
      da:["Hold Healing Rain permanent på gruppen — din base AoE-healing.",
          "Spirit Link Totem under Shadow Crash til gruppe-skadeudligning — unikt i spillet.",
          "Gem Ancestral Protection Totem til det sværeste pull — anden chance for livet."]
    }},
  'windrunner-spire:1:dps': {
    'hunter-beastmastery': {
      nl:["Counter Shot elke Kalis Shadowbolt cast — jouw interrupt is hier de betrouwbaarste.",
          "Misdirection naar de tank als Latch te ver wegloopt.",
          "Bestial Wrath als beide bazen onder 30% zijn — burst ze gelijktijdig neer."],
      en:["Counter Shot every Kalis Shadowbolt cast — your interrupt is the most reliable here.",
          "Misdirection to tank if Latch wanders too far.",
          "Bestial Wrath when both bosses drop below 30% — burst them down together."],
      da:["Counter Shot ved hvert Kalis Shadowbolt-cast — din interrupt er den mest pålidelige her.",
          "Misdirection til tanken, hvis Latch vandrer for langt væk.",
          "Bestial Wrath, når begge bosser falder under 30% — burst dem ned sammen."]
    },
    'shaman-elemental': {
      nl:["Wind Shear op Kalis's Shadowbolt — hoge prioriteit, missen is dodelijk.",
          "Purge Shadow Overload buff van Latch zo snel mogelijk.",
          "Earthquake tussen de bazen in voor constante AoE-schade."],
      en:["Wind Shear on Kalis's Shadowbolt — high priority, missing is lethal.",
          "Purge Shadow Overload buff from Latch as quickly as possible.",
          "Earthquake between the bosses for constant AoE damage."],
      da:["Wind Shear på Kalis's Shadowbolt — høj prioritet, at misse er dødelig.",
          "Purge Shadow Overload-buff fra Latch så hurtigt som muligt.",
          "Earthquake mellem bosserne for konstant AoE-skade."]
    }
  ,
    'warrior-fury': {
      nl:["Pummel op de banish-cast — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Shadow Crash — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on the banish cast — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Shadow Crash — one of the best group cooldowns in the game."],
      da:["Pummel på banish-castet — kort cooldown, brug den konsekvent.",
          "Recklessness + Bladestorm på store pulls til maksimal AoE burst.",
          "Rallying Cry til gruppen under Shadow Crash — et af de bedste gruppe-cooldowns i spillet."]
    },
    'warrior-arms': {
      nl:["Pummel op de banish-cast — wissel af met de tank.",
          "Bladestorm op de shadow adds cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Shadow Crash als groeps-defensief."],
      en:["Pummel on the banish cast — rotate with the tank.",
          "Bladestorm on the shadow adds cluster for AoE cleave.",
          "Rallying Cry for the group during Shadow Crash as group defensive."],
      da:["Pummel på banish-castet — roter med tanken.",
          "Bladestorm på skygge-adds-klyngen til AoE cleave.",
          "Rallying Cry til gruppen under Shadow Crash som gruppe-defensiv."]
    },
    'mage-frost': {
      nl:["Counterspell op de banish-cast — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de shadow adds cluster voor maximale AoE.",
          "Ice Block bij Shadow Crash als persoonlijke noodimuniteit."],
      en:["Counterspell on the banish cast — your interrupt is essential.",
          "Frozen Orb + Blizzard on the shadow adds cluster for maximum AoE.",
          "Ice Block during Shadow Crash as personal emergency immunity."],
      da:["Counterspell på banish-castet — dit interrupt er uundværligt.",
          "Frozen Orb + Blizzard på skygge-adds-klyngen til maksimal AoE.",
          "Ice Block under Shadow Crash som personlig nødimmunitet."]
    },
    'rogue-outlaw': {
      nl:["Kick op de banish-cast — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de shadow adds cluster.",
          "Crimson Vial + Feint bij Shadow Crash voor personal survival."],
      en:["Kick on the banish cast — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the shadow adds cluster.",
          "Crimson Vial + Feint during Shadow Crash for personal survival."],
      da:["Kick på banish-castet — roter med andre interrupts.",
          "Blade Flurry til AoE cleave på skygge-adds-klyngen.",
          "Crimson Vial + Feint under Shadow Crash til personlig overlevelse."]
    },
    'monk-windwalker': {
      nl:["Spear Hand Strike op de banish-cast — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de shadow adds cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Shadow Crash voor personal defensive."],
      en:["Spear Hand Strike on the banish cast — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the shadow adds cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Shadow Crash for personal defensive."],
      da:["Spear Hand Strike på banish-castet — kombineret med din høje mobilitet altid tilgængelig.",
          "Spinning Crane Kick + Fist of the White Tiger på skygge-adds-klyngen til burst AoE.",
          "Diffuse Magic eller Dampen Harm under Shadow Crash til personlig defensiv."]
    },
    'shaman-enhancement': {
      nl:["Wind Shear op de banish-cast — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Shadow Crash als persoonlijk defensief."],
      en:["Wind Shear on the banish cast — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Shadow Crash as personal defensive."],
      da:["Wind Shear på banish-castet — kort cooldown, tag interrupt-ansvar.",
          "Feral Spirit + Doom Winds på store pulls til maksimal AoE burst.",
          "Astral Shift under Shadow Crash som personligt defensiv."]
    },
    'hunter-marksmanship': {
      nl:["Counter Shot op de banish-cast — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de shadow adds cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Shadow Crash als volledige immuniteit."],
      en:["Counter Shot on the banish cast — fully ranged, always in range.",
          "Volley + Rapid Fire on the shadow adds cluster for massive ranged AoE.",
          "Aspect of the Turtle during Shadow Crash for full immunity."],
      da:["Counter Shot på banish-castet — fuldt ranged, altid i rækkevidde.",
          "Volley + Rapid Fire på skygge-adds-klyngen til massiv ranged AoE.",
          "Aspect of the Turtle under Shadow Crash til fuld immunitet."]
    },
    'deathknight-unholy': {
      nl:["Mind Freeze op de banish-cast — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de shadow adds cluster.",
          "Anti-Magic Shell bij Shadow Crash voor magische schade-immuniteit."],
      en:["Mind Freeze on the banish cast — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the shadow adds cluster.",
          "Anti-Magic Shell during Shadow Crash for magic damage immunity."],
      da:["Mind Freeze på banish-castet — dit interrupt.",
          "Army of the Dead + Apocalypse til maksimal AoE burst på skygge-adds-klyngen.",
          "Anti-Magic Shell under Shadow Crash til magisk skadeimmunitet."]
    },

    'deathknight-frost': {
      nl:["Mind Freeze op de banish-cast — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de shadow adds cluster voor AoE burst.",
          "Anti-Magic Shell bij Shadow Crash voor magische schade-immuniteit."],
      en:["Mind Freeze on the banish cast — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the shadow adds cluster for AoE burst.",
          "Anti-Magic Shell during Shadow Crash for magic damage immunity."],
      da:["Mind Freeze på banish-castet — dit interrupt.",
          "Pillar of Frost + Frostwyrm's Fury på skygge-adds-klyngen til AoE burst.",
          "Anti-Magic Shell under Shadow Crash til magisk skadeimmunitet."]
    },

    'demonhunter-devourer': {
      nl:["Disrupt op de banish-cast — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de shadow adds cluster voor ranged AoE burst.",
          "Blur bij Shadow Crash als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on the banish cast — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the shadow adds cluster for ranged AoE burst.",
          "Blur during Shadow Crash as primary defensive — two charges with Demonic Resilience."],
      da:["Disrupt på banish-castet — du er semi-ranged, altid i rækkevidde.",
          "Hurl Glaive + Fel Barrage på skygge-adds-klyngen til ranged AoE burst.",
          "Blur under Shadow Crash som primær defensiv — to charges med Demonic Resilience."]
    },

    'druid-feral': {
      nl:["Skull Bash op de banish-cast — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de shadow adds cluster.",
          "Survival Instincts bij Shadow Crash als persoonlijk defensief — twee charges."],
      en:["Skull Bash on the banish cast — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the shadow adds cluster.",
          "Survival Instincts during Shadow Crash as personal defensive — two charges."],
      da:["Skull Bash på banish-castet — kort cooldown, altid i melee.",
          "Primal Wrath eller Swipe til AoE cleave på skygge-adds-klyngen.",
          "Survival Instincts under Shadow Crash som personligt defensiv — to charges."]
    },

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op de banish-cast — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Shadow Crash als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the banish cast — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Shadow Crash as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på banish-castet — Evoker CC-toolkit.",
          "Aktivér Ebon Might + Breath of Eons på det store pull til maksimal gruppebuff.",
          "Obsidian Scales under Shadow Crash som personligt defensiv."]
    },

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op de banish-cast — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Shadow Crash als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the banish cast — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Shadow Crash as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på banish-castet — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge på det store pull til maksimal burst.",
          "Obsidian Scales under Shadow Crash som personligt defensiv."]
    },

    'hunter-survival': {
      nl:["Counter Shot op de banish-cast — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de shadow adds cluster.",
          "Aspect of the Turtle bij Shadow Crash als noodimuniteit."],
      en:["Counter Shot on the banish cast — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the shadow adds cluster.",
          "Aspect of the Turtle during Shadow Crash as emergency immunity."],
      da:["Counter Shot på banish-castet — du er mobil og har altid et ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb til burst AoE på skygge-adds-klyngen.",
          "Aspect of the Turtle under Shadow Crash som nødimmunitet."]
    },

    'mage-arcane': {
      nl:["Counterspell op de banish-cast — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Shadow Crash als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on the banish cast — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Shadow Crash as emergency immunity — Arcane Mages are glass cannons, use it wisely."],
      da:["Counterspell på banish-castet — du har den bedste interrupt af alle mages.",
          "Gem Arcane Surge til store pulls eller Bloodlust-vinduet til maksimal burst.",
          "Ice Block under Shadow Crash som nødimmunitet — Arcane Mages er glaskanoner, brug det fornuftigt."]
    },

    'mage-fire': {
      nl:["Counterspell op de banish-cast — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Shadow Crash als noodimuniteit."],
      en:["Counterspell on the banish cast — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Shadow Crash as emergency immunity."],
      da:["Counterspell på banish-castet — essentielt for enhver Mage.",
          "Combustion + Pyroclasm til maksimal burst på store pulls.",
          "Ice Block under Shadow Crash som nødimmunitet."]
    },

    'priest-shadow': {
      nl:["Silence op de banish-cast — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Shadow Crash voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on the banish cast — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Shadow Crash for 75% damage reduction — best personal defensive of all clothies."],
      da:["Silence på banish-castet — kombineret med Mind Blast som ranged interrupt.",
          "Void Eruption + Devouring Plague til burst på store pulls.",
          "Dispersion under Shadow Crash til 75% skadereduktion — bedste personlige defensiv af alle clothies."]
    },

    'rogue-assassination': {
      nl:["Kick op de banish-cast — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Shadow Crash voor 100% melee-ontwijking."],
      en:["Kick on the banish cast — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Shadow Crash for 100% melee dodge."],
      da:["Kick på banish-castet — roter med andre melee-interrupts.",
          "Deathmark + Shiv til maksimal single-target burst; Fan of Knives til AoE.",
          "Evasion under Shadow Crash til 100% melee-undvigelse."]
    },

    'rogue-subtlety': {
      nl:["Kick op de banish-cast — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Shadow Crash voor 100% melee-ontwijking."],
      en:["Kick on the banish cast — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Shadow Crash for 100% melee dodge."],
      da:["Kick på banish-castet — roter med andre melee-interrupts.",
          "Shadow Blades + Symbols of Death til maksimal burst i Stealth-vinduet.",
          "Evasion under Shadow Crash til 100% melee-undvigelse."]
    },

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op de banish-cast — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Shadow Crash voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on the banish cast — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Shadow Crash for 40% damage reduction and interrupt immunity."],
      da:["Spell Lock (via Felhunter) på banish-castet — dit eneste pålidelige interrupt.",
          "Malefic Rapture til AoE burst, når flere mål er fulde af DoTs.",
          "Unending Resolve under Shadow Crash til 40% skadereduktion og interrupt-immunitet."]
    },

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op de banish-cast — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de shadow adds cluster.",
          "Unending Resolve bij Shadow Crash voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the banish cast — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the shadow adds cluster.",
          "Unending Resolve during Shadow Crash for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på banish-castet — essentielt i høje keys.",
          "Summon Demonic Tyrant + Implosion til maksimal AoE burst på skygge-adds-klyngen.",
          "Unending Resolve under Shadow Crash til 40% skadereduktion."]
    },

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op de banish-cast — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Shadow Crash voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the banish cast — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Shadow Crash for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på banish-castet — dit eneste interrupt.",
          "Summon Infernal + Channel Demonfire til burst på store pulls.",
          "Unending Resolve under Shadow Crash til 40% skadereduktion."]
    }},
  // ── MAGISTERS' TERRACE ── boss 0 ──
  'magisters-terrace:0:tank': {
    'paladin-protection': {
      nl:["Divine Toll voor AoE-taunt op de arcane constructs bij de pull.",
          "Shield of the Righteous spam tijdens Arcane Surge — dit is de schade-piek.",
          "Avenger's Shield om Arcane Channeling te onderbreken."],
      en:["Divine Toll for AoE taunt on the arcane constructs at the pull.",
          "Shield of the Righteous spam during Arcane Surge — this is the damage spike.",
          "Avenger's Shield to interrupt Arcane Channeling."],
      da:["Divine Toll til AoE-taunt på arcane constructs ved pull.",
          "Shield of the Righteous spam under Arcane Surge — dette er skadespidsen.",
          "Avenger's Shield til at afbryde Arcane Channeling."]
    }
  ,
    'warrior-protection': {
      nl:["Spell Reflection op de arcane cast voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Arcane Barrage als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on the arcane cast for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Arcane Barrage as emergency; Rallying Cry for the group."],
      da:["Spell Reflection på arkane-castet til fuld stavelse-immunitet.",
          "Shield Block uptime er kritisk — hold den aktiv så konsekvent som muligt.",
          "Last Stand under Arcane Barrage som nødknap; Rallying Cry til gruppen."]
    },
    'monk-brewmaster': {
      nl:["Spear Hand Strike op de arcane cast — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Arcane Barrage als primaire tank-cooldown."],
      en:["Spear Hand Strike on the arcane cast — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Arcane Barrage as primary tank cooldown."],
      da:["Spear Hand Strike på arkane-castet — kombineret med høj mobilitet altid tilgængelig.",
          "Stagger er din kernemekanik — brug Purifying Brew, når Stagger bliver rød.",
          "Fortifying Brew under Arcane Barrage som primær tank-cooldown."]
    },
    'deathknight-blood': {
      nl:["Mind Freeze op de arcane cast — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Arcane Barrage als primaire tank-cooldown."],
      en:["Mind Freeze on the arcane cast — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Arcane Barrage as primary tank cooldown."],
      da:["Mind Freeze på arkane-castet — kombineret med Death Grip altid tilgængelig.",
          "Death Strike er din kernemekanik — brug den efter at have taget skade til maksimal self-healing.",
          "Vampiric Blood under Arcane Barrage som primær tank-cooldown."]
    }},
  'magisters-terrace:0:heal': {
    'druid-restoration': {
      nl:["Efflorescence permanent onder de melee-cluster — constante AoE healing tijdens arcane ticks.",
          "Ironbark op de tank tijdens Arcane Surge.",
          "Switch naar Cat Form tijdens lage-schade fasen voor extra damage."],
      en:["Keep Efflorescence permanently under the melee cluster — constant AoE healing during arcane ticks.",
          "Ironbark on tank during Arcane Surge.",
          "Switch to Cat Form during low-damage phases for extra damage."],
      da:["Hold Efflorescence permanent under melee-klyngen — konstant AoE-healing under arcane ticks.",
          "Ironbark på tanken under Arcane Surge.",
          "Skift til Cat Form under lav-skadsfaser for ekstra skade."]
    }
  ,
    'monk-mistweaver': {
      nl:["Revival bij Arcane Barrage voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Arcane Barrage for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."],
      da:["Revival under Arcane Barrage til massiv gruppe-healing i én global.",
          "Spinning Crane Kick + Vivify til effektiv AoE-healing under høj skade.",
          "Life Cocoon på tanken under de kraftigste angreb — unik absorb-cooldown."]
    },
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Arcane Barrage op de hele groep plaatsen.",
          "Power Word: Barrier bij Arcane Barrage voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Arcane Barrage.",
          "Power Word: Barrier during Arcane Barrage for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."],
      da:["Disc spiller proaktivt — placer Atonement på hele gruppen inden Arcane Barrage.",
          "Power Word: Barrier under Arcane Barrage til gruppe-skadereduktion.",
          "Schism + Penance til burst-healing via Atonement på flere mål simultant."]
    },

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Arcane Barrage-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Arcane Barrage mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."],
      da:["Rescue eller Hover til hurtigt at undslippe Arcane Barrage-mekanikker.",
          "Gem Rewind til den kraftigste gruppeskade — unik tidsomvendt healing.",
          "Dream Breath til AoE-healing på flere spillere simultant."]
    },

    'priest-holy': {
      nl:["Symbol of Hope bij Arcane Barrage voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Arcane Barrage for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."],
      da:["Symbol of Hope under Arcane Barrage til gruppe-mana-gendannelse — unikt for Holy Priest.",
          "Holy Word: Sanctify til øjeblikkelig AoE-healing under høje skadespidser.",
          "Guardian Spirit på tanken ved kritiske øjeblikke — forhindrer et dræbende slag."]
    },

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Arcane Barrage voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Arcane Barrage for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."],
      da:["Hold Healing Rain permanent på gruppen — din base AoE-healing.",
          "Spirit Link Totem under Arcane Barrage til gruppe-skadeudligning — unikt i spillet.",
          "Gem Ancestral Protection Totem til det sværeste pull — anden chance for livet."]
    }},
  'magisters-terrace:0:dps': {
    'hunter-beastmastery': {
      nl:["Volledig mobiel bij arcane explosions — jij hebt nul DPS-verlies bij bewegen.",
          "Counter Shot op Arcane Channeling.",
          "Bestial Wrath + Primal Rage op de pull voor maximale openingsschade."],
      en:["Fully mobile during arcane explosions — you have zero DPS loss while moving.",
          "Counter Shot on Arcane Channeling.",
          "Bestial Wrath + Primal Rage on the pull for maximum opening damage."],
      da:["Fuldt mobil under arcane explosions — du har nul DPS-tab ved bevægelse.",
          "Counter Shot på Arcane Channeling.",
          "Bestial Wrath + Primal Rage på pull for maksimal åbningsskade."]
    },
    'shaman-elemental': {
      nl:["Wind Shear op Arcane Channeling — interrupt met hoge prioriteit.",
          "Spiritwalker's Grace gebruiken tijdens bewegingsintensieve fasen.",
          "Stormkeeper bewaren voor het Bloodlust-venster voor de beste AoE."],
      en:["Wind Shear on Arcane Channeling — high priority interrupt.",
          "Use Spiritwalker's Grace during movement-heavy phases.",
          "Save Stormkeeper for the Bloodlust window for best AoE."],
      da:["Wind Shear på Arcane Channeling — interrupt med høj prioritet.",
          "Brug Spiritwalker's Grace under bevægelses-intensive faser.",
          "Gem Stormkeeper til Bloodlust-vindue for bedste AoE."]
    }
  ,
    'warrior-fury': {
      nl:["Pummel op de arcane cast — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Arcane Barrage — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on the arcane cast — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Arcane Barrage — one of the best group cooldowns in the game."],
      da:["Pummel på arkane-castet — kort cooldown, brug den konsekvent.",
          "Recklessness + Bladestorm på store pulls til maksimal AoE burst.",
          "Rallying Cry til gruppen under Arcane Barrage — et af de bedste gruppe-cooldowns i spillet."]
    },
    'warrior-arms': {
      nl:["Pummel op de arcane cast — wissel af met de tank.",
          "Bladestorm op de mana adds cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Arcane Barrage als groeps-defensief."],
      en:["Pummel on the arcane cast — rotate with the tank.",
          "Bladestorm on the mana adds cluster for AoE cleave.",
          "Rallying Cry for the group during Arcane Barrage as group defensive."],
      da:["Pummel på arkane-castet — roter med tanken.",
          "Bladestorm på mana-adds-klyngen til AoE cleave.",
          "Rallying Cry til gruppen under Arcane Barrage som gruppe-defensiv."]
    },
    'mage-frost': {
      nl:["Counterspell op de arcane cast — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de mana adds cluster voor maximale AoE.",
          "Ice Block bij Arcane Barrage als persoonlijke noodimuniteit."],
      en:["Counterspell on the arcane cast — your interrupt is essential.",
          "Frozen Orb + Blizzard on the mana adds cluster for maximum AoE.",
          "Ice Block during Arcane Barrage as personal emergency immunity."],
      da:["Counterspell på arkane-castet — dit interrupt er uundværligt.",
          "Frozen Orb + Blizzard på mana-adds-klyngen til maksimal AoE.",
          "Ice Block under Arcane Barrage som personlig nødimmunitet."]
    },
    'rogue-outlaw': {
      nl:["Kick op de arcane cast — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de mana adds cluster.",
          "Crimson Vial + Feint bij Arcane Barrage voor personal survival."],
      en:["Kick on the arcane cast — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the mana adds cluster.",
          "Crimson Vial + Feint during Arcane Barrage for personal survival."],
      da:["Kick på arkane-castet — roter med andre interrupts.",
          "Blade Flurry til AoE cleave på mana-adds-klyngen.",
          "Crimson Vial + Feint under Arcane Barrage til personlig overlevelse."]
    },
    'monk-windwalker': {
      nl:["Spear Hand Strike op de arcane cast — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de mana adds cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Arcane Barrage voor personal defensive."],
      en:["Spear Hand Strike on the arcane cast — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the mana adds cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Arcane Barrage for personal defensive."],
      da:["Spear Hand Strike på arkane-castet — kombineret med din høje mobilitet altid tilgængelig.",
          "Spinning Crane Kick + Fist of the White Tiger på mana-adds-klyngen til burst AoE.",
          "Diffuse Magic eller Dampen Harm under Arcane Barrage til personlig defensiv."]
    },
    'shaman-enhancement': {
      nl:["Wind Shear op de arcane cast — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Arcane Barrage als persoonlijk defensief."],
      en:["Wind Shear on the arcane cast — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Arcane Barrage as personal defensive."],
      da:["Wind Shear på arkane-castet — kort cooldown, tag interrupt-ansvar.",
          "Feral Spirit + Doom Winds på store pulls til maksimal AoE burst.",
          "Astral Shift under Arcane Barrage som personligt defensiv."]
    },
    'hunter-marksmanship': {
      nl:["Counter Shot op de arcane cast — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de mana adds cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Arcane Barrage als volledige immuniteit."],
      en:["Counter Shot on the arcane cast — fully ranged, always in range.",
          "Volley + Rapid Fire on the mana adds cluster for massive ranged AoE.",
          "Aspect of the Turtle during Arcane Barrage for full immunity."],
      da:["Counter Shot på arkane-castet — fuldt ranged, altid i rækkevidde.",
          "Volley + Rapid Fire på mana-adds-klyngen til massiv ranged AoE.",
          "Aspect of the Turtle under Arcane Barrage til fuld immunitet."]
    },
    'deathknight-unholy': {
      nl:["Mind Freeze op de arcane cast — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de mana adds cluster.",
          "Anti-Magic Shell bij Arcane Barrage voor magische schade-immuniteit."],
      en:["Mind Freeze on the arcane cast — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the mana adds cluster.",
          "Anti-Magic Shell during Arcane Barrage for magic damage immunity."],
      da:["Mind Freeze på arkane-castet — dit interrupt.",
          "Army of the Dead + Apocalypse til maksimal AoE burst på mana-adds-klyngen.",
          "Anti-Magic Shell under Arcane Barrage til magisk skadeimmunitet."]
    },

    'deathknight-frost': {
      nl:["Mind Freeze op de arcane cast — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de mana adds cluster voor AoE burst.",
          "Anti-Magic Shell bij Arcane Barrage voor magische schade-immuniteit."],
      en:["Mind Freeze on the arcane cast — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the mana adds cluster for AoE burst.",
          "Anti-Magic Shell during Arcane Barrage for magic damage immunity."],
      da:["Mind Freeze på arkane-castet — dit interrupt.",
          "Pillar of Frost + Frostwyrm's Fury på mana-adds-klyngen til AoE burst.",
          "Anti-Magic Shell under Arcane Barrage til magisk skadeimmunitet."]
    },

    'demonhunter-devourer': {
      nl:["Disrupt op de arcane cast — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de mana adds cluster voor ranged AoE burst.",
          "Blur bij Arcane Barrage als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on the arcane cast — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the mana adds cluster for ranged AoE burst.",
          "Blur during Arcane Barrage as primary defensive — two charges with Demonic Resilience."],
      da:["Disrupt på arkane-castet — du er semi-ranged, altid i rækkevidde.",
          "Hurl Glaive + Fel Barrage på mana-adds-klyngen til ranged AoE burst.",
          "Blur under Arcane Barrage som primær defensiv — to charges med Demonic Resilience."]
    },

    'druid-feral': {
      nl:["Skull Bash op de arcane cast — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de mana adds cluster.",
          "Survival Instincts bij Arcane Barrage als persoonlijk defensief — twee charges."],
      en:["Skull Bash on the arcane cast — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the mana adds cluster.",
          "Survival Instincts during Arcane Barrage as personal defensive — two charges."],
      da:["Skull Bash på arkane-castet — kort cooldown, altid i melee.",
          "Primal Wrath eller Swipe til AoE cleave på mana-adds-klyngen.",
          "Survival Instincts under Arcane Barrage som personligt defensiv — to charges."]
    },

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op de arcane cast — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Arcane Barrage als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the arcane cast — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Arcane Barrage as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på arkane-castet — Evoker CC-toolkit.",
          "Aktivér Ebon Might + Breath of Eons på det store pull til maksimal gruppebuff.",
          "Obsidian Scales under Arcane Barrage som personligt defensiv."]
    },

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op de arcane cast — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Arcane Barrage als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the arcane cast — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Arcane Barrage as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på arkane-castet — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge på det store pull til maksimal burst.",
          "Obsidian Scales under Arcane Barrage som personligt defensiv."]
    },

    'hunter-survival': {
      nl:["Counter Shot op de arcane cast — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de mana adds cluster.",
          "Aspect of the Turtle bij Arcane Barrage als noodimuniteit."],
      en:["Counter Shot on the arcane cast — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the mana adds cluster.",
          "Aspect of the Turtle during Arcane Barrage as emergency immunity."],
      da:["Counter Shot på arkane-castet — du er mobil og har altid et ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb til burst AoE på mana-adds-klyngen.",
          "Aspect of the Turtle under Arcane Barrage som nødimmunitet."]
    },

    'mage-arcane': {
      nl:["Counterspell op de arcane cast — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Arcane Barrage als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on the arcane cast — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Arcane Barrage as emergency immunity — Arcane Mages are glass cannons, use it wisely."],
      da:["Counterspell på arkane-castet — du har den bedste interrupt af alle mages.",
          "Gem Arcane Surge til store pulls eller Bloodlust-vinduet til maksimal burst.",
          "Ice Block under Arcane Barrage som nødimmunitet — Arcane Mages er glaskanoner, brug det fornuftigt."]
    },

    'mage-fire': {
      nl:["Counterspell op de arcane cast — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Arcane Barrage als noodimuniteit."],
      en:["Counterspell on the arcane cast — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Arcane Barrage as emergency immunity."],
      da:["Counterspell på arkane-castet — essentielt for enhver Mage.",
          "Combustion + Pyroclasm til maksimal burst på store pulls.",
          "Ice Block under Arcane Barrage som nødimmunitet."]
    },

    'priest-shadow': {
      nl:["Silence op de arcane cast — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Arcane Barrage voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on the arcane cast — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Arcane Barrage for 75% damage reduction — best personal defensive of all clothies."],
      da:["Silence på arkane-castet — kombineret med Mind Blast som ranged interrupt.",
          "Void Eruption + Devouring Plague til burst på store pulls.",
          "Dispersion under Arcane Barrage til 75% skadereduktion — bedste personlige defensiv af alle clothies."]
    },

    'rogue-assassination': {
      nl:["Kick op de arcane cast — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Arcane Barrage voor 100% melee-ontwijking."],
      en:["Kick on the arcane cast — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Arcane Barrage for 100% melee dodge."],
      da:["Kick på arkane-castet — roter med andre melee-interrupts.",
          "Deathmark + Shiv til maksimal single-target burst; Fan of Knives til AoE.",
          "Evasion under Arcane Barrage til 100% melee-undvigelse."]
    },

    'rogue-subtlety': {
      nl:["Kick op de arcane cast — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Arcane Barrage voor 100% melee-ontwijking."],
      en:["Kick on the arcane cast — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Arcane Barrage for 100% melee dodge."],
      da:["Kick på arkane-castet — roter med andre melee-interrupts.",
          "Shadow Blades + Symbols of Death til maksimal burst i Stealth-vinduet.",
          "Evasion under Arcane Barrage til 100% melee-undvigelse."]
    },

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op de arcane cast — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Arcane Barrage voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on the arcane cast — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Arcane Barrage for 40% damage reduction and interrupt immunity."],
      da:["Spell Lock (via Felhunter) på arkane-castet — dit eneste pålidelige interrupt.",
          "Malefic Rapture til AoE burst, når flere mål er fulde af DoTs.",
          "Unending Resolve under Arcane Barrage til 40% skadereduktion og interrupt-immunitet."]
    },

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op de arcane cast — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de mana adds cluster.",
          "Unending Resolve bij Arcane Barrage voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the arcane cast — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the mana adds cluster.",
          "Unending Resolve during Arcane Barrage for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på arkane-castet — essentielt i høje keys.",
          "Summon Demonic Tyrant + Implosion til maksimal AoE burst på mana-adds-klyngen.",
          "Unending Resolve under Arcane Barrage til 40% skadereduktion."]
    },

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op de arcane cast — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Arcane Barrage voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the arcane cast — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Arcane Barrage for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på arkane-castet — dit eneste interrupt.",
          "Summon Infernal + Channel Demonfire til burst på store pulls.",
          "Unending Resolve under Arcane Barrage til 40% skadereduktion."]
    }},
  // ── MAISARA CAVERNS ── boss 0 ──
  'maisara-caverns:0:tank': {
    'paladin-protection': {
      nl:["Mun'jin en Neloax scheiden — Avenger's Shield silencet de caster (Neloax) direct.",
          "Blessing of Protection op een DPS-speler die een gevaarlijk debuff heeft.",
          "Guardian of Ancient Kings tijdens de gecombineerde aanvalsfase."],
      en:["Separate Mun'jin and Neloax — Avenger's Shield silences the caster (Neloax) directly.",
          "Blessing of Protection on a DPS player with a dangerous debuff.",
          "Guardian of Ancient Kings during the combined attack phase."],
      da:["Adskil Mun'jin og Neloax — Avenger's Shield silencer casteren (Neloax) direkte.",
          "Blessing of Protection på en DPS-spiller med en farlig debuff.",
          "Guardian of Ancient Kings under den kombinerede angrebsfase."]
    }
  ,
    'warrior-protection': {
      nl:["Spell Reflection op de gift-cast voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Toxic Spew als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on the poison cast for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Toxic Spew as emergency; Rallying Cry for the group."],
      da:["Spell Reflection på gift-castet til fuld stavelse-immunitet.",
          "Shield Block uptime er kritisk — hold den aktiv så konsekvent som muligt.",
          "Last Stand under Toxic Spew som nødknap; Rallying Cry til gruppen."]
    },
    'monk-brewmaster': {
      nl:["Spear Hand Strike op de gift-cast — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Toxic Spew als primaire tank-cooldown."],
      en:["Spear Hand Strike on the poison cast — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Toxic Spew as primary tank cooldown."],
      da:["Spear Hand Strike på gift-castet — kombineret med høj mobilitet altid tilgængelig.",
          "Stagger er din kernemekanik — brug Purifying Brew, når Stagger bliver rød.",
          "Fortifying Brew under Toxic Spew som primær tank-cooldown."]
    },
    'deathknight-blood': {
      nl:["Mind Freeze op de gift-cast — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Toxic Spew als primaire tank-cooldown."],
      en:["Mind Freeze on the poison cast — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Toxic Spew as primary tank cooldown."],
      da:["Mind Freeze på gift-castet — kombineret med Death Grip altid tilgængelig.",
          "Death Strike er din kernemekanik — brug den efter at have taget skade til maksimal self-healing.",
          "Vampiric Blood under Toxic Spew som primær tank-cooldown."]
    }},
  'maisara-caverns:0:heal': {
    'druid-restoration': {
      nl:["Pre-HoT alle spelers vóór de gecombineerde aanvalsfase.",
          "Tranquility als beide bazen tegelijk hun abilities gebruiken.",
          "Cyclone op Neloax als ze onbeheersbare schade maakt."],
      en:["Pre-HoT all players before the combined attack phase.",
          "Tranquility when both bosses use abilities simultaneously.",
          "Cyclone on Neloax if she is dealing uncontrollable damage."],
      da:["Pre-HoT alle spillere før den kombinerede angrebsfase.",
          "Tranquility, når begge bosser bruger abilities simultant.",
          "Cyclone på Neloax, hvis hun laver ukontrollabel skade."]
    }
  ,
    'monk-mistweaver': {
      nl:["Revival bij Toxic Spew voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Toxic Spew for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."],
      da:["Revival under Toxic Spew til massiv gruppe-healing i én global.",
          "Spinning Crane Kick + Vivify til effektiv AoE-healing under høj skade.",
          "Life Cocoon på tanken under de kraftigste angreb — unik absorb-cooldown."]
    },
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Toxic Spew op de hele groep plaatsen.",
          "Power Word: Barrier bij Toxic Spew voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Toxic Spew.",
          "Power Word: Barrier during Toxic Spew for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."],
      da:["Disc spiller proaktivt — placer Atonement på hele gruppen inden Toxic Spew.",
          "Power Word: Barrier under Toxic Spew til gruppe-skadereduktion.",
          "Schism + Penance til burst-healing via Atonement på flere mål simultant."]
    },

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Toxic Spew-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Toxic Spew mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."],
      da:["Rescue eller Hover til hurtigt at undslippe Toxic Spew-mekanikker.",
          "Gem Rewind til den kraftigste gruppeskade — unik tidsomvendt healing.",
          "Dream Breath til AoE-healing på flere spillere simultant."]
    },

    'priest-holy': {
      nl:["Symbol of Hope bij Toxic Spew voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Toxic Spew for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."],
      da:["Symbol of Hope under Toxic Spew til gruppe-mana-gendannelse — unikt for Holy Priest.",
          "Holy Word: Sanctify til øjeblikkelig AoE-healing under høje skadespidser.",
          "Guardian Spirit på tanken ved kritiske øjeblikke — forhindrer et dræbende slag."]
    },

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Toxic Spew voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Toxic Spew for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."],
      da:["Hold Healing Rain permanent på gruppen — din base AoE-healing.",
          "Spirit Link Totem under Toxic Spew til gruppe-skadeudligning — unikt i spillet.",
          "Gem Ancestral Protection Totem til det sværeste pull — anden chance for livet."]
    }},
  'maisara-caverns:0:dps': {
    'hunter-beastmastery': {
      nl:["Beide bazen gelijkmatig aanvallen — Hunter's Mark op de baas met meer HP.",
          "Counter Shot op Neloax haar casts.",
          "Binding Shot om beide bazen even stil te houden voor AoE-burst."],
      en:["Attack both bosses evenly — Hunter's Mark on the boss with more HP.",
          "Counter Shot on Neloax's casts.",
          "Binding Shot to briefly root both bosses for AoE burst."],
      da:["Angrib begge bosser jævnt — Hunter's Mark på bossen med mest HP.",
          "Counter Shot på Neloax's casts.",
          "Binding Shot til kort at roote begge bosser til AoE-burst."]
    },
    'shaman-elemental': {
      nl:["Earthquake tussen de twee bazen voor maximale AoE-waarde.",
          "Wind Shear op Neloax — wissel af met de tank voor maximale uptime.",
          "Purge eventuele buffs van Mun'jin direct."],
      en:["Earthquake between the two bosses for maximum AoE value.",
          "Wind Shear on Neloax — alternate with the tank to maximise uptime.",
          "Purge any buffs from Mun'jin immediately."],
      da:["Earthquake mellem de to bosser for maksimal AoE-værdi.",
          "Wind Shear på Neloax — skiftes med tanken for at maksimere uptime.",
          "Purge eventuelle buffs fra Mun'jin med det samme."]
    }
  ,
    'warrior-fury': {
      nl:["Pummel op de gift-cast — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Toxic Spew — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on the poison cast — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Toxic Spew — one of the best group cooldowns in the game."],
      da:["Pummel på gift-castet — kort cooldown, brug den konsekvent.",
          "Recklessness + Bladestorm på store pulls til maksimal AoE burst.",
          "Rallying Cry til gruppen under Toxic Spew — et af de bedste gruppe-cooldowns i spillet."]
    },
    'warrior-arms': {
      nl:["Pummel op de gift-cast — wissel af met de tank.",
          "Bladestorm op de venomous adds cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Toxic Spew als groeps-defensief."],
      en:["Pummel on the poison cast — rotate with the tank.",
          "Bladestorm on the venomous adds cluster for AoE cleave.",
          "Rallying Cry for the group during Toxic Spew as group defensive."],
      da:["Pummel på gift-castet — roter med tanken.",
          "Bladestorm på giftige adds-klyngen til AoE cleave.",
          "Rallying Cry til gruppen under Toxic Spew som gruppe-defensiv."]
    },
    'mage-frost': {
      nl:["Counterspell op de gift-cast — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de venomous adds cluster voor maximale AoE.",
          "Ice Block bij Toxic Spew als persoonlijke noodimuniteit."],
      en:["Counterspell on the poison cast — your interrupt is essential.",
          "Frozen Orb + Blizzard on the venomous adds cluster for maximum AoE.",
          "Ice Block during Toxic Spew as personal emergency immunity."],
      da:["Counterspell på gift-castet — dit interrupt er uundværligt.",
          "Frozen Orb + Blizzard på giftige adds-klyngen til maksimal AoE.",
          "Ice Block under Toxic Spew som personlig nødimmunitet."]
    },
    'rogue-outlaw': {
      nl:["Kick op de gift-cast — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de venomous adds cluster.",
          "Crimson Vial + Feint bij Toxic Spew voor personal survival."],
      en:["Kick on the poison cast — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the venomous adds cluster.",
          "Crimson Vial + Feint during Toxic Spew for personal survival."],
      da:["Kick på gift-castet — roter med andre interrupts.",
          "Blade Flurry til AoE cleave på giftige adds-klyngen.",
          "Crimson Vial + Feint under Toxic Spew til personlig overlevelse."]
    },
    'monk-windwalker': {
      nl:["Spear Hand Strike op de gift-cast — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de venomous adds cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Toxic Spew voor personal defensive."],
      en:["Spear Hand Strike on the poison cast — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the venomous adds cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Toxic Spew for personal defensive."],
      da:["Spear Hand Strike på gift-castet — kombineret med din høje mobilitet altid tilgængelig.",
          "Spinning Crane Kick + Fist of the White Tiger på giftige adds-klyngen til burst AoE.",
          "Diffuse Magic eller Dampen Harm under Toxic Spew til personlig defensiv."]
    },
    'shaman-enhancement': {
      nl:["Wind Shear op de gift-cast — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Toxic Spew als persoonlijk defensief."],
      en:["Wind Shear on the poison cast — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Toxic Spew as personal defensive."],
      da:["Wind Shear på gift-castet — kort cooldown, tag interrupt-ansvar.",
          "Feral Spirit + Doom Winds på store pulls til maksimal AoE burst.",
          "Astral Shift under Toxic Spew som personligt defensiv."]
    },
    'hunter-marksmanship': {
      nl:["Counter Shot op de gift-cast — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de venomous adds cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Toxic Spew als volledige immuniteit."],
      en:["Counter Shot on the poison cast — fully ranged, always in range.",
          "Volley + Rapid Fire on the venomous adds cluster for massive ranged AoE.",
          "Aspect of the Turtle during Toxic Spew for full immunity."],
      da:["Counter Shot på gift-castet — fuldt ranged, altid i rækkevidde.",
          "Volley + Rapid Fire på giftige adds-klyngen til massiv ranged AoE.",
          "Aspect of the Turtle under Toxic Spew til fuld immunitet."]
    },
    'deathknight-unholy': {
      nl:["Mind Freeze op de gift-cast — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de venomous adds cluster.",
          "Anti-Magic Shell bij Toxic Spew voor magische schade-immuniteit."],
      en:["Mind Freeze on the poison cast — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the venomous adds cluster.",
          "Anti-Magic Shell during Toxic Spew for magic damage immunity."],
      da:["Mind Freeze på gift-castet — dit interrupt.",
          "Army of the Dead + Apocalypse til maksimal AoE burst på giftige adds-klyngen.",
          "Anti-Magic Shell under Toxic Spew til magisk skadeimmunitet."]
    },

    'deathknight-frost': {
      nl:["Mind Freeze op de gift-cast — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de venomous adds cluster voor AoE burst.",
          "Anti-Magic Shell bij Toxic Spew voor magische schade-immuniteit."],
      en:["Mind Freeze on the poison cast — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the venomous adds cluster for AoE burst.",
          "Anti-Magic Shell during Toxic Spew for magic damage immunity."],
      da:["Mind Freeze på gift-castet — dit interrupt.",
          "Pillar of Frost + Frostwyrm's Fury på giftige adds-klyngen til AoE burst.",
          "Anti-Magic Shell under Toxic Spew til magisk skadeimmunitet."]
    },

    'demonhunter-devourer': {
      nl:["Disrupt op de gift-cast — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de venomous adds cluster voor ranged AoE burst.",
          "Blur bij Toxic Spew als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on the poison cast — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the venomous adds cluster for ranged AoE burst.",
          "Blur during Toxic Spew as primary defensive — two charges with Demonic Resilience."],
      da:["Disrupt på gift-castet — du er semi-ranged, altid i rækkevidde.",
          "Hurl Glaive + Fel Barrage på giftige adds-klyngen til ranged AoE burst.",
          "Blur under Toxic Spew som primær defensiv — to charges med Demonic Resilience."]
    },

    'druid-feral': {
      nl:["Skull Bash op de gift-cast — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de venomous adds cluster.",
          "Survival Instincts bij Toxic Spew als persoonlijk defensief — twee charges."],
      en:["Skull Bash on the poison cast — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the venomous adds cluster.",
          "Survival Instincts during Toxic Spew as personal defensive — two charges."],
      da:["Skull Bash på gift-castet — kort cooldown, altid i melee.",
          "Primal Wrath eller Swipe til AoE cleave på giftige adds-klyngen.",
          "Survival Instincts under Toxic Spew som personligt defensiv — to charges."]
    },

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op de gift-cast — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Toxic Spew als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the poison cast — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Toxic Spew as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på gift-castet — Evoker CC-toolkit.",
          "Aktivér Ebon Might + Breath of Eons på det store pull til maksimal gruppebuff.",
          "Obsidian Scales under Toxic Spew som personligt defensiv."]
    },

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op de gift-cast — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Toxic Spew als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the poison cast — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Toxic Spew as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på gift-castet — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge på det store pull til maksimal burst.",
          "Obsidian Scales under Toxic Spew som personligt defensiv."]
    },

    'hunter-survival': {
      nl:["Counter Shot op de gift-cast — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de venomous adds cluster.",
          "Aspect of the Turtle bij Toxic Spew als noodimuniteit."],
      en:["Counter Shot on the poison cast — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the venomous adds cluster.",
          "Aspect of the Turtle during Toxic Spew as emergency immunity."],
      da:["Counter Shot på gift-castet — du er mobil og har altid et ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb til burst AoE på giftige adds-klyngen.",
          "Aspect of the Turtle under Toxic Spew som nødimmunitet."]
    },

    'mage-arcane': {
      nl:["Counterspell op de gift-cast — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Toxic Spew als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on the poison cast — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Toxic Spew as emergency immunity — Arcane Mages are glass cannons, use it wisely."],
      da:["Counterspell på gift-castet — du har den bedste interrupt af alle mages.",
          "Gem Arcane Surge til store pulls eller Bloodlust-vinduet til maksimal burst.",
          "Ice Block under Toxic Spew som nødimmunitet — Arcane Mages er glaskanoner, brug det fornuftigt."]
    },

    'mage-fire': {
      nl:["Counterspell op de gift-cast — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Toxic Spew als noodimuniteit."],
      en:["Counterspell on the poison cast — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Toxic Spew as emergency immunity."],
      da:["Counterspell på gift-castet — essentielt for enhver Mage.",
          "Combustion + Pyroclasm til maksimal burst på store pulls.",
          "Ice Block under Toxic Spew som nødimmunitet."]
    },

    'priest-shadow': {
      nl:["Silence op de gift-cast — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Toxic Spew voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on the poison cast — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Toxic Spew for 75% damage reduction — best personal defensive of all clothies."],
      da:["Silence på gift-castet — kombineret med Mind Blast som ranged interrupt.",
          "Void Eruption + Devouring Plague til burst på store pulls.",
          "Dispersion under Toxic Spew til 75% skadereduktion — bedste personlige defensiv af alle clothies."]
    },

    'rogue-assassination': {
      nl:["Kick op de gift-cast — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Toxic Spew voor 100% melee-ontwijking."],
      en:["Kick on the poison cast — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Toxic Spew for 100% melee dodge."],
      da:["Kick på gift-castet — roter med andre melee-interrupts.",
          "Deathmark + Shiv til maksimal single-target burst; Fan of Knives til AoE.",
          "Evasion under Toxic Spew til 100% melee-undvigelse."]
    },

    'rogue-subtlety': {
      nl:["Kick op de gift-cast — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Toxic Spew voor 100% melee-ontwijking."],
      en:["Kick on the poison cast — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Toxic Spew for 100% melee dodge."],
      da:["Kick på gift-castet — roter med andre melee-interrupts.",
          "Shadow Blades + Symbols of Death til maksimal burst i Stealth-vinduet.",
          "Evasion under Toxic Spew til 100% melee-undvigelse."]
    },

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op de gift-cast — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Toxic Spew voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on the poison cast — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Toxic Spew for 40% damage reduction and interrupt immunity."],
      da:["Spell Lock (via Felhunter) på gift-castet — dit eneste pålidelige interrupt.",
          "Malefic Rapture til AoE burst, når flere mål er fulde af DoTs.",
          "Unending Resolve under Toxic Spew til 40% skadereduktion og interrupt-immunitet."]
    },

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op de gift-cast — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de venomous adds cluster.",
          "Unending Resolve bij Toxic Spew voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the poison cast — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the venomous adds cluster.",
          "Unending Resolve during Toxic Spew for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på gift-castet — essentielt i høje keys.",
          "Summon Demonic Tyrant + Implosion til maksimal AoE burst på giftige adds-klyngen.",
          "Unending Resolve under Toxic Spew til 40% skadereduktion."]
    },

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op de gift-cast — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Toxic Spew voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the poison cast — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Toxic Spew for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på gift-castet — dit eneste interrupt.",
          "Summon Infernal + Channel Demonfire til burst på store pulls.",
          "Unending Resolve under Toxic Spew til 40% skadereduktion."]
    }},
  // ── MAISARA CAVERNS ── eindbaas (index 2) ──
  'maisara-caverns:2:tank': {
    'paladin-protection': {
      nl:["Vessel of Souls heeft zware interrupt-behoefte — Divine Toll voor meerdere interrupts tegelijk.",
          "Blessing of Spellwarding op jezelf voor de magische burst-fase.",
          "Ardent Defender bewaren voor Fase 2 wanneer add-druk het hoogst is."],
      en:["Vessel of Souls has heavy interrupt needs — Divine Toll for multiple interrupts simultaneously.",
          "Blessing of Spellwarding on yourself for the magic burst phase.",
          "Save Ardent Defender for Phase 2 when add pressure is highest."],
      da:["Vessel of Souls har store interrupt-behov — Divine Toll til multiple interrupts simultant.",
          "Blessing of Spellwarding på dig selv til den magiske burstfase.",
          "Gem Ardent Defender til Fase 2, når add-presset er højest."]
    }
  ,
    'demonhunter-vengeance': {
      nl:["Sigil of Silence op de soul-adds voor een directe groeps-lockdown.",
          "Fiery Brand op de Vessel zelf voor tank-survival tijdens hoge stacks.",
          "Metamorphosis bewaren voor Fase 2 — dan is de schade het zwaarst."],
      en:["Sigil of Silence on the soul adds for an immediate group lockdown.",
          "Fiery Brand on the Vessel itself for tank survival during high stacks.",
          "Save Metamorphosis for Phase 2 — that is when damage is heaviest."],
      da:["Sigil of Silence på sjæle-adds til en øjeblikkelig gruppe-lockdown.",
          "Fiery Brand på selve Vessel til tank-overlevelse under høje stacks.",
          "Gem Metamorphosis til Fase 2 — det er der, skaden er kraftigst."]
    },
    'druid-guardian': {
      nl:["Incapacitating Roar op de soul-adds bij spawn voor een snelle stop.",
          "Survival Instincts in Fase 2 wanneer de schade piekt.",
          "Maim op een single add die dreigt te ontsnappen naar de healer."],
      en:["Incapacitating Roar on soul adds at spawn for a quick stop.",
          "Survival Instincts in Phase 2 when damage spikes.",
          "Maim on a single add that threatens to escape to the healer."],
      da:["Incapacitating Roar på sjæle-adds ved spawn for et hurtigt stop.",
          "Survival Instincts i Fase 2, når skaden topper.",
          "Maim på en enkelt add, der truer med at slippe væk til healeren."]
    },
    'warrior-protection': {
      nl:["Spell Reflection op soul casts voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Fase 2 als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on soul casts for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Phase 2 as emergency; Rallying Cry for the group."],
      da:["Spell Reflection på sjæle-casts til fuld stavelse-immunitet.",
          "Shield Block uptime er kritisk — hold den aktiv så konsekvent som muligt.",
          "Last Stand under Fase 2 som nødknap; Rallying Cry til gruppen."]
    },
    'monk-brewmaster': {
      nl:["Spear Hand Strike op soul casts — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Fase 2 als primaire tank-cooldown."],
      en:["Spear Hand Strike on soul casts — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Phase 2 as primary tank cooldown."],
      da:["Spear Hand Strike på sjæle-casts — kombineret med høj mobilitet altid tilgængelig.",
          "Stagger er din kernemekanik — brug Purifying Brew, når Stagger bliver rød.",
          "Fortifying Brew under Fase 2 som primær tank-cooldown."]
    },
    'deathknight-blood': {
      nl:["Mind Freeze op soul casts — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Fase 2 als primaire tank-cooldown."],
      en:["Mind Freeze on soul casts — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Phase 2 as primary tank cooldown."],
      da:["Mind Freeze på sjæle-casts — kombineret med Death Grip altid tilgængelig.",
          "Death Strike er din kernemekanik — brug den efter at have taget skade til maksimal self-healing.",
          "Vampiric Blood under Fase 2 som primær tank-cooldown."]
    }},
  'maisara-caverns:2:heal': {
    'druid-restoration': {
      nl:["Tranquility bewaren voor Fase 2 — het grootste healing-moment van de dungeon.",
          "Ironbark op de tank bij Soul Corruption stacks.",
          "Stampeding Roar om snel weg te komen van zielplassen."],
      en:["Save Tranquility for Phase 2 — the biggest healing moment of the dungeon.",
          "Ironbark on tank during Soul Corruption stacks.",
          "Stampeding Roar to quickly move away from soul puddles."],
      da:["Gem Tranquility til Fase 2 — det største healingøjeblik i dungeons.",
          "Ironbark på tanken ved Soul Corruption-stacks.",
          "Stampeding Roar for hurtigt at komme væk fra sjælepytter."]
    }
  ,
    'paladin-holy': {
      nl:["Aura Mastery bewaren voor Fase 2 — de zwaarste groepsschade van de dungeon.",
          "Divine Toll op de tank bij hoge Soul Corruption stacks voor directe HP-recovery.",
          "Blessing of Protection op een speler die per ongeluk een zielsplas instapt."],
      en:["Save Aura Mastery for Phase 2 — the heaviest group damage of the dungeon.",
          "Divine Toll on the tank with high Soul Corruption stacks for immediate HP recovery.",
          "Blessing of Protection on a player who accidentally steps in a soul puddle."],
      da:["Gem Aura Mastery til Fase 2 — den kraftigste gruppeskade i dungeons.",
          "Divine Toll på tanken med høje Soul Corruption-stacks til umiddelbar HP-gendannelse.",
          "Blessing of Protection på en spiller, der ved et uheld træder i en sjælepyt."]
    },
    'monk-mistweaver': {
      nl:["Revival bij Fase 2 voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Phase 2 for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."],
      da:["Revival under Fase 2 til massiv gruppe-healing i én global.",
          "Spinning Crane Kick + Vivify til effektiv AoE-healing under høj skade.",
          "Life Cocoon på tanken under de kraftigste angreb — unik absorb-cooldown."]
    },
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Fase 2 op de hele groep plaatsen.",
          "Power Word: Barrier bij Fase 2 voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Phase 2.",
          "Power Word: Barrier during Phase 2 for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."],
      da:["Disc spiller proaktivt — placer Atonement på hele gruppen inden Fase 2.",
          "Power Word: Barrier under Fase 2 til gruppe-skadereduktion.",
          "Schism + Penance til burst-healing via Atonement på flere mål simultant."]
    },

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Fase 2-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Phase 2 mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."],
      da:["Rescue eller Hover til hurtigt at undslippe Fase 2-mekanikker.",
          "Gem Rewind til den kraftigste gruppeskade — unik tidsomvendt healing.",
          "Dream Breath til AoE-healing på flere spillere simultant."]
    },

    'priest-holy': {
      nl:["Symbol of Hope bij Fase 2 voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Phase 2 for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."],
      da:["Symbol of Hope under Fase 2 til gruppe-mana-gendannelse — unikt for Holy Priest.",
          "Holy Word: Sanctify til øjeblikkelig AoE-healing under høje skadespidser.",
          "Guardian Spirit på tanken ved kritiske øjeblikke — forhindrer et dræbende slag."]
    },

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Fase 2 voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Phase 2 for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."],
      da:["Hold Healing Rain permanent på gruppen — din base AoE-healing.",
          "Spirit Link Totem under Fase 2 til gruppe-skadeudligning — unikt i spillet.",
          "Gem Ancestral Protection Totem til det sværeste pull — anden chance for livet."]
    }},
  'maisara-caverns:2:dps': {
    'hunter-beastmastery': {
      nl:["Counter Shot op elke soul cast — hoge prioriteit.",
          "Adds direct killen met Bestial Wrath AoE.",
          "Aspect of the Turtle als noodrem bij hoge Soul Corruption stacks."],
      en:["Counter Shot on every soul cast — high priority.",
          "Kill adds immediately using Bestial Wrath AoE.",
          "Aspect of the Turtle as emergency when Soul Corruption stacks are high."],
      da:["Counter Shot på hvert sjæle-cast — høj prioritet.",
          "Dræb adds med det samme ved hjælp af Bestial Wrath AoE.",
          "Aspect of the Turtle som nødknap ved høje Soul Corruption-stacks."]
    },
    'shaman-elemental': {
      nl:["Wind Shear afwisselen met de tank voor maximale interrupt-uptime.",
          "Astral Shift tijdens hoge Soul Corruption stacks.",
          "Capacitor Totem op de adds voor een groepsstun — maakt het killen veel sneller."],
      en:["Rotate Wind Shear with the tank for maximum interrupt uptime.",
          "Astral Shift during high Soul Corruption stacks.",
          "Capacitor Totem on the adds for a group stun — makes killing them much faster."],
      da:["Roter Wind Shear med tanken for maksimal interrupt-uptime.",
          "Astral Shift under høje Soul Corruption-stacks.",
          "Capacitor Totem på adds til en gruppestun — gør det meget hurtigere at dræbe dem."]
    }
  ,
    'demonhunter-havoc': {
      nl:["Disrupt op soul casts — je hebt de snelste melee-interrupt in het spel.",
          "Adds met Eye Beam AoE burst neerleggen zodra ze verschijnen.",
          "Netherwalk als noodrem bij hoge Soul Corruption stacks — volledige immuniteit."],
      en:["Disrupt on soul casts — you have the fastest melee interrupt in the game.",
          "Kill adds with Eye Beam AoE burst as soon as they appear.",
          "Netherwalk as emergency with high Soul Corruption stacks — full immunity."],
      da:["Disrupt på sjæle-casts — du har den hurtigste melee-interrupt i spillet.",
          "Dræb adds med Eye Beam AoE burst, så snart de dukker op.",
          "Netherwalk som nødknap ved høje Soul Corruption-stacks — fuld immunitet."]
    },
    'druid-balance': {
      nl:["Typhoon of Mass Entanglement om adds neer te zetten bij spawn.",
          "Starfall op de adds cluster voor constante AoE-schade.",
          "Barkskin bij hoge Soul Corruption stacks als persoonlijk defensief."],
      en:["Typhoon or Mass Entanglement to pin adds at spawn.",
          "Starfall on the add cluster for constant AoE damage.",
          "Barkskin with high Soul Corruption stacks as personal defensive."],
      da:["Typhoon eller Mass Entanglement til at fastholde adds ved spawn.",
          "Starfall på add-klyngen for konstant AoE-skade.",
          "Barkskin ved høje Soul Corruption-stacks som personligt defensiv."]
    },
    'paladin-retribution': {
      nl:["Rebuke op soul casts zodra je in bereik bent.",
          "Divine Storm op de adds cluster voor snelle AoE-kills.",
          "Divine Shield als noodrem bij hoge Soul Corruption stacks."],
      en:["Rebuke on soul casts as soon as you are in range.",
          "Divine Storm on the add cluster for fast AoE kills.",
          "Divine Shield as emergency with high Soul Corruption stacks."],
      da:["Rebuke på sjæle-casts, så snart du er i rækkevidde.",
          "Divine Storm på add-klyngen til hurtige AoE-drab.",
          "Divine Shield som nødknap ved høje Soul Corruption-stacks."]
    },
    'warrior-fury': {
      nl:["Pummel op soul casts — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Fase 2 — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on soul casts — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Phase 2 — one of the best group cooldowns in the game."],
      da:["Pummel på sjæle-casts — kort cooldown, brug den konsekvent.",
          "Recklessness + Bladestorm på store pulls til maksimal AoE burst.",
          "Rallying Cry til gruppen under Fase 2 — et af de bedste gruppe-cooldowns i spillet."]
    },
    'warrior-arms': {
      nl:["Pummel op soul casts — wissel af met de tank.",
          "Bladestorm op de soul adds cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Fase 2 als groeps-defensief."],
      en:["Pummel on soul casts — rotate with the tank.",
          "Bladestorm on the soul adds cluster for AoE cleave.",
          "Rallying Cry for the group during Phase 2 as group defensive."],
      da:["Pummel på sjæle-casts — roter med tanken.",
          "Bladestorm på sjæle-adds-klyngen til AoE cleave.",
          "Rallying Cry til gruppen under Fase 2 som gruppe-defensiv."]
    },
    'mage-frost': {
      nl:["Counterspell op soul casts — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de soul adds cluster voor maximale AoE.",
          "Ice Block bij Fase 2 als persoonlijke noodimuniteit."],
      en:["Counterspell on soul casts — your interrupt is essential.",
          "Frozen Orb + Blizzard on the soul adds cluster for maximum AoE.",
          "Ice Block during Phase 2 as personal emergency immunity."],
      da:["Counterspell på sjæle-casts — dit interrupt er uundværligt.",
          "Frozen Orb + Blizzard på sjæle-adds-klyngen til maksimal AoE.",
          "Ice Block under Fase 2 som personlig nødimmunitet."]
    },
    'rogue-outlaw': {
      nl:["Kick op soul casts — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de soul adds cluster.",
          "Crimson Vial + Feint bij Fase 2 voor personal survival."],
      en:["Kick on soul casts — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the soul adds cluster.",
          "Crimson Vial + Feint during Phase 2 for personal survival."],
      da:["Kick på sjæle-casts — roter med andre interrupts.",
          "Blade Flurry til AoE cleave på sjæle-adds-klyngen.",
          "Crimson Vial + Feint under Fase 2 til personlig overlevelse."]
    },
    'monk-windwalker': {
      nl:["Spear Hand Strike op soul casts — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de soul adds cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Fase 2 voor personal defensive."],
      en:["Spear Hand Strike on soul casts — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the soul adds cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Phase 2 for personal defensive."],
      da:["Spear Hand Strike på sjæle-casts — kombineret med din høje mobilitet altid tilgængelig.",
          "Spinning Crane Kick + Fist of the White Tiger på sjæle-adds-klyngen til burst AoE.",
          "Diffuse Magic eller Dampen Harm under Fase 2 til personlig defensiv."]
    },
    'shaman-enhancement': {
      nl:["Wind Shear op soul casts — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Fase 2 als persoonlijk defensief."],
      en:["Wind Shear on soul casts — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Phase 2 as personal defensive."],
      da:["Wind Shear på sjæle-casts — kort cooldown, tag interrupt-ansvar.",
          "Feral Spirit + Doom Winds på store pulls til maksimal AoE burst.",
          "Astral Shift under Fase 2 som personligt defensiv."]
    },
    'hunter-marksmanship': {
      nl:["Counter Shot op soul casts — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de soul adds cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Fase 2 als volledige immuniteit."],
      en:["Counter Shot on soul casts — fully ranged, always in range.",
          "Volley + Rapid Fire on the soul adds cluster for massive ranged AoE.",
          "Aspect of the Turtle during Phase 2 for full immunity."],
      da:["Counter Shot på sjæle-casts — fuldt ranged, altid i rækkevidde.",
          "Volley + Rapid Fire på sjæle-adds-klyngen til massiv ranged AoE.",
          "Aspect of the Turtle under Fase 2 til fuld immunitet."]
    },
    'deathknight-unholy': {
      nl:["Mind Freeze op soul casts — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de soul adds cluster.",
          "Anti-Magic Shell bij Fase 2 voor magische schade-immuniteit."],
      en:["Mind Freeze on soul casts — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the soul adds cluster.",
          "Anti-Magic Shell during Phase 2 for magic damage immunity."],
      da:["Mind Freeze på sjæle-casts — dit interrupt.",
          "Army of the Dead + Apocalypse til maksimal AoE burst på sjæle-adds-klyngen.",
          "Anti-Magic Shell under Fase 2 til magisk skadeimmunitet."]
    },

    'deathknight-frost': {
      nl:["Mind Freeze op soul casts — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de soul adds cluster voor AoE burst.",
          "Anti-Magic Shell bij Fase 2 voor magische schade-immuniteit."],
      en:["Mind Freeze on soul casts — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the soul adds cluster for AoE burst.",
          "Anti-Magic Shell during Phase 2 for magic damage immunity."],
      da:["Mind Freeze på sjæle-casts — dit interrupt.",
          "Pillar of Frost + Frostwyrm's Fury på sjæle-adds-klyngen til AoE burst.",
          "Anti-Magic Shell under Fase 2 til magisk skadeimmunitet."]
    },

    'demonhunter-devourer': {
      nl:["Disrupt op soul casts — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de soul adds cluster voor ranged AoE burst.",
          "Blur bij Fase 2 als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on soul casts — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the soul adds cluster for ranged AoE burst.",
          "Blur during Phase 2 as primary defensive — two charges with Demonic Resilience."],
      da:["Disrupt på sjæle-casts — du er semi-ranged, altid i rækkevidde.",
          "Hurl Glaive + Fel Barrage på sjæle-adds-klyngen til ranged AoE burst.",
          "Blur under Fase 2 som primær defensiv — to charges med Demonic Resilience."]
    },

    'druid-feral': {
      nl:["Skull Bash op soul casts — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de soul adds cluster.",
          "Survival Instincts bij Fase 2 als persoonlijk defensief — twee charges."],
      en:["Skull Bash on soul casts — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the soul adds cluster.",
          "Survival Instincts during Phase 2 as personal defensive — two charges."],
      da:["Skull Bash på sjæle-casts — kort cooldown, altid i melee.",
          "Primal Wrath eller Swipe til AoE cleave på sjæle-adds-klyngen.",
          "Survival Instincts under Fase 2 som personligt defensiv — to charges."]
    },

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op soul casts — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Fase 2 als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on soul casts — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Phase 2 as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på sjæle-casts — Evoker CC-toolkit.",
          "Aktivér Ebon Might + Breath of Eons på det store pull til maksimal gruppebuff.",
          "Obsidian Scales under Fase 2 som personligt defensiv."]
    },

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op soul casts — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Fase 2 als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on soul casts — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Phase 2 as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på sjæle-casts — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge på det store pull til maksimal burst.",
          "Obsidian Scales under Fase 2 som personligt defensiv."]
    },

    'hunter-survival': {
      nl:["Counter Shot op soul casts — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de soul adds cluster.",
          "Aspect of the Turtle bij Fase 2 als noodimuniteit."],
      en:["Counter Shot on soul casts — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the soul adds cluster.",
          "Aspect of the Turtle during Phase 2 as emergency immunity."],
      da:["Counter Shot på sjæle-casts — du er mobil og har altid et ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb til burst AoE på sjæle-adds-klyngen.",
          "Aspect of the Turtle under Fase 2 som nødimmunitet."]
    },

    'mage-arcane': {
      nl:["Counterspell op soul casts — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Fase 2 als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on soul casts — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Phase 2 as emergency immunity — Arcane Mages are glass cannons, use it wisely."],
      da:["Counterspell på sjæle-casts — du har den bedste interrupt af alle mages.",
          "Gem Arcane Surge til store pulls eller Bloodlust-vinduet til maksimal burst.",
          "Ice Block under Fase 2 som nødimmunitet — Arcane Mages er glaskanoner, brug det fornuftigt."]
    },

    'mage-fire': {
      nl:["Counterspell op soul casts — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Fase 2 als noodimuniteit."],
      en:["Counterspell on soul casts — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Phase 2 as emergency immunity."],
      da:["Counterspell på sjæle-casts — essentielt for enhver Mage.",
          "Combustion + Pyroclasm til maksimal burst på store pulls.",
          "Ice Block under Fase 2 som nødimmunitet."]
    },

    'priest-shadow': {
      nl:["Silence op soul casts — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Fase 2 voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on soul casts — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Phase 2 for 75% damage reduction — best personal defensive of all clothies."],
      da:["Silence på sjæle-casts — kombineret med Mind Blast som ranged interrupt.",
          "Void Eruption + Devouring Plague til burst på store pulls.",
          "Dispersion under Fase 2 til 75% skadereduktion — bedste personlige defensiv af alle clothies."]
    },

    'rogue-assassination': {
      nl:["Kick op soul casts — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Fase 2 voor 100% melee-ontwijking."],
      en:["Kick on soul casts — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Phase 2 for 100% melee dodge."],
      da:["Kick på sjæle-casts — roter med andre melee-interrupts.",
          "Deathmark + Shiv til maksimal single-target burst; Fan of Knives til AoE.",
          "Evasion under Fase 2 til 100% melee-undvigelse."]
    },

    'rogue-subtlety': {
      nl:["Kick op soul casts — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Fase 2 voor 100% melee-ontwijking."],
      en:["Kick on soul casts — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Phase 2 for 100% melee dodge."],
      da:["Kick på sjæle-casts — roter med andre melee-interrupts.",
          "Shadow Blades + Symbols of Death til maksimal burst i Stealth-vinduet.",
          "Evasion under Fase 2 til 100% melee-undvigelse."]
    },

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op soul casts — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Fase 2 voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on soul casts — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Phase 2 for 40% damage reduction and interrupt immunity."],
      da:["Spell Lock (via Felhunter) på sjæle-casts — dit eneste pålidelige interrupt.",
          "Malefic Rapture til AoE burst, når flere mål er fulde af DoTs.",
          "Unending Resolve under Fase 2 til 40% skadereduktion og interrupt-immunitet."]
    },

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op soul casts — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de soul adds cluster.",
          "Unending Resolve bij Fase 2 voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on soul casts — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the soul adds cluster.",
          "Unending Resolve during Phase 2 for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på sjæle-casts — essentielt i høje keys.",
          "Summon Demonic Tyrant + Implosion til maksimal AoE burst på sjæle-adds-klyngen.",
          "Unending Resolve under Fase 2 til 40% skadereduktion."]
    },

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op soul casts — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Fase 2 voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on soul casts — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Phase 2 for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på sjæle-casts — dit eneste interrupt.",
          "Summon Infernal + Channel Demonfire til burst på store pulls.",
          "Unending Resolve under Fase 2 til 40% skadereduktion."]
    }},
  // ── NEXUS-POINT XENAS ── eindbaas (index 2) ──
  'nexus-point-xenas:2:tank': {
    'paladin-protection': {
      nl:["Lothravion heeft zware magische aanvallen — Blessing of Spellwarding voor immuniteit.",
          "Avenger's Shield op void-adds zodra ze spawnen voor AoE-silence.",
          "Divine Shield als noodrem bij Void Implosion."],
      en:["Lothravion deals heavy magic damage — Blessing of Spellwarding for immunity.",
          "Avenger's Shield on void adds as soon as they spawn for AoE silence.",
          "Divine Shield as emergency during Void Implosion."],
      da:["Lothravion laver kraftig magiskade — Blessing of Spellwarding til immunitet.",
          "Avenger's Shield på void-adds så snart de spawner til AoE-silence.",
          "Divine Shield som nødknap under Void Implosion."]
    }
  ,
    'demonhunter-vengeance': {
      nl:["Sigil of Silence op void-adds bij spawn voor directe lockdown.",
          "Fiery Brand op Lothravion tijdens zware magische burst.",
          "Metamorphosis bewaren voor de finale burn-fase."],
      en:["Sigil of Silence on void adds at spawn for immediate lockdown.",
          "Fiery Brand on Lothravion during heavy magic burst.",
          "Save Metamorphosis for the final burn phase."],
      da:["Sigil of Silence på void-adds ved spawn til øjeblikkelig lockdown.",
          "Fiery Brand på Lothravion under kraftig magisk burst.",
          "Gem Metamorphosis til den endelige burn-fase."]
    },
    'druid-guardian': {
      nl:["Void Implosion is magische schade — Barkskin + Survival Instincts afwisselen.",
          "Stampeding Roar om de groep snel te laten bewegen uit void-zones.",
          "Thrash + Moonfire voor threat op meerdere void-adds tegelijk."],
      en:["Void Implosion is magic damage — alternate Barkskin and Survival Instincts.",
          "Stampeding Roar to quickly move the group out of void zones.",
          "Thrash + Moonfire for threat on multiple void adds simultaneously."],
      da:["Void Implosion er magiskade — skiftes med Barkskin og Survival Instincts.",
          "Stampeding Roar til hurtigt at flytte gruppen ud af void-zoner.",
          "Thrash + Moonfire til trussel på flere void-adds simultant."]
    },
    'warrior-protection': {
      nl:["Spell Reflection op Void Channeling voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Void Implosion als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on Void Channeling for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Void Implosion as emergency; Rallying Cry for the group."],
      da:["Spell Reflection på Void Channeling til fuld stavelse-immunitet.",
          "Shield Block uptime er kritisk — hold den aktiv så konsekvent som muligt.",
          "Last Stand under Void Implosion som nødknap; Rallying Cry til gruppen."]
    },
    'monk-brewmaster': {
      nl:["Spear Hand Strike op Void Channeling — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Void Implosion als primaire tank-cooldown."],
      en:["Spear Hand Strike on Void Channeling — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Void Implosion as primary tank cooldown."],
      da:["Spear Hand Strike på Void Channeling — kombineret med høj mobilitet altid tilgængelig.",
          "Stagger er din kernemekanik — brug Purifying Brew, når Stagger bliver rød.",
          "Fortifying Brew under Void Implosion som primær tank-cooldown."]
    },
    'deathknight-blood': {
      nl:["Mind Freeze op Void Channeling — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Void Implosion als primaire tank-cooldown."],
      en:["Mind Freeze on Void Channeling — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Void Implosion as primary tank cooldown."],
      da:["Mind Freeze på Void Channeling — kombineret med Death Grip altid tilgængelig.",
          "Death Strike er din kernemekanik — brug den efter at have taget skade til maksimal self-healing.",
          "Vampiric Blood under Void Implosion som primær tank-cooldown."]
    }},
  'nexus-point-xenas:2:heal': {
    'druid-restoration': {
      nl:["Pre-HoTs vóór elke Void Implosion — massale groepsschade.",
          "Ironbark op de tank tijdens de Void Surge.",
          "Ursol's Vortex om de void-adds te groeperen voor AoE-kill."],
      en:["Pre-HoTs before every Void Implosion — massive group damage.",
          "Ironbark on tank during Void Surge.",
          "Ursol's Vortex to group the void adds for AoE kill."],
      da:["Pre-HoTs før hver Void Implosion — massiv gruppeskade.",
          "Ironbark på tanken under Void Surge.",
          "Ursol's Vortex til at samle void-adds til AoE-drab."]
    }
  ,
    'paladin-holy': {
      nl:["Aura Mastery bewaren voor Void Implosion — de zwaarste AoE van de baas.",
          "Divine Toll op de tank bij Void Surge voor directe HP.",
          "Blinding Light om void-adds te stoppen als ze naar de groep rennen."],
      en:["Save Aura Mastery for Void Implosion — the boss heaviest AoE.",
          "Divine Toll on the tank during Void Surge for immediate HP.",
          "Blinding Light to stop void adds if they run toward the group."],
      da:["Gem Aura Mastery til Void Implosion — bossens kraftigste AoE.",
          "Divine Toll på tanken under Void Surge til umiddelbar HP.",
          "Blinding Light til at stoppe void-adds, hvis de løber mod gruppen."]
    },
    'monk-mistweaver': {
      nl:["Revival bij Void Implosion voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Void Implosion for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."],
      da:["Revival under Void Implosion til massiv gruppe-healing i én global.",
          "Spinning Crane Kick + Vivify til effektiv AoE-healing under høj skade.",
          "Life Cocoon på tanken under de kraftigste angreb — unik absorb-cooldown."]
    },
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Void Implosion op de hele groep plaatsen.",
          "Power Word: Barrier bij Void Implosion voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Void Implosion.",
          "Power Word: Barrier during Void Implosion for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."],
      da:["Disc spiller proaktivt — placer Atonement på hele gruppen inden Void Implosion.",
          "Power Word: Barrier under Void Implosion til gruppe-skadereduktion.",
          "Schism + Penance til burst-healing via Atonement på flere mål simultant."]
    },

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Void Implosion-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Void Implosion mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."],
      da:["Rescue eller Hover til hurtigt at undslippe Void Implosion-mekanikker.",
          "Gem Rewind til den kraftigste gruppeskade — unik tidsomvendt healing.",
          "Dream Breath til AoE-healing på flere spillere simultant."]
    },

    'priest-holy': {
      nl:["Symbol of Hope bij Void Implosion voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Void Implosion for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."],
      da:["Symbol of Hope under Void Implosion til gruppe-mana-gendannelse — unikt for Holy Priest.",
          "Holy Word: Sanctify til øjeblikkelig AoE-healing under høje skadespidser.",
          "Guardian Spirit på tanken ved kritiske øjeblikke — forhindrer et dræbende slag."]
    },

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Void Implosion voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Void Implosion for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."],
      da:["Hold Healing Rain permanent på gruppen — din base AoE-healing.",
          "Spirit Link Totem under Void Implosion til gruppe-skadeudligning — unikt i spillet.",
          "Gem Ancestral Protection Totem til det sværeste pull — anden chance for livet."]
    }},
  'nexus-point-xenas:2:dps': {
    'hunter-beastmastery': {
      nl:["Void-adds direct killen bij spawn — Bestial Wrath voor AoE burst.",
          "Volledig mobiel bij Void Implosion — beweeg zonder enig DPS-verlies.",
          "Counter Shot op Void Channeling."],
      en:["Kill void adds immediately on spawn — Bestial Wrath for AoE burst.",
          "Fully mobile during Void Implosion — move without any DPS loss.",
          "Counter Shot on Void Channeling."],
      da:["Dræb void-adds med det samme ved spawn — Bestial Wrath til AoE burst.",
          "Fuldt mobil under Void Implosion — flyt uden DPS-tab.",
          "Counter Shot på Void Channeling."]
    },
    'shaman-elemental': {
      nl:["Earthquake + Chain Lightning op de void-adds cluster.",
          "Astral Shift bij hoge void-corruptie stacks.",
          "Wind Shear op Void Channeling — hoge prioriteit."],
      en:["Earthquake + Chain Lightning on the void add cluster.",
          "Astral Shift during high void corruption stacks.",
          "Wind Shear on Void Channeling — high priority."],
      da:["Earthquake + Chain Lightning på void-add-klyngen.",
          "Astral Shift under høje void-korruptionsstacks.",
          "Wind Shear på Void Channeling — høj prioritet."]
    }
  ,
    'demonhunter-havoc': {
      nl:["Disrupt op Void Channeling — snelste melee-interrupt.",
          "Eye Beam op de void-adds cluster voor snelle AoE burst.",
          "Netherwalk bij Void Implosion als je er niet op tijd uitkwam."],
      en:["Disrupt on Void Channeling — fastest melee interrupt.",
          "Eye Beam on the void add cluster for quick AoE burst.",
          "Netherwalk during Void Implosion if you did not get out in time."],
      da:["Disrupt på Void Channeling — hurtigste melee-interrupt.",
          "Eye Beam på void-add-klyngen til hurtig AoE burst.",
          "Netherwalk under Void Implosion, hvis du ikke kom ud i tide."]
    },
    'druid-balance': {
      nl:["Starfall op de void-adds cluster voor constante AoE-schade.",
          "Typhoon om void-adds te groeperen of weg te stoten.",
          "Barkskin bij hoge void-corruptie als persoonlijk defensief."],
      en:["Starfall on the void add cluster for constant AoE damage.",
          "Typhoon to group void adds together or push them away.",
          "Barkskin with high void corruption as personal defensive."],
      da:["Starfall på void-add-klyngen for konstant AoE-skade.",
          "Typhoon til at samle void-adds eller skubbe dem væk.",
          "Barkskin ved høj void-korruption som personligt defensiv."]
    },
    'paladin-retribution': {
      nl:["Rebuke op Void Channeling zodra je in bereik bent.",
          "Divine Storm op void-adds voor snelle AoE-kills.",
          "Divine Shield als noodrem bij Void Implosion."],
      en:["Rebuke on Void Channeling as soon as you are in range.",
          "Divine Storm on void adds for fast AoE kills.",
          "Divine Shield as emergency during Void Implosion."],
      da:["Rebuke på Void Channeling, så snart du er i rækkevidde.",
          "Divine Storm på void-adds til hurtige AoE-drab.",
          "Divine Shield som nødknap under Void Implosion."]
    },
    'warrior-fury': {
      nl:["Pummel op Void Channeling — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Void Implosion — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on Void Channeling — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Void Implosion — one of the best group cooldowns in the game."],
      da:["Pummel på Void Channeling — kort cooldown, brug den konsekvent.",
          "Recklessness + Bladestorm på store pulls til maksimal AoE burst.",
          "Rallying Cry til gruppen under Void Implosion — et af de bedste gruppe-cooldowns i spillet."]
    },
    'warrior-arms': {
      nl:["Pummel op Void Channeling — wissel af met de tank.",
          "Bladestorm op de void adds cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Void Implosion als groeps-defensief."],
      en:["Pummel on Void Channeling — rotate with the tank.",
          "Bladestorm on the void adds cluster for AoE cleave.",
          "Rallying Cry for the group during Void Implosion as group defensive."],
      da:["Pummel på Void Channeling — roter med tanken.",
          "Bladestorm på void-adds-klyngen til AoE cleave.",
          "Rallying Cry til gruppen under Void Implosion som gruppe-defensiv."]
    },
    'mage-frost': {
      nl:["Counterspell op Void Channeling — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de void adds cluster voor maximale AoE.",
          "Ice Block bij Void Implosion als persoonlijke noodimuniteit."],
      en:["Counterspell on Void Channeling — your interrupt is essential.",
          "Frozen Orb + Blizzard on the void adds cluster for maximum AoE.",
          "Ice Block during Void Implosion as personal emergency immunity."],
      da:["Counterspell på Void Channeling — dit interrupt er uundværligt.",
          "Frozen Orb + Blizzard på void-adds-klyngen til maksimal AoE.",
          "Ice Block under Void Implosion som personlig nødimmunitet."]
    },
    'rogue-outlaw': {
      nl:["Kick op Void Channeling — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de void adds cluster.",
          "Crimson Vial + Feint bij Void Implosion voor personal survival."],
      en:["Kick on Void Channeling — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the void adds cluster.",
          "Crimson Vial + Feint during Void Implosion for personal survival."],
      da:["Kick på Void Channeling — roter med andre interrupts.",
          "Blade Flurry til AoE cleave på void-adds-klyngen.",
          "Crimson Vial + Feint under Void Implosion til personlig overlevelse."]
    },
    'monk-windwalker': {
      nl:["Spear Hand Strike op Void Channeling — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de void adds cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Void Implosion voor personal defensive."],
      en:["Spear Hand Strike on Void Channeling — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the void adds cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Void Implosion for personal defensive."],
      da:["Spear Hand Strike på Void Channeling — kombineret med din høje mobilitet altid tilgængelig.",
          "Spinning Crane Kick + Fist of the White Tiger på void-adds-klyngen til burst AoE.",
          "Diffuse Magic eller Dampen Harm under Void Implosion til personlig defensiv."]
    },
    'shaman-enhancement': {
      nl:["Wind Shear op Void Channeling — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Void Implosion als persoonlijk defensief."],
      en:["Wind Shear on Void Channeling — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Void Implosion as personal defensive."],
      da:["Wind Shear på Void Channeling — kort cooldown, tag interrupt-ansvar.",
          "Feral Spirit + Doom Winds på store pulls til maksimal AoE burst.",
          "Astral Shift under Void Implosion som personligt defensiv."]
    },
    'hunter-marksmanship': {
      nl:["Counter Shot op Void Channeling — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de void adds cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Void Implosion als volledige immuniteit."],
      en:["Counter Shot on Void Channeling — fully ranged, always in range.",
          "Volley + Rapid Fire on the void adds cluster for massive ranged AoE.",
          "Aspect of the Turtle during Void Implosion for full immunity."],
      da:["Counter Shot på Void Channeling — fuldt ranged, altid i rækkevidde.",
          "Volley + Rapid Fire på void-adds-klyngen til massiv ranged AoE.",
          "Aspect of the Turtle under Void Implosion til fuld immunitet."]
    },
    'deathknight-unholy': {
      nl:["Mind Freeze op Void Channeling — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de void adds cluster.",
          "Anti-Magic Shell bij Void Implosion voor magische schade-immuniteit."],
      en:["Mind Freeze on Void Channeling — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the void adds cluster.",
          "Anti-Magic Shell during Void Implosion for magic damage immunity."],
      da:["Mind Freeze på Void Channeling — dit interrupt.",
          "Army of the Dead + Apocalypse til maksimal AoE burst på void-adds-klyngen.",
          "Anti-Magic Shell under Void Implosion til magisk skadeimmunitet."]
    },

    'deathknight-frost': {
      nl:["Mind Freeze op Void Channeling — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de void adds cluster voor AoE burst.",
          "Anti-Magic Shell bij Void Implosion voor magische schade-immuniteit."],
      en:["Mind Freeze on Void Channeling — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the void adds cluster for AoE burst.",
          "Anti-Magic Shell during Void Implosion for magic damage immunity."],
      da:["Mind Freeze på Void Channeling — dit interrupt.",
          "Pillar of Frost + Frostwyrm's Fury på void-adds-klyngen til AoE burst.",
          "Anti-Magic Shell under Void Implosion til magisk skadeimmunitet."]
    },

    'demonhunter-devourer': {
      nl:["Disrupt op Void Channeling — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de void adds cluster voor ranged AoE burst.",
          "Blur bij Void Implosion als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on Void Channeling — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the void adds cluster for ranged AoE burst.",
          "Blur during Void Implosion as primary defensive — two charges with Demonic Resilience."],
      da:["Disrupt på Void Channeling — du er semi-ranged, altid i rækkevidde.",
          "Hurl Glaive + Fel Barrage på void-adds-klyngen til ranged AoE burst.",
          "Blur under Void Implosion som primær defensiv — to charges med Demonic Resilience."]
    },

    'druid-feral': {
      nl:["Skull Bash op Void Channeling — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de void adds cluster.",
          "Survival Instincts bij Void Implosion als persoonlijk defensief — twee charges."],
      en:["Skull Bash on Void Channeling — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the void adds cluster.",
          "Survival Instincts during Void Implosion as personal defensive — two charges."],
      da:["Skull Bash på Void Channeling — kort cooldown, altid i melee.",
          "Primal Wrath eller Swipe til AoE cleave på void-adds-klyngen.",
          "Survival Instincts under Void Implosion som personligt defensiv — to charges."]
    },

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op Void Channeling — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Void Implosion als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on Void Channeling — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Void Implosion as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på Void Channeling — Evoker CC-toolkit.",
          "Aktivér Ebon Might + Breath of Eons på det store pull til maksimal gruppebuff.",
          "Obsidian Scales under Void Implosion som personligt defensiv."]
    },

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op Void Channeling — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Void Implosion als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on Void Channeling — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Void Implosion as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på Void Channeling — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge på det store pull til maksimal burst.",
          "Obsidian Scales under Void Implosion som personligt defensiv."]
    },

    'hunter-survival': {
      nl:["Counter Shot op Void Channeling — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de void adds cluster.",
          "Aspect of the Turtle bij Void Implosion als noodimuniteit."],
      en:["Counter Shot on Void Channeling — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the void adds cluster.",
          "Aspect of the Turtle during Void Implosion as emergency immunity."],
      da:["Counter Shot på Void Channeling — du er mobil og har altid et ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb til burst AoE på void-adds-klyngen.",
          "Aspect of the Turtle under Void Implosion som nødimmunitet."]
    },

    'mage-arcane': {
      nl:["Counterspell op Void Channeling — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Void Implosion als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on Void Channeling — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Void Implosion as emergency immunity — Arcane Mages are glass cannons, use it wisely."],
      da:["Counterspell på Void Channeling — du har den bedste interrupt af alle mages.",
          "Gem Arcane Surge til store pulls eller Bloodlust-vinduet til maksimal burst.",
          "Ice Block under Void Implosion som nødimmunitet — Arcane Mages er glaskanoner, brug det fornuftigt."]
    },

    'mage-fire': {
      nl:["Counterspell op Void Channeling — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Void Implosion als noodimuniteit."],
      en:["Counterspell on Void Channeling — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Void Implosion as emergency immunity."],
      da:["Counterspell på Void Channeling — essentielt for enhver Mage.",
          "Combustion + Pyroclasm til maksimal burst på store pulls.",
          "Ice Block under Void Implosion som nødimmunitet."]
    },

    'priest-shadow': {
      nl:["Silence op Void Channeling — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Void Implosion voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on Void Channeling — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Void Implosion for 75% damage reduction — best personal defensive of all clothies."],
      da:["Silence på Void Channeling — kombineret med Mind Blast som ranged interrupt.",
          "Void Eruption + Devouring Plague til burst på store pulls.",
          "Dispersion under Void Implosion til 75% skadereduktion — bedste personlige defensiv af alle clothies."]
    },

    'rogue-assassination': {
      nl:["Kick op Void Channeling — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Void Implosion voor 100% melee-ontwijking."],
      en:["Kick on Void Channeling — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Void Implosion for 100% melee dodge."],
      da:["Kick på Void Channeling — roter med andre melee-interrupts.",
          "Deathmark + Shiv til maksimal single-target burst; Fan of Knives til AoE.",
          "Evasion under Void Implosion til 100% melee-undvigelse."]
    },

    'rogue-subtlety': {
      nl:["Kick op Void Channeling — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Void Implosion voor 100% melee-ontwijking."],
      en:["Kick on Void Channeling — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Void Implosion for 100% melee dodge."],
      da:["Kick på Void Channeling — roter med andre melee-interrupts.",
          "Shadow Blades + Symbols of Death til maksimal burst i Stealth-vinduet.",
          "Evasion under Void Implosion til 100% melee-undvigelse."]
    },

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op Void Channeling — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Void Implosion voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on Void Channeling — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Void Implosion for 40% damage reduction and interrupt immunity."],
      da:["Spell Lock (via Felhunter) på Void Channeling — dit eneste pålidelige interrupt.",
          "Malefic Rapture til AoE burst, når flere mål er fulde af DoTs.",
          "Unending Resolve under Void Implosion til 40% skadereduktion og interrupt-immunitet."]
    },

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op Void Channeling — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de void adds cluster.",
          "Unending Resolve bij Void Implosion voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on Void Channeling — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the void adds cluster.",
          "Unending Resolve during Void Implosion for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på Void Channeling — essentielt i høje keys.",
          "Summon Demonic Tyrant + Implosion til maksimal AoE burst på void-adds-klyngen.",
          "Unending Resolve under Void Implosion til 40% skadereduktion."]
    },

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op Void Channeling — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Void Implosion voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on Void Channeling — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Void Implosion for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på Void Channeling — dit eneste interrupt.",
          "Summon Infernal + Channel Demonfire til burst på store pulls.",
          "Unending Resolve under Void Implosion til 40% skadereduktion."]
    }},
  // ── MURDER ROW ── boss 1 ──
  'murder-row:1:tank': {
    'paladin-protection': {
      nl:["Zaen Bladesorrow heeft zware bleed-aanvallen — Guardian of Ancient Kings voor de tankbusters.",
          "Avenger's Shield op zijn blade-casts voor interrupt + silence.",
          "Blessing of Sacrifice op de healer als de schade te hoog wordt."],
      en:["Zaen Bladesorrow has heavy bleed attacks — Guardian of Ancient Kings for tankbusters.",
          "Avenger's Shield on his blade casts for interrupt + silence.",
          "Blessing of Sacrifice on the healer if damage becomes too high."],
      da:["Zaen Bladesorrow har kraftige blødningsangreb — Guardian of Ancient Kings til tankbusters.",
          "Avenger's Shield på hans blade-casts til interrupt + silence.",
          "Blessing of Sacrifice på healeren, hvis skaden bliver for høj."]
    }
  ,
    'demonhunter-vengeance': {
      nl:["Demon Spikes rotatie is essentieel — bleed-aanvallen stapelen snel op.",
          "Fiery Brand op de baas bij zware blade-combo's voor 40% reductie.",
          "Soul Cleave spam om Soul Fragments te consumeren en jezelf te healen."],
      en:["Demon Spikes rotation is essential — bleed attacks stack up quickly.",
          "Fiery Brand on the boss during heavy blade combos for 40% reduction.",
          "Soul Cleave spam to consume Soul Fragments and self-heal."],
      da:["Demon Spikes-rotation er essentiel — blødningsangreb stabler sig hurtigt op.",
          "Fiery Brand på bossen under kraftige blade-kombos for 40% reduktion.",
          "Soul Cleave spam for at forbruge Soul Fragments og self-heale."]
    },
    'druid-guardian': {
      nl:["Ironfur permanent uptime — bleed-aanvallen zijn fysiek, armor telt mee.",
          "Survival Instincts bij de zwaarste blade-combo.",
          "Thrash + Swipe voor dreigings-opbouw op de extra adds."],
      en:["Keep Ironfur permanently active — bleed attacks are physical, armor counts.",
          "Survival Instincts during the heaviest blade combo.",
          "Thrash + Swipe for threat generation on the extra adds."],
      da:["Hold Ironfur permanent aktiv — blødningsangreb er fysiske, rustning tæller.",
          "Survival Instincts under den kraftigste blade-kombo.",
          "Thrash + Swipe til trusselsopbygning på de ekstra adds."]
    },
    'warrior-protection': {
      nl:["Spell Reflection op blade-casts voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij zware blade-combo als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on blade casts for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during heavy blade combo as emergency; Rallying Cry for the group."],
      da:["Spell Reflection på blade-casts til fuld stavelse-immunitet.",
          "Shield Block uptime er kritisk — hold den aktiv så konsekvent som muligt.",
          "Last Stand under kraftig blade-kombo som nødknap; Rallying Cry til gruppen."]
    },
    'monk-brewmaster': {
      nl:["Spear Hand Strike op blade-casts — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij zware blade-combo als primaire tank-cooldown."],
      en:["Spear Hand Strike on blade casts — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during heavy blade combo as primary tank cooldown."],
      da:["Spear Hand Strike på blade-casts — kombineret med høj mobilitet altid tilgængelig.",
          "Stagger er din kernemekanik — brug Purifying Brew, når Stagger bliver rød.",
          "Fortifying Brew under kraftig blade-kombo som primær tank-cooldown."]
    },
    'deathknight-blood': {
      nl:["Mind Freeze op blade-casts — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij zware blade-combo als primaire tank-cooldown."],
      en:["Mind Freeze on blade casts — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during heavy blade combo as primary tank cooldown."],
      da:["Mind Freeze på blade-casts — kombineret med Death Grip altid tilgængelig.",
          "Death Strike er din kernemekanik — brug den efter at have taget skade til maksimal self-healing.",
          "Vampiric Blood under kraftig blade-kombo som primær tank-cooldown."]
    }},
  'murder-row:1:heal': {
    'druid-restoration': {
      nl:["Bleed-schade is constant — Efflorescence permanent neerleggen op de groep.",
          "Ironbark op de tank bij de zware blade-combo.",
          "Swiftmend + Wild Growth bij plotselinge schadepieken."],
      en:["Bleed damage is constant — keep Efflorescence permanently on the group.",
          "Ironbark on tank during the heavy blade combo.",
          "Swiftmend + Wild Growth for sudden damage spikes."],
      da:["Blødningsskade er konstant — hold Efflorescence permanent på gruppen.",
          "Ironbark på tanken under den kraftige blade-kombo.",
          "Swiftmend + Wild Growth ved pludselige skadespidser."]
    }
  ,
    'paladin-holy': {
      nl:["Bleed-schade is continu — Word of Glory spam om bleeding targets stabiel te houden.",
          "Avenging Wrath bij de zwaarste blade-combo voor burst-healing.",
          "Blessing of Protection verwijdert bloedingen — gebruik het op een DPS met hoge stacks."],
      en:["Bleed damage is continuous — spam Word of Glory to keep bleeding targets stable.",
          "Avenging Wrath during the heaviest blade combo for burst healing.",
          "Blessing of Protection removes bleeds — use it on a DPS with high stacks."],
      da:["Blødningsskade er kontinuerlig — spam Word of Glory for at holde blødende mål stabile.",
          "Avenging Wrath under den kraftigste blade-kombo til burst-healing.",
          "Blessing of Protection fjerner blødninger — brug det på en DPS med høje stacks."]
    },
    'monk-mistweaver': {
      nl:["Revival bij zware blade-combo voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during heavy blade combo for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."],
      da:["Revival under kraftig blade-kombo til massiv gruppe-healing i én global.",
          "Spinning Crane Kick + Vivify til effektiv AoE-healing under høj skade.",
          "Life Cocoon på tanken under de kraftigste angreb — unik absorb-cooldown."]
    },
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór zware blade-combo op de hele groep plaatsen.",
          "Power Word: Barrier bij zware blade-combo voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before heavy blade combo.",
          "Power Word: Barrier during heavy blade combo for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."],
      da:["Disc spiller proaktivt — placer Atonement på hele gruppen inden kraftig blade-kombo.",
          "Power Word: Barrier under kraftig blade-kombo til gruppe-skadereduktion.",
          "Schism + Penance til burst-healing via Atonement på flere mål simultant."]
    },

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van zware blade-combo-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape heavy blade combo mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."],
      da:["Rescue eller Hover til hurtigt at undslippe kraftig blade-kombo-mekanikker.",
          "Gem Rewind til den kraftigste gruppeskade — unik tidsomvendt healing.",
          "Dream Breath til AoE-healing på flere spillere simultant."]
    },

    'priest-holy': {
      nl:["Symbol of Hope bij zware blade-combo voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during heavy blade combo for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."],
      da:["Symbol of Hope under kraftig blade-kombo til gruppe-mana-gendannelse — unikt for Holy Priest.",
          "Holy Word: Sanctify til øjeblikkelig AoE-healing under høje skadespidser.",
          "Guardian Spirit på tanken ved kritiske øjeblikke — forhindrer et dræbende slag."]
    },

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij zware blade-combo voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during heavy blade combo for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."],
      da:["Hold Healing Rain permanent på gruppen — din base AoE-healing.",
          "Spirit Link Totem under kraftig blade-kombo til gruppe-skadeudligning — unikt i spillet.",
          "Gem Ancestral Protection Totem til det sværeste pull — anden chance for livet."]
    }},
  'murder-row:1:dps': {
    'hunter-beastmastery': {
      nl:["Counter Shot op blade-casts.",
          "Bestial Wrath bij de pull + Primal Rage in de execute-fase.",
          "Freezing Trap als extra CC als de tank het lastig heeft."],
      en:["Counter Shot on blade casts.",
          "Bestial Wrath on pull + Primal Rage in the execute phase.",
          "Freezing Trap as extra CC if the tank is struggling."],
      da:["Counter Shot på blade-casts.",
          "Bestial Wrath på pull + Primal Rage i execute-fasen.",
          "Freezing Trap som ekstra CC, hvis tanken har det svært."]
    },
    'shaman-elemental': {
      nl:["Wind Shear op blade-casts — coördineer met de tank.",
          "Astral Shift bij hoge bleed-stacks.",
          "Thunderstorm als positioneringstool als adds te dicht bij de healer komen."],
      en:["Wind Shear on blade casts — coordinate with the tank.",
          "Astral Shift with high bleed stacks.",
          "Thunderstorm as a positional tool if adds get too close to the healer."],
      da:["Wind Shear på blade-casts — koordinér med tanken.",
          "Astral Shift ved høje blødningsstacks.",
          "Thunderstorm som positioneringsværktøj, hvis adds kommer for tæt på healeren."]
    }
  ,
    'demonhunter-havoc': {
      nl:["Disrupt op blade-casts — met jouw mobiliteit ben je altijd in bereik.",
          "Fel Rush nooit door een frontal ability — positie altijd achter de baas.",
          "Darkness plaatsen voor de groep bij zware blade-combo's."],
      en:["Disrupt on blade casts — with your mobility you are always in range.",
          "Never Fel Rush through a frontal ability — always position yourself behind the boss.",
          "Place Darkness for the group during heavy blade combos."],
      da:["Disrupt på blade-casts — med din mobilitet er du altid i rækkevidde.",
          "Brug aldrig Fel Rush gennem en frontal ability — positiver dig altid bag bossen.",
          "Placer Darkness til gruppen under kraftige blade-kombos."]
    },
    'druid-balance': {
      nl:["Typhoon om Zaen even weg te stoten als de melee-groep moet uitwijken.",
          "Starfall voor constante cleave-schade op de baas + adds.",
          "Barkskin bij hoge bleed-stacks als persoonlijk defensief."],
      en:["Typhoon to briefly knock Zaen away if the melee group needs to move.",
          "Starfall for constant cleave damage on the boss and adds.",
          "Barkskin with high bleed stacks as personal defensive."],
      da:["Typhoon til kortvarigt at slå Zaen tilbage, hvis melee-gruppen skal flytte sig.",
          "Starfall for konstant cleave-skade på bossen og adds.",
          "Barkskin ved høje blødningsstacks som personligt defensiv."]
    },
    'paladin-retribution': {
      nl:["Rebuke op blade-casts zodra je in bereik bent.",
          "Execution Sentence op de baas voor maximale single-target schade.",
          "Divine Shield als noodrem bij hoge bleed-stacks."],
      en:["Rebuke on blade casts as soon as you are in range.",
          "Execution Sentence on the boss for maximum single-target damage.",
          "Divine Shield as emergency with high bleed stacks."],
      da:["Rebuke på blade-casts, så snart du er i rækkevidde.",
          "Execution Sentence på bossen for maksimal single-target skade.",
          "Divine Shield som nødknap ved høje blødningsstacks."]
    },
    'warrior-fury': {
      nl:["Pummel op blade-casts — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij zware blade-combo — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on blade casts — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during heavy blade combo — one of the best group cooldowns in the game."],
      da:["Pummel på blade-casts — kort cooldown, brug den konsekvent.",
          "Recklessness + Bladestorm på store pulls til maksimal AoE burst.",
          "Rallying Cry til gruppen under kraftig blade-kombo — et af de bedste gruppe-cooldowns i spillet."]
    },
    'warrior-arms': {
      nl:["Pummel op blade-casts — wissel af met de tank.",
          "Bladestorm op de adds cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij zware blade-combo als groeps-defensief."],
      en:["Pummel on blade casts — rotate with the tank.",
          "Bladestorm on the adds cluster for AoE cleave.",
          "Rallying Cry for the group during heavy blade combo as group defensive."],
      da:["Pummel på blade-casts — roter med tanken.",
          "Bladestorm på adds-klyngen til AoE cleave.",
          "Rallying Cry til gruppen under kraftig blade-kombo som gruppe-defensiv."]
    },
    'mage-frost': {
      nl:["Counterspell op blade-casts — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de adds cluster voor maximale AoE.",
          "Ice Block bij zware blade-combo als persoonlijke noodimuniteit."],
      en:["Counterspell on blade casts — your interrupt is essential.",
          "Frozen Orb + Blizzard on the adds cluster for maximum AoE.",
          "Ice Block during heavy blade combo as personal emergency immunity."],
      da:["Counterspell på blade-casts — dit interrupt er uundværligt.",
          "Frozen Orb + Blizzard på adds-klyngen til maksimal AoE.",
          "Ice Block under kraftig blade-kombo som personlig nødimmunitet."]
    },
    'rogue-outlaw': {
      nl:["Kick op blade-casts — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de adds cluster.",
          "Crimson Vial + Feint bij zware blade-combo voor personal survival."],
      en:["Kick on blade casts — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the adds cluster.",
          "Crimson Vial + Feint during heavy blade combo for personal survival."],
      da:["Kick på blade-casts — roter med andre interrupts.",
          "Blade Flurry til AoE cleave på adds-klyngen.",
          "Crimson Vial + Feint under kraftig blade-kombo til personlig overlevelse."]
    },
    'monk-windwalker': {
      nl:["Spear Hand Strike op blade-casts — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de adds cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij zware blade-combo voor personal defensive."],
      en:["Spear Hand Strike on blade casts — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the adds cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during heavy blade combo for personal defensive."],
      da:["Spear Hand Strike på blade-casts — kombineret med din høje mobilitet altid tilgængelig.",
          "Spinning Crane Kick + Fist of the White Tiger på adds-klyngen til burst AoE.",
          "Diffuse Magic eller Dampen Harm under kraftig blade-kombo til personlig defensiv."]
    },
    'shaman-enhancement': {
      nl:["Wind Shear op blade-casts — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij zware blade-combo als persoonlijk defensief."],
      en:["Wind Shear on blade casts — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during heavy blade combo as personal defensive."],
      da:["Wind Shear på blade-casts — kort cooldown, tag interrupt-ansvar.",
          "Feral Spirit + Doom Winds på store pulls til maksimal AoE burst.",
          "Astral Shift under kraftig blade-kombo som personligt defensiv."]
    },
    'hunter-marksmanship': {
      nl:["Counter Shot op blade-casts — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de adds cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij zware blade-combo als volledige immuniteit."],
      en:["Counter Shot on blade casts — fully ranged, always in range.",
          "Volley + Rapid Fire on the adds cluster for massive ranged AoE.",
          "Aspect of the Turtle during heavy blade combo for full immunity."],
      da:["Counter Shot på blade-casts — fuldt ranged, altid i rækkevidde.",
          "Volley + Rapid Fire på adds-klyngen til massiv ranged AoE.",
          "Aspect of the Turtle under kraftig blade-kombo til fuld immunitet."]
    },
    'deathknight-unholy': {
      nl:["Mind Freeze op blade-casts — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de adds cluster.",
          "Anti-Magic Shell bij zware blade-combo voor magische schade-immuniteit."],
      en:["Mind Freeze on blade casts — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the adds cluster.",
          "Anti-Magic Shell during heavy blade combo for magic damage immunity."],
      da:["Mind Freeze på blade-casts — dit interrupt.",
          "Army of the Dead + Apocalypse til maksimal AoE burst på adds-klyngen.",
          "Anti-Magic Shell under kraftig blade-kombo til magisk skadeimmunitet."]
    },

    'deathknight-frost': {
      nl:["Mind Freeze op blade-casts — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de adds cluster voor AoE burst.",
          "Anti-Magic Shell bij zware blade-combo voor magische schade-immuniteit."],
      en:["Mind Freeze on blade casts — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the adds cluster for AoE burst.",
          "Anti-Magic Shell during heavy blade combo for magic damage immunity."],
      da:["Mind Freeze på blade-casts — dit interrupt.",
          "Pillar of Frost + Frostwyrm's Fury på adds-klyngen til AoE burst.",
          "Anti-Magic Shell under kraftig blade-kombo til magisk skadeimmunitet."]
    },

    'demonhunter-devourer': {
      nl:["Disrupt op blade-casts — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de adds cluster voor ranged AoE burst.",
          "Blur bij zware blade-combo als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on blade casts — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the adds cluster for ranged AoE burst.",
          "Blur during heavy blade combo as primary defensive — two charges with Demonic Resilience."],
      da:["Disrupt på blade-casts — du er semi-ranged, altid i rækkevidde.",
          "Hurl Glaive + Fel Barrage på adds-klyngen til ranged AoE burst.",
          "Blur under kraftig blade-kombo som primær defensiv — to charges med Demonic Resilience."]
    },

    'druid-feral': {
      nl:["Skull Bash op blade-casts — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de adds cluster.",
          "Survival Instincts bij zware blade-combo als persoonlijk defensief — twee charges."],
      en:["Skull Bash on blade casts — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the adds cluster.",
          "Survival Instincts during heavy blade combo as personal defensive — two charges."],
      da:["Skull Bash på blade-casts — kort cooldown, altid i melee.",
          "Primal Wrath eller Swipe til AoE cleave på adds-klyngen.",
          "Survival Instincts under kraftig blade-kombo som personligt defensiv — to charges."]
    },

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op blade-casts — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij zware blade-combo als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on blade casts — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during heavy blade combo as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på blade-casts — Evoker CC-toolkit.",
          "Aktivér Ebon Might + Breath of Eons på det store pull til maksimal gruppebuff.",
          "Obsidian Scales under kraftig blade-kombo som personligt defensiv."]
    },

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op blade-casts — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij zware blade-combo als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on blade casts — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during heavy blade combo as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på blade-casts — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge på det store pull til maksimal burst.",
          "Obsidian Scales under kraftig blade-kombo som personligt defensiv."]
    },

    'hunter-survival': {
      nl:["Counter Shot op blade-casts — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de adds cluster.",
          "Aspect of the Turtle bij zware blade-combo als noodimuniteit."],
      en:["Counter Shot on blade casts — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the adds cluster.",
          "Aspect of the Turtle during heavy blade combo as emergency immunity."],
      da:["Counter Shot på blade-casts — du er mobil og har altid et ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb til burst AoE på adds-klyngen.",
          "Aspect of the Turtle under kraftig blade-kombo som nødimmunitet."]
    },

    'mage-arcane': {
      nl:["Counterspell op blade-casts — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij zware blade-combo als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on blade casts — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during heavy blade combo as emergency immunity — Arcane Mages are glass cannons, use it wisely."],
      da:["Counterspell på blade-casts — du har den bedste interrupt af alle mages.",
          "Gem Arcane Surge til store pulls eller Bloodlust-vinduet til maksimal burst.",
          "Ice Block under kraftig blade-kombo som nødimmunitet — Arcane Mages er glaskanoner, brug det fornuftigt."]
    },

    'mage-fire': {
      nl:["Counterspell op blade-casts — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij zware blade-combo als noodimuniteit."],
      en:["Counterspell on blade casts — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during heavy blade combo as emergency immunity."],
      da:["Counterspell på blade-casts — essentielt for enhver Mage.",
          "Combustion + Pyroclasm til maksimal burst på store pulls.",
          "Ice Block under kraftig blade-kombo som nødimmunitet."]
    },

    'priest-shadow': {
      nl:["Silence op blade-casts — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij zware blade-combo voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on blade casts — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during heavy blade combo for 75% damage reduction — best personal defensive of all clothies."],
      da:["Silence på blade-casts — kombineret med Mind Blast som ranged interrupt.",
          "Void Eruption + Devouring Plague til burst på store pulls.",
          "Dispersion under kraftig blade-kombo til 75% skadereduktion — bedste personlige defensiv af alle clothies."]
    },

    'rogue-assassination': {
      nl:["Kick op blade-casts — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij zware blade-combo voor 100% melee-ontwijking."],
      en:["Kick on blade casts — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during heavy blade combo for 100% melee dodge."],
      da:["Kick på blade-casts — roter med andre melee-interrupts.",
          "Deathmark + Shiv til maksimal single-target burst; Fan of Knives til AoE.",
          "Evasion under kraftig blade-kombo til 100% melee-undvigelse."]
    },

    'rogue-subtlety': {
      nl:["Kick op blade-casts — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij zware blade-combo voor 100% melee-ontwijking."],
      en:["Kick on blade casts — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during heavy blade combo for 100% melee dodge."],
      da:["Kick på blade-casts — roter med andre melee-interrupts.",
          "Shadow Blades + Symbols of Death til maksimal burst i Stealth-vinduet.",
          "Evasion under kraftig blade-kombo til 100% melee-undvigelse."]
    },

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op blade-casts — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij zware blade-combo voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on blade casts — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during heavy blade combo for 40% damage reduction and interrupt immunity."],
      da:["Spell Lock (via Felhunter) på blade-casts — dit eneste pålidelige interrupt.",
          "Malefic Rapture til AoE burst, når flere mål er fulde af DoTs.",
          "Unending Resolve under kraftig blade-kombo til 40% skadereduktion og interrupt-immunitet."]
    },

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op blade-casts — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de adds cluster.",
          "Unending Resolve bij zware blade-combo voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on blade casts — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the adds cluster.",
          "Unending Resolve during heavy blade combo for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på blade-casts — essentielt i høje keys.",
          "Summon Demonic Tyrant + Implosion til maksimal AoE burst på adds-klyngen.",
          "Unending Resolve under kraftig blade-kombo til 40% skadereduktion."]
    },

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op blade-casts — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij zware blade-combo voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on blade casts — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during heavy blade combo for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på blade-casts — dit eneste interrupt.",
          "Summon Infernal + Channel Demonfire til burst på store pulls.",
          "Unending Resolve under kraftig blade-kombo til 40% skadereduktion."]
    }},
  // ── THE BLINDING VALE ── boss 1 ──
  'the-blinding-vale:1:tank': {
    'paladin-protection': {
      nl:["Feuzz schiet dodelijke pijlen — gebruik Line of Sight waar mogelijk.",
          "Avenger's Shield op zijn Light Beam cast voor interrupt + silence.",
          "Ardent Defender bewaren voor de volley-fase."],
      en:["Feuzz fires deadly arrows — use Line of Sight where possible.",
          "Avenger's Shield on his Light Beam cast for interrupt + silence.",
          "Save Ardent Defender for the volley phase."],
      da:["Feuzz affyrer dødelige pile — brug Line of Sight, hvor det er muligt.",
          "Avenger's Shield på hans Light Beam-cast til interrupt + silence.",
          "Gem Ardent Defender til volley-fasen."]
    }
  ,
    'warrior-protection': {
      nl:["Spell Reflection op de blindness-cast voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Blinding Flash als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on the blindness cast for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Blinding Flash as emergency; Rallying Cry for the group."],
      da:["Spell Reflection på blindheds-castet til fuld stavelse-immunitet.",
          "Shield Block uptime er kritisk — hold den aktiv så konsekvent som muligt.",
          "Last Stand under Blinding Flash som nødknap; Rallying Cry til gruppen."]
    },
    'monk-brewmaster': {
      nl:["Spear Hand Strike op de blindness-cast — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Blinding Flash als primaire tank-cooldown."],
      en:["Spear Hand Strike on the blindness cast — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Blinding Flash as primary tank cooldown."],
      da:["Spear Hand Strike på blindheds-castet — kombineret med høj mobilitet altid tilgængelig.",
          "Stagger er din kernemekanik — brug Purifying Brew, når Stagger bliver rød.",
          "Fortifying Brew under Blinding Flash som primær tank-cooldown."]
    },
    'deathknight-blood': {
      nl:["Mind Freeze op de blindness-cast — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Blinding Flash als primaire tank-cooldown."],
      en:["Mind Freeze on the blindness cast — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Blinding Flash as primary tank cooldown."],
      da:["Mind Freeze på blindheds-castet — kombineret med Death Grip altid tilgængelig.",
          "Death Strike er din kernemekanik — brug den efter at have taget skade til maksimal self-healing.",
          "Vampiric Blood under Blinding Flash som primær tank-cooldown."]
    }},
  'the-blinding-vale:1:heal': {
    'druid-restoration': {
      nl:["Tank heeft constante Rejuvenation + Lifebloom nodig vanwege pijlschade.",
          "Ironbark op de speler die getarget is door Light Strike.",
          "Gebruik Barkskin tijdens de volley — ook jij wordt geraakt."],
      en:["Tank needs constant Rejuvenation + Lifebloom because of arrow damage.",
          "Ironbark on the player targeted by Light Strike.",
          "Use Barkskin during the volley — you get hit too."],
      da:["Tanken har brug for konstant Rejuvenation + Lifebloom på grund af pilskade.",
          "Ironbark på den spiller, der er målrettet af Light Strike.",
          "Brug Barkskin under volleys — du bliver også ramt."]
    }
  ,
    'monk-mistweaver': {
      nl:["Revival bij Blinding Flash voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Blinding Flash for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."],
      da:["Revival under Blinding Flash til massiv gruppe-healing i én global.",
          "Spinning Crane Kick + Vivify til effektiv AoE-healing under høj skade.",
          "Life Cocoon på tanken under de kraftigste angreb — unik absorb-cooldown."]
    },
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Blinding Flash op de hele groep plaatsen.",
          "Power Word: Barrier bij Blinding Flash voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Blinding Flash.",
          "Power Word: Barrier during Blinding Flash for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."],
      da:["Disc spiller proaktivt — placer Atonement på hele gruppen inden Blinding Flash.",
          "Power Word: Barrier under Blinding Flash til gruppe-skadereduktion.",
          "Schism + Penance til burst-healing via Atonement på flere mål simultant."]
    },

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Blinding Flash-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Blinding Flash mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."],
      da:["Rescue eller Hover til hurtigt at undslippe Blinding Flash-mekanikker.",
          "Gem Rewind til den kraftigste gruppeskade — unik tidsomvendt healing.",
          "Dream Breath til AoE-healing på flere spillere simultant."]
    },

    'priest-holy': {
      nl:["Symbol of Hope bij Blinding Flash voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Blinding Flash for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."],
      da:["Symbol of Hope under Blinding Flash til gruppe-mana-gendannelse — unikt for Holy Priest.",
          "Holy Word: Sanctify til øjeblikkelig AoE-healing under høje skadespidser.",
          "Guardian Spirit på tanken ved kritiske øjeblikke — forhindrer et dræbende slag."]
    },

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Blinding Flash voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Blinding Flash for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."],
      da:["Hold Healing Rain permanent på gruppen — din base AoE-healing.",
          "Spirit Link Totem under Blinding Flash til gruppe-skadeudligning — unikt i spillet.",
          "Gem Ancestral Protection Totem til det sværeste pull — anden chance for livet."]
    }},
  'the-blinding-vale:1:dps': {
    'hunter-beastmastery': {
      nl:["Counter Shot op Light Beam — hoge prioriteit.",
          "Aspect of the Turtle bij Light Strike als je getarget wordt.",
          "Volledig mobiel — ideale spec voor deze baas met veel beweging."],
      en:["Counter Shot on Light Beam — high priority.",
          "Aspect of the Turtle on Light Strike if you are targeted.",
          "Fully mobile — ideal spec for this high-movement boss."],
      da:["Counter Shot på Light Beam — høj prioritet.",
          "Aspect of the Turtle på Light Strike, hvis du er målrettet.",
          "Fuldt mobil — ideel spec til denne boss med masser af bevægelse."]
    },
    'shaman-elemental': {
      nl:["Wind Shear op Light Beam.",
          "Spiritwalker's Grace voor onafgebroken schade tijdens de volley.",
          "Astral Shift bij Light Strike als je getarget wordt."],
      en:["Wind Shear on Light Beam.",
          "Spiritwalker's Grace for uninterrupted damage during the volley.",
          "Astral Shift on Light Strike if you are targeted."],
      da:["Wind Shear på Light Beam.",
          "Spiritwalker's Grace til uafbrudt skade under volleys.",
          "Astral Shift på Light Strike, hvis du er målrettet."]
    }
  ,
    'warrior-fury': {
      nl:["Pummel op de blindness-cast — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Blinding Flash — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on the blindness cast — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Blinding Flash — one of the best group cooldowns in the game."],
      da:["Pummel på blindheds-castet — kort cooldown, brug den konsekvent.",
          "Recklessness + Bladestorm på store pulls til maksimal AoE burst.",
          "Rallying Cry til gruppen under Blinding Flash — et af de bedste gruppe-cooldowns i spillet."]
    },
    'warrior-arms': {
      nl:["Pummel op de blindness-cast — wissel af met de tank.",
          "Bladestorm op de vale adds cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Blinding Flash als groeps-defensief."],
      en:["Pummel on the blindness cast — rotate with the tank.",
          "Bladestorm on the vale adds cluster for AoE cleave.",
          "Rallying Cry for the group during Blinding Flash as group defensive."],
      da:["Pummel på blindheds-castet — roter med tanken.",
          "Bladestorm på vale-adds-klyngen til AoE cleave.",
          "Rallying Cry til gruppen under Blinding Flash som gruppe-defensiv."]
    },
    'mage-frost': {
      nl:["Counterspell op de blindness-cast — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de vale adds cluster voor maximale AoE.",
          "Ice Block bij Blinding Flash als persoonlijke noodimuniteit."],
      en:["Counterspell on the blindness cast — your interrupt is essential.",
          "Frozen Orb + Blizzard on the vale adds cluster for maximum AoE.",
          "Ice Block during Blinding Flash as personal emergency immunity."],
      da:["Counterspell på blindheds-castet — dit interrupt er uundværligt.",
          "Frozen Orb + Blizzard på vale-adds-klyngen til maksimal AoE.",
          "Ice Block under Blinding Flash som personlig nødimmunitet."]
    },
    'rogue-outlaw': {
      nl:["Kick op de blindness-cast — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de vale adds cluster.",
          "Crimson Vial + Feint bij Blinding Flash voor personal survival."],
      en:["Kick on the blindness cast — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the vale adds cluster.",
          "Crimson Vial + Feint during Blinding Flash for personal survival."],
      da:["Kick på blindheds-castet — roter med andre interrupts.",
          "Blade Flurry til AoE cleave på vale-adds-klyngen.",
          "Crimson Vial + Feint under Blinding Flash til personlig overlevelse."]
    },
    'monk-windwalker': {
      nl:["Spear Hand Strike op de blindness-cast — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de vale adds cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Blinding Flash voor personal defensive."],
      en:["Spear Hand Strike on the blindness cast — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the vale adds cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Blinding Flash for personal defensive."],
      da:["Spear Hand Strike på blindheds-castet — kombineret med din høje mobilitet altid tilgængelig.",
          "Spinning Crane Kick + Fist of the White Tiger på vale-adds-klyngen til burst AoE.",
          "Diffuse Magic eller Dampen Harm under Blinding Flash til personlig defensiv."]
    },
    'shaman-enhancement': {
      nl:["Wind Shear op de blindness-cast — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Blinding Flash als persoonlijk defensief."],
      en:["Wind Shear on the blindness cast — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Blinding Flash as personal defensive."],
      da:["Wind Shear på blindheds-castet — kort cooldown, tag interrupt-ansvar.",
          "Feral Spirit + Doom Winds på store pulls til maksimal AoE burst.",
          "Astral Shift under Blinding Flash som personligt defensiv."]
    },
    'hunter-marksmanship': {
      nl:["Counter Shot op de blindness-cast — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de vale adds cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Blinding Flash als volledige immuniteit."],
      en:["Counter Shot on the blindness cast — fully ranged, always in range.",
          "Volley + Rapid Fire on the vale adds cluster for massive ranged AoE.",
          "Aspect of the Turtle during Blinding Flash for full immunity."],
      da:["Counter Shot på blindheds-castet — fuldt ranged, altid i rækkevidde.",
          "Volley + Rapid Fire på vale-adds-klyngen til massiv ranged AoE.",
          "Aspect of the Turtle under Blinding Flash til fuld immunitet."]
    },
    'deathknight-unholy': {
      nl:["Mind Freeze op de blindness-cast — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de vale adds cluster.",
          "Anti-Magic Shell bij Blinding Flash voor magische schade-immuniteit."],
      en:["Mind Freeze on the blindness cast — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the vale adds cluster.",
          "Anti-Magic Shell during Blinding Flash for magic damage immunity."],
      da:["Mind Freeze på blindheds-castet — dit interrupt.",
          "Army of the Dead + Apocalypse til maksimal AoE burst på vale-adds-klyngen.",
          "Anti-Magic Shell under Blinding Flash til magisk skadeimmunitet."]
    },

    'deathknight-frost': {
      nl:["Mind Freeze op de blindness-cast — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de vale adds cluster voor AoE burst.",
          "Anti-Magic Shell bij Blinding Flash voor magische schade-immuniteit."],
      en:["Mind Freeze on the blindness cast — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the vale adds cluster for AoE burst.",
          "Anti-Magic Shell during Blinding Flash for magic damage immunity."],
      da:["Mind Freeze på blindheds-castet — dit interrupt.",
          "Pillar of Frost + Frostwyrm's Fury på vale-adds-klyngen til AoE burst.",
          "Anti-Magic Shell under Blinding Flash til magisk skadeimmunitet."]
    },

    'demonhunter-devourer': {
      nl:["Disrupt op de blindness-cast — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de vale adds cluster voor ranged AoE burst.",
          "Blur bij Blinding Flash als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on the blindness cast — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the vale adds cluster for ranged AoE burst.",
          "Blur during Blinding Flash as primary defensive — two charges with Demonic Resilience."],
      da:["Disrupt på blindheds-castet — du er semi-ranged, altid i rækkevidde.",
          "Hurl Glaive + Fel Barrage på vale-adds-klyngen til ranged AoE burst.",
          "Blur under Blinding Flash som primær defensiv — to charges med Demonic Resilience."]
    },

    'druid-feral': {
      nl:["Skull Bash op de blindness-cast — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de vale adds cluster.",
          "Survival Instincts bij Blinding Flash als persoonlijk defensief — twee charges."],
      en:["Skull Bash on the blindness cast — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the vale adds cluster.",
          "Survival Instincts during Blinding Flash as personal defensive — two charges."],
      da:["Skull Bash på blindheds-castet — kort cooldown, altid i melee.",
          "Primal Wrath eller Swipe til AoE cleave på vale-adds-klyngen.",
          "Survival Instincts under Blinding Flash som personligt defensiv — to charges."]
    },

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op de blindness-cast — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Blinding Flash als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the blindness cast — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Blinding Flash as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på blindheds-castet — Evoker CC-toolkit.",
          "Aktivér Ebon Might + Breath of Eons på det store pull til maksimal gruppebuff.",
          "Obsidian Scales under Blinding Flash som personligt defensiv."]
    },

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op de blindness-cast — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Blinding Flash als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the blindness cast — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Blinding Flash as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på blindheds-castet — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge på det store pull til maksimal burst.",
          "Obsidian Scales under Blinding Flash som personligt defensiv."]
    },

    'hunter-survival': {
      nl:["Counter Shot op de blindness-cast — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de vale adds cluster.",
          "Aspect of the Turtle bij Blinding Flash als noodimuniteit."],
      en:["Counter Shot on the blindness cast — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the vale adds cluster.",
          "Aspect of the Turtle during Blinding Flash as emergency immunity."],
      da:["Counter Shot på blindheds-castet — du er mobil og har altid et ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb til burst AoE på vale-adds-klyngen.",
          "Aspect of the Turtle under Blinding Flash som nødimmunitet."]
    },

    'mage-arcane': {
      nl:["Counterspell op de blindness-cast — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Blinding Flash als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on the blindness cast — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Blinding Flash as emergency immunity — Arcane Mages are glass cannons, use it wisely."],
      da:["Counterspell på blindheds-castet — du har den bedste interrupt af alle mages.",
          "Gem Arcane Surge til store pulls eller Bloodlust-vinduet til maksimal burst.",
          "Ice Block under Blinding Flash som nødimmunitet — Arcane Mages er glaskanoner, brug det fornuftigt."]
    },

    'mage-fire': {
      nl:["Counterspell op de blindness-cast — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Blinding Flash als noodimuniteit."],
      en:["Counterspell on the blindness cast — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Blinding Flash as emergency immunity."],
      da:["Counterspell på blindheds-castet — essentielt for enhver Mage.",
          "Combustion + Pyroclasm til maksimal burst på store pulls.",
          "Ice Block under Blinding Flash som nødimmunitet."]
    },

    'priest-shadow': {
      nl:["Silence op de blindness-cast — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Blinding Flash voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on the blindness cast — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Blinding Flash for 75% damage reduction — best personal defensive of all clothies."],
      da:["Silence på blindheds-castet — kombineret med Mind Blast som ranged interrupt.",
          "Void Eruption + Devouring Plague til burst på store pulls.",
          "Dispersion under Blinding Flash til 75% skadereduktion — bedste personlige defensiv af alle clothies."]
    },

    'rogue-assassination': {
      nl:["Kick op de blindness-cast — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Blinding Flash voor 100% melee-ontwijking."],
      en:["Kick on the blindness cast — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Blinding Flash for 100% melee dodge."],
      da:["Kick på blindheds-castet — roter med andre melee-interrupts.",
          "Deathmark + Shiv til maksimal single-target burst; Fan of Knives til AoE.",
          "Evasion under Blinding Flash til 100% melee-undvigelse."]
    },

    'rogue-subtlety': {
      nl:["Kick op de blindness-cast — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Blinding Flash voor 100% melee-ontwijking."],
      en:["Kick on the blindness cast — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Blinding Flash for 100% melee dodge."],
      da:["Kick på blindheds-castet — roter med andre melee-interrupts.",
          "Shadow Blades + Symbols of Death til maksimal burst i Stealth-vinduet.",
          "Evasion under Blinding Flash til 100% melee-undvigelse."]
    },

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op de blindness-cast — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Blinding Flash voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on the blindness cast — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Blinding Flash for 40% damage reduction and interrupt immunity."],
      da:["Spell Lock (via Felhunter) på blindheds-castet — dit eneste pålidelige interrupt.",
          "Malefic Rapture til AoE burst, når flere mål er fulde af DoTs.",
          "Unending Resolve under Blinding Flash til 40% skadereduktion og interrupt-immunitet."]
    },

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op de blindness-cast — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de vale adds cluster.",
          "Unending Resolve bij Blinding Flash voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the blindness cast — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the vale adds cluster.",
          "Unending Resolve during Blinding Flash for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på blindheds-castet — essentielt i høje keys.",
          "Summon Demonic Tyrant + Implosion til maksimal AoE burst på vale-adds-klyngen.",
          "Unending Resolve under Blinding Flash til 40% skadereduktion."]
    },

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op de blindness-cast — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Blinding Flash voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the blindness cast — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Blinding Flash for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på blindheds-castet — dit eneste interrupt.",
          "Summon Infernal + Channel Demonfire til burst på store pulls.",
          "Unending Resolve under Blinding Flash til 40% skadereduktion."]
    }},
  // ── DEN OF NALORAKK ── eindbaas (index 2) ──
  'den-of-nalorakk:2:tank': {
    'paladin-protection': {
      nl:["Nalorakk heeft Rampage — wissel Ardent Defender en Guardian of Ancient Kings af voor coverage.",
          "Avenger's Shield op de adds die spawnen tijdens tussenfasen.",
          "Blessing of Freedom op jezelf bij Nalorakk's Chains."],
      en:["Nalorakk has Rampage — alternate Ardent Defender and Guardian of Ancient Kings for coverage.",
          "Avenger's Shield on adds spawning during intermissions.",
          "Blessing of Freedom on yourself during Nalorakk's Chains."],
      da:["Nalorakk har Rampage — skiftes med Ardent Defender og Guardian of Ancient Kings til dækning.",
          "Avenger's Shield på adds, der spawner under mellemfaser.",
          "Blessing of Freedom på dig selv under Nalorakk's Chains."]
    }
  ,
    'demonhunter-vengeance': {
      nl:["Metamorphosis voor de eerste Rampage — dit is de meest gevaarlijke fase.",
          "Sigil of Silence op de add-wave bij elke tussenfase voor groeps-lockdown.",
          "Darkness voor de groep bij de tweede Rampage als Metamorphosis op cooldown is."],
      en:["Metamorphosis for the first Rampage — this is the most dangerous phase.",
          "Sigil of Silence on the add wave during every intermission for group lockdown.",
          "Darkness for the group during the second Rampage if Metamorphosis is on cooldown."],
      da:["Metamorphosis til den første Rampage — dette er den farligste fase.",
          "Sigil of Silence på add-bølgen under hver mellemfase til gruppe-lockdown.",
          "Darkness til gruppen under den anden Rampage, hvis Metamorphosis er på cooldown."]
    },
    'druid-guardian': {
      nl:["Survival Instincts bij de eerste Rampage; Barkskin voor de tweede.",
          "Stampeding Roar voor elke tussenfase zodat iedereen de zones verlaat.",
          "Thrash + Swipe voor dreigings-opbouw op alle adds tegelijk."],
      en:["Survival Instincts on the first Rampage; Barkskin for the second.",
          "Stampeding Roar before every intermission so everyone leaves zones.",
          "Thrash + Swipe for threat generation on all adds simultaneously."],
      da:["Survival Instincts ved den første Rampage; Barkskin til den anden.",
          "Stampeding Roar før hver mellemfase så alle forlader zoner.",
          "Thrash + Swipe til trusselsopbygning på alle adds simultant."]
    },
    'warrior-protection': {
      nl:["Spell Reflection op de roar-cast voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Rampage als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on the roar cast for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Rampage as emergency; Rallying Cry for the group."],
      da:["Spell Reflection på brøl-castet til fuld stavelse-immunitet.",
          "Shield Block uptime er kritisk — hold den aktiv så konsekvent som muligt.",
          "Last Stand under Rampage som nødknap; Rallying Cry til gruppen."]
    },
    'monk-brewmaster': {
      nl:["Spear Hand Strike op de roar-cast — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Rampage als primaire tank-cooldown."],
      en:["Spear Hand Strike on the roar cast — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Rampage as primary tank cooldown."],
      da:["Spear Hand Strike på brøl-castet — kombineret med høj mobilitet altid tilgængelig.",
          "Stagger er din kernemekanik — brug Purifying Brew, når Stagger bliver rød.",
          "Fortifying Brew under Rampage som primær tank-cooldown."]
    },
    'deathknight-blood': {
      nl:["Mind Freeze op de roar-cast — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Rampage als primaire tank-cooldown."],
      en:["Mind Freeze on the roar cast — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Rampage as primary tank cooldown."],
      da:["Mind Freeze på brøl-castet — kombineret med Death Grip altid tilgængelig.",
          "Death Strike er din kernemekanik — brug den efter at have taget skade til maksimal self-healing.",
          "Vampiric Blood under Rampage som primær tank-cooldown."]
    }},
  'den-of-nalorakk:2:heal': {
    'druid-restoration': {
      nl:["Pre-HoT de hele groep vóór elke Rampage — de schade is massaal.",
          "Tranquility bewaren voor de tweede Rampage als je geen andere cooldown meer hebt.",
          "Stampeding Roar zodat iedereen snel de mechanic-zones kan verlaten."],
      en:["Pre-HoT the entire group before every Rampage — the damage is massive.",
          "Save Tranquility for the second Rampage if you have no other cooldowns left.",
          "Stampeding Roar so everyone can quickly leave mechanic zones."],
      da:["Pre-HoT hele gruppen før hver Rampage — skaden er massiv.",
          "Gem Tranquility til den anden Rampage, hvis du ikke har andre cooldowns tilbage.",
          "Stampeding Roar så alle hurtigt kan forlade mekanikzoner."]
    }
  ,
    'paladin-holy': {
      nl:["Aura Mastery bij de eerste Rampage — de zwaarste groepsschade.",
          "Avenging Wrath bewaren voor de tweede Rampage als back-up cooldown.",
          "Blessing of Freedom op spelers die vastkomen in Nalorakk's Chains."],
      en:["Aura Mastery on the first Rampage — the heaviest group damage.",
          "Save Avenging Wrath for the second Rampage as a backup cooldown.",
          "Blessing of Freedom on players caught in Nalorakk's Chains."],
      da:["Aura Mastery ved den første Rampage — den kraftigste gruppeskade.",
          "Gem Avenging Wrath til den anden Rampage som backup-cooldown.",
          "Blessing of Freedom på spillere fanget i Nalorakk's Chains."]
    },
    'monk-mistweaver': {
      nl:["Revival bij Rampage voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Rampage for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."],
      da:["Revival under Rampage til massiv gruppe-healing i én global.",
          "Spinning Crane Kick + Vivify til effektiv AoE-healing under høj skade.",
          "Life Cocoon på tanken under de kraftigste angreb — unik absorb-cooldown."]
    },
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Rampage op de hele groep plaatsen.",
          "Power Word: Barrier bij Rampage voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Rampage.",
          "Power Word: Barrier during Rampage for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."],
      da:["Disc spiller proaktivt — placer Atonement på hele gruppen inden Rampage.",
          "Power Word: Barrier under Rampage til gruppe-skadereduktion.",
          "Schism + Penance til burst-healing via Atonement på flere mål simultant."]
    },

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Rampage-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Rampage mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."],
      da:["Rescue eller Hover til hurtigt at undslippe Rampage-mekanikker.",
          "Gem Rewind til den kraftigste gruppeskade — unik tidsomvendt healing.",
          "Dream Breath til AoE-healing på flere spillere simultant."]
    },

    'priest-holy': {
      nl:["Symbol of Hope bij Rampage voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Rampage for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."],
      da:["Symbol of Hope under Rampage til gruppe-mana-gendannelse — unikt for Holy Priest.",
          "Holy Word: Sanctify til øjeblikkelig AoE-healing under høje skadespidser.",
          "Guardian Spirit på tanken ved kritiske øjeblikke — forhindrer et dræbende slag."]
    },

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Rampage voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Rampage for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."],
      da:["Hold Healing Rain permanent på gruppen — din base AoE-healing.",
          "Spirit Link Totem under Rampage til gruppe-skadeudligning — unikt i spillet.",
          "Gem Ancestral Protection Totem til det sværeste pull — anden chance for livet."]
    }},
  'den-of-nalorakk:2:dps': {
    'hunter-beastmastery': {
      nl:["Adds direct killen bij spawn — Bestial Wrath voor snelle AoE.",
          "Tar Trap om adds te vertragen als de tank kitet.",
          "Primal Rage + Bestial Wrath voor de eindfase van Nalorakk."],
      en:["Kill adds immediately on spawn — Bestial Wrath for fast AoE.",
          "Tar Trap to slow adds if the tank is kiting.",
          "Primal Rage + Bestial Wrath for Nalorakk's final phase."],
      da:["Dræb adds med det samme ved spawn — Bestial Wrath til hurtig AoE.",
          "Tar Trap til at sænke adds, hvis tanken kiter.",
          "Primal Rage + Bestial Wrath til Nalorakks slutfase."]
    },
    'shaman-elemental': {
      nl:["Earthquake + Chain Lightning op de add-clusters bij elke tussenfase.",
          "Capacitor Totem om adds te stunnen zodat de tank ze kan groeperen.",
          "Astral Shift tijdens Rampage als je toch schade oploopt."],
      en:["Earthquake + Chain Lightning on add clusters during every intermission.",
          "Capacitor Totem to stun adds so the tank can group them.",
          "Astral Shift during Rampage if you take damage anyway."],
      da:["Earthquake + Chain Lightning på add-klynger under hver mellemfase.",
          "Capacitor Totem til at stunne adds så tanken kan samle dem.",
          "Astral Shift under Rampage, hvis du alligevel tager skade."]
    }
  ,
    'demonhunter-havoc': {
      nl:["Eye Beam AoE op de add-clusters bij elke tussenfase.",
          "Fel Rush nooit weg van de groep bij Rampage — stay dicht bij de tank.",
          "Darkness plaatsen voor de groep bij Rampage als groeps-defensief."],
      en:["Eye Beam AoE on add clusters during every intermission.",
          "Never Fel Rush away from the group during Rampage — stay close to the tank.",
          "Place Darkness for the group during Rampage as group defensive."],
      da:["Eye Beam AoE på add-klynger under hver mellemfase.",
          "Brug aldrig Fel Rush væk fra gruppen under Rampage — bliv tæt på tanken.",
          "Placer Darkness til gruppen under Rampage som gruppe-defensiv."]
    },
    'druid-balance': {
      nl:["Starfall op de add-clusters — perfect voor tussenfase schade.",
          "Typhoon om adds samen te stoten voor efficiënte AoE.",
          "Barkskin tijdens Rampage als persoonlijk defensief."],
      en:["Starfall on add clusters — perfect for intermission damage.",
          "Typhoon to cluster adds together for efficient AoE.",
          "Barkskin during Rampage as personal defensive."],
      da:["Starfall på add-klynger — perfekt til mellemfase-skade.",
          "Typhoon til at samle adds sammen til effektiv AoE.",
          "Barkskin under Rampage som personligt defensiv."]
    },
    'paladin-retribution': {
      nl:["Wake of Ashes + Divine Storm op de add-clusters bij tussenfase.",
          "Execution Sentence op Nalorakk zelf voor single-target funnel.",
          "Divine Shield bij Rampage als noodrem."],
      en:["Wake of Ashes + Divine Storm on add clusters during intermission.",
          "Execution Sentence on Nalorakk himself for single-target funnel.",
          "Divine Shield during Rampage as emergency."],
      da:["Wake of Ashes + Divine Storm på add-klynger under mellemfase.",
          "Execution Sentence på Nalorakk selv til single-target funnel.",
          "Divine Shield under Rampage som nødknap."]
    },
    'warrior-fury': {
      nl:["Pummel op de roar-cast — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Rampage — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on the roar cast — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Rampage — one of the best group cooldowns in the game."],
      da:["Pummel på brøl-castet — kort cooldown, brug den konsekvent.",
          "Recklessness + Bladestorm på store pulls til maksimal AoE burst.",
          "Rallying Cry til gruppen under Rampage — et af de bedste gruppe-cooldowns i spillet."]
    },
    'warrior-arms': {
      nl:["Pummel op de roar-cast — wissel af met de tank.",
          "Bladestorm op de tussenfase adds cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Rampage als groeps-defensief."],
      en:["Pummel on the roar cast — rotate with the tank.",
          "Bladestorm on the intermission adds cluster for AoE cleave.",
          "Rallying Cry for the group during Rampage as group defensive."],
      da:["Pummel på brøl-castet — roter med tanken.",
          "Bladestorm på mellemfase-adds-klyngen til AoE cleave.",
          "Rallying Cry til gruppen under Rampage som gruppe-defensiv."]
    },
    'mage-frost': {
      nl:["Counterspell op de roar-cast — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de tussenfase adds cluster voor maximale AoE.",
          "Ice Block bij Rampage als persoonlijke noodimuniteit."],
      en:["Counterspell on the roar cast — your interrupt is essential.",
          "Frozen Orb + Blizzard on the intermission adds cluster for maximum AoE.",
          "Ice Block during Rampage as personal emergency immunity."],
      da:["Counterspell på brøl-castet — dit interrupt er uundværligt.",
          "Frozen Orb + Blizzard på mellemfase-adds-klyngen til maksimal AoE.",
          "Ice Block under Rampage som personlig nødimmunitet."]
    },
    'rogue-outlaw': {
      nl:["Kick op de roar-cast — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de tussenfase adds cluster.",
          "Crimson Vial + Feint bij Rampage voor personal survival."],
      en:["Kick on the roar cast — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the intermission adds cluster.",
          "Crimson Vial + Feint during Rampage for personal survival."],
      da:["Kick på brøl-castet — roter med andre interrupts.",
          "Blade Flurry til AoE cleave på mellemfase-adds-klyngen.",
          "Crimson Vial + Feint under Rampage til personlig overlevelse."]
    },
    'monk-windwalker': {
      nl:["Spear Hand Strike op de roar-cast — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de tussenfase adds cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Rampage voor personal defensive."],
      en:["Spear Hand Strike on the roar cast — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the intermission adds cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Rampage for personal defensive."],
      da:["Spear Hand Strike på brøl-castet — kombineret med din høje mobilitet altid tilgængelig.",
          "Spinning Crane Kick + Fist of the White Tiger på mellemfase-adds-klyngen til burst AoE.",
          "Diffuse Magic eller Dampen Harm under Rampage til personlig defensiv."]
    },
    'shaman-enhancement': {
      nl:["Wind Shear op de roar-cast — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Rampage als persoonlijk defensief."],
      en:["Wind Shear on the roar cast — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Rampage as personal defensive."],
      da:["Wind Shear på brøl-castet — kort cooldown, tag interrupt-ansvar.",
          "Feral Spirit + Doom Winds på store pulls til maksimal AoE burst.",
          "Astral Shift under Rampage som personligt defensiv."]
    },
    'hunter-marksmanship': {
      nl:["Counter Shot op de roar-cast — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de tussenfase adds cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Rampage als volledige immuniteit."],
      en:["Counter Shot on the roar cast — fully ranged, always in range.",
          "Volley + Rapid Fire on the intermission adds cluster for massive ranged AoE.",
          "Aspect of the Turtle during Rampage for full immunity."],
      da:["Counter Shot på brøl-castet — fuldt ranged, altid i rækkevidde.",
          "Volley + Rapid Fire på mellemfase-adds-klyngen til massiv ranged AoE.",
          "Aspect of the Turtle under Rampage til fuld immunitet."]
    },
    'deathknight-unholy': {
      nl:["Mind Freeze op de roar-cast — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de tussenfase adds cluster.",
          "Anti-Magic Shell bij Rampage voor magische schade-immuniteit."],
      en:["Mind Freeze on the roar cast — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the intermission adds cluster.",
          "Anti-Magic Shell during Rampage for magic damage immunity."],
      da:["Mind Freeze på brøl-castet — dit interrupt.",
          "Army of the Dead + Apocalypse til maksimal AoE burst på mellemfase-adds-klyngen.",
          "Anti-Magic Shell under Rampage til magisk skadeimmunitet."]
    },

    'deathknight-frost': {
      nl:["Mind Freeze op de roar-cast — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de adds cluster voor AoE burst.",
          "Anti-Magic Shell bij Rampage voor magische schade-immuniteit."],
      en:["Mind Freeze on the roar cast — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the adds cluster for AoE burst.",
          "Anti-Magic Shell during Rampage for magic damage immunity."],
      da:["Mind Freeze på brøl-castet — dit interrupt.",
          "Pillar of Frost + Frostwyrm's Fury på adds-klyngen til AoE burst.",
          "Anti-Magic Shell under Rampage til magisk skadeimmunitet."]
    },

    'demonhunter-devourer': {
      nl:["Disrupt op de roar-cast — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de adds cluster voor ranged AoE burst.",
          "Blur bij Rampage als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on the roar cast — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the adds cluster for ranged AoE burst.",
          "Blur during Rampage as primary defensive — two charges with Demonic Resilience."],
      da:["Disrupt på brøl-castet — du er semi-ranged, altid i rækkevidde.",
          "Hurl Glaive + Fel Barrage på adds-klyngen til ranged AoE burst.",
          "Blur under Rampage som primær defensiv — to charges med Demonic Resilience."]
    },

    'druid-feral': {
      nl:["Skull Bash op de roar-cast — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de adds cluster.",
          "Survival Instincts bij Rampage als persoonlijk defensief — twee charges."],
      en:["Skull Bash on the roar cast — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the adds cluster.",
          "Survival Instincts during Rampage as personal defensive — two charges."],
      da:["Skull Bash på brøl-castet — kort cooldown, altid i melee.",
          "Primal Wrath eller Swipe til AoE cleave på adds-klyngen.",
          "Survival Instincts under Rampage som personligt defensiv — to charges."]
    },

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op de roar-cast — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Rampage als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the roar cast — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Rampage as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på brøl-castet — Evoker CC-toolkit.",
          "Aktivér Ebon Might + Breath of Eons på det store pull til maksimal gruppebuff.",
          "Obsidian Scales under Rampage som personligt defensiv."]
    },

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op de roar-cast — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Rampage als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the roar cast — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Rampage as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på brøl-castet — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge på det store pull til maksimal burst.",
          "Obsidian Scales under Rampage som personligt defensiv."]
    },

    'hunter-survival': {
      nl:["Counter Shot op de roar-cast — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de adds cluster.",
          "Aspect of the Turtle bij Rampage als noodimuniteit."],
      en:["Counter Shot on the roar cast — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the adds cluster.",
          "Aspect of the Turtle during Rampage as emergency immunity."],
      da:["Counter Shot på brøl-castet — du er mobil og har altid et ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb til burst AoE på adds-klyngen.",
          "Aspect of the Turtle under Rampage som nødimmunitet."]
    },

    'mage-arcane': {
      nl:["Counterspell op de roar-cast — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Rampage als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on the roar cast — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Rampage as emergency immunity — Arcane Mages are glass cannons, use it wisely."],
      da:["Counterspell på brøl-castet — du har den bedste interrupt af alle mages.",
          "Gem Arcane Surge til store pulls eller Bloodlust-vinduet til maksimal burst.",
          "Ice Block under Rampage som nødimmunitet — Arcane Mages er glaskanoner, brug det fornuftigt."]
    },

    'mage-fire': {
      nl:["Counterspell op de roar-cast — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Rampage als noodimuniteit."],
      en:["Counterspell on the roar cast — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Rampage as emergency immunity."],
      da:["Counterspell på brøl-castet — essentielt for enhver Mage.",
          "Combustion + Pyroclasm til maksimal burst på store pulls.",
          "Ice Block under Rampage som nødimmunitet."]
    },

    'priest-shadow': {
      nl:["Silence op de roar-cast — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Rampage voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on the roar cast — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Rampage for 75% damage reduction — best personal defensive of all clothies."],
      da:["Silence på brøl-castet — kombineret med Mind Blast som ranged interrupt.",
          "Void Eruption + Devouring Plague til burst på store pulls.",
          "Dispersion under Rampage til 75% skadereduktion — bedste personlige defensiv af alle clothies."]
    },

    'rogue-assassination': {
      nl:["Kick op de roar-cast — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Rampage voor 100% melee-ontwijking."],
      en:["Kick on the roar cast — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Rampage for 100% melee dodge."],
      da:["Kick på brøl-castet — roter med andre melee-interrupts.",
          "Deathmark + Shiv til maksimal single-target burst; Fan of Knives til AoE.",
          "Evasion under Rampage til 100% melee-undvigelse."]
    },

    'rogue-subtlety': {
      nl:["Kick op de roar-cast — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Rampage voor 100% melee-ontwijking."],
      en:["Kick on the roar cast — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Rampage for 100% melee dodge."],
      da:["Kick på brøl-castet — roter med andre melee-interrupts.",
          "Shadow Blades + Symbols of Death til maksimal burst i Stealth-vinduet.",
          "Evasion under Rampage til 100% melee-undvigelse."]
    },

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op de roar-cast — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Rampage voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on the roar cast — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Rampage for 40% damage reduction and interrupt immunity."],
      da:["Spell Lock (via Felhunter) på brøl-castet — dit eneste pålidelige interrupt.",
          "Malefic Rapture til AoE burst, når flere mål er fulde af DoTs.",
          "Unending Resolve under Rampage til 40% skadereduktion og interrupt-immunitet."]
    },

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op de roar-cast — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de adds cluster.",
          "Unending Resolve bij Rampage voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the roar cast — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the adds cluster.",
          "Unending Resolve during Rampage for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på brøl-castet — essentielt i høje keys.",
          "Summon Demonic Tyrant + Implosion til maksimal AoE burst på adds-klyngen.",
          "Unending Resolve under Rampage til 40% skadereduktion."]
    },

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op de roar-cast — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Rampage voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the roar cast — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Rampage for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på brøl-castet — dit eneste interrupt.",
          "Summon Infernal + Channel Demonfire til burst på store pulls.",
          "Unending Resolve under Rampage til 40% skadereduktion."]
    }},
  // ── VOIDSCAR ARENA ── eindbaas (index 2) ──
  'voidscar-arena:2:tank': {
    'paladin-protection': {
      nl:["Chaomus heeft Void Eruption — Divine Shield voor volledige immuniteit op het ergste moment.",
          "Avenger's Shield op Void Constructs voor silence + interrupt.",
          "Guardian of Ancient Kings in de finale burn-fase."],
      en:["Chaomus has Void Eruption — Divine Shield for full immunity at the worst moment.",
          "Avenger's Shield on Void Constructs for silence + interrupt.",
          "Guardian of Ancient Kings in the final burn phase."],
      da:["Chaomus har Void Eruption — Divine Shield til fuld immunitet på det værste tidspunkt.",
          "Avenger's Shield på Void Constructs til silence + interrupt.",
          "Guardian of Ancient Kings i den endelige burn-fase."]
    }
  ,
    'demonhunter-vengeance': {
      nl:["Metamorphosis bewaren voor Void Eruption — op dat moment is AoE-tanken het moeilijkst.",
          "Sigil of Silence op Void Constructs bij spawn voor directe lockdown.",
          "Fiery Brand op Chaomus tijdens de finale burn-fase."],
      en:["Save Metamorphosis for Void Eruption — that is when AoE tanking is hardest.",
          "Sigil of Silence on Void Constructs at spawn for immediate lockdown.",
          "Fiery Brand on Chaomus during the final burn phase."],
      da:["Gem Metamorphosis til Void Eruption — det er der, AoE-tanking er sværest.",
          "Sigil of Silence på Void Constructs ved spawn til øjeblikkelig lockdown.",
          "Fiery Brand på Chaomus under den endelige burn-fase."]
    },
    'druid-guardian': {
      nl:["Survival Instincts bij Void Eruption als primair defensief.",
          "Stampeding Roar zodat DPS snel de void-zones kan verlaten.",
          "Thrash + Moonfire voor threat op de Void Constructs."],
      en:["Survival Instincts during Void Eruption as primary defensive.",
          "Stampeding Roar so DPS can quickly leave void zones.",
          "Thrash + Moonfire for threat on the Void Constructs."],
      da:["Survival Instincts under Void Eruption som primær defensiv.",
          "Stampeding Roar så DPS hurtigt kan forlade void-zoner.",
          "Thrash + Moonfire til trussel på Void Constructs."]
    },
    'warrior-protection': {
      nl:["Spell Reflection op Void Channeling voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Void Eruption als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on Void Channeling for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Void Eruption as emergency; Rallying Cry for the group."],
      da:["Spell Reflection på Void Channeling til fuld stavelse-immunitet.",
          "Shield Block uptime er kritisk — hold den aktiv så konsekvent som muligt.",
          "Last Stand under Void Eruption som nødknap; Rallying Cry til gruppen."]
    },
    'monk-brewmaster': {
      nl:["Spear Hand Strike op Void Channeling — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Void Eruption als primaire tank-cooldown."],
      en:["Spear Hand Strike on Void Channeling — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Void Eruption as primary tank cooldown."],
      da:["Spear Hand Strike på Void Channeling — kombineret med høj mobilitet altid tilgængelig.",
          "Stagger er din kernemekanik — brug Purifying Brew, når Stagger bliver rød.",
          "Fortifying Brew under Void Eruption som primær tank-cooldown."]
    },
    'deathknight-blood': {
      nl:["Mind Freeze op Void Channeling — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Void Eruption als primaire tank-cooldown."],
      en:["Mind Freeze on Void Channeling — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Void Eruption as primary tank cooldown."],
      da:["Mind Freeze på Void Channeling — kombineret med Death Grip altid tilgængelig.",
          "Death Strike er din kernemekanik — brug den efter at have taget skade til maksimal self-healing.",
          "Vampiric Blood under Void Eruption som primær tank-cooldown."]
    }},
  'voidscar-arena:2:heal': {
    'druid-restoration': {
      nl:["Tranquility bij Void Eruption — het grootste healing-moment van de dungeon.",
          "Ironbark op de tank bij Void Slam.",
          "Cyclone op een Void Construct als de tank er eentje kwijtraakt."],
      en:["Tranquility on Void Eruption — the biggest healing moment in the dungeon.",
          "Ironbark on tank during Void Slam.",
          "Cyclone on a Void Construct if the tank loses one."],
      da:["Tranquility ved Void Eruption — det største healingøjeblik i dungeons.",
          "Ironbark på tanken under Void Slam.",
          "Cyclone på en Void Construct, hvis tanken mister en."]
    }
  ,
    'paladin-holy': {
      nl:["Aura Mastery bij Void Eruption — de zwaarste AoE van de baas.",
          "Divine Toll op de tank bij Void Slam voor directe nood-HP.",
          "Blinding Light om Void Constructs te stoppen als ze niet snel genoeg sterven."],
      en:["Aura Mastery during Void Eruption — the boss heaviest AoE.",
          "Divine Toll on the tank during Void Slam for immediate emergency HP.",
          "Blinding Light to stop Void Constructs if they do not die fast enough."],
      da:["Aura Mastery under Void Eruption — bossens kraftigste AoE.",
          "Divine Toll på tanken under Void Slam til umiddelbar nød-HP.",
          "Blinding Light til at stoppe Void Constructs, hvis de ikke dør hurtigt nok."]
    },
    'monk-mistweaver': {
      nl:["Revival bij Void Eruption voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Void Eruption for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."],
      da:["Revival under Void Eruption til massiv gruppe-healing i én global.",
          "Spinning Crane Kick + Vivify til effektiv AoE-healing under høj skade.",
          "Life Cocoon på tanken under de kraftigste angreb — unik absorb-cooldown."]
    },
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Void Eruption op de hele groep plaatsen.",
          "Power Word: Barrier bij Void Eruption voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Void Eruption.",
          "Power Word: Barrier during Void Eruption for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."],
      da:["Disc spiller proaktivt — placer Atonement på hele gruppen inden Void Eruption.",
          "Power Word: Barrier under Void Eruption til gruppe-skadereduktion.",
          "Schism + Penance til burst-healing via Atonement på flere mål simultant."]
    },

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Void Eruption-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Void Eruption mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."],
      da:["Rescue eller Hover til hurtigt at undslippe Void Eruption-mekanikker.",
          "Gem Rewind til den kraftigste gruppeskade — unik tidsomvendt healing.",
          "Dream Breath til AoE-healing på flere spillere simultant."]
    },

    'priest-holy': {
      nl:["Symbol of Hope bij Void Eruption voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Void Eruption for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."],
      da:["Symbol of Hope under Void Eruption til gruppe-mana-gendannelse — unikt for Holy Priest.",
          "Holy Word: Sanctify til øjeblikkelig AoE-healing under høje skadespidser.",
          "Guardian Spirit på tanken ved kritiske øjeblikke — forhindrer et dræbende slag."]
    },

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Void Eruption voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Void Eruption for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."],
      da:["Hold Healing Rain permanent på gruppen — din base AoE-healing.",
          "Spirit Link Totem under Void Eruption til gruppe-skadeudligning — unikt i spillet.",
          "Gem Ancestral Protection Totem til det sværeste pull — anden chance for livet."]
    }},
  'voidscar-arena:2:dps': {
    'hunter-beastmastery': {
      nl:["Void Constructs direct killen — Bestial Wrath AoE.",
          "Counter Shot op Void Channeling.",
          "Aspect of the Turtle bij Void Eruption als je er niet op tijd uit bent."],
      en:["Kill Void Constructs immediately — Bestial Wrath AoE.",
          "Counter Shot on Void Channeling.",
          "Aspect of the Turtle during Void Eruption if you are not out in time."],
      da:["Dræb Void Constructs med det samme — Bestial Wrath AoE.",
          "Counter Shot på Void Channeling.",
          "Aspect of the Turtle under Void Eruption, hvis du ikke er ude i tide."]
    },
    'shaman-elemental': {
      nl:["Wind Shear op Void Channeling — hoge prioriteit.",
          "Capacitor Totem op de Void Constructs voor een groepsstun.",
          "Astral Shift bij Void Eruption als defensief."],
      en:["Wind Shear on Void Channeling — high priority.",
          "Capacitor Totem on Void Constructs for a group stun.",
          "Astral Shift during Void Eruption as a defensive."],
      da:["Wind Shear på Void Channeling — høj prioritet.",
          "Capacitor Totem på Void Constructs til en gruppestun.",
          "Astral Shift under Void Eruption som defensiv."]
    }
  ,
    'demonhunter-havoc': {
      nl:["Disrupt op Void Channeling — snelste melee-interrupt.",
          "Eye Beam op de Void Construct cluster voor snelle AoE burst.",
          "Netherwalk bij Void Eruption als extra immuniteit."],
      en:["Disrupt on Void Channeling — fastest melee interrupt.",
          "Eye Beam on the Void Construct cluster for quick AoE burst.",
          "Netherwalk during Void Eruption as extra immunity."],
      da:["Disrupt på Void Channeling — hurtigste melee-interrupt.",
          "Eye Beam på Void Construct-klyngen til hurtig AoE burst.",
          "Netherwalk under Void Eruption som ekstra immunitet."]
    },
    'druid-balance': {
      nl:["Starfall op de Void Constructs voor constante AoE-schade.",
          "Typhoon om Void Constructs te groeperen voor efficiënte kill.",
          "Barkskin bij Void Eruption als persoonlijk defensief."],
      en:["Starfall on the Void Constructs for constant AoE damage.",
          "Typhoon to group Void Constructs for efficient kill.",
          "Barkskin during Void Eruption as personal defensive."],
      da:["Starfall på Void Constructs for konstant AoE-skade.",
          "Typhoon til at samle Void Constructs til effektiv drab.",
          "Barkskin under Void Eruption som personligt defensiv."]
    },
    'paladin-retribution': {
      nl:["Rebuke op Void Channeling zodra je in bereik bent.",
          "Wake of Ashes + Divine Storm op de Void Construct cluster.",
          "Divine Shield bij Void Eruption als noodrem."],
      en:["Rebuke on Void Channeling as soon as you are in range.",
          "Wake of Ashes + Divine Storm on the Void Construct cluster.",
          "Divine Shield during Void Eruption as emergency."],
      da:["Rebuke på Void Channeling, så snart du er i rækkevidde.",
          "Wake of Ashes + Divine Storm på Void Construct-klyngen.",
          "Divine Shield under Void Eruption som nødknap."]
    },
    'warrior-fury': {
      nl:["Pummel op Void Channeling — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Void Eruption — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on Void Channeling — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Void Eruption — one of the best group cooldowns in the game."],
      da:["Pummel på Void Channeling — kort cooldown, brug den konsekvent.",
          "Recklessness + Bladestorm på store pulls til maksimal AoE burst.",
          "Rallying Cry til gruppen under Void Eruption — et af de bedste gruppe-cooldowns i spillet."]
    },
    'warrior-arms': {
      nl:["Pummel op Void Channeling — wissel af met de tank.",
          "Bladestorm op de Void Constructs cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Void Eruption als groeps-defensief."],
      en:["Pummel on Void Channeling — rotate with the tank.",
          "Bladestorm on the Void Constructs cluster for AoE cleave.",
          "Rallying Cry for the group during Void Eruption as group defensive."],
      da:["Pummel på Void Channeling — roter med tanken.",
          "Bladestorm på Void Constructs-klyngen til AoE cleave.",
          "Rallying Cry til gruppen under Void Eruption som gruppe-defensiv."]
    },
    'mage-frost': {
      nl:["Counterspell op Void Channeling — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de Void Constructs cluster voor maximale AoE.",
          "Ice Block bij Void Eruption als persoonlijke noodimuniteit."],
      en:["Counterspell on Void Channeling — your interrupt is essential.",
          "Frozen Orb + Blizzard on the Void Constructs cluster for maximum AoE.",
          "Ice Block during Void Eruption as personal emergency immunity."],
      da:["Counterspell på Void Channeling — dit interrupt er uundværligt.",
          "Frozen Orb + Blizzard på Void Constructs-klyngen til maksimal AoE.",
          "Ice Block under Void Eruption som personlig nødimmunitet."]
    },
    'rogue-outlaw': {
      nl:["Kick op Void Channeling — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de Void Constructs cluster.",
          "Crimson Vial + Feint bij Void Eruption voor personal survival."],
      en:["Kick on Void Channeling — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the Void Constructs cluster.",
          "Crimson Vial + Feint during Void Eruption for personal survival."],
      da:["Kick på Void Channeling — roter med andre interrupts.",
          "Blade Flurry til AoE cleave på Void Constructs-klyngen.",
          "Crimson Vial + Feint under Void Eruption til personlig overlevelse."]
    },
    'monk-windwalker': {
      nl:["Spear Hand Strike op Void Channeling — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de Void Constructs cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Void Eruption voor personal defensive."],
      en:["Spear Hand Strike on Void Channeling — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the Void Constructs cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Void Eruption for personal defensive."],
      da:["Spear Hand Strike på Void Channeling — kombineret med din høje mobilitet altid tilgængelig.",
          "Spinning Crane Kick + Fist of the White Tiger på Void Constructs-klyngen til burst AoE.",
          "Diffuse Magic eller Dampen Harm under Void Eruption til personlig defensiv."]
    },
    'shaman-enhancement': {
      nl:["Wind Shear op Void Channeling — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Void Eruption als persoonlijk defensief."],
      en:["Wind Shear on Void Channeling — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Void Eruption as personal defensive."],
      da:["Wind Shear på Void Channeling — kort cooldown, tag interrupt-ansvar.",
          "Feral Spirit + Doom Winds på store pulls til maksimal AoE burst.",
          "Astral Shift under Void Eruption som personligt defensiv."]
    },
    'hunter-marksmanship': {
      nl:["Counter Shot op Void Channeling — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de Void Constructs cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Void Eruption als volledige immuniteit."],
      en:["Counter Shot on Void Channeling — fully ranged, always in range.",
          "Volley + Rapid Fire on the Void Constructs cluster for massive ranged AoE.",
          "Aspect of the Turtle during Void Eruption for full immunity."],
      da:["Counter Shot på Void Channeling — fuldt ranged, altid i rækkevidde.",
          "Volley + Rapid Fire på Void Constructs-klyngen til massiv ranged AoE.",
          "Aspect of the Turtle under Void Eruption til fuld immunitet."]
    },
    'deathknight-unholy': {
      nl:["Mind Freeze op Void Channeling — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de Void Constructs cluster.",
          "Anti-Magic Shell bij Void Eruption voor magische schade-immuniteit."],
      en:["Mind Freeze on Void Channeling — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the Void Constructs cluster.",
          "Anti-Magic Shell during Void Eruption for magic damage immunity."],
      da:["Mind Freeze på Void Channeling — dit interrupt.",
          "Army of the Dead + Apocalypse til maksimal AoE burst på Void Constructs-klyngen.",
          "Anti-Magic Shell under Void Eruption til magisk skadeimmunitet."]
    },

    'deathknight-frost': {
      nl:["Mind Freeze op Void Channeling — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de Void Constructs cluster voor AoE burst.",
          "Anti-Magic Shell bij Void Eruption voor magische schade-immuniteit."],
      en:["Mind Freeze on Void Channeling — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the Void Constructs cluster for AoE burst.",
          "Anti-Magic Shell during Void Eruption for magic damage immunity."],
      da:["Mind Freeze på Void Channeling — dit interrupt.",
          "Pillar of Frost + Frostwyrm's Fury på Void Constructs-klyngen til AoE burst.",
          "Anti-Magic Shell under Void Eruption til magisk skadeimmunitet."]
    },

    'demonhunter-devourer': {
      nl:["Disrupt op Void Channeling — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de Void Constructs cluster voor ranged AoE burst.",
          "Blur bij Void Eruption als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on Void Channeling — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the Void Constructs cluster for ranged AoE burst.",
          "Blur during Void Eruption as primary defensive — two charges with Demonic Resilience."],
      da:["Disrupt på Void Channeling — du er semi-ranged, altid i rækkevidde.",
          "Hurl Glaive + Fel Barrage på Void Constructs-klyngen til ranged AoE burst.",
          "Blur under Void Eruption som primær defensiv — to charges med Demonic Resilience."]
    },

    'druid-feral': {
      nl:["Skull Bash op Void Channeling — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de Void Constructs cluster.",
          "Survival Instincts bij Void Eruption als persoonlijk defensief — twee charges."],
      en:["Skull Bash on Void Channeling — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the Void Constructs cluster.",
          "Survival Instincts during Void Eruption as personal defensive — two charges."],
      da:["Skull Bash på Void Channeling — kort cooldown, altid i melee.",
          "Primal Wrath eller Swipe til AoE cleave på Void Constructs-klyngen.",
          "Survival Instincts under Void Eruption som personligt defensiv — to charges."]
    },

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op Void Channeling — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Void Eruption als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on Void Channeling — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Void Eruption as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på Void Channeling — Evoker CC-toolkit.",
          "Aktivér Ebon Might + Breath of Eons på det store pull til maksimal gruppebuff.",
          "Obsidian Scales under Void Eruption som personligt defensiv."]
    },

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op Void Channeling — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Void Eruption als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on Void Channeling — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Void Eruption as personal defensive."],
      da:["Tail Swipe eller Wing Buffet på Void Channeling — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge på det store pull til maksimal burst.",
          "Obsidian Scales under Void Eruption som personligt defensiv."]
    },

    'hunter-survival': {
      nl:["Counter Shot op Void Channeling — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de Void Constructs cluster.",
          "Aspect of the Turtle bij Void Eruption als noodimuniteit."],
      en:["Counter Shot on Void Channeling — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the Void Constructs cluster.",
          "Aspect of the Turtle during Void Eruption as emergency immunity."],
      da:["Counter Shot på Void Channeling — du er mobil og har altid et ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb til burst AoE på Void Constructs-klyngen.",
          "Aspect of the Turtle under Void Eruption som nødimmunitet."]
    },

    'mage-arcane': {
      nl:["Counterspell op Void Channeling — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Void Eruption als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on Void Channeling — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Void Eruption as emergency immunity — Arcane Mages are glass cannons, use it wisely."],
      da:["Counterspell på Void Channeling — du har den bedste interrupt af alle mages.",
          "Gem Arcane Surge til store pulls eller Bloodlust-vinduet til maksimal burst.",
          "Ice Block under Void Eruption som nødimmunitet — Arcane Mages er glaskanoner, brug det fornuftigt."]
    },

    'mage-fire': {
      nl:["Counterspell op Void Channeling — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Void Eruption als noodimuniteit."],
      en:["Counterspell on Void Channeling — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Void Eruption as emergency immunity."],
      da:["Counterspell på Void Channeling — essentielt for enhver Mage.",
          "Combustion + Pyroclasm til maksimal burst på store pulls.",
          "Ice Block under Void Eruption som nødimmunitet."]
    },

    'priest-shadow': {
      nl:["Silence op Void Channeling — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Void Eruption voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on Void Channeling — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Void Eruption for 75% damage reduction — best personal defensive of all clothies."],
      da:["Silence på Void Channeling — kombineret med Mind Blast som ranged interrupt.",
          "Void Eruption + Devouring Plague til burst på store pulls.",
          "Dispersion under Void Eruption til 75% skadereduktion — bedste personlige defensiv af alle clothies."]
    },

    'rogue-assassination': {
      nl:["Kick op Void Channeling — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Void Eruption voor 100% melee-ontwijking."],
      en:["Kick on Void Channeling — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Void Eruption for 100% melee dodge."],
      da:["Kick på Void Channeling — roter med andre melee-interrupts.",
          "Deathmark + Shiv til maksimal single-target burst; Fan of Knives til AoE.",
          "Evasion under Void Eruption til 100% melee-undvigelse."]
    },

    'rogue-subtlety': {
      nl:["Kick op Void Channeling — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Void Eruption voor 100% melee-ontwijking."],
      en:["Kick on Void Channeling — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Void Eruption for 100% melee dodge."],
      da:["Kick på Void Channeling — roter med andre melee-interrupts.",
          "Shadow Blades + Symbols of Death til maksimal burst i Stealth-vinduet.",
          "Evasion under Void Eruption til 100% melee-undvigelse."]
    },

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op Void Channeling — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Void Eruption voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on Void Channeling — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Void Eruption for 40% damage reduction and interrupt immunity."],
      da:["Spell Lock (via Felhunter) på Void Channeling — dit eneste pålidelige interrupt.",
          "Malefic Rapture til AoE burst, når flere mål er fulde af DoTs.",
          "Unending Resolve under Void Eruption til 40% skadereduktion og interrupt-immunitet."]
    },

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op Void Channeling — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de Void Constructs cluster.",
          "Unending Resolve bij Void Eruption voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on Void Channeling — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the Void Constructs cluster.",
          "Unending Resolve during Void Eruption for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på Void Channeling — essentielt i høje keys.",
          "Summon Demonic Tyrant + Implosion til maksimal AoE burst på Void Constructs-klyngen.",
          "Unending Resolve under Void Eruption til 40% skadereduktion."]
    },

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op Void Channeling — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Void Eruption voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on Void Channeling — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Void Eruption for 40% damage reduction."],
      da:["Spell Lock (via Felhunter) på Void Channeling — dit eneste interrupt.",
          "Summon Infernal + Channel Demonfire til burst på store pulls.",
          "Unending Resolve under Void Eruption til 40% skadereduktion."]
    }}

};


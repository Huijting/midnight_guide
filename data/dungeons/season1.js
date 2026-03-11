// season1.js — WoW Midnight Dungeon Data — Season 1
// Auto-gegenereerd vanuit index.html v4.3

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
     tank:{nl:["Latch's Bone Hack = zware fysieke schade — gebruik een defensive.","Debilitating Shriek verhoogt alle schade die je ontvangt — combineer dit nooit met Bone Hack zonder defensive."],en:["Latch's Bone Hack deals heavy physical damage — use a defensive.","Debilitating Shriek increases all damage taken — never overlap this with Bone Hack without a defensive active."],da:["Latch's Bone Hack giver kraftig fysisk skade — brug en defensive.","Debilitating Shriek øger al skade taget — kombinér det aldrig med Bone Hack uden en aktiv defensive."]},
     heal:{nl:["Debilitating Shriek = meer schade binnenkomend — verhoog je healing direct.","Latch's Heaving Yank kan jouw cast onderbreken — positioneer jezelf veilig."],en:["Debilitating Shriek means more incoming damage — increase your healing output immediately.","Latch's Heaving Yank can interrupt your casts — position yourself safely."],da:["Debilitating Shriek betyder mere indkommende skade — øg din healing med det samme.","Latch's Heaving Yank kan afbryde dine casts — placér dig sikkert."]},
     dps:{nl:["Beide bazen gelijkmatig aanvallen — Broken Bond op de overlevende is dodelijk.","Onderbreek Kalis's Shadow Bolt.","Dispel Curse of Darkness direct — anders fixeert een Dark Entity de speler 12 seconden."],en:["Attack both bosses evenly — Broken Bond on the survivor is lethal.","Interrupt Kalis's Shadow Bolt every cast.","Dispel Curse of Darkness immediately — otherwise a Dark Entity fixates the player for 12 seconds."],da:["Angrib begge bosser jævnt — Broken Bond på den overlevende er dødelig.","Afbryd Kalis's Shadow Bolt ved hvert cast.","Dispel Curse of Darkness med det samme — ellers fixerer en Dark Entity spilleren i 12 sekunder."]}},
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
     desc:{nl:"Elite Spellbreaker die de Cynosure bewaakt. Gebruikt Polymorph en spelweerkaatsing om slechte interrupt-discipline te bestraffen.",en:"An elite Spellbreaker guarding the Cynosure. Uses Polymorph and spell reflection to punish poor interrupt discipline.",da:"En elite Spellbreaker, der vogter Cynosure. Bruger Polymorph og spell reflection til at straffe dårlig interrupt-disciplin."},
     tank:{nl:["Handhaaf aggro — zijn Spellbreaker-vaardigheden kunnen tijdelijk dreigingsoverdracht veroorzaken.","Gooi geen zware casts in zijn spelweerkaatsingsschild."],en:["Maintain aggro — his Spellbreaker abilities can temporarily cause threat transfer.","Do not cast high-damage spells into his spell reflection shield."],da:["Oprethold aggro — hans Spellbreaker-evner kan midlertidigt forårsage trusselsoverførsel.","Cast ikke kraftige spells ind i hans spell reflection-skjold."]},
     heal:{nl:["Polymorphed speler = verlies DPS-venster — heal defensief tijdens Polymorph.","Sunlash verwijdert soms buffs — houd dit in de gaten."],en:["A Polymorphed player means a lost DPS window — heal defensively during Polymorph.","Sunlash occasionally removes buffs — monitor this."],da:["En Polymorphet spiller betyder et tabt DPS-vindue — heal defensivt under Polymorph.","Sunlash fjerner af og til buffs — hold øje med dette."]},
     dps:{nl:["HOOGSTE PRIORITEIT: onderbreek ELKE Polymorph-cast — laat hem nooit doorgaan.","Tijdens spelweerkaatsing: ranged terugstappen, melee door met fysieke aanvallen.","Magic-dispel als Polymorph er toch doorkomt."],en:["HIGHEST PRIORITY: interrupt EVERY Polymorph cast — never let it go through.","During spell reflection: ranged step back, melee continue with physical attacks.","Use a magic dispel if a Polymorph gets through."],da:["HØJESTE PRIORITET: afbryd HVERT Polymorph-cast — lad det aldrig gå igennem.","Under spell reflection: ranged træd tilbage, melee fortsæt med fysiske angreb.","Brug magic dispel, hvis en Polymorph alligevel slipper igennem."]}},
    {name:"Gemellus",num:3,
     desc:{nl:"Void-wezen dat zichzelf beschermt én voortplant via Void-klonen. Dood de klonen snel.",en:"A void entity that protects itself and replicates via Void clones. Kill the clones quickly.",da:"Et void-væsen, der beskytter sig selv og kopierer sig via Void-kloner. Dræb klonerne hurtigt."},
     tank:{nl:["Beheer aggro op Gemellus én pak Void-klonen op zodra ze spawnen.","Het Void-schild pulseert schade — defensive om het uit te houden."],en:["Manage aggro on Gemellus and pick up Void clones as soon as they spawn.","The Void shield pulses damage — use a defensive to survive it."],da:["Håndter aggro på Gemellus og tag Void-kloner op, så snart de spawner.","Void-skjoldet pulser skade — brug en defensive for at overleve."]},
     heal:{nl:["Kloon-spawns = burst AoE — cooldown gereed.","Aanhoudende Void-corruptie tikt — groep bijvullen."],en:["Clone spawns = burst AoE damage — have a cooldown ready.","Persistent Void corruption ticks — keep the group topped up."],da:["Klon-spawns = burst AoE-skade — hav en cooldown klar.","Vedvarende Void-korruption tikker — hold gruppen toppet."]},
     dps:{nl:["Prioriteer Void-klonen direct bij spawnen.","Na klonen dood: brand Gemellus hard — kwetsbaar tussen spawns.","Vermijd groeiende Void-plassen."],en:["Prioritise Void clones immediately when they spawn.","Once clones are dead: burn Gemellus hard — he is vulnerable between spawns.","Avoid growing Void zone puddles."],da:["Prioritér Void-kloner straks, når de spawner.","Når kloner er døde: burn Gemellus hårdt — han er sårbar mellem spawns.","Undgå voksende Void-pytter."]}},
    {name:"Degentrius",num:4,
     desc:{nl:"Machtig Void-wezen dat de Terrace bestormt. Eindbaas van de Seizoen 1 M+-versie.",en:"A powerful void entity assaulting the Terrace. Final boss of the Season 1 M+ version.",da:"Et kraftfuldt void-væsen, der stormer Terrassen. Slutbossen i Sæson 1 M+-versionen."},
     tank:{nl:["Taunt swap bij stapelende debuffs.","Rand van de kamer — Void-zones verkleinen bruikbare ruimte."],en:["Taunt swap on stacking debuffs.","Stay at the edge of the room — Void zones reduce usable space."],da:["Taunt swap på staplede debuffs.","Hold dig i kanten af rummet — Void-zoner reducerer brugbar plads."]},
     heal:{nl:["Void-uitbarstingsfase = grootste healingmoment dungeon — grote cooldown.","Dispel Void-corruptie direct — groeit snel naar dodelijke niveaus."],en:["Void eruption phase = the biggest healing moment in the dungeon — major cooldown.","Dispel Void corruption immediately — it grows quickly to lethal levels."],da:["Void-udbrudsfase = det største healingøjeblik i dungeons — stor cooldown.","Dispel Void-korruption med det samme — den vokser hurtigt til dødelige niveauer."]},
     dps:{nl:["Vernietig Void-tentakels/adds snel — voeden Degentrius en versterken hem.","Houd baas aan één kant om bewegingsruimte te bewaren.","Offensieve cooldown na de Void-uitbarstingsfase."],en:["Destroy Void tentacles/adds quickly — they feed Degentrius and empower him.","Keep the boss to one side to preserve movement space.","Use offensive cooldowns after the Void eruption phase."],da:["Ødelæg Void-tentakler/adds hurtigt — de fodrer Degentrius og styrker ham.","Hold bossen til den ene side for at bevare bevægelsesrum.","Brug offensive cooldowns efter Void-udbrudsfasen."]}}
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
      {label:{nl:"Baas 2 — Seranel Sunlash 🔥",en:"Boss 2 — Seranel Sunlash 🔥",da:"Boss 2 — Seranel Sunlash 🔥"},desc:{nl:"Bloodlust. Nooit Polymorph laten doorgaan.",en:"Bloodlust. Never let Polymorph through.",da:"Bloodlust. Lad aldrig Polymorph gå igennem."}},
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
  bosses_short:["Muro'jin & Nekraxx","Vordaza + Rak'tul","Vessel of Souls"],
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
    {name:"Vordaza + Rak'tul",num:2,
     desc:{nl:"Vordaza destilleert necrotische energie voor Rak'tul. Twee fasen: burn Vordaza snel, dan een versterkte Rak'tul.",en:"Vordaza distils necrotic energy for Rak'tul. Two phases: burn Vordaza fast, then face an empowered Rak'tul.",da:"Vordaza destillerer nekrotisk energi til Rak'tul. To faser: burn Vordaza hurtigt, derefter en styrket Rak'tul."},
     tank:{nl:["Rak'tul-fase: positioneer de dire-trol zodat alleen de tank zijn cleave ontvangt.","Vordaza's ziel-extractie debufft jou — defensive als gedebufft."],en:["Rak'tul phase: position the dire troll so only the tank receives his cleave.","Vordaza's soul extraction debuffs you — use a defensive when debuffed."],da:["Rak'tul-fase: placér dire-trolden, så kun tanken modtager hans cleave.","Vordazas soul extraction debuffer dig — brug en defensive, når du er debuffet."]},
     heal:{nl:["Vordaza kanaalt dodelijke necrotische schade op een speler — heal/dispel direct.","Rak'tul-opkomst = grote schadepiek — bewaar een cooldown."],en:["Vordaza channels lethal necrotic damage onto a player — heal/dispel immediately.","Rak'tul's emergence = a major damage spike — save a cooldown for it."],da:["Vordaza kanaliserer dødelig nekrotisk skade på en spiller — heal/dispel straks.","Rak'tuls fremkomst = et stort skadespids — gem en cooldown til det."]},
     dps:{nl:["Brand Vordaza zo snel mogelijk — hoe langer hij leeft, hoe sterker Rak'tul wordt.","Rak'tul-fase: let op grondklap-patronen, vermijd frontale kegel.","Onderbreek Vordaza's ziel-extractie-kanalen."],en:["Burn Vordaza as fast as possible — the longer he lives, the stronger Rak'tul becomes.","Rak'tul phase: watch ground slam patterns, avoid the frontal cone.","Interrupt Vordaza's soul extraction channels."],da:["Burn Vordaza så hurtigt som muligt — jo længere han lever, jo stærkere bliver Rak'tul.","Rak'tul-fase: se efter jordslam-mønstre, undgå det frontale kegle.","Afbryd Vordazas soul extraction-kanaler."]}},
    {name:"Vessel of Souls",num:3,
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
     desc:{nl:"Ethereal die de Corespark Engine bewaakt. Wantrouwt buitenstaanders en gebruikt arcane-versterkte aanvallen.",en:"An Ethereal guarding the Corespark Engine. Distrusts outsiders and uses arcane-enhanced attacks.",da:"En Ethereal, der vogter Corespark Engine. Mistror udenforstående og bruger arcane-forstærkede angreb."},
     tank:{nl:["Kasreth gebruikt arcane-versterkte melee — defensive bij Corespark-pieken.","Positioneer in het midden — DPS kan hem bereiken terwijl ze energiebogen ontwijken."],en:["Kasreth uses arcane-enhanced melee — use a defensive during Corespark peaks.","Position in the center — DPS can reach him while dodging energy arcs."],da:["Kasreth bruger arcane-forstærkede melee — brug en defensive under Corespark-toppe.","Placér dig i midten — DPS kan nå ham, mens de undgår energibuer."]},
     heal:{nl:["Energie-disrupties raken willekeurige spelers — heal verspreid over de groep.","Arcane-instabiliteitsfase = groepswijde schade — cooldown hier."],en:["Energy disruptions hit random players — spread healing across the group.","Arcane instability phase = group-wide damage — cooldown here."],da:["Energiforstyrrelser rammer tilfældige spillere — spred healing over gruppen.","Arcane-instabilitetsfase = gruppe-dækkende skade — cooldown her."]},
     dps:{nl:["Onderbreek arcane-stabilisatievaardigheden — anders verhoogde schade voor iedereen.","Vermijd energieboog-patronen op de vloer.","Dood Shadowguard Ethereal-adds voor ze Kasreth versterken."],en:["Interrupt arcane stabilisation abilities — otherwise everyone takes increased damage.","Avoid energy arc patterns on the floor.","Kill Shadowguard Ethereal adds before they empower Kasreth."],da:["Afbryd arcane-stabiliseringsevner — ellers tager alle øget skade.","Undgå energibue-mønstre på gulvet.","Dræb Shadowguard Ethereal-adds, inden de styrker Kasreth."]}},
    {name:"Corewarden Nysarra",num:2,
     desc:{nl:"Bewaker van de Nexus-kern. Gebruikt void-absorptie en energieprojectie om slechte positionering te bestraffen.",en:"Guardian of the Nexus core. Uses void absorption and energy projection to punish poor positioning.",da:"Vogter af Nexus-kernen. Bruger void-absorption og energiprojektion til at straffe dårlig positionering."},
     tank:{nl:["Nysarra's kernklappen stapelen een debuff — wissel defensives af.","Herpositioneer als ze zichzelf verankert — projectierichting verandert."],en:["Nysarra's core strikes stack a debuff — rotate defensives.","Reposition when she anchors herself — the projection direction changes."],da:["Nysarras kerneslag stabler en debuff — roter defensives.","Genplacér dig, når hun forankrer sig — projektionsretningen ændrer sig."]},
     heal:{nl:["Void-absorptie = vertraagde schade-uitbarsting — pre-heal voor detonatie.","Energieprojectie raakt 2–3 spelers — stabiele AoE healing."],en:["Void absorption = delayed damage burst — pre-heal before detonation.","Energy projection hits 2–3 players — maintain steady AoE healing."],da:["Void-absorption = forsinket skadeudbrudd — pre-heal før detonation.","Energiprojektion rammer 2–3 spillere — oprethold stabil AoE-healing."]},
     dps:{nl:["Blijf mobiel — projecties richten zich op je laatste positie.","Niet in void-absorptie-zones — detoneren na 3 seconden.","Vernietig void-orbs voor Nysarra ze absorbeert."],en:["Stay mobile — projections target your last position.","Stay out of void absorption zones — they detonate after 3 seconds.","Destroy void orbs before Nysarra absorbs them."],da:["Forbliv mobil — projektioner målretter din sidste position.","Hold dig ude af void-absorption-zoner — de detonerer efter 3 sekunder.","Ødelæg void-orbs, inden Nysarra absorberer dem."]}},
    {name:"Lothraxion",num:3,
     desc:{nl:"Door verraad verblind stormt deze naaru-aangeraakte entiteit de Nexus in. Licht-Void dualiteitsgevecht — beide fasen vereisen andere aanpak.",en:"Blinded by betrayal, this naaru-touched entity storms the Nexus. A Light-Void duality fight — each phase requires a different approach.",da:"Blindet af forræderi stormer denne naaru-berørte entitet ind i Nexus. Et Lys-Void-dualkamp — begge faser kræver en forskellig tilgang."},
     tank:{nl:["Lichtfase: radiant aanvallen — defensive op Radiant Strike.","Void-fase: schadesoort wisselt — gebruik een aanpassende defensive."],en:["Light phase: radiant attacks — use a defensive on Radiant Strike.","Void phase: damage type switches — adapt your defensive accordingly."],da:["Lysfase: strålende angreb — brug en defensive på Radiant Strike.","Void-fase: skadetype skifter — tilpas din defensive derefter."]},
     heal:{nl:["Lichtfase: groeps-AoE-straling — grote cooldown.","Void-fase: aanhoudende tankschade + groeps-DoTs.","Spaar cooldowns — beheer beide fasen."],en:["Light phase: group AoE radiation — major cooldown.","Void phase: sustained tank damage + group DoTs.","Save your cooldowns — manage both phases carefully."],da:["Lysfase: gruppe-AoE-stråling — stor cooldown.","Void-fase: vedvarende tankskade + gruppe-DoTs.","Gem dine cooldowns — styr begge faser forsigtigt."]},
     dps:{nl:["Lichtfase: stack voor cleave.","Void-fase: spreid iets voor void-splash.","Beste DPS-venster: fase-overgangen — Lothraxion is kort kwetsbaar."],en:["Light phase: stack for cleave value.","Void phase: spread slightly to avoid void splash.","Best DPS window: phase transitions — Lothraxion is briefly vulnerable."],da:["Lysfase: stå tæt for cleave-værdi.","Void-fase: spred jer lidt for at undgå void-splash.","Bedste DPS-vindue: faseskift — Lothraxion er kortvarigt sårbar."]}}
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
  bosses_short:["Overgrown Ancient","Overpowering Perception","Echo of Doragosa"],
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
    {name:"Overpowering Perception",num:2,
     desc:{nl:"Illusie-entiteit die meerdere kopieën van zichzelf maakt. Vernietig de juiste kopie.",en:"Illusion entity creating multiple copies of itself. Destroy the correct copy.",da:"Illusionsentitet, der skaber flere kopier af sig selv. Ødelæg den rigtige kopi."},
     tank:{nl:["Houd de echte boss — de kopieën doen minder schade.","Miasma debuff: loop weg van de groep."],en:["Hold the real boss — copies deal less damage.","Miasma debuff: walk away from the group."],da:["Hold den rigtige boss — kopierne gør mindre skade.","Miasma debuff: gå væk fra gruppen."]},
     heal:{nl:["Overpowering Miasma: zware AoE — grote cooldown hier.","Kopiefase: even rustiger, herstel energie."],en:["Overpowering Miasma: heavy AoE — major healing cooldown here.","Copy phase: quieter, recover resources."],da:["Overpowering Miasma: tung AoE — stor helbredende cooldown her.","Kopiefase: roligere, gendan ressourcer."]},
     dps:{nl:["Dood de juiste kopie — kijk naar de debuff indicator.","Interrupt Miasma als mogelijk."],en:["Kill the correct copy — watch the debuff indicator.","Interrupt Miasma if possible."],da:["Dræb den rigtige kopi — se debuff-indikatoren.","Afbryd Miasma hvis muligt."]}},
    {name:"Echo of Doragosa",num:3,
     desc:{nl:"Corrupte echo van draak Doragosa. Eindbaas met gevaarlijke Expunge.",en:"Corrupt echo of dragon Doragosa. Final boss with dangerous Expunge.",da:"Korrumperet ekko af dragen Doragosa. Slutboss med farlig Expunge."},
     tank:{nl:["Wingbuffet: draai de boss weg zodat de cleave de groep niet raakt.","Power Field: ga er nooit in staan."],en:["Wingbuffet: face boss away so the cleave doesn't hit the group.","Power Field: never stand in it."],da:["Wingbuffet: vend boss væk, så cleaven ikke rammer gruppen.","Power Field: stå aldrig i det."]},
     heal:{nl:["Expunge: zware raid-schade — prep een grote cooldown.","Hou iedereen vol voor de interrupt op Expunge."],en:["Expunge: heavy raid damage — prep a major cooldown.","Keep everyone topped for the Expunge interrupt."],da:["Expunge: tung raid-skade — forbered en stor cooldown.","Hold alle toppede til Expunge-afbrydelsen."]},
     dps:{nl:["Interrupt Expunge — dit is de #1 prioriteit van de hele dungeon.","Sta nooit in Power Field."],en:["Interrupt Expunge — this is the #1 priority of the entire dungeon.","Never stand in Power Field."],da:["Afbryd Expunge — dette er #1 prioritet i hele dungeons.","Stå aldrig i Power Field."]}}
  ],
  route:{
    summary:{nl:"Drie vleugels: Botanica (links), Kwadrant (midden), Hoofdleeraarskamer (rechts). Eindbaas Echo of Doragosa.",en:"Three wings: Botanica (left), Quad (center), Headteacher's Enclave (right). Final boss Echo of Doragosa.",da:"Tre fløje: Botanica (venstre), Quad (midten), Headteacher's Enclave (højre). Slutboss Echo of Doragosa."},
    pulls:[
      {type:"trash",label:"The Botanica",area:"The Botanica",desc:{nl:"Start links, pak de trash richting Overgrown Ancient.",en:"Start left, collect trash toward Overgrown Ancient.",da:"Start venstre, saml trash mod Overgrown Ancient."},lust:false},
      {type:"boss",label:"Overgrown Ancient",area:"The Botanica",desc:{nl:"Interrupt Lashing Roots.",en:"Interrupt Lashing Roots.",da:"Afbryd Lashing Roots."},lust:false},
      {type:"trash",label:"The Quad",area:"The Quad",desc:{nl:"Midden — pas op voor patrollerende packs.",en:"Middle section — watch patrolling packs.",da:"Midterste sektion — pas på patruljerende pakker."},lust:false},
      {type:"boss",label:"Overpowering Perception",area:"The Quad",desc:{nl:"Vernietig de juiste kopie.",en:"Destroy the correct copy.",da:"Ødelæg den rigtige kopi."},lust:false},
      {type:"trash",label:"Headteacher's Enclave",area:"The Headteacher's Enclave",desc:{nl:"Rechts — open de deur naar eindbaas.",en:"Right — open the door to the final boss.",da:"Højre — åbn døren til slutbossen."},lust:false},
      {type:"boss",label:"Echo of Doragosa",area:"The Headteacher's Enclave",desc:{nl:"Eindbaas. Interrupt Expunge. Lust hier.",en:"Final boss. Interrupt Expunge. Lust here.",da:"Slutboss. Afbryd Expunge. Lust her."},lust:true}
    ],
    lust:[{moment:"Echo of Doragosa",uitleg:{nl:"Direct bij de pull voor maximale burst.",en:"Immediately on pull for maximum burst.",da:"Umiddelbart ved pull for maksimal burst."}}],
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
     desc:{nl:"Smid van Icecrown. Gooit saronietbommen en veroorzaakt vrieskoude stacks.",en:"Forgemaster of Icecrown. Throws saronite bombs and causes bitter cold stacks.",da:"Smedmester i Icecrown. Kaster saronit-bomber og forårsager frost-stabler."},
     tank:{nl:["Verbreek Bitter Cold stacks door achter de saronietblokken te lopen.","Keer terug na de saronietblok — de boss blijft tankbaar."],en:["Break Bitter Cold stacks by running behind saronite boulders.","Return after the boulder — the boss stays tankable."],da:["Bryd Bitter Cold-stabler ved at løbe bag saronit-blokke.","Vend tilbage efter blokken — bossen forbliver tankbar."]},
     heal:{nl:["Groepsleden met hoge Bitter Cold stacks: hoge prioriteit.","Saronietbom: spot heal direct na de explosie."],en:["Group members with high Bitter Cold stacks: high priority.","Saronite bomb: spot heal immediately after the explosion."],da:["Gruppemedlemmer med høje Bitter Cold-stabler: høj prioritet.","Saronit-bombe: spot heal umiddelbart efter eksplosionen."]},
     dps:{nl:["Loop achter saronietblokken om Bitter Cold te resetten — doe dit actief.","Volle DPS zodra je stack gereset is."],en:["Run behind saronite boulders to reset Bitter Cold — do this actively.","Full DPS once your stack is reset."],da:["Løb bag saronit-blokke for at nulstille Bitter Cold — gør dette aktivt.","Fuld DPS, når din stak er nulstillet."]}},
    {name:"Ick and Krick",num:2,
     desc:{nl:"Magnataur rijder en zijn gnome meester. Bewegelijk gevecht met Toxic Waste en Explosive Barrage.",en:"Magnataur rider and his gnome master. Mobile fight with Toxic Waste and Explosive Barrage.",da:"Magnataur-rytter og hans gnome-mester. Mobil kamp med Toxic Waste og Explosive Barrage."},
     tank:{nl:["Keer de boss weg — Smash raakt de groep anders.","Bij Pursuit: ren weg, de groep uit."],en:["Face boss away — Smash hits the group otherwise.","During Pursuit: run away, out of the group."],da:["Vend boss væk — Smash rammer ellers gruppen.","Under Pursuit: løb væk, ud af gruppen."]},
     heal:{nl:["Explosive Barrage: iedereen verspreidt zich — mobile heals nodig.","Toxic Waste: sta er nooit in, heel de groep die het raakt."],en:["Explosive Barrage: everyone spreads — mobile heals needed.","Toxic Waste: never stand in it, heal anyone who gets hit."],da:["Explosive Barrage: alle spreder sig — mobile heals nødvendige.","Toxic Waste: stå aldrig i det, heal alle der rammes."]},
     dps:{nl:["Altijd bewegen — sta nooit stil.","Verspreid bij Explosive Barrage."],en:["Always move — never stand still.","Spread during Explosive Barrage."],da:["Bevæg dig altid — stå aldrig stille.","Spred dig under Explosive Barrage."]}},
    {name:"Scourgelord Tyrannus",num:3,
     desc:{nl:"Eindbaas op zijn drake Rimefang. Overlord's Brand en gevaarlijke Hoarfrost.",en:"Final boss on his drake Rimefang. Overlord's Brand and dangerous Hoarfrost.",da:"Slutboss på sin drage Rimefang. Overlord's Brand og farlig Hoarfrost."},
     tank:{nl:["Keer de boss weg — Forceful Smash is dodelijk voor de groep.","Rimefang valt random iemand aan — houd dreig op beide."],en:["Face boss away — Forceful Smash is lethal to the group.","Rimefang attacks someone random — maintain threat on both."],da:["Vend boss væk — Forceful Smash er dødelig for gruppen.","Rimefang angriber tilfældigt — oprethold trussel på begge."]},
     heal:{nl:["Overlord's Brand: de gemarkeerde speler heeft direct raid-heals nodig.","Hoarfrost: grote AoE schade — gebruik een cooldown."],en:["Overlord's Brand: the marked player needs immediate raid heals.","Hoarfrost: big AoE damage — use a healing cooldown."],da:["Overlord's Brand: den markerede spiller har brug for øjeblikkelige raid-heals.","Hoarfrost: stor AoE-skade — brug en helbredende cooldown."]},
     dps:{nl:["Dood Rimefang eerst als het kan — minder schade op de raid.","Sta nooit in Hoarfrost."],en:["Kill Rimefang first if possible — less damage on the raid.","Never stand in Hoarfrost."],da:["Dræb Rimefang først hvis muligt — mindre skade på raid.","Stå aldrig i Hoarfrost."]}}
  ],
  route:{
    summary:{nl:"Lineaire route omhoog door de mijn. Drie bazen. Lust op Scourgelord Tyrannus.",en:"Linear route upward through the mine. Three bosses. Lust on Scourgelord Tyrannus.",da:"Lineær rute opad gennem minen. Tre bosser. Lust på Scourgelord Tyrannus."},
    pulls:[
      {type:"trash",label:"Mijnschacht",area:"Pit of Saron",desc:{nl:"Begin trash richting Garfrost — pas op voor patrollerende packs.",en:"Opening trash toward Garfrost — watch patrolling packs.",da:"Åbnings-trash mod Garfrost — pas på patruljerende pakker."},lust:false},
      {type:"boss",label:"Forgemaster Garfrost",area:"Pit of Saron",desc:{nl:"Breek Bitter Cold achter saronietblokken.",en:"Break Bitter Cold behind saronite boulders.",da:"Bryd Bitter Cold bag saronit-blokke."},lust:false},
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
     desc:{nl:"Machtige Eredar die void-energie misbruikt. Darkfathom-pilaren zijn dodelijk.",en:"Powerful Eredar abusing void energy. Darkfathom pillars are lethal.",da:"Kraftfuld Eredar, der misbruger void-energi. Darkfathom-søjler er dødelige."},
     tank:{nl:["Keer de boss weg — shadow cleave raakt de groep.","Dezintegrate: sta er niet in."],en:["Face boss away — shadow cleave hits the group.","Disintegrate: don't stand in it."],da:["Vend boss væk — shadow cleave rammer gruppen.","Disintegrate: stå ikke i det."]},
     heal:{nl:["Darkfathom: iedereen uit de pilaren — hoge schade bij contact.","Void Bolt: spot heal de getargete speler."],en:["Darkfathom: everyone out of pillars — high damage on contact.","Void Bolt: spot heal the targeted player."],da:["Darkfathom: alle ud af søjlerne — høj skade ved kontakt.","Void Bolt: spot heal den målrettede spiller."]},
     dps:{nl:["Sta nooit in de Darkfathom-pilaren.","Burst zodra de boss stil staat."],en:["Never stand in the Darkfathom pillars.","Burst when the boss stands still."],da:["Stå aldrig i Darkfathom-søjlerne.","Burst når bossen står stille."]}},
    {name:"Saprish",num:2,
     desc:{nl:"Voidwalker commandant met zijn dodelijke sidekick Shadewing.",en:"Voidwalker commander with his deadly sidekick Shadewing.",da:"Voidwalker-kommandant med sin dødelige sidekick Shadewing."},
     tank:{nl:["Houd Saprish en Shadewing apart — cleaves overlappen.",",Keer beide bosses weg van de groep."],en:["Keep Saprish and Shadewing apart — cleaves overlap.","Face both bosses away from the group."],da:["Hold Saprish og Shadewing adskilt — cleaves overlapper.","Vend begge bosser væk fra gruppen."]},
     heal:{nl:["Shadow Slash: raid-schade — AoE heals paraat.","Dood Shadewing snel — minder schade op de raid."],en:["Shadow Slash: raid damage — have AoE heals ready.","Kill Shadewing quickly — less damage on the raid."],da:["Shadow Slash: raid-skade — AoE heals klar.","Dræb Shadewing hurtigt — mindre skade på raid."]},
     dps:{nl:["Focus Shadewing eerst — hij doet extra schade op de raid.","Interrupt Shadow Slash als mogelijk."],en:["Focus Shadewing first — deals extra damage to the raid.","Interrupt Shadow Slash if possible."],da:["Focus Shadewing først — gør ekstra skade på raidet.","Afbryd Shadow Slash hvis muligt."]}},
    {name:"Viceroy Nezhar",num:3,
     desc:{nl:"Gevallen Eredar die Mac'Arees kracht corrumpeert. Void Shriek moet onderbroken worden.",en:"Fallen Eredar corrupting Mac'Aree's power. Void Shriek must be interrupted.",da:"Falden Eredar, der korrumperer Mac'Arees kraft. Void Shriek skal afbrydes."},
     tank:{nl:["Keer de boss weg — melee cleave is pijnlijk.","Bewaar defensief voor Void Shriek als de interrupt mist."],en:["Face boss away — melee cleave is painful.","Save defensive for Void Shriek if the interrupt is missed."],da:["Vend boss væk — melee cleave er smertefuld.","Gem defensive til Void Shriek hvis afbrydelsen misses."]},
     heal:{nl:["Void Shriek interrupt missen = zware raid-schade — prep heals.","Houd iedereen boven 70% voor de void-explosies."],en:["Missing Void Shriek interrupt = heavy raid damage — prep heals.","Keep everyone above 70% for the void explosions."],da:["Misse Void Shriek-afbrydelse = tung raid-skade — forbered heals.","Hold alle over 70% for void-eksplosionerne."]},
     dps:{nl:["Interrupt Void Shriek — hoogste prioriteit.","Sta nooit in void-explosies."],en:["Interrupt Void Shriek — highest priority.","Never stand in void explosions."],da:["Afbryd Void Shriek — højeste prioritet.","Stå aldrig i void-eksplosioner."]}},
    {name:"L'ura",num:4,
     desc:{nl:"Corrupte Naaru eindbaas. Void Liquidation en Darkening Soul zijn de key mechanics.",en:"Corrupt Naaru final boss. Void Liquidation and Darkening Soul are the key mechanics.",da:"Korrumperet Naaru-slutboss. Void Liquidation og Darkening Soul er nøglemekanikker."},
     tank:{nl:["Draai de boss zodat de melee cleave de groep niet raakt.","Void-tentakels spawnen — houd dreig op de boss."],en:["Rotate boss so melee cleave doesn't hit the group.","Void tentacles spawn — maintain threat on the boss."],da:["Roter boss, så melee cleave ikke rammer gruppen.","Void-tentakler spawner — oprethold trussel på bossen."]},
     heal:{nl:["Zware AoE-fase — grote cooldown inzetten.","Darkening Soul: dispel direct.","Void Liquidation: bommen spreiden, spot heal direct."],en:["Heavy AoE phase — deploy a major healing cooldown.","Darkening Soul: dispel immediately.","Void Liquidation: spread bombs, spot heal immediately."],da:["Tung AoE-fase — indsæt stor helbredende cooldown.","Darkening Soul: dispel øjeblikkeligt.","Void Liquidation: fordel bomber, spot heal øjeblikkeligt."]},
     dps:{nl:["Lust hier — void-transformatiefase begin.","Vernietig void-tentakels snel.","Void Liquidation: sprint weg van de groep."],en:["Lust here — start of void transformation phase.","Destroy void tentacles quickly.","Void Liquidation: sprint away from the group."],da:["Lust her — start af void-transformationsfase.","Ødelæg void-tentakler hurtigt.","Void Liquidation: sprint væk fra gruppen."]}}
  ],
  route:{
    summary:{nl:"Lineaire route — Triad's Conservatory → Shadowguard Incursion → Seat. Vier bazen. Lust op L'ura.",en:"Linear route — Triad's Conservatory → Shadowguard Incursion → Seat. Four bosses. Lust on L'ura.",da:"Lineær rute — Triad's Conservatory → Shadowguard Incursion → Seat. Fire bosser. Lust på L'ura."},
    pulls:[
      {type:"trash",label:"Triad's Conservatory",area:"Triad's Conservatory",desc:{nl:"Eerste sectie. Pull richting Zuraal.",en:"First section. Pull toward Zuraal.",da:"Første sektion. Pull mod Zuraal."},lust:false},
      {type:"boss",label:"Zuraal the Ascended",area:"Triad's Conservatory",desc:{nl:"Sta niet in Darkfathom-pilaren.",en:"Don't stand in Darkfathom pillars.",da:"Stå ikke i Darkfathom-søjlerne."},lust:false},
      {type:"trash",label:"Shadowguard Incursion",area:"Shadowguard Incursion",desc:{nl:"Grote packs — voorzichtig pakken.",en:"Large packs — careful pulling.",da:"Store pakker — forsigtig pulling."},lust:false},
      {type:"boss",label:"Saprish",area:"Shadowguard Incursion",desc:{nl:"Dood Shadewing eerst.",en:"Kill Shadewing first.",da:"Dræb Shadewing først."},lust:false},
      {type:"boss",label:"Viceroy Nezhar",area:"Shadowguard Incursion",desc:{nl:"Interrupt Void Shriek.",en:"Interrupt Void Shriek.",da:"Afbryd Void Shriek."},lust:false},
      {type:"boss",label:"L'ura",area:"Seat of the Triumvirate",desc:{nl:"Eindbaas. Dispel Darkening Soul. Lust hier.",en:"Final boss. Dispel Darkening Soul. Lust here.",da:"Slutboss. Dispel Darkening Soul. Lust her."},lust:true}
    ],
    lust:[{moment:"L'ura",uitleg:{nl:"Begin van de void-transformatiefase.",en:"Start of the void transformation phase.",da:"Start på void-transformationsfasen."}}],
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
     desc:{nl:"Arakkoa windmeester. Windwall trekt spelers mee — loop door de opening.",en:"Arakkoa wind master. Windwall pulls players — walk through the gap.",da:"Arakkoa-vindmester. Windwall trækker spillere — gå gennem åbningen."},
     tank:{nl:["Keer de boss weg — Four Winds cleave raakt de hele groep.","Remain Stationary debuff: niet bewegen tot het weg is."],en:["Face boss away — Four Winds cleave hits the entire group.","Remain Stationary debuff: don't move until it falls off."],da:["Vend boss væk — Four Winds cleave rammer hele gruppen.","Remain Stationary debuff: bevæg dig ikke, før den falder."]},
     heal:{nl:["Windwall-fase: iedereen loopt door de opening, even minder healen.","Tornado schade: spot heal getroffen spelers direct."],en:["Windwall phase: everyone walks through the gap, brief healing pause.","Tornado damage: spot heal affected players immediately."],da:["Windwall-fase: alle går gennem åbningen, kort healingspause.","Tornado-skade: spot heal berørte spillere øjeblikkeligt."]},
     dps:{nl:["Windwall: loop snel door de opening — geen DPS tijdens verplaatsen.","Sta nooit tussen de boss en de groep in."],en:["Windwall: walk quickly through the gap — no DPS while moving.","Never stand between the boss and the group."],da:["Windwall: gå hurtigt gennem åbningen — ingen DPS under bevægelse.","Stå aldrig mellem bossen og gruppen."]}},
    {name:"Araknath",num:2,
     desc:{nl:"Construct bewaker van de binnenste ring. Relatief simpele baas.",en:"Construct guardian of the inner ring. Relatively simple boss.",da:"Konstruktionsvagt for den indre ring. Relativt simpel boss."},
     tank:{nl:["Keer de boss weg — Arcing Slash is een frontal cleave.","Bekkeer Energy Slash met een defensief."],en:["Face boss away — Arcing Slash is a frontal cleave.","Counter Energy Slash with a defensive."],da:["Vend boss væk — Arcing Slash er en frontal cleave.","Modvirk Energy Slash med en defensive."]},
     heal:{nl:["Meest rustieve baas — herstel mana hier.","Solar Burst: korte AoE burst, klein cooldownje."],en:["Most relaxed boss — recover mana here.","Solar Burst: short AoE burst, minor cooldown."],da:["Mest afslappede boss — gendan mana her.","Solar Burst: kort AoE burst, lille cooldown."]},
     dps:{nl:["Sta nooit voor de boss — Arcing Slash is dodelijk.","Snel af — veel trash nog te pakken."],en:["Never stand in front of the boss — Arcing Slash is lethal.","Kill fast — lots of trash still to collect."],da:["Stå aldrig foran bossen — Arcing Slash er dødelig.","Dræb hurtigt — meget trash tilbage at samle."]}},
    {name:"Rukhran",num:3,
     desc:{nl:"Enorme Arakkoa-vogel. Quills is de gevaarlijkste mechanic — ga achter de rots staan.",en:"Enormous Arakkoa bird. Quills is the most dangerous mechanic — stand behind the rock.",da:"Enorm Arakkoa-fugl. Quills er den farligste mekanik — stå bag klippen."},
     tank:{nl:["Keer de boss weg van de rots — anders kan niemand schuilen.","Divine Storm: sta niet in de veren-regen."],en:["Face boss away from the rock — otherwise nobody can hide.","Divine Storm: don't stand in the feather rain."],da:["Vend boss væk fra klippen — ellers kan ingen gemme sig.","Divine Storm: stå ikke i fjerskyllet."]},
     heal:{nl:["Quills: iedereen achter de rots — geen heals nodig als ze goed staan.","Buiten Quills: steady AoE heals voor de veren-DoT."],en:["Quills: everyone behind the rock — no heals needed if positioned well.","Outside Quills: steady AoE heals for the feather DoT."],da:["Quills: alle bag klippen — ingen heals nødvendige ved god placering.","Uden for Quills: stabile AoE heals til fjerforgiftningen."]},
     dps:{nl:["Quills: ren onmiddellijk achter de rots — dit is instant-kill buiten de rots.","Na Quills: burst terug op de boss."],en:["Quills: immediately run behind the rock — instant kill outside the rock.","After Quills: burst back on the boss."],da:["Quills: løb øjeblikkeligt bag klippen — instant-kill uden for klippen.","Efter Quills: burst tilbage på bossen."]}},
    {name:"High Sage Viryx",num:4,
     desc:{nl:"Eindbaas van Skyreach. Cast Down gooit spelers van de rand af — positionering is essentieel.",en:"Final boss of Skyreach. Cast Down throws players off the edge — positioning is essential.",da:"Slutboss af Skyreach. Cast Down kaster spillere fra kanten — placering er essentiel."},
     tank:{nl:["Sta altijd weg van de rand — Cast Down is instant-kill als je valt.","Solar Zone: keer de boss weg van de zonnezones."],en:["Always stay away from the edge — Cast Down is instant-kill if you fall.","Solar Zone: face boss away from the solar zones."],da:["Stå altid væk fra kanten — Cast Down er instant-kill hvis du falder.","Solar Zone: vend boss væk fra solzonerne."]},
     heal:{nl:["Cast Down: speler valt bijna — zorg dat je in bereik bent.","Solar Zone schade: AoE heals constant actief houden."],en:["Cast Down: player nearly falls — make sure you're in range.","Solar Zone damage: keep AoE heals constantly active."],da:["Cast Down: spiller falder næsten — sørg for at du er i rækkevidde.","Solar Zone-skade: hold AoE heals konstant aktive."]},
     dps:{nl:["Lust hier — eindbaas pull.","Sta nooit aan de rand. Nooit.","Vernietig de zon-constructs zo snel mogelijk."],en:["Lust here — final boss pull.","Never stand at the edge. Ever.","Destroy the sun constructs as fast as possible."],da:["Lust her — slutboss pull.","Stå aldrig ved kanten. Nogensinde.","Ødelæg sol-konstrukterne så hurtigt som muligt."]}}
  ],
  route:{
    summary:{nl:"Twee vleugels — Lower Quarter en Grand Spire. Vier bazen. Lust op High Sage Viryx.",en:"Two wings — Lower Quarter and Grand Spire. Four bosses. Lust on High Sage Viryx.",da:"To fløje — Lower Quarter og Grand Spire. Fire bosser. Lust på High Sage Viryx."},
    pulls:[
      {type:"trash",label:"Lower Quarter",area:"Lower Quarter",desc:{nl:"Begin links — pak trash richting Ranjit.",en:"Start left — collect trash toward Ranjit.",da:"Start venstre — saml trash mod Ranjit."},lust:false},
      {type:"boss",label:"Ranjit",area:"Lower Quarter",desc:{nl:"Loop door de opening in de Windwall.",en:"Walk through the gap in the Windwall.",da:"Gå gennem åbningen i Windwall."},lust:false},
      {type:"trash",label:"Grand Spire binnenring",area:"Grand Spire",desc:{nl:"Packs op de binnenring richting Araknath.",en:"Packs on the inner ring toward Araknath.",da:"Pakker på den indre ring mod Araknath."},lust:false},
      {type:"boss",label:"Araknath",area:"Grand Spire",desc:{nl:"Tank-n-spank. Keer de boss weg.",en:"Tank-n-spank. Face boss away.",da:"Tank-n-spank. Vend boss væk."},lust:false},
      {type:"trash",label:"Grand Spire buitenring",area:"Grand Spire",desc:{nl:"Buitenste packs richting Rukhran.",en:"Outer packs toward Rukhran.",da:"Ydre pakker mod Rukhran."},lust:false},
      {type:"boss",label:"Rukhran",area:"Grand Spire",desc:{nl:"Quills — snel achter de rots.",en:"Quills — quickly behind the rock.",da:"Quills — hurtigt bag klippen."},lust:false},
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
     desc:{nl:"Magister verslaafd aan fel-magie. Gebruikt fel-vuur en arcane-disruptie.",en:"A Magister addicted to fel magic. Uses felfire and arcane disruption.",da:"En Magister, der er afhængig af fel-magi. Bruger ildflammer og arcane-forstyrrelse."},
     tank:{nl:["Houd de baas van de groep afgewend — fel-aanvallen hebben een frontale kegel.","Defensive tijdens haar grote fel-kanaal."],en:["Keep the boss faced away from the group — fel attacks have a frontal cone.","Use a defensive during her major fel channel."],da:["Hold bossen vendt væk fra gruppen — fel-angreb har en frontal kegle.","Brug en defensive under hendes store fel-kanal."]},
     heal:{nl:["Fel-vuur DoTs op spelers — cleanse of over-heal.","Prioriteer de speler met de meeste gestapelde stacks."],en:["Felfire DoTs on players — cleanse or out-heal them.","Prioritise the player with the most stacked DoTs."],da:["Fel-brand DoTs på spillere — dispel eller out-heal dem.","Prioritér spilleren med flest staplede DoT-stacks."]},
     dps:{nl:["Onderbreek arcane- en fel-kanalen.","Sta niet in fel-plassen op de grond.","Burn haar snel — ze wordt sterker naarmate het gevecht langer duurt."],en:["Interrupt arcane and fel channels.","Avoid standing in felfire puddles on the ground.","Burn her fast — she grows stronger the longer the fight lasts."],da:["Afbryd arcane- og fel-kanaler.","Undgå at stå i fel-pytter på gulvet.","Burn hende hurtigt — hun bliver stærkere, jo længere kampen varer."]}},
    {name:"Zaen Bladesorrow",num:2,
     desc:{nl:"Smokkelopzichter die loyale volgelingen oproept.",en:"A smuggling overseer who summons loyal followers.",da:"En smugleropsynsmand, der indkalder loyale tilhængere."},
     tank:{nl:["Aggro goed vasthouden — zijn adds moeten direct worden opgepakt.","Defensive op zijn zware combo-aanvallen."],en:["Hold aggro firmly — his adds need to be picked up immediately.","Use a defensive on his heavy combo attacks."],da:["Hold aggro fast — hans adds skal straks tages op.","Brug en defensive mod hans tunge komboangrebs."]},
     heal:{nl:["Opgeroepen adds = groepsschade — AoE healing voorbereiden.","Burst schade kan snel komen — groep bijhouden."],en:["Summoned adds = group damage — prepare AoE healing.","Burst damage can spike quickly — keep the group topped up."],da:["Indkaldte adds = gruppeskade — forbered AoE-healing.","Burst-skade kan stige hurtigt — hold gruppen toppet."]},
     dps:{nl:["Adds eerst focussen — dood handlangers voordat ze overweldigen.","Zaen's commandovaardigheden onderbreken.","Iets spreiden om zwaard-cleave te vermijden."],en:["Focus adds first — kill henchmen before they overwhelm.","Interrupt Zaen's command abilities.","Spread slightly to avoid sword cleave."],da:["Focus adds først — dræb håndlangere, inden de overvælder.","Afbryd Zaens kommandoevner.","Spred jer lidt for at undgå sværd-cleave."]}},
    {name:"Xathuux the Annihilator",num:3,
     desc:{nl:"Lithiel's krachtigste demon-oproep — vecht puur voor de vreugde van verwoesting.",en:"Lithiel's most powerful demon summon — fights purely for the joy of destruction.",da:"Lithiels kraftigste dæmonindkaldelse — kæmper udelukkende for ødelæggelsens glæde."},
     tank:{nl:["Meerdere defensives na elkaar — deze demon slaat uitzonderlijk hard.","Positioneer zodat zijn cleave de groep niet raakt."],en:["Chain defensives — this demon hits exceptionally hard.","Position so his cleave does not hit the group."],da:["Kæd defensives — denne dæmon slår ekstremt hårdt.","Placér dig, så hans cleave ikke rammer gruppen."]},
     heal:{nl:["Hoge aanhoudende schade op de tank — prioriteit spot healing.","Let ook op de groep bij void/fel-explosies."],en:["High sustained damage on the tank — prioritise spot healing.","Also watch the group during void/fel explosions."],da:["Høj vedvarende skade på tanken — prioritér spot healing.","Hold også øje med gruppen under void/fel-eksplosioner."]},
     dps:{nl:["Onderbreek void/fel-empowerment — hoogste prioriteit.","Losjes stacken — matige straal van zijn AoE.","Kleine demonen direct doden zodra ze spawnen."],en:["Interrupt void/fel empowerment — highest priority.","Stack loosely — his AoE has a moderate radius.","Kill small demon adds immediately when they spawn."],da:["Afbryd void/fel-empowerment — højeste prioritet.","Stå løst samlet — hans AoE har en moderat radius.","Dræb små dæmon-adds straks, når de spawner."]}},
    {name:"Lithiel Cinderfury",num:4,
     desc:{nl:"Eindbaas — combineert fel én void. Gevaarlijkste fase bij lage HP.",en:"Final boss — combines fel and void. Most dangerous phase at low HP.",da:"Slutboss — kombinerer fel og void. Farligste fase ved lav HP."},
     tank:{nl:["Altijd van de groep afgewend houden.","Taunt swap bij stapelende debuff."],en:["Always keep her faced away from the group.","Taunt swap on stacking debuffs."],da:["Hold hende altid vendt væk fra gruppen.","Taunt swap på staplede debuffs."]},
     heal:{nl:["Gecombineerde fel-void-vaardigheden = intense burst-momenten — grote cooldown bewaren.","Dispel vloeken/magic-debuffs direct."],en:["Combined fel-void abilities = intense burst moments — save a major cooldown.","Dispel curses and magic debuffs immediately."],da:["Kombinerede fel-void-evner = intense burstøjeblikke — gem en stor cooldown.","Dispel forbandelser og magic-debuffs med det samme."]},
     dps:{nl:["Onderbreek fel-empowerment — absolute topprioriteit.","Spreid voor void-splash-schade.","Felfire-grondeffecten: altijd onmiddellijk wegbewegen."],en:["Interrupt fel empowerment — absolute top priority.","Spread to avoid void splash damage.","Felfire ground effects: always move away immediately."],da:["Afbryd fel-empowerment — absolut topprioritet.","Spred jer for at undgå void-splash-skade.","Fel-brandgroundeffects: bevæg dig altid straks væk."]}}
  ],
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
  bosses_short:["Lightblossom Trinity","Ikuzz the Light Hunter","Lightwarden Ruia","Ziekket"],
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
     text:{nl:"Zone: Harandar — volg de Lightbloom Roots-quest.",en:"Zone: Harandar — follow the Lightbloom Roots quest.",da:"Zone: Harandar — følg Lightbloom Roots-questen."}}
  ],
  bosses:[
    {name:"Lightblossom Trinity",num:1,
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
      {label:{nl:"Baas 1 — Lightblossom Trinity",en:"Boss 1 — Lightblossom Trinity",da:"Boss 1 — Lightblossom Trinity"},desc:{nl:"Één Rutaani tegelijk. Lichtplassen vermijden.",en:"One Rutaani at a time. Avoid light puddles.",da:"Én Rutaani ad gangen. Undgå lyspytter."}},
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
     desc:{nl:"Gedwongen kampioen van Charonus. Dark Rift trekt alle nabije vijanden samen — ideaal AoE-venster.",en:"Charonus's forced champion. Dark Rift pulls all nearby enemies together — ideal AoE window.",da:"Charonus' tvungne mester. Dark Rift trækker alle nærliggende fjender sammen — idealt AoE-vindue."},
     tank:{nl:["Dark Rift = alle vijanden clusteren — positioneer om adds samen te brengen.","Directe aanvallen zijn matig — echt gevaar zit in shade-beheer."],en:["Dark Rift = clusters all enemies — position to bring adds together.","Direct attacks are moderate — the real danger is shade management."],da:["Dark Rift = samler alle fjender — placér dig for at samle adds.","Direkte angreb er moderate — den reelle fare er i shade-styring."]},
     heal:{nl:["Nether Dash DoT op getroffen spelers — aanhoudende spot healing nodig.","Gather Shadows: shades doen tegelijk schade — AoE heal omhoog."],en:["Nether Dash DoT on affected players — sustained spot healing required.","Gather Shadows: shades deal simultaneous damage — ramp up AoE healing."],da:["Nether Dash DoT på ramte spillere — vedvarende spot healing påkrævet.","Gather Shadows: shades gør skade simultant — øg AoE-healing."]},
     dps:{nl:["Dark Rift: ALLE shades clusteren — brand ze tegelijk voor maximale AoE.","Shades snel doden — elke Nether Dash voegt meer DoT-stacks toe.","Shade-aanvallen ontwijken — ze richten op jouw positie."],en:["Dark Rift: ALL shades cluster — burn them simultaneously for maximum AoE.","Kill shades quickly — each Nether Dash adds more DoT stacks.","Dodge shade attacks — they target your position."],da:["Dark Rift: ALLE shades samles — burn dem simultant for maksimal AoE.","Dræb shades hurtigt — hvert Nether Dash tilføjer flere DoT-stacks.","Undgå shade-angreb — de målretter din position."]}},
    {name:"Atroxus",num:2,
     desc:{nl:"Uitgehongerd gedrocht. Searing Roar is een FRONTALE KEGEL met een dodelijk gif-DoT. Nooit voor deze baas staan.",en:"A starved monstrosity. Searing Roar is a FRONTAL CONE with a lethal poison DoT. Never stand in front of this boss.",da:"Et udhungret uhyre. Searing Roar er en FRONTAL KEGLE med en dødelig gift-DoT. Stå aldrig foran denne boss."},
     tank:{nl:["Searing Roar FRONTAAL — houd Atroxus te allen tijde van de groep afgewend.","De kegel raakt ook de tank hard — defensive op ELKE Searing Roar-cast."],en:["Searing Roar is FRONTAL — keep Atroxus faced away from the group at all times.","The cone hits the tank hard too — use a defensive on EVERY Searing Roar cast."],da:["Searing Roar er FRONTAL — hold Atroxus vendt væk fra gruppen til enhver tid.","Keglen rammer også tanken hårdt — brug en defensive ved HVERT Searing Roar-cast."]},
     heal:{nl:["Searing Roar: DIRECT zware heals op iedereen die geraakt wordt.","Passieve gif-aanvallen tikken ook — tank altijd op hoge HP houden."],en:["Searing Roar: IMMEDIATELY cast heavy heals on everyone hit.","Passive poison attacks also tick — always keep the tank at high HP."],da:["Searing Roar: STRAKS cast kraftige heals på alle ramte.","Passive giftangreb tikker også — hold altid tanken på høj HP."]},
     dps:{nl:["KRITIEK: NOOIT voor Atroxus staan — Searing Roar is verwoestend.","Altijd achter of naast de baas staan.","Gifplassen op de grond zijn permanente gevaren.",],en:["CRITICAL: NEVER stand in front of Atroxus — Searing Roar is devastating.","Always stand behind or beside the boss.","Poison puddles on the ground are permanent hazards."],da:["KRITISK: Stå ALDRIG foran Atroxus — Searing Roar er ødelæggende.","Stå altid bag ved eller siden af bossen.","Giftpytter på gulvet er permanente farer."]}},
    {name:"Charonus",num:3,
     desc:{nl:"Eindbaas — opzichter van de arena. Roept tot drie keer versterkingen op en gebruikt void-energie om spelers te veranderen in marionetten.",en:"Final boss — the arena overseer. Summons reinforcements up to three times and uses void energy to turn players into puppets.",da:"Slutboss — arenaens tilsynsmand. Indkalder forstærkning op til tre gange og bruger void-energi til at gøre spillere til marionetdukker."},
     tank:{nl:["Charonus wisselt aandacht snel — aggro strak vasthouden.","Defensive bij elke versterkingenoproep — de adds zijn sterk.","Taunt na het puppet-effect zodat Charonus niet de groep aanvalt."],en:["Charonus switches focus rapidly — hold aggro firmly.","Use a defensive at each reinforcement summon — the adds hit hard.","Taunt after the puppet effect ends so Charonus doesn't attack the group."],da:["Charonus skifter fokus hurtigt — hold aggro fast.","Brug en defensive ved hver forstærkningsindkaldelse — adds slår hårdt.","Taunt efter puppet-effekten slutter, så Charonus ikke angriber gruppen."]},
     heal:{nl:["Puppet-effect = speler tijdelijk out of control — healing prioriteit op andere spelers.","Versterkingsoproepen = meer schade binnenkomend — AoE healing omhoog.","Void-corruptie DoT: cleanse zodra mogelijk."],en:["Puppet effect = player temporarily out of control — shift healing priority to other players.","Reinforcement summons = more incoming damage — ramp up AoE healing.","Void corruption DoT: cleanse as soon as possible."],da:["Puppet-effekt = spiller midlertidigt ude af kontrol — skift healing-prioritet til andre spillere.","Forstærkningsindkaldelse = mere indkommende skade — øg AoE-healing.","Void-korruption DoT: dispel hurtigst muligt."]},
     dps:{nl:["Vernietig versterkingen snel — stacken snel tot gevaarlijke aantallen.","Gepuppette speler niet aanvallen — ze zijn tijdelijk een vijand maar herstel vanzelf.","Charonus's void-kanalen onderbreken."],en:["Destroy reinforcements quickly — they stack to dangerous numbers fast.","Do not attack a puppeted player — they are temporarily hostile but recover automatically.","Interrupt Charonus's void channels."],da:["Ødelæg forstærkninger hurtigt — de hobes hurtigt til farlige antal.","Angrib ikke en puppet-spiller — de er midlertidigt fjendtlige, men kommer sig automatisk.","Afbryd Charonus's void-kanaler."]}}
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







// Delves — WoW: Midnight Season 1
// Alle Midnight Delves met /way coördinaten, loot table, Wowhead links
// Source: NextTier, Icy Veins, Wowhead (March 2026)

const DELVES_DATA = {
  // Alle Midnight Delves met zone, /way en Wowhead-links
  delves: [
    { id: 'shadow_enclave', name: 'The Shadow Enclave', zoneName: 'Eversong Woods', way: '/way #2248 45.5 86.0', url: 'https://www.wowhead.com/zone=16594/the-shadow-enclave',
      tactics: { nl: 'Vermijd Void-pools. Interrupt Shadow Bolt. Valeera voor extra DPS op elites.', en: 'Avoid Void pools. Interrupt Shadow Bolt. Valeera for extra DPS on elites.', da: 'Undgå Void-pytter. Afbryd Shadow Bolt. Brug Valeera til ekstra DPS.' },
      details: { en: { gimmick: 'Stay out of dark purple puddles.', danger: 'Shadow Bolt hurts — interrupt it!', tip: 'Use Valeera on big monsters.' }, nl: { gimmick: 'Blijf uit de paarse plassen.', danger: 'Shadow Bolt doet pijn — onderbreek het!', tip: 'Zet Valeera op grote monsters.' }, da: { gimmick: 'Bliv ude af de lilla pytter.', danger: 'Shadow Bolt gør ondt — afbryd det!', tip: 'Brug Valeera på store monstre.' }}},
    { id: 'collegiate_calamity', name: 'Collegiate Calamity', zoneName: 'Silvermoon City', way: '/way #2248 40.6 53.7', url: 'https://www.wowhead.com/zone=16545/collegiate-calamity',
      tactics: { nl: 'Dispel magische debuffs. Kite grote packs. Finale boss: uit de frontale cone.', en: 'Dispel magic debuffs. Kite large packs. Final boss: avoid frontal cone.', da: 'Dispel magiske debuffs. Kite store grupper. Undgå frontal cone på boss.' },
      details: { en: { gimmick: 'Remove purple bad stuff from friends.', danger: 'Last boss shoots a cone — dont stand in front!', tip: 'Run away from big groups, dont fight them all at once.' }, nl: { gimmick: 'Haal paarse debuffs van vrienden.', danger: 'Eindbaas schiet een kegel — niet ervoor staan!', tip: 'Ren weg van grote groepen, vecht niet alles tegelijk.' }, da: { gimmick: 'Fjern lilla dårlige ting fra venner.', danger: 'Sidste boss skyder en kegle — stå ikke foran!', tip: 'Løb væk fra store grupper, kæmp ikke mod dem alle.' }}},
    { id: 'parhelion_plaza', name: 'Parhelion Plaza', zoneName: "Isle of Quel'Danas, Sunwell Ramparts", way: '/way #2248 46.8 40.9', url: 'https://www.wowhead.com/zone=16542/parhelion-plaza',
      tactics: { nl: 'Zon-mechanic: sta in schaduw of brand. Interrupt Arcane. Valeera op Sun Priests.', en: 'Sun mechanic: stand in shadow or burn. Interrupt Arcane. Valeera on Sun Priests.', da: 'Sol-mekanik: stå i skygge eller brænd. Afbryd Arcane casts.' },
      details: { en: { gimmick: 'Stay in the light! Step in shadow or you burn.', danger: 'Sun Priests cast scary spells — interrupt them.', tip: 'Use Valeera to help kill priests quickly.' }, nl: { gimmick: 'Blijf in het licht! Ga in de schaduw of je verbrandt.', danger: 'Sun Priests gooien enge spreuken — onderbreek ze.', tip: 'Zet Valeera op priests om ze snel te doden.' }, da: { gimmick: 'Bliv i lyset! Gå i skygge eller du brænder.', danger: 'Sun Priests kaster skræmmende spells — afbryd dem.', tip: 'Brug Valeera til at dræbe præster hurtigt.' }}},
    { id: 'the_darkway', name: 'The Darkway', zoneName: 'Silvermoon City', way: '/way #2248 39.3 31.7', url: 'https://www.wowhead.com/zone=16642/the-darkway',
      tactics: { nl: 'Volg het licht. Vermijd Void-zones. Interrupt Mind Control. Groepeer voor AoE.', en: 'Follow the light. Avoid Void zones. Interrupt Mind Control. Group for AoE.', da: 'Følg lyset. Undgå Void-zoner. Afbryd Mind Control. Gruppér til AoE.' },
      details: { en: { gimmick: 'Stay in the light.', danger: 'Giant spider boss! Mind Control makes friends attack you — interrupt it.', tip: "Don't rush! Stick together." }, nl: { gimmick: 'Blijf in het licht.', danger: 'Reuzenspin-baas! Mind Control laat vrienden je aanvallen — onderbreek het.', tip: 'Niet rennen! Blijf bij elkaar.' }, da: { gimmick: 'Bliv i lyset.', danger: 'Kæmpe edderkop-boss! Mind Control får venner til at angribe dig — afbryd det.', tip: 'Skynd dig ikke! Hold jer sammen.' }}},
    { id: 'twilight_crypts', name: 'Twilight Crypts', zoneName: "Zul'Aman", way: '/way #2248 25.4 84.4', url: 'https://www.wowhead.com/zone=16557/twilight-crypts',
      tactics: { nl: 'Undead: Holy/Shadow damage. Vermijd totem AoE. Dispel Curse of Agony.', en: 'Undead: use Holy/Shadow damage. Avoid totem AoE. Dispel Curse of Agony.', da: 'Undead: brug Holy/Shadow skade. Undgå totem AoE. Dispel Curse of Agony.' },
      details: { en: { gimmick: 'Skeletons and undead — Holy magic works best.', danger: 'Totems make red circles on the ground — move out!', tip: 'Remove the purple curse from friends.' }, nl: { gimmick: 'Skeletten en undead — heilige magie werkt het best.', danger: 'Totems maken rode cirkels — stap eruit!', tip: 'Haal de paarse vloek van vrienden.' }, da: { gimmick: 'Skeletter og undead — hellig magi virker bedst.', danger: 'Totems laver røde cirkler — flyt dig ud!', tip: 'Fjern den lilla forbandelse fra venner.' }}},
    { id: 'atalaman', name: "Atal'Aman", zoneName: "Zul'Aman Region", way: '/way #2248 63.7 80.1', url: 'https://www.wowhead.com/zone=16194/atalaman',
      tactics: { nl: 'Interrupt Hex. Kite Berserkers. Stuns op healers. Checkpoint na eerste boss.', en: 'Interrupt Hex. Kite Berserkers. Stuns on healers. Checkpoint after first boss.', da: 'Afbryd Hex. Kite Berserkers. Brug stuns på healers.' },
      details: { en: { gimmick: 'Trolls turn you into a frog — interrupt that spell!', danger: 'Angry Berserkers hit hard — run away and let friends hit them.', tip: 'Stun the healers first so they cant heal.' }, nl: { gimmick: 'Trollen veranderen je in kikker — onderbreek die spell!', danger: 'Boze Berserkers slaan hard — ren weg en laat vrienden ze raken.', tip: 'Stun de healers eerst zodat ze niet kunnen helen.' }, da: { gimmick: 'Trolde forvandler dig til frø — afbryd den spell!', danger: 'Vrede Berserkers slår hårdt — løb væk og lad venner ramme dem.', tip: 'Stun healers først så de ikke kan helbrede.' }}},
    { id: 'grudge_pit', name: 'The Grudge Pit', zoneName: 'Harandar', way: '/way #2248 70.4 64.8', url: 'https://www.wowhead.com/zone=16548/the-grudge-pit',
      tactics: { nl: 'Focus één target. Vermijd grond-effecten. Interrupt Execute-achtige abilities.', en: 'Focus one target. Avoid ground effects. Interrupt Execute-like abilities.', da: 'Fokuser ét mål. Undgå jordeffekter. Afbryd Execute-lignende evner.' },
      details: { en: { gimmick: 'Kill one monster at a time — dont spread damage.', danger: 'Stuff on the ground hurts — watch your feet!', tip: 'Interrupt the big finishing move before it hits.' }, nl: { gimmick: 'Dood één monster tegelijk — verspreid geen schade.', danger: 'Spul op de grond doet pijn — kijk waar je loopt!', tip: 'Onderbreek de grote afmakende move voor die raakt.' }, da: { gimmick: 'Dræb ét monster ad gangen — spred ikke skade.', danger: 'Ting på jorden gør ondt — kig hvor du går!', tip: 'Afbryd den store afsluttende move før den rammer.' }}},
    { id: 'gulf_of_memory', name: 'The Gulf of Memory', zoneName: 'Harandar', way: '/way #2248 36.7 49.6', url: 'https://www.wowhead.com/zone=16595/the-gulf-of-memory',
      tactics: { nl: 'Onthoud volgorde. Dispel Confusion. Kite grote packs. Uit de beam bij finale.', en: 'Remember sequence. Dispel Confusion. Kite large packs. Avoid beam at final.', da: 'Husk rækkefølge. Dispel Confusion. Kite store grupper. Undgå beam ved final.' },
      details: { en: { gimmick: 'Remember the order of things — pay attention!', danger: 'Confusion makes you lose control — remove it from friends.', tip: "Last boss shoots a laser — dont stand in it!" }, nl: { gimmick: 'Onthoud de volgorde — let op!', danger: 'Confusion laat je de controle verliezen — haal het van vrienden.', tip: 'Eindbaas schiet een laser — sta er niet in!' }, da: { gimmick: 'Husk rækkefølgen — vær opmærksom!', danger: 'Confusion får dig til at miste kontrollen — fjern det fra venner.', tip: 'Sidste boss skyder en laser — stå ikke i den!' }}},
    { id: 'sunkiller_sanctum', name: 'Sunkiller Sanctum', zoneName: 'Voidstorm', way: '/way #2248 54.8 47.1', url: 'https://www.wowhead.com/zone=16592/sunkiller-sanctum',
      tactics: { nl: 'Void + Sun mix. Interrupt Solar Flare. Vermijd Void fissures. Defensives op grote pulls.', en: 'Void + Sun mix. Interrupt Solar Flare. Avoid Void fissures. Defensives on big pulls.', da: 'Void + Sol mix. Afbryd Solar Flare. Undgå Void-spalter.' },
      details: { en: { gimmick: 'Sun and darkness mixed — watch for both types of danger.', danger: 'Cracks in the ground and sun blasts — interrupt Solar Flare!', tip: 'Use your defensive when pulling big groups.' }, nl: { gimmick: 'Zon en donker gemengd — let op beide soorten gevaar.', danger: 'Barsten in de grond en zonstralen — onderbreek Solar Flare!', tip: 'Gebruik je defensive bij grote pulls.' }, da: { gimmick: 'Sol og mørke blandet — pas på begge typer fare.', danger: 'Revner i jorden og sol-blasts — afbryd Solar Flare!', tip: 'Brug din defensive ved store pulls.' }}},
    { id: 'shadowguard_point', name: 'Shadowguard Point', zoneName: 'Voidstorm', way: '/way #2248 37.1 49.1', url: 'https://www.wowhead.com/zone=16549/shadowguard-point',
      tactics: { nl: 'Shadow damage zwaar. Gebruik defensives. Interrupt Shadow Crash.', en: 'Shadow damage heavy. Use defensives. Interrupt Shadow Crash.', da: 'Shadow-skade tung. Brug defensives. Afbryd Shadow Crash.' },
      details: { en: { gimmick: 'Lots of shadow damage — it hurts!', danger: 'Shadow Crash is a big hit — interrupt it before it lands.', tip: 'Use your defensive button when you get low.' }, nl: { gimmick: 'Veel schaduwschade — het doet pijn!', danger: 'Shadow Crash is een grote klap — onderbreek het.', tip: 'Gebruik je defensive knop als je laag bent.' }, da: { gimmick: 'Masse shadow-skade — det gør ondt!', danger: 'Shadow Crash er et stort slag — afbryd det.', tip: 'Brug din defensive-knap når du er lav.' }}},
    { id: 'torments_rise', name: "Torment's Rise", zoneName: 'Voidstorm', way: '/way #2248 52.4 38.7', url: 'https://www.wowhead.com/zone=16596/torments-rise',
      tactics: { nl: 'Nemesis Delve — moeilijkste. Strakke pulls. Bewaar alle levens. Interrupt alles.', en: 'Nemesis Delve — hardest. Tight pulls. Save all lives. Interrupt everything.', da: 'Nemesis Delve — sværeste. Stramme pulls. Gem alle liv. Afbryd alt.' },
      details: { en: { gimmick: 'The hardest Delve — take it slow!', danger: 'Everything hurts. You have limited lives — dont waste them.', tip: 'Interrupt every spell you see. Dont rush!' }, nl: { gimmick: 'De moeilijkste Delve — rustig aan!', danger: 'Alles doet pijn. Je hebt beperkte levens — verspil ze niet.', tip: 'Onderbreek elke spell die je ziet. Niet rennen!' }, da: { gimmick: 'Den sværeste Delve — tag det roligt!', danger: 'Alt gør ondt. Du har begrænsede liv — spild dem ikke.', tip: 'Afbryd hver spell du ser. Skynd dig ikke!' }}},
    { id: 'den_of_echoes', name: "The Den of Echoes", zoneName: '—', way: null, url: 'https://www.wowhead.com/search?q=The+Den+of+Echoes',
      tactics: { nl: 'Info volgt.', en: 'Info coming soon.', da: 'Info følger.' },
      details: { en: { gimmick: 'Info coming soon.', danger: '—', tip: 'Check back later!' }, nl: { gimmick: 'Info volgt.', danger: '—', tip: 'Kom later terug!' }, da: { gimmick: 'Info følger.', danger: '—', tip: 'Tjek tilbage senere!' }}},
  ],

  // Loot table — Midnight Season 1 (van NextTier)
  // Tier 8+: Bountiful Coffer 250, Trovehunter's Bounty 259, Great Vault 259
  lootTable: [
    { tier: 1,  bountiful: 220, trovehunter: '—', greatVault: 233 },
    { tier: 2,  bountiful: 224, trovehunter: '—', greatVault: 237 },
    { tier: 3,  bountiful: 227, trovehunter: '—', greatVault: 240 },
    { tier: 4,  bountiful: 230, trovehunter: 237, greatVault: 243 },
    { tier: 5,  bountiful: 233, trovehunter: 246, greatVault: 246 },
    { tier: 6,  bountiful: 240, trovehunter: 253, greatVault: 253 },
    { tier: 7,  bountiful: 246, trovehunter: 256, greatVault: 256 },
    { tier: 8,  bountiful: 250, trovehunter: 259, greatVault: 259 },
    { tier: 9,  bountiful: 250, trovehunter: 259, greatVault: 259 },
    { tier: 10, bountiful: 250, trovehunter: 259, greatVault: 259 },
    { tier: 11, bountiful: 250, trovehunter: 259, greatVault: 259 },
  ],

  // Key info — meertalig
  keyInfo: {
    nl: 'Bij een Bountiful Coffer (aan het einde van een Bountiful Delve) checkt WoW automatisch of je 100 Key Shards hebt. Heb je genoeg? Dan kun je de coffer openen — de shards worden dan direct verbruikt.',
    en: 'At a Bountiful Coffer (at the end of a Bountiful Delve), WoW automatically checks if you have 100 Key Shards. Got enough? You can open the coffer — the shards are consumed on the spot.',
    da: 'Ved en Bountiful Coffer (i slutningen af et Bountiful Delve) tjekker WoW automatisk om du har 100 Key Shards. Har du nok? Så kan du åbne coffer\'en — shards bliver brugt på stedet.',
  },

  // Bountiful Delves — 4 per dag, dagelijkse rotatie (EU reset 07:00 UTC / 08:00 CET)
  // Bron: "There has always been 4 Bountiful delves a day" (Blizzard forums)
  // Schema: 7 dagen (week), elke dag 4 delve IDs. Dag = (getWowDayIndex() + bountifulScheduleOffset) % 7
  // Staat het niet gelijk met in-game? Pas bountifulScheduleOffset aan (bijv. 1 of -1) of corrigeer de rijen hieronder.
  bountifulScheduleOffset: 0,
  bountifulSchedule: [
    ['shadow_enclave', 'collegiate_calamity', 'twilight_crypts', 'grudge_pit'],
    ['parhelion_plaza', 'the_darkway', 'atalaman', 'gulf_of_memory'],
    ['sunkiller_sanctum', 'shadowguard_point', 'torments_rise', 'shadow_enclave'],
    ['collegiate_calamity', 'parhelion_plaza', 'twilight_crypts', 'gulf_of_memory'],
    ['the_darkway', 'atalaman', 'grudge_pit', 'sunkiller_sanctum'],
    ['shadowguard_point', 'torments_rise', 'shadow_enclave', 'collegiate_calamity'],
    ['parhelion_plaza', 'twilight_crypts', 'atalaman', 'grudge_pit'],
  ],
};

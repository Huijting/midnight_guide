// data/raids/dreamrift.js
// The Dreamrift — Midnight Season 1 Raid
// 1 boss: Chimaerus, the Undreamt God

if (typeof DUNGEONS === 'undefined') window.DUNGEONS = [];

DUNGEONS.push({
  id:   'dreamrift',
  type: 'raid',
  name: 'The Dreamrift',
  zone: { nl: 'Harandar — Rift of Aln', en: 'Harandar — Rift of Aln', da: 'Harandar — Rift of Aln' },
  time: null,
  level: { nl: 'Seizoen 1 Raid — Normal/Heroic/Mythic', en: 'Season 1 Raid — Normal/Heroic/Mythic', da: 'Sæson 1 Raid — Normal/Heroic/Mythic' },
  bosses_short: ['Chimaerus'],

  lore: {
    nl: 'Diep in de Rift of Aln, waar de dromen van Aln\'hara ooit werkelijkheid vormgaven, huist Chimaerus — een wezen dat zich vol vrat aan de chaos die achterbleef. Nu staat het als het monster van de rift: een god van pijn en razernij.',
    en: 'Deep within the Rift of Aln, where Aln\'hara\'s dreams once shaped reality, Chimaerus lurks — a being that gorged itself on the chaos left behind. Now it stands as the monster of the rift: a god of agony and rage.',
    da: 'Dybt i Rift of Aln, hvor Aln\'haras drømme engang formede virkeligheden, lurer Chimaerus — et væsen der spiste sig mæt på det tilbageværende kaos. Nu er det monsterets af riften: en gud af smerte og raseri.',
  },

  tips: [
    {
      title: { nl: '⚠️ Geen trash', en: '⚠️ No trash', da: '⚠️ Intet trash' },
      text:  { nl: 'De raid heeft geen trash. Je staat direct tegenover Chimaerus na het inloggen. Zorg dat iedereen geflaskt en klaar is voor de pull.',
               en: 'The raid has no trash. You face Chimaerus immediately upon entering. Make sure everyone is flasked and ready before pulling.',
               da: 'Raiden har intet trash. Du møder Chimaerus direkte efter indtrædelse. Sørg for at alle er flasket og klar inden pull.' },
    },
    {
      title: { nl: '🔑 Kernmechanic: stop de Manifestations', en: '🔑 Core mechanic: stop the Manifestations', da: '🔑 Kernmekanik: stop Manifestations' },
      text:  { nl: 'Elke Manifestation die Chimaerus bereikt geeft hem Cannibalized Essence: permanente schade-buff + heal. Genoeg stacks = unkillable. Alles draait om add-controle.',
               en: 'Every Manifestation that reaches Chimaerus gives him Cannibalized Essence: permanent damage buff + heal. Enough stacks = unkillable. Everything revolves around add control.',
               da: 'Enhver Manifestation der når Chimaerus giver ham Cannibalized Essence: permanent skade-buff + heal. Nok stacks = udødelig. Alt drejer sig om add-kontrol.' },
    },
    {
      title: { nl: '👁️ Alnsight = jouw wapen', en: '👁️ Alnsight = your weapon', da: '👁️ Alnsight = dit våben' },
      text:  { nl: 'Manifestations zijn alleen aanvalbaar met Alnsight (verkregen via Alndust Upheaval). Zonder Alnsight zijn ze immuun. Wissel van realm op het juiste moment.',
               en: 'Manifestations can only be attacked with Alnsight (gained via Alndust Upheaval). Without Alnsight they are immune. Swap realms at the right moment.',
               da: 'Manifestations kan kun angribes med Alnsight (opnået via Alndust Upheaval). Uden Alnsight er de immune. Skift realm på det rigtige tidspunkt.' },
    },
  ],

  bosses: [
    {
      num: 1,
      name: 'Chimaerus, the Undreamt God',

      desc: {
        nl: 'Twee fases. Fase 1: add-management loop — kill Manifestations via Alnsight. Bij 100 energie: Fase 2 met Corrupted Devastation + Ravenous Dive. Laat nooit een Manifestation Chimaerus bereiken.',
        en: 'Two phases. Phase 1: add-management loop — kill Manifestations via Alnsight. At 100 energy: Phase 2 with Corrupted Devastation + Ravenous Dive. Never let a Manifestation reach Chimaerus.',
        da: 'To faser. Fase 1: add-management loop — dræb Manifestations via Alnsight. Ved 100 energi: Fase 2 med Corrupted Devastation + Ravenous Dive. Lad aldrig en Manifestation nå Chimaerus.',
      },

      tank: {
        nl: [
          '<strong>Rending Tear</strong> — Frontale cleave + bleed. Tank altijd weggedraaid van de raid. Wissel bij hoge bleeds.',
          '<strong>Alndust Upheaval</strong> — Soak met de raid binnen 10 yard. Degenen die geraakt worden gaan naar de Rift (Alnsight).',
          '<strong>Consume</strong> — 10 sec channel op de tank. Gebruik personal defensives. Alle Manifestations moeten dood zijn voor het einde.',
          '<strong>Colossal Horror</strong> — Off-tank pakt deze mini-boss direct. Colossal Strikes focussen op de huidige tank.',
          '<strong>Fase 2</strong> — Chimaerus vliegt op bij 100 energie. Houd adds op de grond, gebruik grote defensives voor Corrupted Devastation.',
        ],
        en: [
          '<strong>Rending Tear</strong> — Frontal cleave + bleed. Always tank away from the raid. Swap on high bleeds.',
          '<strong>Alndust Upheaval</strong> — Soak with the raid within 10 yards. Those hit enter the Rift (Alnsight).',
          '<strong>Consume</strong> — 10 sec channel on the tank. Use personal defensives. All Manifestations must be dead before it ends.',
          '<strong>Colossal Horror</strong> — Off-tank picks this up immediately. Colossal Strikes focus on the current tank.',
          '<strong>Phase 2</strong> — Chimaerus takes flight at 100 energy. Keep adds under control on the ground, use major defensives for Corrupted Devastation.',
        ],
        da: [
          '<strong>Rending Tear</strong> — Frontal cleave + bleed. Tank altid væk fra raiden. Skift ved høje bleeds.',
          '<strong>Alndust Upheaval</strong> — Soak med raiden inden for 10 yards. De der rammes går ind i Riften (Alnsight).',
          '<strong>Consume</strong> — 10 sek channel på tanken. Brug personlige defensives. Alle Manifestations skal være døde inden det slutter.',
          '<strong>Colossal Horror</strong> — Off-tank tager denne straks. Colossal Strikes fokuserer på den nuværende tank.',
          '<strong>Fase 2</strong> — Chimaerus flyver op ved 100 energi. Hold adds under kontrol på jorden, brug store defensives til Corrupted Devastation.',
        ],
      },

      heal: {
        nl: [
          '<strong>Rift Sickness</strong> — Constante raidschade, geen spikes. Houd iedereen boven 70% HP. Consistent healen, niet reactief.',
          '<strong>Caustic Phlegm</strong> — Nature DoT op ALLE spelers 12 sec. Grote raidcooldown hier. Dit is het zwaarste healvenster.',
          '<strong>Consuming Miasma</strong> — Debuff op meerdere spelers 1 min. Prioriteer dispel op wie laag staat.',
          '<strong>Rift Madness</strong> — Escalerende AoE + horror in de Rift. Monitor HP van Rift-spelers. Groepsgenoten buiten de Rift kunnen hen redden door naast hen te staan.',
          '<strong>Fase 2</strong> — Bewaar grote raidcooldown voor hier. Corrupted Devastation is zwaar en combineert met doorlopende add-schade.',
        ],
        en: [
          '<strong>Rift Sickness</strong> — Constant raid damage, no spikes. Keep everyone above 70% HP. Heal consistently, not reactively.',
          '<strong>Caustic Phlegm</strong> — Nature DoT on ALL players 12 sec. Major raid cooldown here. This is the heaviest healing window.',
          '<strong>Consuming Miasma</strong> — Debuff on multiple players 1 min. Prioritize dispel on who is lowest.',
          '<strong>Rift Madness</strong> — Escalating AoE + horror in the Rift. Monitor HP of Rift players. Allies outside the Rift can save them by standing next to them.',
          '<strong>Phase 2</strong> — Save major raid cooldown for here. Corrupted Devastation is heavy and combines with ongoing add damage.',
        ],
        da: [
          '<strong>Rift Sickness</strong> — Konstant raid-skade, ingen spikes. Hold alle over 70% HP. Heal konsistent, ikke reaktivt.',
          '<strong>Caustic Phlegm</strong> — Nature DoT på ALLE spillere i 12 sek. Stort raid-cooldown her. Dette er det tungeste heal-vindue.',
          '<strong>Consuming Miasma</strong> — Debuff på flere spillere i 1 min. Prioritér dispel på dem der er lavest.',
          '<strong>Rift Madness</strong> — Eskalerende AoE + horror i Riften. Overvåg HP på Rift-spillere. Allierede uden for Riften kan redde dem ved at stå ved siden af dem.',
          '<strong>Fase 2</strong> — Gem stort raid-cooldown til her. Corrupted Devastation er tungt og kombinerer med løbende add-skade.',
        ],
      },

      dps: {
        nl: [
          '<strong>Alnsight</strong> — Na Alndust Upheaval ga je naar de Rift. 40 sec om Manifestations te doden. Ze zijn immuun zonder Alnsight — val alleen aan als je hem hebt.',
          '<strong>Rift Vulnerability</strong> — Al geraakt door Upheaval? +600% schade van de volgende. Zorg dat je niet twee keer in de soak-zone staat.',
          '<strong>Dissonance</strong> — In de Rift doe je Nature schade aan bondgenoten binnen 8 yard. Houd afstand van andere Rift-spelers.',
          '<strong>Rift Madness redden</strong> — Groepsgenoot in de Rift met Rift Madness? Ga naast hem staan (buiten de Rift) om van realm te wisselen en hem te redden.',
          '<strong>Ravenous Dive</strong> — Aan het einde van Fase 2 consumeert Chimaerus ALLE levende Manifestations. Alles moet dood zijn voor de Dive. Dit is de pull-breaker.',
        ],
        en: [
          '<strong>Alnsight</strong> — After Alndust Upheaval you enter the Rift. 40 sec to kill Manifestations. They are immune without Alnsight — only attack when you have it.',
          '<strong>Rift Vulnerability</strong> — Already hit by Upheaval? +600% damage from the next one. Make sure you\'re not in the soak zone twice.',
          '<strong>Dissonance</strong> — In the Rift you deal Nature damage to allies within 8 yards. Keep distance from other Rift players.',
          '<strong>Save from Rift Madness</strong> — Teammate in the Rift with Rift Madness? Stand next to them (outside the Rift) to swap realms and save them.',
          '<strong>Ravenous Dive</strong> — At the end of Phase 2 Chimaerus consumes ALL living Manifestations. Everything must be dead before the Dive. This is the pull-breaker.',
        ],
        da: [
          '<strong>Alnsight</strong> — Efter Alndust Upheaval går du ind i Riften. 40 sek til at dræbe Manifestations. De er immune uden Alnsight — angrib kun når du har det.',
          '<strong>Rift Vulnerability</strong> — Allerede ramt af Upheaval? +600% skade fra næste. Sørg for at du ikke er i soak-zonen to gange.',
          '<strong>Dissonance</strong> — I Riften giver du Nature-skade til allierede inden for 8 yards. Hold afstand fra andre Rift-spillere.',
          '<strong>Red fra Rift Madness</strong> — Holdkammerat i Riften med Rift Madness? Stå ved siden af dem (uden for Riften) for at skifte realm og redde dem.',
          '<strong>Ravenous Dive</strong> — Til sidst i Fase 2 konsumerer Chimaerus ALLE levende Manifestations. Alt skal være dødt inden Dive. Dette er pull-breaker.',
        ],
      },
    },
  ],

  route: {
    norm_note: null,
    pulls: [
      {
        type: 'event',
        label: { nl: 'Ingang — geen trash', en: 'Entrance — no trash', da: 'Indgang — intet trash' },
        area:  { nl: 'The Dreamrift — Rift of Aln', en: 'The Dreamrift — Rift of Aln', da: 'The Dreamrift — Rift of Aln' },
        desc:  { nl: 'Flask op, klaar staan. Rift Emergence opent de fight direct.',
                 en: 'Flask up, get ready. Rift Emergence opens the fight immediately.',
                 da: 'Flask op, gør klar. Rift Emergence åbner kampen direkte.' },
      },
      {
        type: 'boss',
        label: { nl: '🔥 Chimaerus — BAAS', en: '🔥 Chimaerus — BOSS', da: '🔥 Chimaerus — BOSS' },
        area:  { nl: 'Rift of Aln', en: 'Rift of Aln', da: 'Rift of Aln' },
        desc:  { nl: 'Fase 1: Kill Manifestations via Alnsight. Bij 100 energie Fase 2: Corrupted Devastation + Ravenous Dive. Alles dood voor de Dive.',
                 en: 'Phase 1: Kill Manifestations via Alnsight. At 100 energy Phase 2: Corrupted Devastation + Ravenous Dive. Everything dead before the Dive.',
                 da: 'Fase 1: Dræb Manifestations via Alnsight. Ved 100 energi Fase 2: Corrupted Devastation + Ravenous Dive. Alt dødt før Dive.' },
      },
    ],
  },
});

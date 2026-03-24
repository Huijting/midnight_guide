// data/raids/dreamrift.js
// The Dreamrift — Midnight Season 1 Raid
// 1 boss: Chimaerus, the Undreamt God

if (typeof DUNGEONS === 'undefined') window.DUNGEONS = [];

DUNGEONS.push({
  id:   'dreamrift',
  type: 'raid',
  name: 'The Dreamrift',
  zone: { nl: 'Harandar — Rift of Aln', en: 'Harandar — Rift of Aln'},
  time: null,
  level: { nl: 'Seizoen 1 Raid — Normal/Heroic/Mythic', en: 'Season 1 Raid — Normal/Heroic/Mythic'},
  bosses_short: ['Chimaerus'],

  lore: {
    nl: 'Diep in de Rift of Aln, waar de dromen van Aln\'hara ooit werkelijkheid vormgaven, huist Chimaerus — een wezen dat zich vol vrat aan de chaos die achterbleef. Nu staat het als het monster van de rift: een god van pijn en razernij.',
    en: 'Deep within the Rift of Aln, where Aln\'hara\'s dreams once shaped reality, Chimaerus lurks — a being that gorged itself on the chaos left behind. Now it stands as the monster of the rift: a god of agony and rage.'
  },

  tips: [
    {
      title: { nl: '⚠️ Geen trash', en: '⚠️ No trash'},
      text:  { nl: 'De raid heeft geen trash. Je staat direct tegenover Chimaerus na het inloggen. Zorg dat iedereen geflaskt en klaar is voor de pull.',
               en: 'The raid has no trash. You face Chimaerus immediately upon entering. Make sure everyone is flasked and ready before pulling.'},
    },
    {
      title: { nl: '🔑 Kernmechanic: stop de Manifestations', en: '🔑 Core mechanic: stop the Manifestations'},
      text:  { nl: 'Elke Manifestation die Chimaerus bereikt geeft hem Cannibalized Essence: permanente schade-buff + heal. Genoeg stacks = unkillable. Alles draait om add-controle.',
               en: 'Every Manifestation that reaches Chimaerus gives him Cannibalized Essence: permanent damage buff + heal. Enough stacks = unkillable. Everything revolves around add control.'},
    },
    {
      title: { nl: '👁️ Alnsight = jouw wapen', en: '👁️ Alnsight = your weapon'},
      text:  { nl: 'Manifestations zijn alleen aanvalbaar met Alnsight (verkregen via Alndust Upheaval). Zonder Alnsight zijn ze immuun. Wissel van realm op het juiste moment.',
               en: 'Manifestations can only be attacked with Alnsight (gained via Alndust Upheaval). Without Alnsight they are immune. Swap realms at the right moment.'},
    },
  ],

  bosses: [
    {
      num: 1,
      name: 'Chimaerus, the Undreamt God',

      desc: {
        nl: 'Twee fases. Fase 1: add-management loop — kill Manifestations via Alnsight. Bij 100 energie: Fase 2 met Corrupted Devastation + Ravenous Dive. Laat nooit een Manifestation Chimaerus bereiken.',
        en: 'Two phases. Phase 1: add-management loop — kill Manifestations via Alnsight. At 100 energy: Phase 2 with Corrupted Devastation + Ravenous Dive. Never let a Manifestation reach Chimaerus.'
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
        ]
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
        ]
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
        ]
      },
    },
  ],

  route: {
    norm_note: null,
    pulls: [
      {
        type: 'event',
        label: { nl: 'Ingang — geen trash', en: 'Entrance — no trash'},
        area:  { nl: 'The Dreamrift — Rift of Aln', en: 'The Dreamrift — Rift of Aln'},
        desc:  { nl: 'Flask op, klaar staan. Rift Emergence opent de fight direct.',
                 en: 'Flask up, get ready. Rift Emergence opens the fight immediately.'},
      },
      {
        type: 'boss',
        label: { nl: '🔥 Chimaerus — BAAS', en: '🔥 Chimaerus — BOSS'},
        area:  { nl: 'Rift of Aln', en: 'Rift of Aln'},
        desc:  { nl: 'Fase 1: Kill Manifestations via Alnsight. Bij 100 energie Fase 2: Corrupted Devastation + Ravenous Dive. Alles dood voor de Dive.',
                 en: 'Phase 1: Kill Manifestations via Alnsight. At 100 energy Phase 2: Corrupted Devastation + Ravenous Dive. Everything dead before the Dive.'},
      },
    ],
  },
});

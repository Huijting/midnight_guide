/**
 * Midnight Season 1 — portal network reference.
 * Zone / hub names stay English (game terminology); descriptions are EN + NL.
 */
const PORTAL_DATA = [
  {
    id: 'silvermoon-sunwell',
    hubName: 'Silvermoon City (Sunwell Terrace)',
    hubWaypoint: '/way #2393 58.2 45.1',
    portals: [
      {
        to: 'Voidstorm',
        description: {
          en: 'Teleport to Voidstorm from the Sunwell Terrace portal hub.',
          nl: 'Teleporteer naar Voidstorm vanaf het portaalhuis bij de Zonnewel.',
        },
        way: '/way #2405 42.1 60.2',
      },
      {
        to: 'Harandar',
        description: {
          en: 'Portal connection to the Harandar zone.',
          nl: 'Portaalverbinding naar de zone Harandar.',
        },
        way: '/way #2413 33.4 52.8',
      },
      {
        to: "Zul'Aman",
        description: {
          en: 'Dungeon and zone access via the network portal to Zul\'Aman.',
          nl: 'Dungeon- en zone-toegang via het netwerkportaal naar Zul\'Aman.',
        },
        way: '/way #2437 63.8 80.2',
      },
      {
        to: "Isle of Quel'Danas",
        description: {
          en: 'Direct link to the Isle of Quel\'Danas (Sunwell / daily hub).',
          nl: 'Directe verbinding met het Eiland van Quel\'Danas (Sunwell / daily hub).',
        },
        way: '/way #16215 48.0 44.0',
      },
      {
        to: 'Main Capitals',
        description: {
          en: 'Use this portal to reach major faction capitals (Orgrimmar, Stormwind, etc.) — select your destination at the portal in-game.',
          nl: 'Gebruik dit portaal om grote factiehoofdsteden te bereiken (Orgrimmar, Stormwind, enz.) — kies je bestemming bij het portaal in-game.',
        },
        way: null,
      },
    ],
  },
];

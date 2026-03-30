/**
 * Midnight Season 1 — portal network reference.
 * Zone / hub names stay English (game terminology); descriptions are EN + NL.
 *
 * Sources: Method.gg (Silvermoon portal TomTom coords, Explore Harandar — The Den,
 *   Weekly Vault + Bank coords); GamerHour (network links: The Den ↔ Silvermoon/Voidstorm;
 *   Oling Ridge hub; Zul'Aman has no Midnight portals).
 */

/** Shown at the top of the Travel Guide (Method.gg: «Weekly Vault and Bank»). */
const TRAVEL_GUIDE_VAULT_TOP = {
  title: {
    en: 'Silvermoon City — The Vault (Great Vault)',
    nl: 'Silvermoon City — The Vault (Great Vault)',
  },
  way: '/way #2393 50.64 65.43',
  hordeWay: '/way #2393 72.04 64.87',
  description: {
    en: 'Weekly Great Vault and the neutral bank share this spot in the central ring (Method.gg). Horde-only east district: separate vault/bank — use the second TomTom row below.',
    nl: 'Wekelijkse Great Vault en de neutrale bank in de neutrale middencirkel (Method.gg). Horde-only oostelijk district: aparte vault/bank — gebruik de tweede TomTom-rij hieronder.',
  },
};

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
  {
    id: 'silvermoon-gardens',
    hubName: 'Silvermoon City (Gardens of Remembrance)',
    hubWaypoint: '/way #2393 36.70 68.57',
    portals: [
      {
        to: 'Harandar',
        description: {
          en: 'Campaign-unlocked portal under the large tree — teleports to The Den (Harandar hub). Coordinates from Method.gg.',
          nl: 'Portaal na de campagne onder de grote boom — teleporteert naar The Den (hub in Harandar). Coördinaten volgens Method.gg.',
        },
        way: '/way #2413 33.4 52.8',
      },
      {
        to: 'Voidstorm',
        description: {
          en: 'Silvermoon side of the portal: above the Gardens (Method.gg /way #2393 35.28 65.65). Copy below = typical arrival in Voidstorm (links to the Oling Ridge network).',
          nl: 'Silvermoon-kant van het portaal: boven de tuinen (Method.gg /way #2393 35.28 65.65). Kopieer hieronder = typische aankomst in Voidstorm (koppelt aan Oling Ridge-netwerk).',
        },
        way: '/way #2405 42.1 60.2',
      },
    ],
  },
  {
    id: 'silvermoon-capitals',
    hubName: "Silvermoon City (Wayfarer's Rest — capitals)",
    hubWaypoint: '/way #2393 53.33 66.24',
    portals: [
      {
        to: 'Main Capitals',
        description: {
          en: 'Building just right of Wayfarer’s Rest: portals to Orgrimmar and Stormwind (Method.gg). Pick your faction destination in-game.',
          nl: 'Gebouw rechts van Wayfarer’s Rest: portalen naar Orgrimmar en Stormwind (Method.gg). Kies je factie in-game.',
        },
        way: null,
      },
    ],
  },
  {
    id: 'harandar-den',
    hubName: 'The Den (Harandar)',
    hubWaypoint: '/way #2413 51.12 50.82',
    portals: [
      {
        to: 'Silvermoon City',
        description: {
          en: 'Return portal to Silvermoon — typical arrival near the Gardens of Remembrance tree portal (Method / network guides).',
          nl: 'Terugportaal naar Silvermoon — meestal bij de boom in de Gardens of Remembrance (Method / netwerkgidsen).',
        },
        way: '/way #2393 36.70 68.57',
      },
      {
        to: 'Voidstorm',
        description: {
          en: 'Second hub portal: connects to the Voidstorm portal cluster (Oling Ridge area).',
          nl: 'Tweede hubportaal: verbinding met het portaalcluster in Voidstorm (gebied Oling Ridge).',
        },
        way: '/way #2405 52.58 72.90',
      },
    ],
  },
  {
    id: 'voidstorm-oling',
    hubName: 'Oling Ridge (Voidstorm)',
    hubWaypoint: '/way #2405 52.58 72.90',
    portals: [
      {
        to: 'Silvermoon City',
        description: {
          en: 'Main return to Silvermoon — west-side Voidstorm portal location (Method.gg).',
          nl: 'Hoofdterugkeer naar Silvermoon — Voidstorm-portaal westzijde stad (Method.gg).',
        },
        way: '/way #2393 35.28 65.65',
      },
      {
        to: 'Harandar',
        description: {
          en: 'Portal to Harandar / The Den hub (central Harandar city).',
          nl: 'Portaal naar Harandar / hub The Den (centrum Harandar).',
        },
        way: '/way #2413 51.12 50.82',
      },
      {
        to: "Isle of Quel'Danas (Teleport Egress)",
        description: {
          en: 'Egress near the Voidspire raid entrance on Voidstorm (guides cite ~45.5, 64.4 on the Voidstorm map). Copy below = Isle waypoint near the Sunwell hub (not the same pad as the Silvermoon Sunwell portal).',
          nl: 'Egress bij de Voidspire-ingang in Voidstorm (gidsen: ~45.5, 64.4 op Voidstorm-kaart). Kopieer hieronder = /way op het eiland bij Sunwell (andere plek dan het Sunwell-portaal in Silvermoon).',
        },
        way: '/way #16215 48.0 44.0',
      },
    ],
  },
  {
    id: 'zulaman',
    hubName: "Zul'Aman",
    hubWaypoint: '/way #2437 63.8 80.2',
    portals: [
      {
        to: 'Silvermoon City',
        description: {
          en: 'No Midnight portal network here (third-party guides): fly from Eversong Woods or use Hearthstone / other teleports to reach Silvermoon.',
          nl: 'Geen Midnight-portaalnetwerk hier (gidsen buiten Blizzard): vlieg vanuit Eversong Woods of gebruik hearthstone / andere teleports naar Silvermoon.',
        },
        way: null,
      },
    ],
  },
];

/**
 * Featured WoW addons — rendered by buildAddonsScreen() in app.js.
 * @typedef {{ nl: string, en: string }} L10n
 * @typedef {{ id: string, url: string, brand: 'curseforge'|'wago' }} AddonLink
 * @typedef {{ hex: string, nl: string, en: string }} PriorityLegendRow
 * @typedef {{ id: string, name: string, tagline: L10n, body: L10n, links: AddonLink[], video: { url: string, title: L10n }, priorityImage: string, priorityImageAlt: L10n, legend: PriorityLegendRow[], installSteps: L10n[] }} AddonEntry
 * @type {AddonEntry[]}
 */
const ADDONS_DATA = [
  {
    id: 'platynator',
    name: 'Platynator',
    tagline: {
      nl: 'Naamplaten met slimme prioriteit — visueel overzicht in combat.',
      en: 'Smart priority nameplates — a clear visual read in combat.',
    },
    body: {
      nl: 'Platynator kleurt vijandelijke nameplates op prioriteit (o.a. casters, elites, trash). Installeer via CurseForge, importeer een Wago-profiel en fine-tune in-game.',
      en: 'Platynator colors enemy nameplates by priority (including casters, elites, and filler trash). Install from CurseForge, import a Wago profile, then tweak in-game.',
    },
    links: [
      { id: 'curseforge', url: 'https://www.curseforge.com/wow/addons/platynator', brand: 'curseforge' },
      { id: 'wago', url: 'https://wago.io/ocp-SFr_Z', brand: 'wago' },
    ],
    video: {
      url: 'https://www.youtube.com/watch?v=qkqczw5Wjrw',
      title: {
        nl: 'BEST Plater & Platynator Profiles + FULL Guides',
        en: 'BEST Plater & Platynator Profiles + FULL Guides',
      },
    },
    priorityImage: 'assets/addons/platynator-prio-list.png',
    priorityImageAlt: {
      nl: 'Sneloverzicht: Platynator nameplate-kleuren en prioriteit',
      en: 'Quick reference: Platynator nameplate colors and priority',
    },
    legend: [
      { hex: '#1e40af', nl: 'Blauw — Boss (hoogste prioriteit)', en: 'Blue — Boss (highest priority)' },
      { hex: '#7c3aed', nl: 'Paars — Hoge prioriteit mob', en: 'Purple — High-priority mob' },
      { hex: '#db2777', nl: 'Roze — Caster', en: 'Pink — Caster' },
      { hex: '#06b6d4', nl: 'Cyaan — Reguliere / minder belangrijke mob', en: 'Cyan — Regular / lower-priority mob' },
      { hex: '#6b7280', nl: 'Grijs — Non-elite (laagste prioriteit)', en: 'Grey — Non-elite (lowest priority)' },
    ],
    installSteps: [
      {
        nl: 'Open CurseForge (app of website) en zoek “Platynator”, of gebruik de knop hieronder.',
        en: 'Open the CurseForge app or site and search for “Platynator”, or use the button below.',
      },
      {
        nl: 'Installeer de addon en herstart WoW volledig.',
        en: 'Install the addon and restart WoW completely.',
      },
      {
        nl: 'Open het Wago-profiel en volg de instructies voor de export-string (Plater / Platynator).',
        en: 'Open the Wago profile and follow the export-string instructions (Plater / Platynator).',
      },
      {
        nl: 'Bekijk de video voor profielkeuze en tips; pas kleuren in-game aan je rol aan.',
        en: 'Watch the video for profile picks and tips; adjust colors in-game to your role.',
      },
    ],
  },
];

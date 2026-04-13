/**
 * Featured WoW addons — rendered by buildAddonsScreen() in app.js.
 * @typedef {{ nl: string, en: string }} L10n
 * @typedef {{ id: string, url: string, brand: 'curseforge'|'wago' }} AddonLink
 * @typedef {{ hex: string, nl: string, en: string }} PriorityLegendRow
 * @typedef {{ color: string, label_en: string, label_nl: string, desc_en: string, desc_nl: string }} ColorLegendRow
 * @typedef {{ nl: string, en: string, ctaBrand?: 'curseforge'|'wago' }} InstallStep
 * @typedef {{ id: string, author: string, title: L10n, hint: L10n, windowKey: string }} ProfileImport
 * @typedef {{ id: string, name: string, tagline: L10n, body: L10n, links: AddonLink[], video: { url: string, title: L10n }, priorityImage: string, priorityImageAlt: L10n, legend?: PriorityLegendRow[], colorLegend?: ColorLegendRow[], installSteps: InstallStep[], profileImports?: ProfileImport[] }} AddonEntry
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
    profileImports: [
      {
        id: 'inchy',
        author: 'Inchy',
        title: {
          nl: 'Profiel-import — Inchy (Midnight Guide)',
          en: 'Profile import — Inchy (Midnight Guide)',
        },
        hint: {
          nl: 'Kopieer de volledige string en plak in Platynator (import). Werkt zoals de 📋 /way-knoppen elders in de app.',
          en: 'Copy the full string and paste into Platynator (import). Works like the 📋 /way copy buttons elsewhere in the app.',
        },
        windowKey: 'PLATYNATOR_EXPORT_INCHY',
      },
    ],
    video: {
      url: 'https://www.youtube.com/watch?v=qkqczw5Wjrw',
      title: {
        nl: 'BEST Plater & Platynator Profiles + FULL Guides',
        en: 'BEST Plater & Platynator Profiles + FULL Guides',
      },
    },
    priorityImage: 'assets/addons/platy-prio-list.jpg',
    priorityImageAlt: {
      nl: 'Platy prio list: Platynator nameplate-kleuren en prioriteit',
      en: 'Platy prio list: Platynator nameplate colors and priority',
    },
    colorLegend: [
      {
        color: '#0000FF',
        label_en: 'Bosses',
        label_nl: 'Bazen',
        desc_en: 'Focus target, use CDs.',
        desc_nl: 'Focus target, gebruik cooldowns.',
      },
      {
        color: '#A020F0',
        label_en: 'High Priority',
        label_nl: 'Hoge Prioriteit',
        desc_en: 'Kill ASAP.',
        desc_nl: 'Moet direct dood.',
      },
      {
        color: '#FF00FF',
        label_en: 'Caster',
        label_nl: 'Caster Mob',
        desc_en: 'Interrupt required.',
        desc_nl: 'Interrupt vereist.',
      },
      {
        color: '#00FF00',
        label_en: 'Stun/CC',
        label_nl: 'Stun/CC Mob',
        desc_en: 'Use Stuns/Disrupts (Green frame).',
        desc_nl: 'Gebruik Stuns/CC (Groen kader).',
      },
      {
        color: '#00FFFF',
        label_en: 'Regular',
        label_nl: 'Normale Mob',
        desc_en: 'Less important.',
        desc_nl: 'Minder belangrijk.',
      },
      {
        color: '#808080',
        label_en: 'Non-Elite',
        label_nl: 'Niet-Elite',
        desc_en: 'Low priority.',
        desc_nl: 'Lage prioriteit.',
      },
    ],
    installSteps: [
      {
        nl: 'Open CurseForge (app of website) en zoek “Platynator”.',
        en: 'Open the CurseForge app or site and search for “Platynator”.',
        ctaBrand: 'curseforge',
      },
      {
        nl: 'Installeer de addon en herstart WoW volledig.',
        en: 'Install the addon and restart WoW completely.',
      },
      {
        nl: 'Importeer het profiel via de export-string (Plater / Platynator).',
        en: 'Import the profile using the export string (Plater / Platynator).',
        ctaBrand: 'wago',
      },
      {
        nl: 'Bekijk de video voor profielkeuze en tips; pas kleuren in-game aan je rol aan.',
        en: 'Watch the video for profile picks and tips; adjust colors in-game to your role.',
      },
    ],
  },
];

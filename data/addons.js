/**
 * Featured WoW addons — rendered by buildAddonsScreen() in app.js.
 * @typedef {{ nl: string, en: string }} L10n
 * @typedef {{ id: string, url: string, brand: 'curseforge'|'wago'|'fork'|'zip' }} AddonLink
 * @typedef {{ hex: string, nl: string, en: string }} PriorityLegendRow
 * @typedef {{ color: string, label_en: string, label_nl: string, desc_en: string, desc_nl: string }} ColorLegendRow
 * @typedef {{ nl: string, en: string, ctaBrand?: 'curseforge'|'wago'|'fork'|'zip' }} InstallStep
 * @typedef {{ id: string, author: string, title: L10n, hint: L10n, windowKey: string }} ProfileImport
 * @typedef {{ src: string, alt: L10n }} ListPreviewShot
 * @typedef {{ caption?: L10n, shots: ListPreviewShot[] }} ListPreview
 * @typedef {{ src: string, alt: L10n, caption?: L10n }} InstallExample
 * @typedef {{ nl: string, en: string }} InstallTroubleshootItem
 * @typedef {{
 *   id: string,
 *   name: string,
 *   cardIcon?: string,
 *   tagline: L10n,
 *   body: L10n,
 *   links: AddonLink[],
 *   video?: { url: string, title: L10n },
 *   priorityImage?: string,
 *   priorityImageAlt?: L10n,
 *   legend?: PriorityLegendRow[],
 *   colorLegend?: ColorLegendRow[],
 *   chatCommand?: string,
 *   listPreview?: ListPreview,
 *   installSteps: InstallStep[],
 *   forkUrl?: string,
 *   installPath?: string,
 *   installNotes?: L10n,
 *   installExample?: InstallExample,
 *   installTroubleshooting?: InstallTroubleshootItem[],
 *   profileImports?: ProfileImport[]
 * }} AddonEntry
 * @typedef {{ id: string, title: L10n, addons: AddonEntry[] }} AddonSection
 * @type {AddonSection[]}
 */
const ADDONS_SECTIONS = [
  {
    id: 'combat_ui',
    title: { nl: 'Combat & UI', en: 'Combat & UI' },
    addons: [
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
    ],
  },
  {
    id: 'profession_helpers',
    title: { nl: 'Profession helpers', en: 'Profession Helpers' },
    addons: [
      {
        id: 'midnight-profession-tracker',
        cardIcon: '📊',
        name: 'Midnight Profession Tracker',
        tagline: {
          en: 'Midnight Profession Tracker (The Progress Bar)',
          nl: 'Midnight Profession Tracker (De Voortgangsbalk)',
        },
        body: {
          en: 'Midnight Profession Tracker shows a persistent list/bar of all missing one-time treasures and weekly knowledge sources. Essential for maxing out Tailoring and Enchanting.',
          nl: 'Midnight Profession Tracker toont een handige lijst/balk met alle ontbrekende eenmalige schatten en wekelijkse knowledge bronnen. Essentieel voor het maxen van Tailoring en Enchanting.',
        },
        links: [
          {
            id: 'curseforge',
            url: 'https://www.curseforge.com/wow/addons/midnight-profession-tracker',
            brand: 'curseforge',
          },
          {
            id: 'fork',
            url: 'https://github.com/Huijting/MidnightProfessionTracker',
            brand: 'fork',
          },
          {
            id: 'zip',
            url: 'https://github.com/Huijting/MidnightProfessionTracker/archive/refs/heads/main.zip',
            brand: 'zip',
          },
        ],
        forkUrl: 'https://github.com/Huijting/MidnightProfessionTracker',
        chatCommand: '/mpt',
        listPreview: {
          caption: {
            en: 'How the tracker looks in-game: text list with header, profession progress (green), and each missing treasure (magenta) + zone (white) + waypoint line (yellow).',
            nl: 'Zo ziet de tracker in-game uit: tekstlijst met kop, professie-voortgang (groen), en per missende schat (magenta) + zone (wit) + waypointregel (geel).',
          },
          shots: [
            {
              src: 'assets/addons/mpt-alchemy-preview.png',
              alt: {
                en: 'Midnight Profession Tracker — Alchemy treasures list (0/8)',
                nl: 'Midnight Profession Tracker — Alchemy-schattenlijst (0/8)',
              },
            },
            {
              src: 'assets/addons/mpt-herbalism-preview.png',
              alt: {
                en: 'Midnight Profession Tracker — Herbalism treasures list (0/8)',
                nl: 'Midnight Profession Tracker — Herbalism-schattenlijst (0/8)',
              },
            },
          ],
        },
        installSteps: [
          {
            nl: 'Download de addon als ZIP-bestand.',
            en: 'Download the addon as a ZIP file.',
            ctaBrand: 'zip',
          },
          {
            nl: 'Pak het ZIP-bestand uit in je AddOns-map.',
            en: 'Extract the ZIP file into your AddOns folder.',
          },
          {
            nl: "Belangrijk: Zorg dat de mapnaam in je AddOns-map exact 'MidnightProfTracker' is. Als je van GitHub downloadt, hernoem de map dan om achtervoegsels zoals '-main' te verwijderen.",
            en: "Important: Ensure the folder name in your AddOns directory is exactly 'MidnightProfTracker'. If you download from GitHub, rename the folder to remove any '-main' suffixes.",
          },
          {
            nl: "Checklist: Heb je gecontroleerd dat de map echt 'MidnightProfTracker' heet? Zo niet, hernoem eerst voordat je WoW start.",
            en: "Checklist: Did you verify the folder is named exactly 'MidnightProfTracker'? If not, rename it before launching WoW.",
          },
          {
            nl: 'Fallback: gebruik de GitHub-pagina als de ZIP-link niet werkt.',
            en: 'Fallback: use the GitHub page if the ZIP link does not work.',
            ctaBrand: 'fork',
          },
          {
            nl: 'Herstart WoW en gebruik /mpt om de tracker te openen.',
            en: 'Restart WoW and use /mpt to open the tracker.',
          },
        ],
        installPath: 'World of Warcraft\\_retail_\\Interface\\AddOns\\MidnightProfTracker\\',
        installNotes: {
          nl: 'Dit is de enhanced community-versie met visual guides.',
          en: 'This is the enhanced community version with visual guides.',
        },
        installExample: {
          src: 'assets/addons/mpt-install-zip-example.png',
          alt: {
            nl: 'Voorbeeld van de Midnight Profession Tracker in-game lijstweergave',
            en: 'Example of the Midnight Profession Tracker in-game list view',
          },
          caption: {
            nl: 'Voorbeeld: zo ziet de lijst er in-game uit nadat je correct hebt geinstalleerd.',
            en: 'Example: this is how the list looks in-game after a correct install.',
          },
        },
        installTroubleshooting: [
          {
            nl: 'Addon niet zichtbaar in WoW? Controleer eerst of de map echt in Interface/AddOns staat en niet een niveau te diep.',
            en: 'Addon not visible in WoW? First check that the folder is directly inside Interface/AddOns and not nested one level too deep.',
          },
          {
            nl: "Mapnaam fout? De map moet exact 'MidnightProfTracker' heten (niet met -main of extra tekst).",
            en: "Wrong folder name? The folder must be exactly 'MidnightProfTracker' (no -main suffix or extra text).",
          },
          {
            nl: "Verkeerde mapdiepte? Vermijd structuren zoals 'MidnightProfTracker-main/MidnightProfTracker' in AddOns.",
            en: "Wrong folder depth? Avoid structures like 'MidnightProfTracker-main/MidnightProfTracker' inside AddOns.",
          },
        ],
      },
    ],
  },
];

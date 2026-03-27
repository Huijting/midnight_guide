// Prey System — WoW: Midnight
// Mechanics: Icy Veins Prey System / Prey Rewards guides. Unlock NPC: Wowhead (e.g. npc=258221 Astalor Bloodsworn / Magister Astalor Bloodsworn Silvermoon).

const PREY_DATA = {
  // Unlock — Magister Astalor Bloodsworn, Murder Row (Wowhead + Icy Veins)
  unlock: {
    level: 90,
    npc: 'Magister Astalor Bloodsworn',
    zone: 'Murder Row, Silvermoon City',
    way: '/way #2393 55.0 63.4 Magister Astalor Bloodsworn',
    questlineEnd: 'To the Sanctum!',
    unlockLabel: { en: '1. Unlock:', nl: '1. Unlock:'},
    reachSpeak: { en: 'Reach level 90. Speak to', nl: 'Bereik level 90. Praat met'},
    completeQuest: { en: 'Complete the intro questline ending with', nl: 'Voltooi de intro-questlijn die eindigt met'},
    toUnlock: { en: 'to unlock the Hunt Table.', nl: 'om de Hunt Table te ontgrendelen.'},
  },
  gameplayLoopLabel: { en: 'Gameplay loop', nl: 'Gameplay loop'},

  // i18n intro strings
  intro: {
    en: "Hunt the powerful NPCs across Silvermoon's outskirts.",
    nl: "Jaag op sterke NPCs aan de rand van Silvermoon."
  },

  // Gameplay loop steps
  loop: {
    en: [
      { step: 'Select Contract', text: 'Pick a target at the Hunt Table in Astalor\'s Sanctum.' },
      { step: 'Gather Anguish', text: 'Fill the progress bar in the target\'s zone by doing World Quests, killing Rares, or finding Treasures.' },
      { step: 'Ambush Phase', text: 'The target will randomly ambush you. Fight it until it retreats (usually at 50% HP).' },
      { step: 'The Final Hunt', text: 'Once the bar is 100%, use the Charged Anguish Crystal on your UI to reveal the boss\'s lair for a final 1v1 duel.' },
    ],
    nl: [
      { step: 'Select Contract', text: 'Kies een target bij de Hunt Table in Astalor\'s Sanctum.' },
      { step: 'Gather Anguish', text: 'Vul de progress bar in de zone met World Quests, Rares doden of Treasures vinden.' },
      { step: 'Ambush Phase', text: 'Het target valt je willekeurig aan. Vecht tot het terugtrekt (meestal bij 50% HP).' },
      { step: 'The Final Hunt', text: 'Bij 100% bar: gebruik de Charged Anguish Crystal in je UI om de boss lair te onthullen voor een 1v1 duel.' },
    ]
  },

  // Difficulties & Affixes
  difficulties: {
    normal: {
      en: { name: 'Normal', desc: 'Contract loot iLvl 220 (Icy Veins Prey table, Midnight S1). Great Vault World can be higher.', unlock: 'Default from first unlock.' },
      nl: { name: 'Normal', desc: 'Contract loot iLvl 220 (Icy Veins Prey table, Midnight S1). Great Vault World kan hoger zijn.', unlock: 'Standaard na unlock.' }
    },
    hard: {
      en: { name: 'Hard', desc: 'Unlocked after your first Normal hunt. Adds "Torments" (zone-wide debuffs). Heroic-tier contract loot iLvl 233 (Icy Veins).', unlock: 'After 1 Normal hunt.' },
      nl: { name: 'Hard', desc: 'Na je eerste Normal Hunt. Voegt Torments toe. Heroic contract loot iLvl 233 (Icy Veins).', unlock: 'Na 1 Normal Hunt.' }
    },
    nightmare: {
      en: { name: 'Nightmare', desc: 'Solo only. Deadly affixes. Contract loot iLvl 246; Great Vault Hero track up to 259 (Icy Veins).', unlock: 'Solo only.' },
      nl: { name: 'Nightmare', desc: 'Alleen solo. Dodelijke affixes. Contract loot iLvl 246; Great Vault Hero track tot 259 (Icy Veins).', unlock: 'Alleen solo.' }
    },
  },

  // Nightmare affixes — kid-friendly (12yo level)
  nightmareAffixes: {
    bloody_command: {
      en: { name: 'Bloody Command', explain: 'Astalor wants blood! Kill a critter or enemy quickly to stay alive.' },
      nl: { name: 'Bloody Command', explain: 'Astalor wil bloed! Dood snel een beestje of vijand om te overleven.' }
    },
    echo_of_predation: {
      en: { name: 'Echo of Predation', explain: 'A ghost is following you. Don\'t let it touch you!' },
      nl: { name: 'Echo of Predation', explain: 'Een geest volgt je. Laat hem je niet raken!' }
    },
  },

  // Rewards section
  rewards: {
    en: {
      adventurer: 'Normal contracts — iLvl 220 (Icy Veins)',
      veteran: 'Hard (Heroic) — iLvl 233 with Torments',
      champion: 'Nightmare — iLvl 246; weekly world boss / apex Mythic track 289',
      weeklyTip: 'The first 2 Hunts per week give the best gear rewards.',
      greatVault: 'Prey contributes to the Great Vault <strong>World</strong> category.',
      anguishFills: 'fills your bar',
      dawncrestsUpgrade: 'upgrade gear',
      worldBossNote: '<strong>World boss / apex predator</strong> (weekly, not a Hunt contract): iLvl 289 (Mythic track).',
    },
    nl: {
      adventurer: 'Normal contracts — iLvl 220 (Icy Veins)',
      veteran: 'Hard (Heroic) — iLvl 233 met Torments',
      champion: 'Nightmare — iLvl 246; weekly World Boss / apex Mythic track 289',
      weeklyTip: 'De eerste 2 Hunts per week geven de beste gear rewards.',
      greatVault: 'Prey telt mee voor de Great Vault <strong>World</strong> category.',
      anguishFills: 'vult je bar',
      dawncrestsUpgrade: 'upgrade gear',
      worldBossNote: '<strong>World Boss / apex predator</strong> (weekly, geen Hunt contract): iLvl 289 (Mythic track).',
    }
  },

  // Tooltips — technical terms kept in English, explanations translated
  tooltips: {
    anguish: { term: 'Anguish', explain: { en: 'Progress currency gathered in the zone. Fills your bar toward the Final Hunt.', nl: 'Progress currency in de zone. Vult je bar richting de Final Hunt.'} },
    dawncrests: { term: 'Dawncrests', explain: { en: 'Upgrade crests used to improve gear (part of the upgrade system).', nl: 'Upgrade crests om gear te verbeteren (deel van het upgrade system).'} },
    veteran_track: { term: 'Veteran Track', explain: { en: 'Mid-tier gear that upgrades with Veteran Crests.', nl: 'Mid-tier gear — upgrade met Veteran Crests.'} },
    champion_track: { term: 'Champion Track', explain: { en: 'Top-tier gear that upgrades with Champion Crests.', nl: 'Top-tier gear — upgrade met Champion Crests.'} },
    charged_anguish_crystal: { term: 'Charged Anguish Crystal', explain: { en: 'UI item used at 100% bar to reveal the boss lair location.', nl: 'UI item bij 100% bar om de boss lair te onthullen.'} },
  },

  // Prey targets are in data/preyTargets.js (PREY_TARGETS)
};

// Prey System — WoW: Midnight
// Verified mechanics: Icy Veins, Wowhead, NextTier

const PREY_DATA = {
  // Unlock — Magister Astalor Bloodsworn, Murder Row
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
  gameplayLoopLabel: { en: 'Gameplay loop', nl: 'Spelloop'},

  // i18n intro strings
  intro: {
    en: "Hunt the powerful NPCs across Silvermoon's outskirts.",
    nl: "Jaag op sterke vijanden rondom Silvermoon."
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
      { step: 'Contract kiezen', text: 'Kies een doelwit bij de Hunt Table in Astalors Sanctum.' },
      { step: 'Anguish verzamelen', text: 'Vul de voortgangsbalk in de zone door World Quests te doen, Rares te doden of Schatten te vinden.' },
      { step: 'Hinderlaag-fase', text: 'Het doelwit valt je willekeurig aan. Vecht tot het terugtrekt (meestal bij 50% HP).' },
      { step: 'De finale jacht', text: 'Bij 100% balk: gebruik de Charged Anguish Crystal in je UI om de boss-locatie te onthullen voor een 1v1 duel.' },
    ]
  },

  // Difficulties & Affixes
  difficulties: {
    normal: {
      en: { name: 'Normal', desc: 'Basic intro, rewards Adventurer / world-track gear (~226+ ilvl, Midnight S1).', unlock: 'Default from first unlock.' },
      nl: { name: 'Normal', desc: 'Basis intro, Adventurer/world-track gear (~226+ iLvl, Midnight S1).', unlock: 'Standaard na unlock.' }
    },
    hard: {
      en: { name: 'Hard', desc: 'Unlocked after your first Normal hunt. Adds "Torments" (zone-wide debuffs). Rewards Veteran / Hero track gear (~233–259+ ilvl, Midnight S1).', unlock: 'After 1 Normal hunt.' },
      nl: { name: 'Hard', desc: 'Ontgrendeld na je eerste Normal hunt. Voegt "Torments" toe. Beloningen Veteran/Hero-track (~233–259+ iLvl, Midnight S1).', unlock: 'Na 1 Normal hunt.' }
    },
    nightmare: {
      en: { name: 'Nightmare', desc: 'New in Season 1. Solo only. Adds deadly affixes. Rewards Champion Gear.', unlock: 'Solo only.' },
      nl: { name: 'Nightmare', desc: 'Nieuw in Seizoen 1. Alleen solo. Voegt dodelijke affixes toe. Beloningen Champion Gear.', unlock: 'Alleen solo.' }
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
      adventurer: 'Adventurer gear (Normal)',
      veteran: 'Veteran / Hero track — from ~233 ilvl upward on Hard (Midnight S1)',
      champion: 'Champion track — ~246+ toward ~272 on Nightmare',
      weeklyTip: 'The first 2 Hunts per week give the best gear rewards (Veteran/Champion track).',
      greatVault: 'Prey contributes to the Great Vault <strong>World</strong> category.',
      anguishFills: 'fills your bar',
      dawncrestsUpgrade: 'upgrade gear',
    },
    nl: {
      adventurer: 'Adventurer gear (Normal)',
      veteran: 'Veteran/Hero-track — vanaf ~233 iLvl op Hard (Midnight S1)',
      champion: 'Champion-track — ~246+ richting ~272 op Nightmare',
      weeklyTip: 'De eerste 2 Hunts per week geven de beste gear beloningen (Veteran/Champion track).',
      greatVault: 'Prey telt mee voor de Great Vault <strong>World</strong> categorie.',
      anguishFills: 'vult je balk',
      dawncrestsUpgrade: 'upgraden gear',
    }
  },

  // Tooltips — technical terms kept in English, explanations translated
  tooltips: {
    anguish: { term: 'Anguish', explain: { en: 'Progress currency gathered in the zone. Fills your bar toward the Final Hunt.', nl: 'Voortgangsvaluta in de zone. Vult je balk richting de Final Hunt.'} },
    dawncrests: { term: 'Dawncrests', explain: { en: 'Upgrade crests used to improve gear (part of the upgrade system).', nl: 'Upgrade-crests om gear te verbeteren (deel van het upgradesysteem).'} },
    veteran_track: { term: 'Veteran Track', explain: { en: 'Mid-tier gear that upgrades with Veteran Crests.', nl: 'Mid-tier gear dat upgradet met Veteran Crests.'} },
    champion_track: { term: 'Champion Track', explain: { en: 'Top-tier gear that upgrades with Champion Crests.', nl: 'Top-tier gear dat upgradet met Champion Crests.'} },
    charged_anguish_crystal: { term: 'Charged Anguish Crystal', explain: { en: 'UI item used at 100% bar to reveal the boss lair location.', nl: 'UI-item bij 100% balk om de boss-locatie te onthullen.'} },
  },

  // Prey targets are in data/preyTargets.js (PREY_TARGETS)
};

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
    unlockLabel: { en: '1. Unlock:', nl: '1. Unlock:', da: '1. Unlock:' },
    reachSpeak: { en: 'Reach level 90. Speak to', nl: 'Bereik level 90. Praat met', da: 'Nå niveau 90. Tal med' },
    completeQuest: { en: 'Complete the intro questline ending with', nl: 'Voltooi de intro-questlijn die eindigt met', da: 'Fuldfør intro-questlinjen der slutter med' },
    toUnlock: { en: 'to unlock the Hunt Table.', nl: 'om de Hunt Table te ontgrendelen.', da: 'for at låse Hunt Table op.' },
  },
  gameplayLoopLabel: { en: 'Gameplay loop', nl: 'Spelloop', da: 'Spillemekanik' },

  // i18n intro strings
  intro: {
    en: "Hunt the powerful NPCs across Silvermoon's outskirts.",
    nl: "Jaag op sterke vijanden rondom Silvermoon.",
    da: "Jagt de mægtige monstre uden for Silvermoon.",
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
    ],
    da: [
      { step: 'Vælg kontrakt', text: 'Vælg et mål ved Hunt Table i Astalors Sanctum.' },
      { step: 'Saml Anguish', text: 'Fyld fremskridtsbjælken i zonen ved World Quests, Rare-mobs eller Skatte.' },
      { step: 'Bagholds-fase', text: 'Målet overfalder dig tilfældigt. Kæmp til det trækker sig tilbage (normalt ved 50% HP).' },
      { step: 'Den sidste jagt', text: 'Ved 100% balk: brug Charged Anguish Crystal i din UI for at afsløre bossens lejested til et 1v1 duel.' },
    ],
  },

  // Difficulties & Affixes
  difficulties: {
    normal: {
      en: { name: 'Normal', desc: 'Basic intro, rewards Adventurer gear.', unlock: 'Default from first unlock.' },
      nl: { name: 'Normal', desc: 'Basis intro, beloningen Adventurer gear.', unlock: 'Standaard na unlock.' },
      da: { name: 'Normal', desc: 'Grundlæggende intro, belønninger Adventurer gear.', unlock: 'Standard efter unlock.' },
    },
    hard: {
      en: { name: 'Hard', desc: 'Unlocked after your first Normal hunt. Adds "Torments" (zone-wide debuffs). Rewards Veteran Gear (iLevel 233+).', unlock: 'After 1 Normal hunt.' },
      nl: { name: 'Hard', desc: 'Ontgrendeld na je eerste Normal hunt. Voegt "Torments" toe (zone-brede debuffs). Beloningen Veteran Gear (iLevel 233+).', unlock: 'Na 1 Normal hunt.' },
      da: { name: 'Hard', desc: 'Låses op efter din første Normal-jagt. Tilføjer "Torments" (zone-brede debuffs). Belønninger Veteran Gear (iLvl 233+).', unlock: 'Efter 1 Normal-jagt.' },
    },
    nightmare: {
      en: { name: 'Nightmare', desc: 'New in Season 1. Solo only. Adds deadly affixes. Rewards Champion Gear.', unlock: 'Solo only.' },
      nl: { name: 'Nightmare', desc: 'Nieuw in Seizoen 1. Alleen solo. Voegt dodelijke affixes toe. Beloningen Champion Gear.', unlock: 'Alleen solo.' },
      da: { name: 'Nightmare', desc: 'Ny i Sæson 1. Kun solo. Tilføjer dødelige affixes. Belønninger Champion Gear.', unlock: 'Kun solo.' },
    },
  },

  // Nightmare affixes — kid-friendly (12yo level)
  nightmareAffixes: {
    bloody_command: {
      en: { name: 'Bloody Command', explain: 'Astalor wants blood! Kill a critter or enemy quickly to stay alive.' },
      nl: { name: 'Bloody Command', explain: 'Astalor wil bloed! Dood snel een beestje of vijand om te overleven.' },
      da: { name: 'Bloody Command', explain: 'Astalor vil have blod! Dræb et dyr eller fjende hurtigt for at overleve.' },
    },
    echo_of_predation: {
      en: { name: 'Echo of Predation', explain: 'A ghost is following you. Don\'t let it touch you!' },
      nl: { name: 'Echo of Predation', explain: 'Een geest volgt je. Laat hem je niet raken!' },
      da: { name: 'Echo of Predation', explain: 'En spøgelse følger dig. Lad det ikke røre dig!' },
    },
  },

  // Rewards section
  rewards: {
    en: {
      adventurer: 'Adventurer gear (Normal)',
      veteran: 'Veteran Gear — iLevel 233+ (Hard)',
      champion: 'Champion Gear (Nightmare)',
      weeklyTip: 'The first 2 Hunts per week give the best gear rewards (Veteran/Champion track).',
      greatVault: 'Prey contributes to the Great Vault <strong>World</strong> category.',
      anguishFills: 'fills your bar',
      dawncrestsUpgrade: 'upgrade gear',
    },
    nl: {
      adventurer: 'Adventurer gear (Normal)',
      veteran: 'Veteran Gear — iLevel 233+ (Hard)',
      champion: 'Champion Gear (Nightmare)',
      weeklyTip: 'De eerste 2 Hunts per week geven de beste gear beloningen (Veteran/Champion track).',
      greatVault: 'Prey telt mee voor de Great Vault <strong>World</strong> categorie.',
      anguishFills: 'vult je balk',
      dawncrestsUpgrade: 'upgraden gear',
    },
    da: {
      adventurer: 'Adventurer gear (Normal)',
      veteran: 'Veteran Gear — iLvl 233+ (Hard)',
      champion: 'Champion Gear (Nightmare)',
      weeklyTip: 'De første 2 Hunts om ugen giver de bedste gear-belønninger (Veteran/Champion track).',
      greatVault: 'Prey bidrager til Great Vault <strong>World</strong> kategorien.',
      anguishFills: 'fylder din bjælke',
      dawncrestsUpgrade: 'opgraderer gear',
    },
  },

  // Tooltips — technical terms kept in English, explanations translated
  tooltips: {
    anguish: { term: 'Anguish', explain: { en: 'Progress currency gathered in the zone. Fills your bar toward the Final Hunt.', nl: 'Voortgangsvaluta in de zone. Vult je balk richting de Final Hunt.', da: 'Fremskridtsvaluta samlet i zonen. Fylder din bjælke mod Final Hunt.' } },
    dawncrests: { term: 'Dawncrests', explain: { en: 'Upgrade crests used to improve gear (part of the upgrade system).', nl: 'Upgrade-crests om gear te verbeteren (deel van het upgradesysteem).', da: 'Upgrade-crests til at forbedre gear (del af upgradesystemet).' } },
    veteran_track: { term: 'Veteran Track', explain: { en: 'Mid-tier gear that upgrades with Veteran Crests.', nl: 'Mid-tier gear dat upgradet met Veteran Crests.', da: 'Mid-tier gear der opgraderes med Veteran Crests.' } },
    champion_track: { term: 'Champion Track', explain: { en: 'Top-tier gear that upgrades with Champion Crests.', nl: 'Top-tier gear dat upgradet met Champion Crests.', da: 'Top-tier gear der opgraderes med Champion Crests.' } },
    charged_anguish_crystal: { term: 'Charged Anguish Crystal', explain: { en: 'UI item used at 100% bar to reveal the boss lair location.', nl: 'UI-item bij 100% balk om de boss-locatie te onthullen.', da: 'UI-element ved 100% bjælke for at afsløre bossens lejested.' } },
  },

  // Prey targets are in data/preyTargets.js (PREY_TARGETS)
};

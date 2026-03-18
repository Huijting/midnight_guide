if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_ASSASSINATION_ROGUE = {
  id: 'assassination_rogue',
  icon: '🗡️',
  class: 'Rogue',
  spec:   { nl: 'Assassination', en: 'Assassination', da: 'Assassination' },
  role:   'melee',
  armor:  'Leather',
  weapon: { nl: 'Twee dolken (dual wield)', en: 'Two daggers (dual wield)', da: 'To dolke (dual wield)' },
  resource: 'Energy + Combo Points',
  patch: '1.0',
  color: '#FFF468',

  summary: {
    nl: 'Assassination Rogue is de meester van giften en DoTs. Verg vijanden langzaam met Rupture en Garrote terwijl gifstapels oplopen. Uitstekende sustained multi-target schade.',
    en: 'Assassination Rogue is the master of poisons and DoTs. Bleed enemies slowly with Rupture and Garrote while poison stacks build up. Excellent sustained multi-target damage.',
    da: 'Assassination Rogue er mester i gifte og DoTs. Blød fjender langsomt med Rupture og Garrote mens giftstakker opbygges. Fremragende vedvarende multi-target skade.',
  },
  pros: {
    nl: ['Uitstekende sustained schade via DoTs', 'Sterk op meerdere targets (Crimson Tempest)', 'Goede survivability via Crimson Vial', 'Stealth utility voor skips in M+'],
    en: ['Excellent sustained damage via DoTs', 'Strong on multiple targets (Crimson Tempest)', 'Good survivability via Crimson Vial', 'Stealth utility for skips in M+'],
    da: ['Fremragende vedvarende skade via DoTs', 'Stærk på flere mål (Crimson Tempest)', 'God overlevelse via Crimson Vial', 'Stealth utility til spring i M+'],
  },
  cons: {
    nl: ['Complex DoT management', 'Lage burst zonder Vendetta', 'Energy management vereist disciplin'],
    en: ['Complex DoT management', 'Low burst without Vendetta', 'Energy management requires discipline'],
    da: ['Kompleks DoT-styring', 'Lav burst uden Vendetta', 'Energy-styring kræver disciplin'],
  },

  cheatsheet: {
    nl: {
      opener: '(Stealth) Garrote → Mutilate x2 → Rupture (4+ CPs) → Vendetta → Envenom spam',
      single: 'Garrote + Rupture actief → Mutilate voor CPs → Envenom (5 CPs) → Vendetta op CD',
      aoe:    'Garrote op targets → Crimson Tempest (5 CPs, 3+ targets) → Fan of Knives spam',
      rules: [
        'Garrote en Rupture altijd actief — nooit verlopen',
        'Envenom bij 5 CPs en Rupture actief',
        'Vendetta altijd op cooldown — verhoogt alles',
        'Crimson Tempest bij 3+ targets als Rupture vervanging',
        'Mutilate alleen als beidedolken Deadly Poison hebben',
      ],
    },
    en: {
      opener: '(Stealth) Garrote → Mutilate x2 → Rupture (4+ CPs) → Vendetta → Envenom spam',
      single: 'Garrote + Rupture active → Mutilate for CPs → Envenom (5 CPs) → Vendetta on CD',
      aoe:    'Garrote on targets → Crimson Tempest (5 CPs, 3+ targets) → Fan of Knives spam',
      rules: [
        'Garrote and Rupture always active — never expire',
        'Envenom at 5 CPs and Rupture active',
        'Vendetta always on cooldown — amplifies everything',
        'Crimson Tempest at 3+ targets as Rupture replacement',
        'Mutilate only when both daggers have Deadly Poison',
      ],
    },
    da: {
      opener: '(Stealth) Garrote → Mutilate x2 → Rupture (4+ CPs) → Vendetta → Envenom-spam',
      single: 'Garrote + Rupture aktive → Mutilate til CPs → Envenom (5 CPs) → Vendetta på CD',
      aoe:    'Garrote på mål → Crimson Tempest (5 CPs, 3+ mål) → Fan of Knives-spam',
      rules: [
        'Garrote og Rupture altid aktive — lad dem aldrig udløbe',
        'Envenom ved 5 CPs og Rupture aktiv',
        'Vendetta altid på cooldown — forstærker alt',
        'Crimson Tempest ved 3+ mål som Rupture-erstatning',
        'Mutilate kun når begge dolke har Deadly Poison',
      ],
    },
  },

  rotation: {
    nl: {
      apex_tip: '💡 Envenom buff (na Envenom gebruik) verhoogt Gift schade. Houd de buff altijd actief voor maximale poison schade!',
      opener: [
        { spell: 'Garrote (Stealth)', why: 'Sterkste Bleed opener — extra schade uit stealth' },
        { spell: 'Mutilate x2', why: 'CPs opbouwen snel' },
        { spell: 'Rupture', why: 'Bloeding DoT — kerninkomst bron' },
        { spell: 'Vendetta', why: 'Verhoogt alle schade direct' },
        { spell: 'Envenom', why: '5 CPs — gift burst + Envenom buff' },
      ],
      single: [
        { spell: 'Garrote', why: 'Hernieuwen als <5 sec — snemmoogt in stealth' },
        { spell: 'Rupture', why: 'Hernieuwen als <5 sec — nooit verlopen' },
        { spell: 'Mutilate', why: 'Hoofd CP generator bij 2 Deadly Poison daggers' },
        { spell: 'Envenom', why: '5 CPs — houdt Envenom buff actief' },
        { spell: 'Vendetta', why: 'Altijd op CD' },
      ],
      aoe: [
        { spell: 'Fan of Knives', why: 'AoE CP generator — raakt alles rondom je' },
        { spell: 'Crimson Tempest', why: '3+ targets: AoE Rupture — verspreidt bleeding' },
        { spell: 'Garrote op targets', why: 'Extra bleed op hoog HP targets' },
        { spell: 'Envenom', why: 'Altijd bij 5 CPs — ook in AoE' },
      ],
    },
    en: {
      apex_tip: '💡 Envenom buff (after Envenom use) increases Poison damage. Always keep the buff active for maximum poison damage!',
      opener: [
        { spell: 'Garrote (Stealth)', why: 'Strongest Bleed opener — extra damage from stealth' },
        { spell: 'Mutilate x2', why: 'Quickly build CPs' },
        { spell: 'Rupture', why: 'Bleed DoT — core income source' },
        { spell: 'Vendetta', why: 'Increases all damage immediately' },
        { spell: 'Envenom', why: '5 CPs — poison burst + Envenom buff' },
      ],
      single: [
        { spell: 'Garrote', why: 'Refresh when <5 sec — preferably in stealth' },
        { spell: 'Rupture', why: 'Refresh when <5 sec — never let expire' },
        { spell: 'Mutilate', why: 'Main CP generator with 2 Deadly Poison daggers' },
        { spell: 'Envenom', why: '5 CPs — keeps Envenom buff active' },
        { spell: 'Vendetta', why: 'Always on CD' },
      ],
      aoe: [
        { spell: 'Fan of Knives', why: 'AoE CP generator — hits everything around you' },
        { spell: 'Crimson Tempest', why: '3+ targets: AoE Rupture — spreads bleeding' },
        { spell: 'Garrote on targets', why: 'Extra bleed on high HP targets' },
        { spell: 'Envenom', why: 'Always at 5 CPs — even in AoE' },
      ],
    },
    da: {
      apex_tip: '💡 Envenom-buff (efter Envenom-brug) øger Gift-skade. Hold altid buff\'en aktiv for maksimal gift-skade!',
      opener: [
        { spell: 'Garrote (Stealth)', why: 'Stærkeste Bleed opener — ekstra skade fra stealth' },
        { spell: 'Mutilate x2', why: 'Opbyg hurtigt CPs' },
        { spell: 'Rupture', why: 'Bleed DoT — kerne indkomstkilde' },
        { spell: 'Vendetta', why: 'Øger al skade straks' },
        { spell: 'Envenom', why: '5 CPs — gift-burst + Envenom-buff' },
      ],
      single: [
        { spell: 'Garrote', why: 'Forny når <5 sek — helst i stealth' },
        { spell: 'Rupture', why: 'Forny når <5 sek — lad aldrig udløbe' },
        { spell: 'Mutilate', why: 'Hoved CP-generator med 2 Deadly Poison-dolke' },
        { spell: 'Envenom', why: '5 CPs — holder Envenom-buff aktiv' },
        { spell: 'Vendetta', why: 'Altid på CD' },
      ],
      aoe: [
        { spell: 'Fan of Knives', why: 'AoE CP-generator — rammer alt omkring dig' },
        { spell: 'Crimson Tempest', why: '3+ mål: AoE Rupture — spreder blødning' },
        { spell: 'Garrote på mål', why: 'Ekstra bleed på høj HP mål' },
        { spell: 'Envenom', why: 'Altid ved 5 CPs — selv i AoE' },
      ],
    },
  },

  stats: {
    nl: {
      tip: 'Haste en Crit zijn beide sterk. Haste = meer Energy regen, Crit = grotere Envenom en Mutilate hits.',
      list: [
        { rank:1, stat:'Agility',         bars:5, note:'Primaire stat' },
        { rank:2, stat:'Critical Strike', bars:4, note:'Verhoogt Envenom en Mutilate significant' },
        { rank:3, stat:'Haste',           bars:4, note:'Meer Energy regen = meer aanvallen' },
        { rank:4, stat:'Mastery',         bars:3, note:'Verhoogt Gift en Bleed schade' },
        { rank:5, stat:'Versatility',     bars:1, note:'Laagste prioriteit' },
      ],
    },
    en: {
      tip: 'Haste and Crit are both strong. Haste = more Energy regen, Crit = bigger Envenom and Mutilate hits.',
      list: [
        { rank:1, stat:'Agility',         bars:5, note:'Primary stat' },
        { rank:2, stat:'Critical Strike', bars:4, note:'Significantly increases Envenom and Mutilate' },
        { rank:3, stat:'Haste',           bars:4, note:'More Energy regen = more attacks' },
        { rank:4, stat:'Mastery',         bars:3, note:'Increases Poison and Bleed damage' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lowest priority' },
      ],
    },
    da: {
      tip: 'Haste og Crit er begge stærke. Haste = mere Energy-regen, Crit = større Envenom og Mutilate-træf.',
      list: [
        { rank:1, stat:'Agility',         bars:5, note:'Primær stat' },
        { rank:2, stat:'Critical Strike', bars:4, note:'Øger Envenom og Mutilate markant' },
        { rank:3, stat:'Haste',           bars:4, note:'Mere Energy-regen = flere angreb' },
        { rank:4, stat:'Mastery',         bars:3, note:'Øger Gift og Bleed-skade' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lavest prioritet' },
      ],
    },
  },

  cooldowns: {
    nl: [
      { spell:'Vendetta',       cd:'2 min',  effect:'+30% schade op target 20 sec', when:'Op pull of grote pack — altijd op CD' },
      { spell:'Deathmark',      cd:'1.5 min', effect:'Verdubbelt alle DoT schade 15 sec', when:'Met Garrote en Rupture actief' },
      { spell:'Indiscriminate Carnage', cd:'45 sec', effect:'Garrote en Rupture exploderen voor AoE schade', when:'AoE pulls van 3+ targets' },
      { spell:'Crimson Vial',   cd:'30 sec', effect:'Geneest voor % HP over 4 sec', when:'Persoonlijk survival cooldown' },
      { spell:'Vanish',         cd:'2 min',  effect:'Terug in stealth — Garrote reset + Shadow Dance', when:'Garrote refresh uit stealth of Subterfuge reset' },
    ],
    en: [
      { spell:'Vendetta',       cd:'2 min',  effect:'+30% damage on target 20 sec', when:'On pull or large pack — always on CD' },
      { spell:'Deathmark',      cd:'1.5 min', effect:'Doubles all DoT damage 15 sec', when:'With Garrote and Rupture active' },
      { spell:'Indiscriminate Carnage', cd:'45 sec', effect:'Garrote and Rupture explode for AoE damage', when:'AoE pulls of 3+ targets' },
      { spell:'Crimson Vial',   cd:'30 sec', effect:'Heals for % HP over 4 sec', when:'Personal survival cooldown' },
      { spell:'Vanish',         cd:'2 min',  effect:'Back into stealth — Garrote reset + Shadow Dance', when:'Garrote refresh from stealth or Subterfuge reset' },
    ],
    da: [
      { spell:'Vendetta',       cd:'2 min',  effect:'+30% skade på mål i 20 sek', when:'På pull eller stor gruppe — altid på CD' },
      { spell:'Deathmark',      cd:'1.5 min', effect:'Fordobler al DoT-skade i 15 sek', when:'Med Garrote og Rupture aktive' },
      { spell:'Indiscriminate Carnage', cd:'45 sec', effect:'Garrote og Rupture eksploderer til AoE-skade', when:'AoE-pulls på 3+ mål' },
      { spell:'Crimson Vial',   cd:'30 sec', effect:'Healer for % HP over 4 sek', when:'Personlig overlevelsescooldown' },
      { spell:'Vanish',         cd:'2 min',  effect:'Tilbage i stealth — Garrote reset + Shadow Dance', when:'Garrote-fornyelse fra stealth eller Subterfuge-reset' },
    ],
  },

  utility: {
    nl: [
      { spell:'Shroud of Concealment', type:'Stealth', note:'Groep-stealth 15 sec — voor M+ skips' },
      { spell:'Kick',                  type:'Interrupt', note:'Snelle melee interrupt 15 sec CD' },
      { spell:'Blind',                 type:'CC',     note:'Disiables enemy 1 min — breekt op schade' },
      { spell:'Sap',                   type:'CC',     note:'Slaap humanoid/beast uit stealth' },
      { spell:'Cloak of Shadows',      type:'Defensief', note:'Verwijdert alle magische debuffs — 1 min CD' },
    ],
    en: [
      { spell:'Shroud of Concealment', type:'Stealth', note:'Group stealth 15 sec — for M+ skips' },
      { spell:'Kick',                  type:'Interrupt', note:'Fast melee interrupt 15 sec CD' },
      { spell:'Blind',                 type:'CC',     note:'Disables enemy 1 min — breaks on damage' },
      { spell:'Sap',                   type:'CC',     note:'Sleep humanoid/beast from stealth' },
      { spell:'Cloak of Shadows',      type:'Defensive', note:'Removes all magical debuffs — 1 min CD' },
    ],
    da: [
      { spell:'Shroud of Concealment', type:'Stealth', note:'Gruppe-stealth i 15 sek — til M+-spring' },
      { spell:'Kick',                  type:'Interrupt', note:'Hurtig melee interrupt 15 sek CD' },
      { spell:'Blind',                 type:'CC',     note:'Deaktiverer fjende i 1 min — brydes ved skade' },
      { spell:'Sap',                   type:'CC',     note:'Sæt humanoid/beast i søvn fra stealth' },
      { spell:'Cloak of Shadows',      type:'Defensiv', note:'Fjerner alle magiske debuffs — 1 min CD' },
    ],
  },

  tips: {
    nl: [
      { icon:'🗡️', title:'Stealth is je kracht', text:'Vanish reset je Garrote met extra schade. Gebruik Vanish niet alleen defensief — gebruik het ook offensief om een versterkte Garrote te plaatsen.' },
      { icon:'☠️', title:'DoTs = alles', text:'Garrote en Rupture zijn je brood en boter. Als één ervan niet actief is, doe je 30-40% minder schade. Zet altijd een timer addon in.' },
      { icon:'👥', title:'Shroud in M+', text:'Shroud of Concealment is de meest waardevolle Rogue utility in M+. Plan met je team welke trash packs je wilt skippen — dit kan minutes besparen.' },
      { icon:'🎯', title:'Vendetta + Deathmark combo', text:'Vendetta dan direct Deathmark. Beide actief = al je DoTs doen dubbele schade met +30% bonus. Dit is je maximale burst window.' },
      { icon:'⚡', title:'Kick is heilig', text:'Rogue heeft een van de kortste interrupt CDs. Jij bent de primaire interrupter in de groep — ken de casts en interrupt ze proactief.' },
    ],
    en: [
      { icon:'🗡️', title:'Stealth is your power', text:'Vanish resets your Garrote with extra damage. Don\'t use Vanish only defensively — also use it offensively to place an empowered Garrote.' },
      { icon:'☠️', title:'DoTs = everything', text:'Garrote and Rupture are your bread and butter. If either isn\'t active you\'re doing 30-40% less damage. Always use a timer addon.' },
      { icon:'👥', title:'Shroud in M+', text:'Shroud of Concealment is the most valuable Rogue utility in M+. Plan with your team which trash packs to skip — this can save minutes.' },
      { icon:'🎯', title:'Vendetta + Deathmark combo', text:'Vendetta then immediately Deathmark. Both active = all your DoTs deal double damage with +30% bonus. This is your maximum burst window.' },
      { icon:'⚡', title:'Kick is sacred', text:'Rogue has one of the shortest interrupt CDs. You are the primary interrupter in the group — know the casts and interrupt them proactively.' },
    ],
    da: [
      { icon:'🗡️', title:'Stealth er din styrke', text:'Vanish nulstiller din Garrote med ekstra skade. Brug ikke Vanish kun defensivt — brug det også offensivt til at placere en forstærket Garrote.' },
      { icon:'☠️', title:'DoTs = alt', text:'Garrote og Rupture er dit brød og smør. Hvis en af dem ikke er aktiv, gør du 30-40% mindre skade. Brug altid en timer-addon.' },
      { icon:'👥', title:'Shroud i M+', text:'Shroud of Concealment er den mest værdifulde Rogue utility i M+. Planlæg med dit hold, hvilke trash-grupper I vil springe over — dette kan spare minutter.' },
      { icon:'🎯', title:'Vendetta + Deathmark kombination', text:'Vendetta derefter straks Deathmark. Begge aktive = alle dine DoTs gør dobbelt skade med +30% bonus. Dette er dit maksimale burst-vindue.' },
      { icon:'⚡', title:'Kick er helligt', text:'Rogue har en af de korteste interrupt-CDs. Du er den primære interrupter i gruppen — kend castene og interrupt dem proaktivt.' },
    ],
  },

  macros: {
    nl: [
      { name:'Vendetta + Deathmark', code:'/cast Vendetta\n/cast Deathmark', note:'Maximum burst opener — beide damage CDs tegelijk.' },
      { name:'Vanish + Garrote', code:'/cast Vanish\n/cast Garrote', note:'Direct Garrote na Vanish voor versterkte stealth Garrote.' },
      { name:'Shroud groep', code:'/cast Shroud of Concealment', note:'Eén knop voor groep-stealth — communiceer van tevoren.' },
    ],
    en: [
      { name:'Vendetta + Deathmark', code:'/cast Vendetta\n/cast Deathmark', note:'Maximum burst opener — both damage CDs simultaneously.' },
      { name:'Vanish + Garrote', code:'/cast Vanish\n/cast Garrote', note:'Immediately Garrote after Vanish for empowered stealth Garrote.' },
      { name:'Shroud group', code:'/cast Shroud of Concealment', note:'One button for group stealth — communicate in advance.' },
    ],
    da: [
      { name:'Vendetta + Deathmark', code:'/cast Vendetta\n/cast Deathmark', note:'Maksimalt burst-opener — begge skade-CDs på én gang.' },
      { name:'Vanish + Garrote', code:'/cast Vanish\n/cast Garrote', note:'Straks Garrote efter Vanish til forstærket stealth Garrote.' },
      { name:'Shroud gruppe', code:'/cast Shroud of Concealment', note:'Én knap til gruppe-stealth — kommunikér på forhånd.' },
    ],
  },

  resource_info: {
    nl: {
      intro: 'Assassination gebruikt Energy (0-100) voor aanvallen en Combo Points (0-5) voor finishers. Energy regenereert automatisch.',
      generate: [
        'Mutilate — 2 CPs per gebruik',
        'Fan of Knives — 1 CP per treffer (AoE)',
        'Garrote — 1 CP + DoT',
        'Ambush (stealth) — 2 CPs extra',
      ],
      spend: [
        'Envenom (5 CPs) — single target finisher, houdt Envenom buff actief',
        'Rupture (4-5 CPs) — sterkste bleed DoT',
        'Crimson Tempest (5 CPs) — AoE Rupture bij 3+ targets',
      ],
      pet_tip: '⚠️ Gebruik Envenom nooit als Rupture of Garrote bijna verlopen — hernieuwen heeft altijd prioriteit!',
      pets: [],
    },
    en: {
      intro: 'Assassination uses Energy (0-100) for attacks and Combo Points (0-5) for finishers. Energy regenerates automatically.',
      generate: [
        'Mutilate — 2 CPs per use',
        'Fan of Knives — 1 CP per hit (AoE)',
        'Garrote — 1 CP + DoT',
        'Ambush (stealth) — 2 extra CPs',
      ],
      spend: [
        'Envenom (5 CPs) — single target finisher, keeps Envenom buff active',
        'Rupture (4-5 CPs) — strongest bleed DoT',
        'Crimson Tempest (5 CPs) — AoE Rupture at 3+ targets',
      ],
      pet_tip: '⚠️ Never use Envenom when Rupture or Garrote is about to expire — refreshing always has priority!',
      pets: [],
    },
    da: {
      intro: 'Assassination bruger Energy (0-100) til angreb og Combo Points (0-5) til finishers. Energy regenererer automatisk.',
      generate: [
        'Mutilate — 2 CPs per brug',
        'Fan of Knives — 1 CP per træf (AoE)',
        'Garrote — 1 CP + DoT',
        'Ambush (stealth) — 2 ekstra CPs',
      ],
      spend: [
        'Envenom (5 CPs) — single target finisher, holder Envenom-buff aktiv',
        'Rupture (4-5 CPs) — stærkeste bleed DoT',
        'Crimson Tempest (5 CPs) — AoE Rupture ved 3+ mål',
      ],
      pet_tip: '⚠️ Brug aldrig Envenom når Rupture eller Garrote er ved at udløbe — fornyelse har altid prioritet!',
      pets: [],
    },
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Blood Knights',  effect:'Verhoogt Agility voor 1 uur.',                note:'Altijd actief' },
      { type:'pot',    name:'Potion of Recklessness',             effect:'Grote Agility boost 25 sec.',                note:'Gebruik bij Vendetta + Deathmark window' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Agility en Stamina via groepsfeast.',       note:'Feast vragen' },
      { type:'food',   name:'Royal Roast',          effect:'Solo food backup.',                          note:'Backup als geen feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primaire stat 1 uur.',                      note:'Altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Blood Knights',  effect:'Increases Agility for 1 hour.',              note:'Always active' },
      { type:'pot',    name:'Potion of Recklessness',             effect:'Large Agility boost 25 sec.',               note:'Use during Vendetta + Deathmark window' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Agility and Stamina via group feast.',     note:'Ask for feast' },
      { type:'food',   name:'Royal Roast',          effect:'Solo food backup.',                         note:'Backup if no feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primary stat 1 hour.',                     note:'Always use' },
    ],
    da: [
      { type:'flask',  name:'Flask of the Blood Knights',  effect:'Øger Agility i 1 time.',                     note:'Altid aktiv' },
      { type:'pot',    name:'Potion of Recklessness',             effect:'Stor Agility-boost i 25 sek.',              note:'Brug under Vendetta + Deathmark-vindue' },
      { type:'food',   name:'Silvermoon Parade (Feast)',   effect:'+Agility og Stamina via gruppefeast.',      note:'Bed om feast' },
      { type:'food',   name:'Royal Roast',          effect:'Solo-mad backup.',                          note:'Backup hvis ingen feast' },
      { type:'rune',   name:'Void-Touched Augment Rune',    effect:'+Primær stat 1 time.',                      note:'Brug altid' },
    ],
  },
};

ALL_SPECS.push(SPEC_ASSASSINATION_ROGUE);

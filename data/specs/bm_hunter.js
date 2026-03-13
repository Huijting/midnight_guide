// ============================================================
// SPEC: Beast Mastery Hunter
// WoW Midnight 12.0.1 | Bron: Icy Veins (bewerkt voor deze app)
// Aanpassen? Alleen dit bestand wijzigen en pushen.
// ============================================================

const SPEC_BM_HUNTER = {
  id: 'bm_hunter',
  icon: '🏹',
  class: 'Hunter',
  spec:  { nl: 'Beast Mastery', en: 'Beast Mastery', da: 'Beast Mastery' },
  role:  'dps',
  armor: 'Mail',
  weapon: { nl: 'Boog / Gun / Crossbow', en: 'Bow / Gun / Crossbow', da: 'Bue / Pistol / Armbryst' },
  resource: 'Focus (0–120)',
  patch: '12.0.1',
  color: '#e88c2a',

  summary: {
    nl: 'Ranged DPS die zijn pet het werk laat doen. Simpele rotatie, hoge mobiliteit, sterk voor solo en groepsplay. Jouw pet doet een groot deel van de schade — houdt hem in leven!',
    en: 'Ranged DPS that lets your pet do the work. Simple rotation, high mobility, strong for solo and group play. Your pet deals a large portion of damage — keep it alive!',
    da: 'Ranged DPS der lader sit kæledyr gøre arbejdet. Simpel rotation, høj mobilitet, stærk til solo og gruppespil. Dit kæledyr laver en stor del af skaden — hold det i live!',
  },

  pros: {
    nl: ['Simpele rotatie — snel te leren', 'Pet tankt mobs — ideaal voor solo/questen', 'Hoge mobiliteit — cast bijna alles al bewegend', 'Vlakke, consistente DPS', 'Sterke utility (Misdirection, Freezing Trap)'],
    en: ['Simple rotation — quick to learn', 'Pet tanks mobs — ideal for solo/questing', 'High mobility — cast almost everything while moving', 'Flat, consistent DPS', 'Strong utility (Misdirection, Freezing Trap)'],
    da: ['Simpel rotation — hurtig at lære', 'Pet tanker mobs — perfekt til solo/questing', 'Høj mobilitet — kast næsten alt mens du bevæger dig', 'Jævn, konsistent DPS', 'Stærk utility (Misdirection, Freezing Trap)'],
  },

  cons: {
    nl: ['Minder burst dan andere specs', 'Pet kan sterven bij slechte positionering', 'Afhankelijk van pet — pet bugs kosten DPS', 'Focus management vereist aandacht', 'Scatter Shot weg in Midnight'],
    en: ['Less burst than other specs', 'Pet can die on bad positioning', 'Reliant on pet — pet bugs cost DPS', 'Focus management requires attention', 'Scatter Shot removed in Midnight'],
    da: ['Mindre burst end andre specs', 'Pet kan dø ved dårlig positionering', 'Afhængig af pet — pet-bugs koster DPS', 'Focus management kræver opmærksomhed', 'Scatter Shot fjernet i Midnight'],
  },

  // ── RESOURCE ──────────────────────────────────────────────
  resource_info: {
    nl: {
      intro: 'Focus (0–120) is jouw primaire resource. Nooit op 0 zitten en nooit vol laten lopen — beide zijn verspilling!',
      generate: [
        { spell: 'Auto-attacks', note: '+2 Focus per aanval (passief)' },
        { spell: 'Cobra Shot', note: 'Genereert Focus + verlengt Barbed Shot' },
        { spell: 'Kill Command', note: 'Kan Focus teruggeven via talents' },
      ],
      spend: [
        { spell: 'Kill Command', note: 'Hoge schade, hoog Focus-verbruik' },
        { spell: 'Barbed Shot', note: 'Geeft pet Frenzy stacks' },
        { spell: 'Bestial Wrath', note: 'Grote cooldown, verlaagt kosten' },
        { spell: 'Wild Thrash', note: 'AoE pet aanval' },
      ],
      pet_tip: 'Je pet bouwt tot 3 Frenzy stacks op via Barbed Shot. Elke stack verhoogt de aanvalssnelheid. Houd altijd 3 stacks actief — dit is je belangrijkste buff! Refresh Barbed Shot voordat de stacks verlopen.',
      pets: [
        { type: 'Ferocity 🟢', bonus: 'Leech — healt jou op basis van schade', use: 'Levelen, solo, questen — aanbevolen' },
        { type: 'Tenacity 🟡', bonus: 'Hogere HP + schade reductie voor pet', use: 'Taaie solo content, world bosses' },
        { type: 'Cunning 🔴', bonus: 'Verlengde duur roots/snares', use: 'PvP of situaties met veel CC' },
      ],
    },
    en: {
      intro: 'Focus (0–120) is your primary resource. Never sit at 0 and never let it cap — both are wasteful!',
      generate: [
        { spell: 'Auto-attacks', note: '+2 Focus per attack (passive)' },
        { spell: 'Cobra Shot', note: 'Generates Focus + extends Barbed Shot' },
        { spell: 'Kill Command', note: 'Can return Focus via talents' },
      ],
      spend: [
        { spell: 'Kill Command', note: 'High damage, high Focus cost' },
        { spell: 'Barbed Shot', note: 'Gives pet Frenzy stacks' },
        { spell: 'Bestial Wrath', note: 'Major cooldown, reduces costs' },
        { spell: 'Wild Thrash', note: 'AoE pet attack' },
      ],
      pet_tip: 'Your pet builds up to 3 Frenzy stacks via Barbed Shot. Each stack increases attack speed. Always keep 3 stacks active — this is your most important buff! Refresh Barbed Shot before the stacks fall off.',
      pets: [
        { type: 'Ferocity 🟢', bonus: 'Leech — heals you based on damage dealt', use: 'Leveling, solo, questing — recommended' },
        { type: 'Tenacity 🟡', bonus: 'Higher HP + damage reduction for pet', use: 'Tough solo content, world bosses' },
        { type: 'Cunning 🔴', bonus: 'Extended duration of roots/snares', use: 'PvP or situations with lots of CC' },
      ],
    },
    da: {
      intro: 'Focus (0–120) er din primære ressource. Sid aldrig på 0 og lad den aldrig fyldes op — begge dele er spild!',
      generate: [
        { spell: 'Auto-angreb', note: '+2 Focus per angreb (passiv)' },
        { spell: 'Cobra Shot', note: 'Genererer Focus + forlænger Barbed Shot' },
        { spell: 'Kill Command', note: 'Kan returnere Focus via talents' },
      ],
      spend: [
        { spell: 'Kill Command', note: 'Høj skade, høj Focus-omkostning' },
        { spell: 'Barbed Shot', note: 'Giver kæledyr Frenzy-stakke' },
        { spell: 'Bestial Wrath', note: 'Stor cooldown, reducerer omkostninger' },
        { spell: 'Wild Thrash', note: 'AoE kæledyrsangreb' },
      ],
      pet_tip: 'Dit kæledyr bygger op til 3 Frenzy-stakke via Barbed Shot. Hver stak øger angrebshastigheden. Hold altid 3 stakke aktive — dette er din vigtigste buff!',
      pets: [
        { type: 'Ferocity 🟢', bonus: 'Leech — healer dig baseret på skade', use: 'Leveling, solo, questing — anbefalet' },
        { type: 'Tenacity 🟡', bonus: 'Højere HP + skadereduktion for kæledyr', use: 'Hård solo-indhold, world bosses' },
        { type: 'Cunning 🔴', bonus: 'Forlænget varighed af roots/snares', use: 'PvP eller situationer med megen CC' },
      ],
    },
  },

  // ── ROTATIE ───────────────────────────────────────────────
  rotation: {
    nl: {
      apex_tip: '⚡ Apex Talent: Kill Command wordt sterker na elke niet-KC cast. Nooit twee Kill Commands achter elkaar! Patroon: KC → andere spell → KC → andere spell.',
      opener: [
        { step: 1, spell: "Hunter's Mark",  note: 'Altijd actief houden op target' },
        { step: 2, spell: 'Wild Thrash',    note: 'Activeer vóór Bestial Wrath als beschikbaar' },
        { step: 3, spell: 'Bestial Wrath',  note: 'Grote schade-cooldown — buffert alle volgende casts' },
        { step: 4, spell: 'Kill Command',   note: 'Direct na Bestial Wrath — spawnt Stampede!' },
        { step: 5, spell: 'Black Arrow',    note: 'Als getalenteerd (Dark Ranger build) — in eerste 10 sec BW' },
        { step: 6, spell: 'Barbed Shot',    note: 'Zet Frenzy-stacks op pet — niet laten verlopen!' },
        { step: 7, spell: 'Wailing Arrow',  note: 'Als Bestial Wrath bijna afloopt' },
      ],
      single: [
        { prio: '1', spell: 'Black Arrow',      note: 'Als beschikbaar (Dark Ranger build)',            importance: 'ALTIJD' },
        { prio: '2', spell: 'Bestial Wrath',    note: 'Zo snel mogelijk — verhoogt ALLE schade',        importance: 'ALTIJD' },
        { prio: '3', spell: 'Kill Command',     note: 'On cooldown — nooit 2x achter elkaar! (Apex)',   importance: 'ALTIJD' },
        { prio: '4', spell: 'Barbed Shot',      note: 'Houd Frenzy op 3 stacks — nooit laten verlopen', importance: 'ALTIJD' },
        { prio: '5', spell: 'Wild Thrash',      note: 'On cooldown — AoE + extra KC schade',            importance: 'HOOG' },
        { prio: '6', spell: 'Wailing Arrow',    note: 'Geen Barbed Shot of KC beschikbaar',             importance: 'HOOG' },
        { prio: '7', spell: 'Cobra Shot',       note: 'Filler — genereert Focus + verlengt Barbed Shot', importance: 'FILLER' },
      ],
      aoe: [
        { prio: '1', spell: 'Bestial Wrath',  note: 'Zo snel mogelijk — Stampede raakt meerdere targets' },
        { prio: '2', spell: 'Black Arrow',    note: 'Cast als Beast Cleave bijna afloopt' },
        { prio: '3', spell: 'Wild Thrash',    note: 'On cooldown — AoE pet aanval' },
        { prio: '4', spell: 'Kill Command',   note: 'On cooldown — altijd afwisselen met andere spells' },
        { prio: '5', spell: 'Barbed Shot',    note: 'Houd Frenzy stacks op 3' },
        { prio: '6', spell: 'Cobra Shot',     note: 'Filler — zorg dat je altijd iets cast' },
      ],
    },
    en: {
      apex_tip: '⚡ Apex Talent: Kill Command gets stronger after every non-KC cast. Never cast Kill Command twice in a row! Pattern: KC → other spell → KC → other spell.',
      opener: [
        { step: 1, spell: "Hunter's Mark",  note: 'Always keep active on target' },
        { step: 2, spell: 'Wild Thrash',    note: 'Activate before Bestial Wrath if available' },
        { step: 3, spell: 'Bestial Wrath',  note: 'Major damage cooldown — buffs all following casts' },
        { step: 4, spell: 'Kill Command',   note: 'Right after Bestial Wrath — spawns Stampede!' },
        { step: 5, spell: 'Black Arrow',    note: 'If talented (Dark Ranger build) — in first 10 sec of BW' },
        { step: 6, spell: 'Barbed Shot',    note: 'Apply Frenzy stacks to pet — do not let them drop!' },
        { step: 7, spell: 'Wailing Arrow',  note: 'As Bestial Wrath is about to expire' },
      ],
      single: [
        { prio: '1', spell: 'Black Arrow',      note: 'If available (Dark Ranger build)',                importance: 'ALWAYS' },
        { prio: '2', spell: 'Bestial Wrath',    note: 'As soon as possible — boosts ALL damage',         importance: 'ALWAYS' },
        { prio: '3', spell: 'Kill Command',     note: 'On cooldown — never twice in a row! (Apex)',      importance: 'ALWAYS' },
        { prio: '4', spell: 'Barbed Shot',      note: 'Keep Frenzy at 3 stacks — never let them drop',  importance: 'ALWAYS' },
        { prio: '5', spell: 'Wild Thrash',      note: 'On cooldown — AoE + extra KC damage',            importance: 'HIGH' },
        { prio: '6', spell: 'Wailing Arrow',    note: 'When no Barbed Shot or KC available',            importance: 'HIGH' },
        { prio: '7', spell: 'Cobra Shot',       note: 'Filler — generates Focus + extends Barbed Shot', importance: 'FILLER' },
      ],
      aoe: [
        { prio: '1', spell: 'Bestial Wrath',  note: 'As soon as possible — Stampede hits multiple targets' },
        { prio: '2', spell: 'Black Arrow',    note: 'Cast when Beast Cleave is about to drop' },
        { prio: '3', spell: 'Wild Thrash',    note: 'On cooldown — AoE pet attack' },
        { prio: '4', spell: 'Kill Command',   note: 'On cooldown — always alternate with other spells' },
        { prio: '5', spell: 'Barbed Shot',    note: 'Keep Frenzy stacks at 3' },
        { prio: '6', spell: 'Cobra Shot',     note: 'Filler — always be casting something' },
      ],
    },
    da: {
      apex_tip: '⚡ Apex Talent: Kill Command bliver stærkere efter hver ikke-KC cast. Kast aldrig Kill Command to gange i træk! Mønster: KC → anden spell → KC → anden spell.',
      opener: [
        { step: 1, spell: "Hunter's Mark",  note: 'Hold altid aktiv på målet' },
        { step: 2, spell: 'Wild Thrash',    note: 'Aktiver før Bestial Wrath hvis tilgængeligt' },
        { step: 3, spell: 'Bestial Wrath',  note: 'Stor skade-cooldown — booster alle følgende casts' },
        { step: 4, spell: 'Kill Command',   note: 'Straks efter Bestial Wrath — fremkalder Stampede!' },
        { step: 5, spell: 'Black Arrow',    note: 'Hvis talented (Dark Ranger build) — i første 10 sek af BW' },
        { step: 6, spell: 'Barbed Shot',    note: 'Påfør Frenzy-stakke til kæledyr — lad dem ikke falde!' },
        { step: 7, spell: 'Wailing Arrow',  note: 'Når Bestial Wrath er ved at udløbe' },
      ],
      single: [
        { prio: '1', spell: 'Black Arrow',      note: 'Hvis tilgængeligt (Dark Ranger build)',            importance: 'ALTID' },
        { prio: '2', spell: 'Bestial Wrath',    note: 'Så hurtigt som muligt — booster AL skade',         importance: 'ALTID' },
        { prio: '3', spell: 'Kill Command',     note: 'On cooldown — aldrig to gange i træk! (Apex)',     importance: 'ALTID' },
        { prio: '4', spell: 'Barbed Shot',      note: 'Hold Frenzy på 3 stakke — lad dem aldrig falde',  importance: 'ALTID' },
        { prio: '5', spell: 'Wild Thrash',      note: 'On cooldown — AoE + ekstra KC skade',              importance: 'HØJ' },
        { prio: '6', spell: 'Wailing Arrow',    note: 'Når ingen Barbed Shot eller KC er tilgængeligt',   importance: 'HØJ' },
        { prio: '7', spell: 'Cobra Shot',       note: 'Fyldstof — genererer Focus + forlænger Barbed Shot', importance: 'FYLD' },
      ],
      aoe: [
        { prio: '1', spell: 'Bestial Wrath',  note: 'Så hurtigt som muligt — Stampede rammer flere mål' },
        { prio: '2', spell: 'Black Arrow',    note: 'Kast når Beast Cleave er ved at falde' },
        { prio: '3', spell: 'Wild Thrash',    note: 'On cooldown — AoE kæledyrsangreb' },
        { prio: '4', spell: 'Kill Command',   note: 'On cooldown — skift altid med andre spells' },
        { prio: '5', spell: 'Barbed Shot',    note: 'Hold Frenzy-stakke på 3' },
        { prio: '6', spell: 'Cobra Shot',     note: 'Fyldstof — kast altid noget' },
      ],
    },
  },

  // ── STATS ─────────────────────────────────────────────────
  stats: {
    nl: {
      tip: '💡 Easy Mode tip: Maximaliseer Mastery en vermijd Versatility op gear. Bij levelen altijd het hoogste item level pakken — Agility en Stamina zijn allesbepalend.',
      list: [
        { rank: '1', stat: 'Agility',        bars: 5, note: 'Verhoogt aanvalskracht voor jou EN je pet — altijd hoogste ilvl pakken!' },
        { rank: '2', stat: 'Mastery',         bars: 5, note: 'Verhoogt schade van jou en je pets — maximaliseer op max level' },
        { rank: '3', stat: 'Critical Strike', bars: 4, note: 'Veel BM talents schalen met Crit (Laceration, Piercing Fangs)' },
        { rank: '4', stat: 'Haste',           bars: 3, note: 'Verlaagt GCD en cooldowns — meer casts per minuut' },
        { rank: '5', stat: 'Versatility',     bars: 2, note: 'Vlakke % schade bonus — minst waardevol voor BM' },
      ],
    },
    en: {
      tip: '💡 Easy Mode tip: Maximize Mastery and avoid Versatility on gear. While leveling always grab the highest item level — Agility and Stamina are everything.',
      list: [
        { rank: '1', stat: 'Agility',        bars: 5, note: 'Increases attack power for you AND your pet — always take highest ilvl!' },
        { rank: '2', stat: 'Mastery',         bars: 5, note: 'Increases damage for you and your pet — maximize at max level' },
        { rank: '3', stat: 'Critical Strike', bars: 4, note: 'Many BM talents scale with Crit (Laceration, Piercing Fangs)' },
        { rank: '4', stat: 'Haste',           bars: 3, note: 'Reduces GCD and cooldowns — more casts per minute' },
        { rank: '5', stat: 'Versatility',     bars: 2, note: 'Flat % damage bonus — least valuable secondary stat for BM' },
      ],
    },
    da: {
      tip: '💡 Easy Mode tip: Maksimer Mastery og undgå Versatility på gear. Under leveling tag altid det højeste item level — Agility og Stamina er afgørende.',
      list: [
        { rank: '1', stat: 'Agility',        bars: 5, note: 'Øger angrebskraft for dig OG dit kæledyr — tag altid højeste ilvl!' },
        { rank: '2', stat: 'Mastery',         bars: 5, note: 'Øger skade for dig og dit kæledyr — maksimer på max level' },
        { rank: '3', stat: 'Critical Strike', bars: 4, note: 'Mange BM-talents skalerer med Crit (Laceration, Piercing Fangs)' },
        { rank: '4', stat: 'Haste',           bars: 3, note: 'Reducerer GCD og cooldowns — flere casts per minut' },
        { rank: '5', stat: 'Versatility',     bars: 2, note: 'Flad % skade-bonus — mindst værdifuld sekundær stat for BM' },
      ],
    },
  },

  // ── COOLDOWNS ─────────────────────────────────────────────
  cooldowns: {
    nl: [
      { spell: 'Bestial Wrath',        cd: '1.5 min', effect: 'Verhoogt alle schade + pet + spawnt Stampede',         when: 'Zo snel mogelijk — altijd on cooldown' },
      { spell: 'Bloodlust / Heroism',  cd: '10 min',  effect: 'Groeps-haste +30% voor 40 sec',                        when: 'Op aanwijzing van de tank of raidleider' },
      { spell: 'Exhilaration',         cd: '1.5 min', effect: 'Instant heal: 30% HP voor jezelf + 30% pet',           when: 'Zodra je onder ~60% HP zakt' },
      { spell: 'Aspect of the Turtle', cd: '3 min',   effect: '100% immune aan schade (8 sec) — STOP met aanvallen',  when: 'Absolute noodsituatie / mechanics' },
      { spell: 'Feign Death',          cd: '30 sec',  effect: 'Vals neerspelen — verwijdert je van agressie-lijst',   when: 'Aggro-dump of fake death bij wipe' },
      { spell: 'Intimidation',         cd: '1 min',   effect: 'Stunt de target 5 seconden',                           when: 'Interrupt zware cast of noodstop' },
      { spell: 'Misdirection',         cd: '30 sec',  effect: 'Stuurt jouw threat naar tank of pet',                  when: 'Bij grote pulls of aggro-problemen' },
    ],
    en: [
      { spell: 'Bestial Wrath',        cd: '1.5 min', effect: 'Increases all damage + pet + spawns Stampede',         when: 'As soon as possible — always on cooldown' },
      { spell: 'Bloodlust / Heroism',  cd: '10 min',  effect: 'Group haste +30% for 40 sec',                          when: 'On instruction from tank or raid leader' },
      { spell: 'Exhilaration',         cd: '1.5 min', effect: 'Instant heal: 30% HP for you + 30% for pet',           when: 'When you drop below ~60% HP' },
      { spell: 'Aspect of the Turtle', cd: '3 min',   effect: '100% immune to damage (8 sec) — STOP attacking',       when: 'Absolute emergency / mechanics' },
      { spell: 'Feign Death',          cd: '30 sec',  effect: 'Play dead — removes you from aggro list',              when: 'Aggro dump or fake death during wipe' },
      { spell: 'Intimidation',         cd: '1 min',   effect: 'Stuns target for 5 seconds',                           when: 'Interrupt a heavy cast or emergency stop' },
      { spell: 'Misdirection',         cd: '30 sec',  effect: 'Redirects your threat to tank or pet',                 when: 'On big pulls or aggro problems' },
    ],
    da: [
      { spell: 'Bestial Wrath',        cd: '1.5 min', effect: 'Øger al skade + kæledyr + fremkalder Stampede',        when: 'Så hurtigt som muligt — altid on cooldown' },
      { spell: 'Bloodlust / Heroism',  cd: '10 min',  effect: 'Gruppe-haste +30% i 40 sek',                           when: 'Efter anvisning fra tank eller raidleder' },
      { spell: 'Exhilaration',         cd: '1.5 min', effect: 'Øjeblikkelig heal: 30% HP til dig + 30% kæledyr',      when: 'Når du falder under ~60% HP' },
      { spell: 'Aspect of the Turtle', cd: '3 min',   effect: '100% immun mod skade (8 sek) — STOP med at angribe',   when: 'Absolut nødsituation / mechanics' },
      { spell: 'Feign Death',          cd: '30 sec',  effect: 'Spil død — fjerner dig fra aggro-listen',              when: 'Aggro-dump eller fake death under wipe' },
      { spell: 'Intimidation',         cd: '1 min',   effect: 'Bedøver målet i 5 sekunder',                           when: 'Afbryd et tungt cast eller nødstop' },
      { spell: 'Misdirection',         cd: '30 sec',  effect: 'Omdirigerer din trussel til tank eller kæledyr',       when: 'Ved store pulls eller aggro-problemer' },
    ],
  },

  // ── UTILITY ───────────────────────────────────────────────
  utility: {
    nl: [
      { spell: 'Counter Shot',          type: 'Interrupt', note: 'Jouw kick — altijd gebruiken op gevaarlijke casts. Maak een Focus Kick macro!' },
      { spell: 'Intimidation',          type: 'Stun',      note: '5 sec stun — voor casts die niet te interrumpten zijn' },
      { spell: 'Freezing Trap',         type: 'CC',        note: 'Vriest één target 60 sec in — goud waard in M+ voor skip of CC' },
      { spell: 'Tar Trap',              type: 'Slow',      note: 'Vertraagt alle vijanden die erdoorheen lopen — voor kiting' },
      { spell: "Hunter's Mark",         type: 'Debuff',    note: 'Verhoogt jouw schade op target — altijd actief houden!' },
      { spell: 'Misdirection',          type: 'Threat',    note: 'Verplaatst jouw threat naar tank of pet — essentieel bij pulls' },
      { spell: 'Aspect of the Cheetah', type: 'Mobility',  note: 'Verhoogt bewegingssnelheid tijdelijk — gebruik tussen packs in M+' },
      { spell: 'Disengage',             type: 'Mobility',  note: 'Sprong achteruit — snel afstand creëren van vijanden' },
    ],
    en: [
      { spell: 'Counter Shot',          type: 'Interrupt', note: 'Your kick — always use on dangerous casts. Make a Focus Kick macro!' },
      { spell: 'Intimidation',          type: 'Stun',      note: '5 sec stun — for casts that cannot be interrupted' },
      { spell: 'Freezing Trap',         type: 'CC',        note: 'Freezes one target for 60 sec — invaluable in M+ for skips or CC' },
      { spell: 'Tar Trap',              type: 'Slow',      note: 'Slows all enemies walking through it — use for kiting' },
      { spell: "Hunter's Mark",         type: 'Debuff',    note: 'Increases your damage on target — always keep active!' },
      { spell: 'Misdirection',          type: 'Threat',    note: 'Redirects your threat to tank or pet — essential on pulls' },
      { spell: 'Aspect of the Cheetah', type: 'Mobility',  note: 'Temporarily increases movement speed — use between packs in M+' },
      { spell: 'Disengage',             type: 'Mobility',  note: 'Leap backwards — quickly create distance from enemies' },
    ],
    da: [
      { spell: 'Counter Shot',          type: 'Afbryd',    note: 'Dit spark — brug altid på farlige casts. Lav en Focus Kick-makro!' },
      { spell: 'Intimidation',          type: 'Bedøv',     note: '5 sek bedøvelse — til casts der ikke kan afbrydes' },
      { spell: 'Freezing Trap',         type: 'CC',        note: 'Fryser ét mål i 60 sek — uvurderlig i M+ til skip eller CC' },
      { spell: 'Tar Trap',              type: 'Slow',      note: 'Sinker alle fjender der går igennem — brug til kiting' },
      { spell: "Hunter's Mark",         type: 'Debuff',    note: 'Øger din skade på målet — hold altid aktiv!' },
      { spell: 'Misdirection',          type: 'Trussel',   note: 'Omdirigerer din trussel til tank eller kæledyr — essentiel ved pulls' },
      { spell: 'Aspect of the Cheetah', type: 'Mobilitet', note: 'Øger bevægelseshastighed midlertidigt — brug mellem packs i M+' },
      { spell: 'Disengage',             type: 'Mobilitet', note: 'Spring baglæns — skab hurtigt afstand fra fjender' },
    ],
  },

  // ── TIPS ──────────────────────────────────────────────────
  tips: {
    nl: [
      { icon: '🐾', title: 'Frenzy stacks = prio #1',    text: 'Houd altijd 3 stacks Frenzy op je pet via Barbed Shot. Refresh ruim vóór het verlopen — kijk naar de timer op je pet.' },
      { icon: '⚡', title: 'Kill Command weaving',        text: 'De Apex talent maakt KC sterker na elke non-KC cast. Patroon: KC → andere spell → KC → andere spell. Nooit twee KC\'s achter elkaar!' },
      { icon: '💥', title: 'Bestial Wrath timing',        text: 'Grootste DPS-cooldown. Gebruik hem on cooldown — niet sparen. Aim de Stampede zodat hij zoveel mogelijk targets raakt bij AoE.' },
      { icon: '🏃', title: 'Altijd bewegen',              text: 'BM Hunter is de meest mobiele ranged spec. Bijna alle spells kunnen cast worden tijdens bewegen. Gebruik Disengage en Cheetah voor optimale positie.' },
      { icon: '❄',  title: 'Freezing Trap in M+',        text: 'Freeze een gevaarlijk target tijdens grote pulls. Combineer met Counter Shot voor maximale interrupt-dekking.' },
      { icon: '🦵', title: 'Counter Shot = jouw kick',    text: 'Maak een Focus Kick macro. Spreek met je groep af wie welke caster kickt.' },
      { icon: '💀', title: 'Pet overleeft niet?',         text: 'Call Pet (heroproepen) → Mend Pet. Pet buiten range? Beast Call. Ferocity pet healt zichzelf ook via Leech.' },
      { icon: '🎭', title: 'Feign Death = panic knop',    text: 'Verwijdert je van de agressie-lijst. LET OP: sommige boss-mechanics negeren Feign Death.' },
      { icon: '🎯', title: "Hunter's Mark altijd aan",    text: 'Altijd actief op hoofdtarget. Bij meerdere Hunters: maar 1 persoon zet hem. WeakAura instellen die waarschuwt als hij ontbreekt.' },
      { icon: '📏', title: 'Afstand houden',              text: 'Minimale range is 5 meter. Nooit recht op een boss staan. Bij mechanics: blijf bewegen maar zet je rotatie door!' },
    ],
    en: [
      { icon: '🐾', title: 'Frenzy stacks = prio #1',    text: 'Always keep 3 Frenzy stacks on your pet via Barbed Shot. Refresh well before they drop — watch the timer on your pet.' },
      { icon: '⚡', title: 'Kill Command weaving',        text: 'The Apex talent makes KC stronger after every non-KC cast. Pattern: KC → other spell → KC → other spell. Never two KCs in a row!' },
      { icon: '💥', title: 'Bestial Wrath timing',        text: 'Your biggest DPS cooldown. Use it on cooldown — never save it. Aim the Stampede to hit as many targets as possible on AoE.' },
      { icon: '🏃', title: 'Always keep moving',          text: 'BM Hunter is the most mobile ranged spec. Almost all spells can be cast while moving. Use Disengage and Cheetah for optimal positioning.' },
      { icon: '❄',  title: 'Freezing Trap in M+',        text: 'Freeze a dangerous target during large pulls. Combine with Counter Shot for maximum interrupt coverage.' },
      { icon: '🦵', title: 'Counter Shot = your kick',    text: 'Make a Focus Kick macro. Coordinate with your group on who kicks which caster.' },
      { icon: '💀', title: 'Pet keeps dying?',            text: 'Call Pet (re-summon) → Mend Pet. Pet out of range? Use Beast Call. Ferocity pet also heals itself via Leech.' },
      { icon: '🎭', title: 'Feign Death = panic button',  text: 'Removes you from the aggro list. NOTE: some boss mechanics ignore Feign Death.' },
      { icon: '🎯', title: "Always keep Hunter's Mark up", text: 'Always active on main target. If multiple Hunters in group: only 1 person applies it. Set up a WeakAura to warn when it\'s missing.' },
      { icon: '📏', title: 'Keep your distance',          text: 'Minimum range is 5 yards. Never stand right on top of a boss. During mechanics: keep moving but maintain your rotation!' },
    ],
    da: [
      { icon: '🐾', title: 'Frenzy-stakke = prio #1',    text: 'Hold altid 3 Frenzy-stakke på dit kæledyr via Barbed Shot. Genopfrisk i god tid — hold øje med timeren på dit kæledyr.' },
      { icon: '⚡', title: 'Kill Command weaving',        text: 'Apex-talenten gør KC stærkere efter hvert ikke-KC cast. Mønster: KC → anden spell → KC → anden spell. Aldrig to KC\'er i træk!' },
      { icon: '💥', title: 'Bestial Wrath timing',        text: 'Din største DPS-cooldown. Brug den on cooldown — gem den aldrig. Ret Stampede mod så mange mål som muligt ved AoE.' },
      { icon: '🏃', title: 'Bevæg dig altid',             text: 'BM Hunter er den mest mobile ranged spec. Næsten alle spells kan castes under bevægelse. Brug Disengage og Cheetah til optimal placering.' },
      { icon: '❄',  title: 'Freezing Trap i M+',         text: 'Frys et farligt mål under store pulls. Kombiner med Counter Shot for maksimal interrupt-dækning.' },
      { icon: '🦵', title: 'Counter Shot = dit spark',    text: 'Lav en Focus Kick-makro. Koordiner med din gruppe om hvem der sparker hvilken caster.' },
      { icon: '💀', title: 'Kæledyr overlever ikke?',    text: 'Call Pet (genkald) → Mend Pet. Kæledyr uden for rækkevidde? Brug Beast Call. Ferocity-kæledyr healer sig selv via Leech.' },
      { icon: '🎭', title: 'Feign Death = panikknap',     text: 'Fjerner dig fra aggro-listen. OBS: nogle boss-mechanics ignorerer Feign Death.' },
      { icon: '🎯', title: "Hold Hunter's Mark aktiv",    text: 'Altid aktiv på hovedmål. Hvis flere Huntere i gruppen: kun 1 person sætter den. Opsæt en WeakAura der advarer når den mangler.' },
      { icon: '📏', title: 'Hold afstand',                text: 'Minimum rækkevidde er 5 meter. Stå aldrig direkte på en boss. Under mechanics: bliv ved med at bevæge dig men oprethold din rotation!' },
    ],
  },

  // ── MACRO'S ───────────────────────────────────────────────
  macros: {
    nl: [
      { name: 'Counter Shot (Focus Kick)', code: '#showtooltip Counter Shot\n/cast [@focus,harm,nodead,casting][@mouseover,harm,nodead,casting][@target,harm,nodead,casting] Counter Shot', note: 'Kick op focus > mouseover > target. Essentieel in M+!' },
      { name: 'Focus Mouseover', code: '/focus [@mouseover]\n/script UIErrorsFrame:Clear()', note: 'Snel een focus target instellen zonder te targetten.' },
      { name: 'Intimidation (mouseover stun)', code: '#showtooltip Intimidation\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Intimidation', note: 'Stun op mouseover — handig als je target niet wil wisselen.' },
      { name: 'Freezing Trap (mouseover)', code: '#showtooltip Freezing Trap\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Freezing Trap', note: 'Trap op mouseover — CC snel zonder target te wisselen.' },
      { name: 'Misdirection (op tank of pet)', code: '#showtooltip Misdirection\n/cast [@focus,help,nodead][@mouseover,help,nodead][@pet] Misdirection', note: 'Stuurt threat naar focus > mouseover > pet. Altijd klaar voor grote pulls.' },
      { name: "Hunter's Mark (mouseover)", code: "#showtooltip Hunter's Mark\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Hunter's Mark", note: 'Zet mark op mouseover — handig als je snel van target wisselt.' },
    ],
    en: [
      { name: 'Counter Shot (Focus Kick)', code: '#showtooltip Counter Shot\n/cast [@focus,harm,nodead,casting][@mouseover,harm,nodead,casting][@target,harm,nodead,casting] Counter Shot', note: 'Kick on focus > mouseover > target. Essential in M+!' },
      { name: 'Focus Mouseover', code: '/focus [@mouseover]\n/script UIErrorsFrame:Clear()', note: 'Quickly set a focus target without switching target.' },
      { name: 'Intimidation (mouseover stun)', code: '#showtooltip Intimidation\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Intimidation', note: 'Stun on mouseover — useful when you do not want to switch target.' },
      { name: 'Freezing Trap (mouseover)', code: '#showtooltip Freezing Trap\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Freezing Trap', note: 'Trap on mouseover — CC quickly without switching target.' },
      { name: 'Misdirection (to tank or pet)', code: '#showtooltip Misdirection\n/cast [@focus,help,nodead][@mouseover,help,nodead][@pet] Misdirection', note: 'Sends threat to focus > mouseover > pet. Always ready for big pulls.' },
      { name: "Hunter's Mark (mouseover)", code: "#showtooltip Hunter's Mark\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Hunter's Mark", note: 'Apply mark on mouseover — handy when quickly switching targets.' },
    ],
    da: [
      { name: 'Counter Shot (Focus Kick)', code: '#showtooltip Counter Shot\n/cast [@focus,harm,nodead,casting][@mouseover,harm,nodead,casting][@target,harm,nodead,casting] Counter Shot', note: 'Spark på focus > mouseover > mål. Essentiel i M+!' },
      { name: 'Focus Mouseover', code: '/focus [@mouseover]\n/script UIErrorsFrame:Clear()', note: 'Sæt hurtigt et fokus-mål uden at skifte mål.' },
      { name: 'Intimidation (mouseover bedøv)', code: '#showtooltip Intimidation\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Intimidation', note: 'Bedøv på mouseover — nyttigt når du ikke vil skifte mål.' },
      { name: 'Freezing Trap (mouseover)', code: '#showtooltip Freezing Trap\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Freezing Trap', note: 'Fælde på mouseover — CC hurtigt uden at skifte mål.' },
      { name: 'Misdirection (til tank eller kæledyr)', code: '#showtooltip Misdirection\n/cast [@focus,help,nodead][@mouseover,help,nodead][@pet] Misdirection', note: 'Sender trussel til focus > mouseover > kæledyr.' },
      { name: "Hunter's Mark (mouseover)", code: "#showtooltip Hunter's Mark\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Hunter's Mark", note: 'Påfør mark på mouseover — praktisk ved hurtig målskift.' },
    ],
  },

  // ── CHEAT SHEET ───────────────────────────────────────────
  cheatsheet: {
    nl: {
      opener:   "Hunter's Mark → Wild Thrash → Bestial Wrath → Kill Command → Black Arrow → Barbed Shot → Wailing Arrow",
      single:   "Black Arrow → Bestial Wrath → Kill Command (wissel af!) → Barbed Shot (Frenzy 3!) → Wild Thrash → Wailing Arrow → Cobra Shot",
      aoe:      "Bestial Wrath → Wild Thrash → Kill Command → Barbed Shot → Cobra Shot",
      rules: [
        'Nooit KC twee keer achter elkaar (Apex!)',
        'Barbed Shot Frenzy altijd op 3 stacks',
        'Bestial Wrath on cooldown — nooit sparen',
        "Hunter's Mark altijd actief op target",
        'Nooit op 0 Focus zitten',
        'Ferocity pet = Leech = betere survival',
        'Nooit Frenzy stacks laten verlopen',
        'Nooit in melee range van boss staan',
        'Nooit Focus tot max laten oplopen',
      ],
    },
    en: {
      opener:   "Hunter's Mark → Wild Thrash → Bestial Wrath → Kill Command → Black Arrow → Barbed Shot → Wailing Arrow",
      single:   "Black Arrow → Bestial Wrath → Kill Command (alternate!) → Barbed Shot (Frenzy 3!) → Wild Thrash → Wailing Arrow → Cobra Shot",
      aoe:      "Bestial Wrath → Wild Thrash → Kill Command → Barbed Shot → Cobra Shot",
      rules: [
        'Never KC twice in a row (Apex!)',
        'Barbed Shot Frenzy always at 3 stacks',
        'Bestial Wrath on cooldown — never save it',
        "Hunter's Mark always active on target",
        'Never sit at 0 Focus',
        'Ferocity pet = Leech = better survival',
        'Never let Frenzy stacks drop',
        'Never stand in melee range of boss',
        'Never let Focus cap out',
      ],
    },
    da: {
      opener:   "Hunter's Mark → Wild Thrash → Bestial Wrath → Kill Command → Black Arrow → Barbed Shot → Wailing Arrow",
      single:   "Black Arrow → Bestial Wrath → Kill Command (skift!) → Barbed Shot (Frenzy 3!) → Wild Thrash → Wailing Arrow → Cobra Shot",
      aoe:      "Bestial Wrath → Wild Thrash → Kill Command → Barbed Shot → Cobra Shot",
      rules: [
        'Aldrig KC to gange i træk (Apex!)',
        'Barbed Shot Frenzy altid på 3 stakke',
        'Bestial Wrath on cooldown — gem den aldrig',
        "Hunter's Mark altid aktiv på mål",
        'Sid aldrig på 0 Focus',
        'Ferocity-kæledyr = Leech = bedre overlevelse',
        'Lad aldrig Frenzy-stakke falde',
        'Stå aldrig i melee-rækkevidde af boss',
        'Lad aldrig Focus fylde op',
      ],
    },
  },
};

// Registreer spec in de globale lijst
if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
ALL_SPECS.push(SPEC_BM_HUNTER);

// Voeg consumables toe aan SPEC_BM_HUNTER
SPEC_BM_HUNTER.consumables = {
  nl: [
    { type:'flask',  name:'Flask of the Focused Dream',    effect:'Verhoogt Agility significant voor 1 uur. Blijft actief na dood.',                                note:'Altijd actief in M+ en raid — geen excuses!' },
    { type:'pot',    name:'Tempered Potion',               effect:'Grote Agility boost voor 25 sec. Gebruik op pull of bij Bloodlust.',                            note:'Gebruik er 2 per boss: één op pull + één bij 20% HP' },
    { type:'food',   name:'The Sushi Special (Feast)',     effect:'+Agility en Stamina — groepsfeast. Als geen feast: Meat Lover\'s Delight voor solo Agility.', note:'Vraag je healer of tank een feast te plaatsen' },
    { type:'food',   name:'Meat Lover\'s Delight',         effect:'Solo food — hoge Agility bonus als er geen feast is.',                                          note:'Altijd in je bags hebben als backup' },
    { type:'rune',   name:'Crystalline Augment Rune',      effect:'+Primaire stat voor 1 uur. Stapelt met flask en food.',                                         note:'Gebruik in M+ en raid — goedkoop en efficiënt' },
  ],
  en: [
    { type:'flask',  name:'Flask of the Focused Dream',    effect:'Significantly increases Agility for 1 hour. Persists through death.',                           note:'Always active in M+ and raid — no excuses!' },
    { type:'pot',    name:'Tempered Potion',               effect:'Large Agility boost for 25 sec. Use on pull or during Bloodlust.',                              note:'Use 2 per boss: one on pull + one at 20% HP' },
    { type:'food',   name:'The Sushi Special (Feast)',     effect:'+Agility and Stamina — group feast. If no feast: Meat Lover\'s Delight for solo Agility.',    note:'Ask your healer or tank to place a feast' },
    { type:'food',   name:'Meat Lover\'s Delight',         effect:'Solo food — high Agility bonus when no feast is available.',                                    note:'Always have in your bags as backup' },
    { type:'rune',   name:'Crystalline Augment Rune',      effect:'+Primary stat for 1 hour. Stacks with flask and food.',                                         note:'Use in M+ and raid — cheap and efficient' },
  ],
  da: [
    { type:'flask',  name:'Flask of the Focused Dream',    effect:'Øger Agility markant i 1 time. Forbliver aktiv efter død.',                                    note:'Altid aktiv i M+ og raid — ingen undskyldninger!' },
    { type:'pot',    name:'Tempered Potion',               effect:'Stor Agility-boost i 25 sek. Brug ved pull eller under Bloodlust.',                            note:'Brug 2 per boss: én ved pull + én ved 20% HP' },
    { type:'food',   name:'The Sushi Special (Feast)',     effect:'+Agility og Stamina — gruppefeast. Ingen feast: Meat Lover\'s Delight til solo Agility.',     note:'Bed din healer eller tank om at placere en feast' },
    { type:'food',   name:'Meat Lover\'s Delight',         effect:'Solo-mad — høj Agility-bonus når ingen feast er tilgængelig.',                                 note:'Hav altid i din taske som backup' },
    { type:'rune',   name:'Crystalline Augment Rune',      effect:'+Primær stat i 1 time. Stakker med flask og mad.',                                              note:'Brug i M+ og raid — billig og effektiv' },
  ],
};

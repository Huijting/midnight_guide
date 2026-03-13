// ============================================================
// SPEC: Marksmanship Hunter
// WoW Midnight 12.0.1
// ============================================================

const SPEC_MM_HUNTER = {
  id: 'mm_hunter',
  icon: '🎯',
  class: 'Hunter',
  spec:  { nl: 'Marksmanship', en: 'Marksmanship', da: 'Marksmanship' },
  role:  'dps',
  armor: 'Mail',
  weapon: { nl: 'Boog / Gun / Crossbow', en: 'Bow / Gun / Crossbow', da: 'Bue / Pistol / Armbryst' },
  resource: 'Focus (0–120)',
  patch: '12.0.1',
  color: '#4fc3f7',

  summary: {
    nl: 'Hoge single-target en burst-schade vanuit veilige afstand. MM speelt zonder vaste pet — meer zelfstandig maar minder CC. Perfecte keuze als je hoge pieken in je schade wil zien.',
    en: 'High single-target and burst damage from a safe range. MM plays without a permanent pet — more self-reliant but less CC. Perfect choice if you want to see big damage spikes.',
    da: 'Høj single-target og burst-skade fra sikker afstand. MM spiller uden fast kæledyr — mere selvstændig men mindre CC. Perfekt valg hvis du vil se store skade-toppe.',
  },

  pros: {
    nl: ['Hoogste burst-schade van alle Hunter specs', 'Geen pet nodig — minder micro-management', 'Sterke cooldowns (Trueshot)', 'Uitstekende single-target én cleave', 'Windrunner fantasy — snelle, elegante rotatie'],
    en: ['Highest burst damage of all Hunter specs', 'No pet needed — less micro-management', 'Strong cooldowns (Trueshot)', 'Excellent single-target and cleave', 'Windrunner fantasy — fast, elegant rotation'],
    da: ['Højest burst-skade af alle Hunter specs', 'Intet kæledyr nødvendigt — mindre mikrostyring', 'Stærke cooldowns (Trueshot)', 'Fremragende single-target og cleave', 'Windrunner-fantasy — hurtig, elegant rotation'],
  },

  cons: {
    nl: ['Minder mobiel dan BM — sommige spells vereisen stilstand', 'Kwetsbaarder zonder pet-tank', 'Minder CC-opties dan BM', 'Hogere skill cap om optimaal te spelen', 'Tricky Focus management'],
    en: ['Less mobile than BM — some spells require standing still', 'More vulnerable without a pet tank', 'Fewer CC options than BM', 'Higher skill cap to play optimally', 'Tricky Focus management'],
    da: ['Mindre mobil end BM — nogle spells kræver stilstand', 'Mere sårbar uden kæledyr-tank', 'Færre CC-muligheder end BM', 'Højere skill cap for optimal spil', 'Tricky Focus management'],
  },

  cheatsheet: {
    nl: {
      opener:   "Hunter's Mark → Trueshot → Aimed Shot (x2) → Rapid Fire → Arcane Shot → Aimed Shot (x2 Precise Shots) → Multishot",
      single:   "Trueshot on CD → Aimed Shot (Precise Shots) → Rapid Fire → Arcane Shot (filler) → Steady Shot (Focus)",
      aoe:      "Trueshot → Rapid Fire → Multishot → Arcane Shot (cleave) → Aimed Shot (AoE spread)",
      rules: [
        'Nooit Aimed Shot casten zonder Precise Shots proc',
        'Rapid Fire altijd direct voor of na Aimed Shot',
        'Trueshot on cooldown — nooit sparen',
        "Hunter's Mark altijd actief",
        'Nooit op 0 Focus zitten',
        'Steady Shot = Focus genereren, geen schade',
        'Multishot verdeelt Aimed Shot schade bij AoE',
      ],
    },
    en: {
      opener:   "Hunter's Mark → Trueshot → Aimed Shot (x2) → Rapid Fire → Arcane Shot → Aimed Shot (x2 Precise Shots) → Multishot",
      single:   "Trueshot on CD → Aimed Shot (Precise Shots) → Rapid Fire → Arcane Shot (filler) → Steady Shot (Focus)",
      aoe:      "Trueshot → Rapid Fire → Multishot → Arcane Shot (cleave) → Aimed Shot (AoE spread)",
      rules: [
        'Never cast Aimed Shot without Precise Shots proc',
        'Rapid Fire always directly before or after Aimed Shot',
        'Trueshot on cooldown — never save it',
        "Hunter's Mark always active",
        'Never sit at 0 Focus',
        'Steady Shot = Focus generation, not damage',
        'Multishot spreads Aimed Shot damage on AoE',
      ],
    },
    da: {
      opener:   "Hunter's Mark → Trueshot → Aimed Shot (x2) → Rapid Fire → Arcane Shot → Aimed Shot (x2 Precise Shots) → Multishot",
      single:   "Trueshot on CD → Aimed Shot (Precise Shots) → Rapid Fire → Arcane Shot (fyldstof) → Steady Shot (Focus)",
      aoe:      "Trueshot → Rapid Fire → Multishot → Arcane Shot (cleave) → Aimed Shot (AoE spread)",
      rules: [
        'Kast aldrig Aimed Shot uden Precise Shots proc',
        'Rapid Fire altid direkte før eller efter Aimed Shot',
        'Trueshot on cooldown — gem den aldrig',
        "Hunter's Mark altid aktiv",
        'Sid aldrig på 0 Focus',
        'Steady Shot = Focus-generering, ikke skade',
        'Multishot spreder Aimed Shot-skade ved AoE',
      ],
    },
  },

  rotation: {
    nl: {
      apex_tip: '🎯 Precise Shots: Na elke Aimed Shot krijg je 2 gratis Arcane Shots of Multishots. Gebruik ze ALTIJD op — nooit verspillen!',
      opener: [
        { step: 1, spell: "Hunter's Mark",  note: 'Altijd actief houden' },
        { step: 2, spell: 'Trueshot',       note: 'Burst cooldown — verhoogt Aimed Shot schade enorm' },
        { step: 3, spell: 'Aimed Shot',     note: '2x casten tijdens Trueshot' },
        { step: 4, spell: 'Rapid Fire',     note: 'Kanaal — cast direct na Aimed Shot' },
        { step: 5, spell: 'Arcane Shot',    note: 'Gebruik Precise Shots procs op' },
        { step: 6, spell: 'Aimed Shot',     note: 'Nog 2x met Precise Shots procs' },
        { step: 7, spell: 'Multishot',      note: 'Bij 2+ targets: vervang Arcane Shot door Multishot' },
      ],
      single: [
        { prio: '1', spell: 'Trueshot',      note: 'On cooldown — grootste DPS-verhoger',              importance: 'ALTIJD' },
        { prio: '2', spell: 'Rapid Fire',    note: 'On cooldown — kombineer met Aimed Shot',            importance: 'ALTIJD' },
        { prio: '3', spell: 'Aimed Shot',    note: 'Alleen bij Precise Shots proc — anders te traag',   importance: 'ALTIJD' },
        { prio: '4', spell: 'Arcane Shot',   note: 'Gebruik Precise Shots procs op — 2 gratis shots',   importance: 'HOOG' },
        { prio: '5', spell: 'Steady Shot',   note: 'Filler — genereert Focus als je niets anders hebt', importance: 'FILLER' },
      ],
      aoe: [
        { prio: '1', spell: 'Trueshot',    note: 'On cooldown — alle Aimed Shots raken meerdere targets' },
        { prio: '2', spell: 'Rapid Fire',  note: 'On cooldown' },
        { prio: '3', spell: 'Multishot',   note: 'Vervangt Arcane Shot bij 2+ targets — verspreidt Aimed Shot' },
        { prio: '4', spell: 'Aimed Shot',  note: 'Schade verspreidt via Multishot' },
        { prio: '5', spell: 'Arcane Shot', note: 'Enkel target filler' },
      ],
    },
    en: {
      apex_tip: '🎯 Precise Shots: After every Aimed Shot you get 2 free Arcane Shots or Multishots. Always spend them — never waste!',
      opener: [
        { step: 1, spell: "Hunter's Mark",  note: 'Always keep active' },
        { step: 2, spell: 'Trueshot',       note: 'Burst cooldown — massively increases Aimed Shot damage' },
        { step: 3, spell: 'Aimed Shot',     note: 'Cast 2x during Trueshot' },
        { step: 4, spell: 'Rapid Fire',     note: 'Channel — cast directly after Aimed Shot' },
        { step: 5, spell: 'Arcane Shot',    note: 'Spend Precise Shots procs' },
        { step: 6, spell: 'Aimed Shot',     note: '2 more times with Precise Shots procs' },
        { step: 7, spell: 'Multishot',      note: 'On 2+ targets: replace Arcane Shot with Multishot' },
      ],
      single: [
        { prio: '1', spell: 'Trueshot',      note: 'On cooldown — biggest DPS booster',                importance: 'ALWAYS' },
        { prio: '2', spell: 'Rapid Fire',    note: 'On cooldown — pair with Aimed Shot',               importance: 'ALWAYS' },
        { prio: '3', spell: 'Aimed Shot',    note: 'Only with Precise Shots proc — otherwise too slow', importance: 'ALWAYS' },
        { prio: '4', spell: 'Arcane Shot',   note: 'Spend Precise Shots procs — 2 free shots',         importance: 'HIGH' },
        { prio: '5', spell: 'Steady Shot',   note: 'Filler — generates Focus when nothing else is up',  importance: 'FILLER' },
      ],
      aoe: [
        { prio: '1', spell: 'Trueshot',    note: 'On cooldown — all Aimed Shots hit multiple targets' },
        { prio: '2', spell: 'Rapid Fire',  note: 'On cooldown' },
        { prio: '3', spell: 'Multishot',   note: 'Replaces Arcane Shot on 2+ targets — spreads Aimed Shot' },
        { prio: '4', spell: 'Aimed Shot',  note: 'Damage spreads via Multishot' },
        { prio: '5', spell: 'Arcane Shot', note: 'Single target filler' },
      ],
    },
    da: {
      apex_tip: '🎯 Precise Shots: Efter hver Aimed Shot får du 2 gratis Arcane Shots eller Multishots. Brug dem ALTID — spild dem aldrig!',
      opener: [
        { step: 1, spell: "Hunter's Mark",  note: 'Hold altid aktiv' },
        { step: 2, spell: 'Trueshot',       note: 'Burst cooldown — øger Aimed Shot-skade enormt' },
        { step: 3, spell: 'Aimed Shot',     note: 'Kast 2x under Trueshot' },
        { step: 4, spell: 'Rapid Fire',     note: 'Kanal — kast direkte efter Aimed Shot' },
        { step: 5, spell: 'Arcane Shot',    note: 'Brug Precise Shots procs' },
        { step: 6, spell: 'Aimed Shot',     note: '2 mere med Precise Shots procs' },
        { step: 7, spell: 'Multishot',      note: 'Ved 2+ mål: erstat Arcane Shot med Multishot' },
      ],
      single: [
        { prio: '1', spell: 'Trueshot',      note: 'On cooldown — største DPS-forøger',                importance: 'ALTID' },
        { prio: '2', spell: 'Rapid Fire',    note: 'On cooldown — kombiner med Aimed Shot',            importance: 'ALTID' },
        { prio: '3', spell: 'Aimed Shot',    note: 'Kun med Precise Shots proc — ellers for langsom',  importance: 'ALTID' },
        { prio: '4', spell: 'Arcane Shot',   note: 'Brug Precise Shots procs — 2 gratis skud',         importance: 'HØJ' },
        { prio: '5', spell: 'Steady Shot',   note: 'Fyldstof — genererer Focus når intet andet er op', importance: 'FYLD' },
      ],
      aoe: [
        { prio: '1', spell: 'Trueshot',    note: 'On cooldown — alle Aimed Shots rammer flere mål' },
        { prio: '2', spell: 'Rapid Fire',  note: 'On cooldown' },
        { prio: '3', spell: 'Multishot',   note: 'Erstatter Arcane Shot ved 2+ mål — spreder Aimed Shot' },
        { prio: '4', spell: 'Aimed Shot',  note: 'Skade spredes via Multishot' },
        { prio: '5', spell: 'Arcane Shot', note: 'Single target fyldstof' },
      ],
    },
  },

  stats: {
    nl: {
      tip: '💡 MM is sterker gebaat bij Crit dan BM. Haste verlaagt de cast tijd van Aimed Shot — erg waardevol. Prioriteit op Agility = altijd hoogste ilvl.',
      list: [
        { rank: '1', stat: 'Agility',        bars: 5, note: 'Primaire stat — altijd hoogste item level kiezen' },
        { rank: '2', stat: 'Critical Strike', bars: 5, note: 'Verhoogt Aimed Shot en Rapid Fire schade enorm' },
        { rank: '3', stat: 'Haste',           bars: 4, note: 'Verlaagt cast tijd Aimed Shot — meer shots per minuut' },
        { rank: '4', stat: 'Mastery',         bars: 3, note: 'Verhoogt Aimed Shot en Arcane Shot schade' },
        { rank: '5', stat: 'Versatility',     bars: 2, note: 'Vlakke % bonus — minst waardevol voor MM' },
      ],
    },
    en: {
      tip: '💡 MM benefits more from Crit than BM. Haste reduces Aimed Shot cast time — very valuable. Agility priority = always take highest ilvl.',
      list: [
        { rank: '1', stat: 'Agility',        bars: 5, note: 'Primary stat — always choose highest item level' },
        { rank: '2', stat: 'Critical Strike', bars: 5, note: 'Massively increases Aimed Shot and Rapid Fire damage' },
        { rank: '3', stat: 'Haste',           bars: 4, note: 'Reduces Aimed Shot cast time — more shots per minute' },
        { rank: '4', stat: 'Mastery',         bars: 3, note: 'Increases Aimed Shot and Arcane Shot damage' },
        { rank: '5', stat: 'Versatility',     bars: 2, note: 'Flat % bonus — least valuable for MM' },
      ],
    },
    da: {
      tip: '💡 MM har mere gavn af Crit end BM. Haste reducerer Aimed Shot cast-tid — meget værdifuldt. Agility prioritet = tag altid højeste ilvl.',
      list: [
        { rank: '1', stat: 'Agility',        bars: 5, note: 'Primær stat — vælg altid højeste item level' },
        { rank: '2', stat: 'Critical Strike', bars: 5, note: 'Øger Aimed Shot og Rapid Fire-skade enormt' },
        { rank: '3', stat: 'Haste',           bars: 4, note: 'Reducerer Aimed Shot cast-tid — flere skud per minut' },
        { rank: '4', stat: 'Mastery',         bars: 3, note: 'Øger Aimed Shot og Arcane Shot-skade' },
        { rank: '5', stat: 'Versatility',     bars: 2, note: 'Flad % bonus — mindst værdifuld for MM' },
      ],
    },
  },

  cooldowns: {
    nl: [
      { spell: 'Trueshot',             cd: '2 min',   effect: 'Verhoogt Aimed Shot schade + verlaagt cooldown',       when: 'On cooldown — nooit bewaren' },
      { spell: 'Rapid Fire',           cd: '20 sec',  effect: 'Kanaal: hoge schade in korte tijd',                    when: 'On cooldown — combineer met Aimed Shot' },
      { spell: 'Exhilaration',         cd: '1.5 min', effect: 'Instant 30% HP heal voor jezelf',                      when: 'Onder ~60% HP' },
      { spell: 'Aspect of the Turtle', cd: '3 min',   effect: '100% immune voor 8 sec — stop met aanvallen!',         when: 'Absolute noodsituatie of zware mechanic' },
      { spell: 'Feign Death',          cd: '30 sec',  effect: 'Aggro-dump — verwijdert je van aanvalslijst',           when: 'Aggro-probleem of wipe-situatie' },
      { spell: 'Intimidation',         cd: '1 min',   effect: '5 sec stun op doel',                                   when: 'Interrupt of noodstop van cast' },
      { spell: 'Misdirection',         cd: '30 sec',  effect: 'Stuurt jouw threat naar tank',                         when: 'Bij pulls of aggro-probleem' },
    ],
    en: [
      { spell: 'Trueshot',             cd: '2 min',   effect: 'Increases Aimed Shot damage + reduces cooldowns',       when: 'On cooldown — never save' },
      { spell: 'Rapid Fire',           cd: '20 sec',  effect: 'Channel: high damage in short time',                   when: 'On cooldown — combine with Aimed Shot' },
      { spell: 'Exhilaration',         cd: '1.5 min', effect: 'Instant 30% HP heal for yourself',                     when: 'Below ~60% HP' },
      { spell: 'Aspect of the Turtle', cd: '3 min',   effect: '100% immune for 8 sec — stop attacking!',              when: 'Absolute emergency or heavy mechanic' },
      { spell: 'Feign Death',          cd: '30 sec',  effect: 'Aggro dump — removes you from attack list',            when: 'Aggro problem or wipe situation' },
      { spell: 'Intimidation',         cd: '1 min',   effect: '5 sec stun on target',                                 when: 'Interrupt or emergency stop of cast' },
      { spell: 'Misdirection',         cd: '30 sec',  effect: 'Sends your threat to tank',                            when: 'On pulls or aggro problem' },
    ],
    da: [
      { spell: 'Trueshot',             cd: '2 min',   effect: 'Øger Aimed Shot-skade + reducerer cooldowns',          when: 'On cooldown — gem aldrig' },
      { spell: 'Rapid Fire',           cd: '20 sec',  effect: 'Kanal: høj skade på kort tid',                        when: 'On cooldown — kombiner med Aimed Shot' },
      { spell: 'Exhilaration',         cd: '1.5 min', effect: 'Øjeblikkelig 30% HP heal til dig selv',               when: 'Under ~60% HP' },
      { spell: 'Aspect of the Turtle', cd: '3 min',   effect: '100% immun i 8 sek — stop med at angribe!',           when: 'Absolut nødsituation eller tung mechanic' },
      { spell: 'Feign Death',          cd: '30 sec',  effect: 'Aggro-dump — fjerner dig fra angrebslisten',          when: 'Aggro-problem eller wipe-situation' },
      { spell: 'Intimidation',         cd: '1 min',   effect: '5 sek bedøvelse på mål',                              when: 'Afbryd eller nødstop af cast' },
      { spell: 'Misdirection',         cd: '30 sec',  effect: 'Sender din trussel til tank',                         when: 'Ved pulls eller aggro-problem' },
    ],
  },

  utility: {
    nl: [
      { spell: 'Counter Shot',          type: 'Interrupt', note: 'Jouw kick — altijd makkro met Focus/Mouseover' },
      { spell: 'Intimidation',          type: 'Stun',      note: '5 sec stun — voor niet-interruptbare casts' },
      { spell: 'Freezing Trap',         type: 'CC',        note: '60 sec freeze op één target — goud in M+' },
      { spell: 'Tar Trap',              type: 'Slow',      note: 'Vertraagt vijanden — voor kiting' },
      { spell: "Hunter's Mark",         type: 'Debuff',    note: 'Verhoogt schade — altijd actief houden' },
      { spell: 'Misdirection',          type: 'Threat',    note: 'Geeft threat aan tank — bij pulls gebruiken' },
      { spell: 'Disengage',             type: 'Mobility',  note: 'Sprong achteruit — afstand creëren' },
    ],
    en: [
      { spell: 'Counter Shot',          type: 'Interrupt', note: 'Your kick — always macro with Focus/Mouseover' },
      { spell: 'Intimidation',          type: 'Stun',      note: '5 sec stun — for non-interruptable casts' },
      { spell: 'Freezing Trap',         type: 'CC',        note: '60 sec freeze on one target — gold in M+' },
      { spell: 'Tar Trap',              type: 'Slow',      note: 'Slows enemies — for kiting' },
      { spell: "Hunter's Mark",         type: 'Debuff',    note: 'Increases damage — always keep active' },
      { spell: 'Misdirection',          type: 'Threat',    note: 'Gives threat to tank — use on pulls' },
      { spell: 'Disengage',             type: 'Mobility',  note: 'Leap backwards — create distance' },
    ],
    da: [
      { spell: 'Counter Shot',          type: 'Afbryd',    note: 'Dit spark — lav altid makro med Focus/Mouseover' },
      { spell: 'Intimidation',          type: 'Bedøv',     note: '5 sek bedøvelse — til ikke-afbrydbare casts' },
      { spell: 'Freezing Trap',         type: 'CC',        note: '60 sek frys på ét mål — guld i M+' },
      { spell: 'Tar Trap',              type: 'Slow',      note: 'Sinker fjender — til kiting' },
      { spell: "Hunter's Mark",         type: 'Debuff',    note: 'Øger skade — hold altid aktiv' },
      { spell: 'Misdirection',          type: 'Trussel',   note: 'Giver trussel til tank — brug ved pulls' },
      { spell: 'Disengage',             type: 'Mobilitet', note: 'Spring baglæns — skab afstand' },
    ],
  },

  tips: {
    nl: [
      { icon: '🎯', title: 'Precise Shots = gratis schade',  text: 'Na elke Aimed Shot heb je 2 gratis Arcane Shots of Multishots. Gebruik ze altijd op — nooit laten verlopen.' },
      { icon: '⚡', title: 'Rapid Fire + Aimed Shot combo',   text: 'Rapid Fire direct na Aimed Shot casten of andersom. Beide schalen met elkaar — dit is jouw grootste schade-window.' },
      { icon: '💥', title: 'Trueshot timing',                 text: 'Gebruik Trueshot altijd on cooldown. In Trueshot: zoveel mogelijk Aimed Shots. Nooit sparen voor "betere momenten".' },
      { icon: '🐢', title: 'Stillstand bij Aimed Shot',       text: 'Aimed Shot vereist stilstand. Plan je positie vóórdat de pull begint. Gebruik Disengage om snel te herpositioneren.' },
      { icon: '❄',  title: 'Freezing Trap = skip-tool',      text: 'In M+: Freezing Trap is goud voor skips en CC. Coördineer met de tank wie wat CCt.' },
      { icon: '📏', title: 'Afstand is overleving',           text: 'MM heeft geen pet-tank. Zorg altijd voor maximale afstand en gebruik Disengage + Cheetah actief.' },
      { icon: '🦵', title: 'Counter Shot timing',             text: 'Wacht niet tot de cast bijna klaar is — interrupt vroeg. Maak een Focus Kick macro voor betrouwbare kicks.' },
      { icon: '🎭', title: 'Feign Death = panic knop',        text: 'Verwijdert je van de agressie-lijst. Sommige boss-mechanics negeren het wel — test eerst!' },
    ],
    en: [
      { icon: '🎯', title: 'Precise Shots = free damage',    text: 'After every Aimed Shot you have 2 free Arcane Shots or Multishots. Always spend them — never let them expire.' },
      { icon: '⚡', title: 'Rapid Fire + Aimed Shot combo',   text: 'Cast Rapid Fire directly after Aimed Shot or vice versa. Both scale with each other — this is your biggest damage window.' },
      { icon: '💥', title: 'Trueshot timing',                 text: 'Always use Trueshot on cooldown. During Trueshot: as many Aimed Shots as possible. Never save for "better moments".' },
      { icon: '🐢', title: 'Stand still for Aimed Shot',      text: 'Aimed Shot requires standing still. Plan your position before the pull starts. Use Disengage to quickly reposition.' },
      { icon: '❄',  title: 'Freezing Trap = skip tool',      text: 'In M+: Freezing Trap is gold for skips and CC. Coordinate with the tank on who CCs what.' },
      { icon: '📏', title: 'Distance is survival',            text: 'MM has no pet tank. Always maintain maximum distance and actively use Disengage + Cheetah.' },
      { icon: '🦵', title: 'Counter Shot timing',             text: 'Do not wait until the cast is almost done — interrupt early. Make a Focus Kick macro for reliable kicks.' },
      { icon: '🎭', title: 'Feign Death = panic button',      text: 'Removes you from the aggro list. Some boss mechanics ignore it — test first!' },
    ],
    da: [
      { icon: '🎯', title: 'Precise Shots = gratis skade',   text: 'Efter hver Aimed Shot har du 2 gratis Arcane Shots eller Multishots. Brug dem altid — lad dem aldrig udløbe.' },
      { icon: '⚡', title: 'Rapid Fire + Aimed Shot combo',   text: 'Kast Rapid Fire direkte efter Aimed Shot eller omvendt. Begge skalerer med hinanden — dette er dit største skade-vindue.' },
      { icon: '💥', title: 'Trueshot timing',                 text: 'Brug altid Trueshot on cooldown. Under Trueshot: så mange Aimed Shots som muligt. Gem den aldrig til "bedre øjeblikke".' },
      { icon: '🐢', title: 'Stå stille ved Aimed Shot',      text: 'Aimed Shot kræver stilstand. Planlæg din position før trækket starter. Brug Disengage til hurtig omplacering.' },
      { icon: '❄',  title: 'Freezing Trap = skip-værktøj',  text: 'I M+: Freezing Trap er guld til skips og CC. Koordiner med tanken om hvem der CC\'er hvad.' },
      { icon: '📏', title: 'Afstand er overlevelse',          text: 'MM har ingen kæledyr-tank. Oprethold altid maksimal afstand og brug Disengage + Cheetah aktivt.' },
      { icon: '🦵', title: 'Counter Shot timing',             text: 'Vent ikke til castet næsten er færdigt — afbryd tidligt. Lav en Focus Kick-makro for pålidelige sparks.' },
      { icon: '🎭', title: 'Feign Death = panikknap',         text: 'Fjerner dig fra aggro-listen. Nogle boss-mechanics ignorerer det — test først!' },
    ],
  },

  macros: {
    nl: [
      { name: 'Counter Shot (Focus Kick)', code: '#showtooltip Counter Shot\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Counter Shot', note: 'Kick op focus > mouseover > target. Essentieel in M+!' },
      { name: 'Aimed Shot + Rapid Fire', code: '#showtooltip Aimed Shot\n/cast Aimed Shot\n/cast Rapid Fire', note: 'Combineert beide in één macro — let op GCD timing!' },
      { name: 'Trueshot + Rapid Fire', code: '#showtooltip Trueshot\n/cast Trueshot\n/cast Rapid Fire', note: 'Burst opener — activeer altijd samen.' },
      { name: 'Freezing Trap (mouseover)', code: '#showtooltip Freezing Trap\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Freezing Trap', note: 'CC zonder target te wisselen.' },
      { name: 'Misdirection (op tank)', code: '#showtooltip Misdirection\n/cast [@focus,help,nodead][@mouseover,help,nodead][@pet] Misdirection', note: 'Focus tank instellen = altijd klaar voor grote pulls.' },
    ],
    en: [
      { name: 'Counter Shot (Focus Kick)', code: '#showtooltip Counter Shot\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Counter Shot', note: 'Kick on focus > mouseover > target. Essential in M+!' },
      { name: 'Aimed Shot + Rapid Fire', code: '#showtooltip Aimed Shot\n/cast Aimed Shot\n/cast Rapid Fire', note: 'Combines both in one macro — note GCD timing!' },
      { name: 'Trueshot + Rapid Fire', code: '#showtooltip Trueshot\n/cast Trueshot\n/cast Rapid Fire', note: 'Burst opener — always activate together.' },
      { name: 'Freezing Trap (mouseover)', code: '#showtooltip Freezing Trap\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Freezing Trap', note: 'CC without switching target.' },
      { name: 'Misdirection (to tank)', code: '#showtooltip Misdirection\n/cast [@focus,help,nodead][@mouseover,help,nodead][@pet] Misdirection', note: 'Set focus to tank = always ready for big pulls.' },
    ],
    da: [
      { name: 'Counter Shot (Focus Kick)', code: '#showtooltip Counter Shot\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Counter Shot', note: 'Spark på focus > mouseover > mål. Essentiel i M+!' },
      { name: 'Aimed Shot + Rapid Fire', code: '#showtooltip Aimed Shot\n/cast Aimed Shot\n/cast Rapid Fire', note: 'Kombinerer begge i én makro — bemærk GCD timing!' },
      { name: 'Trueshot + Rapid Fire', code: '#showtooltip Trueshot\n/cast Trueshot\n/cast Rapid Fire', note: 'Burst opener — aktiver altid sammen.' },
      { name: 'Freezing Trap (mouseover)', code: '#showtooltip Freezing Trap\n/cast [@mouseover,harm,nodead][@target,harm,nodead] Freezing Trap', note: 'CC uden at skifte mål.' },
      { name: 'Misdirection (til tank)', code: '#showtooltip Misdirection\n/cast [@focus,help,nodead][@mouseover,help,nodead][@pet] Misdirection', note: 'Sæt focus til tank = altid klar til store pulls.' },
    ],
  },

  resource_info: {
    nl: {
      intro: 'Focus (0–120) werkt anders dan bij BM — MM genereert minder Focus passief. Steady Shot is jouw Focus-generator als je op leeg zit.',
      generate: [
        { spell: 'Auto-attacks',  note: '+2 Focus per aanval (passief)' },
        { spell: 'Steady Shot',   note: 'Hoofdgenerator — gebruik als filler' },
        { spell: 'Trueshot',      note: 'Verlaagt Focus-kosten van Aimed Shot tijdelijk' },
      ],
      spend: [
        { spell: 'Aimed Shot',    note: 'Hoog Focus-verbruik — alleen met Precise Shots!' },
        { spell: 'Arcane Shot',   note: 'Matig verbruik — gebruik Precise Shots procs' },
        { spell: 'Multishot',     note: 'AoE Focus-dump' },
      ],
      pet_tip: 'MM speelt zonder vaste pet. Je kunt tijdelijk een Lone Wolf bonus actief hebben (talent). Geen Frenzy stacks — Focus-management is je grootste uitdaging.',
      pets: [
        { type: 'Geen pet 🎯',   bonus: 'Lone Wolf bonus — extra schade zonder pet', use: 'Standaard voor MM — aanbevolen' },
        { type: 'Ferocity 🟢',   bonus: 'Leech — extra survivability',               use: 'Als je extra survival wil of pet nodig hebt voor tank' },
      ],
    },
    en: {
      intro: 'Focus (0–120) works differently than BM — MM generates less Focus passively. Steady Shot is your Focus generator when you run low.',
      generate: [
        { spell: 'Auto-attacks',  note: '+2 Focus per attack (passive)' },
        { spell: 'Steady Shot',   note: 'Main generator — use as filler' },
        { spell: 'Trueshot',      note: 'Temporarily reduces Focus cost of Aimed Shot' },
      ],
      spend: [
        { spell: 'Aimed Shot',    note: 'High Focus cost — only with Precise Shots!' },
        { spell: 'Arcane Shot',   note: 'Moderate cost — spend Precise Shots procs' },
        { spell: 'Multishot',     note: 'AoE Focus dump' },
      ],
      pet_tip: 'MM plays without a permanent pet. You can have the Lone Wolf bonus active (talent). No Frenzy stacks — Focus management is your biggest challenge.',
      pets: [
        { type: 'No pet 🎯',     bonus: 'Lone Wolf bonus — extra damage without pet',      use: 'Standard for MM — recommended' },
        { type: 'Ferocity 🟢',   bonus: 'Leech — extra survivability',                     use: 'If you want extra survival or need a pet to tank' },
      ],
    },
    da: {
      intro: 'Focus (0–120) fungerer anderledes end BM — MM genererer mindre Focus passivt. Steady Shot er din Focus-generator når du løber tør.',
      generate: [
        { spell: 'Auto-angreb',   note: '+2 Focus per angreb (passiv)' },
        { spell: 'Steady Shot',   note: 'Hoved-generator — brug som fyldstof' },
        { spell: 'Trueshot',      note: 'Reducerer midlertidigt Focus-omkostning for Aimed Shot' },
      ],
      spend: [
        { spell: 'Aimed Shot',    note: 'Høj Focus-omkostning — kun med Precise Shots!' },
        { spell: 'Arcane Shot',   note: 'Moderat omkostning — brug Precise Shots procs' },
        { spell: 'Multishot',     note: 'AoE Focus-dump' },
      ],
      pet_tip: 'MM spiller uden fast kæledyr. Du kan have Lone Wolf-bonussen aktiv (talent). Ingen Frenzy-stakke — Focus management er din største udfordring.',
      pets: [
        { type: 'Intet kæledyr 🎯', bonus: 'Lone Wolf-bonus — ekstra skade uden kæledyr', use: 'Standard for MM — anbefalet' },
        { type: 'Ferocity 🟢',      bonus: 'Leech — ekstra overlevelsesevne',              use: 'Hvis du vil have ekstra overlevelse eller kæledyr til tank' },
      ],
    },
  },
};

if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
ALL_SPECS.push(SPEC_MM_HUNTER);

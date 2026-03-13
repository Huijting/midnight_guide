if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_DESTRUCTION_WARLOCK = {
  id: 'destruction_warlock',
  icon: '🔥',
  class: 'Warlock',
  spec:   { nl: 'Destruction', en: 'Destruction', da: 'Destruction' },
  role:   'dps',
  armor:  'Cloth',
  weapon: { nl: 'Staf of eenhandig + offhand', en: 'Staff or one-hand + offhand', da: 'Stav eller enhånds + offhand' },
  resource: 'Soul Shards',
  patch: '1.0',
  color: '#8788EE',

  summary: {
    nl: 'Destruction Warlock zet alles in brand. Bouw Shards op via Incinerate, dump ze met Chaos Bolt voor indrukwekkende single target burst. Eenvoudigste Warlock spec om te leren.',
    en: 'Destruction Warlock sets everything on fire. Build Shards via Incinerate, dump them with Chaos Bolt for impressive single target burst. Easiest Warlock spec to learn.',
    da: 'Destruction Warlock sætter alt i brand. Opbyg Shards via Incinerate, dump dem med Chaos Bolt for imponerende single target burst. Nemmeste Warlock-spec at lære.',
  },
  pros: {
    nl: ['Eenvoudige en intuïtieve rotation', 'Uitstekende single target burst', 'Chaos Bolt is één van de indrukwekkendste spells visueel', 'Goed in execute phase'],
    en: ['Simple and intuitive rotation', 'Excellent single target burst', 'Chaos Bolt is one of the most impressive spells visually', 'Good in execute phase'],
    da: ['Simpel og intuitiv rotation', 'Fremragende single target burst', 'Chaos Bolt er en af de mest imponerende trylleformularer visuelt', 'God i execute-fase'],
  },
  cons: {
    nl: ['Minder sterk in AoE dan Affliction of Demo', 'Chaos Bolt heeft lange cast time — kwetsbaar bij movement', 'Burst is afhankelijk van Shard pooling'],
    en: ['Less strong in AoE than Affliction or Demo', 'Chaos Bolt has long cast time — vulnerable during movement', 'Burst depends on Shard pooling'],
    da: ['Mindre stærk i AoE end Affliction eller Demo', 'Chaos Bolt har lang casttid — sårbar under bevægelse', 'Burst afhænger af Shard-pooling'],
  },

  cheatsheet: {
    nl: {
      opener: 'Immolate → Conflagrate → Incinerate x2 → Chaos Bolt (4+ Shards) → Summon Infernal → Chaos Bolt spam',
      single: 'Immolate actief → Conflagrate op CD → Incinerate filler → Chaos Bolt bij 3+ Shards',
      aoe:    'Immolate verspreiden → Rain of Fire → Chaos Bolt (raakt alles met Fire and Brimstone talent)',
      rules: [
        'Immolate altijd actief op target',
        'Conflagrate altijd op cooldown — genereert Shards',
        'Chaos Bolt bij 3+ Shards — grootste schade button',
        'Summon Infernal altijd met Shards opgeslagen voor Chaos Bolt spam',
        'Backdraft procs (van Conflagrate) altijd voor Chaos Bolt gebruiken',
      ],
    },
    en: {
      opener: 'Immolate → Conflagrate → Incinerate x2 → Chaos Bolt (4+ Shards) → Summon Infernal → Chaos Bolt spam',
      single: 'Immolate active → Conflagrate on CD → Incinerate filler → Chaos Bolt at 3+ Shards',
      aoe:    'Spread Immolate → Rain of Fire → Chaos Bolt (hits all with Fire and Brimstone talent)',
      rules: [
        'Immolate always active on target',
        'Conflagrate always on cooldown — generates Shards',
        'Chaos Bolt at 3+ Shards — biggest damage button',
        'Summon Infernal always with Shards saved for Chaos Bolt spam',
        'Backdraft procs (from Conflagrate) always use before Chaos Bolt',
      ],
    },
    da: {
      opener: 'Immolate → Conflagrate → Incinerate x2 → Chaos Bolt (4+ Shards) → Summon Infernal → Chaos Bolt spam',
      single: 'Immolate aktiv → Conflagrate på CD → Incinerate fylder → Chaos Bolt ved 3+ Shards',
      aoe:    'Spred Immolate → Rain of Fire → Chaos Bolt (rammer alt med Fire and Brimstone talent)',
      rules: [
        'Immolate altid aktiv på mål',
        'Conflagrate altid på cooldown — genererer Shards',
        'Chaos Bolt ved 3+ Shards — største skadeknap',
        'Summon Infernal altid med Shards gemt til Chaos Bolt-spam',
        'Backdraft-procs (fra Conflagrate) brug altid inden Chaos Bolt',
      ],
    },
  },

  rotation: {
    nl: {
      apex_tip: '💡 Backdraft (proc van Conflagrate) maakt je volgende 2 Incinerates en Chaos Bolt 30% sneller. Gebruik het altijd direct!',
      opener: [
        { spell: 'Immolate', why: 'DoT aanzetten — vereist voor Conflagrate' },
        { spell: 'Conflagrate', why: 'Shard generator + Backdraft proc' },
        { spell: 'Incinerate x2', why: 'Backdraft gebruiken — snellere casts' },
        { spell: 'Chaos Bolt', why: 'Bij 4+ Shards — enorme single target hit' },
        { spell: 'Summon Infernal', why: 'Grootste cooldown — samen met Shard dump' },
      ],
      single: [
        { spell: 'Immolate', why: 'Hernieuwen als <5 sec resterend' },
        { spell: 'Conflagrate', why: 'Altijd op CD — Backdraft + Shard generatie' },
        { spell: 'Chaos Bolt', why: '3+ Shards — altijd direct dumpen' },
        { spell: 'Incinerate', why: 'Filler — gebruikt Backdraft procs' },
        { spell: 'Channel Demonfire', why: 'Krachtige channel als talent — na Chaos Bolt' },
      ],
      aoe: [
        { spell: 'Immolate op targets', why: 'DoT op hoofd targets' },
        { spell: 'Rain of Fire', why: 'AoE channel op mob pack' },
        { spell: 'Chaos Bolt (F&B)', why: 'Fire and Brimstone: Chaos Bolt raakt alle targets' },
        { spell: 'Conflagrate', why: 'Altijd op CD ook in AoE' },
      ],
    },
    en: {
      apex_tip: '💡 Backdraft (proc from Conflagrate) makes your next 2 Incinerates and Chaos Bolt 30% faster. Always use it immediately!',
      opener: [
        { spell: 'Immolate', why: 'Apply DoT — required for Conflagrate' },
        { spell: 'Conflagrate', why: 'Shard generator + Backdraft proc' },
        { spell: 'Incinerate x2', why: 'Use Backdraft — faster casts' },
        { spell: 'Chaos Bolt', why: 'At 4+ Shards — massive single target hit' },
        { spell: 'Summon Infernal', why: 'Biggest cooldown — together with Shard dump' },
      ],
      single: [
        { spell: 'Immolate', why: 'Refresh when <5 sec remaining' },
        { spell: 'Conflagrate', why: 'Always on CD — Backdraft + Shard generation' },
        { spell: 'Chaos Bolt', why: '3+ Shards — always dump immediately' },
        { spell: 'Incinerate', why: 'Filler — uses Backdraft procs' },
        { spell: 'Channel Demonfire', why: 'Powerful channel as talent — after Chaos Bolt' },
      ],
      aoe: [
        { spell: 'Immolate on targets', why: 'DoT on main targets' },
        { spell: 'Rain of Fire', why: 'AoE channel on mob pack' },
        { spell: 'Chaos Bolt (F&B)', why: 'Fire and Brimstone: Chaos Bolt hits all targets' },
        { spell: 'Conflagrate', why: 'Always on CD even in AoE' },
      ],
    },
    da: {
      apex_tip: '💡 Backdraft (proc fra Conflagrate) gør dine næste 2 Incinerates og Chaos Bolt 30% hurtigere. Brug det altid straks!',
      opener: [
        { spell: 'Immolate', why: 'Påfør DoT — kræves til Conflagrate' },
        { spell: 'Conflagrate', why: 'Shard-generator + Backdraft proc' },
        { spell: 'Incinerate x2', why: 'Brug Backdraft — hurtigere casts' },
        { spell: 'Chaos Bolt', why: 'Ved 4+ Shards — massivt single target træf' },
        { spell: 'Summon Infernal', why: 'Største cooldown — sammen med Shard-dump' },
      ],
      single: [
        { spell: 'Immolate', why: 'Forny når <5 sek tilbage' },
        { spell: 'Conflagrate', why: 'Altid på CD — Backdraft + Shard-generering' },
        { spell: 'Chaos Bolt', why: '3+ Shards — dump altid straks' },
        { spell: 'Incinerate', why: 'Fylder — bruger Backdraft-procs' },
        { spell: 'Channel Demonfire', why: 'Kraftfuld channel som talent — efter Chaos Bolt' },
      ],
      aoe: [
        { spell: 'Immolate på mål', why: 'DoT på hovedmål' },
        { spell: 'Rain of Fire', why: 'AoE-channel på fjendergruppe' },
        { spell: 'Chaos Bolt (F&B)', why: 'Fire and Brimstone: Chaos Bolt rammer alle mål' },
        { spell: 'Conflagrate', why: 'Altid på CD selv i AoE' },
      ],
    },
  },

  stats: {
    nl: {
      tip: 'Haste en Critical Strike zijn beide uitstekend voor Destruction — Haste voor Incinerate speed, Crit voor Chaos Bolt crits.',
      list: [
        { rank:1, stat:'Intellect',       bars:5, note:'Primaire stat' },
        { rank:2, stat:'Critical Strike', bars:4, note:'Chaos Bolt crits zijn enorm — elke 1% crit is waardevol' },
        { rank:3, stat:'Haste',           bars:4, note:'Snellere Incinerate = meer Shards' },
        { rank:4, stat:'Mastery',         bars:2, note:'Verhoogt Fire schade (Mastery: Chaotic Energies)' },
        { rank:5, stat:'Versatility',     bars:1, note:'Laagste prioriteit' },
      ],
    },
    en: {
      tip: 'Haste and Critical Strike are both excellent for Destruction — Haste for Incinerate speed, Crit for Chaos Bolt crits.',
      list: [
        { rank:1, stat:'Intellect',       bars:5, note:'Primary stat' },
        { rank:2, stat:'Critical Strike', bars:4, note:'Chaos Bolt crits are massive — every 1% crit is valuable' },
        { rank:3, stat:'Haste',           bars:4, note:'Faster Incinerate = more Shards' },
        { rank:4, stat:'Mastery',         bars:2, note:'Increases Fire damage (Mastery: Chaotic Energies)' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lowest priority' },
      ],
    },
    da: {
      tip: 'Haste og Critical Strike er begge fremragende for Destruction — Haste til Incinerate-hastighed, Crit til Chaos Bolt-crits.',
      list: [
        { rank:1, stat:'Intellect',       bars:5, note:'Primær stat' },
        { rank:2, stat:'Critical Strike', bars:4, note:'Chaos Bolt-crits er massive — hver 1% crit er værdifuld' },
        { rank:3, stat:'Haste',           bars:4, note:'Hurtigere Incinerate = flere Shards' },
        { rank:4, stat:'Mastery',         bars:2, note:'Øger ild-skade (Mastery: Chaotic Energies)' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lavest prioritet' },
      ],
    },
  },

  cooldowns: {
    nl: [
      { spell:'Summon Infernal',    cd:'3 min',  effect:'Krachtige demon + stunt AoE bij landing 3 sec', when:'Op pull — altijd met 4+ Shards voor Chaos Bolt spam erna' },
      { spell:'Conflagrate',        cd:'12 sec', effect:'Shard generatie + Backdraft proc', when:'Altijd op cooldown — nooit wachten' },
      { spell:'Havoc',              cd:'25 sec', effect:'Jouw volgende single target spell raakt ook een 2e target', when:'Bij 2 targets — verdubbelt Chaos Bolt schade effectief' },
      { spell:'Dark Soul: Instability', cd:'2 min', effect:'+30% Crit 20 sec', when:'Samen met Infernal voor maximale burst' },
      { spell:'Channel Demonfire',  cd:'25 sec', effect:'Krachtige channel met 15 Imps', when:'Direct na Chaos Bolt voor maximaal effect' },
    ],
    en: [
      { spell:'Summon Infernal',    cd:'3 min',  effect:'Powerful demon + stun AoE on landing 3 sec', when:'On pull — always with 4+ Shards for Chaos Bolt spam after' },
      { spell:'Conflagrate',        cd:'12 sec', effect:'Shard generation + Backdraft proc', when:'Always on cooldown — never wait' },
      { spell:'Havoc',              cd:'25 sec', effect:'Your next single target spell also hits a 2nd target', when:'At 2 targets — effectively doubles Chaos Bolt damage' },
      { spell:'Dark Soul: Instability', cd:'2 min', effect:'+30% Crit 20 sec', when:'Together with Infernal for maximum burst' },
      { spell:'Channel Demonfire',  cd:'25 sec', effect:'Powerful channel with 15 Imps', when:'Directly after Chaos Bolt for maximum effect' },
    ],
    da: [
      { spell:'Summon Infernal',    cd:'3 min',  effect:'Kraftfuld dæmon + stun AoE ved landing i 3 sek', when:'På pull — altid med 4+ Shards til Chaos Bolt-spam bagefter' },
      { spell:'Conflagrate',        cd:'12 sec', effect:'Shard-generering + Backdraft proc', when:'Altid på cooldown — vent aldrig' },
      { spell:'Havoc',              cd:'25 sec', effect:'Din næste single target trylleformel rammer også et 2. mål', when:'Ved 2 mål — fordobler effektivt Chaos Bolt-skade' },
      { spell:'Dark Soul: Instability', cd:'2 min', effect:'+30% Crit i 20 sek', when:'Sammen med Infernal til maksimal burst' },
      { spell:'Channel Demonfire',  cd:'25 sec', effect:'Kraftfuld channel med 15 Imps', when:'Direkte efter Chaos Bolt for maksimal effekt' },
    ],
  },

  utility: {
    nl: [
      { spell:'Healthstone',     type:'Heal',      note:'Gratis HP restore — altijd in je bags' },
      { spell:'Soulstone',       type:'Rez',       note:'Pre-place voor auto-rez bij dood' },
      { spell:'Banish',          type:'CC',        note:'Verwijdert Demon/Elemental uit fight' },
      { spell:'Demonic Circle',  type:'Mobiliteit', note:'Teleporteer terug naar je cirkel' },
      { spell:'Havoc',           type:'Cleave',    note:'Jouw ST spells raken ook een 2e target 10 sec' },
    ],
    en: [
      { spell:'Healthstone',     type:'Heal',      note:'Free HP restore — always in your bags' },
      { spell:'Soulstone',       type:'Rez',       note:'Pre-place for auto-rez on death' },
      { spell:'Banish',          type:'CC',        note:'Removes Demon/Elemental from fight' },
      { spell:'Demonic Circle',  type:'Mobility',  note:'Teleport back to your circle' },
      { spell:'Havoc',           type:'Cleave',    note:'Your ST spells also hit a 2nd target 10 sec' },
    ],
    da: [
      { spell:'Healthstone',     type:'Healing',   note:'Gratis HP-genopretning — altid i din taske' },
      { spell:'Soulstone',       type:'Genoplivning', note:'Pre-placer til auto-genoplivning ved død' },
      { spell:'Banish',          type:'CC',        note:'Fjerner Demon/Elemental fra kampen' },
      { spell:'Demonic Circle',  type:'Mobilitet', note:'Teleportér tilbage til din cirkel' },
      { spell:'Havoc',           type:'Cleave',    note:'Dine ST trylleformularer rammer også et 2. mål i 10 sek' },
    ],
  },

  tips: {
    nl: [
      { icon:'🔥', title:'Chaos Bolt = voldoening', text:'Een Chaos Bolt crit kan voor enorme schade zorgen. Zorg altijd dat je 3+ Shards hebt voor Infernal en dump ze dan direct in Chaos Bolt. Dat is de kern van Destruction.' },
      { icon:'⚡', title:'Backdraft nooit verspillen', text:'Conflagrate geeft je Backdraft: 30% snellere Chaos Bolt en Incinerate. Gebruik altijd direct — het verlopen van Backdraft is verloren schade.' },
      { icon:'👹', title:'Havoc = gratis cleave', text:'Bij 2 targets: Havoc op het andere target, dan Chaos Bolt op het hoofd target. Beide targets krijgen volle Chaos Bolt schade. Enorm efficient.' },
      { icon:'🌧️', title:'Rain of Fire vs Chaos Bolt', text:'Bij 3+ targets: Rain of Fire spam is beter dan Chaos Bolt. Bij 1-2 targets blijf je altijd bij Chaos Bolt als Shard dump.' },
      { icon:'💣', title:'Infernal timing', text:'Summon Infernal is je grootste cooldown. Zorg voor 4+ Shards voor de summon — erna spam je direct Chaos Bolt met volle Shards in het Infernal window.' },
    ],
    en: [
      { icon:'🔥', title:'Chaos Bolt = satisfaction', text:'A Chaos Bolt crit can deal massive damage. Always make sure you have 3+ Shards before Infernal and dump them immediately in Chaos Bolt. That\'s the core of Destruction.' },
      { icon:'⚡', title:'Never waste Backdraft', text:'Conflagrate gives you Backdraft: 30% faster Chaos Bolt and Incinerate. Always use immediately — letting Backdraft expire is lost damage.' },
      { icon:'👹', title:'Havoc = free cleave', text:'At 2 targets: Havoc on the other target, then Chaos Bolt on the main target. Both targets receive full Chaos Bolt damage. Enormously efficient.' },
      { icon:'🌧️', title:'Rain of Fire vs Chaos Bolt', text:'At 3+ targets: Rain of Fire spam is better than Chaos Bolt. At 1-2 targets always stick with Chaos Bolt as the Shard dump.' },
      { icon:'💣', title:'Infernal timing', text:'Summon Infernal is your biggest cooldown. Make sure you have 4+ Shards before the summon — then immediately spam Chaos Bolt with full Shards in the Infernal window.' },
    ],
    da: [
      { icon:'🔥', title:'Chaos Bolt = tilfredsstillelse', text:'En Chaos Bolt-crit kan gøre massiv skade. Sørg altid for at have 3+ Shards inden Infernal og dump dem straks i Chaos Bolt. Det er kernen i Destruction.' },
      { icon:'⚡', title:'Spild aldrig Backdraft', text:'Conflagrate giver dig Backdraft: 30% hurtigere Chaos Bolt og Incinerate. Brug altid straks — at lade Backdraft udløbe er tabt skade.' },
      { icon:'👹', title:'Havoc = gratis cleave', text:'Ved 2 mål: Havoc på det andet mål, derefter Chaos Bolt på hovedmålet. Begge mål modtager fuld Chaos Bolt-skade. Enormt effektivt.' },
      { icon:'🌧️', title:'Rain of Fire vs Chaos Bolt', text:'Ved 3+ mål: Rain of Fire-spam er bedre end Chaos Bolt. Ved 1-2 mål holder du dig altid til Chaos Bolt som Shard-dump.' },
      { icon:'💣', title:'Infernal-timing', text:'Summon Infernal er din største cooldown. Sørg for at have 4+ Shards inden kaldet — bagefter spammer du straks Chaos Bolt med fulde Shards i Infernal-vinduet.' },
    ],
  },

  macros: {
    nl: [
      { name:'Infernal + Dark Soul', code:'/cast Summon Infernal\n/cast Dark Soul: Instability', note:'Maximum burst opener — Infernal + Crit boost tegelijk.' },
      { name:'Havoc op mouseover', code:'/cast [@mouseover,harm][] Havoc', note:'Snel Havoc plaatsen op 2e target voor gratis cleave.' },
      { name:'Soulstone op healer', code:'/cast [@raid2] Soulstone', note:'Pre-place Soulstone op de healer (pas "raid2" aan).' },
    ],
    en: [
      { name:'Infernal + Dark Soul', code:'/cast Summon Infernal\n/cast Dark Soul: Instability', note:'Maximum burst opener — Infernal + Crit boost simultaneously.' },
      { name:'Havoc on mouseover', code:'/cast [@mouseover,harm][] Havoc', note:'Quickly place Havoc on 2nd target for free cleave.' },
      { name:'Soulstone on healer', code:'/cast [@raid2] Soulstone', note:'Pre-place Soulstone on the healer (adjust "raid2").' },
    ],
    da: [
      { name:'Infernal + Dark Soul', code:'/cast Summon Infernal\n/cast Dark Soul: Instability', note:'Maksimalt burst-opener — Infernal + Crit-boost samtidigt.' },
      { name:'Havoc på mouseover', code:'/cast [@mouseover,harm][] Havoc', note:'Sæt hurtigt Havoc på 2. mål til gratis cleave.' },
      { name:'Soulstone på healer', code:'/cast [@raid2] Soulstone', note:'Pre-placer Soulstone på healeren (tilpas "raid2").' },
    ],
  },

  resource_info: {
    nl: {
      intro: 'Destruction gebruikt Soul Shards (0-5). Shards worden gegenereerd via Conflagrate en Incinerate, en gespendeerd via Chaos Bolt. Simpelste Shard economy van de drie Warlock specs.',
      generate: [
        'Conflagrate — 1 Shard per gebruik (meest betrouwbaar)',
        'Incinerate — kans op Shard via Backdraft stacks',
        'Immolate ticks — kleine kans op Shard',
        'Roaring Blaze talent — extra Shard generatie',
      ],
      spend: [
        'Chaos Bolt (1 Shard) — grootste single target schade',
        'Rain of Fire (1 Shard) — AoE channel',
        'Channel Demonfire (talent) — krachtige channel',
      ],
      pet_tip: '💡 Pool Shards vóór Summon Infernal — erna dump je ze direct met Chaos Bolt voor het grootste burst window!',
      pets: [],
    },
    en: {
      intro: 'Destruction uses Soul Shards (0-5). Shards are generated via Conflagrate and Incinerate, and spent via Chaos Bolt. Simplest Shard economy of the three Warlock specs.',
      generate: [
        'Conflagrate — 1 Shard per use (most reliable)',
        'Incinerate — chance for Shard via Backdraft stacks',
        'Immolate ticks — small chance for Shard',
        'Roaring Blaze talent — extra Shard generation',
      ],
      spend: [
        'Chaos Bolt (1 Shard) — biggest single target damage',
        'Rain of Fire (1 Shard) — AoE channel',
        'Channel Demonfire (talent) — powerful channel',
      ],
      pet_tip: '💡 Pool Shards before Summon Infernal — then dump them directly with Chaos Bolt for the biggest burst window!',
      pets: [],
    },
    da: {
      intro: 'Destruction bruger Soul Shards (0-5). Shards genereres via Conflagrate og Incinerate og bruges via Chaos Bolt. Enkleste Shard-økonomi af de tre Warlock-specs.',
      generate: [
        'Conflagrate — 1 Shard per brug (mest pålidelig)',
        'Incinerate — chance for Shard via Backdraft-stacks',
        'Immolate-ticks — lille chance for Shard',
        'Roaring Blaze talent — ekstra Shard-generering',
      ],
      spend: [
        'Chaos Bolt (1 Shard) — største single target skade',
        'Rain of Fire (1 Shard) — AoE-channel',
        'Channel Demonfire (talent) — kraftfuld channel',
      ],
      pet_tip: '💡 Pool Shards inden Summon Infernal — dump dem derefter straks med Chaos Bolt for det største burst-vindue!',
      pets: [],
    },
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Verhoogt Intellect voor 1 uur.',               note:'Altijd actief' },
      { type:'pot',    name:'Potion of Witchcraft',        effect:'Grote Intellect boost 25 sec.',                note:'Gebruik bij Infernal burst window' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Intellect en Stamina via groepsfeast.',       note:'Feast vragen' },
      { type:'food',   name:'Aromatic Seafood Platter',    effect:'Solo food backup.',                            note:'Backup als geen feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primaire stat 1 uur.',                        note:'Altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Increases Intellect for 1 hour.',              note:'Always active' },
      { type:'pot',    name:'Potion of Witchcraft',        effect:'Large Intellect boost 25 sec.',               note:'Use during Infernal burst window' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Intellect and Stamina via group feast.',     note:'Ask for feast' },
      { type:'food',   name:'Aromatic Seafood Platter',    effect:'Solo food backup.',                           note:'Backup if no feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primary stat 1 hour.',                       note:'Always use' },
    ],
    da: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Øger Intellect i 1 time.',                     note:'Altid aktiv' },
      { type:'pot',    name:'Potion of Witchcraft',        effect:'Stor Intellect-boost i 25 sek.',              note:'Brug under Infernal burst-vindue' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Intellect og Stamina via gruppefeast.',      note:'Bed om feast' },
      { type:'food',   name:'Aromatic Seafood Platter',    effect:'Solo-mad backup.',                            note:'Backup hvis ingen feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primær stat 1 time.',                        note:'Brug altid' },
    ],
  },
};

ALL_SPECS.push(SPEC_DESTRUCTION_WARLOCK);

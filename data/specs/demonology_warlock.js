if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_DEMONOLOGY_WARLOCK = {
  id: 'demonology_warlock',
  icon: '👿',
  class: 'Warlock',
  spec:   { nl: 'Demonology', en: 'Demonology', da: 'Demonology' },
  role:   'dps',
  armor:  'Cloth',
  weapon: { nl: 'Staf of eenhandig + offhand', en: 'Staff or one-hand + offhand', da: 'Stav eller enhånds + offhand' },
  resource: 'Soul Shards',
  patch: '1.0',
  color: '#8788EE',

  summary: {
    nl: 'Demonology Warlock bestuurt een leger demonen. Bouw Soul Shards op en stuur golven van Imps en een Dreadstalker-pack erop af. Uitstekende sustained AoE via demonenlegertjes.',
    en: 'Demonology Warlock commands an army of demons. Build Soul Shards and send waves of Imps and a Dreadstalker pack at enemies. Excellent sustained AoE via demon armies.',
    da: 'Demonology Warlock kommanderer en hær af dæmoner. Opbyg Soul Shards og send bølger af Imps og en Dreadstalker-flok mod fjender. Fremragende vedvarende AoE via dæmonhære.',
  },
  pros: {
    nl: ['Zeer sterk in sustained AoE', 'Demonen vechten ook tijdens movement', 'Goede burst via Summon Demonic Tyrant', 'Uniek speelstijl — leger-management'],
    en: ['Very strong in sustained AoE', 'Demons fight even during movement', 'Good burst via Summon Demonic Tyrant', 'Unique playstyle — army management'],
    da: ['Meget stærk i vedvarende AoE', 'Dæmoner kæmper selv under bevægelse', 'God burst via Summon Demonic Tyrant', 'Unik spillestil — hærstyring'],
  },
  cons: {
    nl: ['Lagere single target dan andere Warlock specs', 'Tyrant timing is complex', 'Demonen kunnen sterven bij AoE schade'],
    en: ['Lower single target than other Warlock specs', 'Tyrant timing is complex', 'Demons can die from AoE damage'],
    da: ['Lavere single target end andre Warlock-specs', 'Tyrant-timing er kompleks', 'Dæmoner kan dø af AoE-skade'],
  },

  cheatsheet: {
    nl: {
      opener: 'Hand of Gul\'dan (2 Shards) → Implosion setup → Call Dreadstalkers → Summon Demonic Tyrant',
      single: 'Call Dreadstalkers → Hand of Gul\'dan → Demonbolt (Demonic Core procs) → Summon Demonic Tyrant',
      aoe:    'Hand of Gul\'dan → max Imps → Implosion → Tyrant in groot Imp pack',
      rules: [
        'Nooit Tyrant summonen zonder minstens 4+ demonen actief',
        'Implosion alleen bij 4+ Imps op 2+ targets',
        'Hand of Gul\'dan altijd bij 3-4 Shards (nooit 5)',
        'Demonbolt altijd bij 2 Demonic Core stacks',
        'Call Dreadstalkers altijd op cooldown',
      ],
    },
    en: {
      opener: 'Hand of Gul\'dan (2 Shards) → Implosion setup → Call Dreadstalkers → Summon Demonic Tyrant',
      single: 'Call Dreadstalkers → Hand of Gul\'dan → Demonbolt (Demonic Core procs) → Summon Demonic Tyrant',
      aoe:    'Hand of Gul\'dan → max Imps → Implosion → Tyrant in large Imp pack',
      rules: [
        'Never summon Tyrant without at least 4+ demons active',
        'Implosion only at 4+ Imps on 2+ targets',
        'Hand of Gul\'dan always at 3-4 Shards (never 5)',
        'Demonbolt always at 2 Demonic Core stacks',
        'Call Dreadstalkers always on cooldown',
      ],
    },
    da: {
      opener: 'Hand of Gul\'dan (2 Shards) → Implosion opsætning → Call Dreadstalkers → Summon Demonic Tyrant',
      single: 'Call Dreadstalkers → Hand of Gul\'dan → Demonbolt (Demonic Core procs) → Summon Demonic Tyrant',
      aoe:    'Hand of Gul\'dan → maks Imps → Implosion → Tyrant i stort Imp-pack',
      rules: [
        'Kald aldrig Tyrant uden mindst 4+ aktive dæmoner',
        'Implosion kun ved 4+ Imps på 2+ mål',
        'Hand of Gul\'dan altid ved 3-4 Shards (aldrig 5)',
        'Demonbolt altid ved 2 Demonic Core-stacks',
        'Call Dreadstalkers altid på cooldown',
      ],
    },
  },

  rotation: {
    nl: {
      apex_tip: '💡 Tyrant verlengt de duur van al je actieve demonen. Hoe meer demonen actief tijdens Tyrant, hoe meer totale schade!',
      opener: [
        { spell: 'Hand of Gul\'dan', why: 'Spawnt 3 Wild Imps — eerste demonen' },
        { spell: 'Call Dreadstalkers', why: '2 krachtige demonen + Demonic Core proc' },
        { spell: 'Hand of Gul\'dan (2e)', why: '3 meer Imps — Tyrant pool opbouwen' },
        { spell: 'Summon Demonic Tyrant', why: 'Met 6+ demonen actief — verlengde alles' },
        { spell: 'Demonbolt', why: 'Demonic Core procs spenden' },
      ],
      single: [
        { spell: 'Call Dreadstalkers', why: 'Altijd op CD — sterkste demonenspell' },
        { spell: 'Hand of Gul\'dan', why: 'Bij 3-4 Shards — spawnt Wild Imps' },
        { spell: 'Demonbolt', why: 'Bij 2 Demonic Core stacks — empowered cast' },
        { spell: 'Shadow Bolt', why: 'Filler — genereert ook Demonic Core kans' },
        { spell: 'Summon Demonic Tyrant', why: 'Bij 6+ demonen — verlengde alles' },
      ],
      aoe: [
        { spell: 'Hand of Gul\'dan spam', why: 'Zoveel mogelijk Imps spawnen' },
        { spell: 'Call Dreadstalkers', why: 'Extra krachtige demonen in het pack' },
        { spell: 'Implosion', why: '4+ Imps: teleporteert ze naar target voor explosie' },
        { spell: 'Summon Demonic Tyrant', why: 'Altijd in groot demonenpack voor maximum effect' },
      ],
    },
    en: {
      apex_tip: '💡 Tyrant extends the duration of all your active demons. The more demons active during Tyrant, the more total damage!',
      opener: [
        { spell: 'Hand of Gul\'dan', why: 'Spawns 3 Wild Imps — first demons' },
        { spell: 'Call Dreadstalkers', why: '2 powerful demons + Demonic Core proc' },
        { spell: 'Hand of Gul\'dan (2nd)', why: '3 more Imps — building Tyrant pool' },
        { spell: 'Summon Demonic Tyrant', why: 'With 6+ demons active — extends everything' },
        { spell: 'Demonbolt', why: 'Spending Demonic Core procs' },
      ],
      single: [
        { spell: 'Call Dreadstalkers', why: 'Always on CD — strongest demon spell' },
        { spell: 'Hand of Gul\'dan', why: 'At 3-4 Shards — spawns Wild Imps' },
        { spell: 'Demonbolt', why: 'At 2 Demonic Core stacks — empowered cast' },
        { spell: 'Shadow Bolt', why: 'Filler — also generates Demonic Core chance' },
        { spell: 'Summon Demonic Tyrant', why: 'At 6+ demons — extends everything' },
      ],
      aoe: [
        { spell: 'Hand of Gul\'dan spam', why: 'Spawn as many Imps as possible' },
        { spell: 'Call Dreadstalkers', why: 'Extra powerful demons in the pack' },
        { spell: 'Implosion', why: '4+ Imps: teleports them to target for explosion' },
        { spell: 'Summon Demonic Tyrant', why: 'Always in large demon pack for maximum effect' },
      ],
    },
    da: {
      apex_tip: '💡 Tyrant forlænger varigheden af alle dine aktive dæmoner. Jo flere aktive dæmoner under Tyrant, jo mere total skade!',
      opener: [
        { spell: 'Hand of Gul\'dan', why: 'Spawner 3 Wild Imps — første dæmoner' },
        { spell: 'Call Dreadstalkers', why: '2 kraftfulde dæmoner + Demonic Core proc' },
        { spell: 'Hand of Gul\'dan (2.)', why: '3 flere Imps — opbygger Tyrant-pulje' },
        { spell: 'Summon Demonic Tyrant', why: 'Med 6+ aktive dæmoner — forlænger alt' },
        { spell: 'Demonbolt', why: 'Bruger Demonic Core-procs' },
      ],
      single: [
        { spell: 'Call Dreadstalkers', why: 'Altid på CD — stærkeste dæmon-trylleformel' },
        { spell: 'Hand of Gul\'dan', why: 'Ved 3-4 Shards — spawner Wild Imps' },
        { spell: 'Demonbolt', why: 'Ved 2 Demonic Core-stacks — empowered cast' },
        { spell: 'Shadow Bolt', why: 'Fylder — genererer også Demonic Core-chance' },
        { spell: 'Summon Demonic Tyrant', why: 'Ved 6+ dæmoner — forlænger alt' },
      ],
      aoe: [
        { spell: 'Hand of Gul\'dan-spam', why: 'Spawn så mange Imps som muligt' },
        { spell: 'Call Dreadstalkers', why: 'Ekstra kraftfulde dæmoner i pakken' },
        { spell: 'Implosion', why: '4+ Imps: teleporterer dem til mål for eksplosion' },
        { spell: 'Summon Demonic Tyrant', why: 'Altid i stort dæmonpack for maksimal effekt' },
      ],
    },
  },

  stats: {
    nl: {
      tip: 'Haste verlaagt de cast time van Shadow Bolt en spawnt Imps sneller. Cruciaal voor Demono.',
      list: [
        { rank:1, stat:'Intellect',       bars:5, note:'Primaire stat' },
        { rank:2, stat:'Haste',           bars:4, note:'Snellere casts = sneller Shards en Imps' },
        { rank:3, stat:'Critical Strike', bars:4, note:'Verhoogt demonenschade significant' },
        { rank:4, stat:'Mastery',         bars:2, note:'Verhoogt demonenschade (Mastery: Master Demonologist)' },
        { rank:5, stat:'Versatility',     bars:1, note:'Laagste prioriteit' },
      ],
    },
    en: {
      tip: 'Haste reduces Shadow Bolt cast time and spawns Imps faster. Crucial for Demo.',
      list: [
        { rank:1, stat:'Intellect',       bars:5, note:'Primary stat' },
        { rank:2, stat:'Haste',           bars:4, note:'Faster casts = faster Shards and Imps' },
        { rank:3, stat:'Critical Strike', bars:4, note:'Significantly increases demon damage' },
        { rank:4, stat:'Mastery',         bars:2, note:'Increases demon damage (Mastery: Master Demonologist)' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lowest priority' },
      ],
    },
    da: {
      tip: 'Haste reducerer Shadow Bolt casttid og spawner Imps hurtigere. Afgørende for Demo.',
      list: [
        { rank:1, stat:'Intellect',       bars:5, note:'Primær stat' },
        { rank:2, stat:'Haste',           bars:4, note:'Hurtigere casts = hurtigere Shards og Imps' },
        { rank:3, stat:'Critical Strike', bars:4, note:'Øger dæmonskade markant' },
        { rank:4, stat:'Mastery',         bars:2, note:'Øger dæmonskade (Mastery: Master Demonologist)' },
        { rank:5, stat:'Versatility',     bars:1, note:'Lavest prioritet' },
      ],
    },
  },

  cooldowns: {
    nl: [
      { spell:'Summon Demonic Tyrant', cd:'3 min',  effect:'Verlengt alle demonen met 15 sec + boost hun schade', when:'Altijd met 6+ demonen actief' },
      { spell:'Call Dreadstalkers',    cd:'20 sec',  effect:'2 krachtige honden 12 sec', when:'Altijd op cooldown — grote schade bijdrage' },
      { spell:'Implosion',             cd:'Soul Shards', effect:'Imps exploderen op target — enorme AoE', when:'4+ Imps en 2+ targets' },
      { spell:'Nether Portal',         cd:'3 min',  effect:'Extra demonen voor 15 sec bij elke summon', when:'Vóór Tyrant voor maximum demonencount' },
      { spell:'Power Siphon',          cd:'30 sec', effect:'Vernietigt 2 Imps voor 2 Demonic Core stacks', when:'Als je Demonbolt procs nodig hebt' },
    ],
    en: [
      { spell:'Summon Demonic Tyrant', cd:'3 min',  effect:'Extends all demons by 15 sec + boosts their damage', when:'Always with 6+ demons active' },
      { spell:'Call Dreadstalkers',    cd:'20 sec',  effect:'2 powerful hounds 12 sec', when:'Always on cooldown — large damage contribution' },
      { spell:'Implosion',             cd:'Soul Shards', effect:'Imps explode on target — massive AoE', when:'4+ Imps and 2+ targets' },
      { spell:'Nether Portal',         cd:'3 min',  effect:'Extra demons for 15 sec on each summon', when:'Before Tyrant for maximum demon count' },
      { spell:'Power Siphon',          cd:'30 sec', effect:'Destroys 2 Imps for 2 Demonic Core stacks', when:'When you need Demonbolt procs' },
    ],
    da: [
      { spell:'Summon Demonic Tyrant', cd:'3 min',  effect:'Forlænger alle dæmoner med 15 sek + booster deres skade', when:'Altid med 6+ aktive dæmoner' },
      { spell:'Call Dreadstalkers',    cd:'20 sec',  effect:'2 kraftfulde hunde i 12 sek', when:'Altid på cooldown — stort skadebidrag' },
      { spell:'Implosion',             cd:'Soul Shards', effect:'Imps eksploderer på mål — massiv AoE', when:'4+ Imps og 2+ mål' },
      { spell:'Nether Portal',         cd:'3 min',  effect:'Ekstra dæmoner i 15 sek ved hvert kald', when:'Før Tyrant for maksimalt dæmonantal' },
      { spell:'Power Siphon',          cd:'30 sec', effect:'Ødelægger 2 Imps for 2 Demonic Core-stacks', when:'Når du har brug for Demonbolt-procs' },
    ],
  },

  utility: {
    nl: [
      { spell:'Healthstone',     type:'Heal',      note:'Gratis HP restore — altijd in je bags' },
      { spell:'Soulstone',       type:'Rez',       note:'Pre-place voor automatische rez bij dood' },
      { spell:'Banish',          type:'CC',        note:'Verwijdert Demon/Elemental uit fight 40 sec' },
      { spell:'Demonic Circle',  type:'Mobiliteit', note:'Teleporteer terug naar cirkel — mechanics ontwijken' },
      { spell:'Mortal Coil',     type:'Fear+Heal', note:'Fear + 20% HP herstel — noodoptie' },
    ],
    en: [
      { spell:'Healthstone',     type:'Heal',      note:'Free HP restore — always in your bags' },
      { spell:'Soulstone',       type:'Rez',       note:'Pre-place for automatic rez on death' },
      { spell:'Banish',          type:'CC',        note:'Removes Demon/Elemental from fight 40 sec' },
      { spell:'Demonic Circle',  type:'Mobility',  note:'Teleport back to circle — dodge mechanics' },
      { spell:'Mortal Coil',     type:'Fear+Heal', note:'Fear + 20% HP restore — emergency option' },
    ],
    da: [
      { spell:'Healthstone',     type:'Healing',   note:'Gratis HP-genopretning — altid i din taske' },
      { spell:'Soulstone',       type:'Genoplivning', note:'Pre-placer til automatisk genoplivning ved død' },
      { spell:'Banish',          type:'CC',        note:'Fjerner Demon/Elemental fra kampen i 40 sek' },
      { spell:'Demonic Circle',  type:'Mobilitet', note:'Teleportér tilbage til cirkel — undvig mekanikker' },
      { spell:'Mortal Coil',     type:'Fear+Heal', note:'Fear + 20% HP-genopretning — nødsmulighed' },
    ],
  },

  tips: {
    nl: [
      { icon:'👿', title:'Tyrant timing is alles', text:'Tyrant is je grootste cooldown. Wacht altijd tot je 6+ demonen hebt voordat je hem summont. Een slecht getimede Tyrant kan 30% minder schade doen.' },
      { icon:'💥', title:'Implosion = AoE nuke', text:'Bij 4+ Imps op een groep mobs: gebruik Implosion. Elke Imp doet explosieve schade op alle targets. Grotere packs = exponentieel meer schade.' },
      { icon:'🔢', title:'Nooit op 5 Shards', text:'Bij 5 Shards genereer je geen nieuwe Shards meer. Dump altijd bij 3-4 Shards met Hand of Gul\'dan om nooit te wasted.' },
      { icon:'🐕', title:'Dreadstalkers altijd op CD', text:'Call Dreadstalkers is je sterkste spell na Tyrant. Nooit skippen of uitstellen — elke seconde vertraging is verloren schade.' },
      { icon:'🎪', title:'Demonen management', text:'Je demonen zijn passief — jij hoeft niets te micromanagen. Focus op je rotation en laat de demonen hun werk doen.' },
    ],
    en: [
      { icon:'👿', title:'Tyrant timing is everything', text:'Tyrant is your biggest cooldown. Always wait until you have 6+ demons before summoning him. A poorly timed Tyrant can do 30% less damage.' },
      { icon:'💥', title:'Implosion = AoE nuke', text:'At 4+ Imps on a group of mobs: use Implosion. Each Imp does explosive damage on all targets. Larger packs = exponentially more damage.' },
      { icon:'🔢', title:'Never at 5 Shards', text:'At 5 Shards you generate no new Shards. Always dump at 3-4 Shards with Hand of Gul\'dan to never waste.' },
      { icon:'🐕', title:'Dreadstalkers always on CD', text:'Call Dreadstalkers is your strongest spell after Tyrant. Never skip or delay — every second of delay is lost damage.' },
      { icon:'🎪', title:'Demon management', text:'Your demons are passive — you don\'t need to micromanage anything. Focus on your rotation and let the demons do their work.' },
    ],
    da: [
      { icon:'👿', title:'Tyrant-timing er alt', text:'Tyrant er din største cooldown. Vent altid til du har 6+ dæmoner, inden du kalder ham. En dårligt timet Tyrant kan gøre 30% mindre skade.' },
      { icon:'💥', title:'Implosion = AoE nuke', text:'Ved 4+ Imps på en gruppe fjender: brug Implosion. Hver Imp gør eksplosiv skade på alle mål. Større grupper = eksponentielt mere skade.' },
      { icon:'🔢', title:'Aldrig på 5 Shards', text:'Ved 5 Shards genererer du ingen nye Shards. Dump altid ved 3-4 Shards med Hand of Gul\'dan for aldrig at spilde.' },
      { icon:'🐕', title:'Dreadstalkers altid på CD', text:'Call Dreadstalkers er din stærkeste trylleformel efter Tyrant. Spring aldrig over eller forsink — hvert sekunds forsinkelse er tabt skade.' },
      { icon:'🎪', title:'Dæmonstyring', text:'Dine dæmoner er passive — du behøver ikke mikrostyre noget. Fokus på din rotation og lad dæmonerne gøre deres arbejde.' },
    ],
  },

  macros: {
    nl: [
      { name:'Tyrant + Nether Portal', code:'/cast Nether Portal\n/cast Summon Demonic Tyrant', note:'Maximum burst — Nether Portal spawnt extra demonen terwijl Tyrant ze verlengt.' },
      { name:'Implosion op cursor', code:'/cast [@cursor] Implosion', note:'AoE Imp explosie precies op cursor positie.' },
      { name:'Hand of Gul\'dan snel', code:'/cast Hand of Gul\'dan', note:'Simpele binding — spam dit voor Imp generatie.' },
    ],
    en: [
      { name:'Tyrant + Nether Portal', code:'/cast Nether Portal\n/cast Summon Demonic Tyrant', note:'Maximum burst — Nether Portal spawns extra demons while Tyrant extends them.' },
      { name:'Implosion at cursor', code:'/cast [@cursor] Implosion', note:'AoE Imp explosion exactly at cursor position.' },
      { name:'Hand of Gul\'dan fast', code:'/cast Hand of Gul\'dan', note:'Simple binding — spam this for Imp generation.' },
    ],
    da: [
      { name:'Tyrant + Nether Portal', code:'/cast Nether Portal\n/cast Summon Demonic Tyrant', note:'Maksimal burst — Nether Portal spawner ekstra dæmoner mens Tyrant forlænger dem.' },
      { name:'Implosion ved markør', code:'/cast [@cursor] Implosion', note:'AoE Imp-eksplosion præcist ved markørposition.' },
      { name:'Hand of Gul\'dan hurtigt', code:'/cast Hand of Gul\'dan', note:'Simpel binding — spam dette til Imp-generering.' },
    ],
  },

  resource_info: {
    nl: {
      intro: 'Demonology gebruikt Soul Shards (0-5). Shards worden gespendeerd voor demonen spawnen. Meer demonen = meer schade = meer Shards via kills.',
      generate: [
        'Shadow Bolt — kans op Demonic Core proc (gratis Demonbolt)',
        'Dreadstalker-aanslagen — kleine Shard generatie',
        'Vilefiend (talent) — passieve Shard generatie',
        'Soul Conduit talent — kans op Shard refund',
      ],
      spend: [
        'Call Dreadstalkers (2 Shards) — sterkste demonenspell',
        'Hand of Gul\'dan (2 Shards) — spawnt 3 Wild Imps',
        'Vilefiend (talent, 1 Shard) — extra demon',
        'Implosion (1 Shard) — Imp explosie',
      ],
      pet_tip: '💡 Nooit op 5 Shards — dump altijd met Hand of Gul\'dan bij 3-4 Shards zodat je geen Shards waste!',
      pets: [],
    },
    en: {
      intro: 'Demonology uses Soul Shards (0-5). Shards are spent to spawn demons. More demons = more damage = more Shards via kills.',
      generate: [
        'Shadow Bolt — chance for Demonic Core proc (free Demonbolt)',
        'Dreadstalker attacks — small Shard generation',
        'Vilefiend (talent) — passive Shard generation',
        'Soul Conduit talent — chance for Shard refund',
      ],
      spend: [
        'Call Dreadstalkers (2 Shards) — strongest demon spell',
        'Hand of Gul\'dan (2 Shards) — spawns 3 Wild Imps',
        'Vilefiend (talent, 1 Shard) — extra demon',
        'Implosion (1 Shard) — Imp explosion',
      ],
      pet_tip: '💡 Never at 5 Shards — always dump with Hand of Gul\'dan at 3-4 Shards so you don\'t waste Shards!',
      pets: [],
    },
    da: {
      intro: 'Demonology bruger Soul Shards (0-5). Shards bruges til at spawne dæmoner. Flere dæmoner = mere skade = flere Shards via drab.',
      generate: [
        'Shadow Bolt — chance for Demonic Core proc (gratis Demonbolt)',
        'Dreadstalker-angreb — lille Shard-generering',
        'Vilefiend (talent) — passiv Shard-generering',
        'Soul Conduit talent — chance for Shard-refund',
      ],
      spend: [
        'Call Dreadstalkers (2 Shards) — stærkeste dæmon-trylleformel',
        'Hand of Gul\'dan (2 Shards) — spawner 3 Wild Imps',
        'Vilefiend (talent, 1 Shard) — ekstra dæmon',
        'Implosion (1 Shard) — Imp-eksplosion',
      ],
      pet_tip: '💡 Aldrig på 5 Shards — dump altid med Hand of Gul\'dan ved 3-4 Shards så du ikke spilder Shards!',
      pets: [],
    },
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Verhoogt Intellect voor 1 uur.',               note:'Altijd actief' },
      { type:'pot',    name:'Potion of Witchcraft',        effect:'Grote Intellect boost 25 sec.',                note:'Gebruik bij Tyrant window' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Intellect en Stamina via groepsfeast.',       note:'Feast vragen' },
      { type:'food',   name:'Aromatic Seafood Platter',    effect:'Solo food backup.',                            note:'Backup als geen feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primaire stat 1 uur.',                        note:'Altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Increases Intellect for 1 hour.',              note:'Always active' },
      { type:'pot',    name:'Potion of Witchcraft',        effect:'Large Intellect boost 25 sec.',               note:'Use during Tyrant window' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Intellect and Stamina via group feast.',     note:'Ask for feast' },
      { type:'food',   name:'Aromatic Seafood Platter',    effect:'Solo food backup.',                           note:'Backup if no feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primary stat 1 hour.',                       note:'Always use' },
    ],
    da: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Øger Intellect i 1 time.',                     note:'Altid aktiv' },
      { type:'pot',    name:'Potion of Witchcraft',        effect:'Stor Intellect-boost i 25 sek.',              note:'Brug under Tyrant-vindue' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Intellect og Stamina via gruppefeast.',      note:'Bed om feast' },
      { type:'food',   name:'Aromatic Seafood Platter',    effect:'Solo-mad backup.',                            note:'Backup hvis ingen feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primær stat 1 time.',                        note:'Brug altid' },
    ],
  },
};

ALL_SPECS.push(SPEC_DEMONOLOGY_WARLOCK);

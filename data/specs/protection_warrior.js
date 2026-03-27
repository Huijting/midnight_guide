if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_PROTECTION_WARRIOR = {
  id:'protection_warrior', icon:'🛡️', class:'Warrior',
  spec:{nl:'Protection',en:'Protection'},
  role:'tank', armor:'Plate',
  weapon:{nl:'One-hand weapon + shield',en:'One-hand weapon + shield'},
  resource:'Rage',
  patch:'1.0', color:'#C69B3A',
  summary:{
    nl:'Protection Warrior is de actieve tank — genereert Rage via aanvallen en schade ontvangen. Gebruikt Ignore Pain als absorb shield en heeft sterke AoE threat via Thunder Clap en Shockwave.',
    en:'Protection Warrior is the active tank — generates Rage via attacks and taking damage. Uses Ignore Pain as absorb shield and has strong AoE threat via Thunder Clap and Shockwave.'
  },
  pros:{
    nl:['Uitstekende AoE threat via Thunder Clap','Hoge Rage generatie — ook via schade ontvangen','Sterk burst damage voor een tank','Pummel = betrouwbare korte interrupt (15 sec)','Shockwave = sterke AoE stun voor de groep'],
    en:['Excellent AoE threat via Thunder Clap','High Rage generation — also via taking damage','Strong burst damage for a tank','Pummel = reliable short interrupt (15 sec)','Shockwave = strong AoE stun for the group']
  },
  cons:{
    nl:['Minder defensieve CDs dan Blood DK of Brewmaster','Rage management vereist aandacht','Kwetsbaar voor magic schade','Ignore Pain heeft Rage kosten — kan snel door Rage heen gaan'],
    en:['Fewer defensive CDs than Blood DK or Brewmaster','Rage management requires attention','Vulnerable to magic damage','Ignore Pain has Rage cost — can burn through Rage quickly']
  },
  cheatsheet:{
    nl:{
      opener:'Charge → Thunder Clap → Shield Slam → Avatar → Revenge → Ignore Pain spam',
      single:'Shield Slam op CD → Revenge bij proc → Thunder Clap op CD → Ignore Pain als Rage hoog',
      aoe:'Thunder Clap → Shockwave op grote packs → Revenge spam → Ignore Pain bijhouden',
      rules:[
        'Shield Slam altijd hoogste prioriteit — genereert meeste Rage',
        'Revenge altijd direct bij proc — gratis en krachtig',
        'Thunder Clap op CD houden — AoE threat en Rage',
        'Ignore Pain spammen als Rage hoog — altijd actief houden',
        'Shockwave bewaren voor gevaarlijke casters of grote packs',
      ],
    },
    en:{
      opener:'Charge → Thunder Clap → Shield Slam → Avatar → Revenge → Ignore Pain spam',
      single:'Shield Slam on CD → Revenge on proc → Thunder Clap on CD → Ignore Pain when Rage high',
      aoe:'Thunder Clap → Shockwave on large packs → Revenge spam → keep Ignore Pain up',
      rules:[
        'Shield Slam always highest priority — generates most Rage',
        'Always use Revenge immediately on proc — free and powerful',
        'Keep Thunder Clap on CD — AoE threat and Rage generation',
        'Spam Ignore Pain when Rage is high — always keep active',
        'Save Shockwave for dangerous casters or large packs',
      ],
    }
  },
  rotation:{
    nl:{
      apex_tip:'💡 Ignore Pain is je primaire verdediging — een absorb shield dat bijgehouden moet worden. Spam het zodra je genoeg Rage hebt. Maar bewaar altijd voldoende Rage voor Shield Slam!',
      opener:[
        {spell:'Charge',              why:'Genereert Rage en positioneert je — altijd als opener'},
        {spell:'Thunder Clap',        why:'Direct AoE threat op alle vijanden rondom je'},
        {spell:'Shield Slam',         why:'Hoofd aanval — genereert meeste Rage'},
        {spell:'Avatar',              why:'Grote cooldown — boost Rage generatie en schade'},
        {spell:'Shockwave',           why:'AoE stun bij grote packs — veiligheid voor groep'},
        {spell:'Ignore Pain',         why:'Rage spenderen aan absorb shield — altijd actief houden'},
      ],
      single:[
        {spell:'Shield Slam',         why:'Altijd hoogste prioriteit — meeste Rage generatie'},
        {spell:'Revenge',             why:'Direct bij proc — gratis, extra schade en Rage'},
        {spell:'Thunder Clap',        why:'Op CD — Rage generatie en threat bijhouden'},
        {spell:'Ignore Pain',         why:'Rage dump — altijd actief als absorb shield'},
        {spell:'Devastate',           why:'Filler als niks anders beschikbaar is'},
        {spell:'Avatar',              why:'Op CD — Rage boost en verhoogde schade'},
      ],
      aoe:[
        {spell:'Thunder Clap',        why:'Raakt alle vijanden — hoofd AoE threat spell'},
        {spell:'Shockwave',           why:'Stunt alle vijanden voor je — packs stilzetten'},
        {spell:'Revenge',             why:'Bij proc: raakt meerdere targets via cleave'},
        {spell:'Shield Slam',         why:'Blijft prioriteit ook in AoE'},
        {spell:'Ignore Pain',         why:'Rage dump — ook in AoE altijd actief houden'},
      ],
    },
    en:{
      apex_tip:'💡 Ignore Pain is your primary defense — an absorb shield that needs to be kept active. Spam it as soon as you have enough Rage. But always keep enough Rage for Shield Slam!',
      opener:[
        {spell:'Charge',              why:'Generates Rage and positions you — always as opener'},
        {spell:'Thunder Clap',        why:'Immediate AoE threat on all enemies around you'},
        {spell:'Shield Slam',         why:'Main attack — generates most Rage'},
        {spell:'Avatar',              why:'Major cooldown — boosts Rage generation and damage'},
        {spell:'Shockwave',           why:'AoE stun on large packs — safety for group'},
        {spell:'Ignore Pain',         why:'Spend Rage on absorb shield — always keep active'},
      ],
      single:[
        {spell:'Shield Slam',         why:'Always highest priority — most Rage generation'},
        {spell:'Revenge',             why:'Immediately on proc — free, extra damage and Rage'},
        {spell:'Thunder Clap',        why:'On CD — keep Rage generation and threat up'},
        {spell:'Ignore Pain',         why:'Rage dump — always active as absorb shield'},
        {spell:'Devastate',           why:'Filler when nothing else is available'},
        {spell:'Avatar',              why:'On CD — Rage boost and increased damage'},
      ],
      aoe:[
        {spell:'Thunder Clap',        why:'Hits all enemies — main AoE threat spell'},
        {spell:'Shockwave',           why:'Stuns all enemies in front of you — locks down packs'},
        {spell:'Revenge',             why:'On proc: hits multiple targets via cleave'},
        {spell:'Shield Slam',         why:'Stays priority even in AoE'},
        {spell:'Ignore Pain',         why:'Rage dump — always keep active in AoE too'},
      ],
    }
  },
  stats:{
    nl:{
      tip:'Strength is altijd #1. Haste verlaagt de GCD en verhoogt aanvalssnelheid — meer Rage. Versatility geeft zowel schade als damage reduction — dubbel waardevol als tank.',
      list:[
        {rank:1,stat:'Strength',       bars:5,note:'Primaire stat — altijd hoogste ilvl pakken'},
        {rank:2,stat:'Haste',          bars:4,note:'Snellere aanvallen = meer Rage generatie'},
        {rank:3,stat:'Versatility',    bars:4,note:'Schade + damage reduction — zeer waardevol als tank'},
        {rank:4,stat:'Critical Strike',bars:2,note:'Triggert Revenge procs vaker'},
        {rank:5,stat:'Mastery',        bars:2,note:'Mastery: Critical Block — verhoogt block kans'},
      ],
    },
    en:{
      tip:'Strength is always #1. Haste lowers GCD and increases attack speed — more Rage. Versatility gives both damage and damage reduction — doubly valuable as a tank.',
      list:[
        {rank:1,stat:'Strength',       bars:5,note:'Primary stat — always take highest ilvl'},
        {rank:2,stat:'Haste',          bars:4,note:'Faster attacks = more Rage generation'},
        {rank:3,stat:'Versatility',    bars:4,note:'Damage + damage reduction — very valuable as tank'},
        {rank:4,stat:'Critical Strike',bars:2,note:'Triggers Revenge procs more often'},
        {rank:5,stat:'Mastery',        bars:2,note:'Mastery: Critical Block — increases block chance'},
      ],
    }
  },
  cooldowns:{
    nl:[
      {spell:'Avatar',              cd:'1.5 min', effect:'Rage boost + schade boost + verwijdert roots 20 sec',    when:'Op pull en elke boss phase'},
      {spell:'Shield Wall',         cd:'4 min',   effect:'40% schade reductie 8 sec — sterkste defensieve CD',     when:'Grootste mechanic of noodsituatie'},
      {spell:'Last Stand',          cd:'3 min',   effect:'+30% max HP tijdelijk + healt voor dat bedrag',          when:'Als HP snel daalt en healer achterloopt'},
      {spell:'Spell Reflection',    cd:'25 sec',  effect:'Reflecteert of absorbeert 1 spell — ook group variant',  when:'Bij bekende magic mechanic — proactief'},
      {spell:'Rallying Cry',        cd:'3 min',   effect:'Tijdelijke HP boost voor hele groep',                    when:'Grote groepsschade fase'},
    ],
    en:[
      {spell:'Avatar',              cd:'1.5 min', effect:'Rage boost + damage boost + removes roots 20 sec',       when:'On pull and every boss phase'},
      {spell:'Shield Wall',         cd:'4 min',   effect:'40% damage reduction 8 sec — strongest defensive CD',    when:'Biggest mechanic or emergency'},
      {spell:'Last Stand',          cd:'3 min',   effect:'+30% max HP temporarily + heals for that amount',        when:'When HP drops fast and healer falls behind'},
      {spell:'Spell Reflection',    cd:'25 sec',  effect:'Reflects or absorbs 1 spell — group variant available',  when:'At known magic mechanic — proactively'},
      {spell:'Rallying Cry',        cd:'3 min',   effect:'Temporary HP boost for entire group',                    when:'Large group damage phase'},
    ]
  },
  utility:{
    nl:[
      {spell:'Pummel',             type:'Interrupt', note:'Interrupt op 15 sec CD — snel en betrouwbaar'},
      {spell:'Shockwave',          type:'Stun',      note:'Conische AoE stun 4 sec — alle vijanden voor je'},
      {spell:'Spell Reflection',   type:'Defensief', note:'Reflecteer spell terug of absorbeer — ook group variant'},
      {spell:'Intervene',          type:'Redding',   note:'Teleporteer naar bondgenoot + absorbeer volgende aanval'},
      {spell:'Intimidating Shout', type:'CC',        note:'Fear tot 5 vijanden 8 sec — breekt bij schade'},
      {spell:'Hamstring',          type:'Slow',      note:'50% movement slow — kiting en positie control'},
    ],
    en:[
      {spell:'Pummel',             type:'Interrupt', note:'Interrupt on 15 sec CD — fast and reliable'},
      {spell:'Shockwave',          type:'Stun',      note:'Conical AoE stun 4 sec — all enemies in front of you'},
      {spell:'Spell Reflection',   type:'Defensive', note:'Reflect spell back or absorb — group variant available'},
      {spell:'Intervene',          type:'Rescue',    note:'Teleport to ally + absorb next attack on them'},
      {spell:'Intimidating Shout', type:'CC',        note:'Fear up to 5 enemies 8 sec — breaks on damage'},
      {spell:'Hamstring',          type:'Slow',      note:'50% movement slow — kiting and position control'},
    ]
  },
  tips:{
    nl:[
      {icon:'🛡️',title:'Ignore Pain is je leven',   text:'Ignore Pain absorbeert een groot deel van je inkomende schade. Gebruik het zodra je 40+ Rage hebt — wacht niet. Maar zorg ook dat je nooit op 0 Rage zit want dan kun je Shield Slam niet meer gebruiken.'},
      {icon:'⚡',title:'Revenge procs nooit missen', text:'Revenge heeft geen cooldown bij een proc en is gratis. Zodra je het ziet oplichten: gebruik het direct. Het genereert ook Rage terug, dus het is altijd een winst.'},
      {icon:'🌀',title:'Shockwave = groepsreddng',   text:'Shockwave stunt alles in een kegel voor je. In M+: bewaar het voor gevaarlijke casters of wanneer de healer overbelast is. Het is een van de beste groepsbeschermende CDs van alle tanks.'},
      {icon:'💪',title:'Avatar + Shield Slam combo', text:'Avatar verhoogt je Rage generatie aanzienlijk. Gebruik het samen met zoveel mogelijk Shield Slams — dit is je burst window als tank. Goed voor zowel schade als Ignore Pain spam.'},
      {icon:'📣',title:'Rallying Cry tijdig',        text:'Rallying Cry geeft de hele groep tijdelijk meer HP. Gebruik het VOOR een grote schade fase begint, niet als mensen al aan het sterven zijn. Communiceer met de healer wanneer je het inzet.'},
    ],
    en:[
      {icon:'🛡️',title:'Ignore Pain is your life',  text:'Ignore Pain absorbs a large portion of your incoming damage. Use it as soon as you have 40+ Rage — don\'t wait. But also make sure you never sit at 0 Rage because then you can\'t use Shield Slam anymore.'},
      {icon:'⚡',title:'Never miss Revenge procs',   text:'Revenge has no cooldown on proc and is free. As soon as you see it light up: use it immediately. It also generates Rage back, so it\'s always a gain.'},
      {icon:'🌀',title:'Shockwave = group savior',   text:'Shockwave stuns everything in a cone in front of you. In M+: save it for dangerous casters or when the healer is overwhelmed. It\'s one of the best group protection CDs of all tanks.'},
      {icon:'💪',title:'Avatar + Shield Slam combo', text:'Avatar significantly increases your Rage generation. Use it alongside as many Shield Slams as possible — this is your burst window as a tank. Good for both damage and Ignore Pain spam.'},
      {icon:'📣',title:'Rallying Cry on time',       text:'Rallying Cry temporarily gives the whole group more HP. Use it BEFORE a large damage phase begins, not when people are already dying. Communicate with the healer when you\'re using it.'},
    ]
  },
  macros:{
    nl:[
      {name:'Pummel (Focus Kick)',  code:'#showtooltip Pummel\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Pummel', note:'Kick op focus > mouseover > target. Essentieel als tank!'},
      {name:'Shockwave cursor',     code:'#showtooltip Shockwave\n/cast Shockwave', note:'Positioneer je goed voor gebruik — raakt alles in een kegel voor je neus.'},
      {name:'Avatar + Shield Slam', code:'/cast Avatar\n/cast Shield Slam', note:'Burst combo in één knop — maximale Rage boost direct.'},
    ],
    en:[
      {name:'Pummel (Focus Kick)',  code:'#showtooltip Pummel\n/cast [@focus,harm,nodead][@mouseover,harm,nodead][@target,harm,nodead] Pummel', note:'Kick on focus > mouseover > target. Essential as tank!'},
      {name:'Shockwave',            code:'#showtooltip Shockwave\n/cast Shockwave', note:'Position yourself well before use — hits everything in a cone in front of you.'},
      {name:'Avatar + Shield Slam', code:'/cast Avatar\n/cast Shield Slam', note:'Burst combo in one button — maximum Rage boost immediately.'},
    ]
  },
  resource_info:{
    nl:{
      intro:'Protection Warrior gebruikt Rage (0-100). Rage bouwt op via aanvallen, schade ontvangen en bepaalde abilities. Je spendeert Rage aan Ignore Pain (je overleving) en af en toe andere spells.',
      generate:[
        'Auto attacks genereren Rage passief',
        'Schade ontvangen genereert Rage — meer schade = meer Rage',
        'Charge geeft directe Rage op aankomst',
        'Shield Slam genereert veel Rage bij hit',
        'Thunder Clap genereert kleine hoeveelheid Rage',
        'Avatar verhoogt tijdelijk Rage generatie',
      ],
      spend:[
        'Ignore Pain — kost 40 Rage, groot absorb shield',
        'Shield Slam — verbruikt geen Rage maar genereert het',
        'Revenge — gratis bij proc, kleine Rage terugwinst',
      ],
      pet_tip:'⚠️ Nooit op 100 Rage zitten — dan verspil je Rage generatie van auto attacks. Spam Ignore Pain om Rage te dumpen, maar bewaar altijd 40 Rage voor een nood-Ignore Pain!',
      pets:[],
    },
    en:{
      intro:'Protection Warrior uses Rage (0-100). Rage builds up via attacks, taking damage and certain abilities. You spend Rage on Ignore Pain (your survival) and occasionally other spells.',
      generate:[
        'Auto attacks generate Rage passively',
        'Taking damage generates Rage — more damage = more Rage',
        'Charge gives direct Rage on arrival',
        'Shield Slam generates lots of Rage on hit',
        'Thunder Clap generates small amount of Rage',
        'Avatar temporarily increases Rage generation',
      ],
      spend:[
        'Ignore Pain — costs 40 Rage, large absorb shield',
        'Shield Slam — doesn\'t consume Rage but generates it',
        'Revenge — free on proc, small Rage recovery',
      ],
      pet_tip:'⚠️ Never sit at 100 Rage — you waste Rage generation from auto attacks. Spam Ignore Pain to dump Rage, but always keep 40 Rage for an emergency Ignore Pain!',
      pets:[],
    }
  },
  consumables:{
    nl:[
      {type:'flask', name:'Flask of the Shattered Sun',    effect:'Verhoogt Strength significant voor 1 uur.',   note:'Altijd actief'},
      {type:'pot',   name:'Potion of Withering Vitality',  effect:'Groot HP herstel en tijdelijke HP boost.',     note:'Op pull of bij grote schade fase'},
      {type:'food',  name:'Silvermoon Parade (Feast)',     effect:'+Strength en Stamina via groepsfeast.',       note:'Feast vragen'},
      {type:'food',  name:'Hearty Feast backup',           effect:'Solo food — Strength + Stamina backup.',     note:'Backup als geen feast'},
      {type:'rune',  name:'Void-Touched Augment Rune',      effect:'+Primaire stat 1 uur.',                       note:'Altijd gebruiken'},
    ],
    en:[
      {type:'flask', name:'Flask of the Shattered Sun',    effect:'Significantly increases Strength for 1 hour.', note:'Always active'},
      {type:'pot',   name:'Potion of Withering Vitality',  effect:'Large HP restore and temporary HP boost.',    note:'On pull or during major damage phase'},
      {type:'food',  name:'Silvermoon Parade (Feast)',     effect:'+Strength and Stamina via group feast.',      note:'Ask for feast'},
      {type:'food',  name:'Hearty Feast backup',           effect:'Solo food — Strength + Stamina backup.',    note:'Backup if no feast'},
      {type:'rune',  name:'Void-Touched Augment Rune',      effect:'+Primary stat 1 hour.',                      note:'Always use'},
    ]
  },
};
ALL_SPECS.push(SPEC_PROTECTION_WARRIOR);

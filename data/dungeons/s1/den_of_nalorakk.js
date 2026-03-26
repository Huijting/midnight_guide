// WoW Midnight — Season 1 dungeon data
const DEN_OF_NALORAKK = {
  id:"nalorakk", name:"Den of Nalorakk", zone:"Zul'Aman", type:"normal",
  bosses_short:["The Hoardmonger","Sentinel of Winter","Nalorakk"],
  level:{nl:"Ontgrendel lvl 88",en:"Unlock level 88"},
  lore:{
    nl:"Verwond door Zul'jin en Malacrass trok Beer-Loa Nalorakk zich terug in slaap. Doorsta zijn drie beproevingen om zijn zegen te verdienen voor de strijd tegen het Void.",
    en:"Wounded by Zul'jin and Malacrass, the Bear-Loa Nalorakk retreated into slumber. Endure his three trials to earn his blessing for the battle against the Void."},
  tips:[
    {title:{nl:"Ingangcoördinaten",en:"Entrance coordinates"},
     text:{nl:"/way #2437 29.7 84.9",en:"/way #2437 29.7 84.9"}},
    {title:{nl:"Loa-zegen",en:"Loa Blessing"},
     text:{nl:"Voltooiing verdient Nalorakk's zegen — helpt het Loa Blessings-systeem te ontgrendelen.",en:"Completion earns Nalorakk's blessing — helps unlock the Loa Blessings system."}}
  ],
  bosses:[
    {name:"The Hoardmonger",num:1,
     desc:{nl:"Eerste beproeving. Bij 90%, 60% en 30% HP versterkt hij een vaardigheid via Resourceful Measures.",en:"First trial. At 90%, 60% and 30% HP he empowers an ability via Resourceful Measures."},
     tank:{nl:["Earthshatter Slam = grote frontale kegel — de baas ALTIJD van de groep afgewend houden.","Defensive bij versterkte Resourceful Measures-momenten."],en:["Earthshatter Slam = large frontal cone — ALWAYS keep the boss faced away from the group.","Use a defensive during empowered Resourceful Measures moments."]},
     heal:{nl:["Savage Roar = grote AoE — healing cooldown direct inzetten.","Toxic Spores van vernietigde paddenstoelen — cleanse indien mogelijk."],en:["Savage Roar = major AoE — deploy a healing cooldown immediately.","Toxic Spores from destroyed mushrooms — cleanse where possible."]},
     dps:{nl:["Vernietig Rotten Mushrooms direct — ze pulseren Putrid Presence AoE totdat ze dood zijn.","Bij 90%/60%/30%: verwacht een versterkte vaardigheid.","Achter de baas staan om Earthshatter volledig te vermijden."],en:["Destroy Rotten Mushrooms immediately — they pulse Putrid Presence AoE until dead.","At 90%/60%/30%: anticipate an empowered ability.","Stand behind the boss to fully avoid Earthshatter."]}},
    {name:"Sentinel of Winter",num:2,
     desc:{nl:"Tweede beproeving. Bij 100 energie ontkent hij Eternal Winter: massieve schade + terugstoot.",en:"Second trial. At 100 energy he unleashes Eternal Winter: massive damage + knockback."},
     tank:{nl:["Fractured Shivercores laten Snowdrifts achter bij dood — dodingen op veilige plekken uitvoeren.","Eternal Winter terugstoot: immuniteit gebruiken als beschikbaar."],en:["Fractured Shivercores leave Snowdrifts on death — position kills in safe locations.","Eternal Winter knockback: use an immunity if available."]},
     heal:{nl:["Eternal Winter = zware groepsschade + terugstoot — dit is het grote cooldown-moment.","Glacial Torment = aflopende DoT — cleanse of over-healen."],en:["Eternal Winter = heavy group damage + knockback — this is the major cooldown moment.","Glacial Torment = a ticking DoT — cleanse or out-heal it."]},
     dps:{nl:["Dood Fractured Shivercores voor Winter's Shroud-stacks stapelen.","Raging Squalls vermijden — behandel als bewegende grond-AoE.","Eternal Winter: achter een muur gaan staan om terugstoot te beperken."],en:["Kill Fractured Shivercores before Winter's Shroud stacks build up.","Avoid Raging Squalls — treat them as moving ground AoE.","Eternal Winter: stand near a wall to limit the knockback."]}},
    {name:"Nalorakk, Loa of War",num:3,
     desc:{nl:"De Beer-Loa zelf — de derde beproeving. Vecht in Beer-vorm (zware fysieke schade) en Trol-vorm (vaardigheidsgericht). Beheers beide fasen.",en:"The Bear-Loa himself — the third trial. Fights in Bear form (heavy physical damage) and Troll form (ability-focused). Master both phases."},
     tank:{nl:["Beervorm: zware fysieke aanvallen — defensives agressief afwisselen.","Trolvorm: klaar voor interrupt-vaardigheidscasts.","Taunt bij elke vormovergang."],en:["Bear form: heavy physical attacks — rotate defensives aggressively.","Troll form: be ready to interrupt his ability casts.","Taunt at every form transition."]},
     heal:{nl:["Beervorm schaadt de tank; trolvorm raakt de groep — pas je focus aan per fase.","Formovergangen = burst-momenten — cooldown voor de wissel."],en:["Bear form hurts the tank; troll form hits the group — adjust your focus per phase.","Form transitions = burst moments — have a cooldown ready for the switch."]},
     dps:{nl:["Beervorm: achter de baas voor melee — frontale muil-aanvallen vermijden.","Trolvorm: oorlogskreten en vaardigheidscasts onderbreken.","Burn hard in trolvorm — offensieve cooldowns hier inzetten."],en:["Bear form: stand behind the boss for melee — avoid the frontal maw attacks.","Troll form: interrupt war cries and ability casts.","Burn hard in troll form — use offensive cooldowns here."]}}
  ],
  route:{
    summary:{nl:"Drie beproevingen achter elkaar. Geen vertakkingen. Lust op Nalorakk in trolvorm.",en:"Three trials in sequence. No branching. Lust on Nalorakk during troll form."},
    lust:[{moment:"Nalorakk — Troldevorm 🔥",uitleg:{nl:"Beste burst-venster van het gevecht",en:"Best burst window of the fight"}}],
    pulls:[
      {label:{nl:"Beproeving 1 — The Hoardmonger",en:"Trial 1 — The Hoardmonger"},desc:{nl:"Altijd van groep afgewend. Paddenstoelen vernietigen.",en:"Always faced away from the group. Destroy mushrooms."}},
      {label:{nl:"Beproeving 2 — Sentinel of Winter",en:"Trial 2 — Sentinel of Winter"},desc:{nl:"Eternal Winter = grote cooldown. Muur in de rug bij terugstoot.",en:"Eternal Winter = major cooldown. Back to a wall during knockback."}},
      {label:{nl:"Beproeving 3 — Nalorakk 🔥",en:"Trial 3 — Nalorakk 🔥"},desc:{nl:"Beer → Trol. Lust in trolvorm-venster.",en:"Bear → Troll. Lust during troll form window."}}
    ],
    trash:[
      {mob:"Vilebranch Hexer",tags:["int","purge"],tip:{nl:"Hex: interrupt — transformeert een speler in een kikker. Mojo Bolt: interrupt. Healer mob — focus direct.",en:"Hex: interrupt — transforms a player into a frog. Mojo Bolt: interrupt. Healer mob — focus immediately."}},
      {mob:"Amani Axethrower",tags:["avoid","tank"],tip:{nl:"Hatchet Throw: grote ranged aanval op random speler — losjes spreiden. Berserker Charge: charge naar tank.",en:"Hatchet Throw: large ranged attack on random player — loosely spread. Berserker Charge: charges the tank."}},
      {mob:"Spirit Stalker",tags:["stop","tank"],tip:{nl:"Spectral Form: mob wordt tijdelijk onsterfelijk — stop casts met CC. Spirit Maul: zware tank hit.",en:"Spectral Form: mob becomes temporarily immune — stop casts with CC. Spirit Maul: heavy tank hit."}},
      {mob:"Nalorakk Bear-Guard",tags:["tank","purge"],tip:{nl:"Bear Swipe: frontale cleave — tank van groep afgewend. Enrage: purge of sooth.",en:"Bear Swipe: frontal cleave — face tank away from group. Enrage: purge or sooth."}}
    ],    mdt:false, kg_url:null
  }
};

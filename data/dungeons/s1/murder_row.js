// WoW Midnight — Season 1 dungeon data
const MURDER_ROW = {
  id:"murderrow", name:"Murder Row", zone:"Silvermoon City", type:"normal",
  bosses_short:["Kystia Manaheart","Zaen Bladesorrow","Xathuux","Lithiel Cinderfury"],
  level:{nl:"Ontgrendel lvl 83",en:"Unlock level 83"},
  lore:{
    nl:"De donkere straten van Murder Row verbergen een illegale fel-smokkeloperatie die misbruik maakt van de angst van Silvermoon's burgers. Een malafide warlord beweert haar volk te beschermen — de winst is een prettige bonus.",
    en:"The darkened streets of Murder Row conceal an illegal fel-smuggling operation preying on the fears of Silvermoon's citizens. A rogue warlord claims to protect her people — the profit is merely a pleasant bonus."},
  tips:[
    {title:{nl:"Ingangcoördinaten",en:"Entrance coordinates"},
     text:{nl:"/way #2393 57.0 61.0 — zuidelijk Silvermoon City.",en:"/way #2393 57.0 61.0 — southern Silvermoon City."}},
    {title:{nl:"Interrupt-heavy dungeon",en:"Interrupt-heavy dungeon"},
     text:{nl:"Wijs interruptrotaties toe op casters vóór elke pull.",en:"Assign interrupt rotations on casters before every pull."}}
  ],
  bosses:[
    {name:"Kystia Manaheart",num:1,
     desc:{nl:"Magister verslaafd aan fel. Haar kat Nibbles is aanvankelijk neutraal — Illicit Infusion maakt Nibbles vijandig. Interrupt Mirror Images. Nibbles's Fel Spray vermijden.",en:"Magister addicted to fel. Her cat Nibbles is initially neutral — Illicit Infusion makes Nibbles hostile. Interrupt Mirror Images. Avoid Nibbles's Fel Spray."},
     tank:{nl:["Illicit Infusion: Nibbles wordt vijandig — pak Nibbles direct op.","Defensive bij grote fel-aanvallen."],en:["Illicit Infusion: Nibbles turns hostile — pick up Nibbles immediately.","Use a defensive on major fel attacks."]},
     heal:{nl:["Fel-vuur DoTs op spelers — cleanse of over-heal.","Prioriteer de speler met de meeste gestapelde stacks."],en:["Felfire DoTs on players — cleanse or out-heal them.","Prioritise the player with the most stacked DoTs."]},
     dps:{nl:["Mirror Images interrupt = hoogste prioriteit — de boss wordt anders niet aangevallen.","Nibbles (na Illicit Infusion): Fel Spray is een frontal kegel — stap opzij.","Nibbles snel doden of CC-en."],en:["Mirror Images interrupt = highest priority — otherwise the boss can't be attacked.","Nibbles (after Illicit Infusion): Fel Spray is a frontal cone — step to the side.","Kill or CC Nibbles quickly."]}},
    {name:"Zaen Bladesorrow",num:2,
     desc:{nl:"Smokkelopzichter. Murder in a Row (100 energie): richt op ALLE spelers — pak cover achter Forbidden Freight containers of je gaat dood. Envenom = tank poison. Same-Day Delivery + Fire Bomb = dodge.",en:"Smuggling overseer. Murder in a Row (100 energy): aims at ALL players — get cover behind Forbidden Freight containers or you die. Envenom = tank poison. Same-Day Delivery + Fire Bomb = dodge."},
     tank:{nl:["Envenom = tank poison + healing absorb. Dispel of defensive.","Murder in a Row: cover achter een Forbidden Freight container — als tank sta je al vóór de mechanic op een goede plek."],en:["Envenom = tank poison + healing absorb. Dispel or defensive.","Murder in a Row: cover behind a Forbidden Freight container — as tank already be near a container before the mechanic."]},
     heal:{nl:["Opgeroepen adds = groepsschade — AoE healing voorbereiden.","Burst schade kan snel komen — groep bijhouden."],en:["Summoned adds = group damage — prepare AoE healing.","Burst damage can spike quickly — keep the group topped up."]},
     dps:{nl:["Murder in a Row (100 energie): COVER ACHTER CONTAINERS — instant-kill als je geraakt wordt.","Same-Day Delivery: containers worden gegooid, detoneren na korte delay — loop weg.","Fire Bomb: zes seconden timer, dan AoE — loop weg van de marker."],en:["Murder in a Row (100 energy): TAKE COVER BEHIND CONTAINERS — instant-kill if hit.","Same-Day Delivery: containers thrown, detonate after short delay — move away.","Fire Bomb: six second timer then AoE — move away from the marker."]}}
  ,
    {name:"Xathuux the Annihilator",num:3,
     desc:{nl:"Lithiels krachtigste demon. Demonic Rage (rage vol): grote AoE + Burning Steps-plassen permanent op grond. Legion Strike = healing-reduction op tank+melee. Axe Toss = vermijdbaar.",en:"Lithiel's most powerful demon. Demonic Rage (rage full): large AoE + permanent Burning Steps puddles on ground. Legion Strike = healing reduction on tank+melee. Axe Toss = avoidable."},
     tank:{nl:["Legion Strike = grote hit + healing-reductie op tank én melee. Defensive hier.","Demonic Rage: Burning Steps-plassen leggen zich neer. Sleep de boss constant.","Axe Toss: axen op je positie — opzij stappen."],en:["Legion Strike = large hit + healing reduction on tank and melee. Defensive here.","Demonic Rage: Burning Steps puddles drop. Keep moving the boss.","Axe Toss: axes thrown at your position — step to the side."]},
     heal:{nl:["Legion Strike = healing-reductie op getroffen spelers — spot heal extra.","Demonic Rage: grote AoE-klap — raidcooldown hier.","Burning Steps-plassen op de grond: iedereen uit de brand houden."],en:["Legion Strike = healing reduction on hit players — extra spot healing.","Demonic Rage: large AoE hit — raid cooldown here.","Burning Steps puddles on the ground: keep everyone out of the fire."]},
     dps:{nl:["Demonic Rage = AoE klap + permanente Burning Steps-plassen. BURN zo snel mogelijk — meer Rage-fases = minder arena over.","Legion Strike treft melee ook: healing-reductie. Defensives gebruiken.","Axe Toss: loop weg van de impact-zone."],en:["Demonic Rage = AoE hit + permanent Burning Steps puddles. BURN as fast as possible — more Rage phases = less arena remaining.","Legion Strike hits melee too: healing reduction. Use defensives.","Axe Toss: move away from the impact zone."]}},
    {name:"Lithiel Cinderfury",num:4,
     desc:{nl:"Final boss. Fingers of Gul'dan: Wild Imps spawnen bij alle spelers. Daarna Demonic Gateway + Malefic Wave — LOOP DOOR HET GATEWAY voor immuniteit. Chaos Bolt = interrupt. Demons door de Wave = 100% haste.",en:"Final boss. Fingers of Gul'dan: Wild Imps spawn near all players. Then Demonic Gateway + Malefic Wave — WALK THROUGH THE GATEWAY for immunity. Chaos Bolt = interrupt. Demons hit by Wave = 100% haste."},
     tank:{nl:["Furious Vilefiend: grote demon, pakken en positioneren voor DPS-cleave.","Demons die door Malefic Wave worden geraakt = 100% haste — dood ze direct.","Defensive als Chaos Bolt niet geïnterrupt wordt."],en:["Furious Vilefiend: large demon, pick up and position for DPS cleave.","Demons hit by Malefic Wave = 100% haste — kill them immediately.","Defensive if Chaos Bolt is not interrupted."]},
     heal:{nl:["Fingers of Gul'dan: Wild Imps bij alle spelers = korte AoE-piek. Snel bijhouden.","Malefic Wave: LOOP DOOR HET GATEWAY — anders 100% extra Fire-schade debuff voor 1 min.","Demons die door Wave worden geraakt = 100% haste. Prioriteer ze direct."],en:["Fingers of Gul'dan: Wild Imps near all players = short AoE spike. Top everyone quickly.","Malefic Wave: WALK THROUGH THE GATEWAY — otherwise 100% extra Fire damage debuff for 1 min.","Demons hit by Wave = 100% haste. Prioritize them immediately."]},
     dps:{nl:["Fingers of Gul'dan: Wild Imps spawnen bij ALLE spelers — direct AoE-cleaven.","Malefic Wave: loop door het Gateway = immuniteit. Niet doen = 100% extra Fire schade voor 1 min.","Chaos Bolt = priority interrupt.","Laat demons NIET door de Wave lopen — 100% haste is een probleem."],en:["Fingers of Gul'dan: Wild Imps spawn near ALL players — AoE cleave immediately.","Malefic Wave: walk through Gateway = immunity. Don't = 100% extra Fire damage for 1 min.","Chaos Bolt = priority interrupt.","Don't let demons walk through the Wave — 100% haste is a problem."]}}],
  route:{
    summary:{nl:"Lineaire dungeon. Geen M+-versie. Lust op final boss Lithiel.",en:"Linear dungeon. No M+ version. Lust on final boss Lithiel."},
    lust:[{moment:"Boss 4 — Lithiel Cinderfury 🔥",uitleg:{nl:"Final boss — Bloodlust hier",en:"Final boss — Bloodlust here"}}],
    pulls:[
      {label:{nl:"Pull 1–2",en:"Pull 1–2"},desc:{nl:"Straatpacks. Interruptrotatie op casters.",en:"Street packs. Interrupt rotation on casters."}},
      {label:{nl:"Boss 1 — Kystia",en:"Boss 1 — Kystia"},desc:{nl:"Kanalen onderbreken. Niet in plassen staan.",en:"Interrupt channels. Avoid puddles."}},
      {label:{nl:"Boss 2 — Zaen",en:"Boss 2 — Zaen"},desc:{nl:"Adds direct doden.",en:"Kill adds immediately."}},
      {label:{nl:"Boss 3 — Xathuux",en:"Boss 3 — Xathuux"},desc:{nl:"Tank defensives inzetten. Kleine demonen snel doden.",en:"Use tank defensives. Kill small demons fast."}},
      {label:{nl:"Boss 4 — Lithiel 🔥",en:"Boss 4 — Lithiel 🔥"},desc:{nl:"Final boss. Fel-empowerment altijd onderbreken. Lust hier.",en:"Final boss. Always interrupt fel empowerment. Lust here."}}
    ],
    trash:[
      {mob:"Fel Magister",tags:["int","avoid"],tip:{nl:"Arcane Missiles: interrupt. Felfire Bolt: groot projectiel op random speler — dodge. Caster mob, altijd priority.",en:"Arcane Missiles: interrupt. Felfire Bolt: large projectile on random player — dodge. Caster mob, always priority."}},
      {mob:"Daggerblade Enforcer",tags:["tank","purge"],tip:{nl:"Blade Poison: poison debuff op tank — dispel. Kidney Shot: stunte tank — defensive paraat.",en:"Blade Poison: poison debuff on tank — dispel. Kidney Shot: stuns tank — have a defensive ready."}},
      {mob:"Fel-Touched Imp",tags:["int","avoid"],tip:{nl:"Fel Bolt: interrupt. Spawnen in groepjes bij Lithiel — AoE ze snel weg.",en:"Fel Bolt: interrupt. Spawn in groups near Lithiel — AoE them down quickly."}},
      {mob:"Shady Smuggler",tags:["stop","tank"],tip:{nl:"Stealth mob die van achteren aanvalt — tank positie bewust houden. Ambush: grote burst op tank.",en:"Stealth mob that attacks from behind — be aware of tank positioning. Ambush: large burst on tank."}},
      {mob:"Furious Vilefiend",tags:["tank","int"],tip:{nl:"Lithiel roept deze op. Taunten + in positie voor DPS-cleave. Devouring Frenzy: zware melee. Vile Screech: interrupt.",en:"Summoned by Lithiel. Taunt + position for DPS cleave. Devouring Frenzy: heavy melee. Vile Screech: interrupt."}}
    ],    mdt:false, kg_url:null
  }
};

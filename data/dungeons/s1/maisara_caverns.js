// WoW Midnight — Season 1 dungeon data
const MAISARA_CAVERNS = {
  id:"maisara", name:"Maisara Caverns", zone:"Zul'Aman", type:"mplus",
  bosses_short:["Muro'jin & Nekraxx","Vordaza","Rak'tul"],
  level:{nl:"Ontgrendel lvl 85",en:"Unlock level 85"},
  lore:{
    nl:"Onder de heilige Maisara-heuvels offeren Vilebranch-trollen gevangenen op om necromantie te voeden. Beschouwd als de moeilijkste Seizoen 1-dungeon — de meeste interrupts vereist.",
    en:"Beneath the sacred Maisara Hills, Vilebranch trolls sacrifice prisoners to fuel their necromancy. Widely regarded as the most mechanically demanding Season 1 dungeon — highest interrupt requirements."},
  tips:[
    {title:{nl:"Start: ga RECHTS!",en:"Start: go RIGHT!"},
     text:{nl:"Rechterhuis = Cooking Pot (Hearty Vilebranch Stew — +3% leech/avoidance, 30 min, overleeft de dood). Altijd oppakken.",en:"Right house = Cooking Pot (Hearty Vilebranch Stew — +3% leech/avoidance, 30 min, persists through death). Always grab it."}},
    {title:{nl:"Prisoners bevrijden",en:"Free the Prisoners"},
     text:{nl:"Bevrijdt 8 van 12 Witherbark Prisoners om door te kunnen. Alleen buiten gevecht.",en:"Free 8 of 12 Witherbark Prisoners to progress. Only possible out of combat."}},
    {title:{nl:"⚠ Moeilijkste S1-dungeon",en:"⚠ Hardest S1 dungeon"},
     text:{nl:"Vereist strakke interrupt-rotaties. Wijs rollen toe vóór elke pull.",en:"Requires tight interrupt rotations. Assign roles before every pull."}}
  ],
  bosses:[
    {name:"Muro'jin & Nekraxx",num:1,
     desc:{nl:"Vilebranch-jager met zijn herboren adelaar. DUO-BAAS — dood ze tegelijk, anders krijgt de overlevende een gevaarlijke buff.",en:"A Vilebranch tracker with his reanimated eagle. DUAL BOSS — kill them simultaneously, otherwise the survivor gains a dangerous buff."},
     tank:{nl:["Houd beide bazen bij elkaar voor AoE maar vermijd gelijktijdige frontale aanvallen.","Defensives bij Muro'jin's zware melee-combo's."],en:["Keep both bosses together for AoE but avoid overlapping their frontal attacks.","Use defensives during Muro'jin's heavy melee combos."]},
     heal:{nl:["Nekraxx duikt op willekeurige spelers — spot heal na elke duikaanval.","Twee bazen tegelijk = constante groepsdruk — mana zorgvuldig beheren."],en:["Nekraxx dive-bombs random players — spot heal after every dive attack.","Two bosses simultaneously = constant group pressure — manage mana carefully."]},
     dps:{nl:["INTERRUPTROTATIE VERPLICHT — geen enkele Vilebranch-cast mag doorgaan.","Beide bazen gelijkmatig aanvallen — survivor buff is gevaarlijk.","Nekraxx-duikaanvallen laten grondeffecten achter — nooit blijven staan."],en:["INTERRUPT ROTATION REQUIRED — no Vilebranch cast should ever go through.","Attack both bosses evenly — the survivor buff is dangerous.","Nekraxx dive attacks leave ground effects — never stand in them."]}},
    {name:"Vordaza",num:2,
     desc:{nl:"Necromantische meesteres van zielen. Wrest Phantoms: laat geesten tegen elkaar botsen (niet aanvallen!). Necrotic Convergence: interrupt + doorbreek het schild direct. Drain Soul = zware tankschade.",en:"Necromantic master of souls. Wrest Phantoms: guide spirits to collide with each other (do not attack!). Necrotic Convergence: interrupt + break the shield immediately. Drain Soul = heavy tank damage."},
     tank:{nl:["Drain Soul = zware schade + healing absorb op de tank — grote defensive.","Necrotic Convergence: Deathshroud-schild verschijnt + escalerende AoE — interrupt haar, doorbreek het schild.","Dodge Coalesced Death op de grond."],en:["Drain Soul = heavy damage + healing absorb on the tank — major defensive.","Necrotic Convergence: Deathshroud shield appears + escalating AoE — interrupt her, break the shield.","Dodge Coalesced Death on the ground."]},
     heal:{nl:["Withering Miasma = constante raid-schade het hele gevecht.","Necrotic Convergence: grote cooldown + interrupt zo snel mogelijk. Schild niet doorbreken = wipe.","Drain Soul op tank = healing absorb — prioriteer de tank."],en:["Withering Miasma = constant raid damage throughout the fight.","Necrotic Convergence: major cooldown + interrupt as fast as possible. Not breaking shield = wipe.","Drain Soul on tank = healing absorb — prioritize the tank."]},
     dps:{nl:["Wrest Phantoms: Unstable Phantoms najagen spelers — NIET aanvallen (99% schade-reductie). Leid ze NAAR ELKAAR zodat ze botsen. Max 2 Lingering Dread stacks.","Necrotic Convergence: interrupt + doorbreek schild direct. Niet doen = wipe.","Dodge Coalesced Death. Offensive cooldowns bewaren voor Necrotic Convergence."],en:["Wrest Phantoms: Unstable Phantoms chase players — do NOT attack (99% damage reduction). Guide them TOWARD EACH OTHER to collide. Max 2 Lingering Dread stacks.","Necrotic Convergence: interrupt + break shield immediately. Failing = wipe.","Dodge Coalesced Death. Save offensive cooldowns for Necrotic Convergence."]}},
    {name:"Rak'tul, Vessel of Souls",num:3,
     desc:{nl:"Eindbaas — construct gevuld met gestolen zielen. Meest interrupt-intensieve baas van Seizoen 1.",en:"Final boss — a construct filled with stolen souls. The most interrupt-intensive boss of Season 1."},
     tank:{nl:["Taunt swap bij stapelende debuff-stacks.","Positioneer in het midden zodat de groep ruimte heeft om te bewegen."],en:["Taunt swap on stacking debuffs.","Position in the center so the group has room to move."]},
     heal:{nl:["Aanhoudende AoE-zielschade — constante groepshealing vereist.","Grote cooldown voor hoge-energie-burst-fasen.","Dispel zielencorruptie direct — stacks groeien snel."],en:["Persistent AoE soul damage — constant group healing required.","Major cooldown for high-energy burst phases.","Dispel soul corruption immediately — stacks grow fast."]},
     dps:{nl:["Onderbreek ALLE castbare vaardigheden — absolute hoogste prioriteit.","Focus ziel-fragment-adds — ze voeden de baas als ze blijven leven.","Persoonlijke defensives proactief inzetten."],en:["Interrupt ALL castable abilities — absolute top priority.","Focus soul fragment adds — they empower the boss if left alive.","Use personal defensives proactively."]}}
  ],
  route:{
    summary:{nl:"Start rechts voor de Cooking Pot-buff. 8 Prisoners bevrijden. Lust: pull 1, pull 8, Vessel fase 2.",en:"Start right for the Cooking Pot buff. Free 8 Prisoners. Lust: pull 1, pull 8, Vessel phase 2."},
    lust:[
      {moment:"Pull 1 — 🔥 BLOODLUST",uitleg:{nl:"Eerste grote pull rechts van de ingang",en:"First large pull right of the entrance"}},
      {moment:"Pull 8 — 🔥 BLOODLUST",uitleg:{nl:"Grote pull vlak voor eindbaas",en:"Large pull just before the final boss"}},
      {moment:"Vessel of Souls fase 2 — 🔥",uitleg:{nl:"Tweede fase eindbaas",en:"Final boss phase 2"}}
    ],
    pulls:[
      {label:{nl:"Start — Ga RECHTS",en:"Start — Go RIGHT"},desc:{nl:"Cooking Pot in rechterhuis — altijd oppakken.",en:"Cooking Pot in right house — always grab it."}},
      {label:{nl:"Pull 1 — 🔥 BLOODLUST",en:"Pull 1 — 🔥 BLOODLUST"},desc:{nl:"Eerste grote trashgroep rechts. Lust hier.",en:"First large trash group on the right. Lust here."}},
      {label:{nl:"Pull 2–3 + Prisoners (rechts)",en:"Pull 2–3 + Prisoners (right)"},desc:{nl:"Trash ruimen + Prisoners bevrijden rechts.",en:"Clear trash + free Prisoners on the right side."}},
      {label:{nl:"Pull 4–5 + Prisoners (links)",en:"Pull 4–5 + Prisoners (left)"},desc:{nl:"Herhaal aan de linkerzijde. Vermijd Freezing Traps.",en:"Repeat on the left side. Avoid Freezing Traps."}},
      {label:{nl:"Baas 1 — Muro'jin & Nekraxx",en:"Boss 1 — Muro'jin & Nekraxx"},desc:{nl:"Beide bazen gelijkmatig doden. Nekraxx-duiken ontwijken.",en:"Kill both bosses evenly. Dodge Nekraxx dive attacks."}},
      {label:{nl:"Baas 2 — Vordaza + Rak'tul",en:"Boss 2 — Vordaza + Rak'tul"},desc:{nl:"Vordaza snel doden. Grote cooldown voor Rak'tul.",en:"Kill Vordaza fast. Major cooldown for Rak'tul."}},
      {label:{nl:"Pull 8 — 🔥 BLOODLUST",en:"Pull 8 — 🔥 BLOODLUST"},desc:{nl:"Grote trashpull voor eindbaas. Lust hier.",en:"Large trash pull before the final boss. Lust here."}},
      {label:{nl:"Baas 3 — Vessel of Souls 🔥",en:"Boss 3 — Vessel of Souls 🔥"},desc:{nl:"Alle interrupts. Adds direct doden. Lust in fase 2.",en:"All interrupts. Kill adds immediately. Lust in phase 2."}}
    ],
    trash:[
      {mob:"Frenzied Berserker",tags:["tank","purge"],tip:{nl:"Blood Frenzy: enrage op de mob — sooth. Regeneratin': passieve healing, healing reduction is effectief.",en:"Blood Frenzy: enrage on the mob — sooth. Regeneratin': passive healing, healing reduction is effective."}},
      {mob:"Dread Souleater",tags:["tank","avoid"],tip:{nl:"CC-immuun. Necrotic Wave: healing absorb op alle spelers — stagger defensives. Rain of Toads: AoE cirkels — dodge.",en:"CC-immune. Necrotic Wave: healing absorb on all players — stagger defensives. Rain of Toads: AoE circles — dodge."}},
      {mob:"Keen Headhunter",tags:["int","stop"],tip:{nl:"Hooked Snare: snare op random speler — interrupt of freedom. Throw Spear: stack in melee (minimum range).",en:"Hooked Snare: snare on random player — interrupt or freedom. Throw Spear: stack in melee (minimum range)."}},
      {mob:"Hulking Juggernaut",tags:["tank","stop"],tip:{nl:"CC-immuun. Rending Gore: bleed op tank — defensive of bleed cleanse. Deafening Roar: onderbreekt spellcasts — stop casting als hij dit begint.",en:"CC-immune. Rending Gore: bleed on tank — defensive or bleed cleanse. Deafening Roar: interrupts spellcasting — stop casting when it begins."}},
      {mob:"Grim Skirmisher",tags:["avoid"],tip:{nl:"Grim Ward: buff op de mob. Meerdere Wards tegelijk doorbreken = groeps-AoE. Break ze één voor één.",en:"Grim Ward: buff on the mob. Breaking multiple Wards simultaneously = group AoE. Break them one at a time."}},
      {mob:"Reanimated Warrior",tags:["stop"],tip:{nl:"Reanimation bij 0 HP: probeert zichzelf te reviven — CC direct bij 0 HP, dan snel doden.",en:"Reanimation at 0 HP: attempts to revive itself — CC immediately at 0 HP, then kill fast."}},
      {mob:"Hollow Soulrender",tags:["int","avoid"],tip:{nl:"Tough mob. Shadowfrost Blast: interrupt. Frost Nova: AoE freeze — root break of dodge. Rend Souls: tank schade.",en:"Tough mob. Shadowfrost Blast: interrupt. Frost Nova: AoE freeze — root break or dodge. Rend Souls: tank damage."}},
      {mob:"Zil'jan",tags:["avoid"],tip:{nl:"Mini-boss op de brug. Ritual Drums: zware puls-AoE + stuiterende shadow orbs over de brug. Kill hem snel en ontwijkt orbs bij het oversteken.",en:"Mini-boss on the bridge. Ritual Drums: heavy pulse AoE + bouncing shadow orbs down the bridge. Kill him fast and dodge orbs while crossing."}},
      {mob:"Rokh'zal",tags:["int","stop"],tip:{nl:"Tough mini-boss. Invoke Shadow: interrupt. Ritual Sacrifice: interrupt! Als hij dit voltooit voor hij dood is = wipe.",en:"Tough mini-boss. Invoke Shadow: interrupt. Ritual Sacrifice: interrupt! If he completes this before dying = wipe."}}
    ],
    mdt:true, kg_url:"https://keystone.guru/routes/retail/maisara-caverns/new"
  }
};

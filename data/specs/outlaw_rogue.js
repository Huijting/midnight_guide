if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];

const SPEC_OUTLAW_ROGUE = {
  id: 'outlaw_rogue',
  icon: '🏴‍☠️',
  class: 'Rogue',
  spec:   { nl: 'Outlaw', en: 'Outlaw', da: 'Outlaw' },
  role:   'melee',
  armor:  'Leather',
  weapon: { nl: 'Eénhandig zwaard/pistool + offhand dolk', en: 'One-hand sword/pistol + offhand dagger', da: 'Enhånds sværd/pistol + offhand dolk' },
  resource: 'Energy + Combo Points',
  patch: '1.0',
  color: '#FFF468',

  summary: {
    nl: 'Outlaw Rogue is de swashbucklende piraat van WoW. Roll the Bones geeft random buffs — soms geweldig, soms herspelen. Uitstekende AoE burst en hoge mobiliteit.',
    en: 'Outlaw Rogue is the swashbuckling pirate of WoW. Roll the Bones gives random buffs — sometimes great, sometimes reroll. Excellent AoE burst and high mobility.',
    da: 'Outlaw Rogue er WoW\'s sværdkæmpende pirat. Roll the Bones giver tilfældige buffs — nogle gange fremragende, nogle gange genkast. Fremragende AoE-burst og høj mobilitet.',
  },
  pros: {
    nl: ['Uitstekende AoE burst via Blade Flurry', 'Hoge mobiliteit — Sprint + Grappling Hook', 'Eenvoudig leren, moeilijk meisteren', 'Shroud of Concealment voor M+ skips'],
    en: ['Excellent AoE burst via Blade Flurry', 'High mobility — Sprint + Grappling Hook', 'Easy to learn, hard to master', 'Shroud of Concealment for M+ skips'],
    da: ['Fremragende AoE-burst via Blade Flurry', 'Høj mobilitet — Sprint + Grappling Hook', 'Let at lære, svær at mestre', 'Shroud of Concealment til M+-spring'],
  },
  cons: {
    nl: ['Roll the Bones RNG kan frustreren', 'Minder sterk op pure single target', 'Middelmatige sustained schade buiten burst'],
    en: ['Roll the Bones RNG can be frustrating', 'Weaker on pure single target', 'Mediocre sustained damage outside burst'],
    da: ['Roll the Bones RNG kan frustrere', 'Svagere på ren single target', 'Middelmådig vedvarende skade uden for burst'],
  },

  cheatsheet: {
    nl: {
      opener: 'Ambush (Stealth) → Roll the Bones → Slice and Dice → Sinister Strike spam → Between the Eyes',
      single: 'Roll the Bones actief → Slice and Dice actief → Sinister Strike → Between the Eyes (5 CPs)',
      aoe:    'Blade Flurry aan → Sinister Strike spam → Between the Eyes (raakt iedereen via Flurry)',
      rules: [
        'Roll the Bones altijd actief — herspeel bij 1 buff',
        'Slice and Dice altijd actief — Energy regen buff',
        'Blade Flurry aan bij 2+ targets',
        'Between the Eyes altijd bij 5 CPs',
        'Ambush altijd vanuit Stealth/Shadow Dance',
      ],
    },
    en: {
      opener: 'Ambush (Stealth) → Roll the Bones → Slice and Dice → Sinister Strike spam → Between the Eyes',
      single: 'Roll the Bones active → Slice and Dice active → Sinister Strike → Between the Eyes (5 CPs)',
      aoe:    'Blade Flurry on → Sinister Strike spam → Between the Eyes (hits everyone via Flurry)',
      rules: [
        'Roll the Bones always active — reroll at 1 buff',
        'Slice and Dice always active — Energy regen buff',
        'Blade Flurry on at 2+ targets',
        'Between the Eyes always at 5 CPs',
        'Ambush always from Stealth/Shadow Dance',
      ],
    },
    da: {
      opener: 'Ambush (Stealth) → Roll the Bones → Slice and Dice → Sinister Strike-spam → Between the Eyes',
      single: 'Roll the Bones aktiv → Slice and Dice aktiv → Sinister Strike → Between the Eyes (5 CPs)',
      aoe:    'Blade Flurry til → Sinister Strike-spam → Between the Eyes (rammer alle via Flurry)',
      rules: [
        'Roll the Bones altid aktiv — genkast ved 1 buff',
        'Slice and Dice altid aktiv — Energy-regen-buff',
        'Blade Flurry til ved 2+ mål',
        'Between the Eyes altid ved 5 CPs',
        'Ambush altid fra Stealth/Shadow Dance',
      ],
    },
  },

  rotation: {
    nl: {
      apex_tip: '💡 Roll the Bones beste buffs: Broadside, True Bearing, Ruthless Precision. Bij 2+ van deze drie: HOUD vast. Bij 1 of slechte buffs: herrol!',
      opener: [
        { spell: 'Ambush (Stealth)', why: 'Gratis 2 CPs extra — altijd opener vanuit stealth' },
        { spell: 'Roll the Bones', why: 'Random buffs — herrol bij slechte outcome' },
        { spell: 'Slice and Dice', why: 'Energie buff — altijd actief houden' },
        { spell: 'Sinister Strike', why: 'Hoofd CP generator' },
        { spell: 'Between the Eyes', why: '5 CPs — sterk ST finisher' },
      ],
      single: [
        { spell: 'Sinister Strike', why: 'Hoofd aanval — soms dubbele treffer (Opportunity)' },
        { spell: 'Between the Eyes', why: '5 CPs — sterkste finisher' },
        { spell: 'Slice and Dice', why: 'Hernieuwen als verlopen — Energy buff' },
        { spell: 'Roll the Bones', why: 'Hernieuwen bij 1 of slechte buffs' },
        { spell: 'Ambush', why: 'Vanuit Shadow Dance stealth window' },
      ],
      aoe: [
        { spell: 'Blade Flurry', why: 'Aanzetten bij 2+ targets — cleave alle hits' },
        { spell: 'Sinister Strike', why: 'Via Flurry raakt het alle targets rondom je' },
        { spell: 'Between the Eyes', why: 'Via Flurry massive AoE burst' },
        { spell: 'Ambush', why: 'Shadow Dance voor gratis stealth tijdens AoE' },
      ],
    },
    en: {
      apex_tip: '💡 Roll the Bones best buffs: Broadside, True Bearing, Ruthless Precision. With 2+ of these three: KEEP. With 1 or bad buffs: reroll!',
      opener: [
        { spell: 'Ambush (Stealth)', why: 'Free 2 extra CPs — always open from stealth' },
        { spell: 'Roll the Bones', why: 'Random buffs — reroll on bad outcome' },
        { spell: 'Slice and Dice', why: 'Energy buff — always keep active' },
        { spell: 'Sinister Strike', why: 'Main CP generator' },
        { spell: 'Between the Eyes', why: '5 CPs — strong ST finisher' },
      ],
      single: [
        { spell: 'Sinister Strike', why: 'Main attack — sometimes double hit (Opportunity)' },
        { spell: 'Between the Eyes', why: '5 CPs — strongest finisher' },
        { spell: 'Slice and Dice', why: 'Refresh when expired — Energy buff' },
        { spell: 'Roll the Bones', why: 'Refresh at 1 or bad buffs' },
        { spell: 'Ambush', why: 'From Shadow Dance stealth window' },
      ],
      aoe: [
        { spell: 'Blade Flurry', why: 'Activate at 2+ targets — cleave all hits' },
        { spell: 'Sinister Strike', why: 'Via Flurry hits all targets around you' },
        { spell: 'Between the Eyes', why: 'Via Flurry massive AoE burst' },
        { spell: 'Ambush', why: 'Shadow Dance for free stealth during AoE' },
      ],
    },
    da: {
      apex_tip: '💡 Roll the Bones bedste buffs: Broadside, True Bearing, Ruthless Precision. Med 2+ af disse tre: BEHOLD. Med 1 eller dårlige buffs: genkast!',
      opener: [
        { spell: 'Ambush (Stealth)', why: 'Gratis 2 ekstra CPs — åbn altid fra stealth' },
        { spell: 'Roll the Bones', why: 'Tilfældige buffs — genkast ved dårlig udfald' },
        { spell: 'Slice and Dice', why: 'Energy-buff — hold altid aktiv' },
        { spell: 'Sinister Strike', why: 'Hoved CP-generator' },
        { spell: 'Between the Eyes', why: '5 CPs — stærk ST finisher' },
      ],
      single: [
        { spell: 'Sinister Strike', why: 'Hoved angreb — nogle gange dobbelt træf (Opportunity)' },
        { spell: 'Between the Eyes', why: '5 CPs — stærkeste finisher' },
        { spell: 'Slice and Dice', why: 'Forny når udløbet — Energy-buff' },
        { spell: 'Roll the Bones', why: 'Forny ved 1 eller dårlige buffs' },
        { spell: 'Ambush', why: 'Fra Shadow Dance stealth-vindue' },
      ],
      aoe: [
        { spell: 'Blade Flurry', why: 'Aktiver ved 2+ mål — cleave alle træf' },
        { spell: 'Sinister Strike', why: 'Via Flurry rammer alle mål omkring dig' },
        { spell: 'Between the Eyes', why: 'Via Flurry massiv AoE-burst' },
        { spell: 'Ambush', why: 'Shadow Dance til gratis stealth under AoE' },
      ],
    },
  },

  stats: {
    nl: {
      tip: 'Haste is de beste stat voor Outlaw — meer Energy = meer Sinister Strikes = meer CPs.',
      list: [
        { rank:1, stat:'Agility',         bars:5, note:'Primaire stat' },
        { rank:2, stat:'Haste',           bars:5, note:'Meer Energy regen = meer aanvallen' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Verhoogt Sinister Strike en finisher schade' },
        { rank:4, stat:'Versatility',     bars:2, note:'Schade reductie + kleine schade boost' },
        { rank:5, stat:'Mastery',         bars:1, note:'Laagste prioriteit voor Outlaw' },
      ],
    },
    en: {
      tip: 'Haste is the best stat for Outlaw — more Energy = more Sinister Strikes = more CPs.',
      list: [
        { rank:1, stat:'Agility',         bars:5, note:'Primary stat' },
        { rank:2, stat:'Haste',           bars:5, note:'More Energy regen = more attacks' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Increases Sinister Strike and finisher damage' },
        { rank:4, stat:'Versatility',     bars:2, note:'Damage reduction + small damage boost' },
        { rank:5, stat:'Mastery',         bars:1, note:'Lowest priority for Outlaw' },
      ],
    },
    da: {
      tip: 'Haste er den bedste stat for Outlaw — mere Energy = flere Sinister Strikes = flere CPs.',
      list: [
        { rank:1, stat:'Agility',         bars:5, note:'Primær stat' },
        { rank:2, stat:'Haste',           bars:5, note:'Mere Energy-regen = flere angreb' },
        { rank:3, stat:'Critical Strike', bars:3, note:'Øger Sinister Strike og finisher-skade' },
        { rank:4, stat:'Versatility',     bars:2, note:'Skadereduktion + lille skade-boost' },
        { rank:5, stat:'Mastery',         bars:1, note:'Lavest prioritet for Outlaw' },
      ],
    },
  },

  cooldowns: {
    nl: [
      { spell:'Adrenaline Rush',  cd:'3 min',  effect:'100% meer Energy regen 20 sec + extra CPs', when:'Op pull — grote burst opener' },
      { spell:'Blade Flurry',     cd:'-',      effect:'Toggle: alle aanvallen cleaven naar 1 extra target', when:'Aanzetten bij 2+ targets' },
      { spell:'Shadow Dance',     cd:'1 min',  effect:'3 sec stealth — Ambush toegestaan', when:'Extra Ambush buiten stealth voor burst' },
      { spell:'Killing Spree',    cd:'2 min',  effect:'Teleporteert snel naar meerdere targets en valt aan', when:'AoE burst of execute phase' },
      { spell:'Cloak of Shadows', cd:'1 min',  effect:'Verwijdert alle magical debuffs', when:'Noodoptie defensief' },
    ],
    en: [
      { spell:'Adrenaline Rush',  cd:'3 min',  effect:'100% more Energy regen 20 sec + extra CPs', when:'On pull — major burst opener' },
      { spell:'Blade Flurry',     cd:'-',      effect:'Toggle: all attacks cleave to 1 extra target', when:'Activate at 2+ targets' },
      { spell:'Shadow Dance',     cd:'1 min',  effect:'3 sec stealth — Ambush allowed', when:'Extra Ambush outside stealth for burst' },
      { spell:'Killing Spree',    cd:'2 min',  effect:'Quickly teleports to multiple targets and attacks', when:'AoE burst or execute phase' },
      { spell:'Cloak of Shadows', cd:'1 min',  effect:'Removes all magical debuffs', when:'Emergency defensive option' },
    ],
    da: [
      { spell:'Adrenaline Rush',  cd:'3 min',  effect:'100% mere Energy-regen i 20 sek + ekstra CPs', when:'På pull — stor burst-opener' },
      { spell:'Blade Flurry',     cd:'-',      effect:'Toggle: alle angreb cleaver til 1 ekstra mål', when:'Aktiver ved 2+ mål' },
      { spell:'Shadow Dance',     cd:'1 min',  effect:'3 sek stealth — Ambush tilladt', when:'Ekstra Ambush uden for stealth til burst' },
      { spell:'Killing Spree',    cd:'2 min',  effect:'Teleporterer hurtigt til flere mål og angriber', when:'AoE-burst eller execute-fase' },
      { spell:'Cloak of Shadows', cd:'1 min',  effect:'Fjerner alle magiske debuffs', when:'Nødsmulighed defensivt' },
    ],
  },

  utility: {
    nl: [
      { spell:'Shroud of Concealment', type:'Stealth',   note:'Groep-stealth 15 sec — M+ skips' },
      { spell:'Kick',                  type:'Interrupt',  note:'Snelle interrupt 15 sec CD' },
      { spell:'Blind',                 type:'CC',         note:'1 min disables — breekt op schade' },
      { spell:'Grappling Hook',        type:'Mobiliteit', note:'Schiet jezelf naar locatie — unieke mobiliteit' },
      { spell:'Sprint',                type:'Snelheid',   note:'70% snelheidsboost 8 sec — 1 min CD' },
    ],
    en: [
      { spell:'Shroud of Concealment', type:'Stealth',   note:'Group stealth 15 sec — M+ skips' },
      { spell:'Kick',                  type:'Interrupt',  note:'Fast interrupt 15 sec CD' },
      { spell:'Blind',                 type:'CC',         note:'1 min disables — breaks on damage' },
      { spell:'Grappling Hook',        type:'Mobility',   note:'Shoot yourself to location — unique mobility' },
      { spell:'Sprint',                type:'Speed',      note:'70% speed boost 8 sec — 1 min CD' },
    ],
    da: [
      { spell:'Shroud of Concealment', type:'Stealth',   note:'Gruppe-stealth i 15 sek — M+-spring' },
      { spell:'Kick',                  type:'Interrupt',  note:'Hurtig interrupt 15 sek CD' },
      { spell:'Blind',                 type:'CC',         note:'1 min deaktivering — brydes ved skade' },
      { spell:'Grappling Hook',        type:'Mobilitet',  note:'Skyd dig selv til placering — unik mobilitet' },
      { spell:'Sprint',                type:'Hastighed',  note:'70% hastighedsboost i 8 sek — 1 min CD' },
    ],
  },

  tips: {
    nl: [
      { icon:'🎲', title:'Roll the Bones strategie', text:'Broadside, True Bearing en Ruthless Precision zijn de beste buffs. Bij 2 van deze drie houd je altijd vast. Bij slechts 1 buff, herrol je tot je beter gooit.' },
      { icon:'⚡', title:'Blade Flurry aan/uit', text:'Blade Flurry kost Energy als het aan is. Zet het uit op pure ST fights. Zet het aan bij 2+ targets — het cleaved automatisch alles.' },
      { icon:'🪝', title:'Grappling Hook = M+ troef', text:'Grappling Hook is uniek voor Outlaw. In M+ gebruik je het om snel naar de volgende pack te gaan of mechanics te ontwijken. Train je gebruik ervan!' },
      { icon:'🏴‍☠️', title:'Adrenaline Rush opener', text:'Adrenaline Rush direct op pull voor 100% Energy regen. Dit maakt je eerste 20 sec enorm krachtig. Pool Energy voor Rush voor maximaal effect.' },
      { icon:'👁️', title:'Shadow Dance slim gebruiken', text:'Shadow Dance geeft je 3 sec stealth voor een gratis Ambush (2 extra CPs). Gebruik het tijdens burst windows, niet alleen als defensief escape.' },
    ],
    en: [
      { icon:'🎲', title:'Roll the Bones strategy', text:'Broadside, True Bearing and Ruthless Precision are the best buffs. With 2 of these three you always hold. With only 1 buff, reroll until you get better.' },
      { icon:'⚡', title:'Blade Flurry on/off', text:'Blade Flurry costs Energy when on. Turn it off on pure ST fights. Turn it on at 2+ targets — it automatically cleaves everything.' },
      { icon:'🪝', title:'Grappling Hook = M+ asset', text:'Grappling Hook is unique to Outlaw. In M+ use it to quickly reach the next pack or dodge mechanics. Train your usage of it!' },
      { icon:'🏴‍☠️', title:'Adrenaline Rush opener', text:'Adrenaline Rush directly on pull for 100% Energy regen. This makes your first 20 sec enormously powerful. Pool Energy before Rush for maximum effect.' },
      { icon:'👁️', title:'Smart Shadow Dance usage', text:'Shadow Dance gives you 3 sec stealth for a free Ambush (2 extra CPs). Use it during burst windows, not only as a defensive escape.' },
    ],
    da: [
      { icon:'🎲', title:'Roll the Bones strategi', text:'Broadside, True Bearing og Ruthless Precision er de bedste buffs. Med 2 af disse tre holder du altid. Med kun 1 buff genkaster du til du slår bedre.' },
      { icon:'⚡', title:'Blade Flurry til/fra', text:'Blade Flurry koster Energy når den er til. Sluk den på rene ST-kampe. Tænd den ved 2+ mål — den cleaver automatisk alt.' },
      { icon:'🪝', title:'Grappling Hook = M+-aktiv', text:'Grappling Hook er unikt for Outlaw. I M+ bruger du det til hurtigt at nå næste gruppe eller undvige mekanikker. Træn din brug af det!' },
      { icon:'🏴‍☠️', title:'Adrenaline Rush opener', text:'Adrenaline Rush direkte på pull til 100% Energy-regen. Dette gør dine første 20 sek enormt kraftfulde. Pool Energy inden Rush for maksimal effekt.' },
      { icon:'👁️', title:'Smart Shadow Dance brug', text:'Shadow Dance giver dig 3 sek stealth til en gratis Ambush (2 ekstra CPs). Brug det under burst-vinduer, ikke kun som defensivt flugt.' },
    ],
  },

  macros: {
    nl: [
      { name:'Adrenaline Rush opener', code:'/cast Adrenaline Rush\n/cast Roll the Bones', note:'Pull opener — Energy boost + direct buffs rollen.' },
      { name:'Shadow Dance + Ambush', code:'/cast Shadow Dance\n/cast Ambush', note:'Instant stealth Ambush voor gratis CPs tijdens fight.' },
      { name:'Shroud groep', code:'/cast Shroud of Concealment', note:'Groep-stealth voor M+ skips.' },
    ],
    en: [
      { name:'Adrenaline Rush opener', code:'/cast Adrenaline Rush\n/cast Roll the Bones', note:'Pull opener — Energy boost + immediately roll buffs.' },
      { name:'Shadow Dance + Ambush', code:'/cast Shadow Dance\n/cast Ambush', note:'Instant stealth Ambush for free CPs during fight.' },
      { name:'Shroud group', code:'/cast Shroud of Concealment', note:'Group stealth for M+ skips.' },
    ],
    da: [
      { name:'Adrenaline Rush opener', code:'/cast Adrenaline Rush\n/cast Roll the Bones', note:'Pull opener — Energy-boost + straks kast buffs.' },
      { name:'Shadow Dance + Ambush', code:'/cast Shadow Dance\n/cast Ambush', note:'Instant stealth Ambush til gratis CPs under kamp.' },
      { name:'Shroud gruppe', code:'/cast Shroud of Concealment', note:'Gruppe-stealth til M+-spring.' },
    ],
  },

  resource_info: {
    nl: {
      intro: 'Outlaw gebruikt Energy (0-100) en Combo Points (0-5). Energy regenereert snel, zeker tijdens Adrenaline Rush.',
      generate: [
        'Sinister Strike — 1 CP (soms 2 via Opportunity proc)',
        'Ambush — 2 CPs extra (uit stealth/Shadow Dance)',
        'Adrenaline Rush — verdubbelt Energy regeneratie 20 sec',
        'Pistol Shot — 1 CP via Opportunity proc',
      ],
      spend: [
        'Between the Eyes (5 CPs) — sterkste finisher, stuned target',
        'Slice and Dice (5 CPs) — Energy regen buff, altijd actief',
        'Roll the Bones (1 CP) — random buffs, herrol strategisch',
      ],
      pet_tip: '💡 Slice and Dice altijd actief — het geeft je gratis Energy regen. Nooit verlopen laten!',
      pets: [],
    },
    en: {
      intro: 'Outlaw uses Energy (0-100) and Combo Points (0-5). Energy regenerates fast, especially during Adrenaline Rush.',
      generate: [
        'Sinister Strike — 1 CP (sometimes 2 via Opportunity proc)',
        'Ambush — 2 extra CPs (from stealth/Shadow Dance)',
        'Adrenaline Rush — doubles Energy regeneration 20 sec',
        'Pistol Shot — 1 CP via Opportunity proc',
      ],
      spend: [
        'Between the Eyes (5 CPs) — strongest finisher, stuns target',
        'Slice and Dice (5 CPs) — Energy regen buff, always active',
        'Roll the Bones (1 CP) — random buffs, reroll strategically',
      ],
      pet_tip: '💡 Slice and Dice always active — it gives you free Energy regen. Never let it expire!',
      pets: [],
    },
    da: {
      intro: 'Outlaw bruger Energy (0-100) og Combo Points (0-5). Energy regenererer hurtigt, især under Adrenaline Rush.',
      generate: [
        'Sinister Strike — 1 CP (nogle gange 2 via Opportunity proc)',
        'Ambush — 2 ekstra CPs (fra stealth/Shadow Dance)',
        'Adrenaline Rush — fordobler Energy-regenerering i 20 sek',
        'Pistol Shot — 1 CP via Opportunity proc',
      ],
      spend: [
        'Between the Eyes (5 CPs) — stærkeste finisher, stunner mål',
        'Slice and Dice (5 CPs) — Energy-regen-buff, altid aktiv',
        'Roll the Bones (1 CP) — tilfældige buffs, genkast strategisk',
      ],
      pet_tip: '💡 Slice and Dice altid aktiv — det giver dig gratis Energy-regen. Lad den aldrig udløbe!',
      pets: [],
    },
  },

  consumables: {
    nl: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Verhoogt Agility voor 1 uur.',                note:'Altijd actief' },
      { type:'pot',    name:'Tempered Potion',             effect:'Agility boost — gebruik bij Adrenaline Rush', note:'Op pull voor maximum effect' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Agility en Stamina via groepsfeast.',       note:'Feast vragen' },
      { type:'food',   name:'Feisty Fish Sticks',          effect:'Solo food backup.',                          note:'Backup als geen feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primaire stat 1 uur.',                      note:'Altijd gebruiken' },
    ],
    en: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Increases Agility for 1 hour.',              note:'Always active' },
      { type:'pot',    name:'Tempered Potion',             effect:'Agility boost — use with Adrenaline Rush',  note:'On pull for maximum effect' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Agility and Stamina via group feast.',     note:'Ask for feast' },
      { type:'food',   name:'Feisty Fish Sticks',          effect:'Solo food backup.',                         note:'Backup if no feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primary stat 1 hour.',                     note:'Always use' },
    ],
    da: [
      { type:'flask',  name:'Flask of the Focused Dream',  effect:'Øger Agility i 1 time.',                     note:'Altid aktiv' },
      { type:'pot',    name:'Tempered Potion',             effect:'Agility-boost — brug med Adrenaline Rush',  note:'På pull for maksimal effekt' },
      { type:'food',   name:'The Sushi Special (Feast)',   effect:'+Agility og Stamina via gruppefeast.',      note:'Bed om feast' },
      { type:'food',   name:'Feisty Fish Sticks',          effect:'Solo-mad backup.',                          note:'Backup hvis ingen feast' },
      { type:'rune',   name:'Crystalline Augment Rune',    effect:'+Primær stat 1 time.',                      note:'Brug altid' },
    ],
  },
};

ALL_SPECS.push(SPEC_OUTLAW_ROGUE);

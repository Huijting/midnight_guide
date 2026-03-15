// data/raids/march_on_queldanas.js
// March on Quel'Danas — Midnight Season 1 Raid
// 2 bosses: Belo'ren, Child of Al'ar & Midnight Falls (L'ura)

if (typeof DUNGEONS === 'undefined') window.DUNGEONS = [];

DUNGEONS.push({
  id:   'marchqueldanas',
  type: 'raid',
  name: "March on Quel'Danas",
  zone: { nl: "Quel'Danas — Isle of Quel'Danas", en: "Quel'Danas — Isle of Quel'Danas", da: "Quel'Danas — Isle of Quel'Danas" },
  time: null,
  level: { nl: 'Seizoen 1 Raid — Normal/Heroic/Mythic (opent 31 mrt 2026)', en: 'Season 1 Raid — Normal/Heroic/Mythic (opens Mar 31, 2026)', da: 'Sæson 1 Raid — Normal/Heroic/Mythic (åbner 31. mar 2026)' },
  bosses_short: ["Belo'ren, Child of Al'ar", 'Midnight Falls'],

  lore: {
    nl: "Na de Voidspire bereikt Xal'atath haar eindoel: de Sunwell gebruiken om haar greep op Azeroth te verzegelen. Ze zet de Dark Naaru L'ura in om de Sunwell te transformeren naar een Darkwell. Twee wachters staan tussen jou en het lot van de Sunwell: Belo'ren — verward en gecorrumpeerd, maar plichtsgetrouw — en L'ura, die al lang in het Void is gevallen.",
    en: "After the Voidspire, Xal'atath reaches her final goal: using the Sunwell to seal her grip on Azeroth. She deploys the Dark Naaru L'ura to transform the Sunwell into a Darkwell. Two guardians stand between you and the fate of the Sunwell: Belo'ren — confused and corrupted but faithful to its purpose — and L'ura, long fallen to the Void.",
    da: "Efter Voidspire når Xal'atath sit endelige mål: at bruge Sunwell til at besegle sit greb om Azeroth. Hun indsætter Dark Naaru L'ura til at transformere Sunwell til et Darkwell. To vogtere står mellem dig og Sunwellens skæbne: Belo'ren — forvirret og korrumperet men tro mod sit formål — og L'ura, der for længst er faldet til Void.",
  },

  tips: [
    {
      title: { nl: '📍 Ingang — opent 31 maart 2026', en: '📍 Entrance — opens March 31, 2026', da: '📍 Indgang — åbner 31. marts 2026' },
      text:  { nl: "Isle of Quel'Danas, direct ten noorden van Silvermoon City. Geen LFR op openingsdag — LFR opent 7 april 2026.",
               en: "Isle of Quel'Danas, directly north of Silvermoon City. No LFR on opening day — LFR opens April 7, 2026.",
               da: "Isle of Quel'Danas, direkte nord for Silvermoon City. Ingen LFR på åbningsdagen — LFR åbner 7. april 2026." },
    },
    {
      title: { nl: '⚠️ Slechts 2 bosses — maar geen filler', en: '⚠️ Only 2 bosses — but no filler', da: '⚠️ Kun 2 bosser — men ingen filler' },
      text:  { nl: 'Beide encounters zijn mechanisch zwaar en vereisen nagenoeg perfecte uitvoering. Er is geen makkelijke eerste boss. Begin goed voorbereid.',
               en: 'Both encounters are mechanically demanding and require near-perfect execution. There is no easy first boss. Come prepared.',
               da: 'Begge encounters er mekanisk krævende og kræver næsten perfekt udførelse. Der er ingen nem første boss. Kom forberedt.' },
    },
    {
      title: { nl: '🎁 Omni-tier token', en: '🎁 Omni-tier token', da: '🎁 Omni-tier token' },
      text:  { nl: "Midnight Falls dropt de Chiming Void Curio: de enige gerichte tier-token van het seizoen. Je kiest zelf welk Tier 35-slot je wilt — geen RNG.",
               en: "Midnight Falls drops the Chiming Void Curio: the only targeted tier token of the season. You choose which Tier 35 slot you want — no RNG.",
               da: "Midnight Falls dropper Chiming Void Curio: den eneste målrettede tier-token i sæsonen. Du vælger selv hvilken Tier 35-slot du vil have — ingen RNG." },
    },
    {
      title: { nl: '🐦 Mount: Ashes of Belo\'ren (Mythic)', en: "🐦 Mount: Ashes of Belo'ren (Mythic)", da: "🐦 Mount: Ashes of Belo'ren (Mythic)" },
      text:  { nl: "Een Void-gecorrumpeerde feniks-mount. Dropt van Midnight Falls op Mythic (3 exemplaren per 20-speler kill) gedurende Seizoen 1.",
               en: "A Void-corrupted phoenix mount. Drops from Midnight Falls on Mythic (3 copies per 20-player kill) during Season 1.",
               da: "Et Void-korrumperet føniks-mount. Dropper fra Midnight Falls på Mythic (3 eksemplarer per 20-spiller kill) i Sæson 1." },
    },
    {
      title: { nl: '🛡 Essentiële utilities', en: '🛡 Essential utilities', da: '🛡 Essentielle utilities' },
      text:  { nl: 'Neem mee: Mass Dispel (Priest), sterke interrupt-dekking (Midnight Falls Termination Prism), en een aangewezen caller voor Licht/Void-kleurtoewijzingen bij Belo\'ren.',
               en: "Bring: Mass Dispel (Priest), strong interrupt coverage (Midnight Falls Termination Prism), and a designated caller for Light/Void color assignments at Belo'ren.",
               da: "Tag med: Mass Dispel (Priest), stærk interrupt-dækning (Midnight Falls Termination Prism), og en udpeget caller til Lys/Void-farveopgaver ved Belo'ren." },
    },
  ],

  bosses: [
    // ── BOSS 1 ────────────────────────────────────────────────
    {
      num: 1,
      name: "Belo'ren, Child of Al'ar",
      desc: {
        nl: "Licht/Void-duelsysteem: elke speler krijgt een Licht-veer OF Void-veer toegewezen. Wissel door het gevecht. ALLEEN spelers met de juiste kleur kunnen bepaalde casts interrupts, orbs soaken of kegels onderscheppen. Verkeerde kleur = groot schade. Phoenix-mechanics: Belo'ren sterft en hergeboort 2-3 keer als ei — BURN het ei.",
        en: "Light/Void dual system: each player is assigned a Light feather OR Void feather. Assignments swap throughout the fight. ONLY players with the matching color can interrupt certain casts, soak orbs, or intercept cones. Wrong color = massive damage. Phoenix mechanics: Belo'ren dies and rebirths 2-3 times as an egg — BURN the egg.",
        da: "Lys/Void-dualsystem: hver spiller tildeles en Lysfjer ELLER Voidfjer. Opgaver skifter igennem kampen. KUN spillere med den matchende farve kan afbryde bestemte casts, soake orbs eller afskære kegler. Forkert farve = massiv skade. Føniks-mekanikker: Belo'ren dør og genfødes 2-3 gange som æg — BURN ægget.",
      },
      tank: {
        nl: [
          '<strong>Kleurtoewijzing</strong> — Tank heeft Licht- of Void-kleur per fase. De MATCHING-kleur-tank MOET de kegels van Belo\'ren opvangen. Mis je dit één keer: Belo\'ren krijgt +30% schade-buff. Twee keer: wipe.',
          '<strong>Void Screech / Light Screech</strong> — Zware kegel per fase. Altijd de juiste tank vooraan positioneren. Nooit de verkeerde kleur in de frontlijn.',
          '<strong>Ei-fase</strong> — Belo\'ren transformeert in een groot ei: dit IS de HP-balk die je moet branden. Pak eventuele adds op die dan spawnen.',
          '<strong>Ember adds</strong> — Kleine adds spawnen door het gevecht. Als ze sterven worden ze eieren (15 sec revive timer). Tank pakt ze direct op, DPS burst het ei.',
        ],
        en: [
          "<strong>Color assignment</strong> — Tank has Light or Void color per phase. The MATCHING-color tank MUST intercept Belo'ren's cones. Miss this once: Belo'ren gets +30% damage buff. Twice: wipe.",
          '<strong>Void Screech / Light Screech</strong> — Heavy cone per phase. Always position the correct color tank at the front. Never the wrong color in the front line.',
          "<strong>Egg phase</strong> — Belo'ren transforms into a large egg: this IS the HP bar you need to burn. Pick up any adds that spawn during this.",
          '<strong>Ember adds</strong> — Small adds spawn throughout the fight. When they die they become eggs (15 sec revive timer). Tank picks them up immediately, DPS bursts the egg.',
        ],
        da: [
          "<strong>Farveopgave</strong> — Tank har Lys- eller Void-farve per fase. Den MATCHENDE farve-tank SKAL opfange Belo'rens kegler. Glipper det én gang: Belo'ren får +30% skade-buff. To gange: wipe.",
          '<strong>Void Screech / Light Screech</strong> — Tung kegle per fase. Positionér altid den korrekte farve-tank forrest. Aldrig den forkerte farve i forreste linje.',
          "<strong>Æg-fase</strong> — Belo'ren transformerer til et stort æg: dette ER HP-bjælken du skal burne. Tag adds op der spawner i mellemtiden.",
          '<strong>Ember adds</strong> — Små adds spawner igennem kampen. Når de dør bliver de til æg (15 sek revive timer). Tank tager dem straks op, DPS burner ægget.',
        ],
      },
      heal: {
        nl: [
          '<strong>Licht/Void-overgangsschade</strong> — Elke keer dat toewijzingen wisselen neemt de raid een korte schade-piek. Bereid spot-heals voor op elke wissel.',
          '<strong>Orb-soaks</strong> — Mis-soak (verkeerde kleur) = 20 sec zware schade-debuff op die speler. Prioriteer die speler direct.',
          '<strong>Ei-fase</strong> — Minder incoming schade tijdens de ei-fase. Herstel de groep en bereid je voor op de volgende hergeboorte-burst.',
          '<strong>Eindspurt</strong> — Laatste hergeboorte is het zwaarst. Grote raidcooldown bewaren voor de hergeboorte-AoE.',
        ],
        en: [
          '<strong>Light/Void transition damage</strong> — Every time assignments swap the raid takes a brief damage spike. Prepare spot heals for each swap.',
          '<strong>Orb soaks</strong> — Wrong-color soak = 20 sec heavy damage debuff on that player. Prioritize that player immediately.',
          '<strong>Egg phase</strong> — Less incoming damage during the egg phase. Top up the group and prepare for the next rebirth burst.',
          '<strong>Final stretch</strong> — Last rebirth is the hardest. Save a major raid cooldown for the rebirth AoE.',
        ],
        da: [
          '<strong>Lys/Void-overgangs-skade</strong> — Hver gang opgaver skifter tager raiden en kort skade-spike. Forbered spot-heals til hvert skift.',
          '<strong>Orb soaks</strong> — Forkert-farve soak = 20 sek tung skade-debuff på den spiller. Prioritér den spiller straks.',
          '<strong>Æg-fase</strong> — Mindre indkommende skade under æg-fasen. Top gruppen op og forbered dig til næste genfødsels-burst.',
          '<strong>Slutspurt</strong> — Sidste genfødsel er den sværeste. Gem en stor raid-cooldown til genfødsels-AoE.',
        ],
      },
      dps: {
        nl: [
          '<strong>Ken je kleur</strong> — Voor de pull: weet je je kleur (Licht of Void). Wissel wanneer je callers dat roepen. Nooit een orb soaken met de verkeerde kleur.',
          '<strong>Kleurgekleurde interrupts</strong> — Alleen jouw kleur kan bepaalde casts interrupts. Coördineer wie welke casts doet. Verkeerde interrupt = niets gebeurt.',
          '<strong>Ember adds doden</strong> — Als een Ember add sterft: burst het ei direct voordat het hergeboort (15 sec timer). Hogeprioriteitstaak.',
          '<strong>Ei-fase</strong> — Belo\'ren is een ei: burn zo hard mogelijk. Verwacht 2-3 cycli voordat de boss sterft.',
          '<strong>Offensieve cooldowns</strong> — Gebruik ze bij de opening van de ei-fase voor maximale burst.',
        ],
        en: [
          '<strong>Know your color</strong> — Before the pull: know your color (Light or Void). Swap when your callers call it. Never soak an orb with the wrong color.',
          '<strong>Color-coded interrupts</strong> — Only your color can interrupt certain casts. Coordinate who handles which casts. Wrong interrupt = nothing happens.',
          '<strong>Kill Ember adds</strong> — When an Ember add dies: immediately burst the egg before it rebirths (15 sec timer). High priority task.',
          "<strong>Egg phase</strong> — Belo'ren is an egg: burn as hard as possible. Expect 2-3 cycles before the boss dies.",
          '<strong>Offensive cooldowns</strong> — Use them at the opening of the egg phase for maximum burst.',
        ],
        da: [
          '<strong>Kend din farve</strong> — Inden pull: kend din farve (Lys eller Void). Skift når dine callere råber det. Soak aldrig en orb med den forkerte farve.',
          '<strong>Farvekodede interrupts</strong> — Kun din farve kan afbryde bestemte casts. Koordinér hvem der håndterer hvilke casts. Forkert interrupt = intet sker.',
          '<strong>Dræb Ember adds</strong> — Når en Ember add dør: burst ægget straks inden det genfødes (15 sek timer). Høj prioritetsopgave.',
          "<strong>Æg-fase</strong> — Belo'ren er et æg: burn så hårdt som muligt. Forvent 2-3 cykler inden bossen dør.",
          '<strong>Offensive cooldowns</strong> — Brug dem ved åbningen af æg-fasen for maksimal burst.',
        ],
      },
    },
    // ── BOSS 2 (FINAL) ────────────────────────────────────────
    {
      num: 2,
      name: 'Midnight Falls',
      desc: {
        nl: 'L\'ura, de Dark Naaru, transformeert de Sunwell naar een Darkwell. Dit is de mechanisch zwaarste encounter van Seizoen 1. Aanhoudende raidschade, krimpende veilige zones, escalerende stapeldebuffs en een eindfase waarbij alles tegelijk gebeurt. Geen rust, geen herstelvensters.',
        en: "L'ura, the Dark Naaru, transforms the Sunwell into a Darkwell. This is the mechanically hardest encounter of Season 1. Sustained raid damage, shrinking safe zones, escalating stacking debuffs, and a final phase where everything happens simultaneously. No rest, no recovery windows.",
        da: "L'ura, Dark Naaru'en, transformerer Sunwell til et Darkwell. Dette er den mekanisk sværeste encounter i Sæson 1. Vedvarende raid-skade, krympende sikre zoner, eskalerende staplende debuffs og en slutfase hvor alt sker simultant. Ingen hvile, ingen gendannelsesvinduer.",
      },
      tank: {
        nl: [
          '<strong>Void Rend / Dark Rend</strong> — Zwaar tankbuster-abonnement. L\'ura gebruikt afwisselend lichte en void aanvallen op de tank. Wissel defensives af — je hebt ze allemaal nodig.',
          '<strong>Death\'s Dirge</strong> — Zware debuff op de actieve tank. Taunt swap direct. Op Mythic: niet gecasst vóór Grim Symphony — timing window verschuift.',
          '<strong>Grim Symphony</strong> — Mechanic die iedereen naar de buitenkant stuwt. Positioneer de boss stabiel in het midden voor de cast.',
          '<strong>Dark Quasar (Mythic)</strong> — Darkwell-uitbreiding is agressiever dan op Heroic. Meer ruimte wordt onveilig — positioneer vroeger.',
        ],
        en: [
          "<strong>Void Rend / Dark Rend</strong> — Heavy tank buster subscription. L'ura alternates light and void attacks on the tank. Rotate defensives — you need all of them.",
          '<strong>Death\'s Dirge</strong> — Heavy debuff on the active tank. Taunt swap immediately. Mythic: NOT cast before Grim Symphony — timing window shifts.',
          '<strong>Grim Symphony</strong> — Mechanic that pushes everyone outward. Position the boss stably in the center before the cast.',
          '<strong>Dark Quasar (Mythic)</strong> — Darkwell expansion is more aggressive than on Heroic. More space becomes unsafe — position earlier.',
        ],
        da: [
          "<strong>Void Rend / Dark Rend</strong> — Tungt tankbuster-abonnement. L'ura skifter mellem lys- og void-angreb på tanken. Roter defensives — du har brug for dem alle.",
          '<strong>Death\'s Dirge</strong> — Tung debuff på den aktive tank. Taunt swap straks. Mythic: Castes IKKE inden Grim Symphony — timings-vindue forskydes.',
          '<strong>Grim Symphony</strong> — Mekanik der skubber alle udad. Positionér bossen stabilt i midten inden castet.',
          '<strong>Dark Quasar (Mythic)</strong> — Darkwell-udvidelse er mere aggressiv end på Heroic. Mere plads bliver usikker — positionér tidligere.',
        ],
      },
      heal: {
        nl: [
          '<strong>Darkwell Corruption</strong> — Constante raidschade die escaleert door het gevecht. Dit is een duurtest. Roteer cooldowns methodisch.',
          '<strong>Void Expulsion</strong> — Grote AoE burst op de raid. Bewaar raidcooldowns voor elke Void Expulsion.',
          '<strong>Consuming Darkness</strong> — Healing absorb-debuff op meerdere spelers. Prioriteer ze direct — als de absorb niet wordt gevuld gaat de speler dood.',
          '<strong>Eindspurt</strong> — Shrinkende veilige zone + Darkwell Corruption op max + Grim Symphony allemaal tegelijk. Grootste cooldown hier.',
        ],
        en: [
          '<strong>Darkwell Corruption</strong> — Constant raid damage that escalates throughout the fight. This is an endurance test. Rotate cooldowns methodically.',
          '<strong>Void Expulsion</strong> — Large AoE burst on the raid. Save raid cooldowns for every Void Expulsion.',
          '<strong>Consuming Darkness</strong> — Healing absorb debuff on multiple players. Prioritize them immediately — if the absorb is not filled the player dies.',
          '<strong>Final phase</strong> — Shrinking safe zone + Darkwell Corruption at max + Grim Symphony all simultaneously. Biggest cooldown here.',
        ],
        da: [
          '<strong>Darkwell Corruption</strong> — Konstant raid-skade der eskalerer igennem kampen. Dette er en udholdenhedstest. Roter cooldowns metodisk.',
          '<strong>Void Expulsion</strong> — Stor AoE burst på raiden. Gem raid-cooldowns til hver Void Expulsion.',
          '<strong>Consuming Darkness</strong> — Healing-absorb-debuff på flere spillere. Prioritér dem straks — hvis absorben ikke fyldes dør spilleren.',
          '<strong>Slutfase</strong> — Krympende sikker zone + Darkwell Corruption på maks + Grim Symphony alt simultant. Største cooldown her.',
        ],
      },
      dps: {
        nl: [
          '<strong>Termination Prism</strong> — L\'ura cast Termination Prism = interrupt rotatie. Meerdere interrupts nodig per cast. Coördineer van tevoren wie welke cast doet.',
          '<strong>Shrinkende arena</strong> — De Darkwell breidt zich uit door het gevecht. Veilige zone krimpt. Positioneer voortdurend dichter bij het centrum.',
          '<strong>Grim Symphony</strong> — Stuwt iedereen naar buiten. Als de arena al klein is: naar het onveilige deel worden geduwd = dood. Gebruik movement-abilities.',
          '<strong>Chiming Void Curio</strong> — Deze boss dropt de enige gerichte tier-token van het seizoen. Elke week doden.',
          '<strong>Enrage window</strong> — Midnight Falls heeft een strak enrage-venster. DPS-uptime is hier kritisch — niet stoppen voor mechanics die je kunt anticiperen.',
        ],
        en: [
          "<strong>Termination Prism</strong> — L'ura casts Termination Prism = interrupt rotation. Multiple interrupts needed per cast. Pre-coordinate who handles which cast.",
          '<strong>Shrinking arena</strong> — The Darkwell expands throughout the fight. Safe zone shrinks. Constantly reposition closer to the center.',
          '<strong>Grim Symphony</strong> — Pushes everyone outward. If the arena is already small: being pushed to the unsafe area = death. Use movement abilities.',
          '<strong>Chiming Void Curio</strong> — This boss drops the only targeted tier token of the season. Kill every week.',
          '<strong>Enrage window</strong> — Midnight Falls has a tight enrage window. DPS uptime is critical here — do not stop for mechanics you can anticipate.',
        ],
        da: [
          "<strong>Termination Prism</strong> — L'ura caster Termination Prism = interrupt-rotation. Flere interrupts krævet per cast. Koordinér på forhånd hvem der håndterer hvilke casts.",
          '<strong>Krympende arena</strong> — Darkwell udvider sig igennem kampen. Sikker zone krymper. Genpositionér konstant tættere mod centrum.',
          '<strong>Grim Symphony</strong> — Skubber alle udad. Hvis arenaen allerede er lille: at blive skubbet til det usikre område = død. Brug bevægelsesevner.',
          '<strong>Chiming Void Curio</strong> — Denne boss dropper den eneste målrettede tier-token i sæsonen. Dræb hver uge.',
          '<strong>Enrage-vindue</strong> — Midnight Falls har et stramt enrage-vindue. DPS-uptime er kritisk her — stop ikke til mekanikker du kan forudse.',
        ],
      },
    },
  ],

  route: {
    norm_note: null,
    pulls: [
      {
        type: 'trash',
        label: { nl: 'Toegangspad (beperkte trash)', en: 'Access path (limited trash)', da: 'Adgangsvej (begrænset trash)' },
        area:  { nl: "Isle of Quel'Danas — Sunwell Plateau", en: "Isle of Quel'Danas — Sunwell Plateau", da: "Isle of Quel'Danas — Sunwell Plateau" },
        desc:  { nl: "Enkele Void-gecorrumpeerde bewakers op weg naar Belo'ren. Interrupt Void Surge. Snel doden — beide bosses zijn de eigenlijke uitdaging.",
                 en: "A few Void-corrupted guards on the way to Belo'ren. Interrupt Void Surge. Kill fast — both bosses are the actual challenge.",
                 da: "Få Void-korrumperede vagter på vej til Belo'ren. Afbryd Void Surge. Dræb hurtigt — begge bosser er den egentlige udfordring." },
      },
      {
        type: 'boss',
        label: { nl: "1. Belo'ren, Child of Al'ar", en: "1. Belo'ren, Child of Al'ar", da: "1. Belo'ren, Child of Al'ar" },
        area:  { nl: "Toegang tot de Sunwell", en: 'Approach to the Sunwell', da: 'Adgang til Sunwell' },
        desc:  { nl: 'Licht/Void-kleuren. Kegels opvangen met juiste kleur. Ei burnen. Ember-eieren direct killen. Offensieve cooldowns in ei-fasen.',
                 en: 'Light/Void colors. Intercept cones with correct color. Burn the egg. Kill Ember eggs immediately. Offensive cooldowns in egg phases.',
                 da: 'Lys/Void-farver. Opfang kegler med korrekt farve. Burn ægget. Dræb Ember-æg straks. Offensive cooldowns i æg-faser.' },
      },
      {
        type: 'boss',
        label: { nl: '🔥 2. Midnight Falls — L\'ura, Dark Naaru', en: "🔥 2. Midnight Falls — L'ura, Dark Naaru", da: "🔥 2. Midnight Falls — L'ura, Dark Naaru" },
        area:  { nl: 'De Darkwell — voormalige Sunwell', en: 'The Darkwell — former Sunwell', da: 'Darkwell — tidligere Sunwell' },
        desc:  { nl: 'Aanhoudende raidschade + krimpende arena. Termination Prism interrupts rouleren. Grootste raidcooldown bewaren voor finale fase. 🔥 BLOODLUST hier op pull.',
                 en: 'Sustained raid damage + shrinking arena. Rotate Termination Prism interrupts. Save biggest raid cooldown for final phase. 🔥 BLOODLUST here on pull.',
                 da: 'Vedvarende raid-skade + krympende arena. Roter Termination Prism interrupts. Gem største raid-cooldown til slutfasen. 🔥 BLOODLUST her ved pull.' },
      },
    ],
  },
});

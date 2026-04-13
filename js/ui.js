const SPELL_IDS = {
  "Bone Shield": 195181,
  "Adrenaline Rush": 13750,
  "Agony": 980,
  "Aimed Shot": 19434,
  "Ambush": 8676,
  "Ancestral Guidance": 108281,
  "Ancestral Swiftness": 443454,
  "Anti-Magic Shell": 48707,
  "Anti-Magic Zone": 50461,
  "Apocalypse": 202618,
  "Apotheosis": 200183,
  "Arcane Barrage": 44425,
  "Arcane Blast": 18091,
  "Arcane Explosion": 1449,
  "Arcane Missiles": 5143,
  "Arcane Shot": 185358,
  "Arcane Surge": 45430,
  "Ardent Defender": 31850,
  "Ascendance": 28200,
  "Aspect of the Cheetah": 122489,
  "Aspect of the Eagle": 186289,
  "Aspect of the Turtle": 186265,
  "Astral Shift": 108271,
  "Aura Mastery": 31821,
  "Avatar": 107574,
  "Avenger's Shield": 31935,
  "Avenging Wrath": 31884,
  "Backstab": 53,
  "Banish": 710,
  "Barbed Shot": 217200,
  "Barkskin": 22812,
  "Beacon": 53563,
  "Beacon of Light": 53563,
  "Berserk": 50334,
  "Bestial Wrath": 19574,
  "Between the Eyes": 315341,
  "Bloodlust": 2825,
  "Black Arrow": 466930,
  "Blackout Kick": 100784,
  "Blade Dance": 188499,
  "Blade Flurry": 13877,
  "Blade of Justice": 184575,
  "Bladestorm": 9632,
  "Blessing of Freedom": 1044,
  "Blessing of Protection": 1022,
  "Blessing of Sacrifice": 6940,
  "Blind": 2094,
  "Blink": 1953,
  "Blistering Scales": 360827,
  "Blizzard": 12486,
  "Blood Boil": 50842,
  "Bloodthirst": 23881,
  "Blur": 198589,
  "Breath of Eons": 403631,
  "Breath of Fire": 12257,
  "Bristling Fur": 155835,
  "Call Dreadstalkers": 104316,
  "Capacitor Totem": 118905,
  "Carve": 231006,
  "Celestial Alignment": 194223,
  "Celestial Brew": 322507,
  "Chain Heal": 1064,
  "Chain Lightning": 16921,
  "Circle of Healing": 34861,
  "Chains of Ice": 45524,
  "Channel Demonfire": 196447,
  "Chaos Bolt": 116858,
  "Chaos Nova": 179057,
  "Chaos Strike": 162794,
  "Charge": 100,
  "Cleanse": 4987,
  "Cleanse Toxins": 213644,
  "Cleave": 845,
  "Cloak of Shadows": 31224,
  "Cobra Shot": 193455,
  "Cold Snap": 235219,
  "Colossus Smash": 167105,
  "Combustion": 190319,
  "Cone of Cold": 120,
  "Conflagrate": 17962,
  "Consecration": 26573,
  "Consume": 461408,
  "Consume Magic": 278326,
  "Collapsing Star": 1221150,
  "Convoke the Spirits": 323764,
  "Coordinated Assault": 360952,
  "Corruption": 172,
  "Counter Shot": 147362,
  "Counterspell": 2139,
  "Crash Lightning": 187874,
  "Crimson Tempest": 1247227,
  "Crimson Vial": 185311,
  "Crusader Strike": 35395,
  "Curse of Exhaustion": 334275,
  "Dancing Rune Weapon": 49028,
  "Dark Soul: Instability": 113858,
  "Dark Soul: Misery": 113860,
  "Dark Transformation": 63560,
  "Death Coil": 47541,
  "Death Gate": 50977,
  "Death Grip": 49575,
  "Death Strike": 45470,
  "Death and Decay": 43265,
  "Deathmark": 360194,
  "Devouring Plague": 164452,
  "Deep Breath": 353759,
  "Demons Bite": 162243,
  "Demon Spikes": 203720,
  "Demonbolt": 264178,
  "Demonic Circle": 268358,
  "Devastate": 20243,
  "Die by the Sword": 118038,
  "Diffuse Magic": 1243287,
  "Disengage": 781,
  "Disintegrate": 356995,
  "Dispel Magic": 528,
  "Dispersion": 47585,
  "Disrupt": 183752,
  "Divine Hymn": 64843,
  "Divine Shield": 642,
  "Divine Star": 110744,
  "Divine Storm": 53385,
  "Doom Winds": 214284,
  "Dragon's Breath": 169843,
  "Dragonrage": 375087,
  "Drain Life": 234153,
  "Drain Soul": 198590,
  "Dream Breath": 355936,
  "Earth Shield": 379,
  "Earth Shock": 8042,
  "Earthen Wall Totem": 198838,
  "Earthbind Totem": 2484,
  "Earthgrab Totem": 51485,
  "Earthquake": 61882,
  "Ebon Might": 395152,
  "Ebonbolt": 214634,
  "Echo": 364343,
  "Efflorescence": 81262,
  "Emerald Blossom": 256823,
  "Enveloping Mist": 124682,
  "Envenom": 32645,
  "Epidemic": 184922,
  "Eruption": 395160,
  "Essence Font": 353937,
  "Eternity Surge": 359073,
  "Evangelism": 472433,
  "Enraged Regeneration": 184364,
  "Eternal Flame": 83503,
  "Evasion": 5277,
  "Eviscerate": 196819,
  "Evocation": 12051,
  "Execute": 163201,
  "Exhilaration": 109304,
  "Expel Harm": 115129,
  "Eye Beam": 198013,
  "Fade": 586,
  "Fan of Knives": 51723,
  "Feign Death": 5384,
  "Fel Devastation": 212084,
  "Fel Barrage": 211053,
  "Fel Rush": 192611,
  "Feral Frenzy": 274837,
  "Feral Spirit": 51533,
  "Ferocious Bite": 22568,
  "Festering Strike": 85948,
  "Fiery Brand": 204021,
  "Fire Blast": 29633,
  "Fire Breath": 357208,
  "Fireball": 133,
  "Firestorm": 333097,
  "Fists of Fury": 113656,
  "Flame Shock": 188389,
  "Flamestrike": 2120,
  "Flash Heal": 2061,
  "Flash of Light": 19750,
  "Flanking Strike": 269751,
  "Flourish": 184879,
  "Butchery": 212436,
  "Flurry": 44614,
  "Flying Serpent Kick": 101545,
  "Fortifying Brew": 115203,
  "Fracture": 225919,
  "Freezing Trap": 3355,
  "Frenzied Regeneration": 22842,
  "Frost Nova": 122,
  "Frost Shock": 196840,
  "Frost Strike": 49143,
  "Frostbolt": 116,
  "Frozen Orb": 84714,
  "Fury of Elune": 202770,
  "Garrote": 703,
  "Glacial Advance": 194913,
  "Glaive Tempest": 342817,
  "Grappling Hook": 195457,
  "Greater Invisibility": 110959,
  "Guardian Spirit": 47788,
  "Guardian of Ancient Kings": 86659,
  "Hand of Gul'dan": 105174,
  "Halo": 120517,
  "Hammer of Justice": 853,
  "Hammer of Wrath": 24275,
  "Hammer of the Righteous": 53595,
  "Hamstring": 1715,
  "Hand of Reckoning": 62124,
  "Harpoon": 186260,
  "Haunt": 48181,
  "Heroism": 32182,
  "Hurl Glaive": 185123,
  "Havoc": 80240,
  "Heal": 2060,
  "Healing Rain": 73920,
  "Healing Stream Totem": 5394,
  "Healing Surge": 8004,
  "Healing Wave": 77472,
  "Healthstone": 6262,
  "Heart Strike": 206930,
  "Holy Avenger": 105809,
  "Heroic Leap": 6544,
  "Hibernate": 2637,
  "Holy Light": 82326,
  "Holy Prism": 114165,
  "Holy Shock": 20473,
  "Holy Word: Salvation": 265202,
  "Holy Word: Sanctify": 34861,
  "Holy Word: Serenity": 2050,
  "Hover": 357302,
  "Howling Blast": 49184,
  "Hunter": 137014,
  "Hunter's Mark": 257284,
  "Ice Block": 45438,
  "Ice Lance": 30455,
  "Icebound Fortitude": 48792,
  "Ignore Pain": 190456,
  "Immolate": 348,
  "Immolation Aura": 195447,
  "Implosion": 65024,
  "Imprison": 217832,
  "Incinerate": 29722,
  "Indiscriminate Carnage": 381802,
  "Innervate": 29166,
  "Intervene": 3411,
  "Intimidating Shout": 5246,
  "Intimidation": 19577,
  "Invisibility": 66,
  "Incarnation: Guardian of Ursoc": 102558,
  "Incarnation: King of the Jungle": 102543,
  "Invoke Chi-Ji": 325197,
  "Invoke Chi-Ji, the Red Crane": 325197,
  "Invoke Niuzao": 132578,
  "Invoke Niuzao, the Black Ox": 132578,
  "Invoke Xuen": 123904,
  "Invoke Xuen, the White Tiger": 123904,
  "Invoke Yu'lon": 322118,
  "Invoke Yu'lon, the Jade Serpent": 322118,
  "Ironfur": 192081,
  "Judgment": 20271,
  "Keg Smash": 121253,
  "Kick": 1766,
  "Kill Command": 34026,
  "Killing Machine": 51124,
  "Killing Spree": 51690,
  "Last Stand": 12975,
  "Lava Burst": 51505,
  "Lava Lash": 60103,
  "Lay on Hands": 633,
  "Leap of Faith": 73325,
  "Leg Sweep": 119381,
  "Life Cocoon": 116849,
  "Lifebloom": 33763,
  "Light of Dawn": 85222,
  "Lightning Bolt": 13482,
  "Living Bomb": 44457,
  "Living Flame": 64712,
  "Malefic Rapture": 324536,
  "Mana Tea": 115294,
  "Mana Tide Totem": 16191,
  "Mangle": 33917,
  "Marrowrend": 195182,
  "Mass Dispel": 32375,
  "Maul": 6807,
  "Metamorphosis": 162264,
  "Mind Blast": 8092,
  "Mind Flay": 15407,
  "Mind Freeze": 47528,
  "Mind Sear": 344752,
  "Mongoose Bite": 259387,
  "Mirror Image": 55342,
  "Misdirection": 34477,
  "Multishot": 2643,
  "Moonfire": 8921,
  "Mortal Coil": 6789,
  "Mortal Strike": 12294,
  "Mutilate": 1329,
  "Nature's Swiftness": 132158,
  "Nether Portal": 267218,
  "Obliterate": 49020,
  "Outbreak": 77575,
  "Overpower": 7384,
  "Pain Suppression": 33206,
  "Paralysis": 115078,
  "Path of Frost": 3714,
  "Penance": 47540,
  "Phoenix Flames": 1251907,
  "Pillar of Frost": 51271,
  "Power Infusion": 10060,
  "Power Siphon": 264130,
  "Power Word: Barrier": 62618,
  "Power Word: Fortitude": 21562,
  "Power Word: Radiance": 194509,
  "Power Word: Shield": 17,
  "Prayer of Healing": 596,
  "Prayer of Mending": 33076,
  "Prescience": 225139,
  "Presence of Mind": 205025,
  "Primal Wrath": 285381,
  "Primordial Wave": 326059,
  "Psychic Scream": 8122,
  "Pummel": 6552,
  "Purge": 370,
  "Purify": 527,
  "Purify Spirit": 77130,
  "Pyre": 357211,
  "Pyroblast": 11366,
  "Raging Blow": 85288,
  "Rain of Fire": 5740,
  "Raise Ally": 61999,
  "Raise Dead": 46584,
  "Rake": 1822,
  "Rapture": 47536,
  "Rallying Cry": 97462,
  "Reap": 1226019,
  "Rune Tap": 194679,
  "Rampage": 138870,
  "Rapid Fire": 257044,
  "Raptor Strike": 186270,
  "Rebirth": 20484,
  "Recklessness": 1719,
  "Regrowth": 8936,
  "Rejuvenation": 774,
  "Remorseless Winter": 196770,
  "Remove Corruption": 2782,
  "Renew": 139,
  "Renewing Mist": 115151,
  "Rescue": 370665,
  "Revenge": 6572,
  "Reversion": 366155,
  "Revival": 115310,
  "Rewind": 296101,
  "Rime": 59052,
  "Ring of Peace": 116844,
  "Rip": 1079,
  "Riptide": 61295,
  "Rising Sun Kick": 107428,
  "Roll the Bones": 1214909,
  "Rupture": 1943,
  "Sap": 6770,
  "Scorch": 2948,
  "Searing Nightmare": 341385,
  "Serenity": 152173,
  "Scourge Strike": 55090,
  "Seed of Corruption": 27243,
  "Shackle Undead": 58251,
  "Shadow Blades": 121471,
  "Shadow Bolt": 686,
  "Shadow Dance": 185313,
  "Shadow Word: Pain": 589,
  "Shadowmend": 186263,
  "Shadowfiend": 34433,
  "Shadowstrike": 185438,
  "Shear": 203782,
  "Shield Slam": 23922,
  "Shield Wall": 871,
  "Shield of the Righteous": 53600,
  "Shockwave": 46968,
  "Shred": 5221,
  "Shroud of Concealment": 114018,
  "Shuriken Storm": 197835,
  "Sigil of Flame": 204596,
  "Sigil of Misery": 207684,
  "Sigil of Silence": 202137,
  "Silence": 15487,
  "Sinister Strike": 1752,
  "Skull Bash": 93985,
  "Slam": 1464,
  "Slice and Dice": 315496,
  "Slow": 31589,
  "Smite": 585,
  "Soothe": 2908,
  "Soul Cleave": 228477,
  "Soul Immolation": 1241937,
  "Soulstone": 6203,
  "Spear Hand Strike": 116705,
  "Spectral Sight": 188501,
  "Spell Reflection": 23920,
  "Spellsteal": 30449,
  "Spinning Crane Kick": 101546,
  "Spirit Bomb": 247454,
  "Spiritbloom": 367226,
  "Spiritwalker's Grace": 79206,
  "Sprint": 2983,
  "Stampeding Roar": 77761,
  "Starfall": 50286,
  "Storm, Earth and Fire": 137639,
  "Storm, Earth, and Fire": 137639,
  "Starfire": 194153,
  "Starsurge": 78674,
  "Stasis": 370537,
  "Steady Shot": 56641,
  "Strangulate": 47476,
  "Storm Bolt": 107570,
  "Stormkeeper": 191634,
  "Stormstrike": 17364,
  "Strike of the Windlord": 214854,
  "Summon Darkglare": 205180,
  "Summon Demonic Tyrant": 265187,
  "Summon Infernal": 1122,
  "Sundering": 197214,
  "Sunfire": 27981,
  "Survival Instincts": 50322,
  "Sweeping Strikes": 260708,
  "Swiftmend": 18562,
  "Swipe": 106785,
  "Symbols of Death": 212283,
  "Tail Swipe": 368970,
  "Tar Trap": 135299,
  "Templar's Verdict": 213842,
  "Thrash": 77758,
  "Throw Glaive": 185123,
  "Thunder Clap": 6343,
  "Thunder Focus Tea": 116680,
  "Tiger's Fury": 5217,
  "Tiger Palm": 100780,
  "Time Warp": 80353,
  "Tip the Scales": 370553,
  "Touch of Death": 322109,
  "Touch of the Magi": 210725,
  "Tranquility": 740,
  "Transcendence": 101643,
  "Transcendence: Transfer": 119996,
  "Trueshot": 288613,
  "Typhoon": 61391,
  "Ursol's Vortex": 102794,
  "Unholy Assault": 207289,
  "Unstable Affliction": 30108,
  "Upheaval": 396286,
  "Vampiric Blood": 55233,
  "Vampiric Embrace": 15286,
  "Vampiric Touch": 34914,
  "Vanish": 1856,
  "Vendetta": 79140,
  "Verdant Embrace": 257444,
  "Vivify": 116670,
  "Void Eruption": 228360,
  "Void Metamorphosis": 1225789,
  "Void Ray": 1213649,
  "Wailing Arrow": 354831,
  "Wake of Ashes": 205273,
  "Whirlwind": 1680,
  "Wild Growth": 48438,
  "Wild Thrash": 1264355,
  "Wildfire Bomb": 259495,
  "Wind Rush Totem": 192077,
  "Wind Shear": 57994,
  "Windstrike": 115356,
  "Wing Buffet": 357214,
  "Word of Glory": 85673,
  "Wrath": 5176,
  "Zephyr": 374227,
};

// Wowhead item IDs — consumables & BiS display names (v3.6.1 tooltip sync)
const ITEM_IDS = {
  "Flask of the Sunwell": 241327,
  "Void-Tinged Adrenaline": 241292,
  "Eversong Spiced Ribs": 242295,
  "Royal Roast": 242275,
  "Candied Amber": 242305,
  "Voidglass Spire": 237730,
  "Staff of the Sun-King": 237730,
  "Sun-Drenched Sharpening Stone": null,
  "Eternal Augment Rune": null,
  "Flask of Tempered Mastery": 212278,
  "Flask of Tempered Swiftness": 212272,
  "Flask of Tempered Versatility": 212277,
  "Flask of Tempered Aggression": 212276,
  "Flask of the Focused Dream": null,
  "Tempered Potion": 212264,
  "Potion of Witchcraft": null,
  "Potion of Withering Vitality": 191371,
  "Potion of Unwavering Focus": 212259,
  "The Sushi Special": 222720,
  "The Sushi Special (Feast)": 222720,
  "Aromatic Seafood Platter": 197783,
  "Feisty Fish Sticks": 197782,
  "Feast of the Midnight Masquerade": 222781,
  "Hearty Feast of the Midnight Masquerade": 222781,
  "Crystalline Augment Rune": 224572,
  "Crystallized Augment Rune": 224572,
  "Algari Mana Oil": 224106,
  "Thalassian Phoenix Oil": 243733,
  "Ironclaw Whetstone": 226423,
};

/** Short in-app changelog (above README in About). Uses global `lang` and `APP_VERSION` from constants.js. */
function getAppChangelogHtml() {
  const v = typeof APP_VERSION !== 'undefined' ? String(APP_VERSION) : '';
  if (lang === 'en') {
    return `<div class="about-changelog" role="region" aria-label="App changelog">
      <div class="about-changelog-title">📋 App changelog</div>
      <p class="about-changelog-meta">Current build: <code>v${v}</code></p>
      <ul class="about-changelog-ul">
        <li><strong>v1.0.16</strong> — Add-ons: Midnight Profession Tracker uses <code>/mpt</code> and in-app screenshots (list UI) instead of the old bar mockup.</li>
        <li><strong>v1.0.15</strong> — Add-ons: <strong>Midnight Profession Tracker</strong> (correct CurseForge slug + display name).</li>
        <li><strong>v1.0.14</strong> — Add-ons: profession tracker (CurseForge, <code>/mpt</code>, preview) under <strong>Profession Helpers</strong>; grouped layout via <code>ADDONS_SECTIONS</code>.</li>
        <li><strong>v1.0.13</strong> — Add-ons: each addon is a collapsible card (spec-style accordion) so the page scales with more entries.</li>
        <li><strong>v1.0.12</strong> — Add-ons: removed Platynator “Common issues” block and screenshot from UI + precache.</li>
        <li><strong>v1.0.11</strong> — Add-ons: Platynator visual guide (<code>colorLegend</code> grid, <code>platy-prio-list.jpg</code>), PWA precache bump.</li>
        <li><strong>v1.0.10</strong> — Add-ons: Inchy Platynator profile import (copy + preview textarea), <code>platynator-inchy-export.js</code> + precache.</li>
        <li><strong>v1.0.9</strong> — Add-ons: install guide uses inline CurseForge / Wago buttons instead of “use the button below” copy; NL/EN step text adjusted.</li>
        <li><strong>v1.0.8</strong> — <strong>Add-ons</strong> tab: Platynator card with CurseForge / Wago / video links, nameplate priority quick reference image, EN/NL copy. New <code>data/addons.js</code> + PWA precache bump.</li>
        <li><strong>v1.0.7</strong> — “Over deze app” / “About this app” in Help (changelog), Delves spotlight callout, and the update banner is now an inline button that opens the About modal.</li>
        <li><strong>v1.0.6</strong> — <code>live_reset_data.json</code> from the Python Wowhead scraper: committed by <code>fetch-eu-daily-json</code> with prey/bountiful. App loads it (network-first) for Delves (Wowhead EU Bountiful names + mismatch hint vs <code>bountiful-today.json</code>) and Prey (Hard/Nightmare matches). Header tooltip shows scrape timestamp.</li>
        <li><strong>v1.0.5</strong> — Footer and PWA cache versions aligned (<code>APP_VERSION</code> = <code>CACHE_VERSION</code>). 🧭 <strong>Travel Guide</strong> tab: Season 1 portal hub at Silvermoon City (Sunwell Terrace), TomTom <code>/way</code> copy buttons, EN/NL descriptions. Clipboard success/fail callbacks wrapped (pcall-style) for stability.</li>
        <li><strong>v3.6.16</strong> — Raids (S1): LFR/Normal/Heroic/Mythic ilvl bands (220/246/259/272, apex to 285); Voidspire Crown of the Cosmos (Alleria) DPS tips refreshed; March on Quel&apos;Danas opening Mar 31, 2026; Chiming Void Curio omni-tier callout. English-only boss names in NL strings where needed. Cache bump.</li>
        <li><strong>v3.6.15</strong> — Prey: Season 1 reward table from <code>data/activities/prey.json</code> + Great Vault tip (4 hunts/week). Delves: Tier 8 loot labels (Champion 2/6 / Hero 1/6) and Trovehunter map 259; companion <code>data/activities/delves.json</code>. GitHub Actions: workflow <code>fetch-eu-daily-json</code> updates <code>prey-today.json</code> and <code>bountiful-today.json</code> in one run and commit (same multi-slot schedule as the old Bountiful fetch). Service worker / cache bump.</li>
        <li><strong>v3.6.14</strong> — Delves: dynamic EU Bountiful-day strip (no hardcoded reset date); if <code>bountiful-today.json</code> is still for yesterday, the app uses the built-in weekly rotation and shows a clear warning. Mobile: Restored Coffer Key block uses a visible key + fixed tile so Wowhead cannot leave a huge empty area. Background: GitHub Actions for Prey/Bountiful use a single sync/rebase/push script (Node 24, <code>checkout@v6</code>). Cache/service worker bump.</li>
        <li><strong>v3.6.13</strong> — Delves (mobile): key row fallback + fixed icon size; cache bump for header sync badge.</li>
        <li><strong>v3.6.12</strong> — Delves tab: <em>The Darkway</em> has a <strong>Spotlight</strong> card and callout (example of tips verified with Method.gg). This changelog block sits above the README.</li>
        <li><strong>v3.6.11</strong> — All Midnight delve quick tips and full guides were audited against Method.gg / Icy Veins (Mar 2026).</li>
      </ul>
      <p class="about-changelog-foot">Guides are not official Blizzard text; always confirm tricky mechanics in-game.</p>
      <hr class="about-changelog-sep" aria-hidden="true">
    </div>`;
  }
  return `<div class="about-changelog" role="region" aria-label="App-changelog">
    <div class="about-changelog-title">📋 App-changelog</div>
    <p class="about-changelog-meta">Huidige build: <code>v${v}</code></p>
    <ul class="about-changelog-ul">
      <li><strong>v1.0.16</strong> — Add-ons: Midnight Profession Tracker gebruikt <code>/mpt</code> en screenshots (lijst-UI) i.p.v. de oude balk-mockup.</li>
      <li><strong>v1.0.15</strong> — Add-ons: <strong>Midnight Profession Tracker</strong> (juiste CurseForge-slug + weergavenaam).</li>
      <li><strong>v1.0.14</strong> — Add-ons: profession-tracker (CurseForge, <code>/mpt</code>, preview) onder <strong>Profession helpers</strong>; gegroepeerde layout via <code>ADDONS_SECTIONS</code>.</li>
      <li><strong>v1.0.13</strong> — Add-ons: elke add-on is een inklapbare kaart (zelfde patroon als specs-accordion) zodat de pagina schaalt met meer items.</li>
      <li><strong>v1.0.12</strong> — Add-ons: blok “Veelvoorkomende problemen” en screenshot uit Platynator-UI + precache gehaald.</li>
      <li><strong>v1.0.11</strong> — Add-ons: Platynator visuele gids (<code>colorLegend</code>-grid, <code>platy-prio-list.jpg</code>), PWA-precache bump.</li>
      <li><strong>v1.0.10</strong> — Add-ons: Platynator-profielimport van Inchy (kopie + voorbeeldtextarea), <code>platynator-inchy-export.js</code> + precache.</li>
      <li><strong>v1.0.9</strong> — Add-ons: installatiegids met echte CurseForge- / Wago-knoppen i.p.v. “gebruik de knop hieronder”; NL/EN-stappen aangepast.</li>
      <li><strong>v1.0.8</strong> — Tab <strong>Add-ons</strong>: Platynator-kaart met CurseForge / Wago / video, snelle referentie voor nameplate-prioriteit, EN/NL-teksten. Nieuw <code>data/addons.js</code> + PWA-precache bump.</li>
      <li><strong>v1.0.7</strong> — “Over deze app” / “About this app” in Help (changelog), Delves-spotlight en de update-banner is nu een inline knop die het Over-deze-app-venster opent.</li>
      <li><strong>v1.0.6</strong> — <code>live_reset_data.json</code> via Python Wowhead-scraper: CI (<code>fetch-eu-daily-json</code>) naast prey/bountiful. App laadt het (netwerk-first) voor Delves (Wowhead EU Bountiful-namen + waarschuwing bij verschil met <code>bountiful-today.json</code>) en Prey (Hard/Nightmare-matches). Header-tooltip toont scrape-tijd.</li>
      <li><strong>v1.0.5</strong> — Footer- en PWA-cacheversie gelijkgetrokken (<code>APP_VERSION</code> = <code>CACHE_VERSION</code>). 🧭 Tab <strong>Reisgids</strong>: Season 1 portaalhub bij Silvermoon City (Sunwell Terrace), TomTom <code>/way</code>-knoppen, EN/NL-beschrijvingen. Klembord-callbacks afgevangen (pcall-stijl) voor stabiliteit.</li>
      <li><strong>v3.6.16</strong> — Raids (S1): LFR/Normal/Heroic/Mythic ilvl-banden (220/246/259/272, apex tot 285); Voidspire Crown of the Cosmos (Alleria) DPS-tips bijgewerkt; March on Quel&apos;Danas opent 31 mrt 2026; Chiming Void Curio omni-tier benadrukt. Bossnamen in het Engels in NL-teksten waar nodig. Cache-bump.</li>
      <li><strong>v3.6.15</strong> — Prey: S1-beloningentabel uit <code>data/activities/prey.json</code> + Great Vault-tip (4 hunts/week). Delves: Tier 8 loot-labels (Champion 2/6 / Hero 1/6) en Trovehunter-map 259; bijbehorend <code>data/activities/delves.json</code>. GitHub Actions: workflow <code>fetch-eu-daily-json</code> vernieuwt <code>prey-today.json</code> en <code>bountiful-today.json</code> in één run en commit (zelfde meerdere tijdslots als de oude Bountiful-fetch). Service worker / cache-bump.</li>
      <li><strong>v3.6.14</strong> — Delves: dynamische EU Bountiful-dag in de header (geen vaste reset-datum); als de repo-json nog bij gisteren hoort, tonen we het weekrooster met duidelijke waarschuwing. Mobiel: zichtbare 🔑 + vaste tegel bij sleutel-uitleg (geen leeg Wowhead-vlak). Achtergrond: GitHub Actions voor Prey/Bountiful met één sync/rebase/push-script (Node 24, checkout v6). Nieuwe cache/service worker.</li>
      <li><strong>v3.6.13</strong> — Delves (mobiel): sleutelrij fallback + vaste icoonmaat; cache-bump sync-banner.</li>
      <li><strong>v3.6.12</strong> — Delves-tab: <em>The Darkway</em> heeft een <strong>Spotlight</strong>-kaart + toelichting (voorbeeld van tips geverifieerd met Method.gg). Dit changelog-blok staat boven de README.</li>
      <li><strong>v3.6.11</strong> — Alle Midnight delve-kaarten doorgelicht tegen Method.gg / Icy Veins (mrt 2026).</li>
    </ul>
    <p class="about-changelog-foot">Gidsen zijn geen officiële Blizzard-tekst; check twijfelachtige mechanics altijd in-game.</p>
    <hr class="about-changelog-sep" aria-hidden="true">
  </div>`;
}

function renderAboutContent() {
  const el = document.getElementById('about-content');
  const loadingNl = '<div style="padding:32px;text-align:center;color:var(--muted);font-size:13px">⏳ Laden...</div>';
  const loadingEn = '<div style="padding:32px;text-align:center;color:var(--muted);font-size:13px">⏳ Loading...</div>';
  el.innerHTML = (lang === 'en' ? loadingEn : loadingNl);

  let readmeFile = 'README.md';
    if (lang === 'en') readmeFile = 'README_en.md';
    fetch(readmeFile)
    .then(r => r.ok ? r.text() : Promise.reject(r.status))
    .then(md => { el.innerHTML = getAppChangelogHtml() + mdToHtml(md); })
    .catch(() => {
      const fallback = lang === 'en'
        ? '<div style="padding:24px;color:var(--muted);font-size:13px">⚠️ README could not be loaded.<br><a href="https://github.com/Huijting/midnight_guide" target="_blank" style="color:var(--gold)">Open on GitHub →</a></div>'
        : '<div style="padding:24px;color:var(--muted);font-size:13px">⚠️ README kon niet worden geladen.<br><a href="https://github.com/Huijting/midnight_guide" target="_blank" style="color:var(--gold)">Open op GitHub →</a></div>';
      el.innerHTML = getAppChangelogHtml() + fallback;
    });
}

function mdToHtml(md) {
  // Strip HTML comments
  md = md.replace(/<!--[\s\S]*?-->/g, '');
  const lines = md.split('\n');
  let html = '';
  let inTable = false, inList = false;

  for (let i = 0; i < lines.length; i++) {
    let l = lines[i];

    // Table row
    if (l.trim().startsWith('|')) {
      if (!inTable) { html += '<table class="about-table">'; inTable = true; }
      if (l.replace(/[|\-\s]/g, '') === '') continue; // separator row
      const cells = l.split('|').slice(1,-1).map(c => c.trim());
      const tag = (i === 0 || !lines[i-1]?.trim().startsWith('|')) ? 'th' : 'td';
      html += '<tr>' + cells.map(c => `<${tag}>${inline(c)}</${tag}>`).join('') + '</tr>';
      continue;
    }
    if (inTable) { html += '</table>'; inTable = false; }

    // List item
    if (/^[-*] /.test(l.trim())) {
      if (!inList) { html += '<ul class="about-ul">'; inList = true; }
      html += '<li>' + inline(l.trim().slice(2)) + '</li>';
      continue;
    }
    if (inList) { html += '</ul>'; inList = false; }

    // Headings
    if (l.startsWith('### ')) { html += '<div class="about-h3">' + inline(l.slice(4)) + '</div>'; continue; }
    if (l.startsWith('## '))  { html += '<div class="about-h2">' + inline(l.slice(3)) + '</div>'; continue; }
    if (l.startsWith('# '))   { html += '<div class="about-h1">' + inline(l.slice(2)) + '</div>'; continue; }

    // HR
    if (/^---+$/.test(l.trim())) { html += '<hr class="about-hr">'; continue; }

    // Code block (skip)
    if (l.startsWith('```')) { 
      while (i + 1 < lines.length && !lines[i+1].startsWith('```')) i++;
      i++;
      continue;
    }

    // Blank line
    if (l.trim() === '') { html += '<div class="about-spacer"></div>'; continue; }

    // Paragraph
    html += '<div class="about-p">' + inline(l) + '</div>';
  }

  if (inTable) html += '</table>';
  if (inList)  html += '</ul>';
  return '<div class="about-readme">' + html + '</div>';
}

function inline(s) {
  // Bold
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Italic
  s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');
  // Inline code
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Link
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" class="about-link">$1</a>');
  return s;
}
function openHelp() {
  renderHelp();
  document.getElementById('help-modal').classList.add('open');
}
function closeHelp() {
  document.getElementById('help-modal').classList.remove('open');
}

function helpFormatMasterBody(s) {
  if (!s) return '';
  return String(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
}

function switchHelpTab(ix) {
  const bar = document.getElementById('help-tab-bar');
  if (!bar) return;
  bar.querySelectorAll('.help-tab-btn').forEach((b, i) => {
    b.classList.toggle('active', i === ix);
    b.setAttribute('aria-selected', i === ix ? 'true' : 'false');
  });
  document.querySelectorAll('.help-panel').forEach((p, i) => {
    p.classList.toggle('active', i === ix);
    p.hidden = i !== ix;
  });
  if (ix === 1) switchHelpMasterRole('tank');
}

/** Sub-tabs binnen Masterclass: Tank / Healer / DPS (los van de drie hoofdtabs). */
function switchHelpMasterRole(role) {
  const bar = document.getElementById('help-master-role-bar');
  if (!bar) return;
  const roles = ['tank', 'heal', 'dps'];
  if (!roles.includes(role)) role = 'tank';
  bar.querySelectorAll('.help-master-role-btn').forEach(b => {
    const r = b.getAttribute('data-role');
    const on = r === role;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', on ? 'true' : 'false');
    b.tabIndex = on ? 0 : -1;
  });
  roles.forEach(r => {
    const p = document.getElementById('help-master-panel-' + r);
    if (!p) return;
    const on = r === role;
    p.classList.toggle('active', on);
    p.hidden = !on;
  });
}

function renderHelp() {
  const h = (typeof HELP_CONTENT !== 'undefined') ? (HELP_CONTENT[lang] || HELP_CONTENT.nl) : null;
  if (!h) return;
  document.getElementById('help-title').textContent = h.title;
  document.getElementById('help-close').textContent = h.close;
  document.getElementById('help-btn').textContent = '❓ ' + h.title.replace('📖 ', '');

  const tabBar = document.getElementById('help-tab-bar');
  const tabPanels = document.getElementById('help-tab-panels');
  if (!tabBar || !tabPanels) return;

  const t0 = h.tab_overview || 'Overview';
  const t1 = h.tab_masterclass || 'Masterclass';
  const t2 = h.tab_community || 'Terms';

  tabBar.innerHTML = `
    <button type="button" class="help-tab-btn active" role="tab" aria-selected="true" onclick="switchHelpTab(0)">${t0}</button>
    <button type="button" class="help-tab-btn" role="tab" aria-selected="false" onclick="switchHelpTab(1)">${t1}</button>
    <button type="button" class="help-tab-btn" role="tab" aria-selected="false" onclick="switchHelpTab(2)">${t2}</button>`;

  const overviewSections = (h.sections || []).map(s =>
    `<div class="help-section">
      <div class="help-section-title">${s.icon} ${s.title}</div>
      <div class="help-section-text">${s.text}</div>
    </div>`
  ).join('');

  const mc = h.masterclass || {};
  const tank = mc.tank || {};
  const heal = mc.heal || {};
  const dps = mc.dps || {};
  const mcAria = h.masterclass_tabs_aria || 'Masterclass per rol';

  tabPanels.innerHTML = `
    <div class="help-panel active" id="help-panel-0" role="tabpanel">
      <p class="help-intro" id="help-intro"></p>
      <div id="help-sections-inner">${overviewSections}</div>
    </div>
    <div class="help-panel" id="help-panel-1" role="tabpanel" hidden>
      <p class="help-master-intro">${h.masterclass_intro || ''}</p>
      <p class="help-sources-note">${h.sources_note || ''}</p>
      <div id="help-master-role-bar" class="help-master-role-bar" role="tablist" aria-label="${mcAria.replace(/"/g, '&quot;')}">
        <button type="button" class="help-master-role-btn help-master-role-tank active" data-role="tank" role="tab" aria-selected="true" onclick="switchHelpMasterRole('tank')"><span class="help-master-role-lbl">${tank.title || '🛡️ Tank'}</span></button>
        <button type="button" class="help-master-role-btn help-master-role-heal" data-role="heal" role="tab" aria-selected="false" tabindex="-1" onclick="switchHelpMasterRole('heal')"><span class="help-master-role-lbl">${heal.title || '💊 Healer'}</span></button>
        <button type="button" class="help-master-role-btn help-master-role-dps" data-role="dps" role="tab" aria-selected="false" tabindex="-1" onclick="switchHelpMasterRole('dps')"><span class="help-master-role-lbl">${dps.title || '⚔️ DPS'}</span></button>
      </div>
      <div id="help-master-panel-tank" class="help-master-role-panel active" role="tabpanel">
        <div class="help-master-block help-master-tank"><div class="help-master-body">${helpFormatMasterBody(tank.body || '')}</div></div>
      </div>
      <div id="help-master-panel-heal" class="help-master-role-panel" role="tabpanel" hidden>
        <div class="help-master-block help-master-heal"><div class="help-master-body">${helpFormatMasterBody(heal.body || '')}</div></div>
      </div>
      <div id="help-master-panel-dps" class="help-master-role-panel" role="tabpanel" hidden>
        <div class="help-master-block help-master-dps"><div class="help-master-body">${helpFormatMasterBody(dps.body || '')}</div></div>
      </div>
    </div>
    <div class="help-panel" id="help-panel-2" role="tabpanel" hidden>
      <h3 class="help-community-h3">${h.community_title || ''}</h3>
      <p class="help-community-intro">${h.community_intro || ''}</p>
      <div class="help-community-terms" id="help-community-terms-body"></div>
    </div>`;

  const introEl = document.getElementById('help-intro');
  if (introEl) introEl.textContent = h.intro;
  const commEl = document.getElementById('help-community-terms-body');
  if (commEl) commEl.textContent = h.community_terms || '';
  switchHelpTab(0);
}

function openAbout() {
  // Sluit spec-modal als die open is
  document.getElementById('spec-modal').classList.remove('visible');
  renderAboutContent();
  document.getElementById('about-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeAbout() {
  document.getElementById('about-modal').classList.remove('open');
  document.body.style.overflow = '';
}

let qrGenerated = false;

function toggleQR() {
  const popup = document.getElementById('qr-popup');
  popup.classList.toggle('visible');

  if (!qrGenerated && popup.classList.contains('visible')) {
    const rawUrl = window.location.href.split('?')[0];
    const isLocal = rawUrl.startsWith('about:') || rawUrl.startsWith('blob:') || rawUrl.startsWith('file:');
    const cleanUrl = isLocal ? 'https://huijting.github.io/midnight_guide/' : (rawUrl.endsWith('/') ? rawUrl : rawUrl + '/');

    document.getElementById('qr-url').textContent = cleanUrl;

    const encoded = encodeURIComponent(cleanUrl);
    document.getElementById('qr-canvas').innerHTML =
      `<img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&color=e8e0ff&bgcolor=1c1c3e&data=${encoded}" width="180" height="180" style="border-radius:8px" alt="QR-code">`;

    qrGenerated = true;
  }
}

// ── FEEDBACK ─────────────────────────────────────────────────
function openFeedback() {
  document.getElementById('feedback-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeFeedback() {
  document.getElementById('feedback-modal').classList.remove('open');
  document.body.style.overflow = '';
}


// ══════════════════════════════════════════════════════════════
// ── WEEKLY CHECKLIST ─────────────────────────────────────────
// ══════════════════════════════════════════════════════════════

const WEEKLY_ITEMS = [
  { id:'w_worldboss', diff:'easy', dmfOnly:false,
    cat:{nl:'🌍 World Boss',en:'🌍 World Boss'},
    name:{nl:'Defeat the World Boss',en:'Defeat the World Boss'},
    desc:{nl:'Defeat the weekly World Boss voor Champion-level gear. Wisselt elke week van zone.',
          en:'Defeat the weekly world boss for Champion-level gear. Rotates each week per zone.'},
    where:'📍 Check de wereldkaart voor de actieve boss | Check the world map for the active boss.',
    way:'', tags:['gear'] },

  { id:'w_dungeon', diff:'easy', dmfOnly:false,
    cat:{nl:'🏰 Weekly Dungeon Quest',en:'🏰 Weekly Dungeon Quest'},
    name:{nl:'Weekly dungeon quest (Halduron Brightwing)',en:'Weekly dungeon quest (Halduron Brightwing)'},
    desc:{nl:'Voltooi een Midnight dungeon op willekeurige difficulty. Reward: gold + 1.000 rep naar keuze. Follower Dungeons tellen ook mee!',
          en:'Complete any Midnight dungeon on any difficulty. Reward: gold + 1,000 rep of your choice. Follower dungeons count!'},
    where:'📍 Halduron Brightwing — tent bij Sanctum of Light, Silvermoon City.',
    way:'/way #2393 49.0 64.8 Halduron Brightwing', tags:['rep','currency'] },

  { id:'w_liadrin', diff:'easy', dmfOnly:false,
    cat:{nl:'📜 Weekly Event Quest',en:'📜 Weekly Event Quest'},
    name:{nl:'Weekly Event Quest (Lady Liadrin)',en:'Weekly Event Quest (Lady Liadrin)'},
    desc:{nl:'Kies 1 van 4 world event quests. Reward: Apex Cache (gear, currency, 100 Coffer Key Shards) + chance at Spark of Radiance.',
          en:'Choose 1 of 4 world event quests. Reward: Apex Cache (gear, currency, 100 Coffer Key Shards) + chance at Spark of Radiance.'},
    where:'📍 Lady Liadrin — tent bij Sanctum of Light, Silvermoon City.',
    way:'/way #2393 49.03 64.61 Lady Liadrin (weekly quests)', tags:['gear','currency'] },

  { id:'w_abundance', diff:'easy', dmfOnly:false,
    cat:{nl:'🌿 Zone Events',en:'🌿 Zone Events'},
    name:{nl:'Abundance (weekly)',en:'Abundance (weekly)'},
    desc:{nl:'Verzamel 20.000 punten in de Abundance caves. 3 minuten per run, doneer regelmatig aan Dundun. Reward: 1.000 Amani Tribe rep + cache.',
          en:'Collect 20,000 points in the Abundance caves. 3 minutes per run, donate regularly to Dundun. Reward: 1,000 Amani Tribe rep + cache.'},
    where:'📍 Eerst ontgrendelen: Chel the Chip — Amani-Zar Village, Zul\&#39;Aman. Dan wekelijks bij cave-ingang. | First unlock: Chel the Chip — Amani-Zar Village, Zul\&#39;Aman.',
    way:"/way #2437 47.2 62.1 Chel the Chip (unlock Abundance)", tags:['rep','currency'] },

  { id:'w_haranir', diff:'easy', dmfOnly:false,
    cat:{nl:'🌿 Zone Events',en:'🌿 Zone Events'},
    name:{nl:'Legends of the Haranir (weekly)',en:'Legends of the Haranir (weekly)'},
    desc:{nl:'Kies een Harati relic en voltooi het scenario. Reward: Avid Learner\&#39;s Supply Pack + housing decor. Choice is Warband-wide!',
          en:'Choose a Harati relic and complete the scenario. Reward: Avid Learner\&#39;s Supply Pack + housing decor. Choice is Warband-wide!'},
    where:'📍 Zur\'ashar Kassameh — Reliquary, The Den, Harandar. (Wowhead NPC spelling.)',
    way:'/way #2413 54.2 53.0 Zur\'ashar Kassameh (Lost Legends quest)', tags:['rep','currency'] },

  { id:'w_soiree', diff:'easy', dmfOnly:false,
    cat:{nl:'🌿 Zone Events',en:'🌿 Zone Events'},
    name:{nl:'Saltheril\&#39;s Soiree (weekly)',en:'Saltheril\&#39;s Soiree (weekly)'},
    desc:{nl:'Kies een subfaction (Magisters/Blood Knights/Farstriders/Shades). Geeft Brimming Arcana + 2.000 Silvermoon Court rep. Je keuze kan andere factions schaden! Unlock first via Jonas Everdawn.',
          en:'Choose a subfaction (Magisters/Blood Knights/Farstriders/Shades). Gives Brimming Arcana + 2,000 Silvermoon Court rep. Your choice can hurt other factions! Unlock first via Jonas Everdawn.'},
    where:'📍 Unlock: Jonas Everdawn — ten noorden van Sanctum of Light, Silvermoon City → dan Lord Saltheril, Fairbreeze Village.',
    way:'/way #2393 50.1 45.2 Jonas Everdawn (unlock Soiree)', tags:['rep','currency'] },

  { id:'w_stormarion', diff:'easy', dmfOnly:false,
    cat:{nl:'🌿 Zone Events',en:'🌿 Zone Events'},
    name:{nl:'Stormarion Assault (weekly)',en:'Stormarion Assault (weekly)'},
    desc:{nl:'Defend Stormarion Citadel — elke 30 min 3 waves. Geen pre-quest nodig. Reward: cache + Great Vault World progress.',
          en:'Defend Stormarion Citadel — 3 waves every 30 min. No pre-quest needed. Rewards cache + Great Vault World progress.'},
    where:'📍 Voidstorm — Stormarion Citadel.',
    way:'/way #2405 26.4 67.6 Stormarion Assault', tags:['rep','currency'] },

  { id:'w_prey', diff:'medium', dmfOnly:false,
    cat:{nl:'🎯 Prey Hunts',en:'🎯 Prey Hunts'},
    name:{nl:'Nightmare Prey (2x)',en:'Nightmare Prey (2x)'},
    desc:{nl:'Voltooi 2 Nightmare Prey Hunts voor Champion track gear (~246+ iLvl, Midnight S1). Track your prey in de zone en overleef ambushes. Telt mee voor Great Vault World.',
          en:'Complete 2 Nightmare Prey hunts for Champion-track gear (~246+ ilvl, Midnight S1). Track your prey through the zone and survive ambushes. Contributes to Great Vault World.'},
    where:'📍 Magister Astalor Bloodsworn — Murder Row, Silvermoon City.',
    way:'/way #2393 54.97 63.31 Magister Astalor Bloodsworn (Prey)', tags:['gear'] },

  { id:'w_delve1', diff:'medium', dmfOnly:false,
    cat:{nl:'🏚 Delves (Bountiful)',en:'🏚 Delves (Bountiful)'},
    name:{nl:'Bountiful Delve (1/4)',en:'Bountiful Delve (1/4)'},
    desc:{nl:'Je hebt een Restored Coffer Key nodig. Valeera begeleidt je. Bountiful Delves vullen je Great Vault World slot — Tier 8 tot 259 iLvl (Hero). Regular (non-Bountiful) Delves tellen niet voor deze vault reward.',
          en:'Requires a Restored Coffer Key. Valeera accompanies you. Bountiful Delves fill your Great Vault World slot — Tier 8 rewards up to 259 ilvl (Hero). Regular (non-Bountiful) Delves do not count for this vault reward.'},
    where:'📍 Delve-ingangen verspreid over alle zones — gouden kistje-icoon op de kaart.',
    way:'', tags:['gear'] },
  { id:'w_delve2', diff:'medium', dmfOnly:false, cat:{nl:'🏚 Delves (Bountiful)',en:'🏚 Delves (Bountiful)'},
    name:{nl:'Bountiful Delve (2/4)',en:'Bountiful Delve (2/4)'},
    desc:{nl:'2e run.',en:'2nd run.'}, where:'📍 Zie delve 1.', way:'', tags:['gear'] },
  { id:'w_delve3', diff:'medium', dmfOnly:false, cat:{nl:'🏚 Delves (Bountiful)',en:'🏚 Delves (Bountiful)'},
    name:{nl:'Bountiful Delve (3/4)',en:'Bountiful Delve (3/4)'},
    desc:{nl:'3e run.',en:'3rd run.'}, where:'📍 Zie delve 1.', way:'', tags:['gear'] },
  { id:'w_delve4', diff:'medium', dmfOnly:false, cat:{nl:'🏚 Delves (Bountiful)',en:'🏚 Delves (Bountiful)'},
    name:{nl:'Bountiful Delve (4/4)',en:'Bountiful Delve (4/4)'},
    desc:{nl:'4e run — maximum Great Vault World progress. Note: Tier 8+ Delves geven HERO track gear in de Great Vault.',
          en:'4th run — maximum Great Vault World progress. Note: Tier 8+ Delves reward HERO track gear in the Great Vault.'}, where:'📍 Zie delve 1.', way:'', tags:['gear'] },

  { id:'w_mplus1', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'},
    name:{nl:'Complete M+ Key (1/8)',en:'Complete M+ Key (1/8)'},
    desc:{nl:'First key voor Great Vault Dungeon slot.',en:'First key for Great Vault Dungeon slot.'},
    where:'📍 Geen quest — gebruik je eigen key of join via Group Finder.', way:'', tags:['gear'] },
  { id:'w_mplus2', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'}, name:{nl:'Complete M+ Key (2/8)',en:'Complete M+ Key (2/8)'}, desc:{nl:'2e key.',en:'2nd key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus3', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'}, name:{nl:'Complete M+ Key (3/8)',en:'Complete M+ Key (3/8)'}, desc:{nl:'3e key.',en:'3rd key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus4', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'}, name:{nl:'Complete M+ Key (4/8)',en:'Complete M+ Key (4/8)'}, desc:{nl:'4e key.',en:'4th key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus5', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'}, name:{nl:'Complete M+ Key (5/8)',en:'Complete M+ Key (5/8)'}, desc:{nl:'5e key.',en:'5th key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus6', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'}, name:{nl:'Complete M+ Key (6/8)',en:'Complete M+ Key (6/8)'}, desc:{nl:'6e key.',en:'6th key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus7', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'}, name:{nl:'Complete M+ Key (7/8)',en:'Complete M+ Key (7/8)'}, desc:{nl:'7e key.',en:'7th key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus8', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'},
    name:{nl:'Complete M+ Key (8/8)',en:'Complete M+ Key (8/8)'},
    desc:{nl:'8 keys = maximum vault choice. +10 of hoger geeft Myth-level reward.',en:'8 keys = maximum vault choice. +10 or higher gives Myth-level reward.'},
    where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_vault', diff:'medium', dmfOnly:false,
    cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'},
    name:{nl:'Collect Great Vault',en:'Collect Great Vault'},
    desc:{nl:'Kies je weekly reward na reset (woensdag EU). Niet ophalen = Thalassian Token of Merit per slot.',
          en:'Choose your weekly reward after reset (Wednesday EU). Not collecting = Thalassian Token of Merit per slot.'},
    where:'📍 Vaultkeeper Elysa — The Bazaar, Silvermoon City.',
    way:'/way #2393 54.1 51.2 Vaultkeeper Elysa (Great Vault)', tags:['gear'] },

  { id:'w_raid1', diff:'medium', dmfOnly:false,
    cat:{nl:'🏰 Raid',en:'🏰 Raid'},
    name:{nl:'Voidspire (LFR/Normal/Heroic)',en:'Voidspire (LFR/Normal/Heroic)'},
    desc:{nl:'6 bosses in Voidstorm. Reward: gear, rep en Great Vault Raid progress. LFR beschikbaar na week 1.',
          en:'6 bosses in Voidstorm. Gives gear, rep and Great Vault Raid progress. LFR available after week 1.'},
    where:'📍 Voidspire — Voidstorm. Via Dungeon Finder of directe ingang.',
    way:'/way #2405 45.4 64.0 Voidspire (ingang)', tags:['gear','rep'] },
  { id:'w_raid2', diff:'medium', dmfOnly:false,
    cat:{nl:'🏰 Raid',en:'🏰 Raid'},
    name:{nl:'Dreamrift (LFR/Normal/Heroic)',en:'Dreamrift (LFR/Normal/Heroic)'},
    desc:{nl:'Second raid voor extra gear en vault slots.',en:'Second raid for extra gear and vault slots.'},
    where:'📍 Dreamrift — via Dungeon Finder of directe ingang.', way:'', tags:['gear','rep'] },

  { id:'w_rep_silver', dmfOnly:false,
    cat:{nl:'🤝 Reputatie',en:'🤝 Reputation'},
    name:{nl:'Silvermoon Court Renown',en:'Silvermoon Court Renown'},
    desc:{nl:'Via Saltheril\&#39;s Soiree, World Quests en zone-activiteiten. Contract van een Scribe geeft rep bij alle WQs.',
          en:'Via Saltheril\&#39;s Soiree, World Quests and zone activities. Contract from a Scribe gives rep on all WQs.'},
    where:'📍 Vendor: Caeris Fairdawn — Saltheril\&#39;s Haven, Eversong Woods.',
    way:'/way #2395 43.4 47.4 Caeris Fairdawn (Silvermoon Court vendor)', tags:['rep'] },
  { id:'w_rep_amani', dmfOnly:false,
    cat:{nl:'🤝 Reputatie',en:'🤝 Reputation'},
    name:{nl:'Amani Tribe Renown',en:'Amani Tribe Renown'},
    desc:{nl:'Via Abundance weekly en Zul-Aman activiteiten. Renown 9 geeft Champion-level necklace (~246 ilvl band).',
          en:'Via Abundance weekly and Zul-Aman activities. Renown 9 gives Champion-level necklace (~246 ilvl band).'},
    where:'📍 Via Abundance event in Zul-Aman.',
    way:"/way #2437 47.2 62.1 Amani-Zar Village (Abundance/Amani hub)", tags:['rep'] },

  { id:'w_craft_orders', dmfOnly:false,
    cat:{nl:'🔨 Crafting Orders',en:'🔨 Crafting Orders'},
    name:{nl:'Process Patron Crafting Orders',en:'Process Patron Crafting Orders'},
    desc:{nl:'Main source of weekly KP. Verwerk public orders voor gold en profession XP.',
          en:'Main source of weekly KP. Process public orders for gold and profession XP.'},
    where:'📍 Mar\'nah — The Bazaar, Silvermoon City. (Wowhead NPC spelling.)',
    way:'/way #2393 46.2 53.8 Mar\'nah (Crafting Orders)', tags:['crafting','currency'] },
  { id:'w_craft_weekly', dmfOnly:false,
    cat:{nl:'🔨 Crafting Orders',en:'🔨 Crafting Orders'},
    name:{nl:'Weekly Crafting Quest',en:'Weekly Crafting Quest'},
    desc:{nl:'Special weekly quest voor bonus KP of profession XP.',
          en:'Special weekly quest for bonus KP or profession XP.'},
    where:'📍 Bij je eigen profession trainer — gebruik de /way uit de Professies-tab van jouw professie.',
    way:'', tags:['crafting','rep'] },

  { id:'w_timewalking', dmfOnly:false,
    cat:{nl:'⏳ Timewalking',en:'⏳ Timewalking'},
    name:{nl:'Timewalking (indien actief)',en:'Timewalking (if active)'},
    desc:{nl:'Voltooi 5 Timewalking dungeons voor bonus gear. Alleen actief in specifieke weken — check de in-game kalender (J).',
          en:'Complete 5 Timewalking dungeons for bonus gear. Only active certain weeks — check the in-game calendar (J).'},
    where:'📍 Queue via Dungeon Finder. Actief weken staan in de kalender.', way:'', tags:['gear'] },

  { id:'w_dmf', diff:'easy', dmfOnly:true,
    cat:{nl:'🎡 Darkmoon Faire',en:'🎡 Darkmoon Faire'},
    name:{nl:'Darkmoon Faire',en:'Darkmoon Faire'},
    desc:{nl:'Mini-games en quests geven +2 skill en +3 KP per profession. Vergeet de WHEE! buff niet voor +10% XP/rep. Alleen actief eerste week van de maand.',
          en:'Mini-games and quests give +2 skill and +3 KP per profession. Don\&#39;t forget the WHEE! buff for +10% XP/rep. Only active first week of month.'},
    where:'📍 Portal: Elwynn Forest (bij Goldshire, Alliance) of Mulgore (bij Thunder Bluff, Horde).',
    way:'/way #37 41.1 83.0 Darkmoon Faire portal (Alliance)', tags:['currency','crafting'] },

  // ── Renown Champion Gear (eenmalig per character, maar weekly controleren) ──
  { id:'w_renown_helm', dmfOnly:false,
    cat:{nl:'🏅 Renown Rewards',en:'🏅 Renown Rewards'},
    name:{nl:'Champion Helm (Silvermoon Court Renown 9)',en:'Champion Helm (Silvermoon Court Renown 9)'},
    desc:{nl:'Collect the Champion Helm (iLvl 246) at Silvermoon Court Renown 9. One-time — vink af zodra je die hebt.',
          en:'Collect Champion Helm (iLvl 246) at Silvermoon Court Renown 9. One-time — check off once collected.'},
    where:'Vendor: Caeris Fairdawn — Saltheril&#39;s Haven, Eversong Woods.',
    way:'/way #2395 43.4 47.4 Caeris Fairdawn', tags:['gear','rep'] },

  { id:'w_renown_neck', dmfOnly:false,
    cat:{nl:'🏅 Renown Rewards',en:'🏅 Renown Rewards'},
    name:{nl:'Champion Necklace (Amani Tribe Renown 9)',en:'Champion Necklace (Amani Tribe Renown 9)'},
    desc:{nl:'Collect the Champion Necklace (iLvl 246) at Amani Tribe Renown 9.',
          en:'Collect Champion Necklace (iLvl 246) at Amani Tribe Renown 9.'},
    where:'Amani Tribe vendor — Amani-Zar Village, Zul-Aman.',
    way:"/way #2437 47.2 62.1 Amani Tribe vendor", tags:['gear','rep'] },

  { id:'w_renown_waist', dmfOnly:false,
    cat:{nl:'🏅 Renown Rewards',en:'🏅 Renown Rewards'},
    name:{nl:'Champion Belt (Haranir Renown 8)',en:'Champion Belt (Haranir Renown 8)'},
    desc:{nl:'Collect the Champion Belt (iLvl 246) at Haranir Renown 8.',
          en:'Collect Champion Belt (iLvl 246) at Haranir Renown 8.'},
    where:'Haranir vendor — The Den, Harandar.',
    way:'/way #2413 54.2 53.0 The Den, Harandar', tags:['gear','rep'] },

  { id:'w_renown_trinket', dmfOnly:false,
    cat:{nl:'🏅 Renown Rewards',en:'🏅 Renown Rewards'},
    name:{nl:'Champion Trinket (Singularity Renown 7)',en:'Champion Trinket (Singularity Renown 7)'},
    desc:{nl:'Collect the Champion Trinket (iLvl 246) at Singularity Renown 7.',
          en:'Collect Champion Trinket (iLvl 246) at Singularity Renown 7.'},
    where:'Singularity vendor — Stormarion Citadel, Voidstorm.',
    way:'/way #2405 26.4 67.6 Singularity vendor', tags:['gear','rep'] },

  // ── Sparks of Radiance ──
  { id:'w_spark_liadrin', dmfOnly:false,
    cat:{nl:'✨ Sparks of Radiance',en:'✨ Sparks of Radiance'},
    name:{nl:'Spark of Radiance (Liadrin quest)',en:'Spark of Radiance (Liadrin quest)'},
    desc:{nl:'Chance at Spark via weekly Liadrin quest. Bewaar voor BiS slot — craft niets tot je weet wat je wilt!',
          en:'Chance at Spark from weekly Liadrin quest. Save for BiS slot — don&#39;t craft until you know what you want!'},
    where:'Lady Liadrin — tent bij Sanctum of Light, Silvermoon City.',
    way:'/way #2393 49.03 64.61 Lady Liadrin', tags:['currency'] },

  { id:'w_spark_worldtour', dmfOnly:false,
    cat:{nl:'✨ Sparks of Radiance',en:'✨ Sparks of Radiance'},
    name:{nl:'Spark of Radiance (World Tour — alle 8 M0)',en:'Spark of Radiance (World Tour — all 8 M0)'},
    desc:{nl:'Voltooi alle 8 M0 dungeons (World Tour quest) voor een guaranteed Spark. Bewaar hem — craft nog niets!',
          en:'Complete all 8 M0 dungeons (World Tour quest) for a guaranteed Spark. Save it — don&#39;t craft yet!'},
    where:'World Tour quest NPC — tent bij Lady Liadrin, Silvermoon City.',
    way:'/way #2393 49.03 64.61 World Tour quest NPC', tags:['currency'] },

  // ── Hard Prey voor Veteran gear + Crests ──
  { id:'w_prey_hard', dmfOnly:false,
    cat:{nl:'🎯 Prey Hunts',en:'🎯 Prey Hunts'},
    name:{nl:'Hard Prey Hunts (2x) — Veteran gear',en:'Hard Prey Hunts (2x) — Veteran gear'},
    desc:{nl:'First 2 Hard Prey Hunts geven Veteran/Hero track rewards (~233–259+ iLvl, Midnight S1). Telt mee voor Great Vault World. Tip: traps + ambushes, onder de 5 min per Hunt.',
          en:'First 2 Hard Prey hunts give Veteran/Hero-track rewards (~233–259+ ilvl, Midnight S1). Contributes to Great Vault World. Tip: traps + ambushes, under 5 min/hunt.'},
    where:'Magister Astalor Bloodsworn — Murder Row, Silvermoon City.',
    way:'/way #2393 54.97 63.31 Magister Astalor Bloodsworn (Prey)', tags:['gear','currency'] }];function isDmfWeek() {
  const now = new Date();
  // DMF is actief van de eerste zondag t/m zaterdag van elke maand
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const firstSunday = new Date(firstDay);
  firstSunday.setDate(1 + (7 - firstDay.getDay()) % 7);
  const endSunday = new Date(firstSunday);
  endSunday.setDate(firstSunday.getDate() + 7);
  return now >= firstSunday && now < endSunday;
}

/** Start of current WoW EU weekly period (Wednesday 07:00 UTC). */
function getCurrentWowWeeklyPeriodStartUtc() {
  const now = new Date();
  const y = now.getUTCFullYear();
  const mo = now.getUTCMonth();
  const day = now.getUTCDate();
  let periodStart = new Date(Date.UTC(y, mo, day, 7, 0, 0, 0));
  const dow = now.getUTCDay();
  const daysSinceWed = (dow - 3 + 7) % 7;
  periodStart.setUTCDate(periodStart.getUTCDate() - daysSinceWed);
  if (now.getTime() < periodStart.getTime()) {
    periodStart.setUTCDate(periodStart.getUTCDate() - 7);
  }
  return periodStart;
}

function getNextWowWeeklyResetUtc() {
  const start = getCurrentWowWeeklyPeriodStartUtc();
  const next = new Date(start.getTime());
  next.setUTCDate(next.getUTCDate() + 7);
  return next;
}

function getWeeklyKey() {
  const t = getCurrentWowWeeklyPeriodStartUtc();
  return 'weekly_check_' + t.toISOString().slice(0, 10);
}

let weeklyCountdownInterval;

function startWeeklyCountdown() {
  if (weeklyCountdownInterval) clearInterval(weeklyCountdownInterval);

  const resetEl = document.getElementById('weekly-next-reset');
  const dashEl = document.getElementById('dash-weekly-countdown');
  if (!resetEl && !dashEl) return;

  function update() {
    const now = new Date();
    const target = getNextWowWeeklyResetUtc();
    const diff = target.getTime() - now.getTime();
    if (diff <= 0) {
      if (resetEl) {
        resetEl.textContent = lang === 'en' ? '0 days, 0 hrs, 0 min, 0 sec' : '0 dagen, 0 uur, 0 min, 0 sec';
      }
      if (dashEl) dashEl.textContent = lang === 'en' ? 'Reset' : 'Reset';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    if (resetEl) {
      if (lang === 'en') {
        resetEl.textContent = `${days} days, ${hours} hrs, ${mins} min, ${secs} sec`;
      } else {
        resetEl.textContent = `${days} dagen, ${hours} uur, ${mins} min, ${secs} sec`;
      }
    }
    if (dashEl) {
      if (lang === 'en') {
        dashEl.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
      } else {
        dashEl.textContent = `${days}d ${hours}u ${mins}m ${secs}s`;
      }
    }
  }

  update();
  weeklyCountdownInterval = setInterval(update, 1000);
}

function weeklyLoadState() {
  try { return JSON.parse(localStorage.getItem(getWeeklyKey()) || '{}'); } catch(e) { return {}; }
}

function weeklySaveState(state) {
  localStorage.setItem(getWeeklyKey(), JSON.stringify(state));
}

function weeklyToggle(id) {
  const state = weeklyLoadState();
  state[id] = !state[id];
  weeklySaveState(state);
  buildWeeklyList();
}

function weeklyResetAll() {
  localStorage.removeItem(getWeeklyKey());
  buildWeeklyList();
}

function weeklyCatToggle(header, catKey) {
  const isOpen = header.classList.toggle('open');
  header.nextElementSibling.classList.toggle('open', isOpen);
  try {
    const cats = JSON.parse(sessionStorage.getItem('weekly_open_cats') || '{}');
    cats[catKey] = isOpen;
    sessionStorage.setItem('weekly_open_cats', JSON.stringify(cats));
  } catch(e) {}
}

// ═══════════════════════════════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════════════════════════════
let searchFocusIdx = -1;

/**
 * Dungeon detail — trash tag pill HTML. Applies `.interrupt-danger` for `int` / `interrupt`
 * (and mob flags `must_interrupt` / `high_priority` add `int` in app.js before this runs).
 */
function renderDungeonDetailTrashTag(tg, mob, tagMap, tagLbl) {
  const raw = String(tg);
  const lower = raw.toLowerCase();
  const isInterruptTag = lower === 'int' || lower === 'interrupt';
  const base = (tagMap && (tagMap[raw] || tagMap[lower])) || '';
  const lab = tagLbl && (tagLbl[raw] !== undefined && tagLbl[raw] !== null ? tagLbl[raw] : tagLbl[lower]);
  const label = String(lab != null ? lab : raw).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const cls = ('trash-tag ' + base + (isInterruptTag ? ' interrupt-danger' : '')).trim();
  return '<span class="' + cls + '">' + label + '</span>';
}

function openSearch() {
  document.getElementById('search-overlay').classList.add('open');
  const inp = document.getElementById('search-input');
  inp.value = '';
  const ph = { nl:'Zoek dungeon, spec, professie...', en:'Search dungeon, spec, profession...'};
  inp.placeholder = ph[lang] || ph.nl;
  document.getElementById('search-results').innerHTML = '';
  searchFocusIdx = -1;
  setTimeout(() => inp.focus(), 80);
}

function toggleNavMenu() {
  /* Legacy: hamburger + duplicate nav removed; primary nav is mode-tabs only. */
}

function closeSearch() {
  document.getElementById('search-overlay').classList.remove('open');
  searchFocusIdx = -1;
}

function closeSearchIfBg(e) {
  if (e.target.id === 'search-overlay') closeSearch();
}

function doSearch(q) {
  const el = document.getElementById('search-results');
  searchFocusIdx = -1;
  q = q.trim().toLowerCase();
  if (!q) { el.innerHTML = ''; return; }

  const results = [];
  const badges = {
    nl: { dungeon:'Dungeon', spec:'Spec', prof:'Professie', delves:'Delves', travel:'Travel' },
    en: { dungeon:'Dungeon', spec:'Spec', prof:'Profession', delves:'Delves', travel:'Travel' }
  };
  const badge = badges[lang] || badges.nl;
  const groupLabels = {
    nl: { dungeon:'⚔ Dungeons', spec:'🎯 Specs', prof:'🔨 Professies', delves:'💎 Delves', travel:'🧭 Reisgids' },
    en: { dungeon:'⚔ Dungeons', spec:'🎯 Specs', prof:'🔨 Professions', delves:'💎 Delves', travel:'🧭 Travel Guide' }
  };
  const grpLbl = groupLabels[lang] || groupLabels.nl;

  // ── Dungeons ──
  const dungeonList = typeof getAllDungeons === 'function' ? getAllDungeons() : (typeof DUNGEONS !== 'undefined' ? DUNGEONS : []);
  if (dungeonList.length) {
    dungeonList.forEach(d => {
      const name = (typeof d.name === 'object') ? (d.name[lang] || d.name.nl || '') : (d.name || '');
      const zone = (typeof d.zone === 'object') ? (d.zone[lang] || d.zone.nl || '') : (d.zone || '');
      const bosses = (d.bosses_short || []).join(' ').toLowerCase();
      if ((name+zone+bosses).toLowerCase().includes(q)) {
        results.push({ type:'dungeon', icon: d.type==='mplus' ? '⚔' : '🗺', name, sub: zone, badge:badge.dungeon, action: () => { closeSearch(); setMode('dungeons'); setTimeout(()=>openDungeon(d.id),50); } });
      }
    });
  }

  // ── Specs ──
  if (typeof ALL_SPECS !== 'undefined') {
    ALL_SPECS.forEach(s => {
      const specName = (typeof s.spec === 'object') ? (s.spec[lang] || s.spec.nl || '') : (s.spec || '');
      const cls = s.class || '';
      const summary = (typeof s.summary === 'object') ? (s.summary[lang] || s.summary.nl || '') : '';
      if ((specName+cls+summary).toLowerCase().includes(q)) {
        results.push({ type:'spec', icon: s.icon, name: specName, sub: cls, badge:badge.spec, action: () => { closeSearch(); setMode('specs'); setTimeout(()=>showSpec(s.id),50); } });
      }
    });
  }

  // ── Professions ──
  if (typeof ALL_PROFS !== 'undefined') {
    ALL_PROFS.forEach(p => {
      const name = (typeof p.name === 'object') ? (p.name[lang] || p.name.nl || '') : (p.name || '');
      const trainerName = p.trainer ? p.trainer.name || '' : '';
      if ((name+trainerName).toLowerCase().includes(q)) {
        results.push({ type:'prof', icon: p.icon, name, sub: trainerName ? 'Trainer: '+trainerName : '', badge:badge.prof, action: () => { closeSearch(); setMode('professions'); setTimeout(()=>showProf(p.id),50); } });
      }
    });
  }

  // ── Delves ──
  if (q.includes('delve') || q.includes('bountiful') || q.includes('loot')) {
    const delveLbl = { nl:'Delves', en:'Delves'}[lang];
    const delveSub = { nl:'Alle Delves met /way & Loot', en:'All Delves with /way & Loot'}[lang];
    results.push({ type:'delves', icon: '💎', name: delveLbl, sub: delveSub, badge: 'Delves', action: () => { closeSearch(); setMode('delves'); } });
  }
  if (typeof DELVES_DATA !== 'undefined' && DELVES_DATA.delves) {
    DELVES_DATA.delves.forEach(d => {
      if (d.name.toLowerCase().includes(q) || (d.zoneName && d.zoneName.toLowerCase().includes(q))) {
        results.push({ type:'delves', icon: '💎', name: d.name, sub: d.zoneName, badge: 'Delves', action: () => { closeSearch(); setMode('delves'); } });
      }
    });
  }

  if (typeof PORTAL_DATA !== 'undefined' && PORTAL_DATA.length) {
    const travelKeywords = ['portal', 'travel', 'silvermoon', 'voidstorm', 'harandar', 'quel', 'zul', 'aman', 'sunwell', 'capitals', 'tomtom', 'sunwell terrace'];
    const hubHit = PORTAL_DATA.some(h => {
      const hn = (h.hubName || '').toLowerCase();
      if (hn.includes(q)) return true;
      return (h.portals || []).some(p => (p.to || '').toLowerCase().includes(q));
    });
    const kwHit = travelKeywords.some(k => q.includes(k));
    if (hubHit || kwHit) {
      const travelName = lang === 'en' ? 'Travel Guide' : 'Reisgids';
      const travelSub = lang === 'en' ? 'Portals & /way — Season 1' : 'Portals & /way — Seizoen 1';
      results.push({
        type: 'travel',
        icon: '🧭',
        name: travelName,
        sub: travelSub,
        badge: badge.travel,
        action: () => { closeSearch(); setMode('travel'); }
      });
    }
  }

  if (!results.length) {
    el.innerHTML = `<div class="search-empty">Geen resultaten voor "<strong>${q}</strong>"</div>`;
    return;
  }

  // Groepeer per type (dedupe delves)
  const groups = { dungeon: [], spec: [], prof: [], delves: [], travel: [] };
  const labels = grpLbl;
  const seenDelves = new Set();
  const seenTravel = new Set();
  results.forEach(r => {
    if (r.type === 'delves') {
      const key = r.name + (r.sub || '');
      if (seenDelves.has(key)) return;
      seenDelves.add(key);
    }
    if (r.type === 'travel') {
      if (seenTravel.has('1')) return;
      seenTravel.add('1');
    }
    groups[r.type].push(r);
  });

  let html = '';
  let idx = 0;
  ['dungeon','spec','prof','delves','travel'].forEach(type => {
    if (!groups[type].length) return;
    html += `<div class="search-group-label">${labels[type]}</div>`;
    groups[type].forEach(r => {
      html += `<div class="search-result-item" data-idx="${idx}" onclick="searchGo(${idx})">
        <div class="search-result-icon">${r.icon}</div>
        <div class="search-result-info">
          <div class="search-result-name">${r.name}</div>
          ${r.sub ? `<div class="search-result-sub">${r.sub}</div>` : ''}
        </div>
        <div class="search-result-badge">${r.badge}</div>
      </div>`;
      idx++;
    });
  });

  el.innerHTML = html;
  el._actions = results.map(r => r.action);
}

function searchGo(idx) {
  const el = document.getElementById('search-results');
  if (el._actions && el._actions[idx]) el._actions[idx]();
}

function searchKeyNav(e) {
  const el = document.getElementById('search-results');
  const items = el.querySelectorAll('.search-result-item');
  if (!items.length) return;
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    searchFocusIdx = Math.min(searchFocusIdx + 1, items.length - 1);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    searchFocusIdx = Math.max(searchFocusIdx - 1, 0);
  } else if (e.key === 'Enter') {
    if (searchFocusIdx >= 0) searchGo(searchFocusIdx);
    return;
  } else if (e.key === 'Escape') {
    closeSearch(); return;
  } else { return; }
  items.forEach((it, i) => it.classList.toggle('focused', i === searchFocusIdx));
  items[searchFocusIdx]?.scrollIntoView({ block:'nearest' });
}

/** Safe inside double-quoted HTML attributes (e.g. data-way). getAttribute returns the decoded /way string. */
function escapeDataWayAttr(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

/** Visible /way text in templates (must match clipboard). */
function escapeHtmlText(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** pcall-style: run callback without letting throws break clipboard / UI flows. */
function pcallUI(fn) {
  try {
    if (typeof fn === 'function') fn();
  } catch (_) { /* ignore */ }
}

function copyWayTextToClipboard(text, done, fail) {
  const t = String(text);
  function tryExecCommandCopy() {
    try {
      const ta = document.createElement('textarea');
      ta.value = t;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '0';
      ta.style.left = '0';
      ta.style.width = '1px';
      ta.style.height = '1px';
      ta.style.opacity = '0';
      ta.style.pointerEvents = 'none';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      ta.setSelectionRange(0, t.length);
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (_) {
      return false;
    }
  }
  if (tryExecCommandCopy()) {
    pcallUI(done);
    return;
  }
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(t).then(() => pcallUI(done)).catch(() => {
      if (tryExecCommandCopy()) pcallUI(done);
      else pcallUI(fail);
    });
    return;
  }
  pcallUI(fail);
}

function copyWay(el) {
  if (!el || typeof el.getAttribute !== 'function') return;
  let way = el.getAttribute('data-way');
  if (way === null || way === '') {
    way = el.dataset && el.dataset.way != null ? String(el.dataset.way) : '';
  }
  if (!way) return;
  const wui = (typeof WEEKLY_UI !== 'undefined' && WEEKLY_UI) ? (WEEKLY_UI[lang] || WEEKLY_UI.nl) : { copied: 'Gekopieerd!' };
  const origHTML = el.innerHTML;
  copyWayTextToClipboard(
    way,
    () => {
      pcallUI(() => {
        el.innerHTML = '✅ ' + (wui.copied || 'Gekopieerd!');
        setTimeout(() => { pcallUI(() => { el.innerHTML = origHTML; }); }, 2000);
      });
    },
    () => {
      pcallUI(() => {
        el.innerHTML = '⚠️';
        setTimeout(() => { pcallUI(() => { el.innerHTML = origHTML; }); }, 2000);
      });
    }
  );
}

/** Copy large addon export strings (e.g. Platynator profile JSON) from `window[data-export-key]`. */
function copyProfileExport(el) {
  if (!el || typeof el.getAttribute !== 'function') return;
  const key = el.getAttribute('data-export-key');
  if (!key || typeof window[key] !== 'string' || !window[key]) return;
  const text = window[key];
  const wui = (typeof WEEKLY_UI !== 'undefined' && WEEKLY_UI) ? (WEEKLY_UI[lang] || WEEKLY_UI.nl) : { copied: 'Gekopieerd!' };
  const origHTML = el.innerHTML;
  copyWayTextToClipboard(
    text,
    () => {
      pcallUI(() => {
        el.innerHTML = '✅ ' + (wui.copied || 'Gekopieerd!');
        setTimeout(() => { pcallUI(() => { el.innerHTML = origHTML; }); }, 2000);
      });
    },
    () => {
      pcallUI(() => {
        el.innerHTML = '⚠️';
        setTimeout(() => { pcallUI(() => { el.innerHTML = origHTML; }); }, 2000);
      });
    }
  );
}

function weeklyUpdateProgress(state) {
  let total = WEEKLY_ITEMS.length;
  let done = WEEKLY_ITEMS.filter(i => state[i.id]).length;
  if (typeof getPreyWeeklyBarSlot === 'function') {
    const s = getPreyWeeklyBarSlot();
    total += s.total;
    done += s.done;
  }
  const pct = total ? Math.round(done / total * 100) : 0;
  const fill = document.getElementById('weekly-progress-fill');
  const label = document.getElementById('weekly-progress-label');
  if (fill) fill.style.width = pct + '%';
  if (label) label.textContent = done + ' / ' + total;
}


const WEEKLY_UI = {
  nl: {
    title: '📅 Weekly Checklist',
    reset_info: 'WoW EU: woensdag 07:00 UTC · Volgende reset:',
    reset_btn: '↺ Alles resetten',
    copy_tip: 'Klik om te kopiëren',
    copied: '✅ Gekopieerd!',
    tags: {gear:'⚔ Gear', rep:'💚 Rep', currency:'💰 Currency', crafting:'🔨 Crafting'},
    progress: (done, total) => `${done} / ${total} voltooid`,
    dmf_note: '🎡 Darkmoon Faire is actief deze week!',
    wat_nu_btn: '⚡ Wat doe ik eerst?',
    wat_nu_title: '🎯 Begin hiermee:',
    wat_nu_empty: '🎉 Je weekly tasks zijn allemaal afgevinkt! Ga lekker spelen 😄',
    bountiful_sync_note: '📦 Bountiful Delves: markeer je 4 daily keys en vault slots op de 💎 Delves-tab — account-wide voor tank, healer én DPS.',
    diff: {easy:'🟢 Makkelijk', medium:'🟡 Gemiddeld', hard:'🔴 Uitdagend'},
    prey_synthetic_cat: '🎯 Prey',
    prey_synthetic_desc: 'Live count via localStorage (midnight_prey_progress). Vink targets af op de Prey-tab. Green check bij 12/12.',
  },
  en: {
    title: '📅 Weekly Checklist',
    reset_info: 'WoW EU: Wednesday 07:00 UTC · Next reset:',
    reset_btn: '↺ Reset all',
    copy_tip: 'Click to copy',
    copied: '✅ Copied!',
    tags: {gear:'⚔ Gear', rep:'💚 Rep', currency:'💰 Currency', crafting:'🔨 Crafting'},
    progress: (done, total) => `${done} / ${total} completed`,
    dmf_note: '🎡 Darkmoon Faire is active this week!',
    wat_nu_btn: '⚡ What should I do first?',
    wat_nu_title: '🎯 Start with this:',
    wat_nu_empty: '🎉 All weekly tasks checked off! Go have fun 😄',
    bountiful_sync_note: '📦 Bountiful Delves: track your 4 daily keys and vault slots on the 💎 Delves tab — account-wide for tank, healer and DPS.',
    diff: {easy:'🟢 Easy', medium:'🟡 Medium', hard:'🔴 Challenging'},
    prey_synthetic_cat: '🎯 Prey',
    prey_synthetic_desc: 'Live count from localStorage (midnight_prey_progress). Check off targets on the Prey tab. Green check at 12/12.',
  }
};
function buildWeeklyList() {
  const el = document.getElementById('weekly-list');
  if (!el) return;

  if (typeof pruneBountifulWeeklyMap === 'function') pruneBountifulWeeklyMap(weeklyLoadState());
  const stateSynced = weeklyLoadState();
  const openCats = JSON.parse(sessionStorage.getItem('weekly_open_cats') || '{}');

  // Groepeer per categorie (gebruik vertaalde cat-naam als sleutel)
  const cats = {};
  WEEKLY_ITEMS.filter(item => !item.dmfOnly || isDmfWeek()).forEach(item => {
    const catLabel = (typeof item.cat === 'object') ? (item.cat[lang] || item.cat.nl) : item.cat;
    if (!cats[catLabel]) cats[catLabel] = [];
    cats[catLabel].push(item);
  });

  const wui0 = WEEKLY_UI[lang] || WEEKLY_UI.nl;
  let html = (wui0.bountiful_sync_note ? `<div class="weekly-bountiful-sync-note">${wui0.bountiful_sync_note}</div>` : '');

  if (typeof getPreyWeeklyKillProgress === 'function') {
    const pk = getPreyWeeklyKillProgress();
    const preyAllDone = pk.total > 0 && pk.done >= pk.total;
    const preyName = `🎯 Prey Targets Killed: ${pk.done}/${pk.total}`;
    const catKeyPrey = 'prey_synthetic';
    const isOpenPrey = openCats[catKeyPrey] === true;
    html += `<div class="weekly-category weekly-category-prey-synthetic">
      <div class="weekly-cat-header ${isOpenPrey ? 'open' : ''} ${preyAllDone ? 'all-done' : ''}" onclick="weeklyCatToggle(this,'${catKeyPrey}')">
        <div class="weekly-cat-left">
          <span class="weekly-cat-done-icon">✅</span>
          <span class="weekly-cat-title">${wui0.prey_synthetic_cat}</span>
          <span class="weekly-cat-badge">${preyAllDone ? 1 : 0}/1</span>
        </div>
        <span class="weekly-cat-chevron">▾</span>
      </div>
      <div class="weekly-cat-items ${isOpenPrey ? 'open' : ''}">
        <div class="weekly-item weekly-item-synthetic weekly-item-prey-track ${preyAllDone ? 'done' : ''}" onclick="setMode('prey'); window.scrollTo(0,0);">
          <div class="weekly-check">${preyAllDone ? '✓' : ''}</div>
          <div class="weekly-item-body">
            <div class="weekly-item-name">${preyName}</div>
            <div class="weekly-item-desc">${wui0.prey_synthetic_desc}</div>
            <div class="weekly-item-tags"><span class="weekly-tag gear">🎯 Prey</span></div>
          </div>
        </div>
      </div>
    </div>`;
  }

  Object.entries(cats).forEach(([cat, items]) => {
    const catDone = items.filter(i => stateSynced[i.id]).length;
    const allDone = catDone === items.length;
    const catKey = cat.replace(/[^a-z0-9]/gi,'_');
    const isOpen = openCats[catKey] === true; // standaard gesloten
    html += `<div class="weekly-category">
      <div class="weekly-cat-header ${isOpen?'open':''} ${allDone?'all-done':''}" onclick="weeklyCatToggle(this,'${catKey}')">
        <div class="weekly-cat-left">
          <span class="weekly-cat-done-icon">✅</span>
          <span class="weekly-cat-title">${cat}</span>
          <span class="weekly-cat-badge">${catDone}/${items.length}</span>
        </div>
        <span class="weekly-cat-chevron">▾</span>
      </div>
      <div class="weekly-cat-items ${isOpen?'open':''}">`;
    items.forEach(item => {
      const done = !!stateSynced[item.id];
      const wui2 = WEEKLY_UI[lang] || WEEKLY_UI.nl;
      const tags = item.tags.map(t => `<span class="weekly-tag ${t}">${wui2.tags[t] || t}</span>`).join('');
      const iname = (typeof item.name === 'object') ? (item.name[lang] || item.name.nl) : item.name;
      const idesc = (typeof item.desc === 'object') ? (item.desc[lang] || item.desc.nl) : item.desc;
      const diffLabel = item.diff ? `<span class="diff-badge diff-${item.diff}">${wui2.diff[item.diff]||''}</span>` : '';
      html += `<div class="weekly-item ${done ? 'done' : ''}" onclick="weeklyToggle('${item.id}')">
        <div class="weekly-check">${done ? '✓' : ''}</div>
        <div class="weekly-item-body">
          <div class="weekly-item-name">${iname} ${diffLabel}</div>
          <div class="weekly-item-desc">${idesc}</div>
          ${item.where ? `<div class="weekly-item-where">${item.where}</div>` : ''}
          ${item.way ? `<div class="weekly-item-way" onclick="event.stopPropagation();copyWay(this)" data-way="${escapeDataWayAttr(item.way)}" title="${(WEEKLY_UI[lang]||WEEKLY_UI.nl).copy_tip}">📋 ${escapeHtmlText(item.way)}</div>` : ''}
          <div class="weekly-item-tags">${tags}</div>
        </div>
      </div>`;
    });
    html += `</div></div>`;
  });

  el.innerHTML = html;
  weeklyUpdateProgress(stateSynced);

  const resetEl = document.getElementById('weekly-next-reset');
  if (resetEl) startWeeklyCountdown();
  const resetInfoEl = document.getElementById('weekly-reset-info');
  if (resetInfoEl) resetInfoEl.textContent = (WEEKLY_UI[lang] || WEEKLY_UI.nl).reset_info;
  const titleEl = document.getElementById('weekly-title');
  if (titleEl) titleEl.textContent = (WEEKLY_UI[lang] || WEEKLY_UI.nl).title;
  const watNuBtn = document.getElementById('wat-nu-btn');
  if (watNuBtn) watNuBtn.textContent = (WEEKLY_UI[lang] || WEEKLY_UI.nl).wat_nu_btn;
}

function toggleWatNu() {
  const panel = document.getElementById('wat-nu-panel');
  if (!panel) return;
  if (panel.classList.contains('visible')) { panel.classList.remove('visible'); return; }

  const wui = WEEKLY_UI[lang] || WEEKLY_UI.nl;
  const state = weeklyLoadState();
  const diffOrder = {easy:0, medium:1, hard:2};
  const pending = WEEKLY_ITEMS
    .filter(i => !state[i.id] && (!i.dmfOnly || isDmfWeek()))
    .sort((a,b) => (diffOrder[a.diff]||0) - (diffOrder[b.diff]||0))
    .slice(0, 3);

  if (pending.length === 0) {
    panel.innerHTML = `<div style="text-align:center;padding:8px;font-size:14px">${wui.wat_nu_empty}</div>`;
  } else {
    const items = pending.map((item, i) => {
      const iname = (typeof item.name === 'object') ? (item.name[lang] || item.name.nl) : item.name;
      const diffLabel = item.diff ? wui.diff[item.diff] : '';
      return `<div class="wat-nu-item">
        <div class="wat-nu-num">${i+1}</div>
        <div>
          <div class="wat-nu-text">${iname}</div>
          <div class="wat-nu-sub">${diffLabel}${item.where ? ' · ' + item.where.replace(/📍 /,'').split('|')[0].trim() : ''}</div>
        </div>
      </div>`;
    }).join('');
    panel.innerHTML = `<div style="font-size:11px;font-weight:800;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">${wui.wat_nu_title}</div>${items}`;
  }
  panel.classList.add('visible');
}

// ── PWA INSTALL MODAL ────────────────────────────────────────
const PWA_CONTENT = {
  nl: {
    title: '📲 Installeer als app',
    sub: 'Voeg de gids toe aan je beginscherm voor snel toegang.',
    android: '<strong>Android</strong> — Chrome → menu (⋮) → "Toevoegen aan startscherm"',
    ios: '<strong>iPhone / iPad</strong> — Safari → deel (□↑) → "Zet op beginscherm"',
    pc: '<strong>PC / Mac</strong> — klik op het installeer-icoon rechts in de adresbalk, of gebruik de knop hieronder.',
    btn: 'Installeer'
  },
  en: {
    title: '📲 Install as app',
    sub: 'Add the guide to your home screen for quick access.',
    android: '<strong>Android</strong> — Chrome → menu (⋮) → "Add to Home Screen"',
    ios: '<strong>iPhone / iPad</strong> — Safari → share (□↑) → "Add to Home Screen"',
    pc: '<strong>PC / Mac</strong> — click the install icon in the address bar, or use the button below.',
    btn: 'Install'
  }};

let deferredPrompt = null;

function openPwaModal() {
  const c = PWA_CONTENT[lang] || PWA_CONTENT.nl;
  const isIos     = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isAndroid = /Android/i.test(navigator.userAgent);
  document.getElementById('pwa-modal-title').textContent = c.title;
  document.getElementById('pwa-modal-sub').textContent   = c.sub;
  let steps = '';
  if (isIos)          steps = `<div class="pwa-step">${c.ios}</div>`;
  else if (isAndroid) steps = `<div class="pwa-step">${c.android}</div>`;
  else                steps = `<div class="pwa-step">${c.pc}</div><div class="pwa-step">${c.android}</div><div class="pwa-step">${c.ios}</div>`;
  document.getElementById('pwa-steps').innerHTML = steps;
  const btn = document.getElementById('pwa-install-btn');
  if (deferredPrompt) { btn.style.display = 'block'; btn.textContent = c.btn; }
  else { btn.style.display = 'none'; }
  document.getElementById('pwa-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePwaModal() {
  document.getElementById('pwa-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function pwaTrigger() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
      document.getElementById('pwa-install-btn').style.display = 'none';
    });
  }
}

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
});


// ── SPECS ────────────────────────────────────────────────────────
const SPEC_TAB_UI = {
  nl: { grid_sub:'Kies een spec — Overview, rotatie, Consumables & BiS, en macro\'s.', back:'← Alle specs', role_dps:'Ranged DPS', role_melee:'Melee DPS', role_tank:'Tank', role_heal:'Healer',
        tabs:['📋 Overview','🔄 Rotatie','🧪 Consumables & BiS','🖱️ Macro\'s'],
        tab_ids:['overview','rotation','consumables','macros'],
        pros:'✅ Sterk', cons:'❌ Zwak',
        opener:'Opener', single:'Single Target', aoe:'AoE / Mythic+',
        prio:'#', spell:'Spell', why:'Waarom', imp:'Belang',
        generate:'Focus genereren', spend:'Focus uitgeven', pets:'Pet types',
        macro_copy:'Klik op de code om te kopiëren', cons_flask:'Flask', cons_pot:'Potion', cons_food:'Food', cons_weapon:'Wapen', cons_note:'Opmerking',
        cons_copy_list:'Kopieer boodschappenlijst', cons_copied:'Gekopieerd!', copy_name:'Kopieer naam',
        cons_verified_effect_flask:'Flask (zie spec)', cons_verified_effect_pot:'Burst hoofdstat', cons_verified_effect_food:'Food (zie spec)', cons_verified_effect_weapon:'Wapenversterker',
        cons_verified_effect_flask_str:'+Haste — Flask of the Blood Knights (Sin\'dorei)', cons_verified_effect_flask_agi:'+Critical Strike — Flask of the Shattered Sun', cons_verified_effect_flask_int:'+Mastery — Flask of the Magisters',
        cons_verified_effect_food_str:'Primair stat + stamina — Royal Roast', cons_verified_effect_food_agi:'Critical Strike + Haste — Eversong Spiced Ribs (Hearthflame Supper)', cons_verified_effect_food_int:'Mastery + Versatility — Candied Amber (Silvermoon Standard)',
        cons_bis_sub1:'Consumables', cons_bis_sub2:'BiS Gear', bis_slot:'Slot', bis_item:'Item', bis_name:'Item', bis_ilvl:'iLvl', bis_req:'Req.', bis_versions:'Versions', bis_side:'Side', bis_source:'Bron', bis_type:'Type',         bis_completion:'', bis_ilvl_band:'Mythic track: iLvl 289',
        bis_verified_reset_badge:'Geverifieerd voor reset: 25 maart 2026',
        overview_sec_cheat:'⚡ Cheat sheet', overview_sec_stats:'📊 Stats-prioriteit', overview_sec_cd:'💀 Cooldowns', overview_sec_tips:'💡 Tips', overview_sec_resource:'🎯 Resource',
        overview_empty:'Geen extra overview-blokken voor deze spec — gebruik Rotatie of Consumables & BiS.',
        ready_for_reset:'Klaar voor reset (consumables ingeslagen)', ready_for_reset_saved:'Opgeslagen',
        pick_tab_hint:'Kies een tab hierboven — inhoud opent pas als je erop klikt.',
      },
  en: { grid_sub:'Choose a spec — Overview, rotation, Consumables & BiS, and macros.', back:'← All specs', role_dps:'Ranged DPS', role_melee:'Melee DPS', role_tank:'Tank', role_heal:'Healer',
        tabs:['📋 Overview','🔄 Rotation','🧪 Consumables & BiS','🖱️ Macros'],
        tab_ids:['overview','rotation','consumables','macros'],
        pros:'✅ Strong', cons:'❌ Weak',
        opener:'Opener', single:'Single Target', aoe:'AoE / Mythic+',
        prio:'#', spell:'Spell', why:'Why', imp:'Priority',
        generate:'Generate Focus', spend:'Spend Focus', pets:'Pet types',
        macro_copy:'Click the code to copy', cons_flask:'Flask', cons_pot:'Potion', cons_food:'Food', cons_weapon:'Weapon', cons_note:'Note',
        cons_copy_list:'Copy shopping list', cons_copied:'Copied!', copy_name:'Copy name',
        cons_verified_effect_flask:'Flask (see spec)', cons_verified_effect_pot:'Burst main stat', cons_verified_effect_food:'Food (see spec)', cons_verified_effect_weapon:'Weapon enhancer',
        cons_verified_effect_flask_str:'+Haste — Flask of the Blood Knights (Sin\'dorei)', cons_verified_effect_flask_agi:'+Critical Strike — Flask of the Shattered Sun', cons_verified_effect_flask_int:'+Mastery — Flask of the Magisters',
        cons_verified_effect_food_str:'Primary stat + stamina — Royal Roast', cons_verified_effect_food_agi:'Critical Strike + Haste — Eversong Spiced Ribs (Hearthflame Supper)', cons_verified_effect_food_int:'Mastery + versatility — Candied Amber (Silvermoon Standard)',
        cons_bis_sub1:'Consumables', cons_bis_sub2:'BiS Gear', bis_slot:'Slot', bis_item:'Item', bis_name:'Item', bis_ilvl:'iLvl', bis_req:'Req.', bis_versions:'Versions', bis_side:'Side', bis_source:'Source', bis_type:'Type',         bis_completion:'', bis_ilvl_band:'Mythic Track: iLvl 289',
        bis_verified_reset_badge:'Verified for Reset: March 25, 2026',
        overview_sec_cheat:'⚡ Cheat sheet', overview_sec_stats:'📊 Stat priority', overview_sec_cd:'💀 Cooldowns', overview_sec_tips:'💡 Tips', overview_sec_resource:'🎯 Resource',
        overview_empty:'No extra overview sections for this spec — use Rotation or Consumables & BiS.',
        ready_for_reset:'Ready for reset (consumables stocked)', ready_for_reset_saved:'Saved',
        pick_tab_hint:'Choose a tab above — content opens only after you tap it.',
      }
};

/** Midnight Season 1 — verified consumable names (same for all specs). Effects = localized strings from SPEC_TAB_UI. */
const MIDNIGHT_S1_VERIFIED_CONSUMABLE_NAMES = {
  flask: 'Flask of the Sunwell',
  potion: 'Void-Tinged Adrenaline',
  food: 'Eversong Spiced Ribs',
};

function getMidnightPrimaryStatBucket(spec) {
  if (!spec || !spec.id) return 'int';
  const M = typeof MIDNIGHT_SPEC_PRIMARY_STAT !== 'undefined' ? MIDNIGHT_SPEC_PRIMARY_STAT : {};
  return M[spec.id] || 'int';
}

function getMidnightConsumableRows(ui, spec) {
  const bucket = getMidnightPrimaryStatBucket(spec);
  const PROFILES = typeof MIDNIGHT_CONSUMABLE_PROFILES !== 'undefined' ? MIDNIGHT_CONSUMABLE_PROFILES : null;
  if (PROFILES && PROFILES[bucket]) {
    const P = PROFILES[bucket];
    const fk = 'cons_verified_effect_flask_' + bucket;
    const fd = 'cons_verified_effect_food_' + bucket;
    return [
      { type: 'flask', name: P.flask.name, itemId: P.flask.id, wowheadExtra: P.flask.wowheadExtra, effect: ui[fk] || ui.cons_verified_effect_flask },
      { type: 'pot', name: P.potion.name, itemId: P.potion.id, wowheadExtra: P.potion.wowheadExtra, effect: ui.cons_verified_effect_pot },
      { type: 'food', name: P.food.name, itemId: P.food.id, wowheadExtra: P.food.wowheadExtra, effect: ui[fd] || ui.cons_verified_effect_food },
    ];
  }
  const V = typeof MIDNIGHT_V31_CONSUMABLES !== 'undefined' ? MIDNIGHT_V31_CONSUMABLES : null;
  if (V && V.flask && V.potion && V.food) {
    return [
      { type: 'flask', name: V.flask.name, itemId: V.flask.id, wowheadExtra: V.flask.wowheadExtra, effect: ui.cons_verified_effect_flask },
      { type: 'pot', name: V.potion.name, itemId: V.potion.id, wowheadExtra: V.potion.wowheadExtra, effect: ui.cons_verified_effect_pot },
      { type: 'food', name: V.food.name, itemId: V.food.id, wowheadExtra: V.food.wowheadExtra, effect: ui.cons_verified_effect_food },
    ];
  }
  const n = MIDNIGHT_S1_VERIFIED_CONSUMABLE_NAMES;
  return [
    { type: 'flask', name: n.flask, itemId: null, effect: ui.cons_verified_effect_flask },
    { type: 'pot', name: n.potion, itemId: null, effect: ui.cons_verified_effect_pot },
    { type: 'food', name: n.food, itemId: null, effect: ui.cons_verified_effect_food },
  ];
}

const INTEL_DPS_SPEC_IDS = new Set([
  'arcane_mage', 'fire_mage', 'frost_mage',
  'affliction_warlock', 'demonology_warlock', 'destruction_warlock',
  'shadow_priest',
  'balance_druid',
  'elemental_shaman',
  'devastation_evoker', 'augmentation_evoker',
]);

const MIDNIGHT_CONS_READY_STORAGE_KEY = 'midnight_s1_cons_ready_v320';

/** Role-based stat priority (Midnight S1 v2.9.x); overrides per-spec stats blocks in UI. */
function buildUniversalStatPriorityForSpec(s) {
  const l = lang === 'en' ? 'en' : 'nl';
  const S = (en, nl) => (l === 'en' ? en : nl);
  const role = s.role;
  const c = s.class;
  const row = (rank, stat, bars, note) => ({ rank: String(rank), stat, bars, note: note || '' });

  if (role === 'tank' && ['Druid', 'Monk', 'Demon Hunter'].includes(c)) {
    return {
      list: [
        row(1, S('Agility / Stamina', 'Behendigheid / Stamina'), 5, ''),
        row(2, S('Haste', 'Haste'), 4, ''),
        row(3, S('Mastery', 'Mastery'), 3, ''),
      ],
      tip: '',
    };
  }
  if (role === 'tank') {
    return {
      list: [
        row(1, S('Strength / Stamina', 'Kracht / Stamina'), 5, ''),
        row(2, S('Haste', 'Haste'), 4, ''),
        row(3, S('Mastery', 'Mastery'), 3, ''),
      ],
      tip: '',
    };
  }
  if (role === 'heal' || (role === 'dps' && INTEL_DPS_SPEC_IDS.has(s.id))) {
    return {
      list: [
        row(1, S('Intellect', 'Intellect'), 5, ''),
        row(2, S('Mastery', 'Mastery'), 4, ''),
        row(3, S('Haste', 'Haste'), 3, ''),
      ],
      tip: '',
    };
  }
  if (role === 'dps' && ['Warrior', 'Paladin', 'Death Knight'].includes(c)) {
    return {
      list: [
        row(1, S('Strength', 'Strength'), 5, ''),
        row(2, S('Haste', 'Haste'), 4, ''),
        row(3, S('Critical Strike', 'Critical Strike'), 3, ''),
      ],
      tip: '',
    };
  }
  if (role === 'dps') {
    return {
      list: [
        row(1, S('Agility', 'Agility'), 5, ''),
        row(2, S('Haste', 'Haste'), 4, ''),
        row(3, S('Critical Strike', 'Critical Strike'), 3, ''),
      ],
      tip: '',
    };
  }
  return { list: [row(1, S('Item level', 'Item level'), 5, '')], tip: '' };
}

function getMidnightConsReady(specId) {
  if (!specId) return false;
  try {
    const o = JSON.parse(localStorage.getItem(MIDNIGHT_CONS_READY_STORAGE_KEY) || '{}');
    return !!o[specId];
  } catch (_) { return false; }
}

function setMidnightConsReady(specId, checked) {
  if (!specId) return;
  try {
    const o = JSON.parse(localStorage.getItem(MIDNIGHT_CONS_READY_STORAGE_KEY) || '{}');
    o[specId] = !!checked;
    localStorage.setItem(MIDNIGHT_CONS_READY_STORAGE_KEY, JSON.stringify(o));
  } catch (_) {}
}

window.onMidnightConsReadyToggle = function (el) {
  if (!el || !el.getAttribute) return;
  setMidnightConsReady(el.getAttribute('data-spec-id'), !!el.checked);
};

window.copySpecItemName = function (name) {
  if (name == null || name === '') return;
  const t = String(name);
  const run = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(t);
    } catch (_) {}
    return Promise.reject();
  };
  run().catch(() => {
    try {
      const ta = document.createElement('textarea');
      ta.value = t;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    } catch (_) {}
  });
};

function renderSpecBisGearTable(ui, spec) {
  const l = lang === 'en' ? 'en' : 'nl';
  const copyLbl = ui.copy_name || 'Copy name';
  const badge = ui.bis_verified_reset_badge || '';
  const gear = spec && Array.isArray(spec.bisGear) ? spec.bisGear : [];
  const rows = gear.map(r => {
    const slot = (r.slot && (r.slot[l] || r.slot.en)) || '';
    const src = (r.source && (r.source[l] || r.source.en)) || '';
    const nm = r.name;
    return `<tr>
      <td class="bis-verified-slot">${slot}</td>
      <td class="bis-verified-item"><span class="bis-verified-name">${wrapItem(nm, r.itemId, r.wowheadExtra)}</span></td>
      <td class="bis-verified-ilvl">${r.ilvl || '289'}</td>
      <td class="bis-verified-src">${src}</td>
      <td class="bis-verified-actions"><button type="button" class="spec-copy-name-btn" onclick="copySpecItemName(${JSON.stringify(nm)})">${copyLbl}</button></td>
    </tr>`;
  }).join('');
  setTimeout(function () {
    try {
      if (window.$WowheadPower && $WowheadPower.refreshLinks) $WowheadPower.refreshLinks();
    } catch (_) {}
  }, 0);
  return `<div class="bis-verified-wrap">
    <div class="bis-verified-title-row">
      <h3 class="bis-verified-main-title">${ui.cons_bis_sub2}</h3>
      ${badge ? `<span class="bis-verified-reset-badge">${badge}</span>` : ''}
    </div>
    <p class="bis-verified-ilvl-note">${ui.bis_ilvl_band}</p>
    <div class="bis-verified-table-scroll">
      <table class="bis-verified-table">
        <thead><tr><th>${ui.bis_slot}</th><th>${ui.bis_name}</th><th>${ui.bis_ilvl}</th><th>${ui.bis_source}</th><th aria-label="${copyLbl}"></th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  </div>`;
}

// currentSpec al gedeclareerd in app.js — globaal

function specAccordionMatchClassSpec(cls, sp) {
  const en = typeof sp.spec === 'object' ? sp.spec.en : String(sp.spec);
  const nl = typeof sp.spec === 'object' ? (sp.spec.nl || sp.spec.en) : en;
  return cls.specs.find(s => s.name.en === en || s.name.nl === nl);
}

/** Header modal + Specs tab: 13 class cards, accordion specs (glass + class colors). */
function renderSpecPickerAccordion(containerId, options) {
  const el = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
  if (!el || typeof CLASSES === 'undefined') return;
  const ctx = options && options.context === 'modal' ? 'modal' : 'screen';
  const expandClassId = options && options.expandClassId ? options.expandClassId : null;
  const ui = SPEC_TAB_UI[lang] || SPEC_TAB_UI.nl;
  const specsAll = typeof ALL_SPECS !== 'undefined' ? ALL_SPECS : [];
  const emptyMsg = lang === 'en' ? 'Guide coming soon for this class.' : 'Gids voor deze klas komt later.';
  const roleIco = { tank: '🛡️', heal: '💊', dps: '⚔️' };

  const cards = CLASSES.map(cls => {
    const classNameEn = cls.name.en;
    const inSpecs = specsAll.filter(s => s.class === classNameEn).sort((a, b) => {
      const na = typeof a.spec === 'object' ? (a.spec[lang] || a.spec.nl) : a.spec;
      const nb = typeof b.spec === 'object' ? (b.spec[lang] || b.spec.nl) : b.spec;
      return na.localeCompare(nb);
    });
    const title = (cls.name[lang] || cls.name.en).replace(/</g, '&lt;');
    const crest = `https://wow.zamimg.com/images/wow/icons/large/classicon_${cls.id}.jpg`;
    const rows = inSpecs.map(sp => {
      const specName = (typeof sp.spec === 'object' ? (sp.spec[lang] || sp.spec.nl) : sp.spec).replace(/</g, '&lt;');
      const spDef = specAccordionMatchClassSpec(cls, sp);
      const roleLbl = ui['role_' + sp.role] || ui.role_dps || sp.role;
      const ri = roleIco[sp.role] || '⚔️';
      const escId = String(sp.id).replace(/'/g, "\\'");
      let active = false;
      try {
        active = typeof currentSpec !== 'undefined' && currentSpec && currentSpec.classId === cls.id && spDef && currentSpec.specId === spDef.id;
      } catch (_) {}
      const onclk =
        ctx === 'modal'
          ? `onclick="event.stopPropagation();saveSpec('${cls.id}','${spDef ? spDef.id : ''}');"`
          : `onclick="event.stopPropagation();showSpec('${escId}');"`;
      if (ctx === 'modal' && !spDef) return '';
      return `<button type="button" class="spec-accordion-spec-row${active ? ' spec-accordion-spec-row--active' : ''}" ${onclk}>
        <span class="spec-accordion-spec-icon" aria-hidden="true">${sp.icon}</span>
        <span class="spec-accordion-spec-meta">
          <span class="spec-accordion-spec-name">${specName}</span>
          <span class="spec-accordion-spec-role"><span class="spec-accordion-role-ico" aria-hidden="true">${ri}</span>${roleLbl}</span>
        </span>
      </button>`;
    }).join('');
    const inner =
      rows ||
      `<p class="spec-class-empty">${emptyMsg}</p>`;
    return `<div class="spec-class-card spec-class-card--${cls.id}" data-class-id="${cls.id}">
      <button type="button" class="spec-class-card-head" onclick="toggleSpecClassAccordion(this)" aria-expanded="false" aria-controls="spec-acc-panel-${cls.id}" id="spec-acc-head-${cls.id}">
        <img class="spec-class-crest" src="${crest}" width="36" height="36" alt="" loading="lazy" decoding="async" />
        <span class="spec-class-card-title">${title}</span>
        <span class="spec-class-chevron" aria-hidden="true"></span>
      </button>
      <div class="spec-class-card-body" id="spec-acc-panel-${cls.id}" role="region" aria-labelledby="spec-acc-head-${cls.id}">
        <div class="spec-class-card-body-inner">${inner}</div>
      </div>
    </div>`;
  }).join('');

  el.className = 'spec-class-grid spec-class-grid--accordion';
  el.innerHTML = cards;

  if (expandClassId) {
    requestAnimationFrame(() => {
      expandSpecClassAccordion(el, expandClassId);
      const card = el.querySelector(`[data-class-id="${expandClassId}"]`);
      card && card.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
  }
}

function expandSpecClassAccordion(root, classId) {
  if (!root || !classId) return;
  const card = root.querySelector(`[data-class-id="${classId}"]`);
  if (!card) return;
  root.querySelectorAll('.spec-class-card.is-expanded').forEach(c => {
    c.classList.remove('is-expanded');
    const h = c.querySelector('.spec-class-card-head');
    if (h) h.setAttribute('aria-expanded', 'false');
  });
  card.classList.add('is-expanded');
  const btn = card.querySelector('.spec-class-card-head');
  if (btn) btn.setAttribute('aria-expanded', 'true');
}

window.toggleSpecClassAccordion = function (trigger) {
  const card = trigger.closest('.spec-class-card');
  const root = trigger.closest('.spec-class-grid--accordion');
  if (!card || !root) return;
  const opening = !card.classList.contains('is-expanded');
  if (opening) {
    root.querySelectorAll('.spec-class-card.is-expanded').forEach(c => {
      c.classList.remove('is-expanded');
      const h = c.querySelector('.spec-class-card-head');
      if (h) h.setAttribute('aria-expanded', 'false');
    });
    card.classList.add('is-expanded');
    trigger.setAttribute('aria-expanded', 'true');
  } else {
    card.classList.remove('is-expanded');
    trigger.setAttribute('aria-expanded', 'false');
  }
};

/** Add-ons tab: collapse/expand addon cards (same interaction model as spec class accordion). */
window.toggleAddonAccordion = function (trigger) {
  const card = trigger.closest('.addon-card--accordion');
  const root = trigger.closest('.addon-cards-accordion-root');
  if (!card || !root) return;
  const opening = !card.classList.contains('is-expanded');
  if (opening) {
    root.querySelectorAll('.addon-card--accordion.is-expanded').forEach(c => {
      c.classList.remove('is-expanded');
      const h = c.querySelector('.addon-accordion-toggle');
      if (h) h.setAttribute('aria-expanded', 'false');
    });
    card.classList.add('is-expanded');
    trigger.setAttribute('aria-expanded', 'true');
  } else {
    card.classList.remove('is-expanded');
    trigger.setAttribute('aria-expanded', 'false');
  }
};

function buildSpecGrid() {
  const ui = SPEC_TAB_UI[lang] || SPEC_TAB_UI.nl;
  document.getElementById('spec-grid-sub').textContent = ui.grid_sub;
  // Geen klas automatisch uitklappen op het Specs-tabblad — alles start dicht (ook Hunter e.d.).
  renderSpecPickerAccordion('spec-grid', { context: 'screen', expandClassId: null });
  document.getElementById('spec-grid-view').style.display = '';
  const specDet = document.getElementById('spec-detail-view');
  if (specDet) {
    specDet.removeAttribute('data-spec-class');
    specDet.classList.remove('visible');
  }
  if (typeof updateSpecHeaderBtnVisibility === 'function') updateSpecHeaderBtnVisibility();
}

function showSpec(id) {
  const specs = (typeof ALL_SPECS !== 'undefined') ? ALL_SPECS : [];
  const s = specs.find(x => x.id === id);
  if (!s) return;
  if (typeof CLASSES !== 'undefined') {
    const cid = CLASSES.find(c => c.name.en === s.class);
    if (cid) window.midnightLastSpecGuideClassId = cid.id;
  }
  const ui = SPEC_TAB_UI[lang] || SPEC_TAB_UI.nl;
  const L = l => (typeof l === 'object') ? (l[lang] || l.nl) : l;

  const clsRow = typeof CLASSES !== 'undefined' ? CLASSES.find(c => c.name.en === s.class) : null;
  const specClassId = clsRow ? clsRow.id : '';
  const specDetEl = document.getElementById('spec-detail-view');
  if (specDetEl) {
    if (specClassId) specDetEl.setAttribute('data-spec-class', specClassId);
    else specDetEl.removeAttribute('data-spec-class');
  }

  // Hero
  document.getElementById('spec-hero').innerHTML = `
    <div class="spec-hero-top">
      <div class="spec-hero-icon">${s.icon}</div>
      <div>
        <div class="spec-hero-name">${L(s.spec)} ${s.class}</div>
        <div class="spec-hero-sub">${s.armor} · ${L(s.weapon)} · ${s.resource} · Patch ${s.patch}</div>
      </div>
    </div>
    <div class="spec-hero-summary">${L(s.summary)}</div>
    <div class="spec-proscons">
      <div class="spec-pros"><div class="spec-pros-title">${ui.pros}</div><ul>${(s.pros[lang]||s.pros.nl||[]).map(p=>`<li>${p}</li>`).join('')}</ul></div>
      <div class="spec-cons"><div class="spec-cons-title">${ui.cons}</div><ul>${(s.cons[lang]||s.cons.nl||[]).map(c=>`<li>${c}</li>`).join('')}</ul></div>
    </div>`;

  // Tabs — geen actieve tab tot de gebruiker klikt (alles “dicht”)
  document.getElementById('spec-tab-btns').innerHTML = ui.tabs.map((t, i) => {
    const tid = ui.tab_ids[i];
    const glow = tid === 'consumables' ? ' spec-tab-btn--consumables-glow' : '';
    return `<button type="button" class="spec-tab-btn${glow}" data-spec-tab="${tid}" onclick="switchSpecTab('${tid}')" aria-selected="false">${t}</button>`;
  }).join('');

  // Panels + placeholder
  const panelsHtml = ui.tab_ids.map(tid =>
    `<div class="spec-tab-content" id="stab-${tid}">${renderSpecTab(s, tid, ui)}</div>`
  ).join('');
  document.getElementById('spec-tab-panels').innerHTML =
    panelsHtml +
    `<div class="spec-tab-placeholder" id="spec-tab-pick-hint" role="status">${ui.pick_tab_hint || ''}</div>`;

  document.getElementById('spec-grid-view').style.display = 'none';
  setTimeout(refreshWowheadTooltips, 50);
  document.getElementById('spec-detail-view').classList.add('visible');
  window.scrollTo(0,0);
  if (typeof updateSpecHeaderBtnVisibility === 'function') updateSpecHeaderBtnVisibility();
}

function switchSpecTab(id) {
  const uiTabs = (SPEC_TAB_UI[lang] || SPEC_TAB_UI.nl).tab_ids;
  document.querySelectorAll('.spec-tab-btn').forEach((b, i) => {
    const tid = uiTabs[i];
    const on = tid === id;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', on ? 'true' : 'false');
  });
  document.querySelectorAll('.spec-tab-content').forEach(p => p.classList.toggle('active', p.id === 'stab-' + id));
  const ph = document.getElementById('spec-tab-pick-hint');
  if (ph) ph.hidden = true;
  setTimeout(refreshWowheadTooltips, 50);
}

function switchConsBisSubTab(sub) {
  document.querySelectorAll('.cons-bis-subbtn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.cons-bis-panel').forEach(p=>p.classList.remove('active'));
  const btn = document.querySelector(`.cons-bis-subbtn[onclick*="'${sub}'"]`);
  const panel = document.getElementById('cons-bis-panel-'+sub);
  if (btn) btn.classList.add('active');
  if (panel) panel.classList.add('active');
  refreshWowheadTooltips();
}

function refreshWowheadTooltips() {
  try {
    if (window.$WowheadPower && $WowheadPower.refreshLinks) {
      $WowheadPower.refreshLinks();
    } else if (typeof WH !== 'undefined' && WH.Tooltip && WH.Tooltip.refresh) {
      WH.Tooltip.refresh();
    }
  } catch (_) {}
}

const RARITY_COLORS = { common:'#9d9d9d', uncommon:'#1eff00', rare:'#0070dd', epic:'#a335ee', legendary:'#ff8000' };
const VERSION_ICONS = { lfr:'LFR', n:'N', h:'H', m:'M' };
const VERSION_LABELS = { lfr:'Raid Finder', n:'Normal', h:'Heroic', m:'Mythic' };
const VERSION_ILVL = { lfr:233, n:246, h:259, m:272 }; // Midnight S1 The Dreamrift / Voidspire

function getBisChecked(specId, slot) {
  try {
    const raw = localStorage.getItem('bis_checks');
    if (!raw) return false;
    const obj = JSON.parse(raw);
    return !!obj[specId]?.[slot];
  } catch (_) { return false; }
}

function setBisChecked(specId, slot, checked) {
  try {
    const raw = localStorage.getItem('bis_checks') || '{}';
    const obj = JSON.parse(raw);
    if (!obj[specId]) obj[specId] = {};
    obj[specId][slot] = !!checked;
    localStorage.setItem('bis_checks', JSON.stringify(obj));
  } catch (_) {}
}

function onBisCheckChange(ev) {
  const cb = ev.target;
  if (!cb.classList.contains('bis-check')) return;
  const specId = cb.getAttribute('data-spec');
  const slot = cb.getAttribute('data-slot');
  if (specId && slot) setBisChecked(specId, slot, cb.checked);
}

function renderBisTable(bisData, specId, ui) {
  const rows = bisData.map((r) => {
    const ilvl = r.ilvl ?? 289;
    const req = r.req ?? 90;
    const versions = r.versions || ['lfr','n','h','m'];
    const source = r.source || '—';
    const type = r.type || '—';
    const side = r.side || 'Both';
    const rarity = (r.rarity || 'epic').toLowerCase();
    const color = RARITY_COLORS[rarity] || RARITY_COLORS.epic;
    const checked = getBisChecked(specId, r.slot);
    const slotEsc = (r.slot||'').replace(/"/g,'&quot;');
    const itemUrl = r.id ? `https://www.wowhead.com/item=${r.id}?ilvl=${ilvl}` : `https://www.wowhead.com/search?q=${encodeURIComponent((r.name||'').replace(/\s*\(.*?\)/g,'').trim())}`;
    const whAttr = r.id ? ` data-wowhead="item=${r.id}"` : '';
    const itemCell = (r.name==='—'||!r.name) ? '<span style="color:var(--muted)">—</span>' : `<a href="${itemUrl}" class="wh-link" data-wh-rename="false"${whAttr} target="_blank" rel="noopener" style="color:${color}">${r.name}</a>`;
    const versionIcons = versions.map(v => {
      const label = VERSION_LABELS[v]||v;
      const vIlvl = VERSION_ILVL[v] ?? 272;
      return `<span class="bis-version-icon bis-v-${v}"><span class="bis-v-label">${VERSION_ICONS[v]||v}</span><span class="bis-version-tooltip"><span class="bis-tt-diff">${label}</span><span class="bis-tt-ilvl">ilvl ${vIlvl}</span></span></span>`;
    }).join('');
    return `<tr class="bis-row">
      <td class="bis-check-cell"><input type="checkbox" class="bis-check" data-spec="${specId}" data-slot="${slotEsc}" ${checked?'checked':''}></td>
      <td class="bis-name-cell">${itemCell}</td>
      <td class="bis-num">${ilvl}</td>
      <td class="bis-num">${req}</td>
      <td class="bis-versions">${versionIcons}</td>
      <td class="bis-side">${side}</td>
      <td class="bis-slot">${r.slot}</td>
      <td class="bis-source">${source}</td>
      <td class="bis-type">${type}</td>
      <td class="bis-completion"></td>
    </tr>`;
  });
  const headers = ['', ui.bis_name, ui.bis_ilvl, ui.bis_req, ui.bis_versions, ui.bis_side, ui.bis_slot, ui.bis_source, ui.bis_type, ui.bis_completion];
  return `<div class="bis-table-container"><table class="bis-table bis-table-wowhead"><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`;
}

document.addEventListener('change', ev => { if (ev.target.classList.contains('bis-check')) onBisCheckChange(ev); });

function wrapSpell(spellText) {
  if (!spellText) return '';
  
  let url = '';
  
  // 1. Zoek eerst of de exacte spell naam (uit onze database) ergens in de tekst voorkomt
  if (typeof SPELL_IDS !== 'undefined') {
    // Sorteer op lengte zodat we "Power Word: Shield" vinden vóór "Shield"
    if (!window._sortedSpellKeys) {
      window._sortedSpellKeys = Object.keys(SPELL_IDS).sort((a, b) => b.length - a.length);
    }
    
    for (const spellName of window._sortedSpellKeys) {
      // Escape speciale karakters voor regex
      const escapedName = spellName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      // Zoek naar het woord in de tekst (case-insensitive)
      const regex = new RegExp(`\\b${escapedName}\\b`, 'i');
      if (regex.test(spellText)) {
        url = `https://www.wowhead.com/spell=${SPELL_IDS[spellName]}`;
        break; // Stop zodra we de langste match hebben gevonden
      }
    }
  }
  
  // 2. Als we geen match hebben gevonden, val terug op de opschoon-methode en zoekopdracht
  if (!url) {
    let cleanName = spellText.replace(/\s*\(.*?\)/g, '')
      .replace(/\s*spam/gi, '')
      .replace(/\s+x\d+/gi, '')
      .replace(/\s+on\s+all\s+targets/gi, '')
      .replace(/\s+op\s+alle\s+targets/gi, '')
      .replace(/\s+p[a-zæøåA-ZÆØÅ]+\s+alle\s+m[a-zæøåA-ZÆØÅ]+/gi, '')
      .replace(/\s+on\s+targets/gi, '')
      .replace(/\s+op\s+targets/gi, '')
      .replace(/\s+p[a-zæøåA-ZÆØÅ]+\s+m[a-zæøåA-ZÆØÅ]+/gi, '')
      .replace(/\s+on\s+tank/gi, '')
      .replace(/\s+op\s+tank/gi, '')
      .replace(/\s+p[a-zæøåA-ZÆØÅ]+\s+tank/gi, '')
      .replace(/\s+refresh/gi, '')
      .replace(/-fornyelse/gi, '')
      .replace(/\s+verspreiden/gi, '')
      .replace(/^Spread\s+/gi, '')
      .replace(/^Spred\s+/gi, '')
      .replace(/^Place\s+/gi, '')
      .replace(/^Placer\s+/gi, '')
      .replace(/\s+plaatsen/gi, '')
      .replace(/\s*<.*$/g, '')
      .replace(/\s*\/.*$/g, '')
      .replace(/\s+rank\s+\d+/gi, '')
      .replace(/\s+opbouwen/gi, '')
      .replace(/\s+op\s+CD/gi, '')
      .replace(/\s+on\s+CD/gi, '')
      .replace(/\s+p[a-zæøåA-ZÆØÅ]+\s+CD/gi, '')
      .trim();
      
    cleanName = cleanName.replace(/^[^\w]+|[^\w]+$/g, '');
    url = `https://www.wowhead.com/search?q=${encodeURIComponent(cleanName)}`;
  }
  
  return `<a href="${url}" class="wh-link wh-link-spell" data-wh-rename="false" target="_blank">${spellText.trim()}</a>`;
}

/**
 * WoW Icon component — use for spells, talents, items.
 * @param {string} type - 'spell' | 'item' | 'talent'
 * @param {number} id - Wowhead spell/item ID
 * @param {object} opts - { size: 'medium'|'large', className: '' }
 * @returns {string} HTML for icon img
 * Icon URLs: https://wow.zamimg.com/images/wow/icons/{size}/{iconName}.jpg
 * For Wowhead tooltips, wrap in: <a href="https://www.wowhead.com/spell=ID" class="wh-link">...</a>
 */
function wowIcon(type, id, opts) {
  const size = (opts && opts.size) || 'medium';
  const cls = (opts && opts.className) || '';
  const base = 'https://wow.zamimg.com/images/wow/icons/';
  const iconName = (typeof WOW_ICON_NAMES !== 'undefined' && WOW_ICON_NAMES && WOW_ICON_NAMES[type] && WOW_ICON_NAMES[type][id]) ? WOW_ICON_NAMES[type][id] : 'inv_misc_questionmark';
  const url = type === 'item' ? `https://www.wowhead.com/item=${id}` : `https://www.wowhead.com/spell=${id}`;
  const whItem = type === 'item' ? ` data-wowhead="item=${id}"` : '';
  return `<a href="${url}" class="wow-icon-link wh-link ${cls}" data-wh-rename="false"${whItem} target="_blank" rel="noopener"><img class="wow-icon wow-icon-${type}" src="${base}${size}/${iconName}.jpg" alt="" loading="lazy" width="36" height="36"></a>`;
}

function wrapItem(itemName, itemIdOpt, wowheadExtra) {
  if (itemName == null) return '';
  const name = String(itemName).trim();
  if (!name) return '';
  if (name === '—' || name === '–' || name === '-') {
    return `<span class="bis-item-name-plain">${name.replace(/</g, '&lt;')}</span>`;
  }
  let id = null;
  if (itemIdOpt != null && itemIdOpt !== '' && !Number.isNaN(Number(itemIdOpt))) {
    id = Number(itemIdOpt);
  }
  if ((id == null || Number.isNaN(id)) && typeof ITEM_IDS !== 'undefined' && ITEM_IDS[name] != null) {
    id = ITEM_IDS[name];
  }
  const safe = name.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  if (id != null && !Number.isNaN(id)) {
    let whVal = `item=${id}`;
    if (wowheadExtra && typeof wowheadExtra === 'string' && wowheadExtra.trim()) {
      const ex = wowheadExtra.trim();
      whVal += ex.startsWith('&') ? ex : `&${ex}`;
    }
    let href = `https://www.wowhead.com/item=${id}`;
    if (wowheadExtra && typeof wowheadExtra === 'string' && wowheadExtra.trim()) {
      const q = wowheadExtra.trim().replace(/^&+/, '');
      if (q) href += (href.indexOf('?') === -1 ? '?' : '&') + q;
    }
    return `<a href="${href}" class="wh-link wh-link-item wowhead-tooltip-link bis-wowhead-track" data-wh-rename="false" data-wowhead="${whVal}" target="_blank" rel="noopener">${safe}</a>`;
  }
  const url = `https://www.wowhead.com/search?q=${encodeURIComponent(name.replace(/\s*\(.*?\)/g, '').trim())}`;
  return `<a href="${url}" class="wh-link wh-link-item" data-wh-rename="false" target="_blank" rel="noopener">${safe}</a>`;
}

function renderSpecTab(s, tid, ui, fromOverview) {
  if (!fromOverview && tid === 'overview') {
    const subs = [
      ['cheatsheet', ui.overview_sec_cheat],
      ['stats', ui.overview_sec_stats],
      ['cooldowns', ui.overview_sec_cd],
      ['tips', ui.overview_sec_tips],
      ['resource', ui.overview_sec_resource],
    ];
    const parts = [];
    for (const [id, title] of subs) {
      const inner = renderSpecTab(s, id, ui, true);
      if (!inner || inner.includes('Binnenkort beschikbaar') || /coming soon/i.test(inner)) continue;
      parts.push(`<section class="spec-overview-chunk" aria-labelledby="so-${id}"><h3 class="spec-overview-chunk-title" id="so-${id}">${title}</h3><div class="spec-overview-chunk-body">${inner}</div></section>`);
    }
    return parts.length ? parts.join('') : `<p class="spec-overview-empty">${ui.overview_empty || ''}</p>`;
  }
  // Haal data op voor huidige taal, val terug op NL als taal leeg/stub is
  function hasContent(d) {
    if (!d) return false;
    if (Array.isArray(d)) return d.length > 0;
    if (typeof d === 'object') return Object.values(d).some(v => Array.isArray(v) ? v.length > 0 : (v && String(v).length > 0));
    return String(d).length > 0;
  }
  // 'resource' tab data zit in spec.resource_info, niet spec.resource
  const dataKey = tid === 'resource' ? 'resource_info' : tid;
  const rawD = s[dataKey] ? s[dataKey][lang] : null;
  let d = hasContent(rawD) ? rawD : (s[dataKey] ? s[dataKey].nl : null);
  if (tid === 'stats') {
    d = buildUniversalStatPriorityForSpec(s);
  }
  if (tid !== 'consumables' && tid !== 'stats' && !d) return '<p style="color:var(--muted);font-size:13px;padding:8px">Binnenkort beschikbaar.</p>';

  if (tid === 'cheatsheet') {
    const rules = (d.rules||[]).map(r=>`<div class="cheat-rule">${r}</div>`).join('');
    const fmtRot = t => {
      if (!t) return '';
      // Splits op pijltjes (zowel -> als ➔ als ➜ als )
      return t.split(/(\s*(?:->|➔|➜|→||➤)\s*)/).map(part => {
        if (part.match(/->|➔|➜|→||➤/)) return part;
        return wrapSpell(part);
      }).join('');
    };
    return `
      <div class="spec-section-title">${ui.opener}</div>
      <div class="cheat-rot"><div class="cheat-rot-text">${fmtRot(d.opener||'')}</div></div>
      <div class="spec-section-title">${ui.single}</div>
      <div class="cheat-rot"><div class="cheat-rot-text">${fmtRot(d.single||'')}</div></div>
      <div class="spec-section-title">${ui.aoe}</div>
      <div class="cheat-rot"><div class="cheat-rot-text">${fmtRot(d.aoe||'')}</div></div>
      <div class="spec-section-title">Golden Rules</div>
      <div class="cheat-rules">${rules}</div>`;
  }

  if (tid === 'rotation') {
    const rotRow = (r, imp, i) => `<tr><td class="rot-prio">${r.prio||r.step||(i+1)}</td><td><div class="rot-spell">${wrapSpell(r.spell)}</div><div class="rot-note">${r.why||r.note||''}</div></td>${imp?`<td><span class="rot-imp-${(r.importance||'').toLowerCase()}">${r.importance||''}</span></td>`:''}</tr>`;
    return `${d.apex_tip?`<div class="apex-tip">${d.apex_tip}</div>`:''}
      <div class="spec-section-title">${ui.opener}</div>
      <table class="rot-table"><thead><tr><th>${ui.prio}</th><th>${ui.spell}</th></tr></thead><tbody>${(d.opener||[]).map((r,i)=>rotRow(r,false,i)).join('')}</tbody></table>
      <div class="spec-section-title">${ui.single}</div>
      <table class="rot-table"><thead><tr><th>${ui.prio}</th><th>${ui.spell}</th><th>${ui.imp}</th></tr></thead><tbody>${(d.single||[]).map((r,i)=>rotRow(r,true,i)).join('')}</tbody></table>
      <div class="spec-section-title">${ui.aoe}</div>
      <table class="rot-table"><thead><tr><th>${ui.prio}</th><th>${ui.spell}</th></tr></thead><tbody>${(d.aoe||[]).map((r,i)=>rotRow(r,false,i)).join('')}</tbody></table>`;
  }

  if (tid === 'stats') {
    const bars = (n,max=5) => Array.from({length:max},(_,i)=>`<div class="stat-bar ${i<n?'filled':'empty'}"></div>`).join('');
    return `${(d.list||[]).map(r=>`<div class="stat-row"><div class="stat-rank">${r.rank}</div><div class="stat-name">${r.stat}</div><div class="stat-bars">${bars(r.bars)}</div><div class="stat-note">${r.note}</div></div>`).join('')}
      ${d.tip?`<div class="stat-tip">${d.tip}</div>`:''}`;
  }

  if (tid === 'cooldowns') {
      return (d||[]).map(c=>`<div class=\"cd-card\"><div class=\"cd-top\"><span class=\"cd-spell\">${wrapSpell(c.spell)}</span><span class="cd-timer">${c.cd}</span></div><div class="cd-effect">${c.effect}</div><div class="cd-when">→ ${c.when}</div></div>`).join('');
  }

  if (tid === 'tips') {
    return (d||[]).map(t=>`<div class="tip-card"><div class="tip-icon">${t.icon}</div><div><div class="tip-title">${wrapSpell(t.title)}</div><div class="tip-text">${wrapSpell(t.text)}</div></div></div>`).join('');
  }

  if (tid === 'macros') {
    return `<p style="font-size:11px;color:var(--muted);margin-bottom:10px">${ui.macro_copy}</p>`+(d||[]).map(m=>`<div class="macro-card"><div class="macro-name">${wrapSpell(m.name)}</div><div class="macro-note">${wrapSpell(m.note)}</div><div class="macro-code" onclick="copyMacro(this)">${m.code}</div></div>`).join('');
  }

  if (tid === 'consumables') {
    const typeLabel = { flask: ui.cons_flask, pot: ui.cons_pot, food: ui.cons_food };
    const copyLbl = ui.copy_name || 'Copy name';
    const rows = getMidnightConsumableRows(ui, s);
    const specIdEsc = String(s.id || '').replace(/"/g, '&quot;');
    const readyChecked = getMidnightConsReady(s.id) ? ' checked' : '';
    const consCards = rows.map(c => `<div class="cons-card cons-card--verified">
      <div class="cons-type cons-type--verified">${typeLabel[c.type] || c.type}</div>
      <div class="cons-name-row">
        <div class="cons-name">${wrapItem(c.name, c.itemId, c.wowheadExtra)}</div>
        <button type="button" class="spec-copy-name-btn" onclick="copySpecItemName(${JSON.stringify(c.name)})">${copyLbl}</button>
      </div>
      ${c.effect ? `<div class="cons-effect">${c.effect}</div>` : ''}
    </div>`).join('');
    const consHtml = `<div class="cons-verified-wrap">
      <div class="cons-verified-head">
        <h3 class="cons-verified-heading">${ui.cons_bis_sub1}</h3>
        <button type="button" class="cons-copy-btn" id="spec-cons-copy-btn" onclick="copySpecConsumablesList()">${ui.cons_copy_list}</button>
      </div>
      ${consCards}
      <label class="cons-ready-reset-label">
        <input type="checkbox" class="cons-ready-reset-input" data-spec-id="${specIdEsc}"${readyChecked} onchange="onMidnightConsReadyToggle(this)">
        <span class="cons-ready-reset-text">${ui.ready_for_reset}</span>
      </label>
    </div>`;
    const bisHtml = renderSpecBisGearTable(ui, s);
    return `<div class="cons-bis-wrapper cons-bis-wrapper--verified">
      <div class="cons-bis-subtabs">
        <button type="button" class="cons-bis-subbtn cons-bis-subbtn--spec active" onclick="switchConsBisSubTab('cons')">${ui.cons_bis_sub1}</button>
        <button type="button" class="cons-bis-subbtn cons-bis-subbtn--spec" onclick="switchConsBisSubTab('bis')">${ui.cons_bis_sub2}</button>
      </div>
      <div class="cons-bis-panel active" id="cons-bis-panel-cons">${consHtml}</div>
      <div class="cons-bis-panel" id="cons-bis-panel-bis">${bisHtml}</div>
    </div>`;
  }

  if (tid === 'resource') {
    const res = d || (s.resource_info ? (s.resource_info[lang] || s.resource_info.nl) : null);
    const parseRow = (r) => {
      if (typeof r === 'object' && r !== null && ('spell' in r || 'note' in r)) {
        return { spell: r.spell || '', note: r.note || '' };
      }
      if (typeof r === 'string') {
        const idx = r.search(/\s+[—–-]\s+/);
        if (idx >= 0) return { spell: r.slice(0, idx).trim(), note: r.slice(idx).replace(/^\s*[—–-]\s*/, '').trim() };
        return { spell: '', note: r };
      }
      return { spell: '', note: '' };
    };
    const genRows = (res.generate||[]).map(r=>{ const p=parseRow(r); return `<tr><td>${wrapSpell(p.spell)}</td><td>${wrapSpell(p.note)}</td></tr>`; }).join('');
    const spendRows = (res.spend||[]).map(r=>{ const p=parseRow(r); return `<tr><td>${wrapSpell(p.spell)}</td><td>${wrapSpell(p.note)}</td></tr>`; }).join('');
    return `<p style="font-size:13px;color:var(--text);line-height:1.6;margin-bottom:12px">${res.intro||''}</p>
      <div class="spec-section-title">${ui.generate}</div>
      <table class="res-table"><thead><tr><th>Spell</th><th>Effect</th></tr></thead><tbody>${genRows}</tbody></table>
      <div class="spec-section-title">${ui.spend}</div>
      <table class="res-table"><thead><tr><th>Spell</th><th>Effect</th></tr></thead><tbody>${spendRows}</tbody></table>
      ${res.frenzy_tip||res.pet_tip?`<div class="frenzy-tip">🐾 ${res.pet_tip||res.frenzy_tip}</div>`:''}
      ${(res.pets||[]).length?`<div class="spec-section-title">${ui.pets}</div>${(res.pets||[]).map(p=>`<div class="pet-card"><div class="pet-type">${p.type}</div><div class="pet-bonus">${p.bonus}</div><div class="pet-use">${p.use}</div></div>`).join('')}`:''}`;
  }

  return '<p style="color:var(--muted);font-size:13px">Binnenkort beschikbaar.</p>';
}

const BANNER_UI = {
  nl: {
    title: '📦 Update v3.6.15 — Prey S1-tabel & Delves-loot',
    body: 'Prey: nieuwe S1-beloningentabel (JSON) + tip voor 4 hunts/week richting Great Vault. Delves: bijgewerkte Tier 8 / map-ilvls (mrt 2026). Details: <button type="button" class="about-open-inline" onclick="openAbout()">Over deze app</button> → changelog.',
    tip_desktop: '💡 <strong>Tip:</strong> Voeg de app toe aan je beginscherm via het 📲-icoon voor offline gebruik in de dungeon!',
    tip_mobile:  '💡 <strong>Tip:</strong> Voeg de app toe aan je beginscherm via het 📲-icoon voor offline gebruik in de dungeon!',
    btn: '→ Naar de site',
  },
  en: {
    title: '📦 Update v3.6.15 — Prey S1 table & Delves loot',
    body: 'Prey: new Season 1 reward table (JSON) + tip for 4 hunts/week toward the Great Vault. Delves: updated Tier 8 / map ilvls (Mar 2026). Details: <button type="button" class="about-open-inline" onclick="openAbout()">About this app</button> → changelog.',
    tip_desktop: '💡 <strong>Tip:</strong> Add the app to your home screen via the 📲 icon for offline use inside dungeons!',
    tip_mobile:  '💡 <strong>Tip:</strong> Add the app to your home screen via the 📲 icon for offline use inside dungeons!',
    btn: '→ Go to the site',
  }
};

/** Moet gelijk zijn aan de check in app.js (DOMContentLoaded) — nieuwe banner = nieuwe key. */
window.MIDNIGHT_BANNER_DISMISS_KEY = 'midnight_banner_v1_0_5';

function renderBanner() {
  const b = BANNER_UI[lang] || BANNER_UI.nl;
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  document.getElementById('dbn-title').innerHTML = b.title;
  document.getElementById('dbn-body').innerHTML  = b.body;
  document.getElementById('dbn-tip').innerHTML   = isMobile ? b.tip_mobile : b.tip_desktop;
  document.getElementById('dev-banner-close').textContent = b.btn;
  document.querySelectorAll('.dbn-lang').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase().includes(lang));
  });
}

function setBannerLang(l) {
  setLang(l); // gebruik bestaande setLang functie
  renderBanner();
}

function closeBanner() {
  document.getElementById('dev-banner').classList.remove('open');
  localStorage.setItem(window.MIDNIGHT_BANNER_DISMISS_KEY || 'midnight_banner_v1_0_5', '1');
}

function copyMacro(el) {
  navigator.clipboard.writeText(el.textContent).then(() => {
    el.classList.add('copied');
    setTimeout(() => el.classList.remove('copied'), 2000);
  });
}

function buildVerifiedConsumablesCopyText() {
  const ui = SPEC_TAB_UI[lang] || SPEC_TAB_UI.nl;
  const line = (label, name, effect) => {
    const extra = effect ? ` (${effect})` : '';
    return `${label}: ${name}${extra}`;
  };
  let spec = null;
  try {
    spec = typeof currentSpec !== 'undefined' ? currentSpec : null;
  } catch (_) {}
  const rows = getMidnightConsumableRows(ui, spec);
  const lbl = { flask: ui.cons_flask, pot: ui.cons_pot, food: ui.cons_food };
  return rows.map(r => line(lbl[r.type] || r.type, r.name, r.effect)).join('\n');
}

function copySpecConsumablesList() {
  const ui = SPEC_TAB_UI[lang] || SPEC_TAB_UI.nl;
  const text = buildVerifiedConsumablesCopyText();
  const btn = document.getElementById('spec-cons-copy-btn');
  const origLabel = btn ? btn.textContent : '';
  const done = () => {
    if (!btn) return;
    btn.textContent = ui.cons_copied || 'Copied!';
    setTimeout(() => { btn.textContent = origLabel; }, 2000);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => {});
  }
}

// ═══ Dungeon grid (home) — backgrounds from data/dungeons.json ═══
async function loadDungeonsGridMeta() {
  window.DUNGEONS_GRID_META = window.DUNGEONS_GRID_META || {};
  try {
    const res = await fetch('data/dungeons.json?v=2.2');
    if (!res.ok) return;
    window.DUNGEONS_GRID_META = await res.json();
  } catch (e) {
    console.warn('Midnight: dungeons.json kon niet geladen worden', e);
  }
}

function renderDungeonList() {
  const mplusGrid = document.getElementById('mplus-grid');
  const normalGrid = document.getElementById('normal-grid');
  if (!mplusGrid || !normalGrid) return;
  if (typeof getAllDungeons !== 'function' || typeof UI === 'undefined') return;

  const u = UI[lang] || UI.nl;
  const metaAll = window.DUNGEONS_GRID_META || {};
  mplusGrid.innerHTML = '';
  normalGrid.innerHTML = '';

  getAllDungeons().forEach(d => {
    const isMplus = d.type === 'mplus';
    const isRaid = d.type === 'raid';
    if (isRaid) return;

    const meta = metaAll[d.id] || {};
    const themeGlow = meta.theme_color || 'rgba(107, 91, 149, 0.45)';
    const bgUrl = (meta.image_url || '').trim();
    const bossCount = Array.isArray(d.bosses_short) ? d.bosses_short.length : 0;
    const bossesLabel = lang === 'en'
      ? `${bossCount} ${bossCount === 1 ? 'BOSS' : 'BOSSES'}`
      : `${bossCount} ${bossCount === 1 ? 'BAAS' : 'BAZEN'}`;

    const card = document.createElement('div');
    card.className = `dungeon-card dungeon-card--immersive${isMplus ? ' mplus' : ''}`;
    card.style.setProperty('--card-theme-glow', themeGlow);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', d.name);
    card.addEventListener('click', () => {
      if (typeof openDungeon === 'function') openDungeon(d.id);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (typeof openDungeon === 'function') openDungeon(d.id);
      }
    });

    const modeLabel = isMplus ? u.badge_mplus : u.badge_normal;
    card.innerHTML = `
      <div class="dungeon-card-bg"></div>
      <div class="dungeon-card-overlay" aria-hidden="true"></div>
      <span class="dungeon-card-mode-tag">${modeLabel}</span>
      <span class="dungeon-card-boss-count">${bossesLabel}</span>
      <div class="dungeon-card-footer">
        <h3 class="dungeon-card-title"></h3>
        <div class="dungeon-card-role-icons" aria-hidden="true">
          <span>🛡️</span><span>💊</span><span>⚔️</span>
        </div>
      </div>`;

    const titleEl = card.querySelector('.dungeon-card-title');
    if (titleEl) titleEl.textContent = d.name;

    const roleIcons = card.querySelector('.dungeon-card-role-icons');
    if (roleIcons) {
      roleIcons.setAttribute('title', lang === 'en' ? 'Tank, Healer & DPS tactics' : 'Tank, Healer & DPS tactieken');
    }

    const bgEl = card.querySelector('.dungeon-card-bg');
    if (bgEl) {
      if (bgUrl) {
        bgEl.style.backgroundImage = `url("${bgUrl.replace(/"/g, '')}")`;
      } else {
        bgEl.style.backgroundImage = `linear-gradient(165deg, ${themeGlow}, #0a090d)`;
      }
    }

    (isMplus ? mplusGrid : normalGrid).appendChild(card);
  });
}

// ═══ Raid hub — immersive cards + data/raids.json ═══
async function loadRaidsGridMeta() {
  window.RAIDS_GRID_META = window.RAIDS_GRID_META || {};
  try {
    const res = await fetch('data/raids.json?v=2.2.1');
    if (!res.ok) return;
    window.RAIDS_GRID_META = await res.json();
  } catch (e) {
    console.warn('Midnight: raids.json kon niet geladen worden', e);
  }
}

function renderRaidList() {
  const host = document.getElementById('raids-content');
  if (!host || typeof getRaidScreenList !== 'function' || typeof UI === 'undefined') return;
  const u = UI[lang] || UI.nl;
  const raids = getRaidScreenList();
  const metaAll = window.RAIDS_GRID_META || {};
  const raidBadgePlain = String(u.badge_raid || '🏰 RAID').replace(/<[^>]*>/g, '');

  host.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'dungeon-grid raid-grid';
  host.appendChild(grid);

  raids.forEach(r => {
    const meta = metaAll[r.id] || {};
    const themeGlow = meta.theme_color || 'rgba(167, 139, 250, 0.5)';
    const bgUrl = (meta.image_url || '').trim();
    const bossCount = Array.isArray(r.bosses) ? r.bosses.length : 0;
    const bossesLabel = lang === 'en'
      ? `${bossCount} ${bossCount === 1 ? 'BOSS' : 'BOSSES'}`
      : `${bossCount} ${bossCount === 1 ? 'BAAS' : 'BAZEN'}`;
    const clickable = r.available !== false;

    const availLabel = r.available
      ? (lang === 'nl' ? 'BESCHIKBAAR' : 'AVAILABLE')
      : (lang === 'nl' ? 'BINNENKORT' : 'SOON');
    const openNowLabel = r.openNow ? (lang === 'nl' ? 'NU OPEN' : 'OPEN NOW') : '';

    const card = document.createElement('div');
    card.className = `dungeon-card raid-card dungeon-card--immersive dungeon-card--raid-immersive${clickable ? '' : ' raid-card--locked'}`;
    card.style.setProperty('--card-theme-glow', themeGlow);
    if (clickable) {
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', r.name);
      card.addEventListener('click', () => {
        if (typeof openRaid === 'function') openRaid(r.id);
      });
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (typeof openRaid === 'function') openRaid(r.id);
        }
      });
    } else {
      card.style.opacity = '0.65';
      card.style.cursor = 'default';
    }

    card.innerHTML = `
      <div class="dungeon-card-bg"></div>
      <div class="dungeon-card-overlay" aria-hidden="true"></div>
      <div class="dungeon-card-meta-row raid-card-meta" aria-hidden="true">
        <span class="dungeon-card-mode-tag raid-mode-tag"></span>
        ${openNowLabel ? `<span class="dungeon-card-aux-tag raid-open-now">${openNowLabel}</span>` : ''}
        <span class="dungeon-card-aux-tag raid-avail-tag ${r.available ? 'is-live' : 'is-soon'}">${availLabel}</span>
      </div>
      <span class="dungeon-card-boss-count">${bossesLabel}</span>
      <div class="dungeon-card-footer raid-card-footer">
        <div class="dungeon-card-title-stack">
          <h3 class="dungeon-card-title raid-card-title"></h3>
          <p class="dungeon-card-raid-sub"></p>
        </div>
        <div class="dungeon-card-role-icons" aria-hidden="true">
          <span>🛡️</span><span>💊</span><span>⚔️</span>
        </div>
      </div>`;

    const modeTag = card.querySelector('.raid-mode-tag');
    if (modeTag) modeTag.textContent = raidBadgePlain;

    const titleEl = card.querySelector('.raid-card-title');
    if (titleEl) titleEl.textContent = `${r.icon ? r.icon + ' ' : ''}${r.name}`;

    const subEl = card.querySelector('.dungeon-card-raid-sub');
    if (subEl && typeof t === 'function') {
      subEl.textContent = `📍 ${t(r.zone)} · ${t(r.opens)}`;
    }

    const roleIcons = card.querySelector('.dungeon-card-role-icons');
    if (roleIcons) {
      roleIcons.setAttribute('title', lang === 'en' ? 'Tank, Healer & DPS tactics' : 'Tank, Healer & DPS tactieken');
    }

    const bgEl = card.querySelector('.dungeon-card-bg');
    if (bgEl) {
      if (bgUrl) {
        bgEl.style.backgroundImage = `url("${bgUrl.replace(/"/g, '')}")`;
      } else {
        bgEl.style.backgroundImage = `linear-gradient(165deg, ${themeGlow}, #0a090d)`;
      }
    }

    grid.appendChild(card);
  });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js?v=1.0.16').catch(() => {});
}
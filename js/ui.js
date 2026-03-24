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

// Wowhead item IDs voor consumables (flasks, potions, food, runes) — Midnight 12.0 S1
const ITEM_IDS = {
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

function renderAboutContent() {
  const el = document.getElementById('about-content');
  el.innerHTML = '<div style="padding:32px;text-align:center;color:var(--muted);font-size:13px">⏳ Laden...</div>';

  let readmeFile = 'README.md';
    if (lang === 'en') readmeFile = 'README_en.md';
    fetch(readmeFile)
    .then(r => r.ok ? r.text() : Promise.reject(r.status))
    .then(md => { el.innerHTML = mdToHtml(md); })
    .catch(() => {
      el.innerHTML = '<div style="padding:24px;color:var(--muted);font-size:13px">⚠️ README kon niet worden geladen.<br><a href=\"https://github.com/Huijting/midnight_guide\" target=\"_blank\" style=\"color:var(--gold)\">Open op GitHub →</a></div>';
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
function renderHelp() {
  const h = (typeof HELP_CONTENT !== 'undefined') ? (HELP_CONTENT[lang] || HELP_CONTENT.nl) : null;
  if (!h) return;
  document.getElementById('help-title').textContent = h.title;
  document.getElementById('help-intro').textContent = h.intro;
  document.getElementById('help-close').textContent = h.close;
  document.getElementById('help-btn').textContent = '❓ ' + h.title.replace('📖 ','');
  document.getElementById('help-sections').innerHTML = h.sections.map(s =>
    `<div class="help-section">
      <div class="help-section-title">${s.icon} ${s.title}</div>
      <div class="help-section-text">${s.text}</div>
    </div>`
  ).join('');
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
    name:{nl:'World Boss verslaan',en:'Defeat the World Boss'},
    desc:{nl:'Versla de weekly world boss voor Champion-level gear. Rouleert elke week per zone.',
          en:'Defeat the weekly world boss for Champion-level gear. Rotates each week per zone.'},
    where:'📍 Check de wereldkaart voor de actieve boss | Check the world map for the active boss.',
    way:'', tags:['gear'] },

  { id:'w_dungeon', diff:'easy', dmfOnly:false,
    cat:{nl:'🏰 Weekly Dungeon Quest',en:'🏰 Weekly Dungeon Quest'},
    name:{nl:'Weekly dungeon quest (Halduron Brightwing)',en:'Weekly dungeon quest (Halduron Brightwing)'},
    desc:{nl:'Voltooi een Midnight dungeon op willekeurige moeilijkheid. Beloning: goud + 1.000 rep naar keuze. Follower dungeons tellen ook mee!',
          en:'Complete any Midnight dungeon on any difficulty. Reward: gold + 1,000 rep of your choice. Follower dungeons count!'},
    where:'📍 Halduron Brightwing — tent bij Sanctum of Light, Silvermoon City.',
    way:'/way #2393 49.0 64.8 Halduron Brightwing', tags:['rep','currency'] },

  { id:'w_liadrin', diff:'easy', dmfOnly:false,
    cat:{nl:'📜 Weekly Event Quest',en:'📜 Weekly Event Quest'},
    name:{nl:'Weekly Event Quest (Lady Liadrin)',en:'Weekly Event Quest (Lady Liadrin)'},
    desc:{nl:'Kies 1 van 4 world event quests. Beloning: Apex Cache (gear, valuta, 100 Coffer Key Shards) + kans op Spark of Radiance.',
          en:'Choose 1 of 4 world event quests. Reward: Apex Cache (gear, currency, 100 Coffer Key Shards) + chance at Spark of Radiance.'},
    where:'📍 Lady Liadrin — tent bij Sanctum of Light, Silvermoon City.',
    way:'/way #2393 49.03 64.61 Lady Liadrin (weekly quests)', tags:['gear','currency'] },

  { id:'w_abundance', diff:'easy', dmfOnly:false,
    cat:{nl:'🌿 Zone Events',en:'🌿 Zone Events'},
    name:{nl:'Abundance (weekly)',en:'Abundance (weekly)'},
    desc:{nl:'Verzamel 20.000 punten in de Abundance caves. 3 minuten per run, doneer regelmatig aan Dundun. Beloning: 1.000 Amani Tribe rep + cache.',
          en:'Collect 20,000 points in the Abundance caves. 3 minutes per run, donate regularly to Dundun. Reward: 1,000 Amani Tribe rep + cache.'},
    where:'📍 Eerst ontgrendelen: Chel the Chip — Amani-Zar Village, Zul\&#39;Aman. Dan wekelijks bij cave-ingang. | First unlock: Chel the Chip — Amani-Zar Village, Zul\&#39;Aman.',
    way:'/way #2437 47.2 62.1 Chel the Chip (unlock Abundance)', tags:['rep','currency'] },

  { id:'w_haranir', diff:'easy', dmfOnly:false,
    cat:{nl:'🌿 Zone Events',en:'🌿 Zone Events'},
    name:{nl:'Legends of the Haranir (weekly)',en:'Legends of the Haranir (weekly)'},
    desc:{nl:'Kies een Harati relikwie en voltooi het scenario. Beloning: Avid Learner\&#39;s Supply Pack + housing decor. Keuze is Warband-wide!',
          en:'Choose a Harati relic and complete the scenario. Reward: Avid Learner\&#39;s Supply Pack + housing decor. Choice is Warband-wide!'},
    where:'📍 Zurashar Kassameh — Reliquary, The Den, Harandar.',
    way:'/way #2413 54.2 53.0 Zurashar Kassameh (Lost Legends quest)', tags:['rep','currency'] },

  { id:'w_soiree', diff:'easy', dmfOnly:false,
    cat:{nl:'🌿 Zone Events',en:'🌿 Zone Events'},
    name:{nl:'Saltheril\&#39;s Soiree (weekly)',en:'Saltheril\&#39;s Soiree (weekly)'},
    desc:{nl:'Kies een subfactie (Magisters/Blood Knights/Farstriders/Shades). Geeft Brimming Arcana + 2.000 Silvermoon Court rep. Keuze kan andere facties schaden! Eerst ontgrendelen via Jonas Everdawn.',
          en:'Choose a subfaction (Magisters/Blood Knights/Farstriders/Shades). Gives Brimming Arcana + 2,000 Silvermoon Court rep. Your choice can hurt other factions! Unlock first via Jonas Everdawn.'},
    where:'📍 Unlock: Jonas Everdawn — ten noorden van Sanctum of Light, Silvermoon City → dan Lord Saltheril, Fairbreeze Village.',
    way:'/way #2393 50.1 45.2 Jonas Everdawn (unlock Soiree)', tags:['rep','currency'] },

  { id:'w_stormarion', diff:'easy', dmfOnly:false,
    cat:{nl:'🌿 Zone Events',en:'🌿 Zone Events'},
    name:{nl:'Stormarion Assault (weekly)',en:'Stormarion Assault (weekly)'},
    desc:{nl:'Verdedig Stormarion Citadel — elke 30 min 3 golven vijanden. Geen voorquest nodig. Geeft cache + Great Vault World-voortgang.',
          en:'Defend Stormarion Citadel — 3 waves every 30 min. No pre-quest needed. Rewards cache + Great Vault World progress.'},
    where:'📍 Voidstorm — Stormarion Citadel.',
    way:'/way #2405 26.4 67.6 Stormarion Assault', tags:['rep','currency'] },

  { id:'w_prey', diff:'medium', dmfOnly:false,
    cat:{nl:'🎯 Prey Hunts',en:'🎯 Prey Hunts'},
    name:{nl:'Nightmare Prey (2x)',en:'Nightmare Prey (2x)'},
    desc:{nl:'Voltooi 2 Nightmare Prey hunts voor Champion-level gear. Track je prooi in de zone en overleef hinderlagen. Telt mee voor Great Vault World.',
          en:'Complete 2 Nightmare Prey hunts for Champion-level gear. Track your prey through the zone and survive ambushes. Contributes to Great Vault World.'},
    where:'📍 Magister Astalor Bloodsworn — Murder Row, Silvermoon City.',
    way:'/way #2393 54.97 63.31 Magister Astalor Bloodsworn (Prey)', tags:['gear'] },

  { id:'w_delve1', diff:'medium', dmfOnly:false,
    cat:{nl:'🏚 Delves (Bountiful)',en:'🏚 Delves (Bountiful)'},
    name:{nl:'Bountiful Delve (1/4)',en:'Bountiful Delve (1/4)'},
    desc:{nl:'Vereist een Restored Coffer Key. Valeera begeleidt je. Bountiful Delves geven upgrade-track loot, normale Delves niet.',
          en:'Requires a Restored Coffer Key. Valeera accompanies you. Bountiful Delves give upgrade-track loot, regular Delves do not.'},
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
    desc:{nl:'4e run — maximale Great Vault World-voortgang.',en:'4th run — maximum Great Vault World progress.'}, where:'📍 Zie delve 1.', way:'', tags:['gear'] },

  { id:'w_mplus1', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'},
    name:{nl:'M+ Key voltooien (1/8)',en:'Complete M+ Key (1/8)'},
    desc:{nl:'Eerste key voor Great Vault Dungeon-slot.',en:'First key for Great Vault Dungeon slot.'},
    where:'📍 Geen quest — gebruik je eigen key of join via group finder.', way:'', tags:['gear'] },
  { id:'w_mplus2', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'}, name:{nl:'M+ Key voltooien (2/8)',en:'Complete M+ Key (2/8)'}, desc:{nl:'2e key.',en:'2nd key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus3', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'}, name:{nl:'M+ Key voltooien (3/8)',en:'Complete M+ Key (3/8)'}, desc:{nl:'3e key.',en:'3rd key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus4', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'}, name:{nl:'M+ Key voltooien (4/8)',en:'Complete M+ Key (4/8)'}, desc:{nl:'4e key.',en:'4th key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus5', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'}, name:{nl:'M+ Key voltooien (5/8)',en:'Complete M+ Key (5/8)'}, desc:{nl:'5e key.',en:'5th key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus6', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'}, name:{nl:'M+ Key voltooien (6/8)',en:'Complete M+ Key (6/8)'}, desc:{nl:'6e key.',en:'6th key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus7', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'}, name:{nl:'M+ Key voltooien (7/8)',en:'Complete M+ Key (7/8)'}, desc:{nl:'7e key.',en:'7th key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus8', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'},
    name:{nl:'M+ Key voltooien (8/8)',en:'Complete M+ Key (8/8)'},
    desc:{nl:'8 keys = maximale vault keuze. +10 of hoger geeft Myth-level reward.',en:'8 keys = maximum vault choice. +10 or higher gives Myth-level reward.'},
    where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_vault', diff:'medium', dmfOnly:false,
    cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+'},
    name:{nl:'Great Vault ophalen',en:'Collect Great Vault'},
    desc:{nl:'Kies je wekelijkse beloning na reset (woensdag EU). Niet ophalen = Thalassian Token of Merit per slot.',
          en:'Choose your weekly reward after reset (Wednesday EU). Not collecting = Thalassian Token of Merit per slot.'},
    where:'📍 Vaultkeeper Elysa — The Bazaar, Silvermoon City.',
    way:'/way #2393 54.1 51.2 Vaultkeeper Elysa (Great Vault)', tags:['gear'] },

  { id:'w_raid1', diff:'medium', dmfOnly:false,
    cat:{nl:'🏰 Raid',en:'🏰 Raid'},
    name:{nl:'Voidspire (LFR/Normal/Heroic)',en:'Voidspire (LFR/Normal/Heroic)'},
    desc:{nl:'6 bazen in Voidstorm. Geeft gear, rep en Great Vault Raid-voortgang. LFR beschikbaar na week 1.',
          en:'6 bosses in Voidstorm. Gives gear, rep and Great Vault Raid progress. LFR available after week 1.'},
    where:'📍 Voidspire — Voidstorm. Via Dungeon Finder of directe ingang.',
    way:'/way #2405 45.4 64.0 Voidspire (ingang)', tags:['gear','rep'] },
  { id:'w_raid2', diff:'medium', diff:'medium', dmfOnly:false,
    cat:{nl:'🏰 Raid',en:'🏰 Raid'},
    name:{nl:'Dreamrift (LFR/Normal/Heroic)',en:'Dreamrift (LFR/Normal/Heroic)'},
    desc:{nl:'Tweede raid voor extra gear en vault slots.',en:'Second raid for extra gear and vault slots.'},
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
    desc:{nl:'Via Abundance weekly en Zul-Aman activiteiten. Renown 9 geeft Champion-level necklace.',
          en:'Via Abundance weekly and Zul-Aman activities. Renown 9 gives Champion-level necklace.'},
    where:'📍 Via Abundance event in Zul-Aman.',
    way:'/way #2437 47.2 62.1 Amani-Zar Village (Abundance/Amani hub)', tags:['rep'] },

  { id:'w_craft_orders', dmfOnly:false,
    cat:{nl:'🔨 Crafting Orders',en:'🔨 Crafting Orders'},
    name:{nl:'Patron Crafting Orders verwerken',en:'Process Patron Crafting Orders'},
    desc:{nl:'Voornaamste bron van wekelijkse KP. Verwerk publieke orders voor gold en profession XP.',
          en:'Main source of weekly KP. Process public orders for gold and profession XP.'},
    where:'📍 Mar-nah — The Bazaar, Silvermoon City.',
    way:'/way #2393 46.2 53.8 Mar-nah (Crafting Orders)', tags:['crafting','currency'] },
  { id:'w_craft_weekly', dmfOnly:false,
    cat:{nl:'🔨 Crafting Orders',en:'🔨 Crafting Orders'},
    name:{nl:'Weekly Crafting Quest',en:'Weekly Crafting Quest'},
    desc:{nl:'Speciale weekly quest voor bonus KP of profession XP.',
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
    desc:{nl:'Mini-games en quests geven +2 skill en +3 KP per profession. Vergeet de WHEE!-buff niet voor +10% XP/rep. Alleen actief eerste week van de maand.',
          en:'Mini-games and quests give +2 skill and +3 KP per profession. Don\&#39;t forget the WHEE! buff for +10% XP/rep. Only active first week of month.'},
    where:'📍 Portal: Elwynn Forest (bij Goldshire, Alliance) of Mulgore (bij Thunder Bluff, Horde).',
    way:'/way Elwynn Forest 41.1 83.0 Darkmoon Faire portal (Alliance)', tags:['currency','crafting'] },

  // ── Renown Champion Gear (eenmalig per character, maar weekly controleren) ──
  { id:'w_renown_helm', dmfOnly:false,
    cat:{nl:'🏅 Renown Rewards',en:'🏅 Renown Rewards'},
    name:{nl:'Champion Helm (Silvermoon Court Renown 9)',en:'Champion Helm (Silvermoon Court Renown 9)'},
    desc:{nl:'Haal de Champion Helm (iLvl 246) via Silvermoon Court Renown 9. Eenmalig — vink af zodra je hem hebt.',
          en:'Collect Champion Helm (iLvl 246) at Silvermoon Court Renown 9. One-time — check off once collected.'},
    where:'Vendor: Caeris Fairdawn — Saltheril&#39;s Haven, Eversong Woods.',
    way:'/way #2395 43.4 47.4 Caeris Fairdawn', tags:['gear','rep'] },

  { id:'w_renown_neck', dmfOnly:false,
    cat:{nl:'🏅 Renown Rewards',en:'🏅 Renown Rewards'},
    name:{nl:'Champion Necklace (Amani Tribe Renown 9)',en:'Champion Necklace (Amani Tribe Renown 9)'},
    desc:{nl:'Haal de Champion Necklace (iLvl 246) via Amani Tribe Renown 9.',
          en:'Collect Champion Necklace (iLvl 246) at Amani Tribe Renown 9.'},
    where:'Amani Tribe vendor — Amani-Zar Village, Zul-Aman.',
    way:'/way #2437 47.2 62.1 Amani Tribe vendor', tags:['gear','rep'] },

  { id:'w_renown_waist', dmfOnly:false,
    cat:{nl:'🏅 Renown Rewards',en:'🏅 Renown Rewards'},
    name:{nl:'Champion Belt (Haranir Renown 8)',en:'Champion Belt (Haranir Renown 8)'},
    desc:{nl:'Haal de Champion Belt (iLvl 246) via Haranir Renown 8.',
          en:'Collect Champion Belt (iLvl 246) at Haranir Renown 8.'},
    where:'Haranir vendor — The Den, Harandar.',
    way:'/way #2413 54.2 53.0 The Den, Harandar', tags:['gear','rep'] },

  { id:'w_renown_trinket', dmfOnly:false,
    cat:{nl:'🏅 Renown Rewards',en:'🏅 Renown Rewards'},
    name:{nl:'Champion Trinket (Singularity Renown 7)',en:'Champion Trinket (Singularity Renown 7)'},
    desc:{nl:'Haal de Champion Trinket (iLvl 246) via Singularity Renown 7.',
          en:'Collect Champion Trinket (iLvl 246) at Singularity Renown 7.'},
    where:'Singularity vendor — Stormarion Citadel, Voidstorm.',
    way:'/way #2405 26.4 67.6 Singularity vendor', tags:['gear','rep'] },

  // ── Sparks of Radiance ──
  { id:'w_spark_liadrin', dmfOnly:false,
    cat:{nl:'✨ Sparks of Radiance',en:'✨ Sparks of Radiance'},
    name:{nl:'Spark of Radiance (Liadrin quest)',en:'Spark of Radiance (Liadrin quest)'},
    desc:{nl:'Kans op Spark via wekelijkse Liadrin quest. Bewaar voor BiS slot — craft niks voordat je weet wat je wil!',
          en:'Chance at Spark from weekly Liadrin quest. Save for BiS slot — don&#39;t craft until you know what you want!'},
    where:'Lady Liadrin — tent bij Sanctum of Light, Silvermoon City.',
    way:'/way #2393 49.03 64.61 Lady Liadrin', tags:['currency'] },

  { id:'w_spark_worldtour', dmfOnly:false,
    cat:{nl:'✨ Sparks of Radiance',en:'✨ Sparks of Radiance'},
    name:{nl:'Spark of Radiance (World Tour — alle 8 M0)',en:'Spark of Radiance (World Tour — all 8 M0)'},
    desc:{nl:'Voltooi alle 8 M0 dungeons (World Tour quest) voor een gegarandeerde Spark. Bewaar — craft niks!',
          en:'Complete all 8 M0 dungeons (World Tour quest) for a guaranteed Spark. Save it — don&#39;t craft yet!'},
    where:'World Tour quest NPC — tent bij Lady Liadrin, Silvermoon City.',
    way:'/way #2393 49.03 64.61 World Tour quest NPC', tags:['currency'] },

  // ── Hard Prey voor Veteran gear + Crests ──
  { id:'w_prey_hard', dmfOnly:false,
    cat:{nl:'🎯 Prey Hunts',en:'🎯 Prey Hunts'},
    name:{nl:'Hard Prey Hunts (2x) — Veteran gear',en:'Hard Prey Hunts (2x) — Veteran gear'},
    desc:{nl:'Eerste 2 Hard Prey hunts geven een Veteran gear box (iLvl 240+). Telt mee voor Great Vault World. Tip: focus op vallen + ambushes, onder de 5 min per hunt.',
          en:'First 2 Hard Prey hunts give a Veteran gear box (iLvl 240+). Contributes to Great Vault World. Tip: focus on traps + ambushes, under 5 min/hunt.'},
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
  if (!resetEl) return;

  function update() {
    const now = new Date();
    const target = getNextWowWeeklyResetUtc();
    const diff = target.getTime() - now.getTime();
    if (diff <= 0) {
      resetEl.textContent = "0 dagen, 0 uur, 0 min, 0 sec";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    if (lang === 'en') {
      resetEl.textContent = `${days} days, ${hours} hrs, ${mins} min, ${secs} sec`;
    } else {
      resetEl.textContent = `${days} dagen, ${hours} uur, ${mins} min, ${secs} sec`;
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
  document.body.classList.toggle('nav-menu-open');
  document.getElementById('hamburger-btn')?.classList.toggle('active');
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
    nl: { dungeon:'Dungeon', spec:'Spec', prof:'Professie', delves:'Delves' },
    en: { dungeon:'Dungeon', spec:'Spec', prof:'Profession', delves:'Delves' }
  };
  const badge = badges[lang] || badges.nl;
  const groupLabels = {
    nl: { dungeon:'⚔ Dungeons', spec:'🎯 Specs', prof:'🔨 Professies', delves:'💎 Delves' },
    en: { dungeon:'⚔ Dungeons', spec:'🎯 Specs', prof:'🔨 Professions', delves:'💎 Delves' }
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

  if (!results.length) {
    el.innerHTML = `<div class="search-empty">Geen resultaten voor "<strong>${q}</strong>"</div>`;
    return;
  }

  // Groepeer per type (dedupe delves)
  const groups = { dungeon: [], spec: [], prof: [], delves: [] };
  const labels = grpLbl;
  const seenDelves = new Set();
  results.forEach(r => {
    if (r.type === 'delves') {
      const key = r.name + (r.sub || '');
      if (seenDelves.has(key)) return;
      seenDelves.add(key);
    }
    groups[r.type].push(r);
  });

  let html = '';
  let idx = 0;
  ['dungeon','spec','prof','delves'].forEach(type => {
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

function copyWay(el) {
  const way = el.dataset.way;
  const wui = WEEKLY_UI[lang] || WEEKLY_UI.nl;
  const origHTML = el.innerHTML;
  navigator.clipboard.writeText(way).then(() => {
    el.innerHTML = '✅ ' + (wui.copied || 'Gekopieerd!');
    setTimeout(() => el.innerHTML = origHTML, 2000);
  }).catch(() => {
    el.innerHTML = '⚠️';
    setTimeout(() => el.innerHTML = origHTML, 2000);
  });
}

function weeklyUpdateProgress(state) {
  const total = WEEKLY_ITEMS.length;
  const done = WEEKLY_ITEMS.filter(i => state[i.id]).length;
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
    tags: {gear:'⚔ Gear', rep:'💚 Rep', currency:'💰 Valuta', crafting:'🔨 Crafting'},
    progress: (done, total) => `${done} / ${total} voltooid`,
    dmf_note: '🎡 Darkmoon Faire is actief deze week!',
    wat_nu_btn: '⚡ Wat doe ik eerst?',
    wat_nu_title: '🎯 Begin hiermee:',
    wat_nu_empty: '🎉 Je weekly taken zijn allemaal afgevinkt! Ga lekker spelen 😄',
    diff: {easy:'🟢 Makkelijk', medium:'🟡 Gemiddeld', hard:'🔴 Uitdagend'},
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
    diff: {easy:'🟢 Easy', medium:'🟡 Medium', hard:'🔴 Challenging'},
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

  let html = '';
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
          ${item.way ? `<div class="weekly-item-way" onclick="event.stopPropagation();copyWay(this)" data-way="${item.way}" title="${(WEEKLY_UI[lang]||WEEKLY_UI.nl).copy_tip}">📋 ${item.way}</div>` : ''}
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
  nl: { grid_sub:'Kies een spec voor rotatie, stats, cooldowns en tips.', back:'← Alle specs', role_dps:'Ranged DPS', role_melee:'Melee DPS', role_tank:'Tank', role_heal:'Healer',
        tabs:['⚡ Cheat Sheet','🔄 Rotatie','📊 Stats','💀 Cooldowns','💡 Tips','🖱️ Macro\'s','🎯 Resource','🧪 Consumables & BiS'],
        tab_ids:['cheatsheet','rotation','stats','cooldowns','tips','macros','resource','consumables'],
        pros:'✅ Sterk', cons:'❌ Zwak',
        opener:'Opener', single:'Single Target', aoe:'AoE / Mythic+',
        prio:'#', spell:'Spell', why:'Waarom', imp:'Belang',
        generate:'Focus genereren', spend:'Focus uitgeven', pets:'Pet types',
        macro_copy:'Klik op de code om te kopiëren', cons_flask:'Flask', cons_pot:'Potion', cons_food:'Food', cons_rune:'Augment Rune', cons_note:'Opmerking',
        cons_bis_sub1:'Consumables', cons_bis_sub2:'BiS Gear', cons_weapon:'Weapon Oil', bis_slot:'Slot', bis_item:'Item', bis_name:'Name', bis_ilvl:'ILvl', bis_req:'Req.', bis_versions:'Versions', bis_side:'Side', bis_source:'Source', bis_type:'Type', bis_completion:'', bis_fallback:'BiS-lijst wordt nog toegevoegd. Check <a href="https://www.wowhead.com/guide/classes" target="_blank" class="wh-link">Wowhead</a> of <a href="https://www.icy-veins.com/wow" target="_blank" class="wh-link">Icy Veins</a> voor actuele BiS.',
      },
  en: { grid_sub:'Choose a spec for rotation, stats, cooldowns and tips.', back:'← All specs', role_dps:'Ranged DPS', role_melee:'Melee DPS', role_tank:'Tank', role_heal:'Healer',
        tabs:['⚡ Cheat Sheet','🔄 Rotation','📊 Stats','💀 Cooldowns','💡 Tips','🖱️ Macros','🎯 Resource','🧪 Consumables & BiS'],
        tab_ids:['cheatsheet','rotation','stats','cooldowns','tips','macros','resource','consumables'],
        pros:'✅ Strong', cons:'❌ Weak',
        opener:'Opener', single:'Single Target', aoe:'AoE / Mythic+',
        prio:'#', spell:'Spell', why:'Why', imp:'Priority',
        generate:'Generate Focus', spend:'Spend Focus', pets:'Pet types',
        macro_copy:'Click the code to copy', cons_flask:'Flask', cons_pot:'Potion', cons_food:'Food', cons_rune:'Augment Rune', cons_note:'Note',
        cons_bis_sub1:'Consumables', cons_bis_sub2:'BiS Gear', cons_weapon:'Weapon Oil', bis_slot:'Slot', bis_item:'Item', bis_name:'Name', bis_ilvl:'ILvl', bis_req:'Req.', bis_versions:'Versions', bis_side:'Side', bis_source:'Source', bis_type:'Type', bis_completion:'', bis_fallback:'BiS list coming soon. Check <a href="https://www.wowhead.com/guide/classes" target="_blank" class="wh-link">Wowhead</a> or <a href="https://www.icy-veins.com/wow" target="_blank" class="wh-link">Icy Veins</a> for current BiS.',
      }
};

// currentSpec al gedeclareerd op regel 1110 — niet nogmaals declareren

function buildSpecGrid() {
  const ui = SPEC_TAB_UI[lang] || SPEC_TAB_UI.nl;
  document.getElementById('spec-grid-sub').textContent = ui.grid_sub;
  const specs = (typeof ALL_SPECS !== 'undefined') ? ALL_SPECS : [];

  // Groepeer per klasse, bewaar volgorde van eerste verschijning
  const classOrder = [];
  const byClass = {};
  specs.forEach(s => {
    if (!byClass[s.class]) { byClass[s.class] = []; classOrder.push(s.class); }
    byClass[s.class].push(s);
  });

  // Class emoji map
  const classIcon = {
    'Hunter':'🏹','Mage':'🔵','Paladin':'⚔️','Death Knight':'💀',
    'Warrior':'🛡️','Rogue':'🗡️','Druid':'🌿','Priest':'✨',
    'Shaman':'⚡','Warlock':'🟣','Monk':'🥋','Demon Hunter':'😈',
    'Evoker':'🐉'
  };

  classOrder.sort();
  const html = classOrder.map(cls => {
    const clsSpecs = byClass[cls].sort((a,b) => {
        const nameA = (typeof a.spec === 'object') ? (a.spec[lang] || a.spec.nl) : a.spec;
        const nameB = (typeof b.spec === 'object') ? (b.spec[lang] || b.spec.nl) : b.spec;
        return nameA.localeCompare(nameB);
      });
    const rows = clsSpecs.map(s => {
      const specName = (typeof s.spec === 'object') ? (s.spec[lang] || s.spec.nl) : s.spec;
      const roleLbl = ui['role_'+s.role] || ui.role_dps || s.role;
      return `<div class="spec-row" onclick="showSpec('${s.id}')">
        <div class="spec-row-icon">${s.icon}</div>
        <div class="spec-row-info">
          <div class="spec-row-name">${specName}</div>
          <div class="spec-row-role">${roleLbl}</div>
        </div>
        <div class="spec-row-arrow">&#10132;</div>
      </div>`;
    }).join('');
    return `<div class="spec-class-block">
      <div class="spec-class-header">
        <span class="spec-class-icon">${classIcon[cls]||'⚔️'}</span>
        <span class="spec-class-name">${cls}</span>
      </div>
      <div class="spec-list">${rows}</div>
    </div>`;
  }).join('') || '<p style="padding:20px;color:var(--muted);font-size:13px">Nog geen specs beschikbaar.</p>';

  document.getElementById('spec-grid').innerHTML = `<div class="spec-class-grid">${html}</div>`;
  document.getElementById('spec-grid-view').style.display = '';
  document.getElementById('spec-detail-view').classList.remove('visible');
}

function showSpec(id) {
  const specs = (typeof ALL_SPECS !== 'undefined') ? ALL_SPECS : [];
  const s = specs.find(x => x.id === id);
  if (!s) return;
  currentSpec = s;
  const ui = SPEC_TAB_UI[lang] || SPEC_TAB_UI.nl;
  const L = l => (typeof l === 'object') ? (l[lang] || l.nl) : l;

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

  // Tabs
  document.getElementById('spec-tab-btns').innerHTML = ui.tabs.map((t,i) =>
    `<button class="spec-tab-btn${i===0?' active':''}" onclick="switchSpecTab('${ui.tab_ids[i]}')">${t}</button>`
  ).join('');

  // Panels
  document.getElementById('spec-tab-panels').innerHTML = ui.tab_ids.map((tid,i) =>
    `<div class="spec-tab-content${i===0?' active':''}" id="stab-${tid}">${renderSpecTab(s, tid, ui)}</div>`
  ).join('');

  document.getElementById('spec-grid-view').style.display = 'none';
  setTimeout(refreshWowheadTooltips, 50);
  document.getElementById('spec-detail-view').classList.add('visible');
  window.scrollTo(0,0);
}

function switchSpecTab(id) {
  document.querySelectorAll('.spec-tab-btn').forEach((b,i) => {
    const tid = (SPEC_TAB_UI[lang]||SPEC_TAB_UI.nl).tab_ids[i];
    b.classList.toggle('active', tid === id);
  });
  document.querySelectorAll('.spec-tab-content').forEach(p => p.classList.toggle('active', p.id === 'stab-'+id));
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
    if (typeof $WowheadPower !== 'undefined' && $WowheadPower.refreshLinks) $WowheadPower.refreshLinks();
    else if (typeof WH !== 'undefined' && WH.Tooltip && WH.Tooltip.refresh) WH.Tooltip.refresh();
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
    const itemCell = (r.name==='—'||!r.name) ? '<span style="color:var(--muted)">—</span>' : `<a href="${itemUrl}" class="wh-link" data-wh-rename="false" target="_blank" style="color:${color}">${r.name}</a>`;
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
  return `<a href="${url}" class="wow-icon-link wh-link ${cls}" data-wh-rename="false" target="_blank"><img class="wow-icon wow-icon-${type}" src="${base}${size}/${iconName}.jpg" alt="" loading="lazy" width="36" height="36"></a>`;
}

function wrapItem(itemName) {
  if (!itemName) return '';
  const name = String(itemName).trim();
  let url = '';
  if (typeof ITEM_IDS !== 'undefined' && ITEM_IDS[name] != null) {
    url = `https://www.wowhead.com/item=${ITEM_IDS[name]}?ilvl=289`;
  } else {
    url = `https://www.wowhead.com/search?q=${encodeURIComponent(name.replace(/\s*\(.*?\)/g, '').trim())}`;
  }
  return `<a href="${url}" class="wh-link wh-link-item" data-wh-rename="false" target="_blank">${name}</a>`;
}

function renderSpecTab(s, tid, ui) {
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
  const d = hasContent(rawD) ? rawD : (s[dataKey] ? s[dataKey].nl : null);
  if (!d) return '<p style="color:var(--muted);font-size:13px;padding:8px">Binnenkort beschikbaar.</p>';

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
    const typeLabel = { flask: ui.cons_flask, pot: ui.cons_pot, food: ui.cons_food, rune: ui.cons_rune, oil: ui.cons_weapon };
    const consCards = (d||[]).map(c=>`<div class="cons-card">
      <div class="cons-type">${typeLabel[c.type]||c.type}</div>
      <div class="cons-name">${wrapItem(c.name)}</div>
      <div class="cons-effect">${c.effect}</div>
      ${c.note?`<div class="cons-note">💡 ${c.note}</div>`:''}
    </div>`).join('');
    const weaponBuffKey = (s.role==='heal'||s.class==='Mage'||s.class==='Priest'||s.class==='Warlock'||['balance_druid','elemental_shaman','restoration_shaman','devastation_evoker','preservation_evoker','augmentation_evoker'].includes(s.id))?'int':((s.role==='tank'&&s.class!=='Monk')||s.class==='Warrior'||s.class==='Death Knight'||['ret_paladin','protection_paladin'].includes(s.id))?'str':'agi';
    const wb = typeof WEAPON_BUFFS!=='undefined'&&WEAPON_BUFFS[weaponBuffKey];
    const oilCard = wb ? `<div class="cons-card">
      <div class="cons-type">${ui.cons_weapon}</div>
      <div class="cons-name">${wrapItem(wb.name)}</div>
      <div class="cons-effect">${(typeof wb.note==='object'?(wb.note[lang]||wb.note.nl):wb.note)||''}</div>
    </div>` : '';
    const consHtml = (consCards||'<p style="color:var(--muted);font-size:13px;padding:8px">Binnenkort beschikbaar.</p>') + oilCard;
    const bisData = typeof BIS_GEAR!=='undefined'&&BIS_GEAR[s.id];
    const bisHtml = bisData&&bisData.length ? renderBisTable(bisData, s.id, ui) : `<p style="color:var(--muted);font-size:13px;padding:12px;line-height:1.6">${ui.bis_fallback}</p>`;
    return `<div class="cons-bis-wrapper">
      <div class="cons-bis-subtabs">
        <button class="cons-bis-subbtn active" onclick="switchConsBisSubTab('cons')">${ui.cons_bis_sub1}</button>
        <button class="cons-bis-subbtn" onclick="switchConsBisSubTab('bis')">${ui.cons_bis_sub2}</button>
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
    title: '🚧 Bezig met bouwen!',
    body: 'We zijn op dit moment druk bezig met de <strong>Specs-sectie</strong> — rotaties, stats, cooldowns en tips voor alle klassen.<br><br>Sommige onderdelen zijn nog niet af of kunnen veranderen. Feedback is altijd welkom via de knop onderin!',
    tip_desktop: '💡 <strong>Tip:</strong> Zie je iets vreemd of wil je de nieuwste versie? Druk <strong>Ctrl+Shift+R</strong> voor een harde herlaad.',
    tip_mobile:  '💡 <strong>Tip:</strong> Iets vreemd of wil je de nieuwste versie? Sluit de browser, veeg hem weg uit recente apps en open opnieuw.',
    btn: '→ Naar de site',
  },
  en: {
    title: '🚧 Under construction!',
    body: 'We are currently working hard on the <strong>Specs section</strong> — rotations, stats, cooldowns and tips for all classes.<br><br>Some parts are not finished yet or may change. Feedback is always welcome via the button below!',
    tip_desktop: '💡 <strong>Tip:</strong> Something look off, or want the latest version? Press <strong>Ctrl+Shift+R</strong> for a hard reload.',
    tip_mobile:  '💡 <strong>Tip:</strong> Something look off or want the latest version? Close the browser, swipe it away from recent apps and reopen.',
    btn: '→ Go to the site',
  }
};

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
  localStorage.setItem('midnight_banner_v1', '1');
}

function copyMacro(el) {
  navigator.clipboard.writeText(el.textContent).then(() => {
    el.classList.add('copied');
    setTimeout(() => el.classList.remove('copied'), 2000);
  });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
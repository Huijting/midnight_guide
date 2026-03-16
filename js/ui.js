function renderAboutContent() {
  const el = document.getElementById('about-content');
  el.innerHTML = '<div style="padding:32px;text-align:center;color:var(--muted);font-size:13px">⏳ Laden...</div>';

  let readmeFile = 'README.md';
    if (lang === 'en') readmeFile = 'README_en.md';
    if (lang === 'da') readmeFile = 'README_da.md';
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
    cat:{nl:'🌍 World Boss',en:'🌍 World Boss',da:'🌍 World Boss'},
    name:{nl:'World Boss verslaan',en:'Defeat the World Boss',da:'Besejr World Boss'},
    desc:{nl:'Versla de weekly world boss voor Champion-level gear. Rouleert elke week per zone.',
          en:'Defeat the weekly world boss for Champion-level gear. Rotates each week per zone.',
          da:'Besejr den ugentlige world boss for Champion-udrustning. Skifter zone hver uge.'},
    where:'📍 Check de wereldkaart voor de actieve boss | Check the world map for the active boss.',
    way:'', tags:['gear'] },

  { id:'w_dungeon', diff:'easy', dmfOnly:false,
    cat:{nl:'🏰 Weekly Dungeon Quest',en:'🏰 Weekly Dungeon Quest',da:'🏰 Ugentlig Dungeon Quest'},
    name:{nl:'Weekly dungeon quest (Halduron Brightwing)',en:'Weekly dungeon quest (Halduron Brightwing)',da:'Ugentlig dungeon-quest (Halduron Brightwing)'},
    desc:{nl:'Voltooi een Midnight dungeon op willekeurige moeilijkheid. Beloning: goud + 1.000 rep naar keuze. Follower dungeons tellen ook mee!',
          en:'Complete any Midnight dungeon on any difficulty. Reward: gold + 1,000 rep of your choice. Follower dungeons count!',
          da:'Gennemfor en Midnight-dungeon pa vilkarlig svaerhedsgrad. Belonn: guld + 1.000 rep efter valg. Follower dungeons taeller med!'},
    where:'📍 Halduron Brightwing — tent bij Sanctum of Light, Silvermoon City.',
    way:'/way #2393 50.2 48.1 Halduron Brightwing', tags:['rep','currency'] },

  { id:'w_liadrin', diff:'easy', dmfOnly:false,
    cat:{nl:'📜 Weekly Event Quest',en:'📜 Weekly Event Quest',da:'📜 Ugentlig Event Quest'},
    name:{nl:'Weekly Event Quest (Lady Liadrin)',en:'Weekly Event Quest (Lady Liadrin)',da:'Ugentlig Event Quest (Lady Liadrin)'},
    desc:{nl:'Kies 1 van 4 world event quests. Beloning: Apex Cache (gear, valuta, 100 Coffer Key Shards) + kans op Spark of Radiance.',
          en:'Choose 1 of 4 world event quests. Reward: Apex Cache (gear, currency, 100 Coffer Key Shards) + chance at Spark of Radiance.',
          da:'Vaelg 1 af 4 world event-quests. Belonn: Apex Cache (udrustning, valuta, 100 Coffer Key Shards) + chance for Spark of Radiance.'},
    where:'📍 Lady Liadrin — tent bij Sanctum of Light, Silvermoon City.',
    way:'/way #2393 49.8 47.6 Lady Liadrin (weekly quests)', tags:['gear','currency'] },

  { id:'w_abundance', diff:'easy', dmfOnly:false,
    cat:{nl:'🌿 Zone Events',en:'🌿 Zone Events',da:'🌿 Zone Events'},
    name:{nl:'Abundance (weekly)',en:'Abundance (weekly)',da:'Abundance (ugentlig)'},
    desc:{nl:'Verzamel 20.000 punten in de Abundance caves. 3 minuten per run, doneer regelmatig aan Dundun. Beloning: 1.000 Amani Tribe rep + cache.',
          en:'Collect 20,000 points in the Abundance caves. 3 minutes per run, donate regularly to Dundun. Reward: 1,000 Amani Tribe rep + cache.',
          da:'Saml 20.000 point i Abundance-hulerne. 3 minutter per run, dona regelmassigt til Dundun. Belonn: 1.000 Amani Tribe rep + cache.'},
    where:'📍 Eerst ontgrendelen: Chel the Chip — Amani-Zar Village, Zul\&#39;Aman. Dan wekelijks bij cave-ingang. | First unlock: Chel the Chip — Amani-Zar Village, Zul\&#39;Aman.',
    way:'/way #2437 47.2 62.1 Chel the Chip (unlock Abundance)', tags:['rep','currency'] },

  { id:'w_haranir', diff:'easy', dmfOnly:false,
    cat:{nl:'🌿 Zone Events',en:'🌿 Zone Events',da:'🌿 Zone Events'},
    name:{nl:'Legends of the Haranir (weekly)',en:'Legends of the Haranir (weekly)',da:'Legends of the Haranir (ugentlig)'},
    desc:{nl:'Kies een Harati relikwie en voltooi het scenario. Beloning: Avid Learner\&#39;s Supply Pack + housing decor. Keuze is Warband-wide!',
          en:'Choose a Harati relic and complete the scenario. Reward: Avid Learner\&#39;s Supply Pack + housing decor. Choice is Warband-wide!',
          da:'Vaelg en Harati-relikviee og gennemfor scenariet. Belonn: Avid Learner\&#39;s Supply Pack + boligdeko. Valget galder hele Warband!'},
    where:'📍 Zurashar Kassameh — Reliquary, The Den, Harandar.',
    way:'/way #2413 54.2 53.0 Zurashar Kassameh (Lost Legends quest)', tags:['rep','currency'] },

  { id:'w_soiree', diff:'easy', dmfOnly:false,
    cat:{nl:'🌿 Zone Events',en:'🌿 Zone Events',da:'🌿 Zone Events'},
    name:{nl:'Saltheril\&#39;s Soiree (weekly)',en:'Saltheril\&#39;s Soiree (weekly)',da:'Saltheril\&#39;s Soiree (ugentlig)'},
    desc:{nl:'Kies een subfactie (Magisters/Blood Knights/Farstriders/Shades). Geeft Brimming Arcana + 2.000 Silvermoon Court rep. Keuze kan andere facties schaden! Eerst ontgrendelen via Jonas Everdawn.',
          en:'Choose a subfaction (Magisters/Blood Knights/Farstriders/Shades). Gives Brimming Arcana + 2,000 Silvermoon Court rep. Your choice can hurt other factions! Unlock first via Jonas Everdawn.',
          da:'Vaelg en subfraktion. Giver Brimming Arcana + 2.000 Silvermoon Court rep. Dit valg kan skade andre fraktioner! Lase op via Jonas Everdawn forst.'},
    where:'📍 Unlock: Jonas Everdawn — ten noorden van Sanctum of Light, Silvermoon City → dan Lord Saltheril, Fairbreeze Village.',
    way:'/way #2393 50.1 45.2 Jonas Everdawn (unlock Soiree)', tags:['rep','currency'] },

  { id:'w_stormarion', diff:'easy', dmfOnly:false,
    cat:{nl:'🌿 Zone Events',en:'🌿 Zone Events',da:'🌿 Zone Events'},
    name:{nl:'Stormarion Assault (weekly)',en:'Stormarion Assault (weekly)',da:'Stormarion Assault (ugentlig)'},
    desc:{nl:'Verdedig Stormarion Citadel — elke 30 min 3 golven vijanden. Geen voorquest nodig. Geeft cache + Great Vault World-voortgang.',
          en:'Defend Stormarion Citadel — 3 waves every 30 min. No pre-quest needed. Rewards cache + Great Vault World progress.',
          da:'Forsvar Stormarion Citadel — 3 bolger hvert 30. min. Ingen forquest kraevet. Giver cache + Great Vault World-fremgang.'},
    where:'📍 Voidstorm — Stormarion Citadel.',
    way:'/way #2405 26.4 67.6 Stormarion Assault', tags:['rep','currency'] },

  { id:'w_prey', diff:'medium', dmfOnly:false,
    cat:{nl:'🎯 Prey Hunts',en:'🎯 Prey Hunts',da:'🎯 Prey Hunts'},
    name:{nl:'Nightmare Prey (2x)',en:'Nightmare Prey (2x)',da:'Nightmare Prey (2x)'},
    desc:{nl:'Voltooi 2 Nightmare Prey hunts voor Champion-level gear. Track je prooi in de zone en overleef de hinderlagen.',
          en:'Complete 2 Nightmare Prey hunts for Champion-level gear. Track your prey through the zone and survive ambushes.',
          da:'Gennemfor 2 Nightmare Prey-jagter for Champion-udrustning. Spor dit bytte i zonen og overlev baghold.'},
    where:'📍 Magister Astalor Bloodsworn — Murder Row, Silvermoon City.',
    way:'/way #2393 57.0 61.0 Astalor Bloodsworn (Prey contracts)', tags:['gear'] },

  { id:'w_delve1', diff:'medium', dmfOnly:false,
    cat:{nl:'🏚 Delves (Bountiful)',en:'🏚 Delves (Bountiful)',da:'🏚 Delves (Bountiful)'},
    name:{nl:'Bountiful Delve (1/4)',en:'Bountiful Delve (1/4)',da:'Bountiful Delve (1/4)'},
    desc:{nl:'Vereist een Restored Coffer Key. Valeera begeleidt je. Bountiful Delves geven upgrade-track loot, normale Delves niet.',
          en:'Requires a Restored Coffer Key. Valeera accompanies you. Bountiful Delves give upgrade-track loot, regular Delves do not.',
          da:'Kraever en Restored Coffer Key. Valeera ledsager dig. Bountiful Delves giver loot pa upgrade-sporet.'},
    where:'📍 Delve-ingangen verspreid over alle zones — gouden kistje-icoon op de kaart.',
    way:'', tags:['gear'] },
  { id:'w_delve2', diff:'medium', dmfOnly:false, cat:{nl:'🏚 Delves (Bountiful)',en:'🏚 Delves (Bountiful)',da:'🏚 Delves (Bountiful)'},
    name:{nl:'Bountiful Delve (2/4)',en:'Bountiful Delve (2/4)',da:'Bountiful Delve (2/4)'},
    desc:{nl:'2e run.',en:'2nd run.',da:'2. run.'}, where:'📍 Zie delve 1.', way:'', tags:['gear'] },
  { id:'w_delve3', diff:'medium', dmfOnly:false, cat:{nl:'🏚 Delves (Bountiful)',en:'🏚 Delves (Bountiful)',da:'🏚 Delves (Bountiful)'},
    name:{nl:'Bountiful Delve (3/4)',en:'Bountiful Delve (3/4)',da:'Bountiful Delve (3/4)'},
    desc:{nl:'3e run.',en:'3rd run.',da:'3. run.'}, where:'📍 Zie delve 1.', way:'', tags:['gear'] },
  { id:'w_delve4', diff:'medium', dmfOnly:false, cat:{nl:'🏚 Delves (Bountiful)',en:'🏚 Delves (Bountiful)',da:'🏚 Delves (Bountiful)'},
    name:{nl:'Bountiful Delve (4/4)',en:'Bountiful Delve (4/4)',da:'Bountiful Delve (4/4)'},
    desc:{nl:'4e run — maximale Great Vault World-voortgang.',en:'4th run — maximum Great Vault World progress.',da:'4. run — maksimal Great Vault World-fremgang.'}, where:'📍 Zie delve 1.', way:'', tags:['gear'] },

  { id:'w_mplus1', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+',da:'⚔ Mythic+'},
    name:{nl:'M+ Key voltooien (1/8)',en:'Complete M+ Key (1/8)',da:'Gennemfor M+ Key (1/8)'},
    desc:{nl:'Eerste key voor Great Vault Dungeon-slot.',en:'First key for Great Vault Dungeon slot.',da:'Forste key til Great Vault Dungeon-slot.'},
    where:'📍 Geen quest — gebruik je eigen key of join via group finder.', way:'', tags:['gear'] },
  { id:'w_mplus2', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+',da:'⚔ Mythic+'}, name:{nl:'M+ Key voltooien (2/8)',en:'Complete M+ Key (2/8)',da:'Gennemfor M+ Key (2/8)'}, desc:{nl:'2e key.',en:'2nd key.',da:'2. key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus3', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+',da:'⚔ Mythic+'}, name:{nl:'M+ Key voltooien (3/8)',en:'Complete M+ Key (3/8)',da:'Gennemfor M+ Key (3/8)'}, desc:{nl:'3e key.',en:'3rd key.',da:'3. key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus4', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+',da:'⚔ Mythic+'}, name:{nl:'M+ Key voltooien (4/8)',en:'Complete M+ Key (4/8)',da:'Gennemfor M+ Key (4/8)'}, desc:{nl:'4e key.',en:'4th key.',da:'4. key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus5', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+',da:'⚔ Mythic+'}, name:{nl:'M+ Key voltooien (5/8)',en:'Complete M+ Key (5/8)',da:'Gennemfor M+ Key (5/8)'}, desc:{nl:'5e key.',en:'5th key.',da:'5. key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus6', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+',da:'⚔ Mythic+'}, name:{nl:'M+ Key voltooien (6/8)',en:'Complete M+ Key (6/8)',da:'Gennemfor M+ Key (6/8)'}, desc:{nl:'6e key.',en:'6th key.',da:'6. key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus7', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+',da:'⚔ Mythic+'}, name:{nl:'M+ Key voltooien (7/8)',en:'Complete M+ Key (7/8)',da:'Gennemfor M+ Key (7/8)'}, desc:{nl:'7e key.',en:'7th key.',da:'7. key.'}, where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_mplus8', diff:'hard', dmfOnly:false, cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+',da:'⚔ Mythic+'},
    name:{nl:'M+ Key voltooien (8/8)',en:'Complete M+ Key (8/8)',da:'Gennemfor M+ Key (8/8)'},
    desc:{nl:'8 keys = maximale vault keuze. +10 of hoger geeft Myth-level reward.',en:'8 keys = maximum vault choice. +10 or higher gives Myth-level reward.',da:'8 keys = maksimal vault-valg. +10 eller hojere giver Myth-niveau belonning.'},
    where:'📍 Zie boven.', way:'', tags:['gear'] },
  { id:'w_vault', diff:'medium', dmfOnly:false,
    cat:{nl:'⚔ Mythic+',en:'⚔ Mythic+',da:'⚔ Mythic+'},
    name:{nl:'Great Vault ophalen',en:'Collect Great Vault',da:'Hent Great Vault'},
    desc:{nl:'Kies je wekelijkse beloning na reset (woensdag EU). Niet ophalen = Thalassian Token of Merit per slot.',
          en:'Choose your weekly reward after reset (Wednesday EU). Not collecting = Thalassian Token of Merit per slot.',
          da:'Vaelg din ugentlige belonning efter reset (onsdag EU). Ikke hente = Thalassian Token of Merit per slot.'},
    where:'📍 Vaultkeeper Elysa — The Bazaar, Silvermoon City.',
    way:'/way #2393 54.1 51.2 Vaultkeeper Elysa (Great Vault)', tags:['gear'] },

  { id:'w_raid1', diff:'medium', dmfOnly:false,
    cat:{nl:'🏰 Raid',en:'🏰 Raid',da:'🏰 Raid'},
    name:{nl:'Voidspire (LFR/Normal/Heroic)',en:'Voidspire (LFR/Normal/Heroic)',da:'Voidspire (LFR/Normal/Heroic)'},
    desc:{nl:'6 bazen in Voidstorm. Geeft gear, rep en Great Vault Raid-voortgang. LFR beschikbaar na week 1.',
          en:'6 bosses in Voidstorm. Gives gear, rep and Great Vault Raid progress. LFR available after week 1.',
          da:'6 bossen i Voidstorm. Giver udrustning, rep og Great Vault Raid-fremgang. LFR tilgaengelig efter uge 1.'},
    where:'📍 Voidspire — Voidstorm. Via Dungeon Finder of directe ingang.',
    way:'/way #2405 45.4 64.0 Voidspire (ingang)', tags:['gear','rep'] },
  { id:'w_raid2', diff:'medium', diff:'medium', dmfOnly:false,
    cat:{nl:'🏰 Raid',en:'🏰 Raid',da:'🏰 Raid'},
    name:{nl:'Dreamrift (LFR/Normal/Heroic)',en:'Dreamrift (LFR/Normal/Heroic)',da:'Dreamrift (LFR/Normal/Heroic)'},
    desc:{nl:'Tweede raid voor extra gear en vault slots.',en:'Second raid for extra gear and vault slots.',da:'Andet raid for ekstra udrustning og vault-pladser.'},
    where:'📍 Dreamrift — via Dungeon Finder of directe ingang.', way:'', tags:['gear','rep'] },

  { id:'w_rep_silver', dmfOnly:false,
    cat:{nl:'🤝 Reputatie',en:'🤝 Reputation',da:'🤝 Reputation'},
    name:{nl:'Silvermoon Court Renown',en:'Silvermoon Court Renown',da:'Silvermoon Court Renown'},
    desc:{nl:'Via Saltheril\&#39;s Soiree, World Quests en zone-activiteiten. Contract van een Scribe geeft rep bij alle WQs.',
          en:'Via Saltheril\&#39;s Soiree, World Quests and zone activities. Contract from a Scribe gives rep on all WQs.',
          da:'Via Saltheril\&#39;s Soiree, World Quests og zone-aktiviteter. Kontrakt fra en Scribe giver rep pa alle WQs.'},
    where:'📍 Vendor: Caeris Fairdawn — Saltheril\&#39;s Haven, Eversong Woods.',
    way:'/way #2395 43.4 47.4 Caeris Fairdawn (Silvermoon Court vendor)', tags:['rep'] },
  { id:'w_rep_amani', dmfOnly:false,
    cat:{nl:'🤝 Reputatie',en:'🤝 Reputation',da:'🤝 Reputation'},
    name:{nl:'Amani Tribe Renown',en:'Amani Tribe Renown',da:'Amani Tribe Renown'},
    desc:{nl:'Via Abundance weekly en Zul-Aman activiteiten. Renown 9 geeft Champion-level necklace.',
          en:'Via Abundance weekly and Zul-Aman activities. Renown 9 gives Champion-level necklace.',
          da:'Via Abundance-ugentlig og Zul-Aman-aktiviteter. Renown 9 giver Champion-halskaedet.'},
    where:'📍 Via Abundance event in Zul-Aman.',
    way:'/way #2437 47.2 62.1 Amani-Zar Village (Abundance/Amani hub)', tags:['rep'] },

  { id:'w_craft_orders', dmfOnly:false,
    cat:{nl:'🔨 Crafting Orders',en:'🔨 Crafting Orders',da:'🔨 Crafting Orders'},
    name:{nl:'Patron Crafting Orders verwerken',en:'Process Patron Crafting Orders',da:'Behandl Patron Crafting Orders'},
    desc:{nl:'Voornaamste bron van wekelijkse KP. Verwerk publieke orders voor gold en profession XP.',
          en:'Main source of weekly KP. Process public orders for gold and profession XP.',
          da:'Vigtigste kilde til ugentlig KP. Behandl offentlige ordrer for guld og profession-XP.'},
    where:'📍 Mar-nah — The Bazaar, Silvermoon City.',
    way:'/way #2393 46.2 53.8 Mar-nah (Crafting Orders)', tags:['crafting','currency'] },
  { id:'w_craft_weekly', dmfOnly:false,
    cat:{nl:'🔨 Crafting Orders',en:'🔨 Crafting Orders',da:'🔨 Crafting Orders'},
    name:{nl:'Weekly Crafting Quest',en:'Weekly Crafting Quest',da:'Ugentlig Crafting Quest'},
    desc:{nl:'Speciale weekly quest voor bonus KP of profession XP.',
          en:'Special weekly quest for bonus KP or profession XP.',
          da:'Speciel ugentlig quest for bonus KP eller profession-XP.'},
    where:'📍 Bij je eigen profession trainer — gebruik de /way uit de Professies-tab van jouw professie.',
    way:'', tags:['crafting','rep'] },

  { id:'w_timewalking', dmfOnly:false,
    cat:{nl:'⏳ Timewalking',en:'⏳ Timewalking',da:'⏳ Timewalking'},
    name:{nl:'Timewalking (indien actief)',en:'Timewalking (if active)',da:'Timewalking (hvis aktiv)'},
    desc:{nl:'Voltooi 5 Timewalking dungeons voor bonus gear. Alleen actief in specifieke weken — check de in-game kalender (J).',
          en:'Complete 5 Timewalking dungeons for bonus gear. Only active certain weeks — check the in-game calendar (J).',
          da:'Gennemfor 5 Timewalking dungeons for bonus-udrustning. Kun aktiv visse uger — tjek den interne kalender (J).'},
    where:'📍 Queue via Dungeon Finder. Actief weken staan in de kalender.', way:'', tags:['gear'] },

  { id:'w_dmf', diff:'easy', dmfOnly:true,
    cat:{nl:'🎡 Darkmoon Faire',en:'🎡 Darkmoon Faire',da:'🎡 Darkmoon Faire'},
    name:{nl:'Darkmoon Faire',en:'Darkmoon Faire',da:'Darkmoon Faire'},
    desc:{nl:'Mini-games en quests geven +2 skill en +3 KP per profession. Vergeet de WHEE!-buff niet voor +10% XP/rep. Alleen actief eerste week van de maand.',
          en:'Mini-games and quests give +2 skill and +3 KP per profession. Don\&#39;t forget the WHEE! buff for +10% XP/rep. Only active first week of month.',
          da:'Mini-spil og quests giver +2 skill og +3 KP per profession. Glem ikke WHEE!-buffet for +10% XP/rep. Kun aktiv forste uge af maneden.'},
    where:'📍 Portal: Elwynn Forest (bij Goldshire, Alliance) of Mulgore (bij Thunder Bluff, Horde).',
    way:'/way Elwynn Forest 41.1 83.0 Darkmoon Faire portal (Alliance)', tags:['currency','crafting'] },
,

  // ── Renown Champion Gear (eenmalig per character, maar weekly controleren) ──
  { id:'w_renown_helm', dmfOnly:false,
    cat:{nl:'🏅 Renown Rewards',en:'🏅 Renown Rewards',da:'🏅 Renown Belonninger'},
    name:{nl:'Champion Helm (Silvermoon Court Renown 9)',en:'Champion Helm (Silvermoon Court Renown 9)',da:'Champion Hjelm (Silvermoon Court Renown 9)'},
    desc:{nl:'Haal de Champion Helm (iLvl 246) via Silvermoon Court Renown 9. Eenmalig — vink af zodra je hem hebt.',
          en:'Collect Champion Helm (iLvl 246) at Silvermoon Court Renown 9. One-time — check off once collected.',
          da:'Hent Champion-hjelmen (iLvl 246) ved Silvermoon Court Renown 9. Engangs — afkryds nar du har den.'},
    where:'Vendor: Caeris Fairdawn — Saltheril&#39;s Haven, Eversong Woods.',
    way:'/way #2395 43.4 47.4 Caeris Fairdawn', tags:['gear','rep'] },

  { id:'w_renown_neck', dmfOnly:false,
    cat:{nl:'🏅 Renown Rewards',en:'🏅 Renown Rewards',da:'🏅 Renown Belonninger'},
    name:{nl:'Champion Necklace (Amani Tribe Renown 9)',en:'Champion Necklace (Amani Tribe Renown 9)',da:'Champion Halskaedet (Amani Tribe Renown 9)'},
    desc:{nl:'Haal de Champion Necklace (iLvl 246) via Amani Tribe Renown 9.',
          en:'Collect Champion Necklace (iLvl 246) at Amani Tribe Renown 9.',
          da:'Hent Champion-halskaedet (iLvl 246) ved Amani Tribe Renown 9.'},
    where:'Amani Tribe vendor — Amani-Zar Village, Zul-Aman.',
    way:'/way #2437 47.2 62.1 Amani Tribe vendor', tags:['gear','rep'] },

  { id:'w_renown_waist', dmfOnly:false,
    cat:{nl:'🏅 Renown Rewards',en:'🏅 Renown Rewards',da:'🏅 Renown Belonninger'},
    name:{nl:'Champion Belt (Haranir Renown 8)',en:'Champion Belt (Haranir Renown 8)',da:'Champion Baelte (Haranir Renown 8)'},
    desc:{nl:'Haal de Champion Belt (iLvl 246) via Haranir Renown 8.',
          en:'Collect Champion Belt (iLvl 246) at Haranir Renown 8.',
          da:'Hent Champion-baeltet (iLvl 246) ved Haranir Renown 8.'},
    where:'Haranir vendor — The Den, Harandar.',
    way:'/way #2413 54.2 53.0 The Den, Harandar', tags:['gear','rep'] },

  { id:'w_renown_trinket', dmfOnly:false,
    cat:{nl:'🏅 Renown Rewards',en:'🏅 Renown Rewards',da:'🏅 Renown Belonninger'},
    name:{nl:'Champion Trinket (Singularity Renown 7)',en:'Champion Trinket (Singularity Renown 7)',da:'Champion Trinket (Singularity Renown 7)'},
    desc:{nl:'Haal de Champion Trinket (iLvl 246) via Singularity Renown 7.',
          en:'Collect Champion Trinket (iLvl 246) at Singularity Renown 7.',
          da:'Hent Champion-trinket (iLvl 246) ved Singularity Renown 7.'},
    where:'Singularity vendor — Stormarion Citadel, Voidstorm.',
    way:'/way #2405 26.4 67.6 Singularity vendor', tags:['gear','rep'] },

  // ── Sparks of Radiance ──
  { id:'w_spark_liadrin', dmfOnly:false,
    cat:{nl:'✨ Sparks of Radiance',en:'✨ Sparks of Radiance',da:'✨ Sparks of Radiance'},
    name:{nl:'Spark of Radiance (Liadrin quest)',en:'Spark of Radiance (Liadrin quest)',da:'Spark of Radiance (Liadrin quest)'},
    desc:{nl:'Kans op Spark via wekelijkse Liadrin quest. Bewaar voor BiS slot — craft niks voordat je weet wat je wil!',
          en:'Chance at Spark from weekly Liadrin quest. Save for BiS slot — don&#39;t craft until you know what you want!',
          da:'Chance for Spark fra ugentlig Liadrin-quest. Gem til BiS-plads — craft intet forend du ved hvad du vil!'},
    where:'Lady Liadrin — tent bij Sanctum of Light, Silvermoon City.',
    way:'/way #2393 49.8 47.6 Lady Liadrin', tags:['currency'] },

  { id:'w_spark_worldtour', dmfOnly:false,
    cat:{nl:'✨ Sparks of Radiance',en:'✨ Sparks of Radiance',da:'✨ Sparks of Radiance'},
    name:{nl:'Spark of Radiance (World Tour — alle 8 M0)',en:'Spark of Radiance (World Tour — all 8 M0)',da:'Spark of Radiance (World Tour — alle 8 M0)'},
    desc:{nl:'Voltooi alle 8 M0 dungeons (World Tour quest) voor een gegarandeerde Spark. Bewaar — craft niks!',
          en:'Complete all 8 M0 dungeons (World Tour quest) for a guaranteed Spark. Save it — don&#39;t craft yet!',
          da:'Gennemfor alle 8 M0 dungeons (World Tour) for en garanteret Spark. Gem den — craft ingenting endnu!'},
    where:'World Tour quest NPC — tent bij Lady Liadrin, Silvermoon City.',
    way:'/way #2393 49.8 47.6 World Tour quest NPC', tags:['currency'] },

  // ── Hard Prey voor Veteran gear + Crests ──
  { id:'w_prey_hard', dmfOnly:false,
    cat:{nl:'🎯 Prey Hunts',en:'🎯 Prey Hunts',da:'🎯 Prey Hunts'},
    name:{nl:'Hard Prey Hunts (2x) — Veteran gear',en:'Hard Prey Hunts (2x) — Veteran gear',da:'Hard Prey Hunts (2x) — Veteran udrustning'},
    desc:{nl:'Eerste 2 Hard Prey hunts geven een Veteran gear box (iLvl 240+). Tip: focus op vallen + ambushes, onder de 5 min per hunt. Erna: farm voor Veteran Crests (15 per run, kost 50 Anguish).',
          en:'First 2 Hard Prey hunts give a Veteran gear box (iLvl 240+). Tip: focus on traps + ambushes, under 5 min/hunt. Afterwards: farm for Veteran Crests (15 per run, costs 50 Anguish).',
          da:'De forste 2 Hard Prey-jagter giver en Veteran-kasse (iLvl 240+). Tip: fokus pa falder + baghold, under 5 min/jagt. Derefter: farm Veteran Crests (15 pr. run, koster 50 Anguish).'},
    where:'Magister Astalor Bloodsworn — Murder Row, Silvermoon City.',
    way:'/way #2393 57.0 61.0 Astalor Bloodsworn (Prey contracts)', tags:['gear','currency'] }];function isDmfWeek() {
  const now = new Date();
  // DMF is actief van de eerste zondag t/m zaterdag van elke maand
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const firstSunday = new Date(firstDay);
  firstSunday.setDate(1 + (7 - firstDay.getDay()) % 7);
  const endSunday = new Date(firstSunday);
  endSunday.setDate(firstSunday.getDate() + 7);
  return now >= firstSunday && now < endSunday;
}

function getWeeklyKey() {
  // Reset op woensdag 09:00 EU time
  const now = new Date();
  const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  const eu = new Date(utc.getTime() + 3600000); // CET (UTC+1, geen zomertijd correctie voor eenvoud)
  const day = eu.getDay(); // 0=zo, 3=wo
  const diff = (day >= 3) ? day - 3 : day + 4;
  const monday = new Date(eu);
  monday.setDate(eu.getDate() - diff);
  monday.setHours(9, 0, 0, 0);
  return 'weekly_check_' + monday.toISOString().slice(0, 10);
}

let weeklyCountdownInterval;

function startWeeklyCountdown() {
  if (weeklyCountdownInterval) clearInterval(weeklyCountdownInterval);
  
  const resetEl = document.getElementById('weekly-next-reset');
  if (!resetEl) return;

  function update() {
    const now = new Date();
    const d = new Date(now);
    let daysUntilWed = (3 - d.getDay() + 7) % 7;
    
    d.setDate(d.getDate() + daysUntilWed);
    d.setHours(5, 0, 0, 0);

    if (now.getTime() >= d.getTime()) {
      d.setDate(d.getDate() + 7);
    }

    const diff = d.getTime() - now.getTime();
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
    } else if (lang === 'da') {
      resetEl.textContent = `${days} dage, ${hours} timer, ${mins} min, ${secs} sek`;
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
  // Drietalige placeholder
  const ph = { nl:'Zoek dungeon, spec, professie...', en:'Search dungeon, spec, profession...', da:'Søg dungeon, spec, profession...' };
  inp.placeholder = ph[lang] || ph.nl;
  document.getElementById('search-results').innerHTML = '';
  searchFocusIdx = -1;
  setTimeout(() => inp.focus(), 80);
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
    nl: { dungeon:'Dungeon', spec:'Spec', prof:'Professie' },
    en: { dungeon:'Dungeon', spec:'Spec', prof:'Profession' },
    da: { dungeon:'Dungeon', spec:'Spec', prof:'Profession' },
  };
  const badge = badges[lang] || badges.nl;
  const groupLabels = {
    nl: { dungeon:'⚔ Dungeons', spec:'🎯 Specs', prof:'🔨 Professies' },
    en: { dungeon:'⚔ Dungeons', spec:'🎯 Specs', prof:'🔨 Professions' },
    da: { dungeon:'⚔ Dungeons', spec:'🎯 Specs', prof:'🔨 Professioner' },
  };
  const grpLbl = groupLabels[lang] || groupLabels.nl;

  // ── Dungeons ──
  if (typeof DUNGEONS !== 'undefined') {
    DUNGEONS.forEach(d => {
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

  if (!results.length) {
    el.innerHTML = `<div class="search-empty">Geen resultaten voor "<strong>${q}</strong>"</div>`;
    return;
  }

  // Groepeer per type
  const groups = { dungeon: [], spec: [], prof: [] };
  const labels = grpLbl;
  results.forEach(r => groups[r.type].push(r));

  let html = '';
  let idx = 0;
  ['dungeon','spec','prof'].forEach(type => {
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
    reset_info: 'Reset elke woensdag · Volgende reset:',
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
    reset_info: 'Resets every Wednesday · Next reset:',
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
  },
  da: {
    title: '📅 Ugentlig Tjekliste',
    reset_info: 'Nulstilles hver onsdag · Naeste nulstilling:',
    reset_btn: '↺ Nulstil alt',
    copy_tip: 'Klik for at kopiere',
    copied: '✅ Kopieret!',
    tags: {gear:'⚔ Udrustning', rep:'💚 Rep', currency:'💰 Valuta', crafting:'🔨 Crafting'},
    progress: (done, total) => `${done} / ${total} fuldfort`,
    dmf_note: '🎡 Darkmoon Faire er aktiv denne uge!',
    wat_nu_btn: '⚡ Hvad skal jeg gøre først?',
    wat_nu_title: '🎯 Start her:',
    wat_nu_empty: '🎉 Alle ugentlige opgaver er afkrydset! Nyd spillet 😄',
    diff: {easy:'🟢 Let', medium:'🟡 Middel', hard:'🔴 Udfordrende'},
  },
};
function buildWeeklyList() {
  const el = document.getElementById('weekly-list');
  if (!el) return;

  const state = weeklyLoadState();
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
    const catDone = items.filter(i => state[i.id]).length;
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
      const done = !!state[item.id];
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
  weeklyUpdateProgress(state);

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
  },
  da: {
    title: '📲 Installer som app',
    sub: 'Føj guiden til din startskærm for hurtig adgang.',
    android: '<strong>Android</strong> — Chrome → menu (⋮) → "Føj til startskærm"',
    ios: '<strong>iPhone / iPad</strong> — Safari → del (□↑) → "Føj til hjemmeskærm"',
    pc: '<strong>PC / Mac</strong> — klik på installationsikonet i adresselinjen, eller brug knappen nedenfor.',
    btn: 'Installer'
  }
};

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
        tabs:['⚡ Cheat Sheet','🔄 Rotatie','📊 Stats','💀 Cooldowns','💡 Tips','🖱️ Macro\'s','🎯 Resource','🧪 Consumables'],
        tab_ids:['cheatsheet','rotation','stats','cooldowns','tips','macros','resource','consumables'],
        pros:'✅ Sterk', cons:'❌ Zwak',
        opener:'Opener', single:'Single Target', aoe:'AoE / Mythic+',
        prio:'#', spell:'Spell', why:'Waarom', imp:'Belang',
        generate:'Focus genereren', spend:'Focus uitgeven', pets:'Pet types',
        macro_copy:'Klik op de code om te kopiëren', cons_flask:'Flask', cons_pot:'Potion', cons_food:'Food', cons_rune:'Augment Rune', cons_note:'Opmerking',
      },
  en: { grid_sub:'Choose a spec for rotation, stats, cooldowns and tips.', back:'← All specs', role_dps:'Ranged DPS', role_melee:'Melee DPS', role_tank:'Tank', role_heal:'Healer',
        tabs:['⚡ Cheat Sheet','🔄 Rotation','📊 Stats','💀 Cooldowns','💡 Tips','🖱️ Macros','🎯 Resource','🧪 Consumables'],
        tab_ids:['cheatsheet','rotation','stats','cooldowns','tips','macros','resource','consumables'],
        pros:'✅ Strong', cons:'❌ Weak',
        opener:'Opener', single:'Single Target', aoe:'AoE / Mythic+',
        prio:'#', spell:'Spell', why:'Why', imp:'Priority',
        generate:'Generate Focus', spend:'Spend Focus', pets:'Pet types',
        macro_copy:'Click the code to copy', cons_flask:'Flask', cons_pot:'Potion', cons_food:'Food', cons_rune:'Augment Rune', cons_note:'Note',
      },
  da: { grid_sub:'Vælg en spec for rotation, stats, cooldowns og tips.', back:'← Alle specs', role_dps:'Ranged DPS', role_melee:'Melee DPS', role_tank:'Tank', role_heal:'Healer',
        tabs:['⚡ Snydeark','🔄 Rotation','📊 Stats','💀 Cooldowns','💡 Tips','🖱️ Makroer','🎯 Ressource','🧪 Forbrug'],
        tab_ids:['cheatsheet','rotation','stats','cooldowns','tips','macros','resource','consumables'],
        pros:'✅ Styrker', cons:'❌ Svagheder',
        opener:'Åbner', single:'Single Target', aoe:'AoE / Mythic+',
        prio:'#', spell:'Spell', why:'Hvorfor', imp:'Prioritet',
        generate:'Generer Focus', spend:'Brug Focus', pets:'Kæledyrstyper',
        macro_copy:'Klik på koden for at kopiere', cons_flask:'Flask', cons_pot:'Potion', cons_food:'Mad', cons_rune:'Augment Rune', cons_note:'Bemærkning', cons_flask:'Flask', cons_pot:'Potion', cons_food:'Mad', cons_rune:'Augment Rune', cons_note:'Bemærkning',
      },
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

  const html = classOrder.map(cls => {
    const clsSpecs = byClass[cls];
    const rows = clsSpecs.map(s => {
      const specName = (typeof s.spec === 'object') ? (s.spec[lang] || s.spec.nl) : s.spec;
      const roleLbl = ui['role_'+s.role] || ui.role_dps || s.role;
      return `<div class="spec-row" onclick="showSpec('${s.id}')">
        <div class="spec-row-icon">${s.icon}</div>
        <div class="spec-row-info">
          <div class="spec-row-name">${specName}</div>
          <div class="spec-row-role">${roleLbl}</div>
        </div>
        <div class="spec-row-arrow">›</div>
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
  document.getElementById('spec-detail-view').classList.add('visible');
  window.scrollTo(0,0);
}

function switchSpecTab(id) {
  document.querySelectorAll('.spec-tab-btn').forEach((b,i) => {
    const tid = (SPEC_TAB_UI[lang]||SPEC_TAB_UI.nl).tab_ids[i];
    b.classList.toggle('active', tid === id);
  });
  document.querySelectorAll('.spec-tab-content').forEach(p => p.classList.toggle('active', p.id === 'stab-'+id));
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
    const fmtRot = t => t.replace(/(Kill Command|Bestial Wrath|Barbed Shot|Black Arrow|Wild Thrash|Wailing Arrow|Cobra Shot|Hunter's Mark)/g, '<span>$1</span>');
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
    const rotRow = (r, imp, i) => `<tr><td class="rot-prio">${r.prio||r.step||(i+1)}</td><td><div class="rot-spell">${r.spell}</div><div class="rot-note">${r.why||r.note||''}</div></td>${imp?`<td><span class="rot-imp-${(r.importance||'').toLowerCase()}">${r.importance||''}</span></td>`:''}</tr>`;
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
    return (d||[]).map(c=>`<div class="cd-card"><div class="cd-top"><span class="cd-spell">${c.spell}</span><span class="cd-timer">${c.cd}</span></div><div class="cd-effect">${c.effect}</div><div class="cd-when">→ ${c.when}</div></div>`).join('');
  }

  if (tid === 'tips') {
    return (d||[]).map(t=>`<div class="tip-card"><div class="tip-icon">${t.icon}</div><div><div class="tip-title">${t.title}</div><div class="tip-text">${t.text}</div></div></div>`).join('');
  }

  if (tid === 'macros') {
    return `<p style="font-size:11px;color:var(--muted);margin-bottom:10px">${ui.macro_copy}</p>`+(d||[]).map(m=>`<div class="macro-card"><div class="macro-name">${m.name}</div><div class="macro-note">${m.note}</div><div class="macro-code" onclick="copyMacro(this)">${m.code}</div></div>`).join('');
  }

  if (tid === 'consumables') {
    const typeLabel = { flask: ui.cons_flask, pot: ui.cons_pot, food: ui.cons_food, rune: ui.cons_rune };
    return (d||[]).map(c=>`<div class="cons-card">
      <div class="cons-type">${typeLabel[c.type]||c.type}</div>
      <div class="cons-name">${c.name}</div>
      <div class="cons-effect">${c.effect}</div>
      ${c.note?`<div class="cons-note">💡 ${c.note}</div>`:''}
    </div>`).join('') || '<p style="color:var(--muted);font-size:13px;padding:8px">Binnenkort beschikbaar.</p>';
  }

  if (tid === 'resource') {
    const res = d || (s.resource_info ? (s.resource_info[lang] || s.resource_info.nl) : null);
    const genRows = (res.generate||[]).map(r=>`<tr><td>${r.spell}</td><td>${r.note}</td></tr>`).join('');
    const spendRows = (res.spend||[]).map(r=>`<tr><td>${r.spell}</td><td>${r.note}</td></tr>`).join('');
    return `<p style="font-size:13px;color:var(--text);line-height:1.6;margin-bottom:12px">${res.intro||''}</p>
      <div class="spec-section-title">${ui.generate}</div>
      <table class="res-table"><thead><tr><th>Spell</th><th>Effect</th></tr></thead><tbody>${genRows}</tbody></table>
      <div class="spec-section-title">${ui.spend}</div>
      <table class="res-table"><thead><tr><th>Spell</th><th>Effect</th></tr></thead><tbody>${spendRows}</tbody></table>
      ${res.frenzy_tip||res.pet_tip?`<div class="frenzy-tip">🐾 ${res.pet_tip||res.frenzy_tip}</div>`:''}
      <div class="spec-section-title">${ui.pets}</div>
      ${(res.pets||[]).map(p=>`<div class="pet-card"><div class="pet-type">${p.type}</div><div class="pet-bonus">${p.bonus}</div><div class="pet-use">${p.use}</div></div>`).join('')}`;
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
  },
  da: {
    title: '🚧 Under opbygning!',
    body: 'Vi arbejder i øjeblikket hårdt på <strong>Specs-sektionen</strong> — rotationer, stats, cooldowns og tips til alle klasser.<br><br>Nogle dele er endnu ikke færdige eller kan ændre sig. Feedback er altid velkommen via knappen nedenfor!',
    tip_desktop: '💡 <strong>Tip:</strong> Ser noget mærkeligt ud, eller vil du have den nyeste version? Tryk <strong>Ctrl+Shift+R</strong> for en hård genindlæsning.',
    tip_mobile:  '💡 <strong>Tip:</strong> Noget ser mærkeligt ud eller vil du have nyeste version? Luk browseren, svirp den væk fra seneste apps og åbn igen.',
    btn: '→ Gå til sitet',
  },
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
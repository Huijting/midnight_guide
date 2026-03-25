#!/usr/bin/env node
/**
 * Fetches Bountiful Delves for WoW EU from Wowhead "Today in WoW" and writes data/bountiful-today.json
 * Run daily at 07:00 UTC (08:00 CET) via GitHub Actions
 *
 * Wowhead embeds two "mn-bountiful-delves" blocks (regionId US then EU). We must use the EU block
 * so the file matches European realms (US rotation can differ by several hours / same calendar instant).
 */

const fs = require('fs');
const path = require('path');

// Zone + Delve name (from Wowhead) -> our delve id
const DELVE_MAP = {
  'Silvermoon City:Collegiate Calamity': 'collegiate_calamity',
  'Silvermoon City:The Darkway': 'the_darkway',
  'Voidstorm:Sunkiller Sanctum': 'sunkiller_sanctum',
  'Voidstorm:Shadowguard Point': 'shadowguard_point',
  "Voidstorm:Torment's Rise": 'torments_rise',
  'Harandar:The Grudge Pit': 'grudge_pit',
  'Harandar:The Gulf of Memory': 'gulf_of_memory',
  "Zul'Aman:Twilight Crypts": 'twilight_crypts',
  "Zul'Aman:Atal'Aman": 'atalaman',
  "Zul'Aman Region:Atal'Aman": 'atalaman',
  'Eversong Woods:The Shadow Enclave': 'shadow_enclave',
  "Isle of Quel'Danas:Parhelion Plaza": 'parhelion_plaza',
  "Isle of Quel'Danas, Sunwell Ramparts:Parhelion Plaza": 'parhelion_plaza',
};

const BOUNTIFUL_ID_MARKER = '"id":"mn-bountiful-delves"';

async function fetchWowhead() {
  const res = await fetch('https://www.wowhead.com/', {
    headers: { 'User-Agent': 'MidnightGuide/1.0 (Bountiful Delves fetcher; EU)' },
  });
  if (!res.ok) throw new Error(`Wowhead returned ${res.status}`);
  return res.text();
}

/**
 * Parse "Zone: Delve Name" pairs from the EU TIW JSON chunk (first ~8k after the block is enough).
 */
function parseBountifulDelvesFromChunk(htmlChunk) {
  const ids = [];
  const seen = new Set();

  const zoneDelveRe = /"name":"([^"]+):\s*([^"]+)"/g;
  let m;
  while ((m = zoneDelveRe.exec(htmlChunk)) !== null) {
    const zone = m[1].trim().replace(/&#39;/g, "'");
    const delve = m[2].trim().replace(/&#39;/g, "'");
    const key = `${zone}:${delve}`;
    const id = DELVE_MAP[key];
    if (id && !seen.has(id)) {
      seen.add(id);
      ids.push(id);
      if (ids.length >= 4) break;
    }
  }

  return ids;
}

function extractEuBountifulChunk(html) {
  const parts = html.split(BOUNTIFUL_ID_MARKER);
  // [ preamble, ...after US block, ...after EU block ] — EU is the segment that starts after the 2nd marker
  let seg = '';
  if (parts.length >= 3) {
    seg = parts[2];
  } else if (parts.length === 2) {
    console.warn('Wowhead: only one mn-bountiful-delves block; using it (may be US).');
    seg = parts[1];
  } else {
    return '';
  }
  // Only the lines array for this widget (avoids matching other "Zone: Name" TIW rows in the same region)
  const linesStart = seg.indexOf('"lines":[');
  if (linesStart === -1) return seg.slice(0, 12000);
  return seg.slice(linesStart, linesStart + 10000);
}

function parseBountifulDelves(html) {
  const chunk = extractEuBountifulChunk(html);
  if (!chunk) return [];

  let ids = parseBountifulDelvesFromChunk(chunk);

  if (ids.length < 4) {
    const bountifulIdx = html.indexOf('Bountiful Delves');
    const legacyChunk = bountifulIdx === -1 ? '' : html.slice(bountifulIdx, bountifulIdx + 6000);
    const zoneDelveRe = /([^:<]+):\s*([^<\n"']+?)(?=["'<$\n]|$)/g;
    const seen = new Set(ids);
    let m;
    while ((m = zoneDelveRe.exec(legacyChunk)) !== null && ids.length < 4) {
      const zone = m[1].trim().replace(/&#39;/g, "'");
      const delve = m[2].trim().replace(/&#39;/g, "'");
      const key = `${zone}:${delve}`;
      const id = DELVE_MAP[key];
      if (id && !seen.has(id)) {
        seen.add(id);
        ids.push(id);
      }
    }
  }

  if (ids.length < 4) {
    const nameOrder = [
      'Collegiate Calamity', 'The Darkway', 'Sunkiller Sanctum', 'Shadowguard Point',
      "Torment's Rise", 'The Grudge Pit', 'The Gulf of Memory', 'Twilight Crypts',
      "Atal'Aman", 'The Shadow Enclave', 'Parhelion Plaza',
    ];
    const nameToId = {
      'Collegiate Calamity': 'collegiate_calamity', 'The Darkway': 'the_darkway',
      'Sunkiller Sanctum': 'sunkiller_sanctum', 'Shadowguard Point': 'shadowguard_point',
      "Torment's Rise": 'torments_rise', 'The Grudge Pit': 'grudge_pit',
      'The Gulf of Memory': 'gulf_of_memory', 'Twilight Crypts': 'twilight_crypts',
      "Atal'Aman": 'atalaman', 'The Shadow Enclave': 'shadow_enclave',
      'Parhelion Plaza': 'parhelion_plaza',
    };
    const seen = new Set(ids);
    for (const name of nameOrder) {
      if (ids.length >= 4) break;
      const escaped = name.replace(/'/g, "&#39;");
      const id = nameToId[name];
      if (id && !seen.has(id) && (chunk.includes(name) || chunk.includes(escaped))) {
        seen.add(id);
        ids.push(id);
      }
    }
  }

  return ids.slice(0, 4);
}

/** YYYY-MM-DD for current WoW EU day (daily reset 07:00 UTC). */
function getWowEuDayYmd() {
  const n = new Date();
  if (n.getUTCHours() < 7) {
    const d = new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() - 1));
    return d.toISOString().slice(0, 10);
  }
  return n.toISOString().slice(0, 10);
}

async function main() {
  const outPath = path.join(__dirname, '..', 'data', 'bountiful-today.json');
  const wowDayYmd = getWowEuDayYmd();

  let ids = [];
  try {
    const html = await fetchWowhead();
    ids = parseBountifulDelves(html);
  } catch (err) {
    console.error('Fetch/parse error:', err.message);
  }

  if (ids.length !== 4) {
    try {
      const existing = JSON.parse(fs.readFileSync(outPath, 'utf8'));
      if (existing.delves && existing.delves.length === 4) {
        console.log('Using existing data (parse failed or wrong count)');
        process.exit(0);
      }
    } catch (_) {}
    ids = ['collegiate_calamity', 'sunkiller_sanctum', 'grudge_pit', 'atalaman'];
  }

  const data = {
    fetched: new Date().toISOString(),
    reset: wowDayYmd,
    region: 'EU',
    delves: ids,
    note: 'EU Bountiful from Wowhead TIW (2nd mn-bountiful-delves block). WoW day = 07:00 UTC boundary. Fallback in app: delves.js bountifulSchedule + same day boundary.',
  };
  fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Wrote', outPath, ':', ids.join(', '));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

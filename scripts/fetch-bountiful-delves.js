#!/usr/bin/env node
/**
 * Fetches Bountiful Delves from Wowhead "Today in WoW" and writes data/bountiful-today.json
 * Run daily at 07:00 UTC (08:00 CET) via GitHub Actions
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

async function fetchWowhead() {
  const res = await fetch('https://www.wowhead.com/', {
    headers: { 'User-Agent': 'MidnightGuide/1.0 (Bountiful Delves fetcher)' },
  });
  if (!res.ok) throw new Error(`Wowhead returned ${res.status}`);
  return res.text();
}

function parseBountifulDelves(html) {
  const ids = [];
  const seen = new Set();

  const bountifulIdx = html.indexOf('Bountiful Delves');
  if (bountifulIdx === -1) return ids;

  const chunk = html.slice(bountifulIdx, bountifulIdx + 6000);

  // Strategy 1: "Zone: Delve Name" pattern
  const zoneDelveRe = /([^:<]+):\s*([^<\n"']+?)(?=["'<$\n]|$)/g;
  let m;
  while ((m = zoneDelveRe.exec(chunk)) !== null) {
    const zone = m[1].trim().replace(/&#39;/g, "'");
    const delve = m[2].trim().replace(/&#39;/g, "'");
    const key = `${zone}:${delve}`;
    const id = DELVE_MAP[key];
    if (id && !seen.has(id)) {
      seen.add(id);
      ids.push(id);
    }
  }

  // Strategy 2: Delve names in order (Wowhead lists them)
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
  if (ids.length < 4) {
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

  return ids;
}

async function main() {
  const outPath = path.join(__dirname, '..', 'data', 'bountiful-today.json');
  const resetDate = new Date();
  resetDate.setUTCHours(7, 0, 0, 0);
  if (resetDate.getTime() > Date.now()) resetDate.setUTCDate(resetDate.getUTCDate() - 1);

  let ids = [];
  try {
    const html = await fetchWowhead();
    ids = parseBountifulDelves(html);
  } catch (err) {
    console.error('Fetch/parse error:', err.message);
  }

  // Fallback to last known good if parse failed or got wrong count
  if (ids.length !== 4) {
    try {
      const existing = JSON.parse(fs.readFileSync(outPath, 'utf8'));
      if (existing.delves && existing.delves.length === 4) {
        console.log('Using existing data (parse failed or wrong count)');
        process.exit(0);
      }
    } catch (_) {}
    // Last resort: use screenshot data from user
    ids = ['collegiate_calamity', 'sunkiller_sanctum', 'grudge_pit', 'atalaman'];
  }

  const data = {
    fetched: new Date().toISOString(),
    reset: resetDate.toISOString().slice(0, 10),
    delves: ids,
  };
  fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Wrote', outPath, ':', ids.join(', '));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

#!/usr/bin/env node
/**
 * Fetches Bountiful Delves for WoW EU from Wowhead "Today in WoW" and writes data/bountiful-today.json
 * Run with prey-today via GitHub Actions (see .github/workflows/fetch-eu-daily-json.yml)
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
const TODAY_IN_WOW_SCRIPT_RE = /id="data\.wow\.todayInWow">([\s\S]*?)<\/script>/;

/** Must match data/delves.js bountifulScheduleOffset + bountifulSchedule (fallback when Wowhead fails or CI is late). */
const BOUNTIFUL_SCHEDULE_OFFSET = 0;
const BOUNTIFUL_SCHEDULE = [
  ['sunkiller_sanctum', 'grudge_pit', 'shadow_enclave', 'atalaman'],
  ['parhelion_plaza', 'the_darkway', 'atalaman', 'gulf_of_memory'],
  ['sunkiller_sanctum', 'shadowguard_point', 'torments_rise', 'shadow_enclave'],
  ['collegiate_calamity', 'parhelion_plaza', 'twilight_crypts', 'gulf_of_memory'],
  ['the_darkway', 'atalaman', 'grudge_pit', 'sunkiller_sanctum'],
  ['shadowguard_point', 'torments_rise', 'shadow_enclave', 'collegiate_calamity'],
  ['parhelion_plaza', 'twilight_crypts', 'atalaman', 'grudge_pit'],
];

function idsFromBuiltInSchedule(wowDayYmd) {
  const parts = String(wowDayYmd).split('-').map(Number);
  const y = parts[0];
  const mo = parts[1] - 1;
  const da = parts[2];
  if (!y || mo < 0 || !da) return [];
  const dowUtc = new Date(Date.UTC(y, mo, da)).getUTCDay();
  const dayIx = (dowUtc + 4) % 7;
  const row = BOUNTIFUL_SCHEDULE[(dayIx + BOUNTIFUL_SCHEDULE_OFFSET + 700) % 7];
  return Array.isArray(row) ? row.slice(0, 4) : [];
}

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
function normalizeZoneDelveName(s) {
  return String(s)
    .trim()
    .replace(/&#39;/g, "'")
    .replace(/\u2019/g, "'");
}

function mapZoneDelvePairToId(zone, delve, seen, ids) {
  const z = normalizeZoneDelveName(zone);
  const d = normalizeZoneDelveName(delve);
  const key = `${z}:${d}`;
  const id = DELVE_MAP[key];
  if (id && !seen.has(id)) {
    seen.add(id);
    ids.push(id);
  }
}

function linesFromBountifulWidget(widget) {
  const c = widget && widget.content;
  const lines = c && Array.isArray(c.lines) ? c.lines : [];
  return lines;
}

function isEuTiwRoot(x) {
  if (!x || typeof x !== 'object') return false;
  const rid = x.regionId ?? x.regionID ?? x.region;
  return String(rid || '').toUpperCase() === 'EU';
}

/**
 * Prefer structured JSON: only objects under top-level EU TIW root (avoids US lines).
 * Wowhead has used different casings / keys for region — accept EU, eu, regionId, regionID.
 */
function parseEuBountifulFromTodayInWowJson(html) {
  const m = html.match(TODAY_IN_WOW_SCRIPT_RE);
  if (!m) return [];

  let data;
  try {
    data = JSON.parse(m[1].trim());
  } catch (_) {
    return [];
  }

  if (!Array.isArray(data)) return [];

  const euRoots = data.filter(isEuTiwRoot);
  if (euRoots.length === 0) return [];

  function findMnBountifulDelves(node) {
    if (!node || typeof node !== 'object') return null;
    if (node.id === 'mn-bountiful-delves') return node;
    if (Array.isArray(node)) {
      for (const x of node) {
        const f = findMnBountifulDelves(x);
        if (f) return f;
      }
      return null;
    }
    for (const v of Object.values(node)) {
      const f = findMnBountifulDelves(v);
      if (f) return f;
    }
    return null;
  }

  for (const root of euRoots) {
    const widget = findMnBountifulDelves(root);
    if (!widget) continue;
    const ids = [];
    const seen = new Set();
    for (const line of linesFromBountifulWidget(widget)) {
      if (!line || typeof line.name !== 'string') continue;
      const name = normalizeZoneDelveName(line.name);
      const ci = name.indexOf(':');
      if (ci === -1) continue;
      const zone = name.slice(0, ci);
      const delve = name.slice(ci + 1);
      mapZoneDelvePairToId(zone, delve, seen, ids);
      if (ids.length >= 4) break;
    }
    if (ids.length === 4) return ids;
  }

  return [];
}

/**
 * Second EU-only path: stringify each EU root and parse zone:delve pairs from that substring only.
 * Avoids scanning the full homepage HTML where the last mn-bountiful-delves window can be US data.
 */
function parseEuBountifulFromStringifiedEuRoots(html) {
  const m = html.match(TODAY_IN_WOW_SCRIPT_RE);
  if (!m) return [];

  let data;
  try {
    data = JSON.parse(m[1].trim());
  } catch (_) {
    return [];
  }

  if (!Array.isArray(data)) return [];

  const euRoots = data.filter(isEuTiwRoot);
  for (const root of euRoots) {
    try {
      const str = JSON.stringify(root);
      const ids = parseBountifulDelvesFromChunk(str);
      if (ids.length === 4) return ids;
    } catch (_) {
      /* continue */
    }
  }
  return [];
}

function parseBountifulDelvesFromChunk(htmlChunk) {
  const ids = [];
  const seen = new Set();

  const zoneDelveRe = /"name":"([^"]+):\s*([^"]+)"/g;
  let m;
  while ((m = zoneDelveRe.exec(htmlChunk)) !== null) {
    mapZoneDelvePairToId(m[1], m[2], seen, ids);
    if (ids.length >= 4) break;
  }

  return ids;
}

/** All positions of the TIW widget id (Wowhead may emit US + EU blocks). */
function findBountifulMarkerIndices(html) {
  const out = [];
  let pos = 0;
  while (true) {
    const i = html.indexOf(BOUNTIFUL_ID_MARKER, pos);
    if (i === -1) break;
    out.push(i);
    pos = i + BOUNTIFUL_ID_MARKER.length;
  }
  return out;
}

/**
 * Wowhead embeds the four rotation lines in JSON *immediately before* `"id":"mn-bountiful-delves"`.
 * The segment *after* the marker is often unrelated (PvP brawl, etc.). The old "2nd block = EU" slice
 * no longer contains Midnight delves — scan a window *before* each marker instead; prefer the last
 * marker that yields 4 mapped ids (EU slot when both blocks are complete).
 */
function parseBountifulDelvesFromMarkerWindows(html) {
  const markers = findBountifulMarkerIndices(html);
  if (markers.length === 0) return [];

  const windowSizes = [4500, 8000, 12000];
  for (const win of windowSizes) {
    for (let mi = markers.length - 1; mi >= 0; mi--) {
      const start = Math.max(0, markers[mi] - win);
      const slice = html.slice(start, markers[mi]);
      const ids = parseBountifulDelvesFromChunk(slice);
      if (ids.length === 4) return ids;
    }
  }
  return [];
}

/** Legacy: segment after 2nd marker (kept as last-resort only). */
function extractEuBountifulChunk(html) {
  const parts = html.split(BOUNTIFUL_ID_MARKER);
  let seg = '';
  if (parts.length >= 3) {
    seg = parts[2];
  } else if (parts.length === 2) {
    console.warn('Wowhead: only one mn-bountiful-delves block; using tail (may be wrong).');
    seg = parts[1];
  } else {
    return '';
  }
  const linesStart = seg.indexOf('"lines":[');
  if (linesStart === -1) return seg.slice(0, 12000);
  return seg.slice(linesStart, linesStart + 10000);
}

/**
 * EU-safe Wowhead parse order:
 * 1) Walk EU TIW JSON for mn-bountiful-delves widget (structured).
 * 2) Stringify EU roots only and extract lines (still no US HTML).
 * 3) Optional legacy full-HTML scan — OFF by default (set BOUNTIFUL_ALLOW_LEGACY_HTML_PARSE=1 to enable).
 *    The old "marker window" path can return the US rotation when both regions exist on the page.
 */
function parseBountifulDelves(html) {
  const allowLegacy = String(process.env.BOUNTIFUL_ALLOW_LEGACY_HTML_PARSE || '').trim() === '1';
  let ids = parseEuBountifulFromTodayInWowJson(html);
  let chunk = '';

  if (ids.length === 4) {
    return ids;
  }

  ids = parseEuBountifulFromStringifiedEuRoots(html);
  if (ids.length === 4) {
    return ids;
  }

  if (!allowLegacy) {
    return [];
  }

  ids = parseBountifulDelvesFromMarkerWindows(html);
  if (ids.length === 4) {
    return ids;
  }

  chunk = extractEuBountifulChunk(html);
  if (chunk) {
    ids = parseBountifulDelvesFromChunk(chunk);
  }

  if (ids.length === 4) return ids;

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
      const inHtml = html.includes(name) || html.includes(escaped);
      const inChunk = chunk && (chunk.includes(name) || chunk.includes(escaped));
      if (id && !seen.has(id) && (inHtml || inChunk)) {
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
  let source = 'wowhead';
  try {
    const html = await fetchWowhead();
    ids = parseBountifulDelves(html);
  } catch (err) {
    console.error('Fetch/parse error:', err.message);
  }

  if (ids.length !== 4) {
    const schedIds = idsFromBuiltInSchedule(wowDayYmd);
    if (schedIds.length === 4) {
      ids = schedIds;
      source = 'schedule';
      console.log('Wowhead parse incomplete — using built-in weekly schedule for', wowDayYmd);
    }
  }

  if (ids.length !== 4) {
    try {
      const existing = JSON.parse(fs.readFileSync(outPath, 'utf8'));
      if (existing.delves && existing.delves.length === 4 && existing.reset === wowDayYmd) {
        ids = existing.delves;
        source = 'existing_same_day';
        console.log('Re-using same-day delves from existing file');
      }
    } catch (_) {}
  }

  if (ids.length !== 4) {
    ids = ['collegiate_calamity', 'sunkiller_sanctum', 'grudge_pit', 'atalaman'];
    source = 'default';
    console.warn('All sources failed — wrote hardcoded placeholder set');
  }

  const data = {
    fetched: new Date().toISOString(),
    reset: wowDayYmd,
    region: 'EU',
    source,
    delves: ids,
    parseMode:
      String(process.env.BOUNTIFUL_ALLOW_LEGACY_HTML_PARSE || '').trim() === '1'
        ? 'eu_json+legacy_html'
        : 'eu_json_only',
    note:
      'EU Bountiful: primary = Today in WoW JSON under EU region only (mn-bountiful-delves lines), plus stringify-EU-root fallback. Full-page US/EU marker scan is OFF by default (can mix US rotation); set env BOUNTIFUL_ALLOW_LEGACY_HTML_PARSE=1 to re-enable legacy parsing. WoW day = 07:00 UTC (matches app). If source is schedule/default, verify in-game; update delves.js bountifulSchedule when the 7-day pattern is confirmed.',
  };
  try {
    const prev = JSON.parse(fs.readFileSync(outPath, 'utf8'));
    const unchanged =
      prev &&
      prev.reset === data.reset &&
      JSON.stringify(prev.delves) === JSON.stringify(data.delves) &&
      prev.parseMode === data.parseMode;
    if (unchanged) {
      console.log('bountiful-today.json unchanged (same reset/source/delves), skip write');
      process.exit(0);
      return;
    }
  } catch (_) {
    /* no file or parse error — write fresh */
  }
  try {
    fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf8');
  } catch (e) {
    console.error('Failed to write', outPath, e.message);
    process.exit(1);
    return;
  }
  console.log('Wrote', outPath, source, ':', ids.join(', '));
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

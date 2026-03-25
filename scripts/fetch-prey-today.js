#!/usr/bin/env node
/**
 * Writes data/prey-today.json — EU Prey "day" = 07:00 Europe/Berlin (same as js/preyRotation.js).
 *
 * 1) Tries Wowhead homepage for a future TIW block (id contains mn-prey / daily prey) — not present yet.
 * 2) Else computes the same seeded 12-target set as the app fallback (midnight-prey-v1- + YYYY-MM-DD).
 *
 * GitHub Actions: daily after EU morning (see .github/workflows/fetch-prey-today.yml).
 */

const fs = require('fs');
const path = require('path');

const ACTIVE_PREY_COUNT = 12;
const SEED_PREFIX = 'midnight-prey-v1-';
const RESET_HOUR_BERLIN = 7;

function berlinPartsAtMs(ms) {
  const d = new Date(ms);
  const f = new Intl.DateTimeFormat('en', {
    timeZone: 'Europe/Berlin',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });
  const p = {};
  for (const x of f.formatToParts(d)) {
    if (x.type !== 'literal') p[x.type] = x.value;
  }
  return {
    y: +p.year,
    mo: +p.month,
    d: +p.day,
    h: +p.hour,
    mi: +p.minute,
    se: +p.second,
  };
}

function pad2(n) {
  return String(n).padStart(2, '0');
}

function getPreyRotationDayKey(now = new Date()) {
  let t = now.getTime();
  for (let g = 0; g < 48; g++) {
    const b = berlinPartsAtMs(t);
    if (b.h >= RESET_HOUR_BERLIN) {
      return `${b.y}-${pad2(b.mo)}-${pad2(b.d)}`;
    }
    t -= 3600000;
  }
  const fb = berlinPartsAtMs(now.getTime());
  return `${fb.y}-${pad2(fb.mo)}-${pad2(fb.d)}`;
}

function hashStringToSeed(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWithSeed(arr, seedString) {
  const seed = hashStringToSeed(seedString);
  const a = arr.slice();
  const rnd = mulberry32(seed);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function parsePreyPoolIdsFromTargetsFile() {
  const p = path.join(__dirname, '..', 'data', 'preyTargets.js');
  const text = fs.readFileSync(p, 'utf8');
  const ids = [];
  const re = /^\s*id:\s*'([a-z0-9_]+)'/gm;
  let m;
  while ((m = re.exec(text)) !== null) ids.push(m[1]);
  return [...new Set(ids)];
}

/** Wowhead quest/NPC url -> optional app id (extend when TIW exposes Prey). */
const WOWHEAD_PREY_NAME_TO_ID = {
  // Example: 'Senior Tinker Oszwold': 'senior_tinker_oszwold',
};

/**
 * If Wowhead adds e.g. "id":"mn-daily-prey" with lines, parse here.
 * Returns 12 ids or null.
 */
function tryParseWowheadDailyPrey(html) {
  const markers = ['"id":"mn-daily-prey', '"id":"mn-prey-hunts', '"id":"mn-active-prey'];
  let seg = '';
  for (const mk of markers) {
    const idx = html.indexOf(mk);
    if (idx !== -1) {
      seg = html.slice(idx, idx + 15000);
      break;
    }
  }
  if (!seg) return null;

  const linesStart = seg.indexOf('"lines":[');
  const chunk = linesStart === -1 ? seg.slice(0, 12000) : seg.slice(linesStart, linesStart + 12000);

  const ids = [];
  const seen = new Set();
  const nameRe = /"name":"([^"]+)"/g;
  let m;
  while ((m = nameRe.exec(chunk)) !== null && ids.length < ACTIVE_PREY_COUNT) {
    const raw = m[1].replace(/\\"/g, '"').replace(/&#39;/g, "'");
    const id = WOWHEAD_PREY_NAME_TO_ID[raw];
    if (id && !seen.has(id)) {
      seen.add(id);
      ids.push(id);
    }
  }
  return ids.length === ACTIVE_PREY_COUNT ? ids : null;
}

async function fetchWowheadHome() {
  const res = await fetch('https://www.wowhead.com/', {
    headers: { 'User-Agent': 'MidnightGuide/1.0 (Prey fetcher; EU)' },
  });
  if (!res.ok) throw new Error(`Wowhead ${res.status}`);
  return res.text();
}

function computeTodayIds(dayKey) {
  const pool = parsePreyPoolIdsFromTargetsFile();
  if (pool.length <= ACTIVE_PREY_COUNT) return pool.slice();
  return shuffleWithSeed(pool, SEED_PREFIX + dayKey).slice(0, ACTIVE_PREY_COUNT);
}

async function main() {
  const outPath = path.join(__dirname, '..', 'data', 'prey-today.json');
  const dayKey = getPreyRotationDayKey();

  let source = 'computed';
  let ids = [];

  try {
    const html = await fetchWowheadHome();
    const wh = tryParseWowheadDailyPrey(html);
    if (wh) {
      ids = wh;
      source = 'wowhead';
    }
  } catch (err) {
    console.warn('Wowhead fetch/parse:', err.message);
  }

  if (ids.length !== ACTIVE_PREY_COUNT) {
    ids = computeTodayIds(dayKey);
    source = 'computed';
  }

  const pool = parsePreyPoolIdsFromTargetsFile();
  const poolSet = new Set(pool);
  const invalid = ids.filter((id) => !poolSet.has(id));
  if (invalid.length) {
    console.warn('Invalid ids from Wowhead, falling back to computed:', invalid.join(', '));
    ids = computeTodayIds(dayKey);
    source = 'computed';
  }

  if (ids.length !== ACTIVE_PREY_COUNT) {
    try {
      const existing = JSON.parse(fs.readFileSync(outPath, 'utf8'));
      if (Array.isArray(existing.targets) && existing.targets.length === ACTIVE_PREY_COUNT) {
        console.log('Keeping existing prey-today.json (could not build a new list)');
        process.exit(0);
      }
    } catch (_) {}
    console.error('prey-today: expected', ACTIVE_PREY_COUNT, 'targets, got', ids.length);
    process.exit(1);
  }

  const data = {
    fetched: new Date().toISOString(),
    reset: dayKey,
    region: 'EU',
    resetTimezone: 'Europe/Berlin',
    resetHourLocal: RESET_HOUR_BERLIN,
    source,
    targets: ids,
    note:
      source === 'wowhead'
        ? 'EU daily Prey targets from Wowhead Today in WoW (when widget exists).'
        : 'Computed set = same seed as app fallback (midnight-prey-v1- + reset date). Wowhead has no daily Prey TIW block yet; this file updates daily via GitHub Actions so clients always network-fetch a fresh list. When Wowhead adds a widget, extend WOWHEAD_PREY_NAME_TO_ID + tryParseWowheadDailyPrey.',
  };

  fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Wrote', outPath, source, ids.join(', '));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

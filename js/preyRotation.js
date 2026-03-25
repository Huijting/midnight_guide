/**
 * Prey daily rotation — EU reset 07:00 Europe/Berlin (CET/CEST).
 * Same calendar "prey day" and same 12 active targets for all users (date-seeded shuffle).
 */
(function () {
  'use strict';

  var ACTIVE_PREY_COUNT = 12;
  var RESET_HOUR_BERLIN = 7;

  function berlinPartsAtMs(ms) {
    var d = new Date(ms);
    var f = new Intl.DateTimeFormat('en', {
      timeZone: 'Europe/Berlin',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false
    });
    var p = {};
    var parts = f.formatToParts(d);
    for (var i = 0; i < parts.length; i++) {
      var x = parts[i];
      if (x.type !== 'literal') p[x.type] = x.value;
    }
    return {
      y: +p.year,
      mo: +p.month,
      d: +p.day,
      h: +p.hour,
      mi: +p.minute,
      se: +p.second
    };
  }

  function pad2(n) {
    return String(n).padStart(2, '0');
  }

  /** Calendar day (YYYY-MM-DD) in Berlin for the current prey window (07:00–06:59 next day). */
  function getPreyRotationDayKey(now) {
    var t = now.getTime();
    for (var g = 0; g < 48; g++) {
      var b = berlinPartsAtMs(t);
      if (b.h >= RESET_HOUR_BERLIN) {
        return b.y + '-' + pad2(b.mo) + '-' + pad2(b.d);
      }
      t -= 3600000;
    }
    var fb = berlinPartsAtMs(now.getTime());
    return fb.y + '-' + pad2(fb.mo) + '-' + pad2(fb.d);
  }

  function hashStringToSeed(str) {
    var h = 2166136261 >>> 0;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function mulberry32(seed) {
    return function () {
      var t = (seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffleWithSeed(arr, seedString) {
    var seed = hashStringToSeed(seedString);
    var a = arr.slice();
    var rnd = mulberry32(seed);
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function getPreyTargetPoolIds() {
    var list = typeof PREY_TARGETS !== 'undefined' ? PREY_TARGETS : [];
    return list.map(function (t) {
      return t && t.id;
    }).filter(Boolean);
  }

  function getActivePreyTargetIdsForToday(now) {
    var pool = getPreyTargetPoolIds();
    if (pool.length <= ACTIVE_PREY_COUNT) return pool.slice();
    var key = getPreyRotationDayKey(now);
    var shuffled = shuffleWithSeed(pool, 'midnight-prey-v1-' + key);
    return shuffled.slice(0, ACTIVE_PREY_COUNT);
  }

  /** Map id list (e.g. from prey-today.json) to targets in that order. */
  function getActivePreyTargetsOrdered(ids) {
    if (!ids || !ids.length) return [];
    var map = {};
    var list = typeof PREY_TARGETS !== 'undefined' ? PREY_TARGETS : [];
    for (var i = 0; i < list.length; i++) {
      if (list[i] && list[i].id) map[list[i].id] = list[i];
    }
    var out = [];
    for (var j = 0; j < ids.length; j++) {
      if (map[ids[j]]) out.push(map[ids[j]]);
    }
    return out;
  }

  function getActivePreyTargetsForRotation(now) {
    var ids = getActivePreyTargetIdsForToday(now);
    var out = getActivePreyTargetsOrdered(ids);
    out.sort(function (a, b) {
      return (a.zoneOrder || 0) - (b.zoneOrder || 0) || (a.id || '').localeCompare(b.id || '');
    });
    return out;
  }

  /** Next 07:00:00 Europe/Berlin after `now` (UTC ms). */
  function getNextPreyResetUtcMs(now) {
    var start = now.getTime();
    var t = Math.ceil(start / 60000) * 60000;
    var max = start + 50 * 24 * 3600000;
    while (t <= max) {
      var b = berlinPartsAtMs(t);
      if (b.h === RESET_HOUR_BERLIN && b.mi === 0 && t > start) return t;
      t += 60000;
    }
    return start + 24 * 3600000;
  }

  function getMsUntilNextPreyResetCET(now) {
    var next = getNextPreyResetUtcMs(now);
    return Math.max(0, next - now.getTime());
  }

  window.getPreyRotationDayKey = function (n) {
    return getPreyRotationDayKey(n || new Date());
  };
  window.getActivePreyTargetIdsForToday = function (n) {
    return getActivePreyTargetIdsForToday(n || new Date());
  };
  window.getActivePreyTargetsForRotation = function (n) {
    return getActivePreyTargetsForRotation(n || new Date());
  };
  window.getActivePreyTargetsOrdered = getActivePreyTargetsOrdered;
  window.getNextPreyResetUtcMs = getNextPreyResetUtcMs;
  window.getMsUntilNextPreyResetCET = function (n) {
    return getMsUntilNextPreyResetCET(n || new Date());
  };

  console.log('Prey System Initialized: EU Reset 07:00 active.');
})();

// EU Prey dag-key = YYYY-MM-DD (zelfde als getPreyRotationDayKey: 07:00 Europe/Berlin).
// Gebruik wanneer de echte Hunt Table in-game afwijkt van onze computed seed (tot Wowhead/Blizzard een dagelijkse feed levert).
// Sync: scripts/fetch-prey-today.js (DAY_ENSURE_PREY_MAP) + applyPreyDayEnsureIds() in js/app.js
var PREY_DAY_ENSURE_IDS = {
  '2026-03-28': ['thornspeaker_edgath'],
};

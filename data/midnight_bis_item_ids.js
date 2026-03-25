/**
 * Midnight S1 BiS v3.2.7 — Wowhead item IDs (Season 1 / Voidspire–era range).
 *
 * Tier (4 slots): Method.gg Mythic tier Wowhead bonus 13335:12806 + ilvl hint.
 * Non-tier raid/M+: MIDNIGHT_RAID_WOWHEAD_BONUS (7359:1472:1507) + ilvl hint.
 * Flasks: Wow-professions / Method.gg Sin’dorei flasks (+Haste / +Mastery / +Crit by role bucket).
 * Food: Method.gg Midnight food list (Royal Roast, Hearthflame Supper, Silvermoon Standard).
 */
(function initMidnightBisItemIds() {
  const G = typeof window !== 'undefined' ? window : globalThis;

  /** Sunwalker’s Call tier — Mythic track tooltip (Method.gg tier → Wowhead). */
  G.MIDNIGHT_TIER_WOWHEAD_BONUS = '&bonus=13335:12806&ilvl=289';

  /** Non-tier raid / vault / M+ pieces (Mythic 1/4 style chain). */
  G.MIDNIGHT_RAID_WOWHEAD_BONUS = '&bonus=7359:1472:1507&ilvl=289';

  /** @deprecated Use MIDNIGHT_RAID_WOWHEAD_BONUS; kept for older references. */
  G.MIDNIGHT_BIS_WOWHEAD_BONUS = G.MIDNIGHT_RAID_WOWHEAD_BONUS;

  /** Consumables: bonus only (full ilvl=289 on food/flask can skew tooltips). */
  G.MIDNIGHT_CONSUMABLE_WOWHEAD_EXTRA = '&bonus=7359:1472:1507';

  G.MIDNIGHT_CLASS_TIER_IDS = {
    'Death Knight': { head: 249970, shoulder: 249968, chest: 249973, hands: 249971 },
    'Demon Hunter': { head: 250033, shoulder: 250031, chest: 250036, hands: 250034 },
    Druid: { head: 250024, shoulder: 250022, chest: 250027, hands: 250025 },
    Evoker: { head: 249997, shoulder: 249995, chest: 250000, hands: 249998 },
    Hunter: { head: 249988, shoulder: 249986, chest: 249991, hands: 249989 },
    Mage: { head: 250060, shoulder: 250058, chest: 250063, hands: 250061 },
    Monk: { head: 250015, shoulder: 250013, chest: 250018, hands: 250016 },
    Paladin: { head: 249961, shoulder: 249959, chest: 249964, hands: 249962 },
    Priest: { head: 250051, shoulder: 250049, chest: 250054, hands: 250052 },
    Rogue: { head: 250006, shoulder: 250004, chest: 250009, hands: 250007 },
    Shaman: { head: 249979, shoulder: 249977, chest: 249982, hands: 249980 },
    Warlock: { head: 250042, shoulder: 250040, chest: 250045, hands: 250043 },
    Warrior: { head: 249952, shoulder: 249950, chest: 249955, hands: 249953 },
  };

  const raidWh = G.MIDNIGHT_RAID_WOWHEAD_BONUS || '';
  const consWh = G.MIDNIGHT_CONSUMABLE_WOWHEAD_EXTRA || '';

  /** Shared non-tier slots (all specs). */
  G.MIDNIGHT_V31_SHARED_ARMOR = {
    neck: { id: 240950, ilvl: '289', wh: raidWh },
    back: { id: 249335, ilvl: '289', wh: raidWh },
    wrist: { id: 251203, ilvl: '289', wh: raidWh },
    waist: { id: 249380, ilvl: '289', wh: raidWh },
    legs: { id: 237993, ilvl: '289', wh: raidWh },
    feet: { id: 257218, ilvl: '289', wh: raidWh },
    ring1: { id: 249919, ilvl: '289', wh: raidWh },
    ring2: { id: 249336, ilvl: '289', wh: raidWh },
  };

  G.MIDNIGHT_V31_WEAPONS = {
    hunter_bow: 262673,
    plate_tank_mh: 257250,
    plate_tank_oh: 263481,
    agi_tank_2h: 257251,
    str_dps_2h: 251117,
    staff_caster: 237730,
    agi_mh: 262669,
    agi_oh: 262669,
    dh_glaive: 257289,
  };

  G.MIDNIGHT_V31_TRINKETS = {
    tank_stare: 249346,
    tank_nullcore: 249356,
    dps_odium: 246944,
    dps_eye: 249920,
    heal_voidspire: 257866,
    heal_breath: 237742,
  };

  /**
   * Per primary-stat bucket (see data/specs.js MIDNIGHT_SPEC_PRIMARY_STAT).
   * Flask IDs: Method.gg / Wow-professions Sin’dorei flasks (secondary stat — Midnight has no +Str/+Agi/+Int combat flask line).
   * Food: Royal Roast = primary stat; Hearthflame Supper = Crit+Haste; Silvermoon Standard = Mastery+Vers (Method.gg food table).
   */
  G.MIDNIGHT_CONSUMABLE_PROFILES = {
    str: {
      flask: { name: 'Flask of the Sunwell', id: 241324, wowheadExtra: consWh },
      potion: { name: 'Void-Tinged Adrenaline', id: 241292, wowheadExtra: consWh },
      food: { name: 'Royal Roast', id: 242275, wowheadExtra: consWh },
    },
    agi: {
      flask: { name: 'Flask of the Sunwell', id: 241327, wowheadExtra: consWh },
      potion: { name: 'Void-Tinged Adrenaline', id: 241292, wowheadExtra: consWh },
      food: { name: 'Eversong Spiced Ribs', id: 242295, wowheadExtra: consWh },
    },
    int: {
      flask: { name: 'Flask of the Sunwell', id: 241323, wowheadExtra: consWh },
      potion: { name: 'Void-Tinged Adrenaline', id: 241292, wowheadExtra: consWh },
      food: { name: 'Candied Amber', id: 242305, wowheadExtra: consWh },
    },
  };

  /** Legacy single-object fallback (pre-profile). */
  G.MIDNIGHT_V31_CONSUMABLES = {
    flask: { name: 'Flask of the Sunwell', id: 241327, wowheadExtra: consWh },
    potion: { name: 'Void-Tinged Adrenaline', id: 241292, wowheadExtra: consWh },
    food: { name: 'Royal Roast', id: 242275, wowheadExtra: consWh },
  };
})();

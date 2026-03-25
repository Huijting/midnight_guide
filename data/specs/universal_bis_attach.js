/**
 * Midnight S1 — universal 16-slot bisGear per spec (v3.2.7). Fresh array + row objects per spec.
 * Depends on data/midnight_bis_item_ids.js.
 */
(function attachUniversalBisGear() {
  const TIER_NAME = "Sunwalker's Call (Tier)";
  const SRC = {
    tier: { en: 'Midnight S1 — Tier (Vault / Catalyst)', nl: 'Midnight S1 — Tier (Vault / Catalyst)' },
    shared: { en: 'Voidspire / Quel’Thalas / Crafting (285–289)', nl: 'Voidspire / Quel’Thalas / Crafting (285–289)' },
    wep: { en: 'Raids / M+ / Great Vault', nl: 'Raids / M+ / Great Vault' },
    trink: { en: 'Raids / Delves / Vendors', nl: 'Raids / Delves / Vendors' },
  };

  const HEAL_SPEC_IDS = new Set([
    'discipline_priest', 'holy_priest', 'holy_paladin', 'restoration_druid',
    'restoration_shaman', 'mistweaver_monk', 'preservation_evoker',
  ]);

  const INT_DPS_SPEC_IDS = new Set([
    'arcane_mage', 'fire_mage', 'frost_mage',
    'affliction_warlock', 'demonology_warlock', 'destruction_warlock',
    'shadow_priest', 'balance_druid', 'elemental_shaman',
    'devastation_evoker', 'augmentation_evoker',
  ]);

  function tierMap(spec) {
    const M = typeof MIDNIGHT_CLASS_TIER_IDS !== 'undefined' ? MIDNIGHT_CLASS_TIER_IDS : {};
    return M[spec.class] || M.Warrior;
  }

  function sharedArmor() {
    return typeof MIDNIGHT_V31_SHARED_ARMOR !== 'undefined' ? MIDNIGHT_V31_SHARED_ARMOR : {};
  }

  function weapons() {
    return typeof MIDNIGHT_V31_WEAPONS !== 'undefined' ? MIDNIGHT_V31_WEAPONS : {};
  }

  function trinks() {
    return typeof MIDNIGHT_V31_TRINKETS !== 'undefined' ? MIDNIGHT_V31_TRINKETS : {};
  }

  function raidWhSuffix() {
    if (typeof MIDNIGHT_RAID_WOWHEAD_BONUS !== 'undefined' && MIDNIGHT_RAID_WOWHEAD_BONUS) {
      return MIDNIGHT_RAID_WOWHEAD_BONUS;
    }
    return typeof MIDNIGHT_BIS_WOWHEAD_BONUS !== 'undefined' ? MIDNIGHT_BIS_WOWHEAD_BONUS : '';
  }

  function tierWhSuffix() {
    if (typeof MIDNIGHT_TIER_WOWHEAD_BONUS !== 'undefined' && MIDNIGHT_TIER_WOWHEAD_BONUS) {
      return MIDNIGHT_TIER_WOWHEAD_BONUS;
    }
    return raidWhSuffix();
  }

  function R(slotEn, slotNl, name, source, itemId, ilvl, wowheadExtra) {
    const row = {
      slot: { en: slotEn, nl: slotNl },
      name,
      ilvl: ilvl || '289',
      source: { en: source.en, nl: source.nl },
    };
    if (itemId != null && itemId !== '') {
      const n = Number(itemId);
      if (!Number.isNaN(n)) row.itemId = n;
    }
    if (wowheadExtra) row.wowheadExtra = wowheadExtra;
    return row;
  }

  function emptyOff() {
    return R('Off-Hand', 'Off-hand', '—', { en: '—', nl: '—' }, null, '—');
  }

  function resolveTrinkets(spec) {
    const T = trinks();
    const tSrc = SRC.trink;
    const rw = raidWhSuffix();
    if (spec.role === 'tank') {
      return [
        R('Trinket 1', 'Trinket 1', "Vaelgor's Final Stare", tSrc, T.tank_stare, '289', rw),
        R('Trinket 2', 'Trinket 2', 'Voidcured Fanatical Nullcore', tSrc, T.tank_nullcore, '289', rw),
      ];
    }
    if (HEAL_SPEC_IDS.has(spec.id)) {
      return [
        R('Trinket 1', 'Trinket 1', 'Overflowing Voidspire', tSrc, T.heal_voidspire, '289', rw),
        R('Trinket 2', 'Trinket 2', "Fractillus' Last Breath", tSrc, T.heal_breath, '289', rw),
      ];
    }
    return [
      R('Trinket 1', 'Trinket 1', 'Mind-Fracturing Odium', tSrc, T.dps_odium, '289', rw),
      R('Trinket 2', 'Trinket 2', 'Eye of Midnight', tSrc, T.dps_eye, '289', rw),
    ];
  }

  function resolveWeapons(spec) {
    const W = weapons();
    const wSrc = SRC.wep;
    const rw = raidWhSuffix();
    const c = spec.class;
    const id = spec.id;

    if (c === 'Hunter') {
      return {
        main: R('Main Hand', 'Hoofdhand', "Sunstrider's Phoenix Bow", wSrc, W.hunter_bow, '289', rw),
        off: emptyOff(),
      };
    }

    if (spec.role === 'tank') {
      const plateTank = ['Paladin', 'Warrior', 'Death Knight'].includes(c);
      if (plateTank) {
        return {
          main: R('Main Hand', 'Hoofdhand', "Voidbreaker's Mace", wSrc, W.plate_tank_mh, '289', rw),
          off: R('Off-Hand', 'Off-hand', 'Eversong Protector', wSrc, W.plate_tank_oh, '289', rw),
        };
      }
      return {
        main: R('Main Hand', 'Hoofdhand', "Voidbreaker's Poleaxe", wSrc, W.agi_tank_2h, '289', rw),
        off: emptyOff(),
      };
    }

    if (HEAL_SPEC_IDS.has(id) || INT_DPS_SPEC_IDS.has(id)) {
      return {
        main: R('Main Hand', 'Hoofdhand', 'Voidglass Spire', wSrc, W.staff_caster, '289', rw),
        off: emptyOff(),
      };
    }

    if (['Paladin', 'Warrior', 'Death Knight'].includes(c)) {
      return {
        main: R('Main Hand', 'Hoofdhand', 'Whirling Voidcleaver', wSrc, W.str_dps_2h, '289', rw),
        off: emptyOff(),
      };
    }

    if (id === 'havoc_dh' || id === 'devourer_dh') {
      return {
        main: R('Main Hand', 'Hoofdhand', "Voidbreaker's Glaive", wSrc, W.dh_glaive, '289', rw),
        off: R('Off-Hand', 'Off-hand', "Voidbreaker's Glaive", wSrc, W.dh_glaive, '289', rw),
      };
    }

    return {
      main: R('Main Hand', 'Hoofdhand', 'Void-Touched Axe', wSrc, W.agi_mh, '289', rw),
      off: R('Off-Hand', 'Off-hand', 'Void-Touched Axe', wSrc, W.agi_oh, '289', rw),
    };
  }

  function buildBisGearForSpec(spec) {
    const tm = tierMap(spec);
    const sh = sharedArmor();
    const ss = SRC.shared;
    const w = resolveWeapons(spec);
    const [tr1, tr2] = resolveTrinkets(spec);
    const rw = raidWhSuffix();
    const tw = tierWhSuffix();

    const neck = sh.neck || { id: 240950, ilvl: '289', wh: rw };
    const back = sh.back || { id: 249335, ilvl: '289', wh: rw };
    const wrist = sh.wrist || { id: 251203, ilvl: '289', wh: rw };
    const waist = sh.waist || { id: 249380, ilvl: '289', wh: rw };
    const legs = sh.legs || { id: 237993, ilvl: '289', wh: rw };
    const feet = sh.feet || { id: 257218, ilvl: '289', wh: rw };
    const r1 = sh.ring1 || { id: 249919, ilvl: '289', wh: rw };
    const r2 = sh.ring2 || { id: 249336, ilvl: '289', wh: rw };

    return [
      R('Head', 'Hoofd', TIER_NAME, SRC.tier, tm.head, '289', tw),
      R('Neck', 'Hals', "Masterwork Sin'dorei Amulet", ss, neck.id, neck.ilvl, neck.wh || rw),
      R('Shoulder', 'Schouder', TIER_NAME, SRC.tier, tm.shoulder, '289', tw),
      R('Back', 'Rug', "Imperator's Banner", ss, back.id, back.ilvl, back.wh || rw),
      R('Chest', 'Borst', TIER_NAME, SRC.tier, tm.chest, '289', tw),
      R('Wrist', 'Pols', "Kasreth's Bindings", ss, wrist.id, wrist.ilvl, wrist.wh || rw),
      R('Hands', 'Handschoenen', TIER_NAME, SRC.tier, tm.hands, '289', tw),
      R('Waist', 'Taille', 'Hate-Tied Waistchain', ss, waist.id, waist.ilvl, waist.wh || rw),
      R('Legs', 'Broek', "Void-Scarred Captain's Greaves", ss, legs.id, legs.ilvl, legs.wh || rw),
      R('Feet', 'Voeten', "Voidbreaker's Sabatons", ss, feet.id, feet.ilvl, feet.wh || rw),
      R('Ring 1', 'Ring 1', "Sin'dorei Band of Hope", ss, r1.id, r1.ilvl, r1.wh || rw),
      R('Ring 2', 'Ring 2', 'Signet of the Starved Beast', ss, r2.id, r2.ilvl, r2.wh || rw),
      tr1,
      tr2,
      w.main,
      w.off,
    ];
  }

  if (typeof ALL_SPECS === 'undefined' || !Array.isArray(ALL_SPECS)) return;
  for (let i = 0; i < ALL_SPECS.length; i++) {
    ALL_SPECS[i].bisGear = buildBisGearForSpec(ALL_SPECS[i]);
  }
})();

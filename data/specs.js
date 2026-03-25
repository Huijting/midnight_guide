/**
 * data/specs.js — Midnight Guide spec metadata (v3.2.7).
 * Primary-stat bucket per combat spec for consumable routing (Thalassian flask + food picks).
 * Loaded before midnight_bis_item_ids.js / ui.js (see index.html).
 */
(function initSpecMeta() {
  const G = typeof window !== 'undefined' ? window : globalThis;

  /**
   * str  — Strength users (plate melee + DK)
   * agi  — Agility users
   * int  — Intellect users (casters + healers on int)
   */
  G.MIDNIGHT_SPEC_PRIMARY_STAT = {
    blood_dk: 'str',
    frost_dk: 'str',
    unholy_dk: 'str',
    arms_warrior: 'str',
    fury_warrior: 'str',
    protection_warrior: 'str',
    protection_paladin: 'str',
    ret_paladin: 'str',
    holy_paladin: 'int',
    bm_hunter: 'agi',
    mm_hunter: 'agi',
    survival_hunter: 'agi',
    assassination_rogue: 'agi',
    outlaw_rogue: 'agi',
    subtlety_rogue: 'agi',
    havoc_dh: 'agi',
    vengeance_dh: 'agi',
    devourer_dh: 'agi',
    brewmaster_monk: 'agi',
    windwalker_monk: 'agi',
    mistweaver_monk: 'int',
    feral_druid: 'agi',
    guardian_druid: 'agi',
    balance_druid: 'int',
    restoration_druid: 'int',
    enhancement_shaman: 'agi',
    elemental_shaman: 'int',
    restoration_shaman: 'int',
    arcane_mage: 'int',
    fire_mage: 'int',
    frost_mage: 'int',
    shadow_priest: 'int',
    discipline_priest: 'int',
    holy_priest: 'int',
    affliction_warlock: 'int',
    demonology_warlock: 'int',
    destruction_warlock: 'int',
    devastation_evoker: 'int',
    preservation_evoker: 'int',
    augmentation_evoker: 'int',
  };
})();

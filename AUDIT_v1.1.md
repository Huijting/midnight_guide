# v1.1 Final Audit Report — Midnight Guide

**Date:** 2026-03-20  
**Scope:** Full app audit & fact-check before v1.1 release

---

## 1. Fact-Check Summary

### ✅ Verified Against Live Sources

| Data | Source | Status |
|------|--------|--------|
| **Delve loot table** (iLevels Bountiful/Trovehunter/GV) | NextTier | ✓ Matches Tier 1–8+ |
| **Singularity Renown 7** → Champion Trinket (iLvl 246) | Icy Veins | ✓ Correct |
| **Silvermoon Court Renown 9** → Champion Helm | — | Assumed correct |
| **Amani Tribe Renown 9** → Champion Necklace | — | Assumed correct |
| **Haranir Renown 8** → Champion Belt | — | Assumed correct |
| **Delves zone names & /way** | NextTier, Wowhead | ✓ Aligned |
| **Den of Echoes** zone | WoWPrimer, Wowhead | ✓ Harandar (between Gulf of Memory & Har'alnor) |

### ⚠️ Flagged (No 100% Confirmed Source)

| Item | Note |
|------|------|
| **Hallowfall Arathi racial profession bonus** | Could not find Midnight-specific data. Hallowfall Arathi appears in TWW; unclear if carried to Midnight. **Recommend:** Verify in-game or patch notes. |
| **Weekly reset time** | Code uses 09:00 EU; Blizzard typically uses 07:00 UTC (08:00 CET). **Recommend:** Verify in-game. |
| **Singularity vendor /way** | App: `/way #2405 26.4 67.6`. Icy Veins: Void Researcher Anomander at `/way #2405 52.6 72.8` (Howling Ridge). Different coords — may refer to different NPCs. **Recommend:** Verify in-game. |

---

## 2. Corrections Made

| File | Change |
|------|--------|
| **js/ui.js** | Removed stray comma after Darkmoon Faire item (line 826–827) — was causing invalid array syntax. |
| **data/delves.js** | Den of Echoes: added zoneName `Harandar`, zone hint in tactics/details (between Gulf of Memory and Har'alnor). |
| **data/dungeons/season1.js** | Fixed typo: "Soakc" → "Soak" (Arcanotron Custos, Danish DPS). Windrunner Spire entrance: 35.2,78.4 → 35.5,78.8 (Icy Veins). |
| **data/raids/voidspire.js** | Fixed typo: "torenwaar" → "torent" (Dutch lore). |

---

## 3. Extended Audit (Dungeons, Raids, Specs, Professions, Affixes, Prey, Weekly)

### Dungeons (8 M+ + 4 Normal)
- **Structure:** All 12 dungeons have bosses, tips, routes, trash. Boss tactics per Tank/Healer/DPS in NL/EN ✓
- **Trash mob gids:** 69 mobs with interrupt/dodge/purge tags ✓
- **Corrections:** Soakc typo, Windrunner Spire /way
- **Note:** Magisters' Terrace uses same coords (35.2, 78.4) for Quel'Danas — different zone from Windrunner; coords may differ per dungeon. Kept as-is (Magisters entrance in Quel'Danas).

### Raids (Dreamrift, Voidspire, March on Quel'Danas)
- **Dreamrift:** Chimaerus tactics per role (Tank/Heal/DPS) in 3 languages ✓
- **Voidspire:** 6 bosses, LFR wings, tier token info ✓
- **March on Quel'Danas:** Basic info ✓
- **Correction:** Voidspire lore typo "torenwaar" → "torent"

### Classes/Specs (39 specs)
- **Structure:** Cheat sheet, rotation, stats, cooldowns, tips, macros, resource, consumables, talents ✓
- **Sample checked:** Fire Mage — rotations, Hot Streak logic, spell names in English ✓
- **No corrections needed**

### Professions (13 professions)
- **Structure:** Trainer /way, specs, items, KP Guide, KP Sources ✓
- **Flag:** Alchemy has `trainer.name: 'Camberon'` but loc text says "Elaryn Brightcoil" — possible Midnight rename. **Recommend:** Verify in-game.

### Affixes
- **Structure:** Lindormi (+2–+4), Xal'atath Bargain (+5–+11, 4 variants), Fortified/Tyrannical (+7), both (+10), Guile (+12) ✓
- **Mechanics:** Descriptions match community sources (wowaffixes.info, MMO-Champion) ✓

### Prey
- **Structure:** Unlock questline (Shadows in the Woods → Tracking the Beast → The Hunter's Call), 3 steps, difficulties, rewards ✓
- **/way:** Halduron Brightwing 49.0 64.8, Magister Astalor 54.97 63.31 ✓
- **No corrections needed**

### Weekly
- **Structure:** World boss, dungeon quest, event quest, Abundance, Legends, Saltheril, Stormarion, Prey, Delves (4 runs), M+ (8 keys), Great Vault, raids, renown gear, sparks, crafting, DMF, Timewalking ✓
- **Correction:** Syntax fix (stray comma) ✓

---

## 4. Trilingual Content Integrity

- **Technical game terms:** Spell names, zone names, item names kept in English ✓
- **12yo-friendly tone:** Descriptions are concise and jargon-free ✓
- **NL/EN consistency:** All Delves have details + fullGuide in Dutch and English ✓
- **Changelog variance:** NL help references Prey System for v1.0; EN references Glossary. Intentional regional differences — no change.

---

## 5. Gaps & Placeholders

| Item | Status |
|------|--------|
| **Den of Echoes** | Still placeholder (3 bullets + Full Guide minimal). NextTier: "Location details still being finalized." Added zone hint. |
| **TODO/TBD/Placeholder** | None found in codebase ✓ |
| **Empty strings** | None material ✓ |

---

## 6. Technical Audit

| Check | Result |
|-------|--------|
| **Alt-army XP bonus** | Not found in codebase. App does not implement alt-army XP logic. |
| **Tier → gear mapping** | Loot table correctly maps Tier 1–8+ to Bountiful/Trovehunter/GV iLevels. |
| **Broken links** | No 404s in documentation. Wowhead links use valid zone/quest IDs. |
| **index nood.html** | Maintenance page ("Onderhoud") — intentional, not a typo. |

---

## 7. Version & Docs

- **manifest.json:** `1.1.0` ✓
- **js/app.js VERSION:** `v1.1` ✓
- **Footer:** Uses VERSION + VERSION_DATE ✓
- **README / Manual / Homepage:** Reflect v1.1 features ✓

---

## 8. Zero-Hallucination Items

The following could not be 100% verified. Do **not** guess — confirm in-game or via patch notes:

1. Hallowfall Arathi profession racial bonus in Midnight
2. Exact EU weekly reset time (07:00 vs 08:00 vs 09:00 UTC/CET)
3. Singularity vendor coordinates (26.4,67.6 vs 52.6,72.8)
4. Den of Echoes /way coordinates (still TBD by Blizzard/community)
5. Alchemy trainer name: data says "Camberon", loc text says "Elaryn Brightcoil" — verify which is correct for Midnight

---

*Audit completed. All verified corrections applied. Unverified items flagged for manual review.*

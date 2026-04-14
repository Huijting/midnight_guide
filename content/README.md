# Addon Content Source

This directory is the canonical source for content that will be converted to Lua for the **Midnight Guide** WoW addon (`addon/MidnightGuide/`). Profession-tracker data lives here as part of MG, not as a separate product.

## Files

- `schema/addon-content.schema.json` - JSON Schema contract for addon content.
- `addon-content.sample.json` - Reference example that follows the schema.

## Why this exists

- Keeps content structure stable while we migrate from web app data.
- Prevents drift between UI code and data shape.
- Makes conversion to Lua deterministic in the next step (Sprint 2 / B2).

## Build generated Lua data

Run:

`python scripts/build-addon-generated-data.py`

This reads `addon-content.sample.json` and writes:

`addon/MidnightGuide/GeneratedData.lua`

## Profession `questId` (treasures / books)

One-time **Midnight tailoring knowledge treasures** use hidden quest flags checked with `C_QuestLog.IsQuestFlaggedCompleted`. The sample dataset lists all eight treasures with IDs **89078–89085** (pairing per treasure) from the check macro on [wow-professions.com — Midnight profession knowledge treasure locations](https://www.wow-professions.com/midnight/profession-knowledge-treasure-locations) (same numbering as community/Wowhead macro lists). Wowhead’s guide page was unavailable via fetch (CDN error); cross-check in-game or on Wowhead if a patch changes IDs.

The renown item **Skill Issue: Tailoring** ([Wowhead item](https://www.wowhead.com/item=257601/skill-issue-tailoring)) has **no** `questId` in sample content until a verified flag ID is documented; use manual completion in the **My** tabs or add `questId` when known.

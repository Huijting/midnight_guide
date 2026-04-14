# Addon Content Source

This directory is the canonical source for content that will be converted to Lua for the **Midnight Guide** WoW addon (`addon/MidnightGuide/`). Profession-tracker data lives here as part of MG, not as a separate product.

## Files

- `schema/addon-content.schema.json` - JSON Schema contract for addon content.
- `addon-content.sample.json` - Reference example that follows the schema.

## Why this exists

- Keeps content structure stable while we migrate from web app data.
- Prevents drift between UI code and data shape.
- Makes conversion to Lua deterministic in the next step (Sprint 2 / B2).

## Sync profession data from original MPT

Treasures, books, **questId**, **itemId**, and coordinates come from upstream **[MidnightProfessionTracker](https://github.com/Huijting/MidnightProfessionTracker)** (`MidnightProfTracker.lua`: `ProfData` + `BookData`).

1. `python scripts/sync-mpt-professions.py` — downloads the Lua file (or set `MPT_LUA_URL` to a local path), replaces only `professions.trackers` inside `addon-content.sample.json`, and refreshes `generatedAt`. Weekly + help blocks are left unchanged.
2. `python scripts/build-addon-generated-data.py` — writes `addon/MidnightGuide/GeneratedData.lua`.

Commit both the JSON and `GeneratedData.lua` after a sync so CI zips stay in sync.

## Build generated Lua data (after editing JSON by hand)

`python scripts/build-addon-generated-data.py`

reads `addon-content.sample.json` and writes `addon/MidnightGuide/GeneratedData.lua`.

## Profession `questId`

The addon uses `C_QuestLog.IsQuestFlaggedCompleted(questId)` for treasures and renown books, matching MPT’s `id` field. If Blizzard changes a flag ID, fix it in MPT upstream and re-run the sync script (or patch JSON locally).

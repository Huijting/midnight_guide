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

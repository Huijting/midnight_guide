# Addon Content Source

This directory is the canonical source for content that will be converted to Lua for the WoW addon.

## Files

- `schema/addon-content.schema.json` - JSON Schema contract for addon content.
- `addon-content.sample.json` - Reference example that follows the schema.

## Why this exists

- Keeps content structure stable while we migrate from web app data.
- Prevents drift between UI code and data shape.
- Makes conversion to Lua deterministic in the next step (Sprint 2 / B2).

## Next step

Build a converter script that validates JSON against the schema and outputs `GeneratedData.lua`.

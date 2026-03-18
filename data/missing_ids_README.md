# Lijst: Items & Spells zonder ID

Dit bestand (`missing_ids.csv`) bevat alle **BiS items** die nog geen Wowhead item-ID hebben op de site. Open het in Excel of Google Sheets om te zoeken.

## Gebruik

1. Open `missing_ids.csv` in Excel of Google Sheets
2. Klik op de link in kolom "Zoek op Wowhead" (of zoek handmatig op wowhead.com)
3. Het item-ID staat in de URL: `wowhead.com/item=XXXXX` → ID = XXXXX
4. Vul het ID in bij "Item/Spell ID (vul in)"
5. Geef de lijst door aan de developer, of update `cons_bis_data.js` zelf (zoek `name: "Itemnaam"` en vervang `id: null` door `id: XXXXX`)

## Database downloaden?

Wowhead biedt **geen officiële CSV-export** van hun itemdatabase. Opties:

- **Wowhead Copy IDs**: Op wowhead.com/items kun je filteren en "Copy IDs" gebruiken (max ~1000 items)
- **wow.export**: Externe tool (kruithne.net/wow.export) voor WoW data-export
- **Handmatig zoeken**: Voor deze ~80 items is zoeken per item vaak het snelst

## Spells

De `SPELL_IDS` in `js/ui.js` zijn grotendeels compleet. Spells zonder ID worden niet gelinkt — als je een spell mist, zoek op wowhead.com/spells en voeg toe aan `SPELL_IDS`.

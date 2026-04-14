# Midnight Guide en MPT (referentie)

## Productrichting (vastgelegd)

- **Eindproduct:** [Midnight Guide](https://github.com/Huijting/midnight_guide) — de WoW-addon onder `addon/MidnightGuide/`. Spelers installeren **één** addon: Midnight Guide.
- **Profession tracking** (wat nu in losse **Midnight Profession Tracker** zat) is een **onderdeel** van Midnight Guide, geen aparte hoofd-addon die je parallel blijft uitbreiden.
- **Midnight Profession Tracker** (bestaande repo: [MidnightProfessionTracker](https://github.com/Huijting/MidnightProfessionTracker)): **referentie en bron** — gedrag, kleuren, lijstopbouw, eventuele data of code om te porten. Geen apart strategisch “eindstation” meer naast MG.

## Wat we uit MPT halen (gericht, geen blind copy-paste)

- UI- en tekstparity waar zinvol: `docs/mpt-ui-parity-checklist.md`.
- Data-ideeën en JSON-schema in dit repo: `content/schema/addon-content.schema.json`, generator `scripts/build-addon-generated-data.py`.
- Patronen die al werken (bijv. `UISpecialFrames`, kleurcodes) — hergebruiken in MG-code.

## Wat we niet meer doen

- Geen dubbel onderhoud alsof **MPT** en **MG** twee gelijkwaardige producten zijn.
- Geen roadmap die zegt “alle features eerst in MPT, MG alleen experiment” — dat is **vervangen** door: **MG leidt**, MPT is legacy/referentie.

## Praktische werkafspraak

- **Primaire ontwikkeling:** deze repo (`midnight_guide`), vooral `addon/MidnightGuide/` en `content/`.
- **MPT-repo:** alleen nog relevant voor bestaande installaties, archief, of tijdelijk kopiëren van logica; geen aparte productbeslissingen daar als bron van waarheid voor de toekomst.

## “Done”-richting (niet datumbound)

- Eén addon-zip (Midnight Guide) met profession-onderdeel + help + (later) verdere Midnight-content.
- Content uit één pipeline (schema → JSON → `GeneratedData.lua`).
- Web app gefaseerd overbodig; zie `docs/addon-migration-tracker.md`.

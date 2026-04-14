# Midnight Guide -> WoW Addon Migration Tracker

Doel: de web app gefaseerd uitfaseren en uiteindelijk alleen de WoW addon onderhouden.

Statuslegenda:
- [ ] Niet gestart
- [~] Bezig
- [x] Klaar
- [!] Geblokkeerd

## Productrichting (belangrijk)

- [x] **Midnight Guide** (`addon/MidnightGuide/`) is het **eindproduct**: één addon; profession tracking is een **onderdeel** van MG.
- [x] **Midnight Profession Tracker** (losse addon) is **referentie/legacy** — geen parallel hoofdpad meer; functionaliteit hoort in MG te landen.
- [x] Zie ook: `docs/mpt-integration-next-steps.md`.

## North Star

- [ ] Web app is niet langer nodig voor dagelijkse gameplay.
- [ ] Addon bevat alle kernfunctionaliteit (professions, weekly, help/install, waypoints).
- [ ] Content komt uit een enkele bron (schema + generator naar Lua data).
- [ ] Releaseflow levert stabiele addon zip op.

## Fase 0 - Inventarisatie

- [ ] Must-have lijst vastleggen (in-game parity scope).
- [ ] Nice-to-have lijst vastleggen (later).
- [ ] Web-only features markeren (schrappen/archiveren).
- [ ] Acceptatiecriteria per feature opschrijven.

## Sprint 1 - Addon Foundation

- [x] A1 Project skeleton (`.toc`, `Core.lua`, `UI.lua`, `Data.lua`, `Locales/`).
- [x] A2 Base UI shell (tabs: Professions, Weekly, Help).
- [x] A3 Persistence (`SavedVariables`: taal, open tab, UI state).
- [x] A4 Localization scaffold (NL/EN + fallback).
- [x] A5 Release pipeline (build/package addon zip).

## Sprint 2 - Data Pipeline + Tracker MVP

- [x] B1 Canonical data schema (`content/`).
- [x] B2 Converter script (JSON -> Lua tables).
- [x] B3 Profession Tracker core (missing treasures/books).
- [x] B4 Slash commands (`/mpt`, `/mpt books`, `/mpt all`).
- [x] B5 Install/Help/Troubleshooting panel in addon.

## Sprint 3 - Integraties + Daily Use

- [ ] C1 TomTom interop (waypoints + fallback).
- [ ] C2 Weekly checklist + resetlogica.
- [ ] C3 UI/Performance polish (grote lijsten, leesbaarheid).
- [ ] C4 Web app migration banner (addon primair).
- [x] C5 Profession detection: skill line check + `SKILL_LINES_CHANGED` refresh when MG-venster open (Char.lua).

## Sprint 4 - High-Value Content Migration

- [ ] D1 Specs essentials (cheat sheet/cooldowns/tips).
- [ ] D2 Delves/Raids essentials (TL;DR + warnings).
- [ ] D3 Glossary in addon (zoek/filter).
- [ ] D4 Feedback route (issue template / report flow).

## Sprint 5 - Web Sunset

- [ ] E1 Web content freeze (alleen download/docs/redirect).
- [ ] E2 Dubbele pipelines opruimen.
- [ ] E3 Sunset communicatie (README/releases/in-app note).
- [ ] E4 Definitieve cutover naar addon-only maintenance.

## Stop-Web Criteria (Go/No-Go)

- [ ] Professions parity gehaald.
- [ ] Weekly parity gehaald.
- [ ] Help/Install/Troubleshooting volledig in addon.
- [ ] Core endgame guidance (minimaal TL;DR niveau) in addon.
- [ ] Minstens 2 stabiele releases zonder kritieke regressies.

## Besluiten (vastgelegd)

- [x] We willen de web app langzaam overbodig maken en uiteindelijk stoppen met onderhoud.
- [x] Migratie gebeurt gefaseerd met lage risico's.
- [x] Addon wordt eindplatform; web app wordt tijdelijk ondersteunend.
- [x] Web app is voorlopig feature-frozen (geen nieuwe development, alleen addon traject).
- [x] `MidnightProfessionTracker` is referentie/bron; **Midnight Guide** is de definitieve codebase voor nieuwe ontwikkeling.

## Werkafspraken

- [ ] Elke afgeronde taak direct afvinken in dit document.
- [ ] Bij blockers: tag met [!] en noteer oorzaak + eigenaar.
- [ ] Elke sprint afsluiten met korte retro (wat ging goed / wat niet).

## UI Parity (MPT referentie)

- [x] Referentiescreenshot bevestigd voor doel-UI gedrag.
- [x] Parity-checklist aangemaakt: `docs/mpt-ui-parity-checklist.md`.
- [x] Eerste parity-task: MPT-tab-layout + `/mg` subcommando’s (geen conflict met andere addons).

## Progress Log

### 2026-04-14 (later)
- [x] Profession-data uit upstream **MPT**: `scripts/sync-mpt-professions.py` vult alle professies (ProfData + BookData, o.a. Skill Issue Tailoring `questId` 93201); daarna `build-addon-generated-data.py`.

### 2026-04-14
- [x] Initiële migratiestrategie bepaald (Sprint 1-5).
- [x] Trackerdocument aangemaakt voor voortgangsbeheer.
- [x] Branch `feature/addon-migration-sprint1` gestart.
- [x] Addon skeleton toegevoegd in `addon/MidnightGuide/` (TOC, Core, UI, Data, Locales).
- [x] ESC-sluiting toegevoegd voor addon venster.
- [x] GitHub Actions workflow toegevoegd voor addon zip build/release (`build-addon-zip.yml`).
- [x] Canonical addon-content schema toegevoegd in `content/` + sample dataset.
- [x] Converter script toegevoegd (`scripts/build-addon-generated-data.py`) + `GeneratedData.lua` output gekoppeld aan addon.
- [x] Eerste profession report-logica + slash commands (`/mpt`, `/midnightprof`) toegevoegd in addon.
- [x] Help-tab gebruikt nu install + troubleshooting content uit gegenereerde addon data.
- [x] Koerscorrectie: **Midnight Guide** in dit repo is het product; MPT blijft alleen referentie (zie `docs/mpt-integration-next-steps.md`).
- [x] `/mpt` conflict opgelost door slash hooks uit prototype-addon te verwijderen.
- [x] MPT-parity tabs + `/mg` subcommando’s toegevoegd (alle commando’s beginnen met `/mg`).

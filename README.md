# ⚔ WoW Midnight Guide — Dungeon & Profession Apps

**Live Dungeon Guide:** [huijting.github.io/midnight_guide](https://huijting.github.io/midnight_guide/)  
**Live Profession Guide:** [huijting.github.io/midnight_guide/professions](https://huijting.github.io/midnight_guide/professions/)

Interactieve, drietalige (🇳🇱 🇬🇧 🇩🇰) Progressive Web App voor World of Warcraft: Midnight. Installeerbaar op telefoon en tablet, werkt offline.

---

## 🗡 Dungeon Guide — Features

- **Drietalig** — NL / EN / DA, alles wisselt direct inclusief de Over-pagina
- **Alle 40 specs volledig gedekt** — elke spec heeft specifieke dungeon tips per baas per rol
- **Spec Selector** — kies je klasse en spec; rol-tab selecteert automatisch (Tank/Healer/DPS)
- **Per-baas rol-tabs** — Tank 🛡, Healer 💚, DPS ⚔ per baas
- **Route Planner** — pull-volgorde, Bloodlust-timing, Keystone.guru links
- **Route kaarten** — Keystone.guru screenshots voor alle 8 M+ dungeons; in-game dungeon maps per verdieping voor normale dungeons
- **Route notice** — Bij dungeons zonder ideale route: melding met link naar GitHub Issues
- **Licht / Donker thema** — Opgeslagen via localStorage
- **PWA installeerbaar** — Startscherm Android & iOS, installeerbaar op pc
- **QR-code & Over-pagina** — Deel URL, volledig drietalig

---

## ⚗ Profession Guide — Features

- **Alle 13 professions gedekt** — 8 Crafting, 3 Gathering, 2 Secundair
- **5 tabs per professie** — Overzicht, Specialisaties, Beste Items, Trainer, Crafting Orders
- **Beginner-vriendelijke tutorials** — uitleg van game-concepten, niet alleen spec-stappen
- **Tier-ratings** — S/A/B, goud- en nuttigheidsscores
- **Trainer-locaties** — naam, locatie, `/way` coördinaten
- **Drietalig** — NL / EN / DA, inclusief footer en knoppen
- **PWA installeerbaar** — eigen icoon (cauldron, groen), apart van de Dungeon app
- **Eigen icoon** — groen ketel-icoon, te onderscheiden van het blauw-gouden zwaard van de Dungeon app

---

## 🏰 Season 1 Dungeon Pool (Mythic+)

| Dungeon | Zone | Bosses | Type |
|---|---|---|---|
| Windrunner Spire | Eversong Woods | 3 | Midnight |
| Magisters' Terrace | Isle of Quel'Danas | 4 | Midnight |
| Maisara Caverns | Zul'Aman | 3 | Midnight |
| Nexus-Point Xenas | Voidstorm | 3 | Midnight |
| Algeth'ar Academy | Thaldraszus | 3 | Dragonflight ↩ |
| Pit of Saron | Icecrown | 3 | Wrath ↩ |
| Seat of the Triumvirate | Argus — Mac'Aree | 4 | Legion ↩ |
| Skyreach | Spires of Arak | 4 | WoD ↩ |

## 🏛 Normale Dungeons

| Dungeon | Zone | Bosses |
|---|---|---|
| Murder Row | Silvermoon City | 3 |
| The Blinding Vale | Eversong Woods | 3 |
| Den of Nalorakk | Zul'Aman | 3 |
| Voidscar Arena | Voidstorm | 3 |

---

## 🎭 Specs — alle 40 gedekt ✅

Alle 40 specs (6 Tank, 7 Healer, 27 DPS) hebben volledige dungeon tips per baas per rol in alle 3 talen.

---

## 🚧 Coming Soon

| Inhoud | Status |
|---|---|
| Raids Season 1 (The Voidspire, Dreamrift, March on Quel'Danas) | Gepland |
| Remaining professions (11 van 13 nog leeg) | In progress |
| Raid guide met tank/heal/dps tabs per baas | Gepland |

---

## 💬 Routes bijdragen

Goede route voor een dungeon? Maak een issue aan:  
👉 [github.com/Huijting/midnight_guide/issues/new](https://github.com/Huijting/midnight_guide/issues/new)

Vermeld: dungeon, pull-volgorde, Bloodlust-moment, eventuele MDT/Keystone.guru link.

---

## Changelog

> **Versie-notatie:**
> - **vX.0** = grote update (nieuwe feature, nieuw systeem, nieuwe dungeon/profession)
> - **vX.x** = kleine update (bugfix, vertalingen, tekst/data aanpassing)

---

### Dungeon Guide

#### v4.3 — 2026-03-11
- **Icoon onderscheiding** — Dungeon app behoudt het blauw-gouden zwaard-icoon (`icons/`)
- Professions app krijgt eigen groen cauldron-icoon in `professions/icons/` — niet meer hetzelfde icoon

#### v4.2 — 2026-03-10
- **Route notice** — amber melding bij dungeons zonder ideale route, met link naar GitHub Issues
- **Floor switcher normale dungeons** — in-game maps per verdieping voor alle 4 normale dungeons

#### v4.1 — 2026-03-10
- **Bugfix** — TypeError in returning dungeons (steps vs pulls)

#### v4.0 — 2026-03-10
- **Route kaarten** — Keystone.guru screenshots voor alle 8 M+ dungeons
- **4 returning dungeons volledig** — Algeth'ar Academy, Pit of Saron, Seat of the Triumvirate, Skyreach

#### v3.0 — 2026-03-10
- **Alle 40 specs volledig gedekt** — resterende 17 specs toegevoegd
- **About modal volledig drietalig**

#### v2.x — 2026-03-10
- Spec-systeem uitgebouwd in meerdere stappen (v2.0–2.2): spec selector, auto-rol tab, 13 nieuwe specs, 6 nieuwe specs

#### v1.x — 2026-03-06 t/m 09
- **v1.3** Spec selector, alle 13 klassen, rol-bewuste Bloodlust namen
- **v1.2** QR-code knop, thema-aware
- **v1.1** PWA install banner (Android + iOS, drietalig)
- **v1.0** Eerste release: 8 dungeons, 3 talen, rol-tabs, route planner

---

### Profession Guide

#### v2.3 — 2026-03-11
- **Beginner-tutorials herschreven** — Skinning en Leatherworking volledig uitgeschreven met game-conceptuitleg, strategie, en waarom/wanneer
- **Vertalingen compleet** — footer disclaimer, QR/About knoppen, "Gemaakt door", sluiten-knop, bronnen-label volledig drietalig
- **Eigen icoon** — groen cauldron-icoon in `professions/icons/`, apart van Dungeon app zwaard-icoon
- **Taal opgeslagen** — gekozen taal wordt onthouden na herladen (localStorage)
- **Apple-touch-icon** — verwijst nu naar eigen professions-icoon

#### v2.2 — 2026-03-11
- Vertalingen deels uitgebreid (qr_btn, about_btn etc.)
- Skinning en LW tutorials verbeterd

#### v2.1 — 2026-03-11
- Footer-vertalingen toegevoegd, taal-herstel in DOMContentLoaded

#### v2.0 — 2026-03-10
- Modulaire data-structuur: 13 losse `.js` bestanden in `data/`
- PWA toegevoegd (manifest, service worker, install modal)
- Vlag-taalknopjes (🇳🇱🇬🇧🇩🇰)

#### v1.0 — 2026-03-10
- Eerste release, alle 13 professions (shell + lege data)

---

*Built by Claudy & Inchy ⚔*

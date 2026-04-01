# 🌙 WoW: Midnight Companion Guide

**v1.1** — Een tweetalige (NL/EN) Progressive Web App voor World of Warcraft: Midnight.

**App-build v1.0.7** (apr 2026) — Zie **Over deze app** voor de volledige changelog. Onder meer: `data/live_reset_data.json` van een Python Wowhead-scraper in dezelfde CI-job als `prey-today.json` / `bountiful-today.json` (Delves- en Prey-context + scrape-tijd in de app).

**Live:** [huijting.github.io/midnight_guide/](https://huijting.github.io/midnight_guide/)

---

## 📍 Inhoud

### 🌙 Home
Landingspagina met navigatiekaarten en directe links naar alle secties.

### 🏰 Raids
Raid boss guides met mechanics per rol (Tank/Healer/DPS):
- **The Dreamrift** — Chimaerus, the Undreamt God (opent 17 maart 2026)
- The Voidspire — 6 bosses *(komt later)*
- March on Quel'Danas — 2 bosses *(komt later)*

### ⚔️ Dungeons
Alle Season 1 M+ dungeons (8 stuks) met boss-tactieken, route-tips en M+-specifieke adviezen. Plus 4 Normal-only dungeons.
Inclusief **Trash Mob Gids** in de Route-tab met 69 mobs gedocumenteerd, kleurgecodeerde tags (Interrupt/Dodge/Purge/CC/Tank).

### 🎯 Prey Systeem (Nieuw in v1.0)
Een complete, stapsgewijze gids voor de nieuwe solo-friendly endgame activiteit. Inclusief unlock questline, moeilijkheidsgraden en beloningen.

### 💎 Delves (Verbeterd in v1.1)
Alle 12 Midnight Delves met /way, loot tabel en sleutel-info. Klik op een Delve-naam voor een kort overzicht (3 tips). Tik op **Full Guide** voor een stap-voor-stap walkthrough met events, boss-mechanieken en geheimen — in het Nederlands en Engels.

### 📅 Wekelijks
Overzicht van wekelijkse activiteiten: World Bosses, Timewalking, Crafting Orders, Delves en meer.

### 🔨 Professies
Alle 13 professies met trainer /way coördinaten, een uitgebreide level-gids (1-100), KP Gids, en KP Bronnen.
**Nieuw in v1.0:** Character tracking! Vink KP schatten af per character.

### ⚡ Affixes
Volledig overzicht van alle M+ affixes in Season 1 met uitleg en tips:
- 🛡️ Lindormi's Guidance (+2–+4) — leer-affix, geen death penalty
- 💀 Xal'atath's Bargain (+5–+11) — 4 rotatievarianten: Ascendant, Voidbound, Pulsar, Devour
- ⚔️ Fortified / Tyrannical (+7) — wekelijks wisselend
- 💥 Fortified + Tyrannical tegelijk (+10)
- ⏱️ Xal'atath's Guile (+12) — deaths kosten 15 sec

### 🎯 Specs
Alle 13 klassen, alle specs — elk met 9 tabbladen:
- ⚡ Cheat Sheet | 🔄 Rotatie | 📊 Stats | ⏱️ Cooldowns
- 💡 Tips | ⌨️ Macro's | 🎯 Resource | 🧪 Consumables
- 🌳 Talents — builds voor M+, Raid, Delves en Leveling

### 📖 Woordenlijst
WoW-begrippen uitgelegd voor beginners, inclusief inline gouden tooltips in dungeon-tips.

---

## 📱 Installeren als app

Tik op het installeer-icoontje in je browser (Chrome/Safari) om de app op je startscherm te zetten. Werkt offline!

---

## 🌍 Talen

🇳🇱 Nederlands | 🇬🇧 English

---

## 🤖 EU-dagelijkse data (GitHub Actions)

Workflow [`.github/workflows/fetch-eu-daily-json.yml`](.github/workflows/fetch-eu-daily-json.yml) draait op een rooster rond **07:00 UTC** en voert [`scripts/ci-regenerate-prey-and-bountiful-push.sh`](scripts/ci-regenerate-prey-and-bountiful-push.sh) uit:

- **Node.js:** [`scripts/fetch-prey-today.js`](scripts/fetch-prey-today.js) → [`data/prey-today.json`](data/prey-today.json); [`scripts/fetch-bountiful-delves.js`](scripts/fetch-bountiful-delves.js) → [`data/bountiful-today.json`](data/bountiful-today.json).
- **Python 3.12:** [`scripts/wowhead_live_reset_scraper.py`](scripts/wowhead_live_reset_scraper.py) (dependencies: [`scripts/requirements-wowhead-scraper.txt`](scripts/requirements-wowhead-scraper.txt)) → [`data/live_reset_data.json`](data/live_reset_data.json). Leest Wowhead’s **Today in WoW**-inline JSON (EU-`regionId`), o.a. Bountiful-namen en eventuele Prey-regels met Hard/Nightmare in de tekst.

Lokaal testen: `pip install -r scripts/requirements-wowhead-scraper.txt` en `python scripts/wowhead_live_reset_scraper.py`. De app gebruikt **`bountiful-today.json`** als primaire bron voor welke vier delves Bountiful zijn; `live_reset_data.json` voegt Wowhead-labels, tijdstempel en een waarschuwing bij afwijking toe.

---

## 🛠️ Changelog

### v1.1 — 20 maart 2026
- 💎 **Delves:** Klik op een Delve-naam voor kort overzicht (gimmick, gevaar, tip)
- 📖 **Full Guide:** Volledige walkthrough per Delve — events, boss-mechanieken, geheimen (Icy Veins, 12yo-vriendelijk)
- 🌍 **NL/EN:** Alle Delve-content in twee talen (Deens verwijderd)
- 📋 Tip toegevoegd: "Klik op de Delve-naam voor korte tips"
- 🔧 Torment's Rise /way coördinaten toegevoegd
- 🐛 **Audit:** Syntaxfix (stray comma Weekly), Den of Echoes zone+hint, Soakc→Soak, torenwaar→torent (NL), Windrunner /way 35.5,78.8

### v1.0 — 16 maart 2026
- 🎯 Prey Systeem toegevoegd met unlock questline en uitleg
- 📖 Gids & KP tabs in Professies samengevoegd voor beter overzicht
- 👤 Character tracking voor KP schatten toegevoegd (met localStorage)
- 🎨 Compleet nieuw 'Modern Dark Gaming' thema (glassmorphism, parchment textures, void glow)
- 📱 Mobiele navigatie verbeterd (horizontaal scrollbaar met gradient hints)
- ⬆️ Back to top knop toegevoegd
- 📋 Gekopieerd! toast notificaties
- 🐛 Diverse bugfixes en optimalisaties in de codebase

### Oudere versies (v0.9 en eerder)
- 📖 Woordenlijst toegevoegd
- 👾 Trash mob gids toegevoegd aan dungeons
- 🏰 Raids sectie toegevoegd (The Dreamrift)
- ⚡ Affixes tab toegevoegd
- 🌳 Talents tab toegevoegd aan alle specs
- 📍 Alle /way coördinaten in Weeklies in-game geverifieerd
- 🎯 Specs sectie gelanceerd: 39 specs, 8 tabbladen per spec
- 🔨 Alle 13 professies compleet met KP-systeem

---
*Gemaakt door Inchy & Gemma*

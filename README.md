# ⚔ WoW Midnight Guide — v5.8

**Fan-project** voor World of Warcraft: Midnight — drietalige dungeon & profession gids als PWA.

🌐 **Live:** [huijting.github.io/midnight_guide](https://huijting.github.io/midnight_guide/)

---

## ✨ Features

- 🇳🇱 🇬🇧 🇩🇰 Drietalig — NL / EN / DA, alles wisselt direct
- ⚔ **Dungeon gids** — 8 Mythic+ + 4 Normal dungeons, seizoen 1
- 🛡 💚 ⚔ Role tabs per baas (Tank / Healer / DPS)
- ⭐ Spec Selector — 40 specs, Bloodlust-namen per klasse
- 🗺 Routeplanner met pull-volgorde, Bloodlust-timing en kaarten
- 🔨 **Profession gids** — alle 13 professions, NL/EN/DA, tier-ratings
- 🌙 Licht/donker thema
- 📱 Installeerbaar als PWA (Android & iOS)
- 📷 QR-code om te delen
- 📅 **Weekly Checklist** — alle weekly activiteiten met afvinkjes, progressiebalk en automatische reset op woensdag

---

## 🏰 Dungeons — Seizoen 1

### ⚔ Mythic+ (8 dungeons)

| Dungeon | Zone |
|---|---|
| Windrunner Spire | Eversong Woods |
| Magisters' Terrace | Isle of Quel'Danas |
| Maisara Caverns | Azj-Kahet |
| Nexus-Point Xenas | The Nexus |
| Algeth'ar Academy | Thaldraszus |
| Pit of Saron | Icecrown |
| Seat of the Triumvirate | Argus |
| Skyreach | Spires of Arak |

### 📖 Normal Only (4 dungeons)

| Dungeon | Zone |
|---|---|
| Murder Row | Silvermoon City |
| The Blinding Vale | Quel'Thalas |
| Den of Nalorakk | Zul'Aman |
| Voidscar Arena | The Void |

---

## 📅 Seizoensschema — Midnight

### ✅ Seizoen 1 (live)

| Datum | Content |
|---|---|
| 2 maart 2026 | Expansion launch — alle 8 dungeons (Normal/Heroic/Mythic 0) |
| 17 maart 2026 | **Seizoen 1 start** — M+ seizoen, Raids (Voidspire + Dreamrift Normal/Heroic/LFR), PvP S1, Bountiful Delves |
| 24 maart 2026 | Mythic+ gerankt open, Mythic Voidspire & Dreamrift, LFR Wing 2 Voidspire |
| 31 maart 2026 | **March on Quel'Danas** (Normal/Heroic/Mythic), LFR Wing 3 Voidspire |
| 7 april 2026 | Story Mode + LFR March on Quel'Danas |

### ⏳ Seizoen 2 (nog niet aangekondigd)

Blizzard heeft nog geen datum of details voor Seizoen 2 bekendgemaakt. Verwacht: nieuwe M+ pool met een mix van Midnight- en legacy dungeons, nieuw raid tier, nieuw PvP seizoen.

*Bron: [Blizzard officieel](https://news.blizzard.com/en-us/article/24266321/midnight-season-1-begins-march-17), [Blizzard Watch](https://blizzardwatch.com/2026/03/02/midnight-season-1-release-schedule/)*

---

## 🔨 Professions — Tier Overzicht

| Tier | Professions | Reden |
|---|---|---|
| S | Inscription, Mining, Herbalism | Inscription: meest veelzijdig (consumables + housing + crafting orders). Mining & Herbalism: beste early gold, geen setup nodig |
| A | Alchemy, Jewelcrafting | Alchemy: stable demand (raids/M+/PvP). Jewelcrafting: nuttig het hele seizoen door quality-systeem |
| B | Enchanting, Tailoring, Leatherworking, Skinning, Engineering | Solid maar geen uitschieters in Midnight |
| C | Blacksmithing, Cooking, Fishing | Blacksmithing vereenvoudigd, zwakke stat scaling |

*Tier-rating gebaseerd op gold-making potentie in Seizoen 1. Bron: [Overgear](https://overgear.com/guides/wow/midnight-best-profession/), [mmogah](https://www.mmogah.com/news/wow/wow-midnight-profession-tier-list-best-gold-making-professions-for-launch)*

---

## 📋 Changelog

### v5.8 — 2026-03-12
- 📅 **Weekly Checklist tab** — alle weekly activiteiten (World Boss, Delves, M+, Raid, Quests, Rep, Crafting, DMF)
- Progressiebalk met x/25 voltooid
- Automatische reset elke woensdag 09:00
- Vinkjes opgeslagen in localStorage

### v5.8 — 2026-03-11
- 🌳 **KP Boom tab** toegevoegd per profession — visuele spec tree met KP kosten per node
- 🗺️ **KP Bronnen tab** toegevoegd per profession — schatten (/way coördinaten), wekelijks, eenmalig, Darkmoon Faire
- 📋 TomTom /ttpaste knop — kopieert alle /way regels in één klik
- `data/professions/kp_sources.js` — nieuw databestand met KP-bronnen voor alle 13 professions

### v5.8 — 2026-03-11
- Afbeeldingen (route & floor screenshots) uit season1.js gehaald — aparte bestanden in `data/screenshots/`
- season1.js verkleind van ~10.5MB naar ~430KB
- Screenshots worden nu geladen via GitHub raw URL's

### v5.8 — 2026-03-11
- Alle 13 profession spec tree namen gecorrigeerd op basis van officiële Midnight data
- About-knop styling gefixed (was wit, nu donker zoals andere knoppen)
- Service Worker: cache-first → network-first (altijd verse content bij openen)

### v5.8 — 2026-03-11
- About-modal laadt nu live README.md van GitHub (nooit meer hardcoded tekst)
- PWA auto-banners vervangen door 📲 knopje in header
- Profession tier-ratings bijgewerkt naar actuele Midnight-data
- Bronvermelding zichtbaar per profession (Method.gg, WoW-Professions, Overgear)
- Seizoensschema toegevoegd aan README
- 💬 Feedback-knop toegevoegd


| Versie | Datum | Wijzigingen |
|---|---|---|
| v5.9 | 2026-03-12 | 🔤 Tab knoppen vertaald (Dungeons/Professies/Weekly) · Categorieën standaard gesloten · Weekly herlaadt bij taalwissel |
| v5.8 | 2026-03-12 | 📅 Weekly Checklist tab — World Boss, Delves, M+, Raid, Quests, Rep, Crafting, DMF · auto-reset woensdag |
| v5.8 | 2026-03-11 | 🌳 KP Boom tab + 🗺️ KP Bronnen tab per profession · kp_sources.js · TomTom /ttpaste knop |
| v5.8 | 2026-03-11 | Afbeeldingen uit season1.js — aparte bestanden in data/screenshots/, season1.js van 10.5MB naar 430KB |
| v5.8 | 2026-03-11 | Alle 13 profession spec tree namen gecorrigeerd · Service Worker: network-first |
| v5.8 | 2026-03-11 | About-modal laadt live README.md · PWA-banners vervangen · profession tier-ratings bijgewerkt |
| v5.8 | 2026-03-11 | Profession gids toegevoegd — alle 13 professions, NL/EN/DA, tier-ratings, modulaire data-structuur |
| v4.0 | 2026-03-11 | Modulaire refactor — data naar losse JS-bestanden |
| v3.0 | 2026-03-10 | Alle 40 specs volledig uitgewerkt · About-modal volledig meertalig |
| v2.2 | 2026-03-10 | 13 nieuwe specs · Fury/Arms/Prot Warrior, Frost Mage, Outlaw Rogue, WW/BM/MW Monk, Disc Priest, Enh Shaman, MM Hunter, Unholy DK, Blood DK |
| v2.1 | 2026-03-10 | 6 nieuwe specs · Auto role-refresh fix · QR + About naast elkaar |
| v2.0 | 2026-03-10 | Spec-tips systeem · Auto role-tab · ★ highlights · About-pagina |
| v1.3 | 2026-03-09 | Spec selector · 13 klassen · Bloodlust-namen per spec |
| v1.2 | 2026-03-08 | QR-code knop |
| v1.1 | 2026-03-07 | PWA installatiebanner (Android + iOS, drietalig) |
| v1.0 | 2026-03-06 | Eerste versie: 8 dungeons, 3 talen, role tabs, routeplanner |

---

## 🔧 Lokaal testen

Gewoon `index.html` openen in je browser werkt **niet** voor de modulaire versie (browser blokkeert lokale `<script src=>` imports). Gebruik een lokale server:

```bash
python3 -m http.server 8000
# Open: http://localhost:8000
```

Of gebruik de single-file testversie (`test_single.html`) die alles inline heeft.

---

*Fan-project · Geen officiële band met Blizzard Entertainment.*  
*World of Warcraft is een handelsmerk van Blizzard Entertainment, Inc.*  
*⚔ Gebouwd door Claudy & Inchy*

## Changelog

### v5.9
- Categorieën standaard gesloten (klik om te openen)
- Tab knoppen (Dungeons/Professies/Weekly) nu volledig vertaald per taal
- Weekly Checklist herlaadt automatisch bij taalwissel

### v5.8
- Weekly Checklist volledig drietalig (nl/en/da)
- `/way` TomTom-coördinaten toegevoegd per item (klikbaar, kopieert naar clipboard)
- Darkmoon Faire alleen zichtbaar in actieve weken (automatisch)
- Halduron Brightwing weekly dungeon quest teruggeplaatst
- Timewalking reminder toegevoegd
- DMF-banner zichtbaar wanneer Faire actief is

### v5.8
- Weekly Checklist tab (📅) toegevoegd
- NPC-locaties per item
- Feedback knop gefixed (Google Form + GitHub Issues)
- KP Bronnen tab ID-fix

### v5.8
- KP Boom tab (🌳) en KP Bronnen tab (🗺️) toegevoegd
- Footer versienummer via VERSION/VERSION_DATE


# ⚔ WoW Midnight Guide — v5.0

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

## 🔨 Professions — Tier Overzicht

| Tier | Professions |
|---|---|
| S | Alchemy |
| A | Enchanting, Inscription, Jewelcrafting, Tailoring, Mining, Herbalism, Skinning, Leatherworking, Blacksmithing |
| B | Engineering, Cooking |
| C | Fishing |

---

## 📋 Changelog

| Versie | Datum | Wijzigingen |
|---|---|---|
| v5.0 | 2026-03-11 | Profession gids toegevoegd — alle 13 professions, NL/EN/DA, tier-ratings, modulaire data-structuur |
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

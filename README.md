# ⚔ WoW Midnight Guide — v6.2

**Fan-project** voor World of Warcraft: Midnight — drietalige dungeon, profession & spec gids als PWA.

🌐 **Live:** [huijting.github.io/midnight_guide](https://huijting.github.io/midnight_guide/)

---

## ✨ Features

- 🇳🇱 🇬🇧 🇩🇰 Drietalig — NL / EN / DA, alles wisselt direct
- ⚔ **Dungeon gids** — 8 Mythic+ + 4 Normal dungeons, seizoen 1
- 🛡 💚 ⚔ Role tabs per baas (Tank / Healer / DPS)
- 🎯 **Spec Guides** — rotaties, stats, cooldowns, tips, macro's, consumables per spec
- 🔨 **Profession gids** — alle 13 professions, NL/EN/DA, tier-ratings
- 📅 **Weekly Checklist** — alle weekly activiteiten met afvinkjes en automatische reset op woensdag
- 🌙 Licht/donker thema
- 📱 Installeerbaar als PWA (Android, iOS & desktop)
- 📷 QR-code om te delen

---

## 🎯 Spec Guides — Voortgang

Elke spec heeft 8 tabs: **Cheat Sheet · Rotatie · Stats · Cooldowns · Tips · Macro's · Resource · Consumables**

### ✅ Beschikbaar

| Klasse | Spec | Rol |
|---|---|---|
| Hunter | Beast Mastery | Ranged DPS |
| Hunter | Marksmanship | Ranged DPS |
| Paladin | Retribution | Melee DPS |
| Mage | Frost | Ranged DPS |
| Death Knight | Frost | Melee DPS |

### 🚧 In de planning

| Klasse | Specs |
|---|---|
| Warrior | Arms · Fury · Protection |
| Rogue | Assassination · Outlaw · Subtlety |
| Druid | Balance · Feral · Guardian · Restoration |
| Shaman | Elemental · Enhancement · Restoration |
| Priest | Discipline · Holy · Shadow |
| Warlock | Affliction · Demonology · Destruction |
| Monk | Brewmaster · Mistweaver · Windwalker |
| Demon Hunter | Havoc · Vengeance |
| Evoker | Augmentation · Devastation · Preservation |
| Paladin | Holy · Protection |
| Death Knight | Blood · Unholy |
| Mage | Arcane · Fire |
| Hunter | Survival |

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

| Datum | Content |
|---|---|
| 2 maart 2026 | Expansion launch — alle 8 dungeons (Normal/Heroic/Mythic 0) |
| 17 maart 2026 | **Seizoen 1 start** — M+, Raids, PvP S1, Bountiful Delves |
| 24 maart 2026 | Mythic+ gerankt open, Mythic Voidspire & Dreamrift |
| 31 maart 2026 | **March on Quel'Danas** (Normal/Heroic/Mythic) |
| 7 april 2026 | Story Mode + LFR March on Quel'Danas |

---

## 🔨 Professions — Tier Overzicht

| Tier | Professions |
|---|---|
| S | Inscription, Mining, Herbalism |
| A | Alchemy, Jewelcrafting |
| B | Enchanting, Tailoring, Leatherworking, Skinning, Engineering |
| C | Blacksmithing, Cooking, Fishing |

---

## 📋 Changelog

| Versie | Datum | Wijzigingen |
|---|---|---|
| v6.2 | 2026-03-13 | 🎯 Specs tab — 5 specs uitgewerkt · Method-stijl class grid · 8 tabs per spec incl. Consumables · Dev-banner met taalswitch |
| v6.1 | 2026-03-12 | 📋 KP Gids tab — bomen + builds per profession |
| v6.0 | 2026-03-12 | 🏗 Modulaire architectuur — losse bestanden, nieuwe GitHub Manager |
| v5.9 | 2026-03-12 | 🔤 Tab knoppen vertaald · Weekly herlaadt bij taalwissel |
| v5.8 | 2026-03-12 | 📅 Weekly Checklist met auto-reset op woensdag |
| v5.8 | 2026-03-11 | 🌳 KP Boom + 🗺️ KP Bronnen · Profession gids alle 13 professions |
| v4.0 | 2026-03-11 | Modulaire refactor — data naar losse JS-bestanden |
| v3.0 | 2026-03-10 | Alle 40 specs uitgewerkt · About-modal meertalig |
| v1.0 | 2026-03-06 | Eerste versie: 8 dungeons, 3 talen, role tabs |

---

## 🗂 Bestandsstructuur

```
midnight_guide/
├── index.html
├── sw.js
├── manifest.json
├── github_manager.html
├── icons/
└── data/
    ├── dungeons/season1.js
    ├── professions/   (13 bestanden + kp_data/kp_sources)
    ├── specs/         (bm_hunter · mm_hunter · ret_paladin · frost_mage · frost_dk)
    └── help.js
```

---

*Fan-project · Geen officiële band met Blizzard Entertainment.*  
*World of Warcraft is een handelsmerk van Blizzard Entertainment, Inc.*  
*⚔ Gebouwd door Claudy & Inchy*

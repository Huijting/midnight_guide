# MPT Integration Next Steps

Doel: vanaf nu alle echte feature-development in `MidnightProfessionTracker` doen, en de huidige `MidnightGuide` code alleen als referentie/prototype gebruiken.

Referentie repo:
- [MidnightProfessionTracker](https://github.com/Huijting/MidnightProfessionTracker)

## Stap 1 - Veilig starten in MPT repo

- Maak branch: `feature/mpt-midnight-guide-integration`.
- Bevestig dat `.toc` + hoofd-bestanden blijven laden zonder regressies.
- Voeg een simpele "integration roadmap" notitie toe in MPT README of docs.

## Stap 2 - Prototype kennis overzetten (gericht)

Neem alleen bruikbare delen over, niet blind copy/paste:

- Data-shape idee uit `content/schema/addon-content.schema.json`.
- Slash-flow idee voor `/mpt` varianten.
- ESC-registratie patroon (`UISpecialFrames`) waar relevant.

## Stap 3 - Eerste echte integratietaken in MPT

1. **Help/Install/Troubleshooting panel in bestaande MPT UI**
   - Gebruik huidige MPT stijl (geen losse MVP skin).
2. **Content pipeline basis**
   - Kleine JSON bron + script dat Lua tables genereert voor MPT.
3. **Profession report uitbreiding**
   - Houd huidige MPT outputformat als standaard.

## Stap 4 - Definite "done" criteria

- Geen dubbel onderhoud tussen web app en addon.
- MPT heeft onboarding + troubleshooting in-game.
- Release zip flow in MPT werkt stabiel.
- Nieuwe feature requests alleen nog in MPT backlog.

## Praktische werkafspraak

- Wijzigingen aan `addon/MidnightGuide/` alleen nog als experiment.
- Productiewijzigingen uitsluitend in `MidnightProfessionTracker`.

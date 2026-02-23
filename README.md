# DevCraft Basics

**Einstiegsplattform für IT-affine Nicht-Entwickler, die mit Vibe-Coding starten möchten.**

DevCraft Basics vermittelt das konzeptuelle Grundverständnis moderner Softwareentwicklung – klar, direkt und ohne unnötigen Fachjargon. Die Plattform läuft vollständig im Browser, ohne Server oder Installation.

---

## Worum geht es?

Viele Menschen arbeiten mit KI-Tools wie Claude oder Cursor und möchten damit Software bauen – aber Begriffe wie „Docker", „CI/CD" oder „Git" sind zwar bekannt, die Zusammenhänge fehlen noch. DevCraft Basics schließt genau diese Lücke.

Kein Entwicklungshintergrund nötig. Kein Terminal-Wissen vorausgesetzt. Nur Neugier.

---

## Zielgruppe

- IT-affin, aber ohne aktiven Entwicklungshintergrund
- Möchte mit Vibe-Coding einsteigen (Claude, Cursor, GitHub Copilot)
- Kennt Fachbegriffe aus dem Kontext, aber nie selbst damit gearbeitet
- Liest DevCraft Pro, versteht die Zusammenhänge ohne Einstieg aber noch nicht

---

## 15 Themenfelder

Jedes Thema enthält drei Subbereiche: **Mental Model** (das Warum), **Kernkonzepte** (das Was) und **Erster Schritt** (das Wie – direkt mit KI-Tool umsetzbar).

| # | Thema |
|---|-------|
| 1 | Software Development Process |
| 2 | Git & Versionskontrolle |
| 3 | Software-Architektur |
| 4 | Testing & Qualität |
| 5 | Security & Authentifizierung |
| 6 | Docker & Container |
| 7 | CI/CD Pipelines |
| 8 | Datenbanken |
| 9 | APIs & Integration |
| 10 | Monitoring & Observability |
| 11 | Dev-Tools & Entwicklungsumgebung |
| 12 | Fehlerbehandlung & Debugging |
| 13 | Performance & Optimierung |
| 14 | Dokumentation & Kommunikation |
| 15 | Prompt Engineering für Entwickler |

**45 Subbereiche · 30 Deep Dives** mit ASCII-Diagrammen und praxisnahen Code-Beispielen.

---

## Verwendung

```
index.html im Browser öffnen – fertig.
```

Kein Build-Schritt, kein `npm install`, kein Server. DevCraft Basics ist eine Single-Page-App, die direkt per `file://` oder über die Live-Server-Extension in VS Code läuft.

---

## Technische Struktur

```
DevCraftBasics/
├── index.html      # Einstiegspunkt – direkt im Browser öffnen
├── data.js         # Alle Inhalte (APP_DATA) – muss vor app.js geladen werden
├── app.js          # Router, State, Render-Engine (IIFE-Module-Pattern)
└── style.css       # Design System mit CSS Custom Properties
```

**Routing** erfolgt hash-basiert:
- `#/` → Startseite mit allen Themen
- `#/<topicId>` → Themenübersicht
- `#/<topicId>/<subareaId>` → Thema mit geöffnetem Deep Dive

**Inhalte erweitern:** Neues Thema oder neue Subarea direkt in `data.js` als Objekt einfügen – kein weiterer Schritt nötig.

---

## Weiterführendes

DevCraft Basics ist die Einstiegsebene. Wer tiefer einsteigen möchte, findet in **[DevCraft Pro](https://github.com/mwidauer/DevCraft)** die professionelle Referenz für erfahrene Entwickler – mit vollständigen Deep Dives, Best Practices und Pitfalls auf Senior-Dev-Niveau.

---

## Lizenz

MIT

# DevCraft Basics – CLAUDE.md

Dieses Dokument beschreibt das Projekt, die Zielgruppe und die Sprach- & Stilregeln für alle Inhalte in DevCraft Basics.

---

## Projektbeschreibung

**DevCraft Basics** ist eine Einstiegsplattform für IT-affine Nicht-Entwickler, die mit Vibe-Coding (KI-gestützter Softwareentwicklung) starten möchten. Es ist keine abgespeckte Version von DevCraft Pro, sondern eine eigenständige Lernplattform, die konzeptuelles Grundverständnis vermittelt.

**DevCraft Pro** (https://github.com/mwidauer/DevCraft) ist die weiterführende Referenz für erfahrene Entwickler.

---

## Zielgruppe

- IT-affin, aber ohne aktiven Entwicklungshintergrund
- Kennt Begriffe wie "Docker" oder "CI/CD" aus dem Kontext, hat aber nie selbst damit gearbeitet
- Möchte mit Vibe-Coding einsteigen (z.B. Claude, Cursor, GitHub Copilot)
- Liest DevCraft Pro, versteht aber Zusammenhänge ohne Vorwissen nicht
- Hat keine Angst vor dem Terminal, aber keine Erfahrung damit

---

## Sprache & Stil

- Alle Inhalte auf **Deutsch**
- Kommentare im Code auf **Deutsch**
- Zielgruppe: IT-affine Nicht-Entwickler, Einstieg Vibe-Coding
- Ton: **klar, direkt, ermutigend** – kein Fachjargon ohne Erklärung
- **Analogien und Alltagsbeispiele** sind ausdrücklich erwünscht
- Keine Annahme von Vorwissen zu Entwicklungstools oder -prozessen
- **Fachbegriffe** beim ersten Auftreten immer in 1 Satz erklären
- Keine vereinfachte Technik – korrekte Konzepte, zugängliche Sprache
- Negative Verstärker vermeiden ("das ist kompliziert", "das ist schwer") – stattdessen ermutigen
- Vibe-Coding-Kontext immer mitdenken: Wie hilft Claude/Cursor hier?

---

## Inhaltsstruktur pro Thema

Jedes Thema hat **3 Subbereiche** mit fixer Reihenfolge:

### 1. Mental Model (`id: "mental-model"`)
- Vermittelt das "Wozu" ohne Tools oder Befehle
- Alltagsanalogien, Kontext, Denkprinzipien
- Deep Dive: Pflicht – mit ASCII-Diagramm

### 2. Kernkonzepte (`id: "kernkonzepte"`)
- 4–6 Konzepte, die man kennen muss
- Maximal 3 Tools, maximal 2 Befehle
- Deep Dive: Optional

### 3. Erster Schritt (`id: "erster-schritt"`)
- 1 konkretes, ausführbares Szenario im Vibe-Coding-Kontext
- Schritt-für-Schritt mit KI-Tool (Claude, Cursor)
- Deep Dive: Pflicht – mit Code-Beispiel

---

## Technische Struktur

- **Single-Page-App** – alle Dateien lokal im Browser ausführbar, kein Server nötig
- `data.js` definiert `APP_DATA` (wird vor `app.js` geladen)
- `app.js` – Router, State, Render – nicht ohne Grund ändern
- `style.css` – Brand-Farbe `--brand: #2563eb` (Blau, visuelle Differenzierung zu Pro)

### Datenfelder in data.js

```js
// deepDive.furtherReading: {title, url} – NICHT {label, url, icon}
// deepDive.sections[].diagram: {content: '...'} – NICHT als String
// deepDive.title: Pflichtfeld bei deepDive-Objekt
// commands: [{cmd, desc}] oder null
// tools: [{name, purpose}] oder null
```

---

## Verlinkung zu DevCraft Pro

- Mental Model Deep Dive: Link zu gleichnamigem Thema in Pro (Format `#/<topicId>/<subareaId>`)
- Erster Schritt Deep Dive: Links zu relevanten Subareas in Pro
- Externe Links: Deutschsprachige Ressourcen bevorzugen, englisch mit Hinweis "(en)"

---

## Entscheidungsprotokoll

- **Entscheidung:** `app.js` homeView-Text wurde von "Professional Reference / Mastery" auf Basics-Sprache angepasst – da der Text hardcoded im JS liegt und sonst die Pro-Identität zeigen würde.
- **Entscheidung:** Stubs für die 12 nicht-pilot Themen haben vollständige Datenstruktur, aber kürzere Inhalte. Vollständige Überarbeitung in der nächsten Iteration.
- **Entscheidung:** `title` in Git-Thema von "Git & GitHub" auf "Git & Versionskontrolle" geändert – näher an der Einstiegsperspektive; gleiche `id: 'git'` für Pro-Verlinkung beibehalten.

/* ══════════════════════════════════════════════════════════════════
   DevCraft Basics – data.js
   15 Themen × 3 Subbereiche (Mental Model, Kernkonzepte, Erster Schritt)
   Zielgruppe: IT-affine Nicht-Entwickler, Einstieg Vibe-Coding
   Muss VOR app.js geladen werden (definiert APP_DATA)
   ══════════════════════════════════════════════════════════════════ */

const APP_DATA = {
  meta: { title: 'DevCraft Basics', version: '1.0.0' },
  topics: [

/* ══════════════════════════════════════════════════════════════════
   TOPIC 1 – SOFTWARE DEVELOPMENT PROCESS
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'devprocess',
  title: 'Software Development Process',
  icon: 'workflow',
  tagline: 'Von der Idee zur fertigen Software \u2013 wie Entwicklung wirklich funktioniert',
  color: '#6366F1',
  gradient: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 50%, #7C3AED 100%)',
  overview: 'Softwareentwicklung ist weit mehr als Code schreiben. Hinter jedem Programm stecken Prozesse: Wie wird entschieden was gebaut wird? Wie arbeiten Menschen zusammen? Wie wird sichergestellt dass die Software tut was sie soll? Moderne Teams arbeiten in kurzen Zyklen (Sprints) um schnell Feedback zu bekommen und flexibel zu bleiben.\n\nFür Vibe-Coder ist das Verständnis dieser Prozesse wertvoll: KI-Tools wie Claude funktionieren am besten wenn Aufgaben klar und strukturiert formuliert sind. Wer weiß wie Anforderungen in kleine Aufgaben aufgeteilt werden kann Claude präziser briefen.',
  relatedTopics: ['git', 'cicd', 'documentation'],
  subareas: [
    {
      id: 'mental-model',
      title: 'Mental Model: Software entsteht in Schritten',
      icon: 'lightbulb',
      concept: 'Softwareentwicklung folgt einem Prozess \u2013 von der Idee über Planung und Umsetzung bis zum fertigen Produkt.',
      body: 'Stell dir vor du baust ein Haus. Niemand fängt einfach an zu mauern \u2013 zuerst gibt es einen Plan dann werden Aufgaben verteilt und am Ende prüft ein Team ob alles korrekt ist. Regelmäßige Baubesprechungen halten alle auf dem gleichen Stand. Softwareentwicklung funktioniert ähnlich: kurze Zyklen regelmäßiges Feedback stetige Verbesserung.\n\nModerne Teams arbeiten in Sprints \u2013 kurzen festen Arbeitsphasen von 1-2 Wochen. Am Ende jedes Sprints steht eine funktionierende Version. Das hat einen großen Vorteil: Wenn Anforderungen sich ändern kostet es wenig \u2013 man ist erst beim zweiten Schritt nicht am Ende eines langen Weges.\n\nFür Vibe-Coder bedeutet das: Auch beim Arbeiten mit Claude lohnt sich ein strukturierter Ansatz. Bevor du eine große Änderung machst überlege: Was genau soll das Ergebnis sein? Wie weiß ich ob es funktioniert?',
      keyPoints: [
        'Kleine Schritte statt großer Würfe: Kurze Zyklen mit klar definiertem Ergebnis liefern schneller Feedback',
        'Klar formulierte Aufgaben: Eine Aufgabe ist erst fertig beschrieben wenn klar ist wie man prüft ob sie erledigt ist',
        'Regelmäßiger Austausch: Wer nicht kommuniziert baut am Bedarf vorbei \u2013 gilt für Teams und für KI-Tools',
        'Prüfung ist Teil des Prozesses: Testen ist kein Luxus sondern fester Schritt \u2013 wie die Bauabnahme beim Haus'
      ],
      tools: null,
      commands: null,
      deepDive: {
        title: 'Agile Grundprinzipien \u2013 das Denken hinter modernen Entwicklungsprozessen',
        intro: 'Agile ist kein Tool und kein Prozess \u2013 es ist eine Denkweise. Das Agile Manifest aus dem Jahr 2001 formulierte Grundprinzipien die heute in fast jedem Entwicklungsteam gelten. Für Einsteiger sind diese Prinzipien wichtig weil sie erklären warum moderne Teams so arbeiten wie sie arbeiten.',
        sections: [
          {
            heading: 'Wie ein Sprint funktioniert',
            prose: 'Ein Sprint ist ein kurzer fester Arbeitszyklus. Das Team wählt aus dem Aufgaben-Pool (Backlog) was in diesen 1-2 Wochen gebaut wird. Am Ende steht immer eine funktionierende demonstrierbare Software.',
            diagram: {
              content: `Sprint-Zyklus (typisch 2 Wochen)

  ┌─────────────┐    ┌──────────────────┐    ┌─────────────┐
  │  PLANNING   │───►│  SPRINT (1-2 W.) │───►│   REVIEW    │
  │  Was bauen  │    │  Daily Standup   │    │  Demo für   │
  │  wir?       │    │  (15 Min/Tag)    │    │  Kunden     │
  └─────────────┘    └──────────────────┘    └──────┬──────┘
                                                    │
                                           ┌────────▼────────┐
                                           │  RETROSPEKTIVE  │
                                           │  Was verbessern │
                                           │  wir nächstes   │
                                           │  Mal?           │
                                           └─────────────────┘

  Backlog            Sprint Backlog          Inkrement
  ┌──────────┐       ┌──────────┐           ┌──────────┐
  │ Task A   │ ────► │ Task A ✓ │  ──────►  │ Feature  │
  │ Task B   │       │ Task B ✓ │           │ läuft!   │
  │ Task C   │       │ Task C ✓ │           └──────────┘
  │ ...      │       └──────────┘
  └──────────┘`
            }
          }
        ],
        bestPractices: [
          'Aufgaben klein halten: Eine Aufgabe sollte in 1-2 Tagen erledigt sein \u2013 größere Aufgaben aufteilen',
          'Klare Akzeptanzkriterien: Bevor eine Aufgabe beginnt muss klar sein wann sie fertig ist',
          'Früh Feedback einholen: Lieber nach 2 Wochen eine kleine funktionierende Version zeigen als nach 3 Monaten eine große',
          'KI-Aufgaben wie Sprint-Aufgaben behandeln: Klar formulieren kleines Ziel prüfbares Ergebnis'
        ],
        pitfalls: [
          '"Erst wenn alles fertig ist zeige ich es" \u2013 zu spätes Feedback führt zu teuren Korrekturen',
          'Zu große Aufgaben: "Login-System bauen" ist keine gute Aufgabe \u2013 besser: "Login-Formular mit E-Mail-Validierung"',
          'Kein Akzeptanzkriterium: Ohne klares "fertig" endet jede Aufgabe in Diskussionen',
          'Prozess über Menschen stellen: Agile Regeln sind Hilfsmittel keine Gesetze \u2013 Ziel ist funktionierende Software'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: Software Development Process', url: '#/devprocess/agile-scrum' },
          { title: 'Agile Manifest (de)', url: 'https://agilemanifesto.org/iso/de/manifesto.html' }
        ]
      }
    },
    {
      id: 'kernkonzepte',
      title: 'Kernkonzepte: Sprint, Backlog, User Story',
      icon: 'book-open',
      concept: 'Die fünf Begriffe die in jedem Entwicklungsteam täglich fallen \u2013 und was sie für Vibe-Coder bedeuten.',
      body: 'Ein Backlog ist eine priorisierte Liste aller Aufgaben und Ideen \u2013 das Wichtigste steht oben. Eine User Story ist eine Aufgabe aus Nutzerperspektive: "Als Nutzer möchte ich mich mit E-Mail anmelden damit ich mein Konto verwalten kann." Diese Formulierung zwingt dazu den Nutzen zu beschreiben nicht die Implementierung.\n\nEin Sprint ist ein kurzer fester Arbeitszyklus von 1-2 Wochen. Eine Pull Request ist eine Codeänderung die zur Prüfung eingereicht wird bevor sie in die Hauptversion kommt. Die Definition of Done legt fest wann eine Aufgabe wirklich abgeschlossen ist.',
      keyPoints: [
        'Backlog = priorisierte Aufgabenliste \u2013 das Wichtigste steht oben',
        'User Story = Aufgabe aus Nutzerperspektive ("Als X möchte ich Y damit Z")',
        'Sprint = kurzer fester Arbeitszyklus (1-2 Wochen) mit klar definiertem Ziel',
        'Pull Request = Codeänderung zur Prüfung bevor sie in die Hauptversion kommt',
        'Definition of Done = Checkliste wann eine Aufgabe wirklich fertig ist'
      ],
      tools: [
        { name: 'GitHub Issues', purpose: 'Aufgabenverwaltung direkt im Code-Repository \u2013 kostenlos für alle GitHub-Nutzer' },
        { name: 'Linear', purpose: 'Modernes schnelles Issue-Tracking \u2013 gut für Solo-Projekte und kleine Teams' },
        { name: 'Notion', purpose: 'Flexibles Wissensmanagement für Projekt-Backlog und Dokumentation' }
      ],
      commands: null,
      deepDive: null
    },
    {
      id: 'erster-schritt',
      title: 'Erster Schritt: Aufgaben wie ein Profi formulieren',
      icon: 'play-circle',
      concept: 'Lerne Aufgaben so zu formulieren dass Claude sie präzise und zielgerichtet umsetzen kann.',
      body: 'Das Ziel: Du lernst wie man Entwicklungsaufgaben klar formuliert. 1. Nimm eine Funktion die du umsetzen möchtest. 2. Formuliere sie als User Story: "Als [Nutzerrolle] möchte ich [Aktion] damit [Nutzen]." 3. Füge Akzeptanzkriterien hinzu: Was muss passieren damit diese Aufgabe fertig ist? 4. Gib die formulierte Aufgabe an Claude und vergleiche das Ergebnis mit deinen Kriterien.',
      keyPoints: [
        'User Story + Akzeptanzkriterien = präziser Claude-Prompt \u2013 das Ergebnis wird deutlich besser',
        'Kleine Aufgaben funktionieren besser: Lieber 5 kleine User Stories als eine riesige',
        'Akzeptanzkriterien sind deine Test-Checkliste \u2013 prüfe nach ob Claude sie erfüllt hat',
        'Unklare Aufgaben produzieren unklare Ergebnisse \u2013 sowohl bei Menschen als auch bei KI'
      ],
      tools: [
        { name: 'Claude', purpose: 'KI-Tool zum Umsetzen klar formulierter User Stories' },
        { name: 'GitHub Issues', purpose: 'User Stories und Aufgaben festhalten und verfolgen' }
      ],
      commands: null,
      deepDive: {
        title: 'User Stories für KI-gestützte Entwicklung formulieren',
        intro: 'Eine gut formulierte User Story ist der beste Prompt. Sie enthält alle Informationen die Claude braucht: Wer will was warum und wie erkenne ich dass es fertig ist. 5 Minuten in eine gute Formulierung investieren spart oft Stunden an Korrekturen.',
        sections: [
          {
            heading: 'User Story Vorlage für Claude-Prompts',
            prose: 'Diese Vorlage verbindet das klassische User-Story-Format mit Akzeptanzkriterien \u2013 ideal als Grundlage für Claude-Anfragen.',
            codeBlock: {
              language: 'markdown',
              label: 'Vorlage: User Story als Claude-Prompt',
              code: `## Aufgabe
Als [Nutzerrolle] möchte ich [Funktion/Aktion],
damit [Nutzen/Ziel].

## Kontext
- Technologie: Node.js / React / Python (anpassen)
- Aktueller Stand: [was existiert bereits]

## Akzeptanzkriterien
- [ ] [Kriterium 1: messbar und prüfbar]
- [ ] [Kriterium 2: messbar und prüfbar]

## Nicht im Scope
- [Was explizit NICHT umgesetzt werden soll]`
            }
          }
        ],
        bestPractices: [
          'Schreibe Akzeptanzkriterien als Checkliste \u2013 jeder Punkt sollte mit Ja/Nein beantwortbar sein',
          'Definiere explizit was NICHT umgesetzt werden soll \u2013 das verhindert dass Claude zu viel baut',
          'Eine User Story eine Sache: Wenn eine Story mehr als 3 Kriterien hat lieber aufteilen',
          'Technologie-Kontext angeben: "Node.js mit Express" oder "React mit TypeScript" hilft Claude erheblich'
        ],
        pitfalls: [
          '"Bau mir eine komplette Login-Seite" \u2013 zu vage keine Kriterien das Ergebnis ist oft unbrauchbar',
          'Technische Lösungen in die User Story schreiben: "nutze JWT-Tokens" gehört in den Kontext nicht in die Story',
          'Keine Akzeptanzkriterien: Dann weiß niemand wann die Aufgabe fertig ist \u2013 weder Mensch noch KI',
          'Zu viele Aufgaben auf einmal: Claude macht 5 Dinge gleichzeitig oft schlechter als 5 Dinge nacheinander'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: Anforderungen & User Stories', url: '#/devprocess/requirements' },
          { title: 'DevCraft Pro: Code Review Kultur', url: '#/devprocess/code-review' }
        ]
      }
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 2 – GIT & VERSIONSKONTROLLE  [PILOT]
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'git',
  title: 'Git & Versionskontrolle',
  icon: 'git-branch',
  tagline: 'Die Zeitmaschine für deinen Code \u2013 sicher, nachvollziehbar, kollaborativ',
  color: '#F05032',
  gradient: 'linear-gradient(135deg, #F05032 0%, #C73E1D 50%, #E03A00 100%)',
  overview: 'Git ist das wichtigste Werkzeug für jeden der Code schreibt \u2013 egal ob alleine oder im Team. Es speichert jeden Entwicklungsstand ermöglicht paralleles Arbeiten und macht Fehler rückgängig machbar. Für Vibe-Coder ist Git unverzichtbar: Wenn du mit Claude oder Cursor arbeitest möchtest du jede funktionierende Version sichern bevor du Änderungen vornimmst.\n\nGitHub ist die bekannteste Plattform die Git um Collaboration-Features erweitert: Pull Requests, Issues, Actions. Fast jedes Open-Source-Projekt lebt dort und die meisten Arbeitgeber erwarten grundlegende GitHub-Kenntnisse.',
  relatedTopics: ['devprocess', 'cicd', 'tooling'],
  subareas: [
    {
      id: 'mental-model',
      title: 'Mental Model: Die Zeitmaschine für deinen Code',
      icon: 'lightbulb',
      concept: 'Git speichert jeden Stand deines Codes als Snapshot \u2013 du kannst jederzeit in die Vergangenheit reisen und Änderungen rückgängig machen.',
      body: 'Kennst du die "Track Changes"-Funktion in Word? Git ist das mächtigere Äquivalent für Code. Jedes Mal wenn du eine sinnvolle Änderung gemacht hast erstellst du einen Commit \u2013 einen dauerhaften Snapshot des gesamten Projektstands mit einer kurzen Beschreibung. Git speichert diese Snapshots in einer Kette sodass du jederzeit zu einem früheren Stand zurückkehren kannst.\n\nBesonders wertvoll ist die Idee des Branch \u2013 eines parallelen Entwicklungsstrangs. Stell dir vor du arbeitest an einem neuen Feature bist aber mittendrin nicht sicher ob der Ansatz funktioniert. Mit einem Branch arbeitest du in einer eigenen Spur weiter ohne den funktionierenden Hauptcode zu gefährden. Wenn das Feature fertig ist "mergst" du es in den Hauptstrang zurück.\n\nFür Vibe-Coder hat Git eine besondere Bedeutung: Bevor du Claude eine große Änderung machen lässt committe den aktuellen Stand. Wenn das Ergebnis nicht gefällt kannst du mit einem einzigen Befehl zurückkehren.',
      keyPoints: [
        'Commit = dauerhafter Snapshot: Jeder Commit ist ein sicherer Punkt zu dem du jederzeit zurückkehren kannst',
        'Branch = paralleler Entwicklungsstrang: Neue Features entstehen in einem eigenen Branch ohne den Hauptcode zu gefährden',
        'Remote = die Cloud-Kopie: GitHub speichert deinen Code sicher online auch wenn dein Laptop kaputt geht',
        'Merge = Zusammenführen: Fertiger Branch-Code wird in den Hauptstrang integriert',
        'Commit vor KI-Änderungen: Immer committe bevor du Claude größere Umbauarbeiten machen lässt'
      ],
      tools: null,
      commands: null,
      deepDive: {
        title: 'Die drei Bereiche von Git',
        intro: 'Git hat eine steile Lernkurve weil die meisten Tutorials direkt in Befehle einsteigen. Das Verständnis der drei Bereiche (Working Directory, Staging Area, Repository) macht alles andere sofort klar.',
        sections: [
          {
            heading: 'Drei-Zonen-Architektur von Git',
            prose: 'In Git gibt es drei Orte zwischen denen deine Dateien wandern. Das Verständnis dieser Drei-Zonen-Architektur löst die meiste Verwirrung bei Git-Einsteigern.',
            diagram: {
              content: `┌─────────────────────────────────────────────────────────────────┐
│                      DEIN PROJEKTORDNER                         │
│                                                                 │
│  ┌──────────────┐   git add    ┌──────────────┐               │
│  │  Working     │  ──────────► │  Staging     │               │
│  │  Directory   │              │  Area        │               │
│  │              │              │  "Bereit zum │               │
│  │  Deine       │ ◄─────────── │   Commit"    │               │
│  │  aktuellen   │  git restore │              │               │
│  │  Dateien     │              └──────┬───────┘               │
│  └──────────────┘                     │ git commit             │
│                                       ▼                        │
│                               ┌──────────────┐                │
│                               │  Repository  │                │
│                               │  (.git)      │                │
│                               │  Alle        │                │
│                               │  Commits     │                │
│                               └──────┬───────┘                │
│                                      │ git push                │
│                                      ▼                         │
│                               ┌──────────────┐                │
│                               │   GitHub     │                │
│                               │   (Remote)   │                │
│                               │   online     │                │
│                               └──────────────┘                │
└─────────────────────────────────────────────────────────────────┘`
            }
          }
        ],
        bestPractices: [
          'Committe oft und früh: Lieber viele kleine Commits als einen riesigen am Ende des Tages',
          'Schreibe aussagekräftige Commit-Nachrichten: "Login-Funktion hinzugefügt" statt "Änderungen"',
          'Commit vor KI-Änderungen: Jede Claude-Sitzung = vorher den aktuellen Stand committen',
          'Nutze eine .gitignore: Damit keine Passwörter API-Keys oder temporäre Dateien in Git landen'
        ],
        pitfalls: [
          'API-Keys und Passwörter im Code committen \u2013 einmal in Git immer in Git (und öffentlich auf GitHub!)',
          'Den Main-Branch direkt bearbeiten \u2013 nutze immer einen eigenen Branch für neue Features',
          'Zu lange zwischen Commits warten \u2013 große uncommittete Änderungen sind schwer rückgängig zu machen',
          '"git push --force" ohne zu verstehen was es tut \u2013 kann Commits anderer Personen dauerhaft löschen'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: Git & GitHub', url: '#/git/grundlagen' },
          { title: 'Git \u2013 offizielles Buch (de)', url: 'https://git-scm.com/book/de/v2' }
        ]
      }
    },
    {
      id: 'kernkonzepte',
      title: 'Kernkonzepte: Repository, Commit, Branch',
      icon: 'book-open',
      concept: 'Die fünf zentralen Begriffe von Git \u2013 ohne sie wirst du keine Fehlermeldung und keine Anleitung verstehen.',
      body: 'Ein Repository (kurz: Repo) ist der Container für dein gesamtes Projekt inklusive der vollständigen Versionshistorie. Es ist ein normaler Ordner mit einem versteckten .git-Unterordner in dem Git alle Snapshots speichert.\n\nEin Commit ist ein gespeicherter Snapshot. Jeder Commit hat eine eindeutige ID einen Autor ein Datum und eine Nachricht. Ein Branch ist ein unabhängiger Entwicklungsstrang \u2013 der Hauptbranch heißt typisch "main". Push bedeutet lokale Commits auf GitHub hochladen. Pull Request ist eine Anfrage einen Branch in main zu mergen.',
      keyPoints: [
        'Repository = das gesamte Projekt mit vollständiger Versionshistorie',
        'Commit = ein Snapshot mit Beschreibung \u2013 unveränderlich und dauerhaft',
        'Branch = paralleler Arbeitsstrang \u2013 main ist die stabile Hauptversion',
        'Push = lokale Commits auf GitHub hochladen',
        'Pull Request = Anfrage einen Branch in main zu mergen (mit Review)'
      ],
      tools: [
        { name: 'Git', purpose: 'Das Versionskontroll-System selbst \u2013 auf Mac/Linux oft vorinstalliert auf Windows via git-scm.com' },
        { name: 'GitHub', purpose: 'Webplattform für Git-Repositories Pull Requests und Teamzusammenarbeit' },
        { name: 'GitHub Desktop', purpose: 'Grafische Oberfläche für Git \u2013 ideal für den Einstieg ohne Kommandozeile' }
      ],
      commands: [
        { cmd: 'git status', desc: 'Zeigt den aktuellen Zustand an: welche Dateien verändert welche bereit zum Commit sind' },
        { cmd: 'git add . && git commit -m "Beschreibung"', desc: 'Fügt alle Änderungen zum Staging hinzu und erstellt einen Commit mit Beschreibung' },
        { cmd: 'git push origin main', desc: 'Lädt alle lokalen Commits auf GitHub hoch (zum Branch main)' }
      ],
      deepDive: null
    },
    {
      id: 'erster-schritt',
      title: 'Erster Schritt: Dein erstes Repository anlegen',
      icon: 'play-circle',
      concept: 'Ein neues Git-Repository anlegen mit GitHub verbinden und den ersten Commit pushen.',
      body: 'Das Ziel: Du legst ein neues Git-Repository für dein Projekt an und verbindest es mit GitHub. 1. GitHub-Account anlegen: Falls noch nicht vorhanden erstelle einen Account auf github.com. 2. Repository initialisieren: Öffne ein Terminal im Projektordner und führe git init aus. Das erstellt das versteckte .git-Verzeichnis. 3. .gitignore erstellen: Bitte Claude "Erstelle eine .gitignore-Datei für ein Node.js-Projekt". 4. Ersten Commit erstellen: git add . && git commit -m "Erster Commit". 5. GitHub-Repository erstellen: Auf github.com "New" klicken. 6. Verbinden und pushen: GitHub zeigt dir exakte Befehle zum Kopieren.',
      keyPoints: [
        'Erstelle zuerst die .gitignore \u2013 einmal vergessen und Passwörter landen auf GitHub',
        'Nutze aussagekräftige Commit-Nachrichten \u2013 "Erster Commit: Grundstruktur" ist gut "stuff" ist schlecht',
        'Mache nach jeder funktionierenden Änderung einen Commit \u2013 nicht nur am Ende des Tages',
        'GitHub Desktop ist eine gute Alternative zur Kommandozeile für den Einstieg'
      ],
      tools: [
        { name: 'Git', purpose: 'Wird über die Kommandozeile genutzt \u2013 auf Mac/Linux meist vorinstalliert auf Windows via git-scm.com' },
        { name: 'GitHub', purpose: 'Weboberfläche zum Erstellen von Remote-Repositories und Verwalten von Code' }
      ],
      commands: [
        { cmd: 'git init', desc: 'Initialisiert ein neues Git-Repository im aktuellen Ordner' },
        { cmd: 'git add . && git commit -m "Erster Commit"', desc: 'Staged alle Dateien und erstellt den ersten Commit' },
        { cmd: 'git push -u origin main', desc: 'Verbindet das lokale Repository mit GitHub und pusht den ersten Commit' }
      ],
      deepDive: {
        title: 'Sicher arbeiten mit Git und Claude',
        intro: 'Git mit GitHub zu verbinden ist der erste Schritt um deinen Code sicher zu haben. Für Vibe-Coder ist es darüber hinaus essentiell: Du kannst Claude immer auf den aktuellen Stand deines Repos verweisen \u2013 und nach jeder KI-Sitzung den Stand sichern.',
        sections: [
          {
            heading: 'Der Vibe-Coding Workflow mit Git',
            prose: 'Ein einfaches aber wirkungsvolles Muster für KI-gestützte Entwicklung: Bevor du Claude oder Cursor größere Änderungen machen lässt committe den aktuellen Stand.',
            codeBlock: {
              language: 'bash',
              label: 'Sicherer Workflow: Commit vor KI-Änderungen',
              code: `# 1. Aktuellen Stand sichern (VOR Claude-Änderungen)
git add .
git commit -m "Stand vor Claude-Refactoring: Login-Seite"

# 2. Claude die Änderungen machen lassen
# (z.B. "Refactore die Login-Logik für bessere Fehlerbehandlung")

# 3. Ergebnis prüfen – funktioniert es?

# FALLS JA: Ergebnis committen
git add .
git commit -m "Login refactored: bessere Fehlerbehandlung"
git push

# FALLS NEIN: Zum letzten Commit zurückkehren
git restore .
# (löscht alle Änderungen seit letztem Commit)`
            }
          }
        ],
        bestPractices: [
          'Commit vor jeder KI-Sitzung: So kannst du Ergebnisse die dir nicht gefallen einfach rückgängig machen',
          'Nutze .env-Dateien für Geheimnisse und trage .env in .gitignore ein \u2013 niemals API-Keys in den Code',
          'Regelmäßig pushen: Nach jedem Commit auch pushen \u2013 so ist der Code auch bei Laptop-Ausfall sicher',
          'Branches für Features: git checkout -b feature/neue-seite erstellt einen sicheren Entwicklungsstrang'
        ],
        pitfalls: [
          'node_modules vergessen in .gitignore: Das Verzeichnis hat oft Hunderttausende Dateien \u2013 ein Alptraum in Git',
          '.env-Datei mit echten API-Keys auf GitHub: Einmal öffentlich gepusht müssen alle Keys sofort rotiert werden',
          'Zu seltene Commits: Ohne Commit-Historie kann man nicht zur letzten funktionierenden Version zurück',
          '"git reset --hard" falsch verstehen: Dieser Befehl löscht alle uncommitteten Änderungen unwiderruflich'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: Git Workflows', url: '#/git/workflows' },
          { title: 'DevCraft Pro: GitHub Actions', url: '#/cicd/github-actions' },
          { title: 'GitHub Docs: Erste Schritte (de)', url: 'https://docs.github.com/de/get-started' }
        ]
      }
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 3 – SOFTWARE-ARCHITEKTUR
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'architecture',
  title: 'Software-Architektur',
  icon: 'layers',
  tagline: 'Der Bauplan deiner Software \u2013 Struktur und Zusammenhänge vor dem ersten Code',
  color: '#0EA5E9',
  gradient: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 50%, #0369A1 100%)',
  overview: 'Software-Architektur ist der Bauplan einer Anwendung. Sie legt fest wie die verschiedenen Teile zusammenarbeiten: Wo liegt die Benutzeroberfläche? Wo die Geschäftslogik? Wo werden Daten gespeichert? Eine gute Architektur macht Software verständlich erweiterbar und wartbar.\n\nFür Vibe-Coder ist ein grundlegendes Architekturverständnis wertvoll: Wenn du Claude bittest eine neue Funktion zu bauen hilft es zu wissen wo diese Funktion hingehört. Und wenn dein Projekt wächst verhindert eine bewusste Architektur das Spaghetti-Code-Problem.',
  relatedTopics: ['apis', 'databases', 'testing'],
  subareas: [
    {
      id: 'mental-model',
      title: 'Mental Model: Stadtplanung für Software',
      icon: 'lightbulb',
      concept: 'Software-Architektur ist der Stadtplan deiner Anwendung \u2013 er legt fest wo was hingehört bevor du anfängst zu bauen.',
      body: 'Stell dir eine Stadt vor. Ohne Stadtplanung entsteht Chaos: Wohngebiete neben Industrie Straßen die ins Nichts führen keine Infrastruktur. Mit Planung entsteht eine Stadt die funktioniert und wachsen kann. Software-Architektur ist dasselbe Prinzip auf Code angewendet.\n\nDie bekannteste Grundstruktur ist die Drei-Schichten-Architektur: Präsentationsschicht (was der Nutzer sieht) Logikschicht (was die App berechnet und entscheidet) Datenschicht (was gespeichert wird). Diese Trennung sorgt dafür dass Änderungen an einer Schicht die anderen nicht zwingend berühren.\n\nFür Vibe-Coder: Wenn du Claude fragst "Wo soll ich diese Validierungslogik einbauen?" ist die Antwort von der Architektur abhängig. Ein grundlegendes Verständnis hilft dir Claudes Vorschläge besser einzuordnen.',
      keyPoints: [
        'Trennung der Verantwortlichkeiten: Jeder Teil der Software hat eine klare Aufgabe \u2013 und nur diese',
        'Frontend und Backend: Die Benutzeroberfläche (Frontend) und die Geschäftslogik (Backend) sind oft getrennte Welten',
        'Skalierbarkeit: Gute Architektur macht es einfach einzelne Teile zu verbessern ohne alles neu bauen zu müssen',
        'Kommunikation über APIs: Verschiedene Teile der Software sprechen über definierte Schnittstellen miteinander'
      ],
      tools: null,
      commands: null,
      deepDive: {
        title: 'Drei-Schichten-Architektur \u2013 das Fundament moderner Anwendungen',
        intro: 'Die Drei-Schichten-Architektur ist das Grundmodell hinter den meisten Webanwendungen. Sie trennt Darstellung Logik und Daten \u2013 und macht jede Schicht unabhängig austauschbar.',
        sections: [
          {
            heading: 'Drei Schichten im Überblick',
            prose: 'Jede Schicht hat eine klar definierte Aufgabe. Diese Trennung ist nicht nur Theorie \u2013 sie entscheidet darüber wie gut eine Anwendung wartbar und erweiterbar ist.',
            diagram: {
              content: `┌─────────────────────────────────────────────────────┐
│           PRÄSENTATIONSSCHICHT (Frontend)           │
│     Was der Nutzer sieht und womit er interagiert   │
│     Browser: HTML, CSS, JavaScript / React / Vue    │
└───────────────────────┬─────────────────────────────┘
                        │ HTTP-Anfragen (API)
                        ▼
┌─────────────────────────────────────────────────────┐
│            LOGIKSCHICHT (Backend / API)             │
│     Geschäftslogik, Validierung, Berechnungen       │
│     Node.js / Python / Java / PHP                  │
│     Entscheidet WAS mit Daten passiert              │
└───────────────────────┬─────────────────────────────┘
                        │ Datenbankabfragen
                        ▼
┌─────────────────────────────────────────────────────┐
│              DATENSCHICHT (Datenbank)               │
│     Persistente Speicherung aller Daten             │
│     PostgreSQL / MySQL / MongoDB                    │
│     Speichert nur \u2013 entscheidet nicht                │
└─────────────────────────────────────────────────────┘`
            }
          }
        ],
        bestPractices: [
          'Schichten trennen: Datenbanklogik gehört nicht ins Frontend und Darstellungslogik nicht ins Backend',
          'Eine Aufgabe pro Modul: Wenn ein Code-Modul zu viele Aufgaben hat ist das ein Zeichen für schlechte Architektur',
          'APIs als Verträge: Die Schnittstelle zwischen Schichten klar definieren \u2013 das macht Änderungen sicherer',
          'Mit Claude Architektur besprechen: "Wo soll diese Logik hin \u2013 Frontend oder Backend?" ist eine gute Frage'
        ],
        pitfalls: [
          'Alles in eine Datei: Am Anfang verführerisch aber bei 1000 Zeilen ist die Datei unwartbar',
          'Datenbanklogik im Frontend: SQL-Queries direkt im Browser wären ein Sicherheitsalptraum',
          'Zu früh über-architekturieren: Nicht jede kleine App braucht Microservices \u2013 einfach beginnen und wachsen',
          '"Das baue ich später um": Schlechte Architektur früh zu ignorieren macht spätere Änderungen teurer'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: Software-Architektur', url: '#/architecture/grundlagen' },
          { title: 'DevCraft Pro: APIs & Integration', url: '#/apis/rest-apis' }
        ]
      }
    },
    {
      id: 'kernkonzepte',
      title: 'Kernkonzepte: Frontend, Backend, API, Datenbank',
      icon: 'book-open',
      concept: 'Die vier Grundbausteine moderner Webanwendungen \u2013 und wie sie zusammenspielen.',
      body: 'Das Frontend ist alles was der Nutzer sieht und anfassen kann: Buttons Formulare Texte Bilder. Es läuft im Browser des Nutzers. Das Backend ist der unsichtbare Teil: Server Geschäftslogik Sicherheitsüberprüfungen. Es läuft auf einem Server in der Cloud.\n\nEine API (Application Programming Interface \u2013 zu Deutsch: Programmierschnittstelle) ist der definierte Kommunikationskanal zwischen Frontend und Backend. Die Datenbank speichert alle persistenten Daten \u2013 Nutzerkonten Bestellungen Artikel. Sie ist die einzige Komponente die sich erinnert wenn der Server neugestartet wird.',
      keyPoints: [
        'Frontend = was Nutzer sehen (Browser) \u2013 HTML, CSS, JavaScript',
        'Backend = Geschäftslogik auf dem Server \u2013 Node.js, Python, Java und viele mehr',
        'API = Kommunikationskanal zwischen Frontend und Backend (meist über HTTP)',
        'Datenbank = dauerhafter Datenspeicher \u2013 SQL für strukturierte, NoSQL für flexible Daten'
      ],
      tools: [
        { name: 'VS Code', purpose: 'Der meistgenutzte Code-Editor \u2013 funktioniert für Frontend und Backend gleichermaBen' },
        { name: 'Postman', purpose: 'API-Tester: Schicke HTTP-Anfragen an Backends und sieh die Antworten \u2013 ohne Frontend' },
        { name: 'draw.io', purpose: 'Kostenloses Diagramm-Tool zum Visualisieren von Architekturen \u2013 direkt im Browser' }
      ],
      commands: null,
      deepDive: null
    },
    {
      id: 'erster-schritt',
      title: 'Erster Schritt: Architektur mit Claude planen',
      icon: 'play-circle',
      concept: 'Bevor du den ersten Code schreibst: die Architektur deines Projekts mit Claude skizzieren.',
      body: 'Das Ziel: Du lernst wie man vor dem Coden kurz über die Struktur nachdenkt \u2013 und Claude als Sparringspartner nutzt. 1. Beschreibe Claude dein Projekt: "Ich möchte eine Webanwendung bauen die [Beschreibung]. Nutzer können [Aktionen]." 2. Frage nach der passenden Architektur: "Welche grundlegende Architektur empfiehlst du?" 3. Bitte um ein einfaches Diagramm: "Zeige mir die Hauptkomponenten und ihre Verbindungen." 4. Stelle Fragen zu Punkten die unklar sind. 5. Halte das Ergebnis in einer README-Sektion fest.',
      keyPoints: [
        'Plane bevor du baust: 30 Minuten Architektur-Überlegung sparen Stunden an Umbauarbeiten',
        'Fange einfach an: Ein Monolith (alles in einer App) ist für kleine Projekte völlig richtig',
        'Nutze Claude als Architektur-Berater: Beschreibe dein Projekt genau und frage nach Empfehlungen',
        'Dokumentiere die Entscheidung: Eine kurze README-Sektion "Architektur" hilft dir und Claude beim späteren Arbeiten'
      ],
      tools: [
        { name: 'Claude', purpose: 'KI-Berater für Architekturentscheidungen \u2013 beschreibe dein Projekt und frage nach Empfehlungen' },
        { name: 'draw.io', purpose: 'Einfaches Diagramm-Tool zum Visualisieren der geplanten Architektur' }
      ],
      commands: null,
      deepDive: {
        title: 'Architektur-Entscheidungen dokumentieren',
        intro: 'Eine kurze Dokumentation der Architektur-Entscheidungen hilft dir in der Zukunft \u2013 und macht Claude zu einem besseren Helfer weil du den Kontext immer mitgeben kannst.',
        sections: [
          {
            heading: 'Einfache Architektur-Dokumentation (README)',
            prose: 'Diese Vorlage zeigt wie du die Architektur deines Projekts in wenigen Zeilen dokumentierst. Sie ist ideal als Kontext für Claude-Anfragen.',
            codeBlock: {
              language: 'markdown',
              label: 'README.md \u2013 Architektur-Sektion',
              code: `## Architektur

### Überblick
[Kurze Beschreibung: Was macht die App? Wer nutzt sie?]

### Hauptkomponenten
- **Frontend**: React SPA, läuft im Browser
- **Backend**: Node.js/Express API, Port 3000
- **Datenbank**: PostgreSQL für persistente Daten

### Kommunikation
Frontend --(REST API)--> Backend --(SQL)--> Datenbank

### Wichtige Entscheidungen
- Warum diese Architektur: [Begründung]
- Bewusst weggelassen: [z.B. kein separater Auth-Service]`
            }
          }
        ],
        bestPractices: [
          'Schreibe die Architektur-Doku bevor du anfängst zu coden \u2013 nicht danach',
          'Gib Claude die Architektur-Doku als Kontext: "Hier ist meine aktuelle Architektur: [Doku]. Jetzt möchte ich..."',
          'Halte die Doku kurz: 1 Seite ist besser als 10 \u2013 lange Dokus werden nicht gepflegt',
          'Überarbeite die Doku wenn sich die Architektur ändert \u2013 veraltete Doku ist schlimmer als keine'
        ],
        pitfalls: [
          'Zu komplexe Architektur für einfache Projekte: Microservices für eine Todo-App sind Overkill',
          'Keine Dokumentation: Ohne Kontext macht Claude Vorschläge die nicht zur bestehenden Architektur passen',
          'Architektur in Stein gemeißelt sehen: Gute Architektur entwickelt sich \u2013 frühe Entscheidungen dürfen revidiert werden',
          'Frontend-Logik im Backend oder umgekehrt: Diese Vermischung ist der häufigste Einsteigerfehler'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: Software-Architektur Patterns', url: '#/architecture/patterns' },
          { title: 'DevCraft Pro: APIs & Integration', url: '#/apis/rest-apis' }
        ]
      }
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 4 – TESTING & QUALITÄT
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'testing',
  title: 'Testing & Qualität',
  icon: 'test-tube-2',
  tagline: 'Fehler finden bevor Nutzer sie finden \u2013 automatisiert und zuverlässig',
  color: '#10B981',
  gradient: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)',
  overview: 'Tests sind die automatische Qualitätskontrolle deiner Software. Sie prüfen ob dein Code das tut was er soll \u2013 und geben dir Sicherheit wenn du Änderungen vornimmst. Für Vibe-Coder haben Tests eine besondere Bedeutung: Wenn Claude Änderungen an deinem Code macht sagen dir die Tests sofort ob etwas kaputt gegangen ist. Tests sind dein Sicherheitsnetz für KI-gestützte Entwicklung.',
  relatedTopics: ['cicd', 'architecture', 'errorhandling'],
  subareas: [
    {
      id: 'mental-model',
      title: 'Mental Model: Die automatische Qualitätskontrolle',
      icon: 'lightbulb',
      concept: 'Tests sind automatische Prüfungen die sicherstellen dass dein Code das tut was er soll \u2013 auch nach Änderungen.',
      body: 'Stell dir eine Fabrik vor die Glühbirnen produziert. Am Ende des Fließbands gibt es eine Prüfstation: Jede Glühbirne wird kurz eingesteckt. Leuchtet sie? Wenn nicht wird sie aussortiert \u2013 bevor sie zum Kunden gelangt. Software-Tests funktionieren genauso: Sie prüfen automatisch ob bestimmte Funktionen korrekt arbeiten.\n\nDer größte Vorteil: Tests laufen in Sekunden und können jederzeit wiederholt werden. Wenn du eine Funktion änderst laufen alle Tests erneut \u2013 und du siehst sofort ob durch die Änderung etwas anderes kaputt gegangen ist. Das nennt sich Regressionstest.\n\nFür Vibe-Coder ist das Gold wert: Wenn Claude deinen Code verändert sagen die Tests dir sofort ob die Änderung sicher war. Ohne Tests vertraust du blind darauf dass KI-generierter Code korrekt ist.',
      keyPoints: [
        'Tests sind Dokumentation: Ein Test beschreibt genau was eine Funktion tun soll \u2013 besser als jeder Kommentar',
        'Frühzeitig testen spart Zeit: Einen Fehler im Test zu finden kostet Sekunden \u2013 beim Nutzer zu finden kostet Stunden',
        'Regressionen verhindern: Tests stellen sicher dass alte Funktionen auch nach neuen Änderungen noch funktionieren',
        'Sicherheitsnetz für KI-Code: Tests prüfen ob Claude-generierter Code korrekt ist \u2013 nicht nur ob er läuft'
      ],
      tools: null,
      commands: null,
      deepDive: {
        title: 'Test-Pyramide \u2013 welche Tests wann einsetzen',
        intro: 'Nicht alle Tests sind gleich. Die Test-Pyramide beschreibt wie das Verhältnis verschiedener Test-Typen aussehen sollte: viele schnelle Unit Tests an der Basis weniger langsame End-to-End Tests an der Spitze.',
        sections: [
          {
            heading: 'Die Test-Pyramide',
            prose: 'Die Test-Pyramide zeigt das optimale Verhältnis verschiedener Test-Typen. Unit Tests sind die Grundlage: schnell isoliert günstig. Integration Tests prüfen das Zusammenspiel. E2E Tests simulieren echte Nutzer.',
            diagram: {
              content: `              /\
             /  \
            / E2E\          Wenige – langsam – teuer
           /------\         Simuliert echte Nutzung
          /        \        (Browser-Tests mit Playwright)
         / INTEGRAT.\
        /------------\      Mittel – prüft Zusammenspiel
       /              \     mehrerer Komponenten
      / UNIT TESTS     \
     /------------------\   Viele – schnell – günstig
    /                    \  Prüft einzelne Funktionen
   /______________________\

Unit Tests:        70-80% aller Tests
Integration Tests: 15-20% aller Tests
E2E Tests:          5-10% aller Tests`
            }
          }
        ],
        bestPractices: [
          'Starte mit Unit Tests: Eine Funktion testen ist einfacher als ein komplettes System testen',
          'Teste Verhalten nicht Implementierung: Was gibt die Funktion zurück \u2013 nicht wie sie es intern berechnet',
          'Claude Tests schreiben lassen: "Schreibe Unit Tests für diese Funktion" ist ein sehr guter Claude-Prompt',
          'Grüne Tests vor Commit: Führe Tests aus bevor du commitest \u2013 eine kaputte Test-Suite ist ein rotes Signal'
        ],
        pitfalls: [
          'Nur Happy-Path testen: Was passiert wenn ein Nutzer eine leere E-Mail eingibt? Tests müssen Edge Cases abdecken',
          'Tests als Bürde sehen: Tests die nie fehlschlagen schützen auch nicht \u2013 sie müssen ehrlich sein',
          '100% Coverage als Ziel: Coverage ist eine Metrik nicht ein Ziel \u2013 wichtig ist ob kritische Pfade getestet sind',
          'Tests nach dem Code schreiben als lästige Pflicht: Besser wäre Tests zu schreiben während man den Code versteht'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: Testing & Qualität', url: '#/testing/grundlagen' },
          { title: 'DevCraft Pro: CI/CD Pipelines', url: '#/cicd/grundlagen' }
        ]
      }
    },
    {
      id: 'kernkonzepte',
      title: 'Kernkonzepte: Unit Test, Integration Test, Test-Framework',
      icon: 'book-open',
      concept: 'Die drei Test-Typen und die Tools die du brauchst um mit dem Testen anzufangen.',
      body: 'Ein Unit Test (Einzel-Test) prüft eine einzelne Funktion isoliert: "Wenn ich addiere(2, 3) aufrufe erhalte ich 5." Er ist schnell und fokussiert. Ein Integration Test prüft ob mehrere Komponenten korrekt zusammenarbeiten. Ein Test-Framework ist eine Bibliothek die das Schreiben und Ausführen von Tests vereinfacht.\n\nJest ist das bekannteste für JavaScript/Node.js \u2013 es kommt mit allem was man braucht: Test-Runner Assertions und Code-Coverage. Pytest ist das Äquivalent für Python.',
      keyPoints: [
        'Unit Test = prüft eine einzelne Funktion isoliert \u2013 schnell und fokussiert',
        'Integration Test = prüft ob mehrere Komponenten zusammenarbeiten \u2013 langsamer aber umfassender',
        'Test-Framework = Bibliothek die Tests strukturiert und ausführt (z.B. Jest, Pytest)',
        'Assertion = die Prüfaussage in einem Test: "Ich erwarte dass X gleich Y ist"',
        'Test Coverage = Prozentzahl wie viel Code durch Tests abgedeckt ist \u2013 eine Orientierung kein Ziel'
      ],
      tools: [
        { name: 'Jest', purpose: 'Das bekannteste Test-Framework für JavaScript/Node.js \u2013 kommt mit allem inklusive Coverage' },
        { name: 'Pytest', purpose: 'Das Standard-Test-Framework für Python \u2013 einfach zu lernen mächtig in der Anwendung' },
        { name: 'Playwright', purpose: 'End-to-End Tests die einen echten Browser steuern \u2013 für komplexere UI-Tests' }
      ],
      commands: [
        { cmd: 'npm test', desc: 'Führt alle Tests im Projekt aus (wenn Jest konfiguriert ist)' },
        { cmd: 'npx jest --coverage', desc: 'Führt Tests aus und zeigt Code-Coverage-Bericht an' }
      ],
      deepDive: null
    },
    {
      id: 'erster-schritt',
      title: 'Erster Schritt: Deinen ersten Test mit Claude schreiben',
      icon: 'play-circle',
      concept: 'Mit Hilfe von Claude Unit Tests für eine bestehende Funktion schreiben und ausführen.',
      body: 'Das Ziel: Du schreibst deinen ersten automatisierten Unit Test \u2013 mit Hilfe von Claude. 1. Wähle eine einfache Funktion aus deinem Projekt. 2. Frage Claude: "Ich habe diese Funktion: [Code einfügen]. Schreibe Unit Tests mit Jest die die wichtigsten Fälle abdecken inklusive Edge Cases." 3. Erstelle eine Testdatei (z.B. meineFunktion.test.js). 4. Installiere Jest falls nötig: npm install --save-dev jest. 5. Führe die Tests aus: npm test. 6. Lese die Ausgabe: Grüner Haken = Test bestanden Rotes X = Test gescheitert.',
      keyPoints: [
        'Lass Claude Tests schreiben: "Schreibe Unit Tests für diese Funktion" ist ein sehr effektiver Prompt',
        'Führe Tests nach jeder Claude-Änderung aus: So weißt du sofort ob etwas kaputt gegangen ist',
        'Beginne mit der wichtigsten Funktion: Nicht alles sofort testen \u2013 mit dem Kritischsten anfangen',
        'Rote Tests sind gute Nachrichten: Sie haben einen Fehler gefunden bevor ein Nutzer es tat'
      ],
      tools: [
        { name: 'Jest', purpose: 'Test-Framework für JavaScript \u2013 npm install --save-dev jest' },
        { name: 'Claude', purpose: 'KI-Tool zum Generieren von Tests \u2013 zeige die Funktion und frage nach Tests' }
      ],
      commands: [
        { cmd: 'npm install --save-dev jest', desc: 'Installiert Jest als Entwicklungsabhängigkeit im Projekt' },
        { cmd: 'npm test', desc: 'Führt alle Test-Dateien (*.test.js) im Projekt aus' },
        { cmd: 'npx jest meineDatei.test.js', desc: 'Führt nur die Tests einer bestimmten Datei aus' }
      ],
      deepDive: {
        title: 'Erster Unit Test: Schritt für Schritt',
        intro: 'Ein Unit Test besteht aus drei Phasen: Arrange (Vorbereitung) Act (Ausführung) Assert (Prüfung). Diese Struktur macht Tests lesbar und nachvollziehbar \u2013 auch für Claude wenn du ihn bittest Tests zu generieren.',
        sections: [
          {
            heading: 'Minimaler Unit Test mit Jest',
            prose: 'Dieses Beispiel zeigt die Grundstruktur eines Unit Tests \u2013 mit deutschen Kommentaren zum Verständnis.',
            codeBlock: {
              language: 'javascript',
              label: 'berechnung.test.js',
              code: `// Die zu testende Funktion importieren
const { berechneRabatt } = require('./berechnung');

// Test-Suite: Gruppe verwandter Tests
describe('berechneRabatt', () => {

  // Einzelner Test: ein konkreter Fall
  test('gibt 10% Rabatt bei Bestellungen über 100 Euro', () => {
    // ARRANGE: Testdaten vorbereiten
    const bestellwert = 150;

    // ACT: Funktion aufrufen
    const rabatt = berechneRabatt(bestellwert);

    // ASSERT: Ergebnis prüfen
    expect(rabatt).toBe(15); // 10% von 150
  });

  test('gibt keinen Rabatt bei Bestellungen unter 100 Euro', () => {
    const rabatt = berechneRabatt(80);
    expect(rabatt).toBe(0);
  });

  test('gibt 0 zurück wenn Bestellwert negativ ist', () => {
    const rabatt = berechneRabatt(-50);
    expect(rabatt).toBe(0);
  });
});`
            }
          }
        ],
        bestPractices: [
          'Drei Teile pro Test: Arrange (vorbereiten) Act (ausführen) Assert (prüfen) \u2013 immer in dieser Reihenfolge',
          'Ein Test eine Sache: Jeder Test prüft genau einen Fall \u2013 das macht Fehler einfacher zu finden',
          'Aussagekräftige Test-Namen: "gibt 10% Rabatt bei Bestellungen über 100 Euro" \u2013 man weiß sofort was getestet wird',
          'Edge Cases nicht vergessen: Was passiert bei null? Bei 0? Bei negativen Zahlen? Claude hilft diese zu finden'
        ],
        pitfalls: [
          'Implementierung testen statt Verhalten: Teste was die Funktion zurückgibt nicht wie sie es intern berechnet',
          'Tests zu komplex machen: Ein Test der selbst erklärt werden muss ist zu komplex',
          'Vergessen Tests im CI auszuführen: Tests die nur lokal laufen schützen das Team nicht',
          'Nach dem Refactoring die Tests vergessen: Wenn Claude Code umstrukturiert müssen Tests danach noch grün sein'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: Testing Grundlagen', url: '#/testing/grundlagen' },
          { title: 'DevCraft Pro: CI/CD Pipelines', url: '#/cicd/grundlagen' }
        ]
      }
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 5 – SECURITY & AUTHENTIFIZIERUNG
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'security',
  title: 'Security & Authentifizierung',
  icon: 'shield',
  tagline: 'Die richtigen Personen haben Zugang \u2013 und niemand sonst',
  color: '#EF4444',
  gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #B91C1C 100%)',
  overview: 'Sicherheit in Software bedeutet: Die richtigen Personen haben Zugang zu den richtigen Daten \u2013 und niemand sonst. Für Vibe-Coder gibt es eine wichtige Grundregel: Geheimnisse (API-Keys Passwörter Datenbankzugangsdaten) gehören niemals in den Code \u2013 und schon gar nicht in ein öffentliches GitHub-Repository.\n\nDie gute Nachricht: Die wichtigsten Sicherheitsmaßnahmen für Einsteiger sind einfach umzusetzen und haben einen großen Effekt. Claude kann dir dabei helfen sichere Grundmuster zu implementieren.',
  relatedTopics: ['apis', 'databases', 'architecture'],
  subareas: [
    {
      id: 'mental-model',
      title: 'Mental Model: Schlösser und Schlüssel',
      icon: 'lightbulb',
      concept: 'Sicherheit in Software besteht aus zwei Fragen: Wer bist du? (Authentifizierung) und Was darfst du? (Autorisierung).',
      body: 'Stell dir ein Bürogebäude vor. An der Eingangstür gibt es eine Sicherheitskontrolle: Du zeigst deinen Ausweis (das ist Authentifizierung \u2013 Identitätsprüfung). Dann bestimmt dein Mitarbeiterausweis ob du in den Serverraum darfst oder nur in die Büros (das ist Autorisierung \u2013 Rechteverwaltung).\n\nIn Software passiert genau das gleiche. Wenn du dich mit E-Mail und Passwort anmeldest ist das Authentifizierung. Danach entscheidet die Autorisierung: Darf dieser Nutzer diese Daten sehen? Darf er diesen Button klicken?\n\nFür Vibe-Coder gibt es eine goldene Regel: Passwörter und API-Keys niemals im Code speichern. Sie gehören in Umgebungsvariablen (Environment Variables). Wenn du vergisst eine .env-Datei in .gitignore einzutragen und sie auf GitHub pushst müssen alle Keys sofort zurückgesetzt werden.',
      keyPoints: [
        'Authentifizierung = Identitätsprüfung: Wer bist du? (Login mit Passwort Code per SMS)',
        'Autorisierung = Rechteverwaltung: Was darfst du? (Admin darf alles Nutzer nur eigene Daten)',
        'Niemals Geheimnisse im Code: API-Keys und Passwörter gehören in .env-Dateien nicht in JavaScript-Dateien',
        'HTTPS überall: Ohne HTTPS sind Daten zwischen Browser und Server lesbar für jeden im gleichen Netzwerk'
      ],
      tools: null,
      commands: null,
      deepDive: {
        title: 'Umgebungsvariablen \u2013 Geheimnisse sicher verwalten',
        intro: 'Die häufigste Sicherheitslücke bei Vibe-Coder-Projekten: API-Keys landen in der .js-Datei und werden auf GitHub gepusht. Bots scannen GitHub kontinuierlich nach solchen Keys und missbrauchen sie innerhalb von Minuten. Umgebungsvariablen lösen dieses Problem elegant.',
        sections: [
          {
            heading: 'Richtige und falsche Handhabung von Geheimnissen',
            prose: 'Der Unterschied zwischen sicher und unsicher ist oft nur eine Zeile Code \u2013 aber die Konsequenzen sind gravierend.',
            diagram: {
              content: `FALSCH – API-Key direkt im Code (sichtbar für alle!):
  ┌─────────────────────────────────────────────────┐
  │ const apiKey = "sk-abc123xyz789...";             │
  │ // Diese Datei wird auf GitHub gepusht!          │
  └─────────────────────────────────────────────────┘

RICHTIG – API-Key in Umgebungsvariable:
  ┌────────────────────┐    ┌────────────────────┐
  │ .env               │    │ app.js             │
  │ (in .gitignore!)   │    │                    │
  │                    │    │ const apiKey =     │
  │ API_KEY=sk-abc123  │───►│   process.env      │
  │ DB_PASS=geheim123  │    │   .API_KEY;        │
  └────────────────────┘    └────────────────────┘
         │
         ▼ wird NICHT in Git gespeichert`
            }
          }
        ],
        bestPractices: [
          '.gitignore vor dem ersten Commit: Trage .env sofort ein \u2013 einmal gepusht ist der Schaden angerichtet',
          'Jeden API-Key als Umgebungsvariable: Auch für lokale Entwicklung \u2013 damit du den Unterschied nicht vergisst',
          'Klare Namen für Umgebungsvariablen: OPENAI_API_KEY statt KEY1 \u2013 so weiß jeder was gemeint ist',
          'Passwörter nie im Klartext speichern: In der Datenbank gehört immer nur der bcrypt-Hash des Passworts'
        ],
        pitfalls: [
          '.env auf GitHub gepusht: Sofort alle Keys in den Dashboards der jeweiligen Dienste zurücksetzen (rotieren)',
          'Hard-coded Passwörter im Test-Code: Auch Test-Dateien landen auf GitHub',
          'Gleiche Passwörter für Test und Produktion: Immer separate Credentials für jede Umgebung',
          'Zu weitreichende Rechte für API-Keys: Erstelle Keys nur mit den Rechten die wirklich benötigt werden'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: Security & Authentifizierung', url: '#/security/grundlagen' },
          { title: 'DevCraft Pro: APIs & Integration', url: '#/apis/authentication' }
        ]
      }
    },
    {
      id: 'kernkonzepte',
      title: 'Kernkonzepte: Auth, HTTPS, Umgebungsvariablen',
      icon: 'book-open',
      concept: 'Die fünf Sicherheitskonzepte die du als Vibe-Coder von Anfang an kennen und anwenden solltest.',
      body: 'Authentifizierung (Auth) prüft die Identität \u2013 wer bist du? Autorisierung prüft die Rechte \u2013 was darfst du? Beide werden oft verwechselt sind aber fundamental unterschiedlich. HTTPS verschlüsselt die Verbindung zwischen Browser und Server \u2013 ohne HTTPS könnten Daten unterwegs abgefangen werden.\n\nUmgebungsvariablen (Environment Variables) sind Variablen die außerhalb des Codes gesetzt werden \u2013 in einer .env-Datei. Sie sind der sichere Ort für Passwörter und API-Keys. Passwort-Hashing bedeutet Passwörter werden niemals im Klartext gespeichert \u2013 nur ein kryptografischer Hash.',
      keyPoints: [
        'Authentifizierung = Identitätsprüfung (Login) \u2013 "Wer bist du?"',
        'Autorisierung = Rechteverwaltung \u2013 "Was darfst du?"',
        'HTTPS = verschlüsselte Verbindung \u2013 Pflicht für alle produktiven Anwendungen',
        'Umgebungsvariablen (.env) = sicherer Speicherort für Passwörter und API-Keys',
        'Passwort-Hashing = Passwörter werden nur als Hash gespeichert niemals im Klartext'
      ],
      tools: [
        { name: 'dotenv', purpose: 'npm-Paket das .env-Dateien in Node.js-Projekte lädt \u2013 npm install dotenv' },
        { name: 'bcrypt', purpose: 'Bibliothek zum sicheren Hashen von Passwörtern \u2013 Standard für Node.js-Projekte' },
        { name: 'Auth0 / Clerk', purpose: 'Fertige Authentifizierungsdienste \u2013 so musst du Auth nicht selbst implementieren' }
      ],
      commands: [
        { cmd: 'npm install dotenv', desc: 'Installiert das dotenv-Paket zum Laden von .env-Dateien in Node.js' }
      ],
      deepDive: null
    },
    {
      id: 'erster-schritt',
      title: 'Erster Schritt: API-Keys sicher verwalten',
      icon: 'play-circle',
      concept: 'Eine .env-Datei anlegen und API-Keys sicher aus dem Code auslagern \u2013 mit Hilfe von Claude.',
      body: 'Das Ziel: Du lernst wie du Geheimnisse sicher verwaltest. 1. Erstelle eine .env-Datei im Wurzelordner deines Projekts. 2. Trage deine API-Keys dort ein: OPENAI_API_KEY=sk-xyz123. 3. Füge .env in deine .gitignore ein: echo ".env" >> .gitignore. 4. Installiere dotenv: npm install dotenv. 5. Lade die Variablen: require("dotenv").config(); am Anfang der Hauptdatei. 6. Greife auf Keys zu mit: process.env.OPENAI_API_KEY. 7. Erstelle eine .env.example mit Platzhaltern \u2013 diese Datei kann auf GitHub.',
      keyPoints: [
        '.env sofort in .gitignore \u2013 noch bevor du irgendeinen Key einträgst',
        '.env.example erstellen: Eine Vorlage mit Platzhaltern damit andere wissen welche Keys gebraucht werden',
        'Keys niemals in Kommentaren oder README-Dateien schreiben \u2013 auch dort sind sie unsicher',
        'Bei versehentlichem Pushen sofort alle betroffenen Keys zurücksetzen (rotieren)'
      ],
      tools: [
        { name: 'dotenv', purpose: 'Lädt .env-Dateien in Node.js \u2013 npm install dotenv' },
        { name: 'Claude', purpose: 'Hilft bei der Umstrukturierung: "Lagere alle hartcodierten Keys in .env-Variablen aus"' }
      ],
      commands: [
        { cmd: 'echo ".env" >> .gitignore', desc: 'Fügt .env zur .gitignore hinzu \u2013 schützt vor versehentlichem Commit' },
        { cmd: 'npm install dotenv', desc: 'Installiert das dotenv-Paket' },
        { cmd: 'git rm --cached .env', desc: 'Entfernt .env aus Git-Tracking falls bereits versehentlich hinzugefügt' }
      ],
      deepDive: {
        title: '.env und dotenv richtig einsetzen',
        intro: 'Das dotenv-Pattern ist der Industriestandard für die Verwaltung von Geheimnissen in Entwicklungsprojekten. Es ist einfach umzusetzen und schützt vor dem häufigsten Sicherheitsfehler bei Einsteigern.',
        sections: [
          {
            heading: 'Vollständiges .env-Setup für ein Node.js-Projekt',
            prose: 'Dieses Setup zeigt alle Dateien die für sicheres Key-Management benötigt werden.',
            codeBlock: {
              language: 'javascript',
              label: 'app.js \u2013 dotenv laden und Keys nutzen',
              code: `// Am Anfang der Hauptdatei: dotenv laden
require('dotenv').config();

// Jetzt sind alle .env-Variablen verfügbar
const openaiKey = process.env.OPENAI_API_KEY;
const dbPassword = process.env.DB_PASSWORD;

// Sicherheitscheck: Sind alle nötigen Keys gesetzt?
if (!openaiKey) {
  console.error('Fehler: OPENAI_API_KEY fehlt in .env');
  process.exit(1);
}

// Verwendung (nie den Key direkt ausgeben!)
console.log('API-Key geladen:', openaiKey.substring(0, 8) + '...');`
            }
          }
        ],
        bestPractices: [
          'Sicherheitscheck beim Start: Prüfe ob alle nötigen Umgebungsvariablen gesetzt sind \u2013 crashe früh mit klarer Fehlermeldung',
          'Verschiedene .env-Dateien: .env.local für lokale Entwicklung .env.production für den Server',
          'Key-Rotierung planen: Dokumentiere wo Keys eingesetzt werden damit du sie bei Bedarf schnell rotieren kannst',
          'Claude für Refactoring nutzen: "Überarbeite dieses File und lagere alle hartcodierten Strings in .env aus"'
        ],
        pitfalls: [
          '.env in git add . vergessen: Immer git status prüfen bevor du commitest',
          'Keys in Log-Ausgaben: console.log(process.env) gibt ALLE Keys aus \u2013 gefährlich in Produktionslogs',
          '.env.example nicht gepflegt: Wenn neue Keys dazukommen muss .env.example sofort aktualisiert werden',
          'Entwicklungs-Keys in Produktion nutzen: Immer separate Keys für jede Umgebung'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: Security Grundlagen', url: '#/security/grundlagen' },
          { title: 'DevCraft Pro: Fehlerbehandlung & Logging', url: '#/errorhandling/logging' }
        ]
      }
    }
  ]
},

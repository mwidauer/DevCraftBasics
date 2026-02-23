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
/* ══════════════════════════════════════════════════════════════════
   TOPIC 6 – DOCKER & CONTAINER  [PILOT]
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'docker',
  title: 'Docker & Container',
  icon: 'box',
  tagline: 'Software in einer Box \u2013 überall gleich, immer reproduzierbar',
  color: '#2496ED',
  gradient: 'linear-gradient(135deg, #2496ED 0%, #1A6BB5 50%, #0D4A8A 100%)',
  overview: 'Container lösen ein uraltes Problem der Softwareentwicklung: "Bei mir läuft es aber!" Mit Docker verpackst du deine Anwendung zusammen mit allem was sie braucht \u2013 Laufzeitumgebung Bibliotheken Konfiguration \u2013 in eine standardisierte Box. Diese Box läuft überall gleich: auf deinem Laptop auf dem Server in der Cloud.\n\nFür Vibe-Coder ist Docker besonders wertvoll: KI-Tools können dir exakte Konfigurationsdateien erstellen die du dann ohne tiefes Systemwissen ausführen kannst. Du musst nicht verstehen wie Node.js installiert wird \u2013 du brauchst nur ein Dockerfile.',
  relatedTopics: ['cicd', 'tooling', 'monitoring'],
  subareas: [
    {
      id: 'mental-model',
      title: 'Mental Model: Die Idee hinter Containern',
      icon: 'lightbulb',
      concept: 'Eine Anwendung mit allem was sie braucht in eine standardisierte Box verpacken \u2013 die überall gleich läuft.',
      body: 'Stell dir vor du musst einen Stuhl von Berlin nach Tokyo transportieren. Früher hat jeder Hersteller seine eigene Verpackungslösung verwendet \u2013 manchmal passte sie ins Schiff manchmal nicht. Dann erfanden Ingenieure den Standardcontainer: gleiche Maße überall auf der Welt kompatibel. Jeder Kran jedes Schiff jeder Lastwagen kann damit umgehen.\n\nDocker macht genau das mit Software. Früher hatte jeder Entwickler seine eigene Umgebung \u2013 andere Node.js-Version andere Bibliotheken anderes Betriebssystem. "Bei mir läuft es aber!" war das meistgehasste Zitat in der Softwareentwicklung. Docker löst das: Du verpackst deine Anwendung mit allem was sie braucht in einen Container. Dieser Container läuft identisch \u2013 egal wo.\n\nFür Vibe-Coder ist das besonders wertvoll: Ein KI-Tool wie Claude kann dir ein perfekt konfiguriertes Dockerfile schreiben. Du führst einen einzigen Befehl aus und deine Anwendung läuft \u2013 ohne stundenlange Installation und Konfiguration.',
      keyPoints: [
        'Portabilität: Ein Container läuft gleich \u2013 ob auf deinem Laptop dem Server deines Kollegen oder in der Cloud',
        'Isolation: Jeder Container läuft in seiner eigenen Blase ohne andere Anwendungen zu stören',
        'Reproduzierbarkeit: Die gleiche Bauanleitung (Dockerfile) erzeugt immer exakt dieselbe Umgebung',
        'Leichtgewichtigkeit: Ein Container startet in Sekunden \u2013 eine virtuelle Maschine braucht Minuten',
        'Unveränderlichkeit: Container-Images werden nie verändert \u2013 eine neue Version bedeutet ein neues Image'
      ],
      tools: null,
      commands: null,
      deepDive: {
        title: 'Container vs. Virtuelle Maschine',
        intro: 'Der entscheidende Gedankenwechsel bei Containern: Du denkst nicht mehr in "Software installieren" sondern in "Umgebungen verpacken". Das klingt abstrakt wird aber sofort klar wenn du den Unterschied zwischen einer virtuellen Maschine und einem Container verstehst.',
        sections: [
          {
            heading: 'Container vs. VM im Vergleich',
            prose: 'Beide Technologien isolieren Software \u2013 aber auf fundamental unterschiedliche Weise. Eine VM emuliert komplette Hardware und läuft ein eigenes Betriebssystem. Ein Container teilt sich den Betriebssystemkern des Host-Rechners und ist dadurch viel schlanker.',
            diagram: {
              content: `VM (Virtuelle Maschine)         Container
┌────────────────────┐         ┌────────────────────┐
│   Anwendung        │         │   Anwendung        │
│   Bibliotheken     │         │   Bibliotheken     │
│   Gastbetriebssys. │         ├────────────────────┤
│   (eigener Kernel) │         │  Container Runtime │
├────────────────────┤         │  (z.B. Docker)     │
│   Hypervisor       │         ├────────────────────┤
├────────────────────┤         │   Host-Betriebssys.│
│  Host-Betriebssys. │         │   (geteilter Kern) │
└────────────────────┘         └────────────────────┘
Größe: mehrere GB              Größe: wenige MB
Startzeit: Minuten             Startzeit: Sekunden
Isolation: komplett            Isolation: Prozess-Level`
            }
          }
        ],
        bestPractices: [
          'Denke in Prozessen nicht in Servern: Ein Container = eine Aufgabe (z.B. nur Webserver nur Datenbank)',
          'Images sind unveränderlich: Konfiguriere nie einen laufenden Container direkt \u2013 ändere das Dockerfile und baue neu',
          'Nutze offizielle Images als Basis: Docker Hub bietet getestete Grundimages für Node.js Python Nginx & Co.',
          'Verstehe den Unterschied: Image = Bauplan (unveränderlich) Container = laufende Instanz des Bauplans'
        ],
        pitfalls: [
          'Docker ist keine VM \u2013 ein Linux-Container läuft nicht nativ auf Windows ohne Hilfssoftware (Docker Desktop löst das)',
          '"Ich starte einfach als Root" \u2013 Container als Root-Nutzer zu betreiben ist ein Sicherheitsrisiko',
          'Daten im Container sind flüchtig \u2013 ohne Volumes gehen alle gespeicherten Daten beim Neustart verloren',
          'Docker ersetzt keine Orchestrierung \u2013 für mehrere Container in Produktion braucht man Docker Compose oder Kubernetes'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: Docker & Container', url: '#/docker/grundlagen' },
          { title: 'Docker: Get Started (offiziell, en)', url: 'https://docs.docker.com/get-started/' }
        ]
      }
    },
    {
      id: 'kernkonzepte',
      title: 'Kernkonzepte: Image, Container, Dockerfile, Volume',
      icon: 'book-open',
      concept: 'Die fünf Grundbausteine von Docker \u2013 ohne diese Begriffe wirst du kein Dockerfile verstehen.',
      body: 'Ein Image ist die unveränderliche Vorlage \u2013 wie eine DVD. Du kannst sie nicht beschreiben aber beliebig oft abspielen. Das Abspielen erzeugt einen Container \u2013 die laufende Instanz des Images. Aus einem Image kannst du hundert Container starten.\n\nDas Dockerfile ist die Bauanleitung für ein Image. Es beschreibt Schritt für Schritt welches Betriebssystem als Basis dient welche Software installiert wird und wie die Anwendung gestartet wird. Docker Hub ist die öffentliche Bibliothek in der fertige Images gespeichert sind. Wenn deine Anwendung Daten dauerhaft speichern muss brauchst du ein Volume \u2013 eine Verbindung zwischen dem Container und dem Host-Dateisystem.',
      keyPoints: [
        'Image = unveränderliche Vorlage (wie eine DVD)',
        'Container = laufende Instanz eines Images (wie ein Film auf der DVD)',
        'Dockerfile = Textdatei mit der Bauanleitung für ein Image',
        'Docker Hub = öffentliche Bibliothek für fertige Images (z.B. node:20, postgres:16)',
        'Volume = dauerhafter Datenspeicher der den Container-Neustart überlebt'
      ],
      tools: [
        { name: 'Docker Desktop', purpose: 'Grafische Oberfläche für Docker auf Mac und Windows \u2013 der einfachste Einstieg' },
        { name: 'Docker Hub', purpose: 'Öffentliche Sammlung von fertigen Images (z.B. node:20, postgres:16, nginx:latest)' },
        { name: 'Docker Compose', purpose: 'Startet mehrere Container gleichzeitig mit einer einzigen Konfigurationsdatei' }
      ],
      commands: [
        { cmd: 'docker pull nginx', desc: 'Lädt das offizielle nginx-Image von Docker Hub herunter' },
        { cmd: 'docker run -p 8080:80 nginx', desc: 'Startet einen nginx-Container und verbindet Port 8080 des Hosts mit Port 80 im Container' },
        { cmd: 'docker ps', desc: 'Zeigt alle aktuell laufenden Container an' }
      ],
      deepDive: null
    },
    {
      id: 'erster-schritt',
      title: 'Erster Schritt: Deine App in einen Container',
      icon: 'play-circle',
      concept: 'Mit Hilfe von Claude ein Dockerfile erstellen und deine erste Anwendung containerisieren.',
      body: 'Das Ziel: Du hast eine einfache Webanwendung und willst sie in einem Docker-Container starten. 1. Vorbereitung: Stelle sicher dass Docker Desktop installiert ist. 2. Claude beauftragen: "Ich habe eine Node.js-App mit einer index.js als Einstiegspunkt und einer package.json. Erstelle mir ein einfaches sicheres Dockerfile dafür." 3. Dockerfile erstellen: Speichere das von Claude generierte Dockerfile in deinem Projektordner. 4. Image bauen: docker build -t meine-app . \u2013 Docker liest das Dockerfile und baut dein Image. 5. Container starten: docker run -p 3000:3000 meine-app. Öffne dann http://localhost:3000 im Browser.',
      keyPoints: [
        'Lass Claude das Dockerfile schreiben \u2013 beschreibe dein Projekt möglichst genau (Sprache Einstiegspunkt Port)',
        'Das Dockerfile gehört in den Wurzelordner deines Projekts direkt neben package.json',
        'Mit -p 3000:3000 verbindest du Port 3000 deines Laptops mit Port 3000 im Container',
        'Wenn du eine Änderung machst musst du das Image neu bauen (docker build) \u2013 der Container übernimmt Änderungen nicht automatisch'
      ],
      tools: [
        { name: 'Docker Desktop', purpose: 'Visuelle Oberfläche zum Starten Stoppen und Verwalten von Containern' },
        { name: 'Claude / Cursor', purpose: 'KI-Tool zum Generieren des Dockerfiles \u2013 beschreibe dein Projekt auf Deutsch' }
      ],
      commands: [
        { cmd: 'docker build -t meine-app .', desc: 'Baut ein Docker-Image aus dem Dockerfile im aktuellen Ordner und nennt es "meine-app"' },
        { cmd: 'docker run -p 3000:3000 meine-app', desc: 'Startet einen Container aus dem Image und macht Port 3000 zugänglich' },
        { cmd: 'docker stop $(docker ps -q)', desc: 'Stoppt alle laufenden Container' }
      ],
      deepDive: {
        title: 'Ein minimales Dockerfile verstehen',
        intro: 'Warum fangen wir mit dem Containerisieren einer eigenen Anwendung an und nicht mit docker pull hello-world? Weil das eigene Projekt der stärkste Motivator ist. Du siehst sofort was Docker für dich konkret tut \u2013 nicht in einer abstrakten Demo.',
        sections: [
          {
            heading: 'Ein minimales Dockerfile für Node.js',
            prose: 'Dieses Dockerfile erklärt jeden Schritt \u2013 ideal zum Verstehen und als Vorlage für Claude-Anfragen.',
            codeBlock: {
              language: 'dockerfile',
              label: 'Dockerfile (Node.js Beispiel)',
              code: `# Basis-Image: offizielle Node.js-Version 20 (schlank, Alpine Linux)
FROM node:20-alpine

# Arbeitsverzeichnis im Container setzen
WORKDIR /app

# Zuerst nur package.json kopieren (für besseres Caching)
COPY package*.json ./

# Abhängigkeiten installieren (nur Produktions-Pakete)
RUN npm install --omit=dev

# Restlichen Code kopieren
COPY . .

# Port den die App nach außen öffnet dokumentieren
EXPOSE 3000

# Startbefehl der Anwendung
CMD ["node", "index.js"]`
            }
          }
        ],
        bestPractices: [
          'Erkläre Claude dein Projekt so konkret wie möglich: "Node.js 20 Express Port 3000 Einstiegspunkt src/server.js"',
          'Nutze alpine-Basisimages (z.B. node:20-alpine) \u2013 sie sind deutlich kleiner als die Standard-Images',
          'Kopiere package.json vor dem restlichen Code \u2013 so profitierst du vom Docker-Caching bei Rebuilds',
          'Teste den Container lokal bevor du ihn irgendwo deployst \u2013 Probleme sind lokal einfacher zu lösen'
        ],
        pitfalls: [
          'Vergesse nicht die .dockerignore-Datei \u2013 ohne sie wird node_modules in den Container kopiert (unnötig und langsam)',
          'Verwende keine latest-Tags in Produktion (z.B. node:latest) \u2013 nutze fixe Versionsnummern für Stabilität',
          'Ein Container pro Prozess: Starte nicht Webserver und Datenbank im gleichen Container \u2013 nutze Docker Compose',
          'Umgebungsvariablen (API-Keys Passwörter) gehören nie ins Dockerfile \u2013 nutze -e Flags oder .env-Dateien'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: Docker Grundlagen', url: '#/docker/grundlagen' },
          { title: 'DevCraft Pro: Docker Compose', url: '#/docker/compose' },
          { title: 'Docker Best Practices (offiziell, en)', url: 'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/' }
        ]
      }
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 7 – CI/CD PIPELINES  [PILOT]
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'cicd',
  title: 'CI/CD Pipelines',
  icon: 'zap',
  tagline: 'Das automatische Fließband für deinen Code \u2013 von der Änderung zur Auslieferung',
  color: '#8B5CF6',
  gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)',
  overview: 'CI/CD steht für Continuous Integration und Continuous Delivery. Hinter diesen Begriffen steckt ein einfaches Prinzip: Jede Code-Änderung soll automatisch geprüft und ausgeliefert werden. Statt einmal pro Monat ein "großes Release" zu planen wird kontinuierlich in kleinen Schritten geliefert.\n\nFür Vibe-Coder ist CI/CD der Unterschied zwischen "es läuft auf meinem Laptop" und "es läuft wirklich in der Welt". Eine einfache Pipeline mit GitHub Actions kann in wenigen Minuten aufgesetzt werden \u2013 mit Hilfe von Claude.',
  relatedTopics: ['git', 'docker', 'testing'],
  subareas: [
    {
      id: 'mental-model',
      title: 'Mental Model: Das automatische Fließband',
      icon: 'lightbulb',
      concept: 'Jede Code-Änderung durchläuft automatisch eine Prüfkette \u2013 von Tests bis zur Auslieferung \u2013 ohne manuellen Eingriff.',
      body: 'Stell dir eine Fabrik vor die Autos baut. Früher prüfte ein Qualitätskontrolleur am Ende das fertige Auto auf Fehler. Das Problem: Wenn er einen Fehler findet ist das Auto schon vollständig zusammengebaut \u2013 Nacharbeiten sind teuer. Moderne Fabriken nutzen stattdessen ein Fließband mit Prüfstationen bei jedem Schritt.\n\nGenauso funktioniert CI/CD. Jedes Mal wenn du Code auf GitHub pushst startet automatisch eine Pipeline: Erst werden Tests ausgeführt. Wenn die Tests bestehen wird der Code gebaut. Wenn das erfolgreich ist wird er deployed (ausgeliefert). Schlägt irgendeine Station fehl bekommst du sofort eine Benachrichtigung \u2013 und nichts kaputtes gelangt zu den Nutzern.\n\nFür Vibe-Coder: GitHub Actions ist kostenlos integriert in GitHub und kann von Claude für dich konfiguriert werden. Du pushst Code \u2013 die Pipeline läuft automatisch \u2013 du siehst grünes oder rotes Signal.',
      keyPoints: [
        'Automatisierung: Was früher manuell passierte (testen bauen deployen) läuft jetzt bei jedem Push automatisch',
        'Schnelles Feedback: Fehler werden innerhalb von Minuten erkannt \u2013 nicht erst beim nächsten großen Release',
        'Kontinuierlich: Kein "Deployment-Tag" mehr \u2013 jede kleine Änderung kann sofort ausgeliefert werden',
        'Vertrauen: Wenn die Pipeline grün ist weiß das Team: der Code funktioniert'
      ],
      tools: null,
      commands: null,
      deepDive: {
        title: 'CI/CD Pipeline \u2013 der Gesamtüberblick',
        intro: 'Der Unterschied zwischen CI und CD ist wichtig und oft verwechselt. CI (Continuous Integration) bedeutet: Code wird automatisch integriert und getestet. CD (Continuous Delivery oder Deployment) bedeutet: getesteter Code wird automatisch ausgeliefert.',
        sections: [
          {
            heading: 'Typische CI/CD Pipeline',
            prose: 'Eine Pipeline besteht aus mehreren Stufen die nacheinander ausgeführt werden. Scheitert eine Stufe wird die nächste nicht mehr ausgeführt.',
            diagram: {
              content: `Developer         GitHub              Pipeline              Produktion
─────────         ──────              ────────              ──────────

Code              │
schreiben         │
    │             │
    ▼ git push ───►│
                  │  ┌──────────────────────────────┐
                  │  │   GitHub Actions Pipeline    │
                  │  │                              │
                  │  │  ① BUILD                     │
                  │  │     Code kompilieren/prüfen  │
                  │  │           │                  │
                  │  │           ▼                  │
                  │  │  ② TEST                      │
                  │  │     Tests ausführen          │
                  │  │           │                  │
                  │  │           ▼                  │
                  │  │  ③ DEPLOY                    │
                  │  │     Code ausliefern          │
                  │  └──────────┬───────────────────┘
                  │             │
                  │  ✓ Grün     │   ✗ Rot
                  │  (alles ok) │   (Fehler!)
                  │       │     │       │
                  │       ▼     │       ▼
                  │  Ausliefern │  E-Mail an
                  │  an Nutzer  │  Entwickler`
            }
          }
        ],
        bestPractices: [
          'Starte klein: Eine Pipeline mit nur einem Schritt (z.B. npm test) ist besser als keine Pipeline',
          'Schnelle Pipelines: Je länger eine Pipeline läuft desto weniger wird sie ernst genommen \u2013 halte sie unter 5 Minuten',
          'Fehlschläge ernst nehmen: Ein rotes Pipeline-Badge ist kein Kosmetikproblem \u2013 es zeigt dass etwas kaputt ist',
          'Umgebungen trennen: Teste in einer Staging-Umgebung bevor du in Produktion deployst'
        ],
        pitfalls: [
          'CI/CD als Selbstzweck: Eine Pipeline ohne Tests ist nur eine komplizierte Art Code zu deployen',
          'Zu komplexe Pipelines von Anfang an: Starte einfach wachse organisch',
          '"Die Pipeline ist zu streng" \u2013 wenn Tests ständig fehlschlagen liegt das Problem im Code nicht in der Pipeline',
          'Keine Rollback-Strategie: Wenn ein Deploy fehlschlägt muss man schnell auf die letzte Version zurückkehren können'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: CI/CD Pipelines', url: '#/cicd/grundlagen' },
          { title: 'GitHub Actions Dokumentation (en)', url: 'https://docs.github.com/en/actions' }
        ]
      }
    },
    {
      id: 'kernkonzepte',
      title: 'Kernkonzepte: Pipeline, Stage, Trigger, GitHub Actions',
      icon: 'book-open',
      concept: 'Die fünf Begriffe die du in jeder CI/CD-Dokumentation wiederfindest \u2013 und was sie konkret bedeuten.',
      body: 'Eine Pipeline ist der gesamte automatisierte Ablauf den Code nach einem Push durchläuft. Sie besteht aus einzelnen Stages (Stufen): typisch Build Test und Deploy. Jede Stage muss erfolgreich abgeschlossen sein bevor die nächste beginnt.\n\nEin Trigger ist das Ereignis das die Pipeline startet. Häufige Trigger: ein Push auf den main-Branch das Öffnen eines Pull Requests oder ein geplanter Zeitplan. Ein Artifact ist das Ergebnis eines Build-Schritts \u2013 z.B. ein Docker-Image. GitHub Actions ist das integrierte CI/CD-System von GitHub \u2013 konfiguriert durch YAML-Dateien im Ordner .github/workflows/.',
      keyPoints: [
        'Pipeline = der gesamte automatisierte Ablauf von Push bis Deploy',
        'Stage = eine Stufe in der Pipeline (Build \u2192 Test \u2192 Deploy)',
        'Trigger = das Ereignis das die Pipeline startet (z.B. git push auf main)',
        'Artifact = das Ergebnis eines Build-Schritts (z.B. ein Docker-Image)',
        'GitHub Actions = kostenloses CI/CD-System direkt in GitHub integriert'
      ],
      tools: [
        { name: 'GitHub Actions', purpose: 'Kostenloses CI/CD direkt in GitHub \u2013 der einfachste Einstieg für GitHub-Nutzer' },
        { name: 'Vercel / Netlify', purpose: 'Hosting-Dienste mit eingebauter CI/CD für Frontend-Projekte \u2013 Push und Deploy in einem' }
      ],
      commands: [
        { cmd: 'gh workflow list', desc: 'Listet alle GitHub Actions Workflows im Repository auf (GitHub CLI erforderlich)' },
        { cmd: 'gh run list', desc: 'Zeigt die letzten Pipeline-Durchläufe mit Status (grün/rot) an' }
      ],
      deepDive: null
    },
    {
      id: 'erster-schritt',
      title: 'Erster Schritt: Deine erste GitHub Actions Pipeline',
      icon: 'play-circle',
      concept: 'Mit Hilfe von Claude eine einfache GitHub Actions Pipeline erstellen die bei jedem Push automatisch Tests ausführt.',
      body: 'Das Ziel: Bei jedem Push auf GitHub sollen automatisch deine Tests ausgeführt werden. 1. Voraussetzung: Du hast ein Git-Repository auf GitHub. 2. Claude beauftragen: "Erstelle mir eine GitHub Actions Workflow-Datei für ein Node.js-Projekt mit npm test. Die Pipeline soll bei jedem Push auf main starten." 3. Datei anlegen: Erstelle den Ordner .github/workflows/ in deinem Projekt und speichere die von Claude generierte YAML-Datei als ci.yml. 4. Pushen: git add . && git commit -m "CI Pipeline hinzugefügt" && git push. 5. Ergebnis: Gehe auf GitHub \u2192 dein Repository \u2192 Tab "Actions". Du siehst die Pipeline laufen.',
      keyPoints: [
        'Die Workflow-Datei gehört in .github/workflows/ \u2013 GitHub erkennt YAML-Dateien dort automatisch',
        'Lass Claude die YAML-Datei schreiben \u2013 beschreibe dein Projekt (Sprache Testbefehl Branch)',
        'Starte mit einem einzigen Schritt (npm test) \u2013 komplexere Pipelines kommen später',
        'GitHub Actions ist für öffentliche Repositories kostenlos für private gibt es ein großzügiges Freikontingent'
      ],
      tools: [
        { name: 'GitHub Actions', purpose: 'Das CI/CD-System von GitHub \u2013 direkt im Repository konfiguriert keine externe Anmeldung nötig' },
        { name: 'Claude / Cursor', purpose: 'KI-Tool zum Generieren der YAML-Konfiguration \u2013 beschreibe dein Projekt und deinen Testbefehl' }
      ],
      commands: [
        { cmd: 'git add .github/workflows/ci.yml', desc: 'Staged die neue Workflow-Datei für den Commit' },
        { cmd: 'git commit -m "CI: GitHub Actions Pipeline hinzugefügt"', desc: 'Erstellt einen Commit mit der neuen Pipeline-Konfiguration' },
        { cmd: 'git push origin main', desc: 'Pusht den Commit auf GitHub und startet damit automatisch die Pipeline' }
      ],
      deepDive: {
        title: 'Minimale GitHub Actions Pipeline',
        intro: 'Warum fangen wir mit Tests statt mit dem Deploy an? Weil Tests der sicherste und nützlichste erste Schritt sind \u2013 auch wenn du noch keine vollständige Test-Suite hast. Selbst ein einziger Test ist besser als keiner.',
        sections: [
          {
            heading: 'Minimale GitHub Actions Pipeline für Node.js',
            prose: 'Diese Workflow-Datei erklärt jeden Schritt \u2013 ideal zum Verstehen und als Vorlage für Claude-Anfragen.',
            codeBlock: {
              language: 'yaml',
              label: '.github/workflows/ci.yml',
              code: `# Name der Pipeline – wird auf GitHub angezeigt
name: CI Pipeline

# Trigger: Pipeline startet bei jedem Push auf main
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

# Jobs: Was soll passieren?
jobs:
  test:
    # Auf welchem System soll die Pipeline laufen?
    runs-on: ubuntu-latest

    steps:
      # 1. Repository auschecken (Code herunterladen)
      - name: Code auschecken
        uses: actions/checkout@v4

      # 2. Node.js installieren
      - name: Node.js einrichten
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      # 3. Abhängigkeiten installieren
      - name: Abhängigkeiten installieren
        run: npm install

      # 4. Tests ausführen
      - name: Tests ausführen
        run: npm test`
            }
          }
        ],
        bestPractices: [
          'Starte mit dem einfachsten möglichen Workflow \u2013 ein Job ein Test-Schritt. Erweitere wenn nötig.',
          'Lass Claude die YAML-Datei generieren aber lies sie durch \u2013 YAML ist sehr einrückungsempfindlich',
          'Nutze den Tab "Actions" auf GitHub um laufende und vergangene Pipeline-Durchläufe zu sehen',
          'Secrets (API-Keys Passwörter) gehören in GitHub Repository Settings \u2192 Secrets \u2013 nie in die YAML-Datei'
        ],
        pitfalls: [
          'YAML-Einrückung: YAML verwendet Leerzeichen keine Tabs \u2013 ein falsches Zeichen bricht die ganze Pipeline',
          '"Meine Tests laufen lokal aber nicht in der Pipeline" \u2013 oft liegt es an fehlenden Umgebungsvariablen',
          'Kein Testbefehl definiert: Die Pipeline testet nichts wenn npm test kein Testskript in package.json findet',
          'Auf jeden Push reagieren ohne Einschränkung \u2013 besser auf spezifische Branches triggern'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: GitHub Actions', url: '#/cicd/github-actions' },
          { title: 'DevCraft Pro: Testing Grundlagen', url: '#/testing/grundlagen' },
          { title: 'GitHub Actions Schnellstart (de)', url: 'https://docs.github.com/de/actions/writing-workflows/quickstart' }
        ]
      }
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 8 – DATENBANKEN
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'databases',
  title: 'Datenbanken',
  icon: 'database',
  tagline: 'Daten organisiert speichern und schnell finden \u2013 strukturiert und zuverlässig',
  color: '#F59E0B',
  gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)',
  overview: 'Eine Datenbank ist der dauerhafte Speicher deiner Anwendung. Während der Code läuft und Daten verarbeitet speichert die Datenbank alles was auch nach einem Server-Neustart noch da sein soll: Nutzerkonten Bestellungen Artikel Nachrichten.\n\nFür Vibe-Coder ist der wichtigste Schritt das Datenbankschema zu verstehen \u2013 also die Struktur der Tabellen und ihre Beziehungen. Claude kann dir helfen das Schema zu entwerfen und SQL-Abfragen zu schreiben.',
  relatedTopics: ['architecture', 'apis', 'security'],
  subareas: [
    {
      id: 'mental-model',
      title: 'Mental Model: Der organisierte Aktenschrank',
      icon: 'lightbulb',
      concept: 'Eine Datenbank ist wie ein sehr gut organisierter Aktenschrank \u2013 mit Registern Reitern und schnellem Zugriff auf jedes Dokument.',
      body: 'Stell dir ein Büro mit tausenden von Akten vor. Ohne Ordnung wäre es unmöglich eine bestimmte Akte zu finden. Mit einem guten Ablagesystem \u2013 alphabetisch nach Kundennamen sortiert mit Querverweisen zwischen zusammengehörigen Akten \u2013 findest du in Sekunden was du brauchst. Eine Datenbank ist genau das: ein strukturiertes System zum Speichern und schnellen Finden von Daten.\n\nDie populärste Datenbankform ist relational: Daten werden in Tabellen (wie Excel-Tabellen) gespeichert und können miteinander verknüpft werden. Eine Nutzer-Tabelle und eine Bestellungen-Tabelle sind zum Beispiel über die Nutzer-ID verknüpft. Das vermeidet Duplikate: Der Name des Nutzers steht einmal in der Nutzer-Tabelle \u2013 nicht in jeder Bestellung.',
      keyPoints: [
        'Persistenz: Datenbanken speichern Daten dauerhaft \u2013 auch nach Server-Neustart oder Absturz',
        'Struktur: Relationale Datenbanken nutzen Tabellen mit Spalten \u2013 wie gut organisierte Excel-Tabellen',
        'Beziehungen: Tabellen können miteinander verknüpft werden \u2013 das vermeidet Duplikate',
        'Abfragen: SQL (Structured Query Language) ist die Sprache um Daten zu lesen und zu schreiben'
      ],
      tools: null,
      commands: null,
      deepDive: {
        title: 'Relationale vs. nicht-relationale Datenbanken',
        intro: 'Es gibt zwei grundlegende Datenbanktypen: Relationale Datenbanken (SQL) für strukturierte Daten und nicht-relationale Datenbanken (NoSQL) für flexible Daten. Für Einsteiger empfiehlt sich der Start mit einer relationalen Datenbank.',
        sections: [
          {
            heading: 'SQL vs. NoSQL im Vergleich',
            prose: 'Die Wahl hängt vom Anwendungsfall ab. Für die meisten Standard-Webanwendungen ist eine relationale Datenbank (PostgreSQL oder MySQL) die richtige Wahl.',
            diagram: {
              content: `RELATIONALE DATENBANK (SQL)     NICHT-RELATIONALE DB (NoSQL)
┌─────────────────────────┐     ┌─────────────────────────┐
│ Tabelle: Nutzer          │     │ Dokument: Nutzer         │
│                          │     │                          │
│ id │ name   │ email      │     │ {                        │
│────┼────────┼────────    │     │   id: 1,                 │
│  1 │ Anna   │ a@b.de     │     │   name: "Anna",          │
│  2 │ Ben    │ b@c.de     │     │   bestellungen: [        │
└─────────────────────────┘     │     {artikel: "Buch"},   │
                                │     {artikel: "Stift"}   │
┌─────────────────────────┐     │   ]                      │
│ Tabelle: Bestellungen    │     │ }                        │
│                          │     └─────────────────────────┘
│ id │ nutzer_id │ artikel  │
│────┼───────────┼────────  │     Flexibel – kein fixes Schema
│  1 │     1     │ Buch     │     Gut für: verschachtelte Daten
│  2 │     1     │ Stift    │     Beispiele: MongoDB, Firestore
└─────────────────────────┘
Strukturiert – fixes Schema
Gut für: Standard-Webanwendungen
Beispiele: PostgreSQL, MySQL`
            }
          }
        ],
        bestPractices: [
          'Starte mit PostgreSQL: Es ist kostenlos leistungsstark und von Claude gut verstanden',
          'Schema vor Code: Überlege wie deine Tabellen aussehen sollen bevor du anfängst zu coden',
          'Primärschlüssel immer: Jede Tabelle braucht eine eindeutige ID-Spalte',
          'Claude für SQL nutzen: "Schreibe eine SQL-Abfrage die alle Bestellungen des letzten Monats zurückgibt" ist ein guter Prompt'
        ],
        pitfalls: [
          'Alles in eine Tabelle: Das führt zu riesigen Duplikaten und macht Änderungen teuer',
          'NoSQL wählen weil es moderner klingt: Für strukturierte Daten ist SQL fast immer besser',
          'Keine Indizes: Ohne Indizes werden Abfragen auf großen Tabellen extrem langsam',
          'Passwörter im Klartext: In der Datenbank gehört immer nur der Hash \u2013 nie das echte Passwort'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: Datenbanken', url: '#/databases/grundlagen' },
          { title: 'DevCraft Pro: APIs & Integration', url: '#/apis/rest-apis' }
        ]
      }
    },
    {
      id: 'kernkonzepte',
      title: 'Kernkonzepte: Tabelle, SQL, ORM, Schema',
      icon: 'book-open',
      concept: 'Die vier Grundbegriffe die du brauchst um mit einer Datenbank zu arbeiten.',
      body: 'Eine Tabelle ist die Grundeinheit einer relationalen Datenbank \u2013 wie eine Excel-Tabelle mit fixen Spalten. Jede Zeile ist ein Datensatz jede Spalte ein Attribut. SQL (Structured Query Language) ist die Abfragesprache: SELECT liest Daten INSERT schreibt UPDATE ändert und DELETE löscht.\n\nEin ORM (Object-Relational Mapper) ist eine Bibliothek die SQL-Abfragen in Code "übersetzt": Statt SQL zu schreiben verwendest du normale JavaScript-Objekte. Das Schema ist die Definition der Datenbankstruktur \u2013 welche Tabellen gibt es welche Spalten hat jede Tabelle.',
      keyPoints: [
        'Tabelle = Grundeinheit der Datenbank (wie eine Excel-Tabelle mit fixen Spalten)',
        'SQL = Abfragesprache (SELECT liest INSERT schreibt UPDATE ändert DELETE löscht)',
        'ORM = Bibliothek die SQL-Abfragen als Code schreibt (z.B. Prisma Sequelize)',
        'Schema = Struktur der Datenbank: welche Tabellen welche Spalten welche Typen'
      ],
      tools: [
        { name: 'PostgreSQL', purpose: 'Die beliebteste Open-Source-Datenbank \u2013 kostenlos mächtig und gut dokumentiert' },
        { name: 'Prisma', purpose: 'Modernes ORM für Node.js \u2013 Schema-Datei erzeugt automatisch typsichere Datenbankzugriffe' },
        { name: 'TablePlus', purpose: 'Grafische Datenbank-Oberfläche \u2013 zeigt Tabellen und Daten übersichtlich an' }
      ],
      commands: [
        { cmd: "SELECT * FROM nutzer WHERE email = 'anna@beispiel.de';", desc: 'Liest alle Daten des Nutzers mit dieser E-Mail-Adresse' },
        { cmd: 'npx prisma migrate dev', desc: 'Führt ausstehende Datenbank-Migrationen aus (wenn Prisma genutzt wird)' }
      ],
      deepDive: null
    },
    {
      id: 'erster-schritt',
      title: 'Erster Schritt: Datenbankschema mit Claude entwerfen',
      icon: 'play-circle',
      concept: 'Das Datenbankschema für ein konkretes Projekt beschreiben und von Claude entwerfen lassen.',
      body: 'Das Ziel: Du entwirfst ein Datenbankschema für dein Projekt \u2013 mit Claude als Designpartner. 1. Beschreibe dein Projekt: "Ich baue eine App für Buchempfehlungen. Nutzer können sich registrieren Bücher bewerten und Rezensionen schreiben." 2. Frage Claude: "Entwirf ein Datenbankschema für PostgreSQL. Zeige mir die Tabellen ihre Spalten und die Beziehungen zwischen ihnen." 3. Schau dir das Schema an: Macht es Sinn? Fehlt etwas? 4. Bitte Claude die CREATE TABLE Statements zu generieren. 5. Frage nach typischen SQL-Abfragen für dein Projekt.',
      keyPoints: [
        'Schema zuerst: Bevor du Code schreibst muss die Datenbankstruktur stehen',
        'Lass Claude das Schema entwerfen: Beschreibe was deine App tun soll \u2013 Claude übersetzt das in Tabellen',
        'Hinterfrage das Ergebnis: Macht jede Tabelle Sinn? Fehlen wichtige Spalten?',
        'Migrations verwenden: Schemaänderungen immer als Migration durchführen \u2013 nie direkt in der Datenbank'
      ],
      tools: [
        { name: 'Claude', purpose: 'Datenbankschema entwerfen und SQL-Abfragen generieren' },
        { name: 'Prisma', purpose: 'Schema-Datei schreiben und Migrations automatisch generieren' }
      ],
      commands: [
        { cmd: 'npm install prisma @prisma/client', desc: 'Installiert Prisma ORM und den Prisma Client' },
        { cmd: 'npx prisma init', desc: 'Erstellt die Prisma-Konfigurationsdateien im Projekt' },
        { cmd: 'npx prisma studio', desc: 'Öffnet eine grafische Oberfläche für die Datenbank im Browser' }
      ],
      deepDive: {
        title: 'Prisma Schema verstehen',
        intro: 'Prisma ist ein modernes ORM das ein menschen-lesbares Schema verwendet. Claude versteht Prisma-Schemas sehr gut \u2013 du kannst Claude dein Schema zeigen und nach Änderungen oder Abfragen fragen.',
        sections: [
          {
            heading: 'Minimales Prisma Schema',
            prose: 'Dieses Schema zeigt zwei verknüpfte Tabellen \u2013 Nutzer und ihre Bestellungen. Die Beziehung wird explizit definiert.',
            codeBlock: {
              language: 'prisma',
              label: 'schema.prisma',
              code: `// Datenbankverbindung konfigurieren
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Prisma Client generieren
generator client {
  provider = "prisma-client-js"
}

// Tabelle: Nutzer
model Nutzer {
  id        Int       @id @default(autoincrement())
  email     String    @unique
  name      String
  erstellt  DateTime  @default(now())

  // Beziehung: Ein Nutzer hat viele Bestellungen
  bestellungen Bestellung[]
}

// Tabelle: Bestellungen
model Bestellung {
  id        Int      @id @default(autoincrement())
  artikel   String
  preis     Float
  datum     DateTime @default(now())

  // Fremdschlüssel: Bestellung gehört zu einem Nutzer
  nutzerId  Int
  nutzer    Nutzer   @relation(fields: [nutzerId], references: [id])
}`
            }
          }
        ],
        bestPractices: [
          'Zeige Claude dein Prisma Schema und frage nach Verbesserungen \u2013 "Überprüfe mein Schema auf Designfehler"',
          'Nutze @unique für E-Mail-Adressen: Verhindert dass zwei Nutzer die gleiche E-Mail haben',
          'Timestamps immer: erstellt (createdAt) und aktualisiert (updatedAt) Felder für jede Tabelle',
          'Migrations committen: Prisma-Migrations gehören in Git \u2013 so kann das Team Schemaänderungen nachvollziehen'
        ],
        pitfalls: [
          'Schema nach Deployment direkt ändern: Immer Migrations verwenden \u2013 direkte Änderungen brechen die Versionierung',
          'Keine Validierung: Prisma-Schema-Validierungen (@unique @min) in der App erneut prüfen',
          'DATABASE_URL vergessen: Die Datenbankverbindung gehört in .env \u2013 nie hardcoded',
          'Zu breite Spaltentypen: String für eine Zahl \u2013 falsche Typen machen Abfragen fehleranfällig'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: Datenbanken & SQL', url: '#/databases/sql-grundlagen' },
          { title: 'DevCraft Pro: APIs & Integration', url: '#/apis/rest-apis' }
        ]
      }
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 9 – APIS & INTEGRATION
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'apis',
  title: 'APIs & Integration',
  icon: 'plug',
  tagline: 'Der Vermittler zwischen Programmen \u2013 wie Anwendungen miteinander sprechen',
  color: '#06B6D4',
  gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 50%, #0E7490 100%)',
  overview: 'Eine API (Application Programming Interface \u2013 Programmierschnittstelle) ist der definierte Kommunikationskanal zwischen verschiedenen Software-Systemen. Wenn eine App das Wetter anzeigt spricht sie mit einer Wetter-API. Wenn du dich mit Google einloggst nutzt die App die Google-Auth-API.\n\nFür Vibe-Coder sind APIs der Schlüssel zur "Superkraft" von KI-gestützter Entwicklung: Du kannst mit wenig Code auf riesige externe Dienste zugreifen \u2013 OpenAI Stripe Google Maps und viele andere.',
  relatedTopics: ['architecture', 'security', 'databases'],
  subareas: [
    {
      id: 'mental-model',
      title: 'Mental Model: Der Kellner im Restaurant',
      icon: 'lightbulb',
      concept: 'Eine API ist wie ein Kellner: Du (der Client) bestellst etwas die Küche (der Server) bereitet es zu und der Kellner bringt es dir \u2013 nach einem definierten Prozess.',
      body: 'Stell dir ein Restaurant vor. Du sitzt am Tisch (du bist der Client). In der Küche werden die Gerichte zubereitet (das ist der Server). Du bestellst nicht direkt in der Küche \u2013 das wäre chaotisch. Stattdessen gibt es einen Kellner (das ist die API) der deine Bestellung aufnimmt sie in der Küche überg und das fertige Gericht bringt. Der Kellner spricht eine definierte Sprache: er kennt die Speisekarte und die Bestellprozesse.\n\nGenauso funktioniert eine REST-API. Du (Browser oder App) schickst eine HTTP-Anfrage (Bestellung) an den Server. Der Server verarbeitet sie und schickt eine Antwort zurück \u2013 meist im JSON-Format (ein strukturiertes Datenformat). Die API definiert welche Anfragen möglich sind und wie die Antwort aussieht.',
      keyPoints: [
        'Client und Server: Die App (Client) fragt an der Server antwortet \u2013 über das HTTP-Protokoll',
        'REST: Das häufigste API-Muster: Klare Endpunkte klare HTTP-Methoden klare Antwortformate',
        'JSON: Das universelle Datenformat für API-Antworten \u2013 lesbar für Menschen und Maschinen',
        'API-Key: Wie ein Ausweis der beweist dass du berechtigt bist die API zu nutzen'
      ],
      tools: null,
      commands: null,
      deepDive: {
        title: 'HTTP-Methoden \u2013 die Sprache der REST-APIs',
        intro: 'REST-APIs nutzen HTTP-Methoden (auch Verben genannt) um anzugeben was mit den Daten passieren soll. Die vier wichtigsten sind GET POST PUT und DELETE \u2013 sie entsprechen den vier Grundoperationen: Lesen Erstellen Ändern Löschen.',
        sections: [
          {
            heading: 'HTTP-Methoden im Überblick',
            prose: 'Jede HTTP-Methode hat eine klare Bedeutung. Das Verstehen dieser Konventionen macht API-Dokumentationen sofort lesbar.',
            diagram: {
              content: `HTTP-Methode   Bedeutung         Beispiel
──────────────────────────────────────────────────────
GET            Daten lesen       GET /api/nutzer/42
               (keine           → Gibt Nutzer 42 zurück
               Änderung!)

POST           Neu erstellen     POST /api/nutzer
               (sendet Daten    → Erstellt neuen Nutzer
               im Body)

PUT / PATCH    Ändern            PUT /api/nutzer/42
               (ersetzt oder    → Ändert Nutzer 42
               aktualisiert)

DELETE         Löschen           DELETE /api/nutzer/42
                                 → Löscht Nutzer 42

HTTP Status Codes:
200 OK          – Erfolg
201 Created     – Erstellt
400 Bad Request – Fehler im Request
401 Unauthorized – Nicht authentifiziert
404 Not Found   – Nicht gefunden
500 Server Error – Fehler auf dem Server`
            }
          }
        ],
        bestPractices: [
          'API-Dokumentation lesen: Jede gute API hat Docs \u2013 Postman hilft beim Testen ohne Code schreiben zu müssen',
          'API-Keys schützen: Immer in .env-Dateien niemals im Code oder in Git',
          'Error Handling: Immer den Status Code prüfen und Fehler sauber behandeln',
          'Claude für API-Integration nutzen: "Zeige mir wie ich die OpenAI API in Node.js nutze" ist ein ausgezeichneter Prompt'
        ],
        pitfalls: [
          'HTTP-Methoden ignorieren: GET für Schreiboperationen zu nutzen ist falsch und kann Caching-Probleme verursachen',
          'Keine Fehlerbehandlung: Was passiert wenn die API nicht erreichbar ist oder einen Fehler zurückgibt?',
          'API-Key im Frontend-Code: Keys im Browser-Code sind öffentlich \u2013 immer über ein Backend weiterleiten',
          'Rate Limits vergessen: Die meisten APIs begrenzen die Anfragen pro Minute \u2013 zu viele Anfragen führen zu Fehlern'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: APIs & Integration', url: '#/apis/rest-apis' },
          { title: 'DevCraft Pro: Security & Auth', url: '#/security/grundlagen' }
        ]
      }
    },
    {
      id: 'kernkonzepte',
      title: 'Kernkonzepte: Endpoint, Request, Response, JSON',
      icon: 'book-open',
      concept: 'Die fünf Grundbegriffe die du brauchst um eine API zu verstehen und zu nutzen.',
      body: 'Ein Endpoint (Endpunkt) ist die Adresse einer API-Ressource \u2013 z.B. /api/nutzer/42. Jeder Endpoint hat eine URL und eine HTTP-Methode. Ein Request (Anfrage) ist die Nachricht die du an den Server schickst: URL Methode optionaler Body (Daten). Eine Response (Antwort) ist was der Server zurückschickt: Status Code und Body (Daten).\n\nJSON (JavaScript Object Notation) ist das universelle Datenformat für APIs \u2013 strukturierte Daten als Text. Ein API-Key ist ein geheimes Token das beweist dass du berechtigt bist die API zu nutzen.',
      keyPoints: [
        'Endpoint = Adresse einer API-Ressource (z.B. GET /api/nutzer/42)',
        'Request = deine Anfrage an den Server (Methode + URL + optionaler Body)',
        'Response = die Antwort des Servers (Status Code + Daten)',
        'JSON = das universelle Datenformat ({\u0022name\u0022: \u0022Anna\u0022, \u0022alter\u0022: 30})',
        'API-Key = geheimes Token zur Authentifizierung \u2013 immer in .env aufbewahren'
      ],
      tools: [
        { name: 'Postman', purpose: 'API-Tester: HTTP-Anfragen senden und Antworten analysieren \u2013 ohne Code zu schreiben' },
        { name: 'fetch / axios', purpose: 'JavaScript-Bibliotheken für HTTP-Anfragen \u2013 fetch ist eingebaut axios muss installiert werden' },
        { name: 'Insomnia', purpose: 'Alternative zu Postman \u2013 schlankere API-Test-Oberfläche' }
      ],
      commands: [
        { cmd: 'curl https://api.example.com/nutzer/1', desc: 'Schickt eine GET-Anfrage an eine API und zeigt die Antwort im Terminal' }
      ],
      deepDive: null
    },
    {
      id: 'erster-schritt',
      title: 'Erster Schritt: Erste API-Anfrage mit Claude',
      icon: 'play-circle',
      concept: 'Eine externe API (z.B. OpenAI oder eine Wetter-API) in deinem Projekt aufrufen \u2013 mit Hilfe von Claude.',
      body: 'Das Ziel: Du rufst eine externe API in deinem Code auf und verarbeitest die Antwort. 1. Wähle eine API: Für den Einstieg eignen sich kostenlose APIs wie die OpenWeather API oder jsonplaceholder.typicode.com (Test-API ohne Key). 2. Claude beauftragen: "Zeige mir wie ich mit Node.js und axios eine GET-Anfrage an [API-URL] mache und die Antwort verarbeite." 3. Installiere axios: npm install axios. 4. Kopiere den Code von Claude und führe ihn aus. 5. Schau dir die Antwort an und frage Claude: "Wie extrahiere ich [bestimmten Wert] aus dieser Antwort?"',
      keyPoints: [
        'Starte mit einer kostenlosen Test-API ohne Key \u2013 jsonplaceholder.typicode.com ist ideal für Übungen',
        'Nutze Postman um die API zuerst manuell zu testen bevor du Code schreibst',
        'Lass Claude den fetch/axios-Code generieren \u2013 zeige ihm die API-Dokumentation oder ein Beispiel-Response',
        'Immer Error Handling einbauen: Was passiert wenn die API nicht erreichbar ist?'
      ],
      tools: [
        { name: 'axios', purpose: 'npm-Paket für HTTP-Anfragen in Node.js \u2013 npm install axios' },
        { name: 'Postman', purpose: 'API manuell testen bevor du Code schreibst' }
      ],
      commands: [
        { cmd: 'npm install axios', desc: 'Installiert axios für HTTP-Anfragen' },
        { cmd: 'curl https://jsonplaceholder.typicode.com/posts/1', desc: 'Test-API: Gibt einen Beispiel-Datensatz zurück \u2013 gut für Übungen' }
      ],
      deepDive: {
        title: 'API-Aufruf mit Error Handling',
        intro: 'Ein robuster API-Aufruf braucht Error Handling: Was passiert wenn die API nicht erreichbar ist? Was wenn der Key ungültig ist? Dieser Code-Block zeigt das Grundmuster.',
        sections: [
          {
            heading: 'Robuster API-Aufruf mit axios und Error Handling',
            prose: 'Dieses Muster ist der Standard für API-Aufrufe in Node.js \u2013 mit deutschen Kommentaren.',
            codeBlock: {
              language: 'javascript',
              label: 'api-aufruf.js',
              code: `const axios = require('axios');
require('dotenv').config();

// Funktion für einen robusten API-Aufruf
async function holeBenutzerdaten(benutzerId) {
  try {
    // GET-Anfrage an die API senden
    const antwort = await axios.get(
      \`https://api.example.com/nutzer/\${benutzerId}\`,
      {
        headers: {
          // API-Key aus Umgebungsvariable (nie direkt!)
          'Authorization': \`Bearer \${process.env.API_KEY}\`
        }
      }
    );

    // Erfolg: Daten zurückgeben
    return antwort.data;

  } catch (fehler) {
    // Fehler behandeln
    if (fehler.response) {
      // Server hat geantwortet aber mit Fehlerstatus
      console.error('API Fehler:', fehler.response.status);
    } else {
      // Kein Netzwerk oder API nicht erreichbar
      console.error('Netzwerkfehler:', fehler.message);
    }
    return null;
  }
}`
            }
          }
        ],
        bestPractices: [
          'async/await statt .then(): Moderner lesbarer Code \u2013 Claude schreibt standardmäßig async/await',
          'Immer try/catch: Ein API-Aufruf ohne Error Handling wird früher oder später abstürzen',
          'API-Keys aus .env: Nie den Key direkt in den Code schreiben',
          'Response-Struktur verstehen: Mit console.log(antwort.data) die Struktur einmal ausgeben und dann gezielt zugreifen'
        ],
        pitfalls: [
          'API-Key direkt im Code: Die häufigste Sicherheitslücke \u2013 immer process.env.KEY_NAME nutzen',
          'Kein Error Handling: Wenn die API nicht antwortet stürzt die App ab statt eine sinnvolle Meldung zu zeigen',
          'await vergessen: Ohne await läuft der Code weiter bevor die API geantwortet hat',
          'Rate Limits ignorieren: Zu viele Anfragen \u2013 Antwort ist 429 Too Many Requests'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: REST APIs', url: '#/apis/rest-apis' },
          { title: 'DevCraft Pro: Security & Auth', url: '#/security/grundlagen' }
        ]
      }
    }
  ]
},

/* ══════════════════════════════════════════════════════════════════
   TOPIC 10 – MONITORING & OBSERVABILITY
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'monitoring',
  title: 'Monitoring & Observability',
  icon: 'activity',
  tagline: 'Wissen was in deiner App passiert \u2013 Probleme finden bevor Nutzer sie melden',
  color: '#84CC16',
  gradient: 'linear-gradient(135deg, #84CC16 0%, #65A30D 50%, #4D7C0F 100%)',
  overview: 'Monitoring bedeutet: Du weißt was in deiner Anwendung passiert \u2013 auch wenn du nicht gerade hinschaust. Ohne Monitoring merkst du erst von Problemen wenn Nutzer sie melden. Mit Monitoring siehst du sofort wenn etwas schief geht und kannst reagieren bevor es eskaliert.\n\nFür Vibe-Coder ist der einfachste Einstieg strukturiertes Logging: Dein Code schreibt nützliche Informationen in Log-Dateien. Wenn etwas schiefgeht hast du die Aufzeichnung und kannst den Fehler nachvollziehen.',
  relatedTopics: ['cicd', 'errorhandling', 'docker'],
  subareas: [
    {
      id: 'mental-model',
      title: 'Mental Model: Das Armaturenbrett deiner Software',
      icon: 'lightbulb',
      concept: 'Monitoring ist das Armaturenbrett deiner Anwendung \u2013 es zeigt dir jederzeit ob alles normal läuft oder ob etwas Aufmerksamkeit braucht.',
      body: 'Stell dir vor du fährst Auto ohne Armaturenbrett. Kein Tacho kein Tankstand keine Warnlichter. Du kannst fahren \u2013 aber du weißt nicht ob der Motor überhitzt oder ob gleich der Tank leer ist. Irgendwann bleibst du liegen und verstehst nicht warum.\n\nEine Software ohne Monitoring ist genauso: Sie läuft \u2013 aber du weißt nicht wie gut. Wenn sie abstürzt weißt du nicht warum. Wenn sie langsam wird weißt du nicht wo. Monitoring fügt das Armaturenbrett hinzu: Du siehst Fehlerrate Antwortzeiten Ressourcennutzung.\n\nFür Vibe-Coder ist der einfachste erste Schritt sinnvolles Logging: Dein Code schreibt wichtige Ereignisse auf \u2013 Wer hat sich angemeldet? Welche Anfrage hat wie lange gedauert? Was ist schief gegangen? Diese Logs sind dein erstes Monitoring.',
      keyPoints: [
        'Sichtbarkeit: Ohne Monitoring ist deine App eine Blackbox \u2013 mit Monitoring hast du ein Fenster nach innen',
        'Proaktiv statt reaktiv: Probleme erkennen bevor Nutzer sie melden \u2013 nicht danach',
        'Logs als Aufzeichnung: Wenn etwas schief geht sind die Logs deine einzige Chance zu verstehen was passiert ist',
        'Alerts: Benachrichtigungen wenn bestimmte Schwellenwerte überschritten werden \u2013 z.B. viele Fehler in kurzer Zeit'
      ],
      tools: null,
      commands: null,
      deepDive: {
        title: 'Drei Säulen der Observability',
        intro: 'Observability (Beobachtbarkeit) ist der moderne Begriff für das Verständnis was in einem System passiert. Es gibt drei Arten von Daten die zusammen ein vollständiges Bild ergeben.',
        sections: [
          {
            heading: 'Logs, Metrics, Traces',
            prose: 'Drei Datentypen die zusammen Observability ermöglichen. Für Einsteiger reichen Logs \u2013 aber das Verständnis aller drei hilft beim Wachsen.',
            diagram: {
              content: `┌──────────────────────────────────────────────────────┐
│                    OBSERVABILITY                     │
├──────────────────┬───────────────────┬───────────────┤
│     LOGS         │     METRICS       │    TRACES     │
│                  │                   │               │
│ Ereignisse als   │ Messwerte über    │ Anfrage durch │
│ Textzeilen       │ Zeit              │ das System    │
│                  │                   │ verfolgen     │
│ "2024-01-15      │ CPU: 45%          │               │
│  ERROR: DB       │ RAM: 2.1 GB       │ Request──►    │
│  Verbindung      │ Fehler: 3/min     │  API──►       │
│  fehlgeschlagen" │ Latenz: 120ms     │   DB──►       │
│                  │                   │  Response     │
│ Gut für:         │ Gut für:          │               │
│ - Debugging      │ - Dashboards      │ Gut für:      │
│ - Auditing       │ - Alerts          │ - Performance │
│                  │                   │ - Engpässe    │
│ Einstieg: ✓✓✓   │ Einstieg: ✓✓     │ Einstieg: ✓   │
└──────────────────┴───────────────────┴───────────────┘`
            }
          }
        ],
        bestPractices: [
          'Starte mit Logs: console.log ist der erste Schritt \u2013 aber strukturiertes Logging mit Levels ist besser',
          'Log-Level nutzen: DEBUG für Entwicklung INFO für normale Ereignisse ERROR für Fehler WARN für Warnungen',
          'Kontextuell loggen: Nicht "Fehler aufgetreten" sondern "Datenbankabfrage fehlgeschlagen für NutzerID: 42"',
          'Sensitive Daten nie loggen: Passwörter API-Keys und persönliche Daten gehören nicht in Logs'
        ],
        pitfalls: [
          'Zu viel loggen: Wenn alles geloggt wird ist das Signal im Rauschen versteckt',
          'Zu wenig loggen: Wenn Fehler ohne Kontext geloggt werden ist das Log nutzlos für die Fehlersuche',
          'Sensitive Daten in Logs: Ein Log mit Passwörtern oder API-Keys ist eine Sicherheitslücke',
          'Logs nie anschauen: Logs aufzuzeichnen ohne sie je zu lesen ist nutzlos \u2013 regelmäßig reinschauen'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: Monitoring & Observability', url: '#/monitoring/grundlagen' },
          { title: 'DevCraft Pro: Fehlerbehandlung & Logging', url: '#/errorhandling/logging' }
        ]
      }
    },
    {
      id: 'kernkonzepte',
      title: 'Kernkonzepte: Log, Metric, Alert, Dashboard',
      icon: 'book-open',
      concept: 'Die vier Grundbausteine des Monitorings \u2013 von der einfachen Log-Zeile bis zum automatischen Alert.',
      body: 'Ein Log ist ein Textzeile die ein Ereignis beschreibt: Zeitstempel Level und Nachricht. Log-Level zeigen die Wichtigkeit: DEBUG (für Entwickler) INFO (normaler Betrieb) WARN (potenzielles Problem) ERROR (etwas ist schiefgegangen).\n\nEine Metric ist ein numerischer Messwert über Zeit: CPU-Auslastung Anfragen pro Minute Fehlerrate. Ein Alert (Alarm) ist eine automatische Benachrichtigung wenn eine Metric einen Schwellenwert überschreitet. Ein Dashboard ist eine visuelle Übersicht aller wichtigen Metrics.',
      keyPoints: [
        'Log = Texteintrag mit Zeitstempel Level und Beschreibung eines Ereignisses',
        'Log-Level: DEBUG < INFO < WARN < ERROR \u2013 in Produktion meist INFO und höher',
        'Metric = numerischer Messwert über Zeit (CPU Fehlerrate Latenz)',
        'Alert = automatische Benachrichtigung bei Überschreitung eines Schwellenwerts'
      ],
      tools: [
        { name: 'Winston / Pino', purpose: 'Strukturierte Logging-Bibliotheken für Node.js \u2013 besser als console.log' },
        { name: 'Sentry', purpose: 'Fehler-Monitoring: Erfasst Exceptions automatisch mit Stack Trace und Kontext' },
        { name: 'Grafana / Datadog', purpose: 'Dashboards und Alerting für Metrics \u2013 für fortgeschrittenes Monitoring' }
      ],
      commands: [
        { cmd: 'npm install winston', desc: 'Installiert Winston \u2013 die beliebteste Logging-Bibliothek für Node.js' }
      ],
      deepDive: null
    },
    {
      id: 'erster-schritt',
      title: 'Erster Schritt: Strukturiertes Logging einrichten',
      icon: 'play-circle',
      concept: 'console.log durch strukturiertes Logging mit Winston ersetzen \u2013 mit Hilfe von Claude.',
      body: 'Das Ziel: Dein Code schreibt nützliche strukturierte Logs \u2013 der erste Schritt zum Monitoring. 1. Claude beauftragen: "Richte Winston-Logging in meinem Node.js-Projekt ein. Ich möchte Logs mit Level Zeitstempel und Nachricht. In Entwicklung in der Konsole in Produktion in eine Datei." 2. Winston installieren: npm install winston. 3. Logger-Modul erstellen: Eine logger.js Datei die Winston konfiguriert. 4. console.log ersetzen: Alle wichtigen console.log Aufrufe durch logger.info logger.warn oder logger.error ersetzen. 5. Fehler-Logs hinzufügen: In allen catch-Blöcken logger.error mit dem Fehler aufrufen.',
      keyPoints: [
        'Strukturiertes Logging > console.log: Level Zeitstempel und Kontext machen Logs auswertbar',
        'Log-Level bewusst einsetzen: INFO für normale Ereignisse ERROR für Fehler WARN für Auffälligkeiten',
        'Nie sensitive Daten loggen: Passwörter E-Mails API-Keys haben in Logs nichts zu suchen',
        'Fehler immer loggen: In jedem catch-Block logger.error aufrufen \u2013 sonst fehlt die Fehlerhistorie'
      ],
      tools: [
        { name: 'Winston', purpose: 'Strukturiertes Logging für Node.js \u2013 npm install winston' },
        { name: 'Sentry', purpose: 'Automatisches Error-Tracking \u2013 fängt unbehandelte Fehler und sendet Reports' }
      ],
      commands: [
        { cmd: 'npm install winston', desc: 'Installiert Winston' },
        { cmd: 'npm install @sentry/node', desc: 'Installiert Sentry für automatisches Error-Tracking' }
      ],
      deepDive: {
        title: 'Winston Logger einrichten',
        intro: 'Ein gut konfigurierter Logger ist mehr wert als hundert console.log Aufrufe. Er gibt dir Kontext Zeitstempel und Level \u2013 und kann in Dateien oder externe Dienste schreiben.',
        sections: [
          {
            heading: 'Minimaler Winston Logger',
            prose: 'Dieser Logger schreibt im Entwicklungsmodus in die Konsole und im Produktionsmodus in eine Datei.',
            codeBlock: {
              language: 'javascript',
              label: 'logger.js',
              code: `const winston = require('winston');

// Logger konfigurieren
const logger = winston.createLogger({
  // Log-Level: 'info' = INFO, WARN und ERROR werden geloggt
  level: process.env.LOG_LEVEL || 'info',

  // Format: Zeitstempel + Level + Nachricht
  format: winston.format.combine(
    winston.format.timestamp({ format: 'DD.MM.YYYY HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) =>
      \`[\${timestamp}] \${level.toUpperCase()}: \${message}\`
    )
  ),

  // Ausgabe: Konsole (immer) + Fehler-Datei in Produktion
  transports: [
    new winston.transports.Console(),
    ...(process.env.NODE_ENV === 'production' ? [
      new winston.transports.File({ filename: 'fehler.log', level: 'error' }),
      new winston.transports.File({ filename: 'app.log' })
    ] : [])
  ]
});

module.exports = logger;`
            }
          }
        ],
        bestPractices: [
          'Logger als Modul exportieren: Alle Dateien importieren den gleichen Logger \u2013 keine doppelte Konfiguration',
          'Log-Level aus .env: LOG_LEVEL=debug für lokale Entwicklung LOG_LEVEL=info für Produktion',
          'Kontext mitgeben: logger.error("Datenbankfehler", { nutzerId: id, query: sql }) \u2013 nicht nur die Fehlermeldung',
          'Sentry für Produktion: Unbehandelte Fehler werden automatisch gesammelt und mit Stack Trace gemeldet'
        ],
        pitfalls: [
          'console.log vergessen: Mixtur aus console.log und logger macht die Ausgabe unübersichtlich',
          'Sensitive Daten mitloggen: { nutzer: req.body } kann Passwörter enthalten \u2013 nur spezifische Felder loggen',
          'Log-Level zu niedrig in Produktion: DEBUG-Logs in Produktion erzeugen riesige Mengen Daten',
          'Keine Fehler-Logs in catch: try-catch ohne logger.error macht Fehler unsichtbar'
        ],
        furtherReading: [
          { title: 'DevCraft Pro: Monitoring & Observability', url: '#/monitoring/grundlagen' },
          { title: 'DevCraft Pro: Fehlerbehandlung & Logging', url: '#/errorhandling/logging' }
        ]
      }
    }
  ]
},
/* ══════════════════════════════════════════════════════════════════
   TOPIC 11 – DEV-TOOLS & ENTWICKLUNGSUMGEBUNG
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'tooling',
  title: 'Dev-Tools & Entwicklungsumgebung',
  icon: 'wrench',
  tagline: 'Die richtige IDE macht den Unterschied \u2013 mit KI-Integration in Cursor sofort produktiv',
  color: '#F97316',
  gradient: 'linear-gradient(135deg, #F97316 0%, #EA580C 50%, #C2410C 100%)',
  overview: 'Deine Werkzeuge bestimmen, wie produktiv du beim Vibe-Coding bist. Eine gut eingerichtete IDE mit KI-Integration verwandelt den Editor in einen Assistenten, der Fehler erkennt bevor du sie siehst, Code ergänzt und erklärt.\n\nCursor ist die IDE der Wahl für Vibe-Coder: Claude ist direkt eingebaut, kein API-Key nötig, keine zusätzliche App. Du schreibst Code, fragst Claude und siehst das Ergebnis \u2013 alles in einem Fenster. Wer mit Cursor anfängt, hat den besten möglichen Einstieg.',
  relatedTopics: ['git', 'cicd', 'promptengineering'],
  subareas: [
    {
      id: 'mental-model',
      title: 'Mental Model: IDE als Profi-Werkzeugkasten',
      icon: 'lightbulb',
      concept: 'Deine IDE ist nicht nur ein Texteditor \u2013 sie ist ein integriertes Werkzeugset das Fehler verhindert, Code versteht und mit KI direkt zusammenarbeitet.',
      body: 'Stell dir eine Profi-Küche vor: Ein Spitzenkoch hat nicht nur gute Zutaten, sondern auch die richtigen Messer, Pfannen und Geräte genau dort, wo er sie braucht. Wenn er einen Fehler macht, piept die Küchenwaage sofort.\n\nDeine IDE (Integrated Development Environment \u2013 integrierte Entwicklungsumgebung) ist diese Profi-Küche. Sie zeigt Fehler bevor du den Code ausführst, ergänzt Code automatisch und erklärt Probleme direkt im Editor. Cursor hat Claude eingebaut: du tippst Strg+L und redest mit deinem KI-Assistenten \u2013 ohne Browser öffnen, ohne Tool wechseln.',
      keyPoints: [
        'IDE = Profi-Werkzeugkasten: Editor, Terminal, Debugger und KI-Chat in einem Fenster',
        'Linter findet Fehler vor der Ausführung \u2013 wie eine Rechtschreibprüfung die auch Logikfehler erkennt',
        'Extensions erweitern die IDE beliebig \u2013 über 50.000 kostenlose Extensions für VS Code',
        'Cursor hat Claude direkt eingebaut \u2013 kein separates Abo, kein Browser-Wechsel nötig',
        'Inline-Edit (Strg+K): Code markieren, Aufgabe beschreiben, Änderung sofort sehen'
      ],
      tools: null,
      commands: null,
      deepDive: {
        title: 'IDE-Architektur: Was steckt drin?',
        intro: 'Moderne IDEs sind modular aufgebaut. Jeder Bereich übernimmt eine spezifische Aufgabe. Zusammen ergeben sie eine Umgebung, die dich aktiv beim Programmieren unterstützt \u2013 statt passiv auf Eingaben zu warten.',
        sections: [
          {
            heading: 'Die Bausteine von Cursor',
            prose: 'Cursor basiert auf VS Code und ergänzt es um native KI-Integration. Alle VS Code Extensions und Einstellungen funktionieren unverändert.',
            diagram: {
              content: `+------------------------------------------+
|              CURSOR IDE                  |
+--------------------+---------------------+
|  Code-Editor       |  KI-Chat (Claude)   |
|  Syntax-Farben     |  Strg+L / Cmd+L     |
|  Auto-Vervollst.   |  Erklaert, erstellt |
+--------------------+---------------------+
|  Dateibaum         |  Terminal           |
|  (Projektstruktur) |  (Befehle ausfuehren)|
+--------------------+---------------------+
|  Linter/Formatter  |  Git-Integration    |
|  (Fehler-Check)    |  (Aenderungen sehen)|
+------------------------------------------+
Alle Bausteine zusammen = produktives Vibe-Coding`
            }
          }
        ],
        bestPractices: [
          'Cursor statt VS Code: Cursor ist VS Code + Claude \u2013 der Umstieg kostet weniger als 10 Minuten',
          'Projekt immer als Ordner öffnen: Claude sieht dann den gesamten Projektkontext statt nur eine Datei',
          'CLAUDE.md anlegen: Projektbeschreibung für Claude \u2013 macht jeden Chat sofort kontextbewusst',
          'Extensions minimal halten: 5 gute Extensions schlagen 50 durchschnittliche'
        ],
        pitfalls: [
          'IDE als Texteditor nutzen: Ohne Linter, Formatter und Git-Integration verschenkst du 80% des Nutzens',
          'Ohne Projektstruktur arbeiten: Einzeldateien öffnen statt Ordner \u2013 Claude fehlt der Kontext',
          'Zu viele Extensions: Verlangsamen die IDE und erzeugen Konflikte \u2013 weniger ist mehr',
          'Kein Terminal in der IDE nutzen: Zwischen Apps wechseln unterbricht den Arbeitsfluss'
        ],
        furtherReading: [
          { title: 'Cursor \u2013 offizielle Dokumentation (en)', url: 'https://docs.cursor.com' },
          { title: 'DevCraft Pro: Tooling', url: '#/tooling/mental-model' }
        ]
      }
    },
    {
      id: 'kernkonzepte',
      title: 'Kernkonzepte: IDE, Linter, Formatter, Extensions',
      icon: 'book-open',
      concept: 'Die vier Bausteine jeder modernen Entwicklungsumgebung \u2013 und wie sie zusammen für sauberen, konsistenten Code sorgen.',
      body: 'Ein Linter analysiert deinen Code auf potenzielle Fehler und schlechte Praktiken \u2013 wie eine Rechtschreibprüfung, die auch Grammatikfehler erkennt. Ein Formatter macht deinen Code automatisch einheitlich: gleiche Einrückung, gleiche Anführungszeichen, gleiche Zeilenlänge.\n\nExtensions sind Plugins, die die IDE um spezifische Funktionen erweitern. Ein Package Manager (npm für JavaScript, pip für Python) lädt externe Bibliotheken herunter und hält sie aktuell. Mit Claude kannst du jedes dieser Tools nutzen, ohne die Details zu kennen: "Welche Extensions empfiehlst du für ein React-Projekt mit TypeScript?"',
      keyPoints: [
        'Linter (z.B. ESLint) = Fehlerprüfung vor der Ausführung \u2013 findet Probleme die der Editor nicht sieht',
        'Formatter (z.B. Prettier) = automatische Code-Formatierung \u2013 kein manuelles Einrücken mehr',
        'Package Manager (npm/pip) = Bibliotheksverwaltung \u2013 externe Tools herunterladen und aktuell halten',
        'Syntax Highlighting = farbige Code-Darstellung nach Typ (Schlüsselwort, String, Zahl)',
        'IntelliSense = Code-Vervollständigung und Dokumentation direkt beim Tippen'
      ],
      tools: [
        { name: 'Cursor', purpose: 'KI-native IDE mit eingebautem Claude \u2013 erste Wahl für Vibe-Coding' },
        { name: 'VS Code', purpose: 'Kostenlose IDE von Microsoft mit über 50.000 Extensions' },
        { name: 'ESLint + Prettier', purpose: 'Standard-Linter und -Formatter für JavaScript und TypeScript' }
      ],
      commands: null,
      deepDive: null
    },
    {
      id: 'erster-schritt',
      title: 'Erster Schritt: Cursor einrichten und ersten KI-Chat starten',
      icon: 'play-circle',
      concept: 'In 10 Minuten eine vollständige Entwicklungsumgebung mit Claude-Integration einrichten und den ersten Coding-Chat starten.',
      body: 'Das Ziel: Cursor installieren, ein Projekt öffnen und den ersten produktiven KI-Chat starten. Cursor basiert auf VS Code \u2013 alle Einstellungen, Extensions und Tastenkürzel sind identisch. Du verlierst nichts, gewinnst aber Claude direkt im Editor.\n\n1. Cursor herunterladen (cursor.com, kostenlos). 2. Projekt öffnen: File > Open Folder. 3. KI-Chat starten: Strg+L (Windows) oder Cmd+L (Mac). 4. Ersten Prompt eingeben: "Analysiere die Struktur dieses Projekts." \u2013 Claude antwortet mit einem vollständigen Überblick.',
      keyPoints: [
        'Cursor ist VS Code \u2013 alle Extensions, Settings und Tastenkürzel bleiben erhalten',
        'Strg+L (Cmd+L auf Mac) öffnet den KI-Chat \u2013 Claude kennt deinen gesamten Projektkontext',
        'Strg+K (Cmd+K auf Mac) ermöglicht Inline-Edit: Code markieren, Aufgabe eingeben, sofort sehen',
        '@dateiname oder @ordner im Chat gibt Claude präzisen Dateikontext'
      ],
      tools: [
        { name: 'Cursor', purpose: 'IDE mit eingebautem Claude \u2013 dein Setup für Vibe-Coding' }
      ],
      commands: [
        { cmd: 'cursor .', desc: 'Aktuellen Ordner in Cursor öffnen (im Terminal ausführen)' }
      ],
      deepDive: {
        title: 'Cursor einrichten \u2013 Schritt für Schritt',
        intro: 'Dieser Guide bringt dich von 0 zur laufenden Cursor-IDE mit erstem Claude-Chat. Alle Schritte sind unabhängig von deiner bisherigen Erfahrung umsetzbar.',
        sections: [
          {
            heading: 'Setup in 5 Schritten',
            prose: 'Von der Installation bis zum ersten produktiven Chat \u2013 alles was du für deinen Einstieg brauchst.',
            codeBlock: {
              language: 'bash',
              label: 'Cursor einrichten \u2013 Schritt für Schritt',
              code: `# Schritt 1: Cursor herunterladen
# -> cursor.com -> Download (kostenlos, kein Account noetig)

# Schritt 2: Projekt oeffnen
# -> File > Open Folder -> dein Projektordner
# ODER im Terminal:
cursor /pfad/zu/deinem/projekt

# Schritt 3: KI-Chat oeffnen
# -> Strg+L (Windows) / Cmd+L (Mac)
# Claude ist direkt eingebaut, kein API-Key noetig

# Schritt 4: Erster Analyse-Prompt
# "Erklaere mir die Struktur dieses Projekts.
#  Was macht jede Datei? Wo soll ich anfangen?"

# Schritt 5: Inline-Edit ausprobieren
# -> Datei oeffnen -> Codeblock markieren -> Strg+K
# -> "Kommentiere diesen Code auf Deutsch"
# -> Tab druecken zum Akzeptieren, Esc zum Ablehnen`
            }
          }
        ],
        bestPractices: [
          'Zuerst Claude nach der Projektstruktur fragen \u2013 das gibt sofort einen Überblick ohne jede Datei zu lesen',
          'CLAUDE.md im Projektordner anlegen: Projektbeschreibung, Technologiestack, Konventionen für Claude',
          '@-Referenzen nutzen: "@package.json Was sind die Abhängigkeiten?" \u2013 präziser als ohne Referenz',
          'Inline-Edit für kleine Änderungen, Chat für Analyse und größere Refactorings'
        ],
        pitfalls: [
          'Kein Projektkontext geben: "Schreibe eine Login-Funktion" ohne Projektinfos \u2013 Claude erfindet einen Stack',
          'Jeden Vorschlag blind akzeptieren: Tab öfter mal überspringen und den Code verstehen',
          'Zu große Aufgaben in einem Prompt: Lieber 3 kleine Prompts als einen Mega-Prompt',
          'Cursor als einfachen Editor nutzen: ohne KI-Chat und Inline-Edit verschenkst du den Hauptvorteil'
        ],
        furtherReading: [
          { title: 'Cursor Quickstart Guide (en)', url: 'https://docs.cursor.com/get-started/migrate-from-vscode' },
          { title: 'DevCraft Pro: Tooling', url: '#/tooling/erster-schritt' }
        ]
      }
    }
  ]
},
/* ══════════════════════════════════════════════════════════════════
   TOPIC 12 – FEHLERBEHANDLUNG & DEBUGGING
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'errorhandling',
  title: 'Fehlerbehandlung & Debugging',
  icon: 'bug',
  tagline: 'Fehler sind Rückmeldungen des Systems \u2013 wer sie lesen lernt, debuggt wie ein Profi',
  color: '#EC4899',
  gradient: 'linear-gradient(135deg, #EC4899 0%, #DB2777 50%, #BE185D 100%)',
  overview: 'Fehler gehören zum Entwickeln dazu \u2013 sie sind kein Zeichen des Versagens, sondern normale Rückmeldungen des Systems. Wer Fehlermeldungen richtig liest, findet Probleme in Minuten statt Stunden.\n\nFür Vibe-Coder ist jede Fehlermeldung ein lösbares Rätsel: Fehlermeldung in Claude kopieren, Kontext beschreiben, Fix umsetzen. Diese Methode funktioniert für 80% aller Alltagsfehler. Der Rest wird durch systematisches Debugging gelöst.',
  relatedTopics: ['testing', 'monitoring', 'security'],
  subareas: [
    {
      id: 'mental-model',
      title: 'Mental Model: Fehler als Diagnosebericht',
      icon: 'lightbulb',
      concept: 'Eine Fehlermeldung ist kein Vorwurf, sondern ein Diagnosebericht \u2013 das System sagt dir genau was schiefgelaufen ist und wo.',
      body: 'Denk an einen Arzt, der eine Diagnose stellt: Er liest die Symptome (Fehlermeldung), lokalisiert das Problem (Stack Trace), testet Hypothesen (Debugging) und behandelt die Ursache (Fix). Er würde nie einfach raten \u2013 er geht systematisch vor.\n\nGenau so funktioniert professionelles Debugging. Eine gute Fehlermeldung sagt dir: Was ist passiert? In welcher Datei, welcher Zeile? Welche Funktion hat den Fehler ausgelöst? Mit Claude als Assistenten ist jede Fehlermeldung lösbar: Fehlermeldung einfügen, Code zeigen, Fix bekommen.',
      keyPoints: [
        'Fehlermeldungen vollständig lesen: Die erste Zeile nennt den Fehlertyp, die letzte zeigt die Ursache',
        'Stack Trace = Spur des Fehlers: zeigt welche Funktionen in welcher Reihenfolge aufgerufen wurden',
        'Fehler-Typen: Syntaxfehler (falsch geschrieben), Laufzeitfehler (während Ausführung), Logikfehler (falsches Ergebnis)',
        'try/catch fängt Laufzeitfehler ab: "Versuche X, und wenn X fehlschlägt, mache Y"',
        'Logging ist dein Gedächtnis: Fehler die du nicht loggst existieren für die Fehlersuche nicht'
      ],
      tools: null,
      commands: null,
      deepDive: {
        title: 'Vom Fehler zum Fix \u2013 der Debugging-Ablauf',
        intro: 'Debugging ist keine Kunst, sondern ein Handwerk. Mit einem klaren Ablauf findest du die Ursache jedes Fehlers \u2013 und Claude hilft dir bei jedem Schritt.',
        sections: [
          {
            heading: 'Der 4-Schritte Debugging-Prozess',
            prose: 'Dieser Ablauf funktioniert für 90% aller Fehler \u2013 egal welche Sprache oder welches Framework.',
            diagram: {
              content: `         FEHLER TRITT AUF
               |
               v
  +---------------------------+
  |  1. LESEN                 |
  |  Fehlermeldung vollstaend.|
  |  lesen (nicht ignorieren!)|
  +---------------------------+
               |
               v
  +---------------------------+
  |  2. LOKALISIEREN          |
  |  Stack Trace: Datei?      |
  |  Zeile? Funktion?         |
  +---------------------------+
               |
               v
  +---------------------------+
  |  3. VERSTEHEN             |
  |  Warum passiert das?      |
  |  -> Claude fragen!        |
  +---------------------------+
               |
               v
  +---------------------------+
  |  4. BEHEBEN & TESTEN      |
  |  Fix implementieren,      |
  |  Ergebnis verifizieren    |
  +---------------------------+`
            }
          }
        ],
        bestPractices: [
          'Fehlermeldung vollständig in Claude einfügen \u2013 nicht paraphrasieren, den exakten Text',
          'Kontext mitgeben: Was hast du versucht? Was hast du erwartet? Was passiert stattdessen?',
          'Fehler im catch-Block immer loggen: console.error(fehler) als Minimum',
          'Einen Schritt zurückgehen: Welche letzte Änderung hat den Fehler ausgelöst? (git diff hilft)'
        ],
        pitfalls: [
          '"Keine Zeit zum Lesen" \u2013 die Fehlermeldung enthält meistens die Antwort direkt',
          'Fehler mit leeren catch-Blöcken verstecken: catch(e) {} macht Probleme unsichtbar',
          'Mehrere Dinge gleichzeitig ändern: Immer nur eine Änderung, dann testen \u2013 sonst weißt du nicht was geholfen hat',
          'Stack Trace ignorieren: Die Zeilennummer in der Fehlermeldung ist dein Ausgangspunkt'
        ],
        furtherReading: [
          { title: 'MDN: Fehlerbehandlung in JavaScript (de)', url: 'https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling' },
          { title: 'DevCraft Pro: Fehlerbehandlung', url: '#/errorhandling/mental-model' }
        ]
      }
    },
    {
      id: 'kernkonzepte',
      title: 'Kernkonzepte: try/catch, Stack Trace, Logging',
      icon: 'book-open',
      concept: 'Die drei Werkzeuge jeder Fehlerbehandlung \u2013 mit denen du Fehler abfängst, verstehst und dauerhaft behebst.',
      body: 'try/catch ist das Grundkonstrukt: Im try-Block läuft der Code der fehlschlagen könnte. Im catch-Block behandelst du den Fehler \u2013 loggen, dem Nutzer melden, sicheren Fallback liefern. Der Stack Trace ist die "Spur" des Fehlers: er zeigt welche Funktionen in welcher Reihenfolge aufgerufen wurden bevor der Fehler passierte.\n\nLogging ist systematisches Aufzeichnen von Ereignissen \u2013 unverzichtbar für die Fehlersuche in Produktion. Im Browser öffnest du die DevTools mit F12 und siehst alle Fehler direkt. Claude kann Fehler erklären: Einfach Fehlermeldung + Code einfügen.',
      keyPoints: [
        'try { } catch(e) { } \u2013 im try läuft der riskante Code, im catch wird der Fehler behandelt',
        'Stack Trace = die Aufrufkette die zum Fehler geführt hat \u2013 immer von unten nach oben lesen',
        'console.error(e) als Minimum \u2013 nie einen leeren catch-Block schreiben',
        'Breakpoints im Debugger: Code-Ausführung pausieren und alle Variablen inspizieren',
        'DevTools (F12) = eingebauter Debugger im Browser \u2013 zeigt alle Fehler und Netzwerk-Anfragen'
      ],
      tools: [
        { name: 'Browser DevTools', purpose: 'F12 öffnet den eingebauten Debugger \u2013 Console, Sources, Network Tabs' },
        { name: 'console.log / console.error', purpose: 'Einfachste Debugging-Methode: Werte ausgeben und den Ablauf nachverfolgen' }
      ],
      commands: null,
      deepDive: null
    },
    {
      id: 'erster-schritt',
      title: 'Erster Schritt: Claude als Debugging-Partner nutzen',
      icon: 'play-circle',
      concept: 'Mit Claude jeden Fehler in drei Schritten lösen: Fehlermeldung einfügen, Kontext beschreiben, Fix umsetzen.',
      body: 'Das Ziel: Du hast eine Fehlermeldung und weißt nicht wo du anfangen sollst. Mit Claude als Debugging-Partner ist das lösbar. Das Rezept: 1. Exakte Fehlermeldung kopieren. 2. Relevanten Code zeigen. 3. Beschreiben was du erwartet hast.\n\nDiese Methode funktioniert für fast jeden Fehler. Claude erkennt bekannte Muster, kennt häufige Ursachen und erklärt nicht nur den Fix, sondern auch warum der Fehler passiert ist \u2013 so lernst du gleichzeitig.',
      keyPoints: [
        'Vollständige Fehlermeldung kopieren: nicht paraphrasieren, Claude braucht den exakten Text',
        'Code-Kontext mitgeben: die Funktion oder das Modul in dem der Fehler passiert',
        'Erwartetes vs. tatsächliches Verhalten beschreiben: "Ich erwartet X, bekomme aber Y"',
        'Fix verstehen bevor akzeptieren: "Erkläre mir warum dieser Fix funktioniert"'
      ],
      tools: [
        { name: 'Claude / Cursor Chat', purpose: 'Debugging-Partner: Fehler erklären lassen und Fixes generieren' },
        { name: 'Browser DevTools', purpose: 'Fehler im Console-Tab sehen und kopieren' }
      ],
      commands: null,
      deepDive: {
        title: 'Fehler debuggen mit Claude \u2013 das Muster',
        intro: 'Ein universelles try/catch-Muster und der Prompt-Ansatz der bei praktisch jedem Fehler funktioniert \u2013 egal welche Sprache oder welches Framework.',
        sections: [
          {
            heading: 'try/catch mit Logging und Claude-Prompt',
            prose: 'Dieses Muster fängt Fehler ab, loggt sie sinnvoll und gibt dem Aufrufer die Kontrolle zurück.',
            codeBlock: {
              language: 'javascript',
              label: 'Fehlerbehandlung mit try/catch',
              code: `// Robustes try/catch Muster
async function datenLaden(userId) {
  try {
    const response = await fetch('/api/users/' + userId);

    if (!response.ok) {
      // Gezielter Fehler mit Kontext werfen
      throw new Error('HTTP ' + response.status + ': Benutzer nicht gefunden');
    }

    return await response.json();

  } catch (fehler) {
    // Fehler immer loggen (nie leer lassen!)
    console.error('Fehler beim Laden von Benutzer', userId, ':', fehler.message);

    // Fehler weiterwerfen ODER sicheren Fallback liefern
    throw fehler; // Aufrufer entscheidet

  } finally {
    // Immer ausgefuehrt (z.B. Ladeindikator verstecken)
    ladeindikator.ausblenden();
  }
}

// Prompt fuer Claude:
// "Ich habe diesen Fehler: [exakte Fehlermeldung]
//  Hier ist mein Code: [Code einfuegen]
//  Ich habe erwartet: [erwartetes Verhalten]
//  Was ist die Ursache und wie behebe ich ihn?"`
            }
          }
        ],
        bestPractices: [
          'Fehler nie verstecken: leere catch-Blöcke sind gefährlicher als unbehandelte Fehler',
          'Kontext im Fehler mitgeben: throw new Error("Benutzer " + id + " nicht gefunden") statt "Not found"',
          'finally für Aufräumarbeiten: Ladeindikator verstecken, Verbindungen schließen \u2013 egal ob Fehler oder nicht',
          'Fehler-Typen kennen: Syntaxfehler beheben bevor der Code läuft, Laufzeitfehler zur Laufzeit behandeln'
        ],
        pitfalls: [
          'catch(e) {} \u2013 leerer catch-Block: Fehler werden still verschluckt und tauchen nie wieder auf',
          'Nur console.log statt console.error: Fehler verlieren sich zwischen normalen Log-Einträgen',
          'Zu breites try: ganzen Funktionskörper in try-wrappen macht die Fehlersuche schwerer',
          'Fehler nicht weiterwerfen: wenn catch den Fehler nicht vollständig behandelt, unbedingt throw'
        ],
        furtherReading: [
          { title: 'JavaScript Error-Typen Übersicht (en)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors' },
          { title: 'DevCraft Pro: Fehlerbehandlung', url: '#/errorhandling/erster-schritt' }
        ]
      }
    }
  ]
},
/* ══════════════════════════════════════════════════════════════════
   TOPIC 13 – PERFORMANCE & OPTIMIERUNG
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'performance',
  title: 'Performance & Optimierung',
  icon: 'zap',
  tagline: 'Erst messen, dann optimieren \u2013 mit den richtigen Tools den Flaschenhals finden',
  color: '#A855F7',
  gradient: 'linear-gradient(135deg, #A855F7 0%, #9333EA 50%, #7E22CE 100%)',
  overview: 'Performante Software ist nicht zufällig schnell. Sie wird erst gebaut, dann gemessen, dann gezielt optimiert. Dieser Dreischritt \u2013 build, measure, optimize \u2013 trennt professionelles Vorgehen von Raten.\n\nFür Vibe-Coder gilt: Claude kann dir helfen Flaschenhälse zu identifizieren, Optimierungsstrategien vorzuschlagen und konkreten Code umzuschreiben. Aber zuerst messen.',
  relatedTopics: ['monitoring', 'databases', 'architecture'],
  subareas: [
    {
      id: 'mental-model',
      title: 'Mental Model: Erst messen, dann optimieren',
      icon: 'lightbulb',
      concept: 'Ohne Messung ist Optimierung Glückssache \u2013 und oft verschlimmert sie die Situation, weil am falschen Ort optimiert wird.',
      body: 'Ein Wasserrohr kann an vielen Stellen eng sein. Nur die engste Stelle \u2013 der Flaschenhals \u2013 bestimmt den Gesamtdurchfluss. Alles andere zu verbreitern bringt exakt nichts. Du musst zuerst messen wo der Engpass ist.\n\nKnuth, einer der größten Informatiker, prägte den Satz: "Premature optimization is the root of all evil." Zu frühe Optimierung ist eine Hauptquelle von Problemen \u2013 sie macht Code komplexer, schwerer lesbar und optimiert oft die falsche Stelle. Der Gegensatz: Erst zum Laufen bringen, dann messen, dann gezielt optimieren.',
      keyPoints: [
        'Flaschenhals-Prinzip: Die langsamste Komponente bestimmt die Gesamtgeschwindigkeit',
        'Profiling vor Optimierung: Messen wo Zeit verloren geht \u2013 nicht raten',
        'Build, Measure, Optimize: Code zuerst korrekt, dann schnell',
        'Caching spart Rechenzeit: Ergebnisse speichern statt neu berechnen',
        'Lazy Loading: Ressourcen erst laden wenn sie wirklich gebraucht werden'
      ],
      tools: null,
      commands: null,
      deepDive: {
        title: 'Der Performance-Optimierungskreislauf',
        intro: 'Performance-Arbeit folgt immer demselben Kreislauf. Ohne Messungen ist jede Optimierung spekulativ \u2013 und Spekulation ist teuer.',
        sections: [
          {
            heading: 'Messen vor Optimieren',
            prose: 'Dieser Kreislauf schützt dich vor dem häufigsten Fehler: an der falschen Stelle zu optimieren.',
            diagram: {
              content: `  +--------------------------------+
  |  1. ZIEL DEFINIEREN           |
  |  Was ist "schnell genug"?     |
  |  (< 200ms? < 1s Ladezeit?)    |
  +--------------------------------+
               |
               v
  +--------------------------------+
  |  2. MESSEN (Profiling)        |
  |  Browser DevTools / Logging   |
  |  Wo geht Zeit verloren?       |
  +--------------------------------+
               |
               v
  +--------------------------------+
  |  3. FLASCHENHALS FINDEN       |
  |  Den einen Engpass            |
  |  der alles langsam macht      |
  +--------------------------------+
               |
               v
  +--------------------------------+
  |  4. GEZIELT OPTIMIEREN        |
  |  Nur den Engpass beheben      |
  |  -> wieder messen!            |
  +--------------------------------+`
            }
          }
        ],
        bestPractices: [
          'Zuerst korrekt, dann schnell: funktionierender langsamer Code ist besser als schneller falscher',
          'Ziele setzen bevor zu messen: Was ist akzeptabel? Was ist ein Problem? Ohne Ziel ist kein Ergebnis gut oder schlecht',
          'Browser DevTools Performance Tab: eingebaut in Chrome/Firefox, zeigt alles was langsam ist',
          'Claude fragen: "Analysiere diesen Code auf Performance-Probleme" \u2013 er kennt häufige Anti-Patterns'
        ],
        pitfalls: [
          'Vor dem Messen optimieren: "Das muss schneller sein" \u2013 oft ist es schon schnell genug',
          'Micro-Optimierungen: einzelne Schleifen 10% schneller machen während ein DB-Query 5 Sekunden dauert',
          'Nur einen Aspekt messen: Ladezeit und Ausführungszeit sind verschieden \u2013 beide zählen',
          'Optimierung ohne Verifikation: nach jedem Fix messen ob es wirklich schneller wurde'
        ],
        furtherReading: [
          { title: 'web.dev: Performance-Grundlagen (en)', url: 'https://web.dev/performance/' },
          { title: 'DevCraft Pro: Performance', url: '#/performance/mental-model' }
        ]
      }
    },
    {
      id: 'kernkonzepte',
      title: 'Kernkonzepte: Profiling, Caching, Lazy Loading, Benchmark',
      icon: 'book-open',
      concept: 'Die vier Performance-Werkzeuge die du kennen musst \u2013 und wann du welches einsetzt.',
      body: 'Profiling misst wo dein Programm Zeit verbringt \u2013 Browser DevTools haben einen eingebauten Profiler der zeigt welche Funktionen wie lange laufen. Caching speichert Ergebnisse zwischen: Wenn eine API-Anfrage 500ms dauert und sich das Ergebnis selten ändert, canche es.\n\nLazy Loading lädt Ressourcen erst wenn sie gebraucht werden. Bilder außerhalb des sichtbaren Bereichs, Code-Module die vielleicht nie genutzt werden \u2013 erst laden wenn nötig. Ein Benchmark misst die Ausführungszeit unter kontrollierten Bedingungen \u2013 Grundlage jeder Optimierungsentscheidung.',
      keyPoints: [
        'Profiling = Messung der Zeitverteilung: Browser DevTools Performance Tab zeigt Flaschenhälse',
        'Caching = Zwischenspeichern von Ergebnissen: API-Antworten, berechnete Werte, DB-Abfragen',
        'Lazy Loading = erst laden wenn benötigt: Bilder, Code-Module, schwere Komponenten',
        'Benchmark = kontrollierte Zeitmessung: console.time() / console.timeEnd() als einfachste Methode',
        'Datenbank-Index = Buchregister für Daten: macht Suchen in großen Tabellen millisekunden-schnell'
      ],
      tools: [
        { name: 'Browser DevTools (Performance)', purpose: 'Eingebauter Profiler in Chrome/Firefox \u2013 F12 -> Performance Tab' },
        { name: 'Lighthouse', purpose: 'Google-Tool für Web-Performance-Analyse \u2013 direkt in Chrome DevTools eingebaut' }
      ],
      commands: null,
      deepDive: null
    },
    {
      id: 'erster-schritt',
      title: 'Erster Schritt: Performance messen mit DevTools & Claude',
      icon: 'play-circle',
      concept: 'Mit console.time() und Browser DevTools eine erste Performance-Messung durchführen und die Ergebnisse mit Claude analysieren.',
      body: 'Das Ziel: Du lernst zwei einfache Methoden um Performance zu messen. Erst messen, dann \u2013 wenn nötig \u2013 Claude um Optimierungsvorschläge bitten. 1. console.time()/timeEnd() für Code-Abschnitte. 2. Browser DevTools Network Tab für Ladezeiten. 3. Ergebnis + Code in Claude einfügen und fragen: "Welche Optimierungen empfiehlst du?"',
      keyPoints: [
        'console.time("label") startet Zeitmessung, console.timeEnd("label") stoppt sie und gibt die Zeit aus',
        'Browser DevTools Network Tab zeigt alle geladenen Ressourcen und ihre Ladezeiten',
        'Performance API: performance.now() misst mit Sub-Millisekunden-Präzision',
        'Claude kennt Performance Anti-Patterns: Code + Messergebnis einfügen und Analyse bitten'
      ],
      tools: [
        { name: 'Chrome DevTools', purpose: 'F12 öffnen \u2013 Performance und Network Tab für erste Messungen' },
        { name: 'Claude / Cursor', purpose: 'Performance-Analyse: Code + Messung einfügen und Optimierungen anfragen' }
      ],
      commands: null,
      deepDive: {
        title: 'Performance messen \u2013 zwei Methoden für den Start',
        intro: 'Bevor Claude helfen kann, brauchst du Messwerte. Diese zwei Methoden liefern in 5 Minuten erste Erkenntnisse.',
        sections: [
          {
            heading: 'console.time und performance.now',
            prose: 'Zwei eingebaute Browser-APIs die sofort ohne Setup nutzbar sind.',
            codeBlock: {
              language: 'javascript',
              label: 'Performance messen \u2013 zwei Methoden',
              code: `// Methode 1: console.time (einfach, fuer Entwicklung)
console.time('datenbankAbfrage');
const ergebnisse = await datenbank.suchen({ aktiv: true });
console.timeEnd('datenbankAbfrage');
// -> Ausgabe: "datenbankAbfrage: 342ms"

// Methode 2: performance.now (praeziser, fuer Benchmarks)
const start = performance.now();
const daten = await teureOperation();
const dauer = performance.now() - start;
console.log('Operation dauerte:', dauer.toFixed(2), 'ms');

// Prompt fuer Claude nach der Messung:
// "Diese Funktion braucht 800ms, sollte aber < 100ms sein.
//  Hier ist der Code: [Code einfuegen]
//  Profiling zeigt: [was die Messung ergab]
//  Welche Optimierungen empfiehlst du?"`
            }
          }
        ],
        bestPractices: [
          'Mehrfach messen: Einmalwerte sind unzuverlässig \u2013 mindestens 3-5 Messungen und den Durchschnitt nehmen',
          'Realistische Bedingungen: Mit echten Daten messen nicht mit 3 Test-Einträgen',
          'Baseline zuerst: aktuelle Performance messen bevor optimiert wird \u2013 sonst kein Vergleich möglich',
          'Claude nach Schwellenwerten fragen: "Was ist ein akzeptabler Wert für [Aktion]?"'
        ],
        pitfalls: [
          'Im Development-Modus messen: Produktion ist oft 2-5x schneller \u2013 immer auch in Produktion messen',
          'Nur Ladezeit messen: Laufzeit-Performance ist genauso wichtig wie initiale Ladezeit',
          'Optimieren ohne Ziel: Wann ist es schnell genug? Ohne Ziel ist jede Optimierung willkürlich',
          'Performance-Budget vergessen: Was passiert wenn die App auf einem alten Mobilgerät läuft?'
        ],
        furtherReading: [
          { title: 'Chrome DevTools Performance Tutorial (en)', url: 'https://developer.chrome.com/docs/devtools/performance/' },
          { title: 'DevCraft Pro: Performance', url: '#/performance/erster-schritt' }
        ]
      }
    }
  ]
},
/* ══════════════════════════════════════════════════════════════════
   TOPIC 14 – DOKUMENTATION & KOMMUNIKATION
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'documentation',
  title: 'Dokumentation & Kommunikation',
  icon: 'file-text',
  tagline: 'Gut dokumentierter Code macht Claude zum besseren Assistenten und Teams produktiver',
  color: '#64748B',
  gradient: 'linear-gradient(135deg, #64748B 0%, #475569 50%, #334155 100%)',
  overview: 'Gute Dokumentation ist kein Luxus, sondern Grundlage für effektives Vibe-Coding. Sie gibt Claude den Kontext, den er braucht, um dir wirklich zu helfen \u2013 und anderen (oder dir selbst in drei Monaten) den Einstieg ins Projekt zu ermöglichen.\n\nFür Vibe-Coder hat Dokumentation einen besonderen Nutzen: Claude liest deine README, deine Kommentare und deine CLAUDE.md. Je besser dokumentiert dein Projekt, desto präziser und hilfreicher wird Claude.',
  relatedTopics: ['git', 'architecture', 'promptengineering'],
  subareas: [
    {
      id: 'mental-model',
      title: 'Mental Model: Dokumentation als Kommunikation',
      icon: 'lightbulb',
      concept: 'Dokumentation kommuniziert mit drei Zielgruppen: deinem zukünftigen Ich, deinem Team \u2013 und Claude.',
      body: 'Stell dir vor, du übergibst dein Projekt an einen neuen Kollegen der morgen anfängt. Was muss er wissen um sofort produktiv zu sein? Wo ist das Projekt beschrieben? Wie startet man es? Welche Entscheidungen wurden warum getroffen? Genau das ist gute Dokumentation.\n\nFür Vibe-Coder hat Dokumentation einen zusätzlichen Nutzen: Claude liest deine README, deine Kommentare und deine CLAUDE.md-Datei. Je mehr Kontext du bereitstellst, desto besser kann Claude dir helfen. Eine gut geschriebene CLAUDE.md verwandelt jeden Chat in einen Gespräch mit einem Insider der dein Projekt kennt.',
      keyPoints: [
        'README = Eingangstür: Was macht das Projekt? Wie startet man es? Was wird vorausgesetzt?',
        'Inline-Kommentare = Warum, nicht Was: Code erklärt was passiert, Kommentare warum',
        'CLAUDE.md = Projektgedächtnis für Claude: Kontext, Entscheidungen, Konventionen an einem Ort',
        'ADR (Architecture Decision Record) = kurze Notiz zu Architekturentscheidungen \u2013 warum genau diese Lösung?',
        'Changelog = Geschichte des Projekts: Was hat sich in welcher Version geändert?'
      ],
      tools: null,
      commands: null,
      deepDive: {
        title: 'Die Ebenen der Dokumentation',
        intro: 'Dokumentation existiert auf verschiedenen Ebenen \u2013 von einzelnen Code-Zeilen bis zum gesamten Projekt. Jede Ebene hat ihre Zielgruppe und ihren Zweck.',
        sections: [
          {
            heading: 'Dokumentationsebenen und ihre Zielgruppe',
            prose: 'Jede Ebene beantwortet andere Fragen und richtet sich an andere Leser \u2013 einschließlich Claude.',
            diagram: {
              content: `  +----------------------------------------------+
  |  Ebene 4: PROJEKT                          |
  |  README.md, CHANGELOG, CONTRIBUTING.md     |
  |  Zielgruppe: neue Entwickler, Nutzer       |
  +----------------------------------------------+
  |  Ebene 3: ARCHITEKTUR                      |
  |  CLAUDE.md, ADRs, Architektur-Diagramme    |
  |  Zielgruppe: Team, Claude                  |
  +----------------------------------------------+
  |  Ebene 2: MODUL / FUNKTION                 |
  |  JSDoc, Docstrings, Typen-Annotationen     |
  |  Zielgruppe: andere Entwickler, IDEs       |
  +----------------------------------------------+
  |  Ebene 1: CODE                             |
  |  Inline-Kommentare, sprechende Namen       |
  |  Zielgruppe: du selbst in 6 Monaten        |
  +----------------------------------------------+
  Alle Ebenen zusammen = Claude versteht
  dein Projekt vollstaendig`
            }
          }
        ],
        bestPractices: [
          'README zuerst: Noch vor dem ersten Commit eine README anlegen \u2013 zwingt zur Klarheit über das Projekt',
          'CLAUDE.md pflegen: Jede wichtige Entscheidung kurz dokumentieren \u2013 Claude dankt es dir bei jedem Chat',
          'Kommentiere Warum nicht Was: "berechne Gesamtpreis" ist nutzlos, "+ 19% MwSt für Deutschland" ist wertvoll',
          'Claude als Dokumentationshelfer: "Schreibe eine JSDoc für diese Funktion" \u2013 spart Zeit und sichert Konsistenz'
        ],
        pitfalls: [
          '"Der Code ist selbsterklärend": Für dich vielleicht, für jemanden der deinen Gedankengang nicht kennt nicht',
          'Dokumentation nach dem Schreiben: Während der Entwicklung geht viel Kontextwissen verloren',
          'README nicht aktuell halten: Veraltete Dokumentation ist gefährlicher als keine \u2013 sie führt in die falsche Richtung',
          'Zu viele Kommentare: Code-Kommentare die offensichtliches erklären sind Lärm, kein Signal'
        ],
        furtherReading: [
          { title: 'Make a README \u2013 interaktiver Generator (en)', url: 'https://www.makeareadme.com/' },
          { title: 'DevCraft Pro: Dokumentation', url: '#/documentation/mental-model' }
        ]
      }
    },
    {
      id: 'kernkonzepte',
      title: 'Kernkonzepte: README, Kommentare, JSDoc, CLAUDE.md',
      icon: 'book-open',
      concept: 'Die vier Dokumentationsformate die jeder Vibe-Coder kennen sollte \u2013 und welches wann eingesetzt wird.',
      body: 'README.md ist Pflicht für jedes Projekt: Was es tut, wie man es startet, was vorausgesetzt wird. JSDoc (JavaScript) und Docstrings (Python) sind standardisierte Kommentar-Blöcke vor Funktionen die IDEs und Tools verstehen.\n\nCLAUDE.md ist eine spezielle Datei für Claude Code: Sie beschreibt das Projekt, die Konventionen und wichtige Entscheidungen. Claude liest sie automatisch bei jedem Chat. Ein Changelog hält fest was sich in welcher Version geändert hat \u2013 für Nutzer und für das Team.',
      keyPoints: [
        'README.md: Einstiegspunkt jedes Projekts \u2013 Was? Wie starten? Was wird vorausgesetzt?',
        'JSDoc / Docstring: standardisierter Funktionskommentar \u2013 Parameter, Rückgabe, Zweck',
        'CLAUDE.md: Projektgedächtnis für Claude Code \u2013 Kontext, Regeln, Entscheidungsprotokoll',
        'CHANGELOG.md: chronologische Liste aller Änderungen \u2013 "Was hat sich in v2.0 geändert?"',
        'Inline-Kommentare: erklären das Warum, nicht das Was \u2013 kurz, präzise, aktuell halten'
      ],
      tools: [
        { name: 'Markdown', purpose: 'Einfache Formatierungssprache für README und Dokumentation \u2013 überall unterstützt' },
        { name: 'Claude / Cursor', purpose: 'Dokumentation aus Code generieren lassen \u2013 spart Zeit und sichert Konsistenz' }
      ],
      commands: null,
      deepDive: null
    },
    {
      id: 'erster-schritt',
      title: 'Erster Schritt: README für dein Projekt mit Claude erstellen',
      icon: 'play-circle',
      concept: 'In 10 Minuten eine professionelle README für dein Projekt erstellen \u2013 mit Claude als Ghostwriter.',
      body: 'Das Ziel: Eine vollständige README.md die das Projekt erklärt, den Einstieg ermöglicht und Claude als Kontext dient. Nutze eine klare Vorlage und lass Claude den ersten Entwurf generieren \u2013 dann nur noch anpassen und ergänzen.\n\nEin guter Prompt für Claude: Projektbeschreibung + Dateistruktur + Technologiestack + README-Template. Claude füllt die Lücken und du korrigierst Details. Ergebnis: professionelle README in Minuten statt Stunden.',
      keyPoints: [
        'Template zuerst: Struktur festlegen dann Inhalte füllen \u2013 sonst bleibt die README ewig leer',
        'Claude als Ghostwriter: Projekt beschreiben, Template übergeben, Entwurf generieren lassen',
        'Dateistruktur erklären: "Was macht jeder Ordner?" \u2013halb für Mensch, halb für Claude',
        'Installation und Start-Befehl: das wichtigste zuerst \u2013 muss direkt funktionieren'
      ],
      tools: [
        { name: 'Claude / Cursor Chat', purpose: 'README-Entwurf generieren: Projekt beschreiben + Template übergeben' }
      ],
      commands: null,
      deepDive: {
        title: 'README erstellen \u2013 Template und Prompt',
        intro: 'Ein bewährtes README-Template und der Claude-Prompt der daraus eine fertige README macht. Einmal eingerichtet, in jedem Projekt wiedereinsetzbar.',
        sections: [
          {
            heading: 'README-Template und Claude-Prompt',
            prose: 'Dieses Template deckt alle wichtigen Abschnitte ab. Claude füllt es mit projektspezifischen Inhalten.',
            codeBlock: {
              language: 'markdown',
              label: 'README.md Template',
              code: `# [Projektname]

> Ein Satz: Was macht dieses Projekt und fuer wen?

## Schnellstart
\`\`\`bash
npm install
npm run dev
\`\`\`

## Voraussetzungen
- Node.js >= 18 (oder Python, etc.)
- [Weitere Abhaengigkeiten]

## Projektstruktur
\`\`\`
src/
  components/   # UI-Komponenten
  pages/        # Seiten-Komponenten
  utils/        # Hilfsfunktionen
\`\`\`

## Wichtige Entscheidungen
- [Warum diese Technologie statt Alternativen?]

---
## Prompt fuer Claude:
# "Schreibe eine README.md fuer mein Projekt.
#  Projektbeschreibung: [was es macht, fuer wen]
#  Technologiestack: [Node.js/React/Python/etc.]
#  Dateistruktur: [Ausgabe von 'ls -R' oder Baumstruktur]
#  Nutze dieses Template: [Template oben einfuegen]
#  Sprache: Deutsch"`
            }
          }
        ],
        bestPractices: [
          'Schnellstart vor Details: Die ersten 5 Zeilen müssen zeigen wie man das Projekt startet \u2013 sonst liest niemand weiter',
          'Einen Satz Projektzweck: "Was macht es?" in max. 2 Sätzen \u2013 Claude formuliert das auf Nachfrage',
          'Dateistruktur kommentieren: nicht nur auflisten sondern erklären was jeder Ordner macht',
          'Regelmäßig aktualisieren: README bei jeder größeren Änderung anpassen \u2013 Claude erinnert daran'
        ],
        pitfalls: [
          'Keine README: "Ich weiß ja wie es geht" \u2013 in 3 Monaten nicht mehr, und Claude auch nicht',
          'Zu detailliert: Eine README ist kein Handbuch \u2013 Überblick und Einstieg, Details gehören ins Wiki',
          'Nicht funktionierende Befehle: Installation die beim ersten Versuch scheitert ist schlechter als keine',
          'Englisch wo Deutsch besser wäre: Für deutschsprachige Teams und Claude auf Deutsch schreiben'
        ],
        furtherReading: [
          { title: 'Make a README \u2013 interaktiver Generator (en)', url: 'https://www.makeareadme.com/' },
          { title: 'DevCraft Pro: Dokumentation', url: '#/documentation/erster-schritt' }
        ]
      }
    }
  ]
},
/* ══════════════════════════════════════════════════════════════════
   TOPIC 15 – PROMPT ENGINEERING FÜR ENTWICKLER
   ══════════════════════════════════════════════════════════════════ */
{
  id: 'promptengineering',
  title: 'Prompt Engineering für Entwickler',
  icon: 'bot',
  tagline: 'Präzise Prompts sind die Kernkompetenz für Vibe-Coding \u2013 je klarer die Aufgabe, desto besser das Ergebnis',
  color: '#14B8A6',
  gradient: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 50%, #0F766E 100%)',
  overview: 'Effektives Prompt Engineering ist die Kernkompetenz für Vibe-Coding. Wer Claude präzise Aufgaben stellt, bekommt präzise Ergebnisse. Wer vage fragt, bekommt vage Antworten.\n\nDer entscheidende Unterschied zwischen gutem und schlechtem Vibe-Coding liegt nicht im Wissen über Programmierung \u2013 es liegt in der Fähigkeit, Aufgaben klar zu formulieren. Das ist eine Kommunikationskompetenz, die lernbar und übertragbar ist.',
  relatedTopics: ['devprocess', 'documentation', 'tooling'],
  subareas: [
    {
      id: 'mental-model',
      title: 'Mental Model: Claude als neuer Kollege',
      icon: 'lightbulb',
      concept: 'Claude ist wie ein sehr fähiger neuer Kollege der am ersten Tag anfängt: kompetent, aber ohne Kontext zu deinem Projekt.',
      body: 'Stell dir vor, ein exzellenter Entwickler fängt morgen bei dir an. Er ist klug und erfahren \u2013 aber er kennt dein Projekt nicht, deine Konventionen nicht und deine Ziele nicht. Wenn du ihm sagst "mach den Code besser", was macht er dann? Er rät.\n\nJe mehr Kontext du gibst, desto besser kann er helfen. "Verbessere diese TypeScript-Funktion, sie soll null-safe sein und Error-States explizit behandeln" \u2013 das ist eine Aufgabe, die er präzise umsetzen kann. Der Unterschied zwischen einem hilfreichen und einem enttäuschenden KI-Ergebnis liegt fast immer im Prompt.',
      keyPoints: [
        'Kontext ist alles: Welches Projekt? Welche Technologie? Was ist schon vorhanden? Was ist das Ziel?',
        'Rolle definieren: "Du bist ein erfahrener TypeScript-Entwickler" \u2013 setzt den richtigen Ton und die richtige Tiefe',
        'Aufgabe präzise formulieren: Was genau soll entstehen? Was sind die Akzeptanzkriterien?',
        'Constraints helfen: "Ohne externe Libraries", "max. 30 Zeilen", "rückwärtskompatibel" \u2013 grenzen ein',
        'Iterieren ist normal: Kein Prompt ist beim ersten Versuch perfekt \u2013 verfeinern und konkretisieren'
      ],
      tools: null,
      commands: null,
      deepDive: {
        title: 'Das RKTC-Modell für Coding-Prompts',
        intro: 'Vier Bausteine machen einen guten Coding-Prompt: Rolle, Kontext, Aufgabe (Task) und Constraints. Zusammen liefern sie präzise, umsetzbare Ergebnisse.',
        sections: [
          {
            heading: 'RKTC: Die vier Bausteine eines effektiven Prompts',
            prose: 'Jeder Baustein hat einen Zweck. Zusammen geben sie Claude alles was er braucht.',
            diagram: {
              content: `  +------------------------------------------+
  |  R  ROLLE                               |
  |     "Du bist ein erfahrener ..."        |
  |     Setzt Ton, Tiefe und Perspektive    |
  +------------------------------------------+
  |  K  KONTEXT                             |
  |     "Das ist mein Projekt: ..."         |
  |     "Ich nutze: Node.js / React / ..."  |
  |     "Vorhanden ist bereits: ..."        |
  +------------------------------------------+
  |  T  AUFGABE (TASK)                      |
  |     "Erstelle eine Funktion die ..."    |
  |     "Refaktoriere diesen Code: ..."     |
  +------------------------------------------+
  |  C  CONSTRAINTS                         |
  |     "Ohne externe Libraries"            |
  |     "TypeScript, maximal 30 Zeilen"     |
  |     "Rueckwaertskompatibel mit v2"      |
  +------------------------------------------+
         -> Klares Ergebnis, erste Iteration`
            }
          }
        ],
        bestPractices: [
          'Kontext vor Aufgabe: Was Claude über das Projekt weiß beeinflusst jede Zeile die er schreibt',
          'CLAUDE.md als Dauerkontext: Projektinfos einmal dokumentieren, in jedem Chat automatisch verfügbar',
          'Beispiele im Prompt: "Schreibe es wie diese Funktion: [Beispiel]" \u2013 Few-Shot Prompting funktioniert sehr gut',
          'Iterieren statt aufgeben: "Das ist gut, aber mach X anders" \u2013 Claude arbeitet gut mit Feedback'
        ],
        pitfalls: [
          '"Schreibe eine Login-Funktion" ohne Kontext: Claude erfindet Framework, Sprache und Sicherheitsansatz',
          'Technische Lösung vorschreiben: "Nutze JWT" gehört in Constraints, nicht in die Aufgabenbeschreibung',
          'Zu viel auf einmal: Lieber 3 präzise Prompts als einen Mega-Prompt der alles abdecken soll',
          'Ergebnisse blind akzeptieren: Jeden Claude-Output reviewen \u2013 er kann Fehler machen'
        ],
        furtherReading: [
          { title: 'Anthropic Prompt Engineering Guide (en)', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
          { title: 'DevCraft Pro: Prompt Engineering', url: '#/promptengineering/mental-model' }
        ]
      }
    },
    {
      id: 'kernkonzepte',
      title: 'Kernkonzepte: Kontext, Rolle, Iteration, Constraints',
      icon: 'book-open',
      concept: 'Die vier Hebel für bessere Prompts \u2013 mit denen du das Maximum aus Claude herausholst.',
      body: 'Few-Shot Prompting bedeutet: Beispiele im Prompt mitgeben. "Schreibe es wie dieses Beispiel: [Beispiel]" ist einer der wirksamsten Prompt-Tricks. Claude lernt sofort Stil, Format und Tiefe.\n\nChain of Thought bedeutet: Claude bitten Schritt für Schritt zu denken. "Erkläre deinen Denkprozess" führt zu durchdachteren Lösungen. CLAUDE.md ist das Werkzeug für projektweiten Kontext: einmal schreiben, bei jedem Chat automatisch verfügbar. Claude Code liest sie automatisch.',
      keyPoints: [
        'Few-Shot Prompting: Beispiele im Prompt \u2013 Claude lernt sofort Stil und Format',
        'Chain of Thought: "Denke Schritt für Schritt" \u2013 führt zu besseren Lösungen bei komplexen Problemen',
        'Iteration: Kein Prompt ist beim ersten Mal perfekt \u2013 Feedback geben und verfeinern ist normal',
        'CLAUDE.md: einmal Kontext schreiben, in jedem Claude-Chat automatisch vorhanden',
        'Constraints begrenzen sinnvoll: "ohne jQuery", "TypeScript strict mode", "max. 20 Zeilen"'
      ],
      tools: [
        { name: 'Claude (claude.ai)', purpose: 'Direkter Chat für Coding-Aufgaben ohne IDE-Setup' },
        { name: 'Cursor Chat', purpose: 'Eingebetteter Claude in der IDE mit vollem Projekt-Kontext via @-Referenzen' },
        { name: 'Claude Code (CLI)', purpose: 'Terminal-basierter KI-Agent für größere Aufgaben und Automatisierung' }
      ],
      commands: null,
      deepDive: null
    },
    {
      id: 'erster-schritt',
      title: 'Erster Schritt: RKTC-Prompt schreiben und vergleichen',
      icon: 'play-circle',
      concept: 'Einen präzisen RKTC-Prompt formulieren und das Ergebnis mit einem vagen Prompt vergleichen \u2013 der Unterschied ist sofort sichtbar.',
      body: 'Das Ziel: Du schreibst einen Prompt nach dem RKTC-Modell für eine konkrete Aufgabe in deinem Projekt. Vergleiche das Ergebnis mit einem vagen Prompt für dieselbe Aufgabe. Der Unterschied macht klar warum Prompt Engineering die wichtigste Vibe-Coding-Kompetenz ist.\n\nNimm eine Aufgabe aus deinem aktuellen Projekt. Formuliere sie einmal vage und einmal mit RKTC. Führe beide in Claude aus. Dann bewerte: Welches Ergebnis ist direkt verwendbar?',
      keyPoints: [
        'RKTC-Struktur: Rolle + Kontext + Aufgabe + Constraints = präzises Ergebnis',
        'Vage Prompts funktionieren manchmal \u2013 aber präzise Prompts funktionieren zuverlässig',
        'Eigenes Projekt als Übungsfeld: kein künstliches Beispiel, sondern echte Aufgabe',
        'Ergebnis bewerten: Wie viel musst du am Output noch ändern? Das ist dein Qualitätsmaßstab'
      ],
      tools: [
        { name: 'Claude.ai', purpose: 'Prompts ohne IDE testen \u2013 ideal für den direkten Vergleich' },
        { name: 'Cursor', purpose: 'Mit @-Referenzen und CLAUDE.md als Kontext: der mächtigste Vibe-Coding-Setup' }
      ],
      commands: null,
      deepDive: {
        title: 'Vager vs. präziser Prompt \u2013 der direkte Vergleich',
        intro: 'Derselbe Auftrag, einmal vage und einmal nach RKTC. Der Unterschied im Ergebnis macht klar warum die Formulierung so wichtig ist.',
        sections: [
          {
            heading: 'RKTC in der Praxis \u2013 Login-Funktion als Beispiel',
            prose: 'Ein reales Beispiel das zeigt wie viel Formulierung ausmacht.',
            codeBlock: {
              language: 'text',
              label: 'Vager vs. praeziser Prompt',
              code: `// ─────────────────────────────────────────────
// VAGER PROMPT (haeufiger Einsteiger-Fehler)
// ─────────────────────────────────────────────
"Schreibe eine Login-Funktion."

// Ergebnis: Claude erfindet einen Tech-Stack,
// eine Sprache, einen Sicherheitsansatz.
// Wahrscheinlich nicht das was du brauchst.

// ─────────────────────────────────────────────
// PRAEZISER PROMPT (RKTC-Modell)
// ─────────────────────────────────────────────
"Du bist ein erfahrener TypeScript-Entwickler (Rolle).
Ich baue eine Next.js 14 App mit Prisma und
PostgreSQL. Auth laeuft ueber JWT-Tokens im
HTTP-only Cookie. (Kontext)

Erstelle eine login()-Funktion die:
- E-Mail und Passwort entgegennimmt
- Passwort gegen bcrypt-Hash in der DB prueft
- Bei Erfolg ein JWT setzt und true zurueckgibt
- Bei Fehler eine spezifische Fehlermeldung wirft
(Aufgabe)

Ohne externe Auth-Libraries, nur jsonwebtoken
und bcrypt. TypeScript strict. Deutsche
Fehlermeldungen. Maximal 40 Zeilen. (Constraints)"

// Ergebnis: Exakt passende, verwendbare Funktion
// in deinem Tech-Stack, deiner Sprache, deinem Stil.`
            }
          }
        ],
        bestPractices: [
          'RKTC als Checkliste: Vor dem Absenden prüfen \u2013 Rolle? Kontext? Aufgabe? Constraints?',
          'CLAUDE.md schreibt den K-Teil automatisch: Projekt-Kontext einmal, für immer in jedem Chat',
          'Erster Entwurf als Ausgangspunkt: Claude-Output ist selten perfekt, aber meist 80% dort \u2013 verfeinern',
          'Prompt-Vorlagen anlegen: Häufig genutzte Prompt-Strukturen speichern und wiederverwenden'
        ],
        pitfalls: [
          'RKTC als Pflicht sehen: Für kurze klare Aufgaben reicht oft ein Satz \u2013 RKTC für komplexe Aufgaben',
          'Zu viele Constraints: 10 Einschränkungen können sich widersprechen \u2013  3-5 reichen meistens',
          'Prompt-Engineering statt Lernen: Auch bei KI-Code verstehen was passiert \u2013 nicht nur kopieren',
          'Kontext vergessen wenn man den Chat wechselt: Neuer Chat = kein Kontext \u2013 RKTC erneut anwenden'
        ],
        furtherReading: [
          { title: 'Anthropic: Effektive Prompts (en)', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
          { title: 'DevCraft Pro: Prompt Engineering', url: '#/promptengineering/erster-schritt' }
        ]
      }
    }
  ]
}
  ]
};

export const about = {
  hero: {
    title: "Über mich",

    intro:
      "Ich bin Edvard, Softwareentwickler mit Fokus auf zuverlässige Anwendungen, Entwicklerwerkzeuge und Systeme, die Ideen in nützliche Produkte verwandeln.",
  },

  story: {
    title: "Meine Arbeitsweise",

    description:
      "Ein praktischer Ansatz, um Ideen und technische Herausforderungen in zuverlässige Software umzuwandeln.",

    items: [
      "Ich gehe Softwareentwicklung an, indem ich zuerst das zugrunde liegende Problem verstehe. Das Ziel ist nicht nur Code zu schreiben, sondern Systeme zu schaffen, die klar, wartbar und langfristig wertvoll bleiben.",

      "Meine Arbeit verbindet Produktentwicklung mit starken technischen Grundlagen: Anwendungsarchitektur, Automatisierung, Developer Experience, Infrastruktur und praktische KI-Workflows.",

      "Ich verwandle wiederkehrende Probleme gerne in wiederverwendbare Lösungen. Egal ob ein bestehendes System verbessert oder etwas Neues gebaut wird, mein Fokus liegt darauf, Komplexität zu reduzieren und nachhaltige Grundlagen zu schaffen.",

      "Diese Website dokumentiert die Systeme, die ich entwickle, die Entscheidungen dahinter und die Erkenntnisse, die ich während des Prozesses gewinne.",
    ],
  },

  philosophy: {
    title: "Engineering-Prinzipien",

    description:
      "Die Prinzipien, die meine Herangehensweise an Softwaredesign, technische Entscheidungen und langfristige Wartbarkeit bestimmen.",

    items: [
      {
        title: "Zuerst das Problem verstehen",

        description:
          "Die besten technischen Lösungen entstehen dadurch, dass man den tatsächlichen Bedarf versteht, bevor man die Umsetzung wählt.",
      },
      {
        title: "Für Veränderung bauen",

        description:
          "Software sollte so entwickelt werden, dass zukünftige Verbesserungen einfacher werden, anstatt unnötige Komplexität hinzuzufügen.",
      },
      {
        title: "Wiederkehrende Reibung entfernen",

        description:
          "Wiederholte Probleme sind Möglichkeiten, bessere Werkzeuge, Workflows und Systeme zu entwickeln.",
      },
      {
        title: "Durch Veröffentlichen verbessern",

        description:
          "Engineering wächst durch Bauen, Feedback, Iteration und kontinuierliche Verbesserung des Prozesses.",
      },
    ],
  },

  skills: {
    title: "Werkzeuge & Technologien",

    description:
      "Die Technologien und Workflows, die ich nutze, um moderne Softwaresysteme zu entwerfen, zu bauen, zu testen und zu warten.",

    items: [
      {
        category: "Sprachen",
        items: [
          "TypeScript",
          "JavaScript",
          "Python",
          "SQL",
          "Go",
        ],
      },
      {
        category: "Anwendungsentwicklung",
        items: [
          "React",
          "Next.js",
          "Node.js",
          "Tailwind CSS",
          "PostgreSQL",
        ],
      },
      {
        category: "Infrastruktur & Werkzeuge",
        items: [
          "Docker",
          "GitHub Actions",
          "REST APIs",
          "Webhooks",
          "OAuth",
        ],
      },
      {
        category: "Entwickler-Workflow",
        items: [
          "Git",
          "Neovim",
          "Fish",
          "pnpm",
          "Vitest",
          "Playwright",
        ],
      },
    ],
  },
} as const;

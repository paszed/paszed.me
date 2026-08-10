export const addOns = {
  title: "Zusätzliche Leistungen",
  description:
    "Erweitern Sie Ihre Website jederzeit um zusätzliche Leistungen, wenn Ihr Unternehmen sie benötigt.",

  forLabel: "Für",

  items: {
    "website-care": {
      name: "Website-Pflege",
      for: "Unternehmen, die nach dem Launch laufende Unterstützung wünschen.",
      features: [
        "Kleine Änderungen",
        "Technische Wartung",
        "Support",
      ],
    },

    "google-visibility": {
      name: "Google-Sichtbarkeitsoptimierung",
      for: "Unternehmen, die online besser gefunden werden möchten.",
      features: [
        "Grundlegende Suchmaschinenoptimierung",
        "Einrichtung von Seiten-Metadaten",
        "Verbesserung der lokalen Sichtbarkeit",
      ],
    },

    "content-support": {
      name: "Content-Unterstützung",
      for: "Unternehmen, die Unterstützung bei der Vorbereitung ihrer Website-Inhalte benötigen.",
      features: [
        "Content-Struktur",
        "Textoptimierung",
        "Bildorganisation",
      ],
    },

    "additional-pages": {
      name: "Zusätzliche Seiten",
      for: "Unternehmen, die weitere Inhalte oder zusätzliche Informationen benötigen.",
      examples: [
        "Zusätzliche Leistungen",
        "Standorte",
        "Landingpages",
        "Team-Seiten",
      ],
    },

    "additional-languages": {
      name: "Zusätzliche Sprachen",
      for: "Unternehmen, die Kunden in weiteren Sprachen erreichen möchten.",
      features: [
        "Sprachintegration",
        "Einrichtung der Seitenübersetzung",
        "Anpassung der Navigation",
      ],
    },
  },

  startingFrom: "Ab",
  perMonth: "/Monat",
  perPage: "/ Seite",
  perLanguage: "/ Sprache",
  addOnsAvailable: "Separat erhältlich",
  examples: "Beispiele",
} as const;

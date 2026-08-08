export const search = {
  title: "Keresés",

  description:
    "Keress projektek, mérnöki cikkek és oldalak között a paszed.me oldalon.",

  input: {
    placeholder: "Keresés...",
    label: "Keresés",
  },

  empty: {
    title: "Nincs találat",
    description:
      "Próbálj meg más keresési kifejezést.",
  },

  categories: {
    Project: "Projektek",
    Article: "Cikkek",
    Page: "Oldalak",
  },
} as const;

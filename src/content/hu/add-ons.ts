export const addOns = {
  title: "Kiegészítő szolgáltatások",
  description:
    "Bővítsd weboldaladat további szolgáltatásokkal, amikor vállalkozásodnak szüksége van rájuk.",

  forLabel: "Kinek",

  items: {
    "website-care": {
      name: "Weboldal-karbantartás",
      for: "Olyan vállalkozásoknak, amelyek a weboldal indulása után is folyamatos támogatást szeretnének.",
      features: [
        "Kisebb módosítások",
        "Technikai karbantartás",
        "Támogatás",
      ],
    },

    "google-visibility": {
      name: "Google-láthatósági beállítás",
      for: "Olyan vállalkozásoknak, amelyek könnyebben megtalálhatóvá szeretnének válni az interneten.",
      features: [
        "Alapvető keresőoptimalizálás",
        "Oldal-metaadatok beállítása",
        "Helyi online láthatóság javítása",
      ],
    },

    "content-support": {
      name: "Tartalmi támogatás",
      for: "Olyan vállalkozásoknak, amelyek segítséget szeretnének weboldaluk tartalmának előkészítéséhez.",
      features: [
        "Tartalmi struktúra",
        "Szövegek javítása",
        "Képek rendszerezése",
      ],
    },

    "additional-pages": {
      name: "További oldalak",
      for: "Olyan vállalkozásoknak, amelyek további tartalmakat vagy információkat szeretnének megjeleníteni.",
      examples: [
        "További szolgáltatások",
        "Telephelyek",
        "Landing oldalak",
        "Csapatoldalak",
      ],
    },

    "additional-languages": {
      name: "További nyelvek",
      for: "Olyan vállalkozásoknak, amelyek további nyelveken is szeretnék elérni ügyfeleiket.",
      features: [
        "Nyelvi integráció",
        "Oldalak fordításának beállítása",
        "Navigáció módosítása",
      ],
    },
  },

  startingFrom: "Már",
  perMonth: "/hó",
  perPage: "/ oldal",
  perLanguage: "/ nyelv",
  addOnsAvailable: "Külön rendelhető",
  examples: "Példák",
} as const;

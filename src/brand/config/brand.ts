export const brand = {
  name: "Alapworks",
  wordmark: "alapworks",

  description:
    "Software engineering and digital products.",

  logo: {
    symbol: "alapworks",
    lockup: "wordmark",
  },

  appearance: {
    supportsLightMode: true,
    supportsDarkMode: true,
  },
} as const;

export type Brand = typeof brand;

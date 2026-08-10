export const brandMarks = {
  primary: {
    name: "Alapworks",
    shortName: "A",
  },

  wordmark: {
    text: "alapworks",
  },
} as const;

export type BrandMarkName = keyof typeof brandMarks;

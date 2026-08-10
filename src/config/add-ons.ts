export const addOns = [
  {
    slug: "website-care",
    name: "Website Care",
    pricing: {
      type: "starting-from",
      amount: 49,
      suffix: "/month",
    },
    features: [
      "Small updates",
      "Technical maintenance",
      "Support",
    ],
  },
  {
    slug: "google-visibility",
    name: "Google Visibility Setup",
    pricing: {
      type: "fixed",
      amount: 300,
    },
    features: [
      "Basic search optimization",
      "Page metadata setup",
      "Local visibility improvements",
    ],
  },
  {
    slug: "content-support",
    name: "Content Support",
    pricing: {
      type: "starting-from",
      amount: 250,
    },
    features: [
      "Content structure",
      "Text improvement",
      "Image organization",
    ],
  },
  {
    slug: "additional-pages",
    name: "Additional Pages",
    pricing: {
      type: "range",
      min: 100,
      max: 200,
      suffix: "/ page",
    },
    examples: [
      "Additional services",
      "Locations",
      "Landing pages",
      "Team pages",
    ],
  },
  {
    slug: "additional-languages",
    name: "Additional Languages",
    pricing: {
      type: "fixed",
      amount: 200,
      suffix: "/ language",
    },
    features: [
      "Language integration",
      "Page translation setup",
      "Navigation adjustments",
    ],
  },
] as const;

export type AddOn = (typeof addOns)[number];

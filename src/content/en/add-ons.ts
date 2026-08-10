export const addOns = {
  title: "Add-ons",
  description:
    "Extend your website with additional services whenever your business needs them.",

  forLabel: "For",

  items: {
    "website-care": {
      name: "Website Care",
      for: "Businesses wanting ongoing support after launch.",
      features: [
        "Small updates",
        "Technical maintenance",
        "Support",
      ],
    },

    "google-visibility": {
      name: "Google Visibility Setup",
      for: "Businesses wanting better online discoverability.",
      features: [
        "Basic search optimization",
        "Page metadata setup",
        "Local visibility improvements",
      ],
    },

    "content-support": {
      name: "Content Support",
      for: "Businesses needing help preparing website content.",
      features: [
        "Content structure",
        "Text improvement",
        "Image organization",
      ],
    },

    "additional-pages": {
      name: "Additional Pages",
      for: "Businesses needing more content or additional information.",
      examples: [
        "Additional services",
        "Locations",
        "Landing pages",
        "Team pages",
      ],
    },

    "additional-languages": {
      name: "Additional Languages",
      for: "Businesses wanting to reach customers in additional languages.",
      features: [
        "Language integration",
        "Page translation setup",
        "Navigation adjustments",
      ],
    },
  },

  startingFrom: "Starting from",
  perMonth: "/month",
  perPage: "/ page",
  perLanguage: "/ language",
  addOnsAvailable: "Available separately",
  examples: "Examples",
} as const;

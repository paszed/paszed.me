export const search = {
  title: "Search",

  description:
    "Search projects, engineering journal articles, and pages on paszed.me.",

  input: {
    placeholder: "Search...",
    label: "Search",
  },

  empty: {
    title: "No results found",
    description:
      "Try a different search term.",
  },

  categories: {
    Project: "Projects",
    Article: "Articles",
    Page: "Pages",
  },
} as const;

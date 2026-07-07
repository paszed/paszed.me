import type { SearchItem } from "../types/search";

export function createCommandActions(): SearchItem[] {
  return [
    {
      id: "open-projects",
      title: "Open Projects",
      description: "Browse all projects.",
      href: "/projects",
      category: "Page",
      keywords: [
        "projects",
        "portfolio",
      ],
    },
    {
      id: "open-journal",
      title: "Open Journal",
      description: "Read engineering articles.",
      href: "/journal",
      category: "Page",
      keywords: [
        "blog",
        "journal",
        "writing",
      ],
    },
    {
      id: "open-about",
      title: "Open About",
      description: "Learn more about me.",
      href: "/about",
      category: "Page",
      keywords: [
        "about",
        "bio",
      ],
    },
  ];
}

export const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Journal",
    href: "/journal",
  },
  {
    label: "Links",
    href: "/links",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Now",
    href: "/now",
  },
  {
    label: "Uses",
    href: "/uses",
  },
] as const;

export type Navigation = typeof navigation;

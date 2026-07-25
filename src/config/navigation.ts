export const navigation = [
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Journal",
    href: "/journal",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Now",
    href: "/now",
  },
] as const;

export type Navigation = typeof navigation;

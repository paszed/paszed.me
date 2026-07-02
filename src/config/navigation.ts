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
    label: "Blog",
    href: "/blog",
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

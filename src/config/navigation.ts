export const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Uses",
    href: "/uses",
  },
  {
    label: "Now",
    href: "/now",
  },
  {
    label: "Blog",
    href: "/blog",
  },
] as const;

export type Navigation = typeof navigation;

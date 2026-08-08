export const navigation = [
  {
    key: "projects",
    href: "/projects",
  },
  {
    key: "journal",
    href: "/journal",
  },
  {
    key: "about",
    href: "/about",
  },
  {
    key: "now",
    href: "/now",
  },
] as const;

export type Navigation =
  typeof navigation[number];

export const navigation = [
  {
    key: "services",
    href: "/services",
  },
  {
    key: "work",
    href: "/work",
  },
  {
    key: "process",
    href: "/process",
  },
  {
    key: "pricing",
    href: "/pricing",
  },
  {
    key: "about",
    href: "/about",
  },
  {
    key: "faq",
    href: "/faq",
  },
] as const;

export type Navigation =
  (typeof navigation)[number];

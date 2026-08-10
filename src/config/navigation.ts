 export const navigation = [
  {
      key: "home",
      href: "/",
  },
  {
      key: "services",
      href: "/services",
  },
  {
      key: "work",
      href: "/work",
  },
  {
      key: "about",
      href: "/about",
  },
  {
      key: "contact",
      href: "/contact",
  },
  ] as const;

  export type Navigation =
  (typeof navigation)[number];

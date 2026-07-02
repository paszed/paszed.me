import { profiles } from "./profiles";

export const footer = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Uses", href: "/uses" },
    { label: "Now", href: "/now" },
    { label: "Blog", href: "/blog" },
  ],

  connect: [
    profiles.github,
    profiles.linkedin,
    profiles.x,
    profiles.discord,
    profiles.email,
  ],

  developer: [
    profiles.npm,
    profiles.pypi,
    profiles.docker,
    profiles.huggingFace,
    profiles.stackOverflow,
  ],
} as const;

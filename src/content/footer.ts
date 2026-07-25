import { navigation } from "@/config/navigation";

import { profiles } from "./profiles";

export const footer = {
  navigation,

  resources: [
    {
      label: "Uses",
      href: "/uses",
    },
    {
      label: "Links",
      href: "/links",
    },
  ],

  developer: [
    profiles.github,
    profiles.npm,
  ],

  social: [
    profiles.linkedin,
    profiles.x,
    profiles.reddit,
  ],

  contact: [
    profiles.email,
  ],
} as const;

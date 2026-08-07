import { navigation } from "@/config/navigation";
import { profiles } from "@/content/profiles";

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

  contact: [
    profiles.email,
  ],
} as const;

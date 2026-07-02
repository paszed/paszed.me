import { navigation } from "@/config/navigation";

import { profiles } from "./profiles";

export const footer = {
  navigation,

  developer: [
    profiles.github,
    profiles.npm,
    profiles.pypi,
    profiles.docker,
    profiles.huggingFace,
    profiles.stackOverflow,
  ],

  social: [
    profiles.linkedin,
    profiles.x,
    profiles.reddit,
    profiles.discord,
  ],

  contact: [
    profiles.email,
  ],
} as const;

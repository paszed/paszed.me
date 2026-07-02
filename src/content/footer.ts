import { navigation } from "@/config/navigation";

import { profiles } from "./profiles";

export const footer = {
  navigation,

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

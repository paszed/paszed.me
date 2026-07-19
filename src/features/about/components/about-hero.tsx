import Image from "next/image";

import {
  H1,
  Stack,
  Text,
} from "@/design-system";
import { about } from "@/content";

export function AboutHero() {
  return (
    <section>
      <div className="flex flex-col items-start gap-12 md:flex-row md:items-center">
        <div className="shrink-0 rounded-full border border-border bg-card p-2 shadow-sm">
          <div className="relative size-36 overflow-hidden rounded-full">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Edvard Pasz"
              fill
              priority
              sizes="144px"
              className="object-cover"
            />
          </div>
        </div>

        <Stack
          gap="md"
          className="max-w-2xl"
        >
          <H1>{about.hero.title}</H1>

          <Text
            size="lg"
            muted
            className="leading-relaxed"
          >
            {about.hero.intro}
          </Text>
        </Stack>
      </div>
    </section>
  );
}

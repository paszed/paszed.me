import Image from "next/image";

import {
  H1,
  Stack,
  Text,
} from "@/components/ui";
import { about } from "@/content";

export function AboutHero() {
  return (
    <section>
      <Stack gap="xl">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
          <div className="rounded-full border border-border bg-card p-2 shadow-2xl">
            <div className="relative h-36 w-36 overflow-hidden rounded-full">
              <Image
                src="/images/profile.jpg"
                alt="Edvard Pasz"
                fill
                sizes="144px"
                className="object-cover"
              />
            </div>
          </div>

          <Stack gap="md">
            <H1>{about.hero.title}</H1>

            <Text
              size="lg"
              muted
              className="max-w-2xl"
            >
              {about.hero.intro}
            </Text>
          </Stack>
        </div>
      </Stack>
    </section>
  );
}

import Image from "next/image";

import {
  Avatar,
  Heading,
  Measure,
  Section,
  Stack,
  Surface,
  Text,
} from "@/design-system";

import { about } from "@/content";

export function AboutHero() {
  return (
    <Section>
      <div
        className="
          grid
          gap-12
          lg:grid-cols-[auto_minmax(0,1fr)]
          lg:items-center
        "
      >
        <Surface className="w-fit rounded-full p-2 shadow-sm">
          <Avatar className="relative size-28 overflow-hidden border-0 sm:size-36">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Edvard Pasz"
              fill
              priority
              sizes="(max-width: 640px) 112px, 144px"
              className="object-cover"
            />
          </Avatar>
        </Surface>

        <Stack
          gap="md"
          className="max-w-3xl"
        >
          <Heading as="h1">
            {about.hero.title}
          </Heading>

          <Measure size="3xl">
            <Text
              size="lg"
              muted
              className="leading-relaxed"
            >
              {about.hero.intro}
            </Text>
          </Measure>
        </Stack>
      </div>
    </Section>
  );
}

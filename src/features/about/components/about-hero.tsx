import Image from "next/image";

import {
  Avatar,
  Eyebrow,
  Heading,
  Section,
  Stack,
  Surface,
  Text,
} from "@/design-system";

import { about } from "@/content";

export function AboutHero() {
  return (
    <Section>
      <Stack
        gap="xl"
        className="md:flex-row md:items-center"
      >
        <Surface className="shrink-0 rounded-full p-2 shadow-sm">
          <Avatar className="relative size-36 overflow-hidden border-0 sm:size-44">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Edvard Pasz"
              fill
              priority
              sizes="(max-width: 640px) 144px, 176px"
              className="object-cover"
            />
          </Avatar>
        </Surface>

        <Stack
          gap="md"
          className="max-w-3xl"
        >
          <Eyebrow>
            Software Engineer • Systems Builder
          </Eyebrow>

          <Heading as="h1">
            {about.hero.title}
          </Heading>

          <Text
            size="lead"
            muted
          >
            {about.hero.intro}
          </Text>

          <Text
            muted
            className="max-w-2xl leading-relaxed"
          >
            I build software by focusing on strong foundations, clear
            boundaries, and systems that remain useful as they grow.
          </Text>
        </Stack>
      </Stack>
    </Section>
  );
}

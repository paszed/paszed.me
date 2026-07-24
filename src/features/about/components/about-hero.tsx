import Image from "next/image";

import {
  Avatar,
  Cluster,
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
      <Cluster
        gap="lg"
        className="flex-col items-start gap-12 md:flex-row md:items-center"
      >
        <Surface className="shrink-0 rounded-full p-2 shadow-sm">
          <Avatar className="relative size-36 overflow-hidden border-0">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Edvard Pasz"
              fill
              priority
              sizes="144px"
              className="object-cover"
            />
          </Avatar>
        </Surface>

        <Stack
          gap="md"
          className="max-w-2xl"
        >
          <Heading as="h1">
            {about.hero.title}
          </Heading>

          <Text
            size="lg"
            muted
            className="leading-relaxed"
          >
            {about.hero.intro}
          </Text>
        </Stack>
      </Cluster>
    </Section>
  );
}

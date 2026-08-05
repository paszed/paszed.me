import {
  Heading,
  Section,
  Stack,
  Text,
} from "@/design-system";

import { about } from "@/content";

export function AboutStory() {
  return (
    <Section>
      <Stack gap="xl">
        <Stack gap="sm">
          <Heading as="h2">
            My Approach
          </Heading>

          <Text
            muted
            className="max-w-2xl leading-relaxed"
          >
            How I think about building software, solving problems, and creating
            systems that remain useful over time.
          </Text>
        </Stack>

        <Stack
          gap="lg"
          className="max-w-3xl"
        >
          {about.story.map((paragraph) => (
            <Text
              key={paragraph}
              size="lg"
              muted
              className="leading-relaxed"
            >
              {paragraph}
            </Text>
          ))}
        </Stack>
      </Stack>
    </Section>
  );
}

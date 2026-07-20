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
      <Stack gap="lg">
        <Heading as="h2">My Story</Heading>

        <Stack gap="lg" className="max-w-3xl">
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

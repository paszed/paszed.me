import {
  Heading,
  Section,
  Stack,
  Text,
} from "@/design-system";
import type { AboutStoryContent } from "@/features/about/types";

interface AboutStoryProps {
  content: AboutStoryContent;
}

export function AboutStory({
  content,
}: AboutStoryProps) {
  return (
    <Section>
      <Stack gap="xl">
        <Stack gap="sm">
          <Heading as="h2">
            {content.title}
          </Heading>

          <Text
            muted
            className="max-w-2xl leading-relaxed"
          >
            {content.description}
          </Text>
        </Stack>

        <Stack
          gap="lg"
          className="max-w-3xl"
        >
          {content.items.map((paragraph) => (
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

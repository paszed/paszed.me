import {
  Heading,
  Measure,
  Section,
  Stack,
  Surface,
  Text,
} from "@/design-system";
import type { AboutHeroContent } from "@/features/about/types";

interface AboutHeroProps {
  content: AboutHeroContent;
}

export function AboutHero({
  content,
}: AboutHeroProps) {
  return (
    <Section>
      <Surface>
        <Stack gap="md">
          <Heading as="h1">
            {content.title}
          </Heading>

          <Measure size="3xl">
            <Text
              size="lg"
              muted
              className="leading-relaxed"
            >
              {content.intro}
            </Text>
          </Measure>
        </Stack>
      </Surface>
    </Section>
  );
}

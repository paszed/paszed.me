import {
  Heading,
  Measure,
  Section,
  Stack,
  Text,
} from "@/design-system";

interface UsesHeroProps {
  title: string;
  description: string;
}

export function UsesHero({
  title,
  description,
}: UsesHeroProps) {
  return (
    <Section>
      <Stack>
        <Heading>
          {title}
        </Heading>

        <Measure size="3xl">
          <Text size="lg" muted>
            {description}
          </Text>
        </Measure>
      </Stack>
    </Section>
  );
}

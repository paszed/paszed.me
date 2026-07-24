import {
  Heading,
  Measure,
  Section,
  Stack,
  Text,
} from "@/design-system";

import { uses } from "@/content";

export function UsesHero() {
  return (
    <Section>
      <Stack gap="md">
        <Heading as="h1">Uses</Heading>

        <Measure size="3xl">
          <Text size="lg" muted>
            {uses.description}
          </Text>
        </Measure>
      </Stack>
    </Section>
  );
}

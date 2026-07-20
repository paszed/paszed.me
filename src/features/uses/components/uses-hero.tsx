import {
  Heading,
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

        <Text
          size="lg"
          muted
          className="max-w-3xl leading-8"
        >
          {uses.description}
        </Text>
      </Stack>
    </Section>
  );
}

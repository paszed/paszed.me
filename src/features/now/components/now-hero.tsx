import {
  Heading,
  Measure,
  Section,
  Stack,
  Text,
} from "@/design-system";

export function NowHero() {
  return (
    <Section>
      <Stack gap="md">
        <Heading as="h1">Now</Heading>

        <Measure size="3xl">
          <Text size="lg" muted>
            This page captures what I&rsquo;m currently focused on. Inspired by
            Derek Sivers&rsquo; now page, it&rsquo;s a snapshot of what I&rsquo;m
            building, learning, and exploring at this moment.
          </Text>
        </Measure>
      </Stack>
    </Section>
  );
}

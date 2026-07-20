import {
  Heading,
  Section,
  Stack,
  Text,
} from "@/design-system";

export function NowHero() {
  return (
    <Section>
      <Stack gap="md">
        <Heading as="h1">Now</Heading>

        <Text
          size="lg"
          muted
          className="max-w-3xl leading-8"
        >
          This page captures what I&rsquo;m currently focused on. Inspired by
          Derek Sivers&rsquo; now page, it&rsquo;s a snapshot of what I&rsquo;m
          building, learning, and exploring at this moment.
        </Text>
      </Stack>
    </Section>
  );
}

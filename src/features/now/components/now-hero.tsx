import {
  Eyebrow,
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
        <Eyebrow>
          Current Focus
        </Eyebrow>

        <Heading as="h1">
          Now
        </Heading>

        <Measure size="3xl">
          <Text
            size="lg"
            muted
          >
            A snapshot of what I am currently building, learning, and
            exploring. This page changes as priorities evolve and new ideas
            become experiments, projects, or systems.
          </Text>
        </Measure>
      </Stack>
    </Section>
  );
}

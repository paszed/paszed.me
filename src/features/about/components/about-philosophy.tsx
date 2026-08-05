import {
  Card,
  Grid,
  Heading,
  Section,
  Stack,
  Text,
} from "@/design-system";

import { about } from "@/content";

export function AboutPhilosophy() {
  return (
    <Section>
      <Stack gap="xl">
        <Stack gap="sm">
          <Heading as="h2">
            How I Build Software
          </Heading>

          <Text
            muted
            className="max-w-3xl"
          >
            The principles that guide how I approach architecture, engineering
            decisions, and building systems that can evolve over time.
          </Text>
        </Stack>

        <Grid
          columns={2}
          gap="lg"
        >
          {about.philosophy.map((principle) => (
            <Card
              key={principle.title}
              variant="interactive"
              className="h-full p-6"
            >
              <Stack gap="sm">
                <Heading
                  as="h3"
                  className="text-2xl"
                >
                  {principle.title}
                </Heading>

                <Text
                  muted
                  size="sm"
                  className="leading-relaxed"
                >
                  {principle.description}
                </Text>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Stack>
    </Section>
  );
}

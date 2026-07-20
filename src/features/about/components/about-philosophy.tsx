import {
  Grid,
  Heading,
  Panel,
  Section,
  Stack,
  Text,
} from "@/design-system";

import { about } from "@/content";

export function AboutPhilosophy() {
  return (
    <Section>
      <Stack gap="lg">
        <Heading as="h2">How I Build Software</Heading>

        <Grid className="gap-8 md:grid-cols-2">
          {about.philosophy.map((principle) => (
            <Panel
              key={principle.title}
              className="h-full p-6"
            >
              <Stack gap="sm">
                <Heading as="h3">{principle.title}</Heading>

                <Text
                  muted
                  className="leading-relaxed"
                >
                  {principle.description}
                </Text>
              </Stack>
            </Panel>
          ))}
        </Grid>
      </Stack>
    </Section>
  );
}

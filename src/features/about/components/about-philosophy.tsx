import {
  Card,
  Grid,
  Heading,
  Section,
  Stack,
  Text,
} from "@/design-system";
import type { AboutPhilosophyContent } from "@/features/about/types";

interface AboutPhilosophyProps {
  content: AboutPhilosophyContent;
}

export function AboutPhilosophy({
  content,
}: AboutPhilosophyProps) {
  return (
    <Section>
      <Stack gap="xl">
        <Stack gap="sm">
          <Heading as="h2">
            Engineering Principles
          </Heading>

          <Text
            muted
            className="max-w-2xl leading-relaxed"
          >
            The principles that guide how I approach software design, technical decisions, and long-term maintainability.
          </Text>
        </Stack>

        <Grid
          columns={2}
          gap="lg"
        >
          {content.map((principle) => (
            <Card
              key={principle.title}
              variant="interactive"
              className="h-full p-6"
            >
              <Stack gap="sm">
                <Heading
                  as="h3"
                  className="text-xl sm:text-2xl"
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

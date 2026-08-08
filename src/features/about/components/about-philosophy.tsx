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
            {content.title}
          </Heading>

          <Text
            muted
            className="max-w-2xl leading-relaxed"
          >
            {content.description}
          </Text>
        </Stack>

        <Grid
          columns={2}
          gap="lg"
        >
          {content.items.map((principle) => (
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

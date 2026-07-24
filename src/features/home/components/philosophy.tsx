import {
  Card,
  Container,
  Grid,
  Heading,
  Section,
  SectionHeader,
  Stack,
  Text,
} from "@/design-system";
import { home } from "@/content";

export function Philosophy() {
  return (
    <Section>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            eyebrow="Philosophy"
            title={home.philosophy.title}
            description="The principles that shape how I approach software design, engineering, and long-term maintainability."
          />

          <Grid gap="lg" className="md:grid-cols-3">
            {home.philosophy.items.map((principle) => (
              <Card
                key={principle.title}
                variant="interactive"
                className="h-full"
              >
                <Stack gap="sm">
                  <Heading as="h3" className="text-lg">
                    {principle.title}
                  </Heading>

                  <Text muted>
                    {principle.description}
                  </Text>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}

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

export function CurrentFocus() {
  return (
    <Section>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            eyebrow="Current Focus"
            title={home.currentFocus.title}
            description="The areas I'm actively investing time in as I build software and continue growing as an engineer."
          />

          <Grid
            columns={3}
            gap="lg"
            className="md:grid-cols-3"
          >
            {home.currentFocus.items.map((item) => (
              <Card
                key={item.title}
                variant="interactive"
                className="h-full"
              >
                <Stack gap="sm">
                  <Heading as="h3" className="text-lg">
                    {item.title}
                  </Heading>

                  <Text muted>{item.description}</Text>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}

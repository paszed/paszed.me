import {
  Container,
  Grid,
  Section,
  SectionHeader,
  Stack,
} from "@/design-system";
import { home } from "@/content";

import { FeatureCard } from "./feature-card";

export function HowIHelp() {
  return (
    <Section>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            eyebrow="Services"
            title={home.howIHelp.title}
            description={home.howIHelp.description}
          />

          <Grid
            columns={3}
            gap="lg"
          >
            {home.howIHelp.items.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}

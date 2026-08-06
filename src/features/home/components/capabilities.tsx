import {
  Container,
  Grid,
  Section,
  SectionHeader,
  Stack,
} from "@/design-system";
import { home } from "@/content";

import { FeatureCard } from "./feature-card";

export function Capabilities() {
  return (
    <Section>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            eyebrow="What I Build"
            title={home.capabilities.title}
            description={home.capabilities.description}
          />

          <Grid
            columns={3}
            gap="lg"
          >
            {home.capabilities.items.map((item) => (
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

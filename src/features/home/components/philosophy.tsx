import { Container } from "@/components/layout/container";
import {
  Card,
  Section,
  SectionHeader,
  Stack,
  Text,
} from "@/components/ui";
import { home } from "@/content";

export function Philosophy() {
  return (
    <Section>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            eyebrow="Philosophy"
            title={home.philosophy.title}
            description="The principles that guide how I design, build, and ship software."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {home.philosophy.items.map((principle) => (
              <Card
                key={principle.title}
                className="transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
              >
                <Stack gap="sm">
                  <h3 className="text-lg font-semibold text-fg">
                    {principle.title}
                  </h3>

                  <Text muted>
                    {principle.description}
                  </Text>
                </Stack>
              </Card>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}

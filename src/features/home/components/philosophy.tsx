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
            description="The principles that shape how I approach software design, engineering, and long-term maintainability."
          />

          <div className="grid gap-8 md:grid-cols-3">
            {home.philosophy.items.map((principle) => (
              <Card
                key={principle.title}
                variant="interactive"
                className="h-full"
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

import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { home } from "@/content";

export function Philosophy() {
  return (
    <Section>
      <Container>
        <div className="space-y-10">
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
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-fg">
                    {principle.title}
                  </h3>

                  <p className="leading-7 text-fg-secondary">
                    {principle.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

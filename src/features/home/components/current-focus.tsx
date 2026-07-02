import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { home } from "@/content/home";

export function CurrentFocus() {
  return (
    <Section>
      <Container>
        <div className="space-y-10">
          <SectionHeader
            eyebrow="Current"
            title={home.currentFocus.title}
            description="What I'm actively building, learning, and exploring right now."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {home.currentFocus.items.map((item) => (
              <Card
                key={item.title}
                className="transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-fg">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-fg-secondary">
                    {item.description}
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

import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { H2 } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { home } from "@/content/home";

export function CurrentFocus() {
  return (
    <Section>
      <Container>
        <div className="space-y-10">
          <div className="space-y-3">
            <H2>{home.currentFocus.title}</H2>

            <p className="max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
             {"What I'm actively building, learning, and exploring right now."}
               </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {home.currentFocus.items.map((item) => (
              <Card
                key={item.title}
                className="transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30"
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-neutral-600 dark:text-neutral-400">
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

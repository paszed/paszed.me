import { H2, Panel } from "@/components/ui";
import { about } from "@/content";

export function AboutPhilosophy() {
  return (
    <section className="space-y-8">
      <H2>How I Build Software</H2>

      <div className="grid gap-6 md:grid-cols-2">
        {about.philosophy.map((principle) => (
          <Panel
            key={principle.title}
            className="h-full p-6"
          >
            <h3 className="mb-3 text-lg font-semibold text-fg">
              {principle.title}
            </h3>

            <p className="leading-7 text-fg-secondary">
              {principle.description}
            </p>
          </Panel>
        ))}
      </div>
    </section>
  );
}

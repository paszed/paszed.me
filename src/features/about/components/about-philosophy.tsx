import { H2 } from "@/components/ui/heading";
import { about } from "@/content/about";

export function AboutPhilosophy() {
  return (
    <section className="space-y-8">
      <H2>How I Build Software</H2>

      <div className="grid gap-6 md:grid-cols-2">
        {about.philosophy.map((principle) => (
          <div
            key={principle.title}
            className="rounded-2xl border border-border p-6"
          >
            <h3 className="mb-3 text-lg font-semibold text-fg">
              {principle.title}
            </h3>

            <p className="leading-7 text-fg-secondary">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

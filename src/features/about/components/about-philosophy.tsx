import { H2 } from "@/components/ui/heading";

const principles = [
  {
    title: "Build for maintainability",
    description:
      "I prefer clear architecture, reusable components, and strong typing over clever shortcuts.",
  },
  {
    title: "Ship continuously",
    description:
      "Small, incremental improvements keep projects healthy and make it easier to gather feedback.",
  },
  {
    title: "Learn by building",
    description:
      "Every project is an opportunity to explore new technologies and refine my engineering practices.",
  },
  {
    title: "Keep it simple",
    description:
      "Simple solutions are easier to understand, maintain, and scale than unnecessary complexity.",
  },
];

export function AboutPhilosophy() {
  return (
    <section className="space-y-8">
      <H2>How I Build Software</H2>

      <div className="grid gap-6 md:grid-cols-2">
        {principles.map((principle) => (
          <div
            key={principle.title}
            className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800"
          >
            <h3 className="mb-3 text-lg font-semibold">
              {principle.title}
            </h3>

            <p className="leading-7 text-neutral-600 dark:text-neutral-400">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

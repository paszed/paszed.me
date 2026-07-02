import { H2 } from "@/components/ui/heading";
import { about } from "@/content/about";

export function AboutSkills() {
  return (
    <section className="space-y-8">
      <H2>Technologies I Enjoy Working With</H2>

      <div className="grid gap-6 md:grid-cols-2">
        {about.skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800"
          >
            <h3 className="mb-4 text-lg font-semibold">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-900"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

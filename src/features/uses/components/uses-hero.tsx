import { H1 } from "@/components/ui/heading";

export function UsesHero() {
  return (
    <section className="space-y-6">
      <H1>Uses</H1>

      <p className="max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
        {
          "This is the hardware, software, and tools I use every day to design, build, and ship software. I'll keep this page updated as my setup evolves."
        }
      </p>
    </section>
  );
}

import { H1 } from "@/components/ui/heading";

export function NowHero() {
  return (
    <section className="space-y-6">
      <H1>Now</H1>

      <p className="max-w-3xl text-lg leading-8 text-fg-secondary">
        {
          "This page captures what I'm currently focused on. Inspired by Derek Sivers' now page, it's a snapshot of what I'm building, learning, and exploring at this moment."
        }
      </p>
    </section>
  );
}

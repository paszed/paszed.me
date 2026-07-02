import Image from "next/image";

import { H1 } from "@/components/ui/heading";
import { about } from "@/content/about";

export function AboutHero() {
  return (
    <section className="space-y-10">
      <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
        <div className="relative h-36 w-36 overflow-hidden rounded-full border border-border bg-card p-1 shadow-lg">
          <Image
            src="/images/profile.jpg"
            alt="Edvard Pasz"
            fill
            sizes="144px"
            className="rounded-full object-cover"
          />
        </div>

        <div className="space-y-5">
          <H1>{about.hero.title}</H1>

          <p className="max-w-2xl text-lg leading-8 text-fg-secondary">
            {about.hero.intro}
          </p>
        </div>
      </div>
    </section>
  );
}

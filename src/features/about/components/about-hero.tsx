import Image from "next/image";

import { H1 } from "@/components/ui/heading";
import { about } from "@/content/about";

export function AboutHero() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-800">
          <Image
            src="/images/profile.jpg"
            alt="Edvard Pasz"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          <H1>{about.hero.title}</H1>

          <p className="max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            {about.hero.intro}
          </p>
        </div>
      </div>
    </section>
  );
}

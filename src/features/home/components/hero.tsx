import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ThemedLion } from "@/components/theme/themed-lion";
import { Button } from "@/components/ui/button";
import { H1 } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { site } from "@/config/site";

export function Hero() {
  return (
    <Section className="relative overflow-hidden py-28">
      <ThemedLion />

      <Container className="relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="space-y-8">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-green-500">
              BUILD • LEARN • SHIP
            </p>

            <H1>
              Hi, I&apos;m {site.owner}.
              <br />
              I build developer tools,
              <br />
              AI products, and modern web experiences.
            </H1>

            <p className="max-w-xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              I&apos;m a software engineer passionate about creating products
              that are fast, maintainable, and genuinely useful. This site is
              where I document what I build, what I learn, and the decisions
              behind each project.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/projects">
                <Button>Explore Projects</Button>
              </Link>

              <Link
                href="/about"
                className="text-sm font-medium transition-colors hover:text-green-500"
              >
                About me →
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border border-green-500/30 shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt={site.owner}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

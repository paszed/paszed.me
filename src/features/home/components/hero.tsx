import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { H1 } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { site } from "@/config/site";

export function Hero() {
  return (
    <Section className="relative overflow-hidden py-24">
      <Image
        src="/images/lion.png"
        alt=""
        fill
        priority
        className="pointer-events-none object-contain object-center opacity-10 select-none"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-green-500">
              Software Engineer
            </p>

            <H1>
              Building developer tools,
              <br />
              AI applications,
              <br />
              and modern web products.
            </H1>

            <p className="max-w-xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              I'm {site.owner}. I enjoy building software that's fast,
              maintainable, and genuinely useful.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <Button>View Projects</Button>
              </Link>

              <Link href="/about">
                <Button className="bg-transparent text-black ring-1 ring-neutral-300 hover:bg-neutral-100 dark:bg-transparent dark:text-white dark:ring-neutral-700 dark:hover:bg-neutral-900">
                  About Me
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border border-green-500/40">
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

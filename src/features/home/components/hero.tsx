import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { H1 } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { site } from "@/config/site";

export function Hero() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl space-y-8">
          <p className="text-sm font-medium text-neutral-500">
            Software Engineer
          </p>

          <H1>
            Building developer tools, AI applications, and modern web products.
          </H1>

          <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            I'm {site.owner}. I enjoy building software that's fast,
            maintainable, and genuinely useful.
          </p>

          <div className="flex gap-4">
            <Link href={site.links.github}>
              <Button>GitHub</Button>
            </Link>

            <Link
              href={`mailto:${site.email}`}
              className="inline-flex items-center text-sm font-medium hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

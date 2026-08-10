import Link from "next/link";

import {
  Button,
  Cluster,
  Container,
  Eyebrow,
  Heading,
  Section,
  Stack,
  Text,
} from "@/design-system";

interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  return (
    <Section className="relative overflow-hidden pt-20 sm:pt-28 lg:pt-36">
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          -z-10
          h-[32rem]
          bg-[radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--accent)_10%,transparent),transparent_65%)]
        "
      />

      <Container>
        <Stack
          gap="xl"
          className="max-w-5xl"
        >
          <Eyebrow>{content.eyebrow}</Eyebrow>

          <Heading
            as="h1"
            className="
              max-w-5xl
              text-balance
              text-5xl
              font-semibold
              tracking-[-0.04em]
              sm:text-6xl
              lg:text-7xl
              xl:text-8xl
            "
          >
            {content.title}
          </Heading>

          <Text
            size="lead"
            className="max-w-3xl text-balance leading-relaxed text-fg-secondary"
          >
            {content.subtitle}
          </Text>

          <Text
            size="lg"
            muted
            className="max-w-2xl leading-8"
          >
            {content.description}
          </Text>

          <Cluster
            gap="md"
            className="pt-2"
          >
            <Link href={content.primaryCta.href}>
              <Button>
                {content.primaryCta.label}
              </Button>
            </Link>

            <Link
              href={content.secondaryCta.href}
              className="
                inline-flex
                h-10
                items-center
                px-2
                text-sm
                font-medium
                text-fg-secondary
                transition-colors
                duration-200
                hover:text-fg
              "
            >
              {content.secondaryCta.label}
              <span
                aria-hidden="true"
                className="ml-2"
              >
                →
              </span>
            </Link>
          </Cluster>
        </Stack>
      </Container>
    </Section>
  );
}

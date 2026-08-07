import Link from "next/link";

import { ThemedLion } from "@/brand";
import {
  Button,
  Cluster,
  Container,
  Eyebrow,
  Grid,
  Heading,
  Section,
  Stack,
  Text,
  TextLink,
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

export function Hero({
  content,
}: HeroProps) {
  return (
    <Section>
      <ThemedLion />

      <Container className="relative z-10">
        <Grid
          gap="lg"
          className="items-center lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-[1.05fr_0.95fr]"
        >
          <Stack
            gap="xl"
            className="max-w-3xl"
          >
            <Eyebrow>
              {content.eyebrow}
            </Eyebrow>

            <Stack gap="md">
              <Heading as="h1">
                {content.title}
              </Heading>

              <Text
                size="lead"
                muted
                className="max-w-2xl leading-relaxed"
              >
                {content.subtitle}
              </Text>
            </Stack>

            <Text
              size="lg"
              muted
              className="max-w-3xl leading-8"
            >
              {content.description}
            </Text>

            <Cluster
              gap="lg"
              className="pt-2"
            >
              <Link href={content.primaryCta.href}>
                <Button>
                  {content.primaryCta.label}
                </Button>
              </Link>

              <TextLink href={content.secondaryCta.href}>
                {content.secondaryCta.label} →
              </TextLink>
            </Cluster>
          </Stack>

          <div className="relative hidden min-h-[28rem] lg:block" />
        </Grid>
      </Container>
    </Section>
  );
}

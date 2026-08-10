import Link from "next/link";

import {
  Button,
  Cluster,
  Container,
  Heading,
  Measure,
  Section,
  Stack,
  Surface,
  Text,
} from "@/design-system";

interface ContactCTAContent {
  title: string;
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

interface ContactCTAProps {
  content: ContactCTAContent;
}

export function ContactCTA({
  content,
}: ContactCTAProps) {
  return (
    <Section>
      <Container>
        <Surface className="overflow-hidden">
          <Measure>
            <Stack
              gap="lg"
              className="items-center px-6 py-16 text-center sm:px-10 sm:py-20"
            >
              <Heading
                as="h2"
                className="text-balance"
              >
                {content.title}
              </Heading>

              <Text
                size="lg"
                muted
                className="max-w-2xl leading-relaxed"
              >
                {content.description}
              </Text>

              <Cluster
                gap="md"
                className="justify-center pt-2"
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
                </Link>
              </Cluster>
            </Stack>
          </Measure>
        </Surface>
      </Container>
    </Section>
  );
}

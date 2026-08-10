import { BrandLogo } from "@/brand";
import { site } from "@/config/site";
import {
  Container,
  Stack,
  Text,
} from "@/design-system";

import { FooterSection } from "./footer-section";

interface FooterLink {
  label: string;
  href?: string;
}

interface FooterContent {
  navigation: readonly FooterLink[];
  resources: readonly FooterLink[];
  developer: readonly FooterLink[];
  contact: readonly FooterLink[];

  labels: {
    navigation: string;
    resources: string;
    developer: string;
    contact: string;
    description: string;
    tagline: string;
    copyright: string;
    builtWith: string;
  };
}

interface FooterProps {
  content: FooterContent;
}

export function Footer({ content }: FooterProps) {
  const year = new Date().getFullYear();

  const copyright = content.labels.copyright
    .replace("{year}", String(year))
    .replace("{owner}", site.name);

  return (
    <footer>
      <Container>
        <div className="grid gap-10 py-12 lg:grid-cols-5 lg:gap-8">
          <Stack
            gap="md"
            className="lg:col-span-2"
          >
            <BrandLogo />

            <Text
              size="sm"
              muted
              className="max-w-sm leading-6"
            >
              {content.labels.description}
            </Text>

            <Text
              size="xs"
              className="font-medium uppercase tracking-[0.18em] text-accent"
            >
              {content.labels.tagline}
            </Text>
          </Stack>

          <FooterSection
            title={content.labels.navigation}
            items={content.navigation}
          />

          <FooterSection
            title={content.labels.resources}
            items={content.resources}
          />

          <FooterSection
            title={content.labels.developer}
            items={content.developer}
            showIcons
          />

          <FooterSection
            title={content.labels.contact}
            items={content.contact}
            showIcons
          />
        </div>

        <div className="flex flex-col gap-2 border-t border-border py-5 sm:flex-row sm:items-center sm:justify-between">
          <Text size="xs" muted>
            {copyright}
          </Text>

          <Text size="xs" muted>
            {content.labels.builtWith}
          </Text>
        </div>
      </Container>
    </footer>
  );
}

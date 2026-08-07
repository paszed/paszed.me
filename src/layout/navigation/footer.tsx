import { BrandLogo } from "@/brand";
import { site } from "@/config/site";
import {
  Container,
  Stack,
  Text,
} from "@/design-system";

import { FooterSection } from "./footer-section";

interface FooterContent {
  navigation: readonly {
    label: string;
    href: string;
  }[];

  resources: readonly {
    label: string;
    href: string;
  }[];

  developer: readonly {
    label: string;
    href: string;
  }[];

  contact: readonly {
    label: string;
    href: string;
  }[];
}

interface FooterProps {
  content: FooterContent;
}

export function Footer({
  content,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border sm:mt-24">
      <Container>
        <div
          className="
            grid
            gap-10
            py-12
            sm:grid-cols-2
            lg:grid-cols-[1.5fr_repeat(4,1fr)]
            lg:gap-8
            lg:py-16
          "
        >
          <Stack gap="sm">
            <BrandLogo />

            <Text
              size="xs"
              muted
              className="max-w-xs leading-5"
            >
              Building developer tools, AI applications, and modern web products.
            </Text>

            <Text
              size="xs"
              className="font-medium uppercase tracking-[0.16em] text-accent"
            >
              Build. Learn. Ship.
            </Text>
          </Stack>

          <FooterSection
            title="Navigation"
            items={content.navigation}
          />

          <FooterSection
            title="Resources"
            items={content.resources}
          />

          <FooterSection
            title="Developer"
            items={content.developer}
            showIcons
          />

          <FooterSection
            title="Contact"
            items={content.contact}
            showIcons
          />
        </div>

        <div
          className="
            flex
            flex-col
            gap-2
            border-t
            border-border
            py-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <Text
            size="xs"
            muted
          >
            © {year} {site.owner}. All rights reserved.
          </Text>

          <Text
            size="xs"
            muted
          >
            Built with Next.js, TypeScript & Tailwind CSS.
          </Text>
        </div>
      </Container>
    </footer>
  );
}

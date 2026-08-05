import { BrandLogo } from "@/brand";
import { site } from "@/config/site";
import { footer } from "@/content/footer";
import {
  Container,
  Stack,
  Text,
} from "@/design-system";

import { FooterSection } from "./footer-section";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border sm:mt-20">
      <Container>
        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(4,1fr)] lg:gap-6 lg:py-12">
          <Stack gap="sm">
            <BrandLogo />

            <Text
              size="xs"
              muted
              className="max-w-xs leading-5"
            >
              Building developer tools, AI applications, and modern web
              products.
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
            items={footer.navigation}
          />

          <FooterSection
            title="Resources"
            items={footer.resources}
          />

          <FooterSection
            title="Developer"
            items={footer.developer}
            showIcons
          />

          <FooterSection
            title="Contact"
            items={footer.contact}
            showIcons
          />
        </div>

        <div className="flex flex-col gap-2 border-t border-border py-4 sm:flex-row sm:items-center sm:justify-between">
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

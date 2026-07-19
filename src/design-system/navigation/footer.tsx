import { BrandLogo } from "@/brand/components/logo";
import { footer } from "@/content/footer";
import { site } from "@/config/site";

import { Container } from "../layout";
import { FooterSection } from "./footer-section";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <BrandLogo />

            <p className="max-w-sm leading-7 text-fg-secondary">
              Building developer tools, AI applications, and modern web
              products.
            </p>

            <p className="text-sm font-medium text-accent">
              Build. Learn. Ship.
            </p>
          </div>

          <FooterSection
            title="Navigation"
            items={footer.navigation}
          />

          <FooterSection
            title="Developer"
            items={footer.developer}
            showIcons
          />

          <FooterSection
            title="Social"
            items={footer.social}
            showIcons
          />

          <FooterSection
            title="Contact"
            items={footer.contact}
            showIcons
          />
        </div>

        <div className="flex flex-col gap-2 border-t border-border py-6 text-sm text-fg-secondary md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.owner}. All rights reserved.
          </p>

          <p>Built with Next.js, TypeScript & Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}

import {
  Inter,
  JetBrains_Mono,
  Source_Serif_4,
} from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

import {
  Footer,
  Navbar,
} from "@/design-system";
import { GlobalSearch } from "@/features/search/layout/global-search";
import { JsonLd } from "@/lib/seo/components/json-ld";
import { metadata } from "@/config/metadata";
import {
  createOrganizationSchema,
  createPersonSchema,
  createWebsiteSchema,
} from "@/lib/seo";
import { Providers } from "@/providers";

export { metadata };

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <JsonLd data={createWebsiteSchema()} />
        <JsonLd data={createOrganizationSchema()} />
        <JsonLd data={createPersonSchema()} />

        <Providers>
          <Navbar />

          <GlobalSearch />

          <main>{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}

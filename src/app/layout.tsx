import {
  Inter,
  JetBrains_Mono,
  Source_Serif_4,
} from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { GlobalSearch } from "@/components/layout/global-search";
import { Navbar } from "@/components/layout/navbar";
import { JsonLd } from "@/components/seo/json-ld";
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

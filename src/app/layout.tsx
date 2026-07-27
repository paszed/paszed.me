import {
  Inter,
  JetBrains_Mono,
  Source_Serif_4,
} from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

import { metadata } from "@/config/metadata";
import { GlobalSearch } from "@/features/search";
import { Footer, Navbar } from "@/layout";
import {
  JsonLd,
  createOrganizationSchema,
  createPersonSchema,
  createWebsiteSchema,
} from "@/lib/seo";
import { Providers } from "@/providers";

export { metadata };

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
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
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <GlobalSearch />

            <main className="flex-1">{children}</main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

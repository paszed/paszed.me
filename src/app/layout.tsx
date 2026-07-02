import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { metadata } from "@/config/metadata";
import { Providers } from "@/providers";

export { metadata };

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import type { ReactNode } from "react";

import { getDictionary } from "@/i18n/get-dictionary";
import { locales } from "@/i18n/config";
import { isLocale } from "@/i18n/routing";
import { Footer, Navbar } from "@/layout";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return null;
  }

  const content = getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} />

      <main className="flex-1">
        {children}
      </main>

      <Footer content={content.footer} />
    </>
  );
}

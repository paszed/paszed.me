"use client";

import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/routing";
import { usePathname } from "next/navigation";

import { ReadingProgressBar } from "@/design-system";

import { useReadingProgress } from "../../hooks";

export function ReadingProgress() {
  const progress = useReadingProgress();

  const pathname = usePathname();

  const locale = getLocale(
    pathname.split("/")[1],
  );

  const content = getDictionary(locale);

  return (
    <ReadingProgressBar
      value={progress}
      aria-label={
        content.journal.readingProgress
      }
      className="
        fixed
        inset-x-0
        top-0
        z-50
      "
    />
  );
}

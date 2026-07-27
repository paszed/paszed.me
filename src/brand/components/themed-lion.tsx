"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

import { useMounted } from "@/design-system";

export function ThemedLion() {
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-0 overflow-hidden select-none"
    >
      <Image
        src={
          isDark
            ? "/images/lion/lion-night-orange.png"
            : "/images/lion/lion-day-champagne.png"
        }
        alt=""
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 40vw"
        className={
          isDark
            ? "object-contain object-center opacity-30 transition-opacity duration-500"
            : "translate-y-8 object-contain object-center opacity-10 transition-opacity duration-500 lg:translate-y-12"
        }
      />
    </div>
  );
}

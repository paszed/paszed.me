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
      className={
        isDark
          ? "absolute inset-0"
          : "absolute inset-0 translate-y-8 lg:translate-y-12"
      }
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
        aria-hidden
        sizes="(max-width: 1024px) 100vw, 40vw"
        className={
          isDark
            ? "pointer-events-none select-none object-contain object-center opacity-30 transition-opacity duration-500"
            : "pointer-events-none select-none object-contain object-center opacity-10 transition-opacity duration-500"
        }
      />
    </div>
  );
}

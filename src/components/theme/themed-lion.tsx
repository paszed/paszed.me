"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

import { useMounted } from "@/hooks/use-mounted";

export function ThemedLion() {
  const mounted = useMounted();

  const { resolvedTheme } = useTheme();

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  const src = isDark
    ? "/images/lion/lion-night-orange.png"
    : "/images/lion/lion-day-champagne.png";

  return (
    <Image
      src={src}
      alt=""
      fill
      priority
      aria-hidden
      sizes="(max-width: 1024px) 100vw, 40vw"
      className="pointer-events-none select-none object-contain object-center opacity-30 transition-opacity duration-500"
    />
  );
}

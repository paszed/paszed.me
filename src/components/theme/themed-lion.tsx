"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemedLion() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const src =
    resolvedTheme === "dark"
      ? "/images/lion/lion-night-orange.png"
      : "/images/lion/lion-day-champagne.png";

  return (
    <Image
      src={src}
      alt=""
      fill
      priority
      aria-hidden
      className="pointer-events-none select-none object-contain object-center opacity-20 transition-opacity duration-500"
    />
  );
}

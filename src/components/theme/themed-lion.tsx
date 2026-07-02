"use client";

import Image from "next/image";

export function ThemedLion() {
  return (
    <>
      <Image
        src="/images/lion/lion-day-champagne.png"
        alt=""
        fill
        priority
        aria-hidden
        sizes="100vw"
        className="pointer-events-none select-none object-contain object-center opacity-10 transition-opacity duration-500 dark:hidden"
      />

      <Image
        src="/images/lion/lion-night-orange.png"
        alt=""
        fill
        priority
        aria-hidden
        sizes="100vw"
        className="pointer-events-none hidden select-none object-contain object-center opacity-10 transition-opacity duration-500 dark:block"
      />
    </>
  );
}

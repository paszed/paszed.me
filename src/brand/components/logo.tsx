import Link from "next/link";

import { site } from "@/config/site";

export function BrandLogo() {
  return (

   <Link
  href="/"
  aria-label="Go to the homepage"
  className="group inline-flex items-center font-mono text-lg font-semibold tracking-tight"
>

      <span className="transition-colors group-hover:text-orange-500">
        {site.brand}
      </span>

      <span className="ml-0.5 animate-pulse text-orange-500">_</span>
    </Link>
  );
}

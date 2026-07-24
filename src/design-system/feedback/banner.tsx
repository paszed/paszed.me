import type { HTMLAttributes } from "react";

import { Panel } from "../primitives";

export type BannerProps = HTMLAttributes<HTMLDivElement>;

export function Banner(
  props: BannerProps,
) {
  return <Panel {...props} />;
}

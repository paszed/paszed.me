import type { HTMLAttributes } from "react";

import { Cluster } from "../layout";

export type PaginationProps = HTMLAttributes<HTMLElement>;

export function Pagination(
  props: PaginationProps,
) {
  return (
    <nav
      aria-label="Pagination"
      {...props}
    >
      <Cluster gap="sm">
        {props.children}
      </Cluster>
    </nav>
  );
}

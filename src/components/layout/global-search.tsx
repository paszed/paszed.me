"use client";

import { SearchBox } from "@/features/search/components/search-box";
import { SearchDialog } from "@/features/search/components/search-dialog";
import { useCommandPalette } from "@/features/search/hooks/use-command-palette";

export function GlobalSearch() {
  const {
    open,
    setOpen,
  } = useCommandPalette();

  return (
    <SearchDialog
      open={open}
      onClose={() => setOpen(false)}
    >
      <SearchBox />
    </SearchDialog>
  );
}

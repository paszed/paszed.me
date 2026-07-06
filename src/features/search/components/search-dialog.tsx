"use client";

import type { ReactNode } from "react";

import { Panel } from "@/components/ui";

interface SearchDialogProps {
  open: boolean;
  onClose(): void;
  children: ReactNode;
}

export function SearchDialog({
  open,
  onClose,
  children,
}: SearchDialogProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="mx-auto mt-24 max-w-2xl px-6">
        <Panel
          className="p-6"
          onClick={(event) =>
            event.stopPropagation()
          }
        >
          {children}
        </Panel>
      </div>
    </div>
  );
}

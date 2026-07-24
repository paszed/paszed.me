"use client";

import * as React from "react";
import { Upload } from "lucide-react";
import { useDropzone } from "react-dropzone";

import { cn } from "@/lib/utils";

export interface FileUploadProps {
  accept?: Record<string, string[]>;
  multiple?: boolean;
  disabled?: boolean;
  className?: string;
  onFilesSelected?: (files: File[]) => void;
}

export function FileUpload({
  accept,
  multiple = false,
  disabled = false,
  className,
  onFilesSelected,
}: FileUploadProps) {
  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      onFilesSelected?.(acceptedFiles);
    },
    [onFilesSelected],
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    accept,
    multiple,
    disabled,
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "flex min-h-48 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 transition-colors",
        isDragActive
          ? "border-primary bg-primary/5"
          : "border-border hover:border-primary/50",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      <input {...getInputProps()} />

      <Upload className="mb-4 h-10 w-10 text-muted-foreground" />

      <p className="text-sm font-medium">
        Drag & drop files here
      </p>

      <p className="mt-1 text-sm text-muted-foreground">
        or click to browse
      </p>
    </div>
  );
}

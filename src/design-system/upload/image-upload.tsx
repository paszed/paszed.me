"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { FileUpload } from "./file-upload";

export interface ImageUploadProps {
  className?: string;
  multiple?: boolean;
  disabled?: boolean;
  onImagesSelected?: (files: File[]) => void;
}

export function ImageUpload({
  className,
  multiple = false,
  disabled = false,
  onImagesSelected,
}: ImageUploadProps) {
  const [previews, setPreviews] = React.useState<
    string[]
  >([]);

  React.useEffect(() => {
    return () => {
      previews.forEach((preview) => {
        URL.revokeObjectURL(preview);
      });
    };
  }, [previews]);

  return (
    <div className={cn("space-y-4", className)}>
      <FileUpload
        accept={{
          "image/*": [],
        }}
        multiple={multiple}
        disabled={disabled}
        onFilesSelected={(files) => {
          const urls = files.map((file) =>
            URL.createObjectURL(file),
          );

          setPreviews(urls);
          onImagesSelected?.(files);
        }}
      />

      {previews.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {previews.map((preview, index) => (
            // eslint-disable-next-line @next/next/no-img-element -- Blob URLs are temporary local upload previews.
            <img
              key={preview}
              src={preview}
              alt={`Preview ${index + 1}`}
              className="aspect-square rounded-lg border object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
}

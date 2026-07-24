import { ThemedLion } from "./themed-lion";

export function BrandBackground() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="relative h-[900px] w-[900px]">
            <ThemedLion />
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"
      />

      <div
        aria-hidden
        className="absolute right-0 top-0 h-[900px] w-[900px] rounded-full bg-accent/5 blur-3xl dark:bg-accent/10"
      />
    </>
  );
}

import { ThemedLion } from "./themed-lion";

export function BrandBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-y-0 right-0 flex items-center">
        <div className="relative h-[900px] w-[900px]">
          <ThemedLion />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />

      <div className="absolute right-0 top-0 h-[900px] w-[900px] rounded-full bg-accent/5 blur-3xl dark:bg-accent/10" />
    </div>
  );
}

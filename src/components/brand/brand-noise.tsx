export function BrandNoise() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.015]
        mix-blend-overlay
      "
      style={{
        backgroundImage: "url('/images/noise.png')",
      }}
    />
  );
}

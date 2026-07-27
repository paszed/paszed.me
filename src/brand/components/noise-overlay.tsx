export function BrandNoise() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        select-none
        opacity-[0.015]
        mix-blend-overlay
      "
      style={{
        backgroundImage: "url('/images/noise.png')",
      }}
    />
  );
}

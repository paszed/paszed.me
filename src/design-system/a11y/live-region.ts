export type LiveRegionPoliteness = "polite" | "assertive";

let liveRegion: HTMLElement | null = null;

function getLiveRegion(
  politeness: LiveRegionPoliteness = "polite",
): HTMLElement {
  if (liveRegion) {
    liveRegion.setAttribute("aria-live", politeness);
    return liveRegion;
  }

  liveRegion = document.createElement("div");

  liveRegion.setAttribute("role", "status");
  liveRegion.setAttribute("aria-live", politeness);
  liveRegion.setAttribute("aria-atomic", "true");

  Object.assign(liveRegion.style, {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    whiteSpace: "nowrap",
    border: "0",
  });

  document.body.appendChild(liveRegion);

  return liveRegion;
}

/**
 * Announces a message to assistive technologies.
 */
export function announce(
  message: string,
  politeness: LiveRegionPoliteness = "polite",
) {
  if (typeof document === "undefined") {
    return;
  }

  const region = getLiveRegion(politeness);

  // Clear first so identical consecutive messages are announced.
  region.textContent = "";

  requestAnimationFrame(() => {
    region.textContent = message;
  });
}

/**
 * Removes the live region from the DOM.
 */
export function destroyLiveRegion() {
  liveRegion?.remove();
  liveRegion = null;
}

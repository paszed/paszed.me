import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { JsonLd } from "./json-ld";

describe("JsonLd", () => {
  it("renders structured data as JSON-LD", () => {
    const data = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Edvard Pasz",
    };

    const { container } = render(
      <JsonLd data={data} />,
    );

    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );

    expect(script).toBeInTheDocument();
    expect(script?.textContent).toBe(
      JSON.stringify(data),
    );
  });

  it("serializes nested structured data", () => {
    const data = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      author: {
        "@type": "Person",
        name: "Edvard Pasz",
      },
    };

    const { container } = render(
      <JsonLd data={data} />,
    );

    expect(
      container.querySelector(
        'script[type="application/ld+json"]',
      )?.textContent,
    ).toBe(JSON.stringify(data));
  });
});

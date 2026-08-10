export interface ServiceContent {
  slug: string;
  title: string;
  description: string;
  overview: string;
  capabilities: readonly string[];
}

export const services: readonly ServiceContent[] = [
  {
    slug: "websites",
    title: "Business Websites",
    description:
      "Fast, modern websites that communicate your value clearly and help customers discover and trust your business.",
    overview:
      "We build high-performance websites around your business, your audience, and the actions you want visitors to take.",
    capabilities: [
      "Responsive design",
      "Performance-focused implementation",
      "Technical SEO foundations",
      "Content and information architecture",
    ],
  },
  {
    slug: "digital-solutions",
    title: "Web Applications",
    description:
      "Custom platforms, dashboards, and digital tools built around the way your business actually works.",
    overview:
      "We turn operational requirements into reliable web applications that fit your workflows instead of forcing your business into generic software.",
    capabilities: [
      "Custom dashboards",
      "Internal tools",
      "Customer-facing applications",
      "API and system integrations",
    ],
  },
  {
    slug: "automation",
    title: "Automation & AI",
    description:
      "Practical automation systems that reduce repetitive work, connect existing tools, and improve efficiency.",
    overview:
      "We identify repetitive or fragmented workflows and turn them into reliable automated systems.",
    capabilities: [
      "Workflow automation",
      "API integrations",
      "AI-assisted workflows",
      "Data processing",
    ],
  },
  {
    slug: "seo",
    title: "SEO & Visibility",
    description:
      "Technical SEO and search-focused improvements that make your business easier to discover and understand.",
    overview:
      "We build the technical and structural foundations that help search engines understand your website and its content.",
    capabilities: [
      "Technical SEO",
      "Structured data",
      "Performance optimization",
      "Search-friendly architecture",
    ],
  },
];

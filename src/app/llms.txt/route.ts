import { site } from "@/config/site";

export function GET() {
  const content = `# ${site.name}

${site.description}

## Pages

- Home: ${site.url}/en
- Services: ${site.url}/en/services
- Work: ${site.url}/en/work
- About: ${site.url}/en/about
- Contact: ${site.url}/en/contact

## Languages

- English: ${site.url}/en
- German: ${site.url}/de
- Hungarian: ${site.url}/hu
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

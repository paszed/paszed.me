import { site } from "@/config/site";

export async function GET() {
  const body = `# ${site.name}

Website: ${site.url}
Owner: ${site.owner}

Description:
${site.description}

Primary content:
/about
/projects
/journal
/uses
/now
/links

Sitemap:
${site.url}/sitemap.xml

Robots:
${site.url}/robots.txt
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

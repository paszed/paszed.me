import { site } from "@/config/site";

export async function GET() {
  const year = new Date().getFullYear();

  const body = `# ${site.name}

The personal website of ${site.owner}.

${site.description}

## Primary Pages

- [Home](${site.url}/)
- [About](${site.url}/about)
- [Projects](${site.url}/projects)
- [Journal](${site.url}/journal)
- [Uses](${site.url}/uses)
- [Now](${site.url}/now)
- [Links](${site.url}/links)
- [Search](${site.url}/search)

## Feeds

- [RSS Feed](${site.url}/rss.xml)
- [Sitemap](${site.url}/sitemap.xml)
- [Robots](${site.url}/robots.txt)

## Content

This website contains:

- Technical articles
- Software engineering notes
- Software architecture discussions
- AI engineering experiments
- Open-source projects
- Developer tools
- Personal software projects
- Current work and learning updates

## Topics

- Software Engineering
- Software Architecture
- Artificial Intelligence
- AI Engineering
- TypeScript
- Go
- Next.js
- React
- Tailwind CSS
- Developer Experience
- Developer Tools
- Linux

## Author

**${site.owner}**

- Website: ${site.url}/
- Email: <mailto:${site.email}>
- GitHub: <https://github.com/paszed>
- LinkedIn: <https://www.linkedin.com/in/edvardpasz/>

## License

Copyright © ${year} ${site.owner}. All rights reserved.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "X-Robots-Tag": "noindex",
    },
  });
}

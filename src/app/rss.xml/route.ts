import { getPublishedArticles } from "@/lib/journal";
import { site } from "@/config/site";

export async function GET() {
  const articles = getPublishedArticles();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss
  version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
>
  <channel>
    <title>${site.title}</title>

    <link>${site.url}</link>

    <description>${site.description}</description>

    <language>${site.language}</language>

    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>

    <copyright>© ${new Date().getFullYear()} ${site.owner}</copyright>

    <managingEditor>${site.email} (${site.owner})</managingEditor>

    <atom:link
      href="${site.url}/rss.xml"
      rel="self"
      type="application/rss+xml"
    />

    ${articles
      .map(
        (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>

      <description><![CDATA[${article.description}]]></description>

      <link>${site.url}/journal/${article.slug}</link>

      <guid isPermaLink="true">
        ${site.url}/journal/${article.slug}
      </guid>

      ${
        article.publishedAt
          ? `<pubDate>${article.publishedAt.toUTCString()}</pubDate>`
          : ""
      }
    </item>`,
      )
      .join("")}

  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

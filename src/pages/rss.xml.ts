import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");

  const sorted = posts.sort(
    (a, b) =>
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const items = sorted
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>https://gametipsy.com/blog/${post.slug}</link>
      <guid>https://gametipsy.com/blog/${post.slug}</guid>
      <pubDate>${new Date(post.data.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.data.excerpt ?? ""}]]></description>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Gametipsy</title>
    <link>https://gametipsy.com</link>
    <description>Game aneh, tapi bikin nagih</description>
    <language>id</language>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};

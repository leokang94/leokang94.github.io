import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const site = context.site!.href.replace(/\/$/, '');
  const content = `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap-index.xml\n`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

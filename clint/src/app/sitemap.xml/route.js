const videos = Array.from({ length: 100 }, (_, i) => ({
  slug: `video-${i + 1}`,
  category: ['desi', 'bhabhi', 'indian', 'school'][i % 4],
}));

const categories = ['desi', 'bhabhi', 'indian', 'school'];

export async function GET() {
  const baseUrl = 'https://your-domain.com'; // change to your real domain

  const staticPages = [`${baseUrl}/`];

  const videoPages = videos.map(
    (video) => `${baseUrl}/video/${video.slug}`
  );

  const categoryPages = categories.map(
    (cat) => `${baseUrl}/category/${cat}`
  );

  const urls = [...staticPages, ...videoPages, ...categoryPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${url}</loc>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

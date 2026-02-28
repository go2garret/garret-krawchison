import { MetadataRoute } from 'next';

// `sitemap()` is a special export supported by the App Router in Next.js 13.4+.
// Next will automatically render the result at `/sitemap.xml` when the app is
// built or when running in development.  You can submit that URL to Google
// Search Console once the site is deployed.

export default function sitemap(): MetadataRoute.Sitemap {
  // it's a good idea to keep the base URL in an environment variable so the
  // same code works locally and on Vercel.  Set SITE_URL to something like
  // "https://my-portfolio.vercel.app" (or your custom domain) in your
  // Vercel dashboard/config.
  const baseUrl = process.env.SITE_URL || 'https://garret-krawchison.vercel.app';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    // add additional pages here if you create any (e.g. `/blog`, `/about`)
  ];
}

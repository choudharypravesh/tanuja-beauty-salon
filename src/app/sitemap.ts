import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Assuming the website's base URL will be this.
  // This should be updated if the actual domain is different.
  const baseUrl = 'https://www.tanussalondebeaute.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Add other pages here if the site structure expands
    // Example:
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: new Date().toISOString(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}

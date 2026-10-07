import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mwarabunuts.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/products`, lastModified: new Date() },
    { url: `${baseUrl}/gallery`, lastModified: new Date() },
    { url: `${baseUrl}/fob-prices`, lastModified: new Date() },
    { url: `${baseUrl}/retail`, lastModified: new Date() },
    { url: `${baseUrl}/wholesale`, lastModified: new Date() },
    { url: `${baseUrl}/export`, lastModified: new Date() },
  ];
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maplify.studio";
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/mentions-legales`, lastModified },
    { url: `${baseUrl}/confidentialite`, lastModified },
    { url: `${baseUrl}/cgu`, lastModified }
  ];
}

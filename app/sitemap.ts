import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maplify.studio";
  const lastModified = new Date();

  const locales = ["en", "es", "zh", "ar"];

  // Alternates partagés par toutes les pages de la landing (hreflang complets + x-default)
  const sharedAlternates = {
    languages: {
      "x-default": `${baseUrl}/`,
      fr: `${baseUrl}/`,
      en: `${baseUrl}/en`,
      es: `${baseUrl}/es`,
      "zh-CN": `${baseUrl}/zh`,
      ar: `${baseUrl}/ar`
    }
  };

  const landingPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: sharedAlternates
    },
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: sharedAlternates
    }))
  ];

  const legalPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/mentions-legales`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/confidentialite`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cgu`, lastModified, changeFrequency: "yearly", priority: 0.3 }
  ];

  return [...landingPages, ...legalPages];
}

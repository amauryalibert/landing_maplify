import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Explicitly allow OAI-SearchBot so the site can appear in ChatGPT search
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "*", allow: "/" }
    ],
    sitemap: "https://maplify.studio/sitemap.xml",
    host: "https://maplify.studio"
  };
}

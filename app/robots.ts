import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/proposals/",
    },
    sitemap: "https://evergreenseo.agency/sitemap.xml",
  };
}

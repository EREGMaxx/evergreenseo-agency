import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://evergreenseo.agency";
  const lastModified = new Date();

  const blogPosts = [
    "hvac-seo-guide",
    "roofing-contractor-seo",
    "plumbing-seo",
    "electrician-seo",
    "general-contractor-seo",
    "mortgage-broker-seo",
    "google-business-profile-guide",
    "local-seo-guide",
    "google-reviews-guide",
    "hvac-website-design",
    "local-link-building",
    "seo-timeline",
  ];

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

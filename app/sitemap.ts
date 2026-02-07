import { MetadataRoute } from "next";
import { companies, locations } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://videoproductionmy.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/companies`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Location pages
  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Company profile pages
  const companyPages: MetadataRoute.Sitemap = companies.map((company) => ({
    url: `${baseUrl}/companies/${company.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Guide pages
  const guideSlugs = [
    "video-production-pricing-malaysia",
    "corporate-video-production-guide",
    "how-to-choose-video-production-company",
    "top-video-production-companies-kl",
    "event-video-coverage-malaysia",
    "product-video-ecommerce",
    "corporate-video-production-kl",
    "event-videography-packages",
    "agm-live-streaming",
    "drone-videography-malaysia",
  ];

  const guidePages: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
    url: `${baseUrl}/guide/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Service + Location combo pages
  const serviceLocationSlugs = [
    "corporate-video-kl",
    "corporate-video-selangor",
    "event-video-kl",
    "drone-video-selangor",
    "product-video-kl",
  ];

  const serviceLocationPages: MetadataRoute.Sitemap = serviceLocationSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Industry pages
  const industrySlugs = [
    "property-video-production",
    "manufacturing-video-production",
    "healthcare-video-production",
    "fnb-restaurant-video",
    "education-video-production",
  ];

  const industryPages: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...locationPages, ...companyPages, ...guidePages, ...serviceLocationPages, ...industryPages];
}

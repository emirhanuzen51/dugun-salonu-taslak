import type { MetadataRoute } from "next";
import { venueConfig } from "@/lib/venue";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${venueConfig.site}/sitemap.xml`,
  };
}

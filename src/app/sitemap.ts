import type { MetadataRoute } from "next";
import { venueConfig } from "@/lib/venue";
import { salons } from "@/lib/salons";
import { services } from "@/lib/services";
import { eventConcepts } from "@/lib/concepts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = venueConfig.site;
  return [
    ...[
      "",
      "/organizasyon-konseptleri",
      "/salonlarimiz",
      "/hizmetler",
      "/menuler",
      "/galeri",
      "/hakkimizda",
      "/iletisim",
      "/kvkk",
      "/cerez-politikasi",
    ].map((path) => ({ url: `${base}${path}` })),
    ...eventConcepts.map((c) => ({ url: `${base}/organizasyon-konseptleri/${c.slug}` })),
    ...salons.map((s) => ({ url: `${base}/salonlarimiz/${s.slug}` })),
    ...services.map((svc) => ({ url: `${base}/hizmetler/${svc.slug}` })),
  ];
}

import type { MetadataRoute } from "next";
import { venueConfig } from "@/lib/venue";
import { salons } from "@/lib/salons";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = venueConfig.site;
  return [
    ...[
      "",
      "/salonlarimiz",
      "/hizmetler",
      "/menuler",
      "/fiyat-hesapla",
      "/galeri",
      "/hakkimizda",
      "/iletisim",
      "/kvkk",
      "/cerez-politikasi",
    ].map((path) => ({ url: `${base}${path}` })),
    ...salons.map((s) => ({ url: `${base}/salonlarimiz/${s.slug}` })),
    ...services.map((svc) => ({ url: `${base}/hizmetler/${svc.slug}` })),
  ];
}

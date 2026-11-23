import type { Metadata } from "next";
import { GallerySection } from "@/components/gallery";
import { venueConfig } from "@/lib/venue";
import { PageHero } from "@/components/motion";

export const metadata: Metadata = {
  title: `Fotoğraf & Video Galerisi | ${venueConfig.defaultName}`,
  description: "Balo salonu, kır bahçesi, masa süslemeleri ve unutulmaz anların yer aldığı yüksek çözünürlüklü düğün albümümüz.",
};

export default function GalleryPage() {
  return (
    <main className="bg-[#fcfbfa]">
      <PageHero
        badge="Özel Kareler"
        title="Unutulmaz Davetlerden İlham Veren Kareler"
        description="Işıkların dansı, çiçeklerin zarafeti, ilk dans büyüsü ve mutlu çiftlerimizin en özel anlarından derlenen sinematik fotoğraf albümümüz."
        image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85"
      />

      <div className="bg-[#fcfbfa]">
        <GallerySection />
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { venueConfig } from "@/lib/venue";
import { PageHero } from "@/components/motion";

export const metadata: Metadata = {
  title: `Çerez Politikası | ${venueConfig.defaultName}`,
  description: "Web sitemizde kullanılan çerezler ve gizlilik tercihleri hakkında bilgilendirme.",
};

export default function CookiePolicyPage() {
  return (
    <main className="bg-[#fcfbfa]">
      <PageHero
        badge="Yasal Bilgilendirme"
        title="Çerez (Cookie) Politikası"
        description="Web sitemizi ziyaret ettiğinizde deneyiminizi geliştirmek ve güvenliğinizi sağlamak amacıyla çerezlerden faydalanıyoruz."
      />

      <section className="py-20 bg-[#fcfbfa] text-neutral-700">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8 text-sm sm:text-base leading-relaxed font-normal">
          <div className="rounded-3xl border border-amber-900/10 bg-white p-8 shadow-xs space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-3">1. Çerez Nedir?</h2>
              <p className="text-neutral-600">
                Çerezler, bir internet sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla bilgisayarınızda veya mobil cihazınızda depolanan küçük metin dosyalarıdır. Çerezler web sitesinin düzgün çalışmasını, kullanıcı deneyiminin kişiselleştirilmesini ve ziyaretçi tercihlerinin hatırlanmasını sağlar.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-3">2. Kullanılan Çerez Türleri</h2>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                <li><strong>Zorunlu Çerezler:</strong> Sitenin temel fonksiyonlarının çalışması ve güvenlik için gereklidir.</li>
                <li><strong>İşlevsel Çerezler:</strong> Ziyaretçinin tema seçimi, dil veya hesaplama parametrelerini hatırlamasını sağlar.</li>
                <li><strong>Analitik Çerezler:</strong> Sitenin hangi sayfalarının daha çok ziyaret edildiğini anonim olarak analiz etmemize yardımcı olur.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-3">3. Çerezleri Nasıl Yönetebilirsiniz?</h2>
              <p className="text-neutral-600">
                Tarayıcınızın ayarlarından çerez kullanımını dilediğiniz zaman engelleyebilir, sınırlandırabilir veya önceden kaydedilmiş çerezleri temizleyebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

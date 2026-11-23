import type { Metadata } from "next";
import { venueConfig } from "@/lib/venue";
import { PageHero } from "@/components/motion";

export const metadata: Metadata = {
  title: `Çerez Politikası | ${venueConfig.defaultName}`,
  description: "Web sitemizde kullanılan çerezler ve gizlilik tercihleri hakkında bilgilendirme.",
};

export default function CookiePolicyPage() {
  return (
    <main>
      <PageHero
        badge="Yasal Bilgilendirme"
        title="Çerez (Cookie) Politikası"
        description="Web sitemizi ziyaret ettiğinizde deneyiminizi geliştirmek ve güvenliğinizi sağlamak amacıyla çerezlerden faydalanıyoruz."
      />

      <section className="py-20 bg-neutral-950 text-neutral-300">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8 text-sm sm:text-base leading-relaxed font-light">
          <div>
            <h2 className="font-serif text-2xl font-normal text-white mb-3">1. Çerez Nedir?</h2>
            <p>
              Çerezler, bir internet sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla bilgisayarınızda veya mobil cihazınızda depolanan küçük metin dosyalarıdır. Çerezler web sitesinin düzgün çalışmasını, kullanıcı deneyiminin kişiselleştirilmesini ve ziyaretçi tercihlerinin hatırlanmasını sağlar.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-normal text-white mb-3">2. Kullanılan Çerez Türleri</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Zorunlu Çerezler:</strong> Sitenin temel fonksiyonlarının çalışması ve güvenlik için gereklidir.</li>
              <li><strong>İşlevsel Çerezler:</strong> Ziyaretçinin tema seçimi, dil veya hesaplama parametrelerini hatırlamasını sağlar.</li>
              <li><strong>Analitik Çerezler:</strong> Sitenin hangi sayfalarının daha çok ziyaret edildiğini anonim olarak analiz etmemize yardımcı olur.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-normal text-white mb-3">3. Çerezleri Nasıl Yönetebilirsiniz?</h2>
            <p>
              Tarayıcınızın ayarlarından çerez kullanımını dilediğiniz zaman engelleyebilir, sınırlandırabilir veya önceden kaydedilmiş çerezleri temizleyebilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

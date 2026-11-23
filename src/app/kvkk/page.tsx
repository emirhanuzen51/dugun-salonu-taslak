import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { venueConfig } from "@/lib/venue";

export const metadata: Metadata = {
  title: `KVKK & Yasal Bilgilendirme | ${venueConfig.defaultName}`,
};

export default function KvkkPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:underline mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-amber-500/40 bg-amber-500/10 text-amber-400">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-serif text-3xl font-bold">KVKK & Taslak Bilgilendirmesi</h1>
            <p className="text-xs text-neutral-400">6698 Sayılı Kanun Uyarınca Aydınlatma Metni</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-neutral-900/60 p-8 sm:p-10 shadow-xl space-y-6 text-xs sm:text-sm text-neutral-300 leading-relaxed backdrop-blur-xl">
          <div className="rounded-2xl border border-amber-400/40 bg-amber-400/10 p-4 text-amber-300 text-xs">
            <strong>Önemli Bilgilendirme:</strong> Bu web sitesi, düğün ve balo salonları için profesyonel olarak hazırlanmış <strong>interaktif bir web tasarım taslağıdır (demo)</strong>. Sayfada yer alan tüm iletişim ve fiyat bilgileri temsilî gösterim amaçlıdır.
          </div>

          <h2 className="font-serif text-lg font-bold text-white">1. Veri Sorumlusu</h2>
          <p>
            {venueConfig.defaultName} olarak, ziyaretçilerimizin kişisel verilerinin güvenliğine en üst düzeyde önem veriyoruz. İletişim ve randevu formları aracılığıyla paylaştığınız veriler yalnızca salon ziyareti koordinasyonu amacıyla işlenir.
          </p>

          <h2 className="font-serif text-lg font-bold text-white">2. İşlenen Kişisel Veriler</h2>
          <p>
            Web sitemiz üzerinden salon turu talebinde bulunurken ilettiğiniz; Ad, Soyad, Telefon Numarası, Düşünülen Düğün Tarihi ve Davetli Sayısı bilgileri.
          </p>

          <h2 className="font-serif text-lg font-bold text-white">3. Verilerin Saklanması ve Güvenliği</h2>
          <p>
            Verileriniz üçüncü şahıslarla, reklam ajanslarıyla veya pazarlama şirketleriyle kesinlikle paylaşılmaz. Yalnızca davet organizasyonunuzun planlanması için yetkili danışmanlarımız tarafından kullanılır.
          </p>
        </div>
      </div>
    </main>
  );
}

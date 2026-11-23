"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Camera, Crown, Music, ShieldCheck, Sparkles, UtensilsCrossed } from "lucide-react";
import { Hero } from "./hero";
import { ConceptsSection } from "./concepts-section";
import { SalonsShowcase } from "./salons-showcase";
import { CalendarAvailability } from "./calendar-availability";
import { MenuTasting } from "./menu-tasting";
import { GallerySection } from "./gallery";
import { StoryReviews } from "./story-reviews";
import { services } from "@/lib/services";
import { useModals } from "./modal-context";
import { useIsletmeAdi } from "@/lib/use-isletme-adi";

export function HomePage() {
  const currentName = useIsletmeAdi();
  const { openAppointment } = useModals();

  return (
    <main>
      {/* 1. Grand Hero */}
      <Hero />

      {/* 2. Organizasyon Konseptleri (Düğün, Kına, Nişan, Gala, Sünnet) */}
      <ConceptsSection />

      {/* 3. 3 Salon Tanıtım & Karşılaştırma */}
      <SalonsShowcase />

      {/* 4. 2026 Sezonu Canlı Tarih & Doluluk Takvimi */}
      <CalendarAvailability onSelectDate={() => openAppointment()} />

      {/* 5. Ayrıcalıklı Düğün Hizmetleri Grid */}
      <section className="py-24 sm:py-32 bg-neutral-950 border-t border-white/10 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-neutral-900/80 px-4 py-1.5 text-xs font-semibold text-amber-300 uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Kusursuz Ayrıcalıklar</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Düğününüze Değer Katan <span className="italic bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Hizmetlerimiz</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Sabah kuaför hazırlığından gece sonu konvoy uğurlamasına kadar her detay alanında uzman profesyonellerle planlanır.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-neutral-900/60 p-7 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(217,179,94,0.15)]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10 text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                    {svc.id.includes("gastronomi") && <UtensilsCrossed className="h-6 w-6" />}
                    {svc.id.includes("orkestra") && <Music className="h-6 w-6" />}
                    {svc.id.includes("fotograf") && <Camera className="h-6 w-6" />}
                    {svc.id.includes("cicek") && <Sparkles className="h-6 w-6" />}
                    {svc.id.includes("suiti") && <Crown className="h-6 w-6" />}
                    {svc.id.includes("vale") && <ShieldCheck className="h-6 w-6" />}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                    {svc.category}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-white mt-1 group-hover:text-amber-300 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                    {svc.lead}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <Link
                    href={`/hizmetler/${svc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-white transition-colors"
                  >
                    <span>Detayları ve Süreci İncele</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-neutral-900 px-6 py-2.5 text-xs font-semibold text-amber-300 hover:border-amber-400 hover:text-white transition-all shadow-md"
            >
              <span>Tüm Hizmet Paketlerimizi Görüntüle</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Menü ve Gastronomi Tadımı */}
      <MenuTasting />

      {/* 7. Lüks Bento Galeri */}
      <GallerySection />

      {/* 8. Yorumlar & SSS */}
      <StoryReviews />

      {/* 9. VIP Kapanış Çağrısı (CTA) */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-neutral-950 via-neutral-900 to-black border-t border-amber-500/20 relative overflow-hidden text-center">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-neutral-900 px-4 py-1.5 text-xs font-bold text-amber-300 uppercase tracking-widest">
            <Crown className="h-3.5 w-3.5" />
            Hayalinizdeki Düğün İçin İlk Adımı Atın
          </span>
          <h2 className="mt-6 font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
            Gelin, Düğün Masalınızı <br />
            <span className="italic bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
              Kahve Eşliğinde Birlikte Planlayalım
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            {currentName} davet danışmanlarımız salonları gezdirmek, menü alternatiflerini sunmak ve 2026 müsaitlik durumunu kontrol etmek için sizleri bekliyor.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openAppointment()}
              className="rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-8 py-4 text-xs sm:text-sm font-bold text-neutral-950 shadow-[0_0_25px_rgba(217,179,94,0.4)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Ücretsiz Salon Turu & Tadım Randevusu</span>
            </button>
            <Link
              href="/iletisim"
              className="rounded-full border border-white/20 bg-neutral-900/80 px-8 py-4 text-xs sm:text-sm font-semibold text-white hover:border-amber-400 transition-colors"
            >
              Adres & Ulaşım Krokisi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

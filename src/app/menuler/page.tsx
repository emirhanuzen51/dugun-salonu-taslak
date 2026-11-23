import type { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles, UtensilsCrossed } from "lucide-react";
import { menuPackages } from "@/lib/menus";
import { venueConfig } from "@/lib/venue";
import { PageHero, SectionBadge } from "@/components/motion";

export const metadata: Metadata = {
  title: `Ziyafet & Gastronomi Menüleri | ${venueConfig.defaultName}`,
  description: "Silver Gala, Imperial Gold VIP ve Botanica Kokteyl menüleri. Ödüllü master şeflerimiz tarafından taze hazırlanan ziyafet tabakları ve menü tadım detayları.",
};

export default function MenusPage() {
  return (
    <main>
      <PageHero
        badge="Gurme Lezzetler"
        title="Usta Şeflerin İmzasıyla Ziyafet Şöleni"
        description="Yerel Türk misafirperverliği ve dünya mutfağının seçkin teknikleriyle harmanlanan, porselen sunumlarda sıcak servis edilen düğün menülerimiz."
        image="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=85"
      />

      <section className="py-24 sm:py-32 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              4 Kişilik Ücretsiz Tadım Garantisi
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white mt-2">
              Özel Olarak Formüle Edilmiş 3 Menü Konsepti
            </h2>
            <p className="mt-3 text-sm text-neutral-400">
              Çölyak, alerjen, vegan, vejetaryen ve çocuk menüsü alternatifleri her paketimizde ücretsiz olarak sağlanmaktadır.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 items-stretch">
            {menuPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-xl relative"
              >
                {pkg.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 px-4 py-1 text-[11px] font-bold text-neutral-950 uppercase tracking-wider shadow-lg">
                    {pkg.badge}
                  </span>
                )}

                <div>
                  <div className="border-b border-white/10 pb-5 text-center">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                      {pkg.tagline}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {pkg.name}
                    </h3>
                    <div className="font-serif text-3xl font-bold text-amber-300 mt-3">
                      {pkg.pricePerPerson.toLocaleString("tr-TR")} ₺
                      <span className="text-xs font-sans text-neutral-400 font-normal block">
                        kişi başı (KDV Dahil)
                      </span>
                    </div>
                  </div>

                  {/* Courses */}
                  <div className="mt-6 space-y-5">
                    {pkg.courses.map((course, idx) => (
                      <div key={idx} className="rounded-2xl border border-white/5 bg-neutral-900/80 p-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-2">
                          {course.title}
                        </span>
                        <ul className="space-y-1.5 text-xs text-neutral-300">
                          {course.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="rounded-2xl border border-white/5 bg-neutral-900/80 p-4 text-xs text-neutral-300 space-y-2">
                      <div>
                        <strong className="text-amber-400 block">İçecek İkramı:</strong>
                        <span>{pkg.beverage}</span>
                      </div>
                      <div>
                        <strong className="text-amber-400 block">Düğün Pastası:</strong>
                        <span>{pkg.cake}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10">
                  <Link
                    href={`/fiyat-hesapla`}
                    className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 py-3 text-center text-xs font-bold text-neutral-950 shadow-md hover:brightness-110 active:scale-98 transition-all block"
                  >
                    Bu Menüyle Fiyat Hesapla
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

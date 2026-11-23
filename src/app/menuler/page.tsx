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
    <main className="bg-[#fcfbfa]">
      <PageHero
        badge="Gurme Lezzetler"
        title="Usta Şeflerin İmzasıyla Ziyafet Şöleni"
        description="Yerel Türk misafirperverliği ve dünya mutfağının seçkin teknikleriyle harmanlanan, porselen sunumlarda sıcak servis edilen düğün menülerimiz."
        image="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=85"
      />

      <section className="py-24 sm:py-32 bg-[#fcfbfa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              4 Kişilik Ücretsiz Tadım Garantisi
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mt-2">
              Özel Olarak Formüle Edilmiş 3 Menü Konsepti
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              Çölyak, alerjen, vegan, vejetaryen ve çocuk menüsü alternatifleri her paketimizde ücretsiz olarak sağlanmaktadır.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 items-stretch">
            {menuPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex flex-col justify-between rounded-3xl border border-amber-900/10 bg-white p-7 sm:p-8 shadow-[0_4px_30px_rgba(180,140,50,0.06)] relative"
              >
                {pkg.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 px-4 py-1 text-[11px] font-bold text-neutral-950 uppercase tracking-wider shadow-sm">
                    {pkg.badge}
                  </span>
                )}

                <div>
                  <div className="border-b border-amber-900/10 pb-5 text-center">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 block mb-1">
                      {pkg.tagline}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-neutral-900">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-2">
                      {pkg.recommendedFor}
                    </p>
                  </div>

                  {/* Courses */}
                  <div className="mt-6 space-y-5">
                    {pkg.courses.map((course, idx) => (
                      <div key={idx} className="rounded-2xl border border-amber-900/10 bg-amber-50/40 p-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-2">
                          {course.title}
                        </span>
                        <ul className="space-y-1.5 text-xs text-neutral-700">
                          {course.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="rounded-2xl border border-amber-900/10 bg-amber-50/40 p-4 text-xs text-neutral-700 space-y-2">
                      <div>
                        <strong className="text-amber-800 block">İçecek İkramı:</strong>
                        <span>{pkg.beverage}</span>
                      </div>
                      <div>
                        <strong className="text-amber-800 block">Düğün Pastası:</strong>
                        <span>{pkg.cake}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-amber-900/10">
                  <Link
                    href="/organizasyon-konseptleri"
                    className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 py-3 text-center text-xs font-bold text-neutral-950 shadow-xs hover:brightness-105 active:scale-98 transition-all block"
                  >
                    Bu Menüye Uygun Konseptleri Gör
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

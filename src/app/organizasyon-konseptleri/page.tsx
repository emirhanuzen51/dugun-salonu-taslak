import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Crown, Sparkles, Users } from "lucide-react";
import { eventConcepts } from "@/lib/concepts";
import { venueConfig } from "@/lib/venue";
import { PageHero, SectionBadge } from "@/components/motion";

export const metadata: Metadata = {
  title: `Organizasyon Konseptleri | ${venueConfig.defaultName}`,
  description: "Saray Balo Düğünü, Botanik Kır Düğünü, Boğaz Teras After Party, Geleneksel Saray Kınası, Zarif Nişan ve Kurumsal Galalar. Her davet için özel senaryolaştırılmış konseptler.",
};

export default function ConceptsListPage() {
  return (
    <main className="bg-[#fcfbfa]">
      <PageHero
        badge="Özel Senaryolar & Konseptler"
        title="Hayalinizdeki Davet İçin Kusursuz Konseptler"
        description="Düğünden kına gecesine, nişan töreninden kurumsal galalara kadar; masa dekorasyonundan sahne akışına, menü eşleşmelerinden karşılama protokolüne kadar her ayrıntı sizin için tasarlandı."
        image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85"
      />

      <section className="py-24 sm:py-32 bg-[#fcfbfa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          {eventConcepts.map((concept, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={concept.id}
                className={`grid lg:grid-cols-12 gap-8 sm:gap-10 items-center rounded-3xl border border-amber-900/10 bg-white p-6 sm:p-10 shadow-[0_10px_40px_rgba(180,140,50,0.07)] ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Visual with Mobile Responsive Aspect Ratio */}
                <div
                  className={`lg:col-span-7 relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden group bg-neutral-100 ${
                    isReversed ? "lg:col-start-6" : ""
                  }`}
                >
                  <Image
                    src={concept.coverImage}
                    alt={concept.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/95 backdrop-blur-md border border-amber-900/10 px-3.5 py-1 text-xs font-bold text-amber-800 shadow-xs">
                      {concept.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-amber-400 text-neutral-950 px-3 py-1 text-xs font-bold shadow-xs">
                      {concept.capacity}
                    </span>
                    <span className="text-xs text-white bg-black/60 px-3 py-1 rounded-lg backdrop-blur-md">
                      {concept.suitableSalons.join(", ")}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className={`lg:col-span-5 space-y-5 ${isReversed ? "lg:col-start-1" : ""}`}>
                  <div>
                    <SectionBadge number={`0${index + 1}`}>{concept.category}</SectionBadge>
                    <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-neutral-900">
                      {concept.title}
                    </h2>
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mt-1">
                      {concept.tagline}
                    </span>
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                      {concept.lead}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="rounded-2xl border border-amber-900/10 bg-amber-50/50 p-5 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                      Konsepte Özel Ayrıcalıklar
                    </span>
                    <ul className="space-y-1.5 text-xs text-neutral-700">
                      {concept.includedServices.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/organizasyon-konseptleri/${concept.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 px-6 py-3.5 text-xs font-bold text-neutral-950 shadow-xs hover:brightness-105 active:scale-98 transition-all"
                    >
                      <span>Program Akışı ve Tüm Detaylar</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

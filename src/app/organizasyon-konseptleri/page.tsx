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
    <main>
      <PageHero
        badge="Özel Senaryolar & Konseptler"
        title="Hayalinizdeki Davet İçin Kusursuz Konseptler"
        description="Düğünden kına gecesine, nişan töreninden kurumsal galalara kadar; masa dekorasyonundan sahne akışına, menü eşleşmelerinden karşılama protokolüne kadar her ayrıntı sizin için tasarlandı."
        image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85"
      />

      <section className="py-24 sm:py-32 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-24">
          {eventConcepts.map((concept, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={concept.id}
                className={`grid lg:grid-cols-12 gap-10 items-center rounded-3xl border border-white/10 bg-neutral-900/50 p-6 sm:p-10 backdrop-blur-xl ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Visual */}
                <div
                  className={`lg:col-span-7 relative h-[360px] sm:h-[480px] w-full rounded-2xl overflow-hidden group ${
                    isReversed ? "lg:col-start-6" : ""
                  }`}
                >
                  <Image
                    src={concept.coverImage}
                    alt={concept.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="rounded-full bg-black/75 backdrop-blur-md border border-white/10 px-4 py-1.5 text-xs font-medium text-amber-300">
                      {concept.category}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <span className="rounded-full bg-amber-400 text-neutral-950 px-3 py-1 text-xs font-bold">
                      {concept.capacity}
                    </span>
                    <span className="text-xs text-neutral-300 bg-black/60 px-3 py-1 rounded-lg backdrop-blur-md">
                      {concept.suitableSalons.join(", ")}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className={`lg:col-span-5 space-y-6 ${isReversed ? "lg:col-start-1" : ""}`}>
                  <div>
                    <SectionBadge number={`0${index + 1}`}>{concept.category}</SectionBadge>
                    <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal text-white">
                      {concept.title}
                    </h2>
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mt-1">
                      {concept.tagline}
                    </span>
                    <p className="mt-4 text-sm text-neutral-300 leading-relaxed font-light">
                      {concept.lead}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="rounded-2xl border border-white/10 bg-neutral-900/80 p-5 space-y-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                      Konsepte Özel Ayrıcalıklar
                    </span>
                    <ul className="space-y-2 text-xs text-neutral-300">
                      {concept.includedServices.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/organizasyon-konseptleri/${concept.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 px-6 py-3.5 text-xs font-bold text-neutral-950 shadow-md hover:brightness-110 active:scale-98 transition-all"
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Crown, Sparkles, Users } from "lucide-react";
import { salons } from "@/lib/salons";
import { venueConfig } from "@/lib/venue";
import { PageHero, SectionBadge } from "@/components/motion";

export const metadata: Metadata = {
  title: `Salonlarımız & Konseptlerimiz | ${venueConfig.defaultName}`,
  description: "Grand Royal Balo Salonu, Botanica Kır Bahçesi ve Panorama Boğaz Teras. 3 farklı mimari konsept, kolonsuz ferah yapılar ve 1.500 kişiye varan kapasite.",
};

export default function SalonsListPage() {
  return (
    <main>
      <PageHero
        badge="Ayrıcalıklı Mekanlar"
        title="Mimari Zarafetle Tasarlanan 3 Farklı Konsept"
        description="Masalsı bir saray balosu, asırlık çamlar altında romantik bir kır düğünü veya Boğaz manzaralı modern bir teras... Her anı kusursuz yaşamanız için tasarlandı."
        image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85"
      />

      <section className="py-24 sm:py-32 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-24">
          {salons.map((salon, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={salon.id}
                className={`grid lg:grid-cols-12 gap-10 items-center rounded-3xl border border-white/10 bg-neutral-900/50 p-6 sm:p-10 backdrop-blur-xl ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Photo Showcase */}
                <div
                  className={`lg:col-span-7 relative h-[360px] sm:h-[480px] w-full rounded-2xl overflow-hidden group ${
                    isReversed ? "lg:col-start-6" : ""
                  }`}
                >
                  <Image
                    src={salon.coverImage}
                    alt={salon.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <span className="rounded-full bg-black/70 backdrop-blur-md border border-white/10 px-4 py-1.5 text-xs font-medium text-amber-300">
                      {salon.concept}
                    </span>
                    <span className="rounded-full bg-amber-400 text-neutral-950 px-3 py-1 text-xs font-bold">
                      {salon.capacity}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className={`lg:col-span-5 space-y-6 ${isReversed ? "lg:col-start-1" : ""}`}>
                  <div>
                    <SectionBadge number={`0${index + 1}`}>{salon.concept}</SectionBadge>
                    <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal text-white">
                      {salon.name}
                    </h2>
                    <p className="mt-4 text-sm text-neutral-300 leading-relaxed font-light">
                      {salon.description}
                    </p>
                  </div>

                  {/* Specs List */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {salon.specs.slice(0, 4).map((spec, i) => (
                      <div key={i} className="rounded-xl border border-white/10 bg-neutral-900/80 p-3">
                        <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">{spec.label}</span>
                        <span className="text-xs sm:text-sm font-semibold text-white">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                    {salon.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href={`/salonlarimiz/${salon.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 px-6 py-3 text-xs font-bold text-neutral-950 shadow-md hover:brightness-110 transition-all"
                    >
                      <span>Teknik Özellikler & Galeri</span>
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

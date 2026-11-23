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
    <main className="bg-[#fcfbfa]">
      <PageHero
        badge="Ayrıcalıklı Mekanlar"
        title="Mimari Zarafetle Tasarlanan 3 Farklı Konsept"
        description="Masalsı bir saray balosu, asırlık çamlar altında romantik bir kır düğünü veya Boğaz manzaralı modern bir teras... Her anı kusursuz yaşamanız için tasarlandı."
        image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85"
      />

      <section className="py-24 sm:py-32 bg-[#fcfbfa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          {salons.map((salon, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={salon.id}
                className={`grid lg:grid-cols-12 gap-8 sm:gap-10 items-center rounded-3xl border border-amber-900/10 bg-white p-6 sm:p-10 shadow-[0_10px_40px_rgba(180,140,50,0.07)] ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Photo Showcase with Responsive Aspect Ratio */}
                <div
                  className={`lg:col-span-7 relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden group bg-neutral-100 ${
                    isReversed ? "lg:col-start-6" : ""
                  }`}
                >
                  <Image
                    src={salon.coverImage}
                    alt={salon.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-amber-800 shadow-xs">
                      {salon.concept}
                    </span>
                    <span className="rounded-full bg-amber-400 text-neutral-950 px-3 py-1 text-xs font-bold shadow-xs">
                      {salon.capacity}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className={`lg:col-span-5 space-y-5 ${isReversed ? "lg:col-start-1" : ""}`}>
                  <div>
                    <SectionBadge number={`0${index + 1}`}>{salon.concept}</SectionBadge>
                    <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-neutral-900">
                      {salon.name}
                    </h2>
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                      {salon.description}
                    </p>
                  </div>

                  {/* Specs List */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {salon.specs.slice(0, 4).map((spec, i) => (
                      <div key={i} className="rounded-2xl border border-amber-900/10 bg-amber-50/50 p-3.5">
                        <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-medium">{spec.label}</span>
                        <span className="text-xs sm:text-sm font-bold text-neutral-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-700">
                    {salon.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 flex items-center gap-4">
                    <Link
                      href={`/salonlarimiz/${salon.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 px-6 py-3.5 text-xs font-bold text-neutral-950 shadow-xs hover:brightness-105 active:scale-98 transition-all"
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Crown, Music, ShieldCheck, Sparkles, UtensilsCrossed } from "lucide-react";
import { services } from "@/lib/services";
import { venueConfig } from "@/lib/venue";
import { PageHero, SectionBadge } from "@/components/motion";

export const metadata: Metadata = {
  title: `Ayrıcalıklı Hizmetlerimiz | ${venueConfig.defaultName}`,
  description: "Ödüllü şef gastronomi menüleri, senfoni ve pop orkestrası, 4K drone çekimi, VIP gelin süiti ve profesyonel vale hizmeti.",
};

export default function ServicesListPage() {
  return (
    <main className="bg-[#fcfbfa]">
      <PageHero
        badge="Kusursuz Ayrıcalıklar"
        title="Düğün Masalınızı Kusursuz Kılan İmza Hizmetler"
        description="Gelin odasındaki ilk heyecandan pasta kesimine, orkestra solistinin ilk notasından 4K drone sinematografisine kadar tüm detaylar tek çatı altında."
        image="https://images.unsplash.com/photo-1519225424984-6330058b731d?auto=format&fit=crop&w=1600&q=85"
      />

      <section className="py-24 sm:py-32 bg-[#fcfbfa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="group flex flex-col justify-between rounded-3xl border border-amber-900/10 bg-white p-7 sm:p-8 shadow-[0_4px_25px_rgba(180,140,50,0.06)] transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(180,140,50,0.12)]"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-amber-800 uppercase tracking-widest border border-amber-900/10 shadow-xs">
                      {svc.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-neutral-900 group-hover:text-amber-700 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {svc.lead}
                  </p>

                  <ul className="mt-5 space-y-1.5 text-xs text-neutral-700 border-t border-amber-900/10 pt-4">
                    {svc.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span className="truncate">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-amber-900/10">
                  <Link
                    href={`/hizmetler/${svc.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 hover:text-amber-600 transition-colors"
                  >
                    <span>Detaylı Kapsamı İncele</span>
                    <ArrowRight className="h-4 w-4" />
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

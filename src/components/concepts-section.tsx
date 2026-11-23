"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Crown, Sparkles, Users } from "lucide-react";
import { eventConcepts, type EventConcept } from "@/lib/concepts";
import { useModals } from "./modal-context";

const categories = [
  "Tümü",
  "Düğün & Nikah",
  "Kına & Bekarlığa Veda",
  "Nişan & Söz",
  "Kurumsal & Gala",
  "Özel Kutlama",
];

export function ConceptsSection() {
  const [selectedCat, setSelectedCat] = useState("Tümü");
  const { openAppointment } = useModals();

  const filtered = selectedCat === "Tümü"
    ? eventConcepts
    : eventConcepts.filter((c) => c.category === selectedCat);

  return (
    <section id="konseptler" className="py-24 sm:py-32 bg-[#fcfbfa] border-t border-amber-900/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-800 uppercase tracking-widest shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>Kişiselleştirilmiş Deneyimler</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight">
            Seçkin <span className="italic bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">Organizasyon Konseptleri</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            Saray balo düğünlerinden masalsı kır bahçelerine, geleneksel kına gecelerinden prestijli kurumsal galalara kadar her davet bir sanat eseri titizliğiyle projelendirilir.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                selectedCat === cat
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 shadow-md font-bold scale-105"
                  : "border border-amber-900/15 bg-white text-neutral-700 hover:border-amber-500 hover:text-amber-800 shadow-2xs"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Concept Cards Grid with Responsive Mobile Images */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((concept) => (
            <div
              key={concept.id}
              className="group flex flex-col justify-between rounded-3xl border border-amber-900/10 bg-white p-5 sm:p-7 shadow-[0_4px_25px_rgba(180,140,50,0.06)] transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(180,140,50,0.12)] relative"
            >
              <div>
                {/* Mobile Responsive Photo Container */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-neutral-100">
                  <Image
                    src={concept.coverImage}
                    alt={concept.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/15 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-amber-800 uppercase tracking-widest border border-amber-900/10 shadow-xs">
                      {concept.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="rounded-full bg-amber-400 text-neutral-950 px-2.5 py-0.5 text-[11px] font-bold shadow-xs">
                      {concept.capacity}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 block mb-1">
                  {concept.tagline}
                </span>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 group-hover:text-amber-700 transition-colors">
                  {concept.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal line-clamp-3">
                  {concept.lead}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-1.5 text-xs text-neutral-700 border-t border-amber-900/10 pt-4">
                  {concept.includedServices.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-amber-900/10 flex items-center justify-between gap-3">
                <Link
                  href={`/organizasyon-konseptleri/${concept.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-700 hover:text-amber-800 transition-colors"
                >
                  <span>Program Akışı & Detaylar</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <button
                  onClick={() => openAppointment(concept.title)}
                  className="rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 px-3.5 py-2 text-[11px] font-bold text-neutral-950 shadow-xs hover:brightness-105 active:scale-95 transition-all cursor-pointer"
                >
                  Bilgi Al
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Concepts Link */}
        <div className="mt-14 text-center">
          <Link
            href="/organizasyon-konseptleri"
            className="inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-white px-7 py-3 text-xs font-bold text-amber-800 hover:border-amber-500 hover:bg-amber-50/50 transition-all shadow-xs"
          >
            <span>Tüm Organizasyon Paketlerini ve Akışlarını İncele</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

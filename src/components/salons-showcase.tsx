"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Crown, Sparkles, Users } from "lucide-react";
import { salons } from "@/lib/salons";
import { useModals } from "./modal-context";

export function SalonsShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const activeSalon = salons[activeTab];
  const { openAppointment } = useModals();

  return (
    <section className="py-24 sm:py-32 bg-[#f6f3ed] border-t border-amber-900/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-white px-4 py-1.5 text-xs font-bold text-amber-800 uppercase tracking-widest shadow-2xs">
            <Crown className="h-3.5 w-3.5 text-amber-600" />
            <span>Ayrıcalıklı Davet Alanları</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight">
            Hayalinizdeki Ambiyansı <span className="italic bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">Seçin</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            İster binlerce kristalin ışıltısıyla parıldayan saray konseptli Balo Salonu, ister yıldızların altında asırlık çamlarla çevrili Kır Bahçesi... Her mekan size özel tek bir düğün için hazırlanır.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {salons.map((salon, idx) => (
            <button
              key={salon.id}
              onClick={() => setActiveTab(idx)}
              className={`rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                activeTab === idx
                  ? "bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-neutral-950 shadow-md font-bold scale-105"
                  : "border border-amber-900/15 bg-white text-neutral-700 hover:border-amber-500 hover:text-amber-800 shadow-2xs"
              }`}
            >
              <span>{salon.name}</span>
              <span className={`text-[11px] rounded-full px-2 py-0.5 ${activeTab === idx ? "bg-black/15 text-neutral-950 font-bold" : "bg-neutral-100 text-amber-800"}`}>
                {salon.capacity}
              </span>
            </button>
          ))}
        </div>

        {/* Active Salon Card */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSalon.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-8 items-center rounded-3xl border border-amber-900/10 bg-white p-6 sm:p-10 shadow-[0_10px_40px_rgba(180,140,50,0.08)]"
            >
              {/* Photo Showcase with Aspect Ratio */}
              <div className="lg:col-span-7 relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden group bg-neutral-100">
                <Image
                  src={activeSalon.coverImage}
                  alt={activeSalon.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-amber-800 shadow-xs">
                    {activeSalon.concept}
                  </span>
                  <Link
                    href={`/salonlarimiz/${activeSalon.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 px-3 py-1.5 rounded-xl shadow-xs transition-colors"
                  >
                    Detaylı İncele <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Information & Features */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                    {activeSalon.concept}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl sm:text-4xl font-bold text-neutral-900">
                    {activeSalon.name}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                    {activeSalon.description}
                  </p>
                </div>

                {/* Specs Pill Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-2xl border border-amber-900/10 bg-amber-50/50 p-3.5">
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-medium">Kapasite</span>
                    <span className="text-sm font-bold text-neutral-900">{activeSalon.capacity}</span>
                  </div>
                  <div className="rounded-2xl border border-amber-900/10 bg-amber-50/50 p-3.5">
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-medium">Toplam Alan</span>
                    <span className="text-sm font-bold text-neutral-900">{activeSalon.area}</span>
                  </div>
                  <div className="rounded-2xl border border-amber-900/10 bg-amber-50/50 p-3.5">
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-medium">Tavan Yüksekliği</span>
                    <span className="text-sm font-bold text-neutral-900">{activeSalon.ceilingHeight}</span>
                  </div>
                  <div className="rounded-2xl border border-amber-900/10 bg-amber-50/50 p-3.5">
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-medium">İdeal Etkinlik</span>
                    <span className="text-sm font-bold text-amber-800 truncate block">{activeSalon.bestFor}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 pt-1">
                  {activeSalon.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <button
                    onClick={() => openAppointment(activeSalon.slug)}
                    className="flex-1 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 py-3 text-center text-xs font-bold text-neutral-950 shadow-xs hover:brightness-105 active:scale-98 transition-all cursor-pointer"
                  >
                    Bu Salonu Yerinde Gör
                  </button>
                  <Link
                    href={`/salonlarimiz/${activeSalon.slug}`}
                    className="rounded-xl border border-amber-900/15 bg-white px-4 py-3 text-xs font-bold text-neutral-700 hover:text-amber-800 hover:border-amber-500 transition-colors"
                  >
                    Teknik Detaylar →
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View All Salons Link */}
        <div className="mt-12 text-center">
          <Link
            href="/salonlarimiz"
            className="inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-white px-6 py-2.5 text-xs font-bold text-amber-800 hover:border-amber-500 hover:bg-amber-50/50 transition-all shadow-xs"
          >
            <span>Tüm Salonların Detaylı Karşılaştırması</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

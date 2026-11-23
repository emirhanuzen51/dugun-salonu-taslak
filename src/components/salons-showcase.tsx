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
    <section className="py-24 sm:py-32 bg-neutral-950 border-t border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-neutral-900/80 px-4 py-1.5 text-xs font-semibold text-amber-300 uppercase tracking-widest">
            <Crown className="h-3.5 w-3.5" />
            <span>Ayrıcalıklı Davet Alanları</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
            Hayalinizdeki Ambiyansı <span className="italic bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Seçin</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            İster binlerce kristalin ışıltısıyla parıldayan saray konseptli Balo Salonu, ister yıldızların altında asırlık çamlarla çevrili Kır Bahçesi... Her mekan size özel tek bir düğün için hazırlanır.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {salons.map((salon, idx) => (
            <button
              key={salon.id}
              onClick={() => setActiveTab(idx)}
              className={`rounded-full px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                activeTab === idx
                  ? "bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-neutral-950 shadow-[0_0_20px_rgba(217,179,94,0.35)] scale-105"
                  : "border border-white/10 bg-neutral-900 text-neutral-400 hover:border-amber-400/40 hover:text-white"
              }`}
            >
              <span>{salon.name}</span>
              <span className={`text-[11px] rounded-full px-2 py-0.5 ${activeTab === idx ? "bg-black/20 text-neutral-950 font-bold" : "bg-neutral-800 text-amber-300"}`}>
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
              className="grid lg:grid-cols-12 gap-8 items-center rounded-3xl border border-amber-500/20 bg-neutral-900/60 p-6 sm:p-10 backdrop-blur-xl shadow-2xl"
            >
              {/* Photo Showcase */}
              <div className="lg:col-span-7 relative h-[360px] sm:h-[480px] w-full rounded-2xl overflow-hidden group">
                <Image
                  src={activeSalon.coverImage}
                  alt={activeSalon.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="rounded-full bg-black/70 backdrop-blur-md border border-white/10 px-4 py-1.5 text-xs font-medium text-amber-300">
                    {activeSalon.concept}
                  </span>
                  <Link
                    href={`/salonlarimiz/${activeSalon.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-amber-500/80 hover:bg-amber-500 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Detaylı İncele <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Information & Features */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    {activeSalon.concept}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl sm:text-4xl font-normal text-white">
                    {activeSalon.name}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed font-light">
                    {activeSalon.description}
                  </p>
                </div>

                {/* Specs Pill Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-xl border border-white/10 bg-neutral-900/80 p-3">
                    <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Kapasite</span>
                    <span className="text-sm font-semibold text-white">{activeSalon.capacity}</span>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-neutral-900/80 p-3">
                    <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Toplam Alan</span>
                    <span className="text-sm font-semibold text-white">{activeSalon.area}</span>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-neutral-900/80 p-3">
                    <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Tavan Yüksekliği</span>
                    <span className="text-sm font-semibold text-white">{activeSalon.ceilingHeight}</span>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-neutral-900/80 p-3">
                    <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">İdeal Etkinlik</span>
                    <span className="text-sm font-semibold text-amber-300 truncate block">{activeSalon.bestFor}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 pt-1">
                  {activeSalon.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <button
                    onClick={() => openAppointment(activeSalon.slug)}
                    className="flex-1 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 py-3 text-center text-xs font-bold text-neutral-950 shadow-md hover:brightness-110 active:scale-98 transition-all"
                  >
                    Bu Salonu Yerinde Gör
                  </button>
                  <Link
                    href={`/salonlarimiz/${activeSalon.slug}`}
                    className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-xs font-semibold text-neutral-300 hover:text-white hover:border-amber-400/40 transition-colors"
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
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-neutral-900 px-6 py-2.5 text-xs font-semibold text-amber-300 hover:border-amber-400 hover:text-white transition-all shadow-md"
          >
            <span>Tüm Salonların Detaylı Karşılaştırması</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

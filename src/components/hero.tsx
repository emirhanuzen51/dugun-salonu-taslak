"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronRight, Crown, Sparkles, Star, Users } from "lucide-react";
import Link from "next/link";
import { useIsletmeAdi } from "@/lib/use-isletme-adi";
import { useModals } from "./modal-context";

export function Hero() {
  const venueName = useIsletmeAdi();
  const { openAppointment } = useModals();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Image & Cinematic Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,179,94,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-neutral-900/80 px-4 py-1.5 shadow-xl backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
            2026 Düğün & Davet Sezonu Rezervasyonları Açıldı
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.12]"
        >
          Masalsı Aşkınız İçin <br />
          <span className="italic bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent font-medium">
            Görkemli Bir Başlangıç
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-neutral-300 leading-relaxed font-light"
        >
          <strong className="text-white font-medium">{venueName}</strong>; 8 metre kolonsuz İtalyan kristal avizeli Balo Salonu, asırlık ağaçlar altındaki Botanica Kır Bahçesi ve gastronomi şöleniyle en mutlu gününüzü kusursuzlaştırır.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => openAppointment()}
            className="rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-8 py-4 text-sm font-bold tracking-wider text-neutral-950 shadow-[0_0_25px_rgba(217,179,94,0.4)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="h-4 w-4" />
            <span>Salon Turu ve Tarih Ayarla</span>
          </button>

          <Link
            href="/organizasyon-konseptleri"
            className="rounded-full border border-amber-400/40 bg-neutral-900/80 px-8 py-4 text-sm font-semibold tracking-wider text-white shadow-lg backdrop-blur-md hover:border-amber-400 hover:bg-neutral-800 transition-all flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span>Organizasyon Konseptlerini Keşfet</span>
            <ChevronRight className="h-4 w-4 text-neutral-400" />
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur-md">
            <div className="font-serif text-3xl sm:text-4xl font-semibold text-white">1.500+</div>
            <div className="mt-1 text-xs text-neutral-400 font-medium">Maksimum Davetli Kapasitesi</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur-md">
            <div className="font-serif text-3xl sm:text-4xl font-semibold text-amber-300">3 Salon & 7 Konsept</div>
            <div className="mt-1 text-xs text-neutral-400 font-medium">Kişiye Özel Senaryolar</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur-md">
            <div className="font-serif text-3xl sm:text-4xl font-semibold text-white">1.250+</div>
            <div className="mt-1 text-xs text-neutral-400 font-medium">Masalsı Evlilik Hikayesi</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur-md">
            <div className="font-serif text-3xl sm:text-4xl font-semibold text-amber-300 flex items-center justify-center gap-1">
              <span>5.0</span>
              <Star className="h-5 w-5 fill-amber-400 text-amber-400 inline" />
            </div>
            <div className="mt-1 text-xs text-neutral-400 font-medium">%99.8 Çift Memnuniyeti</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

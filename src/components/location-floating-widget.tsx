"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Car,
  Clock,
  Compass,
  ExternalLink,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { venueConfig } from "@/lib/venue";
import { useIsletmeAdi } from "@/lib/use-isletme-adi";

export function LocationFloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const currentName = useIsletmeAdi();

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${currentName} ${venueConfig.address}`
  )}`;

  const appleMapsUrl = `https://maps.apple.com/?q=${encodeURIComponent(
    `${currentName} ${venueConfig.address}`
  )}`;

  return (
    <div className="fixed right-4 sm:right-6 bottom-24 sm:bottom-8 z-40">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs sm:hidden z-40"
            />

            {/* Popup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="fixed sm:absolute bottom-24 sm:bottom-16 right-4 sm:right-0 w-[calc(100vw-32px)] sm:w-96 rounded-3xl border border-amber-500/30 bg-white/95 p-5 sm:p-6 shadow-[0_20px_50px_rgba(180,130,40,0.2)] backdrop-blur-2xl text-neutral-900 z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-amber-900/10">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-700 border border-amber-500/30">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-neutral-900 leading-tight">
                      {currentName}
                    </h4>
                    <span className="text-[10px] font-bold tracking-wider text-amber-700 uppercase">
                      İletişim & Lokasyon Rehberi
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Kapat"
                  className="rounded-full p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Body */}
              <div className="mt-4 space-y-3 text-xs">
                {/* 1. Address & Valet Card */}
                <div className="rounded-2xl border border-amber-900/10 bg-amber-50/60 p-3.5 text-neutral-700">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="font-medium text-neutral-900 leading-snug">
                      {venueConfig.address}
                    </p>
                  </div>
                  <div className="mt-2.5 flex items-center gap-2 text-[11px] text-amber-900 font-semibold border-t border-amber-900/10 pt-2">
                    <Car className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                    <span>{venueConfig.parkingCapacity}</span>
                  </div>
                </div>

                {/* 2. Phone Call Quick Button */}
                <a
                  href={`tel:${venueConfig.phoneRaw}`}
                  className="flex items-center justify-between rounded-xl border border-amber-900/15 bg-white p-3 hover:border-amber-500 hover:bg-amber-50/40 transition-all shadow-2xs group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/15 text-amber-700">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-neutral-500 block">Danışma & Rezervasyon</span>
                      <strong className="text-xs font-bold text-neutral-900 group-hover:text-amber-800 transition-colors">
                        {venueConfig.phone}
                      </strong>
                    </div>
                  </div>
                  <span className="rounded-lg bg-amber-400 text-neutral-950 px-2.5 py-1 text-[10px] font-bold">
                    Hemen Ara
                  </span>
                </a>

                {/* 3. Instagram Account Link */}
                <a
                  href={venueConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-pink-500/20 bg-gradient-to-r from-pink-50/60 to-purple-50/40 p-3 hover:border-pink-500/40 transition-all shadow-2xs group"
                >
                  <div className="flex items-center gap-2.5">
                    {/* Instagram Custom Clean SVG Icon */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-xs">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-neutral-500 block">Resmi Instagram</span>
                      <strong className="text-xs font-bold text-neutral-900 group-hover:text-pink-700 transition-colors">
                        {venueConfig.instagramHandle}
                      </strong>
                    </div>
                  </div>
                  <span className="rounded-lg border border-pink-500/30 bg-white px-2.5 py-1 text-[10px] font-bold text-pink-700 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    Profili Aç
                  </span>
                </a>

                {/* 4. Google Maps & Apple Maps Navigation */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 py-2.5 px-3 text-center text-[11px] font-bold text-neutral-950 shadow-xs hover:brightness-105 active:scale-98 transition-all cursor-pointer"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    <span>Yol Tarifi Al</span>
                  </a>

                  <a
                    href={appleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-amber-900/15 bg-white py-2.5 px-3 text-center text-[11px] font-semibold text-neutral-800 hover:bg-neutral-50 active:scale-98 transition-all cursor-pointer"
                  >
                    <ExternalLink className="h-3.5 w-3.5 text-amber-600" />
                    <span>Haritada Aç</span>
                  </a>
                </div>

                {/* 5. WhatsApp Live Location Request */}
                <a
                  href={`https://wa.me/${venueConfig.whatsappRaw}?text=${encodeURIComponent(
                    `Merhaba ${currentName}, mekanınızın konumunu WhatsApp üzerinden paylaşabilir misiniz?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-50 py-2.5 text-center text-[11px] font-semibold text-emerald-800 hover:bg-emerald-100/70 transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                  <span>WhatsApp ile Konum & Bilgi İste</span>
                </a>

                {/* Hours note */}
                <div className="flex items-center justify-between text-[10px] text-neutral-500 border-t border-amber-900/10 pt-2 px-1">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-amber-600" />
                    {venueConfig.workingHours}
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Circular Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="İletişim ve Konum Menüsü"
        className="group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 text-neutral-950 shadow-[0_8px_30px_rgba(217,179,94,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white cursor-pointer"
      >
        {/* Pulsing Beacon Ring */}
        <span className="absolute -inset-1 rounded-full bg-amber-400/40 animate-ping opacity-60 pointer-events-none" />

        <div className="relative flex flex-col items-center justify-center">
          <MapPin className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:-translate-y-0.5 text-neutral-950" />
          <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-tight text-neutral-950 mt-0.5">
            İletişim
          </span>
        </div>
      </button>
    </div>
  );
}

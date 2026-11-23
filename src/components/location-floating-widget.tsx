"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Car, Compass, ExternalLink, MapPin, MessageCircle, Navigation, Phone, X } from "lucide-react";
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
              className="fixed sm:absolute bottom-24 sm:bottom-16 right-4 sm:right-0 w-[calc(100vw-32px)] sm:w-88 rounded-3xl border border-amber-500/30 bg-white/95 p-5 shadow-[0_15px_45px_rgba(180,130,40,0.18)] backdrop-blur-2xl text-neutral-900 z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-amber-900/10">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/15 text-amber-600 border border-amber-500/30">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-neutral-900 leading-tight">
                      {currentName}
                    </h4>
                    <span className="text-[10px] font-semibold tracking-wider text-amber-700 uppercase">
                      Konum & Ulaşım Bilgisi
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Kapat"
                  className="rounded-full p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Address Body */}
              <div className="mt-3.5 space-y-3 text-xs">
                <div className="rounded-2xl border border-amber-900/10 bg-amber-50/50 p-3.5 text-neutral-700">
                  <p className="font-medium text-neutral-900 leading-relaxed">
                    {venueConfig.address}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-[11px] text-amber-800 font-medium">
                    <Car className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                    <span>{venueConfig.parkingCapacity}</span>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 py-2.5 px-3 text-center text-[11px] font-bold text-neutral-950 shadow-xs hover:brightness-105 active:scale-98 transition-all"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    <span>Yol Tarifi Al</span>
                  </a>

                  <a
                    href={appleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-amber-900/15 bg-white py-2.5 px-3 text-center text-[11px] font-semibold text-neutral-800 hover:bg-neutral-50 active:scale-98 transition-all"
                  >
                    <ExternalLink className="h-3.5 w-3.5 text-amber-600" />
                    <span>Haritada Aç</span>
                  </a>
                </div>

                {/* WhatsApp Location Request */}
                <a
                  href={`https://wa.me/${venueConfig.whatsappRaw}?text=${encodeURIComponent(
                    `Merhaba ${currentName}, mekanınızın konumunu WhatsApp üzerinden paylaşabilir misiniz?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-50 py-2.5 text-center text-[11px] font-semibold text-emerald-800 hover:bg-emerald-100/70 transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                  <span>WhatsApp ile Konum İste</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Circular Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Konum ve Adres"
        className="group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 text-neutral-950 shadow-[0_8px_30px_rgba(217,179,94,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white cursor-pointer"
      >
        {/* Pulsing Beacon Ring */}
        <span className="absolute -inset-1 rounded-full bg-amber-400/40 animate-ping opacity-60 pointer-events-none" />

        <div className="relative flex flex-col items-center justify-center">
          <MapPin className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:-translate-y-0.5 text-neutral-950" />
          <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-tight text-neutral-950 mt-0.5">
            Konum
          </span>
        </div>
      </button>
    </div>
  );
}

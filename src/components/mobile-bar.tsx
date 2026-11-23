"use client";

import { Calendar, MessageCircle, Phone, Sparkles } from "lucide-react";
import { venueConfig } from "@/lib/venue";
import { useIsletmeAdi } from "@/lib/use-isletme-adi";
import Link from "next/link";

export function MobileActionBar({ onOpenAppointment }: { onOpenAppointment: () => void }) {
  const currentName = useIsletmeAdi();

  const handleWhatsapp = () => {
    const text = encodeURIComponent(
      `Merhaba ${currentName}, salonlarınız ve organizasyon konseptleriniz hakkında bilgi ve müsaitlik durumunu öğrenmek istiyorum.`
    );
    window.open(`https://wa.me/${venueConfig.whatsappRaw}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden border-t border-amber-900/10 bg-white/95 backdrop-blur-xl px-3 py-2.5 shadow-[0_-5px_25px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-4 gap-1.5 text-center">
        {/* Hemen Ara */}
        <a
          href={`tel:${venueConfig.phoneRaw}`}
          className="flex flex-col items-center justify-center rounded-xl py-1 text-[10px] font-medium text-neutral-700 hover:text-amber-800"
        >
          <Phone className="h-4 w-4 text-amber-600 mb-0.5" />
          <span>Hemen Ara</span>
        </a>

        {/* WhatsApp */}
        <button
          onClick={handleWhatsapp}
          className="flex flex-col items-center justify-center rounded-xl py-1 text-[10px] font-medium text-neutral-700 hover:text-emerald-700"
        >
          <MessageCircle className="h-4 w-4 text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </button>

        {/* Konseptler */}
        <Link
          href="/organizasyon-konseptleri"
          className="flex flex-col items-center justify-center rounded-xl py-1 text-[10px] font-medium text-neutral-700 hover:text-amber-800"
        >
          <Sparkles className="h-4 w-4 text-amber-600 mb-0.5" />
          <span>Konseptler</span>
        </Link>

        {/* Randevu Al */}
        <button
          onClick={onOpenAppointment}
          className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 py-1 text-[10px] font-bold text-neutral-950 shadow-xs"
        >
          <Calendar className="h-4 w-4 mb-0.5" />
          <span>Tur Randevusu</span>
        </button>
      </div>
    </div>
  );
}

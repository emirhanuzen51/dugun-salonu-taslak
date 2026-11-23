"use client";

import { Calendar, Calculator, MessageCircle, Phone } from "lucide-react";
import { venueConfig } from "@/lib/venue";
import { useIsletmeAdi } from "@/lib/use-isletme-adi";
import Link from "next/link";

export function MobileActionBar({ onOpenAppointment }: { onOpenAppointment: () => void }) {
  const currentName = useIsletmeAdi();

  const handleWhatsapp = () => {
    const text = encodeURIComponent(
      `Merhaba ${currentName}, salonlarınız hakkında bilgi ve müsaitlik durumunu öğrenmek istiyorum.`
    );
    window.open(`https://wa.me/${venueConfig.whatsappRaw}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden border-t border-amber-500/20 bg-neutral-950/95 backdrop-blur-xl px-3 py-2.5 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-4 gap-1.5 text-center">
        {/* Hemen Ara */}
        <a
          href={`tel:${venueConfig.phoneRaw}`}
          className="flex flex-col items-center justify-center rounded-xl py-1 text-[10px] font-medium text-neutral-300 hover:text-amber-300"
        >
          <Phone className="h-4 w-4 text-amber-400 mb-0.5" />
          <span>Hemen Ara</span>
        </a>

        {/* WhatsApp */}
        <button
          onClick={handleWhatsapp}
          className="flex flex-col items-center justify-center rounded-xl py-1 text-[10px] font-medium text-neutral-300 hover:text-emerald-400"
        >
          <MessageCircle className="h-4 w-4 text-emerald-400 mb-0.5" />
          <span>WhatsApp</span>
        </button>

        {/* Fiyat Hesapla */}
        <Link
          href="/fiyat-hesapla"
          className="flex flex-col items-center justify-center rounded-xl py-1 text-[10px] font-medium text-neutral-300 hover:text-amber-300"
        >
          <Calculator className="h-4 w-4 text-amber-400 mb-0.5" />
          <span>Fiyat Çıkar</span>
        </Link>

        {/* Randevu Al */}
        <button
          onClick={onOpenAppointment}
          className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 py-1 text-[10px] font-bold text-neutral-950 shadow-md"
        >
          <Calendar className="h-4 w-4 mb-0.5" />
          <span>Tur Randevusu</span>
        </button>
      </div>
    </div>
  );
}

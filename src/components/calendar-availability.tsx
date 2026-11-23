"use client";

import { useState } from "react";
import { Calendar, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { useIsletmeAdi } from "@/lib/use-isletme-adi";

export function CalendarAvailability({ onSelectDate }: { onSelectDate: (month: string) => void }) {
  const venueName = useIsletmeAdi();
  const [selectedMonth, setSelectedMonth] = useState("Temmuz 2026");

  const months = [
    { name: "Nisan 2026", season: "Bahar Başlangıcı", status: "Müsait", rate: "%40 Dolu", badge: "Avantajlı Sezon" },
    { name: "Mayıs 2026", season: "Kır & Balo Sezonu", status: "Hızlı Doluyor", rate: "%70 Dolu", badge: "Yoğun Talep" },
    { name: "Haziran 2026", season: "Yaz Düğünleri", status: "Kritik Doluluk", rate: "%90 Dolu", badge: "Son Birkaç Hafta Sonu" },
    { name: "Temmuz 2026", season: "Zirve Sezon", status: "Kritik Doluluk", rate: "%92 Dolu", badge: "Son 3 Tarih" },
    { name: "Ağustos 2026", season: "Zirve Sezon", status: "Hızlı Doluyor", rate: "%85 Dolu", badge: "Sınırlı Hafta Sonu" },
    { name: "Eylül 2026", season: "Altın Sonbahar", status: "Hızlı Doluyor", rate: "%75 Dolu", badge: "Popüler Sezon" },
    { name: "Ekim 2026", season: "Romantik Güz", status: "Müsait", rate: "%50 Dolu", badge: "Avantajlı Paketler" },
    { name: "Kasım 2026", season: "Kış Masalı", status: "Müsait", rate: "%35 Dolu", badge: "Kış İndirimli" },
  ];

  const current = months.find((m) => m.name === selectedMonth) || months[2];

  return (
    <section className="py-24 sm:py-32 bg-neutral-950 border-t border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-neutral-900/80 px-4 py-1.5 text-xs font-semibold text-amber-300 uppercase tracking-widest">
            <Calendar className="h-3.5 w-3.5" />
            <span>2026 Takvimi & Erken Rezervasyon</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
            Düğün Tarihinizin <span className="italic bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Müsaitliğini Sorgulayın</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            {venueName} bünyesinde her salonumuzda günde yalnızca tek bir düğün organize edilmektedir. Hayalinizdeki ay için yerinizi şimdiden ayırtın.
          </p>
        </div>

        {/* Month selector grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {months.map((m) => (
            <button
              key={m.name}
              onClick={() => setSelectedMonth(m.name)}
              className={`rounded-2xl p-3 text-center border transition-all cursor-pointer ${
                selectedMonth === m.name
                  ? "border-amber-400 bg-amber-400/15 shadow-md"
                  : "border-white/10 bg-neutral-900 text-neutral-400 hover:border-white/20"
              }`}
            >
              <span className="block font-serif text-xs font-bold text-white">{m.name}</span>
              <span className="mt-1 block text-[10px] text-amber-300 font-medium">{m.rate}</span>
            </button>
          ))}
        </div>

        {/* Month Status Panel */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-10 shadow-xl backdrop-blur-xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <span className="rounded-full bg-amber-400/20 px-3 py-1 text-[11px] font-bold text-amber-300 uppercase">
                {current.badge}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">
                {current.name} — {current.season}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Genel Doluluk Oranı: <strong className="text-amber-400">{current.rate}</strong> • Durum: {current.status}
              </p>
            </div>

            <button
              onClick={() => onSelectDate(current.name)}
              className="rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 px-6 py-3 text-xs font-bold text-neutral-950 shadow-md hover:brightness-110 active:scale-98 transition-all shrink-0 cursor-pointer"
            >
              {current.name} İçin Tarih Blokla
            </button>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-xs text-neutral-300">
            <div className="rounded-xl border border-white/5 bg-neutral-900/80 p-4">
              <span className="text-amber-400 font-semibold block mb-1">Cuma Akşamları</span>
              <span>%15 Fiyat Avantajı & Kokteyl Prolonge uygunluğu</span>
            </div>
            <div className="rounded-xl border border-white/5 bg-neutral-900/80 p-4">
              <span className="text-amber-400 font-semibold block mb-1">Cumartesi Geceleri</span>
              <span>En Popüler Tarihler, sınırlı opsiyon</span>
            </div>
            <div className="rounded-xl border border-white/5 bg-neutral-900/80 p-4">
              <span className="text-amber-400 font-semibold block mb-1">Pazar Öğle / Akşam</span>
              <span>Geniş aile buluşmaları ve kır bahçesi için ideal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

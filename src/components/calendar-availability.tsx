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
    <section className="py-24 sm:py-32 bg-[#fcfbfa] border-t border-amber-900/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-800 uppercase tracking-widest shadow-2xs">
            <Calendar className="h-3.5 w-3.5 text-amber-600" />
            <span>2026 Takvimi & Erken Rezervasyon</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight">
            Düğün Tarihinizin <span className="italic bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">Müsaitliğini Sorgulayın</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
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
                  ? "border-amber-500 bg-amber-100/60 shadow-xs ring-1 ring-amber-500 text-neutral-950"
                  : "border-amber-900/10 bg-white text-neutral-700 hover:border-amber-400"
              }`}
            >
              <span className="block font-serif text-xs font-bold text-neutral-900">{m.name}</span>
              <span className="mt-1 block text-[10px] text-amber-800 font-semibold">{m.rate}</span>
            </button>
          ))}
        </div>

        {/* Month Status Panel */}
        <div className="mt-8 rounded-3xl border border-amber-900/10 bg-white p-6 sm:p-10 shadow-[0_8px_30px_rgba(180,140,50,0.06)] max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-amber-900/10 pb-6">
            <div>
              <span className="rounded-full bg-amber-500/15 border border-amber-500/30 px-3 py-1 text-[11px] font-bold text-amber-800 uppercase">
                {current.badge}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 mt-2">
                {current.name} — {current.season}
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Genel Doluluk Oranı: <strong className="text-amber-700">{current.rate}</strong> • Durum: {current.status}
              </p>
            </div>

            <button
              onClick={() => onSelectDate(current.name)}
              className="rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 px-6 py-3 text-xs font-bold text-neutral-950 shadow-xs hover:brightness-105 active:scale-98 transition-all shrink-0 cursor-pointer"
            >
              {current.name} İçin Tarih Blokla
            </button>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-xs text-neutral-700">
            <div className="rounded-2xl border border-amber-900/10 bg-amber-50/50 p-4">
              <span className="text-amber-800 font-bold block mb-1">Cuma Akşamları</span>
              <span>Özel fiyat avantajı & Kokteyl Prolonge uygunluğu</span>
            </div>
            <div className="rounded-2xl border border-amber-900/10 bg-amber-50/50 p-4">
              <span className="text-amber-800 font-bold block mb-1">Cumartesi Geceleri</span>
              <span>En popüler tarihler, sınırlı opsiyon</span>
            </div>
            <div className="rounded-2xl border border-amber-900/10 bg-amber-50/50 p-4">
              <span className="text-amber-800 font-bold block mb-1">Pazar Öğle / Akşam</span>
              <span>Geniş aile buluşmaları ve kır bahçesi için ideal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

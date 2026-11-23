"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calculator,
  Calendar,
  CheckCircle2,
  Coins,
  Crown,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";
import { venueConfig } from "@/lib/venue";
import { useIsletmeAdi } from "@/lib/use-isletme-adi";
import { salons } from "@/lib/salons";
import { menuPackages } from "@/lib/menus";

const extraOptions = [
  { id: "orchestra", name: "8 Kişilik Canlı Düğün Orkestrası & Sahne", price: 45000 },
  { id: "drone", name: "4K Çift Drone & Sinematik Düğün Klibi", price: 30000 },
  { id: "suite", name: "VIP Gelin Süiti & Özel Uşak / Nedime Servisi", price: 20000 },
  { id: "flowers", name: "Özel Hollanda İthal Taze Çiçek & Masa Tasarımı", price: 35000 },
  { id: "afterparty", name: "Gece 03:00'e Kadar Ses İzolasyonlu After-Party", price: 25000 },
  { id: "fireworks", name: "Açık Hava Volkan, Soğuk Kıvılcım & Sis Şovu", price: 18000 },
];

export function BudgetCalculator() {
  const currentName = useIsletmeAdi();
  const [selectedSalonId, setSelectedSalonId] = useState(salons[0].id);
  const [guestCount, setGuestCount] = useState(400);
  const [selectedMenuId, setSelectedMenuId] = useState(menuPackages[1].id);
  const [isWeekday, setIsWeekday] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([
    "orchestra",
    "drone",
  ]);

  const activeSalon = salons.find((s) => s.id === selectedSalonId) || salons[0];
  const activeMenu = menuPackages.find((m) => m.id === selectedMenuId) || menuPackages[1];

  // Pricing formula
  const weekdayDiscount = isWeekday ? 0.85 : 1.0; // %15 Hafta içi indirimi
  const discountedMenuPrice = Math.round(activeMenu.pricePerPerson * weekdayDiscount);
  const totalMenuCost = discountedMenuPrice * guestCount;

  const totalExtrasCost = selectedExtras.reduce((sum, extraId) => {
    const extra = extraOptions.find((e) => e.id === extraId);
    return sum + (extra ? extra.price : 0);
  }, 0);

  const grandTotal = totalMenuCost + totalExtrasCost;
  const perPersonTotal = Math.round(grandTotal / guestCount);

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleWhatsappQuote = () => {
    const extrasList = selectedExtras
      .map((id) => extraOptions.find((e) => e.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const text = encodeURIComponent(
      `Merhaba ${currentName},\n\nWeb sitenizdeki Canlı Düğün Bütçesi Hesaplayıcı üzerinden bir ön hesaplama yaptım:\n\n• Salon: ${activeSalon.name}\n• Davetli Sayısı: ${guestCount} Kişi\n• Gün Tercihi: ${isWeekday ? "Hafta İçi (%15 İndirimli)" : "Hafta Sonu"}\n• Seçilen Menü: ${activeMenu.name} (${discountedMenuPrice.toLocaleString("tr-TR")} ₺/kişi)\n• Ekstra Hizmetler: ${extrasList || "Yok"}\n• Tahmini Toplam Bütçe: ${grandTotal.toLocaleString("tr-TR")} ₺\n\nBu plana uygun 2026 boş tarihleri ve kesin teklif detaylarını öğrenmek istiyorum.`
    );

    window.open(`https://wa.me/${venueConfig.whatsappRaw}?text=${text}`, "_blank");
  };

  return (
    <section id="fiyat-hesapla" className="py-24 sm:py-32 bg-neutral-950 border-t border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-neutral-900/80 px-4 py-1.5 text-xs font-semibold text-amber-300 uppercase tracking-widest">
            <Calculator className="h-3.5 w-3.5" />
            <span>Şeffaf & Canlı Fiyatlandırma</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
            Düğün Bütçenizi <span className="italic bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Canlı Hesaplayın</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Misafir sayınızı, salon tercihinizi, menü tipinizi ve ekstraları seçin; anında net tahmini bütçenizi görün.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-start">
          {/* Sol Kolon: Seçim Parametreleri */}
          <div className="lg:col-span-7 space-y-8 rounded-3xl border border-white/10 bg-neutral-900/50 p-6 sm:p-8 backdrop-blur-xl">
            {/* 1. Salon Seçimi */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-3">
                1. Salon Tercihiniz
              </label>
              <div className="grid gap-2.5 sm:grid-cols-3">
                {salons.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSalonId(s.id)}
                    className={`rounded-2xl p-4 text-left border transition-all cursor-pointer ${
                      selectedSalonId === s.id
                        ? "border-amber-400 bg-amber-400/10 text-white shadow-md"
                        : "border-white/10 bg-neutral-900/80 text-neutral-400 hover:border-white/20"
                    }`}
                  >
                    <span className="block text-xs font-bold text-white">{s.name}</span>
                    <span className="block text-[11px] text-amber-300 mt-1">{s.capacity}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Davetli Sayısı Kaydırıcı */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  2. Davetli Sayısı
                </label>
                <span className="font-serif text-2xl font-semibold text-white">
                  {guestCount} <span className="text-xs font-sans text-neutral-400 font-normal">Kişi</span>
                </span>
              </div>
              <input
                type="range"
                min={100}
                max={1500}
                step={25}
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-amber-400 h-2 bg-neutral-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1.5 font-mono">
                <span>100 Kişi</span>
                <span>500 Kişi</span>
                <span>1.000 Kişi</span>
                <span>1.500 Kişi</span>
              </div>
            </div>

            {/* 3. Menü Seçimi */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-3">
                3. Ziyafet Menü Paketi
              </label>
              <div className="space-y-2.5">
                {menuPackages.map((m) => {
                  const isSelected = selectedMenuId === m.id;
                  const price = isWeekday ? Math.round(m.pricePerPerson * 0.85) : m.pricePerPerson;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMenuId(m.id)}
                      className={`w-full flex items-center justify-between rounded-2xl p-4 border text-left transition-all cursor-pointer ${
                        isSelected
                          ? "border-amber-400 bg-amber-400/10 text-white shadow-md"
                          : "border-white/10 bg-neutral-900/80 text-neutral-300 hover:border-white/20"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">{m.name}</span>
                          {m.badge && (
                            <span className="rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                              {m.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-neutral-400 mt-0.5">{m.tagline}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-serif text-base font-bold text-amber-300">
                          {price.toLocaleString("tr-TR")} ₺
                        </span>
                        <span className="block text-[10px] text-neutral-400">kişi başı</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Hafta İçi İndirim Anahtarı */}
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-neutral-900/80 p-4">
              <div>
                <span className="text-sm font-semibold text-white block">
                  Hafta İçi Tarih İndirimi (%15 Avantaj)
                </span>
                <span className="text-xs text-neutral-400">
                  Pazartesi - Perşembe arası davetlerde menü fiyatlarında %15 net indirim uygulanır.
                </span>
              </div>
              <button
                onClick={() => setIsWeekday(!isWeekday)}
                className={`relative inline-flex h-7 w-13 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                  isWeekday ? "bg-amber-400" : "bg-neutral-700"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-neutral-950 shadow ring-0 transition duration-200 ease-in-out ${
                    isWeekday ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* 5. Ekstra Hizmetler */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-3">
                5. Ayrıcalıklı Ek Hizmetler
              </label>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {extraOptions.map((extra) => {
                  const isChecked = selectedExtras.includes(extra.id);
                  return (
                    <button
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      className={`flex items-center justify-between rounded-xl p-3 border text-left transition-all cursor-pointer ${
                        isChecked
                          ? "border-amber-400/60 bg-amber-400/10 text-white"
                          : "border-white/10 bg-neutral-900/60 text-neutral-400 hover:border-white/20"
                      }`}
                    >
                      <div className="min-w-0 pr-2">
                        <span className="block text-xs font-medium text-white truncate">{extra.name}</span>
                        <span className="block text-[11px] text-amber-300 font-mono mt-0.5">
                          +{extra.price.toLocaleString("tr-TR")} ₺
                        </span>
                      </div>
                      <div
                        className={`h-5 w-5 rounded-md border flex items-center justify-center shrink-0 ${
                          isChecked ? "bg-amber-400 border-amber-400 text-black" : "border-white/20 bg-neutral-800"
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="h-4 w-4" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Canlı Özet & Fiyat Kartı */}
          <div className="lg:col-span-5 sticky top-28 space-y-6 rounded-3xl border border-amber-500/30 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 p-6 sm:p-8 shadow-[0_10px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            <div className="border-b border-white/10 pb-5">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                Tahmini Canlı Bütçe Özeti
              </span>
              <h3 className="font-serif text-2xl font-normal text-white mt-1">
                {activeSalon.name}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                {guestCount} Kişi • {activeMenu.name} {isWeekday && "• Hafta İçi %15 İndirimli"}
              </p>
            </div>

            {/* Maliyet Dökümü */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between text-neutral-300">
                <span>Ziyafet Menüsü ({guestCount} × {discountedMenuPrice.toLocaleString("tr-TR")} ₺):</span>
                <span className="font-semibold text-white">{totalMenuCost.toLocaleString("tr-TR")} ₺</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Seçilen Ek Hizmetler ({selectedExtras.length} Adet):</span>
                <span className="font-semibold text-white">{totalExtrasCost.toLocaleString("tr-TR")} ₺</span>
              </div>
              {isWeekday && (
                <div className="flex justify-between text-emerald-400">
                  <span>Hafta İçi İndirim Kazancınız:</span>
                  <span className="font-semibold">
                    -{(Math.round(activeMenu.pricePerPerson * 0.15) * guestCount).toLocaleString("tr-TR")} ₺
                  </span>
                </div>
              )}
            </div>

            {/* Büyük Toplam Kutusu */}
            <div className="rounded-2xl border border-amber-400/40 bg-amber-400/10 p-5 text-center">
              <span className="text-xs font-semibold text-amber-300 uppercase tracking-widest block">
                Toplam Tahmini Düğün Bütçesi
              </span>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
                {grandTotal.toLocaleString("tr-TR")} <span className="text-lg font-sans font-normal text-amber-300">₺</span>
              </div>
              <span className="text-xs text-neutral-400 mt-1 block">
                (Kişi başı ortalama: <strong className="text-white">{perPersonTotal.toLocaleString("tr-TR")} ₺</strong>)
              </span>
            </div>

            {/* Teklif İste WhatsApp Butonu */}
            <button
              onClick={handleWhatsappQuote}
              className="w-full rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 py-4 text-center text-xs sm:text-sm font-bold tracking-wider text-neutral-950 shadow-[0_0_25px_rgba(217,179,94,0.35)] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Bu Teklifi WhatsApp'tan Onayla</span>
            </button>

            <p className="text-[11px] text-center text-neutral-400 leading-normal">
              * Bu tutar yaklaşık bir ön hesaplamadır. Tarihe, özel dekor taleplerine ve içecek paketine göre kesin sözleşme fiyatı davet danışmanımızla belirlenir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

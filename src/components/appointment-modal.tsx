"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, CheckCircle2, Clock, MapPin, Sparkles, User, Users, X } from "lucide-react";
import { venueConfig } from "@/lib/venue";
import { useIsletmeAdi } from "@/lib/use-isletme-adi";
import { salons } from "@/lib/salons";

export function AppointmentModal({
  isOpen,
  onClose,
  initialSalon,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialSalon?: string;
}) {
  const currentName = useIsletmeAdi();
  const [salonChoice, setSalonChoice] = useState(initialSalon || "grand-royal-balo-salonu");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guestCount, setGuestCount] = useState("350-500 Kişi");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const salonObj = salons.find((s) => s.slug === salonChoice || s.id === salonChoice);
    const salonTitle = salonObj ? salonObj.name : salonChoice;

    const message = `Merhaba ${currentName},\n\nWeb siteniz üzerinden *Salon Turu & Kahve Tadım Randevusu* oluşturmak istiyorum:\n\n• İsim Soyisim: ${fullName}\n• Telefon: ${phone}\n• İlgilenilen Salon: ${salonTitle}\n• Planlanan Düğün Tarihi: ${date || "Belirtilmedi"}\n• Tahmini Kişi: ${guestCount}\n• Özel Not: ${notes || "Yok"}\n\nMüsaitlik durumunu öğrenmek ve salonda randevu oluşturmak istiyorum.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${venueConfig.whatsappRaw}?text=${encoded}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      onClose();
      setSubmitted(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-amber-500/25 bg-white p-6 sm:p-8 text-neutral-900 shadow-[0_20px_60px_rgba(180,140,50,0.18)] z-10 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 border border-emerald-500/30 mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-neutral-900">
              Talebiniz Hazırlandı!
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Davet danışmanımıza yönlendiriliyorsunuz. WhatsApp üzerinden anında tarih teyidi alacaksınız...
            </p>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-bold text-amber-800 uppercase tracking-wider mb-3">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              VIP Karşılama & Kahve İkramı
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
              Salon Turu ve Tarih Ön Rezervasyonu
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600">
              {currentName} salonlarını yerinde keşfedin, örnek masa kurulumunu inceleyin ve düğün danışmanımızla özel kahve eşliğinde planınızı oluşturun.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Gezmek İstediğiniz Salon
                </label>
                <select
                  value={salonChoice}
                  onChange={(e) => setSalonChoice(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 focus:border-amber-500 focus:bg-white outline-none"
                >
                  {salons.map((s) => (
                    <option key={s.id} value={s.slug} className="bg-white text-neutral-900">
                      {s.name} ({s.capacity})
                    </option>
                  ))}
                  <option value="Tüm Salonları Gezmek İstiyorum" className="bg-white text-neutral-900">
                    Tüm Salonları Gezmek İstiyorum (Karşılaştırmalı Tur)
                  </option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Adınız & Soyadınız *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Emre & Merve Demir"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 focus:border-amber-500 focus:bg-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Telefon Numaranız *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0532 000 00 00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 focus:border-amber-500 focus:bg-white outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Planlanan Düğün Tarihi
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 focus:border-amber-500 focus:bg-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Tahmini Davetli Sayısı
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 focus:border-amber-500 focus:bg-white outline-none"
                  >
                    <option value="100 - 250 Kişi">100 - 250 Kişi (Butik)</option>
                    <option value="250 - 500 Kişi">250 - 500 Kişi (Standart)</option>
                    <option value="500 - 750 Kişi">500 - 750 Kişi (Geniş)</option>
                    <option value="750 - 1.200 Kişi">750 - 1.200 Kişi (Gala)</option>
                    <option value="1.200 - 1.500+ Kişi">1.200 - 1.500+ Kişi (Grand Ziyafet)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Özel Not veya İstekleriniz
                </label>
                <textarea
                  rows={2}
                  placeholder="Kır düğünü mü, saray balosu mu düşünüyorsunuz? Belirtebilirsiniz."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 focus:border-amber-500 focus:bg-white outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 py-3.5 text-center text-sm font-bold tracking-wide text-neutral-950 shadow-md hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer"
              >
                Randevu Talebini Gönder & WhatsApp'tan Onayla
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}

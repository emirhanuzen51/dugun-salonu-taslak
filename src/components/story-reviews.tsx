"use client";

import { useState } from "react";
import { ChevronDown, Heart, HelpCircle, Quote, Star } from "lucide-react";
import { faqs } from "@/lib/faq";

export const testimonials = [
  {
    names: "Merve & Kaan Soydan",
    salon: "Grand Royal Balo Salonu (650 Kişi)",
    date: "Eylül 2025",
    comment: "İlk dans anımızdaki sis efekti, kristal avizelerin ışıltısı ve yemeklerin sıcak servis edilmesi muazzamdı. Ailelerimiz ve misafirlerimiz hala yemeklerin lezzetini ve vale karşılama düzenini konuşuyor. Rüya gibi bir geceydi!",
  },
  {
    names: "Elif & Caner Tunç",
    salon: "Botanica Kır Bahçesi (800 Kişi)",
    date: "Ağustos 2025",
    comment: "Kır düğünü hayalimiz vardı ama yağmur endişemiz çok büyüktü. Ekip bioklimatik pergolaları ve kış bahçesini göstererek içimizi çok rahatlattı. Işıklandırma masalsıydı, fotoğraflarımız Hollywood filmi gibi çıktı.",
  },
  {
    names: "Bahar & Selim Kaya",
    salon: "Panorama Boğaz Teras (350 Kişi)",
    date: "Temmuz 2025",
    comment: "Teras manzarası gün batımında kadeh kaldırırken tek kelimeyle nefes kesiciydi. After party saat 03:00'e kadar kesintisiz devam etti, DJ performansı ve kokteyller harikaydı. Emeği geçen tüm ekibe sonsuz teşekkürler.",
  },
];

export function StoryReviews() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 bg-neutral-950 border-t border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-neutral-900/80 px-4 py-1.5 text-xs font-semibold text-amber-300 uppercase tracking-widest">
              <Heart className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>Gerçek Aşk Hikayeleri</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Mutlu Çiftlerimizin <span className="italic bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Deneyimleri</span>
            </h2>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-neutral-400">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="font-bold text-white">4.9 / 5.0</span>
              <span>(1.250+ Mutlu Çift)</span>
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-neutral-900/60 p-7 sm:p-8 shadow-xl backdrop-blur-xl relative"
              >
                <Quote className="h-8 w-8 text-amber-400/30 mb-4" />
                <p className="text-sm text-neutral-300 leading-relaxed italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <h4 className="font-serif text-base font-bold text-white">{t.names}</h4>
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 mt-1">
                    <span>{t.salon}</span>
                    <span className="text-amber-400 font-semibold">{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-28 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-neutral-900/80 px-4 py-1.5 text-xs font-semibold text-amber-300 uppercase tracking-widest">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Merak Edilenler</span>
            </div>
            <h3 className="mt-4 font-serif text-2xl sm:text-4xl font-normal text-white">
              Sıkça Sorulan Sorular
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-neutral-900/60 overflow-hidden backdrop-blur-xl transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg font-medium text-white pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-neutral-400 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

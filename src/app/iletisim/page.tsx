import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { venueConfig } from "@/lib/venue";
import { PageHero, SectionBadge } from "@/components/motion";

export const metadata: Metadata = {
  title: `İletişim & Randevu | ${venueConfig.defaultName}`,
  description: "Salon turu rezervasyonu, ulaşım krokisi, otopark ve iletişim bilgileri.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#fcfbfa]">
      <PageHero
        badge="Bize Ulaşın"
        title="Salonlarımızı Ziyaret Edin, Kahvemizi İçin"
        description="Düğün danışmanlarımızla yüz yüze görüşmek, salonları yerinde incelemek ve menü tadım detaylarını konuşmak için haftanın her günü açığız."
        image="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85"
      />

      <section className="py-24 sm:py-32 bg-[#fcfbfa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <SectionBadge number="01">Doğrudan İletişim</SectionBadge>
                <h2 className="mt-4 font-serif text-3xl font-bold text-neutral-900">
                  Davet Kompleksimiz
                </h2>
                <p className="mt-3 text-sm text-neutral-600">
                  Salon ziyaretleri ve özel tadım turları randevu ile gerçekleştirilmektedir.
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="rounded-2xl border border-amber-900/10 bg-white p-5 flex items-start gap-4 shadow-xs">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 border border-amber-500/25">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">Adres</span>
                    <span className="text-sm text-neutral-800 mt-1 block font-medium">{venueConfig.address}</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-900/10 bg-white p-5 flex items-start gap-4 shadow-xs">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 border border-amber-500/25">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">Telefon</span>
                    <a href={`tel:${venueConfig.phoneRaw}`} className="text-sm font-bold text-neutral-900 hover:text-amber-700 mt-1 block">
                      {venueConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-500/25 bg-white p-5 flex items-start gap-4 shadow-xs">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 border border-emerald-500/30">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">WhatsApp Davet Hattı</span>
                    <a
                      href={`https://wa.me/${venueConfig.whatsappRaw}?text=Merhaba,%20salonlarınız%20hakkında%20bilgi%20almak%20istiyorum.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-neutral-900 hover:text-emerald-700 mt-1 block"
                    >
                      {venueConfig.whatsapp} (7/24 Hızlı Yanıt)
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-900/10 bg-white p-5 flex items-start gap-4 shadow-xs">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 border border-amber-500/25">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">Çalışma & Ziyaret Saatleri</span>
                    <span className="text-sm text-neutral-800 mt-1 block">{venueConfig.workingHours}</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-900/10 bg-white p-5 flex items-start gap-4 shadow-xs">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 border border-amber-500/25">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">Otopark & Vale</span>
                    <span className="text-sm text-neutral-800 mt-1 block">{venueConfig.parkingCapacity}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Location Guide */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl border border-amber-900/10 bg-white p-6 sm:p-8 shadow-[0_10px_35px_rgba(180,140,50,0.06)]">
                <SectionBadge number="02">Konum & Ulaşım</SectionBadge>
                <h3 className="mt-4 font-serif text-2xl font-bold text-neutral-900">
                  Harita ve Ulaşım Krokisi
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600">
                  Boğaz sahil hattı üzerinde, ana arterlere 5 dakika mesafede yer alan tesisimize misafirleriniz trafik stresine girmeden rahatlıkla ulaşabilir.
                </p>

                {/* Map iframe container */}
                <div className="mt-6 relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-amber-900/10 bg-neutral-100 shadow-xs">
                  <iframe
                    title="Lumina Grand Konum"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48068.52085358925!2d29.022378!3d41.139624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6138d4512e3%3A0x6b63d91cf95bf3e!2sSar%C4%B1yer%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Crown,
  Heart,
  MessageCircle,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import { eventConcepts, findConcept } from "@/lib/concepts";
import { venueConfig } from "@/lib/venue";
import { PageHero, SectionBadge } from "@/components/motion";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return eventConcepts.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const concept = findConcept(slug);
  if (!concept) return { title: "Konsept Bulunamadı" };
  return {
    title: `${concept.title} | ${venueConfig.defaultName}`,
    description: concept.lead,
  };
}

export default async function ConceptDetailPage({ params }: Props) {
  const { slug } = await params;
  const concept = findConcept(slug);

  if (!concept) {
    notFound();
  }

  return (
    <main className="bg-[#fcfbfa]">
      <PageHero
        badge={concept.category}
        title={concept.title}
        description={concept.lead}
        image={concept.coverImage}
      />

      <section className="py-24 sm:py-32 bg-[#fcfbfa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Link
              href="/organizasyon-konseptleri"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-amber-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Tüm Organizasyon Konseptlerine Dön</span>
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <SectionBadge number="01">Konsept Ruhu & Felsefesi</SectionBadge>
                <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-neutral-900">
                  {concept.tagline}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-neutral-700">
                  {concept.description}
                </p>
              </div>

              {/* Timeline / Program Flow */}
              <div className="rounded-3xl border border-amber-900/10 bg-white p-6 sm:p-8 shadow-[0_10px_35px_rgba(180,140,50,0.06)]">
                <SectionBadge number="02">Örnek Gece Akışı</SectionBadge>
                <h3 className="mt-4 font-serif text-2xl font-bold text-neutral-900">
                  Saat Saat Kusursuz Program Planı
                </h3>

                <div className="mt-6 space-y-4">
                  {concept.timeline.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start rounded-2xl border border-amber-900/10 bg-amber-50/40 p-4">
                      <div className="flex h-11 w-16 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-800 font-mono font-bold text-xs border border-amber-500/30">
                        {item.time}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-neutral-900">{item.title}</h4>
                        <p className="text-xs text-neutral-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included Services */}
              <div className="rounded-3xl border border-amber-900/10 bg-white p-6 sm:p-8 shadow-[0_10px_35px_rgba(180,140,50,0.06)]">
                <SectionBadge number="03">Dahil Olan Standartlar</SectionBadge>
                <h3 className="mt-4 font-serif text-2xl font-bold text-neutral-900">
                  Bu Konsepte Özel Hazırlanan Hizmetler
                </h3>

                <div className="mt-6 space-y-3">
                  {concept.includedServices.map((inc, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-amber-900/10 bg-amber-50/40 p-3.5">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0" />
                      <span className="text-sm text-neutral-800">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery with responsive mobile aspect ratio */}
              {concept.gallery.length > 0 && (
                <div>
                  <SectionBadge number="04">Görsel İlham</SectionBadge>
                  <h3 className="mt-4 font-serif text-2xl font-bold text-neutral-900 mb-6">
                    {concept.shortTitle} Fotoğraf Galerisi
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {concept.gallery.map((img, i) => (
                      <div key={i} className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-amber-900/10 bg-neutral-100 group shadow-xs">
                        <Image
                          src={img}
                          alt={`${concept.title} - ${i + 1}`}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6 rounded-3xl border border-amber-500/25 bg-white p-6 sm:p-8 shadow-[0_15px_45px_rgba(180,140,50,0.1)]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                    Özel Rezervasyon
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-neutral-900 mt-1">
                    {concept.shortTitle}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    {concept.capacity} • {concept.suitableSalons.join(", ")}
                  </p>
                </div>

                <div className="border-t border-b border-amber-900/10 py-4 space-y-3 text-xs text-neutral-700">
                  <div className="flex justify-between">
                    <span>Önerilen Mekan:</span>
                    <strong className="text-amber-800 font-bold">{concept.suitableSalons[0]}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Kapasite Aralığı:</span>
                    <strong className="text-neutral-900 font-bold">{concept.capacity}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Otopark & Vale:</span>
                    <strong className="text-neutral-900 font-bold">VIP Vale Dahil</strong>
                  </div>
                </div>

                <p className="text-xs text-neutral-600 italic">
                  {concept.highlight}
                </p>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${venueConfig.whatsappRaw}?text=${encodeURIComponent(
                      `Merhaba, ${concept.title} konseptiniz hakkında detaylı bilgi almak ve 2026 müsait tarihlerini öğrenmek istiyorum.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 py-3.5 text-center text-xs font-bold text-neutral-950 shadow-xs hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 block"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp ile Tarih & Teklif Sor</span>
                  </a>

                  <Link
                    href="/iletisim"
                    className="w-full rounded-xl border border-amber-900/15 bg-white py-3 text-center text-xs font-bold text-neutral-800 hover:border-amber-500 hover:bg-amber-50/50 transition-colors flex items-center justify-center gap-2 block shadow-2xs"
                  >
                    <Calendar className="h-4 w-4 text-amber-600" />
                    <span>Salon Turu ve Tadım Randevusu</span>
                  </Link>

                  <a
                    href={`tel:${venueConfig.phoneRaw}`}
                    className="w-full rounded-xl border border-amber-900/10 bg-neutral-50 py-3 text-center text-xs font-semibold text-neutral-700 hover:text-neutral-900 transition-colors flex items-center justify-center gap-2 block"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{venueConfig.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

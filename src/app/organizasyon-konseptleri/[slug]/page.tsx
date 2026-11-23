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
    <main>
      <PageHero
        badge={concept.category}
        title={concept.title}
        description={concept.lead}
        image={concept.coverImage}
      />

      <section className="py-24 sm:py-32 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10">
            <Link
              href="/organizasyon-konseptleri"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-amber-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Tüm Organizasyon Konseptlerine Dön</span>
            </Link>
          </div>

          <div className="grid gap-14 lg:grid-cols-12">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <SectionBadge number="01">Konsept Ruhu & Felsefesi</SectionBadge>
                <h2 className="mt-4 font-serif text-3xl font-normal text-white sm:text-4xl">
                  {concept.tagline}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-neutral-300">
                  {concept.description}
                </p>
              </div>

              {/* Timeline / Program Flow */}
              <div className="rounded-3xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-xl">
                <SectionBadge number="02">Örnek Gece Akışı</SectionBadge>
                <h3 className="mt-4 font-serif text-2xl font-normal text-white">
                  Saat Saat Kusursuz Program Planı
                </h3>

                <div className="mt-6 space-y-4">
                  {concept.timeline.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start rounded-2xl border border-white/5 bg-neutral-900/90 p-4">
                      <div className="flex h-12 w-16 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300 font-mono font-bold text-xs border border-amber-400/30">
                        {item.time}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                        <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included Services */}
              <div className="rounded-3xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-xl">
                <SectionBadge number="03">Dahil Olan Standartlar</SectionBadge>
                <h3 className="mt-4 font-serif text-2xl font-normal text-white">
                  Bu Konsepte Özel Hazırlanan Hizmetler
                </h3>

                <div className="mt-6 space-y-3">
                  {concept.includedServices.map((inc, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-white/5 bg-neutral-900/80 p-3.5">
                      <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0" />
                      <span className="text-sm text-neutral-200">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              {concept.gallery.length > 0 && (
                <div>
                  <SectionBadge number="04">Görsel İlham</SectionBadge>
                  <h3 className="mt-4 font-serif text-2xl font-normal text-white mb-6">
                    {concept.shortTitle} Fotoğraf Galerisi
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {concept.gallery.map((img, i) => (
                      <div key={i} className="relative h-64 rounded-2xl overflow-hidden border border-white/10 group">
                        <Image
                          src={img}
                          alt={`${concept.title} - ${i + 1}`}
                          fill
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
              <div className="sticky top-28 space-y-6 rounded-3xl border border-amber-500/30 bg-neutral-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    Özel Rezervasyon
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-white mt-1">
                    {concept.shortTitle}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    {concept.capacity} • {concept.suitableSalons.join(", ")}
                  </p>
                </div>

                <div className="border-t border-b border-white/10 py-4 space-y-3 text-xs text-neutral-300">
                  <div className="flex justify-between">
                    <span>Önerilen Mekan:</span>
                    <strong className="text-amber-300">{concept.suitableSalons[0]}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Kapasite Aralığı:</span>
                    <strong className="text-white">{concept.capacity}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Otopark & Vale:</span>
                    <strong className="text-white">VIP Vale Dahil</strong>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 italic">
                  {concept.highlight}
                </p>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${venueConfig.whatsappRaw}?text=${encodeURIComponent(
                      `Merhaba, ${concept.title} konseptiniz hakkında detaylı bilgi almak ve 2026 müsait tarihlerini öğrenmek istiyorum.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 py-3.5 text-center text-xs font-bold text-neutral-950 shadow-md hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 block"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp ile Tarih & Teklif Sor</span>
                  </a>

                  <Link
                    href="/iletisim"
                    className="w-full rounded-xl border border-white/10 bg-neutral-800 py-3 text-center text-xs font-semibold text-neutral-200 hover:text-white hover:border-amber-400 transition-colors flex items-center justify-center gap-2 block"
                  >
                    <Calendar className="h-4 w-4 text-amber-400" />
                    <span>Salon Turu ve Tadım Randevusu</span>
                  </Link>

                  <a
                    href={`tel:${venueConfig.phoneRaw}`}
                    className="w-full rounded-xl border border-white/5 bg-neutral-900 py-3 text-center text-xs font-medium text-neutral-400 hover:text-white transition-colors flex items-center justify-center gap-2 block"
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

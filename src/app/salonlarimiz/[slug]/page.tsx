import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Compass,
  Crown,
  FileText,
  MapPin,
  Maximize2,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import { salons, findSalon } from "@/lib/salons";
import { venueConfig } from "@/lib/venue";
import { PageHero, SectionBadge } from "@/components/motion";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return salons.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const salon = findSalon(slug);
  if (!salon) return { title: "Salon Bulunamadı" };
  return {
    title: `${salon.name} | ${venueConfig.defaultName}`,
    description: salon.lead,
  };
}

export default async function SalonDetailPage({ params }: Props) {
  const { slug } = await params;
  const salon = findSalon(slug);

  if (!salon) {
    notFound();
  }

  return (
    <main>
      <PageHero
        badge={salon.concept}
        title={salon.name}
        description={salon.lead}
        image={salon.coverImage}
      />

      <section className="py-24 sm:py-32 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Back link */}
          <div className="mb-10">
            <Link
              href="/salonlarimiz"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-amber-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Tüm Salonlara Dön</span>
            </Link>
          </div>

          <div className="grid gap-14 lg:grid-cols-12">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <SectionBadge number="01">Mimari & Konsept</SectionBadge>
                <h2 className="mt-4 font-serif text-3xl font-normal text-white sm:text-4xl">
                  Mekan Karakteristiği ve Konfor Esasları
                </h2>
                <p className="mt-6 text-base leading-relaxed text-neutral-300">
                  {salon.description}
                </p>
              </div>

              {/* Technical Specs Bento */}
              <div className="rounded-3xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-xl">
                <SectionBadge number="02">Teknik Özellikler</SectionBadge>
                <h3 className="mt-4 font-serif text-2xl font-normal text-white">
                  Kapasite ve Mimari Veriler
                </h3>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {salon.specs.map((spec, i) => (
                    <div key={i} className="rounded-2xl border border-white/5 bg-neutral-900/90 p-4">
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-medium">
                        {spec.label}
                      </span>
                      <span className="text-base font-semibold text-amber-300 mt-1 block">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div className="rounded-3xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-xl">
                <SectionBadge number="03">Paket Standartları</SectionBadge>
                <h3 className="mt-4 font-serif text-2xl font-normal text-white">
                  Bu Salona Özel Dahil Olan Ayrıcalıklar
                </h3>

                <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-neutral-300">
                  {salon.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-white/5 bg-neutral-900/60 p-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Gallery */}
              <div>
                <SectionBadge number="04">Görsel Tur</SectionBadge>
                <h3 className="mt-4 font-serif text-2xl font-normal text-white mb-6">
                  {salon.name} Fotoğraf Galerisi
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {salon.gallery.map((img, i) => (
                    <div key={i} className="relative h-64 rounded-2xl overflow-hidden border border-white/10 group">
                      <Image
                        src={img}
                        alt={`${salon.name} - ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6 rounded-3xl border border-amber-500/30 bg-neutral-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    Rezervasyon & Bilgi
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-white mt-1">
                    {salon.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    {salon.capacity} • {salon.area}
                  </p>
                </div>

                <div className="border-t border-b border-white/10 py-4 space-y-3 text-xs text-neutral-300">
                  <div className="flex justify-between">
                    <span>Tavan Yüksekliği:</span>
                    <strong className="text-white">{salon.ceilingHeight}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>En Uygun Etkinlik:</span>
                    <strong className="text-amber-300 truncate max-w-[180px]">{salon.bestFor}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Otopark:</span>
                    <strong className="text-white">VIP Vale Dahil</strong>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${venueConfig.whatsappRaw}?text=${encodeURIComponent(
                      `Merhaba, ${salon.name} hakkında detaylı bilgi ve müsait günleri öğrenmek istiyorum.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 py-3.5 text-center text-xs font-bold text-neutral-950 shadow-md hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 block"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>WhatsApp ile Tarih Sor</span>
                  </a>

                  <Link
                    href="/organizasyon-konseptleri"
                    className="w-full rounded-xl border border-white/10 bg-neutral-800 py-3 text-center text-xs font-semibold text-neutral-200 hover:text-white hover:border-amber-400 transition-colors flex items-center justify-center gap-2 block"
                  >
                    <Sparkles className="h-4 w-4 text-amber-400" />
                    <span>Bu Salona Uygun Konseptler</span>
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

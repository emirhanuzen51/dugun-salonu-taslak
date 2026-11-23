import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { services, findService } from "@/lib/services";
import { venueConfig } from "@/lib/venue";
import { PageHero, SectionBadge } from "@/components/motion";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = findService(slug);
  if (!svc) return { title: "Hizmet Bulunamadı" };
  return {
    title: `${svc.title} | ${venueConfig.defaultName}`,
    description: svc.lead,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const svc = findService(slug);

  if (!svc) {
    notFound();
  }

  return (
    <main>
      <PageHero
        badge={svc.category}
        title={svc.title}
        description={svc.lead}
        image={svc.image}
      />

      <section className="py-24 sm:py-32 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-amber-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Tüm Hizmetlere Dön</span>
            </Link>
          </div>

          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-12">
              <div>
                <SectionBadge number="01">Hizmet Kapsamı</SectionBadge>
                <h2 className="mt-4 font-serif text-3xl font-normal text-white sm:text-4xl">
                  Profesyonel Standartlar ve Uygulama
                </h2>
                <p className="mt-6 text-base leading-relaxed text-neutral-300">
                  {svc.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="rounded-3xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-xl">
                <SectionBadge number="02">Paket Ayrıcalıkları</SectionBadge>
                <h3 className="mt-4 font-serif text-2xl font-normal text-white">
                  Öne Çıkan Standartlar
                </h3>
                <div className="mt-6 space-y-3">
                  {svc.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border border-white/5 bg-neutral-900/80 p-4">
                      <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-200">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3-Step Process */}
              <div className="rounded-3xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-xl">
                <SectionBadge number="03">Süreç Nasıl İlerliyor?</SectionBadge>
                <h3 className="mt-4 font-serif text-2xl font-normal text-white">
                  Adım Adım Kusursuz Yönetim
                </h3>
                <div className="mt-6 grid sm:grid-cols-3 gap-4">
                  {svc.process.map((p, i) => (
                    <div key={i} className="rounded-2xl border border-white/5 bg-neutral-900/90 p-5">
                      <span className="font-serif text-3xl font-bold text-amber-400 block mb-2">{p.step}</span>
                      <h4 className="text-sm font-semibold text-white mb-1">{p.title}</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6 rounded-3xl border border-amber-500/30 bg-neutral-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    Özel Danışmanlık
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-white mt-1">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Düğün paketlerinize entegre edilebilir opsiyonlar.
                  </p>
                </div>

                <div className="border-t border-b border-white/10 py-4 space-y-2 text-xs text-neutral-300">
                  <p>Bu hizmet ve detayları hakkında organizasyon direktörümüzle doğrudan görüşebilirsiniz.</p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${venueConfig.whatsappRaw}?text=${encodeURIComponent(
                      `Merhaba, ${svc.title} hizmetiniz hakkında detaylı bilgi almak istiyorum.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 py-3.5 text-center text-xs font-bold text-neutral-950 shadow-md hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 block"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp ile Bilgi Al</span>
                  </a>

                  <Link
                    href="/fiyat-hesapla"
                    className="w-full rounded-xl border border-white/10 bg-neutral-800 py-3 text-center text-xs font-semibold text-neutral-200 hover:text-white hover:border-amber-400 transition-colors flex items-center justify-center gap-2 block"
                  >
                    <Sparkles className="h-4 w-4 text-amber-400" />
                    <span>Düğün Bütçesine Ekle</span>
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

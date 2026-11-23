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
    <main className="bg-[#fcfbfa]">
      <PageHero
        badge={svc.category}
        title={svc.title}
        description={svc.lead}
        image={svc.image}
      />

      <section className="py-24 sm:py-32 bg-[#fcfbfa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-amber-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Tüm Hizmetlere Dön</span>
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-12">
              <div>
                <SectionBadge number="01">Hizmet Kapsamı</SectionBadge>
                <h2 className="mt-4 font-serif text-3xl font-bold text-neutral-900 sm:text-4xl">
                  Profesyonel Standartlar ve Uygulama
                </h2>
                <p className="mt-5 text-base leading-relaxed text-neutral-700">
                  {svc.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="rounded-3xl border border-amber-900/10 bg-white p-6 sm:p-8 shadow-[0_10px_35px_rgba(180,140,50,0.06)]">
                <SectionBadge number="02">Paket Ayrıcalıkları</SectionBadge>
                <h3 className="mt-4 font-serif text-2xl font-bold text-neutral-900">
                  Öne Çıkan Standartlar
                </h3>
                <div className="mt-6 space-y-3">
                  {svc.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-2xl border border-amber-900/10 bg-amber-50/40 p-4">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-800">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3-Step Process */}
              <div className="rounded-3xl border border-amber-900/10 bg-white p-6 sm:p-8 shadow-[0_10px_35px_rgba(180,140,50,0.06)]">
                <SectionBadge number="03">Süreç Nasıl İlerliyor?</SectionBadge>
                <h3 className="mt-4 font-serif text-2xl font-bold text-neutral-900">
                  Adım Adım Kusursuz Yönetim
                </h3>
                <div className="mt-6 grid sm:grid-cols-3 gap-4">
                  {svc.process.map((p, i) => (
                    <div key={i} className="rounded-2xl border border-amber-900/10 bg-amber-50/50 p-5">
                      <span className="font-serif text-3xl font-bold text-amber-700 block mb-2">{p.step}</span>
                      <h4 className="text-sm font-bold text-neutral-900 mb-1">{p.title}</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6 rounded-3xl border border-amber-500/25 bg-white p-6 sm:p-8 shadow-[0_15px_45px_rgba(180,140,50,0.1)]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                    Özel Danışmanlık
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-neutral-900 mt-1">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Düğün paketlerinize entegre edilebilir opsiyonlar.
                  </p>
                </div>

                <div className="border-t border-b border-amber-900/10 py-4 space-y-2 text-xs text-neutral-700">
                  <p>Bu hizmet ve detayları hakkında organizasyon direktörümüzle doğrudan görüşebilirsiniz.</p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${venueConfig.whatsappRaw}?text=${encodeURIComponent(
                      `Merhaba, ${svc.title} hizmetiniz hakkında detaylı bilgi almak istiyorum.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 py-3.5 text-center text-xs font-bold text-neutral-950 shadow-xs hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 block"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp ile Bilgi Al</span>
                  </a>

                  <Link
                    href="/organizasyon-konseptleri"
                    className="w-full rounded-xl border border-amber-900/15 bg-white py-3 text-center text-xs font-bold text-neutral-800 hover:border-amber-500 hover:bg-amber-50/50 transition-colors flex items-center justify-center gap-2 block shadow-2xs"
                  >
                    <Sparkles className="h-4 w-4 text-amber-600" />
                    <span>Organizasyon Konseptlerini Keşfet</span>
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

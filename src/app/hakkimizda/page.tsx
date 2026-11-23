import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle2, Clock, Crown, Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import { teamMembers } from "@/lib/team";
import { venueConfig } from "@/lib/venue";
import { PageHero, SectionBadge } from "@/components/motion";

export const metadata: Metadata = {
  title: `Hakkımızda & Ekibimiz | ${venueConfig.defaultName}`,
  description: "15 yıllık lüks davet tecrübesi, ödüllü şef kadrosu, sanat yönetmenleri ve vizyonumuz.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#fcfbfa]">
      <PageHero
        badge="Hikayemiz & Felsefemiz"
        title="15 Yıldır En Güzel Masallara Ev Sahipliği Yapıyoruz"
        description="Bizim için her düğün, tekrarlanamaz ve telafisi olmayan tek bir şaheserdir. Bu bilinçle, kusursuzluk tutkusunu her detayda hissettiriyoruz."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85"
      />

      <section className="py-24 sm:py-32 bg-[#fcfbfa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Values Grid */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <SectionBadge number="01">Değerlerimiz</SectionBadge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">
                Kusursuzluk Bir Tercih Değil, Bizim Standardımızdır
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-neutral-600 font-normal">
                {venueConfig.defaultName}, kuruluşundan bu yana 1.250&apos;den fazla seçkin çifte ev sahipliği yapmıştır. Kolonsuz mimarimiz, İtalyan avizelerimiz, asırlık kır bahçemiz ve Boğaz terasımızla İstanbul&apos;un en prestijli davet kompleksi unvanını gururla taşıyoruz.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl border border-amber-900/10 bg-white p-4 shadow-2xs">
                  <span className="font-serif text-2xl font-bold text-amber-700">15+ Yıl</span>
                  <span className="text-xs text-neutral-500 block mt-1">Sektörel Tecrübe</span>
                </div>
                <div className="rounded-2xl border border-amber-900/10 bg-white p-4 shadow-2xs">
                  <span className="font-serif text-2xl font-bold text-amber-700">1.250+</span>
                  <span className="text-xs text-neutral-500 block mt-1">Mutlu Çift</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-amber-900/10 shadow-lg bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80"
                alt="Davet ve Balo"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Team Section */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <SectionBadge number="02">Uzman Kadromuz</SectionBadge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mt-4">
                Düğününüzü Kusursuz Kılan Ekip
              </h2>
              <p className="mt-3 text-sm text-neutral-600">
                Master şeflerden sahne mühendislerine, davet direktörlerinden çiçek sanatçılarına kadar profesyonel yönetim.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-amber-900/10 bg-white p-5 shadow-[0_4px_25px_rgba(180,140,50,0.06)] group hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-5 bg-neutral-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-amber-800 border border-amber-900/10 shadow-xs">
                      {member.experience}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-neutral-900">{member.name}</h3>
                  <span className="text-xs font-semibold text-amber-700 block mt-0.5">{member.role}</span>
                  <p className="text-xs text-neutral-600 mt-2.5 leading-relaxed font-normal">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

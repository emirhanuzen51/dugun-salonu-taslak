"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, Sparkles, UtensilsCrossed } from "lucide-react";
import { menuPackages } from "@/lib/menus";
import { useModals } from "./modal-context";

export function MenuTasting() {
  const [activeMenuIndex, setActiveMenuIndex] = useState(1);
  const activeMenu = menuPackages[activeMenuIndex];
  const { openAppointment } = useModals();

  return (
    <section className="py-24 sm:py-32 bg-neutral-950 border-t border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-neutral-900/80 px-4 py-1.5 text-xs font-semibold text-amber-300 uppercase tracking-widest">
            <UtensilsCrossed className="h-3.5 w-3.5" />
            <span>Executive Chef Sunumu</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
            Kusursuz Bir <span className="italic bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Gastronomi Deneyimi</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Düğün gününüzde davetlilerinize sunulacak her tabak, 5 yıldızlı otel mutfağı standartlarında taze malzemeler ve zarif porselen sunumlarıyla hazırlanır.
          </p>
        </div>

        {/* Menu Tier Switcher */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {menuPackages.map((pkg, idx) => (
            <button
              key={pkg.id}
              onClick={() => setActiveMenuIndex(idx)}
              className={`rounded-full px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider transition-all cursor-pointer ${
                activeMenuIndex === idx
                  ? "bg-gradient-to-r from-amber-400 to-amber-300 text-neutral-950 shadow-[0_0_20px_rgba(217,179,94,0.35)] scale-105"
                  : "border border-white/10 bg-neutral-900 text-neutral-400 hover:text-white"
              }`}
            >
              <span>{pkg.name}</span>
            </button>
          ))}
        </div>

        {/* Active Menu Detail Card */}
        <div className="mt-10 rounded-3xl border border-amber-500/20 bg-neutral-900/60 p-6 sm:p-10 backdrop-blur-xl max-w-4xl mx-auto">
          <div className="text-center border-b border-white/10 pb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {activeMenu.tagline}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mt-2">
              {activeMenu.name}
            </h3>
            <div className="font-serif text-2xl font-bold text-amber-300 mt-2">
              {activeMenu.pricePerPerson.toLocaleString("tr-TR")} ₺ <span className="text-xs font-sans text-neutral-400 font-normal">/ Kişi Başı</span>
            </div>
          </div>

          {/* Courses */}
          <div className="mt-8 space-y-6">
            {activeMenu.courses.map((course, idx) => (
              <div key={idx} className="rounded-2xl border border-white/5 bg-neutral-900/80 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                  {course.title}
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-300">
                  {course.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="rounded-2xl border border-white/5 bg-neutral-900/80 p-5 grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">İçecek İkramı</span>
                <span className="text-neutral-300">{activeMenu.beverage}</span>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">Düğün Pastası</span>
                <span className="text-neutral-300">{activeMenu.cake}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="text-xs text-neutral-400 text-center sm:text-left">
              Çiftlerimiz için <strong className="text-white">4 kişilik ücretsiz menü tadımı</strong> dahildir.
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => openAppointment()}
                className="rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 px-5 py-2.5 text-xs font-bold text-neutral-950 shadow-md hover:brightness-110 active:scale-98 transition-all"
              >
                Menü Tadım Randevusu Al
              </button>
              <Link
                href="/menuler"
                className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white"
              >
                Tüm Menüleri Gör →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

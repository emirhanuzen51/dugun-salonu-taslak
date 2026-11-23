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
    <section className="py-24 sm:py-32 bg-[#f6f3ed] border-t border-amber-900/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-white px-4 py-1.5 text-xs font-bold text-amber-800 uppercase tracking-widest shadow-2xs">
            <UtensilsCrossed className="h-3.5 w-3.5 text-amber-600" />
            <span>Executive Chef Sunumu</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight">
            Kusursuz Bir <span className="italic bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">Gastronomi Deneyimi</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            Düğün gününüzde davetlilerinize sunulacak her tabak, 5 yıldızlı otel mutfağı standartlarında taze malzemeler ve zarif porselen sunumlarıyla hazırlanır.
          </p>
        </div>

        {/* Menu Tier Switcher */}
        <div className="mt-12 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {menuPackages.map((pkg, idx) => (
            <button
              key={pkg.id}
              onClick={() => setActiveMenuIndex(idx)}
              className={`rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold tracking-wider transition-all cursor-pointer ${
                activeMenuIndex === idx
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 shadow-md font-bold scale-105"
                  : "border border-amber-900/15 bg-white text-neutral-700 hover:text-amber-800 shadow-2xs"
              }`}
            >
              <span>{pkg.name}</span>
            </button>
          ))}
        </div>

        {/* Active Menu Detail Card */}
        <div className="mt-10 rounded-3xl border border-amber-900/10 bg-white p-6 sm:p-10 shadow-[0_10px_35px_rgba(180,140,50,0.06)] max-w-4xl mx-auto">
          <div className="text-center border-b border-amber-900/10 pb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              {activeMenu.tagline}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 mt-2">
              {activeMenu.name}
            </h3>
            <p className="text-xs text-neutral-500 mt-2 font-medium">
              {activeMenu.recommendedFor}
            </p>
          </div>

          {/* Courses */}
          <div className="mt-8 space-y-6">
            {activeMenu.courses.map((course, idx) => (
              <div key={idx} className="rounded-2xl border border-amber-900/10 bg-amber-50/40 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-3">
                  {course.title}
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-700">
                  {course.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="rounded-2xl border border-amber-900/10 bg-amber-50/40 p-5 grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">İçecek İkramı</span>
                <span className="text-neutral-700">{activeMenu.beverage}</span>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">Düğün Pastası</span>
                <span className="text-neutral-700">{activeMenu.cake}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-amber-900/10">
            <div className="text-xs text-neutral-600 text-center sm:text-left">
              Çiftlerimiz için <strong className="text-neutral-900">4 kişilik ücretsiz menü tadımı</strong> dahildir.
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => openAppointment(activeMenu.name)}
                className="rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 px-5 py-2.5 text-xs font-bold text-neutral-950 shadow-xs hover:brightness-105 active:scale-98 transition-all cursor-pointer"
              >
                Menü Tadım Randevusu Al
              </button>
              <Link
                href="/menuler"
                className="rounded-xl border border-amber-900/15 bg-white px-4 py-2.5 text-xs font-bold text-neutral-700 hover:text-amber-800 shadow-2xs"
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

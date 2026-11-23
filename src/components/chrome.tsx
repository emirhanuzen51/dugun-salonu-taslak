"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { venueConfig, mainNav } from "@/lib/venue";
import { useIsletmeAdi } from "@/lib/use-isletme-adi";
import { Monogram } from "./icons";
import { useModals } from "./modal-context";
import { salons } from "@/lib/salons";
import { eventConcepts } from "@/lib/concepts";

export function Brand({ light = false }: { light?: boolean }) {
  const currentName = useIsletmeAdi();

  return (
    <Link href="/" className="flex items-center gap-3 group">
      <Monogram className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105" light={light} />
      <div className="leading-tight">
        <span className="block font-serif text-base sm:text-lg font-bold tracking-wide text-neutral-900 group-hover:text-amber-700 transition-colors">
          {currentName}
        </span>
        <span className="block text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-amber-600">
          Lüks Düğün, Balo & Davet
        </span>
      </div>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openAppointment, openCommandPalette } = useModals();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-amber-900/10 bg-white/90 backdrop-blur-xl shadow-[0_4px_25px_rgba(180,140,50,0.08)] py-3"
            : "border-b border-amber-900/5 bg-white/70 backdrop-blur-md py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Brand />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-xs xl:text-sm font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "text-amber-700 font-bold"
                      : "text-neutral-700 hover:text-amber-800"
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 px-1.5 py-0.2 text-[10px] font-bold text-amber-800">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-amber-500 to-amber-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={openCommandPalette}
              aria-label="Arama"
              className="flex items-center gap-2 rounded-xl border border-amber-900/10 bg-amber-50/60 px-3 py-2 text-xs text-neutral-600 hover:border-amber-500/40 hover:text-neutral-900 transition-all shadow-xs cursor-pointer"
            >
              <Search className="h-3.5 w-3.5 text-amber-600" />
              <span className="hidden sm:inline font-medium">Ara</span>
              <kbd className="hidden sm:inline rounded bg-white px-1.5 py-0.5 text-[10px] font-mono text-neutral-500 border border-neutral-200">
                Ctrl K
              </kbd>
            </button>

            {/* Book Tour CTA */}
            <button
              onClick={() => openAppointment()}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-4 py-2 text-xs font-bold text-neutral-950 shadow-[0_2px_15px_rgba(217,179,94,0.35)] hover:brightness-105 active:scale-95 transition-all cursor-pointer"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Salon Turu Ayarla</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menüyü Aç"
              className="lg:hidden rounded-xl border border-amber-900/15 bg-white p-2 text-neutral-900 hover:bg-neutral-50 shadow-xs cursor-pointer"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs border-l border-amber-900/15 bg-white p-6 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-amber-900/10">
                  <Brand />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg p-1.5 text-neutral-500 hover:text-neutral-900"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-6 space-y-1">
                  {mainNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-neutral-800 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4 text-neutral-400" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-amber-900/10 pt-6 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAppointment();
                  }}
                  className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 py-3 text-center text-xs font-bold text-neutral-950 shadow-md"
                >
                  Salon Turu Randevusu Al
                </button>
                <div className="text-center text-xs text-neutral-500">
                  <p>{venueConfig.phone}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  const currentName = useIsletmeAdi();

  return (
    <footer className="border-t border-amber-900/15 bg-[#f6f3ed] text-neutral-900 pt-20 pb-28 sm:pb-16 relative overflow-hidden">
      {/* Decorative Gold Radial Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-400/10 blur-[130px] rounded-full" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 pb-16 border-b border-amber-900/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Brand />
            <p className="text-sm leading-relaxed text-neutral-600">
              {venueConfig.tagline}. {venueConfig.subTagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-800">
                <Sparkles className="h-3 w-3 text-amber-600" />
                2026 Erken Rezervasyon Aktif
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-4">
              Salonlarımız
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-600">
              {salons.map((s) => (
                <li key={s.id}>
                  <Link href={`/salonlarimiz/${s.slug}`} className="hover:text-amber-800 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/salonlarimiz" className="text-amber-700 font-semibold hover:underline">
                  Tümünü Karşılaştır →
                </Link>
              </li>
            </ul>
          </div>

          {/* Konseptler & Menüler */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-4">
              Konseptler & Ayrıcalıklar
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-600">
              <li>
                <Link href="/organizasyon-konseptleri" className="hover:text-amber-800 transition-colors">
                  Organizasyon Konseptleri (7 Konsept)
                </Link>
              </li>
              <li>
                <Link href="/menuler" className="hover:text-amber-800 transition-colors">
                  Gastronomi & Ziyafet Menüleri
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="hover:text-amber-800 transition-colors">
                  Orkestra, 4K Drone & Çiçek Tasarımı
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-amber-800 transition-colors">
                  Düğün Fotoğraf & Video Galerisi
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-amber-800 transition-colors">
                  Hakkımızda & Ekibimiz
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim & Lokasyon */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-4">
              Ziyaret & İletişim
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-neutral-700">
              <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
              <span>{venueConfig.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-neutral-700">
              <Phone className="h-4 w-4 text-amber-600 shrink-0" />
              <a href={`tel:${venueConfig.phoneRaw}`} className="hover:text-amber-800 font-semibold transition-colors">
                {venueConfig.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-neutral-700">
              <Clock className="h-4 w-4 text-amber-600 shrink-0" />
              <span>{venueConfig.workingHours}</span>
            </div>
            <div className="pt-2 text-xs text-neutral-600">
              <p className="border-l-2 border-amber-500/50 pl-3 italic">
                {venueConfig.parkingCapacity}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {currentName}. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <Link href="/kvkk" className="hover:text-neutral-800 transition-colors">
              KVKK & Aydınlatma
            </Link>
            <Link href="/cerez-politikasi" className="hover:text-neutral-800 transition-colors">
              Çerez Politikası
            </Link>
            <Link href="/iletisim" className="hover:text-neutral-800 transition-colors">
              Ulaşım Krokisi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

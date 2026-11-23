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

export function Brand({ light = false }: { light?: boolean }) {
  const currentName = useIsletmeAdi();

  return (
    <Link href="/" className="flex items-center gap-3 group">
      <Monogram className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105" light={light} />
      <div className="leading-tight">
        <span className="block font-serif text-base sm:text-lg font-medium tracking-wide text-white group-hover:text-amber-300 transition-colors">
          {currentName}
        </span>
        <span className="block text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.2em] text-amber-400/90">
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
            ? "border-b border-amber-500/20 bg-neutral-950/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3"
            : "border-b border-white/10 bg-neutral-950/60 backdrop-blur-md py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <Brand />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? "text-amber-300 font-semibold"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 px-1.5 py-0.2 text-[10px] font-bold text-amber-300">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-amber-400 to-amber-200"
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
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900/80 px-3 py-2 text-xs text-neutral-400 hover:border-amber-400/40 hover:text-white transition-all shadow-inner"
            >
              <Search className="h-3.5 w-3.5 text-amber-400" />
              <span className="hidden sm:inline">Ara</span>
              <kbd className="hidden sm:inline rounded bg-neutral-800 px-1.5 py-0.5 text-[10px] font-mono text-neutral-400">
                Ctrl K
              </kbd>
            </button>

            {/* Book Tour CTA */}
            <button
              onClick={() => openAppointment()}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-4 py-2 text-xs font-bold text-neutral-950 shadow-[0_0_20px_rgba(217,179,94,0.3)] hover:brightness-110 active:scale-95 transition-all"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Salon Turu Ayarla</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menüyü Aç"
              className="lg:hidden rounded-xl border border-white/10 bg-neutral-900 p-2 text-white hover:bg-neutral-800"
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
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs border-l border-amber-500/30 bg-neutral-950 p-6 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <Brand />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg p-1.5 text-neutral-400 hover:text-white"
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
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-neutral-200 hover:bg-neutral-900 hover:text-amber-300 transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4 text-neutral-600" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAppointment();
                  }}
                  className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 py-3 text-center text-xs font-bold text-neutral-950 shadow-lg"
                >
                  Salon Turu Randevusu Al
                </button>
                <div className="text-center text-xs text-neutral-400">
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
    <footer className="border-t border-amber-500/20 bg-neutral-950 text-white pt-20 pb-28 sm:pb-16 relative overflow-hidden">
      {/* Decorative Gold Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Brand />
            <p className="text-sm leading-relaxed text-neutral-400">
              {venueConfig.tagline}. {venueConfig.subTagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
                <Sparkles className="h-3 w-3" />
                2026 Erken Rezervasyon Aktif
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
              Salonlarımız
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {salons.map((s) => (
                <li key={s.id}>
                  <Link href={`/salonlarimiz/${s.slug}`} className="hover:text-amber-300 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/salonlarimiz" className="text-amber-400 hover:underline">
                  Tümünü Karşılaştır →
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmetler & Menüler */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
              Konseptler & Ayrıcalıklar
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link href="/organizasyon-konseptleri" className="hover:text-amber-300 transition-colors">
                  Organizasyon Konseptleri (7 Konsept)
                </Link>
              </li>
              <li>
                <Link href="/menuler" className="hover:text-amber-300 transition-colors">
                  Gastronomi & Ziyafet Menüleri
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="hover:text-amber-300 transition-colors">
                  Orkestra, 4K Drone & Çiçek Tasarımı
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-amber-300 transition-colors">
                  Düğün Fotoğraf & Video Galerisi
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-amber-300 transition-colors">
                  Hakkımızda & Ekibimiz
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim & Lokasyon */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
              Ziyaret & İletişim
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-neutral-300">
              <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{venueConfig.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-neutral-300">
              <Phone className="h-4 w-4 text-amber-400 shrink-0" />
              <a href={`tel:${venueConfig.phoneRaw}`} className="hover:text-amber-300 transition-colors">
                {venueConfig.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-neutral-300">
              <Clock className="h-4 w-4 text-amber-400 shrink-0" />
              <span>{venueConfig.workingHours}</span>
            </div>
            <div className="pt-2 text-xs text-neutral-400">
              <p className="border-l-2 border-amber-400/50 pl-3 italic">
                {venueConfig.parkingCapacity}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {currentName}. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <Link href="/kvkk" className="hover:text-neutral-300 transition-colors">
              KVKK & Aydınlatma
            </Link>
            <Link href="/cerez-politikasi" className="hover:text-neutral-300 transition-colors">
              Çerez Politikası
            </Link>
            <Link href="/iletisim" className="hover:text-neutral-300 transition-colors">
              Ulaşım Krokisi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

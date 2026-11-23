"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Camera,
  Compass,
  Crown,
  FileText,
  MapPin,
  Music,
  Phone,
  Search,
  Sparkles,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { venueConfig, mainNav } from "@/lib/venue";
import { useIsletmeAdi } from "@/lib/use-isletme-adi";
import { salons } from "@/lib/salons";
import { services } from "@/lib/services";
import { menuPackages } from "@/lib/menus";
import { eventConcepts } from "@/lib/concepts";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAppointment?: (salon?: string) => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onOpenAppointment,
}: CommandPaletteProps) {
  const router = useRouter();
  const currentName = useIsletmeAdi();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Keyboard escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Search Results
  const filteredResults = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr-TR");

    const quickActions = [
      {
        id: "act-appointment",
        type: "Eylem",
        title: "Salon Turu & Kahve Tadım Randevusu",
        sub: "3 salonumuzu yerinde gezip davet danışmanımızla görüşün",
        icon: Calendar,
        action: () => {
          onClose();
          onOpenAppointment?.();
        },
      },
      {
        id: "act-concepts",
        type: "Eylem",
        title: "Organizasyon Konseptlerini Keşfet",
        sub: "Saray düğünü, kır bahçesi, kına gecesi, nişan ve kurumsal galalar",
        icon: Sparkles,
        action: () => {
          onClose();
          router.push("/organizasyon-konseptleri");
        },
      },
      {
        id: "act-call",
        type: "İletişim",
        title: `Hemen Arayın: ${venueConfig.phone}`,
        sub: "Davet danışmanı ile doğrudan görüşün",
        icon: Phone,
        action: () => {
          window.location.href = `tel:${venueConfig.phoneRaw}`;
        },
      },
    ];

    const conceptResults = eventConcepts.map((c) => ({
      id: `concept-${c.id}`,
      type: "Konsept",
      title: c.title,
      sub: `${c.capacity} • ${c.tagline}`,
      icon: Sparkles,
      action: () => {
        onClose();
        router.push(`/organizasyon-konseptleri/${c.slug}`);
      },
    }));

    const salonResults = salons.map((s) => ({
      id: `salon-${s.id}`,
      type: "Salon",
      title: s.name,
      sub: `${s.capacity} • ${s.area} • ${s.concept}`,
      icon: Crown,
      action: () => {
        onClose();
        router.push(`/salonlarimiz/${s.slug}`);
      },
    }));

    const serviceResults = services.map((s) => ({
      id: `service-${s.id}`,
      type: "Hizmet",
      title: s.title,
      sub: s.lead,
      icon: s.id.includes("orkestra") ? Music : s.id.includes("fotograf") ? Camera : UtensilsCrossed,
      action: () => {
        onClose();
        router.push(`/hizmetler/${s.slug}`);
      },
    }));

    const menuResults = menuPackages.map((m) => ({
      id: `menu-${m.id}`,
      type: "Menü",
      title: m.name,
      sub: `${m.tagline}`,
      icon: UtensilsCrossed,
      action: () => {
        onClose();
        router.push("/menuler");
      },
    }));

    const navResults = mainNav.map((n) => ({
      id: `nav-${n.href}`,
      type: "Sayfa",
      title: n.label,
      sub: `${currentName} resmi sayfası`,
      icon: Compass,
      action: () => {
        onClose();
        router.push(n.href);
      },
    }));

    const all = [...quickActions, ...conceptResults, ...salonResults, ...serviceResults, ...menuResults, ...navResults];

    if (!q) return all.slice(0, 10);

    return all.filter(
      (item) =>
        item.title.toLocaleLowerCase("tr-TR").includes(q) ||
        item.sub.toLocaleLowerCase("tr-TR").includes(q) ||
        item.type.toLocaleLowerCase("tr-TR").includes(q)
    );
  }, [query, currentName, onClose, onOpenAppointment, router]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredResults]);

  const handleSelect = (item: (typeof filteredResults)[0]) => {
    item.action();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredResults.length) % filteredResults.length);
    } else if (e.key === "Enter" && filteredResults[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredResults[selectedIndex]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/45 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-amber-500/25 bg-white text-neutral-900 shadow-[0_20px_60px_rgba(180,140,50,0.18)] z-10"
          >
            <div className="flex items-center gap-3 border-b border-neutral-100 px-5 py-4">
              <Search className="h-5 w-5 text-amber-600 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Konsept, salon, menü veya hizmet arayın..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder-neutral-400 outline-none"
              />
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
              {filteredResults.length === 0 ? (
                <div className="py-12 text-center text-neutral-400">
                  <p className="text-sm">Aradığınız kriterlere uygun sonuç bulunamadı.</p>
                </div>
              ) : (
                filteredResults.map((item, index) => {
                  const Icon = item.icon;
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex w-full items-center gap-3.5 rounded-2xl px-4 py-3 text-left transition-all cursor-pointer ${
                        isSelected
                          ? "bg-amber-50/80 border border-amber-500/30 text-neutral-900 shadow-2xs"
                          : "border border-transparent text-neutral-700 hover:bg-neutral-50"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${
                          isSelected
                            ? "border-amber-400 bg-amber-400 text-neutral-950 shadow-xs"
                            : "border-amber-900/10 bg-amber-50 text-amber-700"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="truncate text-sm font-bold text-neutral-900">
                            {item.title}
                          </span>
                          <span className="rounded-md border border-amber-900/10 bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-800 uppercase">
                            {item.type}
                          </span>
                        </div>
                        <p className="truncate text-xs text-neutral-500 mt-0.5">{item.sub}</p>
                      </div>
                      <ArrowRight
                        className={`h-4 w-4 shrink-0 transition-transform ${
                          isSelected ? "translate-x-1 text-amber-600" : "text-neutral-400"
                        }`}
                      />
                    </button>
                  );
                })
              )}
            </div>

            <div className="flex items-center justify-between border-t border-neutral-100 bg-neutral-50/60 px-5 py-3 text-[11px] text-neutral-500">
              <div className="flex items-center gap-3">
                <span>↑↓ ile Gezin</span>
                <span>•</span>
                <span>Enter ile Seç</span>
                <span>•</span>
                <span>ESC ile Kapat</span>
              </div>
              <span className="text-amber-700 font-bold">{currentName}</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

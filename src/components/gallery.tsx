"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Image as ImageIcon } from "lucide-react";

const galleryCategories = [
  "Tümü",
  "Balo Salonu",
  "Kır Bahçesi",
  "Boğaz Teras",
  "Masa & Çiçek",
  "Gelin Odası",
];

export const galleryItems = [
  {
    id: 1,
    title: "Grand Royal Kristal Avizeler & Sahne",
    category: "Balo Salonu",
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    aspect: "col-span-12 sm:col-span-8 h-80 sm:h-96",
  },
  {
    id: 2,
    title: "Botanica Asırlık Ağaçlar Altında İlk Dans",
    category: "Kır Bahçesi",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    aspect: "col-span-12 sm:col-span-4 h-80 sm:h-96",
  },
  {
    id: 3,
    title: "Hollanda İthal Şakayık & Canlı Çiçek Tasarımı",
    category: "Masa & Çiçek",
    src: "https://images.unsplash.com/photo-1519225424984-6330058b731d?auto=format&fit=crop&w=1200&q=80",
    aspect: "col-span-12 sm:col-span-4 h-80",
  },
  {
    id: 4,
    title: "Panorama Teras Gün Batımı Kokteyli",
    category: "Boğaz Teras",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    aspect: "col-span-12 sm:col-span-4 h-80",
  },
  {
    id: 5,
    title: "VIP Gelin Süiti Hazırlık & Jakuzi",
    category: "Gelin Odası",
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    aspect: "col-span-12 sm:col-span-4 h-80",
  },
  {
    id: 6,
    title: "Görkemli Çok Katlı Şeker Hamursuz Düğün Pastası",
    category: "Masa & Çiçek",
    src: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1200&q=80",
    aspect: "col-span-12 sm:col-span-6 h-80",
  },
  {
    id: 7,
    title: "Sis & Lazer Şovları Eşliğinde After Party",
    category: "Boğaz Teras",
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    aspect: "col-span-12 sm:col-span-6 h-80",
  },
];

export function GallerySection() {
  const [selectedCat, setSelectedCat] = useState("Tümü");

  const filtered = selectedCat === "Tümü"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCat);

  return (
    <section className="py-24 sm:py-32 bg-neutral-950 border-t border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-neutral-900/80 px-4 py-1.5 text-xs font-semibold text-amber-300 uppercase tracking-widest">
            <ImageIcon className="h-3.5 w-3.5" />
            <span>Unutulmaz Anlar</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
            Masalsı Karelerle <span className="italic bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Lüks Galeri</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Salonlarımızda gerçekleşen düğünlerden gerçek fotoğraflar, masa süslemeleri ve görsel şölenler.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-all cursor-pointer ${
                selectedCat === cat
                  ? "bg-amber-400 text-neutral-950 font-bold shadow-md"
                  : "border border-white/10 bg-neutral-900 text-neutral-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Bento Grid */}
        <div className="mt-12 grid grid-cols-12 gap-4 sm:gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl group border border-white/10 ${item.aspect}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="rounded-md bg-amber-400/90 text-neutral-950 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider inline-block mb-1">
                  {item.category}
                </span>
                <h4 className="text-sm font-semibold text-white drop-shadow-md">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-neutral-900 px-6 py-2.5 text-xs font-semibold text-amber-300 hover:border-amber-400 hover:text-white transition-all shadow-md"
          >
            <span>Tüm Fotoğraf & Video Albümünü Aç</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

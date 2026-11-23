import Link from "next/link";
import { ArrowLeft, Crown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 pt-32 pb-20 text-center">
      <div className="max-w-md mx-auto">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-400 mb-6">
          <Crown className="h-8 w-8" />
        </div>
        <span className="block font-serif text-6xl font-bold text-amber-400">404</span>
        <h1 className="mt-4 font-serif text-3xl font-normal text-white">Sayfa Bulunamadı</h1>
        <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
          Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı kalmış olabilir.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 px-6 py-3 text-xs font-bold text-neutral-950 shadow-md hover:brightness-110 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Ana Sayfaya Dön</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

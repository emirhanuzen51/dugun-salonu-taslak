import type { Metadata } from "next";
import { BudgetCalculator } from "@/components/budget-calculator";
import { venueConfig } from "@/lib/venue";
import { PageHero } from "@/components/motion";

export const metadata: Metadata = {
  title: `Canlı Düğün Bütçesi Hesaplayıcı | ${venueConfig.defaultName}`,
  description: "Kişi sayısı, salon, menü ve ayrıcalıklı ekstralarınızı seçerek 2026 düğününüzün bütçesini anında canlı olarak hesaplayın.",
};

export default function BudgetCalculatorPage() {
  return (
    <main>
      <PageHero
        badge="Şeffaf & Canlı Fiyatlandırma"
        title="Düğün Masraflarınızı Saniyeler İçinde Hesaplayın"
        description="Sürpriz ek maliyetler olmadan, kişi sayısı kaydırıcısı ve menü seçenekleriyle davet bütçenizi önceden planlayın ve tek tıkla teklif alın."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85"
      />

      <div className="bg-neutral-950">
        <BudgetCalculator />
      </div>
    </main>
  );
}

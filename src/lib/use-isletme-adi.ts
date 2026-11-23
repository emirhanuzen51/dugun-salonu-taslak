"use client";

import { useEffect, useState } from "react";

/**
 * Dinamik İşletme Adı Hook'u:
 * URL parametresi (?ad=Saray-Davet) girildiğinde sitedeki tüm başlıklar,
 * logolar, doküman başlığı ve WhatsApp yönlendirmeleri dinamik olarak güncellenir.
 */
export function useIsletmeAdi(varsayilanAd = "Lumina Grand Davet & Balo") {
  const [isletmeAdi, setIsletmeAdi] = useState(varsayilanAd);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const adParam = params.get("ad");

    if (adParam) {
      const temizAd = decodeURIComponent(adParam).replace(/-/g, " ").trim();
      if (temizAd) {
        setIsletmeAdi(temizAd);
        document.title = `${temizAd} | Lüks Düğün, Balo & Davet`;
      }
    }
  }, [varsayilanAd]);

  return isletmeAdi;
}

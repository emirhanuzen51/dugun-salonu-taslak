"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="tr">
      <body className="bg-stone-50 text-stone-900 flex min-h-screen items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-4">
          <h2 className="text-2xl font-serif font-bold text-stone-800">Beklenmedik Bir Hata Oluştu</h2>
          <p className="text-sm text-stone-600">
            Lütfen sayfayı yenilemeyi deneyin veya ana sayfaya dönün.
          </p>
          <button
            onClick={() => reset()}
            className="rounded-full bg-amber-600 px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-amber-700"
          >
            Yeniden Dene
          </button>
        </div>
      </body>
    </html>
  );
}

import React from "react";

export function Monogram({
  className = "h-10 w-10",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-xl border transition-all duration-300 ${
        light
          ? "border-amber-400/50 bg-white/95 text-amber-700 shadow-sm"
          : "border-amber-500/30 bg-gradient-to-br from-amber-50 via-white to-amber-100/70 text-amber-700 shadow-xs"
      } ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3/4 w-3/4"
      >
        {/* Crown & Royal Wreath Accent */}
        <path
          d="M30 38L50 22L70 38L62 48H38L30 38Z"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinejoin="round"
          className="opacity-90"
        />
        <circle cx="50" cy="18" r="3.5" fill="currentColor" />
        <circle cx="30" cy="35" r="2.5" fill="currentColor" />
        <circle cx="70" cy="35" r="2.5" fill="currentColor" />

        {/* Monogram Intertwined L & G */}
        <path
          d="M38 52V76H56"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M64 56C62 53 58 52 53 52C46 52 42 57 42 64C42 71 47 76 54 76C61 76 65 72 65 67H53"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function LuxuryCrown({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  );
}

export function WeddingRings({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="9" cy="12" r="6" />
      <circle cx="15" cy="12" r="6" />
      <path d="M9 6l1.5-2h-3L9 6z" fill="currentColor" />
    </svg>
  );
}

export function ChampagneGlasses({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 22h8M12 15v7M8 2h8l-2 9a4 4 0 01-4 4 4 4 0 01-4-4L8 2z" />
    </svg>
  );
}

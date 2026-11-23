"use client";

import { useEffect, type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return null;
}

export const easeCustom = [0.16, 1, 0.3, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.7, delay, ease: easeCustom }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: easeCustom }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionBadge({
  children,
  number,
}: {
  children: ReactNode;
  number?: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-amber-300 uppercase">
      {number && (
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-black">
          {number}
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}

export function PageHero({
  badge,
  title,
  description,
  image,
}: {
  badge: string;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28 border-b border-white/10 bg-neutral-950">
      {/* Background with Dark/Gold Overlay */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover opacity-20 filter blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/95 to-neutral-950" />
        </div>
      )}

      {/* Decorative Gold Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-neutral-900/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-widest text-amber-300 uppercase shadow-lg">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            {badge}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-6 font-serif text-3xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
            {title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

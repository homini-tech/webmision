"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "./icons";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#0a0a08] text-bone"
    >
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/img/fachada.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080699] via-[#08080626] to-[#080806d9]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/img/logo-white.png"
            alt="Misión — Ciudad Vieja"
            width={520}
            height={257}
            priority
            className="mb-7 h-auto w-[min(78vw,520px)]"
          />
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-prose2 text-base leading-relaxed text-bone/90 md:text-lg"
        >
          Vivir el corazón histórico de Montevideo, desde otra perspectiva.
          Monoambientes y unidades de 1 dormitorio con terrazas de uso exclusivo,
          sobre la renovada calle Rincón.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-bone px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-white"
          >
            Solicitar información
            <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#residencias"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-bone/30 px-7 py-3.5 text-sm font-medium text-bone transition-colors hover:border-bone/70"
          >
            Ver unidades
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-bone/50 md:flex">
        <span className="text-[10px] uppercase tracking-widest2">Descubrir</span>
        <span className="h-10 w-px animate-pulse bg-bone/40" />
      </div>
    </section>
  );
}

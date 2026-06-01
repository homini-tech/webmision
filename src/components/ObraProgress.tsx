"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { obra } from "@/data/project";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";

export function ObraProgress() {
  const [index, setIndex] = useState(0);
  const total = obra.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + total) % total),
    [total]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const current = obra[index];

  return (
    <section id="avance-obra" className="grain relative overflow-hidden bg-ink py-24 text-bone md:py-32">
      <div aria-hidden className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-clay/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal as="div" className="max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-widest2 text-clay">
            <span className="h-px w-10 bg-clay" />
            Avance de obra
          </p>
          <h2 className="font-display text-4xl font-light leading-tight tracking-tight md:text-6xl">
            La obra, en marcha
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-bone/70">
            Seguí la evolución del reciclaje del Edificio Rincón. Imágenes reales
            del avance de la construcción.
          </p>
        </Reveal>

        <Reveal as="div" className="mt-12">
          {/* Visor principal */}
          <div className="relative overflow-hidden rounded-2xl border border-bone/10 bg-black/30">
            <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.src}
                    alt={current.caption}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1100px"
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Contador */}
              <div className="absolute left-4 top-4 rounded-full bg-ink/80 px-4 py-1.5 font-display text-lg tracking-wide text-bone">
                {String(index + 1).padStart(2, "0")}
                <span className="text-bone/50"> / {String(total).padStart(2, "0")}</span>
              </div>

              {/* Flechas */}
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-bone/10 p-2.5 text-bone backdrop-blur transition-colors hover:bg-bone/25"
              >
                <Icon.chevronL />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Imagen siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-bone/10 p-2.5 text-bone backdrop-blur transition-colors hover:bg-bone/25"
              >
                <Icon.chevronR />
              </button>
            </div>

            {/* Pie con descripción */}
            <div className="border-t border-bone/10 bg-ink/60 px-5 py-4">
              <h3 className="font-display text-xl text-bone">{current.caption}</h3>
              <p className="mt-1 text-sm text-bone/65">{current.detail}</p>
            </div>
          </div>

          {/* Miniaturas numeradas */}
          <div className="mt-5 grid grid-cols-5 gap-3">
            {obra.map((o, i) => (
              <button
                key={o.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ver imagen ${i + 1}: ${o.caption}`}
                aria-current={i === index}
                className={`group relative aspect-[4/3] overflow-hidden rounded-lg border transition-colors ${
                  i === index ? "border-clay" : "border-bone/10 hover:border-bone/40"
                }`}
              >
                <Image
                  src={o.src}
                  alt=""
                  fill
                  sizes="20vw"
                  className={`object-cover transition-opacity ${
                    i === index ? "opacity-100" : "opacity-50 group-hover:opacity-80"
                  }`}
                />
                <span className="absolute left-1.5 top-1.5 rounded bg-ink/80 px-1.5 text-[11px] font-medium text-bone">
                  {i + 1}
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

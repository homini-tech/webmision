"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { gallery } from "@/data/project";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const go = useCallback(
    (dir: number) => {
      setIndex((i) =>
        i === null ? i : (i + dir + gallery.length) % gallery.length
      );
    },
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go]);

  return (
    <section id="galeria" className="bg-sand/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal as="div" className="max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-widest2 text-clay">
            <span className="h-px w-10 bg-clay" />
            Galería
          </p>
          <h2 className="font-display text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl">
            Espacios para vivir
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            Recorré los renders de la fachada, los interiores y los amenities del
            proyecto. Las plantas de cada unidad están disponibles en la sección
            Residencias.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[240px]">
          {gallery.map((g, i) => (
            <Reveal
              as="div"
              key={g.src}
              delay={(i % 4) * 0.05}
              className={`group relative overflow-hidden rounded-xl bg-white ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="absolute inset-0 h-full w-full"
                aria-label={`Ampliar: ${g.caption}`}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes={i === 0 ? "(max-width:768px) 100vw, 50vw" : "(max-width:768px) 50vw, 25vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4 text-left text-sm font-medium text-bone opacity-0 transition-opacity group-hover:opacity-100">
                  {g.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && index !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={gallery[index].caption}
          >
            <button
              type="button"
              onClick={() => setIndex(null)}
              aria-label="Cerrar galería"
              className="absolute right-4 top-4 rounded-full bg-bone/10 p-2 text-bone hover:bg-bone/20"
            >
              <Icon.close />
            </button>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Anterior"
              className="absolute left-3 rounded-full bg-bone/10 p-2 text-bone hover:bg-bone/20 md:left-8"
            >
              <Icon.chevronL />
            </button>
            <motion.figure
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[82vh] w-full max-w-5xl"
            >
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={gallery[index].src}
                  alt={gallery[index].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-bone/80">
                {gallery[index].caption} · {index + 1}/{gallery.length}
              </figcaption>
            </motion.figure>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Siguiente"
              className="absolute right-3 rounded-full bg-bone/10 p-2 text-bone hover:bg-bone/20 md:right-8"
            >
              <Icon.chevronR />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

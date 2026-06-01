"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { units, formatUSD, financing, type Unit } from "@/data/project";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";

const filters = ["Todas", "Monoambiente", "1 Dormitorio"] as const;
type Filter = (typeof filters)[number];

/** Color del badge de orientación según su valor. */
function orientationStyle(orientation: string): string {
  const o = orientation.toLowerCase();
  if (o.includes("contrafrente"))
    return "bg-[#0f5544]/10 text-[#0f5544] ring-[#0f5544]/25";
  if (o.includes("frente"))
    return "bg-clay/15 text-[#8a6328] ring-clay/30";
  // Pasante u otros
  return "bg-ink/10 text-ink ring-ink/20";
}

function UnitCard({ unit, onOpen }: { unit: Unit; onOpen: (u: Unit) => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white"
    >
      <button
        type="button"
        onClick={() => onOpen(unit)}
        className="relative aspect-[4/3] overflow-hidden bg-sand"
        aria-label={`Ver plano de ${unit.name}`}
      >
        <Image
          src={unit.plan}
          alt={`Plano de ${unit.name} — ${unit.type}, ${unit.built} m² construidos`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-bone">
          {unit.type}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-xl text-ink">{unit.name}</h3>
          <span className="text-xs uppercase tracking-wider text-stone">
            {unit.level}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-ink px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-bone">
            {unit.type}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ring-1 ${orientationStyle(
              unit.orientation
            )}`}
          >
            <Icon.pin className="h-3.5 w-3.5" />
            {unit.orientation}
          </span>
        </div>

        <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-ink/10 pt-4 text-center">
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-stone">Const.</dt>
            <dd className="font-display text-lg text-ink">{unit.built}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-stone">Exterior</dt>
            <dd className="font-display text-lg text-ink">{unit.exterior}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-stone">Total</dt>
            <dd className="font-display text-lg text-clay">{unit.total}</dd>
          </div>
        </dl>
        <p className="mt-1 text-center text-[10px] uppercase tracking-wider text-stone/70">
          metros cuadrados
        </p>

        <div className="mt-4 flex items-baseline justify-center gap-2 rounded-xl bg-sand/40 py-2.5">
          {unit.priceFrom ? (
            <>
              <span className="text-[11px] uppercase tracking-wider text-stone">Desde</span>
              <span className="font-display text-2xl text-ink">
                {formatUSD(unit.priceFrom)}
              </span>
            </>
          ) : (
            <span className="text-sm font-medium text-stone">Consultar disponibilidad</span>
          )}
        </div>

        <button
          type="button"
          onClick={() => onOpen(unit)}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bone"
        >
          Ver plano <Icon.arrow className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  );
}

export function Residences() {
  const [active, setActive] = useState<Filter>("Todas");
  const [modal, setModal] = useState<Unit | null>(null);
  const [zoom, setZoom] = useState(false);

  const openModal = (u: Unit) => {
    setZoom(false);
    setModal(u);
  };

  const visible = useMemo(
    () => (active === "Todas" ? units : units.filter((u) => u.type === active)),
    [active]
  );

  const counts = useMemo(
    () => ({
      Todas: units.length,
      Monoambiente: units.filter((u) => u.type === "Monoambiente").length,
      "1 Dormitorio": units.filter((u) => u.type === "1 Dormitorio").length,
    }),
    []
  );

  return (
    <section id="residencias" className="bg-sand/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal as="div" className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-widest2 text-clay">
              <span className="h-px w-10 bg-clay" />
              Residencias
            </p>
            <h2 className="font-display text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl">
              Tipologías y metrajes
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone">
              Unidades cuidadosamente distribuidas en siete niveles, con
              expansiones al exterior y plantas penthouse de gran terraza.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar tipologías"
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === f
                    ? "bg-ink text-bone"
                    : "border border-ink/20 text-ink hover:border-ink/50"
                }`}
              >
                {f}{" "}
                <span className="opacity-60">({counts[f]})</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((u) => (
              <UnitCard key={u.id} unit={u} onOpen={openModal} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-ink/10 bg-sand/30 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-xl text-ink">Financiación</h3>
            <p className="mt-1 text-sm text-stone">{financing.terms.join(" · ")}</p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bone transition-colors hover:bg-deep"
          >
            Consultar precios y disponibilidad <Icon.arrow className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-stone/70">
          {financing.note} Información preliminar sujeta a ajustes del Proyecto
          Definitivo. Las medidas definitivas surgirán del plano del Ing.
          Agrimensor. Imágenes y equipamiento de carácter ilustrativo.
        </p>
      </div>

      {/* Modal plano */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Plano de ${modal.name}`}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-ink/10 px-6 py-4">
                <div>
                  <h3 className="font-display text-xl text-ink">{modal.name}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-ink px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-bone">
                      {modal.type}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ring-1 ${orientationStyle(
                        modal.orientation
                      )}`}
                    >
                      <Icon.pin className="h-3.5 w-3.5" />
                      {modal.orientation}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-stone">
                      {modal.level} · {modal.total} m² totales
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  aria-label="Cerrar"
                  className="rounded-full p-2 text-ink hover:bg-ink/5"
                >
                  <Icon.close />
                </button>
              </div>
              <div
                className={`relative max-h-[62vh] overflow-auto bg-bone ${
                  zoom ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
                onClick={() => setZoom((z) => !z)}
              >
                <img
                  src={modal.planHd}
                  alt={`Plano detallado de ${modal.name}`}
                  className={`mx-auto transition-transform duration-300 ${
                    zoom ? "w-[180%] max-w-none sm:w-[150%]" : "w-full"
                  }`}
                />
                <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-medium text-bone">
                  {zoom ? "Tocá para reducir" : "Tocá para ampliar"}
                </span>
              </div>
              <div className="flex flex-col gap-3 border-t border-ink/10 p-6 sm:flex-row sm:items-center sm:justify-between">
                <dl className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone">
                  <div><dt className="text-xs uppercase">Construida</dt><dd className="font-medium text-ink">{modal.built} m²</dd></div>
                  <div><dt className="text-xs uppercase">Exterior</dt><dd className="font-medium text-ink">{modal.exterior} m²</dd></div>
                  <div><dt className="text-xs uppercase">Comunes</dt><dd className="font-medium text-ink">{modal.common} m²</dd></div>
                  <div><dt className="text-xs uppercase">Desde</dt><dd className="font-medium text-clay">{modal.priceFrom ? formatUSD(modal.priceFrom) : "Consultar"}</dd></div>
                </dl>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={modal.planHd}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bone"
                  >
                    Descargar plano <Icon.download className="h-4 w-4" />
                  </a>
                  <a
                    href="#contacto"
                    onClick={() => setModal(null)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-bone"
                  >
                    Consultar <Icon.arrow className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

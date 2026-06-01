import Image from "next/image";
import { project, highlights, specs, terminaciones, exoneraciones } from "@/data/project";
import { Reveal } from "./Reveal";

export function ProjectSection() {
  return (
    <section id="proyecto" className="relative bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal as="div" className="max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-widest2 text-clay">
            <span className="h-px w-10 bg-clay" />
            El proyecto
          </p>
          <h2 className="font-display text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl">
            Una nueva vida en el casco histórico
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone">
            {project.longDescription}
          </p>
        </Reveal>

        <Reveal as="div" className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand lg:order-2">
            <Image
              src="/img/int-living.webp"
              alt="Interior de un departamento de Misión con living luminoso y terraza con vista al puerto"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="lg:order-1">
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-widest2 text-clay">
              <span className="h-px w-10 bg-clay" />
              Diseño y arquitectura
            </p>
            <h3 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
              Patrimonio que mira al futuro
            </h3>
            <p className="mt-5 leading-relaxed text-stone">
              Un edificio de escala humana que dialoga con el tejido histórico de
              la calle Rincón. Plantas eficientes, techos altos con instalaciones
              a la vista, grandes ventanales y materiales nobles: hormigón, madera
              y verde en cada nivel.
            </p>
            <p className="mt-4 leading-relaxed text-stone">
              El proyecto incorpora vegetación en su fachada y expansiones
              exteriores en prácticamente todas las unidades, culminando en
              penthouses con terrazas de gran metraje y parrillero propio.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal
              key={h.title}
              as="article"
              delay={i * 0.06}
              className="bg-bone p-8 md:p-10"
            >
              <h3 className="font-display text-2xl font-normal text-ink">
                {h.title}
              </h3>
              <p className="mt-3 leading-relaxed text-stone">{h.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Ficha técnica */}
        <Reveal as="div" className="mt-16">
          <h3 className="mb-6 font-display text-2xl text-ink">Ficha técnica</h3>
          <dl className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {specs.map((s) => (
              <div key={s.label} className="border-t border-ink/15 pt-4">
                <dt className="text-xs uppercase tracking-wider text-stone">
                  {s.label}
                </dt>
                <dd className="mt-1 text-[15px] font-medium text-ink">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-16">
          <Reveal as="div">
            <h3 className="mb-5 font-display text-2xl text-ink">
              Terminaciones de calidad
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {terminaciones.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-stone">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Exoneraciones fiscales — bloque destacado */}
        <Reveal as="div" className="mt-14">
          <div className="grain relative overflow-hidden rounded-3xl bg-deep p-8 text-bone md:p-12">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2f7d68]/25 blur-[110px]"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-widest2 text-[#7bbfa9]">
                  <span className="h-px w-10 bg-[#7bbfa9]" />
                  Beneficio fiscal
                </p>
                <h3 className="font-display text-3xl font-light leading-tight md:text-5xl">
                  Exoneraciones de la Ley de Vivienda Promovida
                </h3>
                <p className="mt-5 max-w-prose2 text-bone/70">
                  Una oportunidad de inversión con importantes beneficios
                  impositivos durante 10 años.
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {exoneraciones.map((e) => (
                  <li
                    key={e}
                    className="flex items-start gap-3 rounded-2xl border border-bone/10 bg-bone/[0.04] p-5"
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2f7d68] text-bone">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M5 12l4 4L19 7" /></svg>
                    </span>
                    <span className="text-[15px] leading-snug text-bone/90">{e}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="relative mt-10 border-t border-bone/10 pt-6 font-display text-xl italic text-bone/85 md:text-2xl">
              REM y Cipia se unen para darle a Ciudad Vieja un proyecto del nivel
              que su futuro merece.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

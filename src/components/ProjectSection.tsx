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

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Reveal as="div">
            <h3 className="mb-5 font-display text-2xl text-ink">
              Terminaciones de calidad
            </h3>
            <ul className="flex flex-col gap-3">
              {terminaciones.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-stone">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div">
            <h3 className="mb-5 font-display text-2xl text-ink">
              Exoneraciones fiscales
            </h3>
            <p className="mb-4 text-sm text-stone">
              Proyecto amparado en la Ley de Vivienda Promovida:
            </p>
            <ul className="flex flex-col gap-3">
              {exoneraciones.map((e) => (
                <li key={e} className="flex gap-3 text-[15px] leading-relaxed text-stone">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                  {e}
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl bg-sand/50 px-4 py-3 text-sm text-ink">
              REM y Cipia se unen para darle a Ciudad Vieja un proyecto del nivel
              que su futuro merece.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

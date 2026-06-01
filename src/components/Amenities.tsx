import Image from "next/image";
import { amenities, amenityFeatures } from "@/data/project";
import { Icon, type IconName } from "./icons";
import { Reveal } from "./Reveal";

export function Amenities() {
  return (
    <section id="amenities" className="grain relative overflow-hidden bg-ink py-24 text-bone md:py-32">
      <div aria-hidden className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-clay/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal as="div" className="max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-widest2 text-clay">
            <span className="h-px w-10 bg-clay" />
            Amenities
          </p>
          <h2 className="font-display text-4xl font-light leading-tight tracking-tight md:text-6xl">
            Espacios para vivir, trabajar y compartir
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-bone/70">
            Un subsuelo de bienestar y una azotea con vistas: el complemento
            ideal para la vida urbana en Ciudad Vieja.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {amenityFeatures.map((f, i) => (
            <Reveal
              key={f.title}
              as="article"
              delay={i * 0.08}
              className="group relative aspect-[3/2] overflow-hidden rounded-2xl"
            >
              <Image
                src={f.src}
                alt={`${f.title} de Misión — ${f.sub}`}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080806d9] to-transparent p-5">
                <h3 className="font-display text-2xl">{f.title}</h3>
                <p className="text-xs uppercase tracking-wider text-bone/70">{f.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((a, i) => {
            const Glyph = Icon[a.icon as IconName];
            return (
              <Reveal
                key={a.key}
                as="article"
                delay={(i % 4) * 0.05}
                className="group bg-ink p-7 transition-colors hover:bg-deep"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-clay/40 text-clay transition-colors group-hover:bg-clay group-hover:text-ink">
                  <Glyph className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/65">
                  {a.detail}
                </p>
                <p className="mt-3 text-xs uppercase tracking-wider text-clay/80">
                  {a.area}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

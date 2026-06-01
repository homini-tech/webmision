import Image from "next/image";
import { team } from "@/data/project";
import { Reveal } from "./Reveal";

export function Team() {
  return (
    <section id="equipo" className="grain relative overflow-hidden bg-ink py-24 text-bone md:py-32">
      <div aria-hidden className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-clay/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal as="div" className="max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-widest2 text-clay">
            <span className="h-px w-10 bg-clay" />
            Quiénes hacen Misión
          </p>
          <h2 className="font-display text-4xl font-light leading-tight tracking-tight md:text-6xl">
            Respaldo y trayectoria
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-bone/70">
            REM y Cipia se unen para darle a Ciudad Vieja un proyecto del nivel
            que su futuro merece.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {team.map((t, i) => (
            <Reveal
              key={t.name}
              as="article"
              delay={i * 0.08}
              className="flex flex-col rounded-2xl border border-bone/10 bg-bone/[0.04] p-8"
            >
              <p className="text-xs uppercase tracking-widest2 text-clay">{t.role}</p>
              <div className="mt-5 flex h-16 items-center">
                {t.logo ? (
                  <Image
                    src={t.logo}
                    alt={`Logo de ${t.name}`}
                    width={200}
                    height={64}
                    loading="eager"
                    unoptimized
                    className="h-9 w-auto object-contain object-left"
                  />
                ) : (
                  <h3 className="font-display text-2xl text-bone">{t.name}</h3>
                )}
              </div>
              <p className="mt-3 flex-1 leading-relaxed text-bone/65">
                {t.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

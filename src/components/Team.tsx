import { team } from "@/data/project";
import { Reveal } from "./Reveal";

export function Team() {
  return (
    <section id="equipo" className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal as="div" className="max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-widest2 text-clay">
            <span className="h-px w-10 bg-clay" />
            Quiénes hacen Misión
          </p>
          <h2 className="font-display text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl">
            Respaldo y trayectoria
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            Un equipo profesional detrás de cada decisión, del concepto
            arquitectónico a la entrega.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {team.map((t, i) => (
            <Reveal
              key={t.name}
              as="article"
              delay={i * 0.08}
              className="flex flex-col rounded-2xl border border-ink/10 bg-white p-8"
            >
              <p className="text-xs uppercase tracking-widest2 text-clay">
                {t.role}
              </p>
              <h3 className="mt-3 font-display text-2xl text-ink">{t.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-stone">
                {t.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

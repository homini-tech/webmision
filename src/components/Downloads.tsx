import { downloads } from "@/data/project";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";

export function Downloads() {
  return (
    <section id="descargas" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal as="div" className="max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-widest2 text-clay">
            <span className="h-px w-10 bg-clay" />
            Material
          </p>
          <h2 className="font-display text-3xl font-light leading-tight tracking-tight text-ink md:text-5xl">
            Descargá el brochure y las plantas
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {downloads.map((d, i) => (
            <Reveal
              key={d.title}
              as="article"
              delay={i * 0.08}
              className="flex items-center gap-5 rounded-2xl border border-ink/12 bg-bone p-6"
            >
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink text-bone">
                <Icon.download className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-xl text-ink">{d.title}</h3>
                <p className="text-sm text-stone">{d.desc}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-stone/70">
                  {d.size}
                </p>
              </div>
              <a
                href={d.href}
                download
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bone"
              >
                Descargar
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

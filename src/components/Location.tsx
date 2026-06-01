import { project, pointsOfInterest } from "@/data/project";
import { Icon, type IconName } from "./icons";
import { Reveal } from "./Reveal";

export function Location() {
  const query = encodeURIComponent("Rincón 467, Montevideo, Uruguay");
  // Google Maps embed sin API key (modo "place" público)
  const mapSrc = `https://www.google.com/maps?q=${query}&hl=es&z=16&output=embed`;
  const directions = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <section id="ubicacion" className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal as="div" className="max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-widest2 text-clay">
            <span className="h-px w-10 bg-clay" />
            Ubicación
          </p>
          <h2 className="font-display text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl">
            Ciudad Vieja, oportunidad nueva
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            Sobre la calle Rincón —hoy semipeatonal— a metros de la Plaza Matriz,
            el Teatro Solís y el Mercado del Puerto. Todo a pie.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal as="div" className="overflow-hidden rounded-2xl border border-ink/10">
            <iframe
              title={`Mapa de ${project.name} en ${project.address.neighborhood}, ${project.address.city}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full md:h-[460px]"
            />
            <div className="flex items-center justify-between gap-4 bg-white px-5 py-4">
              <p className="flex items-center gap-2 text-sm text-ink">
                <Icon.pin className="h-5 w-5 text-clay" />
                {project.address.street}, {project.address.neighborhood},{" "}
                {project.address.city}
              </p>
              <a
                href={directions}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-sm font-medium text-clay underline-offset-4 hover:underline"
              >
                Abrir en Google Maps
              </a>
            </div>
          </Reveal>

          <Reveal as="div" className="flex flex-col gap-3">
            <h3 className="font-display text-xl text-ink">Cerca de todo</h3>
            <ul className="flex flex-col gap-3">
              {pointsOfInterest.map((p) => {
                const Glyph = Icon[p.icon as IconName];
                return (
                  <li
                    key={p.name}
                    className="flex items-center gap-4 rounded-xl border border-ink/10 bg-white px-4 py-3.5"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand text-ink">
                      <Glyph className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-medium text-ink">{p.name}</span>
                      <span className="text-xs uppercase tracking-wider text-stone">
                        {p.category}
                      </span>
                    </span>
                    <span className="text-sm font-medium text-clay">{p.minutes}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

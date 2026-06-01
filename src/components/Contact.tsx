"use client";

import { useState } from "react";
import { project, whatsappUrl } from "@/data/project";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Cualquiera",
    message: "",
  });

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      // PLACEHOLDER: conectar a endpoint real (/api/lead, CRM o servicio de email).
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", interest: "Cualquiera", message: "" });
    } catch {
      // Fallback: abre el cliente de correo para no perder el lead.
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-stone/50 focus:border-clay";

  return (
    <section id="contacto" className="grain relative overflow-hidden bg-deep py-24 text-bone md:py-32">
      <div aria-hidden className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-clay/15 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal as="div">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-widest2 text-clay">
            <span className="h-px w-10 bg-clay" />
            Contacto
          </p>
          <h2 className="font-display text-4xl font-light leading-tight tracking-tight md:text-6xl">
            Solicitá asesoramiento
          </h2>
          <p className="mt-5 max-w-prose2 text-lg leading-relaxed text-bone/70">
            Dejanos tus datos y un asesor te contactará con disponibilidad,
            precios y condiciones de financiación.
          </p>

          <ul className="mt-8 flex flex-col gap-4 text-bone/80">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-bone"
              >
                <Icon.whatsapp className="h-5 w-5 text-clay" />
                {project.whatsapp.displayLabel}
              </a>
            </li>
            <li className="inline-flex items-center gap-3">
              <Icon.pin className="h-5 w-5 text-clay" />
              {project.address.street}, {project.address.neighborhood},{" "}
              {project.address.city}
            </li>
          </ul>
        </Reveal>

        <Reveal as="div" delay={0.1}>
          {status === "success" ? (
            <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-clay/30 bg-ink/40 p-10">
              <h3 className="font-display text-3xl text-bone">¡Gracias!</h3>
              <p className="mt-3 text-bone/75">
                Recibimos tu consulta. Te contactaremos a la brevedad.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-clay underline-offset-4 hover:underline"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-bone/10 bg-ink/40 p-6 md:p-8"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="mb-1.5 block text-sm text-bone/80">
                    Nombre completo
                  </label>
                  <input
                    id="name" name="name" type="text" required autoComplete="name"
                    value={form.name} onChange={update("name")}
                    className={inputClass} placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-bone/80">
                    Email
                  </label>
                  <input
                    id="email" name="email" type="email" required autoComplete="email"
                    value={form.email} onChange={update("email")}
                    className={inputClass} placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm text-bone/80">
                    Teléfono
                  </label>
                  <input
                    id="phone" name="phone" type="tel" autoComplete="tel"
                    value={form.phone} onChange={update("phone")}
                    className={inputClass} placeholder="+598 ..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="interest" className="mb-1.5 block text-sm text-bone/80">
                    Me interesa
                  </label>
                  <select
                    id="interest" name="interest"
                    value={form.interest} onChange={update("interest")}
                    className={inputClass}
                  >
                    <option>Cualquiera</option>
                    <option>Monoambiente</option>
                    <option>1 Dormitorio</option>
                    <option>Unidad con terraza (Nivel 7)</option>
                    <option>Local comercial</option>
                    <option>Inversión</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm text-bone/80">
                    Mensaje <span className="text-bone/40">(opcional)</span>
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    value={form.message} onChange={update("message")}
                    className={inputClass} placeholder="Contanos qué estás buscando"
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="mt-4 rounded-lg bg-clay/15 px-4 py-3 text-sm text-bone">
                  No pudimos enviar el formulario automáticamente.{" "}
                  <a
                    className="underline"
                    href={`mailto:${project.contact.email}?subject=Consulta%20${project.name}&body=${encodeURIComponent(
                      `Nombre: ${form.name}\nEmail: ${form.email}\nTel: ${form.phone}\nInterés: ${form.interest}\n\n${form.message}`
                    )}`}
                  >
                    Escribinos por email
                  </a>{" "}
                  o por WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-bone px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-white disabled:opacity-60"
              >
                {status === "submitting" ? "Enviando…" : "Solicitar asesoramiento"}
                <Icon.arrow className="h-4 w-4" />
              </button>
              <p className="mt-3 text-center text-xs text-bone/40">
                Al enviar aceptás ser contactado por el equipo comercial.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

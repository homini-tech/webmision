"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { project } from "@/data/project";
import { Icon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-bone/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Image
              src="/img/logo-white.png"
              alt="Misión Ciudad Vieja"
              width={170}
              height={84}
              className="h-10 w-auto"
            />
            <p className="mt-3 text-sm">
              {project.address.street} · {project.address.neighborhood} ·{" "}
              {project.address.city}, {project.address.country}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <a href="#proyecto" className="hover:text-bone">Proyecto</a>
            <a href="#residencias" className="hover:text-bone">Residencias</a>
            <a href="#amenities" className="hover:text-bone">Amenities</a>
            <a href="#ubicacion" className="hover:text-bone">Ubicación</a>
            <a href="#descargas" className="hover:text-bone">Descargas</a>
            <a href="#contacto" className="hover:text-bone">Contacto</a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-bone/10 pt-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            Desarrolla <span className="text-bone/90">Cipia</span> · Comercializa{" "}
            <span className="text-bone/90">REM</span> · Arquitectura{" "}
            <span className="text-bone/90">Zino/Probst (ZIP)</span>
          </p>
          <p>© {new Date().getFullYear()} {project.name}. Todos los derechos reservados.</p>
        </div>

        <p className="max-w-4xl text-[11px] leading-relaxed text-bone/40">
          Información preliminar sujeta a modificaciones por causas técnicas,
          naturales o de las autoridades competentes al ajustar el Proyecto
          Definitivo. Las medidas definitivas surgirán del plano del Ing.
          Agrimensor. Imágenes, mobiliario y equipamiento de carácter
          ilustrativo. Antes de adquirir, solicite la información técnica
          necesaria para tomar una decisión informada.
        </p>
      </div>
    </footer>
  );
}

export function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp flotante */}
      <a
        href={`https://wa.me/${project.whatsapp.number}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className={`fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-105 md:bottom-6 ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <Icon.whatsapp className="h-7 w-7" />
      </a>

      {/* Barra CTA sticky en mobile */}
      <div
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-bone/95 p-3 backdrop-blur-md transition-transform md:hidden ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href="#contacto"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-sm font-medium text-bone"
        >
          Solicitar información <Icon.arrow className="h-4 w-4" />
        </a>
      </div>
    </>
  );
}

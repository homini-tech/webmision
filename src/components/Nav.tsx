"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "./icons";

const links = [
  { href: "#proyecto", label: "Proyecto" },
  { href: "#residencias", label: "Residencias" },
  { href: "#amenities", label: "Amenities" },
  { href: "#galeria", label: "Galería" },
  { href: "#avance-obra", label: "Avance de obra" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#descargas", label: "Descargas" },
  { href: "#equipo", label: "Equipo" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const dark = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        dark ? "bg-bone/90 backdrop-blur-md border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8"
      >
        <a href="#top" aria-label="Misión — inicio">
          <Image
            src={dark ? "/img/logo-dark.png" : "/img/logo-white.png"}
            alt="Misión Ciudad Vieja"
            width={140}
            height={69}
            priority
            className="h-8 w-auto"
          />
        </a>

        <ul className={`hidden items-center gap-7 text-sm md:flex ${scrolled ? "text-ink" : "text-bone"}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="opacity-85 transition-opacity hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className={`hidden rounded-full px-5 py-2 text-sm font-medium transition-colors md:inline-block ${
              dark ? "bg-ink text-bone hover:bg-deep" : "bg-bone text-ink hover:bg-white"
            }`}
          >
            Solicitar información
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className={`md:hidden ${dark ? "text-ink" : "text-bone"}`}
          >
            {open ? <Icon.close /> : <Icon.menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-ink/10 bg-bone md:hidden">
          <ul className="flex flex-col px-5 py-2 text-ink">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink/5 py-3 text-base"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-3 block rounded-full bg-ink py-3 text-center font-medium text-bone"
              >
                Solicitar información
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

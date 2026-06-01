# MISIÓN — Ciudad Vieja · Sitio web

Landing inmobiliaria premium del proyecto **Misión**, sobre calle Rincón,
Ciudad Vieja, Montevideo. **Next.js 14 (App Router) + TypeScript + Tailwind CSS
+ Framer Motion**, mobile-first, optimizada para SEO, performance, accesibilidad
(WCAG AA) y conversión de leads.

## Novedades de esta versión
- Identidad alineada al **logo oficial** (display serif de alto contraste:
  Cormorant; body: Jost) y logo en header (claro/oscuro), hero y footer.
- **Renders reales** integrados: fachada (hero + OG), interiores, cowork,
  gimnasio y barbacoa (sección Amenities y Galería).

## Stack y decisiones
- Next.js App Router con render estático (home `○ Static`).
- `next/font` (Cormorant + Jost), `display: swap`.
- `next/image` con AVIF/WebP, `sizes` responsive y lazy-loading.
- JSON-LD `ApartmentComplex` + `Organization` + `BreadcrumbList`.
- Open Graph / Twitter Cards, `sitemap.xml`, `robots.txt`, `manifest`.
- Animaciones respetan `prefers-reduced-motion`.

## Estructura
```
src/
  app/            layout (SEO), page (home), api/lead, sitemap, robots, manifest
  components/     Nav, Hero, ProjectSection, Residences (filtros + modal),
                  Amenities (renders + grid), Location, Gallery (lightbox),
                  Team, Contact, Footer + FloatingCTA, Reveal, icons
  data/project.ts FUENTE ÚNICA DE DATOS (extraídos de planos + renders)
  lib/seo.ts      JSON-LD
public/
  img/            logo-white/dark.png + renders (.webp)
  planos/         plantas por nivel (.webp)
  og.png          imagen para redes (fachada + logo)
```

## Desarrollo
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## PLACEHOLDERS a completar (ver `src/data/project.ts`, buscar // PLACEHOLDER)
- WhatsApp / teléfono / email comerciales.
- Dominio definitivo (`project.url`).
- Coordenadas exactas del padrón.
- Fecha de entrega, estado y régimen.
- Áreas estimadas de U203–603 y U703.
- Endpoint de leads en `src/app/api/lead/route.ts` (conectar CRM/email).

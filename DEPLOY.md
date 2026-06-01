# Publicar en Vercel desde el repo existente (homini-tech/webmision)

Esta versión reemplaza la anterior. Pasos para actualizar el repo y redesplegar:

## 1. Llevar estos archivos al repo
Si ya tenés el repo clonado localmente, copiá el contenido de esta carpeta
(`site/`) dentro de la raíz del repo, reemplazando los archivos viejos.
Asegurate de NO subir `node_modules` ni `.next` (ya están en .gitignore).

## 2. Commit y push
```bash
cd webmision           # tu repo local
git add .
git commit -m "Web Misión: logo oficial + renders reales, identidad alineada"
git push origin main
```

Si preferís empezar limpio:
```bash
git init
git remote add origin https://github.com/homini-tech/webmision.git
git add .
git commit -m "Web Misión Next.js"
git branch -M main
git push -u origin main --force   # cuidado: sobrescribe el historial remoto
```

## 3. Vercel
Si el proyecto de Vercel ya está conectado a homini-tech/webmision, el push
dispara el redeploy automáticamente. Si no:
- vercel.com → Add New → Project → importá homini-tech/webmision.
- Framework: Next.js (autodetectado). No cambies build/output.
- Deploy.

## 4. Variables / dominio
- (Opcional) Environment Variable `NEXT_PUBLIC_SITE_URL` con el dominio final.
- Settings → Domains → Add para conectar el dominio propio (cargá los DNS).

## Nota
La build falla solo en entornos sin acceso a Google Fonts. En Vercel hay
acceso, así que compila sin problema.

## Novedades de esta versión (mapa, plantas HD, descargas)
- **Mapa Google Maps** embebido en la sección Ubicación.
- **Plantas en alta resolución** con zoom (clic para ampliar) y descarga
  individual desde el modal de cada unidad.
- **Sección Descargas** con el brochure (PDF) y las plantas (PDF).
- Textos oficiales del brochure integrados (terminaciones, exoneraciones,
  titulares y metrajes).

NOTA sobre tamaño: `public/docs/misison-brochure.pdf` pesa ~13 MB. Git y Vercel
lo manejan sin problema (el límite de archivo en GitHub es 100 MB). Si querés
alivianar el repo, podés alojarlo en otro servicio y cambiar el `href` en
`src/data/project.ts` (export `downloads`).

## Mapa con dirección exacta
El embed usa la búsqueda "Calle Rincón, Ciudad Vieja, Montevideo". Cuando tengas
la altura/padrón exacto, editá la query en `src/components/Location.tsx` (variable
`query`) para que el pin caiga justo en el edificio. Opcionalmente, con una API
key de Google Maps podés usar el embed oficial de Maps Embed API.

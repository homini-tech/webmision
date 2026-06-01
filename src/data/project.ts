/**
 * Fuente única de verdad del proyecto.
 * Datos EXTRAÍDOS de los planos (Adobe Illustrator / PDF "Rincón Plantas").
 *
 * Convención de placeholders:
 *  - Los campos marcados con el sufijo "// PLACEHOLDER" no surgen de la
 *    documentación entregada y deben ser confirmados por el desarrollador
 *    antes de publicar. Se proveen valores plausibles y editables.
 */

export const PLACEHOLDER = "Pendiente de confirmación";

export const project = {
  name: "Misión",
  tagline: "Comprar en el momento justo.",
  // Subtítulo emocional alternativo para el hero
  heroKicker: "Ciudad Vieja · Calle Rincón",
  shortDescription:
    "Misión es un proyecto de reciclaje moderno y elegante en plena Ciudad Vieja: monoambientes de 40 m² y unidades de 1 dormitorio de 48 m² internos, más terrazas, con amenities pensados para vos, sobre la renovada calle Rincón.",
  // Descripción comercial larga (storytelling, del brochure oficial)
  longDescription:
    "Pensamos Misión como una oportunidad de darle a la Ciudad Vieja un proyecto de reciclaje moderno, elegante, funcional y un estilo de vida pensado para la practicidad y la eficiencia. La Ciudad Vieja necesita recuperar su vocación residencial: es hora de que vuelva a ser un barrio vivido, no solo visitado, afirmándose como el centro cultural, turístico y patrimonial de Montevideo.",
  address: {
    street: "Rincón 467",
    neighborhood: "Ciudad Vieja",
    city: "Montevideo",
    country: "Uruguay",
    // Coordenadas aproximadas del entorno Plaza Matriz / calle Rincón. // PLACEHOLDER (ajustar al padrón exacto)
    lat: -34.9061,
    lng: -56.2049,
  },
  levels: 7,
  status: "En comercialización", // PLACEHOLDER
  deliveryDate: PLACEHOLDER, // fecha de entrega no especificada en la documentación
  promoLaw: "Ley de Vivienda Promovida", // confirmado en brochure (exoneraciones IRPF/IP/ITP + Contribución Inmobiliaria 10 años)
  whatsapp: {
    number: "59898289056",
    displayLabel: "Escribinos por WhatsApp",
    defaultMessage: "Tengo una consulta del proyecto Misión",
  },
  contact: {
    email: "ventas@misionciudadvieja.uy", // PLACEHOLDER
    phone: "+598 0000 0000", // PLACEHOLDER
  },
  url: "https://misionciudadvieja.uy", // PLACEHOLDER (dominio definitivo)
};

/** Equipo institucional — extraído del pie de los planos. */
export const team = [
  {
    role: "Desarrollo inmobiliario",
    name: "REM",
    description:
      "Desarrolladora del proyecto, junto a Cipia.",
    logo: "/img/logo-rem.png",
  },
  {
    role: "Desarrollo inmobiliario",
    name: "Cipia",
    description:
      "Desarrolladora del proyecto, junto a REM.",
    logo: "/img/logo-cipia.png",
  },
  {
    role: "Arquitectura",
    name: "Zino / Probst Arquitectos — ZIP",
    description:
      "Estudio de arquitectura responsable del proyecto y la dirección de obra.",
    logo: "/img/logo-zip.png",
  },
];

/** Amenities — extraídos del Subsuelo y Nivel 7 de los planos. */
export const amenities = [
  {
    key: "barbacoa",
    title: "Barbacoa",
    detail: "Espacio social con parrillero y patio.",
    area: "≈ 70 m²",
    icon: "flame",
  },
  {
    key: "cowork",
    title: "Cowork",
    detail: "Sala de trabajo compartida con sala de reuniones.",
    area: "≈ 65 m²",
    icon: "laptop",
  },
  {
    key: "gimnasio",
    title: "Gimnasio",
    detail: "Equipamiento para entrenamiento diario.",
    area: "≈ 68–135 m²",
    icon: "dumbbell",
  },
  {
    key: "rooftop",
    title: "Solárium & Parrilleros en azotea",
    detail: "Nivel 7 con solárium y parrilleros de uso exclusivo.",
    area: "Nivel 7",
    icon: "sun",
  },
  {
    key: "laundry",
    title: "Laundry",
    detail: "Lavadero común para los residentes.",
    area: "≈ 6 m²",
    icon: "washer",
  },
  {
    key: "bicis",
    title: "Parking de bicicletas",
    detail: "Guardado seguro de bicicletas en planta baja.",
    area: "Planta baja",
    icon: "bike",
  },
  {
    key: "local",
    title: "Local comercial",
    detail: "Local a la calle Rincón que activa la planta baja.",
    area: "≈ 123 m²",
    icon: "store",
  },
  {
    key: "patios",
    title: "Patios & expansiones",
    detail: "Patios verdes vinculados a los espacios comunes.",
    area: "Subsuelo",
    icon: "tree",
  },
];

export type UnitType = "Monoambiente" | "1 Dormitorio";

/** Formatea un precio en USD (es-UY): 78000 -> "USD 78.000". */
export function formatUSD(value: number): string {
  return "USD " + value.toLocaleString("es-UY");
}

export interface Unit {
  id: string;
  name: string;
  level: string;
  type: UnitType;
  orientation: string;
  built: number; // m² área construida (mensura + cuota muros/ductos)
  exterior: number; // m² área exterior de uso exclusivo
  common: number; // m² cuota parte comunes
  total: number; // m² área total
  priceFrom: number | null; // precio "desde" en USD (menor piso disponible). null = consultar / vendida
  plan: string; // imagen de planta (preview)
  planHd: string; // imagen de planta alta resolución (zoom/descarga)
}

/**
 * Tipologías, metrajes y precios — según la Lista de Precios oficial
 * "MISIÓN - Ciudad Vieja". Áreas en m².
 *  - built  = Área construida (mensura + cuota parte de muros + ductos)
 *  - exterior = terraza o patio de uso exclusivo
 *  - common = cuota parte de áreas comunes del piso
 *  - total  = m² totales
 *  - priceFrom = menor precio DISPONIBLE (no "Vendida") entre los pisos.
 * Las unidades 01, 02, 04, 05, 03 y 06 son tipologías que se repiten en los
 * pisos 1 a 6; se muestra el menor precio disponible de la fila.
 */
export const units: Unit[] = [
  // Tipologías repetidas en pisos 2–6 (Monoambientes)
  { id: "u01", name: "Unidad 01", level: "Pisos 2–6", type: "Monoambiente", orientation: "Contrafrente", built: 40.0, exterior: 3.0, common: 8.6, total: 51.6, priceFrom: 83000, plan: "/planos/nivel_2_al_6.webp", planHd: "/planos-hd/nivel_2_al_6.webp" },
  { id: "u02", name: "Unidad 02", level: "Pisos 2–6", type: "Monoambiente", orientation: "Contrafrente", built: 39.0, exterior: 4.2, common: 8.4, total: 51.6, priceFrom: 83000, plan: "/planos/nivel_2_al_6.webp", planHd: "/planos-hd/nivel_2_al_6.webp" },
  { id: "u04", name: "Unidad 04", level: "Pisos 2–6", type: "Monoambiente", orientation: "Frente", built: 39.3, exterior: 4.3, common: 8.4, total: 52.0, priceFrom: 93000, plan: "/planos/nivel_2_al_6.webp", planHd: "/planos-hd/nivel_2_al_6.webp" },
  { id: "u05", name: "Unidad 05", level: "Pisos 2–6", type: "Monoambiente", orientation: "Frente", built: 39.4, exterior: 4.5, common: 8.4, total: 52.3, priceFrom: 99000, plan: "/planos/nivel_2_al_6.webp", planHd: "/planos-hd/nivel_2_al_6.webp" },

  // Tipologías repetidas en pisos 2–6 (1 dormitorio)
  { id: "u03", name: "Unidad 03", level: "Pisos 2–6", type: "1 Dormitorio", orientation: "Contrafrente", built: 48.8, exterior: 8.7, common: 10.3, total: 67.8, priceFrom: 117000, plan: "/planos/nivel_2_al_6.webp", planHd: "/planos-hd/nivel_2_al_6.webp" },
  { id: "u06", name: "Unidad 06", level: "Pisos 2–6", type: "1 Dormitorio", orientation: "Frente", built: 49.6, exterior: 8.4, common: 10.6, total: 68.6, priceFrom: 129000, plan: "/planos/nivel_2_al_6.webp", planHd: "/planos-hd/nivel_2_al_6.webp" },

  // Planta baja
  { id: "u002", name: "Unidad 002", level: "Planta baja", type: "Monoambiente", orientation: "Contrafrente", built: 38.2, exterior: 2.9, common: 8.2, total: 49.3, priceFrom: 78000, plan: "/planos/planta_baja.webp", planHd: "/planos-hd/planta_baja.webp" },
  { id: "u003", name: "Unidad 003", level: "Planta baja", type: "1 Dormitorio", orientation: "Contrafrente", built: 50.0, exterior: 5.9, common: 10.7, total: 66.6, priceFrom: 111000, plan: "/planos/planta_baja.webp", planHd: "/planos-hd/planta_baja.webp" },

  // Piso 1 (con grandes terrazas al frente)
  { id: "u104", name: "Unidad 104", level: "Piso 1", type: "Monoambiente", orientation: "Frente", built: 39.3, exterior: 14.5, common: 8.4, total: 62.2, priceFrom: 99000, plan: "/planos/nivel_1.webp", planHd: "/planos-hd/nivel_1.webp" },
  { id: "u106", name: "Unidad 106", level: "Piso 1", type: "1 Dormitorio", orientation: "Frente", built: 49.6, exterior: 26.6, common: 10.6, total: 86.8, priceFrom: 138000, plan: "/planos/nivel_1.webp", planHd: "/planos-hd/nivel_1.webp" },

  // Piso 7 (penthouses)
  { id: "u701", name: "Unidad 701", level: "Piso 7", type: "Monoambiente", orientation: "Contrafrente", built: 28.2, exterior: 52.8, common: 6.0, total: 87.0, priceFrom: 122000, plan: "/planos/nivel_7.webp", planHd: "/planos-hd/nivel_7.webp" },
  { id: "u703", name: "Unidad 703", level: "Piso 7", type: "1 Dormitorio", orientation: "Frente", built: 38.3, exterior: 24.3, common: 8.3, total: 70.9, priceFrom: 138000, plan: "/planos/nivel_7.webp", planHd: "/planos-hd/nivel_7.webp" },
];

/** Local comercial (planta baja) — listado aparte. */
export const localComercial = {
  name: "Local comercial 001",
  level: "Planta baja",
  orientation: "Frente",
  built: 121.9,
  total: 121.9,
  priceFrom: 199000,
};

/** Condiciones de financiación — de la lista de precios oficial. */
export const financing = {
  terms: ["40% al firmar la promesa", "50% en 4 cuotas trimestrales", "10% a la ocupación"],
  note: "Gastos de ocupación: 3%. Precios en dólares (USD), sujetos a disponibilidad. Información sujeta a cambios.",
};

/** Diferenciales del proyecto (concepto / venta emocional). */
export const highlights = [
  {
    title: "Ubicación patrimonial",
    body: "Sobre la calle Rincón semipeatonal, a metros de la Plaza Matriz, el Teatro Solís y el Mercado del Puerto.",
  },
  {
    title: "Terrazas de uso exclusivo",
    body: "Unidades con expansiones al exterior; en el último nivel, terrazas de hasta ~80 m² con parrillero propio.",
  },
  {
    title: "Amenities de bienestar y trabajo",
    body: "Cowork, gimnasio, barbacoa y solárium pensados para la vida y el trabajo contemporáneos.",
  },
  {
    title: "Escala humana",
    body: "Siete niveles, pocas unidades por planta y un local comercial que activa la vida de la cuadra.",
  },
];

/** Puntos de interés cercanos para la sección Ubicación. */
export const pointsOfInterest = [
  { name: "Plaza Matriz", category: "Cultura", minutes: "2 min", icon: "landmark" },
  { name: "Mercado del Puerto", category: "Gastronomía", minutes: "6 min", icon: "utensils" },
  { name: "Teatro Solís", category: "Cultura", minutes: "5 min", icon: "ticket" },
  { name: "Peatonal Sarandí", category: "Comercio", minutes: "3 min", icon: "shopping" },
  { name: "Rambla / Río de la Plata", category: "Costa", minutes: "8 min", icon: "waves" },
  { name: "Terminal de ómnibus y red urbana", category: "Transporte", minutes: "Sobre la cuadra", icon: "bus" },
];

/** Características constructivas / fichas técnicas. */
export const specs = [
  { label: "Niveles", value: "7 niveles + subsuelo de amenities" },
  { label: "Tipologías", value: "Monoambientes y 1 dormitorio" },
  { label: "Áreas construidas", value: "Desde ~28 m² hasta ~50 m²" },
  { label: "Áreas exteriores", value: "Desde ~3 m² hasta ~80 m² (Nivel 7)" },
  { label: "Local comercial", value: "≈ 123 m² a la calle" },
  { label: "Estacionamiento", value: "Parking de bicicletas" },
  { label: "Boxes / depósitos", value: "Box 0,88 × 2,95 m y 1,20 × 2,20 m" },
  { label: "Régimen", value: project.promoLaw },
];

/** Galería — renders reales del proyecto (las plantas se ven en Residencias). */
export const gallery = [
  { src: "/img/fachada.webp", alt: "Fachada del edificio Misión sobre la calle Rincón semipeatonal, Ciudad Vieja", caption: "Fachada · calle Rincón", big: true },
  { src: "/img/int-living.webp", alt: "Living luminoso de un departamento de Misión con terraza y vista al puerto", caption: "Living con vista al puerto" },
  { src: "/img/int-comedor.webp", alt: "Comedor y estar de un departamento de Misión con expansión a terraza", caption: "Comedor y terraza" },
  { src: "/img/int-rooftop.webp", alt: "Penthouse de Misión con parrillero en la terraza del último nivel", caption: "Penthouse · parrillero en terraza" },
  { src: "/img/cowork.webp", alt: "Cowork de Misión con escritorios compartidos y vegetación", caption: "Cowork" },
  { src: "/img/gym.webp", alt: "Gimnasio equipado de Misión", caption: "Gimnasio" },
  { src: "/img/barbacoa.webp", alt: "Barbacoa común de Misión con parrillero y patio", caption: "Barbacoa" },
];

/** Renders destacados para la sección de amenities. */
export const amenityFeatures = [
  { src: "/img/cowork.webp", title: "Cowork", sub: "Sala de trabajo y reuniones" },
  { src: "/img/gym.webp", title: "Gimnasio", sub: "Entrenamiento diario" },
  { src: "/img/barbacoa.webp", title: "Barbacoa", sub: "Encuentro y parrillero" },
];

/** Documentos descargables (brochure + plantas). */
export const downloads = [
  {
    title: "Brochure del proyecto",
    desc: "Presentación comercial completa de Misión.",
    href: "/docs/misison-brochure.pdf",
    size: "PDF · ~13 MB",
  },
  {
    title: "Plantas y tipologías",
    desc: "Plantas de todos los niveles con metrajes.",
    href: "/docs/mision-plantas.pdf",
    size: "PDF · ~2,5 MB",
  },
];

/** Terminaciones de calidad — del brochure oficial. */
export const terminaciones = [
  "Suministro de electrodomésticos en todas las unidades: aire acondicionado, calefón, horno y anafe.",
  "Placards en todos los apartamentos.",
  "Pisos y paredes de baños revestidas con porcelanatos.",
  "Dos ascensores.",
  "Pisos vinílicos en living, comedor y dormitorios.",
  "Previsión para sistema de seguridad remoto.",
  "Conexión a lavarropa en todas las unidades.",
  "Baños completos con mueble bajo mesada, griferías, mesada y espejo.",
  "Aberturas exteriores en aluminio anodizado color natural o negro según la unidad.",
];

/** Exoneraciones fiscales (Vivienda Promovida) — del brochure oficial. */
export const exoneraciones = [
  "IRPF por alquileres por 10 años.",
  "Impuesto al Patrimonio (IP) por 10 años.",
  "Impuesto a las Transmisiones Patrimoniales (ITP).",
  "Exoneración de Contribución Inmobiliaria por 10 años.",
];

/** URL de WhatsApp con mensaje precargado. */
export const whatsappUrl = `https://wa.me/${project.whatsapp.number}?text=${encodeURIComponent(
  project.whatsapp.defaultMessage
)}`;

/** Avance de obra — registro fotográfico del estado actual de la construcción. */
export const obra = [
  {
    src: "/img/obra-5.webp",
    caption: "Fachada del Edificio Rincón en obra",
    detail: "El histórico Edificio Rincón, sobre Rincón 467, en proceso de reciclaje.",
  },
  {
    src: "/img/obra-2.webp",
    caption: "Interior en demolición y preparación",
    detail: "Retiro de terminaciones y preparación de las plantas para el nuevo proyecto.",
  },
  {
    src: "/img/obra-4.webp",
    caption: "Tabiquería y nuevas divisiones",
    detail: "Montaje de estructura de tabiques y trazado de las nuevas unidades.",
  },
  {
    src: "/img/obra-3.webp",
    caption: "Instalaciones y cielorrasos",
    detail: "Avance de instalaciones sanitarias y eléctricas con estructura de cielorrasos.",
  },
  {
    src: "/img/obra-1.webp",
    caption: "Trabajos en altura con vista al puerto",
    detail: "Izaje de materiales y hormigonado, con las vistas que tendrán las unidades.",
  },
];

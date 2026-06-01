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
    street: "Calle Rincón",
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
    // PLACEHOLDER — reemplazar por el número comercial real (formato internacional sin signos)
    number: "59800000000",
    displayLabel: "Escribinos por WhatsApp",
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
    name: "Cipia",
    description:
      "Desarrolladora a cargo de la concepción y gestión integral del proyecto.",
    note: PLACEHOLDER, // descripción institucional ampliada a confirmar
  },
  {
    role: "Comercialización",
    name: "REM",
    description: "Equipo comercial responsable de la venta de las unidades.",
    note: PLACEHOLDER,
  },
  {
    role: "Arquitectura",
    name: "Zino / Probst Arquitectos — ZIP",
    description:
      "Estudio de arquitectura responsable del proyecto y la dirección de obra.",
    note: PLACEHOLDER,
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

export interface Unit {
  id: string;
  name: string;
  level: string;
  type: UnitType;
  orientation: string;
  built: number; // m² área construida
  exterior: number; // m² área exterior de uso exclusivo
  common: number; // m² cuota parte comunes
  total: number; // m² área total (APPCU)
  plan: string; // imagen de planta (preview)
  planHd: string; // imagen de planta alta resolución (zoom/descarga)
}

/**
 * Tipologías y metrajes — EXTRAÍDOS de los planos por unidad.
 * (Áreas en m², tal como figuran en la documentación preliminar.)
 */
export const units: Unit[] = [
  // Planta baja
  { id: "u01", name: "Unidad 01", level: "Planta baja", type: "Monoambiente", orientation: "Contrafrente", built: 39.71, exterior: 2.9, common: 8.5, total: 51.11, plan: "/planos/planta_baja.webp", planHd: "/planos-hd/planta_baja.webp" },
  { id: "u02", name: "Unidad 02", level: "Planta baja", type: "Monoambiente", orientation: "Contrafrente", built: 38.3, exterior: 2.9, common: 8.2, total: 49.4, plan: "/planos/planta_baja.webp", planHd: "/planos-hd/planta_baja.webp" },
  { id: "u03", name: "Unidad 03", level: "Planta baja", type: "1 Dormitorio", orientation: "Contrafrente", built: 50.0, exterior: 2.9, common: 8.5, total: 61.4, plan: "/planos/planta_baja.webp", planHd: "/planos-hd/planta_baja.webp" },

  // Nivel 1
  { id: "u104", name: "Unidad 104", level: "Nivel 1", type: "Monoambiente", orientation: "Frente", built: 39.23, exterior: 14.5, common: 8.4, total: 62.13, plan: "/planos/nivel_1.webp", planHd: "/planos-hd/nivel_1.webp" },
  { id: "u105", name: "Unidad 105", level: "Nivel 1", type: "Monoambiente", orientation: "Frente", built: 39.37, exterior: 15.0, common: 8.4, total: 62.77, plan: "/planos/nivel_1.webp", planHd: "/planos-hd/nivel_1.webp" },

  // Niveles 2 a 6 (planta tipo)
  { id: "uX01", name: "Unidades 201–601", level: "Niveles 2–6", type: "Monoambiente", orientation: "Contrafrente", built: 39.9, exterior: 3.0, common: 8.6, total: 51.5, plan: "/planos/nivel_2_al_6.webp", planHd: "/planos-hd/nivel_2_al_6.webp" },
  { id: "uX02", name: "Unidades 202–602", level: "Niveles 2–6", type: "Monoambiente", orientation: "Contrafrente", built: 39.06, exterior: 4.2, common: 8.4, total: 51.66, plan: "/planos/nivel_2_al_6.webp", planHd: "/planos-hd/nivel_2_al_6.webp" },
  { id: "uX03", name: "Unidades 203–603", level: "Niveles 2–6", type: "1 Dormitorio", orientation: "Contrafrente", built: 50.0, exterior: 4.0, common: 8.5, total: 62.5, plan: "/planos/nivel_2_al_6.webp", planHd: "/planos-hd/nivel_2_al_6.webp" }, // exterior/total estimados // PLACEHOLDER

  // Nivel 7 (penthouses con gran expansión)
  { id: "u701", name: "Unidad 701", level: "Nivel 7", type: "Monoambiente", orientation: "Contrafrente", built: 28.24, exterior: 52.76, common: 6.0, total: 87.0, plan: "/planos/nivel_7.webp", planHd: "/planos-hd/nivel_7.webp" },
  { id: "u702", name: "Unidad 702", level: "Nivel 7", type: "1 Dormitorio", orientation: "Pasante", built: 49.98, exterior: 79.62, common: 10.7, total: 140.3, plan: "/planos/nivel_7.webp", planHd: "/planos-hd/nivel_7.webp" },
  { id: "u703", name: "Unidad 703", level: "Nivel 7", type: "1 Dormitorio", orientation: "Pasante", built: 49.98, exterior: 60.0, common: 10.0, total: 120.0, plan: "/planos/nivel_7.webp", planHd: "/planos-hd/nivel_7.webp" }, // áreas estimadas // PLACEHOLDER
];

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

/** Galería — renders reales del proyecto + plantas por nivel. */
export const gallery = [
  { src: "/img/fachada.webp", alt: "Fachada del edificio Misión sobre la calle Rincón semipeatonal, Ciudad Vieja", caption: "Fachada · calle Rincón", big: true },
  { src: "/img/int-living.webp", alt: "Living luminoso de un departamento de Misión con terraza y vista al puerto", caption: "Living con vista al puerto" },
  { src: "/img/int-comedor.webp", alt: "Comedor y estar de un departamento de Misión con expansión a terraza", caption: "Comedor y terraza" },
  { src: "/img/int-rooftop.webp", alt: "Penthouse de Misión con parrillero en la terraza del último nivel", caption: "Penthouse · parrillero en terraza" },
  { src: "/img/cowork.webp", alt: "Cowork de Misión con escritorios compartidos y vegetación", caption: "Cowork" },
  { src: "/img/gym.webp", alt: "Gimnasio equipado de Misión", caption: "Gimnasio" },
  { src: "/img/barbacoa.webp", alt: "Barbacoa común de Misión con parrillero y patio", caption: "Barbacoa" },
  { src: "/planos/planta_baja.webp", alt: "Planta baja del edificio Misión con local comercial y unidades", caption: "Planta baja" },
  { src: "/planos/nivel_7.webp", alt: "Planta del Nivel 7 con terrazas y parrilleros", caption: "Nivel 7 · terrazas" },
  { src: "/planos/nivel_ss.webp", alt: "Planta de subsuelo con barbacoa, cowork y gimnasio", caption: "Subsuelo · amenities" },
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

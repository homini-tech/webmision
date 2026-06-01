import { project, units, amenities } from "@/data/project";

/** Schema.org structured data for the real-estate project. */
export function buildJsonLd() {
  const minBuilt = Math.min(...units.map((u) => u.built));
  const maxBuilt = Math.max(...units.map((u) => u.built));

  const apartmentComplex = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: `${project.name} — Ciudad Vieja`,
    description: project.shortDescription,
    url: project.url,
    numberOfAccommodationUnits: units.length,
    numberOfFloors: project.levels,
    address: {
      "@type": "PostalAddress",
      streetAddress: project.address.street,
      addressLocality: project.address.neighborhood,
      addressRegion: project.address.city,
      addressCountry: "UY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: project.address.lat,
      longitude: project.address.lng,
    },
    amenityFeature: amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a.title,
      value: true,
    })),
    floorSize: {
      "@type": "QuantitativeValue",
      minValue: minBuilt,
      maxValue: maxBuilt,
      unitCode: "MTK",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: project.name,
    url: project.url,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: project.contact.email,
      telephone: project.contact.phone,
      areaServed: "UY",
      availableLanguage: ["es"],
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: project.url },
      { "@type": "ListItem", position: 2, name: "Residencias", item: `${project.url}#residencias` },
      { "@type": "ListItem", position: 3, name: "Contacto", item: `${project.url}#contacto` },
    ],
  };

  return [apartmentComplex, organization, breadcrumb];
}

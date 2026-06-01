import type { MetadataRoute } from "next";
import { project } from "@/data/project";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = project.url;
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#residencias`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/#amenities`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#ubicacion`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}

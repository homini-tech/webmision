import type { MetadataRoute } from "next";
import { project } from "@/data/project";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${project.name} — Ciudad Vieja`,
    short_name: project.name,
    description: project.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#16130e",
    theme_color: "#16130e",
    icons: [{ src: "/og.png", sizes: "512x512", type: "image/png" }],
  };
}

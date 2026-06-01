import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProjectSection } from "@/components/ProjectSection";
import { Residences } from "@/components/Residences";
import { Amenities } from "@/components/Amenities";
import { Location } from "@/components/Location";
import { Gallery } from "@/components/Gallery";
import { Downloads } from "@/components/Downloads";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer, FloatingCTA } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="contenido">
        <Hero />
        <ProjectSection />
        <Residences />
        <Amenities />
        <Gallery />
        <Location />
        <Downloads />
        <Team />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

import Hero from "@/Components/sections/hero";
import About from "@/Components/sections/about";
import Work from "@/Components/sections/work";
import Status from "@/Components/sections/status";
import Connect from "@/Components/sections/connect";
import Projects from "@/Components/sections/projects";
import Education from "@/Components/sections/education";
import Gallery from "@/Components/sections/gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Status />
      <Education />
      <Projects />
      <Gallery />
      <Connect />
    </>
  );
}

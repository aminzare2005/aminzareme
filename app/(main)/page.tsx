import Hero from "@/Components/sections/hero";
import Work from "@/Components/sections/work";
import Status from "@/Components/sections/status";
import Projects from "@/Components/sections/projects";
import Education from "@/Components/sections/education";
import Timeline from "@/Components/sections/timeline";
import Communities from "@/Components/sections/communities";
import Connect from "@/Components/sections/connect";
import Gallery from "@/Components/sections/gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Status />
      <Education />
      <Communities />
      <Projects />
      <Gallery />
      <Timeline />
      <Connect />
    </>
  );
}

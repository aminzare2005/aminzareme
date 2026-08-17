import Hero from "@/Components/sections/hero";
import Work from "@/Components/sections/work";
import Status from "@/Components/sections/status";
import Projects from "@/Components/sections/projects";
import Demoes from "@/Components/sections/demoes";
import Education from "@/Components/sections/education";
import Timeline from "@/Components/sections/timeline";
import Communities from "@/Components/sections/communities";
import Connect from "@/Components/sections/connect";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Status />
      <Projects />
      {/* <Demoes /> */}
      <Education />
      <Timeline />
      <Communities />
      <Connect />
    </>
  );
}

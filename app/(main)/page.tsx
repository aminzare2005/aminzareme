import Hero from "@/Components/sections/hero";
import Work from "@/Components/sections/work";
import Timeline from "@/Components/sections/timeline";
import Status from "@/Components/sections/status";
import Connect from "@/Components/sections/connect";
import Projects from "@/Components/sections/projects";
import Education from "@/Components/sections/education";
import Communities from "@/Components/sections/communities";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Timeline />
      <Communities />
      <Status />
      <Education />
      <Projects />
      <Connect />
    </>
  );
}

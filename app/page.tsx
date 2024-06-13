import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/sectiondivider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex items-center flex-col px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills></Skills>
    </main>
  );
}

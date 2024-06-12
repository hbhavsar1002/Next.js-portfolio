import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/sectiondivider";
export default function Home() {
  return (
    <main className="flex items-center flex-col px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
    </main>
  );
}

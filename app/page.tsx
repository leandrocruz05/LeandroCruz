import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Experience from "@/components/home/experience";
import Education from "@/components/home/education";
import Skills from "@/components/home/skills";
import Projects from "@/components/home/projects";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Navbar } from "@/components/Navbar";
import { ScrollEffects } from "@/components/ScrollEffects";

const sectionLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  // { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden font-sans text-foreground [background-image:var(--glow-radial)]">
      <Navbar links={sectionLinks} />
      <ScrollEffects />


      <div className="relative mx-auto flex w-full flex-col pt-24 pb-20">
        <Hero />

        <About />

        <Projects />

        <Skills />

        <Experience />

        <Contact />

      </div>

    </div>
  );
}

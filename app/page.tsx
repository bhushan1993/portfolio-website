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
    <div className="min-h-screen overflow-hidden font-sans text-foreground bg-background [background-image:var(--glow-radial)]">
      <Navbar links={sectionLinks} />
      <ScrollEffects />


      <main className="relative mx-auto flex w-full flex-col pt-24 pb-20">
        <div
          className="
    pointer-events-none
    absolute
    inset-0
    z-0
    bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
    bg-[size:60px_60px]
  "
        />
        <Hero />

        <About />

        <Projects />

        <Skills />

        <Experience />

        <Contact />

      </main>

    </div>
  );
}

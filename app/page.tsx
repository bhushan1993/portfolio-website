import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";

const sectionLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" }, 
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background [background-image:var(--glow-radial)]">
      <header className="fixed top-0 z-50 w-full border-b border-border/80 bg-[var(--nav)]/80 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="bg-gradient-to-r from-[#e5484d] to-accent bg-clip-text text-3xl font-bold text-transparent"
          >
            BS
          </a>
          <ul className="flex items-center gap-6 text-sm font-medium text-muted">
            {sectionLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col pt-24 pb-20">
        <Hero />

        <About />

        <Experience />

        <section id="projects" className="pt-24" />
        <section id="contact" className="pt-24" />
        <section id="blog" className="pt-24" />
      </main>
    </div>
  );
}

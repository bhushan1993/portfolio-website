import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";

const sectionLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "#blog", label: "Blog" },
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background [background-image:var(--glow-radial)]">
      <header className="border-b border-border/80 bg-[var(--nav)]">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold text-foreground">
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

      <main className="mx-auto flex w-full max-w-6xl flex-col py-20">
        <Hero />

        <Experience />

        <section id="projects" className="pt-24" />
        <section id="about" className="pt-24" />
        <section id="contact" className="pt-24" />
        <section id="blog" className="pt-24" />
      </main>
    </div>
  );
}

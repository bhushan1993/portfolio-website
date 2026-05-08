import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/bhushan1993",
    Icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bhushan-shirude",
    Icon: FiLinkedin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 pt-14 pb-10">
      {/* <div className="pointer-events-none absolute inset-x-1/2 top-8 z-0 h-[calc(100%-1rem)] w-screen -translate-x-1/2 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:58px_58px] opacity-45 [mask-image:radial-gradient(circle_at_50%_24%,black,transparent_74%)]" /> */}

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold text-accent">
          <span className="tracking-[0.2em]">CONTACT</span>
        </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">
          Let&apos;s Build Something
        </h2>

        <p className="mt-5 text-base leading-7 text-muted/75 md:text-lg">
          Have a project in mind? I&apos;m always open to discussing new
          opportunities.
        </p>

        <div className="mt-16 rounded-2xl border border-border/80 bg-[#07030d]/70 px-6 py-14 shadow-[0_24px_80px_-64px_rgba(0,0,0,0.95)] backdrop-blur-sm md:px-12">
          <a
            href="mailto:bshirude2@gmail.com"
            className="inline-flex items-center gap-3 text-xl font-semibold text-accent transition-colors hover:text-foreground md:text-2xl"
          >
            <FiMail aria-hidden="true" className="h-6 w-6" />
            <span>bshirude2@gmail.com</span>
          </a>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {contactLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-border/80 bg-surface/60 px-5 py-3 text-base font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-accent/70 hover:bg-surface-2 hover:text-accent hover:shadow-[0_18px_45px_-34px_rgba(152,87,211,0.95)]"
              >
                <Icon aria-hidden="true" className="h-5 w-5" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

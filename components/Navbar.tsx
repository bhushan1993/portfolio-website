"use client";

import { useEffect, useMemo, useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

function hrefToId(href: string) {
  return href.startsWith("#") ? href.slice(1) : href;
}

export function Navbar({ links }: { links: NavLink[] }) {
  const sectionIds = useMemo(() => links.map((l) => hrefToId(l.href)), [links]);
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");
  const [open, setOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const id = hrefToId(href);
    const section = document.getElementById(id);
    if (!section) return;

    const header = document.querySelector("header");
    const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;
    const top = window.scrollY + section.getBoundingClientRect().top - headerHeight - 6;

    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    window.history.replaceState(null, "", href);
    setActiveId(id);
  };

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible?.target) return;
        setActiveId((visible.target as HTMLElement).id);
      },
      { root: null, threshold: [0.25, 0.5, 0.75], rootMargin: "-15% 0px -65% 0px" },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/80">
      <div className="bg-[var(--nav)]/95 md:bg-[var(--nav)]/80 md:backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a
            href="#"
            className="bg-gradient-to-r from-[#e5484d] to-accent bg-clip-text text-3xl font-bold text-transparent"
            onClick={() => setOpen(false)}
          >
            BS
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-border/80 bg-surface/60 px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-surface-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>

          <ul className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
            {links.map((item) => {
              const id = hrefToId(item.href);
              const isActive = id === activeId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "transition-colors",
                      isActive ? "text-accent" : "hover:text-accent",
                    ].join(" ")}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div
        id="mobile-nav"
        className={[
          "md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          "transition-opacity duration-200",
        ].join(" ")}
      >
        <div className="mx-auto w-full max-w-6xl px-4 pb-4 sm:px-6">
          <div className="rounded-2xl border border-border/80 bg-[#07030d]/90 p-3">
            <ul className="flex flex-col gap-1.5 text-sm font-semibold text-muted">
              {links.map((item) => {
                const id = hrefToId(item.href);
                const isActive = id === activeId;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                        setOpen(false);
                      }}
                      aria-current={isActive ? "page" : undefined}
                      className={[
                        "block rounded-xl px-3 py-2 transition-colors",
                        isActive ? "bg-white/[0.06] text-accent" : "hover:bg-white/[0.05] hover:text-accent",
                      ].join(" ")}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}


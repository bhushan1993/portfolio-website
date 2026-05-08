"use client";

import Image from "next/image";

const kpis = [
  { value: "10+", label: "Years of Experience" },
  { value: "40+", label: "Projects Delivered" },
  { value: "15+", label: "Technologies Mastered" },
  { value: "20+", label: "Enterprise Solutions Built" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-10 pt-24 pb-8">
      
      <h2 className="mx-auto max-w-4xl text-center text-4xl font-bold leading-tight md:text-5xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-accent">ABOUT</p>
        <span className="block">Full-Stack Engineer</span>
        <span className="block bg-gradient-to-r from-[#e5484d] to-accent bg-clip-text text-transparent">
          Crafting Scalable Digital Products
        </span>
      </h2>

      <div className="mt-10 grid items-start gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-[0_0_0_1px_rgba(152,87,211,0.12),0_25px_80px_-60px_rgba(152,87,211,0.55)]">
          <Image
            src="/pexels-peaky-29445974.jpg"
            alt="Full-stack engineering workspace"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
        </div>

        <div className="space-y-4 text-sm leading-7 text-muted">
          <p>
            I&apos;m a Software Engineer based in Pune with 10+ years of
            experience designing and developing modern web applications,
            enterprise platforms, and scalable cloud-based solutions.
            I specialize in building end-to-end products - from intuitive
            frontend experiences to robust backend architectures and
            cloud infrastructure.
          </p>

          <p>
            Over the years, I&apos;ve worked across multiple domains delivering
            high-performance applications using technologies like Angular,
            React, Node.js, AWS, SQL, and modern JavaScript frameworks.
            My focus is on creating scalable, maintainable, and
            user-centric solutions that solve complex business problems
            efficiently.
          </p>

          <p>
            I enjoy transforming ideas into production-ready systems with
            clean architecture, optimized performance, and seamless user
            experiences.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(152,87,211,0.35),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(113,39,186,0.25),transparent_60%)] blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b from-surface to-surface-2 shadow-[0_0_0_1px_rgba(152,87,211,0.15),0_25px_80px_-60px_rgba(152,87,211,0.65)]">
            <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>

              <span className="text-xs text-muted">about.tsx</span>
            </div>

            <pre className="overflow-x-auto p-5 text-[12px] leading-6 text-muted/90">
              {`{
  focus: "scalable systems",
  stack: "Angular | React | Node.js",
  cloud: "AWS",
  goal: "ship maintainable products"
}`}
            </pre>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-border/80 bg-surface/70 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
            >
              <div className="text-2xl font-bold text-foreground">
                {kpi.value}
              </div>

              <div className="mt-1 text-xs text-muted">{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

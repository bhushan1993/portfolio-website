import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  HiOutlineBuildingOffice2,
  HiOutlineChatBubbleLeftRight,
  HiOutlineDevicePhoneMobile,
  HiOutlineShoppingCart,
  HiOutlineSparkles,
} from "react-icons/hi2";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  Icon: IconType;
  from: string;
  to: string;
};

const projects: Project[] = [
  {
    title: "Chat App",
    description:
      "Real-time messaging platform with one-to-one conversations, group chat, typing presence, delivery states, and live Socket.IO updates.",
    technologies: ["Socket.IO", "React", "Node.js", "Express", "MongoDB"],
    Icon: HiOutlineChatBubbleLeftRight,
    from: "rgba(20, 184, 166, 0.28)",
    to: "rgba(17, 7, 31, 0.94)",
  },
  {
    title: "React E-Commerce Dashboard",
    description:
      "Analytics dashboard for e-commerce operations with responsive layouts, product views, sales summaries, and Syncfusion chart visualizations.",
    technologies: ["React", "HTML", "CSS", "Syncfusion", "Charts"],
    Icon: HiOutlineShoppingCart,
    from: "rgba(152, 87, 211, 0.34)",
    to: "rgba(17, 7, 31, 0.94)",
  },
  {
    title: "Health Care Mobile App",
    description:
      "Mobile healthcare experience for appointment booking, secure patient documents, physician discovery, and hybrid device integrations.",
    technologies: ["Ionic", "Capacitor", "Angular", "Node.js", "Cordova", "S3"],
    Icon: HiOutlineDevicePhoneMobile,
    from: "rgba(59, 130, 246, 0.30)",
    to: "rgba(17, 7, 31, 0.94)",
  },
  {
    title: "CRM Enterprise Web App",
    description:
      "Hospital CRM for maintaining network data, physician profiles, patient records, and cloud-backed enterprise workflows.",
    technologies: ["Angular", "HTML", "Node.js", "AWS", "Lambda", "S3"],
    Icon: HiOutlineBuildingOffice2,
    from: "rgba(16, 185, 129, 0.28)",
    to: "rgba(17, 7, 31, 0.94)",
  },
  {
    title: "AI Image Generator",
    description:
      "Prompt-based image generation app using the OpenAI API, with Angular on the frontend and a Node.js backend for API orchestration.",
    technologies: ["OpenAI API", "Angular", "Node.js", "REST API"],
    Icon: HiOutlineSparkles,
    from: "rgba(229, 72, 77, 0.28)",
    to: "rgba(17, 7, 31, 0.94)",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.Icon;
  const style = {
    "--project-from": project.from,
    "--project-to": project.to,
  } as CSSProperties;

  return (
    <article
      style={style}
      className="group relative min-h-[295px] overflow-hidden rounded-xl border border-border/80 bg-[#07030d]/70 p-6 shadow-[0_24px_70px_-58px_rgba(0,0,0,0.9)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/80 hover:shadow-[0_28px_90px_-62px_rgba(152,87,211,0.95)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--project-from),var(--project-to))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(255,255,255,0.12),transparent_34%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 bg-background/70 text-accent transition-all duration-300 group-hover:border-accent/70 group-hover:bg-background/85 group-hover:text-white group-hover:shadow-[0_0_24px_rgba(152,87,211,0.45)]">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </div>

          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
        </div>

        <p className="mt-5 text-sm leading-7 text-muted/75 transition-colors duration-300 group-hover:text-muted">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-1 text-xs font-semibold text-muted/80 transition-colors duration-300 group-hover:border-white/15 group-hover:bg-background/45 group-hover:text-foreground"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl relative scroll-mt-24 pt-14">
      {/* <div className="pointer-events-none absolute inset-x-1/2 top-12 z-0 h-[calc(100%-2rem)] w-screen -translate-x-1/2 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:58px_58px] opacity-45 [mask-image:radial-gradient(circle_at_50%_28%,black,transparent_72%)]" /> */}

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold text-accent">
          <span className="tracking-[0.2em]">PROJECTS</span>
        </p>
        <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">
          What I&apos;ve Built
        </h2>
        <p className="mt-5 text-base leading-7 text-muted/75">
          A selection of full-stack products, dashboards, mobile apps, and AI
          tools built across modern web and cloud stacks.
        </p>
      </div>

      <div className="relative z-10 mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

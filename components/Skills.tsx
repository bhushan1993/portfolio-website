import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  FaAws,
} from "react-icons/fa";
import {
  SiAngular,
  SiAuth0,
  SiBitbucket,
  SiBootstrap,
  SiCss,
  SiD3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGithub,
  SiGithubcopilot,
  SiGitlab,
  SiHtml5,
  SiIonic,
  SiJasmine,
  SiJavascript,
  SiJest,
  SiJira,
  SiJquery,
  SiJsonwebtokens,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedis,
  SiSnowflake,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiIpfs,
  SiWebpack,
} from "react-icons/si";
import { TbApi, TbTestPipe } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

type Skill = {
  name: string;
  Icon: IconType;
  color: string;
};

const skillRows: Skill[][] = [
  [
    { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
    { name: "Ionic", Icon: SiIonic, color: "#3880ff" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "#38bdf8" },
    { name: "Vite", Icon: SiVite, color: "#646cff" },
    { name: "Webpack", Icon: SiWebpack, color: "#8dd6f9" },
    { name: "HTML", Icon: SiHtml5, color: "#e34f26" },
    { name: "CSS", Icon: SiCss, color: "#1572b6" },
    { name: "Angular", Icon: SiAngular, color: "#dd0031" },
    { name: "React", Icon: SiReact, color: "#61dafb" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#171717" },
    { name: "Bootstrap", Icon: SiBootstrap, color: "#7952b3" },
  ],
  [
    { name: "Node.js", Icon: SiNodedotjs, color: "#5fa04e" },
    { name: "Nest.js", Icon: SiNestjs, color: "#e0234e" },
    { name: "ExpressJs", Icon: SiExpress, color: "#333333" },
    { name: "RESTApi", Icon: TbApi, color: "#85ea2d" },
    { name: "Jasmine", Icon: SiJasmine, color: "#8a4182" },
    { name: "Karma", Icon: TbTestPipe, color: "#56c5a8" },
    { name: "Jest", Icon: SiJest, color: "#c21325" },
    { name: "Auth0", Icon: SiAuth0, color: "#eb5424" },
    { name: "JWT", Icon: SiJsonwebtokens, color: "#000000" },
    { name: "Jquery", Icon: SiJquery, color: "#0769ad" },
  ],
  [
    { name: "AWS", Icon: FaAws, color: "#ff9900" },
    { name: "MySQL", Icon: SiMysql, color: "#4479a1" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
    { name: "Snowflake", Icon: SiSnowflake, color: "#29b5e8" },
    { name: "Redis", Icon: SiRedis, color: "#dc382d" },
    { name: "Docker", Icon: SiDocker, color: "#2496ed" },
    { name: "Kubernetes", Icon: SiKubernetes, color: "#326ce5" },
  ],
  [
    { name: "GitHub", Icon: SiGithub, color: "#171717" },
    { name: "GitLab", Icon: SiGitlab, color: "#fc6d26" },
    { name: "Bitbucket", Icon: SiBitbucket, color: "#0052cc" },
    { name: "Cursor", Icon: SiIpfs, color: "#ffffff" },
    { name: "VS Code", Icon: VscVscode, color: "#007acc" },
    { name: "Vercel", Icon: SiVercel, color: "#171717" },
  ],
  [
    { name: "Jira", Icon: SiJira, color: "#0052cc" },
    { name: "Figma", Icon: SiFigma, color: "#F24E1E " },
    { name: "Postman", Icon: SiPostman, color: "#ff6c37" },
    { name: "D3", Icon: SiD3, color: "#f9a03c" },
  ],
  [
    { name: "Copilot", Icon: SiGithubcopilot, color: "#ffffff" },
    { name: "ChatGPT", Icon: SiOpenai, color: "#74AA9C" },
  ],
];

const allSkills = skillRows.flat();

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.Icon;
  const style = {
    "--skill-color": skill.color,
    "--skill-glow": `${skill.color}66`,
  } as CSSProperties;

  return (
    <article
      style={style}
      className="group relative flex h-20 w-[68px] shrink-0 flex-col items-center justify-center gap-1.5 overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] px-1.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_18px_40px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md transition-all duration-300 hover:z-20 hover:-translate-y-2 hover:scale-[1.16] hover:border-accent hover:bg-white/[0.11] hover:shadow-[0_0_30px_rgba(152,87,211,0.45),inset_0_1px_0_rgba(255,255,255,0.22)]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_50%_20%,var(--skill-glow),transparent_62%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 text-white/35 grayscale transition-all duration-300 group-hover:scale-110 group-hover:text-[var(--skill-color)] group-hover:grayscale-0 group-hover:drop-shadow-[0_0_12px_var(--skill-glow)]">
        <Icon aria-hidden="true" className="h-8 w-8" />
      </div>

      <span className="relative z-10 max-w-full truncate text-[10px] font-semibold leading-tight text-white/50 transition-colors duration-300 group-hover:text-white">
        {skill.name}
      </span>
    </article>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative left-1/2 mt-16 w-screen max-w-none -translate-x-1/2 scroll-mt-24 overflow-visible "
    >
      <div className="pointer-events-none absolute -inset-x-16 -inset-y-32">
        <video
          aria-hidden="true"
          className="h-full w-full object-cover opacity-55 mix-blend-screen [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_76%,transparent_100%)]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/video.webm" type="video/webm" />
        </video>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(152,87,211,0.24),rgba(17,7,31,0.18)_48%,transparent_84%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6">
        <p className="text-sm font-semibold tracking-[0.2em] text-accent">SKILLS</p>
        <h2 className="mx-auto max-w-4xl text-center text-4xl font-bold leading-tight md:text-5xl">
          TECH STACK
        </h2>

        <div className="mt-16 hidden flex-col items-center gap-3 md:flex">
          {skillRows.map((row, index) => (
            <div key={index} className="flex justify-center gap-3">
              {row.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 grid w-full max-w-[420px] grid-cols-3 justify-items-center gap-3 sm:grid-cols-4 md:hidden">
          {allSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

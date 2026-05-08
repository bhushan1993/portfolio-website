"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type {
  ExperienceCompanyGroup,
  ExperienceItem,
  ExperienceRole,
  ExperienceSingle,
} from "@/data/experience";
import { experienceItems } from "@/data/experience";

const LOGO_SIZE = 48;

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return `${parts[0]![0]}${parts[parts.length - 1]![0]}`.toUpperCase();
}

function LogoAvatar({
  company,
  logo,
  label,
}: {
  company: string;
  logo?: string;
  label: string;
}) {
  if (logo) {
    return (
      <div
        className="relative shrink-0 overflow-hidden rounded border border-border/80 bg-surface-2"
        style={{ width: LOGO_SIZE, height: LOGO_SIZE }}
      >
        <Image
          src={logo}
          alt=""
          width={LOGO_SIZE}
          height={LOGO_SIZE}
          className="object-cover"
          aria-hidden
        />
        <span className="sr-only">{label}</span>
      </div>
    );
  }

  return (
    <div
      className="flex shrink-0 items-center justify-center rounded border border-border/80 bg-gradient-to-br from-primary/30 to-surface-2 text-xs font-semibold text-foreground"
      style={{ width: LOGO_SIZE, height: LOGO_SIZE }}
      aria-hidden
    >
      <span className="leading-none">{initialsFromName(company)}</span>
      <span className="sr-only">{label}</span>
    </div>
  );
}

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 10 10"
      className={className}
      aria-hidden
      width={10}
      height={10}
    >
      <path
        d="M5 1 L9 5 L5 9 L1 5 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.25}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function SkillsModal({
  skills,
  role,
  organization,
  open,
  onClose,
}: {
  skills: string[];
  role: string;
  organization: string;
  open: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    else if (!open && d.open) d.close();
  }, [open]);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const handleClose = () => onClose();
    d.addEventListener("close", handleClose);
    return () => d.removeEventListener("close", handleClose);
  }, [onClose]);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const onBackdropClick = (e: MouseEvent) => {
      if (e.target === d) d.close();
    };
    d.addEventListener("click", onBackdropClick);
    return () => d.removeEventListener("click", onBackdropClick);
  }, []);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      className="fixed left-1/2 top-1/2 z-[100] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border/80 bg-surface p-6 text-foreground shadow-xl backdrop:bg-transparent [&::backdrop]:bg-black/60"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 id={titleId} className="text-lg font-semibold text-foreground">
          Skills for {role} at {organization}
        </h2>
        <button
          type="button"
          onClick={() => ref.current?.close()}
          className="rounded p-1 text-muted transition-colors hover:bg-surface-2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Close skills list"
        >
          <span aria-hidden className="text-xl leading-none">
            ×
          </span>
        </button>
      </div>
      <ul className="mt-4 max-h-[min(60vh,24rem)] list-disc space-y-2 overflow-y-auto pl-5 text-sm">
        {skills.map((skill, i) => (
          <li key={`${skill}-${i}`} className="text-foreground marker:text-muted">
            {skill}
          </li>
        ))}
      </ul>
    </dialog>
  );
}

function SkillsRow({
  skills,
  role,
  organization,
  highlightCount = 2,
}: {
  skills: string[];
  role: string;
  organization: string;
  highlightCount?: number;
}) {
  const [skillsModalOpen, setSkillsModalOpen] = useState(false);

  if (!skills.length) return null;

  const hi = Math.min(highlightCount, skills.length);
  const highlighted = skills.slice(0, hi);
  const rest = skills.length - hi;

  return (
    <div className="mt-3 flex gap-2">
      <DiamondIcon className="mt-1 shrink-0 text-muted" />
      <div className="min-w-0 text-sm leading-snug">
        <span className="font-semibold text-foreground">
          {highlighted.join(", ")}
        </span>
        {rest > 0 ? (
          <>
            <span className="text-muted"> and </span>
            <button
              type="button"
              className="inline cursor-pointer border-0 bg-transparent p-0 font-inherit text-muted underline decoration-transparent underline-offset-2 transition-colors hover:text-accent hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={() => setSkillsModalOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={skillsModalOpen}
            >
              +{rest} skills
            </button>
          </>
        ) : null}
        {rest > 0 ? (
          <SkillsModal
            skills={skills}
            role={role}
            organization={organization}
            open={skillsModalOpen}
            onClose={() => setSkillsModalOpen(false)}
          />
        ) : null}
      </div>
    </div>
  );
}

function ExpandableDescription({
  descriptionId,
  text,
  expanded,
  onToggle,
}: {
  descriptionId: string;
  text: string;
  expanded: boolean;
  onToggle: () => void;
}) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [needsToggle, setNeedsToggle] = useState(false);

  const measure = useCallback(() => {
    const el = paragraphRef.current;
    if (!el || !text.trim()) {
      setNeedsToggle(false);
      return;
    }
    if (expanded) {
      setNeedsToggle(true);
      return;
    }
    setNeedsToggle(el.scrollHeight > el.clientHeight + 1);
  }, [expanded, text]);

  useLayoutEffect(() => {
    let cancelled = false;
    const id = requestAnimationFrame(() => {
      if (!cancelled) measure();
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(id);
    };
  }, [measure, text]);

  useLayoutEffect(() => {
    if (typeof ResizeObserver === "undefined") return;
    const el = paragraphRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(() => measure());
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  if (!text.trim()) return null;

  return (
    <div className="mt-2">
      <p
        ref={paragraphRef}
        id={descriptionId}
        className={`whitespace-pre-line text-sm leading-relaxed text-muted/90 ${expanded ? "" : "line-clamp-2"}`}
      >
        {text}
      </p>
      {needsToggle ? (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls={descriptionId}
          className="mt-1 text-sm font-medium text-muted underline-offset-2 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      ) : null}
    </div>
  );
}

function useExpandedMap() {
  const [expandedById, setExpandedById] = useState<Record<string, boolean>>({});

  const toggle = useCallback((id: string) => {
    setExpandedById((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const isExpanded = useCallback(
    (id: string) => Boolean(expandedById[id]),
    [expandedById],
  );

  return { toggle, isExpanded };
}

function RoleBlock({
  role,
  organization,
  highlightCount,
  expanded,
  onToggleExpanded,
}: {
  role: ExperienceRole;
  organization: string;
  highlightCount?: number;
  expanded: boolean;
  onToggleExpanded: () => void;
}) {
  const reactId = useId();
  const descriptionId = `${reactId}-desc`;

  const hc = highlightCount ?? role.highlightCount ?? 2;
  const desc = role.description ?? "";

  return (
    <div>
      <h4 className="text-base font-semibold text-foreground">{role.title}</h4>
      <p className="mt-0.5 text-sm text-muted">
        {role.dateRange}
        {role.duration ? ` · ${role.duration}` : ""}
      </p>
      <p className="mt-0.5 text-sm text-muted">
        {[role.location, "workMode" in role && role.workMode]
          .filter(Boolean)
          .join(" · ")}
      </p>

      <ExpandableDescription
        descriptionId={descriptionId}
        text={desc}
        expanded={expanded}
        onToggle={onToggleExpanded}
      />

      <SkillsRow
        skills={role.skills}
        role={role.title}
        organization={organization}
        highlightCount={hc}
      />
    </div>
  );
}

function SingleEntry({
  item,
  expanded,
  toggle,
}: {
  item: ExperienceSingle;
  expanded: boolean;
  toggle: () => void;
}) {
  return (
    <div className="flex gap-4">
      <LogoAvatar
        company={item.company}
        logo={item.logo}
        label={`${item.company} logo`}
      />
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
        <p className="mt-0.5 text-sm text-muted">
          {item.company}
          {item.employmentType ? ` · ${item.employmentType}` : ""}
        </p>
        <p className="mt-0.5 text-sm text-muted">
          {item.dateRange}
          {item.duration ? ` · ${item.duration}` : ""}
        </p>
        <p className="mt-0.5 text-sm text-muted">
          {[item.location, item.workMode].filter(Boolean).join(" · ")}
        </p>

        <ExpandableDescription
          descriptionId={`${item.id}-desc`}
          text={item.description ?? ""}
          expanded={expanded}
          onToggle={toggle}
        />

        <SkillsRow
          skills={item.skills}
          role={item.title}
          organization={item.company}
          highlightCount={item.highlightCount ?? 2}
        />
      </div>
    </div>
  );
}

function CompanyGroupEntry({
  item,
  isExpanded,
  toggle,
}: {
  item: ExperienceCompanyGroup;
  isExpanded: (id: string) => boolean;
  toggle: (id: string) => void;
}) {
  const labelId = `${item.id}-company-heading`;
  const groupRef = useRef<HTMLDivElement>(null);
  const rolesListRef = useRef<HTMLUListElement>(null);
  const roleCount = item.roles.length;
  const pointDivisor = Math.max(roleCount - 1, 1);
  const { scrollYProgress } = useScroll({
    target: groupRef,
    offset: ["start 90%", "end 35%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.25,
  });
  const [progressValue, setProgressValue] = useState(0);
  useMotionValueEvent(smoothProgress, "change", (v) => {
    const clamped = Math.min(Math.max(v, 0), 1);
    setProgressValue((prev) => (Math.abs(prev - clamped) < 0.001 ? prev : clamped));
  });
  const glowTop = useTransform(
    smoothProgress,
    (v) => `${Math.min(Math.max(v, 0), 1) * 100}%`,
  );
  const nearestPointIndex = Math.min(
    roleCount - 1,
    Math.max(0, Math.round(progressValue * pointDivisor)),
  );

  return (
    <div ref={groupRef}>
      <div className="flex gap-4">
        <LogoAvatar
          company={item.company}
          logo={item.logo}
          label={`${item.company} logo`}
        />
        <div className="min-w-0 flex-1">
          <h3 id={labelId} className="text-base font-semibold text-foreground">
            {item.company}
          </h3>
          <p className="mt-0.5 text-sm text-muted">{item.employmentSummary}</p>
        </div>
      </div>

      <div className="relative mt-6 pl-3 md:pl-4">
        <div
          className="absolute bottom-4 left-[21px] top-[6px] w-[3px] bg-violet-300/35 md:left-[25px]"
          aria-hidden
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-[3px] origin-top bg-gradient-to-b from-violet-200/85 via-violet-300/95 to-violet-500"
            style={{ scaleY: smoothProgress }}
          />
          <motion.div
            className="absolute left-1/2 w-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/85 blur-[1px]"
            style={{
              top: glowTop,
            }}
          />
          <motion.div
            className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300"
            style={{
              top: glowTop,
              boxShadow: "0 0 14px rgba(196, 145, 255, 0.98), 0 0 32px rgba(146, 88, 255, 0.65)",
            }}
          />
        </div>

        <ul ref={rolesListRef} className="space-y-10" aria-labelledby={labelId}>
          {item.roles.map((role, index) => (
            <li key={role.id} className="relative pl-10 md:pl-12">
              <motion.span
                className="absolute left-[17px] top-2 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-muted ring-2 ring-surface md:left-[10px]"
                aria-hidden
              >
                <motion.span
                  className="absolute inset-0 rounded-full bg-violet-300"
                  animate={{
                    opacity: index === nearestPointIndex ? 1 : 0.24,
                    scale: index === nearestPointIndex ? 1 : 0.72,
                    boxShadow:
                      index === nearestPointIndex
                        ? "0 0 8px rgba(196,145,255,0.9), 0 0 16px rgba(146,88,255,0.55)"
                        : "0 0 0 rgba(0,0,0,0)",
                  }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                />
                <motion.span
                  className="absolute inset-[-3px] rounded-full bg-violet-300/45 blur-[2px]"
                  animate={{
                    opacity: index === nearestPointIndex ? 0.75 : 0,
                    scale: index === nearestPointIndex ? 1.08 : 0.75,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.span>
              <RoleBlock
                role={role}
                organization={item.company}
                expanded={isExpanded(role.id)}
                onToggleExpanded={() => toggle(role.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ExperienceRow({
  item,
  isExpanded,
  toggle,
}: {
  item: ExperienceItem;
  isExpanded: (id: string) => boolean;
  toggle: (id: string) => void;
}) {
  if (item.kind === "single") {
    return (
      <SingleEntry
        item={item}
        expanded={isExpanded(item.id)}
        toggle={() => toggle(item.id)}
      />
    );
  }

  return (
    <CompanyGroupEntry item={item} isExpanded={isExpanded} toggle={toggle} />
  );
}

export function Experience() {
  const { toggle, isExpanded } = useExpandedMap();

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-10 pt-20 pb-10">
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">
      <p className="text-sm font-semibold tracking-[0.2em] text-accent">EXPERIENCE</p>
        Where I've Worked
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Roles and progression — descriptions expand on demand.
      </p>

      <div className="mt-8 rounded-xl border border-border/80 bg-surface p-6 md:p-8">
        <div className="divide-y divide-border/60">
          {experienceItems.map((item) => (
            <div key={item.id} className="py-8 first:pt-0 last:pb-0">
              <ExperienceRow
                item={item}
                isExpanded={isExpanded}
                toggle={toggle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

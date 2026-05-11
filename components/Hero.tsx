"use client";

import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import styles from "./Hero.module.css";

const textVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const imageVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export function Hero() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6">
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className={`${styles.profileWrap} pointer-events-none absolute bottom-0 right-0 hidden h-[36rem] w-[30rem] md:block`}
      >
       
      </motion.div>

      <motion.div
        variants={textVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <p className="text-sm font-semibold tracking-[0.2em] text-accent">HELLO THERE</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
          I&apos;m{" "}
          <span className="bg-gradient-to-r from-[#e5484d] to-accent bg-clip-text text-transparent">
            Bhushan Shirude
          </span>
        </h1>
        <p className="mt-5 mx-auto max-w-xl text-base leading-8 text-muted">
          Full stack developer specializing in building scalable, cloud-native
          applications using React, Angular, Node.js, and AWS. I design and
          develop robust data processing systems and distributed architectures
          that handle real-world scale efficiently.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <motion.a
            href="/Bhushan_Shirude_CV.pdf"
            download
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-accent/60 bg-[linear-gradient(135deg,rgba(152,87,211,0.38),rgba(229,72,77,0.20))] px-5 py-3 text-base font-semibold text-foreground shadow-[0_18px_55px_-36px_rgba(152,87,211,0.95)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-accent hover:shadow-[0_28px_85px_-50px_rgba(152,87,211,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 22 }}
            style={{ willChange: "transform" }}
          >
            <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_30%,rgba(152,87,211,0.55),transparent_60%)]" />
            <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-white/15 opacity-0 blur-md transition-all duration-500 group-hover:left-[120%] group-hover:opacity-100" />
            <FiDownload aria-hidden="true" className="h-5 w-5" />
            <span>Download CV</span>
          </motion.a>
          <motion.a
            href="https://github.com/bhushan1993"
            target="_blank"
            rel="noreferrer"
            className="hover-lift inline-flex items-center gap-3 rounded-xl border border-border/80 bg-surface/60 px-5 py-3 text-base font-semibold text-foreground transition-all duration-300 hover:border-accent/70 hover:bg-surface-2 hover:text-accent hover:shadow-[0_18px_45px_-34px_rgba(152,87,211,0.95)]"
            whileHover={{ y: -2, scale: 1.06 }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 22 }}
            style={{ willChange: "transform" }}
          >
            <FiGithub aria-hidden="true" className="h-5 w-5" />
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/bhushan-shirude/"
            target="_blank"
            rel="noreferrer"
            className="hover-lift inline-flex items-center gap-3 rounded-xl border border-border/80 bg-surface/60 px-5 py-3 text-base font-semibold text-foreground transition-all duration-300 hover:border-accent/70 hover:bg-surface-2 hover:text-accent hover:shadow-[0_18px_45px_-34px_rgba(152,87,211,0.95)]"
            whileHover={{ y: -2, scale: 1.06 }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 22 }}
            style={{ willChange: "transform" }}
          >
            <FiLinkedin aria-hidden="true" className="h-5 w-5" />
            <span>LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}


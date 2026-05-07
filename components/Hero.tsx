"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
    <section className="relative py-20">
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className={`${styles.profileWrap} pointer-events-none absolute bottom-0 right-0 hidden h-[36rem] w-[30rem] md:block`}
      >
        {/* <div className="relative h-full w-full">
          <Image
            src="/portfolio-image-no-bg.png"
            alt="Bhushan Shirude portrait"
            width={1200}
            height={1200}
            sizes="(min-width: 768px) 30rem, 0px"
            priority
            className={styles.profileImage}
          />
        </div> */}
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
            className="inline-flex transform-gpu items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 22 }}
            style={{ willChange: "transform" }}
          >
            Download CV
          </motion.a>
          <motion.a
            href="https://github.com/bhushan1993"
            target="_blank"
            rel="noreferrer"
            className="inline-flex transform-gpu items-center justify-center rounded-lg border border-border/80 bg-surface px-3 py-2 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-surface-2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="GitHub profile"
            whileHover={{ y: -2, scale: 1.06 }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 22 }}
            style={{ willChange: "transform" }}
          >
            <Image
              src="/icons8-github.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden
            />
            <span className="sr-only">GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/bhushan-shirude/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex transform-gpu items-center justify-center rounded-lg border border-border/80 bg-surface px-3 py-2 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-surface-2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="LinkedIn profile"
            whileHover={{ y: -2, scale: 1.06 }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 22 }}
            style={{ willChange: "transform" }}
          >
            <Image
              src="/icons8-linkedin.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden
            />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}


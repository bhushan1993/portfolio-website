"use client";

import Image from "next/image";
import { motion } from "motion/react";
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
    <section className="relative py-10">
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className={`${styles.profileWrap} pointer-events-none absolute bottom-0 right-0 hidden h-[36rem] w-[30rem] md:block`}
      >
        <div className="relative h-full w-full">
          <Image
            src="/portfolio-image-no-bg.png"
            alt="Bhushan Shirude portrait"
            width={1200}
            height={1200}
            sizes="(min-width: 768px) 30rem, 0px"
            priority
            className={styles.profileImage}
          />
        </div>
      </motion.div>

      <motion.div
        variants={textVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-2xl"
      >
        <p className="text-sm font-semibold tracking-[0.2em] text-accent">HELLO THERE</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">I&apos;m Bhushan Shirude</h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-muted">
          Full stack developer specializing in building scalable, cloud-native
          applications using React, Angular, Node.js, and AWS. I design and
          develop robust data processing systems and distributed architectures
          that handle real-world scale efficiently.
        </p>
      </motion.div>
    </section>
  );
}


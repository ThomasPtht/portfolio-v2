"use client";

import React from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from "motion/react";
import { Button } from "./ui/button";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const badge: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: -12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

// Révélation de ligne : le texte monte depuis un masque (overflow-hidden)
const lineReveal: Variants = {
  hidden: { y: "110%", rotate: 3 },
  show: {
    y: 0,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const buttons: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 16 },
  },
};

type ShapeProps = {
  depth: number; // 0 = fixe, plus grand = bouge davantage
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  scrollY: MotionValue<number>;
  className: string;
  float?: number; // amplitude du flottement continu
  children?: React.ReactNode;
};

const ParallaxShape = ({
  depth,
  mouseX,
  mouseY,
  scrollY,
  className,
  float = 12,
  children,
}: ShapeProps) => {
  const x = useTransform(mouseX, (v) => v * depth * 120);
  const mouseOffsetY = useTransform(mouseY, (v) => v * depth * 120);
  const scrollOffsetY = useTransform(scrollY, (v) => v * depth * 0.6);
  const y = useTransform(
    [mouseOffsetY, scrollOffsetY],
    ([m, s]: number[]) => m + s,
  );

  return (
    <motion.div style={{ x, y }} className={`absolute ${className}`}>
      <motion.div
        animate={{ y: [0, -float, 0], rotate: [0, 6, 0] }}
        transition={{
          duration: 6 + depth * 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const HeroBackground = () => {
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useSpring(rawX, { stiffness: 60, damping: 20 });
  const mouseY = useSpring(rawY, { stiffness: 60, damping: 20 });
  const { scrollY } = useScroll();

  React.useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, rawX, rawY]);

  const common = { mouseX, mouseY, scrollY };

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 select-none"
    >
      {/* Halos lointains */}
      <ParallaxShape
        {...common}
        depth={0.15}
        float={20}
        className="-left-24 top-0"
      >
        <div className="h-80 w-80 rounded-full bg-violet-600/25 blur-3xl" />
      </ParallaxShape>
      <ParallaxShape
        {...common}
        depth={0.25}
        float={24}
        className="right-0 top-1/3"
      >
        <div className="h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
      </ParallaxShape>

      {/* Formes intermédiaires */}
      <ParallaxShape {...common} depth={0.5} className="right-[18%] top-[12%]">
        <div className="h-24 w-24 rounded-full border border-primary/40" />
      </ParallaxShape>
      <ParallaxShape {...common} depth={0.6} className="left-[8%] bottom-[14%]">
        <div className="h-16 w-16 rotate-12 rounded-xl border border-primary/30 bg-primary/5" />
      </ParallaxShape>

      {/* Formes proches : bougent le plus */}
      <ParallaxShape
        {...common}
        depth={1}
        float={16}
        className="right-[8%] bottom-[18%]"
      >
        <div className="h-10 w-10 rotate-45 border border-violet-300/50 bg-violet-400/10" />
      </ParallaxShape>
      <ParallaxShape {...common} depth={0.9} className="left-[42%] top-[6%]">
        <div className="h-3 w-3 rounded-full bg-primary/70" />
      </ParallaxShape>
      <ParallaxShape {...common} depth={1.2} className="left-[30%] bottom-[8%]">
        <div className="h-2 w-2 rounded-full bg-violet-300/70" />
      </ParallaxShape>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative flex items-center mx-auto w-full max-w-7xl px-6">
      <HeroBackground />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center justify-center gap-5 text-center sm:items-start sm:text-left"
      >
        <motion.span
          variants={badge}
          className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/90"
        >
          Fullstack Developer
        </motion.span>

        <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          <span className="block overflow-hidden pb-1">
            <motion.span variants={lineReveal} className="block origin-left">
              Thomas Potherat
            </motion.span>
          </span>
          <span className="mt-2 block overflow-hidden pb-1">
            <motion.span
              variants={lineReveal}
              className="block origin-left text-primary"
            >
              Développeur Fullstack
            </motion.span>
          </span>
        </h1>

        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-base text-white/75 sm:text-lg"
        >
          Je conçois des apps web et mobiles avec React / Next.js / React
          Native, des APIs solides avec NestJS, et des bases de code
          maintenables.
        </motion.p>
        <motion.p variants={fadeUp} className="text-sm text-white/55">
          Basé à Auxerre (Yonne, Bourgogne) · Disponible partout en France, sur
          place ou en remote
        </motion.p>

        <motion.div
          variants={container}
          className="flex flex-wrap items-center justify-center gap-4 sm:justify-start"
        >
          <motion.div variants={buttons}>
            <a href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
                Contact
              </Button>
            </a>
          </motion.div>
          <motion.div variants={buttons}>
            <Button
              variant="outline"
              className="border-primary/40 bg-primary/5 text-primary hover:bg-primary/10"
            >
              Voir mes projets
            </Button>
          </motion.div>
          <motion.a
            variants={buttons}
            href="https://github.com/ThomasPtht"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.15 }}
            className="block opacity-70 transition-opacity hover:opacity-100"
          >
            <Image
              src="/github-logo.png"
              alt=""
              width={28}
              height={28}
              className="brightness-0 invert"
            />
          </motion.a>
          <motion.a
            variants={buttons}
            href="https://www.linkedin.com/in/thomas-potherat-923868166/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.15 }}
            className="block opacity-70 transition-opacity hover:opacity-100"
          >
            <Image
              src="/logo-linkedin.png"
              alt=""
              width={28}
              height={28}
              className="brightness-0 invert"
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

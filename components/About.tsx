"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Button } from "./ui/button";

const parcours = [
  {
    step: "01",
    title: "Le déclic",
    text: "Mon attrait pour le digital est né de la création d'un site WordPress pour un proche : une immersion complète (SEO, webdesign, analytics) qui a fait naître mon intérêt pour la construction de produits web.",
  },
  {
    step: "02",
    title: "Formation et expérience professionnelle",
    text: "Après une formation de 6 mois en développement web, j'ai consolidé mes compétences lors d'une alternance de 15 mois au Crédit Agricole de Champagne Bourgogne. Cette expérience m'a permis de passer un cap : rigueur de code, collaboration avec les équipes métiers et exigence de sécurité inhérente au secteur bancaire.",
  },
  {
    step: "03",
    title: "Aujourd'hui, je construis",
    text: "Mon plaisir, c'est de créer des applications et des sites qui répondent à un vrai besoin : comprendre le problème, concevoir la bonne solution, puis la livrer. Qu'il s'agisse d'un site vitrine pour mettre en valeur votre commerce ou d'une application web et mobile sur-mesure plus complexe. Le tout avec l'exigence d'un produit professionnel, fiable, maintenable et agréable à utiliser.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function About() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 65%"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  return (
    <section className="mx-auto w-full max-w-4xl px-6">
      <motion.div
        {...fadeUp}
        className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:justify-between"
      >
        <div className="text-center sm:text-left">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/90">
            À propos
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Du site WordPress au{" "}
            <span className="text-primary">développement fullstack</span>
          </h1>
        </div>
        <div className="relative h-44 w-44 shrink-0 sm:h-52 sm:w-52">
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl" />
          <Image
            src="/avatar.png"
            alt="Portrait de Thomas Potherat"
            fill
            unoptimized
            priority
            style={{ objectPosition: "71% 50%" }}
            className="relative rounded-full border border-primary/40 bg-white object-cover"
          />
        </div>
      </motion.div>

      {/* Parcours : la ligne se remplit au scroll, chaque étape apparaît à son tour */}
      <div ref={timelineRef} className="relative mt-16 space-y-24 pl-8">
        <div className="absolute bottom-0 left-0 top-0 w-px bg-primary/15" />
        <motion.div
          style={{ scaleY: lineProgress }}
          className="absolute bottom-0 left-0 top-0 w-px origin-top bg-primary"
        />
        {parcours.map((item) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.span
              initial={{ scale: 0, backgroundColor: "#07070d" }}
              whileInView={{ scale: 1, backgroundColor: "var(--primary)" }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-primary"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-200/70">
              {item.step}
            </p>
            <h2 className="mt-1 text-xl font-bold text-white">{item.title}</h2>
            <p className="mt-2 leading-relaxed text-white/75">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Disponibilité */}
      <motion.div
        {...fadeUp}
        className="mt-28 rounded-2xl border border-primary/20 bg-primary/5  p-8"
      >
        <h2 className="text-2xl font-bold text-white">
          Disponible pour vos projets
        </h2>
        <p className="mt-3 leading-relaxed text-white/75">
          Développeur Full Stack, Frontend ou mobile, je suis disponible pour
          donner vie à vos projets : de la conception d'interfaces performantes
          à la mise en production d'un vrai produit. Disponible et mobile, en
          France ou au-delà.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a href="/#projects">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
              Voir mes projets
            </Button>
          </a>
          <a
            href="https://github.com/ThomasPtht"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary/80 hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-potherat-923868166/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary/80 hover:text-primary"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

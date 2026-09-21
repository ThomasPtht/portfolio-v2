"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";

export default function Cta() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:p-10"
      >
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Un projet en tête ? Discutons-en !
          </h2>
          <p className="mt-3 leading-relaxed text-white/75">
            Du site vitrine pour votre commerce à l'application sur-mesure
            conçue pour faciliter votre travail ou celui de vos équipes,
            concrétisons votre vision de la conception jusqu'à la mise en
            production.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a href="/contact">
            <Button className="bg-primary cursor-pointer text-primary-foreground hover:bg-primary/80">
              Me contacter
            </Button>
          </a>
          <a href="/about">
            <Button
              variant="outline"
              className="cursor-pointer border-primary/40 bg-primary/5 text-primary hover:bg-primary/10"
            >
              En savoir plus sur moi
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

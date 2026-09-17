"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const expertiseData = [
  {
    title: "Applications Web",
    description:
      "Interfaces modernes et performantes : de la maquette à la mise en production, avec un rendu impeccable et une expérience utilisateur fluide.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Applications Mobile",
    description:
      "Apps iOS & Android natives : intégration de fonctionnalités matérielles (caméra, galerie), notifications push et paiements in-app.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Backend & APIs",
    description:
      "APIs solides et bases de données fiables : architecture, authentification sécurisée, gestion du stockage et intégrations tierces.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Qualité & Industrialisation",
    description:
      "Du typage strict aux tests automatisés et pipelines CI/CD : des bases de code maintenables qui évoluent sans régressions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function ExpertiseSection() {
  return (
    <section id="services" className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-200/80">
            Ce que je vous apporte
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={cn(
                "h-full rounded-3xl border border-violet-500/20 bg-[#0d0b14] p-8 shadow-[0_0_0_1px_rgba(168,85,247,0.08)] transition-all hover:border-violet-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]",
                "flex flex-col justify-between",
              )}
            >
              <div>
                <div className="mb-5 h-[3px] w-8 rounded-full bg-violet-400" />
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-violet-100/70">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

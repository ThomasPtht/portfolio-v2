"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const projects = [
  {
    id: "kitoya",
    title: "Kitoya",
    subtitle: "App Mobile • React Native / Expo / NestJS",
    description:
      "Application mobile de gestion de collection de maillots de sport avec API NestJS et PostgreSQL.",
    details:
      "Kitoya permet aux collectionneurs de cataloguer leurs maillots. L'application intègre une architecture robuste, une base de données Prisma/PostgreSQL et un système de paiement Stripe.",
    tech: ["React Native", "Expo", "NestJS", "PostgreSQL", "Prisma"],
    // span: "col-span-1 md:col-span-2",
    image: "/kitroom-preview.jpg", // Vérifiez bien que le fichier est dans public/kitroom-preview.jpg
  },
  {
    id: "mtb",
    title: "My Travel Book",
    subtitle: "Web Monitoring • React / Docker",
    description:
      "Plateforme de surveillance de sites web en temps réel avec GraphQL et conteneurisation Docker.",
    details:
      "Sonar surveille la disponibilité des services web. Développé avec React, GraphQL et TypeORM, entièrement conteneurisé via Docker.",
    tech: ["React", "GraphQL", "TypeORM", "Docker"],
    span: "col-span-1",
    image: "/my-travel-book.png",
  },
  {
    id: "sonar",
    title: "Sonar",
    subtitle: "Web Monitoring • React / Docker",
    description:
      "Plateforme de surveillance de sites web en temps réel avec GraphQL et conteneurisation Docker.",
    details:
      "Sonar surveille la disponibilité des services web. Développé avec React, GraphQL et TypeORM, entièrement conteneurisé via Docker.",
    tech: ["React", "GraphQL", "TypeORM", "Docker"],
    span: "col-span-1",
    image: "/Sonar.png", // Assurez-vous d'avoir l'image dans public/
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section id="projects" className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-200/80 mb-10">
          Mes Projets
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group relative flex h-80 cursor-pointer flex-col justify-end overflow-hidden rounded-3xl border border-primary/20 bg-[#0d0b14] p-8"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover object-center opacity-50 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070d] via-[#07070d]/70 to-transparent" />
              <div className="relative z-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {project.subtitle}
                </span>
                <h3 className="mt-1 text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-white/75">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-primary/20 bg-[#0d0b14]/80 px-2.5 py-1 text-xs text-white/80 backdrop-blur-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modale inchangée */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-violet-500/20 bg-[#0d0b14] p-6 shadow-2xl sm:p-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-6 top-6 z-10 rounded-full bg-primary/10 p-2 text-xl text-primary transition hover:text-white"
              >
                ✕
              </button>
              <div className="mb-6 flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-[#07070d] p-2 sm:h-72">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {selectedProject.subtitle}
              </span>
              <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                {selectedProject.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                {selectedProject.details}
              </p>
              <div className="mt-5">
                <h4 className="mb-2 text-sm font-semibold text-white">
                  Technologies :
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t: string) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
                >
                  Fermer
                </button>
                <a
                  href="https://github.com/ThomasPtht"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/80"
                >
                  Voir sur GitHub
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

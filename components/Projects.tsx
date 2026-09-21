"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string;
  highlight: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
};

// TODO: remplacer les liens (github / demo) et les textes marqués par de vraies valeurs
const projects: Project[] = [
  {
    id: "kitoya",
    title: "Kitoya",
    subtitle: "App mobile",
    description:
      "Application mobile de gestion de collection de maillots de sport, avec abonnements, notifications push et API NestJS déployée sur VPS.",
    details:
      "Kitoya permet aux collectionneurs de cataloguer leurs maillots. Les images sont stockées sur Cloudflare R2, avec suppression automatique de l'arrière-plan. L'application gère les abonnements via RevenueCat et envoie des notifications push. Côté suivi : analytics avec PostHog, monitoring des erreurs avec Sentry et tests avec Jest. Le backend NestJS (PostgreSQL, Prisma) est déployé sur un VPS avec Docker, avec des environnements de staging et de production séparés.",
    highlight: "RevenueCat · PostHog · Sentry · VPS Docker",
    tech: ["React Native", "Expo", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    image: "/kitroom-preview.jpg",
    github: "https://github.com/ThomasPtht/kitoya",
    demo: "https://kitoya.com",
  },
  {
    id: "mtb",
    title: "My Travel Book",
    subtitle: "Application web",
    description:
      "Web app pour lister ses voyages avec une note et un commentaire, et les visualiser sur une carte interactive.",
    details:
      "My Travel Book permet de lister ses voyages en leur attribuant une note et un commentaire, et de les visualiser sur une carte interactive. Construite avec Next.js 16, avec Prisma et PostgreSQL pour le backend. Authentification avec NextAuth, tests avec Jest et React Testing Library.",
    highlight: "Carte interactive · NextAuth · Tests Jest",
    tech: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "Jest"],
    image: "/my-travel-book.png",
    github: "https://github.com/ThomasPtht/MyTravelBook",
    demo: "https://my-travel-book-omega.vercel.app/login",
  },
  {
    id: "sonar",
    title: "Sonar",
    subtitle: "Application web",
    description:
      "Application web de monitoring d'adresses URL, avec API GraphQL, authentification sécurisée et pipeline CI/CD.",
    details:
      "Sonar est une application web de monitoring d'adresses URL. Réalisée avec React pour le frontend, et GraphQL Yoga avec Express pour le backend. PostgreSQL sert de base de données, avec TypeORM pour échanger avec elle. Intégration d'une authentification sécurisée et d'un pipeline CI/CD.",
    highlight: "GraphQL Yoga · Auth sécurisée · CI/CD",
    tech: ["React", "GraphQL", "Express", "PostgreSQL", "TypeORM"],
    image: "/Sonar.png",
    github: "https://github.com/WildCodeSchool/2024-09-wns-bleu-3",
    demo: "",
  },
  {
    id: "pulseon",
    title: "PulseOn",
    subtitle: "Application web",
    description:
      "Application pour saisir et analyser ses séances de sport (running et musculation), avec authentification sécurisée et tests.",
    details:
      "PulseOn permet de saisir et d'analyser ses séances de sport, en running comme en musculation. Frontend en React, TypeScript et Apollo Client. Backend en Node.js, Express et Apollo Server, avec TypeORM et PostgreSQL. Authentification sécurisée via JWT et argon2. Tests avec Vitest et React Testing Library.",
    highlight: "Auth JWT + argon2 · Apollo · Tests Vitest",
    tech: ["React", "TypeScript", "Apollo", "Node.js", "PostgreSQL"],
    image: "/pulseon.png",
    github: "https://github.com/ThomasPtht/PulseOn",
    demo: "",
  },
  {
    id: "moveon",
    title: "MoveOn",
    subtitle: "Landing page",
    description:
      "Landing page pour une application de programmes sportifs, au design élégant et moderne.",
    details:
      "Création d'une landing page pour une application de programmes sportifs. Construite avec React et le builder Vite, elle bénéficie d'une esthétique élégante grâce à Tailwind. Les composants sont mis en valeur par la bibliothèque React Awesome, pour une expérience utilisateur moderne.",
    highlight: "Design soigné · React · Vite",
    tech: ["React", "Vite", "Tailwind CSS", "React Awesome"],
    image: "/move-on.png",
    github: "https://github.com/ThomasPtht/MoveOn", // TODO
    demo: "https://moveon.example.com", // TODO
  },
  {
    id: "manaia",
    title: "Manaia bijoux",
    subtitle: "E-commerce WordPress",
    description:
      "Boutique en ligne WordPress optimisée pour les performances et le référencement.",
    details:
      "Élaboration d'une boutique en ligne sous WordPress avec le thème Astra, et ajout de divers plugins pour optimiser les performances du site. Rédaction de fiches produits basée sur l'analyse de mots-clés pour renforcer le référencement on-page. Analyse des données via Google Analytics et la Search Console.",
    highlight: "Performances · SEO on-page · Analytics",
    tech: ["WordPress", "Astra", "SEO", "Analytics"],
    image: "/Manaia-bijoux.png",
    demo: "https://manaia-bijoux.fr",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Fermeture de la modale avec Échap
  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedProject]);

  return (
    <section id="projects" className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-sm font-semibold uppercase tracking-[0.25em] text-violet-200/80">
          Mes Projets
        </h2>
        {/* flex + justify-center : la dernière ligne incomplète reste centrée */}
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex w-full cursor-pointer flex-col overflow-hidden rounded-3xl sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] border border-primary/20 bg-[#0d0b14] text-left transition-colors duration-300 hover:border-primary/50"
            >
              {/* Visuel : la capture est affichée en entier, à pleine luminosité */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-primary/15 bg-[#07070d]">
                <Image
                  src={project.image}
                  alt={`Aperçu du projet ${project.title}`}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {project.subtitle}
                </span>
                <h3 className="mt-1 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {project.description}
                </p>
                <p className="mt-3 text-xs font-medium text-violet-200/70">
                  {project.highlight}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="mt-auto pt-5 text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1">
                  Voir le projet →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedProject.title}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-violet-500/20 bg-[#0d0b14] p-6 shadow-2xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Fermer"
                className="absolute right-6 top-6 z-10 cursor-pointer rounded-full bg-primary/10 p-2 text-xl text-primary transition hover:text-white"
              >
                ✕
              </button>
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl border border-primary/20 bg-[#07070d] sm:h-72">
                <Image
                  src={selectedProject.image}
                  alt={`Aperçu du projet ${selectedProject.title}`}
                  fill
                  sizes="(min-width: 640px) 576px, 100vw"
                  className="object-contain object-center p-2"
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
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="cursor-pointer rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
                >
                  Fermer
                </button>
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-primary/40 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/10"
                  >
                    Voir la démo
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/80"
                  >
                    Voir sur GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

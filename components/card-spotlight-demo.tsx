import type { LucideIcon } from "lucide-react";
import {
  Braces,
  Container,
  Database,
  Monitor,
  Server,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const techStackData = [
  {
    category: "FRONTEND",
    icon: Monitor,
    title: "React & Next.js",
    tags: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Apollo Client",
      "Zustand",
      "TanStack Query",
    ],
  },
  {
    category: "TYPAGE & VALIDATION",
    icon: Braces,
    title: "TypeScript",
    tags: ["React Hook Form", "Zod", "ESLint", "class-validator"],
  },
  {
    category: "BACKEND",
    icon: Server,
    title: "Node.js & NestJS",
    tags: ["Node.js", "NestJS", "REST", "GraphQL"],
  },
  {
    category: "DATA",
    icon: Database,
    title: "PostgreSQL & Prisma",
    tags: ["PostgreSQL", "Prisma", "TypeORM", "SQL Server", "Redis"],
  },
  {
    category: "INFRA & DEVOPS",
    icon: Container,
    title: "Docker & CI/CD",
    tags: [
      "Docker",
      "GitHub Actions",
      "Déploiement VPS",
      "Nginx",
      "Cloudflare R2",
    ],
  },
  {
    category: "QUALITÉ",
    icon: ShieldCheck,
    title: "Tests automatisés",
    tags: [
      "Vitest",
      "Jest",
      "Tests E2E",
      "React Testing Library",
      "Playwright",
    ],
  },
];

export default function TechStackSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-10 text-xs font-semibold uppercase tracking-[0.28em] text-violet-200/80">
        Stack Technique
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {techStackData.map((item, index) => (
          <TechCard
            key={index}
            category={item.category}
            icon={item.icon}
            title={item.title}
            tags={item.tags}
          />
        ))}
      </div>
    </section>
  );
}

const TechCard = ({
  category,
  icon: Icon,
  title,
  tags,
}: {
  category: string;
  icon: LucideIcon;
  title: string;
  tags: string[];
}) => {
  return (
    <CardSpotlight
      className={cn(
        "h-auto w-full rounded-3xl border border-violet-500/20 bg-[#110f1b] p-6 shadow-[0_0_0_1px_rgba(168,85,247,0.08)] transition-all hover:border-violet-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.14)]",
        "flex flex-col justify-between",
      )}
    >
      <div>
        <div className="relative z-20 mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-300">
          <Icon size={20} strokeWidth={2} className="shrink-0" />
        </div>

        <span className="relative z-20 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200/75">
          {category}
        </span>
        <h3 className="relative z-20 mt-1 text-xl font-bold text-white">
          {title}
        </h3>
      </div>

      <div className="relative z-20 mt-8 flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="rounded-md border border-violet-500/20 bg-violet-500/5 px-3 py-1 text-xs font-medium text-violet-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </CardSpotlight>
  );
};

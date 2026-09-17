import { cn } from "@/lib/utils";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const techStackData = [
  {
    category: "FRONTEND",
    title: "React & Next.js",
    tags: ["React", "Next.js", "React Native", "Expo"],
  },
  {
    category: "LANGAGE",
    title: "TypeScript",
    tags: ["TypeScript Strict", "Zod", "Eslint"],
  },
  {
    category: "BACKEND",
    title: "Node.js & NestJS",
    tags: ["Node.js", "NestJS", "REST", "GraphQL"],
  },
  {
    category: "DATA",
    title: "PostgreSQL & Prisma",
    tags: ["PostgreSQL", "Prisma", "TypeORM", "SQL Server", "Redis"],
  },
  {
    category: "INFRA & DEVOPS",
    title: "Docker & CI/CD",
    tags: ["Docker", "GitHub Actions", "AWS S3", "Cloudflare R2"],
  },
  {
    category: "QUALITÉ",
    title: "Tests automatisés",
    tags: ["Vitest", "Jest", "Tests E2E", "Couverture CI"],
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
  title,
  tags,
}: {
  category: string;
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="shrink-0"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
              fill="currentColor"
              strokeWidth="0"
            />
          </svg>
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

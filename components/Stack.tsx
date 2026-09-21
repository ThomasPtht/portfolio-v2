import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import TechStackSection from "./card-spotlight-demo";

const techStack = [
  { name: "React", icon: "/logos/react-logo.png", quote: "", title: "" },
  { name: "Nextjs", icon: "/logos/next-js.svg", quote: "", title: "" },
  { name: "PostgreSQL", icon: "/logos/Postgresql.png", quote: "", title: "" },
  { name: "Prisma", icon: "/logos/prisma.png", quote: "", title: "" },
  { name: "Tailwind", icon: "/logos/tailwind.png", quote: "", title: "" },
  { name: "NestJS", icon: "/logos/nestjs.png", quote: "", title: "" },
  { name: "Docker", icon: "/logos/docker.png", quote: "", title: "" },
];

const Stack = () => {
  return (
    <section id="stack" className="w-full py-20 mx-auto">
      <div className="max-w-7xl mx-auto px-6">
        <TechStackSection />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <InfiniteMovingCards items={techStack} direction="left" speed="fast" />
      </div>
    </section>
  );
};

export default Stack;

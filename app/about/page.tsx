import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { NavbarDemo } from "@/components/Header";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Mon parcours de développeur Fullstack basé à Auxerre : de la création d'un site WordPress à une alternance au Crédit Agricole à Dijon, jusqu'aux applications web et mobiles d'aujourd'hui.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#07070d] text-white antialiased">
      <NavbarDemo />
      <main className="flex flex-1 w-full flex-col py-32 bg-transparent">
        <About />
      </main>
      <Footer />
    </div>
  );
}

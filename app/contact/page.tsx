import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { NavbarDemo } from "@/components/Header";
import FormContact from "@/components/FormContact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Thomas Potherat, développeur Fullstack à Auxerre, pour un poste ou une mission : application web, application mobile ou site sur-mesure.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#07070d] text-white antialiased">
      <NavbarDemo />
      <main className="flex flex-1 w-full flex-col py-32 bg-transparent">
        <section className="mx-auto w-full max-w-2xl px-6">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/90">
            Contact
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Un projet en tête ?{" "}
            <span className="text-primary">Discutons-en !</span>
          </h1>
          <p className="mt-4 mb-10 leading-relaxed text-white/75">
            Décrivez-moi votre besoin, je vous réponds rapidement.
          </p>
          <FormContact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

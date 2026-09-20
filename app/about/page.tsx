import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { NavbarDemo } from "@/components/Header";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "À propos | Thomas Potherat",
  description:
    "Mon parcours, ce qui m'a mené au développement web, et les opportunités que je recherche.",
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

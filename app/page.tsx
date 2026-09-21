import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import { NavbarDemo } from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ExpertiseSection from "@/components/Services";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#07070d] text-white antialiased">
      <NavbarDemo />
      <main className="flex flex-1 w-full flex-col py-32 bg-transparent">
        <Hero />
        <Stack />
        <ExpertiseSection />
        <Projects />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

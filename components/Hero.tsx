import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="flex items-center mx-auto w-full max-w-7xl px-6">
      <div className="flex flex-col items-center justify-center gap-5 text-center sm:items-start sm:text-left">
        <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/90">
          Fullstack Developer
        </span>
        <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          Thomas Potherat
          <span className="mt-2 block text-primary">Développeur Fullstack</span>
        </h1>
        <p className="max-w-2xl text-base text-white/75 sm:text-lg">
          Je conçois des apps web et mobiles, des APIs solides et des bases de
          code maintenables.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
            Contact
          </Button>
          <Button
            variant="outline"
            className="border-primary/40 bg-primary/5 text-primary hover:bg-primary/10"
          >
            Portfolio
          </Button>
          <span className="text-sm text-primary/80">Github</span>
          <span className="text-sm text-primary/80">Linkedin</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

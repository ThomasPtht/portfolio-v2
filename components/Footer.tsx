import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-violet-500/20 bg-[#07070d]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-violet-100/60">
          &copy; {new Date().getFullYear()} Thomas Potherat. Tous droits
          réservés.
        </p>

        <div className="flex items-center gap-4 text-sm text-violet-100/80">
          <span>Prêts à travailler ensemble ?</span>
          <button className="rounded-lg border border-violet-500/40 bg-violet-500/10 px-4 py-2 transition-colors hover:bg-violet-500/20">
            <span className="font-semibold text-violet-200">Contactez-moi</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

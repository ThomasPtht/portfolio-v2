import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-violet-500/20 bg-[#07070d]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-violet-100/60">
          &copy; {new Date().getFullYear()} Thomas Potherat. Tous droits
          réservés.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/ThomasPtht"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="opacity-70 transition hover:scale-110 hover:opacity-100"
          >
            {/* brightness-0 invert : passe le PNG noir en blanc */}
            <Image
              src="/github-logo.png"
              alt=""
              width={28}
              height={28}
              className="brightness-0 invert"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-potherat-923868166/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="opacity-70 transition hover:scale-110 hover:opacity-100"
          >
            <Image
              src="/logo-linkedin.png"
              alt=""
              width={28}
              height={28}
              className="brightness-0 invert"
            />
          </a>
        </div>
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

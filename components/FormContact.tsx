"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-primary/25 bg-primary/5 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-primary focus:bg-primary/10 focus:ring-2 focus:ring-primary/30";

export default function FormContact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(json.error ?? "Une erreur est survenue.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage("Impossible de joindre le serveur. Réessayez.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        role="status"
        className="rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-white">Message envoyé !</h2>
        <p className="mt-2 text-white/75">
          Merci pour votre message, je vous réponds très vite.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 cursor-pointer text-sm text-primary/80 hover:text-primary"
        >
          Envoyer un autre message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-white/80"
          >
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            placeholder="Votre nom"
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-white/80"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="vous@exemple.fr"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-white/80"
        >
          Votre projet
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          placeholder="Parlez-moi de votre projet, de vos besoins, de vos délais…"
          className={`${fieldClass} resize-y`}
        />
      </div>

      {/* Honeypot anti-spam : invisible pour les humains */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Ne pas remplir</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
        >
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "sending"}
        className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/80 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
      </Button>
    </form>
  );
}

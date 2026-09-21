import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const to = process.env.CONTACT_TO_EMAIL;
  if (!process.env.RESEND_API_KEY || !to) {
    console.error("RESEND_API_KEY ou CONTACT_TO_EMAIL manquant");
    return Response.json({ error: "Configuration serveur incomplète." }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Honeypot : un bot remplit ce champ caché. On répond OK sans rien envoyer.
  if (typeof body.website === "string" && body.website !== "") {
    return Response.json({ success: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2 || name.length > 100) {
    return Response.json({ error: "Nom invalide." }, { status: 400 });
  }
  if (!EMAIL_REGEX.test(email) || email.length > 200) {
    return Response.json({ error: "Email invalide." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5000) {
    return Response.json(
      { error: "Le message doit faire entre 10 et 5000 caractères." },
      { status: 400 },
    );
  }

  try {
    const { error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [to],
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error(error);
      return Response.json({ error: "Envoi impossible." }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Envoi impossible." }, { status: 500 });
  }
}

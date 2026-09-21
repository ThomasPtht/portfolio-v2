import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

// Styles inline : seule méthode fiable pour les clients mail
export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "#f4f2fb",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          borderTop: "4px solid #8b5cf6",
          padding: "28px",
          color: "#1f1b2e",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "12px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#7c3aed",
          }}
        >
          Nouveau message · Portfolio
        </p>
        <h1 style={{ margin: "8px 0 20px", fontSize: "22px" }}>
          {name} vous a écrit
        </h1>

        <p style={{ margin: "0 0 4px", fontSize: "13px", color: "#6b6580" }}>
          Email
        </p>
        <p style={{ margin: "0 0 20px", fontSize: "15px" }}>
          <a href={`mailto:${email}`} style={{ color: "#7c3aed" }}>
            {email}
          </a>
        </p>

        <p style={{ margin: "0 0 4px", fontSize: "13px", color: "#6b6580" }}>
          Message
        </p>
        <div
          style={{
            backgroundColor: "#f4f2fb",
            borderRadius: "8px",
            padding: "16px",
            fontSize: "15px",
            lineHeight: 1.6,
            whiteSpace: "pre-wrap",
          }}
        >
          {message}
        </div>

        <p style={{ margin: "24px 0 0", fontSize: "12px", color: "#8a849c" }}>
          Répondez directement à cet email pour écrire à {name}.
        </p>
      </div>
    </div>
  );
}

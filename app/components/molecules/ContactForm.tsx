"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Input = dynamic(() => import("@/app/components/atoms/Input"), {
  ssr: false,
});
const TextArea = dynamic(() => import("@/app/components/atoms/TextArea"), {
  ssr: false,
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [inputNameError, setInputNameError] = useState("");
  const [inputEmailError, setInputEmailError] = useState("");
  const [inputMessageError, setInputMessageError] = useState("");
  const [status, setStatus] = useState("");
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  const COOLDOWN_MS = 60 * 60 * 1000;
  const LS_KEY = "contact_last_sent";

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [status]);

  useEffect(() => {
    const check = () => {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return setCooldownRemaining(0);
      const elapsed = Date.now() - parseInt(raw, 10);
      const remaining = COOLDOWN_MS - elapsed;
      setCooldownRemaining(remaining > 0 ? remaining : 0);
    };

    check();
    const interval = setInterval(check, 1000);
    return () => clearInterval(interval);
  }, []);

  const validatedName = (name: string) => {
    if (!name) {
      setInputNameError("Le nom est requis");

      return false;
    }

    if (name.length < 2) {
      setInputNameError("Le nom doit contenir plus de 2 caractères");

      return false;
    }

    if (name.length > 50) {
      setInputNameError("Le nom doit contenir au maximum 50 caractères");

      return false;
    }

    setInputNameError("");

    return true;
  };

  const validatedEmail = (email: string) => {
    const regex = /^(?![a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$).+$/;

    if (!email) {
      setInputEmailError("L'email est requis");

      return false;
    }

    if (regex.test(email)) {
      setInputEmailError("L'email est invalide");

      return false;
    }

    setInputEmailError("");

    return true;
  };

  const validatedMessage = (message: string) => {
    if (!message) {
      setInputMessageError("Le message est requis");

      return false;
    }

    if (message.length < 10) {
      setInputMessageError("Le message doit contenir au moins 10 caractères");

      return false;
    }

    if (message.length > 1000) {
      setInputMessageError(
        "Le message doit contenir au maximum 1000 caractères"
      );

      return false;
    }

    setInputMessageError("");

    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    switch (e.target.name) {
      case "name":
        validatedName(e.target.value);
        break;

      case "email":
        validatedEmail(e.target.value);
        break;

      case "message":
        validatedMessage(e.target.value);
        break;
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    validatedName(formData.name);
    validatedEmail(formData.email);
    validatedMessage(formData.message);

    if (
      validatedMessage(formData.message) &&
      validatedEmail(formData.email) &&
      validatedName(formData.name)
    ) {
      setStatus("Envoi en cours…");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus(result.message);
        localStorage.setItem(LS_KEY, Date.now().toString());
        setCooldownRemaining(COOLDOWN_MS);

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(result.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "12px" }}
    >
      {inputNameError && (
        <span style={{ fontSize: "12px", color: "#f87171", marginLeft: "4px" }}>
          {inputNameError}
        </span>
      )}
      <Input
        type="text"
        name="name"
        placeholder="Nom…"
        value={formData.name}
        onChange={handleChange}
      />

      {inputEmailError && (
        <span style={{ fontSize: "12px", color: "#f87171", marginLeft: "4px" }}>
          {inputEmailError}
        </span>
      )}
      <Input
        type="text"
        name="email"
        placeholder="Email…"
        value={formData.email}
        onChange={handleChange}
      />

      {inputMessageError && (
        <span style={{ fontSize: "12px", color: "#f87171", marginLeft: "4px" }}>
          {inputMessageError}
        </span>
      )}
      <TextArea
        name="message"
        placeholder="Message…"
        value={formData.message}
        onChange={handleChange}
      />

      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem" }}>
        {status && (
          <p style={{
              fontSize: "13px",
              fontWeight: 600,
              background: "var(--grad)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
            {status}
          </p>
        )}
        {cooldownRemaining > 0 && (
          <p style={{ fontSize: "12px", color: "#9ca3af" }}>
            {`Disponible dans ${Math.ceil(cooldownRemaining / 60000)} min`}
          </p>
        )}
        <button
          type="submit"
          disabled={cooldownRemaining > 0}
          style={{
            padding: "10px 24px",
            background: cooldownRemaining > 0 ? "#374151" : "var(--grad)",
            border: "none",
            borderRadius: "10px",
            color: cooldownRemaining > 0 ? "#6b7280" : "#fff",
            fontWeight: 600,
            fontSize: "14px",
            cursor: cooldownRemaining > 0 ? "not-allowed" : "pointer",
          }}
        >
          Envoyer →
        </button>
      </div>
    </form>
  );
}

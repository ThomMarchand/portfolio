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

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [status]);

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

  const validatedEmail = (email?: string) => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      className="bg-white space-y-4 p-4 border border-indigo-500 rounded-xl shadow-md"
    >
      {inputNameError && (
        <span className="text-xs text-green-600 ml-[9px]">
          {inputNameError}
        </span>
      )}

      <Input
        type="text"
        name="name"
        placeholder="Nom…"
        value={formData.name}
        onInput={handleChange}
      />

      {inputEmailError && (
        <span className="text-xs text-green-600 ml-[9px]">
          {inputEmailError}
        </span>
      )}

      <Input
        type="text"
        name="email"
        placeholder="Email…"
        value={formData.email}
        onInput={handleChange}
      />

      {inputMessageError && (
        <span className="text-xs text-green-600 ml-[9px]">
          {inputMessageError}
        </span>
      )}

      <TextArea
        name="message"
        placeholder="Message…"
        value={formData.message}
        onInput={handleChange}
      />

      <div className="flex justify-end">
        <div className="flex flex-col items-end gap-5">
          <button
            type="submit"
            className={`px-4 py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-800 transition duration-300`}
          >
            Envoyer
          </button>
          {status && <p className="text-green-600 font-bold">{status}</p>}
        </div>
      </div>
    </form>
  );
}

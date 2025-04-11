"use client";

import { useState } from "react";
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

  const validatedName = () => {
    const { name } = formData;
    if (!name) {
      return setInputNameError("Le nom est requis");
    }

    if (name.length < 2) {
      return setInputNameError("Le nom doit contenir plus de 2 caractères");
    }

    if (name.length > 50) {
      return setInputNameError("Le nom doit contenir au maximum 50 caractères");
    }

    return setInputNameError("");
  };

  const validatedEmail = () => {
    const { email } = formData;
    const regex = /^(?![a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$).+$/;

    if (!email) {
      return setInputEmailError("L'email est requis");
    }

    if (regex.test(email)) {
      return setInputEmailError("L'email est invalide");
    }

    return setInputEmailError("");
  };

  const validatedMessage = () => {
    const { message } = formData;
    if (!message) {
      return setInputMessageError("Le message est requis");
    }

    if (message.length < 10) {
      return setInputMessageError(
        "Le message doit contenir au moins 10 caractères"
      );
    }

    if (message.length > 1000) {
      return setInputMessageError(
        "Le message doit contenir au maximum 1000 caractères"
      );
    }

    return setInputMessageError("");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    validatedName();
    validatedEmail();
    validatedMessage();

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    validatedName();
    validatedEmail();
    validatedMessage();

    if (!inputNameError && !inputEmailError && !inputMessageError) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white space-y-4 p-4 border border-indigo-500 rounded-xl shadow-md"
    >
      {inputNameError && (
        <span className="text-xs text-red-500 ml-[9px]">{inputNameError}</span>
      )}

      <Input
        type="text"
        name="name"
        placeholder="Nom…"
        value={formData.name}
        onChange={handleChange}
        onBlur={validatedName}
      />

      {inputEmailError && (
        <span className="text-xs text-red-500 ml-[9px]">{inputEmailError}</span>
      )}

      <Input
        type="text"
        name="email"
        placeholder="Email…"
        value={formData.email}
        onChange={handleChange}
        onBlur={validatedEmail}
      />

      {inputMessageError && (
        <span className="text-xs text-red-500 ml-[9px]">
          {inputMessageError}
        </span>
      )}

      <TextArea
        name="message"
        placeholder="Message…"
        value={formData.message}
        onChange={handleChange}
        onBlur={validatedMessage}
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className={`px-4 py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-800 transition duration-300`}
        >
          Envoyer
        </button>
      </div>
      {/* {status && <p>{status}</p>} */}
    </form>
  );
}

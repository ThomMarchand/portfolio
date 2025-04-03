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
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleErrors = () => {
    const { name, email, message } = formData;

    if (name.length < 1 || email.length < 1 || message.length < 1) {
      return setFormError({
        ...formError,
        name: name.length > 0 ? "" : "Le nom est requis",
        email: email.length > 0 ? "" : "L'email est requis",
        message: message.length > 0 ? "" : "Le message est requis",
      });
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormError({ ...formError, email: "L'email est invalide" });
    }

    // return name.length < 1 && email.length < 1 && message.length < 1;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleErrors();
    console.log("formError", formError);

    // setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white space-y-4 p-4 border border-indigo-500 rounded-xl shadow-md"
    >
      {formError.name && (
        <span className="text-xs text-red-500 ml-[9px]">{formError.name}</span>
      )}

      <Input
        type="text"
        name="name"
        placeholder="Nom…"
        value={formData.name}
        onChange={handleChange}
      />

      {formError.email && (
        <span className="text-xs text-red-500 ml-[9px]">{formError.email}</span>
      )}

      <Input
        type="text"
        name="email"
        placeholder="Email…"
        value={formData.email}
        onChange={handleChange}
      />

      {formError.message && (
        <span className="text-xs text-red-500 ml-[9px]">
          {formError.message}
        </span>
      )}

      <TextArea
        name="message"
        placeholder="Message…"
        value={formData.message}
        onChange={handleChange}
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

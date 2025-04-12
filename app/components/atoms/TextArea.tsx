"use client";

interface FormData {
  name: string;
  placeholder: string;
  value: string;
  onInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({
  name,
  placeholder,
  value,
  onInput,
}: FormData) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onInput={onInput}
      className="bg-indigo-100 w-full p-2 border border-indigo-700 rounded-xl focus:border-2 transition duration-300"
    />
  );
}

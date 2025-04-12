"use client";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  name,
  placeholder,
  value,
  onInput,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onInput={onInput}
      className="bg-indigo-100 w-full p-2 border border-indigo-700 rounded-xl focus:border-2 transition duration-300"
    />
  );
}

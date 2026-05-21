"use client";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  name,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 bg-cloud-dancer border border-hematite/20 rounded-xl font-body text-sm text-blue-fusion placeholder:text-cloud-cover outline-none focus:border-baltic-sea/50 transition-colors"
    />
  );
}

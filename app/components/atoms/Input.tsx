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
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "10px",
        color: "var(--text)",
        width: "100%",
        padding: "10px 14px",
        fontSize: "14px",
        outline: "none",
      }}
    />
  );
}

"use client";

interface FormData {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({
  name,
  placeholder,
  value,
  onChange,
}: FormData) {
  return (
    <textarea
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
        minHeight: "120px",
        resize: "vertical",
      }}
    />
  );
}

"use client";

interface FormData {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({
  name,
  placeholder,
  value,
  onChange,
  onBlur,
}: FormData) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="bg-indigo-100 w-full p-2 border border-indigo-700 rounded-xl focus:border-2 transition duration-300"
    />
  );
}

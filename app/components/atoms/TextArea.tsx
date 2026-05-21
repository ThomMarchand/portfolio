"use client";

interface FormData {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({ name, placeholder, value, onChange }: FormData) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 bg-cloud-dancer border border-hematite/20 rounded-xl font-body text-sm text-blue-fusion placeholder:text-cloud-cover outline-none focus:border-baltic-sea/50 transition-colors min-h-32 resize-y"
    />
  );
}

export type TagVariant = "light" | "dark";

export default function Tag({
  label,
  variant = "light",
}: {
  label: string;
  variant?: TagVariant;
}) {
  const variants: Record<TagVariant, string> = {
    dark: "bg-white/15 text-cloud-dancer border-white/20",
    light: "bg-blue-fusion/10 text-blue-fusion border-blue-fusion/15",
  };
  return (
    <span
      className={`font-label text-xs px-2.5 py-1 rounded-full border ${variants[variant]}`}
    >
      {label}
    </span>
  );
}

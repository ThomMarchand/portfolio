export default function StackTag({
  label,
  dark = false,
}: {
  label: string;
  dark?: boolean;
}) {
  return (
    <span
      className={`font-label text-xs px-2.5 py-1 rounded-full border ${
        dark
          ? "bg-white/15 text-cloud-dancer border-white/20"
          : "bg-hematite/10 text-hematite border-hematite/20"
      }`}
    >
      {label}
    </span>
  );
}

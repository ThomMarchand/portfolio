import { PERSONAL } from "@/app/lib/theme";

export default function Footer() {
  return (
    <footer className="max-w-[1100px] mx-auto px-6 py-6 border-t border-hematite/15 flex justify-between items-center flex-wrap gap-2">
      <p className="font-label text-sm text-cloud-cover">
        © {new Date().getFullYear()} {PERSONAL.name}
      </p>
      <p className="font-label text-sm text-cloud-cover">{PERSONAL.location}</p>
    </footer>
  );
}

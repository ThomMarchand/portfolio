import JustCoaching from "@/app/components/organisms/JustCoaching";
import WildCodeSchool from "@/app/components/organisms/WildCodeSchool";
import JavaProject from "@/app/components/organisms/JavaProject";

export default function SectionProject() {
  return (
    <section id="projects" className="max-w-[1100px] mx-auto px-6">
      <div data-reveal className="mb-12 pt-24">
        <p className="font-label text-xs text-quiet-violet uppercase tracking-widest mb-3 flex items-center gap-2">
          <span className="inline-block w-5 h-px bg-quiet-violet" />
          Projets
        </p>
        <h2
          className="font-display font-bold text-hematite tracking-tight"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
        >
          Ce que j&apos;ai construit.
        </h2>
      </div>

      <div data-reveal className="flex flex-col gap-5 pb-12">
        <JustCoaching />

        {/* Secondary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <WildCodeSchool />
          <JavaProject />
        </div>
      </div>
    </section>
  );
}

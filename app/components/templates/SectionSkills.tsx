import { SKILLS_CATEGORIES as skillCategories } from "@/app/lib/constants";

import Tag from "@/app/components/atoms/Tag";

export default function SectionSkills() {
  return (
    <section id="skills" className="max-w-[1100px] mx-auto px-6">
      <div data-reveal className="mb-12 pt-24">
        <p className="font-label text-xs text-quiet-violet uppercase tracking-widest mb-3 flex items-center gap-2">
          <span className="inline-block w-5 h-px bg-quiet-violet" />
          Compétences
        </p>
        <h2
          className="font-display font-bold text-blue-fusion tracking-tight"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
        >
          Stack & outils.
        </h2>
      </div>

      <div
        data-reveal
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-12"
      >
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className={`${cat.cardBg} rounded-2xl p-6 border border-black/5`}
          >
            <div className="flex items-center justify-between mb-4">
              <p
                className={`font-label font-semibold text-sm uppercase tracking-wider ${cat.titleColor}`}
              >
                {cat.title}
              </p>
              <span className={`font-label text-xs ${cat.numColor}`}>
                {cat.num}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.tags.map((tag) => (
                <Tag key={tag} label={tag} variant={cat.tagVariant} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

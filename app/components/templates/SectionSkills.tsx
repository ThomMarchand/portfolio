type TagVariant = "light" | "dark";

function Tag({ label, variant }: { label: string; variant: TagVariant }) {
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

const skillCategories = [
  {
    num: "01",
    title: "Back-End",
    cardBg: "bg-blue-fusion",
    titleColor: "text-cloud-dancer",
    numColor: "text-cloud-dancer/40",
    tagVariant: "dark" as TagVariant,
    tags: ["Node.js", "TypeScript", "AdonisJS", "Express", "RethinkDB", "PostgreSQL", "REST API"],
  },
  {
    num: "02",
    title: "Front-End",
    cardBg: "bg-veiled-vista",
    titleColor: "text-blue-fusion",
    numColor: "text-blue-fusion/40",
    tagVariant: "light" as TagVariant,
    tags: ["Vue.js", "Next.js", "React Native", "Tailwind", "Sass"],
  },
  {
    num: "03",
    title: "DevOps & Outils",
    cardBg: "bg-golden-mist",
    titleColor: "text-blue-fusion",
    numColor: "text-blue-fusion/40",
    tagVariant: "light" as TagVariant,
    tags: ["Docker", "Git / GitHub", "NGINX", "Caddy", "macOS", "Ubuntu"],
  },
  {
    num: "04",
    title: "Méthodes",
    cardBg: "bg-quiet-violet",
    titleColor: "text-cloud-dancer",
    numColor: "text-cloud-dancer/40",
    tagVariant: "dark" as TagVariant,
    tags: ["Scrum", "Kanban", "Tests unitaires", "CI/CD", "MVC"],
  },
  {
    num: "05",
    title: "En apprentissage",
    cardBg: "bg-baltic-sea",
    titleColor: "text-cloud-dancer",
    numColor: "text-cloud-dancer/40",
    tagVariant: "dark" as TagVariant,
    tags: ["Java", "Maven", "JDBC", "MVC Java"],
  },
  {
    num: "06",
    title: "Je connais",
    cardBg: "bg-white",
    titleColor: "text-blue-fusion",
    numColor: "text-cloud-cover/60",
    tagVariant: "light" as TagVariant,
    tags: ["GraphQL", "Apollo", "TypeORM", "Playwright", "Jest", "Figma"],
  },
];

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
              <p className={`font-label font-semibold text-sm uppercase tracking-wider ${cat.titleColor}`}>
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

function StackTag({ label, dark = false }: { label: string; dark?: boolean }) {
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

const archBlocks = [
  { label: "Architecture", value: "API REST (Node.js)" },
  { label: "CRM Manager", value: "Vue.js + Bootstrap" },
  { label: "App Coach", value: "React Native + TS" },
  { label: "App Client", value: "Next.js + Tailwind" },
  { label: "Visioconférence", value: "AdonisJS + PostgreSQL" },
];

const jcStack = [
  "Node.js", "Express", "RethinkDB", "AdonisJS",
  "Vue.js", "Next.js", "React Native", "Docker", "PostgreSQL",
];

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
        {/* Featured — Just Coaching — dark card */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-0 bg-blue-fusion rounded-3xl overflow-hidden border border-black/10">
          <div className="p-8">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg mb-5">
              ⚡
            </div>
            <h3 className="font-display font-bold text-cloud-dancer text-xl mb-3">
              Just Coaching — API & Écosystème
            </h3>
            <p className="font-body text-cloud-dancer/70 text-sm leading-relaxed mb-5">
              Architecture REST connectant CRM, app coach, app client et
              visioconférence. Développement de nouvelles routes, optimisation
              de performances et synchronisation avec des services tiers (Brevo,
              Stripe, Apple Pay).
            </p>

            <div className="flex flex-col gap-2 mb-5">
              <div className="pt-3 border-t border-white/10 flex items-baseline gap-2">
                <span className="font-display font-bold text-2xl text-golden-mist">
                  −37s
                </span>
                <span className="font-label text-sm text-cloud-dancer/60">
                  de temps de réponse sur la route commandes
                </span>
              </div>
              <div className="pt-3 border-t border-white/10 flex items-baseline gap-2">
                <span className="font-display font-bold text-2xl text-golden-mist">
                  4
                </span>
                <span className="font-label text-sm text-cloud-dancer/60">
                  applications interconnectées
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {jcStack.map((t) => (
                <StackTag key={t} label={t} dark />
              ))}
            </div>
          </div>

          {/* Arch blocks column — slightly darker */}
          <div className="bg-black/20 p-6 flex flex-col gap-2.5 justify-center">
            {archBlocks.map((b) => (
              <div
                key={b.label}
                className="bg-white/8 rounded-xl p-4 border border-white/10"
              >
                <p className="font-label text-xs text-cloud-dancer/50 uppercase tracking-wider mb-1">
                  {b.label}
                </p>
                <p className="font-display font-semibold text-sm text-baltic-sea">
                  {b.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-3xl p-8 border border-hematite/10">
            <div className="w-10 h-10 rounded-xl bg-veiled-vista flex items-center justify-center text-lg mb-5">
              🚀
            </div>
            <h3 className="font-display font-bold text-blue-fusion text-xl mb-3">
              Wild Code Online
            </h3>
            <p className="font-body text-hematite text-sm leading-relaxed mb-5">
              Plateforme de code en ligne — développer, tester et partager du
              code facilement. Projet de fin d&apos;alternance avec CI, tests
              unitaires, intégration et architecture MVC.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["GraphQL", "Apollo", "TypeORM", "Next.js", "Jest", "Playwright", "Nginx"].map((t) => (
                <StackTag key={t} label={t} />
              ))}
            </div>
          </div>

          <div className="bg-golden-mist rounded-3xl p-8 border border-black/5">
            <div className="w-10 h-10 rounded-xl bg-blue-fusion flex items-center justify-center text-lg mb-5">
              ☕
            </div>
            <h3 className="font-display font-bold text-blue-fusion text-xl mb-3">
              CRUD User — Java
            </h3>
            <p className="font-body text-blue-fusion/70 text-sm leading-relaxed mb-5">
              Projet personnel d&apos;apprentissage Java : architecture MVC,
              serveur HTTP natif, JDBC / SQLite, Maven. Construction from
              scratch pour maîtriser les fondamentaux du langage.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Java", "Maven", "JDBC", "SQLite", "MVC"].map((t) => (
                <StackTag key={t} label={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

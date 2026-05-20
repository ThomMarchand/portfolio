function StackTag({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "14px",
        padding: "3px 8px",
        borderRadius: "5px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid var(--border)",
        color: "var(--text-dim)",
      }}
    >
      {label}
    </span>
  );
}

function SectionHeader() {
  return (
    <div data-reveal style={{ marginBottom: "3rem", paddingTop: "6rem" }}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: "var(--violet-light)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            width: "20px",
            height: "1px",
            background: "var(--violet)",
            display: "inline-block",
          }}
        />
        Projets
      </div>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "var(--text)",
        }}
      >
        Ce que j&apos;ai construit.
      </h2>
    </div>
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
  "Node.js",
  "Express",
  "RethinkDB",
  "AdonisJS",
  "Vue.js",
  "Next.js",
  "React Native",
  "Docker",
  "PostgreSQL",
];

export default function SectionProject() {
  return (
    <section
      id="projects"
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 2rem",
      }}
    >
      <SectionHeader />

      <div data-reveal style={{ display: "flex", flexDirection: "column", gap: "1.25rem", paddingBottom: "3rem" }}>
        {/* Just Coaching — featured */}
        <div
          className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr]"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "2rem",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                marginBottom: "1rem",
                background: "rgba(124,111,247,0.1)",
                border: "1px solid rgba(124,111,247,0.2)",
              }}
            >
              ⚡
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "0.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Just Coaching — API & Écosystème
            </div>
            <p
              style={{
                fontSize: "17px",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              Architecture REST connectant CRM, app coach, app client et visioconférence.
              Développement de nouvelles routes, optimisation de performances et synchronisation avec
              des services tiers (Brevo, Stripe, Apple Pay).
            </p>

            <div
              style={{
                padding: "10px 0",
                borderTop: "1px solid var(--border)",
                marginBottom: "0.75rem",
                display: "flex",
                alignItems: "baseline",
                gap: "6px",
              }}
            >
              <span
                className="gradient-text"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700 }}
              >
                −37s
              </span>
              <span style={{ fontSize: "14px", color: "var(--text-dim)" }}>
                de temps de réponse sur la route commandes
              </span>
            </div>
            <div
              style={{
                padding: "10px 0",
                borderTop: "1px solid var(--border)",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "baseline",
                gap: "6px",
              }}
            >
              <span
                className="gradient-text"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700 }}
              >
                4
              </span>
              <span style={{ fontSize: "14px", color: "var(--text-dim)" }}>
                applications interconnectées
              </span>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {jcStack.map((t) => (
                <StackTag key={t} label={t} />
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {archBlocks.map((b) => (
              <div
                key={b.label}
                style={{
                  background: "var(--bg3)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "1rem 1.25rem",
                  fontSize: "14px",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <div
                  style={{
                    color: "var(--text-dim)",
                    fontSize: "14px",
                    marginBottom: "4px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {b.label}
                </div>
                <div style={{ color: "var(--cyan-light)" }}>{b.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "1.25rem" }}
        >
          {/* Wild Code Online */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "2rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                marginBottom: "1rem",
                background: "rgba(34,212,200,0.1)",
                border: "1px solid rgba(34,212,200,0.2)",
              }}
            >
              🚀
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "0.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Wild Code Online
            </div>
            <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Plateforme de code en ligne — développer, tester et partager du code facilement.
              Projet de fin d&apos;alternance avec mise en place CI, tests unitaires, intégration
              et architecture MVC.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {["GraphQL", "Apollo", "TypeORM", "Next.js", "Jest", "Playwright", "Nginx"].map((t) => (
                <StackTag key={t} label={t} />
              ))}
            </div>
          </div>

          {/* Java CRUD */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "2rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                marginBottom: "1rem",
                background: "rgba(245,158,11,0.1)",
                border: "1px solid rgba(245,158,11,0.2)",
              }}
            >
              ☕
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "0.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              CRUD User — Java
            </div>
            <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Projet personnel d&apos;apprentissage Java : architecture MVC, serveur HTTP natif,
              JDBC / SQLite, Maven. Construction from scratch pour maîtriser les fondamentaux du
              langage.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
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

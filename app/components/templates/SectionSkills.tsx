const skillCategories = [
  {
    title: "Back-End",
    color: "var(--violet-light)",
    dot: "var(--violet)",
    primary: ["Node.js", "TypeScript", "AdonisJS", "Express", "RethinkDB", "PostgreSQL", "REST API"],
    secondary: [],
  },
  {
    title: "Front-End",
    color: "var(--cyan)",
    dot: "var(--cyan)",
    primary: ["Vue.js", "Next.js", "React Native", "Tailwind", "Sass"],
    secondary: [],
  },
  {
    title: "DevOps & Outils",
    color: "var(--pink)",
    dot: "var(--pink)",
    primary: ["Docker", "Git / GitHub", "NGINX", "Caddy", "macOS", "Ubuntu"],
    secondary: [],
  },
  {
    title: "En apprentissage",
    color: "var(--amber)",
    dot: "var(--amber)",
    primary: [],
    secondary: ["Java", "Maven", "JDBC", "MVC Java"],
  },
  {
    title: "Je connais",
    color: "var(--text-muted)",
    dot: "var(--text-dim)",
    primary: [],
    secondary: ["GraphQL", "Apollo", "TypeORM", "Playwright", "Jest", "Figma"],
  },
  {
    title: "Méthodes",
    color: "var(--text-muted)",
    dot: "var(--text-dim)",
    primary: [],
    secondary: ["Scrum", "Kanban", "Tests unitaires", "CI/CD", "MVC"],
  },
];

export default function SectionSkills() {
  return (
    <section
      id="skills"
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 2rem",
      }}
    >
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
          Compétences
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
          Stack & outils.
        </h2>
      </div>

      <div
        data-reveal
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{ gap: "1.25rem", paddingBottom: "3rem" }}
      >
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 600,
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: cat.color,
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: cat.dot,
                  display: "inline-block",
                }}
              />
              {cat.title}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {cat.primary.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    border: "1px solid rgba(124,111,247,0.3)",
                    background: "rgba(124,111,247,0.07)",
                    color: "var(--violet-light)",
                  }}
                >
                  {tag}
                </span>
              ))}
              {cat.secondary.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    border: "1px solid var(--border)",
                    background: "rgba(255,255,255,0.03)",
                    color: "var(--text-muted)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const sectionStyle = {
  position: "relative" as const,
  zIndex: 1,
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 2rem",
};

const timelineItems = [
  {
    color: "var(--violet)",
    year: "2024 — aujourd'hui",
    title: "Développeur Full-Stack (CDI)",
    sub: "Just Coaching · Ancenis",
  },
  {
    color: "var(--cyan)",
    year: "2023 — 2024",
    title: "Wild Code School · CDA (RNCP Niv. 6)",
    sub: "Alternance · Concepteur Développeur d'Applications",
  },
  {
    color: "var(--pink)",
    year: "2022 — 2023",
    title: "Autodidacte · Développement Web",
    sub: "Front-end, bases du développement",
  },
  {
    color: "var(--amber)",
    year: "2002 — 2022",
    title: "20 ans d'expérience terrain",
    sub: "Compagnons du Devoir · Euromaster · Agencement",
  },
];

export default function SectionAbout() {
  return (
    <section id="about" style={sectionStyle}>
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
          À propos
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
          Un parcours atypique,
          <br />
          une force réelle.
        </h2>
      </div>

      <div
        data-reveal
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: "3rem", alignItems: "start", paddingBottom: "3rem" }}
      >
        <div>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.8 }}>
            Créer des applications de A à Z, développer des fonctionnalités performantes et enquêter
            sur les bugs pour identifier les origines — c&apos;est ce qui me passionne.
          </p>
          <p
            style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.8, marginTop: "1rem" }}
          >
            Mon cursus chez les{" "}
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>
              Compagnons du Devoir
            </strong>{" "}
            m&apos;a appris ce que signifie vraiment maîtriser un métier. Cette exigence, je la
            transfère dans le code : pas de dette technique cachée, pas de bug qu&apos;on &quot;laisse
            pour plus tard&quot;.
          </p>
          <blockquote
            style={{
              background: "rgba(124,111,247,0.07)",
              border: "1px solid rgba(124,111,247,0.15)",
              borderLeft: "3px solid var(--violet)",
              borderRadius: "0 10px 10px 0",
              padding: "1.25rem 1.5rem",
              marginTop: "1.5rem",
              fontSize: "14px",
              color: "var(--text-muted)",
              fontStyle: "italic",
            }}
          >
            &quot;Ma vie professionnelle ne commence pas en septembre 2022 — elle est riche de 20
            années d&apos;expériences qui font de moi un développeur qui comprend les enjeux
            métier.&quot;
          </blockquote>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {timelineItems.map((item) => (
            <div
              key={item.year}
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1.1rem 1.25rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: item.color,
                  flexShrink: 0,
                  marginTop: "7px",
                  display: "inline-block",
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    color: "var(--text-dim)",
                    marginBottom: "2px",
                  }}
                >
                  {item.year}
                </div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "var(--text)" }}>
                  {item.title}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

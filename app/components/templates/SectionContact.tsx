export default function SectionContact() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 2rem",
      }}
    >
      <div
        data-reveal
        style={{
          paddingTop: "5rem",
          paddingBottom: "5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "24px",
            padding: "4rem 2rem",
            maxWidth: "600px",
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
              color: "var(--text)",
            }}
          >
            Travaillons ensemble.
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: "2rem",
              fontSize: "15px",
            }}
          >
            Ouvert aux opportunités sur Nantes / Ancenis / Remote.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:contact@thomasmarchand.fr"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 28px",
                background: "var(--grad)",
                borderRadius: "10px",
                color: "#fff",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
                boxShadow: "0 0 32px rgba(124,111,247,0.3)",
              }}
            >
              Envoyer un email →
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-marchand-developpeur-web-full-stack-front-end-back-end-france-javascript-node-react-vue"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 24px",
                background: "transparent",
                border: "1px solid var(--border-accent)",
                borderRadius: "10px",
                color: "var(--text-muted)",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/ThomMarchand"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 24px",
                background: "transparent",
                border: "1px solid var(--border-accent)",
                borderRadius: "10px",
                color: "var(--text-muted)",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

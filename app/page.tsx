import Navbar from "@/app/components/organisms/Navbar";
import SectionAbout from "@/app/components/templates/SectionAbout";
import SectionSkills from "@/app/components/templates/SectionSkills";
import SectionProject from "@/app/components/templates/SectionProject";
import SectionContact from "@/app/components/templates/SectionContact";
import ScrollReveal from "@/app/components/atoms/ScrollReveal";

const metrics = [
  { value: "20", label: "Ans d'exp." },
  { value: "2+", label: "Ans en dev" },
  { value: "5", label: "Projets prod" },
  { value: "CDI", label: "Statut actuel" },
];

export default function Home() {
  return (
    <>
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="glow glow-3" />

      <Navbar />

      <section
        id="hero"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 2rem 0",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 8vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}
        >
          Développeur
          <br />
          <span className="gradient-text">Full-Stack</span>
          <br />& DevOps.
        </h1>

        <p
          style={{
            fontSize: "17px",
            color: "var(--text-muted)",
            maxWidth: "560px",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          Spécialisé{" "}
          <strong style={{ color: "var(--text)", fontWeight: 500 }}>
            Node.js · TypeScript · AdonisJS
          </strong>
          .<br />
          20 ans d&apos;expérience terrain, 2 ans de développement
          professionnel.
          <br />
          Compagnon du Devoir, la rigueur du métier appliquée au code.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "4rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 28px",
              background: "var(--grad)",
              borderRadius: "10px",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              boxShadow: "0 0 32px rgba(124,111,247,0.3)",
            }}
          >
            Me contacter →
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
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: "14px",
            overflow: "hidden",
            maxWidth: "640px",
          }}
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              style={{ background: "var(--bg2)", padding: "1.25rem 1.5rem" }}
            >
              <div
                className="gradient-text"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontWeight: 500,
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <main style={{ position: "relative", zIndex: 1 }}>
        <SectionAbout />
        <SectionSkills />
        <SectionProject />
        <SectionContact />
      </main>

      <footer
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "1.5rem 2rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "var(--text-dim)",
            fontFamily: "var(--font-mono)",
          }}
        >
          © 2025 Thomas Marchand
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "var(--text-dim)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Ancenis · Loire-Atlantique · France
        </p>
      </footer>

      <ScrollReveal />
    </>
  );
}

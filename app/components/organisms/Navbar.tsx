"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(8,11,20,0.92)" : "rgba(8,11,20,0.7)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <span
          className="gradient-text"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          TM
        </span>

        {/* Desktop */}
        <ul
          className="hidden md:flex"
          style={{ gap: "2rem", listStyle: "none", alignItems: "center", margin: 0, padding: 0 }}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                background: "var(--surface)",
                border: "1px solid var(--border-accent)",
                borderRadius: "8px",
                color: "var(--text)",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              Me contacter →
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            color: "var(--text-muted)",
            fontSize: "20px",
            cursor: "pointer",
            padding: "4px",
          }}
          aria-label="Menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            padding: "1rem 2rem 1.5rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              background: "var(--grad)",
              borderRadius: "8px",
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              width: "fit-content",
            }}
          >
            Me contacter →
          </a>
        </div>
      )}
    </nav>
  );
}

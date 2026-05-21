"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/app/lib/theme";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-hematite/10 ${
        scrolled ? "bg-cloud-dancer/95 shadow-sm" : "bg-cloud-dancer/80"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-[1200px] mx-auto">
        <img
          src="/logo+fullname.svg"
          alt="Thomas Marchand"
          className="h-10 block"
        />

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-label text-sm font-medium text-hematite hover:text-blue-fusion transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-blue-fusion text-cloud-dancer font-label text-sm font-semibold rounded-xl hover:bg-blue-fusion/90 transition-colors"
            >
              Contact →
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-hematite text-xl cursor-pointer bg-transparent border-0 p-1 leading-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-5 border-t border-hematite/10 flex flex-col gap-4 pt-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-label text-sm font-medium text-hematite hover:text-blue-fusion transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="px-5 py-2.5 bg-blue-fusion text-cloud-dancer font-label text-sm font-semibold rounded-xl w-fit"
          >
            Contact →
          </a>
        </div>
      )}
    </nav>
  );
}

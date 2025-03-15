"use client";

export default function AnchorNavigation() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAboutSection = () => {
    if (window.innerWidth >= 768) {
      scrollToSection("about");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="cursor-pointer flex flex-col text-xs gap-2 sm:text-sm lg:pl-3 xl:gap-6 xl:text-2xl xl:pl-8">
      <p onClick={() => scrollToAboutSection()}>À propos</p>

      <p onClick={() => scrollToSection("xp")}>Expériences</p>

      <p onClick={() => scrollToSection("project")}>Projets</p>
    </div>
  );
}

"use client";

import { useState } from "react";

import IconChevronRight from "@/app/components/atoms/icons/IconChevronRight";
import IconChevronDown from "@/app/components/atoms/icons/IconChevronDown";

export default function AnchorNavigation() {
  const [openSkills, setOpenSkills] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAboutSection = () => {
    if (window.innerWidth >= 768) {
      scrollToSection("about");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (openSkills || openProjects) {
      setOpenSkills(false);
      setOpenProjects(false);
    }
  };

  const handleOpenSkills = () => {
    setOpenSkills(!openSkills);

    if (openProjects) {
      setOpenProjects(false);
    }
  };

  const handleOpenProjects = () => {
    setOpenProjects(!openProjects);

    if (openSkills) {
      setOpenSkills(false);
    }
  };

  return (
    <div className="cursor-pointer flex flex-col text-xs gap-2 sm:text-sm lg:pl-3 xl:gap-6 xl:text-2xl xl:pl-8">
      <p onClick={() => scrollToAboutSection()}>À propos</p>

      <div>
        <p className="flex items-center" onClick={handleOpenSkills}>
          {!openSkills ? <IconChevronRight /> : <IconChevronDown />} Compétences
        </p>
        {openSkills && (
          <>
            <p className="pl-4" onClick={() => scrollToSection("skills")}>
              Hard Skills
            </p>
            <p className="pl-4" onClick={() => scrollToSection("soft-skills")}>
              Soft Skills
            </p>
          </>
        )}
      </div>

      <div>
        <p className="flex items-center" onClick={handleOpenProjects}>
          {!openProjects ? <IconChevronRight /> : <IconChevronDown />}Projets
        </p>
        {openProjects && (
          <>
            <p className="pl-4" onClick={() => scrollToSection("jc")}>
              Just Coaching
            </p>
            <p className="pl-4" onClick={() => scrollToSection("wild")}>
              Wild Code {window.innerWidth < 350 ? "…" : "Online"}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

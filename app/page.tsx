import ScrollReveal from "@/app/components/atoms/ScrollReveal";

import Navbar from "@/app/components/organisms/Navbar";
import Footer from "./components/organisms/Footer";

import SectionHero from "./components/templates/SectionHero";
import SectionAbout from "@/app/components/templates/SectionAbout";
import SectionSkills from "@/app/components/templates/SectionSkills";
import SectionProject from "@/app/components/templates/SectionProject";
import SectionContact from "@/app/components/templates/SectionContact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <SectionHero />
        <SectionAbout />
        <SectionSkills />
        <SectionProject />
        <SectionContact />
      </main>

      <Footer />
      <ScrollReveal />
    </>
  );
}

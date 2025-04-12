import Image from "next/image";

import profilPic from "@/public/images/profil.png";

import Navbar from "@/app/components/molecules/Navbar";
import SectionAbout from "@/app/components/templates/SectionAbout";
import SectionSkills from "@/app/components/templates/SectionSkills";
import SectionProject from "@/app/components/templates/SectionProject";
import SectionContact from "@/app/components/templates/SectionContact";

export default function Home() {
  return (
    <main className="text-indigo-950 md:relative flex flex-col items-center md:items-end">
      <Image
        src={profilPic}
        alt="Picture of the author"
        className="mb-10 size-40 mt-62 md:mt-4 md:mr-10 md:absolute md:size-32 lg:size-40"
      />

      <div className="md:flex">
        <Navbar />

        <div className="flex-1 overflow-auto px-5 md:ml-70 md:h-screen lg:ml-85 xl:ml-140">
          <SectionAbout />

          <SectionSkills />

          <SectionProject />

          <SectionContact />
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";

import profilPic from "@/public/images/profil.png";

import Navbar from "@/app/components/Navbar";
import SectionAbout from "@/app/components/SectionAbout";
import SectionSkills from "@/app/components/SectionSkills";
import SectionProject from "@/app/components/SectionProject";

export default function Home() {
  return (
    <main className="text-indigo-950  md:static flex flex-col items-center md:items-end">
      <Image
        src={profilPic}
        alt="Picture of the author"
        className="md:absolute size-40 mt-50 md:mt-4 md:mr-10"
      />

      <div className="md:flex">
        <Navbar />

        <div className="flex-1 overflow-auto px-5 md:ml-70 md:h-screen lg:ml-85 xl:ml-140">
          <SectionAbout />

          <SectionSkills />

          <SectionProject />
        </div>
      </div>
    </main>
  );
}

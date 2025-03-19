import AnchorNavigation from "@/app/components/AnchorNavigation";
import IconeCode from "@/app/components/icons/IconCode";
import IconGitHub from "@/app/components/icons/IconGitHub";
import IconLinkedin from "@/app/components/icons/IconLinkedin";

export default function Navbar() {
  return (
    <div
      className="bg-indigo-900 text-indigo-50 shadow-3xl p-4 rounded-xl m-5 fixed top-0 left-0 inset-x-0 
    md:flex md:flex-col md:justify-between md:py-10 md:inset-y-0 md:w-64 lg:w-80 xl:w-130"
    >
      <div className="flex justify-between xs:justify-around md:flex-col md:jutify-center md:h-1/2 xl:h-7/12">
        <div className="md:mx-auto">
          <h1 className="md:text-2xl lg:text-3xl xl:text-5xl font-bold">
            Thomas Marchand
          </h1>

          <div className="text-xs font-medium xs:flex sm:text-sm lg:text-lg xl:text-3xl">
            <p>Developpeur</p>
            <p className="pl-2">JavaScript</p>
          </div>

          <p className="text-xs sm:text-sm font-medium lg:text-lg xl:text-3xl">
            Spé. Back-end
          </p>
        </div>

        <AnchorNavigation />
      </div>

      <div className="flex justify-around pt-4">
        <a href="https://www.codewars.com/users/WhyNoThom">
          <IconeCode />
        </a>

        <a href="https://github.com/ThomMarchand">
          <IconGitHub />
        </a>

        <a href="https://www.linkedin.com/in/thomas-marchand-developpeur-web-full-stack-front-end-back-end-france-javascript-node-react-pro">
          <IconLinkedin />
        </a>
      </div>
    </div>
  );
}

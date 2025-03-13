import IconeCode from "./IconCode";
import IconGitHub from "./IconGitHub";
import IconLinkedin from "./IconLinkedin";

export default function Navbar() {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl m-5 fixed top-0 left-0 inset-x-0 md:flex md:flex-col md:justify-between md:py-10 md:inset-y-0 md:w-64 lg:w-80 xl:w-130">
      <div className="flex justify-around md:flex-col md:jutify-center md:h-1/2">
        <div className="md:mx-auto">
          <h1 className="md:text-2xl lg:text-3xl xl:text-5xl font-bold">
            Thomas Marchand
          </h1>

          <h2 className="text-wrap text-sm font-medium md:text-sm lg:text-lg xl:text-3xl">
            Developpeur JavaScript
          </h2>

          <p className="text-sm md:text-sm font-medium lg:text-lg xl:text-3xl">
            Spé. Back-end
          </p>
        </div>

        <div className="flex flex-col lg:pl-3 xl:pl-8">
          <a className="text-sm md:text-sm xl:text-xl" href="#about">
            À propos
          </a>

          <a className="text-sm my-1 md:text-sm md:my-2 xl:text-xl" href="#xp">
            Expériences
          </a>

          <a className="text-sm md:text-sm xl:text-xl" href="#project">
            Projets
          </a>
        </div>
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

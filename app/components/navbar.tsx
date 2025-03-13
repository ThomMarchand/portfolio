import IconeCode from "./IconCode";
import IconGitHub from "./IconGitHub";
import IconLinkedin from "./IconLinkedin";

export default function Navbar() {
  return (
    <div className="flex flex-col justify-between w-130 pl-10 py-20 inset-y-0 fixed left-0 top-0 bg-gray-800 text-white p-4 rounded-2xl m-5">
      <div>
        <h1 className="text-5xl font-bold">Thomas Marchand</h1>

        <h2 className="text-3xl font-medium">Developpeur JavaScript</h2>
        <p className="text-3xl font-medium">Spé. Back-end</p>
      </div>

      <div className="flex flex-col">
        <a className="text-xl" href="#about">
          À propos
        </a>
        <a className="text-xl my-4" href="#xp">
          Expériences
        </a>
        <a className="text-xl" href="#project">
          Projets
        </a>
      </div>
      <div className="flex gap-20 mt-50">
        <IconeCode />
        <IconGitHub />
        <IconLinkedin />
      </div>
    </div>
  );
}

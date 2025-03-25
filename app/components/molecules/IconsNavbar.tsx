import IconeCode from "@/app/components/atoms/icons/IconCode";
import IconGitHub from "@/app/components/atoms/icons/IconGitHub";
import IconLinkedin from "@/app/components/atoms/icons/IconLinkedin";

export default function IconsNavbar() {
  return (
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
  );
}

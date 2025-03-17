import { knowSkills, softSkills, useSkills } from "../data/skills";

import IconBeaker from "./IconBeaker";
import IconCommandLine from "./IconCommandLine";
import IconSparkles from "./IconSparkles";

export default function SkillsSection() {
  return (
    <section id="skills" className="my-20 scroll-mt-64 md:scroll-mt-30">
      <h2 className="mb-5 text-4xl font-bold">Compétences</h2>

      <h3 className="flex justify-center text-3xl font-bold">Hard skills</h3>

      <div className="2xl:flex 2xl:justify-around">
        <div>
          <h4
            id="use"
            className="flex justify-center text-2xl font-semibold mt-4"
          >
            J&apos;utilise
          </h4>

          <div className="flex justify-between text-sm 1xs:justify-around 1xs:text-[15px] md:text-lg 2xl:gap-20">
            <div>
              <h5 className="text-xl font-medium mt-4">Technos :</h5>

              <div>
                {useSkills.technos.map((skill) => (
                  <p key={skill} className="flex items-center">
                    <IconCommandLine />
                    <span className="pl-2">{skill}</span>
                  </p>
                ))}
              </div>

              <h5 className="text-xl font-medium mt-4">Versionning :</h5>

              <div>
                {useSkills.versioning.map((skill) => (
                  <p key={skill} className="flex items-center">
                    <IconCommandLine />
                    <span className="pl-2">{skill}</span>
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-xl font-medium mt-4">Outils :</h5>

              <div>
                {useSkills.tools.map((skill) => (
                  <p key={skill} className="flex items-center">
                    <IconCommandLine />
                    <span className="pl-2">{skill}</span>
                  </p>
                ))}
              </div>

              <h5 className="text-xl font-medium mt-4">Gestion :</h5>

              <div>
                {useSkills.management.map((skill) => (
                  <p key={skill} className="flex items-center">
                    <IconCommandLine />
                    <span className="pl-2">{skill}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4
            id="know"
            className="flex justify-center text-2xl font-semibold mt-4"
          >
            Je connais
          </h4>

          <div className="flex justify-between text-sm 1xs:justify-around 1xs:text-[15px] md:text-lg 2xl:gap-20">
            <div>
              <h5 className="text-xl font-medium mt-4">Technos :</h5>
              <div>
                {knowSkills.technos.map((skill) => (
                  <p key={skill} className="flex items-center">
                    <IconBeaker />
                    <span className="pl-2">{skill}</span>
                  </p>
                ))}
              </div>

              <h5 className="text-xl font-medium mt-4">Serveur :</h5>
              <div>
                {knowSkills.server.map((skill) => (
                  <p key={skill} className="flex items-center">
                    <IconBeaker />
                    <span className="pl-2">{skill}</span>
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-xl font-medium mt-4">Outils :</h5>
              <div>
                {knowSkills.tools.map((skill) => (
                  <p key={skill} className="flex items-center">
                    <IconBeaker />
                    <span className="pl-2">{skill}</span>
                  </p>
                ))}
              </div>

              <h5 className="text-xl font-medium mt-4">Gestion :</h5>
              <div>
                {knowSkills.management.map((skill) => (
                  <p key={skill} className="flex items-center">
                    <IconBeaker />
                    <span className="pl-2">{skill}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="soft-skills">
        <h3 className="flex justify-center text-2xl font-semibold my-4">
          Soft Skills
        </h3>

        <div className="pl-4 sm:flex justify-around text-sm 1xs:justify-around 1xs:text-[15px] md:flex-col lg:flex-row lg:justify-around md:text-lg 2xl:gap-20">
          <div>
            {softSkills.transversal.map((skill) => (
              <p key={skill} className="flex items-center">
                <IconSparkles />
                <span className="pl-2">{skill}</span>
              </p>
            ))}
          </div>

          <div>
            {softSkills.soft.map((skill) => (
              <p key={skill} className="flex items-center">
                <IconSparkles />
                <span className="pl-2">{skill}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

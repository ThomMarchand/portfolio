import { knowSkills, softSkills, useSkills } from "@/app/data/skills";

import IconCornerUpRight from "@/app/components/atoms/icons/IconCornerUpRight";
import DisplayItem from "@/app/components/atoms/DisplayItem";
import Title from "../atoms/Title";

export default function SectionSkills() {
  return (
    <section className="my-20">
      <Title renderAs="h2">Compétences</Title>

      <Title renderAs="h3" id="skills">
        Hard skills
      </Title>

      <div className="2xl:flex 2xl:justify-around">
        <div className="py-5 shadow-3xl my-7 bg-indigo-300 rounded-2xl 2xl:w-5/12">
          <h4 id="use" className="flex justify-center text-2xl font-semibold">
            J&apos;utilise
          </h4>

          <div className="flex justify-evenly text-sm 1xs:text-[15px] sm:justify-around md:text-lg 2xl:gap-20 ">
            <div>
              <Title renderAs="h5">Technos:</Title>

              <div>
                {useSkills.technos.map((skill) => (
                  <DisplayItem key={skill} item={skill} icon="sparkles" />
                ))}
              </div>

              <Title renderAs="h5">Versionning:</Title>

              <div>
                {useSkills.versioning.map((skill) => (
                  <DisplayItem key={skill} item={skill} icon="sparkles" />
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-xl font-medium mt-4">Outils:</h5>

              <div>
                {useSkills.tools.map((skill) => (
                  <DisplayItem key={skill} item={skill} icon="sparkles" />
                ))}
              </div>

              <h5 className="text-xl font-medium mt-4">Gestion:</h5>

              <div>
                {useSkills.management.map((skill) => (
                  <DisplayItem key={skill} item={skill} icon="sparkles" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 shadow-3xl my-7 bg-indigo-300 rounded-2xl 2xl:w-5/12">
          <h4
            id="know"
            className="flex justify-center text-2xl font-semibold mt-4"
          >
            Je connais
          </h4>

          <div className="flex justify-evenly text-sm 1xs:text-[15px] sm:justify-around md:text-lg 2xl:gap-20 ">
            <div>
              <Title renderAs="h5">Technos :</Title>

              <div>
                {knowSkills.technos.map((skill) => (
                  <DisplayItem key={skill} item={skill} icon="beaker" />
                ))}
              </div>

              <Title renderAs="h5">Serveur :</Title>

              <div>
                {knowSkills.server.map((skill) => (
                  <DisplayItem key={skill} item={skill} icon="beaker" />
                ))}
              </div>
            </div>

            <div>
              <Title renderAs="h5">Outils :</Title>

              <div>
                {knowSkills.tools.map((skill) => (
                  <DisplayItem key={skill} item={skill} icon="beaker" />
                ))}
              </div>

              <Title renderAs="h5">Gestion :</Title>

              <div>
                {knowSkills.management.map((skill) => (
                  <DisplayItem key={skill} item={skill} icon="beaker" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Title renderAs="h3" id="soft-skills">
          Soft Skills
        </Title>

        <div className="pl-4 sm:flex justify-around text-sm 1xs:justify-around 1xs:text-[15px] md:flex-col lg:flex-row lg:justify-around md:text-lg 2xl:gap-20">
          <div>
            {softSkills.transversal.map((skill) => (
              <p key={skill} className="flex items-center">
                <IconCornerUpRight />
                <span className="pl-2">{skill}</span>
              </p>
            ))}
          </div>

          <div>
            {softSkills.soft.map((skill) => (
              <p key={skill} className="flex items-center">
                <IconCornerUpRight />
                <span className="pl-2">{skill}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

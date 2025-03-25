import { knowSkills, softSkills, useSkills } from "@/app/data/skills";

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

          <div className="flex justify-evenly text-sm 1xs:text-[15px] sm:justify-around md:text-lg ">
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
              <Title renderAs="h5">Outils:</Title>

              <div>
                {useSkills.tools.map((skill) => (
                  <DisplayItem key={skill} item={skill} icon="sparkles" />
                ))}
              </div>

              <Title renderAs="h5">Gestion:</Title>

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

          <div className="flex justify-evenly items-center text-sm 1xs:text-[15px] sm:justify-around md:text-lg ">
            <div>
              <Title renderAs="h5">Technos:</Title>

              <div>
                {knowSkills.technos.map((skill) => (
                  <DisplayItem key={skill} item={skill} icon="beaker" />
                ))}
              </div>
            </div>

            <div>
              <Title renderAs="h5">Outils:</Title>

              <div>
                {knowSkills.tools.map((skill) => (
                  <DisplayItem key={skill} item={skill} icon="beaker" />
                ))}
              </div>

              <Title renderAs="h5">Serveur:</Title>

              <div>
                {knowSkills.server.map((skill) => (
                  <DisplayItem key={skill} item={skill} icon="beaker" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Title renderAs="h3" id="soft-skills">
          Soft Skills
        </Title>

        <div className="xs:flex xs:flex-col xs:items-center">
          <div className="py-5 shadow-3xl my-7 bg-indigo-300 rounded-2xl pl-4 text-sm xs:w-fit xs:px-10 1xs:text-[15px] md:text-lg 2xl:w-3xl 2xl:flex 2xl:justify-around">
            <div>
              {softSkills.transversal.map((skill) => (
                <DisplayItem key={skill} item={skill} icon="cornerUpRight" />
              ))}
            </div>

            <div>
              {softSkills.soft.map((skill) => (
                <DisplayItem key={skill} item={skill} icon="cornerUpRight" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

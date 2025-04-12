import { wildCodeOnline } from "@/app/data/projects";

import Text from "@/app/components/atoms/Text";
import Title from "@/app/components/atoms/Title";
import DisplayItem from "@/app/components/atoms/DisplayItem";

export default function WildCodeSchool() {
  const { back, server, front, tools } = wildCodeOnline.technos;
  return (
    <section className="mb-10">
      <div>
        <Title id="wild" renderAs="h3">
          Wild Code School
        </Title>

        <Text>
          J&apos;ai rejoint la Wild Code School en Novembre 2023. J&apos;ai
          participé au développement du projet Wild Code Online qui est mon
          projet de fin d&apos;alternance.
        </Text>
      </div>

      <section id="wild">
        <Title id="wild" renderAs="h3">
          Wild Code Online
        </Title>

        <div className="flex flex-col items-center my-10">
          <div className="py-5 bg-white border border-indigo-500 my-7 rounded-2xl w-full lg:w-[600px] 2xl:w-[800px]">
            <h4 id="use" className="flex justify-center text-2xl font-semibold">
              Technos
            </h4>

            <div className="flex justify-evenly text-sm 1xs:text-[15px] sm:justify-around md:text-lg ">
              <div>
                <Title renderAs="h5">Back:</Title>

                <div>
                  {back.map((techno) => (
                    <DisplayItem key={techno} item={techno} icon="sparkles" />
                  ))}
                </div>

                <Title renderAs="h5">Serveur:</Title>

                <div>
                  {server.map((techno) => (
                    <DisplayItem key={techno} item={techno} icon="sparkles" />
                  ))}
                </div>
              </div>

              <div>
                <Title renderAs="h5">Front:</Title>

                <div>
                  {front.map((techno) => (
                    <DisplayItem key={techno} item={techno} icon="sparkles" />
                  ))}
                </div>

                <Title renderAs="h5">Outils:</Title>

                <div>
                  {tools.map((techno) => (
                    <DisplayItem key={techno} item={techno} icon="sparkles" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <Text>
              L’application a pour objectif de créer une plateforme de code en
              ligne permettant de développer, tester et partager du code
              facilement.
            </Text>

            <Text textCenter={false}>Dans ce projet, j’ai:</Text>
          </div>
        </div>

        <div className="mt-10 p-5 bg-white border border-indigo-500 rounded-2xl xs:w-11/12 xs:flex xs:flex-col xs:mx-auto xl:w-fit">
          <DisplayItem
            item="contribué à la gestion et
              au suivi du développement,"
            icon="cornerDownRight"
            displayText
          />

          <DisplayItem
            item="réalisé la modélisation des données en
              utilisant UML et Merise,"
            icon="cornerDownRight"
            displayText
          />

          <DisplayItem
            item="implémenté de
              nouvelles fonctionnalités,"
            icon="cornerDownRight"
            displayText
          />

          <DisplayItem
            item="fait évoluer l’architecture en
              adoptant le modèle MVC,"
            icon="cornerDownRight"
            displayText
          />

          <DisplayItem
            item="mis en place l’intégration continue (CI),"
            icon="cornerDownRight"
            displayText
          />

          <DisplayItem
            item="réalisé des tests unitaires et d’intégration."
            icon="cornerDownRight"
            displayText
          />
        </div>
      </section>
    </section>
  );
}

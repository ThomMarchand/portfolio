import { wildCodeOnline } from "@/app/data/projects";

import Text from "@/app/components/atoms/Text";
import Title from "@/app/components/atoms/Title";
import DisplayItem from "../atoms/DisplayItem";

export default function WildCodeSchool() {
  const { back, server, front, tools } = wildCodeOnline.technos;
  return (
    <section className="mb-30">
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
          <div className="py-5 shadow-3xl my-7 bg-indigo-300 rounded-2xl w-full lg:w-[600px] 2xl:w-[800px]">
            <h4 id="use" className="flex justify-center text-2xl font-semibold">
              J&apos;utilise
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

        <Text>
          L’application a pour objectif de créer une plateforme de code en ligne
          permettant de développer, tester et partager du code facilement.
        </Text>

        <div className="mt-10">
          <Text>
            Dans ce projet, j’ai réalisé la modélisation des données en
            utilisant UML et Merise, tout en contribuant à la gestion et au
            suivi du développement. J’ai participé à l’implémentation de
            nouvelles fonctionnalités et fait évoluer l’architecture en adoptant
            le modèle MVC. Afin de garantir la qualité du code, j’ai mis en
            place l’intégration continue (CI) et réalisé des tests unitaires et
            d’intégration.
          </Text>
        </div>
      </section>
    </section>
  );
}

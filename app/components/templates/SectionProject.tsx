import { justCoaching } from "@/app/data/projects";

import Text from "@/app/components/atoms/Text";
import Title from "@/app/components/atoms/Title";
import CardHighlights from "@/app/components/molecules/CardHighlights";
import CardList from "@/app/components/molecules/CardSingleList";

export default function SectionProject() {
  const { manager, api, visio, coach, client } = justCoaching;
  return (
    <section className="pb-15">
      <Title renderAs="h2">Projets</Title>

      <section>
        <div>
          <Title id="jc" renderAs="h3">
            Just Coaching
          </Title>

          <Text>
            J’ai rejoint Just Coaching en alternance en octobre 2023, puis en
            CDI depuis novembre 2024 en tant que développeur web. J’interviens
            sur plusieurs projets, notamment le développement d’API, le CRM, une
            application client, une application dédiée aux coachs ainsi qu’un
            projet de visioconférence.
          </Text>
        </div>

        <section id="manager" className="my-6">
          <Title id="jc" renderAs="h3">
            Manager (CRM)
          </Title>

          <div className="sm:flex sm:flex-col sm:items-center">
            <CardList
              title="Technos"
              itemsList={manager.technos}
              icon="sparkles"
            />
          </div>

          <Text>{manager.description}</Text>

          <div className="mt-5">
            <Title renderAs="h4">Faits marquants</Title>

            {manager.highlights.map((highlight) => (
              <CardHighlights
                key={highlight.title}
                title={highlight.title}
                description={highlight.description}
              />
            ))}
          </div>
        </section>

        <section id="api">
          <Title renderAs="h3">API</Title>

          <div className="sm:flex sm:flex-col sm:items-center">
            <CardList title="Technos" itemsList={api.technos} icon="sparkles" />
          </div>

          <Text>{api.description}</Text>

          <div className="mt-5">
            <Title renderAs="h4">Faits marquants</Title>

            {api.highlights.map((highlight) => (
              <CardHighlights
                key={highlight.title}
                title={highlight.title}
                description={highlight.description}
              />
            ))}
          </div>
        </section>

        <section id="visio">
          <Title renderAs="h3">Visioconférence</Title>

          <div className="sm:flex sm:flex-col sm:items-center">
            <CardList
              title="Technos"
              itemsList={visio.technos}
              icon="sparkles"
            />
          </div>

          <Text>{visio.description}</Text>

          <div className="mt-5">
            <Title renderAs="h4">Faits marquants</Title>

            {visio.highlights.map((highlight) => (
              <CardHighlights
                key={highlight.title}
                title={highlight.title}
                description={highlight.description}
              />
            ))}
          </div>
        </section>

        <section id="coach">
          <Title renderAs="h3">Application Coach</Title>

          <div className="sm:flex sm:flex-col sm:items-center">
            <CardList
              title="Technos"
              itemsList={coach.technos}
              icon="sparkles"
            />
          </div>

          <Text>{coach.description}</Text>
        </section>

        <section id="client" className="my-6">
          <Title renderAs="h3">Application Client</Title>

          <div className="sm:flex sm:flex-col sm:items-center">
            <CardList
              title="Technos"
              itemsList={client.technos}
              icon="sparkles"
            />
          </div>

          <Text>{client.description}</Text>
        </section>
      </section>

      <section>
        <Title id="wild" renderAs="h3">
          Wild Code Online
        </Title>

        {/* <Text>
          L’application a pour but de créer une plateforme de code en ligne
          permettant de développer, tester et partager du code facilement et
          accessible de n&apos;importe quel endroit. En arrivant sur
          l’application, l&apos;utilisateur a accès à un éditeur de code lui
          permettant de commencer à travailler directement, sans avoir à mettre
          en place un environnement de développement. En cliquant sur un bouton
          (50/jour pour un compte gratuit, sans limite avec un compte premium)
          le résultat s&apos;affiche à l&apos;écran. L’utilisateur peut
          s’inscrire sur l’app, sauvegarder, partager, privatiser, télécharger
          son travail. La solution peut inclure toutes sortes
          d&apos;interactions sociales autour des codes à condition que ces
          interactions respectent bien les droits de visibilité (codes publics
          ou privés).
        </Text> */}
      </section>
    </section>
  );
}

import { justCoaching } from "../data/projects";
import Text from "./atoms/Text";
import Title from "./atoms/Title";

import CardList from "./CardList";

export default function SectionProject() {
  const { manager } = justCoaching;
  return (
    <section className="pb-15">
      <Title renderAs="h2">Projets</Title>

      <div>
        <Title id="jc" renderAs="h3">
          Just Coaching
        </Title>

        <Text>
          J’ai rejoint Just Coaching en alternance en octobre 2023, puis en CDI
          depuis novembre 2024 en tant que développeur web. J’interviens sur
          plusieurs projets, notamment le développement d’API, le CRM, une
          application client, une application dédiée aux coachs ainsi qu’un
          projet de visioconférence.
        </Text>
      </div>

      <div className="my-6">
        <Title id="jc" renderAs="h3">
          Manager
        </Title>

        <Text>{manager.description}</Text>

        <CardList title="Technos" itemsList={manager.technos} icon="sparkles" />
      </div>

      <div>
        <Title id="wild" renderAs="h3">
          Wild Code Online
        </Title>

        <Text>
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
        </Text>
      </div>
    </section>
  );
}

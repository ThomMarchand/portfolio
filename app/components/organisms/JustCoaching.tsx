import { justCoaching } from "@/app/data/projects";

import Text from "@/app/components/atoms/Text";
import Title from "@/app/components/atoms/Title";
import DisplayItem from "@/app/components/atoms/DisplayItem";
import CardHighlights from "@/app/components/molecules/CardHighlights";
import CardList from "@/app/components/molecules/CardSingleList";

export default function JustCoaching() {
  const { manager, api, visio, coach, client } = justCoaching;

  return (
    <section>
      <div>
        <Title id="jc" renderAs="h3">
          Just Coaching
        </Title>

        <Text>
          J’ai rejoint &quot;Just Coaching&quot; dans le cadre d&apos;une
          alternance en Octobre 2023, puis en CDI depuis novembre 2024 en tant
          que développeur web.
        </Text>

        <Text textCenter={false}>
          J’y interviens sur le développement de diverses features:
        </Text>

        <div className="p-5 bg-white border border-indigo-500 rounded-2xl mt-7 xs:w-11/12 xs:flex xs:flex-col xs:mx-auto">
          <DisplayItem
            item="API: c'est l'interface logicielle qui permet de &quot;connecter&quot; le fonctionnement des applications suivantes:"
            icon="cornerUpRight"
            displayText
          />
          <div className="pl-6 1xs:pl-7">
            <DisplayItem item="Manager (CRM)" icon="cornerDownRight" />
            <DisplayItem item="Application Coach" icon="cornerDownRight" />
            <DisplayItem item="Application Client" icon="cornerDownRight" />
          </div>
          <DisplayItem
            item="Visioconférence"
            icon="cornerUpRight"
            displayText
          />
        </div>
      </div>

      <section id="api">
        <Title renderAs="h3">API</Title>

        <div className="sm:flex sm:flex-col sm:items-center">
          <CardList title="Technos" itemsList={api.technos} icon="sparkles" />
        </div>

        <Text>{api.description}</Text>

        <div className="mt-5">
          <Title renderAs="h4">Réalisations marquantes</Title>

          {api.highlights.map((highlight) => (
            <CardHighlights
              key={highlight.title}
              title={highlight.title}
              description={highlight.description}
            />
          ))}
        </div>
      </section>

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
          <Title renderAs="h4">Réalisations marquantes</Title>

          {manager.highlights.map((highlight) => (
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
          <CardList title="Technos" itemsList={coach.technos} icon="sparkles" />
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

      <section id="visio">
        <Title renderAs="h3">Visioconférence</Title>

        <div className="sm:flex sm:flex-col sm:items-center">
          <CardList title="Technos" itemsList={visio.technos} icon="sparkles" />
        </div>

        <Text>{visio.description}</Text>

        <div className="mt-5">
          <Title renderAs="h4">Réalisations marquantes</Title>

          {visio.highlights.map((highlight) => (
            <CardHighlights
              key={highlight.title}
              title={highlight.title}
              description={highlight.description}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

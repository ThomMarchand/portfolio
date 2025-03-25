import { wildCodeOnline } from "@/app/data/projects";

import Text from "@/app/components/atoms/Text";
import Title from "@/app/components/atoms/Title";

export default function WildCodeSchool() {
  return (
    <section>
      <div>
        <Title id="wild" renderAs="h3">
          Wild Code School
        </Title>

        <Text>
          J&apos;ai rejoint la Wild Code School en Novembre 2023. J&apos;ai
          participé au développement du projet Wild Code Online qui est mon
          projet de fin d&apos;alternance
        </Text>
      </div>

      <section id="wild" className="my-6">
        <Title id="wild" renderAs="h3">
          Wild Code Online
        </Title>

        <Text>{wildCodeOnline.description}</Text>
      </section>
    </section>
  );
}

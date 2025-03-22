import Title from "@/app/components/atoms/Title";
import JustCoaching from "@/app/components/organisms/JustCoaching";
import WildCodeSchool from "@/app/components/organisms/WildCodeSchool";

export default function SectionProject() {
  return (
    <section className="pb-15">
      <Title renderAs="h2">Projets</Title>

      <JustCoaching />

      <WildCodeSchool />
    </section>
  );
}

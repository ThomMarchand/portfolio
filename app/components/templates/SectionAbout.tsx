import Title from "../atoms/Title";

export default function SectionAbout() {
  return (
    <section id="about" className="md:scroll-mt-64 md:mt-30">
      <Title renderAs="h2">À propos</Title>

      <p className="text-justify text-sm 1xs:text-[15px] md:text-lg mt-25 flex justify-center">
        Créer des applications de A à Z, développer des fonctionnalités
        performantes et enquêter sur les bugs pour en identifier l’origine et
        les corriger avec précision est ce qui me passionne.
      </p>

      <p className="text-justify text-sm my-10 1xs:text-[15px] md:text-lg flex justify-center">
        Depuis toujours, l’informatique me passionne, que ce soit sur le plan
        personnel, à travers les jeux vidéo et ma curiosité pour Internet, ou
        dans ma vie professionnelle. Lors de mon passage chez les Compagnons du
        Devoir, j’ai découvert la conception assistée par ordinateur (CAO). Plus
        tard, chez Euromaster, l’omniprésence de l’informatique a renforcé mon
        attrait pour ce domaine.
      </p>

      <p className="text-justify text-sm 1xs:text-[15px] md:text-lg flex justify-center">
        C’est un ami administrateur système qui m’a permis de mieux comprendre
        le métier de développeur et de réaliser qu’il était accessible.
      </p>

      <p className="text-justify text-sm my-10 1xs:text-[15px] md:text-lg flex justify-center">
        J’ai alors commencé par apprendre les bases du développement Web en
        septembre 2022 en construisant des applications Front-end. Après
        plusieurs mois d’apprentissage en autodidacte, j’ai choisi d’approfondir
        mes compétences en intégrant la formation de Concepteur Développeur
        d’Applications en alternance à la Wild Code School.
      </p>

      <p className="text-justify text-sm 1xs:text-[15px] md:text-lg flex justify-center">
        Ah oui, j’allais oublier un point important : ma vie ne commence pas en
        septembre 2022 ! Elle est riche de 19 années d’expérience
        professionnelle. J’ai travaillé en carrosserie, dans le service au sein
        d’une entreprise internationale de pneumatiques, ainsi que dans
        l’agencement intérieur au sein d’une TPE. Ces expériences variées
        témoignent de ma capacité à me remettre en question et à ne jamais
        rester dans ma zone de confort.
      </p>

      <p className="text-justify text-sm mt-10 1xs:text-[15px] md:text-lg flex justify-center">
        Les compétences relationnelles que j’ai développées tout au long de ma
        carrière, combinées à ma passion et à ma capacité d’adaptation, sont de
        véritables atouts que je souhaite mettre à profit dans mon avenir de
        développeur.
      </p>
    </section>
  );
}

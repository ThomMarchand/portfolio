import Title from "@/app/components/atoms/Title";
import IconCornerUpRight from "@/app/components/atoms/icons/IconCornerUpRight";

export default function SectionAbout() {
  return (
    <section id="about" className="md:scroll-mt-64 md:mt-30">
      <Title renderAs="h2">À propos</Title>

      <p className="text-justify text-sm 1xs:text-[15px] md:text-lg mt-25 flex justify-center">
        Créer des applications de A à Z, développer des fonctionnalités
        performantes et enquêter sur les bugs pour identifier les origines et
        les corriger avec précision sont des sujets ce qui me passionne.
      </p>

      <p className="text-justify text-sm my-10 1xs:text-[15px] md:text-lg flex justify-center">
        Depuis toujours, j&apos;ai un fort attachement pour l’informatique, que
        ce soit sur le plan personnel, à travers les jeux vidéo et ma curiosité
        pour Internet, ou dans ma vie professionnelle. Lors de mon cursus chez
        les Compagnons du Devoir, j’ai découvert la conception assistée par
        ordinateur (CAO) et plus tard, chez Euromaster, l’omniprésence de
        l’informatique a renforcé mon attrait pour ce domaine.
      </p>

      <p className="text-justify text-sm 1xs:text-[15px] md:text-lg">
        C’est un ami administrateur système qui m’a permis de mieux comprendre
        le métier de développeur et de réaliser qu’il m&apos;était accessible.
      </p>

      <p className="text-justify text-sm my-10 1xs:text-[15px] md:text-lg flex justify-center">
        J’ai commencé en autodidacte, en apprenant les bases du développement
        Web à partir de septembre 2022 en construisant des applications
        Front-end. Après environ 1 an sur ce modèle, j’ai décidé de donner une
        autre dimension à mon apprentissage en lui donnant un objectif
        professionnel en intégrant la formation de Concepteur Développeur
        d’Applications en alternance à la Wild Code School fin 2023.
      </p>

      <p className="text-justify text-sm 1xs:text-[15px] md:text-lg">
        Ah oui! J’allais oublier un point important:
        <strong>
          ma vie professionnelle ne commence pas en septembre 2022 !
        </strong>{" "}
        Elle est déjà riche de 20 années d’expériences professionnelles:
      </p>

      <div className="p-5 bg-white border border-indigo-500 rounded-2xl mt-7 xs:w-10/12 xs:flex xs:flex-col xs:mx-auto">
        <p className="flex text-sm mt-2 1xs:text-[15px] md:text-lg">
          <IconCornerUpRight />{" "}
          <span className="flex flex-col pl-2 w-fit">
            Mon parcours compagnonique à duré 6 années durant lesquelles je me
            suis formé en carrosserie (réparation et construction) au sein de
            diverses structures (Groupe national et PME).
          </span>
        </p>

        <p className="flex text-sm mt-2 1xs:text-[15px] md:text-lg">
          <IconCornerUpRight />{" "}
          <span className="flex flex-col pl-2 w-fit">
            Pendant mes années Euromaster (leader européen de la distribution de
            pneumatiques – filiale du groupe Michelin) j&apos;ai travaillé dans
            un département de services aux clients autour du pneu industriel.
          </span>
        </p>

        <p className="flex text-sm mt-2 1xs:text-[15px] md:text-lg">
          <IconCornerUpRight />{" "}
          <span className="flex flex-col pl-2 w-fit">
            Enfin, pendant 3 ans j&apos;ai exercé dans une TPE spécialisée dans
            l’agencement intérieur.
          </span>
        </p>
      </div>

      <p className="text-justify text-sm my-10 1xs:text-[15px] md:text-lg flex justify-center">
        Ces expériences diverses et variées témoignent de ma capacité à me
        remettre en question et à ne jamais rester dans ma zone de confort. Les
        compétences relationnelles que j’ai su développer tout au long de ce
        cursus, combinées à ma passion et à ma capacité d’adaptation, sont de
        véritables atouts que je souhaite mettre à profit dans mon futur de
        développeur.
      </p>

      <p className="text-justify text-sm 1xs:text-[15px] md:text-lg flex">
        Mais revenons à mon actualité,
      </p>
    </section>
  );
}

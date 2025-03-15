import Image from "next/image";

import Navbar from "./components/Navbar";
import profilPic from "@/public/images/profil.png";

export default function Home() {
  return (
    <main className="text-black md:static flex flex-col items-center md:items-end">
      <Image
        src={profilPic}
        alt="Picture of the author"
        className="md:absolute size-40 mt-50 md:mt-4 md:mr-10"
      />

      <div className="md:flex">
        <Navbar />

        <div className="flex-1 overflow-auto px-5 md:ml-70 md:h-screen lg:ml-85 xl:ml-140">
          <section id="about" className="md:scroll-mt-64 md:mt-30">
            <h2 className="mb-5 text-4xl font-bold">À propos</h2>

            <p className="text-justify text-sm 1xs:text-[15px] md:text-lg">
              Créer des applications de A à Z, développer des fonctionnalités
              performantes et enquêter sur les bugs pour en identifier l’origine
              et les corriger avec précision est ce qui me passionne.
            </p>

            <p className="text-justify text-sm mt-2 1xs:text-[15px] md:text-lg">
              Depuis toujours, l’informatique me passionne, que ce soit sur le
              plan personnel, à travers les jeux vidéo et ma curiosité pour
              Internet, ou dans ma vie professionnelle. Lors de mon passage chez
              les Compagnons du Devoir, j’ai découvert la conception assistée
              par ordinateur (CAO). Plus tard, chez Euromaster, l’omniprésence
              de l’informatique a renforcé mon attrait pour ce domaine.
            </p>

            <p className="text-justify text-sm mt-2 1xs:text-[15px] md:text-lg">
              C’est un ami administrateur système qui m’a permis de mieux
              comprendre le métier de développeur et de réaliser qu’il était
              accessible.
            </p>

            <p className="text-justify text-sm mt-2 1xs:text-[15px] md:text-lg">
              J’ai alors commencé par apprendre les bases du développement Web
              en septembre 2022 en construisant des applications Front-end.
              Après plusieurs mois d’apprentissage en autodidacte, j’ai choisi
              d’approfondir mes compétences en intégrant la formation de
              Concepteur Développeur d’Applications en alternance à la Wild Code
              School.
            </p>

            <p className="text-justify text-sm mt-2 1xs:text-[15px] md:text-lg">
              Ah oui, j’allais oublier un point important : ma vie ne commence
              pas en septembre 2022 ! Elle est riche de 19 années d’expérience
              professionnelle. J’ai travaillé en carrosserie, dans le service au
              sein d’une entreprise internationale de pneumatiques, ainsi que
              dans l’agencement intérieur au sein d’une TPE. Ces expériences
              variées témoignent de ma capacité à me remettre en question et à
              ne jamais rester dans ma zone de confort.
            </p>

            <p className="text-justify text-sm mt-2 1xs:text-[15px] md:text-lg">
              Les compétences relationnelles que j’ai développées tout au long
              de ma carrière, combinées à ma passion et à ma capacité
              d’adaptation, sont de véritables atouts que je souhaite mettre à
              profit dans mon avenir de développeur.
            </p>
          </section>

          <section id="xp" className="my-20 scroll-mt-64 md:scroll-mt-30">
            <h2 className="mb-5 text-4xl font-bold">Expériences</h2>

            <p className="text-lg pt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae nulla, obcaecati error rem aut tempora officia nostrum
              dolorum unde ea! Magni ad fugit ipsam labore vitae rerum minima,
              inventore, explicabo est iure, enim omnis. Voluptatum iusto fugit
              doloribus delectus modi, officiis, repellat officia vel
              reprehenderit, sapiente assumenda? Quo fuga voluptates aliquam
              pariatur, sequi, molestiae nulla necessitatibus, autem repudiandae
              eaque delectus quasi beatae quibusdam nobis magnam ducimus minus
              similique ex facere culpa nisi alias sint laborum! Voluptatem, vel
              quaerat illo velit iusto illum provident aut nesciunt, commodi
              vero sit aliquam tempora, nisi inventore! Veniam ex deserunt ut
              officia cumque nihil alias hic dignissimos iusto harum libero,
              earum sint expedita quos vitae explicabo vero atque necessitatibus
              pariatur voluptas consequuntur. Necessitatibus vitae sit
              voluptatum ex provident eveniet inventore porro. Officia eveniet
              temporibus odio non alias harum sequi nobis soluta, aliquam
              similique ullam veritatis porro nihil provident quas sed fugiat
              voluptatum maiores laudantium consequuntur iure rerum! Sint
              officia incidunt numquam quo aliquid fugit? Perferendis deserunt
              voluptas, eligendi similique labore ipsam sequi cupiditate
              temporibus id itaque, quod suscipit ea placeat eaque doloribus,
              doloremque delectus non neque culpa provident accusamus pariatur
              omnis enim! Nostrum, molestias obcaecati optio repudiandae soluta
              illo enim reprehenderit delectus cumque reiciendis iste incidunt,
              tempora exercitationem facilis eligendi non numquam deserunt omnis
              tempore aliquid, atque culpa accusantium. Aliquam nam sunt facere
              officiis excepturi nostrum quisquam laborum facilis quas. Nam
              aliquam totam vel et voluptates quas earum, voluptatem
              exercitationem quia laborum. Illo, harum quisquam commodi quasi
              totam nisi officiis nam provident maiores quam quas, quod dolorem
              soluta, nobis distinctio possimus perferendis! Accusamus eos dicta
              aliquam libero dignissimos illum nostrum illo id vitae quaerat
              pariatur temporibus explicabo, inventore sint natus vel ab quis
              fuga. Maxime quis tempore quibusdam perspiciatis eius saepe
              tempora sapiente quae ex praesentium unde ipsum nobis totam
              repellendus non rerum quo, veniam autem laudantium omnis fuga
              eaque architecto soluta. Deleniti dignissimos velit vel, ad
              explicabo consectetur facilis natus consequatur omnis facere quos,
              perferendis inventore, veniam voluptates distinctio cumque
              mollitia dolore minima. Iste magnam id delectus? Possimus, quasi
              adipisci. Repudiandae ad at maxime! Quibusdam doloribus deserunt
              et quis ex cum odio dicta nemo vel, officia natus porro aliquid
              quidem voluptatem ut dignissimos, eos quaerat totam iusto
              consequuntur repellendus reiciendis! Magni, vero. Cum quisquam
              cumque et, eos debitis esse eum soluta quod veniam rem. In
              asperiores laborum quia cum eveniet facere consectetur, ducimus
              eum vel inventore voluptatibus, sit illum molestiae repudiandae,
              odio optio. Vitae?
            </p>
          </section>

          <section id="project" className="scroll-mt-64 md:scroll-mt-30">
            <h2 className="mb-5 text-4xl font-bold">Projects</h2>

            <p className="text-lg pt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae nulla, obcaecati error rem aut tempora officia nostrum
              dolorum unde ea! Magni ad fugit ipsam labore vitae rerum minima,
              inventore, explicabo est iure, enim omnis. Voluptatum iusto fugit
              doloribus delectus modi, officiis, repellat officia vel
              reprehenderit, sapiente assumenda? Quo fuga voluptates aliquam
              pariatur, sequi, molestiae nulla necessitatibus, autem repudiandae
              eaque delectus quasi beatae quibusdam nobis magnam ducimus minus
              similique ex facere culpa nisi alias sint laborum! Voluptatem, vel
              quaerat illo velit iusto illum provident aut nesciunt, commodi
              vero sit aliquam tempora, nisi inventore! Veniam ex deserunt ut
              officia cumque nihil alias hic dignissimos iusto harum libero,
              earum sint expedita quos vitae explicabo vero atque necessitatibus
              pariatur voluptas consequuntur. Necessitatibus vitae sit
              voluptatum ex provident eveniet inventore porro. Officia eveniet
              temporibus odio non alias harum sequi nobis soluta, aliquam
              similique ullam veritatis porro nihil provident quas sed fugiat
              voluptatum maiores laudantium consequuntur iure rerum! Sint
              officia incidunt numquam quo aliquid fugit? Perferendis deserunt
              voluptas, eligendi similique labore ipsam sequi cupiditate
              temporibus id itaque, quod suscipit ea placeat eaque doloribus,
              doloremque delectus non neque culpa provident accusamus pariatur
              omnis enim! Nostrum, molestias obcaecati optio repudiandae soluta
              illo enim reprehenderit delectus cumque reiciendis iste incidunt,
              tempora exercitationem facilis eligendi non numquam deserunt omnis
              tempore aliquid, atque culpa accusantium. Aliquam nam sunt facere
              officiis excepturi nostrum quisquam laborum facilis quas. Nam
              aliquam totam vel et voluptates quas earum, voluptatem
              exercitationem quia laborum. Illo, harum quisquam commodi quasi
              totam nisi officiis nam provident maiores quam quas, quod dolorem
              soluta, nobis distinctio possimus perferendis! Accusamus eos dicta
              aliquam libero dignissimos illum nostrum illo id vitae quaerat
              pariatur temporibus explicabo, inventore sint natus vel ab quis
              fuga. Maxime quis tempore quibusdam perspiciatis eius saepe
              tempora sapiente quae ex praesentium unde ipsum nobis totam
              repellendus non rerum quo, veniam autem laudantium omnis fuga
              eaque architecto soluta. Deleniti dignissimos velit vel, ad
              explicabo consectetur facilis natus consequatur omnis facere quos,
              perferendis inventore, veniam voluptates distinctio cumque
              mollitia dolore minima. Iste magnam id delectus? Possimus, quasi
              adipisci. Repudiandae ad at maxime! Quibusdam doloribus deserunt
              et quis ex cum odio dicta nemo vel, officia natus porro aliquid
              quidem voluptatem ut dignissimos, eos quaerat totam iusto
              consequuntur repellendus reiciendis! Magni, vero. Cum quisquam
              cumque et, eos debitis esse eum soluta quod veniam rem. In
              asperiores laborum quia cum eveniet facere consectetur, ducimus
              eum vel inventore voluptatibus, sit illum molestiae repudiandae,
              odio optio. Vitae?
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

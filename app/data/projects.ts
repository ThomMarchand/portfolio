export const justCoaching = {
  manager: {
    description:
      "Le manager (CRM) permet à l'entreprise de gérer les clients ainsi que les coachs. J’interviens sur le développement de nouvelles fonctionnalités, la correction de bugs (fix, hotfix) et l’amélioration continue des performances.",

    technos: ["Vue.js", "axios", "Bootstrap"],

    highlights: [
      {
        title: "Refactorisation",
        description:
          "Refactorisation des composants d'affichage afin d'utiliser la bibliothèque de composants commune à l'ensemble de l'application.",
      },
      {
        title: "Changement de preprocesseur CSS",
        description:
          "Remplacement de node-sass par sass pour la compilation des fichiers SCSS, car node-sass n’étant plus maintenu, il provoquait des plantages de l’application.",
      },
    ],
  },
  api: {
    description:
      "L'API permet aux autres applications de gérer les différentes données. J’interviens sur le développement de nouvelles fonctionnalités, la correction de bugs (fix, hotfix) et l’amélioration continue des performances.",
    technos: [
      "Architecture REST",
      "Node.js",
      "Express",
      "RethinkDB",
      "ThinkyORM",
      "Docker",
    ],
    highlights: [
      {
        title: "Synchronisation avec Brevo (outil marketing)",
        description:
          "Lorsque les client sont créés, modifiés ou supprimés dans le CRM, les données sont synchronisées avec Brevo.",
      },
      {
        title: "Optimisation de requêtes",
        description:
          "Optimisation de requêtes pour réduire le temps de réponse de l'API. Par exemple, diminution du temps de réponse de 37 secondes et 180kB pour la récupération des données des commandes.",
      },
      {
        title: "Création de nouvelles routes",
        description:
          "Création de nouvelles routes pour permettre l'application client de récupérer les données nécessaires à leur bon fonctionnement.",
      },
    ],
  },
  visio: {
    description:
      "Permet d'effectuer des visioconférences à deux ou en groupe. J'interviens sur le développement de nouvelles fonctionnalités ainsi que sur la réalisation de tests unitaires.",

    technos: [
      "Monolith",
      "AdonisJS",
      "PostgreSQL",
      "Docker",
      "Next.js",
      "Tailwind",
    ],

    highlights: [
      {
        title: "Design",
        description:
          "Développement de l'interface utilisateur de la visioconférence.",
      },
      {
        title: "Documentation",
        description:
          "Recherche d’un outil de génération de documentation automatique, puis configuration de ce dernier.",
      },
    ],
  },
  coach: {
    description:
      "Permet aux coachs de gérer leurs clients et d'interagir avec les commerciaux. J'interviens sur le développement de nouvelles fonctionnalités.",
    technos: ["React Native", "TypeScript", "Metro"],
  },
  client: {
    description:
      "Permet aux clients de suivre leurs séances et d’interagir avec les commerciaux. J’interviens dans le développement de nouvelles fonctionnalités.",
    technos: ["Next.js", "TypeScript", "Tailwind"],
  },
};

export const wildCodeOnline = {
  technos: {
    front: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Zod",
      "Apollo Client",
      "Jest",
      "Playwright",
    ],
    back: [
      "Appolo Server",
      "GraphQL",
      "Express",
      "TypeScript",
      "TypeORM",
      "PostgreSQL",
      "Jest",
    ],
    server: ["Nginx", "Caddy"],
    tools: ["GitHub", "Docker", "Husky"],
  },
};

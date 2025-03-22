export const justCoaching = {
  manager: {
    description:
      "Le manager (CRM) permet à l'entreprise de gérer les clients ainsi que les coachs. J’interviens sur le développement de nouvelles fonctionnalités, la correction de bugs (fix, hotfix) et l’amélioration continue des performances.",

    technos: ["Vue.js", "axios", "Bootstrap"],

    highlights: [
      {
        title: "Refactorisation de composants d'affichage",
        description:
          "Refactorisation des composants d'affichage afin d'utiliser la bibliothèque de composants commune à l'ensemble de l'application.",
      },
      {
        title: "Remplacement de node-sass par sass",
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
    ],
    highlights: [
      {
        title: "Synchronisation avec Brevo (outil marketing)",
        description:
          "Lorsque les client sont créés, modifiés ou supprimés dans  CRM, les données sont synchronisées avec Brevo.",
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

    technos: ["AdonisJS", "Next.js", "Tailwind"],

    highlights: [
      {
        title: "Développement de l'interface utilisateur",
        description:
          "Développement de l'interface utilisateur de la visioconférence.",
      },
      {
        title: "Documentation",
        description:
          "Configuration d’une bibliothèque de documentation automatique pour le projet de visioconférence.",
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

export const wildCodeOnline = [
  {
    description: "",
  },
];

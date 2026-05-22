import { yearsSince } from "../utils/yearsSince";
import { TagVariant } from "@/app/components/atoms/Tag";

export const METRICS = [
  { value: String(yearsSince(2004)), label: "Ans d'exp." },
  { value: `${yearsSince(2023)}+`, label: "Ans en dev" },
  { value: "5", label: "Projets prod" },
  { value: "CDI", label: "Statut" },
];

export const TIME_LINE_ITEMS = [
  {
    accent: "bg-baltic-sea",
    year: "2024 — aujourd'hui",
    title: "Développeur Full-Stack (CDI)",
    sub: "Just Coaching · Ancenis",
  },
  {
    accent: "bg-veiled-vista",
    year: "2023 — 2024",
    title: "Wild Code School · CDA (RNCP Niv. 6)",
    sub: "Alternance · Concepteur Développeur d'Applications",
  },
  {
    accent: "bg-golden-mist",
    year: "2022 — 2023",
    title: "Autodidacte · Développement Web",
    sub: "Front-end, bases du développement",
  },
  {
    accent: "bg-quiet-violet",
    year: "2004 — 2022",
    title: `${yearsSince(2004)} ans d'expérience terrain`,
    sub: "Compagnons du Devoir · Euromaster · Agencement",
  },
];

export const ARCH_BLOCKS = [
  { label: "Architecture", value: "API REST (Node.js)" },
  { label: "CRM Manager", value: "Vue.js + Bootstrap" },
  { label: "App Coach", value: "React Native + TS" },
  { label: "App Client", value: "Next.js + Tailwind" },
  { label: "Visioconférence", value: "AdonisJS + PostgreSQL" },
];

export const JC_STACK = [
  "Node.js",
  "Express",
  "RethinkDB",
  "AdonisJS",
  "Vue.js",
  "Next.js",
  "React Native",
  "Docker",
  "PostgreSQL",
];

export const JAVA_STACK = ["Java", "Maven", "JDBC", "SQLite", "MVC"];

export const WCS_STACK = [
  "GraphQL",
  "Apollo",
  "TypeORM",
  "Next.js",
  "Jest",
  "Playwright",
  "Nginx",
];

export const SKILLS_CATEGORIES = [
  {
    num: "01",
    title: "Back-End",
    cardBg: "bg-blue-fusion",
    titleColor: "text-cloud-dancer",
    numColor: "text-cloud-dancer/40",
    tagVariant: "dark" as TagVariant,
    tags: [
      "Node.js",
      "TypeScript",
      "AdonisJS",
      "Express",
      "RethinkDB",
      "PostgreSQL",
      "REST API",
    ],
  },
  {
    num: "02",
    title: "Front-End",
    cardBg: "bg-veiled-vista",
    titleColor: "text-blue-fusion",
    numColor: "text-blue-fusion/40",
    tagVariant: "light" as TagVariant,
    tags: ["Vue.js", "Next.js", "React Native", "Tailwind", "Sass"],
  },
  {
    num: "03",
    title: "DevOps & Outils",
    cardBg: "bg-golden-mist",
    titleColor: "text-blue-fusion",
    numColor: "text-blue-fusion/40",
    tagVariant: "light" as TagVariant,
    tags: ["Docker", "Git / GitHub", "NGINX", "Caddy", "macOS", "Ubuntu"],
  },
  {
    num: "04",
    title: "Méthodes",
    cardBg: "bg-quiet-violet",
    titleColor: "text-cloud-dancer",
    numColor: "text-cloud-dancer/40",
    tagVariant: "dark" as TagVariant,
    tags: ["Scrum", "Kanban", "Tests unitaires", "CI/CD", "MVC"],
  },
  {
    num: "05",
    title: "En apprentissage",
    cardBg: "bg-baltic-sea",
    titleColor: "text-cloud-dancer",
    numColor: "text-cloud-dancer/40",
    tagVariant: "dark" as TagVariant,
    tags: ["Java", "Maven", "JDBC", "MVC Java"],
  },
  {
    num: "06",
    title: "Je connais",
    cardBg: "bg-white",
    titleColor: "text-blue-fusion",
    numColor: "text-cloud-cover/60",
    tagVariant: "light" as TagVariant,
    tags: ["GraphQL", "Apollo", "TypeORM", "Playwright", "Jest", "Figma"],
  },
];

export const SOCIAL = {
  linkedin: {
    href: "https://www.linkedin.com/in/thomas-marchand-developpeur-web-full-stack-front-end-back-end-france-javascript-node-react-vue",
    label: "LinkedIn",
  },
  github: {
    href: "https://github.com/ThomMarchand",
    label: "GitHub",
  },
} as const;

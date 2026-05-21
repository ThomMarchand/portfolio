# Portfolio — Thomas Marchand

Portfolio personnel · Développeur Full-Stack & DevOps.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** · **TypeScript 6**
- **Tailwind CSS 4**
- **Nodemailer** (formulaire de contact)

## Structure

```
app/
├── components/
│   ├── atoms/        # Input, Title, Text, ScrollReveal...
│   ├── molecules/    # ContactForm, CardHighlights, Navbar...
│   ├── organisms/    # Navbar, WildCodeSchool
│   └── templates/    # SectionAbout, SectionSkills, SectionProject, SectionContact
├── utils/            # yearsSince
├── layout.tsx
└── page.tsx
```

## Démarrage

```bash
cp .env.example .env.local   # configurer SMTP pour le formulaire de contact
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

Voir `.env.example`.

## Liens

- GitHub : [ThomMarchand](https://github.com/ThomMarchand)
- LinkedIn : [thomas-marchand-developpeur](https://www.linkedin.com/in/thomas-marchand-developpeur-web-full-stack-front-end-back-end-france-javascript-node-react-vue)

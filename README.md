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
├── api/
│   └── contact/      # Route API envoi email (Nodemailer)
├── components/
│   ├── atoms/        # Input, TextArea, Tag, StackTag, SocialLink, ScrollReveal
│   ├── molecules/    # ContactForm
│   ├── organisms/    # Navbar, Footer, JustCoaching, JavaProject, WildCodeSchool
│   └── templates/    # SectionHero, SectionAbout, SectionSkills, SectionProject, SectionContact
├── data/             # projects, skills
├── lib/              # constants, theme
├── utils/            # yearsSince
├── globals.css
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

| Variable     | Description                        |
|--------------|------------------------------------|
| `EMAIL_USER` | Adresse email expéditrice (SMTP)   |
| `EMAIL_PASS` | Mot de passe / App password        |
| `EMAIL_TO`   | Adresse de réception des messages  |

## Liens

- GitHub : [ThomMarchand](https://github.com/ThomMarchand)
- LinkedIn : [thomas-marchand-developpeur](https://www.linkedin.com/in/thomas-marchand-developpeur-web-full-stack-front-end-back-end-france-javascript-node-react-vue)

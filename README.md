# Andrés Enciso - Dev Portfolio

Bilingual (ES/EN) developer portfolio with print-friendly CV, built with Astro, Tailwind CSS v4, and Alpine.js.

![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=flat)

## Features

- **Bilingual (ES/EN)** - i18n system with dynamic routes (`/es/`, `/en/`)
- **Print-friendly** - Optimized layout for PDF export and printing
- **Dark/Light mode** - System preference detection with manual override
- **5 Color themes** - Default, blue, red, green, and cyber
- **Command palette** - Keyboard shortcuts with `Cmd/Ctrl + K`
- **Scroll animations** - Intersection Observer with `prefers-reduced-motion` support
- **Project modals** - Clickable cards with image, description, highlights, and action buttons
- **Skills by category** - Organized into Languages, Frameworks, Cloud & DB, and Tools
- **Availability badge** - Animated "Available for work" indicator
- **Contact CTA** - Call-to-action section with email and LinkedIn
- **SEO** - Open Graph, Twitter Cards, JSON-LD, canonical URLs, hreflang, sitemap, robots.txt
- **Responsive** - Mobile-first with Tailwind CSS v4
- **Docker ready** - Multi-stage build with Nginx

## Stack

- [**Astro**](https://astro.build/) - Static site generator
- [**Tailwind CSS v4**](https://tailwindcss.com/) - Utility-first CSS with CSS-first config
- [**Alpine.js**](https://alpinejs.dev/) - Lightweight JS for interactivity
- [**TypeScript**](https://www.typescriptlang.org/) - Type-safe JavaScript
- [**HotKeyPad**](https://github.com/nicosommi/hotkeypad) - Command palette
- [**Docker**](https://www.docker.com/) + [**Nginx**](https://nginx.org/) - Containerized deployment

## Getting Started

### With Docker (recommended)

```bash
docker compose up -d --build
```

Open [http://localhost:8080](http://localhost:8080) - redirects to `/es/`.

### Local development

```bash
corepack enable
corepack prepare pnpm@9 --activate
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321).

## Project Structure

```
src/
├── i18n/
│   ├── types.ts          # TypeScript interfaces
│   ├── es.ts             # Spanish translations & content
│   ├── en.ts             # English translations & content
│   └── index.ts          # getTranslations() helper
├── components/
│   └── sections/
│       ├── Hero.astro        # Name, photo, availability badge, social links
│       ├── About.astro       # Summary
│       ├── Experience.astro  # Work history with expand/collapse
│       ├── Projects.astro    # Project cards with modal detail view
│       ├── Skills.astro      # Skills organized by category
│       ├── Languages.astro   # Spoken languages
│       ├── Education.astro   # Degrees & certificates
│       └── Contact.astro     # CTA with email & LinkedIn
├── pages/
│   ├── index.astro           # Redirects to /es/
│   └── [lang]/index.astro    # Dynamic route for ES/EN
├── layouts/
│   └── Layout.astro          # SEO, themes, scroll observer
├── config.ts                 # Site URL constant
└── styles/
    └── global.css            # Themes & scroll animations
```

## Content

All content lives in `src/i18n/es.ts` and `src/i18n/en.ts`. Edit these files to update your CV.

## Themes

Change the theme in `src/layouts/Layout.astro`:

```ts
const theme = "blue"; // default | blue | red | green | cyber
```

Each theme has light and dark mode variants. Custom themes can be added in `src/styles/global.css`.

## Commands

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Type-check and build to `./dist/` |
| `pnpm preview` | Preview production build |
| `docker compose up -d --build` | Build and serve with Docker + Nginx |

## Based on

[Smilesharks/dev-portfolio](https://github.com/Smilesharks/dev-portfolio) - Original template by Smilesharks, based on [Bartosz Jarocki](https://github.com/BartoszJarocki/cv) and [Miguel Ángel Durán](https://github.com/midudev/minimalist-portfolio-json).

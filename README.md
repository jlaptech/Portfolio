# Personal Portfolio — John Lester Peralta

A modern, responsive IT portfolio website built with Next.js and Tailwind CSS. Designed to showcase professional experience, technical skills, and personal projects in a clean, dark-themed interface. Deployed and hosted via Vercel.

**Live Site:** [jlaperalta.ca](https://jlaperalta.ca)

---

## Overview

This portfolio was built to present my background as an IT professional in a way that goes beyond a traditional resume. It includes animated sections, a skills grid, project showcase, work experience timeline, and a contact section — all optimized for both desktop and mobile.

---

## Features

- Fully responsive design — mobile, tablet, and desktop
- Smooth scroll animations on section entry
- Dark theme with cyan accent color system
- Modular component architecture
- Sections: Hero, Skills, Projects, Experience, Education, Contact
- Direct links to LinkedIn and GitHub profiles
- Deployed via Vercel with automatic CI/CD on push

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Custom CSS scroll observer |
| Deployment | Vercel |
| Version Control | GitHub |

---

## Project Structure

```
portfolio-site/
├── app/
│   ├── layout.tsx           # Root layout and metadata
│   ├── page.tsx             # Main page — composes all sections
│   └── globals.css          # Global styles and animation classes
├── components/
│   ├── Navbar.tsx           # Fixed top navigation
│   ├── Hero.tsx             # Intro section with profile and CTA
│   ├── Skills.tsx           # Technical skills grid by category
│   ├── Projects.tsx         # Projects and learning section
│   ├── Experience.tsx       # Work history timeline
│   ├── Education.tsx        # Education and certifications
│   ├── Contact.tsx          # Contact section
│   └── ScrollAnimator.tsx   # Intersection observer for animations
├── public/
│   └── profile.jpg          # Profile photo
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/jlaptech/portfolio-site.git
cd portfolio-site
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Live Demo

[https://jlaperalta.ca](https://jlaperalta.ca)

### 4. Build for production

```bash
npm run build
npm start
```

---

## Deployment

This site is deployed on **Vercel** with automatic deployments triggered on every push to the `main` branch.

To deploy your own fork:

1. Push the repository to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — no configuration needed
4. Every push to `main` triggers a new deployment automatically

---

## Customization

All content is managed directly in the component files:

| What to change | Where to edit |
|---|---|
| Name, title, bio | `components/Hero.tsx` |
| Skills and categories | `components/Skills.tsx` |
| Projects | `components/Projects.tsx` |
| Work experience | `components/Experience.tsx` |
| Education and certs | `components/Education.tsx` |
| Contact details | `components/Contact.tsx` |

---

## License

MIT License — free to fork, adapt, and use as your own.

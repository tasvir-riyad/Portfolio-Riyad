# Portfolio Riyad - Tasvirul Hasan Riyad

A personal portfolio website built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. It showcases academic accomplishments, software engineering projects, technical and soft skills, and comprehensive contact channels with a dynamic dark/light interface.

---

## 📌 Project Overview

This portfolio serves as the central digital showcase for **Tasvirul Hasan Riyad**, an undergraduate student in Computer Science & Engineering at **North South University (NSU)**.

### Key Highlights
- **Interactive Signature Splash Screen**: Animated SVG vector stroke drawing simulation that renders on initial load before transitioning smoothly to the main site.
- **Infinite Skills Marquee**: Auto-scrolling carousel showcasing authentic brand vector icons for programming languages and tools (C, C++, Java, SQL, PostgreSQL, HTML5, CSS3, Canva, Google Docs, MS Word, PowerPoint, Excel).
- **Core Competencies & Soft Skills**: Interactive pill badge grid with engaging click animations and tactile feedback.
- **Featured Projects**:
  - **Apartment Management System**: Full-stack desktop application developed in Java and MySQL for building tenant and facility management.
  - **Classroom Booking System (CBS / CSE_299_NSU)**: University role-based room allocation and scheduling platform built with HTML, CSS, JavaScript, and PostgreSQL.
- **Education & Experience Timeline**: Structured, responsive timeline featuring North South University and Chattogram Cantonment Public College with institution crests.
- **Direct Connect & Social Hub**: Contact grid with one-click direct email compose (`tasvirriyad@gmail.com` and university email), mobile call trigger, location indicator, and authentic SVG social links (LinkedIn, GitHub, Instagram, Facebook).
- **Dark & Light Mode**: Seamless theme switching with persistent user preference storage in `localStorage`.
- **Fully Responsive**: Fluid scaling and typography across mobile phones (320px+), tablets, laptops, and ultra-wide desktop monitors.

---

## 🛠️ Technology Stack

| Domain | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS custom properties |
| **Iconography** | [Lucide React](https://lucide.dev/) & Hand-crafted SVG Vectors |
| **Typography** | [Google Fonts](https://fonts.google.com/) (`Audiowide`, `Italianno`, `Quicksand`, `Geist`) |
| **Linting & Code Quality** | [ESLint 9](https://eslint.org/) |

---

## 📂 Project Structure

```text
portfolio/
├── app/
│   ├── favicon.ico          # Browser tab favicon
│   ├── globals.css          # Theme tokens, custom animations, fluid styles
│   ├── layout.tsx           # Root layout, Google Fonts, OpenGraph metadata
│   └── page.tsx             # Main single-page application entry point
├── components/
│   ├── Connect.tsx          # Contact section, emails, phone, social links
│   ├── Education.tsx        # Academic history & certificates
│   ├── Experience.tsx       # Leadership & extracurricular activities
│   ├── Footer.tsx           # Copyright notice & back-to-top anchor
│   ├── Hero.tsx             # Welcome banner, profile photo, resume download
│   ├── Navbar.tsx           # Floating navigation bar & active section indicator
│   ├── Projects.tsx         # Featured project cards with repository links
│   ├── SkillIcons.tsx       # Handcrafted brand SVGs for all technical skills
│   ├── Skills.tsx           # Marquee carousel & interactive competencies
│   ├── SplashSignature.tsx  # Signature SVG stroke animation
│   ├── ThemeContext.tsx     # React context provider for dark/light themes
│   ├── ThemeToggle.tsx      # Sun/moon theme switcher button
│   └── signatureData.ts     # SVG vector paths for the signature animation
├── data/
│   └── portfolioData.ts     # Centralized portfolio data (profile, projects, skills, contacts)
├── public/
│   ├── images/
│   │   ├── education/       # University and college logos
│   │   ├── projects/        # Project preview screenshots
│   │   ├── skills/          # Skill brand vector assets
│   │   ├── socials/         # GitHub, LinkedIn, Instagram, Facebook vectors
│   │   └── profile.jpg      # Profile photograph
│   └── resume.pdf           # Downloadable curriculum vitae / resume
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

Ensure you have installed:
- **Node.js**: `v18.18.0` or higher (`v20.x` or `v22.x` recommended). Verify with:
  ```bash
  node -v
  ```
- **npm** (comes with Node.js) or **pnpm** / **yarn**.

---

### Installation & Execution

#### 1. Clone the repository
```bash
git clone https://github.com/tasvir-riyad/Portfolio-Riyad.git
cd Portfolio-Riyad
```

#### 2. Install dependencies
```bash
npm install
```

#### 3. Start the development server
```bash
npm run dev
```

The application will start with Turbopack. Open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal) in your browser.

---

### Available Scripts

- **`npm run dev`**: Starts local development server with Turbopack fast refresh.
- **`npm run build`**: Compiles and builds the production-ready static bundle.
- **`npm run start`**: Runs the built production server locally.
- **`npm run lint`**: Executes ESLint to check for code consistency and errors.

---





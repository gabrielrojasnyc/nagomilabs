# Nagomi Labs – AI Agents for HCM Harmony

Coming-soon landing page for HR practitioners. AI Agents that certify HCM releases, guard privacy, and catch payroll anomalies—so people can focus on people.

## Overview
- Modern single-page app powered by React + Vite
- Rotating value props (e.g., Payroll Anomalies, Guard Privacy, HCM QA Automation, HCM Release Certification)
- Countdown to launch (currently Nov 1, 2025)
- “About Us” modal with HR-friendly copy
- TailwindCSS styling and Framer Motion animations

## Stack
- Vite + React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- React Router DOM (ready for future routes)

## Quick start

```bash
# Install dependencies
npm install

# Run the dev server (http://localhost:5173)
npm run dev

# Type-check
npm run typecheck

# Build for production
npm run build

# Preview the production build
npm run preview
```

Notes:
- The app mounts via `index.html` and `src/index.tsx` into a `div#root`.
- Tailwind is configured by `src/index.css`, `postcss.config.js`, and `tailwind.config.js`.
- The previous static landing page version still exists in git history (see branch `main`).

## Project structure

```
├─ CNAME                     # Custom domain for GitHub Pages
├─ index.html                # Vite entry (mounts #root)
├─ package.json              # Scripts and deps
├─ postcss.config.js
├─ tailwind.config.js
├─ tsconfig.json
├─ vite.config.ts
└─ src/
	├─ index.tsx             # React entry (createRoot)
	├─ index.css             # Tailwind entry
	├─ App.tsx               # Rotating phrases + countdown wiring
	└─ components/
		├─ ComingSoonPage.tsx # Hero, countdown, buttons
		├─ AboutModal.tsx     # About story (HR-friendly)
		├─ CountdownTimer.tsx
		├─ BiomorphicButton.tsx
		├─ Logo.tsx
		└─ VinePattern.tsx
```

## Customize

- Rotating phrases: edit the `products` array in `src/App.tsx`.
- Rotation speed: change the `setInterval(..., 4000)` in `src/App.tsx` (milliseconds).
- Launch date: update the `new Date('2025-11-01T00:00:00Z')` entries in `src/App.tsx`.
- Tagline on the hero: edit the copy in `src/components/ComingSoonPage.tsx`.
- About story (HR-friendly): edit `src/components/AboutModal.tsx`.

## Deployment (GitHub Pages)

This repository is configured to deploy from `main` → `/docs` with a custom domain (`nagomilabs.ai`). Vite is set to output directly to `docs/` (see `vite.config.ts`), and the `CNAME` lives in `public/` so it’s copied into the build automatically.

Deploy steps:
- Merge to `main` (or push to `main`).
- GitHub Pages publishes from `main` → `/docs`.
- `CNAME` is included in `docs/` automatically; HTTPS is enforced.

Optional (CI alternative):
- You can use a workflow to build and publish to a `gh-pages` branch, but it isn’t required with the current `/docs` setup.

## Contact

Questions or collaboration: hello@nagomilabs.com

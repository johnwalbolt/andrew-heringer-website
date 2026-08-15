# Andrew Heringer — Website

A recreation of [andrewheringer.com](https://andrewheringer.com): a single-page scrolling
home with full-screen parallax image sections, plus dedicated pages for each project.
Built with **Next.js (App Router) + TypeScript**, ready to deploy on **Vercel**.

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero + Music, The Guest and the Host, Sound Bath, About Andrew, and Contact sections |
| `/the-guest-and-the-host` | Indie-folk / singer-songwriter project |
| `/sound-bath` | Ambient music project |
| `/about-andrew` | Bio |

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm start       # serve the production build
```

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. In Vercel, **Add New → Project** and import the repo.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Assets

All images live in `public/images/` (Andrew's supplied `.webp` files). Swap any file
there — keep the same filename — to update a section's background or photo.

## ⚠️ Before launch — things to set

- **Contact email:** the contact form opens the visitor's mail app addressed to a
  placeholder. Set the real address in [`components/site.ts`](components/site.ts)
  (`CONTACT_EMAIL`). For a form that sends without the visitor's mail client, wire it to a
  service like Formspree, Resend, or a Vercel serverless function.
- **Social links** (Instagram / Spotify) are in `components/site.ts` — verify they're current.
- **Subpage copy:** the bios expand lightly on the summaries from the live site. Replace the
  paragraphs in `app/*/page.tsx` with Andrew's final wording.

## Structure

```
app/
  layout.tsx                 root layout: nav + footer + fonts + metadata
  page.tsx                   home (scrolling sections)
  globals.css                all styles
  the-guest-and-the-host/    project page
  sound-bath/                project page
  about-andrew/              bio page
components/
  Nav.tsx  Footer.tsx  ContactForm.tsx  icons.tsx  site.ts
public/images/               .webp assets
```

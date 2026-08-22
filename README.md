# Andrew Heringer — Website

A recreation of [andrewheringer.com](https://andrewheringer.com): a single-page scrolling
home with full-screen parallax image sections, plus dedicated pages for each project.
Built with **Next.js (App Router) + TypeScript** and exported as a **static site** for
**GitHub Pages** (also deployable to Vercel/Netlify/any static host).

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

Open http://localhost:3000 (or whatever port it prints).

```bash
npm run build   # static export → ./out
```

To preview the exported static site exactly as GitHub Pages serves it:

```bash
npx serve out
```

## Deploy to GitHub Pages

A GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
builds the static export and publishes it on every push to `main`.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment**
and set **Source: GitHub Actions**. After that, each push to `main` auto-deploys.
(If a run happened before you enabled this, just re-run it from the **Actions** tab.)

### Custom domain

This build uses root-relative paths, so it works at a domain root (e.g.
`andrewheringer.com`) with **no changes**. To connect the domain:

1. Add your domain under **Settings → Pages → Custom domain** (this creates a
   `CNAME` in the deploy).
2. Point the domain's DNS at GitHub Pages per the on-screen instructions.

> **Interim project URL:** before the custom domain is live, the default
> `https://<user>.github.io/andrew-heringer-website/` URL will **not** load
> assets, because they're referenced from the root. To test on that URL, set
> `basePath: "/andrew-heringer-website"` and `assetPrefix` to match in
> `next.config.mjs`, then remove it once the custom domain is connected.

## Contact form (Web3Forms)

The contact form ([`components/ContactForm.tsx`](components/ContactForm.tsx)) currently
opens the visitor's mail app. To wire it to [Web3Forms](https://web3forms.com) (works on
static hosting): POST the form data to `https://api.web3forms.com/submit` with your
`access_key`. No server needed.

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

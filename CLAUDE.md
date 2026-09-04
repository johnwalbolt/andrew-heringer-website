# Andrew Heringer Website — Guide for Claude Code

This file is read automatically by Claude Code. It explains how this site works and
how to make and publish changes. If you're a new editor, start with **First-time setup**.

## What this is

- The personal website for musician **Andrew Heringer**, live at **https://andrewheringer.com**.
- Built with **Next.js (App Router) + TypeScript**, exported as a **static site**.
- Hosted for free on **GitHub Pages**. **Every push to the `main` branch auto-deploys**
  to the live site in about 1–2 minutes (via GitHub Actions).
- Repo: `https://github.com/johnwalbolt/andrew-heringer-website`

## First-time setup

You need these installed once: **Git**, **Node.js 20+**, **Claude Code**, and
(recommended) the **GitHub CLI** (`gh`). You also need to have been **added as a
collaborator** on the repo by the owner.

```bash
# 1. Sign in to GitHub so you can push (one time)
gh auth login

# 2. Get the code
git clone https://github.com/johnwalbolt/andrew-heringer-website.git
cd andrew-heringer-website

# 3. Install dependencies
npm install

# 4. Run it locally to preview your changes
npm run dev
```

`npm run dev` prints a local URL (usually **http://localhost:3000**) — open it in a
browser. It live-reloads as you edit. Press Ctrl+C to stop it.

## Where things live

| What you want to change | File(s) |
| --- | --- |
| Home page (all its sections) | `app/page.tsx` |
| "The Guest and the Host" page | `app/the-guest-and-the-host/page.tsx` |
| "Sound Bath" page | `app/sound-bath/page.tsx` |
| "About Andrew" page | `app/about-andrew/page.tsx` |
| Images (backgrounds, photos) | `public/images/` |
| Social links, streaming links, Web3Forms key | `components/site.ts` |
| Navigation bar / footer / contact form | `components/Nav.tsx`, `components/Footer.tsx`, `components/ContactForm.tsx` |
| All styling (colors, spacing, layout) | `app/globals.css` |

### Common edits
- **Change wording:** edit the text inside the relevant page file (`app/**/page.tsx`).
- **Swap an image:** drop the new file into `public/images/` and reference it as
  `/images/YourFile.webp`. Keeping the **same filename** as an existing image means no
  code change at all. Prefer `.webp` and reasonable sizes.
- **Update a link** (Instagram, Spotify, Apple, etc.): edit `components/site.ts`.
- **Colors / fonts / spacing:** `app/globals.css`. Shared colors are CSS variables near
  the top (`--title`, `--body`, etc.).

## Preview before publishing

Always run `npm run dev` and check your change in the browser (including on a narrow /
mobile window) before publishing.

## Publish (deploy to the live site)

```bash
git add -A
git commit -m "short description of the change"
git push
```

That's it — pushing to `main` triggers the deploy. Watch it finish at
`https://github.com/johnwalbolt/andrew-heringer-website/actions`; the live site updates
about a minute after it turns green. If your browser still shows the old version,
hard-refresh (Cmd/Ctrl+Shift+R).

## Important rules & gotchas

- **Never run `npm run build` while `npm run dev` is running.** It corrupts the dev
  server's cache and the page stops responding to clicks. If that happens, stop dev
  (Ctrl+C) and run `npm run dev` again.
- **This is a fully static, public site.** There is no server, no database, no login,
  and **no way to password-protect it** on GitHub Pages. Don't add server-only features
  (API routes, middleware) — the static export build will fail.
- **Image/link paths start with `/`** (e.g. `/images/hero.webp`). That's correct — it
  works because the site runs at the root of the custom domain. Don't change them to
  relative paths.
- **The contact form** posts to **Web3Forms** (`components/ContactForm.tsx`). The access
  key in `components/site.ts` is public by design; submissions are emailed to the address
  registered with Web3Forms. Don't put real secrets in the repo.
- **Email is separate.** The domain's email (Google/Mailchimp) is configured in DNS, not
  in this repo — nothing here affects it.
- Make changes on `main` and push — the owner does this directly, so you can too.

## If something breaks

- Build failing? Run `npm run build` locally (with dev stopped) to see the error.
- Deploy failing? Check the **Actions** tab on GitHub for the red run and its logs.
- When in doubt, describe what you changed and ask Claude Code to help fix it.
</content>

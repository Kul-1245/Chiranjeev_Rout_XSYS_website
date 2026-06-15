# Chiranjeev Rout — Portfolio Website

A premium, recruiter-ready personal brand site built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide** icons. Dark mode by default, fully responsive, SEO-ready.

The visual identity: a deep-navy "lab at night" with **electric blue** as the only bright accent and **gold reserved strictly for achievements**. The signature element is an animated **molecular node-network** in the hero — engineering structure rendered as motion.

---

## Quick start

Requires **Node.js 18.18+** (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build && npm run start   # production build
```

---

## Make it yours (start here)

Almost all content lives in two files — no component edits needed:

| File | What's inside |
|------|----------------|
| `lib/data.ts` | Profile, links, about, education, experience, projects, skills, achievements, vision |
| `lib/blog.ts` | Blog posts (add/edit articles as plain content blocks) |

Search the project for `// TODO` to find every placeholder. The important ones:

1. **Email & links** — `profile.email` and `profile.links` in `lib/data.ts`.
2. **Photo** — drop a square/portrait image at `public/profile.jpg`.
3. **Resume** — replace `public/resume.pdf` with your real PDF.
4. **Domain** — set `siteUrl` in `app/layout.tsx` for correct SEO/OpenGraph URLs.
5. **Awards** — add specific award names in the `achievements` array.

The contact form opens the visitor's email client by default. To receive messages directly, connect a form service (Formspree, Resend, Web3Forms) inside `components/Contact.tsx`.

---

## Project structure

```
app/
  layout.tsx          # fonts, theme, SEO metadata, navbar + footer
  page.tsx            # home — composes all 10 sections
  globals.css         # design tokens (light/dark) + base styles
  blog/
    page.tsx          # blog index (server + metadata)
    [slug]/page.tsx   # individual article
components/            # one file per section + shared UI
lib/
  data.ts             # all site content
  blog.ts             # blog content
public/               # profile.jpg, resume.pdf
```

## Sections

Hero · About · Education · Experience · Projects (filterable) · Skills (animated) · Achievements (counters) · Vision · Blog (search + categories) · Contact.

## Customizing the look

All colors are CSS variables in `app/globals.css` (`:root` = light, `.dark` = dark). Change them once and the whole site follows. Fonts are wired in `app/layout.tsx` (Poppins display, Inter body, Geist Mono labels).

## Deploy

Push to GitHub and import on **Vercel** — zero config. Or any host that runs Next.js 15.

---

Built for Chiranjeev Rout. Edit freely.

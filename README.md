# YK Apparels — Marketing Website

Static marketing site for [YK Apparels](https://ykapparels.com), a knitwear & apparel
production facility in Lahore, Pakistan. Built to present the facility to international
and Pakistani brands and win production inquiries.

Built with **Astro + Tailwind CSS v4**. Ships pure static HTML (great SEO), with light
and dark themes driven by CSS design tokens and a header toggle.

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Dev server at `http://localhost:4321`        |
| `npm run build`   | Production build to `./dist/`                |
| `npm run preview` | Preview the production build locally         |

## Project structure

- `src/data/site.ts` — contact details, address, socials, nav
- `src/data/content.ts` — all page copy: capabilities, process, stats, clients, order info
- `src/styles/global.css` — design tokens for both themes (light + dark)
- `src/layouts/Base.astro` — shared head (SEO/OG/JSON-LD), header, footer
- `src/components/` — reusable sections; `PhotoSlot.astro` is the photo-ready placeholder
- `src/pages/` — Home, Capabilities, About, Clients, Contact, 404
- `scripts/og.svg` — source for the social-share image (`public/og.png`)

## Before launch — TODO checklist

1. **Web3Forms key**: create a free access key at https://web3forms.com (verifies
   `contact@ykapparels.com`) and replace `YOUR-WEB3FORMS-ACCESS-KEY` in
   `src/pages/contact.astro`.
2. **Real numbers**: replace placeholder stats in `src/data/content.ts`
   (brands served, capacity, MOQ, lead times) — search for `TODO`.
3. **Photos**: the site currently uses free-license stock photos from Unsplash
   (`public/images/`, commercial use permitted, no attribution required). Replace them
   with real facility/product photography when available — just swap the files or update
   the `src` paths passed to `<PhotoSlot>`; the layout doesn't change.
4. **Clients**: confirm the brand list (and permission to display) in `src/data/content.ts`;
   replace the placeholder testimonials in `src/pages/clients.astro`.
5. **Socials**: confirm the social URLs in `src/data/site.ts`.
6. **Google Analytics (optional)**: create a GA4 property at analytics.google.com and paste
   the Measurement ID (`G-XXXXXXXXXX`) into `gaMeasurementId` in `src/data/site.ts`.
   The GDPR consent banner and Consent Mode v2 activate automatically with it — while the
   ID is empty, the site stays 100% cookie-free with no banner. For search ranking, also
   verify the domain in Google Search Console and submit `sitemap-index.xml`.

## Deploying (free)

The site is fully static — any static host works. Two easy options:

### Cloudflare Pages
1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → connect the repo.
3. Framework preset: **Astro**. Build command `npm run build`, output `dist`.
4. Add the custom domain `ykapparels.com` under the project's Custom Domains tab.

### Netlify
1. Push this repo to GitHub.
2. Netlify → Add new site → Import from Git → pick the repo.
3. Netlify auto-detects Astro (build `npm run build`, publish `dist`).
4. Site settings → Domain management → add `ykapparels.com`.

After connecting the domain, update DNS at the registrar as the host instructs.
Every `git push` then redeploys automatically.

### Regenerating the OG image

If you edit `scripts/og.svg`:

```sh
node -e "import('sharp').then(async ({default: s}) => s('scripts/og.svg').png().toFile('public/og.png'))"
```

# YK Apparels — Marketing Website

Static Astro website for [YK Apparels](https://ykapparels.com), a knitwear and apparel
manufacturer in Lahore, Pakistan. Production is deployed to Cloudflare from the `main` branch.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies and update the lock file |
| `npm run dev` | Start the local site at `http://localhost:4321` |
| `npm run build` | Build static production files into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check:seo` | Crawl `dist/` and validate metadata, schema, links and sitemap coverage |
| `npm run verify` | Build, run the SEO gate and perform a Cloudflare deployment dry-run |

Run `npm run verify` before every production push. Cloudflare uses `npm ci`, so commit both
`package.json` and `package-lock.json` whenever dependencies change.

## Project structure

- `src/data/site.ts` — business details, environment-backed analytics, social profiles and navigation
- `src/data/content.ts` — shared capability, process, order and FAQ content
- `src/data/commercial-pages.ts` — high-intent manufacturing landing pages
- `src/data/guides.ts` — evergreen editorial guides; add future guides here
- `src/layouts/Base.astro` — canonical metadata, social cards, JSON-LD and conversion tracking
- `src/components/` — reusable page sections
- `src/pages/` — static and generated routes
- `scripts/validate-seo.mjs` — production-output SEO regression gate
- `SEO_RUNBOOK.md` — release checklist, external setup and content roadmap

## Deployment environment

Both variables are optional and must be set in Cloudflare rather than committed:

- `PUBLIC_WEB3FORMS_ACCESS_KEY` enables the inquiry form after the receiving email is verified.
- `PUBLIC_GA_MEASUREMENT_ID` enables GA4 and its consent banner when it matches `G-...`.

For the production SEO measurement plan, set `PUBLIC_GA_MEASUREMENT_ID` in the Cloudflare
production environment, redeploy, accept analytics in a test browser, and mark `generate_lead`
as a GA4 key event. Supporting contact events include `inquiry_cta_click`, `whatsapp_click`,
`email_click`, `phone_click`, and `resource_download`.

Without the form key, the contact page intentionally offers WhatsApp instead of displaying a
broken form. Without a valid analytics ID, no analytics script or consent banner is emitted.

Social icons are intentionally visible but disabled until verified profile URLs are added to
`src/data/site.ts`. Do not publish guessed profile URLs.

## Content and proof policy

Do not publish unverified certifications, production capacity, lead times, minimum quantities,
export terms, renewable-energy output, client quotes or performance numbers. Add exact claims only
after the business can provide current evidence and approves the public wording. Installed solar
capacity is not the same as measured electricity generation; publish generation figures only from
the inverter or energy-monitoring record. The client brand list also requires permission to display.

Facility and product photography should progressively replace the current licensed stock images.
This is the largest remaining on-site trust improvement.

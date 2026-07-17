# SEO release and growth runbook

This runbook applies to the current Cloudflare-hosted website only. It does not assume or preserve
content from any previous website.

## Before merging to `main`

1. Run `npm run verify` and require a clean result.
2. Preview `dist/` locally and inspect the home page, navigation, five commercial pages, guides,
   contact fallback and mobile menu in light and dark mode.
3. Confirm that the homepage slogan remains exactly “Designs in. Garments out.” with its approved
   typography and colours.
4. Review business claims. Do not release new numbers, client quotes, certifications or shipping
   terms without evidence and written approval.
5. Confirm `git diff --check` is clean and review the final diff before committing.

## Cloudflare production settings

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Optional variables: `PUBLIC_WEB3FORMS_ACCESS_KEY`, `PUBLIC_GA_MEASUREMENT_ID`
- Keep `ykapparels.com` as the only canonical hostname.

The current `www.ykapparels.com` host returns a page instead of redirecting. Create a Cloudflare
301 redirect from `https://www.ykapparels.com/*` to `https://ykapparels.com/$1` and keep the path
and query string. This is a zone-level action and cannot be implemented reliably in this static
repository.

## Search-engine setup after release

1. Add `ykapparels.com` as a Domain property in Google Search Console using a DNS TXT record.
2. Submit `https://ykapparels.com/sitemap-index.xml`.
3. Request indexing for the home page, five commercial pages and two initial guides.
4. Import the verified property into Bing Webmaster Tools.
5. Complete the Google Business Profile with the exact business name, facility address, phone,
   website and original facility/product photographs.
6. Add the canonical website URL to verified business profiles and relevant textile/manufacturing
   directories. Prefer accurate, useful listings over bulk directory submissions.

## First 90 days of content

Publish two useful pieces per month and update related internal links when each goes live.

| Month | Topic 1 | Topic 2 |
| --- | --- | --- |
| 1 | Choosing a custom knitwear manufacturer in Asia | Custom knitwear tech-pack checklist |
| 2 | What determines MOQ for sweater production? | Sweater sampling and approval checklist |
| 3 | Knitwear quality-control checklist for brands | Comparing Pakistan garment manufacturers by product fit |

Every article should answer a genuine buyer question, include original factory insight, link to one
commercial page and end with a relevant production inquiry. Avoid thin city/country variations or
pages created only to repeat a keyword.

## Proof assets to collect

- Original exterior, production-floor, machinery, sampling, inspection and finished-product photos
- Short factory walkthrough video
- Machine types, workforce and realistic monthly capacity ranges
- Exact MOQ and lead-time rules by product category
- Supported shipping terms and documentation
- Current certification files with scope and expiry dates
- Approved client logos, case studies and attributable quotes

Add proof to the closest relevant page rather than creating a single overloaded trust page.

## AI visibility (ChatGPT, Claude, Perplexity, Gemini)

Goal: when buyers ask AI assistants for manufacturer recommendations, YK Apparels is cited.
How assistants source answers: ChatGPT searches via the Bing index, Claude via Brave Search,
Gemini via Google, Perplexity via its own crawler (favouring fresh, dated content). On-site
support already shipped: explicit AI-crawler allowlist in `robots.txt`, machine-readable
summaries at `/llms.txt` and `/llms-full.txt`, quotable "At a glance" facts on `/about/`,
FAQPage/Service/Article schema throughout.

### Critical: Cloudflare blocks AI crawlers by default

Cloudflare's "Block AI Bots" (Security → Bots) now defaults to **Block** and acts at the edge,
**before robots.txt is read** — with it on, GPTBot/ClaudeBot/PerplexityBot can never see the
site regardless of anything in this repository.

1. Cloudflare dashboard → Security → Bots → set AI bot blocking **off**, or with the
   category controls allow **Search**, **Agent** and (recommended for brand visibility)
   **Training** crawlers.
2. Confirm Super Bot Fight Mode is not challenging verified bots.
3. Enable **Crawler Hints / IndexNow** so content changes reach Bing quickly.
4. Verify after deploy: `curl -A "GPTBot" -I https://ykapparels.com/` must return 200.

### Index eligibility per assistant

- **Bing Webmaster Tools** (→ ChatGPT): import the GSC property, submit the sitemap. Most
  ChatGPT citations come from top Bing results.
- **Brave Search** (→ Claude): after launch check `site:ykapparels.com` on search.brave.com;
  if absent, submit via Brave's webmaster tooling.
- **Google Search Console** (→ Gemini / AI Overviews): already covered above.
- **Perplexity**: no console — its crawler follows the open web; freshness matters, so keep
  guide `updated` dates truthful and current.

### Corpus building (the real lever for "recommend me a manufacturer")

Assistants recommend businesses they repeatedly see in third-party context. Compounding,
months-scale work: LinkedIn company page linking the site; complete Google Business Profile;
accurate listings on B2B sourcing directories (Fibre2Fashion, Kompass, TradeKey, Sewport);
earn mentions in "top knitwear manufacturers in Pakistan" articles; genuinely helpful answers
(with disclosure) where founders ask sourcing questions (Reddit r/fashionstartup,
r/streetwearstartup, Quora). Keep name/address/phone identical everywhere.

### Monthly AI monitoring

Ask ChatGPT, Claude, Perplexity and Gemini: "custom knitwear manufacturer in Pakistan",
"low MOQ knitwear manufacturer for startups", "what is YK Apparels" — log whether and where
the site is cited. In GA4, segment referrals from `chatgpt.com`, `perplexity.ai`, `claude.ai`,
`gemini.google.com`, `copilot.microsoft.com` to measure AI-driven visits.

## Measurement

Review monthly, not daily:

- Search Console impressions, clicks, average position and queries by landing page
- Indexed pages and crawl issues
- Contact-form submissions, WhatsApp clicks, email clicks and phone clicks
- Qualified inquiries by product, country and order stage
- Core Web Vitals field data once enough traffic exists

Top-five rankings cannot be guaranteed. The near-term target is sustained movement for specific,
high-intent queries; broader “garment manufacturer in Asia” visibility requires accumulated proof,
useful content, relevant mentions and time.

## Rollback

SEO work is isolated on `codex/seo-foundation`. Before merge, the production site remains on
`main`. After merge, revert the merge commit if a production issue is found; do not rewrite shared
branch history.

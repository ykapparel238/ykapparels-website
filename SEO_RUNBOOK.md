# SEO and GEO release runbook

This runbook applies to the current Cloudflare-hosted website. It treats search indexing,
user-requested AI retrieval and model training as separate policies.

## Release gate

1. Run `npm run verify` and require a clean build, SEO validation and Wrangler dry-run.
2. Preview `dist/` and inspect the homepage, commercial pages, guides, downloadable template,
   contact fallback and mobile menu in light and dark mode.
3. Keep the homepage slogan exactly “Designs in. Garments out.” with its approved typography and colours.
4. Review `src/data/business-facts.json`. Change approved figures only with business approval, update
   `reviewedOn` and set a new `reviewDueOn` no more than 90 days later.
5. Confirm `git diff --check` is clean and review the final diff before committing.

## Cloudflare deployment

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Optional variables: `PUBLIC_WEB3FORMS_ACCESS_KEY`, `PUBLIC_GA_MEASUREMENT_ID`
- Canonical origin: `https://ykapparels.com`

Repository redirect rules permanently map the confirmed indexed `/about-us/` URL to `/about/`.
After deployment, inspect Search Console’s Not Found report. Add a 301 only when an old URL has a
genuinely equivalent current page; do not redirect unrelated URLs to the homepage.

The `www` hostname must be handled at zone level because static `_redirects` rules do not match
domains. In Cloudflare Redirect Rules, create one dynamic permanent redirect:

- Match: hostname equals `www.ykapparels.com`
- Target: `https://ykapparels.com${http.request.uri.path}`
- Preserve the query string
- Status: 301

Verify a single hop with:

```sh
curl -I 'https://www.ykapparels.com/custom-knitwear-manufacturer/?source=test'
curl -I https://ykapparels.com/about-us/
```

## AI crawler policy

The approved policy is **Search Allow, Agent Allow, Training Block**.

1. Cloudflare → Security Settings → Configure AI bot policies:
   - Search: Allow
   - Agent: Allow
   - Training: Block on all pages
2. Keep Managed `robots.txt` enabled with `search=yes`, `ai-train=no` and `use=reference`.
3. In AI Crawl Control, confirm OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User,
   PerplexityBot and Perplexity-User are not blocked or challenged.
4. Enable Crawler Hints so changed URLs are submitted through IndexNow.
5. Do not rely on a spoofed User-Agent as proof of verified-bot access. Check Cloudflare events and
   bot classification in addition to the response tests.

Post-deploy response checks:

```sh
for bot in OAI-SearchBot ChatGPT-User Claude-SearchBot Claude-User PerplexityBot Perplexity-User; do
  curl -A "$bot" -I https://ykapparels.com/
done
```

The live `robots.txt` should contain Cloudflare’s managed block followed by the origin policy, with
no disagreement: search/agent bots allowed and GPTBot, ClaudeBot and other training crawlers disallowed.

## Search engines and measurement

The Google Domain property is already DNS-verified.

1. Submit `https://ykapparels.com/sitemap-index.xml` in Google Search Console.
2. Request indexing for the homepage, commercial knitwear pages and the guide index; allow the
   sitemap and internal links to discover the remaining pages.
3. Import the verified property into Bing Webmaster Tools and submit the same sitemap.
4. Confirm IndexNow activity in Bing after Cloudflare Crawler Hints is enabled.
5. Create a GA4 property and set `PUBLIC_GA_MEASUREMENT_ID=G-...` in the Cloudflare production
   environment. Redeploy and accept analytics in a test browser.
6. In GA4, mark `generate_lead` as a key event. Review `whatsapp_click`, `email_click`,
   `phone_click`, `inquiry_cta_click` and `resource_download` as supporting events.
7. Test one successful form or WhatsApp fallback inquiry and confirm the event location identifies
   the originating page or component.

Review monthly:

- Search Console queries, impressions, clicks, average position and indexed pages
- Bing crawl/index status and IndexNow submissions
- GA4 qualified leads and assisted contact actions by landing page and source
- Core Web Vitals field data once the site has enough traffic
- AI citation baseline in `GEO_MONITORING.csv`

## 90-day knitwear program

The site now provides focused commercial coverage for custom knitwear, sweaters and cardigans,
knitted polos, private label, low MOQ, sampling and quality control. The guide library covers factory
selection, tech packs, MOQ, sampling, yarn/gauge/construction and quality control.

Do not add more indexable pages until the current set is indexed and receiving query data. During the
first 90 days, improve proof and distribution instead of publishing keyword variations:

### Days 1–30: index and establish the entity

- Complete Google Business Profile with the exact site name, address, phone, URL and original photos.
- Create verified LinkedIn, Instagram and Facebook profiles. Add URLs to `site.socials` only after
  each profile is public, accurate and controlled by the business.
- Submit Search Console and Bing sitemaps; inspect the new URLs after recrawl.
- Share the downloadable knitwear tech-pack template through verified business channels.

### Days 31–60: add product proof

- Replace or supplement generic imagery with approved factory exterior, machinery, sampling,
  inspection and finished-product photography.
- Add product-specific examples to the closest sweater, polo, sampling or quality page.
- Publish exact capacity or certificate details only when a current source document is available.
- Request permission before publishing client logos, names, quotations or case studies.

### Days 61–90: earn independent corroboration

- Create accurate profiles on reputable textile/manufacturing directories selected for real buyer
  use and indexability; avoid bulk directory packages.
- Seek links or mentions from approved clients, textile associations, trade events and useful expert
  contributions.
- Refresh pages only when facts, evidence or buyer guidance materially improve; never change dates
  solely to simulate freshness.
- Compare query and citation results against the first `GEO_MONITORING.csv` baseline.

## Proof backlog

- Facility exterior and production-floor photos
- Machinery, sampling, inspection and finished-product photos
- Short factory walkthrough video
- Machine types, workforce and realistic monthly capacity ranges
- Shipping terms and documentation actually supported
- Current certificates with scope and expiry dates
- Approved client logos, case studies and attributable quotes

Place each proof item on the page where it supports a buyer decision. Avoid an overloaded “trust” page.

## Acceptance and rollback

- `npm run verify` passes with zero SEO warnings.
- Apex pages return 200; `www` and `/about-us/` return single-hop 301 responses.
- Search/agent bots are accessible and training crawlers are disallowed by both origin and edge policy.
- The sitemap contains canonical HTML pages only.
- Structured data matches visible page content.
- GA4 records the intended conversion events after consent.
- Mobile field targets: LCP under 2.5 seconds, INP under 200 ms and CLS under 0.1 at the 75th percentile.

If a release fails, revert the release commit and redeploy. Do not rewrite shared `main` history.

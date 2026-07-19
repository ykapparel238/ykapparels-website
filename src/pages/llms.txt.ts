/*
  /llms.txt — machine-readable site summary for AI assistants and agents
  (https://llmstxt.org). Generated at build from the same data files that
  render the site, so it can never drift from the visible content.
*/
import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { keyFacts, businessFactsMeta } from '../data/business-facts';
import { commercialPages } from '../data/commercial-pages';
import { guides } from '../data/guides';

export const GET: APIRoute = () => {
  const lines: string[] = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    '## Key facts',
    '',
    ...keyFacts.map((f) => `- ${f.label}: ${f.value}`),
    `- Facts reviewed: ${businessFactsMeta.reviewedOn}`,
    '',
    '## Main pages',
    '',
    `- [Home](${site.url}/): Knitwear manufacturer in Lahore, Pakistan — overview, capabilities and clients.`,
    `- [Capabilities](${site.url}/capabilities/): Eight manufacturing capabilities, order basics (MOQ, sampling, lead times) and FAQ.`,
    `- [About & Facility](${site.url}/about/): Company history, production facility and quality process.`,
    `- [Clients](${site.url}/clients/): Pakistani brands YK Apparels manufactures for.`,
    `- [Contact](${site.url}/contact/): Production inquiry form, WhatsApp, email, phone and facility map.`,
    '',
    '## Services',
    '',
    ...commercialPages.map((p) => `- [${p.eyebrow}](${site.url}/${p.slug}/): ${p.description}`),
    '',
    '## Guides',
    '',
    ...guides.map((g) => `- [${g.h1}](${site.url}/guides/${g.slug}/): ${g.description}`),
    '',
    '## Optional',
    '',
    `- [Full site content](${site.url}/llms-full.txt): Complete text content of the pages above in one file.`,
    `- [Privacy policy](${site.url}/privacy/): How inquiry data is handled (GDPR/CCPA).`,
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

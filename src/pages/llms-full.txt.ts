/*
  /llms-full.txt — full site content as one markdown document for AI
  assistants that want depth beyond /llms.txt. Generated from the same
  data files that render the site.
*/
import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { keyFacts, capabilities, orderInfo, smallRuns, processSteps, faqs, qualityPoints } from '../data/content';
import { commercialPages } from '../data/commercial-pages';
import { guides } from '../data/guides';

export const GET: APIRoute = () => {
  const out: string[] = [
    `# ${site.name} — full site content`,
    '',
    `> ${site.description}`,
    '',
    '## Key facts',
    '',
    ...keyFacts.map((f) => `- ${f.label}: ${f.value}`),
    '',
    '## Manufacturing capabilities',
    '',
  ];

  for (const cap of capabilities) {
    out.push(`### ${cap.title}`, '', cap.long, '', ...cap.details.map((d) => `- ${d}`), '');
  }

  out.push('## Order basics', '');
  for (const info of orderInfo) {
    out.push(`- ${info.label}: ${info.value} — ${info.note}`);
  }
  out.push('', '## Small runs and growth path', '');
  for (const run of smallRuns) {
    out.push(`### ${run.moq} — ${run.audience}`, '', run.text, '');
  }

  out.push('## Production process', '');
  processSteps.forEach((step, i) => {
    out.push(`${i + 1}. **${step.title}** — ${step.text}`);
  });

  out.push('', '## Quality approach', '');
  for (const point of qualityPoints) {
    out.push(`### ${point.title}`, '', point.text, '');
  }

  out.push('## Frequently asked questions', '');
  for (const faq of faqs) {
    out.push(`### ${faq.q}`, '', faq.a, '');
  }

  out.push('## Services in depth', '');
  for (const page of commercialPages) {
    out.push(`### ${page.h1}`, '', `${site.url}/${page.slug}/`, '', page.lead, '');
    for (const section of page.sections) {
      out.push(`#### ${section.title}`, '', section.text, '', ...section.points.map((p) => `- ${p}`), '');
    }
    for (const faq of page.faqs) {
      out.push(`#### ${faq.q}`, '', faq.a, '');
    }
  }

  out.push('## Guides', '');
  for (const guide of guides) {
    out.push(`### ${guide.h1}`, '', `${site.url}/guides/${guide.slug}/ (updated ${guide.updated})`, '', guide.lead, '');
    for (const section of guide.sections) {
      out.push(`#### ${section.title}`, '', section.text, '', ...section.points.map((p) => `- ${p}`), '');
    }
  }

  out.push(
    '## Contact',
    '',
    `- Email: ${site.email}`,
    `- Phone: ${site.phone}`,
    `- WhatsApp: https://wa.me/${site.whatsapp}`,
    `- Address: ${site.address.street}, ${site.address.city}, ${site.address.country}`,
    `- Inquiry form: ${site.url}/contact/`,
    '',
  );

  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

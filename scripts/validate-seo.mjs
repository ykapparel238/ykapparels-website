import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
const origin = 'https://ykapparels.com';
const errors = [];
const warnings = [];
const pageLinks = new Map();
const factsManifest = JSON.parse(readFileSync(join(root, 'src/data/business-facts.json'), 'utf8'));
const commercialSource = readFileSync(join(root, 'src/data/commercial-pages.ts'), 'utf8');
const guidesSource = readFileSync(join(root, 'src/data/guides.ts'), 'utf8');
const servicePaths = new Set(
  [...commercialSource.matchAll(/slug:\s*'([^']+)'/g)].map((match) => `/${match[1]}/`),
);
const guidePaths = new Set(
  [...guidesSource.matchAll(/slug:\s*'([^']+)'/g)].map((match) => `/guides/${match[1]}/`),
);

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function pagePath(file) {
  const outputPath = relative(dist, file).split(sep).join('/');
  if (outputPath === 'index.html') return '/';
  if (outputPath.endsWith('/index.html')) return `/${outputPath.slice(0, -10)}`;
  return `/${outputPath}`;
}

function firstMatch(html, pattern) {
  return html.match(pattern)?.[1]?.trim() ?? '';
}

function stripTags(value) {
  return value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function hasSchemaType(value, expected) {
  if (Array.isArray(value)) return value.some((item) => hasSchemaType(item, expected));
  if (!value || typeof value !== 'object') return false;
  const type = value['@type'];
  if (type === expected || (Array.isArray(type) && type.includes(expected))) return true;
  return Object.values(value).some((item) => hasSchemaType(item, expected));
}

function crawlerGroup(robots, userAgent) {
  const escaped = userAgent.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return robots.match(new RegExp(`User-agent:\\s*${escaped}\\s*([\\s\\S]*?)(?=User-agent:|Sitemap:|$)`, 'i'))?.[1] ?? '';
}

function localTargetExists(href, fromPath) {
  let url;
  try {
    url = new URL(href, `${origin}${fromPath}`);
  } catch {
    return true;
  }
  if (url.origin !== origin) return true;
  const pathname = decodeURIComponent(url.pathname);
  if (/\.[a-z0-9]+$/i.test(pathname)) return existsSync(join(dist, pathname.slice(1)));
  return existsSync(join(dist, pathname.slice(1), 'index.html'));
}

if (!existsSync(dist)) {
  console.error('SEO validation requires a production build in dist/. Run npm run build first.');
  process.exit(1);
}

const htmlFiles = walk(dist).filter((file) => file.endsWith('.html'));
const titles = new Map();
const descriptions = new Map();
const indexableCanonicals = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const path = pagePath(file);
  const title = stripTags(firstMatch(html, /<title>([\s\S]*?)<\/title>/i));
  const description = firstMatch(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const robots = firstMatch(html, /<meta\s+name="robots"\s+content="([^"]*)"/i);
  const canonical = firstMatch(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const noindex = robots.includes('noindex');

  if (!title) errors.push(`${path}: missing title`);
  if (!description) errors.push(`${path}: missing meta description`);
  if (!robots) errors.push(`${path}: missing robots directive`);
  if (!canonical) errors.push(`${path}: missing canonical URL`);
  if (h1Count !== 1) errors.push(`${path}: expected one H1, found ${h1Count}`);

  if (!noindex) {
    if (!canonical.startsWith(`${origin}/`)) errors.push(`${path}: canonical is outside the production origin`);
    if (canonical !== `${origin}${path}`) errors.push(`${path}: canonical does not match the rendered URL (${canonical})`);
    indexableCanonicals.push(canonical);
    if (title.length < 30 || title.length > 65) warnings.push(`${path}: title length is ${title.length}`);
    if (description.length < 110 || description.length > 170) warnings.push(`${path}: description length is ${description.length}`);
  }

  if (titles.has(title) && title) errors.push(`${path}: duplicate title also used by ${titles.get(title)}`);
  else titles.set(title, path);
  if (descriptions.has(description) && description) errors.push(`${path}: duplicate description also used by ${descriptions.get(description)}`);
  else descriptions.set(description, path);

  const jsonLdBlocks = [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  if (!jsonLdBlocks.length) errors.push(`${path}: missing JSON-LD`);
  const parsedJsonLd = [];
  for (const [, block] of jsonLdBlocks) {
    try {
      parsedJsonLd.push(JSON.parse(block));
    } catch (error) {
      errors.push(`${path}: invalid JSON-LD (${error.message})`);
    }
  }
  if (servicePaths.has(path) && !parsedJsonLd.some((data) => hasSchemaType(data, 'Service'))) {
    errors.push(`${path}: commercial page is missing Service schema`);
  }
  if (guidePaths.has(path) && !parsedJsonLd.some((data) => hasSchemaType(data, 'Article'))) {
    errors.push(`${path}: guide is missing Article schema`);
  }

  const links = [...html.matchAll(/<a\b[^>]*\shref="([^"]+)"/gi)].map((match) => match[1]);
  pageLinks.set(path, links);
  for (const href of new Set(links)) {
    if (href.startsWith('#') || /^(mailto:|tel:|javascript:)/i.test(href)) continue;
    if (!localTargetExists(href, path)) errors.push(`${path}: broken internal link ${href}`);
  }
}

for (const canonical of indexableCanonicals) {
  const targetPath = new URL(canonical).pathname;
  if (targetPath === '/') continue;
  const inbound = [...pageLinks.entries()].filter(([sourcePath, links]) =>
    sourcePath !== targetPath && links.some((href) => {
      try {
        const url = new URL(href, `${origin}${sourcePath}`);
        return url.origin === origin && url.pathname === targetPath;
      } catch {
        return false;
      }
    }),
  );
  if (!inbound.length) errors.push(`${targetPath}: indexable page has no internal inbound link`);
}

const sitemapFiles = walk(dist).filter((file) => /sitemap.*\.xml$/.test(file));
const sitemap = sitemapFiles.map((file) => readFileSync(file, 'utf8')).join('\n');
for (const canonical of indexableCanonicals) {
  if (!sitemap.includes(canonical)) errors.push(`${canonical}: missing from sitemap`);
}
if (sitemap.includes(`${origin}/404`)) errors.push('404 page must not appear in sitemap');

const redirectsPath = join(dist, '_redirects');
if (!existsSync(redirectsPath)) errors.push('Cloudflare _redirects file is missing from the build');
else {
  const redirects = readFileSync(redirectsPath, 'utf8');
  if (!/^\/about-us\/?\s+\/about\/\s+301$/m.test(redirects)) {
    errors.push('_redirects must permanently map /about-us to /about/');
  }
}

const robotsPath = join(dist, 'robots.txt');
if (!existsSync(robotsPath)) errors.push('robots.txt is missing from the build');
else {
  const robots = readFileSync(robotsPath, 'utf8');
  for (const bot of ['OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User']) {
    if (!/Allow:\s*\//i.test(crawlerGroup(robots, bot))) errors.push(`robots.txt must allow ${bot}`);
  }
  for (const bot of ['GPTBot', 'ClaudeBot', 'Google-Extended', 'Applebot-Extended', 'CCBot', 'meta-externalagent', 'Amazonbot', 'Bytespider']) {
    if (!/Disallow:\s*\//i.test(crawlerGroup(robots, bot))) errors.push(`robots.txt must block training crawler ${bot}`);
  }
  if (!robots.includes(`Sitemap: ${origin}/sitemap-index.xml`)) errors.push('robots.txt is missing the canonical sitemap URL');
}

for (const name of ['llms.txt', 'llms-full.txt']) {
  const file = join(dist, name);
  if (!existsSync(file)) {
    errors.push(`${name} is missing from the build`);
    continue;
  }
  const value = readFileSync(file, 'utf8');
  if (!value.startsWith('# YK Apparels')) errors.push(`${name}: missing brand heading`);
  if (/<(?:html|body|script)\b/i.test(value)) errors.push(`${name}: expected plain Markdown-like text, found HTML`);
  if (/(^|:\s)(?:undefined|null)(?=$|\n)/m.test(value) || value.includes('[object Object]')) {
    errors.push(`${name}: contains an unresolved value`);
  }
}

const llmsFull = readFileSync(join(dist, 'llms-full.txt'), 'utf8');
for (const fact of Object.values(factsManifest.facts)) {
  if (!llmsFull.includes(fact.value)) errors.push(`llms-full.txt is missing approved fact: ${fact.value}`);
}
const reviewDue = new Date(`${factsManifest.meta.reviewDueOn}T23:59:59Z`);
if (reviewDue < new Date()) errors.push(`Business facts review expired on ${factsManifest.meta.reviewDueOn}`);

if (!existsSync(join(dist, 'downloads/knitwear-tech-pack-template.csv'))) {
  errors.push('Downloadable knitwear tech-pack template is missing from the build');
}

const output = walk(dist).map((file) => readFileSync(file)).join('\n');
for (const staleClaim of ['one of the lowest MOQs', 'MOQ is confirmed per style', 'Lead time is quoted after']) {
  if (output.includes(staleClaim)) errors.push(`Conflicting or unsupported business claim emitted: ${staleClaim}`);
}
for (const unsafe of ['facebook.com/ykapparels', 'instagram.com/ykapparels', 'linkedin.com/company/ykapparels']) {
  if (output.includes(unsafe)) errors.push(`Unverified social profile emitted: ${unsafe}`);
}

for (const warning of warnings) console.warn(`WARN ${warning}`);
for (const error of errors) console.error(`ERROR ${error}`);

if (errors.length) {
  console.error(`\nSEO validation failed with ${errors.length} error(s) and ${warnings.length} warning(s).`);
  process.exit(1);
}

console.log(`SEO validation passed: ${htmlFiles.length} pages, ${indexableCanonicals.length} indexable, ${warnings.length} warning(s).`);

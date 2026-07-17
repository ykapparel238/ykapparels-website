import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
const origin = 'https://ykapparels.com';
const errors = [];
const warnings = [];

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
  for (const [, block] of jsonLdBlocks) {
    try {
      JSON.parse(block);
    } catch (error) {
      errors.push(`${path}: invalid JSON-LD (${error.message})`);
    }
  }

  const links = [...html.matchAll(/<a\b[^>]*\shref="([^"]+)"/gi)].map((match) => match[1]);
  for (const href of new Set(links)) {
    if (href.startsWith('#') || /^(mailto:|tel:|javascript:)/i.test(href)) continue;
    if (!localTargetExists(href, path)) errors.push(`${path}: broken internal link ${href}`);
  }
}

const sitemapFiles = walk(dist).filter((file) => /sitemap.*\.xml$/.test(file));
const sitemap = sitemapFiles.map((file) => readFileSync(file, 'utf8')).join('\n');
for (const canonical of indexableCanonicals) {
  if (!sitemap.includes(canonical)) errors.push(`${canonical}: missing from sitemap`);
}
if (sitemap.includes(`${origin}/404`)) errors.push('404 page must not appear in sitemap');

const output = walk(dist).map((file) => readFileSync(file)).join('\n');
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

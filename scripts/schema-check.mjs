/**
 * Checks every @type and property in the emitted JSON-LD against the real
 * schema.org vocabulary: that the type exists, that each property exists, and
 * that the property is actually declared on that type (or one of its
 * supertypes). Catches invented properties, which is the failure mode that
 * matters here.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const voc = JSON.parse(readFileSync(process.argv[2], 'utf8'))['@graph'];
const short = (v) => (typeof v === 'string' ? v.replace(/^schema:|^https?:\/\/schema\.org\//, '') : v);
const arr = (v) => (v === undefined ? [] : Array.isArray(v) ? v : [v]);

const types = new Map(), props = new Map();
for (const n of voc) {
  const id = short(n['@id']);
  const t = arr(n['@type']).map(short);
  if (t.includes('rdfs:Class') || t.includes('Class')) {
    types.set(id, arr(n['rdfs:subClassOf']).map((s) => short(s['@id'] ?? s)));
  } else if (t.includes('rdf:Property') || t.includes('Property')) {
    props.set(id, arr(n['schema:domainIncludes'] ?? n['domainIncludes']).map((s) => short(s['@id'] ?? s)));
  }
}
const supers = (t, seen = new Set()) => {
  if (seen.has(t)) return seen;
  seen.add(t);
  for (const p of types.get(t) ?? []) supers(p, seen);
  return seen;
};

const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    statSync(p).isDirectory() ? walk(p) : f.endsWith('.html') && files.push(p);
  }
})('dist');

const GENERIC = new Set(['@type', '@id', '@context', '@graph']);
let nodes = 0, errors = [], checked = new Set();

const visit = (node, file) => {
  if (Array.isArray(node)) return node.forEach((n) => visit(n, file));
  if (!node || typeof node !== 'object') return;
  const t = node['@type'];
  if (t) {
    nodes++;
    if (!types.has(t)) errors.push(`${file}: unknown @type "${t}"`);
    else {
      const chain = supers(t);
      for (const k of Object.keys(node)) {
        if (GENERIC.has(k)) continue;
        if (!props.has(k)) { errors.push(`${file}: unknown property "${k}" on ${t}`); continue; }
        const domains = props.get(k);
        // a property with no declared domain is vocabulary-wide; otherwise it
        // must be declared on this type or something it inherits from
        if (domains.length && !domains.some((d) => chain.has(d)))
          errors.push(`${file}: "${k}" is not a property of ${t} (declared on ${domains.join(', ')})`);
        else checked.add(`${t}.${k}`);
      }
    }
  }
  for (const v of Object.values(node)) visit(v, file);
};

const seenTypes = new Set();
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) {
    let data;
    try { data = JSON.parse(m[1]); } catch (e) { errors.push(`${f}: JSON parse error — ${e.message}`); continue; }
    JSON.stringify(data, (k, v) => (k === '@type' && seenTypes.add(v), v));
    visit(data, f.replace('dist/', ''));
  }
}

console.log(`pages with JSON-LD: ${files.filter(f => readFileSync(f,'utf8').includes('ld+json')).length}/${files.length}`);
console.log(`typed nodes checked: ${nodes}`);
console.log(`types used: ${[...seenTypes].sort().join(', ')}`);
console.log(`distinct type.property pairs validated: ${checked.size}`);
console.log(errors.length ? `\nERRORS (${errors.length}):\n` + [...new Set(errors)].join('\n') : '\nno unknown types and no undeclared properties');

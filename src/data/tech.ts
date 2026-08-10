/**
 * The stack. Product names, not copy — identical in all three locales, so it
 * lives here rather than three times over in the dictionaries. The six
 * category names are English on the legacy site in az/ru/en alike; kept that
 * way on purpose.
 *
 * Source: the `tech-cats` block of the legacy `index.html`, plus SQLite and
 * Firebase, which ship in the MindTrick case stack but were missing from that
 * list.
 */
export interface TechCat {
  name: string;
  items: string[];
}

export const techCats: TechCat[] = [
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    name: 'Backend',
    items: ['FastAPI', 'Python', 'Go', 'Node.js', 'Django', 'GraphQL', 'REST API'],
  },
  {
    name: 'Mobile',
    items: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Expo'],
  },
  {
    name: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Redis', 'ClickHouse', 'Elasticsearch'],
  },
  {
    name: 'Cloud / DevOps',
    items: ['AWS', 'GCP', 'Firebase', 'Docker', 'Kubernetes', 'CI/CD', 'Nginx', 'Terraform'],
  },
  {
    name: 'AI / Integrations',
    items: ['OpenAI API', 'LangChain', 'RAG', 'Celery', 'RabbitMQ', 'Kafka', 'Webhooks'],
  },
];

/** Counted, never typed: the metrics band claims a number this has to match. */
export const techCount = techCats.reduce((n, cat) => n + cat.items.length, 0);

/**
 * The handful named in the one line the landing page now gives the stack —
 * one per category, plus the two the enquiries actually mention.
 *
 * A list, not a sentence, because a sentence would drift: rename something in
 * `techCats` and this would go on advertising the old name. The assertion
 * below makes that a build failure instead.
 */
export const techMain = [
  'React',
  'Next.js',
  'TypeScript',
  'Python',
  'FastAPI',
  'Flutter',
  'PostgreSQL',
  'Docker',
  'AWS',
];

const known = new Set(techCats.flatMap((cat) => cat.items));
const unknown = techMain.filter((name) => !known.has(name));
if (unknown.length) {
  throw new Error(
    `techMain names technologies that are not in techCats: ${unknown.join(', ')}. ` +
      'The landing page would advertise a stack the site does not list.'
  );
}

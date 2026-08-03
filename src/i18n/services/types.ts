/**
 * The shape every service page fills in.
 *
 * Deliberately a lot of required fields: the point of the type is that a new
 * service page cannot be shipped as a half-written one. It also cannot be
 * shipped as a translation — each locale writes its own object, and the
 * structures are allowed to differ in emphasis and order of argument because
 * the three languages are chasing different queries.
 */
export interface ServiceCopy {
  meta: { title: string; description: string };

  eyebrow: string;
  titleMuted: string;
  titleMain: string;

  /**
   * The direct answer, 2–3 sentences: what this is, how long it takes, what it
   * costs to find out. Written so it can be lifted whole into someone else's
   * answer without editing — which is how it gets quoted.
   */
  lead: string;

  /** the three figures under the lead */
  facts: { label: string; value: string }[];

  /** screen-reader heading for the prose block */
  introTitle: string;
  intro: string[];

  scope: {
    title: string;
    includesTitle: string;
    includes: string[];
    excludesTitle: string;
    excludes: string[];
    deliverTitle: string;
    deliver: string[];
  };

  pricing: {
    title: string;
    lead: string;
    /** what actually moves the number, in order of weight */
    drivers: string[];
    note: string;
  };

  stack: {
    title: string;
    note: string;
    groups: { name: string; items: string[] }[];
  };

  timeline: {
    title: string;
    steps: { title: string; time: string; text: string }[];
  };

  /** the section that turns the wrong enquiries away */
  notFor: {
    title: string;
    lead: string;
    items: { cond: string; text: string }[];
    close: string;
  };

  cases: { title: string; slugs: string[] };

  faq: { title: string; items: { q: string; a: string }[] };

  cta: {
    title: string;
    text: string;
    /** rides along as a hidden field so the enquiry says which page it came from */
    subject: string;
  };
}

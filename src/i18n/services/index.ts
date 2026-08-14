import type { Locale } from '../index';
import type { ServiceCopy } from './types';
import { web } from './web';
import { mobile } from './mobile';
import { crmErp } from './crm-erp';
import { ecommerce } from './ecommerce';
import { integrations } from './integrations';
import { botsAi } from './bots-ai';

/**
 * Service copy by the same key `src/data/services.ts` uses for routing.
 *
 * The route files already import the one module they need, so this exists for
 * the one consumer that does not know which service it is looking at:
 * `Schema.astro` builds the `Service` node from `ogKey`, which is
 * `service-<key>`, and needs the name and the lead sentence that go in it.
 *
 * Keeping it keyed the same way as the route table means a service cannot have
 * a page and be missing from its structured data — the keys have to line up or
 * the lookup below is undefined and the node is dropped rather than emitted
 * half-filled.
 */
export const serviceCopy: Record<string, Record<Locale, ServiceCopy>> = {
  web,
  mobile,
  'crm-erp': crmErp,
  ecommerce,
  integrations,
  'bots-ai': botsAi,
};

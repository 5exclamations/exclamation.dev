# Cutover to Cloudflare — step by step

Written 2026-08-05. Everything here is done by hand in a browser, in this
order. Where a screen has more than one plausible button, the one to press is
named exactly.

The site is currently served by GitHub Pages from this repository, at
`exclamationdev.com`. At the end of this document Cloudflare serves it and
GitHub Pages is off. The domain is set on the Pages project itself, under
**Workers & Pages → exclamation → Custom domains** (§6c) — not by a file in
the repository. The `CNAME` file that used to hold it was a GitHub Pages
artefact and was deleted on 2026-08-10.

**Do not delete the legacy files** (`index.html`, `style_dark.css`,
`style_light.css`, `translations.js`, `pics/`) as part of this. They come out
in a separate step after the new site has been live and correct for a few days.

---

## 0. What you need before starting

- A Cloudflare account with the `exclamationdev.com` zone in it, **or** access
  to the domain registrar to change nameservers (§6 covers both).
- Admin on this GitHub repository.
- The Formspree form id — the part after `/f/` in the endpoint.
- Somewhere to run Umami (§5). If that is not ready, skip §5 and come back;
  analytics is the only piece that is independent of everything else.

One decision to make first, because §1 depends on it: **§7, which deployment
model you want.** If you have no opinion, use Model A.

---

## 1. Create the Pages project

**Model A — Direct Upload (recommended).** GitHub Actions builds the site,
runs the checks, and publishes only if they pass. Cloudflare does not build
anything and does not watch the repository.

1. `dash.cloudflare.com` → pick your account → **Compute (Workers & Pages)**
   in the left sidebar.
2. **Create** → the **Pages** tab → **Use direct upload**.
3. Project name: **`exclamation`**.
   This exact string is in `.github/workflows/ci.yml` as
   `--project-name=exclamation`. If you name it something else, change it
   there too or the deploy step will fail with "project not found".
4. It asks you to upload something to finish creation. Drag in any folder —
   an empty one is fine. The first real deploy replaces it.
5. Skip to §2.

**Model B — Git integration.** Cloudflare watches the repository and builds it
itself. Simpler to set up; the trade-off is that Cloudflare starts its deploy
the moment you push, in parallel with the Actions checks, so a failing
Lighthouse run does not stop a bad deploy.

1. **Compute (Workers & Pages)** → **Create** → **Pages** tab →
   **Connect to Git**.
2. **GitHub** → authorise → pick this repository → **Begin setup**.
3. Project name **`exclamation`**, production branch **`main`**.
4. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: leave blank
5. Do **not** press Save yet — add the build variables from §4 first, on this
   same screen under **Environment variables**. Then **Save and Deploy**.

---

## 2. Confirm the build output

Whichever model, after the first real deploy open the project →
**Deployments** → the newest one → **View build** (Model B) or the deployment
detail (Model A), and check:

- 45 pages
- `_headers` and `_redirects` are listed in the uploaded files
- **Functions** shows `api/brief` — this is the Turnstile check plus the
  Formspree forward. If it is absent, the `functions/` directory did not make
  it into the deploy and the form will 405.

---

## 3. Turnstile widget

Do this before §4, because §4 needs both keys.

1. `dash.cloudflare.com` → **Turnstile** in the left sidebar → **Add widget**.
2. Widget name: `exclamationdev.com brief form`.
3. Hostnames — add all three:
   - `exclamationdev.com`
   - `www.exclamationdev.com`
   - `localhost` (so a local build can be tested; harmless in production)
4. Widget mode: **Managed**.
5. **Create**. The next screen shows two values. Copy both now, the secret is
   shown once:
   - **Site key** — public, goes in the build environment
   - **Secret key** — goes in the runtime secrets, never in the build

---

## 4. Environment variables and secrets

This is the step that is easiest to get wrong, because Pages has two different
scopes and the names look similar.

Project → **Settings** → **Variables and Secrets**.

Set every one of these on the **Production** environment. If you also want
Preview deployments to work, add the same values to **Preview** — with the
Turnstile *test* keys rather than the live ones if you prefer.

| Name | Type | Value | Why |
| --- | --- | --- | --- |
| `FORMSPREE_ID` | **Secret** | the part after `/f/` | read at request time by the function; must not be public |
| `TURNSTILE_SECRET_KEY` | **Secret** | from §3 | the siteverify call |
| `TURNSTILE_SITE_KEY` | Plaintext | from §3 | baked into the page; public by design |
| `UMAMI_SCRIPT_URL` | Plaintext | e.g. `https://analytics.exclamationdev.com/script.js` | §5 |
| `UMAMI_WEBSITE_ID` | Plaintext | the uuid from Umami | §5 |

Notes that matter:

- **`FORMSPREE_ID` is no longer a build variable.** It used to be compiled
  into every page. It is now read by `functions/api/brief.ts` at request time.
  If you set it as a plaintext build variable instead of a secret, the form
  still works — but you have published your endpoint.
- **With `TURNSTILE_SECRET_KEY` unset the function skips verification and
  still forwards the message.** That is deliberate so previews work, and it
  means a missing secret fails open, quietly. Set it.
- **Both Umami values or neither.** One without the other emits nothing.
- After changing any of these, **redeploy** — Pages does not rebuild on a
  variable change. Deployments → the latest → **Retry deployment**, or push.

---

## 5. Umami, self-hosted

Umami needs a Node process and a Postgres database. It does not run on Pages;
it is a separate box. Any of a small VPS, Fly, Railway or Render is fine. On a
VPS with Docker:

```yaml
# docker-compose.yml
services:
  umami:
    image: ghcr.io/umami-software/umami:postgresql-latest
    ports: ['3000:3000']
    environment:
      DATABASE_URL: postgresql://umami:CHANGE_ME@db:5432/umami
      DATABASE_TYPE: postgresql
      APP_SECRET: CHANGE_ME_TOO
    depends_on: [db]
    restart: always
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: umami
      POSTGRES_USER: umami
      POSTGRES_PASSWORD: CHANGE_ME
    volumes: ['./umami-db:/var/lib/postgresql/data']
    restart: always
```

Then:

1. Put it behind a hostname — `analytics.exclamationdev.com` is the obvious
   one. In Cloudflare DNS add an **A** record for `analytics` pointing at the
   server's IP, **Proxied**. Cloudflare terminates TLS for you.
2. Open it, log in with the default `admin` / `umami` and **change the
   password immediately**.
3. **Settings → Websites → Add website.** Name `exclamationdev.com`, domain
   `exclamationdev.com`. Save.
4. Open the website's **Edit** → the **Website ID** is the uuid. That is
   `UMAMI_WEBSITE_ID`.
5. `UMAMI_SCRIPT_URL` is `https://analytics.exclamationdev.com/script.js`.
6. Redeploy the Pages project so both values are picked up.

The origin of `UMAMI_SCRIPT_URL` is written into the site's
Content-Security-Policy at build time. If you move the instance later, change
the variable and redeploy — editing `dist/_headers` by hand will not survive
the next build.

No cookie banner is needed and none is shown: Umami sets no cookies and stores
no personal data. That was the reason for choosing it over GA4.

---

## 6. The domain and DNS

### 6a. If `exclamationdev.com` is already a zone in this Cloudflare account

Go to §6c.

### 6b. If it is not

1. Cloudflare dashboard → **Add a domain** → type `exclamationdev.com` →
   **Continue**.
2. Choose the **Free** plan.
3. Cloudflare scans the existing records. **Check the list carefully before
   continuing** and make sure every one of these came across, because losing
   them breaks mail, not just the website:
   - `MX` records
   - the `TXT` record starting `v=spf1`
   - any `TXT` at `_dmarc` and at a DKIM selector
   - the BIMI `TXT` at `default._bimi`, if it is set up
4. Cloudflare gives you two nameservers. At the **registrar** (where the
   domain was bought, not here), replace the existing nameservers with those
   two.
5. Propagation is usually minutes, sometimes hours. The zone shows **Active**
   when it is done. Do not continue until it does.

### 6c. Point the domain at Pages

1. Workers & Pages → **exclamation** → **Custom domains** → **Set up a custom
   domain**.
2. Enter `exclamationdev.com` → **Continue** → **Activate domain**.
   Cloudflare creates the record itself — a `CNAME` at the apex, flattened.
   You do not add it by hand.
3. Repeat for `www.exclamationdev.com`.
   The `_redirects` file in this repository already sends `www` to the bare
   domain with a 301, so `www` only needs to resolve for that redirect to
   fire.

### 6d. Remove the GitHub Pages records

Only after §6c shows both custom domains as **Active**. DNS → **Records**, and
delete:

- the four `A` records pointing at `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153`
- any `AAAA` records at `2606:50c0:8000::153` and its siblings
- a `CNAME` at `www` pointing at `<user>.github.io`, if one exists

**Leave every `MX` and `TXT` record alone.**

Then, in the GitHub repository: **Settings → Pages → Source → None**. That
turns off the old site at its origin. The `CNAME` file that used to carry the
domain has already gone (deleted 2026-08-10); Cloudflare takes the domain from
the project's **Custom domains** tab in §6c and never reads that file, so
nothing needs to be put back.

---

## 7. GitHub secrets for the deploy

Repository → **Settings → Secrets and variables → Actions → New repository
secret**.

**Model A (Direct Upload):**

| Secret | Where to get it |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | dashboard → profile menu → **API Tokens** → **Create Token** → **Custom token**. Permissions: **Account → Cloudflare Pages → Edit**. Nothing else. |
| `CLOUDFLARE_ACCOUNT_ID` | Workers & Pages overview, right-hand column |
| `TURNSTILE_SITE_KEY` | §3 — the build needs it to render the widget |
| `UMAMI_SCRIPT_URL`, `UMAMI_WEBSITE_ID` | §5 — the build needs them to emit the tag and to write the CSP |

**Model B (Git integration):** set only `CLOUDFLARE_DEPLOY_HOOK`, from
Pages → Settings → **Builds & deployments** → **Deploy hooks** → create one
for `main`. The build variables live in Pages, not here.

`weekly-rebuild.yml` already uses `CLOUDFLARE_DEPLOY_HOOK`. It exists so the
computed year and the studio's age cannot go stale; under Model A give it the
same treatment as `ci.yml` or let it run its checks and skip the deploy.

---

## 8. Order of operations on cutover day

The redirects have to be live **before** the domain moves, which is the whole
reason for this ordering.

1. Deploy to Pages and check it on the `*.pages.dev` URL. Everything in §9
   can be verified there, before any DNS change.
2. Point the domain at Pages (§6c). At this moment `_redirects` and
   `_headers` become live.
3. Remove the GitHub Pages DNS records and switch the repository's Pages
   source to None (§6d).
4. Watch for a day. Then run `validator.schema.org` against the live URL —
   it cannot be run before the site is public, which is why it is last.
5. Only then, in a separate commit, delete the legacy files.

### About the old anchor addresses

The legacy site was one page and everything it was indexed under is a
fragment: `exclamationdev.com/#crm`, `/#services`, `/#faq`. **A fragment is
never sent to the server** — the browser strips it before making the request —
so no redirect rule of any kind can act on one, on Cloudflare or anywhere
else. `_redirects` cannot do it and neither can a Cloudflare redirect rule.

They are handled in the browser instead, by `src/components/LegacyHash.astro`,
which runs on the three landing pages and rewrites a known legacy fragment on
first paint. The six case anchors go to their new pages:

| old | new |
| --- | --- |
| `/#crm` | `/is/crm-portal/` |
| `/#erp` | `/is/fleks/` |
| `/#bookingpro` | `/is/merkuri/` |
| `/#medapp` | `/is/mindtrick/` |
| `/#ecommerce` | `/is/smart-fashion/` |
| `/#autoflow` | `/is/ai-assistent/` |

and `#cases` → `#work`, `#advantages` / `#trust` / `#who` → `#why`,
`#finalcta` → `#contact`. `#services`, `#process`, `#tech`, `#faq` and
`#contact` still exist and are left alone.

---

## 9. Verify after cutover

Run these against the live domain.

```bash
# headers are actually being served
curl -sI https://exclamationdev.com/ | grep -iE 'content-security|strict-transport|x-content-type|referrer-policy|permissions-policy|cache-control'

# www goes to the bare domain, once, with a 301
curl -sI https://www.exclamationdev.com/ | head -3

# the fingerprinted assets are cached for a year and the HTML is not
curl -sI https://exclamationdev.com/_astro/ -o /dev/null -w '%{http_code}\n'

# the function is reachable and rejects a GET
curl -s -o /dev/null -w '%{http_code}\n' https://exclamationdev.com/api/brief   # expect 405
```

Then by hand:

- Submit the brief form. The Turnstile widget should appear above the consent
  checkbox, and the message should arrive in the Formspree inbox.
- Submit it again straight away — this is the case that catches a Turnstile
  token not being reset, which looks like the form breaking on the second try.
- Open the form with JavaScript disabled, submit, and confirm you land back
  on the page with the success note visible. That path uses `:target`.
- Open `https://exclamationdev.com/#crm` and confirm you end up on the CRM
  Portal case page.
- Check the Umami dashboard has recorded the visits you just made.
- `validator.schema.org` → **Fetch URL** on the landing page and on `/faq/`.

---

## 10. If something is wrong

- **Rolling back** is Deployments → an earlier good deployment → **Rollback**.
  It is instant and does not need a rebuild.
- **The form 405s** — the `functions/` directory did not deploy. Check §2.
- **The form always fails with a Turnstile error** — the hostname list in §3
  does not include the domain you are testing from.
- **The form silently sends nothing** — `FORMSPREE_ID` is unset; the function
  logs `FORMSPREE_ID is not set` and returns a 500. Real-time logs are under
  the project → **Logs**.
- **Analytics records nothing** — check the browser console for a CSP block.
  If the CSP does not name your Umami origin, `UMAMI_SCRIPT_URL` was not set
  at build time; set it and redeploy rather than editing headers.
- **The old site is still showing** — a browser or ISP cache. Check with
  `curl -sI https://exclamationdev.com/ | grep -i server`; Cloudflare answers
  with `server: cloudflare`.

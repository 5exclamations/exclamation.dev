# EXCLAMATION — сайт студии разработки

## Проект

Сайт студии разработки **EXCLAMATION**, Баку. Один длинный лендинг плюс
отдельные страницы кейсов. Продакшн-домен: `exclamationdev.com` — задан
в Cloudflare Pages, **Workers & Pages → exclamation → Custom domains**.
Файла `CNAME` в репозитории больше нет: он был артефактом GitHub Pages
и удалён при переезде.

Сайт переписывается с нуля на Astro. **Перед работой прочитай `HANDOFF.md`** —
там состояние, порядок оставшихся секций и грабли, на которые уже наступали.

## Дизайн-система — обязательна к прочтению

`.claude/skills/exclamation-design/SKILL.md` — утверждённая система: шесть
цветовых токенов с посчитанным контрастом, три гарнитуры, шкала отступов
48/96/160/224, сигнатурный элемент, параметры движения, запреты.

Это контракт, а не рекомендация. Нет значения в системе — значит его не
существует: бери ближайший токен или спрашивай. Новый hex, новый отступ и
особенно третий оттенок серого добавлять нельзя.

## Языки

Три языка: **азербайджанский (основной)** — в корне, русский `/ru/`,
английский `/en/`. Маршруты статические, `hreflang` проставлен.

Секция не считается готовой, пока текста нет во всех трёх. Азербайджанский
ломает вёрстку первым — слова длиннее.

## Структура нового сайта

```
src/
  i18n/          az.ts / ru.ts / en.ts — весь копирайт; index.ts — FOUNDED, fill()
  data/cases.ts  скриншоты кейсов: пути, реальные размеры, кропы
  data/tech.ts   стек: шесть групп, названия продуктов — вне i18n
  data/contacts.ts  телефон, почта, Telegram, WhatsApp — один источник
  data/org.ts    каноническое имя бренда, sameAs, адрес — для JSON-LD
  lib/instance-font.ts  пинит вариативный шрифт в один вес для satori
  pages/og/[key].png.ts  OG-карточки: satori → sharp, 24 штуки на сборке
  assets/pics/   скриншоты кейсов — в src, иначе astro:assets их не видит
  layouts/       Base.astro — head, canonical, тема без FOUC, полоса, reveal
  components/    секции и Diff / Icon / CaseView / CaseChat / Schema
  styles/        tokens.css → base.css → fonts.css, собираются в app.css
  pages/         index + /is/[slug] для каждой локали
  pages/sitemap.xml.ts  карта сайта с hreflang-альтернативами
public/
  robots.txt     явные Allow для AI-краулеров + ссылка на sitemap
  llms.txt       краткая карта сайта для языковых моделей
  _redirects     www → голый домен, легаси-пути; якоря туда не кладутся
  fonts/         самохостинг woff2, сабсеты latin / latin-ext / cyrillic
functions/
  api/brief.ts   единственный серверный код: honeypot → Turnstile → Formspree
scripts/
  shots.mjs      6 ширин × 2 темы + проверки переполнения, контраста, тап-зон
  motion-check.mjs  доказывает, что prefers-reduced-motion срабатывает
  links.mjs      битые внутренние ссылки и якоря по собранному dist
  vitals.mjs     LCP/CLS/INP, медиана из 3, свой сервер с brotli
```

`_headers` не лежит в `public/` — он генерируется в `astro.config.mjs`, потому
что CSP обязан называть origin аналитики из `UMAMI_SCRIPT_URL`. Править
`dist/_headers` руками бесполезно.

**Фрагменты (`#anchor`) не доходят до сервера.** Редиректы со старых якорных
адресов живут в `src/components/LegacyHash.astro`, а не в `_redirects`.
Пошаговый переезд — `CLOUDFLARE-SETUP.md`.

Все секции лендинга собраны: `hero`, `services`, `why`, `work`, `metrics`,
`process`, `tech`, `facts`, `faq`, `contact`, `finalcta`, футер, 404 и шесть
страниц кейсов. Что реально не доделано — §7 `HANDOFF.md`.

Возраст студии считается из `FOUNDED` в `src/i18n/index.ts`; в текстах стоят
плейсхолдеры `{year}` и `{years}`, руками цифру не писать.

`localStorage`: `exclamation-theme`. Префикс `nexora-` из старого названия
больше не используется.

## Легаси (удалить после переезда)

`index.html`, `style_dark.css`, `style_light.css`, `translations.js`, корневая
`pics/` — старый статический сайт. Пока его отдаёт GitHub Pages, поэтому не
удалять до запуска на Cloudflare. Это же источник клиентского копирайта:
таксономия услуг, тексты кейсов и FAQ вынимались из `translations.js`.

Осторожно: в `translations.js` продукт назван **MindTrack**, правильно —
**MindTrick**. Проверяй названия по скриншотам, а не по переводам.

Внешние зависимости:

- Форма заявки: Formspree. Ключ эндпоинта — в переменной `FORMSPREE_ID`,
  в репозиторий не коммитится; см. `.env.example` и §6 `HANDOFF.md`.
  Прогрессивное улучшение — свой `fetch`, без зависимостей.
- Turnstile: `TURNSTILE_SITE_KEY`, пустая заглушка до шага деплоя.
- Контакты живут в `src/data/contacts.ts`, руками в разметку не писать.
- `exclamation-bimi-logo.svg` — BIMI-логотип (127 KB, для фавикона не годится,
  фавикон отдельный в `public/favicon.svg`).

## Стек

- **Astro**, статическая сборка (`output: 'static'`).
- **Обычный CSS** с кастом-пропертями и `@layer`.
- **Tailwind не использовать. React не использовать.**
- Тема — один набор переменных: `prefers-color-scheme`, поверх него
  `:root[data-theme]`, поверх него `localStorage`.
- Шрифты самохостятся. Гарнитуру не менять, не проверив глифы `ə Ə ğ ı İ ş`
  и `₼` по таблице `cmap`, а не по заявленным сабсетам.

## Деплой

**Cloudflare Pages** из этого же репозитория. GitHub Pages отключается после
переезда.

## Команды

| Что | Команда |
| --- | --- |
| Установка | `npm install` |
| Дев-сервер | `npm run dev` |
| Сборка | `npm run build` |
| Просмотр сборки | `npm run preview` |
| Скриншоты и проверки | `node scripts/shots.mjs <label> [selector] [path]` |
| Проверка reduced-motion | `node scripts/motion-check.mjs` |
| Проверка JSON-LD | `node scripts/schema-check.mjs <schemaorg.jsonld>` |
| Битые ссылки | `node scripts/links.mjs` |
| Core Web Vitals | `node scripts/vitals.mjs [url] [Slow4G\|Fast4G]` |
| Рантайм Cloudflare локально | `npx wrangler pages dev dist` |

`wrangler pages dev` регулярно падает с `all goroutines are asleep` на
страницах с большим числом картинок — поэтому `vitals.mjs` поднимает
собственный статический сервер с brotli, а не полагается на wrangler.
Для проверки `functions/` wrangler всё ещё нужен.

**Осторожно при тестах формы:** `wrangler pages dev` подхватывает `.env`, и
`FORMSPREE_ID` оттуда — настоящий. POST на `/api/brief` уйдёт в реальный
Formspree. Для проверок подставляй фиктивный id.

Node.js: требуется 18+. Локально стоит v24.18.0, npm 11.16.0.

У git нет глобального identity: коммить с
`-c user.name="Texa" -c user.email="texranhamidzada@gmail.com"`.

## Claude Code ↔ Codex workflow

`AGENTS.md` contains the shared workflow contract. Read it together with this file.

Claude Code is the architect and reviewer. Codex is the implementation and test worker exposed through the project MCP server `codex-implementer`, which runs the official `codex mcp-server` command.

Before delegation, Claude Code must inspect the current Git status and preserve the existing uncommitted work. The handoff must name the goal, constraints, acceptance criteria, files in scope, and checks to run. Codex must not commit or touch unrelated files.

After Codex returns, Claude Code reviews the real working tree with `git diff`, reads the affected files, checks the reported tests, and sends concrete corrections back through the same MCP workflow when needed. Mem0 supplies durable project context; Git, source files, `HANDOFF.md`, and tests remain authoritative.

## Правила работы

- **Не отчитываться об успехе по факту зелёной сборки.** Смотреть на
  скриншоты своими глазами до того, как показывать результат.
- После каждой секции — шесть ширин (320, 390, 768, 1024, 1440, 1920) в обеих
  темах, и правки до показа. Это делает `scripts/shots.mjs`; он же валится на
  переполнении, контрасте ниже 4.5 и тап-зонах меньше 44.
- Отдельно проверять 768–1024: двухколоночные секции и сетки кейсов ломаются
  там первыми.
- Показывать по две-три секции за раз, не по одной.
- Alt-тексты писать, открыв картинку, а не по описанию кейса.
- `refs/` — папка со скриншотами референсов, в git не попадает. `.shots/` —
  вывод харнесса, тоже игнорируется.

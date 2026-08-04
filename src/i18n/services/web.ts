import type { ServiceCopy } from './types';
import type { Locale } from '../index';

/**
 * Web development, written three times.
 *
 * Azerbaijani argues from the local market: most Baku businesses are choosing
 * between no site and a template one, so it starts at what a site has to do.
 * Russian argues against the builders — Tilda, WordPress, a designer's
 * markup — because that is the live comparison in that market. English argues
 * from performance and ownership, which is what an outsourcing buyer reads
 * for.
 */
export const web: Record<Locale, ServiceCopy> = {
  az: {
    meta: {
      title: 'Veb sayt hazırlanması, Bakı — EXCLAMATION',
      description:
        'Korporativ sayt, landing, kataloq və çoxdilli sayt. Landing 1–2 həftə, korporativ sayt 3–6 həftə. Qiymətləndirmə 3–5 gün, ödənişsiz. Kod sizindir.',
    },
    eyebrow: 'Xidmət',
    titleMuted: 'Veb sayt hazırlanması —',
    titleMain: 'sürətli, çoxdilli, sizin.',
    lead: 'Sayt — şirkətin ilk və ən ucuz satıcısıdır: gecə-gündüz işləyir və hər ziyarətçiyə eyni şeyi düzgün danışır. Landing üçün tipik müddət 1–2 həftə, korporativ sayt üçün 3–6 həftə, kataloq və çoxdilli portal üçün 6–10 həftə. Brifdən sonra 3–5 gün ərzində struktur, mərhələlər və dəqiq smeta veririk — bu mərhələ ödənişsizdir.',
    facts: [
      { label: 'Landing', value: '1–2 həftə' },
      { label: 'Korporativ sayt', value: '3–6 həftə' },
      { label: 'Qiymətləndirmə', value: '3–5 gün' },
    ],
    introTitle: 'Sayt nə etməlidir',
    intro: [
      'Yaxşı saytın işi bir cümlə ilə ölçülür: adam səhifəyə düşəndən sonra nə edir. Zəng edir, forma doldurur, kataloqa keçir — yoxsa geri düyməsini basır. Buna görə də biz işə dizayndan yox, ssenaridən başlayırıq: kim gəlir, hansı sualla gəlir, cavabı neçə saniyəyə tapır.',
      'Texniki tərəf bu ssenarinin altını tutur. Sayt statik yığılır və CDN-dən verilir, şəkillər avtomatik olaraq avif və webp formatlarına çevrilir, şrift öz serverimizdən gəlir.',
      'Səhifə mobil internetdə bir saniyədən az açılır. İlk təəssürat isə üç saniyəyə formalaşır.',
      'Çoxdillilik ayrıca mövzudur və Azərbaycanda demək olar ki, həmişə lazım olur. Üç dil — azərbaycan, rus, ingilis — ayrı-ayrı marşrutlarda yaşayır, hər birinin öz ünvanı, öz meta-təsviri və `hreflang` işarəsi olur. Bu, brauzer dilinə görə mətnin dəyişməsindən fərqlidir: axtarış sistemi üç səhifəni ayrıca indeksləyir və hər biri öz sorğusuna görə tapılır.',
      'Kontent idarəetməsi tələb olunanda sayta admin panel qoşuruq — xəbərlər, vakansiyalar, məhsul kartları. Tələb olunmayanda qoşmuruq: statik saytın sındırılacaq admin paneli, yenilənəcək plaginləri və aylıq hostinq hesabı olmur.',
      'Hansının sizə lazım olduğunu brifdə birlikdə həll edirik.',
    ],
    scope: {
      title: 'İşə nə daxildir',
      includesTitle: 'Daxildir',
      includes: [
        'Struktur, səhifə xəritəsi və istifadəçi ssenariləri',
        'Dizayn: bütün səhifələrin adaptiv maketləri',
        'Üç dildə verstka və `hreflang` işarələmə',
        'Şəkillərin optimallaşdırılması, avif və webp',
        'Formalar, spam qorunması və poçt bildirişləri',
        'Texniki SEO: meta, sitemap, robots, JSON-LD',
        'Analitika qoşulması və hədəflərin qurulması',
        'Domen, hostinq və SSL-in qurulması',
      ],
      excludesTitle: 'Daxil deyil',
      excludes: [
        'Mətnlərin yazılması və tərcüməsi',
        'Peşəkar foto və video çəkiliş',
        'Domen və hostinq abunə haqqı',
        'Reklam kampaniyalarının aparılması',
        'Sosial şəbəkələrin aparılması',
      ],
      deliverTitle: 'Nəticədə nə alırsınız',
      deliver: [
        'İşlək sayt sizin domeninizdə',
        'Repozitoriya sizin hesabınızda',
        'Admin panel üçün giriş və təlimat',
        'Analitika və Search Console qoşulmuş',
        'Deploy skriptləri və rollback',
        'Monitorinq və 3 ay zəmanət',
      ],
    },
    pricing: {
      title: 'Qiymət nədən asılıdır',
      lead: 'Hazır qiymət cədvəli vermirik: «sayt» sözü həm beş səhifəlik vizit kartını, həm də min məhsulluq kataloqu bildirir. Smetanı bunlar dəyişir.',
      drivers: [
        'Səhifə sayı və onların neçəsinin unikal maket tələb etməsi',
        'Dil sayı: hər əlavə dil həm verstka, həm kontent strukturu deməkdir',
        'Kontent idarəetməsi: statik sayt, yoxsa admin panel və kim nəyi redaktə edir',
        'Kataloq: məhsul sayı, filtrlər, axtarış və qalıqların yenilənməsi',
        'İnteqrasiyalar: ödəniş, CRM, çatdırılma xidmətləri, xəritələr',
      ],
      note: 'Strukturu, mərhələləri və dəqiq smetanı brifdən 3–5 gün sonra veririk. Pulsuz.',
    },
    stack: {
      title: 'Stek',
      note: 'Layihəyə görə seçilir. Sadə saytlar statik yığılır, mürəkkəblər admin panelli gəlir.',
      groups: [
        { name: 'Frontend', items: ['Astro', 'Next.js', 'TypeScript', 'Vite'] },
        { name: 'Backend', items: ['Django', 'FastAPI', 'PostgreSQL'] },
        { name: 'Content', items: ['Headless CMS', 'Markdown', 'S3'] },
        { name: 'Delivery', items: ['CDN', 'Nginx', 'CI/CD', 'Analytics'] },
      ],
    },
    timeline: {
      title: 'Mərhələlər',
      steps: [
        {
          title: 'Brif və struktur',
          time: '3–5 gün',
          text: 'Auditoriya, rəqiblər, səhifə xəritəsi. Çıxışda: struktur, mərhələlər və dəqiq smeta.',
        },
        {
          title: 'Prototip və mətn strukturu',
          time: '3–5 gün',
          text: 'Hər səhifənin blok sxemi. Mətn hələ yazılmayıb, amma hər blokun nə deyəcəyi razılaşdırılıb.',
        },
        {
          title: 'Dizayn',
          time: '1–2 həftə',
          text: 'Əsas səhifələrin maketləri, mobil və masaüstü. Qalan səhifələr hazır komponentlərdən yığılır.',
        },
        {
          title: 'Verstka və inteqrasiya',
          time: '1–3 həftə',
          text: 'Adaptiv verstka, üç dil, formalar, admin panel. Hər həftənin sonunda işlək link.',
        },
        {
          title: 'Texniki SEO və test',
          time: '3–5 gün',
          text: 'Meta, sitemap, JSON-LD, sürət ölçülməsi, cross-browser yoxlaması, analitika.',
        },
        {
          title: 'Reliz və zəmanət',
          time: '3 ay',
          text: 'Domenə köçürmə, Search Console, monitorinq. Üç ay ərzində düzəlişlər bizim üzərimizdədir.',
        },
      ],
    },
    notFor: {
      title: 'Sayt sizə nə vaxt lazım deyil',
      lead: 'Bəzən sayt ən zəif həlldir. Bunları brifdə özümüz soruşuruq — pulu boşa xərcləməyin mənası yoxdur.',
      items: [
        {
          cond: 'Bütün satış Instagram-dan gəlir və kifayət edir',
          text: 'Auditoriyanız orada oturursa və sifariş axını sizi qane edirsə, sayt heç nəyi dəyişməyəcək. Bu halda əvvəl reklam və kontentə investisiya daha çox qaytarır.',
        },
        {
          cond: 'Bir səhifə və bir düymə lazımdır',
          text: 'Konstruktor bir günə yığır. Sıfırdan yazmaq baha və mənasızdır.',
        },
        {
          cond: 'Mətn və şəkil yoxdur və yaxın vaxtda olmayacaq',
          text: 'Boş bloklarla sayt buraxmaq işləməyən sayt buraxmaqdır. Kontent hazır olana qədər gözləmək və bir dəfəyə buraxmaq daha ucuzdur: neçə blok lazım olduğunu mətnlərin özü göstərir. Sonradan yenidən verstka etmək indi gözləməkdən bahadır.',
        },
        {
          cond: 'Mövcud sayt işləyir, sadəcə köhnə görünür',
          text: 'Bəzən redizayn əvəzinə sürət, mətn və mobil versiyanı düzəltmək kifayətdir. Auditini edib deyəcəyik — bu, tam yenidən yazmaqdan ucuz olur.',
        },
      ],
      close: 'Bəndlərdən birində özünüzü tanıdınızsa, yenə yazın. Auditi və tövsiyəni pulsuz veririk; bəzən nəticə «saytı yenidən yazmaq lazım deyil» olur.',
    },
    cases: { title: 'Bu istiqamətdə keyslər', slugs: ['smart-fashion', 'merkuri'] },
    faq: {
      title: 'Tez-tez verilən suallar',
      items: [
        {
          q: 'Tilda və ya WordPress-də etmək ucuz olmazmı?',
          a: 'Sadə tapşırıq üçün — bəli, və biz bunu dürüst deyirik. Konstruktor bir günə qalxır, başlanğıcda ucuz başa gəlir. Sonra abunə başlayır, hər səhifəyə yad skriptlər düşür, çoxdillilik isə axtarış sisteminə bir səhifə kimi görünür. Statik yığılan sayt CDN-dən verilir, sizin domendə aylıq ödənişsiz yaşayır və üç dili ayrı ünvanlarda saxlayır. Brifdə hər iki variantı hesablayırıq.',
        },
        {
          q: 'Saytı özüm redaktə edə biləcəyəmmi?',
          a: 'Bəli, əgər admin panel lazımdırsa. Xəbərlər, vakansiyalar, məhsullar — sizin tərəfinizdən. Dizayn strukturunu dəyişmək üçün isə bizə yazmaq lazımdır; bu, saytın dağılmamağı üçün qəsdən belədir.',
        },
        {
          q: 'Üç dil eyni vaxtda hazır olacaqmı?',
          a: 'Bəli, buraxılışa üçü də hazır olur. Mətnləri siz verirsiniz və ya tərcüməçi ilə razılaşdırırıq — tərcümə smetaya daxil deyil, amma strukturu biz qururuq.',
        },
        {
          q: 'Sayt Google-da nə vaxt görünəcək?',
          a: 'İndeksləşmə adətən 1–3 həftə çəkir. Texniki hissəni — sitemap, robots, JSON-LD, sürət — biz buraxılışda hazır veririk; mövqe isə kontent və rəqabətdən asılıdır və bir gecəyə gəlmir.',
        },
        {
          q: 'Buraxılışdan sonra dəyişiklik etmək olar?',
          a: 'Üç ay zəmanət ərzində səhvlər və kiçik düzəlişlər bizdədir, yeni bölmə və ya funksiya isə ayrıca kiçik layihədir — qiymətini əvvəlcədən deyirik.',
        },
      ],
    },
    cta: {
      title: 'Saytınızı danışaq',
      text: 'Qısa brif kifayətdir: nə satırsınız, kimə, indi hansı sayt var. 3–5 gün ərzində struktur və smeta ilə qayıdırıq.',
      subject: 'Brief — Veb sayt (az)',
    },
  },

  ru: {
    meta: {
      title: 'Разработка сайтов в Баку на заказ — EXCLAMATION',
      description:
        'Корпоративные сайты, лендинги, каталоги, три языка. Лендинг 1–2 недели, корпоративный сайт 3–6 недель. Оценка за 3–5 дней бесплатно, код у вас.',
    },
    eyebrow: 'Услуга',
    titleMuted: 'Разработка сайтов —',
    titleMain: 'без конструктора и без абонплаты.',
    lead: 'Сайт — самый дешёвый продавец в компании: работает круглосуточно и каждому посетителю рассказывает одно и то же правильно. Типичный срок: лендинг 1–2 недели, корпоративный сайт 3–6 недель, каталог или многоязычный портал 6–10 недель. После брифа за 3–5 дней возвращаемся со структурой, этапами и точной сметой; этап не оплачивается.',
    facts: [
      { label: 'Лендинг', value: '1–2 недели' },
      { label: 'Корпоративный сайт', value: '3–6 недель' },
      { label: 'Оценка', value: '3–5 дней' },
    ],
    introTitle: 'Конструктор или разработка',
    intro: [
      'Если задача — одна страница под одну акцию, соберите её на конструкторе за день. Tilda и подобные закрывают такие задачи лучше, чем что угодно написанное с нуля за те же деньги. На брифе мы это скажем и проект не возьмём.',
      'Разница начинается там, где сайт перестаёт быть визиткой. Конструктор отдаёт тяжёлые страницы: чужие скрипты, невыключаемые библиотеки, картинки без нормальной оптимизации. На мобильном интернете это секунды ожидания, а первое впечатление складывается за три.',
      'Собранный статически сайт отдаётся с CDN, картинки конвертируются в avif и webp автоматически, шрифты лежат на своём домене — страница открывается меньше чем за секунду.',
      'Многоязычность конструкторы делают криво: один адрес, переключение текста на лету, поисковик видит одну страницу вместо трёх. В Баку она нужна почти всегда. Мы разносим языки по отдельным маршрутам с собственными адресами, мета-описаниями и разметкой `hreflang` — три языка индексируются отдельно, каждый находится по своему запросу.',
      'И вы владеете результатом.',
      'Репозиторий в вашем аккаунте, домен на вас, абонплаты за конструктор нет. Захотите через два года передать сайт другой команде — передаёте код и документацию, а не логин от чужой платформы.',
    ],
    scope: {
      title: 'Что входит в работу',
      includesTitle: 'Входит',
      includes: [
        'Структура, карта страниц и пользовательские сценарии',
        'Дизайн: адаптивные макеты всех страниц',
        'Вёрстка на трёх языках и разметка `hreflang`',
        'Оптимизация изображений, avif и webp',
        'Формы, защита от спама и уведомления на почту',
        'Технический SEO: мета, sitemap, robots, JSON-LD',
        'Подключение аналитики и настройка целей',
        'Настройка домена, хостинга и SSL',
      ],
      excludesTitle: 'Не входит',
      excludes: [
        'Написание и перевод текстов',
        'Профессиональная фото- и видеосъёмка',
        'Оплата домена и хостинга',
        'Ведение рекламных кампаний',
        'Ведение социальных сетей',
      ],
      deliverTitle: 'Что вы получаете',
      deliver: [
        'Работающий сайт на вашем домене',
        'Репозиторий в вашем аккаунте',
        'Доступ в админку и инструкция',
        'Подключённые аналитика и Search Console',
        'Скрипты деплоя и отката',
        'Мониторинг и 3 месяца гарантии',
      ],
    },
    pricing: {
      title: 'От чего зависит цена',
      lead: 'Прайс-листа не даём: словом «сайт» называют и визитку на пять страниц, и каталог на тысячу позиций. Смету двигает вот что.',
      drivers: [
        'Количество страниц и сколько из них требуют уникального макета',
        'Число языков: каждый добавляет и вёрстку, и структуру контента',
        'Управление контентом: статика или админка, и кто что редактирует',
        'Каталог: количество позиций, фильтры, поиск, обновление остатков',
        'Интеграции: оплата, CRM, службы доставки, карты',
      ],
      note: 'Структуру, этапы и точную смету отдаём за 3–5 дней после брифа. Денег за это не берём.',
    },
    stack: {
      title: 'Стек',
      note: 'Подбирается под проект. Простые сайты собираются статически, сложные приходят с админкой.',
      groups: [
        { name: 'Frontend', items: ['Astro', 'Next.js', 'TypeScript', 'Vite'] },
        { name: 'Backend', items: ['Django', 'FastAPI', 'PostgreSQL'] },
        { name: 'Content', items: ['Headless CMS', 'Markdown', 'S3'] },
        { name: 'Delivery', items: ['CDN', 'Nginx', 'CI/CD', 'Analytics'] },
      ],
    },
    timeline: {
      title: 'Этапы',
      steps: [
        {
          title: 'Бриф и структура',
          time: '3–5 дней',
          text: 'Аудитория, конкуренты, карта страниц. На выходе структура, этапы и точная смета.',
        },
        {
          title: 'Прототип и структура текста',
          time: '3–5 дней',
          text: 'Блочная схема каждой страницы. Текста ещё нет, но что говорит каждый блок — согласовано.',
        },
        {
          title: 'Дизайн',
          time: '1–2 недели',
          text: 'Макеты главных страниц, мобильные и десктопные. Остальные собираются из готовых компонентов.',
        },
        {
          title: 'Вёрстка и интеграция',
          time: '1–3 недели',
          text: 'Адаптивная вёрстка, три языка, формы, админка. В конце каждой недели — рабочая ссылка.',
        },
        {
          title: 'Технический SEO и тесты',
          time: '3–5 дней',
          text: 'Мета, sitemap, JSON-LD, замер скорости, кроссбраузерность, аналитика.',
        },
        {
          title: 'Релиз и гарантия',
          time: '3 месяца',
          text: 'Перенос на домен, Search Console, мониторинг. Три месяца правки на нас.',
        },
      ],
    },
    notFor: {
      title: 'Когда сайт вам не нужен',
      lead: 'Иногда сайт — самое слабое из возможных решений. Эти вопросы мы задаём на брифе сами.',
      items: [
        {
          cond: 'Все продажи идут из Instagram и вас это устраивает',
          text: 'Если аудитория сидит там и поток заявок вас устраивает, сайт ничего не изменит. В этой ситуации вложение в рекламу и контент возвращает больше.',
        },
        {
          cond: 'Нужна одна страница с одной кнопкой',
          text: 'Конструктор соберёт её за день. С нуля — дорого и незачем.',
        },
        {
          cond: 'Нет текстов и фотографий и в ближайшее время не будет',
          text: 'Запустить сайт с пустыми блоками — значит запустить неработающий сайт. Дешевле дождаться контента и выпустить один раз: тексты решают, сколько блоков вообще нужно, а переверстать потом дороже, чем подождать сейчас.',
        },
        {
          cond: 'Текущий сайт работает, просто выглядит старым',
          text: 'Иногда вместо редизайна достаточно починить скорость, тексты и мобильную версию. Проведём аудит и скажем прямо — это дешевле полной переделки.',
        },
      ],
      close: 'Узнали себя — всё равно напишите. Аудит и рекомендацию дадим бесплатно; иногда вывод звучит как «переделывать сайт не нужно».',
    },
    cases: { title: 'Кейсы по направлению', slugs: ['smart-fashion', 'merkuri'] },
    faq: {
      title: 'Частые вопросы',
      items: [
        {
          q: 'Не дешевле ли сделать на Tilda или WordPress?',
          a: 'Для простой задачи — да, и мы говорим это прямо. Конструктор запускается за день и на старте стоит копейки. Дальше начинается абонплата, чужие скрипты на каждой странице и многоязычность, которую поисковик видит как одну страницу вместо трёх. Сайт, собранный статически, отдаётся с CDN, живёт на вашем домене без ежемесячной платы и держит три языка на отдельных адресах. На брифе считаем оба варианта.',
        },
        {
          q: 'Смогу ли я сам редактировать сайт?',
          a: 'Да, если нужна админка: новости, вакансии, товары — на вашей стороне. Менять структуру дизайна через админку нельзя, и это сделано намеренно, чтобы сайт нельзя было сломать одним кликом.',
        },
        {
          q: 'Три языка будут готовы одновременно?',
          a: 'Да, к релизу готовы все три. Тексты даёте вы или мы согласуем переводчика — перевод в смету не входит, но структуру под три языка мы делаем сразу.',
        },
        {
          q: 'Когда сайт появится в Google?',
          a: 'Индексация обычно занимает 1–3 недели. Техническую часть — sitemap, robots, JSON-LD, скорость — отдаём готовой на релизе. Позиции зависят от контента и конкуренции и за ночь не появляются.',
        },
        {
          q: 'Можно ли дорабатывать сайт после запуска?',
          a: 'Три месяца гарантии: ошибки и мелкие правки на нас, а новый раздел или функция — отдельный небольшой проект, стоимость называем заранее.',
        },
      ],
    },
    cta: {
      title: 'Расскажите про сайт',
      text: 'Хватит короткого брифа: что продаёте, кому, что за сайт сейчас. За 3–5 дней вернёмся со структурой и сметой.',
      subject: 'Бриф — Сайт (ru)',
    },
  },

  en: {
    meta: {
      title: 'Web development company in Baku — EXCLAMATION',
      description:
        'Corporate sites, landing pages, catalogues, three languages. Landing 1–2 weeks, corporate site 3–6 weeks. Free 3–5 day estimate, you own the code.',
    },
    eyebrow: 'Service',
    titleMuted: 'Web development —',
    titleMain: 'fast pages you actually own.',
    lead: 'A website is the cheapest salesperson a company has: it works around the clock and tells every visitor the same thing correctly. Typical timelines are 1–2 weeks for a landing page, 3–6 weeks for a corporate site, and 6–10 weeks for a catalogue or a multilingual portal. After a short brief we return within 3–5 days with a structure, stages and a firm quote, and that stage is not billed.',
    facts: [
      { label: 'Landing page', value: '1–2 weeks' },
      { label: 'Corporate site', value: '3–6 weeks' },
      { label: 'Estimate', value: '3–5 days' },
    ],
    introTitle: 'Performance and ownership',
    intro: [
      'Two things separate a site that earns from a site that merely exists: how fast it paints, and who controls it afterwards. Everything else — the layout, the palette, the number of sections — is downstream of those.',
      'Speed is not a vanity metric. First impressions form in about three seconds, and on mobile networks a page built on a template platform routinely spends that long fetching third-party scripts it never needed. We build static by default: pages are pre-rendered and served from a CDN, images are converted to avif and webp at build time with the right variant chosen per device, and fonts are self-hosted and subset rather than fetched from a third party. The site you are reading is built the same way — a landing page of this length loads in under a second on throttled 4G, and we measure that rather than claim it.',
      'Ownership is the second half. The repository sits in your account from the first commit, the domain is registered to you, and there is no platform subscription that has to keep being paid for the site to stay online. If you move to another team in two years you hand over code and documentation, not a login to somebody else’s product.',
      'Multilingual work is a specialism here rather than an add-on: Azerbaijani, Russian and English get separate routes, separate metadata and correct `hreflang` annotation, so search engines index three pages instead of guessing at one. Doing it by swapping strings on a single URL — the way most template platforms do — costs you two thirds of the traffic you paid to build for.',
    ],
    scope: {
      title: 'What the work covers',
      includesTitle: 'Included',
      includes: [
        'Structure, sitemap and user journeys',
        'Design: responsive layouts for every page',
        'Build in three languages with `hreflang` annotation',
        'Image optimisation, avif and webp',
        'Forms, spam protection and email notifications',
        'Technical SEO: metadata, sitemap, robots, JSON-LD',
        'Analytics setup and goal configuration',
        'Domain, hosting and SSL configuration',
      ],
      excludesTitle: 'Not included',
      excludes: [
        'Copywriting and translation',
        'Professional photography and video',
        'Domain and hosting fees',
        'Running advertising campaigns',
        'Running social media accounts',
      ],
      deliverTitle: 'What you receive',
      deliver: [
        'A working site on your domain',
        'The repository in your account',
        'Admin access and a written guide',
        'Analytics and Search Console connected',
        'Deploy and rollback scripts',
        'Monitoring and a 3-month warranty',
      ],
    },
    pricing: {
      title: 'What drives the price',
      lead: 'We do not publish a price list: the word "website" covers a five-page brochure and a thousand-product catalogue equally. These are what actually move a quote.',
      drivers: [
        'Page count, and how many of those need a unique layout rather than a component',
        'Number of languages: each one adds both build work and content structure',
        'Content management: static, or an admin panel — and who edits what',
        'Catalogue: number of products, filters, search, stock synchronisation',
        'Integrations: payments, CRM, delivery services, maps',
      ],
      note: 'After the brief you get the structure, the stages and a firm quote within 3–5 days. That stage is free and commits you to nothing.',
    },
    stack: {
      title: 'Stack',
      note: 'Chosen per project. Simple sites are built statically; larger ones ship with an admin panel.',
      groups: [
        { name: 'Frontend', items: ['Astro', 'Next.js', 'TypeScript', 'Vite'] },
        { name: 'Backend', items: ['Django', 'FastAPI', 'PostgreSQL'] },
        { name: 'Content', items: ['Headless CMS', 'Markdown', 'S3'] },
        { name: 'Delivery', items: ['CDN', 'Nginx', 'CI/CD', 'Analytics'] },
      ],
    },
    timeline: {
      title: 'Stages',
      steps: [
        {
          title: 'Brief and structure',
          time: '3–5 days',
          text: 'Audience, competitors, sitemap. Output: a structure, a stage plan and a firm quote.',
        },
        {
          title: 'Prototype and content structure',
          time: '3–5 days',
          text: 'A block diagram of every page. No copy yet, but what each block has to say is agreed.',
        },
        {
          title: 'Design',
          time: '1–2 weeks',
          text: 'Layouts for the key pages, mobile and desktop. The rest are assembled from the same components.',
        },
        {
          title: 'Build and integration',
          time: '1–3 weeks',
          text: 'Responsive build, three languages, forms, admin panel. A working link at the end of each week.',
        },
        {
          title: 'Technical SEO and testing',
          time: '3–5 days',
          text: 'Metadata, sitemap, JSON-LD, speed measurement, cross-browser checks, analytics.',
        },
        {
          title: 'Release and warranty',
          time: '3 months',
          text: 'Migration to your domain, Search Console, monitoring. Fixes are on us for three months.',
        },
      ],
    },
    notFor: {
      title: 'When you do not need this',
      lead: 'Sometimes a built-from-scratch site is the weakest option on the table. We raise these on the brief ourselves.',
      items: [
        {
          cond: 'All your sales come from Instagram and that works',
          text: 'If your audience is there and the enquiry flow satisfies you, a website changes nothing on its own. Money into advertising and content returns more in that situation.',
        },
        {
          cond: 'You need one page with one button',
          text: 'For a single promotion or event, a page builder does the job in a day. Writing that from scratch is expensive and pointless.',
        },
        {
          cond: 'There is no copy or photography, and none coming',
          text: 'Launching with empty blocks means launching a site that does not work. Waiting for the content and releasing once is cheaper than releasing twice.',
        },
        {
          cond: 'The current site works and merely looks dated',
          text: 'Sometimes fixing speed, copy and the mobile view beats a redesign. We will audit it and say so plainly — that route costs a fraction of a rebuild.',
        },
      ],
      close: 'If one of these describes you, write anyway. The audit and the recommendation are free, and the conclusion is sometimes "do not rebuild the site". We are not shy about answering that way.',
    },
    cases: { title: 'Related work', slugs: ['smart-fashion', 'merkuri'] },
    faq: {
      title: 'Frequent questions',
      items: [
        {
          q: 'Would a page builder be cheaper?',
          a: 'For a simple job, yes, and we say so directly. The difference shows up in load speed, in multilingual routing done properly, and in the absence of a monthly platform fee. On the brief we cost both routes.',
        },
        {
          q: 'Will I be able to edit the site myself?',
          a: 'Yes, where an admin panel is part of the scope: news, vacancies, products are yours to edit. Changing the design structure through the admin is deliberately not possible, so the site cannot be broken in one click.',
        },
        {
          q: 'Will all three languages be ready at launch?',
          a: 'Yes, all three ship together. You supply the copy or we agree a translator with you — translation is not in the quote, but the structure for three languages is built in from the start.',
        },
        {
          q: 'When will the site appear in Google?',
          a: 'Indexing usually takes 1–3 weeks. The technical side — sitemap, robots, JSON-LD, speed — is delivered ready at launch. Rankings depend on content and competition and do not arrive overnight.',
        },
        {
          q: 'Can the site be extended after launch?',
          a: 'For the three months of warranty, bugs and small corrections are on us. A new section or feature is its own small project, quoted before it starts.',
        },
      ],
    },
    cta: {
      title: 'Tell us about the site',
      text: 'A short brief is enough: what you sell, to whom, and what you have now. We come back within 3–5 days with a structure and a quote.',
      subject: 'Brief — Website (en)',
    },
  },
};

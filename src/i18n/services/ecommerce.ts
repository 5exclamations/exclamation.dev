import type { ServiceCopy } from './types';
import type { Locale } from '../index';

/**
 * Online stores, written three times.
 *
 * Azerbaijani argues the move most local sellers are actually making — from
 * Instagram and WhatsApp order-taking to a shop that takes the order itself —
 * and spends its length on payment, delivery and stock, which is where those
 * projects fail. Russian argues the platform question, because that market
 * searches for the comparison with the boxed carts. English argues the
 * economics: what a slow storefront costs per order and who holds the
 * customer data.
 */
export const ecommerce: Record<Locale, ServiceCopy> = {
  az: {
    meta: {
      title: 'Onlayn mağaza hazırlanması, Bakı — EXCLAMATION',
      description:
        'Kataloq, səbət, ödəniş və çatdırılma inteqrasiyası, anbar sinxronu. Sadə mağaza 4–6 həftə, tam platforma 8–12 həftə. Qiymətləndirmə 3–5 gün, ödənişsiz.',
    },
    eyebrow: 'Xidmət',
    titleMuted: 'Onlayn mağaza —',
    titleMain: 'sifarişi özü qəbul edən.',
    lead: 'Onlayn mağaza — sifarişi sonuna qədər özü aparan sistemdir: kataloq, səbət, ödəniş, çatdırılma və qalıqların uçotu. Sadə mağaza üçün tipik müddət 4–6 həftə, filtrlər, ödəniş və anbar inteqrasiyası olan platforma üçün 8–12 həftə. Brifdən sonra 3–5 gün ərzində struktur, mərhələlər və dəqiq smeta veririk — bu mərhələ ödənişsizdir.',
    facts: [
      { label: 'Sadə mağaza', value: '4–6 həftə' },
      { label: 'Tam platforma', value: '8–12 həftə' },
      { label: 'Qiymətləndirmə', value: '3–5 gün' },
    ],
    introTitle: 'Instagram-dan mağazaya',
    intro: [
      'Bakıda onlayn satışın böyük hissəsi hələ də messencerdə gedir: müştəri şəkli görür, yazır, qiyməti soruşur, ünvanı diktə edir, sonra kimsə bunu əllə qeyd edir. Bu, gündə on sifarişə qədər işləyir. Otuzdan sonra menecer səhv etməyə başlayır, əlli-dən sonra isə sifarişlərin bir hissəsi sadəcə itir — cavab gecikir və müştəri gedir.',
      'Mağaza bu zənciri qısaldır. Alıcı özü seçir, özü ödəyir, özü çatdırılma üsulunu göstərir; sizin tərəfdə isə hazır sifariş, ödəniş statusu və azalmış qalıq görünür. Menecerin işi yazışmadan yığıma keçir.',
      'Gecə saat ikidə gələn sifariş də itmir.',
      'Çətin hissə dizayn deyil. Ödəniş yerli bank ekvayrinqi və ya ödəniş şlüzü ilə qoşulur, uğursuz ödənişin ssenarisi ayrıca yazılır. Çatdırılma — zonalar, tariflər, kuryer xidmətinin API-si. Qalıq isə ən çox problem yaradan yerdir: eyni məhsul həm mağazada, həm zalda satılırsa, sinxron olmadan siz olmayan malı satacaqsınız. Bunları brifdə əvvəlcədən aydınlaşdırırıq.',
      'Bizim Smart Fashion keysimiz məhz bu haqdadır: kataloq, filtrlər, səbət, tövsiyə sistemi və real vaxt qalıq idarəetməsi. Redizayndan sonra konversiya 65% artdı, səhifə 0.8 saniyəyə açılır.',
    ],
    scope: {
      title: 'İşə nə daxildir',
      includesTitle: 'Daxildir',
      includes: [
        'Kataloq strukturu, kateqoriyalar və məhsul kartı',
        'Filtrlər, axtarış və çeşidləmə',
        'Səbət və sifariş rəsmiləşdirmə (checkout)',
        'Ödəniş sistemi ilə inteqrasiya',
        'Çatdırılma zonaları və kuryer xidməti API-si',
        'Qalıqların uçotu və sinxronu',
        'Admin panel: sifarişlər, məhsullar, endirimlər',
        'Texniki SEO və məhsul üçün JSON-LD',
        'Analitika və e-commerce hədəfləri',
      ],
      excludesTitle: 'Daxil deyil',
      excludes: [
        'Məhsul şəkillərinin çəkilişi',
        'Kataloqun doldurulması və təsvirlərin yazılması',
        'Ekvayrinq müqaviləsinin bank ilə bağlanması',
        'Reklam kampaniyalarının aparılması',
        'Anbar və logistikanın özünün qurulması',
      ],
      deliverTitle: 'Nəticədə nə alırsınız',
      deliver: [
        'İşlək mağaza sizin domeninizdə',
        'Repozitoriya və məlumat bazası sizin hesabınızda',
        'Admin panel üçün giriş və təlimat',
        'Ödəniş və çatdırılma qoşulmuş, test sifarişləri keçmiş',
        'Analitika və satış hesabatları',
        'Monitorinq və 3 ay zəmanət',
      ],
    },
    pricing: {
      title: 'Qiymət nədən asılıdır',
      lead: 'Hazır qiymət cədvəli vermirik: «mağaza» sözü həm iyirmi məhsulluq vitrini, həm də min artikullu platformanı bildirir. Smetanı bunlar dəyişir.',
      drivers: [
        'Məhsul sayı və variantlar: ölçü, rəng, ölçü cədvəli, dəst',
        'Filtrlərin mürəkkəbliyi və axtarışın necə işləməli olduğu',
        'Ödəniş: neçə üsul, hissə-hissə ödəniş, geri qaytarma ssenarisi',
        'Çatdırılma: zonalar, tariflər, kuryer xidmətlərinin sayı',
        'Anbar: qalıqlar əllə aparılır, yoxsa 1C və ya başqa sistemlə sinxronlaşır',
      ],
      note: 'Strukturu, mərhələləri və dəqiq smetanı brifdən 3–5 gün sonra göndəririk. Bu mərhələ heç nəyə başa gəlmir.',
    },
    stack: {
      title: 'Stek',
      note: 'Layihəyə görə seçilir. Vitrin statik yığıla bilər, böyük kataloq öz bazası ilə gəlir.',
      groups: [
        { name: 'Frontend', items: ['Next.js', 'Astro', 'TypeScript'] },
        { name: 'Backend', items: ['Django', 'FastAPI', 'PostgreSQL', 'Redis'] },
        { name: 'Commerce', items: ['Payment API', 'Delivery API', '1C'] },
        { name: 'Delivery', items: ['CDN', 'Docker', 'CI/CD', 'Analytics'] },
      ],
    },
    timeline: {
      title: 'Mərhələlər',
      steps: [
        {
          title: 'Brif və kataloq strukturu',
          time: '3–5 gün',
          text: 'Məhsullar, variantlar, ödəniş və çatdırılma qaydaları. Çıxışda struktur, mərhələlər və smeta.',
        },
        {
          title: 'Prototip və sifariş axını',
          time: '1 həftə',
          text: 'Kataloqdan checkout-a qədər bütün yol. Burada uğursuz ödəniş və olmayan mal ssenariləri də yazılır.',
        },
        {
          title: 'Dizayn',
          time: '1–2 həftə',
          text: 'Kataloq, məhsul kartı, səbət, checkout. Mobil birinci: mağazalarda trafikin çoxu telefondan gəlir.',
        },
        {
          title: 'Development və inteqrasiyalar',
          time: '3–6 həftə',
          text: 'Kataloq, admin panel, ödəniş, çatdırılma, qalıq sinxronu. Hər sprintin sonunda işlək link.',
        },
        {
          title: 'Test sifarişləri və reliz',
          time: '1–2 həftə',
          text: 'Real ödənişlərlə test sifarişləri, geri qaytarma yoxlaması, yük testi, sürət ölçülməsi.',
        },
        {
          title: 'Zəmanət və dəstək',
          time: '3 ay',
          text: 'Monitorinq, səhvlərin düzəlişi, satış hesabatlarının oxunması. Sonra dəstək paketi və ya öz komandanız.',
        },
      ],
    },
    notFor: {
      title: 'Mağaza sizə nə vaxt lazım deyil',
      lead: 'Mağaza saytdan bahadır və özünü yalnız sifariş axını ilə qaytarır. Bunları brifdə özümüz soruşuruq.',
      items: [
        {
          cond: 'Ayda 20-dən az sifariş və hamısı messencerdən',
          text: 'Bu həcmdə kataloq səhifəsi və WhatsApp düyməsi eyni işi görür. Mağaza o vaxt qazandırır ki, yazışma menecerin vaxtını yeməyə başlasın.',
        },
        {
          cond: 'Məhsul məsləhətsiz satılmır',
          text: 'Belə mal səbətə düşmür. Kataloq və sorğu forması checkout-dan yaxşı işləyir.',
        },
        {
          cond: 'Qalıqlar heç yerdə aparılmır',
          text: 'Mağaza anbarı qaydaya salmır — onun nizamsızlığını görünən edir. Əvvəl qalığın harada saxlandığını həll edin, sonra onu sayta bağlayın.',
        },
        {
          cond: 'Bütün satış marketpleysdən gedir və bu sizi qane edir',
          text: 'Öz mağazanız komissiyanı azaldır, amma trafiki özünüz gətirməli olursunuz. Marketpleys hər ikisini birdən verir. Reklam büdcəsi yoxdursa, öz kanal gözləyər.',
        },
      ],
      close: 'Bu bəndlərdən biri sizin haqqınızdadırsa, yenə yazın. Pulsuz deyəcəyik ki, indi nə daha faydalıdır: kataloq, mağaza, yoxsa sadəcə mövcud prosesin avtomatlaşdırılması.',
    },
    cases: { title: 'Bu istiqamətdə keyslər', slugs: ['smart-fashion', 'ai-assistent'] },
    faq: {
      title: 'Tez-tez verilən suallar',
      items: [
        {
          q: 'Shopify və ya hazır CMS-də etmək ucuz olmazmı?',
          a: 'Standart kataloq və standart checkout üçün — bəli, və biz bunu dürüst deyirik. Shopify və ya hazır CMS bir-iki həftəyə qalxır. Fərq o zaman görünür ki, sizin variantlarınız, endirim qaydalarınız və ya anbar sinxronunuz qutunun modelinə sığmır: sonra plaginlər başlayır, plaginlər isə hər yeniləmədə toqquşur. Öz platforma bunu aradan qaldırır, amma daha gec start götürür — sadə mağaza üçün 4–6 həftə. Brifdə hər iki variantı hesablayırıq.',
        },
        {
          q: 'Ödənişi Azərbaycanda necə qoşursunuz?',
          a: 'Yerli bank ekvayrinqi və ya ödəniş şlüzü vasitəsilə. Müqaviləni bank ilə siz bağlayırsınız — bu, hüquqi tərəfdir; texniki qoşulma, test ödənişləri və geri qaytarma ssenarisi bizim tərəfdədir.',
        },
        {
          q: 'Kataloqu kim dolduracaq?',
          a: 'Adətən siz, admin panel vasitəsilə; mövcud baza varsa — Excel, 1C, köhnə sayt — köçürməni biz edirik və bu, smetada görünən ayrıca mərhələdir.',
        },
        {
          q: '1C və ya anbar proqramı ilə inteqrasiya olacaqmı?',
          a: 'Bəli. Qalıqlar, qiymətlər və sifarişlər iki tərəfə sinxronlaşdırıla bilər. Sinxronun tezliyini birlikdə seçirik: real vaxt bahadır, gündə bir neçə dəfə isə çox mağaza üçün kifayətdir.',
        },
        {
          q: 'Mağaza axtarışda tapılacaqmı?',
          a: 'Texniki hissəni buraxılışda hazır veririk: məhsul üçün JSON-LD, sitemap, sürət, düzgün başlıqlar. Mövqe isə kataloqun keyfiyyəti, təsvirlər və rəqabətdən asılıdır — bunu bir gecəyə vəd edən hər kəs uydurur.',
        },
      ],
    },
    cta: {
      title: 'Mağazanızı danışaq',
      text: 'Qısa brif kifayətdir: nə satırsınız, neçə artikul, ödəniş və çatdırılma necə işləyir. 3–5 gün ərzində struktur və smeta ilə qayıdırıq.',
      subject: 'Brief — Onlayn mağaza (az)',
    },
  },

  ru: {
    meta: {
      title: 'Разработка интернет-магазина в Баку — EXCLAMATION',
      description:
        'Каталог, корзина, оплата, доставка, синхронизация остатков. Простой магазин 4–6 недель, платформа 8–12 недель. Оценка за 3–5 дней бесплатно.',
    },
    eyebrow: 'Услуга',
    titleMuted: 'Интернет-магазин —',
    titleMain: 'ваш каталог, ваша база клиентов.',
    lead: 'Интернет-магазин — система, которая доводит заказ до конца: каталог, корзина, оплата, доставка и учёт остатков. Простой магазин занимает 4–6 недель, платформа с фильтрами, оплатой и синхронизацией склада — 8–12 недель. После брифа за 3–5 дней возвращаемся со структурой, этапами и точной сметой; этап не оплачивается.',
    facts: [
      { label: 'Простой магазин', value: '4–6 недель' },
      { label: 'Платформа', value: '8–12 недель' },
      { label: 'Оценка', value: '3–5 дней' },
    ],
    introTitle: 'Коробка или своя платформа',
    intro: [
      'Если у вас типовой каталог и типовой checkout, берите готовое. Shopify, WooCommerce, OpenCart закрывают стандартный сценарий быстрее и дешевле, чем разработка с нуля. На брифе мы это скажем и проект не возьмём.',
      'Своя платформа начинает окупаться на нестандартной товарной модели: комплекты, конфигураторы, цены под клиента, единицы измерения, которые не ложатся в поле «количество». На правилах скидок и лояльности, которые в коробке живут через плагины, а плагины конфликтуют друг с другом на каждом обновлении. На синхронизации с 1С или складской программой, когда один и тот же товар продаётся и онлайн, и в зале.',
      'И на скорости.',
      'Магазин на коробке тянет за собой чужие скрипты и плагины; на мобильном интернете это лишние секунды до первой отрисовки, а каждая секунда на карточке товара стоит части заказов. В нашем кейсе Smart Fashion страница открывается за 0.8 секунды, и конверсия после редизайна выросла на 65%.',
      'Данные тоже ваши. База клиентов и заказов лежит в вашем аккаунте, а не в чужом кабинете с экспортом по расписанию. Решите через два года сменить подрядчика — отдаёте код и дамп базы, а не просите платформу отдать вам ваших же покупателей.',
    ],
    scope: {
      title: 'Что входит в работу',
      includesTitle: 'Входит',
      includes: [
        'Структура каталога, категории и карточка товара',
        'Фильтры, поиск и сортировка',
        'Корзина и оформление заказа',
        'Интеграция с платёжной системой',
        'Зоны доставки и API курьерских служб',
        'Учёт и синхронизация остатков',
        'Админка: заказы, товары, скидки',
        'Технический SEO и JSON-LD для товаров',
        'Аналитика и e-commerce цели',
      ],
      excludesTitle: 'Не входит',
      excludes: [
        'Съёмка товаров',
        'Наполнение каталога и написание описаний',
        'Заключение договора эквайринга с банком',
        'Ведение рекламных кампаний',
        'Постановка самого склада и логистики',
      ],
      deliverTitle: 'Что вы получаете',
      deliver: [
        'Работающий магазин на вашем домене',
        'Репозиторий и база данных в вашем аккаунте',
        'Доступ в админку и инструкция',
        'Оплату и доставку с пройденными тестовыми заказами',
        'Аналитику и отчёты по продажам',
        'Мониторинг и 3 месяца гарантии',
      ],
    },
    pricing: {
      title: 'От чего зависит цена',
      lead: 'Прайс-листа не даём: «магазином» называют и витрину на двадцать позиций, и платформу на тысячу артикулов. Смету двигает вот что.',
      drivers: [
        'Количество товаров и вариантов: размер, цвет, комплект, единицы измерения',
        'Сложность фильтров и того, как должен работать поиск',
        'Оплата: сколько способов, рассрочка, сценарий возврата',
        'Доставка: зоны, тарифы, число курьерских служб',
        'Склад: остатки ведутся вручную или синхронизируются с 1С',
      ],
      note: 'Структуру, этапы и точную смету присылаем через 3–5 дней после брифа. Этот этап ничего не стоит.',
    },
    stack: {
      title: 'Стек',
      note: 'Подбирается под проект. Витрина может собираться статически, большой каталог приходит со своей базой.',
      groups: [
        { name: 'Frontend', items: ['Next.js', 'Astro', 'TypeScript'] },
        { name: 'Backend', items: ['Django', 'FastAPI', 'PostgreSQL', 'Redis'] },
        { name: 'Commerce', items: ['Payment API', 'Delivery API', '1C'] },
        { name: 'Delivery', items: ['CDN', 'Docker', 'CI/CD', 'Analytics'] },
      ],
    },
    timeline: {
      title: 'Этапы',
      steps: [
        {
          title: 'Бриф и структура каталога',
          time: '3–5 дней',
          text: 'Товары, варианты, правила оплаты и доставки. На выходе структура, этапы и смета.',
        },
        {
          title: 'Прототип и поток заказа',
          time: '1 неделя',
          text: 'Весь путь от каталога до checkout. Здесь же прописываются сценарии неудачной оплаты и отсутствия товара.',
        },
        {
          title: 'Дизайн',
          time: '1–2 недели',
          text: 'Каталог, карточка, корзина, checkout. Сначала мобильный: в магазинах большая часть трафика с телефона.',
        },
        {
          title: 'Разработка и интеграции',
          time: '3–6 недель',
          text: 'Каталог, админка, оплата, доставка, синхронизация остатков. В конце каждого спринта рабочая ссылка.',
        },
        {
          title: 'Тестовые заказы и релиз',
          time: '1–2 недели',
          text: 'Тестовые заказы с реальной оплатой, проверка возврата, нагрузочный тест, замер скорости.',
        },
        {
          title: 'Гарантия и поддержка',
          time: '3 месяца',
          text: 'Мониторинг, исправления, разбор отчётов по продажам. Дальше пакет поддержки или своя команда.',
        },
      ],
    },
    notFor: {
      title: 'Когда магазин вам не нужен',
      lead: 'Магазин дороже сайта и окупается только потоком заказов. Эти вопросы мы задаём на брифе сами.',
      items: [
        {
          cond: 'Меньше 20 заказов в месяц и все из мессенджера',
          text: 'На таком объёме страница-каталог и кнопка WhatsApp делают ту же работу. Магазин начинает окупаться там, где переписка съедает время менеджера.',
        },
        {
          cond: 'Товар не продаётся без консультации',
          text: 'В корзину такое не кладут. Каталог и форма запроса работают лучше checkout.',
        },
        {
          cond: 'Остатки нигде не ведутся',
          text: 'Магазин не наводит порядок на складе — он делает беспорядок видимым. Сначала решите, где живут остатки, потом подключайте к ним сайт.',
        },
        {
          cond: 'Всё продаётся на маркетплейсе и вас это устраивает',
          text: 'Свой магазин снижает комиссию, но трафик придётся приводить самим. Маркетплейс даёт и то и другое сразу. Нет бюджета на рекламу — свой канал подождёт.',
        },
      ],
      close: 'Если один из пунктов про вас — всё равно напишите. Бесплатно скажем, что полезнее сейчас: каталог, магазин или автоматизация уже существующего процесса.',
    },
    cases: { title: 'Кейсы по направлению', slugs: ['smart-fashion', 'ai-assistent'] },
    faq: {
      title: 'Частые вопросы',
      items: [
        {
          q: 'Не дешевле ли на Shopify или готовой CMS?',
          a: 'Для стандартного каталога и стандартного checkout — да, и мы говорим это прямо. Shopify или готовая CMS поднимаются за пару недель. Разница появляется там, где ваши варианты товара, правила скидок или синхронизация со складом не влезают в модель коробки: дальше идут плагины, а они конфликтуют на каждом обновлении. Своя платформа это снимает, но стартует дольше — 4–6 недель на простой магазин. На брифе считаем оба варианта.',
        },
        {
          q: 'Как подключается оплата в Азербайджане?',
          a: 'Через эквайринг местного банка или платёжный шлюз. Договор с банком заключаете вы — это юридическая часть; техническое подключение, тестовые платежи и сценарий возврата на нас.',
        },
        {
          q: 'Кто будет наполнять каталог?',
          a: 'Обычно вы, через админку; если есть существующая база — Excel, 1С, старый сайт — перенос делаем мы, и это отдельный этап, видный в смете.',
        },
        {
          q: 'Будет ли интеграция с 1С или складской программой?',
          a: 'Да. Остатки, цены и заказы можно синхронизировать в обе стороны. Частоту выбираем вместе: реальное время дороже, а нескольких раз в сутки большинству магазинов достаточно.',
        },
        {
          q: 'Магазин будет находиться в поиске?',
          a: 'Техническую часть отдаём готовой на релизе: JSON-LD для товаров, sitemap, скорость, корректные заголовки. Позиции зависят от качества каталога, описаний и конкуренции — обещать их за ночь может только тот, кто выдумывает.',
        },
      ],
    },
    cta: {
      title: 'Расскажите про магазин',
      text: 'Хватит короткого брифа: что продаёте, сколько артикулов, как устроены оплата и доставка. За 3–5 дней вернёмся со структурой и сметой.',
      subject: 'Бриф — Интернет-магазин (ru)',
    },
  },

  en: {
    meta: {
      title: 'E-commerce development — online stores — EXCLAMATION',
      description:
        'Catalogue, cart, payments, delivery, stock sync. A simple store in 4–6 weeks, a full platform in 8–12. Free 3–5 day estimate, you own the data.',
    },
    eyebrow: 'Service',
    titleMuted: 'E-commerce development —',
    titleMain: 'built to take the order.',
    lead: 'An online store is the system that carries an order all the way through — browse, cart, payment, delivery and stock. A simple store typically takes 4–6 weeks, and a platform with filters, payments and warehouse synchronisation takes 8–12. After a short brief we come back within 3–5 days with a structure, stages and a firm quote, and that stage is not billed.',
    facts: [
      { label: 'Simple store', value: '4–6 weeks' },
      { label: 'Full platform', value: '8–12 weeks' },
      { label: 'Estimate', value: '3–5 days' },
    ],
    introTitle: 'What a slow storefront costs',
    intro: [
      'E-commerce is the one place where page speed converts directly into money, and the arithmetic is unforgiving. Most storefront traffic arrives on a phone, often on a mobile connection, and every second a product page spends loading removes a share of the people who would have bought. A template store carries third-party scripts and plugin bundles it cannot shed; a purpose-built one carries what you chose to put in it. On our Smart Fashion project pages load in 0.8 seconds and conversion rose 65% after the rebuild.',
      'Then: who holds the data.',
      'On a hosted platform your customer list, order history and behavioural data live in someone else’s account, exported on their terms. Built on your own stack, the database sits on infrastructure you control — which matters the day you want to run a retention campaign, feed a recommendation model, or change vendor without asking permission to take your customers with you.',
      'And the commission line. Marketplaces and hosted carts take a percentage of every order forever; a store you own converts that into a fixed build cost plus hosting. That trade only pays above a certain order volume, which we work out on the brief rather than assume. If the numbers say stay on the marketplace, we say so.',
      'The hard part of these projects is payments, delivery and stock. Payment means acquiring, failed-transaction handling and refunds. Delivery means zones, tariffs and courier APIs. Stock is the one that bites — if the same item sells online and in a shop, without synchronisation you will sell something you do not have. We pin all three down before the estimate.',
    ],
    scope: {
      title: 'What the work covers',
      includesTitle: 'Included',
      includes: [
        'Catalogue structure, categories and the product page',
        'Filters, search and sorting',
        'Cart and checkout',
        'Payment provider integration',
        'Delivery zones and courier service APIs',
        'Stock tracking and synchronisation',
        'Admin panel: orders, products, discounts',
        'Technical SEO and product JSON-LD',
        'Analytics and e-commerce goal tracking',
      ],
      excludesTitle: 'Not included',
      excludes: [
        'Product photography',
        'Filling the catalogue and writing descriptions',
        'Signing the acquiring agreement with a bank',
        'Running advertising campaigns',
        'Setting up the warehouse and logistics themselves',
      ],
      deliverTitle: 'What you receive',
      deliver: [
        'A working store on your domain',
        'Repository and database in your account',
        'Admin access and a written guide',
        'Payments and delivery live, with test orders passed',
        'Analytics and sales reporting',
        'Monitoring and a 3-month warranty',
      ],
    },
    pricing: {
      title: 'What drives the price',
      lead: 'We do not publish a price list: "a store" covers a twenty-item showcase and a thousand-SKU platform equally. These are what move a quote.',
      drivers: [
        'Product count and variants: size, colour, bundles, units of measure',
        'Filter complexity and how search is expected to behave',
        'Payments: how many methods, instalments, the refund path',
        'Delivery: zones, tariffs, number of courier services',
        'Stock: tracked by hand, or synchronised with 1C or a warehouse system',
      ],
      note: 'The structure, the stages and a firm quote arrive within 3–5 days of the brief. That stage costs nothing.',
    },
    stack: {
      title: 'Stack',
      note: 'Chosen per project. A showcase can be built statically; a large catalogue arrives with its own database.',
      groups: [
        { name: 'Frontend', items: ['Next.js', 'Astro', 'TypeScript'] },
        { name: 'Backend', items: ['Django', 'FastAPI', 'PostgreSQL', 'Redis'] },
        { name: 'Commerce', items: ['Payment API', 'Delivery API', '1C'] },
        { name: 'Delivery', items: ['CDN', 'Docker', 'CI/CD', 'Analytics'] },
      ],
    },
    timeline: {
      title: 'Stages',
      steps: [
        {
          title: 'Brief and catalogue structure',
          time: '3–5 days',
          text: 'Products, variants, payment and delivery rules. Output: a structure, stages and a quote.',
        },
        {
          title: 'Prototype and order flow',
          time: '1 week',
          text: 'The whole path from catalogue to checkout, including the failed-payment and out-of-stock paths.',
        },
        {
          title: 'Design',
          time: '1–2 weeks',
          text: 'Catalogue, product page, cart, checkout. Mobile first: most store traffic arrives on a phone.',
        },
        {
          title: 'Build and integrations',
          time: '3–6 weeks',
          text: 'Catalogue, admin, payments, delivery, stock sync. A working link at the end of every sprint.',
        },
        {
          title: 'Test orders and release',
          time: '1–2 weeks',
          text: 'Test orders with real payments, refund checks, load testing and a speed measurement.',
        },
        {
          title: 'Warranty and support',
          time: '3 months',
          text: 'Monitoring, fixes and reading the sales reports with you. Then a support plan or your own team.',
        },
      ],
    },
    notFor: {
      title: 'When you do not need this',
      lead: 'A store costs more than a site and only pays back on order volume. We raise these on the brief ourselves.',
      items: [
        {
          cond: 'Fewer than 20 orders a month, all through messengers',
          text: 'At that volume a catalogue page and a WhatsApp button do the same job. A store starts paying back when the conversations begin eating a manager’s day.',
        },
        {
          cond: 'The product does not sell without a conversation',
          text: 'That does not go in a cart. A catalogue and an enquiry form outperform a checkout.',
        },
        {
          cond: 'Stock is not tracked anywhere yet',
          text: 'A store does not tidy a warehouse; it makes the untidiness visible to customers. Decide where stock lives first, then connect a site to it.',
        },
        {
          cond: 'A marketplace sells it all and that suits you',
          text: 'Your own store cuts the commission but makes you responsible for the traffic. A marketplace supplies both at once. With no advertising budget, your own channel can wait.',
        },
      ],
      close: 'If one of these describes you, write anyway. We will tell you for free what is worth doing now — a catalogue, a store, or simply automating the process you already run.',
    },
    cases: { title: 'Related work', slugs: ['smart-fashion', 'ai-assistent'] },
    faq: {
      title: 'Frequent questions',
      items: [
        {
          q: 'Would Shopify or a ready-made CMS be cheaper?',
          a: 'For a standard catalogue and a standard checkout, yes, and we say so directly. Shopify or a ready-made CMS is up in a couple of weeks. The difference appears where your product variants, discount rules or stock synchronisation do not fit the platform’s model: from there it is plugins, and plugins collide on every update. Your own platform removes that but starts slower — 4–6 weeks for a simple store. On the brief we cost both routes.',
        },
        {
          q: 'How do payments work in Azerbaijan?',
          a: 'Through local bank acquiring or a payment gateway. You sign the agreement with the bank — that part is legal; the technical integration, test payments and the refund path are ours.',
        },
        {
          q: 'Who fills the catalogue?',
          a: 'Usually you, through the admin panel; if there is an existing source — a spreadsheet, 1C, an old site — we handle the migration, and it is a separate stage visible in the quote.',
        },
        {
          q: 'Can it integrate with 1C or a warehouse system?',
          a: 'Yes. Stock, prices and orders can synchronise in both directions. We pick the frequency together: real time costs more, and several times a day is enough for most stores.',
        },
        {
          q: 'Will the store be found in search?',
          a: 'The technical side is delivered ready at launch: product JSON-LD, sitemap, speed, correct headings. Rankings depend on catalogue quality, descriptions and competition — anyone promising them overnight is inventing.',
        },
      ],
    },
    cta: {
      title: 'Tell us about the store',
      text: 'A short brief is enough: what you sell, how many SKUs, and how payment and delivery work today. We come back within 3–5 days with a structure and a quote.',
      subject: 'Brief — Online store (en)',
    },
  },
};

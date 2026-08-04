import type { ServiceCopy } from './types';
import type { Locale } from '../index';

/**
 * Mobile apps, written three times.
 *
 * Azerbaijani argues the question most local clients actually have — whether
 * they need an app at all rather than a mobile site — and spends its length
 * there. Russian argues the decision that follows it: cross-platform against
 * native, which is the comparison that market searches for. English argues
 * cost of ownership across two platforms and the release cadence a store
 * review imposes, which is what an outsourcing buyer is pricing.
 */
export const mobile: Record<Locale, ServiceCopy> = {
  az: {
    meta: {
      title: 'Mobil tətbiq hazırlanması, Bakı — EXCLAMATION',
      description:
        'iOS və Android üçün tətbiq: Flutter, React Native, Swift, Kotlin. MVP 6–10 həftə, mağazalarda yerləşdirmə 1–2 həftə, qiymətləndirmə 3–5 gün, ödənişsiz.',
    },
    eyebrow: 'Xidmət',
    titleMuted: 'Mobil tətbiq hazırlanması —',
    titleMain: 'iki platforma, bir komanda.',
    lead: 'Mobil tətbiq — telefonun ekranında qalan və bildiriş göndərə bilən məhsuldur; saytdan fərqi təkrar istifadədədir. İşlək MVP üçün tipik müddət 6–10 həftə, tam məhsul üçün 3–5 ay, App Store və Google Play-ə yerləşdirmə üçün əlavə 1–2 həftə. Brifdən sonra 3–5 gün ərzində platforma seçimi, mərhələlər və dəqiq smeta veririk — bu mərhələ ödənişsizdir.',
    facts: [
      { label: 'İşlək MVP', value: '6–10 həftə' },
      { label: 'Mağazalara yerləşdirmə', value: '1–2 həftə' },
      { label: 'Qiymətləndirmə', value: '3–5 gün' },
    ],
    introTitle: 'Tətbiq lazımdır, yoxsa mobil sayt',
    intro: [
      'Bu sualı biz özümüz veririk, çünki cavab çox vaxt «tətbiq lazım deyil» olur. Adam ildə bir-iki dəfə girirsə, mobil sayt eyni işi görür və yükləmə tələb etmir. Tətbiq o zaman qazandırır ki, istifadəçi həftədə bir neçə dəfə qayıdır: sifariş, balans, cədvəl, izləmə, sadiqlik proqramı. Təkrar istifadə yoxdursa, ikonka ekranda ölü qalır.',
      'İkinci fərq bildirişlərdir. Yalnız tətbiq push göndərə bilir və bu, kanal kimi SMS-dən ucuz, e-poçtdan isə daha çox oxunandır. Amma bu güc iki tərəflidir: gündə üç bildiriş göndərən tətbiq silinir. Ssenariləri brifdə birlikdə yazırıq — nə vaxt, nəyə görə və nə qədər tez-tez.',
      'Üçüncü — cihazın özü: kamera, GPS, offline rejim, Bluetooth, biometrik giriş. Bunlardan biri lazımdırsa, sayt variantı düşür. Bizim MindTrick tətbiqimiz məhz buna görə tətbiqdir: gündəlik qeyd, offline işləmə, xatırlatma və yerli məlumat bazası.',
      'Platforma seçimini brifdə edirik. Əksər hallarda Flutter götürürük: bir kod bazası iki mağazaya çıxır, bu isə həm müddəti, həm sonrakı dəstəyi təxminən yarıya salır. Native — Swift və ya Kotlin — o vaxt lazım olur ki, tətbiq ağır qrafika, dərin sistem inteqrasiyası və ya platformaya xas xüsusi funksiya tələb etsin. Hansının sizin tapşırığınıza uyğun olduğunu qiymətləndirmə mərhələsində yazılı deyirik.',
    ],
    scope: {
      title: 'İşə nə daxildir',
      includesTitle: 'Daxildir',
      includes: [
        'İstifadəçi ssenariləri və ekran xəritəsi',
        'Platforma seçimi və arxitektura',
        'UI dizayn: iOS və Android üçün maketlər',
        'Tətbiqin özü, hər iki platforma üçün',
        'Server hissəsi və API',
        'Push bildirişlər və analitika',
        'Offline rejim, əgər ssenari tələb edirsə',
        'Test: real cihazlarda və emulyatorlarda',
        'App Store və Google Play-ə yerləşdirmə',
      ],
      excludesTitle: 'Daxil deyil',
      excludes: [
        'Apple və Google developer hesablarının illik haqqı',
        'Mətnlərin yazılması və tərcüməsi',
        'Mağaza üçün promo video çəkilişi',
        'Reklam kampaniyalarının aparılması',
        'Server abunə haqqı',
      ],
      deliverTitle: 'Nəticədə nə alırsınız',
      deliver: [
        'Tətbiq hər iki mağazada, sizin hesabınızda',
        'Repozitoriya sizin hesabınızda',
        'Server hissəsi və API sənədləri',
        'Analitika və çökmə hesabatları qoşulmuş',
        'Yeni versiya buraxmaq üçün CI/CD',
        'Monitorinq və 3 ay zəmanət',
      ],
    },
    pricing: {
      title: 'Qiymət nədən asılıdır',
      lead: 'Hazır qiymət cədvəli vermirik: «tətbiq» sözü həm üç ekranlı MVP-ni, həm də ödəniş və xəritə ilə platformanı bildirir. Smetanı bunlar dəyişir.',
      drivers: [
        'Ekran sayı və onların neçəsinin unikal məntiq tələb etməsi',
        'Platforma: kross-platforma bir kod bazası, native isə iki ayrı iş',
        'Server hissəsi: hazır API var, yoxsa sıfırdan yazılır',
        'Cihaz funksiyaları: kamera, GPS, offline, Bluetooth, biometrika',
        'Ödəniş və mağaza qaydaları: daxili alışlar ayrıca tələblər gətirir',
      ],
      note: 'Brifdən sonra 3–5 gün ərzində platforma seçimini, mərhələləri və dəqiq smetanı veririk. Bu mərhələ ödənişsizdir və sizi heç nəyə borclu etmir.',
    },
    stack: {
      title: 'Stek',
      note: 'Platforma brifdə seçilir. Kross-platforma daha tez və ucuz, native daha dərin.',
      groups: [
        { name: 'Cross-platform', items: ['Flutter', 'React Native', 'Expo'] },
        { name: 'Native', items: ['Swift', 'Kotlin'] },
        { name: 'Backend', items: ['FastAPI', 'PostgreSQL', 'Firebase'] },
        { name: 'Release', items: ['CI/CD', 'App Store', 'Google Play'] },
      ],
    },
    timeline: {
      title: 'Mərhələlər',
      steps: [
        {
          title: 'Brif və platforma seçimi',
          time: '3–5 gün',
          text: 'Ssenarilər, auditoriya, cihaz tələbləri. Çıxışda: platforma, mərhələlər və dəqiq smeta.',
        },
        {
          title: 'Ekran xəritəsi və prototip',
          time: '1 həftə',
          text: 'Bütün ekranların sxemi və keçidlər. Klik edilə bilən prototipdə axını razılaşdırırıq.',
        },
        {
          title: 'Dizayn',
          time: '1–2 həftə',
          text: 'iOS və Android üçün maketlər. Platformaların öz qaydaları var — eyni şəkli iki yerə yapışdırmırıq.',
        },
        {
          title: 'Development, 2 həftəlik sprintlər',
          time: '4–8 həftə',
          text: 'Hər sprintin sonunda telefonunuza quraşdırıla bilən build. İş gündəlik görünür.',
        },
        {
          title: 'Test və mağazalara yerləşdirmə',
          time: '1–2 həftə',
          text: 'Real cihazlarda test, mağaza kartları, baxış prosesi. Apple-ın baxışı bir neçə gün çəkir.',
        },
        {
          title: 'Zəmanət və yeniləmələr',
          time: '3 ay',
          text: 'Çökmə monitorinqi, bug fix və yeni versiyalar. Mağaza hesabları sizin adınızdadır.',
        },
      ],
    },
    notFor: {
      title: 'Tətbiq sizə nə vaxt lazım deyil',
      lead: 'Tətbiq saytdan bahadır və özünü yalnız təkrar istifadə ilə qaytarır. Bunları brifdə özümüz soruşuruq.',
      items: [
        {
          cond: 'İstifadəçi ildə bir-iki dəfə qayıdır',
          text: 'Bu tezlikdə heç kim tətbiq yükləmir, yükləyənlər isə bir aya silir. Mobil sayt eyni işi görür və yükləmə tələb etmir.',
        },
        {
          cond: 'Tətbiq yalnız məlumat göstərəcək',
          text: 'Kataloq, qiymətlər, əlaqə — bunlar üçün sayt kifayətdir və axtarışda da tapılır. Tətbiq axtarışda görünmür, onu ayrıca tanıtmaq lazımdır.',
        },
        {
          cond: 'Auditoriya iki platformanı əsaslandırmır',
          text: 'İstifadəçilərin demək olar hamısı bir platformadadırsa, ikincisini eyni vaxtda buraxmaq büdcəni ikiqat artırır. Əvvəl birini buraxıb rəqəmlərə baxmaq daha ucuzdur.',
        },
        {
          cond: 'Tanıtım büdcəsi yoxdur',
          text: 'Mağazada tətbiq özü tapılmır. Yükləmələr reklam, mövcud baza və ya offline kanal tələb edir; bunlar yoxdursa, buraxılış sükutla keçəcək.',
        },
      ],
      close: 'Bu bəndlərdən biri sizin haqqınızdadırsa, yenə yazın. Pulsuz deyəcəyik ki, mobil sayt, PWA və ya tətbiq — hansı sizin tapşırığınıza uyğundur. Bəzən cavab «tətbiq lazım deyil» olur, və biz bunu deməkdən çəkinmirik.',
    },
    cases: { title: 'Bu istiqamətdə keys', slugs: ['mindtrick'] },
    faq: {
      title: 'Tez-tez verilən suallar',
      items: [
        {
          q: 'Flutter yoxsa native — hansını seçək?',
          a: 'Əksər tapşırıqlar üçün Flutter: bir kod bazası iki mağazaya çıxır, müddət və sonrakı dəstək təxminən yarıya düşür. Native ağır qrafika, dərin sistem inteqrasiyası və ya platformaya xas funksiya lazım olanda. Seçimi qiymətləndirmədə yazılı əsaslandırırıq.',
        },
        {
          q: 'Tətbiq App Store-a düşəcəkmi?',
          a: 'Yerləşdirmə işə daxildir və qaydaları əvvəlcədən nəzərə alırıq. Apple-ın baxışı adətən bir neçə gün çəkir; imtina olarsa, səbəbi aradan qaldırıb yenidən göndəririk — bu, zəmanət daxilindədir.',
        },
        {
          q: 'iOS və Android eyni vaxtda hazır olacaqmı?',
          a: 'Kross-platformada bəli, ikisi bir buraxılışda gedir. Native seçilərsə, adətən əvvəl bir platforma buraxılır, sonra ikincisi — bu, büdcəni mərhələlərə bölməyə imkan verir.',
        },
        {
          q: 'Mağaza hesabları kimin adına olacaq?',
          a: 'Sizin. Apple Developer və Google Play hesabları sizin şirkətinizə açılır, biz sadəcə giriş alırıq. Beləliklə tətbiq həmişə sizindir və podratçı dəyişəndə heç nə itmir.',
        },
        {
          q: 'Buraxılışdan sonra yeniləmələr necə olur?',
          a: 'Üç ay zəmanət: çökmələr və səhvlər bizim üzərimizdədir. Yeni funksiyalar ayrıca kiçik layihələrdir; CI/CD qurulub, ona görə yeni versiya bir neçə saata mağazaya gedir.',
        },
      ],
    },
    cta: {
      title: 'Tətbiqinizi danışaq',
      text: 'Qısa brif kifayətdir: kim istifadə edəcək, nə qədər tez-tez, hansı cihaz funksiyaları lazımdır. 3–5 gün ərzində platforma seçimi və smeta ilə qayıdırıq.',
      subject: 'Brief — Mobil tətbiq (az)',
    },
  },

  ru: {
    meta: {
      title: 'Разработка мобильных приложений в Баку — EXCLAMATION',
      description:
        'iOS и Android: Flutter, React Native, Swift, Kotlin. Рабочий MVP за 6–10 недель, публикация 1–2 недели, оценка за 3–5 дней бесплатно, аккаунты ваши.',
    },
    eyebrow: 'Услуга',
    titleMuted: 'Мобильные приложения —',
    titleMain: 'кроссплатформа или натив, решаем на брифе.',
    lead: 'Мобильное приложение — продукт, который остаётся на экране телефона и умеет присылать пуш; этим оно отличается от сайта. Рабочий MVP занимает 6–10 недель, полноценный продукт 3–5 месяцев, публикация в App Store и Google Play — ещё 1–2 недели. После брифа за 3–5 дней возвращаемся с выбором платформы, этапами и точной сметой; этап не оплачивается.',
    facts: [
      { label: 'Рабочий MVP', value: '6–10 недель' },
      { label: 'Публикация', value: '1–2 недели' },
      { label: 'Оценка', value: '3–5 дней' },
    ],
    introTitle: 'Кроссплатформа или натив',
    intro: [
      'Главное решение принимается на брифе и стоит примерно половину бюджета. Кроссплатформа — Flutter или React Native — это одна кодовая база, которая собирается в оба магазина. Натив — Swift для iOS и Kotlin для Android — это два отдельных приложения, две команды компетенций и две очереди задач на любое изменение.',
      'В большинстве проектов мы берём Flutter.',
      'Интерфейс рисуется собственным движком, поэтому приложение выглядит одинаково на обеих платформах, а сроки и последующая поддержка сокращаются примерно вдвое. Для витрины, личного кабинета, трекера, доставки, записи, лояльности этого достаточно с запасом.',
      'Натив нужен там, где приложение упирается в платформу: тяжёлая графика и анимация на 120 кадрах, серьёзная работа с камерой и обработкой видео, глубокая интеграция с системой — виджеты, часы, фоновая геолокация с экономией батареи. Если задача про это, кроссплатформа начнёт мешать примерно на третьем месяце. Честнее сказать это до старта.',
      'Есть и третий ответ, который мы называем чаще, чем клиенты ожидают: приложение не нужно. Если пользователь возвращается пару раз в год, если нет ни пушей, ни офлайна, ни камеры — мобильный сайт делает ту же работу, не требует установки и находится в поиске. Ниже есть отдельный раздел про это.',
    ],
    scope: {
      title: 'Что входит в работу',
      includesTitle: 'Входит',
      includes: [
        'Пользовательские сценарии и карта экранов',
        'Выбор платформы и архитектура',
        'UI-дизайн: макеты под iOS и Android',
        'Само приложение под обе платформы',
        'Серверная часть и API',
        'Пуш-уведомления и аналитика',
        'Офлайн-режим, если его требует сценарий',
        'Тестирование на реальных устройствах и эмуляторах',
        'Публикация в App Store и Google Play',
      ],
      excludesTitle: 'Не входит',
      excludes: [
        'Годовая оплата аккаунтов Apple и Google',
        'Написание и перевод текстов',
        'Съёмка промо-видео для магазинов',
        'Ведение рекламных кампаний',
        'Оплата серверов',
      ],
      deliverTitle: 'Что вы получаете',
      deliver: [
        'Приложение в обоих магазинах, в ваших аккаунтах',
        'Репозиторий в вашем аккаунте',
        'Серверную часть и документацию API',
        'Подключённые аналитику и отчёты о падениях',
        'CI/CD для выпуска новых версий',
        'Мониторинг и 3 месяца гарантии',
      ],
    },
    pricing: {
      title: 'От чего зависит цена',
      lead: 'Прайс-листа не даём: словом «приложение» называют и MVP на три экрана, и платформу с оплатой и картами. Смету двигает вот что.',
      drivers: [
        'Количество экранов и сколько из них требуют уникальной логики',
        'Платформа: кроссплатформа — одна кодовая база, натив — два проекта',
        'Серверная часть: есть готовый API или пишется с нуля',
        'Функции устройства: камера, GPS, офлайн, Bluetooth, биометрия',
        'Оплата и правила магазинов: внутренние покупки приносят отдельные требования',
      ],
      note: 'Выбор платформы, этапы и точную смету отдаём за 3–5 дней после брифа. Бесплатно.',
    },
    stack: {
      title: 'Стек',
      note: 'Платформа выбирается на брифе. Кроссплатформа быстрее и дешевле, натив глубже.',
      groups: [
        { name: 'Cross-platform', items: ['Flutter', 'React Native', 'Expo'] },
        { name: 'Native', items: ['Swift', 'Kotlin'] },
        { name: 'Backend', items: ['FastAPI', 'PostgreSQL', 'Firebase'] },
        { name: 'Release', items: ['CI/CD', 'App Store', 'Google Play'] },
      ],
    },
    timeline: {
      title: 'Этапы',
      steps: [
        {
          title: 'Бриф и выбор платформы',
          time: '3–5 дней',
          text: 'Сценарии, аудитория, требования к устройству. На выходе платформа, этапы и точная смета.',
        },
        {
          title: 'Карта экранов и прототип',
          time: '1 неделя',
          text: 'Схема всех экранов и переходов. Поток согласуем на кликабельном прототипе.',
        },
        {
          title: 'Дизайн',
          time: '1–2 недели',
          text: 'Макеты под iOS и Android. У платформ разные правила — одну картинку в два места не вставляем.',
        },
        {
          title: 'Разработка, спринты по 2 недели',
          time: '4–8 недель',
          text: 'В конце каждого спринта сборка, которую можно поставить себе на телефон. Работа видна каждый день.',
        },
        {
          title: 'Тесты и публикация',
          time: '1–2 недели',
          text: 'Тесты на реальных устройствах, карточки магазинов, ревью. Проверка Apple занимает несколько дней.',
        },
        {
          title: 'Гарантия и обновления',
          time: '3 месяца',
          text: 'Мониторинг падений, исправления и новые версии. Аккаунты магазинов оформлены на вас.',
        },
      ],
    },
    notFor: {
      title: 'Когда приложение вам не нужно',
      lead: 'Приложение дороже сайта и окупается только повторным использованием. Эти вопросы мы задаём на брифе сами.',
      items: [
        {
          cond: 'Пользователь возвращается пару раз в год',
          text: 'С такой частотой приложение никто не ставит, а поставившие удаляют его за месяц. Мобильный сайт делает ту же работу и не требует установки.',
        },
        {
          cond: 'Приложение будет только показывать информацию',
          text: 'Каталог, цены, контакты — работа для сайта, который ещё и находится в поиске. Приложение в поиске не видно, его нужно продвигать отдельно.',
        },
        {
          cond: 'Аудитория не оправдывает две платформы',
          text: 'Вторая платформа удваивает бюджет. Выпустите одну и посмотрите на цифры.',
        },
        {
          cond: 'Нет бюджета на продвижение',
          text: 'В магазине приложение само себя не находит. Установки требуют рекламы, существующей базы или офлайн-канала; без этого релиз пройдёт в тишине. Бюджет на продвижение планируется до разработки, а не после релиза.',
        },
      ],
      close: 'Узнали себя — всё равно напишите. Бесплатно скажем, что подходит: мобильный сайт, PWA или приложение; иногда ответ — «приложение не нужно».',
    },
    cases: { title: 'Кейс по направлению', slugs: ['mindtrick'] },
    faq: {
      title: 'Частые вопросы',
      items: [
        {
          q: 'Flutter или натив — что выбрать?',
          a: 'Для большинства задач Flutter. Одна кодовая база собирается в оба магазина, сроки и поддержка сокращаются примерно вдвое. Натив — Swift и Kotlin — нужен там, где приложение упирается в платформу: тяжёлая графика, глубокая работа с камерой, системные интеграции. Это уже два приложения и два бюджета. Выбор обосновываем письменно на этапе оценки.',
        },
        {
          q: 'Приложение точно пройдёт в App Store?',
          a: 'Публикация входит в работу, правила магазинов учитываем заранее. Ревью Apple обычно занимает несколько дней; если придёт отказ, устраняем причину и подаём повторно — это в рамках гарантии.',
        },
        {
          q: 'iOS и Android выйдут одновременно?',
          a: 'На кроссплатформе да, обе сборки идут одним релизом. На нативе обычно выпускают сначала одну платформу, потом вторую — это позволяет разложить бюджет по этапам.',
        },
        {
          q: 'На кого оформляются аккаунты магазинов?',
          a: 'На вас. Apple Developer и Google Play регистрируются на вашу компанию, мы получаем только доступ. Приложение остаётся вашим, и смена подрядчика ничего не ломает.',
        },
        {
          q: 'Как выходят обновления после релиза?',
          a: 'Три месяца гарантии на падения и ошибки, новые функции — отдельные небольшие проекты, а CI/CD настроен, поэтому новая версия уходит в магазин за несколько часов.',
        },
      ],
    },
    cta: {
      title: 'Расскажите про приложение',
      text: 'Хватит короткого брифа: кто будет пользоваться, как часто, какие функции устройства нужны. За 3–5 дней вернёмся с выбором платформы и сметой.',
      subject: 'Бриф — Мобильное приложение (ru)',
    },
  },

  en: {
    meta: {
      title: 'Mobile app development — iOS and Android — EXCLAMATION',
      description:
        'Flutter, React Native, Swift and Kotlin. A working MVP in 6–10 weeks, store submission 1–2 weeks, a free 3–5 day estimate. Store accounts stay yours.',
    },
    eyebrow: 'Service',
    titleMuted: 'Mobile app development —',
    titleMain: 'two platforms, one team.',
    lead: 'A mobile app is a product that stays on the home screen and can send a push notification; that is what separates it from a website. A working MVP typically takes 6–10 weeks, a full product 3–5 months, and store submission adds another 1–2 weeks. After a short brief we come back within 3–5 days with a platform recommendation, stages and a firm quote, and that stage is not billed.',
    facts: [
      { label: 'Working MVP', value: '6–10 weeks' },
      { label: 'Store submission', value: '1–2 weeks' },
      { label: 'Estimate', value: '3–5 days' },
    ],
    introTitle: 'What two platforms actually cost',
    intro: [
      'The number that matters on a mobile project is not the build price, it is the cost of every change afterwards multiplied by the number of codebases you are maintaining. Native means two: a Swift app and a Kotlin app, two sets of release notes, two review queues, and two implementations of every feature you add for the rest of the product’s life. Cross-platform means one.',
      'That is why Flutter is our default. One codebase compiles to both stores, the interface is drawn by the framework so it stays identical across platforms, and both the initial timeline and the ongoing support cost fall by roughly half. For a storefront, an account area, a tracker, a booking flow, a delivery or a loyalty programme, that is comfortably enough.',
      'Native earns its second codebase when the app pushes against the platform itself: heavy graphics and animation at high frame rates, serious camera or video processing, deep system integration such as widgets, watch apps or background geolocation that has to be gentle on battery. If your product is one of those, cross-platform starts fighting you around the third month, and it is cheaper to hear that before the start than after it.',
      'Release cadence is the other thing worth planning for. Apple reviews every submission, which usually takes a few days and occasionally comes back with a rejection to answer. We set up CI/CD during the build so a new version reaches the stores in hours rather than days of manual packaging, and we keep the store accounts registered to your company so nothing about the release depends on us being in the room.',
    ],
    scope: {
      title: 'What the work covers',
      includesTitle: 'Included',
      includes: [
        'User journeys and a screen map',
        'Platform recommendation and architecture',
        'UI design: layouts for iOS and Android',
        'The app itself, on both platforms',
        'Backend and API',
        'Push notifications and analytics',
        'Offline mode where the scenario needs it',
        'Testing on real devices and emulators',
        'Submission to the App Store and Google Play',
      ],
      excludesTitle: 'Not included',
      excludes: [
        'Annual Apple and Google developer account fees',
        'Copywriting and translation',
        'Promo video production for the stores',
        'Running advertising campaigns',
        'Server hosting fees',
      ],
      deliverTitle: 'What you receive',
      deliver: [
        'The app in both stores, under your accounts',
        'The repository in your account',
        'The backend and API documentation',
        'Analytics and crash reporting connected',
        'CI/CD for shipping new versions',
        'Monitoring and a 3-month warranty',
      ],
    },
    pricing: {
      title: 'What drives the price',
      lead: 'We do not publish a price list: "an app" covers a three-screen MVP and a platform with payments and maps equally. These are what move a quote.',
      drivers: [
        'Screen count, and how many need unique logic rather than a shared component',
        'Platform choice: cross-platform is one codebase, native is two projects',
        'Backend: whether an API already exists or is written from scratch',
        'Device features: camera, GPS, offline, Bluetooth, biometrics',
        'Payments and store rules: in-app purchases bring their own requirements',
      ],
      note: 'After the brief you get the platform recommendation, the stages and a firm quote within 3–5 days. That stage is free and commits you to nothing.',
    },
    stack: {
      title: 'Stack',
      note: 'The platform is chosen on the brief. Cross-platform is faster and cheaper; native goes deeper.',
      groups: [
        { name: 'Cross-platform', items: ['Flutter', 'React Native', 'Expo'] },
        { name: 'Native', items: ['Swift', 'Kotlin'] },
        { name: 'Backend', items: ['FastAPI', 'PostgreSQL', 'Firebase'] },
        { name: 'Release', items: ['CI/CD', 'App Store', 'Google Play'] },
      ],
    },
    timeline: {
      title: 'Stages',
      steps: [
        {
          title: 'Brief and platform choice',
          time: '3–5 days',
          text: 'Scenarios, audience, device requirements. Output: a platform, a stage plan and a firm quote.',
        },
        {
          title: 'Screen map and prototype',
          time: '1 week',
          text: 'A diagram of every screen and transition. The flow is signed off on a clickable prototype.',
        },
        {
          title: 'Design',
          time: '1–2 weeks',
          text: 'Layouts for iOS and Android. The platforms have different conventions; we do not paste one picture into both.',
        },
        {
          title: 'Development, two-week sprints',
          time: '4–8 weeks',
          text: 'Each sprint ends in a build you can install on your own phone. The work is visible daily.',
        },
        {
          title: 'Testing and submission',
          time: '1–2 weeks',
          text: 'Testing on real devices, store listings, review. Apple’s review usually takes a few days.',
        },
        {
          title: 'Warranty and updates',
          time: '3 months',
          text: 'Crash monitoring, fixes and new versions. The store accounts are registered to you.',
        },
      ],
    },
    notFor: {
      title: 'When you do not need this',
      lead: 'An app costs more than a site and only pays back through repeat use. We raise these on the brief ourselves.',
      items: [
        {
          cond: 'People would come back twice a year',
          text: 'Nobody installs an app at that frequency, and the few who do delete it within a month. A mobile site does the same job with no install step.',
        },
        {
          cond: 'The app would only display information',
          text: 'A catalogue, prices and contacts are a website’s job, and a website is also findable in search. An app is not: it has to be marketed separately.',
        },
        {
          cond: 'The audience does not justify two platforms',
          text: 'If nearly all your users are on one platform, shipping the second at the same time doubles the budget. Releasing one and reading the numbers is cheaper.',
        },
        {
          cond: 'There is no budget to promote it',
          text: 'An app does not find its own users in the store. Installs need advertising, an existing customer base or an offline channel; without one the launch passes in silence.',
        },
      ],
      close: 'If one of these describes you, write anyway. We will tell you for free whether a mobile site, a PWA or an app fits the job — and sometimes the answer is that you do not need an app, which we are not shy about saying.',
    },
    cases: { title: 'Related work', slugs: ['mindtrick'] },
    faq: {
      title: 'Frequent questions',
      items: [
        {
          q: 'Flutter or native — which should we pick?',
          a: 'For most jobs, Flutter: one codebase reaches both stores and roughly halves both the timeline and the ongoing support cost. Native is for heavy graphics, serious camera work or deep system integration. We justify the choice in writing during the estimate.',
        },
        {
          q: 'Will the app definitely get into the App Store?',
          a: 'Submission is part of the work and we design against the store rules from the start. Apple’s review usually takes a few days; if a rejection comes back we address the reason and resubmit, and that is inside the warranty.',
        },
        {
          q: 'Will iOS and Android launch together?',
          a: 'On cross-platform, yes — both builds ship as one release. On native, one platform usually goes first and the second follows, which lets the budget be split across stages.',
        },
        {
          q: 'Whose name are the store accounts in?',
          a: 'Yours. Apple Developer and Google Play are registered to your company and we are granted access. The app stays yours, and changing contractor breaks nothing.',
        },
        {
          q: 'How do updates work after release?',
          a: 'Three months of warranty covers crashes and defects. New features are their own small projects. CI/CD is set up during the build, so a new version reaches the stores in hours.',
        },
      ],
    },
    cta: {
      title: 'Tell us about the app',
      text: 'A short brief is enough: who will use it, how often, and which device features it needs. We come back within 3–5 days with a platform recommendation and a quote.',
      subject: 'Brief — Mobile app (en)',
    },
  },
};

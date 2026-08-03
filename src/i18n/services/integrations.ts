import type { ServiceCopy } from './types';
import type { Locale } from '../index';

/**
 * Integrations and automation, written three times.
 *
 * Azerbaijani argues from where the hours actually disappear in a local
 * business — re-typing the same order into three systems — and names the
 * connections people ask for by name. Russian argues the engineering question
 * that market asks: webhook or queue, and what happens when the other side is
 * down. English argues integration as reliability work — retries, idempotency,
 * observability — because "we connected two APIs" is not the hard part and an
 * outsourcing buyer knows it.
 */
export const integrations: Record<Locale, ServiceCopy> = {
  az: {
    meta: {
      title: 'İnteqrasiya və avtomatlaşdırma, Bakı — EXCLAMATION',
      description:
        '1C, AmoCRM, WhatsApp, ödəniş və çatdırılma servisləri ilə inteqrasiya. Bir inteqrasiya 1–2 həftə, avtomatlaşdırma paketi 3–6 həftə. Qiymətləndirmə pulsuz.',
    },
    eyebrow: 'Xidmət',
    titleMuted: 'İnteqrasiya və avtomatlaşdırma —',
    titleMain: 'eyni məlumatı iki dəfə yazmamaq.',
    lead: 'İnteqrasiya — iki sistemin bir-birinə məlumatı özünün ötürməsidir: sifariş saytdan 1C-yə, ödəniş bankdan CRM-ə, qalıq anbardan mağazaya. Bir inteqrasiya üçün tipik müddət 1–2 həftə, bir neçə sistemi birləşdirən avtomatlaşdırma paketi üçün 3–6 həftə. Brifdən sonra 3–5 gün ərzində sxem, mərhələlər və dəqiq smeta veririk — bu mərhələ ödənişsizdir.',
    facts: [
      { label: 'Bir inteqrasiya', value: '1–2 həftə' },
      { label: 'Avtomatlaşdırma paketi', value: '3–6 həftə' },
      { label: 'Qiymətləndirmə', value: '3–5 gün' },
    ],
    introTitle: 'Saatlar harada itir',
    intro: [
      'Tipik gün belə görünür: sifariş WhatsApp-a gəlir, menecer onu Excel-ə yazır, sonra 1C-yə keçirir, sonra kuryerə mesaj atır, sonra müştəriyə izləmə nömrəsini göndərir. Beş addımın dördü — eyni məlumatın bir yerdən başqa yerə köçürülməsidir. Bu, gündə bir neçə saat və hər addımda səhv ehtimalıdır.',
      'İnteqrasiya bu addımları silir. Sifariş bir dəfə yaranır və özü lazım olan yerlərə düşür; adam yalnız qərar tələb edən yerdə qalır. Nəticə iki rəqəmlə ölçülür: menecerin qazandığı vaxt və düşən səhv sayı. FLEKS keysimizdə ödəniş və çek rəsmiləşdirmə vaxtı 80% azaldı, balans hesablamasında əl səhvi isə sıfıra düşdü.',
      'Ən çox istənilən bağlantılar Azərbaycanda təxminən eynidir: 1C ilə qalıq və sənəd mübadiləsi, AmoCRM və ya Bitrix24 ilə lidlərin ötürülməsi, WhatsApp və telefoniya ilə müştəri kanalları, bank ekvayrinqi ilə ödəniş statusları, kuryer xidmətləri ilə izləmə. Bunların hamısının API-si var və hamısı ilə işləmişik.',
      'İşin əsl çətinliyi iki API-ni bir-birinə bağlamaq deyil — bu bir günlük işdir. Çətinlik odur ki, o biri tərəf gec-tez cavab verməyəcək: server düşəcək, limit bitəcək, format dəyişəcək. Etibarlı inteqrasiya bunu gözləyir və məlumatı itirmir: sorğu növbəyə düşür, təkrar cəhd edilir, iki dəfə göndərilən sifariş iki dəfə yaranmır. Aşağıda bu haqda ayrıca yazmışıq.',
    ],
    scope: {
      title: 'İşə nə daxildir',
      includesTitle: 'Daxildir',
      includes: [
        'Mövcud proseslərin və sistemlərin auditi',
        'Məlumat axını sxemi: nə haradan haraya gedir',
        'API-lərin öyrənilməsi və məhdudiyyətlərin aydınlaşdırılması',
        'İnteqrasiyanın özü və məlumat çevrilmələri',
        'Növbə, təkrar cəhd və təkrarlanmadan qorunma',
        'Səhvlərin loqlanması və bildirişlər',
        'Sınaq mühitində tam ssenari testi',
        'Monitorinq: nə vaxt sındı və nəyə görə',
        'Sənədləşmə: sxem və dəstək təlimatı',
      ],
      excludesTitle: 'Daxil deyil',
      excludes: [
        'Üçüncü tərəf servislərin abunə haqqı',
        'Qoşulan sistemlərin özlərinin lisenziyaları',
        'Bank və ya operatorla müqavilənin bağlanması',
        'Köhnə sistemin yenidən yazılması',
        'Məlumatların əl ilə təmizlənməsi',
      ],
      deliverTitle: 'Nəticədə nə alırsınız',
      deliver: [
        'İşlək inteqrasiya sizin infrastrukturunuzda',
        'Repozitoriya və konfiqurasiya sizin hesabınızda',
        'Məlumat axını sxemi, yazılı şəkildə',
        'Monitorinq və səhv bildirişləri',
        'Təkrar işə salma və rollback təlimatı',
        'Zəmanət 3 ay',
      ],
    },
    pricing: {
      title: 'Qiymət nədən asılıdır',
      lead: 'Hazır qiymət cədvəli vermirik: bir inteqrasiya bir həftə də, bir ay da çəkə bilər — fərq API-nin keyfiyyətindədir. Smetanı bunlar dəyişir.',
      drivers: [
        'Sistemlərin sayı və bağlantıların istiqaməti: bir tərəfli, yoxsa iki tərəfli',
        'API-nin vəziyyəti: sənədləşdirilmiş REST, yoxsa köhnə format və ya heç nə',
        'Məlumatın həcmi və tezliyi: gündə bir sinxron, yoxsa real vaxt',
        'Çevrilmələrin mürəkkəbliyi: sahələr üst-üstə düşürmü, yoxsa hər biri qaydayla hesablanır',
        'Etibarlılıq tələbləri: itki yolverilməzdirsə, növbə və təkrar cəhd ayrıca işdir',
      ],
      note: 'Brifdən sonra 3–5 gün ərzində sxemi, mərhələləri və dəqiq smetanı veririk. Bu mərhələ ödənişsizdir və sizi heç nəyə borclu etmir.',
    },
    stack: {
      title: 'Stek',
      note: 'Tapşırığa görə seçilir. Sadə bağlantı webhook-la, ağır axın növbə ilə qurulur.',
      groups: [
        { name: 'Protocols', items: ['REST API', 'Webhooks', 'GraphQL'] },
        { name: 'Queues', items: ['Celery', 'RabbitMQ', 'Kafka'] },
        { name: 'Systems', items: ['1C', 'AmoCRM', 'Bitrix24', 'WhatsApp API'] },
        { name: 'Operations', items: ['Docker', 'CI/CD', 'Monitoring'] },
      ],
    },
    timeline: {
      title: 'Mərhələlər',
      steps: [
        {
          title: 'Audit və məlumat axını sxemi',
          time: '3–5 gün',
          text: 'Hansı sistemlər var, kim nəyi əllə köçürür, hansı addım ən çox vaxt aparır. Çıxışda sxem və smeta.',
        },
        {
          title: 'API-lərin yoxlanması',
          time: '2–4 gün',
          text: 'Sənədlər, limitlər, sınaq açarları. Burada məlum olur ki, hansısa tərəfdə API yoxdur — belədirsə, əvvəlcədən deyirik.',
        },
        {
          title: 'İnteqrasiyanın qurulması',
          time: '1–3 həftə',
          text: 'Bağlantı, çevrilmələr, növbə və təkrar cəhd. Sınaq mühitində işləyən versiya.',
        },
        {
          title: 'Ssenari testləri',
          time: '3–5 gün',
          text: 'Normal axın, o biri tərəfin cavab vermədiyi hal, təkrar göndərmə, səhv format. Hər biri ayrıca yoxlanır.',
        },
        {
          title: 'Reliz və monitorinq',
          time: '2–4 gün',
          text: 'Canlıya keçid, bildirişlərin qurulması. İlk günlər axını birlikdə izləyirik.',
        },
        {
          title: 'Zəmanət',
          time: '3 ay',
          text: 'Səhvlər bizim üzərimizdədir. Tərəfdaş API-ni dəyişsə, bu ayrıca kiçik işdir — aşağıda izah etmişik.',
        },
      ],
    },
    notFor: {
      title: 'İnteqrasiya sizə nə vaxt lazım deyil',
      lead: 'Avtomatlaşdırma özünü yalnız təkrarla qaytarır. Bunları brifdə özümüz soruşuruq.',
      items: [
        {
          cond: 'Proses ayda bir dəfə və 15 dəqiqəyə görülür',
          text: 'İldə üç saat qazanmaq üçün inteqrasiya yazmaq və sonra onu illərlə dəstəkləmək sərfəli deyil. Belə hallarda hazır şablon və ya sadə ixrac kifayətdir.',
        },
        {
          cond: 'Sistemlərdən birinin API-si yoxdur',
          text: 'Bazaya birbaşa giriş və ya ixrac faylı yoxdursa, bağlanacaq yer yoxdur. Bəzən yeganə real yol — həmin sistemi dəyişmək, və bunu əvvəlcədən demək daha dürüstdür.',
        },
        {
          cond: 'Proses hər ay dəyişir',
          text: 'İnteqrasiya bugünkü qaydanı kodda sabitləyir. Qayda hələ oturmayıbsa, hər dəyişiklik yenidən iş deməkdir; əvvəl prosesi sabitləmək lazımdır.',
        },
        {
          cond: 'Məlumatın həcmi kiçikdir',
          text: 'Gündə beş sifarişi əllə köçürmək bir neçə dəqiqədir. Bu həcmdə avtomatlaşdırma özünü illərlə qaytarmayacaq — və biz bunu sizin əvəzinizə hesablayacağıq.',
        },
      ],
      close: 'Bu bəndlərdən biri sizin haqqınızdadırsa, yenə yazın. Auditi pulsuz edirik və çox vaxt nəticə «bu addımı avtomatlaşdırmayın, o birini avtomatlaşdırın» olur.',
    },
    cases: { title: 'Bu istiqamətdə keyslər', slugs: ['crm-portal', 'merkuri'] },
    faq: {
      title: 'Tez-tez verilən suallar',
      items: [
        {
          q: 'Sistemin API-si yoxdursa nə olacaq?',
          a: 'Variantlara baxırıq: bazaya birbaşa giriş, planlı ixrac faylı, bəzən isə interfeys səviyyəsində avtomatlaşdırma. Heç biri mümkün deyilsə, bunu brifdə deyirik — uydurma həll təklif etmirik.',
        },
        {
          q: 'O biri tərəf cavab verməyəndə nə olur?',
          a: 'Sorğu itmir: növbədə qalır və artan intervalla təkrar göndərilir. Bir neçə uğursuz cəhddən sonra bildiriş gəlir. Sistem bərpa olunanda növbə özü boşalır, məlumat isə yerində olur.',
        },
        {
          q: 'Sifariş iki dəfə yaranmayacaq ki?',
          a: 'Xeyr. Hər əməliyyatın unikal açarı olur və təkrar gələn sorğu yeni yazı yaratmır. Bu, təkrar cəhdlərin təhlükəsiz olması üçün lazımdır və hər inteqrasiyada standart olaraq qurulur.',
        },
        {
          q: 'Mövcud sistemləri dəyişmək lazım olacaqmı?',
          a: 'Adətən yox — inteqrasiya onların üstünə qurulur. Dəyişmək yalnız o halda lazım olur ki, sistemin heç bir giriş nöqtəsi olmasın; bunu audit mərhələsində aydınlaşdırırıq.',
        },
        {
          q: 'Tərəfdaş API-ni dəyişsə, kim düzəldir?',
          a: 'Üç ay zəmanət ərzində biz, ödənişsiz. Sonra bu kiçik ayrıca işdir. Xəbərdar edirik: xarici API-lər ildə bir-iki dəfə dəyişir, buna görə monitorinq qururuq — sındığını siz yox, biz görürük.',
        },
      ],
    },
    cta: {
      title: 'Hansı addımları avtomatlaşdıraq',
      text: 'Qısa brif kifayətdir: hansı sistemlər var, nə əllə köçürülür, gündə neçə dəfə. 3–5 gün ərzində sxem və smeta ilə qayıdırıq.',
      subject: 'Brief — İnteqrasiya (az)',
    },
  },

  ru: {
    meta: {
      title: 'Интеграции и автоматизация процессов — EXCLAMATION',
      description:
        'Интеграция 1С, AmoCRM, Bitrix24, WhatsApp, платежей и доставки. Одна связка 1–2 недели, пакет автоматизации 3–6 недель. Оценка за 3–5 дней бесплатно.',
    },
    eyebrow: 'Услуга',
    titleMuted: 'Интеграции и автоматизация —',
    titleMain: 'чтобы не вводить одно и то же дважды.',
    lead: 'Интеграция — это когда две системы передают данные друг другу сами: заказ с сайта в 1С, платёж из банка в CRM, остаток со склада в магазин. Одна связка занимает 1–2 недели, пакет автоматизации из нескольких систем — 3–6 недель. После брифа за 3–5 дней возвращаемся со схемой потоков, этапами и точной сметой; этап не оплачивается.',
    facts: [
      { label: 'Одна связка', value: '1–2 недели' },
      { label: 'Пакет автоматизации', value: '3–6 недель' },
      { label: 'Оценка', value: '3–5 дней' },
    ],
    introTitle: 'Вебхук, очередь и то, что между ними',
    intro: [
      'Связать два API — работа на день. Всё остальное время уходит на вопрос, что произойдёт, когда вторая сторона не ответит. Она не ответит обязательно: у сервиса упадёт сервер, кончится лимит запросов, поменяется формат поля. Разница между интеграцией, которая работает год, и той, которую чинят каждый месяц, — целиком в этом.',
      'Простые связки делаются вебхуком: событие произошло — отправили запрос. Это дёшево и подходит там, где потеря одного события не критична: уведомление, метка в аналитике, сообщение в чат. Как только речь заходит о заказах, платежах и остатках, вебхука мало: между системами ставится очередь, каждое сообщение подтверждается получателем, неудачная доставка повторяется с нарастающим интервалом.',
      'Второй обязательный элемент — идемпотентность. Если запрос повторили, заказ не должен создаться дважды. Достигается это уникальным ключом операции, и без него любые повторные попытки превращаются из страховки в источник дублей. Мы ставим это по умолчанию, а не как отдельную опцию за отдельные деньги.',
      'Третий — наблюдаемость. Интеграция ломается тихо: никто не получает ошибку, просто заказы перестают доходить, и замечают это через день по жалобе клиента. Поэтому в каждую связку встраивается мониторинг и уведомление: падение видим мы, а не вы. В кейсе Merkuri именно на этом держится обмен с таможенными базами — данные идут между участниками и подтверждаются, а не отправляются в пустоту.',
    ],
    scope: {
      title: 'Что входит в работу',
      includesTitle: 'Входит',
      includes: [
        'Аудит текущих процессов и систем',
        'Схема потоков данных: что откуда куда идёт',
        'Разбор API и выяснение ограничений',
        'Сама интеграция и преобразование данных',
        'Очередь, повторные попытки и защита от дублей',
        'Логирование ошибок и уведомления',
        'Тестирование сценариев на тестовом контуре',
        'Мониторинг: когда сломалось и почему',
        'Документация: схема и инструкция поддержки',
      ],
      excludesTitle: 'Не входит',
      excludes: [
        'Подписки на сторонние сервисы',
        'Лицензии подключаемых систем',
        'Заключение договора с банком или оператором',
        'Переписывание старой системы',
        'Ручная чистка данных',
      ],
      deliverTitle: 'Что вы получаете',
      deliver: [
        'Работающую интеграцию в вашей инфраструктуре',
        'Репозиторий и конфигурацию в вашем аккаунте',
        'Схему потоков данных в письменном виде',
        'Мониторинг и уведомления об ошибках',
        'Инструкцию по перезапуску и откату',
        'Гарантию 3 месяца',
      ],
    },
    pricing: {
      title: 'От чего зависит цена',
      lead: 'Прайс-листа не даём: одна связка может занять неделю, а может месяц — разница в качестве чужого API. Смету двигает вот что.',
      drivers: [
        'Число систем и направление обмена: односторонний или двусторонний',
        'Состояние API: документированный REST или устаревший формат, а иногда ничего',
        'Объём и частота данных: одна синхронизация в сутки или реальное время',
        'Сложность преобразований: поля совпадают или каждое считается по правилу',
        'Требования к надёжности: если потери недопустимы, очередь и повторы — отдельная работа',
      ],
      note: 'После брифа за 3–5 дней отдаём схему, этапы и точную смету. Этап бесплатный и ни к чему не обязывает.',
    },
    stack: {
      title: 'Стек',
      note: 'Подбирается под задачу. Простая связка живёт на вебхуках, тяжёлый поток — на очереди.',
      groups: [
        { name: 'Protocols', items: ['REST API', 'Webhooks', 'GraphQL'] },
        { name: 'Queues', items: ['Celery', 'RabbitMQ', 'Kafka'] },
        { name: 'Systems', items: ['1C', 'AmoCRM', 'Bitrix24', 'WhatsApp API'] },
        { name: 'Operations', items: ['Docker', 'CI/CD', 'Monitoring'] },
      ],
    },
    timeline: {
      title: 'Этапы',
      steps: [
        {
          title: 'Аудит и схема потоков',
          time: '3–5 дней',
          text: 'Какие системы есть, кто что переносит руками, какой шаг съедает больше времени. На выходе схема и смета.',
        },
        {
          title: 'Разбор API',
          time: '2–4 дня',
          text: 'Документация, лимиты, тестовые ключи. Здесь выясняется, что у одной из сторон API нет — если так, говорим сразу.',
        },
        {
          title: 'Разработка связки',
          time: '1–3 недели',
          text: 'Подключение, преобразования, очередь и повторы. Работающая версия на тестовом контуре.',
        },
        {
          title: 'Тестирование сценариев',
          time: '3–5 дней',
          text: 'Нормальный поток, недоступность второй стороны, повторная отправка, битый формат. Каждый проверяется отдельно.',
        },
        {
          title: 'Релиз и мониторинг',
          time: '2–4 дня',
          text: 'Переключение на боевой контур, настройка уведомлений. Первые дни следим за потоком вместе.',
        },
        {
          title: 'Гарантия',
          time: '3 месяца',
          text: 'Ошибки на нас. Если партнёр поменяет API — это отдельная небольшая работа, подробнее ниже в вопросах.',
        },
      ],
    },
    notFor: {
      title: 'Когда интеграция вам не нужна',
      lead: 'Автоматизация окупается только повторяемостью. Эти вопросы мы задаём на брифе сами.',
      items: [
        {
          cond: 'Процесс делается раз в месяц за 15 минут',
          text: 'Ради трёх часов в год писать интеграцию и потом годами её поддерживать невыгодно. Здесь хватит готового шаблона или простой выгрузки.',
        },
        {
          cond: 'У одной из систем нет API',
          text: 'Если нет ни доступа к базе, ни выгрузки, подключаться не к чему. Иногда единственный честный ответ — менять саму систему, и мы скажем это до старта.',
        },
        {
          cond: 'Процесс меняется каждый месяц',
          text: 'Интеграция фиксирует сегодняшнее правило в коде. Пока правило не устоялось, каждое изменение — это переделка; сначала стабилизируйте процесс.',
        },
        {
          cond: 'Объём данных маленький',
          text: 'Перенести пять заказов в день руками — это несколько минут. На таком объёме автоматизация не окупится годами, и мы посчитаем это за вас.',
        },
      ],
      close: 'Если один из пунктов про вас — всё равно напишите. Аудит бесплатный, и часто вывод звучит как «этот шаг не автоматизируйте, автоматизируйте соседний».',
    },
    cases: { title: 'Кейсы по направлению', slugs: ['crm-portal', 'merkuri'] },
    faq: {
      title: 'Частые вопросы',
      items: [
        {
          q: 'Что делать, если у системы нет API?',
          a: 'Смотрим варианты: прямой доступ к базе, выгрузка по расписанию, иногда автоматизация на уровне интерфейса. Если не подходит ничего, говорим об этом на брифе — выдуманных решений не предлагаем.',
        },
        {
          q: 'Что происходит, когда вторая сторона недоступна?',
          a: 'Запрос не теряется: он остаётся в очереди и повторяется с нарастающим интервалом. После нескольких неудачных попыток приходит уведомление. Когда сервис поднимается, очередь разбирается сама.',
        },
        {
          q: 'Не появятся ли дубли заказов?',
          a: 'Нет. У каждой операции уникальный ключ, и повторный запрос не создаёт новую запись. Без этого повторные попытки превращаются из страховки в источник дублей, поэтому ставим по умолчанию.',
        },
        {
          q: 'Придётся ли менять текущие системы?',
          a: 'Обычно нет — интеграция строится поверх них. Замена нужна только там, где у системы нет ни одной точки входа, и это выясняется на этапе аудита, а не на середине разработки.',
        },
        {
          q: 'Партнёр поменял API — кто чинит?',
          a: 'В течение трёх месяцев гарантии мы, бесплатно. Дальше это отдельная небольшая работа. Предупреждаем честно: внешние API меняются раз-два в год, поэтому мы ставим мониторинг — поломку видим мы, а не вы через жалобу клиента.',
        },
      ],
    },
    cta: {
      title: 'Какие шаги автоматизируем',
      text: 'Хватит короткого брифа: какие системы есть, что переносится руками, сколько раз в день. За 3–5 дней вернёмся со схемой и сметой.',
      subject: 'Бриф — Интеграции (ru)',
    },
  },

  en: {
    meta: {
      title: 'System integration and process automation — EXCLAMATION',
      description:
        'Connecting 1C, CRMs, payments, delivery and messaging with queues, retries and monitoring. One integration 1–2 weeks. Free 3–5 day estimate.',
    },
    eyebrow: 'Service',
    titleMuted: 'Integration and automation —',
    titleMain: 'built for the day it fails.',
    lead: 'An integration is two systems passing data to each other without a person in between: an order from the site into 1C, a payment from the bank into the CRM, stock from the warehouse into the store. A single integration typically takes 1–2 weeks; an automation package spanning several systems takes 3–6. After a short brief we return within 3–5 days with a data-flow diagram, stages and a firm quote, and that stage is not billed.',
    facts: [
      { label: 'One integration', value: '1–2 weeks' },
      { label: 'Automation package', value: '3–6 weeks' },
      { label: 'Estimate', value: '3–5 days' },
    ],
    introTitle: 'Connecting two APIs is the easy day',
    intro: [
      'Wiring one endpoint to another takes about a day. Everything after that is spent on a single question: what happens when the other side does not answer. It will not answer, reliably — a server goes down, a rate limit is reached, a field changes shape without notice. The entire difference between an integration that runs for a year and one that gets repaired every month lives in how that case was handled.',
      'Light connections can run on webhooks: an event happens, a request goes out. That is cheap and appropriate where losing one event does not matter — a notification, an analytics marker, a message posted to a channel. The moment orders, payments or stock are involved, a webhook alone is not enough. A queue goes between the systems, every message is acknowledged by the receiver, and a failed delivery is retried on a widening interval rather than dropped.',
      'The second requirement is idempotency. If a request is retried, the order must not be created twice. That is achieved with a unique operation key, and without it retries stop being insurance and become a source of duplicates. We build it in by default rather than quoting it as an option.',
      'The third is observability, because integrations fail quietly. Nobody sees an error; orders simply stop arriving, and it is noticed a day later through a customer complaint. So monitoring and alerting are part of every connection we build: we see the break, not you. Our Merkuri project runs on exactly this — data moves between shippers, brokers and customs databases and is confirmed at each step rather than fired into the dark.',
    ],
    scope: {
      title: 'What the work covers',
      includesTitle: 'Included',
      includes: [
        'Audit of current processes and systems',
        'Data-flow diagram: what moves from where to where',
        'API review and confirmation of the limits',
        'The integration itself and the data transformations',
        'Queueing, retries and duplicate protection',
        'Error logging and alerting',
        'Scenario testing on a staging environment',
        'Monitoring: what broke and when',
        'Documentation: the diagram and a support guide',
      ],
      excludesTitle: 'Not included',
      excludes: [
        'Third-party service subscriptions',
        'Licences for the systems being connected',
        'Signing agreements with banks or operators',
        'Rewriting the legacy system',
        'Manual data cleanup',
      ],
      deliverTitle: 'What you receive',
      deliver: [
        'A working integration on your infrastructure',
        'Repository and configuration in your account',
        'The data-flow diagram, written down',
        'Monitoring and error alerts',
        'Restart and rollback instructions',
        'A 3-month warranty',
      ],
    },
    pricing: {
      title: 'What drives the price',
      lead: 'We do not publish a price list: one connection can take a week or a month, and the difference is the quality of somebody else’s API. These move a quote.',
      drivers: [
        'Number of systems and the direction: one-way or both ways',
        'API condition: documented REST, a legacy format, or nothing at all',
        'Data volume and frequency: a nightly sync or real time',
        'Transformation complexity: fields that map directly, or values computed by rules',
        'Reliability requirements: where loss is unacceptable, queueing and retries are their own scope',
      ],
      note: 'After the brief you get the diagram, the stages and a firm quote within 3–5 days. That stage is free and commits you to nothing.',
    },
    stack: {
      title: 'Stack',
      note: 'Chosen per task. A light connection lives on webhooks; heavy flow goes through a queue.',
      groups: [
        { name: 'Protocols', items: ['REST API', 'Webhooks', 'GraphQL'] },
        { name: 'Queues', items: ['Celery', 'RabbitMQ', 'Kafka'] },
        { name: 'Systems', items: ['1C', 'AmoCRM', 'Bitrix24', 'WhatsApp API'] },
        { name: 'Operations', items: ['Docker', 'CI/CD', 'Monitoring'] },
      ],
    },
    timeline: {
      title: 'Stages',
      steps: [
        {
          title: 'Audit and data-flow diagram',
          time: '3–5 days',
          text: 'Which systems exist, who re-types what by hand, and which step costs the most time. Output: a diagram and a quote.',
        },
        {
          title: 'API review',
          time: '2–4 days',
          text: 'Documentation, rate limits, test credentials. This is where a missing API surfaces — and we say so immediately.',
        },
        {
          title: 'Building the connection',
          time: '1–3 weeks',
          text: 'Transport, transformations, queueing and retries. A working version on staging.',
        },
        {
          title: 'Scenario testing',
          time: '3–5 days',
          text: 'The happy path, the other side being down, a duplicate send, a malformed payload. Each is tested separately.',
        },
        {
          title: 'Release and monitoring',
          time: '2–4 days',
          text: 'Cutover to production and alert configuration. We watch the flow with you for the first few days.',
        },
        {
          title: 'Warranty',
          time: '3 months',
          text: 'Defects are on us. If a partner changes their API, that is a separate small job — see the questions below.',
        },
      ],
    },
    notFor: {
      title: 'When you do not need this',
      lead: 'Automation only pays back through repetition. We raise these on the brief ourselves.',
      items: [
        {
          cond: 'The process runs once a month and takes 15 minutes',
          text: 'Writing an integration and then maintaining it for years to save three hours a year does not add up. A template or a simple export is enough here.',
        },
        {
          cond: 'One of the systems has no API',
          text: 'With no database access and no export there is nothing to connect to. Sometimes the only honest answer is to replace that system, and we will say so before the start.',
        },
        {
          cond: 'The process changes every month',
          text: 'An integration sets today’s rule in code. While the rule is still moving, every change is rework — stabilise the process first.',
        },
        {
          cond: 'The data volume is small',
          text: 'Re-typing five orders a day takes a few minutes. At that volume automation will not pay back for years, and we will do that arithmetic for you.',
        },
      ],
      close: 'If one of these describes you, write anyway. The audit is free, and the conclusion is often "do not automate that step, automate the one next to it".',
    },
    cases: { title: 'Related work', slugs: ['crm-portal', 'merkuri'] },
    faq: {
      title: 'Frequent questions',
      items: [
        {
          q: 'What if a system has no API?',
          a: 'We look at the options: direct database access, a scheduled export, sometimes automation at the interface level. If none of them work we say so on the brief rather than inventing a solution.',
        },
        {
          q: 'What happens when the other side is unavailable?',
          a: 'The request is not lost: it stays in the queue and is retried on a widening interval. After several failures an alert goes out. When the service recovers the queue drains itself and the data is intact.',
        },
        {
          q: 'Could orders be duplicated?',
          a: 'No. Every operation carries a unique key, so a repeated request does not create a second record. Without that, retries turn from insurance into a source of duplicates, which is why it is standard rather than optional.',
        },
        {
          q: 'Will we have to replace our current systems?',
          a: 'Usually not — the integration is built on top of them. Replacement is only necessary where a system offers no entry point at all, and that surfaces during the audit rather than halfway through the build.',
        },
        {
          q: 'A partner changed their API — who fixes it?',
          a: 'Within the three-month warranty, we do, at no cost. After that it is a separate small job. We flag this honestly: external APIs change once or twice a year, which is why monitoring is part of the build — we see the break, not you via a customer complaint.',
        },
      ],
    },
    cta: {
      title: 'Which steps should we automate',
      text: 'A short brief is enough: which systems you run, what gets re-typed by hand, and how many times a day. We come back within 3–5 days with a diagram and a quote.',
      subject: 'Brief — Integrations (en)',
    },
  },
};

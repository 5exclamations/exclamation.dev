import type { ServiceCopy } from './types';
import type { Locale } from '../index';

/**
 * CRM and ERP, written three times rather than translated once.
 *
 * The three languages argue differently on purpose. Azerbaijani leads with the
 * problem and the local market. Russian leads with the comparison everyone in
 * that market actually makes — boxed amoCRM/Bitrix24 against a custom build —
 * because that is the query behind the search. English leads with the outcome
 * and the ownership terms, for readers shopping an outsourcing partner.
 *
 * A word-swapped template would rank on none of those.
 */
export const crmErp: Record<Locale, ServiceCopy> = {
  az: {
    meta: {
      title: 'CRM və ERP sistemlərinin hazırlanması — EXCLAMATION',
      description:
        'Sıfırdan CRM və ERP: proseslərin təhlili, inteqrasiyalar, köçürmə. Tipik müddət 4–8 həftə, qiymətləndirmə 3–5 gün və pulsuz, zəmanət 3 ay.',
    },
    eyebrow: 'Xidmət',
    titleMuted: 'CRM və ERP sistemləri —',
    titleMain: 'sizin proseslərinizə görə.',
    lead: 'CRM və ERP — şirkətin müştərilərini, sifarişlərini və pul axınını bir yerdə saxlayan daxili sistemlərdir. Sıfırdan hazırlanan sistem üçün tipik müddət 4–8 həftə, mürəkkəb platforma üçün 2–4 aydır. Brifdən sonra 3–5 gün ərzində arxitektura, mərhələlər və dəqiq smeta veririk — bu mərhələ ödənişsizdir.',
    facts: [
      { label: 'Tipik müddət', value: '4–8 həftə' },
      { label: 'Qiymətləndirmə', value: '3–5 gün' },
      { label: 'Zəmanət', value: '3 ay' },
    ],
    introTitle: 'CRM və ERP haqqında',
    intro: [
      'CRM müştəri ilə işi aparır, ERP isə şirkətin daxili resurslarını — anbarı, maliyyəni, əməkdaşları. Praktikada bu sərhəd tez-tez itir: kiçik və orta biznesdə eyni sistem həm satış hunisini, həm qalıqları, həm də hesabatı daşıyır. Biz bunu bir məhsul kimi qururuq: modul-modul, sizin real prosesinizə görə, hazır qutunun məntiqinə uyğunlaşmağa məcbur etmədən.',
      'Hazır həllər — amoCRM, Bitrix24 və bənzərləri — sürətli başlanğıc verir və şirkətlərin çoxu üçün tamamilə kifayətdir. Problem o an başlayır ki, prosesiniz qutunun modelinə sığmır: qeyri-standart sövdələşmə mərhələləri, öz qiymət hesablama qaydanız, xüsusi sənəd formaları, Azərbaycan bazarına aid tələblər. Onda ya prosesi sındırırsınız, ya da hər ay artan abunənin üstünə plaginlərə və inteqratora ödəyirsiniz.',
      'Sıfırdan hazırlanan sistem bu seçimi aradan qaldırır. Kod ilk gündən sizin repozitoriyanızda qalır, məlumat sizin hesabınızdadır, istifadəçi sayına görə aylıq ödəniş yoxdur. Əvəzində başlanğıc daha uzun çəkir və sonrakı inkişaf üçün texniki komanda lazımdır. Bu, dürüst mübadilədir və biz onu gizlətmirik: aşağıda ayrıca bölmə var — «CRM sizə nə vaxt lazım deyil».',
      'Bu istiqamətdə iki tam dövrümüz var. CRM Portal — daşınmaz əmlak agentlikləri üçün: obyekt bazası, Kanban huni, WhatsApp və zəng inteqrasiyası. FLEKS — psixoloji mərkəz üçün ERP: müştəri balansları, seans ödənişləri, avtomatik PDF çeklər. Hər ikisi işləyir, nəticələri buraxılışdan sonra müştəri tərəfindən ölçülüb.',
    ],
    scope: {
      title: 'İşə nə daxildir',
      includesTitle: 'Daxildir',
      includes: [
        'Biznes proseslərinin təhlili və texniki tapşırıq',
        'Məlumat modeli və sistem arxitekturası',
        'İnterfeys dizaynı, bütün ekranların adaptiv maketləri',
        'Rollar və giriş hüquqlarının sistemi',
        'Satış hunisi, sifariş və ya sənəd axını',
        'Hesabatlar və rəhbər üçün analitika paneli',
        'Mövcud bazadan məlumatların köçürülməsi',
        'Funksional və yük testləri',
        'İstifadəçilər üçün təlim və sənədləşmə',
      ],
      excludesTitle: 'Daxil deyil',
      excludes: [
        'Server və hostinq abunəsi',
        'Üçüncü tərəf servislərin lisenziyaları',
        'Kataloqun və məhsul kartlarının doldurulması',
        'Reklam kampaniyalarının aparılması',
        'Mühasibat uçotunun özünün aparılması',
      ],
      deliverTitle: 'Nəticədə nə alırsınız',
      deliver: [
        'İşlək sistem sizin domeninizdə',
        'Repozitoriya sizin hesabınızda',
        'Texniki sənədlər və API təsviri',
        'Admin üçün qısa video təlimat',
        'Deploy və rollback skriptləri',
        'Monitorinq və 3 ay zəmanət',
      ],
    },
    pricing: {
      title: 'Qiymət nədən asılıdır',
      lead: 'Hazır qiymət cədvəli vermirik: eyni «CRM» sözünün arxasında iki həftəlik də, altı aylıq da layihə dayana bilər. Smetanı ən çox dəyişən amillər bunlardır.',
      drivers: [
        'Rolların sayı: yalnız menecermi, yoxsa menecer, rəhbər, anbardar və müştəri kabineti',
        'İnteqrasiyalar: 1C, ödəniş sistemi, WhatsApp, telefoniya — hər biri ayrıca iş həcmidir',
        'Köçürüləcək məlumatın həcmi və vəziyyəti: səliqəli Excel, yoxsa on illik köhnə baza',
        'Hesabatların mürəkkəbliyi: hazır cədvəllər, yoxsa şərtlərlə hesablanan göstəricilər',
        'Mobil: adaptiv veb kifayət edir, yoxsa ayrıca tətbiq lazımdır',
      ],
      note: 'Brifdən sonra 3–5 gün ərzində arxitekturanı, mərhələləri və dəqiq smetanı veririk. Bu mərhələ ödənişsizdir və sizi heç nəyə borclu etmir.',
    },
    stack: {
      title: 'Stek',
      note: 'Layihəyə görə seçilir. Aşağıdakılar CRM və ERP işlərində ən çox istifadə etdiklərimizdir.',
      groups: [
        { name: 'Backend', items: ['Django', 'FastAPI', 'PostgreSQL', 'Celery'] },
        { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript'] },
        { name: 'Integrations', items: ['REST API', 'Webhooks', 'WhatsApp API', '1C'] },
        { name: 'Infrastructure', items: ['Docker', 'Nginx', 'CI/CD', 'Monitoring'] },
      ],
    },
    timeline: {
      title: 'Mərhələlər',
      steps: [
        {
          title: 'Brif və proseslərin təhlili',
          time: '3–5 gün',
          text: 'Kimin hansı işi gördüyünü, hansı məlumatın harada saxlandığını və hansı addımın ən çox vaxt apardığını yazırıq.',
        },
        {
          title: 'Arxitektura və texniki tapşırıq',
          time: '1 həftə',
          text: 'Məlumat modeli, rollar, inteqrasiyaların siyahısı və mərhələlərə bölünmüş smeta. Bundan sonra qiymət dəyişmir.',
        },
        {
          title: 'Dizayn və prototip',
          time: '1–2 həftə',
          text: 'Əsas ekranların maketləri. Klik edilə bilən prototipdə prosesi razılaşdırırıq — kod yazılmazdan əvvəl.',
        },
        {
          title: 'Development, 2 həftəlik sprintlər',
          time: '3–6 həftə',
          text: 'Hər sprintin sonunda işlək demo. Task tracker və repozitoriya sizin tərəfdə, iş gündəlik görünür.',
        },
        {
          title: 'Köçürmə, test və reliz',
          time: '1–2 həftə',
          text: 'Köhnə bazadan məlumat köçürülür, yük testləri keçirilir, komanda öyrədilir. Buraxılış rollback imkanı ilə.',
        },
        {
          title: 'Zəmanət və dəstək',
          time: '3 ay',
          text: 'Monitorinq, bug fix və roadmap üzrə inkişaf. Sonra istəsəniz dəstək paketi, istəməsəniz — sistem sizindir.',
        },
      ],
    },
    notFor: {
      title: 'CRM sizə nə vaxt lazım deyil',
      lead: 'Bəzi hallarda CRM pul və vaxt itkisidir. Bu sualları layihəni götürməzdən əvvəl özümüz veririk — boş brif hər iki tərəfin bir həftəsini yeyir.',
      items: [
        {
          cond: 'Ayda 20-dən az sövdələşmə',
          text: 'Bu həcmdə səliqəli cədvəl və təqvim xatırlatması eyni işi görür. Sistem o vaxt qazandırır ki, əl ilə izləmək fiziki olaraq mümkün olmasın.',
        },
        {
          cond: 'Komandada bir-iki nəfər',
          text: 'CRM-in əsas dəyəri məlumatın adamlar arasında itməməsidir. Bir nəfər olanda itəcək yer yoxdur; hazır qutu daha ucuz və daha sürətli olacaq.',
        },
        {
          cond: 'Prosesin özü hələ formalaşmayıb',
          text: 'Hər ay yeni sxem sınayırsınızsa, sistem dünənki sxemi betonlaşdıracaq. Əvvəl prosesi sabitləyin, sonra avtomatlaşdırın — əks halda yenidən yazmağa pul verəcəksiniz.',
        },
        {
          cond: 'Hazır qutu tam oturur',
          text: 'Prosesiniz amoCRM və ya Bitrix24-ün modelinə uyğun gəlirsə, sıfırdan yazmağın mənası yoxdur. Bunu brifdə görsək, özümüz deyəcəyik.',
        },
      ],
      close: 'Əgər bu dörd bənddən biri sizin haqqınızdadırsa — yenə yazın. Pulsuz deyəcəyik ki, indi nə etmək daha faydalıdır; bəzən cavab «hələlik heç nə» olur, və bu da normal cavabdır.',
    },
    cases: { title: 'Bu istiqamətdə keyslər', slugs: ['crm-portal', 'fleks'] },
    faq: {
      title: 'Tez-tez verilən suallar',
      items: [
        {
          q: 'Hazır CRM-i öz altımıza uyğunlaşdırmaq ucuz olmazmı?',
          a: 'Çox vaxt bəli — və biz bunu dürüst deyirik. Qutu o zaman baha başa gəlir ki, prosesiniz onun modelinə sığmır: plaginlər, inteqrator, istifadəçi başına artan abunə. Brifdə hesablayıb hər iki variantı göstəririk.',
        },
        {
          q: 'Köhnə bazadakı məlumat itəcəkmi?',
          a: 'Xeyr. Köçürmə ayrıca mərhələdir: əvvəl sınaq köçürməsi, sonra yoxlama, sonra əsas köçürmə. Köhnə sistem paralel işləyir, siz razı olana qədər söndürülmür.',
        },
        {
          q: '1C və ya ödəniş sistemi ilə inteqrasiya olacaqmı?',
          a: 'Bəli, API və ya webhook verən istənilən servislə. 1C, AmoCRM, Bitrix24, ödəniş sistemləri, WhatsApp, telefoniya. Hər inteqrasiya smetada ayrıca sətirdir — gizli əlavə yoxdur.',
        },
        {
          q: 'Buraxılışdan sonra sistemi kim dəstəkləyir?',
          a: '3 ay zəmanət bizim tərəfimizdən: monitorinq, bug fix. Sonra ya dəstək paketi götürürsünüz, ya öz komandanıza verirsiniz — repozitoriya və sənədlər ilk gündən sizdədir, kilid yoxdur.',
        },
        {
          q: 'İşin gedişini necə görəcəyəm?',
          a: 'Task tracker-ə girişiniz var, sprintlər 2 həftədir, hər sprintin sonunda işlək demo. Hesabat gözləmək lazım deyil — statusu istənilən gün özünüz baxırsınız.',
        },
      ],
    },
    cta: {
      title: 'Tapşırığınızı danışın',
      text: 'Qısa brif kifayətdir: nə ilə işləyirsiniz, neçə nəfərsiniz, indi nə itir. 3–5 gün ərzində arxitektura və smeta ilə qayıdırıq.',
      subject: 'Brief — CRM / ERP (az)',
    },
  },

  ru: {
    meta: {
      title: 'Разработка CRM и ERP на заказ в Баку — EXCLAMATION',
      description:
        'CRM и ERP с нуля: анализ процессов, интеграции, перенос базы. Типичный срок 4–8 недель, оценка 3–5 дней бесплатно, гарантия 3 месяца, код у вас.',
    },
    eyebrow: 'Услуга',
    titleMuted: 'CRM и ERP на заказ —',
    titleMain: 'под ваш процесс, а не под чужую коробку.',
    lead: 'CRM и ERP — внутренние системы, которые держат клиентов, заказы и деньги компании в одном месте. Типичный срок разработки с нуля — 4–8 недель, сложная платформа — 2–4 месяца. После брифа за 3–5 дней возвращаемся с архитектурой, этапами и точной сметой; этот этап не оплачивается.',
    facts: [
      { label: 'Типичный срок', value: '4–8 недель' },
      { label: 'Оценка', value: '3–5 дней' },
      { label: 'Гарантия', value: '3 месяца' },
    ],
    introTitle: 'Коробка или своя система',
    intro: [
      'Почти каждый разговор о CRM начинается с одного вопроса: брать готовое или писать своё. Честный ответ — в большинстве случаев берите готовое. amoCRM, Bitrix24 и подобные запускаются за неделю, стоят предсказуемых денег и закрывают типовую воронку «лид — звонок — сделка» лучше, чем что-либо написанное с нуля за те же сроки.',
      'Своя система нужна там, где процесс не влезает в чужую модель. Признаки узнаваемые: у вас нестандартные этапы сделки, своя логика расчёта цены, собственные формы документов, требования рынка, которых нет в коробке. Тогда начинается второй этап — плагины, интегратор, подписка, которая растёт с каждым новым пользователем, и всё равно половина процесса живёт в отдельной таблице.',
      'Разработка на заказ убирает этот выбор. Код с первого дня в вашем репозитории, данные в вашем аккаунте, помесячной платы за пользователей нет. Взамен старт дольше и для развития нужна техническая команда. Это честный обмен, и мы его не прячем — ниже есть отдельный раздел о том, когда CRM вам не нужна вовсе.',
      'В этом направлении у нас два законченных цикла. CRM Portal — для агентств недвижимости: база объектов, Kanban-воронка, интеграция с WhatsApp и звонками, конверсия продаж выросла на 45%. FLEKS — ERP для психологического центра: балансы клиентов, списания за сеансы, автоматические PDF-чеки, оформление оплат стало быстрее на 80%. Цифры считал клиент после запуска, не мы.',
    ],
    scope: {
      title: 'Что входит в работу',
      includesTitle: 'Входит',
      includes: [
        'Анализ бизнес-процессов и техническое задание',
        'Модель данных и архитектура системы',
        'Дизайн интерфейса и адаптивные макеты всех экранов',
        'Роли и права доступа',
        'Воронка продаж, поток заказов или документооборот',
        'Отчёты и панель аналитики для руководителя',
        'Перенос данных из текущей базы',
        'Функциональное и нагрузочное тестирование',
        'Обучение команды и документация',
      ],
      excludesTitle: 'Не входит',
      excludes: [
        'Подписка на сервер и хостинг',
        'Лицензии сторонних сервисов',
        'Наполнение каталога и карточек',
        'Ведение рекламных кампаний',
        'Ведение самого бухгалтерского учёта',
      ],
      deliverTitle: 'Что вы получаете',
      deliver: [
        'Работающая система на вашем домене',
        'Репозиторий в вашем аккаунте',
        'Техническая документация и описание API',
        'Короткая видеоинструкция для админа',
        'Скрипты деплоя и отката',
        'Мониторинг и 3 месяца гарантии',
      ],
    },
    pricing: {
      title: 'От чего зависит цена',
      lead: 'Прайс-листа мы не даём: за одним словом «CRM» может стоять и двухнедельный проект, и полугодовой. Вот что реально двигает смету.',
      drivers: [
        'Количество ролей: только менеджер или менеджер, руководитель, кладовщик и кабинет клиента',
        'Интеграции: 1С, платёжная система, WhatsApp, телефония — каждая отдельный объём',
        'Объём и состояние переносимых данных: аккуратный Excel или база за десять лет',
        'Сложность отчётности: готовые таблицы или показатели, считаемые по условиям',
        'Мобильность: хватает адаптивного веба или нужно отдельное приложение',
      ],
      note: 'После брифа за 3–5 дней отдаём архитектуру, этапы и точную смету. Этап бесплатный и ни к чему не обязывает.',
    },
    stack: {
      title: 'Стек',
      note: 'Подбирается под проект. Ниже то, что чаще всего используем в CRM и ERP.',
      groups: [
        { name: 'Backend', items: ['Django', 'FastAPI', 'PostgreSQL', 'Celery'] },
        { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript'] },
        { name: 'Integrations', items: ['REST API', 'Webhooks', 'WhatsApp API', '1C'] },
        { name: 'Infrastructure', items: ['Docker', 'Nginx', 'CI/CD', 'Monitoring'] },
      ],
    },
    timeline: {
      title: 'Этапы',
      steps: [
        {
          title: 'Бриф и разбор процессов',
          time: '3–5 дней',
          text: 'Записываем, кто что делает руками, где лежат данные и какой шаг съедает больше всего времени.',
        },
        {
          title: 'Архитектура и техзадание',
          time: '1 неделя',
          text: 'Модель данных, роли, список интеграций и смета, разбитая по этапам. После этого цена не меняется.',
        },
        {
          title: 'Дизайн и прототип',
          time: '1–2 недели',
          text: 'Макеты ключевых экранов. Процесс согласуем на кликабельном прототипе — до того, как написан код.',
        },
        {
          title: 'Разработка, спринты по 2 недели',
          time: '3–6 недель',
          text: 'В конце каждого спринта рабочее демо. Трекер и репозиторий на вашей стороне, работа видна каждый день.',
        },
        {
          title: 'Перенос, тесты и релиз',
          time: '1–2 недели',
          text: 'Переносим данные, проводим нагрузочные тесты, обучаем команду. Запуск с возможностью отката.',
        },
        {
          title: 'Гарантия и поддержка',
          time: '3 месяца',
          text: 'Мониторинг, исправление ошибок, развитие по roadmap. Дальше — пакет поддержки или своя команда, система ваша.',
        },
      ],
    },
    notFor: {
      title: 'Когда CRM вам не нужна',
      lead: 'Иногда CRM — это потраченные деньги и три месяца, которые ничего не изменили. Эти вопросы мы задаём себе до того, как взять проект.',
      items: [
        {
          cond: 'Меньше 20 сделок в месяц',
          text: 'На таком объёме аккуратная таблица и напоминания в календаре делают ту же работу. Система начинает окупаться там, где вести вручную физически не выходит.',
        },
        {
          cond: 'В команде один-два человека',
          text: 'Главная ценность CRM в том, что информация не теряется между людьми. Когда человек один, теряться негде: коробка выйдет дешевле и быстрее.',
        },
        {
          cond: 'Процесс ещё не устоялся',
          text: 'Если каждый месяц вы пробуете новую схему работы, система забетонирует вчерашнюю. Сначала стабилизируйте процесс, потом автоматизируйте — иначе заплатите дважды.',
        },
        {
          cond: 'Коробка ложится без переделок',
          text: 'Если ваш процесс совпадает с моделью amoCRM или Bitrix24, писать своё незачем. Увидим это на брифе — скажем сами и предложим настройку вместо разработки.',
        },
      ],
      close: 'Если один из четырёх пунктов про вас — всё равно напишите. Бесплатно скажем, что полезнее сделать сейчас. Иногда честный ответ — «пока ничего», и это тоже нормальный ответ.',
    },
    cases: { title: 'Кейсы по направлению', slugs: ['crm-portal', 'fleks'] },
    faq: {
      title: 'Частые вопросы',
      items: [
        {
          q: 'Не дешевле ли настроить готовую CRM?',
          a: 'Часто да, и мы говорим это прямо. Коробка становится дорогой тогда, когда процесс в неё не влезает: плагины, интегратор, подписка, растущая с каждым пользователем. На брифе считаем оба варианта и показываем разницу.',
        },
        {
          q: 'Данные из старой базы не потеряются?',
          a: 'Нет. Перенос — отдельный этап: сначала пробный, потом сверка, потом основной. Старая система работает параллельно и выключается только когда вы согласны с результатом.',
        },
        {
          q: 'Сделаете интеграцию с 1С и платёжкой?',
          a: 'Да, с любым сервисом, у которого есть API или webhook: 1С, AmoCRM, Bitrix24, платёжные системы, WhatsApp, телефония. Каждая интеграция — отдельная строка в смете, скрытых доплат нет.',
        },
        {
          q: 'Кто поддерживает систему после релиза?',
          a: 'Три месяца гарантии на нас: мониторинг и исправление ошибок. Дальше либо пакет поддержки, либо ваша команда — репозиторий и документация у вас с первого дня, привязки к нам нет.',
        },
        {
          q: 'Как я буду видеть ход работы?',
          a: 'У вас доступ к таск-трекеру, спринты по две недели, в конце каждого рабочее демо. Ждать отчёта не нужно: статус любой задачи видно в любой день.',
        },
      ],
    },
    cta: {
      title: 'Расскажите о задаче',
      text: 'Хватит короткого брифа: с чем работаете, сколько человек в команде, что теряется сейчас. За 3–5 дней вернёмся с архитектурой и сметой.',
      subject: 'Бриф — CRM / ERP (ru)',
    },
  },

  en: {
    meta: {
      title: 'Custom CRM and ERP development — EXCLAMATION',
      description:
        'CRM and ERP built from scratch: process analysis, integrations, data migration. Typically 4–8 weeks, a free 3–5 day estimate, 3-month warranty, you own the code.',
    },
    eyebrow: 'Service',
    titleMuted: 'Custom CRM and ERP —',
    titleMain: 'you own the system.',
    lead: 'A CRM or ERP is the internal system that keeps a company’s customers, orders and money in one place. Built from scratch it typically takes 4–8 weeks, or 2–4 months for a complex platform. After a short brief we come back within 3–5 days with an architecture, a stage plan and a firm quote, and that stage is not billed.',
    facts: [
      { label: 'Typical build', value: '4–8 weeks' },
      { label: 'Estimate', value: '3–5 days' },
      { label: 'Warranty', value: '3 months' },
    ],
    introTitle: 'What you get and what you own',
    intro: [
      'The question worth settling first is ownership. With a subscription platform you rent the system: the data sits in someone else’s account, the per-seat price rises as you hire, and the parts of your process the vendor never modelled end up in a spreadsheet beside it. With a custom build the repository is in your account from day one, the database is on infrastructure you control, and there is no monthly fee tied to headcount.',
      'That is the trade, stated plainly: a longer start and a technical partner for the roadmap, against no rent and no ceiling on what the system can be asked to do. For a team of three closing a handful of deals a month it is a bad trade. For a company whose process is the actual product — a specific pricing rule, a specific approval chain, a market requirement no off-the-shelf tool covers — it usually pays for itself inside the first year.',
      'We work as one team across the whole cycle: process analysis, data model, interface, integrations, migration, release and support. No handoff between an agency that draws and a contractor that builds, which is where most of the cost and most of the finger-pointing lives on projects this size.',
      'Two finished builds sit behind this page. CRM Portal for real-estate agencies — a listings database, a Kanban pipeline and WhatsApp integration, with sales conversion up 45% and the time spent updating the database down 70%. FLEKS, an ERP for a psychology centre — client balances, session charges and automatic PDF receipts, with payment and receipt handling down 80%. Both numbers were measured by the client after launch.',
    ],
    scope: {
      title: 'What the work covers',
      includesTitle: 'Included',
      includes: [
        'Business process analysis and a written specification',
        'Data model and system architecture',
        'Interface design and responsive layouts for every screen',
        'Roles and access control',
        'Sales pipeline, order flow or document workflow',
        'Reporting and an analytics dashboard for management',
        'Migration from your current database',
        'Functional and load testing',
        'Team training and documentation',
      ],
      excludesTitle: 'Not included',
      excludes: [
        'Server and hosting subscriptions',
        'Third-party service licences',
        'Filling the catalogue and product records',
        'Running advertising campaigns',
        'Doing the bookkeeping itself',
      ],
      deliverTitle: 'What you receive',
      deliver: [
        'A working system on your domain',
        'The repository in your account',
        'Technical documentation and API reference',
        'A short video walkthrough for admins',
        'Deploy and rollback scripts',
        'Monitoring and a 3-month warranty',
      ],
    },
    pricing: {
      title: 'What drives the price',
      lead: 'We do not publish a price list, because the same word — CRM — covers a two-week project and a six-month one. These are the factors that actually move a quote.',
      drivers: [
        'Number of roles: sales only, or sales plus management, warehouse and a customer portal',
        'Integrations: 1C, payment providers, WhatsApp, telephony — each one is its own scope',
        'Volume and state of the data to migrate: a clean spreadsheet or ten years of legacy records',
        'Reporting complexity: fixed tables, or figures calculated from conditional rules',
        'Mobile: whether responsive web is enough or a separate app is required',
      ],
      note: 'After the brief you get the architecture, the stages and a firm quote within 3–5 days. That stage is free and commits you to nothing.',
    },
    stack: {
      title: 'Stack',
      note: 'Chosen per project. These are what we reach for most often on CRM and ERP work.',
      groups: [
        { name: 'Backend', items: ['Django', 'FastAPI', 'PostgreSQL', 'Celery'] },
        { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript'] },
        { name: 'Integrations', items: ['REST API', 'Webhooks', 'WhatsApp API', '1C'] },
        { name: 'Infrastructure', items: ['Docker', 'Nginx', 'CI/CD', 'Monitoring'] },
      ],
    },
    timeline: {
      title: 'Stages',
      steps: [
        {
          title: 'Brief and process analysis',
          time: '3–5 days',
          text: 'We write down who does what by hand, where the data actually lives, and which step eats the most time.',
        },
        {
          title: 'Architecture and specification',
          time: '1 week',
          text: 'Data model, roles, the integration list and a quote broken down by stage. The price does not move after this.',
        },
        {
          title: 'Design and prototype',
          time: '1–2 weeks',
          text: 'Layouts for the key screens. The process is signed off on a clickable prototype, before any code is written.',
        },
        {
          title: 'Development, two-week sprints',
          time: '3–6 weeks',
          text: 'A working demo at the end of every sprint. Tracker and repository on your side; the work is visible daily.',
        },
        {
          title: 'Migration, testing and release',
          time: '1–2 weeks',
          text: 'Data is migrated, load tests are run, the team is trained. Launch with a rollback path if anything goes wrong.',
        },
        {
          title: 'Warranty and support',
          time: '3 months',
          text: 'Monitoring, bug fixes and roadmap work. After that a support plan or your own team — the system is yours either way.',
        },
      ],
    },
    notFor: {
      title: 'When you do not need this',
      lead: 'Sometimes a custom CRM is three months and a budget that changed nothing. These are the questions we ask ourselves before taking a project on.',
      items: [
        {
          cond: 'Fewer than 20 deals a month',
          text: 'At that volume a tidy spreadsheet and calendar reminders do the same job. A system starts paying for itself where tracking by hand stops being physically possible.',
        },
        {
          cond: 'A team of one or two',
          text: 'The core value of a CRM is that information does not fall between people. With one person there is nowhere for it to fall: an off-the-shelf tool will be cheaper and faster.',
        },
        {
          cond: 'The process is still changing',
          text: 'If you are trying a new way of working every month, a system will set yesterday’s way in concrete. Stabilise the process first, automate second, or you will pay to rewrite it.',
        },
        {
          cond: 'A boxed product fits as-is',
          text: 'If your process matches the amoCRM or Bitrix24 model, there is no reason to build. If we see that on the brief we will say so and suggest configuration instead of development.',
        },
      ],
      close: 'If one of those four describes you, write anyway. We will tell you for free what is worth doing instead — and sometimes the honest answer is "nothing yet", which is also a real answer.',
    },
    cases: { title: 'Related work', slugs: ['crm-portal', 'fleks'] },
    faq: {
      title: 'Frequent questions',
      items: [
        {
          q: 'Would configuring an off-the-shelf CRM be cheaper?',
          a: 'Often yes, and we say so directly. A boxed product gets expensive when your process does not fit it: plugins, an integrator, and a subscription that grows with every seat. On the brief we cost both routes and show you the difference.',
        },
        {
          q: 'Will data from the old system be lost?',
          a: 'No. Migration is its own stage: a trial run first, then reconciliation, then the real migration. The old system runs in parallel and is only switched off once you are satisfied with the result.',
        },
        {
          q: 'Can you integrate with 1C and payment providers?',
          a: 'Yes, with any service exposing an API or a webhook: 1C, AmoCRM, Bitrix24, payment systems, WhatsApp, telephony. Each integration is a separate line in the quote — there are no hidden additions.',
        },
        {
          q: 'Who supports the system after release?',
          a: 'Three months of warranty from us: monitoring and bug fixes. After that either a support plan or your own team — the repository and the documentation are yours from day one, so there is no lock-in.',
        },
        {
          q: 'How do I see progress?',
          a: 'You hold tracker access, sprints run two weeks, and each ends in a working demo. There is no waiting for a status report: the state of any task is visible to you on any day.',
        },
      ],
    },
    cta: {
      title: 'Tell us about the task',
      text: 'A short brief is enough: what you work with, how many people are involved, what is being lost today. We come back within 3–5 days with an architecture and a quote.',
      subject: 'Brief — CRM / ERP (en)',
    },
  },
};

import type { ServiceCopy } from './types';
import type { Locale } from '../index';

/**
 * Bots and AI, written three times.
 *
 * Azerbaijani argues what a bot does against what clients expect it to do,
 * and leans on Telegram because that is the channel this market lives in.
 * Russian argues the decision behind the search: scripted bot or LLM, and how
 * hallucination is actually contained. English argues the operational side —
 * escalation, what happens when the model is wrong, and what a conversation
 * costs to run.
 *
 * Tone across all service pages is being reworked as a separate task; this
 * file was written for structure and fact density first.
 */
export const botsAi: Record<Locale, ServiceCopy> = {
  az: {
    meta: {
      title: 'Çat-bot və AI assistent hazırlanması — EXCLAMATION',
      description:
        'Telegram və WhatsApp botları, LLM assistentləri, RAG. Ssenarili bot 2–3 həftə, LLM assistent 4–8 həftə. Qiymətləndirmə 3–5 gün, ödənişsiz.',
    },
    eyebrow: 'Xidmət',
    titleMuted: 'Botlar və AI həlləri —',
    titleMain: 'təkrarlanan sualları özü bağlayır.',
    lead: 'Bot və AI assistent — müştəri sualının bir hissəsini adam olmadan bağlayan kanaldır: FAQ, status yoxlaması, sifariş qəbulu, sənəd axtarışı. Ssenarili bot üçün tipik müddət 2–3 həftə, biliyi olan LLM assistenti üçün 4–8 həftə. Brifdən sonra 3–5 gün ərzində ssenari xəritəsi, mərhələlər və dəqiq smeta veririk — bu mərhələ ödənişsizdir.',
    facts: [
      { label: 'Ssenarili bot', value: '2–3 həftə' },
      { label: 'LLM assistent', value: '4–8 həftə' },
      { label: 'Qiymətləndirmə', value: '3–5 gün' },
    ],
    introTitle: 'Bot nə edir və nə etmir',
    intro: [
      'Gözlənti adətən belədir: bot bütün sualları cavablayacaq. Real mənzərə başqadır. Müraciətlərin böyük hissəsi bir neçə təkrarlanan sualdır — «hardan gəlib?», «neçəyədir?», «bu ölçü varmı?» — və məhz onlar avtomatlaşdırılır. Qalanı adama qalır, amma artıq az sayda və hazır kontekstlə.',
      'İki fərqli məhsul var. Ssenarili bot dəqiq addımlarla işləyir: düymələr, sabit cavablar, sifariş forması. Ucuz, proqnozlaşdırıla bilən, uydurmur.',
      'LLM assistenti sərbəst mətni başa düşür və sizin bazanızdan cavab yığır. Daha canlı, amma nəzarət tələb edir.',
      'Nəzarət RAG üzərində qurulur: model cavabı özündən çıxarmır, əvvəlcə sizin sənədlərinizdən lazımlı hissəni tapır və yalnız onun əsasında cavab verir. Mənbə tapılmasa, assistent bunu deyir və dialoqu operatora ötürür. Bu davranış hər layihədə standartdır, ayrıca opsiya deyil.',
      'AI assistent keysimizdə bu belə işləyir: FAQ cavabları, stok yoxlaması, məhsul tövsiyəsi və səbətin çat içində yığılması. Operator yükü 60% azaldı, cavab müddəti isə beş dəqiqədən otuz saniyəyə düşdü. Tipik sənədlərdə səhv sayı sıfırdır — çünki model onları özü yazmır, şablondan doldurur.',
    ],
    scope: {
      title: 'İşə nə daxildir',
      includesTitle: 'Daxildir',
      includes: [
        'Dialoq ssenarilərinin xəritəsi',
        'Kanal qoşulması: Telegram, WhatsApp, sayt',
        'Biliklər bazasının hazırlanması və indeksləşdirilməsi',
        'RAG axtarışı və mənbəyə istinad',
        'Operatora ötürmə və eskalasiya qaydaları',
        'Sistemlərlə inteqrasiya: CRM, stok, sifarişlər',
        'Dialoqların loqlanması və keyfiyyət metrikaları',
        'Sınaq mühitində real suallarla test',
        'Admin: cavabların və biliklərin redaktəsi',
      ],
      excludesTitle: 'Daxil deyil',
      excludes: [
        'LLM provayderinin sorğu haqqı',
        'Öz modelinizin sıfırdan öyrədilməsi',
        'Biliklər bazası üçün mətnlərin yazılması',
        'Operator komandasının işə götürülməsi',
        'Messencer biznes hesabının rəsmiləşdirilməsi',
      ],
      deliverTitle: 'Nəticədə nə alırsınız',
      deliver: [
        'İşlək bot seçilmiş kanallarda',
        'Repozitoriya və promptlar sizin hesabınızda',
        'Biliklər bazası və onun yenilənmə qaydası',
        'Dialoq loqları və metrikalar paneli',
        'Eskalasiya qaydaları, yazılı şəkildə',
        'Monitorinq və 3 ay zəmanət',
      ],
    },
    pricing: {
      title: 'Qiymət nədən asılıdır',
      lead: 'Hazır qiymət cədvəli vermirik: ssenarili bot və biliyi olan assistent tamam fərqli işlərdir. Smetanı bunlar dəyişir.',
      drivers: [
        'Tip: düymələrlə ssenari, yoxsa sərbəst mətni başa düşən assistent',
        'Kanal sayı: Telegram, WhatsApp, sayt vidceti — hər biri ayrıca qoşulur',
        'Biliklər bazasının həcmi və vəziyyəti: səliqəli sənədlər, yoxsa dağınıq fayllar',
        'İnteqrasiyalar: stok, sifariş, CRM — botun nəyə baxa bilməsi lazımdır',
        'Eskalasiya: operator növbəsi, iş saatları, ötürmə qaydaları',
      ],
      note: 'Ssenari xəritəsini, mərhələləri və dəqiq smetanı brifdən 3–5 gün sonra veririk. Ödənişsiz və öhdəliksiz.',
    },
    stack: {
      title: 'Stek',
      note: 'Tapşırığa görə seçilir. Sadə ssenari üçün LLM lazım deyil və biz onu zorla qoşmuruq.',
      groups: [
        { name: 'AI', items: ['LLM API', 'RAG', 'LangChain'] },
        { name: 'Backend', items: ['FastAPI', 'PostgreSQL', 'Celery'] },
        { name: 'Channels', items: ['Telegram', 'WhatsApp API', 'Webhooks'] },
        { name: 'Operations', items: ['Docker', 'CI/CD', 'Monitoring'] },
      ],
    },
    timeline: {
      title: 'Mərhələlər',
      steps: [
        {
          title: 'Brif və ssenari xəritəsi',
          time: '3–5 gün',
          text: 'Real sualların siyahısı, kanallar, hansı halda operatora ötürülməli. Çıxışda xəritə və smeta.',
        },
        {
          title: 'Biliklər bazası',
          time: '3–7 gün',
          text: 'Sənədlərin toplanması, təmizlənməsi və indeksləşdirilməsi. Burada məlum olur ki, cavabların bir hissəsi heç yerdə yazılmayıb.',
        },
        {
          title: 'Prototip dialoq',
          time: '1 həftə',
          text: 'İlk işlək versiya bir kanalda. Real suallarla yoxlayır və cavabları birlikdə oxuyuruq.',
        },
        {
          title: 'İnteqrasiyalar və eskalasiya',
          time: '1–3 həftə',
          text: 'Stok, sifariş, CRM. Operatora ötürmə, iş saatları, növbə. Botun nəyi bilmədiyini deməsi də burada qurulur.',
        },
        {
          title: 'Test və reliz',
          time: '3–5 gün',
          text: 'Yüz real dialoqda yoxlama, səhv cavabların düzəldilməsi, kanalların canlıya çıxarılması.',
        },
        {
          title: 'Zəmanət və tənzimləmə',
          time: '3 ay',
          text: 'Loqları oxuyuruq, zəif cavabları düzəldirik. İlk aylarda bot ən çox məhz bu mərhələdə yaxşılaşır.',
        },
      ],
    },
    notFor: {
      title: 'Bot sizə nə vaxt lazım deyil',
      lead: 'Bot yalnız təkrarlanan sualı qapayanda qazandırır. Bunları brifdə özümüz soruşuruq.',
      items: [
        {
          cond: 'Gündə on müraciət və hamısı fərqli',
          text: 'Təkrar yoxdursa, avtomatlaşdıracaq bir şey yoxdur. Operator daha sürətli və ucuzdur.',
        },
        {
          cond: 'Cavab üçün lazım olan məlumat heç yerdə yazılmayıb',
          text: 'Bot yalnız mövcud biliyi tapa bilir. Qiymətlər, şərtlər və qaydalar adamların başındadırsa, əvvəl onları yazmaq lazımdır — bu, ayrıca işdir.',
        },
        {
          cond: 'Səhv cavabın qiyməti yüksəkdir',
          text: 'Hüquqi, tibbi və maliyyə məsləhətlərində avtomatik cavab risklidir. Belə hallarda bot yalnız sualı toplayıb adama ötürməlidir — və biz məhz belə qururuq.',
        },
        {
          cond: 'Gözlənti «bot hər şeyi əvəz edəcək»',
          text: 'Belə olmur. Bot müraciətlərin bir hissəsini götürür, qalanı adama qalır. Əgər plan operator komandasını tamamilə bağlamaqdırsa, nəticə məyusluq olacaq.',
        },
      ],
      close: 'Bu bəndlərdən biri sizin haqqınızdadırsa, yenə yazın. Real dialoqlarınıza baxıb pulsuz deyəcəyik: nə qədəri avtomatlaşdırıla bilər və nə qədəri yox.',
    },
    cases: { title: 'Bu istiqamətdə keyslər', slugs: ['ai-assistent', 'smart-fashion'] },
    faq: {
      title: 'Tez-tez verilən suallar',
      items: [
        {
          q: 'Bot uydurmayacaq ki?',
          a: 'Cavab sizin sənədlərinizdən yığılır, modelin yaddaşından yox — bu RAG adlanır. Mənbə tapılmasa, assistent bilmədiyini deyir və dialoqu operatora ötürür. Bu davranış hər layihədə standartdır, əlavə opsiya deyil.',
        },
        {
          q: 'Öz modelimizi öyrətmək lazımdırmı?',
          a: 'Demək olar ki, heç vaxt. Hazır model üstəgəl sizin biliklər bazanız praktikada daha ucuz və daha dəqiq çıxır. Öz modelinizin öyrədilməsi ayrıca böyük layihədir və onu yalnız real ehtiyac olanda təklif edirik.',
        },
        {
          q: 'Bot bilmədiyi sualla nə edir?',
          a: 'Uydurmur: sualı və dialoq kontekstini operatora ötürür, müştəriyə gözləmə müddətini deyir, hadisənin özü isə loqa düşür — onlardan biliklər bazasının növbəti versiyası yığılır.',
        },
        {
          q: 'Hansı kanallarda işləyəcək?',
          a: 'Telegram, WhatsApp və sayt vidceti — ən çox istənilənlər. Hər kanal ayrıca qoşulur və smetada ayrıca sətirdir; məntiq isə ümumidir, hər kanal üçün yenidən yazılmır.',
        },
        {
          q: 'Biliklər bazasını kim yeniləyəcək?',
          a: 'Siz, admin panel vasitəsilə: sənəd əlavə edirsiniz, indeks özü yenilənir. Bunun üçün ayrıca developer lazım deyil. Böyük dəyişikliklərdən sonra cavabların keyfiyyətini yenidən yoxlamaq lazımdır. Necə etməli — təhvildə göstəririk və yazılı reqlament veririk.',
        },
      ],
    },
    cta: {
      title: 'Hansı sualları bota verək',
      text: 'Qısa brif kifayətdir: hansı kanallar, gündə neçə müraciət, hansı suallar təkrarlanır. 3–5 gün ərzində ssenari xəritəsi və smeta ilə qayıdırıq.',
      subject: 'Brief — Bot / AI (az)',
    },
  },

  ru: {
    meta: {
      title: 'Разработка чат-ботов и AI-ассистентов — EXCLAMATION',
      description:
        'Telegram и WhatsApp боты, LLM-ассистенты на RAG. Сценарный бот 2–3 недели, LLM-ассистент 4–8 недель. Оценка за 3–5 дней бесплатно.',
    },
    eyebrow: 'Услуга',
    titleMuted: 'Боты и AI-решения —',
    titleMain: 'часть обращений закрывают без человека.',
    lead: 'Бот и AI-ассистент закрывают часть обращений без человека: FAQ, проверка статуса, приём заказа, поиск по документам. Сценарный бот занимает 2–3 недели, ассистент на LLM со знанием ваших документов — 4–8 недель. После брифа за 3–5 дней возвращаемся с картой сценариев, этапами и точной сметой; этап не оплачивается.',
    facts: [
      { label: 'Сценарный бот', value: '2–3 недели' },
      { label: 'LLM-ассистент', value: '4–8 недель' },
      { label: 'Оценка', value: '3–5 дней' },
    ],
    introTitle: 'Сценарий или LLM',
    intro: [
      'Это два разных продукта, и путать их дорого. Сценарный бот ходит по заданным шагам: кнопки, фиксированные ответы, форма заказа. Он дешевле, предсказуем и ничего не выдумывает — потому что выдумывать ему нечем. Для «узнать статус», «записаться», «оставить заявку» этого достаточно.',
      'LLM-ассистент понимает свободный текст и собирает ответ из ваших документов. Живее, но требует контроля.',
      'Контроль строится на RAG: модель не отвечает из памяти, а сначала находит нужный фрагмент в вашей базе и отвечает только по нему, со ссылкой на источник. Фрагмент не нашёлся — ассистент говорит, что не знает, и передаёт диалог оператору.',
      'И журнал.',
      'Все диалоги пишутся, слабые ответы видно, из них собирается следующая версия базы знаний. Первые месяцы бот улучшается в основном на этом, а не на смене модели.',
      'В нашем кейсе AI-ассистент это выглядит так: ответы на FAQ, проверка остатков, подбор товара и сборка корзины прямо в чате, круглосуточно. Нагрузка на операторов упала на 60%, время ответа — с пяти минут до менее чем тридцати секунд. Ошибок в типовых документах ноль, потому что документы бот не сочиняет, а заполняет по шаблону.',
    ],
    scope: {
      title: 'Что входит в работу',
      includesTitle: 'Входит',
      includes: [
        'Карта диалоговых сценариев',
        'Подключение каналов: Telegram, WhatsApp, сайт',
        'Подготовка и индексация базы знаний',
        'RAG-поиск и ссылки на источник',
        'Передача оператору и правила эскалации',
        'Интеграции: CRM, остатки, заказы',
        'Логирование диалогов и метрики качества',
        'Тестирование на реальных вопросах',
        'Админка: правка ответов и базы знаний',
      ],
      excludesTitle: 'Не входит',
      excludes: [
        'Оплата запросов к LLM-провайдеру',
        'Обучение собственной модели с нуля',
        'Написание текстов для базы знаний',
        'Найм команды операторов',
        'Оформление бизнес-аккаунта мессенджера',
      ],
      deliverTitle: 'Что вы получаете',
      deliver: [
        'Работающего бота в выбранных каналах',
        'Репозиторий и промпты в вашем аккаунте',
        'Базу знаний и регламент её обновления',
        'Логи диалогов и панель метрик',
        'Правила эскалации в письменном виде',
        'Мониторинг и 3 месяца гарантии',
      ],
    },
    pricing: {
      title: 'От чего зависит цена',
      lead: 'Прайс-листа не даём: сценарный бот и ассистент со знанием документов — разные работы. Смету двигает вот что.',
      drivers: [
        'Тип: сценарий с кнопками или ассистент, понимающий свободный текст',
        'Число каналов: Telegram, WhatsApp, виджет на сайте — каждый подключается отдельно',
        'Объём и состояние базы знаний: аккуратные документы или разрозненные файлы',
        'Интеграции: остатки, заказы, CRM — на что бот должен уметь смотреть',
        'Эскалация: смены операторов, часы работы, правила передачи',
      ],
      note: 'Карту сценариев, этапы и точную смету отдаём через 3–5 дней после брифа. Бесплатно и без обязательств.',
    },
    stack: {
      title: 'Стек',
      note: 'Подбирается под задачу. Простому сценарию LLM не нужна, и мы её туда не ставим.',
      groups: [
        { name: 'AI', items: ['LLM API', 'RAG', 'LangChain'] },
        { name: 'Backend', items: ['FastAPI', 'PostgreSQL', 'Celery'] },
        { name: 'Channels', items: ['Telegram', 'WhatsApp API', 'Webhooks'] },
        { name: 'Operations', items: ['Docker', 'CI/CD', 'Monitoring'] },
      ],
    },
    timeline: {
      title: 'Этапы',
      steps: [
        {
          title: 'Бриф и карта сценариев',
          time: '3–5 дней',
          text: 'Список реальных вопросов, каналы, в каких случаях передавать оператору. На выходе карта и смета.',
        },
        {
          title: 'База знаний',
          time: '3–7 дней',
          text: 'Сбор, чистка и индексация документов. Здесь выясняется, что часть ответов нигде не записана.',
        },
        {
          title: 'Прототип диалога',
          time: '1 неделя',
          text: 'Первая рабочая версия в одном канале. Проверяем на реальных вопросах и читаем ответы вместе.',
        },
        {
          title: 'Интеграции и эскалация',
          time: '1–3 недели',
          text: 'Остатки, заказы, CRM. Передача оператору, часы работы, очередь. Здесь же настраивается «я не знаю».',
        },
        {
          title: 'Тесты и релиз',
          time: '3–5 дней',
          text: 'Прогон на сотне реальных диалогов, правка слабых ответов, вывод каналов в боевой режим.',
        },
        {
          title: 'Гарантия и донастройка',
          time: '3 месяца',
          text: 'Читаем логи, правим слабые ответы. В первые месяцы бот улучшается в основном здесь.',
        },
      ],
    },
    notFor: {
      title: 'Когда бот вам не нужен',
      lead: 'Бот окупается только на повторяющихся вопросах. Эти вопросы мы задаём на брифе сами.',
      items: [
        {
          cond: 'Десять обращений в день и все разные',
          text: 'Повторов нет — автоматизировать нечего. Оператор быстрее и дешевле.',
        },
        {
          cond: 'Нужных для ответа данных нигде нет',
          text: 'Бот умеет находить только существующее знание. Если цены, условия и правила живут в головах, сначала их надо записать — это отдельная работа.',
        },
        {
          cond: 'Цена ошибки высокая',
          text: 'В юридических, медицинских и финансовых консультациях автоматический ответ рискован. Там бот должен собирать вопрос и передавать человеку, и мы делаем именно так.',
        },
        {
          cond: 'Ожидание «бот заменит всех»',
          text: 'Так не бывает. Бот забирает часть обращений, остальное остаётся людям. Если план — закрыть отдел поддержки целиком, результат разочарует.',
        },
      ],
      close: 'Если один из пунктов про вас — всё равно напишите. Посмотрим ваши реальные диалоги и бесплатно скажем, какую долю можно автоматизировать, а какую нет.',
    },
    cases: { title: 'Кейсы по направлению', slugs: ['ai-assistent', 'smart-fashion'] },
    faq: {
      title: 'Частые вопросы',
      items: [
        {
          q: 'Бот не начнёт выдумывать?',
          a: 'Ответ собирается из ваших документов, а не из памяти модели — это называется RAG. Если подходящий фрагмент не найден, ассистент говорит, что не знает, и передаёт диалог оператору. Это поведение стоит по умолчанию, а не как доплата.',
        },
        {
          q: 'Нужно ли обучать свою модель?',
          a: 'Почти никогда. Готовая модель плюс ваша база знаний на практике выходит дешевле и точнее. Обучение собственной модели — отдельный большой проект, и мы предлагаем его только при реальной необходимости.',
        },
        {
          q: 'Что бот делает с вопросом, которого не знает?',
          a: 'Не выдумывает: передаёт вопрос и контекст диалога оператору, называет клиенту время ожидания, а сам случай уходит в лог — из таких и собирается следующая версия базы знаний.',
        },
        {
          q: 'В каких каналах он будет работать?',
          a: 'Telegram, WhatsApp и виджет на сайте — самые частые. Каждый канал подключается отдельно и виден в смете отдельной строкой, но логика общая и не переписывается под каждый.',
        },
        {
          q: 'Кто будет обновлять базу знаний?',
          a: 'Вы, через админку: добавляете документ, индекс обновляется сам. Отдельный разработчик для этого не нужен. После крупных изменений качество ответов стоит перепроверить. Как это делать — показываем на сдаче и оставляем письменный регламент обновления базы знаний.',
        },
      ],
    },
    cta: {
      title: 'Какие вопросы отдадим боту',
      text: 'Хватит короткого брифа: какие каналы, сколько обращений в день, какие вопросы повторяются. За 3–5 дней вернёмся с картой сценариев и сметой.',
      subject: 'Бриф — Бот / AI (ru)',
    },
  },

  en: {
    meta: {
      title: 'Chatbot and AI assistant development — EXCLAMATION',
      description:
        'Telegram and WhatsApp bots, LLM assistants on RAG, escalation to humans. Scripted bot 2–3 weeks, LLM assistant 4–8. Free 3–5 day estimate.',
    },
    eyebrow: 'Service',
    titleMuted: 'Bots and AI —',
    titleMain: 'designed around being wrong.',
    lead: 'A bot or AI assistant closes part of your inbound without a person: FAQs, order status, intake, document lookup. A scripted bot typically takes 2–3 weeks; an LLM assistant grounded in your own documents takes 4–8. After a short brief we return within 3–5 days with a scenario map, stages and a firm quote, and that stage is not billed.',
    facts: [
      { label: 'Scripted bot', value: '2–3 weeks' },
      { label: 'LLM assistant', value: '4–8 weeks' },
      { label: 'Estimate', value: '3–5 days' },
    ],
    introTitle: 'What happens when it is wrong',
    intro: [
      'Every serious question about deploying an assistant is a question about its failure mode. A scripted bot fails visibly: it does not understand, it says so, it offers a button. An LLM fails invisibly — it produces a fluent, confident, wrong answer, and the customer acts on it.',
      'The engineering is mostly about converting the second failure into the first.',
      'Grounding is how. With retrieval-augmented generation the model does not answer from memory: it retrieves the relevant passage from your documents and answers only from that, citing the source. Where nothing relevant is found, the assistant says it does not know and hands the conversation to a person. We build that path first.',
      'Escalation is the other half, and it is a business decision rather than a technical one. Which questions must always reach a human, what happens outside working hours, how much context travels with the handoff. We write those rules down during the brief and implement them as rules, so the behaviour is auditable rather than emergent.',
      'Running cost belongs in the business case too. An assistant is billed per conversation by the model provider, and that bill scales with volume rather than with headcount. Usually a fraction of the equivalent staffing. Not zero. In our AI assistant project the measurable outcome was a 60% drop in operator load and replies inside 30 seconds instead of five minutes.',
    ],
    scope: {
      title: 'What the work covers',
      includesTitle: 'Included',
      includes: [
        'A map of conversation scenarios',
        'Channel setup: Telegram, WhatsApp, website widget',
        'Knowledge base preparation and indexing',
        'RAG retrieval with source citation',
        'Handoff to a human and escalation rules',
        'Integrations: CRM, stock, orders',
        'Conversation logging and quality metrics',
        'Testing against real historical questions',
        'Admin: editing answers and the knowledge base',
      ],
      excludesTitle: 'Not included',
      excludes: [
        'LLM provider usage fees',
        'Training your own model from scratch',
        'Writing the knowledge base content',
        'Hiring the operator team',
        'Registering messenger business accounts',
      ],
      deliverTitle: 'What you receive',
      deliver: [
        'A working bot on the chosen channels',
        'Repository and prompts in your account',
        'The knowledge base and a procedure for updating it',
        'Conversation logs and a metrics dashboard',
        'Escalation rules, written down',
        'Monitoring and a 3-month warranty',
      ],
    },
    pricing: {
      title: 'What drives the price',
      lead: 'We do not publish a price list: a scripted bot and a document-grounded assistant are different pieces of work. These move a quote.',
      drivers: [
        'Type: a button-driven script, or an assistant that reads free text',
        'Channel count: Telegram, WhatsApp, a site widget — each is connected separately',
        'Knowledge base size and condition: tidy documents or scattered files',
        'Integrations: stock, orders, CRM — what the bot needs to be able to look at',
        'Escalation: operator shifts, working hours, handoff rules',
      ],
      note: 'The scenario map, the stages and a firm quote reach you within 3–5 days of the brief. Free, and it commits you to nothing.',
    },
    stack: {
      title: 'Stack',
      note: 'Chosen per task. A simple script does not need an LLM, and we do not put one there.',
      groups: [
        { name: 'AI', items: ['LLM API', 'RAG', 'LangChain'] },
        { name: 'Backend', items: ['FastAPI', 'PostgreSQL', 'Celery'] },
        { name: 'Channels', items: ['Telegram', 'WhatsApp API', 'Webhooks'] },
        { name: 'Operations', items: ['Docker', 'CI/CD', 'Monitoring'] },
      ],
    },
    timeline: {
      title: 'Stages',
      steps: [
        {
          title: 'Brief and scenario map',
          time: '3–5 days',
          text: 'The real question list, the channels, and which cases must always reach a person. Output: a map and a quote.',
        },
        {
          title: 'Knowledge base',
          time: '3–7 days',
          text: 'Collecting, cleaning and indexing documents. This is where it emerges that some answers were never written down.',
        },
        {
          title: 'Prototype conversation',
          time: '1 week',
          text: 'A first working version on one channel. We test it against real questions and read the answers with you.',
        },
        {
          title: 'Integrations and escalation',
          time: '1–3 weeks',
          text: 'Stock, orders, CRM. Handoff, working hours, queueing — and the "I do not know" path.',
        },
        {
          title: 'Testing and release',
          time: '3–5 days',
          text: 'A run against a hundred real conversations, correction of weak answers, channels taken live.',
        },
        {
          title: 'Warranty and tuning',
          time: '3 months',
          text: 'We read the logs and fix weak answers. In the early months this is where the bot improves, not by changing model.',
        },
      ],
    },
    notFor: {
      title: 'When you do not need this',
      lead: 'A bot pays back on repetition. We raise these on the brief ourselves.',
      items: [
        {
          cond: 'Ten enquiries a day and every one different',
          text: 'No repetition, nothing to automate. A person is faster and cheaper.',
        },
        {
          cond: 'The answers do not exist in writing anywhere',
          text: 'A bot can only retrieve knowledge that exists. If prices, terms and rules live in people’s heads, they have to be written down first, and that is separate work.',
        },
        {
          cond: 'A wrong answer is expensive',
          text: 'For legal, medical and financial advice an automated answer is a liability. There the bot should collect the question and pass it to a person, which is how we build it.',
        },
        {
          cond: 'The expectation is that it replaces the team',
          text: 'It will not. A bot takes a share of the inbound and the rest stays with people. If the plan is to close the support desk, the result will disappoint.',
        },
      ],
      close: 'If one of these describes you, write anyway. We will look at your actual conversation history and tell you for free what share can be automated and what cannot.',
    },
    cases: { title: 'Related work', slugs: ['ai-assistent', 'smart-fashion'] },
    faq: {
      title: 'Frequent questions',
      items: [
        {
          q: 'Will it make things up?',
          a: 'Answers are assembled from your documents rather than the model’s memory — that is what retrieval-augmented generation means. Where no relevant passage is found, the assistant says it does not know and hands over to a person. That behaviour is standard, not an upgrade.',
        },
        {
          q: 'Do we need to train our own model?',
          a: 'Almost never. An off-the-shelf model plus your knowledge base is cheaper and more accurate in practice. Training your own model is a large separate project and we propose it only where there is a real reason.',
        },
        {
          q: 'What does it do with a question it cannot answer?',
          a: 'It does not guess: the question and the conversation context go to an operator, the customer is told how long the wait is, and the case itself is logged — the next version of the knowledge base is built from those.',
        },
        {
          q: 'Which channels does it work on?',
          a: 'Telegram, WhatsApp and a site widget are the common ones. Each channel is connected separately and appears as its own line in the quote, but the logic is shared rather than rewritten per channel.',
        },
        {
          q: 'Who maintains the knowledge base?',
          a: 'You do, through the admin panel: add a document and the index updates itself. No developer needed for it. After large changes the answer quality is worth re-checking. We show you how at handover and leave a written procedure for maintaining the knowledge base.',
        },
      ],
    },
    cta: {
      title: 'Which questions should the bot take',
      text: 'A short brief is enough: which channels, how many enquiries a day, and which questions repeat. We come back within 3–5 days with a scenario map and a quote.',
      subject: 'Brief — Bot / AI (en)',
    },
  },
};

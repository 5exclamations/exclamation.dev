import type { Locale } from './index';

/**
 * Copy for the full FAQ page — `/faq/`, `/ru/faq/`, `/en/faq/`.
 *
 * Three languages written from scratch, never translated — the same rule the
 * service pages follow, and for the same reason: each one is chasing different
 * questions. The six blocks and every underlying fact are shared; the questions
 * inside them are not.
 *
 *  - Azerbaijani asks what a Baku business asks: working outside the city,
 *    payment in manat against an invoice, whether the interface survives
 *    `ə ğ ı İ`, whether staff who are not technical will cope.
 *  - Russian leads with the contract and the estimate, the comparison that
 *    market actually makes. Approved by the client 2026-08-05.
 *  - English asks what someone shopping an outsourcing partner asks: time
 *    zones and working language, IP assigned in writing, where data is
 *    hosted, taking maintenance in-house later.
 *
 * Rules this copy is held to (HANDOFF §4, SKILL.md §10):
 *  - every answer is self-contained: it renames the term, the duration and the
 *    condition, and reads correctly quoted away from the page
 *  - answers spread from one sentence to five
 *  - no cost figures anywhere, on this page or any other
 *  - the eight questions already on the landing page are not repeated here;
 *    they are either opened wider or replaced
 *  - the per-service durations are deliberately absent: "how long" points at
 *    the service pages, so a timeline never has to be corrected in a fourth
 *    place
 *
 * The `q` strings are what the FAQPage JSON-LD must carry verbatim — the
 * markup and the visible text have to match word for word.
 */

export type FaqBlock = { title: string; items: { q: string; a: string }[] };

export type FaqPage = {
  meta: { title: string; description: string };
  eyebrow: string;
  titleMuted: string;
  titleMain: string;
  lead: string;
  /**
   * The count spelled out in `titleMuted`, as a number. It exists only so the
   * build fails when a question is added and the heading is left saying the
   * old figure — `faqCount()` below is asserted against it in the page.
   * A spelled-out numeral cannot be computed in three languages; a mismatch
   * can at least be made impossible to ship.
   */
  questionCount: number;
  blocks: FaqBlock[];
};

/** Questions actually present, across every block. */
export const faqCount = (page: FaqPage): number =>
  page.blocks.reduce((n, block) => n + block.items.length, 0);

export const faqPage: Record<Locale, FaqPage> = {
  az: {
    meta: {
      title: 'Sual-cavab: hazırlanma, müqavilə və dəstək — EXCLAMATION',
      description:
        'Brif, 3–5 günlük pulsuz qiymətləndirmə, ikihəftəlik sprintlər və 3 aylıq zəmanət necə işləyir. Kod kimə məxsusdur, smeta nədən asılıdır və hansı hallarda layihədən imtina edirik.',
    },
    eyebrow: 'Sual-cavab',
    titleMuted: 'Otuz sual,',
    titleMain: 'hər birinə tam cavab.',
    lead: 'Burada brifdə ən çox verilən suallar var: iş necə başlayır, smeta nədən yığılır, kod kimə məxsusdur və buraxılışdan sonra nə olur. Qiymətləndirmə 3–5 gün çəkir və ödənişsizdir, sprint iki həftə davam edir, zəmanət isə üç aydır. Səkkiz qısa cavab ana səhifədədir — burada onlar daha geniş açılıb.',
    questionCount: 30,
    blocks: [
      {
        title: 'İş və müqavilə',
        items: [
          {
            q: 'İş necə başlayır?',
            a: 'Brifdən — tapşırıq haqqında qısa söhbətdən və ya məktubdan. Ondan sonra 3–5 gün ərzində arxitektura, mərhələlər və dəqiq smeta ilə qayıdırıq; bu mərhələ ödənişsizdir.',
          },
          {
            q: 'Brifdə nə yazaq ki, qiymətləndirmə dəqiq olsun?',
            a: 'Biznesin nə ilə məşğul olduğunu, sistemdən kimin istifadə edəcəyini, hazırda nəyin əl ilə görüldüyünü və məlumatın harada saxlandığını. Xoşunuza gələn sistemlərin, bir də əsəbiləşdirənlərin nümunəsi hazır texniki tapşırıqdan çox işə yarayır. Qalanını suallarla özümüz çıxarırıq.',
          },
          {
            q: 'Layihəni sizin tərəfinizdən kim aparır?',
            a: 'Layihəni bir məsul şəxs aparır, məktublara da o cavab verir. İcraçıların tərkibi mərhələyə görə dəyişir — dizayn, hazırlanma, testlər — sizin üçünsə giriş nöqtəsi dəyişmir.',
          },
          {
            q: 'Bakıdan kənarda olan şirkətlə işləyirsiniz?',
            a: 'Bəli. Görüşlərin çoxu onlayn keçir, demolar da video zəngdə olur, sənədləri elektron imza ilə imzalayırıq. Regionlardan olan müştəri ilə iş Bakıdakından yalnız görüşün saatı ilə fərqlənir.',
          },
          {
            q: 'NDA imzalayırsınız?',
            a: 'Bəli, tələb olunarsa və brifdən əvvəl. Qiymətləndirmə mərhələsində NDA artıq qüvvədə olur.',
          },
        ],
      },
      {
        title: 'Müddət və proses',
        items: [
          {
            q: 'Nə üçün qiymətləndirmə bir saat yox, 3–5 gün çəkir?',
            a: 'Bir saata yalnız diapazon demək olar. 3–5 günə prosesi hissələrə ayırırıq, rolları və inteqrasiyaları sayırıq, asılı olduğunuz servislərin API-si olub-olmadığını yoxlayırıq. Bəzən elə burada aydın olur ki, API ümumiyyətlə yoxdur. Sonunda arxitektura, mərhələlər və sonradan geri çəkilmədiyimiz smeta alırsınız. Bu bir neçə gün həftələrə qənaət edir.',
          },
          {
            q: 'Sprintin sonunda nə olur?',
            a: 'İşlək demo — açıb özünüz yoxlaya biləcəyiniz versiya. Sprint iki həftə çəkir.',
          },
          {
            q: 'Layihənin ortasında həcm dəyişsə nə olur?',
            a: 'Yeni tapşırıq ayrıca rəsmiləşdirilir: qiymətləndiririk, müddəti və qiyməti deyirik, qərarı siz verirsiniz. Razılaşdırılmış hissə isə nə yenidən yazılır, nə də bahalaşır.',
          },
          {
            q: 'Tapşırığın hazır olduğuna kim qərar verir?',
            a: 'Siz, demoda. Hazır o deməkdir ki, ssenari işlək versiyada başdan-sona keçir — developerin tiketi bağlaması hələ hazır demək deyil.',
          },
          {
            q: 'Müddət sürüşsə nə edirsiniz?',
            a: 'Bunu son gün yox, ən yaxın demoda deyirik. Sonra iki yol qalır: tarixi sürüşdürmək və ya həcmin bir hissəsini ikinci növbəyə keçirmək — seçim sizindir. Gizli təxirə salma olmur, çünki treker sizdədir və işin harada dayandığı oradan görünür.',
          },
        ],
      },
      {
        title: 'Qiymət',
        items: [
          {
            q: 'Nə üçün saytda qiymət cədvəli yoxdur?',
            a: '«Sayt» sözünün arxasında həm bir həftəlik landing, həm də yarım illik platforma dayanır. Boşluqda deyilən qiymət bu iki tərəfdən birinə yalan olardı.',
          },
          {
            q: 'Smeta ən çox nədən asılıdır?',
            a: 'Rolların və hüquqların sayından, inteqrasiyaların sayından, köçürüləcək məlumatın həcmindən və hesabatların mürəkkəbliyindən. Ayrıca sətir mobillikdir: adaptiv veb bəs edir, yoxsa ayrıca tətbiq lazımdır. Hər xidmət səhifəsində bu «Qiymət nədən asılıdır» blokunda açılıb.',
          },
          {
            q: 'İmzadan sonra qiymət arta bilər?',
            a: 'Razılaşdırılmış smeta dəyişmir. Yalnız həcmin üstünə sizin əlavə etdiyiniz bahalaşır, o da ayrıca rəsmiləşir — qiymətləndirmə ilə və sizin razılığınızla.',
          },
          {
            q: 'Ödəniş necə və hansı valyuta ilə aparılır?',
            a: 'Manatla, bank köçürməsi ilə, rəsmi hesab-faktura əsasında. Ödəniş müqavilədə sabitlənmiş mərhələlərlə gedir: hər mərhələ baxa biləcəyiniz bir şeylə bitir və ondan sonra ödənilir. Qiymətləndirmə hesaba daxil deyil.',
          },
          {
            q: 'Funksiyaların bir hissəsini çıxarsaq ucuz olar?',
            a: 'Bəli, bu normal gedişdir. Brifdə həcmi «buraxılışa lazımdır» və «sonra da olar» deyə ayırırıq — ikincisi çox vaxt siyahının yarısı çıxır.',
          },
        ],
      },
      {
        title: 'Texnologiya və kod',
        items: [
          {
            q: 'Kod kimə məxsusdur?',
            a: 'Sizə. Repozitoriya ilk gündən sizin hesabınızda açılır, sonda təhvil verilmir. Əlinizə kod, sənədləşmə, deploy və geri qaytarma skriptləri üstəgəl bütün servislərə girişlər keçir.',
          },
          {
            q: 'Sistem Azərbaycan dilində düzgün işləyəcək?',
            a: 'Bəli, həm interfeys, həm də məlumatın özü. Axtarış, əlifba sırası və PDF hesabatlar «ə», «ğ», «ı», «İ» hərfləri ilə düzgün işləyir — bunu ayrıca testlə yoxlayırıq, çünki hazır kitabxanaların bir qismi məhz burada səhv edir. Lazım olsa interfeysi bir neçə dildə qururuq.',
          },
          {
            q: 'Steki necə seçirsiniz?',
            a: 'Tapşırığa görə və məhsulun nə qədər yaşayacağına görə. Bakıda bizdən sonra dəstəkləyə biləcək adam tapılmayan texnologiyanı götürmürük.',
          },
          {
            q: 'Layihəni başqa komandaya vermək istəsək nə olacaq?',
            a: 'Repozitoriyanı və sənədləşməni onlara verirsiniz — hər ikisi onsuz da sizdədir. Girişləri özümüzdə saxlamırıq, layihənin ötürülməsinə görə pul da almırıq.',
          },
          {
            q: 'Məlumat harada saxlanacaq?',
            a: 'Sizin adınıza rəsmiləşdirilmiş infrastrukturda: sizin serverinizdə, provayderdə sizin hesabınızda, sizin domeninizdə.',
          },
          {
            q: 'Sənədləşməyə nə daxildir?',
            a: 'Arxitekturanın və məlumat modelinin təsviri, API arayışı, admin üçün təlimat, tipik əməliyyatlar barədə qısa videolar. Ayrıca deploy və geri qaytarma skriptləri — buraxılış səhv gedərsə nə etmək lazım olduğunun izahı ilə.',
          },
        ],
      },
      {
        title: 'Buraxılışdan sonra',
        items: [
          {
            q: 'Üç aylıq zəmanətə nə daxildir?',
            a: 'Monitorinq, səhvlərin düzəldilməsi və xırda düzəlişlər — buraxılışdan sonra üç ay, ödənişsiz. Səhv o deməkdir ki, sistem texniki tapşırıqda yazıldığı kimi işləmir. Yeni funksiya səhv sayılmır və ayrıca qiymətləndirilir. Zəmanət buraxılış günü başlayır.',
          },
          {
            q: 'Zəmanətlə dəstək arasında fərq nədir?',
            a: 'Zəmanət üç ay çəkir və səhvləri örtür. Dəstək isə inkişaf paketidir: yeni funksiyalar, prosesdəki dəyişikliklər, planlı yeniləmələr. Zəmanət bitəndən sonra başlayır və ayrıca ödənilir.',
          },
          {
            q: 'Sistem gecə dayansa nə edirsiniz?',
            a: 'Monitorinq bildirişi sizə yox, bizə göndərir. Zəmanətli üç ayda reaksiya verib düzəldirik, sonrası isə dəstək paketinin şərtləri ilə gedir.',
          },
          {
            q: 'Əməkdaşlar sistemdən istifadə etməyi bacaracaq?',
            a: 'Buraxılışdan əvvəl komanda ilə təlim keçirik və admin üçün təlimat veririk. Tipik əməliyyatlar — sifariş yaratmaq, hesabat çıxarmaq, istifadəçi əlavə etmək — qısa videolarla göstərilir. Yeni əməkdaş işə gələndə həmin materiallar sizdə qalır, bizi yenidən çağırmağa ehtiyac olmur.',
          },
          {
            q: 'Server, domen və lisenziyaların pulunu kim ödəyir?',
            a: 'Siz, birbaşa provayderə. Hostinqi yenidən satmırıq və üstünə əlavə qoymuruq — hesab sizə gəlir, giriş sizdə qalır.',
          },
        ],
      },
      {
        title: 'Nə vaxt uyğun deyilik',
        items: [
          {
            q: 'Hansı hallarda layihədən imtina edirsiniz?',
            a: 'Tapşırıq hazır qutu ilə bağlananda və sıfırdan hazırlanma özünü ödəməyəndə — bu brifdə görünür, biz də düzünü deyirik. Proses hər ay dəyişəndə də götürmürük: sistem dünənki sxemi betonlayacaq. Bir də bizim təcrübəmiz olmayan sahədən tapşırıq gələndə.',
          },
          {
            q: 'Məhsulda pay müqabilində işləyirsiniz?',
            a: 'Xeyr — sabit həcmi və mərhələlərlə ödənişi olan müqavilə ilə işləyirik.',
          },
          {
            q: 'Kiçik tapşırıqları götürürsünüz?',
            a: 'Götürürük, əgər bu bitmiş bir parçadırsa: bir inteqrasiya, bir forma, bir hesabat. Yad kodda bir-iki saatlıq düzəliş bizim format deyil, bunu da brifdə dərhal deyirik.',
          },
          {
            q: 'Podratçımız var, ikinci rəy lazımdır — bu sizədir?',
            a: 'Bəli. Kodun və arxitekturanın auditini keçirib yazılı nəticə veririk: nə işləyir, nəyi yenidən yazmaq lazımdır, nə çatmır. Audit sizi komanda dəyişməyə borclu etmir; bəzən nəticə elə odur ki, heç kimi dəyişmək lazım deyil.',
          },
        ],
      },
    ],
  },

  ru: {
    meta: {
      title: 'Вопросы о разработке и работе студии — EXCLAMATION',
      description:
        'Как устроены бриф, оценка за 3–5 дней, спринты по две недели и гарантия 3 месяца. Кому принадлежит код, из чего складывается смета и когда мы отказываемся от проекта.',
    },
    eyebrow: 'Вопросы и ответы',
    titleMuted: 'Тридцать вопросов',
    titleMain: 'и прямые ответы на них.',
    lead: 'Здесь то, что спрашивают на брифе чаще всего: как начинается работа, из чего складывается смета, кому принадлежит код и что происходит после релиза. Восемь коротких ответов есть на главной — здесь они раскрыты шире.',
    questionCount: 30,
    blocks: [
      {
        title: 'Работа и договор',
        items: [
          {
            q: 'С чего начинается работа?',
            a: 'С брифа — короткого разговора или письма о задаче. После него за 3–5 дней возвращаемся с архитектурой, этапами и точной сметой; этот этап бесплатный.',
          },
          {
            q: 'Что написать в брифе, чтобы оценка была точной?',
            a: 'Что за бизнес, кто будет пользоваться системой, что сейчас делается руками и где лежат данные. Полезны примеры систем, которые нравятся, и тех, что раздражают. Остальное вытащим вопросами.',
          },
          {
            q: 'Кто ведёт проект с вашей стороны?',
            a: 'Проект ведёт один ответственный человек, он же отвечает на письма. Состав исполнителей меняется по этапам — дизайн, разработка, тесты, — а точка входа у вас одна.',
          },
          {
            q: 'Что делать, если объём меняется в середине проекта?',
            a: 'Новая задача оформляется отдельно: оцениваем, называем срок и цену, решаете вы. Согласованная часть при этом не переписывается и не дорожает.',
          },
          {
            q: 'Подписываете ли вы NDA?',
            a: 'Да, по запросу и до брифа. Подписываем и с ИП, и с компаниями; на этапе оценки NDA уже действует.',
          },
          {
            q: 'Кто наполняет систему товарами и текстами?',
            a: 'Вы. Тексты, фотографии, карточки товаров и их описания в смету не входят — ни на одной из услуг, это написано в разделе «Не входит» на каждой странице. Наше — структура, админка, в которой всё это удобно вести, и перенос того, что уже есть: Excel, 1С, старый сайт. Перенос идёт отдельным этапом и виден в смете отдельной строкой.',
          },
        ],
      },
      {
        title: 'Сроки и процесс',
        items: [
          {
            q: 'Почему оценка занимает 3–5 дней, а не час?',
            a: 'За час можно назвать только диапазон. За 3–5 дней мы разбираем процесс, считаем роли и интеграции и проверяем, есть ли у нужных сервисов API. Иногда именно здесь выясняется, что API нет вовсе. Дальше вы получаете архитектуру, этапы и смету, от которой мы потом не отступаем. Эти несколько дней экономят недели.',
          },
          {
            q: 'Что происходит в конце спринта?',
            a: 'Рабочее демо — версия, которую можно открыть и потыкать самому. Спринт длится две недели.',
          },
          {
            q: 'Можно ли ускорить проект, добавив разработчиков?',
            a: 'Иногда да, но не пропорционально: на небольшой команде вход нового человека съедает время того, кто его вводит. Обычно быстрее урезать объём первого релиза. На брифе покажем, что можно вынести во вторую очередь.',
          },
          {
            q: 'Кто решает, что задача готова?',
            a: 'Вы, на демо. Готово — это когда сценарий проходит целиком на рабочей версии, а не когда разработчик закрыл тикет.',
          },
          {
            q: 'Что если сроки поехали?',
            a: 'Говорим об этом на ближайшем демо, а не в день дедлайна. Дальше два варианта: сдвинуть дату или вынести часть объёма во вторую очередь — выбираете вы. Скрытых переносов не бывает: трекер у вас, по нему видно, где встало.',
          },
        ],
      },
      {
        title: 'Стоимость',
        items: [
          {
            q: 'Почему у вас нет прайс-листа?',
            a: 'За одним словом «сайт» стоит и лендинг на неделю, и платформа на полгода. Цена в вакууме была бы враньём одной из этих сторон.',
          },
          {
            q: 'От чего сильнее всего зависит смета?',
            a: 'От количества ролей и прав, числа интеграций, объёма переносимых данных и сложности отчётов. Отдельная строка — мобильность: хватает адаптивного веба или нужно отдельное приложение. На каждой странице услуги это разобрано в блоке «От чего зависит цена».',
          },
          {
            q: 'Может ли цена вырасти после подписания?',
            a: 'Согласованная смета не меняется. Дорожает только то, что вы добавили сверх объёма, и это оформляется отдельно — с оценкой и вашим «да».',
          },
          {
            q: 'Как устроена оплата?',
            a: 'По этапам, зафиксированным в договоре: каждый этап заканчивается тем, что можно посмотреть, и оплачивается после этого. Оценка в счёт не входит.',
          },
          {
            q: 'Можно ли дешевле, если убрать часть функций?',
            a: 'Да, и это нормальный ход. На брифе разложим объём на «нужно к запуску» и «можно потом» — второе часто оказывается половиной списка.',
          },
        ],
      },
      {
        title: 'Технологии и владение кодом',
        items: [
          {
            q: 'Кому принадлежит код?',
            a: 'Вам. Репозиторий заводится в вашем аккаунте с первого дня, а не передаётся в конце. На руки вы получаете код, документацию, скрипты деплоя и отката и доступы ко всем сервисам.',
          },
          {
            q: 'Как вы выбираете стек?',
            a: 'Под задачу и под то, сколько продукт должен прожить. Мы не берём технологию, которую в Баку некому будет поддержать после нас.',
          },
          {
            q: 'Что если я захочу передать проект другой команде?',
            a: 'Отдаёте им репозиторий и документацию — они уже у вас. Мы не держим ключи и не берём плату за передачу проекта.',
          },
          {
            q: 'Где будут храниться данные?',
            a: 'На инфраструктуре, оформленной на вас: ваш сервер, ваш аккаунт у провайдера, ваш домен.',
          },
          {
            q: 'Что входит в документацию?',
            a: 'Описание архитектуры и модели данных, справочник API, инструкция для админа и короткое видео о типовых операциях. Плюс скрипты деплоя и отката с описанием, что делать, если релиз пошёл не так.',
          },
          {
            q: 'Систему нужно на двух языках, русском и азербайджанском. Это отдельная работа?',
            a: 'Это объём, а не галочка в настройках: два языка — это два комплекта текстов, переключатель, разные форматы дат и чисел, а в документах иногда и разная логика. Закладываем в архитектуру сразу, потому что второй язык, добавленный к готовой системе, обычно означает переделку экранов, а не добавление строк. Для сайтов есть ещё одна деталь: языки живут на отдельных адресах, иначе поисковик видит одну страницу вместо трёх.',
          },
        ],
      },
      {
        title: 'После запуска',
        items: [
          {
            q: 'Что входит в три месяца гарантии?',
            a: 'Мониторинг, исправление ошибок и мелкие правки — три месяца после релиза, бесплатно. Ошибка — это когда система работает не так, как описано в техзадании. Новая функция ошибкой не считается и оценивается отдельно. Гарантия начинается в день релиза.',
          },
          {
            q: 'Чем гарантия отличается от поддержки?',
            a: 'Гарантия длится три месяца и покрывает ошибки. Поддержка — пакет на развитие: новые функции, изменения в процессе, плановые обновления; начинается после гарантии и оплачивается отдельно.',
          },
          {
            q: 'Что вы делаете, если система упала ночью?',
            a: 'Мониторинг присылает уведомление нам, а не вам. В гарантийные три месяца реагируем и чиним; дальше — по условиям пакета поддержки.',
          },
          {
            q: 'Кто платит за сервер, домен и лицензии?',
            a: 'Вы, напрямую провайдеру. Хостинг мы не перепродаём и наценку не делаем — счёт приходит вам, доступ остаётся у вас.',
          },
        ],
      },
      {
        title: 'Когда мы не подходим',
        items: [
          {
            q: 'В каких случаях вы отказываетесь от проекта?',
            a: 'Когда задача закрывается коробкой и разработка не окупится — это видно на брифе, и мы говорим прямо. Когда процесс меняется каждый месяц: система забетонирует вчерашнюю схему. И когда задача из области, где у нас нет опыта.',
          },
          {
            q: 'Работаете ли вы за долю в продукте?',
            a: 'Нет — работаем по договору с фиксированным объёмом и оплатой по этапам.',
          },
          {
            q: 'Берёте ли вы маленькие задачи?',
            a: 'Берём, если это законченный кусок: одна интеграция, одна форма, один отчёт. Час-два правок в чужом коде — не наш формат, и на брифе скажем это сразу.',
          },
          {
            q: 'У нас есть подрядчик, нужно второе мнение — это к вам?',
            a: 'Да. Проводим аудит кода и архитектуры и отдаём письменные выводы: что работает, что придётся переписать, чего не хватает. Аудит не обязывает менять команду; иногда вывод в том, что менять никого не нужно.',
          },
        ],
      },
    ],
  },

  en: {
    meta: {
      title: 'Questions about the work, the contract and support — EXCLAMATION',
      description:
        'How the brief, the free 3–5 day estimate, two-week sprints and the 3-month warranty work. Who owns the code, what moves the quote, and when we turn a project down.',
    },
    eyebrow: 'Questions & answers',
    titleMuted: 'Thirty questions,',
    titleMain: 'answered in full.',
    lead: 'These are the questions that come up on the brief: how the work starts, what moves the quote, who owns the code and what happens after release. The estimate takes 3–5 days and is not billed, sprints run two weeks, and the warranty is three months. Eight short answers sit on the home page; here they are opened wider.',
    questionCount: 30,
    blocks: [
      {
        title: 'Working with us',
        items: [
          {
            q: 'How does a project start?',
            a: 'With a brief — a short call or an email describing the task. Within 3–5 days we come back with an architecture, a stage plan and a firm quote, and that stage is not billed.',
          },
          {
            q: 'What should the brief contain for the estimate to be accurate?',
            a: 'What the business does, who will use the system, what is currently done by hand and where the data lives today. Examples of systems you like, and of systems that annoy you, are worth more to us than a finished specification. We pull the rest out with questions.',
          },
          {
            q: 'Who runs the project on your side?',
            a: 'One responsible person runs the project and answers your email. The people doing the work change by stage — design, build, testing — while your point of contact does not.',
          },
          {
            q: 'You are in Baku. How does that work across time zones?',
            a: 'Baku is UTC+4, which shares a full working day with continental Europe and a long morning with the UK. Written updates land in the tracker daily, and demos are booked to your clock rather than ours. The working language is English throughout: the brief, the documentation, the code comments and the release notes.',
          },
          {
            q: 'Do you sign an NDA?',
            a: 'Yes, on request and before the brief. The NDA is already in force during the estimating stage.',
          },
        ],
      },
      {
        title: 'Timelines and process',
        items: [
          {
            q: 'Why does an estimate take 3–5 days rather than an hour?',
            a: 'An hour buys you a range. In 3–5 days we take the process apart, count the roles and the integrations, and check whether the services you depend on actually expose an API. Sometimes that is where it emerges that one of them does not. What arrives at the end is an architecture, a stage plan and a quote we then hold to. Those few days save weeks.',
          },
          {
            q: 'What happens at the end of a sprint?',
            a: 'A working demo — a version you can open and click through yourself. Sprints run two weeks.',
          },
          {
            q: 'Can adding developers make the project faster?',
            a: 'Sometimes, though never in proportion: on a small team, bringing someone new in eats the time of whoever is doing the bringing. Cutting the scope of the first release is usually quicker. On the brief we show you what can wait for a second pass.',
          },
          {
            q: 'Who decides that a task is done?',
            a: 'You do, at the demo. Done means the scenario runs end to end on a working version, not that a developer closed a ticket.',
          },
          {
            q: 'What happens if the timeline slips?',
            a: 'You hear about it at the next demo, not on the deadline. Two options follow — move the date, or push part of the scope to a second pass — and the choice is yours. Nothing slips quietly: the tracker is yours, and it shows where the work stopped.',
          },
        ],
      },
      {
        title: 'Cost',
        items: [
          {
            q: 'Why is there no price list on the site?',
            a: 'The word “site” covers a week-long landing page and a six-month platform. A number quoted in a vacuum would be a lie to one of them.',
          },
          {
            q: 'What moves the quote most?',
            a: 'The number of roles and permissions, the number of integrations, the volume of data to migrate and how complex the reporting is. Mobile is a line of its own: whether responsive web is enough, or a separate app is needed. Every service page breaks this down under “What moves the quote”.',
          },
          {
            q: 'Can the price rise after signing?',
            a: 'An agreed quote does not move. Only what you add on top of the scope costs more, and that is written up separately — with an estimate, and with your approval before anyone starts.',
          },
          {
            q: 'How does payment work?',
            a: 'By bank transfer against an invoice, in the stages fixed in the contract: each stage ends in something you can look at, and is paid once you have looked. The estimating stage is never invoiced. We contract with companies and with sole traders alike.',
          },
          {
            q: 'Can it cost less if we drop some of the features?',
            a: 'Yes, and it is a sensible move rather than a concession. On the brief we split the scope into what has to ship and what can follow — and the second list is often the longer one.',
          },
        ],
      },
      {
        title: 'Technology and code ownership',
        items: [
          {
            q: 'Who owns the code?',
            a: 'You do. The repository is created in your account on day one rather than handed over at the end. You receive the code, the documentation, the deploy and rollback scripts, and access to every service the system touches.',
          },
          {
            q: 'Is the intellectual property assigned in writing?',
            a: 'Yes, in the contract, and it covers everything produced for the project: source code, design files and documentation. Third-party libraries keep their own open-source licences, which is what makes them usable at all. We retain no right that would let us resell your build to anyone else.',
          },
          {
            q: 'How do you choose the stack?',
            a: 'By the task, and by how long the product has to live. We do not pick a technology nobody in Baku could maintain after us.',
          },
          {
            q: 'What if we want to move the project to another team?',
            a: 'You hand them the repository and the documentation — you have both already. We keep no access to ourselves and charge nothing for the handover.',
          },
          {
            q: 'Where will the data be hosted?',
            a: 'On infrastructure registered to you: your server, your account with the provider, your domain. If the data has to stay inside a particular jurisdiction, say so on the brief. That is a decision far cheaper to make before the architecture than after it.',
          },
          {
            q: 'What does the documentation include?',
            a: 'A description of the architecture and the data model, an API reference, an admin guide and short videos covering the routine operations. Alongside them, the deploy and rollback scripts, with a note on what to do when a release goes wrong.',
          },
        ],
      },
      {
        title: 'After launch',
        items: [
          {
            q: 'What does the three-month warranty cover?',
            a: 'Monitoring, bug fixes and small corrections — three months from release, at no charge. A bug means the system does not behave the way the specification says it should. A new feature is not a bug, and is quoted separately. The warranty starts on release day.',
          },
          {
            q: 'How is the warranty different from support?',
            a: 'The warranty runs three months and covers bugs. Support is a plan for growth — new features, changes to the process, scheduled updates — and it begins once the warranty ends and is paid for separately.',
          },
          {
            q: 'What do you do if the system goes down at night?',
            a: 'Monitoring alerts us, not you. Through the three warranty months we respond and fix it; after that it runs on the terms of the support plan.',
          },
          {
            q: 'Can our own developers take over maintenance?',
            a: 'Yes. The repository, the documentation and the deploy scripts are yours throughout, so a handover is onboarding rather than migration. Say so on the brief and we will keep the stack close to what your developers already know. We can also run the first weeks alongside them, answering questions against the real codebase.',
          },
          {
            q: 'Who pays for the server, the domain and the licences?',
            a: 'You do, directly to the provider. We do not resell hosting and add no markup — the invoice goes to you, and the access stays with you.',
          },
        ],
      },
      {
        title: 'When we are not a fit',
        items: [
          {
            q: 'When do you turn a project down?',
            a: 'When an off-the-shelf tool closes the task and a custom build will not pay for itself — that shows up on the brief, and we say so. When the process changes every month, because a system would set yesterday’s version of it in concrete. And when the task sits in a field we have no experience in.',
          },
          {
            q: 'Do you work for equity?',
            a: 'No — we work under a contract with a fixed scope and payment by stage.',
          },
          {
            q: 'Do you take on small pieces of work?',
            a: 'We do, when it is a finished piece: one integration, one form, one report. An hour or two of edits inside someone else’s code is not our format, and we will say so on the brief.',
          },
          {
            q: 'We have a contractor and want a second opinion — is that something you do?',
            a: 'Yes. We audit the code and the architecture and hand back written findings: what works, what will have to be rewritten, what is missing. The audit does not commit you to changing team; sometimes the finding is that you should not.',
          },
        ],
      },
    ],
  },
};

import type { Locale } from './index';

export interface GuidePoint {
  title: string;
  text: string;
}

export interface GuideTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface GuideSection {
  id: string;
  title: string;
  lead?: string;
  paragraphs?: string[];
  points?: GuidePoint[];
  table?: GuideTable;
}

export interface GuideCopy {
  meta: { title: string; description: string };
  eyebrow: string;
  titleMuted: string;
  titleMain: string;
  lead: string;
  facts: { label: string; value: string }[];
  contentsTitle: string;
  sections: GuideSection[];
  faq: { title: string; items: { q: string; a: string }[] };
  serviceLink: string;
  cta: { title: string; text: string; subject: string };
  published: string;
  modified: string;
}

const published = '2026-08-26';
const modified = '2026-08-26';

const az: Record<string, GuideCopy> = {
  'website-cost': {
    meta: {
      title: 'Bakıda sayt hazırlanması qiymətləri — smeta necə hesablanır?',
      description:
        'Bakıda sayt hazırlanması qiymətini dəyişən amillər: səhifə sayı, dizayn, dillər, admin panel və inteqrasiyalar. Pulsuz smeta 3–5 günə.',
    },
    eyebrow: 'Qiymət bələdçisi · Bakı',
    titleMuted: 'Sayt hazırlanması qiymətləri —',
    titleMain: 'smetanı nə dəyişir?',
    lead:
      'Bakıda sayt hazırlanmasının qiyməti səhifə sayından çox, unikal maketlərin, dillərin, admin panelin və inteqrasiyaların həcmindən asılıdır. EXCLAMATION dəqiq smetanı qısa brifdən sonra 3–5 günə pulsuz hazırlayır; landing adətən 3–5 günə, korporativ sayt isə 1–2 həftəyə yığılır.',
    facts: [
      { label: 'Qiymətləndirmə', value: '3–5 gün' },
      { label: 'Landing', value: '3–5 gün' },
      { label: 'Zəmanət', value: '3 ay' },
    ],
    contentsTitle: 'Bu bələdçidə',
    sections: [
      {
        id: 'why-no-fixed-price',
        title: 'Niyə bir sayt üçün tək qiymət yoxdur?',
        paragraphs: [
          '“Sayt” həm bir məhsulu təqdim edən landing, həm də minlərlə məhsulu, şəxsi kabineti və ödəniş sistemi olan platforma deməkdir. İkisinin eyni qiyməti ola bilməz: iş saatını dizayn variantları, kontent strukturu, backend və inteqrasiyalar yaradır.',
          'Səhifələrin sayı təkbaşına düzgün ölçü deyil. Eyni şablondan yığılan iyirmi səhifə, beş fərqli ssenarisi olan beş səhifədən daha az iş tələb edə bilər.',
          'Dəqiq rəqəm texniki tapşırıqdan sonra yaranır.',
        ],
      },
      {
        id: 'price-drivers',
        title: 'Saytın smetasını ən çox dəyişən altı amil',
        lead: 'Təklifləri müqayisə edəndə yalnız yekun məbləği yox, bu altı sətrin hər birini eyni həcmdə müqayisə edin.',
        points: [
          { title: 'Unikal səhifə tipləri', text: 'Ana səhifə, kataloq, məhsul kartı, xəbər və şəxsi kabinet ayrıca dizayn və test tələb edir.' },
          { title: 'Dil sayı', text: 'AZ, RU və EN ayrı URL, meta, hreflang, mətn yerləşdirməsi və hər ekran üçün yoxlama deməkdir.' },
          { title: 'Kontent idarəetməsi', text: 'Statik sayt daha sadədir; xəbərlər, vakansiyalar və məhsullar üçün admin panel ayrıca sistemdir.' },
          { title: 'İnteqrasiyalar', text: 'Ödəniş, çatdırılma, CRM, xəritə, 1C və messencerlərin hər biri ayrıca API işi yaradır.' },
          { title: 'Kontentin vəziyyəti', text: 'Hazır mətn və şəkil işi sürətləndirir. Kontent yoxdursa, struktur təsdiqlənmədən dizayn başlaya bilmir.' },
          { title: 'Buraxılışdan sonrakı iş', text: 'Analitika, monitorinq, zəmanət, təlimat və kodun təhvil verilməsi təklifdə ayrıca görünməlidir.' },
        ],
      },
      {
        id: 'scope-table',
        title: 'Hansı sayt nə qədər vaxt aparır?',
        table: {
          caption: 'Tipik layihə həcmi və müddəti',
          headers: ['Növ', 'Adətən daxil olur', 'Tipik müddət'],
          rows: [
            ['Landing', 'Bir təklif, forma, analitika', '3–5 gün'],
            ['Korporativ sayt', '5–10 səhifə, 1–3 dil, əlaqə forması', '1–2 həftə'],
            ['Kataloq və portal', 'Kateqoriyalar, filtr, admin panel, çoxdillilik', '3–5 həftə'],
            ['Onlayn mağaza', 'Kataloq, səbət, ödəniş, çatdırılma', '2–4 həftə'],
          ],
        },
      },
      {
        id: 'compare-quotes',
        title: 'İki təklifi necə düzgün müqayisə etmək olar?',
        paragraphs: [
          'Bir təklifdə dizayn, mobil versiya, mətnlərin yerləşdirilməsi, texniki SEO və analitika daxil, digərində isə ayrıca hesablanırsa, yekun rəqəmlər müqayisə edilmir. Hər təklifdə “daxildir”, “daxil deyil” və təhvil verilən nəticələr ayrıca yazılmalıdır.',
          'Kodun və domen hesablarının kimdə qalacağını da əvvəlcədən yoxlayın. Repozitoriya, analitika və hostinq sizin hesabınızdadırsa, sonradan başqa komandaya keçmək üçün saytı yenidən qurmaq lazım gəlmir.',
        ],
        points: [
          { title: 'Eyni həcm', text: 'Səhifə tipləri, dillər, formalar və inteqrasiyalar hər iki smetada eyni olmalıdır.' },
          { title: 'Eyni nəticə', text: 'Dizayn faylları, repo, admin girişi, analitika və təlimatın kimə verildiyini yazılı görün.' },
          { title: 'Eyni məsuliyyət', text: 'Test, reliz, monitorinq və zəmanətin qiymətə daxil olub-olmadığını dəqiqləşdirin.' },
        ],
      },
      {
        id: 'brief',
        title: '3–5 günə dəqiq smeta üçün nə lazımdır?',
        lead: 'İlk brif uzun sənəd deyil. Beş cavab qiymətləndirməyə başlamaq üçün kifayətdir.',
        points: [
          { title: 'Məqsəd', text: 'Sayt ziyarətçidən hansı hərəkəti gözləyir: zəng, sifariş, qeydiyyat, yoxsa kataloqa baxış?' },
          { title: 'Auditoriya', text: 'Kim gələcək, hansı dildə və daha çox telefondan, yoxsa kompüterdən?' },
          { title: 'Bölmələr', text: 'İlk versiyada mütləq olan səhifələr və sonraya qala bilən hissələr.' },
          { title: 'İnteqrasiyalar', text: 'Ödəniş, CRM, çatdırılma, 1C və başqa sistemlərlə əlaqə.' },
          { title: 'Kontent', text: 'Hazır mətn, foto, məhsul bazası və brend materiallarının olub-olmaması.' },
        ],
      },
    ],
    faq: {
      title: 'Sayt qiymətləri haqqında qısa cavablar',
      items: [
        { q: 'Saytın dəqiq qiymətini niyə bir zəngdə demirsiniz?', a: 'Saytın dəqiq qiyməti səhifə tipləri, dillər, admin panel və inteqrasiyalar müəyyənləşəndən sonra hesablanır. EXCLAMATION qısa brifdən sonra 3–5 gün ərzində pulsuz, mərhələlərə bölünmüş smeta verir.' },
        { q: 'Domen və hostinq smetaya daxildirmi?', a: 'Domen və hostinqin qurulması işə daxildir, onların provayderə ödənən abunə haqqı isə ayrıca xərcdir. Hesablar müştərinin adına açılır və studiya hostinqi üzərinə marja qoyaraq yenidən satmır.' },
        { q: 'Ödənişi mərhələlərlə etmək olar?', a: 'Sayt layihəsi mərhələlərə bölünür və hər mərhələ baxa biləcəyiniz nəticədən sonra ödənir: struktur, dizayn, işlək versiya və reliz.' },
        { q: 'Ucuz təklifdə ən çox nə çatışmır?', a: 'Ucuz sayt təklifində çox vaxt unikal mobil dizayn, kontentin yerləşdirilməsi, texniki SEO, analitika, test və relizdən sonrakı zəmanət ayrıca qalır. Müqayisə zamanı yekun rəqəmdən əvvəl daxil olan işləri yoxlayın.' },
      ],
    },
    serviceLink: 'Veb sayt hazırlanması xidmətinə bax',
    cta: {
      title: 'Saytınız üçün dəqiq smeta alın',
      text: 'Məqsədi, lazım olan bölmələri və hazır kontenti yazın. 3–5 gün ərzində struktur, müddət və mərhələlərə bölünmüş smeta ilə qayıdırıq; qiymətləndirmə pulsuzdur.',
      subject: 'Sayt hazırlanması qiyməti bələdçisindən müraciət',
    },
    published,
    modified,
  },
  'crm-cost': {
    meta: {
      title: 'Azərbaycanda CRM sistemi qiyməti — smetanı nə dəyişir?',
      description:
        'CRM sistemi qiymətini rollar, inteqrasiyalar, məlumat köçürülməsi və hesabatlar müəyyən edir. Pulsuz arxitektura və smeta 3–5 günə.',
    },
    eyebrow: 'CRM bələdçisi · Azərbaycan',
    titleMuted: 'CRM sistemi qiyməti —',
    titleMain: 'hesab necə yaranır?',
    lead:
      'Azərbaycanda CRM sistemi üçün yekun qiyməti istifadəçi sayından çox rollar, satış ssenariləri, inteqrasiyalar, köhnə məlumatın vəziyyəti və hesabatlar dəyişir. Fərdi CRM üçün tipik müddət 2–4 həftədir; EXCLAMATION arxitektura və dəqiq smetanı 3–5 günə pulsuz hazırlayır.',
    facts: [
      { label: 'Qiymətləndirmə', value: '3–5 gün' },
      { label: 'Tipik CRM', value: '2–4 həftə' },
      { label: 'Zəmanət', value: '3 ay' },
    ],
    contentsTitle: 'Bu bələdçidə',
    sections: [
      {
        id: 'models',
        title: 'Hazır CRM və fərdi sistemin xərc modeli',
        paragraphs: [
          'Hazır CRM-də başlanğıc daha sürətlidir: lisenziya seçilir, satış hunisi qurulur, istifadəçilər əlavə olunur. Xərc abunə, istifadəçi sayı, əlavə modullar, inteqrator işi və sonrakı dəyişikliklərdən yığılır.',
          'Fərdi CRM-də ilkin iş daha böyükdür. Əvəzində rollar, hesabatlar və proses sizin iş qaydanıza görə qurulur, kod və məlumat sizin hesabınızda qalır.',
          'Doğru müqayisə bir aylıq deyil, ən azı 12 aylıq ümumi xərcdir.',
        ],
      },
      {
        id: 'drivers',
        title: 'CRM smetasını dəyişən əsas işlər',
        points: [
          { title: 'Rollar və giriş hüquqları', text: 'Menecer, rəhbər, operator, anbardar və müştəri kabineti fərqli ekran və icazə qaydaları yaradır.' },
          { title: 'Satış və sənəd axını', text: 'Bir huni ilə bir neçə filialın, məhsul xəttinin və təsdiq mərhələsinin məntiqi eyni deyil.' },
          { title: 'İnteqrasiyalar', text: 'WhatsApp, telefoniya, sayt formaları, 1C, ödəniş və e-poçt ayrıca API və test işi tələb edir.' },
          { title: 'Məlumat köçürülməsi', text: 'Səliqəli Excel bir işdir; dublikat və boş sahələrlə on illik bazanın təmizlənməsi başqa iş.' },
          { title: 'Hesabatlar', text: 'Hazır cədvəl, satış proqnozu, filial müqayisəsi və rəhbər paneli müxtəlif hesablama məntiqinə malikdir.' },
          { title: 'Mobil istifadə', text: 'Adaptiv veb kifayət edə bilər; ayrıca mobil tətbiq offline iş və cihaz funksiyaları lazım olanda yaranır.' },
        ],
      },
      {
        id: 'scope',
        title: 'Layihə həcmi və tipik müddətlər',
        table: {
          caption: 'CRM layihəsinin tipik mərhələləri',
          headers: ['Həcm', 'Nə daxildir', 'Tipik müddət'],
          rows: [
            ['Hazır CRM qurulması', 'Huni, sahələr, istifadəçilər, əsas avtomatlaşdırma', '1–2 həftə'],
            ['Fərdi CRM', 'Rollar, satış axını, hesabatlar, 1–2 inteqrasiya', '2–4 həftə'],
            ['Kompleks platforma', 'Bir neçə modul, miqrasiya, filiallar, xüsusi analitika', '1–2 ay'],
          ],
        },
      },
      {
        id: 'tco',
        title: '12 aylıq ümumi xərci necə hesablamaq olar?',
        lead: 'Lisenziya qiyməti CRM büdcəsinin yalnız bir sətridir.',
        points: [
          { title: 'Lisenziya və istifadəçilər', text: 'Komanda böyüyəndə tarifin necə dəyişdiyini hesablayın.' },
          { title: 'Qurulum və inteqrator', text: 'Huninin, sahələrin, avtomatlaşdırmanın və təlimin birdəfəlik işini ayrıca yazın.' },
          { title: 'Əlavələr və kanallar', text: 'Telefoniya, WhatsApp, analitika və sənəd modullarının abunələrini daxil edin.' },
          { title: 'Dəyişikliklər', text: 'Yeni filial, yeni hesabat və proses dəyişikliyinin kim tərəfindən və necə qiymətləndiriləcəyini bilin.' },
          { title: 'Çıxış xərci', text: 'Məlumatı tam ixrac etmək və başqa komandaya keçmək üçün əlavə ödəniş olub-olmadığını yoxlayın.' },
        ],
      },
      {
        id: 'when-custom',
        title: 'Fərdi CRM nə vaxt artıq xərcdir?',
        paragraphs: [
          'Komandada bir-iki nəfər və ayda iyirmidən az sövdələşmə varsa, səliqəli cədvəl və hazır CRM daha sərfəlidir. Proses hər ay dəyişirsə, xüsusi sistem dünənki qaydanı betonlaşdıracaq.',
          'Hazır CRM ehtiyacların səksən faizini əlavə kodsuz bağlayırsa, sıfırdan sistem qurmaq üçün səbəb yoxdur. Fərdi CRM qeyri-standart hesablamalar, xüsusi sənədlər, bir neçə kritik inteqrasiya və uzunmüddətli məlumat nəzarəti lazım olanda məntiqlidir.',
        ],
      },
    ],
    faq: {
      title: 'CRM qiyməti haqqında qısa cavablar',
      items: [
        { q: 'CRM sistemi üçün dəqiq smeta necə hazırlanır?', a: 'CRM sistemi üçün dəqiq smeta rollar, satış mərhələləri, inteqrasiyalar, köçürüləcək məlumat və hesabatlar yazıldıqdan sonra hazırlanır. EXCLAMATION bu arxitekturanı və mərhələlərə bölünmüş smetanı 3–5 günə pulsuz verir.' },
        { q: 'Hazır CRM həmişə daha ucuzdurmu?', a: 'Hazır CRM başlanğıcda adətən daha sürətli və daha ucuzdur. Uzunmüddətli xərc istifadəçi lisenziyaları, ödənişli modullar, inteqrator işi və proses dəyişiklikləri ilə artdığı üçün seçim ən azı 12 aylıq ümumi xərcə görə edilməlidir.' },
        { q: 'Məlumat köçürülməsi ayrıca hesablanırmı?', a: 'CRM məlumat köçürülməsi bazanın həcmi və vəziyyətinə görə ayrıca iş sətridir. Əvvəl sınaq köçürməsi edilir, nəticə yoxlanır, sonra əsas baza daşınır; köhnə sistem təsdiqə qədər paralel işləyir.' },
        { q: 'CRM üçün ayrıca mobil tətbiq lazımdırmı?', a: 'CRM üçün ayrıca mobil tətbiq yalnız offline iş, kamera, geolokasiya və ya cihaz bildirişləri kritik olanda lazımdır. Əksər ofis və satış komandaları üçün telefona uyğun adaptiv veb interfeys kifayətdir.' },
      ],
    },
    serviceLink: 'CRM və ERP hazırlanması xidmətinə bax',
    cta: {
      title: 'CRM smetasını prosesinizə görə alın',
      text: 'Komandanın rollarını, hazırda istifadə etdiyiniz cədvəl və sistemləri, itən məlumatı və lazım olan inteqrasiyaları yazın. 3–5 günə arxitektura və dəqiq smeta hazırlayırıq.',
      subject: 'CRM sistemi qiyməti bələdçisindən müraciət',
    },
    published,
    modified,
  },
  'crm-choice': {
    meta: {
      title: 'Bitrix24, amoCRM yoxsa fərdi CRM? Azərbaycan üçün seçim',
      description:
        'Bitrix24, amoCRM və fərdi CRM müqayisəsi: satış, proseslər, inteqrasiyalar, məlumat nəzarəti və 12 aylıq xərc üzrə seçim bələdçisi.',
    },
    eyebrow: 'CRM seçimi · Azərbaycan',
    titleMuted: 'Bitrix24, amoCRM —',
    titleMain: 'yoxsa fərdi CRM?',
    lead:
      'amoCRM satış hunisi və messencerlərlə işləyən kiçik komandaya, Bitrix24 satışla yanaşı tapşırıq və daxili işi bir platformada istəyən şirkətə uyğundur. Fərdi CRM proses qutuya sığmayanda, xüsusi hesablamalar və kritik inteqrasiyalar olduqda seçilir; qərarı cari tariflə yox, 12 aylıq xərc və çıxış imkanları ilə verin.',
    facts: [
      { label: 'Müqayisə', value: '7 meyar' },
      { label: 'Xərc dövrü', value: '12 ay' },
      { label: 'Audit', value: '3–5 gün' },
    ],
    contentsTitle: 'Bu müqayisədə',
    sections: [
      {
        id: 'quick-choice',
        title: 'Qısa seçim qaydası',
        points: [
          { title: 'amoCRM', text: 'Əsas iş satış hunisi, zəng, e-poçt və çatdırsa; komanda alətin tez öyrənilməsini istəyirsə.' },
          { title: 'Bitrix24', text: 'CRM ilə birlikdə tapşırıqlar, layihələr, daxili kommunikasiya və sənədlər bir yerdə lazımdırsa.' },
          { title: 'Fərdi CRM', text: 'Standart sahələr və avtomatlaşdırma kifayət etmirsə, öz hesablamanız, sənədiniz və bir neçə kritik sistemlə əlaqə varsa.' },
        ],
      },
      {
        id: 'comparison',
        title: 'Bitrix24, amoCRM və fərdi CRM müqayisəsi',
        lead: 'Tariflər və ayrı-ayrı funksiyalar dəyişə bilər. Müqavilədən əvvəl aktual şərtləri məhsulların rəsmi səhifələrində yoxlayın.',
        table: {
          caption: 'Üç CRM yanaşmasının praktik fərqi',
          headers: ['Meyar', 'amoCRM', 'Bitrix24', 'Fərdi CRM'],
          rows: [
            ['Əsas fokus', 'Satış hunisi və müştəri kommunikasiyası', 'CRM, tapşırıq və daxili iş sahəsi', 'Şirkətin öz prosesi'],
            ['Başlanğıc', 'Sürətli', 'Mərhələli qurulum tələb edir', 'Analiz və development tələb edir'],
            ['Dəyişiklik sərhədi', 'Sahələr, vidcetlər, API', 'Modullar, proses konstruktoru, API', 'Kod imkan verdiyi qədər'],
            ['Davamlı ödəniş', 'Lisenziya və əlavələr', 'Tarif, əlavələr və bəzən server', 'Hostinq və dəstək'],
            ['Məlumat nəzarəti', 'Provayder qaydaları daxilində', 'Bulud və ya seçilən versiyadan asılıdır', 'Sizin hesab və infrastrukturunuzda'],
            ['Kimə uyğundur', 'Satış yönümlü kiçik və orta komanda', 'Bir neçə şöbəni birləşdirən komanda', 'Qeyri-standart və uzunömürlü proses'],
          ],
        },
      },
      {
        id: 'tco',
        title: 'Tarif yox, 12 aylıq xərc',
        paragraphs: [
          'Ən ucuz aylıq tarif seçimin yalnız başlanğıcıdır. İstifadəçi sayı, telefoniya, WhatsApp, əlavə vidcetlər, məlumat köçürülməsi, inteqrator saatları və komandanın təlimi bir cədvəldə toplanmalıdır.',
          'Fərdi sistemdə də yalnız development smetasına baxmaq səhvdir. Hostinq, monitorinq, təhlükəsizlik yeniləmələri, yeni funksiyalar və sistemi bilən komandanın mövcudluğu ayrıca hesablanır.',
          'Çıxış planı müqavilədən əvvəl yazılır.',
        ],
      },
      {
        id: 'questions',
        title: 'Seçimdən əvvəl veriləcək yeddi sual',
        points: [
          { title: 'Satışdan başqa nə idarə olunur?', text: 'Tapşırıq, anbar, sənəd və HR eyni platformada doğrudan lazımdırmı?' },
          { title: 'Hansı kanallar məcburidir?', text: 'WhatsApp, telefoniya, Instagram, sayt forması və e-poçtun real inteqrasiya yolunu yoxlayın.' },
          { title: 'Hansı hesabat hazır deyil?', text: 'Rəhbərin hər həftə Excel-də yığdığı hesabat seçim meyarıdır.' },
          { title: 'Məlumat harada qalır?', text: 'Eksport formatını, faylları və əlaqəli qeydlərin tam çıxıb-çıxmadığını sınaqdan keçirin.' },
          { title: 'Proses nə qədər sabitdir?', text: 'Hər ay dəyişən proses üçün fərdi kod tez köhnəlir.' },
          { title: 'Komanda nəyi öyrənəcək?', text: 'Funksiyası çox olan sistem istifadə olunmursa, kağız üzərindəki üstünlük nəticəyə çevrilmir.' },
          { title: 'İki ildən sonra kim dəstəkləyəcək?', text: 'Partnyor dəyişəndə sənədlər, girişlər və kod əlçatan qalmalıdır.' },
        ],
      },
      {
        id: 'migration',
        title: 'Sistemi dəyişəndə məlumat necə qorunur?',
        paragraphs: [
          'Əvvəl sahələr və əlaqələr xəritələnir: şirkət, kontakt, sövdələşmə, tapşırıq, şərh və fayl. Sonra bazanın kiçik hissəsi sınaq üçün köçürülür və istifadəçilər nəticəni yoxlayır.',
          'Əsas köçürmə təsdiqdən sonra edilir. Köhnə sistem bir müddət yalnız oxuma rejimində saxlanır; qeydlərin sayı və əsas hesabatlar iki tərəfdə tutuşdurulur.',
        ],
      },
    ],
    faq: {
      title: 'CRM seçimi haqqında qısa cavablar',
      items: [
        { q: 'Kiçik satış komandası üçün hansı CRM daha uyğundur?', a: 'Kiçik satış komandası əsasən huni, zəng və messencerlə işləyirsə, amoCRM kimi satış yönümlü hazır sistem adətən daha tez mənimsənilir. Tapşırıq, layihə və daxili kommunikasiya da eyni alətdə lazımdırsa, Bitrix24 ayrıca qiymətləndirilməlidir.' },
        { q: 'Bitrix24 və ya amoCRM-i sonradan fərdi sistemə dəyişmək olar?', a: 'Bitrix24 və amoCRM-dən fərdi CRM-ə keçmək mümkündür, amma əvvəl eksportda kontaktların, sövdələşmələrin, tarixçənin, faylların və xüsusi sahələrin tam çıxması yoxlanmalıdır. Miqrasiya sınaq köçürməsi ilə başlamalıdır.' },
        { q: 'Fərdi CRM nə vaxt özünü doğruldur?', a: 'Fərdi CRM şirkətin prosesi standart huniyə sığmayanda, xüsusi hesablamalar və sənəd formaları olanda, bir neçə kritik inteqrasiya tələb ediləndə və sistemin illərlə istifadə olunacağı planlaşdırılanda özünü doğruldur.' },
        { q: 'CRM tariflərini bu səhifədən seçmək olar?', a: 'CRM tarifləri və paketlər dəyişdiyi üçün aktual qiymət və funksiya şərtləri Bitrix24 və amoCRM-in rəsmi səhifələrində yoxlanmalıdır. Bu bələdçi məhsulların daimi iş modelini və seçim meyarlarını müqayisə edir.' },
      ],
    },
    serviceLink: 'CRM auditi və fərdi sistem xidmətinə bax',
    cta: {
      title: 'CRM seçimini prosesinizə görə yoxlayaq',
      text: 'Hazırda işlədiyiniz alətləri, komandanın ölçüsünü, satış mərhələlərini və məcburi inteqrasiyaları yazın. 3–5 günə seçim xəritəsi və lazım olarsa fərdi sistem smetası veririk.',
      subject: 'CRM seçimi bələdçisindən müraciət',
    },
    published,
    modified,
  },
  'mobile-cost': {
    meta: {
      title: 'Mobil tətbiq hazırlanması qiyməti — smetanı nə dəyişir?',
      description:
        'Mobil tətbiq qiymətini platforma, ekranlar, backend, inteqrasiyalar və offline iş dəyişir. Mobil MVP 3–5 həftə, pulsuz smeta 3–5 günə.',
    },
    eyebrow: 'Mobil məhsul · Qiymət bələdçisi',
    titleMuted: 'Mobil tətbiq hazırlanması qiyməti —',
    titleMain: 'funksiyadan başlayır.',
    lead:
      'Mobil tətbiqin qiymətini iOS və Android seçimi, ekran sayı, backend, ödəniş, bildirişlər, offline iş və admin panel müəyyən edir. Mobil MVP adətən 3–5 həftə, tam məhsul 2–3 ay çəkir; EXCLAMATION dəqiq smetanı brifdən sonra 3–5 günə pulsuz verir.',
    facts: [
      { label: 'Mobil MVP', value: '3–5 həftə' },
      { label: 'Tam məhsul', value: '2–3 ay' },
      { label: 'Qiymətləndirmə', value: '3–5 gün' },
    ],
    contentsTitle: 'Bu bələdçidə',
    sections: [
      {
        id: 'platform',
        title: 'Nativ, kross-platforma, yoxsa mobil veb?',
        table: {
          caption: 'Yanaşmaların iş həcminə təsiri',
          headers: ['Yanaşma', 'Uyğun olduğu hal', 'Smetaya təsir'],
          rows: [
            ['Adaptiv veb / PWA', 'Forma, kabinet, kataloq və sadə əməliyyatlar', 'Ən az ayrıca mobil iş'],
            ['Flutter / React Native', 'iOS və Android-də eyni məhsul məntiqi', 'Bir əsas kod bazası'],
            ['Nativ Swift + Kotlin', 'Cihaz funksiyası, ağır animasiya və platforma fərqləri', 'İki tətbiq və iki test xətti'],
          ],
        },
      },
      {
        id: 'drivers',
        title: 'Mobil tətbiq smetasını dəyişən yeddi amil',
        points: [
          { title: 'Ekran və ssenarilər', text: 'Ekran sayı deyil, həmin ekranlardakı vəziyyətlər, səhvlər və istifadəçi yolları əsas iş həcmidir.' },
          { title: 'Backend və admin panel', text: 'Hesablar, sifarişlər, kontent və analitika üçün ayrıca server hissəsi lazım ola bilər.' },
          { title: 'Giriş və təhlükəsizlik', text: 'SMS, e-poçt, sosial giriş, biometrika və rol sistemi fərqli test tələb edir.' },
          { title: 'Ödəniş və abunə', text: 'Bank inteqrasiyası, App Store və Google Play qaydaları məhsul modelinə təsir edir.' },
          { title: 'Offline iş və sinxron', text: 'İnternetsiz dəyişikliklərin saxlanması və sonra toqquşmadan birləşdirilməsi ayrıca arxitekturadır.' },
          { title: 'Cihaz funksiyaları', text: 'Kamera, geolokasiya, Bluetooth, push və fon rejimi platforma üzrə yoxlanır.' },
          { title: 'Reliz və monitorinq', text: 'Store materialları, yoxlama prosesi, crash hesabatları və yeniləmə planı buraxılışın bir hissəsidir.' },
        ],
      },
      {
        id: 'scope',
        title: 'MVP ilə tam məhsulun fərqi',
        paragraphs: [
          'MVP bir əsas istifadəçi problemini başdan sona həll edir. Qeydiyyat, əsas əməliyyat, nəticə və ölçmə qalır; ikinci dərəcəli rollar, geniş filtr, loyallıq və mürəkkəb analitika sonrakı versiyaya keçir.',
          'Tam məhsulda kənar vəziyyətlər artır: hesabın bərpası, bildiriş parametrləri, fərqli ödəniş halları, dəstək, admin alətləri və mağaza yeniləmələri. Ekran sayı eyni qalsa da, test matrisi böyüyür.',
        ],
      },
      {
        id: 'quote',
        title: 'Tətbiq təkliflərini necə müqayisə etmək olar?',
        points: [
          { title: 'Platformalar', text: 'Təklif yalnız Android, yalnız iOS, yoxsa hər ikisini əhatə edir?' },
          { title: 'Server hissəsi', text: 'Backend, admin panel, məlumat bazası və hostinq qurulması daxildirmi?' },
          { title: 'Dizayn', text: 'Sadəcə ekran maketi deyil, loading, error və boş vəziyyətlər də hazırlanırmı?' },
          { title: 'Store relizi', text: 'İmzalama, store kartları, privacy formaları və ilk göndəriş kimin üzərindədir?' },
          { title: 'Kod və hesablar', text: 'Repo, Apple/Google hesabları, analitika və push servisi müştərinin nəzarətində qalırmı?' },
        ],
      },
      {
        id: 'brief',
        title: 'Smeta üçün hazırlayacağınız qısa məlumat',
        paragraphs: [
          'Bir cümlə ilə istifadəçi problemini, əsas üç ssenarini, iOS/Android tələbini, ödəniş və başqa sistemlərlə inteqrasiyanı yazın. Mövcud dizayn, API və ya prototip varsa, onu da əlavə edin.',
          'İlk versiyada mütləq olan funksiyaları ayrıca qeyd edin. Qalanları prioritet sırası ilə yazmaq smetanı bir böyük məhsul kimi yox, mərhələlər üzrə görməyə imkan verir.',
        ],
      },
    ],
    faq: {
      title: 'Mobil tətbiq qiyməti haqqında qısa cavablar',
      items: [
        { q: 'Həm iOS, həm Android üçün iki dəfə ödəniş olunurmu?', a: 'Flutter və React Native kimi kross-platforma yanaşmasında əsas kod bazası ortaqdır, buna görə iş iki tam ayrı tətbiq kimi hesablanmır. Nativ Swift və Kotlin seçiləndə platforma kodu və test xətti ayrılır.' },
        { q: 'Mobil tətbiq üçün backend mütləqdirmi?', a: 'Mobil tətbiq istifadəçi hesabı, sifariş, ödəniş, sinxron məlumat və admin panel tələb edirsə, backend lazımdır. Yalnız cihazda işləyən sadə kalkulyator və ya məlumat tətbiqi serversiz qala bilər.' },
        { q: 'App Store və Google Play-ə yerləşdirmə daxildirmi?', a: 'EXCLAMATION mobil layihəsində ilk App Store və Google Play göndərişini, texniki store materiallarını və yoxlama zamanı tələb olunan düzəlişləri reliz mərhələsinə daxil edir. Developer hesabları müştərinin adına açılır.' },
        { q: 'Əvvəl yalnız Android ilə başlamaq olar?', a: 'Auditoriyanın böyük hissəsi Android istifadə edirsə, ilk versiyanı yalnız Android üçün buraxmaq mümkündür. Sonradan iOS planı varsa, backend və dizayn sistemi başlanğıcdan iki platformaya uyğun qurulmalıdır.' },
      ],
    },
    serviceLink: 'Mobil tətbiq hazırlanması xidmətinə bax',
    cta: {
      title: 'Mobil məhsulun ilk versiyasını hesablayın',
      text: 'Əsas istifadəçi ssenarisini, platformaları və məcburi inteqrasiyaları yazın. 3–5 günə MVP sərhədi, arxitektura, müddət və smeta ilə qayıdırıq.',
      subject: 'Mobil tətbiq qiyməti bələdçisindən müraciət',
    },
    published,
    modified,
  },
  'ecommerce-cost': {
    meta: {
      title: 'Onlayn mağaza hazırlanması qiyməti — Bakı üçün bələdçi',
      description:
        'Onlayn mağaza qiymətini kataloq, ödəniş, çatdırılma, anbar, dillər və inteqrasiyalar dəyişir. Tipik müddət 2–4 həftədir.',
    },
    eyebrow: 'E-commerce · Qiymət bələdçisi',
    titleMuted: 'Onlayn mağaza qiyməti —',
    titleMain: 'kataloqdan sonra başlayır.',
    lead:
      'Onlayn mağazanın qiymətini məhsul sayı yox, kataloq quruluşu, variantlar, ödəniş, çatdırılma, anbar sinxronu, dillər və kampaniya qaydaları müəyyən edir. Sadə mağaza adətən 2–4 həftəyə hazırlanır; EXCLAMATION dəqiq smetanı 3–5 günə pulsuz verir.',
    facts: [
      { label: 'Sadə mağaza', value: '2–4 həftə' },
      { label: 'Platforma', value: '4–6 həftə' },
      { label: 'Qiymətləndirmə', value: '3–5 gün' },
    ],
    contentsTitle: 'Bu bələdçidə',
    sections: [
      {
        id: 'models',
        title: 'Hazır platforma, yoxsa fərdi mağaza?',
        paragraphs: [
          'Standart kataloq, səbət və ödəniş üçün hazır platforma daha tez işə düşür. Abunə, mövzu, tətbiqlər və platformanın komissiya qaydaları ümumi xərcə daxil edilməlidir.',
          'Fərdi mağaza qeyri-standart qiymət hesabı, xüsusi B2B kabineti, bir neçə anbar, mürəkkəb çatdırılma və hazır platformanın məhdudlaşdırdığı inteqrasiya olanda məntiqlidir.',
          'İlk seçim satış ssenarisidir, texnologiya sonra gəlir.',
        ],
      },
      {
        id: 'drivers',
        title: 'Mağaza smetasını dəyişən yeddi amil',
        points: [
          { title: 'Kataloq modeli', text: 'Kateqoriya, marka, ölçü, rəng, komplekt və məhsul variantlarının əlaqəsi filtr və admin işini müəyyən edir.' },
          { title: 'Ödəniş', text: 'Bir bank, bir neçə valyuta, taksit, geri qaytarma və ödəniş statuslarının sinxronu fərqli həcmdir.' },
          { title: 'Çatdırılma', text: 'Sabit tarif, zona, kuryer API-si, pickup və beynəlxalq çatdırılma ayrıca qaydalardır.' },
          { title: 'Anbar və uçot', text: 'Qalıqların əl ilə idarəsi ilə 1C, ERP və bir neçə mağaza arasında real vaxt sinxronu eyni iş deyil.' },
          { title: 'Dil və valyuta', text: 'Hər dil ayrıca URL və mətn, valyuta isə qiymət, yuvarlaqlaşdırma və hesabat qaydası yaradır.' },
          { title: 'Kampaniyalar', text: 'Promokod, set, hədiyyə, loyallıq və müştəri qrupu üzrə qiymət checkout məntiqini böyüdür.' },
          { title: 'Kontent və import', text: 'Məhsul bazasının təmizliyi, şəkillər və təsvirlər reliz vaxtına birbaşa təsir edir.' },
        ],
      },
      {
        id: 'scope',
        title: 'Mağaza həcmi və tipik müddət',
        table: {
          caption: 'Tipik e-commerce ssenariləri',
          headers: ['Ssenari', 'Nə daxildir', 'Tipik müddət'],
          rows: [
            ['Sadə mağaza', 'Kataloq, səbət, bir ödəniş, standart çatdırılma', '2–4 həftə'],
            ['Çoxdilli mağaza', 'AZ/RU/EN, filtr, kampaniya, admin panel', '3–5 həftə'],
            ['Ticarət platforması', 'Anbar, ERP, B2B kabinet, mürəkkəb qaydalar', '4–6 həftə'],
          ],
        },
      },
      {
        id: 'hidden-costs',
        title: 'Smetadan kənarda qalan xərcləri əvvəl görün',
        points: [
          { title: 'Bank və provayder haqqı', text: 'Ödəniş komissiyası və hesabın açılması development smetasından ayrıdır.' },
          { title: 'Domen və hostinq', text: 'Qurulum daxil ola bilər, illik abunə isə provayderə ödənir.' },
          { title: 'Məhsul kontenti', text: 'Foto, təsvir, tərcümə və minlərlə kartın doldurulması ayrıca resurs tələb edir.' },
          { title: 'Dəstək və yeniləmə', text: 'Monitorinq, platforma yeniləmələri və kampaniya dəyişikliklərinin hansı paketdə olduğunu yazılı görün.' },
          { title: 'Reklam və SEO işi', text: 'Texniki SEO bazası developmentə daxil ola bilər; kontent və reklam kampaniyası ayrıca davamlı işdir.' },
        ],
      },
      {
        id: 'brief',
        title: 'Dəqiq smeta üçün mağaza brifi',
        paragraphs: [
          'Məhsul sayını, kateqoriya və variantları, dilləri, ödəniş bankını, çatdırılma qaydasını və hazırda istifadə olunan anbar sistemini yazın. Məhsul bazasından on nümunə sətir filtr və import işini görmək üçün kifayətdir.',
          'İlk relizdə mütləq olan kampaniyaları ayrıca qeyd edin. Loyallıq, mobil tətbiq və B2B kabinet sonrakı mərhələyə qala bilirsə, mağaza daha tez satışa başlayır.',
        ],
      },
    ],
    faq: {
      title: 'Onlayn mağaza qiyməti haqqında qısa cavablar',
      items: [
        { q: 'Məhsul sayı qiyməti birbaşa artırırmı?', a: 'Onlayn mağazada məhsul sayı yalnız kartların əl ilə doldurulması lazım olanda xərcə birbaşa təsir edir. Development həcmini daha çox variantlar, filtrlər, import formatı, anbar sinxronu və kampaniya qaydaları dəyişir.' },
        { q: 'Ödəniş sistemi mağaza smetasına daxildirmi?', a: 'Bir ödəniş sisteminin texniki inteqrasiyası razılaşdırılmış mağaza smetasına daxil edilə bilər. Bankın qoşulma şərtləri, komissiyası və tələb etdiyi hüquqi sənədlər isə bankla müştəri arasında ayrıca həll olunur.' },
        { q: 'Hazır platforma fərdi mağazadan daha sərfəlidirmi?', a: 'Standart kataloq və checkout üçün hazır platforma adətən daha tez və daha sərfəli başlayır. Qeyri-standart qiymət, bir neçə anbar, B2B kabinet və xüsusi inteqrasiyalar artdıqca platforma əlavələrinin və məhdudiyyətlərinin ümumi xərci ayrıca hesablanmalıdır.' },
        { q: 'Mağaza açıldıqdan sonra SEO hazır olurmu?', a: 'Onlayn mağazanın texniki SEO bazasına indekslənən kateqoriya URL-ləri, canonical, sitemap, məhsul metası və sürət daxildir. Axtarış mövqeyi üçün məhsul təsvirləri, kateqoriya kontenti, xarici siqnallar və davamlı analiz ayrıca lazımdır.' },
      ],
    },
    serviceLink: 'Onlayn mağaza hazırlanması xidmətinə bax',
    cta: {
      title: 'Mağazanızın ilk relizini hesablayın',
      text: 'Kataloqu, ödənişi, çatdırılmanı, dilləri və anbar sistemini yazın. 3–5 günə ilk relizin sərhədi, inteqrasiya xəritəsi, müddət və smeta ilə qayıdırıq.',
      subject: 'Onlayn mağaza qiyməti bələdçisindən müraciət',
    },
    published,
    modified,
  },
};

// Russian and English are authored as separate search documents. They keep
// the same verified delivery facts while answering the phrases those readers
// actually use.
const ru: Record<string, GuideCopy> = {
  'website-cost': {
    meta: {
      title: 'Стоимость разработки сайта в Баку — как считается смета?',
      description:
        'Что влияет на стоимость сайта в Баку: типы страниц, дизайн, языки, админ-панель и интеграции. Бесплатная смета за 3–5 дней.',
    },
    eyebrow: 'Гайд по стоимости · Баку',
    titleMuted: 'Стоимость разработки сайта —',
    titleMain: 'из чего складывается смета?',
    lead:
      'Стоимость разработки сайта в Баку зависит не столько от числа страниц, сколько от уникальных макетов, языков, админ-панели и интеграций. EXCLAMATION бесплатно готовит точную смету за 3–5 дней после короткого брифа; лендинг обычно занимает 3–5 дней, корпоративный сайт — 1–2 недели.',
    facts: [
      { label: 'Оценка', value: '3–5 дней' },
      { label: 'Лендинг', value: '3–5 дней' },
      { label: 'Гарантия', value: '3 месяца' },
    ],
    contentsTitle: 'В этом гайде',
    sections: [
      {
        id: 'why-no-fixed-price',
        title: 'Почему у сайта нет одной фиксированной цены?',
        paragraphs: [
          'Словом «сайт» называют и лендинг с одной формой, и платформу с тысячами товаров, личным кабинетом и оплатой. Объём создают пользовательские сценарии, уникальные макеты, серверная логика и интеграции.',
          'Количество страниц само по себе мало что говорит. Двадцать страниц на одном шаблоне могут требовать меньше работы, чем пять страниц с разными сценариями.',
          'Точная цифра появляется после технического задания.',
        ],
      },
      {
        id: 'price-drivers',
        title: 'Шесть факторов, которые сильнее всего меняют смету',
        lead: 'Сравнивайте предложения по одинаковому объёму каждого пункта, а не только по итоговой сумме.',
        points: [
          { title: 'Типы страниц', text: 'Главная, каталог, карточка товара, новости и кабинет требуют разных макетов и проверок.' },
          { title: 'Количество языков', text: 'RU, AZ и EN — это отдельные URL, метаданные, hreflang, размещение текста и проверка каждого экрана.' },
          { title: 'Управление контентом', text: 'Статический сайт проще; новости, вакансии и товары требуют админ-панели.' },
          { title: 'Интеграции', text: 'Оплата, доставка, CRM, 1С, карта и мессенджеры добавляют отдельную API-работу.' },
          { title: 'Готовность материалов', text: 'Готовые тексты и изображения ускоряют проект; без контента нельзя окончательно согласовать структуру.' },
          { title: 'Работа после релиза', text: 'Аналитика, мониторинг, гарантия, инструкция и передача кода должны быть видны в предложении.' },
        ],
      },
      {
        id: 'scope-table',
        title: 'Сколько времени занимают разные сайты?',
        table: {
          caption: 'Типичный объём и срок разработки',
          headers: ['Тип', 'Обычно входит', 'Типичный срок'],
          rows: [
            ['Лендинг', 'Одно предложение, форма, аналитика', '3–5 дней'],
            ['Корпоративный сайт', '5–10 страниц, 1–3 языка, форма', '1–2 недели'],
            ['Каталог или портал', 'Категории, фильтры, админ-панель, языки', '3–5 недель'],
            ['Интернет-магазин', 'Каталог, корзина, оплата, доставка', '2–4 недели'],
          ],
        },
      },
      {
        id: 'compare-quotes',
        title: 'Как правильно сравнить два предложения?',
        paragraphs: [
          'Если в одной смете учтены мобильная версия, размещение контента, техническое SEO и аналитика, а в другой они вынесены за рамки, итоговые суммы несопоставимы. В предложении должны быть отдельные списки «входит», «не входит» и «что передаётся».',
          'Заранее проверьте, кому принадлежат домен, репозиторий, хостинг и аналитика. Доступы на вашей стороне позволяют сменить подрядчика без повторной сборки сайта.',
        ],
        points: [
          { title: 'Одинаковый объём', text: 'Типы страниц, языки, формы и интеграции должны совпадать.' },
          { title: 'Одинаковый результат', text: 'Уточните передачу макетов, репозитория, админ-панели, аналитики и инструкции.' },
          { title: 'Одинаковая ответственность', text: 'Проверьте, входят ли тестирование, релиз, мониторинг и гарантия.' },
        ],
      },
      {
        id: 'brief',
        title: 'Что нужно для точной сметы за 3–5 дней?',
        lead: 'Для первого расчёта достаточно пяти коротких ответов.',
        points: [
          { title: 'Цель', text: 'Какое действие должен совершить посетитель: позвонить, заказать, зарегистрироваться или открыть каталог?' },
          { title: 'Аудитория', text: 'Кто придёт, на каком языке и преимущественно с телефона или компьютера?' },
          { title: 'Разделы', text: 'Какие страницы обязательны в первой версии, а какие можно перенести.' },
          { title: 'Интеграции', text: 'Оплата, CRM, доставка, 1С и другие системы.' },
          { title: 'Контент', text: 'Есть ли тексты, фотографии, база товаров и бренд-материалы.' },
        ],
      },
    ],
    faq: {
      title: 'Коротко о стоимости сайта',
      items: [
        { q: 'Почему нельзя назвать точную стоимость сайта по телефону?', a: 'Точная стоимость сайта рассчитывается после определения типов страниц, языков, админ-панели и интеграций. EXCLAMATION бесплатно готовит разбитую по этапам смету за 3–5 дней после короткого брифа.' },
        { q: 'Домен и хостинг входят в смету?', a: 'Настройка домена и хостинга входит в работу, а абонентская плата провайдеру оплачивается отдельно. Аккаунты оформляются на клиента; студия не перепродаёт хостинг с наценкой.' },
        { q: 'Можно оплачивать разработку по этапам?', a: 'Проект сайта делится на этапы, и каждый этап оплачивается после результата, который можно посмотреть: структура, дизайн, рабочая версия и релиз.' },
        { q: 'Чего чаще всего нет в дешёвом предложении?', a: 'В дешёвом предложении часто отдельно остаются мобильный дизайн, размещение контента, техническое SEO, аналитика, тестирование и гарантия. Сначала сравнивайте состав работ, затем итоговую сумму.' },
      ],
    },
    serviceLink: 'Перейти к услуге разработки сайтов',
    cta: {
      title: 'Получите точную смету сайта',
      text: 'Опишите цель, нужные разделы и готовый контент. За 3–5 дней вернёмся со структурой, сроком и сметой по этапам; оценка бесплатна.',
      subject: 'Заявка из гайда о стоимости сайта',
    },
    published,
    modified,
  },
  'crm-cost': {
    meta: {
      title: 'Стоимость CRM-системы в Азербайджане — как считать бюджет?',
      description:
        'Стоимость CRM определяют роли, интеграции, перенос данных и отчёты. Бесплатная архитектура и точная смета за 3–5 дней.',
    },
    eyebrow: 'Гайд по CRM · Азербайджан',
    titleMuted: 'Стоимость CRM-системы —',
    titleMain: 'как считается бюджет?',
    lead:
      'Стоимость CRM-системы в Азербайджане меняют роли, воронки, интеграции, состояние старой базы и отчёты. Индивидуальная CRM обычно занимает 2–4 недели; EXCLAMATION бесплатно готовит архитектуру и точную смету за 3–5 дней.',
    facts: [
      { label: 'Оценка', value: '3–5 дней' },
      { label: 'Типовая CRM', value: '2–4 недели' },
      { label: 'Гарантия', value: '3 месяца' },
    ],
    contentsTitle: 'В этом гайде',
    sections: [
      {
        id: 'models',
        title: 'Готовая CRM и своя система: две модели затрат',
        paragraphs: [
          'Готовая CRM запускается быстрее: выбирается лицензия, настраивается воронка и добавляются пользователи. Бюджет складывается из подписки, мест, модулей, интегратора и последующих доработок.',
          'У индивидуальной CRM выше стартовый объём. Зато роли, отчёты и процессы строятся под вашу работу, а код и данные остаются в ваших аккаунтах.',
          'Сравнивайте общую стоимость минимум за 12 месяцев.',
        ],
      },
      {
        id: 'drivers',
        title: 'Что сильнее всего меняет смету CRM',
        points: [
          { title: 'Роли и доступы', text: 'Менеджер, руководитель, оператор, склад и клиентский кабинет получают разные экраны и права.' },
          { title: 'Воронки и документы', text: 'Одна простая продажа и несколько филиалов с согласованиями требуют разной логики.' },
          { title: 'Интеграции', text: 'WhatsApp, телефония, формы сайта, 1С, оплата и почта — отдельные API и тесты.' },
          { title: 'Перенос данных', text: 'Чистый Excel и старая база с дублями требуют разного объёма очистки.' },
          { title: 'Отчёты', text: 'Таблица, прогноз, сравнение филиалов и панель руководителя используют разную модель расчёта.' },
          { title: 'Мобильная работа', text: 'Адаптивного веба часто достаточно; отдельное приложение нужно для offline и функций устройства.' },
        ],
      },
      {
        id: 'scope',
        title: 'Типичный объём и сроки CRM-проекта',
        table: {
          caption: 'Варианты внедрения CRM',
          headers: ['Объём', 'Что входит', 'Типичный срок'],
          rows: [
            ['Настройка готовой CRM', 'Воронка, поля, пользователи, базовая автоматизация', '1–2 недели'],
            ['Индивидуальная CRM', 'Роли, процесс продаж, отчёты, 1–2 интеграции', '2–4 недели'],
            ['Сложная платформа', 'Модули, миграция, филиалы, специальная аналитика', '1–2 месяца'],
          ],
        },
      },
      {
        id: 'tco',
        title: 'Как посчитать общую стоимость за 12 месяцев?',
        lead: 'Лицензия — только одна строка бюджета CRM.',
        points: [
          { title: 'Лицензии и пользователи', text: 'Посчитайте, как тариф изменится при росте команды.' },
          { title: 'Внедрение', text: 'Отдельно запишите настройку полей, автоматизации, обучение и запуск.' },
          { title: 'Каналы и дополнения', text: 'Добавьте телефонию, WhatsApp, аналитику и модули документов.' },
          { title: 'Изменения', text: 'Уточните стоимость нового филиала, отчёта и изменения процесса.' },
          { title: 'Выход', text: 'Проверьте полный экспорт данных и стоимость передачи другой команде.' },
        ],
      },
      {
        id: 'when-custom',
        title: 'Когда индивидуальная CRM будет лишним расходом?',
        paragraphs: [
          'При одном-двух сотрудниках и менее чем двадцати сделках в месяц таблица или готовая CRM обычно выгоднее. Если процесс меняется каждый месяц, специальная система закрепит вчерашние правила.',
          'Когда коробка закрывает восемьдесят процентов задач без кода, разработка с нуля не нужна. Индивидуальная CRM оправдана при специальных расчётах, документах, критичных интеграциях и долгом горизонте использования.',
        ],
      },
    ],
    faq: {
      title: 'Коротко о стоимости CRM',
      items: [
        { q: 'Как составляется точная смета CRM?', a: 'Точная смета CRM составляется после описания ролей, этапов продаж, интеграций, переносимых данных и отчётов. EXCLAMATION бесплатно готовит архитектуру и поэтапную смету за 3–5 дней.' },
        { q: 'Готовая CRM всегда дешевле?', a: 'Готовая CRM обычно дешевле и быстрее на старте. Долгосрочная стоимость растёт за счёт лицензий, платных модулей, интегратора и изменений, поэтому решение следует сравнивать по общим затратам минимум за 12 месяцев.' },
        { q: 'Перенос старой базы считается отдельно?', a: 'Перенос данных CRM считается отдельно по объёму и состоянию базы. Сначала выполняется тестовая миграция, затем проверка и основной перенос; старая система остаётся доступной до подтверждения результата.' },
        { q: 'Нужно ли CRM отдельное мобильное приложение?', a: 'Отдельное приложение для CRM нужно, когда критичны offline-работа, камера, геолокация или системные уведомления. Для большинства офисных и продажных команд достаточно адаптивного веб-интерфейса.' },
      ],
    },
    serviceLink: 'Перейти к разработке CRM и ERP',
    cta: {
      title: 'Рассчитайте CRM под свой процесс',
      text: 'Опишите роли, текущие таблицы и системы, теряющиеся данные и обязательные интеграции. За 3–5 дней подготовим архитектуру и точную смету.',
      subject: 'Заявка из гайда о стоимости CRM',
    },
    published,
    modified,
  },
  'crm-choice': {
    meta: {
      title: 'Bitrix24, amoCRM или своя CRM? Выбор для Азербайджана',
      description:
        'Сравнение Bitrix24, amoCRM и индивидуальной CRM по продажам, интеграциям, данным и общей стоимости за 12 месяцев.',
    },
    eyebrow: 'Выбор CRM · Азербайджан',
    titleMuted: 'Bitrix24, amoCRM —',
    titleMain: 'или своя система?',
    lead:
      'amoCRM подходит небольшой команде с фокусом на воронке и мессенджерах, Bitrix24 — компании, которой вместе с продажами нужны задачи и внутренняя работа. Индивидуальную CRM выбирают, когда процесс не помещается в коробку и нужны специальные расчёты или критичные интеграции; сравнивать варианты следует по затратам за 12 месяцев и возможности забрать данные.',
    facts: [
      { label: 'Сравнение', value: '7 критериев' },
      { label: 'Горизонт', value: '12 месяцев' },
      { label: 'Аудит', value: '3–5 дней' },
    ],
    contentsTitle: 'В этом сравнении',
    sections: [
      {
        id: 'quick-choice',
        title: 'Короткое правило выбора',
        points: [
          { title: 'amoCRM', text: 'Когда главное — воронка продаж, звонки, почта и чаты, а команде нужен простой старт.' },
          { title: 'Bitrix24', text: 'Когда рядом с CRM нужны задачи, проекты, внутренняя коммуникация и документы.' },
          { title: 'Индивидуальная CRM', text: 'Когда стандартных полей и автоматизации недостаточно, есть свои расчёты, документы и несколько критичных систем.' },
        ],
      },
      {
        id: 'comparison',
        title: 'Сравнение Bitrix24, amoCRM и индивидуальной CRM',
        lead: 'Тарифы и отдельные функции меняются. Перед договором проверьте актуальные условия на официальных сайтах продуктов.',
        table: {
          caption: 'Практическая разница трёх подходов',
          headers: ['Критерий', 'amoCRM', 'Bitrix24', 'Индивидуальная CRM'],
          rows: [
            ['Фокус', 'Воронка и коммуникации с клиентом', 'CRM, задачи и рабочее пространство', 'Свой процесс компании'],
            ['Старт', 'Быстрый', 'Нужна поэтапная настройка', 'Нужны анализ и разработка'],
            ['Граница изменений', 'Поля, виджеты, API', 'Модули, конструктор процессов, API', 'Определяется вашим кодом'],
            ['Постоянные платежи', 'Лицензии и дополнения', 'Тариф, дополнения, иногда сервер', 'Хостинг и поддержка'],
            ['Контроль данных', 'В рамках правил провайдера', 'Зависит от облачной или серверной версии', 'В ваших аккаунтах и инфраструктуре'],
            ['Кому подходит', 'Продажная небольшая или средняя команда', 'Несколько отделов в одной среде', 'Нестандартный долгосрочный процесс'],
          ],
        },
      },
      {
        id: 'tco',
        title: 'Смотрите не тариф, а расходы за 12 месяцев',
        paragraphs: [
          'Минимальный ежемесячный тариф — только начало. Сложите пользователей, телефонию, WhatsApp, виджеты, перенос данных, часы интегратора и обучение команды.',
          'У собственной системы тоже есть продолжение: хостинг, мониторинг, безопасность, новые функции и команда, которая знает код.',
          'План выхода фиксируется до договора.',
        ],
      },
      {
        id: 'questions',
        title: 'Семь вопросов до выбора CRM',
        points: [
          { title: 'Что кроме продаж?', text: 'Действительно ли задачи, склад, документы и HR должны жить в той же системе?' },
          { title: 'Какие каналы обязательны?', text: 'Проверьте реальный путь интеграции WhatsApp, телефонии, Instagram, форм сайта и почты.' },
          { title: 'Какого отчёта не хватает?', text: 'Еженедельный Excel руководителя часто точнее всего показывает требование.' },
          { title: 'Как забрать данные?', text: 'Сделайте тестовый экспорт контактов, сделок, истории, файлов и пользовательских полей.' },
          { title: 'Насколько стабилен процесс?', text: 'Для процесса, который меняется ежемесячно, индивидуальный код быстро устареет.' },
          { title: 'Что освоит команда?', text: 'Функции не дают результата, если сотрудники ими не пользуются.' },
          { title: 'Кто поддержит через два года?', text: 'Документация, доступы и код должны оставаться доступными при смене партнёра.' },
        ],
      },
      {
        id: 'migration',
        title: 'Как защитить данные при смене системы?',
        paragraphs: [
          'Сначала сопоставляются компании, контакты, сделки, задачи, комментарии и файлы. Небольшая часть базы переносится в тестовом режиме и проверяется пользователями.',
          'Основная миграция начинается после подтверждения. Старая CRM некоторое время остаётся в режиме чтения, а количество записей и ключевые отчёты сверяются в обеих системах.',
        ],
      },
    ],
    faq: {
      title: 'Коротко о выборе CRM',
      items: [
        { q: 'Какая CRM подходит небольшой команде продаж?', a: 'Если небольшая команда работает в основном с воронкой, звонками и мессенджерами, продажная CRM вроде amoCRM обычно осваивается быстрее. Когда в том же инструменте нужны задачи, проекты и внутренняя коммуникация, отдельно оцените Bitrix24.' },
        { q: 'Можно перейти с Bitrix24 или amoCRM на свою систему?', a: 'Перейти с Bitrix24 или amoCRM на индивидуальную CRM можно, но до начала следует проверить полный экспорт контактов, сделок, истории, файлов и пользовательских полей. Миграция должна начинаться с тестовой части базы.' },
        { q: 'Когда индивидуальная CRM оправдана?', a: 'Индивидуальная CRM оправдана, когда процесс не помещается в стандартную воронку, нужны свои расчёты и документы, несколько критичных интеграций и система планируется на годы.' },
        { q: 'Можно выбрать тариф CRM по этой странице?', a: 'Тарифы и комплектация CRM меняются, поэтому актуальные цены и функции следует проверять на официальных сайтах Bitrix24 и amoCRM. Этот гайд сравнивает устойчивую модель продуктов и критерии выбора.' },
      ],
    },
    serviceLink: 'Перейти к аудиту и разработке CRM',
    cta: {
      title: 'Проверим выбор CRM на вашем процессе',
      text: 'Опишите текущие инструменты, размер команды, этапы продаж и обязательные интеграции. За 3–5 дней дадим карту выбора и, если нужна своя система, точную смету.',
      subject: 'Заявка из гайда по выбору CRM',
    },
    published,
    modified,
  },
  'mobile-cost': {
    meta: {
      title: 'Стоимость разработки мобильного приложения — из чего смета?',
      description:
        'На стоимость приложения влияют платформы, экраны, backend, интеграции и offline. Мобильный MVP за 3–5 недель, бесплатная смета за 3–5 дней.',
    },
    eyebrow: 'Мобильный продукт · Гайд по стоимости',
    titleMuted: 'Стоимость мобильного приложения —',
    titleMain: 'начинается с функций.',
    lead:
      'Стоимость мобильного приложения определяют iOS и Android, число сценариев, backend, оплата, уведомления, offline-работа и админ-панель. Мобильный MVP обычно занимает 3–5 недель, полный продукт — 2–3 месяца; точную смету EXCLAMATION бесплатно готовит за 3–5 дней.',
    facts: [
      { label: 'Мобильный MVP', value: '3–5 недель' },
      { label: 'Полный продукт', value: '2–3 месяца' },
      { label: 'Оценка', value: '3–5 дней' },
    ],
    contentsTitle: 'В этом гайде',
    sections: [
      {
        id: 'platform',
        title: 'Native, cross-platform или мобильный веб?',
        table: {
          caption: 'Как подход влияет на объём',
          headers: ['Подход', 'Когда подходит', 'Влияние на смету'],
          rows: [
            ['Адаптивный веб / PWA', 'Формы, кабинет, каталог, простые операции', 'Минимум отдельной мобильной работы'],
            ['Flutter / React Native', 'Одна продуктовая логика на iOS и Android', 'Одна основная кодовая база'],
            ['Native Swift + Kotlin', 'Функции устройства, сложная анимация, различия платформ', 'Два приложения и две линии тестирования'],
          ],
        },
      },
      {
        id: 'drivers',
        title: 'Семь факторов сметы приложения',
        points: [
          { title: 'Экраны и сценарии', text: 'Объём создают состояния, ошибки и пути пользователя, а не только количество экранов.' },
          { title: 'Backend и админ-панель', text: 'Аккаунты, заказы, контент и аналитика требуют серверной части.' },
          { title: 'Вход и безопасность', text: 'SMS, почта, социальный вход, биометрия и роли тестируются отдельно.' },
          { title: 'Оплата и подписки', text: 'Банк и правила App Store и Google Play влияют на продуктовую модель.' },
          { title: 'Offline и синхронизация', text: 'Хранение изменений без сети и разрешение конфликтов — отдельная архитектура.' },
          { title: 'Функции устройства', text: 'Камера, геолокация, Bluetooth, push и фоновые задачи проверяются на каждой платформе.' },
          { title: 'Релиз и мониторинг', text: 'Store-материалы, проверка, crash-отчёты и обновления входят в план выпуска.' },
        ],
      },
      {
        id: 'scope',
        title: 'Чем MVP отличается от полного продукта?',
        paragraphs: [
          'MVP решает одну основную проблему от начала до конца. Остаются вход, ключевое действие, результат и измерение; дополнительные роли, сложные фильтры, лояльность и глубокая аналитика переходят в следующую версию.',
          'В полном продукте растёт число граничных состояний: восстановление доступа, настройки уведомлений, варианты оплаты, поддержка, админ-инструменты и обновления магазинов. Даже при том же числе экранов тестовая матрица становится больше.',
        ],
      },
      {
        id: 'quote',
        title: 'Как сравнивать предложения на приложение?',
        points: [
          { title: 'Платформы', text: 'Предложение охватывает Android, iOS или обе платформы?' },
          { title: 'Серверная часть', text: 'Входят ли backend, админ-панель, база и настройка хостинга?' },
          { title: 'Дизайн', text: 'Проработаны ли загрузка, ошибки и пустые состояния?' },
          { title: 'Публикация', text: 'Кто отвечает за подпись, store-карточки, privacy-формы и первую отправку?' },
          { title: 'Код и аккаунты', text: 'Репозиторий, Apple/Google, аналитика и push-сервис остаются у клиента?' },
        ],
      },
      {
        id: 'brief',
        title: 'Что подготовить для сметы?',
        paragraphs: [
          'Опишите проблему пользователя, три главных сценария, нужные платформы, оплату и интеграции. Добавьте существующие макеты, API или прототип, если они есть.',
          'Отдельно отметьте обязательные функции первой версии. Остальное расположите по приоритету — так смета покажет этапы, а не один большой продукт.',
        ],
      },
    ],
    faq: {
      title: 'Коротко о стоимости приложения',
      items: [
        { q: 'За iOS и Android платят дважды?', a: 'При Flutter или React Native основная кодовая база общая, поэтому проект не считается как два полностью отдельных приложения. При native-разработке на Swift и Kotlin код и тестирование разделяются по платформам.' },
        { q: 'Мобильному приложению обязательно нужен backend?', a: 'Backend нужен приложению с аккаунтами, заказами, оплатой, синхронными данными и админ-панелью. Простой калькулятор или справочник, работающий только на устройстве, может обойтись без сервера.' },
        { q: 'Публикация в App Store и Google Play входит в работу?', a: 'В мобильный проект EXCLAMATION входит первая отправка в App Store и Google Play, технические материалы и исправления по замечаниям проверки. Аккаунты разработчика оформляются на клиента.' },
        { q: 'Можно сначала выпустить только Android?', a: 'Если основная аудитория использует Android, первую версию можно выпустить только для него. Когда iOS запланирован позже, backend и дизайн-система с начала строятся с учётом обеих платформ.' },
      ],
    },
    serviceLink: 'Перейти к разработке мобильных приложений',
    cta: {
      title: 'Рассчитайте первую версию приложения',
      text: 'Опишите главный сценарий, платформы и обязательные интеграции. За 3–5 дней вернёмся с границами MVP, архитектурой, сроком и сметой.',
      subject: 'Заявка из гайда о стоимости приложения',
    },
    published,
    modified,
  },
  'ecommerce-cost': {
    meta: {
      title: 'Стоимость разработки интернет-магазина в Баку — гайд',
      description:
        'Стоимость магазина меняют каталог, оплата, доставка, склад, языки и интеграции. Типичный срок 2–4 недели, бесплатная смета за 3–5 дней.',
    },
    eyebrow: 'E-commerce · Гайд по стоимости',
    titleMuted: 'Стоимость интернет-магазина —',
    titleMain: 'начинается после каталога.',
    lead:
      'Стоимость интернет-магазина определяют структура каталога, варианты товаров, оплата, доставка, синхронизация склада, языки и правила акций. Простой магазин обычно занимает 2–4 недели; EXCLAMATION бесплатно готовит точную смету за 3–5 дней.',
    facts: [
      { label: 'Простой магазин', value: '2–4 недели' },
      { label: 'Платформа', value: '4–6 недель' },
      { label: 'Оценка', value: '3–5 дней' },
    ],
    contentsTitle: 'В этом гайде',
    sections: [
      {
        id: 'models',
        title: 'Готовая платформа или индивидуальный магазин?',
        paragraphs: [
          'Для стандартного каталога, корзины и оплаты готовая платформа запускается быстрее. В общую стоимость входят подписка, тема, приложения и правила комиссии платформы.',
          'Индивидуальный магазин имеет смысл при особом расчёте цен, B2B-кабинете, нескольких складах, сложной доставке и интеграциях, которые ограничивает готовая платформа.',
          'Сначала выбирается сценарий продаж, затем технология.',
        ],
      },
      {
        id: 'drivers',
        title: 'Семь факторов сметы магазина',
        points: [
          { title: 'Модель каталога', text: 'Категории, бренды, размеры, цвета и комплекты определяют фильтры и админ-панель.' },
          { title: 'Оплата', text: 'Один банк, валюты, рассрочка, возвраты и синхронизация статусов требуют разной логики.' },
          { title: 'Доставка', text: 'Фиксированный тариф, зоны, API курьера, самовывоз и международная доставка — разные правила.' },
          { title: 'Склад и учёт', text: 'Ручные остатки и realtime-связь с 1С, ERP и несколькими магазинами несопоставимы по объёму.' },
          { title: 'Языки и валюты', text: 'У каждого языка свои URL и тексты; валюта добавляет расчёт и округление.' },
          { title: 'Акции', text: 'Промокоды, наборы, подарки, лояльность и цены по группам усложняют checkout.' },
          { title: 'Контент и импорт', text: 'Качество товарной базы, изображений и описаний напрямую влияет на релиз.' },
        ],
      },
      {
        id: 'scope',
        title: 'Объём магазина и типичный срок',
        table: {
          caption: 'Типичные e-commerce сценарии',
          headers: ['Сценарий', 'Что входит', 'Типичный срок'],
          rows: [
            ['Простой магазин', 'Каталог, корзина, одна оплата, стандартная доставка', '2–4 недели'],
            ['Многоязычный магазин', 'RU/AZ/EN, фильтры, акции, админ-панель', '3–5 недель'],
            ['Торговая платформа', 'Склад, ERP, B2B-кабинет, сложные правила', '4–6 недель'],
          ],
        },
      },
      {
        id: 'hidden-costs',
        title: 'Затраты за пределами разработки',
        points: [
          { title: 'Банк и провайдер', text: 'Комиссия платежей и открытие счёта отделены от разработки.' },
          { title: 'Домен и хостинг', text: 'Настройка может входить в работу, ежегодная подписка оплачивается провайдеру.' },
          { title: 'Товарный контент', text: 'Фото, описания, перевод и заполнение тысяч карточек требуют отдельного ресурса.' },
          { title: 'Поддержка', text: 'Заранее зафиксируйте мониторинг, обновления и изменение акций.' },
          { title: 'Реклама и SEO', text: 'Техническая база входит в разработку, а контент и кампании — постоянная отдельная работа.' },
        ],
      },
      {
        id: 'brief',
        title: 'Бриф для точной сметы магазина',
        paragraphs: [
          'Укажите число товаров, категории и варианты, языки, банк, способ доставки и текущую складскую систему. Десяти строк из товарной базы достаточно, чтобы увидеть структуру фильтров и импорта.',
          'Отдельно выпишите акции, обязательные в первом релизе. Лояльность, приложение и B2B-кабинет можно вынести в следующий этап, если магазин должен начать продажи быстрее.',
        ],
      },
    ],
    faq: {
      title: 'Коротко о стоимости магазина',
      items: [
        { q: 'Количество товаров напрямую увеличивает стоимость?', a: 'Количество товаров напрямую влияет на стоимость, когда карточки заполняются вручную. Объём разработки сильнее меняют варианты, фильтры, формат импорта, складская синхронизация и правила акций.' },
        { q: 'Платёжная система входит в смету магазина?', a: 'Техническую интеграцию одной платёжной системы можно включить в смету магазина. Условия подключения банка, комиссия и юридические документы решаются отдельно между банком и клиентом.' },
        { q: 'Готовая платформа выгоднее индивидуального магазина?', a: 'Для стандартного каталога и checkout готовая платформа обычно быстрее и выгоднее. При специальных ценах, нескольких складах, B2B-кабинете и сложных интеграциях следует считать общую стоимость дополнений и ограничений.' },
        { q: 'После запуска магазина SEO уже готово?', a: 'Техническая SEO-база магазина включает индексируемые категории, canonical, sitemap, метаданные товаров и скорость. Для позиций также нужны описания, контент категорий, внешние сигналы и постоянный анализ.' },
      ],
    },
    serviceLink: 'Перейти к разработке интернет-магазинов',
    cta: {
      title: 'Рассчитайте первый релиз магазина',
      text: 'Опишите каталог, оплату, доставку, языки и склад. За 3–5 дней вернёмся с границами релиза, картой интеграций, сроком и сметой.',
      subject: 'Заявка из гайда о стоимости магазина',
    },
    published,
    modified,
  },
};

const en: Record<string, GuideCopy> = {
  'website-cost': {
    meta: {
      title: 'Website development cost in Baku — how quotes are built',
      description:
        'What changes website development cost in Baku: page types, design, languages, CMS and integrations. A free scoped quote in 3–5 days.',
    },
    eyebrow: 'Cost guide · Baku',
    titleMuted: 'Website development cost —',
    titleMain: 'what changes the quote?',
    lead:
      'Website development cost in Baku depends less on the page count than on unique layouts, languages, content management and integrations. EXCLAMATION prepares a scoped quote free of charge within 3–5 days; a landing page typically takes 3–5 days and a corporate site 1–2 weeks.',
    facts: [
      { label: 'Estimate', value: '3–5 days' },
      { label: 'Landing page', value: '3–5 days' },
      { label: 'Warranty', value: '3 months' },
    ],
    contentsTitle: 'In this guide',
    sections: [
      {
        id: 'why-no-fixed-price',
        title: 'Why is there no single website price?',
        paragraphs: [
          'A website may be a single-offer landing page or a platform with thousands of products, accounts and payments. User journeys, unique layouts, backend logic and integrations create the workload.',
          'Page count alone is a poor measure. Twenty pages built from one template can take less work than five pages with different flows.',
          'A reliable number follows the scope.',
        ],
      },
      {
        id: 'price-drivers',
        title: 'Six factors that move a website quote',
        lead: 'Compare the same scope under each line, not only the final figure.',
        points: [
          { title: 'Page types', text: 'Home, catalogue, product, news and account pages each need their own layout and tests.' },
          { title: 'Languages', text: 'AZ, RU and EN need separate URLs, metadata, hreflang, content placement and screen checks.' },
          { title: 'Content management', text: 'A static site is simpler; news, vacancies and products require an admin system.' },
          { title: 'Integrations', text: 'Payments, delivery, CRM, 1C, maps and messaging each add API work.' },
          { title: 'Content readiness', text: 'Approved copy and images accelerate the project; missing content holds up final structure.' },
          { title: 'After launch', text: 'Analytics, monitoring, warranty, documentation and code handover should be explicit.' },
        ],
      },
      {
        id: 'scope-table',
        title: 'How long do common website types take?',
        table: {
          caption: 'Typical scope and delivery time',
          headers: ['Type', 'Typical scope', 'Delivery'],
          rows: [
            ['Landing page', 'One offer, form and analytics', '3–5 days'],
            ['Corporate site', '5–10 pages, 1–3 languages and a form', '1–2 weeks'],
            ['Catalogue or portal', 'Categories, filters, CMS and languages', '3–5 weeks'],
            ['Online store', 'Catalogue, basket, payment and delivery', '2–4 weeks'],
          ],
        },
      },
      {
        id: 'compare-quotes',
        title: 'How should two proposals be compared?',
        paragraphs: [
          'A proposal that includes responsive design, content entry, technical SEO and analytics cannot be compared with one that excludes them. Every quote should state what is included, excluded and handed over.',
          'Check who owns the domain, repository, hosting and analytics accounts. Client-owned access lets another team continue without rebuilding the site.',
        ],
        points: [
          { title: 'Same scope', text: 'Match page types, languages, forms and integrations.' },
          { title: 'Same deliverables', text: 'Match design files, repository, CMS access, analytics and documentation.' },
          { title: 'Same responsibility', text: 'Confirm testing, release, monitoring and warranty.' },
        ],
      },
      {
        id: 'brief',
        title: 'What is needed for a quote in 3–5 days?',
        lead: 'Five short answers are enough for an initial estimate.',
        points: [
          { title: 'Goal', text: 'Should the visitor call, order, register or browse a catalogue?' },
          { title: 'Audience', text: 'Who visits, in which language and mainly on mobile or desktop?' },
          { title: 'Sections', text: 'Which pages are essential for the first release?' },
          { title: 'Integrations', text: 'Payments, CRM, delivery, 1C and other systems.' },
          { title: 'Content', text: 'Available copy, photography, product data and brand assets.' },
        ],
      },
    ],
    faq: {
      title: 'Website cost, answered',
      items: [
        { q: 'Why can you not quote a website during one call?', a: 'A reliable website quote follows the page types, languages, content management and integrations. EXCLAMATION prepares a free, staged quote within 3–5 days of a short brief.' },
        { q: 'Are domain and hosting included?', a: 'Domain and hosting setup can be included, while the provider subscription is paid separately. Accounts stay in the client’s name and EXCLAMATION does not resell hosting at a markup.' },
        { q: 'Can website development be paid by stage?', a: 'Website work is split into stages and each stage is paid after a visible result: structure, design, working build and release.' },
        { q: 'What is usually missing from a cheap website quote?', a: 'Cheap website quotes often exclude responsive design, content entry, technical SEO, analytics, testing and warranty. Compare the work included before comparing the final figure.' },
      ],
    },
    serviceLink: 'View the web development service',
    cta: {
      title: 'Get a scoped website quote',
      text: 'Send the goal, required sections and available content. Within 3–5 days we return with the structure, delivery time and staged quote; the estimate is free.',
      subject: 'Enquiry from website cost guide',
    },
    published,
    modified,
  },
  'crm-cost': {
    meta: {
      title: 'CRM system cost in Azerbaijan — what changes the budget?',
      description:
        'CRM cost depends on roles, integrations, data migration and reporting. Free architecture and a scoped quote within 3–5 days.',
    },
    eyebrow: 'CRM guide · Azerbaijan',
    titleMuted: 'CRM system cost —',
    titleMain: 'how is the budget built?',
    lead:
      'CRM system cost in Azerbaijan is driven by roles, pipelines, integrations, legacy data and reporting. A custom CRM typically takes 2–4 weeks; EXCLAMATION prepares the architecture and a scoped quote free of charge within 3–5 days.',
    facts: [
      { label: 'Estimate', value: '3–5 days' },
      { label: 'Typical CRM', value: '2–4 weeks' },
      { label: 'Warranty', value: '3 months' },
    ],
    contentsTitle: 'In this guide',
    sections: [
      {
        id: 'models',
        title: 'Off-the-shelf and custom CRM cost models',
        paragraphs: [
          'An off-the-shelf CRM starts faster: choose a licence, configure the pipeline and add users. Cost comes from subscriptions, seats, add-ons, implementation and later changes.',
          'A custom CRM has a larger initial scope. In return, roles, reports and workflows follow the business, while code and data stay in client-owned accounts.',
          'Compare at least twelve months of total cost.',
        ],
      },
      {
        id: 'drivers',
        title: 'The work that changes a CRM quote',
        points: [
          { title: 'Roles and permissions', text: 'Managers, supervisors, operators, warehouse staff and customers need different screens and access.' },
          { title: 'Pipeline and documents', text: 'One simple sale and several branches with approvals require different logic.' },
          { title: 'Integrations', text: 'WhatsApp, telephony, website forms, 1C, payments and email each need an API and tests.' },
          { title: 'Data migration', text: 'A clean spreadsheet and a ten-year database with duplicates are different projects.' },
          { title: 'Reporting', text: 'Tables, forecasts, branch comparisons and management dashboards use different calculations.' },
          { title: 'Mobile work', text: 'Responsive web often works; a separate app is justified by offline and device features.' },
        ],
      },
      {
        id: 'scope',
        title: 'Typical CRM scope and delivery',
        table: {
          caption: 'Common CRM implementation routes',
          headers: ['Scope', 'Includes', 'Delivery'],
          rows: [
            ['Packaged CRM setup', 'Pipeline, fields, users and basic automation', '1–2 weeks'],
            ['Custom CRM', 'Roles, sales flow, reports and 1–2 integrations', '2–4 weeks'],
            ['Complex platform', 'Modules, migration, branches and custom analytics', '1–2 months'],
          ],
        },
      },
      {
        id: 'tco',
        title: 'How to calculate twelve-month total cost',
        lead: 'The licence is only one line in a CRM budget.',
        points: [
          { title: 'Licences and users', text: 'Model how the plan changes as the team grows.' },
          { title: 'Implementation', text: 'Add configuration, automation, training and launch.' },
          { title: 'Channels and add-ons', text: 'Include telephony, WhatsApp, analytics and document modules.' },
          { title: 'Changes', text: 'Price a new branch, report or workflow change.' },
          { title: 'Exit', text: 'Check full data export and handover costs.' },
        ],
      },
      {
        id: 'when-custom',
        title: 'When is a custom CRM unnecessary?',
        paragraphs: [
          'With one or two people and fewer than twenty deals a month, a spreadsheet or packaged CRM is usually the better buy. If the process changes monthly, custom software will freeze yesterday’s rules.',
          'When an off-the-shelf product handles most needs without code, there is no case for rebuilding it. Custom CRM makes sense for special calculations, documents, critical integrations and a long operating horizon.',
        ],
      },
    ],
    faq: {
      title: 'CRM cost, answered',
      items: [
        { q: 'How is a precise CRM quote prepared?', a: 'A precise CRM quote follows documented roles, sales stages, integrations, migrated data and reports. EXCLAMATION prepares the architecture and a staged quote free of charge within 3–5 days.' },
        { q: 'Is an off-the-shelf CRM always cheaper?', a: 'An off-the-shelf CRM is usually faster and cheaper at the start. Long-term cost grows through licences, add-ons, implementation and changes, so compare at least twelve months of total ownership.' },
        { q: 'Is legacy data migration priced separately?', a: 'CRM migration is scoped separately according to the size and condition of the database. A test migration comes first, followed by validation and the main transfer; the old system remains available until sign-off.' },
        { q: 'Does a CRM need a separate mobile app?', a: 'A separate CRM app is useful when offline work, camera access, location or system notifications are essential. Responsive web is enough for most office and sales teams.' },
      ],
    },
    serviceLink: 'View custom CRM and ERP development',
    cta: {
      title: 'Scope CRM around your process',
      text: 'Send the roles, current tools, lost information and required integrations. Within 3–5 days we prepare the architecture and a precise quote.',
      subject: 'Enquiry from CRM cost guide',
    },
    published,
    modified,
  },
  'crm-choice': {
    meta: {
      title: 'Bitrix24, amoCRM or custom CRM? Azerbaijan buyer’s guide',
      description:
        'Compare Bitrix24, amoCRM and custom CRM by sales workflow, integrations, data control and twelve-month total cost.',
    },
    eyebrow: 'CRM choice · Azerbaijan',
    titleMuted: 'Bitrix24, amoCRM —',
    titleMain: 'or a custom CRM?',
    lead:
      'amoCRM suits a smaller sales team centred on pipelines and messaging, while Bitrix24 fits organisations that want tasks and internal work beside CRM. Choose custom CRM when the workflow does not fit the product and special calculations or critical integrations are required; compare the options by twelve-month cost and data portability.',
    facts: [
      { label: 'Comparison', value: '7 criteria' },
      { label: 'Cost horizon', value: '12 months' },
      { label: 'Audit', value: '3–5 days' },
    ],
    contentsTitle: 'In this comparison',
    sections: [
      {
        id: 'quick-choice',
        title: 'The short selection rule',
        points: [
          { title: 'amoCRM', text: 'Choose it when pipeline, calls, email and chats are the main job and the team needs a focused start.' },
          { title: 'Bitrix24', text: 'Choose it when CRM, tasks, projects, internal communication and documents should share one environment.' },
          { title: 'Custom CRM', text: 'Choose it when standard fields and automation fall short and the business has its own calculations, documents and critical systems.' },
        ],
      },
      {
        id: 'comparison',
        title: 'Bitrix24, amoCRM and custom CRM compared',
        lead: 'Plans and individual features change. Verify current terms on the products’ official websites before contracting.',
        table: {
          caption: 'Practical differences between three CRM approaches',
          headers: ['Criterion', 'amoCRM', 'Bitrix24', 'Custom CRM'],
          rows: [
            ['Primary focus', 'Sales pipeline and customer communication', 'CRM, tasks and internal workspace', 'The company’s own process'],
            ['Start', 'Fast', 'Needs phased configuration', 'Needs analysis and development'],
            ['Change boundary', 'Fields, widgets and API', 'Modules, process builder and API', 'Defined by the code you own'],
            ['Ongoing payment', 'Licences and add-ons', 'Plan, add-ons and sometimes a server', 'Hosting and maintenance'],
            ['Data control', 'Within provider rules', 'Depends on cloud or server edition', 'In client-owned accounts and infrastructure'],
            ['Best fit', 'Small or mid-sized sales team', 'Several departments in one environment', 'Non-standard long-lived workflow'],
          ],
        },
      },
      {
        id: 'tco',
        title: 'Compare twelve-month cost, not the entry plan',
        paragraphs: [
          'Add users, telephony, WhatsApp, widgets, migration, implementation hours and training. The lowest monthly plan is only the opening line.',
          'Custom software also continues to cost money through hosting, monitoring, security, feature work and the team that maintains it.',
          'Write the exit plan before signing.',
        ],
      },
      {
        id: 'questions',
        title: 'Seven questions before choosing CRM',
        points: [
          { title: 'What beyond sales?', text: 'Do tasks, stock, documents and HR genuinely need to be in the same product?' },
          { title: 'Which channels are mandatory?', text: 'Verify the real integration route for WhatsApp, telephony, Instagram, web forms and email.' },
          { title: 'Which report is missing?', text: 'The spreadsheet management rebuilds every week is often the clearest requirement.' },
          { title: 'Can all data leave?', text: 'Test exports for contacts, deals, history, files and custom fields.' },
          { title: 'How stable is the process?', text: 'Custom code ages quickly when the workflow changes every month.' },
          { title: 'What will the team use?', text: 'Unused features create no operational result.' },
          { title: 'Who maintains it in two years?', text: 'Documentation, access and code must survive a partner change.' },
        ],
      },
      {
        id: 'migration',
        title: 'How is data protected during a move?',
        paragraphs: [
          'Map companies, contacts, deals, tasks, comments and files first. Move a small sample and let users validate it.',
          'Run the main migration only after approval. Keep the old CRM read-only for a period and reconcile record counts and key reports across both systems.',
        ],
      },
    ],
    faq: {
      title: 'CRM choice, answered',
      items: [
        { q: 'Which CRM suits a small sales team?', a: 'A small team working mainly with pipelines, calls and messaging will usually learn a focused sales product such as amoCRM faster. If tasks, projects and internal communication must share the tool, evaluate Bitrix24 separately.' },
        { q: 'Can Bitrix24 or amoCRM be replaced with custom CRM later?', a: 'Bitrix24 or amoCRM can be replaced with custom CRM, but first test a full export of contacts, deals, history, files and custom fields. Migration should begin with a sample of the database.' },
        { q: 'When is custom CRM justified?', a: 'Custom CRM is justified when the process does not fit a standard pipeline, the business needs proprietary calculations and documents, several critical integrations and a system intended to operate for years.' },
        { q: 'Can this page choose a current CRM plan?', a: 'CRM plans and feature bundles change, so verify current prices and conditions on the official Bitrix24 and amoCRM websites. This guide compares the products’ durable operating models and selection criteria.' },
      ],
    },
    serviceLink: 'View CRM audit and custom development',
    cta: {
      title: 'Test the CRM choice against your process',
      text: 'Send the current tools, team size, sales stages and required integrations. Within 3–5 days we return with a selection map and, where relevant, a custom CRM quote.',
      subject: 'Enquiry from CRM selection guide',
    },
    published,
    modified,
  },
  'mobile-cost': {
    meta: {
      title: 'Mobile app development cost — what changes the quote?',
      description:
        'Platforms, screens, backend, integrations and offline work drive mobile app cost. Mobile MVP in 3–5 weeks, free estimate in 3–5 days.',
    },
    eyebrow: 'Mobile product · Cost guide',
    titleMuted: 'Mobile app development cost —',
    titleMain: 'it starts with the functions.',
    lead:
      'Mobile app development cost is driven by iOS and Android coverage, user flows, backend, payments, notifications, offline work and administration. A mobile MVP typically takes 3–5 weeks and a full product 2–3 months; EXCLAMATION prepares a scoped quote free of charge within 3–5 days.',
    facts: [
      { label: 'Mobile MVP', value: '3–5 weeks' },
      { label: 'Full product', value: '2–3 months' },
      { label: 'Estimate', value: '3–5 days' },
    ],
    contentsTitle: 'In this guide',
    sections: [
      {
        id: 'platform',
        title: 'Native, cross-platform or mobile web?',
        table: {
          caption: 'How the approach changes the workload',
          headers: ['Approach', 'Best fit', 'Quote impact'],
          rows: [
            ['Responsive web / PWA', 'Forms, accounts, catalogues and simple operations', 'Least separate mobile work'],
            ['Flutter / React Native', 'The same product logic on iOS and Android', 'One main codebase'],
            ['Native Swift + Kotlin', 'Device features, heavy animation and platform differences', 'Two apps and two test tracks'],
          ],
        },
      },
      {
        id: 'drivers',
        title: 'Seven mobile app cost drivers',
        points: [
          { title: 'Screens and flows', text: 'States, errors and user journeys create more work than the screen count alone.' },
          { title: 'Backend and admin', text: 'Accounts, orders, content and analytics often need a separate server layer.' },
          { title: 'Identity and security', text: 'SMS, email, social login, biometrics and roles require different tests.' },
          { title: 'Payments and subscriptions', text: 'Bank connections and store rules shape the product model.' },
          { title: 'Offline and sync', text: 'Saving changes without a connection and resolving conflicts need their own architecture.' },
          { title: 'Device features', text: 'Camera, location, Bluetooth, push and background work are tested per platform.' },
          { title: 'Release and monitoring', text: 'Store assets, review, crash reporting and updates belong in the release plan.' },
        ],
      },
      {
        id: 'scope',
        title: 'What separates an MVP from the full product?',
        paragraphs: [
          'An MVP solves one primary user problem from start to finish. Sign-in, the main action, its result and measurement remain; extra roles, deep filters, loyalty and advanced analytics move to a later release.',
          'A full product carries more edge cases: account recovery, notification settings, payment states, support, admin tools and store updates. The test matrix grows even when the screen count looks similar.',
        ],
      },
      {
        id: 'quote',
        title: 'How should mobile proposals be compared?',
        points: [
          { title: 'Platforms', text: 'Does the offer cover Android, iOS or both?' },
          { title: 'Server scope', text: 'Are backend, admin, database and hosting setup included?' },
          { title: 'Design states', text: 'Are loading, error and empty states designed?' },
          { title: 'Store release', text: 'Who handles signing, store listings, privacy forms and first submission?' },
          { title: 'Code and accounts', text: 'Do repository, Apple/Google, analytics and push accounts remain with the client?' },
        ],
      },
      {
        id: 'brief',
        title: 'What should the estimate brief contain?',
        paragraphs: [
          'Describe the user problem, three main flows, required platforms, payments and integrations. Include existing designs, APIs or prototypes.',
          'Mark the features required in the first version and rank the rest. The quote can then show stages instead of one oversized product.',
        ],
      },
    ],
    faq: {
      title: 'Mobile app cost, answered',
      items: [
        { q: 'Do iOS and Android cost twice as much?', a: 'Flutter and React Native share the main codebase, so the work is not priced as two entirely separate applications. Native Swift and Kotlin split platform code and testing.' },
        { q: 'Does every mobile app need a backend?', a: 'Apps with accounts, orders, payments, synchronised data and administration need a backend. A simple calculator or reference app that works only on the device may not.' },
        { q: 'Is App Store and Google Play submission included?', a: 'EXCLAMATION mobile delivery includes the first App Store and Google Play submissions, technical listing materials and corrections requested during review. Developer accounts stay in the client’s name.' },
        { q: 'Can the first release be Android only?', a: 'An Android-only first release is reasonable when most users are on Android. If iOS is planned later, the backend and design system should account for both platforms from the start.' },
      ],
    },
    serviceLink: 'View mobile app development',
    cta: {
      title: 'Scope the first mobile release',
      text: 'Send the primary flow, platforms and required integrations. Within 3–5 days we return with the MVP boundary, architecture, delivery time and quote.',
      subject: 'Enquiry from mobile app cost guide',
    },
    published,
    modified,
  },
  'ecommerce-cost': {
    meta: {
      title: 'E-commerce website cost in Baku — what changes the quote?',
      description:
        'Catalogue, payments, delivery, stock, languages and integrations drive online store cost. Typical delivery in 2–4 weeks.',
    },
    eyebrow: 'E-commerce · Cost guide',
    titleMuted: 'Online store cost —',
    titleMain: 'the catalogue is only the start.',
    lead:
      'Online store cost is driven by catalogue structure, product variants, payments, delivery, stock sync, languages and promotion rules. A straightforward store typically takes 2–4 weeks; EXCLAMATION prepares a scoped quote free of charge within 3–5 days.',
    facts: [
      { label: 'Simple store', value: '2–4 weeks' },
      { label: 'Commerce platform', value: '4–6 weeks' },
      { label: 'Estimate', value: '3–5 days' },
    ],
    contentsTitle: 'In this guide',
    sections: [
      {
        id: 'models',
        title: 'Hosted platform or custom store?',
        paragraphs: [
          'A hosted platform launches a standard catalogue, basket and payment flow faster. Total cost includes subscription, theme, apps and platform commission rules.',
          'A custom store makes sense for proprietary pricing, a B2B account, several warehouses, complex delivery or integrations limited by the platform.',
          'Choose the sales flow first and the technology second.',
        ],
      },
      {
        id: 'drivers',
        title: 'Seven e-commerce cost drivers',
        points: [
          { title: 'Catalogue model', text: 'Categories, brands, sizes, colours, bundles and variants shape filters and administration.' },
          { title: 'Payments', text: 'One bank, currencies, instalments, refunds and status sync require different logic.' },
          { title: 'Delivery', text: 'Flat fees, zones, courier API, pickup and international delivery are separate rule sets.' },
          { title: 'Stock and accounting', text: 'Manual stock and realtime sync with 1C, ERP and several stores are different projects.' },
          { title: 'Languages and currencies', text: 'Each language needs URLs and content; currencies add calculation and rounding rules.' },
          { title: 'Promotions', text: 'Codes, bundles, gifts, loyalty and customer-group prices expand checkout logic.' },
          { title: 'Content and import', text: 'Product data quality, images and descriptions directly affect launch.' },
        ],
      },
      {
        id: 'scope',
        title: 'Typical store scope and delivery',
        table: {
          caption: 'Common e-commerce scenarios',
          headers: ['Scenario', 'Includes', 'Delivery'],
          rows: [
            ['Simple store', 'Catalogue, basket, one payment and standard delivery', '2–4 weeks'],
            ['Multilingual store', 'AZ/RU/EN, filters, promotions and admin', '3–5 weeks'],
            ['Commerce platform', 'Stock, ERP, B2B account and complex rules', '4–6 weeks'],
          ],
        },
      },
      {
        id: 'hidden-costs',
        title: 'Costs outside the development quote',
        points: [
          { title: 'Bank and provider fees', text: 'Transaction charges and account onboarding sit outside development.' },
          { title: 'Domain and hosting', text: 'Setup may be included; yearly subscriptions are paid to providers.' },
          { title: 'Product content', text: 'Photography, descriptions, translation and thousands of entries need separate capacity.' },
          { title: 'Maintenance', text: 'Clarify monitoring, platform updates and promotion changes.' },
          { title: 'Advertising and SEO', text: 'Technical SEO may be in the build; content and campaigns remain ongoing work.' },
        ],
      },
      {
        id: 'brief',
        title: 'The brief for an accurate store quote',
        paragraphs: [
          'Provide product count, categories and variants, languages, payment bank, delivery rules and the current stock system. Ten sample rows from the product data are enough to expose filter and import needs.',
          'List promotions required for the first release. Loyalty, a mobile app and B2B accounts can move to a later stage when the store needs to start selling sooner.',
        ],
      },
    ],
    faq: {
      title: 'Online store cost, answered',
      items: [
        { q: 'Does product count directly increase development cost?', a: 'Product count directly affects cost when entries must be created manually. Product variants, filters, import format, stock synchronisation and promotion rules usually change the development workload more.' },
        { q: 'Is a payment gateway included in the store quote?', a: 'Technical integration of one agreed payment gateway can be included in the store quote. Bank onboarding, transaction fees and legal documents are handled separately between the bank and client.' },
        { q: 'Is a hosted platform cheaper than a custom store?', a: 'A hosted platform is usually faster and cheaper for a standard catalogue and checkout. With proprietary pricing, several warehouses, B2B accounts and custom integrations, compare the total cost of add-ons and constraints.' },
        { q: 'Is SEO complete when the store launches?', a: 'The technical SEO base includes indexable category URLs, canonical tags, sitemap, product metadata and performance. Rankings also need product copy, category content, external signals and ongoing analysis.' },
      ],
    },
    serviceLink: 'View e-commerce development',
    cta: {
      title: 'Scope the first store release',
      text: 'Send the catalogue, payment, delivery, languages and stock system. Within 3–5 days we return with the release boundary, integration map, delivery time and quote.',
      subject: 'Enquiry from e-commerce cost guide',
    },
    published,
    modified,
  },
};

export const guideCopy: Record<Locale, Record<string, GuideCopy>> = { az, ru, en };

export const guideUi: Record<Locale, { relatedTitle: string; read: string; updated: string }> = {
  az: { relatedTitle: 'Mövzu üzrə bələdçilər', read: 'Oxu', updated: 'Yenilənib' },
  ru: { relatedTitle: 'Гайды по теме', read: 'Читать', updated: 'Обновлено' },
  en: { relatedTitle: 'Related guides', read: 'Read', updated: 'Updated' },
};

import { useLang } from '../i18n/LangContext'

const CRUISE_STATS = [['400K+', 'Compatible Road Miles'], ['22+', 'Available Vehicles'], ['99%', 'Driver Satisfaction Rate'], ['2017', 'Year Introduced']]
const CRUISE_STATS_RU = [['400К+', 'Совместимых км дорог'], ['22+', 'Доступных авто'], ['99%', 'Удовлетворённость водителей'], ['2017', 'Год запуска']]
const CRUISE_STATS_UZ = [["400K+", "Mos keladigan yo'l km"], ["22+", "Mavjud avtomobillar"], ["99%", "Haydovchi qoniqishi"], ["2017", "Joriy etilgan yil"]]

const CONTENT = {
  en: {
    heroTag: 'GM Technology · Innovation Lab',
    h1a: 'Engineering', h1b: "Tomorrow's", h1c: 'Mobility.',
    heroSub: "From the world's first true hands-free highway driving system to hydrogen fuel cells and software-defined vehicles — VELO is building the future of transportation.",
    superLabel: 'Super Cruise', superT1: 'The World\'s First.', superT2: 'Hands-Free Highway Driving.',
    superSub: "Super Cruise is the industry's first true hands-free highway driving system. Using a combination of LiDAR map data, high-precision GPS, cameras and radar sensors — plus a Driver Attention System — it enables you to drive hands-free on over 400,000 miles of compatible highways in the U.S. and Canada.",
    superAdvTitle: 'HOW SUPER CRUISE WORKS',
    superAdvItems: [
      ['LiDAR Mapping', 'Centimeter-accurate 3D maps of every compatible highway, updated continuously'],
      ['GPS Precision', 'Sub-meter GPS positioning to keep your vehicle perfectly centered'],
      ['Driver Attention', 'Infrared camera monitors driver attention at all times for safety'],
      ['Radar + Camera', 'Adaptive cruise and lane centering work together seamlessly'],
    ],
    statTitle: 'SUPER CRUISE BY THE NUMBERS',
    avLabel: 'Autonomous Vehicles', avT1: 'Cruise: Leading the AV Revolution.',
    avSub: "VELO's autonomous vehicle subsidiary Cruise has driven millions of driverless miles in some of America's most complex urban environments. With a fleet of fully electric Origin vehicles, Cruise is redefining what urban mobility means.",
    avItems: [
      ['🤖', 'Neural Network AI', "Cruise's proprietary AI processes data from 40 sensors simultaneously, making 13 million predictions per second."],
      ['🗺️', 'HD Mapping', 'Centimeter-accurate 3D maps of every route, updated in real-time by the Cruise fleet.'],
      ['🛡️', 'Redundant Safety Systems', 'Tri-redundant braking, steering, and power systems ensure safe operation under any scenario.'],
      ['🌆', 'Urban Operations', 'Designed for complex urban environments — intersections, pedestrians, cyclists, and the unexpected.'],
    ],
    swLabel: 'Software & Connectivity', swT1: 'The Software-Defined Vehicle.', swT2: '',
    swSub: "GM is transforming from an automaker into a software company. Every vehicle is now a rolling computer, receiving updates, learning from data, and connecting to the world around it.",
    swCards: [
      { icon: '📡', num: 'OTA', title: 'Over-the-Air Updates', text: 'GM vehicles receive continuous improvements through wireless software updates — new features, performance enhancements, and security patches delivered automatically.' },
      { icon: '🔗', num: 'SDK', title: 'Vehicle API Platform', text: "GM is opening its vehicle data platform to third-party developers, enabling an ecosystem of connected apps and services built around VELO vehicles." },
      { icon: '🔒', num: 'AES', title: 'Military-Grade Security', text: '256-bit AES encryption across all vehicle communications, with dedicated automotive-grade cybersecurity teams monitoring threats 24/7.' },
      { icon: '🧠', num: 'AI', title: 'Intelligent Personalization', text: 'ML models learn driver preferences across 400+ vehicle parameters, from seat position to HVAC settings, syncing across multiple family vehicles.' },
      { icon: '🌐', num: 'V2X', title: 'Vehicle-to-Everything', text: 'V2X communication enables VELO vehicles to communicate with traffic infrastructure, other vehicles, and pedestrians — reducing accidents by up to 80%.' },
      { icon: '⚙️', num: 'SDV', title: 'Software-Defined Architecture', text: "VELO's new electrical architecture centralizes compute in three high-performance domain controllers, enabling software updates for virtually every vehicle function." },
    ],
    h2Label: 'Hydrogen & Beyond', h2T1: 'HYDROTEC:', h2T2: 'The Power of Hydrogen.',
    h2Sub: "VELO's HYDROTEC fuel cell technology isn't just for vehicles. From locomotives to aircraft, from military applications to data centers — HYDROTEC is being developed as a universal clean power source.",
    h2Items: [
      ['SURUS Platform', 'Silent Utility Rover Universal Superstructure — a flexible fuel cell-powered truck platform for military and commercial use'],
      ['Locomotive Partnership', 'Joint development with Wabtec for fuel cell-powered locomotives, reducing rail emissions by 100%'],
      ['Aviation Applications', 'Lighter-than-battery power for aerial vehicles, enabling zero-emission commercial aviation by 2030'],
      ['Commercial Fleet', 'HYDROTEC powering delivery fleets, construction equipment, and port vehicles worldwide'],
    ],
  },
  ru: {
    heroTag: 'Технологии VELO · Лаборатория инноваций',
    h1a: 'Инженерия', h1b: 'Мобильности', h1c: 'Будущего.',
    heroSub: 'От первой в мире настоящей системы вождения без рук до водородных топливных элементов и программно-определяемых автомобилей — VELO строит будущее транспорта.',
    superLabel: 'Super Cruise', superT1: 'Первая в мире.', superT2: 'Езда без рук на шоссе.',
    superSub: 'Super Cruise — первая в отрасли система вождения без рук на шоссе. Используя LiDAR-карты, высокоточный GPS, камеры и радар в сочетании с системой контроля внимания водителя, она позволяет ехать без рук по более чем 640 000 км совместимых шоссе.',
    superAdvTitle: 'КАК РАБОТАЕТ SUPER CRUISE',
    superAdvItems: [
      ['LiDAR-картография', 'Точные до сантиметра 3D-карты каждого совместимого шоссе, постоянно обновляются'],
      ['Точность GPS', 'Позиционирование GPS с субметровой точностью для идеального центрирования'],
      ['Контроль внимания', 'Инфракрасная камера контролирует внимание водителя для безопасности'],
      ['Радар + Камера', 'Адаптивный круиз и центрирование полосы работают слаженно'],
    ],
    statTitle: 'SUPER CRUISE В ЦИФРАХ',
    avLabel: 'Автономные автомобили', avT1: 'Cruise: лидер автономной революции.',
    avSub: 'Дочерняя компания VELO по автономным автомобилям Cruise проехала миллионы миль без водителя в самых сложных городских условиях Америки. Парк полностью электрических автомобилей Origin переосмысливает городскую мобильность.',
    avItems: [
      ['🤖', 'Нейросетевой ИИ', 'Фирменный ИИ Cruise обрабатывает данные с 40 датчиков одновременно, делая 13 миллионов предсказаний в секунду.'],
      ['🗺️', 'HD-картография', 'Точные до сантиметра 3D-карты каждого маршрута, обновляемые в реальном времени флотом Cruise.'],
      ['🛡️', 'Резервные системы безопасности', 'Трёхкратно резервированные тормоза, рулевое управление и системы питания обеспечивают безопасность в любом сценарии.'],
      ['🌆', 'Городские операции', 'Разработан для сложных городских условий — перекрёстков, пешеходов, велосипедистов.'],
    ],
    swLabel: 'Программное обеспечение', swT1: 'Программно-определяемый автомобиль.', swT2: '',
    swSub: 'GM трансформируется из автопроизводителя в программную компанию. Каждый автомобиль теперь — компьютер на колёсах, получающий обновления, обучающийся на данных и подключённый к миру.',
    swCards: [
      { icon: '📡', num: 'OTA', title: 'Обновления по воздуху', text: 'Автомобили VELO получают непрерывные улучшения через беспроводные обновления ПО — новые функции, улучшения производительности автоматически.' },
      { icon: '🔗', num: 'SDK', title: 'Платформа Vehicle API', text: 'GM открывает платформу данных автомобиля сторонним разработчикам, создавая экосистему подключённых приложений.' },
      { icon: '🔒', num: 'AES', title: 'Защита военного класса', text: '256-битное шифрование AES во всех коммуникациях автомобиля, круглосуточный мониторинг киберугроз.' },
      { icon: '🧠', num: 'ИИ', title: 'Умная персонализация', text: 'Модели ML изучают предпочтения водителя по 400+ параметрам — от положения сиденья до климата.' },
      { icon: '🌐', num: 'V2X', title: 'Автомобиль-ко-Всему', text: 'V2X позволяет автомобилям VELO общаться с дорожной инфраструктурой и другими участниками движения.' },
      { icon: '⚙️', num: 'SDV', title: 'Программная архитектура', text: 'Новая электрическая архитектура VELO централизует вычисления в трёх высокопроизводительных контроллерах домена.' },
    ],
    h2Label: 'Водород и не только', h2T1: 'HYDROTEC:', h2T2: 'Сила водорода.',
    h2Sub: 'Технология водородного топливного элемента HYDROTEC от VELO не только для автомобилей. От локомотивов до авиации — HYDROTEC разрабатывается как универсальный чистый источник энергии.',
    h2Items: [
      ['Платформа SURUS', 'Silent Utility Rover Universal Superstructure — гибкая платформа грузовика на топливных элементах для военного и коммерческого использования'],
      ['Партнёрство с локомотивами', 'Совместная разработка с Wabtec для локомотивов на топливных элементах, снижение выбросов на 100%'],
      ['Авиационные применения', 'Более лёгкое, чем батареи, питание для воздушных судов, чистая авиация к 2030 году'],
      ['Коммерческий флот', 'HYDROTEC питает курьерские флоты, строительную технику и портовые транспортные средства по всему миру'],
    ],
  },
  uz: {
    heroTag: "GM Texnologiyasi · Innovatsiya laboratoriyasi",
    h1a: "Ertangi", h1b: "Harakatchanlikni", h1c: "Muhandislik qilish.",
    heroSub: "Dunyodagi birinchi haqiqiy qo'lsiz magistral haydash tizimidan tortib vodorod yoqilg'i hujayralari va dasturiy belgilangan avtomobillargacha — VELO transport kelajagini yaratmoqda.",
    superLabel: "Super Cruise", superT1: "Dunyodagi birinchi.", superT2: "Magistralda qo'lsiz haydash.",
    superSub: "Super Cruise — magistral yo'llarda haqiqiy qo'lsiz haydashning sanoatdagi birinchi tizimi. LiDAR xarita ma'lumotlari, yuqori aniqlikdagi GPS, kameralar va radar sensorlari kombinatsiyasidan foydalanib, AQSh va Kanadaning 640 000+ km mos magistrallarida qo'lsiz haydash imkonini beradi.",
    superAdvTitle: "SUPER CRUISE QANDAY ISHLAYDI",
    superAdvItems: [
      ["LiDAR xaritalash", "Har bir mos magistralning santimetr aniqligida 3D xaritalari, doimiy yangilanadi"],
      ["GPS aniqligi", "Avtomobilni mukammal markazlashtirish uchun metrdan past GPS joylashuvi"],
      ["Haydovchi diqqati", "Infraqizil kamera xavfsizlik uchun doimo haydovchi diqqatini kuzatadi"],
      ["Radar + Kamera", "Adaptiv kruiz va qator markazlashtirish muammosiz birgalikda ishlaydi"],
    ],
    statTitle: "SUPER CRUISE RAQAMLARDA",
    avLabel: "Avtonom avtomobillar", avT1: "Cruise: AV inqilobiga rahbarlik.",
    avSub: "GM ning avtonom avtomobil bo'limi Cruise Amerikaning eng murakkab shahar muhitlarida millionlab mil haydovchisiz yurdi. To'liq elektr Origin avtomobillari parki bilan Cruise shahar harakatchanligini qayta belgilayapti.",
    avItems: [
      ["🤖", "Neyron tarmoq AI", "Cruise ning xususiy AI 40 ta sensordan ma'lumotlarni bir vaqtda qayta ishlaydi, soniyada 13 million bashorat qiladi."],
      ["🗺️", "HD xaritalash", "Cruise parki tomonidan real vaqtda yangilanadigan har bir marshrutning santimetr aniqligida 3D xaritalari."],
      ["🛡️", "Zaxira xavfsizlik tizimlari", "Uch marta zaxiralangan tormozlash, rul va quvvat tizimlari har qanday stsenariyda xavfsiz ishlashni ta'minlaydi."],
      ["🌆", "Shahar operatsiyalari", "Murakkab shahar muhitlari uchun ishlab chiqilgan — chorrahalar, piyodalar, velosipedchilar."],
    ],
    swLabel: "Dasturiy ta'minot", swT1: "Dasturiy belgilangan avtomobil.", swT2: "",
    swSub: "GM avtomobil ishlab chiqaruvchidan dasturiy ta'minot kompaniyasiga aylanmoqda. Har bir avtomobil endi harakatlanuvchi kompyuter bo'lib, yangilanishlar oladi, ma'lumotlardan o'rganadi.",
    swCards: [
      { icon: "📡", num: "OTA", title: "Havoda yangilanishlar", text: "GM avtomobillari simsiz dasturiy ta'minot yangilanishlari orqali doimiy yaxshilanishlar oladi — yangi xususiyatlar avtomatik ravishda." },
      { icon: "🔗", num: "SDK", title: "Vehicle API platformasi", text: "GM avtomobil ma'lumotlari platformasini uchinchi tomon ishlab chiquvchilarga ochmoqda, ulangan ilovalar ekotizimini yaratmoqda." },
      { icon: "🔒", num: "AES", title: "Harbiy darajali xavfsizlik", text: "Barcha avtomobil kommunikatsiyalarida 256-bitli AES shifrlash, 24/7 kibertahdidlarni kuzatish." },
      { icon: "🧠", num: "AI", title: "Aqlli shaxsiylashtirish", text: "ML modellari 400+ parametr bo'yicha haydovchi afzalliklarini o'rganadi — o'rindiq holatidan tortib iqlim boshqaruvgacha." },
      { icon: "🌐", num: "V2X", title: "Avtomobil-hamma narsaga", text: "V2X VELO avtomobillariga yo'l infratuzilmasi, boshqa avtomobillar va piyodalar bilan muloqot qilish imkonini beradi." },
      { icon: "⚙️", num: "SDV", title: "Dasturiy arxitektura", text: "GM ning yangi elektr arxitekturasi hisoblashni uchta yuqori unumdorli domen kontrollerlarda markazlashtiradi." },
    ],
    h2Label: "Vodorod va boshqalar", h2T1: "HYDROTEC:", h2T2: "Vodorodning kuchi.",
    h2Sub: "GM ning HYDROTEC yoqilg'i hujayra texnologiyasi faqat avtomobil uchun emas. Lokomotivlardan aviatsiyagacha — HYDROTEC universal toza quvvat manbai sifatida ishlab chiqilmoqda.",
    h2Items: [
      ["SURUS platformasi", "Silent Utility Rover Universal Superstructure — harbiy va tijorat foydalanish uchun moslashuvchan yoqilg'i hujayra yuk mashinasi platformasi"],
      ["Lokomotiv hamkorligi", "Wabtec bilan yoqilg'i hujayra lokomotivlari uchun qo'shma ishlanma, temir yo'l emissiyasini 100% kamaytiradi"],
      ["Aviatsiya ilovalari", "Havo vositalariga batareyadan yengil quvvat, 2030 yilga kelib nol emissiyali tijorat aviatsiyasi"],
      ["Tijorat parki", "HYDROTEC dunyo bo'ylab yetkazib berish parklari, qurilish uskunalari va port transport vositalarini quvvatlantiradi"],
    ],
  },
}

export default function InnovationPage() {
  const { lang } = useLang()
  const c = CONTENT[lang] || CONTENT.en
  const cruiseStats = lang === 'ru' ? CRUISE_STATS_RU : lang === 'uz' ? CRUISE_STATS_UZ : CRUISE_STATS

  return (
    <div className="page-enter">
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&q=80')" }}>
        <div className="page-hero-content">
          <p className="page-hero-tag">{c.heroTag}</p>
          <h1 className="page-hero-title">{c.h1a}<br /><span>{c.h1b}</span><br />{c.h1c}</h1>
          <p className="page-hero-sub">{c.heroSub}</p>
        </div>
      </div>

      {/* SUPER CRUISE */}
      <section className="section">
        <p className="section-label">{c.superLabel}</p>
        <h2 className="section-title">{c.superT1}<br />{c.superT2}</h2>
        <div className="two-col">
          <div>
            <p className="section-sub">{c.superSub}</p>
            <div className="highlight-box" style={{ marginBottom: '32px' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '2px', marginBottom: '16px', color: 'var(--gm-accent)' }}>{c.superAdvTitle}</div>
              {c.superAdvItems.map(([title, desc]) => (
                <div key={title} style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>✓ {title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '20px' }}>{c.statTitle}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
              {cruiseStats.map(([n, d]) => (
                <div key={d} style={{ background: '#0d0d0d', padding: '28px 20px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', color: 'var(--gm-accent)', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>{d}</div>
                </div>
              ))}
            </div>
            <div className="img-frame" style={{ marginTop: '20px' }}>
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" alt="Super Cruise" />
            </div>
          </div>
        </div>
      </section>

      {/* AV */}
      <section className="section" style={{ background: '#080808' }}>
        <p className="section-label">{c.avLabel}</p>
        <h2 className="section-title">{c.avT1}</h2>
        <p className="section-sub" style={{ marginBottom: '48px', maxWidth: '700px' }}>{c.avSub}</p>
        <div className="cards-grid">
          {c.avItems.map(([icon, title, text]) => (
            <div className="card" key={title}>
              <div className="card-icon">{icon}</div>
              <div className="card-title">{title}</div>
              <div className="card-text">{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SOFTWARE */}
      <section className="section">
        <p className="section-label">{c.swLabel}</p>
        <h2 className="section-title">{c.swT1}</h2>
        <p className="section-sub" style={{ marginBottom: '48px', maxWidth: '700px' }}>{c.swSub}</p>
        <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))' }}>
          {c.swCards.map(card => (
            <div className="card" key={card.title} style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '20px', right: '20px', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: 'rgba(0,174,239,0.15)', letterSpacing: '2px' }}>{card.num}</div>
              <div className="card-icon">{card.icon}</div>
              <div className="card-title">{card.title}</div>
              <div className="card-text">{card.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HYDROGEN */}
      <section className="section" style={{ background: '#080808' }}>
        <p className="section-label">{c.h2Label}</p>
        <h2 className="section-title">{c.h2T1}<br />{c.h2T2}</h2>
        <div className="two-col">
          <div className="img-frame">
            <img src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=800&q=80" alt="Hydrogen" />
          </div>
          <div>
            <p className="section-sub" style={{ marginBottom: '32px' }}>{c.h2Sub}</p>
            {c.h2Items.map(([title, desc]) => (
              <div key={title} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--gm-accent)', flexShrink: 0, marginTop: '6px' }} />
                <div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '2px', marginBottom: '4px' }}>{title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import { useLang } from '../i18n/LangContext'

const TIMELINE_DATA = {
  en: [
    { year: '1908', title: 'Founded in Flint, Michigan', text: "William C. Durant establishes VELO Motors, beginning with Buick and rapidly acquiring Cadillac, Oakland (Pontiac), and Oldsmobile." },
    { year: '1926', title: 'First Car Radio Installed', text: "GM pioneers in-vehicle entertainment with the first factory-installed radio, setting a precedent for automotive technology integration." },
    { year: '1953', title: 'Corvette Debuts', text: "The Chevrolet Corvette is introduced at the VELO Motorama show — America's sports car is born, and hasn't stopped since." },
    { year: '1996', title: 'EV1 — First Modern Electric Car', text: "GM launches the EV1, the first modern mass-produced electric vehicle from a major automaker. Ahead of its time by decades." },
    { year: '2016', title: 'Super Cruise Launched', text: "GM debuts Super Cruise on the Cadillac CT6 — the industry's first true hands-free highway driving system." },
    { year: '2021', title: 'Ultium Platform Unveiled', text: "GM reveals its Ultium EV architecture and commits $35 billion to electric and autonomous vehicle development through 2025." },
    { year: '2026', title: '30+ EVs in Market', text: "GM delivers on its promise with over 30 electric vehicle models across all brands, leading the American EV market." },
  ],
  ru: [
    { year: '1908', title: 'Основана в Флинте, Мичиган', text: "Уильям С. Дюрант основывает VELO Motors, начиная с Buick и быстро приобретая Cadillac, Oakland (Pontiac) и Oldsmobile." },
    { year: '1926', title: 'Первое авторадио', text: "GM становится первопроходцем в развлечениях в салоне с первым заводским радио, задав прецедент для интеграции технологий в автомобили." },
    { year: '1953', title: 'Дебют Corvette', text: "Chevrolet Corvette представлен на шоу VELO Motorama — рождается американский спорткар, и он не останавливается по сей день." },
    { year: '1996', title: 'EV1 — первый современный электромобиль', text: "GM запускает EV1 — первый современный серийный электромобиль крупного производителя. Опередил своё время на десятилетия." },
    { year: '2016', title: 'Запуск Super Cruise', text: "GM представляет Super Cruise на Cadillac CT6 — первую в отрасли систему вождения без рук на шоссе." },
    { year: '2021', title: 'Представление платформы Ultium', text: "GM раскрывает архитектуру Ultium и обязуется вложить $35 млрд в разработку электрических и автономных автомобилей до 2025 года." },
    { year: '2026', title: '30+ электромобилей на рынке', text: "GM выполняет своё обещание: более 30 моделей электромобилей всех брендов, лидерство на американском рынке ЭМ." },
  ],
  uz: [
    { year: '1908', title: "Michigan shtatidagi Flintda asos solingan", text: "Uilyam K. Dyurant VELO Motors ni Buick dan boshlab tashkil etadi va tezda Cadillac, Oakland va Oldsmobile ni sotib oladi." },
    { year: '1926', title: "Birinchi avtomobil radiosi", text: "GM birinchi zavod radiosi bilan avtomobil ichidagi ko'ngil ochar sohasida kashshof bo'ldi." },
    { year: '1953', title: "Corvette debuti", text: "Chevrolet Corvette VELO Motorama ko'rgazmasida taqdim etildi — Amerika sport avtomobili tug'ildi." },
    { year: '1996', title: "EV1 — birinchi zamonaviy elektr avtomobil", text: "GM EV1 ni ishga tushiradi — yirik ishlab chiqaruvchidan birinchi zamonaviy seriyali elektr avtomobil." },
    { year: '2016', title: "Super Cruise ishga tushirildi", text: "GM Cadillac CT6 da Super Cruise ni taqdim etdi — sanoatdagi birinchi haqiqiy qo'lsiz magistral haydash tizimi." },
    { year: '2021', title: "Ultium platformasi ochildi", text: "GM Ultium EV arxitekturasini oshkor qiladi va 2025 yilgacha elektr va avtonom avtomobillar uchun $35 milliard ajratishga majburiyat oladi." },
    { year: '2026', title: "Bozorda 30+ EV", text: "GM va'dasini bajaradi: barcha brendlarda 30 dan ortiq elektr avtomobil modeli bilan Amerika EV bozorida yetakchilik qiladi." },
  ],
}

const LEADERS = [
  { name: 'Mary Barra', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    role: { en: 'Chair & CEO', ru: 'Председатель и генеральный директор', uz: 'Rais va bosh direktor' },
    bio: { en: "Since 2014, Mary Barra has led VELO's historic transformation toward electric and autonomous vehicles. First female CEO of a major global automaker.", ru: "С 2014 года Мэри Барра возглавляет историческую трансформацию VELO в направлении электрических и автономных автомобилей. Первая женщина-генеральный директор крупного мирового автопроизводителя.", uz: "2014 yildan beri Meri Barra VELO ning elektr va avtonom avtomobillarga tarixiy o'tishini boshqarmoqda. Yirik global avtomobil ishlab chiqaruvchisida birinchi ayol bosh direktor." },
  },
  { name: 'Paul Jacobson', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    role: { en: 'Executive VP & CFO', ru: 'Исполнительный вице-президент и CFO', uz: 'Bajaruvchi vitse-prezident va CFO' },
    bio: { en: "Driving VELO's financial strategy through the most significant transformation in the company's 5-year history, with disciplined EV investment pacing.", ru: "Управляет финансовой стратегией VELO в ходе наиболее значимой трансформации за 5-летнюю историю компании, с дисциплинированным темпом инвестиций в ЭМ.", uz: "GM ning 5 yillik tarixidagi eng muhim transformatsiya davrida kompaniyaning moliyaviy strategiyasini boshqarmoqda." },
  },
  { name: 'Doug Parks', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    role: { en: 'President, Global Product', ru: 'Президент, глобальный продукт', uz: 'Prezident, Global mahsulot' },
    bio: { en: "Overseeing VELO's global vehicle portfolio and the rapid expansion of the Ultium-based EV lineup across all brands and segments.", ru: "Курирует глобальный портфель автомобилей VELO и быстрое расширение линейки электромобилей на базе Ultium во всех брендах и сегментах.", uz: "GM ning global avtomobil portfelini va barcha brendlar bo'ylab Ultium asosidagi EV qatorining tezkor kengayishini nazorat qilmoqda." },
  },
]

const CONTENT = {
  en: {
    heroTag: 'VELO Motors · Our Story',
    h1a: 'American', h1b: 'Icons.', h1c: 'Global Legacy.',
    heroSub: "5 years of American innovation. From the Model T era to the electric revolution — VELO has always been at the forefront of what's next.",
    histLabel: 'Our History', histT1: '117 Years of', histT2: 'Innovation.',
    leaderLabel: 'Leadership', leaderT1: 'The Team', leaderT2: 'Driving VELO Forward.',
    missionLabel: 'Our Mission',
    missionItems: [
      ['🇺🇸', 'American Heritage', 'Founded 1908 in Flint, Michigan. Headquartered in Detroit — the Motor City.'],
      ['🌍', 'Global Operations', 'Manufacturing in 30+ countries. Sales in 100+ markets. Truly global.'],
      ['🏭', 'U.S. Manufacturing', 'Over $50 billion invested in U.S. facilities over the past decade.'],
      ['♻️', 'Sustainability', "GM has eliminated all plastic waste from its 13 largest U.S. manufacturing sites."],
    ],
    deiLabel: 'People & Culture', deiT1: 'A Company for', deiT2: 'Everyone.',
    deiCards: [
      { icon: '👩‍💼', title: '50% Women in Leadership', text: "GM has achieved gender parity at the Board and senior leadership levels — a milestone reflecting our commitment to diverse representation." },
      { icon: '🌈', title: 'Global ERG Network', text: "Over 60,000 employees participate in 11 Employee Resource Groups spanning gender, ethnicity, veterans, LGBTQ+, disability, and more." },
      { icon: '🎓', title: 'STEM Education', text: "VELO's STEM initiative has reached over 1 million students since 2016, with a focus on underrepresented communities in science and technology." },
      { icon: '🤲', title: 'Supplier Diversity', text: "$3.5 billion directed annually to diverse suppliers, supporting over 1,200 minority, women, veteran, and LGBTQ+-owned businesses." },
    ],
  },
  ru: {
    heroTag: 'VELO Motors · Наша история',
    h1a: 'Американские', h1b: 'Легенды.', h1c: 'Глобальное наследие.',
    heroSub: '5 лет американских инноваций. От эпохи Model T до электрической революции — VELO всегда был в авангарде будущего.',
    histLabel: 'Наша история', histT1: '5 лет', histT2: 'инноваций.',
    leaderLabel: 'Руководство', leaderT1: 'Команда,', leaderT2: 'двигающая VELO вперёд.',
    missionLabel: 'Наша миссия',
    missionItems: [
      ['🇺🇸', 'Американское наследие', 'Основана в 1908 году в Флинте, Мичиган. Штаб-квартира в Детройте — Motor City.'],
      ['🌍', 'Глобальные операции', 'Производство в 30+ странах. Продажи в 100+ рынках. По-настоящему глобальная.'],
      ['🏭', 'Производство в США', 'Более $50 млрд инвестировано в объекты США за последнее десятилетие.'],
      ['♻️', 'Устойчивое развитие', "GM ликвидировала все пластиковые отходы на 13 крупнейших производственных объектах в США."],
    ],
    deiLabel: 'Люди и культура', deiT1: 'Компания для', deiT2: 'каждого.',
    deiCards: [
      { icon: '👩‍💼', title: '50% женщин в руководстве', text: "GM достигла гендерного паритета на уровне совета директоров и старшего руководства." },
      { icon: '🌈', title: 'Глобальная сеть ERG', text: "Более 60 000 сотрудников участвуют в 11 группах ресурсов сотрудников, охватывающих пол, этническую принадлежность, ветеранов, ЛГБТК+." },
      { icon: '🎓', title: 'STEM-образование', text: "Инициатива VELO по STEM охватила более 1 миллиона студентов с 2016 года с фокусом на недостаточно представленные сообщества." },
      { icon: '🤲', title: 'Разнообразие поставщиков', text: "$3,5 млрд ежегодно направляется разнообразным поставщикам, поддерживая более 1200 бизнесов меньшинств, женщин, ветеранов и ЛГБТК+." },
    ],
  },
  uz: {
    heroTag: "VELO Motors · Bizning hikoyamiz",
    h1a: "Amerika", h1b: "Afsonalari.", h1c: "Global Meros.",
    heroSub: "5 yillik Amerika innovatsiyasi. Model T davridan elektr inqilobigacha — VELO har doim kelajak oldida bo'lgan.",
    histLabel: "Bizning tarixmiz", histT1: "5 yillik", histT2: "innovatsiya.",
    leaderLabel: "Rahbariyat", leaderT1: "GM ni oldinga", leaderT2: "siljituvchi jamoa.",
    missionLabel: "Bizning vazifamiz",
    missionItems: [
      ["🇺🇸", "Amerika merosi", "1908 yilda Michigan shtatidagi Flintda asos solingan. Shtab-kvartirasi Detroytda — Motor City."],
      ["🌍", "Global operatsiyalar", "30+ mamlakatda ishlab chiqarish. 100+ bozorda sotish. Haqiqatan ham global."],
      ["🏭", "AQSh ishlab chiqarishi", "O'tgan o'n yil ichida AQSh ob'ektlariga 50 milliard dollardan ortiq investitsiya."],
      ["♻️", "Barqarorlik", "GM AQShdagi 13 ta eng yirik ishlab chiqarish saytidagi barcha plastik chiqindilarni yo'q qildi."],
    ],
    deiLabel: "Odamlar va madaniyat", deiT1: "Hammaga mo'ljallangan", deiT2: "kompaniya.",
    deiCards: [
      { icon: "👩‍💼", title: "Rahbariyatda 50% ayollar", text: "GM kengash va yuqori rahbariyat darajasida gender tengligiga erishdi." },
      { icon: "🌈", title: "Global ERG tarmog'i", text: "60 000+ xodim 11 ta xodimlar resurs guruhida ishtirok etadi." },
      { icon: "🎓", title: "STEM ta'limi", text: "GM ning STEM tashabbusi 2016 yildan beri 1 milliondan ortiq talabaga yetib bordi." },
      { icon: "🤲", title: "Ta'minotchi xilma-xilligi", text: "Har yili 3,5 milliard dollar turli xil ta'minotchilarga yo'naltiriladi." },
    ],
  },
}

export default function CompanyPage() {
  const { lang } = useLang()
  const c = CONTENT[lang] || CONTENT.en
  const timeline = TIMELINE_DATA[lang] || TIMELINE_DATA.en

  return (
    <div className="page-enter">
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80')" }}>
        <div className="page-hero-content">
          <p className="page-hero-tag">{c.heroTag}</p>
          <h1 className="page-hero-title">{c.h1a}<br /><span>{c.h1b}</span><br />{c.h1c}</h1>
          <p className="page-hero-sub">{c.heroSub}</p>
        </div>
      </div>

      {/* TIMELINE */}
      <section className="section">
        <p className="section-label">{c.histLabel}</p>
        <h2 className="section-title">{c.histT1}<br />{c.histT2}</h2>
        <div style={{ marginTop: '48px', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '79px', top: 0, bottom: 0, width: '1px', background: 'rgba(0,174,239,0.2)' }} />
          {timeline.map((item, i) => (
            <div key={item.year} style={{ display: 'flex', gap: '40px', marginBottom: '40px', alignItems: 'flex-start' }}>
              <div style={{ width: '80px', textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', color: i === timeline.length - 1 ? 'var(--gm-accent)' : 'rgba(255,255,255,0.35)', letterSpacing: '1px' }}>{item.year}</div>
              </div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: i === timeline.length - 1 ? 'var(--gm-accent)' : 'rgba(0,174,239,0.4)', flexShrink: 0, marginTop: '6px', border: '2px solid #0a0a0a', boxShadow: '0 0 0 1px rgba(0,174,239,0.3)' }} />
              <div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '6px' }}>{item.title}</div>
                <div style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontWeight: 300 }}>{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <div className="stats-section">
        {c.missionItems.map(([icon, title, text]) => (
          <div className="stat-item" key={title} style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{icon}</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '2px', marginBottom: '6px' }}>{title}</div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, fontWeight: 300 }}>{text}</div>
          </div>
        ))}
      </div>

      {/* LEADERS */}
      <section className="section" style={{ background: '#080808' }}>
        <p className="section-label">{c.leaderLabel}</p>
        <h2 className="section-title">{c.leaderT1}<br />{c.leaderT2}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2px', marginTop: '48px' }}>
          {LEADERS.map(leader => (
            <div key={leader.name} style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ height: '280px', overflow: 'hidden' }}>
                <img src={leader.img} alt={leader.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(20%)' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', letterSpacing: '2px' }}>{leader.name}</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '2px', color: 'var(--gm-accent)', marginBottom: '12px', marginTop: '4px' }}>{leader.role[lang] || leader.role.en}</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontWeight: 300 }}>{leader.bio[lang] || leader.bio.en}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEI */}
      <section className="section">
        <p className="section-label">{c.deiLabel}</p>
        <h2 className="section-title">{c.deiT1}<br />{c.deiT2}</h2>
        <div className="cards-grid">
          {c.deiCards.map(card => (
            <div className="card" key={card.title}>
              <div className="card-icon">{card.icon}</div>
              <div className="card-title">{card.title}</div>
              <div className="card-text">{card.text}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

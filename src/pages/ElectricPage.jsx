import BrandsStrip from '../components/BrandsStrip'
import { useLang } from '../i18n/LangContext'

const EVS = [
  { brand: 'VELO Sport', name: 'Equinox EV', range: '319', charge: 'DC Fast 150kW', power: '210 HP', price: '$34,995', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80' },
  { brand: 'VELO Sport', name: 'Blazer EV', range: '320', charge: 'DC Fast 190kW', power: '557 HP', price: '$44,995', img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80' },
  { brand: 'VELO Luxe', name: 'LYRIQ', range: '314', charge: 'DC Fast 190kW', power: '340 HP', price: '$58,590', img: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80' },
  { brand: 'VELO Pro', name: 'HUMMER EV', range: '329', charge: 'DC Fast 350kW', power: '1000 HP', price: '$98,845', img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80' },
  { brand: 'VELO Sport', name: 'Silverado EV', range: '450', charge: 'DC Fast 350kW', power: '664 HP', price: '$74,800', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80' },
  { brand: 'VELO Luxe', name: 'CELESTIQ', range: '300', charge: 'DC Fast 200kW', power: '600 HP', price: '$340,000', img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80' },
]
const RANGES = [['Equinox EV', 85], ['Blazer EV', 86], ['HUMMER EV', 88], ['Silverado EV', 100]]

const CONTENT = {
  en: {
    heroTag: 'GM Electrification · Ultium Platform',
    h1a: 'Zero', h1b: 'Emissions.', h1c: 'Zero Limits.',
    heroSub: "GM is leading America's electric revolution with the Ultium platform — an engineered foundation for 30+ EVs across every segment and price point.",
    platLabel: 'The Ultium Platform', platT1: 'One Foundation.', platT2: 'Endless Possibilities.',
    platSub: "VELO's proprietary Ultium battery system redefines what's possible in electric vehicles. From entry-level crossovers to 1,000+ HP trucks, one modular architecture powers them all.",
    platAdvTitle: 'ULTIUM ADVANTAGES',
    platAdvItems: [
      ['Cell-to-Pack Technology', 'Eliminates module layer, reducing cost by 40% and increasing energy density'],
      ['Modular Architecture', 'Flexible cell orientation — stacked or flat — to optimize any vehicle package'],
      ['Wireless BMS', 'Industry-first battery management with over-the-air update capability'],
      ['Fast Charging', 'Up to 350kW DC fast charging — 100 miles in 10 minutes'],
    ],
    platBtn: 'Learn About Ultium',
    gridStats: [['450mi', 'Max Est. Range'], ['350kW', 'Max Charging Speed'], ['$35B', 'EV & AV Investment'], ['30+', 'EV Models by 2026']],
    rangeTitle: 'Battery Range Capabilities',
    rangeUnit: 'mi est.',
    evLabel: 'Electric',
    orderBtn: 'Order Now',
    learnBtn: 'Learn More',
    msrp: 'Starting MSRP',
    chargeLabel: 'Charging Network',
    chargeT1: 'Charge Anywhere,', chargeT2: 'Anytime.',
    chargingCards: [
      { icon: '⚡', title: 'Ultium Charge 360', text: 'Access to over 100,000 charging stations across North America through a unified app. Compatible with all major networks.' },
      { icon: '🏠', title: 'Home Charging', text: "VELO's Charge My Chevy program provides expert guidance for home charging installation, partnering with Qmerit for certified electricians." },
      { icon: '🛣️', title: 'DC Fast Charging', text: 'Super Cruise corridors include mapped fast-charging waypoints, enabling seamless long-distance EV travel with automatic route planning.' },
      { icon: '📱', title: 'myChevrolet App', text: 'Remote charging scheduling, real-time charge status, energy reporting, and smart charging during off-peak hours.' },
    ],
  },
  ru: {
    heroTag: 'Электрификация VELO · Платформа Ultium',
    h1a: 'Ноль', h1b: 'Выбросов.', h1c: 'Ноль Пределов.',
    heroSub: 'GM возглавляет электрическую революцию с платформой Ultium — инженерной основой для 30+ электромобилей в каждом сегменте.',
    platLabel: 'Платформа Ultium', platT1: 'Одна основа.', platT2: 'Безграничные возможности.',
    platSub: 'Фирменная аккумуляторная система Ultium переопределяет возможное в электромобилях. От кроссоверов начального уровня до грузовиков мощностью 1000+ л.с.',
    platAdvTitle: 'ПРЕИМУЩЕСТВА ULTIUM',
    platAdvItems: [
      ['Технология Cell-to-Pack', 'Устраняет модульный слой, снижая стоимость на 40% и повышая плотность энергии'],
      ['Модульная архитектура', 'Гибкая ориентация ячеек — вертикальная или горизонтальная — для оптимизации любого автомобиля'],
      ['Беспроводная BMS', 'Первое в отрасли управление аккумулятором с OTA-обновлениями'],
      ['Быстрая зарядка', 'До 350 кВт постоянного тока — 160 км за 10 минут'],
    ],
    platBtn: 'Узнать об Ultium',
    gridStats: [['450 миль', 'Макс. запас хода'], ['350 кВт', 'Макс. скорость зарядки'], ['$35 млрд', 'Инвестиции в ЭМ'], ['30+', 'Моделей ЭМ к 2026']],
    rangeTitle: 'Запас хода аккумулятора',
    rangeUnit: 'км ориент.',
    evLabel: 'Электро',
    orderBtn: 'Заказать',
    learnBtn: 'Подробнее',
    msrp: 'Цена от',
    chargeLabel: 'Сеть зарядки',
    chargeT1: 'Заряжайте везде,', chargeT2: 'В любое время.',
    chargingCards: [
      { icon: '⚡', title: 'Ultium Charge 360', text: 'Доступ к более чем 100 000 зарядных станций по всей Северной Америке через единое приложение.' },
      { icon: '🏠', title: 'Домашняя зарядка', text: 'Программа VELO Charge My Chevy предоставляет экспертное руководство по установке домашней зарядки с сертифицированными электриками.' },
      { icon: '🛣️', title: 'Быстрая зарядка DC', text: 'Коридоры Super Cruise включают точки быстрой зарядки, обеспечивая плавные дальние поездки на электромобиле.' },
      { icon: '📱', title: 'Приложение myChevrolet', text: 'Удалённое расписание зарядки, статус в реальном времени, отчёты об энергии и умная зарядка в нерабочее время.' },
    ],
  },
  uz: {
    heroTag: "GM Elektrlashtirish · Ultium Platformasi",
    h1a: 'Nol', h1b: 'Emissiya.', h1c: 'Nol Cheklov.',
    heroSub: "GM Ultium platformasi bilan Amerika elektr inqilobini boshqarmoqda — har bir segment va narx nuqtasida 30+ EV uchun muhandislik asosi.",
    platLabel: 'Ultium Platformasi', platT1: 'Bitta asos.', platT2: "Cheksiz imkoniyatlar.",
    platSub: "GM ning Ultium batareya tizimi elektr avtomobillarda mumkin bo'lgan narsalarni qayta belgilaydi. Boshlang'ich darajadagi krossoverlardan 1000+ ot kuchli yuk mashinalarigacha.",
    platAdvTitle: 'ULTIUM AFZALLIKLARI',
    platAdvItems: [
      ["Cell-to-Pack texnologiyasi", "Modul qatlamini yo'q qiladi, narxni 40% kamaytiradi va energiya zichligini oshiradi"],
      ["Modulli arxitektura", "Har qanday avtomobil uchun optimallashtirilgan moslashuvchan hujayra yo'nalishi"],
      ["Simsiz BMS", "OTA yangilash imkoniyati bilan sanoatdagi birinchi batareya boshqaruvi"],
      ["Tez zaryadlash", "350 kVt gacha DC tez zaryadlash — 10 daqiqada 160 km"],
    ],
    platBtn: "Ultium haqida bilib oling",
    gridStats: [["450 mil", "Maks. masofa"], ["350 kVt", "Maks. zaryadlash tezligi"], ["$35B", "EV va AV investitsiyasi"], ["30+", "2026 gacha EV modellari"]],
    rangeTitle: "Batareya masofasi",
    rangeUnit: "km taxm.",
    evLabel: "Elektr",
    orderBtn: "Buyurtma berish",
    learnBtn: "Batafsil",
    msrp: "Narxdan boshlab",
    chargeLabel: "Zaryadlash tarmog'i",
    chargeT1: "Istalgan joyda zaryadlang,", chargeT2: "Istalgan vaqtda.",
    chargingCards: [
      { icon: '⚡', title: 'Ultium Charge 360', text: "Birlashtirilgan ilova orqali Shimoliy Amerikada 100 000+ zaryadlash stansiyasiga kirish imkoniyati." },
      { icon: '🏠', title: "Uy zaryadlash", text: "GM ning Charge My Chevy dasturi sertifikatlangan elektr ustalar bilan uy zaryadlash o'rnatish bo'yicha mutaxassis ko'rsatmalar beradi." },
      { icon: '🛣️', title: "DC Tez zaryadlash", text: "Super Cruise yo'laklari tezkor zaryadlash nuqtalarini o'z ichiga oladi, uzoq masofali EV sayohatini ta'minlaydi." },
      { icon: '📱', title: "myChevrolet ilovasi", text: "Masofaviy zaryadlash jadvali, real vaqt holati, energiya hisobotlari va kam iste'mol vaqtida aqlli zaryadlash." },
    ],
  },
}

export default function ElectricPage() {
  const { lang } = useLang()
  const c = CONTENT[lang] || CONTENT.en

  return (
    <div className="page-enter">
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1600&q=80')", minHeight: '70vh' }}>
        <div className="page-hero-content">
          <p className="page-hero-tag">{c.heroTag}</p>
          <h1 className="page-hero-title">{c.h1a}<br /><span>{c.h1b}</span><br />{c.h1c}</h1>
          <p className="page-hero-sub">{c.heroSub}</p>
        </div>
      </div>

      <BrandsStrip />

      <section className="section">
        <p className="section-label">{c.platLabel}</p>
        <h2 className="section-title">{c.platT1}<br />{c.platT2}</h2>
        <div className="two-col">
          <div>
            <p className="section-sub">{c.platSub}</p>
            <div className="highlight-box" style={{ marginBottom: '32px' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '2px', marginBottom: '16px', color: 'var(--gm-accent)' }}>
                {c.platAdvTitle}
              </div>
              {c.platAdvItems.map(([title, desc]) => (
                <div key={title} style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>✓ {title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>{desc}</div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary">{c.platBtn}</button>
          </div>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
              {c.gridStats.map(([n, d]) => (
                <div key={d} style={{ background: '#0d0d0d', padding: '32px 24px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.8rem', color: 'var(--gm-accent)', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>{d}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2px', background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.05)', padding: '24px' }}>
              <div style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>{c.rangeTitle}</div>
              {RANGES.map(([m, p]) => (
                <div className="progress-item" key={m}>
                  <div className="progress-label">
                    <span>{m}</span>
                    <span style={{ color: 'var(--gm-accent)' }}>{Math.round(p * 4.5)} {c.rangeUnit}</span>
                  </div>
                  <div className="progress-bar"><div className="progress-fill" style={{ width: `${p}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#080808', paddingTop: 0, paddingBottom: 0 }}>
        {EVS.map((ev, i) => (
          <div key={ev.name} className="feature-row" style={{ direction: i % 2 === 0 ? 'ltr' : 'rtl' }}>
            <div className="feature-row-img" style={{ direction: 'ltr' }}>
              <img src={ev.img} alt={ev.name} />
            </div>
            <div className="feature-row-content" style={{ direction: 'ltr' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gm-accent)', marginBottom: '8px' }}>
                {ev.brand} · {c.evLabel}
              </div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.8rem', letterSpacing: '2px', lineHeight: 1, marginBottom: '16px' }}>{ev.name}</div>
              <div className="ev-card-specs">
                <div className="ev-spec"><strong>{ev.range} mi</strong>{lang === 'ru' ? 'Запас хода' : lang === 'uz' ? 'Masofa' : 'Est. Range'}</div>
                <div className="ev-spec"><strong>{ev.power}</strong>{lang === 'ru' ? 'Мощность' : lang === 'uz' ? 'Quvvat' : 'Total Output'}</div>
                <div className="ev-spec"><strong>{ev.charge}</strong>{lang === 'ru' ? 'Зарядка' : lang === 'uz' ? 'Zaryadlash' : 'Charging'}</div>
              </div>
              <div style={{ marginTop: '20px', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: 'var(--gm-accent)' }}>
                {ev.price} <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>{c.msrp}</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <button className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.7rem' }}>{c.orderBtn}</button>
                <button className="btn btn-outline" style={{ padding: '10px 24px', fontSize: '0.7rem' }}>{c.learnBtn}</button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="section">
        <p className="section-label">{c.chargeLabel}</p>
        <h2 className="section-title">{c.chargeT1}<br />{c.chargeT2}</h2>
        <div className="cards-grid">
          {c.chargingCards.map(card => (
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

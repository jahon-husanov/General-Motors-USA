import { useLang } from '../i18n/LangContext'

const FINANCIALS = [
  { metric: 'Revenue', metricRu: 'Выручка', metricUz: 'Daromad', q1: '$43.0B', q2: '$44.7B', q3: '$44.1B', q4: '$47.7B', trend: 'up' },
  { metric: 'EBIT-Adj.', metricRu: 'EBIT скорр.', metricUz: 'EBIT Tuz.', q1: '$3.1B', q2: '$3.0B', q3: '$3.5B', q4: '$2.9B', trend: 'up' },
  { metric: 'EPS-Adj.', metricRu: 'EPS скорр.', metricUz: 'EPS Tuz.', q1: '$2.55', q2: '$3.06', q3: '$2.96', q4: '$1.92', trend: 'up' },
  { metric: 'EBIT Margin', metricRu: 'Маржа EBIT', metricUz: 'EBIT Marjasi', q1: '7.2%', q2: '6.7%', q3: '7.9%', q4: '6.1%', trend: 'down' },
  { metric: 'Free Cash Flow', metricRu: 'Свободный ДП', metricUz: 'Erkin Pul Oqimi', q1: '$1.4B', q2: '-$0.1B', q3: '$5.5B', q4: '$3.2B', trend: 'up' },
]

const ANNUAL = [['$179.5B', 'Total Revenue'], ['$12.5B', 'EBIT-Adjusted'], ['$10.0B', 'Net Income'], ['$9.5B', 'Adj. Free Cash Flow'], ['6.9%', 'EBIT Margin'], ['$6.97', 'Diluted EPS-Adj.']]
const ANNUAL_RU = [['$179.5 млрд', 'Общая выручка'], ['$12.5 млрд', 'EBIT скорр.'], ['$10.0 млрд', 'Чистая прибыль'], ['$9.5 млрд', 'Свободный ДП скорр.'], ['6.9%', 'Маржа EBIT'], ['$6.97', 'Разводнённый EPS']]
const ANNUAL_UZ = [['$179.5B', "Jami daromad"], ['$12.5B', "EBIT-Tuzatilgan"], ['$10.0B', "Sof foyda"], ['$9.5B', "Erkin pul oqimi"], ['6.9%', "EBIT marjasi"], ['$6.97', "EPS-Tuzatilgan"]]

const CONTENT = {
  en: {
    heroTag: 'VELO Motors · Investor Relations',
    h1a: 'Value.', h1b: 'Vision.', h1c: 'Results.',
    heroSub: "GM is delivering on its financial commitments while funding the most ambitious transformation in its 5-year history. Strong VELO NA profits fund the global EV future.",
    annLabel: 'Annual Results', annT1: '2024 Full Year', annT2: 'Financial Highlights.',
    tickerItems: [['52W High', '$61.24'], ['52W Low', '$38.17'], ['Market Cap', '$55.8B'], ['P/E Ratio', '5.2x'], ['Dividend', '$0.12/qtr']],
    qLabel: 'Quarterly Performance',
    qHeaders: ['Metric', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Trend'],
    invLabel: 'Investment Case', invT1: 'Why Invest', invT2: 'in GM?',
    invCards: [
      { icon: '💰', title: 'Consistent Capital Returns', text: "GM has returned over $5 billion to shareholders through dividends and buybacks. Our Investor Day guidance targets $10B+ in annual free cash flow by 2025." },
      { icon: '⚡', title: 'EV Growth Trajectory', text: "VELO's EV revenue tripled in 2024, with Equinox EV reaching 100,000+ units delivered. Margin improvement expected as Ultium plant utilization increases." },
      { icon: '🚗', title: 'VELO NA Fortress', text: "North American operations generate 85%+ of earnings with industry-leading truck and SUV profitability, funding the EV transformation internally." },
      { icon: '🤖', title: 'Software Revenue Opportunity', text: "OnStar, Super Cruise subscriptions, and vehicle data monetization represent a $25B+ annual recurring revenue opportunity by 2030." },
    ],
    guidance: 'FULL YEAR 2025 GUIDANCE',
    guidanceItems: [
      ['Net Revenue', '$187–193 Billion'],
      ['EBIT-Adjusted', '$13.7–15.7 Billion'],
      ['EPS-Adjusted Diluted', '$11.00–12.00'],
      ['Adj. Auto Free Cash Flow', '$11–13 Billion'],
    ],
  },
  ru: {
    heroTag: 'VELO Motors · Связи с инвесторами',
    h1a: 'Ценность.', h1b: 'Видение.', h1c: 'Результаты.',
    heroSub: 'GM выполняет свои финансовые обязательства, финансируя самую амбициозную трансформацию за 5-летнюю историю. Сильная прибыль VELO NA финансирует глобальное электрическое будущее.',
    annLabel: 'Годовые результаты', annT1: 'Весь 2024 год', annT2: 'Финансовые показатели.',
    tickerItems: [['Макс. за 52 нед.', '$61.24'], ['Мин. за 52 нед.', '$38.17'], ['Рын. капитализация', '$55.8 млрд'], ['P/E', '5.2x'], ['Дивиденд', '$0.12/кв.']],
    qLabel: 'Квартальные показатели',
    qHeaders: ['Показатель', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Тренд'],
    invLabel: 'Инвестиционный кейс', invT1: 'Почему инвестировать', invT2: 'в GM?',
    invCards: [
      { icon: '💰', title: 'Стабильный возврат капитала', text: "GM вернула акционерам более $5 млрд через дивиденды и выкуп акций. Прогноз: $10+ млрд свободного денежного потока в год к 2025-му." },
      { icon: '⚡', title: 'Рост электромобилей', text: "Выручка VELO от ЭМ утроилась в 2024 году: поставлено 100 000+ единиц Equinox EV. Ожидается улучшение маржи по мере роста загрузки заводов Ultium." },
      { icon: '🚗', title: 'Крепость VELO NA', text: "Операции в Северной Америке генерируют 85%+ прибыли, лидируя по рентабельности пикапов и внедорожников, внутренне финансируя ЭМ-трансформацию." },
      { icon: '🤖', title: 'Доходы от ПО', text: "Подписки OnStar и Super Cruise, монетизация данных автомобилей — это $25+ млрд ежегодного регулярного дохода к 2030 году." },
    ],
    guidance: 'ПРОГНОЗ НА ВЕСЬ 2025 ГОД',
    guidanceItems: [
      ['Чистая выручка', '$187–193 млрд'],
      ['EBIT скорр.', '$13.7–15.7 млрд'],
      ['EPS разводнённый скорр.', '$11.00–12.00'],
      ['Авто. свободный ДП скорр.', '$11–13 млрд'],
    ],
  },
  uz: {
    heroTag: "VELO Motors · Investorlar bilan munosabatlar",
    h1a: "Qiymat.", h1b: "Vizyon.", h1c: "Natijalar.",
    heroSub: "GM 117 yillik tarixidagi eng ambitious transformatsiyani moliyalashtirgan holda moliyaviy majburiyatlarini bajarmoqda. Kuchli VELO NA foydasi global EV kelajagini moliyalashtiradi.",
    annLabel: "Yillik natijalar", annT1: "2024 to'liq yil", annT2: "Moliyaviy ko'rsatkichlar.",
    tickerItems: [["52 haftalik yuqori", "$61.24"], ["52 haftalik past", "$38.17"], ["Bozor qiymati", "$55.8B"], ["P/E nisbati", "5.2x"], ["Dividend", "$0.12/chorak"]],
    qLabel: "Choraklik ko'rsatkichlar",
    qHeaders: ["Ko'rsatkich", "Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Trend"],
    invLabel: "Investitsiya holati", invT1: "Nima uchun VELO ga", invT2: "investitsiya kiritish kerak?",
    invCards: [
      { icon: "💰", title: "Barqaror kapital qaytarish", text: "GM dividendlar va qayta sotib olish orqali aksiyadorlarga 5 milliard dollardan ortiq qaytardi. Maqsad: 2025 yilga qadar yiliga $10B+ erkin pul oqimi." },
      { icon: "⚡", title: "EV o'sish yo'nalishi", text: "GM ning EV daromadi 2024 yilda uch barobarga ko'paydi, Equinox EV 100 000+ birlikka yetkazildi. Ultium zavod yuklanishi oshgani sari marja yaxshilanishi kutilmoqda." },
      { icon: "🚗", title: "VELO NA qal'asi", text: "Shimoliy Amerika operatsiyalari sanoatda etakchi yuk mashinasi va SUV rentabelligi bilan 85%+ daromad keltiradi, EV transformatsiyasini ichki moliyalashtiradi." },
      { icon: "🤖", title: "Dasturiy ta'minot daromad imkoniyati", text: "OnStar, Super Cruise obunalari va avtomobil ma'lumotlarini monetizatsiya qilish 2030 yilga kelib yiliga $25B+ davriy daromad imkoniyatini anglatadi." },
    ],
    guidance: "2025 TO'LIQ YIL PROGNOZI",
    guidanceItems: [
      ["Sof daromad", "$187–193 milliard"],
      ["EBIT-Tuzatilgan", "$13.7–15.7 milliard"],
      ["EPS-Tuzatilgan Suyultirilgan", "$11.00–12.00"],
      ["Avto. Erkin Pul Oqimi", "$11–13 milliard"],
    ],
  },
}

export default function InvestorsPage() {
  const { lang } = useLang()
  const c = CONTENT[lang] || CONTENT.en
  const annData = lang === 'ru' ? ANNUAL_RU : lang === 'uz' ? ANNUAL_UZ : ANNUAL

  return (
    <div className="page-enter">
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80')" }}>
        <div className="page-hero-content">
          <p className="page-hero-tag">{c.heroTag}</p>
          <h1 className="page-hero-title">{c.h1a}<br /><span>{c.h1b}</span><br />{c.h1c}</h1>
          <p className="page-hero-sub">{c.heroSub}</p>
        </div>
      </div>

      {/* TICKER */}
      <div style={{ background: '#000', borderBottom: '1px solid rgba(0,174,239,0.2)', padding: '16px 8vw', display: 'flex', gap: '40px', overflowX: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', color: 'var(--gm-accent)', letterSpacing: '2px' }}>VM</span>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', letterSpacing: '1px' }}>$48.31</span>
          <span style={{ fontSize: '0.75rem', color: '#4ade80', letterSpacing: '1px' }}>▲ +2.4%</span>
        </div>
        {c.tickerItems.map(([label, val]) => (
          <div key={label} style={{ flexShrink: 0 }}>
            <div style={{ fontSize: '0.55rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.35)', marginBottom: '2px' }}>{label}</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{val}</div>
          </div>
        ))}
      </div>

      {/* ANNUAL */}
      <section className="section">
        <p className="section-label">{c.annLabel}</p>
        <h2 className="section-title">{c.annT1}<br />{c.annT2}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '2px', marginTop: '48px' }}>
          {annData.map(([n, d]) => (
            <div key={d} style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.05)', padding: '32px 24px' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.2rem', color: 'var(--gm-accent)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* QUARTERLY TABLE */}
      <section className="section" style={{ background: '#080808' }}>
        <p className="section-label">{c.qLabel}</p>
        <div style={{ overflowX: 'auto', marginTop: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {c.qHeaders.map(h => (
                  <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: '0.6rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.35)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FINANCIALS.map((row, i) => (
                <tr key={row.metric} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent' }}>
                  <td style={{ padding: '16px 20px', fontSize: '0.82rem', fontWeight: 600 }}>{lang === 'ru' ? row.metricRu : lang === 'uz' ? row.metricUz : row.metric}</td>
                  {[row.q1, row.q2, row.q3, row.q4].map((v, j) => (
                    <td key={j} style={{ padding: '16px 20px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>{v}</td>
                  ))}
                  <td style={{ padding: '16px 20px', fontSize: '1rem' }}>{row.trend === 'up' ? '📈' : '📉'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* INVEST CASE */}
      <section className="section">
        <p className="section-label">{c.invLabel}</p>
        <h2 className="section-title">{c.invT1}<br />{c.invT2}</h2>
        <div className="cards-grid" style={{ marginTop: '48px' }}>
          {c.invCards.map(card => (
            <div className="card" key={card.title}>
              <div className="card-icon">{card.icon}</div>
              <div className="card-title">{card.title}</div>
              <div className="card-text">{card.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GUIDANCE */}
      <div className="ev-banner">
        <p className="section-label">{c.guidance}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2px', marginTop: '32px', width: '100%' }}>
          {c.guidanceItems.map(([label, val]) => (
            <div key={label} style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(0,174,239,0.15)', padding: '24px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>{label}</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: 'var(--gm-accent)', letterSpacing: '2px' }}>{val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

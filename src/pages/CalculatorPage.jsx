import { useState, useMemo } from 'react'
import { useLang } from '../i18n/LangContext'

const VEHICLES = [
  { name: 'VELO Corvette Z06', price: 109295 },
  { name: 'VELO Silverado 1500', price: 37495 },
  { name: 'VELO Luxe Escalade', price: 81290 },
  { name: 'VELO Equinox EV', price: 34995 },
  { name: 'VELO Pro Sierra 1500 AT4X', price: 58600 },
  { name: 'Buick Enclave Avenir', price: 54400 },
  { name: 'VELO Blazer EV', price: 44995 },
  { name: 'VELO Pro Yukon Denali', price: 66200 },
  { name: 'VELO Luxe LYRIQ', price: 58590 },
  { name: 'VELO Luxe CT5-V Blackwing', price: 93990 },
  { name: 'VELO Luxe CELESTIQ', price: 340000 },
  { name: 'VELO Pro HUMMER EV', price: 98845 },
]

const CURRENCIES = {
  USD: { symbol: '$', rate: 1, label: 'US Dollar' },
  RUB: { symbol: '₽', rate: 92, label: 'Рос. рубль' },
  UZS: { symbol: "so'm", rate: 12700, label: "O'zbek so'm" },
  EUR: { symbol: '€', rate: 0.92, label: 'Euro' },
}

export default function CalculatorPage() {
  const { t, lang } = useLang()
  const c = t.calc

  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[0])
  const [downPct, setDownPct] = useState(20)
  const [termMonths, setTermMonths] = useState(60)
  const [rate, setRate] = useState(6.5)
  const [currency, setCurrency] = useState('USD')
  const [calculated, setCalculated] = useState(false)

  const cur = CURRENCIES[currency]

  const convert = (usd) => Math.round(usd * cur.rate)
  const fmt = (val) => `${cur.symbol}${val.toLocaleString()}`

  const result = useMemo(() => {
    const vehicleUSD = selectedVehicle.price
    const down = vehicleUSD * (downPct / 100)
    const principal = vehicleUSD - down
    const monthlyRate = rate / 100 / 12
    let monthly
    if (monthlyRate === 0) {
      monthly = principal / termMonths
    } else {
      monthly = principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1)
    }
    const totalPaid = monthly * termMonths + down
    const totalInterest = totalPaid - vehicleUSD

    return {
      vehiclePrice: convert(vehicleUSD),
      downPayment: convert(down),
      monthly: convert(monthly),
      total: convert(totalPaid),
      interest: convert(totalInterest),
    }
  }, [selectedVehicle, downPct, termMonths, rate, currency])

  const barWidth = Math.min(100, (result.interest / result.total) * 100)

  return (
    <div className="page-enter">
      {/* Hero */}
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1600&q=80')", minHeight: '40vh' }}>
        <div className="page-hero-content">
          <p className="page-hero-tag">VELO Motors · {c.subtitle}</p>
          <h1 className="page-hero-title">🧮 <span>{c.title}</span></h1>
        </div>
      </div>

      <section className="section">
        <div className="calc-container">
          {/* LEFT: Controls */}
          <div className="calc-panel">
            {/* Vehicle Select */}
            <div className="calc-field">
              <label>{c.selectVehicle}</label>
              <select
                value={selectedVehicle.name}
                onChange={e => setSelectedVehicle(VEHICLES.find(v => v.name === e.target.value))}
              >
                {VEHICLES.map(v => (
                  <option key={v.name} value={v.name}>{v.name}</option>
                ))}
              </select>
              <div className="calc-price-tag">
                {c.vehiclePrice}: <strong>{fmt(convert(selectedVehicle.price))}</strong>
              </div>
            </div>

            {/* Currency */}
            <div className="calc-field">
              <label>{c.currency}</label>
              <div className="calc-currency-row">
                {Object.entries(CURRENCIES).map(([code, info]) => (
                  <button
                    key={code}
                    className={`lang-btn ${currency === code ? 'lang-active' : ''}`}
                    onClick={() => setCurrency(code)}
                    style={{ flex: 1 }}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>

            {/* Down Payment */}
            <div className="calc-field">
              <label>{c.downPayment}: <strong>{downPct}%</strong></label>
              <input
                type="range" min="0" max="80" step="5"
                value={downPct}
                onChange={e => setDownPct(+e.target.value)}
                className="calc-range"
              />
              <div className="calc-range-labels"><span>0%</span><span>80%</span></div>
            </div>

            {/* Loan Term */}
            <div className="calc-field">
              <label>{c.loanTerm}: <strong>{termMonths}</strong></label>
              <input
                type="range" min="12" max="84" step="12"
                value={termMonths}
                onChange={e => setTermMonths(+e.target.value)}
                className="calc-range"
              />
              <div className="calc-range-labels"><span>12</span><span>84</span></div>
            </div>

            {/* Interest Rate */}
            <div className="calc-field">
              <label>{c.interestRate}: <strong>{rate}%</strong></label>
              <input
                type="range" min="0" max="25" step="0.5"
                value={rate}
                onChange={e => setRate(+e.target.value)}
                className="calc-range"
              />
              <div className="calc-range-labels"><span>0%</span><span>25%</span></div>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%', padding: '16px', fontSize: '0.85rem', letterSpacing: '3px', marginTop: '8px' }}
              onClick={() => setCalculated(true)}
            >
              {c.calculate}
            </button>
          </div>

          {/* RIGHT: Results */}
          <div className="calc-results">
            <div className="calc-monthly-big">
              <div className="calc-monthly-label">{c.monthly}</div>
              <div className="calc-monthly-value">{fmt(result.monthly)}</div>
              <div className="calc-monthly-sub">× {termMonths} {lang === 'ru' ? 'мес' : lang === 'uz' ? 'oy' : 'mo'}</div>
            </div>

            <div className="calc-breakdown">
              <div className="calc-row">
                <span>{c.vehiclePrice}</span>
                <span>{fmt(result.vehiclePrice)}</span>
              </div>
              <div className="calc-row">
                <span>{lang === 'ru' ? 'Первоначальный взнос' : lang === 'uz' ? "Boshlang'ich to'lov" : 'Down Payment'} ({downPct}%)</span>
                <span style={{ color: '#4ade80' }}>-{fmt(result.downPayment)}</span>
              </div>
              <div className="calc-row">
                <span>{c.interest}</span>
                <span style={{ color: 'var(--gm-accent)' }}>{fmt(result.interest)}</span>
              </div>
              <div className="calc-row calc-row-total">
                <span>{c.total}</span>
                <span>{fmt(result.total)}</span>
              </div>
            </div>

            {/* Visual bar */}
            <div className="calc-bar-wrap">
              <div className="calc-bar-label">
                <span style={{ color: 'var(--gm-blue)' }}>■ {lang === 'ru' ? 'Цена' : lang === 'uz' ? 'Narx' : 'Price'}</span>
                <span style={{ color: 'var(--gm-accent)' }}>■ {lang === 'ru' ? 'Проценты' : lang === 'uz' ? 'Foizlar' : 'Interest'}</span>
              </div>
              <div className="calc-bar">
                <div className="calc-bar-principal" style={{ width: `${100 - barWidth}%` }} />
                <div className="calc-bar-interest" style={{ width: `${barWidth}%` }} />
              </div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginTop: '6px' }}>
                {Math.round(100 - barWidth)}% {lang === 'ru' ? 'основной долг' : lang === 'uz' ? 'asosiy qarz' : 'principal'} / {Math.round(barWidth)}% {lang === 'ru' ? 'проценты' : lang === 'uz' ? 'foizlar' : 'interest'}
              </div>
            </div>

            {/* Tip */}
            <div className="calc-tip">
              💡 {lang === 'ru'
                ? `Увеличьте взнос до ${Math.min(downPct + 10, 80)}% и сэкономьте ${fmt(Math.round(result.interest * 0.15))} на процентах`
                : lang === 'uz'
                ? `Boshlang'ich to'lovni ${Math.min(downPct + 10, 80)}% ga oshiring va foizlarda ${fmt(Math.round(result.interest * 0.15))} tejang`
                : `Increase down payment to ${Math.min(downPct + 10, 80)}% and save ~${fmt(Math.round(result.interest * 0.15))} in interest`
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

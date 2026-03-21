const FINANCIALS = [
  { metric: 'Revenue', q1: '$43.0B', q2: '$44.7B', q3: '$44.1B', q4: '$47.7B', trend: 'up' },
  { metric: 'EBIT-Adj.', q1: '$3.1B', q2: '$3.0B', q3: '$3.5B', q4: '$2.9B', trend: 'up' },
  { metric: 'EPS-Adj.', q1: '$2.55', q2: '$3.06', q3: '$2.96', q4: '$1.92', trend: 'up' },
  { metric: 'EBIT Margin', q1: '7.2%', q2: '6.7%', q3: '7.9%', q4: '6.1%', trend: 'down' },
  { metric: 'Free Cash Flow', q1: '$1.4B', q2: '-$0.1B', q3: '$5.5B', q4: '$3.2B', trend: 'up' },
]

const TICKER_ITEMS = [
  ['52W High', '$61.24'],
  ['52W Low', '$38.17'],
  ['Market Cap', '$55.8B'],
  ['P/E Ratio', '5.2x'],
  ['Dividend', '$0.12/qtr'],
]

const ANNUAL_HIGHLIGHTS = [
  ['$179.5B', 'Total Revenue'],
  ['$12.5B', 'EBIT-Adjusted'],
  ['$10.0B', 'Net Income'],
  ['$9.5B', 'Adj. Free Cash Flow'],
  ['6.9%', 'EBIT Margin'],
  ['$6.97', 'Diluted EPS-Adj.'],
]

const INVEST_CARDS = [
  { icon: '💰', title: 'Consistent Capital Returns', text: 'GM has returned over $5 billion to shareholders through dividends and buybacks. Our Investor Day guidance targets $10B+ in annual free cash flow by 2025.' },
  { icon: '⚡', title: 'EV Growth Trajectory', text: "GM's EV revenue tripled in 2024, with Equinox EV reaching 100,000+ units delivered. Margin improvement expected as Ultium plant utilization increases." },
  { icon: '🚗', title: 'GMNA Fortress', text: 'North American operations generate 85%+ of earnings with industry-leading truck and SUV profitability, funding the EV transformation internally.' },
  { icon: '🤖', title: 'Software Revenue Opportunity', text: 'OnStar, Super Cruise subscriptions, and vehicle data monetization represent a $25B+ annual recurring revenue opportunity by 2030.' },
  { icon: '🏭', title: 'Manufacturing Efficiency', text: "GM's manufacturing footprint optimization has improved fixed cost absorption by 18% since 2019, with further efficiency gains as EV volumes scale." },
  { icon: '📈', title: 'Undervalued Versus Peers', text: 'GM trades at a significant discount to EV-pure-play peers despite executing on a comparable transformation with substantially lower risk.' },
]

const GUIDANCE = [
  ['Net Revenue', '$185 – $195 Billion'],
  ['EBIT-Adjusted', '$13.7 – $15.7 Billion'],
  ['EPS-Adjusted', '$11.00 – $12.00'],
  ['Adj. Auto Free CF', '$11.0 – $13.0 Billion'],
  ['EV Volume', '300,000+ units'],
]

const EVENTS = [
  ['Q1 2025 Earnings', 'April 29, 2025', 'Conference Call — 8:00 AM ET'],
  ['Annual Shareholders Meeting', 'June 10, 2025', 'Detroit, Michigan & Webcast'],
  ['GM Investor Day', 'September 18, 2025', 'New York City — Live & Virtual'],
  ['Q2 2025 Earnings', 'July 22, 2025', 'Conference Call — 8:00 AM ET'],
]

export default function InvestorsPage() {
  return (
    <div className="page-enter">
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80')" }}
      >
        <div className="page-hero-content">
          <p className="page-hero-tag">General Motors · Investor Relations</p>
          <h1 className="page-hero-title">Invest in<br /><span>America's</span><br />Future.</h1>
          <p className="page-hero-sub">
            GM delivers consistent financial performance while funding the most ambitious
            transformation in automotive history — creating long-term value for shareholders.
          </p>
        </div>
      </div>

      {/* TICKER */}
      <div style={{ background: '#0d0d0d', padding: '28px 8vw', display: 'flex', gap: '32px', flexWrap: 'wrap', borderBottom: '1px solid rgba(255,255,255,0.06)', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>NYSE: GM</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: 'var(--gm-accent)' }}>$48.72</div>
        </div>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center', color: '#00c853', fontSize: '0.9rem', fontWeight: 600 }}>▲ $1.34 (+2.83%)</div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {TICKER_ITEMS.map(([l, v]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{l}</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', marginTop: '4px' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FINANCIAL HIGHLIGHTS */}
      <section className="section">
        <p className="section-label">Financial Highlights</p>
        <h2 className="section-title">2024 Full Year<br />Performance.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2px', marginBottom: '48px' }}>
          {ANNUAL_HIGHLIGHTS.map(([n, d]) => (
            <div key={d} style={{ background: '#111', padding: '32px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.2rem', color: 'var(--gm-accent)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>{d}</div>
            </div>
          ))}
        </div>

        {/* QUARTERLY TABLE */}
        <p className="section-label" style={{ marginTop: '60px' }}>Quarterly Results</p>
        <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', marginBottom: '24px', letterSpacing: '2px' }}>2024 Quarterly Breakdown</h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th><th>Q1 2024</th><th>Q2 2024</th><th>Q3 2024</th><th>Q4 2024</th><th>Trend</th>
              </tr>
            </thead>
            <tbody>
              {FINANCIALS.map(r => (
                <tr key={r.metric}>
                  <td style={{ fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{r.metric}</td>
                  <td>{r.q1}</td><td>{r.q2}</td><td>{r.q3}</td><td>{r.q4}</td>
                  <td className={r.trend}>{r.trend === 'up' ? '▲ Up' : '▼ Down'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-section">
        {[['$179.5B', '2024 Total Revenue'], ['$2.9B', 'Shareholder Returns 2024'], ['BBB+', 'S&P Credit Rating'], ['27%', 'EV Revenue Growth YoY']].map(([n, d]) => (
          <div className="stat-item" key={d}>
            <div className="stat-num">{n}</div>
            <div className="stat-desc">{d}</div>
          </div>
        ))}
      </div>

      {/* INVEST CASE */}
      <section className="section" style={{ background: '#080808' }}>
        <p className="section-label">Investment Case</p>
        <h2 className="section-title">Why Invest<br />in GM.</h2>
        <div className="cards-grid">
          {INVEST_CARDS.map(c => (
            <div className="card" key={c.title}>
              <div className="card-icon">{c.icon}</div>
              <div className="card-title">{c.title}</div>
              <div className="card-text">{c.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GUIDANCE */}
      <section className="section">
        <p className="section-label">2025 Guidance</p>
        <h2 className="section-title">Looking Ahead.</h2>
        <div className="two-col" style={{ alignItems: 'start' }}>
          <div>
            <div className="highlight-box" style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '3px', color: 'var(--gm-accent)', marginBottom: '20px' }}>
                2025 FINANCIAL GUIDANCE
              </div>
              {GUIDANCE.map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>{k}</span>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', color: '#fff', letterSpacing: '1px' }}>{v}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-primary">Download Annual Report</button>
            <button className="btn btn-outline" style={{ marginLeft: '12px' }}>IR Presentations</button>
          </div>

          {/* EVENTS */}
          <div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', letterSpacing: '2px', marginBottom: '24px', color: 'var(--gm-accent)' }}>
              UPCOMING EVENTS
            </div>
            {EVENTS.map(([t, d, l]) => (
              <div key={t} style={{ padding: '20px', background: '#111', border: '1px solid rgba(255,255,255,0.06)', marginBottom: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '2px', marginBottom: '4px' }}>{t}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px' }}>{l}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gm-accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>{d}</div>
                  <button className="btn btn-outline" style={{ padding: '6px 16px', fontSize: '0.6rem', marginTop: '8px' }}>Register</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

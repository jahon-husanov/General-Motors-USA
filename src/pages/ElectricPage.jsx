import BrandsStrip from '../components/BrandsStrip'

const EVS = [
  { brand: 'Chevrolet', name: 'Equinox EV', range: '319', charge: 'DC Fast 150kW', power: '210 HP', price: '$34,995', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80' },
  { brand: 'Chevrolet', name: 'Blazer EV', range: '320', charge: 'DC Fast 190kW', power: '557 HP', price: '$44,995', img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80' },
  { brand: 'Cadillac', name: 'LYRIQ', range: '314', charge: 'DC Fast 190kW', power: '340 HP', price: '$58,590', img: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80' },
  { brand: 'GMC', name: 'HUMMER EV', range: '329', charge: 'DC Fast 350kW', power: '1000 HP', price: '$98,845', img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80' },
  { brand: 'Chevrolet', name: 'Silverado EV', range: '450', charge: 'DC Fast 350kW', power: '664 HP', price: '$74,800', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80' },
  { brand: 'Cadillac', name: 'CELESTIQ', range: '300', charge: 'DC Fast 200kW', power: '600 HP', price: '$340,000', img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80' },
]

const CHARGING = [
  { icon: '⚡', title: 'Ultium Charge 360', text: 'Access to over 100,000 charging stations across North America through a unified app. Compatible with all major networks including Electrify America and EVgo.' },
  { icon: '🏠', title: 'Home Charging', text: "GM's Charge My Chevy program provides expert guidance for home charging installation, partnering with Qmerit for certified electricians nationwide." },
  { icon: '🛣️', title: 'DC Fast Charging', text: 'Super Cruise corridors now include mapped fast-charging waypoints, enabling seamless long-distance EV travel with automatic route planning.' },
  { icon: '📱', title: 'myChevrolet App', text: 'Remote charging scheduling, real-time charge status, energy reporting, and smart charging during off-peak hours — all from your smartphone.' },
]

const RANGES = [
  ['Equinox EV', 85],
  ['Blazer EV', 86],
  ['HUMMER EV', 88],
  ['Silverado EV', 100],
]

const GRID_STATS = [
  ['450mi', 'Max Estimated Range'],
  ['350kW', 'Max Charging Speed'],
  ['$35B', 'EV & AV Investment'],
  ['30+', 'EV Models by 2026'],
]

export default function ElectricPage() {
  return (
    <div className="page-enter">
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1600&q=80')", minHeight: '70vh' }}
      >
        <div className="page-hero-content">
          <p className="page-hero-tag">GM Electrification · Ultium Platform</p>
          <h1 className="page-hero-title">Zero<br /><span>Emissions.</span><br />Zero Limits.</h1>
          <p className="page-hero-sub">
            GM is leading America's electric revolution with the Ultium platform — an engineered
            foundation for 30+ EVs across every segment and price point.
          </p>
        </div>
      </div>

      <BrandsStrip />

      {/* ULTIUM PLATFORM */}
      <section className="section">
        <p className="section-label">The Ultium Platform</p>
        <h2 className="section-title">One Foundation.<br />Endless Possibilities.</h2>
        <div className="two-col">
          <div>
            <p className="section-sub">
              GM's proprietary Ultium battery system redefines what's possible in electric vehicles.
              From entry-level crossovers to 1,000+ HP trucks, one modular architecture powers them all.
            </p>
            <div className="highlight-box" style={{ marginBottom: '32px' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '2px', marginBottom: '16px', color: 'var(--gm-accent)' }}>
                ULTIUM ADVANTAGES
              </div>
              {[
                ['Cell-to-Pack Technology', 'Eliminates module layer, reducing cost by 40% and increasing energy density'],
                ['Modular Architecture', 'Flexible cell orientation — stacked or flat — to optimize any vehicle package'],
                ['Wireless BMS', 'Industry-first battery management with over-the-air update capability'],
                ['Fast Charging', 'Up to 350kW DC fast charging — 100 miles in 10 minutes'],
              ].map(([t, d]) => (
                <div key={t} style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>✓ {t}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>{d}</div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary">Learn About Ultium</button>
          </div>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
              {GRID_STATS.map(([n, d]) => (
                <div key={d} style={{ background: '#0d0d0d', padding: '32px 24px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.8rem', color: 'var(--gm-accent)', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>{d}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2px', background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.05)', padding: '24px' }}>
              <div style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>Battery Range Capabilities</div>
              {RANGES.map(([m, p]) => (
                <div className="progress-item" key={m}>
                  <div className="progress-label">
                    <span>{m}</span>
                    <span style={{ color: 'var(--gm-accent)' }}>{Math.round(p * 4.5)}mi est.</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${p}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EV FEATURE ROWS */}
      <section className="section" style={{ background: '#080808', paddingTop: 0, paddingBottom: 0 }}>
        {EVS.map((ev, i) => (
          <div key={ev.name} className="feature-row" style={{ direction: i % 2 === 0 ? 'ltr' : 'rtl' }}>
            <div className="feature-row-img" style={{ direction: 'ltr' }}>
              <img src={ev.img} alt={ev.name} />
            </div>
            <div className="feature-row-content" style={{ direction: 'ltr' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gm-accent)', marginBottom: '8px' }}>
                {ev.brand} · Electric
              </div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.8rem', letterSpacing: '2px', lineHeight: 1, marginBottom: '16px' }}>
                {ev.name}
              </div>
              <div className="ev-card-specs">
                <div className="ev-spec"><strong>{ev.range} mi</strong>Est. Range</div>
                <div className="ev-spec"><strong>{ev.power}</strong>Total Output</div>
                <div className="ev-spec"><strong>{ev.charge}</strong>Charging</div>
              </div>
              <div style={{ marginTop: '20px', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: 'var(--gm-accent)' }}>
                {ev.price} <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Starting MSRP</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <button className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.7rem' }}>Order Now</button>
                <button className="btn btn-outline" style={{ padding: '10px 24px', fontSize: '0.7rem' }}>Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CHARGING */}
      <section className="section">
        <p className="section-label">Charging Network</p>
        <h2 className="section-title">Charge Anywhere,<br />Anytime.</h2>
        <div className="cards-grid">
          {CHARGING.map(c => (
            <div className="card" key={c.title}>
              <div className="card-icon">{c.icon}</div>
              <div className="card-title">{c.title}</div>
              <div className="card-text">{c.text}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

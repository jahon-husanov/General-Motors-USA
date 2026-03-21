import BrandsStrip from '../components/BrandsStrip'

const VEHICLES = [
  { brand: 'Chevrolet', name: 'Corvette Z06', tag: '670 HP · Mid-Engine Supercar', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80' },
  { brand: 'Chevrolet', name: 'Silverado 1500', tag: 'Best-in-class towing · Full-Size Truck', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80' },
  { brand: 'Cadillac', name: 'Escalade', tag: 'Premium Full-Size SUV', img: 'https://images.unsplash.com/photo-1619767886558-efdc259b6e09?w=800&q=80' },
  { brand: 'Chevrolet', name: 'Equinox EV', tag: 'All-Electric · Up to 319 mi range', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80', badge: 'NEW EV' },
]

const STATS = [
  ['117', 'Years of Innovation'],
  ['135K+', 'Employees Worldwide'],
  ['30+', 'EV Models by 2026'],
  ['#1', 'U.S. Auto Manufacturer'],
]

const FEATURES = [
  { icon: '🔬', title: 'R&D Excellence', text: 'Over $35 billion committed to EV and AV research through 2025. GM\'s engineering teams lead the industry in patent filings and software-defined vehicle development.' },
  { icon: '🌍', title: 'Global Reach', text: 'Selling vehicles in over 100 countries with manufacturing operations across 6 continents. A truly global footprint delivering local expertise.' },
  { icon: '🤝', title: 'Community First', text: 'GM Foundation has invested over $1 billion in education, workforce development, and community programs over the past decade.' },
  { icon: '🏆', title: 'Safety Leadership', text: 'More NHTSA 5-Star safety ratings than any other automaker in 2024. Safety isn\'t a feature at GM — it\'s a foundation.' },
  { icon: '⚡', title: 'Ultium Platform', text: 'A revolutionary battery architecture enabling 19+ EVs across all GM brands, with cell-to-pack technology that reduces cost by 40%.' },
  { icon: '🤖', title: 'Super Cruise', text: 'The industry\'s first true hands-free driving system for compatible highways, available on 22+ GM vehicles and expanding globally.' },
]

export default function HomePage({ setPage }) {
  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="hero">
        <p className="hero-tag">General Motors · Since 1908</p>
        <h1 className="hero-title">Drive the<br /><span>Future</span></h1>
        <p className="hero-sub">
          From the roads of America to the frontiers of electric mobility —
          GM engineers the vehicles that define generations.
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => setPage('vehicles')}>Explore Vehicles</button>
          <button className="btn btn-outline" onClick={() => setPage('electric')}>Our EV Vision</button>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          SCROLL
        </div>
      </section>

      <BrandsStrip />

      {/* VEHICLES PREVIEW */}
      <section className="section">
        <p className="section-label">Our Lineup</p>
        <h2 className="section-title">Iconic American<br />Vehicles</h2>
        <div className="vehicles-grid">
          {VEHICLES.map(v => (
            <div className="vehicle-card" key={v.name} onClick={() => setPage('vehicles')}>
              <img src={v.img} alt={v.name} />
              {v.badge && <div className="vehicle-badge">{v.badge}</div>}
              <div className="vehicle-info">
                <div className="vehicle-brand">{v.brand}</div>
                <div className="vehicle-name">{v.name}</div>
                <div className="vehicle-tag">{v.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <div className="stats-section">
        {STATS.map(([n, d]) => (
          <div className="stat-item" key={d}>
            <div className="stat-num">{n}</div>
            <div className="stat-desc">{d}</div>
          </div>
        ))}
      </div>

      {/* EV BANNER */}
      <div className="ev-banner">
        <p className="section-label">Electrification</p>
        <h2 className="section-title">Zero Emissions.<br />Zero Compromise.</h2>
        <p className="ev-sub" style={{ marginBottom: 36 }}>
          GM's Ultium platform powers the next generation of electric vehicles —
          delivering the performance, range, and capability that American drivers demand.
        </p>
        <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }} onClick={() => setPage('electric')}>
          Discover Ultium
        </button>
      </div>

      {/* FEATURES */}
      <section className="section" style={{ background: '#080808' }}>
        <p className="section-label">Why GM</p>
        <h2 className="section-title">Built for<br />Generations</h2>
        <div className="cards-grid">
          {FEATURES.map(c => (
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

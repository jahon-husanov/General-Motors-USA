import { useState } from 'react'

const CATEGORIES = ['All', 'Trucks', 'SUVs', 'Cars', 'Electric', 'Luxury']

const VEHICLES = [
  { brand: 'Chevrolet', name: 'Corvette Z06', tag: '670 HP · Mid-Engine Supercar', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', cat: 'Cars', hp: '670', price: 'From $109,295', badge: '' },
  { brand: 'Chevrolet', name: 'Silverado 1500', tag: 'Best-in-class towing · Full-Size Truck', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', cat: 'Trucks', hp: '420', price: 'From $37,495', badge: '' },
  { brand: 'Cadillac', name: 'Escalade', tag: 'Premium Full-Size SUV', img: 'https://images.unsplash.com/photo-1619767886558-efdc259b6e09?w=800&q=80', cat: 'Luxury', hp: '420', price: 'From $81,290', badge: 'LUXURY' },
  { brand: 'Chevrolet', name: 'Equinox EV', tag: 'All-Electric · Up to 319 mi range', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80', cat: 'Electric', hp: '210', price: 'From $34,995', badge: 'EV' },
  { brand: 'GMC', name: 'Sierra 1500 AT4X', tag: 'Off-Road Ready · Heavy-Duty Pro', img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', cat: 'Trucks', hp: '420', price: 'From $58,600', badge: '' },
  { brand: 'Buick', name: 'Enclave Avenir', tag: '3-Row Luxury SUV · Signature Style', img: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=800&q=80', cat: 'Luxury', hp: '305', price: 'From $54,400', badge: 'LUXURY' },
  { brand: 'Chevrolet', name: 'Blazer EV', tag: 'Electric Performance · AWD Available', img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80', cat: 'Electric', hp: '557', price: 'From $44,995', badge: 'EV' },
  { brand: 'GMC', name: 'Yukon Denali', tag: 'Full-Size SUV · Denali Premium', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', cat: 'SUVs', hp: '420', price: 'From $66,200', badge: '' },
  { brand: 'Cadillac', name: 'LYRIQ', tag: 'All-Electric Luxury SUV', img: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80', cat: 'Electric', hp: '340', price: 'From $58,590', badge: 'EV' },
  { brand: 'Chevrolet', name: 'Tahoe Z71', tag: 'Full-Size SUV · Off-Road Package', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', cat: 'SUVs', hp: '420', price: 'From $55,100', badge: '' },
  { brand: 'Buick', name: 'Envision ST', tag: 'Sport Compact SUV · Turbocharged', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80', cat: 'SUVs', hp: '228', price: 'From $31,900', badge: 'SPORT' },
  { brand: 'Cadillac', name: 'CT5-V Blackwing', tag: '668 HP · American Muscle Sedan', img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', cat: 'Cars', hp: '668', price: 'From $93,990', badge: 'PERFORMANCE' },
]

const BUILD_STEPS = [
  ['Choose Your Model', 'Select from 50+ vehicles across all GM brands'],
  ['Pick Your Trim', 'From base to fully loaded — every option detailed'],
  ['Customize Features', 'Powertrain, color, packages, technology and more'],
  ['Get Your Price', 'Transparent MSRP with local dealer availability'],
]

export default function VehiclesPage() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? VEHICLES : VEHICLES.filter(v => v.cat === filter)

  return (
    <div className="page-enter">
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80')" }}
      >
        <div className="page-hero-content">
          <p className="page-hero-tag">General Motors · Our Lineup</p>
          <h1 className="page-hero-title">Every<br /><span>Drive.</span><br />Every Dream.</h1>
          <p className="page-hero-sub">
            From trail-blazing trucks and performance sports cars to pioneering electric
            vehicles — find the GM vehicle built for your life.
          </p>
        </div>
      </div>

      {/* FILTER BAR */}
      <div style={{ background: '#0d0d0d', padding: '32px 8vw', display: 'flex', gap: '12px', flexWrap: 'wrap', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        {CATEGORIES.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`btn ${filter === c ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '10px 24px', fontSize: '0.7rem' }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* VEHICLES GRID */}
      <section className="section" style={{ paddingTop: '48px' }}>
        <div className="vehicles-grid">
          {filtered.map(v => (
            <div className="vehicle-card" key={v.name}>
              <img src={v.img} alt={v.name} />
              {v.badge && <div className="vehicle-badge">{v.badge}</div>}
              <div className="vehicle-info">
                <div className="vehicle-brand">{v.brand}</div>
                <div className="vehicle-name">{v.name}</div>
                <div className="vehicle-tag">{v.tag}</div>
                <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gm-accent)', fontWeight: 600 }}>{v.price}</span>
                  <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px' }}>{v.hp} HP</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <div className="stats-section">
        {[['12+', 'Vehicle Brands'], ['50+', 'Models Available'], ['6M+', 'Vehicles Sold in 2024'], ['100+', 'Countries Served']].map(([n, d]) => (
          <div className="stat-item" key={d}>
            <div className="stat-num">{n}</div>
            <div className="stat-desc">{d}</div>
          </div>
        ))}
      </div>

      {/* BUILD YOUR OWN */}
      <section className="section" style={{ background: '#080808' }}>
        <p className="section-label">Build Your Own</p>
        <h2 className="section-title">Configure.<br />Customize. Drive.</h2>
        <div className="two-col" style={{ gap: '60px', alignItems: 'start' }}>
          <div>
            <p className="section-sub">
              Every GM vehicle can be configured exactly to your specifications. Choose your trim,
              color, powertrain, and features through our online configurator or at any of
              4,000+ dealerships nationwide.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
              {BUILD_STEPS.map(([t, d], i) => (
                <div key={t} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ width: '32px', height: '32px', background: 'var(--gm-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700, flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '2px', marginBottom: '4px' }}>{t}</div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary" style={{ marginTop: '36px' }}>Start Building</button>
          </div>
          <div className="img-frame">
            <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80" alt="Configure" />
          </div>
        </div>
      </section>
    </div>
  )
}

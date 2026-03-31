import BrandsStrip from '../components/BrandsStrip'
import { useLang } from '../i18n/LangContext'

const VEHICLE_IMGS = {
  'Corvette Z06': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
  'Silverado 1500': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
  'Escalade': 'https://images.unsplash.com/photo-1619767886558-efdc259b6e09?w=800&q=80',
  'Equinox EV': 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
}

export default function HomePage({ setPage }) {
  const { t } = useLang()
  const h = t.home

  const VEHICLES = [
    { brand: 'VELO Sport', name: 'Corvette Z06', img: VEHICLE_IMGS['Corvette Z06'] },
    { brand: 'VELO Sport', name: 'Silverado 1500', img: VEHICLE_IMGS['Silverado 1500'] },
    { brand: 'VELO Luxe', name: 'Escalade', img: VEHICLE_IMGS['Escalade'] },
    { brand: 'VELO Sport', name: 'Equinox EV', img: VEHICLE_IMGS['Equinox EV'], badge: 'NEW EV' },
  ]

  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="hero">
        <p className="hero-tag">{h.heroTag}</p>
        <h1 className="hero-title">{h.heroTitle1}<br /><span>{h.heroTitle2}</span></h1>
        <p className="hero-sub">{h.heroSub}</p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => setPage('vehicles')}>{h.ctaPrimary}</button>
          <button className="btn btn-outline" onClick={() => setPage('electric')}>{h.ctaSecondary}</button>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          {h.scroll}
        </div>
      </section>

      <BrandsStrip />

      {/* VEHICLES PREVIEW */}
      <section className="section">
        <p className="section-label">{h.lineupLabel}</p>
        <h2 className="section-title">{h.lineupTitle1}<br />{h.lineupTitle2}</h2>
        <div className="vehicles-grid">
          {VEHICLES.map(v => (
            <div className="vehicle-card" key={v.name} onClick={() => setPage('vehicles')}>
              <img src={v.img} alt={v.name} />
              {v.badge && <div className="vehicle-badge">{v.badge}</div>}
              <div className="vehicle-info">
                <div className="vehicle-brand">{v.brand}</div>
                <div className="vehicle-name">{v.name}</div>
                <div className="vehicle-tag">{h.vehicleTags[v.name]}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <div className="stats-section">
        {h.statsItems.map(([n, d]) => (
          <div className="stat-item" key={d}>
            <div className="stat-num">{n}</div>
            <div className="stat-desc">{d}</div>
          </div>
        ))}
      </div>

      {/* EV BANNER */}
      <div className="ev-banner">
        <p className="section-label">{h.evLabel}</p>
        <h2 className="section-title">{h.evTitle1}<br />{h.evTitle2}</h2>
        <p className="ev-sub" style={{ marginBottom: 36 }}>{h.evSub}</p>
        <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }} onClick={() => setPage('electric')}>
          {h.discoverBtn}
        </button>
      </div>

      {/* FEATURES */}
      <section className="section" style={{ background: '#080808' }}>
        <p className="section-label">{h.whyLabel}</p>
        <h2 className="section-title">{h.whyTitle1}<br />{h.whyTitle2}</h2>
        <div className="cards-grid">
          {h.features.map(c => (
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

import BrandsStrip from '../components/BrandsStrip'

const CRUISE_STATS = [
  ['400K+', 'Compatible Road Miles'],
  ['22+', 'Available Vehicles'],
  ['99%', 'Driver Satisfaction Rate'],
  ['2017', 'Year Introduced'],
]

const AV_FEATURES = [
  ['🤖', 'Neural Network AI', "Cruise's proprietary AI processes data from 40 sensors simultaneously, making 13 million predictions per second."],
  ['🗺️', 'HD Mapping', 'Centimeter-accurate 3D maps of every route, updated in real-time by the Cruise fleet.'],
  ['🛡️', 'Redundant Safety Systems', 'Tri-redundant braking, steering, and power systems ensure safe operation under any scenario.'],
  ['🌆', 'Urban Operations', 'Designed specifically for complex urban environments — intersections, pedestrians, cyclists, and the unexpected.'],
]

const SOFTWARE_CARDS = [
  { icon: '📡', num: 'OTA', title: 'Over-the-Air Updates', text: 'GM vehicles receive continuous improvements through wireless software updates — new features, performance enhancements, and security patches delivered automatically.' },
  { icon: '🔗', num: 'SDK', title: 'Vehicle API Platform', text: 'GM is opening its vehicle data platform to third-party developers, enabling an ecosystem of connected apps and services built around GM vehicles.' },
  { icon: '🔒', num: 'AES', title: 'Military-Grade Security', text: '256-bit AES encryption across all vehicle communications, with dedicated automotive-grade cybersecurity teams monitoring threats 24/7.' },
  { icon: '🧠', num: 'AI', title: 'Intelligent Personalization', text: 'ML models learn driver preferences across 400+ vehicle parameters, from seat position to HVAC settings, syncing across multiple family vehicles.' },
  { icon: '🌐', num: 'V2X', title: 'Vehicle-to-Everything', text: 'V2X communication enables GM vehicles to communicate with traffic infrastructure, other vehicles, and pedestrians — reducing accidents by up to 80%.' },
  { icon: '⚙️', num: 'SDV', title: 'Software-Defined Architecture', text: "GM's new electrical architecture centralizes compute in three high-performance domain controllers, enabling software updates for virtually every vehicle function." },
]

const HYDROGEN_ITEMS = [
  ['SURUS Platform', 'Silent Utility Rover Universal Superstructure — a flexible fuel cell-powered truck platform for military and commercial use'],
  ['Locomotive Partnership', 'Joint development with Wabtec for fuel cell-powered locomotives, reducing rail emissions by 100%'],
  ['Aviation Applications', 'Lighter-than-battery power for aerial vehicles, enabling zero-emission commercial aviation by 2030'],
  ['Commercial Fleet', 'HYDROTEC powering delivery fleets, construction equipment, and port vehicles worldwide'],
]

export default function InnovationPage() {
  return (
    <div className="page-enter">
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&q=80')" }}
      >
        <div className="page-hero-content">
          <p className="page-hero-tag">GM Technology · Research & Development</p>
          <h1 className="page-hero-title">Engineering<br /><span>Tomorrow</span><br />Today.</h1>
          <p className="page-hero-sub">
            GM invests over $10 billion annually in R&D — pioneering breakthroughs in autonomous
            driving, software-defined vehicles, hydrogen fuel cells, and beyond.
          </p>
        </div>
      </div>

      <BrandsStrip />

      {/* SUPER CRUISE */}
      <section className="section">
        <p className="section-label">Super Cruise</p>
        <h2 className="section-title">Hands-Free.<br />Eyes Forward.</h2>
        <div className="two-col">
          <div>
            <p className="section-sub">
              Super Cruise is America's first true hands-free driving system for compatible highways.
              Using a precise combination of LiDAR map data, high-precision GPS, cameras, and radar,
              it enables hands-free driving on more than 400,000 miles of compatible roads in the
              U.S. and Canada.
            </p>
            <div className="blockquote">
              "Super Cruise represents a fundamental shift — not just how we drive, but how we
              think about the relationship between human and machine."
              <cite>— GM Chief Technology Officer</cite>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {CRUISE_STATS.map(([n, d]) => (
                <div key={d} style={{ background: '#111', padding: '24px', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: 'var(--gm-accent)' }}>{n}</div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '6px' }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="img-frame">
            <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80" alt="Super Cruise" />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CRUISE AV */}
      <section className="section" style={{ background: '#080808' }}>
        <p className="section-label">Cruise Autonomous</p>
        <h2 className="section-title">The Future of<br />Urban Mobility.</h2>
        <div className="two-col reverse">
          <div>
            <p className="section-sub">
              Cruise, GM's autonomous vehicle subsidiary, is building the world's most advanced
              self-driving technology. Operating a fleet of fully driverless vehicles in multiple
              major cities, Cruise is redefining urban transportation.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '8px' }}>
              {AV_FEATURES.map(([icon, t, d]) => (
                <div key={t} style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ fontSize: '1.5rem', width: '40px', flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '6px' }}>{t}</div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontWeight: 300, lineHeight: 1.7 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary" style={{ marginTop: '32px' }}>Explore Cruise</button>
          </div>
          <div className="img-frame">
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80" alt="Cruise AV" />
          </div>
        </div>
      </section>

      {/* SOFTWARE */}
      <section className="section">
        <p className="section-label">Software & Connectivity</p>
        <h2 className="section-title">Software-Defined<br />Vehicles.</h2>
        <div className="cards-grid">
          {SOFTWARE_CARDS.map(c => (
            <div className="card" key={c.title}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div className="card-icon" style={{ marginBottom: 0 }}>{c.icon}</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: 'rgba(0,174,239,0.3)', letterSpacing: '3px' }}>{c.num}</div>
              </div>
              <div className="card-title">{c.title}</div>
              <div className="card-text">{c.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <div className="stats-section">
        {[['$35B', 'EV & AV Investment 2020-25'], ['9,000+', 'Active Patents Filed'], ['140', 'Research Facilities Worldwide'], ['50+', 'University Partnerships']].map(([n, d]) => (
          <div className="stat-item" key={d}>
            <div className="stat-num">{n}</div>
            <div className="stat-desc">{d}</div>
          </div>
        ))}
      </div>

      {/* HYDROGEN */}
      <section className="section" style={{ background: '#080808' }}>
        <p className="section-label">Hydrogen Fuel Cell</p>
        <h2 className="section-title">Beyond Batteries:<br />The Hydrogen Future.</h2>
        <div className="two-col">
          <div>
            <p className="section-sub">
              GM's HYDROTEC fuel cell technology is already powering heavy-duty trucks, locomotives,
              aircraft, and military applications. Zero emissions, refuels in minutes, and 100%
              compatible with existing infrastructure pathways.
            </p>
            {HYDROGEN_ITEMS.map(([t, d]) => (
              <div key={t} style={{ padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '2px', marginBottom: '6px', color: 'var(--gm-accent)' }}>{t}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontWeight: 300, lineHeight: 1.7 }}>{d}</div>
              </div>
            ))}
          </div>
          <div className="img-frame">
            <img src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800&q=80" alt="Hydrogen" />
          </div>
        </div>
      </section>
    </div>
  )
}

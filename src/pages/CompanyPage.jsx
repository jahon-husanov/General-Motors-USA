const TIMELINE = [
  { year: '1908', title: 'Founded in Flint, Michigan', text: "William C. Durant establishes General Motors, beginning with Buick Motor Company and rapidly acquiring Cadillac, Oakland (Pontiac), and Oldsmobile." },
  { year: '1926', title: 'First Car Radio Installed', text: "GM pioneers in-vehicle entertainment with the first factory-installed radio, setting a precedent for automotive technology integration." },
  { year: '1953', title: 'Corvette Debuts', text: "The Chevrolet Corvette is introduced at the GM Motorama show — America's sports car is born, and hasn't stopped since." },
  { year: '1996', title: 'EV1 — First Modern Electric Car', text: "GM launches the EV1, the first modern mass-produced electric vehicle from a major automaker. Ahead of its time by decades." },
  { year: '2016', title: 'Super Cruise Launched', text: "GM debuts Super Cruise on the Cadillac CT6 — the industry's first true hands-free highway driving system." },
  { year: '2021', title: 'Ultium Platform Unveiled', text: "GM reveals its Ultium EV architecture and commits $35 billion to electric and autonomous vehicle development through 2025." },
  { year: '2026', title: '30+ EVs in Market', text: "GM delivers on its promise with over 30 electric vehicle models across all brands, leading the American EV market." },
]

const LEADERS = [
  { name: 'Mary Barra', role: 'Chair & CEO', bio: "Since 2014, Mary Barra has led GM's historic transformation toward electric and autonomous vehicles. First female CEO of a major global automaker.", img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { name: 'Paul Jacobson', role: 'Executive VP & CFO', bio: "Driving GM's financial strategy through the most significant transformation in the company's 117-year history, with disciplined EV investment pacing.", img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
  { name: 'Doug Parks', role: 'President, Global Product', bio: "Overseeing GM's global vehicle portfolio and the rapid expansion of the Ultium-based EV lineup across all brands and segments.", img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
]

const MISSION_ITEMS = [
  ['🇺🇸', 'American Heritage', 'Founded 1908 in Flint, Michigan. Headquartered in Detroit — the Motor City.'],
  ['🌍', 'Global Operations', 'Manufacturing in 30+ countries. Sales in 100+ markets. Truly global.'],
  ['🏭', 'U.S. Manufacturing', 'Over $50 billion invested in U.S. facilities over the past decade.'],
  ['♻️', 'Sustainability', "GM has eliminated all plastic waste from its 13 largest U.S. manufacturing sites."],
]

const DEI_CARDS = [
  { icon: '👩‍💼', title: '50% Women in Leadership', text: "GM has achieved gender parity at the Board and senior leadership levels — a milestone that reflects our commitment to diverse representation in every decision." },
  { icon: '🌈', title: 'Global ERG Network', text: "Over 60,000 employees participate in 11 Employee Resource Groups spanning gender, ethnicity, veterans, LGBTQ+, disability, and more." },
  { icon: '🎓', title: 'STEM Education', text: "GM's STEM initiative has reached over 1 million students since 2016, with a focus on underrepresented communities in science, technology, engineering, and math." },
  { icon: '🤲', title: 'Supplier Diversity', text: "$3.5 billion directed annually to diverse suppliers, supporting over 1,200 minority, women, veteran, and LGBTQ+-owned businesses." },
]

export default function CompanyPage() {
  return (
    <div className="page-enter">
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80')" }}
      >
        <div className="page-hero-content">
          <p className="page-hero-tag">General Motors · Our Story</p>
          <h1 className="page-hero-title">117 Years<br />of <span>American</span><br />Excellence.</h1>
          <p className="page-hero-sub">
            From a single Buick factory in Flint to a global mobility company with 135,000 employees
            — GM's story is America's story.
          </p>
        </div>
      </div>

      {/* MISSION */}
      <section className="section">
        <p className="section-label">Our Mission</p>
        <h2 className="section-title">A World with<br />Zero Crashes.<br />Zero Emissions.<br />Zero Congestion.</h2>
        <div className="two-col">
          <div>
            <p className="section-sub">
              This isn't a slogan. It's our engineering mandate. Every decision at GM — from battery
              chemistry to software architecture to manufacturing processes — is evaluated against
              this vision of a better automotive future.
            </p>
            <div className="blockquote">
              "We are not just building cars. We are building the infrastructure of a sustainable,
              connected, autonomous future for everyone."
              <cite>— Mary Barra, Chair & CEO</cite>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['Zero Crashes', 'Zero Emissions', 'Zero Congestion', '100% Renewable Energy by 2035', 'Carbon Neutral by 2040'].map(t => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {MISSION_ITEMS.map(([icon, t, d]) => (
              <div key={t} style={{ background: '#111', padding: '24px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '20px' }}>
                <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '2px', marginBottom: '4px' }}>{t}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-section">
        {[['1908', 'Year Founded'], ['135K+', 'Global Employees'], ['$171B', 'Annual Revenue 2024'], ['50+', 'Manufacturing Plants']].map(([n, d]) => (
          <div className="stat-item" key={d}>
            <div className="stat-num">{n}</div>
            <div className="stat-desc">{d}</div>
          </div>
        ))}
      </div>

      {/* HISTORY */}
      <section className="section" style={{ background: '#080808' }}>
        <p className="section-label">Our History</p>
        <h2 className="section-title">Defining Moments<br />in American<br />Automotive History.</h2>
        <div className="two-col" style={{ alignItems: 'start' }}>
          <div className="timeline">
            {TIMELINE.map(t => (
              <div className="timeline-item" key={t.year}>
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-title">{t.title}</div>
                <div className="timeline-text">{t.text}</div>
              </div>
            ))}
          </div>
          <div style={{ position: 'sticky', top: '100px' }}>
            <div className="img-frame" style={{ marginBottom: '2px' }}>
              <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80" alt="GM History" />
            </div>
            <div style={{ background: '#111', padding: '32px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', letterSpacing: '2px', marginBottom: '12px' }}>The GM Legacy</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontWeight: 300, lineHeight: 1.8 }}>
                From wartime aircraft engines to the first electric car — GM has never stopped pushing
                the boundaries of what's possible. Our 117-year journey is one of constant reinvention
                in service of American mobility.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section">
        <p className="section-label">Executive Leadership</p>
        <h2 className="section-title">The Team<br />Driving Change.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', marginBottom: '48px' }}>
          {LEADERS.map(l => (
            <div className="person-card" key={l.name}>
              <img className="person-img" src={l.img} alt={l.name} />
              <div className="person-info">
                <div className="person-name">{l.name}</div>
                <div className="person-role">{l.role}</div>
                <div className="person-bio">{l.bio}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEI */}
      <section className="section" style={{ background: '#080808' }}>
        <p className="section-label">Diversity & Inclusion</p>
        <h2 className="section-title">Everyone Belongs<br />at GM.</h2>
        <div className="cards-grid">
          {DEI_CARDS.map(c => (
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

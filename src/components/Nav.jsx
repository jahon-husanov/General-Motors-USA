export default function Nav({ page, setPage }) {
  const links = ['Vehicles', 'Electric', 'Innovation', 'Company', 'Investors']
  return (
    <nav>
      <div className="nav-logo" onClick={() => setPage('home')}>GM</div>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l}>
            <a
              className={page === l.toLowerCase() ? 'active' : ''}
              onClick={() => setPage(l.toLowerCase())}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

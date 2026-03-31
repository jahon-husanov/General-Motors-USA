import { useLang } from '../i18n/LangContext'
import { LANGUAGES } from '../i18n/translations'
import { useFav } from '../context/FavoritesContext'
import { useCompare } from '../context/CompareContext'

export default function Nav({ page, setPage, onSearch }) {
  const { lang, setLang, t } = useLang()
  const { favs } = useFav()
  const { list } = useCompare()
  const navKeys = ['vehicles', 'electric', 'innovation', 'company', 'investors']

  return (
    <nav>
      <div className="nav-logo" onClick={() => setPage('home')}>
        <span className="nav-logo-vm">VM</span>
        <span className="nav-logo-dot">·</span>
      </div>
      <ul className="nav-links">
        {navKeys.map(key => (
          <li key={key}>
            <a className={page === key ? 'active' : ''} onClick={() => setPage(key)}>
              {t.nav[key]}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <div className="lang-switcher">
          {LANGUAGES.map(l => (
            <button
              key={l.code}
              className={`lang-btn ${lang === l.code ? 'lang-active' : ''}`}
              onClick={() => setLang(l.code)}
            >
              <span className="lang-flag">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
        <button className="nav-icon-btn" onClick={onSearch} title="Search">🔍</button>
        <button className="nav-icon-btn nav-badge-wrap" onClick={() => setPage('wishlist')} title="Wishlist">
          ❤️{favs.length > 0 && <span className="nav-badge">{favs.length}</span>}
        </button>
        <button className="nav-icon-btn nav-badge-wrap" onClick={() => setPage('compare')} title="Compare">
          ⚖️{list.length > 0 && <span className="nav-badge">{list.length}</span>}
        </button>
        <button className="btn btn-outline calc-nav-btn" onClick={() => setPage('calculator')}>
          🧮 {lang === 'ru' ? 'РАСЧЁТ' : lang === 'uz' ? 'HISOB' : 'CALC'}
        </button>
      </div>
    </nav>
  )
}

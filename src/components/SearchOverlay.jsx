import { useState, useEffect, useRef } from 'react'
import { useLang } from '../i18n/LangContext'
import { VEHICLES_DB } from '../data/vehicles'

export default function SearchOverlay({ onClose, setPage }) {
  const { lang } = useLang()
  const [query, setQuery] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current?.focus()
    const handler = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const results = query.trim().length < 2 ? [] : VEHICLES_DB.filter(v =>
    v.name.toLowerCase().includes(query.toLowerCase()) ||
    v.brand.toLowerCase().includes(query.toLowerCase()) ||
    v.cat.toLowerCase().includes(query.toLowerCase()) ||
    v.tag.toLowerCase().includes(query.toLowerCase())
  )

  const placeholder = { en: 'Search vehicles, brands...', ru: 'Поиск автомобилей, брендов...', uz: 'Avtomobil, brend qidirish...' }

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrap">
          <span className="search-icon">🔍</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={placeholder[lang]}
            className="search-input"
          />
          <button className="search-close-btn" onClick={onClose}>✕</button>
        </div>

        {query.length >= 2 && (
          <div className="search-results">
            {results.length === 0 ? (
              <div className="search-no-results">
                {lang === 'ru' ? 'Ничего не найдено' : lang === 'uz' ? 'Hech narsa topilmadi' : 'No results found'}
              </div>
            ) : results.map(v => (
              <div
                key={v.id}
                className="search-result-item"
                onClick={() => { setPage('vehicle-' + v.id); onClose() }}
              >
                <img src={v.img} alt={v.name} className="search-result-img" />
                <div className="search-result-info">
                  <div className="search-result-brand">{v.brand}</div>
                  <div className="search-result-name">{v.name}</div>
                  <div className="search-result-tag">{v.tag}</div>
                </div>
                <div className="search-result-price">${v.price.toLocaleString()}</div>
                {v.isEV && <div className="vehicle-badge search-result-badge">EV</div>}
              </div>
            ))}
          </div>
        )}

        {query.length < 2 && (
          <div className="search-hints">
            <div className="search-hint-label">{lang === 'ru' ? 'ПОПУЛЯРНЫЕ' : lang === 'uz' ? 'MASHHUR' : 'POPULAR'}</div>
            <div className="search-hint-chips">
              {['Corvette', 'Electric', 'Cadillac', 'Truck', 'Luxury', 'GMC'].map(hint => (
                <button key={hint} className="search-hint-chip" onClick={() => setQuery(hint)}>
                  {hint}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

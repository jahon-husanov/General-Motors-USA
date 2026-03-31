import { useState, useEffect } from 'react'
import { LangProvider } from './i18n/LangContext'
import { FavProvider } from './context/FavoritesContext'
import { CompareProvider } from './context/CompareContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SearchOverlay from './components/SearchOverlay'
import HomePage from './pages/HomePage'
import VehiclesPage from './pages/VehiclesPage'
import VehicleDetailPage from './pages/VehicleDetailPage'
import ElectricPage from './pages/ElectricPage'
import InnovationPage from './pages/InnovationPage'
import CompanyPage from './pages/CompanyPage'
import InvestorsPage from './pages/InvestorsPage'
import CalculatorPage from './pages/CalculatorPage'
import ComparePage from './pages/ComparePage'
import WishlistPage from './pages/WishlistPage'
import { getVehicleById } from './data/vehicles'

export default function App() {
  const [page, setPage] = useState('home')
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  // Keyboard shortcut: Ctrl+K or Cmd+K for search
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const renderPage = () => {
    // Vehicle detail pages: page = 'vehicle-{id}'
    if (page.startsWith('vehicle-')) {
      const id = page.replace('vehicle-', '')
      const vehicle = getVehicleById(id)
      return <VehicleDetailPage vehicle={vehicle} setPage={setPage} />
    }

    switch (page) {
      case 'home':       return <HomePage setPage={setPage} />
      case 'vehicles':   return <VehiclesPage setPage={setPage} />
      case 'electric':   return <ElectricPage />
      case 'innovation': return <InnovationPage />
      case 'company':    return <CompanyPage />
      case 'investors':  return <InvestorsPage />
      case 'calculator': return <CalculatorPage />
      case 'compare':    return <ComparePage setPage={setPage} />
      case 'wishlist':   return <WishlistPage setPage={setPage} />
      default:           return <HomePage setPage={setPage} />
    }
  }

  return (
    <LangProvider>
      <FavProvider>
        <CompareProvider>
          <Nav page={page} setPage={setPage} onSearch={() => setSearchOpen(true)} />
          {renderPage()}
          <Footer setPage={setPage} />
          {searchOpen && (
            <SearchOverlay onClose={() => setSearchOpen(false)} setPage={(p) => { setPage(p); setSearchOpen(false) }} />
          )}
        </CompareProvider>
      </FavProvider>
    </LangProvider>
  )
}

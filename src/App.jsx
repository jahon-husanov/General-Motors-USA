import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import VehiclesPage from './pages/VehiclesPage'
import ElectricPage from './pages/ElectricPage'
import InnovationPage from './pages/InnovationPage'
import CompanyPage from './pages/CompanyPage'
import InvestorsPage from './pages/InvestorsPage'

export default function App() {
  const [page, setPage] = useState('home')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  const renderPage = () => {
    switch (page) {
      case 'home':       return <HomePage setPage={setPage} />
      case 'vehicles':   return <VehiclesPage />
      case 'electric':   return <ElectricPage />
      case 'innovation': return <InnovationPage />
      case 'company':    return <CompanyPage />
      case 'investors':  return <InvestorsPage />
      default:           return <HomePage setPage={setPage} />
    }
  }

  return (
    <>
      <Nav page={page} setPage={setPage} />
      {renderPage()}
      <Footer setPage={setPage} />
    </>
  )
}

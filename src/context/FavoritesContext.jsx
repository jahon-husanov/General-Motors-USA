import { createContext, useContext, useState } from 'react'

const FavCtx = createContext()

export function FavProvider({ children }) {
  const [favs, setFavs] = useState([])
  const toggle = (id) => setFavs(f => f.includes(id) ? f.filter(x => x !== id) : [...f, id])
  const isFav = (id) => favs.includes(id)
  return <FavCtx.Provider value={{ favs, toggle, isFav }}>{children}</FavCtx.Provider>
}

export const useFav = () => useContext(FavCtx)

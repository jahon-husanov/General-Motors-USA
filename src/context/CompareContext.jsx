import { createContext, useContext, useState } from 'react'

const CmpCtx = createContext()

export function CompareProvider({ children }) {
  const [list, setList] = useState([])
  const toggle = (id) => {
    setList(l => l.includes(id) ? l.filter(x => x !== id) : l.length < 3 ? [...l, id] : l)
  }
  const isIn = (id) => list.includes(id)
  const clear = () => setList([])
  return <CmpCtx.Provider value={{ list, toggle, isIn, clear }}>{children}</CmpCtx.Provider>
}

export const useCompare = () => useContext(CmpCtx)

import { createContext, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)

  const GlobalState = { isLogin, setIsLogin }
  return <GlobalContext.Provider value={GlobalState}>{children}</GlobalContext.Provider>
}

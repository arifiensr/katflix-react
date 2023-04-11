import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('userLogin')) {
      setIsLogin(true)
    }
  }, [])

  const GlobalState = { isLogin, setIsLogin }
  return <GlobalContext.Provider value={GlobalState}>{children}</GlobalContext.Provider>
}

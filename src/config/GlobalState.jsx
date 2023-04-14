import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [account, setAccount] = useState({})
  const [session, setSession] = useState('')

  useEffect(() => {
    if (localStorage.getItem('userLogin')) {
      setIsLogin(true)
      setAccount(JSON.parse(localStorage.getItem('account')))
      setSession(JSON.parse(localStorage.getItem('session')))
    }
  }, [isLogin])

  const GlobalState = { isLogin, setIsLogin, account, setAccount, session, setSession }
  return <GlobalContext.Provider value={GlobalState}>{children}</GlobalContext.Provider>
}

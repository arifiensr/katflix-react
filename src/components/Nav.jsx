import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import SignInModal from './SignInModal'
import { GlobalContext } from '../config/GlobalState'

function Nav() {
  const [authenticated, setAuthenticated] = useState()
  const { isLogin, setIsLogin } = useContext(GlobalContext)

  const logOutHandler = () => {
    localStorage.clear()
    setIsLogin(false)
    setAuthenticated('')
  }

  useEffect(() => {
    // * Membuat toggle untuk dropdown menu

    const toggleBtn = document.getElementById('toggle-btn')
    const toggleBtnIcon = toggleBtn.getElementsByClassName('bx')
    const dropDownMenu = document.getElementById('dropdown_menu')

    toggleBtn.onclick = () => {
      dropDownMenu.classList.toggle('open')
      const isOpen = dropDownMenu.classList.contains('open')

      toggleBtnIcon[0].classList = isOpen ? 'bx bx-x' : 'bx bx-menu'
    }

    const authenticate = localStorage.getItem('session_id')
    if (authenticate) setAuthenticated(authenticate)
    // console.log(`Session ID: ${authenticate}`)
  }, [])

  return (
    <>
      <header>
        <nav className="header-nav">
          <div className="logo">
            <NavLink to="/">
              <span className="logo-kat">KAT</span>FLIX <i className="bx bxs-cat bx-fade-left cat-logo"></i>
            </NavLink>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tvseries/">TV Series</NavLink>
            </li>
            <li>
              <NavLink to="/movies/">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/genre/">Genre</NavLink>
            </li>
            <li>
              <NavLink to="/contact/">Contact Us</NavLink>
            </li>
          </ul>
          {!isLogin ? (
            <button id="signInButton" type="button" className="nav-btn" data-bs-toggle="modal" data-bs-target="#signInModal">
              Sign In
            </button>
          ) : (
            <button id="logOutButton" type="button" className="nav-btn" onClick={() => logOutHandler()}>
              Logout
            </button>
          )}

          <div id="toggle-btn" className="toggle-btn">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
        <div id="dropdown_menu" className="dropdown_menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tvseries/">TV Series</NavLink>
          </li>
          <li>
            <NavLink to="/movies/">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/genre/">Genre</NavLink>
          </li>
          <li>
            <NavLink to="/contact/">Contact Us</NavLink>
          </li>
          <li>
            <div className="signin" data-bs-toggle="modal" data-bs-target="#signInModal">
              Sign In
            </div>
          </li>
        </div>
      </header>

      <SignInModal />
    </>
  )
}

export default Nav

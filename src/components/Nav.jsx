import { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import SignInModal from './SignInModal'
import { GlobalContext } from '../config/GlobalState'
import tmdbApi from '../api/tmdbApi'

function Nav() {
  const { isLogin, setIsLogin, account, setAccount, session, setSession } = useContext(GlobalContext)
  const baseImgUrl = import.meta.env.VITE_TMDB_BASEIMGURL
  const navigate = useNavigate()

  const logOutHandler = async () => {
    await tmdbApi.delete('authentication/session', { data: { session_id: session } })
    localStorage.clear()
    setIsLogin(false)
    setAccount({})
    setSession('')
    alert('Logout success!')
    navigate('/')
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
  }, [])

  useEffect(() => {
    // * Membuat toggle untuk user dropdown menu

    if (isLogin) {
      const userButton = document.querySelector('#user-button')
      const userArrow = document.querySelector('#user-button i')
      const userDropdown = document.querySelector('#user-dropdown')

      userButton.onclick = () => {
        userDropdown.classList.toggle('open')
        const isOpen = userDropdown.classList.contains('open')
        userArrow.style.rotate = isOpen ? '180deg' : '0deg'
      }
    }
  }, [isLogin])

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
            {/* <li>
              <NavLink to="/genre/">Genre</NavLink>
            </li> */}
            <li>
              <NavLink to="/contact/">Contact Us</NavLink>
            </li>
          </ul>
          {!isLogin ? (
            <button id="signInButton" type="button" className="nav-btn" data-bs-toggle="modal" data-bs-target="#signInModal">
              Sign In
            </button>
          ) : (
            <div id="user-button">
              <img src={`${baseImgUrl}w45${account.avatar.tmdb.avatar_path}`} alt={account.name} title={account.name} style={{ borderRadius: '50%', width: 35, height: 'auto' }} />
              <i className="bx bxs-down-arrow"></i>
              <div id="user-dropdown">
                <li>Name: {account.name}</li>
                <li>ID: {account.id}</li>
                <li>Username: {account.username}</li>
                <li>
                  <button id="logOutButton" type="button" className="nav-btn" onClick={() => logOutHandler()}>
                    Logout
                  </button>
                </li>
              </div>
            </div>
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
          {/* <li>
            <NavLink to="/genre/">Genre</NavLink>
          </li> */}
          <li>
            <NavLink to="/contact/">Contact Us</NavLink>
          </li>
          {/* <li>
            {!isLogin ? (
              <div className="signin" data-bs-toggle="modal" data-bs-target="#signInModal">
                Sign In
              </div>
            ) : (
              <div className="logout" onClick={() => logOutHandler()}>
                Logout
              </div>
            )}
          </li> */}
          {!isLogin ? (
            <li className="signin" data-bs-toggle="modal" data-bs-target="#signInModal">
              Sign In
            </li>
          ) : (
            <li className="logout" onClick={() => logOutHandler()}>
              Logout
            </li>
          )}
        </div>
      </header>

      <SignInModal />
    </>
  )
}

export default Nav

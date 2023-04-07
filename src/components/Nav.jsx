import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SignInModal from './SignInModal'

function Nav() {
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
          {/* <button type="button" className="nav-btn">
            Watch Now!
          </button> */}
          <div className="signin" data-bs-toggle="modal" data-bs-target="#signInModal">
            Sign In
          </div>
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
            {/* <button type="button" className="nav-btn">
              Watch Now!
            </button> */}
          </li>
        </div>
      </header>
      
      <SignInModal />
    </>
  )
}

export default Nav

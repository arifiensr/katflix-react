function Nav() {
  return (
      <header>
        <nav className="header-nav">
          <div className="logo"><span className="logo-kat">KT</span>FLIX <box-icon type='solid' name='cat' className="bx bxs-cat me-1"></box-icon><i className="bx bxs-cat me-1"></i></div>
            <ul className="nav-links">
              <li><a href="index.html" className="active">Home</a></li>
              <li><a href="#">TV Series</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">Genre</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          <button type="button" className="nav-btn">Watch Now!</button>
          <div id="toggle-btn" className="toggle-btn">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
        <div id="dropdown_menu" className="dropdown_menu">
          <li><a href="index.html" className="active">Home</a></li>
          <li><a href="#">TV Series</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Genre</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><button type="button" className="nav-btn">Watch Now!</button></li>
        </div>
      </header>
  )
}

export default Nav
import React from 'react'
import './Footer.css'

function FooterTest() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">TV Shows</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="footer-socials">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  )
}

export default FooterTest

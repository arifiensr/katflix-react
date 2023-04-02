function Footer() {
  // * Menambahkan icon di footer saat klik nama

  let click = 0
  function footerIcon() {
    click++
    const iconLi = `<a href="https://www.linkedin.com/in/arifiensr/" target='_blank'><i class='bx bxl-linkedin-square footericon'></i></a>`
    const iconIg = `<a href="https://www.instagram.com/arifiensr/" target='_blank'><i class='bx bxl-instagram-alt footericon'></i></a>`
    const iconTw = `<a href="https://twitter.com/arifiensr" target='_blank'><i class='bx bxl-twitter footericon'></i></a>`
    const footer = document.querySelector('.footer')
    const newIcon = document.createElement('div')
    newIcon.className = 'footer-icons'

    switch (click) {
      case 1:
        footer.appendChild(newIcon)
        newIcon.insertAdjacentHTML('beforeend', iconLi)
        break
      case 2:
        footer.appendChild(newIcon)
        newIcon.insertAdjacentHTML('beforeend', iconIg)
        break
      case 3:
        footer.appendChild(newIcon)
        newIcon.insertAdjacentHTML('beforeend', iconTw)
        break
      default:
        document.querySelector('.footer-icons').remove()
        document.querySelector('.footer-icons').remove()
        document.querySelector('.footer-icons').remove()
        click = 0
    }
  }

  return (
    <>
      <footer>
        <div className="container-fluid footer">
          <h6>© 2023 - dibimbing Bootcamp Mini Project by</h6>
          <p className="footerlink" onClick={() => footerIcon()}>
            M. Arifien Syachrizal
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer

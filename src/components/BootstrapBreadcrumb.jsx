function BootstrapBreadcrumb() {
  return (
    <>
      <nav className="bs-breadcrumb" style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Contact Us
          </li>
        </ol>
      </nav>
    </>
  )
}

export default BootstrapBreadcrumb
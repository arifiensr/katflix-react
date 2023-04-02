function BootstrapAlert() {
  return (
    <>
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <p>
        <strong>HOLIDAY DISCOUNT!</strong> You can get up to <strong>30% discount</strong> for an annual subscription. Check the promo <a href="#"><strong>here!</strong></a>
      </p>
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    </>
  )
}

export default BootstrapAlert
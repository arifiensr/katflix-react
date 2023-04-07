function SignInModal() {
  const baseImgUrl = import.meta.env.VITE_TMDB_BASEIMGURL

  return (
    <>
      <div className="modal fade z-14" id="signInModal" tabIndex="-1" aria-labelledby="signInModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-body d-flex align-items-start">
                  <div className="modal-close-button" data-bs-dismiss="modal" aria-label="Close">
                    <i className="bx bx-x"></i>
                  </div>
                  <div className="modal-desc">Sign In</div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default SignInModal

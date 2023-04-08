import { useFormik } from 'formik'
import * as Yup from 'yup'
import tmdbApi from '../api/tmdbApi'
import { useState, useEffect } from 'react'
import { Link, redirect } from 'react-router-dom'

function SignInModal() {
  const [success, setSuccess] = useState(false)
  const [account, setAccount] = useState([])
  const [authenticated, setAuthenticated] = useState()

  const baseImgUrl = import.meta.env.VITE_TMDB_BASEIMGURL
  const apiKey = import.meta.env.VITE_TMDB_APIKEY

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      password: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const token = await tmdbApi.get('authentication/token/new')
        await tmdbApi.post('authentication/token/validate_with_login', { username: values.username, password: values.password, request_token: token.data.request_token })
        const sessionId = await tmdbApi.post('authentication/session/new', { request_token: token.data.request_token })
        const accountData = await tmdbApi.get('account', { params: { session_id: sessionId.data.session_id } })
        setAccount(accountData.data)
        setAuthenticated(sessionId.data.session_id)
        setSuccess(true)
      } catch {
        alert('Login error!')
      }
    },
  })

  useEffect(() => {}, [])

  return (
    <>
      <div className="modal fade z-14" id="signInModal" tabIndex="-1" aria-labelledby="signInModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body d-flex align-items-start">
              <div className="modal-close-button" data-bs-dismiss="modal" aria-label="Close">
                <i className="bx bx-x"></i>
              </div>
              <div className="modal-desc">
                {success ? (
                  <>
                    <h1>Welcome!</h1>
                    <div>
                      <img src={`${baseImgUrl}w45${account.avatar.tmdb.avatar_path}`} alt={account.name} title={account.name} style={{ borderRadius: '50%' }} />
                      <h3>Name: {account.name}</h3>
                      <h3>Username: {account.username}</h3>
                      <h3>ID: {account.id}</h3>
                    </div>
                    <br />
                    <p>
                      <div onClick={() => window.location.reload()}>Go to Home</div>
                      {/* <a href="/katflix-react/">Go to Home</a> */}
                      {/* <Link to="/katflix-react/">Go to Home</Link> */}
                    </p>
                  </>
                ) : (
                  <>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                        <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" onChange={formik.handleChange} value={formik.values.username} />
                        {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> : null}
                        <div id="usernameHelp" className="form-text">
                          We'll never share your username with anyone else.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input type="password" className="form-control" id="password" onChange={formik.handleChange} value={formik.values.password} />
                        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                      </div>
                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="checkbox" />
                        <label className="form-check-label" htmlFor="checkbox">
                          Check me out
                        </label>
                      </div>
                      <button type="submit" className="nav-btn">
                        Sign In
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignInModal

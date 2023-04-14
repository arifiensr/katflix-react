import { useFormik } from 'formik'
import * as Yup from 'yup'
import tmdbApi from '../api/tmdbApi'
import { useEffect, useContext } from 'react'
import { GlobalContext } from '../config/GlobalState'

function SignInModal() {
  const { isLogin, setIsLogin, account, setAccount, session, setSession } = useContext(GlobalContext)
  const baseImgUrl = import.meta.env.VITE_TMDB_BASEIMGURL

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
        setIsLogin(true)
        setAccount(accountData.data)
        setSession(sessionId.data.session_id)
        localStorage.setItem('userLogin', true)
        localStorage.setItem('session', JSON.stringify(sessionId.data.session_id))
        localStorage.setItem('account', JSON.stringify(accountData.data))
      } catch {
        alert('Login error!')
      }
    },
  })

  useEffect(() => {}, [])

  return (
    <>
      <div className="modal fade z-14 modal-sm" id="signInModal" tabIndex="-1" aria-labelledby="signInModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body d-flex align-items-start">
              <div className="modal-close-button" data-bs-dismiss="modal" aria-label="Close">
                <i className="bx bx-x"></i>
              </div>
              <div className="modal-desc">
                {!isLogin ? (
                  <>
                    <form onSubmit={formik.handleSubmit} className="d-flex flex-column mt-4">
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
                      <button type="submit" className="signInModalBtn">
                        Sign In
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    <h1>Welcome!</h1>
                    <div>
                      <img src={`${baseImgUrl}w45${account.avatar.tmdb.avatar_path}`} alt={account.name} title={account.name} style={{ borderRadius: '50%' }} />
                      <h3>Name: {account.name}</h3>
                      <h3>Username: {account.username}</h3>
                      <h3>ID: {account.id}</h3>
                    </div>
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

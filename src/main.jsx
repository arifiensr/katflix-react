import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import TvSeries from './pages/TvSeries'
import Movies from './pages/Movies'
import Genre from './pages/Genre'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons/css/boxicons.min.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
      </>
    ),
    errorElement: (
      <>
        <Nav />
        <h1 className="mt-5">Page Not Found 404</h1>
      </>
    ),
    children: [
      {
        path: '/',
        element: (
          <>
            <h1>Ini Adalah Children Element Menggunakan Outlet</h1>
          </>
        ),
      },
    ],
  },

  {
    path: '/contact/',
    element: (
      <>
        <Contact />
      </>
    ),
  },

  {
    path: '/tvseries/',
    element: (
      <>
        <TvSeries />
      </>
    ),
  },

  {
    path: '/movies/',
    element: (
      <>
        <Movies />
      </>
    ),
  },

  {
    path: '/genre/',
    element: (
      <>
        <Genre />
      </>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

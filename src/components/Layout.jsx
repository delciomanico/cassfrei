import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AOS from 'aos'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.refresh()
  }, [pathname])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout

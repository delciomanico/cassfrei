import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Logo from './Logo.jsx'

const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/o-que-fazemos', label: 'O Que Fazemos' },
  { to: '/formacoes', label: 'Formações' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/projectos', label: 'Projectos' },
  { to: '/blog', label: 'Blog' },
  { to: '/contactos', label: 'Contactos' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  // No topo da Home a nav fica transparente, sobreposta ao hero vidrado (ver ".hero-glass"
  // em Home.jsx); assim que a página desloca ainda que pouco, volta ao fundo branco normal
  // — igual em todas as páginas.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // A nav é "fixed" em todas as páginas (ver CSS), por isso o resto do conteúdo precisa de
  // compensar a altura dela no topo (".page-content" em Layout.jsx) — excepto na Home, onde
  // o hero fica deliberadamente por baixo. Mede-se a altura real em vez de a fixar por CSS
  // porque varia por breakpoint e muda sempre que o menu é alterado.
  useEffect(() => {
    const el = navRef.current
    if (!el) return
    const setNavHeightVar = () => {
      if (isOpen) return
      document.documentElement.style.setProperty('--nav-height', `${el.offsetHeight}px`)
    }
    setNavHeightVar()
    window.addEventListener('resize', setNavHeightVar)
    return () => window.removeEventListener('resize', setNavHeightVar)
  }, [isOpen])

  // Com o menu mobile aberto a nav passa sempre a sólida — a lista de links não tem fundo
  // próprio e, transparente, ficava ilegível por cima da foto do hero por trás.
  const isTransparent = isHome && !scrolled && !isOpen

  return (
    <nav
      ref={navRef}
      className={`navbar navbar-expand-lg navbar-light ftco-navbar-light${isTransparent ? ' is-transparent' : ''}`}
      id="ftco-navbar"
    >
      <div className="container d-flex align-items-center">
        <Logo variant="navbar" />

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="ftco-nav"
          aria-expanded={isOpen}
          aria-label="Alternar navegação"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="oi oi-menu"></span>
        </button>

        <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="ftco-nav">
          <ul className="navbar-nav mx-lg-auto">
            {links.map((link) => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/contactos"
            className="navbar-cta-mobile btn btn-primary btn-sm px-3"
            onClick={() => setIsOpen(false)}
          >
            Fale Connosco
          </Link>
        </div>
      </div>

      <Link to="/contactos" className="navbar-cta">
        <span>Fale Connosco</span>
        <span className="ml-2 d-inline-flex"><ArrowRight size={16} /></span>
      </Link>
    </nav>
  )
}

export default Navbar

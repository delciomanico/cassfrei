import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
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

  return (
    <nav className="navbar navbar-expand-lg navbar-light ftco-navbar-light" id="ftco-navbar">
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

import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Logo({ variant = 'navbar' }) {
  return (
    <Link to="/" className={`brand-logo brand-logo--${variant} d-flex align-items-center`}>
      <img src={logo} alt="Cassfrei-SIGT, Lda" className="brand-logo__img" />
    </Link>
  )
}

export default Logo

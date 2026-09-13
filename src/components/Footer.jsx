import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import Logo from './Logo.jsx'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg-4">
            <div className="ftco-footer-widget mb-5">
              <Logo variant="footer" />
              <div className="block-23 mb-3 mt-4">
                <ul>
                  <li><span className="icon"><MapPin size={18} /></span><span className="text">Rua Manuel F. Caldeira, n.º 23, 9º Distrito Urbano da Ingombota, Luanda, Angola</span></li>
                  <li><a href="tel:+244923662140"><span className="icon"><Phone size={18} /></span><span className="text">+244 923 662 140 | +244 923 764 161</span></a></li>
                  <li><a href="mailto:geral@cassfrei.com"><span className="icon"><Mail size={18} /></span><span className="text">geral@cassfrei.com</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Áreas de Actuação</h2>
              <ul className="list-unstyled">
                <li><Link to="/o-que-fazemos"><span className="ion-ios-arrow-round-forward mr-2"></span>Cadastro Predial e Urbano</Link></li>
                <li><Link to="/o-que-fazemos"><span className="ion-ios-arrow-round-forward mr-2"></span>Cartografia e SIG</Link></li>
                <li><Link to="/o-que-fazemos"><span className="ion-ios-arrow-round-forward mr-2"></span>Planeamento Urbano</Link></li>
                <li><Link to="/o-que-fazemos"><span className="ion-ios-arrow-round-forward mr-2"></span>Análise de Geo-riscos</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li><Link to="/"><span className="ion-ios-arrow-round-forward mr-2"></span>Início</Link></li>
                <li><Link to="/sobre"><span className="ion-ios-arrow-round-forward mr-2"></span>Sobre Nós</Link></li>
                <li><Link to="/o-que-fazemos"><span className="ion-ios-arrow-round-forward mr-2"></span>O Que Fazemos</Link></li>
                <li><Link to="/formacoes"><span className="ion-ios-arrow-round-forward mr-2"></span>Formações</Link></li>
                <li><Link to="/galeria"><span className="ion-ios-arrow-round-forward mr-2"></span>Galeria</Link></li>
                <li><Link to="/projectos"><span className="ion-ios-arrow-round-forward mr-2"></span>Projectos</Link></li>
                <li><Link to="/blog"><span className="ion-ios-arrow-round-forward mr-2"></span>Blog</Link></li>
                <li><Link to="/contactos"><span className="ion-ios-arrow-round-forward mr-2"></span>Contactos</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>Copyright &copy; {year} Cassfrei-SIGT, Lda. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

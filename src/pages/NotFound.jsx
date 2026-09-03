import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

function NotFound() {
  return (
    <>
      <PageHeader title="Página não encontrada" />
      <section className="ftco-section">
        <div className="container text-center">
          <p>A página que procura não existe ou foi movida.</p>
          <Link to="/" className="btn btn-primary">Voltar ao Início</Link>
        </div>
      </section>
    </>
  )
}

export default NotFound

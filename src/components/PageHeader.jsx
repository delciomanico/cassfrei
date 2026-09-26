import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

function PageHeader({ title }) {
  return (
    <section className="page-header">
      <div className="container page-header__row">
        <h1 className="page-header__title">{title}</h1>
        <p className="page-header__breadcrumbs">
          <Link to="/">Início</Link>
          <ChevronRight size={12} />
          <span>{title}</span>
        </p>
      </div>
    </section>
  )
}

export default PageHeader

import { Link } from 'react-router-dom'

function PageHeader({ title, bg = '/images/bg_1.jpg' }) {
  return (
    <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: `url('${bg}')` }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 text-center">
            <h1 className="mb-2 bread">{title}</h1>
            <p className="breadcrumbs">
              <span className="mr-2"><Link to="/">Início <i className="ion-ios-arrow-forward"></i></Link></span>
              <span>{title} <i className="ion-ios-arrow-forward"></i></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHeader

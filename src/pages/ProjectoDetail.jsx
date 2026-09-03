import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import PlaceholderMedia from '../components/PlaceholderMedia.jsx'
import Seo from '../components/Seo.jsx'
import projects from '../data/projects.js'
import { breadcrumbJsonLd } from '../lib/seo.js'

function ProjectoDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <>
        <Seo title="Projecto Não Encontrado" description="Não encontrámos o projecto que procura." path={`/projectos/${slug || ''}`} noindex />
        <PageHeader title="Projecto não encontrado" />
        <section className="ftco-section">
          <div className="container text-center">
            <p>Não encontrámos o projecto que procura.</p>
            <Link to="/projectos" className="btn btn-primary">Ver Todos os Projectos</Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Seo
        title={project.title}
        description={project.summary}
        path={`/projectos/${project.slug}`}
        image={project.placeholder ? undefined : project.image}
        jsonLd={breadcrumbJsonLd([
          { name: 'Início', path: '/' },
          { name: 'Projectos', path: '/projectos' },
          { name: project.title, path: `/projectos/${project.slug}` },
        ])}
      />
      <PageHeader title={project.title} />

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <ul className="project-meta">
                <li><strong>Cliente</strong>{project.client}</li>
                <li><strong>Período</strong>{project.period}</li>
              </ul>

              {project.placeholder ? (
                <PlaceholderMedia className="placeholder-media--inline mb-4" />
              ) : (
                <p>
                  <img src={project.image} alt={project.title} className="img-fluid" />
                </p>
              )}

              {project.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              {project.stats && (
                <div className="project-stats">
                  {project.stats.map((stat) => (
                    <div className="stat" key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <p className="mt-5">
                <Link to="/projectos" className="btn btn-outline-primary px-4 py-2">Ver Todos os Projectos</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectoDetail

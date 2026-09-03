import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'
import { breadcrumbJsonLd } from '../lib/seo.js'

function Projectos() {
  return (
    <>
      <Seo
        title="Projectos"
        description="Conheça os projectos de referência da Cassfrei-SIGT em Cadastro, Cartografia e Gestão Territorial, desenvolvidos com instituições públicas e privadas em Angola."
        path="/projectos"
        jsonLd={breadcrumbJsonLd([{ name: 'Início', path: '/' }, { name: 'Projectos', path: '/projectos' }])}
      />
      <PageHeader title="Projectos" />

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            {projects.map((project) => (
              <div className="col-md-4 mb-4" key={project.slug}>
                <ProjectCard project={project} extraClass="mb-4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projectos

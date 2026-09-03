import PageHeader from '../components/PageHeader.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'

function Projectos() {
  return (
    <>
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

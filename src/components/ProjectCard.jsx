import { Link } from 'react-router-dom'
import PlaceholderMedia from './PlaceholderMedia.jsx'

function ProjectCard({ project, extraClass = '' }) {
  return (
    <div
      className={`project img ftco-animate d-flex justify-content-center align-items-center ${extraClass}`.trim()}
      style={project.placeholder ? undefined : { backgroundImage: `url(${project.image})` }}
      data-aos="fade-up"
    >
      {project.placeholder && <PlaceholderMedia />}
      <div className="overlay"></div>
      <Link to={`/projectos/${project.slug}`} className="btn-site d-flex align-items-center justify-content-center">
        <span className="icon-subdirectory_arrow_right"></span>
      </Link>
      <div className="text text-center p-4">
        <h3><Link to={`/projectos/${project.slug}`}>{project.title}</Link></h3>
        <span>{project.client}</span>
      </div>
    </div>
  )
}

export default ProjectCard

import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PlaceholderMedia from './PlaceholderMedia.jsx'

function ProjectCard({ project, extraClass = '' }) {
  return (
    <Link
      to={`/projectos/${project.slug}`}
      className={`project img ftco-animate d-flex justify-content-center align-items-center ${extraClass}`.trim()}
      style={project.placeholder ? undefined : { backgroundImage: `url(${project.image})` }}
      data-aos="fade-up"
    >
      {project.placeholder && <PlaceholderMedia />}
      <div className="overlay"></div>
      <span className="btn-site d-flex align-items-center justify-content-center">
        <ArrowUpRight size={20} />
      </span>
      <div className="text text-center p-4">
        <h3>{project.title}</h3>
        <span>{project.client}</span>
      </div>
    </Link>
  )
}

export default ProjectCard
